n.d(t, { Y: () => t$, _V: () => tJ });
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
    A = n(683071),
    C = n(228366),
    E = n(636537),
    y = n(753390),
    P = n(70142),
    S = n(739508),
    _ = n(184015),
    I = n(723702),
    f = n(652215);
function T() {
    let e = P.A.getClient();
    null != e &&
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
function v() {
    let e = P.A.getPayPalClient();
    if (null == e) throw Error("braintree paypal client must be initialized before calling this");
    C.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_START" });
    let t = Promise.resolve("");
    (0, I.isDesktop)() && (t = (0, y.jf)(f.hes.PAYPAL)),
        t
            .then(() => e.tokenize({ flow: "vault" }))
            .then((e) => {
                let { email: t, firstName: n, lastName: l, billingAddress: r } = e.details;
                C.h.dispatch({
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
function x(e, t) {
    if (null == e) return Promise.resolve();
    C.h.dispatch(t);
    try {
        return Promise.resolve(e.teardown());
    } catch (e) {
        return Promise.resolve();
    }
}
var R = n(391048),
    M = n(292666),
    b = n(812745),
    L = n(825755),
    j = n(375708);
class O extends a.PureComponent {
    componentDidMount() {
        null != this.props.paypalClient && v();
    }
    componentDidUpdate(e) {
        null == e.paypalClient && null != this.props.paypalClient && v();
    }
    componentWillUnmount() {
        x(P.A.getPayPalClient(), { type: "BRAINTREE_TEARDOWN_PAYPAL_CLIENT" }).then(() => {
            null != P.A.getClient() && N();
        });
    }
    render() {
        let { braintreeEmail: e, paypalClient: t } = this.props;
        return (0, i.jsx)(M.k, {
            label: j.intl.string(j.t.QQBAos),
            leading: { type: "image", src: (0, b.Nj)(b.Ay.Types.PAYPAL) },
            value: e,
            readOnly: !0,
            placeholder: null == t ? j.intl.string(j.t.dte2M9) : j.intl.string(j.t.hopw7X),
        });
    }
}
let w = c.Ay.connectStores([P.A, L.A], () => ({
    braintreeEmail: L.A.braintreeEmail,
    paypalClient: P.A.getPayPalClient(),
}))(O);
var D = n(534514),
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
        x(P.A.getVenmoClient(), { type: "BRAINTREE_TEARDOWN_VENMO_CLIENT" }).then(() => {
            null != P.A.getClient() && T();
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
                              (0, i.jsx)(D.D, {
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
let Y = c.Ay.connectStores([P.A, L.A], () => ({ venmoUsername: L.A.venmoUsername, venmoClient: P.A.getVenmoClient() }))(
    G,
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
    let t = a.useRef(null),
        { stripeType: n, flipped: l, updateCompleted: r, onFocus: o, onBlur: u } = e,
        [c, d] = a.useState(b.Be.UNKNOWN),
        [p, m] = a.useState(!1),
        [h, A] = a.useState(!1),
        [C, E] = a.useState(null),
        [y, P] = a.useState({}),
        S = (0, s.useElements)(),
        _ = a.useCallback(() => {
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
        I = a.useCallback(
            (e) => {
                h || e.empty || A(!0), null != r && r(e.complete), null != e.error && m(!1);
            },
            [h, r],
        ),
        f = a.useCallback(() => {
            m(!0), o?.();
        }, [o]),
        T = a.useCallback(() => {
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
                                    ? E(j.intl.string(j.t.eOIfuy))
                                    : null != e.error
                                      ? E(j.intl.string(j.t.x4pWtJ))
                                      : E(null),
                                I(e);
                        }),
                            e.on("focus", f),
                            e.on("blur", T);
                        break;
                    }
                    case "cardExpiry": {
                        let e = S.getElement(s.CardExpiryElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            null != e.error || (e.empty && h) ? E(j.intl.string(j.t["9/zZdl"])) : E(null), I(e);
                        }),
                            e.on("focus", f),
                            e.on("blur", T);
                        break;
                    }
                    case "cardCvc": {
                        let e = S.getElement(s.CardCvcElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            null != e.error || (e.empty && h) ? E(j.intl.string(j.t.ro4isZ)) : E(null), I(e);
                        }),
                            e.on("focus", f),
                            e.on("blur", T);
                    }
                }
        }, [T, I, f, c, S, h, n]);
    a.useEffect(
        () => (
            N(),
            () => {
                _();
            }
        ),
        [N, _],
    );
    let v = (0, q.r)(Z.A.colors.TEXT_SUBTLE).hex(),
        g = (0, q.r)(Z.A.colors.TEXT_STRONG).hex();
    function x() {
        return W()($.vB, { [$.Tn]: null !== C, [$.iH]: p, [$.yD]: "cardNumber" === n });
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
                    "::placeholder": { color: v },
                },
            });
        }, [t, v, g]),
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
                                        options: { style: y, placeholder: j.intl.string(j.t.gPRHfw), disableLink: !1 },
                                        className: x(),
                                    }),
                                ],
                            });
                        case "cardExpiry":
                            return (0, i.jsx)(s.CardExpiryElement, {
                                options: { style: y, placeholder: j.intl.string(j.t.xeEWQ6) },
                                className: x(),
                            });
                        case "cardCvc":
                            return (0, i.jsx)(s.CardCvcElement, {
                                options: { style: y, placeholder: j.intl.string(j.t.wZz04F) },
                                className: x(),
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
        l = a.useRef(t),
        [r, s] = a.useState(!1),
        [o, u] = a.useState({}),
        [c, d] = a.useState({ name: "", country: "", postalCode: "" }),
        [p, m] = a.useState({}),
        [h, A] = a.useState({}),
        { setFocusLockDisabled: C } = a.useContext(H.M);
    a.useEffect(() => () => {
        void 0 !== C && C(!1);
    });
    let E = a.useCallback(() => {
        void 0 !== C && C(!0);
    }, [C]);
    function y(e, t) {
        !!o[e] !== t && u((n) => ({ ...n, [e]: t }));
    }
    let P = a.useCallback(
        function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = {};
            return (e || p.name) && "" === c.name && (t.name = j.intl.string(j.t.lIkVsi)), t;
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
                V.default.getCurrentUser()?.nsfwAllowed
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
                                    title: () => j.intl.string(j.t.cVyJ3o),
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
                                    title: () => j.intl.string(j.t["CeBa/4"]),
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
                                    title: () => j.intl.string(j.t.Fd3rOz),
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
                            r = { name: h.name };
                        p[t] || "" === e || (l[t] = !0),
                            (n[t] = e),
                            l[t] && "" === e ? "name" === t && (r.name = j.intl.string(j.t.lIkVsi)) : delete r[t],
                            d(n),
                            m(l),
                            A(r);
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
var er = n(723429);
let ei = (e) => {
        let { billingError: t, onCardInfoChange: n } = e,
            l = null != t && (null == t.code || el(t) === en.CREDIT_CARD_INFORMATION);
        return (0, i.jsxs)(a.Fragment, {
            children: [
                l
                    ? (0, i.jsx)("div", {
                          className: er.QK,
                          children: (0, i.jsx)(A.w, { type: "critical", children: j.intl.string(j.t["4vnhKV"]) }),
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
            children: (0, i.jsx)(M.k, {
                label: j.intl.string(j.t["mmDvV+"]),
                leading: { type: "image", src: (0, b.Nj)(a) },
                value: n && null != r ? j.intl.formatToPlainString(j.t.bCynoK, r) : void 0,
                readOnly: !0,
                placeholder: j.intl.string(j.t.bWMH78),
            }),
        });
    };
var es = n(964486),
    eo = n(475743),
    eu = n(446044),
    ec = n(721101),
    ed = n(648335),
    ep = n(384365);
let em = function (e) {
    let { onAccountHolderNameChange: t, billingAddressInfo: n } = e,
        l = a.useRef(null);
    return (0, i.jsx)("div", {
        className: ep.r,
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
var eh = n(462887),
    eA = n(331322),
    eC = n(736653),
    eE = n(818348),
    ey = n(198650);
let eP = function (e) {
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
        case eE.he.PRZELEWY24: {
            let r = (0, eh.M)(t) ? "/assets/f4150b3aed6c4679.svg" : "/assets/8b825aafb2e4dbed.svg",
                { onNameChange: a, onEmailChange: o, onP24BankChange: u, p24BankValue: c, billingAddressInfo: d } = e;
            return (0, i.jsx)("div", {
                className: ey.rf,
                children: (0, i.jsxs)(eA.B, {
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
                            onChange: (e) => a(e),
                            value: d.name,
                        }),
                        (0, i.jsxs)(eA.B, {
                            gap: 4,
                            children: [
                                (0, i.jsx)(U.E, { variant: "text-sm/semibold", children: j.intl.string(j.t.De3b8t) }),
                                (0, i.jsx)(s.P24BankElement, {
                                    options: { value: c, style: l },
                                    onChange: (e) => u(e.value),
                                }),
                                (0, i.jsx)("div", {
                                    className: ey.je,
                                    children: (0, i.jsx)("img", { src: r, alt: "Przelewy24" }),
                                }),
                            ],
                        }),
                    ],
                }),
            });
        }
        case eE.he.EPS: {
            let { onAccountHolderNameChange: r, onEPSBankChange: a, epsBankValue: o, billingAddressInfo: u } = e,
                c = (0, eh.M)(t) ? "/assets/025b24b0055c8d81.svg" : "/assets/1dae7d71a65fd90f.svg";
            return (0, i.jsx)("div", {
                className: ey.rf,
                children: (0, i.jsxs)(eA.B, {
                    gap: 16,
                    children: [
                        (0, i.jsx)(M.k, {
                            label: j.intl.string(j.t.sN3wrd),
                            inputRef: n,
                            name: j.intl.string(j.t.sN3wrd),
                            placeholder: j.intl.string(j.t.sN3wrd),
                            onChange: (e) => r(e),
                            value: u.name,
                        }),
                        (0, i.jsxs)(eA.B, {
                            gap: 4,
                            children: [
                                (0, i.jsx)(U.E, { variant: "text-sm/semibold", children: j.intl.string(j.t.dFyV07) }),
                                (0, i.jsx)(s.EpsBankElement, {
                                    options: { value: o, style: l },
                                    onChange: (e) => a(e.value),
                                }),
                                (0, i.jsx)("div", {
                                    className: ey.je,
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
var eS = n(211528),
    e_ = n(31823);
n(426398), n(211083);
var eI = n(944355),
    ef = n(722847),
    eT = n(626584),
    eN = n(768050),
    ev = n(166532),
    eg = n(69494),
    ex = n(19311),
    eR = n(482132),
    eM = n(615310),
    eb = n(364840),
    eL = n(73825),
    ej = n(558620),
    eO = n(683433),
    ew = n(36167),
    eD = n(937008),
    eU = (((r = {})[(r.UNKNOWN = 0)] = "UNKNOWN"), (r[(r.PENDING = 1)] = "PENDING"), (r[(r.DONE = 2)] = "DONE"), r);
let ek = 0,
    eG = null,
    eY = null,
    eF = null;
class eB extends c.Ay.Store {
    static displayName = "BrowserCheckoutStateStore";
    get browserCheckoutState() {
        return ek;
    }
    get loadId() {
        return eG;
    }
    get skuId() {
        return eY;
    }
    get planId() {
        return eF;
    }
}
let eW = new eB(C.h, {
    USER_PAYMENT_BROWSER_CHECKOUT_STARTED: function (e) {
        (ek = 1), (eG = e.loadId);
    },
    USER_PAYMENT_BROWSER_CHECKOUT_DONE: function (e) {
        eG === e.loadId && ((eY = e.skuId ?? null), (eF = e.skuSubscriptionPlanId ?? null), (ek = 2));
    },
});
var eH = n(788868),
    eV = n(647926);
let eK = (e) => {
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
            } = (0, c.cf)([eW], () => ({
                browserCheckoutState: eW.browserCheckoutState,
                browserCheckoutStateLoadId: eW.loadId,
                browserCheckoutStateSkuId: eW.skuId,
                browserCheckoutStatePlanId: eW.planId,
            })),
            A = (0, ej.A)(),
            { isGift: C } = (0, eD.Pv)(),
            [E, P] = a.useState(!1);
        switch (n) {
            case ev.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
                t = f.do8.GOOGLE_PAY;
                break;
            case ev.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
                t = f.do8.APPLE_PAY;
        }
        return (
            a.useEffect(() => {
                let e = setTimeout(() => {
                    E ||
                        (P(!0),
                        (0, y.Ze)(u.loadId),
                        (0, ew.my)(
                            {
                                planId: A?.id ?? eH.gD.PREMIUM_MONTH_TIER_2,
                                isGift: C,
                                loadId: u.loadId,
                                paymentMethodType: t,
                            },
                            r,
                        ));
                }, 1e3);
                return () => clearTimeout(e);
            }, [A, C, u, r, P, E, t]),
            a.useEffect(() => {
                null !== m && (eH.oz.includes(m) && ((0, eL.ur)(m), (0, y.hP)()), s(m)),
                    null !== h && o(h),
                    p === u.loadId && d === eU.DONE && l();
            }, [s, o, d, p, m, h, u, l]),
            (0, i.jsxs)("div", {
                className: eV.rf,
                children: [
                    (0, i.jsx)(D.D, { variant: "heading-xl/bold", children: j.intl.string(j.t.C4HYfy) }),
                    (0, i.jsx)(U.E, {
                        variant: "text-md/normal",
                        className: eV.h_,
                        children: j.intl.string(j.t.xfG7Jp),
                    }),
                ],
            })
        );
    },
    eZ = (e) => {
        let { onPrimaryClick: t, onBackClick: n } = e;
        return (0, i.jsx)(eb.j, {
            children: (0, i.jsxs)("div", {
                className: eV.kL,
                children: [
                    (0, i.jsx)(eO.A, { onClick: n }),
                    (0, i.jsx)(eO.F, { onClick: t, children: j.intl.string(j.t["4Qvmmj"]) }),
                ],
            }),
        });
    };
var eq = n(921925),
    ez = n(615405),
    e$ = n(153084),
    eJ = n(295405),
    eX = n(71319),
    eQ = n(67480),
    e0 = n(174459),
    e2 = n(427262),
    e3 = n(251913),
    e1 = n(632638),
    e4 = n(632088);
let e7 = null,
    e6 = null;
class e5 extends c.Ay.Store {
    static displayName = "AdyenStore";
    get client() {
        return e7;
    }
    get cashAppPayComponent() {
        return e6;
    }
}
let e8 = new e5(C.h, {
    ADYEN_CREATE_CLIENT_SUCCESS: function (e) {
        let { client: t } = e;
        e7 = t;
    },
    ADYEN_TEARDOWN_CLIENT: function () {
        e7 = null;
    },
    ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS: function (e) {
        let { component: t } = e;
        e6 = t;
    },
});
async function e9() {
    return await E.Bo.get({ url: f.Rsh.BILLING_ADYEN_PAYMENT_METHODS, oldFormErrors: !0, rejectWithError: !1 });
}
async function te() {
    try {
        let e = await e9(),
            { default: t } = await Promise.all([n.e("94678"), n.e("40002")]).then(n.bind(n, 971193)),
            l = await t({
                environment: f.Gg3.ADYEN.KEY.startsWith("live_") ? "live" : "test",
                clientKey: f.Gg3.ADYEN.KEY,
                analytics: { enabled: !1 },
                paymentMethodsResponse: e.body,
            });
        C.h.dispatch({ type: "ADYEN_CREATE_CLIENT_SUCCESS", client: l }),
            (function (e) {
                if (null != e8.cashAppPayComponent) {
                    tn(), tt();
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
                                        (n = !1), (t = j.intl.string(j.t.TJ8dDB));
                                }
                                (0, y.i0)(e.message, n, t);
                            }
                        },
                    })
                    .mount(`#${e4.h}`);
                C.h.dispatch({ type: "ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS", component: t });
            })(l);
    } catch (e) {
        (0, S.pM)(e), C.h.dispatch({ type: "ADYEN_CREATE_CLIENT_FAIL" });
    }
}
function tt() {
    let e = e8.cashAppPayComponent;
    if (null == e) throw Error("Adyen CashAppPay component must be created before mounting.");
    try {
        e.mount(`#${e4.h}`);
    } catch (e) {}
}
function tn() {
    e8.cashAppPayComponent?.unmount();
}
function tl() {
    let e = e8.cashAppPayComponent;
    if (null == e) throw Error("Adyen CashAppPay component must be created before submitting.");
    e.submit();
}
var tr = n(40417);
function ti(e) {
    let { className: t } = e,
        n = (0, c.bG)([e8], () => e8.cashAppPayComponent),
        l = (0, c.bG)([L.A], () => L.A.adyenPaymentData);
    a.useEffect(
        () => (
            null == l && null != n && (tt(), tl()),
            () => {
                tn();
            }
        ),
        [l, n],
    );
    let r = l?.paymentMethod?.cashtag ?? "",
        s = null != l && "" !== r;
    return (0, i.jsxs)("div", {
        className: t,
        children: [
            (0, i.jsx)(b.Ay, { type: b.Ay.Types.CASH_APP, size: b.y3.MEDIUM, className: tr.K }),
            s
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(D.D, {
                              variant: r.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
                              className: tr.y,
                              children: j.intl.format(j.t["ze/1yE"], { cashtag: r }),
                          }),
                          (0, i.jsx)(U.E, {
                              variant: "text-md/medium",
                              className: tr.y,
                              children: j.intl.string(j.t.VPOx7N),
                          }),
                      ],
                  })
                : (0, i.jsx)(U.E, {
                      variant: "text-md/medium",
                      className: tr.y,
                      children: null == n ? j.intl.string(j.t["CgVe/w"]) : j.intl.string(j.t["1MqcjI"]),
                  }),
        ],
    });
}
var ta = n(73079),
    ts = n(459357),
    to = n(550238),
    tu = n(869177),
    tc = n(71532),
    td = n(218075);
let tp = [ev.pn.PAYMENT_TYPE],
    tm = [ev.pn.PAYMENT_TYPE, ev.pn.CREDIT_CARD_INFORMATION, ev.pn.ADDRESS],
    th = [ev.pn.PAYMENT_TYPE, ev.pn.PAYPAL_INFORMATION, ev.pn.ADDRESS],
    tA = [ev.pn.PAYMENT_TYPE, ev.pn.VENMO_INFORMATION, ev.pn.ADDRESS],
    tC = [ev.pn.PAYMENT_TYPE, ev.pn.CASH_APP_INFORMATION, ev.pn.ADDRESS],
    tE = [ev.pn.PAYMENT_TYPE, ev.pn.PRZELEWY24_INFORMATION, ev.pn.ADDRESS],
    ty = [ev.pn.PAYMENT_TYPE, ev.pn.EPS_INFORMATION, ev.pn.ADDRESS],
    tP = [ev.pn.PAYMENT_TYPE, ev.pn.IDEAL_INFORMATION, ev.pn.ADDRESS],
    tS = [ev.pn.PAYMENT_TYPE, ev.pn.ADDRESS],
    t_ = {
        SHARED_ADD_PAYMENT_STEPS: tp,
        SHARED_CREDIT_CARD_STEPS: tm,
        SHARED_PAYPAL_STEPS: th,
        SHARED_VENMO_STEPS: tA,
        SHARED_PRZELEWY24_STEPS: tE,
        SHARED_EPS_STEPS: ty,
        SHARED_IDEAL_STEPS: tP,
        SHARED_CASH_APP_STEPS: tC,
        SHARED_TYPE_AND_ADDRESS_STEPS: tS,
    },
    tI = {
        SHARED_ADD_PAYMENT_STEPS: [ev.pn.PAYMENT_ELEMENT],
        SHARED_CREDIT_CARD_STEPS: [ev.pn.PAYMENT_ELEMENT, ev.pn.ADDRESS],
        SHARED_PAYPAL_STEPS: [ev.pn.PAYMENT_ELEMENT, ev.pn.PAYPAL_INFORMATION, ev.pn.ADDRESS],
        SHARED_VENMO_STEPS: [ev.pn.PAYMENT_ELEMENT, ev.pn.VENMO_INFORMATION, ev.pn.ADDRESS],
        SHARED_CASH_APP_STEPS: [ev.pn.PAYMENT_ELEMENT, ev.pn.CASH_APP_INFORMATION, ev.pn.ADDRESS],
        SHARED_PRZELEWY24_STEPS: [ev.pn.PAYMENT_ELEMENT, ev.pn.PRZELEWY24_INFORMATION, ev.pn.ADDRESS],
        SHARED_EPS_STEPS: [ev.pn.PAYMENT_ELEMENT, ev.pn.EPS_INFORMATION, ev.pn.ADDRESS],
        SHARED_IDEAL_STEPS: [ev.pn.PAYMENT_ELEMENT, ev.pn.ADDRESS],
        SHARED_TYPE_AND_ADDRESS_STEPS: [ev.pn.PAYMENT_ELEMENT, ev.pn.ADDRESS],
    };
var tf = n(801753);
function tT(e) {
    return () => (null != L.A.error && (0, R.ET)(), e());
}
function tN(e) {
    let { onPrimary: t, onBack: n, ...l } = e,
        r = t;
    null != t && (r = tT(t));
    let a = n;
    return null != n && (a = tT(n)), (0, i.jsx)(ex.Ay, { ...l, onPrimary: r, onBack: a });
}
function tv(e) {
    let { paymentSourceTypeRestrictions: t } = e,
        n = null != t && t.length > 0 ? td.fU.ADD_NEW_PAYMENT_METHOD : void 0,
        { enabled: l } = (0, ts.c)({ location: "AddPaymentStep" });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(td.je, { paymentRestrictionBannerType: n }),
            (0, i.jsx)(ta.A, { ...e }),
            l && (0, i.jsx)(eI.Z4, { className: tf.SO }),
        ],
    });
}
let tg = (e) => {
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
                paymentSourceTypeRestrictions: A,
                CREDIT_CARD_STEPS: C,
                PAYPAL_STEPS: E,
                VENMO_STEPS: P,
                PAYMENT_REQUEST_STEPS: S,
                PRZELEWY24_STEPS: _,
                EPS_STEPS: f,
                IDEAL_STEPS: T,
                CASH_APP_STEPS: N,
                setConnectorPaymentRequestReady: v,
                connectorPaymentRequestRef: g,
            } = e,
            { activitySessionId: x } = (0, e_.V)(),
            M = (0, ef.t4)((e) => e.contextMetadata),
            { setBillingAddressState: b } = o,
            O = (e, l) => {
                switch (e) {
                    case eE.he.CARD:
                        a ? u(ev.pn.AWAITING_BROWSER_CHECKOUT) : (c(C), u(ev.pn.CREDIT_CARD_INFORMATION));
                        break;
                    case eE.he.PAYPAL:
                        c(E), u(ev.pn.PAYPAL_INFORMATION);
                        break;
                    case eE.he.VENMO:
                        c(P), u(ev.pn.VENMO_INFORMATION);
                        break;
                    case eE.he.PAYMENT_REQUEST:
                        a && "googlePay" === l
                            ? u(ev.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY)
                            : a && "applePay" === l
                              ? u(ev.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY)
                              : (c(S), u(ev.pn.PAYMENT_REQUEST_INFORMATION));
                        break;
                    case eE.he.PRZELEWY24:
                        c(_), u(ev.pn.PRZELEWY24_INFORMATION);
                        break;
                    case eE.he.EPS:
                        c(f), u(ev.pn.EPS_INFORMATION);
                        break;
                    case eE.he.IDEAL:
                        c(T), u(ev.pn.IDEAL_INFORMATION);
                        break;
                    case eE.he.CASH_APP:
                        c(N), u(ev.pn.CASH_APP_INFORMATION);
                        break;
                    case eE.he.GIROPAY:
                    case eE.he.PAYSAFE_CARD:
                    case eE.he.GCASH:
                    case eE.he.GRABPAY_MY:
                    case eE.he.MOMO_WALLET:
                    case eE.he.KAKAOPAY:
                    case eE.he.GOPAY_WALLET:
                    case eE.he.BANCONTACT:
                        c({ steps: [...t, ...tS, ...n], methodType: e }), u(ev.pn.ADDRESS);
                }
                null != L.A.error && (0, R.ET)();
            },
            w = async (e, t) => {
                if (((0, R.mf)(e), null == e)) return void s();
                d(e);
                let { billingAddressInfo: n } = (0, tc.uK)(e),
                    r = (0, to.Qd)(n);
                if (((null == n.name || "" === n.name) && null != t && (n.name = t), b({ isValid: r, info: n }), !r))
                    return void u(ev.pn.ADDRESS);
                try {
                    var i;
                    (i = await (0, y.Tv)(e, n, l)), b((e) => ({ ...e, info: n })), c(S), h(i);
                } catch (e) {
                    s();
                }
            };
        if (p === ev.pn.ATTEMPT_GOOGLE_PAY || p === ev.pn.ATTEMPT_APPLE_PAY) {
            let e = j.intl.string(p === ev.pn.ATTEMPT_APPLE_PAY ? j.t.czhXDv : j.t.Zj2xQ0);
            return (0, i.jsx)(tu.V, {
                onChooseType: O,
                paymentRequestWallet: p === ev.pn.ATTEMPT_APPLE_PAY ? "applePay" : "googlePay",
                onStripePaymentMethodReceived: w,
                onPaymentRequestFailure: () => {
                    O(eE.he.CARD), m(e);
                },
                onValidPaymentRequest: () => v(!0),
                paymentRequestRef: g,
            });
        }
        let D = !(0, I.isDesktop)() || a;
        return (0, i.jsx)(tv, {
            onChooseType: O,
            onStripePaymentMethodReceived: w,
            paymentRequestWallets: D ? ["googlePay", "applePay"] : [],
            isEligibleForTrial: r,
            paymentRequestPaymentContext: { contextMetadata: M, activitySessionId: x },
            paymentSourceTypeRestrictions: A,
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
        if (r === ev.pn.ATTEMPT_GOOGLE_PAY || r === ev.pn.ATTEMPT_APPLE_PAY) {
            let e = j.intl.string(r === ev.pn.ATTEMPT_APPLE_PAY ? j.t.WoXvJL : j.t.wnVVr0);
            return (0, i.jsx)(tN, {
                onBack: () => l(ev.pn.PAYMENT_TYPE),
                primaryCTA: ex.Ay.CTAType.CONTINUE,
                primaryText: e,
                onPrimary: () => s(),
                primaryDisabled: !a,
                shouldUseManaModal: n,
            });
        }
        return (0, i.jsx)(tN, { onBack: t, shouldUseManaModal: n });
    };
var tR = n(198970),
    tM = n(546605),
    tb = n(116673),
    tL = n(773669);
let tj = (e) => {
        let t,
            { billingAddressInfo: n, billingError: l, onBillingAddressChange: r, paymentSourceType: s } = e,
            o = null != l && (null == l.code || el(l) === en.ADDRESS),
            u = (0, c.bG)([tL.default], () => tL.default.locale);
        switch (s) {
            case f.hes.GIROPAY:
            case f.hes.PAYSAFE_CARD:
            case f.hes.GCASH:
            case f.hes.GRABPAY_MY:
            case f.hes.MOMO_WALLET:
            case f.hes.KAKAOPAY:
            case f.hes.GOPAY_WALLET:
            case f.hes.BANCONTACT:
                t = "en-US" === u ? tR.Ay.Layouts.MODAL_US_WITH_NAME : tR.Ay.Layouts.MODAL_INTL_WITH_NAME;
                break;
            case f.hes.VENMO:
            case f.hes.CASH_APP:
                t = tR.Ay.Layouts.MODAL_US_WITH_NAME;
                break;
            default:
                t = "en-US" === u ? tR.Ay.Layouts.MODAL_US : tR.Ay.Layouts.MODAL_INTL;
        }
        let d = (0, tM.vg)("AddressStep"),
            p = (0, tb.z)();
        0 === n.country.length && null != p && p.length > 0 && (n.country = p[0]);
        let m = (0, c.bG)([V.default], () => V.default.getCurrentUser()?.storeCountry?.isLocked === !0),
            h = d && m ? j.intl.string(j.t.Pg2hU0) : null;
        return (0, i.jsxs)(a.Fragment, {
            children: [
                o
                    ? (0, i.jsx)("div", {
                          className: er.QK,
                          children: (0, i.jsx)(A.w, { type: "critical", children: j.intl.string(j.t.vZ8y7l) }),
                      })
                    : null,
                (0, i.jsx)(tR.Ay, {
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
    tO = new eT.A("AddPaymentAddressStep.tsx");
function tw(e) {
    let { billingAddressInfo: t, onBillingAddressChange: n, paymentSourceType: l } = e,
        r = (0, c.bG)([L.A], () => L.A.error);
    return (0, i.jsx)(tj, { billingAddressInfo: t, billingError: r, onBillingAddressChange: n, paymentSourceType: l });
}
function tD(e) {
    let { paymentModalArgs: t, shouldUsePaymentElement: n, paymentSourceType: l } = e,
        { billingAddressState: r, setBillingAddressState: a } = t;
    return n
        ? null
        : (0, i.jsx)(tw, {
              billingAddressInfo: r.info,
              onBillingAddressChange: (e, t) => {
                  a({ info: { ...r.info, ...e }, isValid: t });
              },
              paymentSourceType: l,
          });
}
function tU(e) {
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
            lastConfirmedSetupIntentRef: A,
            shouldUsePaymentElement: C,
        } = e,
        { stripe: E } = (0, eN.P5)(),
        {
            tokenState: P,
            isSubmittingCurrentStep: S,
            billingAddressState: _,
            setIsSubmittingCurrentStep: I,
            hasRedirectURL: f,
            setHasRedirectURL: T,
            braintreeNonce: N,
            adyenPaymentData: v,
            isAuthenticating: g,
            epsBankState: x,
            p24BankState: R,
        } = t,
        M = async () => {
            I(!0);
            let e = C ? p : d.methodType,
                t = [
                    E,
                    h.current,
                    { billingAddress: _.info, paymentSourceType: e ?? eE.he.UNKNOWN, lastConfirmedSetupIntentRef: A },
                    l,
                ];
            switch (e) {
                case eE.he.PAYMENT_REQUEST:
                    if (C) {
                        try {
                            let e = await (0, y.im)(...t);
                            c(e);
                        } catch (e) {
                            I(!1), tO.warn("Error confirming Payment Element source for Payment Request: ", e);
                        }
                        break;
                    }
                    if (null == o) throw (s(), (0, y.i0)("Missing paymentRequestPaymentMethod"));
                    c(await (0, y.Tv)(o, _.info, l));
                    break;
                case eE.he.CARD:
                    try {
                        let e = C ? await (0, y.im)(...t) : await (0, y.u6)(E, P.token, _.info, l);
                        c(e);
                    } catch {}
                    break;
                case eE.he.VENMO:
                case eE.he.PAYPAL:
                    try {
                        u()(null != N, "Missing braintreeNonce");
                        let e = await (0, y.u1)(N, _.info, l);
                        c(e);
                    } catch {}
                    break;
                case eE.he.EPS:
                    try {
                        let e = await (0, y.Z9)(E, x, _.info, l);
                        c(e);
                    } catch (e) {
                        tO.warn(e);
                    }
                    break;
                case eE.he.IDEAL:
                    try {
                        let e = C ? await (0, y.im)(...t) : await (0, y.EB)(E, _.info, l);
                        c(e);
                    } catch (e) {
                        tO.warn(e);
                    }
                    break;
                case eE.he.PRZELEWY24:
                    try {
                        if (void 0 === R) throw (0, y.i0)("Bank required for Przelewy24");
                        let e = await (0, y.TD)(E, { p24Bank: R }, _.info, l);
                        c(e);
                    } catch {}
                    break;
                case eE.he.PAYSAFE_CARD:
                case eE.he.GRABPAY_MY:
                    try {
                        let t = await (0, y.A8)(_.info, e, l);
                        c(t);
                    } catch {}
                    break;
                case eE.he.GCASH:
                case eE.he.MOMO_WALLET:
                case eE.he.KAKAOPAY:
                case eE.he.GOPAY_WALLET:
                    try {
                        let { redirectConfirmation: t } = await (0, y.$M)(_.info, e, l);
                        T(t);
                    } catch {}
                    break;
                case eE.he.GIROPAY:
                case eE.he.BANCONTACT:
                    try {
                        let t = await (0, y.bw)(E, _.info, e, l);
                        c(t);
                    } catch {}
                    break;
                case eE.he.CASH_APP:
                    try {
                        u()(null != v, "Missing adyenPaymentData");
                        let { paymentSource: t } = await (0, y.$M)(_.info, e, l, v, r);
                        u()(null != t, "Cash App Pay Payment Source missing"), c(t);
                    } catch {}
                    break;
                default:
                    throw Error("unknown step not handled");
            }
            f || I(!1);
        },
        b = d.methodType,
        { backStep: L } = C
            ? { backStep: ev.pn.PAYMENT_ELEMENT }
            : ((e) => {
                  switch (e) {
                      case eE.he.CARD:
                          return { backStep: ev.pn.CREDIT_CARD_INFORMATION };
                      case eE.he.PAYPAL:
                          return { backStep: ev.pn.PAYPAL_INFORMATION };
                      case eE.he.VENMO:
                          return { backStep: ev.pn.VENMO_INFORMATION };
                      case eE.he.GIROPAY:
                      case eE.he.PAYSAFE_CARD:
                      case eE.he.GCASH:
                      case eE.he.GRABPAY_MY:
                      case eE.he.MOMO_WALLET:
                      case eE.he.KAKAOPAY:
                      case eE.he.GOPAY_WALLET:
                      case eE.he.BANCONTACT:
                          return { backStep: ev.pn.PAYMENT_TYPE };
                      case eE.he.EPS:
                          return { backStep: ev.pn.EPS_INFORMATION };
                      case eE.he.IDEAL:
                          return { backStep: ev.pn.IDEAL_INFORMATION };
                      case eE.he.PRZELEWY24:
                          return { backStep: ev.pn.PRZELEWY24_INFORMATION };
                      case eE.he.CASH_APP:
                          return { backStep: ev.pn.CASH_APP_INFORMATION };
                      default:
                          return { backStep: ev.pn.PAYMENT_TYPE };
                  }
              })(b),
        O = C ? () => m(void 0) : () => a(L);
    return (0, i.jsx)(tN, {
        onBack: O,
        primaryCTA: ex.Ay.CTAType.CONTINUE,
        primaryText: j.intl.string(j.t.PDTjLN),
        primarySubmitting: S,
        primaryDisabled: !_.isValid || g,
        onPrimary: M,
        shouldUseManaModal: n,
    });
}
let tk = new eT.A("PaymentElementStepFooter.tsx"),
    tG = (e) => {
        let { stripe: t } = (0, eN.P5)(),
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
            { paymentElementSelectedType: h, combinedStripeElementsRef: A, remountAddressElement: C } = e,
            E = a.useCallback(async () => {
                p(!0);
                try {
                    if (null == h || !(0, ed.PE)(h)) throw (0, y.ne)("Valid Payment Element source type not found", !0);
                    let { steps: e, methodType: n } = d[h];
                    if ((s({ steps: e, methodType: n === eE.he.UNKNOWN ? h : n }), h === eE.he.PAYMENT_REQUEST)) {
                        let e = A.current,
                            { paymentMethod: n } = await (0, y.YB)(t, e),
                            { billingAddressInfo: l } = (0, tc.uK)(n);
                        m((e) => ({ ...e, info: l })), C(), r(ev.pn.ADDRESS);
                    } else {
                        let e = (0, ed.eI)(h);
                        null != e ? r(e) : r(ev.pn.ADDRESS);
                    }
                } catch (e) {
                    tk.error("Error on submitting Payment Element step: ", e.message ?? JSON.stringify(e));
                } finally {
                    p(!1);
                }
            }, [h, d, A, C, r, t, s, p, m]);
        return (0, i.jsx)(tN, {
            onBack: o,
            primaryCTA: ex.Ay.CTAType.CONTINUE,
            primaryType: "submit",
            primaryText: j.intl.string(j.t.PDTjLN),
            primarySubmitting: u,
            primaryDisabled: c,
            onPrimary: E,
            shouldUseManaModal: n,
        });
    };
var tY = n(691189);
let tF = new eT.A("AddPaymentStep.tsx"),
    tB = { name: "", cardNumber: "", expirationDate: "", cvc: "" },
    tW = { email: "", name: "", country: "", line1: "", line2: "", city: "", postalCode: "", state: "" };
function tH(e) {
    let { onCardInfoChange: t } = e,
        n = (0, c.bG)([L.A], () => L.A.error);
    return (0, i.jsx)(ei, { billingError: n, onCardInfoChange: t });
}
function tV() {
    return (0, i.jsx)(w, {});
}
function tK() {
    return (0, i.jsx)(Y, {});
}
function tZ() {
    return (0, i.jsx)(ti, {});
}
function tq() {
    let e = (0, c.bG)([ez.A], () => ez.A.isBusy),
        t = (0, c.bG)([L.A], () => L.A.stripePaymentMethod);
    return (0, i.jsx)(ea, { stripePaymentMethod: t, submitting: e });
}
function tz() {
    return (0, i.jsx)(F.N, {});
}
function t$(e) {
    let t,
        n,
        {
            paymentModalArgs: l,
            initialStep: r,
            prependSteps: o,
            appendSteps: u,
            onReturn: E,
            onComplete: S,
            onStepChange: _,
            breadcrumpSteps: I,
            currentBreadcrumpStep: T,
            header: N,
            analyticsData: x,
            analyticsLocation: R,
            hideBreadcrumbs: M = !1,
            usePaymentModalStep: b = !1,
            isEligibleForTrial: O = !1,
            allowDesktopRedirectPurchase: w = !1,
            toastContent: D,
            continueSessionToInitialStep: U,
            overwriteSubscriptionPaymentSource: k = !1,
            shouldUseManaModal: G = !0,
        } = e,
        { stripe: Y } = (0, eN.P5)(),
        { activitySessionId: F } = (0, e_.V)(),
        { enabled: B } = (0, eu.Y)({ location: "AddPaymentFlow" }),
        W = (0, ef.t4)((e) => e.contextMetadata),
        H = (0, eM.l)(),
        V = a.useMemo(() => {
            let e = r === ev.pn.PAYMENT_TYPE || r === ev.pn.PAYMENT_ELEMENT;
            return B && e ? (w ? ev.pn.AWAITING_BROWSER_CHECKOUT : ev.pn.PAYMENT_ELEMENT) : r;
        }, [B, r, w]),
        K = a.useMemo(() => (0, e2.Gn)(), []),
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
                                        ...(r && (null == i || i === eE.he.UNKNOWN || (0, ed.PE)(i)) ? tI[t] : t_[t]),
                                        ...l,
                                    ],
                                    methodType: i,
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
                A = (0, a.useMemo)(
                    () => ({
                        [eE.he.CARD]: o,
                        [eE.he.PAYPAL]: u,
                        [eE.he.PAYMENT_REQUEST]: i,
                        [eE.he.VENMO]: d,
                        [eE.he.CASH_APP]: h,
                        [eE.he.IDEAL]: c,
                        [eE.he.PRZELEWY24]: p,
                        [eE.he.EPS]: m,
                        [eE.he.BANCONTACT]: r,
                        [eE.he.GOPAY_WALLET]: r,
                        [eE.he.KAKAOPAY]: r,
                        [eE.he.GCASH]: r,
                        [eE.he.PAYSAFE_CARD]: r,
                        [eE.he.GRABPAY_MY]: r,
                        [eE.he.MOMO_WALLET]: r,
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
                PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: A,
            };
        })({ prependSteps: o, appendSteps: u, paymentElementsEnabled: B }),
        [el, er] = a.useState(V),
        [ei, ea] = a.useState(null),
        [es, eo] = a.useState(
            (function (e) {
                switch (e) {
                    case ev.pn.CREDIT_CARD_INFORMATION:
                        return Z;
                    case ev.pn.CASH_APP_INFORMATION:
                        return et;
                    default:
                        return { steps: [ev.pn.ADD_PAYMENT_STEPS] };
                }
            })(V),
        );
    a.useEffect(() => {
        (0, y.IV)();
    }, []);
    let ec = (0, c.bG)([L.A], () => L.A.redirectedPaymentSourceId),
        ep = (0, c.bG)([e8], () => e8.cashAppPayComponent),
        eh = { completeSteps: te, setIsSubmittingCurrentStep: l.setIsSubmittingCurrentStep },
        eA = a.useRef(eh);
    a.useEffect(() => {
        eA.current = eh;
    }),
        a.useEffect(() => {
            let { completeSteps: e, setIsSubmittingCurrentStep: t } = eA.current;
            (async () => {
                if (null == ec) return;
                await (0, y.$o)();
                let n = eJ.A.getPaymentSource(ec);
                null != n && (e(n), t(!1), L.A.clearRedirectedPaymentSourceId());
            })();
        }, [ec]);
    let eC = a.useCallback(
            function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                ea(null), er(e), t && _({ currentStep: el, toStep: e });
            },
            [el, _],
        ),
        ey = a.useCallback(
            (e) => {
                e0.default.track(f.HAw.PAYMENT_FLOW_ADD_SOURCE_COMPLETED, {
                    load_id: W.loadId,
                    analytics_location: R,
                    payment_source_id: e.id,
                    payment_source_type: e.type,
                    payment_source_country: e.paymentMethodCountry,
                });
            },
            [W.loadId, R],
        ),
        eT = (0, c.bG)([L.A], () => L.A.error),
        eb = a.useRef(eT);
    a.useEffect(() => {
        let e = eb.current;
        (eb.current = eT),
            null != eT &&
                eT !== e &&
                e0.default.track(f.HAw.PAYMENT_FLOW_ADD_SOURCE_ERROR, {
                    load_id: W.loadId,
                    analytics_location: R,
                    payment_source_type: es.methodType,
                    error_code: eT.code,
                    error_message: eT.message,
                });
    }, [eT, W.loadId, R, es.methodType]);
    let eL = a.useCallback(
            (e) => {
                ey(e),
                    (0, d.P0)(
                        (0, p.o)(void 0 !== D ? D : j.intl.string(j.t["VJPg+l"]), m.Ck.SUCCESS, {
                            position: m.xJ.BOTTOM,
                        }),
                    ),
                    S(el, e),
                    eC(V, !1);
            },
            [eC, V, el, S, D, ey],
        ),
        [ej, eO] = a.useState(null),
        {
            setPaymentSourceId: ew,
            creditCardState: eD,
            setCreditCardState: eU,
            setTokenState: ek,
            isSubmittingCurrentStep: eG,
            billingAddressState: eY,
            setBillingAddressState: eF,
            setIsSubmittingCurrentStep: eB,
            braintreeEmail: eW,
            braintreeNonce: eH,
            venmoUsername: eV,
            adyenPaymentData: ez,
            epsBankState: e$,
            setEpsBankState: eX,
            p24BankState: e3,
            setP24BankState: e4,
            selectedSkuId: e7,
        } = l,
        e6 = e7 ?? "",
        e5 = (0, c.bG)([eQ.A], () => eQ.A.get(e6), [e6]),
        e9 = e5?.eligiblePaymentGateways?.map((e) => e.valueOf());
    function te(e) {
        ew(e.id), eL(e);
    }
    let tt = () => {
            eo(X), eC(ev.pn.PAYMENT_TYPE);
        },
        tn = (0, eS.wD)({
            step: el,
            continueSessionToInitialStep: U,
            paymentElementsEnabled: B,
            handleStepChange: eC,
            logger: tF,
            shouldLogOnChangeEvents: K || !1,
            onBillingAddressChange: (e, t) => {
                eF({ info: { ...eY.info, ...e }, isValid: t });
            },
        }),
        {
            shouldRenderPaymentElement: tr,
            paymentElementReady: ti,
            paymentElementSelectedType: ta,
            returnToPaymentElementStep: ts,
            onBackFromPaymentElement: to,
            combinedStripeElementsRef: tu,
            stripePaymentElementProps: tc,
            stripeAddressElementProps: td,
            remountAddressElement: tp,
            addressElementKey: tm,
        } = tn,
        th = a.useCallback(() => {
            eC(ev.pn.ADDRESS), B && eS.Ky.includes(el) && tp();
        }, [eC, B, tp, el]),
        tA = a.useCallback(
            (e) => {
                B && null != ta && (0, ed.PE)(e) ? ts(e) : eC(ev.pn.PAYMENT_TYPE);
            },
            [B, ta, ts, eC],
        ),
        tC = b ? (0, i.jsx)(eq.A, { className: tf._8 }) : null,
        tE = (() => {
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
        case ev.pn.ATTEMPT_GOOGLE_PAY:
        case ev.pn.ATTEMPT_APPLE_PAY:
        case ev.pn.PAYMENT_TYPE:
            (t = (0, i.jsx)(tg, {
                prependSteps: o,
                appendSteps: u,
                analyticsLocation: R,
                isEligibleForTrial: O,
                allowDesktopRedirectPurchase: w,
                onPaymentRequestSourceFailed: tt,
                paymentModalArgs: l,
                handleStepChange: eC,
                setPaymentMethodSteps: eo,
                setPaymentRequestPaymentMethod: eO,
                currentStep: el,
                setInfoNotice: ea,
                completeSteps: te,
                paymentSourceTypeRestrictions: e9,
                CREDIT_CARD_STEPS: Z,
                PAYPAL_STEPS: q,
                VENMO_STEPS: J,
                PAYMENT_REQUEST_STEPS: $,
                PRZELEWY24_STEPS: Q,
                EPS_STEPS: ee,
                IDEAL_STEPS: z,
                CASH_APP_STEPS: et,
                ...tE,
            })),
                (n = (0, i.jsx)(tx, {
                    shouldUseManaModal: G,
                    onReturn: E,
                    handleStepChange: eC,
                    currentStep: el,
                    ...tE,
                }));
            break;
        case ev.pn.PAYMENT_ELEMENT:
            if (!B) throw (0, y.ne)("Payment Elements not enabled, invalid step", !0);
            (t = null),
                (n = (0, i.jsx)(tG, {
                    handleStepChange: eC,
                    shouldUseManaModal: G,
                    setPaymentMethodSteps: eo,
                    primarySubmitting: eG,
                    primaryDisabled: !ti,
                    onBack: () => {
                        to(), E?.();
                    },
                    paymentModalArgs: l,
                    PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: en,
                    ...tn,
                }));
            break;
        case ev.pn.CREDIT_CARD_INFORMATION:
            let ty = async (e) => {
                eB(!0);
                try {
                    let t = await (0, y.YJ)(Y, e);
                    ek({ token: t }), eC(ev.pn.ADDRESS);
                } catch (e) {
                    tF.error(e.message ?? JSON.stringify(e));
                } finally {
                    eB(!1);
                }
            };
            t = (0, i.jsx)(tH, {
                onCardInfoChange: (e, t) => {
                    eU({ info: e, isValid: t }), eF((t) => ({ ...t, info: { ...t.info, name: e.name } }));
                },
            });
            let tP = !eD.isValid,
                tS = () => {
                    eC(ev.pn.PAYMENT_TYPE);
                };
            n = (0, i.jsx)(s.ElementsConsumer, {
                children: (e) => {
                    let { elements: t } = e;
                    return (0, i.jsx)(tN, {
                        onBack: tS,
                        primaryCTA: ex.Ay.CTAType.CONTINUE,
                        primaryType: "submit",
                        primaryText: j.intl.string(j.t.PDTjLN),
                        primarySubmitting: eG,
                        primaryDisabled: tP,
                        onPrimary: () => ty(t),
                        shouldUseManaModal: G,
                    });
                },
            });
            break;
        case ev.pn.AWAITING_BROWSER_CHECKOUT:
        case ev.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
        case ev.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
            let tT = () => {
                eo(Z), eC(B ? ev.pn.PAYMENT_ELEMENT : ev.pn.CREDIT_CARD_INFORMATION);
            };
            (t = (0, i.jsx)(eK, { step: el, onPurchaseComplete: () => S(el), onHandoffFailure: tT })),
                (n = (0, i.jsx)(eZ, {
                    onPrimaryClick: tT,
                    onBackClick: () => {
                        B ? (to(), E?.()) : (eo(X), eC(ev.pn.PAYMENT_TYPE));
                    },
                }));
            break;
        case ev.pn.EPS_INFORMATION:
            (t = (0, i.jsx)(eP, {
                type: eE.he.EPS,
                onAccountHolderNameChange: (e) => eF({ info: { ...eY.info, name: e }, isValid: eY.isValid }),
                onEPSBankChange: (e) => eX(e),
                epsBankValue: e$,
                billingAddressInfo: eY.info,
            })),
                (n = (0, i.jsx)(tN, {
                    onBack: () => tA(eE.he.EPS),
                    primaryCTA: ex.Ay.CTAType.CONTINUE,
                    primaryText: j.intl.string(j.t.PDTjLN),
                    primaryDisabled: void 0 === e$ || "" === e$ || "" === eY.info.name,
                    onPrimary: () => th(),
                    shouldUseManaModal: G,
                }));
            break;
        case ev.pn.IDEAL_INFORMATION:
            (t = (0, i.jsx)(em, {
                type: eE.he.IDEAL,
                onAccountHolderNameChange: (e) => eF({ info: { ...eY.info, name: e }, isValid: eY.isValid }),
                billingAddressInfo: eY.info,
            })),
                (n = (0, i.jsx)(tN, {
                    onBack: () => eC(ev.pn.PAYMENT_TYPE),
                    primaryCTA: ex.Ay.CTAType.CONTINUE,
                    primaryText: j.intl.string(j.t.PDTjLN),
                    primaryDisabled: "" === eY.info.name,
                    onPrimary: () => th(),
                    shouldUseManaModal: G,
                }));
            break;
        case ev.pn.PRZELEWY24_INFORMATION:
            (t = (0, i.jsx)(eP, {
                type: eE.he.PRZELEWY24,
                onNameChange: (e) => eF({ info: { ...eY.info, name: e }, isValid: eY.isValid }),
                onEmailChange: (e) => eF({ info: { ...eY.info, email: e }, isValid: eY.isValid }),
                onP24BankChange: (e) => {
                    e4(e);
                },
                p24BankValue: e3,
                billingAddressInfo: eY.info,
            })),
                (n = (0, i.jsx)(tN, {
                    onBack: () => tA(eE.he.PRZELEWY24),
                    primaryCTA: ex.Ay.CTAType.CONTINUE,
                    primaryText: j.intl.string(j.t.PDTjLN),
                    primaryDisabled:
                        void 0 === eY.info.name ||
                        "" === eY.info.name ||
                        void 0 === eY.info.email ||
                        "" === eY.info.email ||
                        void 0 === e3 ||
                        "" === e3,
                    onPrimary: () => th(),
                    shouldUseManaModal: G,
                }));
            break;
        case ev.pn.PAYPAL_INFORMATION:
            let tv = 0 !== eW.length && null != eH;
            (t = (0, i.jsx)(tV, {})),
                (n = (0, i.jsx)(tN, {
                    onBack: () => tA(eE.he.PAYPAL),
                    primaryCTA: ex.Ay.CTAType.CONTINUE,
                    primaryText: tv ? j.intl.string(j.t.PDTjLN) : j.intl.string(j.t.Djzd7L),
                    onPrimary: () => {
                        let e;
                        return tv
                            ? th()
                            : void (null == (e = P.A.getLastURL())
                                  ? v()
                                  : (C.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_START" }), window.open(e)));
                    },
                    shouldUseManaModal: G,
                }));
            break;
        case ev.pn.VENMO_INFORMATION:
            let tR = 0 !== eV.length && null != eH;
            (t = (0, i.jsx)(tK, {})),
                (n = (0, i.jsx)(tN, {
                    onBack: () => tA(eE.he.VENMO),
                    primaryCTA: ex.Ay.CTAType.CONTINUE,
                    primaryText: tR ? j.intl.string(j.t.PDTjLN) : j.intl.string(j.t["4KoTLM"]),
                    onPrimary: () => (tR ? th() : void g()),
                    shouldUseManaModal: G,
                }));
            break;
        case ev.pn.PAYMENT_REQUEST_INFORMATION:
            (t = (0, i.jsx)(tq, {})),
                (n = (0, i.jsx)(tN, { onBack: () => eC(ev.pn.PAYMENT_TYPE), shouldUseManaModal: G }));
            break;
        case ev.pn.CASH_APP_INFORMATION:
            let tM = null != ez;
            (t = (0, i.jsx)(tZ, {})),
                (n = (0, i.jsx)(tN, {
                    onBack: () => tA(eE.he.CASH_APP),
                    primaryCTA: ex.Ay.CTAType.CONTINUE,
                    primaryText: tM ? j.intl.string(j.t.PDTjLN) : j.intl.string(j.t["9ALP8w"]),
                    onPrimary: () => (tM ? th() : tl()),
                    primaryDisabled: null == ep,
                    shouldUseManaModal: G,
                }));
            break;
        case ev.pn.ADDRESS:
            let tb = B && null != ta;
            (t = (0, i.jsx)(tD, {
                paymentModalArgs: l,
                paymentSourceType: es.methodType ?? eE.he.CARD,
                shouldUsePaymentElement: tb,
            })),
                (n = (0, i.jsx)(tU, {
                    paymentModalArgs: l,
                    shouldUseManaModal: G,
                    analyticsLocation: R,
                    overwriteSubscriptionPaymentSource: k,
                    handleStepChange: eC,
                    onPaymentRequestSourceFailed: tt,
                    paymentRequestPaymentMethod: ej,
                    completeSteps: te,
                    paymentMethodSteps: es,
                    shouldUsePaymentElement: tb,
                    ...tn,
                }));
            break;
        case ev.pn.AWAITING_AUTHENTICATION:
            t = (0, i.jsx)(tz, {});
            break;
        default:
            throw Error(`Unexpected step: ${el}`);
    }
    let tL = B && tr,
        tj = tL ? "combined_stripe_elements" : void 0,
        tO = (0, i.jsxs)(h.Y, {
            className: tY.C9,
            staticClassName: tY.a2,
            animatedNodeClassName: tY.L2,
            fillParent: !0,
            overrideKey: tj,
            step: el,
            steps: es.steps,
            sideMargin: 20,
            children: [
                null != ei &&
                    (0, i.jsx)("div", { className: tf.Ns, children: (0, i.jsx)(A.w, { type: "info", children: ei }) }),
                tL &&
                    (0, i.jsx)(eS.e4, {
                        step: el,
                        analyticsContext:
                            null != x ? { activitySessionId: F, contextMetadata: W, analyticsData: x } : void 0,
                        paymentElementSelectedType: ta,
                        elementsRef: tu,
                        stripePaymentElementProps: tc,
                        stripeAddressElementProps: td,
                        addressElementKey: tm,
                        billingAddressInfo: eY.info,
                        onSetupError: () => {
                            to(), eC(ev.pn.PAYMENT_TYPE);
                        },
                        paymentElementFooter: (0, i.jsx)(eI.Z4, {
                            className: tf.SO,
                            stackingBehavior: "stack",
                            onComplete: () => {
                                setTimeout(() => H(ev.pn.REVIEW), 0);
                            },
                        }),
                    }),
                t,
            ],
        }),
        tw = el === ev.pn.PAYMENT_TYPE && 0 === o.length ? null : n;
    return b
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  O && (0, i.jsx)(eg.A, { className: tf.At, isEligibleForTrial: O }),
                  (0, i.jsxs)(eR.dZ, { children: [tC, tO] }),
                  (0, i.jsx)(eR.UX, { children: tw }),
              ],
          })
        : (0, i.jsx)(e1.A, {
              shouldUseManaModal: G,
              steps: I ?? es.steps,
              currentStep: T ?? el,
              overrideKey: tj,
              paymentError: l.paymentError,
              header: N,
              hideBreadcrumbs: M,
              body: tO,
              footer: tw,
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
        r = (0, c.bG)([e8], () => e8.cashAppPayComponent),
        i = (0, c.bG)([ec.A], () => ec.A.data?.allowed_payment_source_types ?? null);
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
                            r = () => {
                                C.h.unsubscribe("BRAINTREE_CREATE_CLIENT_SUCCESS", r), setTimeout(l, 0);
                            };
                        C.h.subscribe("BRAINTREE_CREATE_CLIENT_SUCCESS", r);
                    })
                        .then(() => {
                            N(), T();
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
        a.useEffect(() => {
            null == r && null != i && i.includes(eE.he.CASH_APP) && te();
        }, [i, r]);
    let [s, o] = a.useState(t),
        u = (0, eo.A)(t);
    t !== u && null != t && null == s && o(t);
    let [d, p] = a.useState(() => ({ info: tB, isValid: !1 })),
        [m, h] = a.useState(() => ({ info: tW, isValid: !1 })),
        [A, E] = a.useState(""),
        [I, v] = a.useState(""),
        [g, x] = a.useState(() => ({ token: null })),
        [M, b, j, O, w] = (0, c.yK)([L.A], () => [
            L.A.braintreeEmail,
            L.A.braintreeNonce,
            L.A.error,
            L.A.venmoUsername,
            L.A.adyenPaymentData,
        ]),
        [D, U] = (0, c.yK)([e$.A], () => [e$.A.error, e$.A.isAwaitingAuthentication]);
    a.useEffect(() => {
        let e = (e) => {
            let { billingAddress: t } = e;
            h({ info: t, isValid: t.country.length > 0 });
        };
        return (
            C.h.subscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e),
            () => {
                C.h.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e), (0, R.ET)();
            }
        );
    }, []);
    let [k, G] = a.useState(!1),
        [Y, F] = a.useState(!1),
        [B, W] = a.useState(null),
        H = a.useRef(null),
        V = (0, c.bG)([e$.A], () => e$.A.isAwaitingAuthentication),
        [K, Z] = (0, c.yK)([eX.A], () => [eX.A.purchaseTokenAuthState, eX.A.purchaseTokenHash]);
    return (
        a.useEffect(() => {
            null != B && null != H.current && H.current.scrollIntoView({ behavior: "smooth" });
        }, [B]),
        {
            paymentSources: n,
            paymentSourceId: s,
            hasFetchedPaymentSources: l,
            setPaymentSourceId: o,
            creditCardState: d,
            setCreditCardState: p,
            tokenState: g,
            setTokenState: x,
            billingAddressState: m,
            setBillingAddressState: h,
            isSubmittingCurrentStep: k,
            setIsSubmittingCurrentStep: G,
            hasRedirectURL: Y,
            setHasRedirectURL: F,
            braintreeEmail: M,
            braintreeNonce: b,
            venmoUsername: O,
            adyenPaymentData: w,
            paymentError: null != D ? D : j,
            paymentAuthenticationState: U ? e3.oc.PENDING : null != D ? e3.oc.ERROR : e3.oc.NONE,
            purchaseError: B,
            setPurchaseError: W,
            purchaseErrorBlockRef: H,
            isAuthenticating: V,
            purchaseTokenAuthState: K,
            purchaseTokenHash: Z,
            epsBankState: I,
            setEpsBankState: v,
            p24BankState: A,
            setP24BankState: E,
        }
    );
}
