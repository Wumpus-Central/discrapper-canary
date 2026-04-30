n.d(t, { Y: () => tK, _V: () => tZ });
var l,
    a,
    i = n(627968),
    s = n(64700),
    r = n(342393),
    o = n(284009),
    u = n.n(o),
    c = n(17928),
    d = n(691540),
    p = n(857250),
    m = n(97483),
    h = n(685094),
    A = n(683071),
    C = n(228366),
    E = n(636537),
    y = n(323082),
    P = n(70142),
    S = n(739508),
    _ = n(184015),
    T = n(723702),
    f = n(652215);
function N() {
    let e = P.A.getClient();
    if (null == e) throw Error("Braintree client must be initialized before creating Venmo client.");
    (0, _.j)().then((t) => {
        t.venmo
            .create({ client: e, allowDesktop: !0, paymentMethodUsage: "multi_use" })
            .then((e) => {
                C.h.dispatch({ type: "BRAINTREE_CREATE_VENMO_CLIENT_SUCCESS", venmoClient: e });
            })
            .catch(() => {
                C.h.dispatch({ type: "BRAINTREE_CREATE_VENMO_CLIENT_FAIL" });
            });
    });
}
function x() {
    let e = P.A.getClient();
    if (null == e) throw Error("braintree client must be initialized before calling this");
    (0, _.j)().then((t) => {
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
                        url: f.Rsh.BILLING_PAYPAL_BILLING_AGREEMENT_TOKENS,
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
                                ((t = f.Gg3.BRAINTREE.KEY.startsWith("production_")
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
                    C.h.dispatch({ type: "BRAINTREE_CREATE_PAYPAL_CLIENT_SUCCESS", paypalClient: e });
            })
            .catch(() => C.h.dispatch({ type: "BRAINTREE_CREATE_PAYPAL_CLIENT_FAIL" }));
    });
}
function I() {
    let e = P.A.getPayPalClient();
    if (null == e) throw Error("braintree paypal client must be initialized before calling this");
    C.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_START" });
    let t = Promise.resolve("");
    (0, T.isDesktop)() && (t = (0, y.jf)(f.hes.PAYPAL)),
        t
            .then(() => e.tokenize({ flow: "vault" }))
            .then((e) => {
                let { email: t, firstName: n, lastName: l, billingAddress: a } = e.details;
                C.h.dispatch({
                    type: "BRAINTREE_TOKENIZE_PAYPAL_SUCCESS",
                    nonce: e.nonce,
                    email: t,
                    billingAddress: {
                        name: `${n} ${l}`,
                        line1: a.line1,
                        line2: a.line2,
                        city: a.city,
                        state: a.state,
                        country: a.countryCode,
                        postalCode: a.postalCode,
                    },
                });
            })
            .catch((e) => {
                let { message: t, code: n, details: l } = e;
                n === f.Q7O.PAYPAL_POPUP_CLOSED || null == n
                    ? C.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED" })
                    : (C.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_FAIL", message: t, code: n }),
                      S.pM(Error(`Braintree Paypal Error: ${t} ${n} ${l}`)));
            });
}
function g() {
    let e = P.A.getVenmoClient();
    if (null == e) throw Error("Braintree Venmo client must be initialized before calling tokenize.");
    C.h.dispatch({ type: "BRAINTREE_TOKENIZE_VENMO_START" }),
        e
            .tokenize()
            .then((e) => {
                let { username: t } = e.details;
                C.h.dispatch({ type: "BRAINTREE_TOKENIZE_VENMO_SUCCESS", nonce: e.nonce, username: t });
            })
            .catch((e) => {
                let { message: t, code: n, details: l } = e;
                [f.Q7O.VENMO_APP_CANCELED, f.Q7O.VENMO_DESKTOP_CANCELED, f.Q7O.VENMO_CANCELED].includes(n)
                    ? C.h.dispatch({ type: "BRAINTREE_TOKENIZE_VENMO_FAIL_CANCELED" })
                    : (C.h.dispatch({ type: "BRAINTREE_TOKENIZE_VENMO_FAIL", message: t, code: n }),
                      S.pM(Error(`Braintree Venmo Error: ${t} ${n} ${l}`)));
            });
}
function v(e, t) {
    if (null == e) return Promise.resolve();
    C.h.dispatch(t);
    try {
        return Promise.resolve(e.teardown());
    } catch (e) {
        return Promise.resolve();
    }
}
var M = n(391048),
    b = n(292666),
    R = n(812745),
    j = n(825755),
    L = n(985018);
class O extends s.PureComponent {
    componentDidMount() {
        null != this.props.paypalClient && I();
    }
    componentDidUpdate(e) {
        null == e.paypalClient && null != this.props.paypalClient && I();
    }
    componentWillUnmount() {
        v(P.A.getPayPalClient(), { type: "BRAINTREE_TEARDOWN_PAYPAL_CLIENT" }).then(() => {
            null != P.A.getClient() && x();
        });
    }
    render() {
        let { braintreeEmail: e, paypalClient: t } = this.props;
        return (0, i.jsx)(b.k, {
            label: L.intl.string(L.t.QQBAos),
            leading: { type: "image", src: (0, R.Nj)(R.Ay.Types.PAYPAL) },
            value: e,
            readOnly: !0,
            placeholder: null == t ? L.intl.string(L.t.dte2M9) : L.intl.string(L.t.hopw7X),
        });
    }
}
let D = c.Ay.connectStores([P.A, j.A], () => ({
    braintreeEmail: j.A.braintreeEmail,
    paypalClient: P.A.getPayPalClient(),
}))(O);
var w = n(534514),
    U = n(834730),
    k = n(527142);
class Y extends s.PureComponent {
    componentDidMount() {
        null != this.props.venmoClient && g();
    }
    componentDidUpdate(e) {
        null == e.venmoClient && null != this.props.venmoClient && g();
    }
    componentWillUnmount() {
        v(P.A.getVenmoClient(), { type: "BRAINTREE_TEARDOWN_VENMO_CLIENT" }).then(() => {
            null != P.A.getClient() && N();
        });
    }
    render() {
        let { venmoUsername: e, className: t, venmoClient: n } = this.props,
            l = null != e && "" !== e;
        return (0, i.jsxs)("div", {
            className: t,
            children: [
                (0, i.jsx)(R.Ay, { type: R.Ay.Types.VENMO, size: R.y3.MEDIUM, className: k.Z }),
                l
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(w.D, {
                                  variant: e.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
                                  className: k.y,
                                  children: L.intl.format(L.t.DowIre, { venmoUsername: e }),
                              }),
                              (0, i.jsx)(U.E, {
                                  variant: "text-md/medium",
                                  className: k.y,
                                  children: L.intl.string(L.t.kmEvnR),
                              }),
                          ],
                      })
                    : (0, i.jsx)(U.E, {
                          variant: "text-md/medium",
                          className: k.y,
                          children: null == n ? L.intl.string(L.t["2ouZDU"]) : L.intl.string(L.t.mIL6Jb),
                      }),
            ],
        });
    }
}
let G = c.Ay.connectStores([P.A, j.A], () => ({ venmoUsername: j.A.venmoUsername, venmoClient: P.A.getVenmoClient() }))(
    Y,
);
var F = n(891197),
    B = n(503698),
    W = n.n(B),
    H = n(305866),
    V = n(287809),
    K = n(832208),
    Z = n(661531),
    q = n(602853),
    z = n(511274),
    $ = n(50579),
    J = n(482188);
let X = function (e) {
    let t = s.useRef(null),
        { stripeType: n, flipped: l, updateCompleted: a, onFocus: o, onBlur: u } = e,
        [c, d] = s.useState(R.Be.UNKNOWN),
        [p, m] = s.useState(!1),
        [h, A] = s.useState(!1),
        [C, E] = s.useState(null),
        [y, P] = s.useState({}),
        S = (0, r.useElements)(),
        _ = s.useCallback(() => {
            if (null != S)
                switch (n) {
                    case "cardNumber": {
                        let e = S.getElement(r.CardNumberElement);
                        if (null == e) return;
                        e.off("change"), e.off("focus"), e.off("blur");
                        break;
                    }
                    case "cardExpiry": {
                        let e = S.getElement(r.CardExpiryElement);
                        if (null == e) return;
                        e.off("change"), e.off("focus"), e.off("blur");
                        break;
                    }
                    case "cardCvc": {
                        let e = S.getElement(r.CardCvcElement);
                        if (null == e) return;
                        e.off("change"), e.off("focus"), e.off("blur");
                    }
                }
        }, [S, n]),
        T = s.useCallback(
            (e) => {
                h || e.empty || A(!0), null != a && a(e.complete), null != e.error && m(!1);
            },
            [h, a],
        ),
        f = s.useCallback(() => {
            m(!0), o?.();
        }, [o]),
        N = s.useCallback(() => {
            m(!1), u?.();
        }, [u]),
        x = s.useCallback(() => {
            if (null != S)
                switch (n) {
                    case "cardNumber": {
                        let e = S.getElement(r.CardNumberElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            c !== e.brand && d(e.brand),
                                e.empty && h
                                    ? E(L.intl.string(L.t.eOIfuy))
                                    : null != e.error
                                      ? E(L.intl.string(L.t.x4pWtJ))
                                      : E(null),
                                T(e);
                        }),
                            e.on("focus", f),
                            e.on("blur", N);
                        break;
                    }
                    case "cardExpiry": {
                        let e = S.getElement(r.CardExpiryElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            null != e.error || (e.empty && h) ? E(L.intl.string(L.t["9/zZdl"])) : E(null), T(e);
                        }),
                            e.on("focus", f),
                            e.on("blur", N);
                        break;
                    }
                    case "cardCvc": {
                        let e = S.getElement(r.CardCvcElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            null != e.error || (e.empty && h) ? E(L.intl.string(L.t.ro4isZ)) : E(null), T(e);
                        }),
                            e.on("focus", f),
                            e.on("blur", N);
                    }
                }
        }, [N, T, f, c, S, h, n]);
    s.useEffect(
        () => (
            x(),
            () => {
                _();
            }
        ),
        [x, _],
    );
    let I = (0, q.r)(Z.A.colors.TEXT_SUBTLE).hex(),
        g = (0, q.r)(Z.A.colors.TEXT_STRONG).hex();
    function v() {
        return W()($.vB, { [$.Tn]: null !== C, [$.iH]: p, [$.yD]: "cardNumber" === n });
    }
    return (
        s.useLayoutEffect(() => {
            let { current: e } = t;
            if (null == e) return;
            let n = window.getComputedStyle(e),
                l = n.getPropertyValue("font-family");
            P({
                base: {
                    fontFamily: l,
                    fontWeight: n.getPropertyValue("font-weight"),
                    color: g,
                    fontSize: n.getPropertyValue("font-size"),
                    "::placeholder": { color: I },
                },
            });
        }, [t, I, g]),
        (0, i.jsxs)("div", {
            className: $.Zm,
            "data-stripe-type": n,
            children: [
                (0, i.jsx)("div", { ref: t, className: W()($.iw, J.hF) }),
                (function () {
                    switch (n) {
                        case "cardNumber":
                            return (0, i.jsxs)("div", {
                                children: [
                                    (0, i.jsx)(R.Ay, { className: $.Ie, type: c, flipped: l }),
                                    (0, i.jsx)(r.CardNumberElement, {
                                        options: { style: y, placeholder: L.intl.string(L.t.gPRHfw), disableLink: !1 },
                                        className: v(),
                                    }),
                                ],
                            });
                        case "cardExpiry":
                            return (0, i.jsx)(r.CardExpiryElement, {
                                options: { style: y, placeholder: L.intl.string(L.t.xeEWQ6) },
                                className: v(),
                            });
                        case "cardCvc":
                            return (0, i.jsx)(r.CardCvcElement, {
                                options: { style: y, placeholder: L.intl.string(L.t.wZz04F) },
                                className: v(),
                            });
                    }
                })(),
                (0, i.jsx)(z.U, { error: C }),
            ],
        })
    );
};
var Q = n(483770),
    ee = n(536439);
let et = function (e) {
    let { onCardInfoChange: t, error: n } = e,
        l = s.useRef(t),
        [a, r] = s.useState(!1),
        [o, u] = s.useState({}),
        [c, d] = s.useState({ name: "", country: "", postalCode: "" }),
        [p, m] = s.useState({}),
        [h, A] = s.useState({}),
        { setFocusLockDisabled: C } = s.useContext(H.M);
    s.useEffect(() => () => {
        void 0 !== C && C(!1);
    });
    let E = s.useCallback(() => {
        void 0 !== C && C(!0);
    }, [C]);
    function y(e, t) {
        !!o[e] !== t && u((n) => ({ ...n, [e]: t }));
    }
    let P = s.useCallback(
        function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = {};
            return (e || p.name) && "" === c.name && (t.name = L.intl.string(L.t.lIkVsi)), t;
        },
        [p, c],
    );
    return (
        s.useEffect(() => {
            let e = o.cardNumber && o.cardExpiry && o.cardCvc && 0 === Object.keys(P(!0)).length;
            l.current({ name: c.name }, !!e);
        }, [o, c, P]),
        (0, i.jsxs)("div", {
            children: [
                V.default.getCurrentUser()?.nsfwAllowed
                    ? (0, i.jsxs)("div", {
                          className: Q.Rm,
                          children: [
                              (0, i.jsx)("div", { className: W()(R.y3.SMALL, Q.eo, Q.Ud) }),
                              (0, i.jsx)("div", { className: W()(R.y3.SMALL, Q.DR, Q.Ud) }),
                              (0, i.jsx)("div", { className: W()(R.y3.SMALL, Q.k4, Q.Ud) }),
                              (0, i.jsx)("div", { className: W()(R.y3.SMALL, Q.a3, Q.Ud) }),
                              (0, i.jsx)("div", { className: W()(R.y3.SMALL, Q.CY, Q.Ud) }),
                              (0, i.jsx)("div", { className: W()(R.y3.SMALL, Q.Q5, Q.Ud) }),
                              (0, i.jsx)("div", { className: W()(R.y3.SMALL, Q.YA, Q.Ud) }),
                          ],
                      })
                    : (0, i.jsxs)("div", {
                          className: Q.Rm,
                          children: [
                              (0, i.jsx)("div", { className: W()(R.y3.SMALL, Q.aq, Q.Ud) }),
                              (0, i.jsx)("div", { className: W()(R.y3.SMALL, Q.VX, Q.Ud) }),
                              (0, i.jsx)("div", { className: W()(R.y3.SMALL, Q.Yi, Q.Ud) }),
                              (0, i.jsx)("div", { className: W()(R.y3.SMALL, Q.qR, Q.Ud) }),
                              (0, i.jsx)("div", { className: W()(R.y3.SMALL, Q.m2, Q.Ud) }),
                              (0, i.jsx)("div", { className: W()(R.y3.SMALL, Q.Ij, Q.Ud) }),
                              (0, i.jsx)("div", { className: W()(R.y3.SMALL, Q._V, Q.Ud) }),
                          ],
                      }),
                (0, i.jsx)(K.A, {
                    form: [
                        {
                            fields: [
                                {
                                    id: "card-number",
                                    name: "cardNumber",
                                    title: () => L.intl.string(L.t.cVyJ3o),
                                    getClassNameForLayout: () => ee.c6,
                                    renderInput: () =>
                                        (0, i.jsx)(X, {
                                            stripeType: "cardNumber",
                                            flipped: a,
                                            updateCompleted: (e) => y("cardNumber", e),
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
                                    title: () => L.intl.string(L.t["CeBa/4"]),
                                    getClassNameForLayout: () => ee.ep,
                                    renderInput: () =>
                                        (0, i.jsx)(X, {
                                            stripeType: "cardExpiry",
                                            updateCompleted: (e) => y("cardExpiry", e),
                                            onFocus: E,
                                        }),
                                },
                                {
                                    id: "card-cvc",
                                    name: "cardCvc",
                                    title: () => L.intl.string(L.t.Fd3rOz),
                                    getClassNameForLayout: () => ee.ep,
                                    renderInput: () =>
                                        (0, i.jsx)(X, {
                                            stripeType: "cardCvc",
                                            updateCompleted: (e) => y("cardCvc", e),
                                            onFocus: () => {
                                                E(), r(!0);
                                            },
                                            onBlur: () => {
                                                r(!1);
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
                                    getClassNameForLayout: () => ee.c6,
                                    renderInput: (e) => (0, i.jsx)(b.k, { ...e }),
                                },
                            ],
                        },
                    ],
                    errors: h,
                    formError: n,
                    values: c,
                    onFieldChange: function (e, t) {
                        if ("name" !== t && "country" !== t && "postalCode" !== t) return;
                        let n = { ...c },
                            l = { ...p },
                            a = { name: h.name };
                        p[t] || "" === e || (l[t] = !0),
                            (n[t] = e),
                            l[t] && "" === e ? "name" === t && (a.name = L.intl.string(L.t.lIkVsi)) : delete a[t],
                            d(n),
                            m(l),
                            A(a);
                    },
                    onFieldBlur: function () {
                        A(P());
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
var ea = n(723429);
let ei = (e) => {
        let { billingError: t, onCardInfoChange: n } = e,
            l = null != t && (null == t.code || el(t) === en.CREDIT_CARD_INFORMATION);
        return (0, i.jsxs)(s.Fragment, {
            children: [
                l
                    ? (0, i.jsx)("div", {
                          className: ea.QK,
                          children: (0, i.jsx)(A.w, { type: "critical", children: L.intl.string(L.t["4vnhKV"]) }),
                      })
                    : null,
                (0, i.jsx)(et, { onCardInfoChange: n, error: t }),
            ],
        });
    },
    es = (e) => {
        let { className: t, submitting: n, stripePaymentMethod: l } = e,
            { card: a } = l ?? {},
            s = null != a ? R.Ay.getType(a.brand) : R.Ay.Types.UNKNOWN;
        return (0, i.jsx)("div", {
            className: t,
            children: (0, i.jsx)(b.k, {
                label: L.intl.string(L.t["mmDvV+"]),
                leading: { type: "image", src: (0, R.Nj)(s) },
                value: n && null != a ? L.intl.formatToPlainString(L.t.bCynoK, a) : void 0,
                readOnly: !0,
                placeholder: L.intl.string(L.t.bWMH78),
            }),
        });
    };
var er = n(964486),
    eo = n(721101),
    eu = n(648335),
    ec = n(384365);
let ed = function (e) {
    let { onAccountHolderNameChange: t, billingAddressInfo: n } = e,
        l = s.useRef(null);
    return (0, i.jsx)("div", {
        className: ec.r,
        children: (0, i.jsx)(b.k, {
            label: L.intl.string(L.t.sN3wrd),
            inputRef: l,
            name: L.intl.string(L.t.sN3wrd),
            placeholder: L.intl.string(L.t.sN3wrd),
            onChange: (e) => t(e),
            value: n.name,
        }),
    });
};
var ep = n(462887),
    em = n(331322),
    eh = n(736653),
    eA = n(818348),
    eC = n(198650);
let eE = function (e) {
    let t = (0, eh.Ay)(),
        n = s.useRef(null),
        [l, a] = s.useState({}),
        o = (0, q.r)(Z.A.colors.BACKGROUND_BASE_LOWER).hex();
    switch (
        (s.useLayoutEffect(() => {
            let { current: e } = n;
            if (null == e) return;
            let t = window.getComputedStyle(e),
                l = window.getComputedStyle(e, "::placeholder"),
                i = t.getPropertyValue("font-family"),
                s = t.getPropertyValue("font-weight");
            a({
                base: {
                    fontFamily: i,
                    fontWeight: s,
                    color: t.getPropertyValue("color"),
                    fontSize: t.getPropertyValue("font-size"),
                    backgroundColor: o,
                    padding: "12px",
                    "::placeholder": { color: l.getPropertyValue("color") },
                    borderRadius: Z.A.radii.xs,
                },
            });
        }, [n, o]),
        e.type)
    ) {
        case eA.he.PRZELEWY24: {
            let a = (0, ep.M)(t) ? "/assets/f4150b3aed6c4679.svg" : "/assets/8b825aafb2e4dbed.svg",
                { onNameChange: s, onEmailChange: o, onP24BankChange: u, p24BankValue: c, billingAddressInfo: d } = e;
            return (0, i.jsx)("div", {
                className: eC.rf,
                children: (0, i.jsxs)(em.B, {
                    gap: 16,
                    children: [
                        (0, i.jsx)(b.k, {
                            label: L.intl.string(L.t["w/qqKK"]),
                            inputRef: n,
                            name: L.intl.string(L.t["w/qqKK"]),
                            placeholder: L.intl.string(L.t["w/qqKK"]),
                            onChange: (e) => o(e),
                            value: d.email,
                        }),
                        (0, i.jsx)(b.k, {
                            label: L.intl.string(L.t["yf7ms+"]),
                            name: L.intl.string(L.t["yf7ms+"]),
                            placeholder: L.intl.string(L.t["yf7ms+"]),
                            onChange: (e) => s(e),
                            value: d.name,
                        }),
                        (0, i.jsxs)(em.B, {
                            gap: 4,
                            children: [
                                (0, i.jsx)(U.E, { variant: "text-sm/semibold", children: L.intl.string(L.t.De3b8t) }),
                                (0, i.jsx)(r.P24BankElement, {
                                    options: { value: c, style: l },
                                    onChange: (e) => u(e.value),
                                }),
                                (0, i.jsx)("div", {
                                    className: eC.je,
                                    children: (0, i.jsx)("img", { src: a, alt: "Przelewy24" }),
                                }),
                            ],
                        }),
                    ],
                }),
            });
        }
        case eA.he.EPS: {
            let { onAccountHolderNameChange: a, onEPSBankChange: s, epsBankValue: o, billingAddressInfo: u } = e,
                c = (0, ep.M)(t) ? "/assets/025b24b0055c8d81.svg" : "/assets/1dae7d71a65fd90f.svg";
            return (0, i.jsx)("div", {
                className: eC.rf,
                children: (0, i.jsxs)(em.B, {
                    gap: 16,
                    children: [
                        (0, i.jsx)(b.k, {
                            label: L.intl.string(L.t.sN3wrd),
                            inputRef: n,
                            name: L.intl.string(L.t.sN3wrd),
                            placeholder: L.intl.string(L.t.sN3wrd),
                            onChange: (e) => a(e),
                            value: u.name,
                        }),
                        (0, i.jsxs)(em.B, {
                            gap: 4,
                            children: [
                                (0, i.jsx)(U.E, { variant: "text-sm/semibold", children: L.intl.string(L.t.dFyV07) }),
                                (0, i.jsx)(r.EpsBankElement, {
                                    options: { value: o, style: l },
                                    onChange: (e) => s(e.value),
                                }),
                                (0, i.jsx)("div", {
                                    className: eC.je,
                                    children: (0, i.jsx)("img", { src: c, alt: "EPS" }),
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
var ey = n(211528),
    eP = n(93159),
    eS = n(626584),
    e_ = n(156312),
    eT = n(166532),
    ef = n(69494),
    eN = n(19311),
    ex = n(482132),
    eI = n(615310),
    eg = n(364840),
    ev = n(73825),
    eM = n(558620),
    eb = n(94420),
    eR = n(683433),
    ej = n(36167),
    eL = n(937008),
    eO = (((a = {})[(a.UNKNOWN = 0)] = "UNKNOWN"), (a[(a.PENDING = 1)] = "PENDING"), (a[(a.DONE = 2)] = "DONE"), a);
let eD = 0,
    ew = null,
    eU = null,
    ek = null;
class eY extends c.Ay.Store {
    static displayName = "BrowserCheckoutStateStore";
    get browserCheckoutState() {
        return eD;
    }
    get loadId() {
        return ew;
    }
    get skuId() {
        return eU;
    }
    get planId() {
        return ek;
    }
}
let eG = new eY(C.h, {
    USER_PAYMENT_BROWSER_CHECKOUT_STARTED: function (e) {
        (eD = 1), (ew = e.loadId);
    },
    USER_PAYMENT_BROWSER_CHECKOUT_DONE: function (e) {
        ew === e.loadId && ((eU = e.skuId ?? null), (ek = e.skuSubscriptionPlanId ?? null), (eD = 2));
    },
});
var eF = n(788868),
    eB = n(647926);
let eW = (e) => {
        let t,
            { step: n, onPurchaseComplete: l, onHandoffFailure: a } = e,
            { setSelectedSkuId: r, setSelectedPlanId: o } = (0, eb.t4)((e) => ({
                setSelectedSkuId: e.setSelectedSkuId,
                setSelectedPlanId: e.setSelectedPlanId,
            })),
            {
                browserCheckoutState: u,
                browserCheckoutStateLoadId: d,
                browserCheckoutStateSkuId: p,
                browserCheckoutStatePlanId: m,
            } = (0, c.cf)([eG], () => ({
                browserCheckoutState: eG.browserCheckoutState,
                browserCheckoutStateLoadId: eG.loadId,
                browserCheckoutStateSkuId: eG.skuId,
                browserCheckoutStatePlanId: eG.planId,
            })),
            { contextMetadata: h } = (0, e_.P5)(),
            A = (0, eM.A)(),
            { isGift: C } = (0, eL.Pv)(),
            [E, P] = s.useState(!1);
        switch (n) {
            case eT.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
                t = f.do8.GOOGLE_PAY;
                break;
            case eT.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
                t = f.do8.APPLE_PAY;
        }
        return (
            s.useEffect(() => {
                let e = setTimeout(() => {
                    E ||
                        (P(!0),
                        (0, y.Ze)(h.loadId),
                        (0, ej.my)(
                            {
                                planId: A?.id ?? eF.gD.PREMIUM_MONTH_TIER_2,
                                isGift: C,
                                loadId: h.loadId,
                                paymentMethodType: t,
                            },
                            a,
                        ));
                }, 1e3);
                return () => clearTimeout(e);
            }, [A, C, h, a, P, E, t]),
            s.useEffect(() => {
                null !== p && (eF.oz.includes(p) && ((0, ev.ur)(p), (0, y.hP)()), r(p)),
                    null !== m && o(m),
                    d === h.loadId && u === eO.DONE && l();
            }, [r, o, u, d, p, m, h, l]),
            (0, i.jsxs)("div", {
                className: eB.rf,
                children: [
                    (0, i.jsx)(w.D, { variant: "heading-xl/bold", children: L.intl.string(L.t.C4HYfy) }),
                    (0, i.jsx)(U.E, {
                        variant: "text-md/normal",
                        className: eB.h_,
                        children: L.intl.string(L.t.xfG7Jp),
                    }),
                ],
            })
        );
    },
    eH = (e) => {
        let { onPrimaryClick: t, onBackClick: n } = e;
        return (0, i.jsx)(eg.j, {
            children: (0, i.jsxs)("div", {
                className: eB.kL,
                children: [
                    (0, i.jsx)(eR.A, { onClick: n }),
                    (0, i.jsx)(eR.F, { onClick: t, children: L.intl.string(L.t["4Qvmmj"]) }),
                ],
            }),
        });
    };
var eV = n(921925),
    eK = n(615405),
    eZ = n(153084),
    eq = n(295405),
    ez = n(293700),
    e$ = n(67480),
    eJ = n(954571),
    eX = n(427262),
    eQ = n(251913),
    e0 = n(632638),
    e2 = n(501280);
let e3 = null,
    e1 = null;
class e4 extends c.Ay.Store {
    static displayName = "AdyenStore";
    get client() {
        return e3;
    }
    get cashAppPayComponent() {
        return e1;
    }
}
let e7 = new e4(C.h, {
    ADYEN_CREATE_CLIENT_SUCCESS: function (e) {
        let { client: t } = e;
        e3 = t;
    },
    ADYEN_TEARDOWN_CLIENT: function () {
        e3 = null;
    },
    ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS: function (e) {
        let { component: t } = e;
        e1 = t;
    },
});
async function e6() {
    return await E.Bo.get({ url: f.Rsh.BILLING_ADYEN_PAYMENT_METHODS, oldFormErrors: !0, rejectWithError: !1 });
}
async function e5() {
    try {
        let e = await e6(),
            { default: t } = await Promise.all([n.e("94678"), n.e("40002")]).then(n.bind(n, 971193)),
            l = await t({
                environment: f.Gg3.ADYEN.KEY.startsWith("live_") ? "live" : "test",
                clientKey: f.Gg3.ADYEN.KEY,
                analytics: { enabled: !1 },
                paymentMethodsResponse: e.body,
            });
        C.h.dispatch({ type: "ADYEN_CREATE_CLIENT_SUCCESS", client: l }),
            (function (e) {
                if (null != e7.cashAppPayComponent) {
                    e7.cashAppPayComponent?.unmount(),
                        (function () {
                            if (null == e7.cashAppPayComponent)
                                throw Error("Adyen CashAppPay component must be created before mounting.");
                            e7.cashAppPayComponent?.mount(`#${e2.h}`);
                        })();
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
                            if (n) C.h.dispatch({ type: "ADYEN_CASH_APP_PAY_SUBMIT_SUCCESS", data: t });
                            else throw (0, y.i0)("Cash App Pay setup attempt is not valid.");
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
                                (0, y.i0)(e.message, n, t);
                            }
                        },
                    })
                    .mount(`#${e2.h}`);
                C.h.dispatch({ type: "ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS", component: t });
            })(l);
    } catch (e) {
        (0, S.pM)(e), C.h.dispatch({ type: "ADYEN_CREATE_CLIENT_FAIL" });
    }
}
function e8() {
    let e = e7.cashAppPayComponent;
    if (null == e) throw Error("Adyen CashAppPay component must be created before submitting.");
    e.submit();
}
var e9 = n(40417);
class te extends s.PureComponent {
    componentDidMount() {
        this.maybeOpenCashAppOverlay();
    }
    componentDidUpdate(e) {
        null == e.cashAppPayComponent &&
            null != this.props.cashAppPayComponent &&
            null == this.props.adyenPaymentData &&
            this.maybeOpenCashAppOverlay();
    }
    maybeOpenCashAppOverlay() {
        null == this.props.adyenPaymentData && null != this.props.cashAppPayComponent && e8();
    }
    render() {
        let { className: e, cashAppPayComponent: t } = this.props,
            n = this.props.adyenPaymentData,
            l = n?.paymentMethod?.cashtag ?? "",
            a = null != n && "" !== l;
        return (0, i.jsxs)("div", {
            className: e,
            children: [
                (0, i.jsx)(R.Ay, { type: R.Ay.Types.CASH_APP, size: R.y3.MEDIUM, className: e9.K }),
                a
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(w.D, {
                                  variant: l.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
                                  className: e9.y,
                                  children: L.intl.format(L.t["ze/1yE"], { cashtag: l }),
                              }),
                              (0, i.jsx)(U.E, {
                                  variant: "text-md/medium",
                                  className: e9.y,
                                  children: L.intl.string(L.t.VPOx7N),
                              }),
                          ],
                      })
                    : (0, i.jsx)(U.E, {
                          variant: "text-md/medium",
                          className: e9.y,
                          children: null == t ? L.intl.string(L.t["CgVe/w"]) : L.intl.string(L.t["1MqcjI"]),
                      }),
            ],
        });
    }
}
let tt = c.Ay.connectStores([e7, j.A], () => ({
    cashAppPayComponent: e7.cashAppPayComponent,
    adyenPaymentData: j.A.adyenPaymentData,
}))(te);
var tn = n(73079),
    tl = n(459357),
    ta = n(550238),
    ti = n(869177),
    ts = n(71532),
    tr = n(218075);
let to = [eT.pn.PAYMENT_TYPE],
    tu = [eT.pn.PAYMENT_TYPE, eT.pn.CREDIT_CARD_INFORMATION, eT.pn.ADDRESS],
    tc = [eT.pn.PAYMENT_TYPE, eT.pn.PAYPAL_INFORMATION, eT.pn.ADDRESS],
    td = [eT.pn.PAYMENT_TYPE, eT.pn.VENMO_INFORMATION, eT.pn.ADDRESS],
    tp = [eT.pn.PAYMENT_TYPE, eT.pn.CASH_APP_INFORMATION, eT.pn.ADDRESS],
    tm = [eT.pn.PAYMENT_TYPE, eT.pn.PRZELEWY24_INFORMATION, eT.pn.ADDRESS],
    th = [eT.pn.PAYMENT_TYPE, eT.pn.EPS_INFORMATION, eT.pn.ADDRESS],
    tA = [eT.pn.PAYMENT_TYPE, eT.pn.IDEAL_INFORMATION, eT.pn.ADDRESS],
    tC = [eT.pn.PAYMENT_TYPE, eT.pn.ADDRESS],
    tE = {
        SHARED_ADD_PAYMENT_STEPS: to,
        SHARED_CREDIT_CARD_STEPS: tu,
        SHARED_PAYPAL_STEPS: tc,
        SHARED_VENMO_STEPS: td,
        SHARED_PRZELEWY24_STEPS: tm,
        SHARED_EPS_STEPS: th,
        SHARED_IDEAL_STEPS: tA,
        SHARED_CASH_APP_STEPS: tp,
        SHARED_TYPE_AND_ADDRESS_STEPS: tC,
    },
    ty = {
        SHARED_ADD_PAYMENT_STEPS: [eT.pn.PAYMENT_ELEMENT],
        SHARED_CREDIT_CARD_STEPS: [eT.pn.PAYMENT_ELEMENT, eT.pn.ADDRESS],
        SHARED_PAYPAL_STEPS: [eT.pn.PAYMENT_ELEMENT, eT.pn.PAYPAL_INFORMATION, eT.pn.ADDRESS],
        SHARED_VENMO_STEPS: [eT.pn.PAYMENT_ELEMENT, eT.pn.VENMO_INFORMATION, eT.pn.ADDRESS],
        SHARED_CASH_APP_STEPS: [eT.pn.PAYMENT_ELEMENT, eT.pn.CASH_APP_INFORMATION, eT.pn.ADDRESS],
        SHARED_PRZELEWY24_STEPS: [eT.pn.PAYMENT_ELEMENT, eT.pn.PRZELEWY24_INFORMATION, eT.pn.ADDRESS],
        SHARED_EPS_STEPS: [eT.pn.PAYMENT_ELEMENT, eT.pn.EPS_INFORMATION, eT.pn.ADDRESS],
        SHARED_IDEAL_STEPS: [eT.pn.PAYMENT_ELEMENT, eT.pn.ADDRESS],
        SHARED_TYPE_AND_ADDRESS_STEPS: [eT.pn.PAYMENT_ELEMENT, eT.pn.ADDRESS],
    };
var tP = n(801753);
function tS(e) {
    return () => (null != j.A.error && (0, M.ET)(), e());
}
function t_(e) {
    let { onPrimary: t, onBack: n, ...l } = e,
        a = t;
    null != t && (a = tS(t));
    let s = n;
    return null != n && (s = tS(n)), (0, i.jsx)(eN.Ay, { ...l, onPrimary: a, onBack: s });
}
function tT(e) {
    let { paymentSourceTypeRestrictions: t } = e,
        n = null != t && t.length > 0 ? tr.fU.ADD_NEW_PAYMENT_METHOD : void 0,
        { enabled: l } = (0, tl.c)({ location: "AddPaymentStep" });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(tr.je, { paymentRestrictionBannerType: n }),
            (0, i.jsx)(tn.A, { ...e }),
            l && (0, i.jsx)(eP.Z4, { className: tP.SO }),
        ],
    });
}
let tf = (e) => {
        let {
                prependSteps: t,
                appendSteps: n,
                analyticsLocation: l,
                isEligibleForTrial: a,
                allowDesktopRedirectPurchase: s,
                onPaymentRequestSourceFailed: r,
                paymentModalArgs: o,
                handleStepChange: u,
                setPaymentMethodSteps: c,
                setPaymentRequestPaymentMethod: d,
                currentStep: p,
                setInfoNotice: m,
                completeSteps: h,
                paymentSourceTypeRestrictions: A,
                CREDIT_CARD_STEPS: C,
                PAYPAL_STEPS: E,
                VENMO_STEPS: P,
                PAYMENT_REQUEST_STEPS: S,
                PRZELEWY24_STEPS: _,
                EPS_STEPS: f,
                IDEAL_STEPS: N,
                CASH_APP_STEPS: x,
                setConnectorPaymentRequestReady: I,
                connectorPaymentRequestRef: g,
            } = e,
            { contextMetadata: v, activitySessionId: b } = (0, e_.P5)(),
            { setBillingAddressState: R } = o,
            O = (e, l) => {
                switch (e) {
                    case eA.he.CARD:
                        s ? u(eT.pn.AWAITING_BROWSER_CHECKOUT) : (c(C), u(eT.pn.CREDIT_CARD_INFORMATION));
                        break;
                    case eA.he.PAYPAL:
                        c(E), u(eT.pn.PAYPAL_INFORMATION);
                        break;
                    case eA.he.VENMO:
                        c(P), u(eT.pn.VENMO_INFORMATION);
                        break;
                    case eA.he.PAYMENT_REQUEST:
                        s && "googlePay" === l
                            ? u(eT.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY)
                            : s && "applePay" === l
                              ? u(eT.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY)
                              : (c(S), u(eT.pn.PAYMENT_REQUEST_INFORMATION));
                        break;
                    case eA.he.PRZELEWY24:
                        c(_), u(eT.pn.PRZELEWY24_INFORMATION);
                        break;
                    case eA.he.EPS:
                        c(f), u(eT.pn.EPS_INFORMATION);
                        break;
                    case eA.he.IDEAL:
                        c(N), u(eT.pn.IDEAL_INFORMATION);
                        break;
                    case eA.he.CASH_APP:
                        c(x), u(eT.pn.CASH_APP_INFORMATION);
                        break;
                    case eA.he.GIROPAY:
                    case eA.he.PAYSAFE_CARD:
                    case eA.he.GCASH:
                    case eA.he.GRABPAY_MY:
                    case eA.he.MOMO_WALLET:
                    case eA.he.KAKAOPAY:
                    case eA.he.GOPAY_WALLET:
                    case eA.he.BANCONTACT:
                        c({ steps: [...t, ...tC, ...n], methodType: e }), u(eT.pn.ADDRESS);
                }
                null != j.A.error && (0, M.ET)();
            },
            D = async (e, t) => {
                if (((0, M.mf)(e), null == e)) return void r();
                d(e);
                let { billingAddressInfo: n } = (0, ts.uK)(e),
                    a = (0, ta.Q)(n);
                if (((null == n.name || "" === n.name) && null != t && (n.name = t), R({ isValid: a, info: n }), !a))
                    return void u(eT.pn.ADDRESS);
                try {
                    var i;
                    (i = await (0, y.Tv)(e, n, l)), R((e) => ({ ...e, info: n })), c(S), h(i);
                } catch (e) {
                    r();
                }
            };
        if (p === eT.pn.ATTEMPT_GOOGLE_PAY || p === eT.pn.ATTEMPT_APPLE_PAY) {
            let e = L.intl.string(p === eT.pn.ATTEMPT_APPLE_PAY ? L.t.czhXDv : L.t.Zj2xQ0);
            return (0, i.jsx)(ti.V, {
                onChooseType: O,
                paymentRequestWallet: p === eT.pn.ATTEMPT_APPLE_PAY ? "applePay" : "googlePay",
                onStripePaymentMethodReceived: D,
                onPaymentRequestFailure: () => {
                    O(eA.he.CARD), m(e);
                },
                onValidPaymentRequest: () => I(!0),
                paymentRequestRef: g,
            });
        }
        let w = !(0, T.isDesktop)() || s;
        return (0, i.jsx)(tT, {
            onChooseType: O,
            onStripePaymentMethodReceived: D,
            paymentRequestWallets: w ? ["googlePay", "applePay"] : [],
            isEligibleForTrial: a,
            paymentRequestPaymentContext: { contextMetadata: v, activitySessionId: b },
            paymentSourceTypeRestrictions: A,
        });
    },
    tN = (e) => {
        let {
            onReturn: t,
            shouldUseManaModal: n,
            handleStepChange: l,
            currentStep: a,
            connectorPaymentRequestReady: s,
            showConnectorPaymentRequest: r,
        } = e;
        if (a === eT.pn.ATTEMPT_GOOGLE_PAY || a === eT.pn.ATTEMPT_APPLE_PAY) {
            let e = L.intl.string(a === eT.pn.ATTEMPT_APPLE_PAY ? L.t.WoXvJL : L.t.wnVVr0);
            return (0, i.jsx)(t_, {
                onBack: () => l(eT.pn.PAYMENT_TYPE),
                primaryCTA: eN.Ay.CTAType.CONTINUE,
                primaryText: e,
                onPrimary: () => r(),
                primaryDisabled: !s,
                shouldUseManaModal: n,
            });
        }
        return (0, i.jsx)(t_, { onBack: t, shouldUseManaModal: n });
    };
var tx = n(198970),
    tI = n(546605),
    tg = n(116673),
    tv = n(773669);
let tM = (e) => {
        let t,
            { billingAddressInfo: n, billingError: l, onBillingAddressChange: a, paymentSourceType: r } = e,
            o = null != l && (null == l.code || el(l) === en.ADDRESS),
            u = (0, c.bG)([tv.default], () => tv.default.locale);
        switch (r) {
            case f.hes.GIROPAY:
            case f.hes.PAYSAFE_CARD:
            case f.hes.GCASH:
            case f.hes.GRABPAY_MY:
            case f.hes.MOMO_WALLET:
            case f.hes.KAKAOPAY:
            case f.hes.GOPAY_WALLET:
            case f.hes.BANCONTACT:
                t = "en-US" === u ? tx.Ay.Layouts.MODAL_US_WITH_NAME : tx.Ay.Layouts.MODAL_INTL_WITH_NAME;
                break;
            case f.hes.VENMO:
            case f.hes.CASH_APP:
                t = tx.Ay.Layouts.MODAL_US_WITH_NAME;
                break;
            default:
                t = "en-US" === u ? tx.Ay.Layouts.MODAL_US : tx.Ay.Layouts.MODAL_INTL;
        }
        let d = (0, tI.vg)("AddressStep"),
            p = (0, tg.z)();
        return (
            0 === n.country.length && null != p && p.length > 0 && (n.country = p[0]),
            (0, i.jsxs)(s.Fragment, {
                children: [
                    o
                        ? (0, i.jsx)("div", {
                              className: ea.QK,
                              children: (0, i.jsx)(A.w, { type: "critical", children: L.intl.string(L.t.vZ8y7l) }),
                          })
                        : null,
                    (0, i.jsx)(tx.Ay, {
                        className: ea.__invalid_formItem,
                        onBillingAddressChange: a,
                        error: l,
                        layout: t,
                        allowedBillingAddressCountries: p,
                        ...n,
                    }),
                    d && null != p && p.length > 0
                        ? (0, i.jsx)(A.w, { type: "info", children: L.intl.string(L.t.Pg2hU0) })
                        : null,
                ],
            })
        );
    },
    tb = new eS.A("AddPaymentAddressStep.tsx");
function tR(e) {
    let { billingAddressInfo: t, onBillingAddressChange: n, paymentSourceType: l } = e,
        a = (0, c.bG)([j.A], () => j.A.error);
    return (0, i.jsx)(tM, { billingAddressInfo: t, billingError: a, onBillingAddressChange: n, paymentSourceType: l });
}
function tj(e) {
    let { paymentModalArgs: t, shouldUsePaymentElement: n, paymentSourceType: l } = e,
        { billingAddressState: a, setBillingAddressState: s } = t;
    return n
        ? null
        : (0, i.jsx)(tR, {
              billingAddressInfo: a.info,
              onBillingAddressChange: (e, t) => {
                  s({ info: { ...a.info, ...e }, isValid: t });
              },
              paymentSourceType: l,
          });
}
function tL(e) {
    let {
            paymentModalArgs: t,
            shouldUseManaModal: n,
            analyticsLocation: l,
            overwriteSubscriptionPaymentSource: a,
            handleStepChange: s,
            onPaymentRequestSourceFailed: r,
            paymentRequestPaymentMethod: o,
            completeSteps: c,
            paymentMethodSteps: d,
            paymentElementSelectedType: p,
            returnToPaymentElementStep: m,
            combinedStripeElementsRef: h,
            lastConfirmedSetupIntentRef: A,
            shouldUsePaymentElement: C,
        } = e,
        { stripe: E } = (0, e_.P5)(),
        {
            tokenState: P,
            isSubmittingCurrentStep: S,
            billingAddressState: _,
            setIsSubmittingCurrentStep: T,
            hasRedirectURL: f,
            setHasRedirectURL: N,
            braintreeNonce: x,
            adyenPaymentData: I,
            isAuthenticating: g,
            epsBankState: v,
            p24BankState: M,
        } = t,
        b = async () => {
            T(!0);
            let e = C ? p : d.methodType,
                t = [
                    E,
                    h.current,
                    { billingAddress: _.info, paymentSourceType: e ?? eA.he.UNKNOWN, lastConfirmedSetupIntentRef: A },
                    l,
                ];
            switch (e) {
                case eA.he.PAYMENT_REQUEST:
                    if (C) {
                        try {
                            let e = await (0, y.im)(...t);
                            c(e);
                        } catch (e) {
                            T(!1), tb.warn("Error confirming Payment Element source for Payment Request: ", e);
                        }
                        break;
                    }
                    if (null == o) throw (r(), (0, y.i0)("Missing paymentRequestPaymentMethod"));
                    c(await (0, y.Tv)(o, _.info, l));
                    break;
                case eA.he.CARD:
                    try {
                        let e = C ? await (0, y.im)(...t) : await (0, y.u6)(E, P.token, _.info, l);
                        c(e);
                    } catch {}
                    break;
                case eA.he.VENMO:
                case eA.he.PAYPAL:
                    try {
                        u()(null != x, "Missing braintreeNonce");
                        let e = await (0, y.u1)(x, _.info, l);
                        c(e);
                    } catch {}
                    break;
                case eA.he.EPS:
                    try {
                        let e = await (0, y.Z9)(E, v, _.info, l);
                        c(e);
                    } catch (e) {
                        tb.warn(e);
                    }
                    break;
                case eA.he.IDEAL:
                    try {
                        let e = C ? await (0, y.im)(...t) : await (0, y.EB)(E, _.info, l);
                        c(e);
                    } catch (e) {
                        tb.warn(e);
                    }
                    break;
                case eA.he.PRZELEWY24:
                    try {
                        if (void 0 === M) throw (0, y.i0)("Bank required for Przelewy24");
                        let e = await (0, y.TD)(E, { p24Bank: M }, _.info, l);
                        c(e);
                    } catch {}
                    break;
                case eA.he.PAYSAFE_CARD:
                case eA.he.GRABPAY_MY:
                    try {
                        let t = await (0, y.A8)(_.info, e, l);
                        c(t);
                    } catch {}
                    break;
                case eA.he.GCASH:
                case eA.he.MOMO_WALLET:
                case eA.he.KAKAOPAY:
                case eA.he.GOPAY_WALLET:
                    try {
                        let { redirectConfirmation: t } = await (0, y.$M)(_.info, e, l);
                        N(t);
                    } catch {}
                    break;
                case eA.he.GIROPAY:
                case eA.he.BANCONTACT:
                    try {
                        let t = await (0, y.bw)(E, _.info, e, l);
                        c(t);
                    } catch {}
                    break;
                case eA.he.CASH_APP:
                    try {
                        u()(null != I, "Missing adyenPaymentData");
                        let { paymentSource: t } = await (0, y.$M)(_.info, e, l, I, a);
                        u()(null != t, "Cash App Pay Payment Source missing"), c(t);
                    } catch {}
                    break;
                default:
                    throw Error("unknown step not handled");
            }
            f || T(!1);
        },
        R = d.methodType,
        { backStep: j } = C
            ? { backStep: eT.pn.PAYMENT_ELEMENT }
            : ((e) => {
                  switch (e) {
                      case eA.he.CARD:
                          return { backStep: eT.pn.CREDIT_CARD_INFORMATION };
                      case eA.he.PAYPAL:
                          return { backStep: eT.pn.PAYPAL_INFORMATION };
                      case eA.he.VENMO:
                          return { backStep: eT.pn.VENMO_INFORMATION };
                      case eA.he.GIROPAY:
                      case eA.he.PAYSAFE_CARD:
                      case eA.he.GCASH:
                      case eA.he.GRABPAY_MY:
                      case eA.he.MOMO_WALLET:
                      case eA.he.KAKAOPAY:
                      case eA.he.GOPAY_WALLET:
                      case eA.he.BANCONTACT:
                          return { backStep: eT.pn.PAYMENT_TYPE };
                      case eA.he.EPS:
                          return { backStep: eT.pn.EPS_INFORMATION };
                      case eA.he.IDEAL:
                          return { backStep: eT.pn.IDEAL_INFORMATION };
                      case eA.he.PRZELEWY24:
                          return { backStep: eT.pn.PRZELEWY24_INFORMATION };
                      case eA.he.CASH_APP:
                          return { backStep: eT.pn.CASH_APP_INFORMATION };
                      default:
                          return { backStep: eT.pn.PAYMENT_TYPE };
                  }
              })(R),
        O = C ? () => m(void 0) : () => s(j);
    return (0, i.jsx)(t_, {
        onBack: O,
        primaryCTA: eN.Ay.CTAType.CONTINUE,
        primaryText: L.intl.string(L.t.PDTjLN),
        primarySubmitting: S,
        primaryDisabled: !_.isValid || g,
        onPrimary: b,
        shouldUseManaModal: n,
    });
}
let tO = new eS.A("PaymentElementStepFooter.tsx"),
    tD = (e) => {
        let { stripe: t } = (0, e_.P5)(),
            {
                shouldUseManaModal: n,
                paymentModalArgs: l,
                handleStepChange: a,
                setPaymentMethodSteps: r,
                onBack: o,
                primarySubmitting: u,
                primaryDisabled: c,
                PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: d,
            } = e,
            { setIsSubmittingCurrentStep: p, setBillingAddressState: m } = l,
            { paymentElementSelectedType: h, combinedStripeElementsRef: A, remountAddressElement: C } = e,
            E = s.useCallback(async () => {
                p(!0);
                try {
                    if (null == h || !(0, eu.PE)(h)) throw (0, y.ne)("Valid Payment Element source type not found", !0);
                    let { steps: e, methodType: n } = d[h];
                    if ((r({ steps: e, methodType: n === eA.he.UNKNOWN ? h : n }), h === eA.he.PAYMENT_REQUEST)) {
                        let e = A.current,
                            { paymentMethod: n } = await (0, y.YB)(t, e),
                            { billingAddressInfo: l } = (0, ts.uK)(n);
                        m((e) => ({ ...e, info: l })), C(), a(eT.pn.ADDRESS);
                    } else {
                        let e = (0, eu.eI)(h);
                        null != e ? a(e) : a(eT.pn.ADDRESS);
                    }
                } catch (e) {
                    tO.error("Error on submitting Payment Element step: ", e.message ?? JSON.stringify(e));
                } finally {
                    p(!1);
                }
            }, [h, d, A, C, a, t, r, p, m]);
        return (0, i.jsx)(t_, {
            onBack: o,
            primaryCTA: eN.Ay.CTAType.CONTINUE,
            primaryType: "submit",
            primaryText: L.intl.string(L.t.PDTjLN),
            primarySubmitting: u,
            primaryDisabled: c,
            onPrimary: E,
            shouldUseManaModal: n,
        });
    };
var tw = n(691189);
let tU = new eS.A("AddPaymentStep.tsx"),
    tk = { name: "", cardNumber: "", expirationDate: "", cvc: "" },
    tY = { email: "", name: "", country: "", line1: "", line2: "", city: "", postalCode: "", state: "" };
function tG(e) {
    let { onCardInfoChange: t } = e,
        n = (0, c.bG)([j.A], () => j.A.error);
    return (0, i.jsx)(ei, { billingError: n, onCardInfoChange: t });
}
function tF() {
    return (0, i.jsx)(D, {});
}
function tB() {
    return (0, i.jsx)(G, {});
}
function tW() {
    return (0, i.jsx)(tt, {});
}
function tH() {
    let e = (0, c.bG)([eK.A], () => eK.A.isBusy),
        t = (0, c.bG)([j.A], () => j.A.stripePaymentMethod);
    return (0, i.jsx)(es, { stripePaymentMethod: t, submitting: e });
}
function tV() {
    return (0, i.jsx)(F.N, {});
}
function tK(e) {
    let t,
        n,
        {
            paymentModalArgs: l,
            initialStep: a,
            prependSteps: o,
            appendSteps: u,
            onReturn: E,
            onComplete: S,
            onStepChange: _,
            breadcrumpSteps: T,
            currentBreadcrumpStep: N,
            header: x,
            analyticsData: v,
            analyticsLocation: M,
            hideBreadcrumbs: b = !1,
            usePaymentModalStep: R = !1,
            isEligibleForTrial: O = !1,
            allowDesktopRedirectPurchase: D = !1,
            toastContent: w,
            continueSessionToInitialStep: U,
            overwriteSubscriptionPaymentSource: k = !1,
            shouldUseManaModal: Y = !0,
        } = e,
        { stripe: G, contextMetadata: F, activitySessionId: B, paymentElementsEnabled: W } = (0, e_.P5)(),
        H = (0, eI.l)(),
        V = s.useMemo(() => {
            let e = a === eT.pn.PAYMENT_TYPE || a === eT.pn.PAYMENT_ELEMENT;
            return W && e ? (D ? eT.pn.AWAITING_BROWSER_CHECKOUT : eT.pn.PAYMENT_ELEMENT) : a;
        }, [W, a, D]),
        K = s.useMemo(() => (0, eX.Gn)(), []),
        {
            CREDIT_CARD_STEPS: Z,
            PAYPAL_STEPS: q,
            IDEAL_STEPS: z,
            PAYMENT_REQUEST_STEPS: $,
            VENMO_STEPS: J,
            ADD_PAYMENT_STEPS: X,
            PRZELEWY24_STEPS: Q,
            EPS_STEPS: ee,
            CASH_APP_STEPS: et,
            PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: en,
        } = ((e) => {
            let { prependSteps: t, appendSteps: n, paymentElementsEnabled: l } = e,
                [a, i, r, o, u, c, d, p, m, h] = (0, s.useMemo)(
                    () =>
                        ((e, t) => {
                            let { prependSteps: n, appendSteps: l, paymentElementsEnabled: a } = t;
                            return e.map((e) => {
                                let { sharedStepsKey: t, methodType: i } = e;
                                return {
                                    steps: [
                                        ...n,
                                        ...(a && (null == i || i === eA.he.UNKNOWN || (0, eu.PE)(i)) ? ty[t] : tE[t]),
                                        ...l,
                                    ],
                                    methodType: i,
                                };
                            });
                        })(
                            [
                                { sharedStepsKey: "SHARED_TYPE_AND_ADDRESS_STEPS", methodType: eA.he.UNKNOWN },
                                { sharedStepsKey: "SHARED_ADD_PAYMENT_STEPS", methodType: eA.he.PAYMENT_REQUEST },
                                { sharedStepsKey: "SHARED_ADD_PAYMENT_STEPS" },
                                { sharedStepsKey: "SHARED_CREDIT_CARD_STEPS", methodType: eA.he.CARD },
                                { sharedStepsKey: "SHARED_PAYPAL_STEPS", methodType: eA.he.PAYPAL },
                                { sharedStepsKey: "SHARED_IDEAL_STEPS", methodType: eA.he.IDEAL },
                                { sharedStepsKey: "SHARED_VENMO_STEPS", methodType: eA.he.VENMO },
                                { sharedStepsKey: "SHARED_PRZELEWY24_STEPS", methodType: eA.he.PRZELEWY24 },
                                { sharedStepsKey: "SHARED_EPS_STEPS", methodType: eA.he.EPS },
                                { sharedStepsKey: "SHARED_CASH_APP_STEPS", methodType: eA.he.CASH_APP },
                            ],
                            { prependSteps: t, appendSteps: n, paymentElementsEnabled: l },
                        ),
                    [t, n, l],
                ),
                A = (0, s.useMemo)(
                    () => ({
                        [eA.he.CARD]: o,
                        [eA.he.PAYPAL]: u,
                        [eA.he.PAYMENT_REQUEST]: i,
                        [eA.he.VENMO]: d,
                        [eA.he.CASH_APP]: h,
                        [eA.he.IDEAL]: c,
                        [eA.he.PRZELEWY24]: p,
                        [eA.he.EPS]: m,
                        [eA.he.BANCONTACT]: a,
                        [eA.he.GOPAY_WALLET]: a,
                        [eA.he.KAKAOPAY]: a,
                        [eA.he.GCASH]: a,
                        [eA.he.PAYSAFE_CARD]: a,
                        [eA.he.GRABPAY_MY]: a,
                        [eA.he.MOMO_WALLET]: a,
                    }),
                    [a, o, u, d, i, c, h, p, m],
                );
            return {
                DEFAULT_PAYMENT_ELEMENT_STEPS: a,
                CREDIT_CARD_STEPS: o,
                PAYPAL_STEPS: u,
                IDEAL_STEPS: c,
                PAYMENT_REQUEST_STEPS: i,
                VENMO_STEPS: d,
                ADD_PAYMENT_STEPS: r,
                PRZELEWY24_STEPS: p,
                EPS_STEPS: m,
                CASH_APP_STEPS: h,
                PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: A,
            };
        })({ prependSteps: o, appendSteps: u, paymentElementsEnabled: W }),
        [el, ea] = s.useState(V),
        [ei, es] = s.useState(null),
        [er, eo] = s.useState(
            (function (e) {
                switch (e) {
                    case eT.pn.CREDIT_CARD_INFORMATION:
                        return Z;
                    case eT.pn.CASH_APP_INFORMATION:
                        return et;
                    default:
                        return { steps: [eT.pn.ADD_PAYMENT_STEPS] };
                }
            })(V),
        );
    s.useEffect(() => {
        (0, y.IV)();
    }, []);
    let ec = (0, c.bG)([j.A], () => j.A.redirectedPaymentSourceId),
        ep = (0, c.bG)([e7], () => e7.cashAppPayComponent),
        em = { completeSteps: e5, setIsSubmittingCurrentStep: l.setIsSubmittingCurrentStep },
        eh = s.useRef(em);
    s.useEffect(() => {
        eh.current = em;
    }),
        s.useEffect(() => {
            let { completeSteps: e, setIsSubmittingCurrentStep: t } = eh.current;
            (async () => {
                if (null == ec) return;
                await (0, y.$o)();
                let n = eq.A.getPaymentSource(ec);
                null != n && (e(n), t(!1), j.A.clearRedirectedPaymentSourceId());
            })();
        }, [ec]);
    let eC = s.useCallback(
            function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                es(null), ea(e), t && _({ currentStep: el, toStep: e });
            },
            [el, _],
        ),
        eS = s.useCallback(
            (e) => {
                eJ.default.track(f.HAw.PAYMENT_FLOW_ADD_SOURCE_COMPLETED, {
                    load_id: F.loadId,
                    analytics_location: M,
                    payment_source_id: e.id,
                    payment_source_type: e.type,
                    payment_source_country: e.paymentMethodCountry,
                });
            },
            [F.loadId, M],
        ),
        eg = (0, c.bG)([j.A], () => j.A.error),
        ev = s.useRef(eg);
    s.useEffect(() => {
        let e = ev.current;
        (ev.current = eg),
            null != eg &&
                eg !== e &&
                eJ.default.track(f.HAw.PAYMENT_FLOW_ADD_SOURCE_ERROR, {
                    load_id: F.loadId,
                    analytics_location: M,
                    payment_source_type: er.methodType,
                    error_code: eg.code,
                    error_message: eg.message,
                });
    }, [eg, F.loadId, M, er.methodType]);
    let eM = s.useCallback(
            (e) => {
                eS(e),
                    (0, d.P0)(
                        (0, p.o)(void 0 !== w ? w : L.intl.string(L.t["VJPg+l"]), m.Ck.SUCCESS, {
                            position: m.xJ.BOTTOM,
                        }),
                    ),
                    S(el, e),
                    eC(V, !1);
            },
            [eC, V, el, S, w, eS],
        ),
        [eb, eR] = s.useState(null),
        {
            setPaymentSourceId: ej,
            creditCardState: eL,
            setCreditCardState: eO,
            setTokenState: eD,
            isSubmittingCurrentStep: ew,
            billingAddressState: eU,
            setBillingAddressState: ek,
            setIsSubmittingCurrentStep: eY,
            braintreeEmail: eG,
            braintreeNonce: eF,
            venmoUsername: eB,
            adyenPaymentData: eK,
            epsBankState: eZ,
            setEpsBankState: ez,
            p24BankState: eQ,
            setP24BankState: e2,
            selectedSkuId: e3,
        } = l,
        e1 = e3 ?? "",
        e4 = (0, c.bG)([e$.A], () => e$.A.get(e1), [e1]),
        e6 = e4?.eligiblePaymentGateways?.map((e) => e.valueOf());
    function e5(e) {
        ej(e.id), eM(e);
    }
    let e9 = () => {
            eo(X), eC(eT.pn.PAYMENT_TYPE);
        },
        te = (0, ey.wD)({
            step: el,
            continueSessionToInitialStep: U,
            paymentElementsEnabled: W,
            handleStepChange: eC,
            logger: tU,
            shouldLogOnChangeEvents: K || !1,
            onBillingAddressChange: (e, t) => {
                ek({ info: { ...eU.info, ...e }, isValid: t });
            },
        }),
        {
            shouldRenderPaymentElement: tt,
            paymentElementReady: tn,
            paymentElementSelectedType: tl,
            returnToPaymentElementStep: ta,
            onBackFromPaymentElement: ti,
            combinedStripeElementsRef: ts,
            stripePaymentElementProps: tr,
            stripeAddressElementProps: to,
            remountAddressElement: tu,
            addressElementKey: tc,
        } = te,
        td = s.useCallback(() => {
            eC(eT.pn.ADDRESS), W && ey.Ky.includes(el) && tu();
        }, [eC, W, tu, el]),
        tp = s.useCallback(
            (e) => {
                W && null != tl && (0, eu.PE)(e) ? ta(e) : eC(eT.pn.PAYMENT_TYPE);
            },
            [W, tl, ta, eC],
        ),
        tm = R ? (0, i.jsx)(eV.A, { className: tP._8 }) : null,
        th = (() => {
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
        case eT.pn.ATTEMPT_GOOGLE_PAY:
        case eT.pn.ATTEMPT_APPLE_PAY:
        case eT.pn.PAYMENT_TYPE:
            (t = (0, i.jsx)(tf, {
                prependSteps: o,
                appendSteps: u,
                analyticsLocation: M,
                isEligibleForTrial: O,
                allowDesktopRedirectPurchase: D,
                onPaymentRequestSourceFailed: e9,
                paymentModalArgs: l,
                handleStepChange: eC,
                setPaymentMethodSteps: eo,
                setPaymentRequestPaymentMethod: eR,
                currentStep: el,
                setInfoNotice: es,
                completeSteps: e5,
                paymentSourceTypeRestrictions: e6,
                CREDIT_CARD_STEPS: Z,
                PAYPAL_STEPS: q,
                VENMO_STEPS: J,
                PAYMENT_REQUEST_STEPS: $,
                PRZELEWY24_STEPS: Q,
                EPS_STEPS: ee,
                IDEAL_STEPS: z,
                CASH_APP_STEPS: et,
                ...th,
            })),
                (n = (0, i.jsx)(tN, {
                    shouldUseManaModal: Y,
                    onReturn: E,
                    handleStepChange: eC,
                    currentStep: el,
                    ...th,
                }));
            break;
        case eT.pn.PAYMENT_ELEMENT:
            if (!W) throw (0, y.ne)("Payment Elements not enabled, invalid step", !0);
            (t = null),
                (n = (0, i.jsx)(tD, {
                    handleStepChange: eC,
                    shouldUseManaModal: Y,
                    setPaymentMethodSteps: eo,
                    primarySubmitting: ew,
                    primaryDisabled: !tn,
                    onBack: () => {
                        ti(), E?.();
                    },
                    paymentModalArgs: l,
                    PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: en,
                    ...te,
                }));
            break;
        case eT.pn.CREDIT_CARD_INFORMATION:
            let tA = async (e) => {
                eY(!0);
                try {
                    let t = await (0, y.YJ)(G, e);
                    eD({ token: t }), eC(eT.pn.ADDRESS);
                } catch (e) {
                    tU.error(e.message ?? JSON.stringify(e));
                } finally {
                    eY(!1);
                }
            };
            t = (0, i.jsx)(tG, {
                onCardInfoChange: (e, t) => {
                    eO({ info: e, isValid: t }), ek((t) => ({ ...t, info: { ...t.info, name: e.name } }));
                },
            });
            let tC = !eL.isValid,
                tS = () => {
                    eC(eT.pn.PAYMENT_TYPE);
                };
            n = (0, i.jsx)(r.ElementsConsumer, {
                children: (e) => {
                    let { elements: t } = e;
                    return (0, i.jsx)(t_, {
                        onBack: tS,
                        primaryCTA: eN.Ay.CTAType.CONTINUE,
                        primaryType: "submit",
                        primaryText: L.intl.string(L.t.PDTjLN),
                        primarySubmitting: ew,
                        primaryDisabled: tC,
                        onPrimary: () => tA(t),
                        shouldUseManaModal: Y,
                    });
                },
            });
            break;
        case eT.pn.AWAITING_BROWSER_CHECKOUT:
        case eT.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
        case eT.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
            let tT = () => {
                eo(Z), eC(W ? eT.pn.PAYMENT_ELEMENT : eT.pn.CREDIT_CARD_INFORMATION);
            };
            (t = (0, i.jsx)(eW, { step: el, onPurchaseComplete: () => S(el), onHandoffFailure: tT })),
                (n = (0, i.jsx)(eH, {
                    onPrimaryClick: tT,
                    onBackClick: () => {
                        W ? (ti(), E?.()) : (eo(X), eC(eT.pn.PAYMENT_TYPE));
                    },
                }));
            break;
        case eT.pn.EPS_INFORMATION:
            (t = (0, i.jsx)(eE, {
                type: eA.he.EPS,
                onAccountHolderNameChange: (e) => ek({ info: { ...eU.info, name: e }, isValid: eU.isValid }),
                onEPSBankChange: (e) => ez(e),
                epsBankValue: eZ,
                billingAddressInfo: eU.info,
            })),
                (n = (0, i.jsx)(t_, {
                    onBack: () => tp(eA.he.EPS),
                    primaryCTA: eN.Ay.CTAType.CONTINUE,
                    primaryText: L.intl.string(L.t.PDTjLN),
                    primaryDisabled: void 0 === eZ || "" === eZ || "" === eU.info.name,
                    onPrimary: () => td(),
                    shouldUseManaModal: Y,
                }));
            break;
        case eT.pn.IDEAL_INFORMATION:
            (t = (0, i.jsx)(ed, {
                type: eA.he.IDEAL,
                onAccountHolderNameChange: (e) => ek({ info: { ...eU.info, name: e }, isValid: eU.isValid }),
                billingAddressInfo: eU.info,
            })),
                (n = (0, i.jsx)(t_, {
                    onBack: () => eC(eT.pn.PAYMENT_TYPE),
                    primaryCTA: eN.Ay.CTAType.CONTINUE,
                    primaryText: L.intl.string(L.t.PDTjLN),
                    primaryDisabled: "" === eU.info.name,
                    onPrimary: () => td(),
                    shouldUseManaModal: Y,
                }));
            break;
        case eT.pn.PRZELEWY24_INFORMATION:
            (t = (0, i.jsx)(eE, {
                type: eA.he.PRZELEWY24,
                onNameChange: (e) => ek({ info: { ...eU.info, name: e }, isValid: eU.isValid }),
                onEmailChange: (e) => ek({ info: { ...eU.info, email: e }, isValid: eU.isValid }),
                onP24BankChange: (e) => {
                    e2(e);
                },
                p24BankValue: eQ,
                billingAddressInfo: eU.info,
            })),
                (n = (0, i.jsx)(t_, {
                    onBack: () => tp(eA.he.PRZELEWY24),
                    primaryCTA: eN.Ay.CTAType.CONTINUE,
                    primaryText: L.intl.string(L.t.PDTjLN),
                    primaryDisabled:
                        void 0 === eU.info.name ||
                        "" === eU.info.name ||
                        void 0 === eU.info.email ||
                        "" === eU.info.email ||
                        void 0 === eQ ||
                        "" === eQ,
                    onPrimary: () => td(),
                    shouldUseManaModal: Y,
                }));
            break;
        case eT.pn.PAYPAL_INFORMATION:
            let tx = 0 !== eG.length && null != eF;
            (t = (0, i.jsx)(tF, {})),
                (n = (0, i.jsx)(t_, {
                    onBack: () => tp(eA.he.PAYPAL),
                    primaryCTA: eN.Ay.CTAType.CONTINUE,
                    primaryText: tx ? L.intl.string(L.t.PDTjLN) : L.intl.string(L.t.Djzd7L),
                    onPrimary: () => {
                        let e;
                        return tx
                            ? td()
                            : void (null == (e = P.A.getLastURL())
                                  ? I()
                                  : (C.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_START" }), window.open(e)));
                    },
                    shouldUseManaModal: Y,
                }));
            break;
        case eT.pn.VENMO_INFORMATION:
            let tI = 0 !== eB.length && null != eF;
            (t = (0, i.jsx)(tB, {})),
                (n = (0, i.jsx)(t_, {
                    onBack: () => tp(eA.he.VENMO),
                    primaryCTA: eN.Ay.CTAType.CONTINUE,
                    primaryText: tI ? L.intl.string(L.t.PDTjLN) : L.intl.string(L.t["4KoTLM"]),
                    onPrimary: () => (tI ? td() : void g()),
                    shouldUseManaModal: Y,
                }));
            break;
        case eT.pn.PAYMENT_REQUEST_INFORMATION:
            (t = (0, i.jsx)(tH, {})),
                (n = (0, i.jsx)(t_, { onBack: () => eC(eT.pn.PAYMENT_TYPE), shouldUseManaModal: Y }));
            break;
        case eT.pn.CASH_APP_INFORMATION:
            let tg = null != eK;
            (t = (0, i.jsx)(tW, {})),
                (n = (0, i.jsx)(t_, {
                    onBack: () => tp(eA.he.CASH_APP),
                    primaryCTA: eN.Ay.CTAType.CONTINUE,
                    primaryText: tg ? L.intl.string(L.t.PDTjLN) : L.intl.string(L.t["9ALP8w"]),
                    onPrimary: () => (tg ? td() : e8()),
                    primaryDisabled: null == ep,
                    shouldUseManaModal: Y,
                }));
            break;
        case eT.pn.ADDRESS:
            let tv = W && null != tl;
            (t = (0, i.jsx)(tj, {
                paymentModalArgs: l,
                paymentSourceType: er.methodType ?? eA.he.CARD,
                shouldUsePaymentElement: tv,
            })),
                (n = (0, i.jsx)(tL, {
                    paymentModalArgs: l,
                    shouldUseManaModal: Y,
                    analyticsLocation: M,
                    overwriteSubscriptionPaymentSource: k,
                    handleStepChange: eC,
                    onPaymentRequestSourceFailed: e9,
                    paymentRequestPaymentMethod: eb,
                    completeSteps: e5,
                    paymentMethodSteps: er,
                    shouldUsePaymentElement: tv,
                    ...te,
                }));
            break;
        case eT.pn.AWAITING_AUTHENTICATION:
            t = (0, i.jsx)(tV, {});
            break;
        default:
            throw Error(`Unexpected step: ${el}`);
    }
    let tM = W && tt,
        tb = tM ? "combined_stripe_elements" : void 0,
        tR = (0, i.jsxs)(h.Y, {
            className: tw.C9,
            staticClassName: tw.a2,
            animatedNodeClassName: tw.L2,
            fillParent: !0,
            overrideKey: tb,
            step: el,
            steps: er.steps,
            sideMargin: 20,
            children: [
                null != ei &&
                    (0, i.jsx)("div", { className: tP.Ns, children: (0, i.jsx)(A.w, { type: "info", children: ei }) }),
                tM &&
                    (0, i.jsx)(ey.e4, {
                        step: el,
                        analyticsContext:
                            null != v ? { activitySessionId: B, contextMetadata: F, analyticsData: v } : void 0,
                        paymentElementSelectedType: tl,
                        elementsRef: ts,
                        stripePaymentElementProps: tr,
                        stripeAddressElementProps: to,
                        addressElementKey: tc,
                        billingAddressInfo: eU.info,
                        onSetupError: () => {
                            ti(), eC(eT.pn.PAYMENT_TYPE);
                        },
                        paymentElementFooter: (0, i.jsx)(eP.Z4, {
                            className: tP.SO,
                            stackingBehavior: "stack",
                            onComplete: () => {
                                setTimeout(() => H(eT.pn.REVIEW), 0);
                            },
                        }),
                    }),
                t,
            ],
        }),
        tO = el === eT.pn.PAYMENT_TYPE && 0 === o.length ? null : n;
    return R
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  O && (0, i.jsx)(ef.A, { className: tP.At, isEligibleForTrial: O }),
                  (0, i.jsxs)(ex.dZ, { children: [tm, tR] }),
                  (0, i.jsx)(ex.UX, { children: tO }),
              ],
          })
        : (0, i.jsx)(e0.A, {
              shouldUseManaModal: Y,
              steps: T ?? er.steps,
              currentStep: N ?? el,
              overrideKey: tb,
              paymentError: l.paymentError,
              header: x,
              hideBreadcrumbs: b,
              body: tR,
              footer: tO,
          });
}
function tZ(e) {
    let {
            defaultPaymentSourceId: t,
            paymentSources: n,
            hasFetchedPaymentSources: l,
        } = (0, c.cf)([eq.A], () => ({
            defaultPaymentSourceId: void 0 !== e ? e : eq.A.defaultPaymentSourceId,
            paymentSources: eq.A.paymentSources,
            hasFetchedPaymentSources: eq.A.hasFetchedPaymentSources,
        })),
        a = (0, c.bG)([e7], () => e7.cashAppPayComponent),
        i = (0, c.bG)([eo.A], () => eo.A.data?.allowed_payment_source_types ?? null);
    (0, er.Ay)(() => {
        (0, _.j)().then((e) => {
            e.client
                .create({ authorization: f.Gg3.BRAINTREE.KEY })
                .then((e) => {
                    new Promise((e, t) => {
                        let n = Date.now(),
                            l = () => {
                                Date.now() - n >= 5e3
                                    ? t(Error("Timeout waiting for Braintree client to be initialized in store"))
                                    : null != P.A.getClient()
                                      ? e()
                                      : setTimeout(l, 1e3);
                            },
                            a = () => {
                                C.h.unsubscribe("BRAINTREE_CREATE_CLIENT_SUCCESS", a), setTimeout(l, 0);
                            };
                        C.h.subscribe("BRAINTREE_CREATE_CLIENT_SUCCESS", a);
                    })
                        .then(() => {
                            x(), N();
                        })
                        .catch((e) => {
                            S.pM(e);
                        }),
                        C.h.dispatch({ type: "BRAINTREE_CREATE_CLIENT_SUCCESS", client: e });
                })
                .catch(() => C.h.dispatch({ type: "BRAINTREE_CREATE_CLIENT_FAIL" }));
        }),
            l || (0, y.$o)();
    }),
        s.useEffect(() => {
            null == a && null != i && i.includes(eA.he.CASH_APP) && e5();
        }, [i, a]);
    let [r, o] = s.useState(t);
    null != t && null == r && o(t);
    let [u, d] = s.useState(() => ({ info: tk, isValid: !1 })),
        [p, m] = s.useState(() => ({ info: tY, isValid: !1 })),
        [h, A] = s.useState(""),
        [E, T] = s.useState(""),
        [I, g] = s.useState(() => ({ token: null })),
        [v, b, R, L, O] = (0, c.yK)([j.A], () => [
            j.A.braintreeEmail,
            j.A.braintreeNonce,
            j.A.error,
            j.A.venmoUsername,
            j.A.adyenPaymentData,
        ]),
        [D, w] = (0, c.yK)([eZ.A], () => [eZ.A.error, eZ.A.isAwaitingAuthentication]);
    s.useEffect(() => {
        let e = (e) => {
            let { billingAddress: t } = e;
            m({ info: t, isValid: t.country.length > 0 });
        };
        return (
            C.h.subscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e),
            () => {
                C.h.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e), (0, M.ET)();
            }
        );
    }, []);
    let [U, k] = s.useState(!1),
        [Y, G] = s.useState(!1),
        [F, B] = s.useState(null),
        W = s.useRef(null),
        H = (0, c.bG)([eZ.A], () => eZ.A.isAwaitingAuthentication),
        [V, K] = (0, c.yK)([ez.A], () => [ez.A.purchaseTokenAuthState, ez.A.purchaseTokenHash]);
    return (
        s.useEffect(() => {
            null != F && null != W.current && W.current.scrollIntoView({ behavior: "smooth" });
        }, [F]),
        {
            paymentSources: n,
            paymentSourceId: r,
            hasFetchedPaymentSources: l,
            setPaymentSourceId: o,
            creditCardState: u,
            setCreditCardState: d,
            tokenState: I,
            setTokenState: g,
            billingAddressState: p,
            setBillingAddressState: m,
            isSubmittingCurrentStep: U,
            setIsSubmittingCurrentStep: k,
            hasRedirectURL: Y,
            setHasRedirectURL: G,
            braintreeEmail: v,
            braintreeNonce: b,
            venmoUsername: L,
            adyenPaymentData: O,
            paymentError: null != D ? D : R,
            paymentAuthenticationState: w ? eQ.oc.PENDING : null != D ? eQ.oc.ERROR : eQ.oc.NONE,
            purchaseError: F,
            setPurchaseError: B,
            purchaseErrorBlockRef: W,
            isAuthenticating: H,
            purchaseTokenAuthState: V,
            purchaseTokenHash: K,
            epsBankState: E,
            setEpsBankState: T,
            p24BankState: h,
            setP24BankState: A,
        }
    );
}
