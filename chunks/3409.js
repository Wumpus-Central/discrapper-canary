n.d(t, {
    fL: () => ev,
    vP: () => eO,
}),
    n(388685),
    n(49124),
    n(415506);
var r = n(54381),
    i = n(473749),
    a = n(575053),
    o = n(512722),
    s = n.n(o),
    l = n(442837),
    c = n(481060),
    u = n(570140),
    d = n(355467),
    f = n(873115),
    _ = n(159351),
    p = n(801937),
    h = n(282164),
    m = n(915271),
    g = n(228666),
    E = n(723484),
    b = n(122192),
    y = n(296214),
    O = n(493773),
    v = n(720452),
    I = n(561448),
    T = n(445239),
    S = n(870630),
    A = n(483454),
    C = n(710845),
    N = n(563132),
    R = n(409813),
    P = n(51499),
    D = n(586585),
    w = n(614277),
    L = n(35248),
    x = n(439021),
    M = n(698708),
    k = n(351402),
    j = n(975060),
    U = n(505649),
    G = n(853872),
    B = n(882712),
    Z = n(55563),
    F = n(358085),
    V = n(622999),
    H = n(51144),
    Y = n(176919),
    W = n(702594),
    K = n(185139),
    z = n(396955),
    q = n(559725),
    X = n(439041),
    Q = n(850228),
    J = n(231338),
    $ = n(388032),
    ee = n(700739),
    et = n(397519);
function en(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function er(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                en(e, t, n[t]);
            });
    }
    return e;
}
function ei(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function ea(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ei(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function eo(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = es(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function es(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let el = new C.Z("AddPaymentStep.tsx"),
    ec = {
        name: "",
        cardNumber: "",
        expirationDate: "",
        cvc: "",
    },
    eu = {
        email: "",
        name: "",
        country: "",
        line1: "",
        line2: "",
        city: "",
        postalCode: "",
        state: "",
    };
function ed(e) {
    let { paymentSourceTypeRestrictions: t } = e,
        n = null != t && t.length > 0 ? z.w.ADD_NEW_PAYMENT_METHOD : void 0;
    return (0, r.jsxs)("div", {
        className: ee.body,
        children: [(0, r.jsx)(z.Y, { paymentRestrictionBannerType: n }), (0, r.jsx)(p.Z, er({}, e))],
    });
}
function ef(e) {
    let { onCardInfoChange: t } = e,
        n = (0, l.e7)([j.Z], () => j.Z.error);
    return (0, r.jsx)("div", {
        className: ee.body,
        children: (0, r.jsx)(b.j, {
            billingError: n,
            onCardInfoChange: t,
        }),
    });
}
function e_() {
    return (0, r.jsx)("div", {
        className: ee.body,
        children: (0, r.jsx)(h.Z, {}),
    });
}
function ep() {
    return (0, r.jsx)("div", {
        className: ee.body,
        children: (0, r.jsx)(m.Z, {}),
    });
}
function eh() {
    return (0, r.jsx)("div", {
        className: ee.body,
        children: (0, r.jsx)(Q.Z, {}),
    });
}
function em() {
    let e = (0, l.e7)([k.Z], () => k.Z.isBusy),
        t = (0, l.e7)([j.Z], () => j.Z.stripePaymentMethod);
    return (0, r.jsx)(y.k, {
        className: ee.body,
        stripePaymentMethod: t,
        submitting: e,
    });
}
function eg(e) {
    let { billingAddressInfo: t, onBillingAddressChange: n, paymentSourceType: i } = e,
        a = (0, l.e7)([j.Z], () => j.Z.error);
    return (0, r.jsx)("div", {
        className: ee.body,
        children: (0, r.jsx)(g.P, {
            billingAddressInfo: t,
            billingError: a,
            onBillingAddressChange: n,
            paymentSourceType: i,
        }),
    });
}
function eE() {
    return (0, r.jsx)(E.F, { className: ee.body });
}
function eb(e) {
    return () => (null != j.Z.error && (0, _.fw)(), e());
}
function ey(e) {
    let { onPrimary: t, onBack: n } = e,
        i = eo(e, ["onPrimary", "onBack"]),
        a = t;
    null != t && (a = eb(t));
    let o = n;
    return (
        null != n && (o = eb(n)),
        (0, r.jsx)(
            D.Z,
            ea(er({}, i), {
                onPrimary: a,
                onBack: o,
            }),
        )
    );
}
function eO(e) {
    var t;
    let n,
        o,
        u,
        p,
        {
            paymentModalArgs: h,
            initialStep: m,
            prependSteps: g,
            appendSteps: E,
            onReturn: b,
            onComplete: y,
            onStepChange: O,
            breadcrumpSteps: C,
            currentBreadcrumpStep: k,
            header: U,
            analyticsData: B,
            analyticsLocation: Y,
            hideBreadcrumbs: z = !1,
            usePaymentModalStep: Q = !1,
            isEligibleForTrial: en = !1,
            allowDesktopRedirectPurchase: ei = !1,
            toastContent: eo,
            continueSessionToInitialStep: es,
            overwriteSubscriptionPaymentSource: ec = !1,
        } = e,
        { stripe: eu, contextMetadata: eb, activitySessionId: eO, paymentElementsEnabled: ev } = (0, N.JL)(),
        eI = ev && m === R.h8.PAYMENT_TYPE ? R.h8.PAYMENT_ELEMENT : m,
        eT = i.useMemo(() => (0, H.vP)(), []),
        {
            CREDIT_CARD_STEPS: eS,
            PAYPAL_STEPS: eA,
            IDEAL_STEPS: eC,
            PAYMENT_REQUEST_STEPS: eN,
            VENMO_STEPS: eR,
            ADD_PAYMENT_STEPS: eP,
            PRZELEWY24_STEPS: eD,
            EPS_STEPS: ew,
            CASH_APP_STEPS: eL,
            PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: ex,
        } = (0, W.gj)({
            prependSteps: g,
            appendSteps: E,
            paymentElementsEnabled: ev,
        });
    function eM(e) {
        switch (e) {
            case R.h8.CREDIT_CARD_INFORMATION:
                return eS;
            case R.h8.CASH_APP_INFORMATION:
                return eL;
            default:
                return { steps: [R.h8.ADD_PAYMENT_STEPS] };
        }
    }
    let [ek, ej] = i.useState(eI),
        [eU, eG] = i.useState(null),
        [eB, eZ] = i.useState(eM(eI)),
        eF = (0, l.e7)([j.Z], () => j.Z.redirectedPaymentSourceId),
        eV = (0, l.e7)([X.Z], () => X.Z.cashAppPayComponent),
        eH = {
            completeSteps: tu,
            setIsSubmittingCurrentStep: h.setIsSubmittingCurrentStep,
        },
        eY = i.useRef(eH);
    i.useEffect(() => {
        eY.current = eH;
    }),
        i.useEffect(() => {
            let { completeSteps: e, setIsSubmittingCurrentStep: t } = eY.current;
            (async () => {
                if (null == eF) return;
                await (0, d.tZ)();
                let n = G.Z.getPaymentSource(eF);
                null != n && (e(n), t(!1), j.Z.clearRedirectedPaymentSourceId());
            })();
        }, [eF]);
    let eW = i.useCallback(
        function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            eG(null),
                ej(e),
                t &&
                    O({
                        currentStep: ek,
                        toStep: e,
                    });
        },
        [ek, O],
    );
    function eK(e) {
        (0, c.showToast)(
            (0, c.createToast)(void 0 !== eo ? eo : $.intl.string($.t["VJPg+l"]), c.ToastType.SUCCESS, {
                position: c.ToastPosition.BOTTOM,
            }),
        ),
            y(ek, e),
            eW(eI, !1);
    }
    let [ez, eq] = i.useState(null),
        {
            setPaymentSourceId: eX,
            creditCardState: eQ,
            setCreditCardState: eJ,
            tokenState: e$,
            setTokenState: e0,
            isSubmittingCurrentStep: e1,
            billingAddressState: e3,
            setBillingAddressState: e2,
            setIsSubmittingCurrentStep: e4,
            hasRedirectURL: e5,
            setHasRedirectURL: e8,
            braintreeEmail: e6,
            braintreeNonce: e7,
            venmoUsername: e9,
            adyenPaymentData: te,
            isAuthenticating: tt,
            epsBankState: tn,
            setEpsBankState: tr,
            p24BankState: ti,
            setP24BankState: ta,
            selectedSkuId: to,
        } = h,
        ts = null != to ? to : "",
        tl = (0, l.e7)([Z.Z], () => Z.Z.get(ts), [ts]),
        tc = null == tl || null == (t = tl.eligiblePaymentGateways) ? void 0 : t.map((e) => e.valueOf());
    function tu(e) {
        eX(e.id), eK(e);
    }
    let td = !(0, F.isDesktop)() || ei ? ["googlePay", "applePay"] : [],
        [tf, t_] = i.useState(!1),
        tp = i.useRef(null),
        th = () => {
            null != tp.current && tp.current.show();
        },
        {
            shouldRenderPaymentElement: tm,
            paymentElementReady: tg,
            paymentElementSelectedType: tE,
            handlePaymentElementStep: tb,
            onBackFromPaymentElement: ty,
            combinedStripeElementsRef: tO,
            lastConfirmedSetupIntentRef: tv,
            stripePaymentElementProps: tI,
            stripeAddressElementProps: tT,
            addressElementKey: tS,
            remountAddressElement: tA,
        } = (0, A.MM)({
            step: ek,
            continueSessionToInitialStep: es,
            paymentElementsEnabled: ev,
            handleStepChange: eW,
            logger: el,
            shouldLogOnChangeEvents: eT || !1,
            onBillingAddressChange: (e, t) => {
                e2({
                    info: er({}, e3.info, e),
                    isValid: t,
                });
            },
        }),
        tC = i.useCallback(
            (e, t) => (ev && null != t && (0, I.qH)(e) ? () => tb(e) : () => eW(R.h8.PAYMENT_TYPE)),
            [ev, tb, eW],
        );
    switch (ek) {
        case R.h8.ATTEMPT_GOOGLE_PAY:
        case R.h8.ATTEMPT_APPLE_PAY:
        case R.h8.PAYMENT_TYPE:
            let tN = (e, t) => {
                    switch (e) {
                        case J.He.CARD:
                            ei
                                ? eW(R.h8.AWAITING_BROWSER_CHECKOUT)
                                : (eZ(eS), eW(ev ? R.h8.PAYMENT_ELEMENT : R.h8.CREDIT_CARD_INFORMATION));
                            break;
                        case J.He.PAYPAL:
                            eZ(eA), eW(R.h8.PAYPAL_INFORMATION);
                            break;
                        case J.He.VENMO:
                            eZ(eR), eW(R.h8.VENMO_INFORMATION);
                            break;
                        case J.He.PAYMENT_REQUEST:
                            ei && "googlePay" === t
                                ? eW(R.h8.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY)
                                : ei && "applePay" === t
                                  ? eW(R.h8.AWAITING_BROWSER_CHECKOUT_APPLE_PAY)
                                  : (eZ(eN), eW(R.h8.PAYMENT_REQUEST_INFORMATION));
                            break;
                        case J.He.PRZELEWY24:
                            eZ(eD), eW(R.h8.PRZELEWY24_INFORMATION);
                            break;
                        case J.He.EPS:
                            eZ(ew), eW(R.h8.EPS_INFORMATION);
                            break;
                        case J.He.IDEAL:
                            eZ(eC), eW(R.h8.IDEAL_INFORMATION);
                            break;
                        case J.He.CASH_APP:
                            eZ(eL), eW(R.h8.CASH_APP_INFORMATION);
                            break;
                        case J.He.GIROPAY:
                        case J.He.PAYSAFE_CARD:
                        case J.He.GCASH:
                        case J.He.GRABPAY_MY:
                        case J.He.MOMO_WALLET:
                        case J.He.KAKAOPAY:
                        case J.He.GOPAY_WALLET:
                        case J.He.BANCONTACT:
                            eZ({
                                steps: [...g, ...W.Hl, ...E],
                                methodType: e,
                            }),
                                eW(R.h8.ADDRESS);
                    }
                    null != j.Z.error && (0, _.fw)();
                },
                tR = (e, t) => {
                    e2((e) => ea(er({}, e), { info: t })), eZ(eN), tu(e);
                },
                tP = () => {
                    eZ(eP), eW(R.h8.PAYMENT_TYPE);
                },
                tD = async (e, t) => {
                    if (((0, _.Xt)(e), null == e)) return void tP();
                    eq(e);
                    let { billingAddressInfo: n } = (0, V.az)(e),
                        r = v._.every((e) => {
                            let t = n[e];
                            return null != t && "" !== t;
                        });
                    if (
                        ((null == n.name || "" === n.name) && null != t && (n.name = t),
                        e2({
                            isValid: r,
                            info: n,
                        }),
                        !r)
                    )
                        return void eW(R.h8.ADDRESS);
                    try {
                        let t = await (0, d.i6)(e, n, Y);
                        tR(t, n);
                    } catch (e) {
                        tP();
                    }
                };
            if (ek === R.h8.ATTEMPT_GOOGLE_PAY || ek === R.h8.ATTEMPT_APPLE_PAY) {
                let e = $.intl.string(ek === R.h8.ATTEMPT_APPLE_PAY ? $.t.czhXDv : $.t.Zj2xQ0),
                    t = $.intl.string(ek === R.h8.ATTEMPT_APPLE_PAY ? $.t.WoXvJL : $.t.wnVVr0);
                (n = (0, r.jsx)(x.t, {
                    onChooseType: tN,
                    paymentRequestWallet: ek === R.h8.ATTEMPT_APPLE_PAY ? "applePay" : "googlePay",
                    onStripePaymentMethodReceived: tD,
                    onPaymentRequestFailure: () => {
                        tN(J.He.CARD), eG(e);
                    },
                    onValidPaymentRequest: () => t_(!0),
                    paymentRequestRef: tp,
                })),
                    (o = (0, r.jsx)(ey, {
                        onBack: () => eW(R.h8.PAYMENT_TYPE),
                        primaryCTA: D.Z.CTAType.CONTINUE,
                        primaryText: t,
                        onPrimary: () => th(),
                        primaryDisabled: !tf,
                    }));
                break;
            }
            (n = (0, r.jsx)(ed, {
                onChooseType: tN,
                onStripePaymentMethodReceived: tD,
                paymentRequestWallets: td,
                isEligibleForTrial: en,
                paymentRequestPaymentContext: {
                    contextMetadata: eb,
                    activitySessionId: eO,
                },
                paymentSourceTypeRestrictions: tc,
            })),
                (o = (0, r.jsx)(ey, { onBack: b }));
            break;
        case R.h8.PAYMENT_ELEMENT:
            if (!ev) throw (0, d.PP)("Payment Elements not enabled, invalid step", !0);
            let tw = async () => {
                e4(!0);
                try {
                    if (null == tE || !(0, I.qH)(tE))
                        throw (0, d.PP)("Valid Payment Element source type not found", !0);
                    let { steps: e, methodType: t } = ex[tE];
                    if (
                        (eZ({
                            steps: e,
                            methodType: t === J.He.UNKNOWN ? tE : t,
                        }),
                        tE === J.He.PAYMENT_REQUEST)
                    ) {
                        let e = tO.current,
                            { paymentMethod: t } = await (0, d.w$)(eu, e),
                            { billingAddressInfo: n } = (0, V.az)(t);
                        e2((e) => ea(er({}, e), { info: n })), tA(), eW(R.h8.ADDRESS);
                    } else {
                        let e = (0, I.Hx)(tE);
                        null != e ? eW(e) : eW(R.h8.ADDRESS);
                    }
                } catch (t) {
                    var e;
                    el.error(
                        "Error on submitting Payment Element step: ",
                        null != (e = t.message) ? e : JSON.stringify(t),
                    );
                } finally {
                    e4(!1);
                }
            };
            (n = null),
                (o = (0, r.jsx)(ey, {
                    onBack: () => {
                        ty(), b();
                    },
                    primaryCTA: D.Z.CTAType.CONTINUE,
                    primaryType: "submit",
                    primaryText: $.intl.string($.t.PDTjLN),
                    primarySubmitting: e1,
                    primaryDisabled: !tg,
                    onPrimary: tw,
                }));
            break;
        case R.h8.CREDIT_CARD_INFORMATION:
            let tL = async (e) => {
                e4(!0);
                try {
                    let t = await (0, d.qv)(eu, e);
                    e0({ token: t }), eW(R.h8.ADDRESS);
                } catch (e) {
                    var t;
                    el.error(null != (t = e.message) ? t : JSON.stringify(e));
                } finally {
                    e4(!1);
                }
            };
            n = (0, r.jsx)(ef, {
                onCardInfoChange: (e, t) => {
                    eJ({
                        info: e,
                        isValid: t,
                    }),
                        e2((t) => ea(er({}, t), { info: ea(er({}, t.info), { name: e.name }) }));
                },
            });
            let tx = !eQ.isValid,
                tM = () => {
                    eW(R.h8.PAYMENT_TYPE);
                };
            o = (0, r.jsx)(a.ElementsConsumer, {
                children: (e) => {
                    let { elements: t } = e;
                    return (0, r.jsx)(ey, {
                        onBack: tM,
                        primaryCTA: D.Z.CTAType.CONTINUE,
                        primaryType: "submit",
                        primaryText: $.intl.string($.t.PDTjLN),
                        primarySubmitting: e1,
                        primaryDisabled: tx,
                        onPrimary: () => tL(t),
                    });
                },
            });
            break;
        case R.h8.AWAITING_BROWSER_CHECKOUT:
        case R.h8.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
        case R.h8.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
            (n = (0, r.jsx)("div", {
                className: ee.body,
                children: (0, r.jsx)(L.M, {
                    step: ek,
                    onPurchaseComplete: () => y(ek),
                    onHandoffFailure: () => {
                        eZ(eS), eW(R.h8.CREDIT_CARD_INFORMATION);
                    },
                }),
            })),
                (o = (0, r.jsx)(L.a, {
                    onPrimaryClick: () => {
                        eZ(eS), eW(R.h8.CREDIT_CARD_INFORMATION);
                    },
                    onBackClick: () => {
                        eZ(eP), eW(R.h8.PAYMENT_TYPE);
                    },
                }));
            break;
        case R.h8.EPS_INFORMATION:
            n = (0, r.jsx)(S.Z, {
                type: J.He.EPS,
                onAccountHolderNameChange: (e) =>
                    e2({
                        info: ea(er({}, e3.info), { name: e }),
                        isValid: e3.isValid,
                    }),
                onEPSBankChange: (e) => tr(e),
                epsBankValue: tn,
                billingAddressInfo: e3.info,
            });
            let tk = tC(J.He.EPS, tE);
            o = (0, r.jsx)(ey, {
                onBack: tk,
                primaryCTA: D.Z.CTAType.CONTINUE,
                primaryText: $.intl.string($.t.PDTjLN),
                primaryDisabled: void 0 === tn || "" === tn || "" === e3.info.name,
                onPrimary: () => eW(R.h8.ADDRESS),
            });
            break;
        case R.h8.IDEAL_INFORMATION:
            (n = (0, r.jsx)(T.Z, {
                type: J.He.IDEAL,
                onAccountHolderNameChange: (e) =>
                    e2({
                        info: ea(er({}, e3.info), { name: e }),
                        isValid: e3.isValid,
                    }),
                billingAddressInfo: e3.info,
            })),
                (o = (0, r.jsx)(ey, {
                    onBack: () => eW(R.h8.PAYMENT_TYPE),
                    primaryCTA: D.Z.CTAType.CONTINUE,
                    primaryText: $.intl.string($.t.PDTjLN),
                    primaryDisabled: "" === e3.info.name,
                    onPrimary: () => eW(R.h8.ADDRESS),
                }));
            break;
        case R.h8.PRZELEWY24_INFORMATION:
            n = (0, r.jsx)(S.Z, {
                type: J.He.PRZELEWY24,
                onNameChange: (e) =>
                    e2({
                        info: ea(er({}, e3.info), { name: e }),
                        isValid: e3.isValid,
                    }),
                onEmailChange: (e) =>
                    e2({
                        info: ea(er({}, e3.info), { email: e }),
                        isValid: e3.isValid,
                    }),
                onP24BankChange: (e) => {
                    ta(e);
                },
                p24BankValue: ti,
                billingAddressInfo: e3.info,
            });
            let tj = tC(J.He.PRZELEWY24, tE);
            o = (0, r.jsx)(ey, {
                onBack: tj,
                primaryCTA: D.Z.CTAType.CONTINUE,
                primaryText: $.intl.string($.t.PDTjLN),
                primaryDisabled:
                    void 0 === e3.info.name ||
                    "" === e3.info.name ||
                    void 0 === e3.info.email ||
                    "" === e3.info.email ||
                    void 0 === ti ||
                    "" === ti,
                onPrimary: () => eW(R.h8.ADDRESS),
            });
            break;
        case R.h8.PAYPAL_INFORMATION:
            let tU = 0 !== e6.length && null != e7;
            n = (0, r.jsx)(e_, {});
            let tG = tC(J.He.PAYPAL, tE);
            o = (0, r.jsx)(ey, {
                onBack: tG,
                primaryCTA: D.Z.CTAType.CONTINUE,
                primaryText: tU ? $.intl.string($.t.PDTjLN) : $.intl.string($.t.Djzd7L),
                onPrimary: () => (tU ? eW(R.h8.ADDRESS) : (0, f.i0)()),
            });
            break;
        case R.h8.VENMO_INFORMATION:
            let tB = 0 !== e9.length && null != e7;
            n = (0, r.jsx)(ep, {});
            let tZ = tC(J.He.VENMO, tE);
            o = (0, r.jsx)(ey, {
                onBack: tZ,
                primaryCTA: D.Z.CTAType.CONTINUE,
                primaryText: tB ? $.intl.string($.t.PDTjLN) : $.intl.string($.t["4KoTLM"]),
                onPrimary: () => (tB ? eW(R.h8.ADDRESS) : (0, f.og)()),
            });
            break;
        case R.h8.PAYMENT_REQUEST_INFORMATION:
            (n = (0, r.jsx)(em, {})), (o = (0, r.jsx)(ey, { onBack: () => eW(R.h8.PAYMENT_TYPE) }));
            break;
        case R.h8.CASH_APP_INFORMATION:
            let tF = null != te,
                tV = null != eV;
            n = (0, r.jsx)(eh, {});
            let tH = tC(J.He.CASH_APP, tE);
            o = (0, r.jsx)(ey, {
                onBack: tH,
                primaryCTA: D.Z.CTAType.CONTINUE,
                primaryText: tF ? $.intl.string($.t.PDTjLN) : $.intl.string($.t["9ALP8w"]),
                onPrimary: () => (tF ? eW(R.h8.ADDRESS) : (0, q.cp)()),
                primaryDisabled: !tV,
            });
            break;
        case R.h8.ADDRESS:
            let tY = ev && null != tE,
                tW = async () => {
                    e4(!0);
                    let e = tY ? tE : eB.methodType,
                        t = [
                            eu,
                            tO.current,
                            {
                                billingAddress: e3.info,
                                paymentSourceType: null != e ? e : J.He.UNKNOWN,
                                lastConfirmedSetupIntentRef: tv,
                            },
                            Y,
                        ];
                    switch (e) {
                        case J.He.PAYMENT_REQUEST:
                            if (tY) {
                                try {
                                    let e = await (0, d.Q5)(...t);
                                    tu(e);
                                } catch (e) {
                                    e4(!1), el.warn("Error confirming Payment Element source for Payment Request: ", e);
                                }
                                break;
                            }
                            if (null == ez) throw (tP(), (0, d.SQ)("Missing paymentRequestPaymentMethod"));
                            tu(await (0, d.i6)(ez, e3.info, Y));
                            break;
                        case J.He.CARD:
                            try {
                                let e = tY ? await (0, d.Q5)(...t) : await (0, d.f0)(eu, e$.token, e3.info, Y);
                                tu(e);
                            } catch (e) {}
                            break;
                        case J.He.VENMO:
                        case J.He.PAYPAL:
                            try {
                                s()(null != e7, "Missing braintreeNonce");
                                let e = await (0, d.lP)(e7, e3.info, Y);
                                tu(e);
                            } catch (e) {}
                            break;
                        case J.He.EPS:
                            try {
                                let e = await (0, d.YQ)(eu, tn, e3.info, Y);
                                tu(e);
                            } catch (e) {
                                el.warn(e);
                            }
                            break;
                        case J.He.IDEAL:
                            try {
                                let e = tY ? await (0, d.Q5)(...t) : await (0, d.aN)(eu, e3.info, Y);
                                tu(e);
                            } catch (e) {
                                el.warn(e);
                            }
                            break;
                        case J.He.PRZELEWY24:
                            try {
                                if (void 0 === ti) throw (0, d.SQ)("Bank required for Przelewy24");
                                let e = await (0, d.pF)(eu, { p24Bank: ti }, e3.info, Y);
                                tu(e);
                            } catch (e) {}
                            break;
                        case J.He.PAYSAFE_CARD:
                        case J.He.GRABPAY_MY:
                            try {
                                let t = await (0, d.sF)(e3.info, e, Y);
                                tu(t);
                            } catch (e) {}
                            break;
                        case J.He.GCASH:
                        case J.He.MOMO_WALLET:
                        case J.He.KAKAOPAY:
                        case J.He.GOPAY_WALLET:
                            try {
                                let { redirectConfirmation: t } = await (0, d.Dk)(e3.info, e, Y);
                                e8(t);
                            } catch (e) {}
                            break;
                        case J.He.GIROPAY:
                        case J.He.BANCONTACT:
                            try {
                                let t = await (0, d.GV)(eu, e3.info, e, Y);
                                tu(t);
                            } catch (e) {}
                            break;
                        case J.He.CASH_APP:
                            try {
                                s()(null != te, "Missing adyenPaymentData");
                                let { paymentSource: t } = await (0, d.Dk)(e3.info, e, Y, te, ec);
                                s()(null != t, "Cash App Pay Payment Source missing"), tu(t);
                            } catch (e) {}
                            break;
                        default:
                            throw Error("unknown step not handled");
                    }
                    e5 || e4(!1);
                };
            switch (eB.methodType) {
                case J.He.CARD:
                    (p = R.h8.CREDIT_CARD_INFORMATION), (u = J.He.CARD);
                    break;
                case J.He.PAYPAL:
                    (p = R.h8.PAYPAL_INFORMATION), (u = J.He.PAYPAL);
                    break;
                case J.He.VENMO:
                    (p = R.h8.VENMO_INFORMATION), (u = J.He.VENMO);
                    break;
                case J.He.GIROPAY:
                    (p = R.h8.PAYMENT_TYPE), (u = J.He.GIROPAY);
                    break;
                case J.He.PAYSAFE_CARD:
                case J.He.GCASH:
                case J.He.GRABPAY_MY:
                case J.He.MOMO_WALLET:
                case J.He.KAKAOPAY:
                case J.He.GOPAY_WALLET:
                case J.He.BANCONTACT:
                    (p = R.h8.PAYMENT_TYPE), (u = eB.methodType);
                    break;
                case J.He.EPS:
                    (p = R.h8.EPS_INFORMATION), (u = J.He.EPS);
                    break;
                case J.He.IDEAL:
                    (p = R.h8.IDEAL_INFORMATION), (u = J.He.IDEAL);
                    break;
                case J.He.PRZELEWY24:
                    (p = R.h8.PRZELEWY24_INFORMATION), (u = J.He.PRZELEWY24);
                    break;
                case J.He.CASH_APP:
                    (p = R.h8.CASH_APP_INFORMATION), (u = J.He.CASH_APP);
                    break;
                default:
                    (p = R.h8.PAYMENT_TYPE), (u = J.He.CARD);
            }
            tY && (p = R.h8.PAYMENT_ELEMENT),
                (n = tY
                    ? null
                    : (0, r.jsx)(eg, {
                          billingAddressInfo: e3.info,
                          onBillingAddressChange: (e, t) => {
                              e2({
                                  info: er({}, e3.info, e),
                                  isValid: t,
                              });
                          },
                          paymentSourceType: u,
                      })),
                (o = (0, r.jsx)(ey, {
                    onBack: () => eW(p),
                    primaryCTA: D.Z.CTAType.CONTINUE,
                    primaryText: $.intl.string($.t.PDTjLN),
                    primarySubmitting: e1,
                    primaryDisabled: !e3.isValid || tt,
                    onPrimary: tW,
                }));
            break;
        case R.h8.AWAITING_AUTHENTICATION:
            n = (0, r.jsx)(eE, {});
            break;
        default:
            throw Error("Unexpected step: ".concat(ek));
    }
    let tK = ev && tm,
        tz = tK ? "combined_stripe_elements" : void 0,
        tq = (0, r.jsxs)(c.qBt, {
            className: et.sequencer,
            staticClassName: et.sequencerStatic,
            animatedNodeClassName: et.sequencerAnimatedNode,
            fillParent: !0,
            overrideKey: tz,
            step: ek,
            steps: eB.steps,
            sideMargin: 20,
            children: [
                null != eU &&
                    (0, r.jsx)("div", {
                        className: ee.infoNotice,
                        children: (0, r.jsx)(c.M14, {
                            type: "info",
                            children: eU,
                        }),
                    }),
                tK &&
                    (0, r.jsx)(A.hn, {
                        step: ek,
                        analyticsContext:
                            null != B
                                ? {
                                      activitySessionId: eO,
                                      contextMetadata: eb,
                                      analyticsData: B,
                                  }
                                : void 0,
                        paymentElementSelectedType: tE,
                        elementsRef: tO,
                        stripePaymentElementProps: tI,
                        stripeAddressElementProps: tT,
                        addressElementKey: tS,
                        billingAddressInfo: e3.info,
                        onSetupError: () => {
                            ty(), eW(R.h8.PAYMENT_TYPE);
                        },
                    }),
                n,
            ],
        }),
        tX = ek === R.h8.PAYMENT_TYPE && 0 === g.length ? null : o;
    return Q
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  en &&
                      (0, r.jsx)(P.Z, {
                          className: ee.paymentModalBreadcrumbs,
                          isEligibleForTrial: en,
                      }),
                  (0, r.jsxs)(w.C3, {
                      children: [(0, r.jsx)(M.Z, { className: ee.paymentModalError }), tq],
                  }),
                  (0, r.jsx)(w.O3, { children: tX }),
              ],
          })
        : (0, r.jsx)(K.Z, {
              steps: null != C ? C : eB.steps,
              currentStep: null != k ? k : ek,
              overrideKey: tz,
              paymentError: h.paymentError,
              header: U,
              hideBreadcrumbs: z,
              body: tq,
              footer: tX,
          });
}
function ev(e) {
    let {
        defaultPaymentSourceId: t,
        paymentSources: n,
        hasFetchedPaymentSources: r,
    } = (0, l.cj)([G.Z], () => ({
        defaultPaymentSourceId: void 0 !== e ? e : G.Z.defaultPaymentSourceId,
        paymentSources: G.Z.paymentSources,
        hasFetchedPaymentSources: G.Z.hasFetchedPaymentSources,
    }));
    (0, O.ZP)(() => {
        null == X.Z.cashAppPayComponent && (0, q.eI)(), (0, f.eI)(), r || (0, d.tZ)();
    });
    let [a, o] = i.useState(t);
    null != t && null == a && o(t);
    let [s, c] = i.useState(() => ({
            info: ec,
            isValid: !1,
        })),
        [p, h] = i.useState(() => ({
            info: eu,
            isValid: !1,
        })),
        [m, g] = i.useState(""),
        [E, b] = i.useState(""),
        [y, v] = i.useState(() => ({ token: null })),
        [I, T, S, A, C] = (0, l.Wu)([j.Z], () => [
            j.Z.braintreeEmail,
            j.Z.braintreeNonce,
            j.Z.error,
            j.Z.venmoUsername,
            j.Z.adyenPaymentData,
        ]),
        [N, R] = (0, l.Wu)([U.Z], () => [U.Z.error, U.Z.isAwaitingAuthentication]);
    i.useEffect(() => {
        let e = (e) => {
            let { billingAddress: t } = e;
            h({
                info: t,
                isValid: t.country.length > 0,
            });
        };
        return (
            u.Z.subscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e),
            () => {
                u.Z.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e), (0, _.fw)();
            }
        );
    }, []);
    let [P, D] = i.useState(!1),
        [w, L] = i.useState(!1),
        [x, M] = i.useState(null),
        k = i.useRef(null),
        Z = (0, l.e7)([U.Z], () => U.Z.isAwaitingAuthentication),
        [F, V] = (0, l.Wu)([B.Z], () => [B.Z.purchaseTokenAuthState, B.Z.purchaseTokenHash]);
    return (
        i.useEffect(() => {
            null != x && null != k.current && k.current.scrollIntoView({ behavior: "smooth" });
        }, [x]),
        {
            paymentSources: n,
            paymentSourceId: a,
            hasFetchedPaymentSources: r,
            setPaymentSourceId: o,
            creditCardState: s,
            setCreditCardState: c,
            tokenState: y,
            setTokenState: v,
            billingAddressState: p,
            setBillingAddressState: h,
            isSubmittingCurrentStep: P,
            setIsSubmittingCurrentStep: D,
            hasRedirectURL: w,
            setHasRedirectURL: L,
            braintreeEmail: I,
            braintreeNonce: T,
            venmoUsername: A,
            adyenPaymentData: C,
            paymentError: null != N ? N : S,
            paymentAuthenticationState: R ? Y.wr.PENDING : null != N ? Y.wr.ERROR : Y.wr.NONE,
            purchaseError: x,
            setPurchaseError: M,
            purchaseErrorBlockRef: k,
            isAuthenticating: Z,
            purchaseTokenAuthState: F,
            purchaseTokenHash: V,
            epsBankState: E,
            setEpsBankState: b,
            p24BankState: m,
            setP24BankState: g,
        }
    );
}
