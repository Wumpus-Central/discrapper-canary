n.d(t, { Y: () => tJ, _V: () => tX });
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
    E = n(228366),
    C = n(636537),
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
                    E.h.dispatch({ type: "BRAINTREE_CREATE_VENMO_CLIENT_SUCCESS", venmoClient: e });
                })
                .catch(() => {
                    E.h.dispatch({ type: "BRAINTREE_CREATE_VENMO_CLIENT_FAIL" });
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
                        return C.Bo.post({
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
                        E.h.dispatch({ type: "BRAINTREE_CREATE_PAYPAL_CLIENT_SUCCESS", paypalClient: e });
                })
                .catch(() => E.h.dispatch({ type: "BRAINTREE_CREATE_PAYPAL_CLIENT_FAIL" }));
        });
}
function v() {
    let e = P.A.getPayPalClient();
    if (null == e) throw Error("braintree paypal client must be initialized before calling this");
    E.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_START" });
    let t = Promise.resolve("");
    (0, I.isDesktop)() && (t = (0, y.jf)(f.hes.PAYPAL)),
        t
            .then(() => e.tokenize({ flow: "vault" }))
            .then((e) => {
                let { email: t, firstName: n, lastName: l, billingAddress: r } = e.details;
                E.h.dispatch({
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
                    ? E.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED" })
                    : (E.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_FAIL", message: t, code: n }),
                      S.pM(Error(`Braintree Paypal Error: ${t} ${n} ${l}`)));
            });
}
function g() {
    let e = P.A.getVenmoClient();
    if (null == e) throw Error("Braintree Venmo client must be initialized before calling tokenize.");
    E.h.dispatch({ type: "BRAINTREE_TOKENIZE_VENMO_START" }),
        e
            .tokenize()
            .then((e) => {
                let { username: t } = e.details;
                E.h.dispatch({ type: "BRAINTREE_TOKENIZE_VENMO_SUCCESS", nonce: e.nonce, username: t });
            })
            .catch((e) => {
                let { message: t, code: n, details: l } = e;
                [f.Q7O.VENMO_APP_CANCELED, f.Q7O.VENMO_DESKTOP_CANCELED, f.Q7O.VENMO_CANCELED].includes(n)
                    ? E.h.dispatch({ type: "BRAINTREE_TOKENIZE_VENMO_FAIL_CANCELED" })
                    : (E.h.dispatch({ type: "BRAINTREE_TOKENIZE_VENMO_FAIL", message: t, code: n }),
                      S.pM(Error(`Braintree Venmo Error: ${t} ${n} ${l}`)));
            });
}
function x(e, t) {
    if (null == e) return Promise.resolve();
    E.h.dispatch(t);
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
let F = c.Ay.connectStores([P.A, L.A], () => ({ venmoUsername: L.A.venmoUsername, venmoClient: P.A.getVenmoClient() }))(
    G,
);
var Y = n(891197),
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
        [E, C] = a.useState(null),
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
                                    ? C(j.intl.string(j.t.eOIfuy))
                                    : null != e.error
                                      ? C(j.intl.string(j.t.x4pWtJ))
                                      : C(null),
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
                            null != e.error || (e.empty && h) ? C(j.intl.string(j.t["9/zZdl"])) : C(null), I(e);
                        }),
                            e.on("focus", f),
                            e.on("blur", T);
                        break;
                    }
                    case "cardCvc": {
                        let e = S.getElement(s.CardCvcElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            null != e.error || (e.empty && h) ? C(j.intl.string(j.t.ro4isZ)) : C(null), I(e);
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
        return W()($.vB, { [$.Tn]: null !== E, [$.iH]: p, [$.yD]: "cardNumber" === n });
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
                (0, i.jsx)(z.U, { error: E }),
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
        { setFocusLockDisabled: E } = a.useContext(H.M);
    a.useEffect(() => () => {
        void 0 !== E && E(!1);
    });
    let C = a.useCallback(() => {
        void 0 !== E && E(!0);
    }, [E]);
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
                                            onFocus: C,
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
                                            onFocus: C,
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
                                                C(), s(!0);
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
    eE = n(736653),
    eC = n(818348),
    ey = n(198650);
let eP = function (e) {
    let t = (0, eE.Ay)(),
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
        case eC.he.PRZELEWY24: {
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
        case eC.he.EPS: {
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
    e_ = n(71804),
    eI = n(31823);
n(426398), n(211083);
var ef = n(944355);
n(738909);
var eT = n(571878),
    eN = n(783327),
    ev = n(626584),
    eg = n(166532),
    ex = n(69494),
    eR = n(19311),
    eM = n(482132),
    eb = n(615310),
    eL = n(364840),
    ej = n(73825),
    eO = n(558620),
    ew = n(683433),
    eD = n(36167),
    eU = n(937008),
    ek = (((r = {})[(r.UNKNOWN = 0)] = "UNKNOWN"), (r[(r.PENDING = 1)] = "PENDING"), (r[(r.DONE = 2)] = "DONE"), r);
let eG = 0,
    eF = null,
    eY = null,
    eB = null;
class eW extends c.Ay.Store {
    static displayName = "BrowserCheckoutStateStore";
    get browserCheckoutState() {
        return eG;
    }
    get loadId() {
        return eF;
    }
    get skuId() {
        return eY;
    }
    get planId() {
        return eB;
    }
}
let eH = new eW(E.h, {
    USER_PAYMENT_BROWSER_CHECKOUT_STARTED: function (e) {
        (eG = 1), (eF = e.loadId);
    },
    USER_PAYMENT_BROWSER_CHECKOUT_DONE: function (e) {
        eF === e.loadId && ((eY = e.skuId ?? null), (eB = e.skuSubscriptionPlanId ?? null), (eG = 2));
    },
});
var eV = n(788868),
    eK = n(647926);
let eZ = (e) => {
        let t,
            { step: n, onPurchaseComplete: l, onHandoffFailure: r } = e,
            {
                setSelectedSkuId: s,
                setSelectedPlanId: o,
                contextMetadata: u,
            } = (0, eT.t4)((e) => ({
                setSelectedSkuId: e.setSelectedSkuId,
                setSelectedPlanId: e.setSelectedPlanId,
                contextMetadata: e.contextMetadata,
            })),
            {
                browserCheckoutState: d,
                browserCheckoutStateLoadId: p,
                browserCheckoutStateSkuId: m,
                browserCheckoutStatePlanId: h,
            } = (0, c.cf)([eH], () => ({
                browserCheckoutState: eH.browserCheckoutState,
                browserCheckoutStateLoadId: eH.loadId,
                browserCheckoutStateSkuId: eH.skuId,
                browserCheckoutStatePlanId: eH.planId,
            })),
            A = (0, eO.A)(),
            { isGift: E } = (0, eU.Pv)(),
            [C, P] = a.useState(!1);
        switch (n) {
            case eg.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
                t = f.do8.GOOGLE_PAY;
                break;
            case eg.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
                t = f.do8.APPLE_PAY;
        }
        return (
            a.useEffect(() => {
                let e = setTimeout(() => {
                    C ||
                        (P(!0),
                        (0, y.Ze)(u.loadId),
                        (0, eD.my)(
                            {
                                planId: A?.id ?? eV.gD.PREMIUM_MONTH_TIER_2,
                                isGift: E,
                                loadId: u.loadId,
                                paymentMethodType: t,
                            },
                            r,
                        ));
                }, 1e3);
                return () => clearTimeout(e);
            }, [A, E, u, r, P, C, t]),
            a.useEffect(() => {
                null !== m && (eV.oz.includes(m) && ((0, ej.ur)(m), (0, y.hP)()), s(m)),
                    null !== h && o(h),
                    p === u.loadId && d === ek.DONE && l();
            }, [s, o, d, p, m, h, u, l]),
            (0, i.jsxs)("div", {
                className: eK.rf,
                children: [
                    (0, i.jsx)(D.D, { variant: "heading-xl/bold", children: j.intl.string(j.t.C4HYfy) }),
                    (0, i.jsx)(U.E, {
                        variant: "text-md/normal",
                        className: eK.h_,
                        children: j.intl.string(j.t.xfG7Jp),
                    }),
                ],
            })
        );
    },
    eq = (e) => {
        let { onPrimaryClick: t, onBackClick: n } = e;
        return (0, i.jsx)(eL.j, {
            children: (0, i.jsxs)("div", {
                className: eK.kL,
                children: [
                    (0, i.jsx)(ew.A, { onClick: n }),
                    (0, i.jsx)(ew.F, { onClick: t, children: j.intl.string(j.t["4Qvmmj"]) }),
                ],
            }),
        });
    };
var ez = n(921925),
    e$ = n(615405),
    eJ = n(153084),
    eX = n(295405),
    eQ = n(71319),
    e0 = n(67480),
    e2 = n(174459),
    e3 = n(427262),
    e1 = n(251913),
    e4 = n(632638),
    e7 = n(632088);
let e6 = null,
    e8 = null;
class e5 extends c.Ay.Store {
    static displayName = "AdyenStore";
    get client() {
        return e6;
    }
    get cashAppPayComponent() {
        return e8;
    }
}
let e9 = new e5(E.h, {
    ADYEN_CREATE_CLIENT_SUCCESS: function (e) {
        let { client: t } = e;
        e6 = t;
    },
    ADYEN_TEARDOWN_CLIENT: function () {
        e6 = null;
    },
    ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS: function (e) {
        let { component: t } = e;
        e8 = t;
    },
});
async function te() {
    return await C.Bo.get({ url: f.Rsh.BILLING_ADYEN_PAYMENT_METHODS, oldFormErrors: !0, rejectWithError: !1 });
}
async function tt() {
    try {
        let e = await te(),
            { default: t } = await Promise.all([n.e("94678"), n.e("40002")]).then(n.bind(n, 971193)),
            l = await t({
                environment: f.Gg3.ADYEN.KEY.startsWith("live_") ? "live" : "test",
                clientKey: f.Gg3.ADYEN.KEY,
                analytics: { enabled: !1 },
                paymentMethodsResponse: e.body,
            });
        E.h.dispatch({ type: "ADYEN_CREATE_CLIENT_SUCCESS", client: l }),
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
                            if (n) E.h.dispatch({ type: "ADYEN_CASH_APP_PAY_SUBMIT_SUCCESS", data: t });
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
                    .mount(`#${e7.h}`);
                E.h.dispatch({ type: "ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS", component: t });
            })(l);
    } catch (e) {
        (0, S.pM)(e), E.h.dispatch({ type: "ADYEN_CREATE_CLIENT_FAIL" });
    }
}
function tn() {
    let e = e9.cashAppPayComponent;
    if (null == e) throw Error("Adyen CashAppPay component must be created before mounting.");
    try {
        e.mount(`#${e7.h}`);
    } catch (e) {}
}
function tl() {
    e9.cashAppPayComponent?.unmount();
}
function tr() {
    let e = e9.cashAppPayComponent;
    if (null == e) throw Error("Adyen CashAppPay component must be created before submitting.");
    e.submit();
}
var ti = n(40417);
function ta(e) {
    let { className: t } = e,
        n = (0, c.bG)([e9], () => e9.cashAppPayComponent),
        l = (0, c.bG)([L.A], () => L.A.adyenPaymentData);
    a.useEffect(
        () => (
            null == l && null != n && (tn(), tr()),
            () => {
                tl();
            }
        ),
        [l, n],
    );
    let r = l?.paymentMethod?.cashtag ?? "",
        s = null != l && "" !== r;
    return (0, i.jsxs)("div", {
        className: t,
        children: [
            (0, i.jsx)(b.Ay, { type: b.Ay.Types.CASH_APP, size: b.y3.MEDIUM, className: ti.K }),
            s
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(D.D, {
                              variant: r.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
                              className: ti.y,
                              children: j.intl.format(j.t["ze/1yE"], { cashtag: r }),
                          }),
                          (0, i.jsx)(U.E, {
                              variant: "text-md/medium",
                              className: ti.y,
                              children: j.intl.string(j.t.VPOx7N),
                          }),
                      ],
                  })
                : (0, i.jsx)(U.E, {
                      variant: "text-md/medium",
                      className: ti.y,
                      children: null == n ? j.intl.string(j.t["CgVe/w"]) : j.intl.string(j.t["1MqcjI"]),
                  }),
        ],
    });
}
var ts = n(73079),
    to = n(459357),
    tu = n(550238),
    tc = n(869177),
    td = n(71532),
    tp = n(218075);
let tm = [eg.pn.PAYMENT_TYPE],
    th = [eg.pn.PAYMENT_TYPE, eg.pn.CREDIT_CARD_INFORMATION, eg.pn.ADDRESS],
    tA = [eg.pn.PAYMENT_TYPE, eg.pn.PAYPAL_INFORMATION, eg.pn.ADDRESS],
    tE = [eg.pn.PAYMENT_TYPE, eg.pn.VENMO_INFORMATION, eg.pn.ADDRESS],
    tC = [eg.pn.PAYMENT_TYPE, eg.pn.CASH_APP_INFORMATION, eg.pn.ADDRESS],
    ty = [eg.pn.PAYMENT_TYPE, eg.pn.PRZELEWY24_INFORMATION, eg.pn.ADDRESS],
    tP = [eg.pn.PAYMENT_TYPE, eg.pn.EPS_INFORMATION, eg.pn.ADDRESS],
    tS = [eg.pn.PAYMENT_TYPE, eg.pn.IDEAL_INFORMATION, eg.pn.ADDRESS],
    t_ = [eg.pn.PAYMENT_TYPE, eg.pn.ADDRESS],
    tI = {
        SHARED_ADD_PAYMENT_STEPS: tm,
        SHARED_CREDIT_CARD_STEPS: th,
        SHARED_PAYPAL_STEPS: tA,
        SHARED_VENMO_STEPS: tE,
        SHARED_PRZELEWY24_STEPS: ty,
        SHARED_EPS_STEPS: tP,
        SHARED_IDEAL_STEPS: tS,
        SHARED_CASH_APP_STEPS: tC,
        SHARED_TYPE_AND_ADDRESS_STEPS: t_,
    },
    tf = {
        SHARED_ADD_PAYMENT_STEPS: [eg.pn.PAYMENT_ELEMENT],
        SHARED_CREDIT_CARD_STEPS: [eg.pn.PAYMENT_ELEMENT, eg.pn.ADDRESS],
        SHARED_PAYPAL_STEPS: [eg.pn.PAYMENT_ELEMENT, eg.pn.PAYPAL_INFORMATION, eg.pn.ADDRESS],
        SHARED_VENMO_STEPS: [eg.pn.PAYMENT_ELEMENT, eg.pn.VENMO_INFORMATION, eg.pn.ADDRESS],
        SHARED_CASH_APP_STEPS: [eg.pn.PAYMENT_ELEMENT, eg.pn.CASH_APP_INFORMATION, eg.pn.ADDRESS],
        SHARED_PRZELEWY24_STEPS: [eg.pn.PAYMENT_ELEMENT, eg.pn.PRZELEWY24_INFORMATION, eg.pn.ADDRESS],
        SHARED_EPS_STEPS: [eg.pn.PAYMENT_ELEMENT, eg.pn.EPS_INFORMATION, eg.pn.ADDRESS],
        SHARED_IDEAL_STEPS: [eg.pn.PAYMENT_ELEMENT, eg.pn.ADDRESS],
        SHARED_TYPE_AND_ADDRESS_STEPS: [eg.pn.PAYMENT_ELEMENT, eg.pn.ADDRESS],
    };
var tT = n(801753);
function tN(e) {
    return () => (null != L.A.error && (0, R.ET)(), e());
}
function tv(e) {
    let { onPrimary: t, onBack: n, ...l } = e,
        r = t;
    null != t && (r = tN(t));
    let a = n;
    return null != n && (a = tN(n)), (0, i.jsx)(eR.Ay, { ...l, onPrimary: r, onBack: a });
}
function tg(e) {
    let { paymentSourceTypeRestrictions: t } = e,
        n = null != t && t.length > 0 ? tp.fU.ADD_NEW_PAYMENT_METHOD : void 0,
        { enabled: l } = (0, to.c)({ location: "AddPaymentStep" });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(tp.je, { paymentRestrictionBannerType: n }),
            (0, i.jsx)(ts.A, { ...e }),
            l && (0, i.jsx)(ef.Z4, { className: tT.SO }),
        ],
    });
}
let tx = (e) => {
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
                CREDIT_CARD_STEPS: E,
                PAYPAL_STEPS: C,
                VENMO_STEPS: P,
                PAYMENT_REQUEST_STEPS: S,
                PRZELEWY24_STEPS: _,
                EPS_STEPS: f,
                IDEAL_STEPS: T,
                CASH_APP_STEPS: N,
                setConnectorPaymentRequestReady: v,
                connectorPaymentRequestRef: g,
            } = e,
            { activitySessionId: x } = (0, eI.V)(),
            M = (0, eT.t4)((e) => e.contextMetadata),
            { setBillingAddressState: b } = o,
            O = (e, l) => {
                switch (e) {
                    case eC.he.CARD:
                        a ? u(eg.pn.AWAITING_BROWSER_CHECKOUT) : (c(E), u(eg.pn.CREDIT_CARD_INFORMATION));
                        break;
                    case eC.he.PAYPAL:
                        c(C), u(eg.pn.PAYPAL_INFORMATION);
                        break;
                    case eC.he.VENMO:
                        c(P), u(eg.pn.VENMO_INFORMATION);
                        break;
                    case eC.he.PAYMENT_REQUEST:
                        a && "googlePay" === l
                            ? u(eg.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY)
                            : a && "applePay" === l
                              ? u(eg.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY)
                              : (c(S), u(eg.pn.PAYMENT_REQUEST_INFORMATION));
                        break;
                    case eC.he.PRZELEWY24:
                        c(_), u(eg.pn.PRZELEWY24_INFORMATION);
                        break;
                    case eC.he.EPS:
                        c(f), u(eg.pn.EPS_INFORMATION);
                        break;
                    case eC.he.IDEAL:
                        c(T), u(eg.pn.IDEAL_INFORMATION);
                        break;
                    case eC.he.CASH_APP:
                        c(N), u(eg.pn.CASH_APP_INFORMATION);
                        break;
                    case eC.he.GIROPAY:
                    case eC.he.PAYSAFE_CARD:
                    case eC.he.GCASH:
                    case eC.he.GRABPAY_MY:
                    case eC.he.MOMO_WALLET:
                    case eC.he.KAKAOPAY:
                    case eC.he.GOPAY_WALLET:
                    case eC.he.BANCONTACT:
                        c({ steps: [...t, ...t_, ...n], methodType: e }), u(eg.pn.ADDRESS);
                }
                null != L.A.error && (0, R.ET)();
            },
            w = async (e, t) => {
                if (((0, R.mf)(e), null == e)) return void s();
                d(e);
                let { billingAddressInfo: n } = (0, td.uK)(e),
                    r = (0, tu.Qd)(n);
                if (((null == n.name || "" === n.name) && null != t && (n.name = t), b({ isValid: r, info: n }), !r))
                    return void u(eg.pn.ADDRESS);
                try {
                    var i;
                    (i = await (0, y.Tv)(e, n, l)), b((e) => ({ ...e, info: n })), c(S), h(i);
                } catch (e) {
                    s();
                }
            };
        if (p === eg.pn.ATTEMPT_GOOGLE_PAY || p === eg.pn.ATTEMPT_APPLE_PAY) {
            let e = j.intl.string(p === eg.pn.ATTEMPT_APPLE_PAY ? j.t.czhXDv : j.t.Zj2xQ0);
            return (0, i.jsx)(tc.V, {
                onChooseType: O,
                paymentRequestWallet: p === eg.pn.ATTEMPT_APPLE_PAY ? "applePay" : "googlePay",
                onStripePaymentMethodReceived: w,
                onPaymentRequestFailure: () => {
                    O(eC.he.CARD), m(e);
                },
                onValidPaymentRequest: () => v(!0),
                paymentRequestRef: g,
            });
        }
        let D = !(0, I.isDesktop)() || a;
        return (0, i.jsx)(tg, {
            onChooseType: O,
            onStripePaymentMethodReceived: w,
            paymentRequestWallets: D ? ["googlePay", "applePay"] : [],
            isEligibleForTrial: r,
            paymentRequestPaymentContext: { contextMetadata: M, activitySessionId: x },
            paymentSourceTypeRestrictions: A,
        });
    },
    tR = (e) => {
        let {
            onReturn: t,
            shouldUseManaModal: n,
            handleStepChange: l,
            currentStep: r,
            connectorPaymentRequestReady: a,
            showConnectorPaymentRequest: s,
        } = e;
        if (r === eg.pn.ATTEMPT_GOOGLE_PAY || r === eg.pn.ATTEMPT_APPLE_PAY) {
            let e = j.intl.string(r === eg.pn.ATTEMPT_APPLE_PAY ? j.t.WoXvJL : j.t.wnVVr0);
            return (0, i.jsx)(tv, {
                onBack: () => l(eg.pn.PAYMENT_TYPE),
                primaryCTA: eR.Ay.CTAType.CONTINUE,
                primaryText: e,
                onPrimary: () => s(),
                primaryDisabled: !a,
                shouldUseManaModal: n,
            });
        }
        return (0, i.jsx)(tv, { onBack: t, shouldUseManaModal: n });
    };
var tM = n(198970),
    tb = n(546605),
    tL = n(116673),
    tj = n(773669);
let tO = (e) => {
        let t,
            { billingAddressInfo: n, billingError: l, onBillingAddressChange: r, paymentSourceType: s } = e,
            o = null != l && (null == l.code || el(l) === en.ADDRESS),
            u = (0, c.bG)([tj.default], () => tj.default.locale);
        switch (s) {
            case f.hes.GIROPAY:
            case f.hes.PAYSAFE_CARD:
            case f.hes.GCASH:
            case f.hes.GRABPAY_MY:
            case f.hes.MOMO_WALLET:
            case f.hes.KAKAOPAY:
            case f.hes.GOPAY_WALLET:
            case f.hes.BANCONTACT:
                t = "en-US" === u ? tM.Ay.Layouts.MODAL_US_WITH_NAME : tM.Ay.Layouts.MODAL_INTL_WITH_NAME;
                break;
            case f.hes.VENMO:
            case f.hes.CASH_APP:
                t = tM.Ay.Layouts.MODAL_US_WITH_NAME;
                break;
            default:
                t = "en-US" === u ? tM.Ay.Layouts.MODAL_US : tM.Ay.Layouts.MODAL_INTL;
        }
        let d = (0, tb.vg)("AddressStep"),
            p = (0, tL.z)();
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
                (0, i.jsx)(tM.Ay, {
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
    tw = new ev.A("AddPaymentAddressStep.tsx");
function tD(e) {
    let { billingAddressInfo: t, onBillingAddressChange: n, paymentSourceType: l } = e,
        r = (0, c.bG)([L.A], () => L.A.error);
    return (0, i.jsx)(tO, { billingAddressInfo: t, billingError: r, onBillingAddressChange: n, paymentSourceType: l });
}
function tU(e) {
    let { paymentModalArgs: t, shouldUsePaymentElement: n, paymentSourceType: l } = e,
        { billingAddressState: r, setBillingAddressState: a } = t;
    return n
        ? null
        : (0, i.jsx)(tD, {
              billingAddressInfo: r.info,
              onBillingAddressChange: (e, t) => {
                  a({ info: { ...r.info, ...e }, isValid: t });
              },
              paymentSourceType: l,
          });
}
function tk(e) {
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
            shouldUsePaymentElement: E,
        } = e,
        C = (0, eN.S)(),
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
            let e = E ? p : d.methodType,
                t = [
                    C,
                    h.current,
                    { billingAddress: _.info, paymentSourceType: e ?? eC.he.UNKNOWN, lastConfirmedSetupIntentRef: A },
                    l,
                ];
            switch (e) {
                case eC.he.PAYMENT_REQUEST:
                    if (E) {
                        try {
                            let e = await (0, y.im)(...t);
                            c(e);
                        } catch (e) {
                            I(!1), tw.warn("Error confirming Payment Element source for Payment Request: ", e);
                        }
                        break;
                    }
                    if (null == o) throw (s(), (0, y.i0)("Missing paymentRequestPaymentMethod"));
                    c(await (0, y.Tv)(o, _.info, l));
                    break;
                case eC.he.CARD:
                    try {
                        let e = E ? await (0, y.im)(...t) : await (0, y.u6)(C, P.token, _.info, l);
                        c(e);
                    } catch {}
                    break;
                case eC.he.VENMO:
                case eC.he.PAYPAL:
                    try {
                        u()(null != N, "Missing braintreeNonce");
                        let e = await (0, y.u1)(N, _.info, l);
                        c(e);
                    } catch {}
                    break;
                case eC.he.EPS:
                    try {
                        let e = await (0, y.Z9)(C, x, _.info, l);
                        c(e);
                    } catch (e) {
                        tw.warn(e);
                    }
                    break;
                case eC.he.PIX:
                    try {
                        let e = await (0, y.im)(...t);
                        c(e);
                    } catch (e) {
                        tw.warn(e);
                    }
                    break;
                case eC.he.IDEAL:
                    try {
                        let e = E ? await (0, y.im)(...t) : await (0, y.EB)(C, _.info, l);
                        c(e);
                    } catch (e) {
                        tw.warn(e);
                    }
                    break;
                case eC.he.PRZELEWY24:
                    try {
                        if (void 0 === R) throw (0, y.i0)("Bank required for Przelewy24");
                        let e = await (0, y.TD)(C, { p24Bank: R }, _.info, l);
                        c(e);
                    } catch {}
                    break;
                case eC.he.PAYSAFE_CARD:
                case eC.he.GRABPAY_MY:
                    try {
                        let t = await (0, y.A8)(_.info, e, l);
                        c(t);
                    } catch {}
                    break;
                case eC.he.GCASH:
                case eC.he.MOMO_WALLET:
                case eC.he.KAKAOPAY:
                case eC.he.GOPAY_WALLET:
                    try {
                        let { redirectConfirmation: t } = await (0, y.$M)(_.info, e, l);
                        T(t);
                    } catch {}
                    break;
                case eC.he.GIROPAY:
                case eC.he.BANCONTACT:
                    try {
                        let t = await (0, y.bw)(C, _.info, e, l);
                        c(t);
                    } catch {}
                    break;
                case eC.he.CASH_APP:
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
        { backStep: L } = E
            ? { backStep: eg.pn.PAYMENT_ELEMENT }
            : ((e) => {
                  switch (e) {
                      case eC.he.CARD:
                          return { backStep: eg.pn.CREDIT_CARD_INFORMATION };
                      case eC.he.PAYPAL:
                          return { backStep: eg.pn.PAYPAL_INFORMATION };
                      case eC.he.VENMO:
                          return { backStep: eg.pn.VENMO_INFORMATION };
                      case eC.he.GIROPAY:
                      case eC.he.PAYSAFE_CARD:
                      case eC.he.GCASH:
                      case eC.he.GRABPAY_MY:
                      case eC.he.MOMO_WALLET:
                      case eC.he.KAKAOPAY:
                      case eC.he.GOPAY_WALLET:
                      case eC.he.BANCONTACT:
                          return { backStep: eg.pn.PAYMENT_TYPE };
                      case eC.he.EPS:
                          return { backStep: eg.pn.EPS_INFORMATION };
                      case eC.he.IDEAL:
                          return { backStep: eg.pn.IDEAL_INFORMATION };
                      case eC.he.PRZELEWY24:
                          return { backStep: eg.pn.PRZELEWY24_INFORMATION };
                      case eC.he.CASH_APP:
                          return { backStep: eg.pn.CASH_APP_INFORMATION };
                      default:
                          return { backStep: eg.pn.PAYMENT_TYPE };
                  }
              })(b),
        O = E ? () => m(void 0) : () => a(L);
    return (0, i.jsx)(tv, {
        onBack: O,
        primaryCTA: eR.Ay.CTAType.CONTINUE,
        primaryText: j.intl.string(j.t.PDTjLN),
        primarySubmitting: S,
        primaryDisabled: !_.isValid || g,
        onPrimary: M,
        shouldUseManaModal: n,
    });
}
let tG = new ev.A("PaymentElementStepFooter.tsx"),
    tF = (e) => {
        let t = (0, eN.S)(),
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
            { paymentElementSelectedType: h, combinedStripeElementsRef: A, remountAddressElement: E } = e,
            C = a.useCallback(async () => {
                p(!0);
                try {
                    if (null == h || !(0, ed.PE)(h)) throw (0, y.ne)("Valid Payment Element source type not found", !0);
                    let { steps: e, methodType: n } = d[h];
                    if ((s({ steps: e, methodType: n === eC.he.UNKNOWN ? h : n }), h === eC.he.PAYMENT_REQUEST)) {
                        let e = A.current,
                            { paymentMethod: n } = await (0, y.YB)(t, e),
                            { billingAddressInfo: l } = (0, td.uK)(n);
                        m((e) => ({ ...e, info: l })), E(), r(eg.pn.ADDRESS);
                    } else {
                        let e = (0, ed.eI)(h);
                        null != e ? r(e) : r(eg.pn.ADDRESS);
                    }
                } catch (e) {
                    tG.error("Error on submitting Payment Element step: ", e.message ?? JSON.stringify(e));
                } finally {
                    p(!1);
                }
            }, [h, d, A, E, r, t, s, p, m]);
        return (0, i.jsx)(tv, {
            onBack: o,
            primaryCTA: eR.Ay.CTAType.CONTINUE,
            primaryType: "submit",
            primaryText: j.intl.string(j.t.PDTjLN),
            primarySubmitting: u,
            primaryDisabled: c,
            onPrimary: C,
            shouldUseManaModal: n,
        });
    };
var tY = n(691189);
let tB = new ev.A("AddPaymentStep.tsx"),
    tW = { name: "", cardNumber: "", expirationDate: "", cvc: "" },
    tH = { email: "", name: "", country: "", line1: "", line2: "", city: "", postalCode: "", state: "" };
function tV(e) {
    let { onCardInfoChange: t } = e,
        n = (0, c.bG)([L.A], () => L.A.error);
    return (0, i.jsx)(ei, { billingError: n, onCardInfoChange: t });
}
function tK() {
    return (0, i.jsx)(w, {});
}
function tZ() {
    return (0, i.jsx)(F, {});
}
function tq() {
    return (0, i.jsx)(ta, {});
}
function tz() {
    let e = (0, c.bG)([e$.A], () => e$.A.isBusy),
        t = (0, c.bG)([L.A], () => L.A.stripePaymentMethod);
    return (0, i.jsx)(ea, { stripePaymentMethod: t, submitting: e });
}
function t$() {
    return (0, i.jsx)(Y.N, {});
}
function tJ(e) {
    let t,
        n,
        {
            paymentModalArgs: l,
            initialStep: r,
            prependSteps: o,
            appendSteps: u,
            onReturn: C,
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
        F = (0, eN.S)(),
        { activitySessionId: Y } = (0, eI.V)(),
        { enabled: B } = (0, eu.Y)({ location: "AddPaymentFlow" }),
        W = (0, eT.t4)((e) => e.contextMetadata),
        H = (0, eb.l)(),
        V = a.useMemo(() => {
            let e = r === eg.pn.PAYMENT_TYPE || r === eg.pn.PAYMENT_ELEMENT;
            return B && e ? (w ? eg.pn.AWAITING_BROWSER_CHECKOUT : eg.pn.PAYMENT_ELEMENT) : r;
        }, [B, r, w]),
        K = a.useMemo(() => (0, e3.Gn)(), []),
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
                                        ...(r && (null == i || i === eC.he.UNKNOWN || (0, ed.PE)(i)) ? tf[t] : tI[t]),
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
                A = (0, a.useMemo)(
                    () => ({
                        [eC.he.CARD]: o,
                        [eC.he.PAYPAL]: u,
                        [eC.he.PAYMENT_REQUEST]: i,
                        [eC.he.VENMO]: d,
                        [eC.he.CASH_APP]: h,
                        [eC.he.IDEAL]: c,
                        [eC.he.PRZELEWY24]: p,
                        [eC.he.EPS]: m,
                        [eC.he.BANCONTACT]: r,
                        [eC.he.GOPAY_WALLET]: r,
                        [eC.he.KAKAOPAY]: r,
                        [eC.he.GCASH]: r,
                        [eC.he.PAYSAFE_CARD]: r,
                        [eC.he.GRABPAY_MY]: r,
                        [eC.he.MOMO_WALLET]: r,
                        [eC.he.PIX]: r,
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
                    case eg.pn.CREDIT_CARD_INFORMATION:
                        return Z;
                    case eg.pn.CASH_APP_INFORMATION:
                        return et;
                    default:
                        return { steps: [eg.pn.ADD_PAYMENT_STEPS] };
                }
            })(V),
        );
    a.useEffect(() => {
        (0, y.IV)();
    }, []);
    let ec = (0, c.bG)([L.A], () => L.A.redirectedPaymentSourceId),
        ep = (0, c.bG)([e9], () => e9.cashAppPayComponent),
        eh = { completeSteps: tt, setIsSubmittingCurrentStep: l.setIsSubmittingCurrentStep },
        eA = a.useRef(eh);
    a.useEffect(() => {
        eA.current = eh;
    }),
        a.useEffect(() => {
            let { completeSteps: e, setIsSubmittingCurrentStep: t } = eA.current;
            (async () => {
                if (null == ec) return;
                await (0, y.$o)();
                let n = eX.A.getPaymentSource(ec);
                null != n && (e(n), t(!1), L.A.clearRedirectedPaymentSourceId());
            })();
        }, [ec]);
    let eE = a.useCallback(
            function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                ea(null), er(e), t && _({ currentStep: el, toStep: e });
            },
            [el, _],
        ),
        ey = a.useCallback(
            (e) => {
                e2.default.track(f.HAw.PAYMENT_FLOW_ADD_SOURCE_COMPLETED, {
                    load_id: W.loadId,
                    analytics_location: R,
                    payment_source_id: e.id,
                    payment_source_type: e.type,
                    payment_source_country: e.paymentMethodCountry,
                });
            },
            [W.loadId, R],
        ),
        ev = (0, c.bG)([L.A], () => L.A.error),
        eL = a.useRef(ev);
    a.useEffect(() => {
        let e = eL.current;
        (eL.current = ev),
            null != ev &&
                ev !== e &&
                e2.default.track(f.HAw.PAYMENT_FLOW_ADD_SOURCE_ERROR, {
                    load_id: W.loadId,
                    analytics_location: R,
                    payment_source_type: es.methodType,
                    error_code: ev.code,
                    error_message: ev.message,
                });
    }, [ev, W.loadId, R, es.methodType]);
    let ej = a.useCallback(
            (e) => {
                ey(e),
                    (0, d.P0)(
                        (0, p.o)(void 0 !== D ? D : j.intl.string(j.t["VJPg+l"]), m.Ck.SUCCESS, {
                            position: m.xJ.BOTTOM,
                        }),
                    ),
                    S(el, e),
                    eE(V, !1);
            },
            [eE, V, el, S, D, ey],
        ),
        [eO, ew] = a.useState(null),
        {
            setPaymentSourceId: eD,
            creditCardState: eU,
            setCreditCardState: ek,
            setTokenState: eG,
            isSubmittingCurrentStep: eF,
            billingAddressState: eY,
            setBillingAddressState: eB,
            setIsSubmittingCurrentStep: eW,
            braintreeEmail: eH,
            braintreeNonce: eV,
            venmoUsername: eK,
            adyenPaymentData: e$,
            epsBankState: eJ,
            setEpsBankState: eQ,
            p24BankState: e1,
            setP24BankState: e7,
            selectedSkuId: e6,
        } = l,
        e8 = e6 ?? "",
        e5 = (0, c.bG)([e0.A], () => e0.A.get(e8), [e8]),
        te = e5?.eligiblePaymentGateways?.map((e) => e.valueOf());
    function tt(e) {
        eD(e.id), ej(e);
    }
    let tn = () => {
            eo(X), eE(eg.pn.PAYMENT_TYPE);
        },
        tl = (0, eS.wD)({
            step: el,
            continueSessionToInitialStep: U,
            paymentElementsEnabled: B,
            handleStepChange: eE,
            logger: tB,
            shouldLogOnChangeEvents: K || !1,
            onBillingAddressChange: (e, t) => {
                eB({ info: { ...eY.info, ...e }, isValid: t });
            },
        }),
        {
            shouldRenderPaymentElement: ti,
            paymentElementReady: ta,
            paymentElementSelectedType: ts,
            returnToPaymentElementStep: to,
            onBackFromPaymentElement: tu,
            combinedStripeElementsRef: tc,
            stripePaymentElementProps: td,
            stripeAddressElementProps: tp,
            remountAddressElement: tm,
            addressElementKey: th,
        } = tl,
        tA = a.useCallback(() => {
            eE(eg.pn.ADDRESS), B && eS.Ky.includes(el) && tm();
        }, [eE, B, tm, el]),
        tE = a.useCallback(
            (e) => {
                B && null != ts && (0, ed.PE)(e) ? to(e) : eE(eg.pn.PAYMENT_TYPE);
            },
            [B, ts, to, eE],
        ),
        tC = b ? (0, i.jsx)(ez.A, { className: tT._8 }) : null,
        ty = (() => {
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
        case eg.pn.ATTEMPT_GOOGLE_PAY:
        case eg.pn.ATTEMPT_APPLE_PAY:
        case eg.pn.PAYMENT_TYPE:
            (t = (0, i.jsx)(tx, {
                prependSteps: o,
                appendSteps: u,
                analyticsLocation: R,
                isEligibleForTrial: O,
                allowDesktopRedirectPurchase: w,
                onPaymentRequestSourceFailed: tn,
                paymentModalArgs: l,
                handleStepChange: eE,
                setPaymentMethodSteps: eo,
                setPaymentRequestPaymentMethod: ew,
                currentStep: el,
                setInfoNotice: ea,
                completeSteps: tt,
                paymentSourceTypeRestrictions: te,
                CREDIT_CARD_STEPS: Z,
                PAYPAL_STEPS: q,
                VENMO_STEPS: J,
                PAYMENT_REQUEST_STEPS: $,
                PRZELEWY24_STEPS: Q,
                EPS_STEPS: ee,
                IDEAL_STEPS: z,
                CASH_APP_STEPS: et,
                ...ty,
            })),
                (n = (0, i.jsx)(tR, {
                    shouldUseManaModal: G,
                    onReturn: C,
                    handleStepChange: eE,
                    currentStep: el,
                    ...ty,
                }));
            break;
        case eg.pn.PAYMENT_ELEMENT:
            if (!B) throw (0, y.ne)("Payment Elements not enabled, invalid step", !0);
            (t = null),
                (n = (0, i.jsx)(tF, {
                    handleStepChange: eE,
                    shouldUseManaModal: G,
                    setPaymentMethodSteps: eo,
                    primarySubmitting: eF,
                    primaryDisabled: !ta,
                    onBack: () => {
                        tu(), C?.();
                    },
                    paymentModalArgs: l,
                    PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: en,
                    ...tl,
                }));
            break;
        case eg.pn.CREDIT_CARD_INFORMATION:
            let tP = async (e) => {
                eW(!0);
                try {
                    let t = await (0, y.YJ)(F, e);
                    eG({ token: t }), eE(eg.pn.ADDRESS);
                } catch (e) {
                    tB.error(e.message ?? JSON.stringify(e));
                } finally {
                    eW(!1);
                }
            };
            t = (0, i.jsx)(tV, {
                onCardInfoChange: (e, t) => {
                    ek({ info: e, isValid: t }), eB((t) => ({ ...t, info: { ...t.info, name: e.name } }));
                },
            });
            let tS = !eU.isValid,
                t_ = () => {
                    eE(eg.pn.PAYMENT_TYPE);
                };
            n = (0, i.jsx)(s.ElementsConsumer, {
                children: (e) => {
                    let { elements: t } = e;
                    return (0, i.jsx)(tv, {
                        onBack: t_,
                        primaryCTA: eR.Ay.CTAType.CONTINUE,
                        primaryType: "submit",
                        primaryText: j.intl.string(j.t.PDTjLN),
                        primarySubmitting: eF,
                        primaryDisabled: tS,
                        onPrimary: () => tP(t),
                        shouldUseManaModal: G,
                    });
                },
            });
            break;
        case eg.pn.AWAITING_BROWSER_CHECKOUT:
        case eg.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
        case eg.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
            let tN = () => {
                eo(Z), eE(B ? eg.pn.PAYMENT_ELEMENT : eg.pn.CREDIT_CARD_INFORMATION);
            };
            (t = (0, i.jsx)(eZ, { step: el, onPurchaseComplete: () => S(el), onHandoffFailure: tN })),
                (n = (0, i.jsx)(eq, {
                    onPrimaryClick: tN,
                    onBackClick: () => {
                        B ? (tu(), C?.()) : (eo(X), eE(eg.pn.PAYMENT_TYPE));
                    },
                }));
            break;
        case eg.pn.EPS_INFORMATION:
            (t = (0, i.jsx)(eP, {
                type: eC.he.EPS,
                onAccountHolderNameChange: (e) => eB({ info: { ...eY.info, name: e }, isValid: eY.isValid }),
                onEPSBankChange: (e) => eQ(e),
                epsBankValue: eJ,
                billingAddressInfo: eY.info,
            })),
                (n = (0, i.jsx)(tv, {
                    onBack: () => tE(eC.he.EPS),
                    primaryCTA: eR.Ay.CTAType.CONTINUE,
                    primaryText: j.intl.string(j.t.PDTjLN),
                    primaryDisabled: void 0 === eJ || "" === eJ || "" === eY.info.name,
                    onPrimary: () => tA(),
                    shouldUseManaModal: G,
                }));
            break;
        case eg.pn.IDEAL_INFORMATION:
            (t = (0, i.jsx)(em, {
                type: eC.he.IDEAL,
                onAccountHolderNameChange: (e) => eB({ info: { ...eY.info, name: e }, isValid: eY.isValid }),
                billingAddressInfo: eY.info,
            })),
                (n = (0, i.jsx)(tv, {
                    onBack: () => eE(eg.pn.PAYMENT_TYPE),
                    primaryCTA: eR.Ay.CTAType.CONTINUE,
                    primaryText: j.intl.string(j.t.PDTjLN),
                    primaryDisabled: "" === eY.info.name,
                    onPrimary: () => tA(),
                    shouldUseManaModal: G,
                }));
            break;
        case eg.pn.PRZELEWY24_INFORMATION:
            (t = (0, i.jsx)(eP, {
                type: eC.he.PRZELEWY24,
                onNameChange: (e) => eB({ info: { ...eY.info, name: e }, isValid: eY.isValid }),
                onEmailChange: (e) => eB({ info: { ...eY.info, email: e }, isValid: eY.isValid }),
                onP24BankChange: (e) => {
                    e7(e);
                },
                p24BankValue: e1,
                billingAddressInfo: eY.info,
            })),
                (n = (0, i.jsx)(tv, {
                    onBack: () => tE(eC.he.PRZELEWY24),
                    primaryCTA: eR.Ay.CTAType.CONTINUE,
                    primaryText: j.intl.string(j.t.PDTjLN),
                    primaryDisabled:
                        void 0 === eY.info.name ||
                        "" === eY.info.name ||
                        void 0 === eY.info.email ||
                        "" === eY.info.email ||
                        void 0 === e1 ||
                        "" === e1,
                    onPrimary: () => tA(),
                    shouldUseManaModal: G,
                }));
            break;
        case eg.pn.PAYPAL_INFORMATION:
            let tg = 0 !== eH.length && null != eV;
            (t = (0, i.jsx)(tK, {})),
                (n = (0, i.jsx)(tv, {
                    onBack: () => tE(eC.he.PAYPAL),
                    primaryCTA: eR.Ay.CTAType.CONTINUE,
                    primaryText: tg ? j.intl.string(j.t.PDTjLN) : j.intl.string(j.t.Djzd7L),
                    onPrimary: () => {
                        let e;
                        return tg
                            ? tA()
                            : void (null == (e = P.A.getLastURL())
                                  ? v()
                                  : (E.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_START" }), window.open(e)));
                    },
                    shouldUseManaModal: G,
                }));
            break;
        case eg.pn.VENMO_INFORMATION:
            let tM = 0 !== eK.length && null != eV;
            (t = (0, i.jsx)(tZ, {})),
                (n = (0, i.jsx)(tv, {
                    onBack: () => tE(eC.he.VENMO),
                    primaryCTA: eR.Ay.CTAType.CONTINUE,
                    primaryText: tM ? j.intl.string(j.t.PDTjLN) : j.intl.string(j.t["4KoTLM"]),
                    onPrimary: () => (tM ? tA() : void g()),
                    shouldUseManaModal: G,
                }));
            break;
        case eg.pn.PAYMENT_REQUEST_INFORMATION:
            (t = (0, i.jsx)(tz, {})),
                (n = (0, i.jsx)(tv, { onBack: () => eE(eg.pn.PAYMENT_TYPE), shouldUseManaModal: G }));
            break;
        case eg.pn.CASH_APP_INFORMATION:
            let tb = null != e$;
            (t = (0, i.jsx)(tq, {})),
                (n = (0, i.jsx)(tv, {
                    onBack: () => tE(eC.he.CASH_APP),
                    primaryCTA: eR.Ay.CTAType.CONTINUE,
                    primaryText: tb ? j.intl.string(j.t.PDTjLN) : j.intl.string(j.t["9ALP8w"]),
                    onPrimary: () => (tb ? tA() : tr()),
                    primaryDisabled: null == ep,
                    shouldUseManaModal: G,
                }));
            break;
        case eg.pn.ADDRESS:
            let tL = B && null != ts;
            (t = (0, i.jsx)(tU, {
                paymentModalArgs: l,
                paymentSourceType: es.methodType ?? eC.he.CARD,
                shouldUsePaymentElement: tL,
            })),
                (n = (0, i.jsx)(tk, {
                    paymentModalArgs: l,
                    shouldUseManaModal: G,
                    analyticsLocation: R,
                    overwriteSubscriptionPaymentSource: k,
                    handleStepChange: eE,
                    onPaymentRequestSourceFailed: tn,
                    paymentRequestPaymentMethod: eO,
                    completeSteps: tt,
                    paymentMethodSteps: es,
                    shouldUsePaymentElement: tL,
                    ...tl,
                }));
            break;
        case eg.pn.AWAITING_AUTHENTICATION:
            t = (0, i.jsx)(t$, {});
            break;
        default:
            throw new e_.v({ message: `Unexpected step: ${el}`, extraSentryInformation: { currentStep: el } });
    }
    let tj = B && ti,
        tO = tj ? "combined_stripe_elements" : void 0,
        tw = (0, i.jsxs)(h.Y, {
            className: tY.C9,
            staticClassName: tY.a2,
            animatedNodeClassName: tY.L2,
            fillParent: !0,
            overrideKey: tO,
            step: el,
            steps: es.steps,
            sideMargin: 20,
            children: [
                null != ei &&
                    (0, i.jsx)("div", { className: tT.Ns, children: (0, i.jsx)(A.w, { type: "info", children: ei }) }),
                tj &&
                    (0, i.jsx)(eS.e4, {
                        step: el,
                        analyticsContext:
                            null != x ? { activitySessionId: Y, contextMetadata: W, analyticsData: x } : void 0,
                        paymentElementSelectedType: ts,
                        elementsRef: tc,
                        stripePaymentElementProps: td,
                        stripeAddressElementProps: tp,
                        addressElementKey: th,
                        billingAddressInfo: eY.info,
                        onSetupError: () => {
                            tu(), eE(eg.pn.PAYMENT_TYPE);
                        },
                        paymentElementFooter: (0, i.jsx)(ef.Z4, {
                            className: tT.SO,
                            stackingBehavior: "stack",
                            onComplete: () => {
                                setTimeout(() => H(eg.pn.REVIEW), 0);
                            },
                        }),
                    }),
                t,
            ],
        }),
        tD = el === eg.pn.PAYMENT_TYPE && 0 === o.length ? null : n;
    return b
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  O && (0, i.jsx)(ex.A, { className: tT.At, isEligibleForTrial: O }),
                  (0, i.jsxs)(eM.dZ, { children: [tC, tw] }),
                  (0, i.jsx)(eM.UX, { children: tD }),
              ],
          })
        : (0, i.jsx)(e4.A, {
              shouldUseManaModal: G,
              steps: I ?? es.steps,
              currentStep: T ?? el,
              overrideKey: tO,
              paymentError: l.paymentError,
              header: N,
              hideBreadcrumbs: M,
              body: tw,
              footer: tD,
          });
}
function tX(e) {
    let {
            defaultPaymentSourceId: t,
            paymentSources: n,
            hasFetchedPaymentSources: l,
        } = (0, c.cf)([eX.A], () => ({
            defaultPaymentSourceId: void 0 !== e ? e : eX.A.defaultPaymentSourceId,
            paymentSources: eX.A.paymentSources,
            hasFetchedPaymentSources: eX.A.hasFetchedPaymentSources,
        })),
        r = (0, c.bG)([e9], () => e9.cashAppPayComponent),
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
                                E.h.unsubscribe("BRAINTREE_CREATE_CLIENT_SUCCESS", r), setTimeout(l, 0);
                            };
                        E.h.subscribe("BRAINTREE_CREATE_CLIENT_SUCCESS", r);
                    })
                        .then(() => {
                            N(), T();
                        })
                        .catch((e) => {
                            S.pM(e);
                        }),
                        E.h.dispatch({ type: "BRAINTREE_CREATE_CLIENT_SUCCESS", client: e });
                })
                .catch(() => E.h.dispatch({ type: "BRAINTREE_CREATE_CLIENT_FAIL" }));
        }),
            l || (0, y.$o)();
    }),
        a.useEffect(() => {
            null == r && null != i && i.includes(eC.he.CASH_APP) && tt();
        }, [i, r]);
    let [s, o] = a.useState(t),
        u = (0, eo.A)(t);
    t !== u && null != t && null == s && o(t);
    let [d, p] = a.useState(() => ({ info: tW, isValid: !1 })),
        [m, h] = a.useState(() => ({ info: tH, isValid: !1 })),
        [A, C] = a.useState(""),
        [I, v] = a.useState(""),
        [g, x] = a.useState(() => ({ token: null })),
        [M, b, j, O, w] = (0, c.yK)([L.A], () => [
            L.A.braintreeEmail,
            L.A.braintreeNonce,
            L.A.error,
            L.A.venmoUsername,
            L.A.adyenPaymentData,
        ]),
        [D, U] = (0, c.yK)([eJ.A], () => [eJ.A.error, eJ.A.isAwaitingAuthentication]);
    a.useEffect(() => {
        let e = (e) => {
            let { billingAddress: t } = e;
            h({ info: t, isValid: t.country.length > 0 });
        };
        return (
            E.h.subscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e),
            () => {
                E.h.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e), (0, R.ET)();
            }
        );
    }, []);
    let [k, G] = a.useState(!1),
        [F, Y] = a.useState(!1),
        [B, W] = a.useState(null),
        H = a.useRef(null),
        V = (0, c.bG)([eJ.A], () => eJ.A.isAwaitingAuthentication),
        [K, Z] = (0, c.yK)([eQ.A], () => [eQ.A.purchaseTokenAuthState, eQ.A.purchaseTokenHash]);
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
            hasRedirectURL: F,
            setHasRedirectURL: Y,
            braintreeEmail: M,
            braintreeNonce: b,
            venmoUsername: O,
            adyenPaymentData: w,
            paymentError: null != D ? D : j,
            paymentAuthenticationState: U ? e1.oc.PENDING : null != D ? e1.oc.ERROR : e1.oc.NONE,
            purchaseError: B,
            setPurchaseError: W,
            purchaseErrorBlockRef: H,
            isAuthenticating: V,
            purchaseTokenAuthState: K,
            purchaseTokenHash: Z,
            epsBankState: I,
            setEpsBankState: v,
            p24BankState: A,
            setP24BankState: C,
        }
    );
}
