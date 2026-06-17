"use strict";
n.d(t, { Y: () => tX, _V: () => tJ });
var l,
    i,
    r = n(627968),
    s = n(64700),
    a = n(342393),
    o = n(284009),
    u = n.n(o),
    c = n(17928),
    d = n(691540),
    m = n(857250),
    h = n(97483),
    p = n(685094),
    f = n(683071),
    g = n(228366),
    E = n(636537),
    A = n(753390),
    C = n(70142),
    x = n(739508),
    I = n(184015),
    _ = n(723702),
    S = n(652215);
function y() {
    let e = C.A.getClient();
    null != e &&
        (0, I.j)().then((t) => {
            t.venmo
                .create({ client: e, allowDesktop: !0, paymentMethodUsage: "multi_use" })
                .then((e) => {
                    g.h.dispatch({ type: "BRAINTREE_CREATE_VENMO_CLIENT_SUCCESS", venmoClient: e });
                })
                .catch(() => {
                    g.h.dispatch({ type: "BRAINTREE_CREATE_VENMO_CLIENT_FAIL" });
                });
        });
}
function v() {
    let e = C.A.getClient();
    null != e &&
        (0, I.j)().then((t) => {
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
                            url: S.Rsh.BILLING_PAYPAL_BILLING_AGREEMENT_TOKENS,
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
                                    ((t = S.Gg3.BRAINTREE.KEY.startsWith("production_")
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
                        g.h.dispatch({ type: "BRAINTREE_CREATE_PAYPAL_CLIENT_SUCCESS", paypalClient: e });
                })
                .catch(() => g.h.dispatch({ type: "BRAINTREE_CREATE_PAYPAL_CLIENT_FAIL" }));
        });
}
function T() {
    let e = C.A.getPayPalClient();
    if (null == e) throw Error("braintree paypal client must be initialized before calling this");
    g.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_START" });
    let t = Promise.resolve("");
    (0, _.isDesktop)() && (t = (0, A.jf)(S.hes.PAYPAL)),
        t
            .then(() => e.tokenize({ flow: "vault" }))
            .then((e) => {
                let { email: t, firstName: n, lastName: l, billingAddress: i } = e.details;
                g.h.dispatch({
                    type: "BRAINTREE_TOKENIZE_PAYPAL_SUCCESS",
                    nonce: e.nonce,
                    email: t,
                    billingAddress: {
                        name: `${n} ${l}`,
                        line1: i.line1,
                        line2: i.line2,
                        city: i.city,
                        state: i.state,
                        country: i.countryCode,
                        postalCode: i.postalCode,
                    },
                });
            })
            .catch((e) => {
                let { message: t, code: n, details: l } = e;
                n === S.Q7O.PAYPAL_POPUP_CLOSED || null == n
                    ? g.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED" })
                    : (g.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_FAIL", message: t, code: n }),
                      x.pM(Error(`Braintree Paypal Error: ${t} ${n} ${l}`)));
            });
}
function N() {
    let e = C.A.getVenmoClient();
    if (null == e) throw Error("Braintree Venmo client must be initialized before calling tokenize.");
    g.h.dispatch({ type: "BRAINTREE_TOKENIZE_VENMO_START" }),
        e
            .tokenize()
            .then((e) => {
                let { username: t } = e.details;
                g.h.dispatch({ type: "BRAINTREE_TOKENIZE_VENMO_SUCCESS", nonce: e.nonce, username: t });
            })
            .catch((e) => {
                let { message: t, code: n, details: l } = e;
                [S.Q7O.VENMO_APP_CANCELED, S.Q7O.VENMO_DESKTOP_CANCELED, S.Q7O.VENMO_CANCELED].includes(n)
                    ? g.h.dispatch({ type: "BRAINTREE_TOKENIZE_VENMO_FAIL_CANCELED" })
                    : (g.h.dispatch({ type: "BRAINTREE_TOKENIZE_VENMO_FAIL", message: t, code: n }),
                      x.pM(Error(`Braintree Venmo Error: ${t} ${n} ${l}`)));
            });
}
function j(e, t) {
    if (null == e) return Promise.resolve();
    g.h.dispatch(t);
    try {
        return Promise.resolve(e.teardown());
    } catch (e) {
        return Promise.resolve();
    }
}
var b = n(391048),
    R = n(292666),
    P = n(812745),
    L = n(825755),
    M = n(375708);
class O extends s.PureComponent {
    componentDidMount() {
        null != this.props.paypalClient && T();
    }
    componentDidUpdate(e) {
        null == e.paypalClient && null != this.props.paypalClient && T();
    }
    componentWillUnmount() {
        j(C.A.getPayPalClient(), { type: "BRAINTREE_TEARDOWN_PAYPAL_CLIENT" }).then(() => {
            null != C.A.getClient() && v();
        });
    }
    render() {
        let { braintreeEmail: e, paypalClient: t } = this.props;
        return (0, r.jsx)(R.k, {
            label: M.intl.string(M.t.QQBAos),
            leading: { type: "image", src: (0, P.Nj)(P.Ay.Types.PAYPAL) },
            value: e,
            readOnly: !0,
            placeholder: null == t ? M.intl.string(M.t.dte2M9) : M.intl.string(M.t.hopw7X),
        });
    }
}
let w = c.Ay.connectStores([C.A, L.A], () => ({
    braintreeEmail: L.A.braintreeEmail,
    paypalClient: C.A.getPayPalClient(),
}))(O);
var D = n(534514),
    k = n(834730),
    U = n(527142);
class G extends s.PureComponent {
    componentDidMount() {
        null != this.props.venmoClient && N();
    }
    componentDidUpdate(e) {
        null == e.venmoClient && null != this.props.venmoClient && N();
    }
    componentWillUnmount() {
        j(C.A.getVenmoClient(), { type: "BRAINTREE_TEARDOWN_VENMO_CLIENT" }).then(() => {
            null != C.A.getClient() && y();
        });
    }
    render() {
        let { venmoUsername: e, className: t, venmoClient: n } = this.props,
            l = null != e && "" !== e;
        return (0, r.jsxs)("div", {
            className: t,
            children: [
                (0, r.jsx)(P.Ay, { type: P.Ay.Types.VENMO, size: P.y3.MEDIUM, className: U.Z }),
                l
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(D.D, {
                                  variant: e.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
                                  className: U.y,
                                  children: M.intl.format(M.t.DowIre, { venmoUsername: e }),
                              }),
                              (0, r.jsx)(k.E, {
                                  variant: "text-md/medium",
                                  className: U.y,
                                  children: M.intl.string(M.t.kmEvnR),
                              }),
                          ],
                      })
                    : (0, r.jsx)(k.E, {
                          variant: "text-md/medium",
                          className: U.y,
                          children: null == n ? M.intl.string(M.t["2ouZDU"]) : M.intl.string(M.t.mIL6Jb),
                      }),
            ],
        });
    }
}
let F = c.Ay.connectStores([C.A, L.A], () => ({ venmoUsername: L.A.venmoUsername, venmoClient: C.A.getVenmoClient() }))(
    G,
);
var V = n(891197),
    B = n(503698),
    H = n.n(B),
    W = n(305866),
    K = n(287809),
    Y = n(832208),
    z = n(661531),
    Z = n(602853),
    q = n(511274),
    $ = n(50579),
    X = n(482188);
let J = function (e) {
    let t = s.useRef(null),
        { stripeType: n, flipped: l, updateCompleted: i, onFocus: o, onBlur: u } = e,
        [c, d] = s.useState(P.Be.UNKNOWN),
        [m, h] = s.useState(!1),
        [p, f] = s.useState(!1),
        [g, E] = s.useState(null),
        [A, C] = s.useState({}),
        x = (0, a.useElements)(),
        I = s.useCallback(() => {
            if (null != x)
                switch (n) {
                    case "cardNumber": {
                        let e = x.getElement(a.CardNumberElement);
                        if (null == e) return;
                        e.off("change"), e.off("focus"), e.off("blur");
                        break;
                    }
                    case "cardExpiry": {
                        let e = x.getElement(a.CardExpiryElement);
                        if (null == e) return;
                        e.off("change"), e.off("focus"), e.off("blur");
                        break;
                    }
                    case "cardCvc": {
                        let e = x.getElement(a.CardCvcElement);
                        if (null == e) return;
                        e.off("change"), e.off("focus"), e.off("blur");
                    }
                }
        }, [x, n]),
        _ = s.useCallback(
            (e) => {
                p || e.empty || f(!0), null != i && i(e.complete), null != e.error && h(!1);
            },
            [p, i],
        ),
        S = s.useCallback(() => {
            h(!0), o?.();
        }, [o]),
        y = s.useCallback(() => {
            h(!1), u?.();
        }, [u]),
        v = s.useCallback(() => {
            if (null != x)
                switch (n) {
                    case "cardNumber": {
                        let e = x.getElement(a.CardNumberElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            c !== e.brand && d(e.brand),
                                e.empty && p
                                    ? E(M.intl.string(M.t.eOIfuy))
                                    : null != e.error
                                      ? E(M.intl.string(M.t.x4pWtJ))
                                      : E(null),
                                _(e);
                        }),
                            e.on("focus", S),
                            e.on("blur", y);
                        break;
                    }
                    case "cardExpiry": {
                        let e = x.getElement(a.CardExpiryElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            null != e.error || (e.empty && p) ? E(M.intl.string(M.t["9/zZdl"])) : E(null), _(e);
                        }),
                            e.on("focus", S),
                            e.on("blur", y);
                        break;
                    }
                    case "cardCvc": {
                        let e = x.getElement(a.CardCvcElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            null != e.error || (e.empty && p) ? E(M.intl.string(M.t.ro4isZ)) : E(null), _(e);
                        }),
                            e.on("focus", S),
                            e.on("blur", y);
                    }
                }
        }, [y, _, S, c, x, p, n]);
    s.useEffect(
        () => (
            v(),
            () => {
                I();
            }
        ),
        [v, I],
    );
    let T = (0, Z.r)(z.A.colors.TEXT_SUBTLE).hex(),
        N = (0, Z.r)(z.A.colors.TEXT_STRONG).hex();
    function j() {
        return H()($.vB, { [$.Tn]: null !== g, [$.iH]: m, [$.yD]: "cardNumber" === n });
    }
    return (
        s.useLayoutEffect(() => {
            let { current: e } = t;
            if (null == e) return;
            let n = window.getComputedStyle(e),
                l = n.getPropertyValue("font-family");
            C({
                base: {
                    fontFamily: l,
                    fontWeight: n.getPropertyValue("font-weight"),
                    color: N,
                    fontSize: n.getPropertyValue("font-size"),
                    "::placeholder": { color: T },
                },
            });
        }, [t, T, N]),
        (0, r.jsxs)("div", {
            className: $.Zm,
            "data-stripe-type": n,
            children: [
                (0, r.jsx)("div", { ref: t, className: H()($.iw, X.hF) }),
                (function () {
                    switch (n) {
                        case "cardNumber":
                            return (0, r.jsxs)("div", {
                                children: [
                                    (0, r.jsx)(P.Ay, { className: $.Ie, type: c, flipped: l }),
                                    (0, r.jsx)(a.CardNumberElement, {
                                        options: { style: A, placeholder: M.intl.string(M.t.gPRHfw), disableLink: !1 },
                                        className: j(),
                                    }),
                                ],
                            });
                        case "cardExpiry":
                            return (0, r.jsx)(a.CardExpiryElement, {
                                options: { style: A, placeholder: M.intl.string(M.t.xeEWQ6) },
                                className: j(),
                            });
                        case "cardCvc":
                            return (0, r.jsx)(a.CardCvcElement, {
                                options: { style: A, placeholder: M.intl.string(M.t.wZz04F) },
                                className: j(),
                            });
                    }
                })(),
                (0, r.jsx)(q.U, { error: g }),
            ],
        })
    );
};
var Q = n(483770),
    ee = n(536439);
let et = function (e) {
    let { onCardInfoChange: t, error: n } = e,
        l = s.useRef(t),
        [i, a] = s.useState(!1),
        [o, u] = s.useState({}),
        [c, d] = s.useState({ name: "", country: "", postalCode: "" }),
        [m, h] = s.useState({}),
        [p, f] = s.useState({}),
        { setFocusLockDisabled: g } = s.useContext(W.M);
    s.useEffect(() => () => {
        void 0 !== g && g(!1);
    });
    let E = s.useCallback(() => {
        void 0 !== g && g(!0);
    }, [g]);
    function A(e, t) {
        !!o[e] !== t && u((n) => ({ ...n, [e]: t }));
    }
    let C = s.useCallback(
        function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = {};
            return (e || m.name) && "" === c.name && (t.name = M.intl.string(M.t.lIkVsi)), t;
        },
        [m, c],
    );
    return (
        s.useEffect(() => {
            let e = o.cardNumber && o.cardExpiry && o.cardCvc && 0 === Object.keys(C(!0)).length;
            l.current({ name: c.name }, !!e);
        }, [o, c, C]),
        (0, r.jsxs)("div", {
            children: [
                K.default.getCurrentUser()?.nsfwAllowed
                    ? (0, r.jsxs)("div", {
                          className: Q.Rm,
                          children: [
                              (0, r.jsx)("div", { className: H()(P.y3.SMALL, Q.eo, Q.Ud) }),
                              (0, r.jsx)("div", { className: H()(P.y3.SMALL, Q.DR, Q.Ud) }),
                              (0, r.jsx)("div", { className: H()(P.y3.SMALL, Q.k4, Q.Ud) }),
                              (0, r.jsx)("div", { className: H()(P.y3.SMALL, Q.a3, Q.Ud) }),
                              (0, r.jsx)("div", { className: H()(P.y3.SMALL, Q.CY, Q.Ud) }),
                              (0, r.jsx)("div", { className: H()(P.y3.SMALL, Q.Q5, Q.Ud) }),
                              (0, r.jsx)("div", { className: H()(P.y3.SMALL, Q.YA, Q.Ud) }),
                          ],
                      })
                    : (0, r.jsxs)("div", {
                          className: Q.Rm,
                          children: [
                              (0, r.jsx)("div", { className: H()(P.y3.SMALL, Q.aq, Q.Ud) }),
                              (0, r.jsx)("div", { className: H()(P.y3.SMALL, Q.VX, Q.Ud) }),
                              (0, r.jsx)("div", { className: H()(P.y3.SMALL, Q.Yi, Q.Ud) }),
                              (0, r.jsx)("div", { className: H()(P.y3.SMALL, Q.qR, Q.Ud) }),
                              (0, r.jsx)("div", { className: H()(P.y3.SMALL, Q.m2, Q.Ud) }),
                              (0, r.jsx)("div", { className: H()(P.y3.SMALL, Q.Ij, Q.Ud) }),
                              (0, r.jsx)("div", { className: H()(P.y3.SMALL, Q._V, Q.Ud) }),
                          ],
                      }),
                (0, r.jsx)(Y.A, {
                    form: [
                        {
                            fields: [
                                {
                                    id: "card-number",
                                    name: "cardNumber",
                                    title: () => M.intl.string(M.t.cVyJ3o),
                                    getClassNameForLayout: () => ee.c6,
                                    renderInput: () =>
                                        (0, r.jsx)(J, {
                                            stripeType: "cardNumber",
                                            flipped: i,
                                            updateCompleted: (e) => A("cardNumber", e),
                                            onFocus: E,
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
                                        (0, r.jsx)(J, {
                                            stripeType: "cardExpiry",
                                            updateCompleted: (e) => A("cardExpiry", e),
                                            onFocus: E,
                                        }),
                                },
                                {
                                    id: "card-cvc",
                                    name: "cardCvc",
                                    title: () => M.intl.string(M.t.Fd3rOz),
                                    getClassNameForLayout: () => ee.ep,
                                    renderInput: () =>
                                        (0, r.jsx)(J, {
                                            stripeType: "cardCvc",
                                            updateCompleted: (e) => A("cardCvc", e),
                                            onFocus: () => {
                                                E(), a(!0);
                                            },
                                            onBlur: () => {
                                                a(!1);
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
                                    renderInput: (e) => (0, r.jsx)(R.k, { ...e }),
                                },
                            ],
                        },
                    ],
                    errors: p,
                    formError: n,
                    values: c,
                    onFieldChange: function (e, t) {
                        if ("name" !== t && "country" !== t && "postalCode" !== t) return;
                        let n = { ...c },
                            l = { ...m },
                            i = { name: p.name };
                        m[t] || "" === e || (l[t] = !0),
                            (n[t] = e),
                            l[t] && "" === e ? "name" === t && (i.name = M.intl.string(M.t.lIkVsi)) : delete i[t],
                            d(n),
                            h(l),
                            f(i);
                    },
                    onFieldBlur: function () {
                        f(C());
                    },
                }),
            ],
        })
    );
};
var en =
    (((l = {}).SELECT_PLAN = "select_plan"),
    (l.PAYMENT_TYPE = "payment_type"),
    (l.PAYPAL = "paypal"),
    (l.PAYPAL_ADDRESS = "paypal_address"),
    (l.PAYMENT_REQUEST_INFO = "payment_request_info"),
    (l.CREDIT_CARD_INFORMATION = "credit_card_information"),
    (l.ADDRESS = "address"),
    (l.REVIEW = "review"),
    (l.CONFIRM = "confirm"),
    (l.AWAITING_AUTHENTICATION = "awaiting_authentication"),
    (l.VENMO = "venmo"),
    (l.VENMO_ADDRESS = "venmo_address"),
    l);
function el(e) {
    if (null != e) {
        if (e.hasCardError()) return "credit_card_information";
        if (e.hasAddressError()) return "address";
    }
    return null;
}
var ei = n(723429);
function er(e) {
    let { billingError: t, onCardInfoChange: n } = e,
        l = null != t && (null == t.code || el(t) === en.CREDIT_CARD_INFORMATION);
    return (0, r.jsxs)(s.Fragment, {
        children: [
            l
                ? (0, r.jsx)("div", {
                      className: ei.QK,
                      children: (0, r.jsx)(f.w, { type: "critical", children: M.intl.string(M.t["4vnhKV"]) }),
                  })
                : null,
            (0, r.jsx)(et, { onCardInfoChange: n, error: t }),
        ],
    });
}
function es(e) {
    let { className: t, submitting: n, stripePaymentMethod: l } = e,
        { card: i } = l ?? {},
        s = null != i ? P.Ay.getType(i.brand) : P.Ay.Types.UNKNOWN;
    return (0, r.jsx)("div", {
        className: t,
        children: (0, r.jsx)(R.k, {
            label: M.intl.string(M.t["mmDvV+"]),
            leading: { type: "image", src: (0, P.Nj)(s) },
            value: n && null != i ? M.intl.formatToPlainString(M.t.bCynoK, i) : void 0,
            readOnly: !0,
            placeholder: M.intl.string(M.t.bWMH78),
        }),
    });
}
var ea = n(964486),
    eo = n(475743),
    eu = n(446044),
    ec = n(721101),
    ed = n(648335),
    em = n(384365);
let eh = function (e) {
    let { onAccountHolderNameChange: t, billingAddressInfo: n } = e,
        l = s.useRef(null);
    return (0, r.jsx)("div", {
        className: em.r,
        children: (0, r.jsx)(R.k, {
            label: M.intl.string(M.t.sN3wrd),
            inputRef: l,
            name: M.intl.string(M.t.sN3wrd),
            placeholder: M.intl.string(M.t.sN3wrd),
            onChange: (e) => t(e),
            value: n.name,
        }),
    });
};
var ep = n(462887),
    ef = n(331322),
    eg = n(736653),
    eE = n(818348),
    eA = n(198650);
let eC = function (e) {
    let t = (0, eg.Ay)(),
        n = s.useRef(null),
        [l, i] = s.useState({}),
        o = (0, Z.r)(z.A.colors.BACKGROUND_BASE_LOWER).hex();
    switch (
        (s.useLayoutEffect(() => {
            let { current: e } = n;
            if (null == e) return;
            let t = window.getComputedStyle(e),
                l = window.getComputedStyle(e, "::placeholder"),
                r = t.getPropertyValue("font-family"),
                s = t.getPropertyValue("font-weight");
            i({
                base: {
                    fontFamily: r,
                    fontWeight: s,
                    color: t.getPropertyValue("color"),
                    fontSize: t.getPropertyValue("font-size"),
                    backgroundColor: o,
                    padding: "12px",
                    "::placeholder": { color: l.getPropertyValue("color") },
                    borderRadius: z.A.radii.xs,
                },
            });
        }, [n, o]),
        e.type)
    ) {
        case eE.he.PRZELEWY24: {
            let i = (0, ep.M)(t) ? "/assets/f4150b3aed6c4679.svg" : "/assets/8b825aafb2e4dbed.svg",
                { onNameChange: s, onEmailChange: o, onP24BankChange: u, p24BankValue: c, billingAddressInfo: d } = e;
            return (0, r.jsx)("div", {
                className: eA.rf,
                children: (0, r.jsxs)(ef.B, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(R.k, {
                            label: M.intl.string(M.t["w/qqKK"]),
                            inputRef: n,
                            name: M.intl.string(M.t["w/qqKK"]),
                            placeholder: M.intl.string(M.t["w/qqKK"]),
                            onChange: (e) => o(e),
                            value: d.email,
                        }),
                        (0, r.jsx)(R.k, {
                            label: M.intl.string(M.t["yf7ms+"]),
                            name: M.intl.string(M.t["yf7ms+"]),
                            placeholder: M.intl.string(M.t["yf7ms+"]),
                            onChange: (e) => s(e),
                            value: d.name,
                        }),
                        (0, r.jsxs)(ef.B, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(k.E, { variant: "text-sm/semibold", children: M.intl.string(M.t.De3b8t) }),
                                (0, r.jsx)(a.P24BankElement, {
                                    options: { value: c, style: l },
                                    onChange: (e) => u(e.value),
                                }),
                                (0, r.jsx)("div", {
                                    className: eA.je,
                                    children: (0, r.jsx)("img", { src: i, alt: "Przelewy24" }),
                                }),
                            ],
                        }),
                    ],
                }),
            });
        }
        case eE.he.EPS: {
            let { onAccountHolderNameChange: i, onEPSBankChange: s, epsBankValue: o, billingAddressInfo: u } = e,
                c = (0, ep.M)(t) ? "/assets/025b24b0055c8d81.svg" : "/assets/1dae7d71a65fd90f.svg";
            return (0, r.jsx)("div", {
                className: eA.rf,
                children: (0, r.jsxs)(ef.B, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(R.k, {
                            label: M.intl.string(M.t.sN3wrd),
                            inputRef: n,
                            name: M.intl.string(M.t.sN3wrd),
                            placeholder: M.intl.string(M.t.sN3wrd),
                            onChange: (e) => i(e),
                            value: u.name,
                        }),
                        (0, r.jsxs)(ef.B, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(k.E, { variant: "text-sm/semibold", children: M.intl.string(M.t.dFyV07) }),
                                (0, r.jsx)(a.EpsBankElement, {
                                    options: { value: o, style: l },
                                    onChange: (e) => s(e.value),
                                }),
                                (0, r.jsx)("div", {
                                    className: eA.je,
                                    children: (0, r.jsx)("img", { src: c, alt: "EPS" }),
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
var ex = n(211528),
    eI = n(71804),
    e_ = n(31823);
n(426398), n(211083);
var eS = n(944355);
n(21713);
var ey = n(211159),
    ev = n(783327),
    eT = n(626584),
    eN = n(166532),
    ej = n(69494),
    eb = n(901930),
    eR = n(19311),
    eP = n(482132),
    eL = n(615310),
    eM = n(364840),
    eO = n(73825),
    ew = n(558620),
    eD = n(683433),
    ek = n(36167),
    eU = n(937008),
    eG = (((i = {})[(i.UNKNOWN = 0)] = "UNKNOWN"), (i[(i.PENDING = 1)] = "PENDING"), (i[(i.DONE = 2)] = "DONE"), i);
let eF = 0,
    eV = null,
    eB = null,
    eH = null;
class eW extends c.Ay.Store {
    static displayName = "BrowserCheckoutStateStore";
    get browserCheckoutState() {
        return eF;
    }
    get loadId() {
        return eV;
    }
    get skuId() {
        return eB;
    }
    get planId() {
        return eH;
    }
}
let eK = new eW(g.h, {
    USER_PAYMENT_BROWSER_CHECKOUT_STARTED: function (e) {
        (eF = 1), (eV = e.loadId);
    },
    USER_PAYMENT_BROWSER_CHECKOUT_DONE: function (e) {
        eV === e.loadId && ((eB = e.skuId ?? null), (eH = e.skuSubscriptionPlanId ?? null), (eF = 2));
    },
});
var eY = n(788868),
    ez = n(647926);
let eZ = (e) => {
        let t,
            { step: n, onPurchaseComplete: l, onHandoffFailure: i } = e,
            {
                setSelectedSkuId: a,
                setSelectedPlanId: o,
                contextMetadata: u,
            } = (0, ey.t4)((e) => ({
                setSelectedSkuId: e.setSelectedSkuId,
                setSelectedPlanId: e.setSelectedPlanId,
                contextMetadata: e.contextMetadata,
            })),
            {
                browserCheckoutState: d,
                browserCheckoutStateLoadId: m,
                browserCheckoutStateSkuId: h,
                browserCheckoutStatePlanId: p,
            } = (0, c.cf)([eK], () => ({
                browserCheckoutState: eK.browserCheckoutState,
                browserCheckoutStateLoadId: eK.loadId,
                browserCheckoutStateSkuId: eK.skuId,
                browserCheckoutStatePlanId: eK.planId,
            })),
            f = (0, ew.A)(),
            { isGift: g } = (0, eU.Pv)(),
            [E, C] = s.useState(!1);
        switch (n) {
            case eN.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
                t = S.do8.GOOGLE_PAY;
                break;
            case eN.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
                t = S.do8.APPLE_PAY;
        }
        return (
            s.useEffect(() => {
                let e = setTimeout(() => {
                    E ||
                        (C(!0),
                        (0, A.Ze)(u.loadId),
                        (0, ek.my)(
                            {
                                planId: f?.id ?? eY.gD.PREMIUM_MONTH_TIER_2,
                                isGift: g,
                                loadId: u.loadId,
                                paymentMethodType: t,
                            },
                            i,
                        ));
                }, 1e3);
                return () => clearTimeout(e);
            }, [f, g, u, i, C, E, t]),
            s.useEffect(() => {
                null !== h && (eY.oz.includes(h) && ((0, eO.ur)(h), (0, A.hP)()), a(h)),
                    null !== p && o(p),
                    m === u.loadId && d === eG.DONE && l();
            }, [a, o, d, m, h, p, u, l]),
            (0, r.jsxs)("div", {
                className: ez.rf,
                children: [
                    (0, r.jsx)(D.D, { variant: "heading-xl/bold", children: M.intl.string(M.t.C4HYfy) }),
                    (0, r.jsx)(k.E, {
                        variant: "text-md/normal",
                        className: ez.h_,
                        children: M.intl.string(M.t.xfG7Jp),
                    }),
                ],
            })
        );
    },
    eq = (e) => {
        let { onPrimaryClick: t, onBackClick: n } = e;
        return (0, r.jsx)(eM.j, {
            children: (0, r.jsxs)("div", {
                className: ez.kL,
                children: [
                    (0, r.jsx)(eD.A, { onClick: n }),
                    (0, r.jsx)(eD.F, { onClick: t, children: M.intl.string(M.t["4Qvmmj"]) }),
                ],
            }),
        });
    };
var e$ = n(615405),
    eX = n(153084),
    eJ = n(295405),
    eQ = n(71319),
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
let e9 = new e8(g.h, {
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
    return await E.Bo.get({ url: S.Rsh.BILLING_ADYEN_PAYMENT_METHODS, oldFormErrors: !0, rejectWithError: !1 });
}
async function tt() {
    try {
        let e = await te(),
            { default: t } = await Promise.all([n.e("94678"), n.e("40002")]).then(n.bind(n, 971193)),
            l = await t({
                environment: S.Gg3.ADYEN.KEY.startsWith("live_") ? "live" : "test",
                clientKey: S.Gg3.ADYEN.KEY,
                analytics: { enabled: !1 },
                paymentMethodsResponse: e.body,
            });
        g.h.dispatch({ type: "ADYEN_CREATE_CLIENT_SUCCESS", client: l }),
            (function (e) {
                if (null != e9.cashAppPayComponent) {
                    tl(), tn();
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
                            if (n) g.h.dispatch({ type: "ADYEN_CASH_APP_PAY_SUBMIT_SUCCESS", data: t });
                            else throw (0, A.i0)("Cash App Pay setup attempt is not valid.");
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
                                (0, A.i0)(e.message, n, t);
                            }
                        },
                    })
                    .mount(`#${e4.h}`);
                g.h.dispatch({ type: "ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS", component: t });
            })(l);
    } catch (e) {
        (0, x.pM)(e), g.h.dispatch({ type: "ADYEN_CREATE_CLIENT_FAIL" });
    }
}
function tn() {
    let e = e9.cashAppPayComponent;
    if (null == e) throw Error("Adyen CashAppPay component must be created before mounting.");
    try {
        e.mount(`#${e4.h}`);
    } catch (e) {}
}
function tl() {
    e9.cashAppPayComponent?.unmount();
}
function ti() {
    let e = e9.cashAppPayComponent;
    if (null == e) throw Error("Adyen CashAppPay component must be created before submitting.");
    e.submit();
}
var tr = n(40417);
function ts(e) {
    let { className: t } = e,
        n = (0, c.bG)([e9], () => e9.cashAppPayComponent),
        l = (0, c.bG)([L.A], () => L.A.adyenPaymentData);
    s.useEffect(
        () => (
            null == l && null != n && (tn(), ti()),
            () => {
                tl();
            }
        ),
        [l, n],
    );
    let i = l?.paymentMethod?.cashtag ?? "",
        a = null != l && "" !== i;
    return (0, r.jsxs)("div", {
        className: t,
        children: [
            (0, r.jsx)(P.Ay, { type: P.Ay.Types.CASH_APP, size: P.y3.MEDIUM, className: tr.K }),
            a
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(D.D, {
                              variant: i.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
                              className: tr.y,
                              children: M.intl.format(M.t["ze/1yE"], { cashtag: i }),
                          }),
                          (0, r.jsx)(k.E, {
                              variant: "text-md/medium",
                              className: tr.y,
                              children: M.intl.string(M.t.VPOx7N),
                          }),
                      ],
                  })
                : (0, r.jsx)(k.E, {
                      variant: "text-md/medium",
                      className: tr.y,
                      children: null == n ? M.intl.string(M.t["CgVe/w"]) : M.intl.string(M.t["1MqcjI"]),
                  }),
        ],
    });
}
var ta = n(73079),
    to = n(459357),
    tu = n(550238),
    tc = n(869177),
    td = n(71532),
    tm = n(218075);
let th = [eN.pn.PAYMENT_TYPE],
    tp = [eN.pn.PAYMENT_TYPE, eN.pn.CREDIT_CARD_INFORMATION, eN.pn.ADDRESS],
    tf = [eN.pn.PAYMENT_TYPE, eN.pn.PAYPAL_INFORMATION, eN.pn.ADDRESS],
    tg = [eN.pn.PAYMENT_TYPE, eN.pn.VENMO_INFORMATION, eN.pn.ADDRESS],
    tE = [eN.pn.PAYMENT_TYPE, eN.pn.CASH_APP_INFORMATION, eN.pn.ADDRESS],
    tA = [eN.pn.PAYMENT_TYPE, eN.pn.PRZELEWY24_INFORMATION, eN.pn.ADDRESS],
    tC = [eN.pn.PAYMENT_TYPE, eN.pn.EPS_INFORMATION, eN.pn.ADDRESS],
    tx = [eN.pn.PAYMENT_TYPE, eN.pn.IDEAL_INFORMATION, eN.pn.ADDRESS],
    tI = [eN.pn.PAYMENT_TYPE, eN.pn.ADDRESS],
    t_ = {
        SHARED_ADD_PAYMENT_STEPS: th,
        SHARED_CREDIT_CARD_STEPS: tp,
        SHARED_PAYPAL_STEPS: tf,
        SHARED_VENMO_STEPS: tg,
        SHARED_PRZELEWY24_STEPS: tA,
        SHARED_EPS_STEPS: tC,
        SHARED_IDEAL_STEPS: tx,
        SHARED_CASH_APP_STEPS: tE,
        SHARED_TYPE_AND_ADDRESS_STEPS: tI,
    },
    tS = {
        SHARED_ADD_PAYMENT_STEPS: [eN.pn.PAYMENT_ELEMENT],
        SHARED_CREDIT_CARD_STEPS: [eN.pn.PAYMENT_ELEMENT, eN.pn.ADDRESS],
        SHARED_PAYPAL_STEPS: [eN.pn.PAYMENT_ELEMENT, eN.pn.PAYPAL_INFORMATION, eN.pn.ADDRESS],
        SHARED_VENMO_STEPS: [eN.pn.PAYMENT_ELEMENT, eN.pn.VENMO_INFORMATION, eN.pn.ADDRESS],
        SHARED_CASH_APP_STEPS: [eN.pn.PAYMENT_ELEMENT, eN.pn.CASH_APP_INFORMATION, eN.pn.ADDRESS],
        SHARED_PRZELEWY24_STEPS: [eN.pn.PAYMENT_ELEMENT, eN.pn.PRZELEWY24_INFORMATION, eN.pn.ADDRESS],
        SHARED_EPS_STEPS: [eN.pn.PAYMENT_ELEMENT, eN.pn.EPS_INFORMATION, eN.pn.ADDRESS],
        SHARED_IDEAL_STEPS: [eN.pn.PAYMENT_ELEMENT, eN.pn.ADDRESS],
        SHARED_TYPE_AND_ADDRESS_STEPS: [eN.pn.PAYMENT_ELEMENT, eN.pn.ADDRESS],
    };
var ty = n(801753);
function tv(e) {
    return () => (null != L.A.error && (0, b.ET)(), e());
}
function tT(e) {
    let { onPrimary: t, onBack: n, ...l } = e,
        i = t;
    null != t && (i = tv(t));
    let s = n;
    return null != n && (s = tv(n)), (0, r.jsx)(eR.Ay, { ...l, onPrimary: i, onBack: s });
}
function tN(e) {
    let { paymentSourceTypeRestrictions: t } = e,
        n = null != t && t.length > 0 ? tm.fU.ADD_NEW_PAYMENT_METHOD : void 0,
        { enabled: l } = (0, to.c)({ location: "AddPaymentStep" });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(tm.je, { paymentRestrictionBannerType: n }),
            (0, r.jsx)(ta.A, { ...e }),
            l && (0, r.jsx)(eS.Z4, { className: ty.SO }),
        ],
    });
}
let tj = (e) => {
        let {
                prependSteps: t,
                appendSteps: n,
                analyticsLocation: l,
                isEligibleForTrial: i,
                allowDesktopRedirectPurchase: s,
                onPaymentRequestSourceFailed: a,
                paymentModalArgs: o,
                handleStepChange: u,
                setPaymentMethodSteps: c,
                setPaymentRequestPaymentMethod: d,
                currentStep: m,
                setInfoNotice: h,
                completeSteps: p,
                paymentSourceTypeRestrictions: f,
                CREDIT_CARD_STEPS: g,
                PAYPAL_STEPS: E,
                VENMO_STEPS: C,
                PAYMENT_REQUEST_STEPS: x,
                PRZELEWY24_STEPS: I,
                EPS_STEPS: S,
                IDEAL_STEPS: y,
                CASH_APP_STEPS: v,
                setConnectorPaymentRequestReady: T,
                connectorPaymentRequestRef: N,
            } = e,
            { activitySessionId: j } = (0, e_.V)(),
            R = (0, ey.t4)((e) => e.contextMetadata),
            { setBillingAddressState: P } = o,
            O = (e, l) => {
                switch (e) {
                    case eE.he.CARD:
                        s ? u(eN.pn.AWAITING_BROWSER_CHECKOUT) : (c(g), u(eN.pn.CREDIT_CARD_INFORMATION));
                        break;
                    case eE.he.PAYPAL:
                        c(E), u(eN.pn.PAYPAL_INFORMATION);
                        break;
                    case eE.he.VENMO:
                        c(C), u(eN.pn.VENMO_INFORMATION);
                        break;
                    case eE.he.PAYMENT_REQUEST:
                        s && "googlePay" === l
                            ? u(eN.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY)
                            : s && "applePay" === l
                              ? u(eN.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY)
                              : (c(x), u(eN.pn.PAYMENT_REQUEST_INFORMATION));
                        break;
                    case eE.he.PRZELEWY24:
                        c(I), u(eN.pn.PRZELEWY24_INFORMATION);
                        break;
                    case eE.he.EPS:
                        c(S), u(eN.pn.EPS_INFORMATION);
                        break;
                    case eE.he.IDEAL:
                        c(y), u(eN.pn.IDEAL_INFORMATION);
                        break;
                    case eE.he.CASH_APP:
                        c(v), u(eN.pn.CASH_APP_INFORMATION);
                        break;
                    case eE.he.GIROPAY:
                    case eE.he.PAYSAFE_CARD:
                    case eE.he.GCASH:
                    case eE.he.GRABPAY_MY:
                    case eE.he.MOMO_WALLET:
                    case eE.he.KAKAOPAY:
                    case eE.he.GOPAY_WALLET:
                    case eE.he.BANCONTACT:
                        c({ steps: [...t, ...tI, ...n], methodType: e }), u(eN.pn.ADDRESS);
                }
                null != L.A.error && (0, b.ET)();
            },
            w = async (e, t) => {
                if (((0, b.mf)(e), null == e)) return void a();
                d(e);
                let { billingAddressInfo: n } = (0, td.uK)(e),
                    i = (0, tu.Qd)(n);
                if (((null == n.name || "" === n.name) && null != t && (n.name = t), P({ isValid: i, info: n }), !i))
                    return void u(eN.pn.ADDRESS);
                try {
                    var r;
                    (r = await (0, A.Tv)(e, n, l)), P((e) => ({ ...e, info: n })), c(x), p(r);
                } catch (e) {
                    a();
                }
            };
        if (m === eN.pn.ATTEMPT_GOOGLE_PAY || m === eN.pn.ATTEMPT_APPLE_PAY) {
            let e = M.intl.string(m === eN.pn.ATTEMPT_APPLE_PAY ? M.t.czhXDv : M.t.Zj2xQ0);
            return (0, r.jsx)(tc.V, {
                onChooseType: O,
                paymentRequestWallet: m === eN.pn.ATTEMPT_APPLE_PAY ? "applePay" : "googlePay",
                onStripePaymentMethodReceived: w,
                onPaymentRequestFailure: () => {
                    O(eE.he.CARD), h(e);
                },
                onValidPaymentRequest: () => T(!0),
                paymentRequestRef: N,
            });
        }
        let D = !(0, _.isDesktop)() || s;
        return (0, r.jsx)(tN, {
            onChooseType: O,
            onStripePaymentMethodReceived: w,
            paymentRequestWallets: D ? ["googlePay", "applePay"] : [],
            isEligibleForTrial: i,
            paymentRequestPaymentContext: { contextMetadata: R, activitySessionId: j },
            paymentSourceTypeRestrictions: f,
        });
    },
    tb = (e) => {
        let {
            onReturn: t,
            shouldUseManaModal: n,
            handleStepChange: l,
            currentStep: i,
            connectorPaymentRequestReady: s,
            showConnectorPaymentRequest: a,
        } = e;
        if (i === eN.pn.ATTEMPT_GOOGLE_PAY || i === eN.pn.ATTEMPT_APPLE_PAY) {
            let e = M.intl.string(i === eN.pn.ATTEMPT_APPLE_PAY ? M.t.WoXvJL : M.t.wnVVr0);
            return (0, r.jsx)(tT, {
                onBack: () => l(eN.pn.PAYMENT_TYPE),
                primaryCTA: eR.Ay.CTAType.CONTINUE,
                primaryText: e,
                onPrimary: () => a(),
                primaryDisabled: !s,
                shouldUseManaModal: n,
            });
        }
        return (0, r.jsx)(tT, { onBack: t, shouldUseManaModal: n });
    };
var tR = n(198970),
    tP = n(546605),
    tL = n(116673),
    tM = n(773669);
let tO = (e) => {
        let t,
            { billingAddressInfo: n, billingError: l, onBillingAddressChange: i, paymentSourceType: a } = e,
            o = null != l && (null == l.code || el(l) === en.ADDRESS),
            u = (0, c.bG)([tM.default], () => tM.default.locale);
        switch (a) {
            case S.hes.GIROPAY:
            case S.hes.PAYSAFE_CARD:
            case S.hes.GCASH:
            case S.hes.GRABPAY_MY:
            case S.hes.MOMO_WALLET:
            case S.hes.KAKAOPAY:
            case S.hes.GOPAY_WALLET:
            case S.hes.BANCONTACT:
                t = "en-US" === u ? tR.Ay.Layouts.MODAL_US_WITH_NAME : tR.Ay.Layouts.MODAL_INTL_WITH_NAME;
                break;
            case S.hes.VENMO:
            case S.hes.CASH_APP:
                t = tR.Ay.Layouts.MODAL_US_WITH_NAME;
                break;
            default:
                t = "en-US" === u ? tR.Ay.Layouts.MODAL_US : tR.Ay.Layouts.MODAL_INTL;
        }
        let d = (0, tP.vg)("AddressStep"),
            m = (0, tL.z)();
        0 === n.country.length && null != m && m.length > 0 && (n.country = m[0]);
        let h = (0, c.bG)([K.default], () => K.default.getCurrentUser()?.storeCountry?.isLocked === !0),
            p = d && h ? M.intl.string(M.t.Pg2hU0) : null;
        return (0, r.jsxs)(s.Fragment, {
            children: [
                o
                    ? (0, r.jsx)("div", {
                          className: ei.QK,
                          children: (0, r.jsx)(f.w, { type: "critical", children: M.intl.string(M.t.vZ8y7l) }),
                      })
                    : null,
                (0, r.jsx)(tR.Ay, {
                    className: ei.__invalid_formItem,
                    onBillingAddressChange: i,
                    error: l,
                    layout: t,
                    allowedBillingAddressCountries: m,
                    countryHelperText: p,
                    ...n,
                }),
            ],
        });
    },
    tw = new eT.A("AddPaymentAddressStep.tsx");
function tD(e) {
    let { billingAddressInfo: t, onBillingAddressChange: n, paymentSourceType: l } = e,
        i = (0, c.bG)([L.A], () => L.A.error);
    return (0, r.jsx)(tO, { billingAddressInfo: t, billingError: i, onBillingAddressChange: n, paymentSourceType: l });
}
function tk(e) {
    let { paymentModalArgs: t, shouldUsePaymentElement: n, paymentSourceType: l } = e,
        { billingAddressState: i, setBillingAddressState: s } = t;
    return n
        ? null
        : (0, r.jsx)(tD, {
              billingAddressInfo: i.info,
              onBillingAddressChange: (e, t) => {
                  s({ info: { ...i.info, ...e }, isValid: t });
              },
              paymentSourceType: l,
          });
}
function tU(e) {
    let {
            paymentModalArgs: t,
            shouldUseManaModal: n,
            analyticsLocation: l,
            overwriteSubscriptionPaymentSource: i,
            handleStepChange: s,
            onPaymentRequestSourceFailed: a,
            paymentRequestPaymentMethod: o,
            completeSteps: c,
            paymentMethodSteps: d,
            paymentElementSelectedType: m,
            returnToPaymentElementStep: h,
            combinedStripeElementsRef: p,
            lastConfirmedSetupIntentRef: f,
            shouldUsePaymentElement: g,
        } = e,
        E = (0, ev.S)(),
        {
            tokenState: C,
            isSubmittingCurrentStep: x,
            billingAddressState: I,
            setIsSubmittingCurrentStep: _,
            hasRedirectURL: S,
            setHasRedirectURL: y,
            braintreeNonce: v,
            adyenPaymentData: T,
            isAuthenticating: N,
            epsBankState: j,
            p24BankState: b,
        } = t,
        R = async () => {
            _(!0);
            let e = g ? m : d.methodType,
                t = [
                    E,
                    p.current,
                    { billingAddress: I.info, paymentSourceType: e ?? eE.he.UNKNOWN, lastConfirmedSetupIntentRef: f },
                    l,
                ];
            switch (e) {
                case eE.he.PAYMENT_REQUEST:
                    if (g) {
                        try {
                            let e = await (0, A.im)(...t);
                            c(e);
                        } catch (e) {
                            _(!1), tw.warn("Error confirming Payment Element source for Payment Request: ", e);
                        }
                        break;
                    }
                    if (null == o) throw (a(), (0, A.i0)("Missing paymentRequestPaymentMethod"));
                    c(await (0, A.Tv)(o, I.info, l));
                    break;
                case eE.he.CARD:
                    try {
                        let e = g ? await (0, A.im)(...t) : await (0, A.u6)(E, C.token, I.info, l);
                        c(e);
                    } catch {}
                    break;
                case eE.he.VENMO:
                case eE.he.PAYPAL:
                    try {
                        u()(null != v, "Missing braintreeNonce");
                        let e = await (0, A.u1)(v, I.info, l);
                        c(e);
                    } catch {}
                    break;
                case eE.he.EPS:
                    try {
                        let e = await (0, A.Z9)(E, j, I.info, l);
                        c(e);
                    } catch (e) {
                        tw.warn(e);
                    }
                    break;
                case eE.he.PIX:
                    try {
                        let e = await (0, A.im)(...t);
                        c(e);
                    } catch (e) {
                        tw.warn(e);
                    }
                    break;
                case eE.he.IDEAL:
                    try {
                        let e = g ? await (0, A.im)(...t) : await (0, A.EB)(E, I.info, l);
                        c(e);
                    } catch (e) {
                        tw.warn(e);
                    }
                    break;
                case eE.he.PRZELEWY24:
                    try {
                        if (void 0 === b) throw (0, A.i0)("Bank required for Przelewy24");
                        let e = await (0, A.TD)(E, { p24Bank: b }, I.info, l);
                        c(e);
                    } catch {}
                    break;
                case eE.he.PAYSAFE_CARD:
                case eE.he.GRABPAY_MY:
                    try {
                        let t = await (0, A.A8)(I.info, e, l);
                        c(t);
                    } catch {}
                    break;
                case eE.he.GCASH:
                case eE.he.MOMO_WALLET:
                case eE.he.KAKAOPAY:
                case eE.he.GOPAY_WALLET:
                    try {
                        let { redirectConfirmation: t } = await (0, A.$M)(I.info, e, l);
                        y(t);
                    } catch {}
                    break;
                case eE.he.GIROPAY:
                case eE.he.BANCONTACT:
                    try {
                        let t = await (0, A.bw)(E, I.info, e, l);
                        c(t);
                    } catch {}
                    break;
                case eE.he.CASH_APP:
                    try {
                        u()(null != T, "Missing adyenPaymentData");
                        let { paymentSource: t } = await (0, A.$M)(I.info, e, l, T, i);
                        u()(null != t, "Cash App Pay Payment Source missing"), c(t);
                    } catch {}
                    break;
                default:
                    throw Error("unknown step not handled");
            }
            S || _(!1);
        },
        P = d.methodType,
        { backStep: L } = g
            ? { backStep: eN.pn.PAYMENT_ELEMENT }
            : ((e) => {
                  switch (e) {
                      case eE.he.CARD:
                          return { backStep: eN.pn.CREDIT_CARD_INFORMATION };
                      case eE.he.PAYPAL:
                          return { backStep: eN.pn.PAYPAL_INFORMATION };
                      case eE.he.VENMO:
                          return { backStep: eN.pn.VENMO_INFORMATION };
                      case eE.he.GIROPAY:
                      case eE.he.PAYSAFE_CARD:
                      case eE.he.GCASH:
                      case eE.he.GRABPAY_MY:
                      case eE.he.MOMO_WALLET:
                      case eE.he.KAKAOPAY:
                      case eE.he.GOPAY_WALLET:
                      case eE.he.BANCONTACT:
                          return { backStep: eN.pn.PAYMENT_TYPE };
                      case eE.he.EPS:
                          return { backStep: eN.pn.EPS_INFORMATION };
                      case eE.he.IDEAL:
                          return { backStep: eN.pn.IDEAL_INFORMATION };
                      case eE.he.PRZELEWY24:
                          return { backStep: eN.pn.PRZELEWY24_INFORMATION };
                      case eE.he.CASH_APP:
                          return { backStep: eN.pn.CASH_APP_INFORMATION };
                      default:
                          return { backStep: eN.pn.PAYMENT_TYPE };
                  }
              })(P),
        O = g ? () => h(void 0) : () => s(L);
    return (0, r.jsx)(tT, {
        onBack: O,
        primaryCTA: eR.Ay.CTAType.CONTINUE,
        primaryText: M.intl.string(M.t.PDTjLN),
        primarySubmitting: x,
        primaryDisabled: !I.isValid || N,
        onPrimary: R,
        shouldUseManaModal: n,
    });
}
let tG = new eT.A("PaymentElementStepFooter.tsx"),
    tF = (e) => {
        let t = (0, ev.S)(),
            {
                shouldUseManaModal: n,
                paymentModalArgs: l,
                handleStepChange: i,
                setPaymentMethodSteps: a,
                onBack: o,
                primarySubmitting: u,
                primaryDisabled: c,
                PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: d,
            } = e,
            { setIsSubmittingCurrentStep: m, setBillingAddressState: h } = l,
            { paymentElementSelectedType: p, combinedStripeElementsRef: f, remountAddressElement: g } = e,
            E = s.useCallback(async () => {
                m(!0);
                try {
                    if (null == p || !(0, ed.PE)(p)) throw (0, A.ne)("Valid Payment Element source type not found", !0);
                    let { steps: e, methodType: n } = d[p];
                    if ((a({ steps: e, methodType: n === eE.he.UNKNOWN ? p : n }), p === eE.he.PAYMENT_REQUEST)) {
                        let e = f.current,
                            { paymentMethod: n } = await (0, A.YB)(t, e),
                            { billingAddressInfo: l } = (0, td.uK)(n);
                        h((e) => ({ ...e, info: l })), g(), i(eN.pn.ADDRESS);
                    } else {
                        let e = (0, ed.eI)(p);
                        null != e ? i(e) : i(eN.pn.ADDRESS);
                    }
                } catch (e) {
                    tG.error("Error on submitting Payment Element step: ", e.message ?? JSON.stringify(e));
                } finally {
                    m(!1);
                }
            }, [p, d, f, g, i, t, a, m, h]);
        return (0, r.jsx)(tT, {
            onBack: o,
            primaryCTA: eR.Ay.CTAType.CONTINUE,
            primaryType: "submit",
            primaryText: M.intl.string(M.t.PDTjLN),
            primarySubmitting: u,
            primaryDisabled: c,
            onPrimary: E,
            shouldUseManaModal: n,
        });
    };
var tV = n(691189);
let tB = new eT.A("AddPaymentStep.tsx"),
    tH = { name: "", cardNumber: "", expirationDate: "", cvc: "" },
    tW = { email: "", name: "", country: "", line1: "", line2: "", city: "", postalCode: "", state: "" };
function tK(e) {
    let { onCardInfoChange: t } = e,
        n = (0, c.bG)([L.A], () => L.A.error);
    return (0, r.jsx)(er, { billingError: n, onCardInfoChange: t });
}
function tY() {
    return (0, r.jsx)(w, {});
}
function tz() {
    return (0, r.jsx)(F, {});
}
function tZ() {
    return (0, r.jsx)(ts, {});
}
function tq() {
    let e = (0, c.bG)([e$.A], () => e$.A.isBusy),
        t = (0, c.bG)([L.A], () => L.A.stripePaymentMethod);
    return (0, r.jsx)(es, { stripePaymentMethod: t, submitting: e });
}
function t$() {
    return (0, r.jsx)(V.N, {});
}
function tX(e) {
    let t,
        n,
        {
            paymentModalArgs: l,
            initialStep: i,
            prependSteps: o,
            appendSteps: u,
            onReturn: E,
            onComplete: x,
            onStepChange: I,
            breadcrumpSteps: _,
            currentBreadcrumpStep: y,
            header: v,
            analyticsData: j,
            analyticsLocation: b,
            hideBreadcrumbs: R = !1,
            usePaymentModalStep: P = !1,
            isEligibleForTrial: O = !1,
            allowDesktopRedirectPurchase: w = !1,
            toastContent: D,
            continueSessionToInitialStep: k,
            overwriteSubscriptionPaymentSource: U = !1,
            shouldUseManaModal: G = !0,
        } = e,
        F = (0, ev.S)(),
        { activitySessionId: V } = (0, e_.V)(),
        { enabled: B } = (0, eu.Y)({ location: "AddPaymentFlow" }),
        H = (0, ey.t4)((e) => e.contextMetadata),
        W = (0, eL.l)(),
        K = s.useMemo(() => {
            let e = i === eN.pn.PAYMENT_TYPE || i === eN.pn.PAYMENT_ELEMENT;
            return B && e ? (w ? eN.pn.AWAITING_BROWSER_CHECKOUT : eN.pn.PAYMENT_ELEMENT) : i;
        }, [B, i, w]),
        Y = s.useMemo(() => (0, e2.Gn)(), []),
        {
            CREDIT_CARD_STEPS: z,
            PAYPAL_STEPS: Z,
            IDEAL_STEPS: q,
            PAYMENT_REQUEST_STEPS: $,
            VENMO_STEPS: X,
            ADD_PAYMENT_STEPS: J,
            PRZELEWY24_STEPS: Q,
            EPS_STEPS: ee,
            CASH_APP_STEPS: et,
            PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: en,
        } = ((e) => {
            let { prependSteps: t, appendSteps: n, paymentElementsEnabled: l } = e,
                [i, r, a, o, u, c, d, m, h, p] = (0, s.useMemo)(
                    () =>
                        ((e, t) => {
                            let { prependSteps: n, appendSteps: l, paymentElementsEnabled: i } = t;
                            return e.map((e) => {
                                let { sharedStepsKey: t, methodType: r } = e;
                                return {
                                    steps: [
                                        ...n,
                                        ...(i && (null == r || r === eE.he.UNKNOWN || (0, ed.PE)(r)) ? tS[t] : t_[t]),
                                        ...l,
                                    ],
                                    methodType: r,
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
                            { prependSteps: t, appendSteps: n, paymentElementsEnabled: l },
                        ),
                    [t, n, l],
                ),
                f = (0, s.useMemo)(
                    () => ({
                        [eE.he.CARD]: o,
                        [eE.he.PAYPAL]: u,
                        [eE.he.PAYMENT_REQUEST]: r,
                        [eE.he.VENMO]: d,
                        [eE.he.CASH_APP]: p,
                        [eE.he.IDEAL]: c,
                        [eE.he.PRZELEWY24]: m,
                        [eE.he.EPS]: h,
                        [eE.he.BANCONTACT]: i,
                        [eE.he.GOPAY_WALLET]: i,
                        [eE.he.KAKAOPAY]: i,
                        [eE.he.GCASH]: i,
                        [eE.he.PAYSAFE_CARD]: i,
                        [eE.he.GRABPAY_MY]: i,
                        [eE.he.MOMO_WALLET]: i,
                        [eE.he.PIX]: i,
                    }),
                    [i, o, u, d, r, c, p, m, h],
                );
            return {
                DEFAULT_PAYMENT_ELEMENT_STEPS: i,
                CREDIT_CARD_STEPS: o,
                PAYPAL_STEPS: u,
                IDEAL_STEPS: c,
                PAYMENT_REQUEST_STEPS: r,
                VENMO_STEPS: d,
                ADD_PAYMENT_STEPS: a,
                PRZELEWY24_STEPS: m,
                EPS_STEPS: h,
                CASH_APP_STEPS: p,
                PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: f,
            };
        })({ prependSteps: o, appendSteps: u, paymentElementsEnabled: B }),
        [el, ei] = s.useState(K),
        [er, es] = s.useState(null),
        [ea, eo] = s.useState(
            (function (e) {
                switch (e) {
                    case eN.pn.CREDIT_CARD_INFORMATION:
                        return z;
                    case eN.pn.CASH_APP_INFORMATION:
                        return et;
                    default:
                        return { steps: [eN.pn.ADD_PAYMENT_STEPS] };
                }
            })(K),
        );
    s.useEffect(() => {
        (0, A.IV)();
    }, []);
    let ec = (0, c.bG)([L.A], () => L.A.redirectedPaymentSourceId),
        em = (0, c.bG)([e9], () => e9.cashAppPayComponent),
        ep = { completeSteps: tt, setIsSubmittingCurrentStep: l.setIsSubmittingCurrentStep },
        ef = s.useRef(ep);
    s.useEffect(() => {
        ef.current = ep;
    }),
        s.useEffect(() => {
            let { completeSteps: e, setIsSubmittingCurrentStep: t } = ef.current;
            (async () => {
                if (null == ec) return;
                await (0, A.$o)();
                let n = eJ.A.getPaymentSource(ec);
                null != n && (e(n), t(!1), L.A.clearRedirectedPaymentSourceId());
            })();
        }, [ec]);
    let eg = s.useCallback(
            function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                es(null), ei(e), t && I({ currentStep: el, toStep: e });
            },
            [el, I],
        ),
        eA = s.useCallback(
            (e) => {
                e1.default.track(S.HAw.PAYMENT_FLOW_ADD_SOURCE_COMPLETED, {
                    load_id: H.loadId,
                    analytics_location: b,
                    payment_source_id: e.id,
                    payment_source_type: e.type,
                    payment_source_country: e.paymentMethodCountry,
                });
            },
            [H.loadId, b],
        ),
        eT = (0, c.bG)([L.A], () => L.A.error),
        eM = s.useRef(eT);
    s.useEffect(() => {
        let e = eM.current;
        (eM.current = eT),
            null != eT &&
                eT !== e &&
                e1.default.track(S.HAw.PAYMENT_FLOW_ADD_SOURCE_ERROR, {
                    load_id: H.loadId,
                    analytics_location: b,
                    payment_source_type: ea.methodType,
                    error_code: eT.code,
                    error_message: eT.message,
                });
    }, [eT, H.loadId, b, ea.methodType]);
    let eO = s.useCallback(
            (e) => {
                eA(e),
                    (0, d.P0)(
                        (0, m.o)(void 0 !== D ? D : M.intl.string(M.t["VJPg+l"]), h.Ck.SUCCESS, {
                            position: h.xJ.BOTTOM,
                        }),
                    ),
                    x(el, e),
                    eg(K, !1);
            },
            [eg, K, el, x, D, eA],
        ),
        [ew, eD] = s.useState(null),
        {
            setPaymentSourceId: ek,
            creditCardState: eU,
            setCreditCardState: eG,
            setTokenState: eF,
            isSubmittingCurrentStep: eV,
            billingAddressState: eB,
            setBillingAddressState: eH,
            setIsSubmittingCurrentStep: eW,
            braintreeEmail: eK,
            braintreeNonce: eY,
            venmoUsername: ez,
            adyenPaymentData: e$,
            epsBankState: eX,
            setEpsBankState: eQ,
            p24BankState: e3,
            setP24BankState: e4,
            selectedSkuId: e5,
        } = l,
        e7 = e5 ?? "",
        e8 = (0, c.bG)([e0.A], () => e0.A.get(e7), [e7]),
        te = e8?.eligiblePaymentGateways?.map((e) => e.valueOf());
    function tt(e) {
        ek(e.id), eO(e);
    }
    let tn = () => {
            eo(J), eg(eN.pn.PAYMENT_TYPE);
        },
        tl = (0, ex.wD)({
            step: el,
            continueSessionToInitialStep: k,
            paymentElementsEnabled: B,
            handleStepChange: eg,
            logger: tB,
            shouldLogOnChangeEvents: Y || !1,
            onBillingAddressChange: (e, t) => {
                eH({ info: { ...eB.info, ...e }, isValid: t });
            },
        }),
        {
            shouldRenderPaymentElement: tr,
            paymentElementReady: ts,
            paymentElementSelectedType: ta,
            returnToPaymentElementStep: to,
            onBackFromPaymentElement: tu,
            combinedStripeElementsRef: tc,
            stripePaymentElementProps: td,
            stripeAddressElementProps: tm,
            remountAddressElement: th,
            addressElementKey: tp,
        } = tl,
        tf = s.useCallback(() => {
            eg(eN.pn.ADDRESS), B && ex.Ky.includes(el) && th();
        }, [eg, B, th, el]),
        tg = s.useCallback(
            (e) => {
                B && null != ta && (0, ed.PE)(e) ? to(e) : eg(eN.pn.PAYMENT_TYPE);
            },
            [B, ta, to, eg],
        ),
        tE = P ? (0, r.jsx)(eb.A, { className: ty._8 }) : null,
        tA = (() => {
            let [e, t] = s.useState(!1),
                n = s.useRef(null);
            return {
                connectorPaymentRequestReady: e,
                setConnectorPaymentRequestReady: t,
                connectorPaymentRequestRef: n,
                showConnectorPaymentRequest: () => {
                    null != n.current && n.current.show();
                },
            };
        })();
    switch (el) {
        case eN.pn.ATTEMPT_GOOGLE_PAY:
        case eN.pn.ATTEMPT_APPLE_PAY:
        case eN.pn.PAYMENT_TYPE:
            (t = (0, r.jsx)(tj, {
                prependSteps: o,
                appendSteps: u,
                analyticsLocation: b,
                isEligibleForTrial: O,
                allowDesktopRedirectPurchase: w,
                onPaymentRequestSourceFailed: tn,
                paymentModalArgs: l,
                handleStepChange: eg,
                setPaymentMethodSteps: eo,
                setPaymentRequestPaymentMethod: eD,
                currentStep: el,
                setInfoNotice: es,
                completeSteps: tt,
                paymentSourceTypeRestrictions: te,
                CREDIT_CARD_STEPS: z,
                PAYPAL_STEPS: Z,
                VENMO_STEPS: X,
                PAYMENT_REQUEST_STEPS: $,
                PRZELEWY24_STEPS: Q,
                EPS_STEPS: ee,
                IDEAL_STEPS: q,
                CASH_APP_STEPS: et,
                ...tA,
            })),
                (n = (0, r.jsx)(tb, {
                    shouldUseManaModal: G,
                    onReturn: E,
                    handleStepChange: eg,
                    currentStep: el,
                    ...tA,
                }));
            break;
        case eN.pn.PAYMENT_ELEMENT:
            if (!B) throw (0, A.ne)("Payment Elements not enabled, invalid step", !0);
            (t = null),
                (n = (0, r.jsx)(tF, {
                    handleStepChange: eg,
                    shouldUseManaModal: G,
                    setPaymentMethodSteps: eo,
                    primarySubmitting: eV,
                    primaryDisabled: !ts,
                    onBack: () => {
                        tu(), E?.();
                    },
                    paymentModalArgs: l,
                    PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: en,
                    ...tl,
                }));
            break;
        case eN.pn.CREDIT_CARD_INFORMATION:
            let tC = async (e) => {
                eW(!0);
                try {
                    let t = await (0, A.YJ)(F, e);
                    eF({ token: t }), eg(eN.pn.ADDRESS);
                } catch (e) {
                    tB.error(e.message ?? JSON.stringify(e));
                } finally {
                    eW(!1);
                }
            };
            t = (0, r.jsx)(tK, {
                onCardInfoChange: (e, t) => {
                    eG({ info: e, isValid: t }), eH((t) => ({ ...t, info: { ...t.info, name: e.name } }));
                },
            });
            let tx = !eU.isValid,
                tI = () => {
                    eg(eN.pn.PAYMENT_TYPE);
                };
            n = (0, r.jsx)(a.ElementsConsumer, {
                children: (e) => {
                    let { elements: t } = e;
                    return (0, r.jsx)(tT, {
                        onBack: tI,
                        primaryCTA: eR.Ay.CTAType.CONTINUE,
                        primaryType: "submit",
                        primaryText: M.intl.string(M.t.PDTjLN),
                        primarySubmitting: eV,
                        primaryDisabled: tx,
                        onPrimary: () => tC(t),
                        shouldUseManaModal: G,
                    });
                },
            });
            break;
        case eN.pn.AWAITING_BROWSER_CHECKOUT:
        case eN.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
        case eN.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
            let tv = () => {
                eo(z), eg(B ? eN.pn.PAYMENT_ELEMENT : eN.pn.CREDIT_CARD_INFORMATION);
            };
            (t = (0, r.jsx)(eZ, { step: el, onPurchaseComplete: () => x(el), onHandoffFailure: tv })),
                (n = (0, r.jsx)(eq, {
                    onPrimaryClick: tv,
                    onBackClick: () => {
                        B ? (tu(), E?.()) : (eo(J), eg(eN.pn.PAYMENT_TYPE));
                    },
                }));
            break;
        case eN.pn.EPS_INFORMATION:
            (t = (0, r.jsx)(eC, {
                type: eE.he.EPS,
                onAccountHolderNameChange: (e) => eH({ info: { ...eB.info, name: e }, isValid: eB.isValid }),
                onEPSBankChange: (e) => eQ(e),
                epsBankValue: eX,
                billingAddressInfo: eB.info,
            })),
                (n = (0, r.jsx)(tT, {
                    onBack: () => tg(eE.he.EPS),
                    primaryCTA: eR.Ay.CTAType.CONTINUE,
                    primaryText: M.intl.string(M.t.PDTjLN),
                    primaryDisabled: void 0 === eX || "" === eX || "" === eB.info.name,
                    onPrimary: () => tf(),
                    shouldUseManaModal: G,
                }));
            break;
        case eN.pn.IDEAL_INFORMATION:
            (t = (0, r.jsx)(eh, {
                type: eE.he.IDEAL,
                onAccountHolderNameChange: (e) => eH({ info: { ...eB.info, name: e }, isValid: eB.isValid }),
                billingAddressInfo: eB.info,
            })),
                (n = (0, r.jsx)(tT, {
                    onBack: () => eg(eN.pn.PAYMENT_TYPE),
                    primaryCTA: eR.Ay.CTAType.CONTINUE,
                    primaryText: M.intl.string(M.t.PDTjLN),
                    primaryDisabled: "" === eB.info.name,
                    onPrimary: () => tf(),
                    shouldUseManaModal: G,
                }));
            break;
        case eN.pn.PRZELEWY24_INFORMATION:
            (t = (0, r.jsx)(eC, {
                type: eE.he.PRZELEWY24,
                onNameChange: (e) => eH({ info: { ...eB.info, name: e }, isValid: eB.isValid }),
                onEmailChange: (e) => eH({ info: { ...eB.info, email: e }, isValid: eB.isValid }),
                onP24BankChange: (e) => {
                    e4(e);
                },
                p24BankValue: e3,
                billingAddressInfo: eB.info,
            })),
                (n = (0, r.jsx)(tT, {
                    onBack: () => tg(eE.he.PRZELEWY24),
                    primaryCTA: eR.Ay.CTAType.CONTINUE,
                    primaryText: M.intl.string(M.t.PDTjLN),
                    primaryDisabled:
                        void 0 === eB.info.name ||
                        "" === eB.info.name ||
                        void 0 === eB.info.email ||
                        "" === eB.info.email ||
                        void 0 === e3 ||
                        "" === e3,
                    onPrimary: () => tf(),
                    shouldUseManaModal: G,
                }));
            break;
        case eN.pn.PAYPAL_INFORMATION:
            let tN = 0 !== eK.length && null != eY;
            (t = (0, r.jsx)(tY, {})),
                (n = (0, r.jsx)(tT, {
                    onBack: () => tg(eE.he.PAYPAL),
                    primaryCTA: eR.Ay.CTAType.CONTINUE,
                    primaryText: tN ? M.intl.string(M.t.PDTjLN) : M.intl.string(M.t.Djzd7L),
                    onPrimary: () => {
                        let e;
                        return tN
                            ? tf()
                            : void (null == (e = C.A.getLastURL())
                                  ? T()
                                  : (g.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_START" }), window.open(e)));
                    },
                    shouldUseManaModal: G,
                }));
            break;
        case eN.pn.VENMO_INFORMATION:
            let tR = 0 !== ez.length && null != eY;
            (t = (0, r.jsx)(tz, {})),
                (n = (0, r.jsx)(tT, {
                    onBack: () => tg(eE.he.VENMO),
                    primaryCTA: eR.Ay.CTAType.CONTINUE,
                    primaryText: tR ? M.intl.string(M.t.PDTjLN) : M.intl.string(M.t["4KoTLM"]),
                    onPrimary: () => (tR ? tf() : void N()),
                    shouldUseManaModal: G,
                }));
            break;
        case eN.pn.PAYMENT_REQUEST_INFORMATION:
            (t = (0, r.jsx)(tq, {})),
                (n = (0, r.jsx)(tT, { onBack: () => eg(eN.pn.PAYMENT_TYPE), shouldUseManaModal: G }));
            break;
        case eN.pn.CASH_APP_INFORMATION:
            let tP = null != e$;
            (t = (0, r.jsx)(tZ, {})),
                (n = (0, r.jsx)(tT, {
                    onBack: () => tg(eE.he.CASH_APP),
                    primaryCTA: eR.Ay.CTAType.CONTINUE,
                    primaryText: tP ? M.intl.string(M.t.PDTjLN) : M.intl.string(M.t["9ALP8w"]),
                    onPrimary: () => (tP ? tf() : ti()),
                    primaryDisabled: null == em,
                    shouldUseManaModal: G,
                }));
            break;
        case eN.pn.ADDRESS:
            let tL = B && null != ta;
            (t = (0, r.jsx)(tk, {
                paymentModalArgs: l,
                paymentSourceType: ea.methodType ?? eE.he.CARD,
                shouldUsePaymentElement: tL,
            })),
                (n = (0, r.jsx)(tU, {
                    paymentModalArgs: l,
                    shouldUseManaModal: G,
                    analyticsLocation: b,
                    overwriteSubscriptionPaymentSource: U,
                    handleStepChange: eg,
                    onPaymentRequestSourceFailed: tn,
                    paymentRequestPaymentMethod: ew,
                    completeSteps: tt,
                    paymentMethodSteps: ea,
                    shouldUsePaymentElement: tL,
                    ...tl,
                }));
            break;
        case eN.pn.AWAITING_AUTHENTICATION:
            t = (0, r.jsx)(t$, {});
            break;
        default:
            throw new eI.v({ message: `Unexpected step: ${el}`, extraSentryInformation: { currentStep: el } });
    }
    let tM = B && tr,
        tO = tM ? "combined_stripe_elements" : void 0,
        tw = (0, r.jsxs)(p.Y, {
            className: tV.C9,
            staticClassName: tV.a2,
            animatedNodeClassName: tV.L2,
            fillParent: !0,
            overrideKey: tO,
            step: el,
            steps: ea.steps,
            sideMargin: 20,
            children: [
                null != er &&
                    (0, r.jsx)("div", { className: ty.Ns, children: (0, r.jsx)(f.w, { type: "info", children: er }) }),
                tM &&
                    (0, r.jsx)(ex.e4, {
                        step: el,
                        analyticsContext:
                            null != j ? { activitySessionId: V, contextMetadata: H, analyticsData: j } : void 0,
                        paymentElementSelectedType: ta,
                        elementsRef: tc,
                        stripePaymentElementProps: td,
                        stripeAddressElementProps: tm,
                        addressElementKey: tp,
                        billingAddressInfo: eB.info,
                        onSetupError: () => {
                            tu(), eg(eN.pn.PAYMENT_TYPE);
                        },
                        paymentElementFooter: (0, r.jsx)(eS.Z4, {
                            className: ty.SO,
                            stackingBehavior: "stack",
                            onComplete: () => {
                                setTimeout(() => W(eN.pn.REVIEW), 0);
                            },
                        }),
                    }),
                t,
            ],
        }),
        tD = el === eN.pn.PAYMENT_TYPE && 0 === o.length ? null : n;
    return P
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  O && (0, r.jsx)(ej.A, { className: ty.At, isEligibleForTrial: O }),
                  (0, r.jsxs)(eP.dZ, { children: [tE, tw] }),
                  (0, r.jsx)(eP.UX, { children: tD }),
              ],
          })
        : (0, r.jsx)(e6.A, {
              shouldUseManaModal: G,
              steps: _ ?? ea.steps,
              currentStep: y ?? el,
              overrideKey: tO,
              paymentError: l.paymentError,
              header: v,
              hideBreadcrumbs: R,
              body: tw,
              footer: tD,
          });
}
function tJ(e) {
    let {
            defaultPaymentSourceId: t,
            paymentSources: n,
            hasFetchedPaymentSources: l,
        } = (0, c.cf)([eJ.A], () => ({
            defaultPaymentSourceId: void 0 !== e ? e : eJ.A.defaultPaymentSourceId,
            paymentSources: eJ.A.paymentSources,
            hasFetchedPaymentSources: eJ.A.hasFetchedPaymentSources,
        })),
        i = (0, c.bG)([e9], () => e9.cashAppPayComponent),
        r = (0, c.bG)([ec.A], () => ec.A.data?.allowed_payment_source_types ?? null);
    (0, ea.Ay)(() => {
        (0, I.j)().then((e) => {
            e.client
                .create({ authorization: S.Gg3.BRAINTREE.KEY })
                .then((e) => {
                    new Promise((e, t) => {
                        let n = Date.now(),
                            l = () => {
                                Date.now() - n >= 5e3
                                    ? t(Error("Timeout waiting for Braintree client to be initialized in store"))
                                    : null != C.A.getClient()
                                      ? e()
                                      : setTimeout(l, 1e3);
                            };
                        g.h.subscribe("BRAINTREE_CREATE_CLIENT_SUCCESS", function e() {
                            g.h.unsubscribe("BRAINTREE_CREATE_CLIENT_SUCCESS", e), setTimeout(l, 0);
                        });
                    })
                        .then(() => {
                            v(), y();
                        })
                        .catch((e) => {
                            x.pM(e);
                        }),
                        g.h.dispatch({ type: "BRAINTREE_CREATE_CLIENT_SUCCESS", client: e });
                })
                .catch(() => g.h.dispatch({ type: "BRAINTREE_CREATE_CLIENT_FAIL" }));
        }),
            l || (0, A.$o)();
    }),
        s.useEffect(() => {
            null == i && null != r && r.includes(eE.he.CASH_APP) && tt();
        }, [r, i]);
    let [a, o] = s.useState(t),
        u = (0, eo.A)(t);
    t !== u && null != t && null == a && o(t);
    let [d, m] = s.useState(() => ({ info: tH, isValid: !1 })),
        [h, p] = s.useState(() => ({ info: tW, isValid: !1 })),
        [f, E] = s.useState(""),
        [_, T] = s.useState(""),
        [N, j] = s.useState(() => ({ token: null })),
        [R, P, M, O, w] = (0, c.yK)([L.A], () => [
            L.A.braintreeEmail,
            L.A.braintreeNonce,
            L.A.error,
            L.A.venmoUsername,
            L.A.adyenPaymentData,
        ]),
        [D, k] = (0, c.yK)([eX.A], () => [eX.A.error, eX.A.isAwaitingAuthentication]);
    s.useEffect(() => {
        let e = (e) => {
            let { billingAddress: t } = e;
            p({ info: t, isValid: t.country.length > 0 });
        };
        return (
            g.h.subscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e),
            () => {
                g.h.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e), (0, b.ET)();
            }
        );
    }, []);
    let [U, G] = s.useState(!1),
        [F, V] = s.useState(!1),
        [B, H] = s.useState(null),
        W = s.useRef(null),
        K = (0, c.bG)([eX.A], () => eX.A.isAwaitingAuthentication),
        [Y, z] = (0, c.yK)([eQ.A], () => [eQ.A.purchaseTokenAuthState, eQ.A.purchaseTokenHash]);
    return (
        s.useEffect(() => {
            null != B && null != W.current && W.current.scrollIntoView({ behavior: "smooth" });
        }, [B]),
        {
            paymentSources: n,
            paymentSourceId: a,
            hasFetchedPaymentSources: l,
            setPaymentSourceId: o,
            creditCardState: d,
            setCreditCardState: m,
            tokenState: N,
            setTokenState: j,
            billingAddressState: h,
            setBillingAddressState: p,
            isSubmittingCurrentStep: U,
            setIsSubmittingCurrentStep: G,
            hasRedirectURL: F,
            setHasRedirectURL: V,
            braintreeEmail: R,
            braintreeNonce: P,
            venmoUsername: O,
            adyenPaymentData: w,
            paymentError: null != D ? D : M,
            paymentAuthenticationState: k ? e3.oc.PENDING : null != D ? e3.oc.ERROR : e3.oc.NONE,
            purchaseError: B,
            setPurchaseError: H,
            purchaseErrorBlockRef: W,
            isAuthenticating: K,
            purchaseTokenAuthState: Y,
            purchaseTokenHash: z,
            epsBankState: _,
            setEpsBankState: T,
            p24BankState: f,
            setP24BankState: E,
        }
    );
}
