n.d(t, { Y: () => tQ, _V: () => t$ });
var l,
    i,
    r = n(477900),
    a = n(582128),
    s = n(643909);
n(284009);
var o = n(17928),
    u = n(691540),
    c = n(857250),
    d = n(97483),
    p = n(685094),
    m = n(683071),
    C = n(228366),
    h = n(562465),
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
                    C.h.dispatch({ type: "BRAINTREE_CREATE_VENMO_CLIENT_SUCCESS", venmoClient: e });
                })
                .catch(() => {
                    C.h.dispatch({ type: "BRAINTREE_CREATE_VENMO_CLIENT_FAIL" });
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
                        return h.Bo.post({
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
                        C.h.dispatch({ type: "BRAINTREE_CREATE_PAYPAL_CLIENT_SUCCESS", paypalClient: e });
                })
                .catch(() => C.h.dispatch({ type: "BRAINTREE_CREATE_PAYPAL_CLIENT_FAIL" }));
        });
}
function T() {
    let e = f.A.getPayPalClient();
    if (null == e) throw Error("braintree paypal client must be initialized before calling this");
    C.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_START" });
    let t = Promise.resolve("");
    (0, y.isDesktop)() && (t = (0, E.jf)(P.hes.PAYPAL)),
        t
            .then(() => e.tokenize({ flow: "vault" }))
            .then((e) => {
                let { email: t, firstName: n, lastName: l, billingAddress: i } = e.details;
                C.h.dispatch({
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
                    ? C.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED" })
                    : (C.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_FAIL", message: t, code: n }),
                      A.pM(Error(`Braintree Paypal Error: ${t} ${n} ${l}`)));
            });
}
function g() {
    let e = f.A.getVenmoClient();
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
                [P.Q7O.VENMO_APP_CANCELED, P.Q7O.VENMO_DESKTOP_CANCELED, P.Q7O.VENMO_CANCELED].includes(n)
                    ? C.h.dispatch({ type: "BRAINTREE_TOKENIZE_VENMO_FAIL_CANCELED" })
                    : (C.h.dispatch({ type: "BRAINTREE_TOKENIZE_VENMO_FAIL", message: t, code: n }),
                      A.pM(Error(`Braintree Venmo Error: ${t} ${n} ${l}`)));
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
var x = n(391048),
    N = n(292666),
    R = n(812745),
    b = n(825755),
    M = n(375708);
class j extends a.PureComponent {
    componentDidMount() {
        null != this.props.paypalClient && T();
    }
    componentDidUpdate(e) {
        null == e.paypalClient && null != this.props.paypalClient && T();
    }
    componentWillUnmount() {
        v(f.A.getPayPalClient(), { type: "BRAINTREE_TEARDOWN_PAYPAL_CLIENT" }).then(() => {
            null != f.A.getClient() && _();
        });
    }
    render() {
        let { braintreeEmail: e, paypalClient: t } = this.props;
        return (0, r.jsx)(N.k, {
            label: M.intl.string(M.t.QQBAos),
            leading: { type: "image", src: (0, R.Nj)(R.Ay.Types.PAYPAL) },
            value: e,
            readOnly: !0,
            placeholder: null == t ? M.intl.string(M.t.dte2M9) : M.intl.string(M.t.hopw7X),
        });
    }
}
let O = o.Ay.connectStores([f.A, b.A], () => ({
    braintreeEmail: b.A.braintreeEmail,
    paypalClient: f.A.getPayPalClient(),
}))(j);
var L = n(297264),
    w = n(834730),
    k = n(523022);
class U extends a.PureComponent {
    componentDidMount() {
        null != this.props.venmoClient && g();
    }
    componentDidUpdate(e) {
        null == e.venmoClient && null != this.props.venmoClient && g();
    }
    componentWillUnmount() {
        v(f.A.getVenmoClient(), { type: "BRAINTREE_TEARDOWN_VENMO_CLIENT" }).then(() => {
            null != f.A.getClient() && I();
        });
    }
    render() {
        let { venmoUsername: e, className: t, venmoClient: n } = this.props,
            l = null != e && "" !== e;
        return (0, r.jsxs)("div", {
            className: t,
            children: [
                (0, r.jsx)(R.Ay, { type: R.Ay.Types.VENMO, size: R.y3.MEDIUM, className: k.Z }),
                l
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(L.D, {
                                  variant: e.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
                                  className: k.y,
                                  children: M.intl.format(M.t.DowIre, { venmoUsername: e }),
                              }),
                              (0, r.jsx)(w.E, {
                                  variant: "text-md/medium",
                                  className: k.y,
                                  children: M.intl.string(M.t.kmEvnR),
                              }),
                          ],
                      })
                    : (0, r.jsx)(w.E, {
                          variant: "text-md/medium",
                          className: k.y,
                          children: null == n ? M.intl.string(M.t["2ouZDU"]) : M.intl.string(M.t.mIL6Jb),
                      }),
            ],
        });
    }
}
let D = o.Ay.connectStores([f.A, b.A], () => ({ venmoUsername: b.A.venmoUsername, venmoClient: f.A.getVenmoClient() }))(
    U,
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
    q = n(996971),
    z = n(498740);
let Q = function (e) {
    let t = a.useRef(null),
        { stripeType: n, flipped: l, updateCompleted: i, onFocus: o, onBlur: u } = e,
        [c, d] = a.useState(R.Be.UNKNOWN),
        [p, m] = a.useState(!1),
        [C, h] = a.useState(!1),
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
                C || e.empty || h(!0), null != i && i(e.complete), null != e.error && m(!1);
            },
            [C, i],
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
                                e.empty && C
                                    ? f(M.intl.string(M.t.eOIfuy))
                                    : null != e.error
                                      ? f(M.intl.string(M.t.x4pWtJ))
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
                            null != e.error || (e.empty && C) ? f(M.intl.string(M.t["9/zZdl"])) : f(null), I(e);
                        }),
                            e.on("focus", _),
                            e.on("blur", T);
                        break;
                    }
                    case "cardCvc": {
                        let e = y.getElement(s.CardCvcElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            null != e.error || (e.empty && C) ? f(M.intl.string(M.t.ro4isZ)) : f(null), I(e);
                        }),
                            e.on("focus", _),
                            e.on("blur", T);
                    }
                }
        }, [T, I, _, c, y, C, n]);
    a.useEffect(
        () => (
            g(),
            () => {
                P();
            }
        ),
        [g, P],
    );
    let v = (0, K.r)(V.A.colors.TEXT_SUBTLE).hex(),
        x = (0, K.r)(V.A.colors.TEXT_STRONG).hex();
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
                    color: x,
                    fontSize: n.getPropertyValue("font-size"),
                    "::placeholder": { color: v },
                },
            });
        }, [t, v, x]),
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
                                    (0, r.jsx)(R.Ay, { className: q.Ie, type: c, flipped: l }),
                                    (0, r.jsx)(s.CardNumberElement, {
                                        options: { style: A, placeholder: M.intl.string(M.t.gPRHfw), disableLink: !1 },
                                        className: N(),
                                    }),
                                ],
                            });
                        case "cardExpiry":
                            return (0, r.jsx)(s.CardExpiryElement, {
                                options: { style: A, placeholder: M.intl.string(M.t.xeEWQ6) },
                                className: N(),
                            });
                        case "cardCvc":
                            return (0, r.jsx)(s.CardCvcElement, {
                                options: { style: A, placeholder: M.intl.string(M.t.wZz04F) },
                                className: N(),
                            });
                    }
                })(),
                (0, r.jsx)(Z.U, { error: E }),
            ],
        })
    );
};
var $ = n(249746),
    J = n(729919);
let X = function (e) {
    let { onCardInfoChange: t, error: n } = e,
        l = a.useRef(t),
        [i, s] = a.useState(!1),
        [o, u] = a.useState({}),
        [c, d] = a.useState({ name: "", country: "", postalCode: "" }),
        [p, m] = a.useState({}),
        [C, h] = a.useState({}),
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
            return (e || p.name) && "" === c.name && (t.name = M.intl.string(M.t.lIkVsi)), t;
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
                              (0, r.jsx)("div", { className: H()(R.y3.SMALL, $.eo, $.Ud) }),
                              (0, r.jsx)("div", { className: H()(R.y3.SMALL, $.DR, $.Ud) }),
                              (0, r.jsx)("div", { className: H()(R.y3.SMALL, $.k4, $.Ud) }),
                              (0, r.jsx)("div", { className: H()(R.y3.SMALL, $.a3, $.Ud) }),
                              (0, r.jsx)("div", { className: H()(R.y3.SMALL, $.CY, $.Ud) }),
                              (0, r.jsx)("div", { className: H()(R.y3.SMALL, $.Q5, $.Ud) }),
                              (0, r.jsx)("div", { className: H()(R.y3.SMALL, $.YA, $.Ud) }),
                          ],
                      })
                    : (0, r.jsxs)("div", {
                          className: $.Rm,
                          children: [
                              (0, r.jsx)("div", { className: H()(R.y3.SMALL, $.aq, $.Ud) }),
                              (0, r.jsx)("div", { className: H()(R.y3.SMALL, $.VX, $.Ud) }),
                              (0, r.jsx)("div", { className: H()(R.y3.SMALL, $.Yi, $.Ud) }),
                              (0, r.jsx)("div", { className: H()(R.y3.SMALL, $.qR, $.Ud) }),
                              (0, r.jsx)("div", { className: H()(R.y3.SMALL, $.m2, $.Ud) }),
                              (0, r.jsx)("div", { className: H()(R.y3.SMALL, $.Ij, $.Ud) }),
                              (0, r.jsx)("div", { className: H()(R.y3.SMALL, $._V, $.Ud) }),
                          ],
                      }),
                (0, r.jsx)(W.A, {
                    form: [
                        {
                            fields: [
                                {
                                    id: "card-number",
                                    name: "cardNumber",
                                    title: () => M.intl.string(M.t.cVyJ3o),
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
                                    title: () => M.intl.string(M.t["CeBa/4"]),
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
                                    title: () => M.intl.string(M.t.Fd3rOz),
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
                                    title: () => M.intl.string(M.t.VUlFdU),
                                    autoComplete: "cc-name",
                                    placeholder: () => M.intl.string(M.t["yf7ms+"]),
                                    getClassNameForLayout: () => J.c6,
                                    renderInput: (e) => (0, r.jsx)(N.k, { ...e }),
                                },
                            ],
                        },
                    ],
                    errors: C,
                    formError: n,
                    values: c,
                    onFieldChange: function (e, t) {
                        if ("name" !== t && "country" !== t && "postalCode" !== t) return;
                        let n = { ...c },
                            l = { ...p },
                            i = { name: C.name };
                        p[t] || "" === e || (l[t] = !0),
                            (n[t] = e),
                            l[t] && "" === e ? "name" === t && (i.name = M.intl.string(M.t.lIkVsi)) : delete i[t],
                            d(n),
                            m(l),
                            h(i);
                    },
                    onFieldBlur: function () {
                        h(S());
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
var en = n(57213);
function el(e) {
    let { billingError: t, onCardInfoChange: n } = e,
        l = null != t && (null == t.code || et(t) === ee.CREDIT_CARD_INFORMATION);
    return (0, r.jsxs)(a.Fragment, {
        children: [
            l
                ? (0, r.jsx)("div", {
                      className: en.QK,
                      children: (0, r.jsx)(m.w, { type: "critical", children: M.intl.string(M.t["4vnhKV"]) }),
                  })
                : null,
            (0, r.jsx)(X, { onCardInfoChange: n, error: t }),
        ],
    });
}
function ei(e) {
    let { className: t, submitting: n, stripePaymentMethod: l } = e,
        { card: i } = l ?? {},
        a = null != i ? R.Ay.getType(i.brand) : R.Ay.Types.UNKNOWN;
    return (0, r.jsx)("div", {
        className: t,
        children: (0, r.jsx)(N.k, {
            label: M.intl.string(M.t["mmDvV+"]),
            leading: { type: "image", src: (0, R.Nj)(a) },
            value: n && null != i ? M.intl.formatToPlainString(M.t.bCynoK, i) : void 0,
            readOnly: !0,
            placeholder: M.intl.string(M.t.bWMH78),
        }),
    });
}
var er = n(964486),
    ea = n(475743),
    es = n(721101),
    eo = n(648335),
    eu = n(272069);
let ec = function (e) {
    let { onAccountHolderNameChange: t, billingAddressInfo: n } = e,
        l = a.useRef(null);
    return (0, r.jsx)("div", {
        className: eu.r,
        children: (0, r.jsx)(N.k, {
            label: M.intl.string(M.t.sN3wrd),
            inputRef: l,
            name: M.intl.string(M.t.sN3wrd),
            placeholder: M.intl.string(M.t.sN3wrd),
            onChange: (e) => t(e),
            value: n.name,
        }),
    });
};
var ed = n(462887),
    ep = n(331322),
    em = n(736653),
    eC = n(818348),
    eh = n(147202);
let eE = function (e) {
    let t = (0, em.Ay)(),
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
            let i = (0, ed.M)(t) ? "/assets/f4150b3aed6c4679.svg" : "/assets/8b825aafb2e4dbed.svg",
                { onNameChange: a, onEmailChange: o, onP24BankChange: u, p24BankValue: c, billingAddressInfo: d } = e;
            return (0, r.jsx)("div", {
                className: eh.rf,
                children: (0, r.jsxs)(ep.B, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(N.k, {
                            label: M.intl.string(M.t["w/qqKK"]),
                            inputRef: n,
                            name: M.intl.string(M.t["w/qqKK"]),
                            placeholder: M.intl.string(M.t["w/qqKK"]),
                            onChange: (e) => o(e),
                            value: d.email,
                        }),
                        (0, r.jsx)(N.k, {
                            label: M.intl.string(M.t["yf7ms+"]),
                            name: M.intl.string(M.t["yf7ms+"]),
                            placeholder: M.intl.string(M.t["yf7ms+"]),
                            onChange: (e) => a(e),
                            value: d.name,
                        }),
                        (0, r.jsxs)(ep.B, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(w.E, { variant: "text-sm/semibold", children: M.intl.string(M.t.De3b8t) }),
                                (0, r.jsx)(s.P24BankElement, {
                                    options: { value: c, style: l },
                                    onChange: (e) => u(e.value),
                                }),
                                (0, r.jsx)("div", {
                                    className: eh.je,
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
                c = (0, ed.M)(t) ? "/assets/025b24b0055c8d81.svg" : "/assets/1dae7d71a65fd90f.svg";
            return (0, r.jsx)("div", {
                className: eh.rf,
                children: (0, r.jsxs)(ep.B, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(N.k, {
                            label: M.intl.string(M.t.sN3wrd),
                            inputRef: n,
                            name: M.intl.string(M.t.sN3wrd),
                            placeholder: M.intl.string(M.t.sN3wrd),
                            onChange: (e) => i(e),
                            value: u.name,
                        }),
                        (0, r.jsxs)(ep.B, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(w.E, { variant: "text-sm/semibold", children: M.intl.string(M.t.dFyV07) }),
                                (0, r.jsx)(s.EpsBankElement, {
                                    options: { value: o, style: l },
                                    onChange: (e) => a(e.value),
                                }),
                                (0, r.jsx)("div", {
                                    className: eh.je,
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
var ef = n(71804);
n(202475);
var eA = n(31823);
n(211083);
var eS = n(883645),
    ey = n(936477);
n(601194);
var eP = n(316915),
    eI = n(783327),
    e_ = n(626584),
    eT = n(166532),
    eg = n(69494),
    ev = n(901930),
    ex = n(19311),
    eN = n(482132),
    eR = n(364840),
    eb = n(73825),
    eM = n(558620),
    ej = n(683433),
    eO = n(36167),
    eL = n(951305),
    ew = (((i = {})[(i.UNKNOWN = 0)] = "UNKNOWN"), (i[(i.PENDING = 1)] = "PENDING"), (i[(i.DONE = 2)] = "DONE"), i);
let ek = 0,
    eU = null,
    eD = null,
    eG = null;
class eF extends o.Ay.Store {
    static displayName = "BrowserCheckoutStateStore";
    get browserCheckoutState() {
        return ek;
    }
    get loadId() {
        return eU;
    }
    get skuId() {
        return eD;
    }
    get planId() {
        return eG;
    }
}
let eH = new eF(C.h, {
    USER_PAYMENT_BROWSER_CHECKOUT_STARTED: function (e) {
        (ek = 1), (eU = e.loadId);
    },
    USER_PAYMENT_BROWSER_CHECKOUT_DONE: function (e) {
        eU === e.loadId && ((eD = e.skuId ?? null), (eG = e.skuSubscriptionPlanId ?? null), (ek = 2));
    },
});
var eB = n(202541),
    eY = n(206670);
function eW(e) {
    let t,
        { step: n, onPurchaseComplete: l, onHandoffFailure: i } = e,
        {
            setSelectedSkuId: s,
            setSelectedPlanId: u,
            contextMetadata: c,
        } = (0, eP.t4)((e) => ({
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            contextMetadata: e.contextMetadata,
        })),
        {
            browserCheckoutState: d,
            browserCheckoutStateLoadId: p,
            browserCheckoutStateSkuId: m,
            browserCheckoutStatePlanId: C,
        } = (0, o.cf)([eH], () => ({
            browserCheckoutState: eH.browserCheckoutState,
            browserCheckoutStateLoadId: eH.loadId,
            browserCheckoutStateSkuId: eH.skuId,
            browserCheckoutStatePlanId: eH.planId,
        })),
        h = (0, eM.A)(),
        { isGift: f } = (0, eL.Pv)(),
        [A, S] = a.useState(!1);
    switch (n) {
        case eT.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
            t = P.do8.GOOGLE_PAY;
            break;
        case eT.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
            t = P.do8.APPLE_PAY;
    }
    return (
        a.useEffect(() => {
            let e = setTimeout(() => {
                A ||
                    (S(!0),
                    (0, E.Ze)(c.loadId),
                    (0, eO.my)(
                        {
                            planId: h?.id ?? eB.gD.PREMIUM_MONTH_TIER_2,
                            isGift: f,
                            loadId: c.loadId,
                            paymentMethodType: t,
                        },
                        i,
                    ));
            }, 1e3);
            return () => clearTimeout(e);
        }, [h, f, c, i, S, A, t]),
        a.useEffect(() => {
            null !== m && (eB.oz.includes(m) && ((0, eb.ur)(m), (0, E.hP)()), s(m)),
                null !== C && u(C),
                p === c.loadId && d === ew.DONE && l();
        }, [s, u, d, p, m, C, c, l]),
        (0, r.jsxs)("div", {
            className: eY.rf,
            children: [
                (0, r.jsx)(L.D, { variant: "heading-xl/bold", children: M.intl.string(M.t.C4HYfy) }),
                (0, r.jsx)(w.E, { variant: "text-md/normal", className: eY.h_, children: M.intl.string(M.t.xfG7Jp) }),
            ],
        })
    );
}
function eV(e) {
    let { onPrimaryClick: t, onBackClick: n } = e;
    return (0, r.jsx)(eR.j, {
        children: (0, r.jsxs)("div", {
            className: eY.kL,
            children: [
                (0, r.jsx)(ej.A, { onClick: n }),
                (0, r.jsx)(ej.F, { onClick: t, children: M.intl.string(M.t["4Qvmmj"]) }),
            ],
        }),
    });
}
var eK = n(615405),
    eZ = n(153084),
    eq = n(295405),
    ez = n(71319),
    eQ = n(67480),
    e$ = n(174459),
    eJ = n(427262),
    eX = n(251913),
    e0 = n(632638),
    e1 = n(632088);
let e2 = null,
    e4 = null;
class e3 extends o.Ay.Store {
    static displayName = "AdyenStore";
    get client() {
        return e2;
    }
    get cashAppPayComponent() {
        return e4;
    }
}
let e7 = new e3(C.h, {
    ADYEN_CREATE_CLIENT_SUCCESS: function (e) {
        let { client: t } = e;
        e2 = t;
    },
    ADYEN_TEARDOWN_CLIENT: function () {
        e2 = null;
    },
    ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS: function (e) {
        let { component: t } = e;
        e4 = t;
    },
});
async function e6() {
    return await h.Bo.get({ url: P.Rsh.BILLING_ADYEN_PAYMENT_METHODS, oldFormErrors: !0, rejectWithError: !1 });
}
async function e5() {
    try {
        let e = await e6(),
            { default: t } = await Promise.all([n.e("94678"), n.e("40002")]).then(n.bind(n, 971193)),
            l = await t({
                environment: P.Gg3.ADYEN.KEY.startsWith("live_") ? "live" : "test",
                clientKey: P.Gg3.ADYEN.KEY,
                analytics: { enabled: !1 },
                paymentMethodsResponse: e.body,
            });
        C.h.dispatch({ type: "ADYEN_CREATE_CLIENT_SUCCESS", client: l }),
            (function (e) {
                if (null != e7.cashAppPayComponent) {
                    e9(), e8();
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
                                    case "Error during initialization":
                                    case "Error rendering CashAppPay button":
                                        (n = !1), (t = M.intl.string(M.t.TJ8dDB));
                                }
                                (0, E.i0)(e.message, n, t);
                            }
                        },
                    })
                    .mount(`#${e1.h}`);
                C.h.dispatch({ type: "ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS", component: t });
            })(l);
    } catch (e) {
        (0, A.pM)(e), C.h.dispatch({ type: "ADYEN_CREATE_CLIENT_FAIL" });
    }
}
function e8() {
    let e = e7.cashAppPayComponent;
    if (null == e) throw Error("Adyen CashAppPay component must be created before mounting.");
    try {
        e.mount(`#${e1.h}`);
    } catch (e) {}
}
function e9() {
    e7.cashAppPayComponent?.unmount();
}
function te() {
    let e = e7.cashAppPayComponent;
    if (null == e) throw Error("Adyen CashAppPay component must be created before submitting.");
    e.submit();
}
var tt = n(739641);
function tn(e) {
    let { className: t } = e,
        n = (0, o.bG)([e7], () => e7.cashAppPayComponent),
        l = (0, o.bG)([b.A], () => b.A.adyenPaymentData);
    a.useEffect(
        () => (
            null == l && null != n && (e8(), te()),
            () => {
                e9();
            }
        ),
        [l, n],
    );
    let i = l?.paymentMethod?.cashtag ?? "",
        s = null != l && "" !== i;
    return (0, r.jsxs)("div", {
        className: t,
        children: [
            (0, r.jsx)(R.Ay, { type: R.Ay.Types.CASH_APP, size: R.y3.MEDIUM, className: tt.K }),
            s
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(L.D, {
                              variant: i.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
                              className: tt.y,
                              children: M.intl.format(M.t["ze/1yE"], { cashtag: i }),
                          }),
                          (0, r.jsx)(w.E, {
                              variant: "text-md/medium",
                              className: tt.y,
                              children: M.intl.string(M.t.VPOx7N),
                          }),
                      ],
                  })
                : (0, r.jsx)(w.E, {
                      variant: "text-md/medium",
                      className: tt.y,
                      children: null == n ? M.intl.string(M.t["CgVe/w"]) : M.intl.string(M.t["1MqcjI"]),
                  }),
        ],
    });
}
var tl = n(73079),
    ti = n(459357),
    tr = n(550238),
    ta = n(869177),
    ts = n(71532),
    to = n(218075);
let tu = [eT.pn.PAYMENT_TYPE],
    tc = [eT.pn.PAYMENT_TYPE, eT.pn.CREDIT_CARD_INFORMATION, eT.pn.ADDRESS],
    td = [eT.pn.PAYMENT_TYPE, eT.pn.PAYPAL_INFORMATION, eT.pn.ADDRESS],
    tp = [eT.pn.PAYMENT_TYPE, eT.pn.VENMO_INFORMATION, eT.pn.ADDRESS],
    tm = [eT.pn.PAYMENT_TYPE, eT.pn.CASH_APP_INFORMATION, eT.pn.ADDRESS],
    tC = [eT.pn.PAYMENT_TYPE, eT.pn.PRZELEWY24_INFORMATION, eT.pn.ADDRESS],
    th = [eT.pn.PAYMENT_TYPE, eT.pn.EPS_INFORMATION, eT.pn.ADDRESS],
    tE = [eT.pn.PAYMENT_TYPE, eT.pn.IDEAL_INFORMATION, eT.pn.ADDRESS],
    tf = [eT.pn.PAYMENT_TYPE, eT.pn.ADDRESS],
    tA = {
        SHARED_ADD_PAYMENT_STEPS: tu,
        SHARED_CREDIT_CARD_STEPS: tc,
        SHARED_PAYPAL_STEPS: td,
        SHARED_VENMO_STEPS: tp,
        SHARED_PRZELEWY24_STEPS: tC,
        SHARED_EPS_STEPS: th,
        SHARED_IDEAL_STEPS: tE,
        SHARED_CASH_APP_STEPS: tm,
        SHARED_TYPE_AND_ADDRESS_STEPS: tf,
    },
    tS = {
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
var ty = n(376289);
function tP(e) {
    return () => (null != b.A.error && (0, x.ET)(), e());
}
function tI(e) {
    let { onPrimary: t, onBack: n, ...l } = e,
        i = t;
    null != t && (i = tP(t));
    let a = n;
    return null != n && (a = tP(n)), (0, r.jsx)(ex.Ay, { ...l, onPrimary: i, onBack: a });
}
function t_(e) {
    let { paymentSourceTypeRestrictions: t } = e,
        n = null != t && t.length > 0 ? to.fU.ADD_NEW_PAYMENT_METHOD : void 0,
        { enabled: l } = (0, ti.c)({ location: "AddPaymentStep" });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(to.je, { paymentRestrictionBannerType: n }),
            (0, r.jsx)(tl.A, { ...e }),
            l && (0, r.jsx)(ey.Z4, { className: ty.SO }),
        ],
    });
}
function tT(e) {
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
            completeSteps: C,
            paymentSourceTypeRestrictions: h,
            CREDIT_CARD_STEPS: f,
            PAYPAL_STEPS: A,
            VENMO_STEPS: S,
            PAYMENT_REQUEST_STEPS: P,
            PRZELEWY24_STEPS: I,
            EPS_STEPS: _,
            IDEAL_STEPS: T,
            CASH_APP_STEPS: g,
            setConnectorPaymentRequestReady: v,
            connectorPaymentRequestRef: N,
        } = e,
        { activitySessionId: R } = (0, eA.V)(),
        j = (0, eP.t4)((e) => e.contextMetadata),
        { setBillingAddressState: O } = o;
    function L(e, l) {
        switch (e) {
            case eC.he.CARD:
                a ? u(eT.pn.AWAITING_BROWSER_CHECKOUT) : (c(f), u(eT.pn.CREDIT_CARD_INFORMATION));
                break;
            case eC.he.PAYPAL:
                c(A), u(eT.pn.PAYPAL_INFORMATION);
                break;
            case eC.he.VENMO:
                c(S), u(eT.pn.VENMO_INFORMATION);
                break;
            case eC.he.PAYMENT_REQUEST:
                a && "googlePay" === l
                    ? u(eT.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY)
                    : a && "applePay" === l
                      ? u(eT.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY)
                      : (c(P), u(eT.pn.PAYMENT_REQUEST_INFORMATION));
                break;
            case eC.he.PRZELEWY24:
                c(I), u(eT.pn.PRZELEWY24_INFORMATION);
                break;
            case eC.he.EPS:
                c(_), u(eT.pn.EPS_INFORMATION);
                break;
            case eC.he.IDEAL:
                c(T), u(eT.pn.IDEAL_INFORMATION);
                break;
            case eC.he.CASH_APP:
                c(g), u(eT.pn.CASH_APP_INFORMATION);
                break;
            case eC.he.GIROPAY:
            case eC.he.PAYSAFE_CARD:
            case eC.he.GCASH:
            case eC.he.GRABPAY_MY:
            case eC.he.MOMO_WALLET:
            case eC.he.KAKAOPAY:
            case eC.he.GOPAY_WALLET:
            case eC.he.BANCONTACT:
                c({ steps: [...t, ...tf, ...n], methodType: e }), u(eT.pn.ADDRESS);
        }
        null != b.A.error && (0, x.ET)();
    }
    async function w(e, t) {
        if (((0, x.mf)(e), null == e)) return void s();
        d(e);
        let { billingAddressInfo: n } = (0, ts.uK)(e),
            i = (0, tr.Qd)(n);
        if (((null == n.name || "" === n.name) && null != t && (n.name = t), O({ isValid: i, info: n }), !i))
            return void u(eT.pn.ADDRESS);
        try {
            var r;
            (r = await (0, E.Tv)(e, n, l)), O((e) => ({ ...e, info: n })), c(P), C(r);
        } catch (e) {
            s();
        }
    }
    if (p === eT.pn.ATTEMPT_GOOGLE_PAY || p === eT.pn.ATTEMPT_APPLE_PAY) {
        let e = M.intl.string(p === eT.pn.ATTEMPT_APPLE_PAY ? M.t.czhXDv : M.t.Zj2xQ0);
        return (0, r.jsx)(ta.V, {
            onChooseType: L,
            paymentRequestWallet: p === eT.pn.ATTEMPT_APPLE_PAY ? "applePay" : "googlePay",
            onStripePaymentMethodReceived: w,
            onPaymentRequestFailure: () => {
                L(eC.he.CARD), m(e);
            },
            onValidPaymentRequest: () => v(!0),
            paymentRequestRef: N,
        });
    }
    let k = !(0, y.isDesktop)() || a;
    return (0, r.jsx)(t_, {
        onChooseType: L,
        onStripePaymentMethodReceived: w,
        paymentRequestWallets: k ? ["googlePay", "applePay"] : [],
        isEligibleForTrial: i,
        paymentRequestPaymentContext: { contextMetadata: j, activitySessionId: R },
        paymentSourceTypeRestrictions: h,
    });
}
function tg(e) {
    let {
        onReturn: t,
        shouldUseManaModal: n,
        handleStepChange: l,
        currentStep: i,
        connectorPaymentRequestReady: a,
        showConnectorPaymentRequest: s,
    } = e;
    if (i === eT.pn.ATTEMPT_GOOGLE_PAY || i === eT.pn.ATTEMPT_APPLE_PAY) {
        let e = M.intl.string(i === eT.pn.ATTEMPT_APPLE_PAY ? M.t.WoXvJL : M.t.wnVVr0);
        return (0, r.jsx)(tI, {
            onBack: () => l(eT.pn.PAYMENT_TYPE),
            primaryCTA: ex.Ay.CTAType.CONTINUE,
            primaryText: e,
            onPrimary: () => s(),
            primaryDisabled: !a,
            shouldUseManaModal: n,
        });
    }
    return (0, r.jsx)(tI, { onBack: t, shouldUseManaModal: n });
}
var tv = n(198970),
    tx = n(116673),
    tN = n(773669);
let tR = (e) => {
    let t,
        { billingAddressInfo: n, billingError: l, onBillingAddressChange: i, paymentSourceType: s } = e,
        u = null != l && (null == l.code || et(l) === ee.ADDRESS),
        c = (0, o.bG)([tN.default], () => tN.default.locale);
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
    let d = (0, tx.z)();
    0 === n.country.length && null != d && d.length > 0 && (n.country = d[0]);
    let p = (0, o.bG)([Y.default], () => Y.default.getCurrentUser()?.storeCountry?.isLocked === !0)
        ? M.intl.string(M.t.Pg2hU0)
        : null;
    return (0, r.jsxs)(a.Fragment, {
        children: [
            u
                ? (0, r.jsx)("div", {
                      className: en.QK,
                      children: (0, r.jsx)(m.w, { type: "critical", children: M.intl.string(M.t.vZ8y7l) }),
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
    tM = n(930767),
    tj = n(891640);
let tO = new e_.A("AddPaymentAddressStep.tsx");
function tL(e) {
    let { billingAddressInfo: t, onBillingAddressChange: n, paymentSourceType: l } = e,
        i = (0, o.bG)([b.A], () => b.A.error);
    return (0, r.jsx)(tR, { billingAddressInfo: t, billingError: i, onBillingAddressChange: n, paymentSourceType: l });
}
function tw(e) {
    let { paymentModalArgs: t, shouldUsePaymentElement: n, paymentSourceType: l } = e,
        { billingAddressState: i, setBillingAddressState: a } = t;
    return n
        ? null
        : (0, r.jsx)(tL, {
              billingAddressInfo: i.info,
              onBillingAddressChange: (e, t) => {
                  a({ info: { ...i.info, ...e }, isValid: t });
              },
              paymentSourceType: l,
          });
}
function tk(e) {
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
            lastConfirmedSetupIntentRef: C,
            shouldUsePaymentElement: h,
        } = e,
        E = (0, eI.S)(),
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
        let e = h ? d : c.methodType,
            n = m.current,
            r = null != e && (0, tj.i)(e) ? tj.F[e] : null;
        if (null == r)
            throw new tM.v({
                message: "unknown Add Payment step not handled",
                extraSentryInformation: { paymentSourceType: e, analyticsLocation: l },
            });
        let a = r.submitAddressStep;
        try {
            let e = await a({
                ...t,
                analyticsLocation: l,
                stripe: E,
                shouldUsePaymentElement: h,
                stripeElements: n,
                lastConfirmedSetupIntentRef: C,
                createSetupIntent: f,
                onPaymentRequestSourceFailed: s,
                paymentRequestPaymentMethod: o,
                overwriteSubscriptionPaymentSource: i,
            });
            "redirect-url" === e.responseType ? I(e.hasRedirectURL) : u(e.paymentSource), P || y(!1);
        } catch (e) {
            y(!1), tO.warn(`Error confirming submitting Address Step for Payment Source Type: ${g}`, e);
        }
    }
    let g = c.methodType,
        { backStep: v } = h
            ? { backStep: eT.pn.PAYMENT_ELEMENT }
            : (function (e) {
                  switch (e) {
                      case eC.he.CARD:
                          return { backStep: eT.pn.CREDIT_CARD_INFORMATION };
                      case eC.he.PAYPAL:
                          return { backStep: eT.pn.PAYPAL_INFORMATION };
                      case eC.he.VENMO:
                          return { backStep: eT.pn.VENMO_INFORMATION };
                      case eC.he.GIROPAY:
                      case eC.he.PAYSAFE_CARD:
                      case eC.he.GCASH:
                      case eC.he.GRABPAY_MY:
                      case eC.he.MOMO_WALLET:
                      case eC.he.KAKAOPAY:
                      case eC.he.GOPAY_WALLET:
                      case eC.he.BANCONTACT:
                          return { backStep: eT.pn.PAYMENT_TYPE };
                      case eC.he.EPS:
                          return { backStep: eT.pn.EPS_INFORMATION };
                      case eC.he.IDEAL:
                          return { backStep: eT.pn.IDEAL_INFORMATION };
                      case eC.he.PRZELEWY24:
                          return { backStep: eT.pn.PRZELEWY24_INFORMATION };
                      case eC.he.CASH_APP:
                          return { backStep: eT.pn.CASH_APP_INFORMATION };
                      default:
                          return { backStep: eT.pn.PAYMENT_TYPE };
                  }
              })(g),
        x = h ? () => p(void 0) : () => a(v);
    return (0, r.jsx)(tI, {
        onBack: x,
        primaryCTA: ex.Ay.CTAType.CONTINUE,
        primaryText: M.intl.string(M.t.PDTjLN),
        primarySubmitting: A,
        primaryDisabled: !S.isValid || _,
        onPrimary: T,
        shouldUseManaModal: n,
    });
}
let tU = new e_.A("PaymentElementStepFooter.tsx");
function tD(e) {
    let t = (0, eI.S)(),
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
        { paymentElementSelectedType: C, stripeElementsRef: h, remountAddressElement: f } = e,
        A = a.useCallback(async () => {
            p(!0);
            try {
                if (null == C || !(0, eo.PE)(C)) throw (0, E.ne)("Valid Payment Element source type not found", !0);
                let { steps: e, methodType: n } = d[C];
                s({ steps: e, methodType: n === eC.he.UNKNOWN ? C : n });
                let l = tj.F[C];
                if (null != l && null != l.submitPaymentElementStepHandler) {
                    await l.submitPaymentElementStepHandler({
                        stripe: t,
                        stripeElements: h.current,
                        remountAddressElement: f,
                        setBillingAddressState: m,
                    }),
                        i(l.stepAfterPaymentElement ?? eT.pn.ADDRESS);
                    return;
                }
                let r = (0, eo.eI)(C);
                if (null != r) return void i(r);
                i(eT.pn.ADDRESS);
            } catch (e) {
                tU.error("Error on submitting Payment Element step: ", e.message ?? JSON.stringify(e));
            } finally {
                p(!1);
            }
        }, [C, d, h, f, i, t, s, p, m]);
    return (0, r.jsx)(tI, {
        onBack: o,
        primaryCTA: ex.Ay.CTAType.CONTINUE,
        primaryType: "submit",
        primaryText: M.intl.string(M.t.PDTjLN),
        primarySubmitting: u,
        primaryDisabled: c,
        onPrimary: A,
        shouldUseManaModal: n,
    });
}
var tG = n(447952),
    tF = n(581037);
let tH = new e_.A("AddPaymentStep.tsx"),
    tB = { name: "", cardNumber: "", expirationDate: "", cvc: "" },
    tY = { email: "", name: "", country: "", line1: "", line2: "", city: "", postalCode: "", state: "" };
function tW(e) {
    let { onCardInfoChange: t } = e,
        n = (0, o.bG)([b.A], () => b.A.error);
    return (0, r.jsx)(el, { billingError: n, onCardInfoChange: t });
}
function tV() {
    return (0, r.jsx)(O, {});
}
function tK() {
    return (0, r.jsx)(D, {});
}
function tZ() {
    return (0, r.jsx)(tn, {});
}
function tq() {
    let e = (0, o.bG)([eK.A], () => eK.A.isBusy),
        t = (0, o.bG)([b.A], () => b.A.stripePaymentMethod);
    return (0, r.jsx)(ei, { stripePaymentMethod: t, submitting: e });
}
function tz() {
    return (0, r.jsx)(G.N, {});
}
function tQ(e) {
    let t,
        n,
        {
            paymentModalArgs: l,
            initialStep: i,
            prependSteps: h,
            appendSteps: A,
            onReturn: S,
            onComplete: y,
            onStepChange: I,
            breadcrumpSteps: _,
            currentBreadcrumpStep: v,
            header: x,
            analyticsData: N,
            analyticsLocation: R,
            hideBreadcrumbs: j = !1,
            useCheckoutStep: O = !1,
            isEligibleForTrial: L = !1,
            allowDesktopRedirectPurchase: w = !1,
            toastContent: k,
            continueSessionToInitialStep: U,
            overwriteSubscriptionPaymentSource: D = !1,
            shouldUseManaModal: G = !0,
        } = e,
        F = (0, eI.S)(),
        { activitySessionId: H } = (0, eA.V)(),
        { contextMetadata: B, clearFetchSetupIntent: Y } = (0, eP.t4)((e) => ({
            contextMetadata: e.contextMetadata,
            clearFetchSetupIntent: e.clearFetchSetupIntent,
        })),
        W = (0, eS.qv)();
    (0, er.l0)(Y);
    let V = a.useMemo(
            () =>
                i === eT.pn.PAYMENT_TYPE || i === eT.pn.PAYMENT_ELEMENT
                    ? w
                        ? eT.pn.AWAITING_BROWSER_CHECKOUT
                        : eT.pn.PAYMENT_ELEMENT
                    : i,
            [i, w],
        ),
        K = a.useMemo(() => (0, eJ.Gn)(), []),
        {
            CREDIT_CARD_STEPS: Z,
            PAYPAL_STEPS: q,
            IDEAL_STEPS: z,
            PAYMENT_REQUEST_STEPS: Q,
            VENMO_STEPS: $,
            ADD_PAYMENT_STEPS: J,
            PRZELEWY24_STEPS: X,
            EPS_STEPS: ee,
            CASH_APP_STEPS: et,
            PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: en,
        } = (function (e) {
            let { prependSteps: t, appendSteps: n } = e,
                [l, i, r, s, o, u, c, d, p, m] = (0, a.useMemo)(
                    () =>
                        (function (e, t) {
                            let { prependSteps: n, appendSteps: l } = t;
                            return e.map((e) => {
                                let { sharedStepsKey: t, methodType: i } = e;
                                return {
                                    steps: [
                                        ...n,
                                        ...(null == i || i === eC.he.UNKNOWN || (0, eo.PE)(i) ? tS[t] : tA[t]),
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
                            { prependSteps: t, appendSteps: n },
                        ),
                    [t, n],
                ),
                C = (0, a.useMemo)(
                    () => ({
                        [eC.he.CARD]: s,
                        [eC.he.PAYPAL]: o,
                        [eC.he.PAYMENT_REQUEST]: i,
                        [eC.he.VENMO]: c,
                        [eC.he.CASH_APP]: m,
                        [eC.he.IDEAL]: u,
                        [eC.he.PRZELEWY24]: d,
                        [eC.he.EPS]: p,
                        [eC.he.BANCONTACT]: l,
                        [eC.he.GOPAY_WALLET]: l,
                        [eC.he.KAKAOPAY]: l,
                        [eC.he.GCASH]: l,
                        [eC.he.PAYSAFE_CARD]: l,
                        [eC.he.GRABPAY_MY]: l,
                        [eC.he.MOMO_WALLET]: l,
                        [eC.he.PIX]: l,
                    }),
                    [l, s, o, c, i, u, m, d, p],
                );
            return {
                DEFAULT_PAYMENT_ELEMENT_STEPS: l,
                CREDIT_CARD_STEPS: s,
                PAYPAL_STEPS: o,
                IDEAL_STEPS: u,
                PAYMENT_REQUEST_STEPS: i,
                VENMO_STEPS: c,
                ADD_PAYMENT_STEPS: r,
                PRZELEWY24_STEPS: d,
                EPS_STEPS: p,
                CASH_APP_STEPS: m,
                PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: C,
            };
        })({ prependSteps: h, appendSteps: A }),
        [el, ei] = a.useState(V),
        [ea, es] = a.useState(null),
        [eu, ed] = a.useState(
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
    a.useEffect(() => {
        (0, E.IV)();
    }, []);
    let ep = (0, o.bG)([b.A], () => b.A.redirectedPaymentSourceId),
        em = (0, o.bG)([e7], () => e7.cashAppPayComponent),
        eh = { completeSteps: tt, setIsSubmittingCurrentStep: l.setIsSubmittingCurrentStep },
        e_ = a.useRef(eh);
    a.useEffect(() => {
        e_.current = eh;
    }),
        a.useEffect(() => {
            let { completeSteps: e, setIsSubmittingCurrentStep: t } = e_.current;
            !(async function () {
                if (null == ep) return;
                await (0, E.$o)();
                let n = eq.A.getPaymentSource(ep);
                null != n && (e(n), t(!1), b.A.clearRedirectedPaymentSourceId());
            })();
        }, [ep]);
    let eR = a.useCallback(
            function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                es(null), ei(e), t && I({ currentStep: el, toStep: e });
            },
            [el, I],
        ),
        eb = a.useCallback(
            (e) => {
                e$.default.track(P.HAw.PAYMENT_FLOW_ADD_SOURCE_COMPLETED, {
                    load_id: B.loadId,
                    analytics_location: R,
                    payment_source_id: e.id,
                    payment_source_type: e.type,
                    payment_source_country: e.paymentMethodCountry,
                });
            },
            [B.loadId, R],
        ),
        eM = (0, o.bG)([b.A], () => b.A.error),
        ej = a.useRef(eM);
    a.useEffect(() => {
        let e = ej.current;
        (ej.current = eM),
            null != eM &&
                eM !== e &&
                e$.default.track(P.HAw.PAYMENT_FLOW_ADD_SOURCE_ERROR, {
                    load_id: B.loadId,
                    analytics_location: R,
                    payment_source_type: eu.methodType,
                    error_code: eM.code,
                    error_message: eM.message,
                });
    }, [eM, B.loadId, R, eu.methodType]);
    let eO = a.useCallback(
            (e) => {
                eb(e),
                    (0, u.P0)(
                        (0, c.o)(void 0 !== k ? k : M.intl.string(M.t["VJPg+l"]), d.Ck.SUCCESS, {
                            position: d.xJ.BOTTOM,
                        }),
                    ),
                    y(el, e),
                    eR(V, !1);
            },
            [eR, V, el, y, k, eb],
        ),
        [eL, ew] = a.useState(null),
        {
            setPaymentSourceId: ek,
            creditCardState: eU,
            setCreditCardState: eD,
            setTokenState: eG,
            isSubmittingCurrentStep: eF,
            billingAddressState: eH,
            setBillingAddressState: eB,
            setIsSubmittingCurrentStep: eY,
            braintreeEmail: eK,
            braintreeNonce: eZ,
            venmoUsername: ez,
            adyenPaymentData: eX,
            epsBankState: e1,
            setEpsBankState: e2,
            p24BankState: e4,
            setP24BankState: e3,
            selectedSkuId: e6,
        } = l,
        e5 = e6 ?? "",
        e8 = (0, o.bG)([eQ.A], () => eQ.A.get(e5), [e5]),
        e9 = e8?.eligiblePaymentGateways?.map((e) => e.valueOf());
    function tt(e) {
        ek(e.id), eO(e);
    }
    function tn() {
        ed(J), eR(eT.pn.PAYMENT_TYPE);
    }
    let tl = a.useCallback(
            (e, t) => {
                eB((n) => ({ info: { ...n.info, ...e }, isValid: t }));
            },
            [eB],
        ),
        ti = (0, tG.wD)({
            step: el,
            continueSessionToInitialStep: U,
            handleStepChange: eR,
            logger: tH,
            shouldLogOnChangeEvents: K || !1,
            onBillingAddressChange: tl,
        }),
        {
            shouldRenderPaymentElement: tr,
            paymentElementReady: ta,
            paymentElementLoaded: ts,
            paymentElementSelectedType: to,
            returnToPaymentElementStep: tu,
            onBackFromPaymentElement: tc,
            stripeElementsRef: td,
            stripePaymentElementProps: tp,
            stripeAddressElementProps: tm,
            remountAddressElement: tC,
            addressElementKey: th,
        } = ti,
        tE = a.useCallback(() => {
            eR(eT.pn.ADDRESS), tG.Ky.includes(el) && tC();
        }, [eR, tC, el]),
        tf = a.useCallback(
            (e) => {
                null != to && (0, eo.PE)(e) ? tu(e) : eR(eT.pn.PAYMENT_TYPE);
            },
            [to, tu, eR],
        ),
        tP = O ? (0, r.jsx)(ev.A, { className: ty._8 }) : null,
        t_ = (function () {
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
    switch (el) {
        case eT.pn.ATTEMPT_GOOGLE_PAY:
        case eT.pn.ATTEMPT_APPLE_PAY:
        case eT.pn.PAYMENT_TYPE:
            (t = (0, r.jsx)(tT, {
                prependSteps: h,
                appendSteps: A,
                analyticsLocation: R,
                isEligibleForTrial: L,
                allowDesktopRedirectPurchase: w,
                onPaymentRequestSourceFailed: tn,
                paymentModalArgs: l,
                handleStepChange: eR,
                setPaymentMethodSteps: ed,
                setPaymentRequestPaymentMethod: ew,
                currentStep: el,
                setInfoNotice: es,
                completeSteps: tt,
                paymentSourceTypeRestrictions: e9,
                CREDIT_CARD_STEPS: Z,
                PAYPAL_STEPS: q,
                VENMO_STEPS: $,
                PAYMENT_REQUEST_STEPS: Q,
                PRZELEWY24_STEPS: X,
                EPS_STEPS: ee,
                IDEAL_STEPS: z,
                CASH_APP_STEPS: et,
                ...t_,
            })),
                (n = (0, r.jsx)(tg, {
                    shouldUseManaModal: G,
                    onReturn: S,
                    handleStepChange: eR,
                    currentStep: el,
                    ...t_,
                }));
            break;
        case eT.pn.PAYMENT_ELEMENT:
            (t = null),
                (n = (0, r.jsx)(tD, {
                    handleStepChange: eR,
                    shouldUseManaModal: G,
                    setPaymentMethodSteps: ed,
                    primarySubmitting: eF,
                    primaryDisabled: !ta,
                    onBack: () => {
                        tc(), S?.();
                    },
                    paymentModalArgs: l,
                    PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: en,
                    ...ti,
                }));
            break;
        case eT.pn.CREDIT_CARD_INFORMATION:
            let tv = async (e) => {
                eY(!0);
                try {
                    let t = await (0, E.YJ)(F, e);
                    eG({ token: t }), eR(eT.pn.ADDRESS);
                } catch (e) {
                    tH.error(e.message ?? JSON.stringify(e));
                } finally {
                    eY(!1);
                }
            };
            t = (0, r.jsx)(tW, {
                onCardInfoChange: (e, t) => {
                    eD({ info: e, isValid: t }), eB((t) => ({ ...t, info: { ...t.info, name: e.name } }));
                },
            });
            let tx = !eU.isValid,
                tN = () => {
                    eR(eT.pn.PAYMENT_TYPE);
                };
            n = (0, r.jsx)(s.ElementsConsumer, {
                children: (e) => {
                    let { elements: t } = e;
                    return (0, r.jsx)(tI, {
                        onBack: tN,
                        primaryCTA: ex.Ay.CTAType.CONTINUE,
                        primaryType: "submit",
                        primaryText: M.intl.string(M.t.PDTjLN),
                        primarySubmitting: eF,
                        primaryDisabled: tx,
                        onPrimary: () => tv(t),
                        shouldUseManaModal: G,
                    });
                },
            });
            break;
        case eT.pn.AWAITING_BROWSER_CHECKOUT:
        case eT.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
        case eT.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
            let tR = () => {
                ed(Z), eR(eT.pn.PAYMENT_ELEMENT);
            };
            (t = (0, r.jsx)(eW, { step: el, onPurchaseComplete: () => y(el), onHandoffFailure: tR })),
                (n = (0, r.jsx)(eV, {
                    onPrimaryClick: tR,
                    onBackClick: () => {
                        tc(), null != S && S();
                    },
                }));
            break;
        case eT.pn.EPS_INFORMATION:
            (t = (0, r.jsx)(eE, {
                type: eC.he.EPS,
                onAccountHolderNameChange: (e) => eB({ info: { ...eH.info, name: e }, isValid: eH.isValid }),
                onEPSBankChange: (e) => e2(e),
                epsBankValue: e1,
                billingAddressInfo: eH.info,
            })),
                (n = (0, r.jsx)(tI, {
                    onBack: () => tf(eC.he.EPS),
                    primaryCTA: ex.Ay.CTAType.CONTINUE,
                    primaryText: M.intl.string(M.t.PDTjLN),
                    primaryDisabled: void 0 === e1 || "" === e1 || "" === eH.info.name,
                    onPrimary: () => tE(),
                    shouldUseManaModal: G,
                }));
            break;
        case eT.pn.IDEAL_INFORMATION:
            (t = (0, r.jsx)(ec, {
                type: eC.he.IDEAL,
                onAccountHolderNameChange: (e) => eB({ info: { ...eH.info, name: e }, isValid: eH.isValid }),
                billingAddressInfo: eH.info,
            })),
                (n = (0, r.jsx)(tI, {
                    onBack: () => eR(eT.pn.PAYMENT_TYPE),
                    primaryCTA: ex.Ay.CTAType.CONTINUE,
                    primaryText: M.intl.string(M.t.PDTjLN),
                    primaryDisabled: "" === eH.info.name,
                    onPrimary: () => tE(),
                    shouldUseManaModal: G,
                }));
            break;
        case eT.pn.PRZELEWY24_INFORMATION:
            (t = (0, r.jsx)(eE, {
                type: eC.he.PRZELEWY24,
                onNameChange: (e) => eB({ info: { ...eH.info, name: e }, isValid: eH.isValid }),
                onEmailChange: (e) => eB({ info: { ...eH.info, email: e }, isValid: eH.isValid }),
                onP24BankChange: (e) => {
                    e3(e);
                },
                p24BankValue: e4,
                billingAddressInfo: eH.info,
            })),
                (n = (0, r.jsx)(tI, {
                    onBack: () => tf(eC.he.PRZELEWY24),
                    primaryCTA: ex.Ay.CTAType.CONTINUE,
                    primaryText: M.intl.string(M.t.PDTjLN),
                    primaryDisabled:
                        void 0 === eH.info.name ||
                        "" === eH.info.name ||
                        void 0 === eH.info.email ||
                        "" === eH.info.email ||
                        void 0 === e4 ||
                        "" === e4,
                    onPrimary: () => tE(),
                    shouldUseManaModal: G,
                }));
            break;
        case eT.pn.PAYPAL_INFORMATION:
            let tb = 0 !== eK.length && null != eZ;
            (t = (0, r.jsx)(tV, {})),
                (n = (0, r.jsx)(tI, {
                    onBack: () => tf(eC.he.PAYPAL),
                    primaryCTA: ex.Ay.CTAType.CONTINUE,
                    primaryText: tb ? M.intl.string(M.t.PDTjLN) : M.intl.string(M.t.Djzd7L),
                    onPrimary: () => {
                        let e;
                        return tb
                            ? tE()
                            : void (null == (e = f.A.getLastURL())
                                  ? T()
                                  : (C.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_START" }), window.open(e)));
                    },
                    shouldUseManaModal: G,
                }));
            break;
        case eT.pn.VENMO_INFORMATION:
            let tM = 0 !== ez.length && null != eZ;
            (t = (0, r.jsx)(tK, {})),
                (n = (0, r.jsx)(tI, {
                    onBack: () => tf(eC.he.VENMO),
                    primaryCTA: ex.Ay.CTAType.CONTINUE,
                    primaryText: tM ? M.intl.string(M.t.PDTjLN) : M.intl.string(M.t["4KoTLM"]),
                    onPrimary: () => (tM ? tE() : void g()),
                    shouldUseManaModal: G,
                }));
            break;
        case eT.pn.PAYMENT_REQUEST_INFORMATION:
            (t = (0, r.jsx)(tq, {})),
                (n = (0, r.jsx)(tI, { onBack: () => eR(eT.pn.PAYMENT_TYPE), shouldUseManaModal: G }));
            break;
        case eT.pn.CASH_APP_INFORMATION:
            let tj = null != eX;
            (t = (0, r.jsx)(tZ, {})),
                (n = (0, r.jsx)(tI, {
                    onBack: () => tf(eC.he.CASH_APP),
                    primaryCTA: ex.Ay.CTAType.CONTINUE,
                    primaryText: tj ? M.intl.string(M.t.PDTjLN) : M.intl.string(M.t["9ALP8w"]),
                    onPrimary: () => (tj ? tE() : te()),
                    primaryDisabled: null == em,
                    shouldUseManaModal: G,
                }));
            break;
        case eT.pn.ADDRESS:
            let tO = null != to;
            (t = (0, r.jsx)(tw, {
                paymentModalArgs: l,
                paymentSourceType: eu.methodType ?? eC.he.CARD,
                shouldUsePaymentElement: tO,
            })),
                (n = (0, r.jsx)(tk, {
                    paymentModalArgs: l,
                    shouldUseManaModal: G,
                    analyticsLocation: R,
                    overwriteSubscriptionPaymentSource: D,
                    handleStepChange: eR,
                    onPaymentRequestSourceFailed: tn,
                    paymentRequestPaymentMethod: eL,
                    completeSteps: tt,
                    paymentMethodSteps: eu,
                    shouldUsePaymentElement: tO,
                    ...ti,
                }));
            break;
        case eT.pn.AWAITING_AUTHENTICATION:
            t = (0, r.jsx)(tz, {});
            break;
        default:
            throw new ef.v({ message: `Unexpected step: ${el}`, extraSentryInformation: { currentStep: el } });
    }
    let tL = tr ? "combined_stripe_elements" : void 0,
        tU = (0, r.jsxs)(p.Y, {
            className: tF.C9,
            staticClassName: tF.a2,
            animatedNodeClassName: tF.L2,
            fillParent: !0,
            overrideKey: tL,
            step: el,
            steps: eu.steps,
            sideMargin: 20,
            children: [
                null != ea &&
                    (0, r.jsx)("div", { className: ty.Ns, children: (0, r.jsx)(m.w, { type: "info", children: ea }) }),
                tr &&
                    (0, r.jsx)(tG._i, {
                        step: el,
                        analyticsContext:
                            null != N ? { activitySessionId: H, contextMetadata: B, analyticsData: N } : void 0,
                        paymentElementSelectedType: to,
                        stripeElementsRef: td,
                        stripePaymentElementProps: tp,
                        stripeAddressElementProps: tm,
                        addressElementKey: th,
                        billingAddressInfo: eH.info,
                        onSetupError: () => {
                            tc(), eR(eT.pn.PAYMENT_TYPE);
                        },
                        paymentElementFooter: ts
                            ? (0, r.jsx)(ey.Z4, {
                                  className: ty.SO,
                                  stackingBehavior: "stack",
                                  onComplete: () => {
                                      setTimeout(() => W(eT.pn.REVIEW), 0);
                                  },
                              })
                            : null,
                    }),
                t,
            ],
        }),
        tB = el === eT.pn.PAYMENT_TYPE && 0 === h.length ? null : n;
    return O
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  L && (0, r.jsx)(eg.A, { className: ty.At, isEligibleForTrial: L }),
                  (0, r.jsxs)(eN.dZ, { children: [tP, tU] }),
                  (0, r.jsx)(eN.UX, { children: tB }),
              ],
          })
        : (0, r.jsx)(e0.A, {
              shouldUseManaModal: G,
              steps: _ ?? eu.steps,
              currentStep: v ?? el,
              overrideKey: tL,
              paymentError: l.paymentError,
              header: x,
              hideBreadcrumbs: j,
              body: tU,
              footer: tB,
          });
}
function t$(e) {
    let {
            defaultPaymentSourceId: t,
            paymentSources: n,
            hasFetchedPaymentSources: l,
        } = (0, o.cf)([eq.A], () => ({
            defaultPaymentSourceId: void 0 !== e ? e : eq.A.defaultPaymentSourceId,
            paymentSources: eq.A.paymentSources,
            hasFetchedPaymentSources: eq.A.hasFetchedPaymentSources,
        })),
        i = (0, o.bG)([e7], () => e7.cashAppPayComponent),
        r = (0, o.bG)([es.A], () => es.A.data?.allowed_payment_source_types ?? null);
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
                        C.h.subscribe("BRAINTREE_CREATE_CLIENT_SUCCESS", function e() {
                            C.h.unsubscribe("BRAINTREE_CREATE_CLIENT_SUCCESS", e), setTimeout(l, 0);
                        });
                    })
                        .then(() => {
                            _(), I();
                        })
                        .catch((e) => {
                            A.pM(e);
                        }),
                        C.h.dispatch({ type: "BRAINTREE_CREATE_CLIENT_SUCCESS", client: e });
                })
                .catch(() => C.h.dispatch({ type: "BRAINTREE_CREATE_CLIENT_FAIL" }));
        }),
            l || (0, E.$o)();
    }),
        a.useEffect(() => {
            null == i && null != r && r.includes(eC.he.CASH_APP) && e5();
        }, [r, i]);
    let [s, u] = a.useState(t),
        c = (0, ea.A)(t);
    t !== c && null != t && null == s && u(t);
    let [d, p] = a.useState(() => ({ info: tB, isValid: !1 })),
        [m, h] = a.useState(() => ({ info: tY, isValid: !1 })),
        [y, T] = a.useState(""),
        [g, v] = a.useState(""),
        [N, R] = a.useState(() => ({ token: null })),
        [M, j, O, L, w] = (0, o.yK)([b.A], () => [
            b.A.braintreeEmail,
            b.A.braintreeNonce,
            b.A.error,
            b.A.venmoUsername,
            b.A.adyenPaymentData,
        ]),
        [k, U] = (0, o.yK)([eZ.A], () => [eZ.A.error, eZ.A.isAwaitingAuthentication]);
    a.useEffect(() => {
        function e(e) {
            let { billingAddress: t } = e;
            h({ info: t, isValid: t.country.length > 0 });
        }
        return (
            C.h.subscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e),
            () => {
                C.h.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e), (0, x.ET)();
            }
        );
    }, []);
    let [D, G] = a.useState(!1),
        [F, H] = a.useState(!1),
        [B, Y] = a.useState(null),
        W = a.useRef(null),
        V = (0, o.bG)([eZ.A], () => eZ.A.isAwaitingAuthentication),
        [K, Z] = (0, o.yK)([ez.A], () => [ez.A.purchaseTokenAuthState, ez.A.purchaseTokenHash]);
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
            setTokenState: R,
            billingAddressState: m,
            setBillingAddressState: h,
            isSubmittingCurrentStep: D,
            setIsSubmittingCurrentStep: G,
            hasRedirectURL: F,
            setHasRedirectURL: H,
            braintreeEmail: M,
            braintreeNonce: j,
            venmoUsername: L,
            adyenPaymentData: w,
            paymentError: null != k ? k : O,
            paymentAuthenticationState: U ? eX.oc.PENDING : null != k ? eX.oc.ERROR : eX.oc.NONE,
            purchaseError: B,
            setPurchaseError: Y,
            purchaseErrorBlockRef: W,
            isAuthenticating: V,
            purchaseTokenAuthState: K,
            purchaseTokenHash: Z,
            epsBankState: g,
            setEpsBankState: v,
            p24BankState: y,
            setP24BankState: T,
        }
    );
}
