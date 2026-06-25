"use strict";
n.d(t, { Y: () => t6, _V: () => t4 });
var i,
    r,
    s = n(627968),
    a = n(64700),
    o = n(342393),
    l = n(284009),
    u = n.n(l),
    c = n(17928),
    d = n(691540),
    _ = n(857250),
    h = n(97483),
    f = n(685094),
    p = n(683071),
    E = n(228366),
    m = n(636537),
    g = n(753390),
    A = n(70142),
    I = n(739508),
    T = n(184015),
    S = n(723702),
    y = n(652215);
function C() {
    let e = A.A.getClient();
    null != e &&
        (0, T.j)().then((t) => {
            t.venmo
                .create({ client: e, allowDesktop: !0, paymentMethodUsage: "multi_use" })
                .then((e) => {
                    E.h.dispatch({ type: "BRAINTREE_CREATE_VENMO_CLIENT_SUCCESS", venmoClient: e });
                })
                .catch(() => {
                    E.h.dispatch({ type: "BRAINTREE_CREATE_VENMO_CLIENT_FAIL" });
                });
        });
}
function N() {
    let e = A.A.getClient();
    null != e &&
        (0, T.j)().then((t) => {
            t.paypal
                .create({ client: e })
                .then((e) => {
                    if (null == e._navigateFrameToAuth)
                        throw Error(
                            "braintree client missing _navigateFrameToAuth. did someone upgrade the braintree library?",
                        );
                    (e._navigateFrameToAuth = function (e) {
                        let t = this._formatPaymentResourceData(e);
                        return m.Bo.post({
                            url: y.Rsh.BILLING_PAYPAL_BILLING_AGREEMENT_TOKENS,
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
                                    ((t = y.Gg3.BRAINTREE.KEY.startsWith("production_")
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
                        E.h.dispatch({ type: "BRAINTREE_CREATE_PAYPAL_CLIENT_SUCCESS", paypalClient: e });
                })
                .catch(() => E.h.dispatch({ type: "BRAINTREE_CREATE_PAYPAL_CLIENT_FAIL" }));
        });
}
function v() {
    let e = A.A.getPayPalClient();
    if (null == e) throw Error("braintree paypal client must be initialized before calling this");
    E.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_START" });
    let t = Promise.resolve("");
    (0, S.isDesktop)() && (t = (0, g.jf)(y.hes.PAYPAL)),
        t
            .then(() => e.tokenize({ flow: "vault" }))
            .then((e) => {
                let { email: t, firstName: n, lastName: i, billingAddress: r } = e.details;
                E.h.dispatch({
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
                n === y.Q7O.PAYPAL_POPUP_CLOSED || null == n
                    ? E.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED" })
                    : (E.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_FAIL", message: t, code: n }),
                      I.pM(Error(`Braintree Paypal Error: ${t} ${n} ${i}`)));
            });
}
function R() {
    let e = A.A.getVenmoClient();
    if (null == e) throw Error("Braintree Venmo client must be initialized before calling tokenize.");
    E.h.dispatch({ type: "BRAINTREE_TOKENIZE_VENMO_START" }),
        e
            .tokenize()
            .then((e) => {
                let { username: t } = e.details;
                E.h.dispatch({ type: "BRAINTREE_TOKENIZE_VENMO_SUCCESS", nonce: e.nonce, username: t });
            })
            .catch((e) => {
                let { message: t, code: n, details: i } = e;
                [y.Q7O.VENMO_APP_CANCELED, y.Q7O.VENMO_DESKTOP_CANCELED, y.Q7O.VENMO_CANCELED].includes(n)
                    ? E.h.dispatch({ type: "BRAINTREE_TOKENIZE_VENMO_FAIL_CANCELED" })
                    : (E.h.dispatch({ type: "BRAINTREE_TOKENIZE_VENMO_FAIL", message: t, code: n }),
                      I.pM(Error(`Braintree Venmo Error: ${t} ${n} ${i}`)));
            });
}
function O(e, t) {
    if (null == e) return Promise.resolve();
    E.h.dispatch(t);
    try {
        return Promise.resolve(e.teardown());
    } catch (e) {
        return Promise.resolve();
    }
}
var b = n(391048),
    D = n(292666),
    L = n(812745),
    w = n(825755),
    M = n(375708);
class P extends a.PureComponent {
    componentDidMount() {
        null != this.props.paypalClient && v();
    }
    componentDidUpdate(e) {
        null == e.paypalClient && null != this.props.paypalClient && v();
    }
    componentWillUnmount() {
        O(A.A.getPayPalClient(), { type: "BRAINTREE_TEARDOWN_PAYPAL_CLIENT" }).then(() => {
            null != A.A.getClient() && N();
        });
    }
    render() {
        let { braintreeEmail: e, paypalClient: t } = this.props;
        return (0, s.jsx)(D.k, {
            label: M.intl.string(M.t.QQBAos),
            leading: { type: "image", src: (0, L.Nj)(L.Ay.Types.PAYPAL) },
            value: e,
            readOnly: !0,
            placeholder: null == t ? M.intl.string(M.t.dte2M9) : M.intl.string(M.t.hopw7X),
        });
    }
}
let x = c.Ay.connectStores([A.A, w.A], () => ({
    braintreeEmail: w.A.braintreeEmail,
    paypalClient: A.A.getPayPalClient(),
}))(P);
var k = n(534514),
    U = n(834730),
    G = n(504998);
class F extends a.PureComponent {
    componentDidMount() {
        null != this.props.venmoClient && R();
    }
    componentDidUpdate(e) {
        null == e.venmoClient && null != this.props.venmoClient && R();
    }
    componentWillUnmount() {
        O(A.A.getVenmoClient(), { type: "BRAINTREE_TEARDOWN_VENMO_CLIENT" }).then(() => {
            null != A.A.getClient() && C();
        });
    }
    render() {
        let { venmoUsername: e, className: t, venmoClient: n } = this.props,
            i = null != e && "" !== e;
        return (0, s.jsxs)("div", {
            className: t,
            children: [
                (0, s.jsx)(L.Ay, { type: L.Ay.Types.VENMO, size: L.y3.MEDIUM, className: G.Z }),
                i
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)(k.D, {
                                  variant: e.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
                                  className: G.y,
                                  children: M.intl.format(M.t.DowIre, { venmoUsername: e }),
                              }),
                              (0, s.jsx)(U.E, {
                                  variant: "text-md/medium",
                                  className: G.y,
                                  children: M.intl.string(M.t.kmEvnR),
                              }),
                          ],
                      })
                    : (0, s.jsx)(U.E, {
                          variant: "text-md/medium",
                          className: G.y,
                          children: null == n ? M.intl.string(M.t["2ouZDU"]) : M.intl.string(M.t.mIL6Jb),
                      }),
            ],
        });
    }
}
let V = c.Ay.connectStores([A.A, w.A], () => ({ venmoUsername: w.A.venmoUsername, venmoClient: A.A.getVenmoClient() }))(
    F,
);
var B = n(891197),
    j = n(503698),
    H = n.n(j),
    Y = n(305866),
    W = n(287809),
    K = n(832208),
    $ = n(661531),
    z = n(602853),
    q = n(511274),
    Z = n(670739),
    X = n(661772);
let Q = function (e) {
    let t = a.useRef(null),
        { stripeType: n, flipped: i, updateCompleted: r, onFocus: l, onBlur: u } = e,
        [c, d] = a.useState(L.Be.UNKNOWN),
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
                                    ? m(M.intl.string(M.t.eOIfuy))
                                    : null != e.error
                                      ? m(M.intl.string(M.t.x4pWtJ))
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
                            null != e.error || (e.empty && f) ? m(M.intl.string(M.t["9/zZdl"])) : m(null), S(e);
                        }),
                            e.on("focus", y),
                            e.on("blur", C);
                        break;
                    }
                    case "cardCvc": {
                        let e = I.getElement(o.CardCvcElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            null != e.error || (e.empty && f) ? m(M.intl.string(M.t.ro4isZ)) : m(null), S(e);
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
    let v = (0, z.r)($.A.colors.TEXT_SUBTLE).hex(),
        R = (0, z.r)($.A.colors.TEXT_STRONG).hex();
    function O() {
        return H()(Z.vB, { [Z.Tn]: null !== E, [Z.iH]: _, [Z.yD]: "cardNumber" === n });
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
            className: Z.Zm,
            "data-stripe-type": n,
            children: [
                (0, s.jsx)("div", { ref: t, className: H()(Z.iw, X.hF) }),
                (function () {
                    switch (n) {
                        case "cardNumber":
                            return (0, s.jsxs)("div", {
                                children: [
                                    (0, s.jsx)(L.Ay, { className: Z.Ie, type: c, flipped: i }),
                                    (0, s.jsx)(o.CardNumberElement, {
                                        options: { style: g, placeholder: M.intl.string(M.t.gPRHfw), disableLink: !1 },
                                        className: O(),
                                    }),
                                ],
                            });
                        case "cardExpiry":
                            return (0, s.jsx)(o.CardExpiryElement, {
                                options: { style: g, placeholder: M.intl.string(M.t.xeEWQ6) },
                                className: O(),
                            });
                        case "cardCvc":
                            return (0, s.jsx)(o.CardCvcElement, {
                                options: { style: g, placeholder: M.intl.string(M.t.wZz04F) },
                                className: O(),
                            });
                    }
                })(),
                (0, s.jsx)(q.U, { error: E }),
            ],
        })
    );
};
var J = n(142970),
    ee = n(863991);
let et = function (e) {
    let { onCardInfoChange: t, error: n } = e,
        i = a.useRef(t),
        [r, o] = a.useState(!1),
        [l, u] = a.useState({}),
        [c, d] = a.useState({ name: "", country: "", postalCode: "" }),
        [_, h] = a.useState({}),
        [f, p] = a.useState({}),
        { setFocusLockDisabled: E } = a.useContext(Y.M);
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
            return (e || _.name) && "" === c.name && (t.name = M.intl.string(M.t.lIkVsi)), t;
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
                W.default.getCurrentUser()?.nsfwAllowed
                    ? (0, s.jsxs)("div", {
                          className: J.Rm,
                          children: [
                              (0, s.jsx)("div", { className: H()(L.y3.SMALL, J.eo, J.Ud) }),
                              (0, s.jsx)("div", { className: H()(L.y3.SMALL, J.DR, J.Ud) }),
                              (0, s.jsx)("div", { className: H()(L.y3.SMALL, J.k4, J.Ud) }),
                              (0, s.jsx)("div", { className: H()(L.y3.SMALL, J.a3, J.Ud) }),
                              (0, s.jsx)("div", { className: H()(L.y3.SMALL, J.CY, J.Ud) }),
                              (0, s.jsx)("div", { className: H()(L.y3.SMALL, J.Q5, J.Ud) }),
                              (0, s.jsx)("div", { className: H()(L.y3.SMALL, J.YA, J.Ud) }),
                          ],
                      })
                    : (0, s.jsxs)("div", {
                          className: J.Rm,
                          children: [
                              (0, s.jsx)("div", { className: H()(L.y3.SMALL, J.aq, J.Ud) }),
                              (0, s.jsx)("div", { className: H()(L.y3.SMALL, J.VX, J.Ud) }),
                              (0, s.jsx)("div", { className: H()(L.y3.SMALL, J.Yi, J.Ud) }),
                              (0, s.jsx)("div", { className: H()(L.y3.SMALL, J.qR, J.Ud) }),
                              (0, s.jsx)("div", { className: H()(L.y3.SMALL, J.m2, J.Ud) }),
                              (0, s.jsx)("div", { className: H()(L.y3.SMALL, J.Ij, J.Ud) }),
                              (0, s.jsx)("div", { className: H()(L.y3.SMALL, J._V, J.Ud) }),
                          ],
                      }),
                (0, s.jsx)(K.A, {
                    form: [
                        {
                            fields: [
                                {
                                    id: "card-number",
                                    name: "cardNumber",
                                    title: () => M.intl.string(M.t.cVyJ3o),
                                    getClassNameForLayout: () => ee.c6,
                                    renderInput: () =>
                                        (0, s.jsx)(Q, {
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
                                    title: () => M.intl.string(M.t["CeBa/4"]),
                                    getClassNameForLayout: () => ee.ep,
                                    renderInput: () =>
                                        (0, s.jsx)(Q, {
                                            stripeType: "cardExpiry",
                                            updateCompleted: (e) => g("cardExpiry", e),
                                            onFocus: m,
                                        }),
                                },
                                {
                                    id: "card-cvc",
                                    name: "cardCvc",
                                    title: () => M.intl.string(M.t.Fd3rOz),
                                    getClassNameForLayout: () => ee.ep,
                                    renderInput: () =>
                                        (0, s.jsx)(Q, {
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
                                    title: () => M.intl.string(M.t.VUlFdU),
                                    autoComplete: "cc-name",
                                    placeholder: () => M.intl.string(M.t["yf7ms+"]),
                                    getClassNameForLayout: () => ee.c6,
                                    renderInput: (e) => (0, s.jsx)(D.k, { ...e }),
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
                            i[t] && "" === e ? "name" === t && (r.name = M.intl.string(M.t.lIkVsi)) : delete r[t],
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
var en =
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
function ei(e) {
    if (null != e) {
        if (e.hasCardError()) return "credit_card_information";
        if (e.hasAddressError()) return "address";
    }
    return null;
}
var er = n(567333);
function es(e) {
    let { billingError: t, onCardInfoChange: n } = e,
        i = null != t && (null == t.code || ei(t) === en.CREDIT_CARD_INFORMATION);
    return (0, s.jsxs)(a.Fragment, {
        children: [
            i
                ? (0, s.jsx)("div", {
                      className: er.QK,
                      children: (0, s.jsx)(p.w, { type: "critical", children: M.intl.string(M.t["4vnhKV"]) }),
                  })
                : null,
            (0, s.jsx)(et, { onCardInfoChange: n, error: t }),
        ],
    });
}
function ea(e) {
    let { className: t, submitting: n, stripePaymentMethod: i } = e,
        { card: r } = i ?? {},
        a = null != r ? L.Ay.getType(r.brand) : L.Ay.Types.UNKNOWN;
    return (0, s.jsx)("div", {
        className: t,
        children: (0, s.jsx)(D.k, {
            label: M.intl.string(M.t["mmDvV+"]),
            leading: { type: "image", src: (0, L.Nj)(a) },
            value: n && null != r ? M.intl.formatToPlainString(M.t.bCynoK, r) : void 0,
            readOnly: !0,
            placeholder: M.intl.string(M.t.bWMH78),
        }),
    });
}
var eo = n(964486),
    el = n(475743),
    eu = n(446044),
    ec = n(721101),
    ed = n(648335),
    e_ = n(148077);
let eh = function (e) {
    let { onAccountHolderNameChange: t, billingAddressInfo: n } = e,
        i = a.useRef(null);
    return (0, s.jsx)("div", {
        className: e_.r,
        children: (0, s.jsx)(D.k, {
            label: M.intl.string(M.t.sN3wrd),
            inputRef: i,
            name: M.intl.string(M.t.sN3wrd),
            placeholder: M.intl.string(M.t.sN3wrd),
            onChange: (e) => t(e),
            value: n.name,
        }),
    });
};
var ef = n(462887),
    ep = n(331322),
    eE = n(736653),
    em = n(818348),
    eg = n(600954);
let eA = function (e) {
    let t = (0, eE.Ay)(),
        n = a.useRef(null),
        [i, r] = a.useState({}),
        l = (0, z.r)($.A.colors.BACKGROUND_BASE_LOWER).hex();
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
                    borderRadius: $.A.radii.xs,
                },
            });
        }, [n, l]),
        e.type)
    ) {
        case em.he.PRZELEWY24: {
            let r = (0, ef.M)(t) ? "/assets/f4150b3aed6c4679.svg" : "/assets/8b825aafb2e4dbed.svg",
                { onNameChange: a, onEmailChange: l, onP24BankChange: u, p24BankValue: c, billingAddressInfo: d } = e;
            return (0, s.jsx)("div", {
                className: eg.rf,
                children: (0, s.jsxs)(ep.B, {
                    gap: 16,
                    children: [
                        (0, s.jsx)(D.k, {
                            label: M.intl.string(M.t["w/qqKK"]),
                            inputRef: n,
                            name: M.intl.string(M.t["w/qqKK"]),
                            placeholder: M.intl.string(M.t["w/qqKK"]),
                            onChange: (e) => l(e),
                            value: d.email,
                        }),
                        (0, s.jsx)(D.k, {
                            label: M.intl.string(M.t["yf7ms+"]),
                            name: M.intl.string(M.t["yf7ms+"]),
                            placeholder: M.intl.string(M.t["yf7ms+"]),
                            onChange: (e) => a(e),
                            value: d.name,
                        }),
                        (0, s.jsxs)(ep.B, {
                            gap: 4,
                            children: [
                                (0, s.jsx)(U.E, { variant: "text-sm/semibold", children: M.intl.string(M.t.De3b8t) }),
                                (0, s.jsx)(o.P24BankElement, {
                                    options: { value: c, style: i },
                                    onChange: (e) => u(e.value),
                                }),
                                (0, s.jsx)("div", {
                                    className: eg.je,
                                    children: (0, s.jsx)("img", { src: r, alt: "Przelewy24" }),
                                }),
                            ],
                        }),
                    ],
                }),
            });
        }
        case em.he.EPS: {
            let { onAccountHolderNameChange: r, onEPSBankChange: a, epsBankValue: l, billingAddressInfo: u } = e,
                c = (0, ef.M)(t) ? "/assets/025b24b0055c8d81.svg" : "/assets/1dae7d71a65fd90f.svg";
            return (0, s.jsx)("div", {
                className: eg.rf,
                children: (0, s.jsxs)(ep.B, {
                    gap: 16,
                    children: [
                        (0, s.jsx)(D.k, {
                            label: M.intl.string(M.t.sN3wrd),
                            inputRef: n,
                            name: M.intl.string(M.t.sN3wrd),
                            placeholder: M.intl.string(M.t.sN3wrd),
                            onChange: (e) => r(e),
                            value: u.name,
                        }),
                        (0, s.jsxs)(ep.B, {
                            gap: 4,
                            children: [
                                (0, s.jsx)(U.E, { variant: "text-sm/semibold", children: M.intl.string(M.t.dFyV07) }),
                                (0, s.jsx)(o.EpsBankElement, {
                                    options: { value: l, style: i },
                                    onChange: (e) => a(e.value),
                                }),
                                (0, s.jsx)("div", {
                                    className: eg.je,
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
var eI = n(211528),
    eT = n(71804),
    eS = n(31823);
n(426398), n(211083);
var ey = n(872452);
n(21713);
var eC = n(46332),
    eN = n(783327),
    ev = n(626584),
    eR = n(166532),
    eO = n(69494),
    eb = n(901930),
    eD = n(19311),
    eL = n(482132),
    ew = n(615310),
    eM = n(364840),
    eP = n(73825),
    ex = n(558620),
    ek = n(683433),
    eU = n(36167),
    eG = n(937008),
    eF = (((r = {})[(r.UNKNOWN = 0)] = "UNKNOWN"), (r[(r.PENDING = 1)] = "PENDING"), (r[(r.DONE = 2)] = "DONE"), r);
let eV = 0,
    eB = null,
    ej = null,
    eH = null;
class eY extends c.Ay.Store {
    static displayName = "BrowserCheckoutStateStore";
    get browserCheckoutState() {
        return eV;
    }
    get loadId() {
        return eB;
    }
    get skuId() {
        return ej;
    }
    get planId() {
        return eH;
    }
}
let eW = new eY(E.h, {
    USER_PAYMENT_BROWSER_CHECKOUT_STARTED: function (e) {
        (eV = 1), (eB = e.loadId);
    },
    USER_PAYMENT_BROWSER_CHECKOUT_DONE: function (e) {
        eB === e.loadId && ((ej = e.skuId ?? null), (eH = e.skuSubscriptionPlanId ?? null), (eV = 2));
    },
});
var eK = n(788868),
    e$ = n(790262);
let ez = (e) => {
    let t,
        { step: n, onPurchaseComplete: i, onHandoffFailure: r } = e,
        {
            setSelectedSkuId: o,
            setSelectedPlanId: l,
            contextMetadata: u,
        } = (0, eC.t4)((e) => ({
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            contextMetadata: e.contextMetadata,
        })),
        {
            browserCheckoutState: d,
            browserCheckoutStateLoadId: _,
            browserCheckoutStateSkuId: h,
            browserCheckoutStatePlanId: f,
        } = (0, c.cf)([eW], () => ({
            browserCheckoutState: eW.browserCheckoutState,
            browserCheckoutStateLoadId: eW.loadId,
            browserCheckoutStateSkuId: eW.skuId,
            browserCheckoutStatePlanId: eW.planId,
        })),
        p = (0, ex.A)(),
        { isGift: E } = (0, eG.Pv)(),
        [m, A] = a.useState(!1);
    switch (n) {
        case eR.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
            t = y.do8.GOOGLE_PAY;
            break;
        case eR.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
            t = y.do8.APPLE_PAY;
    }
    return (
        a.useEffect(() => {
            let e = setTimeout(() => {
                m ||
                    (A(!0),
                    (0, g.Ze)(u.loadId),
                    (0, eU.my)(
                        {
                            planId: p?.id ?? eK.gD.PREMIUM_MONTH_TIER_2,
                            isGift: E,
                            loadId: u.loadId,
                            paymentMethodType: t,
                        },
                        r,
                    ));
            }, 1e3);
            return () => clearTimeout(e);
        }, [p, E, u, r, A, m, t]),
        a.useEffect(() => {
            null !== h && (eK.oz.includes(h) && ((0, eP.ur)(h), (0, g.hP)()), o(h)),
                null !== f && l(f),
                _ === u.loadId && d === eF.DONE && i();
        }, [o, l, d, _, h, f, u, i]),
        (0, s.jsxs)("div", {
            className: e$.rf,
            children: [
                (0, s.jsx)(k.D, { variant: "heading-xl/bold", children: M.intl.string(M.t.C4HYfy) }),
                (0, s.jsx)(U.E, { variant: "text-md/normal", className: e$.h_, children: M.intl.string(M.t.xfG7Jp) }),
            ],
        })
    );
};
function eq(e) {
    let { onPrimaryClick: t, onBackClick: n } = e;
    return (0, s.jsx)(eM.j, {
        children: (0, s.jsxs)("div", {
            className: e$.kL,
            children: [
                (0, s.jsx)(ek.A, { onClick: n }),
                (0, s.jsx)(ek.F, { onClick: t, children: M.intl.string(M.t["4Qvmmj"]) }),
            ],
        }),
    });
}
var eZ = n(615405),
    eX = n(153084),
    eQ = n(295405),
    eJ = n(71319),
    e0 = n(67480),
    e1 = n(174459),
    e2 = n(427262),
    e3 = n(251913),
    e6 = n(632638),
    e4 = n(632088);
let e5 = null,
    e7 = null;
class e8 extends c.Ay.Store {
    static displayName = "AdyenStore";
    get client() {
        return e5;
    }
    get cashAppPayComponent() {
        return e7;
    }
}
let e9 = new e8(E.h, {
    ADYEN_CREATE_CLIENT_SUCCESS: function (e) {
        let { client: t } = e;
        e5 = t;
    },
    ADYEN_TEARDOWN_CLIENT: function () {
        e5 = null;
    },
    ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS: function (e) {
        let { component: t } = e;
        e7 = t;
    },
});
async function te() {
    return await m.Bo.get({ url: y.Rsh.BILLING_ADYEN_PAYMENT_METHODS, oldFormErrors: !0, rejectWithError: !1 });
}
async function tt() {
    try {
        let e = await te(),
            { default: t } = await Promise.all([n.e("94678"), n.e("40002")]).then(n.bind(n, 971193)),
            i = await t({
                environment: y.Gg3.ADYEN.KEY.startsWith("live_") ? "live" : "test",
                clientKey: y.Gg3.ADYEN.KEY,
                analytics: { enabled: !1 },
                paymentMethodsResponse: e.body,
            });
        E.h.dispatch({ type: "ADYEN_CREATE_CLIENT_SUCCESS", client: i }),
            (function (e) {
                if (null != e9.cashAppPayComponent) {
                    ti(), tn();
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
                            if (n) E.h.dispatch({ type: "ADYEN_CASH_APP_PAY_SUBMIT_SUCCESS", data: t });
                            else throw (0, g.i0)("Cash App Pay setup attempt is not valid.");
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
                                        (n = !1), (t = M.intl.string(M.t.TJ8dDB));
                                }
                                (0, g.i0)(e.message, n, t);
                            }
                        },
                    })
                    .mount(`#${e4.h}`);
                E.h.dispatch({ type: "ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS", component: t });
            })(i);
    } catch (e) {
        (0, I.pM)(e), E.h.dispatch({ type: "ADYEN_CREATE_CLIENT_FAIL" });
    }
}
function tn() {
    let e = e9.cashAppPayComponent;
    if (null == e) throw Error("Adyen CashAppPay component must be created before mounting.");
    try {
        e.mount(`#${e4.h}`);
    } catch (e) {}
}
function ti() {
    e9.cashAppPayComponent?.unmount();
}
function tr() {
    let e = e9.cashAppPayComponent;
    if (null == e) throw Error("Adyen CashAppPay component must be created before submitting.");
    e.submit();
}
var ts = n(735841);
function ta(e) {
    let { className: t } = e,
        n = (0, c.bG)([e9], () => e9.cashAppPayComponent),
        i = (0, c.bG)([w.A], () => w.A.adyenPaymentData);
    a.useEffect(
        () => (
            null == i && null != n && (tn(), tr()),
            () => {
                ti();
            }
        ),
        [i, n],
    );
    let r = i?.paymentMethod?.cashtag ?? "",
        o = null != i && "" !== r;
    return (0, s.jsxs)("div", {
        className: t,
        children: [
            (0, s.jsx)(L.Ay, { type: L.Ay.Types.CASH_APP, size: L.y3.MEDIUM, className: ts.K }),
            o
                ? (0, s.jsxs)(s.Fragment, {
                      children: [
                          (0, s.jsx)(k.D, {
                              variant: r.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
                              className: ts.y,
                              children: M.intl.format(M.t["ze/1yE"], { cashtag: r }),
                          }),
                          (0, s.jsx)(U.E, {
                              variant: "text-md/medium",
                              className: ts.y,
                              children: M.intl.string(M.t.VPOx7N),
                          }),
                      ],
                  })
                : (0, s.jsx)(U.E, {
                      variant: "text-md/medium",
                      className: ts.y,
                      children: null == n ? M.intl.string(M.t["CgVe/w"]) : M.intl.string(M.t["1MqcjI"]),
                  }),
        ],
    });
}
var to = n(73079),
    tl = n(459357),
    tu = n(550238),
    tc = n(869177),
    td = n(71532),
    t_ = n(218075);
let th = [eR.pn.PAYMENT_TYPE],
    tf = [eR.pn.PAYMENT_TYPE, eR.pn.CREDIT_CARD_INFORMATION, eR.pn.ADDRESS],
    tp = [eR.pn.PAYMENT_TYPE, eR.pn.PAYPAL_INFORMATION, eR.pn.ADDRESS],
    tE = [eR.pn.PAYMENT_TYPE, eR.pn.VENMO_INFORMATION, eR.pn.ADDRESS],
    tm = [eR.pn.PAYMENT_TYPE, eR.pn.CASH_APP_INFORMATION, eR.pn.ADDRESS],
    tg = [eR.pn.PAYMENT_TYPE, eR.pn.PRZELEWY24_INFORMATION, eR.pn.ADDRESS],
    tA = [eR.pn.PAYMENT_TYPE, eR.pn.EPS_INFORMATION, eR.pn.ADDRESS],
    tI = [eR.pn.PAYMENT_TYPE, eR.pn.IDEAL_INFORMATION, eR.pn.ADDRESS],
    tT = [eR.pn.PAYMENT_TYPE, eR.pn.ADDRESS],
    tS = {
        SHARED_ADD_PAYMENT_STEPS: th,
        SHARED_CREDIT_CARD_STEPS: tf,
        SHARED_PAYPAL_STEPS: tp,
        SHARED_VENMO_STEPS: tE,
        SHARED_PRZELEWY24_STEPS: tg,
        SHARED_EPS_STEPS: tA,
        SHARED_IDEAL_STEPS: tI,
        SHARED_CASH_APP_STEPS: tm,
        SHARED_TYPE_AND_ADDRESS_STEPS: tT,
    },
    ty = {
        SHARED_ADD_PAYMENT_STEPS: [eR.pn.PAYMENT_ELEMENT],
        SHARED_CREDIT_CARD_STEPS: [eR.pn.PAYMENT_ELEMENT, eR.pn.ADDRESS],
        SHARED_PAYPAL_STEPS: [eR.pn.PAYMENT_ELEMENT, eR.pn.PAYPAL_INFORMATION, eR.pn.ADDRESS],
        SHARED_VENMO_STEPS: [eR.pn.PAYMENT_ELEMENT, eR.pn.VENMO_INFORMATION, eR.pn.ADDRESS],
        SHARED_CASH_APP_STEPS: [eR.pn.PAYMENT_ELEMENT, eR.pn.CASH_APP_INFORMATION, eR.pn.ADDRESS],
        SHARED_PRZELEWY24_STEPS: [eR.pn.PAYMENT_ELEMENT, eR.pn.PRZELEWY24_INFORMATION, eR.pn.ADDRESS],
        SHARED_EPS_STEPS: [eR.pn.PAYMENT_ELEMENT, eR.pn.EPS_INFORMATION, eR.pn.ADDRESS],
        SHARED_IDEAL_STEPS: [eR.pn.PAYMENT_ELEMENT, eR.pn.ADDRESS],
        SHARED_TYPE_AND_ADDRESS_STEPS: [eR.pn.PAYMENT_ELEMENT, eR.pn.ADDRESS],
    };
var tC = n(710617);
function tN(e) {
    return () => (null != w.A.error && (0, b.ET)(), e());
}
function tv(e) {
    let { onPrimary: t, onBack: n, ...i } = e,
        r = t;
    null != t && (r = tN(t));
    let a = n;
    return null != n && (a = tN(n)), (0, s.jsx)(eD.Ay, { ...i, onPrimary: r, onBack: a });
}
function tR(e) {
    let { paymentSourceTypeRestrictions: t } = e,
        n = null != t && t.length > 0 ? t_.fU.ADD_NEW_PAYMENT_METHOD : void 0,
        { enabled: i } = (0, tl.c)({ location: "AddPaymentStep" });
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(t_.je, { paymentRestrictionBannerType: n }),
            (0, s.jsx)(to.A, { ...e }),
            i && (0, s.jsx)(ey.Z4, { className: tC.SO }),
        ],
    });
}
function tO(e) {
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
            CREDIT_CARD_STEPS: E,
            PAYPAL_STEPS: m,
            VENMO_STEPS: A,
            PAYMENT_REQUEST_STEPS: I,
            PRZELEWY24_STEPS: T,
            EPS_STEPS: y,
            IDEAL_STEPS: C,
            CASH_APP_STEPS: N,
            setConnectorPaymentRequestReady: v,
            connectorPaymentRequestRef: R,
        } = e,
        { activitySessionId: O } = (0, eS.V)(),
        D = (0, eC.t4)((e) => e.contextMetadata),
        { setBillingAddressState: L } = l;
    function P(e, i) {
        switch (e) {
            case em.he.CARD:
                a ? u(eR.pn.AWAITING_BROWSER_CHECKOUT) : (c(E), u(eR.pn.CREDIT_CARD_INFORMATION));
                break;
            case em.he.PAYPAL:
                c(m), u(eR.pn.PAYPAL_INFORMATION);
                break;
            case em.he.VENMO:
                c(A), u(eR.pn.VENMO_INFORMATION);
                break;
            case em.he.PAYMENT_REQUEST:
                a && "googlePay" === i
                    ? u(eR.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY)
                    : a && "applePay" === i
                      ? u(eR.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY)
                      : (c(I), u(eR.pn.PAYMENT_REQUEST_INFORMATION));
                break;
            case em.he.PRZELEWY24:
                c(T), u(eR.pn.PRZELEWY24_INFORMATION);
                break;
            case em.he.EPS:
                c(y), u(eR.pn.EPS_INFORMATION);
                break;
            case em.he.IDEAL:
                c(C), u(eR.pn.IDEAL_INFORMATION);
                break;
            case em.he.CASH_APP:
                c(N), u(eR.pn.CASH_APP_INFORMATION);
                break;
            case em.he.GIROPAY:
            case em.he.PAYSAFE_CARD:
            case em.he.GCASH:
            case em.he.GRABPAY_MY:
            case em.he.MOMO_WALLET:
            case em.he.KAKAOPAY:
            case em.he.GOPAY_WALLET:
            case em.he.BANCONTACT:
                c({ steps: [...t, ...tT, ...n], methodType: e }), u(eR.pn.ADDRESS);
        }
        null != w.A.error && (0, b.ET)();
    }
    async function x(e, t) {
        if (((0, b.mf)(e), null == e)) return void o();
        d(e);
        let { billingAddressInfo: n } = (0, td.uK)(e),
            r = (0, tu.Qd)(n);
        if (((null == n.name || "" === n.name) && null != t && (n.name = t), L({ isValid: r, info: n }), !r))
            return void u(eR.pn.ADDRESS);
        try {
            var s;
            (s = await (0, g.Tv)(e, n, i)), L((e) => ({ ...e, info: n })), c(I), f(s);
        } catch (e) {
            o();
        }
    }
    if (_ === eR.pn.ATTEMPT_GOOGLE_PAY || _ === eR.pn.ATTEMPT_APPLE_PAY) {
        let e = M.intl.string(_ === eR.pn.ATTEMPT_APPLE_PAY ? M.t.czhXDv : M.t.Zj2xQ0);
        return (0, s.jsx)(tc.V, {
            onChooseType: P,
            paymentRequestWallet: _ === eR.pn.ATTEMPT_APPLE_PAY ? "applePay" : "googlePay",
            onStripePaymentMethodReceived: x,
            onPaymentRequestFailure: () => {
                P(em.he.CARD), h(e);
            },
            onValidPaymentRequest: () => v(!0),
            paymentRequestRef: R,
        });
    }
    let k = !(0, S.isDesktop)() || a;
    return (0, s.jsx)(tR, {
        onChooseType: P,
        onStripePaymentMethodReceived: x,
        paymentRequestWallets: k ? ["googlePay", "applePay"] : [],
        isEligibleForTrial: r,
        paymentRequestPaymentContext: { contextMetadata: D, activitySessionId: O },
        paymentSourceTypeRestrictions: p,
    });
}
function tb(e) {
    let {
        onReturn: t,
        shouldUseManaModal: n,
        handleStepChange: i,
        currentStep: r,
        connectorPaymentRequestReady: a,
        showConnectorPaymentRequest: o,
    } = e;
    if (r === eR.pn.ATTEMPT_GOOGLE_PAY || r === eR.pn.ATTEMPT_APPLE_PAY) {
        let e = M.intl.string(r === eR.pn.ATTEMPT_APPLE_PAY ? M.t.WoXvJL : M.t.wnVVr0);
        return (0, s.jsx)(tv, {
            onBack: () => i(eR.pn.PAYMENT_TYPE),
            primaryCTA: eD.Ay.CTAType.CONTINUE,
            primaryText: e,
            onPrimary: () => o(),
            primaryDisabled: !a,
            shouldUseManaModal: n,
        });
    }
    return (0, s.jsx)(tv, { onBack: t, shouldUseManaModal: n });
}
var tD = n(198970),
    tL = n(116673),
    tw = n(773669);
let tM = (e) => {
    let t,
        { billingAddressInfo: n, billingError: i, onBillingAddressChange: r, paymentSourceType: o } = e,
        l = null != i && (null == i.code || ei(i) === en.ADDRESS),
        u = (0, c.bG)([tw.default], () => tw.default.locale);
    switch (o) {
        case y.hes.GIROPAY:
        case y.hes.PAYSAFE_CARD:
        case y.hes.GCASH:
        case y.hes.GRABPAY_MY:
        case y.hes.MOMO_WALLET:
        case y.hes.KAKAOPAY:
        case y.hes.GOPAY_WALLET:
        case y.hes.BANCONTACT:
            t = "en-US" === u ? tD.Ay.Layouts.MODAL_US_WITH_NAME : tD.Ay.Layouts.MODAL_INTL_WITH_NAME;
            break;
        case y.hes.VENMO:
        case y.hes.CASH_APP:
            t = tD.Ay.Layouts.MODAL_US_WITH_NAME;
            break;
        default:
            t = "en-US" === u ? tD.Ay.Layouts.MODAL_US : tD.Ay.Layouts.MODAL_INTL;
    }
    let d = (0, tL.z)();
    0 === n.country.length && null != d && d.length > 0 && (n.country = d[0]);
    let _ = (0, c.bG)([W.default], () => W.default.getCurrentUser()?.storeCountry?.isLocked === !0)
        ? M.intl.string(M.t.Pg2hU0)
        : null;
    return (0, s.jsxs)(a.Fragment, {
        children: [
            l
                ? (0, s.jsx)("div", {
                      className: er.QK,
                      children: (0, s.jsx)(p.w, { type: "critical", children: M.intl.string(M.t.vZ8y7l) }),
                  })
                : null,
            (0, s.jsx)(tD.Ay, {
                className: er.__invalid_formItem,
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
var tP = n(908166),
    tx = n(930767);
async function tk(e, t) {
    let {
        stripe: n,
        stripeElements: i,
        billingAddressState: r,
        lastConfirmedSetupIntentRef: s,
        analyticsLocation: a,
        createSetupIntent: o,
    } = e;
    return {
        paymentSource: await (0, g.im)(
            n,
            i,
            { billingAddress: r.info, paymentSourceType: t, lastConfirmedSetupIntentRef: s, createSetupIntent: o },
            a,
        ),
        responseType: "payment-source",
    };
}
async function tU(e, t) {
    let { stripe: n, billingAddressState: i, analyticsLocation: r } = e;
    return { paymentSource: await (0, g.bw)(n, i.info, t, r), responseType: "payment-source" };
}
async function tG(e) {
    let { braintreeNonce: t, billingAddressState: n, analyticsLocation: i } = e;
    return (
        u()(null != t, "Missing braintreeNonce"),
        { paymentSource: await (0, g.u1)(t, n.info, i), responseType: "payment-source" }
    );
}
async function tF(e, t, n) {
    let { adyenPaymentData: i, billingAddressState: r, analyticsLocation: s } = e;
    if (null != n && n.requireAdyenPaymentData && null == i)
        throw new tx.v({
            message: "Missing adyenPaymentData",
            extraSentryInformation: { paymentSourceType: t, analyticsLocation: s },
        });
    let a = null != n ? n.overwriteSubscriptionPaymentSource : void 0,
        { redirectConfirmation: o, paymentSource: l } = await (0, g.$M)(r.info, t, s, i ?? void 0, a);
    return { hasRedirectURL: o, paymentSource: l };
}
async function tV(e, t) {
    let { billingAddressState: n, analyticsLocation: i } = e;
    return { paymentSource: await (0, g.A8)(n.info, t, i), responseType: "payment-source" };
}
let tB = {
        [em.he.CARD]: {
            submitAddressStep: async (e) =>
                e.shouldUsePaymentElement
                    ? await tk(e, em.he.CARD)
                    : {
                          paymentSource: await (0, g.u6)(
                              e.stripe,
                              e.tokenState.token,
                              e.billingAddressState.info,
                              e.analyticsLocation,
                          ),
                          responseType: "payment-source",
                      },
        },
        [em.he.PAYMENT_REQUEST]: {
            submitPaymentElementStepHandler: async (e) => {
                let { stripe: t, stripeElements: n, remountAddressElement: i, setBillingAddressState: r } = e,
                    { paymentMethod: s } = await (0, g.YB)(t, n),
                    { billingAddressInfo: a } = (0, td.uK)(s);
                r((e) => ({ ...e, info: a })), i();
            },
            stepAfterPaymentElement: eR.pn.ADDRESS,
            submitAddressStep: async (e) => {
                if (e.shouldUsePaymentElement) return await tk(e, em.he.PAYMENT_REQUEST);
                let {
                    paymentRequestPaymentMethod: t,
                    onPaymentRequestSourceFailed: n,
                    billingAddressState: i,
                    analyticsLocation: r,
                } = e;
                if (null == t) throw (n(), (0, g.i0)("Missing paymentRequestPaymentMethod"));
                return { paymentSource: await (0, g.Tv)(t, i.info, r), responseType: "payment-source" };
            },
        },
        [em.he.PIX]: { submitAddressStep: async (e) => await tk(e, em.he.PIX) },
        [em.he.IDEAL]: {
            submitAddressStep: async (e) =>
                e.shouldUsePaymentElement
                    ? await tk(e, em.he.IDEAL)
                    : {
                          paymentSource: await (0, g.EB)(e.stripe, e.billingAddressState.info, e.analyticsLocation),
                          responseType: "payment-source",
                      },
        },
        [em.he.PRZELEWY24]: {
            submitAddressStep: async (e) => {
                let { stripe: t, p24BankState: n, billingAddressState: i, analyticsLocation: r } = e;
                if (void 0 === n) throw (0, g.i0)("Bank required for Przelewy24");
                return { paymentSource: await (0, g.TD)(t, { p24Bank: n }, i.info, r), responseType: "payment-source" };
            },
        },
        [em.he.EPS]: {
            submitAddressStep: async (e) => {
                let { stripe: t, epsBankState: n, billingAddressState: i, analyticsLocation: r } = e;
                return { paymentSource: await (0, g.Z9)(t, n, i.info, r), responseType: "payment-source" };
            },
        },
        [em.he.GIROPAY]: { submitAddressStep: async (e) => await tU(e, em.he.GIROPAY) },
        [em.he.BANCONTACT]: { submitAddressStep: async (e) => await tU(e, em.he.BANCONTACT) },
        [em.he.PAYPAL]: { submitAddressStep: async (e) => await tG(e) },
        [em.he.VENMO]: { submitAddressStep: async (e) => await tG(e) },
        [em.he.PAYSAFE_CARD]: { submitAddressStep: async (e) => await tV(e, em.he.PAYSAFE_CARD) },
        [em.he.GRABPAY_MY]: { submitAddressStep: async (e) => await tV(e, em.he.GRABPAY_MY) },
        [em.he.CASH_APP]: {
            submitAddressStep: async (e) => {
                let { paymentSource: t } = await tF(e, em.he.CASH_APP, {
                    requireAdyenPaymentData: !0,
                    overwriteSubscriptionPaymentSource: e.overwriteSubscriptionPaymentSource,
                });
                if (null == t)
                    throw new tx.v({
                        message: "Cash App Pay Payment Source missing",
                        extraSentryInformation: {
                            paymentSourceType: em.he.CASH_APP,
                            analyticsLocation: e.analyticsLocation,
                        },
                    });
                return { paymentSource: t, responseType: "payment-source" };
            },
        },
        [em.he.GCASH]: {
            submitAddressStep: async (e) => {
                let { hasRedirectURL: t } = await tF(e, em.he.GCASH);
                return { hasRedirectURL: t, responseType: "redirect-url" };
            },
        },
        [em.he.MOMO_WALLET]: {
            submitAddressStep: async (e) => {
                let { hasRedirectURL: t } = await tF(e, em.he.MOMO_WALLET);
                return { hasRedirectURL: t, responseType: "redirect-url" };
            },
        },
        [em.he.KAKAOPAY]: {
            submitAddressStep: async (e) => {
                let { hasRedirectURL: t } = await tF(e, em.he.KAKAOPAY);
                return { hasRedirectURL: t, responseType: "redirect-url" };
            },
        },
        [em.he.GOPAY_WALLET]: {
            submitAddressStep: async (e) => {
                let { hasRedirectURL: t } = await tF(e, em.he.GOPAY_WALLET);
                return { hasRedirectURL: t, responseType: "redirect-url" };
            },
        },
    },
    tj = new ev.A("AddPaymentAddressStep.tsx");
function tH(e) {
    let { billingAddressInfo: t, onBillingAddressChange: n, paymentSourceType: i } = e,
        r = (0, c.bG)([w.A], () => w.A.error);
    return (0, s.jsx)(tM, { billingAddressInfo: t, billingError: r, onBillingAddressChange: n, paymentSourceType: i });
}
function tY(e) {
    let { paymentModalArgs: t, shouldUsePaymentElement: n, paymentSourceType: i } = e,
        { billingAddressState: r, setBillingAddressState: a } = t;
    return n
        ? null
        : (0, s.jsx)(tH, {
              billingAddressInfo: r.info,
              onBillingAddressChange: (e, t) => {
                  a({ info: { ...r.info, ...e }, isValid: t });
              },
              paymentSourceType: i,
          });
}
function tW(e) {
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
            combinedStripeElementsRef: h,
            lastConfirmedSetupIntentRef: f,
            shouldUsePaymentElement: p,
        } = e,
        E = (0, eN.S)(),
        { createSetupIntent: m } = (0, tP.x)(),
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
            s = null != e && e in tB ? tB[e] : null;
        if (null == s)
            throw new tx.v({
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
            I(!1), tj.warn(`Error confirming submitting Address Step for Payment Source Type: ${N}`, e);
        }
    }
    let N = c.methodType,
        { backStep: v } = p
            ? { backStep: eR.pn.PAYMENT_ELEMENT }
            : (function (e) {
                  switch (e) {
                      case em.he.CARD:
                          return { backStep: eR.pn.CREDIT_CARD_INFORMATION };
                      case em.he.PAYPAL:
                          return { backStep: eR.pn.PAYPAL_INFORMATION };
                      case em.he.VENMO:
                          return { backStep: eR.pn.VENMO_INFORMATION };
                      case em.he.GIROPAY:
                      case em.he.PAYSAFE_CARD:
                      case em.he.GCASH:
                      case em.he.GRABPAY_MY:
                      case em.he.MOMO_WALLET:
                      case em.he.KAKAOPAY:
                      case em.he.GOPAY_WALLET:
                      case em.he.BANCONTACT:
                          return { backStep: eR.pn.PAYMENT_TYPE };
                      case em.he.EPS:
                          return { backStep: eR.pn.EPS_INFORMATION };
                      case em.he.IDEAL:
                          return { backStep: eR.pn.IDEAL_INFORMATION };
                      case em.he.PRZELEWY24:
                          return { backStep: eR.pn.PRZELEWY24_INFORMATION };
                      case em.he.CASH_APP:
                          return { backStep: eR.pn.CASH_APP_INFORMATION };
                      default:
                          return { backStep: eR.pn.PAYMENT_TYPE };
                  }
              })(N),
        R = p ? () => _(void 0) : () => a(v);
    return (0, s.jsx)(tv, {
        onBack: R,
        primaryCTA: eD.Ay.CTAType.CONTINUE,
        primaryText: M.intl.string(M.t.PDTjLN),
        primarySubmitting: g,
        primaryDisabled: !A.isValid || y,
        onPrimary: C,
        shouldUseManaModal: n,
    });
}
let tK = new ev.A("PaymentElementStepFooter.tsx");
function t$(e) {
    let t = (0, eN.S)(),
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
        { paymentElementSelectedType: f, combinedStripeElementsRef: p, remountAddressElement: E } = e,
        m = a.useCallback(async () => {
            _(!0);
            try {
                if (null == f || !(0, ed.PE)(f)) throw (0, g.ne)("Valid Payment Element source type not found", !0);
                let { steps: e, methodType: n } = d[f];
                o({ steps: e, methodType: n === em.he.UNKNOWN ? f : n });
                let i = tB[f];
                if (null != i && null != i.submitPaymentElementStepHandler) {
                    await i.submitPaymentElementStepHandler({
                        stripe: t,
                        stripeElements: p.current,
                        remountAddressElement: E,
                        setBillingAddressState: h,
                    }),
                        r(i.stepAfterPaymentElement ?? eR.pn.ADDRESS);
                    return;
                }
                let s = (0, ed.eI)(f);
                if (null != s) return void r(s);
                r(eR.pn.ADDRESS);
            } catch (e) {
                tK.error("Error on submitting Payment Element step: ", e.message ?? JSON.stringify(e));
            } finally {
                _(!1);
            }
        }, [f, d, p, E, r, t, o, _, h]);
    return (0, s.jsx)(tv, {
        onBack: l,
        primaryCTA: eD.Ay.CTAType.CONTINUE,
        primaryType: "submit",
        primaryText: M.intl.string(M.t.PDTjLN),
        primarySubmitting: u,
        primaryDisabled: c,
        onPrimary: m,
        shouldUseManaModal: n,
    });
}
var tz = n(394549);
let tq = new ev.A("AddPaymentStep.tsx"),
    tZ = { name: "", cardNumber: "", expirationDate: "", cvc: "" },
    tX = { email: "", name: "", country: "", line1: "", line2: "", city: "", postalCode: "", state: "" };
function tQ(e) {
    let { onCardInfoChange: t } = e,
        n = (0, c.bG)([w.A], () => w.A.error);
    return (0, s.jsx)(es, { billingError: n, onCardInfoChange: t });
}
function tJ() {
    return (0, s.jsx)(x, {});
}
function t0() {
    return (0, s.jsx)(V, {});
}
function t1() {
    return (0, s.jsx)(ta, {});
}
function t2() {
    let e = (0, c.bG)([eZ.A], () => eZ.A.isBusy),
        t = (0, c.bG)([w.A], () => w.A.stripePaymentMethod);
    return (0, s.jsx)(ea, { stripePaymentMethod: t, submitting: e });
}
function t3() {
    return (0, s.jsx)(B.N, {});
}
function t6(e) {
    let t,
        n,
        {
            paymentModalArgs: i,
            initialStep: r,
            prependSteps: l,
            appendSteps: u,
            onReturn: m,
            onComplete: I,
            onStepChange: T,
            breadcrumpSteps: S,
            currentBreadcrumpStep: C,
            header: N,
            analyticsData: O,
            analyticsLocation: b,
            hideBreadcrumbs: D = !1,
            usePaymentModalStep: L = !1,
            isEligibleForTrial: P = !1,
            allowDesktopRedirectPurchase: x = !1,
            toastContent: k,
            continueSessionToInitialStep: U,
            overwriteSubscriptionPaymentSource: G = !1,
            shouldUseManaModal: F = !0,
        } = e,
        V = (0, eN.S)(),
        { activitySessionId: B } = (0, eS.V)(),
        { enabled: j } = (0, eu.Y)({ location: "AddPaymentFlow" }),
        H = (0, eC.t4)((e) => e.contextMetadata),
        Y = (0, ew.l)(),
        W = a.useMemo(() => {
            let e = r === eR.pn.PAYMENT_TYPE || r === eR.pn.PAYMENT_ELEMENT;
            return j && e ? (x ? eR.pn.AWAITING_BROWSER_CHECKOUT : eR.pn.PAYMENT_ELEMENT) : r;
        }, [j, r, x]),
        K = a.useMemo(() => (0, e2.Gn)(), []),
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
                                        ...(r && (null == s || s === em.he.UNKNOWN || (0, ed.PE)(s)) ? ty[t] : tS[t]),
                                        ...i,
                                    ],
                                    methodType: s,
                                };
                            });
                        })(
                            [
                                { sharedStepsKey: "SHARED_TYPE_AND_ADDRESS_STEPS", methodType: em.he.UNKNOWN },
                                { sharedStepsKey: "SHARED_ADD_PAYMENT_STEPS", methodType: em.he.PAYMENT_REQUEST },
                                { sharedStepsKey: "SHARED_ADD_PAYMENT_STEPS" },
                                { sharedStepsKey: "SHARED_CREDIT_CARD_STEPS", methodType: em.he.CARD },
                                { sharedStepsKey: "SHARED_PAYPAL_STEPS", methodType: em.he.PAYPAL },
                                { sharedStepsKey: "SHARED_IDEAL_STEPS", methodType: em.he.IDEAL },
                                { sharedStepsKey: "SHARED_VENMO_STEPS", methodType: em.he.VENMO },
                                { sharedStepsKey: "SHARED_PRZELEWY24_STEPS", methodType: em.he.PRZELEWY24 },
                                { sharedStepsKey: "SHARED_EPS_STEPS", methodType: em.he.EPS },
                                { sharedStepsKey: "SHARED_CASH_APP_STEPS", methodType: em.he.CASH_APP },
                            ],
                            { prependSteps: t, appendSteps: n, paymentElementsEnabled: i },
                        ),
                    [t, n, i],
                ),
                p = (0, a.useMemo)(
                    () => ({
                        [em.he.CARD]: l,
                        [em.he.PAYPAL]: u,
                        [em.he.PAYMENT_REQUEST]: s,
                        [em.he.VENMO]: d,
                        [em.he.CASH_APP]: f,
                        [em.he.IDEAL]: c,
                        [em.he.PRZELEWY24]: _,
                        [em.he.EPS]: h,
                        [em.he.BANCONTACT]: r,
                        [em.he.GOPAY_WALLET]: r,
                        [em.he.KAKAOPAY]: r,
                        [em.he.GCASH]: r,
                        [em.he.PAYSAFE_CARD]: r,
                        [em.he.GRABPAY_MY]: r,
                        [em.he.MOMO_WALLET]: r,
                        [em.he.PIX]: r,
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
        })({ prependSteps: l, appendSteps: u, paymentElementsEnabled: j }),
        [ei, er] = a.useState(W),
        [es, ea] = a.useState(null),
        [eo, el] = a.useState(
            (function (e) {
                switch (e) {
                    case eR.pn.CREDIT_CARD_INFORMATION:
                        return $;
                    case eR.pn.CASH_APP_INFORMATION:
                        return et;
                    default:
                        return { steps: [eR.pn.ADD_PAYMENT_STEPS] };
                }
            })(W),
        );
    a.useEffect(() => {
        (0, g.IV)();
    }, []);
    let ec = (0, c.bG)([w.A], () => w.A.redirectedPaymentSourceId),
        e_ = (0, c.bG)([e9], () => e9.cashAppPayComponent),
        ef = { completeSteps: tt, setIsSubmittingCurrentStep: i.setIsSubmittingCurrentStep },
        ep = a.useRef(ef);
    a.useEffect(() => {
        ep.current = ef;
    }),
        a.useEffect(() => {
            let { completeSteps: e, setIsSubmittingCurrentStep: t } = ep.current;
            (async () => {
                if (null == ec) return;
                await (0, g.$o)();
                let n = eQ.A.getPaymentSource(ec);
                null != n && (e(n), t(!1), w.A.clearRedirectedPaymentSourceId());
            })();
        }, [ec]);
    let eE = a.useCallback(
            function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                ea(null), er(e), t && T({ currentStep: ei, toStep: e });
            },
            [ei, T],
        ),
        eg = a.useCallback(
            (e) => {
                e1.default.track(y.HAw.PAYMENT_FLOW_ADD_SOURCE_COMPLETED, {
                    load_id: H.loadId,
                    analytics_location: b,
                    payment_source_id: e.id,
                    payment_source_type: e.type,
                    payment_source_country: e.paymentMethodCountry,
                });
            },
            [H.loadId, b],
        ),
        ev = (0, c.bG)([w.A], () => w.A.error),
        eM = a.useRef(ev);
    a.useEffect(() => {
        let e = eM.current;
        (eM.current = ev),
            null != ev &&
                ev !== e &&
                e1.default.track(y.HAw.PAYMENT_FLOW_ADD_SOURCE_ERROR, {
                    load_id: H.loadId,
                    analytics_location: b,
                    payment_source_type: eo.methodType,
                    error_code: ev.code,
                    error_message: ev.message,
                });
    }, [ev, H.loadId, b, eo.methodType]);
    let eP = a.useCallback(
            (e) => {
                eg(e),
                    (0, d.P0)(
                        (0, _.o)(void 0 !== k ? k : M.intl.string(M.t["VJPg+l"]), h.Ck.SUCCESS, {
                            position: h.xJ.BOTTOM,
                        }),
                    ),
                    I(ei, e),
                    eE(W, !1);
            },
            [eE, W, ei, I, k, eg],
        ),
        [ex, ek] = a.useState(null),
        {
            setPaymentSourceId: eU,
            creditCardState: eG,
            setCreditCardState: eF,
            setTokenState: eV,
            isSubmittingCurrentStep: eB,
            billingAddressState: ej,
            setBillingAddressState: eH,
            setIsSubmittingCurrentStep: eY,
            braintreeEmail: eW,
            braintreeNonce: eK,
            venmoUsername: e$,
            adyenPaymentData: eZ,
            epsBankState: eX,
            setEpsBankState: eJ,
            p24BankState: e3,
            setP24BankState: e4,
            selectedSkuId: e5,
        } = i,
        e7 = e5 ?? "",
        e8 = (0, c.bG)([e0.A], () => e0.A.get(e7), [e7]),
        te = e8?.eligiblePaymentGateways?.map((e) => e.valueOf());
    function tt(e) {
        eU(e.id), eP(e);
    }
    function tn() {
        el(Q), eE(eR.pn.PAYMENT_TYPE);
    }
    let ti = (0, eI.wD)({
            step: ei,
            continueSessionToInitialStep: U,
            paymentElementsEnabled: j,
            handleStepChange: eE,
            logger: tq,
            shouldLogOnChangeEvents: K || !1,
            onBillingAddressChange: (e, t) => {
                eH({ info: { ...ej.info, ...e }, isValid: t });
            },
        }),
        {
            shouldRenderPaymentElement: ts,
            paymentElementReady: ta,
            paymentElementSelectedType: to,
            returnToPaymentElementStep: tl,
            onBackFromPaymentElement: tu,
            combinedStripeElementsRef: tc,
            stripePaymentElementProps: td,
            stripeAddressElementProps: t_,
            remountAddressElement: th,
            addressElementKey: tf,
        } = ti,
        tp = a.useCallback(() => {
            eE(eR.pn.ADDRESS), j && eI.Ky.includes(ei) && th();
        }, [eE, j, th, ei]),
        tE = a.useCallback(
            (e) => {
                j && null != to && (0, ed.PE)(e) ? tl(e) : eE(eR.pn.PAYMENT_TYPE);
            },
            [j, to, tl, eE],
        ),
        tm = L ? (0, s.jsx)(eb.A, { className: tC._8 }) : null,
        tg = (function () {
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
        case eR.pn.ATTEMPT_GOOGLE_PAY:
        case eR.pn.ATTEMPT_APPLE_PAY:
        case eR.pn.PAYMENT_TYPE:
            (t = (0, s.jsx)(tO, {
                prependSteps: l,
                appendSteps: u,
                analyticsLocation: b,
                isEligibleForTrial: P,
                allowDesktopRedirectPurchase: x,
                onPaymentRequestSourceFailed: tn,
                paymentModalArgs: i,
                handleStepChange: eE,
                setPaymentMethodSteps: el,
                setPaymentRequestPaymentMethod: ek,
                currentStep: ei,
                setInfoNotice: ea,
                completeSteps: tt,
                paymentSourceTypeRestrictions: te,
                CREDIT_CARD_STEPS: $,
                PAYPAL_STEPS: z,
                VENMO_STEPS: X,
                PAYMENT_REQUEST_STEPS: Z,
                PRZELEWY24_STEPS: J,
                EPS_STEPS: ee,
                IDEAL_STEPS: q,
                CASH_APP_STEPS: et,
                ...tg,
            })),
                (n = (0, s.jsx)(tb, {
                    shouldUseManaModal: F,
                    onReturn: m,
                    handleStepChange: eE,
                    currentStep: ei,
                    ...tg,
                }));
            break;
        case eR.pn.PAYMENT_ELEMENT:
            if (!j) throw (0, g.ne)("Payment Elements not enabled, invalid step", !0);
            (t = null),
                (n = (0, s.jsx)(t$, {
                    handleStepChange: eE,
                    shouldUseManaModal: F,
                    setPaymentMethodSteps: el,
                    primarySubmitting: eB,
                    primaryDisabled: !ta,
                    onBack: () => {
                        tu(), m?.();
                    },
                    paymentModalArgs: i,
                    PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: en,
                    ...ti,
                }));
            break;
        case eR.pn.CREDIT_CARD_INFORMATION:
            let tA = async (e) => {
                eY(!0);
                try {
                    let t = await (0, g.YJ)(V, e);
                    eV({ token: t }), eE(eR.pn.ADDRESS);
                } catch (e) {
                    tq.error(e.message ?? JSON.stringify(e));
                } finally {
                    eY(!1);
                }
            };
            t = (0, s.jsx)(tQ, {
                onCardInfoChange: (e, t) => {
                    eF({ info: e, isValid: t }), eH((t) => ({ ...t, info: { ...t.info, name: e.name } }));
                },
            });
            let tI = !eG.isValid,
                tT = () => {
                    eE(eR.pn.PAYMENT_TYPE);
                };
            n = (0, s.jsx)(o.ElementsConsumer, {
                children: (e) => {
                    let { elements: t } = e;
                    return (0, s.jsx)(tv, {
                        onBack: tT,
                        primaryCTA: eD.Ay.CTAType.CONTINUE,
                        primaryType: "submit",
                        primaryText: M.intl.string(M.t.PDTjLN),
                        primarySubmitting: eB,
                        primaryDisabled: tI,
                        onPrimary: () => tA(t),
                        shouldUseManaModal: F,
                    });
                },
            });
            break;
        case eR.pn.AWAITING_BROWSER_CHECKOUT:
        case eR.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
        case eR.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
            let tN = () => {
                el($), eE(j ? eR.pn.PAYMENT_ELEMENT : eR.pn.CREDIT_CARD_INFORMATION);
            };
            (t = (0, s.jsx)(ez, { step: ei, onPurchaseComplete: () => I(ei), onHandoffFailure: tN })),
                (n = (0, s.jsx)(eq, {
                    onPrimaryClick: tN,
                    onBackClick: () => {
                        j ? (tu(), m?.()) : (el(Q), eE(eR.pn.PAYMENT_TYPE));
                    },
                }));
            break;
        case eR.pn.EPS_INFORMATION:
            (t = (0, s.jsx)(eA, {
                type: em.he.EPS,
                onAccountHolderNameChange: (e) => eH({ info: { ...ej.info, name: e }, isValid: ej.isValid }),
                onEPSBankChange: (e) => eJ(e),
                epsBankValue: eX,
                billingAddressInfo: ej.info,
            })),
                (n = (0, s.jsx)(tv, {
                    onBack: () => tE(em.he.EPS),
                    primaryCTA: eD.Ay.CTAType.CONTINUE,
                    primaryText: M.intl.string(M.t.PDTjLN),
                    primaryDisabled: void 0 === eX || "" === eX || "" === ej.info.name,
                    onPrimary: () => tp(),
                    shouldUseManaModal: F,
                }));
            break;
        case eR.pn.IDEAL_INFORMATION:
            (t = (0, s.jsx)(eh, {
                type: em.he.IDEAL,
                onAccountHolderNameChange: (e) => eH({ info: { ...ej.info, name: e }, isValid: ej.isValid }),
                billingAddressInfo: ej.info,
            })),
                (n = (0, s.jsx)(tv, {
                    onBack: () => eE(eR.pn.PAYMENT_TYPE),
                    primaryCTA: eD.Ay.CTAType.CONTINUE,
                    primaryText: M.intl.string(M.t.PDTjLN),
                    primaryDisabled: "" === ej.info.name,
                    onPrimary: () => tp(),
                    shouldUseManaModal: F,
                }));
            break;
        case eR.pn.PRZELEWY24_INFORMATION:
            (t = (0, s.jsx)(eA, {
                type: em.he.PRZELEWY24,
                onNameChange: (e) => eH({ info: { ...ej.info, name: e }, isValid: ej.isValid }),
                onEmailChange: (e) => eH({ info: { ...ej.info, email: e }, isValid: ej.isValid }),
                onP24BankChange: (e) => {
                    e4(e);
                },
                p24BankValue: e3,
                billingAddressInfo: ej.info,
            })),
                (n = (0, s.jsx)(tv, {
                    onBack: () => tE(em.he.PRZELEWY24),
                    primaryCTA: eD.Ay.CTAType.CONTINUE,
                    primaryText: M.intl.string(M.t.PDTjLN),
                    primaryDisabled:
                        void 0 === ej.info.name ||
                        "" === ej.info.name ||
                        void 0 === ej.info.email ||
                        "" === ej.info.email ||
                        void 0 === e3 ||
                        "" === e3,
                    onPrimary: () => tp(),
                    shouldUseManaModal: F,
                }));
            break;
        case eR.pn.PAYPAL_INFORMATION:
            let tR = 0 !== eW.length && null != eK;
            (t = (0, s.jsx)(tJ, {})),
                (n = (0, s.jsx)(tv, {
                    onBack: () => tE(em.he.PAYPAL),
                    primaryCTA: eD.Ay.CTAType.CONTINUE,
                    primaryText: tR ? M.intl.string(M.t.PDTjLN) : M.intl.string(M.t.Djzd7L),
                    onPrimary: () => {
                        let e;
                        return tR
                            ? tp()
                            : void (null == (e = A.A.getLastURL())
                                  ? v()
                                  : (E.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_START" }), window.open(e)));
                    },
                    shouldUseManaModal: F,
                }));
            break;
        case eR.pn.VENMO_INFORMATION:
            let tD = 0 !== e$.length && null != eK;
            (t = (0, s.jsx)(t0, {})),
                (n = (0, s.jsx)(tv, {
                    onBack: () => tE(em.he.VENMO),
                    primaryCTA: eD.Ay.CTAType.CONTINUE,
                    primaryText: tD ? M.intl.string(M.t.PDTjLN) : M.intl.string(M.t["4KoTLM"]),
                    onPrimary: () => (tD ? tp() : void R()),
                    shouldUseManaModal: F,
                }));
            break;
        case eR.pn.PAYMENT_REQUEST_INFORMATION:
            (t = (0, s.jsx)(t2, {})),
                (n = (0, s.jsx)(tv, { onBack: () => eE(eR.pn.PAYMENT_TYPE), shouldUseManaModal: F }));
            break;
        case eR.pn.CASH_APP_INFORMATION:
            let tL = null != eZ;
            (t = (0, s.jsx)(t1, {})),
                (n = (0, s.jsx)(tv, {
                    onBack: () => tE(em.he.CASH_APP),
                    primaryCTA: eD.Ay.CTAType.CONTINUE,
                    primaryText: tL ? M.intl.string(M.t.PDTjLN) : M.intl.string(M.t["9ALP8w"]),
                    onPrimary: () => (tL ? tp() : tr()),
                    primaryDisabled: null == e_,
                    shouldUseManaModal: F,
                }));
            break;
        case eR.pn.ADDRESS:
            let tw = j && null != to;
            (t = (0, s.jsx)(tY, {
                paymentModalArgs: i,
                paymentSourceType: eo.methodType ?? em.he.CARD,
                shouldUsePaymentElement: tw,
            })),
                (n = (0, s.jsx)(tW, {
                    paymentModalArgs: i,
                    shouldUseManaModal: F,
                    analyticsLocation: b,
                    overwriteSubscriptionPaymentSource: G,
                    handleStepChange: eE,
                    onPaymentRequestSourceFailed: tn,
                    paymentRequestPaymentMethod: ex,
                    completeSteps: tt,
                    paymentMethodSteps: eo,
                    shouldUsePaymentElement: tw,
                    ...ti,
                }));
            break;
        case eR.pn.AWAITING_AUTHENTICATION:
            t = (0, s.jsx)(t3, {});
            break;
        default:
            throw new eT.v({ message: `Unexpected step: ${ei}`, extraSentryInformation: { currentStep: ei } });
    }
    let tM = j && ts,
        tP = tM ? "combined_stripe_elements" : void 0,
        tx = (0, s.jsxs)(f.Y, {
            className: tz.C9,
            staticClassName: tz.a2,
            animatedNodeClassName: tz.L2,
            fillParent: !0,
            overrideKey: tP,
            step: ei,
            steps: eo.steps,
            sideMargin: 20,
            children: [
                null != es &&
                    (0, s.jsx)("div", { className: tC.Ns, children: (0, s.jsx)(p.w, { type: "info", children: es }) }),
                tM &&
                    (0, s.jsx)(eI.e4, {
                        step: ei,
                        analyticsContext:
                            null != O ? { activitySessionId: B, contextMetadata: H, analyticsData: O } : void 0,
                        paymentElementSelectedType: to,
                        elementsRef: tc,
                        stripePaymentElementProps: td,
                        stripeAddressElementProps: t_,
                        addressElementKey: tf,
                        billingAddressInfo: ej.info,
                        onSetupError: () => {
                            tu(), eE(eR.pn.PAYMENT_TYPE);
                        },
                        paymentElementFooter: (0, s.jsx)(ey.Z4, {
                            className: tC.SO,
                            stackingBehavior: "stack",
                            onComplete: () => {
                                setTimeout(() => Y(eR.pn.REVIEW), 0);
                            },
                        }),
                    }),
                t,
            ],
        }),
        tk = ei === eR.pn.PAYMENT_TYPE && 0 === l.length ? null : n;
    return L
        ? (0, s.jsxs)(s.Fragment, {
              children: [
                  P && (0, s.jsx)(eO.A, { className: tC.At, isEligibleForTrial: P }),
                  (0, s.jsxs)(eL.dZ, { children: [tm, tx] }),
                  (0, s.jsx)(eL.UX, { children: tk }),
              ],
          })
        : (0, s.jsx)(e6.A, {
              shouldUseManaModal: F,
              steps: S ?? eo.steps,
              currentStep: C ?? ei,
              overrideKey: tP,
              paymentError: i.paymentError,
              header: N,
              hideBreadcrumbs: D,
              body: tx,
              footer: tk,
          });
}
function t4(e) {
    let {
            defaultPaymentSourceId: t,
            paymentSources: n,
            hasFetchedPaymentSources: i,
        } = (0, c.cf)([eQ.A], () => ({
            defaultPaymentSourceId: void 0 !== e ? e : eQ.A.defaultPaymentSourceId,
            paymentSources: eQ.A.paymentSources,
            hasFetchedPaymentSources: eQ.A.hasFetchedPaymentSources,
        })),
        r = (0, c.bG)([e9], () => e9.cashAppPayComponent),
        s = (0, c.bG)([ec.A], () => ec.A.data?.allowed_payment_source_types ?? null);
    (0, eo.Ay)(() => {
        (0, T.j)().then((e) => {
            e.client
                .create({ authorization: y.Gg3.BRAINTREE.KEY })
                .then((e) => {
                    new Promise((e, t) => {
                        let n = Date.now(),
                            i = () => {
                                Date.now() - n >= 5e3
                                    ? t(Error("Timeout waiting for Braintree client to be initialized in store"))
                                    : null != A.A.getClient()
                                      ? e()
                                      : setTimeout(i, 1e3);
                            };
                        E.h.subscribe("BRAINTREE_CREATE_CLIENT_SUCCESS", function e() {
                            E.h.unsubscribe("BRAINTREE_CREATE_CLIENT_SUCCESS", e), setTimeout(i, 0);
                        });
                    })
                        .then(() => {
                            N(), C();
                        })
                        .catch((e) => {
                            I.pM(e);
                        }),
                        E.h.dispatch({ type: "BRAINTREE_CREATE_CLIENT_SUCCESS", client: e });
                })
                .catch(() => E.h.dispatch({ type: "BRAINTREE_CREATE_CLIENT_FAIL" }));
        }),
            i || (0, g.$o)();
    }),
        a.useEffect(() => {
            null == r && null != s && s.includes(em.he.CASH_APP) && tt();
        }, [s, r]);
    let [o, l] = a.useState(t),
        u = (0, el.A)(t);
    t !== u && null != t && null == o && l(t);
    let [d, _] = a.useState(() => ({ info: tZ, isValid: !1 })),
        [h, f] = a.useState(() => ({ info: tX, isValid: !1 })),
        [p, m] = a.useState(""),
        [S, v] = a.useState(""),
        [R, O] = a.useState(() => ({ token: null })),
        [D, L, M, P, x] = (0, c.yK)([w.A], () => [
            w.A.braintreeEmail,
            w.A.braintreeNonce,
            w.A.error,
            w.A.venmoUsername,
            w.A.adyenPaymentData,
        ]),
        [k, U] = (0, c.yK)([eX.A], () => [eX.A.error, eX.A.isAwaitingAuthentication]);
    a.useEffect(() => {
        function e(e) {
            let { billingAddress: t } = e;
            f({ info: t, isValid: t.country.length > 0 });
        }
        return (
            E.h.subscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e),
            () => {
                E.h.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e), (0, b.ET)();
            }
        );
    }, []);
    let [G, F] = a.useState(!1),
        [V, B] = a.useState(!1),
        [j, H] = a.useState(null),
        Y = a.useRef(null),
        W = (0, c.bG)([eX.A], () => eX.A.isAwaitingAuthentication),
        [K, $] = (0, c.yK)([eJ.A], () => [eJ.A.purchaseTokenAuthState, eJ.A.purchaseTokenHash]);
    return (
        a.useEffect(() => {
            null != j && null != Y.current && Y.current.scrollIntoView({ behavior: "smooth" });
        }, [j]),
        {
            paymentSources: n,
            paymentSourceId: o,
            hasFetchedPaymentSources: i,
            setPaymentSourceId: l,
            creditCardState: d,
            setCreditCardState: _,
            tokenState: R,
            setTokenState: O,
            billingAddressState: h,
            setBillingAddressState: f,
            isSubmittingCurrentStep: G,
            setIsSubmittingCurrentStep: F,
            hasRedirectURL: V,
            setHasRedirectURL: B,
            braintreeEmail: D,
            braintreeNonce: L,
            venmoUsername: P,
            adyenPaymentData: x,
            paymentError: null != k ? k : M,
            paymentAuthenticationState: U ? e3.oc.PENDING : null != k ? e3.oc.ERROR : e3.oc.NONE,
            purchaseError: j,
            setPurchaseError: H,
            purchaseErrorBlockRef: Y,
            isAuthenticating: W,
            purchaseTokenAuthState: K,
            purchaseTokenHash: $,
            epsBankState: S,
            setEpsBankState: v,
            p24BankState: p,
            setP24BankState: m,
        }
    );
}
