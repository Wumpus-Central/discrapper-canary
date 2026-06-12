n.d(t, { Y: () => tX, _V: () => tJ });
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
    _ = n(70142),
    S = n(739508),
    P = n(184015),
    I = n(723702),
    f = n(652215);
function T() {
    let e = _.A.getClient();
    null != e &&
        (0, P.j)().then((t) => {
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
    let e = _.A.getClient();
    null != e &&
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
function g() {
    let e = _.A.getPayPalClient();
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
function v() {
    let e = _.A.getVenmoClient();
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
    O = n(375708);
class j extends a.PureComponent {
    componentDidMount() {
        null != this.props.paypalClient && g();
    }
    componentDidUpdate(e) {
        null == e.paypalClient && null != this.props.paypalClient && g();
    }
    componentWillUnmount() {
        x(_.A.getPayPalClient(), { type: "BRAINTREE_TEARDOWN_PAYPAL_CLIENT" }).then(() => {
            null != _.A.getClient() && N();
        });
    }
    render() {
        let { braintreeEmail: e, paypalClient: t } = this.props;
        return (0, i.jsx)(M.k, {
            label: O.intl.string(O.t.QQBAos),
            leading: { type: "image", src: (0, b.Nj)(b.Ay.Types.PAYPAL) },
            value: e,
            readOnly: !0,
            placeholder: null == t ? O.intl.string(O.t.dte2M9) : O.intl.string(O.t.hopw7X),
        });
    }
}
let w = c.Ay.connectStores([_.A, L.A], () => ({
    braintreeEmail: L.A.braintreeEmail,
    paypalClient: _.A.getPayPalClient(),
}))(j);
var D = n(534514),
    U = n(834730),
    k = n(527142);
class G extends a.PureComponent {
    componentDidMount() {
        null != this.props.venmoClient && v();
    }
    componentDidUpdate(e) {
        null == e.venmoClient && null != this.props.venmoClient && v();
    }
    componentWillUnmount() {
        x(_.A.getVenmoClient(), { type: "BRAINTREE_TEARDOWN_VENMO_CLIENT" }).then(() => {
            null != _.A.getClient() && T();
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
                                  children: O.intl.format(O.t.DowIre, { venmoUsername: e }),
                              }),
                              (0, i.jsx)(U.E, {
                                  variant: "text-md/medium",
                                  className: k.y,
                                  children: O.intl.string(O.t.kmEvnR),
                              }),
                          ],
                      })
                    : (0, i.jsx)(U.E, {
                          variant: "text-md/medium",
                          className: k.y,
                          children: null == n ? O.intl.string(O.t["2ouZDU"]) : O.intl.string(O.t.mIL6Jb),
                      }),
            ],
        });
    }
}
let F = c.Ay.connectStores([_.A, L.A], () => ({ venmoUsername: L.A.venmoUsername, venmoClient: _.A.getVenmoClient() }))(
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
    X = n(482188);
let J = function (e) {
    let t = a.useRef(null),
        { stripeType: n, flipped: l, updateCompleted: r, onFocus: o, onBlur: u } = e,
        [c, d] = a.useState(b.Be.UNKNOWN),
        [p, m] = a.useState(!1),
        [h, A] = a.useState(!1),
        [E, C] = a.useState(null),
        [y, _] = a.useState({}),
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
                                    ? C(O.intl.string(O.t.eOIfuy))
                                    : null != e.error
                                      ? C(O.intl.string(O.t.x4pWtJ))
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
                            null != e.error || (e.empty && h) ? C(O.intl.string(O.t["9/zZdl"])) : C(null), I(e);
                        }),
                            e.on("focus", f),
                            e.on("blur", T);
                        break;
                    }
                    case "cardCvc": {
                        let e = S.getElement(s.CardCvcElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            null != e.error || (e.empty && h) ? C(O.intl.string(O.t.ro4isZ)) : C(null), I(e);
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
                P();
            }
        ),
        [N, P],
    );
    let g = (0, q.r)(Z.A.colors.TEXT_SUBTLE).hex(),
        v = (0, q.r)(Z.A.colors.TEXT_STRONG).hex();
    function x() {
        return W()($.vB, { [$.Tn]: null !== E, [$.iH]: p, [$.yD]: "cardNumber" === n });
    }
    return (
        a.useLayoutEffect(() => {
            let { current: e } = t;
            if (null == e) return;
            let n = window.getComputedStyle(e),
                l = n.getPropertyValue("font-family");
            _({
                base: {
                    fontFamily: l,
                    fontWeight: n.getPropertyValue("font-weight"),
                    color: v,
                    fontSize: n.getPropertyValue("font-size"),
                    "::placeholder": { color: g },
                },
            });
        }, [t, g, v]),
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
                                    (0, i.jsx)(b.Ay, { className: $.Ie, type: c, flipped: l }),
                                    (0, i.jsx)(s.CardNumberElement, {
                                        options: { style: y, placeholder: O.intl.string(O.t.gPRHfw), disableLink: !1 },
                                        className: x(),
                                    }),
                                ],
                            });
                        case "cardExpiry":
                            return (0, i.jsx)(s.CardExpiryElement, {
                                options: { style: y, placeholder: O.intl.string(O.t.xeEWQ6) },
                                className: x(),
                            });
                        case "cardCvc":
                            return (0, i.jsx)(s.CardCvcElement, {
                                options: { style: y, placeholder: O.intl.string(O.t.wZz04F) },
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
    let _ = a.useCallback(
        function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = {};
            return (e || p.name) && "" === c.name && (t.name = O.intl.string(O.t.lIkVsi)), t;
        },
        [p, c],
    );
    return (
        a.useEffect(() => {
            let e = o.cardNumber && o.cardExpiry && o.cardCvc && 0 === Object.keys(_(!0)).length;
            l.current({ name: c.name }, !!e);
        }, [o, c, _]),
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
                                    title: () => O.intl.string(O.t.cVyJ3o),
                                    getClassNameForLayout: () => ee.c6,
                                    renderInput: () =>
                                        (0, i.jsx)(J, {
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
                                    title: () => O.intl.string(O.t["CeBa/4"]),
                                    getClassNameForLayout: () => ee.ep,
                                    renderInput: () =>
                                        (0, i.jsx)(J, {
                                            stripeType: "cardExpiry",
                                            updateCompleted: (e) => y("cardExpiry", e),
                                            onFocus: C,
                                        }),
                                },
                                {
                                    id: "card-cvc",
                                    name: "cardCvc",
                                    title: () => O.intl.string(O.t.Fd3rOz),
                                    getClassNameForLayout: () => ee.ep,
                                    renderInput: () =>
                                        (0, i.jsx)(J, {
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
                                    title: () => O.intl.string(O.t.VUlFdU),
                                    autoComplete: "cc-name",
                                    placeholder: () => O.intl.string(O.t["yf7ms+"]),
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
                            l[t] && "" === e ? "name" === t && (r.name = O.intl.string(O.t.lIkVsi)) : delete r[t],
                            d(n),
                            m(l),
                            A(r);
                    },
                    onFieldBlur: function () {
                        A(_());
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
                          children: (0, i.jsx)(A.w, { type: "critical", children: O.intl.string(O.t["4vnhKV"]) }),
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
                label: O.intl.string(O.t["mmDvV+"]),
                leading: { type: "image", src: (0, b.Nj)(a) },
                value: n && null != r ? O.intl.formatToPlainString(O.t.bCynoK, r) : void 0,
                readOnly: !0,
                placeholder: O.intl.string(O.t.bWMH78),
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
            label: O.intl.string(O.t.sN3wrd),
            inputRef: l,
            name: O.intl.string(O.t.sN3wrd),
            placeholder: O.intl.string(O.t.sN3wrd),
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
let e_ = function (e) {
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
                            label: O.intl.string(O.t["w/qqKK"]),
                            inputRef: n,
                            name: O.intl.string(O.t["w/qqKK"]),
                            placeholder: O.intl.string(O.t["w/qqKK"]),
                            onChange: (e) => o(e),
                            value: d.email,
                        }),
                        (0, i.jsx)(M.k, {
                            label: O.intl.string(O.t["yf7ms+"]),
                            name: O.intl.string(O.t["yf7ms+"]),
                            placeholder: O.intl.string(O.t["yf7ms+"]),
                            onChange: (e) => a(e),
                            value: d.name,
                        }),
                        (0, i.jsxs)(eA.B, {
                            gap: 4,
                            children: [
                                (0, i.jsx)(U.E, { variant: "text-sm/semibold", children: O.intl.string(O.t.De3b8t) }),
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
                            label: O.intl.string(O.t.sN3wrd),
                            inputRef: n,
                            name: O.intl.string(O.t.sN3wrd),
                            placeholder: O.intl.string(O.t.sN3wrd),
                            onChange: (e) => r(e),
                            value: u.name,
                        }),
                        (0, i.jsxs)(eA.B, {
                            gap: 4,
                            children: [
                                (0, i.jsx)(U.E, { variant: "text-sm/semibold", children: O.intl.string(O.t.dFyV07) }),
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
    eP = n(71804),
    eI = n(31823);
n(426398), n(211083);
var ef = n(944355);
n(738909);
var eT = n(211159),
    eN = n(783327),
    eg = n(626584),
    ev = n(166532),
    ex = n(69494),
    eR = n(19311),
    eM = n(482132),
    eb = n(615310),
    eL = n(364840),
    eO = n(73825),
    ej = n(558620),
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
            A = (0, ej.A)(),
            { isGift: E } = (0, eU.Pv)(),
            [C, _] = a.useState(!1);
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
                    C ||
                        (_(!0),
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
            }, [A, E, u, r, _, C, t]),
            a.useEffect(() => {
                null !== m && (eV.oz.includes(m) && ((0, eO.ur)(m), (0, y.hP)()), s(m)),
                    null !== h && o(h),
                    p === u.loadId && d === ek.DONE && l();
            }, [s, o, d, p, m, h, u, l]),
            (0, i.jsxs)("div", {
                className: eK.rf,
                children: [
                    (0, i.jsx)(D.D, { variant: "heading-xl/bold", children: O.intl.string(O.t.C4HYfy) }),
                    (0, i.jsx)(U.E, {
                        variant: "text-md/normal",
                        className: eK.h_,
                        children: O.intl.string(O.t.xfG7Jp),
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
                    (0, i.jsx)(ew.F, { onClick: t, children: O.intl.string(O.t["4Qvmmj"]) }),
                ],
            }),
        });
    };
var ez = n(921925),
    e$ = n(615405),
    eX = n(153084),
    eJ = n(295405),
    eQ = n(71319),
    e0 = n(67480),
    e2 = n(174459),
    e1 = n(427262),
    e3 = n(251913),
    e4 = n(632638),
    e7 = n(632088);
let e6 = null,
    e5 = null;
class e8 extends c.Ay.Store {
    static displayName = "AdyenStore";
    get client() {
        return e6;
    }
    get cashAppPayComponent() {
        return e5;
    }
}
let e9 = new e8(E.h, {
    ADYEN_CREATE_CLIENT_SUCCESS: function (e) {
        let { client: t } = e;
        e6 = t;
    },
    ADYEN_TEARDOWN_CLIENT: function () {
        e6 = null;
    },
    ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS: function (e) {
        let { component: t } = e;
        e5 = t;
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
                                        (n = !1), (t = O.intl.string(O.t.TJ8dDB));
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
                              children: O.intl.format(O.t["ze/1yE"], { cashtag: r }),
                          }),
                          (0, i.jsx)(U.E, {
                              variant: "text-md/medium",
                              className: ti.y,
                              children: O.intl.string(O.t.VPOx7N),
                          }),
                      ],
                  })
                : (0, i.jsx)(U.E, {
                      variant: "text-md/medium",
                      className: ti.y,
                      children: null == n ? O.intl.string(O.t["CgVe/w"]) : O.intl.string(O.t["1MqcjI"]),
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
let tm = [ev.pn.PAYMENT_TYPE],
    th = [ev.pn.PAYMENT_TYPE, ev.pn.CREDIT_CARD_INFORMATION, ev.pn.ADDRESS],
    tA = [ev.pn.PAYMENT_TYPE, ev.pn.PAYPAL_INFORMATION, ev.pn.ADDRESS],
    tE = [ev.pn.PAYMENT_TYPE, ev.pn.VENMO_INFORMATION, ev.pn.ADDRESS],
    tC = [ev.pn.PAYMENT_TYPE, ev.pn.CASH_APP_INFORMATION, ev.pn.ADDRESS],
    ty = [ev.pn.PAYMENT_TYPE, ev.pn.PRZELEWY24_INFORMATION, ev.pn.ADDRESS],
    t_ = [ev.pn.PAYMENT_TYPE, ev.pn.EPS_INFORMATION, ev.pn.ADDRESS],
    tS = [ev.pn.PAYMENT_TYPE, ev.pn.IDEAL_INFORMATION, ev.pn.ADDRESS],
    tP = [ev.pn.PAYMENT_TYPE, ev.pn.ADDRESS],
    tI = {
        SHARED_ADD_PAYMENT_STEPS: tm,
        SHARED_CREDIT_CARD_STEPS: th,
        SHARED_PAYPAL_STEPS: tA,
        SHARED_VENMO_STEPS: tE,
        SHARED_PRZELEWY24_STEPS: ty,
        SHARED_EPS_STEPS: t_,
        SHARED_IDEAL_STEPS: tS,
        SHARED_CASH_APP_STEPS: tC,
        SHARED_TYPE_AND_ADDRESS_STEPS: tP,
    },
    tf = {
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
var tT = n(801753);
function tN(e) {
    return () => (null != L.A.error && (0, R.ET)(), e());
}
function tg(e) {
    let { onPrimary: t, onBack: n, ...l } = e,
        r = t;
    null != t && (r = tN(t));
    let a = n;
    return null != n && (a = tN(n)), (0, i.jsx)(eR.Ay, { ...l, onPrimary: r, onBack: a });
}
function tv(e) {
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
                VENMO_STEPS: _,
                PAYMENT_REQUEST_STEPS: S,
                PRZELEWY24_STEPS: P,
                EPS_STEPS: f,
                IDEAL_STEPS: T,
                CASH_APP_STEPS: N,
                setConnectorPaymentRequestReady: g,
                connectorPaymentRequestRef: v,
            } = e,
            { activitySessionId: x } = (0, eI.V)(),
            M = (0, eT.t4)((e) => e.contextMetadata),
            { setBillingAddressState: b } = o,
            j = (e, l) => {
                switch (e) {
                    case eC.he.CARD:
                        a ? u(ev.pn.AWAITING_BROWSER_CHECKOUT) : (c(E), u(ev.pn.CREDIT_CARD_INFORMATION));
                        break;
                    case eC.he.PAYPAL:
                        c(C), u(ev.pn.PAYPAL_INFORMATION);
                        break;
                    case eC.he.VENMO:
                        c(_), u(ev.pn.VENMO_INFORMATION);
                        break;
                    case eC.he.PAYMENT_REQUEST:
                        a && "googlePay" === l
                            ? u(ev.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY)
                            : a && "applePay" === l
                              ? u(ev.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY)
                              : (c(S), u(ev.pn.PAYMENT_REQUEST_INFORMATION));
                        break;
                    case eC.he.PRZELEWY24:
                        c(P), u(ev.pn.PRZELEWY24_INFORMATION);
                        break;
                    case eC.he.EPS:
                        c(f), u(ev.pn.EPS_INFORMATION);
                        break;
                    case eC.he.IDEAL:
                        c(T), u(ev.pn.IDEAL_INFORMATION);
                        break;
                    case eC.he.CASH_APP:
                        c(N), u(ev.pn.CASH_APP_INFORMATION);
                        break;
                    case eC.he.GIROPAY:
                    case eC.he.PAYSAFE_CARD:
                    case eC.he.GCASH:
                    case eC.he.GRABPAY_MY:
                    case eC.he.MOMO_WALLET:
                    case eC.he.KAKAOPAY:
                    case eC.he.GOPAY_WALLET:
                    case eC.he.BANCONTACT:
                        c({ steps: [...t, ...tP, ...n], methodType: e }), u(ev.pn.ADDRESS);
                }
                null != L.A.error && (0, R.ET)();
            },
            w = async (e, t) => {
                if (((0, R.mf)(e), null == e)) return void s();
                d(e);
                let { billingAddressInfo: n } = (0, td.uK)(e),
                    r = (0, tu.Qd)(n);
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
            let e = O.intl.string(p === ev.pn.ATTEMPT_APPLE_PAY ? O.t.czhXDv : O.t.Zj2xQ0);
            return (0, i.jsx)(tc.V, {
                onChooseType: j,
                paymentRequestWallet: p === ev.pn.ATTEMPT_APPLE_PAY ? "applePay" : "googlePay",
                onStripePaymentMethodReceived: w,
                onPaymentRequestFailure: () => {
                    j(eC.he.CARD), m(e);
                },
                onValidPaymentRequest: () => g(!0),
                paymentRequestRef: v,
            });
        }
        let D = !(0, I.isDesktop)() || a;
        return (0, i.jsx)(tv, {
            onChooseType: j,
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
        if (r === ev.pn.ATTEMPT_GOOGLE_PAY || r === ev.pn.ATTEMPT_APPLE_PAY) {
            let e = O.intl.string(r === ev.pn.ATTEMPT_APPLE_PAY ? O.t.WoXvJL : O.t.wnVVr0);
            return (0, i.jsx)(tg, {
                onBack: () => l(ev.pn.PAYMENT_TYPE),
                primaryCTA: eR.Ay.CTAType.CONTINUE,
                primaryText: e,
                onPrimary: () => s(),
                primaryDisabled: !a,
                shouldUseManaModal: n,
            });
        }
        return (0, i.jsx)(tg, { onBack: t, shouldUseManaModal: n });
    };
var tM = n(198970),
    tb = n(546605),
    tL = n(116673),
    tO = n(773669);
let tj = (e) => {
        let t,
            { billingAddressInfo: n, billingError: l, onBillingAddressChange: r, paymentSourceType: s } = e,
            o = null != l && (null == l.code || el(l) === en.ADDRESS),
            u = (0, c.bG)([tO.default], () => tO.default.locale);
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
            h = d && m ? O.intl.string(O.t.Pg2hU0) : null;
        return (0, i.jsxs)(a.Fragment, {
            children: [
                o
                    ? (0, i.jsx)("div", {
                          className: er.QK,
                          children: (0, i.jsx)(A.w, { type: "critical", children: O.intl.string(O.t.vZ8y7l) }),
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
    tw = new eg.A("AddPaymentAddressStep.tsx");
function tD(e) {
    let { billingAddressInfo: t, onBillingAddressChange: n, paymentSourceType: l } = e,
        r = (0, c.bG)([L.A], () => L.A.error);
    return (0, i.jsx)(tj, { billingAddressInfo: t, billingError: r, onBillingAddressChange: n, paymentSourceType: l });
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
            tokenState: _,
            isSubmittingCurrentStep: S,
            billingAddressState: P,
            setIsSubmittingCurrentStep: I,
            hasRedirectURL: f,
            setHasRedirectURL: T,
            braintreeNonce: N,
            adyenPaymentData: g,
            isAuthenticating: v,
            epsBankState: x,
            p24BankState: R,
        } = t,
        M = async () => {
            I(!0);
            let e = E ? p : d.methodType,
                t = [
                    C,
                    h.current,
                    { billingAddress: P.info, paymentSourceType: e ?? eC.he.UNKNOWN, lastConfirmedSetupIntentRef: A },
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
                    c(await (0, y.Tv)(o, P.info, l));
                    break;
                case eC.he.CARD:
                    try {
                        let e = E ? await (0, y.im)(...t) : await (0, y.u6)(C, _.token, P.info, l);
                        c(e);
                    } catch {}
                    break;
                case eC.he.VENMO:
                case eC.he.PAYPAL:
                    try {
                        u()(null != N, "Missing braintreeNonce");
                        let e = await (0, y.u1)(N, P.info, l);
                        c(e);
                    } catch {}
                    break;
                case eC.he.EPS:
                    try {
                        let e = await (0, y.Z9)(C, x, P.info, l);
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
                        let e = E ? await (0, y.im)(...t) : await (0, y.EB)(C, P.info, l);
                        c(e);
                    } catch (e) {
                        tw.warn(e);
                    }
                    break;
                case eC.he.PRZELEWY24:
                    try {
                        if (void 0 === R) throw (0, y.i0)("Bank required for Przelewy24");
                        let e = await (0, y.TD)(C, { p24Bank: R }, P.info, l);
                        c(e);
                    } catch {}
                    break;
                case eC.he.PAYSAFE_CARD:
                case eC.he.GRABPAY_MY:
                    try {
                        let t = await (0, y.A8)(P.info, e, l);
                        c(t);
                    } catch {}
                    break;
                case eC.he.GCASH:
                case eC.he.MOMO_WALLET:
                case eC.he.KAKAOPAY:
                case eC.he.GOPAY_WALLET:
                    try {
                        let { redirectConfirmation: t } = await (0, y.$M)(P.info, e, l);
                        T(t);
                    } catch {}
                    break;
                case eC.he.GIROPAY:
                case eC.he.BANCONTACT:
                    try {
                        let t = await (0, y.bw)(C, P.info, e, l);
                        c(t);
                    } catch {}
                    break;
                case eC.he.CASH_APP:
                    try {
                        u()(null != g, "Missing adyenPaymentData");
                        let { paymentSource: t } = await (0, y.$M)(P.info, e, l, g, r);
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
            ? { backStep: ev.pn.PAYMENT_ELEMENT }
            : ((e) => {
                  switch (e) {
                      case eC.he.CARD:
                          return { backStep: ev.pn.CREDIT_CARD_INFORMATION };
                      case eC.he.PAYPAL:
                          return { backStep: ev.pn.PAYPAL_INFORMATION };
                      case eC.he.VENMO:
                          return { backStep: ev.pn.VENMO_INFORMATION };
                      case eC.he.GIROPAY:
                      case eC.he.PAYSAFE_CARD:
                      case eC.he.GCASH:
                      case eC.he.GRABPAY_MY:
                      case eC.he.MOMO_WALLET:
                      case eC.he.KAKAOPAY:
                      case eC.he.GOPAY_WALLET:
                      case eC.he.BANCONTACT:
                          return { backStep: ev.pn.PAYMENT_TYPE };
                      case eC.he.EPS:
                          return { backStep: ev.pn.EPS_INFORMATION };
                      case eC.he.IDEAL:
                          return { backStep: ev.pn.IDEAL_INFORMATION };
                      case eC.he.PRZELEWY24:
                          return { backStep: ev.pn.PRZELEWY24_INFORMATION };
                      case eC.he.CASH_APP:
                          return { backStep: ev.pn.CASH_APP_INFORMATION };
                      default:
                          return { backStep: ev.pn.PAYMENT_TYPE };
                  }
              })(b),
        j = E ? () => m(void 0) : () => a(L);
    return (0, i.jsx)(tg, {
        onBack: j,
        primaryCTA: eR.Ay.CTAType.CONTINUE,
        primaryText: O.intl.string(O.t.PDTjLN),
        primarySubmitting: S,
        primaryDisabled: !P.isValid || v,
        onPrimary: M,
        shouldUseManaModal: n,
    });
}
let tG = new eg.A("PaymentElementStepFooter.tsx"),
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
                        m((e) => ({ ...e, info: l })), E(), r(ev.pn.ADDRESS);
                    } else {
                        let e = (0, ed.eI)(h);
                        null != e ? r(e) : r(ev.pn.ADDRESS);
                    }
                } catch (e) {
                    tG.error("Error on submitting Payment Element step: ", e.message ?? JSON.stringify(e));
                } finally {
                    p(!1);
                }
            }, [h, d, A, E, r, t, s, p, m]);
        return (0, i.jsx)(tg, {
            onBack: o,
            primaryCTA: eR.Ay.CTAType.CONTINUE,
            primaryType: "submit",
            primaryText: O.intl.string(O.t.PDTjLN),
            primarySubmitting: u,
            primaryDisabled: c,
            onPrimary: C,
            shouldUseManaModal: n,
        });
    };
var tY = n(691189);
let tB = new eg.A("AddPaymentStep.tsx"),
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
function tX(e) {
    let t,
        n,
        {
            paymentModalArgs: l,
            initialStep: r,
            prependSteps: o,
            appendSteps: u,
            onReturn: C,
            onComplete: S,
            onStepChange: P,
            breadcrumpSteps: I,
            currentBreadcrumpStep: T,
            header: N,
            analyticsData: x,
            analyticsLocation: R,
            hideBreadcrumbs: M = !1,
            usePaymentModalStep: b = !1,
            isEligibleForTrial: j = !1,
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
            let e = r === ev.pn.PAYMENT_TYPE || r === ev.pn.PAYMENT_ELEMENT;
            return B && e ? (w ? ev.pn.AWAITING_BROWSER_CHECKOUT : ev.pn.PAYMENT_ELEMENT) : r;
        }, [B, r, w]),
        K = a.useMemo(() => (0, e1.Gn)(), []),
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
                let n = eJ.A.getPaymentSource(ec);
                null != n && (e(n), t(!1), L.A.clearRedirectedPaymentSourceId());
            })();
        }, [ec]);
    let eE = a.useCallback(
            function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                ea(null), er(e), t && P({ currentStep: el, toStep: e });
            },
            [el, P],
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
        eg = (0, c.bG)([L.A], () => L.A.error),
        eL = a.useRef(eg);
    a.useEffect(() => {
        let e = eL.current;
        (eL.current = eg),
            null != eg &&
                eg !== e &&
                e2.default.track(f.HAw.PAYMENT_FLOW_ADD_SOURCE_ERROR, {
                    load_id: W.loadId,
                    analytics_location: R,
                    payment_source_type: es.methodType,
                    error_code: eg.code,
                    error_message: eg.message,
                });
    }, [eg, W.loadId, R, es.methodType]);
    let eO = a.useCallback(
            (e) => {
                ey(e),
                    (0, d.P0)(
                        (0, p.o)(void 0 !== D ? D : O.intl.string(O.t["VJPg+l"]), m.Ck.SUCCESS, {
                            position: m.xJ.BOTTOM,
                        }),
                    ),
                    S(el, e),
                    eE(V, !1);
            },
            [eE, V, el, S, D, ey],
        ),
        [ej, ew] = a.useState(null),
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
            epsBankState: eX,
            setEpsBankState: eQ,
            p24BankState: e3,
            setP24BankState: e7,
            selectedSkuId: e6,
        } = l,
        e5 = e6 ?? "",
        e8 = (0, c.bG)([e0.A], () => e0.A.get(e5), [e5]),
        te = e8?.eligiblePaymentGateways?.map((e) => e.valueOf());
    function tt(e) {
        eD(e.id), eO(e);
    }
    let tn = () => {
            eo(J), eE(ev.pn.PAYMENT_TYPE);
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
            eE(ev.pn.ADDRESS), B && eS.Ky.includes(el) && tm();
        }, [eE, B, tm, el]),
        tE = a.useCallback(
            (e) => {
                B && null != ts && (0, ed.PE)(e) ? to(e) : eE(ev.pn.PAYMENT_TYPE);
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
        case ev.pn.ATTEMPT_GOOGLE_PAY:
        case ev.pn.ATTEMPT_APPLE_PAY:
        case ev.pn.PAYMENT_TYPE:
            (t = (0, i.jsx)(tx, {
                prependSteps: o,
                appendSteps: u,
                analyticsLocation: R,
                isEligibleForTrial: j,
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
                VENMO_STEPS: X,
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
        case ev.pn.PAYMENT_ELEMENT:
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
        case ev.pn.CREDIT_CARD_INFORMATION:
            let t_ = async (e) => {
                eW(!0);
                try {
                    let t = await (0, y.YJ)(F, e);
                    eG({ token: t }), eE(ev.pn.ADDRESS);
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
                tP = () => {
                    eE(ev.pn.PAYMENT_TYPE);
                };
            n = (0, i.jsx)(s.ElementsConsumer, {
                children: (e) => {
                    let { elements: t } = e;
                    return (0, i.jsx)(tg, {
                        onBack: tP,
                        primaryCTA: eR.Ay.CTAType.CONTINUE,
                        primaryType: "submit",
                        primaryText: O.intl.string(O.t.PDTjLN),
                        primarySubmitting: eF,
                        primaryDisabled: tS,
                        onPrimary: () => t_(t),
                        shouldUseManaModal: G,
                    });
                },
            });
            break;
        case ev.pn.AWAITING_BROWSER_CHECKOUT:
        case ev.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
        case ev.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
            let tN = () => {
                eo(Z), eE(B ? ev.pn.PAYMENT_ELEMENT : ev.pn.CREDIT_CARD_INFORMATION);
            };
            (t = (0, i.jsx)(eZ, { step: el, onPurchaseComplete: () => S(el), onHandoffFailure: tN })),
                (n = (0, i.jsx)(eq, {
                    onPrimaryClick: tN,
                    onBackClick: () => {
                        B ? (tu(), C?.()) : (eo(J), eE(ev.pn.PAYMENT_TYPE));
                    },
                }));
            break;
        case ev.pn.EPS_INFORMATION:
            (t = (0, i.jsx)(e_, {
                type: eC.he.EPS,
                onAccountHolderNameChange: (e) => eB({ info: { ...eY.info, name: e }, isValid: eY.isValid }),
                onEPSBankChange: (e) => eQ(e),
                epsBankValue: eX,
                billingAddressInfo: eY.info,
            })),
                (n = (0, i.jsx)(tg, {
                    onBack: () => tE(eC.he.EPS),
                    primaryCTA: eR.Ay.CTAType.CONTINUE,
                    primaryText: O.intl.string(O.t.PDTjLN),
                    primaryDisabled: void 0 === eX || "" === eX || "" === eY.info.name,
                    onPrimary: () => tA(),
                    shouldUseManaModal: G,
                }));
            break;
        case ev.pn.IDEAL_INFORMATION:
            (t = (0, i.jsx)(em, {
                type: eC.he.IDEAL,
                onAccountHolderNameChange: (e) => eB({ info: { ...eY.info, name: e }, isValid: eY.isValid }),
                billingAddressInfo: eY.info,
            })),
                (n = (0, i.jsx)(tg, {
                    onBack: () => eE(ev.pn.PAYMENT_TYPE),
                    primaryCTA: eR.Ay.CTAType.CONTINUE,
                    primaryText: O.intl.string(O.t.PDTjLN),
                    primaryDisabled: "" === eY.info.name,
                    onPrimary: () => tA(),
                    shouldUseManaModal: G,
                }));
            break;
        case ev.pn.PRZELEWY24_INFORMATION:
            (t = (0, i.jsx)(e_, {
                type: eC.he.PRZELEWY24,
                onNameChange: (e) => eB({ info: { ...eY.info, name: e }, isValid: eY.isValid }),
                onEmailChange: (e) => eB({ info: { ...eY.info, email: e }, isValid: eY.isValid }),
                onP24BankChange: (e) => {
                    e7(e);
                },
                p24BankValue: e3,
                billingAddressInfo: eY.info,
            })),
                (n = (0, i.jsx)(tg, {
                    onBack: () => tE(eC.he.PRZELEWY24),
                    primaryCTA: eR.Ay.CTAType.CONTINUE,
                    primaryText: O.intl.string(O.t.PDTjLN),
                    primaryDisabled:
                        void 0 === eY.info.name ||
                        "" === eY.info.name ||
                        void 0 === eY.info.email ||
                        "" === eY.info.email ||
                        void 0 === e3 ||
                        "" === e3,
                    onPrimary: () => tA(),
                    shouldUseManaModal: G,
                }));
            break;
        case ev.pn.PAYPAL_INFORMATION:
            let tv = 0 !== eH.length && null != eV;
            (t = (0, i.jsx)(tK, {})),
                (n = (0, i.jsx)(tg, {
                    onBack: () => tE(eC.he.PAYPAL),
                    primaryCTA: eR.Ay.CTAType.CONTINUE,
                    primaryText: tv ? O.intl.string(O.t.PDTjLN) : O.intl.string(O.t.Djzd7L),
                    onPrimary: () => {
                        let e;
                        return tv
                            ? tA()
                            : void (null == (e = _.A.getLastURL())
                                  ? g()
                                  : (E.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_START" }), window.open(e)));
                    },
                    shouldUseManaModal: G,
                }));
            break;
        case ev.pn.VENMO_INFORMATION:
            let tM = 0 !== eK.length && null != eV;
            (t = (0, i.jsx)(tZ, {})),
                (n = (0, i.jsx)(tg, {
                    onBack: () => tE(eC.he.VENMO),
                    primaryCTA: eR.Ay.CTAType.CONTINUE,
                    primaryText: tM ? O.intl.string(O.t.PDTjLN) : O.intl.string(O.t["4KoTLM"]),
                    onPrimary: () => (tM ? tA() : void v()),
                    shouldUseManaModal: G,
                }));
            break;
        case ev.pn.PAYMENT_REQUEST_INFORMATION:
            (t = (0, i.jsx)(tz, {})),
                (n = (0, i.jsx)(tg, { onBack: () => eE(ev.pn.PAYMENT_TYPE), shouldUseManaModal: G }));
            break;
        case ev.pn.CASH_APP_INFORMATION:
            let tb = null != e$;
            (t = (0, i.jsx)(tq, {})),
                (n = (0, i.jsx)(tg, {
                    onBack: () => tE(eC.he.CASH_APP),
                    primaryCTA: eR.Ay.CTAType.CONTINUE,
                    primaryText: tb ? O.intl.string(O.t.PDTjLN) : O.intl.string(O.t["9ALP8w"]),
                    onPrimary: () => (tb ? tA() : tr()),
                    primaryDisabled: null == ep,
                    shouldUseManaModal: G,
                }));
            break;
        case ev.pn.ADDRESS:
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
                    paymentRequestPaymentMethod: ej,
                    completeSteps: tt,
                    paymentMethodSteps: es,
                    shouldUsePaymentElement: tL,
                    ...tl,
                }));
            break;
        case ev.pn.AWAITING_AUTHENTICATION:
            t = (0, i.jsx)(t$, {});
            break;
        default:
            throw new eP.v({ message: `Unexpected step: ${el}`, extraSentryInformation: { currentStep: el } });
    }
    let tO = B && ti,
        tj = tO ? "combined_stripe_elements" : void 0,
        tw = (0, i.jsxs)(h.Y, {
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
                    (0, i.jsx)("div", { className: tT.Ns, children: (0, i.jsx)(A.w, { type: "info", children: ei }) }),
                tO &&
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
                            tu(), eE(ev.pn.PAYMENT_TYPE);
                        },
                        paymentElementFooter: (0, i.jsx)(ef.Z4, {
                            className: tT.SO,
                            stackingBehavior: "stack",
                            onComplete: () => {
                                setTimeout(() => H(ev.pn.REVIEW), 0);
                            },
                        }),
                    }),
                t,
            ],
        }),
        tD = el === ev.pn.PAYMENT_TYPE && 0 === o.length ? null : n;
    return b
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  j && (0, i.jsx)(ex.A, { className: tT.At, isEligibleForTrial: j }),
                  (0, i.jsxs)(eM.dZ, { children: [tC, tw] }),
                  (0, i.jsx)(eM.UX, { children: tD }),
              ],
          })
        : (0, i.jsx)(e4.A, {
              shouldUseManaModal: G,
              steps: I ?? es.steps,
              currentStep: T ?? el,
              overrideKey: tj,
              paymentError: l.paymentError,
              header: N,
              hideBreadcrumbs: M,
              body: tw,
              footer: tD,
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
        r = (0, c.bG)([e9], () => e9.cashAppPayComponent),
        i = (0, c.bG)([ec.A], () => ec.A.data?.allowed_payment_source_types ?? null);
    (0, es.Ay)(() => {
        (0, P.j)().then((e) => {
            e.client
                .create({ authorization: f.Gg3.BRAINTREE.KEY })
                .then((e) => {
                    new Promise((e, t) => {
                        let n = Date.now(),
                            l = () => {
                                Date.now() - n >= 5e3
                                    ? t(Error("Timeout waiting for Braintree client to be initialized in store"))
                                    : null != _.A.getClient()
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
        [I, g] = a.useState(""),
        [v, x] = a.useState(() => ({ token: null })),
        [M, b, O, j, w] = (0, c.yK)([L.A], () => [
            L.A.braintreeEmail,
            L.A.braintreeNonce,
            L.A.error,
            L.A.venmoUsername,
            L.A.adyenPaymentData,
        ]),
        [D, U] = (0, c.yK)([eX.A], () => [eX.A.error, eX.A.isAwaitingAuthentication]);
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
        V = (0, c.bG)([eX.A], () => eX.A.isAwaitingAuthentication),
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
            tokenState: v,
            setTokenState: x,
            billingAddressState: m,
            setBillingAddressState: h,
            isSubmittingCurrentStep: k,
            setIsSubmittingCurrentStep: G,
            hasRedirectURL: F,
            setHasRedirectURL: Y,
            braintreeEmail: M,
            braintreeNonce: b,
            venmoUsername: j,
            adyenPaymentData: w,
            paymentError: null != D ? D : O,
            paymentAuthenticationState: U ? e3.oc.PENDING : null != D ? e3.oc.ERROR : e3.oc.NONE,
            purchaseError: B,
            setPurchaseError: W,
            purchaseErrorBlockRef: H,
            isAuthenticating: V,
            purchaseTokenAuthState: K,
            purchaseTokenHash: Z,
            epsBankState: I,
            setEpsBankState: g,
            p24BankState: A,
            setP24BankState: C,
        }
    );
}
