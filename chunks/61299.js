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
    h = n(228366),
    C = n(636537),
    f = n(277984),
    E = n(70142),
    S = n(739508),
    y = n(184015),
    A = n(723702),
    P = n(652215);
function I() {
    let e = E.A.getClient();
    null != e &&
        (0, y.j)().then((t) => {
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
function g() {
    let e = E.A.getClient();
    null != e &&
        (0, y.j)().then((t) => {
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
function v() {
    let e = E.A.getPayPalClient();
    if (null == e) throw Error("braintree paypal client must be initialized before calling this");
    h.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_START" });
    let t = Promise.resolve("");
    (0, A.isDesktop)() && (t = (0, f.jf)(P.hes.PAYPAL)),
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
                      S.pM(Error(`Braintree Paypal Error: ${t} ${n} ${l}`)));
            });
}
function _() {
    let e = E.A.getVenmoClient();
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
                      S.pM(Error(`Braintree Venmo Error: ${t} ${n} ${l}`)));
            });
}
function T(e, t) {
    if (null == e) return Promise.resolve();
    h.h.dispatch(t);
    try {
        return Promise.resolve(e.teardown());
    } catch (e) {
        return Promise.resolve();
    }
}
var x = n(391048),
    N = n(95477),
    b = n(812745),
    R = n(825755),
    j = n(375708);
class M extends a.PureComponent {
    componentDidMount() {
        null != this.props.paypalClient && v();
    }
    componentDidUpdate(e) {
        null == e.paypalClient && null != this.props.paypalClient && v();
    }
    componentWillUnmount() {
        T(E.A.getPayPalClient(), { type: "BRAINTREE_TEARDOWN_PAYPAL_CLIENT" }).then(() => {
            null != E.A.getClient() && g();
        });
    }
    render() {
        let { braintreeEmail: e, paypalClient: t } = this.props;
        return (0, r.jsx)(N.k, {
            label: j.intl.string(j.t.QQBAos),
            leading: { type: "image", src: (0, b.Nj)(b.Ay.Types.PAYPAL) },
            value: e,
            readOnly: !0,
            placeholder: null == t ? j.intl.string(j.t.dte2M9) : j.intl.string(j.t.hopw7X),
        });
    }
}
let O = o.Ay.connectStores([E.A, R.A], () => ({
    braintreeEmail: R.A.braintreeEmail,
    paypalClient: E.A.getPayPalClient(),
}))(M);
var L = n(297264),
    k = n(834730),
    w = n(523022);
class U extends a.PureComponent {
    componentDidMount() {
        null != this.props.venmoClient && _();
    }
    componentDidUpdate(e) {
        null == e.venmoClient && null != this.props.venmoClient && _();
    }
    componentWillUnmount() {
        T(E.A.getVenmoClient(), { type: "BRAINTREE_TEARDOWN_VENMO_CLIENT" }).then(() => {
            null != E.A.getClient() && I();
        });
    }
    render() {
        let { venmoUsername: e, className: t, venmoClient: n } = this.props,
            l = null != e && "" !== e;
        return (0, r.jsxs)("div", {
            className: t,
            children: [
                (0, r.jsx)(b.Ay, { type: b.Ay.Types.VENMO, size: b.y3.MEDIUM, className: w.Z }),
                l
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(L.D, {
                                  variant: e.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
                                  className: w.y,
                                  children: j.intl.format(j.t.DowIre, { venmoUsername: e }),
                              }),
                              (0, r.jsx)(k.E, {
                                  variant: "text-md/medium",
                                  className: w.y,
                                  children: j.intl.string(j.t.kmEvnR),
                              }),
                          ],
                      })
                    : (0, r.jsx)(k.E, {
                          variant: "text-md/medium",
                          className: w.y,
                          children: null == n ? j.intl.string(j.t["2ouZDU"]) : j.intl.string(j.t.mIL6Jb),
                      }),
            ],
        });
    }
}
let D = o.Ay.connectStores([E.A, R.A], () => ({ venmoUsername: R.A.venmoUsername, venmoClient: E.A.getVenmoClient() }))(
    U,
);
var G = n(891197),
    F = n(503698),
    B = n.n(F),
    H = n(305866),
    Y = n(287809),
    W = n(832208),
    V = n(661531),
    K = n(602853),
    q = n(281595),
    Z = n(996971),
    z = n(498740);
let Q = function (e) {
    let t = a.useRef(null),
        { stripeType: n, flipped: l, updateCompleted: i, onFocus: o, onBlur: u } = e,
        [c, d] = a.useState(b.Be.UNKNOWN),
        [p, m] = a.useState(!1),
        [h, C] = a.useState(!1),
        [f, E] = a.useState(null),
        [S, y] = a.useState({}),
        A = (0, s.useElements)(),
        P = a.useCallback(() => {
            if (null != A)
                switch (n) {
                    case "cardNumber": {
                        let e = A.getElement(s.CardNumberElement);
                        if (null == e) return;
                        e.off("change"), e.off("focus"), e.off("blur");
                        break;
                    }
                    case "cardExpiry": {
                        let e = A.getElement(s.CardExpiryElement);
                        if (null == e) return;
                        e.off("change"), e.off("focus"), e.off("blur");
                        break;
                    }
                    case "cardCvc": {
                        let e = A.getElement(s.CardCvcElement);
                        if (null == e) return;
                        e.off("change"), e.off("focus"), e.off("blur");
                    }
                }
        }, [A, n]),
        I = a.useCallback(
            (e) => {
                h || e.empty || C(!0), null != i && i(e.complete), null != e.error && m(!1);
            },
            [h, i],
        ),
        g = a.useCallback(() => {
            m(!0), o?.();
        }, [o]),
        v = a.useCallback(() => {
            m(!1), u?.();
        }, [u]),
        _ = a.useCallback(() => {
            if (null != A)
                switch (n) {
                    case "cardNumber": {
                        let e = A.getElement(s.CardNumberElement);
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
                            e.on("focus", g),
                            e.on("blur", v);
                        break;
                    }
                    case "cardExpiry": {
                        let e = A.getElement(s.CardExpiryElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            null != e.error || (e.empty && h) ? E(j.intl.string(j.t["9/zZdl"])) : E(null), I(e);
                        }),
                            e.on("focus", g),
                            e.on("blur", v);
                        break;
                    }
                    case "cardCvc": {
                        let e = A.getElement(s.CardCvcElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            null != e.error || (e.empty && h) ? E(j.intl.string(j.t.ro4isZ)) : E(null), I(e);
                        }),
                            e.on("focus", g),
                            e.on("blur", v);
                    }
                }
        }, [v, I, g, c, A, h, n]);
    a.useEffect(
        () => (
            _(),
            () => {
                P();
            }
        ),
        [_, P],
    );
    let T = (0, K.r)(V.A.colors.TEXT_SUBTLE).hex(),
        x = (0, K.r)(V.A.colors.TEXT_STRONG).hex();
    function N() {
        return B()(Z.vB, { [Z.Tn]: null !== f, [Z.iH]: p, [Z.yD]: "cardNumber" === n });
    }
    return (
        a.useLayoutEffect(() => {
            let { current: e } = t;
            if (null == e) return;
            let n = window.getComputedStyle(e),
                l = n.getPropertyValue("font-family");
            y({
                base: {
                    fontFamily: l,
                    fontWeight: n.getPropertyValue("font-weight"),
                    color: x,
                    fontSize: n.getPropertyValue("font-size"),
                    "::placeholder": { color: T },
                },
            });
        }, [t, T, x]),
        (0, r.jsxs)("div", {
            className: Z.Zm,
            "data-stripe-type": n,
            children: [
                (0, r.jsx)("div", { ref: t, className: B()(Z.iw, z.hF) }),
                (function () {
                    switch (n) {
                        case "cardNumber":
                            return (0, r.jsxs)("div", {
                                children: [
                                    (0, r.jsx)(b.Ay, { className: Z.Ie, type: c, flipped: l }),
                                    (0, r.jsx)(s.CardNumberElement, {
                                        options: { style: S, placeholder: j.intl.string(j.t.gPRHfw), disableLink: !1 },
                                        className: N(),
                                    }),
                                ],
                            });
                        case "cardExpiry":
                            return (0, r.jsx)(s.CardExpiryElement, {
                                options: { style: S, placeholder: j.intl.string(j.t.xeEWQ6) },
                                className: N(),
                            });
                        case "cardCvc":
                            return (0, r.jsx)(s.CardCvcElement, {
                                options: { style: S, placeholder: j.intl.string(j.t.wZz04F) },
                                className: N(),
                            });
                    }
                })(),
                (0, r.jsx)(q.U, { error: f }),
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
        [h, C] = a.useState({}),
        { setFocusLockDisabled: f } = a.useContext(H.M);
    a.useEffect(() => () => {
        void 0 !== f && f(!1);
    });
    let E = a.useCallback(() => {
        void 0 !== f && f(!0);
    }, [f]);
    function S(e, t) {
        !!o[e] !== t && u((n) => ({ ...n, [e]: t }));
    }
    let y = a.useCallback(
        function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = {};
            return (e || p.name) && "" === c.name && (t.name = j.intl.string(j.t.lIkVsi)), t;
        },
        [p, c],
    );
    return (
        a.useEffect(() => {
            let e = o.cardNumber && o.cardExpiry && o.cardCvc && 0 === Object.keys(y(!0)).length;
            l.current({ name: c.name }, !!e);
        }, [o, c, y]),
        (0, r.jsxs)("div", {
            children: [
                Y.default.getCurrentUser()?.nsfwAllowed
                    ? (0, r.jsxs)("div", {
                          className: $.Rm,
                          children: [
                              (0, r.jsx)("div", { className: B()(b.y3.SMALL, $.eo, $.Ud) }),
                              (0, r.jsx)("div", { className: B()(b.y3.SMALL, $.DR, $.Ud) }),
                              (0, r.jsx)("div", { className: B()(b.y3.SMALL, $.k4, $.Ud) }),
                              (0, r.jsx)("div", { className: B()(b.y3.SMALL, $.a3, $.Ud) }),
                              (0, r.jsx)("div", { className: B()(b.y3.SMALL, $.CY, $.Ud) }),
                              (0, r.jsx)("div", { className: B()(b.y3.SMALL, $.Q5, $.Ud) }),
                              (0, r.jsx)("div", { className: B()(b.y3.SMALL, $.YA, $.Ud) }),
                          ],
                      })
                    : (0, r.jsxs)("div", {
                          className: $.Rm,
                          children: [
                              (0, r.jsx)("div", { className: B()(b.y3.SMALL, $.aq, $.Ud) }),
                              (0, r.jsx)("div", { className: B()(b.y3.SMALL, $.VX, $.Ud) }),
                              (0, r.jsx)("div", { className: B()(b.y3.SMALL, $.Yi, $.Ud) }),
                              (0, r.jsx)("div", { className: B()(b.y3.SMALL, $.qR, $.Ud) }),
                              (0, r.jsx)("div", { className: B()(b.y3.SMALL, $.m2, $.Ud) }),
                              (0, r.jsx)("div", { className: B()(b.y3.SMALL, $.Ij, $.Ud) }),
                              (0, r.jsx)("div", { className: B()(b.y3.SMALL, $._V, $.Ud) }),
                          ],
                      }),
                (0, r.jsx)(W.A, {
                    form: [
                        {
                            fields: [
                                {
                                    id: "card-number",
                                    name: "cardNumber",
                                    title: () => j.intl.string(j.t.cVyJ3o),
                                    getClassNameForLayout: () => J.c6,
                                    renderInput: () =>
                                        (0, r.jsx)(Q, {
                                            stripeType: "cardNumber",
                                            flipped: i,
                                            updateCompleted: (e) => S("cardNumber", e),
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
                                    getClassNameForLayout: () => J.ep,
                                    renderInput: () =>
                                        (0, r.jsx)(Q, {
                                            stripeType: "cardExpiry",
                                            updateCompleted: (e) => S("cardExpiry", e),
                                            onFocus: E,
                                        }),
                                },
                                {
                                    id: "card-cvc",
                                    name: "cardCvc",
                                    title: () => j.intl.string(j.t.Fd3rOz),
                                    getClassNameForLayout: () => J.ep,
                                    renderInput: () =>
                                        (0, r.jsx)(Q, {
                                            stripeType: "cardCvc",
                                            updateCompleted: (e) => S("cardCvc", e),
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
                            l[t] && "" === e ? "name" === t && (i.name = j.intl.string(j.t.lIkVsi)) : delete i[t],
                            d(n),
                            m(l),
                            C(i);
                    },
                    onFieldBlur: function () {
                        C(y());
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
                      children: (0, r.jsx)(m.w, { type: "critical", children: j.intl.string(j.t["4vnhKV"]) }),
                  })
                : null,
            (0, r.jsx)(X, { onCardInfoChange: n, error: t }),
        ],
    });
}
function ei(e) {
    let { className: t, submitting: n, stripePaymentMethod: l } = e,
        { card: i } = l ?? {},
        a = null != i ? b.Ay.getType(i.brand) : b.Ay.Types.UNKNOWN;
    return (0, r.jsx)("div", {
        className: t,
        children: (0, r.jsx)(N.k, {
            label: j.intl.string(j.t["mmDvV+"]),
            leading: { type: "image", src: (0, b.Nj)(a) },
            value: n && null != i ? j.intl.formatToPlainString(j.t.bCynoK, i) : void 0,
            readOnly: !0,
            placeholder: j.intl.string(j.t.bWMH78),
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
            label: j.intl.string(j.t.sN3wrd),
            inputRef: l,
            name: j.intl.string(j.t.sN3wrd),
            placeholder: j.intl.string(j.t.sN3wrd),
            onChange: (e) => t(e),
            value: n.name,
        }),
    });
};
var ed = n(462887),
    ep = n(331322),
    em = n(736653),
    eh = n(818348),
    eC = n(147202);
let ef = function (e) {
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
        case eh.he.PRZELEWY24: {
            let i = (0, ed.M)(t) ? "/assets/f4150b3aed6c4679.svg" : "/assets/8b825aafb2e4dbed.svg",
                { onNameChange: a, onEmailChange: o, onP24BankChange: u, p24BankValue: c, billingAddressInfo: d } = e;
            return (0, r.jsx)("div", {
                className: eC.rf,
                children: (0, r.jsxs)(ep.B, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(N.k, {
                            label: j.intl.string(j.t["w/qqKK"]),
                            inputRef: n,
                            name: j.intl.string(j.t["w/qqKK"]),
                            placeholder: j.intl.string(j.t["w/qqKK"]),
                            onChange: (e) => o(e),
                            value: d.email,
                        }),
                        (0, r.jsx)(N.k, {
                            label: j.intl.string(j.t["yf7ms+"]),
                            name: j.intl.string(j.t["yf7ms+"]),
                            placeholder: j.intl.string(j.t["yf7ms+"]),
                            onChange: (e) => a(e),
                            value: d.name,
                        }),
                        (0, r.jsxs)(ep.B, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(k.E, { variant: "text-sm/semibold", children: j.intl.string(j.t.De3b8t) }),
                                (0, r.jsx)(s.P24BankElement, {
                                    options: { value: c, style: l },
                                    onChange: (e) => u(e.value),
                                }),
                                (0, r.jsx)("div", {
                                    className: eC.je,
                                    children: (0, r.jsx)("img", { src: i, alt: "Przelewy24" }),
                                }),
                            ],
                        }),
                    ],
                }),
            });
        }
        case eh.he.EPS: {
            let { onAccountHolderNameChange: i, onEPSBankChange: a, epsBankValue: o, billingAddressInfo: u } = e,
                c = (0, ed.M)(t) ? "/assets/025b24b0055c8d81.svg" : "/assets/1dae7d71a65fd90f.svg";
            return (0, r.jsx)("div", {
                className: eC.rf,
                children: (0, r.jsxs)(ep.B, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(N.k, {
                            label: j.intl.string(j.t.sN3wrd),
                            inputRef: n,
                            name: j.intl.string(j.t.sN3wrd),
                            placeholder: j.intl.string(j.t.sN3wrd),
                            onChange: (e) => i(e),
                            value: u.name,
                        }),
                        (0, r.jsxs)(ep.B, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(k.E, { variant: "text-sm/semibold", children: j.intl.string(j.t.dFyV07) }),
                                (0, r.jsx)(s.EpsBankElement, {
                                    options: { value: o, style: l },
                                    onChange: (e) => a(e.value),
                                }),
                                (0, r.jsx)("div", {
                                    className: eC.je,
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
var eE = n(71804);
n(202475);
var eS = n(31823);
n(211083);
var ey = n(883645),
    eA = n(936477);
n(601194);
var eP = n(87725),
    eI = n(783327),
    eg = n(626584),
    ev = n(166532),
    e_ = n(69494),
    eT = n(901930),
    ex = n(19311),
    eN = n(482132),
    eb = n(364840),
    eR = n(73825),
    ej = n(558620),
    eM = n(683433),
    eO = n(36167),
    eL = n(951305),
    ek = (((i = {})[(i.UNKNOWN = 0)] = "UNKNOWN"), (i[(i.PENDING = 1)] = "PENDING"), (i[(i.DONE = 2)] = "DONE"), i);
let ew = 0,
    eU = null,
    eD = null,
    eG = null;
class eF extends o.Ay.Store {
    static displayName = "BrowserCheckoutStateStore";
    get browserCheckoutState() {
        return ew;
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
let eB = new eF(h.h, {
    USER_PAYMENT_BROWSER_CHECKOUT_STARTED: function (e) {
        (ew = 1), (eU = e.loadId);
    },
    USER_PAYMENT_BROWSER_CHECKOUT_DONE: function (e) {
        eU === e.loadId && ((eD = e.skuId ?? null), (eG = e.skuSubscriptionPlanId ?? null), (ew = 2));
    },
});
var eH = n(202541),
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
            browserCheckoutStatePlanId: h,
        } = (0, o.cf)([eB], () => ({
            browserCheckoutState: eB.browserCheckoutState,
            browserCheckoutStateLoadId: eB.loadId,
            browserCheckoutStateSkuId: eB.skuId,
            browserCheckoutStatePlanId: eB.planId,
        })),
        C = (0, ej.A)(),
        { isGift: E } = (0, eL.Pv)(),
        [S, y] = a.useState(!1);
    switch (n) {
        case ev.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
            t = P.do8.GOOGLE_PAY;
            break;
        case ev.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
            t = P.do8.APPLE_PAY;
    }
    return (
        a.useEffect(() => {
            let e = setTimeout(() => {
                S ||
                    (y(!0),
                    (0, f.Ze)(c.loadId),
                    (0, eO.my)(
                        {
                            planId: C?.id ?? eH.gD.PREMIUM_MONTH_TIER_2,
                            isGift: E,
                            loadId: c.loadId,
                            paymentMethodType: t,
                        },
                        i,
                    ));
            }, 1e3);
            return () => clearTimeout(e);
        }, [C, E, c, i, y, S, t]),
        a.useEffect(() => {
            null !== m && (eH.oz.includes(m) && ((0, eR.ur)(m), (0, f.hP)()), s(m)),
                null !== h && u(h),
                p === c.loadId && d === ek.DONE && l();
        }, [s, u, d, p, m, h, c, l]),
        (0, r.jsxs)("div", {
            className: eY.rf,
            children: [
                (0, r.jsx)(L.D, { variant: "heading-xl/bold", children: j.intl.string(j.t.C4HYfy) }),
                (0, r.jsx)(k.E, { variant: "text-md/normal", className: eY.h_, children: j.intl.string(j.t.xfG7Jp) }),
            ],
        })
    );
}
function eV(e) {
    let { onPrimaryClick: t, onBackClick: n } = e;
    return (0, r.jsx)(eb.j, {
        children: (0, r.jsxs)("div", {
            className: eY.kL,
            children: [
                (0, r.jsx)(eM.A, { onClick: n }),
                (0, r.jsx)(eM.F, { onClick: t, children: j.intl.string(j.t["4Qvmmj"]) }),
            ],
        }),
    });
}
var eK = n(615405),
    eq = n(153084),
    eZ = n(295405),
    ez = n(71319),
    eQ = n(67480),
    e$ = n(174459),
    eJ = n(427262),
    eX = n(251913),
    e0 = n(632638),
    e2 = n(632088);
let e1 = null,
    e4 = null;
class e3 extends o.Ay.Store {
    static displayName = "AdyenStore";
    get client() {
        return e1;
    }
    get cashAppPayComponent() {
        return e4;
    }
}
let e7 = new e3(h.h, {
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
async function e6() {
    return await C.Bo.get({ url: P.Rsh.BILLING_ADYEN_PAYMENT_METHODS, oldFormErrors: !0, rejectWithError: !1 });
}
async function e5() {
    try {
        let e = await e6(),
            { default: t } = await Promise.all([n.e("494678"), n.e("540002")]).then(n.bind(n, 971193)),
            l = await t({
                environment: P.Gg3.ADYEN.KEY.startsWith("live_") ? "live" : "test",
                clientKey: P.Gg3.ADYEN.KEY,
                analytics: { enabled: !1 },
                paymentMethodsResponse: e.body,
            });
        h.h.dispatch({ type: "ADYEN_CREATE_CLIENT_SUCCESS", client: l }),
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
                            if (n) h.h.dispatch({ type: "ADYEN_CASH_APP_PAY_SUBMIT_SUCCESS", data: t });
                            else throw (0, f.i0)("Cash App Pay setup attempt is not valid.");
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
                                        (n = !1), (t = j.intl.string(j.t.TJ8dDB));
                                }
                                (0, f.i0)(e.message, n, t);
                            }
                        },
                    })
                    .mount(`#${e2.h}`);
                h.h.dispatch({ type: "ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS", component: t });
            })(l);
    } catch (e) {
        (0, S.pM)(e), h.h.dispatch({ type: "ADYEN_CREATE_CLIENT_FAIL" });
    }
}
function e8() {
    let e = e7.cashAppPayComponent;
    if (null == e) throw Error("Adyen CashAppPay component must be created before mounting.");
    try {
        e.mount(`#${e2.h}`);
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
        l = (0, o.bG)([R.A], () => R.A.adyenPaymentData);
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
            (0, r.jsx)(b.Ay, { type: b.Ay.Types.CASH_APP, size: b.y3.MEDIUM, className: tt.K }),
            s
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(L.D, {
                              variant: i.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
                              className: tt.y,
                              children: j.intl.format(j.t["ze/1yE"], { cashtag: i }),
                          }),
                          (0, r.jsx)(k.E, {
                              variant: "text-md/medium",
                              className: tt.y,
                              children: j.intl.string(j.t.VPOx7N),
                          }),
                      ],
                  })
                : (0, r.jsx)(k.E, {
                      variant: "text-md/medium",
                      className: tt.y,
                      children: null == n ? j.intl.string(j.t["CgVe/w"]) : j.intl.string(j.t["1MqcjI"]),
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
let tu = [ev.pn.PAYMENT_TYPE],
    tc = [ev.pn.PAYMENT_TYPE, ev.pn.CREDIT_CARD_INFORMATION, ev.pn.ADDRESS],
    td = [ev.pn.PAYMENT_TYPE, ev.pn.PAYPAL_INFORMATION, ev.pn.ADDRESS],
    tp = [ev.pn.PAYMENT_TYPE, ev.pn.VENMO_INFORMATION, ev.pn.ADDRESS],
    tm = [ev.pn.PAYMENT_TYPE, ev.pn.CASH_APP_INFORMATION, ev.pn.ADDRESS],
    th = [ev.pn.PAYMENT_TYPE, ev.pn.PRZELEWY24_INFORMATION, ev.pn.ADDRESS],
    tC = [ev.pn.PAYMENT_TYPE, ev.pn.EPS_INFORMATION, ev.pn.ADDRESS],
    tf = [ev.pn.PAYMENT_TYPE, ev.pn.IDEAL_INFORMATION, ev.pn.ADDRESS],
    tE = [ev.pn.PAYMENT_TYPE, ev.pn.ADDRESS],
    tS = {
        SHARED_ADD_PAYMENT_STEPS: tu,
        SHARED_CREDIT_CARD_STEPS: tc,
        SHARED_PAYPAL_STEPS: td,
        SHARED_VENMO_STEPS: tp,
        SHARED_PRZELEWY24_STEPS: th,
        SHARED_EPS_STEPS: tC,
        SHARED_IDEAL_STEPS: tf,
        SHARED_CASH_APP_STEPS: tm,
        SHARED_TYPE_AND_ADDRESS_STEPS: tE,
    },
    ty = {
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
var tA = n(376289);
function tP(e) {
    return () => (null != R.A.error && (0, x.ET)(), e());
}
function tI(e) {
    let { onPrimary: t, onBack: n, ...l } = e,
        i = t;
    null != t && (i = tP(t));
    let a = n;
    return null != n && (a = tP(n)), (0, r.jsx)(ex.Ay, { ...l, onPrimary: i, onBack: a });
}
function tg(e) {
    let { paymentSourceTypeRestrictions: t } = e,
        n = null != t && t.length > 0 ? to.fU.ADD_NEW_PAYMENT_METHOD : void 0,
        { enabled: l } = (0, ti.c)({ location: "AddPaymentStep" });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(to.je, { paymentRestrictionBannerType: n }),
            (0, r.jsx)(tl.A, { ...e }),
            l && (0, r.jsx)(eA.Z4, { className: tA.SO }),
        ],
    });
}
function tv(e) {
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
            CREDIT_CARD_STEPS: E,
            PAYPAL_STEPS: S,
            VENMO_STEPS: y,
            PAYMENT_REQUEST_STEPS: P,
            PRZELEWY24_STEPS: I,
            EPS_STEPS: g,
            IDEAL_STEPS: v,
            CASH_APP_STEPS: _,
            setConnectorPaymentRequestReady: T,
            connectorPaymentRequestRef: N,
        } = e,
        { activitySessionId: b } = (0, eS.V)(),
        M = (0, eP.t4)((e) => e.contextMetadata),
        { setBillingAddressState: O } = o;
    function L(e, l) {
        switch (e) {
            case eh.he.CARD:
                a ? u(ev.pn.AWAITING_BROWSER_CHECKOUT) : (c(E), u(ev.pn.CREDIT_CARD_INFORMATION));
                break;
            case eh.he.PAYPAL:
                c(S), u(ev.pn.PAYPAL_INFORMATION);
                break;
            case eh.he.VENMO:
                c(y), u(ev.pn.VENMO_INFORMATION);
                break;
            case eh.he.PAYMENT_REQUEST:
                a && "googlePay" === l
                    ? u(ev.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY)
                    : a && "applePay" === l
                      ? u(ev.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY)
                      : (c(P), u(ev.pn.PAYMENT_REQUEST_INFORMATION));
                break;
            case eh.he.PRZELEWY24:
                c(I), u(ev.pn.PRZELEWY24_INFORMATION);
                break;
            case eh.he.EPS:
                c(g), u(ev.pn.EPS_INFORMATION);
                break;
            case eh.he.IDEAL:
                c(v), u(ev.pn.IDEAL_INFORMATION);
                break;
            case eh.he.CASH_APP:
                c(_), u(ev.pn.CASH_APP_INFORMATION);
                break;
            case eh.he.GIROPAY:
            case eh.he.PAYSAFE_CARD:
            case eh.he.GCASH:
            case eh.he.GRABPAY_MY:
            case eh.he.MOMO_WALLET:
            case eh.he.KAKAOPAY:
            case eh.he.GOPAY_WALLET:
            case eh.he.BANCONTACT:
                c({ steps: [...t, ...tE, ...n], methodType: e }), u(ev.pn.ADDRESS);
        }
        null != R.A.error && (0, x.ET)();
    }
    async function k(e, t) {
        if (((0, x.mf)(e), null == e)) return void s();
        d(e);
        let { billingAddressInfo: n } = (0, ts.uK)(e),
            i = (0, tr.Qd)(n);
        if (((null == n.name || "" === n.name) && null != t && (n.name = t), O({ isValid: i, info: n }), !i))
            return void u(ev.pn.ADDRESS);
        try {
            var r;
            (r = await (0, f.Tv)(e, n, l)), O((e) => ({ ...e, info: n })), c(P), h(r);
        } catch (e) {
            s();
        }
    }
    if (p === ev.pn.ATTEMPT_GOOGLE_PAY || p === ev.pn.ATTEMPT_APPLE_PAY) {
        let e = j.intl.string(p === ev.pn.ATTEMPT_APPLE_PAY ? j.t.czhXDv : j.t.Zj2xQ0);
        return (0, r.jsx)(ta.V, {
            onChooseType: L,
            paymentRequestWallet: p === ev.pn.ATTEMPT_APPLE_PAY ? "applePay" : "googlePay",
            onStripePaymentMethodReceived: k,
            onPaymentRequestFailure: () => {
                L(eh.he.CARD), m(e);
            },
            onValidPaymentRequest: () => T(!0),
            paymentRequestRef: N,
        });
    }
    let w = !(0, A.isDesktop)() || a;
    return (0, r.jsx)(tg, {
        onChooseType: L,
        onStripePaymentMethodReceived: k,
        paymentRequestWallets: w ? ["googlePay", "applePay"] : [],
        isEligibleForTrial: i,
        paymentRequestPaymentContext: { contextMetadata: M, activitySessionId: b },
        paymentSourceTypeRestrictions: C,
    });
}
function t_(e) {
    let {
        onReturn: t,
        shouldUseManaModal: n,
        handleStepChange: l,
        currentStep: i,
        connectorPaymentRequestReady: a,
        showConnectorPaymentRequest: s,
    } = e;
    if (i === ev.pn.ATTEMPT_GOOGLE_PAY || i === ev.pn.ATTEMPT_APPLE_PAY) {
        let e = j.intl.string(i === ev.pn.ATTEMPT_APPLE_PAY ? j.t.WoXvJL : j.t.wnVVr0);
        return (0, r.jsx)(tI, {
            onBack: () => l(ev.pn.PAYMENT_TYPE),
            primaryCTA: ex.Ay.CTAType.CONTINUE,
            primaryText: e,
            onPrimary: () => s(),
            primaryDisabled: !a,
            shouldUseManaModal: n,
        });
    }
    return (0, r.jsx)(tI, { onBack: t, shouldUseManaModal: n });
}
var tT = n(198970),
    tx = n(116673),
    tN = n(773669);
let tb = (e) => {
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
            t = "en-US" === c ? tT.Ay.Layouts.MODAL_US_WITH_NAME : tT.Ay.Layouts.MODAL_INTL_WITH_NAME;
            break;
        case P.hes.VENMO:
        case P.hes.CASH_APP:
            t = tT.Ay.Layouts.MODAL_US_WITH_NAME;
            break;
        default:
            t = "en-US" === c ? tT.Ay.Layouts.MODAL_US : tT.Ay.Layouts.MODAL_INTL;
    }
    let d = (0, tx.z)();
    0 === n.country.length && null != d && d.length > 0 && (n.country = d[0]);
    let p = (0, o.bG)([Y.default], () => Y.default.getCurrentUser()?.storeCountry?.isLocked === !0)
        ? j.intl.string(j.t.Pg2hU0)
        : null;
    return (0, r.jsxs)(a.Fragment, {
        children: [
            u
                ? (0, r.jsx)("div", {
                      className: en.QK,
                      children: (0, r.jsx)(m.w, { type: "critical", children: j.intl.string(j.t.vZ8y7l) }),
                  })
                : null,
            (0, r.jsx)(tT.Ay, {
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
var tR = n(908166),
    tj = n(930767),
    tM = n(891640);
let tO = new eg.A("AddPaymentAddressStep.tsx");
function tL(e) {
    let { billingAddressInfo: t, onBillingAddressChange: n, paymentSourceType: l } = e,
        i = (0, o.bG)([R.A], () => R.A.error);
    return (0, r.jsx)(tb, { billingAddressInfo: t, billingError: i, onBillingAddressChange: n, paymentSourceType: l });
}
function tk(e) {
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
function tw(e) {
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
        f = (0, eI.S)(),
        { createSetupIntent: E } = (0, tR.x)(),
        {
            isSubmittingCurrentStep: S,
            billingAddressState: y,
            setIsSubmittingCurrentStep: A,
            hasRedirectURL: P,
            setHasRedirectURL: I,
            isAuthenticating: g,
        } = t;
    async function v() {
        A(!0);
        let e = C ? d : c.methodType,
            n = m.current,
            r = null != e && (0, tM.i)(e) ? tM.F[e] : null;
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
                stripe: f,
                shouldUsePaymentElement: C,
                stripeElements: n,
                lastConfirmedSetupIntentRef: h,
                createSetupIntent: E,
                onPaymentRequestSourceFailed: s,
                paymentRequestPaymentMethod: o,
                overwriteSubscriptionPaymentSource: i,
            });
            "redirect-url" === e.responseType ? I(e.hasRedirectURL) : u(e.paymentSource), P || A(!1);
        } catch (e) {
            A(!1), tO.warn(`Error confirming submitting Address Step for Payment Source Type: ${_}`, e);
        }
    }
    let _ = c.methodType,
        { backStep: T } = C
            ? { backStep: ev.pn.PAYMENT_ELEMENT }
            : (function (e) {
                  switch (e) {
                      case eh.he.CARD:
                          return { backStep: ev.pn.CREDIT_CARD_INFORMATION };
                      case eh.he.PAYPAL:
                          return { backStep: ev.pn.PAYPAL_INFORMATION };
                      case eh.he.VENMO:
                          return { backStep: ev.pn.VENMO_INFORMATION };
                      case eh.he.GIROPAY:
                      case eh.he.PAYSAFE_CARD:
                      case eh.he.GCASH:
                      case eh.he.GRABPAY_MY:
                      case eh.he.MOMO_WALLET:
                      case eh.he.KAKAOPAY:
                      case eh.he.GOPAY_WALLET:
                      case eh.he.BANCONTACT:
                          return { backStep: ev.pn.PAYMENT_TYPE };
                      case eh.he.EPS:
                          return { backStep: ev.pn.EPS_INFORMATION };
                      case eh.he.IDEAL:
                          return { backStep: ev.pn.IDEAL_INFORMATION };
                      case eh.he.PRZELEWY24:
                          return { backStep: ev.pn.PRZELEWY24_INFORMATION };
                      case eh.he.CASH_APP:
                          return { backStep: ev.pn.CASH_APP_INFORMATION };
                      default:
                          return { backStep: ev.pn.PAYMENT_TYPE };
                  }
              })(_),
        x = C ? () => p(void 0) : () => a(T);
    return (0, r.jsx)(tI, {
        onBack: x,
        primaryCTA: ex.Ay.CTAType.CONTINUE,
        primaryText: j.intl.string(j.t.PDTjLN),
        primarySubmitting: S,
        primaryDisabled: !y.isValid || g,
        onPrimary: v,
        shouldUseManaModal: n,
    });
}
let tU = new eg.A("PaymentElementStepFooter.tsx");
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
        { paymentElementSelectedType: h, stripeElementsRef: C, remountAddressElement: E } = e,
        S = a.useCallback(async () => {
            p(!0);
            try {
                if (null == h || !(0, eo.PE)(h)) throw (0, f.ne)("Valid Payment Element source type not found", !0);
                let { steps: e, methodType: n } = d[h];
                s({ steps: e, methodType: n === eh.he.UNKNOWN ? h : n });
                let l = tM.F[h];
                if (null != l && null != l.submitPaymentElementStepHandler) {
                    await l.submitPaymentElementStepHandler({
                        stripe: t,
                        stripeElements: C.current,
                        remountAddressElement: E,
                        setBillingAddressState: m,
                    }),
                        i(l.stepAfterPaymentElement ?? ev.pn.ADDRESS);
                    return;
                }
                let r = (0, eo.eI)(h);
                if (null != r) return void i(r);
                i(ev.pn.ADDRESS);
            } catch (e) {
                tU.error("Error on submitting Payment Element step: ", e.message ?? JSON.stringify(e));
            } finally {
                p(!1);
            }
        }, [h, d, C, E, i, t, s, p, m]);
    return (0, r.jsx)(tI, {
        onBack: o,
        primaryCTA: ex.Ay.CTAType.CONTINUE,
        primaryType: "submit",
        primaryText: j.intl.string(j.t.PDTjLN),
        primarySubmitting: u,
        primaryDisabled: c,
        onPrimary: S,
        shouldUseManaModal: n,
    });
}
var tG = n(447952),
    tF = n(581037);
let tB = new eg.A("AddPaymentStep.tsx"),
    tH = { name: "", cardNumber: "", expirationDate: "", cvc: "" },
    tY = { email: "", name: "", country: "", line1: "", line2: "", city: "", postalCode: "", state: "" };
function tW(e) {
    let { onCardInfoChange: t } = e,
        n = (0, o.bG)([R.A], () => R.A.error);
    return (0, r.jsx)(el, { billingError: n, onCardInfoChange: t });
}
function tV() {
    return (0, r.jsx)(O, {});
}
function tK() {
    return (0, r.jsx)(D, {});
}
function tq() {
    return (0, r.jsx)(tn, {});
}
function tZ() {
    let e = (0, o.bG)([eK.A], () => eK.A.isBusy),
        t = (0, o.bG)([R.A], () => R.A.stripePaymentMethod);
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
            prependSteps: C,
            appendSteps: S,
            onReturn: y,
            onComplete: A,
            onStepChange: I,
            breadcrumpSteps: g,
            currentBreadcrumpStep: T,
            header: x,
            analyticsData: N,
            analyticsLocation: b,
            hideBreadcrumbs: M = !1,
            useCheckoutStep: O = !1,
            isEligibleForTrial: L = !1,
            allowDesktopRedirectPurchase: k = !1,
            toastContent: w,
            continueSessionToInitialStep: U,
            overwriteSubscriptionPaymentSource: D = !1,
            shouldUseManaModal: G = !0,
        } = e,
        F = (0, eI.S)(),
        { activitySessionId: B } = (0, eS.V)(),
        { contextMetadata: H, clearFetchSetupIntent: Y } = (0, eP.t4)((e) => ({
            contextMetadata: e.contextMetadata,
            clearFetchSetupIntent: e.clearFetchSetupIntent,
        })),
        W = (0, ey.qv)();
    (0, er.l0)(Y);
    let V = a.useMemo(
            () =>
                i === ev.pn.PAYMENT_TYPE || i === ev.pn.PAYMENT_ELEMENT
                    ? k
                        ? ev.pn.AWAITING_BROWSER_CHECKOUT
                        : ev.pn.PAYMENT_ELEMENT
                    : i,
            [i, k],
        ),
        K = a.useMemo(() => (0, eJ.Gn)(), []),
        {
            CREDIT_CARD_STEPS: q,
            PAYPAL_STEPS: Z,
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
                                        ...(null == i || i === eh.he.UNKNOWN || (0, eo.PE)(i) ? ty[t] : tS[t]),
                                        ...l,
                                    ],
                                    methodType: i,
                                };
                            });
                        })(
                            [
                                { sharedStepsKey: "SHARED_TYPE_AND_ADDRESS_STEPS", methodType: eh.he.UNKNOWN },
                                { sharedStepsKey: "SHARED_ADD_PAYMENT_STEPS", methodType: eh.he.PAYMENT_REQUEST },
                                { sharedStepsKey: "SHARED_ADD_PAYMENT_STEPS" },
                                { sharedStepsKey: "SHARED_CREDIT_CARD_STEPS", methodType: eh.he.CARD },
                                { sharedStepsKey: "SHARED_PAYPAL_STEPS", methodType: eh.he.PAYPAL },
                                { sharedStepsKey: "SHARED_IDEAL_STEPS", methodType: eh.he.IDEAL },
                                { sharedStepsKey: "SHARED_VENMO_STEPS", methodType: eh.he.VENMO },
                                { sharedStepsKey: "SHARED_PRZELEWY24_STEPS", methodType: eh.he.PRZELEWY24 },
                                { sharedStepsKey: "SHARED_EPS_STEPS", methodType: eh.he.EPS },
                                { sharedStepsKey: "SHARED_CASH_APP_STEPS", methodType: eh.he.CASH_APP },
                            ],
                            { prependSteps: t, appendSteps: n },
                        ),
                    [t, n],
                ),
                h = (0, a.useMemo)(
                    () => ({
                        [eh.he.CARD]: s,
                        [eh.he.PAYPAL]: o,
                        [eh.he.PAYMENT_REQUEST]: i,
                        [eh.he.VENMO]: c,
                        [eh.he.CASH_APP]: m,
                        [eh.he.IDEAL]: u,
                        [eh.he.PRZELEWY24]: d,
                        [eh.he.EPS]: p,
                        [eh.he.BANCONTACT]: l,
                        [eh.he.GOPAY_WALLET]: l,
                        [eh.he.KAKAOPAY]: l,
                        [eh.he.GCASH]: l,
                        [eh.he.PAYSAFE_CARD]: l,
                        [eh.he.GRABPAY_MY]: l,
                        [eh.he.MOMO_WALLET]: l,
                        [eh.he.PIX]: l,
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
                PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: h,
            };
        })({ prependSteps: C, appendSteps: S }),
        [el, ei] = a.useState(V),
        [ea, es] = a.useState(null),
        [eu, ed] = a.useState(
            (function (e) {
                switch (e) {
                    case ev.pn.CREDIT_CARD_INFORMATION:
                        return q;
                    case ev.pn.CASH_APP_INFORMATION:
                        return et;
                    default:
                        return { steps: [ev.pn.ADD_PAYMENT_STEPS] };
                }
            })(V),
        );
    a.useEffect(() => {
        (0, f.IV)();
    }, []);
    let ep = (0, o.bG)([R.A], () => R.A.redirectedPaymentSourceId),
        em = (0, o.bG)([e7], () => e7.cashAppPayComponent),
        eC = { completeSteps: tt, setIsSubmittingCurrentStep: l.setIsSubmittingCurrentStep },
        eg = a.useRef(eC);
    a.useEffect(() => {
        eg.current = eC;
    }),
        a.useEffect(() => {
            let { completeSteps: e, setIsSubmittingCurrentStep: t } = eg.current;
            !(async function () {
                if (null == ep) return;
                await (0, f.$o)();
                let n = eZ.A.getPaymentSource(ep);
                null != n && (e(n), t(!1), R.A.clearRedirectedPaymentSourceId());
            })();
        }, [ep]);
    let eb = a.useCallback(
            function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                es(null), ei(e), t && I({ currentStep: el, toStep: e });
            },
            [el, I],
        ),
        eR = a.useCallback(
            (e) => {
                e$.default.track(P.HAw.PAYMENT_FLOW_ADD_SOURCE_COMPLETED, {
                    load_id: H.loadId,
                    analytics_location: b,
                    payment_source_id: e.id,
                    payment_source_type: e.type,
                    payment_source_country: e.paymentMethodCountry,
                });
            },
            [H.loadId, b],
        ),
        ej = (0, o.bG)([R.A], () => R.A.error),
        eM = a.useRef(ej);
    a.useEffect(() => {
        let e = eM.current;
        (eM.current = ej),
            null != ej &&
                ej !== e &&
                e$.default.track(P.HAw.PAYMENT_FLOW_ADD_SOURCE_ERROR, {
                    load_id: H.loadId,
                    analytics_location: b,
                    payment_source_type: eu.methodType,
                    error_code: ej.code,
                    error_message: ej.message,
                });
    }, [ej, H.loadId, b, eu.methodType]);
    let eO = a.useCallback(
            (e) => {
                eR(e),
                    (0, u.P0)(
                        (0, c.o)(void 0 !== w ? w : j.intl.string(j.t["VJPg+l"]), d.Ck.SUCCESS, {
                            position: d.xJ.BOTTOM,
                        }),
                    ),
                    A(el, e),
                    eb(V, !1);
            },
            [eb, V, el, A, w, eR],
        ),
        [eL, ek] = a.useState(null),
        {
            setPaymentSourceId: ew,
            creditCardState: eU,
            setCreditCardState: eD,
            setTokenState: eG,
            isSubmittingCurrentStep: eF,
            billingAddressState: eB,
            setBillingAddressState: eH,
            setIsSubmittingCurrentStep: eY,
            braintreeEmail: eK,
            braintreeNonce: eq,
            venmoUsername: ez,
            adyenPaymentData: eX,
            epsBankState: e2,
            setEpsBankState: e1,
            p24BankState: e4,
            setP24BankState: e3,
            selectedSkuId: e6,
        } = l,
        e5 = e6 ?? "",
        e8 = (0, o.bG)([eQ.A], () => eQ.A.get(e5), [e5]),
        e9 = e8?.eligiblePaymentGateways?.map((e) => e.valueOf());
    function tt(e) {
        ew(e.id), eO(e);
    }
    function tn() {
        ed(J), eb(ev.pn.PAYMENT_TYPE);
    }
    let tl = a.useCallback(
            (e, t) => {
                eH((n) => ({ info: { ...n.info, ...e }, isValid: t }));
            },
            [eH],
        ),
        ti = (0, tG.wD)({
            step: el,
            continueSessionToInitialStep: U,
            handleStepChange: eb,
            logger: tB,
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
            remountAddressElement: th,
            addressElementKey: tC,
        } = ti,
        tf = a.useCallback(() => {
            eb(ev.pn.ADDRESS), tG.Ky.includes(el) && th();
        }, [eb, th, el]),
        tE = a.useCallback(
            (e) => {
                null != to && (0, eo.PE)(e) ? tu(e) : eb(ev.pn.PAYMENT_TYPE);
            },
            [to, tu, eb],
        ),
        tP = O ? (0, r.jsx)(eT.A, { className: tA._8 }) : null,
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
    switch (el) {
        case ev.pn.ATTEMPT_GOOGLE_PAY:
        case ev.pn.ATTEMPT_APPLE_PAY:
        case ev.pn.PAYMENT_TYPE:
            (t = (0, r.jsx)(tv, {
                prependSteps: C,
                appendSteps: S,
                analyticsLocation: b,
                isEligibleForTrial: L,
                allowDesktopRedirectPurchase: k,
                onPaymentRequestSourceFailed: tn,
                paymentModalArgs: l,
                handleStepChange: eb,
                setPaymentMethodSteps: ed,
                setPaymentRequestPaymentMethod: ek,
                currentStep: el,
                setInfoNotice: es,
                completeSteps: tt,
                paymentSourceTypeRestrictions: e9,
                CREDIT_CARD_STEPS: q,
                PAYPAL_STEPS: Z,
                VENMO_STEPS: $,
                PAYMENT_REQUEST_STEPS: Q,
                PRZELEWY24_STEPS: X,
                EPS_STEPS: ee,
                IDEAL_STEPS: z,
                CASH_APP_STEPS: et,
                ...tg,
            })),
                (n = (0, r.jsx)(t_, {
                    shouldUseManaModal: G,
                    onReturn: y,
                    handleStepChange: eb,
                    currentStep: el,
                    ...tg,
                }));
            break;
        case ev.pn.PAYMENT_ELEMENT:
            (t = null),
                (n = (0, r.jsx)(tD, {
                    handleStepChange: eb,
                    shouldUseManaModal: G,
                    setPaymentMethodSteps: ed,
                    primarySubmitting: eF,
                    primaryDisabled: !ta,
                    onBack: () => {
                        tc(), y?.();
                    },
                    paymentModalArgs: l,
                    PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: en,
                    ...ti,
                }));
            break;
        case ev.pn.CREDIT_CARD_INFORMATION:
            let tT = async (e) => {
                eY(!0);
                try {
                    let t = await (0, f.YJ)(F, e);
                    eG({ token: t }), eb(ev.pn.ADDRESS);
                } catch (e) {
                    tB.error(e.message ?? JSON.stringify(e));
                } finally {
                    eY(!1);
                }
            };
            t = (0, r.jsx)(tW, {
                onCardInfoChange: (e, t) => {
                    eD({ info: e, isValid: t }), eH((t) => ({ ...t, info: { ...t.info, name: e.name } }));
                },
            });
            let tx = !eU.isValid,
                tN = () => {
                    eb(ev.pn.PAYMENT_TYPE);
                };
            n = (0, r.jsx)(s.ElementsConsumer, {
                children: (e) => {
                    let { elements: t } = e;
                    return (0, r.jsx)(tI, {
                        onBack: tN,
                        primaryCTA: ex.Ay.CTAType.CONTINUE,
                        primaryType: "submit",
                        primaryText: j.intl.string(j.t.PDTjLN),
                        primarySubmitting: eF,
                        primaryDisabled: tx,
                        onPrimary: () => tT(t),
                        shouldUseManaModal: G,
                    });
                },
            });
            break;
        case ev.pn.AWAITING_BROWSER_CHECKOUT:
        case ev.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
        case ev.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
            let tb = () => {
                ed(q), eb(ev.pn.PAYMENT_ELEMENT);
            };
            (t = (0, r.jsx)(eW, { step: el, onPurchaseComplete: () => A(el), onHandoffFailure: tb })),
                (n = (0, r.jsx)(eV, {
                    onPrimaryClick: tb,
                    onBackClick: () => {
                        tc(), null != y && y();
                    },
                }));
            break;
        case ev.pn.EPS_INFORMATION:
            (t = (0, r.jsx)(ef, {
                type: eh.he.EPS,
                onAccountHolderNameChange: (e) => eH({ info: { ...eB.info, name: e }, isValid: eB.isValid }),
                onEPSBankChange: (e) => e1(e),
                epsBankValue: e2,
                billingAddressInfo: eB.info,
            })),
                (n = (0, r.jsx)(tI, {
                    onBack: () => tE(eh.he.EPS),
                    primaryCTA: ex.Ay.CTAType.CONTINUE,
                    primaryText: j.intl.string(j.t.PDTjLN),
                    primaryDisabled: void 0 === e2 || "" === e2 || "" === eB.info.name,
                    onPrimary: () => tf(),
                    shouldUseManaModal: G,
                }));
            break;
        case ev.pn.IDEAL_INFORMATION:
            (t = (0, r.jsx)(ec, {
                type: eh.he.IDEAL,
                onAccountHolderNameChange: (e) => eH({ info: { ...eB.info, name: e }, isValid: eB.isValid }),
                billingAddressInfo: eB.info,
            })),
                (n = (0, r.jsx)(tI, {
                    onBack: () => eb(ev.pn.PAYMENT_TYPE),
                    primaryCTA: ex.Ay.CTAType.CONTINUE,
                    primaryText: j.intl.string(j.t.PDTjLN),
                    primaryDisabled: "" === eB.info.name,
                    onPrimary: () => tf(),
                    shouldUseManaModal: G,
                }));
            break;
        case ev.pn.PRZELEWY24_INFORMATION:
            (t = (0, r.jsx)(ef, {
                type: eh.he.PRZELEWY24,
                onNameChange: (e) => eH({ info: { ...eB.info, name: e }, isValid: eB.isValid }),
                onEmailChange: (e) => eH({ info: { ...eB.info, email: e }, isValid: eB.isValid }),
                onP24BankChange: (e) => {
                    e3(e);
                },
                p24BankValue: e4,
                billingAddressInfo: eB.info,
            })),
                (n = (0, r.jsx)(tI, {
                    onBack: () => tE(eh.he.PRZELEWY24),
                    primaryCTA: ex.Ay.CTAType.CONTINUE,
                    primaryText: j.intl.string(j.t.PDTjLN),
                    primaryDisabled:
                        void 0 === eB.info.name ||
                        "" === eB.info.name ||
                        void 0 === eB.info.email ||
                        "" === eB.info.email ||
                        void 0 === e4 ||
                        "" === e4,
                    onPrimary: () => tf(),
                    shouldUseManaModal: G,
                }));
            break;
        case ev.pn.PAYPAL_INFORMATION:
            let tR = 0 !== eK.length && null != eq;
            (t = (0, r.jsx)(tV, {})),
                (n = (0, r.jsx)(tI, {
                    onBack: () => tE(eh.he.PAYPAL),
                    primaryCTA: ex.Ay.CTAType.CONTINUE,
                    primaryText: tR ? j.intl.string(j.t.PDTjLN) : j.intl.string(j.t.Djzd7L),
                    onPrimary: () => {
                        let e;
                        return tR
                            ? tf()
                            : void (null == (e = E.A.getLastURL())
                                  ? v()
                                  : (h.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_START" }), window.open(e)));
                    },
                    shouldUseManaModal: G,
                }));
            break;
        case ev.pn.VENMO_INFORMATION:
            let tj = 0 !== ez.length && null != eq;
            (t = (0, r.jsx)(tK, {})),
                (n = (0, r.jsx)(tI, {
                    onBack: () => tE(eh.he.VENMO),
                    primaryCTA: ex.Ay.CTAType.CONTINUE,
                    primaryText: tj ? j.intl.string(j.t.PDTjLN) : j.intl.string(j.t["4KoTLM"]),
                    onPrimary: () => (tj ? tf() : void _()),
                    shouldUseManaModal: G,
                }));
            break;
        case ev.pn.PAYMENT_REQUEST_INFORMATION:
            (t = (0, r.jsx)(tZ, {})),
                (n = (0, r.jsx)(tI, { onBack: () => eb(ev.pn.PAYMENT_TYPE), shouldUseManaModal: G }));
            break;
        case ev.pn.CASH_APP_INFORMATION:
            let tM = null != eX;
            (t = (0, r.jsx)(tq, {})),
                (n = (0, r.jsx)(tI, {
                    onBack: () => tE(eh.he.CASH_APP),
                    primaryCTA: ex.Ay.CTAType.CONTINUE,
                    primaryText: tM ? j.intl.string(j.t.PDTjLN) : j.intl.string(j.t["9ALP8w"]),
                    onPrimary: () => (tM ? tf() : te()),
                    primaryDisabled: null == em,
                    shouldUseManaModal: G,
                }));
            break;
        case ev.pn.ADDRESS:
            let tO = null != to;
            (t = (0, r.jsx)(tk, {
                paymentModalArgs: l,
                paymentSourceType: eu.methodType ?? eh.he.CARD,
                shouldUsePaymentElement: tO,
            })),
                (n = (0, r.jsx)(tw, {
                    paymentModalArgs: l,
                    shouldUseManaModal: G,
                    analyticsLocation: b,
                    overwriteSubscriptionPaymentSource: D,
                    handleStepChange: eb,
                    onPaymentRequestSourceFailed: tn,
                    paymentRequestPaymentMethod: eL,
                    completeSteps: tt,
                    paymentMethodSteps: eu,
                    shouldUsePaymentElement: tO,
                    ...ti,
                }));
            break;
        case ev.pn.AWAITING_AUTHENTICATION:
            t = (0, r.jsx)(tz, {});
            break;
        default:
            throw new eE.v({ message: `Unexpected step: ${el}`, extraSentryInformation: { currentStep: el } });
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
                    (0, r.jsx)("div", { className: tA.Ns, children: (0, r.jsx)(m.w, { type: "info", children: ea }) }),
                tr &&
                    (0, r.jsx)(tG._i, {
                        step: el,
                        analyticsContext:
                            null != N ? { activitySessionId: B, contextMetadata: H, analyticsData: N } : void 0,
                        paymentElementSelectedType: to,
                        stripeElementsRef: td,
                        stripePaymentElementProps: tp,
                        stripeAddressElementProps: tm,
                        addressElementKey: tC,
                        billingAddressInfo: eB.info,
                        onSetupError: () => {
                            tc(), eb(ev.pn.PAYMENT_TYPE);
                        },
                        paymentElementFooter: ts
                            ? (0, r.jsx)(eA.Z4, {
                                  className: tA.SO,
                                  stackingBehavior: "stack",
                                  onComplete: () => {
                                      setTimeout(() => W(ev.pn.REVIEW), 0);
                                  },
                              })
                            : null,
                    }),
                t,
            ],
        }),
        tH = el === ev.pn.PAYMENT_TYPE && 0 === C.length ? null : n;
    return O
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  L && (0, r.jsx)(e_.A, { className: tA.At, isEligibleForTrial: L }),
                  (0, r.jsxs)(eN.dZ, { children: [tP, tU] }),
                  (0, r.jsx)(eN.UX, { children: tH }),
              ],
          })
        : (0, r.jsx)(e0.A, {
              shouldUseManaModal: G,
              steps: g ?? eu.steps,
              currentStep: T ?? el,
              overrideKey: tL,
              paymentError: l.paymentError,
              header: x,
              hideBreadcrumbs: M,
              body: tU,
              footer: tH,
          });
}
function t$(e) {
    let {
            defaultPaymentSourceId: t,
            paymentSources: n,
            hasFetchedPaymentSources: l,
        } = (0, o.cf)([eZ.A], () => ({
            defaultPaymentSourceId: void 0 !== e ? e : eZ.A.defaultPaymentSourceId,
            paymentSources: eZ.A.paymentSources,
            hasFetchedPaymentSources: eZ.A.hasFetchedPaymentSources,
        })),
        i = (0, o.bG)([e7], () => e7.cashAppPayComponent),
        r = (0, o.bG)([es.A], () => es.A.data?.allowed_payment_source_types ?? null);
    (0, er.Ay)(() => {
        (0, y.j)().then((e) => {
            e.client
                .create({ authorization: P.Gg3.BRAINTREE.KEY })
                .then((e) => {
                    new Promise((e, t) => {
                        let n = Date.now();
                        function l() {
                            Date.now() - n >= 5e3
                                ? t(Error("Timeout waiting for Braintree client to be initialized in store"))
                                : null != E.A.getClient()
                                  ? e()
                                  : setTimeout(l, 1e3);
                        }
                        h.h.subscribe("BRAINTREE_CREATE_CLIENT_SUCCESS", function e() {
                            h.h.unsubscribe("BRAINTREE_CREATE_CLIENT_SUCCESS", e), setTimeout(l, 0);
                        });
                    })
                        .then(() => {
                            g(), I();
                        })
                        .catch((e) => {
                            S.pM(e);
                        }),
                        h.h.dispatch({ type: "BRAINTREE_CREATE_CLIENT_SUCCESS", client: e });
                })
                .catch(() => h.h.dispatch({ type: "BRAINTREE_CREATE_CLIENT_FAIL" }));
        }),
            l || (0, f.$o)();
    }),
        a.useEffect(() => {
            null == i && null != r && r.includes(eh.he.CASH_APP) && e5();
        }, [r, i]);
    let [s, u] = a.useState(t),
        c = (0, ea.Ay)(t);
    t !== c && null != t && null == s && u(t);
    let [d, p] = a.useState(() => ({ info: tH, isValid: !1 })),
        [m, C] = a.useState(() => ({ info: tY, isValid: !1 })),
        [A, v] = a.useState(""),
        [_, T] = a.useState(""),
        [N, b] = a.useState(() => ({ token: null })),
        [j, M, O, L, k] = (0, o.yK)([R.A], () => [
            R.A.braintreeEmail,
            R.A.braintreeNonce,
            R.A.error,
            R.A.venmoUsername,
            R.A.adyenPaymentData,
        ]),
        [w, U] = (0, o.yK)([eq.A], () => [eq.A.error, eq.A.isAwaitingAuthentication]);
    a.useEffect(() => {
        function e(e) {
            let { billingAddress: t } = e;
            C({ info: t, isValid: t.country.length > 0 });
        }
        return (
            h.h.subscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e),
            () => {
                h.h.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e), (0, x.ET)();
            }
        );
    }, []);
    let [D, G] = a.useState(!1),
        [F, B] = a.useState(!1),
        [H, Y] = a.useState(null),
        W = a.useRef(null),
        V = (0, o.bG)([eq.A], () => eq.A.isAwaitingAuthentication),
        [K, q] = (0, o.yK)([ez.A], () => [ez.A.purchaseTokenAuthState, ez.A.purchaseTokenHash]);
    return (
        a.useEffect(() => {
            null != H && null != W.current && W.current.scrollIntoView({ behavior: "smooth" });
        }, [H]),
        {
            paymentSources: n,
            paymentSourceId: s,
            hasFetchedPaymentSources: l,
            setPaymentSourceId: u,
            creditCardState: d,
            setCreditCardState: p,
            tokenState: N,
            setTokenState: b,
            billingAddressState: m,
            setBillingAddressState: C,
            isSubmittingCurrentStep: D,
            setIsSubmittingCurrentStep: G,
            hasRedirectURL: F,
            setHasRedirectURL: B,
            braintreeEmail: j,
            braintreeNonce: M,
            venmoUsername: L,
            adyenPaymentData: k,
            paymentError: null != w ? w : O,
            paymentAuthenticationState: U ? eX.oc.PENDING : null != w ? eX.oc.ERROR : eX.oc.NONE,
            purchaseError: H,
            setPurchaseError: Y,
            purchaseErrorBlockRef: W,
            isAuthenticating: V,
            purchaseTokenAuthState: K,
            purchaseTokenHash: q,
            epsBankState: _,
            setEpsBankState: T,
            p24BankState: A,
            setP24BankState: v,
        }
    );
}
