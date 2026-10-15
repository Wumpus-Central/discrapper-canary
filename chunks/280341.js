n.d(t, { Y: () => tD, p: () => tU });
var l,
    i,
    r = n(477900),
    a = n(582128),
    s = n(17928),
    o = n(858899),
    u = n(73153),
    c = n(636537),
    d = n(277984),
    p = n(70142),
    m = n(739508),
    h = n(184015),
    C = n(723702),
    f = n(652215);
function S() {
    let e = p.A.getClient();
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
function E() {
    let e = p.A.getClient();
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
function I() {
    let e = p.A.getPayPalClient();
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
                      m.pM(Error(`Braintree Paypal Error: ${t} ${n} ${l}`)));
            }));
}
function g() {
    let e = p.A.getVenmoClient();
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
                      m.pM(Error(`Braintree Venmo Error: ${t} ${n} ${l}`)));
            }));
}
function y(e, t) {
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
    _ = n(71804),
    T = n(123816),
    N = n(783327),
    b = n(251913),
    j = n(825755),
    R = n(295405),
    O = n(174459),
    M = n(166532),
    L = n(69494),
    k = n(482132),
    w = n(632088);
let D = null,
    U = null;
class G extends s.Ay.Store {
    static displayName = "AdyenStore";
    get client() {
        return D;
    }
    get cashAppPayComponent() {
        return U;
    }
}
let F = new G(u.h, {
    ADYEN_CREATE_CLIENT_SUCCESS: function (e) {
        let { client: t } = e;
        D = t;
    },
    ADYEN_TEARDOWN_CLIENT: function () {
        D = null;
    },
    ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS: function (e) {
        let { component: t } = e;
        U = t;
    },
});
var B = n(660183);
async function H() {
    return await c.Bo.get({ url: f.Rsh.BILLING_ADYEN_PAYMENT_METHODS, oldFormErrors: !0, rejectWithError: !1 });
}
async function W() {
    try {
        let e = await H(),
            { default: t } = await Promise.all([n.e("494678"), n.e("540002")]).then(n.bind(n, 971193)),
            l = await t({
                environment: f.Gg3.ADYEN.KEY.startsWith("live_") ? "live" : "test",
                clientKey: f.Gg3.ADYEN.KEY,
                analytics: { enabled: !1 },
                paymentMethodsResponse: e.body,
            });
        (u.h.dispatch({ type: "ADYEN_CREATE_CLIENT_SUCCESS", client: l }),
            (function (e) {
                if (null != F.cashAppPayComponent) {
                    (Y(), V());
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
                                        ((n = !1), (t = B.intl.string(B.t.TJ8dDB)));
                                }
                                (0, d.i0)(e.message, { captureException: n, defaultErrorMessage: t });
                            }
                        },
                    })
                    .mount(`#${w.h}`);
                u.h.dispatch({ type: "ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS", component: t });
            })(l));
    } catch (e) {
        ((0, m.pM)(e), u.h.dispatch({ type: "ADYEN_CREATE_CLIENT_FAIL" }));
    }
}
function V() {
    let e = F.cashAppPayComponent;
    if (null == e) throw Error("Adyen CashAppPay component must be created before mounting.");
    try {
        e.mount(`#${w.h}`);
    } catch (e) {}
}
function Y() {
    F.cashAppPayComponent?.unmount();
}
function K() {
    let e = F.cashAppPayComponent;
    if (null == e) throw Error("Adyen CashAppPay component must be created before submitting.");
    e.submit();
}
var Z = n(901930),
    q = n(19311),
    z = n(626584),
    $ = n(427262),
    Q = n(276858);
let J = new z.A("AddPaymentMethodStepContext.tsx"),
    X = a.createContext(null);
function ee(e) {
    let { children: t, ...n } = e,
        { handleStepChange: l, continueSessionToInitialStep: i, setBillingAddressState: s, currentStep: o } = n,
        u = a.useMemo(() => (0, $.Gn)(), []),
        c = a.useCallback(
            (e, t) => {
                s((n) => ({ info: { ...n.info, ...e }, isValid: t }));
            },
            [s],
        ),
        d = (0, Q.wD)({
            step: o,
            continueSessionToInitialStep: i,
            handleStepChange: l,
            logger: J,
            shouldLogOnChangeEvents: u || !1,
            onBillingAddressChange: c,
        }),
        { returnToPaymentElementStep: p, remountAddressElement: m } = d,
        h = a.useCallback(() => {
            (l(M.pn.ADDRESS), Q.Ky.includes(o) && m());
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
    return (0, r.jsx)(X.Provider, { value: f, children: t });
}
function et() {
    let e = a.useContext(X);
    if (null == e)
        throw Error(
            "useAddPaymentMethodStepInternalContext must be used within an AddPaymentMethodStepInternalContextProvider",
        );
    return e;
}
function en(e) {
    return () => (null != j.A.error && (0, A.ET)(), e());
}
function el(e) {
    let { onPrimary: t, onBack: n, ...l } = e,
        i = t;
    null != t && (i = en(t));
    let a = n;
    return (null != n && (a = en(n)), (0, r.jsx)(q.Ay, { ...l, onPrimary: i, onBack: a }));
}
function ei(e) {
    let { className: t } = e,
        { hasSelectedPaymentElementSourceType: n } = et();
    return (0, r.jsx)(Z.A, { className: t, hasSelectedPaymentElementSourceType: n });
}
var er = n(683071),
    ea = n(503698),
    es = n.n(ea),
    eo = n(305866),
    eu = n(95477),
    ec = n(812745),
    ed = n(287809),
    ep = n(832208),
    em = n(643909),
    eh = n(661531),
    eC = n(602853),
    ef = n(281595),
    eS = n(513098),
    eE = n(151167);
let eI = function (e) {
    let t = a.useRef(null),
        { stripeType: n, flipped: l, updateCompleted: i, onFocus: s, onBlur: o } = e,
        [u, c] = a.useState(ec.Be.UNKNOWN),
        [d, p] = a.useState(!1),
        [m, h] = a.useState(!1),
        [C, f] = a.useState(null),
        [S, E] = a.useState({}),
        I = (0, em.useElements)(),
        g = a.useCallback(() => {
            if (null != I)
                switch (n) {
                    case "cardNumber": {
                        let e = I.getElement(em.CardNumberElement);
                        if (null == e) return;
                        (e.off("change"), e.off("focus"), e.off("blur"));
                        break;
                    }
                    case "cardExpiry": {
                        let e = I.getElement(em.CardExpiryElement);
                        if (null == e) return;
                        (e.off("change"), e.off("focus"), e.off("blur"));
                        break;
                    }
                    case "cardCvc": {
                        let e = I.getElement(em.CardCvcElement);
                        if (null == e) return;
                        (e.off("change"), e.off("focus"), e.off("blur"));
                    }
                }
        }, [I, n]),
        y = a.useCallback(
            (e) => {
                (m || e.empty || h(!0), null != i && i(e.complete), null != e.error && p(!1));
            },
            [m, i],
        ),
        A = a.useCallback(() => {
            (p(!0), s?.());
        }, [s]),
        P = a.useCallback(() => {
            (p(!1), o?.());
        }, [o]),
        v = a.useCallback(() => {
            if (null != I)
                switch (n) {
                    case "cardNumber": {
                        let e = I.getElement(em.CardNumberElement);
                        if (null == e) return;
                        (e.on("change", (e) => {
                            (u !== e.brand && c(e.brand),
                                e.empty && m
                                    ? f(B.intl.string(B.t.eOIfuy))
                                    : null != e.error
                                      ? f(B.intl.string(B.t.x4pWtJ))
                                      : f(null),
                                y(e));
                        }),
                            e.on("focus", A),
                            e.on("blur", P));
                        break;
                    }
                    case "cardExpiry": {
                        let e = I.getElement(em.CardExpiryElement);
                        if (null == e) return;
                        (e.on("change", (e) => {
                            (null != e.error || (e.empty && m) ? f(B.intl.string(B.t["9/zZdl"])) : f(null), y(e));
                        }),
                            e.on("focus", A),
                            e.on("blur", P));
                        break;
                    }
                    case "cardCvc": {
                        let e = I.getElement(em.CardCvcElement);
                        if (null == e) return;
                        (e.on("change", (e) => {
                            (null != e.error || (e.empty && m) ? f(B.intl.string(B.t.ro4isZ)) : f(null), y(e));
                        }),
                            e.on("focus", A),
                            e.on("blur", P));
                    }
                }
        }, [P, y, A, u, I, m, n]);
    a.useEffect(
        () => (
            v(),
            () => {
                g();
            }
        ),
        [v, g],
    );
    let x = (0, eC.r)(eh.A.colors.TEXT_SUBTLE).hex(),
        _ = (0, eC.r)(eh.A.colors.TEXT_STRONG).hex();
    function T() {
        return es()(eS.vB, { [eS.Tn]: null !== C, [eS.iH]: d, [eS.yD]: "cardNumber" === n });
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
            className: eS.Zm,
            "data-stripe-type": n,
            children: [
                (0, r.jsx)("div", { ref: t, className: es()(eS.iw, eE.hF) }),
                (function () {
                    switch (n) {
                        case "cardNumber":
                            return (0, r.jsxs)("div", {
                                children: [
                                    (0, r.jsx)(ec.Ay, { className: eS.Ie, type: u, flipped: l }),
                                    (0, r.jsx)(em.CardNumberElement, {
                                        options: { style: S, placeholder: B.intl.string(B.t.gPRHfw), disableLink: !1 },
                                        className: T(),
                                    }),
                                ],
                            });
                        case "cardExpiry":
                            return (0, r.jsx)(em.CardExpiryElement, {
                                options: { style: S, placeholder: B.intl.string(B.t.xeEWQ6) },
                                className: T(),
                            });
                        case "cardCvc":
                            return (0, r.jsx)(em.CardCvcElement, {
                                options: { style: S, placeholder: B.intl.string(B.t.wZz04F) },
                                className: T(),
                            });
                    }
                })(),
                (0, r.jsx)(ef.U, { error: C }),
            ],
        })
    );
};
var eg = n(719941),
    ey = n(782328);
let eA = function (e) {
    let { onCardInfoChange: t, error: n } = e,
        l = a.useRef(t),
        [i, s] = a.useState(!1),
        [o, u] = a.useState({}),
        [c, d] = a.useState({ name: "", country: "", postalCode: "" }),
        [p, m] = a.useState({}),
        [h, C] = a.useState({}),
        { setFocusLockDisabled: f } = a.useContext(eo.M);
    a.useEffect(() => () => {
        void 0 !== f && f(!1);
    });
    let S = a.useCallback(() => {
        void 0 !== f && f(!0);
    }, [f]);
    function E(e, t) {
        !!o[e] !== t && u((n) => ({ ...n, [e]: t }));
    }
    let I = a.useCallback(
        function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = {};
            return ((e || p.name) && "" === c.name && (t.name = B.intl.string(B.t.lIkVsi)), t);
        },
        [p, c],
    );
    return (
        a.useEffect(() => {
            let e = o.cardNumber && o.cardExpiry && o.cardCvc && 0 === Object.keys(I(!0)).length;
            l.current({ name: c.name }, !!e);
        }, [o, c, I]),
        (0, r.jsxs)("div", {
            children: [
                ed.default.getCurrentUser()?.nsfwAllowed
                    ? (0, r.jsxs)("div", {
                          className: eg.Rm,
                          children: [
                              (0, r.jsx)("div", { className: es()(ec.y3.SMALL, eg.eo, eg.Ud) }),
                              (0, r.jsx)("div", { className: es()(ec.y3.SMALL, eg.DR, eg.Ud) }),
                              (0, r.jsx)("div", { className: es()(ec.y3.SMALL, eg.k4, eg.Ud) }),
                              (0, r.jsx)("div", { className: es()(ec.y3.SMALL, eg.a3, eg.Ud) }),
                              (0, r.jsx)("div", { className: es()(ec.y3.SMALL, eg.CY, eg.Ud) }),
                              (0, r.jsx)("div", { className: es()(ec.y3.SMALL, eg.Q5, eg.Ud) }),
                              (0, r.jsx)("div", { className: es()(ec.y3.SMALL, eg.YA, eg.Ud) }),
                          ],
                      })
                    : (0, r.jsxs)("div", {
                          className: eg.Rm,
                          children: [
                              (0, r.jsx)("div", { className: es()(ec.y3.SMALL, eg.aq, eg.Ud) }),
                              (0, r.jsx)("div", { className: es()(ec.y3.SMALL, eg.VX, eg.Ud) }),
                              (0, r.jsx)("div", { className: es()(ec.y3.SMALL, eg.Yi, eg.Ud) }),
                              (0, r.jsx)("div", { className: es()(ec.y3.SMALL, eg.qR, eg.Ud) }),
                              (0, r.jsx)("div", { className: es()(ec.y3.SMALL, eg.m2, eg.Ud) }),
                              (0, r.jsx)("div", { className: es()(ec.y3.SMALL, eg.Ij, eg.Ud) }),
                              (0, r.jsx)("div", { className: es()(ec.y3.SMALL, eg._V, eg.Ud) }),
                          ],
                      }),
                (0, r.jsx)(ep.A, {
                    form: [
                        {
                            fields: [
                                {
                                    id: "card-number",
                                    name: "cardNumber",
                                    title: () => B.intl.string(B.t.cVyJ3o),
                                    getClassNameForLayout: () => ey.c6,
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
                                    title: () => B.intl.string(B.t["CeBa/4"]),
                                    getClassNameForLayout: () => ey.ep,
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
                                    title: () => B.intl.string(B.t.Fd3rOz),
                                    getClassNameForLayout: () => ey.ep,
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
                                    title: () => B.intl.string(B.t.VUlFdU),
                                    autoComplete: "cc-name",
                                    placeholder: () => B.intl.string(B.t["yf7ms+"]),
                                    getClassNameForLayout: () => ey.c6,
                                    renderInput: (e) => (0, r.jsx)(eu.k, { ...e }),
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
                            l[t] && "" === e ? "name" === t && (i.name = B.intl.string(B.t.lIkVsi)) : delete i[t],
                            d(n),
                            m(l),
                            C(i));
                    },
                    onFieldBlur: function () {
                        C(I());
                    },
                }),
            ],
        })
    );
};
var eP = n(198970),
    ev = n(116673),
    ex = n(773669),
    e_ =
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
    eT = n(292234);
let eN = (e) => {
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
                })(l) === e_.ADDRESS),
        c = (0, s.bG)([ex.default], () => ex.default.locale);
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
    let p = (0, s.bG)([ed.default], () => ed.default.getCurrentUser()?.storeCountry?.isLocked === !0)
        ? B.intl.string(B.t.Pg2hU0)
        : null;
    return (0, r.jsxs)(a.Fragment, {
        children: [
            u
                ? (0, r.jsx)("div", {
                      className: eT.QK,
                      children: (0, r.jsx)(er.w, {
                          type: "critical",
                          message: B.intl.string(B.t.vZ8y7l),
                          role: "alert",
                      }),
                  })
                : null,
            (0, r.jsx)(eP.Ay, {
                className: eT.__invalid_formItem,
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
var eb = n(818348);
let ej = [M.pn.CREDIT_CARD_INFORMATION, M.pn.ADDRESS];
function eR(e) {
    let { billingError: t, onCardInfoChange: n } = e,
        l = null != t && (null == t.code || (0, M.ou)(t) === M.pn.CREDIT_CARD_INFORMATION);
    return (0, r.jsxs)(a.Fragment, {
        children: [
            l
                ? (0, r.jsx)("div", {
                      className: eT.QK,
                      children: (0, r.jsx)(er.w, {
                          type: "critical",
                          message: B.intl.string(B.t["4vnhKV"]),
                          role: "alert",
                      }),
                  })
                : null,
            (0, r.jsx)(eA, { onCardInfoChange: n, error: t }),
        ],
    });
}
function eO(e) {
    let { billingAddressInfo: t, onBillingAddressChange: n, paymentSourceType: l } = e,
        i = (0, s.bG)([j.A], () => j.A.error);
    return (0, r.jsx)(eN, { billingAddressInfo: t, billingError: i, onBillingAddressChange: n, paymentSourceType: l });
}
function eM(e) {
    let { addPaymentMethodStepState: t } = e,
        { billingAddressState: n, setBillingAddressState: l } = t,
        { hasSelectedPaymentElementSourceType: i, paymentMethodSteps: a } = et(),
        s = a.methodType ?? eb.he.CARD;
    return i
        ? null
        : (0, r.jsx)(eO, {
              billingAddressInfo: n.info,
              onBillingAddressChange: (e, t) => {
                  l({ info: { ...n.info, ...e }, isValid: t });
              },
              paymentSourceType: s,
          });
}
let eL = {
    SHARED_ADD_PAYMENT_STEPS: [M.pn.PAYMENT_ELEMENT],
    SHARED_CREDIT_CARD_STEPS: [M.pn.PAYMENT_ELEMENT, M.pn.ADDRESS],
    SHARED_PAYPAL_STEPS: [M.pn.PAYMENT_ELEMENT, M.pn.PAYPAL_INFORMATION, M.pn.ADDRESS],
    SHARED_VENMO_STEPS: [M.pn.PAYMENT_ELEMENT, M.pn.VENMO_INFORMATION, M.pn.ADDRESS],
    SHARED_CASH_APP_STEPS: [M.pn.PAYMENT_ELEMENT, M.pn.CASH_APP_INFORMATION, M.pn.ADDRESS],
    SHARED_PRZELEWY24_STEPS: [M.pn.PAYMENT_ELEMENT, M.pn.PRZELEWY24_INFORMATION, M.pn.ADDRESS],
    SHARED_EPS_STEPS: [M.pn.PAYMENT_ELEMENT, M.pn.EPS_INFORMATION, M.pn.ADDRESS],
    SHARED_IDEAL_STEPS: [M.pn.PAYMENT_ELEMENT, M.pn.ADDRESS],
    SHARED_TYPE_AND_ADDRESS_STEPS: [M.pn.PAYMENT_ELEMENT, M.pn.ADDRESS],
};
var ek = n(685094);
class ew extends a.PureComponent {
    componentDidMount() {
        null != this.props.paypalClient && I();
    }
    componentDidUpdate(e) {
        null == e.paypalClient && null != this.props.paypalClient && I();
    }
    componentWillUnmount() {
        y(p.A.getPayPalClient(), { type: "BRAINTREE_TEARDOWN_PAYPAL_CLIENT" }).then(() => {
            null != p.A.getClient() && E();
        });
    }
    render() {
        let { braintreeEmail: e, paypalClient: t } = this.props;
        return (0, r.jsx)(eu.k, {
            label: B.intl.string(B.t.QQBAos),
            leading: { type: "image", src: (0, ec.Nj)(ec.Ay.Types.PAYPAL) },
            value: e,
            readOnly: !0,
            placeholder: null == t ? B.intl.string(B.t.dte2M9) : B.intl.string(B.t.hopw7X),
        });
    }
}
let eD = s.Ay.connectStores([p.A, j.A], () => ({
    braintreeEmail: j.A.braintreeEmail,
    paypalClient: p.A.getPayPalClient(),
}))(ew);
var eU = n(297264),
    eG = n(834730),
    eF = n(351665);
class eB extends a.PureComponent {
    componentDidMount() {
        null != this.props.venmoClient && g();
    }
    componentDidUpdate(e) {
        null == e.venmoClient && null != this.props.venmoClient && g();
    }
    componentWillUnmount() {
        y(p.A.getVenmoClient(), { type: "BRAINTREE_TEARDOWN_VENMO_CLIENT" }).then(() => {
            null != p.A.getClient() && S();
        });
    }
    render() {
        let { venmoUsername: e, className: t, venmoClient: n } = this.props,
            l = null != e && "" !== e;
        return (0, r.jsxs)("div", {
            className: t,
            children: [
                (0, r.jsx)(ec.Ay, { type: ec.Ay.Types.VENMO, size: ec.y3.MEDIUM, className: eF.Z }),
                l
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(eU.D, {
                                  variant: e.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
                                  className: eF.y,
                                  children: B.intl.format(B.t.DowIre, { venmoUsername: e }),
                              }),
                              (0, r.jsx)(eG.E, {
                                  variant: "text-md/medium",
                                  className: eF.y,
                                  children: B.intl.string(B.t.kmEvnR),
                              }),
                          ],
                      })
                    : (0, r.jsx)(eG.E, {
                          variant: "text-md/medium",
                          className: eF.y,
                          children: null == n ? B.intl.string(B.t["2ouZDU"]) : B.intl.string(B.t.mIL6Jb),
                      }),
            ],
        });
    }
}
let eH = s.Ay.connectStores([p.A, j.A], () => ({
    venmoUsername: j.A.venmoUsername,
    venmoClient: p.A.getVenmoClient(),
}))(eB);
var eW = n(891197),
    eV = n(462887),
    eY = n(331322),
    eK = n(736653),
    eZ = n(438983);
let eq = function (e) {
    let t = (0, eK.Ay)(),
        n = a.useRef(null),
        [l, i] = a.useState({}),
        s = (0, eC.r)(eh.A.colors.BACKGROUND_BASE_LOWER).hex();
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
                    borderRadius: eh.A.radii.xs,
                },
            });
        }, [n, s]),
        e.type)
    ) {
        case eb.he.PRZELEWY24: {
            let i = (0, eV.M)(t) ? "/assets/f4150b3aed6c4679.svg" : "/assets/8b825aafb2e4dbed.svg",
                { onNameChange: a, onEmailChange: s, onP24BankChange: o, p24BankValue: u, billingAddressInfo: c } = e;
            return (0, r.jsx)("div", {
                className: eZ.rf,
                children: (0, r.jsxs)(eY.B, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(eu.k, {
                            label: B.intl.string(B.t["w/qqKK"]),
                            inputRef: n,
                            name: B.intl.string(B.t["w/qqKK"]),
                            placeholder: B.intl.string(B.t["w/qqKK"]),
                            onChange: (e) => s(e),
                            value: c.email,
                        }),
                        (0, r.jsx)(eu.k, {
                            label: B.intl.string(B.t["yf7ms+"]),
                            name: B.intl.string(B.t["yf7ms+"]),
                            placeholder: B.intl.string(B.t["yf7ms+"]),
                            onChange: (e) => a(e),
                            value: c.name,
                        }),
                        (0, r.jsxs)(eY.B, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(eG.E, { variant: "text-sm/semibold", children: B.intl.string(B.t.De3b8t) }),
                                (0, r.jsx)(em.P24BankElement, {
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
        case eb.he.EPS: {
            let { onAccountHolderNameChange: i, onEPSBankChange: a, epsBankValue: s, billingAddressInfo: o } = e,
                u = (0, eV.M)(t) ? "/assets/025b24b0055c8d81.svg" : "/assets/1dae7d71a65fd90f.svg";
            return (0, r.jsx)("div", {
                className: eZ.rf,
                children: (0, r.jsxs)(eY.B, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(eu.k, {
                            label: B.intl.string(B.t.sN3wrd),
                            inputRef: n,
                            name: B.intl.string(B.t.sN3wrd),
                            placeholder: B.intl.string(B.t.sN3wrd),
                            onChange: (e) => i(e),
                            value: o.name,
                        }),
                        (0, r.jsxs)(eY.B, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(eG.E, { variant: "text-sm/semibold", children: B.intl.string(B.t.dFyV07) }),
                                (0, r.jsx)(em.EpsBankElement, {
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
var ez = n(31823),
    e$ = n(883645),
    eQ = n(25149),
    eJ = n(364840),
    eX = n(73825),
    e0 = n(558620),
    e2 = n(36167),
    e1 = n(951305),
    e3 = n(820287),
    e4 = (((i = {})[(i.UNKNOWN = 0)] = "UNKNOWN"), (i[(i.PENDING = 1)] = "PENDING"), (i[(i.DONE = 2)] = "DONE"), i);
let e7 = 0,
    e6 = null,
    e5 = null,
    e8 = null;
class e9 extends s.Ay.Store {
    static displayName = "BrowserCheckoutStateStore";
    get browserCheckoutState() {
        return e7;
    }
    get loadId() {
        return e6;
    }
    get skuId() {
        return e5;
    }
    get planId() {
        return e8;
    }
}
let te = new e9(u.h, {
    USER_PAYMENT_BROWSER_CHECKOUT_STARTED: function (e) {
        ((e7 = 1), (e6 = e.loadId));
    },
    USER_PAYMENT_BROWSER_CHECKOUT_DONE: function (e) {
        e6 === e.loadId && ((e5 = e.skuId ?? null), (e8 = e.skuSubscriptionPlanId ?? null), (e7 = 2));
    },
});
var tt = n(202541),
    tn = n(731075);
function tl(e) {
    let t,
        { step: n, onPurchaseComplete: l, onHandoffFailure: i } = e,
        {
            setSelectedSkuId: o,
            setSelectedPlanId: u,
            contextMetadata: c,
        } = (0, T.t4)((e) => ({
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            contextMetadata: e.contextMetadata,
        })),
        {
            browserCheckoutState: p,
            browserCheckoutStateLoadId: m,
            browserCheckoutStateSkuId: h,
            browserCheckoutStatePlanId: C,
        } = (0, s.cf)([te], () => ({
            browserCheckoutState: te.browserCheckoutState,
            browserCheckoutStateLoadId: te.loadId,
            browserCheckoutStateSkuId: te.skuId,
            browserCheckoutStatePlanId: te.planId,
        })),
        S = (0, e0.A)(),
        { isGift: E } = (0, e1.Pv)(),
        [I, g] = a.useState(!1);
    switch (n) {
        case M.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
            t = f.do8.GOOGLE_PAY;
            break;
        case M.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
            t = f.do8.APPLE_PAY;
    }
    return (
        a.useEffect(() => {
            let e = setTimeout(() => {
                I ||
                    (g(!0),
                    (0, d.Ze)(c.loadId),
                    (0, e2.my)(
                        {
                            planId: S?.id ?? tt.gD.PREMIUM_MONTH_TIER_2,
                            isGift: E,
                            loadId: c.loadId,
                            paymentMethodType: t,
                        },
                        i,
                    ));
            }, 1e3);
            return () => clearTimeout(e);
        }, [S, E, c, i, g, I, t]),
        a.useEffect(() => {
            (null !== h && (tt.oz.includes(h) && ((0, eX.ur)(h), (0, d.hP)()), o(h)),
                null !== C && u(C),
                m === c.loadId && p === e4.DONE && l());
        }, [o, u, p, m, h, C, c, l]),
        (0, r.jsxs)("div", {
            className: tn.rf,
            children: [
                (0, r.jsx)(eU.D, { variant: "heading-xl/bold", children: B.intl.string(B.t.C4HYfy) }),
                (0, r.jsx)(eG.E, { variant: "text-md/normal", className: tn.h_, children: B.intl.string(B.t.xfG7Jp) }),
            ],
        })
    );
}
function ti(e) {
    let { onPrimaryClick: t, onBackClick: n } = e;
    return (0, r.jsx)(eJ.j, {
        children: (0, r.jsxs)("div", {
            className: tn.kL,
            children: [
                null != n ? (0, r.jsx)(e3.A, { onClick: n }) : null,
                (0, r.jsx)(e3.F, { onClick: t, children: B.intl.string(B.t["4Qvmmj"]) }),
            ],
        }),
    });
}
var tr = n(311622);
function ta(e) {
    let { className: t } = e,
        n = (0, s.bG)([F], () => F.cashAppPayComponent),
        l = (0, s.bG)([j.A], () => j.A.adyenPaymentData);
    a.useEffect(
        () => (
            null == l && null != n && (V(), K()),
            () => {
                Y();
            }
        ),
        [l, n],
    );
    let i = l?.paymentMethod?.cashtag ?? "",
        o = null != l && "" !== i;
    return (0, r.jsxs)("div", {
        className: t,
        children: [
            (0, r.jsx)(ec.Ay, { type: ec.Ay.Types.CASH_APP, size: ec.y3.MEDIUM, className: tr.K }),
            o
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(eU.D, {
                              variant: i.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
                              className: tr.y,
                              children: B.intl.format(B.t["ze/1yE"], { cashtag: i }),
                          }),
                          (0, r.jsx)(eG.E, {
                              variant: "text-md/medium",
                              className: tr.y,
                              children: B.intl.string(B.t.VPOx7N),
                          }),
                      ],
                  })
                : (0, r.jsx)(eG.E, {
                      variant: "text-md/medium",
                      className: tr.y,
                      children: null == n ? B.intl.string(B.t["CgVe/w"]) : B.intl.string(B.t["1MqcjI"]),
                  }),
        ],
    });
}
var ts = n(913122),
    to = n(908166),
    tu = n(930767),
    tc = n(676230);
let td = new z.A("AddPaymentMethod");
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
        } = et(),
        {
            paymentElementSelectedType: c,
            returnToPaymentElementStep: d,
            stripeElementsRef: p,
            lastConfirmedSetupIntentRef: h,
        } = a,
        C = (0, N.S)(),
        { createSetupIntent: f } = (0, to.x)(),
        { contextMetadata: S } = (0, T.t4)((e) => ({ contextMetadata: e.contextMetadata })),
        {
            isSubmittingCurrentStep: E,
            billingAddressState: I,
            setIsSubmittingCurrentStep: g,
            hasRedirectURL: y,
            setHasRedirectURL: A,
            isAuthenticating: P,
        } = t;
    async function v() {
        g(!0);
        let e = s ? c : i.methodType,
            n = p.current,
            r = null != e && (0, tc.i)(e) ? tc.F[e] : null;
        if (null == r)
            throw new tu.v({
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
            ("redirect-url" === e.responseType ? A(e.hasRedirectURL) : l(e.paymentSource), y || g(!1));
        } catch (e) {
            if (e instanceof ts.Ey) {
                let t = Object.keys(e.fields).sort(),
                    n = null != e.status ? { status: String(e.status) } : {},
                    l = Error(e.message);
                ((l.name = `BillingError[${e.code}]`),
                    (0, m.pM)(l, {
                        tags: {
                            ...(s ? { source: "payment_elements" } : {}),
                            error_location: "submit_address_step",
                            has_field_error: t.length > 0 ? "true" : "false",
                            error_code: String(e.code),
                            ...n,
                        },
                        extra: {
                            loadId: S.loadId,
                            message: e.message,
                            errorCode: e.code,
                            errorStatus: e.status,
                            fields: e.fields,
                        },
                    }));
            }
            (g(!1), td.warn(`Error confirming submitting Address Step for Payment Source Type: ${x}`, e));
        }
    }
    let x = i.methodType,
        { backStep: _ } = s
            ? { backStep: M.pn.PAYMENT_ELEMENT }
            : (function (e) {
                  switch (e) {
                      case eb.he.CARD:
                          return { backStep: M.pn.CREDIT_CARD_INFORMATION };
                      case eb.he.PAYPAL:
                          return { backStep: M.pn.PAYPAL_INFORMATION };
                      case eb.he.VENMO:
                          return { backStep: M.pn.VENMO_INFORMATION };
                      case eb.he.EPS:
                          return { backStep: M.pn.EPS_INFORMATION };
                      case eb.he.PRZELEWY24:
                          return { backStep: M.pn.PRZELEWY24_INFORMATION };
                      case eb.he.CASH_APP:
                          return { backStep: M.pn.CASH_APP_INFORMATION };
                      default:
                          return { backStep: M.pn.PAYMENT_ELEMENT };
                  }
              })(x),
        b = s ? () => d(void 0) : () => n(_);
    return (0, r.jsx)(el, {
        onBack: b,
        primaryCTA: q.Ay.CTAType.CONTINUE,
        primaryText: B.intl.string(B.t.PDTjLN),
        primarySubmitting: E,
        primaryDisabled: !I.isValid || P,
        onPrimary: v,
    });
}
var tm = n(648335);
let th = new z.A("PaymentElementStepFooter.tsx");
function tC(e) {
    let { addPaymentMethodStepState: t } = e,
        { setIsSubmittingCurrentStep: n, setBillingAddressState: l, isSubmittingCurrentStep: i } = t,
        s = (0, N.S)(),
        { paymentElementOnNextCallback: o, handleStepChange: u, stripePaymentElementState: c, onReturn: p } = et(),
        {
            paymentElementSelectedType: m,
            stripeElementsRef: h,
            remountAddressElement: C,
            onBackFromPaymentElement: f,
            paymentElementReady: S,
        } = c,
        E = a.useCallback(async () => {
            n(!0);
            try {
                if (null == m || !(0, tm.eX)(m)) throw (0, d.ne)("Valid Payment Element source type not found", !0);
                o(m);
                let e = tc.F[m];
                if (null != e && null != e.submitPaymentElementStepHandler) {
                    (await e.submitPaymentElementStepHandler({
                        stripe: s,
                        stripeElements: h.current,
                        remountAddressElement: C,
                        setBillingAddressState: l,
                    }),
                        u(e.stepAfterPaymentElement ?? M.pn.ADDRESS));
                    return;
                }
                let t = (0, tm.eI)(m);
                if (null != t) return void u(t);
                u(M.pn.ADDRESS);
            } catch (e) {
                th.error("Error on submitting Payment Element step: ", e.message ?? JSON.stringify(e));
            } finally {
                n(!1);
            }
        }, [o, m, h, C, u, s, n, l]),
        I = a.useCallback(() => {
            (f(), null != p && p());
        }, [f, p]);
    return (0, r.jsx)(el, {
        onBack: null != p ? I : void 0,
        primaryCTA: q.Ay.CTAType.CONTINUE,
        primaryType: "submit",
        primaryText: B.intl.string(B.t.PDTjLN),
        primarySubmitting: i,
        primaryDisabled: !S,
        onPrimary: E,
    });
}
var tf = n(814935),
    tS = n(24404);
let tE = new z.A("AddPaymentMethodSubstepRegistry.tsx");
function tI(e) {
    let { setCreditCardState: t, setBillingAddressState: n } = e,
        l = a.useCallback(
            (e, l) => {
                (t({ info: e, isValid: l }), n((t) => ({ ...t, info: { ...t.info, name: e.name } })));
            },
            [t, n],
        ),
        i = (0, s.bG)([j.A], () => j.A.error);
    return (0, r.jsx)(eR, { billingError: i, onCardInfoChange: l });
}
function tg(e) {
    let { setIsSubmittingCurrentStep: t, setTokenState: n, isSubmittingCurrentStep: l, creditCardState: i } = e,
        { handleStepChange: a, onReturn: s } = et(),
        o = (0, N.S)();
    async function u(e) {
        t(!0);
        try {
            let t = await (0, d.YJ)(o, e);
            (n({ token: t }), a(M.pn.ADDRESS));
        } catch (e) {
            tE.error(e.message ?? JSON.stringify(e));
        } finally {
            t(!1);
        }
    }
    let c = !i.isValid;
    return (0, r.jsx)(em.ElementsConsumer, {
        children: (e) => {
            let { elements: t } = e;
            return (0, r.jsx)(el, {
                primaryCTA: q.Ay.CTAType.CONTINUE,
                primaryType: "submit",
                primaryText: B.intl.string(B.t.PDTjLN),
                primarySubmitting: l,
                primaryDisabled: c,
                onPrimary: () => u(t),
                onBack: null != s ? () => s() : void 0,
            });
        },
    });
}
function ty() {
    let { currentStep: e, redirectToCardInput: t, onComplete: n } = et();
    return (0, r.jsx)(tl, { step: e, onPurchaseComplete: () => n(e), onHandoffFailure: t });
}
function tA() {
    let { redirectToCardInput: e, onReturn: t, stripePaymentElementState: n } = et(),
        { onBackFromPaymentElement: l } = n;
    return (0, r.jsx)(ti, {
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
        { defaultOnBackHandler: n, onSubmitCustomPaymentMethodSubStep: l } = et(),
        i = (0, s.bG)([F], () => F.cashAppPayComponent),
        a = null != t;
    return (0, r.jsx)(el, {
        onBack: () => n(eb.he.CASH_APP),
        primaryCTA: q.Ay.CTAType.CONTINUE,
        primaryText: a ? B.intl.string(B.t.PDTjLN) : B.intl.string(B.t["9ALP8w"]),
        onPrimary: () => (a ? l() : K()),
        primaryDisabled: null == i,
    });
}
function tv(e) {
    let { defaultOnBackHandler: t, onSubmitCustomPaymentMethodSubStep: n } = et(),
        { billingAddressState: l, epsBankState: i } = e;
    return (0, r.jsx)(el, {
        onBack: () => t(eb.he.EPS),
        primaryCTA: q.Ay.CTAType.CONTINUE,
        primaryText: B.intl.string(B.t.PDTjLN),
        primaryDisabled: void 0 === i || "" === i || "" === l.info.name,
        onPrimary: () => n(),
    });
}
function tx(e) {
    let { defaultOnBackHandler: t, onSubmitCustomPaymentMethodSubStep: n } = et(),
        { billingAddressState: l, p24BankState: i } = e;
    return (0, r.jsx)(el, {
        onBack: () => t(eb.he.PRZELEWY24),
        primaryCTA: q.Ay.CTAType.CONTINUE,
        primaryText: B.intl.string(B.t.PDTjLN),
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
function t_(e) {
    let { defaultOnBackHandler: t, onSubmitCustomPaymentMethodSubStep: n } = et(),
        { braintreeEmail: l, braintreeNonce: i } = e,
        a = 0 !== l.length && null != i;
    return (0, r.jsx)(el, {
        onBack: () => t(eb.he.PAYPAL),
        primaryCTA: q.Ay.CTAType.CONTINUE,
        primaryText: a ? B.intl.string(B.t.PDTjLN) : B.intl.string(B.t.Djzd7L),
        onPrimary: () => {
            let e;
            return a
                ? n()
                : void (null == (e = p.A.getLastURL())
                      ? I()
                      : (u.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_START" }), window.open(e)));
        },
    });
}
function tT(e) {
    let { venmoUsername: t, braintreeNonce: n } = e,
        l = 0 !== t.length && null != n,
        { defaultOnBackHandler: i, onSubmitCustomPaymentMethodSubStep: a } = et();
    return (0, r.jsx)(el, {
        onBack: () => i(eb.he.VENMO),
        primaryCTA: q.Ay.CTAType.CONTINUE,
        primaryText: l ? B.intl.string(B.t.PDTjLN) : B.intl.string(B.t["4KoTLM"]),
        onPrimary: () => (l ? a() : void g()),
    });
}
let tN = {
    [M.pn.CREDIT_CARD_INFORMATION]: {
        renderStepBody: (e) => (0, r.jsx)(tI, { ...e }),
        renderStepFooter: (e) => (0, r.jsx)(tg, { ...e }),
    },
    [M.pn.AWAITING_BROWSER_CHECKOUT]: {
        renderStepBody: () => (0, r.jsx)(ty, {}),
        renderStepFooter: () => (0, r.jsx)(tA, {}),
    },
    [M.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY]: {
        renderStepBody: () => (0, r.jsx)(ty, {}),
        renderStepFooter: () => (0, r.jsx)(tA, {}),
    },
    [M.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY]: {
        renderStepBody: () => (0, r.jsx)(ty, {}),
        renderStepFooter: () => (0, r.jsx)(tA, {}),
    },
    [M.pn.PAYMENT_ELEMENT]: {
        renderStepBody: () => null,
        renderStepFooter: (e) => (0, r.jsx)(tC, { addPaymentMethodStepState: e }),
    },
    [M.pn.EPS_INFORMATION]: {
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
        renderStepFooter: (e) => (0, r.jsx)(tv, { ...e }),
    },
    [M.pn.PRZELEWY24_INFORMATION]: {
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
        renderStepFooter: (e) => (0, r.jsx)(tx, { ...e }),
    },
    [M.pn.PAYPAL_INFORMATION]: {
        renderStepBody: () => (0, r.jsx)(eD, {}),
        renderStepFooter: (e) => (0, r.jsx)(t_, { ...e }),
    },
    [M.pn.VENMO_INFORMATION]: {
        renderStepBody: () => (0, r.jsx)(eH, {}),
        renderStepFooter: (e) => (0, r.jsx)(tT, { ...e }),
    },
    [M.pn.CASH_APP_INFORMATION]: {
        renderStepBody: () => (0, r.jsx)(ta, {}),
        renderStepFooter: (e) => {
            let { adyenPaymentData: t } = e;
            return (0, r.jsx)(tP, { adyenPaymentData: t });
        },
    },
    [M.pn.AWAITING_AUTHENTICATION]: { renderStepBody: () => (0, r.jsx)(eW.N, {}), renderStepFooter: () => null },
    [M.pn.ADDRESS]: {
        renderStepBody: (e) => (0, r.jsx)(eM, { addPaymentMethodStepState: e }),
        renderStepFooter: (e) => (0, r.jsx)(tp, { addPaymentMethodStepState: e }),
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
        } = et(),
        o = (0, e$.qv)(),
        { contextMetadata: u, refetchInvoicePreviews: c } = (0, T.t4)((e) => ({
            contextMetadata: e.contextMetadata,
            refetchInvoicePreviews: e.refetchInvoicePreviews,
        })),
        { activitySessionId: d } = (0, ez.V)(),
        {
            onBackFromPaymentElement: p,
            paymentElementLoaded: m,
            paymentElementSelectedType: h,
            stripeElementsRef: C,
            stripePaymentElementProps: f,
            stripeAddressElementProps: S,
            addressElementKey: E,
        } = i;
    return (0, r.jsx)(Q._i, {
        step: s,
        analyticsContext: null != n ? { activitySessionId: d, contextMetadata: u, analyticsData: n } : void 0,
        paymentElementSelectedType: h,
        stripeElementsRef: C,
        stripePaymentElementProps: f,
        stripeAddressElementProps: S,
        addressElementKey: E,
        billingAddressInfo: t.info,
        onSetupError: () => {
            (p(), a(), l(M.pn.CREDIT_CARD_INFORMATION));
        },
        paymentElementFooter: m
            ? (0, r.jsx)(eQ.Z4, {
                  className: tf.SO,
                  stackingBehavior: "stack",
                  onComplete: () => {
                      (c(), setTimeout(() => o(M.pn.REVIEW), 0));
                  },
              })
            : null,
    });
}
function tj(e) {
    let { billingAddressState: t, children: n } = e,
        { stripePaymentElementState: l, currentStep: i, paymentMethodSteps: a } = et(),
        { shouldRenderPaymentElement: s } = l;
    return (0, r.jsxs)(ek.Y, {
        className: tS.C9,
        staticClassName: tS.a2,
        animatedNodeClassName: tS.L2,
        fillParent: !0,
        overrideKey: s ? "combined_stripe_elements" : void 0,
        step: i,
        steps: a.steps,
        sideMargin: 20,
        children: [s && (0, r.jsx)(tb, { billingAddressState: t }), n],
    });
}
var tR = n(430993),
    tO = n(289873),
    tM = n(136857);
function tL(e) {
    let { body: t, paymentError: n, header: l, footer: i, isLoading: a } = e,
        { hasSelectedPaymentElementSourceType: s } = et(),
        o = "";
    return (
        null != n &&
            (0, M.h5)(n, s) &&
            ((o = n.message),
            n.code === tM.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED
                ? (o = B.intl.string(B.t.ypuSd8))
                : n.code === f.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (o = B.intl.string(B.t.mXMmWE))),
        (0, r.jsxs)(r.Fragment, {
            children: [
                l,
                (0, r.jsx)(tR.c, {
                    children: (0, r.jsxs)("div", {
                        className: tS.uK,
                        children: [
                            "" === o
                                ? null
                                : (0, r.jsx)("div", {
                                      className: tS.Nk,
                                      children: (0, r.jsx)(er.w, { type: "critical", message: o, role: "alert" }),
                                  }),
                            a ? (0, r.jsx)(tO.y, { className: tS.CI }) : t,
                        ],
                    }),
                }),
                i,
            ],
        })
    );
}
let tk = { name: "", cardNumber: "", expirationDate: "", cvc: "" },
    tw = { email: "", name: "", country: "", line1: "", line2: "", city: "", postalCode: "", state: "" };
function tD(e) {
    let {
            addPaymentMethodStepState: t,
            initialStep: n,
            prependSteps: l,
            appendSteps: i,
            onReturn: u,
            onComplete: c,
            onStepChange: p,
            header: m,
            analyticsLocation: h,
            analyticsData: C,
            overwriteSubscriptionPaymentSource: S = !1,
            useCheckoutStep: E = !1,
            isEligibleForTrial: I = !1,
            allowDesktopRedirectPurchase: g = !1,
            toastContent: y,
            continueSessionToInitialStep: A,
        } = e,
        v = (0, N.S)(),
        { contextMetadata: x, clearFetchSetupIntent: b } = (0, T.t4)((e) => ({
            contextMetadata: e.contextMetadata,
            clearFetchSetupIntent: e.clearFetchSetupIntent,
        }));
    (0, P.l0)(b);
    let w = a.useMemo(
            () => (n === M.pn.PAYMENT_ELEMENT ? (g ? M.pn.AWAITING_BROWSER_CHECKOUT : M.pn.PAYMENT_ELEMENT) : n),
            [n, g],
        ),
        {
            CREDIT_CARD_STEPS: D,
            CASH_APP_STEPS: U,
            PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: G,
        } = (function (e) {
            let { prependSteps: t, appendSteps: n } = e,
                [l, i, r, s, o, u, c, d, p] = (0, a.useMemo)(
                    () =>
                        (function (e, t) {
                            let { prependSteps: n, appendSteps: l } = t;
                            return e.map((e) => {
                                let { sharedStepsKey: t, methodType: i } = e;
                                return { steps: [...n, ...eL[t], ...l], methodType: i };
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
                m = (0, a.useMemo)(
                    () => ({
                        [eb.he.CARD]: r,
                        [eb.he.PAYPAL]: s,
                        [eb.he.PAYMENT_REQUEST]: i,
                        [eb.he.VENMO]: u,
                        [eb.he.CASH_APP]: p,
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
                    [l, r, s, u, i, o, p, c, d],
                );
            return { CREDIT_CARD_STEPS: r, CASH_APP_STEPS: p, PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: m };
        })({ prependSteps: l, appendSteps: i }),
        [F, H] = a.useState(w),
        [W, V] = a.useState(
            (function (e) {
                switch (e) {
                    case M.pn.CREDIT_CARD_INFORMATION:
                        return D;
                    case M.pn.CASH_APP_INFORMATION:
                        return U;
                    default:
                        return { steps: [M.pn.ADD_PAYMENT_STEPS] };
                }
            })(w),
        );
    a.useEffect(() => {
        (0, d.IV)();
    }, []);
    let Y = a.useCallback(
            function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                (H(e), t && p({ currentStep: F, toStep: e }));
            },
            [F, p],
        ),
        K = a.useCallback(
            (e) => {
                O.default.track(f.HAw.PAYMENT_FLOW_ADD_SOURCE_COMPLETED, {
                    load_id: x.loadId,
                    analytics_location: h,
                    payment_source_id: e.id,
                    payment_source_type: e.type,
                    payment_source_country: e.paymentMethodCountry,
                });
            },
            [x.loadId, h],
        ),
        Z = (0, s.bG)([j.A], () => j.A.error),
        q = a.useRef(Z);
    a.useEffect(() => {
        let e = q.current;
        ((q.current = Z),
            null != Z &&
                Z !== e &&
                O.default.track(f.HAw.PAYMENT_FLOW_ADD_SOURCE_ERROR, {
                    load_id: x.loadId,
                    analytics_location: h,
                    payment_source_type: W.methodType,
                    error_code: Z.code,
                    error_message: Z.message,
                }));
    }, [Z, x.loadId, h, W.methodType]);
    let z = a.useCallback(
            (e) => {
                (K(e),
                    (0, o.P0)({
                        text: void 0 !== y ? y : B.intl.string(B.t["VJPg+l"]),
                        variant: "success",
                        position: "bottom",
                    }),
                    c(F, e),
                    Y(w, !1));
            },
            [Y, w, F, c, y, K],
        ),
        { setPaymentSourceId: $, setBillingAddressState: Q } = t,
        J = a.useCallback(
            (e) => {
                ($(e.id), z(e));
            },
            [$, z],
        ),
        X = (0, s.bG)([j.A], () => j.A.redirectedPaymentSourceId),
        et = { completeSteps: J, setIsSubmittingCurrentStep: t.setIsSubmittingCurrentStep },
        en = a.useRef(et);
    (a.useEffect(() => {
        en.current = et;
    }),
        a.useEffect(() => {
            let { completeSteps: e, setIsSubmittingCurrentStep: t } = en.current;
            !(async function () {
                if (null == X) return;
                await (0, d.$o)();
                let n = R.A.getPaymentSource(X);
                null != n && (e(n), t(!1), j.A.clearRedirectedPaymentSourceId());
            })();
        }, [X]));
    let el = a.useCallback(() => {
            (V(D), Y(M.pn.PAYMENT_ELEMENT));
        }, [V, Y, D]),
        er = a.useCallback(
            (e) => {
                let { steps: t, methodType: n } = G[e];
                V({ steps: t, methodType: n === eb.he.UNKNOWN ? e : n });
            },
            [V, G],
        ),
        ea = a.useCallback(() => {
            V({ steps: [...l, ...ej, ...i], methodType: eb.he.CARD });
        }, [V, l, i]),
        es = a.useMemo(
            () => ({
                handleStepChange: Y,
                continueSessionToInitialStep: A,
                currentStep: F,
                paymentMethodSteps: W,
                setBillingAddressState: Q,
                redirectToCardInput: el,
                paymentElementOnNextCallback: er,
                setFallbackCardPaymentMethodSteps: ea,
                onComplete: c,
                onReturn: u,
                completeSteps: J,
                analyticsLocation: h,
                analyticsData: C,
                overwriteSubscriptionPaymentSource: S,
            }),
            [Y, A, F, W, Q, el, er, ea, h, c, u, J, C, S],
        );
    if (!(F in tN))
        throw new _.v({ message: `Unexpected Add Payment sub-step: ${F}`, extraSentryInformation: { currentStep: F } });
    let { renderStepBody: eo, renderStepFooter: eu } = tN[F],
        ec = eo(t),
        ed = eu(t);
    return E
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  I && (0, r.jsx)(L.A, { className: tf.At, isEligibleForTrial: I }),
                  (0, r.jsxs)(ee, {
                      ...es,
                      children: [
                          (0, r.jsxs)(k.dZ, {
                              children: [
                                  (0, r.jsx)(ei, { className: tf._8 }),
                                  (0, r.jsx)(tj, { billingAddressState: t.billingAddressState, children: ec }),
                              ],
                          }),
                          (0, r.jsx)(k.UX, { children: ed }),
                      ],
                  }),
              ],
          })
        : (0, r.jsx)(ee, {
              ...es,
              children: (0, r.jsx)(tL, {
                  isLoading: null == v,
                  paymentError: t.paymentError,
                  header: m,
                  body: (0, r.jsx)(tj, { billingAddressState: t.billingAddressState, children: ec }),
                  footer: ed,
              }),
          });
}
function tU(e) {
    let {
            defaultPaymentSourceId: t,
            paymentSources: n,
            hasFetchedPaymentSources: l,
        } = (0, s.cf)([R.A], () => ({
            defaultPaymentSourceId: void 0 !== e ? e : R.A.defaultPaymentSourceId,
            paymentSources: R.A.paymentSources,
            hasFetchedPaymentSources: R.A.hasFetchedPaymentSources,
        })),
        i = (0, s.bG)([F], () => F.cashAppPayComponent),
        r = (0, s.bG)([x.A], () => x.A.data?.allowed_payment_source_types ?? null);
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
                                : null != p.A.getClient()
                                  ? e()
                                  : setTimeout(l, 1e3);
                        }
                        u.h.subscribe("BRAINTREE_CREATE_CLIENT_SUCCESS", function e() {
                            (u.h.unsubscribe("BRAINTREE_CREATE_CLIENT_SUCCESS", e), setTimeout(l, 0));
                        });
                    })
                        .then(() => {
                            (E(), S());
                        })
                        .catch((e) => {
                            m.pM(e);
                        }),
                        u.h.dispatch({ type: "BRAINTREE_CREATE_CLIENT_SUCCESS", client: e }));
                })
                .catch(() => u.h.dispatch({ type: "BRAINTREE_CREATE_CLIENT_FAIL" }));
        }),
            l || (0, d.$o)());
    }),
        a.useEffect(() => {
            null == i && null != r && r.includes(eb.he.CASH_APP) && W();
        }, [r, i]));
    let [o, c] = a.useState(t),
        C = (0, v.Ay)(t);
    t !== C && null != t && null == o && c(t);
    let [I, g] = a.useState(() => ({ info: tk, isValid: !1 })),
        [y, _] = a.useState(() => ({ info: tw, isValid: !1 })),
        [N, O] = a.useState(""),
        [M, L] = a.useState(""),
        [k, w] = a.useState(() => ({ token: null })),
        [D, U, G, B, H] = (0, s.yK)([j.A], () => [
            j.A.braintreeEmail,
            j.A.braintreeNonce,
            j.A.error,
            j.A.venmoUsername,
            j.A.adyenPaymentData,
        ]),
        { paymentAuthError: V, isAwaitingPaymentAuthentication: Y } = (0, T.t4)((e) => ({
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
                (u.h.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e), (0, A.ET)());
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
        } = (0, T.t4)((e) => ({
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
            creditCardState: I,
            setCreditCardState: g,
            tokenState: k,
            setTokenState: w,
            billingAddressState: y,
            setBillingAddressState: _,
            isSubmittingCurrentStep: K,
            setIsSubmittingCurrentStep: Z,
            hasRedirectURL: q,
            setHasRedirectURL: z,
            braintreeEmail: D,
            braintreeNonce: U,
            venmoUsername: B,
            adyenPaymentData: H,
            paymentError: null != V ? V : G,
            paymentAuthenticationState: Y ? b.oc.PENDING : null != V ? b.oc.ERROR : b.oc.NONE,
            purchaseError: $,
            setPurchaseError: Q,
            purchaseErrorBlockRef: J,
            isAuthenticating: X,
            purchaseTokenAuthState: ee,
            purchaseTokenHash: et,
            epsBankState: M,
            setEpsBankState: L,
            p24BankState: N,
            setP24BankState: O,
        }
    );
}
