n.d(t, { Y: () => tw, p: () => tD });
var l,
    i,
    r = n(477900),
    a = n(582128),
    s = n(855986),
    o = n(858899),
    u = n(73153),
    c = n(620632),
    d = n(781300),
    m = n(70142),
    p = n(739508),
    h = n(184015),
    C = n(723702),
    f = n(652215);
function E() {
    let e = m.A.getClient();
    null != e &&
        (0, h.j)().then((t) => {
            t.venmo
                .create({ client: e, allowDesktop: !0, paymentMethodUsage: "multi_use" })
                .then((e) => {
                    u.h.dispatch({ type: "BRAINTREE_CREATE_VENMO_CLIENT_SUCCESS", venmoClient: e });
                })
                .catch(() => {
                    u.h.dispatch({ type: "BRAINTREE_CREATE_VENMO_CLIENT_FAIL" });
                });
        });
}
function S() {
    let e = m.A.getClient();
    null != e &&
        (0, h.j)().then((t) => {
            t.paypal
                .create({ client: e })
                .then((e) => {
                    if (null == e._navigateFrameToAuth)
                        throw Error(
                            "braintree client missing _navigateFrameToAuth. did someone upgrade the braintree library?",
                        );
                    ((e._navigateFrameToAuth = function (e) {
                        let t = this._formatPaymentResourceData(e);
                        return c.Bo.post({
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
                        u.h.dispatch({ type: "BRAINTREE_CREATE_PAYPAL_CLIENT_SUCCESS", paypalClient: e }));
                })
                .catch(() => u.h.dispatch({ type: "BRAINTREE_CREATE_PAYPAL_CLIENT_FAIL" }));
        });
}
function g() {
    let e = m.A.getPayPalClient();
    if (null == e) throw Error("braintree paypal client must be initialized before calling this");
    u.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_START" });
    let t = Promise.resolve("");
    ((0, C.xl)() && (t = (0, d.jf)(f.hes.PAYPAL)),
        t
            .then(() => e.tokenize({ flow: "vault" }))
            .then((e) => {
                let { email: t, firstName: n, lastName: l, billingAddress: i } = e.details;
                u.h.dispatch({
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
                n === f.Q7O.PAYPAL_POPUP_CLOSED || null == n
                    ? u.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED" })
                    : (u.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_FAIL", message: t, code: n }),
                      p.pM(Error(`Braintree Paypal Error: ${t} ${n} ${l}`)));
            }));
}
function y() {
    let e = m.A.getVenmoClient();
    if (null == e) throw Error("Braintree Venmo client must be initialized before calling tokenize.");
    (u.h.dispatch({ type: "BRAINTREE_TOKENIZE_VENMO_START" }),
        e
            .tokenize()
            .then((e) => {
                let { username: t } = e.details;
                u.h.dispatch({ type: "BRAINTREE_TOKENIZE_VENMO_SUCCESS", nonce: e.nonce, username: t });
            })
            .catch((e) => {
                let { message: t, code: n, details: l } = e;
                [f.Q7O.VENMO_APP_CANCELED, f.Q7O.VENMO_DESKTOP_CANCELED, f.Q7O.VENMO_CANCELED].includes(n)
                    ? u.h.dispatch({ type: "BRAINTREE_TOKENIZE_VENMO_FAIL_CANCELED" })
                    : (u.h.dispatch({ type: "BRAINTREE_TOKENIZE_VENMO_FAIL", message: t, code: n }),
                      p.pM(Error(`Braintree Venmo Error: ${t} ${n} ${l}`)));
            }));
}
function I(e, t) {
    if (null == e) return Promise.resolve();
    u.h.dispatch(t);
    try {
        return Promise.resolve(e.teardown());
    } catch (e) {
        return Promise.resolve();
    }
}
var A = n(391048),
    P = n(964486),
    v = n(475743),
    x = n(721101),
    _ = n(822764),
    T = n(71804),
    b = n(516106),
    N = n(783327),
    j = n(251913),
    R = n(825755),
    O = n(295405),
    M = n(129230),
    L = n(166532),
    k = n(69494),
    w = n(482132),
    D = n(632088);
let U = null,
    G = null;
class F extends s.Ay.Store {
    static displayName = "AdyenStore";
    get client() {
        return U;
    }
    get cashAppPayComponent() {
        return G;
    }
}
let B = new F(u.h, {
    ADYEN_CREATE_CLIENT_SUCCESS: function (e) {
        let { client: t } = e;
        U = t;
    },
    ADYEN_TEARDOWN_CLIENT: function () {
        U = null;
    },
    ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS: function (e) {
        let { component: t } = e;
        G = t;
    },
});
var H = n(792996);
function W() {
    let e = B.cashAppPayComponent;
    if (null == e) throw Error("Adyen CashAppPay component must be created before mounting.");
    try {
        e.mount(`#${D.h}`);
    } catch (e) {}
}
function V() {
    B.cashAppPayComponent?.unmount();
}
function Y() {
    let e = B.cashAppPayComponent;
    if (null == e) throw Error("Adyen CashAppPay component must be created before submitting.");
    e.submit();
}
var K = n(901930),
    q = n(19311),
    Z = n(626584),
    z = n(427262),
    $ = n(276858);
let Q = new Z.A("AddPaymentMethodStepContext.tsx"),
    J = a.createContext(null);
function X(e) {
    let { children: t, ...n } = e,
        { handleStepChange: l, continueSessionToInitialStep: i, setBillingAddressState: s, currentStep: o } = n,
        u = a.useMemo(() => (0, z.Gn)(), []),
        c = a.useCallback(
            (e, t) => {
                s((n) => ({ info: { ...n.info, ...e }, isValid: t }));
            },
            [s],
        ),
        d = (0, $.wD)({
            step: o,
            continueSessionToInitialStep: i,
            handleStepChange: l,
            logger: Q,
            shouldLogOnChangeEvents: u || !1,
            onBillingAddressChange: c,
        }),
        { returnToPaymentElementStep: m, remountAddressElement: p } = d,
        h = a.useCallback(() => {
            (l(L.pn.ADDRESS), $.Ky.includes(o) && p());
        }, [l, p, o]),
        C = a.useCallback(
            (e) => {
                m(e);
            },
            [m],
        ),
        f = a.useMemo(
            () => ({
                stripePaymentElementState: d,
                defaultOnBackHandler: C,
                onSubmitCustomPaymentMethodSubStep: h,
                hasSelectedPaymentElementSourceType: null != d.paymentElementSelectedType,
                ...n,
            }),
            [d, C, h, n],
        );
    return (0, r.jsx)(J.Provider, { value: f, children: t });
}
function ee() {
    let e = a.useContext(J);
    if (null == e)
        throw Error(
            "useAddPaymentMethodStepInternalContext must be used within an AddPaymentMethodStepInternalContextProvider",
        );
    return e;
}
function et(e) {
    return () => (null != R.A.error && (0, A.ET)(), e());
}
function en(e) {
    let { onPrimary: t, onBack: n, ...l } = e,
        i = t;
    null != t && (i = et(t));
    let a = n;
    return (null != n && (a = et(n)), (0, r.jsx)(q.Ay, { ...l, onPrimary: i, onBack: a }));
}
function el(e) {
    let { className: t } = e,
        { hasSelectedPaymentElementSourceType: n } = ee();
    return (0, r.jsx)(K.A, { className: t, hasSelectedPaymentElementSourceType: n });
}
var ei = n(683071),
    er = n(503698),
    ea = n.n(er),
    es = n(305866),
    eo = n(95477),
    eu = n(812745),
    ec = n(287809),
    ed = n(832208),
    em = n(643909),
    ep = n(646514),
    eh = n(602853),
    eC = n(281595),
    ef = n(513098),
    eE = n(151167);
let eS = function (e) {
    let t = a.useRef(null),
        { stripeType: n, flipped: l, updateCompleted: i, onFocus: s, onBlur: o } = e,
        [u, c] = a.useState(eu.Be.UNKNOWN),
        [d, m] = a.useState(!1),
        [p, h] = a.useState(!1),
        [C, f] = a.useState(null),
        [E, S] = a.useState({}),
        g = (0, em.useElements)(),
        y = a.useCallback(() => {
            if (null != g)
                switch (n) {
                    case "cardNumber": {
                        let e = g.getElement(em.CardNumberElement);
                        if (null == e) return;
                        (e.off("change"), e.off("focus"), e.off("blur"));
                        break;
                    }
                    case "cardExpiry": {
                        let e = g.getElement(em.CardExpiryElement);
                        if (null == e) return;
                        (e.off("change"), e.off("focus"), e.off("blur"));
                        break;
                    }
                    case "cardCvc": {
                        let e = g.getElement(em.CardCvcElement);
                        if (null == e) return;
                        (e.off("change"), e.off("focus"), e.off("blur"));
                    }
                }
        }, [g, n]),
        I = a.useCallback(
            (e) => {
                (p || e.empty || h(!0), null != i && i(e.complete), null != e.error && m(!1));
            },
            [p, i],
        ),
        A = a.useCallback(() => {
            (m(!0), s?.());
        }, [s]),
        P = a.useCallback(() => {
            (m(!1), o?.());
        }, [o]),
        v = a.useCallback(() => {
            if (null != g)
                switch (n) {
                    case "cardNumber": {
                        let e = g.getElement(em.CardNumberElement);
                        if (null == e) return;
                        (e.on("change", (e) => {
                            (u !== e.brand && c(e.brand),
                                e.empty && p
                                    ? f(H.intl.string(H.t.eOIfuy))
                                    : null != e.error
                                      ? f(H.intl.string(H.t.x4pWtJ))
                                      : f(null),
                                I(e));
                        }),
                            e.on("focus", A),
                            e.on("blur", P));
                        break;
                    }
                    case "cardExpiry": {
                        let e = g.getElement(em.CardExpiryElement);
                        if (null == e) return;
                        (e.on("change", (e) => {
                            (null != e.error || (e.empty && p) ? f(H.intl.string(H.t["9/zZdl"])) : f(null), I(e));
                        }),
                            e.on("focus", A),
                            e.on("blur", P));
                        break;
                    }
                    case "cardCvc": {
                        let e = g.getElement(em.CardCvcElement);
                        if (null == e) return;
                        (e.on("change", (e) => {
                            (null != e.error || (e.empty && p) ? f(H.intl.string(H.t.ro4isZ)) : f(null), I(e));
                        }),
                            e.on("focus", A),
                            e.on("blur", P));
                    }
                }
        }, [P, I, A, u, g, p, n]);
    a.useEffect(
        () => (
            v(),
            () => {
                y();
            }
        ),
        [v, y],
    );
    let x = (0, eh.r)(ep.A.colors.TEXT_SUBTLE).hex(),
        _ = (0, eh.r)(ep.A.colors.TEXT_STRONG).hex();
    function T() {
        return ea()(ef.vB, { [ef.Tn]: null !== C, [ef.iH]: d, [ef.yD]: "cardNumber" === n });
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
                    color: _,
                    fontSize: n.getPropertyValue("font-size"),
                    "::placeholder": { color: x },
                },
            });
        }, [t, x, _]),
        (0, r.jsxs)("div", {
            className: ef.Zm,
            "data-stripe-type": n,
            children: [
                (0, r.jsx)("div", { ref: t, className: ea()(ef.iw, eE.hF) }),
                (function () {
                    switch (n) {
                        case "cardNumber":
                            return (0, r.jsxs)("div", {
                                children: [
                                    (0, r.jsx)(eu.Ay, { className: ef.Ie, type: u, flipped: l }),
                                    (0, r.jsx)(em.CardNumberElement, {
                                        options: { style: E, placeholder: H.intl.string(H.t.gPRHfw), disableLink: !1 },
                                        className: T(),
                                    }),
                                ],
                            });
                        case "cardExpiry":
                            return (0, r.jsx)(em.CardExpiryElement, {
                                options: { style: E, placeholder: H.intl.string(H.t.xeEWQ6) },
                                className: T(),
                            });
                        case "cardCvc":
                            return (0, r.jsx)(em.CardCvcElement, {
                                options: { style: E, placeholder: H.intl.string(H.t.wZz04F) },
                                className: T(),
                            });
                    }
                })(),
                (0, r.jsx)(eC.U, { error: C }),
            ],
        })
    );
};
var eg = n(719941),
    ey = n(782328);
let eI = function (e) {
    let { onCardInfoChange: t, error: n } = e,
        l = a.useRef(t),
        [i, s] = a.useState(!1),
        [o, u] = a.useState({}),
        [c, d] = a.useState({ name: "", country: "", postalCode: "" }),
        [m, p] = a.useState({}),
        [h, C] = a.useState({}),
        { setFocusLockDisabled: f } = a.useContext(es.M);
    a.useEffect(() => () => {
        void 0 !== f && f(!1);
    });
    let E = a.useCallback(() => {
        void 0 !== f && f(!0);
    }, [f]);
    function S(e, t) {
        t !== !!o[e] && u((n) => ({ ...n, [e]: t }));
    }
    let g = a.useCallback(
        function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = {};
            return ((e || m.name) && "" === c.name && (t.name = H.intl.string(H.t.lIkVsi)), t);
        },
        [m, c],
    );
    return (
        a.useEffect(() => {
            let e = o.cardNumber && o.cardExpiry && o.cardCvc && 0 === Object.keys(g(!0)).length;
            l.current({ name: c.name }, !!e);
        }, [o, c, g]),
        (0, r.jsxs)("div", {
            children: [
                ec.default.getCurrentUser()?.nsfwAllowed
                    ? (0, r.jsxs)("div", {
                          className: eg.Rm,
                          children: [
                              (0, r.jsx)("div", { className: ea()(eu.y3.SMALL, eg.eo, eg.Ud) }),
                              (0, r.jsx)("div", { className: ea()(eu.y3.SMALL, eg.DR, eg.Ud) }),
                              (0, r.jsx)("div", { className: ea()(eu.y3.SMALL, eg.k4, eg.Ud) }),
                              (0, r.jsx)("div", { className: ea()(eu.y3.SMALL, eg.a3, eg.Ud) }),
                              (0, r.jsx)("div", { className: ea()(eu.y3.SMALL, eg.CY, eg.Ud) }),
                              (0, r.jsx)("div", { className: ea()(eu.y3.SMALL, eg.Q5, eg.Ud) }),
                              (0, r.jsx)("div", { className: ea()(eu.y3.SMALL, eg.YA, eg.Ud) }),
                          ],
                      })
                    : (0, r.jsxs)("div", {
                          className: eg.Rm,
                          children: [
                              (0, r.jsx)("div", { className: ea()(eu.y3.SMALL, eg.aq, eg.Ud) }),
                              (0, r.jsx)("div", { className: ea()(eu.y3.SMALL, eg.VX, eg.Ud) }),
                              (0, r.jsx)("div", { className: ea()(eu.y3.SMALL, eg.Yi, eg.Ud) }),
                              (0, r.jsx)("div", { className: ea()(eu.y3.SMALL, eg.qR, eg.Ud) }),
                              (0, r.jsx)("div", { className: ea()(eu.y3.SMALL, eg.m2, eg.Ud) }),
                              (0, r.jsx)("div", { className: ea()(eu.y3.SMALL, eg.Ij, eg.Ud) }),
                              (0, r.jsx)("div", { className: ea()(eu.y3.SMALL, eg._V, eg.Ud) }),
                          ],
                      }),
                (0, r.jsx)(ed.A, {
                    form: [
                        {
                            fields: [
                                {
                                    id: "card-number",
                                    name: "cardNumber",
                                    title: () => H.intl.string(H.t.cVyJ3o),
                                    getClassNameForLayout: () => ey.c6,
                                    renderInput: () =>
                                        (0, r.jsx)(eS, {
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
                                    title: () => H.intl.string(H.t["CeBa/4"]),
                                    getClassNameForLayout: () => ey.ep,
                                    renderInput: () =>
                                        (0, r.jsx)(eS, {
                                            stripeType: "cardExpiry",
                                            updateCompleted: (e) => S("cardExpiry", e),
                                            onFocus: E,
                                        }),
                                },
                                {
                                    id: "card-cvc",
                                    name: "cardCvc",
                                    title: () => H.intl.string(H.t.Fd3rOz),
                                    getClassNameForLayout: () => ey.ep,
                                    renderInput: () =>
                                        (0, r.jsx)(eS, {
                                            stripeType: "cardCvc",
                                            updateCompleted: (e) => S("cardCvc", e),
                                            onFocus: () => {
                                                (E(), s(!0));
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
                                    title: () => H.intl.string(H.t.VUlFdU),
                                    autoComplete: "cc-name",
                                    placeholder: () => H.intl.string(H.t["yf7ms+"]),
                                    getClassNameForLayout: () => ey.c6,
                                    renderInput: (e) => (0, r.jsx)(eo.k, { ...e }),
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
                            l = { ...m },
                            i = { name: h.name };
                        (m[t] || "" === e || (l[t] = !0),
                            (n[t] = e),
                            l[t] && "" === e ? "name" === t && (i.name = H.intl.string(H.t.lIkVsi)) : delete i[t],
                            d(n),
                            p(l),
                            C(i));
                    },
                    onFieldBlur: function () {
                        C(g());
                    },
                }),
            ],
        })
    );
};
var eA = n(718718),
    eP = n(116673),
    ev = n(773669),
    ex =
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
        l),
    e_ = n(292234);
let eT = (e) => {
    let t,
        { billingAddressInfo: n, billingError: l, onBillingAddressChange: i, paymentSourceType: o } = e,
        u =
            null != l &&
            (null == l.code ||
                (function (e) {
                    if (null != e) {
                        if (e.hasCardError()) return "credit_card_information";
                        if (e.hasAddressError()) return "address";
                    }
                    return null;
                })(l) === ex.ADDRESS),
        c = (0, s.bG)([ev.default], () => ev.default.locale);
    switch (o) {
        case f.hes.GIROPAY:
        case f.hes.PAYSAFE_CARD:
        case f.hes.GCASH:
        case f.hes.GRABPAY_MY:
        case f.hes.MOMO_WALLET:
        case f.hes.KAKAOPAY:
        case f.hes.GOPAY_WALLET:
        case f.hes.BANCONTACT:
            t = "en-US" === c ? eA.Ay.Layouts.MODAL_US_WITH_NAME : eA.Ay.Layouts.MODAL_INTL_WITH_NAME;
            break;
        case f.hes.VENMO:
        case f.hes.CASH_APP:
            t = eA.Ay.Layouts.MODAL_US_WITH_NAME;
            break;
        default:
            t = "en-US" === c ? eA.Ay.Layouts.MODAL_US : eA.Ay.Layouts.MODAL_INTL;
    }
    let d = (0, eP.z)();
    0 === n.country.length && null != d && d.length > 0 && (n.country = d[0]);
    let m = (0, s.bG)([ec.default], () => ec.default.getCurrentUser()?.storeCountry?.isLocked === !0)
        ? H.intl.string(H.t.Pg2hU0)
        : null;
    return (0, r.jsxs)(a.Fragment, {
        children: [
            u
                ? (0, r.jsx)("div", {
                      className: e_.QK,
                      children: (0, r.jsx)(ei.w, {
                          type: "critical",
                          message: H.intl.string(H.t.vZ8y7l),
                          role: "alert",
                      }),
                  })
                : null,
            (0, r.jsx)(eA.Ay, {
                className: e_.__invalid_formItem,
                onBillingAddressChange: i,
                error: l,
                layout: t,
                allowedBillingAddressCountries: d,
                countryHelperText: m,
                ...n,
            }),
        ],
    });
};
var eb = n(818348);
let eN = [L.pn.CREDIT_CARD_INFORMATION, L.pn.ADDRESS];
function ej(e) {
    let { billingError: t, onCardInfoChange: n } = e,
        l = null != t && (null == t.code || (0, L.ou)(t) === L.pn.CREDIT_CARD_INFORMATION);
    return (0, r.jsxs)(a.Fragment, {
        children: [
            l
                ? (0, r.jsx)("div", {
                      className: e_.QK,
                      children: (0, r.jsx)(ei.w, {
                          type: "critical",
                          message: H.intl.string(H.t["4vnhKV"]),
                          role: "alert",
                      }),
                  })
                : null,
            (0, r.jsx)(eI, { onCardInfoChange: n, error: t }),
        ],
    });
}
function eR(e) {
    let { billingAddressInfo: t, onBillingAddressChange: n, paymentSourceType: l } = e,
        i = (0, s.bG)([R.A], () => R.A.error);
    return (0, r.jsx)(eT, { billingAddressInfo: t, billingError: i, onBillingAddressChange: n, paymentSourceType: l });
}
function eO(e) {
    let { addPaymentMethodStepState: t } = e,
        { billingAddressState: n, setBillingAddressState: l } = t,
        { hasSelectedPaymentElementSourceType: i, paymentMethodSteps: a } = ee(),
        s = a.methodType ?? eb.he.CARD;
    return i
        ? null
        : (0, r.jsx)(eR, {
              billingAddressInfo: n.info,
              onBillingAddressChange: (e, t) => {
                  l({ info: { ...n.info, ...e }, isValid: t });
              },
              paymentSourceType: s,
          });
}
let eM = {
    SHARED_ADD_PAYMENT_STEPS: [L.pn.PAYMENT_ELEMENT],
    SHARED_CREDIT_CARD_STEPS: [L.pn.PAYMENT_ELEMENT, L.pn.ADDRESS],
    SHARED_PAYPAL_STEPS: [L.pn.PAYMENT_ELEMENT, L.pn.PAYPAL_INFORMATION, L.pn.ADDRESS],
    SHARED_VENMO_STEPS: [L.pn.PAYMENT_ELEMENT, L.pn.VENMO_INFORMATION, L.pn.ADDRESS],
    SHARED_CASH_APP_STEPS: [L.pn.PAYMENT_ELEMENT, L.pn.CASH_APP_INFORMATION, L.pn.ADDRESS],
    SHARED_PRZELEWY24_STEPS: [L.pn.PAYMENT_ELEMENT, L.pn.PRZELEWY24_INFORMATION, L.pn.ADDRESS],
    SHARED_EPS_STEPS: [L.pn.PAYMENT_ELEMENT, L.pn.EPS_INFORMATION, L.pn.ADDRESS],
    SHARED_IDEAL_STEPS: [L.pn.PAYMENT_ELEMENT, L.pn.ADDRESS],
    SHARED_TYPE_AND_ADDRESS_STEPS: [L.pn.PAYMENT_ELEMENT, L.pn.ADDRESS],
};
var eL = n(685094);
class ek extends a.PureComponent {
    componentDidMount() {
        null != this.props.paypalClient && g();
    }
    componentDidUpdate(e) {
        null == e.paypalClient && null != this.props.paypalClient && g();
    }
    componentWillUnmount() {
        I(m.A.getPayPalClient(), { type: "BRAINTREE_TEARDOWN_PAYPAL_CLIENT" }).then(() => {
            null != m.A.getClient() && S();
        });
    }
    render() {
        let { braintreeEmail: e, paypalClient: t } = this.props;
        return (0, r.jsx)(eo.k, {
            label: H.intl.string(H.t.QQBAos),
            leading: { type: "image", src: (0, eu.Nj)(eu.Ay.Types.PAYPAL) },
            value: e,
            readOnly: !0,
            placeholder: null == t ? H.intl.string(H.t.dte2M9) : H.intl.string(H.t.hopw7X),
        });
    }
}
let ew = s.Ay.connectStores([m.A, R.A], () => ({
    braintreeEmail: R.A.braintreeEmail,
    paypalClient: m.A.getPayPalClient(),
}))(ek);
var eD = n(534514),
    eU = n(834730),
    eG = n(351665);
class eF extends a.PureComponent {
    componentDidMount() {
        null != this.props.venmoClient && y();
    }
    componentDidUpdate(e) {
        null == e.venmoClient && null != this.props.venmoClient && y();
    }
    componentWillUnmount() {
        I(m.A.getVenmoClient(), { type: "BRAINTREE_TEARDOWN_VENMO_CLIENT" }).then(() => {
            null != m.A.getClient() && E();
        });
    }
    render() {
        let { venmoUsername: e, className: t, venmoClient: n } = this.props,
            l = null != e && "" !== e;
        return (0, r.jsxs)("div", {
            className: t,
            children: [
                (0, r.jsx)(eu.Ay, { type: eu.Ay.Types.VENMO, size: eu.y3.MEDIUM, className: eG.Z }),
                l
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(eD.D, {
                                  variant: e.length < 25 ? "heading-xl/semibold" : "heading-lg/semibold",
                                  className: eG.y,
                                  children: H.intl.format(H.t.DowIre, { venmoUsername: e }),
                              }),
                              (0, r.jsx)(eU.E, {
                                  variant: "body-md/medium",
                                  className: eG.y,
                                  children: H.intl.string(H.t.kmEvnR),
                              }),
                          ],
                      })
                    : (0, r.jsx)(eU.E, {
                          variant: "body-md/medium",
                          className: eG.y,
                          children: null == n ? H.intl.string(H.t["2ouZDU"]) : H.intl.string(H.t.mIL6Jb),
                      }),
            ],
        });
    }
}
let eB = s.Ay.connectStores([m.A, R.A], () => ({
    venmoUsername: R.A.venmoUsername,
    venmoClient: m.A.getVenmoClient(),
}))(eF);
var eH = n(891197),
    eW = n(462887),
    eV = n(331322),
    eY = n(736653),
    eK = n(438983);
let eq = function (e) {
    let t = (0, eY.Ay)(),
        n = a.useRef(null),
        [l, i] = a.useState({}),
        s = (0, eh.r)(ep.A.colors.BACKGROUND_BASE_LOWER).hex();
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
                    backgroundColor: s,
                    padding: "12px",
                    "::placeholder": { color: l.getPropertyValue("color") },
                    borderRadius: ep.A.radii.xs,
                },
            });
        }, [n, s]),
        e.type)
    ) {
        case eb.he.PRZELEWY24: {
            let i = (0, eW.M)(t) ? "/assets/f4150b3aed6c4679.svg" : "/assets/8b825aafb2e4dbed.svg",
                { onNameChange: a, onEmailChange: s, onP24BankChange: o, p24BankValue: u, billingAddressInfo: c } = e;
            return (0, r.jsx)("div", {
                className: eK.rf,
                children: (0, r.jsxs)(eV.B, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(eo.k, {
                            label: H.intl.string(H.t["w/qqKK"]),
                            inputRef: n,
                            name: H.intl.string(H.t["w/qqKK"]),
                            placeholder: H.intl.string(H.t["w/qqKK"]),
                            onChange: (e) => s(e),
                            value: c.email,
                        }),
                        (0, r.jsx)(eo.k, {
                            label: H.intl.string(H.t["yf7ms+"]),
                            name: H.intl.string(H.t["yf7ms+"]),
                            placeholder: H.intl.string(H.t["yf7ms+"]),
                            onChange: (e) => a(e),
                            value: c.name,
                        }),
                        (0, r.jsxs)(eV.B, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(eU.E, { variant: "body-sm/semibold", children: H.intl.string(H.t.De3b8t) }),
                                (0, r.jsx)(em.P24BankElement, {
                                    options: { value: u, style: l },
                                    onChange: (e) => o(e.value),
                                }),
                                (0, r.jsx)("div", {
                                    className: eK.je,
                                    children: (0, r.jsx)("img", { src: i, alt: "Przelewy24" }),
                                }),
                            ],
                        }),
                    ],
                }),
            });
        }
        case eb.he.EPS: {
            let { onAccountHolderNameChange: i, onEPSBankChange: a, epsBankValue: s, billingAddressInfo: o } = e,
                u = (0, eW.M)(t) ? "/assets/025b24b0055c8d81.svg" : "/assets/1dae7d71a65fd90f.svg";
            return (0, r.jsx)("div", {
                className: eK.rf,
                children: (0, r.jsxs)(eV.B, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(eo.k, {
                            label: H.intl.string(H.t.sN3wrd),
                            inputRef: n,
                            name: H.intl.string(H.t.sN3wrd),
                            placeholder: H.intl.string(H.t.sN3wrd),
                            onChange: (e) => i(e),
                            value: o.name,
                        }),
                        (0, r.jsxs)(eV.B, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(eU.E, { variant: "body-sm/semibold", children: H.intl.string(H.t.dFyV07) }),
                                (0, r.jsx)(em.EpsBankElement, {
                                    options: { value: s, style: l },
                                    onChange: (e) => a(e.value),
                                }),
                                (0, r.jsx)("div", {
                                    className: eK.je,
                                    children: (0, r.jsx)("img", { src: u, alt: "EPS" }),
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
var eZ = n(31823),
    ez = n(883645),
    e$ = n(677959),
    eQ = n(364840),
    eJ = n(73825),
    eX = n(558620),
    e0 = n(36167),
    e2 = n(418200),
    e1 = n(820287),
    e3 = (((i = {})[(i.UNKNOWN = 0)] = "UNKNOWN"), (i[(i.PENDING = 1)] = "PENDING"), (i[(i.DONE = 2)] = "DONE"), i);
let e4 = 0,
    e7 = null,
    e6 = null,
    e5 = null;
class e8 extends s.Ay.Store {
    static displayName = "BrowserCheckoutStateStore";
    get browserCheckoutState() {
        return e4;
    }
    get loadId() {
        return e7;
    }
    get skuId() {
        return e6;
    }
    get planId() {
        return e5;
    }
}
let e9 = new e8(u.h, {
    USER_PAYMENT_BROWSER_CHECKOUT_STARTED: function (e) {
        ((e4 = 1), (e7 = e.loadId));
    },
    USER_PAYMENT_BROWSER_CHECKOUT_DONE: function (e) {
        e7 === e.loadId && ((e6 = e.skuId ?? null), (e5 = e.skuSubscriptionPlanId ?? null), (e4 = 2));
    },
});
var te = n(682901),
    tt = n(731075);
function tn(e) {
    let t,
        { step: n, onPurchaseComplete: l, onHandoffFailure: i } = e,
        {
            setSelectedSkuId: o,
            setSelectedPlanId: u,
            contextMetadata: c,
        } = (0, b.t4)((e) => ({
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            contextMetadata: e.contextMetadata,
        })),
        {
            browserCheckoutState: m,
            browserCheckoutStateLoadId: p,
            browserCheckoutStateSkuId: h,
            browserCheckoutStatePlanId: C,
        } = (0, s.cf)([e9], () => ({
            browserCheckoutState: e9.browserCheckoutState,
            browserCheckoutStateLoadId: e9.loadId,
            browserCheckoutStateSkuId: e9.skuId,
            browserCheckoutStatePlanId: e9.planId,
        })),
        E = (0, eX.A)(),
        { isGift: S } = (0, e2.Pv)(),
        [g, y] = a.useState(!1);
    switch (n) {
        case L.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
            t = f.do8.GOOGLE_PAY;
            break;
        case L.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
            t = f.do8.APPLE_PAY;
    }
    return (
        a.useEffect(() => {
            let e = setTimeout(() => {
                g ||
                    (y(!0),
                    (0, d.Ze)(c.loadId),
                    (0, e0.my)(
                        {
                            planId: E?.id ?? te.gD.PREMIUM_MONTH_TIER_2,
                            isGift: S,
                            loadId: c.loadId,
                            paymentMethodType: t,
                        },
                        i,
                    ));
            }, 1e3);
            return () => clearTimeout(e);
        }, [E, S, c, i, y, g, t]),
        a.useEffect(() => {
            (null !== h && (te.oz.includes(h) && ((0, eJ.ur)(h), (0, d.hP)()), o(h)),
                null !== C && u(C),
                p === c.loadId && m === e3.DONE && l());
        }, [o, u, m, p, h, C, c, l]),
        (0, r.jsxs)("div", {
            className: tt.rf,
            children: [
                (0, r.jsx)(eD.D, { variant: "heading-xl/semibold", children: H.intl.string(H.t.C4HYfy) }),
                (0, r.jsx)(eU.E, { variant: "body-md/normal", className: tt.h_, children: H.intl.string(H.t.xfG7Jp) }),
            ],
        })
    );
}
function tl(e) {
    let { onPrimaryClick: t, onBackClick: n } = e;
    return (0, r.jsx)(eQ.j, {
        children: (0, r.jsxs)("div", {
            className: tt.kL,
            children: [
                null != n ? (0, r.jsx)(e1.A, { onClick: n }) : null,
                (0, r.jsx)(e1.F, { onClick: t, children: H.intl.string(H.t["4Qvmmj"]) }),
            ],
        }),
    });
}
var ti = n(311622);
function tr(e) {
    let { className: t } = e,
        n = (0, s.bG)([B], () => B.cashAppPayComponent),
        l = (0, s.bG)([R.A], () => R.A.adyenPaymentData);
    a.useEffect(
        () => (
            null == l && null != n && (W(), Y()),
            () => {
                V();
            }
        ),
        [l, n],
    );
    let i = l?.paymentMethod?.cashtag ?? "",
        o = null != l && "" !== i;
    return (0, r.jsxs)("div", {
        className: t,
        children: [
            (0, r.jsx)(eu.Ay, { type: eu.Ay.Types.CASH_APP, size: eu.y3.MEDIUM, className: ti.K }),
            o
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(eD.D, {
                              variant: i.length < 25 ? "heading-xl/semibold" : "heading-lg/semibold",
                              className: ti.y,
                              children: H.intl.format(H.t["ze/1yE"], { cashtag: i }),
                          }),
                          (0, r.jsx)(eU.E, {
                              variant: "body-md/medium",
                              className: ti.y,
                              children: H.intl.string(H.t.VPOx7N),
                          }),
                      ],
                  })
                : (0, r.jsx)(eU.E, {
                      variant: "body-md/medium",
                      className: ti.y,
                      children: null == n ? H.intl.string(H.t["CgVe/w"]) : H.intl.string(H.t["1MqcjI"]),
                  }),
        ],
    });
}
var ta = n(627784),
    ts = n(908166),
    to = n(930767),
    tu = n(676230);
let tc = new Z.A("AddPaymentMethod");
function td(e) {
    let { addPaymentMethodStepState: t } = e,
        {
            handleStepChange: n,
            completeSteps: l,
            paymentMethodSteps: i,
            stripePaymentElementState: a,
            hasSelectedPaymentElementSourceType: s,
            analyticsLocation: o,
            overwriteSubscriptionPaymentSource: u,
        } = ee(),
        {
            paymentElementSelectedType: c,
            returnToPaymentElementStep: d,
            stripeElementsRef: m,
            lastConfirmedSetupIntentRef: h,
        } = a,
        C = (0, N.S)(),
        { createSetupIntent: f } = (0, ts.x)(),
        { contextMetadata: E } = (0, b.t4)((e) => ({ contextMetadata: e.contextMetadata })),
        {
            isSubmittingCurrentStep: S,
            billingAddressState: g,
            setIsSubmittingCurrentStep: y,
            hasRedirectURL: I,
            setHasRedirectURL: A,
            isAuthenticating: P,
        } = t,
        v = i.methodType,
        { backStep: x } = s
            ? { backStep: L.pn.PAYMENT_ELEMENT }
            : (function (e) {
                  switch (e) {
                      case eb.he.CARD:
                          return { backStep: L.pn.CREDIT_CARD_INFORMATION };
                      case eb.he.PAYPAL:
                          return { backStep: L.pn.PAYPAL_INFORMATION };
                      case eb.he.VENMO:
                          return { backStep: L.pn.VENMO_INFORMATION };
                      case eb.he.EPS:
                          return { backStep: L.pn.EPS_INFORMATION };
                      case eb.he.PRZELEWY24:
                          return { backStep: L.pn.PRZELEWY24_INFORMATION };
                      case eb.he.CASH_APP:
                          return { backStep: L.pn.CASH_APP_INFORMATION };
                      default:
                          return { backStep: L.pn.PAYMENT_ELEMENT };
                  }
              })(v),
        _ = s ? () => d(void 0) : () => n(x);
    return (0, r.jsx)(en, {
        onBack: _,
        primaryCTA: q.Ay.CTAType.CONTINUE,
        primaryText: H.intl.string(H.t.PDTjLN),
        primarySubmitting: S,
        primaryDisabled: !g.isValid || P,
        onPrimary: async function () {
            y(!0);
            let e = s ? c : i.methodType,
                n = m.current,
                r = null != e && (0, tu.i)(e) ? tu.F[e] : null;
            if (null == r)
                throw new to.v({
                    message: "unknown Add Payment step not handled",
                    extraSentryInformation: { paymentSourceType: e, analyticsLocation: o },
                });
            let a = r.submitAddressStep;
            try {
                let e = await a({
                    ...t,
                    analyticsLocation: o,
                    stripe: C,
                    shouldUsePaymentElement: s,
                    stripeElements: n,
                    lastConfirmedSetupIntentRef: h,
                    createSetupIntent: f,
                    overwriteSubscriptionPaymentSource: u,
                });
                ("redirect-url" === e.responseType ? A(e.hasRedirectURL) : l(e.paymentSource), I || y(!1));
            } catch (e) {
                if (
                    e instanceof ta.Ey &&
                    e.code !== ta.Ey.ErrorCodes.INVALID_PAYMENT_SOURCE &&
                    (Object.keys(e.fields).length > 0 || !(0, p.gr)(e))
                ) {
                    let t = Object.keys(e.fields).sort(),
                        n = null != e.status ? { status: String(e.status) } : {},
                        l = t.length > 0,
                        i = Error(l ? `${e.message} (${t.join(", ")})` : e.message);
                    ((i.name = l ? `SubmitAddressStepFieldError[${t.join(",")}]` : `SubmitAddressStepError[${e.code}]`),
                        (0, p.pM)(i, {
                            tags: {
                                ...(s ? { source: "payment_elements" } : {}),
                                error_location: "submit_address_step",
                                has_field_error: l ? "true" : "false",
                                error_code: String(e.code),
                                ...n,
                            },
                            extra: {
                                country: g.info.country,
                                loadId: E.loadId,
                                message: e.message,
                                errorCode: e.code,
                                errorStatus: e.status,
                                fields: e.fields,
                            },
                        }));
                }
                (y(!1), tc.warn(`Error confirming submitting Address Step for Payment Source Type: ${v}`, e));
            }
        },
    });
}
var tm = n(648335);
let tp = new Z.A("PaymentElementStepFooter.tsx");
function th(e) {
    let { addPaymentMethodStepState: t } = e,
        { setIsSubmittingCurrentStep: n, setBillingAddressState: l, isSubmittingCurrentStep: i } = t,
        s = (0, N.S)(),
        { paymentElementOnNextCallback: o, handleStepChange: u, stripePaymentElementState: c, onReturn: m } = ee(),
        {
            paymentElementSelectedType: p,
            stripeElementsRef: h,
            remountAddressElement: C,
            onBackFromPaymentElement: f,
            paymentElementReady: E,
        } = c,
        S = a.useCallback(async () => {
            n(!0);
            try {
                if (null == p || !(0, tm.eX)(p)) throw (0, d.ne)("Valid Payment Element source type not found", !0);
                o(p);
                let e = tu.F[p];
                if (null != e && null != e.submitPaymentElementStepHandler) {
                    (await e.submitPaymentElementStepHandler({
                        stripe: s,
                        stripeElements: h.current,
                        remountAddressElement: C,
                        setBillingAddressState: l,
                    }),
                        u(e.stepAfterPaymentElement ?? L.pn.ADDRESS));
                    return;
                }
                let t = (0, tm.eI)(p);
                if (null != t) return void u(t);
                u(L.pn.ADDRESS);
            } catch (e) {
                tp.error("Error on submitting Payment Element step: ", e.message ?? JSON.stringify(e));
            } finally {
                n(!1);
            }
        }, [o, p, h, C, u, s, n, l]),
        g = a.useCallback(() => {
            (f(), null != m && m());
        }, [f, m]);
    return (0, r.jsx)(en, {
        onBack: null != m ? g : void 0,
        primaryCTA: q.Ay.CTAType.CONTINUE,
        primaryType: "submit",
        primaryText: H.intl.string(H.t.PDTjLN),
        primarySubmitting: i,
        primaryDisabled: !E,
        onPrimary: S,
    });
}
var tC = n(814935),
    tf = n(24404);
let tE = new Z.A("AddPaymentMethodSubstepRegistry.tsx");
function tS(e) {
    let { setCreditCardState: t, setBillingAddressState: n } = e,
        l = a.useCallback(
            (e, l) => {
                (t({ info: e, isValid: l }), n((t) => ({ ...t, info: { ...t.info, name: e.name } })));
            },
            [t, n],
        ),
        i = (0, s.bG)([R.A], () => R.A.error);
    return (0, r.jsx)(ej, { billingError: i, onCardInfoChange: l });
}
function tg(e) {
    let { setIsSubmittingCurrentStep: t, setTokenState: n, isSubmittingCurrentStep: l, creditCardState: i } = e,
        { handleStepChange: a, onReturn: s } = ee(),
        o = (0, N.S)(),
        u = !i.isValid;
    return (0, r.jsx)(em.ElementsConsumer, {
        children: (e) => {
            let { elements: i } = e;
            return (0, r.jsx)(en, {
                primaryCTA: q.Ay.CTAType.CONTINUE,
                primaryType: "submit",
                primaryText: H.intl.string(H.t.PDTjLN),
                primarySubmitting: l,
                primaryDisabled: u,
                onPrimary: () =>
                    (async function (e) {
                        t(!0);
                        try {
                            let t = await (0, d.YJ)(o, e);
                            (n({ token: t }), a(L.pn.ADDRESS));
                        } catch (e) {
                            tE.error(e.message ?? JSON.stringify(e));
                        } finally {
                            t(!1);
                        }
                    })(i),
                onBack: null != s ? () => s() : void 0,
            });
        },
    });
}
function ty() {
    let { currentStep: e, redirectToCardInput: t, onComplete: n } = ee();
    return (0, r.jsx)(tn, { step: e, onPurchaseComplete: () => n(e), onHandoffFailure: t });
}
function tI() {
    let { redirectToCardInput: e, onReturn: t, stripePaymentElementState: n } = ee(),
        { onBackFromPaymentElement: l } = n;
    return (0, r.jsx)(tl, {
        onPrimaryClick: e,
        onBackClick:
            null != t
                ? function () {
                      (l(), null != t && t());
                  }
                : void 0,
    });
}
function tA(e) {
    let { adyenPaymentData: t } = e,
        { defaultOnBackHandler: n, onSubmitCustomPaymentMethodSubStep: l } = ee(),
        i = (0, s.bG)([B], () => B.cashAppPayComponent),
        a = null != t;
    return (0, r.jsx)(en, {
        onBack: () => n(eb.he.CASH_APP),
        primaryCTA: q.Ay.CTAType.CONTINUE,
        primaryText: a ? H.intl.string(H.t.PDTjLN) : H.intl.string(H.t["9ALP8w"]),
        onPrimary: () => (a ? l() : Y()),
        primaryDisabled: null == i,
    });
}
function tP(e) {
    let { defaultOnBackHandler: t, onSubmitCustomPaymentMethodSubStep: n } = ee(),
        { billingAddressState: l, epsBankState: i } = e;
    return (0, r.jsx)(en, {
        onBack: () => t(eb.he.EPS),
        primaryCTA: q.Ay.CTAType.CONTINUE,
        primaryText: H.intl.string(H.t.PDTjLN),
        primaryDisabled: void 0 === i || "" === i || "" === l.info.name,
        onPrimary: () => n(),
    });
}
function tv(e) {
    let { defaultOnBackHandler: t, onSubmitCustomPaymentMethodSubStep: n } = ee(),
        { billingAddressState: l, p24BankState: i } = e;
    return (0, r.jsx)(en, {
        onBack: () => t(eb.he.PRZELEWY24),
        primaryCTA: q.Ay.CTAType.CONTINUE,
        primaryText: H.intl.string(H.t.PDTjLN),
        primaryDisabled:
            void 0 === l.info.name ||
            "" === l.info.name ||
            void 0 === l.info.email ||
            "" === l.info.email ||
            void 0 === i ||
            "" === i,
        onPrimary: () => n(),
    });
}
function tx(e) {
    let { defaultOnBackHandler: t, onSubmitCustomPaymentMethodSubStep: n } = ee(),
        { braintreeEmail: l, braintreeNonce: i } = e,
        a = 0 !== l.length && null != i;
    return (0, r.jsx)(en, {
        onBack: () => t(eb.he.PAYPAL),
        primaryCTA: q.Ay.CTAType.CONTINUE,
        primaryText: a ? H.intl.string(H.t.PDTjLN) : H.intl.string(H.t.Djzd7L),
        onPrimary: () => {
            let e;
            return a
                ? n()
                : void (null == (e = m.A.getLastURL())
                      ? g()
                      : (u.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_START" }), window.open(e)));
        },
    });
}
function t_(e) {
    let { venmoUsername: t, braintreeNonce: n } = e,
        l = 0 !== t.length && null != n,
        { defaultOnBackHandler: i, onSubmitCustomPaymentMethodSubStep: a } = ee();
    return (0, r.jsx)(en, {
        onBack: () => i(eb.he.VENMO),
        primaryCTA: q.Ay.CTAType.CONTINUE,
        primaryText: l ? H.intl.string(H.t.PDTjLN) : H.intl.string(H.t["4KoTLM"]),
        onPrimary: () => (l ? a() : void y()),
    });
}
let tT = {
    [L.pn.CREDIT_CARD_INFORMATION]: {
        renderStepBody: (e) => (0, r.jsx)(tS, { ...e }),
        renderStepFooter: (e) => (0, r.jsx)(tg, { ...e }),
    },
    [L.pn.AWAITING_BROWSER_CHECKOUT]: {
        renderStepBody: () => (0, r.jsx)(ty, {}),
        renderStepFooter: () => (0, r.jsx)(tI, {}),
    },
    [L.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY]: {
        renderStepBody: () => (0, r.jsx)(ty, {}),
        renderStepFooter: () => (0, r.jsx)(tI, {}),
    },
    [L.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY]: {
        renderStepBody: () => (0, r.jsx)(ty, {}),
        renderStepFooter: () => (0, r.jsx)(tI, {}),
    },
    [L.pn.PAYMENT_ELEMENT]: {
        renderStepBody: () => null,
        renderStepFooter: (e) => (0, r.jsx)(th, { addPaymentMethodStepState: e }),
    },
    [L.pn.EPS_INFORMATION]: {
        renderStepBody: (e) => {
            let { setBillingAddressState: t, billingAddressState: n, setEpsBankState: l, epsBankState: i } = e;
            return (0, r.jsx)(eq, {
                type: eb.he.EPS,
                onAccountHolderNameChange: (e) => t({ info: { ...n.info, name: e }, isValid: n.isValid }),
                onEPSBankChange: (e) => l(e),
                epsBankValue: i,
                billingAddressInfo: n.info,
            });
        },
        renderStepFooter: (e) => (0, r.jsx)(tP, { ...e }),
    },
    [L.pn.PRZELEWY24_INFORMATION]: {
        renderStepBody: (e) => {
            let { setBillingAddressState: t, billingAddressState: n, setP24BankState: l, p24BankState: i } = e;
            return (0, r.jsx)(eq, {
                type: eb.he.PRZELEWY24,
                onNameChange: (e) => t({ info: { ...n.info, name: e }, isValid: n.isValid }),
                onEmailChange: (e) => t({ info: { ...n.info, email: e }, isValid: n.isValid }),
                onP24BankChange: (e) => {
                    l(e);
                },
                p24BankValue: i,
                billingAddressInfo: n.info,
            });
        },
        renderStepFooter: (e) => (0, r.jsx)(tv, { ...e }),
    },
    [L.pn.PAYPAL_INFORMATION]: {
        renderStepBody: () => (0, r.jsx)(ew, {}),
        renderStepFooter: (e) => (0, r.jsx)(tx, { ...e }),
    },
    [L.pn.VENMO_INFORMATION]: {
        renderStepBody: () => (0, r.jsx)(eB, {}),
        renderStepFooter: (e) => (0, r.jsx)(t_, { ...e }),
    },
    [L.pn.CASH_APP_INFORMATION]: {
        renderStepBody: () => (0, r.jsx)(tr, {}),
        renderStepFooter: (e) => {
            let { adyenPaymentData: t } = e;
            return (0, r.jsx)(tA, { adyenPaymentData: t });
        },
    },
    [L.pn.AWAITING_AUTHENTICATION]: { renderStepBody: () => (0, r.jsx)(eH.N, {}), renderStepFooter: () => null },
    [L.pn.ADDRESS]: {
        renderStepBody: (e) => (0, r.jsx)(eO, { addPaymentMethodStepState: e }),
        renderStepFooter: (e) => (0, r.jsx)(td, { addPaymentMethodStepState: e }),
    },
};
function tb(e) {
    let { billingAddressState: t } = e,
        {
            analyticsData: n,
            handleStepChange: l,
            stripePaymentElementState: i,
            setFallbackCardPaymentMethodSteps: a,
            currentStep: s,
        } = ee(),
        o = (0, ez.qv)(),
        { contextMetadata: u, refetchInvoicePreviews: c } = (0, b.t4)((e) => ({
            contextMetadata: e.contextMetadata,
            refetchInvoicePreviews: e.refetchInvoicePreviews,
        })),
        { activitySessionId: d } = (0, eZ.V)(),
        {
            onBackFromPaymentElement: m,
            paymentElementLoaded: p,
            paymentElementSelectedType: h,
            stripeElementsRef: C,
            stripePaymentElementProps: f,
            stripeAddressElementProps: E,
            addressElementKey: S,
        } = i;
    return (0, r.jsx)($._i, {
        step: s,
        analyticsContext: null != n ? { activitySessionId: d, contextMetadata: u, analyticsData: n } : void 0,
        paymentElementSelectedType: h,
        stripeElementsRef: C,
        stripePaymentElementProps: f,
        stripeAddressElementProps: E,
        addressElementKey: S,
        billingAddressInfo: t.info,
        onSetupError: () => {
            (m(), a(), l(L.pn.CREDIT_CARD_INFORMATION));
        },
        paymentElementFooter: p
            ? (0, r.jsx)(e$.Z4, {
                  className: tC.SO,
                  stackingBehavior: "stack",
                  onComplete: () => {
                      (c(), setTimeout(() => o(L.pn.REVIEW), 0));
                  },
              })
            : null,
    });
}
function tN(e) {
    let { billingAddressState: t, children: n } = e,
        { stripePaymentElementState: l, currentStep: i, paymentMethodSteps: a } = ee(),
        { shouldRenderPaymentElement: s } = l;
    return (0, r.jsxs)(eL.Y, {
        className: tf.C9,
        staticClassName: tf.a2,
        animatedNodeClassName: tf.L2,
        fillParent: !0,
        overrideKey: s ? "combined_stripe_elements" : void 0,
        step: i,
        steps: a.steps,
        sideMargin: 20,
        children: [s && (0, r.jsx)(tb, { billingAddressState: t }), n],
    });
}
var tj = n(430993),
    tR = n(289873),
    tO = n(136857);
function tM(e) {
    let { body: t, paymentError: n, header: l, footer: i, isLoading: a } = e,
        { hasSelectedPaymentElementSourceType: s } = ee(),
        o = "";
    return (
        null != n &&
            (0, L.h5)(n, s) &&
            ((o = n.message),
            n.code === tO.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED
                ? (o = H.intl.string(H.t.ypuSd8))
                : n.code === f.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (o = H.intl.string(H.t.mXMmWE))),
        (0, r.jsxs)(r.Fragment, {
            children: [
                l,
                (0, r.jsx)(tj.c, {
                    children: (0, r.jsxs)("div", {
                        className: tf.uK,
                        children: [
                            "" === o
                                ? null
                                : (0, r.jsx)("div", {
                                      className: tf.Nk,
                                      children: (0, r.jsx)(ei.w, { type: "critical", message: o, role: "alert" }),
                                  }),
                            a ? (0, r.jsx)(tR.y, { className: tf.CI }) : t,
                        ],
                    }),
                }),
                i,
            ],
        })
    );
}
let tL = { name: "", cardNumber: "", expirationDate: "", cvc: "" },
    tk = { email: "", name: "", country: "", line1: "", line2: "", city: "", postalCode: "", state: "" };
function tw(e) {
    let {
            addPaymentMethodStepState: t,
            initialStep: n,
            prependSteps: l,
            appendSteps: i,
            onReturn: u,
            onComplete: c,
            onStepChange: m,
            header: p,
            analyticsLocation: h,
            analyticsData: C,
            overwriteSubscriptionPaymentSource: E = !1,
            useCheckoutStep: S = !1,
            isEligibleForTrial: g = !1,
            allowDesktopRedirectPurchase: y = !1,
            toastContent: I,
            continueSessionToInitialStep: A,
        } = e,
        v = (0, N.S)(),
        { contextMetadata: x, clearFetchSetupIntent: j } = (0, b.t4)((e) => ({
            contextMetadata: e.contextMetadata,
            clearFetchSetupIntent: e.clearFetchSetupIntent,
        }));
    (0, P.l0)(j);
    let D = a.useMemo(
            () => (n === L.pn.PAYMENT_ELEMENT ? (y ? L.pn.AWAITING_BROWSER_CHECKOUT : L.pn.PAYMENT_ELEMENT) : n),
            [n, y],
        ),
        {
            CREDIT_CARD_STEPS: U,
            CASH_APP_STEPS: G,
            PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: F,
        } = (function (e) {
            let { prependSteps: t, appendSteps: n } = e,
                [l, i, r, s, o, u, c, d, m] = (0, a.useMemo)(
                    () =>
                        (function (e, t) {
                            let { prependSteps: n, appendSteps: l } = t;
                            return e.map((e) => {
                                let { sharedStepsKey: t, methodType: i } = e,
                                    r = eM[t];
                                return { steps: [...n, ...r, ...l], methodType: i };
                            });
                        })(
                            [
                                { sharedStepsKey: "SHARED_TYPE_AND_ADDRESS_STEPS", methodType: eb.he.UNKNOWN },
                                { sharedStepsKey: "SHARED_ADD_PAYMENT_STEPS", methodType: eb.he.PAYMENT_REQUEST },
                                { sharedStepsKey: "SHARED_CREDIT_CARD_STEPS", methodType: eb.he.CARD },
                                { sharedStepsKey: "SHARED_PAYPAL_STEPS", methodType: eb.he.PAYPAL },
                                { sharedStepsKey: "SHARED_IDEAL_STEPS", methodType: eb.he.IDEAL },
                                { sharedStepsKey: "SHARED_VENMO_STEPS", methodType: eb.he.VENMO },
                                { sharedStepsKey: "SHARED_PRZELEWY24_STEPS", methodType: eb.he.PRZELEWY24 },
                                { sharedStepsKey: "SHARED_EPS_STEPS", methodType: eb.he.EPS },
                                { sharedStepsKey: "SHARED_CASH_APP_STEPS", methodType: eb.he.CASH_APP },
                            ],
                            { prependSteps: t, appendSteps: n },
                        ),
                    [t, n],
                ),
                p = (0, a.useMemo)(
                    () => ({
                        [eb.he.CARD]: r,
                        [eb.he.PAYPAL]: s,
                        [eb.he.PAYMENT_REQUEST]: i,
                        [eb.he.VENMO]: u,
                        [eb.he.CASH_APP]: m,
                        [eb.he.IDEAL]: o,
                        [eb.he.PRZELEWY24]: c,
                        [eb.he.EPS]: d,
                        [eb.he.BANCONTACT]: l,
                        [eb.he.GOPAY_WALLET]: l,
                        [eb.he.KAKAOPAY]: l,
                        [eb.he.GCASH]: l,
                        [eb.he.PAYSAFE_CARD]: l,
                        [eb.he.GRABPAY_MY]: l,
                        [eb.he.MOMO_WALLET]: l,
                        [eb.he.PIX]: l,
                    }),
                    [l, r, s, u, i, o, m, c, d],
                );
            return { CREDIT_CARD_STEPS: r, CASH_APP_STEPS: m, PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: p };
        })({ prependSteps: l, appendSteps: i }),
        [B, W] = a.useState(D),
        [V, Y] = a.useState(
            (function (e) {
                switch (e) {
                    case L.pn.CREDIT_CARD_INFORMATION:
                        return U;
                    case L.pn.CASH_APP_INFORMATION:
                        return G;
                    default:
                        return { steps: [L.pn.ADD_PAYMENT_STEPS] };
                }
            })(D),
        );
    a.useEffect(() => {
        (0, d.IV)();
    }, []);
    let K = a.useCallback(
            function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                (W(e), t && m({ currentStep: B, toStep: e }));
            },
            [B, m],
        ),
        q = a.useCallback(
            (e) => {
                (0, _.lO)({ loadId: x.loadId, paymentSource: e }, h);
            },
            [x.loadId, h],
        ),
        Z = (0, s.bG)([R.A], () => R.A.error),
        z = a.useRef(Z);
    a.useEffect(() => {
        let e = z.current;
        ((z.current = Z),
            null != Z &&
                Z !== e &&
                M.default.track(f.HAw.PAYMENT_FLOW_ADD_SOURCE_ERROR, {
                    load_id: x.loadId,
                    analytics_location: h,
                    payment_source_type: V.methodType,
                    error_code: Z.code,
                    error_message: Z.message,
                }));
    }, [Z, x.loadId, h, V.methodType]);
    let $ = a.useCallback(
            (e) => {
                (q(e),
                    (0, o.P0)({
                        text: void 0 !== I ? I : H.intl.string(H.t["VJPg+l"]),
                        variant: "success",
                        position: "bottom",
                    }),
                    c(B, e),
                    K(D, !1));
            },
            [K, D, B, c, I, q],
        ),
        { setPaymentSourceId: Q, setBillingAddressState: J } = t,
        ee = a.useCallback(
            (e) => {
                (Q(e.id), $(e));
            },
            [Q, $],
        ),
        et = (0, s.bG)([R.A], () => R.A.redirectedPaymentSourceId),
        en = { completeSteps: ee, setIsSubmittingCurrentStep: t.setIsSubmittingCurrentStep },
        ei = a.useRef(en);
    (a.useEffect(() => {
        ei.current = en;
    }),
        a.useEffect(() => {
            let { completeSteps: e, setIsSubmittingCurrentStep: t } = ei.current;
            !(async function () {
                if (null == et) return;
                await (0, d.$o)();
                let n = O.A.getPaymentSource(et);
                null != n && (e(n), t(!1), R.A.clearRedirectedPaymentSourceId());
            })();
        }, [et]));
    let er = a.useCallback(() => {
            (Y(U), K(L.pn.PAYMENT_ELEMENT));
        }, [Y, K, U]),
        ea = a.useCallback(
            (e) => {
                let { steps: t, methodType: n } = F[e];
                Y({ steps: t, methodType: n === eb.he.UNKNOWN ? e : n });
            },
            [Y, F],
        ),
        es = a.useCallback(() => {
            Y({ steps: [...l, ...eN, ...i], methodType: eb.he.CARD });
        }, [Y, l, i]),
        eo = a.useMemo(
            () => ({
                handleStepChange: K,
                continueSessionToInitialStep: A,
                currentStep: B,
                paymentMethodSteps: V,
                setBillingAddressState: J,
                redirectToCardInput: er,
                paymentElementOnNextCallback: ea,
                setFallbackCardPaymentMethodSteps: es,
                onComplete: c,
                onReturn: u,
                completeSteps: ee,
                analyticsLocation: h,
                analyticsData: C,
                overwriteSubscriptionPaymentSource: E,
            }),
            [K, A, B, V, J, er, ea, es, h, c, u, ee, C, E],
        );
    if (!(B in tT))
        throw new T.v({ message: `Unexpected Add Payment sub-step: ${B}`, extraSentryInformation: { currentStep: B } });
    let { renderStepBody: eu, renderStepFooter: ec } = tT[B],
        ed = eu(t),
        em = ec(t);
    return S
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  g && (0, r.jsx)(k.A, { className: tC.At, isEligibleForTrial: g }),
                  (0, r.jsxs)(X, {
                      ...eo,
                      children: [
                          (0, r.jsxs)(w.dZ, {
                              children: [
                                  (0, r.jsx)(el, { className: tC._8 }),
                                  (0, r.jsx)(tN, { billingAddressState: t.billingAddressState, children: ed }),
                              ],
                          }),
                          (0, r.jsx)(w.UX, { children: em }),
                      ],
                  }),
              ],
          })
        : (0, r.jsx)(X, {
              ...eo,
              children: (0, r.jsx)(tM, {
                  isLoading: null == v,
                  paymentError: t.paymentError,
                  header: p,
                  body: (0, r.jsx)(tN, { billingAddressState: t.billingAddressState, children: ed }),
                  footer: em,
              }),
          });
}
function tD(e) {
    let {
            defaultPaymentSourceId: t,
            paymentSources: l,
            hasFetchedPaymentSources: i,
        } = (0, s.cf)([O.A], () => ({
            defaultPaymentSourceId: void 0 !== e ? e : O.A.defaultPaymentSourceId,
            paymentSources: O.A.paymentSources,
            hasFetchedPaymentSources: O.A.hasFetchedPaymentSources,
        })),
        r = (0, s.bG)([B], () => B.cashAppPayComponent),
        o = (0, s.bG)([x.A], () => x.A.data?.allowed_payment_source_types ?? null);
    ((0, P.Ay)(() => {
        ((0, h.j)().then((e) => {
            e.client
                .create({ authorization: f.Gg3.BRAINTREE.KEY })
                .then((e) => {
                    (new Promise((e, t) => {
                        let n = Date.now();
                        function l() {
                            Date.now() - n >= 5e3
                                ? t(Error("Timeout waiting for Braintree client to be initialized in store"))
                                : null != m.A.getClient()
                                  ? e()
                                  : setTimeout(l, 1e3);
                        }
                        u.h.subscribe("BRAINTREE_CREATE_CLIENT_SUCCESS", function e() {
                            (u.h.unsubscribe("BRAINTREE_CREATE_CLIENT_SUCCESS", e), setTimeout(l, 0));
                        });
                    })
                        .then(() => {
                            (S(), E());
                        })
                        .catch((e) => {
                            p.pM(e);
                        }),
                        u.h.dispatch({ type: "BRAINTREE_CREATE_CLIENT_SUCCESS", client: e }));
                })
                .catch(() => u.h.dispatch({ type: "BRAINTREE_CREATE_CLIENT_FAIL" }));
        }),
            i || (0, d.$o)());
    }),
        a.useEffect(() => {
            null == r &&
                null != o &&
                o.includes(eb.he.CASH_APP) &&
                (async function () {
                    try {
                        let e = await (async function () {
                                return await c.Bo.get({
                                    url: f.Rsh.BILLING_ADYEN_PAYMENT_METHODS,
                                    oldFormErrors: !0,
                                    rejectWithError: !1,
                                });
                            })(),
                            { default: t } = await Promise.all([n.e(494678), n.e(667335)]).then(n.bind(n, 683450)),
                            l = await t({
                                environment: f.Gg3.ADYEN.KEY.startsWith("live_") ? "live" : "test",
                                clientKey: f.Gg3.ADYEN.KEY,
                                analytics: { enabled: !1 },
                                paymentMethodsResponse: e.body,
                            });
                        (u.h.dispatch({ type: "ADYEN_CREATE_CLIENT_SUCCESS", client: l }),
                            (function (e) {
                                if (null != B.cashAppPayComponent) {
                                    (V(), W());
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
                                            if (n) u.h.dispatch({ type: "ADYEN_CASH_APP_PAY_SUBMIT_SUCCESS", data: t });
                                            else throw (0, d.i0)("Cash App Pay setup attempt is not valid.");
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
                                                        ((n = !1), (t = H.intl.string(H.t.TJ8dDB)));
                                                }
                                                (0, d.i0)(e.message, { captureException: n, defaultErrorMessage: t });
                                            }
                                        },
                                    })
                                    .mount(`#${D.h}`);
                                u.h.dispatch({ type: "ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS", component: t });
                            })(l));
                    } catch (e) {
                        ((0, p.pM)(e), u.h.dispatch({ type: "ADYEN_CREATE_CLIENT_FAIL" }));
                    }
                })();
        }, [o, r]));
    let [C, g] = a.useState(t),
        y = (0, v.Ay)(t);
    t !== y && null != t && null == C && g(t);
    let [I, _] = a.useState(() => ({ info: tL, isValid: !1 })),
        [T, N] = a.useState(() => ({ info: tk, isValid: !1 })),
        [M, L] = a.useState(""),
        [k, w] = a.useState(""),
        [U, G] = a.useState(() => ({ token: null })),
        [F, Y, K, q, Z] = (0, s.yK)([R.A], () => [
            R.A.braintreeEmail,
            R.A.braintreeNonce,
            R.A.error,
            R.A.venmoUsername,
            R.A.adyenPaymentData,
        ]),
        { paymentAuthError: z, isAwaitingPaymentAuthentication: $ } = (0, b.t4)((e) => ({
            paymentAuthError: e.paymentAuthError,
            isAwaitingPaymentAuthentication: e.isAwaitingPaymentAuthentication,
        }));
    a.useEffect(() => {
        function e(e) {
            let { billingAddress: t } = e;
            N({ info: t, isValid: t.country.length > 0 });
        }
        return (
            u.h.subscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e),
            () => {
                (u.h.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e), (0, A.ET)());
            }
        );
    }, []);
    let [Q, J] = a.useState(!1),
        [X, ee] = a.useState(!1),
        [et, en] = a.useState(null),
        el = a.useRef(null),
        {
            isAuthenticating: ei,
            purchaseTokenAuthState: er,
            purchaseTokenHash: ea,
        } = (0, b.t4)((e) => ({
            isAuthenticating: e.isAwaitingPaymentAuthentication,
            purchaseTokenAuthState: e.purchaseTokenAuthState,
            purchaseTokenHash: e.purchaseTokenHash,
        }));
    return (
        a.useEffect(() => {
            null != et && null != el.current && el.current.scrollIntoView({ behavior: "smooth" });
        }, [et]),
        {
            paymentSources: l,
            paymentSourceId: C,
            hasFetchedPaymentSources: i,
            setPaymentSourceId: g,
            creditCardState: I,
            setCreditCardState: _,
            tokenState: U,
            setTokenState: G,
            billingAddressState: T,
            setBillingAddressState: N,
            isSubmittingCurrentStep: Q,
            setIsSubmittingCurrentStep: J,
            hasRedirectURL: X,
            setHasRedirectURL: ee,
            braintreeEmail: F,
            braintreeNonce: Y,
            venmoUsername: q,
            adyenPaymentData: Z,
            paymentError: null != z ? z : K,
            paymentAuthenticationState: $ ? j.oc.PENDING : null != z ? j.oc.ERROR : j.oc.NONE,
            purchaseError: et,
            setPurchaseError: en,
            purchaseErrorBlockRef: el,
            isAuthenticating: ei,
            purchaseTokenAuthState: er,
            purchaseTokenHash: ea,
            epsBankState: k,
            setEpsBankState: w,
            p24BankState: M,
            setP24BankState: L,
        }
    );
}
