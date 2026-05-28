n.d(t, { Y: () => tq, _V: () => tz });
var l,
    r,
    i = n(627968),
    a = n(64700),
    s = n(342393),
    o = n(284009),
    u = n.n(o),
    c = n(17928),
    d = n(691540),
    p = n(857250),
    m = n(97483),
    h = n(685094),
    C = n(683071),
    A = n(228366),
    E = n(636537),
    y = n(753390),
    P = n(70142),
    S = n(739508),
    f = n(184015),
    _ = n(723702),
    T = n(652215);
function I() {
    let e = P.A.getClient();
    null != e &&
        (0, f.j)().then((t) => {
            t.venmo
                .create({ client: e, allowDesktop: !0, paymentMethodUsage: "multi_use" })
                .then((e) => {
                    A.h.dispatch({ type: "BRAINTREE_CREATE_VENMO_CLIENT_SUCCESS", venmoClient: e });
                })
                .catch(() => {
                    A.h.dispatch({ type: "BRAINTREE_CREATE_VENMO_CLIENT_FAIL" });
                });
        });
}
function N() {
    let e = P.A.getClient();
    null != e &&
        (0, f.j)().then((t) => {
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
                        A.h.dispatch({ type: "BRAINTREE_CREATE_PAYPAL_CLIENT_SUCCESS", paypalClient: e });
                })
                .catch(() => A.h.dispatch({ type: "BRAINTREE_CREATE_PAYPAL_CLIENT_FAIL" }));
        });
}
function x() {
    let e = P.A.getPayPalClient();
    if (null == e) throw Error("braintree paypal client must be initialized before calling this");
    A.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_START" });
    let t = Promise.resolve("");
    (0, _.isDesktop)() && (t = (0, y.jf)(T.hes.PAYPAL)),
        t
            .then(() => e.tokenize({ flow: "vault" }))
            .then((e) => {
                let { email: t, firstName: n, lastName: l, billingAddress: r } = e.details;
                A.h.dispatch({
                    type: "BRAINTREE_TOKENIZE_PAYPAL_SUCCESS",
                    nonce: e.nonce,
                    email: t,
                    billingAddress: {
                        name: `${n} ${l}`,
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
                let { message: t, code: n, details: l } = e;
                n === T.Q7O.PAYPAL_POPUP_CLOSED || null == n
                    ? A.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED" })
                    : (A.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_FAIL", message: t, code: n }),
                      S.pM(Error(`Braintree Paypal Error: ${t} ${n} ${l}`)));
            });
}
function g() {
    let e = P.A.getVenmoClient();
    if (null == e) throw Error("Braintree Venmo client must be initialized before calling tokenize.");
    A.h.dispatch({ type: "BRAINTREE_TOKENIZE_VENMO_START" }),
        e
            .tokenize()
            .then((e) => {
                let { username: t } = e.details;
                A.h.dispatch({ type: "BRAINTREE_TOKENIZE_VENMO_SUCCESS", nonce: e.nonce, username: t });
            })
            .catch((e) => {
                let { message: t, code: n, details: l } = e;
                [T.Q7O.VENMO_APP_CANCELED, T.Q7O.VENMO_DESKTOP_CANCELED, T.Q7O.VENMO_CANCELED].includes(n)
                    ? A.h.dispatch({ type: "BRAINTREE_TOKENIZE_VENMO_FAIL_CANCELED" })
                    : (A.h.dispatch({ type: "BRAINTREE_TOKENIZE_VENMO_FAIL", message: t, code: n }),
                      S.pM(Error(`Braintree Venmo Error: ${t} ${n} ${l}`)));
            });
}
function v(e, t) {
    if (null == e) return Promise.resolve();
    A.h.dispatch(t);
    try {
        return Promise.resolve(e.teardown());
    } catch (e) {
        return Promise.resolve();
    }
}
var M = n(391048),
    R = n(292666),
    b = n(812745),
    j = n(825755),
    L = n(375708);
class O extends a.PureComponent {
    componentDidMount() {
        null != this.props.paypalClient && x();
    }
    componentDidUpdate(e) {
        null == e.paypalClient && null != this.props.paypalClient && x();
    }
    componentWillUnmount() {
        v(P.A.getPayPalClient(), { type: "BRAINTREE_TEARDOWN_PAYPAL_CLIENT" }).then(() => {
            null != P.A.getClient() && N();
        });
    }
    render() {
        let { braintreeEmail: e, paypalClient: t } = this.props;
        return (0, i.jsx)(R.k, {
            label: L.intl.string(L.t.QQBAos),
            leading: { type: "image", src: (0, b.Nj)(b.Ay.Types.PAYPAL) },
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
class G extends a.PureComponent {
    componentDidMount() {
        null != this.props.venmoClient && g();
    }
    componentDidUpdate(e) {
        null == e.venmoClient && null != this.props.venmoClient && g();
    }
    componentWillUnmount() {
        v(P.A.getVenmoClient(), { type: "BRAINTREE_TEARDOWN_VENMO_CLIENT" }).then(() => {
            null != P.A.getClient() && I();
        });
    }
    render() {
        let { venmoUsername: e, className: t, venmoClient: n } = this.props,
            l = null != e && "" !== e;
        return (0, i.jsxs)("div", {
            className: t,
            children: [
                (0, i.jsx)(b.Ay, { type: b.Ay.Types.VENMO, size: b.y3.MEDIUM, className: k.Z }),
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
let Y = c.Ay.connectStores([P.A, j.A], () => ({ venmoUsername: j.A.venmoUsername, venmoClient: P.A.getVenmoClient() }))(
    G,
);
var F = n(891197),
    B = n(503698),
    W = n.n(B),
    V = n(305866),
    H = n(287809),
    K = n(832208),
    Z = n(661531),
    q = n(602853),
    z = n(511274),
    $ = n(50579),
    J = n(482188);
let X = function (e) {
    let t = a.useRef(null),
        { stripeType: n, flipped: l, updateCompleted: r, onFocus: o, onBlur: u } = e,
        [c, d] = a.useState(b.Be.UNKNOWN),
        [p, m] = a.useState(!1),
        [h, C] = a.useState(!1),
        [A, E] = a.useState(null),
        [y, P] = a.useState({}),
        S = (0, s.useElements)(),
        f = a.useCallback(() => {
            if (null != S)
                switch (n) {
                    case "cardNumber": {
                        let e = S.getElement(s.CardNumberElement);
                        if (null == e) return;
                        e.off("change"), e.off("focus"), e.off("blur");
                        break;
                    }
                    case "cardExpiry": {
                        let e = S.getElement(s.CardExpiryElement);
                        if (null == e) return;
                        e.off("change"), e.off("focus"), e.off("blur");
                        break;
                    }
                    case "cardCvc": {
                        let e = S.getElement(s.CardCvcElement);
                        if (null == e) return;
                        e.off("change"), e.off("focus"), e.off("blur");
                    }
                }
        }, [S, n]),
        _ = a.useCallback(
            (e) => {
                h || e.empty || C(!0), null != r && r(e.complete), null != e.error && m(!1);
            },
            [h, r],
        ),
        T = a.useCallback(() => {
            m(!0), o?.();
        }, [o]),
        I = a.useCallback(() => {
            m(!1), u?.();
        }, [u]),
        N = a.useCallback(() => {
            if (null != S)
                switch (n) {
                    case "cardNumber": {
                        let e = S.getElement(s.CardNumberElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            c !== e.brand && d(e.brand),
                                e.empty && h
                                    ? E(L.intl.string(L.t.eOIfuy))
                                    : null != e.error
                                      ? E(L.intl.string(L.t.x4pWtJ))
                                      : E(null),
                                _(e);
                        }),
                            e.on("focus", T),
                            e.on("blur", I);
                        break;
                    }
                    case "cardExpiry": {
                        let e = S.getElement(s.CardExpiryElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            null != e.error || (e.empty && h) ? E(L.intl.string(L.t["9/zZdl"])) : E(null), _(e);
                        }),
                            e.on("focus", T),
                            e.on("blur", I);
                        break;
                    }
                    case "cardCvc": {
                        let e = S.getElement(s.CardCvcElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            null != e.error || (e.empty && h) ? E(L.intl.string(L.t.ro4isZ)) : E(null), _(e);
                        }),
                            e.on("focus", T),
                            e.on("blur", I);
                    }
                }
        }, [I, _, T, c, S, h, n]);
    a.useEffect(
        () => (
            N(),
            () => {
                f();
            }
        ),
        [N, f],
    );
    let x = (0, q.r)(Z.A.colors.TEXT_SUBTLE).hex(),
        g = (0, q.r)(Z.A.colors.TEXT_STRONG).hex();
    function v() {
        return W()($.vB, { [$.Tn]: null !== A, [$.iH]: p, [$.yD]: "cardNumber" === n });
    }
    return (
        a.useLayoutEffect(() => {
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
                    "::placeholder": { color: x },
                },
            });
        }, [t, x, g]),
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
                                    (0, i.jsx)(b.Ay, { className: $.Ie, type: c, flipped: l }),
                                    (0, i.jsx)(s.CardNumberElement, {
                                        options: { style: y, placeholder: L.intl.string(L.t.gPRHfw), disableLink: !1 },
                                        className: v(),
                                    }),
                                ],
                            });
                        case "cardExpiry":
                            return (0, i.jsx)(s.CardExpiryElement, {
                                options: { style: y, placeholder: L.intl.string(L.t.xeEWQ6) },
                                className: v(),
                            });
                        case "cardCvc":
                            return (0, i.jsx)(s.CardCvcElement, {
                                options: { style: y, placeholder: L.intl.string(L.t.wZz04F) },
                                className: v(),
                            });
                    }
                })(),
                (0, i.jsx)(z.U, { error: A }),
            ],
        })
    );
};
var Q = n(483770),
    ee = n(536439);
let et = function (e) {
    let { onCardInfoChange: t, error: n } = e,
        l = a.useRef(t),
        [r, s] = a.useState(!1),
        [o, u] = a.useState({}),
        [c, d] = a.useState({ name: "", country: "", postalCode: "" }),
        [p, m] = a.useState({}),
        [h, C] = a.useState({}),
        { setFocusLockDisabled: A } = a.useContext(V.M);
    a.useEffect(() => () => {
        void 0 !== A && A(!1);
    });
    let E = a.useCallback(() => {
        void 0 !== A && A(!0);
    }, [A]);
    function y(e, t) {
        !!o[e] !== t && u((n) => ({ ...n, [e]: t }));
    }
    let P = a.useCallback(
        function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = {};
            return (e || p.name) && "" === c.name && (t.name = L.intl.string(L.t.lIkVsi)), t;
        },
        [p, c],
    );
    return (
        a.useEffect(() => {
            let e = o.cardNumber && o.cardExpiry && o.cardCvc && 0 === Object.keys(P(!0)).length;
            l.current({ name: c.name }, !!e);
        }, [o, c, P]),
        (0, i.jsxs)("div", {
            children: [
                H.default.getCurrentUser()?.nsfwAllowed
                    ? (0, i.jsxs)("div", {
                          className: Q.Rm,
                          children: [
                              (0, i.jsx)("div", { className: W()(b.y3.SMALL, Q.eo, Q.Ud) }),
                              (0, i.jsx)("div", { className: W()(b.y3.SMALL, Q.DR, Q.Ud) }),
                              (0, i.jsx)("div", { className: W()(b.y3.SMALL, Q.k4, Q.Ud) }),
                              (0, i.jsx)("div", { className: W()(b.y3.SMALL, Q.a3, Q.Ud) }),
                              (0, i.jsx)("div", { className: W()(b.y3.SMALL, Q.CY, Q.Ud) }),
                              (0, i.jsx)("div", { className: W()(b.y3.SMALL, Q.Q5, Q.Ud) }),
                              (0, i.jsx)("div", { className: W()(b.y3.SMALL, Q.YA, Q.Ud) }),
                          ],
                      })
                    : (0, i.jsxs)("div", {
                          className: Q.Rm,
                          children: [
                              (0, i.jsx)("div", { className: W()(b.y3.SMALL, Q.aq, Q.Ud) }),
                              (0, i.jsx)("div", { className: W()(b.y3.SMALL, Q.VX, Q.Ud) }),
                              (0, i.jsx)("div", { className: W()(b.y3.SMALL, Q.Yi, Q.Ud) }),
                              (0, i.jsx)("div", { className: W()(b.y3.SMALL, Q.qR, Q.Ud) }),
                              (0, i.jsx)("div", { className: W()(b.y3.SMALL, Q.m2, Q.Ud) }),
                              (0, i.jsx)("div", { className: W()(b.y3.SMALL, Q.Ij, Q.Ud) }),
                              (0, i.jsx)("div", { className: W()(b.y3.SMALL, Q._V, Q.Ud) }),
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
                                            flipped: r,
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
                                                E(), s(!0);
                                            },
                                            onBlur: () => {
                                                s(!1);
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
                                    renderInput: (e) => (0, i.jsx)(R.k, { ...e }),
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
                            r = { name: h.name };
                        p[t] || "" === e || (l[t] = !0),
                            (n[t] = e),
                            l[t] && "" === e ? "name" === t && (r.name = L.intl.string(L.t.lIkVsi)) : delete r[t],
                            d(n),
                            m(l),
                            C(r);
                    },
                    onFieldBlur: function () {
                        C(P());
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
var er = n(723429);
let ei = (e) => {
        let { billingError: t, onCardInfoChange: n } = e,
            l = null != t && (null == t.code || el(t) === en.CREDIT_CARD_INFORMATION);
        return (0, i.jsxs)(a.Fragment, {
            children: [
                l
                    ? (0, i.jsx)("div", {
                          className: er.QK,
                          children: (0, i.jsx)(C.w, { type: "critical", children: L.intl.string(L.t["4vnhKV"]) }),
                      })
                    : null,
                (0, i.jsx)(et, { onCardInfoChange: n, error: t }),
            ],
        });
    },
    ea = (e) => {
        let { className: t, submitting: n, stripePaymentMethod: l } = e,
            { card: r } = l ?? {},
            a = null != r ? b.Ay.getType(r.brand) : b.Ay.Types.UNKNOWN;
        return (0, i.jsx)("div", {
            className: t,
            children: (0, i.jsx)(R.k, {
                label: L.intl.string(L.t["mmDvV+"]),
                leading: { type: "image", src: (0, b.Nj)(a) },
                value: n && null != r ? L.intl.formatToPlainString(L.t.bCynoK, r) : void 0,
                readOnly: !0,
                placeholder: L.intl.string(L.t.bWMH78),
            }),
        });
    };
var es = n(964486),
    eo = n(475743),
    eu = n(721101),
    ec = n(648335),
    ed = n(384365);
let ep = function (e) {
    let { onAccountHolderNameChange: t, billingAddressInfo: n } = e,
        l = a.useRef(null);
    return (0, i.jsx)("div", {
        className: ed.r,
        children: (0, i.jsx)(R.k, {
            label: L.intl.string(L.t.sN3wrd),
            inputRef: l,
            name: L.intl.string(L.t.sN3wrd),
            placeholder: L.intl.string(L.t.sN3wrd),
            onChange: (e) => t(e),
            value: n.name,
        }),
    });
};
var em = n(462887),
    eh = n(331322),
    eC = n(736653),
    eA = n(818348),
    eE = n(198650);
let ey = function (e) {
    let t = (0, eC.Ay)(),
        n = a.useRef(null),
        [l, r] = a.useState({}),
        o = (0, q.r)(Z.A.colors.BACKGROUND_BASE_LOWER).hex();
    switch (
        (a.useLayoutEffect(() => {
            let { current: e } = n;
            if (null == e) return;
            let t = window.getComputedStyle(e),
                l = window.getComputedStyle(e, "::placeholder"),
                i = t.getPropertyValue("font-family"),
                a = t.getPropertyValue("font-weight");
            r({
                base: {
                    fontFamily: i,
                    fontWeight: a,
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
            let r = (0, em.M)(t) ? "/assets/f4150b3aed6c4679.svg" : "/assets/8b825aafb2e4dbed.svg",
                { onNameChange: a, onEmailChange: o, onP24BankChange: u, p24BankValue: c, billingAddressInfo: d } = e;
            return (0, i.jsx)("div", {
                className: eE.rf,
                children: (0, i.jsxs)(eh.B, {
                    gap: 16,
                    children: [
                        (0, i.jsx)(R.k, {
                            label: L.intl.string(L.t["w/qqKK"]),
                            inputRef: n,
                            name: L.intl.string(L.t["w/qqKK"]),
                            placeholder: L.intl.string(L.t["w/qqKK"]),
                            onChange: (e) => o(e),
                            value: d.email,
                        }),
                        (0, i.jsx)(R.k, {
                            label: L.intl.string(L.t["yf7ms+"]),
                            name: L.intl.string(L.t["yf7ms+"]),
                            placeholder: L.intl.string(L.t["yf7ms+"]),
                            onChange: (e) => a(e),
                            value: d.name,
                        }),
                        (0, i.jsxs)(eh.B, {
                            gap: 4,
                            children: [
                                (0, i.jsx)(U.E, { variant: "text-sm/semibold", children: L.intl.string(L.t.De3b8t) }),
                                (0, i.jsx)(s.P24BankElement, {
                                    options: { value: c, style: l },
                                    onChange: (e) => u(e.value),
                                }),
                                (0, i.jsx)("div", {
                                    className: eE.je,
                                    children: (0, i.jsx)("img", { src: r, alt: "Przelewy24" }),
                                }),
                            ],
                        }),
                    ],
                }),
            });
        }
        case eA.he.EPS: {
            let { onAccountHolderNameChange: r, onEPSBankChange: a, epsBankValue: o, billingAddressInfo: u } = e,
                c = (0, em.M)(t) ? "/assets/025b24b0055c8d81.svg" : "/assets/1dae7d71a65fd90f.svg";
            return (0, i.jsx)("div", {
                className: eE.rf,
                children: (0, i.jsxs)(eh.B, {
                    gap: 16,
                    children: [
                        (0, i.jsx)(R.k, {
                            label: L.intl.string(L.t.sN3wrd),
                            inputRef: n,
                            name: L.intl.string(L.t.sN3wrd),
                            placeholder: L.intl.string(L.t.sN3wrd),
                            onChange: (e) => r(e),
                            value: u.name,
                        }),
                        (0, i.jsxs)(eh.B, {
                            gap: 4,
                            children: [
                                (0, i.jsx)(U.E, { variant: "text-sm/semibold", children: L.intl.string(L.t.dFyV07) }),
                                (0, i.jsx)(s.EpsBankElement, {
                                    options: { value: o, style: l },
                                    onChange: (e) => a(e.value),
                                }),
                                (0, i.jsx)("div", {
                                    className: eE.je,
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
var eP = n(211528);
n(426398);
var eS = n(944355),
    ef = n(722847),
    e_ = n(626584),
    eT = n(834252),
    eI = n(166532),
    eN = n(69494),
    ex = n(19311),
    eg = n(482132),
    ev = n(615310),
    eM = n(364840),
    eR = n(73825),
    eb = n(558620),
    ej = n(683433),
    eL = n(36167),
    eO = n(937008),
    eD = (((r = {})[(r.UNKNOWN = 0)] = "UNKNOWN"), (r[(r.PENDING = 1)] = "PENDING"), (r[(r.DONE = 2)] = "DONE"), r);
let ew = 0,
    eU = null,
    ek = null,
    eG = null;
class eY extends c.Ay.Store {
    static displayName = "BrowserCheckoutStateStore";
    get browserCheckoutState() {
        return ew;
    }
    get loadId() {
        return eU;
    }
    get skuId() {
        return ek;
    }
    get planId() {
        return eG;
    }
}
let eF = new eY(A.h, {
    USER_PAYMENT_BROWSER_CHECKOUT_STARTED: function (e) {
        (ew = 1), (eU = e.loadId);
    },
    USER_PAYMENT_BROWSER_CHECKOUT_DONE: function (e) {
        eU === e.loadId && ((ek = e.skuId ?? null), (eG = e.skuSubscriptionPlanId ?? null), (ew = 2));
    },
});
var eB = n(788868),
    eW = n(647926);
let eV = (e) => {
        let t,
            { step: n, onPurchaseComplete: l, onHandoffFailure: r } = e,
            {
                setSelectedSkuId: s,
                setSelectedPlanId: o,
                contextMetadata: u,
            } = (0, ef.t4)((e) => ({
                setSelectedSkuId: e.setSelectedSkuId,
                setSelectedPlanId: e.setSelectedPlanId,
                contextMetadata: e.contextMetadata,
            })),
            {
                browserCheckoutState: d,
                browserCheckoutStateLoadId: p,
                browserCheckoutStateSkuId: m,
                browserCheckoutStatePlanId: h,
            } = (0, c.cf)([eF], () => ({
                browserCheckoutState: eF.browserCheckoutState,
                browserCheckoutStateLoadId: eF.loadId,
                browserCheckoutStateSkuId: eF.skuId,
                browserCheckoutStatePlanId: eF.planId,
            })),
            C = (0, eb.A)(),
            { isGift: A } = (0, eO.Pv)(),
            [E, P] = a.useState(!1);
        switch (n) {
            case eI.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
                t = T.do8.GOOGLE_PAY;
                break;
            case eI.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
                t = T.do8.APPLE_PAY;
        }
        return (
            a.useEffect(() => {
                let e = setTimeout(() => {
                    E ||
                        (P(!0),
                        (0, y.Ze)(u.loadId),
                        (0, eL.my)(
                            {
                                planId: C?.id ?? eB.gD.PREMIUM_MONTH_TIER_2,
                                isGift: A,
                                loadId: u.loadId,
                                paymentMethodType: t,
                            },
                            r,
                        ));
                }, 1e3);
                return () => clearTimeout(e);
            }, [C, A, u, r, P, E, t]),
            a.useEffect(() => {
                null !== m && (eB.oz.includes(m) && ((0, eR.ur)(m), (0, y.hP)()), s(m)),
                    null !== h && o(h),
                    p === u.loadId && d === eD.DONE && l();
            }, [s, o, d, p, m, h, u, l]),
            (0, i.jsxs)("div", {
                className: eW.rf,
                children: [
                    (0, i.jsx)(w.D, { variant: "heading-xl/bold", children: L.intl.string(L.t.C4HYfy) }),
                    (0, i.jsx)(U.E, {
                        variant: "text-md/normal",
                        className: eW.h_,
                        children: L.intl.string(L.t.xfG7Jp),
                    }),
                ],
            })
        );
    },
    eH = (e) => {
        let { onPrimaryClick: t, onBackClick: n } = e;
        return (0, i.jsx)(eM.j, {
            children: (0, i.jsxs)("div", {
                className: eW.kL,
                children: [
                    (0, i.jsx)(ej.A, { onClick: n }),
                    (0, i.jsx)(ej.F, { onClick: t, children: L.intl.string(L.t["4Qvmmj"]) }),
                ],
            }),
        });
    };
var eK = n(921925),
    eZ = n(615405),
    eq = n(153084),
    ez = n(295405),
    e$ = n(71319),
    eJ = n(67480),
    eX = n(174459),
    eQ = n(427262),
    e0 = n(251913),
    e2 = n(632638),
    e3 = n(632088);
let e1 = null,
    e4 = null;
class e7 extends c.Ay.Store {
    static displayName = "AdyenStore";
    get client() {
        return e1;
    }
    get cashAppPayComponent() {
        return e4;
    }
}
let e6 = new e7(A.h, {
    ADYEN_CREATE_CLIENT_SUCCESS: function (e) {
        let { client: t } = e;
        e1 = t;
    },
    ADYEN_TEARDOWN_CLIENT: function () {
        e1 = null;
    },
    ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS: function (e) {
        let { component: t } = e;
        e4 = t;
    },
});
async function e5() {
    return await E.Bo.get({ url: T.Rsh.BILLING_ADYEN_PAYMENT_METHODS, oldFormErrors: !0, rejectWithError: !1 });
}
async function e8() {
    try {
        let e = await e5(),
            { default: t } = await Promise.all([n.e("94678"), n.e("40002")]).then(n.bind(n, 971193)),
            l = await t({
                environment: T.Gg3.ADYEN.KEY.startsWith("live_") ? "live" : "test",
                clientKey: T.Gg3.ADYEN.KEY,
                analytics: { enabled: !1 },
                paymentMethodsResponse: e.body,
            });
        A.h.dispatch({ type: "ADYEN_CREATE_CLIENT_SUCCESS", client: l }),
            (function (e) {
                if (null != e6.cashAppPayComponent) {
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
                            if (n) A.h.dispatch({ type: "ADYEN_CASH_APP_PAY_SUBMIT_SUCCESS", data: t });
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
                    .mount(`#${e3.h}`);
                A.h.dispatch({ type: "ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS", component: t });
            })(l);
    } catch (e) {
        (0, S.pM)(e), A.h.dispatch({ type: "ADYEN_CREATE_CLIENT_FAIL" });
    }
}
function e9() {
    let e = e6.cashAppPayComponent;
    if (null == e) throw Error("Adyen CashAppPay component must be created before mounting.");
    try {
        e.mount(`#${e3.h}`);
    } catch (e) {}
}
function te() {
    e6.cashAppPayComponent?.unmount();
}
function tt() {
    let e = e6.cashAppPayComponent;
    if (null == e) throw Error("Adyen CashAppPay component must be created before submitting.");
    e.submit();
}
var tn = n(40417);
function tl(e) {
    let { className: t } = e,
        n = (0, c.bG)([e6], () => e6.cashAppPayComponent),
        l = (0, c.bG)([j.A], () => j.A.adyenPaymentData);
    a.useEffect(
        () => (
            null == l && null != n && (e9(), tt()),
            () => {
                te();
            }
        ),
        [l, n],
    );
    let r = l?.paymentMethod?.cashtag ?? "",
        s = null != l && "" !== r;
    return (0, i.jsxs)("div", {
        className: t,
        children: [
            (0, i.jsx)(b.Ay, { type: b.Ay.Types.CASH_APP, size: b.y3.MEDIUM, className: tn.K }),
            s
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(w.D, {
                              variant: r.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
                              className: tn.y,
                              children: L.intl.format(L.t["ze/1yE"], { cashtag: r }),
                          }),
                          (0, i.jsx)(U.E, {
                              variant: "text-md/medium",
                              className: tn.y,
                              children: L.intl.string(L.t.VPOx7N),
                          }),
                      ],
                  })
                : (0, i.jsx)(U.E, {
                      variant: "text-md/medium",
                      className: tn.y,
                      children: null == n ? L.intl.string(L.t["CgVe/w"]) : L.intl.string(L.t["1MqcjI"]),
                  }),
        ],
    });
}
var tr = n(73079),
    ti = n(459357),
    ta = n(550238),
    ts = n(869177),
    to = n(71532),
    tu = n(218075);
let tc = [eI.pn.PAYMENT_TYPE],
    td = [eI.pn.PAYMENT_TYPE, eI.pn.CREDIT_CARD_INFORMATION, eI.pn.ADDRESS],
    tp = [eI.pn.PAYMENT_TYPE, eI.pn.PAYPAL_INFORMATION, eI.pn.ADDRESS],
    tm = [eI.pn.PAYMENT_TYPE, eI.pn.VENMO_INFORMATION, eI.pn.ADDRESS],
    th = [eI.pn.PAYMENT_TYPE, eI.pn.CASH_APP_INFORMATION, eI.pn.ADDRESS],
    tC = [eI.pn.PAYMENT_TYPE, eI.pn.PRZELEWY24_INFORMATION, eI.pn.ADDRESS],
    tA = [eI.pn.PAYMENT_TYPE, eI.pn.EPS_INFORMATION, eI.pn.ADDRESS],
    tE = [eI.pn.PAYMENT_TYPE, eI.pn.IDEAL_INFORMATION, eI.pn.ADDRESS],
    ty = [eI.pn.PAYMENT_TYPE, eI.pn.ADDRESS],
    tP = {
        SHARED_ADD_PAYMENT_STEPS: tc,
        SHARED_CREDIT_CARD_STEPS: td,
        SHARED_PAYPAL_STEPS: tp,
        SHARED_VENMO_STEPS: tm,
        SHARED_PRZELEWY24_STEPS: tC,
        SHARED_EPS_STEPS: tA,
        SHARED_IDEAL_STEPS: tE,
        SHARED_CASH_APP_STEPS: th,
        SHARED_TYPE_AND_ADDRESS_STEPS: ty,
    },
    tS = {
        SHARED_ADD_PAYMENT_STEPS: [eI.pn.PAYMENT_ELEMENT],
        SHARED_CREDIT_CARD_STEPS: [eI.pn.PAYMENT_ELEMENT, eI.pn.ADDRESS],
        SHARED_PAYPAL_STEPS: [eI.pn.PAYMENT_ELEMENT, eI.pn.PAYPAL_INFORMATION, eI.pn.ADDRESS],
        SHARED_VENMO_STEPS: [eI.pn.PAYMENT_ELEMENT, eI.pn.VENMO_INFORMATION, eI.pn.ADDRESS],
        SHARED_CASH_APP_STEPS: [eI.pn.PAYMENT_ELEMENT, eI.pn.CASH_APP_INFORMATION, eI.pn.ADDRESS],
        SHARED_PRZELEWY24_STEPS: [eI.pn.PAYMENT_ELEMENT, eI.pn.PRZELEWY24_INFORMATION, eI.pn.ADDRESS],
        SHARED_EPS_STEPS: [eI.pn.PAYMENT_ELEMENT, eI.pn.EPS_INFORMATION, eI.pn.ADDRESS],
        SHARED_IDEAL_STEPS: [eI.pn.PAYMENT_ELEMENT, eI.pn.ADDRESS],
        SHARED_TYPE_AND_ADDRESS_STEPS: [eI.pn.PAYMENT_ELEMENT, eI.pn.ADDRESS],
    };
var tf = n(801753);
function t_(e) {
    return () => (null != j.A.error && (0, M.ET)(), e());
}
function tT(e) {
    let { onPrimary: t, onBack: n, ...l } = e,
        r = t;
    null != t && (r = t_(t));
    let a = n;
    return null != n && (a = t_(n)), (0, i.jsx)(ex.Ay, { ...l, onPrimary: r, onBack: a });
}
function tI(e) {
    let { paymentSourceTypeRestrictions: t } = e,
        n = null != t && t.length > 0 ? tu.fU.ADD_NEW_PAYMENT_METHOD : void 0,
        { enabled: l } = (0, ti.c)({ location: "AddPaymentStep" });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(tu.je, { paymentRestrictionBannerType: n }),
            (0, i.jsx)(tr.A, { ...e }),
            l && (0, i.jsx)(eS.Z4, { className: tf.SO }),
        ],
    });
}
let tN = (e) => {
        let {
                prependSteps: t,
                appendSteps: n,
                analyticsLocation: l,
                isEligibleForTrial: r,
                allowDesktopRedirectPurchase: a,
                onPaymentRequestSourceFailed: s,
                paymentModalArgs: o,
                handleStepChange: u,
                setPaymentMethodSteps: c,
                setPaymentRequestPaymentMethod: d,
                currentStep: p,
                setInfoNotice: m,
                completeSteps: h,
                paymentSourceTypeRestrictions: C,
                CREDIT_CARD_STEPS: A,
                PAYPAL_STEPS: E,
                VENMO_STEPS: P,
                PAYMENT_REQUEST_STEPS: S,
                PRZELEWY24_STEPS: f,
                EPS_STEPS: T,
                IDEAL_STEPS: I,
                CASH_APP_STEPS: N,
                setConnectorPaymentRequestReady: x,
                connectorPaymentRequestRef: g,
            } = e,
            { activitySessionId: v } = (0, eT.P5)(),
            R = (0, ef.t4)((e) => e.contextMetadata),
            { setBillingAddressState: b } = o,
            O = (e, l) => {
                switch (e) {
                    case eA.he.CARD:
                        a ? u(eI.pn.AWAITING_BROWSER_CHECKOUT) : (c(A), u(eI.pn.CREDIT_CARD_INFORMATION));
                        break;
                    case eA.he.PAYPAL:
                        c(E), u(eI.pn.PAYPAL_INFORMATION);
                        break;
                    case eA.he.VENMO:
                        c(P), u(eI.pn.VENMO_INFORMATION);
                        break;
                    case eA.he.PAYMENT_REQUEST:
                        a && "googlePay" === l
                            ? u(eI.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY)
                            : a && "applePay" === l
                              ? u(eI.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY)
                              : (c(S), u(eI.pn.PAYMENT_REQUEST_INFORMATION));
                        break;
                    case eA.he.PRZELEWY24:
                        c(f), u(eI.pn.PRZELEWY24_INFORMATION);
                        break;
                    case eA.he.EPS:
                        c(T), u(eI.pn.EPS_INFORMATION);
                        break;
                    case eA.he.IDEAL:
                        c(I), u(eI.pn.IDEAL_INFORMATION);
                        break;
                    case eA.he.CASH_APP:
                        c(N), u(eI.pn.CASH_APP_INFORMATION);
                        break;
                    case eA.he.GIROPAY:
                    case eA.he.PAYSAFE_CARD:
                    case eA.he.GCASH:
                    case eA.he.GRABPAY_MY:
                    case eA.he.MOMO_WALLET:
                    case eA.he.KAKAOPAY:
                    case eA.he.GOPAY_WALLET:
                    case eA.he.BANCONTACT:
                        c({ steps: [...t, ...ty, ...n], methodType: e }), u(eI.pn.ADDRESS);
                }
                null != j.A.error && (0, M.ET)();
            },
            D = async (e, t) => {
                if (((0, M.mf)(e), null == e)) return void s();
                d(e);
                let { billingAddressInfo: n } = (0, to.uK)(e),
                    r = (0, ta.Qd)(n);
                if (((null == n.name || "" === n.name) && null != t && (n.name = t), b({ isValid: r, info: n }), !r))
                    return void u(eI.pn.ADDRESS);
                try {
                    var i;
                    (i = await (0, y.Tv)(e, n, l)), b((e) => ({ ...e, info: n })), c(S), h(i);
                } catch (e) {
                    s();
                }
            };
        if (p === eI.pn.ATTEMPT_GOOGLE_PAY || p === eI.pn.ATTEMPT_APPLE_PAY) {
            let e = L.intl.string(p === eI.pn.ATTEMPT_APPLE_PAY ? L.t.czhXDv : L.t.Zj2xQ0);
            return (0, i.jsx)(ts.V, {
                onChooseType: O,
                paymentRequestWallet: p === eI.pn.ATTEMPT_APPLE_PAY ? "applePay" : "googlePay",
                onStripePaymentMethodReceived: D,
                onPaymentRequestFailure: () => {
                    O(eA.he.CARD), m(e);
                },
                onValidPaymentRequest: () => x(!0),
                paymentRequestRef: g,
            });
        }
        let w = !(0, _.isDesktop)() || a;
        return (0, i.jsx)(tI, {
            onChooseType: O,
            onStripePaymentMethodReceived: D,
            paymentRequestWallets: w ? ["googlePay", "applePay"] : [],
            isEligibleForTrial: r,
            paymentRequestPaymentContext: { contextMetadata: R, activitySessionId: v },
            paymentSourceTypeRestrictions: C,
        });
    },
    tx = (e) => {
        let {
            onReturn: t,
            shouldUseManaModal: n,
            handleStepChange: l,
            currentStep: r,
            connectorPaymentRequestReady: a,
            showConnectorPaymentRequest: s,
        } = e;
        if (r === eI.pn.ATTEMPT_GOOGLE_PAY || r === eI.pn.ATTEMPT_APPLE_PAY) {
            let e = L.intl.string(r === eI.pn.ATTEMPT_APPLE_PAY ? L.t.WoXvJL : L.t.wnVVr0);
            return (0, i.jsx)(tT, {
                onBack: () => l(eI.pn.PAYMENT_TYPE),
                primaryCTA: ex.Ay.CTAType.CONTINUE,
                primaryText: e,
                onPrimary: () => s(),
                primaryDisabled: !a,
                shouldUseManaModal: n,
            });
        }
        return (0, i.jsx)(tT, { onBack: t, shouldUseManaModal: n });
    };
var tg = n(198970),
    tv = n(546605),
    tM = n(116673),
    tR = n(773669);
let tb = (e) => {
        let t,
            { billingAddressInfo: n, billingError: l, onBillingAddressChange: r, paymentSourceType: s } = e,
            o = null != l && (null == l.code || el(l) === en.ADDRESS),
            u = (0, c.bG)([tR.default], () => tR.default.locale);
        switch (s) {
            case T.hes.GIROPAY:
            case T.hes.PAYSAFE_CARD:
            case T.hes.GCASH:
            case T.hes.GRABPAY_MY:
            case T.hes.MOMO_WALLET:
            case T.hes.KAKAOPAY:
            case T.hes.GOPAY_WALLET:
            case T.hes.BANCONTACT:
                t = "en-US" === u ? tg.Ay.Layouts.MODAL_US_WITH_NAME : tg.Ay.Layouts.MODAL_INTL_WITH_NAME;
                break;
            case T.hes.VENMO:
            case T.hes.CASH_APP:
                t = tg.Ay.Layouts.MODAL_US_WITH_NAME;
                break;
            default:
                t = "en-US" === u ? tg.Ay.Layouts.MODAL_US : tg.Ay.Layouts.MODAL_INTL;
        }
        let d = (0, tv.vg)("AddressStep"),
            p = (0, tM.z)();
        0 === n.country.length && null != p && p.length > 0 && (n.country = p[0]);
        let m = (0, c.bG)([H.default], () => H.default.getCurrentUser()?.storeCountry?.isLocked === !0),
            h = d && m ? L.intl.string(L.t.Pg2hU0) : null;
        return (0, i.jsxs)(a.Fragment, {
            children: [
                o
                    ? (0, i.jsx)("div", {
                          className: er.QK,
                          children: (0, i.jsx)(C.w, { type: "critical", children: L.intl.string(L.t.vZ8y7l) }),
                      })
                    : null,
                (0, i.jsx)(tg.Ay, {
                    className: er.__invalid_formItem,
                    onBillingAddressChange: r,
                    error: l,
                    layout: t,
                    allowedBillingAddressCountries: p,
                    countryHelperText: h,
                    ...n,
                }),
            ],
        });
    },
    tj = new e_.A("AddPaymentAddressStep.tsx");
function tL(e) {
    let { billingAddressInfo: t, onBillingAddressChange: n, paymentSourceType: l } = e,
        r = (0, c.bG)([j.A], () => j.A.error);
    return (0, i.jsx)(tb, { billingAddressInfo: t, billingError: r, onBillingAddressChange: n, paymentSourceType: l });
}
function tO(e) {
    let { paymentModalArgs: t, shouldUsePaymentElement: n, paymentSourceType: l } = e,
        { billingAddressState: r, setBillingAddressState: a } = t;
    return n
        ? null
        : (0, i.jsx)(tL, {
              billingAddressInfo: r.info,
              onBillingAddressChange: (e, t) => {
                  a({ info: { ...r.info, ...e }, isValid: t });
              },
              paymentSourceType: l,
          });
}
function tD(e) {
    let {
            paymentModalArgs: t,
            shouldUseManaModal: n,
            analyticsLocation: l,
            overwriteSubscriptionPaymentSource: r,
            handleStepChange: a,
            onPaymentRequestSourceFailed: s,
            paymentRequestPaymentMethod: o,
            completeSteps: c,
            paymentMethodSteps: d,
            paymentElementSelectedType: p,
            returnToPaymentElementStep: m,
            combinedStripeElementsRef: h,
            lastConfirmedSetupIntentRef: C,
            shouldUsePaymentElement: A,
        } = e,
        { stripe: E } = (0, eT.P5)(),
        {
            tokenState: P,
            isSubmittingCurrentStep: S,
            billingAddressState: f,
            setIsSubmittingCurrentStep: _,
            hasRedirectURL: T,
            setHasRedirectURL: I,
            braintreeNonce: N,
            adyenPaymentData: x,
            isAuthenticating: g,
            epsBankState: v,
            p24BankState: M,
        } = t,
        R = async () => {
            _(!0);
            let e = A ? p : d.methodType,
                t = [
                    E,
                    h.current,
                    { billingAddress: f.info, paymentSourceType: e ?? eA.he.UNKNOWN, lastConfirmedSetupIntentRef: C },
                    l,
                ];
            switch (e) {
                case eA.he.PAYMENT_REQUEST:
                    if (A) {
                        try {
                            let e = await (0, y.im)(...t);
                            c(e);
                        } catch (e) {
                            _(!1), tj.warn("Error confirming Payment Element source for Payment Request: ", e);
                        }
                        break;
                    }
                    if (null == o) throw (s(), (0, y.i0)("Missing paymentRequestPaymentMethod"));
                    c(await (0, y.Tv)(o, f.info, l));
                    break;
                case eA.he.CARD:
                    try {
                        let e = A ? await (0, y.im)(...t) : await (0, y.u6)(E, P.token, f.info, l);
                        c(e);
                    } catch {}
                    break;
                case eA.he.VENMO:
                case eA.he.PAYPAL:
                    try {
                        u()(null != N, "Missing braintreeNonce");
                        let e = await (0, y.u1)(N, f.info, l);
                        c(e);
                    } catch {}
                    break;
                case eA.he.EPS:
                    try {
                        let e = await (0, y.Z9)(E, v, f.info, l);
                        c(e);
                    } catch (e) {
                        tj.warn(e);
                    }
                    break;
                case eA.he.IDEAL:
                    try {
                        let e = A ? await (0, y.im)(...t) : await (0, y.EB)(E, f.info, l);
                        c(e);
                    } catch (e) {
                        tj.warn(e);
                    }
                    break;
                case eA.he.PRZELEWY24:
                    try {
                        if (void 0 === M) throw (0, y.i0)("Bank required for Przelewy24");
                        let e = await (0, y.TD)(E, { p24Bank: M }, f.info, l);
                        c(e);
                    } catch {}
                    break;
                case eA.he.PAYSAFE_CARD:
                case eA.he.GRABPAY_MY:
                    try {
                        let t = await (0, y.A8)(f.info, e, l);
                        c(t);
                    } catch {}
                    break;
                case eA.he.GCASH:
                case eA.he.MOMO_WALLET:
                case eA.he.KAKAOPAY:
                case eA.he.GOPAY_WALLET:
                    try {
                        let { redirectConfirmation: t } = await (0, y.$M)(f.info, e, l);
                        I(t);
                    } catch {}
                    break;
                case eA.he.GIROPAY:
                case eA.he.BANCONTACT:
                    try {
                        let t = await (0, y.bw)(E, f.info, e, l);
                        c(t);
                    } catch {}
                    break;
                case eA.he.CASH_APP:
                    try {
                        u()(null != x, "Missing adyenPaymentData");
                        let { paymentSource: t } = await (0, y.$M)(f.info, e, l, x, r);
                        u()(null != t, "Cash App Pay Payment Source missing"), c(t);
                    } catch {}
                    break;
                default:
                    throw Error("unknown step not handled");
            }
            T || _(!1);
        },
        b = d.methodType,
        { backStep: j } = A
            ? { backStep: eI.pn.PAYMENT_ELEMENT }
            : ((e) => {
                  switch (e) {
                      case eA.he.CARD:
                          return { backStep: eI.pn.CREDIT_CARD_INFORMATION };
                      case eA.he.PAYPAL:
                          return { backStep: eI.pn.PAYPAL_INFORMATION };
                      case eA.he.VENMO:
                          return { backStep: eI.pn.VENMO_INFORMATION };
                      case eA.he.GIROPAY:
                      case eA.he.PAYSAFE_CARD:
                      case eA.he.GCASH:
                      case eA.he.GRABPAY_MY:
                      case eA.he.MOMO_WALLET:
                      case eA.he.KAKAOPAY:
                      case eA.he.GOPAY_WALLET:
                      case eA.he.BANCONTACT:
                          return { backStep: eI.pn.PAYMENT_TYPE };
                      case eA.he.EPS:
                          return { backStep: eI.pn.EPS_INFORMATION };
                      case eA.he.IDEAL:
                          return { backStep: eI.pn.IDEAL_INFORMATION };
                      case eA.he.PRZELEWY24:
                          return { backStep: eI.pn.PRZELEWY24_INFORMATION };
                      case eA.he.CASH_APP:
                          return { backStep: eI.pn.CASH_APP_INFORMATION };
                      default:
                          return { backStep: eI.pn.PAYMENT_TYPE };
                  }
              })(b),
        O = A ? () => m(void 0) : () => a(j);
    return (0, i.jsx)(tT, {
        onBack: O,
        primaryCTA: ex.Ay.CTAType.CONTINUE,
        primaryText: L.intl.string(L.t.PDTjLN),
        primarySubmitting: S,
        primaryDisabled: !f.isValid || g,
        onPrimary: R,
        shouldUseManaModal: n,
    });
}
let tw = new e_.A("PaymentElementStepFooter.tsx"),
    tU = (e) => {
        let { stripe: t } = (0, eT.P5)(),
            {
                shouldUseManaModal: n,
                paymentModalArgs: l,
                handleStepChange: r,
                setPaymentMethodSteps: s,
                onBack: o,
                primarySubmitting: u,
                primaryDisabled: c,
                PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: d,
            } = e,
            { setIsSubmittingCurrentStep: p, setBillingAddressState: m } = l,
            { paymentElementSelectedType: h, combinedStripeElementsRef: C, remountAddressElement: A } = e,
            E = a.useCallback(async () => {
                p(!0);
                try {
                    if (null == h || !(0, ec.PE)(h)) throw (0, y.ne)("Valid Payment Element source type not found", !0);
                    let { steps: e, methodType: n } = d[h];
                    if ((s({ steps: e, methodType: n === eA.he.UNKNOWN ? h : n }), h === eA.he.PAYMENT_REQUEST)) {
                        let e = C.current,
                            { paymentMethod: n } = await (0, y.YB)(t, e),
                            { billingAddressInfo: l } = (0, to.uK)(n);
                        m((e) => ({ ...e, info: l })), A(), r(eI.pn.ADDRESS);
                    } else {
                        let e = (0, ec.eI)(h);
                        null != e ? r(e) : r(eI.pn.ADDRESS);
                    }
                } catch (e) {
                    tw.error("Error on submitting Payment Element step: ", e.message ?? JSON.stringify(e));
                } finally {
                    p(!1);
                }
            }, [h, d, C, A, r, t, s, p, m]);
        return (0, i.jsx)(tT, {
            onBack: o,
            primaryCTA: ex.Ay.CTAType.CONTINUE,
            primaryType: "submit",
            primaryText: L.intl.string(L.t.PDTjLN),
            primarySubmitting: u,
            primaryDisabled: c,
            onPrimary: E,
            shouldUseManaModal: n,
        });
    };
var tk = n(691189);
let tG = new e_.A("AddPaymentStep.tsx"),
    tY = { name: "", cardNumber: "", expirationDate: "", cvc: "" },
    tF = { email: "", name: "", country: "", line1: "", line2: "", city: "", postalCode: "", state: "" };
function tB(e) {
    let { onCardInfoChange: t } = e,
        n = (0, c.bG)([j.A], () => j.A.error);
    return (0, i.jsx)(ei, { billingError: n, onCardInfoChange: t });
}
function tW() {
    return (0, i.jsx)(D, {});
}
function tV() {
    return (0, i.jsx)(Y, {});
}
function tH() {
    return (0, i.jsx)(tl, {});
}
function tK() {
    let e = (0, c.bG)([eZ.A], () => eZ.A.isBusy),
        t = (0, c.bG)([j.A], () => j.A.stripePaymentMethod);
    return (0, i.jsx)(ea, { stripePaymentMethod: t, submitting: e });
}
function tZ() {
    return (0, i.jsx)(F.N, {});
}
function tq(e) {
    let t,
        n,
        {
            paymentModalArgs: l,
            initialStep: r,
            prependSteps: o,
            appendSteps: u,
            onReturn: E,
            onComplete: S,
            onStepChange: f,
            breadcrumpSteps: _,
            currentBreadcrumpStep: I,
            header: N,
            analyticsData: v,
            analyticsLocation: M,
            hideBreadcrumbs: R = !1,
            usePaymentModalStep: b = !1,
            isEligibleForTrial: O = !1,
            allowDesktopRedirectPurchase: D = !1,
            toastContent: w,
            continueSessionToInitialStep: U,
            overwriteSubscriptionPaymentSource: k = !1,
            shouldUseManaModal: G = !0,
        } = e,
        { stripe: Y, activitySessionId: F, paymentElementsEnabled: B } = (0, eT.P5)(),
        W = (0, ef.t4)((e) => e.contextMetadata),
        V = (0, ev.l)(),
        H = a.useMemo(() => {
            let e = r === eI.pn.PAYMENT_TYPE || r === eI.pn.PAYMENT_ELEMENT;
            return B && e ? (D ? eI.pn.AWAITING_BROWSER_CHECKOUT : eI.pn.PAYMENT_ELEMENT) : r;
        }, [B, r, D]),
        K = a.useMemo(() => (0, eQ.Gn)(), []),
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
                [r, i, s, o, u, c, d, p, m, h] = (0, a.useMemo)(
                    () =>
                        ((e, t) => {
                            let { prependSteps: n, appendSteps: l, paymentElementsEnabled: r } = t;
                            return e.map((e) => {
                                let { sharedStepsKey: t, methodType: i } = e;
                                return {
                                    steps: [
                                        ...n,
                                        ...(r && (null == i || i === eA.he.UNKNOWN || (0, ec.PE)(i)) ? tS[t] : tP[t]),
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
                C = (0, a.useMemo)(
                    () => ({
                        [eA.he.CARD]: o,
                        [eA.he.PAYPAL]: u,
                        [eA.he.PAYMENT_REQUEST]: i,
                        [eA.he.VENMO]: d,
                        [eA.he.CASH_APP]: h,
                        [eA.he.IDEAL]: c,
                        [eA.he.PRZELEWY24]: p,
                        [eA.he.EPS]: m,
                        [eA.he.BANCONTACT]: r,
                        [eA.he.GOPAY_WALLET]: r,
                        [eA.he.KAKAOPAY]: r,
                        [eA.he.GCASH]: r,
                        [eA.he.PAYSAFE_CARD]: r,
                        [eA.he.GRABPAY_MY]: r,
                        [eA.he.MOMO_WALLET]: r,
                    }),
                    [r, o, u, d, i, c, h, p, m],
                );
            return {
                DEFAULT_PAYMENT_ELEMENT_STEPS: r,
                CREDIT_CARD_STEPS: o,
                PAYPAL_STEPS: u,
                IDEAL_STEPS: c,
                PAYMENT_REQUEST_STEPS: i,
                VENMO_STEPS: d,
                ADD_PAYMENT_STEPS: s,
                PRZELEWY24_STEPS: p,
                EPS_STEPS: m,
                CASH_APP_STEPS: h,
                PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: C,
            };
        })({ prependSteps: o, appendSteps: u, paymentElementsEnabled: B }),
        [el, er] = a.useState(H),
        [ei, ea] = a.useState(null),
        [es, eo] = a.useState(
            (function (e) {
                switch (e) {
                    case eI.pn.CREDIT_CARD_INFORMATION:
                        return Z;
                    case eI.pn.CASH_APP_INFORMATION:
                        return et;
                    default:
                        return { steps: [eI.pn.ADD_PAYMENT_STEPS] };
                }
            })(H),
        );
    a.useEffect(() => {
        (0, y.IV)();
    }, []);
    let eu = (0, c.bG)([j.A], () => j.A.redirectedPaymentSourceId),
        ed = (0, c.bG)([e6], () => e6.cashAppPayComponent),
        em = { completeSteps: e8, setIsSubmittingCurrentStep: l.setIsSubmittingCurrentStep },
        eh = a.useRef(em);
    a.useEffect(() => {
        eh.current = em;
    }),
        a.useEffect(() => {
            let { completeSteps: e, setIsSubmittingCurrentStep: t } = eh.current;
            (async () => {
                if (null == eu) return;
                await (0, y.$o)();
                let n = ez.A.getPaymentSource(eu);
                null != n && (e(n), t(!1), j.A.clearRedirectedPaymentSourceId());
            })();
        }, [eu]);
    let eC = a.useCallback(
            function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                ea(null), er(e), t && f({ currentStep: el, toStep: e });
            },
            [el, f],
        ),
        eE = a.useCallback(
            (e) => {
                eX.default.track(T.HAw.PAYMENT_FLOW_ADD_SOURCE_COMPLETED, {
                    load_id: W.loadId,
                    analytics_location: M,
                    payment_source_id: e.id,
                    payment_source_type: e.type,
                    payment_source_country: e.paymentMethodCountry,
                });
            },
            [W.loadId, M],
        ),
        e_ = (0, c.bG)([j.A], () => j.A.error),
        eM = a.useRef(e_);
    a.useEffect(() => {
        let e = eM.current;
        (eM.current = e_),
            null != e_ &&
                e_ !== e &&
                eX.default.track(T.HAw.PAYMENT_FLOW_ADD_SOURCE_ERROR, {
                    load_id: W.loadId,
                    analytics_location: M,
                    payment_source_type: es.methodType,
                    error_code: e_.code,
                    error_message: e_.message,
                });
    }, [e_, W.loadId, M, es.methodType]);
    let eR = a.useCallback(
            (e) => {
                eE(e),
                    (0, d.P0)(
                        (0, p.o)(void 0 !== w ? w : L.intl.string(L.t["VJPg+l"]), m.Ck.SUCCESS, {
                            position: m.xJ.BOTTOM,
                        }),
                    ),
                    S(el, e),
                    eC(H, !1);
            },
            [eC, H, el, S, w, eE],
        ),
        [eb, ej] = a.useState(null),
        {
            setPaymentSourceId: eL,
            creditCardState: eO,
            setCreditCardState: eD,
            setTokenState: ew,
            isSubmittingCurrentStep: eU,
            billingAddressState: ek,
            setBillingAddressState: eG,
            setIsSubmittingCurrentStep: eY,
            braintreeEmail: eF,
            braintreeNonce: eB,
            venmoUsername: eW,
            adyenPaymentData: eZ,
            epsBankState: eq,
            setEpsBankState: e$,
            p24BankState: e0,
            setP24BankState: e3,
            selectedSkuId: e1,
        } = l,
        e4 = e1 ?? "",
        e7 = (0, c.bG)([eJ.A], () => eJ.A.get(e4), [e4]),
        e5 = e7?.eligiblePaymentGateways?.map((e) => e.valueOf());
    function e8(e) {
        eL(e.id), eR(e);
    }
    let e9 = () => {
            eo(X), eC(eI.pn.PAYMENT_TYPE);
        },
        te = (0, eP.wD)({
            step: el,
            continueSessionToInitialStep: U,
            paymentElementsEnabled: B,
            handleStepChange: eC,
            logger: tG,
            shouldLogOnChangeEvents: K || !1,
            onBillingAddressChange: (e, t) => {
                eG({ info: { ...ek.info, ...e }, isValid: t });
            },
        }),
        {
            shouldRenderPaymentElement: tn,
            paymentElementReady: tl,
            paymentElementSelectedType: tr,
            returnToPaymentElementStep: ti,
            onBackFromPaymentElement: ta,
            combinedStripeElementsRef: ts,
            stripePaymentElementProps: to,
            stripeAddressElementProps: tu,
            remountAddressElement: tc,
            addressElementKey: td,
        } = te,
        tp = a.useCallback(() => {
            eC(eI.pn.ADDRESS), B && eP.Ky.includes(el) && tc();
        }, [eC, B, tc, el]),
        tm = a.useCallback(
            (e) => {
                B && null != tr && (0, ec.PE)(e) ? ti(e) : eC(eI.pn.PAYMENT_TYPE);
            },
            [B, tr, ti, eC],
        ),
        th = b ? (0, i.jsx)(eK.A, { className: tf._8 }) : null,
        tC = (() => {
            let [e, t] = a.useState(!1),
                n = a.useRef(null);
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
        case eI.pn.ATTEMPT_GOOGLE_PAY:
        case eI.pn.ATTEMPT_APPLE_PAY:
        case eI.pn.PAYMENT_TYPE:
            (t = (0, i.jsx)(tN, {
                prependSteps: o,
                appendSteps: u,
                analyticsLocation: M,
                isEligibleForTrial: O,
                allowDesktopRedirectPurchase: D,
                onPaymentRequestSourceFailed: e9,
                paymentModalArgs: l,
                handleStepChange: eC,
                setPaymentMethodSteps: eo,
                setPaymentRequestPaymentMethod: ej,
                currentStep: el,
                setInfoNotice: ea,
                completeSteps: e8,
                paymentSourceTypeRestrictions: e5,
                CREDIT_CARD_STEPS: Z,
                PAYPAL_STEPS: q,
                VENMO_STEPS: J,
                PAYMENT_REQUEST_STEPS: $,
                PRZELEWY24_STEPS: Q,
                EPS_STEPS: ee,
                IDEAL_STEPS: z,
                CASH_APP_STEPS: et,
                ...tC,
            })),
                (n = (0, i.jsx)(tx, {
                    shouldUseManaModal: G,
                    onReturn: E,
                    handleStepChange: eC,
                    currentStep: el,
                    ...tC,
                }));
            break;
        case eI.pn.PAYMENT_ELEMENT:
            if (!B) throw (0, y.ne)("Payment Elements not enabled, invalid step", !0);
            (t = null),
                (n = (0, i.jsx)(tU, {
                    handleStepChange: eC,
                    shouldUseManaModal: G,
                    setPaymentMethodSteps: eo,
                    primarySubmitting: eU,
                    primaryDisabled: !tl,
                    onBack: () => {
                        ta(), E?.();
                    },
                    paymentModalArgs: l,
                    PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: en,
                    ...te,
                }));
            break;
        case eI.pn.CREDIT_CARD_INFORMATION:
            let tA = async (e) => {
                eY(!0);
                try {
                    let t = await (0, y.YJ)(Y, e);
                    ew({ token: t }), eC(eI.pn.ADDRESS);
                } catch (e) {
                    tG.error(e.message ?? JSON.stringify(e));
                } finally {
                    eY(!1);
                }
            };
            t = (0, i.jsx)(tB, {
                onCardInfoChange: (e, t) => {
                    eD({ info: e, isValid: t }), eG((t) => ({ ...t, info: { ...t.info, name: e.name } }));
                },
            });
            let tE = !eO.isValid,
                ty = () => {
                    eC(eI.pn.PAYMENT_TYPE);
                };
            n = (0, i.jsx)(s.ElementsConsumer, {
                children: (e) => {
                    let { elements: t } = e;
                    return (0, i.jsx)(tT, {
                        onBack: ty,
                        primaryCTA: ex.Ay.CTAType.CONTINUE,
                        primaryType: "submit",
                        primaryText: L.intl.string(L.t.PDTjLN),
                        primarySubmitting: eU,
                        primaryDisabled: tE,
                        onPrimary: () => tA(t),
                        shouldUseManaModal: G,
                    });
                },
            });
            break;
        case eI.pn.AWAITING_BROWSER_CHECKOUT:
        case eI.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
        case eI.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
            let t_ = () => {
                eo(Z), eC(B ? eI.pn.PAYMENT_ELEMENT : eI.pn.CREDIT_CARD_INFORMATION);
            };
            (t = (0, i.jsx)(eV, { step: el, onPurchaseComplete: () => S(el), onHandoffFailure: t_ })),
                (n = (0, i.jsx)(eH, {
                    onPrimaryClick: t_,
                    onBackClick: () => {
                        B ? (ta(), E?.()) : (eo(X), eC(eI.pn.PAYMENT_TYPE));
                    },
                }));
            break;
        case eI.pn.EPS_INFORMATION:
            (t = (0, i.jsx)(ey, {
                type: eA.he.EPS,
                onAccountHolderNameChange: (e) => eG({ info: { ...ek.info, name: e }, isValid: ek.isValid }),
                onEPSBankChange: (e) => e$(e),
                epsBankValue: eq,
                billingAddressInfo: ek.info,
            })),
                (n = (0, i.jsx)(tT, {
                    onBack: () => tm(eA.he.EPS),
                    primaryCTA: ex.Ay.CTAType.CONTINUE,
                    primaryText: L.intl.string(L.t.PDTjLN),
                    primaryDisabled: void 0 === eq || "" === eq || "" === ek.info.name,
                    onPrimary: () => tp(),
                    shouldUseManaModal: G,
                }));
            break;
        case eI.pn.IDEAL_INFORMATION:
            (t = (0, i.jsx)(ep, {
                type: eA.he.IDEAL,
                onAccountHolderNameChange: (e) => eG({ info: { ...ek.info, name: e }, isValid: ek.isValid }),
                billingAddressInfo: ek.info,
            })),
                (n = (0, i.jsx)(tT, {
                    onBack: () => eC(eI.pn.PAYMENT_TYPE),
                    primaryCTA: ex.Ay.CTAType.CONTINUE,
                    primaryText: L.intl.string(L.t.PDTjLN),
                    primaryDisabled: "" === ek.info.name,
                    onPrimary: () => tp(),
                    shouldUseManaModal: G,
                }));
            break;
        case eI.pn.PRZELEWY24_INFORMATION:
            (t = (0, i.jsx)(ey, {
                type: eA.he.PRZELEWY24,
                onNameChange: (e) => eG({ info: { ...ek.info, name: e }, isValid: ek.isValid }),
                onEmailChange: (e) => eG({ info: { ...ek.info, email: e }, isValid: ek.isValid }),
                onP24BankChange: (e) => {
                    e3(e);
                },
                p24BankValue: e0,
                billingAddressInfo: ek.info,
            })),
                (n = (0, i.jsx)(tT, {
                    onBack: () => tm(eA.he.PRZELEWY24),
                    primaryCTA: ex.Ay.CTAType.CONTINUE,
                    primaryText: L.intl.string(L.t.PDTjLN),
                    primaryDisabled:
                        void 0 === ek.info.name ||
                        "" === ek.info.name ||
                        void 0 === ek.info.email ||
                        "" === ek.info.email ||
                        void 0 === e0 ||
                        "" === e0,
                    onPrimary: () => tp(),
                    shouldUseManaModal: G,
                }));
            break;
        case eI.pn.PAYPAL_INFORMATION:
            let tI = 0 !== eF.length && null != eB;
            (t = (0, i.jsx)(tW, {})),
                (n = (0, i.jsx)(tT, {
                    onBack: () => tm(eA.he.PAYPAL),
                    primaryCTA: ex.Ay.CTAType.CONTINUE,
                    primaryText: tI ? L.intl.string(L.t.PDTjLN) : L.intl.string(L.t.Djzd7L),
                    onPrimary: () => {
                        let e;
                        return tI
                            ? tp()
                            : void (null == (e = P.A.getLastURL())
                                  ? x()
                                  : (A.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_START" }), window.open(e)));
                    },
                    shouldUseManaModal: G,
                }));
            break;
        case eI.pn.VENMO_INFORMATION:
            let tg = 0 !== eW.length && null != eB;
            (t = (0, i.jsx)(tV, {})),
                (n = (0, i.jsx)(tT, {
                    onBack: () => tm(eA.he.VENMO),
                    primaryCTA: ex.Ay.CTAType.CONTINUE,
                    primaryText: tg ? L.intl.string(L.t.PDTjLN) : L.intl.string(L.t["4KoTLM"]),
                    onPrimary: () => (tg ? tp() : void g()),
                    shouldUseManaModal: G,
                }));
            break;
        case eI.pn.PAYMENT_REQUEST_INFORMATION:
            (t = (0, i.jsx)(tK, {})),
                (n = (0, i.jsx)(tT, { onBack: () => eC(eI.pn.PAYMENT_TYPE), shouldUseManaModal: G }));
            break;
        case eI.pn.CASH_APP_INFORMATION:
            let tv = null != eZ;
            (t = (0, i.jsx)(tH, {})),
                (n = (0, i.jsx)(tT, {
                    onBack: () => tm(eA.he.CASH_APP),
                    primaryCTA: ex.Ay.CTAType.CONTINUE,
                    primaryText: tv ? L.intl.string(L.t.PDTjLN) : L.intl.string(L.t["9ALP8w"]),
                    onPrimary: () => (tv ? tp() : tt()),
                    primaryDisabled: null == ed,
                    shouldUseManaModal: G,
                }));
            break;
        case eI.pn.ADDRESS:
            let tM = B && null != tr;
            (t = (0, i.jsx)(tO, {
                paymentModalArgs: l,
                paymentSourceType: es.methodType ?? eA.he.CARD,
                shouldUsePaymentElement: tM,
            })),
                (n = (0, i.jsx)(tD, {
                    paymentModalArgs: l,
                    shouldUseManaModal: G,
                    analyticsLocation: M,
                    overwriteSubscriptionPaymentSource: k,
                    handleStepChange: eC,
                    onPaymentRequestSourceFailed: e9,
                    paymentRequestPaymentMethod: eb,
                    completeSteps: e8,
                    paymentMethodSteps: es,
                    shouldUsePaymentElement: tM,
                    ...te,
                }));
            break;
        case eI.pn.AWAITING_AUTHENTICATION:
            t = (0, i.jsx)(tZ, {});
            break;
        default:
            throw Error(`Unexpected step: ${el}`);
    }
    let tR = B && tn,
        tb = tR ? "combined_stripe_elements" : void 0,
        tj = (0, i.jsxs)(h.Y, {
            className: tk.C9,
            staticClassName: tk.a2,
            animatedNodeClassName: tk.L2,
            fillParent: !0,
            overrideKey: tb,
            step: el,
            steps: es.steps,
            sideMargin: 20,
            children: [
                null != ei &&
                    (0, i.jsx)("div", { className: tf.Ns, children: (0, i.jsx)(C.w, { type: "info", children: ei }) }),
                tR &&
                    (0, i.jsx)(eP.e4, {
                        step: el,
                        analyticsContext:
                            null != v ? { activitySessionId: F, contextMetadata: W, analyticsData: v } : void 0,
                        paymentElementSelectedType: tr,
                        elementsRef: ts,
                        stripePaymentElementProps: to,
                        stripeAddressElementProps: tu,
                        addressElementKey: td,
                        billingAddressInfo: ek.info,
                        onSetupError: () => {
                            ta(), eC(eI.pn.PAYMENT_TYPE);
                        },
                        paymentElementFooter: (0, i.jsx)(eS.Z4, {
                            className: tf.SO,
                            stackingBehavior: "stack",
                            onComplete: () => {
                                setTimeout(() => V(eI.pn.REVIEW), 0);
                            },
                        }),
                    }),
                t,
            ],
        }),
        tL = el === eI.pn.PAYMENT_TYPE && 0 === o.length ? null : n;
    return b
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  O && (0, i.jsx)(eN.A, { className: tf.At, isEligibleForTrial: O }),
                  (0, i.jsxs)(eg.dZ, { children: [th, tj] }),
                  (0, i.jsx)(eg.UX, { children: tL }),
              ],
          })
        : (0, i.jsx)(e2.A, {
              shouldUseManaModal: G,
              steps: _ ?? es.steps,
              currentStep: I ?? el,
              overrideKey: tb,
              paymentError: l.paymentError,
              header: N,
              hideBreadcrumbs: R,
              body: tj,
              footer: tL,
          });
}
function tz(e) {
    let {
            defaultPaymentSourceId: t,
            paymentSources: n,
            hasFetchedPaymentSources: l,
        } = (0, c.cf)([ez.A], () => ({
            defaultPaymentSourceId: void 0 !== e ? e : ez.A.defaultPaymentSourceId,
            paymentSources: ez.A.paymentSources,
            hasFetchedPaymentSources: ez.A.hasFetchedPaymentSources,
        })),
        r = (0, c.bG)([e6], () => e6.cashAppPayComponent),
        i = (0, c.bG)([eu.A], () => eu.A.data?.allowed_payment_source_types ?? null);
    (0, es.Ay)(() => {
        (0, f.j)().then((e) => {
            e.client
                .create({ authorization: T.Gg3.BRAINTREE.KEY })
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
                            r = () => {
                                A.h.unsubscribe("BRAINTREE_CREATE_CLIENT_SUCCESS", r), setTimeout(l, 0);
                            };
                        A.h.subscribe("BRAINTREE_CREATE_CLIENT_SUCCESS", r);
                    })
                        .then(() => {
                            N(), I();
                        })
                        .catch((e) => {
                            S.pM(e);
                        }),
                        A.h.dispatch({ type: "BRAINTREE_CREATE_CLIENT_SUCCESS", client: e });
                })
                .catch(() => A.h.dispatch({ type: "BRAINTREE_CREATE_CLIENT_FAIL" }));
        }),
            l || (0, y.$o)();
    }),
        a.useEffect(() => {
            null == r && null != i && i.includes(eA.he.CASH_APP) && e8();
        }, [i, r]);
    let [s, o] = a.useState(t),
        u = (0, eo.A)(t);
    t !== u && null != t && null == s && o(t);
    let [d, p] = a.useState(() => ({ info: tY, isValid: !1 })),
        [m, h] = a.useState(() => ({ info: tF, isValid: !1 })),
        [C, E] = a.useState(""),
        [_, x] = a.useState(""),
        [g, v] = a.useState(() => ({ token: null })),
        [R, b, L, O, D] = (0, c.yK)([j.A], () => [
            j.A.braintreeEmail,
            j.A.braintreeNonce,
            j.A.error,
            j.A.venmoUsername,
            j.A.adyenPaymentData,
        ]),
        [w, U] = (0, c.yK)([eq.A], () => [eq.A.error, eq.A.isAwaitingAuthentication]);
    a.useEffect(() => {
        let e = (e) => {
            let { billingAddress: t } = e;
            h({ info: t, isValid: t.country.length > 0 });
        };
        return (
            A.h.subscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e),
            () => {
                A.h.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e), (0, M.ET)();
            }
        );
    }, []);
    let [k, G] = a.useState(!1),
        [Y, F] = a.useState(!1),
        [B, W] = a.useState(null),
        V = a.useRef(null),
        H = (0, c.bG)([eq.A], () => eq.A.isAwaitingAuthentication),
        [K, Z] = (0, c.yK)([e$.A], () => [e$.A.purchaseTokenAuthState, e$.A.purchaseTokenHash]);
    return (
        a.useEffect(() => {
            null != B && null != V.current && V.current.scrollIntoView({ behavior: "smooth" });
        }, [B]),
        {
            paymentSources: n,
            paymentSourceId: s,
            hasFetchedPaymentSources: l,
            setPaymentSourceId: o,
            creditCardState: d,
            setCreditCardState: p,
            tokenState: g,
            setTokenState: v,
            billingAddressState: m,
            setBillingAddressState: h,
            isSubmittingCurrentStep: k,
            setIsSubmittingCurrentStep: G,
            hasRedirectURL: Y,
            setHasRedirectURL: F,
            braintreeEmail: R,
            braintreeNonce: b,
            venmoUsername: O,
            adyenPaymentData: D,
            paymentError: null != w ? w : L,
            paymentAuthenticationState: U ? e0.oc.PENDING : null != w ? e0.oc.ERROR : e0.oc.NONE,
            purchaseError: B,
            setPurchaseError: W,
            purchaseErrorBlockRef: V,
            isAuthenticating: H,
            purchaseTokenAuthState: K,
            purchaseTokenHash: Z,
            epsBankState: _,
            setEpsBankState: x,
            p24BankState: C,
            setP24BankState: E,
        }
    );
}
