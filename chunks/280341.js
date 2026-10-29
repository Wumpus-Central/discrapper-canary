n.d(t, { Y: () => tU, p: () => tG });
var l,
    i,
    r = n(477900),
    a = n(582128),
    s = n(17928),
    o = n(858899),
    u = n(73153),
    c = n(636537),
    d = n(277984),
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
    ((0, C.isDesktop)() && (t = (0, d.jf)(f.hes.PAYPAL)),
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
function I() {
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
function A(e, t) {
    if (null == e) return Promise.resolve();
    u.h.dispatch(t);
    try {
        return Promise.resolve(e.teardown());
    } catch (e) {
        return Promise.resolve();
    }
}
var y = n(391048),
    x = n(964486),
    P = n(475743),
    v = n(721101),
    _ = n(822764),
    T = n(71804),
    N = n(123816),
    b = n(783327),
    j = n(251913),
    R = n(825755),
    O = n(295405),
    M = n(174459),
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
var H = n(105292);
async function W() {
    return await c.Bo.get({ url: f.Rsh.BILLING_ADYEN_PAYMENT_METHODS, oldFormErrors: !0, rejectWithError: !1 });
}
async function V() {
    try {
        let e = await W(),
            { default: t } = await Promise.all([n.e("494678"), n.e("540002")]).then(n.bind(n, 971193)),
            l = await t({
                environment: f.Gg3.ADYEN.KEY.startsWith("live_") ? "live" : "test",
                clientKey: f.Gg3.ADYEN.KEY,
                analytics: { enabled: !1 },
                paymentMethodsResponse: e.body,
            });
        (u.h.dispatch({ type: "ADYEN_CREATE_CLIENT_SUCCESS", client: l }),
            (function (e) {
                if (null != B.cashAppPayComponent) {
                    (K(), Y());
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
}
function Y() {
    let e = B.cashAppPayComponent;
    if (null == e) throw Error("Adyen CashAppPay component must be created before mounting.");
    try {
        e.mount(`#${D.h}`);
    } catch (e) {}
}
function K() {
    B.cashAppPayComponent?.unmount();
}
function q() {
    let e = B.cashAppPayComponent;
    if (null == e) throw Error("Adyen CashAppPay component must be created before submitting.");
    e.submit();
}
var Z = n(901930),
    z = n(19311),
    $ = n(626584),
    Q = n(427262),
    J = n(276858);
let X = new $.A("AddPaymentMethodStepContext.tsx"),
    ee = a.createContext(null);
function et(e) {
    let { children: t, ...n } = e,
        { handleStepChange: l, continueSessionToInitialStep: i, setBillingAddressState: s, currentStep: o } = n,
        u = a.useMemo(() => (0, Q.Gn)(), []),
        c = a.useCallback(
            (e, t) => {
                s((n) => ({ info: { ...n.info, ...e }, isValid: t }));
            },
            [s],
        ),
        d = (0, J.wD)({
            step: o,
            continueSessionToInitialStep: i,
            handleStepChange: l,
            logger: X,
            shouldLogOnChangeEvents: u || !1,
            onBillingAddressChange: c,
        }),
        { returnToPaymentElementStep: m, remountAddressElement: p } = d,
        h = a.useCallback(() => {
            (l(L.pn.ADDRESS), J.Ky.includes(o) && p());
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
    return (0, r.jsx)(ee.Provider, { value: f, children: t });
}
function en() {
    let e = a.useContext(ee);
    if (null == e)
        throw Error(
            "useAddPaymentMethodStepInternalContext must be used within an AddPaymentMethodStepInternalContextProvider",
        );
    return e;
}
function el(e) {
    return () => (null != R.A.error && (0, y.ET)(), e());
}
function ei(e) {
    let { onPrimary: t, onBack: n, ...l } = e,
        i = t;
    null != t && (i = el(t));
    let a = n;
    return (null != n && (a = el(n)), (0, r.jsx)(z.Ay, { ...l, onPrimary: i, onBack: a }));
}
function er(e) {
    let { className: t } = e,
        { hasSelectedPaymentElementSourceType: n } = en();
    return (0, r.jsx)(Z.A, { className: t, hasSelectedPaymentElementSourceType: n });
}
var ea = n(683071),
    es = n(503698),
    eo = n.n(es),
    eu = n(305866),
    ec = n(95477),
    ed = n(812745),
    em = n(287809),
    ep = n(832208),
    eh = n(643909),
    eC = n(661531),
    ef = n(602853),
    eE = n(281595),
    eS = n(513098),
    eg = n(151167);
let eI = function (e) {
    let t = a.useRef(null),
        { stripeType: n, flipped: l, updateCompleted: i, onFocus: s, onBlur: o } = e,
        [u, c] = a.useState(ed.Be.UNKNOWN),
        [d, m] = a.useState(!1),
        [p, h] = a.useState(!1),
        [C, f] = a.useState(null),
        [E, S] = a.useState({}),
        g = (0, eh.useElements)(),
        I = a.useCallback(() => {
            if (null != g)
                switch (n) {
                    case "cardNumber": {
                        let e = g.getElement(eh.CardNumberElement);
                        if (null == e) return;
                        (e.off("change"), e.off("focus"), e.off("blur"));
                        break;
                    }
                    case "cardExpiry": {
                        let e = g.getElement(eh.CardExpiryElement);
                        if (null == e) return;
                        (e.off("change"), e.off("focus"), e.off("blur"));
                        break;
                    }
                    case "cardCvc": {
                        let e = g.getElement(eh.CardCvcElement);
                        if (null == e) return;
                        (e.off("change"), e.off("focus"), e.off("blur"));
                    }
                }
        }, [g, n]),
        A = a.useCallback(
            (e) => {
                (p || e.empty || h(!0), null != i && i(e.complete), null != e.error && m(!1));
            },
            [p, i],
        ),
        y = a.useCallback(() => {
            (m(!0), s?.());
        }, [s]),
        x = a.useCallback(() => {
            (m(!1), o?.());
        }, [o]),
        P = a.useCallback(() => {
            if (null != g)
                switch (n) {
                    case "cardNumber": {
                        let e = g.getElement(eh.CardNumberElement);
                        if (null == e) return;
                        (e.on("change", (e) => {
                            (u !== e.brand && c(e.brand),
                                e.empty && p
                                    ? f(H.intl.string(H.t.eOIfuy))
                                    : null != e.error
                                      ? f(H.intl.string(H.t.x4pWtJ))
                                      : f(null),
                                A(e));
                        }),
                            e.on("focus", y),
                            e.on("blur", x));
                        break;
                    }
                    case "cardExpiry": {
                        let e = g.getElement(eh.CardExpiryElement);
                        if (null == e) return;
                        (e.on("change", (e) => {
                            (null != e.error || (e.empty && p) ? f(H.intl.string(H.t["9/zZdl"])) : f(null), A(e));
                        }),
                            e.on("focus", y),
                            e.on("blur", x));
                        break;
                    }
                    case "cardCvc": {
                        let e = g.getElement(eh.CardCvcElement);
                        if (null == e) return;
                        (e.on("change", (e) => {
                            (null != e.error || (e.empty && p) ? f(H.intl.string(H.t.ro4isZ)) : f(null), A(e));
                        }),
                            e.on("focus", y),
                            e.on("blur", x));
                    }
                }
        }, [x, A, y, u, g, p, n]);
    a.useEffect(
        () => (
            P(),
            () => {
                I();
            }
        ),
        [P, I],
    );
    let v = (0, ef.r)(eC.A.colors.TEXT_SUBTLE).hex(),
        _ = (0, ef.r)(eC.A.colors.TEXT_STRONG).hex();
    function T() {
        return eo()(eS.vB, { [eS.Tn]: null !== C, [eS.iH]: d, [eS.yD]: "cardNumber" === n });
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
                    "::placeholder": { color: v },
                },
            });
        }, [t, v, _]),
        (0, r.jsxs)("div", {
            className: eS.Zm,
            "data-stripe-type": n,
            children: [
                (0, r.jsx)("div", { ref: t, className: eo()(eS.iw, eg.hF) }),
                (function () {
                    switch (n) {
                        case "cardNumber":
                            return (0, r.jsxs)("div", {
                                children: [
                                    (0, r.jsx)(ed.Ay, { className: eS.Ie, type: u, flipped: l }),
                                    (0, r.jsx)(eh.CardNumberElement, {
                                        options: { style: E, placeholder: H.intl.string(H.t.gPRHfw), disableLink: !1 },
                                        className: T(),
                                    }),
                                ],
                            });
                        case "cardExpiry":
                            return (0, r.jsx)(eh.CardExpiryElement, {
                                options: { style: E, placeholder: H.intl.string(H.t.xeEWQ6) },
                                className: T(),
                            });
                        case "cardCvc":
                            return (0, r.jsx)(eh.CardCvcElement, {
                                options: { style: E, placeholder: H.intl.string(H.t.wZz04F) },
                                className: T(),
                            });
                    }
                })(),
                (0, r.jsx)(eE.U, { error: C }),
            ],
        })
    );
};
var eA = n(719941),
    ey = n(782328);
let ex = function (e) {
    let { onCardInfoChange: t, error: n } = e,
        l = a.useRef(t),
        [i, s] = a.useState(!1),
        [o, u] = a.useState({}),
        [c, d] = a.useState({ name: "", country: "", postalCode: "" }),
        [m, p] = a.useState({}),
        [h, C] = a.useState({}),
        { setFocusLockDisabled: f } = a.useContext(eu.M);
    a.useEffect(() => () => {
        void 0 !== f && f(!1);
    });
    let E = a.useCallback(() => {
        void 0 !== f && f(!0);
    }, [f]);
    function S(e, t) {
        !!o[e] !== t && u((n) => ({ ...n, [e]: t }));
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
                em.default.getCurrentUser()?.nsfwAllowed
                    ? (0, r.jsxs)("div", {
                          className: eA.Rm,
                          children: [
                              (0, r.jsx)("div", { className: eo()(ed.y3.SMALL, eA.eo, eA.Ud) }),
                              (0, r.jsx)("div", { className: eo()(ed.y3.SMALL, eA.DR, eA.Ud) }),
                              (0, r.jsx)("div", { className: eo()(ed.y3.SMALL, eA.k4, eA.Ud) }),
                              (0, r.jsx)("div", { className: eo()(ed.y3.SMALL, eA.a3, eA.Ud) }),
                              (0, r.jsx)("div", { className: eo()(ed.y3.SMALL, eA.CY, eA.Ud) }),
                              (0, r.jsx)("div", { className: eo()(ed.y3.SMALL, eA.Q5, eA.Ud) }),
                              (0, r.jsx)("div", { className: eo()(ed.y3.SMALL, eA.YA, eA.Ud) }),
                          ],
                      })
                    : (0, r.jsxs)("div", {
                          className: eA.Rm,
                          children: [
                              (0, r.jsx)("div", { className: eo()(ed.y3.SMALL, eA.aq, eA.Ud) }),
                              (0, r.jsx)("div", { className: eo()(ed.y3.SMALL, eA.VX, eA.Ud) }),
                              (0, r.jsx)("div", { className: eo()(ed.y3.SMALL, eA.Yi, eA.Ud) }),
                              (0, r.jsx)("div", { className: eo()(ed.y3.SMALL, eA.qR, eA.Ud) }),
                              (0, r.jsx)("div", { className: eo()(ed.y3.SMALL, eA.m2, eA.Ud) }),
                              (0, r.jsx)("div", { className: eo()(ed.y3.SMALL, eA.Ij, eA.Ud) }),
                              (0, r.jsx)("div", { className: eo()(ed.y3.SMALL, eA._V, eA.Ud) }),
                          ],
                      }),
                (0, r.jsx)(ep.A, {
                    form: [
                        {
                            fields: [
                                {
                                    id: "card-number",
                                    name: "cardNumber",
                                    title: () => H.intl.string(H.t.cVyJ3o),
                                    getClassNameForLayout: () => ey.c6,
                                    renderInput: () =>
                                        (0, r.jsx)(eI, {
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
                                        (0, r.jsx)(eI, {
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
                                        (0, r.jsx)(eI, {
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
                                    renderInput: (e) => (0, r.jsx)(ec.k, { ...e }),
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
var eP = n(198970),
    ev = n(116673),
    e_ = n(773669),
    eT =
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
    eN = n(292234);
let eb = (e) => {
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
                })(l) === eT.ADDRESS),
        c = (0, s.bG)([e_.default], () => e_.default.locale);
    switch (o) {
        case f.hes.GIROPAY:
        case f.hes.PAYSAFE_CARD:
        case f.hes.GCASH:
        case f.hes.GRABPAY_MY:
        case f.hes.MOMO_WALLET:
        case f.hes.KAKAOPAY:
        case f.hes.GOPAY_WALLET:
        case f.hes.BANCONTACT:
            t = "en-US" === c ? eP.Ay.Layouts.MODAL_US_WITH_NAME : eP.Ay.Layouts.MODAL_INTL_WITH_NAME;
            break;
        case f.hes.VENMO:
        case f.hes.CASH_APP:
            t = eP.Ay.Layouts.MODAL_US_WITH_NAME;
            break;
        default:
            t = "en-US" === c ? eP.Ay.Layouts.MODAL_US : eP.Ay.Layouts.MODAL_INTL;
    }
    let d = (0, ev.z)();
    0 === n.country.length && null != d && d.length > 0 && (n.country = d[0]);
    let m = (0, s.bG)([em.default], () => em.default.getCurrentUser()?.storeCountry?.isLocked === !0)
        ? H.intl.string(H.t.Pg2hU0)
        : null;
    return (0, r.jsxs)(a.Fragment, {
        children: [
            u
                ? (0, r.jsx)("div", {
                      className: eN.QK,
                      children: (0, r.jsx)(ea.w, {
                          type: "critical",
                          message: H.intl.string(H.t.vZ8y7l),
                          role: "alert",
                      }),
                  })
                : null,
            (0, r.jsx)(eP.Ay, {
                className: eN.__invalid_formItem,
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
var ej = n(818348);
let eR = [L.pn.CREDIT_CARD_INFORMATION, L.pn.ADDRESS];
function eO(e) {
    let { billingError: t, onCardInfoChange: n } = e,
        l = null != t && (null == t.code || (0, L.ou)(t) === L.pn.CREDIT_CARD_INFORMATION);
    return (0, r.jsxs)(a.Fragment, {
        children: [
            l
                ? (0, r.jsx)("div", {
                      className: eN.QK,
                      children: (0, r.jsx)(ea.w, {
                          type: "critical",
                          message: H.intl.string(H.t["4vnhKV"]),
                          role: "alert",
                      }),
                  })
                : null,
            (0, r.jsx)(ex, { onCardInfoChange: n, error: t }),
        ],
    });
}
function eM(e) {
    let { billingAddressInfo: t, onBillingAddressChange: n, paymentSourceType: l } = e,
        i = (0, s.bG)([R.A], () => R.A.error);
    return (0, r.jsx)(eb, { billingAddressInfo: t, billingError: i, onBillingAddressChange: n, paymentSourceType: l });
}
function eL(e) {
    let { addPaymentMethodStepState: t } = e,
        { billingAddressState: n, setBillingAddressState: l } = t,
        { hasSelectedPaymentElementSourceType: i, paymentMethodSteps: a } = en(),
        s = a.methodType ?? ej.he.CARD;
    return i
        ? null
        : (0, r.jsx)(eM, {
              billingAddressInfo: n.info,
              onBillingAddressChange: (e, t) => {
                  l({ info: { ...n.info, ...e }, isValid: t });
              },
              paymentSourceType: s,
          });
}
let ek = {
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
var ew = n(685094);
class eD extends a.PureComponent {
    componentDidMount() {
        null != this.props.paypalClient && g();
    }
    componentDidUpdate(e) {
        null == e.paypalClient && null != this.props.paypalClient && g();
    }
    componentWillUnmount() {
        A(m.A.getPayPalClient(), { type: "BRAINTREE_TEARDOWN_PAYPAL_CLIENT" }).then(() => {
            null != m.A.getClient() && S();
        });
    }
    render() {
        let { braintreeEmail: e, paypalClient: t } = this.props;
        return (0, r.jsx)(ec.k, {
            label: H.intl.string(H.t.QQBAos),
            leading: { type: "image", src: (0, ed.Nj)(ed.Ay.Types.PAYPAL) },
            value: e,
            readOnly: !0,
            placeholder: null == t ? H.intl.string(H.t.dte2M9) : H.intl.string(H.t.hopw7X),
        });
    }
}
let eU = s.Ay.connectStores([m.A, R.A], () => ({
    braintreeEmail: R.A.braintreeEmail,
    paypalClient: m.A.getPayPalClient(),
}))(eD);
var eG = n(297264),
    eF = n(834730),
    eB = n(351665);
class eH extends a.PureComponent {
    componentDidMount() {
        null != this.props.venmoClient && I();
    }
    componentDidUpdate(e) {
        null == e.venmoClient && null != this.props.venmoClient && I();
    }
    componentWillUnmount() {
        A(m.A.getVenmoClient(), { type: "BRAINTREE_TEARDOWN_VENMO_CLIENT" }).then(() => {
            null != m.A.getClient() && E();
        });
    }
    render() {
        let { venmoUsername: e, className: t, venmoClient: n } = this.props,
            l = null != e && "" !== e;
        return (0, r.jsxs)("div", {
            className: t,
            children: [
                (0, r.jsx)(ed.Ay, { type: ed.Ay.Types.VENMO, size: ed.y3.MEDIUM, className: eB.Z }),
                l
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(eG.D, {
                                  variant: e.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
                                  className: eB.y,
                                  children: H.intl.format(H.t.DowIre, { venmoUsername: e }),
                              }),
                              (0, r.jsx)(eF.E, {
                                  variant: "text-md/medium",
                                  className: eB.y,
                                  children: H.intl.string(H.t.kmEvnR),
                              }),
                          ],
                      })
                    : (0, r.jsx)(eF.E, {
                          variant: "text-md/medium",
                          className: eB.y,
                          children: null == n ? H.intl.string(H.t["2ouZDU"]) : H.intl.string(H.t.mIL6Jb),
                      }),
            ],
        });
    }
}
let eW = s.Ay.connectStores([m.A, R.A], () => ({
    venmoUsername: R.A.venmoUsername,
    venmoClient: m.A.getVenmoClient(),
}))(eH);
var eV = n(891197),
    eY = n(462887),
    eK = n(331322),
    eq = n(736653),
    eZ = n(438983);
let ez = function (e) {
    let t = (0, eq.Ay)(),
        n = a.useRef(null),
        [l, i] = a.useState({}),
        s = (0, ef.r)(eC.A.colors.BACKGROUND_BASE_LOWER).hex();
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
                    borderRadius: eC.A.radii.xs,
                },
            });
        }, [n, s]),
        e.type)
    ) {
        case ej.he.PRZELEWY24: {
            let i = (0, eY.M)(t) ? "/assets/f4150b3aed6c4679.svg" : "/assets/8b825aafb2e4dbed.svg",
                { onNameChange: a, onEmailChange: s, onP24BankChange: o, p24BankValue: u, billingAddressInfo: c } = e;
            return (0, r.jsx)("div", {
                className: eZ.rf,
                children: (0, r.jsxs)(eK.B, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(ec.k, {
                            label: H.intl.string(H.t["w/qqKK"]),
                            inputRef: n,
                            name: H.intl.string(H.t["w/qqKK"]),
                            placeholder: H.intl.string(H.t["w/qqKK"]),
                            onChange: (e) => s(e),
                            value: c.email,
                        }),
                        (0, r.jsx)(ec.k, {
                            label: H.intl.string(H.t["yf7ms+"]),
                            name: H.intl.string(H.t["yf7ms+"]),
                            placeholder: H.intl.string(H.t["yf7ms+"]),
                            onChange: (e) => a(e),
                            value: c.name,
                        }),
                        (0, r.jsxs)(eK.B, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(eF.E, { variant: "text-sm/semibold", children: H.intl.string(H.t.De3b8t) }),
                                (0, r.jsx)(eh.P24BankElement, {
                                    options: { value: u, style: l },
                                    onChange: (e) => o(e.value),
                                }),
                                (0, r.jsx)("div", {
                                    className: eZ.je,
                                    children: (0, r.jsx)("img", { src: i, alt: "Przelewy24" }),
                                }),
                            ],
                        }),
                    ],
                }),
            });
        }
        case ej.he.EPS: {
            let { onAccountHolderNameChange: i, onEPSBankChange: a, epsBankValue: s, billingAddressInfo: o } = e,
                u = (0, eY.M)(t) ? "/assets/025b24b0055c8d81.svg" : "/assets/1dae7d71a65fd90f.svg";
            return (0, r.jsx)("div", {
                className: eZ.rf,
                children: (0, r.jsxs)(eK.B, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(ec.k, {
                            label: H.intl.string(H.t.sN3wrd),
                            inputRef: n,
                            name: H.intl.string(H.t.sN3wrd),
                            placeholder: H.intl.string(H.t.sN3wrd),
                            onChange: (e) => i(e),
                            value: o.name,
                        }),
                        (0, r.jsxs)(eK.B, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(eF.E, { variant: "text-sm/semibold", children: H.intl.string(H.t.dFyV07) }),
                                (0, r.jsx)(eh.EpsBankElement, {
                                    options: { value: s, style: l },
                                    onChange: (e) => a(e.value),
                                }),
                                (0, r.jsx)("div", {
                                    className: eZ.je,
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
var e$ = n(31823),
    eQ = n(883645),
    eJ = n(25149),
    eX = n(364840),
    e0 = n(73825),
    e2 = n(558620),
    e1 = n(36167),
    e3 = n(951305),
    e4 = n(820287),
    e7 = (((i = {})[(i.UNKNOWN = 0)] = "UNKNOWN"), (i[(i.PENDING = 1)] = "PENDING"), (i[(i.DONE = 2)] = "DONE"), i);
let e5 = 0,
    e6 = null,
    e8 = null,
    e9 = null;
class te extends s.Ay.Store {
    static displayName = "BrowserCheckoutStateStore";
    get browserCheckoutState() {
        return e5;
    }
    get loadId() {
        return e6;
    }
    get skuId() {
        return e8;
    }
    get planId() {
        return e9;
    }
}
let tt = new te(u.h, {
    USER_PAYMENT_BROWSER_CHECKOUT_STARTED: function (e) {
        ((e5 = 1), (e6 = e.loadId));
    },
    USER_PAYMENT_BROWSER_CHECKOUT_DONE: function (e) {
        e6 === e.loadId && ((e8 = e.skuId ?? null), (e9 = e.skuSubscriptionPlanId ?? null), (e5 = 2));
    },
});
var tn = n(202541),
    tl = n(731075);
function ti(e) {
    let t,
        { step: n, onPurchaseComplete: l, onHandoffFailure: i } = e,
        {
            setSelectedSkuId: o,
            setSelectedPlanId: u,
            contextMetadata: c,
        } = (0, N.t4)((e) => ({
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            contextMetadata: e.contextMetadata,
        })),
        {
            browserCheckoutState: m,
            browserCheckoutStateLoadId: p,
            browserCheckoutStateSkuId: h,
            browserCheckoutStatePlanId: C,
        } = (0, s.cf)([tt], () => ({
            browserCheckoutState: tt.browserCheckoutState,
            browserCheckoutStateLoadId: tt.loadId,
            browserCheckoutStateSkuId: tt.skuId,
            browserCheckoutStatePlanId: tt.planId,
        })),
        E = (0, e2.A)(),
        { isGift: S } = (0, e3.Pv)(),
        [g, I] = a.useState(!1);
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
                    (I(!0),
                    (0, d.Ze)(c.loadId),
                    (0, e1.my)(
                        {
                            planId: E?.id ?? tn.gD.PREMIUM_MONTH_TIER_2,
                            isGift: S,
                            loadId: c.loadId,
                            paymentMethodType: t,
                        },
                        i,
                    ));
            }, 1e3);
            return () => clearTimeout(e);
        }, [E, S, c, i, I, g, t]),
        a.useEffect(() => {
            (null !== h && (tn.oz.includes(h) && ((0, e0.ur)(h), (0, d.hP)()), o(h)),
                null !== C && u(C),
                p === c.loadId && m === e7.DONE && l());
        }, [o, u, m, p, h, C, c, l]),
        (0, r.jsxs)("div", {
            className: tl.rf,
            children: [
                (0, r.jsx)(eG.D, { variant: "heading-xl/bold", children: H.intl.string(H.t.C4HYfy) }),
                (0, r.jsx)(eF.E, { variant: "text-md/normal", className: tl.h_, children: H.intl.string(H.t.xfG7Jp) }),
            ],
        })
    );
}
function tr(e) {
    let { onPrimaryClick: t, onBackClick: n } = e;
    return (0, r.jsx)(eX.j, {
        children: (0, r.jsxs)("div", {
            className: tl.kL,
            children: [
                null != n ? (0, r.jsx)(e4.A, { onClick: n }) : null,
                (0, r.jsx)(e4.F, { onClick: t, children: H.intl.string(H.t["4Qvmmj"]) }),
            ],
        }),
    });
}
var ta = n(311622);
function ts(e) {
    let { className: t } = e,
        n = (0, s.bG)([B], () => B.cashAppPayComponent),
        l = (0, s.bG)([R.A], () => R.A.adyenPaymentData);
    a.useEffect(
        () => (
            null == l && null != n && (Y(), q()),
            () => {
                K();
            }
        ),
        [l, n],
    );
    let i = l?.paymentMethod?.cashtag ?? "",
        o = null != l && "" !== i;
    return (0, r.jsxs)("div", {
        className: t,
        children: [
            (0, r.jsx)(ed.Ay, { type: ed.Ay.Types.CASH_APP, size: ed.y3.MEDIUM, className: ta.K }),
            o
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(eG.D, {
                              variant: i.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
                              className: ta.y,
                              children: H.intl.format(H.t["ze/1yE"], { cashtag: i }),
                          }),
                          (0, r.jsx)(eF.E, {
                              variant: "text-md/medium",
                              className: ta.y,
                              children: H.intl.string(H.t.VPOx7N),
                          }),
                      ],
                  })
                : (0, r.jsx)(eF.E, {
                      variant: "text-md/medium",
                      className: ta.y,
                      children: null == n ? H.intl.string(H.t["CgVe/w"]) : H.intl.string(H.t["1MqcjI"]),
                  }),
        ],
    });
}
var to = n(913122),
    tu = n(908166),
    tc = n(930767),
    td = n(676230);
let tm = new $.A("AddPaymentMethod");
function tp(e) {
    let { addPaymentMethodStepState: t } = e,
        {
            handleStepChange: n,
            completeSteps: l,
            paymentMethodSteps: i,
            stripePaymentElementState: a,
            hasSelectedPaymentElementSourceType: s,
            analyticsLocation: o,
            overwriteSubscriptionPaymentSource: u,
        } = en(),
        {
            paymentElementSelectedType: c,
            returnToPaymentElementStep: d,
            stripeElementsRef: m,
            lastConfirmedSetupIntentRef: h,
        } = a,
        C = (0, b.S)(),
        { createSetupIntent: f } = (0, tu.x)(),
        { contextMetadata: E } = (0, N.t4)((e) => ({ contextMetadata: e.contextMetadata })),
        {
            isSubmittingCurrentStep: S,
            billingAddressState: g,
            setIsSubmittingCurrentStep: I,
            hasRedirectURL: A,
            setHasRedirectURL: y,
            isAuthenticating: x,
        } = t;
    async function P() {
        I(!0);
        let e = s ? c : i.methodType,
            n = m.current,
            r = null != e && (0, td.i)(e) ? td.F[e] : null;
        if (null == r)
            throw new tc.v({
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
            ("redirect-url" === e.responseType ? y(e.hasRedirectURL) : l(e.paymentSource), A || I(!1));
        } catch (e) {
            if (
                e instanceof to.Ey &&
                e.code !== to.Ey.ErrorCodes.INVALID_PAYMENT_SOURCE &&
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
            (I(!1), tm.warn(`Error confirming submitting Address Step for Payment Source Type: ${v}`, e));
        }
    }
    let v = i.methodType,
        { backStep: _ } = s
            ? { backStep: L.pn.PAYMENT_ELEMENT }
            : (function (e) {
                  switch (e) {
                      case ej.he.CARD:
                          return { backStep: L.pn.CREDIT_CARD_INFORMATION };
                      case ej.he.PAYPAL:
                          return { backStep: L.pn.PAYPAL_INFORMATION };
                      case ej.he.VENMO:
                          return { backStep: L.pn.VENMO_INFORMATION };
                      case ej.he.EPS:
                          return { backStep: L.pn.EPS_INFORMATION };
                      case ej.he.PRZELEWY24:
                          return { backStep: L.pn.PRZELEWY24_INFORMATION };
                      case ej.he.CASH_APP:
                          return { backStep: L.pn.CASH_APP_INFORMATION };
                      default:
                          return { backStep: L.pn.PAYMENT_ELEMENT };
                  }
              })(v),
        T = s ? () => d(void 0) : () => n(_);
    return (0, r.jsx)(ei, {
        onBack: T,
        primaryCTA: z.Ay.CTAType.CONTINUE,
        primaryText: H.intl.string(H.t.PDTjLN),
        primarySubmitting: S,
        primaryDisabled: !g.isValid || x,
        onPrimary: P,
    });
}
var th = n(648335);
let tC = new $.A("PaymentElementStepFooter.tsx");
function tf(e) {
    let { addPaymentMethodStepState: t } = e,
        { setIsSubmittingCurrentStep: n, setBillingAddressState: l, isSubmittingCurrentStep: i } = t,
        s = (0, b.S)(),
        { paymentElementOnNextCallback: o, handleStepChange: u, stripePaymentElementState: c, onReturn: m } = en(),
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
                if (null == p || !(0, th.eX)(p)) throw (0, d.ne)("Valid Payment Element source type not found", !0);
                o(p);
                let e = td.F[p];
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
                let t = (0, th.eI)(p);
                if (null != t) return void u(t);
                u(L.pn.ADDRESS);
            } catch (e) {
                tC.error("Error on submitting Payment Element step: ", e.message ?? JSON.stringify(e));
            } finally {
                n(!1);
            }
        }, [o, p, h, C, u, s, n, l]),
        g = a.useCallback(() => {
            (f(), null != m && m());
        }, [f, m]);
    return (0, r.jsx)(ei, {
        onBack: null != m ? g : void 0,
        primaryCTA: z.Ay.CTAType.CONTINUE,
        primaryType: "submit",
        primaryText: H.intl.string(H.t.PDTjLN),
        primarySubmitting: i,
        primaryDisabled: !E,
        onPrimary: S,
    });
}
var tE = n(814935),
    tS = n(24404);
let tg = new $.A("AddPaymentMethodSubstepRegistry.tsx");
function tI(e) {
    let { setCreditCardState: t, setBillingAddressState: n } = e,
        l = a.useCallback(
            (e, l) => {
                (t({ info: e, isValid: l }), n((t) => ({ ...t, info: { ...t.info, name: e.name } })));
            },
            [t, n],
        ),
        i = (0, s.bG)([R.A], () => R.A.error);
    return (0, r.jsx)(eO, { billingError: i, onCardInfoChange: l });
}
function tA(e) {
    let { setIsSubmittingCurrentStep: t, setTokenState: n, isSubmittingCurrentStep: l, creditCardState: i } = e,
        { handleStepChange: a, onReturn: s } = en(),
        o = (0, b.S)();
    async function u(e) {
        t(!0);
        try {
            let t = await (0, d.YJ)(o, e);
            (n({ token: t }), a(L.pn.ADDRESS));
        } catch (e) {
            tg.error(e.message ?? JSON.stringify(e));
        } finally {
            t(!1);
        }
    }
    let c = !i.isValid;
    return (0, r.jsx)(eh.ElementsConsumer, {
        children: (e) => {
            let { elements: t } = e;
            return (0, r.jsx)(ei, {
                primaryCTA: z.Ay.CTAType.CONTINUE,
                primaryType: "submit",
                primaryText: H.intl.string(H.t.PDTjLN),
                primarySubmitting: l,
                primaryDisabled: c,
                onPrimary: () => u(t),
                onBack: null != s ? () => s() : void 0,
            });
        },
    });
}
function ty() {
    let { currentStep: e, redirectToCardInput: t, onComplete: n } = en();
    return (0, r.jsx)(ti, { step: e, onPurchaseComplete: () => n(e), onHandoffFailure: t });
}
function tx() {
    let { redirectToCardInput: e, onReturn: t, stripePaymentElementState: n } = en(),
        { onBackFromPaymentElement: l } = n;
    return (0, r.jsx)(tr, {
        onPrimaryClick: e,
        onBackClick:
            null != t
                ? function () {
                      (l(), null != t && t());
                  }
                : void 0,
    });
}
function tP(e) {
    let { adyenPaymentData: t } = e,
        { defaultOnBackHandler: n, onSubmitCustomPaymentMethodSubStep: l } = en(),
        i = (0, s.bG)([B], () => B.cashAppPayComponent),
        a = null != t;
    return (0, r.jsx)(ei, {
        onBack: () => n(ej.he.CASH_APP),
        primaryCTA: z.Ay.CTAType.CONTINUE,
        primaryText: a ? H.intl.string(H.t.PDTjLN) : H.intl.string(H.t["9ALP8w"]),
        onPrimary: () => (a ? l() : q()),
        primaryDisabled: null == i,
    });
}
function tv(e) {
    let { defaultOnBackHandler: t, onSubmitCustomPaymentMethodSubStep: n } = en(),
        { billingAddressState: l, epsBankState: i } = e;
    return (0, r.jsx)(ei, {
        onBack: () => t(ej.he.EPS),
        primaryCTA: z.Ay.CTAType.CONTINUE,
        primaryText: H.intl.string(H.t.PDTjLN),
        primaryDisabled: void 0 === i || "" === i || "" === l.info.name,
        onPrimary: () => n(),
    });
}
function t_(e) {
    let { defaultOnBackHandler: t, onSubmitCustomPaymentMethodSubStep: n } = en(),
        { billingAddressState: l, p24BankState: i } = e;
    return (0, r.jsx)(ei, {
        onBack: () => t(ej.he.PRZELEWY24),
        primaryCTA: z.Ay.CTAType.CONTINUE,
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
function tT(e) {
    let { defaultOnBackHandler: t, onSubmitCustomPaymentMethodSubStep: n } = en(),
        { braintreeEmail: l, braintreeNonce: i } = e,
        a = 0 !== l.length && null != i;
    return (0, r.jsx)(ei, {
        onBack: () => t(ej.he.PAYPAL),
        primaryCTA: z.Ay.CTAType.CONTINUE,
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
function tN(e) {
    let { venmoUsername: t, braintreeNonce: n } = e,
        l = 0 !== t.length && null != n,
        { defaultOnBackHandler: i, onSubmitCustomPaymentMethodSubStep: a } = en();
    return (0, r.jsx)(ei, {
        onBack: () => i(ej.he.VENMO),
        primaryCTA: z.Ay.CTAType.CONTINUE,
        primaryText: l ? H.intl.string(H.t.PDTjLN) : H.intl.string(H.t["4KoTLM"]),
        onPrimary: () => (l ? a() : void I()),
    });
}
let tb = {
    [L.pn.CREDIT_CARD_INFORMATION]: {
        renderStepBody: (e) => (0, r.jsx)(tI, { ...e }),
        renderStepFooter: (e) => (0, r.jsx)(tA, { ...e }),
    },
    [L.pn.AWAITING_BROWSER_CHECKOUT]: {
        renderStepBody: () => (0, r.jsx)(ty, {}),
        renderStepFooter: () => (0, r.jsx)(tx, {}),
    },
    [L.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY]: {
        renderStepBody: () => (0, r.jsx)(ty, {}),
        renderStepFooter: () => (0, r.jsx)(tx, {}),
    },
    [L.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY]: {
        renderStepBody: () => (0, r.jsx)(ty, {}),
        renderStepFooter: () => (0, r.jsx)(tx, {}),
    },
    [L.pn.PAYMENT_ELEMENT]: {
        renderStepBody: () => null,
        renderStepFooter: (e) => (0, r.jsx)(tf, { addPaymentMethodStepState: e }),
    },
    [L.pn.EPS_INFORMATION]: {
        renderStepBody: (e) => {
            let { setBillingAddressState: t, billingAddressState: n, setEpsBankState: l, epsBankState: i } = e;
            return (0, r.jsx)(ez, {
                type: ej.he.EPS,
                onAccountHolderNameChange: (e) => t({ info: { ...n.info, name: e }, isValid: n.isValid }),
                onEPSBankChange: (e) => l(e),
                epsBankValue: i,
                billingAddressInfo: n.info,
            });
        },
        renderStepFooter: (e) => (0, r.jsx)(tv, { ...e }),
    },
    [L.pn.PRZELEWY24_INFORMATION]: {
        renderStepBody: (e) => {
            let { setBillingAddressState: t, billingAddressState: n, setP24BankState: l, p24BankState: i } = e;
            return (0, r.jsx)(ez, {
                type: ej.he.PRZELEWY24,
                onNameChange: (e) => t({ info: { ...n.info, name: e }, isValid: n.isValid }),
                onEmailChange: (e) => t({ info: { ...n.info, email: e }, isValid: n.isValid }),
                onP24BankChange: (e) => {
                    l(e);
                },
                p24BankValue: i,
                billingAddressInfo: n.info,
            });
        },
        renderStepFooter: (e) => (0, r.jsx)(t_, { ...e }),
    },
    [L.pn.PAYPAL_INFORMATION]: {
        renderStepBody: () => (0, r.jsx)(eU, {}),
        renderStepFooter: (e) => (0, r.jsx)(tT, { ...e }),
    },
    [L.pn.VENMO_INFORMATION]: {
        renderStepBody: () => (0, r.jsx)(eW, {}),
        renderStepFooter: (e) => (0, r.jsx)(tN, { ...e }),
    },
    [L.pn.CASH_APP_INFORMATION]: {
        renderStepBody: () => (0, r.jsx)(ts, {}),
        renderStepFooter: (e) => {
            let { adyenPaymentData: t } = e;
            return (0, r.jsx)(tP, { adyenPaymentData: t });
        },
    },
    [L.pn.AWAITING_AUTHENTICATION]: { renderStepBody: () => (0, r.jsx)(eV.N, {}), renderStepFooter: () => null },
    [L.pn.ADDRESS]: {
        renderStepBody: (e) => (0, r.jsx)(eL, { addPaymentMethodStepState: e }),
        renderStepFooter: (e) => (0, r.jsx)(tp, { addPaymentMethodStepState: e }),
    },
};
function tj(e) {
    let { billingAddressState: t } = e,
        {
            analyticsData: n,
            handleStepChange: l,
            stripePaymentElementState: i,
            setFallbackCardPaymentMethodSteps: a,
            currentStep: s,
        } = en(),
        o = (0, eQ.qv)(),
        { contextMetadata: u, refetchInvoicePreviews: c } = (0, N.t4)((e) => ({
            contextMetadata: e.contextMetadata,
            refetchInvoicePreviews: e.refetchInvoicePreviews,
        })),
        { activitySessionId: d } = (0, e$.V)(),
        {
            onBackFromPaymentElement: m,
            paymentElementLoaded: p,
            paymentElementSelectedType: h,
            stripeElementsRef: C,
            stripePaymentElementProps: f,
            stripeAddressElementProps: E,
            addressElementKey: S,
        } = i;
    return (0, r.jsx)(J._i, {
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
            ? (0, r.jsx)(eJ.Z4, {
                  className: tE.SO,
                  stackingBehavior: "stack",
                  onComplete: () => {
                      (c(), setTimeout(() => o(L.pn.REVIEW), 0));
                  },
              })
            : null,
    });
}
function tR(e) {
    let { billingAddressState: t, children: n } = e,
        { stripePaymentElementState: l, currentStep: i, paymentMethodSteps: a } = en(),
        { shouldRenderPaymentElement: s } = l;
    return (0, r.jsxs)(ew.Y, {
        className: tS.C9,
        staticClassName: tS.a2,
        animatedNodeClassName: tS.L2,
        fillParent: !0,
        overrideKey: s ? "combined_stripe_elements" : void 0,
        step: i,
        steps: a.steps,
        sideMargin: 20,
        children: [s && (0, r.jsx)(tj, { billingAddressState: t }), n],
    });
}
var tO = n(430993),
    tM = n(289873),
    tL = n(136857);
function tk(e) {
    let { body: t, paymentError: n, header: l, footer: i, isLoading: a } = e,
        { hasSelectedPaymentElementSourceType: s } = en(),
        o = "";
    return (
        null != n &&
            (0, L.h5)(n, s) &&
            ((o = n.message),
            n.code === tL.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED
                ? (o = H.intl.string(H.t.ypuSd8))
                : n.code === f.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (o = H.intl.string(H.t.mXMmWE))),
        (0, r.jsxs)(r.Fragment, {
            children: [
                l,
                (0, r.jsx)(tO.c, {
                    children: (0, r.jsxs)("div", {
                        className: tS.uK,
                        children: [
                            "" === o
                                ? null
                                : (0, r.jsx)("div", {
                                      className: tS.Nk,
                                      children: (0, r.jsx)(ea.w, { type: "critical", message: o, role: "alert" }),
                                  }),
                            a ? (0, r.jsx)(tM.y, { className: tS.CI }) : t,
                        ],
                    }),
                }),
                i,
            ],
        })
    );
}
let tw = { name: "", cardNumber: "", expirationDate: "", cvc: "" },
    tD = { email: "", name: "", country: "", line1: "", line2: "", city: "", postalCode: "", state: "" };
function tU(e) {
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
            allowDesktopRedirectPurchase: I = !1,
            toastContent: A,
            continueSessionToInitialStep: y,
        } = e,
        P = (0, b.S)(),
        { contextMetadata: v, clearFetchSetupIntent: j } = (0, N.t4)((e) => ({
            contextMetadata: e.contextMetadata,
            clearFetchSetupIntent: e.clearFetchSetupIntent,
        }));
    (0, x.l0)(j);
    let D = a.useMemo(
            () => (n === L.pn.PAYMENT_ELEMENT ? (I ? L.pn.AWAITING_BROWSER_CHECKOUT : L.pn.PAYMENT_ELEMENT) : n),
            [n, I],
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
                                let { sharedStepsKey: t, methodType: i } = e;
                                return { steps: [...n, ...ek[t], ...l], methodType: i };
                            });
                        })(
                            [
                                { sharedStepsKey: "SHARED_TYPE_AND_ADDRESS_STEPS", methodType: ej.he.UNKNOWN },
                                { sharedStepsKey: "SHARED_ADD_PAYMENT_STEPS", methodType: ej.he.PAYMENT_REQUEST },
                                { sharedStepsKey: "SHARED_CREDIT_CARD_STEPS", methodType: ej.he.CARD },
                                { sharedStepsKey: "SHARED_PAYPAL_STEPS", methodType: ej.he.PAYPAL },
                                { sharedStepsKey: "SHARED_IDEAL_STEPS", methodType: ej.he.IDEAL },
                                { sharedStepsKey: "SHARED_VENMO_STEPS", methodType: ej.he.VENMO },
                                { sharedStepsKey: "SHARED_PRZELEWY24_STEPS", methodType: ej.he.PRZELEWY24 },
                                { sharedStepsKey: "SHARED_EPS_STEPS", methodType: ej.he.EPS },
                                { sharedStepsKey: "SHARED_CASH_APP_STEPS", methodType: ej.he.CASH_APP },
                            ],
                            { prependSteps: t, appendSteps: n },
                        ),
                    [t, n],
                ),
                p = (0, a.useMemo)(
                    () => ({
                        [ej.he.CARD]: r,
                        [ej.he.PAYPAL]: s,
                        [ej.he.PAYMENT_REQUEST]: i,
                        [ej.he.VENMO]: u,
                        [ej.he.CASH_APP]: m,
                        [ej.he.IDEAL]: o,
                        [ej.he.PRZELEWY24]: c,
                        [ej.he.EPS]: d,
                        [ej.he.BANCONTACT]: l,
                        [ej.he.GOPAY_WALLET]: l,
                        [ej.he.KAKAOPAY]: l,
                        [ej.he.GCASH]: l,
                        [ej.he.PAYSAFE_CARD]: l,
                        [ej.he.GRABPAY_MY]: l,
                        [ej.he.MOMO_WALLET]: l,
                        [ej.he.PIX]: l,
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
                (0, _.lO)({ loadId: v.loadId, paymentSource: e }, h);
            },
            [v.loadId, h],
        ),
        Z = (0, s.bG)([R.A], () => R.A.error),
        z = a.useRef(Z);
    a.useEffect(() => {
        let e = z.current;
        ((z.current = Z),
            null != Z &&
                Z !== e &&
                M.default.track(f.HAw.PAYMENT_FLOW_ADD_SOURCE_ERROR, {
                    load_id: v.loadId,
                    analytics_location: h,
                    payment_source_type: V.methodType,
                    error_code: Z.code,
                    error_message: Z.message,
                }));
    }, [Z, v.loadId, h, V.methodType]);
    let $ = a.useCallback(
            (e) => {
                (q(e),
                    (0, o.P0)({
                        text: void 0 !== A ? A : H.intl.string(H.t["VJPg+l"]),
                        variant: "success",
                        position: "bottom",
                    }),
                    c(B, e),
                    K(D, !1));
            },
            [K, D, B, c, A, q],
        ),
        { setPaymentSourceId: Q, setBillingAddressState: J } = t,
        X = a.useCallback(
            (e) => {
                (Q(e.id), $(e));
            },
            [Q, $],
        ),
        ee = (0, s.bG)([R.A], () => R.A.redirectedPaymentSourceId),
        en = { completeSteps: X, setIsSubmittingCurrentStep: t.setIsSubmittingCurrentStep },
        el = a.useRef(en);
    (a.useEffect(() => {
        el.current = en;
    }),
        a.useEffect(() => {
            let { completeSteps: e, setIsSubmittingCurrentStep: t } = el.current;
            !(async function () {
                if (null == ee) return;
                await (0, d.$o)();
                let n = O.A.getPaymentSource(ee);
                null != n && (e(n), t(!1), R.A.clearRedirectedPaymentSourceId());
            })();
        }, [ee]));
    let ei = a.useCallback(() => {
            (Y(U), K(L.pn.PAYMENT_ELEMENT));
        }, [Y, K, U]),
        ea = a.useCallback(
            (e) => {
                let { steps: t, methodType: n } = F[e];
                Y({ steps: t, methodType: n === ej.he.UNKNOWN ? e : n });
            },
            [Y, F],
        ),
        es = a.useCallback(() => {
            Y({ steps: [...l, ...eR, ...i], methodType: ej.he.CARD });
        }, [Y, l, i]),
        eo = a.useMemo(
            () => ({
                handleStepChange: K,
                continueSessionToInitialStep: y,
                currentStep: B,
                paymentMethodSteps: V,
                setBillingAddressState: J,
                redirectToCardInput: ei,
                paymentElementOnNextCallback: ea,
                setFallbackCardPaymentMethodSteps: es,
                onComplete: c,
                onReturn: u,
                completeSteps: X,
                analyticsLocation: h,
                analyticsData: C,
                overwriteSubscriptionPaymentSource: E,
            }),
            [K, y, B, V, J, ei, ea, es, h, c, u, X, C, E],
        );
    if (!(B in tb))
        throw new T.v({ message: `Unexpected Add Payment sub-step: ${B}`, extraSentryInformation: { currentStep: B } });
    let { renderStepBody: eu, renderStepFooter: ec } = tb[B],
        ed = eu(t),
        em = ec(t);
    return S
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  g && (0, r.jsx)(k.A, { className: tE.At, isEligibleForTrial: g }),
                  (0, r.jsxs)(et, {
                      ...eo,
                      children: [
                          (0, r.jsxs)(w.dZ, {
                              children: [
                                  (0, r.jsx)(er, { className: tE._8 }),
                                  (0, r.jsx)(tR, { billingAddressState: t.billingAddressState, children: ed }),
                              ],
                          }),
                          (0, r.jsx)(w.UX, { children: em }),
                      ],
                  }),
              ],
          })
        : (0, r.jsx)(et, {
              ...eo,
              children: (0, r.jsx)(tk, {
                  isLoading: null == P,
                  paymentError: t.paymentError,
                  header: p,
                  body: (0, r.jsx)(tR, { billingAddressState: t.billingAddressState, children: ed }),
                  footer: em,
              }),
          });
}
function tG(e) {
    let {
            defaultPaymentSourceId: t,
            paymentSources: n,
            hasFetchedPaymentSources: l,
        } = (0, s.cf)([O.A], () => ({
            defaultPaymentSourceId: void 0 !== e ? e : O.A.defaultPaymentSourceId,
            paymentSources: O.A.paymentSources,
            hasFetchedPaymentSources: O.A.hasFetchedPaymentSources,
        })),
        i = (0, s.bG)([B], () => B.cashAppPayComponent),
        r = (0, s.bG)([v.A], () => v.A.data?.allowed_payment_source_types ?? null);
    ((0, x.Ay)(() => {
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
            l || (0, d.$o)());
    }),
        a.useEffect(() => {
            null == i && null != r && r.includes(ej.he.CASH_APP) && V();
        }, [r, i]));
    let [o, c] = a.useState(t),
        C = (0, P.Ay)(t);
    t !== C && null != t && null == o && c(t);
    let [g, I] = a.useState(() => ({ info: tw, isValid: !1 })),
        [A, _] = a.useState(() => ({ info: tD, isValid: !1 })),
        [T, b] = a.useState(""),
        [M, L] = a.useState(""),
        [k, w] = a.useState(() => ({ token: null })),
        [D, U, G, F, H] = (0, s.yK)([R.A], () => [
            R.A.braintreeEmail,
            R.A.braintreeNonce,
            R.A.error,
            R.A.venmoUsername,
            R.A.adyenPaymentData,
        ]),
        { paymentAuthError: W, isAwaitingPaymentAuthentication: Y } = (0, N.t4)((e) => ({
            paymentAuthError: e.paymentAuthError,
            isAwaitingPaymentAuthentication: e.isAwaitingPaymentAuthentication,
        }));
    a.useEffect(() => {
        function e(e) {
            let { billingAddress: t } = e;
            _({ info: t, isValid: t.country.length > 0 });
        }
        return (
            u.h.subscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e),
            () => {
                (u.h.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e), (0, y.ET)());
            }
        );
    }, []);
    let [K, q] = a.useState(!1),
        [Z, z] = a.useState(!1),
        [$, Q] = a.useState(null),
        J = a.useRef(null),
        {
            isAuthenticating: X,
            purchaseTokenAuthState: ee,
            purchaseTokenHash: et,
        } = (0, N.t4)((e) => ({
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
            setPaymentSourceId: c,
            creditCardState: g,
            setCreditCardState: I,
            tokenState: k,
            setTokenState: w,
            billingAddressState: A,
            setBillingAddressState: _,
            isSubmittingCurrentStep: K,
            setIsSubmittingCurrentStep: q,
            hasRedirectURL: Z,
            setHasRedirectURL: z,
            braintreeEmail: D,
            braintreeNonce: U,
            venmoUsername: F,
            adyenPaymentData: H,
            paymentError: null != W ? W : G,
            paymentAuthenticationState: Y ? j.oc.PENDING : null != W ? j.oc.ERROR : j.oc.NONE,
            purchaseError: $,
            setPurchaseError: Q,
            purchaseErrorBlockRef: J,
            isAuthenticating: X,
            purchaseTokenAuthState: ee,
            purchaseTokenHash: et,
            epsBankState: M,
            setEpsBankState: L,
            p24BankState: T,
            setP24BankState: b,
        }
    );
}
