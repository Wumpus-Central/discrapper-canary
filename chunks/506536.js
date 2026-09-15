n.d(t, { Y: () => tD, _: () => tG });
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
var Q = n(643909),
    $ = n(685094),
    J = n(95477),
    X = n(812745);
class ee extends a.PureComponent {
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
        return (0, r.jsx)(J.k, {
            label: Y.intl.string(Y.t.QQBAos),
            leading: { type: "image", src: (0, X.Nj)(X.Ay.Types.PAYPAL) },
            value: e,
            readOnly: !0,
            placeholder: null == t ? Y.intl.string(Y.t.dte2M9) : Y.intl.string(Y.t.hopw7X),
        });
    }
}
let et = s.Ay.connectStores([h.A, k.A], () => ({
    braintreeEmail: k.A.braintreeEmail,
    paypalClient: h.A.getPayPalClient(),
}))(ee);
var en = n(297264),
    el = n(834730),
    ei = n(351665);
class er extends a.PureComponent {
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
                (0, r.jsx)(X.Ay, { type: X.Ay.Types.VENMO, size: X.y3.MEDIUM, className: ei.Z }),
                l
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)(en.D, {
                                  variant: e.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
                                  className: ei.y,
                                  children: Y.intl.format(Y.t.DowIre, { venmoUsername: e }),
                              }),
                              (0, r.jsx)(el.E, {
                                  variant: "text-md/medium",
                                  className: ei.y,
                                  children: Y.intl.string(Y.t.kmEvnR),
                              }),
                          ],
                      })
                    : (0, r.jsx)(el.E, {
                          variant: "text-md/medium",
                          className: ei.y,
                          children: null == n ? Y.intl.string(Y.t["2ouZDU"]) : Y.intl.string(Y.t.mIL6Jb),
                      }),
            ],
        });
    }
}
let ea = s.Ay.connectStores([h.A, k.A], () => ({
    venmoUsername: k.A.venmoUsername,
    venmoClient: h.A.getVenmoClient(),
}))(er);
var es = n(891197),
    eo = n(462887),
    eu = n(602853),
    ec = n(661531),
    ed = n(331322),
    em = n(736653),
    ep = n(818348),
    eh = n(438983);
let eC = function (e) {
    let t = (0, em.Ay)(),
        n = a.useRef(null),
        [l, i] = a.useState({}),
        s = (0, eu.r)(ec.A.colors.BACKGROUND_BASE_LOWER).hex();
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
                    borderRadius: ec.A.radii.xs,
                },
            });
        }, [n, s]),
        e.type)
    ) {
        case ep.he.PRZELEWY24: {
            let i = (0, eo.M)(t) ? "/assets/f4150b3aed6c4679.svg" : "/assets/8b825aafb2e4dbed.svg",
                { onNameChange: a, onEmailChange: s, onP24BankChange: o, p24BankValue: u, billingAddressInfo: c } = e;
            return (0, r.jsx)("div", {
                className: eh.rf,
                children: (0, r.jsxs)(ed.B, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(J.k, {
                            label: Y.intl.string(Y.t["w/qqKK"]),
                            inputRef: n,
                            name: Y.intl.string(Y.t["w/qqKK"]),
                            placeholder: Y.intl.string(Y.t["w/qqKK"]),
                            onChange: (e) => s(e),
                            value: c.email,
                        }),
                        (0, r.jsx)(J.k, {
                            label: Y.intl.string(Y.t["yf7ms+"]),
                            name: Y.intl.string(Y.t["yf7ms+"]),
                            placeholder: Y.intl.string(Y.t["yf7ms+"]),
                            onChange: (e) => a(e),
                            value: c.name,
                        }),
                        (0, r.jsxs)(ed.B, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(el.E, { variant: "text-sm/semibold", children: Y.intl.string(Y.t.De3b8t) }),
                                (0, r.jsx)(Q.P24BankElement, {
                                    options: { value: u, style: l },
                                    onChange: (e) => o(e.value),
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
        case ep.he.EPS: {
            let { onAccountHolderNameChange: i, onEPSBankChange: a, epsBankValue: s, billingAddressInfo: o } = e,
                u = (0, eo.M)(t) ? "/assets/025b24b0055c8d81.svg" : "/assets/1dae7d71a65fd90f.svg";
            return (0, r.jsx)("div", {
                className: eh.rf,
                children: (0, r.jsxs)(ed.B, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(J.k, {
                            label: Y.intl.string(Y.t.sN3wrd),
                            inputRef: n,
                            name: Y.intl.string(Y.t.sN3wrd),
                            placeholder: Y.intl.string(Y.t.sN3wrd),
                            onChange: (e) => i(e),
                            value: o.name,
                        }),
                        (0, r.jsxs)(ed.B, {
                            gap: 4,
                            children: [
                                (0, r.jsx)(el.E, { variant: "text-sm/semibold", children: Y.intl.string(Y.t.dFyV07) }),
                                (0, r.jsx)(Q.EpsBankElement, {
                                    options: { value: s, style: l },
                                    onChange: (e) => a(e.value),
                                }),
                                (0, r.jsx)("div", {
                                    className: eh.je,
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
var ef = n(31823),
    eE = n(883645),
    eS = n(557026),
    ey = n(626584),
    eI = n(19311),
    eg = n(364840),
    eA = n(73825),
    eP = n(558620),
    ev = n(683433),
    ex = n(36167),
    e_ = n(951305),
    eT = (((l = {})[(l.UNKNOWN = 0)] = "UNKNOWN"), (l[(l.PENDING = 1)] = "PENDING"), (l[(l.DONE = 2)] = "DONE"), l);
let eN = 0,
    eb = null,
    ej = null,
    eR = null;
class eM extends s.Ay.Store {
    static displayName = "BrowserCheckoutStateStore";
    get browserCheckoutState() {
        return eN;
    }
    get loadId() {
        return eb;
    }
    get skuId() {
        return ej;
    }
    get planId() {
        return eR;
    }
}
let eO = new eM(d.h, {
    USER_PAYMENT_BROWSER_CHECKOUT_STARTED: function (e) {
        ((eN = 1), (eb = e.loadId));
    },
    USER_PAYMENT_BROWSER_CHECKOUT_DONE: function (e) {
        eb === e.loadId && ((ej = e.skuId ?? null), (eR = e.skuSubscriptionPlanId ?? null), (eN = 2));
    },
});
var eL = n(202541),
    ek = n(731075);
function ew(e) {
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
        } = (0, s.cf)([eO], () => ({
            browserCheckoutState: eO.browserCheckoutState,
            browserCheckoutStateLoadId: eO.loadId,
            browserCheckoutStateSkuId: eO.skuId,
            browserCheckoutStatePlanId: eO.planId,
        })),
        f = (0, eP.A)(),
        { isGift: E } = (0, e_.Pv)(),
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
                    (0, ex.my)(
                        {
                            planId: f?.id ?? eL.gD.PREMIUM_MONTH_TIER_2,
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
            (null !== h && (eL.oz.includes(h) && ((0, eA.ur)(h), (0, p.hP)()), o(h)),
                null !== C && u(C),
                m === c.loadId && d === eT.DONE && l());
        }, [o, u, d, m, h, C, c, l]),
        (0, r.jsxs)("div", {
            className: ek.rf,
            children: [
                (0, r.jsx)(en.D, { variant: "heading-xl/bold", children: Y.intl.string(Y.t.C4HYfy) }),
                (0, r.jsx)(el.E, { variant: "text-md/normal", className: ek.h_, children: Y.intl.string(Y.t.xfG7Jp) }),
            ],
        })
    );
}
function eU(e) {
    let { onPrimaryClick: t, onBackClick: n } = e;
    return (0, r.jsx)(eg.j, {
        children: (0, r.jsxs)("div", {
            className: ek.kL,
            children: [
                (0, r.jsx)(ev.A, { onClick: n }),
                (0, r.jsx)(ev.F, { onClick: t, children: Y.intl.string(Y.t["4Qvmmj"]) }),
            ],
        }),
    });
}
var eD = n(678784);
function eG(e) {
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
            (0, r.jsx)(X.Ay, { type: X.Ay.Types.CASH_APP, size: X.y3.MEDIUM, className: eD.K }),
            o
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(en.D, {
                              variant: i.length < 25 ? "heading-xl/bold" : "heading-lg/bold",
                              className: eD.y,
                              children: Y.intl.format(Y.t["ze/1yE"], { cashtag: i }),
                          }),
                          (0, r.jsx)(el.E, {
                              variant: "text-md/medium",
                              className: eD.y,
                              children: Y.intl.string(Y.t.VPOx7N),
                          }),
                      ],
                  })
                : (0, r.jsx)(el.E, {
                      variant: "text-md/medium",
                      className: eD.y,
                      children: null == n ? Y.intl.string(Y.t["CgVe/w"]) : Y.intl.string(Y.t["1MqcjI"]),
                  }),
        ],
    });
}
var eF = n(908166),
    eB = n(930767),
    eH = n(891640);
function eW(e) {
    return () => (null != k.A.error && (0, v.ET)(), e());
}
function eY(e) {
    let { onPrimary: t, onBack: n, ...l } = e,
        i = t;
    null != t && (i = eW(t));
    let a = n;
    return (null != n && (a = eW(n)), (0, r.jsx)(eI.Ay, { ...l, onPrimary: i, onBack: a }));
}
var eV = n(427262),
    eK = n(667648);
let eZ = new ey.A("AddPaymentStepContext.tsx"),
    eq = a.createContext(null);
function ez(e) {
    let { children: t, ...n } = e,
        { handleStepChange: l, continueSessionToInitialStep: i, setBillingAddressState: s, currentStep: o } = n,
        u = a.useMemo(() => (0, eV.Gn)(), []),
        c = a.useCallback(
            (e, t) => {
                s((n) => ({ info: { ...n.info, ...e }, isValid: t }));
            },
            [s],
        ),
        d = (0, eK.wD)({
            step: o,
            continueSessionToInitialStep: i,
            handleStepChange: l,
            logger: eZ,
            shouldLogOnChangeEvents: u || !1,
            onBillingAddressChange: c,
        }),
        { returnToPaymentElementStep: m, remountAddressElement: p } = d,
        h = a.useCallback(() => {
            (l(R.pn.ADDRESS), eK.Ky.includes(o) && p());
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
    return (0, r.jsx)(eq.Provider, { value: f, children: t });
}
function eQ() {
    let e = a.useContext(eq);
    if (null == e)
        throw Error("useAddPaymentStepInternalContext must be used within an AddPaymentStepInternalContextProvider");
    return e;
}
let e$ = new ey.A("AddPaymentMethod");
function eJ(e) {
    let { paymentModalArgs: t } = e,
        {
            handleStepChange: n,
            completeSteps: l,
            paymentMethodSteps: i,
            stripePaymentElementState: a,
            hasSelectedPaymentElementSourceType: s,
            analyticsLocation: o,
            overwriteSubscriptionPaymentSource: u,
        } = eQ(),
        {
            paymentElementSelectedType: c,
            returnToPaymentElementStep: d,
            stripeElementsRef: m,
            lastConfirmedSetupIntentRef: p,
        } = a,
        h = (0, j.S)(),
        { createSetupIntent: C } = (0, eF.x)(),
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
            r = null != e && (0, eH.i)(e) ? eH.F[e] : null;
        if (null == r)
            throw new eB.v({
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
            (S(!1), e$.warn(`Error confirming submitting Address Step for Payment Source Type: ${P}`, e));
        }
    }
    let P = i.methodType,
        { backStep: v } = s
            ? { backStep: R.pn.PAYMENT_ELEMENT }
            : (function (e) {
                  switch (e) {
                      case ep.he.CARD:
                          return { backStep: R.pn.CREDIT_CARD_INFORMATION };
                      case ep.he.PAYPAL:
                          return { backStep: R.pn.PAYPAL_INFORMATION };
                      case ep.he.VENMO:
                          return { backStep: R.pn.VENMO_INFORMATION };
                      case ep.he.EPS:
                          return { backStep: R.pn.EPS_INFORMATION };
                      case ep.he.PRZELEWY24:
                          return { backStep: R.pn.PRZELEWY24_INFORMATION };
                      case ep.he.CASH_APP:
                          return { backStep: R.pn.CASH_APP_INFORMATION };
                      default:
                          return { backStep: R.pn.PAYMENT_ELEMENT };
                  }
              })(P),
        x = s ? () => d(void 0) : () => n(v);
    return (0, r.jsx)(eY, {
        onBack: x,
        primaryCTA: eI.Ay.CTAType.CONTINUE,
        primaryText: Y.intl.string(Y.t.PDTjLN),
        primarySubmitting: f,
        primaryDisabled: !E.isValid || g,
        onPrimary: A,
    });
}
var eX = n(683071),
    e0 = n(503698),
    e1 = n.n(e0),
    e2 = n(305866),
    e4 = n(287809),
    e3 = n(832208),
    e7 = n(281595),
    e6 = n(513098),
    e5 = n(151167);
let e8 = function (e) {
    let t = a.useRef(null),
        { stripeType: n, flipped: l, updateCompleted: i, onFocus: s, onBlur: o } = e,
        [u, c] = a.useState(X.Be.UNKNOWN),
        [d, m] = a.useState(!1),
        [p, h] = a.useState(!1),
        [C, f] = a.useState(null),
        [E, S] = a.useState({}),
        y = (0, Q.useElements)(),
        I = a.useCallback(() => {
            if (null != y)
                switch (n) {
                    case "cardNumber": {
                        let e = y.getElement(Q.CardNumberElement);
                        if (null == e) return;
                        (e.off("change"), e.off("focus"), e.off("blur"));
                        break;
                    }
                    case "cardExpiry": {
                        let e = y.getElement(Q.CardExpiryElement);
                        if (null == e) return;
                        (e.off("change"), e.off("focus"), e.off("blur"));
                        break;
                    }
                    case "cardCvc": {
                        let e = y.getElement(Q.CardCvcElement);
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
                        let e = y.getElement(Q.CardNumberElement);
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
                        let e = y.getElement(Q.CardExpiryElement);
                        if (null == e) return;
                        (e.on("change", (e) => {
                            (null != e.error || (e.empty && p) ? f(Y.intl.string(Y.t["9/zZdl"])) : f(null), g(e));
                        }),
                            e.on("focus", A),
                            e.on("blur", P));
                        break;
                    }
                    case "cardCvc": {
                        let e = y.getElement(Q.CardCvcElement);
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
    let x = (0, eu.r)(ec.A.colors.TEXT_SUBTLE).hex(),
        _ = (0, eu.r)(ec.A.colors.TEXT_STRONG).hex();
    function T() {
        return e1()(e6.vB, { [e6.Tn]: null !== C, [e6.iH]: d, [e6.yD]: "cardNumber" === n });
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
            className: e6.Zm,
            "data-stripe-type": n,
            children: [
                (0, r.jsx)("div", { ref: t, className: e1()(e6.iw, e5.hF) }),
                (function () {
                    switch (n) {
                        case "cardNumber":
                            return (0, r.jsxs)("div", {
                                children: [
                                    (0, r.jsx)(X.Ay, { className: e6.Ie, type: u, flipped: l }),
                                    (0, r.jsx)(Q.CardNumberElement, {
                                        options: { style: E, placeholder: Y.intl.string(Y.t.gPRHfw), disableLink: !1 },
                                        className: T(),
                                    }),
                                ],
                            });
                        case "cardExpiry":
                            return (0, r.jsx)(Q.CardExpiryElement, {
                                options: { style: E, placeholder: Y.intl.string(Y.t.xeEWQ6) },
                                className: T(),
                            });
                        case "cardCvc":
                            return (0, r.jsx)(Q.CardCvcElement, {
                                options: { style: E, placeholder: Y.intl.string(Y.t.wZz04F) },
                                className: T(),
                            });
                    }
                })(),
                (0, r.jsx)(e7.U, { error: C }),
            ],
        })
    );
};
var e9 = n(719941),
    te = n(782328);
let tt = function (e) {
    let { onCardInfoChange: t, error: n } = e,
        l = a.useRef(t),
        [i, s] = a.useState(!1),
        [o, u] = a.useState({}),
        [c, d] = a.useState({ name: "", country: "", postalCode: "" }),
        [m, p] = a.useState({}),
        [h, C] = a.useState({}),
        { setFocusLockDisabled: f } = a.useContext(e2.M);
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
                e4.default.getCurrentUser()?.nsfwAllowed
                    ? (0, r.jsxs)("div", {
                          className: e9.Rm,
                          children: [
                              (0, r.jsx)("div", { className: e1()(X.y3.SMALL, e9.eo, e9.Ud) }),
                              (0, r.jsx)("div", { className: e1()(X.y3.SMALL, e9.DR, e9.Ud) }),
                              (0, r.jsx)("div", { className: e1()(X.y3.SMALL, e9.k4, e9.Ud) }),
                              (0, r.jsx)("div", { className: e1()(X.y3.SMALL, e9.a3, e9.Ud) }),
                              (0, r.jsx)("div", { className: e1()(X.y3.SMALL, e9.CY, e9.Ud) }),
                              (0, r.jsx)("div", { className: e1()(X.y3.SMALL, e9.Q5, e9.Ud) }),
                              (0, r.jsx)("div", { className: e1()(X.y3.SMALL, e9.YA, e9.Ud) }),
                          ],
                      })
                    : (0, r.jsxs)("div", {
                          className: e9.Rm,
                          children: [
                              (0, r.jsx)("div", { className: e1()(X.y3.SMALL, e9.aq, e9.Ud) }),
                              (0, r.jsx)("div", { className: e1()(X.y3.SMALL, e9.VX, e9.Ud) }),
                              (0, r.jsx)("div", { className: e1()(X.y3.SMALL, e9.Yi, e9.Ud) }),
                              (0, r.jsx)("div", { className: e1()(X.y3.SMALL, e9.qR, e9.Ud) }),
                              (0, r.jsx)("div", { className: e1()(X.y3.SMALL, e9.m2, e9.Ud) }),
                              (0, r.jsx)("div", { className: e1()(X.y3.SMALL, e9.Ij, e9.Ud) }),
                              (0, r.jsx)("div", { className: e1()(X.y3.SMALL, e9._V, e9.Ud) }),
                          ],
                      }),
                (0, r.jsx)(e3.A, {
                    form: [
                        {
                            fields: [
                                {
                                    id: "card-number",
                                    name: "cardNumber",
                                    title: () => Y.intl.string(Y.t.cVyJ3o),
                                    getClassNameForLayout: () => te.c6,
                                    renderInput: () =>
                                        (0, r.jsx)(e8, {
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
                                    getClassNameForLayout: () => te.ep,
                                    renderInput: () =>
                                        (0, r.jsx)(e8, {
                                            stripeType: "cardExpiry",
                                            updateCompleted: (e) => S("cardExpiry", e),
                                            onFocus: E,
                                        }),
                                },
                                {
                                    id: "card-cvc",
                                    name: "cardCvc",
                                    title: () => Y.intl.string(Y.t.Fd3rOz),
                                    getClassNameForLayout: () => te.ep,
                                    renderInput: () =>
                                        (0, r.jsx)(e8, {
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
                                    getClassNameForLayout: () => te.c6,
                                    renderInput: (e) => (0, r.jsx)(J.k, { ...e }),
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
var tn = n(198970),
    tl = n(116673),
    ti = n(773669),
    tr =
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
function ta(e) {
    if (null != e) {
        if (e.hasCardError()) return "credit_card_information";
        if (e.hasAddressError()) return "address";
    }
    return null;
}
var ts = n(292234);
let to = (e) => {
        let t,
            { billingAddressInfo: n, billingError: l, onBillingAddressChange: i, paymentSourceType: o } = e,
            u = null != l && (null == l.code || ta(l) === tr.ADDRESS),
            c = (0, s.bG)([ti.default], () => ti.default.locale);
        switch (o) {
            case S.hes.GIROPAY:
            case S.hes.PAYSAFE_CARD:
            case S.hes.GCASH:
            case S.hes.GRABPAY_MY:
            case S.hes.MOMO_WALLET:
            case S.hes.KAKAOPAY:
            case S.hes.GOPAY_WALLET:
            case S.hes.BANCONTACT:
                t = "en-US" === c ? tn.Ay.Layouts.MODAL_US_WITH_NAME : tn.Ay.Layouts.MODAL_INTL_WITH_NAME;
                break;
            case S.hes.VENMO:
            case S.hes.CASH_APP:
                t = tn.Ay.Layouts.MODAL_US_WITH_NAME;
                break;
            default:
                t = "en-US" === c ? tn.Ay.Layouts.MODAL_US : tn.Ay.Layouts.MODAL_INTL;
        }
        let d = (0, tl.z)();
        0 === n.country.length && null != d && d.length > 0 && (n.country = d[0]);
        let m = (0, s.bG)([e4.default], () => e4.default.getCurrentUser()?.storeCountry?.isLocked === !0)
            ? Y.intl.string(Y.t.Pg2hU0)
            : null;
        return (0, r.jsxs)(a.Fragment, {
            children: [
                u
                    ? (0, r.jsx)("div", {
                          className: ts.QK,
                          children: (0, r.jsx)(eX.w, { type: "critical", children: Y.intl.string(Y.t.vZ8y7l) }),
                      })
                    : null,
                (0, r.jsx)(tn.Ay, {
                    className: ts.__invalid_formItem,
                    onBillingAddressChange: i,
                    error: l,
                    layout: t,
                    allowedBillingAddressCountries: d,
                    countryHelperText: m,
                    ...n,
                }),
            ],
        });
    },
    tu = [R.pn.CREDIT_CARD_INFORMATION, R.pn.ADDRESS];
function tc(e) {
    let { billingError: t, onCardInfoChange: n } = e,
        l = null != t && (null == t.code || ta(t) === tr.CREDIT_CARD_INFORMATION);
    return (0, r.jsxs)(a.Fragment, {
        children: [
            l
                ? (0, r.jsx)("div", {
                      className: ts.QK,
                      children: (0, r.jsx)(eX.w, { type: "critical", children: Y.intl.string(Y.t["4vnhKV"]) }),
                  })
                : null,
            (0, r.jsx)(tt, { onCardInfoChange: n, error: t }),
        ],
    });
}
function td(e) {
    let { billingAddressInfo: t, onBillingAddressChange: n, paymentSourceType: l } = e,
        i = (0, s.bG)([k.A], () => k.A.error);
    return (0, r.jsx)(to, { billingAddressInfo: t, billingError: i, onBillingAddressChange: n, paymentSourceType: l });
}
function tm(e) {
    let { paymentModalArgs: t } = e,
        { billingAddressState: n, setBillingAddressState: l } = t,
        { hasSelectedPaymentElementSourceType: i, paymentMethodSteps: a } = eQ(),
        s = a.methodType ?? ep.he.CARD;
    return i
        ? null
        : (0, r.jsx)(td, {
              billingAddressInfo: n.info,
              onBillingAddressChange: (e, t) => {
                  l({ info: { ...n.info, ...e }, isValid: t });
              },
              paymentSourceType: s,
          });
}
var tp = n(648335);
let th = new ey.A("PaymentElementStepFooter.tsx");
function tC(e) {
    let { paymentModalArgs: t } = e,
        { setIsSubmittingCurrentStep: n, setBillingAddressState: l, isSubmittingCurrentStep: i } = t,
        s = (0, j.S)(),
        { paymentElementOnNextCallback: o, handleStepChange: u, stripePaymentElementState: c, onReturn: d } = eQ(),
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
                if (null == m || !(0, tp.eX)(m)) throw (0, p.ne)("Valid Payment Element source type not found", !0);
                o(m);
                let e = eH.F[m];
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
                let t = (0, tp.eI)(m);
                if (null != t) return void u(t);
                u(R.pn.ADDRESS);
            } catch (e) {
                th.error("Error on submitting Payment Element step: ", e.message ?? JSON.stringify(e));
            } finally {
                n(!1);
            }
        }, [o, m, h, C, u, s, n, l]),
        y = a.useCallback(() => {
            (f(), null != d && d());
        }, [f, d]);
    return (0, r.jsx)(eY, {
        onBack: y,
        primaryCTA: eI.Ay.CTAType.CONTINUE,
        primaryType: "submit",
        primaryText: Y.intl.string(Y.t.PDTjLN),
        primarySubmitting: i,
        primaryDisabled: !E,
        onPrimary: S,
    });
}
var tf = n(885352),
    tE = n(170870);
let tS = new ey.A("AddPaymentMethodSubstepRegistry.tsx");
function ty(e) {
    let { setCreditCardState: t, setBillingAddressState: n } = e,
        l = a.useCallback(
            (e, l) => {
                (t({ info: e, isValid: l }), n((t) => ({ ...t, info: { ...t.info, name: e.name } })));
            },
            [t, n],
        ),
        i = (0, s.bG)([k.A], () => k.A.error);
    return (0, r.jsx)(tc, { billingError: i, onCardInfoChange: l });
}
function tI(e) {
    let { setIsSubmittingCurrentStep: t, setTokenState: n, isSubmittingCurrentStep: l, creditCardState: i } = e,
        { handleStepChange: a, onReturn: s } = eQ(),
        o = (0, j.S)();
    async function u(e) {
        t(!0);
        try {
            let t = await (0, p.YJ)(o, e);
            (n({ token: t }), a(R.pn.ADDRESS));
        } catch (e) {
            tS.error(e.message ?? JSON.stringify(e));
        } finally {
            t(!1);
        }
    }
    let c = !i.isValid;
    return (0, r.jsx)(Q.ElementsConsumer, {
        children: (e) => {
            let { elements: t } = e;
            return (0, r.jsx)(eY, {
                primaryCTA: eI.Ay.CTAType.CONTINUE,
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
function tg() {
    let { currentStep: e, redirectToCardInput: t, onComplete: n } = eQ();
    return (0, r.jsx)(ew, { step: e, onPurchaseComplete: () => n(e), onHandoffFailure: t });
}
function tA() {
    let { redirectToCardInput: e, onReturn: t, stripePaymentElementState: n } = eQ(),
        { onBackFromPaymentElement: l } = n;
    return (0, r.jsx)(eU, {
        onPrimaryClick: e,
        onBackClick: function () {
            (l(), null != t && t());
        },
    });
}
function tP(e) {
    let { adyenPaymentData: t } = e,
        { defaultOnBackHandler: n, onSubmitCustomPaymentMethodSubStep: l } = eQ(),
        i = (0, s.bG)([W], () => W.cashAppPayComponent),
        a = null != t;
    return (0, r.jsx)(eY, {
        onBack: () => n(ep.he.CASH_APP),
        primaryCTA: eI.Ay.CTAType.CONTINUE,
        primaryText: a ? Y.intl.string(Y.t.PDTjLN) : Y.intl.string(Y.t["9ALP8w"]),
        onPrimary: () => (a ? l() : z()),
        primaryDisabled: null == i,
    });
}
function tv(e) {
    let { defaultOnBackHandler: t, onSubmitCustomPaymentMethodSubStep: n } = eQ(),
        { billingAddressState: l, epsBankState: i } = e;
    return (0, r.jsx)(eY, {
        onBack: () => t(ep.he.EPS),
        primaryCTA: eI.Ay.CTAType.CONTINUE,
        primaryText: Y.intl.string(Y.t.PDTjLN),
        primaryDisabled: void 0 === i || "" === i || "" === l.info.name,
        onPrimary: () => n(),
    });
}
function tx(e) {
    let { defaultOnBackHandler: t, onSubmitCustomPaymentMethodSubStep: n } = eQ(),
        { billingAddressState: l, p24BankState: i } = e;
    return (0, r.jsx)(eY, {
        onBack: () => t(ep.he.PRZELEWY24),
        primaryCTA: eI.Ay.CTAType.CONTINUE,
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
function t_(e) {
    let { defaultOnBackHandler: t, onSubmitCustomPaymentMethodSubStep: n } = eQ(),
        { braintreeEmail: l, braintreeNonce: i } = e,
        a = 0 !== l.length && null != i;
    return (0, r.jsx)(eY, {
        onBack: () => t(ep.he.PAYPAL),
        primaryCTA: eI.Ay.CTAType.CONTINUE,
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
function tT(e) {
    let { venmoUsername: t, braintreeNonce: n } = e,
        l = 0 !== t.length && null != n,
        { defaultOnBackHandler: i, onSubmitCustomPaymentMethodSubStep: a } = eQ();
    return (0, r.jsx)(eY, {
        onBack: () => i(ep.he.VENMO),
        primaryCTA: eI.Ay.CTAType.CONTINUE,
        primaryText: l ? Y.intl.string(Y.t.PDTjLN) : Y.intl.string(Y.t["4KoTLM"]),
        onPrimary: () => (l ? a() : void A()),
    });
}
let tN = {
    [R.pn.CREDIT_CARD_INFORMATION]: {
        renderStepBody: (e) => (0, r.jsx)(ty, { ...e }),
        renderStepFooter: (e) => (0, r.jsx)(tI, { ...e }),
    },
    [R.pn.AWAITING_BROWSER_CHECKOUT]: {
        renderStepBody: () => (0, r.jsx)(tg, {}),
        renderStepFooter: () => (0, r.jsx)(tA, {}),
    },
    [R.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY]: {
        renderStepBody: () => (0, r.jsx)(tg, {}),
        renderStepFooter: () => (0, r.jsx)(tA, {}),
    },
    [R.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY]: {
        renderStepBody: () => (0, r.jsx)(tg, {}),
        renderStepFooter: () => (0, r.jsx)(tA, {}),
    },
    [R.pn.PAYMENT_ELEMENT]: {
        renderStepBody: () => null,
        renderStepFooter: (e) => (0, r.jsx)(tC, { paymentModalArgs: e }),
    },
    [R.pn.EPS_INFORMATION]: {
        renderStepBody: (e) => {
            let { setBillingAddressState: t, billingAddressState: n, setEpsBankState: l, epsBankState: i } = e;
            return (0, r.jsx)(eC, {
                type: ep.he.EPS,
                onAccountHolderNameChange: (e) => t({ info: { ...n.info, name: e }, isValid: n.isValid }),
                onEPSBankChange: (e) => l(e),
                epsBankValue: i,
                billingAddressInfo: n.info,
            });
        },
        renderStepFooter: (e) => (0, r.jsx)(tv, { ...e }),
    },
    [R.pn.PRZELEWY24_INFORMATION]: {
        renderStepBody: (e) => {
            let { setBillingAddressState: t, billingAddressState: n, setP24BankState: l, p24BankState: i } = e;
            return (0, r.jsx)(eC, {
                type: ep.he.PRZELEWY24,
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
    [R.pn.PAYPAL_INFORMATION]: {
        renderStepBody: () => (0, r.jsx)(et, {}),
        renderStepFooter: (e) => (0, r.jsx)(t_, { ...e }),
    },
    [R.pn.VENMO_INFORMATION]: {
        renderStepBody: () => (0, r.jsx)(ea, {}),
        renderStepFooter: (e) => (0, r.jsx)(tT, { ...e }),
    },
    [R.pn.CASH_APP_INFORMATION]: {
        renderStepBody: () => (0, r.jsx)(eG, {}),
        renderStepFooter: (e) => {
            let { adyenPaymentData: t } = e;
            return (0, r.jsx)(tP, { adyenPaymentData: t });
        },
    },
    [R.pn.AWAITING_AUTHENTICATION]: { renderStepBody: () => (0, r.jsx)(es.N, {}), renderStepFooter: () => null },
    [R.pn.ADDRESS]: {
        renderStepBody: (e) => (0, r.jsx)(tm, { paymentModalArgs: e }),
        renderStepFooter: (e) => (0, r.jsx)(eJ, { paymentModalArgs: e }),
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
        } = eQ(),
        o = (0, eE.qv)(),
        { contextMetadata: u } = (0, b.t4)((e) => ({ contextMetadata: e.contextMetadata })),
        { activitySessionId: c } = (0, ef.V)(),
        {
            onBackFromPaymentElement: d,
            paymentElementLoaded: m,
            paymentElementSelectedType: p,
            stripeElementsRef: h,
            stripePaymentElementProps: C,
            stripeAddressElementProps: f,
            addressElementKey: E,
        } = i;
    return (0, r.jsx)(eK._i, {
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
            ? (0, r.jsx)(eS.Z4, {
                  className: tf.SO,
                  stackingBehavior: "stack",
                  onComplete: () => {
                      setTimeout(() => o(R.pn.REVIEW), 0);
                  },
              })
            : null,
    });
}
function tj(e) {
    let { billingAddressState: t, children: n } = e,
        { stripePaymentElementState: l, currentStep: i, paymentMethodSteps: a } = eQ(),
        { shouldRenderPaymentElement: s } = l;
    return (0, r.jsxs)($.Y, {
        className: tE.C9,
        staticClassName: tE.a2,
        animatedNodeClassName: tE.L2,
        fillParent: !0,
        overrideKey: s ? "combined_stripe_elements" : void 0,
        step: i,
        steps: a.steps,
        sideMargin: 20,
        children: [s && (0, r.jsx)(tb, { billingAddressState: t }), n],
    });
}
let tR = {
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
                        className: tE.uK,
                        children: [
                            "" === s
                                ? null
                                : (0, r.jsx)("div", {
                                      className: tE.Nk,
                                      children: (0, r.jsx)(eX.w, { type: "critical", children: s }),
                                  }),
                            a ? (0, r.jsx)(tO.y, { className: tE.CI }) : t,
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
            paymentModalArgs: t,
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
                                return { steps: [...n, ...tR[t], ...l], methodType: i };
                            });
                        })(
                            [
                                { sharedStepsKey: "SHARED_TYPE_AND_ADDRESS_STEPS", methodType: ep.he.UNKNOWN },
                                { sharedStepsKey: "SHARED_ADD_PAYMENT_STEPS", methodType: ep.he.PAYMENT_REQUEST },
                                { sharedStepsKey: "SHARED_CREDIT_CARD_STEPS", methodType: ep.he.CARD },
                                { sharedStepsKey: "SHARED_PAYPAL_STEPS", methodType: ep.he.PAYPAL },
                                { sharedStepsKey: "SHARED_IDEAL_STEPS", methodType: ep.he.IDEAL },
                                { sharedStepsKey: "SHARED_VENMO_STEPS", methodType: ep.he.VENMO },
                                { sharedStepsKey: "SHARED_PRZELEWY24_STEPS", methodType: ep.he.PRZELEWY24 },
                                { sharedStepsKey: "SHARED_EPS_STEPS", methodType: ep.he.EPS },
                                { sharedStepsKey: "SHARED_CASH_APP_STEPS", methodType: ep.he.CASH_APP },
                            ],
                            { prependSteps: t, appendSteps: n },
                        ),
                    [t, n],
                ),
                p = (0, a.useMemo)(
                    () => ({
                        [ep.he.CARD]: r,
                        [ep.he.PAYPAL]: s,
                        [ep.he.PAYMENT_REQUEST]: i,
                        [ep.he.VENMO]: u,
                        [ep.he.CASH_APP]: m,
                        [ep.he.IDEAL]: o,
                        [ep.he.PRZELEWY24]: c,
                        [ep.he.EPS]: d,
                        [ep.he.BANCONTACT]: l,
                        [ep.he.GOPAY_WALLET]: l,
                        [ep.he.KAKAOPAY]: l,
                        [ep.he.GCASH]: l,
                        [ep.he.PAYSAFE_CARD]: l,
                        [ep.he.GRABPAY_MY]: l,
                        [ep.he.MOMO_WALLET]: l,
                        [ep.he.PIX]: l,
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
        et = a.useCallback(
            (e) => {
                (X(e.id), J(e));
            },
            [X, J],
        ),
        en = (0, s.bG)([k.A], () => k.A.redirectedPaymentSourceId),
        el = { completeSteps: et, setIsSubmittingCurrentStep: t.setIsSubmittingCurrentStep },
        ei = a.useRef(el);
    (a.useEffect(() => {
        ei.current = el;
    }),
        a.useEffect(() => {
            let { completeSteps: e, setIsSubmittingCurrentStep: t } = ei.current;
            !(async function () {
                if (null == en) return;
                await (0, p.$o)();
                let n = w.A.getPaymentSource(en);
                null != n && (e(n), t(!1), k.A.clearRedirectedPaymentSourceId());
            })();
        }, [en]));
    let er = I ? (0, r.jsx)(O.A, { className: tf._8 }) : null,
        ea = a.useCallback(() => {
            (Z(F), q(R.pn.PAYMENT_ELEMENT));
        }, [Z, q, F]),
        es = a.useCallback(
            (e) => {
                let { steps: t, methodType: n } = H[e];
                Z({ steps: t, methodType: n === ep.he.UNKNOWN ? e : n });
            },
            [Z, H],
        ),
        eo = a.useCallback(() => {
            Z({ steps: [...l, ...tu, ...i], methodType: ep.he.CARD });
        }, [Z, l, i]),
        eu = a.useMemo(
            () => ({
                handleStepChange: q,
                continueSessionToInitialStep: v,
                currentStep: W,
                paymentMethodSteps: K,
                setBillingAddressState: ee,
                redirectToCardInput: ea,
                paymentElementOnNextCallback: es,
                setFallbackCardPaymentMethodSteps: eo,
                onComplete: m,
                onReturn: d,
                completeSteps: et,
                analyticsLocation: f,
                analyticsData: E,
                overwriteSubscriptionPaymentSource: y,
            }),
            [q, v, W, K, ee, ea, es, eo, f, m, d, et, E, y],
        );
    if (!(W in tN))
        throw new N.v({ message: `Unexpected Add Payment sub-step: ${W}`, extraSentryInformation: { currentStep: W } });
    let { renderStepBody: ec, renderStepFooter: ed } = tN[W],
        em = ec(t),
        eh = ed(t);
    return I
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  g && (0, r.jsx)(M.A, { className: tf.At, isEligibleForTrial: g }),
                  (0, r.jsxs)(ez, {
                      ...eu,
                      children: [
                          (0, r.jsxs)(L.dZ, {
                              children: [
                                  er,
                                  (0, r.jsx)(tj, { billingAddressState: t.billingAddressState, children: em }),
                              ],
                          }),
                          (0, r.jsx)(L.UX, { children: eh }),
                      ],
                  }),
              ],
          })
        : (0, r.jsx)(ez, {
              ...eu,
              children: (0, r.jsx)(tk, {
                  isLoading: null == _,
                  paymentError: t.paymentError,
                  header: C,
                  body: (0, r.jsx)(tj, { billingAddressState: t.billingAddressState, children: em }),
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
            null == i && null != r && r.includes(ep.he.CASH_APP) && K();
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
