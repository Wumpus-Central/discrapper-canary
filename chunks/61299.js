"use strict";
n.d(t, { Y: () => tX, _V: () => tQ });
var i,
    r,
    s = n(627968),
    a = n(64700),
    o = n(342393);
n(284009);
var l = n(17928),
    u = n(691540),
    d = n(857250),
    c = n(97483),
    _ = n(685094),
    h = n(683071),
    f = n(228366),
    E = n(636537),
    p = n(277984),
    m = n(70142),
    g = n(739508),
    A = n(184015),
    I = n(723702),
    T = n(652215);
function S() {
    let e = m.A.getClient();
    null != e &&
        (0, A.j)().then((t) => {
            t.venmo
                .create({ client: e, allowDesktop: !0, paymentMethodUsage: "multi_use" })
                .then((e) => {
                    f.h.dispatch({ type: "BRAINTREE_CREATE_VENMO_CLIENT_SUCCESS", venmoClient: e });
                })
                .catch(() => {
                    f.h.dispatch({ type: "BRAINTREE_CREATE_VENMO_CLIENT_FAIL" });
                });
        });
}
function N() {
    let e = m.A.getClient();
    null != e &&
        (0, A.j)().then((t) => {
            t.paypal
                .create({ client: e })
                .then((e) => {
                    if (null == e._navigateFrameToAuth)
                        throw Error(
                            "braintree client missing _navigateFrameToAuth. did someone upgrade the braintree library?",
                        );
                    (e._navigateFrameToAuth = function (e) {
                        let t = this._formatPaymentResourceData(e);
                        return E.Bo.post({
                            url: T.Rsh.BILLING_PAYPAL_BILLING_AGREEMENT_TOKENS,
                            oldFormErrors: !0,
                            body: { return_url: t.returnUrl, cancel_url: t.cancelUrl },
                            rejectWithError: !1,
                        })
                            .then((e) => {
                                let t,
                                    {
                                        body: { token: n },
                                    } = e;
                                this._frameService.redirect(
                                    ((t = T.Gg3.BRAINTREE.KEY.startsWith("production_")
                                        ? "https://www.paypal.com"
                                        : "https://sandbox.paypal.com"),
                                    `${t}/agreements/approve?nolegacy=1&ba_token=${n}`),
                                );
                            })
                            .catch(
                                (e) => (
                                    this._frameService.close(),
                                    (this._authorizationInProgress = !1),
                                    Promise.reject(Error(e.body && e.body.message))
                                ),
                            );
                    }),
                        f.h.dispatch({ type: "BRAINTREE_CREATE_PAYPAL_CLIENT_SUCCESS", paypalClient: e });
                })
                .catch(() => f.h.dispatch({ type: "BRAINTREE_CREATE_PAYPAL_CLIENT_FAIL" }));
        });
}
function C() {
    let e = m.A.getPayPalClient();
    if (null == e) throw Error("braintree paypal client must be initialized before calling this");
    f.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_START" });
    let t = Promise.resolve("");
    (0, I.isDesktop)() && (t = (0, p.jf)(T.hes.PAYPAL)),
        t
            .then(() => e.tokenize({ flow: "vault" }))
            .then((e) => {
                let { email: t, firstName: n, lastName: i, billingAddress: r } = e.details;
                f.h.dispatch({
                    type: "BRAINTREE_TOKENIZE_PAYPAL_SUCCESS",
                    nonce: e.nonce,
                    email: t,
                    billingAddress: {
                        name: `${n} ${i}`,
                        line1: r.line1,
                        line2: r.line2,
                        city: r.city,
                        state: r.state,
                        country: r.countryCode,
                        postalCode: r.postalCode,
                    },
                });
            })
            .catch((e) => {
                let { message: t, code: n, details: i } = e;
                n === T.Q7O.PAYPAL_POPUP_CLOSED || null == n
                    ? f.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED" })
                    : (f.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_FAIL", message: t, code: n }),
                      g.pM(Error(`Braintree Paypal Error: ${t} ${n} ${i}`)));
            });
}
function y() {
    let e = m.A.getVenmoClient();
    if (null == e) throw Error("Braintree Venmo client must be initialized before calling tokenize.");
    f.h.dispatch({ type: "BRAINTREE_TOKENIZE_VENMO_START" }),
        e
            .tokenize()
            .then((e) => {
                let { username: t } = e.details;
                f.h.dispatch({ type: "BRAINTREE_TOKENIZE_VENMO_SUCCESS", nonce: e.nonce, username: t });
            })
            .catch((e) => {
                let { message: t, code: n, details: i } = e;
                [T.Q7O.VENMO_APP_CANCELED, T.Q7O.VENMO_DESKTOP_CANCELED, T.Q7O.VENMO_CANCELED].includes(n)
                    ? f.h.dispatch({ type: "BRAINTREE_TOKENIZE_VENMO_FAIL_CANCELED" })
                    : (f.h.dispatch({ type: "BRAINTREE_TOKENIZE_VENMO_FAIL", message: t, code: n }),
                      g.pM(Error(`Braintree Venmo Error: ${t} ${n} ${i}`)));
            });
}
function v(e, t) {
    if (null == e) return Promise.resolve();
    f.h.dispatch(t);
    try {
        return Promise.resolve(e.teardown());
    } catch (e) {
        return Promise.resolve();
    }
}
var R = n(391048),
    O = n(292666),
    b = n(812745),
    L = n(825755),
    D = n(375708);
class P extends a.PureComponent {
    componentDidMount() {
        null != this.props.paypalClient && C();
    }
    componentDidUpdate(e) {
        null == e.paypalClient && null != this.props.paypalClient && C();
    }
    componentWillUnmount() {
        v(m.A.getPayPalClient(), { type: "BRAINTREE_TEARDOWN_PAYPAL_CLIENT" }).then(() => {
            null != m.A.getClient() && N();
        });
    }
    render() {
        let { braintreeEmail: e, paypalClient: t } = this.props;
        return (0, s.jsx)(O.k, {
            label: D.intl.string(D.t.QQBAos),
            leading: { type: "image", src: (0, b.Nj)(b.Ay.Types.PAYPAL) },
            value: e,
            readOnly: !0,
            placeholder: null == t ? D.intl.string(D.t.dte2M9) : D.intl.string(D.t.hopw7X),
        });
    }
}
let w = l.Ay.connectStores([m.A, L.A], () => ({
    braintreeEmail: L.A.braintreeEmail,
    paypalClient: m.A.getPayPalClient(),
}))(P);
var M = n(534514),
    x = n(834730),
    U = n(527142);
class k extends a.PureComponent {
    componentDidMount() {
        null != this.props.venmoClient && y();
    }
    componentDidUpdate(e) {
        null == e.venmoClient && null != this.props.venmoClient && y();
    }
    componentWillUnmount() {
        v(m.A.getVenmoClient(), { type: "BRAINTREE_TEARDOWN_VENMO_CLIENT" }).then(() => {
            null != m.A.getClient() && S();
        });
    }
    render() {
        let { venmoUsername: e, className: t, venmoClient: n } = this.props,
            i = null != e && "" !== e;
        return (0, s.jsxs)("div", {
            className: t,
            children: [
                (0, s.jsx)(b.Ay, { type: b.Ay.Types.VENMO, size: b.y3.MEDIUM, className: U.Z }),
                i
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)(M.D, {
                                  variant: e.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
                                  className: U.y,
                                  children: D.intl.format(D.t.DowIre, { venmoUsername: e }),
                              }),
                              (0, s.jsx)(x.E, {
                                  variant: "text-md/medium",
                                  className: U.y,
                                  children: D.intl.string(D.t.kmEvnR),
                              }),
                          ],
                      })
                    : (0, s.jsx)(x.E, {
                          variant: "text-md/medium",
                          className: U.y,
                          children: null == n ? D.intl.string(D.t["2ouZDU"]) : D.intl.string(D.t.mIL6Jb),
                      }),
            ],
        });
    }
}
let G = l.Ay.connectStores([m.A, L.A], () => ({ venmoUsername: L.A.venmoUsername, venmoClient: m.A.getVenmoClient() }))(
    k,
);
var V = n(891197),
    F = n(503698),
    B = n.n(F),
    j = n(305866),
    H = n(287809),
    W = n(832208),
    Y = n(661531),
    K = n(602853),
    $ = n(511274),
    z = n(50579),
    q = n(482188);
let Z = function (e) {
    let t = a.useRef(null),
        { stripeType: n, flipped: i, updateCompleted: r, onFocus: l, onBlur: u } = e,
        [d, c] = a.useState(b.Be.UNKNOWN),
        [_, h] = a.useState(!1),
        [f, E] = a.useState(!1),
        [p, m] = a.useState(null),
        [g, A] = a.useState({}),
        I = (0, o.useElements)(),
        T = a.useCallback(() => {
            if (null != I)
                switch (n) {
                    case "cardNumber": {
                        let e = I.getElement(o.CardNumberElement);
                        if (null == e) return;
                        e.off("change"), e.off("focus"), e.off("blur");
                        break;
                    }
                    case "cardExpiry": {
                        let e = I.getElement(o.CardExpiryElement);
                        if (null == e) return;
                        e.off("change"), e.off("focus"), e.off("blur");
                        break;
                    }
                    case "cardCvc": {
                        let e = I.getElement(o.CardCvcElement);
                        if (null == e) return;
                        e.off("change"), e.off("focus"), e.off("blur");
                    }
                }
        }, [I, n]),
        S = a.useCallback(
            (e) => {
                f || e.empty || E(!0), null != r && r(e.complete), null != e.error && h(!1);
            },
            [f, r],
        ),
        N = a.useCallback(() => {
            h(!0), l?.();
        }, [l]),
        C = a.useCallback(() => {
            h(!1), u?.();
        }, [u]),
        y = a.useCallback(() => {
            if (null != I)
                switch (n) {
                    case "cardNumber": {
                        let e = I.getElement(o.CardNumberElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            d !== e.brand && c(e.brand),
                                e.empty && f
                                    ? m(D.intl.string(D.t.eOIfuy))
                                    : null != e.error
                                      ? m(D.intl.string(D.t.x4pWtJ))
                                      : m(null),
                                S(e);
                        }),
                            e.on("focus", N),
                            e.on("blur", C);
                        break;
                    }
                    case "cardExpiry": {
                        let e = I.getElement(o.CardExpiryElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            null != e.error || (e.empty && f) ? m(D.intl.string(D.t["9/zZdl"])) : m(null), S(e);
                        }),
                            e.on("focus", N),
                            e.on("blur", C);
                        break;
                    }
                    case "cardCvc": {
                        let e = I.getElement(o.CardCvcElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            null != e.error || (e.empty && f) ? m(D.intl.string(D.t.ro4isZ)) : m(null), S(e);
                        }),
                            e.on("focus", N),
                            e.on("blur", C);
                    }
                }
        }, [C, S, N, d, I, f, n]);
    a.useEffect(
        () => (
            y(),
            () => {
                T();
            }
        ),
        [y, T],
    );
    let v = (0, K.r)(Y.A.colors.TEXT_SUBTLE).hex(),
        R = (0, K.r)(Y.A.colors.TEXT_STRONG).hex();
    function O() {
        return B()(z.vB, { [z.Tn]: null !== p, [z.iH]: _, [z.yD]: "cardNumber" === n });
    }
    return (
        a.useLayoutEffect(() => {
            let { current: e } = t;
            if (null == e) return;
            let n = window.getComputedStyle(e),
                i = n.getPropertyValue("font-family");
            A({
                base: {
                    fontFamily: i,
                    fontWeight: n.getPropertyValue("font-weight"),
                    color: R,
                    fontSize: n.getPropertyValue("font-size"),
                    "::placeholder": { color: v },
                },
            });
        }, [t, v, R]),
        (0, s.jsxs)("div", {
            className: z.Zm,
            "data-stripe-type": n,
            children: [
                (0, s.jsx)("div", { ref: t, className: B()(z.iw, q.hF) }),
                (function () {
                    switch (n) {
                        case "cardNumber":
                            return (0, s.jsxs)("div", {
                                children: [
                                    (0, s.jsx)(b.Ay, { className: z.Ie, type: d, flipped: i }),
                                    (0, s.jsx)(o.CardNumberElement, {
                                        options: { style: g, placeholder: D.intl.string(D.t.gPRHfw), disableLink: !1 },
                                        className: O(),
                                    }),
                                ],
                            });
                        case "cardExpiry":
                            return (0, s.jsx)(o.CardExpiryElement, {
                                options: { style: g, placeholder: D.intl.string(D.t.xeEWQ6) },
                                className: O(),
                            });
                        case "cardCvc":
                            return (0, s.jsx)(o.CardCvcElement, {
                                options: { style: g, placeholder: D.intl.string(D.t.wZz04F) },
                                className: O(),
                            });
                    }
                })(),
                (0, s.jsx)($.U, { error: p }),
            ],
        })
    );
};
var X = n(483770),
    Q = n(536439);
let J = function (e) {
    let { onCardInfoChange: t, error: n } = e,
        i = a.useRef(t),
        [r, o] = a.useState(!1),
        [l, u] = a.useState({}),
        [d, c] = a.useState({ name: "", country: "", postalCode: "" }),
        [_, h] = a.useState({}),
        [f, E] = a.useState({}),
        { setFocusLockDisabled: p } = a.useContext(j.M);
    a.useEffect(() => () => {
        void 0 !== p && p(!1);
    });
    let m = a.useCallback(() => {
        void 0 !== p && p(!0);
    }, [p]);
    function g(e, t) {
        !!l[e] !== t && u((n) => ({ ...n, [e]: t }));
    }
    let A = a.useCallback(
        function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = {};
            return (e || _.name) && "" === d.name && (t.name = D.intl.string(D.t.lIkVsi)), t;
        },
        [_, d],
    );
    return (
        a.useEffect(() => {
            let e = l.cardNumber && l.cardExpiry && l.cardCvc && 0 === Object.keys(A(!0)).length;
            i.current({ name: d.name }, !!e);
        }, [l, d, A]),
        (0, s.jsxs)("div", {
            children: [
                H.default.getCurrentUser()?.nsfwAllowed
                    ? (0, s.jsxs)("div", {
                          className: X.Rm,
                          children: [
                              (0, s.jsx)("div", { className: B()(b.y3.SMALL, X.eo, X.Ud) }),
                              (0, s.jsx)("div", { className: B()(b.y3.SMALL, X.DR, X.Ud) }),
                              (0, s.jsx)("div", { className: B()(b.y3.SMALL, X.k4, X.Ud) }),
                              (0, s.jsx)("div", { className: B()(b.y3.SMALL, X.a3, X.Ud) }),
                              (0, s.jsx)("div", { className: B()(b.y3.SMALL, X.CY, X.Ud) }),
                              (0, s.jsx)("div", { className: B()(b.y3.SMALL, X.Q5, X.Ud) }),
                              (0, s.jsx)("div", { className: B()(b.y3.SMALL, X.YA, X.Ud) }),
                          ],
                      })
                    : (0, s.jsxs)("div", {
                          className: X.Rm,
                          children: [
                              (0, s.jsx)("div", { className: B()(b.y3.SMALL, X.aq, X.Ud) }),
                              (0, s.jsx)("div", { className: B()(b.y3.SMALL, X.VX, X.Ud) }),
                              (0, s.jsx)("div", { className: B()(b.y3.SMALL, X.Yi, X.Ud) }),
                              (0, s.jsx)("div", { className: B()(b.y3.SMALL, X.qR, X.Ud) }),
                              (0, s.jsx)("div", { className: B()(b.y3.SMALL, X.m2, X.Ud) }),
                              (0, s.jsx)("div", { className: B()(b.y3.SMALL, X.Ij, X.Ud) }),
                              (0, s.jsx)("div", { className: B()(b.y3.SMALL, X._V, X.Ud) }),
                          ],
                      }),
                (0, s.jsx)(W.A, {
                    form: [
                        {
                            fields: [
                                {
                                    id: "card-number",
                                    name: "cardNumber",
                                    title: () => D.intl.string(D.t.cVyJ3o),
                                    getClassNameForLayout: () => Q.c6,
                                    renderInput: () =>
                                        (0, s.jsx)(Z, {
                                            stripeType: "cardNumber",
                                            flipped: r,
                                            updateCompleted: (e) => g("cardNumber", e),
                                            onFocus: m,
                                        }),
                                },
                            ],
                        },
                        {
                            fields: [
                                {
                                    id: "card-expiration-date",
                                    name: "cardExpiry",
                                    title: () => D.intl.string(D.t["CeBa/4"]),
                                    getClassNameForLayout: () => Q.ep,
                                    renderInput: () =>
                                        (0, s.jsx)(Z, {
                                            stripeType: "cardExpiry",
                                            updateCompleted: (e) => g("cardExpiry", e),
                                            onFocus: m,
                                        }),
                                },
                                {
                                    id: "card-cvc",
                                    name: "cardCvc",
                                    title: () => D.intl.string(D.t.Fd3rOz),
                                    getClassNameForLayout: () => Q.ep,
                                    renderInput: () =>
                                        (0, s.jsx)(Z, {
                                            stripeType: "cardCvc",
                                            updateCompleted: (e) => g("cardCvc", e),
                                            onFocus: () => {
                                                m(), o(!0);
                                            },
                                            onBlur: () => {
                                                o(!1);
                                            },
                                        }),
                                },
                            ],
                        },
                        {
                            fields: [
                                {
                                    id: "card-name",
                                    name: "name",
                                    title: () => D.intl.string(D.t.VUlFdU),
                                    autoComplete: "cc-name",
                                    placeholder: () => D.intl.string(D.t["yf7ms+"]),
                                    getClassNameForLayout: () => Q.c6,
                                    renderInput: (e) => (0, s.jsx)(O.k, { ...e }),
                                },
                            ],
                        },
                    ],
                    errors: f,
                    formError: n,
                    values: d,
                    onFieldChange: function (e, t) {
                        if ("name" !== t && "country" !== t && "postalCode" !== t) return;
                        let n = { ...d },
                            i = { ..._ },
                            r = { name: f.name };
                        _[t] || "" === e || (i[t] = !0),
                            (n[t] = e),
                            i[t] && "" === e ? "name" === t && (r.name = D.intl.string(D.t.lIkVsi)) : delete r[t],
                            c(n),
                            h(i),
                            E(r);
                    },
                    onFieldBlur: function () {
                        E(A());
                    },
                }),
            ],
        })
    );
};
var ee =
    (((i = {}).SELECT_PLAN = "select_plan"),
    (i.PAYMENT_TYPE = "payment_type"),
    (i.PAYPAL = "paypal"),
    (i.PAYPAL_ADDRESS = "paypal_address"),
    (i.PAYMENT_REQUEST_INFO = "payment_request_info"),
    (i.CREDIT_CARD_INFORMATION = "credit_card_information"),
    (i.ADDRESS = "address"),
    (i.REVIEW = "review"),
    (i.CONFIRM = "confirm"),
    (i.AWAITING_AUTHENTICATION = "awaiting_authentication"),
    (i.VENMO = "venmo"),
    (i.VENMO_ADDRESS = "venmo_address"),
    i);
function et(e) {
    if (null != e) {
        if (e.hasCardError()) return "credit_card_information";
        if (e.hasAddressError()) return "address";
    }
    return null;
}
var en = n(723429);
function ei(e) {
    let { billingError: t, onCardInfoChange: n } = e,
        i = null != t && (null == t.code || et(t) === ee.CREDIT_CARD_INFORMATION);
    return (0, s.jsxs)(a.Fragment, {
        children: [
            i
                ? (0, s.jsx)("div", {
                      className: en.QK,
                      children: (0, s.jsx)(h.w, { type: "critical", children: D.intl.string(D.t["4vnhKV"]) }),
                  })
                : null,
            (0, s.jsx)(J, { onCardInfoChange: n, error: t }),
        ],
    });
}
function er(e) {
    let { className: t, submitting: n, stripePaymentMethod: i } = e,
        { card: r } = i ?? {},
        a = null != r ? b.Ay.getType(r.brand) : b.Ay.Types.UNKNOWN;
    return (0, s.jsx)("div", {
        className: t,
        children: (0, s.jsx)(O.k, {
            label: D.intl.string(D.t["mmDvV+"]),
            leading: { type: "image", src: (0, b.Nj)(a) },
            value: n && null != r ? D.intl.formatToPlainString(D.t.bCynoK, r) : void 0,
            readOnly: !0,
            placeholder: D.intl.string(D.t.bWMH78),
        }),
    });
}
var es = n(964486),
    ea = n(475743),
    eo = n(446044),
    el = n(721101),
    eu = n(648335),
    ed = n(384365);
let ec = function (e) {
    let { onAccountHolderNameChange: t, billingAddressInfo: n } = e,
        i = a.useRef(null);
    return (0, s.jsx)("div", {
        className: ed.r,
        children: (0, s.jsx)(O.k, {
            label: D.intl.string(D.t.sN3wrd),
            inputRef: i,
            name: D.intl.string(D.t.sN3wrd),
            placeholder: D.intl.string(D.t.sN3wrd),
            onChange: (e) => t(e),
            value: n.name,
        }),
    });
};
var e_ = n(462887),
    eh = n(331322),
    ef = n(736653),
    eE = n(818348),
    ep = n(198650);
let em = function (e) {
    let t = (0, ef.Ay)(),
        n = a.useRef(null),
        [i, r] = a.useState({}),
        l = (0, K.r)(Y.A.colors.BACKGROUND_BASE_LOWER).hex();
    switch (
        (a.useLayoutEffect(() => {
            let { current: e } = n;
            if (null == e) return;
            let t = window.getComputedStyle(e),
                i = window.getComputedStyle(e, "::placeholder"),
                s = t.getPropertyValue("font-family"),
                a = t.getPropertyValue("font-weight");
            r({
                base: {
                    fontFamily: s,
                    fontWeight: a,
                    color: t.getPropertyValue("color"),
                    fontSize: t.getPropertyValue("font-size"),
                    backgroundColor: l,
                    padding: "12px",
                    "::placeholder": { color: i.getPropertyValue("color") },
                    borderRadius: Y.A.radii.xs,
                },
            });
        }, [n, l]),
        e.type)
    ) {
        case eE.he.PRZELEWY24: {
            let r = (0, e_.M)(t) ? "/assets/f4150b3aed6c4679.svg" : "/assets/8b825aafb2e4dbed.svg",
                { onNameChange: a, onEmailChange: l, onP24BankChange: u, p24BankValue: d, billingAddressInfo: c } = e;
            return (0, s.jsx)("div", {
                className: ep.rf,
                children: (0, s.jsxs)(eh.B, {
                    gap: 16,
                    children: [
                        (0, s.jsx)(O.k, {
                            label: D.intl.string(D.t["w/qqKK"]),
                            inputRef: n,
                            name: D.intl.string(D.t["w/qqKK"]),
                            placeholder: D.intl.string(D.t["w/qqKK"]),
                            onChange: (e) => l(e),
                            value: c.email,
                        }),
                        (0, s.jsx)(O.k, {
                            label: D.intl.string(D.t["yf7ms+"]),
                            name: D.intl.string(D.t["yf7ms+"]),
                            placeholder: D.intl.string(D.t["yf7ms+"]),
                            onChange: (e) => a(e),
                            value: c.name,
                        }),
                        (0, s.jsxs)(eh.B, {
                            gap: 4,
                            children: [
                                (0, s.jsx)(x.E, { variant: "text-sm/semibold", children: D.intl.string(D.t.De3b8t) }),
                                (0, s.jsx)(o.P24BankElement, {
                                    options: { value: d, style: i },
                                    onChange: (e) => u(e.value),
                                }),
                                (0, s.jsx)("div", {
                                    className: ep.je,
                                    children: (0, s.jsx)("img", { src: r, alt: "Przelewy24" }),
                                }),
                            ],
                        }),
                    ],
                }),
            });
        }
        case eE.he.EPS: {
            let { onAccountHolderNameChange: r, onEPSBankChange: a, epsBankValue: l, billingAddressInfo: u } = e,
                d = (0, e_.M)(t) ? "/assets/025b24b0055c8d81.svg" : "/assets/1dae7d71a65fd90f.svg";
            return (0, s.jsx)("div", {
                className: ep.rf,
                children: (0, s.jsxs)(eh.B, {
                    gap: 16,
                    children: [
                        (0, s.jsx)(O.k, {
                            label: D.intl.string(D.t.sN3wrd),
                            inputRef: n,
                            name: D.intl.string(D.t.sN3wrd),
                            placeholder: D.intl.string(D.t.sN3wrd),
                            onChange: (e) => r(e),
                            value: u.name,
                        }),
                        (0, s.jsxs)(eh.B, {
                            gap: 4,
                            children: [
                                (0, s.jsx)(x.E, { variant: "text-sm/semibold", children: D.intl.string(D.t.dFyV07) }),
                                (0, s.jsx)(o.EpsBankElement, {
                                    options: { value: l, style: i },
                                    onChange: (e) => a(e.value),
                                }),
                                (0, s.jsx)("div", {
                                    className: ep.je,
                                    children: (0, s.jsx)("img", { src: d, alt: "EPS" }),
                                }),
                            ],
                        }),
                    ],
                }),
            });
        }
        default:
            throw Error("unknown payment source type");
    }
};
var eg = n(71804),
    eA = n(31823);
n(426398), n(211083);
var eI = n(872452);
n(21713);
var eT = n(650170),
    eS = n(783327),
    eN = n(626584),
    eC = n(166532),
    ey = n(69494),
    ev = n(901930),
    eR = n(19311),
    eO = n(482132),
    eb = n(615310),
    eL = n(364840),
    eD = n(73825),
    eP = n(558620),
    ew = n(683433),
    eM = n(36167),
    ex = n(937008),
    eU = (((r = {})[(r.UNKNOWN = 0)] = "UNKNOWN"), (r[(r.PENDING = 1)] = "PENDING"), (r[(r.DONE = 2)] = "DONE"), r);
let ek = 0,
    eG = null,
    eV = null,
    eF = null;
class eB extends l.Ay.Store {
    static displayName = "BrowserCheckoutStateStore";
    get browserCheckoutState() {
        return ek;
    }
    get loadId() {
        return eG;
    }
    get skuId() {
        return eV;
    }
    get planId() {
        return eF;
    }
}
let ej = new eB(f.h, {
    USER_PAYMENT_BROWSER_CHECKOUT_STARTED: function (e) {
        (ek = 1), (eG = e.loadId);
    },
    USER_PAYMENT_BROWSER_CHECKOUT_DONE: function (e) {
        eG === e.loadId && ((eV = e.skuId ?? null), (eF = e.skuSubscriptionPlanId ?? null), (ek = 2));
    },
});
var eH = n(202541),
    eW = n(647926);
let eY = (e) => {
    let t,
        { step: n, onPurchaseComplete: i, onHandoffFailure: r } = e,
        {
            setSelectedSkuId: o,
            setSelectedPlanId: u,
            contextMetadata: d,
        } = (0, eT.t4)((e) => ({
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            contextMetadata: e.contextMetadata,
        })),
        {
            browserCheckoutState: c,
            browserCheckoutStateLoadId: _,
            browserCheckoutStateSkuId: h,
            browserCheckoutStatePlanId: f,
        } = (0, l.cf)([ej], () => ({
            browserCheckoutState: ej.browserCheckoutState,
            browserCheckoutStateLoadId: ej.loadId,
            browserCheckoutStateSkuId: ej.skuId,
            browserCheckoutStatePlanId: ej.planId,
        })),
        E = (0, eP.A)(),
        { isGift: m } = (0, ex.Pv)(),
        [g, A] = a.useState(!1);
    switch (n) {
        case eC.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
            t = T.do8.GOOGLE_PAY;
            break;
        case eC.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
            t = T.do8.APPLE_PAY;
    }
    return (
        a.useEffect(() => {
            let e = setTimeout(() => {
                g ||
                    (A(!0),
                    (0, p.Ze)(d.loadId),
                    (0, eM.my)(
                        {
                            planId: E?.id ?? eH.gD.PREMIUM_MONTH_TIER_2,
                            isGift: m,
                            loadId: d.loadId,
                            paymentMethodType: t,
                        },
                        r,
                    ));
            }, 1e3);
            return () => clearTimeout(e);
        }, [E, m, d, r, A, g, t]),
        a.useEffect(() => {
            null !== h && (eH.oz.includes(h) && ((0, eD.ur)(h), (0, p.hP)()), o(h)),
                null !== f && u(f),
                _ === d.loadId && c === eU.DONE && i();
        }, [o, u, c, _, h, f, d, i]),
        (0, s.jsxs)("div", {
            className: eW.rf,
            children: [
                (0, s.jsx)(M.D, { variant: "heading-xl/bold", children: D.intl.string(D.t.C4HYfy) }),
                (0, s.jsx)(x.E, { variant: "text-md/normal", className: eW.h_, children: D.intl.string(D.t.xfG7Jp) }),
            ],
        })
    );
};
function eK(e) {
    let { onPrimaryClick: t, onBackClick: n } = e;
    return (0, s.jsx)(eL.j, {
        children: (0, s.jsxs)("div", {
            className: eW.kL,
            children: [
                (0, s.jsx)(ew.A, { onClick: n }),
                (0, s.jsx)(ew.F, { onClick: t, children: D.intl.string(D.t["4Qvmmj"]) }),
            ],
        }),
    });
}
var e$ = n(615405),
    ez = n(153084),
    eq = n(295405),
    eZ = n(71319),
    eX = n(67480),
    eQ = n(174459),
    eJ = n(427262),
    e0 = n(251913),
    e1 = n(632638),
    e2 = n(632088);
let e3 = null,
    e6 = null;
class e4 extends l.Ay.Store {
    static displayName = "AdyenStore";
    get client() {
        return e3;
    }
    get cashAppPayComponent() {
        return e6;
    }
}
let e5 = new e4(f.h, {
    ADYEN_CREATE_CLIENT_SUCCESS: function (e) {
        let { client: t } = e;
        e3 = t;
    },
    ADYEN_TEARDOWN_CLIENT: function () {
        e3 = null;
    },
    ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS: function (e) {
        let { component: t } = e;
        e6 = t;
    },
});
async function e7() {
    return await E.Bo.get({ url: T.Rsh.BILLING_ADYEN_PAYMENT_METHODS, oldFormErrors: !0, rejectWithError: !1 });
}
async function e8() {
    try {
        let e = await e7(),
            { default: t } = await Promise.all([n.e("94678"), n.e("40002")]).then(n.bind(n, 971193)),
            i = await t({
                environment: T.Gg3.ADYEN.KEY.startsWith("live_") ? "live" : "test",
                clientKey: T.Gg3.ADYEN.KEY,
                analytics: { enabled: !1 },
                paymentMethodsResponse: e.body,
            });
        f.h.dispatch({ type: "ADYEN_CREATE_CLIENT_SUCCESS", client: i }),
            (function (e) {
                if (null != e5.cashAppPayComponent) {
                    te(), e9();
                    return;
                }
                let t = e
                    .create("cashapp", {
                        showPayButton: !1,
                        enableStoreDetails: !1,
                        storePaymentMethod: !0,
                        setStatusAutomatically: !1,
                        onSubmit: (e) => {
                            let { data: t, isValid: n } = e;
                            if (n) f.h.dispatch({ type: "ADYEN_CASH_APP_PAY_SUBMIT_SUCCESS", data: t });
                            else throw (0, p.i0)("Cash App Pay setup attempt is not valid.");
                        },
                        onError: (e) => {
                            let t,
                                n = !0;
                            if ("CANCEL" !== e.name) {
                                switch (e.message) {
                                    case "Payment declined by CashAppPay":
                                        n = !1;
                                        break;
                                    case "Something went wrong during customerRequest creation":
                                        (n = !1), (t = D.intl.string(D.t.TJ8dDB));
                                }
                                (0, p.i0)(e.message, n, t);
                            }
                        },
                    })
                    .mount(`#${e2.h}`);
                f.h.dispatch({ type: "ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS", component: t });
            })(i);
    } catch (e) {
        (0, g.pM)(e), f.h.dispatch({ type: "ADYEN_CREATE_CLIENT_FAIL" });
    }
}
function e9() {
    let e = e5.cashAppPayComponent;
    if (null == e) throw Error("Adyen CashAppPay component must be created before mounting.");
    try {
        e.mount(`#${e2.h}`);
    } catch (e) {}
}
function te() {
    e5.cashAppPayComponent?.unmount();
}
function tt() {
    let e = e5.cashAppPayComponent;
    if (null == e) throw Error("Adyen CashAppPay component must be created before submitting.");
    e.submit();
}
var tn = n(40417);
function ti(e) {
    let { className: t } = e,
        n = (0, l.bG)([e5], () => e5.cashAppPayComponent),
        i = (0, l.bG)([L.A], () => L.A.adyenPaymentData);
    a.useEffect(
        () => (
            null == i && null != n && (e9(), tt()),
            () => {
                te();
            }
        ),
        [i, n],
    );
    let r = i?.paymentMethod?.cashtag ?? "",
        o = null != i && "" !== r;
    return (0, s.jsxs)("div", {
        className: t,
        children: [
            (0, s.jsx)(b.Ay, { type: b.Ay.Types.CASH_APP, size: b.y3.MEDIUM, className: tn.K }),
            o
                ? (0, s.jsxs)(s.Fragment, {
                      children: [
                          (0, s.jsx)(M.D, {
                              variant: r.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
                              className: tn.y,
                              children: D.intl.format(D.t["ze/1yE"], { cashtag: r }),
                          }),
                          (0, s.jsx)(x.E, {
                              variant: "text-md/medium",
                              className: tn.y,
                              children: D.intl.string(D.t.VPOx7N),
                          }),
                      ],
                  })
                : (0, s.jsx)(x.E, {
                      variant: "text-md/medium",
                      className: tn.y,
                      children: null == n ? D.intl.string(D.t["CgVe/w"]) : D.intl.string(D.t["1MqcjI"]),
                  }),
        ],
    });
}
var tr = n(73079),
    ts = n(459357),
    ta = n(550238),
    to = n(869177),
    tl = n(71532),
    tu = n(218075);
let td = [eC.pn.PAYMENT_TYPE],
    tc = [eC.pn.PAYMENT_TYPE, eC.pn.CREDIT_CARD_INFORMATION, eC.pn.ADDRESS],
    t_ = [eC.pn.PAYMENT_TYPE, eC.pn.PAYPAL_INFORMATION, eC.pn.ADDRESS],
    th = [eC.pn.PAYMENT_TYPE, eC.pn.VENMO_INFORMATION, eC.pn.ADDRESS],
    tf = [eC.pn.PAYMENT_TYPE, eC.pn.CASH_APP_INFORMATION, eC.pn.ADDRESS],
    tE = [eC.pn.PAYMENT_TYPE, eC.pn.PRZELEWY24_INFORMATION, eC.pn.ADDRESS],
    tp = [eC.pn.PAYMENT_TYPE, eC.pn.EPS_INFORMATION, eC.pn.ADDRESS],
    tm = [eC.pn.PAYMENT_TYPE, eC.pn.IDEAL_INFORMATION, eC.pn.ADDRESS],
    tg = [eC.pn.PAYMENT_TYPE, eC.pn.ADDRESS],
    tA = {
        SHARED_ADD_PAYMENT_STEPS: td,
        SHARED_CREDIT_CARD_STEPS: tc,
        SHARED_PAYPAL_STEPS: t_,
        SHARED_VENMO_STEPS: th,
        SHARED_PRZELEWY24_STEPS: tE,
        SHARED_EPS_STEPS: tp,
        SHARED_IDEAL_STEPS: tm,
        SHARED_CASH_APP_STEPS: tf,
        SHARED_TYPE_AND_ADDRESS_STEPS: tg,
    },
    tI = {
        SHARED_ADD_PAYMENT_STEPS: [eC.pn.PAYMENT_ELEMENT],
        SHARED_CREDIT_CARD_STEPS: [eC.pn.PAYMENT_ELEMENT, eC.pn.ADDRESS],
        SHARED_PAYPAL_STEPS: [eC.pn.PAYMENT_ELEMENT, eC.pn.PAYPAL_INFORMATION, eC.pn.ADDRESS],
        SHARED_VENMO_STEPS: [eC.pn.PAYMENT_ELEMENT, eC.pn.VENMO_INFORMATION, eC.pn.ADDRESS],
        SHARED_CASH_APP_STEPS: [eC.pn.PAYMENT_ELEMENT, eC.pn.CASH_APP_INFORMATION, eC.pn.ADDRESS],
        SHARED_PRZELEWY24_STEPS: [eC.pn.PAYMENT_ELEMENT, eC.pn.PRZELEWY24_INFORMATION, eC.pn.ADDRESS],
        SHARED_EPS_STEPS: [eC.pn.PAYMENT_ELEMENT, eC.pn.EPS_INFORMATION, eC.pn.ADDRESS],
        SHARED_IDEAL_STEPS: [eC.pn.PAYMENT_ELEMENT, eC.pn.ADDRESS],
        SHARED_TYPE_AND_ADDRESS_STEPS: [eC.pn.PAYMENT_ELEMENT, eC.pn.ADDRESS],
    };
var tT = n(801753);
function tS(e) {
    return () => (null != L.A.error && (0, R.ET)(), e());
}
function tN(e) {
    let { onPrimary: t, onBack: n, ...i } = e,
        r = t;
    null != t && (r = tS(t));
    let a = n;
    return null != n && (a = tS(n)), (0, s.jsx)(eR.Ay, { ...i, onPrimary: r, onBack: a });
}
function tC(e) {
    let { paymentSourceTypeRestrictions: t } = e,
        n = null != t && t.length > 0 ? tu.fU.ADD_NEW_PAYMENT_METHOD : void 0,
        { enabled: i } = (0, ts.c)({ location: "AddPaymentStep" });
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(tu.je, { paymentRestrictionBannerType: n }),
            (0, s.jsx)(tr.A, { ...e }),
            i && (0, s.jsx)(eI.Z4, { className: tT.SO }),
        ],
    });
}
function ty(e) {
    let {
            prependSteps: t,
            appendSteps: n,
            analyticsLocation: i,
            isEligibleForTrial: r,
            allowDesktopRedirectPurchase: a,
            onPaymentRequestSourceFailed: o,
            paymentModalArgs: l,
            handleStepChange: u,
            setPaymentMethodSteps: d,
            setPaymentRequestPaymentMethod: c,
            currentStep: _,
            setInfoNotice: h,
            completeSteps: f,
            paymentSourceTypeRestrictions: E,
            CREDIT_CARD_STEPS: m,
            PAYPAL_STEPS: g,
            VENMO_STEPS: A,
            PAYMENT_REQUEST_STEPS: T,
            PRZELEWY24_STEPS: S,
            EPS_STEPS: N,
            IDEAL_STEPS: C,
            CASH_APP_STEPS: y,
            setConnectorPaymentRequestReady: v,
            connectorPaymentRequestRef: O,
        } = e,
        { activitySessionId: b } = (0, eA.V)(),
        P = (0, eT.t4)((e) => e.contextMetadata),
        { setBillingAddressState: w } = l;
    function M(e, i) {
        switch (e) {
            case eE.he.CARD:
                a ? u(eC.pn.AWAITING_BROWSER_CHECKOUT) : (d(m), u(eC.pn.CREDIT_CARD_INFORMATION));
                break;
            case eE.he.PAYPAL:
                d(g), u(eC.pn.PAYPAL_INFORMATION);
                break;
            case eE.he.VENMO:
                d(A), u(eC.pn.VENMO_INFORMATION);
                break;
            case eE.he.PAYMENT_REQUEST:
                a && "googlePay" === i
                    ? u(eC.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY)
                    : a && "applePay" === i
                      ? u(eC.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY)
                      : (d(T), u(eC.pn.PAYMENT_REQUEST_INFORMATION));
                break;
            case eE.he.PRZELEWY24:
                d(S), u(eC.pn.PRZELEWY24_INFORMATION);
                break;
            case eE.he.EPS:
                d(N), u(eC.pn.EPS_INFORMATION);
                break;
            case eE.he.IDEAL:
                d(C), u(eC.pn.IDEAL_INFORMATION);
                break;
            case eE.he.CASH_APP:
                d(y), u(eC.pn.CASH_APP_INFORMATION);
                break;
            case eE.he.GIROPAY:
            case eE.he.PAYSAFE_CARD:
            case eE.he.GCASH:
            case eE.he.GRABPAY_MY:
            case eE.he.MOMO_WALLET:
            case eE.he.KAKAOPAY:
            case eE.he.GOPAY_WALLET:
            case eE.he.BANCONTACT:
                d({ steps: [...t, ...tg, ...n], methodType: e }), u(eC.pn.ADDRESS);
        }
        null != L.A.error && (0, R.ET)();
    }
    async function x(e, t) {
        if (((0, R.mf)(e), null == e)) return void o();
        c(e);
        let { billingAddressInfo: n } = (0, tl.uK)(e),
            r = (0, ta.Qd)(n);
        if (((null == n.name || "" === n.name) && null != t && (n.name = t), w({ isValid: r, info: n }), !r))
            return void u(eC.pn.ADDRESS);
        try {
            var s;
            (s = await (0, p.Tv)(e, n, i)), w((e) => ({ ...e, info: n })), d(T), f(s);
        } catch (e) {
            o();
        }
    }
    if (_ === eC.pn.ATTEMPT_GOOGLE_PAY || _ === eC.pn.ATTEMPT_APPLE_PAY) {
        let e = D.intl.string(_ === eC.pn.ATTEMPT_APPLE_PAY ? D.t.czhXDv : D.t.Zj2xQ0);
        return (0, s.jsx)(to.V, {
            onChooseType: M,
            paymentRequestWallet: _ === eC.pn.ATTEMPT_APPLE_PAY ? "applePay" : "googlePay",
            onStripePaymentMethodReceived: x,
            onPaymentRequestFailure: () => {
                M(eE.he.CARD), h(e);
            },
            onValidPaymentRequest: () => v(!0),
            paymentRequestRef: O,
        });
    }
    let U = !(0, I.isDesktop)() || a;
    return (0, s.jsx)(tC, {
        onChooseType: M,
        onStripePaymentMethodReceived: x,
        paymentRequestWallets: U ? ["googlePay", "applePay"] : [],
        isEligibleForTrial: r,
        paymentRequestPaymentContext: { contextMetadata: P, activitySessionId: b },
        paymentSourceTypeRestrictions: E,
    });
}
function tv(e) {
    let {
        onReturn: t,
        shouldUseManaModal: n,
        handleStepChange: i,
        currentStep: r,
        connectorPaymentRequestReady: a,
        showConnectorPaymentRequest: o,
    } = e;
    if (r === eC.pn.ATTEMPT_GOOGLE_PAY || r === eC.pn.ATTEMPT_APPLE_PAY) {
        let e = D.intl.string(r === eC.pn.ATTEMPT_APPLE_PAY ? D.t.WoXvJL : D.t.wnVVr0);
        return (0, s.jsx)(tN, {
            onBack: () => i(eC.pn.PAYMENT_TYPE),
            primaryCTA: eR.Ay.CTAType.CONTINUE,
            primaryText: e,
            onPrimary: () => o(),
            primaryDisabled: !a,
            shouldUseManaModal: n,
        });
    }
    return (0, s.jsx)(tN, { onBack: t, shouldUseManaModal: n });
}
var tR = n(198970),
    tO = n(116673),
    tb = n(773669);
let tL = (e) => {
    let t,
        { billingAddressInfo: n, billingError: i, onBillingAddressChange: r, paymentSourceType: o } = e,
        u = null != i && (null == i.code || et(i) === ee.ADDRESS),
        d = (0, l.bG)([tb.default], () => tb.default.locale);
    switch (o) {
        case T.hes.GIROPAY:
        case T.hes.PAYSAFE_CARD:
        case T.hes.GCASH:
        case T.hes.GRABPAY_MY:
        case T.hes.MOMO_WALLET:
        case T.hes.KAKAOPAY:
        case T.hes.GOPAY_WALLET:
        case T.hes.BANCONTACT:
            t = "en-US" === d ? tR.Ay.Layouts.MODAL_US_WITH_NAME : tR.Ay.Layouts.MODAL_INTL_WITH_NAME;
            break;
        case T.hes.VENMO:
        case T.hes.CASH_APP:
            t = tR.Ay.Layouts.MODAL_US_WITH_NAME;
            break;
        default:
            t = "en-US" === d ? tR.Ay.Layouts.MODAL_US : tR.Ay.Layouts.MODAL_INTL;
    }
    let c = (0, tO.z)();
    0 === n.country.length && null != c && c.length > 0 && (n.country = c[0]);
    let _ = (0, l.bG)([H.default], () => H.default.getCurrentUser()?.storeCountry?.isLocked === !0)
        ? D.intl.string(D.t.Pg2hU0)
        : null;
    return (0, s.jsxs)(a.Fragment, {
        children: [
            u
                ? (0, s.jsx)("div", {
                      className: en.QK,
                      children: (0, s.jsx)(h.w, { type: "critical", children: D.intl.string(D.t.vZ8y7l) }),
                  })
                : null,
            (0, s.jsx)(tR.Ay, {
                className: en.__invalid_formItem,
                onBillingAddressChange: r,
                error: i,
                layout: t,
                allowedBillingAddressCountries: c,
                countryHelperText: _,
                ...n,
            }),
        ],
    });
};
var tD = n(908166),
    tP = n(930767),
    tw = n(891640);
let tM = new eN.A("AddPaymentAddressStep.tsx");
function tx(e) {
    let { billingAddressInfo: t, onBillingAddressChange: n, paymentSourceType: i } = e,
        r = (0, l.bG)([L.A], () => L.A.error);
    return (0, s.jsx)(tL, { billingAddressInfo: t, billingError: r, onBillingAddressChange: n, paymentSourceType: i });
}
function tU(e) {
    let { paymentModalArgs: t, shouldUsePaymentElement: n, paymentSourceType: i } = e,
        { billingAddressState: r, setBillingAddressState: a } = t;
    return n
        ? null
        : (0, s.jsx)(tx, {
              billingAddressInfo: r.info,
              onBillingAddressChange: (e, t) => {
                  a({ info: { ...r.info, ...e }, isValid: t });
              },
              paymentSourceType: i,
          });
}
function tk(e) {
    let {
            paymentModalArgs: t,
            shouldUseManaModal: n,
            analyticsLocation: i,
            overwriteSubscriptionPaymentSource: r,
            handleStepChange: a,
            onPaymentRequestSourceFailed: o,
            paymentRequestPaymentMethod: l,
            completeSteps: u,
            paymentMethodSteps: d,
            paymentElementSelectedType: c,
            returnToPaymentElementStep: _,
            stripeElementsRef: h,
            lastConfirmedSetupIntentRef: f,
            shouldUsePaymentElement: E,
        } = e,
        p = (0, eS.S)(),
        { createSetupIntent: m } = (0, tD.x)(),
        {
            isSubmittingCurrentStep: g,
            billingAddressState: A,
            setIsSubmittingCurrentStep: I,
            hasRedirectURL: T,
            setHasRedirectURL: S,
            isAuthenticating: N,
        } = t;
    async function C() {
        I(!0);
        let e = E ? c : d.methodType,
            n = h.current,
            s = null != e && (0, tw.i)(e) ? tw.F[e] : null;
        if (null == s)
            throw new tP.v({
                message: "unknown Add Payment step not handled",
                extraSentryInformation: { paymentSourceType: e, analyticsLocation: i },
            });
        let a = s.submitAddressStep;
        try {
            let e = await a({
                ...t,
                analyticsLocation: i,
                stripe: p,
                shouldUsePaymentElement: E,
                stripeElements: n,
                lastConfirmedSetupIntentRef: f,
                createSetupIntent: m,
                onPaymentRequestSourceFailed: o,
                paymentRequestPaymentMethod: l,
                overwriteSubscriptionPaymentSource: r,
            });
            "redirect-url" === e.responseType ? S(e.hasRedirectURL) : u(e.paymentSource), T || I(!1);
        } catch (e) {
            I(!1), tM.warn(`Error confirming submitting Address Step for Payment Source Type: ${y}`, e);
        }
    }
    let y = d.methodType,
        { backStep: v } = E
            ? { backStep: eC.pn.PAYMENT_ELEMENT }
            : (function (e) {
                  switch (e) {
                      case eE.he.CARD:
                          return { backStep: eC.pn.CREDIT_CARD_INFORMATION };
                      case eE.he.PAYPAL:
                          return { backStep: eC.pn.PAYPAL_INFORMATION };
                      case eE.he.VENMO:
                          return { backStep: eC.pn.VENMO_INFORMATION };
                      case eE.he.GIROPAY:
                      case eE.he.PAYSAFE_CARD:
                      case eE.he.GCASH:
                      case eE.he.GRABPAY_MY:
                      case eE.he.MOMO_WALLET:
                      case eE.he.KAKAOPAY:
                      case eE.he.GOPAY_WALLET:
                      case eE.he.BANCONTACT:
                          return { backStep: eC.pn.PAYMENT_TYPE };
                      case eE.he.EPS:
                          return { backStep: eC.pn.EPS_INFORMATION };
                      case eE.he.IDEAL:
                          return { backStep: eC.pn.IDEAL_INFORMATION };
                      case eE.he.PRZELEWY24:
                          return { backStep: eC.pn.PRZELEWY24_INFORMATION };
                      case eE.he.CASH_APP:
                          return { backStep: eC.pn.CASH_APP_INFORMATION };
                      default:
                          return { backStep: eC.pn.PAYMENT_TYPE };
                  }
              })(y),
        R = E ? () => _(void 0) : () => a(v);
    return (0, s.jsx)(tN, {
        onBack: R,
        primaryCTA: eR.Ay.CTAType.CONTINUE,
        primaryText: D.intl.string(D.t.PDTjLN),
        primarySubmitting: g,
        primaryDisabled: !A.isValid || N,
        onPrimary: C,
        shouldUseManaModal: n,
    });
}
let tG = new eN.A("PaymentElementStepFooter.tsx");
function tV(e) {
    let t = (0, eS.S)(),
        {
            shouldUseManaModal: n,
            paymentModalArgs: i,
            handleStepChange: r,
            setPaymentMethodSteps: o,
            onBack: l,
            primarySubmitting: u,
            primaryDisabled: d,
            PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: c,
        } = e,
        { setIsSubmittingCurrentStep: _, setBillingAddressState: h } = i,
        { paymentElementSelectedType: f, stripeElementsRef: E, remountAddressElement: m } = e,
        g = a.useCallback(async () => {
            _(!0);
            try {
                if (null == f || !(0, eu.PE)(f)) throw (0, p.ne)("Valid Payment Element source type not found", !0);
                let { steps: e, methodType: n } = c[f];
                o({ steps: e, methodType: n === eE.he.UNKNOWN ? f : n });
                let i = tw.F[f];
                if (null != i && null != i.submitPaymentElementStepHandler) {
                    await i.submitPaymentElementStepHandler({
                        stripe: t,
                        stripeElements: E.current,
                        remountAddressElement: m,
                        setBillingAddressState: h,
                    }),
                        r(i.stepAfterPaymentElement ?? eC.pn.ADDRESS);
                    return;
                }
                let s = (0, eu.eI)(f);
                if (null != s) return void r(s);
                r(eC.pn.ADDRESS);
            } catch (e) {
                tG.error("Error on submitting Payment Element step: ", e.message ?? JSON.stringify(e));
            } finally {
                _(!1);
            }
        }, [f, c, E, m, r, t, o, _, h]);
    return (0, s.jsx)(tN, {
        onBack: l,
        primaryCTA: eR.Ay.CTAType.CONTINUE,
        primaryType: "submit",
        primaryText: D.intl.string(D.t.PDTjLN),
        primarySubmitting: u,
        primaryDisabled: d,
        onPrimary: g,
        shouldUseManaModal: n,
    });
}
var tF = n(447952),
    tB = n(691189);
let tj = new eN.A("AddPaymentStep.tsx"),
    tH = { name: "", cardNumber: "", expirationDate: "", cvc: "" },
    tW = { email: "", name: "", country: "", line1: "", line2: "", city: "", postalCode: "", state: "" };
function tY(e) {
    let { onCardInfoChange: t } = e,
        n = (0, l.bG)([L.A], () => L.A.error);
    return (0, s.jsx)(ei, { billingError: n, onCardInfoChange: t });
}
function tK() {
    return (0, s.jsx)(w, {});
}
function t$() {
    return (0, s.jsx)(G, {});
}
function tz() {
    return (0, s.jsx)(ti, {});
}
function tq() {
    let e = (0, l.bG)([e$.A], () => e$.A.isBusy),
        t = (0, l.bG)([L.A], () => L.A.stripePaymentMethod);
    return (0, s.jsx)(er, { stripePaymentMethod: t, submitting: e });
}
function tZ() {
    return (0, s.jsx)(V.N, {});
}
function tX(e) {
    let t,
        n,
        {
            paymentModalArgs: i,
            initialStep: r,
            prependSteps: E,
            appendSteps: g,
            onReturn: A,
            onComplete: I,
            onStepChange: S,
            breadcrumpSteps: N,
            currentBreadcrumpStep: v,
            header: R,
            analyticsData: O,
            analyticsLocation: b,
            hideBreadcrumbs: P = !1,
            usePaymentModalStep: w = !1,
            isEligibleForTrial: M = !1,
            allowDesktopRedirectPurchase: x = !1,
            toastContent: U,
            continueSessionToInitialStep: k,
            overwriteSubscriptionPaymentSource: G = !1,
            shouldUseManaModal: V = !0,
        } = e,
        F = (0, eS.S)(),
        { activitySessionId: B } = (0, eA.V)(),
        { enabled: j } = (0, eo.Y)({ location: "AddPaymentFlow" }),
        { contextMetadata: H, clearFetchSetupIntent: W } = (0, eT.t4)((e) => ({
            contextMetadata: e.contextMetadata,
            clearFetchSetupIntent: e.clearFetchSetupIntent,
        })),
        Y = (0, eb.l)();
    (0, es.l0)(W);
    let K = a.useMemo(() => {
            let e = r === eC.pn.PAYMENT_TYPE || r === eC.pn.PAYMENT_ELEMENT;
            return j && e ? (x ? eC.pn.AWAITING_BROWSER_CHECKOUT : eC.pn.PAYMENT_ELEMENT) : r;
        }, [j, r, x]),
        $ = a.useMemo(() => (0, eJ.Gn)(), []),
        {
            CREDIT_CARD_STEPS: z,
            PAYPAL_STEPS: q,
            IDEAL_STEPS: Z,
            PAYMENT_REQUEST_STEPS: X,
            VENMO_STEPS: Q,
            ADD_PAYMENT_STEPS: J,
            PRZELEWY24_STEPS: ee,
            EPS_STEPS: et,
            CASH_APP_STEPS: en,
            PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: ei,
        } = (function (e) {
            let { prependSteps: t, appendSteps: n, paymentElementsEnabled: i } = e,
                [r, s, o, l, u, d, c, _, h, f] = (0, a.useMemo)(
                    () =>
                        (function (e, t) {
                            let { prependSteps: n, appendSteps: i, paymentElementsEnabled: r } = t;
                            return e.map((e) => {
                                let { sharedStepsKey: t, methodType: s } = e;
                                return {
                                    steps: [
                                        ...n,
                                        ...(r && (null == s || s === eE.he.UNKNOWN || (0, eu.PE)(s)) ? tI[t] : tA[t]),
                                        ...i,
                                    ],
                                    methodType: s,
                                };
                            });
                        })(
                            [
                                { sharedStepsKey: "SHARED_TYPE_AND_ADDRESS_STEPS", methodType: eE.he.UNKNOWN },
                                { sharedStepsKey: "SHARED_ADD_PAYMENT_STEPS", methodType: eE.he.PAYMENT_REQUEST },
                                { sharedStepsKey: "SHARED_ADD_PAYMENT_STEPS" },
                                { sharedStepsKey: "SHARED_CREDIT_CARD_STEPS", methodType: eE.he.CARD },
                                { sharedStepsKey: "SHARED_PAYPAL_STEPS", methodType: eE.he.PAYPAL },
                                { sharedStepsKey: "SHARED_IDEAL_STEPS", methodType: eE.he.IDEAL },
                                { sharedStepsKey: "SHARED_VENMO_STEPS", methodType: eE.he.VENMO },
                                { sharedStepsKey: "SHARED_PRZELEWY24_STEPS", methodType: eE.he.PRZELEWY24 },
                                { sharedStepsKey: "SHARED_EPS_STEPS", methodType: eE.he.EPS },
                                { sharedStepsKey: "SHARED_CASH_APP_STEPS", methodType: eE.he.CASH_APP },
                            ],
                            { prependSteps: t, appendSteps: n, paymentElementsEnabled: i },
                        ),
                    [t, n, i],
                ),
                E = (0, a.useMemo)(
                    () => ({
                        [eE.he.CARD]: l,
                        [eE.he.PAYPAL]: u,
                        [eE.he.PAYMENT_REQUEST]: s,
                        [eE.he.VENMO]: c,
                        [eE.he.CASH_APP]: f,
                        [eE.he.IDEAL]: d,
                        [eE.he.PRZELEWY24]: _,
                        [eE.he.EPS]: h,
                        [eE.he.BANCONTACT]: r,
                        [eE.he.GOPAY_WALLET]: r,
                        [eE.he.KAKAOPAY]: r,
                        [eE.he.GCASH]: r,
                        [eE.he.PAYSAFE_CARD]: r,
                        [eE.he.GRABPAY_MY]: r,
                        [eE.he.MOMO_WALLET]: r,
                        [eE.he.PIX]: r,
                    }),
                    [r, l, u, c, s, d, f, _, h],
                );
            return {
                DEFAULT_PAYMENT_ELEMENT_STEPS: r,
                CREDIT_CARD_STEPS: l,
                PAYPAL_STEPS: u,
                IDEAL_STEPS: d,
                PAYMENT_REQUEST_STEPS: s,
                VENMO_STEPS: c,
                ADD_PAYMENT_STEPS: o,
                PRZELEWY24_STEPS: _,
                EPS_STEPS: h,
                CASH_APP_STEPS: f,
                PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: E,
            };
        })({ prependSteps: E, appendSteps: g, paymentElementsEnabled: j }),
        [er, ea] = a.useState(K),
        [el, ed] = a.useState(null),
        [e_, eh] = a.useState(
            (function (e) {
                switch (e) {
                    case eC.pn.CREDIT_CARD_INFORMATION:
                        return z;
                    case eC.pn.CASH_APP_INFORMATION:
                        return en;
                    default:
                        return { steps: [eC.pn.ADD_PAYMENT_STEPS] };
                }
            })(K),
        );
    a.useEffect(() => {
        (0, p.IV)();
    }, []);
    let ef = (0, l.bG)([L.A], () => L.A.redirectedPaymentSourceId),
        ep = (0, l.bG)([e5], () => e5.cashAppPayComponent),
        eN = { completeSteps: ti, setIsSubmittingCurrentStep: i.setIsSubmittingCurrentStep },
        eL = a.useRef(eN);
    a.useEffect(() => {
        eL.current = eN;
    }),
        a.useEffect(() => {
            let { completeSteps: e, setIsSubmittingCurrentStep: t } = eL.current;
            (async () => {
                if (null == ef) return;
                await (0, p.$o)();
                let n = eq.A.getPaymentSource(ef);
                null != n && (e(n), t(!1), L.A.clearRedirectedPaymentSourceId());
            })();
        }, [ef]);
    let eD = a.useCallback(
            function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                ed(null), ea(e), t && S({ currentStep: er, toStep: e });
            },
            [er, S],
        ),
        eP = a.useCallback(
            (e) => {
                eQ.default.track(T.HAw.PAYMENT_FLOW_ADD_SOURCE_COMPLETED, {
                    load_id: H.loadId,
                    analytics_location: b,
                    payment_source_id: e.id,
                    payment_source_type: e.type,
                    payment_source_country: e.paymentMethodCountry,
                });
            },
            [H.loadId, b],
        ),
        ew = (0, l.bG)([L.A], () => L.A.error),
        eM = a.useRef(ew);
    a.useEffect(() => {
        let e = eM.current;
        (eM.current = ew),
            null != ew &&
                ew !== e &&
                eQ.default.track(T.HAw.PAYMENT_FLOW_ADD_SOURCE_ERROR, {
                    load_id: H.loadId,
                    analytics_location: b,
                    payment_source_type: e_.methodType,
                    error_code: ew.code,
                    error_message: ew.message,
                });
    }, [ew, H.loadId, b, e_.methodType]);
    let ex = a.useCallback(
            (e) => {
                eP(e),
                    (0, u.P0)(
                        (0, d.o)(void 0 !== U ? U : D.intl.string(D.t["VJPg+l"]), c.Ck.SUCCESS, {
                            position: c.xJ.BOTTOM,
                        }),
                    ),
                    I(er, e),
                    eD(K, !1);
            },
            [eD, K, er, I, U, eP],
        ),
        [eU, ek] = a.useState(null),
        {
            setPaymentSourceId: eG,
            creditCardState: eV,
            setCreditCardState: eF,
            setTokenState: eB,
            isSubmittingCurrentStep: ej,
            billingAddressState: eH,
            setBillingAddressState: eW,
            setIsSubmittingCurrentStep: e$,
            braintreeEmail: ez,
            braintreeNonce: eZ,
            venmoUsername: e0,
            adyenPaymentData: e2,
            epsBankState: e3,
            setEpsBankState: e6,
            p24BankState: e4,
            setP24BankState: e7,
            selectedSkuId: e8,
        } = i,
        e9 = e8 ?? "",
        te = (0, l.bG)([eX.A], () => eX.A.get(e9), [e9]),
        tn = te?.eligiblePaymentGateways?.map((e) => e.valueOf());
    function ti(e) {
        eG(e.id), ex(e);
    }
    function tr() {
        eh(J), eD(eC.pn.PAYMENT_TYPE);
    }
    let ts = a.useCallback(
            (e, t) => {
                eW((n) => ({ info: { ...n.info, ...e }, isValid: t }));
            },
            [eW],
        ),
        ta = (0, tF.wD)({
            step: er,
            continueSessionToInitialStep: k,
            paymentElementsEnabled: j,
            handleStepChange: eD,
            logger: tj,
            shouldLogOnChangeEvents: $ || !1,
            onBillingAddressChange: ts,
        }),
        {
            shouldRenderPaymentElement: to,
            paymentElementReady: tl,
            paymentElementLoaded: tu,
            paymentElementSelectedType: td,
            returnToPaymentElementStep: tc,
            onBackFromPaymentElement: t_,
            stripeElementsRef: th,
            stripePaymentElementProps: tf,
            stripeAddressElementProps: tE,
            remountAddressElement: tp,
            addressElementKey: tm,
        } = ta,
        tg = a.useCallback(() => {
            eD(eC.pn.ADDRESS), j && tF.Ky.includes(er) && tp();
        }, [eD, j, tp, er]),
        tS = a.useCallback(
            (e) => {
                j && null != td && (0, eu.PE)(e) ? tc(e) : eD(eC.pn.PAYMENT_TYPE);
            },
            [j, td, tc, eD],
        ),
        tC = w ? (0, s.jsx)(ev.A, { className: tT._8 }) : null,
        tR = (function () {
            let [e, t] = a.useState(!1),
                n = a.useRef(null);
            return {
                connectorPaymentRequestReady: e,
                setConnectorPaymentRequestReady: t,
                connectorPaymentRequestRef: n,
                showConnectorPaymentRequest: function () {
                    null != n.current && n.current.show();
                },
            };
        })();
    switch (er) {
        case eC.pn.ATTEMPT_GOOGLE_PAY:
        case eC.pn.ATTEMPT_APPLE_PAY:
        case eC.pn.PAYMENT_TYPE:
            (t = (0, s.jsx)(ty, {
                prependSteps: E,
                appendSteps: g,
                analyticsLocation: b,
                isEligibleForTrial: M,
                allowDesktopRedirectPurchase: x,
                onPaymentRequestSourceFailed: tr,
                paymentModalArgs: i,
                handleStepChange: eD,
                setPaymentMethodSteps: eh,
                setPaymentRequestPaymentMethod: ek,
                currentStep: er,
                setInfoNotice: ed,
                completeSteps: ti,
                paymentSourceTypeRestrictions: tn,
                CREDIT_CARD_STEPS: z,
                PAYPAL_STEPS: q,
                VENMO_STEPS: Q,
                PAYMENT_REQUEST_STEPS: X,
                PRZELEWY24_STEPS: ee,
                EPS_STEPS: et,
                IDEAL_STEPS: Z,
                CASH_APP_STEPS: en,
                ...tR,
            })),
                (n = (0, s.jsx)(tv, {
                    shouldUseManaModal: V,
                    onReturn: A,
                    handleStepChange: eD,
                    currentStep: er,
                    ...tR,
                }));
            break;
        case eC.pn.PAYMENT_ELEMENT:
            if (!j) throw (0, p.ne)("Payment Elements not enabled, invalid step", !0);
            (t = null),
                (n = (0, s.jsx)(tV, {
                    handleStepChange: eD,
                    shouldUseManaModal: V,
                    setPaymentMethodSteps: eh,
                    primarySubmitting: ej,
                    primaryDisabled: !tl,
                    onBack: () => {
                        t_(), A?.();
                    },
                    paymentModalArgs: i,
                    PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: ei,
                    ...ta,
                }));
            break;
        case eC.pn.CREDIT_CARD_INFORMATION:
            let tO = async (e) => {
                e$(!0);
                try {
                    let t = await (0, p.YJ)(F, e);
                    eB({ token: t }), eD(eC.pn.ADDRESS);
                } catch (e) {
                    tj.error(e.message ?? JSON.stringify(e));
                } finally {
                    e$(!1);
                }
            };
            t = (0, s.jsx)(tY, {
                onCardInfoChange: (e, t) => {
                    eF({ info: e, isValid: t }), eW((t) => ({ ...t, info: { ...t.info, name: e.name } }));
                },
            });
            let tb = !eV.isValid,
                tL = () => {
                    eD(eC.pn.PAYMENT_TYPE);
                };
            n = (0, s.jsx)(o.ElementsConsumer, {
                children: (e) => {
                    let { elements: t } = e;
                    return (0, s.jsx)(tN, {
                        onBack: tL,
                        primaryCTA: eR.Ay.CTAType.CONTINUE,
                        primaryType: "submit",
                        primaryText: D.intl.string(D.t.PDTjLN),
                        primarySubmitting: ej,
                        primaryDisabled: tb,
                        onPrimary: () => tO(t),
                        shouldUseManaModal: V,
                    });
                },
            });
            break;
        case eC.pn.AWAITING_BROWSER_CHECKOUT:
        case eC.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
        case eC.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
            let tD = () => {
                eh(z), eD(j ? eC.pn.PAYMENT_ELEMENT : eC.pn.CREDIT_CARD_INFORMATION);
            };
            (t = (0, s.jsx)(eY, { step: er, onPurchaseComplete: () => I(er), onHandoffFailure: tD })),
                (n = (0, s.jsx)(eK, {
                    onPrimaryClick: tD,
                    onBackClick: () => {
                        j ? (t_(), A?.()) : (eh(J), eD(eC.pn.PAYMENT_TYPE));
                    },
                }));
            break;
        case eC.pn.EPS_INFORMATION:
            (t = (0, s.jsx)(em, {
                type: eE.he.EPS,
                onAccountHolderNameChange: (e) => eW({ info: { ...eH.info, name: e }, isValid: eH.isValid }),
                onEPSBankChange: (e) => e6(e),
                epsBankValue: e3,
                billingAddressInfo: eH.info,
            })),
                (n = (0, s.jsx)(tN, {
                    onBack: () => tS(eE.he.EPS),
                    primaryCTA: eR.Ay.CTAType.CONTINUE,
                    primaryText: D.intl.string(D.t.PDTjLN),
                    primaryDisabled: void 0 === e3 || "" === e3 || "" === eH.info.name,
                    onPrimary: () => tg(),
                    shouldUseManaModal: V,
                }));
            break;
        case eC.pn.IDEAL_INFORMATION:
            (t = (0, s.jsx)(ec, {
                type: eE.he.IDEAL,
                onAccountHolderNameChange: (e) => eW({ info: { ...eH.info, name: e }, isValid: eH.isValid }),
                billingAddressInfo: eH.info,
            })),
                (n = (0, s.jsx)(tN, {
                    onBack: () => eD(eC.pn.PAYMENT_TYPE),
                    primaryCTA: eR.Ay.CTAType.CONTINUE,
                    primaryText: D.intl.string(D.t.PDTjLN),
                    primaryDisabled: "" === eH.info.name,
                    onPrimary: () => tg(),
                    shouldUseManaModal: V,
                }));
            break;
        case eC.pn.PRZELEWY24_INFORMATION:
            (t = (0, s.jsx)(em, {
                type: eE.he.PRZELEWY24,
                onNameChange: (e) => eW({ info: { ...eH.info, name: e }, isValid: eH.isValid }),
                onEmailChange: (e) => eW({ info: { ...eH.info, email: e }, isValid: eH.isValid }),
                onP24BankChange: (e) => {
                    e7(e);
                },
                p24BankValue: e4,
                billingAddressInfo: eH.info,
            })),
                (n = (0, s.jsx)(tN, {
                    onBack: () => tS(eE.he.PRZELEWY24),
                    primaryCTA: eR.Ay.CTAType.CONTINUE,
                    primaryText: D.intl.string(D.t.PDTjLN),
                    primaryDisabled:
                        void 0 === eH.info.name ||
                        "" === eH.info.name ||
                        void 0 === eH.info.email ||
                        "" === eH.info.email ||
                        void 0 === e4 ||
                        "" === e4,
                    onPrimary: () => tg(),
                    shouldUseManaModal: V,
                }));
            break;
        case eC.pn.PAYPAL_INFORMATION:
            let tP = 0 !== ez.length && null != eZ;
            (t = (0, s.jsx)(tK, {})),
                (n = (0, s.jsx)(tN, {
                    onBack: () => tS(eE.he.PAYPAL),
                    primaryCTA: eR.Ay.CTAType.CONTINUE,
                    primaryText: tP ? D.intl.string(D.t.PDTjLN) : D.intl.string(D.t.Djzd7L),
                    onPrimary: () => {
                        let e;
                        return tP
                            ? tg()
                            : void (null == (e = m.A.getLastURL())
                                  ? C()
                                  : (f.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_START" }), window.open(e)));
                    },
                    shouldUseManaModal: V,
                }));
            break;
        case eC.pn.VENMO_INFORMATION:
            let tw = 0 !== e0.length && null != eZ;
            (t = (0, s.jsx)(t$, {})),
                (n = (0, s.jsx)(tN, {
                    onBack: () => tS(eE.he.VENMO),
                    primaryCTA: eR.Ay.CTAType.CONTINUE,
                    primaryText: tw ? D.intl.string(D.t.PDTjLN) : D.intl.string(D.t["4KoTLM"]),
                    onPrimary: () => (tw ? tg() : void y()),
                    shouldUseManaModal: V,
                }));
            break;
        case eC.pn.PAYMENT_REQUEST_INFORMATION:
            (t = (0, s.jsx)(tq, {})),
                (n = (0, s.jsx)(tN, { onBack: () => eD(eC.pn.PAYMENT_TYPE), shouldUseManaModal: V }));
            break;
        case eC.pn.CASH_APP_INFORMATION:
            let tM = null != e2;
            (t = (0, s.jsx)(tz, {})),
                (n = (0, s.jsx)(tN, {
                    onBack: () => tS(eE.he.CASH_APP),
                    primaryCTA: eR.Ay.CTAType.CONTINUE,
                    primaryText: tM ? D.intl.string(D.t.PDTjLN) : D.intl.string(D.t["9ALP8w"]),
                    onPrimary: () => (tM ? tg() : tt()),
                    primaryDisabled: null == ep,
                    shouldUseManaModal: V,
                }));
            break;
        case eC.pn.ADDRESS:
            let tx = j && null != td;
            (t = (0, s.jsx)(tU, {
                paymentModalArgs: i,
                paymentSourceType: e_.methodType ?? eE.he.CARD,
                shouldUsePaymentElement: tx,
            })),
                (n = (0, s.jsx)(tk, {
                    paymentModalArgs: i,
                    shouldUseManaModal: V,
                    analyticsLocation: b,
                    overwriteSubscriptionPaymentSource: G,
                    handleStepChange: eD,
                    onPaymentRequestSourceFailed: tr,
                    paymentRequestPaymentMethod: eU,
                    completeSteps: ti,
                    paymentMethodSteps: e_,
                    shouldUsePaymentElement: tx,
                    ...ta,
                }));
            break;
        case eC.pn.AWAITING_AUTHENTICATION:
            t = (0, s.jsx)(tZ, {});
            break;
        default:
            throw new eg.v({ message: `Unexpected step: ${er}`, extraSentryInformation: { currentStep: er } });
    }
    let tG = j && to,
        tH = tG ? "combined_stripe_elements" : void 0,
        tW = (0, s.jsxs)(_.Y, {
            className: tB.C9,
            staticClassName: tB.a2,
            animatedNodeClassName: tB.L2,
            fillParent: !0,
            overrideKey: tH,
            step: er,
            steps: e_.steps,
            sideMargin: 20,
            children: [
                null != el &&
                    (0, s.jsx)("div", { className: tT.Ns, children: (0, s.jsx)(h.w, { type: "info", children: el }) }),
                tG &&
                    (0, s.jsx)(tF._i, {
                        step: er,
                        analyticsContext:
                            null != O ? { activitySessionId: B, contextMetadata: H, analyticsData: O } : void 0,
                        paymentElementSelectedType: td,
                        stripeElementsRef: th,
                        stripePaymentElementProps: tf,
                        stripeAddressElementProps: tE,
                        addressElementKey: tm,
                        billingAddressInfo: eH.info,
                        onSetupError: () => {
                            t_(), eD(eC.pn.PAYMENT_TYPE);
                        },
                        paymentElementFooter: tu
                            ? (0, s.jsx)(eI.Z4, {
                                  className: tT.SO,
                                  stackingBehavior: "stack",
                                  onComplete: () => {
                                      setTimeout(() => Y(eC.pn.REVIEW), 0);
                                  },
                              })
                            : null,
                    }),
                t,
            ],
        }),
        tX = er === eC.pn.PAYMENT_TYPE && 0 === E.length ? null : n;
    return w
        ? (0, s.jsxs)(s.Fragment, {
              children: [
                  M && (0, s.jsx)(ey.A, { className: tT.At, isEligibleForTrial: M }),
                  (0, s.jsxs)(eO.dZ, { children: [tC, tW] }),
                  (0, s.jsx)(eO.UX, { children: tX }),
              ],
          })
        : (0, s.jsx)(e1.A, {
              shouldUseManaModal: V,
              steps: N ?? e_.steps,
              currentStep: v ?? er,
              overrideKey: tH,
              paymentError: i.paymentError,
              header: R,
              hideBreadcrumbs: P,
              body: tW,
              footer: tX,
          });
}
function tQ(e) {
    let {
            defaultPaymentSourceId: t,
            paymentSources: n,
            hasFetchedPaymentSources: i,
        } = (0, l.cf)([eq.A], () => ({
            defaultPaymentSourceId: void 0 !== e ? e : eq.A.defaultPaymentSourceId,
            paymentSources: eq.A.paymentSources,
            hasFetchedPaymentSources: eq.A.hasFetchedPaymentSources,
        })),
        r = (0, l.bG)([e5], () => e5.cashAppPayComponent),
        s = (0, l.bG)([el.A], () => el.A.data?.allowed_payment_source_types ?? null);
    (0, es.Ay)(() => {
        (0, A.j)().then((e) => {
            e.client
                .create({ authorization: T.Gg3.BRAINTREE.KEY })
                .then((e) => {
                    new Promise((e, t) => {
                        let n = Date.now(),
                            i = () => {
                                Date.now() - n >= 5e3
                                    ? t(Error("Timeout waiting for Braintree client to be initialized in store"))
                                    : null != m.A.getClient()
                                      ? e()
                                      : setTimeout(i, 1e3);
                            };
                        f.h.subscribe("BRAINTREE_CREATE_CLIENT_SUCCESS", function e() {
                            f.h.unsubscribe("BRAINTREE_CREATE_CLIENT_SUCCESS", e), setTimeout(i, 0);
                        });
                    })
                        .then(() => {
                            N(), S();
                        })
                        .catch((e) => {
                            g.pM(e);
                        }),
                        f.h.dispatch({ type: "BRAINTREE_CREATE_CLIENT_SUCCESS", client: e });
                })
                .catch(() => f.h.dispatch({ type: "BRAINTREE_CREATE_CLIENT_FAIL" }));
        }),
            i || (0, p.$o)();
    }),
        a.useEffect(() => {
            null == r && null != s && s.includes(eE.he.CASH_APP) && e8();
        }, [s, r]);
    let [o, u] = a.useState(t),
        d = (0, ea.A)(t);
    t !== d && null != t && null == o && u(t);
    let [c, _] = a.useState(() => ({ info: tH, isValid: !1 })),
        [h, E] = a.useState(() => ({ info: tW, isValid: !1 })),
        [I, C] = a.useState(""),
        [y, v] = a.useState(""),
        [O, b] = a.useState(() => ({ token: null })),
        [D, P, w, M, x] = (0, l.yK)([L.A], () => [
            L.A.braintreeEmail,
            L.A.braintreeNonce,
            L.A.error,
            L.A.venmoUsername,
            L.A.adyenPaymentData,
        ]),
        [U, k] = (0, l.yK)([ez.A], () => [ez.A.error, ez.A.isAwaitingAuthentication]);
    a.useEffect(() => {
        function e(e) {
            let { billingAddress: t } = e;
            E({ info: t, isValid: t.country.length > 0 });
        }
        return (
            f.h.subscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e),
            () => {
                f.h.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e), (0, R.ET)();
            }
        );
    }, []);
    let [G, V] = a.useState(!1),
        [F, B] = a.useState(!1),
        [j, H] = a.useState(null),
        W = a.useRef(null),
        Y = (0, l.bG)([ez.A], () => ez.A.isAwaitingAuthentication),
        [K, $] = (0, l.yK)([eZ.A], () => [eZ.A.purchaseTokenAuthState, eZ.A.purchaseTokenHash]);
    return (
        a.useEffect(() => {
            null != j && null != W.current && W.current.scrollIntoView({ behavior: "smooth" });
        }, [j]),
        {
            paymentSources: n,
            paymentSourceId: o,
            hasFetchedPaymentSources: i,
            setPaymentSourceId: u,
            creditCardState: c,
            setCreditCardState: _,
            tokenState: O,
            setTokenState: b,
            billingAddressState: h,
            setBillingAddressState: E,
            isSubmittingCurrentStep: G,
            setIsSubmittingCurrentStep: V,
            hasRedirectURL: F,
            setHasRedirectURL: B,
            braintreeEmail: D,
            braintreeNonce: P,
            venmoUsername: M,
            adyenPaymentData: x,
            paymentError: null != U ? U : w,
            paymentAuthenticationState: k ? e0.oc.PENDING : null != U ? e0.oc.ERROR : e0.oc.NONE,
            purchaseError: j,
            setPurchaseError: H,
            purchaseErrorBlockRef: W,
            isAuthenticating: Y,
            purchaseTokenAuthState: K,
            purchaseTokenHash: $,
            epsBankState: y,
            setEpsBankState: v,
            p24BankState: I,
            setP24BankState: C,
        }
    );
}
