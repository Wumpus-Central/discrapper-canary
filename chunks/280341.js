n.d(t, { Y: () => tG, p: () => tF });
var l,
    i,
    r = n(477900),
    a = n(582128),
    s = n(17928),
    o = n(739187),
    u = n(857250),
    c = n(97483),
    d = n(73153),
    p = n(636537),
    m = n(277984),
    h = n(70142),
    C = n(739508),
    f = n(184015),
    S = n(723702),
    E = n(652215);
function y() {
    let e = h.A.getClient();
    null != e &&
        (0, f.j)().then((t) => {
            t.venmo
                .create({ client: e, allowDesktop: !0, paymentMethodUsage: "multi_use" })
                .then((e) => {
                    d.h.dispatch({ type: "BRAINTREE_CREATE_VENMO_CLIENT_SUCCESS", venmoClient: e });
                })
                .catch(() => {
                    d.h.dispatch({ type: "BRAINTREE_CREATE_VENMO_CLIENT_FAIL" });
                });
        });
}
function A() {
    let e = h.A.getClient();
    null != e &&
        (0, f.j)().then((t) => {
            t.paypal
                .create({ client: e })
                .then((e) => {
                    if (null == e._navigateFrameToAuth)
                        throw Error(
                            "braintree client missing _navigateFrameToAuth. did someone upgrade the braintree library?",
                        );
                    ((e._navigateFrameToAuth = function (e) {
                        let t = this._formatPaymentResourceData(e);
                        return p.Bo.post({
                            url: E.Rsh.BILLING_PAYPAL_BILLING_AGREEMENT_TOKENS,
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
                                    ((t = E.Gg3.BRAINTREE.KEY.startsWith("production_")
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
                        d.h.dispatch({ type: "BRAINTREE_CREATE_PAYPAL_CLIENT_SUCCESS", paypalClient: e }));
                })
                .catch(() => d.h.dispatch({ type: "BRAINTREE_CREATE_PAYPAL_CLIENT_FAIL" }));
        });
}
function I() {
    let e = h.A.getPayPalClient();
    if (null == e) throw Error("braintree paypal client must be initialized before calling this");
    d.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_START" });
    let t = Promise.resolve("");
    ((0, S.isDesktop)() && (t = (0, m.jf)(E.hes.PAYPAL)),
        t
            .then(() => e.tokenize({ flow: "vault" }))
            .then((e) => {
                let { email: t, firstName: n, lastName: l, billingAddress: i } = e.details;
                d.h.dispatch({
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
                n === E.Q7O.PAYPAL_POPUP_CLOSED || null == n
                    ? d.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED" })
                    : (d.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_FAIL", message: t, code: n }),
                      C.pM(Error(`Braintree Paypal Error: ${t} ${n} ${l}`)));
            }));
}
function g() {
    let e = h.A.getVenmoClient();
    if (null == e) throw Error("Braintree Venmo client must be initialized before calling tokenize.");
    (d.h.dispatch({ type: "BRAINTREE_TOKENIZE_VENMO_START" }),
        e
            .tokenize()
            .then((e) => {
                let { username: t } = e.details;
                d.h.dispatch({ type: "BRAINTREE_TOKENIZE_VENMO_SUCCESS", nonce: e.nonce, username: t });
            })
            .catch((e) => {
                let { message: t, code: n, details: l } = e;
                [E.Q7O.VENMO_APP_CANCELED, E.Q7O.VENMO_DESKTOP_CANCELED, E.Q7O.VENMO_CANCELED].includes(n)
                    ? d.h.dispatch({ type: "BRAINTREE_TOKENIZE_VENMO_FAIL_CANCELED" })
                    : (d.h.dispatch({ type: "BRAINTREE_TOKENIZE_VENMO_FAIL", message: t, code: n }),
                      C.pM(Error(`Braintree Venmo Error: ${t} ${n} ${l}`)));
            }));
}
function P(e, t) {
    if (null == e) return Promise.resolve();
    d.h.dispatch(t);
    try {
        return Promise.resolve(e.teardown());
    } catch (e) {
        return Promise.resolve();
    }
}
var v = n(391048),
    x = n(964486),
    _ = n(475743),
    T = n(721101),
    N = n(71804),
    b = n(642639),
    j = n(783327),
    R = n(251913),
    O = n(825755),
    M = n(295405),
    L = n(174459),
    k = n(166532),
    w = n(69494),
    D = n(482132),
    U = n(632088);
let G = null,
    F = null;
class B extends s.Ay.Store {
    static displayName = "AdyenStore";
    get client() {
        return G;
    }
    get cashAppPayComponent() {
        return F;
    }
}
let H = new B(d.h, {
    ADYEN_CREATE_CLIENT_SUCCESS: function (e) {
        let { client: t } = e;
        G = t;
    },
    ADYEN_TEARDOWN_CLIENT: function () {
        G = null;
    },
    ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS: function (e) {
        let { component: t } = e;
        F = t;
    },
});
var W = n(660183);
async function Y() {
    return await p.Bo.get({ url: E.Rsh.BILLING_ADYEN_PAYMENT_METHODS, oldFormErrors: !0, rejectWithError: !1 });
}
async function V() {
    try {
        let e = await Y(),
            { default: t } = await Promise.all([n.e("494678"), n.e("540002")]).then(n.bind(n, 971193)),
            l = await t({
                environment: E.Gg3.ADYEN.KEY.startsWith("live_") ? "live" : "test",
                clientKey: E.Gg3.ADYEN.KEY,
                analytics: { enabled: !1 },
                paymentMethodsResponse: e.body,
            });
        (d.h.dispatch({ type: "ADYEN_CREATE_CLIENT_SUCCESS", client: l }),
            (function (e) {
                if (null != H.cashAppPayComponent) {
                    (Z(), K());
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
                            if (n) d.h.dispatch({ type: "ADYEN_CASH_APP_PAY_SUBMIT_SUCCESS", data: t });
                            else throw (0, m.i0)("Cash App Pay setup attempt is not valid.");
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
                                        ((n = !1), (t = W.intl.string(W.t.TJ8dDB)));
                                }
                                (0, m.i0)(e.message, { captureException: n, defaultErrorMessage: t });
                            }
                        },
                    })
                    .mount(`#${U.h}`);
                d.h.dispatch({ type: "ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS", component: t });
            })(l));
    } catch (e) {
        ((0, C.pM)(e), d.h.dispatch({ type: "ADYEN_CREATE_CLIENT_FAIL" }));
    }
}
function K() {
    let e = H.cashAppPayComponent;
    if (null == e) throw Error("Adyen CashAppPay component must be created before mounting.");
    try {
        e.mount(`#${U.h}`);
    } catch (e) {}
}
function Z() {
    H.cashAppPayComponent?.unmount();
}
function q() {
    let e = H.cashAppPayComponent;
    if (null == e) throw Error("Adyen CashAppPay component must be created before submitting.");
    e.submit();
}
var z = n(901930),
    $ = n(19311),
    Q = n(626584),
    J = n(427262),
    X = n(276858);
let ee = new Q.A("AddPaymentMethodStepContext.tsx"),
    et = a.createContext(null);
function en(e) {
    let { children: t, ...n } = e,
        { handleStepChange: l, continueSessionToInitialStep: i, setBillingAddressState: s, currentStep: o } = n,
        u = a.useMemo(() => (0, J.Gn)(), []),
        c = a.useCallback(
            (e, t) => {
                s((n) => ({ info: { ...n.info, ...e }, isValid: t }));
            },
            [s],
        ),
        d = (0, X.wD)({
            step: o,
            continueSessionToInitialStep: i,
            handleStepChange: l,
            logger: ee,
            shouldLogOnChangeEvents: u || !1,
            onBillingAddressChange: c,
        }),
        { returnToPaymentElementStep: p, remountAddressElement: m } = d,
        h = a.useCallback(() => {
            (l(k.pn.ADDRESS), X.Ky.includes(o) && m());
        }, [l, m, o]),
        C = a.useCallback(
            (e) => {
                p(e);
            },
            [p],
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
    return (0, r.jsx)(et.Provider, { value: f, children: t });
}
function el() {
    let e = a.useContext(et);
    if (null == e)
        throw Error(
            "useAddPaymentMethodStepInternalContext must be used within an AddPaymentMethodStepInternalContextProvider",
        );
    return e;
}
function ei(e) {
    return () => (null != O.A.error && (0, v.ET)(), e());
}
function er(e) {
    let { onPrimary: t, onBack: n, ...l } = e,
        i = t;
    null != t && (i = ei(t));
    let a = n;
    return (null != n && (a = ei(n)), (0, r.jsx)($.Ay, { ...l, onPrimary: i, onBack: a }));
}
function ea(e) {
    let { className: t } = e,
        { hasSelectedPaymentElementSourceType: n } = el();
    return (0, r.jsx)(z.A, { className: t, hasSelectedPaymentElementSourceType: n });
}
var es = n(683071),
    eo = n(503698),
    eu = n.n(eo),
    ec = n(305866),
    ed = n(95477),
    ep = n(812745),
    em = n(287809),
    eh = n(832208),
    eC = n(643909),
    ef = n(661531),
    eS = n(602853),
    eE = n(281595),
    ey = n(513098),
    eA = n(151167);
let eI = function (e) {
    let t = a.useRef(null),
        { stripeType: n, flipped: l, updateCompleted: i, onFocus: s, onBlur: o } = e,
        [u, c] = a.useState(ep.Be.UNKNOWN),
        [d, p] = a.useState(!1),
        [m, h] = a.useState(!1),
        [C, f] = a.useState(null),
        [S, E] = a.useState({}),
        y = (0, eC.useElements)(),
        A = a.useCallback(() => {
            if (null != y)
                switch (n) {
                    case "cardNumber": {
                        let e = y.getElement(eC.CardNumberElement);
                        if (null == e) return;
                        (e.off("change"), e.off("focus"), e.off("blur"));
                        break;
                    }
                    case "cardExpiry": {
                        let e = y.getElement(eC.CardExpiryElement);
                        if (null == e) return;
                        (e.off("change"), e.off("focus"), e.off("blur"));
                        break;
                    }
                    case "cardCvc": {
                        let e = y.getElement(eC.CardCvcElement);
                        if (null == e) return;
                        (e.off("change"), e.off("focus"), e.off("blur"));
                    }
                }
        }, [y, n]),
        I = a.useCallback(
            (e) => {
                (m || e.empty || h(!0), null != i && i(e.complete), null != e.error && p(!1));
            },
            [m, i],
        ),
        g = a.useCallback(() => {
            (p(!0), s?.());
        }, [s]),
        P = a.useCallback(() => {
            (p(!1), o?.());
        }, [o]),
        v = a.useCallback(() => {
            if (null != y)
                switch (n) {
                    case "cardNumber": {
                        let e = y.getElement(eC.CardNumberElement);
                        if (null == e) return;
                        (e.on("change", (e) => {
                            (u !== e.brand && c(e.brand),
                                e.empty && m
                                    ? f(W.intl.string(W.t.eOIfuy))
                                    : null != e.error
                                      ? f(W.intl.string(W.t.x4pWtJ))
                                      : f(null),
                                I(e));
                        }),
                            e.on("focus", g),
                            e.on("blur", P));
                        break;
                    }
                    case "cardExpiry": {
                        let e = y.getElement(eC.CardExpiryElement);
                        if (null == e) return;
                        (e.on("change", (e) => {
                            (null != e.error || (e.empty && m) ? f(W.intl.string(W.t["9/zZdl"])) : f(null), I(e));
                        }),
                            e.on("focus", g),
                            e.on("blur", P));
                        break;
                    }
                    case "cardCvc": {
                        let e = y.getElement(eC.CardCvcElement);
                        if (null == e) return;
                        (e.on("change", (e) => {
                            (null != e.error || (e.empty && m) ? f(W.intl.string(W.t.ro4isZ)) : f(null), I(e));
                        }),
                            e.on("focus", g),
                            e.on("blur", P));
                    }
                }
        }, [P, I, g, u, y, m, n]);
    a.useEffect(
        () => (
            v(),
            () => {
                A();
            }
        ),
        [v, A],
    );
    let x = (0, eS.r)(ef.A.colors.TEXT_SUBTLE).hex(),
        _ = (0, eS.r)(ef.A.colors.TEXT_STRONG).hex();
    function T() {
        return eu()(ey.vB, { [ey.Tn]: null !== C, [ey.iH]: d, [ey.yD]: "cardNumber" === n });
    }
    return (
        a.useLayoutEffect(() => {
            let { current: e } = t;
            if (null == e) return;
            let n = window.getComputedStyle(e),
                l = n.getPropertyValue("font-family");
            E({
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
            className: ey.Zm,
            "data-stripe-type": n,
            children: [
                (0, r.jsx)("div", { ref: t, className: eu()(ey.iw, eA.hF) }),
                (function () {
                    switch (n) {
                        case "cardNumber":
                            return (0, r.jsxs)("div", {
                                children: [
                                    (0, r.jsx)(ep.Ay, { className: ey.Ie, type: u, flipped: l }),
                                    (0, r.jsx)(eC.CardNumberElement, {
                                        options: { style: S, placeholder: W.intl.string(W.t.gPRHfw), disableLink: !1 },
                                        className: T(),
                                    }),
                                ],
                            });
                        case "cardExpiry":
                            return (0, r.jsx)(eC.CardExpiryElement, {
                                options: { style: S, placeholder: W.intl.string(W.t.xeEWQ6) },
                                className: T(),
                            });
                        case "cardCvc":
                            return (0, r.jsx)(eC.CardCvcElement, {
                                options: { style: S, placeholder: W.intl.string(W.t.wZz04F) },
                                className: T(),
                            });
                    }
                })(),
                (0, r.jsx)(eE.U, { error: C }),
            ],
        })
    );
};
var eg = n(719941),
    eP = n(782328);
let ev = function (e) {
    let { onCardInfoChange: t, error: n } = e,
        l = a.useRef(t),
        [i, s] = a.useState(!1),
        [o, u] = a.useState({}),
        [c, d] = a.useState({ name: "", country: "", postalCode: "" }),
        [p, m] = a.useState({}),
        [h, C] = a.useState({}),
        { setFocusLockDisabled: f } = a.useContext(ec.M);
    a.useEffect(() => () => {
        void 0 !== f && f(!1);
    });
    let S = a.useCallback(() => {
        void 0 !== f && f(!0);
    }, [f]);
    function E(e, t) {
        !!o[e] !== t && u((n) => ({ ...n, [e]: t }));
    }
    let y = a.useCallback(
        function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = {};
            return ((e || p.name) && "" === c.name && (t.name = W.intl.string(W.t.lIkVsi)), t);
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
                em.default.getCurrentUser()?.nsfwAllowed
                    ? (0, r.jsxs)("div", {
                          className: eg.Rm,
                          children: [
                              (0, r.jsx)("div", { className: eu()(ep.y3.SMALL, eg.eo, eg.Ud) }),
                              (0, r.jsx)("div", { className: eu()(ep.y3.SMALL, eg.DR, eg.Ud) }),
                              (0, r.jsx)("div", { className: eu()(ep.y3.SMALL, eg.k4, eg.Ud) }),
                              (0, r.jsx)("div", { className: eu()(ep.y3.SMALL, eg.a3, eg.Ud) }),
                              (0, r.jsx)("div", { className: eu()(ep.y3.SMALL, eg.CY, eg.Ud) }),
                              (0, r.jsx)("div", { className: eu()(ep.y3.SMALL, eg.Q5, eg.Ud) }),
                              (0, r.jsx)("div", { className: eu()(ep.y3.SMALL, eg.YA, eg.Ud) }),
                          ],
                      })
                    : (0, r.jsxs)("div", {
                          className: eg.Rm,
                          children: [
                              (0, r.jsx)("div", { className: eu()(ep.y3.SMALL, eg.aq, eg.Ud) }),
                              (0, r.jsx)("div", { className: eu()(ep.y3.SMALL, eg.VX, eg.Ud) }),
                              (0, r.jsx)("div", { className: eu()(ep.y3.SMALL, eg.Yi, eg.Ud) }),
                              (0, r.jsx)("div", { className: eu()(ep.y3.SMALL, eg.qR, eg.Ud) }),
                              (0, r.jsx)("div", { className: eu()(ep.y3.SMALL, eg.m2, eg.Ud) }),
                              (0, r.jsx)("div", { className: eu()(ep.y3.SMALL, eg.Ij, eg.Ud) }),
                              (0, r.jsx)("div", { className: eu()(ep.y3.SMALL, eg._V, eg.Ud) }),
                          ],
                      }),
                (0, r.jsx)(eh.A, {
                    form: [
                        {
                            fields: [
                                {
                                    id: "card-number",
                                    name: "cardNumber",
                                    title: () => W.intl.string(W.t.cVyJ3o),
                                    getClassNameForLayout: () => eP.c6,
                                    renderInput: () =>
                                        (0, r.jsx)(eI, {
                                            stripeType: "cardNumber",
                                            flipped: i,
                                            updateCompleted: (e) => E("cardNumber", e),
                                            onFocus: S,
                                        }),
                                },
                            ],
                        },
                        {
                            fields: [
                                {
                                    id: "card-expiration-date",
                                    name: "cardExpiry",
                                    title: () => W.intl.string(W.t["CeBa/4"]),
                                    getClassNameForLayout: () => eP.ep,
                                    renderInput: () =>
                                        (0, r.jsx)(eI, {
                                            stripeType: "cardExpiry",
                                            updateCompleted: (e) => E("cardExpiry", e),
                                            onFocus: S,
                                        }),
                                },
                                {
                                    id: "card-cvc",
                                    name: "cardCvc",
                                    title: () => W.intl.string(W.t.Fd3rOz),
                                    getClassNameForLayout: () => eP.ep,
                                    renderInput: () =>
                                        (0, r.jsx)(eI, {
                                            stripeType: "cardCvc",
                                            updateCompleted: (e) => E("cardCvc", e),
                                            onFocus: () => {
                                                (S(), s(!0));
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
                                    title: () => W.intl.string(W.t.VUlFdU),
                                    autoComplete: "cc-name",
                                    placeholder: () => W.intl.string(W.t["yf7ms+"]),
                                    getClassNameForLayout: () => eP.c6,
                                    renderInput: (e) => (0, r.jsx)(ed.k, { ...e }),
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
                        (p[t] || "" === e || (l[t] = !0),
                            (n[t] = e),
                            l[t] && "" === e ? "name" === t && (i.name = W.intl.string(W.t.lIkVsi)) : delete i[t],
                            d(n),
                            m(l),
                            C(i));
                    },
                    onFieldBlur: function () {
                        C(y());
                    },
                }),
            ],
        })
    );
};
var ex = n(198970),
    e_ = n(116673),
    eT = n(773669),
    eN =
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
    eb = n(292234);
let ej = (e) => {
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
                })(l) === eN.ADDRESS),
        c = (0, s.bG)([eT.default], () => eT.default.locale);
    switch (o) {
        case E.hes.GIROPAY:
        case E.hes.PAYSAFE_CARD:
        case E.hes.GCASH:
        case E.hes.GRABPAY_MY:
        case E.hes.MOMO_WALLET:
        case E.hes.KAKAOPAY:
        case E.hes.GOPAY_WALLET:
        case E.hes.BANCONTACT:
            t = "en-US" === c ? ex.Ay.Layouts.MODAL_US_WITH_NAME : ex.Ay.Layouts.MODAL_INTL_WITH_NAME;
            break;
        case E.hes.VENMO:
        case E.hes.CASH_APP:
            t = ex.Ay.Layouts.MODAL_US_WITH_NAME;
            break;
        default:
            t = "en-US" === c ? ex.Ay.Layouts.MODAL_US : ex.Ay.Layouts.MODAL_INTL;
    }
    let d = (0, e_.z)();
    0 === n.country.length && null != d && d.length > 0 && (n.country = d[0]);
    let p = (0, s.bG)([em.default], () => em.default.getCurrentUser()?.storeCountry?.isLocked === !0)
        ? W.intl.string(W.t.Pg2hU0)
        : null;
    return (0, r.jsxs)(a.Fragment, {
        children: [
            u
                ? (0, r.jsx)("div", {
                      className: eb.QK,
                      children: (0, r.jsx)(es.w, {
                          type: "critical",
                          message: W.intl.string(W.t.vZ8y7l),
                          role: "alert",
                      }),
                  })
                : null,
            (0, r.jsx)(ex.Ay, {
                className: eb.__invalid_formItem,
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
var eR = n(818348);
let eO = [k.pn.CREDIT_CARD_INFORMATION, k.pn.ADDRESS];
function eM(e) {
    let { billingError: t, onCardInfoChange: n } = e,
        l = null != t && (null == t.code || (0, k.ou)(t) === k.pn.CREDIT_CARD_INFORMATION);
    return (0, r.jsxs)(a.Fragment, {
        children: [
            l
                ? (0, r.jsx)("div", {
                      className: eb.QK,
                      children: (0, r.jsx)(es.w, {
                          type: "critical",
                          message: W.intl.string(W.t["4vnhKV"]),
                          role: "alert",
                      }),
                  })
                : null,
            (0, r.jsx)(ev, { onCardInfoChange: n, error: t }),
        ],
    });
}
function eL(e) {
    let { billingAddressInfo: t, onBillingAddressChange: n, paymentSourceType: l } = e,
        i = (0, s.bG)([O.A], () => O.A.error);
    return (0, r.jsx)(ej, { billingAddressInfo: t, billingError: i, onBillingAddressChange: n, paymentSourceType: l });
}
function ek(e) {
    let { addPaymentMethodStepState: t } = e,
        { billingAddressState: n, setBillingAddressState: l } = t,
        { hasSelectedPaymentElementSourceType: i, paymentMethodSteps: a } = el(),
        s = a.methodType ?? eR.he.CARD;
    return i
        ? null
        : (0, r.jsx)(eL, {
              billingAddressInfo: n.info,
              onBillingAddressChange: (e, t) => {
                  l({ info: { ...n.info, ...e }, isValid: t });
              },
              paymentSourceType: s,
          });
}
let ew = {
    SHARED_ADD_PAYMENT_STEPS: [k.pn.PAYMENT_ELEMENT],
    SHARED_CREDIT_CARD_STEPS: [k.pn.PAYMENT_ELEMENT, k.pn.ADDRESS],
    SHARED_PAYPAL_STEPS: [k.pn.PAYMENT_ELEMENT, k.pn.PAYPAL_INFORMATION, k.pn.ADDRESS],
    SHARED_VENMO_STEPS: [k.pn.PAYMENT_ELEMENT, k.pn.VENMO_INFORMATION, k.pn.ADDRESS],
    SHARED_CASH_APP_STEPS: [k.pn.PAYMENT_ELEMENT, k.pn.CASH_APP_INFORMATION, k.pn.ADDRESS],
    SHARED_PRZELEWY24_STEPS: [k.pn.PAYMENT_ELEMENT, k.pn.PRZELEWY24_INFORMATION, k.pn.ADDRESS],
    SHARED_EPS_STEPS: [k.pn.PAYMENT_ELEMENT, k.pn.EPS_INFORMATION, k.pn.ADDRESS],
    SHARED_IDEAL_STEPS: [k.pn.PAYMENT_ELEMENT, k.pn.ADDRESS],
    SHARED_TYPE_AND_ADDRESS_STEPS: [k.pn.PAYMENT_ELEMENT, k.pn.ADDRESS],
};
var eD = n(685094);
class eU extends a.PureComponent {
    componentDidMount() {
        null != this.props.paypalClient && I();
    }
    componentDidUpdate(e) {
        null == e.paypalClient && null != this.props.paypalClient && I();
    }
    componentWillUnmount() {
        P(h.A.getPayPalClient(), { type: "BRAINTREE_TEARDOWN_PAYPAL_CLIENT" }).then(() => {
            null != h.A.getClient() && A();
        });
    }
    render() {
        let { braintreeEmail: e, paypalClient: t } = this.props;
        return (0, r.jsx)(ed.k, {
            label: W.intl.string(W.t.QQBAos),
            leading: { type: "image", src: (0, ep.Nj)(ep.Ay.Types.PAYPAL) },
            value: e,
            readOnly: !0,
            placeholder: null == t ? W.intl.string(W.t.dte2M9) : W.intl.string(W.t.hopw7X),
        });
    }
}
let eG = s.Ay.connectStores([h.A, O.A], () => ({
    braintreeEmail: O.A.braintreeEmail,
    paypalClient: h.A.getPayPalClient(),
}))(eU);
var eF = n(297264),
    eB = n(834730),
    eH = n(351665);
class eW extends a.PureComponent {
    componentDidMount() {
        null != this.props.venmoClient && g();
    }
    componentDidUpdate(e) {
        null == e.venmoClient && null != this.props.venmoClient && g();
    }
    componentWillUnmount() {
        P(h.A.getVenmoClient(), { type: "BRAINTREE_TEARDOWN_VENMO_CLIENT" }).then(() => {
            null != h.A.getClient() && y();
        });
    }
    render() {
        let { venmoUsername: e, className: t, venmoClient: n } = this.props,
            l = null != e && "" !== e;
        return (0, r.jsxs)("div", {
            className: t,
            children: [
                (0, r.jsx)(ep.Ay, { type: ep.Ay.Types.VENMO, size: ep.y3.MEDIUM, className: eH.Z }),
                l
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(eF.D, {
                                  variant: e.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
                                  className: eH.y,
                                  children: W.intl.format(W.t.DowIre, { venmoUsername: e }),
                              }),
                              (0, r.jsx)(eB.E, {
                                  variant: "text-md/medium",
                                  className: eH.y,
                                  children: W.intl.string(W.t.kmEvnR),
                              }),
                          ],
                      })
                    : (0, r.jsx)(eB.E, {
                          variant: "text-md/medium",
                          className: eH.y,
                          children: null == n ? W.intl.string(W.t["2ouZDU"]) : W.intl.string(W.t.mIL6Jb),
                      }),
            ],
        });
    }
}
let eY = s.Ay.connectStores([h.A, O.A], () => ({
    venmoUsername: O.A.venmoUsername,
    venmoClient: h.A.getVenmoClient(),
}))(eW);
var eV = n(891197),
    eK = n(462887),
    eZ = n(331322),
    eq = n(736653),
    ez = n(438983);
let e$ = function (e) {
    let t = (0, eq.Ay)(),
        n = a.useRef(null),
        [l, i] = a.useState({}),
        s = (0, eS.r)(ef.A.colors.BACKGROUND_BASE_LOWER).hex();
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
                    borderRadius: ef.A.radii.xs,
                },
            });
        }, [n, s]),
        e.type)
    ) {
        case eR.he.PRZELEWY24: {
            let i = (0, eK.M)(t) ? "/assets/f4150b3aed6c4679.svg" : "/assets/8b825aafb2e4dbed.svg",
                { onNameChange: a, onEmailChange: s, onP24BankChange: o, p24BankValue: u, billingAddressInfo: c } = e;
            return (0, r.jsx)("div", {
                className: ez.rf,
                children: (0, r.jsxs)(eZ.B, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(ed.k, {
                            label: W.intl.string(W.t["w/qqKK"]),
                            inputRef: n,
                            name: W.intl.string(W.t["w/qqKK"]),
                            placeholder: W.intl.string(W.t["w/qqKK"]),
                            onChange: (e) => s(e),
                            value: c.email,
                        }),
                        (0, r.jsx)(ed.k, {
                            label: W.intl.string(W.t["yf7ms+"]),
                            name: W.intl.string(W.t["yf7ms+"]),
                            placeholder: W.intl.string(W.t["yf7ms+"]),
                            onChange: (e) => a(e),
                            value: c.name,
                        }),
                        (0, r.jsxs)(eZ.B, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(eB.E, { variant: "text-sm/semibold", children: W.intl.string(W.t.De3b8t) }),
                                (0, r.jsx)(eC.P24BankElement, {
                                    options: { value: u, style: l },
                                    onChange: (e) => o(e.value),
                                }),
                                (0, r.jsx)("div", {
                                    className: ez.je,
                                    children: (0, r.jsx)("img", { src: i, alt: "Przelewy24" }),
                                }),
                            ],
                        }),
                    ],
                }),
            });
        }
        case eR.he.EPS: {
            let { onAccountHolderNameChange: i, onEPSBankChange: a, epsBankValue: s, billingAddressInfo: o } = e,
                u = (0, eK.M)(t) ? "/assets/025b24b0055c8d81.svg" : "/assets/1dae7d71a65fd90f.svg";
            return (0, r.jsx)("div", {
                className: ez.rf,
                children: (0, r.jsxs)(eZ.B, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(ed.k, {
                            label: W.intl.string(W.t.sN3wrd),
                            inputRef: n,
                            name: W.intl.string(W.t.sN3wrd),
                            placeholder: W.intl.string(W.t.sN3wrd),
                            onChange: (e) => i(e),
                            value: o.name,
                        }),
                        (0, r.jsxs)(eZ.B, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(eB.E, { variant: "text-sm/semibold", children: W.intl.string(W.t.dFyV07) }),
                                (0, r.jsx)(eC.EpsBankElement, {
                                    options: { value: s, style: l },
                                    onChange: (e) => a(e.value),
                                }),
                                (0, r.jsx)("div", {
                                    className: ez.je,
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
var eQ = n(31823),
    eJ = n(883645),
    eX = n(25149),
    e0 = n(364840),
    e2 = n(73825),
    e1 = n(558620),
    e3 = n(36167),
    e4 = n(951305),
    e7 = n(820287),
    e6 = (((i = {})[(i.UNKNOWN = 0)] = "UNKNOWN"), (i[(i.PENDING = 1)] = "PENDING"), (i[(i.DONE = 2)] = "DONE"), i);
let e5 = 0,
    e8 = null,
    e9 = null,
    te = null;
class tt extends s.Ay.Store {
    static displayName = "BrowserCheckoutStateStore";
    get browserCheckoutState() {
        return e5;
    }
    get loadId() {
        return e8;
    }
    get skuId() {
        return e9;
    }
    get planId() {
        return te;
    }
}
let tn = new tt(d.h, {
    USER_PAYMENT_BROWSER_CHECKOUT_STARTED: function (e) {
        ((e5 = 1), (e8 = e.loadId));
    },
    USER_PAYMENT_BROWSER_CHECKOUT_DONE: function (e) {
        e8 === e.loadId && ((e9 = e.skuId ?? null), (te = e.skuSubscriptionPlanId ?? null), (e5 = 2));
    },
});
var tl = n(202541),
    ti = n(731075);
function tr(e) {
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
            browserCheckoutState: d,
            browserCheckoutStateLoadId: p,
            browserCheckoutStateSkuId: h,
            browserCheckoutStatePlanId: C,
        } = (0, s.cf)([tn], () => ({
            browserCheckoutState: tn.browserCheckoutState,
            browserCheckoutStateLoadId: tn.loadId,
            browserCheckoutStateSkuId: tn.skuId,
            browserCheckoutStatePlanId: tn.planId,
        })),
        f = (0, e1.A)(),
        { isGift: S } = (0, e4.Pv)(),
        [y, A] = a.useState(!1);
    switch (n) {
        case k.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
            t = E.do8.GOOGLE_PAY;
            break;
        case k.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
            t = E.do8.APPLE_PAY;
    }
    return (
        a.useEffect(() => {
            let e = setTimeout(() => {
                y ||
                    (A(!0),
                    (0, m.Ze)(c.loadId),
                    (0, e3.my)(
                        {
                            planId: f?.id ?? tl.gD.PREMIUM_MONTH_TIER_2,
                            isGift: S,
                            loadId: c.loadId,
                            paymentMethodType: t,
                        },
                        i,
                    ));
            }, 1e3);
            return () => clearTimeout(e);
        }, [f, S, c, i, A, y, t]),
        a.useEffect(() => {
            (null !== h && (tl.oz.includes(h) && ((0, e2.ur)(h), (0, m.hP)()), o(h)),
                null !== C && u(C),
                p === c.loadId && d === e6.DONE && l());
        }, [o, u, d, p, h, C, c, l]),
        (0, r.jsxs)("div", {
            className: ti.rf,
            children: [
                (0, r.jsx)(eF.D, { variant: "heading-xl/bold", children: W.intl.string(W.t.C4HYfy) }),
                (0, r.jsx)(eB.E, { variant: "text-md/normal", className: ti.h_, children: W.intl.string(W.t.xfG7Jp) }),
            ],
        })
    );
}
function ta(e) {
    let { onPrimaryClick: t, onBackClick: n } = e;
    return (0, r.jsx)(e0.j, {
        children: (0, r.jsxs)("div", {
            className: ti.kL,
            children: [
                (0, r.jsx)(e7.A, { onClick: n }),
                (0, r.jsx)(e7.F, { onClick: t, children: W.intl.string(W.t["4Qvmmj"]) }),
            ],
        }),
    });
}
var ts = n(311622);
function to(e) {
    let { className: t } = e,
        n = (0, s.bG)([H], () => H.cashAppPayComponent),
        l = (0, s.bG)([O.A], () => O.A.adyenPaymentData);
    a.useEffect(
        () => (
            null == l && null != n && (K(), q()),
            () => {
                Z();
            }
        ),
        [l, n],
    );
    let i = l?.paymentMethod?.cashtag ?? "",
        o = null != l && "" !== i;
    return (0, r.jsxs)("div", {
        className: t,
        children: [
            (0, r.jsx)(ep.Ay, { type: ep.Ay.Types.CASH_APP, size: ep.y3.MEDIUM, className: ts.K }),
            o
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(eF.D, {
                              variant: i.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
                              className: ts.y,
                              children: W.intl.format(W.t["ze/1yE"], { cashtag: i }),
                          }),
                          (0, r.jsx)(eB.E, {
                              variant: "text-md/medium",
                              className: ts.y,
                              children: W.intl.string(W.t.VPOx7N),
                          }),
                      ],
                  })
                : (0, r.jsx)(eB.E, {
                      variant: "text-md/medium",
                      className: ts.y,
                      children: null == n ? W.intl.string(W.t["CgVe/w"]) : W.intl.string(W.t["1MqcjI"]),
                  }),
        ],
    });
}
var tu = n(913122),
    tc = n(908166),
    td = n(930767),
    tp = n(676230);
let tm = new Q.A("AddPaymentMethod");
function th(e) {
    let { addPaymentMethodStepState: t } = e,
        {
            handleStepChange: n,
            completeSteps: l,
            paymentMethodSteps: i,
            stripePaymentElementState: a,
            hasSelectedPaymentElementSourceType: s,
            analyticsLocation: o,
            overwriteSubscriptionPaymentSource: u,
        } = el(),
        {
            paymentElementSelectedType: c,
            returnToPaymentElementStep: d,
            stripeElementsRef: p,
            lastConfirmedSetupIntentRef: m,
        } = a,
        h = (0, j.S)(),
        { createSetupIntent: f } = (0, tc.x)(),
        {
            isSubmittingCurrentStep: S,
            billingAddressState: E,
            setIsSubmittingCurrentStep: y,
            hasRedirectURL: A,
            setHasRedirectURL: I,
            isAuthenticating: g,
        } = t;
    async function P() {
        y(!0);
        let e = s ? c : i.methodType,
            n = p.current,
            r = null != e && (0, tp.i)(e) ? tp.F[e] : null;
        if (null == r)
            throw new td.v({
                message: "unknown Add Payment step not handled",
                extraSentryInformation: { paymentSourceType: e, analyticsLocation: o },
            });
        let a = r.submitAddressStep;
        try {
            let e = await a({
                ...t,
                analyticsLocation: o,
                stripe: h,
                shouldUsePaymentElement: s,
                stripeElements: n,
                lastConfirmedSetupIntentRef: m,
                createSetupIntent: f,
                overwriteSubscriptionPaymentSource: u,
            });
            ("redirect-url" === e.responseType ? I(e.hasRedirectURL) : l(e.paymentSource), A || y(!1));
        } catch (e) {
            if (e instanceof tu.Ey) {
                let t = Object.keys(e.fields).sort();
                (0, C.pM)(e, {
                    tags: {
                        ...(s ? { source: "payment_elements" } : {}),
                        error_location: "submit_address_step",
                        has_field_error: t.length > 0 ? "true" : "false",
                        error_code: String(e.code),
                        ...(null != e.status ? { status: String(e.status) } : {}),
                    },
                    extra: { code: e.code, fields: e.fields, ...(null != e.status ? { status: e.status } : {}) },
                });
            }
            (y(!1), tm.warn(`Error confirming submitting Address Step for Payment Source Type: ${v}`, e));
        }
    }
    let v = i.methodType,
        { backStep: x } = s
            ? { backStep: k.pn.PAYMENT_ELEMENT }
            : (function (e) {
                  switch (e) {
                      case eR.he.CARD:
                          return { backStep: k.pn.CREDIT_CARD_INFORMATION };
                      case eR.he.PAYPAL:
                          return { backStep: k.pn.PAYPAL_INFORMATION };
                      case eR.he.VENMO:
                          return { backStep: k.pn.VENMO_INFORMATION };
                      case eR.he.EPS:
                          return { backStep: k.pn.EPS_INFORMATION };
                      case eR.he.PRZELEWY24:
                          return { backStep: k.pn.PRZELEWY24_INFORMATION };
                      case eR.he.CASH_APP:
                          return { backStep: k.pn.CASH_APP_INFORMATION };
                      default:
                          return { backStep: k.pn.PAYMENT_ELEMENT };
                  }
              })(v),
        _ = s ? () => d(void 0) : () => n(x);
    return (0, r.jsx)(er, {
        onBack: _,
        primaryCTA: $.Ay.CTAType.CONTINUE,
        primaryText: W.intl.string(W.t.PDTjLN),
        primarySubmitting: S,
        primaryDisabled: !E.isValid || g,
        onPrimary: P,
    });
}
var tC = n(648335);
let tf = new Q.A("PaymentElementStepFooter.tsx");
function tS(e) {
    let { addPaymentMethodStepState: t } = e,
        { setIsSubmittingCurrentStep: n, setBillingAddressState: l, isSubmittingCurrentStep: i } = t,
        s = (0, j.S)(),
        { paymentElementOnNextCallback: o, handleStepChange: u, stripePaymentElementState: c, onReturn: d } = el(),
        {
            paymentElementSelectedType: p,
            stripeElementsRef: h,
            remountAddressElement: C,
            onBackFromPaymentElement: f,
            paymentElementReady: S,
        } = c,
        E = a.useCallback(async () => {
            n(!0);
            try {
                if (null == p || !(0, tC.eX)(p)) throw (0, m.ne)("Valid Payment Element source type not found", !0);
                o(p);
                let e = tp.F[p];
                if (null != e && null != e.submitPaymentElementStepHandler) {
                    (await e.submitPaymentElementStepHandler({
                        stripe: s,
                        stripeElements: h.current,
                        remountAddressElement: C,
                        setBillingAddressState: l,
                    }),
                        u(e.stepAfterPaymentElement ?? k.pn.ADDRESS));
                    return;
                }
                let t = (0, tC.eI)(p);
                if (null != t) return void u(t);
                u(k.pn.ADDRESS);
            } catch (e) {
                tf.error("Error on submitting Payment Element step: ", e.message ?? JSON.stringify(e));
            } finally {
                n(!1);
            }
        }, [o, p, h, C, u, s, n, l]),
        y = a.useCallback(() => {
            (f(), null != d && d());
        }, [f, d]);
    return (0, r.jsx)(er, {
        onBack: y,
        primaryCTA: $.Ay.CTAType.CONTINUE,
        primaryType: "submit",
        primaryText: W.intl.string(W.t.PDTjLN),
        primarySubmitting: i,
        primaryDisabled: !S,
        onPrimary: E,
    });
}
var tE = n(814935),
    ty = n(24404);
let tA = new Q.A("AddPaymentMethodSubstepRegistry.tsx");
function tI(e) {
    let { setCreditCardState: t, setBillingAddressState: n } = e,
        l = a.useCallback(
            (e, l) => {
                (t({ info: e, isValid: l }), n((t) => ({ ...t, info: { ...t.info, name: e.name } })));
            },
            [t, n],
        ),
        i = (0, s.bG)([O.A], () => O.A.error);
    return (0, r.jsx)(eM, { billingError: i, onCardInfoChange: l });
}
function tg(e) {
    let { setIsSubmittingCurrentStep: t, setTokenState: n, isSubmittingCurrentStep: l, creditCardState: i } = e,
        { handleStepChange: a, onReturn: s } = el(),
        o = (0, j.S)();
    async function u(e) {
        t(!0);
        try {
            let t = await (0, m.YJ)(o, e);
            (n({ token: t }), a(k.pn.ADDRESS));
        } catch (e) {
            tA.error(e.message ?? JSON.stringify(e));
        } finally {
            t(!1);
        }
    }
    let c = !i.isValid;
    return (0, r.jsx)(eC.ElementsConsumer, {
        children: (e) => {
            let { elements: t } = e;
            return (0, r.jsx)(er, {
                primaryCTA: $.Ay.CTAType.CONTINUE,
                primaryType: "submit",
                primaryText: W.intl.string(W.t.PDTjLN),
                primarySubmitting: l,
                primaryDisabled: c,
                onPrimary: () => u(t),
                onBack: null != s ? () => s() : void 0,
            });
        },
    });
}
function tP() {
    let { currentStep: e, redirectToCardInput: t, onComplete: n } = el();
    return (0, r.jsx)(tr, { step: e, onPurchaseComplete: () => n(e), onHandoffFailure: t });
}
function tv() {
    let { redirectToCardInput: e, onReturn: t, stripePaymentElementState: n } = el(),
        { onBackFromPaymentElement: l } = n;
    return (0, r.jsx)(ta, {
        onPrimaryClick: e,
        onBackClick: function () {
            (l(), null != t && t());
        },
    });
}
function tx(e) {
    let { adyenPaymentData: t } = e,
        { defaultOnBackHandler: n, onSubmitCustomPaymentMethodSubStep: l } = el(),
        i = (0, s.bG)([H], () => H.cashAppPayComponent),
        a = null != t;
    return (0, r.jsx)(er, {
        onBack: () => n(eR.he.CASH_APP),
        primaryCTA: $.Ay.CTAType.CONTINUE,
        primaryText: a ? W.intl.string(W.t.PDTjLN) : W.intl.string(W.t["9ALP8w"]),
        onPrimary: () => (a ? l() : q()),
        primaryDisabled: null == i,
    });
}
function t_(e) {
    let { defaultOnBackHandler: t, onSubmitCustomPaymentMethodSubStep: n } = el(),
        { billingAddressState: l, epsBankState: i } = e;
    return (0, r.jsx)(er, {
        onBack: () => t(eR.he.EPS),
        primaryCTA: $.Ay.CTAType.CONTINUE,
        primaryText: W.intl.string(W.t.PDTjLN),
        primaryDisabled: void 0 === i || "" === i || "" === l.info.name,
        onPrimary: () => n(),
    });
}
function tT(e) {
    let { defaultOnBackHandler: t, onSubmitCustomPaymentMethodSubStep: n } = el(),
        { billingAddressState: l, p24BankState: i } = e;
    return (0, r.jsx)(er, {
        onBack: () => t(eR.he.PRZELEWY24),
        primaryCTA: $.Ay.CTAType.CONTINUE,
        primaryText: W.intl.string(W.t.PDTjLN),
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
function tN(e) {
    let { defaultOnBackHandler: t, onSubmitCustomPaymentMethodSubStep: n } = el(),
        { braintreeEmail: l, braintreeNonce: i } = e,
        a = 0 !== l.length && null != i;
    return (0, r.jsx)(er, {
        onBack: () => t(eR.he.PAYPAL),
        primaryCTA: $.Ay.CTAType.CONTINUE,
        primaryText: a ? W.intl.string(W.t.PDTjLN) : W.intl.string(W.t.Djzd7L),
        onPrimary: () => {
            let e;
            return a
                ? n()
                : void (null == (e = h.A.getLastURL())
                      ? I()
                      : (d.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_START" }), window.open(e)));
        },
    });
}
function tb(e) {
    let { venmoUsername: t, braintreeNonce: n } = e,
        l = 0 !== t.length && null != n,
        { defaultOnBackHandler: i, onSubmitCustomPaymentMethodSubStep: a } = el();
    return (0, r.jsx)(er, {
        onBack: () => i(eR.he.VENMO),
        primaryCTA: $.Ay.CTAType.CONTINUE,
        primaryText: l ? W.intl.string(W.t.PDTjLN) : W.intl.string(W.t["4KoTLM"]),
        onPrimary: () => (l ? a() : void g()),
    });
}
let tj = {
    [k.pn.CREDIT_CARD_INFORMATION]: {
        renderStepBody: (e) => (0, r.jsx)(tI, { ...e }),
        renderStepFooter: (e) => (0, r.jsx)(tg, { ...e }),
    },
    [k.pn.AWAITING_BROWSER_CHECKOUT]: {
        renderStepBody: () => (0, r.jsx)(tP, {}),
        renderStepFooter: () => (0, r.jsx)(tv, {}),
    },
    [k.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY]: {
        renderStepBody: () => (0, r.jsx)(tP, {}),
        renderStepFooter: () => (0, r.jsx)(tv, {}),
    },
    [k.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY]: {
        renderStepBody: () => (0, r.jsx)(tP, {}),
        renderStepFooter: () => (0, r.jsx)(tv, {}),
    },
    [k.pn.PAYMENT_ELEMENT]: {
        renderStepBody: () => null,
        renderStepFooter: (e) => (0, r.jsx)(tS, { addPaymentMethodStepState: e }),
    },
    [k.pn.EPS_INFORMATION]: {
        renderStepBody: (e) => {
            let { setBillingAddressState: t, billingAddressState: n, setEpsBankState: l, epsBankState: i } = e;
            return (0, r.jsx)(e$, {
                type: eR.he.EPS,
                onAccountHolderNameChange: (e) => t({ info: { ...n.info, name: e }, isValid: n.isValid }),
                onEPSBankChange: (e) => l(e),
                epsBankValue: i,
                billingAddressInfo: n.info,
            });
        },
        renderStepFooter: (e) => (0, r.jsx)(t_, { ...e }),
    },
    [k.pn.PRZELEWY24_INFORMATION]: {
        renderStepBody: (e) => {
            let { setBillingAddressState: t, billingAddressState: n, setP24BankState: l, p24BankState: i } = e;
            return (0, r.jsx)(e$, {
                type: eR.he.PRZELEWY24,
                onNameChange: (e) => t({ info: { ...n.info, name: e }, isValid: n.isValid }),
                onEmailChange: (e) => t({ info: { ...n.info, email: e }, isValid: n.isValid }),
                onP24BankChange: (e) => {
                    l(e);
                },
                p24BankValue: i,
                billingAddressInfo: n.info,
            });
        },
        renderStepFooter: (e) => (0, r.jsx)(tT, { ...e }),
    },
    [k.pn.PAYPAL_INFORMATION]: {
        renderStepBody: () => (0, r.jsx)(eG, {}),
        renderStepFooter: (e) => (0, r.jsx)(tN, { ...e }),
    },
    [k.pn.VENMO_INFORMATION]: {
        renderStepBody: () => (0, r.jsx)(eY, {}),
        renderStepFooter: (e) => (0, r.jsx)(tb, { ...e }),
    },
    [k.pn.CASH_APP_INFORMATION]: {
        renderStepBody: () => (0, r.jsx)(to, {}),
        renderStepFooter: (e) => {
            let { adyenPaymentData: t } = e;
            return (0, r.jsx)(tx, { adyenPaymentData: t });
        },
    },
    [k.pn.AWAITING_AUTHENTICATION]: { renderStepBody: () => (0, r.jsx)(eV.N, {}), renderStepFooter: () => null },
    [k.pn.ADDRESS]: {
        renderStepBody: (e) => (0, r.jsx)(ek, { addPaymentMethodStepState: e }),
        renderStepFooter: (e) => (0, r.jsx)(th, { addPaymentMethodStepState: e }),
    },
};
function tR(e) {
    let { billingAddressState: t } = e,
        {
            analyticsData: n,
            handleStepChange: l,
            stripePaymentElementState: i,
            setFallbackCardPaymentMethodSteps: a,
            currentStep: s,
        } = el(),
        o = (0, eJ.qv)(),
        { contextMetadata: u } = (0, b.t4)((e) => ({ contextMetadata: e.contextMetadata })),
        { activitySessionId: c } = (0, eQ.V)(),
        {
            onBackFromPaymentElement: d,
            paymentElementLoaded: p,
            paymentElementSelectedType: m,
            stripeElementsRef: h,
            stripePaymentElementProps: C,
            stripeAddressElementProps: f,
            addressElementKey: S,
        } = i;
    return (0, r.jsx)(X._i, {
        step: s,
        analyticsContext: null != n ? { activitySessionId: c, contextMetadata: u, analyticsData: n } : void 0,
        paymentElementSelectedType: m,
        stripeElementsRef: h,
        stripePaymentElementProps: C,
        stripeAddressElementProps: f,
        addressElementKey: S,
        billingAddressInfo: t.info,
        onSetupError: () => {
            (d(), a(), l(k.pn.CREDIT_CARD_INFORMATION));
        },
        paymentElementFooter: p
            ? (0, r.jsx)(eX.Z4, {
                  className: tE.SO,
                  stackingBehavior: "stack",
                  onComplete: () => {
                      setTimeout(() => o(k.pn.REVIEW), 0);
                  },
              })
            : null,
    });
}
function tO(e) {
    let { billingAddressState: t, children: n } = e,
        { stripePaymentElementState: l, currentStep: i, paymentMethodSteps: a } = el(),
        { shouldRenderPaymentElement: s } = l;
    return (0, r.jsxs)(eD.Y, {
        className: ty.C9,
        staticClassName: ty.a2,
        animatedNodeClassName: ty.L2,
        fillParent: !0,
        overrideKey: s ? "combined_stripe_elements" : void 0,
        step: i,
        steps: a.steps,
        sideMargin: 20,
        children: [s && (0, r.jsx)(tR, { billingAddressState: t }), n],
    });
}
var tM = n(430993),
    tL = n(289873),
    tk = n(136857);
function tw(e) {
    let { body: t, paymentError: n, header: l, footer: i, isLoading: a } = e,
        { hasSelectedPaymentElementSourceType: s } = el(),
        o = "";
    return (
        null != n &&
            (0, k.h5)(n, s) &&
            ((o = n.message),
            n.code === tk.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED
                ? (o = W.intl.string(W.t.ypuSd8))
                : n.code === E.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (o = W.intl.string(W.t.mXMmWE))),
        (0, r.jsxs)(r.Fragment, {
            children: [
                l,
                (0, r.jsx)(tM.c, {
                    children: (0, r.jsxs)("div", {
                        className: ty.uK,
                        children: [
                            "" === o
                                ? null
                                : (0, r.jsx)("div", {
                                      className: ty.Nk,
                                      children: (0, r.jsx)(es.w, { type: "critical", message: o, role: "alert" }),
                                  }),
                            a ? (0, r.jsx)(tL.y, { className: ty.CI }) : t,
                        ],
                    }),
                }),
                i,
            ],
        })
    );
}
let tD = { name: "", cardNumber: "", expirationDate: "", cvc: "" },
    tU = { email: "", name: "", country: "", line1: "", line2: "", city: "", postalCode: "", state: "" };
function tG(e) {
    let {
            addPaymentMethodStepState: t,
            initialStep: n,
            prependSteps: l,
            appendSteps: i,
            onReturn: d,
            onComplete: p,
            onStepChange: h,
            header: C,
            analyticsLocation: f,
            analyticsData: S,
            overwriteSubscriptionPaymentSource: y = !1,
            useCheckoutStep: A = !1,
            isEligibleForTrial: I = !1,
            allowDesktopRedirectPurchase: g = !1,
            toastContent: P,
            continueSessionToInitialStep: v,
        } = e,
        _ = (0, j.S)(),
        { contextMetadata: T, clearFetchSetupIntent: R } = (0, b.t4)((e) => ({
            contextMetadata: e.contextMetadata,
            clearFetchSetupIntent: e.clearFetchSetupIntent,
        }));
    (0, x.l0)(R);
    let U = a.useMemo(
            () => (n === k.pn.PAYMENT_ELEMENT ? (g ? k.pn.AWAITING_BROWSER_CHECKOUT : k.pn.PAYMENT_ELEMENT) : n),
            [n, g],
        ),
        {
            CREDIT_CARD_STEPS: G,
            CASH_APP_STEPS: F,
            PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: B,
        } = (function (e) {
            let { prependSteps: t, appendSteps: n } = e,
                [l, i, r, s, o, u, c, d, p] = (0, a.useMemo)(
                    () =>
                        (function (e, t) {
                            let { prependSteps: n, appendSteps: l } = t;
                            return e.map((e) => {
                                let { sharedStepsKey: t, methodType: i } = e;
                                return { steps: [...n, ...ew[t], ...l], methodType: i };
                            });
                        })(
                            [
                                { sharedStepsKey: "SHARED_TYPE_AND_ADDRESS_STEPS", methodType: eR.he.UNKNOWN },
                                { sharedStepsKey: "SHARED_ADD_PAYMENT_STEPS", methodType: eR.he.PAYMENT_REQUEST },
                                { sharedStepsKey: "SHARED_CREDIT_CARD_STEPS", methodType: eR.he.CARD },
                                { sharedStepsKey: "SHARED_PAYPAL_STEPS", methodType: eR.he.PAYPAL },
                                { sharedStepsKey: "SHARED_IDEAL_STEPS", methodType: eR.he.IDEAL },
                                { sharedStepsKey: "SHARED_VENMO_STEPS", methodType: eR.he.VENMO },
                                { sharedStepsKey: "SHARED_PRZELEWY24_STEPS", methodType: eR.he.PRZELEWY24 },
                                { sharedStepsKey: "SHARED_EPS_STEPS", methodType: eR.he.EPS },
                                { sharedStepsKey: "SHARED_CASH_APP_STEPS", methodType: eR.he.CASH_APP },
                            ],
                            { prependSteps: t, appendSteps: n },
                        ),
                    [t, n],
                ),
                m = (0, a.useMemo)(
                    () => ({
                        [eR.he.CARD]: r,
                        [eR.he.PAYPAL]: s,
                        [eR.he.PAYMENT_REQUEST]: i,
                        [eR.he.VENMO]: u,
                        [eR.he.CASH_APP]: p,
                        [eR.he.IDEAL]: o,
                        [eR.he.PRZELEWY24]: c,
                        [eR.he.EPS]: d,
                        [eR.he.BANCONTACT]: l,
                        [eR.he.GOPAY_WALLET]: l,
                        [eR.he.KAKAOPAY]: l,
                        [eR.he.GCASH]: l,
                        [eR.he.PAYSAFE_CARD]: l,
                        [eR.he.GRABPAY_MY]: l,
                        [eR.he.MOMO_WALLET]: l,
                        [eR.he.PIX]: l,
                    }),
                    [l, r, s, u, i, o, p, c, d],
                );
            return { CREDIT_CARD_STEPS: r, CASH_APP_STEPS: p, PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: m };
        })({ prependSteps: l, appendSteps: i }),
        [H, Y] = a.useState(U),
        [V, K] = a.useState(
            (function (e) {
                switch (e) {
                    case k.pn.CREDIT_CARD_INFORMATION:
                        return G;
                    case k.pn.CASH_APP_INFORMATION:
                        return F;
                    default:
                        return { steps: [k.pn.ADD_PAYMENT_STEPS] };
                }
            })(U),
        );
    a.useEffect(() => {
        (0, m.IV)();
    }, []);
    let Z = a.useCallback(
            function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                (Y(e), t && h({ currentStep: H, toStep: e }));
            },
            [H, h],
        ),
        q = a.useCallback(
            (e) => {
                L.default.track(E.HAw.PAYMENT_FLOW_ADD_SOURCE_COMPLETED, {
                    load_id: T.loadId,
                    analytics_location: f,
                    payment_source_id: e.id,
                    payment_source_type: e.type,
                    payment_source_country: e.paymentMethodCountry,
                });
            },
            [T.loadId, f],
        ),
        z = (0, s.bG)([O.A], () => O.A.error),
        $ = a.useRef(z);
    a.useEffect(() => {
        let e = $.current;
        (($.current = z),
            null != z &&
                z !== e &&
                L.default.track(E.HAw.PAYMENT_FLOW_ADD_SOURCE_ERROR, {
                    load_id: T.loadId,
                    analytics_location: f,
                    payment_source_type: V.methodType,
                    error_code: z.code,
                    error_message: z.message,
                }));
    }, [z, T.loadId, f, V.methodType]);
    let Q = a.useCallback(
            (e) => {
                (q(e),
                    (0, o.P)(
                        (0, u.o)(void 0 !== P ? P : W.intl.string(W.t["VJPg+l"]), c.Ck.SUCCESS, {
                            position: c.xJ.BOTTOM,
                        }),
                    ),
                    p(H, e),
                    Z(U, !1));
            },
            [Z, U, H, p, P, q],
        ),
        { setPaymentSourceId: J, setBillingAddressState: X } = t,
        ee = a.useCallback(
            (e) => {
                (J(e.id), Q(e));
            },
            [J, Q],
        ),
        et = (0, s.bG)([O.A], () => O.A.redirectedPaymentSourceId),
        el = { completeSteps: ee, setIsSubmittingCurrentStep: t.setIsSubmittingCurrentStep },
        ei = a.useRef(el);
    (a.useEffect(() => {
        ei.current = el;
    }),
        a.useEffect(() => {
            let { completeSteps: e, setIsSubmittingCurrentStep: t } = ei.current;
            !(async function () {
                if (null == et) return;
                await (0, m.$o)();
                let n = M.A.getPaymentSource(et);
                null != n && (e(n), t(!1), O.A.clearRedirectedPaymentSourceId());
            })();
        }, [et]));
    let er = a.useCallback(() => {
            (K(G), Z(k.pn.PAYMENT_ELEMENT));
        }, [K, Z, G]),
        es = a.useCallback(
            (e) => {
                let { steps: t, methodType: n } = B[e];
                K({ steps: t, methodType: n === eR.he.UNKNOWN ? e : n });
            },
            [K, B],
        ),
        eo = a.useCallback(() => {
            K({ steps: [...l, ...eO, ...i], methodType: eR.he.CARD });
        }, [K, l, i]),
        eu = a.useMemo(
            () => ({
                handleStepChange: Z,
                continueSessionToInitialStep: v,
                currentStep: H,
                paymentMethodSteps: V,
                setBillingAddressState: X,
                redirectToCardInput: er,
                paymentElementOnNextCallback: es,
                setFallbackCardPaymentMethodSteps: eo,
                onComplete: p,
                onReturn: d,
                completeSteps: ee,
                analyticsLocation: f,
                analyticsData: S,
                overwriteSubscriptionPaymentSource: y,
            }),
            [Z, v, H, V, X, er, es, eo, f, p, d, ee, S, y],
        );
    if (!(H in tj))
        throw new N.v({ message: `Unexpected Add Payment sub-step: ${H}`, extraSentryInformation: { currentStep: H } });
    let { renderStepBody: ec, renderStepFooter: ed } = tj[H],
        ep = ec(t),
        em = ed(t);
    return A
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  I && (0, r.jsx)(w.A, { className: tE.At, isEligibleForTrial: I }),
                  (0, r.jsxs)(en, {
                      ...eu,
                      children: [
                          (0, r.jsxs)(D.dZ, {
                              children: [
                                  (0, r.jsx)(ea, { className: tE._8 }),
                                  (0, r.jsx)(tO, { billingAddressState: t.billingAddressState, children: ep }),
                              ],
                          }),
                          (0, r.jsx)(D.UX, { children: em }),
                      ],
                  }),
              ],
          })
        : (0, r.jsx)(en, {
              ...eu,
              children: (0, r.jsx)(tw, {
                  isLoading: null == _,
                  paymentError: t.paymentError,
                  header: C,
                  body: (0, r.jsx)(tO, { billingAddressState: t.billingAddressState, children: ep }),
                  footer: em,
              }),
          });
}
function tF(e) {
    let {
            defaultPaymentSourceId: t,
            paymentSources: n,
            hasFetchedPaymentSources: l,
        } = (0, s.cf)([M.A], () => ({
            defaultPaymentSourceId: void 0 !== e ? e : M.A.defaultPaymentSourceId,
            paymentSources: M.A.paymentSources,
            hasFetchedPaymentSources: M.A.hasFetchedPaymentSources,
        })),
        i = (0, s.bG)([H], () => H.cashAppPayComponent),
        r = (0, s.bG)([T.A], () => T.A.data?.allowed_payment_source_types ?? null);
    ((0, x.Ay)(() => {
        ((0, f.j)().then((e) => {
            e.client
                .create({ authorization: E.Gg3.BRAINTREE.KEY })
                .then((e) => {
                    (new Promise((e, t) => {
                        let n = Date.now();
                        function l() {
                            Date.now() - n >= 5e3
                                ? t(Error("Timeout waiting for Braintree client to be initialized in store"))
                                : null != h.A.getClient()
                                  ? e()
                                  : setTimeout(l, 1e3);
                        }
                        d.h.subscribe("BRAINTREE_CREATE_CLIENT_SUCCESS", function e() {
                            (d.h.unsubscribe("BRAINTREE_CREATE_CLIENT_SUCCESS", e), setTimeout(l, 0));
                        });
                    })
                        .then(() => {
                            (A(), y());
                        })
                        .catch((e) => {
                            C.pM(e);
                        }),
                        d.h.dispatch({ type: "BRAINTREE_CREATE_CLIENT_SUCCESS", client: e }));
                })
                .catch(() => d.h.dispatch({ type: "BRAINTREE_CREATE_CLIENT_FAIL" }));
        }),
            l || (0, m.$o)());
    }),
        a.useEffect(() => {
            null == i && null != r && r.includes(eR.he.CASH_APP) && V();
        }, [r, i]));
    let [o, u] = a.useState(t),
        c = (0, _.Ay)(t);
    t !== c && null != t && null == o && u(t);
    let [p, S] = a.useState(() => ({ info: tD, isValid: !1 })),
        [I, g] = a.useState(() => ({ info: tU, isValid: !1 })),
        [P, N] = a.useState(""),
        [j, L] = a.useState(""),
        [k, w] = a.useState(() => ({ token: null })),
        [D, U, G, F, B] = (0, s.yK)([O.A], () => [
            O.A.braintreeEmail,
            O.A.braintreeNonce,
            O.A.error,
            O.A.venmoUsername,
            O.A.adyenPaymentData,
        ]),
        { paymentAuthError: W, isAwaitingPaymentAuthentication: Y } = (0, b.t4)((e) => ({
            paymentAuthError: e.paymentAuthError,
            isAwaitingPaymentAuthentication: e.isAwaitingPaymentAuthentication,
        }));
    a.useEffect(() => {
        function e(e) {
            let { billingAddress: t } = e;
            g({ info: t, isValid: t.country.length > 0 });
        }
        return (
            d.h.subscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e),
            () => {
                (d.h.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e), (0, v.ET)());
            }
        );
    }, []);
    let [K, Z] = a.useState(!1),
        [q, z] = a.useState(!1),
        [$, Q] = a.useState(null),
        J = a.useRef(null),
        {
            isAuthenticating: X,
            purchaseTokenAuthState: ee,
            purchaseTokenHash: et,
        } = (0, b.t4)((e) => ({
            isAuthenticating: e.isAwaitingPaymentAuthentication,
            purchaseTokenAuthState: e.purchaseTokenAuthState,
            purchaseTokenHash: e.purchaseTokenHash,
        }));
    return (
        a.useEffect(() => {
            null != $ && null != J.current && J.current.scrollIntoView({ behavior: "smooth" });
        }, [$]),
        {
            paymentSources: n,
            paymentSourceId: o,
            hasFetchedPaymentSources: l,
            setPaymentSourceId: u,
            creditCardState: p,
            setCreditCardState: S,
            tokenState: k,
            setTokenState: w,
            billingAddressState: I,
            setBillingAddressState: g,
            isSubmittingCurrentStep: K,
            setIsSubmittingCurrentStep: Z,
            hasRedirectURL: q,
            setHasRedirectURL: z,
            braintreeEmail: D,
            braintreeNonce: U,
            venmoUsername: F,
            adyenPaymentData: B,
            paymentError: null != W ? W : G,
            paymentAuthenticationState: Y ? R.oc.PENDING : null != W ? R.oc.ERROR : R.oc.NONE,
            purchaseError: $,
            setPurchaseError: Q,
            purchaseErrorBlockRef: J,
            isAuthenticating: X,
            purchaseTokenAuthState: ee,
            purchaseTokenHash: et,
            epsBankState: j,
            setEpsBankState: L,
            p24BankState: P,
            setP24BankState: N,
        }
    );
}
