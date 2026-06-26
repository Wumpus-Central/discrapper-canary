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
    c = n(857250),
    d = n(97483),
    _ = n(685094),
    h = n(683071),
    f = n(228366),
    p = n(636537),
    E = n(277984),
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
function y() {
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
                        return p.Bo.post({
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
    (0, I.isDesktop)() && (t = (0, E.jf)(T.hes.PAYPAL)),
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
function N() {
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
    D = n(825755),
    L = n(375708);
class w extends a.PureComponent {
    componentDidMount() {
        null != this.props.paypalClient && C();
    }
    componentDidUpdate(e) {
        null == e.paypalClient && null != this.props.paypalClient && C();
    }
    componentWillUnmount() {
        v(m.A.getPayPalClient(), { type: "BRAINTREE_TEARDOWN_PAYPAL_CLIENT" }).then(() => {
            null != m.A.getClient() && y();
        });
    }
    render() {
        let { braintreeEmail: e, paypalClient: t } = this.props;
        return (0, s.jsx)(O.k, {
            label: L.intl.string(L.t.QQBAos),
            leading: { type: "image", src: (0, b.Nj)(b.Ay.Types.PAYPAL) },
            value: e,
            readOnly: !0,
            placeholder: null == t ? L.intl.string(L.t.dte2M9) : L.intl.string(L.t.hopw7X),
        });
    }
}
let M = l.Ay.connectStores([m.A, D.A], () => ({
    braintreeEmail: D.A.braintreeEmail,
    paypalClient: m.A.getPayPalClient(),
}))(w);
var P = n(534514),
    x = n(834730),
    k = n(504998);
class U extends a.PureComponent {
    componentDidMount() {
        null != this.props.venmoClient && N();
    }
    componentDidUpdate(e) {
        null == e.venmoClient && null != this.props.venmoClient && N();
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
                (0, s.jsx)(b.Ay, { type: b.Ay.Types.VENMO, size: b.y3.MEDIUM, className: k.Z }),
                i
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)(P.D, {
                                  variant: e.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
                                  className: k.y,
                                  children: L.intl.format(L.t.DowIre, { venmoUsername: e }),
                              }),
                              (0, s.jsx)(x.E, {
                                  variant: "text-md/medium",
                                  className: k.y,
                                  children: L.intl.string(L.t.kmEvnR),
                              }),
                          ],
                      })
                    : (0, s.jsx)(x.E, {
                          variant: "text-md/medium",
                          className: k.y,
                          children: null == n ? L.intl.string(L.t["2ouZDU"]) : L.intl.string(L.t.mIL6Jb),
                      }),
            ],
        });
    }
}
let G = l.Ay.connectStores([m.A, D.A], () => ({ venmoUsername: D.A.venmoUsername, venmoClient: m.A.getVenmoClient() }))(
    U,
);
var F = n(891197),
    V = n(503698),
    B = n.n(V),
    j = n(305866),
    H = n(287809),
    Y = n(832208),
    W = n(661531),
    K = n(602853),
    $ = n(511274),
    z = n(670739),
    q = n(661772);
let Z = function (e) {
    let t = a.useRef(null),
        { stripeType: n, flipped: i, updateCompleted: r, onFocus: l, onBlur: u } = e,
        [c, d] = a.useState(b.Be.UNKNOWN),
        [_, h] = a.useState(!1),
        [f, p] = a.useState(!1),
        [E, m] = a.useState(null),
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
                f || e.empty || p(!0), null != r && r(e.complete), null != e.error && h(!1);
            },
            [f, r],
        ),
        y = a.useCallback(() => {
            h(!0), l?.();
        }, [l]),
        C = a.useCallback(() => {
            h(!1), u?.();
        }, [u]),
        N = a.useCallback(() => {
            if (null != I)
                switch (n) {
                    case "cardNumber": {
                        let e = I.getElement(o.CardNumberElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            c !== e.brand && d(e.brand),
                                e.empty && f
                                    ? m(L.intl.string(L.t.eOIfuy))
                                    : null != e.error
                                      ? m(L.intl.string(L.t.x4pWtJ))
                                      : m(null),
                                S(e);
                        }),
                            e.on("focus", y),
                            e.on("blur", C);
                        break;
                    }
                    case "cardExpiry": {
                        let e = I.getElement(o.CardExpiryElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            null != e.error || (e.empty && f) ? m(L.intl.string(L.t["9/zZdl"])) : m(null), S(e);
                        }),
                            e.on("focus", y),
                            e.on("blur", C);
                        break;
                    }
                    case "cardCvc": {
                        let e = I.getElement(o.CardCvcElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            null != e.error || (e.empty && f) ? m(L.intl.string(L.t.ro4isZ)) : m(null), S(e);
                        }),
                            e.on("focus", y),
                            e.on("blur", C);
                    }
                }
        }, [C, S, y, c, I, f, n]);
    a.useEffect(
        () => (
            N(),
            () => {
                T();
            }
        ),
        [N, T],
    );
    let v = (0, K.r)(W.A.colors.TEXT_SUBTLE).hex(),
        R = (0, K.r)(W.A.colors.TEXT_STRONG).hex();
    function O() {
        return B()(z.vB, { [z.Tn]: null !== E, [z.iH]: _, [z.yD]: "cardNumber" === n });
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
                                    (0, s.jsx)(b.Ay, { className: z.Ie, type: c, flipped: i }),
                                    (0, s.jsx)(o.CardNumberElement, {
                                        options: { style: g, placeholder: L.intl.string(L.t.gPRHfw), disableLink: !1 },
                                        className: O(),
                                    }),
                                ],
                            });
                        case "cardExpiry":
                            return (0, s.jsx)(o.CardExpiryElement, {
                                options: { style: g, placeholder: L.intl.string(L.t.xeEWQ6) },
                                className: O(),
                            });
                        case "cardCvc":
                            return (0, s.jsx)(o.CardCvcElement, {
                                options: { style: g, placeholder: L.intl.string(L.t.wZz04F) },
                                className: O(),
                            });
                    }
                })(),
                (0, s.jsx)($.U, { error: E }),
            ],
        })
    );
};
var X = n(142970),
    Q = n(863991);
let J = function (e) {
    let { onCardInfoChange: t, error: n } = e,
        i = a.useRef(t),
        [r, o] = a.useState(!1),
        [l, u] = a.useState({}),
        [c, d] = a.useState({ name: "", country: "", postalCode: "" }),
        [_, h] = a.useState({}),
        [f, p] = a.useState({}),
        { setFocusLockDisabled: E } = a.useContext(j.M);
    a.useEffect(() => () => {
        void 0 !== E && E(!1);
    });
    let m = a.useCallback(() => {
        void 0 !== E && E(!0);
    }, [E]);
    function g(e, t) {
        !!l[e] !== t && u((n) => ({ ...n, [e]: t }));
    }
    let A = a.useCallback(
        function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = {};
            return (e || _.name) && "" === c.name && (t.name = L.intl.string(L.t.lIkVsi)), t;
        },
        [_, c],
    );
    return (
        a.useEffect(() => {
            let e = l.cardNumber && l.cardExpiry && l.cardCvc && 0 === Object.keys(A(!0)).length;
            i.current({ name: c.name }, !!e);
        }, [l, c, A]),
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
                (0, s.jsx)(Y.A, {
                    form: [
                        {
                            fields: [
                                {
                                    id: "card-number",
                                    name: "cardNumber",
                                    title: () => L.intl.string(L.t.cVyJ3o),
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
                                    title: () => L.intl.string(L.t["CeBa/4"]),
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
                                    title: () => L.intl.string(L.t.Fd3rOz),
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
                                    title: () => L.intl.string(L.t.VUlFdU),
                                    autoComplete: "cc-name",
                                    placeholder: () => L.intl.string(L.t["yf7ms+"]),
                                    getClassNameForLayout: () => Q.c6,
                                    renderInput: (e) => (0, s.jsx)(O.k, { ...e }),
                                },
                            ],
                        },
                    ],
                    errors: f,
                    formError: n,
                    values: c,
                    onFieldChange: function (e, t) {
                        if ("name" !== t && "country" !== t && "postalCode" !== t) return;
                        let n = { ...c },
                            i = { ..._ },
                            r = { name: f.name };
                        _[t] || "" === e || (i[t] = !0),
                            (n[t] = e),
                            i[t] && "" === e ? "name" === t && (r.name = L.intl.string(L.t.lIkVsi)) : delete r[t],
                            d(n),
                            h(i),
                            p(r);
                    },
                    onFieldBlur: function () {
                        p(A());
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
var en = n(567333);
function ei(e) {
    let { billingError: t, onCardInfoChange: n } = e,
        i = null != t && (null == t.code || et(t) === ee.CREDIT_CARD_INFORMATION);
    return (0, s.jsxs)(a.Fragment, {
        children: [
            i
                ? (0, s.jsx)("div", {
                      className: en.QK,
                      children: (0, s.jsx)(h.w, { type: "critical", children: L.intl.string(L.t["4vnhKV"]) }),
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
            label: L.intl.string(L.t["mmDvV+"]),
            leading: { type: "image", src: (0, b.Nj)(a) },
            value: n && null != r ? L.intl.formatToPlainString(L.t.bCynoK, r) : void 0,
            readOnly: !0,
            placeholder: L.intl.string(L.t.bWMH78),
        }),
    });
}
var es = n(964486),
    ea = n(475743),
    eo = n(446044),
    el = n(721101),
    eu = n(648335),
    ec = n(148077);
let ed = function (e) {
    let { onAccountHolderNameChange: t, billingAddressInfo: n } = e,
        i = a.useRef(null);
    return (0, s.jsx)("div", {
        className: ec.r,
        children: (0, s.jsx)(O.k, {
            label: L.intl.string(L.t.sN3wrd),
            inputRef: i,
            name: L.intl.string(L.t.sN3wrd),
            placeholder: L.intl.string(L.t.sN3wrd),
            onChange: (e) => t(e),
            value: n.name,
        }),
    });
};
var e_ = n(462887),
    eh = n(331322),
    ef = n(736653),
    ep = n(818348),
    eE = n(600954);
let em = function (e) {
    let t = (0, ef.Ay)(),
        n = a.useRef(null),
        [i, r] = a.useState({}),
        l = (0, K.r)(W.A.colors.BACKGROUND_BASE_LOWER).hex();
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
                    borderRadius: W.A.radii.xs,
                },
            });
        }, [n, l]),
        e.type)
    ) {
        case ep.he.PRZELEWY24: {
            let r = (0, e_.M)(t) ? "/assets/f4150b3aed6c4679.svg" : "/assets/8b825aafb2e4dbed.svg",
                { onNameChange: a, onEmailChange: l, onP24BankChange: u, p24BankValue: c, billingAddressInfo: d } = e;
            return (0, s.jsx)("div", {
                className: eE.rf,
                children: (0, s.jsxs)(eh.B, {
                    gap: 16,
                    children: [
                        (0, s.jsx)(O.k, {
                            label: L.intl.string(L.t["w/qqKK"]),
                            inputRef: n,
                            name: L.intl.string(L.t["w/qqKK"]),
                            placeholder: L.intl.string(L.t["w/qqKK"]),
                            onChange: (e) => l(e),
                            value: d.email,
                        }),
                        (0, s.jsx)(O.k, {
                            label: L.intl.string(L.t["yf7ms+"]),
                            name: L.intl.string(L.t["yf7ms+"]),
                            placeholder: L.intl.string(L.t["yf7ms+"]),
                            onChange: (e) => a(e),
                            value: d.name,
                        }),
                        (0, s.jsxs)(eh.B, {
                            gap: 4,
                            children: [
                                (0, s.jsx)(x.E, { variant: "text-sm/semibold", children: L.intl.string(L.t.De3b8t) }),
                                (0, s.jsx)(o.P24BankElement, {
                                    options: { value: c, style: i },
                                    onChange: (e) => u(e.value),
                                }),
                                (0, s.jsx)("div", {
                                    className: eE.je,
                                    children: (0, s.jsx)("img", { src: r, alt: "Przelewy24" }),
                                }),
                            ],
                        }),
                    ],
                }),
            });
        }
        case ep.he.EPS: {
            let { onAccountHolderNameChange: r, onEPSBankChange: a, epsBankValue: l, billingAddressInfo: u } = e,
                c = (0, e_.M)(t) ? "/assets/025b24b0055c8d81.svg" : "/assets/1dae7d71a65fd90f.svg";
            return (0, s.jsx)("div", {
                className: eE.rf,
                children: (0, s.jsxs)(eh.B, {
                    gap: 16,
                    children: [
                        (0, s.jsx)(O.k, {
                            label: L.intl.string(L.t.sN3wrd),
                            inputRef: n,
                            name: L.intl.string(L.t.sN3wrd),
                            placeholder: L.intl.string(L.t.sN3wrd),
                            onChange: (e) => r(e),
                            value: u.name,
                        }),
                        (0, s.jsxs)(eh.B, {
                            gap: 4,
                            children: [
                                (0, s.jsx)(x.E, { variant: "text-sm/semibold", children: L.intl.string(L.t.dFyV07) }),
                                (0, s.jsx)(o.EpsBankElement, {
                                    options: { value: l, style: i },
                                    onChange: (e) => a(e.value),
                                }),
                                (0, s.jsx)("div", {
                                    className: eE.je,
                                    children: (0, s.jsx)("img", { src: c, alt: "EPS" }),
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
var eT = n(46332),
    eS = n(783327),
    ey = n(626584),
    eC = n(166532),
    eN = n(69494),
    ev = n(901930),
    eR = n(19311),
    eO = n(482132),
    eb = n(615310),
    eD = n(364840),
    eL = n(73825),
    ew = n(558620),
    eM = n(683433),
    eP = n(36167),
    ex = n(937008),
    ek = (((r = {})[(r.UNKNOWN = 0)] = "UNKNOWN"), (r[(r.PENDING = 1)] = "PENDING"), (r[(r.DONE = 2)] = "DONE"), r);
let eU = 0,
    eG = null,
    eF = null,
    eV = null;
class eB extends l.Ay.Store {
    static displayName = "BrowserCheckoutStateStore";
    get browserCheckoutState() {
        return eU;
    }
    get loadId() {
        return eG;
    }
    get skuId() {
        return eF;
    }
    get planId() {
        return eV;
    }
}
let ej = new eB(f.h, {
    USER_PAYMENT_BROWSER_CHECKOUT_STARTED: function (e) {
        (eU = 1), (eG = e.loadId);
    },
    USER_PAYMENT_BROWSER_CHECKOUT_DONE: function (e) {
        eG === e.loadId && ((eF = e.skuId ?? null), (eV = e.skuSubscriptionPlanId ?? null), (eU = 2));
    },
});
var eH = n(788868),
    eY = n(790262);
let eW = (e) => {
    let t,
        { step: n, onPurchaseComplete: i, onHandoffFailure: r } = e,
        {
            setSelectedSkuId: o,
            setSelectedPlanId: u,
            contextMetadata: c,
        } = (0, eT.t4)((e) => ({
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            contextMetadata: e.contextMetadata,
        })),
        {
            browserCheckoutState: d,
            browserCheckoutStateLoadId: _,
            browserCheckoutStateSkuId: h,
            browserCheckoutStatePlanId: f,
        } = (0, l.cf)([ej], () => ({
            browserCheckoutState: ej.browserCheckoutState,
            browserCheckoutStateLoadId: ej.loadId,
            browserCheckoutStateSkuId: ej.skuId,
            browserCheckoutStatePlanId: ej.planId,
        })),
        p = (0, ew.A)(),
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
                    (0, E.Ze)(c.loadId),
                    (0, eP.my)(
                        {
                            planId: p?.id ?? eH.gD.PREMIUM_MONTH_TIER_2,
                            isGift: m,
                            loadId: c.loadId,
                            paymentMethodType: t,
                        },
                        r,
                    ));
            }, 1e3);
            return () => clearTimeout(e);
        }, [p, m, c, r, A, g, t]),
        a.useEffect(() => {
            null !== h && (eH.oz.includes(h) && ((0, eL.ur)(h), (0, E.hP)()), o(h)),
                null !== f && u(f),
                _ === c.loadId && d === ek.DONE && i();
        }, [o, u, d, _, h, f, c, i]),
        (0, s.jsxs)("div", {
            className: eY.rf,
            children: [
                (0, s.jsx)(P.D, { variant: "heading-xl/bold", children: L.intl.string(L.t.C4HYfy) }),
                (0, s.jsx)(x.E, { variant: "text-md/normal", className: eY.h_, children: L.intl.string(L.t.xfG7Jp) }),
            ],
        })
    );
};
function eK(e) {
    let { onPrimaryClick: t, onBackClick: n } = e;
    return (0, s.jsx)(eD.j, {
        children: (0, s.jsxs)("div", {
            className: eY.kL,
            children: [
                (0, s.jsx)(eM.A, { onClick: n }),
                (0, s.jsx)(eM.F, { onClick: t, children: L.intl.string(L.t["4Qvmmj"]) }),
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
    return await p.Bo.get({ url: T.Rsh.BILLING_ADYEN_PAYMENT_METHODS, oldFormErrors: !0, rejectWithError: !1 });
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
                            else throw (0, E.i0)("Cash App Pay setup attempt is not valid.");
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
                                        (n = !1), (t = L.intl.string(L.t.TJ8dDB));
                                }
                                (0, E.i0)(e.message, n, t);
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
var tn = n(735841);
function ti(e) {
    let { className: t } = e,
        n = (0, l.bG)([e5], () => e5.cashAppPayComponent),
        i = (0, l.bG)([D.A], () => D.A.adyenPaymentData);
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
                          (0, s.jsx)(P.D, {
                              variant: r.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
                              className: tn.y,
                              children: L.intl.format(L.t["ze/1yE"], { cashtag: r }),
                          }),
                          (0, s.jsx)(x.E, {
                              variant: "text-md/medium",
                              className: tn.y,
                              children: L.intl.string(L.t.VPOx7N),
                          }),
                      ],
                  })
                : (0, s.jsx)(x.E, {
                      variant: "text-md/medium",
                      className: tn.y,
                      children: null == n ? L.intl.string(L.t["CgVe/w"]) : L.intl.string(L.t["1MqcjI"]),
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
let tc = [eC.pn.PAYMENT_TYPE],
    td = [eC.pn.PAYMENT_TYPE, eC.pn.CREDIT_CARD_INFORMATION, eC.pn.ADDRESS],
    t_ = [eC.pn.PAYMENT_TYPE, eC.pn.PAYPAL_INFORMATION, eC.pn.ADDRESS],
    th = [eC.pn.PAYMENT_TYPE, eC.pn.VENMO_INFORMATION, eC.pn.ADDRESS],
    tf = [eC.pn.PAYMENT_TYPE, eC.pn.CASH_APP_INFORMATION, eC.pn.ADDRESS],
    tp = [eC.pn.PAYMENT_TYPE, eC.pn.PRZELEWY24_INFORMATION, eC.pn.ADDRESS],
    tE = [eC.pn.PAYMENT_TYPE, eC.pn.EPS_INFORMATION, eC.pn.ADDRESS],
    tm = [eC.pn.PAYMENT_TYPE, eC.pn.IDEAL_INFORMATION, eC.pn.ADDRESS],
    tg = [eC.pn.PAYMENT_TYPE, eC.pn.ADDRESS],
    tA = {
        SHARED_ADD_PAYMENT_STEPS: tc,
        SHARED_CREDIT_CARD_STEPS: td,
        SHARED_PAYPAL_STEPS: t_,
        SHARED_VENMO_STEPS: th,
        SHARED_PRZELEWY24_STEPS: tp,
        SHARED_EPS_STEPS: tE,
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
var tT = n(710617);
function tS(e) {
    return () => (null != D.A.error && (0, R.ET)(), e());
}
function ty(e) {
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
function tN(e) {
    let {
            prependSteps: t,
            appendSteps: n,
            analyticsLocation: i,
            isEligibleForTrial: r,
            allowDesktopRedirectPurchase: a,
            onPaymentRequestSourceFailed: o,
            paymentModalArgs: l,
            handleStepChange: u,
            setPaymentMethodSteps: c,
            setPaymentRequestPaymentMethod: d,
            currentStep: _,
            setInfoNotice: h,
            completeSteps: f,
            paymentSourceTypeRestrictions: p,
            CREDIT_CARD_STEPS: m,
            PAYPAL_STEPS: g,
            VENMO_STEPS: A,
            PAYMENT_REQUEST_STEPS: T,
            PRZELEWY24_STEPS: S,
            EPS_STEPS: y,
            IDEAL_STEPS: C,
            CASH_APP_STEPS: N,
            setConnectorPaymentRequestReady: v,
            connectorPaymentRequestRef: O,
        } = e,
        { activitySessionId: b } = (0, eA.V)(),
        w = (0, eT.t4)((e) => e.contextMetadata),
        { setBillingAddressState: M } = l;
    function P(e, i) {
        switch (e) {
            case ep.he.CARD:
                a ? u(eC.pn.AWAITING_BROWSER_CHECKOUT) : (c(m), u(eC.pn.CREDIT_CARD_INFORMATION));
                break;
            case ep.he.PAYPAL:
                c(g), u(eC.pn.PAYPAL_INFORMATION);
                break;
            case ep.he.VENMO:
                c(A), u(eC.pn.VENMO_INFORMATION);
                break;
            case ep.he.PAYMENT_REQUEST:
                a && "googlePay" === i
                    ? u(eC.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY)
                    : a && "applePay" === i
                      ? u(eC.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY)
                      : (c(T), u(eC.pn.PAYMENT_REQUEST_INFORMATION));
                break;
            case ep.he.PRZELEWY24:
                c(S), u(eC.pn.PRZELEWY24_INFORMATION);
                break;
            case ep.he.EPS:
                c(y), u(eC.pn.EPS_INFORMATION);
                break;
            case ep.he.IDEAL:
                c(C), u(eC.pn.IDEAL_INFORMATION);
                break;
            case ep.he.CASH_APP:
                c(N), u(eC.pn.CASH_APP_INFORMATION);
                break;
            case ep.he.GIROPAY:
            case ep.he.PAYSAFE_CARD:
            case ep.he.GCASH:
            case ep.he.GRABPAY_MY:
            case ep.he.MOMO_WALLET:
            case ep.he.KAKAOPAY:
            case ep.he.GOPAY_WALLET:
            case ep.he.BANCONTACT:
                c({ steps: [...t, ...tg, ...n], methodType: e }), u(eC.pn.ADDRESS);
        }
        null != D.A.error && (0, R.ET)();
    }
    async function x(e, t) {
        if (((0, R.mf)(e), null == e)) return void o();
        d(e);
        let { billingAddressInfo: n } = (0, tl.uK)(e),
            r = (0, ta.Qd)(n);
        if (((null == n.name || "" === n.name) && null != t && (n.name = t), M({ isValid: r, info: n }), !r))
            return void u(eC.pn.ADDRESS);
        try {
            var s;
            (s = await (0, E.Tv)(e, n, i)), M((e) => ({ ...e, info: n })), c(T), f(s);
        } catch (e) {
            o();
        }
    }
    if (_ === eC.pn.ATTEMPT_GOOGLE_PAY || _ === eC.pn.ATTEMPT_APPLE_PAY) {
        let e = L.intl.string(_ === eC.pn.ATTEMPT_APPLE_PAY ? L.t.czhXDv : L.t.Zj2xQ0);
        return (0, s.jsx)(to.V, {
            onChooseType: P,
            paymentRequestWallet: _ === eC.pn.ATTEMPT_APPLE_PAY ? "applePay" : "googlePay",
            onStripePaymentMethodReceived: x,
            onPaymentRequestFailure: () => {
                P(ep.he.CARD), h(e);
            },
            onValidPaymentRequest: () => v(!0),
            paymentRequestRef: O,
        });
    }
    let k = !(0, I.isDesktop)() || a;
    return (0, s.jsx)(tC, {
        onChooseType: P,
        onStripePaymentMethodReceived: x,
        paymentRequestWallets: k ? ["googlePay", "applePay"] : [],
        isEligibleForTrial: r,
        paymentRequestPaymentContext: { contextMetadata: w, activitySessionId: b },
        paymentSourceTypeRestrictions: p,
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
        let e = L.intl.string(r === eC.pn.ATTEMPT_APPLE_PAY ? L.t.WoXvJL : L.t.wnVVr0);
        return (0, s.jsx)(ty, {
            onBack: () => i(eC.pn.PAYMENT_TYPE),
            primaryCTA: eR.Ay.CTAType.CONTINUE,
            primaryText: e,
            onPrimary: () => o(),
            primaryDisabled: !a,
            shouldUseManaModal: n,
        });
    }
    return (0, s.jsx)(ty, { onBack: t, shouldUseManaModal: n });
}
var tR = n(198970),
    tO = n(116673),
    tb = n(773669);
let tD = (e) => {
    let t,
        { billingAddressInfo: n, billingError: i, onBillingAddressChange: r, paymentSourceType: o } = e,
        u = null != i && (null == i.code || et(i) === ee.ADDRESS),
        c = (0, l.bG)([tb.default], () => tb.default.locale);
    switch (o) {
        case T.hes.GIROPAY:
        case T.hes.PAYSAFE_CARD:
        case T.hes.GCASH:
        case T.hes.GRABPAY_MY:
        case T.hes.MOMO_WALLET:
        case T.hes.KAKAOPAY:
        case T.hes.GOPAY_WALLET:
        case T.hes.BANCONTACT:
            t = "en-US" === c ? tR.Ay.Layouts.MODAL_US_WITH_NAME : tR.Ay.Layouts.MODAL_INTL_WITH_NAME;
            break;
        case T.hes.VENMO:
        case T.hes.CASH_APP:
            t = tR.Ay.Layouts.MODAL_US_WITH_NAME;
            break;
        default:
            t = "en-US" === c ? tR.Ay.Layouts.MODAL_US : tR.Ay.Layouts.MODAL_INTL;
    }
    let d = (0, tO.z)();
    0 === n.country.length && null != d && d.length > 0 && (n.country = d[0]);
    let _ = (0, l.bG)([H.default], () => H.default.getCurrentUser()?.storeCountry?.isLocked === !0)
        ? L.intl.string(L.t.Pg2hU0)
        : null;
    return (0, s.jsxs)(a.Fragment, {
        children: [
            u
                ? (0, s.jsx)("div", {
                      className: en.QK,
                      children: (0, s.jsx)(h.w, { type: "critical", children: L.intl.string(L.t.vZ8y7l) }),
                  })
                : null,
            (0, s.jsx)(tR.Ay, {
                className: en.__invalid_formItem,
                onBillingAddressChange: r,
                error: i,
                layout: t,
                allowedBillingAddressCountries: d,
                countryHelperText: _,
                ...n,
            }),
        ],
    });
};
var tL = n(908166),
    tw = n(930767),
    tM = n(891640);
let tP = new ey.A("AddPaymentAddressStep.tsx");
function tx(e) {
    let { billingAddressInfo: t, onBillingAddressChange: n, paymentSourceType: i } = e,
        r = (0, l.bG)([D.A], () => D.A.error);
    return (0, s.jsx)(tD, { billingAddressInfo: t, billingError: r, onBillingAddressChange: n, paymentSourceType: i });
}
function tk(e) {
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
function tU(e) {
    let {
            paymentModalArgs: t,
            shouldUseManaModal: n,
            analyticsLocation: i,
            overwriteSubscriptionPaymentSource: r,
            handleStepChange: a,
            onPaymentRequestSourceFailed: o,
            paymentRequestPaymentMethod: l,
            completeSteps: u,
            paymentMethodSteps: c,
            paymentElementSelectedType: d,
            returnToPaymentElementStep: _,
            stripeElementsRef: h,
            lastConfirmedSetupIntentRef: f,
            shouldUsePaymentElement: p,
        } = e,
        E = (0, eS.S)(),
        { createSetupIntent: m } = (0, tL.x)(),
        {
            isSubmittingCurrentStep: g,
            billingAddressState: A,
            setIsSubmittingCurrentStep: I,
            hasRedirectURL: T,
            setHasRedirectURL: S,
            isAuthenticating: y,
        } = t;
    async function C() {
        I(!0);
        let e = p ? d : c.methodType,
            n = h.current,
            s = null != e && (0, tM.i)(e) ? tM.F[e] : null;
        if (null == s)
            throw new tw.v({
                message: "unknown Add Payment step not handled",
                extraSentryInformation: { paymentSourceType: e, analyticsLocation: i },
            });
        let a = s.submitAddressStep;
        try {
            let e = await a({
                ...t,
                analyticsLocation: i,
                stripe: E,
                shouldUsePaymentElement: p,
                stripeElements: n,
                lastConfirmedSetupIntentRef: f,
                createSetupIntent: m,
                onPaymentRequestSourceFailed: o,
                paymentRequestPaymentMethod: l,
                overwriteSubscriptionPaymentSource: r,
            });
            "redirect-url" === e.responseType ? S(e.hasRedirectURL) : u(e.paymentSource), T || I(!1);
        } catch (e) {
            I(!1), tP.warn(`Error confirming submitting Address Step for Payment Source Type: ${N}`, e);
        }
    }
    let N = c.methodType,
        { backStep: v } = p
            ? { backStep: eC.pn.PAYMENT_ELEMENT }
            : (function (e) {
                  switch (e) {
                      case ep.he.CARD:
                          return { backStep: eC.pn.CREDIT_CARD_INFORMATION };
                      case ep.he.PAYPAL:
                          return { backStep: eC.pn.PAYPAL_INFORMATION };
                      case ep.he.VENMO:
                          return { backStep: eC.pn.VENMO_INFORMATION };
                      case ep.he.GIROPAY:
                      case ep.he.PAYSAFE_CARD:
                      case ep.he.GCASH:
                      case ep.he.GRABPAY_MY:
                      case ep.he.MOMO_WALLET:
                      case ep.he.KAKAOPAY:
                      case ep.he.GOPAY_WALLET:
                      case ep.he.BANCONTACT:
                          return { backStep: eC.pn.PAYMENT_TYPE };
                      case ep.he.EPS:
                          return { backStep: eC.pn.EPS_INFORMATION };
                      case ep.he.IDEAL:
                          return { backStep: eC.pn.IDEAL_INFORMATION };
                      case ep.he.PRZELEWY24:
                          return { backStep: eC.pn.PRZELEWY24_INFORMATION };
                      case ep.he.CASH_APP:
                          return { backStep: eC.pn.CASH_APP_INFORMATION };
                      default:
                          return { backStep: eC.pn.PAYMENT_TYPE };
                  }
              })(N),
        R = p ? () => _(void 0) : () => a(v);
    return (0, s.jsx)(ty, {
        onBack: R,
        primaryCTA: eR.Ay.CTAType.CONTINUE,
        primaryText: L.intl.string(L.t.PDTjLN),
        primarySubmitting: g,
        primaryDisabled: !A.isValid || y,
        onPrimary: C,
        shouldUseManaModal: n,
    });
}
let tG = new ey.A("PaymentElementStepFooter.tsx");
function tF(e) {
    let t = (0, eS.S)(),
        {
            shouldUseManaModal: n,
            paymentModalArgs: i,
            handleStepChange: r,
            setPaymentMethodSteps: o,
            onBack: l,
            primarySubmitting: u,
            primaryDisabled: c,
            PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: d,
        } = e,
        { setIsSubmittingCurrentStep: _, setBillingAddressState: h } = i,
        { paymentElementSelectedType: f, stripeElementsRef: p, remountAddressElement: m } = e,
        g = a.useCallback(async () => {
            _(!0);
            try {
                if (null == f || !(0, eu.PE)(f)) throw (0, E.ne)("Valid Payment Element source type not found", !0);
                let { steps: e, methodType: n } = d[f];
                o({ steps: e, methodType: n === ep.he.UNKNOWN ? f : n });
                let i = tM.F[f];
                if (null != i && null != i.submitPaymentElementStepHandler) {
                    await i.submitPaymentElementStepHandler({
                        stripe: t,
                        stripeElements: p.current,
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
        }, [f, d, p, m, r, t, o, _, h]);
    return (0, s.jsx)(ty, {
        onBack: l,
        primaryCTA: eR.Ay.CTAType.CONTINUE,
        primaryType: "submit",
        primaryText: L.intl.string(L.t.PDTjLN),
        primarySubmitting: u,
        primaryDisabled: c,
        onPrimary: g,
        shouldUseManaModal: n,
    });
}
var tV = n(447952),
    tB = n(394549);
let tj = new ey.A("AddPaymentStep.tsx"),
    tH = { name: "", cardNumber: "", expirationDate: "", cvc: "" },
    tY = { email: "", name: "", country: "", line1: "", line2: "", city: "", postalCode: "", state: "" };
function tW(e) {
    let { onCardInfoChange: t } = e,
        n = (0, l.bG)([D.A], () => D.A.error);
    return (0, s.jsx)(ei, { billingError: n, onCardInfoChange: t });
}
function tK() {
    return (0, s.jsx)(M, {});
}
function t$() {
    return (0, s.jsx)(G, {});
}
function tz() {
    return (0, s.jsx)(ti, {});
}
function tq() {
    let e = (0, l.bG)([e$.A], () => e$.A.isBusy),
        t = (0, l.bG)([D.A], () => D.A.stripePaymentMethod);
    return (0, s.jsx)(er, { stripePaymentMethod: t, submitting: e });
}
function tZ() {
    return (0, s.jsx)(F.N, {});
}
function tX(e) {
    let t,
        n,
        {
            paymentModalArgs: i,
            initialStep: r,
            prependSteps: p,
            appendSteps: g,
            onReturn: A,
            onComplete: I,
            onStepChange: S,
            breadcrumpSteps: y,
            currentBreadcrumpStep: v,
            header: R,
            analyticsData: O,
            analyticsLocation: b,
            hideBreadcrumbs: w = !1,
            usePaymentModalStep: M = !1,
            isEligibleForTrial: P = !1,
            allowDesktopRedirectPurchase: x = !1,
            toastContent: k,
            continueSessionToInitialStep: U,
            overwriteSubscriptionPaymentSource: G = !1,
            shouldUseManaModal: F = !0,
        } = e,
        V = (0, eS.S)(),
        { activitySessionId: B } = (0, eA.V)(),
        { enabled: j } = (0, eo.Y)({ location: "AddPaymentFlow" }),
        H = (0, eT.t4)((e) => e.contextMetadata),
        Y = (0, eb.l)(),
        W = a.useMemo(() => {
            let e = r === eC.pn.PAYMENT_TYPE || r === eC.pn.PAYMENT_ELEMENT;
            return j && e ? (x ? eC.pn.AWAITING_BROWSER_CHECKOUT : eC.pn.PAYMENT_ELEMENT) : r;
        }, [j, r, x]),
        K = a.useMemo(() => (0, eJ.Gn)(), []),
        {
            CREDIT_CARD_STEPS: $,
            PAYPAL_STEPS: z,
            IDEAL_STEPS: q,
            PAYMENT_REQUEST_STEPS: Z,
            VENMO_STEPS: X,
            ADD_PAYMENT_STEPS: Q,
            PRZELEWY24_STEPS: J,
            EPS_STEPS: ee,
            CASH_APP_STEPS: et,
            PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: en,
        } = (function (e) {
            let { prependSteps: t, appendSteps: n, paymentElementsEnabled: i } = e,
                [r, s, o, l, u, c, d, _, h, f] = (0, a.useMemo)(
                    () =>
                        (function (e, t) {
                            let { prependSteps: n, appendSteps: i, paymentElementsEnabled: r } = t;
                            return e.map((e) => {
                                let { sharedStepsKey: t, methodType: s } = e;
                                return {
                                    steps: [
                                        ...n,
                                        ...(r && (null == s || s === ep.he.UNKNOWN || (0, eu.PE)(s)) ? tI[t] : tA[t]),
                                        ...i,
                                    ],
                                    methodType: s,
                                };
                            });
                        })(
                            [
                                { sharedStepsKey: "SHARED_TYPE_AND_ADDRESS_STEPS", methodType: ep.he.UNKNOWN },
                                { sharedStepsKey: "SHARED_ADD_PAYMENT_STEPS", methodType: ep.he.PAYMENT_REQUEST },
                                { sharedStepsKey: "SHARED_ADD_PAYMENT_STEPS" },
                                { sharedStepsKey: "SHARED_CREDIT_CARD_STEPS", methodType: ep.he.CARD },
                                { sharedStepsKey: "SHARED_PAYPAL_STEPS", methodType: ep.he.PAYPAL },
                                { sharedStepsKey: "SHARED_IDEAL_STEPS", methodType: ep.he.IDEAL },
                                { sharedStepsKey: "SHARED_VENMO_STEPS", methodType: ep.he.VENMO },
                                { sharedStepsKey: "SHARED_PRZELEWY24_STEPS", methodType: ep.he.PRZELEWY24 },
                                { sharedStepsKey: "SHARED_EPS_STEPS", methodType: ep.he.EPS },
                                { sharedStepsKey: "SHARED_CASH_APP_STEPS", methodType: ep.he.CASH_APP },
                            ],
                            { prependSteps: t, appendSteps: n, paymentElementsEnabled: i },
                        ),
                    [t, n, i],
                ),
                p = (0, a.useMemo)(
                    () => ({
                        [ep.he.CARD]: l,
                        [ep.he.PAYPAL]: u,
                        [ep.he.PAYMENT_REQUEST]: s,
                        [ep.he.VENMO]: d,
                        [ep.he.CASH_APP]: f,
                        [ep.he.IDEAL]: c,
                        [ep.he.PRZELEWY24]: _,
                        [ep.he.EPS]: h,
                        [ep.he.BANCONTACT]: r,
                        [ep.he.GOPAY_WALLET]: r,
                        [ep.he.KAKAOPAY]: r,
                        [ep.he.GCASH]: r,
                        [ep.he.PAYSAFE_CARD]: r,
                        [ep.he.GRABPAY_MY]: r,
                        [ep.he.MOMO_WALLET]: r,
                        [ep.he.PIX]: r,
                    }),
                    [r, l, u, d, s, c, f, _, h],
                );
            return {
                DEFAULT_PAYMENT_ELEMENT_STEPS: r,
                CREDIT_CARD_STEPS: l,
                PAYPAL_STEPS: u,
                IDEAL_STEPS: c,
                PAYMENT_REQUEST_STEPS: s,
                VENMO_STEPS: d,
                ADD_PAYMENT_STEPS: o,
                PRZELEWY24_STEPS: _,
                EPS_STEPS: h,
                CASH_APP_STEPS: f,
                PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: p,
            };
        })({ prependSteps: p, appendSteps: g, paymentElementsEnabled: j }),
        [ei, er] = a.useState(W),
        [es, ea] = a.useState(null),
        [el, ec] = a.useState(
            (function (e) {
                switch (e) {
                    case eC.pn.CREDIT_CARD_INFORMATION:
                        return $;
                    case eC.pn.CASH_APP_INFORMATION:
                        return et;
                    default:
                        return { steps: [eC.pn.ADD_PAYMENT_STEPS] };
                }
            })(W),
        );
    a.useEffect(() => {
        (0, E.IV)();
    }, []);
    let e_ = (0, l.bG)([D.A], () => D.A.redirectedPaymentSourceId),
        eh = (0, l.bG)([e5], () => e5.cashAppPayComponent),
        ef = { completeSteps: te, setIsSubmittingCurrentStep: i.setIsSubmittingCurrentStep },
        eE = a.useRef(ef);
    a.useEffect(() => {
        eE.current = ef;
    }),
        a.useEffect(() => {
            let { completeSteps: e, setIsSubmittingCurrentStep: t } = eE.current;
            (async () => {
                if (null == e_) return;
                await (0, E.$o)();
                let n = eq.A.getPaymentSource(e_);
                null != n && (e(n), t(!1), D.A.clearRedirectedPaymentSourceId());
            })();
        }, [e_]);
    let ey = a.useCallback(
            function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                ea(null), er(e), t && S({ currentStep: ei, toStep: e });
            },
            [ei, S],
        ),
        eD = a.useCallback(
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
        eL = (0, l.bG)([D.A], () => D.A.error),
        ew = a.useRef(eL);
    a.useEffect(() => {
        let e = ew.current;
        (ew.current = eL),
            null != eL &&
                eL !== e &&
                eQ.default.track(T.HAw.PAYMENT_FLOW_ADD_SOURCE_ERROR, {
                    load_id: H.loadId,
                    analytics_location: b,
                    payment_source_type: el.methodType,
                    error_code: eL.code,
                    error_message: eL.message,
                });
    }, [eL, H.loadId, b, el.methodType]);
    let eM = a.useCallback(
            (e) => {
                eD(e),
                    (0, u.P0)(
                        (0, c.o)(void 0 !== k ? k : L.intl.string(L.t["VJPg+l"]), d.Ck.SUCCESS, {
                            position: d.xJ.BOTTOM,
                        }),
                    ),
                    I(ei, e),
                    ey(W, !1);
            },
            [ey, W, ei, I, k, eD],
        ),
        [eP, ex] = a.useState(null),
        {
            setPaymentSourceId: ek,
            creditCardState: eU,
            setCreditCardState: eG,
            setTokenState: eF,
            isSubmittingCurrentStep: eV,
            billingAddressState: eB,
            setBillingAddressState: ej,
            setIsSubmittingCurrentStep: eH,
            braintreeEmail: eY,
            braintreeNonce: e$,
            venmoUsername: ez,
            adyenPaymentData: eZ,
            epsBankState: e0,
            setEpsBankState: e2,
            p24BankState: e3,
            setP24BankState: e6,
            selectedSkuId: e4,
        } = i,
        e7 = e4 ?? "",
        e8 = (0, l.bG)([eX.A], () => eX.A.get(e7), [e7]),
        e9 = e8?.eligiblePaymentGateways?.map((e) => e.valueOf());
    function te(e) {
        ek(e.id), eM(e);
    }
    function tn() {
        ec(Q), ey(eC.pn.PAYMENT_TYPE);
    }
    let ti = (0, tV.wD)({
            step: ei,
            continueSessionToInitialStep: U,
            paymentElementsEnabled: j,
            handleStepChange: ey,
            logger: tj,
            shouldLogOnChangeEvents: K || !1,
            onBillingAddressChange: (e, t) => {
                ej({ info: { ...eB.info, ...e }, isValid: t });
            },
        }),
        {
            shouldRenderPaymentElement: tr,
            paymentElementReady: ts,
            paymentElementSelectedType: ta,
            returnToPaymentElementStep: to,
            onBackFromPaymentElement: tl,
            stripeElementsRef: tu,
            stripePaymentElementProps: tc,
            stripeAddressElementProps: td,
            remountAddressElement: t_,
            addressElementKey: th,
        } = ti,
        tf = a.useCallback(() => {
            ey(eC.pn.ADDRESS), j && tV.Ky.includes(ei) && t_();
        }, [ey, j, t_, ei]),
        tp = a.useCallback(
            (e) => {
                j && null != ta && (0, eu.PE)(e) ? to(e) : ey(eC.pn.PAYMENT_TYPE);
            },
            [j, ta, to, ey],
        ),
        tE = M ? (0, s.jsx)(ev.A, { className: tT._8 }) : null,
        tm = (function () {
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
    switch (ei) {
        case eC.pn.ATTEMPT_GOOGLE_PAY:
        case eC.pn.ATTEMPT_APPLE_PAY:
        case eC.pn.PAYMENT_TYPE:
            (t = (0, s.jsx)(tN, {
                prependSteps: p,
                appendSteps: g,
                analyticsLocation: b,
                isEligibleForTrial: P,
                allowDesktopRedirectPurchase: x,
                onPaymentRequestSourceFailed: tn,
                paymentModalArgs: i,
                handleStepChange: ey,
                setPaymentMethodSteps: ec,
                setPaymentRequestPaymentMethod: ex,
                currentStep: ei,
                setInfoNotice: ea,
                completeSteps: te,
                paymentSourceTypeRestrictions: e9,
                CREDIT_CARD_STEPS: $,
                PAYPAL_STEPS: z,
                VENMO_STEPS: X,
                PAYMENT_REQUEST_STEPS: Z,
                PRZELEWY24_STEPS: J,
                EPS_STEPS: ee,
                IDEAL_STEPS: q,
                CASH_APP_STEPS: et,
                ...tm,
            })),
                (n = (0, s.jsx)(tv, {
                    shouldUseManaModal: F,
                    onReturn: A,
                    handleStepChange: ey,
                    currentStep: ei,
                    ...tm,
                }));
            break;
        case eC.pn.PAYMENT_ELEMENT:
            if (!j) throw (0, E.ne)("Payment Elements not enabled, invalid step", !0);
            (t = null),
                (n = (0, s.jsx)(tF, {
                    handleStepChange: ey,
                    shouldUseManaModal: F,
                    setPaymentMethodSteps: ec,
                    primarySubmitting: eV,
                    primaryDisabled: !ts,
                    onBack: () => {
                        tl(), A?.();
                    },
                    paymentModalArgs: i,
                    PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: en,
                    ...ti,
                }));
            break;
        case eC.pn.CREDIT_CARD_INFORMATION:
            let tg = async (e) => {
                eH(!0);
                try {
                    let t = await (0, E.YJ)(V, e);
                    eF({ token: t }), ey(eC.pn.ADDRESS);
                } catch (e) {
                    tj.error(e.message ?? JSON.stringify(e));
                } finally {
                    eH(!1);
                }
            };
            t = (0, s.jsx)(tW, {
                onCardInfoChange: (e, t) => {
                    eG({ info: e, isValid: t }), ej((t) => ({ ...t, info: { ...t.info, name: e.name } }));
                },
            });
            let tS = !eU.isValid,
                tC = () => {
                    ey(eC.pn.PAYMENT_TYPE);
                };
            n = (0, s.jsx)(o.ElementsConsumer, {
                children: (e) => {
                    let { elements: t } = e;
                    return (0, s.jsx)(ty, {
                        onBack: tC,
                        primaryCTA: eR.Ay.CTAType.CONTINUE,
                        primaryType: "submit",
                        primaryText: L.intl.string(L.t.PDTjLN),
                        primarySubmitting: eV,
                        primaryDisabled: tS,
                        onPrimary: () => tg(t),
                        shouldUseManaModal: F,
                    });
                },
            });
            break;
        case eC.pn.AWAITING_BROWSER_CHECKOUT:
        case eC.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
        case eC.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
            let tR = () => {
                ec($), ey(j ? eC.pn.PAYMENT_ELEMENT : eC.pn.CREDIT_CARD_INFORMATION);
            };
            (t = (0, s.jsx)(eW, { step: ei, onPurchaseComplete: () => I(ei), onHandoffFailure: tR })),
                (n = (0, s.jsx)(eK, {
                    onPrimaryClick: tR,
                    onBackClick: () => {
                        j ? (tl(), A?.()) : (ec(Q), ey(eC.pn.PAYMENT_TYPE));
                    },
                }));
            break;
        case eC.pn.EPS_INFORMATION:
            (t = (0, s.jsx)(em, {
                type: ep.he.EPS,
                onAccountHolderNameChange: (e) => ej({ info: { ...eB.info, name: e }, isValid: eB.isValid }),
                onEPSBankChange: (e) => e2(e),
                epsBankValue: e0,
                billingAddressInfo: eB.info,
            })),
                (n = (0, s.jsx)(ty, {
                    onBack: () => tp(ep.he.EPS),
                    primaryCTA: eR.Ay.CTAType.CONTINUE,
                    primaryText: L.intl.string(L.t.PDTjLN),
                    primaryDisabled: void 0 === e0 || "" === e0 || "" === eB.info.name,
                    onPrimary: () => tf(),
                    shouldUseManaModal: F,
                }));
            break;
        case eC.pn.IDEAL_INFORMATION:
            (t = (0, s.jsx)(ed, {
                type: ep.he.IDEAL,
                onAccountHolderNameChange: (e) => ej({ info: { ...eB.info, name: e }, isValid: eB.isValid }),
                billingAddressInfo: eB.info,
            })),
                (n = (0, s.jsx)(ty, {
                    onBack: () => ey(eC.pn.PAYMENT_TYPE),
                    primaryCTA: eR.Ay.CTAType.CONTINUE,
                    primaryText: L.intl.string(L.t.PDTjLN),
                    primaryDisabled: "" === eB.info.name,
                    onPrimary: () => tf(),
                    shouldUseManaModal: F,
                }));
            break;
        case eC.pn.PRZELEWY24_INFORMATION:
            (t = (0, s.jsx)(em, {
                type: ep.he.PRZELEWY24,
                onNameChange: (e) => ej({ info: { ...eB.info, name: e }, isValid: eB.isValid }),
                onEmailChange: (e) => ej({ info: { ...eB.info, email: e }, isValid: eB.isValid }),
                onP24BankChange: (e) => {
                    e6(e);
                },
                p24BankValue: e3,
                billingAddressInfo: eB.info,
            })),
                (n = (0, s.jsx)(ty, {
                    onBack: () => tp(ep.he.PRZELEWY24),
                    primaryCTA: eR.Ay.CTAType.CONTINUE,
                    primaryText: L.intl.string(L.t.PDTjLN),
                    primaryDisabled:
                        void 0 === eB.info.name ||
                        "" === eB.info.name ||
                        void 0 === eB.info.email ||
                        "" === eB.info.email ||
                        void 0 === e3 ||
                        "" === e3,
                    onPrimary: () => tf(),
                    shouldUseManaModal: F,
                }));
            break;
        case eC.pn.PAYPAL_INFORMATION:
            let tO = 0 !== eY.length && null != e$;
            (t = (0, s.jsx)(tK, {})),
                (n = (0, s.jsx)(ty, {
                    onBack: () => tp(ep.he.PAYPAL),
                    primaryCTA: eR.Ay.CTAType.CONTINUE,
                    primaryText: tO ? L.intl.string(L.t.PDTjLN) : L.intl.string(L.t.Djzd7L),
                    onPrimary: () => {
                        let e;
                        return tO
                            ? tf()
                            : void (null == (e = m.A.getLastURL())
                                  ? C()
                                  : (f.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_START" }), window.open(e)));
                    },
                    shouldUseManaModal: F,
                }));
            break;
        case eC.pn.VENMO_INFORMATION:
            let tb = 0 !== ez.length && null != e$;
            (t = (0, s.jsx)(t$, {})),
                (n = (0, s.jsx)(ty, {
                    onBack: () => tp(ep.he.VENMO),
                    primaryCTA: eR.Ay.CTAType.CONTINUE,
                    primaryText: tb ? L.intl.string(L.t.PDTjLN) : L.intl.string(L.t["4KoTLM"]),
                    onPrimary: () => (tb ? tf() : void N()),
                    shouldUseManaModal: F,
                }));
            break;
        case eC.pn.PAYMENT_REQUEST_INFORMATION:
            (t = (0, s.jsx)(tq, {})),
                (n = (0, s.jsx)(ty, { onBack: () => ey(eC.pn.PAYMENT_TYPE), shouldUseManaModal: F }));
            break;
        case eC.pn.CASH_APP_INFORMATION:
            let tD = null != eZ;
            (t = (0, s.jsx)(tz, {})),
                (n = (0, s.jsx)(ty, {
                    onBack: () => tp(ep.he.CASH_APP),
                    primaryCTA: eR.Ay.CTAType.CONTINUE,
                    primaryText: tD ? L.intl.string(L.t.PDTjLN) : L.intl.string(L.t["9ALP8w"]),
                    onPrimary: () => (tD ? tf() : tt()),
                    primaryDisabled: null == eh,
                    shouldUseManaModal: F,
                }));
            break;
        case eC.pn.ADDRESS:
            let tL = j && null != ta;
            (t = (0, s.jsx)(tk, {
                paymentModalArgs: i,
                paymentSourceType: el.methodType ?? ep.he.CARD,
                shouldUsePaymentElement: tL,
            })),
                (n = (0, s.jsx)(tU, {
                    paymentModalArgs: i,
                    shouldUseManaModal: F,
                    analyticsLocation: b,
                    overwriteSubscriptionPaymentSource: G,
                    handleStepChange: ey,
                    onPaymentRequestSourceFailed: tn,
                    paymentRequestPaymentMethod: eP,
                    completeSteps: te,
                    paymentMethodSteps: el,
                    shouldUsePaymentElement: tL,
                    ...ti,
                }));
            break;
        case eC.pn.AWAITING_AUTHENTICATION:
            t = (0, s.jsx)(tZ, {});
            break;
        default:
            throw new eg.v({ message: `Unexpected step: ${ei}`, extraSentryInformation: { currentStep: ei } });
    }
    let tw = j && tr,
        tM = tw ? "combined_stripe_elements" : void 0,
        tP = (0, s.jsxs)(_.Y, {
            className: tB.C9,
            staticClassName: tB.a2,
            animatedNodeClassName: tB.L2,
            fillParent: !0,
            overrideKey: tM,
            step: ei,
            steps: el.steps,
            sideMargin: 20,
            children: [
                null != es &&
                    (0, s.jsx)("div", { className: tT.Ns, children: (0, s.jsx)(h.w, { type: "info", children: es }) }),
                tw &&
                    (0, s.jsx)(tV._i, {
                        step: ei,
                        analyticsContext:
                            null != O ? { activitySessionId: B, contextMetadata: H, analyticsData: O } : void 0,
                        paymentElementSelectedType: ta,
                        stripeElementsRef: tu,
                        stripePaymentElementProps: tc,
                        stripeAddressElementProps: td,
                        addressElementKey: th,
                        billingAddressInfo: eB.info,
                        onSetupError: () => {
                            tl(), ey(eC.pn.PAYMENT_TYPE);
                        },
                        paymentElementFooter: (0, s.jsx)(eI.Z4, {
                            className: tT.SO,
                            stackingBehavior: "stack",
                            onComplete: () => {
                                setTimeout(() => Y(eC.pn.REVIEW), 0);
                            },
                        }),
                    }),
                t,
            ],
        }),
        tx = ei === eC.pn.PAYMENT_TYPE && 0 === p.length ? null : n;
    return M
        ? (0, s.jsxs)(s.Fragment, {
              children: [
                  P && (0, s.jsx)(eN.A, { className: tT.At, isEligibleForTrial: P }),
                  (0, s.jsxs)(eO.dZ, { children: [tE, tP] }),
                  (0, s.jsx)(eO.UX, { children: tx }),
              ],
          })
        : (0, s.jsx)(e1.A, {
              shouldUseManaModal: F,
              steps: y ?? el.steps,
              currentStep: v ?? ei,
              overrideKey: tM,
              paymentError: i.paymentError,
              header: R,
              hideBreadcrumbs: w,
              body: tP,
              footer: tx,
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
                            y(), S();
                        })
                        .catch((e) => {
                            g.pM(e);
                        }),
                        f.h.dispatch({ type: "BRAINTREE_CREATE_CLIENT_SUCCESS", client: e });
                })
                .catch(() => f.h.dispatch({ type: "BRAINTREE_CREATE_CLIENT_FAIL" }));
        }),
            i || (0, E.$o)();
    }),
        a.useEffect(() => {
            null == r && null != s && s.includes(ep.he.CASH_APP) && e8();
        }, [s, r]);
    let [o, u] = a.useState(t),
        c = (0, ea.A)(t);
    t !== c && null != t && null == o && u(t);
    let [d, _] = a.useState(() => ({ info: tH, isValid: !1 })),
        [h, p] = a.useState(() => ({ info: tY, isValid: !1 })),
        [I, C] = a.useState(""),
        [N, v] = a.useState(""),
        [O, b] = a.useState(() => ({ token: null })),
        [L, w, M, P, x] = (0, l.yK)([D.A], () => [
            D.A.braintreeEmail,
            D.A.braintreeNonce,
            D.A.error,
            D.A.venmoUsername,
            D.A.adyenPaymentData,
        ]),
        [k, U] = (0, l.yK)([ez.A], () => [ez.A.error, ez.A.isAwaitingAuthentication]);
    a.useEffect(() => {
        function e(e) {
            let { billingAddress: t } = e;
            p({ info: t, isValid: t.country.length > 0 });
        }
        return (
            f.h.subscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e),
            () => {
                f.h.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e), (0, R.ET)();
            }
        );
    }, []);
    let [G, F] = a.useState(!1),
        [V, B] = a.useState(!1),
        [j, H] = a.useState(null),
        Y = a.useRef(null),
        W = (0, l.bG)([ez.A], () => ez.A.isAwaitingAuthentication),
        [K, $] = (0, l.yK)([eZ.A], () => [eZ.A.purchaseTokenAuthState, eZ.A.purchaseTokenHash]);
    return (
        a.useEffect(() => {
            null != j && null != Y.current && Y.current.scrollIntoView({ behavior: "smooth" });
        }, [j]),
        {
            paymentSources: n,
            paymentSourceId: o,
            hasFetchedPaymentSources: i,
            setPaymentSourceId: u,
            creditCardState: d,
            setCreditCardState: _,
            tokenState: O,
            setTokenState: b,
            billingAddressState: h,
            setBillingAddressState: p,
            isSubmittingCurrentStep: G,
            setIsSubmittingCurrentStep: F,
            hasRedirectURL: V,
            setHasRedirectURL: B,
            braintreeEmail: L,
            braintreeNonce: w,
            venmoUsername: P,
            adyenPaymentData: x,
            paymentError: null != k ? k : M,
            paymentAuthenticationState: U ? e0.oc.PENDING : null != k ? e0.oc.ERROR : e0.oc.NONE,
            purchaseError: j,
            setPurchaseError: H,
            purchaseErrorBlockRef: Y,
            isAuthenticating: W,
            purchaseTokenAuthState: K,
            purchaseTokenHash: $,
            epsBankState: N,
            setEpsBankState: v,
            p24BankState: I,
            setP24BankState: C,
        }
    );
}
