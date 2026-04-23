"use strict";
n.d(t, { Y: () => tK, _V: () => tz });
var i,
    r,
    s = n(627968),
    a = n(64700),
    o = n(342393),
    l = n(284009),
    d = n.n(l),
    _ = n(17928),
    u = n(691540),
    c = n(857250),
    E = n(97483),
    h = n(685094),
    m = n(683071),
    f = n(228366),
    g = n(636537),
    p = n(323082),
    A = n(70142),
    I = n(739508),
    T = n(184015),
    S = n(723702),
    N = n(652215);
function C() {
    let e = A.A.getClient();
    if (null == e) throw Error("Braintree client must be initialized before creating Venmo client.");
    (0, T.j)().then((t) => {
        t.venmo
            .create({ client: e, allowDesktop: !0, paymentMethodUsage: "multi_use" })
            .then((e) => {
                f.h.dispatch({ type: "BRAINTREE_CREATE_VENMO_CLIENT_SUCCESS", venmoClient: e });
            })
            .catch(() => {
                f.h.dispatch({ type: "BRAINTREE_CREATE_VENMO_CLIENT_FAIL" });
            });
    });
}
function R() {
    let e = A.A.getClient();
    if (null == e) throw Error("braintree client must be initialized before calling this");
    (0, T.j)().then((t) => {
        t.paypal
            .create({ client: e })
            .then((e) => {
                if (null == e._navigateFrameToAuth)
                    throw Error(
                        "braintree client missing _navigateFrameToAuth. did someone upgrade the braintree library?",
                    );
                (e._navigateFrameToAuth = function (e) {
                    let t = this._formatPaymentResourceData(e);
                    return g.Bo.post({
                        url: N.Rsh.BILLING_PAYPAL_BILLING_AGREEMENT_TOKENS,
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
                                ((t = N.Gg3.BRAINTREE.KEY.startsWith("production_")
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
                    f.h.dispatch({ type: "BRAINTREE_CREATE_PAYPAL_CLIENT_SUCCESS", paypalClient: e });
            })
            .catch(() => f.h.dispatch({ type: "BRAINTREE_CREATE_PAYPAL_CLIENT_FAIL" }));
    });
}
function O() {
    let e = A.A.getPayPalClient();
    if (null == e) throw Error("braintree paypal client must be initialized before calling this");
    f.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_START" });
    let t = Promise.resolve("");
    (0, S.isDesktop)() && (t = (0, p.jf)(N.hes.PAYPAL)),
        t
            .then(() => e.tokenize({ flow: "vault" }))
            .then((e) => {
                let { email: t, firstName: n, lastName: i, billingAddress: r } = e.details;
                f.h.dispatch({
                    type: "BRAINTREE_TOKENIZE_PAYPAL_SUCCESS",
                    nonce: e.nonce,
                    email: t,
                    billingAddress: {
                        name: `${n} ${i}`,
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
                let { message: t, code: n, details: i } = e;
                n === N.Q7O.PAYPAL_POPUP_CLOSED || null == n
                    ? f.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED" })
                    : (f.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_FAIL", message: t, code: n }),
                      I.pM(Error(`Braintree Paypal Error: ${t} ${n} ${i}`)));
            });
}
function y() {
    let e = A.A.getVenmoClient();
    if (null == e) throw Error("Braintree Venmo client must be initialized before calling tokenize.");
    f.h.dispatch({ type: "BRAINTREE_TOKENIZE_VENMO_START" }),
        e
            .tokenize()
            .then((e) => {
                let { username: t } = e.details;
                f.h.dispatch({ type: "BRAINTREE_TOKENIZE_VENMO_SUCCESS", nonce: e.nonce, username: t });
            })
            .catch((e) => {
                let { message: t, code: n, details: i } = e;
                [N.Q7O.VENMO_APP_CANCELED, N.Q7O.VENMO_DESKTOP_CANCELED, N.Q7O.VENMO_CANCELED].includes(n)
                    ? f.h.dispatch({ type: "BRAINTREE_TOKENIZE_VENMO_FAIL_CANCELED" })
                    : (f.h.dispatch({ type: "BRAINTREE_TOKENIZE_VENMO_FAIL", message: t, code: n }),
                      I.pM(Error(`Braintree Venmo Error: ${t} ${n} ${i}`)));
            });
}
function v(e, t) {
    if (null == e) return Promise.resolve();
    f.h.dispatch(t);
    try {
        return Promise.resolve(e.teardown());
    } catch (e) {
        return Promise.resolve();
    }
}
var D = n(391048),
    L = n(292666),
    b = n(812745),
    w = n(825755),
    P = n(985018);
class k extends a.PureComponent {
    componentDidMount() {
        null != this.props.paypalClient && O();
    }
    componentDidUpdate(e) {
        null == e.paypalClient && null != this.props.paypalClient && O();
    }
    componentWillUnmount() {
        v(A.A.getPayPalClient(), { type: "BRAINTREE_TEARDOWN_PAYPAL_CLIENT" }).then(() => {
            null != A.A.getClient() && R();
        });
    }
    render() {
        let { braintreeEmail: e, paypalClient: t } = this.props;
        return (0, s.jsx)(L.k, {
            label: P.intl.string(P.t.QQBAos),
            leading: { type: "image", src: (0, b.Nj)(b.Ay.Types.PAYPAL) },
            value: e,
            readOnly: !0,
            placeholder: null == t ? P.intl.string(P.t.dte2M9) : P.intl.string(P.t.hopw7X),
        });
    }
}
let M = _.Ay.connectStores([A.A, w.A], () => ({
    braintreeEmail: w.A.braintreeEmail,
    paypalClient: A.A.getPayPalClient(),
}))(k);
var U = n(534514),
    x = n(834730),
    G = n(527142);
class V extends a.PureComponent {
    componentDidMount() {
        null != this.props.venmoClient && y();
    }
    componentDidUpdate(e) {
        null == e.venmoClient && null != this.props.venmoClient && y();
    }
    componentWillUnmount() {
        v(A.A.getVenmoClient(), { type: "BRAINTREE_TEARDOWN_VENMO_CLIENT" }).then(() => {
            null != A.A.getClient() && C();
        });
    }
    render() {
        let { venmoUsername: e, className: t, venmoClient: n } = this.props,
            i = null != e && "" !== e;
        return (0, s.jsxs)("div", {
            className: t,
            children: [
                (0, s.jsx)(b.Ay, { type: b.Ay.Types.VENMO, size: b.y3.MEDIUM, className: G.Z }),
                i
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)(U.D, {
                                  variant: e.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
                                  className: G.y,
                                  children: P.intl.format(P.t.DowIre, { venmoUsername: e }),
                              }),
                              (0, s.jsx)(x.E, {
                                  variant: "text-md/medium",
                                  className: G.y,
                                  children: P.intl.string(P.t.kmEvnR),
                              }),
                          ],
                      })
                    : (0, s.jsx)(x.E, {
                          variant: "text-md/medium",
                          className: G.y,
                          children: null == n ? P.intl.string(P.t["2ouZDU"]) : P.intl.string(P.t.mIL6Jb),
                      }),
            ],
        });
    }
}
let F = _.Ay.connectStores([A.A, w.A], () => ({ venmoUsername: w.A.venmoUsername, venmoClient: A.A.getVenmoClient() }))(
    V,
);
var B = n(891197),
    H = n(503698),
    j = n.n(H),
    W = n(305866),
    Y = n(287809),
    K = n(832208),
    z = n(661531),
    $ = n(602853),
    q = n(511274),
    X = n(50579),
    Z = n(482188);
let Q = function (e) {
    let t = a.useRef(null),
        { stripeType: n, flipped: i, updateCompleted: r, onFocus: l, onBlur: d } = e,
        [_, u] = a.useState(b.Be.UNKNOWN),
        [c, E] = a.useState(!1),
        [h, m] = a.useState(!1),
        [f, g] = a.useState(null),
        [p, A] = a.useState({}),
        I = (0, o.useElements)(),
        T = a.useCallback(() => {
            if (null != I)
                switch (n) {
                    case "cardNumber": {
                        let e = I.getElement(o.CardNumberElement);
                        if (null == e) return;
                        e.off("change"), e.off("focus"), e.off("blur");
                        break;
                    }
                    case "cardExpiry": {
                        let e = I.getElement(o.CardExpiryElement);
                        if (null == e) return;
                        e.off("change"), e.off("focus"), e.off("blur");
                        break;
                    }
                    case "cardCvc": {
                        let e = I.getElement(o.CardCvcElement);
                        if (null == e) return;
                        e.off("change"), e.off("focus"), e.off("blur");
                    }
                }
        }, [I, n]),
        S = a.useCallback(
            (e) => {
                h || e.empty || m(!0), null != r && r(e.complete), null != e.error && E(!1);
            },
            [h, r],
        ),
        N = a.useCallback(() => {
            E(!0), l?.();
        }, [l]),
        C = a.useCallback(() => {
            E(!1), d?.();
        }, [d]),
        R = a.useCallback(() => {
            if (null != I)
                switch (n) {
                    case "cardNumber": {
                        let e = I.getElement(o.CardNumberElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            _ !== e.brand && u(e.brand),
                                e.empty && h
                                    ? g(P.intl.string(P.t.eOIfuy))
                                    : null != e.error
                                      ? g(P.intl.string(P.t.x4pWtJ))
                                      : g(null),
                                S(e);
                        }),
                            e.on("focus", N),
                            e.on("blur", C);
                        break;
                    }
                    case "cardExpiry": {
                        let e = I.getElement(o.CardExpiryElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            null != e.error || (e.empty && h) ? g(P.intl.string(P.t["9/zZdl"])) : g(null), S(e);
                        }),
                            e.on("focus", N),
                            e.on("blur", C);
                        break;
                    }
                    case "cardCvc": {
                        let e = I.getElement(o.CardCvcElement);
                        if (null == e) return;
                        e.on("change", (e) => {
                            null != e.error || (e.empty && h) ? g(P.intl.string(P.t.ro4isZ)) : g(null), S(e);
                        }),
                            e.on("focus", N),
                            e.on("blur", C);
                    }
                }
        }, [C, S, N, _, I, h, n]);
    a.useEffect(
        () => (
            R(),
            () => {
                T();
            }
        ),
        [R, T],
    );
    let O = (0, $.r)(z.A.colors.TEXT_SUBTLE).hex(),
        y = (0, $.r)(z.A.colors.TEXT_STRONG).hex();
    function v() {
        return j()(X.vB, { [X.Tn]: null !== f, [X.iH]: c, [X.yD]: "cardNumber" === n });
    }
    return (
        a.useLayoutEffect(() => {
            let { current: e } = t;
            if (null == e) return;
            let n = window.getComputedStyle(e),
                i = n.getPropertyValue("font-family");
            A({
                base: {
                    fontFamily: i,
                    fontWeight: n.getPropertyValue("font-weight"),
                    color: y,
                    fontSize: n.getPropertyValue("font-size"),
                    "::placeholder": { color: O },
                },
            });
        }, [t, O, y]),
        (0, s.jsxs)("div", {
            className: X.Zm,
            "data-stripe-type": n,
            children: [
                (0, s.jsx)("div", { ref: t, className: j()(X.iw, Z.hF) }),
                (function () {
                    switch (n) {
                        case "cardNumber":
                            return (0, s.jsxs)("div", {
                                children: [
                                    (0, s.jsx)(b.Ay, { className: X.Ie, type: _, flipped: i }),
                                    (0, s.jsx)(o.CardNumberElement, {
                                        options: { style: p, placeholder: P.intl.string(P.t.gPRHfw), disableLink: !1 },
                                        className: v(),
                                    }),
                                ],
                            });
                        case "cardExpiry":
                            return (0, s.jsx)(o.CardExpiryElement, {
                                options: { style: p, placeholder: P.intl.string(P.t.xeEWQ6) },
                                className: v(),
                            });
                        case "cardCvc":
                            return (0, s.jsx)(o.CardCvcElement, {
                                options: { style: p, placeholder: P.intl.string(P.t.wZz04F) },
                                className: v(),
                            });
                    }
                })(),
                (0, s.jsx)(q.U, { error: f }),
            ],
        })
    );
};
var J = n(483770),
    ee = n(536439);
let et = function (e) {
    let { onCardInfoChange: t, error: n } = e,
        i = a.useRef(t),
        [r, o] = a.useState(!1),
        [l, d] = a.useState({}),
        [_, u] = a.useState({ name: "", country: "", postalCode: "" }),
        [c, E] = a.useState({}),
        [h, m] = a.useState({}),
        { setFocusLockDisabled: f } = a.useContext(W.M);
    a.useEffect(() => () => {
        void 0 !== f && f(!1);
    });
    let g = a.useCallback(() => {
        void 0 !== f && f(!0);
    }, [f]);
    function p(e, t) {
        !!l[e] !== t && d((n) => ({ ...n, [e]: t }));
    }
    let A = a.useCallback(
        function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = {};
            return (e || c.name) && "" === _.name && (t.name = P.intl.string(P.t.lIkVsi)), t;
        },
        [c, _],
    );
    return (
        a.useEffect(() => {
            let e = l.cardNumber && l.cardExpiry && l.cardCvc && 0 === Object.keys(A(!0)).length;
            i.current({ name: _.name }, !!e);
        }, [l, _, A]),
        (0, s.jsxs)("div", {
            children: [
                Y.default.getCurrentUser()?.nsfwAllowed
                    ? (0, s.jsxs)("div", {
                          className: J.Rm,
                          children: [
                              (0, s.jsx)("div", { className: j()(b.y3.SMALL, J.eo, J.Ud) }),
                              (0, s.jsx)("div", { className: j()(b.y3.SMALL, J.DR, J.Ud) }),
                              (0, s.jsx)("div", { className: j()(b.y3.SMALL, J.k4, J.Ud) }),
                              (0, s.jsx)("div", { className: j()(b.y3.SMALL, J.a3, J.Ud) }),
                              (0, s.jsx)("div", { className: j()(b.y3.SMALL, J.CY, J.Ud) }),
                              (0, s.jsx)("div", { className: j()(b.y3.SMALL, J.Q5, J.Ud) }),
                              (0, s.jsx)("div", { className: j()(b.y3.SMALL, J.YA, J.Ud) }),
                          ],
                      })
                    : (0, s.jsxs)("div", {
                          className: J.Rm,
                          children: [
                              (0, s.jsx)("div", { className: j()(b.y3.SMALL, J.aq, J.Ud) }),
                              (0, s.jsx)("div", { className: j()(b.y3.SMALL, J.VX, J.Ud) }),
                              (0, s.jsx)("div", { className: j()(b.y3.SMALL, J.Yi, J.Ud) }),
                              (0, s.jsx)("div", { className: j()(b.y3.SMALL, J.qR, J.Ud) }),
                              (0, s.jsx)("div", { className: j()(b.y3.SMALL, J.m2, J.Ud) }),
                              (0, s.jsx)("div", { className: j()(b.y3.SMALL, J.Ij, J.Ud) }),
                              (0, s.jsx)("div", { className: j()(b.y3.SMALL, J._V, J.Ud) }),
                          ],
                      }),
                (0, s.jsx)(K.A, {
                    form: [
                        {
                            fields: [
                                {
                                    id: "card-number",
                                    name: "cardNumber",
                                    title: () => P.intl.string(P.t.cVyJ3o),
                                    getClassNameForLayout: () => ee.c6,
                                    renderInput: () =>
                                        (0, s.jsx)(Q, {
                                            stripeType: "cardNumber",
                                            flipped: r,
                                            updateCompleted: (e) => p("cardNumber", e),
                                            onFocus: g,
                                        }),
                                },
                            ],
                        },
                        {
                            fields: [
                                {
                                    id: "card-expiration-date",
                                    name: "cardExpiry",
                                    title: () => P.intl.string(P.t["CeBa/4"]),
                                    getClassNameForLayout: () => ee.ep,
                                    renderInput: () =>
                                        (0, s.jsx)(Q, {
                                            stripeType: "cardExpiry",
                                            updateCompleted: (e) => p("cardExpiry", e),
                                            onFocus: g,
                                        }),
                                },
                                {
                                    id: "card-cvc",
                                    name: "cardCvc",
                                    title: () => P.intl.string(P.t.Fd3rOz),
                                    getClassNameForLayout: () => ee.ep,
                                    renderInput: () =>
                                        (0, s.jsx)(Q, {
                                            stripeType: "cardCvc",
                                            updateCompleted: (e) => p("cardCvc", e),
                                            onFocus: () => {
                                                g(), o(!0);
                                            },
                                            onBlur: () => {
                                                o(!1);
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
                                    title: () => P.intl.string(P.t.VUlFdU),
                                    autoComplete: "cc-name",
                                    placeholder: () => P.intl.string(P.t["yf7ms+"]),
                                    getClassNameForLayout: () => ee.c6,
                                    renderInput: (e) => (0, s.jsx)(L.k, { ...e }),
                                },
                            ],
                        },
                    ],
                    errors: h,
                    formError: n,
                    values: _,
                    onFieldChange: function (e, t) {
                        if ("name" !== t && "country" !== t && "postalCode" !== t) return;
                        let n = { ..._ },
                            i = { ...c },
                            r = { name: h.name };
                        c[t] || "" === e || (i[t] = !0),
                            (n[t] = e),
                            i[t] && "" === e ? "name" === t && (r.name = P.intl.string(P.t.lIkVsi)) : delete r[t],
                            u(n),
                            E(i),
                            m(r);
                    },
                    onFieldBlur: function () {
                        m(A());
                    },
                }),
            ],
        })
    );
};
var en =
    (((i = {}).SELECT_PLAN = "select_plan"),
    (i.PAYMENT_TYPE = "payment_type"),
    (i.PAYPAL = "paypal"),
    (i.PAYPAL_ADDRESS = "paypal_address"),
    (i.PAYMENT_REQUEST_INFO = "payment_request_info"),
    (i.CREDIT_CARD_INFORMATION = "credit_card_information"),
    (i.ADDRESS = "address"),
    (i.REVIEW = "review"),
    (i.CONFIRM = "confirm"),
    (i.AWAITING_AUTHENTICATION = "awaiting_authentication"),
    (i.VENMO = "venmo"),
    (i.VENMO_ADDRESS = "venmo_address"),
    i);
function ei(e) {
    if (null != e) {
        if (e.hasCardError()) return "credit_card_information";
        if (e.hasAddressError()) return "address";
    }
    return null;
}
var er = n(723429);
let es = (e) => {
        let { billingError: t, onCardInfoChange: n } = e,
            i = null != t && (null == t.code || ei(t) === en.CREDIT_CARD_INFORMATION);
        return (0, s.jsxs)(a.Fragment, {
            children: [
                i
                    ? (0, s.jsx)("div", {
                          className: er.QK,
                          children: (0, s.jsx)(m.w, { type: "critical", children: P.intl.string(P.t["4vnhKV"]) }),
                      })
                    : null,
                (0, s.jsx)(et, { onCardInfoChange: n, error: t }),
            ],
        });
    },
    ea = (e) => {
        let { className: t, submitting: n, stripePaymentMethod: i } = e,
            { card: r } = i ?? {},
            a = null != r ? b.Ay.getType(r.brand) : b.Ay.Types.UNKNOWN;
        return (0, s.jsx)("div", {
            className: t,
            children: (0, s.jsx)(L.k, {
                label: P.intl.string(P.t["mmDvV+"]),
                leading: { type: "image", src: (0, b.Nj)(a) },
                value: n && null != r ? P.intl.formatToPlainString(P.t.bCynoK, r) : void 0,
                readOnly: !0,
                placeholder: P.intl.string(P.t.bWMH78),
            }),
        });
    };
var eo = n(964486),
    el = n(721101),
    ed = n(648335),
    e_ = n(384365);
let eu = function (e) {
    let { onAccountHolderNameChange: t, billingAddressInfo: n } = e,
        i = a.useRef(null);
    return (0, s.jsx)("div", {
        className: e_.r,
        children: (0, s.jsx)(L.k, {
            label: P.intl.string(P.t.sN3wrd),
            inputRef: i,
            name: P.intl.string(P.t.sN3wrd),
            placeholder: P.intl.string(P.t.sN3wrd),
            onChange: (e) => t(e),
            value: n.name,
        }),
    });
};
var ec = n(462887),
    eE = n(331322),
    eh = n(736653),
    em = n(818348),
    ef = n(198650);
let eg = function (e) {
    let t = (0, eh.Ay)(),
        n = a.useRef(null),
        [i, r] = a.useState({}),
        l = (0, $.r)(z.A.colors.BACKGROUND_BASE_LOWER).hex();
    switch (
        (a.useLayoutEffect(() => {
            let { current: e } = n;
            if (null == e) return;
            let t = window.getComputedStyle(e),
                i = window.getComputedStyle(e, "::placeholder"),
                s = t.getPropertyValue("font-family"),
                a = t.getPropertyValue("font-weight");
            r({
                base: {
                    fontFamily: s,
                    fontWeight: a,
                    color: t.getPropertyValue("color"),
                    fontSize: t.getPropertyValue("font-size"),
                    backgroundColor: l,
                    padding: "12px",
                    "::placeholder": { color: i.getPropertyValue("color") },
                    borderRadius: z.A.radii.xs,
                },
            });
        }, [n, l]),
        e.type)
    ) {
        case em.he.PRZELEWY24: {
            let r = (0, ec.M)(t) ? "/assets/f4150b3aed6c4679.svg" : "/assets/8b825aafb2e4dbed.svg",
                { onNameChange: a, onEmailChange: l, onP24BankChange: d, p24BankValue: _, billingAddressInfo: u } = e;
            return (0, s.jsx)("div", {
                className: ef.rf,
                children: (0, s.jsxs)(eE.B, {
                    gap: 16,
                    children: [
                        (0, s.jsx)(L.k, {
                            label: P.intl.string(P.t["w/qqKK"]),
                            inputRef: n,
                            name: P.intl.string(P.t["w/qqKK"]),
                            placeholder: P.intl.string(P.t["w/qqKK"]),
                            onChange: (e) => l(e),
                            value: u.email,
                        }),
                        (0, s.jsx)(L.k, {
                            label: P.intl.string(P.t["yf7ms+"]),
                            name: P.intl.string(P.t["yf7ms+"]),
                            placeholder: P.intl.string(P.t["yf7ms+"]),
                            onChange: (e) => a(e),
                            value: u.name,
                        }),
                        (0, s.jsxs)(eE.B, {
                            gap: 4,
                            children: [
                                (0, s.jsx)(x.E, { variant: "text-sm/semibold", children: P.intl.string(P.t.De3b8t) }),
                                (0, s.jsx)(o.P24BankElement, {
                                    options: { value: _, style: i },
                                    onChange: (e) => d(e.value),
                                }),
                                (0, s.jsx)("div", {
                                    className: ef.je,
                                    children: (0, s.jsx)("img", { src: r, alt: "Przelewy24" }),
                                }),
                            ],
                        }),
                    ],
                }),
            });
        }
        case em.he.EPS: {
            let { onAccountHolderNameChange: r, onEPSBankChange: a, epsBankValue: l, billingAddressInfo: d } = e,
                _ = (0, ec.M)(t) ? "/assets/025b24b0055c8d81.svg" : "/assets/1dae7d71a65fd90f.svg";
            return (0, s.jsx)("div", {
                className: ef.rf,
                children: (0, s.jsxs)(eE.B, {
                    gap: 16,
                    children: [
                        (0, s.jsx)(L.k, {
                            label: P.intl.string(P.t.sN3wrd),
                            inputRef: n,
                            name: P.intl.string(P.t.sN3wrd),
                            placeholder: P.intl.string(P.t.sN3wrd),
                            onChange: (e) => r(e),
                            value: d.name,
                        }),
                        (0, s.jsxs)(eE.B, {
                            gap: 4,
                            children: [
                                (0, s.jsx)(x.E, { variant: "text-sm/semibold", children: P.intl.string(P.t.dFyV07) }),
                                (0, s.jsx)(o.EpsBankElement, {
                                    options: { value: l, style: i },
                                    onChange: (e) => a(e.value),
                                }),
                                (0, s.jsx)("div", {
                                    className: ef.je,
                                    children: (0, s.jsx)("img", { src: _, alt: "EPS" }),
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
var ep = n(211528),
    eA = n(232467),
    eI = n(626584),
    eT = n(156312),
    eS = n(166532),
    eN = n(69494),
    eC = n(19311),
    eR = n(482132),
    eO = n(615310),
    ey = n(364840),
    ev = n(73825),
    eD = n(558620),
    eL = n(94420),
    eb = n(683433),
    ew = n(36167),
    eP = n(937008),
    ek = (((r = {})[(r.UNKNOWN = 0)] = "UNKNOWN"), (r[(r.PENDING = 1)] = "PENDING"), (r[(r.DONE = 2)] = "DONE"), r);
let eM = 0,
    eU = null,
    ex = null,
    eG = null;
class eV extends _.Ay.Store {
    static displayName = "BrowserCheckoutStateStore";
    get browserCheckoutState() {
        return eM;
    }
    get loadId() {
        return eU;
    }
    get skuId() {
        return ex;
    }
    get planId() {
        return eG;
    }
}
let eF = new eV(f.h, {
    USER_PAYMENT_BROWSER_CHECKOUT_STARTED: function (e) {
        (eM = 1), (eU = e.loadId);
    },
    USER_PAYMENT_BROWSER_CHECKOUT_DONE: function (e) {
        eU === e.loadId && ((ex = e.skuId ?? null), (eG = e.skuSubscriptionPlanId ?? null), (eM = 2));
    },
});
var eB = n(788868),
    eH = n(647926);
let ej = (e) => {
        let t,
            { step: n, onPurchaseComplete: i, onHandoffFailure: r } = e,
            { setSelectedSkuId: o, setSelectedPlanId: l } = (0, eL.t4)((e) => ({
                setSelectedSkuId: e.setSelectedSkuId,
                setSelectedPlanId: e.setSelectedPlanId,
            })),
            {
                browserCheckoutState: d,
                browserCheckoutStateLoadId: u,
                browserCheckoutStateSkuId: c,
                browserCheckoutStatePlanId: E,
            } = (0, _.cf)([eF], () => ({
                browserCheckoutState: eF.browserCheckoutState,
                browserCheckoutStateLoadId: eF.loadId,
                browserCheckoutStateSkuId: eF.skuId,
                browserCheckoutStatePlanId: eF.planId,
            })),
            { contextMetadata: h } = (0, eT.P5)(),
            m = (0, eD.A)(),
            { isGift: f } = (0, eP.Pv)(),
            [g, A] = a.useState(!1);
        switch (n) {
            case eS.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
                t = N.do8.GOOGLE_PAY;
                break;
            case eS.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
                t = N.do8.APPLE_PAY;
        }
        return (
            a.useEffect(() => {
                let e = setTimeout(() => {
                    g ||
                        (A(!0),
                        (0, p.Ze)(h.loadId),
                        (0, ew.my)(
                            {
                                planId: m?.id ?? eB.gD.PREMIUM_MONTH_TIER_2,
                                isGift: f,
                                loadId: h.loadId,
                                paymentMethodType: t,
                            },
                            r,
                        ));
                }, 1e3);
                return () => clearTimeout(e);
            }, [m, f, h, r, A, g, t]),
            a.useEffect(() => {
                null !== c && (eB.oz.includes(c) && ((0, ev.ur)(c), (0, p.hP)()), o(c)),
                    null !== E && l(E),
                    u === h.loadId && d === ek.DONE && i();
            }, [o, l, d, u, c, E, h, i]),
            (0, s.jsxs)("div", {
                className: eH.rf,
                children: [
                    (0, s.jsx)(U.D, { variant: "heading-xl/bold", children: P.intl.string(P.t.C4HYfy) }),
                    (0, s.jsx)(x.E, {
                        variant: "text-md/normal",
                        className: eH.h_,
                        children: P.intl.string(P.t.xfG7Jp),
                    }),
                ],
            })
        );
    },
    eW = (e) => {
        let { onPrimaryClick: t, onBackClick: n } = e;
        return (0, s.jsx)(ey.j, {
            children: (0, s.jsxs)("div", {
                className: eH.kL,
                children: [
                    (0, s.jsx)(eb.A, { onClick: n }),
                    (0, s.jsx)(eb.F, { onClick: t, children: P.intl.string(P.t["4Qvmmj"]) }),
                ],
            }),
        });
    };
var eY = n(921925),
    eK = n(615405),
    ez = n(153084),
    e$ = n(295405),
    eq = n(293700),
    eX = n(67480),
    eZ = n(954571),
    eQ = n(427262),
    eJ = n(251913),
    e0 = n(632638),
    e1 = n(501280);
let e2 = null,
    e3 = null;
class e6 extends _.Ay.Store {
    static displayName = "AdyenStore";
    get client() {
        return e2;
    }
    get cashAppPayComponent() {
        return e3;
    }
}
let e4 = new e6(f.h, {
    ADYEN_CREATE_CLIENT_SUCCESS: function (e) {
        let { client: t } = e;
        e2 = t;
    },
    ADYEN_TEARDOWN_CLIENT: function () {
        e2 = null;
    },
    ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS: function (e) {
        let { component: t } = e;
        e3 = t;
    },
});
async function e7() {
    return await g.Bo.get({ url: N.Rsh.BILLING_ADYEN_PAYMENT_METHODS, oldFormErrors: !0, rejectWithError: !1 });
}
async function e5() {
    try {
        let e = await e7(),
            { default: t } = await Promise.all([n.e("94678"), n.e("40002")]).then(n.bind(n, 971193)),
            i = await t({
                environment: N.Gg3.ADYEN.KEY.startsWith("live_") ? "live" : "test",
                clientKey: N.Gg3.ADYEN.KEY,
                analytics: { enabled: !1 },
                paymentMethodsResponse: e.body,
            });
        f.h.dispatch({ type: "ADYEN_CREATE_CLIENT_SUCCESS", client: i }),
            (function (e) {
                if (null != e4.cashAppPayComponent) {
                    e4.cashAppPayComponent?.unmount(),
                        (function () {
                            if (null == e4.cashAppPayComponent)
                                throw Error("Adyen CashAppPay component must be created before mounting.");
                            e4.cashAppPayComponent?.mount(`#${e1.h}`);
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
                            if (n) f.h.dispatch({ type: "ADYEN_CASH_APP_PAY_SUBMIT_SUCCESS", data: t });
                            else throw (0, p.i0)("Cash App Pay setup attempt is not valid.");
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
                                        (n = !1), (t = P.intl.string(P.t.TJ8dDB));
                                }
                                (0, p.i0)(e.message, n, t);
                            }
                        },
                    })
                    .mount(`#${e1.h}`);
                f.h.dispatch({ type: "ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS", component: t });
            })(i);
    } catch (e) {
        (0, I.pM)(e), f.h.dispatch({ type: "ADYEN_CREATE_CLIENT_FAIL" });
    }
}
function e8() {
    let e = e4.cashAppPayComponent;
    if (null == e) throw Error("Adyen CashAppPay component must be created before submitting.");
    e.submit();
}
var e9 = n(40417);
class te extends a.PureComponent {
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
            i = n?.paymentMethod?.cashtag ?? "",
            r = null != n && "" !== i;
        return (0, s.jsxs)("div", {
            className: e,
            children: [
                (0, s.jsx)(b.Ay, { type: b.Ay.Types.CASH_APP, size: b.y3.MEDIUM, className: e9.K }),
                r
                    ? (0, s.jsxs)(s.Fragment, {
                          children: [
                              (0, s.jsx)(U.D, {
                                  variant: i.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
                                  className: e9.y,
                                  children: P.intl.format(P.t["ze/1yE"], { cashtag: i }),
                              }),
                              (0, s.jsx)(x.E, {
                                  variant: "text-md/medium",
                                  className: e9.y,
                                  children: P.intl.string(P.t.VPOx7N),
                              }),
                          ],
                      })
                    : (0, s.jsx)(x.E, {
                          variant: "text-md/medium",
                          className: e9.y,
                          children: null == t ? P.intl.string(P.t["CgVe/w"]) : P.intl.string(P.t["1MqcjI"]),
                      }),
            ],
        });
    }
}
let tt = _.Ay.connectStores([e4, w.A], () => ({
    cashAppPayComponent: e4.cashAppPayComponent,
    adyenPaymentData: w.A.adyenPaymentData,
}))(te);
var tn = n(73079),
    ti = n(459357),
    tr = n(550238),
    ts = n(869177),
    ta = n(71532),
    to = n(218075);
let tl = [eS.pn.PAYMENT_TYPE],
    td = [eS.pn.PAYMENT_TYPE, eS.pn.CREDIT_CARD_INFORMATION, eS.pn.ADDRESS],
    t_ = [eS.pn.PAYMENT_TYPE, eS.pn.PAYPAL_INFORMATION, eS.pn.ADDRESS],
    tu = [eS.pn.PAYMENT_TYPE, eS.pn.VENMO_INFORMATION, eS.pn.ADDRESS],
    tc = [eS.pn.PAYMENT_TYPE, eS.pn.CASH_APP_INFORMATION, eS.pn.ADDRESS],
    tE = [eS.pn.PAYMENT_TYPE, eS.pn.PRZELEWY24_INFORMATION, eS.pn.ADDRESS],
    th = [eS.pn.PAYMENT_TYPE, eS.pn.EPS_INFORMATION, eS.pn.ADDRESS],
    tm = [eS.pn.PAYMENT_TYPE, eS.pn.IDEAL_INFORMATION, eS.pn.ADDRESS],
    tf = [eS.pn.PAYMENT_TYPE, eS.pn.ADDRESS],
    tg = {
        SHARED_ADD_PAYMENT_STEPS: tl,
        SHARED_CREDIT_CARD_STEPS: td,
        SHARED_PAYPAL_STEPS: t_,
        SHARED_VENMO_STEPS: tu,
        SHARED_PRZELEWY24_STEPS: tE,
        SHARED_EPS_STEPS: th,
        SHARED_IDEAL_STEPS: tm,
        SHARED_CASH_APP_STEPS: tc,
        SHARED_TYPE_AND_ADDRESS_STEPS: tf,
    },
    tp = {
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
var tA = n(801753);
function tI(e) {
    return () => (null != w.A.error && (0, D.ET)(), e());
}
function tT(e) {
    let { onPrimary: t, onBack: n, ...i } = e,
        r = t;
    null != t && (r = tI(t));
    let a = n;
    return null != n && (a = tI(n)), (0, s.jsx)(eC.Ay, { ...i, onPrimary: r, onBack: a });
}
function tS(e) {
    let { paymentSourceTypeRestrictions: t } = e,
        n = null != t && t.length > 0 ? to.fU.ADD_NEW_PAYMENT_METHOD : void 0,
        { enabled: i } = (0, ti.c)({ location: "AddPaymentStep" });
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsx)(to.je, { paymentRestrictionBannerType: n }),
            (0, s.jsx)(tn.A, { ...e }),
            i && (0, s.jsx)(eA.Z4, { className: tA.SO }),
        ],
    });
}
let tN = (e) => {
        let {
                prependSteps: t,
                appendSteps: n,
                analyticsLocation: i,
                isEligibleForTrial: r,
                allowDesktopRedirectPurchase: a,
                onPaymentRequestSourceFailed: o,
                paymentModalArgs: l,
                handleStepChange: d,
                setPaymentMethodSteps: _,
                setPaymentRequestPaymentMethod: u,
                currentStep: c,
                setInfoNotice: E,
                completeSteps: h,
                paymentSourceTypeRestrictions: m,
                CREDIT_CARD_STEPS: f,
                PAYPAL_STEPS: g,
                VENMO_STEPS: A,
                PAYMENT_REQUEST_STEPS: I,
                PRZELEWY24_STEPS: T,
                EPS_STEPS: N,
                IDEAL_STEPS: C,
                CASH_APP_STEPS: R,
                setConnectorPaymentRequestReady: O,
                connectorPaymentRequestRef: y,
            } = e,
            { contextMetadata: v, activitySessionId: L } = (0, eT.P5)(),
            { setBillingAddressState: b } = l,
            k = (e, i) => {
                switch (e) {
                    case em.he.CARD:
                        a ? d(eS.pn.AWAITING_BROWSER_CHECKOUT) : (_(f), d(eS.pn.CREDIT_CARD_INFORMATION));
                        break;
                    case em.he.PAYPAL:
                        _(g), d(eS.pn.PAYPAL_INFORMATION);
                        break;
                    case em.he.VENMO:
                        _(A), d(eS.pn.VENMO_INFORMATION);
                        break;
                    case em.he.PAYMENT_REQUEST:
                        a && "googlePay" === i
                            ? d(eS.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY)
                            : a && "applePay" === i
                              ? d(eS.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY)
                              : (_(I), d(eS.pn.PAYMENT_REQUEST_INFORMATION));
                        break;
                    case em.he.PRZELEWY24:
                        _(T), d(eS.pn.PRZELEWY24_INFORMATION);
                        break;
                    case em.he.EPS:
                        _(N), d(eS.pn.EPS_INFORMATION);
                        break;
                    case em.he.IDEAL:
                        _(C), d(eS.pn.IDEAL_INFORMATION);
                        break;
                    case em.he.CASH_APP:
                        _(R), d(eS.pn.CASH_APP_INFORMATION);
                        break;
                    case em.he.GIROPAY:
                    case em.he.PAYSAFE_CARD:
                    case em.he.GCASH:
                    case em.he.GRABPAY_MY:
                    case em.he.MOMO_WALLET:
                    case em.he.KAKAOPAY:
                    case em.he.GOPAY_WALLET:
                    case em.he.BANCONTACT:
                        _({ steps: [...t, ...tf, ...n], methodType: e }), d(eS.pn.ADDRESS);
                }
                null != w.A.error && (0, D.ET)();
            },
            M = async (e, t) => {
                if (((0, D.mf)(e), null == e)) return void o();
                u(e);
                let { billingAddressInfo: n } = (0, ta.uK)(e),
                    r = (0, tr.Q)(n);
                if (((null == n.name || "" === n.name) && null != t && (n.name = t), b({ isValid: r, info: n }), !r))
                    return void d(eS.pn.ADDRESS);
                try {
                    var s;
                    (s = await (0, p.Tv)(e, n, i)), b((e) => ({ ...e, info: n })), _(I), h(s);
                } catch (e) {
                    o();
                }
            };
        if (c === eS.pn.ATTEMPT_GOOGLE_PAY || c === eS.pn.ATTEMPT_APPLE_PAY) {
            let e = P.intl.string(c === eS.pn.ATTEMPT_APPLE_PAY ? P.t.czhXDv : P.t.Zj2xQ0);
            return (0, s.jsx)(ts.V, {
                onChooseType: k,
                paymentRequestWallet: c === eS.pn.ATTEMPT_APPLE_PAY ? "applePay" : "googlePay",
                onStripePaymentMethodReceived: M,
                onPaymentRequestFailure: () => {
                    k(em.he.CARD), E(e);
                },
                onValidPaymentRequest: () => O(!0),
                paymentRequestRef: y,
            });
        }
        let U = !(0, S.isDesktop)() || a;
        return (0, s.jsx)(tS, {
            onChooseType: k,
            onStripePaymentMethodReceived: M,
            paymentRequestWallets: U ? ["googlePay", "applePay"] : [],
            isEligibleForTrial: r,
            paymentRequestPaymentContext: { contextMetadata: v, activitySessionId: L },
            paymentSourceTypeRestrictions: m,
        });
    },
    tC = (e) => {
        let {
            onReturn: t,
            shouldUseManaModal: n,
            handleStepChange: i,
            currentStep: r,
            connectorPaymentRequestReady: a,
            showConnectorPaymentRequest: o,
        } = e;
        if (r === eS.pn.ATTEMPT_GOOGLE_PAY || r === eS.pn.ATTEMPT_APPLE_PAY) {
            let e = P.intl.string(r === eS.pn.ATTEMPT_APPLE_PAY ? P.t.WoXvJL : P.t.wnVVr0);
            return (0, s.jsx)(tT, {
                onBack: () => i(eS.pn.PAYMENT_TYPE),
                primaryCTA: eC.Ay.CTAType.CONTINUE,
                primaryText: e,
                onPrimary: () => o(),
                primaryDisabled: !a,
                shouldUseManaModal: n,
            });
        }
        return (0, s.jsx)(tT, { onBack: t, shouldUseManaModal: n });
    };
var tR = n(198970),
    tO = n(546605),
    ty = n(116673),
    tv = n(773669);
let tD = (e) => {
        let t,
            { billingAddressInfo: n, billingError: i, onBillingAddressChange: r, paymentSourceType: o } = e,
            l = null != i && (null == i.code || ei(i) === en.ADDRESS),
            d = (0, _.bG)([tv.default], () => tv.default.locale);
        switch (o) {
            case N.hes.GIROPAY:
            case N.hes.PAYSAFE_CARD:
            case N.hes.GCASH:
            case N.hes.GRABPAY_MY:
            case N.hes.MOMO_WALLET:
            case N.hes.KAKAOPAY:
            case N.hes.GOPAY_WALLET:
            case N.hes.BANCONTACT:
                t = "en-US" === d ? tR.Ay.Layouts.MODAL_US_WITH_NAME : tR.Ay.Layouts.MODAL_INTL_WITH_NAME;
                break;
            case N.hes.VENMO:
            case N.hes.CASH_APP:
                t = tR.Ay.Layouts.MODAL_US_WITH_NAME;
                break;
            default:
                t = "en-US" === d ? tR.Ay.Layouts.MODAL_US : tR.Ay.Layouts.MODAL_INTL;
        }
        let u = (0, tO.vg)("AddressStep"),
            c = (0, ty.z)();
        return (
            0 === n.country.length && null != c && c.length > 0 && (n.country = c[0]),
            (0, s.jsxs)(a.Fragment, {
                children: [
                    l
                        ? (0, s.jsx)("div", {
                              className: er.QK,
                              children: (0, s.jsx)(m.w, { type: "critical", children: P.intl.string(P.t.vZ8y7l) }),
                          })
                        : null,
                    (0, s.jsx)(tR.Ay, {
                        className: er.__invalid_formItem,
                        onBillingAddressChange: r,
                        error: i,
                        layout: t,
                        allowedBillingAddressCountries: c,
                        ...n,
                    }),
                    u && null != c && c.length > 0
                        ? (0, s.jsx)(m.w, { type: "info", children: P.intl.string(P.t.Pg2hU0) })
                        : null,
                ],
            })
        );
    },
    tL = new eI.A("AddPaymentAddressStep.tsx");
function tb(e) {
    let { billingAddressInfo: t, onBillingAddressChange: n, paymentSourceType: i } = e,
        r = (0, _.bG)([w.A], () => w.A.error);
    return (0, s.jsx)(tD, { billingAddressInfo: t, billingError: r, onBillingAddressChange: n, paymentSourceType: i });
}
function tw(e) {
    let { paymentModalArgs: t, shouldUsePaymentElement: n, paymentSourceType: i } = e,
        { billingAddressState: r, setBillingAddressState: a } = t;
    return n
        ? null
        : (0, s.jsx)(tb, {
              billingAddressInfo: r.info,
              onBillingAddressChange: (e, t) => {
                  a({ info: { ...r.info, ...e }, isValid: t });
              },
              paymentSourceType: i,
          });
}
function tP(e) {
    let {
            paymentModalArgs: t,
            shouldUseManaModal: n,
            analyticsLocation: i,
            overwriteSubscriptionPaymentSource: r,
            handleStepChange: a,
            onPaymentRequestSourceFailed: o,
            paymentRequestPaymentMethod: l,
            completeSteps: _,
            paymentMethodSteps: u,
            paymentElementSelectedType: c,
            returnToPaymentElementStep: E,
            combinedStripeElementsRef: h,
            lastConfirmedSetupIntentRef: m,
            shouldUsePaymentElement: f,
        } = e,
        { stripe: g } = (0, eT.P5)(),
        {
            tokenState: A,
            isSubmittingCurrentStep: I,
            billingAddressState: T,
            setIsSubmittingCurrentStep: S,
            hasRedirectURL: N,
            setHasRedirectURL: C,
            braintreeNonce: R,
            adyenPaymentData: O,
            isAuthenticating: y,
            epsBankState: v,
            p24BankState: D,
        } = t,
        L = async () => {
            S(!0);
            let e = f ? c : u.methodType,
                t = [
                    g,
                    h.current,
                    { billingAddress: T.info, paymentSourceType: e ?? em.he.UNKNOWN, lastConfirmedSetupIntentRef: m },
                    i,
                ];
            switch (e) {
                case em.he.PAYMENT_REQUEST:
                    if (f) {
                        try {
                            let e = await (0, p.im)(...t);
                            _(e);
                        } catch (e) {
                            S(!1), tL.warn("Error confirming Payment Element source for Payment Request: ", e);
                        }
                        break;
                    }
                    if (null == l) throw (o(), (0, p.i0)("Missing paymentRequestPaymentMethod"));
                    _(await (0, p.Tv)(l, T.info, i));
                    break;
                case em.he.CARD:
                    try {
                        let e = f ? await (0, p.im)(...t) : await (0, p.u6)(g, A.token, T.info, i);
                        _(e);
                    } catch {}
                    break;
                case em.he.VENMO:
                case em.he.PAYPAL:
                    try {
                        d()(null != R, "Missing braintreeNonce");
                        let e = await (0, p.u1)(R, T.info, i);
                        _(e);
                    } catch {}
                    break;
                case em.he.EPS:
                    try {
                        let e = await (0, p.Z9)(g, v, T.info, i);
                        _(e);
                    } catch (e) {
                        tL.warn(e);
                    }
                    break;
                case em.he.IDEAL:
                    try {
                        let e = f ? await (0, p.im)(...t) : await (0, p.EB)(g, T.info, i);
                        _(e);
                    } catch (e) {
                        tL.warn(e);
                    }
                    break;
                case em.he.PRZELEWY24:
                    try {
                        if (void 0 === D) throw (0, p.i0)("Bank required for Przelewy24");
                        let e = await (0, p.TD)(g, { p24Bank: D }, T.info, i);
                        _(e);
                    } catch {}
                    break;
                case em.he.PAYSAFE_CARD:
                case em.he.GRABPAY_MY:
                    try {
                        let t = await (0, p.A8)(T.info, e, i);
                        _(t);
                    } catch {}
                    break;
                case em.he.GCASH:
                case em.he.MOMO_WALLET:
                case em.he.KAKAOPAY:
                case em.he.GOPAY_WALLET:
                    try {
                        let { redirectConfirmation: t } = await (0, p.$M)(T.info, e, i);
                        C(t);
                    } catch {}
                    break;
                case em.he.GIROPAY:
                case em.he.BANCONTACT:
                    try {
                        let t = await (0, p.bw)(g, T.info, e, i);
                        _(t);
                    } catch {}
                    break;
                case em.he.CASH_APP:
                    try {
                        d()(null != O, "Missing adyenPaymentData");
                        let { paymentSource: t } = await (0, p.$M)(T.info, e, i, O, r);
                        d()(null != t, "Cash App Pay Payment Source missing"), _(t);
                    } catch {}
                    break;
                default:
                    throw Error("unknown step not handled");
            }
            N || S(!1);
        },
        b = u.methodType,
        { backStep: w } = f
            ? { backStep: eS.pn.PAYMENT_ELEMENT }
            : ((e) => {
                  switch (e) {
                      case em.he.CARD:
                          return { backStep: eS.pn.CREDIT_CARD_INFORMATION };
                      case em.he.PAYPAL:
                          return { backStep: eS.pn.PAYPAL_INFORMATION };
                      case em.he.VENMO:
                          return { backStep: eS.pn.VENMO_INFORMATION };
                      case em.he.GIROPAY:
                      case em.he.PAYSAFE_CARD:
                      case em.he.GCASH:
                      case em.he.GRABPAY_MY:
                      case em.he.MOMO_WALLET:
                      case em.he.KAKAOPAY:
                      case em.he.GOPAY_WALLET:
                      case em.he.BANCONTACT:
                          return { backStep: eS.pn.PAYMENT_TYPE };
                      case em.he.EPS:
                          return { backStep: eS.pn.EPS_INFORMATION };
                      case em.he.IDEAL:
                          return { backStep: eS.pn.IDEAL_INFORMATION };
                      case em.he.PRZELEWY24:
                          return { backStep: eS.pn.PRZELEWY24_INFORMATION };
                      case em.he.CASH_APP:
                          return { backStep: eS.pn.CASH_APP_INFORMATION };
                      default:
                          return { backStep: eS.pn.PAYMENT_TYPE };
                  }
              })(b),
        k = f ? () => E(void 0) : () => a(w);
    return (0, s.jsx)(tT, {
        onBack: k,
        primaryCTA: eC.Ay.CTAType.CONTINUE,
        primaryText: P.intl.string(P.t.PDTjLN),
        primarySubmitting: I,
        primaryDisabled: !T.isValid || y,
        onPrimary: L,
        shouldUseManaModal: n,
    });
}
let tk = new eI.A("PaymentElementStepFooter.tsx"),
    tM = (e) => {
        let { stripe: t } = (0, eT.P5)(),
            {
                shouldUseManaModal: n,
                paymentModalArgs: i,
                handleStepChange: r,
                setPaymentMethodSteps: o,
                onBack: l,
                primarySubmitting: d,
                primaryDisabled: _,
                PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: u,
            } = e,
            { setIsSubmittingCurrentStep: c, setBillingAddressState: E } = i,
            { paymentElementSelectedType: h, combinedStripeElementsRef: m, remountAddressElement: f } = e,
            g = a.useCallback(async () => {
                c(!0);
                try {
                    if (null == h || !(0, ed.PE)(h)) throw (0, p.ne)("Valid Payment Element source type not found", !0);
                    let { steps: e, methodType: n } = u[h];
                    if ((o({ steps: e, methodType: n === em.he.UNKNOWN ? h : n }), h === em.he.PAYMENT_REQUEST)) {
                        let e = m.current,
                            { paymentMethod: n } = await (0, p.YB)(t, e),
                            { billingAddressInfo: i } = (0, ta.uK)(n);
                        E((e) => ({ ...e, info: i })), f(), r(eS.pn.ADDRESS);
                    } else {
                        let e = (0, ed.eI)(h);
                        null != e ? r(e) : r(eS.pn.ADDRESS);
                    }
                } catch (e) {
                    tk.error("Error on submitting Payment Element step: ", e.message ?? JSON.stringify(e));
                } finally {
                    c(!1);
                }
            }, [h, u, m, f, r, t, o, c, E]);
        return (0, s.jsx)(tT, {
            onBack: l,
            primaryCTA: eC.Ay.CTAType.CONTINUE,
            primaryType: "submit",
            primaryText: P.intl.string(P.t.PDTjLN),
            primarySubmitting: d,
            primaryDisabled: _,
            onPrimary: g,
            shouldUseManaModal: n,
        });
    };
var tU = n(691189);
let tx = new eI.A("AddPaymentStep.tsx"),
    tG = { name: "", cardNumber: "", expirationDate: "", cvc: "" },
    tV = { email: "", name: "", country: "", line1: "", line2: "", city: "", postalCode: "", state: "" };
function tF(e) {
    let { onCardInfoChange: t } = e,
        n = (0, _.bG)([w.A], () => w.A.error);
    return (0, s.jsx)(es, { billingError: n, onCardInfoChange: t });
}
function tB() {
    return (0, s.jsx)(M, {});
}
function tH() {
    return (0, s.jsx)(F, {});
}
function tj() {
    return (0, s.jsx)(tt, {});
}
function tW() {
    let e = (0, _.bG)([eK.A], () => eK.A.isBusy),
        t = (0, _.bG)([w.A], () => w.A.stripePaymentMethod);
    return (0, s.jsx)(ea, { stripePaymentMethod: t, submitting: e });
}
function tY() {
    return (0, s.jsx)(B.N, {});
}
function tK(e) {
    let t,
        n,
        {
            paymentModalArgs: i,
            initialStep: r,
            prependSteps: l,
            appendSteps: d,
            onReturn: g,
            onComplete: I,
            onStepChange: T,
            breadcrumpSteps: S,
            currentBreadcrumpStep: C,
            header: R,
            analyticsData: v,
            analyticsLocation: D,
            hideBreadcrumbs: L = !1,
            usePaymentModalStep: b = !1,
            isEligibleForTrial: k = !1,
            allowDesktopRedirectPurchase: M = !1,
            toastContent: U,
            continueSessionToInitialStep: x,
            overwriteSubscriptionPaymentSource: G = !1,
            shouldUseManaModal: V = !0,
        } = e,
        { stripe: F, contextMetadata: B, activitySessionId: H, paymentElementsEnabled: j } = (0, eT.P5)(),
        W = (0, eO.l)(),
        Y = a.useMemo(() => {
            let e = r === eS.pn.PAYMENT_TYPE || r === eS.pn.PAYMENT_ELEMENT;
            return j && e ? (M ? eS.pn.AWAITING_BROWSER_CHECKOUT : eS.pn.PAYMENT_ELEMENT) : r;
        }, [j, r, M]),
        K = a.useMemo(() => (0, eQ.Gn)(), []),
        {
            CREDIT_CARD_STEPS: z,
            PAYPAL_STEPS: $,
            IDEAL_STEPS: q,
            PAYMENT_REQUEST_STEPS: X,
            VENMO_STEPS: Z,
            ADD_PAYMENT_STEPS: Q,
            PRZELEWY24_STEPS: J,
            EPS_STEPS: ee,
            CASH_APP_STEPS: et,
            PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: en,
        } = ((e) => {
            let { prependSteps: t, appendSteps: n, paymentElementsEnabled: i } = e,
                [r, s, o, l, d, _, u, c, E, h] = (0, a.useMemo)(
                    () =>
                        ((e, t) => {
                            let { prependSteps: n, appendSteps: i, paymentElementsEnabled: r } = t;
                            return e.map((e) => {
                                let { sharedStepsKey: t, methodType: s } = e;
                                return {
                                    steps: [
                                        ...n,
                                        ...(r && (null == s || s === em.he.UNKNOWN || (0, ed.PE)(s)) ? tp[t] : tg[t]),
                                        ...i,
                                    ],
                                    methodType: s,
                                };
                            });
                        })(
                            [
                                { sharedStepsKey: "SHARED_TYPE_AND_ADDRESS_STEPS", methodType: em.he.UNKNOWN },
                                { sharedStepsKey: "SHARED_ADD_PAYMENT_STEPS", methodType: em.he.PAYMENT_REQUEST },
                                { sharedStepsKey: "SHARED_ADD_PAYMENT_STEPS" },
                                { sharedStepsKey: "SHARED_CREDIT_CARD_STEPS", methodType: em.he.CARD },
                                { sharedStepsKey: "SHARED_PAYPAL_STEPS", methodType: em.he.PAYPAL },
                                { sharedStepsKey: "SHARED_IDEAL_STEPS", methodType: em.he.IDEAL },
                                { sharedStepsKey: "SHARED_VENMO_STEPS", methodType: em.he.VENMO },
                                { sharedStepsKey: "SHARED_PRZELEWY24_STEPS", methodType: em.he.PRZELEWY24 },
                                { sharedStepsKey: "SHARED_EPS_STEPS", methodType: em.he.EPS },
                                { sharedStepsKey: "SHARED_CASH_APP_STEPS", methodType: em.he.CASH_APP },
                            ],
                            { prependSteps: t, appendSteps: n, paymentElementsEnabled: i },
                        ),
                    [t, n, i],
                ),
                m = (0, a.useMemo)(
                    () => ({
                        [em.he.CARD]: l,
                        [em.he.PAYPAL]: d,
                        [em.he.PAYMENT_REQUEST]: s,
                        [em.he.VENMO]: u,
                        [em.he.CASH_APP]: h,
                        [em.he.IDEAL]: _,
                        [em.he.PRZELEWY24]: c,
                        [em.he.EPS]: E,
                        [em.he.BANCONTACT]: r,
                        [em.he.GOPAY_WALLET]: r,
                        [em.he.KAKAOPAY]: r,
                        [em.he.GCASH]: r,
                        [em.he.PAYSAFE_CARD]: r,
                        [em.he.GRABPAY_MY]: r,
                        [em.he.MOMO_WALLET]: r,
                    }),
                    [r, l, d, u, s, _, h, c, E],
                );
            return {
                DEFAULT_PAYMENT_ELEMENT_STEPS: r,
                CREDIT_CARD_STEPS: l,
                PAYPAL_STEPS: d,
                IDEAL_STEPS: _,
                PAYMENT_REQUEST_STEPS: s,
                VENMO_STEPS: u,
                ADD_PAYMENT_STEPS: o,
                PRZELEWY24_STEPS: c,
                EPS_STEPS: E,
                CASH_APP_STEPS: h,
                PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: m,
            };
        })({ prependSteps: l, appendSteps: d, paymentElementsEnabled: j }),
        [ei, er] = a.useState(Y),
        [es, ea] = a.useState(null),
        [eo, el] = a.useState(
            (function (e) {
                switch (e) {
                    case eS.pn.CREDIT_CARD_INFORMATION:
                        return z;
                    case eS.pn.CASH_APP_INFORMATION:
                        return et;
                    default:
                        return { steps: [eS.pn.ADD_PAYMENT_STEPS] };
                }
            })(Y),
        );
    a.useEffect(() => {
        (0, p.IV)();
    }, []);
    let e_ = (0, _.bG)([w.A], () => w.A.redirectedPaymentSourceId),
        ec = (0, _.bG)([e4], () => e4.cashAppPayComponent),
        eE = { completeSteps: e5, setIsSubmittingCurrentStep: i.setIsSubmittingCurrentStep },
        eh = a.useRef(eE);
    a.useEffect(() => {
        eh.current = eE;
    }),
        a.useEffect(() => {
            let { completeSteps: e, setIsSubmittingCurrentStep: t } = eh.current;
            (async () => {
                if (null == e_) return;
                await (0, p.$o)();
                let n = e$.A.getPaymentSource(e_);
                null != n && (e(n), t(!1), w.A.clearRedirectedPaymentSourceId());
            })();
        }, [e_]);
    let ef = a.useCallback(
            function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                ea(null), er(e), t && T({ currentStep: ei, toStep: e });
            },
            [ei, T],
        ),
        eI = a.useCallback(
            (e) => {
                eZ.default.track(N.HAw.PAYMENT_FLOW_ADD_SOURCE_COMPLETED, {
                    load_id: B.loadId,
                    analytics_location: D,
                    payment_source_id: e.id,
                    payment_source_type: e.type,
                    payment_source_country: e.paymentMethodCountry,
                });
            },
            [B.loadId, D],
        ),
        ey = (0, _.bG)([w.A], () => w.A.error),
        ev = a.useRef(ey);
    a.useEffect(() => {
        let e = ev.current;
        (ev.current = ey),
            null != ey &&
                ey !== e &&
                eZ.default.track(N.HAw.PAYMENT_FLOW_ADD_SOURCE_ERROR, {
                    load_id: B.loadId,
                    analytics_location: D,
                    payment_source_type: eo.methodType,
                    error_code: ey.code,
                    error_message: ey.message,
                });
    }, [ey, B.loadId, D, eo.methodType]);
    let eD = a.useCallback(
            (e) => {
                eI(e),
                    (0, u.P0)(
                        (0, c.o)(void 0 !== U ? U : P.intl.string(P.t["VJPg+l"]), E.Ck.SUCCESS, {
                            position: E.xJ.BOTTOM,
                        }),
                    ),
                    I(ei, e),
                    ef(Y, !1);
            },
            [ef, Y, ei, I, U, eI],
        ),
        [eL, eb] = a.useState(null),
        {
            setPaymentSourceId: ew,
            creditCardState: eP,
            setCreditCardState: ek,
            setTokenState: eM,
            isSubmittingCurrentStep: eU,
            billingAddressState: ex,
            setBillingAddressState: eG,
            setIsSubmittingCurrentStep: eV,
            braintreeEmail: eF,
            braintreeNonce: eB,
            venmoUsername: eH,
            adyenPaymentData: eK,
            epsBankState: ez,
            setEpsBankState: eq,
            p24BankState: eJ,
            setP24BankState: e1,
            selectedSkuId: e2,
        } = i,
        e3 = e2 ?? "",
        e6 = (0, _.bG)([eX.A], () => eX.A.get(e3), [e3]),
        e7 = e6?.eligiblePaymentGateways?.map((e) => e.valueOf());
    function e5(e) {
        ew(e.id), eD(e);
    }
    let e9 = () => {
            el(Q), ef(eS.pn.PAYMENT_TYPE);
        },
        te = (0, ep.wD)({
            step: ei,
            continueSessionToInitialStep: x,
            paymentElementsEnabled: j,
            handleStepChange: ef,
            logger: tx,
            shouldLogOnChangeEvents: K || !1,
            onBillingAddressChange: (e, t) => {
                eG({ info: { ...ex.info, ...e }, isValid: t });
            },
        }),
        {
            shouldRenderPaymentElement: tt,
            paymentElementReady: tn,
            paymentElementSelectedType: ti,
            returnToPaymentElementStep: tr,
            onBackFromPaymentElement: ts,
            combinedStripeElementsRef: ta,
            stripePaymentElementProps: to,
            stripeAddressElementProps: tl,
            remountAddressElement: td,
            addressElementKey: t_,
        } = te,
        tu = a.useCallback(() => {
            ef(eS.pn.ADDRESS), j && ep.Ky.includes(ei) && td();
        }, [ef, j, td, ei]),
        tc = a.useCallback(
            (e) => {
                j && null != ti && (0, ed.PE)(e) ? tr(e) : ef(eS.pn.PAYMENT_TYPE);
            },
            [j, ti, tr, ef],
        ),
        tE = b ? (0, s.jsx)(eY.A, { className: tA._8 }) : null,
        th = (() => {
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
    switch (ei) {
        case eS.pn.ATTEMPT_GOOGLE_PAY:
        case eS.pn.ATTEMPT_APPLE_PAY:
        case eS.pn.PAYMENT_TYPE:
            (t = (0, s.jsx)(tN, {
                prependSteps: l,
                appendSteps: d,
                analyticsLocation: D,
                isEligibleForTrial: k,
                allowDesktopRedirectPurchase: M,
                onPaymentRequestSourceFailed: e9,
                paymentModalArgs: i,
                handleStepChange: ef,
                setPaymentMethodSteps: el,
                setPaymentRequestPaymentMethod: eb,
                currentStep: ei,
                setInfoNotice: ea,
                completeSteps: e5,
                paymentSourceTypeRestrictions: e7,
                CREDIT_CARD_STEPS: z,
                PAYPAL_STEPS: $,
                VENMO_STEPS: Z,
                PAYMENT_REQUEST_STEPS: X,
                PRZELEWY24_STEPS: J,
                EPS_STEPS: ee,
                IDEAL_STEPS: q,
                CASH_APP_STEPS: et,
                ...th,
            })),
                (n = (0, s.jsx)(tC, {
                    shouldUseManaModal: V,
                    onReturn: g,
                    handleStepChange: ef,
                    currentStep: ei,
                    ...th,
                }));
            break;
        case eS.pn.PAYMENT_ELEMENT:
            if (!j) throw (0, p.ne)("Payment Elements not enabled, invalid step", !0);
            (t = null),
                (n = (0, s.jsx)(tM, {
                    handleStepChange: ef,
                    shouldUseManaModal: V,
                    setPaymentMethodSteps: el,
                    primarySubmitting: eU,
                    primaryDisabled: !tn,
                    onBack: () => {
                        ts(), g?.();
                    },
                    paymentModalArgs: i,
                    PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: en,
                    ...te,
                }));
            break;
        case eS.pn.CREDIT_CARD_INFORMATION:
            let tm = async (e) => {
                eV(!0);
                try {
                    let t = await (0, p.YJ)(F, e);
                    eM({ token: t }), ef(eS.pn.ADDRESS);
                } catch (e) {
                    tx.error(e.message ?? JSON.stringify(e));
                } finally {
                    eV(!1);
                }
            };
            t = (0, s.jsx)(tF, {
                onCardInfoChange: (e, t) => {
                    ek({ info: e, isValid: t }), eG((t) => ({ ...t, info: { ...t.info, name: e.name } }));
                },
            });
            let tf = !eP.isValid,
                tI = () => {
                    ef(eS.pn.PAYMENT_TYPE);
                };
            n = (0, s.jsx)(o.ElementsConsumer, {
                children: (e) => {
                    let { elements: t } = e;
                    return (0, s.jsx)(tT, {
                        onBack: tI,
                        primaryCTA: eC.Ay.CTAType.CONTINUE,
                        primaryType: "submit",
                        primaryText: P.intl.string(P.t.PDTjLN),
                        primarySubmitting: eU,
                        primaryDisabled: tf,
                        onPrimary: () => tm(t),
                        shouldUseManaModal: V,
                    });
                },
            });
            break;
        case eS.pn.AWAITING_BROWSER_CHECKOUT:
        case eS.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
        case eS.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
            let tS = () => {
                el(z), ef(j ? eS.pn.PAYMENT_ELEMENT : eS.pn.CREDIT_CARD_INFORMATION);
            };
            (t = (0, s.jsx)(ej, { step: ei, onPurchaseComplete: () => I(ei), onHandoffFailure: tS })),
                (n = (0, s.jsx)(eW, {
                    onPrimaryClick: tS,
                    onBackClick: () => {
                        j ? (ts(), g?.()) : (el(Q), ef(eS.pn.PAYMENT_TYPE));
                    },
                }));
            break;
        case eS.pn.EPS_INFORMATION:
            (t = (0, s.jsx)(eg, {
                type: em.he.EPS,
                onAccountHolderNameChange: (e) => eG({ info: { ...ex.info, name: e }, isValid: ex.isValid }),
                onEPSBankChange: (e) => eq(e),
                epsBankValue: ez,
                billingAddressInfo: ex.info,
            })),
                (n = (0, s.jsx)(tT, {
                    onBack: () => tc(em.he.EPS),
                    primaryCTA: eC.Ay.CTAType.CONTINUE,
                    primaryText: P.intl.string(P.t.PDTjLN),
                    primaryDisabled: void 0 === ez || "" === ez || "" === ex.info.name,
                    onPrimary: () => tu(),
                    shouldUseManaModal: V,
                }));
            break;
        case eS.pn.IDEAL_INFORMATION:
            (t = (0, s.jsx)(eu, {
                type: em.he.IDEAL,
                onAccountHolderNameChange: (e) => eG({ info: { ...ex.info, name: e }, isValid: ex.isValid }),
                billingAddressInfo: ex.info,
            })),
                (n = (0, s.jsx)(tT, {
                    onBack: () => ef(eS.pn.PAYMENT_TYPE),
                    primaryCTA: eC.Ay.CTAType.CONTINUE,
                    primaryText: P.intl.string(P.t.PDTjLN),
                    primaryDisabled: "" === ex.info.name,
                    onPrimary: () => tu(),
                    shouldUseManaModal: V,
                }));
            break;
        case eS.pn.PRZELEWY24_INFORMATION:
            (t = (0, s.jsx)(eg, {
                type: em.he.PRZELEWY24,
                onNameChange: (e) => eG({ info: { ...ex.info, name: e }, isValid: ex.isValid }),
                onEmailChange: (e) => eG({ info: { ...ex.info, email: e }, isValid: ex.isValid }),
                onP24BankChange: (e) => {
                    e1(e);
                },
                p24BankValue: eJ,
                billingAddressInfo: ex.info,
            })),
                (n = (0, s.jsx)(tT, {
                    onBack: () => tc(em.he.PRZELEWY24),
                    primaryCTA: eC.Ay.CTAType.CONTINUE,
                    primaryText: P.intl.string(P.t.PDTjLN),
                    primaryDisabled:
                        void 0 === ex.info.name ||
                        "" === ex.info.name ||
                        void 0 === ex.info.email ||
                        "" === ex.info.email ||
                        void 0 === eJ ||
                        "" === eJ,
                    onPrimary: () => tu(),
                    shouldUseManaModal: V,
                }));
            break;
        case eS.pn.PAYPAL_INFORMATION:
            let tR = 0 !== eF.length && null != eB;
            (t = (0, s.jsx)(tB, {})),
                (n = (0, s.jsx)(tT, {
                    onBack: () => tc(em.he.PAYPAL),
                    primaryCTA: eC.Ay.CTAType.CONTINUE,
                    primaryText: tR ? P.intl.string(P.t.PDTjLN) : P.intl.string(P.t.Djzd7L),
                    onPrimary: () => {
                        let e;
                        return tR
                            ? tu()
                            : void (null == (e = A.A.getLastURL())
                                  ? O()
                                  : (f.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_START" }), window.open(e)));
                    },
                    shouldUseManaModal: V,
                }));
            break;
        case eS.pn.VENMO_INFORMATION:
            let tO = 0 !== eH.length && null != eB;
            (t = (0, s.jsx)(tH, {})),
                (n = (0, s.jsx)(tT, {
                    onBack: () => tc(em.he.VENMO),
                    primaryCTA: eC.Ay.CTAType.CONTINUE,
                    primaryText: tO ? P.intl.string(P.t.PDTjLN) : P.intl.string(P.t["4KoTLM"]),
                    onPrimary: () => (tO ? tu() : void y()),
                    shouldUseManaModal: V,
                }));
            break;
        case eS.pn.PAYMENT_REQUEST_INFORMATION:
            (t = (0, s.jsx)(tW, {})),
                (n = (0, s.jsx)(tT, { onBack: () => ef(eS.pn.PAYMENT_TYPE), shouldUseManaModal: V }));
            break;
        case eS.pn.CASH_APP_INFORMATION:
            let ty = null != eK;
            (t = (0, s.jsx)(tj, {})),
                (n = (0, s.jsx)(tT, {
                    onBack: () => tc(em.he.CASH_APP),
                    primaryCTA: eC.Ay.CTAType.CONTINUE,
                    primaryText: ty ? P.intl.string(P.t.PDTjLN) : P.intl.string(P.t["9ALP8w"]),
                    onPrimary: () => (ty ? tu() : e8()),
                    primaryDisabled: null == ec,
                    shouldUseManaModal: V,
                }));
            break;
        case eS.pn.ADDRESS:
            let tv = j && null != ti;
            (t = (0, s.jsx)(tw, {
                paymentModalArgs: i,
                paymentSourceType: eo.methodType ?? em.he.CARD,
                shouldUsePaymentElement: tv,
            })),
                (n = (0, s.jsx)(tP, {
                    paymentModalArgs: i,
                    shouldUseManaModal: V,
                    analyticsLocation: D,
                    overwriteSubscriptionPaymentSource: G,
                    handleStepChange: ef,
                    onPaymentRequestSourceFailed: e9,
                    paymentRequestPaymentMethod: eL,
                    completeSteps: e5,
                    paymentMethodSteps: eo,
                    shouldUsePaymentElement: tv,
                    ...te,
                }));
            break;
        case eS.pn.AWAITING_AUTHENTICATION:
            t = (0, s.jsx)(tY, {});
            break;
        default:
            throw Error(`Unexpected step: ${ei}`);
    }
    let tD = j && tt,
        tL = tD ? "combined_stripe_elements" : void 0,
        tb = (0, s.jsxs)(h.Y, {
            className: tU.C9,
            staticClassName: tU.a2,
            animatedNodeClassName: tU.L2,
            fillParent: !0,
            overrideKey: tL,
            step: ei,
            steps: eo.steps,
            sideMargin: 20,
            children: [
                null != es &&
                    (0, s.jsx)("div", { className: tA.Ns, children: (0, s.jsx)(m.w, { type: "info", children: es }) }),
                tD &&
                    (0, s.jsx)(ep.e4, {
                        step: ei,
                        analyticsContext:
                            null != v ? { activitySessionId: H, contextMetadata: B, analyticsData: v } : void 0,
                        paymentElementSelectedType: ti,
                        elementsRef: ta,
                        stripePaymentElementProps: to,
                        stripeAddressElementProps: tl,
                        addressElementKey: t_,
                        billingAddressInfo: ex.info,
                        onSetupError: () => {
                            ts(), ef(eS.pn.PAYMENT_TYPE);
                        },
                        paymentElementFooter: (0, s.jsx)(eA.Z4, {
                            className: tA.SO,
                            stackingBehavior: "stack",
                            onComplete: () => {
                                setTimeout(() => W(eS.pn.REVIEW), 0);
                            },
                        }),
                    }),
                t,
            ],
        }),
        tk = ei === eS.pn.PAYMENT_TYPE && 0 === l.length ? null : n;
    return b
        ? (0, s.jsxs)(s.Fragment, {
              children: [
                  k && (0, s.jsx)(eN.A, { className: tA.At, isEligibleForTrial: k }),
                  (0, s.jsxs)(eR.dZ, { children: [tE, tb] }),
                  (0, s.jsx)(eR.UX, { children: tk }),
              ],
          })
        : (0, s.jsx)(e0.A, {
              shouldUseManaModal: V,
              steps: S ?? eo.steps,
              currentStep: C ?? ei,
              overrideKey: tL,
              paymentError: i.paymentError,
              header: R,
              hideBreadcrumbs: L,
              body: tb,
              footer: tk,
          });
}
function tz(e) {
    let {
            defaultPaymentSourceId: t,
            paymentSources: n,
            hasFetchedPaymentSources: i,
        } = (0, _.cf)([e$.A], () => ({
            defaultPaymentSourceId: void 0 !== e ? e : e$.A.defaultPaymentSourceId,
            paymentSources: e$.A.paymentSources,
            hasFetchedPaymentSources: e$.A.hasFetchedPaymentSources,
        })),
        r = (0, _.bG)([e4], () => e4.cashAppPayComponent),
        s = (0, _.bG)([el.A], () => el.A.data?.allowed_payment_source_types ?? null);
    (0, eo.Ay)(() => {
        (0, T.j)().then((e) => {
            e.client
                .create({ authorization: N.Gg3.BRAINTREE.KEY })
                .then((e) => {
                    new Promise((e, t) => {
                        let n = Date.now(),
                            i = () => {
                                Date.now() - n >= 5e3
                                    ? t(Error("Timeout waiting for Braintree client to be initialized in store"))
                                    : null != A.A.getClient()
                                      ? e()
                                      : setTimeout(i, 1e3);
                            },
                            r = () => {
                                f.h.unsubscribe("BRAINTREE_CREATE_CLIENT_SUCCESS", r), setTimeout(i, 0);
                            };
                        f.h.subscribe("BRAINTREE_CREATE_CLIENT_SUCCESS", r);
                    })
                        .then(() => {
                            R(), C();
                        })
                        .catch((e) => {
                            I.pM(e);
                        }),
                        f.h.dispatch({ type: "BRAINTREE_CREATE_CLIENT_SUCCESS", client: e });
                })
                .catch(() => f.h.dispatch({ type: "BRAINTREE_CREATE_CLIENT_FAIL" }));
        }),
            i || (0, p.$o)();
    }),
        a.useEffect(() => {
            null == r && null != s && s.includes(em.he.CASH_APP) && e5();
        }, [s, r]);
    let [o, l] = a.useState(t);
    null != t && null == o && l(t);
    let [d, u] = a.useState(() => ({ info: tG, isValid: !1 })),
        [c, E] = a.useState(() => ({ info: tV, isValid: !1 })),
        [h, m] = a.useState(""),
        [g, S] = a.useState(""),
        [O, y] = a.useState(() => ({ token: null })),
        [v, L, b, P, k] = (0, _.yK)([w.A], () => [
            w.A.braintreeEmail,
            w.A.braintreeNonce,
            w.A.error,
            w.A.venmoUsername,
            w.A.adyenPaymentData,
        ]),
        [M, U] = (0, _.yK)([ez.A], () => [ez.A.error, ez.A.isAwaitingAuthentication]);
    a.useEffect(() => {
        let e = (e) => {
            let { billingAddress: t } = e;
            E({ info: t, isValid: t.country.length > 0 });
        };
        return (
            f.h.subscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e),
            () => {
                f.h.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e), (0, D.ET)();
            }
        );
    }, []);
    let [x, G] = a.useState(!1),
        [V, F] = a.useState(!1),
        [B, H] = a.useState(null),
        j = a.useRef(null),
        W = (0, _.bG)([ez.A], () => ez.A.isAwaitingAuthentication),
        [Y, K] = (0, _.yK)([eq.A], () => [eq.A.purchaseTokenAuthState, eq.A.purchaseTokenHash]);
    return (
        a.useEffect(() => {
            null != B && null != j.current && j.current.scrollIntoView({ behavior: "smooth" });
        }, [B]),
        {
            paymentSources: n,
            paymentSourceId: o,
            hasFetchedPaymentSources: i,
            setPaymentSourceId: l,
            creditCardState: d,
            setCreditCardState: u,
            tokenState: O,
            setTokenState: y,
            billingAddressState: c,
            setBillingAddressState: E,
            isSubmittingCurrentStep: x,
            setIsSubmittingCurrentStep: G,
            hasRedirectURL: V,
            setHasRedirectURL: F,
            braintreeEmail: v,
            braintreeNonce: L,
            venmoUsername: P,
            adyenPaymentData: k,
            paymentError: null != M ? M : b,
            paymentAuthenticationState: U ? eJ.oc.PENDING : null != M ? eJ.oc.ERROR : eJ.oc.NONE,
            purchaseError: B,
            setPurchaseError: H,
            purchaseErrorBlockRef: j,
            isAuthenticating: W,
            purchaseTokenAuthState: Y,
            purchaseTokenHash: K,
            epsBankState: g,
            setEpsBankState: S,
            p24BankState: h,
            setP24BankState: m,
        }
    );
}
