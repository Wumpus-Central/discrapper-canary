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
    A = n(683071),
    C = n(228366),
    _ = n(636537),
    E = n(323082),
    y = n(70142),
    f = n(739508),
    P = n(184015),
    S = n(723702),
    T = n(652215);
function x() {
    let e = y.A.getClient();
    if (null == e) throw Error("Braintree client must be initialized before creating Venmo client.");
    (0, P.j)().then((t) => {
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
function N() {
    let e = y.A.getClient();
    if (null == e) throw Error("braintree client must be initialized before calling this");
    (0, P.j)().then((t) => {
        t.paypal
            .create({ client: e })
            .then((e) => {
                if (null == e._navigateFrameToAuth)
                    throw Error(
                        "braintree client missing _navigateFrameToAuth. did someone upgrade the braintree library?",
                    );
                (e._navigateFrameToAuth = function (e) {
                    let t = this._formatPaymentResourceData(e);
                    return _.Bo.post({
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
                    C.h.dispatch({ type: "BRAINTREE_CREATE_PAYPAL_CLIENT_SUCCESS", paypalClient: e });
            })
            .catch(() => C.h.dispatch({ type: "BRAINTREE_CREATE_PAYPAL_CLIENT_FAIL" }));
    });
}
function g() {
    let e = y.A.getPayPalClient();
    if (null == e) throw Error("braintree paypal client must be initialized before calling this");
    C.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_START" });
    let t = Promise.resolve("");
    (0, S.isDesktop)() && (t = (0, E.jf)(T.hes.PAYPAL)),
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
                n === T.Q7O.PAYPAL_POPUP_CLOSED || null == n
                    ? C.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED" })
                    : (C.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_FAIL", message: t, code: n }),
                      f.pM(Error(`Braintree Paypal Error: ${t} ${n} ${l}`)));
            });
}
function I() {
    let e = y.A.getVenmoClient();
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
                [T.Q7O.VENMO_APP_CANCELED, T.Q7O.VENMO_DESKTOP_CANCELED, T.Q7O.VENMO_CANCELED].includes(n)
                    ? C.h.dispatch({ type: "BRAINTREE_TOKENIZE_VENMO_FAIL_CANCELED" })
                    : (C.h.dispatch({ type: "BRAINTREE_TOKENIZE_VENMO_FAIL", message: t, code: n }),
                      f.pM(Error(`Braintree Venmo Error: ${t} ${n} ${l}`)));
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
var b = n(391048),
    M = n(292666),
    L = n(812745),
    R = n(825755),
    j = n(985018);
class O extends r.PureComponent {
    componentDidMount() {
        null != this.props.paypalClient && g();
    }
    componentDidUpdate(e) {
        null == e.paypalClient && null != this.props.paypalClient && g();
    }
    componentWillUnmount() {
        v(y.A.getPayPalClient(), { type: "BRAINTREE_TEARDOWN_PAYPAL_CLIENT" }).then(() => {
            null != y.A.getClient() && N();
        });
    }
    render() {
        let { braintreeEmail: e, paypalClient: t } = this.props;
        return (0, i.jsx)(M.k, {
            label: j.intl.string(j.t.QQBAos),
            leading: { type: "image", src: (0, L.Nj)(L.Ay.Types.PAYPAL) },
            value: e,
            readOnly: !0,
            placeholder: null == t ? j.intl.string(j.t.dte2M9) : j.intl.string(j.t.hopw7X),
        });
    }
}
let D = c.Ay.connectStores([y.A, R.A], () => ({
    braintreeEmail: R.A.braintreeEmail,
    paypalClient: y.A.getPayPalClient(),
}))(O);
var w = n(534514),
    U = n(834730),
    k = n(527142);
class Y extends r.PureComponent {
    componentDidMount() {
        null != this.props.venmoClient && I();
    }
    componentDidUpdate(e) {
        null == e.venmoClient && null != this.props.venmoClient && I();
    }
    componentWillUnmount() {
        v(y.A.getVenmoClient(), { type: "BRAINTREE_TEARDOWN_VENMO_CLIENT" }).then(() => {
            null != y.A.getClient() && x();
        });
    }
    render() {
        let { venmoUsername: e, className: t, venmoClient: n } = this.props,
            l = null != e && "" !== e;
        return (0, i.jsxs)("div", {
            className: t,
            children: [
                (0, i.jsx)(L.Ay, { type: L.Ay.Types.VENMO, size: L.y3.MEDIUM, className: k.Z }),
                l
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(w.D, {
                                  variant: e.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
                                  className: k.y,
                                  children: j.intl.format(j.t.DowIre, { venmoUsername: e }),
                              }),
                              (0, i.jsx)(U.E, {
                                  variant: "text-md/medium",
                                  className: k.y,
                                  children: j.intl.string(j.t.kmEvnR),
                              }),
                          ],
                      })
                    : (0, i.jsx)(U.E, {
                          variant: "text-md/medium",
                          className: k.y,
                          children: null == n ? j.intl.string(j.t["2ouZDU"]) : j.intl.string(j.t.mIL6Jb),
                      }),
            ],
        });
    }
}
let F = c.Ay.connectStores([y.A, R.A], () => ({ venmoUsername: R.A.venmoUsername, venmoClient: y.A.getVenmoClient() }))(
    Y,
);
var G = n(891197),
    B = n(503698),
    W = n.n(B),
    H = n(305866),
    V = n(287809),
    K = n(832208),
    Z = n(661531),
    q = n(602853),
    z = n(511274),
    $ = n(50579),
    X = n(482188);
let J = function (e) {
    let t = r.useRef(null),
        { stripeType: n, flipped: l, updateCompleted: a, onFocus: o, onBlur: u } = e,
        [c, d] = r.useState(L.Be.UNKNOWN),
        [p, m] = r.useState(!1),
        [h, A] = r.useState(!1),
        [C, _] = r.useState(null),
        [E, y] = r.useState({}),
        f = (0, s.useElements)(),
        P = r.useCallback(() => {
            if (null != f)
                switch (n) {
                    case "cardNumber": {
                        let e = f.getElement(s.CardNumberElement);
                        if (null == e) return;
                        e.off("change"), e.off("focus"), e.off("blur");
                        break;
                    }
                    case "cardExpiry": {
                        let e = f.getElement(s.CardExpiryElement);
                        if (null == e) return;
                        e.off("change"), e.off("focus"), e.off("blur");
                        break;
                    }
                    case "cardCvc": {
                        let e = f.getElement(s.CardCvcElement);
                        if (null == e) return;
                        e.off("change"), e.off("focus"), e.off("blur");
                    }
                }
        }, [f, n]),
        S = r.useCallback(
            (e) => {
                h || e.empty || A(!0), null != a && a(e.complete), null != e.error && m(!1);
            },
            [h, a],
        ),
        T = r.useCallback(() => {
            m(!0), o?.();
        }, [o]),
        x = r.useCallback(() => {
            m(!1), u?.();
        }, [u]),
        N = r.useCallback(() => {
            if (null != f)
                switch (n) {
                    case "cardNumber": {
                        let e = f.getElement(s.CardNumberElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            c !== e.brand && d(e.brand),
                                e.empty && h
                                    ? _(j.intl.string(j.t.eOIfuy))
                                    : null != e.error
                                      ? _(j.intl.string(j.t.x4pWtJ))
                                      : _(null),
                                S(e);
                        }),
                            e.on("focus", T),
                            e.on("blur", x);
                        break;
                    }
                    case "cardExpiry": {
                        let e = f.getElement(s.CardExpiryElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            null != e.error || (e.empty && h) ? _(j.intl.string(j.t["9/zZdl"])) : _(null), S(e);
                        }),
                            e.on("focus", T),
                            e.on("blur", x);
                        break;
                    }
                    case "cardCvc": {
                        let e = f.getElement(s.CardCvcElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            null != e.error || (e.empty && h) ? _(j.intl.string(j.t.ro4isZ)) : _(null), S(e);
                        }),
                            e.on("focus", T),
                            e.on("blur", x);
                    }
                }
        }, [x, S, T, c, f, h, n]);
    r.useEffect(
        () => (
            N(),
            () => {
                P();
            }
        ),
        [N, P],
    );
    let g = (0, q.r)(Z.A.colors.TEXT_SUBTLE).hex(),
        I = (0, q.r)(Z.A.colors.TEXT_STRONG).hex();
    function v() {
        return W()($.vB, { [$.Tn]: null !== C, [$.iH]: p, [$.yD]: "cardNumber" === n });
    }
    return (
        r.useLayoutEffect(() => {
            let { current: e } = t;
            if (null == e) return;
            let n = window.getComputedStyle(e),
                l = n.getPropertyValue("font-family");
            y({
                base: {
                    fontFamily: l,
                    fontWeight: n.getPropertyValue("font-weight"),
                    color: I,
                    fontSize: n.getPropertyValue("font-size"),
                    "::placeholder": { color: g },
                },
            });
        }, [t, g, I]),
        (0, i.jsxs)("div", {
            className: $.Zm,
            "data-stripe-type": n,
            children: [
                (0, i.jsx)("div", { ref: t, className: W()($.iw, X.hF) }),
                (function () {
                    switch (n) {
                        case "cardNumber":
                            return (0, i.jsxs)("div", {
                                children: [
                                    (0, i.jsx)(L.Ay, { className: $.Ie, type: c, flipped: l }),
                                    (0, i.jsx)(s.CardNumberElement, {
                                        options: { style: E, placeholder: j.intl.string(j.t.gPRHfw), disableLink: !1 },
                                        className: v(),
                                    }),
                                ],
                            });
                        case "cardExpiry":
                            return (0, i.jsx)(s.CardExpiryElement, {
                                options: { style: E, placeholder: j.intl.string(j.t.xeEWQ6) },
                                className: v(),
                            });
                        case "cardCvc":
                            return (0, i.jsx)(s.CardCvcElement, {
                                options: { style: E, placeholder: j.intl.string(j.t.wZz04F) },
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
        l = r.useRef(t),
        [a, s] = r.useState(!1),
        [o, u] = r.useState({}),
        [c, d] = r.useState({ name: "", country: "", postalCode: "" }),
        [p, m] = r.useState({}),
        [h, A] = r.useState({}),
        { setFocusLockDisabled: C } = r.useContext(H.M);
    r.useEffect(() => () => {
        void 0 !== C && C(!1);
    });
    let _ = r.useCallback(() => {
        void 0 !== C && C(!0);
    }, [C]);
    function E(e, t) {
        !!o[e] !== t && u((n) => ({ ...n, [e]: t }));
    }
    let y = r.useCallback(
        function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = {};
            return (e || p.name) && "" === c.name && (t.name = j.intl.string(j.t.lIkVsi)), t;
        },
        [p, c],
    );
    return (
        r.useEffect(() => {
            let e = o.cardNumber && o.cardExpiry && o.cardCvc && 0 === Object.keys(y(!0)).length;
            l.current({ name: c.name }, !!e);
        }, [o, c, y]),
        (0, i.jsxs)("div", {
            children: [
                V.default.getCurrentUser()?.nsfwAllowed
                    ? (0, i.jsxs)("div", {
                          className: Q.Rm,
                          children: [
                              (0, i.jsx)("div", { className: W()(L.y3.SMALL, Q.eo, Q.Ud) }),
                              (0, i.jsx)("div", { className: W()(L.y3.SMALL, Q.DR, Q.Ud) }),
                              (0, i.jsx)("div", { className: W()(L.y3.SMALL, Q.k4, Q.Ud) }),
                              (0, i.jsx)("div", { className: W()(L.y3.SMALL, Q.a3, Q.Ud) }),
                              (0, i.jsx)("div", { className: W()(L.y3.SMALL, Q.CY, Q.Ud) }),
                              (0, i.jsx)("div", { className: W()(L.y3.SMALL, Q.Q5, Q.Ud) }),
                              (0, i.jsx)("div", { className: W()(L.y3.SMALL, Q.YA, Q.Ud) }),
                          ],
                      })
                    : (0, i.jsxs)("div", {
                          className: Q.Rm,
                          children: [
                              (0, i.jsx)("div", { className: W()(L.y3.SMALL, Q.aq, Q.Ud) }),
                              (0, i.jsx)("div", { className: W()(L.y3.SMALL, Q.VX, Q.Ud) }),
                              (0, i.jsx)("div", { className: W()(L.y3.SMALL, Q.Yi, Q.Ud) }),
                              (0, i.jsx)("div", { className: W()(L.y3.SMALL, Q.qR, Q.Ud) }),
                              (0, i.jsx)("div", { className: W()(L.y3.SMALL, Q.m2, Q.Ud) }),
                              (0, i.jsx)("div", { className: W()(L.y3.SMALL, Q.Ij, Q.Ud) }),
                              (0, i.jsx)("div", { className: W()(L.y3.SMALL, Q._V, Q.Ud) }),
                          ],
                      }),
                (0, i.jsx)(K.A, {
                    form: [
                        {
                            fields: [
                                {
                                    id: "card-number",
                                    name: "cardNumber",
                                    title: () => j.intl.string(j.t.cVyJ3o),
                                    getClassNameForLayout: () => ee.c6,
                                    renderInput: () =>
                                        (0, i.jsx)(J, {
                                            stripeType: "cardNumber",
                                            flipped: a,
                                            updateCompleted: (e) => E("cardNumber", e),
                                            onFocus: _,
                                        }),
                                },
                            ],
                        },
                        {
                            fields: [
                                {
                                    id: "card-expiration-date",
                                    name: "cardExpiry",
                                    title: () => j.intl.string(j.t["CeBa/4"]),
                                    getClassNameForLayout: () => ee.ep,
                                    renderInput: () =>
                                        (0, i.jsx)(J, {
                                            stripeType: "cardExpiry",
                                            updateCompleted: (e) => E("cardExpiry", e),
                                            onFocus: _,
                                        }),
                                },
                                {
                                    id: "card-cvc",
                                    name: "cardCvc",
                                    title: () => j.intl.string(j.t.Fd3rOz),
                                    getClassNameForLayout: () => ee.ep,
                                    renderInput: () =>
                                        (0, i.jsx)(J, {
                                            stripeType: "cardCvc",
                                            updateCompleted: (e) => E("cardCvc", e),
                                            onFocus: () => {
                                                _(), s(!0);
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
                                    title: () => j.intl.string(j.t.VUlFdU),
                                    autoComplete: "cc-name",
                                    placeholder: () => j.intl.string(j.t["yf7ms+"]),
                                    getClassNameForLayout: () => ee.c6,
                                    renderInput: (e) => (0, i.jsx)(M.k, { ...e }),
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
                            l[t] && "" === e ? "name" === t && (a.name = j.intl.string(j.t.lIkVsi)) : delete a[t],
                            d(n),
                            m(l),
                            A(a);
                    },
                    onFieldBlur: function () {
                        A(y());
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
                          children: (0, i.jsx)(A.w, { type: "critical", children: j.intl.string(j.t["4vnhKV"]) }),
                      })
                    : null,
                (0, i.jsx)(et, { onCardInfoChange: n, error: t }),
            ],
        });
    },
    er = (e) => {
        let { className: t, submitting: n, stripePaymentMethod: l } = e,
            { card: a } = l ?? {},
            r = null != a ? L.Ay.getType(a.brand) : L.Ay.Types.UNKNOWN;
        return (0, i.jsx)("div", {
            className: t,
            children: (0, i.jsx)(M.k, {
                label: j.intl.string(j.t["mmDvV+"]),
                leading: { type: "image", src: (0, L.Nj)(r) },
                value: n && null != a ? j.intl.formatToPlainString(j.t.bCynoK, a) : void 0,
                readOnly: !0,
                placeholder: j.intl.string(j.t.bWMH78),
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
        children: (0, i.jsx)(M.k, {
            label: j.intl.string(j.t.sN3wrd),
            inputRef: l,
            name: j.intl.string(j.t.sN3wrd),
            placeholder: j.intl.string(j.t.sN3wrd),
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
let e_ = function (e) {
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
        case eA.he.PRZELEWY24: {
            let a = (0, ep.M)(t) ? "/assets/f4150b3aed6c4679.svg" : "/assets/8b825aafb2e4dbed.svg",
                { onNameChange: r, onEmailChange: o, onP24BankChange: u, p24BankValue: c, billingAddressInfo: d } = e;
            return (0, i.jsx)("div", {
                className: eC.rf,
                children: (0, i.jsxs)(em.B, {
                    gap: 16,
                    children: [
                        (0, i.jsx)(M.k, {
                            label: j.intl.string(j.t["w/qqKK"]),
                            inputRef: n,
                            name: j.intl.string(j.t["w/qqKK"]),
                            placeholder: j.intl.string(j.t["w/qqKK"]),
                            onChange: (e) => o(e),
                            value: d.email,
                        }),
                        (0, i.jsx)(M.k, {
                            label: j.intl.string(j.t["yf7ms+"]),
                            name: j.intl.string(j.t["yf7ms+"]),
                            placeholder: j.intl.string(j.t["yf7ms+"]),
                            onChange: (e) => r(e),
                            value: d.name,
                        }),
                        (0, i.jsxs)(em.B, {
                            gap: 4,
                            children: [
                                (0, i.jsx)(U.E, { variant: "text-sm/semibold", children: j.intl.string(j.t.De3b8t) }),
                                (0, i.jsx)(s.P24BankElement, {
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
            let { onAccountHolderNameChange: a, onEPSBankChange: r, epsBankValue: o, billingAddressInfo: u } = e,
                c = (0, ep.M)(t) ? "/assets/025b24b0055c8d81.svg" : "/assets/1dae7d71a65fd90f.svg";
            return (0, i.jsx)("div", {
                className: eC.rf,
                children: (0, i.jsxs)(em.B, {
                    gap: 16,
                    children: [
                        (0, i.jsx)(M.k, {
                            label: j.intl.string(j.t.sN3wrd),
                            inputRef: n,
                            name: j.intl.string(j.t.sN3wrd),
                            placeholder: j.intl.string(j.t.sN3wrd),
                            onChange: (e) => a(e),
                            value: u.name,
                        }),
                        (0, i.jsxs)(em.B, {
                            gap: 4,
                            children: [
                                (0, i.jsx)(U.E, { variant: "text-sm/semibold", children: j.intl.string(j.t.dFyV07) }),
                                (0, i.jsx)(s.EpsBankElement, {
                                    options: { value: o, style: l },
                                    onChange: (e) => r(e.value),
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
var eE = n(211528),
    ey = n(93159),
    ef = n(626584),
    eP = n(156312),
    eS = n(166532),
    eT = n(69494),
    ex = n(19311),
    eN = n(482132),
    eg = n(615310),
    eI = n(364840),
    ev = n(73825),
    eb = n(558620),
    eM = n(94420),
    eL = n(683433),
    eR = n(36167),
    ej = n(937008),
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
let eF = new eY(C.h, {
    USER_PAYMENT_BROWSER_CHECKOUT_STARTED: function (e) {
        (eD = 1), (ew = e.loadId);
    },
    USER_PAYMENT_BROWSER_CHECKOUT_DONE: function (e) {
        ew === e.loadId && ((eU = e.skuId ?? null), (ek = e.skuSubscriptionPlanId ?? null), (eD = 2));
    },
});
var eG = n(788868),
    eB = n(647926);
let eW = (e) => {
        let t,
            { step: n, onPurchaseComplete: l, onHandoffFailure: a } = e,
            { setSelectedSkuId: s, setSelectedPlanId: o } = (0, eM.t4)((e) => ({
                setSelectedSkuId: e.setSelectedSkuId,
                setSelectedPlanId: e.setSelectedPlanId,
            })),
            {
                browserCheckoutState: u,
                browserCheckoutStateLoadId: d,
                browserCheckoutStateSkuId: p,
                browserCheckoutStatePlanId: m,
            } = (0, c.cf)([eF], () => ({
                browserCheckoutState: eF.browserCheckoutState,
                browserCheckoutStateLoadId: eF.loadId,
                browserCheckoutStateSkuId: eF.skuId,
                browserCheckoutStatePlanId: eF.planId,
            })),
            { contextMetadata: h } = (0, eP.P5)(),
            A = (0, eb.A)(),
            { isGift: C } = (0, ej.Pv)(),
            [_, y] = r.useState(!1);
        switch (n) {
            case eS.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
                t = T.do8.GOOGLE_PAY;
                break;
            case eS.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
                t = T.do8.APPLE_PAY;
        }
        return (
            r.useEffect(() => {
                let e = setTimeout(() => {
                    _ ||
                        (y(!0),
                        (0, E.Ze)(h.loadId),
                        (0, eR.my)(
                            {
                                planId: A?.id ?? eG.gD.PREMIUM_MONTH_TIER_2,
                                isGift: C,
                                loadId: h.loadId,
                                paymentMethodType: t,
                            },
                            a,
                        ));
                }, 1e3);
                return () => clearTimeout(e);
            }, [A, C, h, a, y, _, t]),
            r.useEffect(() => {
                null !== p && (eG.oz.includes(p) && ((0, ev.ur)(p), (0, E.hP)()), s(p)),
                    null !== m && o(m),
                    d === h.loadId && u === eO.DONE && l();
            }, [s, o, u, d, p, m, h, l]),
            (0, i.jsxs)("div", {
                className: eB.rf,
                children: [
                    (0, i.jsx)(w.D, { variant: "heading-xl/bold", children: j.intl.string(j.t.C4HYfy) }),
                    (0, i.jsx)(U.E, {
                        variant: "text-md/normal",
                        className: eB.h_,
                        children: j.intl.string(j.t.xfG7Jp),
                    }),
                ],
            })
        );
    },
    eH = (e) => {
        let { onPrimaryClick: t, onBackClick: n } = e;
        return (0, i.jsx)(eI.j, {
            children: (0, i.jsxs)("div", {
                className: eB.kL,
                children: [
                    (0, i.jsx)(eL.A, { onClick: n }),
                    (0, i.jsx)(eL.F, { onClick: t, children: j.intl.string(j.t["4Qvmmj"]) }),
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
    eX = n(954571),
    eJ = n(427262),
    eQ = n(251913),
    e0 = n(632638),
    e2 = n(501280);
let e1 = null,
    e3 = null;
class e4 extends c.Ay.Store {
    static displayName = "AdyenStore";
    get client() {
        return e1;
    }
    get cashAppPayComponent() {
        return e3;
    }
}
let e7 = new e4(C.h, {
    ADYEN_CREATE_CLIENT_SUCCESS: function (e) {
        let { client: t } = e;
        e1 = t;
    },
    ADYEN_TEARDOWN_CLIENT: function () {
        e1 = null;
    },
    ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS: function (e) {
        let { component: t } = e;
        e3 = t;
    },
});
async function e6() {
    return await _.Bo.get({ url: T.Rsh.BILLING_ADYEN_PAYMENT_METHODS, oldFormErrors: !0, rejectWithError: !1 });
}
async function e5() {
    try {
        let e = await e6(),
            { default: t } = await Promise.all([n.e("94678"), n.e("40002")]).then(n.bind(n, 971193)),
            l = await t({
                environment: T.Gg3.ADYEN.KEY.startsWith("live_") ? "live" : "test",
                clientKey: T.Gg3.ADYEN.KEY,
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
                                        (n = !1), (t = j.intl.string(j.t.TJ8dDB));
                                }
                                (0, E.i0)(e.message, n, t);
                            }
                        },
                    })
                    .mount(`#${e2.h}`);
                C.h.dispatch({ type: "ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS", component: t });
            })(l);
    } catch (e) {
        (0, f.pM)(e), C.h.dispatch({ type: "ADYEN_CREATE_CLIENT_FAIL" });
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
                (0, i.jsx)(L.Ay, { type: L.Ay.Types.CASH_APP, size: L.y3.MEDIUM, className: e9.K }),
                a
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(w.D, {
                                  variant: l.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
                                  className: e9.y,
                                  children: j.intl.format(j.t["ze/1yE"], { cashtag: l }),
                              }),
                              (0, i.jsx)(U.E, {
                                  variant: "text-md/medium",
                                  className: e9.y,
                                  children: j.intl.string(j.t.VPOx7N),
                              }),
                          ],
                      })
                    : (0, i.jsx)(U.E, {
                          variant: "text-md/medium",
                          className: e9.y,
                          children: null == t ? j.intl.string(j.t["CgVe/w"]) : j.intl.string(j.t["1MqcjI"]),
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
let to = [eS.pn.PAYMENT_TYPE],
    tu = [eS.pn.PAYMENT_TYPE, eS.pn.CREDIT_CARD_INFORMATION, eS.pn.ADDRESS],
    tc = [eS.pn.PAYMENT_TYPE, eS.pn.PAYPAL_INFORMATION, eS.pn.ADDRESS],
    td = [eS.pn.PAYMENT_TYPE, eS.pn.VENMO_INFORMATION, eS.pn.ADDRESS],
    tp = [eS.pn.PAYMENT_TYPE, eS.pn.CASH_APP_INFORMATION, eS.pn.ADDRESS],
    tm = [eS.pn.PAYMENT_TYPE, eS.pn.PRZELEWY24_INFORMATION, eS.pn.ADDRESS],
    th = [eS.pn.PAYMENT_TYPE, eS.pn.EPS_INFORMATION, eS.pn.ADDRESS],
    tA = [eS.pn.PAYMENT_TYPE, eS.pn.IDEAL_INFORMATION, eS.pn.ADDRESS],
    tC = [eS.pn.PAYMENT_TYPE, eS.pn.ADDRESS],
    t_ = {
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
    tE = {
        SHARED_ADD_PAYMENT_STEPS: [eS.pn.PAYMENT_ELEMENT],
        SHARED_CREDIT_CARD_STEPS: [eS.pn.PAYMENT_ELEMENT, eS.pn.ADDRESS],
        SHARED_PAYPAL_STEPS: [eS.pn.PAYMENT_ELEMENT, eS.pn.PAYPAL_INFORMATION, eS.pn.ADDRESS],
        SHARED_VENMO_STEPS: [eS.pn.PAYMENT_ELEMENT, eS.pn.VENMO_INFORMATION, eS.pn.ADDRESS],
        SHARED_CASH_APP_STEPS: [eS.pn.PAYMENT_ELEMENT, eS.pn.CASH_APP_INFORMATION, eS.pn.ADDRESS],
        SHARED_PRZELEWY24_STEPS: [eS.pn.PAYMENT_ELEMENT, eS.pn.PRZELEWY24_INFORMATION, eS.pn.ADDRESS],
        SHARED_EPS_STEPS: [eS.pn.PAYMENT_ELEMENT, eS.pn.EPS_INFORMATION, eS.pn.ADDRESS],
        SHARED_IDEAL_STEPS: [eS.pn.PAYMENT_ELEMENT, eS.pn.ADDRESS],
        SHARED_TYPE_AND_ADDRESS_STEPS: [eS.pn.PAYMENT_ELEMENT, eS.pn.ADDRESS],
    };
var ty = n(801753);
function tf(e) {
    return () => (null != R.A.error && (0, b.ET)(), e());
}
function tP(e) {
    let { onPrimary: t, onBack: n, ...l } = e,
        a = t;
    null != t && (a = tf(t));
    let r = n;
    return null != n && (r = tf(n)), (0, i.jsx)(ex.Ay, { ...l, onPrimary: a, onBack: r });
}
function tS(e) {
    let { paymentSourceTypeRestrictions: t } = e,
        n = null != t && t.length > 0 ? ts.fU.ADD_NEW_PAYMENT_METHOD : void 0,
        { enabled: l } = (0, tl.c)({ location: "AddPaymentStep" });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(ts.je, { paymentRestrictionBannerType: n }),
            (0, i.jsx)(tn.A, { ...e }),
            l && (0, i.jsx)(ey.Z4, { className: ty.SO }),
        ],
    });
}
let tT = (e) => {
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
                paymentSourceTypeRestrictions: A,
                CREDIT_CARD_STEPS: C,
                PAYPAL_STEPS: _,
                VENMO_STEPS: y,
                PAYMENT_REQUEST_STEPS: f,
                PRZELEWY24_STEPS: P,
                EPS_STEPS: T,
                IDEAL_STEPS: x,
                CASH_APP_STEPS: N,
                setConnectorPaymentRequestReady: g,
                connectorPaymentRequestRef: I,
            } = e,
            { contextMetadata: v, activitySessionId: M } = (0, eP.P5)(),
            { setBillingAddressState: L } = o,
            O = (e, l) => {
                switch (e) {
                    case eA.he.CARD:
                        r ? u(eS.pn.AWAITING_BROWSER_CHECKOUT) : (c(C), u(eS.pn.CREDIT_CARD_INFORMATION));
                        break;
                    case eA.he.PAYPAL:
                        c(_), u(eS.pn.PAYPAL_INFORMATION);
                        break;
                    case eA.he.VENMO:
                        c(y), u(eS.pn.VENMO_INFORMATION);
                        break;
                    case eA.he.PAYMENT_REQUEST:
                        r && "googlePay" === l
                            ? u(eS.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY)
                            : r && "applePay" === l
                              ? u(eS.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY)
                              : (c(f), u(eS.pn.PAYMENT_REQUEST_INFORMATION));
                        break;
                    case eA.he.PRZELEWY24:
                        c(P), u(eS.pn.PRZELEWY24_INFORMATION);
                        break;
                    case eA.he.EPS:
                        c(T), u(eS.pn.EPS_INFORMATION);
                        break;
                    case eA.he.IDEAL:
                        c(x), u(eS.pn.IDEAL_INFORMATION);
                        break;
                    case eA.he.CASH_APP:
                        c(N), u(eS.pn.CASH_APP_INFORMATION);
                        break;
                    case eA.he.GIROPAY:
                    case eA.he.PAYSAFE_CARD:
                    case eA.he.GCASH:
                    case eA.he.GRABPAY_MY:
                    case eA.he.MOMO_WALLET:
                    case eA.he.KAKAOPAY:
                    case eA.he.GOPAY_WALLET:
                    case eA.he.BANCONTACT:
                        c({ steps: [...t, ...tC, ...n], methodType: e }), u(eS.pn.ADDRESS);
                }
                null != R.A.error && (0, b.ET)();
            },
            D = async (e, t) => {
                if (((0, b.mf)(e), null == e)) return void s();
                d(e);
                let { billingAddressInfo: n } = (0, tr.uK)(e),
                    a = (0, ta.Q)(n);
                if (((null == n.name || "" === n.name) && null != t && (n.name = t), L({ isValid: a, info: n }), !a))
                    return void u(eS.pn.ADDRESS);
                try {
                    var i;
                    (i = await (0, E.Tv)(e, n, l)), L((e) => ({ ...e, info: n })), c(f), h(i);
                } catch (e) {
                    s();
                }
            };
        if (p === eS.pn.ATTEMPT_GOOGLE_PAY || p === eS.pn.ATTEMPT_APPLE_PAY) {
            let e = j.intl.string(p === eS.pn.ATTEMPT_APPLE_PAY ? j.t.czhXDv : j.t.Zj2xQ0);
            return (0, i.jsx)(ti.V, {
                onChooseType: O,
                paymentRequestWallet: p === eS.pn.ATTEMPT_APPLE_PAY ? "applePay" : "googlePay",
                onStripePaymentMethodReceived: D,
                onPaymentRequestFailure: () => {
                    O(eA.he.CARD), m(e);
                },
                onValidPaymentRequest: () => g(!0),
                paymentRequestRef: I,
            });
        }
        let w = !(0, S.isDesktop)() || r;
        return (0, i.jsx)(tS, {
            onChooseType: O,
            onStripePaymentMethodReceived: D,
            paymentRequestWallets: w ? ["googlePay", "applePay"] : [],
            isEligibleForTrial: a,
            paymentRequestPaymentContext: { contextMetadata: v, activitySessionId: M },
            paymentSourceTypeRestrictions: A,
        });
    },
    tx = (e) => {
        let {
            onReturn: t,
            shouldUseManaModal: n,
            handleStepChange: l,
            currentStep: a,
            connectorPaymentRequestReady: r,
            showConnectorPaymentRequest: s,
        } = e;
        if (a === eS.pn.ATTEMPT_GOOGLE_PAY || a === eS.pn.ATTEMPT_APPLE_PAY) {
            let e = j.intl.string(a === eS.pn.ATTEMPT_APPLE_PAY ? j.t.WoXvJL : j.t.wnVVr0);
            return (0, i.jsx)(tP, {
                onBack: () => l(eS.pn.PAYMENT_TYPE),
                primaryCTA: ex.Ay.CTAType.CONTINUE,
                primaryText: e,
                onPrimary: () => s(),
                primaryDisabled: !r,
                shouldUseManaModal: n,
            });
        }
        return (0, i.jsx)(tP, { onBack: t, shouldUseManaModal: n });
    };
var tN = n(198970),
    tg = n(546605),
    tI = n(116673),
    tv = n(773669);
let tb = (e) => {
        let t,
            { billingAddressInfo: n, billingError: l, onBillingAddressChange: a, paymentSourceType: s } = e,
            o = null != l && (null == l.code || el(l) === en.ADDRESS),
            u = (0, c.bG)([tv.default], () => tv.default.locale);
        switch (s) {
            case T.hes.GIROPAY:
            case T.hes.PAYSAFE_CARD:
            case T.hes.GCASH:
            case T.hes.GRABPAY_MY:
            case T.hes.MOMO_WALLET:
            case T.hes.KAKAOPAY:
            case T.hes.GOPAY_WALLET:
            case T.hes.BANCONTACT:
                t = "en-US" === u ? tN.Ay.Layouts.MODAL_US_WITH_NAME : tN.Ay.Layouts.MODAL_INTL_WITH_NAME;
                break;
            case T.hes.VENMO:
            case T.hes.CASH_APP:
                t = tN.Ay.Layouts.MODAL_US_WITH_NAME;
                break;
            default:
                t = "en-US" === u ? tN.Ay.Layouts.MODAL_US : tN.Ay.Layouts.MODAL_INTL;
        }
        let d = (0, tg.vg)("AddressStep"),
            p = (0, tI.z)();
        return (
            0 === n.country.length && null != p && p.length > 0 && (n.country = p[0]),
            (0, i.jsxs)(r.Fragment, {
                children: [
                    o
                        ? (0, i.jsx)("div", {
                              className: ea.QK,
                              children: (0, i.jsx)(A.w, { type: "critical", children: j.intl.string(j.t.vZ8y7l) }),
                          })
                        : null,
                    (0, i.jsx)(tN.Ay, {
                        className: ea.__invalid_formItem,
                        onBillingAddressChange: a,
                        error: l,
                        layout: t,
                        allowedBillingAddressCountries: p,
                        ...n,
                    }),
                    d && null != p && p.length > 0
                        ? (0, i.jsx)(A.w, { type: "info", children: j.intl.string(j.t.Pg2hU0) })
                        : null,
                ],
            })
        );
    },
    tM = new ef.A("AddPaymentAddressStep.tsx");
function tL(e) {
    let { billingAddressInfo: t, onBillingAddressChange: n, paymentSourceType: l } = e,
        a = (0, c.bG)([R.A], () => R.A.error);
    return (0, i.jsx)(tb, { billingAddressInfo: t, billingError: a, onBillingAddressChange: n, paymentSourceType: l });
}
function tR(e) {
    let { paymentModalArgs: t, shouldUsePaymentElement: n, paymentSourceType: l } = e,
        { billingAddressState: a, setBillingAddressState: r } = t;
    return n
        ? null
        : (0, i.jsx)(tL, {
              billingAddressInfo: a.info,
              onBillingAddressChange: (e, t) => {
                  r({ info: { ...a.info, ...e }, isValid: t });
              },
              paymentSourceType: l,
          });
}
function tj(e) {
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
            lastConfirmedSetupIntentRef: A,
            shouldUsePaymentElement: C,
        } = e,
        { stripe: _ } = (0, eP.P5)(),
        {
            tokenState: y,
            isSubmittingCurrentStep: f,
            billingAddressState: P,
            setIsSubmittingCurrentStep: S,
            hasRedirectURL: T,
            setHasRedirectURL: x,
            braintreeNonce: N,
            adyenPaymentData: g,
            isAuthenticating: I,
            epsBankState: v,
            p24BankState: b,
        } = t,
        M = async () => {
            S(!0);
            let e = C ? p : d.methodType,
                t = [
                    _,
                    h.current,
                    { billingAddress: P.info, paymentSourceType: e ?? eA.he.UNKNOWN, lastConfirmedSetupIntentRef: A },
                    l,
                ];
            switch (e) {
                case eA.he.PAYMENT_REQUEST:
                    if (C) {
                        try {
                            let e = await (0, E.im)(...t);
                            c(e);
                        } catch (e) {
                            S(!1), tM.warn("Error confirming Payment Element source for Payment Request: ", e);
                        }
                        break;
                    }
                    if (null == o) throw (s(), (0, E.i0)("Missing paymentRequestPaymentMethod"));
                    c(await (0, E.Tv)(o, P.info, l));
                    break;
                case eA.he.CARD:
                    try {
                        let e = C ? await (0, E.im)(...t) : await (0, E.u6)(_, y.token, P.info, l);
                        c(e);
                    } catch {}
                    break;
                case eA.he.VENMO:
                case eA.he.PAYPAL:
                    try {
                        u()(null != N, "Missing braintreeNonce");
                        let e = await (0, E.u1)(N, P.info, l);
                        c(e);
                    } catch {}
                    break;
                case eA.he.EPS:
                    try {
                        let e = await (0, E.Z9)(_, v, P.info, l);
                        c(e);
                    } catch (e) {
                        tM.warn(e);
                    }
                    break;
                case eA.he.IDEAL:
                    try {
                        let e = C ? await (0, E.im)(...t) : await (0, E.EB)(_, P.info, l);
                        c(e);
                    } catch (e) {
                        tM.warn(e);
                    }
                    break;
                case eA.he.PRZELEWY24:
                    try {
                        if (void 0 === b) throw (0, E.i0)("Bank required for Przelewy24");
                        let e = await (0, E.TD)(_, { p24Bank: b }, P.info, l);
                        c(e);
                    } catch {}
                    break;
                case eA.he.PAYSAFE_CARD:
                case eA.he.GRABPAY_MY:
                    try {
                        let t = await (0, E.A8)(P.info, e, l);
                        c(t);
                    } catch {}
                    break;
                case eA.he.GCASH:
                case eA.he.MOMO_WALLET:
                case eA.he.KAKAOPAY:
                case eA.he.GOPAY_WALLET:
                    try {
                        let { redirectConfirmation: t } = await (0, E.$M)(P.info, e, l);
                        x(t);
                    } catch {}
                    break;
                case eA.he.GIROPAY:
                case eA.he.BANCONTACT:
                    try {
                        let t = await (0, E.bw)(_, P.info, e, l);
                        c(t);
                    } catch {}
                    break;
                case eA.he.CASH_APP:
                    try {
                        u()(null != g, "Missing adyenPaymentData");
                        let { paymentSource: t } = await (0, E.$M)(P.info, e, l, g, a);
                        u()(null != t, "Cash App Pay Payment Source missing"), c(t);
                    } catch {}
                    break;
                default:
                    throw Error("unknown step not handled");
            }
            T || S(!1);
        },
        L = d.methodType,
        { backStep: R } = C
            ? { backStep: eS.pn.PAYMENT_ELEMENT }
            : ((e) => {
                  switch (e) {
                      case eA.he.CARD:
                          return { backStep: eS.pn.CREDIT_CARD_INFORMATION };
                      case eA.he.PAYPAL:
                          return { backStep: eS.pn.PAYPAL_INFORMATION };
                      case eA.he.VENMO:
                          return { backStep: eS.pn.VENMO_INFORMATION };
                      case eA.he.GIROPAY:
                      case eA.he.PAYSAFE_CARD:
                      case eA.he.GCASH:
                      case eA.he.GRABPAY_MY:
                      case eA.he.MOMO_WALLET:
                      case eA.he.KAKAOPAY:
                      case eA.he.GOPAY_WALLET:
                      case eA.he.BANCONTACT:
                          return { backStep: eS.pn.PAYMENT_TYPE };
                      case eA.he.EPS:
                          return { backStep: eS.pn.EPS_INFORMATION };
                      case eA.he.IDEAL:
                          return { backStep: eS.pn.IDEAL_INFORMATION };
                      case eA.he.PRZELEWY24:
                          return { backStep: eS.pn.PRZELEWY24_INFORMATION };
                      case eA.he.CASH_APP:
                          return { backStep: eS.pn.CASH_APP_INFORMATION };
                      default:
                          return { backStep: eS.pn.PAYMENT_TYPE };
                  }
              })(L),
        O = C ? () => m(void 0) : () => r(R);
    return (0, i.jsx)(tP, {
        onBack: O,
        primaryCTA: ex.Ay.CTAType.CONTINUE,
        primaryText: j.intl.string(j.t.PDTjLN),
        primarySubmitting: f,
        primaryDisabled: !P.isValid || I,
        onPrimary: M,
        shouldUseManaModal: n,
    });
}
let tO = new ef.A("PaymentElementStepFooter.tsx"),
    tD = (e) => {
        let { stripe: t } = (0, eP.P5)(),
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
            { paymentElementSelectedType: h, combinedStripeElementsRef: A, remountAddressElement: C } = e,
            _ = r.useCallback(async () => {
                p(!0);
                try {
                    if (null == h || !(0, eu.PE)(h)) throw (0, E.ne)("Valid Payment Element source type not found", !0);
                    let { steps: e, methodType: n } = d[h];
                    if ((s({ steps: e, methodType: n === eA.he.UNKNOWN ? h : n }), h === eA.he.PAYMENT_REQUEST)) {
                        let e = A.current,
                            { paymentMethod: n } = await (0, E.YB)(t, e),
                            { billingAddressInfo: l } = (0, tr.uK)(n);
                        m((e) => ({ ...e, info: l })), C(), a(eS.pn.ADDRESS);
                    } else {
                        let e = (0, eu.eI)(h);
                        null != e ? a(e) : a(eS.pn.ADDRESS);
                    }
                } catch (e) {
                    tO.error("Error on submitting Payment Element step: ", e.message ?? JSON.stringify(e));
                } finally {
                    p(!1);
                }
            }, [h, d, A, C, a, t, s, p, m]);
        return (0, i.jsx)(tP, {
            onBack: o,
            primaryCTA: ex.Ay.CTAType.CONTINUE,
            primaryType: "submit",
            primaryText: j.intl.string(j.t.PDTjLN),
            primarySubmitting: u,
            primaryDisabled: c,
            onPrimary: _,
            shouldUseManaModal: n,
        });
    };
var tw = n(691189);
let tU = new ef.A("AddPaymentStep.tsx"),
    tk = { name: "", cardNumber: "", expirationDate: "", cvc: "" },
    tY = { email: "", name: "", country: "", line1: "", line2: "", city: "", postalCode: "", state: "" };
function tF(e) {
    let { onCardInfoChange: t } = e,
        n = (0, c.bG)([R.A], () => R.A.error);
    return (0, i.jsx)(ei, { billingError: n, onCardInfoChange: t });
}
function tG() {
    return (0, i.jsx)(D, {});
}
function tB() {
    return (0, i.jsx)(F, {});
}
function tW() {
    return (0, i.jsx)(tt, {});
}
function tH() {
    let e = (0, c.bG)([eK.A], () => eK.A.isBusy),
        t = (0, c.bG)([R.A], () => R.A.stripePaymentMethod);
    return (0, i.jsx)(er, { stripePaymentMethod: t, submitting: e });
}
function tV() {
    return (0, i.jsx)(G.N, {});
}
function tK(e) {
    let t,
        n,
        {
            paymentModalArgs: l,
            initialStep: a,
            prependSteps: o,
            appendSteps: u,
            onReturn: _,
            onComplete: f,
            onStepChange: P,
            breadcrumpSteps: S,
            currentBreadcrumpStep: x,
            header: N,
            analyticsData: v,
            analyticsLocation: b,
            hideBreadcrumbs: M = !1,
            usePaymentModalStep: L = !1,
            isEligibleForTrial: O = !1,
            allowDesktopRedirectPurchase: D = !1,
            toastContent: w,
            continueSessionToInitialStep: U,
            overwriteSubscriptionPaymentSource: k = !1,
            shouldUseManaModal: Y = !0,
        } = e,
        { stripe: F, contextMetadata: G, activitySessionId: B, paymentElementsEnabled: W } = (0, eP.P5)(),
        H = (0, eg.l)(),
        V = r.useMemo(() => {
            let e = a === eS.pn.PAYMENT_TYPE || a === eS.pn.PAYMENT_ELEMENT;
            return W && e ? (D ? eS.pn.AWAITING_BROWSER_CHECKOUT : eS.pn.PAYMENT_ELEMENT) : a;
        }, [W, a, D]),
        K = r.useMemo(() => (0, eJ.Gn)(), []),
        {
            CREDIT_CARD_STEPS: Z,
            PAYPAL_STEPS: q,
            IDEAL_STEPS: z,
            PAYMENT_REQUEST_STEPS: $,
            VENMO_STEPS: X,
            ADD_PAYMENT_STEPS: J,
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
                                        ...(a && (null == i || i === eA.he.UNKNOWN || (0, eu.PE)(i)) ? tE[t] : t_[t]),
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
                A = (0, r.useMemo)(
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
                ADD_PAYMENT_STEPS: s,
                PRZELEWY24_STEPS: p,
                EPS_STEPS: m,
                CASH_APP_STEPS: h,
                PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: A,
            };
        })({ prependSteps: o, appendSteps: u, paymentElementsEnabled: W }),
        [el, ea] = r.useState(V),
        [ei, er] = r.useState(null),
        [es, eo] = r.useState(
            (function (e) {
                switch (e) {
                    case eS.pn.CREDIT_CARD_INFORMATION:
                        return Z;
                    case eS.pn.CASH_APP_INFORMATION:
                        return et;
                    default:
                        return { steps: [eS.pn.ADD_PAYMENT_STEPS] };
                }
            })(V),
        );
    r.useEffect(() => {
        (0, E.IV)();
    }, []);
    let ec = (0, c.bG)([R.A], () => R.A.redirectedPaymentSourceId),
        ep = (0, c.bG)([e7], () => e7.cashAppPayComponent),
        em = { completeSteps: e5, setIsSubmittingCurrentStep: l.setIsSubmittingCurrentStep },
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
    let eC = r.useCallback(
            function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                er(null), ea(e), t && P({ currentStep: el, toStep: e });
            },
            [el, P],
        ),
        ef = r.useCallback(
            (e) => {
                eX.default.track(T.HAw.PAYMENT_FLOW_ADD_SOURCE_COMPLETED, {
                    load_id: G.loadId,
                    analytics_location: b,
                    payment_source_id: e.id,
                    payment_source_type: e.type,
                    payment_source_country: e.paymentMethodCountry,
                });
            },
            [G.loadId, b],
        ),
        eI = (0, c.bG)([R.A], () => R.A.error),
        ev = r.useRef(eI);
    r.useEffect(() => {
        let e = ev.current;
        (ev.current = eI),
            null != eI &&
                eI !== e &&
                eX.default.track(T.HAw.PAYMENT_FLOW_ADD_SOURCE_ERROR, {
                    load_id: G.loadId,
                    analytics_location: b,
                    payment_source_type: es.methodType,
                    error_code: eI.code,
                    error_message: eI.message,
                });
    }, [eI, G.loadId, b, es.methodType]);
    let eb = r.useCallback(
            (e) => {
                ef(e),
                    (0, d.P0)(
                        (0, p.o)(void 0 !== w ? w : j.intl.string(j.t["VJPg+l"]), m.Ck.SUCCESS, {
                            position: m.xJ.BOTTOM,
                        }),
                    ),
                    f(el, e),
                    eC(V, !1);
            },
            [eC, V, el, f, w, ef],
        ),
        [eM, eL] = r.useState(null),
        {
            setPaymentSourceId: eR,
            creditCardState: ej,
            setCreditCardState: eO,
            setTokenState: eD,
            isSubmittingCurrentStep: ew,
            billingAddressState: eU,
            setBillingAddressState: ek,
            setIsSubmittingCurrentStep: eY,
            braintreeEmail: eF,
            braintreeNonce: eG,
            venmoUsername: eB,
            adyenPaymentData: eK,
            epsBankState: eZ,
            setEpsBankState: ez,
            p24BankState: eQ,
            setP24BankState: e2,
            selectedSkuId: e1,
        } = l,
        e3 = e1 ?? "",
        e4 = (0, c.bG)([e$.A], () => e$.A.get(e3), [e3]),
        e6 = e4?.eligiblePaymentGateways?.map((e) => e.valueOf());
    function e5(e) {
        eR(e.id), eb(e);
    }
    let e9 = () => {
            eo(J), eC(eS.pn.PAYMENT_TYPE);
        },
        te = (0, eE.wD)({
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
            combinedStripeElementsRef: tr,
            stripePaymentElementProps: ts,
            stripeAddressElementProps: to,
            remountAddressElement: tu,
            addressElementKey: tc,
        } = te,
        td = r.useCallback(() => {
            eC(eS.pn.ADDRESS), W && eE.Ky.includes(el) && tu();
        }, [eC, W, tu, el]),
        tp = r.useCallback(
            (e) => {
                W && null != tl && (0, eu.PE)(e) ? ta(e) : eC(eS.pn.PAYMENT_TYPE);
            },
            [W, tl, ta, eC],
        ),
        tm = L ? (0, i.jsx)(eV.A, { className: ty._8 }) : null,
        th = (() => {
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
        case eS.pn.ATTEMPT_GOOGLE_PAY:
        case eS.pn.ATTEMPT_APPLE_PAY:
        case eS.pn.PAYMENT_TYPE:
            (t = (0, i.jsx)(tT, {
                prependSteps: o,
                appendSteps: u,
                analyticsLocation: b,
                isEligibleForTrial: O,
                allowDesktopRedirectPurchase: D,
                onPaymentRequestSourceFailed: e9,
                paymentModalArgs: l,
                handleStepChange: eC,
                setPaymentMethodSteps: eo,
                setPaymentRequestPaymentMethod: eL,
                currentStep: el,
                setInfoNotice: er,
                completeSteps: e5,
                paymentSourceTypeRestrictions: e6,
                CREDIT_CARD_STEPS: Z,
                PAYPAL_STEPS: q,
                VENMO_STEPS: X,
                PAYMENT_REQUEST_STEPS: $,
                PRZELEWY24_STEPS: Q,
                EPS_STEPS: ee,
                IDEAL_STEPS: z,
                CASH_APP_STEPS: et,
                ...th,
            })),
                (n = (0, i.jsx)(tx, {
                    shouldUseManaModal: Y,
                    onReturn: _,
                    handleStepChange: eC,
                    currentStep: el,
                    ...th,
                }));
            break;
        case eS.pn.PAYMENT_ELEMENT:
            if (!W) throw (0, E.ne)("Payment Elements not enabled, invalid step", !0);
            (t = null),
                (n = (0, i.jsx)(tD, {
                    handleStepChange: eC,
                    shouldUseManaModal: Y,
                    setPaymentMethodSteps: eo,
                    primarySubmitting: ew,
                    primaryDisabled: !tn,
                    onBack: () => {
                        ti(), _?.();
                    },
                    paymentModalArgs: l,
                    PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: en,
                    ...te,
                }));
            break;
        case eS.pn.CREDIT_CARD_INFORMATION:
            let tA = async (e) => {
                eY(!0);
                try {
                    let t = await (0, E.YJ)(F, e);
                    eD({ token: t }), eC(eS.pn.ADDRESS);
                } catch (e) {
                    tU.error(e.message ?? JSON.stringify(e));
                } finally {
                    eY(!1);
                }
            };
            t = (0, i.jsx)(tF, {
                onCardInfoChange: (e, t) => {
                    eO({ info: e, isValid: t }), ek((t) => ({ ...t, info: { ...t.info, name: e.name } }));
                },
            });
            let tC = !ej.isValid,
                tf = () => {
                    eC(eS.pn.PAYMENT_TYPE);
                };
            n = (0, i.jsx)(s.ElementsConsumer, {
                children: (e) => {
                    let { elements: t } = e;
                    return (0, i.jsx)(tP, {
                        onBack: tf,
                        primaryCTA: ex.Ay.CTAType.CONTINUE,
                        primaryType: "submit",
                        primaryText: j.intl.string(j.t.PDTjLN),
                        primarySubmitting: ew,
                        primaryDisabled: tC,
                        onPrimary: () => tA(t),
                        shouldUseManaModal: Y,
                    });
                },
            });
            break;
        case eS.pn.AWAITING_BROWSER_CHECKOUT:
        case eS.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
        case eS.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
            let tS = () => {
                eo(Z), eC(W ? eS.pn.PAYMENT_ELEMENT : eS.pn.CREDIT_CARD_INFORMATION);
            };
            (t = (0, i.jsx)(eW, { step: el, onPurchaseComplete: () => f(el), onHandoffFailure: tS })),
                (n = (0, i.jsx)(eH, {
                    onPrimaryClick: tS,
                    onBackClick: () => {
                        W ? (ti(), _?.()) : (eo(J), eC(eS.pn.PAYMENT_TYPE));
                    },
                }));
            break;
        case eS.pn.EPS_INFORMATION:
            (t = (0, i.jsx)(e_, {
                type: eA.he.EPS,
                onAccountHolderNameChange: (e) => ek({ info: { ...eU.info, name: e }, isValid: eU.isValid }),
                onEPSBankChange: (e) => ez(e),
                epsBankValue: eZ,
                billingAddressInfo: eU.info,
            })),
                (n = (0, i.jsx)(tP, {
                    onBack: () => tp(eA.he.EPS),
                    primaryCTA: ex.Ay.CTAType.CONTINUE,
                    primaryText: j.intl.string(j.t.PDTjLN),
                    primaryDisabled: void 0 === eZ || "" === eZ || "" === eU.info.name,
                    onPrimary: () => td(),
                    shouldUseManaModal: Y,
                }));
            break;
        case eS.pn.IDEAL_INFORMATION:
            (t = (0, i.jsx)(ed, {
                type: eA.he.IDEAL,
                onAccountHolderNameChange: (e) => ek({ info: { ...eU.info, name: e }, isValid: eU.isValid }),
                billingAddressInfo: eU.info,
            })),
                (n = (0, i.jsx)(tP, {
                    onBack: () => eC(eS.pn.PAYMENT_TYPE),
                    primaryCTA: ex.Ay.CTAType.CONTINUE,
                    primaryText: j.intl.string(j.t.PDTjLN),
                    primaryDisabled: "" === eU.info.name,
                    onPrimary: () => td(),
                    shouldUseManaModal: Y,
                }));
            break;
        case eS.pn.PRZELEWY24_INFORMATION:
            (t = (0, i.jsx)(e_, {
                type: eA.he.PRZELEWY24,
                onNameChange: (e) => ek({ info: { ...eU.info, name: e }, isValid: eU.isValid }),
                onEmailChange: (e) => ek({ info: { ...eU.info, email: e }, isValid: eU.isValid }),
                onP24BankChange: (e) => {
                    e2(e);
                },
                p24BankValue: eQ,
                billingAddressInfo: eU.info,
            })),
                (n = (0, i.jsx)(tP, {
                    onBack: () => tp(eA.he.PRZELEWY24),
                    primaryCTA: ex.Ay.CTAType.CONTINUE,
                    primaryText: j.intl.string(j.t.PDTjLN),
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
        case eS.pn.PAYPAL_INFORMATION:
            let tN = 0 !== eF.length && null != eG;
            (t = (0, i.jsx)(tG, {})),
                (n = (0, i.jsx)(tP, {
                    onBack: () => tp(eA.he.PAYPAL),
                    primaryCTA: ex.Ay.CTAType.CONTINUE,
                    primaryText: tN ? j.intl.string(j.t.PDTjLN) : j.intl.string(j.t.Djzd7L),
                    onPrimary: () => {
                        let e;
                        return tN
                            ? td()
                            : void (null == (e = y.A.getLastURL())
                                  ? g()
                                  : (C.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_START" }), window.open(e)));
                    },
                    shouldUseManaModal: Y,
                }));
            break;
        case eS.pn.VENMO_INFORMATION:
            let tg = 0 !== eB.length && null != eG;
            (t = (0, i.jsx)(tB, {})),
                (n = (0, i.jsx)(tP, {
                    onBack: () => tp(eA.he.VENMO),
                    primaryCTA: ex.Ay.CTAType.CONTINUE,
                    primaryText: tg ? j.intl.string(j.t.PDTjLN) : j.intl.string(j.t["4KoTLM"]),
                    onPrimary: () => (tg ? td() : void I()),
                    shouldUseManaModal: Y,
                }));
            break;
        case eS.pn.PAYMENT_REQUEST_INFORMATION:
            (t = (0, i.jsx)(tH, {})),
                (n = (0, i.jsx)(tP, { onBack: () => eC(eS.pn.PAYMENT_TYPE), shouldUseManaModal: Y }));
            break;
        case eS.pn.CASH_APP_INFORMATION:
            let tI = null != eK;
            (t = (0, i.jsx)(tW, {})),
                (n = (0, i.jsx)(tP, {
                    onBack: () => tp(eA.he.CASH_APP),
                    primaryCTA: ex.Ay.CTAType.CONTINUE,
                    primaryText: tI ? j.intl.string(j.t.PDTjLN) : j.intl.string(j.t["9ALP8w"]),
                    onPrimary: () => (tI ? td() : e8()),
                    primaryDisabled: null == ep,
                    shouldUseManaModal: Y,
                }));
            break;
        case eS.pn.ADDRESS:
            let tv = W && null != tl;
            (t = (0, i.jsx)(tR, {
                paymentModalArgs: l,
                paymentSourceType: es.methodType ?? eA.he.CARD,
                shouldUsePaymentElement: tv,
            })),
                (n = (0, i.jsx)(tj, {
                    paymentModalArgs: l,
                    shouldUseManaModal: Y,
                    analyticsLocation: b,
                    overwriteSubscriptionPaymentSource: k,
                    handleStepChange: eC,
                    onPaymentRequestSourceFailed: e9,
                    paymentRequestPaymentMethod: eM,
                    completeSteps: e5,
                    paymentMethodSteps: es,
                    shouldUsePaymentElement: tv,
                    ...te,
                }));
            break;
        case eS.pn.AWAITING_AUTHENTICATION:
            t = (0, i.jsx)(tV, {});
            break;
        default:
            throw Error(`Unexpected step: ${el}`);
    }
    let tb = W && tt,
        tM = tb ? "combined_stripe_elements" : void 0,
        tL = (0, i.jsxs)(h.Y, {
            className: tw.C9,
            staticClassName: tw.a2,
            animatedNodeClassName: tw.L2,
            fillParent: !0,
            overrideKey: tM,
            step: el,
            steps: es.steps,
            sideMargin: 20,
            children: [
                null != ei &&
                    (0, i.jsx)("div", { className: ty.Ns, children: (0, i.jsx)(A.w, { type: "info", children: ei }) }),
                tb &&
                    (0, i.jsx)(eE.e4, {
                        step: el,
                        analyticsContext:
                            null != v ? { activitySessionId: B, contextMetadata: G, analyticsData: v } : void 0,
                        paymentElementSelectedType: tl,
                        elementsRef: tr,
                        stripePaymentElementProps: ts,
                        stripeAddressElementProps: to,
                        addressElementKey: tc,
                        billingAddressInfo: eU.info,
                        onSetupError: () => {
                            ti(), eC(eS.pn.PAYMENT_TYPE);
                        },
                        paymentElementFooter: (0, i.jsx)(ey.Z4, {
                            className: ty.SO,
                            stackingBehavior: "stack",
                            onComplete: () => {
                                setTimeout(() => H(eS.pn.REVIEW), 0);
                            },
                        }),
                    }),
                t,
            ],
        }),
        tO = el === eS.pn.PAYMENT_TYPE && 0 === o.length ? null : n;
    return L
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  O && (0, i.jsx)(eT.A, { className: ty.At, isEligibleForTrial: O }),
                  (0, i.jsxs)(eN.dZ, { children: [tm, tL] }),
                  (0, i.jsx)(eN.UX, { children: tO }),
              ],
          })
        : (0, i.jsx)(e0.A, {
              shouldUseManaModal: Y,
              steps: S ?? es.steps,
              currentStep: x ?? el,
              overrideKey: tM,
              paymentError: l.paymentError,
              header: N,
              hideBreadcrumbs: M,
              body: tL,
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
    (0, es.Ay)(() => {
        (0, P.j)().then((e) => {
            e.client
                .create({ authorization: T.Gg3.BRAINTREE.KEY })
                .then((e) => {
                    new Promise((e, t) => {
                        let n = Date.now(),
                            l = () => {
                                Date.now() - n >= 5e3
                                    ? t(Error("Timeout waiting for Braintree client to be initialized in store"))
                                    : null != y.A.getClient()
                                      ? e()
                                      : setTimeout(l, 1e3);
                            },
                            a = () => {
                                C.h.unsubscribe("BRAINTREE_CREATE_CLIENT_SUCCESS", a), setTimeout(l, 0);
                            };
                        C.h.subscribe("BRAINTREE_CREATE_CLIENT_SUCCESS", a);
                    })
                        .then(() => {
                            N(), x();
                        })
                        .catch((e) => {
                            f.pM(e);
                        }),
                        C.h.dispatch({ type: "BRAINTREE_CREATE_CLIENT_SUCCESS", client: e });
                })
                .catch(() => C.h.dispatch({ type: "BRAINTREE_CREATE_CLIENT_FAIL" }));
        }),
            l || (0, E.$o)();
    }),
        r.useEffect(() => {
            null == a && null != i && i.includes(eA.he.CASH_APP) && e5();
        }, [i, a]);
    let [s, o] = r.useState(t);
    null != t && null == s && o(t);
    let [u, d] = r.useState(() => ({ info: tk, isValid: !1 })),
        [p, m] = r.useState(() => ({ info: tY, isValid: !1 })),
        [h, A] = r.useState(""),
        [_, S] = r.useState(""),
        [g, I] = r.useState(() => ({ token: null })),
        [v, M, L, j, O] = (0, c.yK)([R.A], () => [
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
            C.h.subscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e),
            () => {
                C.h.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e), (0, b.ET)();
            }
        );
    }, []);
    let [U, k] = r.useState(!1),
        [Y, F] = r.useState(!1),
        [G, B] = r.useState(null),
        W = r.useRef(null),
        H = (0, c.bG)([eZ.A], () => eZ.A.isAwaitingAuthentication),
        [V, K] = (0, c.yK)([ez.A], () => [ez.A.purchaseTokenAuthState, ez.A.purchaseTokenHash]);
    return (
        r.useEffect(() => {
            null != G && null != W.current && W.current.scrollIntoView({ behavior: "smooth" });
        }, [G]),
        {
            paymentSources: n,
            paymentSourceId: s,
            hasFetchedPaymentSources: l,
            setPaymentSourceId: o,
            creditCardState: u,
            setCreditCardState: d,
            tokenState: g,
            setTokenState: I,
            billingAddressState: p,
            setBillingAddressState: m,
            isSubmittingCurrentStep: U,
            setIsSubmittingCurrentStep: k,
            hasRedirectURL: Y,
            setHasRedirectURL: F,
            braintreeEmail: v,
            braintreeNonce: M,
            venmoUsername: j,
            adyenPaymentData: O,
            paymentError: null != D ? D : L,
            paymentAuthenticationState: w ? eQ.oc.PENDING : null != D ? eQ.oc.ERROR : eQ.oc.NONE,
            purchaseError: G,
            setPurchaseError: B,
            purchaseErrorBlockRef: W,
            isAuthenticating: H,
            purchaseTokenAuthState: V,
            purchaseTokenHash: K,
            epsBankState: _,
            setEpsBankState: S,
            p24BankState: h,
            setP24BankState: A,
        }
    );
}
