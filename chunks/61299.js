n.d(t, { Y: () => tQ, _V: () => tJ });
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
    A = n(70142),
    f = n(739508),
    y = n(184015),
    S = n(723702),
    P = n(652215);
function T() {
    let e = A.A.getClient();
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
function I() {
    let e = A.A.getClient();
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
function _() {
    let e = A.A.getPayPalClient();
    if (null == e) throw Error("braintree paypal client must be initialized before calling this");
    h.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_START" });
    let t = Promise.resolve("");
    (0, S.isDesktop)() && (t = (0, E.jf)(P.hes.PAYPAL)),
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
                      f.pM(Error(`Braintree Paypal Error: ${t} ${n} ${l}`)));
            });
}
function g() {
    let e = A.A.getVenmoClient();
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
                      f.pM(Error(`Braintree Venmo Error: ${t} ${n} ${l}`)));
            });
}
function v(e, t) {
    if (null == e) return Promise.resolve();
    h.h.dispatch(t);
    try {
        return Promise.resolve(e.teardown());
    } catch (e) {
        return Promise.resolve();
    }
}
var x = n(391048),
    N = n(292666),
    b = n(812745),
    R = n(825755),
    M = n(375708);
class O extends a.PureComponent {
    componentDidMount() {
        null != this.props.paypalClient && _();
    }
    componentDidUpdate(e) {
        null == e.paypalClient && null != this.props.paypalClient && _();
    }
    componentWillUnmount() {
        v(A.A.getPayPalClient(), { type: "BRAINTREE_TEARDOWN_PAYPAL_CLIENT" }).then(() => {
            null != A.A.getClient() && I();
        });
    }
    render() {
        let { braintreeEmail: e, paypalClient: t } = this.props;
        return (0, r.jsx)(N.k, {
            label: M.intl.string(M.t.QQBAos),
            leading: { type: "image", src: (0, b.Nj)(b.Ay.Types.PAYPAL) },
            value: e,
            readOnly: !0,
            placeholder: null == t ? M.intl.string(M.t.dte2M9) : M.intl.string(M.t.hopw7X),
        });
    }
}
let j = o.Ay.connectStores([A.A, R.A], () => ({
    braintreeEmail: R.A.braintreeEmail,
    paypalClient: A.A.getPayPalClient(),
}))(O);
var L = n(534514),
    w = n(834730),
    D = n(504998);
class k extends a.PureComponent {
    componentDidMount() {
        null != this.props.venmoClient && g();
    }
    componentDidUpdate(e) {
        null == e.venmoClient && null != this.props.venmoClient && g();
    }
    componentWillUnmount() {
        v(A.A.getVenmoClient(), { type: "BRAINTREE_TEARDOWN_VENMO_CLIENT" }).then(() => {
            null != A.A.getClient() && T();
        });
    }
    render() {
        let { venmoUsername: e, className: t, venmoClient: n } = this.props,
            l = null != e && "" !== e;
        return (0, r.jsxs)("div", {
            className: t,
            children: [
                (0, r.jsx)(b.Ay, { type: b.Ay.Types.VENMO, size: b.y3.MEDIUM, className: D.Z }),
                l
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(L.D, {
                                  variant: e.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
                                  className: D.y,
                                  children: M.intl.format(M.t.DowIre, { venmoUsername: e }),
                              }),
                              (0, r.jsx)(w.E, {
                                  variant: "text-md/medium",
                                  className: D.y,
                                  children: M.intl.string(M.t.kmEvnR),
                              }),
                          ],
                      })
                    : (0, r.jsx)(w.E, {
                          variant: "text-md/medium",
                          className: D.y,
                          children: null == n ? M.intl.string(M.t["2ouZDU"]) : M.intl.string(M.t.mIL6Jb),
                      }),
            ],
        });
    }
}
let U = o.Ay.connectStores([A.A, R.A], () => ({ venmoUsername: R.A.venmoUsername, venmoClient: A.A.getVenmoClient() }))(
    k,
);
var G = n(891197),
    F = n(503698),
    B = n.n(F),
    Y = n(305866),
    H = n(287809),
    W = n(832208),
    V = n(661531),
    K = n(602853),
    Z = n(511274),
    q = n(670739),
    z = n(661772);
let $ = function (e) {
    let t = a.useRef(null),
        { stripeType: n, flipped: l, updateCompleted: i, onFocus: o, onBlur: u } = e,
        [c, d] = a.useState(b.Be.UNKNOWN),
        [p, m] = a.useState(!1),
        [h, C] = a.useState(!1),
        [E, A] = a.useState(null),
        [f, y] = a.useState({}),
        S = (0, s.useElements)(),
        P = a.useCallback(() => {
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
        T = a.useCallback(
            (e) => {
                h || e.empty || C(!0), null != i && i(e.complete), null != e.error && m(!1);
            },
            [h, i],
        ),
        I = a.useCallback(() => {
            m(!0), o?.();
        }, [o]),
        _ = a.useCallback(() => {
            m(!1), u?.();
        }, [u]),
        g = a.useCallback(() => {
            if (null != S)
                switch (n) {
                    case "cardNumber": {
                        let e = S.getElement(s.CardNumberElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            c !== e.brand && d(e.brand),
                                e.empty && h
                                    ? A(M.intl.string(M.t.eOIfuy))
                                    : null != e.error
                                      ? A(M.intl.string(M.t.x4pWtJ))
                                      : A(null),
                                T(e);
                        }),
                            e.on("focus", I),
                            e.on("blur", _);
                        break;
                    }
                    case "cardExpiry": {
                        let e = S.getElement(s.CardExpiryElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            null != e.error || (e.empty && h) ? A(M.intl.string(M.t["9/zZdl"])) : A(null), T(e);
                        }),
                            e.on("focus", I),
                            e.on("blur", _);
                        break;
                    }
                    case "cardCvc": {
                        let e = S.getElement(s.CardCvcElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            null != e.error || (e.empty && h) ? A(M.intl.string(M.t.ro4isZ)) : A(null), T(e);
                        }),
                            e.on("focus", I),
                            e.on("blur", _);
                    }
                }
        }, [_, T, I, c, S, h, n]);
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
        return B()(q.vB, { [q.Tn]: null !== E, [q.iH]: p, [q.yD]: "cardNumber" === n });
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
                    "::placeholder": { color: v },
                },
            });
        }, [t, v, x]),
        (0, r.jsxs)("div", {
            className: q.Zm,
            "data-stripe-type": n,
            children: [
                (0, r.jsx)("div", { ref: t, className: B()(q.iw, z.hF) }),
                (function () {
                    switch (n) {
                        case "cardNumber":
                            return (0, r.jsxs)("div", {
                                children: [
                                    (0, r.jsx)(b.Ay, { className: q.Ie, type: c, flipped: l }),
                                    (0, r.jsx)(s.CardNumberElement, {
                                        options: { style: f, placeholder: M.intl.string(M.t.gPRHfw), disableLink: !1 },
                                        className: N(),
                                    }),
                                ],
                            });
                        case "cardExpiry":
                            return (0, r.jsx)(s.CardExpiryElement, {
                                options: { style: f, placeholder: M.intl.string(M.t.xeEWQ6) },
                                className: N(),
                            });
                        case "cardCvc":
                            return (0, r.jsx)(s.CardCvcElement, {
                                options: { style: f, placeholder: M.intl.string(M.t.wZz04F) },
                                className: N(),
                            });
                    }
                })(),
                (0, r.jsx)(Z.U, { error: E }),
            ],
        })
    );
};
var Q = n(142970),
    J = n(863991);
let X = function (e) {
    let { onCardInfoChange: t, error: n } = e,
        l = a.useRef(t),
        [i, s] = a.useState(!1),
        [o, u] = a.useState({}),
        [c, d] = a.useState({ name: "", country: "", postalCode: "" }),
        [p, m] = a.useState({}),
        [h, C] = a.useState({}),
        { setFocusLockDisabled: E } = a.useContext(Y.M);
    a.useEffect(() => () => {
        void 0 !== E && E(!1);
    });
    let A = a.useCallback(() => {
        void 0 !== E && E(!0);
    }, [E]);
    function f(e, t) {
        !!o[e] !== t && u((n) => ({ ...n, [e]: t }));
    }
    let y = a.useCallback(
        function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = {};
            return (e || p.name) && "" === c.name && (t.name = M.intl.string(M.t.lIkVsi)), t;
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
                H.default.getCurrentUser()?.nsfwAllowed
                    ? (0, r.jsxs)("div", {
                          className: Q.Rm,
                          children: [
                              (0, r.jsx)("div", { className: B()(b.y3.SMALL, Q.eo, Q.Ud) }),
                              (0, r.jsx)("div", { className: B()(b.y3.SMALL, Q.DR, Q.Ud) }),
                              (0, r.jsx)("div", { className: B()(b.y3.SMALL, Q.k4, Q.Ud) }),
                              (0, r.jsx)("div", { className: B()(b.y3.SMALL, Q.a3, Q.Ud) }),
                              (0, r.jsx)("div", { className: B()(b.y3.SMALL, Q.CY, Q.Ud) }),
                              (0, r.jsx)("div", { className: B()(b.y3.SMALL, Q.Q5, Q.Ud) }),
                              (0, r.jsx)("div", { className: B()(b.y3.SMALL, Q.YA, Q.Ud) }),
                          ],
                      })
                    : (0, r.jsxs)("div", {
                          className: Q.Rm,
                          children: [
                              (0, r.jsx)("div", { className: B()(b.y3.SMALL, Q.aq, Q.Ud) }),
                              (0, r.jsx)("div", { className: B()(b.y3.SMALL, Q.VX, Q.Ud) }),
                              (0, r.jsx)("div", { className: B()(b.y3.SMALL, Q.Yi, Q.Ud) }),
                              (0, r.jsx)("div", { className: B()(b.y3.SMALL, Q.qR, Q.Ud) }),
                              (0, r.jsx)("div", { className: B()(b.y3.SMALL, Q.m2, Q.Ud) }),
                              (0, r.jsx)("div", { className: B()(b.y3.SMALL, Q.Ij, Q.Ud) }),
                              (0, r.jsx)("div", { className: B()(b.y3.SMALL, Q._V, Q.Ud) }),
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
                                        (0, r.jsx)($, {
                                            stripeType: "cardNumber",
                                            flipped: i,
                                            updateCompleted: (e) => f("cardNumber", e),
                                            onFocus: A,
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
                                        (0, r.jsx)($, {
                                            stripeType: "cardExpiry",
                                            updateCompleted: (e) => f("cardExpiry", e),
                                            onFocus: A,
                                        }),
                                },
                                {
                                    id: "card-cvc",
                                    name: "cardCvc",
                                    title: () => M.intl.string(M.t.Fd3rOz),
                                    getClassNameForLayout: () => J.ep,
                                    renderInput: () =>
                                        (0, r.jsx)($, {
                                            stripeType: "cardCvc",
                                            updateCompleted: (e) => f("cardCvc", e),
                                            onFocus: () => {
                                                A(), s(!0);
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
                            l[t] && "" === e ? "name" === t && (i.name = M.intl.string(M.t.lIkVsi)) : delete i[t],
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
var en = n(567333);
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
        a = null != i ? b.Ay.getType(i.brand) : b.Ay.Types.UNKNOWN;
    return (0, r.jsx)("div", {
        className: t,
        children: (0, r.jsx)(N.k, {
            label: M.intl.string(M.t["mmDvV+"]),
            leading: { type: "image", src: (0, b.Nj)(a) },
            value: n && null != i ? M.intl.formatToPlainString(M.t.bCynoK, i) : void 0,
            readOnly: !0,
            placeholder: M.intl.string(M.t.bWMH78),
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
    em = n(331322),
    eh = n(736653),
    eC = n(818348),
    eE = n(600954);
let eA = function (e) {
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
                        (0, r.jsxs)(em.B, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(w.E, { variant: "text-sm/semibold", children: M.intl.string(M.t.De3b8t) }),
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
                            label: M.intl.string(M.t.sN3wrd),
                            inputRef: n,
                            name: M.intl.string(M.t.sN3wrd),
                            placeholder: M.intl.string(M.t.sN3wrd),
                            onChange: (e) => i(e),
                            value: u.name,
                        }),
                        (0, r.jsxs)(em.B, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(w.E, { variant: "text-sm/semibold", children: M.intl.string(M.t.dFyV07) }),
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
var ef = n(71804),
    ey = n(31823);
n(426398), n(211083);
var eS = n(944355);
n(21713);
var eP = n(6938),
    eT = n(783327),
    eI = n(626584),
    e_ = n(166532),
    eg = n(69494),
    ev = n(901930),
    ex = n(19311),
    eN = n(482132),
    eb = n(615310),
    eR = n(364840),
    eM = n(73825),
    eO = n(558620),
    ej = n(683433),
    eL = n(36167),
    ew = n(937008),
    eD = (((i = {})[(i.UNKNOWN = 0)] = "UNKNOWN"), (i[(i.PENDING = 1)] = "PENDING"), (i[(i.DONE = 2)] = "DONE"), i);
let ek = 0,
    eU = null,
    eG = null,
    eF = null;
class eB extends o.Ay.Store {
    static displayName = "BrowserCheckoutStateStore";
    get browserCheckoutState() {
        return ek;
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
let eY = new eB(h.h, {
    USER_PAYMENT_BROWSER_CHECKOUT_STARTED: function (e) {
        (ek = 1), (eU = e.loadId);
    },
    USER_PAYMENT_BROWSER_CHECKOUT_DONE: function (e) {
        eU === e.loadId && ((eG = e.skuId ?? null), (eF = e.skuSubscriptionPlanId ?? null), (ek = 2));
    },
});
var eH = n(202541),
    eW = n(790262);
let eV = (e) => {
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
        } = (0, o.cf)([eY], () => ({
            browserCheckoutState: eY.browserCheckoutState,
            browserCheckoutStateLoadId: eY.loadId,
            browserCheckoutStateSkuId: eY.skuId,
            browserCheckoutStatePlanId: eY.planId,
        })),
        C = (0, eO.A)(),
        { isGift: A } = (0, ew.Pv)(),
        [f, y] = a.useState(!1);
    switch (n) {
        case e_.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
            t = P.do8.GOOGLE_PAY;
            break;
        case e_.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
            t = P.do8.APPLE_PAY;
    }
    return (
        a.useEffect(() => {
            let e = setTimeout(() => {
                f ||
                    (y(!0),
                    (0, E.Ze)(c.loadId),
                    (0, eL.my)(
                        {
                            planId: C?.id ?? eH.gD.PREMIUM_MONTH_TIER_2,
                            isGift: A,
                            loadId: c.loadId,
                            paymentMethodType: t,
                        },
                        i,
                    ));
            }, 1e3);
            return () => clearTimeout(e);
        }, [C, A, c, i, y, f, t]),
        a.useEffect(() => {
            null !== m && (eH.oz.includes(m) && ((0, eM.ur)(m), (0, E.hP)()), s(m)),
                null !== h && u(h),
                p === c.loadId && d === eD.DONE && l();
        }, [s, u, d, p, m, h, c, l]),
        (0, r.jsxs)("div", {
            className: eW.rf,
            children: [
                (0, r.jsx)(L.D, { variant: "heading-xl/bold", children: M.intl.string(M.t.C4HYfy) }),
                (0, r.jsx)(w.E, { variant: "text-md/normal", className: eW.h_, children: M.intl.string(M.t.xfG7Jp) }),
            ],
        })
    );
};
function eK(e) {
    let { onPrimaryClick: t, onBackClick: n } = e;
    return (0, r.jsx)(eR.j, {
        children: (0, r.jsxs)("div", {
            className: eW.kL,
            children: [
                (0, r.jsx)(ej.A, { onClick: n }),
                (0, r.jsx)(ej.F, { onClick: t, children: M.intl.string(M.t["4Qvmmj"]) }),
            ],
        }),
    });
}
var eZ = n(615405),
    eq = n(153084),
    ez = n(295405),
    e$ = n(71319),
    eQ = n(67480),
    eJ = n(174459),
    eX = n(427262),
    e0 = n(251913),
    e2 = n(632638),
    e3 = n(632088);
let e1 = null,
    e4 = null;
class e7 extends o.Ay.Store {
    static displayName = "AdyenStore";
    get client() {
        return e1;
    }
    get cashAppPayComponent() {
        return e4;
    }
}
let e6 = new e7(h.h, {
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
                                        (n = !1), (t = M.intl.string(M.t.TJ8dDB));
                                }
                                (0, E.i0)(e.message, n, t);
                            }
                        },
                    })
                    .mount(`#${e3.h}`);
                h.h.dispatch({ type: "ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS", component: t });
            })(l);
    } catch (e) {
        (0, f.pM)(e), h.h.dispatch({ type: "ADYEN_CREATE_CLIENT_FAIL" });
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
var tn = n(735841);
function tl(e) {
    let { className: t } = e,
        n = (0, o.bG)([e6], () => e6.cashAppPayComponent),
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
            (0, r.jsx)(b.Ay, { type: b.Ay.Types.CASH_APP, size: b.y3.MEDIUM, className: tn.K }),
            s
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(L.D, {
                              variant: i.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
                              className: tn.y,
                              children: M.intl.format(M.t["ze/1yE"], { cashtag: i }),
                          }),
                          (0, r.jsx)(w.E, {
                              variant: "text-md/medium",
                              className: tn.y,
                              children: M.intl.string(M.t.VPOx7N),
                          }),
                      ],
                  })
                : (0, r.jsx)(w.E, {
                      variant: "text-md/medium",
                      className: tn.y,
                      children: null == n ? M.intl.string(M.t["CgVe/w"]) : M.intl.string(M.t["1MqcjI"]),
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
let tc = [e_.pn.PAYMENT_TYPE],
    td = [e_.pn.PAYMENT_TYPE, e_.pn.CREDIT_CARD_INFORMATION, e_.pn.ADDRESS],
    tp = [e_.pn.PAYMENT_TYPE, e_.pn.PAYPAL_INFORMATION, e_.pn.ADDRESS],
    tm = [e_.pn.PAYMENT_TYPE, e_.pn.VENMO_INFORMATION, e_.pn.ADDRESS],
    th = [e_.pn.PAYMENT_TYPE, e_.pn.CASH_APP_INFORMATION, e_.pn.ADDRESS],
    tC = [e_.pn.PAYMENT_TYPE, e_.pn.PRZELEWY24_INFORMATION, e_.pn.ADDRESS],
    tE = [e_.pn.PAYMENT_TYPE, e_.pn.EPS_INFORMATION, e_.pn.ADDRESS],
    tA = [e_.pn.PAYMENT_TYPE, e_.pn.IDEAL_INFORMATION, e_.pn.ADDRESS],
    tf = [e_.pn.PAYMENT_TYPE, e_.pn.ADDRESS],
    ty = {
        SHARED_ADD_PAYMENT_STEPS: tc,
        SHARED_CREDIT_CARD_STEPS: td,
        SHARED_PAYPAL_STEPS: tp,
        SHARED_VENMO_STEPS: tm,
        SHARED_PRZELEWY24_STEPS: tC,
        SHARED_EPS_STEPS: tE,
        SHARED_IDEAL_STEPS: tA,
        SHARED_CASH_APP_STEPS: th,
        SHARED_TYPE_AND_ADDRESS_STEPS: tf,
    },
    tS = {
        SHARED_ADD_PAYMENT_STEPS: [e_.pn.PAYMENT_ELEMENT],
        SHARED_CREDIT_CARD_STEPS: [e_.pn.PAYMENT_ELEMENT, e_.pn.ADDRESS],
        SHARED_PAYPAL_STEPS: [e_.pn.PAYMENT_ELEMENT, e_.pn.PAYPAL_INFORMATION, e_.pn.ADDRESS],
        SHARED_VENMO_STEPS: [e_.pn.PAYMENT_ELEMENT, e_.pn.VENMO_INFORMATION, e_.pn.ADDRESS],
        SHARED_CASH_APP_STEPS: [e_.pn.PAYMENT_ELEMENT, e_.pn.CASH_APP_INFORMATION, e_.pn.ADDRESS],
        SHARED_PRZELEWY24_STEPS: [e_.pn.PAYMENT_ELEMENT, e_.pn.PRZELEWY24_INFORMATION, e_.pn.ADDRESS],
        SHARED_EPS_STEPS: [e_.pn.PAYMENT_ELEMENT, e_.pn.EPS_INFORMATION, e_.pn.ADDRESS],
        SHARED_IDEAL_STEPS: [e_.pn.PAYMENT_ELEMENT, e_.pn.ADDRESS],
        SHARED_TYPE_AND_ADDRESS_STEPS: [e_.pn.PAYMENT_ELEMENT, e_.pn.ADDRESS],
    };
var tP = n(710617);
function tT(e) {
    return () => (null != R.A.error && (0, x.ET)(), e());
}
function tI(e) {
    let { onPrimary: t, onBack: n, ...l } = e,
        i = t;
    null != t && (i = tT(t));
    let a = n;
    return null != n && (a = tT(n)), (0, r.jsx)(ex.Ay, { ...l, onPrimary: i, onBack: a });
}
function t_(e) {
    let { paymentSourceTypeRestrictions: t } = e,
        n = null != t && t.length > 0 ? tu.fU.ADD_NEW_PAYMENT_METHOD : void 0,
        { enabled: l } = (0, tr.c)({ location: "AddPaymentStep" });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(tu.je, { paymentRestrictionBannerType: n }),
            (0, r.jsx)(ti.A, { ...e }),
            l && (0, r.jsx)(eS.Z4, { className: tP.SO }),
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
            CREDIT_CARD_STEPS: A,
            PAYPAL_STEPS: f,
            VENMO_STEPS: y,
            PAYMENT_REQUEST_STEPS: P,
            PRZELEWY24_STEPS: T,
            EPS_STEPS: I,
            IDEAL_STEPS: _,
            CASH_APP_STEPS: g,
            setConnectorPaymentRequestReady: v,
            connectorPaymentRequestRef: N,
        } = e,
        { activitySessionId: b } = (0, ey.V)(),
        O = (0, eP.t4)((e) => e.contextMetadata),
        { setBillingAddressState: j } = o;
    function L(e, l) {
        switch (e) {
            case eC.he.CARD:
                a ? u(e_.pn.AWAITING_BROWSER_CHECKOUT) : (c(A), u(e_.pn.CREDIT_CARD_INFORMATION));
                break;
            case eC.he.PAYPAL:
                c(f), u(e_.pn.PAYPAL_INFORMATION);
                break;
            case eC.he.VENMO:
                c(y), u(e_.pn.VENMO_INFORMATION);
                break;
            case eC.he.PAYMENT_REQUEST:
                a && "googlePay" === l
                    ? u(e_.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY)
                    : a && "applePay" === l
                      ? u(e_.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY)
                      : (c(P), u(e_.pn.PAYMENT_REQUEST_INFORMATION));
                break;
            case eC.he.PRZELEWY24:
                c(T), u(e_.pn.PRZELEWY24_INFORMATION);
                break;
            case eC.he.EPS:
                c(I), u(e_.pn.EPS_INFORMATION);
                break;
            case eC.he.IDEAL:
                c(_), u(e_.pn.IDEAL_INFORMATION);
                break;
            case eC.he.CASH_APP:
                c(g), u(e_.pn.CASH_APP_INFORMATION);
                break;
            case eC.he.GIROPAY:
            case eC.he.PAYSAFE_CARD:
            case eC.he.GCASH:
            case eC.he.GRABPAY_MY:
            case eC.he.MOMO_WALLET:
            case eC.he.KAKAOPAY:
            case eC.he.GOPAY_WALLET:
            case eC.he.BANCONTACT:
                c({ steps: [...t, ...tf, ...n], methodType: e }), u(e_.pn.ADDRESS);
        }
        null != R.A.error && (0, x.ET)();
    }
    async function w(e, t) {
        if (((0, x.mf)(e), null == e)) return void s();
        d(e);
        let { billingAddressInfo: n } = (0, to.uK)(e),
            i = (0, ta.Qd)(n);
        if (((null == n.name || "" === n.name) && null != t && (n.name = t), j({ isValid: i, info: n }), !i))
            return void u(e_.pn.ADDRESS);
        try {
            var r;
            (r = await (0, E.Tv)(e, n, l)), j((e) => ({ ...e, info: n })), c(P), h(r);
        } catch (e) {
            s();
        }
    }
    if (p === e_.pn.ATTEMPT_GOOGLE_PAY || p === e_.pn.ATTEMPT_APPLE_PAY) {
        let e = M.intl.string(p === e_.pn.ATTEMPT_APPLE_PAY ? M.t.czhXDv : M.t.Zj2xQ0);
        return (0, r.jsx)(ts.V, {
            onChooseType: L,
            paymentRequestWallet: p === e_.pn.ATTEMPT_APPLE_PAY ? "applePay" : "googlePay",
            onStripePaymentMethodReceived: w,
            onPaymentRequestFailure: () => {
                L(eC.he.CARD), m(e);
            },
            onValidPaymentRequest: () => v(!0),
            paymentRequestRef: N,
        });
    }
    let D = !(0, S.isDesktop)() || a;
    return (0, r.jsx)(t_, {
        onChooseType: L,
        onStripePaymentMethodReceived: w,
        paymentRequestWallets: D ? ["googlePay", "applePay"] : [],
        isEligibleForTrial: i,
        paymentRequestPaymentContext: { contextMetadata: O, activitySessionId: b },
        paymentSourceTypeRestrictions: C,
    });
}
function tv(e) {
    let {
        onReturn: t,
        shouldUseManaModal: n,
        handleStepChange: l,
        currentStep: i,
        connectorPaymentRequestReady: a,
        showConnectorPaymentRequest: s,
    } = e;
    if (i === e_.pn.ATTEMPT_GOOGLE_PAY || i === e_.pn.ATTEMPT_APPLE_PAY) {
        let e = M.intl.string(i === e_.pn.ATTEMPT_APPLE_PAY ? M.t.WoXvJL : M.t.wnVVr0);
        return (0, r.jsx)(tI, {
            onBack: () => l(e_.pn.PAYMENT_TYPE),
            primaryCTA: ex.Ay.CTAType.CONTINUE,
            primaryText: e,
            onPrimary: () => s(),
            primaryDisabled: !a,
            shouldUseManaModal: n,
        });
    }
    return (0, r.jsx)(tI, { onBack: t, shouldUseManaModal: n });
}
var tx = n(198970),
    tN = n(116673),
    tb = n(773669);
let tR = (e) => {
    let t,
        { billingAddressInfo: n, billingError: l, onBillingAddressChange: i, paymentSourceType: s } = e,
        u = null != l && (null == l.code || et(l) === ee.ADDRESS),
        c = (0, o.bG)([tb.default], () => tb.default.locale);
    switch (s) {
        case P.hes.GIROPAY:
        case P.hes.PAYSAFE_CARD:
        case P.hes.GCASH:
        case P.hes.GRABPAY_MY:
        case P.hes.MOMO_WALLET:
        case P.hes.KAKAOPAY:
        case P.hes.GOPAY_WALLET:
        case P.hes.BANCONTACT:
            t = "en-US" === c ? tx.Ay.Layouts.MODAL_US_WITH_NAME : tx.Ay.Layouts.MODAL_INTL_WITH_NAME;
            break;
        case P.hes.VENMO:
        case P.hes.CASH_APP:
            t = tx.Ay.Layouts.MODAL_US_WITH_NAME;
            break;
        default:
            t = "en-US" === c ? tx.Ay.Layouts.MODAL_US : tx.Ay.Layouts.MODAL_INTL;
    }
    let d = (0, tN.z)();
    0 === n.country.length && null != d && d.length > 0 && (n.country = d[0]);
    let p = (0, o.bG)([H.default], () => H.default.getCurrentUser()?.storeCountry?.isLocked === !0)
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
            (0, r.jsx)(tx.Ay, {
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
var tM = n(908166),
    tO = n(930767),
    tj = n(891640);
let tL = new eI.A("AddPaymentAddressStep.tsx");
function tw(e) {
    let { billingAddressInfo: t, onBillingAddressChange: n, paymentSourceType: l } = e,
        i = (0, o.bG)([R.A], () => R.A.error);
    return (0, r.jsx)(tR, { billingAddressInfo: t, billingError: i, onBillingAddressChange: n, paymentSourceType: l });
}
function tD(e) {
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
            lastConfirmedSetupIntentRef: h,
            shouldUsePaymentElement: C,
        } = e,
        E = (0, eT.S)(),
        { createSetupIntent: A } = (0, tM.x)(),
        {
            isSubmittingCurrentStep: f,
            billingAddressState: y,
            setIsSubmittingCurrentStep: S,
            hasRedirectURL: P,
            setHasRedirectURL: T,
            isAuthenticating: I,
        } = t;
    async function _() {
        S(!0);
        let e = C ? d : c.methodType,
            n = m.current,
            r = null != e && (0, tj.i)(e) ? tj.F[e] : null;
        if (null == r)
            throw new tO.v({
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
                createSetupIntent: A,
                onPaymentRequestSourceFailed: s,
                paymentRequestPaymentMethod: o,
                overwriteSubscriptionPaymentSource: i,
            });
            "redirect-url" === e.responseType ? T(e.hasRedirectURL) : u(e.paymentSource), P || S(!1);
        } catch (e) {
            S(!1), tL.warn(`Error confirming submitting Address Step for Payment Source Type: ${g}`, e);
        }
    }
    let g = c.methodType,
        { backStep: v } = C
            ? { backStep: e_.pn.PAYMENT_ELEMENT }
            : (function (e) {
                  switch (e) {
                      case eC.he.CARD:
                          return { backStep: e_.pn.CREDIT_CARD_INFORMATION };
                      case eC.he.PAYPAL:
                          return { backStep: e_.pn.PAYPAL_INFORMATION };
                      case eC.he.VENMO:
                          return { backStep: e_.pn.VENMO_INFORMATION };
                      case eC.he.GIROPAY:
                      case eC.he.PAYSAFE_CARD:
                      case eC.he.GCASH:
                      case eC.he.GRABPAY_MY:
                      case eC.he.MOMO_WALLET:
                      case eC.he.KAKAOPAY:
                      case eC.he.GOPAY_WALLET:
                      case eC.he.BANCONTACT:
                          return { backStep: e_.pn.PAYMENT_TYPE };
                      case eC.he.EPS:
                          return { backStep: e_.pn.EPS_INFORMATION };
                      case eC.he.IDEAL:
                          return { backStep: e_.pn.IDEAL_INFORMATION };
                      case eC.he.PRZELEWY24:
                          return { backStep: e_.pn.PRZELEWY24_INFORMATION };
                      case eC.he.CASH_APP:
                          return { backStep: e_.pn.CASH_APP_INFORMATION };
                      default:
                          return { backStep: e_.pn.PAYMENT_TYPE };
                  }
              })(g),
        x = C ? () => p(void 0) : () => a(v);
    return (0, r.jsx)(tI, {
        onBack: x,
        primaryCTA: ex.Ay.CTAType.CONTINUE,
        primaryText: M.intl.string(M.t.PDTjLN),
        primarySubmitting: f,
        primaryDisabled: !y.isValid || I,
        onPrimary: _,
        shouldUseManaModal: n,
    });
}
let tU = new eI.A("PaymentElementStepFooter.tsx");
function tG(e) {
    let t = (0, eT.S)(),
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
        { paymentElementSelectedType: h, stripeElementsRef: C, remountAddressElement: A } = e,
        f = a.useCallback(async () => {
            p(!0);
            try {
                if (null == h || !(0, eu.PE)(h)) throw (0, E.ne)("Valid Payment Element source type not found", !0);
                let { steps: e, methodType: n } = d[h];
                s({ steps: e, methodType: n === eC.he.UNKNOWN ? h : n });
                let l = tj.F[h];
                if (null != l && null != l.submitPaymentElementStepHandler) {
                    await l.submitPaymentElementStepHandler({
                        stripe: t,
                        stripeElements: C.current,
                        remountAddressElement: A,
                        setBillingAddressState: m,
                    }),
                        i(l.stepAfterPaymentElement ?? e_.pn.ADDRESS);
                    return;
                }
                let r = (0, eu.eI)(h);
                if (null != r) return void i(r);
                i(e_.pn.ADDRESS);
            } catch (e) {
                tU.error("Error on submitting Payment Element step: ", e.message ?? JSON.stringify(e));
            } finally {
                p(!1);
            }
        }, [h, d, C, A, i, t, s, p, m]);
    return (0, r.jsx)(tI, {
        onBack: o,
        primaryCTA: ex.Ay.CTAType.CONTINUE,
        primaryType: "submit",
        primaryText: M.intl.string(M.t.PDTjLN),
        primarySubmitting: u,
        primaryDisabled: c,
        onPrimary: f,
        shouldUseManaModal: n,
    });
}
var tF = n(447952),
    tB = n(394549);
let tY = new eI.A("AddPaymentStep.tsx"),
    tH = { name: "", cardNumber: "", expirationDate: "", cvc: "" },
    tW = { email: "", name: "", country: "", line1: "", line2: "", city: "", postalCode: "", state: "" };
function tV(e) {
    let { onCardInfoChange: t } = e,
        n = (0, o.bG)([R.A], () => R.A.error);
    return (0, r.jsx)(el, { billingError: n, onCardInfoChange: t });
}
function tK() {
    return (0, r.jsx)(j, {});
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
function t$() {
    return (0, r.jsx)(G.N, {});
}
function tQ(e) {
    let t,
        n,
        {
            paymentModalArgs: l,
            initialStep: i,
            prependSteps: C,
            appendSteps: f,
            onReturn: y,
            onComplete: S,
            onStepChange: T,
            breadcrumpSteps: I,
            currentBreadcrumpStep: v,
            header: x,
            analyticsData: N,
            analyticsLocation: b,
            hideBreadcrumbs: O = !1,
            usePaymentModalStep: j = !1,
            isEligibleForTrial: L = !1,
            allowDesktopRedirectPurchase: w = !1,
            toastContent: D,
            continueSessionToInitialStep: k,
            overwriteSubscriptionPaymentSource: U = !1,
            shouldUseManaModal: G = !0,
        } = e,
        F = (0, eT.S)(),
        { activitySessionId: B } = (0, ey.V)(),
        { enabled: Y } = (0, es.Y)({ location: "AddPaymentFlow" }),
        { contextMetadata: H, clearFetchSetupIntent: W } = (0, eP.t4)((e) => ({
            contextMetadata: e.contextMetadata,
            clearFetchSetupIntent: e.clearFetchSetupIntent,
        })),
        V = (0, eb.l)();
    (0, er.l0)(W);
    let K = a.useMemo(() => {
            let e = i === e_.pn.PAYMENT_TYPE || i === e_.pn.PAYMENT_ELEMENT;
            return Y && e ? (w ? e_.pn.AWAITING_BROWSER_CHECKOUT : e_.pn.PAYMENT_ELEMENT) : i;
        }, [Y, i, w]),
        Z = a.useMemo(() => (0, eX.Gn)(), []),
        {
            CREDIT_CARD_STEPS: q,
            PAYPAL_STEPS: z,
            IDEAL_STEPS: $,
            PAYMENT_REQUEST_STEPS: Q,
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
                                        ...(i && (null == r || r === eC.he.UNKNOWN || (0, eu.PE)(r)) ? tS[t] : ty[t]),
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
        })({ prependSteps: C, appendSteps: f, paymentElementsEnabled: Y }),
        [ei, ea] = a.useState(K),
        [eo, ec] = a.useState(null),
        [ep, em] = a.useState(
            (function (e) {
                switch (e) {
                    case e_.pn.CREDIT_CARD_INFORMATION:
                        return q;
                    case e_.pn.CASH_APP_INFORMATION:
                        return en;
                    default:
                        return { steps: [e_.pn.ADD_PAYMENT_STEPS] };
                }
            })(K),
        );
    a.useEffect(() => {
        (0, E.IV)();
    }, []);
    let eh = (0, o.bG)([R.A], () => R.A.redirectedPaymentSourceId),
        eE = (0, o.bG)([e6], () => e6.cashAppPayComponent),
        eI = { completeSteps: tl, setIsSubmittingCurrentStep: l.setIsSubmittingCurrentStep },
        eR = a.useRef(eI);
    a.useEffect(() => {
        eR.current = eI;
    }),
        a.useEffect(() => {
            let { completeSteps: e, setIsSubmittingCurrentStep: t } = eR.current;
            (async () => {
                if (null == eh) return;
                await (0, E.$o)();
                let n = ez.A.getPaymentSource(eh);
                null != n && (e(n), t(!1), R.A.clearRedirectedPaymentSourceId());
            })();
        }, [eh]);
    let eM = a.useCallback(
            function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                ec(null), ea(e), t && T({ currentStep: ei, toStep: e });
            },
            [ei, T],
        ),
        eO = a.useCallback(
            (e) => {
                eJ.default.track(P.HAw.PAYMENT_FLOW_ADD_SOURCE_COMPLETED, {
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
        eL = a.useRef(ej);
    a.useEffect(() => {
        let e = eL.current;
        (eL.current = ej),
            null != ej &&
                ej !== e &&
                eJ.default.track(P.HAw.PAYMENT_FLOW_ADD_SOURCE_ERROR, {
                    load_id: H.loadId,
                    analytics_location: b,
                    payment_source_type: ep.methodType,
                    error_code: ej.code,
                    error_message: ej.message,
                });
    }, [ej, H.loadId, b, ep.methodType]);
    let ew = a.useCallback(
            (e) => {
                eO(e),
                    (0, u.P0)(
                        (0, c.o)(void 0 !== D ? D : M.intl.string(M.t["VJPg+l"]), d.Ck.SUCCESS, {
                            position: d.xJ.BOTTOM,
                        }),
                    ),
                    S(ei, e),
                    eM(K, !1);
            },
            [eM, K, ei, S, D, eO],
        ),
        [eD, ek] = a.useState(null),
        {
            setPaymentSourceId: eU,
            creditCardState: eG,
            setCreditCardState: eF,
            setTokenState: eB,
            isSubmittingCurrentStep: eY,
            billingAddressState: eH,
            setBillingAddressState: eW,
            setIsSubmittingCurrentStep: eZ,
            braintreeEmail: eq,
            braintreeNonce: e$,
            venmoUsername: e0,
            adyenPaymentData: e3,
            epsBankState: e1,
            setEpsBankState: e4,
            p24BankState: e7,
            setP24BankState: e5,
            selectedSkuId: e8,
        } = l,
        e9 = e8 ?? "",
        te = (0, o.bG)([eQ.A], () => eQ.A.get(e9), [e9]),
        tn = te?.eligiblePaymentGateways?.map((e) => e.valueOf());
    function tl(e) {
        eU(e.id), ew(e);
    }
    function ti() {
        em(X), eM(e_.pn.PAYMENT_TYPE);
    }
    let tr = a.useCallback(
            (e, t) => {
                eW((n) => ({ info: { ...n.info, ...e }, isValid: t }));
            },
            [eW],
        ),
        ta = (0, tF.wD)({
            step: ei,
            continueSessionToInitialStep: k,
            paymentElementsEnabled: Y,
            handleStepChange: eM,
            logger: tY,
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
            addressElementKey: tA,
        } = ta,
        tf = a.useCallback(() => {
            eM(e_.pn.ADDRESS), Y && tF.Ky.includes(ei) && tE();
        }, [eM, Y, tE, ei]),
        tT = a.useCallback(
            (e) => {
                Y && null != tc && (0, eu.PE)(e) ? td(e) : eM(e_.pn.PAYMENT_TYPE);
            },
            [Y, tc, td, eM],
        ),
        t_ = j ? (0, r.jsx)(ev.A, { className: tP._8 }) : null,
        tx = (function () {
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
        case e_.pn.ATTEMPT_GOOGLE_PAY:
        case e_.pn.ATTEMPT_APPLE_PAY:
        case e_.pn.PAYMENT_TYPE:
            (t = (0, r.jsx)(tg, {
                prependSteps: C,
                appendSteps: f,
                analyticsLocation: b,
                isEligibleForTrial: L,
                allowDesktopRedirectPurchase: w,
                onPaymentRequestSourceFailed: ti,
                paymentModalArgs: l,
                handleStepChange: eM,
                setPaymentMethodSteps: em,
                setPaymentRequestPaymentMethod: ek,
                currentStep: ei,
                setInfoNotice: ec,
                completeSteps: tl,
                paymentSourceTypeRestrictions: tn,
                CREDIT_CARD_STEPS: q,
                PAYPAL_STEPS: z,
                VENMO_STEPS: J,
                PAYMENT_REQUEST_STEPS: Q,
                PRZELEWY24_STEPS: ee,
                EPS_STEPS: et,
                IDEAL_STEPS: $,
                CASH_APP_STEPS: en,
                ...tx,
            })),
                (n = (0, r.jsx)(tv, {
                    shouldUseManaModal: G,
                    onReturn: y,
                    handleStepChange: eM,
                    currentStep: ei,
                    ...tx,
                }));
            break;
        case e_.pn.PAYMENT_ELEMENT:
            if (!Y) throw (0, E.ne)("Payment Elements not enabled, invalid step", !0);
            (t = null),
                (n = (0, r.jsx)(tG, {
                    handleStepChange: eM,
                    shouldUseManaModal: G,
                    setPaymentMethodSteps: em,
                    primarySubmitting: eY,
                    primaryDisabled: !to,
                    onBack: () => {
                        tp(), y?.();
                    },
                    paymentModalArgs: l,
                    PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: el,
                    ...ta,
                }));
            break;
        case e_.pn.CREDIT_CARD_INFORMATION:
            let tN = async (e) => {
                eZ(!0);
                try {
                    let t = await (0, E.YJ)(F, e);
                    eB({ token: t }), eM(e_.pn.ADDRESS);
                } catch (e) {
                    tY.error(e.message ?? JSON.stringify(e));
                } finally {
                    eZ(!1);
                }
            };
            t = (0, r.jsx)(tV, {
                onCardInfoChange: (e, t) => {
                    eF({ info: e, isValid: t }), eW((t) => ({ ...t, info: { ...t.info, name: e.name } }));
                },
            });
            let tb = !eG.isValid,
                tR = () => {
                    eM(e_.pn.PAYMENT_TYPE);
                };
            n = (0, r.jsx)(s.ElementsConsumer, {
                children: (e) => {
                    let { elements: t } = e;
                    return (0, r.jsx)(tI, {
                        onBack: tR,
                        primaryCTA: ex.Ay.CTAType.CONTINUE,
                        primaryType: "submit",
                        primaryText: M.intl.string(M.t.PDTjLN),
                        primarySubmitting: eY,
                        primaryDisabled: tb,
                        onPrimary: () => tN(t),
                        shouldUseManaModal: G,
                    });
                },
            });
            break;
        case e_.pn.AWAITING_BROWSER_CHECKOUT:
        case e_.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
        case e_.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
            let tM = () => {
                em(q), eM(Y ? e_.pn.PAYMENT_ELEMENT : e_.pn.CREDIT_CARD_INFORMATION);
            };
            (t = (0, r.jsx)(eV, { step: ei, onPurchaseComplete: () => S(ei), onHandoffFailure: tM })),
                (n = (0, r.jsx)(eK, {
                    onPrimaryClick: tM,
                    onBackClick: () => {
                        Y ? (tp(), y?.()) : (em(X), eM(e_.pn.PAYMENT_TYPE));
                    },
                }));
            break;
        case e_.pn.EPS_INFORMATION:
            (t = (0, r.jsx)(eA, {
                type: eC.he.EPS,
                onAccountHolderNameChange: (e) => eW({ info: { ...eH.info, name: e }, isValid: eH.isValid }),
                onEPSBankChange: (e) => e4(e),
                epsBankValue: e1,
                billingAddressInfo: eH.info,
            })),
                (n = (0, r.jsx)(tI, {
                    onBack: () => tT(eC.he.EPS),
                    primaryCTA: ex.Ay.CTAType.CONTINUE,
                    primaryText: M.intl.string(M.t.PDTjLN),
                    primaryDisabled: void 0 === e1 || "" === e1 || "" === eH.info.name,
                    onPrimary: () => tf(),
                    shouldUseManaModal: G,
                }));
            break;
        case e_.pn.IDEAL_INFORMATION:
            (t = (0, r.jsx)(ed, {
                type: eC.he.IDEAL,
                onAccountHolderNameChange: (e) => eW({ info: { ...eH.info, name: e }, isValid: eH.isValid }),
                billingAddressInfo: eH.info,
            })),
                (n = (0, r.jsx)(tI, {
                    onBack: () => eM(e_.pn.PAYMENT_TYPE),
                    primaryCTA: ex.Ay.CTAType.CONTINUE,
                    primaryText: M.intl.string(M.t.PDTjLN),
                    primaryDisabled: "" === eH.info.name,
                    onPrimary: () => tf(),
                    shouldUseManaModal: G,
                }));
            break;
        case e_.pn.PRZELEWY24_INFORMATION:
            (t = (0, r.jsx)(eA, {
                type: eC.he.PRZELEWY24,
                onNameChange: (e) => eW({ info: { ...eH.info, name: e }, isValid: eH.isValid }),
                onEmailChange: (e) => eW({ info: { ...eH.info, email: e }, isValid: eH.isValid }),
                onP24BankChange: (e) => {
                    e5(e);
                },
                p24BankValue: e7,
                billingAddressInfo: eH.info,
            })),
                (n = (0, r.jsx)(tI, {
                    onBack: () => tT(eC.he.PRZELEWY24),
                    primaryCTA: ex.Ay.CTAType.CONTINUE,
                    primaryText: M.intl.string(M.t.PDTjLN),
                    primaryDisabled:
                        void 0 === eH.info.name ||
                        "" === eH.info.name ||
                        void 0 === eH.info.email ||
                        "" === eH.info.email ||
                        void 0 === e7 ||
                        "" === e7,
                    onPrimary: () => tf(),
                    shouldUseManaModal: G,
                }));
            break;
        case e_.pn.PAYPAL_INFORMATION:
            let tO = 0 !== eq.length && null != e$;
            (t = (0, r.jsx)(tK, {})),
                (n = (0, r.jsx)(tI, {
                    onBack: () => tT(eC.he.PAYPAL),
                    primaryCTA: ex.Ay.CTAType.CONTINUE,
                    primaryText: tO ? M.intl.string(M.t.PDTjLN) : M.intl.string(M.t.Djzd7L),
                    onPrimary: () => {
                        let e;
                        return tO
                            ? tf()
                            : void (null == (e = A.A.getLastURL())
                                  ? _()
                                  : (h.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_START" }), window.open(e)));
                    },
                    shouldUseManaModal: G,
                }));
            break;
        case e_.pn.VENMO_INFORMATION:
            let tj = 0 !== e0.length && null != e$;
            (t = (0, r.jsx)(tZ, {})),
                (n = (0, r.jsx)(tI, {
                    onBack: () => tT(eC.he.VENMO),
                    primaryCTA: ex.Ay.CTAType.CONTINUE,
                    primaryText: tj ? M.intl.string(M.t.PDTjLN) : M.intl.string(M.t["4KoTLM"]),
                    onPrimary: () => (tj ? tf() : void g()),
                    shouldUseManaModal: G,
                }));
            break;
        case e_.pn.PAYMENT_REQUEST_INFORMATION:
            (t = (0, r.jsx)(tz, {})),
                (n = (0, r.jsx)(tI, { onBack: () => eM(e_.pn.PAYMENT_TYPE), shouldUseManaModal: G }));
            break;
        case e_.pn.CASH_APP_INFORMATION:
            let tL = null != e3;
            (t = (0, r.jsx)(tq, {})),
                (n = (0, r.jsx)(tI, {
                    onBack: () => tT(eC.he.CASH_APP),
                    primaryCTA: ex.Ay.CTAType.CONTINUE,
                    primaryText: tL ? M.intl.string(M.t.PDTjLN) : M.intl.string(M.t["9ALP8w"]),
                    onPrimary: () => (tL ? tf() : tt()),
                    primaryDisabled: null == eE,
                    shouldUseManaModal: G,
                }));
            break;
        case e_.pn.ADDRESS:
            let tw = Y && null != tc;
            (t = (0, r.jsx)(tD, {
                paymentModalArgs: l,
                paymentSourceType: ep.methodType ?? eC.he.CARD,
                shouldUsePaymentElement: tw,
            })),
                (n = (0, r.jsx)(tk, {
                    paymentModalArgs: l,
                    shouldUseManaModal: G,
                    analyticsLocation: b,
                    overwriteSubscriptionPaymentSource: U,
                    handleStepChange: eM,
                    onPaymentRequestSourceFailed: ti,
                    paymentRequestPaymentMethod: eD,
                    completeSteps: tl,
                    paymentMethodSteps: ep,
                    shouldUsePaymentElement: tw,
                    ...ta,
                }));
            break;
        case e_.pn.AWAITING_AUTHENTICATION:
            t = (0, r.jsx)(t$, {});
            break;
        default:
            throw new ef.v({ message: `Unexpected step: ${ei}`, extraSentryInformation: { currentStep: ei } });
    }
    let tU = Y && ts,
        tH = tU ? "combined_stripe_elements" : void 0,
        tW = (0, r.jsxs)(p.Y, {
            className: tB.C9,
            staticClassName: tB.a2,
            animatedNodeClassName: tB.L2,
            fillParent: !0,
            overrideKey: tH,
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
                            null != N ? { activitySessionId: B, contextMetadata: H, analyticsData: N } : void 0,
                        paymentElementSelectedType: tc,
                        stripeElementsRef: tm,
                        stripePaymentElementProps: th,
                        stripeAddressElementProps: tC,
                        addressElementKey: tA,
                        billingAddressInfo: eH.info,
                        onSetupError: () => {
                            tp(), eM(e_.pn.PAYMENT_TYPE);
                        },
                        paymentElementFooter: tu
                            ? (0, r.jsx)(eS.Z4, {
                                  className: tP.SO,
                                  stackingBehavior: "stack",
                                  onComplete: () => {
                                      setTimeout(() => V(e_.pn.REVIEW), 0);
                                  },
                              })
                            : null,
                    }),
                t,
            ],
        }),
        tQ = ei === e_.pn.PAYMENT_TYPE && 0 === C.length ? null : n;
    return j
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  L && (0, r.jsx)(eg.A, { className: tP.At, isEligibleForTrial: L }),
                  (0, r.jsxs)(eN.dZ, { children: [t_, tW] }),
                  (0, r.jsx)(eN.UX, { children: tQ }),
              ],
          })
        : (0, r.jsx)(e2.A, {
              shouldUseManaModal: G,
              steps: I ?? ep.steps,
              currentStep: v ?? ei,
              overrideKey: tH,
              paymentError: l.paymentError,
              header: x,
              hideBreadcrumbs: O,
              body: tW,
              footer: tQ,
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
        i = (0, o.bG)([e6], () => e6.cashAppPayComponent),
        r = (0, o.bG)([eo.A], () => eo.A.data?.allowed_payment_source_types ?? null);
    (0, er.Ay)(() => {
        (0, y.j)().then((e) => {
            e.client
                .create({ authorization: P.Gg3.BRAINTREE.KEY })
                .then((e) => {
                    new Promise((e, t) => {
                        let n = Date.now(),
                            l = () => {
                                Date.now() - n >= 5e3
                                    ? t(Error("Timeout waiting for Braintree client to be initialized in store"))
                                    : null != A.A.getClient()
                                      ? e()
                                      : setTimeout(l, 1e3);
                            };
                        h.h.subscribe("BRAINTREE_CREATE_CLIENT_SUCCESS", function e() {
                            h.h.unsubscribe("BRAINTREE_CREATE_CLIENT_SUCCESS", e), setTimeout(l, 0);
                        });
                    })
                        .then(() => {
                            I(), T();
                        })
                        .catch((e) => {
                            f.pM(e);
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
    let [d, p] = a.useState(() => ({ info: tH, isValid: !1 })),
        [m, C] = a.useState(() => ({ info: tW, isValid: !1 })),
        [S, _] = a.useState(""),
        [g, v] = a.useState(""),
        [N, b] = a.useState(() => ({ token: null })),
        [M, O, j, L, w] = (0, o.yK)([R.A], () => [
            R.A.braintreeEmail,
            R.A.braintreeNonce,
            R.A.error,
            R.A.venmoUsername,
            R.A.adyenPaymentData,
        ]),
        [D, k] = (0, o.yK)([eq.A], () => [eq.A.error, eq.A.isAwaitingAuthentication]);
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
    let [U, G] = a.useState(!1),
        [F, B] = a.useState(!1),
        [Y, H] = a.useState(null),
        W = a.useRef(null),
        V = (0, o.bG)([eq.A], () => eq.A.isAwaitingAuthentication),
        [K, Z] = (0, o.yK)([e$.A], () => [e$.A.purchaseTokenAuthState, e$.A.purchaseTokenHash]);
    return (
        a.useEffect(() => {
            null != Y && null != W.current && W.current.scrollIntoView({ behavior: "smooth" });
        }, [Y]),
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
            isSubmittingCurrentStep: U,
            setIsSubmittingCurrentStep: G,
            hasRedirectURL: F,
            setHasRedirectURL: B,
            braintreeEmail: M,
            braintreeNonce: O,
            venmoUsername: L,
            adyenPaymentData: w,
            paymentError: null != D ? D : j,
            paymentAuthenticationState: k ? e0.oc.PENDING : null != D ? e0.oc.ERROR : e0.oc.NONE,
            purchaseError: Y,
            setPurchaseError: H,
            purchaseErrorBlockRef: W,
            isAuthenticating: V,
            purchaseTokenAuthState: K,
            purchaseTokenHash: Z,
            epsBankState: g,
            setEpsBankState: v,
            p24BankState: S,
            setP24BankState: _,
        }
    );
}
