n.d(t, { Y: () => t$, _V: () => tJ });
var l,
    i,
    r = n(627968),
    a = n(64700),
    s = n(342393);
n(284009);
var o = n(17928),
    u = n(691540),
    c = n(857250),
    d = n(97483),
    p = n(685094),
    m = n(683071),
    h = n(228366),
    C = n(636537),
    E = n(277984),
    f = n(70142),
    A = n(739508),
    S = n(184015),
    y = n(723702),
    P = n(652215);
function I() {
    let e = f.A.getClient();
    null != e &&
        (0, S.j)().then((t) => {
            t.venmo
                .create({ client: e, allowDesktop: !0, paymentMethodUsage: "multi_use" })
                .then((e) => {
                    h.h.dispatch({ type: "BRAINTREE_CREATE_VENMO_CLIENT_SUCCESS", venmoClient: e });
                })
                .catch(() => {
                    h.h.dispatch({ type: "BRAINTREE_CREATE_VENMO_CLIENT_FAIL" });
                });
        });
}
function _() {
    let e = f.A.getClient();
    null != e &&
        (0, S.j)().then((t) => {
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
                            url: P.Rsh.BILLING_PAYPAL_BILLING_AGREEMENT_TOKENS,
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
                                    ((t = P.Gg3.BRAINTREE.KEY.startsWith("production_")
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
                        h.h.dispatch({ type: "BRAINTREE_CREATE_PAYPAL_CLIENT_SUCCESS", paypalClient: e });
                })
                .catch(() => h.h.dispatch({ type: "BRAINTREE_CREATE_PAYPAL_CLIENT_FAIL" }));
        });
}
function T() {
    let e = f.A.getPayPalClient();
    if (null == e) throw Error("braintree paypal client must be initialized before calling this");
    h.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_START" });
    let t = Promise.resolve("");
    (0, y.isDesktop)() && (t = (0, E.jf)(P.hes.PAYPAL)),
        t
            .then(() => e.tokenize({ flow: "vault" }))
            .then((e) => {
                let { email: t, firstName: n, lastName: l, billingAddress: i } = e.details;
                h.h.dispatch({
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
                n === P.Q7O.PAYPAL_POPUP_CLOSED || null == n
                    ? h.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED" })
                    : (h.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_FAIL", message: t, code: n }),
                      A.pM(Error(`Braintree Paypal Error: ${t} ${n} ${l}`)));
            });
}
function g() {
    let e = f.A.getVenmoClient();
    if (null == e) throw Error("Braintree Venmo client must be initialized before calling tokenize.");
    h.h.dispatch({ type: "BRAINTREE_TOKENIZE_VENMO_START" }),
        e
            .tokenize()
            .then((e) => {
                let { username: t } = e.details;
                h.h.dispatch({ type: "BRAINTREE_TOKENIZE_VENMO_SUCCESS", nonce: e.nonce, username: t });
            })
            .catch((e) => {
                let { message: t, code: n, details: l } = e;
                [P.Q7O.VENMO_APP_CANCELED, P.Q7O.VENMO_DESKTOP_CANCELED, P.Q7O.VENMO_CANCELED].includes(n)
                    ? h.h.dispatch({ type: "BRAINTREE_TOKENIZE_VENMO_FAIL_CANCELED" })
                    : (h.h.dispatch({ type: "BRAINTREE_TOKENIZE_VENMO_FAIL", message: t, code: n }),
                      A.pM(Error(`Braintree Venmo Error: ${t} ${n} ${l}`)));
            });
}
function x(e, t) {
    if (null == e) return Promise.resolve();
    h.h.dispatch(t);
    try {
        return Promise.resolve(e.teardown());
    } catch (e) {
        return Promise.resolve();
    }
}
var v = n(391048),
    N = n(292666),
    M = n(812745),
    R = n(825755),
    b = n(375708);
class j extends a.PureComponent {
    componentDidMount() {
        null != this.props.paypalClient && T();
    }
    componentDidUpdate(e) {
        null == e.paypalClient && null != this.props.paypalClient && T();
    }
    componentWillUnmount() {
        x(f.A.getPayPalClient(), { type: "BRAINTREE_TEARDOWN_PAYPAL_CLIENT" }).then(() => {
            null != f.A.getClient() && _();
        });
    }
    render() {
        let { braintreeEmail: e, paypalClient: t } = this.props;
        return (0, r.jsx)(N.k, {
            label: b.intl.string(b.t.QQBAos),
            leading: { type: "image", src: (0, M.Nj)(M.Ay.Types.PAYPAL) },
            value: e,
            readOnly: !0,
            placeholder: null == t ? b.intl.string(b.t.dte2M9) : b.intl.string(b.t.hopw7X),
        });
    }
}
let O = o.Ay.connectStores([f.A, R.A], () => ({
    braintreeEmail: R.A.braintreeEmail,
    paypalClient: f.A.getPayPalClient(),
}))(j);
var L = n(297264),
    w = n(834730),
    k = n(504998);
class D extends a.PureComponent {
    componentDidMount() {
        null != this.props.venmoClient && g();
    }
    componentDidUpdate(e) {
        null == e.venmoClient && null != this.props.venmoClient && g();
    }
    componentWillUnmount() {
        x(f.A.getVenmoClient(), { type: "BRAINTREE_TEARDOWN_VENMO_CLIENT" }).then(() => {
            null != f.A.getClient() && I();
        });
    }
    render() {
        let { venmoUsername: e, className: t, venmoClient: n } = this.props,
            l = null != e && "" !== e;
        return (0, r.jsxs)("div", {
            className: t,
            children: [
                (0, r.jsx)(M.Ay, { type: M.Ay.Types.VENMO, size: M.y3.MEDIUM, className: k.Z }),
                l
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(L.D, {
                                  variant: e.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
                                  className: k.y,
                                  children: b.intl.format(b.t.DowIre, { venmoUsername: e }),
                              }),
                              (0, r.jsx)(w.E, {
                                  variant: "text-md/medium",
                                  className: k.y,
                                  children: b.intl.string(b.t.kmEvnR),
                              }),
                          ],
                      })
                    : (0, r.jsx)(w.E, {
                          variant: "text-md/medium",
                          className: k.y,
                          children: null == n ? b.intl.string(b.t["2ouZDU"]) : b.intl.string(b.t.mIL6Jb),
                      }),
            ],
        });
    }
}
let U = o.Ay.connectStores([f.A, R.A], () => ({ venmoUsername: R.A.venmoUsername, venmoClient: f.A.getVenmoClient() }))(
    D,
);
var G = n(891197),
    F = n(503698),
    H = n.n(F),
    B = n(305866),
    Y = n(287809),
    W = n(832208),
    V = n(661531),
    K = n(602853),
    Z = n(511274),
    q = n(670739),
    z = n(661772);
let Q = function (e) {
    let t = a.useRef(null),
        { stripeType: n, flipped: l, updateCompleted: i, onFocus: o, onBlur: u } = e,
        [c, d] = a.useState(M.Be.UNKNOWN),
        [p, m] = a.useState(!1),
        [h, C] = a.useState(!1),
        [E, f] = a.useState(null),
        [A, S] = a.useState({}),
        y = (0, s.useElements)(),
        P = a.useCallback(() => {
            if (null != y)
                switch (n) {
                    case "cardNumber": {
                        let e = y.getElement(s.CardNumberElement);
                        if (null == e) return;
                        e.off("change"), e.off("focus"), e.off("blur");
                        break;
                    }
                    case "cardExpiry": {
                        let e = y.getElement(s.CardExpiryElement);
                        if (null == e) return;
                        e.off("change"), e.off("focus"), e.off("blur");
                        break;
                    }
                    case "cardCvc": {
                        let e = y.getElement(s.CardCvcElement);
                        if (null == e) return;
                        e.off("change"), e.off("focus"), e.off("blur");
                    }
                }
        }, [y, n]),
        I = a.useCallback(
            (e) => {
                h || e.empty || C(!0), null != i && i(e.complete), null != e.error && m(!1);
            },
            [h, i],
        ),
        _ = a.useCallback(() => {
            m(!0), o?.();
        }, [o]),
        T = a.useCallback(() => {
            m(!1), u?.();
        }, [u]),
        g = a.useCallback(() => {
            if (null != y)
                switch (n) {
                    case "cardNumber": {
                        let e = y.getElement(s.CardNumberElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            c !== e.brand && d(e.brand),
                                e.empty && h
                                    ? f(b.intl.string(b.t.eOIfuy))
                                    : null != e.error
                                      ? f(b.intl.string(b.t.x4pWtJ))
                                      : f(null),
                                I(e);
                        }),
                            e.on("focus", _),
                            e.on("blur", T);
                        break;
                    }
                    case "cardExpiry": {
                        let e = y.getElement(s.CardExpiryElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            null != e.error || (e.empty && h) ? f(b.intl.string(b.t["9/zZdl"])) : f(null), I(e);
                        }),
                            e.on("focus", _),
                            e.on("blur", T);
                        break;
                    }
                    case "cardCvc": {
                        let e = y.getElement(s.CardCvcElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            null != e.error || (e.empty && h) ? f(b.intl.string(b.t.ro4isZ)) : f(null), I(e);
                        }),
                            e.on("focus", _),
                            e.on("blur", T);
                    }
                }
        }, [T, I, _, c, y, h, n]);
    a.useEffect(
        () => (
            g(),
            () => {
                P();
            }
        ),
        [g, P],
    );
    let x = (0, K.r)(V.A.colors.TEXT_SUBTLE).hex(),
        v = (0, K.r)(V.A.colors.TEXT_STRONG).hex();
    function N() {
        return H()(q.vB, { [q.Tn]: null !== E, [q.iH]: p, [q.yD]: "cardNumber" === n });
    }
    return (
        a.useLayoutEffect(() => {
            let { current: e } = t;
            if (null == e) return;
            let n = window.getComputedStyle(e),
                l = n.getPropertyValue("font-family");
            S({
                base: {
                    fontFamily: l,
                    fontWeight: n.getPropertyValue("font-weight"),
                    color: v,
                    fontSize: n.getPropertyValue("font-size"),
                    "::placeholder": { color: x },
                },
            });
        }, [t, x, v]),
        (0, r.jsxs)("div", {
            className: q.Zm,
            "data-stripe-type": n,
            children: [
                (0, r.jsx)("div", { ref: t, className: H()(q.iw, z.hF) }),
                (function () {
                    switch (n) {
                        case "cardNumber":
                            return (0, r.jsxs)("div", {
                                children: [
                                    (0, r.jsx)(M.Ay, { className: q.Ie, type: c, flipped: l }),
                                    (0, r.jsx)(s.CardNumberElement, {
                                        options: { style: A, placeholder: b.intl.string(b.t.gPRHfw), disableLink: !1 },
                                        className: N(),
                                    }),
                                ],
                            });
                        case "cardExpiry":
                            return (0, r.jsx)(s.CardExpiryElement, {
                                options: { style: A, placeholder: b.intl.string(b.t.xeEWQ6) },
                                className: N(),
                            });
                        case "cardCvc":
                            return (0, r.jsx)(s.CardCvcElement, {
                                options: { style: A, placeholder: b.intl.string(b.t.wZz04F) },
                                className: N(),
                            });
                    }
                })(),
                (0, r.jsx)(Z.U, { error: E }),
            ],
        })
    );
};
var $ = n(142970),
    J = n(863991);
let X = function (e) {
    let { onCardInfoChange: t, error: n } = e,
        l = a.useRef(t),
        [i, s] = a.useState(!1),
        [o, u] = a.useState({}),
        [c, d] = a.useState({ name: "", country: "", postalCode: "" }),
        [p, m] = a.useState({}),
        [h, C] = a.useState({}),
        { setFocusLockDisabled: E } = a.useContext(B.M);
    a.useEffect(() => () => {
        void 0 !== E && E(!1);
    });
    let f = a.useCallback(() => {
        void 0 !== E && E(!0);
    }, [E]);
    function A(e, t) {
        !!o[e] !== t && u((n) => ({ ...n, [e]: t }));
    }
    let S = a.useCallback(
        function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = {};
            return (e || p.name) && "" === c.name && (t.name = b.intl.string(b.t.lIkVsi)), t;
        },
        [p, c],
    );
    return (
        a.useEffect(() => {
            let e = o.cardNumber && o.cardExpiry && o.cardCvc && 0 === Object.keys(S(!0)).length;
            l.current({ name: c.name }, !!e);
        }, [o, c, S]),
        (0, r.jsxs)("div", {
            children: [
                Y.default.getCurrentUser()?.nsfwAllowed
                    ? (0, r.jsxs)("div", {
                          className: $.Rm,
                          children: [
                              (0, r.jsx)("div", { className: H()(M.y3.SMALL, $.eo, $.Ud) }),
                              (0, r.jsx)("div", { className: H()(M.y3.SMALL, $.DR, $.Ud) }),
                              (0, r.jsx)("div", { className: H()(M.y3.SMALL, $.k4, $.Ud) }),
                              (0, r.jsx)("div", { className: H()(M.y3.SMALL, $.a3, $.Ud) }),
                              (0, r.jsx)("div", { className: H()(M.y3.SMALL, $.CY, $.Ud) }),
                              (0, r.jsx)("div", { className: H()(M.y3.SMALL, $.Q5, $.Ud) }),
                              (0, r.jsx)("div", { className: H()(M.y3.SMALL, $.YA, $.Ud) }),
                          ],
                      })
                    : (0, r.jsxs)("div", {
                          className: $.Rm,
                          children: [
                              (0, r.jsx)("div", { className: H()(M.y3.SMALL, $.aq, $.Ud) }),
                              (0, r.jsx)("div", { className: H()(M.y3.SMALL, $.VX, $.Ud) }),
                              (0, r.jsx)("div", { className: H()(M.y3.SMALL, $.Yi, $.Ud) }),
                              (0, r.jsx)("div", { className: H()(M.y3.SMALL, $.qR, $.Ud) }),
                              (0, r.jsx)("div", { className: H()(M.y3.SMALL, $.m2, $.Ud) }),
                              (0, r.jsx)("div", { className: H()(M.y3.SMALL, $.Ij, $.Ud) }),
                              (0, r.jsx)("div", { className: H()(M.y3.SMALL, $._V, $.Ud) }),
                          ],
                      }),
                (0, r.jsx)(W.A, {
                    form: [
                        {
                            fields: [
                                {
                                    id: "card-number",
                                    name: "cardNumber",
                                    title: () => b.intl.string(b.t.cVyJ3o),
                                    getClassNameForLayout: () => J.c6,
                                    renderInput: () =>
                                        (0, r.jsx)(Q, {
                                            stripeType: "cardNumber",
                                            flipped: i,
                                            updateCompleted: (e) => A("cardNumber", e),
                                            onFocus: f,
                                        }),
                                },
                            ],
                        },
                        {
                            fields: [
                                {
                                    id: "card-expiration-date",
                                    name: "cardExpiry",
                                    title: () => b.intl.string(b.t["CeBa/4"]),
                                    getClassNameForLayout: () => J.ep,
                                    renderInput: () =>
                                        (0, r.jsx)(Q, {
                                            stripeType: "cardExpiry",
                                            updateCompleted: (e) => A("cardExpiry", e),
                                            onFocus: f,
                                        }),
                                },
                                {
                                    id: "card-cvc",
                                    name: "cardCvc",
                                    title: () => b.intl.string(b.t.Fd3rOz),
                                    getClassNameForLayout: () => J.ep,
                                    renderInput: () =>
                                        (0, r.jsx)(Q, {
                                            stripeType: "cardCvc",
                                            updateCompleted: (e) => A("cardCvc", e),
                                            onFocus: () => {
                                                f(), s(!0);
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
                                    title: () => b.intl.string(b.t.VUlFdU),
                                    autoComplete: "cc-name",
                                    placeholder: () => b.intl.string(b.t["yf7ms+"]),
                                    getClassNameForLayout: () => J.c6,
                                    renderInput: (e) => (0, r.jsx)(N.k, { ...e }),
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
                            i = { name: h.name };
                        p[t] || "" === e || (l[t] = !0),
                            (n[t] = e),
                            l[t] && "" === e ? "name" === t && (i.name = b.intl.string(b.t.lIkVsi)) : delete i[t],
                            d(n),
                            m(l),
                            C(i);
                    },
                    onFieldBlur: function () {
                        C(S());
                    },
                }),
            ],
        })
    );
};
var ee =
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
function et(e) {
    if (null != e) {
        if (e.hasCardError()) return "credit_card_information";
        if (e.hasAddressError()) return "address";
    }
    return null;
}
var en = n(567333);
function el(e) {
    let { billingError: t, onCardInfoChange: n } = e,
        l = null != t && (null == t.code || et(t) === ee.CREDIT_CARD_INFORMATION);
    return (0, r.jsxs)(a.Fragment, {
        children: [
            l
                ? (0, r.jsx)("div", {
                      className: en.QK,
                      children: (0, r.jsx)(m.w, { type: "critical", children: b.intl.string(b.t["4vnhKV"]) }),
                  })
                : null,
            (0, r.jsx)(X, { onCardInfoChange: n, error: t }),
        ],
    });
}
function ei(e) {
    let { className: t, submitting: n, stripePaymentMethod: l } = e,
        { card: i } = l ?? {},
        a = null != i ? M.Ay.getType(i.brand) : M.Ay.Types.UNKNOWN;
    return (0, r.jsx)("div", {
        className: t,
        children: (0, r.jsx)(N.k, {
            label: b.intl.string(b.t["mmDvV+"]),
            leading: { type: "image", src: (0, M.Nj)(a) },
            value: n && null != i ? b.intl.formatToPlainString(b.t.bCynoK, i) : void 0,
            readOnly: !0,
            placeholder: b.intl.string(b.t.bWMH78),
        }),
    });
}
var er = n(964486),
    ea = n(475743),
    es = n(446044),
    eo = n(721101),
    eu = n(648335),
    ec = n(148077);
let ed = function (e) {
    let { onAccountHolderNameChange: t, billingAddressInfo: n } = e,
        l = a.useRef(null);
    return (0, r.jsx)("div", {
        className: ec.r,
        children: (0, r.jsx)(N.k, {
            label: b.intl.string(b.t.sN3wrd),
            inputRef: l,
            name: b.intl.string(b.t.sN3wrd),
            placeholder: b.intl.string(b.t.sN3wrd),
            onChange: (e) => t(e),
            value: n.name,
        }),
    });
};
var ep = n(462887),
    em = n(331322),
    eh = n(736653),
    eC = n(818348),
    eE = n(600954);
let ef = function (e) {
    let t = (0, eh.Ay)(),
        n = a.useRef(null),
        [l, i] = a.useState({}),
        o = (0, K.r)(V.A.colors.BACKGROUND_BASE_LOWER).hex();
    switch (
        (a.useLayoutEffect(() => {
            let { current: e } = n;
            if (null == e) return;
            let t = window.getComputedStyle(e),
                l = window.getComputedStyle(e, "::placeholder"),
                r = t.getPropertyValue("font-family"),
                a = t.getPropertyValue("font-weight");
            i({
                base: {
                    fontFamily: r,
                    fontWeight: a,
                    color: t.getPropertyValue("color"),
                    fontSize: t.getPropertyValue("font-size"),
                    backgroundColor: o,
                    padding: "12px",
                    "::placeholder": { color: l.getPropertyValue("color") },
                    borderRadius: V.A.radii.xs,
                },
            });
        }, [n, o]),
        e.type)
    ) {
        case eC.he.PRZELEWY24: {
            let i = (0, ep.M)(t) ? "/assets/f4150b3aed6c4679.svg" : "/assets/8b825aafb2e4dbed.svg",
                { onNameChange: a, onEmailChange: o, onP24BankChange: u, p24BankValue: c, billingAddressInfo: d } = e;
            return (0, r.jsx)("div", {
                className: eE.rf,
                children: (0, r.jsxs)(em.B, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(N.k, {
                            label: b.intl.string(b.t["w/qqKK"]),
                            inputRef: n,
                            name: b.intl.string(b.t["w/qqKK"]),
                            placeholder: b.intl.string(b.t["w/qqKK"]),
                            onChange: (e) => o(e),
                            value: d.email,
                        }),
                        (0, r.jsx)(N.k, {
                            label: b.intl.string(b.t["yf7ms+"]),
                            name: b.intl.string(b.t["yf7ms+"]),
                            placeholder: b.intl.string(b.t["yf7ms+"]),
                            onChange: (e) => a(e),
                            value: d.name,
                        }),
                        (0, r.jsxs)(em.B, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(w.E, { variant: "text-sm/semibold", children: b.intl.string(b.t.De3b8t) }),
                                (0, r.jsx)(s.P24BankElement, {
                                    options: { value: c, style: l },
                                    onChange: (e) => u(e.value),
                                }),
                                (0, r.jsx)("div", {
                                    className: eE.je,
                                    children: (0, r.jsx)("img", { src: i, alt: "Przelewy24" }),
                                }),
                            ],
                        }),
                    ],
                }),
            });
        }
        case eC.he.EPS: {
            let { onAccountHolderNameChange: i, onEPSBankChange: a, epsBankValue: o, billingAddressInfo: u } = e,
                c = (0, ep.M)(t) ? "/assets/025b24b0055c8d81.svg" : "/assets/1dae7d71a65fd90f.svg";
            return (0, r.jsx)("div", {
                className: eE.rf,
                children: (0, r.jsxs)(em.B, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(N.k, {
                            label: b.intl.string(b.t.sN3wrd),
                            inputRef: n,
                            name: b.intl.string(b.t.sN3wrd),
                            placeholder: b.intl.string(b.t.sN3wrd),
                            onChange: (e) => i(e),
                            value: u.name,
                        }),
                        (0, r.jsxs)(em.B, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(w.E, { variant: "text-sm/semibold", children: b.intl.string(b.t.dFyV07) }),
                                (0, r.jsx)(s.EpsBankElement, {
                                    options: { value: o, style: l },
                                    onChange: (e) => a(e.value),
                                }),
                                (0, r.jsx)("div", {
                                    className: eE.je,
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
var eA = n(71804),
    eS = n(31823);
n(426398), n(211083);
var ey = n(883645),
    eP = n(944355);
n(21713);
var eI = n(316915),
    e_ = n(783327),
    eT = n(626584),
    eg = n(166532),
    ex = n(69494),
    ev = n(901930),
    eN = n(19311),
    eM = n(482132),
    eR = n(364840),
    eb = n(73825),
    ej = n(558620),
    eO = n(683433),
    eL = n(36167),
    ew = n(951305),
    ek = (((i = {})[(i.UNKNOWN = 0)] = "UNKNOWN"), (i[(i.PENDING = 1)] = "PENDING"), (i[(i.DONE = 2)] = "DONE"), i);
let eD = 0,
    eU = null,
    eG = null,
    eF = null;
class eH extends o.Ay.Store {
    static displayName = "BrowserCheckoutStateStore";
    get browserCheckoutState() {
        return eD;
    }
    get loadId() {
        return eU;
    }
    get skuId() {
        return eG;
    }
    get planId() {
        return eF;
    }
}
let eB = new eH(h.h, {
    USER_PAYMENT_BROWSER_CHECKOUT_STARTED: function (e) {
        (eD = 1), (eU = e.loadId);
    },
    USER_PAYMENT_BROWSER_CHECKOUT_DONE: function (e) {
        eU === e.loadId && ((eG = e.skuId ?? null), (eF = e.skuSubscriptionPlanId ?? null), (eD = 2));
    },
});
var eY = n(202541),
    eW = n(790262);
function eV(e) {
    let t,
        { step: n, onPurchaseComplete: l, onHandoffFailure: i } = e,
        {
            setSelectedSkuId: s,
            setSelectedPlanId: u,
            contextMetadata: c,
        } = (0, eI.t4)((e) => ({
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            contextMetadata: e.contextMetadata,
        })),
        {
            browserCheckoutState: d,
            browserCheckoutStateLoadId: p,
            browserCheckoutStateSkuId: m,
            browserCheckoutStatePlanId: h,
        } = (0, o.cf)([eB], () => ({
            browserCheckoutState: eB.browserCheckoutState,
            browserCheckoutStateLoadId: eB.loadId,
            browserCheckoutStateSkuId: eB.skuId,
            browserCheckoutStatePlanId: eB.planId,
        })),
        C = (0, ej.A)(),
        { isGift: f } = (0, ew.Pv)(),
        [A, S] = a.useState(!1);
    switch (n) {
        case eg.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
            t = P.do8.GOOGLE_PAY;
            break;
        case eg.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
            t = P.do8.APPLE_PAY;
    }
    return (
        a.useEffect(() => {
            let e = setTimeout(() => {
                A ||
                    (S(!0),
                    (0, E.Ze)(c.loadId),
                    (0, eL.my)(
                        {
                            planId: C?.id ?? eY.gD.PREMIUM_MONTH_TIER_2,
                            isGift: f,
                            loadId: c.loadId,
                            paymentMethodType: t,
                        },
                        i,
                    ));
            }, 1e3);
            return () => clearTimeout(e);
        }, [C, f, c, i, S, A, t]),
        a.useEffect(() => {
            null !== m && (eY.oz.includes(m) && ((0, eb.ur)(m), (0, E.hP)()), s(m)),
                null !== h && u(h),
                p === c.loadId && d === ek.DONE && l();
        }, [s, u, d, p, m, h, c, l]),
        (0, r.jsxs)("div", {
            className: eW.rf,
            children: [
                (0, r.jsx)(L.D, { variant: "heading-xl/bold", children: b.intl.string(b.t.C4HYfy) }),
                (0, r.jsx)(w.E, { variant: "text-md/normal", className: eW.h_, children: b.intl.string(b.t.xfG7Jp) }),
            ],
        })
    );
}
function eK(e) {
    let { onPrimaryClick: t, onBackClick: n } = e;
    return (0, r.jsx)(eR.j, {
        children: (0, r.jsxs)("div", {
            className: eW.kL,
            children: [
                (0, r.jsx)(eO.A, { onClick: n }),
                (0, r.jsx)(eO.F, { onClick: t, children: b.intl.string(b.t["4Qvmmj"]) }),
            ],
        }),
    });
}
var eZ = n(615405),
    eq = n(153084),
    ez = n(295405),
    eQ = n(71319),
    e$ = n(67480),
    eJ = n(174459),
    eX = n(427262),
    e0 = n(251913),
    e1 = n(632638),
    e2 = n(632088);
let e4 = null,
    e3 = null;
class e6 extends o.Ay.Store {
    static displayName = "AdyenStore";
    get client() {
        return e4;
    }
    get cashAppPayComponent() {
        return e3;
    }
}
let e7 = new e6(h.h, {
    ADYEN_CREATE_CLIENT_SUCCESS: function (e) {
        let { client: t } = e;
        e4 = t;
    },
    ADYEN_TEARDOWN_CLIENT: function () {
        e4 = null;
    },
    ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS: function (e) {
        let { component: t } = e;
        e3 = t;
    },
});
async function e5() {
    return await C.Bo.get({ url: P.Rsh.BILLING_ADYEN_PAYMENT_METHODS, oldFormErrors: !0, rejectWithError: !1 });
}
async function e8() {
    try {
        let e = await e5(),
            { default: t } = await Promise.all([n.e("94678"), n.e("40002")]).then(n.bind(n, 971193)),
            l = await t({
                environment: P.Gg3.ADYEN.KEY.startsWith("live_") ? "live" : "test",
                clientKey: P.Gg3.ADYEN.KEY,
                analytics: { enabled: !1 },
                paymentMethodsResponse: e.body,
            });
        h.h.dispatch({ type: "ADYEN_CREATE_CLIENT_SUCCESS", client: l }),
            (function (e) {
                if (null != e7.cashAppPayComponent) {
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
                            if (n) h.h.dispatch({ type: "ADYEN_CASH_APP_PAY_SUBMIT_SUCCESS", data: t });
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
                                    case "Error during initialization":
                                    case "Error rendering CashAppPay button":
                                        (n = !1), (t = b.intl.string(b.t.TJ8dDB));
                                }
                                (0, E.i0)(e.message, n, t);
                            }
                        },
                    })
                    .mount(`#${e2.h}`);
                h.h.dispatch({ type: "ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS", component: t });
            })(l);
    } catch (e) {
        (0, A.pM)(e), h.h.dispatch({ type: "ADYEN_CREATE_CLIENT_FAIL" });
    }
}
function e9() {
    let e = e7.cashAppPayComponent;
    if (null == e) throw Error("Adyen CashAppPay component must be created before mounting.");
    try {
        e.mount(`#${e2.h}`);
    } catch (e) {}
}
function te() {
    e7.cashAppPayComponent?.unmount();
}
function tt() {
    let e = e7.cashAppPayComponent;
    if (null == e) throw Error("Adyen CashAppPay component must be created before submitting.");
    e.submit();
}
var tn = n(735841);
function tl(e) {
    let { className: t } = e,
        n = (0, o.bG)([e7], () => e7.cashAppPayComponent),
        l = (0, o.bG)([R.A], () => R.A.adyenPaymentData);
    a.useEffect(
        () => (
            null == l && null != n && (e9(), tt()),
            () => {
                te();
            }
        ),
        [l, n],
    );
    let i = l?.paymentMethod?.cashtag ?? "",
        s = null != l && "" !== i;
    return (0, r.jsxs)("div", {
        className: t,
        children: [
            (0, r.jsx)(M.Ay, { type: M.Ay.Types.CASH_APP, size: M.y3.MEDIUM, className: tn.K }),
            s
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(L.D, {
                              variant: i.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
                              className: tn.y,
                              children: b.intl.format(b.t["ze/1yE"], { cashtag: i }),
                          }),
                          (0, r.jsx)(w.E, {
                              variant: "text-md/medium",
                              className: tn.y,
                              children: b.intl.string(b.t.VPOx7N),
                          }),
                      ],
                  })
                : (0, r.jsx)(w.E, {
                      variant: "text-md/medium",
                      className: tn.y,
                      children: null == n ? b.intl.string(b.t["CgVe/w"]) : b.intl.string(b.t["1MqcjI"]),
                  }),
        ],
    });
}
var ti = n(73079),
    tr = n(459357),
    ta = n(550238),
    ts = n(869177),
    to = n(71532),
    tu = n(218075);
let tc = [eg.pn.PAYMENT_TYPE],
    td = [eg.pn.PAYMENT_TYPE, eg.pn.CREDIT_CARD_INFORMATION, eg.pn.ADDRESS],
    tp = [eg.pn.PAYMENT_TYPE, eg.pn.PAYPAL_INFORMATION, eg.pn.ADDRESS],
    tm = [eg.pn.PAYMENT_TYPE, eg.pn.VENMO_INFORMATION, eg.pn.ADDRESS],
    th = [eg.pn.PAYMENT_TYPE, eg.pn.CASH_APP_INFORMATION, eg.pn.ADDRESS],
    tC = [eg.pn.PAYMENT_TYPE, eg.pn.PRZELEWY24_INFORMATION, eg.pn.ADDRESS],
    tE = [eg.pn.PAYMENT_TYPE, eg.pn.EPS_INFORMATION, eg.pn.ADDRESS],
    tf = [eg.pn.PAYMENT_TYPE, eg.pn.IDEAL_INFORMATION, eg.pn.ADDRESS],
    tA = [eg.pn.PAYMENT_TYPE, eg.pn.ADDRESS],
    tS = {
        SHARED_ADD_PAYMENT_STEPS: tc,
        SHARED_CREDIT_CARD_STEPS: td,
        SHARED_PAYPAL_STEPS: tp,
        SHARED_VENMO_STEPS: tm,
        SHARED_PRZELEWY24_STEPS: tC,
        SHARED_EPS_STEPS: tE,
        SHARED_IDEAL_STEPS: tf,
        SHARED_CASH_APP_STEPS: th,
        SHARED_TYPE_AND_ADDRESS_STEPS: tA,
    },
    ty = {
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
var tP = n(710617);
function tI(e) {
    return () => (null != R.A.error && (0, v.ET)(), e());
}
function t_(e) {
    let { onPrimary: t, onBack: n, ...l } = e,
        i = t;
    null != t && (i = tI(t));
    let a = n;
    return null != n && (a = tI(n)), (0, r.jsx)(eN.Ay, { ...l, onPrimary: i, onBack: a });
}
function tT(e) {
    let { paymentSourceTypeRestrictions: t } = e,
        n = null != t && t.length > 0 ? tu.fU.ADD_NEW_PAYMENT_METHOD : void 0,
        { enabled: l } = (0, tr.c)({ location: "AddPaymentStep" });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(tu.je, { paymentRestrictionBannerType: n }),
            (0, r.jsx)(ti.A, { ...e }),
            l && (0, r.jsx)(eP.Z4, { className: tP.SO }),
        ],
    });
}
function tg(e) {
    let {
            prependSteps: t,
            appendSteps: n,
            analyticsLocation: l,
            isEligibleForTrial: i,
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
            CREDIT_CARD_STEPS: f,
            PAYPAL_STEPS: A,
            VENMO_STEPS: S,
            PAYMENT_REQUEST_STEPS: P,
            PRZELEWY24_STEPS: I,
            EPS_STEPS: _,
            IDEAL_STEPS: T,
            CASH_APP_STEPS: g,
            setConnectorPaymentRequestReady: x,
            connectorPaymentRequestRef: N,
        } = e,
        { activitySessionId: M } = (0, eS.V)(),
        j = (0, eI.t4)((e) => e.contextMetadata),
        { setBillingAddressState: O } = o;
    function L(e, l) {
        switch (e) {
            case eC.he.CARD:
                a ? u(eg.pn.AWAITING_BROWSER_CHECKOUT) : (c(f), u(eg.pn.CREDIT_CARD_INFORMATION));
                break;
            case eC.he.PAYPAL:
                c(A), u(eg.pn.PAYPAL_INFORMATION);
                break;
            case eC.he.VENMO:
                c(S), u(eg.pn.VENMO_INFORMATION);
                break;
            case eC.he.PAYMENT_REQUEST:
                a && "googlePay" === l
                    ? u(eg.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY)
                    : a && "applePay" === l
                      ? u(eg.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY)
                      : (c(P), u(eg.pn.PAYMENT_REQUEST_INFORMATION));
                break;
            case eC.he.PRZELEWY24:
                c(I), u(eg.pn.PRZELEWY24_INFORMATION);
                break;
            case eC.he.EPS:
                c(_), u(eg.pn.EPS_INFORMATION);
                break;
            case eC.he.IDEAL:
                c(T), u(eg.pn.IDEAL_INFORMATION);
                break;
            case eC.he.CASH_APP:
                c(g), u(eg.pn.CASH_APP_INFORMATION);
                break;
            case eC.he.GIROPAY:
            case eC.he.PAYSAFE_CARD:
            case eC.he.GCASH:
            case eC.he.GRABPAY_MY:
            case eC.he.MOMO_WALLET:
            case eC.he.KAKAOPAY:
            case eC.he.GOPAY_WALLET:
            case eC.he.BANCONTACT:
                c({ steps: [...t, ...tA, ...n], methodType: e }), u(eg.pn.ADDRESS);
        }
        null != R.A.error && (0, v.ET)();
    }
    async function w(e, t) {
        if (((0, v.mf)(e), null == e)) return void s();
        d(e);
        let { billingAddressInfo: n } = (0, to.uK)(e),
            i = (0, ta.Qd)(n);
        if (((null == n.name || "" === n.name) && null != t && (n.name = t), O({ isValid: i, info: n }), !i))
            return void u(eg.pn.ADDRESS);
        try {
            var r;
            (r = await (0, E.Tv)(e, n, l)), O((e) => ({ ...e, info: n })), c(P), h(r);
        } catch (e) {
            s();
        }
    }
    if (p === eg.pn.ATTEMPT_GOOGLE_PAY || p === eg.pn.ATTEMPT_APPLE_PAY) {
        let e = b.intl.string(p === eg.pn.ATTEMPT_APPLE_PAY ? b.t.czhXDv : b.t.Zj2xQ0);
        return (0, r.jsx)(ts.V, {
            onChooseType: L,
            paymentRequestWallet: p === eg.pn.ATTEMPT_APPLE_PAY ? "applePay" : "googlePay",
            onStripePaymentMethodReceived: w,
            onPaymentRequestFailure: () => {
                L(eC.he.CARD), m(e);
            },
            onValidPaymentRequest: () => x(!0),
            paymentRequestRef: N,
        });
    }
    let k = !(0, y.isDesktop)() || a;
    return (0, r.jsx)(tT, {
        onChooseType: L,
        onStripePaymentMethodReceived: w,
        paymentRequestWallets: k ? ["googlePay", "applePay"] : [],
        isEligibleForTrial: i,
        paymentRequestPaymentContext: { contextMetadata: j, activitySessionId: M },
        paymentSourceTypeRestrictions: C,
    });
}
function tx(e) {
    let {
        onReturn: t,
        shouldUseManaModal: n,
        handleStepChange: l,
        currentStep: i,
        connectorPaymentRequestReady: a,
        showConnectorPaymentRequest: s,
    } = e;
    if (i === eg.pn.ATTEMPT_GOOGLE_PAY || i === eg.pn.ATTEMPT_APPLE_PAY) {
        let e = b.intl.string(i === eg.pn.ATTEMPT_APPLE_PAY ? b.t.WoXvJL : b.t.wnVVr0);
        return (0, r.jsx)(t_, {
            onBack: () => l(eg.pn.PAYMENT_TYPE),
            primaryCTA: eN.Ay.CTAType.CONTINUE,
            primaryText: e,
            onPrimary: () => s(),
            primaryDisabled: !a,
            shouldUseManaModal: n,
        });
    }
    return (0, r.jsx)(t_, { onBack: t, shouldUseManaModal: n });
}
var tv = n(198970),
    tN = n(116673),
    tM = n(773669);
let tR = (e) => {
    let t,
        { billingAddressInfo: n, billingError: l, onBillingAddressChange: i, paymentSourceType: s } = e,
        u = null != l && (null == l.code || et(l) === ee.ADDRESS),
        c = (0, o.bG)([tM.default], () => tM.default.locale);
    switch (s) {
        case P.hes.GIROPAY:
        case P.hes.PAYSAFE_CARD:
        case P.hes.GCASH:
        case P.hes.GRABPAY_MY:
        case P.hes.MOMO_WALLET:
        case P.hes.KAKAOPAY:
        case P.hes.GOPAY_WALLET:
        case P.hes.BANCONTACT:
            t = "en-US" === c ? tv.Ay.Layouts.MODAL_US_WITH_NAME : tv.Ay.Layouts.MODAL_INTL_WITH_NAME;
            break;
        case P.hes.VENMO:
        case P.hes.CASH_APP:
            t = tv.Ay.Layouts.MODAL_US_WITH_NAME;
            break;
        default:
            t = "en-US" === c ? tv.Ay.Layouts.MODAL_US : tv.Ay.Layouts.MODAL_INTL;
    }
    let d = (0, tN.z)();
    0 === n.country.length && null != d && d.length > 0 && (n.country = d[0]);
    let p = (0, o.bG)([Y.default], () => Y.default.getCurrentUser()?.storeCountry?.isLocked === !0)
        ? b.intl.string(b.t.Pg2hU0)
        : null;
    return (0, r.jsxs)(a.Fragment, {
        children: [
            u
                ? (0, r.jsx)("div", {
                      className: en.QK,
                      children: (0, r.jsx)(m.w, { type: "critical", children: b.intl.string(b.t.vZ8y7l) }),
                  })
                : null,
            (0, r.jsx)(tv.Ay, {
                className: en.__invalid_formItem,
                onBillingAddressChange: i,
                error: l,
                layout: t,
                allowedBillingAddressCountries: d,
                countryHelperText: p,
                ...n,
            }),
        ],
    });
};
var tb = n(908166),
    tj = n(930767),
    tO = n(891640);
let tL = new eT.A("AddPaymentAddressStep.tsx");
function tw(e) {
    let { billingAddressInfo: t, onBillingAddressChange: n, paymentSourceType: l } = e,
        i = (0, o.bG)([R.A], () => R.A.error);
    return (0, r.jsx)(tR, { billingAddressInfo: t, billingError: i, onBillingAddressChange: n, paymentSourceType: l });
}
function tk(e) {
    let { paymentModalArgs: t, shouldUsePaymentElement: n, paymentSourceType: l } = e,
        { billingAddressState: i, setBillingAddressState: a } = t;
    return n
        ? null
        : (0, r.jsx)(tw, {
              billingAddressInfo: i.info,
              onBillingAddressChange: (e, t) => {
                  a({ info: { ...i.info, ...e }, isValid: t });
              },
              paymentSourceType: l,
          });
}
function tD(e) {
    let {
            paymentModalArgs: t,
            shouldUseManaModal: n,
            analyticsLocation: l,
            overwriteSubscriptionPaymentSource: i,
            handleStepChange: a,
            onPaymentRequestSourceFailed: s,
            paymentRequestPaymentMethod: o,
            completeSteps: u,
            paymentMethodSteps: c,
            paymentElementSelectedType: d,
            returnToPaymentElementStep: p,
            stripeElementsRef: m,
            lastConfirmedSetupIntentRef: h,
            shouldUsePaymentElement: C,
        } = e,
        E = (0, e_.S)(),
        { createSetupIntent: f } = (0, tb.x)(),
        {
            isSubmittingCurrentStep: A,
            billingAddressState: S,
            setIsSubmittingCurrentStep: y,
            hasRedirectURL: P,
            setHasRedirectURL: I,
            isAuthenticating: _,
        } = t;
    async function T() {
        y(!0);
        let e = C ? d : c.methodType,
            n = m.current,
            r = null != e && (0, tO.i)(e) ? tO.F[e] : null;
        if (null == r)
            throw new tj.v({
                message: "unknown Add Payment step not handled",
                extraSentryInformation: { paymentSourceType: e, analyticsLocation: l },
            });
        let a = r.submitAddressStep;
        try {
            let e = await a({
                ...t,
                analyticsLocation: l,
                stripe: E,
                shouldUsePaymentElement: C,
                stripeElements: n,
                lastConfirmedSetupIntentRef: h,
                createSetupIntent: f,
                onPaymentRequestSourceFailed: s,
                paymentRequestPaymentMethod: o,
                overwriteSubscriptionPaymentSource: i,
            });
            "redirect-url" === e.responseType ? I(e.hasRedirectURL) : u(e.paymentSource), P || y(!1);
        } catch (e) {
            y(!1), tL.warn(`Error confirming submitting Address Step for Payment Source Type: ${g}`, e);
        }
    }
    let g = c.methodType,
        { backStep: x } = C
            ? { backStep: eg.pn.PAYMENT_ELEMENT }
            : (function (e) {
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
              })(g),
        v = C ? () => p(void 0) : () => a(x);
    return (0, r.jsx)(t_, {
        onBack: v,
        primaryCTA: eN.Ay.CTAType.CONTINUE,
        primaryText: b.intl.string(b.t.PDTjLN),
        primarySubmitting: A,
        primaryDisabled: !S.isValid || _,
        onPrimary: T,
        shouldUseManaModal: n,
    });
}
let tU = new eT.A("PaymentElementStepFooter.tsx");
function tG(e) {
    let t = (0, e_.S)(),
        {
            shouldUseManaModal: n,
            paymentModalArgs: l,
            handleStepChange: i,
            setPaymentMethodSteps: s,
            onBack: o,
            primarySubmitting: u,
            primaryDisabled: c,
            PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: d,
        } = e,
        { setIsSubmittingCurrentStep: p, setBillingAddressState: m } = l,
        { paymentElementSelectedType: h, stripeElementsRef: C, remountAddressElement: f } = e,
        A = a.useCallback(async () => {
            p(!0);
            try {
                if (null == h || !(0, eu.PE)(h)) throw (0, E.ne)("Valid Payment Element source type not found", !0);
                let { steps: e, methodType: n } = d[h];
                s({ steps: e, methodType: n === eC.he.UNKNOWN ? h : n });
                let l = tO.F[h];
                if (null != l && null != l.submitPaymentElementStepHandler) {
                    await l.submitPaymentElementStepHandler({
                        stripe: t,
                        stripeElements: C.current,
                        remountAddressElement: f,
                        setBillingAddressState: m,
                    }),
                        i(l.stepAfterPaymentElement ?? eg.pn.ADDRESS);
                    return;
                }
                let r = (0, eu.eI)(h);
                if (null != r) return void i(r);
                i(eg.pn.ADDRESS);
            } catch (e) {
                tU.error("Error on submitting Payment Element step: ", e.message ?? JSON.stringify(e));
            } finally {
                p(!1);
            }
        }, [h, d, C, f, i, t, s, p, m]);
    return (0, r.jsx)(t_, {
        onBack: o,
        primaryCTA: eN.Ay.CTAType.CONTINUE,
        primaryType: "submit",
        primaryText: b.intl.string(b.t.PDTjLN),
        primarySubmitting: u,
        primaryDisabled: c,
        onPrimary: A,
        shouldUseManaModal: n,
    });
}
var tF = n(447952),
    tH = n(394549);
let tB = new eT.A("AddPaymentStep.tsx"),
    tY = { name: "", cardNumber: "", expirationDate: "", cvc: "" },
    tW = { email: "", name: "", country: "", line1: "", line2: "", city: "", postalCode: "", state: "" };
function tV(e) {
    let { onCardInfoChange: t } = e,
        n = (0, o.bG)([R.A], () => R.A.error);
    return (0, r.jsx)(el, { billingError: n, onCardInfoChange: t });
}
function tK() {
    return (0, r.jsx)(O, {});
}
function tZ() {
    return (0, r.jsx)(U, {});
}
function tq() {
    return (0, r.jsx)(tl, {});
}
function tz() {
    let e = (0, o.bG)([eZ.A], () => eZ.A.isBusy),
        t = (0, o.bG)([R.A], () => R.A.stripePaymentMethod);
    return (0, r.jsx)(ei, { stripePaymentMethod: t, submitting: e });
}
function tQ() {
    return (0, r.jsx)(G.N, {});
}
function t$(e) {
    let t,
        n,
        {
            paymentModalArgs: l,
            initialStep: i,
            prependSteps: C,
            appendSteps: A,
            onReturn: S,
            onComplete: y,
            onStepChange: I,
            breadcrumpSteps: _,
            currentBreadcrumpStep: x,
            header: v,
            analyticsData: N,
            analyticsLocation: M,
            hideBreadcrumbs: j = !1,
            useCheckoutStep: O = !1,
            isEligibleForTrial: L = !1,
            allowDesktopRedirectPurchase: w = !1,
            toastContent: k,
            continueSessionToInitialStep: D,
            overwriteSubscriptionPaymentSource: U = !1,
            shouldUseManaModal: G = !0,
        } = e,
        F = (0, e_.S)(),
        { activitySessionId: H } = (0, eS.V)(),
        { enabled: B } = (0, es.Y)({ location: "AddPaymentFlow" }),
        { contextMetadata: Y, clearFetchSetupIntent: W } = (0, eI.t4)((e) => ({
            contextMetadata: e.contextMetadata,
            clearFetchSetupIntent: e.clearFetchSetupIntent,
        })),
        V = (0, ey.qv)();
    (0, er.l0)(W);
    let K = a.useMemo(() => {
            let e = i === eg.pn.PAYMENT_TYPE || i === eg.pn.PAYMENT_ELEMENT;
            return B && e ? (w ? eg.pn.AWAITING_BROWSER_CHECKOUT : eg.pn.PAYMENT_ELEMENT) : i;
        }, [B, i, w]),
        Z = a.useMemo(() => (0, eX.Gn)(), []),
        {
            CREDIT_CARD_STEPS: q,
            PAYPAL_STEPS: z,
            IDEAL_STEPS: Q,
            PAYMENT_REQUEST_STEPS: $,
            VENMO_STEPS: J,
            ADD_PAYMENT_STEPS: X,
            PRZELEWY24_STEPS: ee,
            EPS_STEPS: et,
            CASH_APP_STEPS: en,
            PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: el,
        } = (function (e) {
            let { prependSteps: t, appendSteps: n, paymentElementsEnabled: l } = e,
                [i, r, s, o, u, c, d, p, m, h] = (0, a.useMemo)(
                    () =>
                        (function (e, t) {
                            let { prependSteps: n, appendSteps: l, paymentElementsEnabled: i } = t;
                            return e.map((e) => {
                                let { sharedStepsKey: t, methodType: r } = e;
                                return {
                                    steps: [
                                        ...n,
                                        ...(i && (null == r || r === eC.he.UNKNOWN || (0, eu.PE)(r)) ? ty[t] : tS[t]),
                                        ...l,
                                    ],
                                    methodType: r,
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
                C = (0, a.useMemo)(
                    () => ({
                        [eC.he.CARD]: o,
                        [eC.he.PAYPAL]: u,
                        [eC.he.PAYMENT_REQUEST]: r,
                        [eC.he.VENMO]: d,
                        [eC.he.CASH_APP]: h,
                        [eC.he.IDEAL]: c,
                        [eC.he.PRZELEWY24]: p,
                        [eC.he.EPS]: m,
                        [eC.he.BANCONTACT]: i,
                        [eC.he.GOPAY_WALLET]: i,
                        [eC.he.KAKAOPAY]: i,
                        [eC.he.GCASH]: i,
                        [eC.he.PAYSAFE_CARD]: i,
                        [eC.he.GRABPAY_MY]: i,
                        [eC.he.MOMO_WALLET]: i,
                        [eC.he.PIX]: i,
                    }),
                    [i, o, u, d, r, c, h, p, m],
                );
            return {
                DEFAULT_PAYMENT_ELEMENT_STEPS: i,
                CREDIT_CARD_STEPS: o,
                PAYPAL_STEPS: u,
                IDEAL_STEPS: c,
                PAYMENT_REQUEST_STEPS: r,
                VENMO_STEPS: d,
                ADD_PAYMENT_STEPS: s,
                PRZELEWY24_STEPS: p,
                EPS_STEPS: m,
                CASH_APP_STEPS: h,
                PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: C,
            };
        })({ prependSteps: C, appendSteps: A, paymentElementsEnabled: B }),
        [ei, ea] = a.useState(K),
        [eo, ec] = a.useState(null),
        [ep, em] = a.useState(
            (function (e) {
                switch (e) {
                    case eg.pn.CREDIT_CARD_INFORMATION:
                        return q;
                    case eg.pn.CASH_APP_INFORMATION:
                        return en;
                    default:
                        return { steps: [eg.pn.ADD_PAYMENT_STEPS] };
                }
            })(K),
        );
    a.useEffect(() => {
        (0, E.IV)();
    }, []);
    let eh = (0, o.bG)([R.A], () => R.A.redirectedPaymentSourceId),
        eE = (0, o.bG)([e7], () => e7.cashAppPayComponent),
        eT = { completeSteps: tl, setIsSubmittingCurrentStep: l.setIsSubmittingCurrentStep },
        eR = a.useRef(eT);
    a.useEffect(() => {
        eR.current = eT;
    }),
        a.useEffect(() => {
            let { completeSteps: e, setIsSubmittingCurrentStep: t } = eR.current;
            !(async function () {
                if (null == eh) return;
                await (0, E.$o)();
                let n = ez.A.getPaymentSource(eh);
                null != n && (e(n), t(!1), R.A.clearRedirectedPaymentSourceId());
            })();
        }, [eh]);
    let eb = a.useCallback(
            function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                ec(null), ea(e), t && I({ currentStep: ei, toStep: e });
            },
            [ei, I],
        ),
        ej = a.useCallback(
            (e) => {
                eJ.default.track(P.HAw.PAYMENT_FLOW_ADD_SOURCE_COMPLETED, {
                    load_id: Y.loadId,
                    analytics_location: M,
                    payment_source_id: e.id,
                    payment_source_type: e.type,
                    payment_source_country: e.paymentMethodCountry,
                });
            },
            [Y.loadId, M],
        ),
        eO = (0, o.bG)([R.A], () => R.A.error),
        eL = a.useRef(eO);
    a.useEffect(() => {
        let e = eL.current;
        (eL.current = eO),
            null != eO &&
                eO !== e &&
                eJ.default.track(P.HAw.PAYMENT_FLOW_ADD_SOURCE_ERROR, {
                    load_id: Y.loadId,
                    analytics_location: M,
                    payment_source_type: ep.methodType,
                    error_code: eO.code,
                    error_message: eO.message,
                });
    }, [eO, Y.loadId, M, ep.methodType]);
    let ew = a.useCallback(
            (e) => {
                ej(e),
                    (0, u.P0)(
                        (0, c.o)(void 0 !== k ? k : b.intl.string(b.t["VJPg+l"]), d.Ck.SUCCESS, {
                            position: d.xJ.BOTTOM,
                        }),
                    ),
                    y(ei, e),
                    eb(K, !1);
            },
            [eb, K, ei, y, k, ej],
        ),
        [ek, eD] = a.useState(null),
        {
            setPaymentSourceId: eU,
            creditCardState: eG,
            setCreditCardState: eF,
            setTokenState: eH,
            isSubmittingCurrentStep: eB,
            billingAddressState: eY,
            setBillingAddressState: eW,
            setIsSubmittingCurrentStep: eZ,
            braintreeEmail: eq,
            braintreeNonce: eQ,
            venmoUsername: e0,
            adyenPaymentData: e2,
            epsBankState: e4,
            setEpsBankState: e3,
            p24BankState: e6,
            setP24BankState: e5,
            selectedSkuId: e8,
        } = l,
        e9 = e8 ?? "",
        te = (0, o.bG)([e$.A], () => e$.A.get(e9), [e9]),
        tn = te?.eligiblePaymentGateways?.map((e) => e.valueOf());
    function tl(e) {
        eU(e.id), ew(e);
    }
    function ti() {
        em(X), eb(eg.pn.PAYMENT_TYPE);
    }
    let tr = a.useCallback(
            (e, t) => {
                eW((n) => ({ info: { ...n.info, ...e }, isValid: t }));
            },
            [eW],
        ),
        ta = (0, tF.wD)({
            step: ei,
            continueSessionToInitialStep: D,
            paymentElementsEnabled: B,
            handleStepChange: eb,
            logger: tB,
            shouldLogOnChangeEvents: Z || !1,
            onBillingAddressChange: tr,
        }),
        {
            shouldRenderPaymentElement: ts,
            paymentElementReady: to,
            paymentElementLoaded: tu,
            paymentElementSelectedType: tc,
            returnToPaymentElementStep: td,
            onBackFromPaymentElement: tp,
            stripeElementsRef: tm,
            stripePaymentElementProps: th,
            stripeAddressElementProps: tC,
            remountAddressElement: tE,
            addressElementKey: tf,
        } = ta,
        tA = a.useCallback(() => {
            eb(eg.pn.ADDRESS), B && tF.Ky.includes(ei) && tE();
        }, [eb, B, tE, ei]),
        tI = a.useCallback(
            (e) => {
                B && null != tc && (0, eu.PE)(e) ? td(e) : eb(eg.pn.PAYMENT_TYPE);
            },
            [B, tc, td, eb],
        ),
        tT = O ? (0, r.jsx)(ev.A, { className: tP._8 }) : null,
        tv = (function () {
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
        case eg.pn.ATTEMPT_GOOGLE_PAY:
        case eg.pn.ATTEMPT_APPLE_PAY:
        case eg.pn.PAYMENT_TYPE:
            (t = (0, r.jsx)(tg, {
                prependSteps: C,
                appendSteps: A,
                analyticsLocation: M,
                isEligibleForTrial: L,
                allowDesktopRedirectPurchase: w,
                onPaymentRequestSourceFailed: ti,
                paymentModalArgs: l,
                handleStepChange: eb,
                setPaymentMethodSteps: em,
                setPaymentRequestPaymentMethod: eD,
                currentStep: ei,
                setInfoNotice: ec,
                completeSteps: tl,
                paymentSourceTypeRestrictions: tn,
                CREDIT_CARD_STEPS: q,
                PAYPAL_STEPS: z,
                VENMO_STEPS: J,
                PAYMENT_REQUEST_STEPS: $,
                PRZELEWY24_STEPS: ee,
                EPS_STEPS: et,
                IDEAL_STEPS: Q,
                CASH_APP_STEPS: en,
                ...tv,
            })),
                (n = (0, r.jsx)(tx, {
                    shouldUseManaModal: G,
                    onReturn: S,
                    handleStepChange: eb,
                    currentStep: ei,
                    ...tv,
                }));
            break;
        case eg.pn.PAYMENT_ELEMENT:
            if (!B) throw (0, E.ne)("Payment Elements not enabled, invalid step", !0);
            (t = null),
                (n = (0, r.jsx)(tG, {
                    handleStepChange: eb,
                    shouldUseManaModal: G,
                    setPaymentMethodSteps: em,
                    primarySubmitting: eB,
                    primaryDisabled: !to,
                    onBack: () => {
                        tp(), S?.();
                    },
                    paymentModalArgs: l,
                    PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: el,
                    ...ta,
                }));
            break;
        case eg.pn.CREDIT_CARD_INFORMATION:
            let tN = async (e) => {
                eZ(!0);
                try {
                    let t = await (0, E.YJ)(F, e);
                    eH({ token: t }), eb(eg.pn.ADDRESS);
                } catch (e) {
                    tB.error(e.message ?? JSON.stringify(e));
                } finally {
                    eZ(!1);
                }
            };
            t = (0, r.jsx)(tV, {
                onCardInfoChange: (e, t) => {
                    eF({ info: e, isValid: t }), eW((t) => ({ ...t, info: { ...t.info, name: e.name } }));
                },
            });
            let tM = !eG.isValid,
                tR = () => {
                    eb(eg.pn.PAYMENT_TYPE);
                };
            n = (0, r.jsx)(s.ElementsConsumer, {
                children: (e) => {
                    let { elements: t } = e;
                    return (0, r.jsx)(t_, {
                        onBack: tR,
                        primaryCTA: eN.Ay.CTAType.CONTINUE,
                        primaryType: "submit",
                        primaryText: b.intl.string(b.t.PDTjLN),
                        primarySubmitting: eB,
                        primaryDisabled: tM,
                        onPrimary: () => tN(t),
                        shouldUseManaModal: G,
                    });
                },
            });
            break;
        case eg.pn.AWAITING_BROWSER_CHECKOUT:
        case eg.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
        case eg.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
            let tb = () => {
                em(q), eb(B ? eg.pn.PAYMENT_ELEMENT : eg.pn.CREDIT_CARD_INFORMATION);
            };
            (t = (0, r.jsx)(eV, { step: ei, onPurchaseComplete: () => y(ei), onHandoffFailure: tb })),
                (n = (0, r.jsx)(eK, {
                    onPrimaryClick: tb,
                    onBackClick: () => {
                        B ? (tp(), S?.()) : (em(X), eb(eg.pn.PAYMENT_TYPE));
                    },
                }));
            break;
        case eg.pn.EPS_INFORMATION:
            (t = (0, r.jsx)(ef, {
                type: eC.he.EPS,
                onAccountHolderNameChange: (e) => eW({ info: { ...eY.info, name: e }, isValid: eY.isValid }),
                onEPSBankChange: (e) => e3(e),
                epsBankValue: e4,
                billingAddressInfo: eY.info,
            })),
                (n = (0, r.jsx)(t_, {
                    onBack: () => tI(eC.he.EPS),
                    primaryCTA: eN.Ay.CTAType.CONTINUE,
                    primaryText: b.intl.string(b.t.PDTjLN),
                    primaryDisabled: void 0 === e4 || "" === e4 || "" === eY.info.name,
                    onPrimary: () => tA(),
                    shouldUseManaModal: G,
                }));
            break;
        case eg.pn.IDEAL_INFORMATION:
            (t = (0, r.jsx)(ed, {
                type: eC.he.IDEAL,
                onAccountHolderNameChange: (e) => eW({ info: { ...eY.info, name: e }, isValid: eY.isValid }),
                billingAddressInfo: eY.info,
            })),
                (n = (0, r.jsx)(t_, {
                    onBack: () => eb(eg.pn.PAYMENT_TYPE),
                    primaryCTA: eN.Ay.CTAType.CONTINUE,
                    primaryText: b.intl.string(b.t.PDTjLN),
                    primaryDisabled: "" === eY.info.name,
                    onPrimary: () => tA(),
                    shouldUseManaModal: G,
                }));
            break;
        case eg.pn.PRZELEWY24_INFORMATION:
            (t = (0, r.jsx)(ef, {
                type: eC.he.PRZELEWY24,
                onNameChange: (e) => eW({ info: { ...eY.info, name: e }, isValid: eY.isValid }),
                onEmailChange: (e) => eW({ info: { ...eY.info, email: e }, isValid: eY.isValid }),
                onP24BankChange: (e) => {
                    e5(e);
                },
                p24BankValue: e6,
                billingAddressInfo: eY.info,
            })),
                (n = (0, r.jsx)(t_, {
                    onBack: () => tI(eC.he.PRZELEWY24),
                    primaryCTA: eN.Ay.CTAType.CONTINUE,
                    primaryText: b.intl.string(b.t.PDTjLN),
                    primaryDisabled:
                        void 0 === eY.info.name ||
                        "" === eY.info.name ||
                        void 0 === eY.info.email ||
                        "" === eY.info.email ||
                        void 0 === e6 ||
                        "" === e6,
                    onPrimary: () => tA(),
                    shouldUseManaModal: G,
                }));
            break;
        case eg.pn.PAYPAL_INFORMATION:
            let tj = 0 !== eq.length && null != eQ;
            (t = (0, r.jsx)(tK, {})),
                (n = (0, r.jsx)(t_, {
                    onBack: () => tI(eC.he.PAYPAL),
                    primaryCTA: eN.Ay.CTAType.CONTINUE,
                    primaryText: tj ? b.intl.string(b.t.PDTjLN) : b.intl.string(b.t.Djzd7L),
                    onPrimary: () => {
                        let e;
                        return tj
                            ? tA()
                            : void (null == (e = f.A.getLastURL())
                                  ? T()
                                  : (h.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_START" }), window.open(e)));
                    },
                    shouldUseManaModal: G,
                }));
            break;
        case eg.pn.VENMO_INFORMATION:
            let tO = 0 !== e0.length && null != eQ;
            (t = (0, r.jsx)(tZ, {})),
                (n = (0, r.jsx)(t_, {
                    onBack: () => tI(eC.he.VENMO),
                    primaryCTA: eN.Ay.CTAType.CONTINUE,
                    primaryText: tO ? b.intl.string(b.t.PDTjLN) : b.intl.string(b.t["4KoTLM"]),
                    onPrimary: () => (tO ? tA() : void g()),
                    shouldUseManaModal: G,
                }));
            break;
        case eg.pn.PAYMENT_REQUEST_INFORMATION:
            (t = (0, r.jsx)(tz, {})),
                (n = (0, r.jsx)(t_, { onBack: () => eb(eg.pn.PAYMENT_TYPE), shouldUseManaModal: G }));
            break;
        case eg.pn.CASH_APP_INFORMATION:
            let tL = null != e2;
            (t = (0, r.jsx)(tq, {})),
                (n = (0, r.jsx)(t_, {
                    onBack: () => tI(eC.he.CASH_APP),
                    primaryCTA: eN.Ay.CTAType.CONTINUE,
                    primaryText: tL ? b.intl.string(b.t.PDTjLN) : b.intl.string(b.t["9ALP8w"]),
                    onPrimary: () => (tL ? tA() : tt()),
                    primaryDisabled: null == eE,
                    shouldUseManaModal: G,
                }));
            break;
        case eg.pn.ADDRESS:
            let tw = B && null != tc;
            (t = (0, r.jsx)(tk, {
                paymentModalArgs: l,
                paymentSourceType: ep.methodType ?? eC.he.CARD,
                shouldUsePaymentElement: tw,
            })),
                (n = (0, r.jsx)(tD, {
                    paymentModalArgs: l,
                    shouldUseManaModal: G,
                    analyticsLocation: M,
                    overwriteSubscriptionPaymentSource: U,
                    handleStepChange: eb,
                    onPaymentRequestSourceFailed: ti,
                    paymentRequestPaymentMethod: ek,
                    completeSteps: tl,
                    paymentMethodSteps: ep,
                    shouldUsePaymentElement: tw,
                    ...ta,
                }));
            break;
        case eg.pn.AWAITING_AUTHENTICATION:
            t = (0, r.jsx)(tQ, {});
            break;
        default:
            throw new eA.v({ message: `Unexpected step: ${ei}`, extraSentryInformation: { currentStep: ei } });
    }
    let tU = B && ts,
        tY = tU ? "combined_stripe_elements" : void 0,
        tW = (0, r.jsxs)(p.Y, {
            className: tH.C9,
            staticClassName: tH.a2,
            animatedNodeClassName: tH.L2,
            fillParent: !0,
            overrideKey: tY,
            step: ei,
            steps: ep.steps,
            sideMargin: 20,
            children: [
                null != eo &&
                    (0, r.jsx)("div", { className: tP.Ns, children: (0, r.jsx)(m.w, { type: "info", children: eo }) }),
                tU &&
                    (0, r.jsx)(tF._i, {
                        step: ei,
                        analyticsContext:
                            null != N ? { activitySessionId: H, contextMetadata: Y, analyticsData: N } : void 0,
                        paymentElementSelectedType: tc,
                        stripeElementsRef: tm,
                        stripePaymentElementProps: th,
                        stripeAddressElementProps: tC,
                        addressElementKey: tf,
                        billingAddressInfo: eY.info,
                        onSetupError: () => {
                            tp(), eb(eg.pn.PAYMENT_TYPE);
                        },
                        paymentElementFooter: tu
                            ? (0, r.jsx)(eP.Z4, {
                                  className: tP.SO,
                                  stackingBehavior: "stack",
                                  onComplete: () => {
                                      setTimeout(() => V(eg.pn.REVIEW), 0);
                                  },
                              })
                            : null,
                    }),
                t,
            ],
        }),
        t$ = ei === eg.pn.PAYMENT_TYPE && 0 === C.length ? null : n;
    return O
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  L && (0, r.jsx)(ex.A, { className: tP.At, isEligibleForTrial: L }),
                  (0, r.jsxs)(eM.dZ, { children: [tT, tW] }),
                  (0, r.jsx)(eM.UX, { children: t$ }),
              ],
          })
        : (0, r.jsx)(e1.A, {
              shouldUseManaModal: G,
              steps: _ ?? ep.steps,
              currentStep: x ?? ei,
              overrideKey: tY,
              paymentError: l.paymentError,
              header: v,
              hideBreadcrumbs: j,
              body: tW,
              footer: t$,
          });
}
function tJ(e) {
    let {
            defaultPaymentSourceId: t,
            paymentSources: n,
            hasFetchedPaymentSources: l,
        } = (0, o.cf)([ez.A], () => ({
            defaultPaymentSourceId: void 0 !== e ? e : ez.A.defaultPaymentSourceId,
            paymentSources: ez.A.paymentSources,
            hasFetchedPaymentSources: ez.A.hasFetchedPaymentSources,
        })),
        i = (0, o.bG)([e7], () => e7.cashAppPayComponent),
        r = (0, o.bG)([eo.A], () => eo.A.data?.allowed_payment_source_types ?? null);
    (0, er.Ay)(() => {
        (0, S.j)().then((e) => {
            e.client
                .create({ authorization: P.Gg3.BRAINTREE.KEY })
                .then((e) => {
                    new Promise((e, t) => {
                        let n = Date.now();
                        function l() {
                            Date.now() - n >= 5e3
                                ? t(Error("Timeout waiting for Braintree client to be initialized in store"))
                                : null != f.A.getClient()
                                  ? e()
                                  : setTimeout(l, 1e3);
                        }
                        h.h.subscribe("BRAINTREE_CREATE_CLIENT_SUCCESS", function e() {
                            h.h.unsubscribe("BRAINTREE_CREATE_CLIENT_SUCCESS", e), setTimeout(l, 0);
                        });
                    })
                        .then(() => {
                            _(), I();
                        })
                        .catch((e) => {
                            A.pM(e);
                        }),
                        h.h.dispatch({ type: "BRAINTREE_CREATE_CLIENT_SUCCESS", client: e });
                })
                .catch(() => h.h.dispatch({ type: "BRAINTREE_CREATE_CLIENT_FAIL" }));
        }),
            l || (0, E.$o)();
    }),
        a.useEffect(() => {
            null == i && null != r && r.includes(eC.he.CASH_APP) && e8();
        }, [r, i]);
    let [s, u] = a.useState(t),
        c = (0, ea.A)(t);
    t !== c && null != t && null == s && u(t);
    let [d, p] = a.useState(() => ({ info: tY, isValid: !1 })),
        [m, C] = a.useState(() => ({ info: tW, isValid: !1 })),
        [y, T] = a.useState(""),
        [g, x] = a.useState(""),
        [N, M] = a.useState(() => ({ token: null })),
        [b, j, O, L, w] = (0, o.yK)([R.A], () => [
            R.A.braintreeEmail,
            R.A.braintreeNonce,
            R.A.error,
            R.A.venmoUsername,
            R.A.adyenPaymentData,
        ]),
        [k, D] = (0, o.yK)([eq.A], () => [eq.A.error, eq.A.isAwaitingAuthentication]);
    a.useEffect(() => {
        function e(e) {
            let { billingAddress: t } = e;
            C({ info: t, isValid: t.country.length > 0 });
        }
        return (
            h.h.subscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e),
            () => {
                h.h.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e), (0, v.ET)();
            }
        );
    }, []);
    let [U, G] = a.useState(!1),
        [F, H] = a.useState(!1),
        [B, Y] = a.useState(null),
        W = a.useRef(null),
        V = (0, o.bG)([eq.A], () => eq.A.isAwaitingAuthentication),
        [K, Z] = (0, o.yK)([eQ.A], () => [eQ.A.purchaseTokenAuthState, eQ.A.purchaseTokenHash]);
    return (
        a.useEffect(() => {
            null != B && null != W.current && W.current.scrollIntoView({ behavior: "smooth" });
        }, [B]),
        {
            paymentSources: n,
            paymentSourceId: s,
            hasFetchedPaymentSources: l,
            setPaymentSourceId: u,
            creditCardState: d,
            setCreditCardState: p,
            tokenState: N,
            setTokenState: M,
            billingAddressState: m,
            setBillingAddressState: C,
            isSubmittingCurrentStep: U,
            setIsSubmittingCurrentStep: G,
            hasRedirectURL: F,
            setHasRedirectURL: H,
            braintreeEmail: b,
            braintreeNonce: j,
            venmoUsername: L,
            adyenPaymentData: w,
            paymentError: null != k ? k : O,
            paymentAuthenticationState: D ? e0.oc.PENDING : null != k ? e0.oc.ERROR : e0.oc.NONE,
            purchaseError: B,
            setPurchaseError: Y,
            purchaseErrorBlockRef: W,
            isAuthenticating: V,
            purchaseTokenAuthState: K,
            purchaseTokenHash: Z,
            epsBankState: g,
            setEpsBankState: x,
            p24BankState: y,
            setP24BankState: T,
        }
    );
}
