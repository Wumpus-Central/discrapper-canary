n.d(t, { Y: () => tK, _V: () => tZ });
var l,
    a,
    i = n(627968),
    r = n(64700),
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
    y = n(636537),
    E = n(753390),
    P = n(70142),
    S = n(739508),
    _ = n(184015),
    T = n(723702),
    f = n(652215);
function I() {
    let e = P.A.getClient();
    null != e &&
        (0, _.j)().then((t) => {
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
                        return y.Bo.post({
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
    (0, T.isDesktop)() && (t = (0, E.jf)(f.hes.PAYPAL)),
        t
            .then(() => e.tokenize({ flow: "vault" }))
            .then((e) => {
                let { email: t, firstName: n, lastName: l, billingAddress: a } = e.details;
                A.h.dispatch({
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
                [f.Q7O.VENMO_APP_CANCELED, f.Q7O.VENMO_DESKTOP_CANCELED, f.Q7O.VENMO_CANCELED].includes(n)
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
    b = n(292666),
    j = n(812745),
    R = n(825755),
    L = n(375708);
class O extends r.PureComponent {
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
        return (0, i.jsx)(b.k, {
            label: L.intl.string(L.t.QQBAos),
            leading: { type: "image", src: (0, j.Nj)(j.Ay.Types.PAYPAL) },
            value: e,
            readOnly: !0,
            placeholder: null == t ? L.intl.string(L.t.dte2M9) : L.intl.string(L.t.hopw7X),
        });
    }
}
let D = c.Ay.connectStores([P.A, R.A], () => ({
    braintreeEmail: R.A.braintreeEmail,
    paypalClient: P.A.getPayPalClient(),
}))(O);
var w = n(534514),
    U = n(834730),
    k = n(527142);
class Y extends r.PureComponent {
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
                (0, i.jsx)(j.Ay, { type: j.Ay.Types.VENMO, size: j.y3.MEDIUM, className: k.Z }),
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
let G = c.Ay.connectStores([P.A, R.A], () => ({ venmoUsername: R.A.venmoUsername, venmoClient: P.A.getVenmoClient() }))(
    Y,
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
    let t = r.useRef(null),
        { stripeType: n, flipped: l, updateCompleted: a, onFocus: o, onBlur: u } = e,
        [c, d] = r.useState(j.Be.UNKNOWN),
        [p, m] = r.useState(!1),
        [h, C] = r.useState(!1),
        [A, y] = r.useState(null),
        [E, P] = r.useState({}),
        S = (0, s.useElements)(),
        _ = r.useCallback(() => {
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
        T = r.useCallback(
            (e) => {
                h || e.empty || C(!0), null != a && a(e.complete), null != e.error && m(!1);
            },
            [h, a],
        ),
        f = r.useCallback(() => {
            m(!0), o?.();
        }, [o]),
        I = r.useCallback(() => {
            m(!1), u?.();
        }, [u]),
        N = r.useCallback(() => {
            if (null != S)
                switch (n) {
                    case "cardNumber": {
                        let e = S.getElement(s.CardNumberElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            c !== e.brand && d(e.brand),
                                e.empty && h
                                    ? y(L.intl.string(L.t.eOIfuy))
                                    : null != e.error
                                      ? y(L.intl.string(L.t.x4pWtJ))
                                      : y(null),
                                T(e);
                        }),
                            e.on("focus", f),
                            e.on("blur", I);
                        break;
                    }
                    case "cardExpiry": {
                        let e = S.getElement(s.CardExpiryElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            null != e.error || (e.empty && h) ? y(L.intl.string(L.t["9/zZdl"])) : y(null), T(e);
                        }),
                            e.on("focus", f),
                            e.on("blur", I);
                        break;
                    }
                    case "cardCvc": {
                        let e = S.getElement(s.CardCvcElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            null != e.error || (e.empty && h) ? y(L.intl.string(L.t.ro4isZ)) : y(null), T(e);
                        }),
                            e.on("focus", f),
                            e.on("blur", I);
                    }
                }
        }, [I, T, f, c, S, h, n]);
    r.useEffect(
        () => (
            N(),
            () => {
                _();
            }
        ),
        [N, _],
    );
    let x = (0, q.r)(Z.A.colors.TEXT_SUBTLE).hex(),
        g = (0, q.r)(Z.A.colors.TEXT_STRONG).hex();
    function v() {
        return W()($.vB, { [$.Tn]: null !== A, [$.iH]: p, [$.yD]: "cardNumber" === n });
    }
    return (
        r.useLayoutEffect(() => {
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
                                    (0, i.jsx)(j.Ay, { className: $.Ie, type: c, flipped: l }),
                                    (0, i.jsx)(s.CardNumberElement, {
                                        options: { style: E, placeholder: L.intl.string(L.t.gPRHfw), disableLink: !1 },
                                        className: v(),
                                    }),
                                ],
                            });
                        case "cardExpiry":
                            return (0, i.jsx)(s.CardExpiryElement, {
                                options: { style: E, placeholder: L.intl.string(L.t.xeEWQ6) },
                                className: v(),
                            });
                        case "cardCvc":
                            return (0, i.jsx)(s.CardCvcElement, {
                                options: { style: E, placeholder: L.intl.string(L.t.wZz04F) },
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
        l = r.useRef(t),
        [a, s] = r.useState(!1),
        [o, u] = r.useState({}),
        [c, d] = r.useState({ name: "", country: "", postalCode: "" }),
        [p, m] = r.useState({}),
        [h, C] = r.useState({}),
        { setFocusLockDisabled: A } = r.useContext(V.M);
    r.useEffect(() => () => {
        void 0 !== A && A(!1);
    });
    let y = r.useCallback(() => {
        void 0 !== A && A(!0);
    }, [A]);
    function E(e, t) {
        !!o[e] !== t && u((n) => ({ ...n, [e]: t }));
    }
    let P = r.useCallback(
        function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = {};
            return (e || p.name) && "" === c.name && (t.name = L.intl.string(L.t.lIkVsi)), t;
        },
        [p, c],
    );
    return (
        r.useEffect(() => {
            let e = o.cardNumber && o.cardExpiry && o.cardCvc && 0 === Object.keys(P(!0)).length;
            l.current({ name: c.name }, !!e);
        }, [o, c, P]),
        (0, i.jsxs)("div", {
            children: [
                H.default.getCurrentUser()?.nsfwAllowed
                    ? (0, i.jsxs)("div", {
                          className: Q.Rm,
                          children: [
                              (0, i.jsx)("div", { className: W()(j.y3.SMALL, Q.eo, Q.Ud) }),
                              (0, i.jsx)("div", { className: W()(j.y3.SMALL, Q.DR, Q.Ud) }),
                              (0, i.jsx)("div", { className: W()(j.y3.SMALL, Q.k4, Q.Ud) }),
                              (0, i.jsx)("div", { className: W()(j.y3.SMALL, Q.a3, Q.Ud) }),
                              (0, i.jsx)("div", { className: W()(j.y3.SMALL, Q.CY, Q.Ud) }),
                              (0, i.jsx)("div", { className: W()(j.y3.SMALL, Q.Q5, Q.Ud) }),
                              (0, i.jsx)("div", { className: W()(j.y3.SMALL, Q.YA, Q.Ud) }),
                          ],
                      })
                    : (0, i.jsxs)("div", {
                          className: Q.Rm,
                          children: [
                              (0, i.jsx)("div", { className: W()(j.y3.SMALL, Q.aq, Q.Ud) }),
                              (0, i.jsx)("div", { className: W()(j.y3.SMALL, Q.VX, Q.Ud) }),
                              (0, i.jsx)("div", { className: W()(j.y3.SMALL, Q.Yi, Q.Ud) }),
                              (0, i.jsx)("div", { className: W()(j.y3.SMALL, Q.qR, Q.Ud) }),
                              (0, i.jsx)("div", { className: W()(j.y3.SMALL, Q.m2, Q.Ud) }),
                              (0, i.jsx)("div", { className: W()(j.y3.SMALL, Q.Ij, Q.Ud) }),
                              (0, i.jsx)("div", { className: W()(j.y3.SMALL, Q._V, Q.Ud) }),
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
                                            updateCompleted: (e) => E("cardNumber", e),
                                            onFocus: y,
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
                                            updateCompleted: (e) => E("cardExpiry", e),
                                            onFocus: y,
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
                                            updateCompleted: (e) => E("cardCvc", e),
                                            onFocus: () => {
                                                y(), s(!0);
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
                            C(a);
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
var ea = n(723429);
let ei = (e) => {
        let { billingError: t, onCardInfoChange: n } = e,
            l = null != t && (null == t.code || el(t) === en.CREDIT_CARD_INFORMATION);
        return (0, i.jsxs)(r.Fragment, {
            children: [
                l
                    ? (0, i.jsx)("div", {
                          className: ea.QK,
                          children: (0, i.jsx)(C.w, { type: "critical", children: L.intl.string(L.t["4vnhKV"]) }),
                      })
                    : null,
                (0, i.jsx)(et, { onCardInfoChange: n, error: t }),
            ],
        });
    },
    er = (e) => {
        let { className: t, submitting: n, stripePaymentMethod: l } = e,
            { card: a } = l ?? {},
            r = null != a ? j.Ay.getType(a.brand) : j.Ay.Types.UNKNOWN;
        return (0, i.jsx)("div", {
            className: t,
            children: (0, i.jsx)(b.k, {
                label: L.intl.string(L.t["mmDvV+"]),
                leading: { type: "image", src: (0, j.Nj)(r) },
                value: n && null != a ? L.intl.formatToPlainString(L.t.bCynoK, a) : void 0,
                readOnly: !0,
                placeholder: L.intl.string(L.t.bWMH78),
            }),
        });
    };
var es = n(964486),
    eo = n(721101),
    eu = n(648335),
    ec = n(384365);
let ed = function (e) {
    let { onAccountHolderNameChange: t, billingAddressInfo: n } = e,
        l = r.useRef(null);
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
    eC = n(818348),
    eA = n(198650);
let ey = function (e) {
    let t = (0, eh.Ay)(),
        n = r.useRef(null),
        [l, a] = r.useState({}),
        o = (0, q.r)(Z.A.colors.BACKGROUND_BASE_LOWER).hex();
    switch (
        (r.useLayoutEffect(() => {
            let { current: e } = n;
            if (null == e) return;
            let t = window.getComputedStyle(e),
                l = window.getComputedStyle(e, "::placeholder"),
                i = t.getPropertyValue("font-family"),
                r = t.getPropertyValue("font-weight");
            a({
                base: {
                    fontFamily: i,
                    fontWeight: r,
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
        case eC.he.PRZELEWY24: {
            let a = (0, ep.M)(t) ? "/assets/f4150b3aed6c4679.svg" : "/assets/8b825aafb2e4dbed.svg",
                { onNameChange: r, onEmailChange: o, onP24BankChange: u, p24BankValue: c, billingAddressInfo: d } = e;
            return (0, i.jsx)("div", {
                className: eA.rf,
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
                            onChange: (e) => r(e),
                            value: d.name,
                        }),
                        (0, i.jsxs)(em.B, {
                            gap: 4,
                            children: [
                                (0, i.jsx)(U.E, { variant: "text-sm/semibold", children: L.intl.string(L.t.De3b8t) }),
                                (0, i.jsx)(s.P24BankElement, {
                                    options: { value: c, style: l },
                                    onChange: (e) => u(e.value),
                                }),
                                (0, i.jsx)("div", {
                                    className: eA.je,
                                    children: (0, i.jsx)("img", { src: a, alt: "Przelewy24" }),
                                }),
                            ],
                        }),
                    ],
                }),
            });
        }
        case eC.he.EPS: {
            let { onAccountHolderNameChange: a, onEPSBankChange: r, epsBankValue: o, billingAddressInfo: u } = e,
                c = (0, ep.M)(t) ? "/assets/025b24b0055c8d81.svg" : "/assets/1dae7d71a65fd90f.svg";
            return (0, i.jsx)("div", {
                className: eA.rf,
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
                                (0, i.jsx)(s.EpsBankElement, {
                                    options: { value: o, style: l },
                                    onChange: (e) => r(e.value),
                                }),
                                (0, i.jsx)("div", {
                                    className: eA.je,
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
var eE = n(211528);
n(426398);
var eP = n(944355),
    eS = n(94420),
    e_ = n(626584),
    eT = n(834252),
    ef = n(166532),
    eI = n(69494),
    eN = n(19311),
    ex = n(482132),
    eg = n(615310),
    ev = n(364840),
    eM = n(73825),
    eb = n(558620),
    ej = n(683433),
    eR = n(36167),
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
let eG = new eY(A.h, {
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
            {
                setSelectedSkuId: s,
                setSelectedPlanId: o,
                contextMetadata: u,
            } = (0, eS.t4)((e) => ({
                setSelectedSkuId: e.setSelectedSkuId,
                setSelectedPlanId: e.setSelectedPlanId,
                contextMetadata: e.contextMetadata,
            })),
            {
                browserCheckoutState: d,
                browserCheckoutStateLoadId: p,
                browserCheckoutStateSkuId: m,
                browserCheckoutStatePlanId: h,
            } = (0, c.cf)([eG], () => ({
                browserCheckoutState: eG.browserCheckoutState,
                browserCheckoutStateLoadId: eG.loadId,
                browserCheckoutStateSkuId: eG.skuId,
                browserCheckoutStatePlanId: eG.planId,
            })),
            C = (0, eb.A)(),
            { isGift: A } = (0, eL.Pv)(),
            [y, P] = r.useState(!1);
        switch (n) {
            case ef.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
                t = f.do8.GOOGLE_PAY;
                break;
            case ef.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
                t = f.do8.APPLE_PAY;
        }
        return (
            r.useEffect(() => {
                let e = setTimeout(() => {
                    y ||
                        (P(!0),
                        (0, E.Ze)(u.loadId),
                        (0, eR.my)(
                            {
                                planId: C?.id ?? eF.gD.PREMIUM_MONTH_TIER_2,
                                isGift: A,
                                loadId: u.loadId,
                                paymentMethodType: t,
                            },
                            a,
                        ));
                }, 1e3);
                return () => clearTimeout(e);
            }, [C, A, u, a, P, y, t]),
            r.useEffect(() => {
                null !== m && (eF.oz.includes(m) && ((0, eM.ur)(m), (0, E.hP)()), s(m)),
                    null !== h && o(h),
                    p === u.loadId && d === eO.DONE && l();
            }, [s, o, d, p, m, h, u, l]),
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
    eV = (e) => {
        let { onPrimaryClick: t, onBackClick: n } = e;
        return (0, i.jsx)(ev.j, {
            children: (0, i.jsxs)("div", {
                className: eB.kL,
                children: [
                    (0, i.jsx)(ej.A, { onClick: n }),
                    (0, i.jsx)(ej.F, { onClick: t, children: L.intl.string(L.t["4Qvmmj"]) }),
                ],
            }),
        });
    };
var eH = n(921925),
    eK = n(615405),
    eZ = n(153084),
    eq = n(295405),
    ez = n(71319),
    e$ = n(67480),
    eJ = n(174459),
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
let e7 = new e4(A.h, {
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
    return await y.Bo.get({ url: f.Rsh.BILLING_ADYEN_PAYMENT_METHODS, oldFormErrors: !0, rejectWithError: !1 });
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
        A.h.dispatch({ type: "ADYEN_CREATE_CLIENT_SUCCESS", client: l }),
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
                            if (n) A.h.dispatch({ type: "ADYEN_CASH_APP_PAY_SUBMIT_SUCCESS", data: t });
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
                A.h.dispatch({ type: "ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS", component: t });
            })(l);
    } catch (e) {
        (0, S.pM)(e), A.h.dispatch({ type: "ADYEN_CREATE_CLIENT_FAIL" });
    }
}
function e8() {
    let e = e7.cashAppPayComponent;
    if (null == e) throw Error("Adyen CashAppPay component must be created before submitting.");
    e.submit();
}
var e9 = n(40417);
class te extends r.PureComponent {
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
                (0, i.jsx)(j.Ay, { type: j.Ay.Types.CASH_APP, size: j.y3.MEDIUM, className: e9.K }),
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
let tt = c.Ay.connectStores([e7, R.A], () => ({
    cashAppPayComponent: e7.cashAppPayComponent,
    adyenPaymentData: R.A.adyenPaymentData,
}))(te);
var tn = n(73079),
    tl = n(459357),
    ta = n(550238),
    ti = n(869177),
    tr = n(71532),
    ts = n(218075);
let to = [ef.pn.PAYMENT_TYPE],
    tu = [ef.pn.PAYMENT_TYPE, ef.pn.CREDIT_CARD_INFORMATION, ef.pn.ADDRESS],
    tc = [ef.pn.PAYMENT_TYPE, ef.pn.PAYPAL_INFORMATION, ef.pn.ADDRESS],
    td = [ef.pn.PAYMENT_TYPE, ef.pn.VENMO_INFORMATION, ef.pn.ADDRESS],
    tp = [ef.pn.PAYMENT_TYPE, ef.pn.CASH_APP_INFORMATION, ef.pn.ADDRESS],
    tm = [ef.pn.PAYMENT_TYPE, ef.pn.PRZELEWY24_INFORMATION, ef.pn.ADDRESS],
    th = [ef.pn.PAYMENT_TYPE, ef.pn.EPS_INFORMATION, ef.pn.ADDRESS],
    tC = [ef.pn.PAYMENT_TYPE, ef.pn.IDEAL_INFORMATION, ef.pn.ADDRESS],
    tA = [ef.pn.PAYMENT_TYPE, ef.pn.ADDRESS],
    ty = {
        SHARED_ADD_PAYMENT_STEPS: to,
        SHARED_CREDIT_CARD_STEPS: tu,
        SHARED_PAYPAL_STEPS: tc,
        SHARED_VENMO_STEPS: td,
        SHARED_PRZELEWY24_STEPS: tm,
        SHARED_EPS_STEPS: th,
        SHARED_IDEAL_STEPS: tC,
        SHARED_CASH_APP_STEPS: tp,
        SHARED_TYPE_AND_ADDRESS_STEPS: tA,
    },
    tE = {
        SHARED_ADD_PAYMENT_STEPS: [ef.pn.PAYMENT_ELEMENT],
        SHARED_CREDIT_CARD_STEPS: [ef.pn.PAYMENT_ELEMENT, ef.pn.ADDRESS],
        SHARED_PAYPAL_STEPS: [ef.pn.PAYMENT_ELEMENT, ef.pn.PAYPAL_INFORMATION, ef.pn.ADDRESS],
        SHARED_VENMO_STEPS: [ef.pn.PAYMENT_ELEMENT, ef.pn.VENMO_INFORMATION, ef.pn.ADDRESS],
        SHARED_CASH_APP_STEPS: [ef.pn.PAYMENT_ELEMENT, ef.pn.CASH_APP_INFORMATION, ef.pn.ADDRESS],
        SHARED_PRZELEWY24_STEPS: [ef.pn.PAYMENT_ELEMENT, ef.pn.PRZELEWY24_INFORMATION, ef.pn.ADDRESS],
        SHARED_EPS_STEPS: [ef.pn.PAYMENT_ELEMENT, ef.pn.EPS_INFORMATION, ef.pn.ADDRESS],
        SHARED_IDEAL_STEPS: [ef.pn.PAYMENT_ELEMENT, ef.pn.ADDRESS],
        SHARED_TYPE_AND_ADDRESS_STEPS: [ef.pn.PAYMENT_ELEMENT, ef.pn.ADDRESS],
    };
var tP = n(801753);
function tS(e) {
    return () => (null != R.A.error && (0, M.ET)(), e());
}
function t_(e) {
    let { onPrimary: t, onBack: n, ...l } = e,
        a = t;
    null != t && (a = tS(t));
    let r = n;
    return null != n && (r = tS(n)), (0, i.jsx)(eN.Ay, { ...l, onPrimary: a, onBack: r });
}
function tT(e) {
    let { paymentSourceTypeRestrictions: t } = e,
        n = null != t && t.length > 0 ? ts.fU.ADD_NEW_PAYMENT_METHOD : void 0,
        { enabled: l } = (0, tl.c)({ location: "AddPaymentStep" });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(ts.je, { paymentRestrictionBannerType: n }),
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
                allowDesktopRedirectPurchase: r,
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
                PAYPAL_STEPS: y,
                VENMO_STEPS: P,
                PAYMENT_REQUEST_STEPS: S,
                PRZELEWY24_STEPS: _,
                EPS_STEPS: f,
                IDEAL_STEPS: I,
                CASH_APP_STEPS: N,
                setConnectorPaymentRequestReady: x,
                connectorPaymentRequestRef: g,
            } = e,
            { activitySessionId: v } = (0, eT.P5)(),
            b = (0, eS.t4)((e) => e.contextMetadata),
            { setBillingAddressState: j } = o,
            O = (e, l) => {
                switch (e) {
                    case eC.he.CARD:
                        r ? u(ef.pn.AWAITING_BROWSER_CHECKOUT) : (c(A), u(ef.pn.CREDIT_CARD_INFORMATION));
                        break;
                    case eC.he.PAYPAL:
                        c(y), u(ef.pn.PAYPAL_INFORMATION);
                        break;
                    case eC.he.VENMO:
                        c(P), u(ef.pn.VENMO_INFORMATION);
                        break;
                    case eC.he.PAYMENT_REQUEST:
                        r && "googlePay" === l
                            ? u(ef.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY)
                            : r && "applePay" === l
                              ? u(ef.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY)
                              : (c(S), u(ef.pn.PAYMENT_REQUEST_INFORMATION));
                        break;
                    case eC.he.PRZELEWY24:
                        c(_), u(ef.pn.PRZELEWY24_INFORMATION);
                        break;
                    case eC.he.EPS:
                        c(f), u(ef.pn.EPS_INFORMATION);
                        break;
                    case eC.he.IDEAL:
                        c(I), u(ef.pn.IDEAL_INFORMATION);
                        break;
                    case eC.he.CASH_APP:
                        c(N), u(ef.pn.CASH_APP_INFORMATION);
                        break;
                    case eC.he.GIROPAY:
                    case eC.he.PAYSAFE_CARD:
                    case eC.he.GCASH:
                    case eC.he.GRABPAY_MY:
                    case eC.he.MOMO_WALLET:
                    case eC.he.KAKAOPAY:
                    case eC.he.GOPAY_WALLET:
                    case eC.he.BANCONTACT:
                        c({ steps: [...t, ...tA, ...n], methodType: e }), u(ef.pn.ADDRESS);
                }
                null != R.A.error && (0, M.ET)();
            },
            D = async (e, t) => {
                if (((0, M.mf)(e), null == e)) return void s();
                d(e);
                let { billingAddressInfo: n } = (0, tr.uK)(e),
                    a = (0, ta.Qd)(n);
                if (((null == n.name || "" === n.name) && null != t && (n.name = t), j({ isValid: a, info: n }), !a))
                    return void u(ef.pn.ADDRESS);
                try {
                    var i;
                    (i = await (0, E.Tv)(e, n, l)), j((e) => ({ ...e, info: n })), c(S), h(i);
                } catch (e) {
                    s();
                }
            };
        if (p === ef.pn.ATTEMPT_GOOGLE_PAY || p === ef.pn.ATTEMPT_APPLE_PAY) {
            let e = L.intl.string(p === ef.pn.ATTEMPT_APPLE_PAY ? L.t.czhXDv : L.t.Zj2xQ0);
            return (0, i.jsx)(ti.V, {
                onChooseType: O,
                paymentRequestWallet: p === ef.pn.ATTEMPT_APPLE_PAY ? "applePay" : "googlePay",
                onStripePaymentMethodReceived: D,
                onPaymentRequestFailure: () => {
                    O(eC.he.CARD), m(e);
                },
                onValidPaymentRequest: () => x(!0),
                paymentRequestRef: g,
            });
        }
        let w = !(0, T.isDesktop)() || r;
        return (0, i.jsx)(tT, {
            onChooseType: O,
            onStripePaymentMethodReceived: D,
            paymentRequestWallets: w ? ["googlePay", "applePay"] : [],
            isEligibleForTrial: a,
            paymentRequestPaymentContext: { contextMetadata: b, activitySessionId: v },
            paymentSourceTypeRestrictions: C,
        });
    },
    tI = (e) => {
        let {
            onReturn: t,
            shouldUseManaModal: n,
            handleStepChange: l,
            currentStep: a,
            connectorPaymentRequestReady: r,
            showConnectorPaymentRequest: s,
        } = e;
        if (a === ef.pn.ATTEMPT_GOOGLE_PAY || a === ef.pn.ATTEMPT_APPLE_PAY) {
            let e = L.intl.string(a === ef.pn.ATTEMPT_APPLE_PAY ? L.t.WoXvJL : L.t.wnVVr0);
            return (0, i.jsx)(t_, {
                onBack: () => l(ef.pn.PAYMENT_TYPE),
                primaryCTA: eN.Ay.CTAType.CONTINUE,
                primaryText: e,
                onPrimary: () => s(),
                primaryDisabled: !r,
                shouldUseManaModal: n,
            });
        }
        return (0, i.jsx)(t_, { onBack: t, shouldUseManaModal: n });
    };
var tN = n(198970),
    tx = n(546605),
    tg = n(116673),
    tv = n(773669);
let tM = (e) => {
        let t,
            { billingAddressInfo: n, billingError: l, onBillingAddressChange: a, paymentSourceType: s } = e,
            o = null != l && (null == l.code || el(l) === en.ADDRESS),
            u = (0, c.bG)([tv.default], () => tv.default.locale);
        switch (s) {
            case f.hes.GIROPAY:
            case f.hes.PAYSAFE_CARD:
            case f.hes.GCASH:
            case f.hes.GRABPAY_MY:
            case f.hes.MOMO_WALLET:
            case f.hes.KAKAOPAY:
            case f.hes.GOPAY_WALLET:
            case f.hes.BANCONTACT:
                t = "en-US" === u ? tN.Ay.Layouts.MODAL_US_WITH_NAME : tN.Ay.Layouts.MODAL_INTL_WITH_NAME;
                break;
            case f.hes.VENMO:
            case f.hes.CASH_APP:
                t = tN.Ay.Layouts.MODAL_US_WITH_NAME;
                break;
            default:
                t = "en-US" === u ? tN.Ay.Layouts.MODAL_US : tN.Ay.Layouts.MODAL_INTL;
        }
        let d = (0, tx.vg)("AddressStep"),
            p = (0, tg.z)();
        0 === n.country.length && null != p && p.length > 0 && (n.country = p[0]);
        let m = (0, c.bG)([H.default], () => H.default.getCurrentUser()?.storeCountry?.isLocked === !0),
            h = d && m ? L.intl.string(L.t.Pg2hU0) : null;
        return (0, i.jsxs)(r.Fragment, {
            children: [
                o
                    ? (0, i.jsx)("div", {
                          className: ea.QK,
                          children: (0, i.jsx)(C.w, { type: "critical", children: L.intl.string(L.t.vZ8y7l) }),
                      })
                    : null,
                (0, i.jsx)(tN.Ay, {
                    className: ea.__invalid_formItem,
                    onBillingAddressChange: a,
                    error: l,
                    layout: t,
                    allowedBillingAddressCountries: p,
                    countryHelperText: h,
                    ...n,
                }),
            ],
        });
    },
    tb = new e_.A("AddPaymentAddressStep.tsx");
function tj(e) {
    let { billingAddressInfo: t, onBillingAddressChange: n, paymentSourceType: l } = e,
        a = (0, c.bG)([R.A], () => R.A.error);
    return (0, i.jsx)(tM, { billingAddressInfo: t, billingError: a, onBillingAddressChange: n, paymentSourceType: l });
}
function tR(e) {
    let { paymentModalArgs: t, shouldUsePaymentElement: n, paymentSourceType: l } = e,
        { billingAddressState: a, setBillingAddressState: r } = t;
    return n
        ? null
        : (0, i.jsx)(tj, {
              billingAddressInfo: a.info,
              onBillingAddressChange: (e, t) => {
                  r({ info: { ...a.info, ...e }, isValid: t });
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
            handleStepChange: r,
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
        { stripe: y } = (0, eT.P5)(),
        {
            tokenState: P,
            isSubmittingCurrentStep: S,
            billingAddressState: _,
            setIsSubmittingCurrentStep: T,
            hasRedirectURL: f,
            setHasRedirectURL: I,
            braintreeNonce: N,
            adyenPaymentData: x,
            isAuthenticating: g,
            epsBankState: v,
            p24BankState: M,
        } = t,
        b = async () => {
            T(!0);
            let e = A ? p : d.methodType,
                t = [
                    y,
                    h.current,
                    { billingAddress: _.info, paymentSourceType: e ?? eC.he.UNKNOWN, lastConfirmedSetupIntentRef: C },
                    l,
                ];
            switch (e) {
                case eC.he.PAYMENT_REQUEST:
                    if (A) {
                        try {
                            let e = await (0, E.im)(...t);
                            c(e);
                        } catch (e) {
                            T(!1), tb.warn("Error confirming Payment Element source for Payment Request: ", e);
                        }
                        break;
                    }
                    if (null == o) throw (s(), (0, E.i0)("Missing paymentRequestPaymentMethod"));
                    c(await (0, E.Tv)(o, _.info, l));
                    break;
                case eC.he.CARD:
                    try {
                        let e = A ? await (0, E.im)(...t) : await (0, E.u6)(y, P.token, _.info, l);
                        c(e);
                    } catch {}
                    break;
                case eC.he.VENMO:
                case eC.he.PAYPAL:
                    try {
                        u()(null != N, "Missing braintreeNonce");
                        let e = await (0, E.u1)(N, _.info, l);
                        c(e);
                    } catch {}
                    break;
                case eC.he.EPS:
                    try {
                        let e = await (0, E.Z9)(y, v, _.info, l);
                        c(e);
                    } catch (e) {
                        tb.warn(e);
                    }
                    break;
                case eC.he.IDEAL:
                    try {
                        let e = A ? await (0, E.im)(...t) : await (0, E.EB)(y, _.info, l);
                        c(e);
                    } catch (e) {
                        tb.warn(e);
                    }
                    break;
                case eC.he.PRZELEWY24:
                    try {
                        if (void 0 === M) throw (0, E.i0)("Bank required for Przelewy24");
                        let e = await (0, E.TD)(y, { p24Bank: M }, _.info, l);
                        c(e);
                    } catch {}
                    break;
                case eC.he.PAYSAFE_CARD:
                case eC.he.GRABPAY_MY:
                    try {
                        let t = await (0, E.A8)(_.info, e, l);
                        c(t);
                    } catch {}
                    break;
                case eC.he.GCASH:
                case eC.he.MOMO_WALLET:
                case eC.he.KAKAOPAY:
                case eC.he.GOPAY_WALLET:
                    try {
                        let { redirectConfirmation: t } = await (0, E.$M)(_.info, e, l);
                        I(t);
                    } catch {}
                    break;
                case eC.he.GIROPAY:
                case eC.he.BANCONTACT:
                    try {
                        let t = await (0, E.bw)(y, _.info, e, l);
                        c(t);
                    } catch {}
                    break;
                case eC.he.CASH_APP:
                    try {
                        u()(null != x, "Missing adyenPaymentData");
                        let { paymentSource: t } = await (0, E.$M)(_.info, e, l, x, a);
                        u()(null != t, "Cash App Pay Payment Source missing"), c(t);
                    } catch {}
                    break;
                default:
                    throw Error("unknown step not handled");
            }
            f || T(!1);
        },
        j = d.methodType,
        { backStep: R } = A
            ? { backStep: ef.pn.PAYMENT_ELEMENT }
            : ((e) => {
                  switch (e) {
                      case eC.he.CARD:
                          return { backStep: ef.pn.CREDIT_CARD_INFORMATION };
                      case eC.he.PAYPAL:
                          return { backStep: ef.pn.PAYPAL_INFORMATION };
                      case eC.he.VENMO:
                          return { backStep: ef.pn.VENMO_INFORMATION };
                      case eC.he.GIROPAY:
                      case eC.he.PAYSAFE_CARD:
                      case eC.he.GCASH:
                      case eC.he.GRABPAY_MY:
                      case eC.he.MOMO_WALLET:
                      case eC.he.KAKAOPAY:
                      case eC.he.GOPAY_WALLET:
                      case eC.he.BANCONTACT:
                          return { backStep: ef.pn.PAYMENT_TYPE };
                      case eC.he.EPS:
                          return { backStep: ef.pn.EPS_INFORMATION };
                      case eC.he.IDEAL:
                          return { backStep: ef.pn.IDEAL_INFORMATION };
                      case eC.he.PRZELEWY24:
                          return { backStep: ef.pn.PRZELEWY24_INFORMATION };
                      case eC.he.CASH_APP:
                          return { backStep: ef.pn.CASH_APP_INFORMATION };
                      default:
                          return { backStep: ef.pn.PAYMENT_TYPE };
                  }
              })(j),
        O = A ? () => m(void 0) : () => r(R);
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
let tO = new e_.A("PaymentElementStepFooter.tsx"),
    tD = (e) => {
        let { stripe: t } = (0, eT.P5)(),
            {
                shouldUseManaModal: n,
                paymentModalArgs: l,
                handleStepChange: a,
                setPaymentMethodSteps: s,
                onBack: o,
                primarySubmitting: u,
                primaryDisabled: c,
                PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: d,
            } = e,
            { setIsSubmittingCurrentStep: p, setBillingAddressState: m } = l,
            { paymentElementSelectedType: h, combinedStripeElementsRef: C, remountAddressElement: A } = e,
            y = r.useCallback(async () => {
                p(!0);
                try {
                    if (null == h || !(0, eu.PE)(h)) throw (0, E.ne)("Valid Payment Element source type not found", !0);
                    let { steps: e, methodType: n } = d[h];
                    if ((s({ steps: e, methodType: n === eC.he.UNKNOWN ? h : n }), h === eC.he.PAYMENT_REQUEST)) {
                        let e = C.current,
                            { paymentMethod: n } = await (0, E.YB)(t, e),
                            { billingAddressInfo: l } = (0, tr.uK)(n);
                        m((e) => ({ ...e, info: l })), A(), a(ef.pn.ADDRESS);
                    } else {
                        let e = (0, eu.eI)(h);
                        null != e ? a(e) : a(ef.pn.ADDRESS);
                    }
                } catch (e) {
                    tO.error("Error on submitting Payment Element step: ", e.message ?? JSON.stringify(e));
                } finally {
                    p(!1);
                }
            }, [h, d, C, A, a, t, s, p, m]);
        return (0, i.jsx)(t_, {
            onBack: o,
            primaryCTA: eN.Ay.CTAType.CONTINUE,
            primaryType: "submit",
            primaryText: L.intl.string(L.t.PDTjLN),
            primarySubmitting: u,
            primaryDisabled: c,
            onPrimary: y,
            shouldUseManaModal: n,
        });
    };
var tw = n(691189);
let tU = new e_.A("AddPaymentStep.tsx"),
    tk = { name: "", cardNumber: "", expirationDate: "", cvc: "" },
    tY = { email: "", name: "", country: "", line1: "", line2: "", city: "", postalCode: "", state: "" };
function tG(e) {
    let { onCardInfoChange: t } = e,
        n = (0, c.bG)([R.A], () => R.A.error);
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
function tV() {
    let e = (0, c.bG)([eK.A], () => eK.A.isBusy),
        t = (0, c.bG)([R.A], () => R.A.stripePaymentMethod);
    return (0, i.jsx)(er, { stripePaymentMethod: t, submitting: e });
}
function tH() {
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
            onReturn: y,
            onComplete: S,
            onStepChange: _,
            breadcrumpSteps: T,
            currentBreadcrumpStep: I,
            header: N,
            analyticsData: v,
            analyticsLocation: M,
            hideBreadcrumbs: b = !1,
            usePaymentModalStep: j = !1,
            isEligibleForTrial: O = !1,
            allowDesktopRedirectPurchase: D = !1,
            toastContent: w,
            continueSessionToInitialStep: U,
            overwriteSubscriptionPaymentSource: k = !1,
            shouldUseManaModal: Y = !0,
        } = e,
        { stripe: G, activitySessionId: F, paymentElementsEnabled: B } = (0, eT.P5)(),
        W = (0, eS.t4)((e) => e.contextMetadata),
        V = (0, eg.l)(),
        H = r.useMemo(() => {
            let e = a === ef.pn.PAYMENT_TYPE || a === ef.pn.PAYMENT_ELEMENT;
            return B && e ? (D ? ef.pn.AWAITING_BROWSER_CHECKOUT : ef.pn.PAYMENT_ELEMENT) : a;
        }, [B, a, D]),
        K = r.useMemo(() => (0, eX.Gn)(), []),
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
                [a, i, s, o, u, c, d, p, m, h] = (0, r.useMemo)(
                    () =>
                        ((e, t) => {
                            let { prependSteps: n, appendSteps: l, paymentElementsEnabled: a } = t;
                            return e.map((e) => {
                                let { sharedStepsKey: t, methodType: i } = e;
                                return {
                                    steps: [
                                        ...n,
                                        ...(a && (null == i || i === eC.he.UNKNOWN || (0, eu.PE)(i)) ? tE[t] : ty[t]),
                                        ...l,
                                    ],
                                    methodType: i,
                                };
                            });
                        })(
                            [
                                { sharedStepsKey: "SHARED_TYPE_AND_ADDRESS_STEPS", methodType: eC.he.UNKNOWN },
                                { sharedStepsKey: "SHARED_ADD_PAYMENT_STEPS", methodType: eC.he.PAYMENT_REQUEST },
                                { sharedStepsKey: "SHARED_ADD_PAYMENT_STEPS" },
                                { sharedStepsKey: "SHARED_CREDIT_CARD_STEPS", methodType: eC.he.CARD },
                                { sharedStepsKey: "SHARED_PAYPAL_STEPS", methodType: eC.he.PAYPAL },
                                { sharedStepsKey: "SHARED_IDEAL_STEPS", methodType: eC.he.IDEAL },
                                { sharedStepsKey: "SHARED_VENMO_STEPS", methodType: eC.he.VENMO },
                                { sharedStepsKey: "SHARED_PRZELEWY24_STEPS", methodType: eC.he.PRZELEWY24 },
                                { sharedStepsKey: "SHARED_EPS_STEPS", methodType: eC.he.EPS },
                                { sharedStepsKey: "SHARED_CASH_APP_STEPS", methodType: eC.he.CASH_APP },
                            ],
                            { prependSteps: t, appendSteps: n, paymentElementsEnabled: l },
                        ),
                    [t, n, l],
                ),
                C = (0, r.useMemo)(
                    () => ({
                        [eC.he.CARD]: o,
                        [eC.he.PAYPAL]: u,
                        [eC.he.PAYMENT_REQUEST]: i,
                        [eC.he.VENMO]: d,
                        [eC.he.CASH_APP]: h,
                        [eC.he.IDEAL]: c,
                        [eC.he.PRZELEWY24]: p,
                        [eC.he.EPS]: m,
                        [eC.he.BANCONTACT]: a,
                        [eC.he.GOPAY_WALLET]: a,
                        [eC.he.KAKAOPAY]: a,
                        [eC.he.GCASH]: a,
                        [eC.he.PAYSAFE_CARD]: a,
                        [eC.he.GRABPAY_MY]: a,
                        [eC.he.MOMO_WALLET]: a,
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
                ADD_PAYMENT_STEPS: s,
                PRZELEWY24_STEPS: p,
                EPS_STEPS: m,
                CASH_APP_STEPS: h,
                PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: C,
            };
        })({ prependSteps: o, appendSteps: u, paymentElementsEnabled: B }),
        [el, ea] = r.useState(H),
        [ei, er] = r.useState(null),
        [es, eo] = r.useState(
            (function (e) {
                switch (e) {
                    case ef.pn.CREDIT_CARD_INFORMATION:
                        return Z;
                    case ef.pn.CASH_APP_INFORMATION:
                        return et;
                    default:
                        return { steps: [ef.pn.ADD_PAYMENT_STEPS] };
                }
            })(H),
        );
    r.useEffect(() => {
        (0, E.IV)();
    }, []);
    let ec = (0, c.bG)([R.A], () => R.A.redirectedPaymentSourceId),
        ep = (0, c.bG)([e7], () => e7.cashAppPayComponent),
        em = { completeSteps: e9, setIsSubmittingCurrentStep: l.setIsSubmittingCurrentStep },
        eh = r.useRef(em);
    r.useEffect(() => {
        eh.current = em;
    }),
        r.useEffect(() => {
            let { completeSteps: e, setIsSubmittingCurrentStep: t } = eh.current;
            (async () => {
                if (null == ec) return;
                await (0, E.$o)();
                let n = eq.A.getPaymentSource(ec);
                null != n && (e(n), t(!1), R.A.clearRedirectedPaymentSourceId());
            })();
        }, [ec]);
    let eA = r.useCallback(
            function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                er(null), ea(e), t && _({ currentStep: el, toStep: e });
            },
            [el, _],
        ),
        e_ = r.useCallback(
            (e) => {
                eJ.default.track(f.HAw.PAYMENT_FLOW_ADD_SOURCE_COMPLETED, {
                    load_id: W.loadId,
                    analytics_location: M,
                    payment_source_id: e.id,
                    payment_source_type: e.type,
                    payment_source_country: e.paymentMethodCountry,
                });
            },
            [W.loadId, M],
        ),
        ev = (0, c.bG)([R.A], () => R.A.error),
        eM = r.useRef(ev);
    r.useEffect(() => {
        let e = eM.current;
        (eM.current = ev),
            null != ev &&
                ev !== e &&
                eJ.default.track(f.HAw.PAYMENT_FLOW_ADD_SOURCE_ERROR, {
                    load_id: W.loadId,
                    analytics_location: M,
                    payment_source_type: es.methodType,
                    error_code: ev.code,
                    error_message: ev.message,
                });
    }, [ev, W.loadId, M, es.methodType]);
    let eb = r.useCallback(
            (e) => {
                e_(e),
                    (0, d.P0)(
                        (0, p.o)(void 0 !== w ? w : L.intl.string(L.t["VJPg+l"]), m.Ck.SUCCESS, {
                            position: m.xJ.BOTTOM,
                        }),
                    ),
                    S(el, e),
                    eA(H, !1);
            },
            [eA, H, el, S, w, e_],
        ),
        [ej, eR] = r.useState(null),
        {
            setPaymentSourceId: eL,
            creditCardState: eO,
            setCreditCardState: eD,
            setTokenState: ew,
            isSubmittingCurrentStep: eU,
            billingAddressState: ek,
            setBillingAddressState: eY,
            setIsSubmittingCurrentStep: eG,
            braintreeEmail: eF,
            braintreeNonce: eB,
            venmoUsername: eK,
            adyenPaymentData: eZ,
            epsBankState: ez,
            setEpsBankState: eQ,
            p24BankState: e2,
            setP24BankState: e3,
            selectedSkuId: e1,
        } = l,
        e4 = e1 ?? "",
        e6 = (0, c.bG)([e$.A], () => e$.A.get(e4), [e4]),
        e5 = e6?.eligiblePaymentGateways?.map((e) => e.valueOf());
    function e9(e) {
        eL(e.id), eb(e);
    }
    let te = () => {
            eo(X), eA(ef.pn.PAYMENT_TYPE);
        },
        tt = (0, eE.wD)({
            step: el,
            continueSessionToInitialStep: U,
            paymentElementsEnabled: B,
            handleStepChange: eA,
            logger: tU,
            shouldLogOnChangeEvents: K || !1,
            onBillingAddressChange: (e, t) => {
                eY({ info: { ...ek.info, ...e }, isValid: t });
            },
        }),
        {
            shouldRenderPaymentElement: tn,
            paymentElementReady: tl,
            paymentElementSelectedType: ta,
            returnToPaymentElementStep: ti,
            onBackFromPaymentElement: tr,
            combinedStripeElementsRef: ts,
            stripePaymentElementProps: to,
            stripeAddressElementProps: tu,
            remountAddressElement: tc,
            addressElementKey: td,
        } = tt,
        tp = r.useCallback(() => {
            eA(ef.pn.ADDRESS), B && eE.Ky.includes(el) && tc();
        }, [eA, B, tc, el]),
        tm = r.useCallback(
            (e) => {
                B && null != ta && (0, eu.PE)(e) ? ti(e) : eA(ef.pn.PAYMENT_TYPE);
            },
            [B, ta, ti, eA],
        ),
        th = j ? (0, i.jsx)(eH.A, { className: tP._8 }) : null,
        tC = (() => {
            let [e, t] = r.useState(!1),
                n = r.useRef(null);
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
        case ef.pn.ATTEMPT_GOOGLE_PAY:
        case ef.pn.ATTEMPT_APPLE_PAY:
        case ef.pn.PAYMENT_TYPE:
            (t = (0, i.jsx)(tf, {
                prependSteps: o,
                appendSteps: u,
                analyticsLocation: M,
                isEligibleForTrial: O,
                allowDesktopRedirectPurchase: D,
                onPaymentRequestSourceFailed: te,
                paymentModalArgs: l,
                handleStepChange: eA,
                setPaymentMethodSteps: eo,
                setPaymentRequestPaymentMethod: eR,
                currentStep: el,
                setInfoNotice: er,
                completeSteps: e9,
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
                (n = (0, i.jsx)(tI, {
                    shouldUseManaModal: Y,
                    onReturn: y,
                    handleStepChange: eA,
                    currentStep: el,
                    ...tC,
                }));
            break;
        case ef.pn.PAYMENT_ELEMENT:
            if (!B) throw (0, E.ne)("Payment Elements not enabled, invalid step", !0);
            (t = null),
                (n = (0, i.jsx)(tD, {
                    handleStepChange: eA,
                    shouldUseManaModal: Y,
                    setPaymentMethodSteps: eo,
                    primarySubmitting: eU,
                    primaryDisabled: !tl,
                    onBack: () => {
                        tr(), y?.();
                    },
                    paymentModalArgs: l,
                    PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: en,
                    ...tt,
                }));
            break;
        case ef.pn.CREDIT_CARD_INFORMATION:
            let tA = async (e) => {
                eG(!0);
                try {
                    let t = await (0, E.YJ)(G, e);
                    ew({ token: t }), eA(ef.pn.ADDRESS);
                } catch (e) {
                    tU.error(e.message ?? JSON.stringify(e));
                } finally {
                    eG(!1);
                }
            };
            t = (0, i.jsx)(tG, {
                onCardInfoChange: (e, t) => {
                    eD({ info: e, isValid: t }), eY((t) => ({ ...t, info: { ...t.info, name: e.name } }));
                },
            });
            let tS = !eO.isValid,
                tT = () => {
                    eA(ef.pn.PAYMENT_TYPE);
                };
            n = (0, i.jsx)(s.ElementsConsumer, {
                children: (e) => {
                    let { elements: t } = e;
                    return (0, i.jsx)(t_, {
                        onBack: tT,
                        primaryCTA: eN.Ay.CTAType.CONTINUE,
                        primaryType: "submit",
                        primaryText: L.intl.string(L.t.PDTjLN),
                        primarySubmitting: eU,
                        primaryDisabled: tS,
                        onPrimary: () => tA(t),
                        shouldUseManaModal: Y,
                    });
                },
            });
            break;
        case ef.pn.AWAITING_BROWSER_CHECKOUT:
        case ef.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
        case ef.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
            let tN = () => {
                eo(Z), eA(B ? ef.pn.PAYMENT_ELEMENT : ef.pn.CREDIT_CARD_INFORMATION);
            };
            (t = (0, i.jsx)(eW, { step: el, onPurchaseComplete: () => S(el), onHandoffFailure: tN })),
                (n = (0, i.jsx)(eV, {
                    onPrimaryClick: tN,
                    onBackClick: () => {
                        B ? (tr(), y?.()) : (eo(X), eA(ef.pn.PAYMENT_TYPE));
                    },
                }));
            break;
        case ef.pn.EPS_INFORMATION:
            (t = (0, i.jsx)(ey, {
                type: eC.he.EPS,
                onAccountHolderNameChange: (e) => eY({ info: { ...ek.info, name: e }, isValid: ek.isValid }),
                onEPSBankChange: (e) => eQ(e),
                epsBankValue: ez,
                billingAddressInfo: ek.info,
            })),
                (n = (0, i.jsx)(t_, {
                    onBack: () => tm(eC.he.EPS),
                    primaryCTA: eN.Ay.CTAType.CONTINUE,
                    primaryText: L.intl.string(L.t.PDTjLN),
                    primaryDisabled: void 0 === ez || "" === ez || "" === ek.info.name,
                    onPrimary: () => tp(),
                    shouldUseManaModal: Y,
                }));
            break;
        case ef.pn.IDEAL_INFORMATION:
            (t = (0, i.jsx)(ed, {
                type: eC.he.IDEAL,
                onAccountHolderNameChange: (e) => eY({ info: { ...ek.info, name: e }, isValid: ek.isValid }),
                billingAddressInfo: ek.info,
            })),
                (n = (0, i.jsx)(t_, {
                    onBack: () => eA(ef.pn.PAYMENT_TYPE),
                    primaryCTA: eN.Ay.CTAType.CONTINUE,
                    primaryText: L.intl.string(L.t.PDTjLN),
                    primaryDisabled: "" === ek.info.name,
                    onPrimary: () => tp(),
                    shouldUseManaModal: Y,
                }));
            break;
        case ef.pn.PRZELEWY24_INFORMATION:
            (t = (0, i.jsx)(ey, {
                type: eC.he.PRZELEWY24,
                onNameChange: (e) => eY({ info: { ...ek.info, name: e }, isValid: ek.isValid }),
                onEmailChange: (e) => eY({ info: { ...ek.info, email: e }, isValid: ek.isValid }),
                onP24BankChange: (e) => {
                    e3(e);
                },
                p24BankValue: e2,
                billingAddressInfo: ek.info,
            })),
                (n = (0, i.jsx)(t_, {
                    onBack: () => tm(eC.he.PRZELEWY24),
                    primaryCTA: eN.Ay.CTAType.CONTINUE,
                    primaryText: L.intl.string(L.t.PDTjLN),
                    primaryDisabled:
                        void 0 === ek.info.name ||
                        "" === ek.info.name ||
                        void 0 === ek.info.email ||
                        "" === ek.info.email ||
                        void 0 === e2 ||
                        "" === e2,
                    onPrimary: () => tp(),
                    shouldUseManaModal: Y,
                }));
            break;
        case ef.pn.PAYPAL_INFORMATION:
            let tx = 0 !== eF.length && null != eB;
            (t = (0, i.jsx)(tF, {})),
                (n = (0, i.jsx)(t_, {
                    onBack: () => tm(eC.he.PAYPAL),
                    primaryCTA: eN.Ay.CTAType.CONTINUE,
                    primaryText: tx ? L.intl.string(L.t.PDTjLN) : L.intl.string(L.t.Djzd7L),
                    onPrimary: () => {
                        let e;
                        return tx
                            ? tp()
                            : void (null == (e = P.A.getLastURL())
                                  ? x()
                                  : (A.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_START" }), window.open(e)));
                    },
                    shouldUseManaModal: Y,
                }));
            break;
        case ef.pn.VENMO_INFORMATION:
            let tg = 0 !== eK.length && null != eB;
            (t = (0, i.jsx)(tB, {})),
                (n = (0, i.jsx)(t_, {
                    onBack: () => tm(eC.he.VENMO),
                    primaryCTA: eN.Ay.CTAType.CONTINUE,
                    primaryText: tg ? L.intl.string(L.t.PDTjLN) : L.intl.string(L.t["4KoTLM"]),
                    onPrimary: () => (tg ? tp() : void g()),
                    shouldUseManaModal: Y,
                }));
            break;
        case ef.pn.PAYMENT_REQUEST_INFORMATION:
            (t = (0, i.jsx)(tV, {})),
                (n = (0, i.jsx)(t_, { onBack: () => eA(ef.pn.PAYMENT_TYPE), shouldUseManaModal: Y }));
            break;
        case ef.pn.CASH_APP_INFORMATION:
            let tv = null != eZ;
            (t = (0, i.jsx)(tW, {})),
                (n = (0, i.jsx)(t_, {
                    onBack: () => tm(eC.he.CASH_APP),
                    primaryCTA: eN.Ay.CTAType.CONTINUE,
                    primaryText: tv ? L.intl.string(L.t.PDTjLN) : L.intl.string(L.t["9ALP8w"]),
                    onPrimary: () => (tv ? tp() : e8()),
                    primaryDisabled: null == ep,
                    shouldUseManaModal: Y,
                }));
            break;
        case ef.pn.ADDRESS:
            let tM = B && null != ta;
            (t = (0, i.jsx)(tR, {
                paymentModalArgs: l,
                paymentSourceType: es.methodType ?? eC.he.CARD,
                shouldUsePaymentElement: tM,
            })),
                (n = (0, i.jsx)(tL, {
                    paymentModalArgs: l,
                    shouldUseManaModal: Y,
                    analyticsLocation: M,
                    overwriteSubscriptionPaymentSource: k,
                    handleStepChange: eA,
                    onPaymentRequestSourceFailed: te,
                    paymentRequestPaymentMethod: ej,
                    completeSteps: e9,
                    paymentMethodSteps: es,
                    shouldUsePaymentElement: tM,
                    ...tt,
                }));
            break;
        case ef.pn.AWAITING_AUTHENTICATION:
            t = (0, i.jsx)(tH, {});
            break;
        default:
            throw Error(`Unexpected step: ${el}`);
    }
    let tb = B && tn,
        tj = tb ? "combined_stripe_elements" : void 0,
        tO = (0, i.jsxs)(h.Y, {
            className: tw.C9,
            staticClassName: tw.a2,
            animatedNodeClassName: tw.L2,
            fillParent: !0,
            overrideKey: tj,
            step: el,
            steps: es.steps,
            sideMargin: 20,
            children: [
                null != ei &&
                    (0, i.jsx)("div", { className: tP.Ns, children: (0, i.jsx)(C.w, { type: "info", children: ei }) }),
                tb &&
                    (0, i.jsx)(eE.e4, {
                        step: el,
                        analyticsContext:
                            null != v ? { activitySessionId: F, contextMetadata: W, analyticsData: v } : void 0,
                        paymentElementSelectedType: ta,
                        elementsRef: ts,
                        stripePaymentElementProps: to,
                        stripeAddressElementProps: tu,
                        addressElementKey: td,
                        billingAddressInfo: ek.info,
                        onSetupError: () => {
                            tr(), eA(ef.pn.PAYMENT_TYPE);
                        },
                        paymentElementFooter: (0, i.jsx)(eP.Z4, {
                            className: tP.SO,
                            stackingBehavior: "stack",
                            onComplete: () => {
                                setTimeout(() => V(ef.pn.REVIEW), 0);
                            },
                        }),
                    }),
                t,
            ],
        }),
        tk = el === ef.pn.PAYMENT_TYPE && 0 === o.length ? null : n;
    return j
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  O && (0, i.jsx)(eI.A, { className: tP.At, isEligibleForTrial: O }),
                  (0, i.jsxs)(ex.dZ, { children: [th, tO] }),
                  (0, i.jsx)(ex.UX, { children: tk }),
              ],
          })
        : (0, i.jsx)(e0.A, {
              shouldUseManaModal: Y,
              steps: T ?? es.steps,
              currentStep: I ?? el,
              overrideKey: tj,
              paymentError: l.paymentError,
              header: N,
              hideBreadcrumbs: b,
              body: tO,
              footer: tk,
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
    (0, es.Ay)(() => {
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
                                A.h.unsubscribe("BRAINTREE_CREATE_CLIENT_SUCCESS", a), setTimeout(l, 0);
                            };
                        A.h.subscribe("BRAINTREE_CREATE_CLIENT_SUCCESS", a);
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
            l || (0, E.$o)();
    }),
        r.useEffect(() => {
            null == a && null != i && i.includes(eC.he.CASH_APP) && e5();
        }, [i, a]);
    let [s, o] = r.useState(t);
    null != t && null == s && o(t);
    let [u, d] = r.useState(() => ({ info: tk, isValid: !1 })),
        [p, m] = r.useState(() => ({ info: tY, isValid: !1 })),
        [h, C] = r.useState(""),
        [y, T] = r.useState(""),
        [x, g] = r.useState(() => ({ token: null })),
        [v, b, j, L, O] = (0, c.yK)([R.A], () => [
            R.A.braintreeEmail,
            R.A.braintreeNonce,
            R.A.error,
            R.A.venmoUsername,
            R.A.adyenPaymentData,
        ]),
        [D, w] = (0, c.yK)([eZ.A], () => [eZ.A.error, eZ.A.isAwaitingAuthentication]);
    r.useEffect(() => {
        let e = (e) => {
            let { billingAddress: t } = e;
            m({ info: t, isValid: t.country.length > 0 });
        };
        return (
            A.h.subscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e),
            () => {
                A.h.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e), (0, M.ET)();
            }
        );
    }, []);
    let [U, k] = r.useState(!1),
        [Y, G] = r.useState(!1),
        [F, B] = r.useState(null),
        W = r.useRef(null),
        V = (0, c.bG)([eZ.A], () => eZ.A.isAwaitingAuthentication),
        [H, K] = (0, c.yK)([ez.A], () => [ez.A.purchaseTokenAuthState, ez.A.purchaseTokenHash]);
    return (
        r.useEffect(() => {
            null != F && null != W.current && W.current.scrollIntoView({ behavior: "smooth" });
        }, [F]),
        {
            paymentSources: n,
            paymentSourceId: s,
            hasFetchedPaymentSources: l,
            setPaymentSourceId: o,
            creditCardState: u,
            setCreditCardState: d,
            tokenState: x,
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
            paymentError: null != D ? D : j,
            paymentAuthenticationState: w ? eQ.oc.PENDING : null != D ? eQ.oc.ERROR : eQ.oc.NONE,
            purchaseError: F,
            setPurchaseError: B,
            purchaseErrorBlockRef: W,
            isAuthenticating: V,
            purchaseTokenAuthState: H,
            purchaseTokenHash: K,
            epsBankState: y,
            setEpsBankState: T,
            p24BankState: h,
            setP24BankState: C,
        }
    );
}
