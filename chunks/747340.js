n.d(t, { Y: () => tD, p: () => tG });
var l,
    i,
    r = n(477900),
    a = n(582128),
    s = n(17928),
    o = n(691540),
    u = n(857250),
    c = n(97483),
    d = n(228366),
    m = n(636537),
    p = n(277984),
    h = n(70142),
    C = n(739508),
    f = n(184015),
    E = n(723702),
    S = n(652215);
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
function I() {
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
                        return m.Bo.post({
                            url: S.Rsh.BILLING_PAYPAL_BILLING_AGREEMENT_TOKENS,
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
                                    ((t = S.Gg3.BRAINTREE.KEY.startsWith("production_")
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
function g() {
    let e = h.A.getPayPalClient();
    if (null == e) throw Error("braintree paypal client must be initialized before calling this");
    d.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_START" });
    let t = Promise.resolve("");
    ((0, E.isDesktop)() && (t = (0, p.jf)(S.hes.PAYPAL)),
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
                n === S.Q7O.PAYPAL_POPUP_CLOSED || null == n
                    ? d.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED" })
                    : (d.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_FAIL", message: t, code: n }),
                      C.pM(Error(`Braintree Paypal Error: ${t} ${n} ${l}`)));
            }));
}
function A() {
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
                [S.Q7O.VENMO_APP_CANCELED, S.Q7O.VENMO_DESKTOP_CANCELED, S.Q7O.VENMO_CANCELED].includes(n)
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
    b = n(721836),
    j = n(783327),
    R = n(166532),
    M = n(69494),
    O = n(901930),
    L = n(482132),
    k = n(825755),
    w = n(295405),
    U = n(174459),
    D = n(251913),
    G = n(632088);
let F = null,
    B = null;
class H extends s.Ay.Store {
    static displayName = "AdyenStore";
    get client() {
        return F;
    }
    get cashAppPayComponent() {
        return B;
    }
}
let W = new H(d.h, {
    ADYEN_CREATE_CLIENT_SUCCESS: function (e) {
        let { client: t } = e;
        F = t;
    },
    ADYEN_TEARDOWN_CLIENT: function () {
        F = null;
    },
    ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS: function (e) {
        let { component: t } = e;
        B = t;
    },
});
var Y = n(375708);
async function V() {
    return await m.Bo.get({ url: S.Rsh.BILLING_ADYEN_PAYMENT_METHODS, oldFormErrors: !0, rejectWithError: !1 });
}
async function K() {
    try {
        let e = await V(),
            { default: t } = await Promise.all([n.e("494678"), n.e("540002")]).then(n.bind(n, 971193)),
            l = await t({
                environment: S.Gg3.ADYEN.KEY.startsWith("live_") ? "live" : "test",
                clientKey: S.Gg3.ADYEN.KEY,
                analytics: { enabled: !1 },
                paymentMethodsResponse: e.body,
            });
        (d.h.dispatch({ type: "ADYEN_CREATE_CLIENT_SUCCESS", client: l }),
            (function (e) {
                if (null != W.cashAppPayComponent) {
                    (q(), Z());
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
                                    case "Error during initialization":
                                    case "Error rendering CashAppPay button":
                                        ((n = !1), (t = Y.intl.string(Y.t.TJ8dDB)));
                                }
                                (0, p.i0)(e.message, n, t);
                            }
                        },
                    })
                    .mount(`#${G.h}`);
                d.h.dispatch({ type: "ADYEN_CREATE_CASH_APP_PAY_COMPONENT_SUCCESS", component: t });
            })(l));
    } catch (e) {
        ((0, C.pM)(e), d.h.dispatch({ type: "ADYEN_CREATE_CLIENT_FAIL" }));
    }
}
function Z() {
    let e = W.cashAppPayComponent;
    if (null == e) throw Error("Adyen CashAppPay component must be created before mounting.");
    try {
        e.mount(`#${G.h}`);
    } catch (e) {}
}
function q() {
    W.cashAppPayComponent?.unmount();
}
function z() {
    let e = W.cashAppPayComponent;
    if (null == e) throw Error("Adyen CashAppPay component must be created before submitting.");
    e.submit();
}
var Q = n(626584),
    $ = n(427262),
    J = n(667648);
let X = new Q.A("AddPaymentMethodStepContext.tsx"),
    ee = a.createContext(null);
function et(e) {
    let { children: t, ...n } = e,
        { handleStepChange: l, continueSessionToInitialStep: i, setBillingAddressState: s, currentStep: o } = n,
        u = a.useMemo(() => (0, $.Gn)(), []),
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
            (l(R.pn.ADDRESS), J.Ky.includes(o) && p());
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
var el = n(683071),
    ei = n(503698),
    er = n.n(ei),
    ea = n(305866),
    es = n(95477),
    eo = n(812745),
    eu = n(287809),
    ec = n(832208),
    ed = n(643909),
    em = n(661531),
    ep = n(602853),
    eh = n(281595),
    eC = n(513098),
    ef = n(151167);
let eE = function (e) {
    let t = a.useRef(null),
        { stripeType: n, flipped: l, updateCompleted: i, onFocus: s, onBlur: o } = e,
        [u, c] = a.useState(eo.Be.UNKNOWN),
        [d, m] = a.useState(!1),
        [p, h] = a.useState(!1),
        [C, f] = a.useState(null),
        [E, S] = a.useState({}),
        y = (0, ed.useElements)(),
        I = a.useCallback(() => {
            if (null != y)
                switch (n) {
                    case "cardNumber": {
                        let e = y.getElement(ed.CardNumberElement);
                        if (null == e) return;
                        (e.off("change"), e.off("focus"), e.off("blur"));
                        break;
                    }
                    case "cardExpiry": {
                        let e = y.getElement(ed.CardExpiryElement);
                        if (null == e) return;
                        (e.off("change"), e.off("focus"), e.off("blur"));
                        break;
                    }
                    case "cardCvc": {
                        let e = y.getElement(ed.CardCvcElement);
                        if (null == e) return;
                        (e.off("change"), e.off("focus"), e.off("blur"));
                    }
                }
        }, [y, n]),
        g = a.useCallback(
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
            if (null != y)
                switch (n) {
                    case "cardNumber": {
                        let e = y.getElement(ed.CardNumberElement);
                        if (null == e) return;
                        (e.on("change", (e) => {
                            (u !== e.brand && c(e.brand),
                                e.empty && p
                                    ? f(Y.intl.string(Y.t.eOIfuy))
                                    : null != e.error
                                      ? f(Y.intl.string(Y.t.x4pWtJ))
                                      : f(null),
                                g(e));
                        }),
                            e.on("focus", A),
                            e.on("blur", P));
                        break;
                    }
                    case "cardExpiry": {
                        let e = y.getElement(ed.CardExpiryElement);
                        if (null == e) return;
                        (e.on("change", (e) => {
                            (null != e.error || (e.empty && p) ? f(Y.intl.string(Y.t["9/zZdl"])) : f(null), g(e));
                        }),
                            e.on("focus", A),
                            e.on("blur", P));
                        break;
                    }
                    case "cardCvc": {
                        let e = y.getElement(ed.CardCvcElement);
                        if (null == e) return;
                        (e.on("change", (e) => {
                            (null != e.error || (e.empty && p) ? f(Y.intl.string(Y.t.ro4isZ)) : f(null), g(e));
                        }),
                            e.on("focus", A),
                            e.on("blur", P));
                    }
                }
        }, [P, g, A, u, y, p, n]);
    a.useEffect(
        () => (
            v(),
            () => {
                I();
            }
        ),
        [v, I],
    );
    let x = (0, ep.r)(em.A.colors.TEXT_SUBTLE).hex(),
        _ = (0, ep.r)(em.A.colors.TEXT_STRONG).hex();
    function T() {
        return er()(eC.vB, { [eC.Tn]: null !== C, [eC.iH]: d, [eC.yD]: "cardNumber" === n });
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
            className: eC.Zm,
            "data-stripe-type": n,
            children: [
                (0, r.jsx)("div", { ref: t, className: er()(eC.iw, ef.hF) }),
                (function () {
                    switch (n) {
                        case "cardNumber":
                            return (0, r.jsxs)("div", {
                                children: [
                                    (0, r.jsx)(eo.Ay, { className: eC.Ie, type: u, flipped: l }),
                                    (0, r.jsx)(ed.CardNumberElement, {
                                        options: { style: E, placeholder: Y.intl.string(Y.t.gPRHfw), disableLink: !1 },
                                        className: T(),
                                    }),
                                ],
                            });
                        case "cardExpiry":
                            return (0, r.jsx)(ed.CardExpiryElement, {
                                options: { style: E, placeholder: Y.intl.string(Y.t.xeEWQ6) },
                                className: T(),
                            });
                        case "cardCvc":
                            return (0, r.jsx)(ed.CardCvcElement, {
                                options: { style: E, placeholder: Y.intl.string(Y.t.wZz04F) },
                                className: T(),
                            });
                    }
                })(),
                (0, r.jsx)(eh.U, { error: C }),
            ],
        })
    );
};
var eS = n(719941),
    ey = n(782328);
let eI = function (e) {
    let { onCardInfoChange: t, error: n } = e,
        l = a.useRef(t),
        [i, s] = a.useState(!1),
        [o, u] = a.useState({}),
        [c, d] = a.useState({ name: "", country: "", postalCode: "" }),
        [m, p] = a.useState({}),
        [h, C] = a.useState({}),
        { setFocusLockDisabled: f } = a.useContext(ea.M);
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
            return ((e || m.name) && "" === c.name && (t.name = Y.intl.string(Y.t.lIkVsi)), t);
        },
        [m, c],
    );
    return (
        a.useEffect(() => {
            let e = o.cardNumber && o.cardExpiry && o.cardCvc && 0 === Object.keys(y(!0)).length;
            l.current({ name: c.name }, !!e);
        }, [o, c, y]),
        (0, r.jsxs)("div", {
            children: [
                eu.default.getCurrentUser()?.nsfwAllowed
                    ? (0, r.jsxs)("div", {
                          className: eS.Rm,
                          children: [
                              (0, r.jsx)("div", { className: er()(eo.y3.SMALL, eS.eo, eS.Ud) }),
                              (0, r.jsx)("div", { className: er()(eo.y3.SMALL, eS.DR, eS.Ud) }),
                              (0, r.jsx)("div", { className: er()(eo.y3.SMALL, eS.k4, eS.Ud) }),
                              (0, r.jsx)("div", { className: er()(eo.y3.SMALL, eS.a3, eS.Ud) }),
                              (0, r.jsx)("div", { className: er()(eo.y3.SMALL, eS.CY, eS.Ud) }),
                              (0, r.jsx)("div", { className: er()(eo.y3.SMALL, eS.Q5, eS.Ud) }),
                              (0, r.jsx)("div", { className: er()(eo.y3.SMALL, eS.YA, eS.Ud) }),
                          ],
                      })
                    : (0, r.jsxs)("div", {
                          className: eS.Rm,
                          children: [
                              (0, r.jsx)("div", { className: er()(eo.y3.SMALL, eS.aq, eS.Ud) }),
                              (0, r.jsx)("div", { className: er()(eo.y3.SMALL, eS.VX, eS.Ud) }),
                              (0, r.jsx)("div", { className: er()(eo.y3.SMALL, eS.Yi, eS.Ud) }),
                              (0, r.jsx)("div", { className: er()(eo.y3.SMALL, eS.qR, eS.Ud) }),
                              (0, r.jsx)("div", { className: er()(eo.y3.SMALL, eS.m2, eS.Ud) }),
                              (0, r.jsx)("div", { className: er()(eo.y3.SMALL, eS.Ij, eS.Ud) }),
                              (0, r.jsx)("div", { className: er()(eo.y3.SMALL, eS._V, eS.Ud) }),
                          ],
                      }),
                (0, r.jsx)(ec.A, {
                    form: [
                        {
                            fields: [
                                {
                                    id: "card-number",
                                    name: "cardNumber",
                                    title: () => Y.intl.string(Y.t.cVyJ3o),
                                    getClassNameForLayout: () => ey.c6,
                                    renderInput: () =>
                                        (0, r.jsx)(eE, {
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
                                    title: () => Y.intl.string(Y.t["CeBa/4"]),
                                    getClassNameForLayout: () => ey.ep,
                                    renderInput: () =>
                                        (0, r.jsx)(eE, {
                                            stripeType: "cardExpiry",
                                            updateCompleted: (e) => S("cardExpiry", e),
                                            onFocus: E,
                                        }),
                                },
                                {
                                    id: "card-cvc",
                                    name: "cardCvc",
                                    title: () => Y.intl.string(Y.t.Fd3rOz),
                                    getClassNameForLayout: () => ey.ep,
                                    renderInput: () =>
                                        (0, r.jsx)(eE, {
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
                                    title: () => Y.intl.string(Y.t.VUlFdU),
                                    autoComplete: "cc-name",
                                    placeholder: () => Y.intl.string(Y.t["yf7ms+"]),
                                    getClassNameForLayout: () => ey.c6,
                                    renderInput: (e) => (0, r.jsx)(es.k, { ...e }),
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
                            l[t] && "" === e ? "name" === t && (i.name = Y.intl.string(Y.t.lIkVsi)) : delete i[t],
                            d(n),
                            p(l),
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
var eg = n(198970),
    eA = n(116673),
    eP = n(773669),
    ev =
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
function ex(e) {
    if (null != e) {
        if (e.hasCardError()) return "credit_card_information";
        if (e.hasAddressError()) return "address";
    }
    return null;
}
var e_ = n(292234);
let eT = (e) => {
    let t,
        { billingAddressInfo: n, billingError: l, onBillingAddressChange: i, paymentSourceType: o } = e,
        u = null != l && (null == l.code || ex(l) === ev.ADDRESS),
        c = (0, s.bG)([eP.default], () => eP.default.locale);
    switch (o) {
        case S.hes.GIROPAY:
        case S.hes.PAYSAFE_CARD:
        case S.hes.GCASH:
        case S.hes.GRABPAY_MY:
        case S.hes.MOMO_WALLET:
        case S.hes.KAKAOPAY:
        case S.hes.GOPAY_WALLET:
        case S.hes.BANCONTACT:
            t = "en-US" === c ? eg.Ay.Layouts.MODAL_US_WITH_NAME : eg.Ay.Layouts.MODAL_INTL_WITH_NAME;
            break;
        case S.hes.VENMO:
        case S.hes.CASH_APP:
            t = eg.Ay.Layouts.MODAL_US_WITH_NAME;
            break;
        default:
            t = "en-US" === c ? eg.Ay.Layouts.MODAL_US : eg.Ay.Layouts.MODAL_INTL;
    }
    let d = (0, eA.z)();
    0 === n.country.length && null != d && d.length > 0 && (n.country = d[0]);
    let m = (0, s.bG)([eu.default], () => eu.default.getCurrentUser()?.storeCountry?.isLocked === !0)
        ? Y.intl.string(Y.t.Pg2hU0)
        : null;
    return (0, r.jsxs)(a.Fragment, {
        children: [
            u
                ? (0, r.jsx)("div", {
                      className: e_.QK,
                      children: (0, r.jsx)(el.w, { type: "critical", children: Y.intl.string(Y.t.vZ8y7l) }),
                  })
                : null,
            (0, r.jsx)(eg.Ay, {
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
var eN = n(818348);
let eb = [R.pn.CREDIT_CARD_INFORMATION, R.pn.ADDRESS];
function ej(e) {
    let { billingError: t, onCardInfoChange: n } = e,
        l = null != t && (null == t.code || ex(t) === ev.CREDIT_CARD_INFORMATION);
    return (0, r.jsxs)(a.Fragment, {
        children: [
            l
                ? (0, r.jsx)("div", {
                      className: e_.QK,
                      children: (0, r.jsx)(el.w, { type: "critical", children: Y.intl.string(Y.t["4vnhKV"]) }),
                  })
                : null,
            (0, r.jsx)(eI, { onCardInfoChange: n, error: t }),
        ],
    });
}
function eR(e) {
    let { billingAddressInfo: t, onBillingAddressChange: n, paymentSourceType: l } = e,
        i = (0, s.bG)([k.A], () => k.A.error);
    return (0, r.jsx)(eT, { billingAddressInfo: t, billingError: i, onBillingAddressChange: n, paymentSourceType: l });
}
function eM(e) {
    let { addPaymentMethodStepState: t } = e,
        { billingAddressState: n, setBillingAddressState: l } = t,
        { hasSelectedPaymentElementSourceType: i, paymentMethodSteps: a } = en(),
        s = a.methodType ?? eN.he.CARD;
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
let eO = {
    SHARED_ADD_PAYMENT_STEPS: [R.pn.PAYMENT_ELEMENT],
    SHARED_CREDIT_CARD_STEPS: [R.pn.PAYMENT_ELEMENT, R.pn.ADDRESS],
    SHARED_PAYPAL_STEPS: [R.pn.PAYMENT_ELEMENT, R.pn.PAYPAL_INFORMATION, R.pn.ADDRESS],
    SHARED_VENMO_STEPS: [R.pn.PAYMENT_ELEMENT, R.pn.VENMO_INFORMATION, R.pn.ADDRESS],
    SHARED_CASH_APP_STEPS: [R.pn.PAYMENT_ELEMENT, R.pn.CASH_APP_INFORMATION, R.pn.ADDRESS],
    SHARED_PRZELEWY24_STEPS: [R.pn.PAYMENT_ELEMENT, R.pn.PRZELEWY24_INFORMATION, R.pn.ADDRESS],
    SHARED_EPS_STEPS: [R.pn.PAYMENT_ELEMENT, R.pn.EPS_INFORMATION, R.pn.ADDRESS],
    SHARED_IDEAL_STEPS: [R.pn.PAYMENT_ELEMENT, R.pn.ADDRESS],
    SHARED_TYPE_AND_ADDRESS_STEPS: [R.pn.PAYMENT_ELEMENT, R.pn.ADDRESS],
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
        P(h.A.getPayPalClient(), { type: "BRAINTREE_TEARDOWN_PAYPAL_CLIENT" }).then(() => {
            null != h.A.getClient() && I();
        });
    }
    render() {
        let { braintreeEmail: e, paypalClient: t } = this.props;
        return (0, r.jsx)(es.k, {
            label: Y.intl.string(Y.t.QQBAos),
            leading: { type: "image", src: (0, eo.Nj)(eo.Ay.Types.PAYPAL) },
            value: e,
            readOnly: !0,
            placeholder: null == t ? Y.intl.string(Y.t.dte2M9) : Y.intl.string(Y.t.hopw7X),
        });
    }
}
let ew = s.Ay.connectStores([h.A, k.A], () => ({
    braintreeEmail: k.A.braintreeEmail,
    paypalClient: h.A.getPayPalClient(),
}))(ek);
var eU = n(297264),
    eD = n(834730),
    eG = n(351665);
class eF extends a.PureComponent {
    componentDidMount() {
        null != this.props.venmoClient && A();
    }
    componentDidUpdate(e) {
        null == e.venmoClient && null != this.props.venmoClient && A();
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
                (0, r.jsx)(eo.Ay, { type: eo.Ay.Types.VENMO, size: eo.y3.MEDIUM, className: eG.Z }),
                l
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(eU.D, {
                                  variant: e.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
                                  className: eG.y,
                                  children: Y.intl.format(Y.t.DowIre, { venmoUsername: e }),
                              }),
                              (0, r.jsx)(eD.E, {
                                  variant: "text-md/medium",
                                  className: eG.y,
                                  children: Y.intl.string(Y.t.kmEvnR),
                              }),
                          ],
                      })
                    : (0, r.jsx)(eD.E, {
                          variant: "text-md/medium",
                          className: eG.y,
                          children: null == n ? Y.intl.string(Y.t["2ouZDU"]) : Y.intl.string(Y.t.mIL6Jb),
                      }),
            ],
        });
    }
}
let eB = s.Ay.connectStores([h.A, k.A], () => ({
    venmoUsername: k.A.venmoUsername,
    venmoClient: h.A.getVenmoClient(),
}))(eF);
var eH = n(891197),
    eW = n(462887),
    eY = n(331322),
    eV = n(736653),
    eK = n(438983);
let eZ = function (e) {
    let t = (0, eV.Ay)(),
        n = a.useRef(null),
        [l, i] = a.useState({}),
        s = (0, ep.r)(em.A.colors.BACKGROUND_BASE_LOWER).hex();
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
                    borderRadius: em.A.radii.xs,
                },
            });
        }, [n, s]),
        e.type)
    ) {
        case eN.he.PRZELEWY24: {
            let i = (0, eW.M)(t) ? "/assets/f4150b3aed6c4679.svg" : "/assets/8b825aafb2e4dbed.svg",
                { onNameChange: a, onEmailChange: s, onP24BankChange: o, p24BankValue: u, billingAddressInfo: c } = e;
            return (0, r.jsx)("div", {
                className: eK.rf,
                children: (0, r.jsxs)(eY.B, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(es.k, {
                            label: Y.intl.string(Y.t["w/qqKK"]),
                            inputRef: n,
                            name: Y.intl.string(Y.t["w/qqKK"]),
                            placeholder: Y.intl.string(Y.t["w/qqKK"]),
                            onChange: (e) => s(e),
                            value: c.email,
                        }),
                        (0, r.jsx)(es.k, {
                            label: Y.intl.string(Y.t["yf7ms+"]),
                            name: Y.intl.string(Y.t["yf7ms+"]),
                            placeholder: Y.intl.string(Y.t["yf7ms+"]),
                            onChange: (e) => a(e),
                            value: c.name,
                        }),
                        (0, r.jsxs)(eY.B, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(eD.E, { variant: "text-sm/semibold", children: Y.intl.string(Y.t.De3b8t) }),
                                (0, r.jsx)(ed.P24BankElement, {
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
        case eN.he.EPS: {
            let { onAccountHolderNameChange: i, onEPSBankChange: a, epsBankValue: s, billingAddressInfo: o } = e,
                u = (0, eW.M)(t) ? "/assets/025b24b0055c8d81.svg" : "/assets/1dae7d71a65fd90f.svg";
            return (0, r.jsx)("div", {
                className: eK.rf,
                children: (0, r.jsxs)(eY.B, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(es.k, {
                            label: Y.intl.string(Y.t.sN3wrd),
                            inputRef: n,
                            name: Y.intl.string(Y.t.sN3wrd),
                            placeholder: Y.intl.string(Y.t.sN3wrd),
                            onChange: (e) => i(e),
                            value: o.name,
                        }),
                        (0, r.jsxs)(eY.B, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(eD.E, { variant: "text-sm/semibold", children: Y.intl.string(Y.t.dFyV07) }),
                                (0, r.jsx)(ed.EpsBankElement, {
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
var eq = n(31823),
    ez = n(883645),
    eQ = n(557026),
    e$ = n(19311),
    eJ = n(364840),
    eX = n(73825),
    e0 = n(558620),
    e1 = n(683433),
    e2 = n(36167),
    e4 = n(951305),
    e3 = (((i = {})[(i.UNKNOWN = 0)] = "UNKNOWN"), (i[(i.PENDING = 1)] = "PENDING"), (i[(i.DONE = 2)] = "DONE"), i);
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
let te = new e9(d.h, {
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
        } = (0, b.t4)((e) => ({
            setSelectedSkuId: e.setSelectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            contextMetadata: e.contextMetadata,
        })),
        {
            browserCheckoutState: d,
            browserCheckoutStateLoadId: m,
            browserCheckoutStateSkuId: h,
            browserCheckoutStatePlanId: C,
        } = (0, s.cf)([te], () => ({
            browserCheckoutState: te.browserCheckoutState,
            browserCheckoutStateLoadId: te.loadId,
            browserCheckoutStateSkuId: te.skuId,
            browserCheckoutStatePlanId: te.planId,
        })),
        f = (0, e0.A)(),
        { isGift: E } = (0, e4.Pv)(),
        [y, I] = a.useState(!1);
    switch (n) {
        case R.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
            t = S.do8.GOOGLE_PAY;
            break;
        case R.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
            t = S.do8.APPLE_PAY;
    }
    return (
        a.useEffect(() => {
            let e = setTimeout(() => {
                y ||
                    (I(!0),
                    (0, p.Ze)(c.loadId),
                    (0, e2.my)(
                        {
                            planId: f?.id ?? tt.gD.PREMIUM_MONTH_TIER_2,
                            isGift: E,
                            loadId: c.loadId,
                            paymentMethodType: t,
                        },
                        i,
                    ));
            }, 1e3);
            return () => clearTimeout(e);
        }, [f, E, c, i, I, y, t]),
        a.useEffect(() => {
            (null !== h && (tt.oz.includes(h) && ((0, eX.ur)(h), (0, p.hP)()), o(h)),
                null !== C && u(C),
                m === c.loadId && d === e3.DONE && l());
        }, [o, u, d, m, h, C, c, l]),
        (0, r.jsxs)("div", {
            className: tn.rf,
            children: [
                (0, r.jsx)(eU.D, { variant: "heading-xl/bold", children: Y.intl.string(Y.t.C4HYfy) }),
                (0, r.jsx)(eD.E, { variant: "text-md/normal", className: tn.h_, children: Y.intl.string(Y.t.xfG7Jp) }),
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
                (0, r.jsx)(e1.A, { onClick: n }),
                (0, r.jsx)(e1.F, { onClick: t, children: Y.intl.string(Y.t["4Qvmmj"]) }),
            ],
        }),
    });
}
var tr = n(678784);
function ta(e) {
    let { className: t } = e,
        n = (0, s.bG)([W], () => W.cashAppPayComponent),
        l = (0, s.bG)([k.A], () => k.A.adyenPaymentData);
    a.useEffect(
        () => (
            null == l && null != n && (Z(), z()),
            () => {
                q();
            }
        ),
        [l, n],
    );
    let i = l?.paymentMethod?.cashtag ?? "",
        o = null != l && "" !== i;
    return (0, r.jsxs)("div", {
        className: t,
        children: [
            (0, r.jsx)(eo.Ay, { type: eo.Ay.Types.CASH_APP, size: eo.y3.MEDIUM, className: tr.K }),
            o
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(eU.D, {
                              variant: i.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
                              className: tr.y,
                              children: Y.intl.format(Y.t["ze/1yE"], { cashtag: i }),
                          }),
                          (0, r.jsx)(eD.E, {
                              variant: "text-md/medium",
                              className: tr.y,
                              children: Y.intl.string(Y.t.VPOx7N),
                          }),
                      ],
                  })
                : (0, r.jsx)(eD.E, {
                      variant: "text-md/medium",
                      className: tr.y,
                      children: null == n ? Y.intl.string(Y.t["CgVe/w"]) : Y.intl.string(Y.t["1MqcjI"]),
                  }),
        ],
    });
}
var ts = n(908166),
    to = n(930767),
    tu = n(891640);
function tc(e) {
    return () => (null != k.A.error && (0, v.ET)(), e());
}
function td(e) {
    let { onPrimary: t, onBack: n, ...l } = e,
        i = t;
    null != t && (i = tc(t));
    let a = n;
    return (null != n && (a = tc(n)), (0, r.jsx)(e$.Ay, { ...l, onPrimary: i, onBack: a }));
}
let tm = new Q.A("AddPaymentMethod");
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
            lastConfirmedSetupIntentRef: p,
        } = a,
        h = (0, j.S)(),
        { createSetupIntent: C } = (0, ts.x)(),
        {
            isSubmittingCurrentStep: f,
            billingAddressState: E,
            setIsSubmittingCurrentStep: S,
            hasRedirectURL: y,
            setHasRedirectURL: I,
            isAuthenticating: g,
        } = t;
    async function A() {
        S(!0);
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
                stripe: h,
                shouldUsePaymentElement: s,
                stripeElements: n,
                lastConfirmedSetupIntentRef: p,
                createSetupIntent: C,
                overwriteSubscriptionPaymentSource: u,
            });
            ("redirect-url" === e.responseType ? I(e.hasRedirectURL) : l(e.paymentSource), y || S(!1));
        } catch (e) {
            (S(!1), tm.warn(`Error confirming submitting Address Step for Payment Source Type: ${P}`, e));
        }
    }
    let P = i.methodType,
        { backStep: v } = s
            ? { backStep: R.pn.PAYMENT_ELEMENT }
            : (function (e) {
                  switch (e) {
                      case eN.he.CARD:
                          return { backStep: R.pn.CREDIT_CARD_INFORMATION };
                      case eN.he.PAYPAL:
                          return { backStep: R.pn.PAYPAL_INFORMATION };
                      case eN.he.VENMO:
                          return { backStep: R.pn.VENMO_INFORMATION };
                      case eN.he.EPS:
                          return { backStep: R.pn.EPS_INFORMATION };
                      case eN.he.PRZELEWY24:
                          return { backStep: R.pn.PRZELEWY24_INFORMATION };
                      case eN.he.CASH_APP:
                          return { backStep: R.pn.CASH_APP_INFORMATION };
                      default:
                          return { backStep: R.pn.PAYMENT_ELEMENT };
                  }
              })(P),
        x = s ? () => d(void 0) : () => n(v);
    return (0, r.jsx)(td, {
        onBack: x,
        primaryCTA: e$.Ay.CTAType.CONTINUE,
        primaryText: Y.intl.string(Y.t.PDTjLN),
        primarySubmitting: f,
        primaryDisabled: !E.isValid || g,
        onPrimary: A,
    });
}
var th = n(648335);
let tC = new Q.A("PaymentElementStepFooter.tsx");
function tf(e) {
    let { addPaymentMethodStepState: t } = e,
        { setIsSubmittingCurrentStep: n, setBillingAddressState: l, isSubmittingCurrentStep: i } = t,
        s = (0, j.S)(),
        { paymentElementOnNextCallback: o, handleStepChange: u, stripePaymentElementState: c, onReturn: d } = en(),
        {
            paymentElementSelectedType: m,
            stripeElementsRef: h,
            remountAddressElement: C,
            onBackFromPaymentElement: f,
            paymentElementReady: E,
        } = c,
        S = a.useCallback(async () => {
            n(!0);
            try {
                if (null == m || !(0, th.eX)(m)) throw (0, p.ne)("Valid Payment Element source type not found", !0);
                o(m);
                let e = tu.F[m];
                if (null != e && null != e.submitPaymentElementStepHandler) {
                    (await e.submitPaymentElementStepHandler({
                        stripe: s,
                        stripeElements: h.current,
                        remountAddressElement: C,
                        setBillingAddressState: l,
                    }),
                        u(e.stepAfterPaymentElement ?? R.pn.ADDRESS));
                    return;
                }
                let t = (0, th.eI)(m);
                if (null != t) return void u(t);
                u(R.pn.ADDRESS);
            } catch (e) {
                tC.error("Error on submitting Payment Element step: ", e.message ?? JSON.stringify(e));
            } finally {
                n(!1);
            }
        }, [o, m, h, C, u, s, n, l]),
        y = a.useCallback(() => {
            (f(), null != d && d());
        }, [f, d]);
    return (0, r.jsx)(td, {
        onBack: y,
        primaryCTA: e$.Ay.CTAType.CONTINUE,
        primaryType: "submit",
        primaryText: Y.intl.string(Y.t.PDTjLN),
        primarySubmitting: i,
        primaryDisabled: !E,
        onPrimary: S,
    });
}
var tE = n(757089),
    tS = n(170870);
let ty = new Q.A("AddPaymentMethodSubstepRegistry.tsx");
function tI(e) {
    let { setCreditCardState: t, setBillingAddressState: n } = e,
        l = a.useCallback(
            (e, l) => {
                (t({ info: e, isValid: l }), n((t) => ({ ...t, info: { ...t.info, name: e.name } })));
            },
            [t, n],
        ),
        i = (0, s.bG)([k.A], () => k.A.error);
    return (0, r.jsx)(ej, { billingError: i, onCardInfoChange: l });
}
function tg(e) {
    let { setIsSubmittingCurrentStep: t, setTokenState: n, isSubmittingCurrentStep: l, creditCardState: i } = e,
        { handleStepChange: a, onReturn: s } = en(),
        o = (0, j.S)();
    async function u(e) {
        t(!0);
        try {
            let t = await (0, p.YJ)(o, e);
            (n({ token: t }), a(R.pn.ADDRESS));
        } catch (e) {
            ty.error(e.message ?? JSON.stringify(e));
        } finally {
            t(!1);
        }
    }
    let c = !i.isValid;
    return (0, r.jsx)(ed.ElementsConsumer, {
        children: (e) => {
            let { elements: t } = e;
            return (0, r.jsx)(td, {
                primaryCTA: e$.Ay.CTAType.CONTINUE,
                primaryType: "submit",
                primaryText: Y.intl.string(Y.t.PDTjLN),
                primarySubmitting: l,
                primaryDisabled: c,
                onPrimary: () => u(t),
                onBack: null != s ? () => s() : void 0,
            });
        },
    });
}
function tA() {
    let { currentStep: e, redirectToCardInput: t, onComplete: n } = en();
    return (0, r.jsx)(tl, { step: e, onPurchaseComplete: () => n(e), onHandoffFailure: t });
}
function tP() {
    let { redirectToCardInput: e, onReturn: t, stripePaymentElementState: n } = en(),
        { onBackFromPaymentElement: l } = n;
    return (0, r.jsx)(ti, {
        onPrimaryClick: e,
        onBackClick: function () {
            (l(), null != t && t());
        },
    });
}
function tv(e) {
    let { adyenPaymentData: t } = e,
        { defaultOnBackHandler: n, onSubmitCustomPaymentMethodSubStep: l } = en(),
        i = (0, s.bG)([W], () => W.cashAppPayComponent),
        a = null != t;
    return (0, r.jsx)(td, {
        onBack: () => n(eN.he.CASH_APP),
        primaryCTA: e$.Ay.CTAType.CONTINUE,
        primaryText: a ? Y.intl.string(Y.t.PDTjLN) : Y.intl.string(Y.t["9ALP8w"]),
        onPrimary: () => (a ? l() : z()),
        primaryDisabled: null == i,
    });
}
function tx(e) {
    let { defaultOnBackHandler: t, onSubmitCustomPaymentMethodSubStep: n } = en(),
        { billingAddressState: l, epsBankState: i } = e;
    return (0, r.jsx)(td, {
        onBack: () => t(eN.he.EPS),
        primaryCTA: e$.Ay.CTAType.CONTINUE,
        primaryText: Y.intl.string(Y.t.PDTjLN),
        primaryDisabled: void 0 === i || "" === i || "" === l.info.name,
        onPrimary: () => n(),
    });
}
function t_(e) {
    let { defaultOnBackHandler: t, onSubmitCustomPaymentMethodSubStep: n } = en(),
        { billingAddressState: l, p24BankState: i } = e;
    return (0, r.jsx)(td, {
        onBack: () => t(eN.he.PRZELEWY24),
        primaryCTA: e$.Ay.CTAType.CONTINUE,
        primaryText: Y.intl.string(Y.t.PDTjLN),
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
    return (0, r.jsx)(td, {
        onBack: () => t(eN.he.PAYPAL),
        primaryCTA: e$.Ay.CTAType.CONTINUE,
        primaryText: a ? Y.intl.string(Y.t.PDTjLN) : Y.intl.string(Y.t.Djzd7L),
        onPrimary: () => {
            let e;
            return a
                ? n()
                : void (null == (e = h.A.getLastURL())
                      ? g()
                      : (d.h.dispatch({ type: "BRAINTREE_TOKENIZE_PAYPAL_START" }), window.open(e)));
        },
    });
}
function tN(e) {
    let { venmoUsername: t, braintreeNonce: n } = e,
        l = 0 !== t.length && null != n,
        { defaultOnBackHandler: i, onSubmitCustomPaymentMethodSubStep: a } = en();
    return (0, r.jsx)(td, {
        onBack: () => i(eN.he.VENMO),
        primaryCTA: e$.Ay.CTAType.CONTINUE,
        primaryText: l ? Y.intl.string(Y.t.PDTjLN) : Y.intl.string(Y.t["4KoTLM"]),
        onPrimary: () => (l ? a() : void A()),
    });
}
let tb = {
    [R.pn.CREDIT_CARD_INFORMATION]: {
        renderStepBody: (e) => (0, r.jsx)(tI, { ...e }),
        renderStepFooter: (e) => (0, r.jsx)(tg, { ...e }),
    },
    [R.pn.AWAITING_BROWSER_CHECKOUT]: {
        renderStepBody: () => (0, r.jsx)(tA, {}),
        renderStepFooter: () => (0, r.jsx)(tP, {}),
    },
    [R.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY]: {
        renderStepBody: () => (0, r.jsx)(tA, {}),
        renderStepFooter: () => (0, r.jsx)(tP, {}),
    },
    [R.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY]: {
        renderStepBody: () => (0, r.jsx)(tA, {}),
        renderStepFooter: () => (0, r.jsx)(tP, {}),
    },
    [R.pn.PAYMENT_ELEMENT]: {
        renderStepBody: () => null,
        renderStepFooter: (e) => (0, r.jsx)(tf, { addPaymentMethodStepState: e }),
    },
    [R.pn.EPS_INFORMATION]: {
        renderStepBody: (e) => {
            let { setBillingAddressState: t, billingAddressState: n, setEpsBankState: l, epsBankState: i } = e;
            return (0, r.jsx)(eZ, {
                type: eN.he.EPS,
                onAccountHolderNameChange: (e) => t({ info: { ...n.info, name: e }, isValid: n.isValid }),
                onEPSBankChange: (e) => l(e),
                epsBankValue: i,
                billingAddressInfo: n.info,
            });
        },
        renderStepFooter: (e) => (0, r.jsx)(tx, { ...e }),
    },
    [R.pn.PRZELEWY24_INFORMATION]: {
        renderStepBody: (e) => {
            let { setBillingAddressState: t, billingAddressState: n, setP24BankState: l, p24BankState: i } = e;
            return (0, r.jsx)(eZ, {
                type: eN.he.PRZELEWY24,
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
    [R.pn.PAYPAL_INFORMATION]: {
        renderStepBody: () => (0, r.jsx)(ew, {}),
        renderStepFooter: (e) => (0, r.jsx)(tT, { ...e }),
    },
    [R.pn.VENMO_INFORMATION]: {
        renderStepBody: () => (0, r.jsx)(eB, {}),
        renderStepFooter: (e) => (0, r.jsx)(tN, { ...e }),
    },
    [R.pn.CASH_APP_INFORMATION]: {
        renderStepBody: () => (0, r.jsx)(ta, {}),
        renderStepFooter: (e) => {
            let { adyenPaymentData: t } = e;
            return (0, r.jsx)(tv, { adyenPaymentData: t });
        },
    },
    [R.pn.AWAITING_AUTHENTICATION]: { renderStepBody: () => (0, r.jsx)(eH.N, {}), renderStepFooter: () => null },
    [R.pn.ADDRESS]: {
        renderStepBody: (e) => (0, r.jsx)(eM, { addPaymentMethodStepState: e }),
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
        o = (0, ez.qv)(),
        { contextMetadata: u } = (0, b.t4)((e) => ({ contextMetadata: e.contextMetadata })),
        { activitySessionId: c } = (0, eq.V)(),
        {
            onBackFromPaymentElement: d,
            paymentElementLoaded: m,
            paymentElementSelectedType: p,
            stripeElementsRef: h,
            stripePaymentElementProps: C,
            stripeAddressElementProps: f,
            addressElementKey: E,
        } = i;
    return (0, r.jsx)(J._i, {
        step: s,
        analyticsContext: null != n ? { activitySessionId: c, contextMetadata: u, analyticsData: n } : void 0,
        paymentElementSelectedType: p,
        stripeElementsRef: h,
        stripePaymentElementProps: C,
        stripeAddressElementProps: f,
        addressElementKey: E,
        billingAddressInfo: t.info,
        onSetupError: () => {
            (d(), a(), l(R.pn.CREDIT_CARD_INFORMATION));
        },
        paymentElementFooter: m
            ? (0, r.jsx)(eQ.Z4, {
                  className: tE.SO,
                  stackingBehavior: "stack",
                  onComplete: () => {
                      setTimeout(() => o(R.pn.REVIEW), 0);
                  },
              })
            : null,
    });
}
function tR(e) {
    let { billingAddressState: t, children: n } = e,
        { stripePaymentElementState: l, currentStep: i, paymentMethodSteps: a } = en(),
        { shouldRenderPaymentElement: s } = l;
    return (0, r.jsxs)(eL.Y, {
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
var tM = n(430993),
    tO = n(289873),
    tL = n(136857);
function tk(e) {
    let { body: t, paymentError: n, header: l, footer: i, isLoading: a } = e,
        s = "";
    return (
        null != n &&
            null == (0, R.ou)(n) &&
            ((s = n.message),
            n.code === tL.tG.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED
                ? (s = Y.intl.string(Y.t.ypuSd8))
                : n.code === S.t02.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (s = Y.intl.string(Y.t.mXMmWE))),
        (0, r.jsxs)(r.Fragment, {
            children: [
                l,
                (0, r.jsx)(tM.c, {
                    children: (0, r.jsxs)("div", {
                        className: tS.uK,
                        children: [
                            "" === s
                                ? null
                                : (0, r.jsx)("div", {
                                      className: tS.Nk,
                                      children: (0, r.jsx)(el.w, { type: "critical", children: s }),
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
let tw = { name: "", cardNumber: "", expirationDate: "", cvc: "" },
    tU = { email: "", name: "", country: "", line1: "", line2: "", city: "", postalCode: "", state: "" };
function tD(e) {
    let {
            addPaymentMethodStepState: t,
            initialStep: n,
            prependSteps: l,
            appendSteps: i,
            onReturn: d,
            onComplete: m,
            onStepChange: h,
            header: C,
            analyticsLocation: f,
            analyticsData: E,
            overwriteSubscriptionPaymentSource: y = !1,
            useCheckoutStep: I = !1,
            isEligibleForTrial: g = !1,
            allowDesktopRedirectPurchase: A = !1,
            toastContent: P,
            continueSessionToInitialStep: v,
        } = e,
        _ = (0, j.S)(),
        { contextMetadata: T, clearFetchSetupIntent: D } = (0, b.t4)((e) => ({
            contextMetadata: e.contextMetadata,
            clearFetchSetupIntent: e.clearFetchSetupIntent,
        }));
    (0, x.l0)(D);
    let G = a.useMemo(
            () => (n === R.pn.PAYMENT_ELEMENT ? (A ? R.pn.AWAITING_BROWSER_CHECKOUT : R.pn.PAYMENT_ELEMENT) : n),
            [n, A],
        ),
        {
            CREDIT_CARD_STEPS: F,
            CASH_APP_STEPS: B,
            PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: H,
        } = (function (e) {
            let { prependSteps: t, appendSteps: n } = e,
                [l, i, r, s, o, u, c, d, m] = (0, a.useMemo)(
                    () =>
                        (function (e, t) {
                            let { prependSteps: n, appendSteps: l } = t;
                            return e.map((e) => {
                                let { sharedStepsKey: t, methodType: i } = e;
                                return { steps: [...n, ...eO[t], ...l], methodType: i };
                            });
                        })(
                            [
                                { sharedStepsKey: "SHARED_TYPE_AND_ADDRESS_STEPS", methodType: eN.he.UNKNOWN },
                                { sharedStepsKey: "SHARED_ADD_PAYMENT_STEPS", methodType: eN.he.PAYMENT_REQUEST },
                                { sharedStepsKey: "SHARED_CREDIT_CARD_STEPS", methodType: eN.he.CARD },
                                { sharedStepsKey: "SHARED_PAYPAL_STEPS", methodType: eN.he.PAYPAL },
                                { sharedStepsKey: "SHARED_IDEAL_STEPS", methodType: eN.he.IDEAL },
                                { sharedStepsKey: "SHARED_VENMO_STEPS", methodType: eN.he.VENMO },
                                { sharedStepsKey: "SHARED_PRZELEWY24_STEPS", methodType: eN.he.PRZELEWY24 },
                                { sharedStepsKey: "SHARED_EPS_STEPS", methodType: eN.he.EPS },
                                { sharedStepsKey: "SHARED_CASH_APP_STEPS", methodType: eN.he.CASH_APP },
                            ],
                            { prependSteps: t, appendSteps: n },
                        ),
                    [t, n],
                ),
                p = (0, a.useMemo)(
                    () => ({
                        [eN.he.CARD]: r,
                        [eN.he.PAYPAL]: s,
                        [eN.he.PAYMENT_REQUEST]: i,
                        [eN.he.VENMO]: u,
                        [eN.he.CASH_APP]: m,
                        [eN.he.IDEAL]: o,
                        [eN.he.PRZELEWY24]: c,
                        [eN.he.EPS]: d,
                        [eN.he.BANCONTACT]: l,
                        [eN.he.GOPAY_WALLET]: l,
                        [eN.he.KAKAOPAY]: l,
                        [eN.he.GCASH]: l,
                        [eN.he.PAYSAFE_CARD]: l,
                        [eN.he.GRABPAY_MY]: l,
                        [eN.he.MOMO_WALLET]: l,
                        [eN.he.PIX]: l,
                    }),
                    [l, r, s, u, i, o, m, c, d],
                );
            return { CREDIT_CARD_STEPS: r, CASH_APP_STEPS: m, PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: p };
        })({ prependSteps: l, appendSteps: i }),
        [W, V] = a.useState(G),
        [K, Z] = a.useState(
            (function (e) {
                switch (e) {
                    case R.pn.CREDIT_CARD_INFORMATION:
                        return F;
                    case R.pn.CASH_APP_INFORMATION:
                        return B;
                    default:
                        return { steps: [R.pn.ADD_PAYMENT_STEPS] };
                }
            })(G),
        );
    a.useEffect(() => {
        (0, p.IV)();
    }, []);
    let q = a.useCallback(
            function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                (V(e), t && h({ currentStep: W, toStep: e }));
            },
            [W, h],
        ),
        z = a.useCallback(
            (e) => {
                U.default.track(S.HAw.PAYMENT_FLOW_ADD_SOURCE_COMPLETED, {
                    load_id: T.loadId,
                    analytics_location: f,
                    payment_source_id: e.id,
                    payment_source_type: e.type,
                    payment_source_country: e.paymentMethodCountry,
                });
            },
            [T.loadId, f],
        ),
        Q = (0, s.bG)([k.A], () => k.A.error),
        $ = a.useRef(Q);
    a.useEffect(() => {
        let e = $.current;
        (($.current = Q),
            null != Q &&
                Q !== e &&
                U.default.track(S.HAw.PAYMENT_FLOW_ADD_SOURCE_ERROR, {
                    load_id: T.loadId,
                    analytics_location: f,
                    payment_source_type: K.methodType,
                    error_code: Q.code,
                    error_message: Q.message,
                }));
    }, [Q, T.loadId, f, K.methodType]);
    let J = a.useCallback(
            (e) => {
                (z(e),
                    (0, o.P0)(
                        (0, u.o)(void 0 !== P ? P : Y.intl.string(Y.t["VJPg+l"]), c.Ck.SUCCESS, {
                            position: c.xJ.BOTTOM,
                        }),
                    ),
                    m(W, e),
                    q(G, !1));
            },
            [q, G, W, m, P, z],
        ),
        { setPaymentSourceId: X, setBillingAddressState: ee } = t,
        en = a.useCallback(
            (e) => {
                (X(e.id), J(e));
            },
            [X, J],
        ),
        el = (0, s.bG)([k.A], () => k.A.redirectedPaymentSourceId),
        ei = { completeSteps: en, setIsSubmittingCurrentStep: t.setIsSubmittingCurrentStep },
        er = a.useRef(ei);
    (a.useEffect(() => {
        er.current = ei;
    }),
        a.useEffect(() => {
            let { completeSteps: e, setIsSubmittingCurrentStep: t } = er.current;
            !(async function () {
                if (null == el) return;
                await (0, p.$o)();
                let n = w.A.getPaymentSource(el);
                null != n && (e(n), t(!1), k.A.clearRedirectedPaymentSourceId());
            })();
        }, [el]));
    let ea = I ? (0, r.jsx)(O.A, { className: tE._8 }) : null,
        es = a.useCallback(() => {
            (Z(F), q(R.pn.PAYMENT_ELEMENT));
        }, [Z, q, F]),
        eo = a.useCallback(
            (e) => {
                let { steps: t, methodType: n } = H[e];
                Z({ steps: t, methodType: n === eN.he.UNKNOWN ? e : n });
            },
            [Z, H],
        ),
        eu = a.useCallback(() => {
            Z({ steps: [...l, ...eb, ...i], methodType: eN.he.CARD });
        }, [Z, l, i]),
        ec = a.useMemo(
            () => ({
                handleStepChange: q,
                continueSessionToInitialStep: v,
                currentStep: W,
                paymentMethodSteps: K,
                setBillingAddressState: ee,
                redirectToCardInput: es,
                paymentElementOnNextCallback: eo,
                setFallbackCardPaymentMethodSteps: eu,
                onComplete: m,
                onReturn: d,
                completeSteps: en,
                analyticsLocation: f,
                analyticsData: E,
                overwriteSubscriptionPaymentSource: y,
            }),
            [q, v, W, K, ee, es, eo, eu, f, m, d, en, E, y],
        );
    if (!(W in tb))
        throw new N.v({ message: `Unexpected Add Payment sub-step: ${W}`, extraSentryInformation: { currentStep: W } });
    let { renderStepBody: ed, renderStepFooter: em } = tb[W],
        ep = ed(t),
        eh = em(t);
    return I
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  g && (0, r.jsx)(M.A, { className: tE.At, isEligibleForTrial: g }),
                  (0, r.jsxs)(et, {
                      ...ec,
                      children: [
                          (0, r.jsxs)(L.dZ, {
                              children: [
                                  ea,
                                  (0, r.jsx)(tR, { billingAddressState: t.billingAddressState, children: ep }),
                              ],
                          }),
                          (0, r.jsx)(L.UX, { children: eh }),
                      ],
                  }),
              ],
          })
        : (0, r.jsx)(et, {
              ...ec,
              children: (0, r.jsx)(tk, {
                  isLoading: null == _,
                  paymentError: t.paymentError,
                  header: C,
                  body: (0, r.jsx)(tR, { billingAddressState: t.billingAddressState, children: ep }),
                  footer: eh,
              }),
          });
}
function tG(e) {
    let {
            defaultPaymentSourceId: t,
            paymentSources: n,
            hasFetchedPaymentSources: l,
        } = (0, s.cf)([w.A], () => ({
            defaultPaymentSourceId: void 0 !== e ? e : w.A.defaultPaymentSourceId,
            paymentSources: w.A.paymentSources,
            hasFetchedPaymentSources: w.A.hasFetchedPaymentSources,
        })),
        i = (0, s.bG)([W], () => W.cashAppPayComponent),
        r = (0, s.bG)([T.A], () => T.A.data?.allowed_payment_source_types ?? null);
    ((0, x.Ay)(() => {
        ((0, f.j)().then((e) => {
            e.client
                .create({ authorization: S.Gg3.BRAINTREE.KEY })
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
                            (I(), y());
                        })
                        .catch((e) => {
                            C.pM(e);
                        }),
                        d.h.dispatch({ type: "BRAINTREE_CREATE_CLIENT_SUCCESS", client: e }));
                })
                .catch(() => d.h.dispatch({ type: "BRAINTREE_CREATE_CLIENT_FAIL" }));
        }),
            l || (0, p.$o)());
    }),
        a.useEffect(() => {
            null == i && null != r && r.includes(eN.he.CASH_APP) && K();
        }, [r, i]));
    let [o, u] = a.useState(t),
        c = (0, _.Ay)(t);
    t !== c && null != t && null == o && u(t);
    let [m, E] = a.useState(() => ({ info: tw, isValid: !1 })),
        [g, A] = a.useState(() => ({ info: tU, isValid: !1 })),
        [P, N] = a.useState(""),
        [j, R] = a.useState(""),
        [M, O] = a.useState(() => ({ token: null })),
        [L, U, G, F, B] = (0, s.yK)([k.A], () => [
            k.A.braintreeEmail,
            k.A.braintreeNonce,
            k.A.error,
            k.A.venmoUsername,
            k.A.adyenPaymentData,
        ]),
        { paymentAuthError: H, isAwaitingPaymentAuthentication: Y } = (0, b.t4)((e) => ({
            paymentAuthError: e.paymentAuthError,
            isAwaitingPaymentAuthentication: e.isAwaitingPaymentAuthentication,
        }));
    a.useEffect(() => {
        function e(e) {
            let { billingAddress: t } = e;
            A({ info: t, isValid: t.country.length > 0 });
        }
        return (
            d.h.subscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e),
            () => {
                (d.h.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e), (0, v.ET)());
            }
        );
    }, []);
    let [V, Z] = a.useState(!1),
        [q, z] = a.useState(!1),
        [Q, $] = a.useState(null),
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
            null != Q && null != J.current && J.current.scrollIntoView({ behavior: "smooth" });
        }, [Q]),
        {
            paymentSources: n,
            paymentSourceId: o,
            hasFetchedPaymentSources: l,
            setPaymentSourceId: u,
            creditCardState: m,
            setCreditCardState: E,
            tokenState: M,
            setTokenState: O,
            billingAddressState: g,
            setBillingAddressState: A,
            isSubmittingCurrentStep: V,
            setIsSubmittingCurrentStep: Z,
            hasRedirectURL: q,
            setHasRedirectURL: z,
            braintreeEmail: L,
            braintreeNonce: U,
            venmoUsername: F,
            adyenPaymentData: B,
            paymentError: null != H ? H : G,
            paymentAuthenticationState: Y ? D.oc.PENDING : null != H ? D.oc.ERROR : D.oc.NONE,
            purchaseError: Q,
            setPurchaseError: $,
            purchaseErrorBlockRef: J,
            isAuthenticating: X,
            purchaseTokenAuthState: ee,
            purchaseTokenHash: et,
            epsBankState: j,
            setEpsBankState: R,
            p24BankState: P,
            setP24BankState: N,
        }
    );
}
