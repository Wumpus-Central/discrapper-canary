(n.d(t, {
    fL: () => eP,
    vP: () => eR
}),
    n(836215),
    n(388685),
    n(49124),
    n(415506));
var r = n(255367),
    i = n(73800),
    a = n(245364),
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
    v = n(561448),
    I = n(445239),
    T = n(870630),
    S = n(483454),
    A = n(710845),
    N = n(563132),
    C = n(409813),
    w = n(51499),
    R = n(586585),
    P = n(27034),
    D = n(35248),
    L = n(439021),
    x = n(698708),
    k = n(351402),
    j = n(975060),
    M = n(505649),
    U = n(853872),
    G = n(882712),
    B = n(55563),
    Z = n(358085),
    F = n(622999),
    V = n(51144),
    H = n(176919),
    Y = n(185139),
    W = n(396955),
    K = n(559725),
    z = n(439041),
    q = n(850228),
    $ = n(231338),
    X = n(388032),
    Q = n(327763),
    J = n(106194);
function ee(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function et(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                ee(e, t, n[t]);
            }));
    }
    return e;
}
function en(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function er(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : en(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function ei(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = ea(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function ea(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let eo = new A.Z('AddPaymentStep.tsx'),
    es = [C.h8.PAYMENT_TYPE],
    el = [C.h8.PAYMENT_TYPE, C.h8.CREDIT_CARD_INFORMATION, C.h8.ADDRESS],
    ec = [C.h8.PAYMENT_TYPE, C.h8.PAYPAL_INFORMATION, C.h8.ADDRESS],
    eu = [C.h8.PAYMENT_TYPE, C.h8.VENMO_INFORMATION, C.h8.ADDRESS],
    ed = [C.h8.PAYMENT_TYPE, C.h8.PRZELEWY24_INFORMATION, C.h8.ADDRESS],
    ef = [C.h8.PAYMENT_TYPE, C.h8.EPS_INFORMATION, C.h8.ADDRESS],
    e_ = [C.h8.PAYMENT_TYPE, C.h8.IDEAL_INFORMATION, C.h8.ADDRESS],
    ep = [C.h8.PAYMENT_TYPE, C.h8.CASH_APP_INFORMATION, C.h8.ADDRESS],
    eh = [C.h8.PAYMENT_TYPE, C.h8.ADDRESS],
    em = (e, t, n) => {
        if (t === $.He.CARD) return e.map((e) => (e === C.h8.CREDIT_CARD_INFORMATION ? C.h8.PAYMENT_ELEMENT : e));
        if (t === $.He.UNKNOWN || (0, v.qH)(t, n)) {
            let t = e.indexOf(C.h8.PAYMENT_TYPE);
            return e.toSpliced(t + 1, 0, C.h8.PAYMENT_ELEMENT);
        }
        return e;
    },
    eg = (e, t) => {
        let { prependSteps: n, appendSteps: r, paymentElementsEnabled: i, userIsStaff: a } = t;
        return e.map((e) => {
            let { baseSteps: t, methodType: o } = e,
                s = [...n, ...t, ...r];
            return {
                steps: i ? em(s, o, a) : s,
                methodType: o
            };
        });
    },
    eE = {
        name: '',
        cardNumber: '',
        expirationDate: '',
        cvc: ''
    },
    eb = {
        email: '',
        name: '',
        country: '',
        line1: '',
        line2: '',
        city: '',
        postalCode: '',
        state: ''
    };
function ey(e) {
    let { paymentSourceTypeRestrictions: t } = e,
        n = null != t && t.length > 0 ? W.w.ADD_NEW_PAYMENT_METHOD : void 0;
    return (0, r.jsxs)('div', {
        className: Q.body,
        children: [(0, r.jsx)(W.Y, { paymentRestrictionBannerType: n }), (0, r.jsx)(p.Z, et({}, e))]
    });
}
function eO(e) {
    let { onCardInfoChange: t, infoNotice: n } = e,
        i = (0, l.e7)([j.Z], () => j.Z.error);
    return (0, r.jsxs)('div', {
        className: Q.body,
        children: [
            null != n &&
                (0, r.jsx)(c.kzN, {
                    className: Q.infoNotice,
                    backgroundColor: c.mTc.BACKGROUND_TERTIARY,
                    children: n
                }),
            (0, r.jsx)(b.j, {
                billingError: i,
                onCardInfoChange: t
            })
        ]
    });
}
function ev() {
    return (0, r.jsx)('div', {
        className: Q.body,
        children: (0, r.jsx)(h.Z, {})
    });
}
function eI() {
    return (0, r.jsx)('div', {
        className: Q.body,
        children: (0, r.jsx)(m.Z, {})
    });
}
function eT() {
    return (0, r.jsx)('div', {
        className: Q.body,
        children: (0, r.jsx)(q.Z, {})
    });
}
function eS() {
    let e = (0, l.e7)([k.Z], () => k.Z.isBusy),
        t = (0, l.e7)([j.Z], () => j.Z.stripePaymentMethod);
    return (0, r.jsx)(y.k, {
        className: Q.body,
        stripePaymentMethod: t,
        submitting: e
    });
}
function eA(e) {
    let { billingAddressInfo: t, onBillingAddressChange: n, paymentSourceType: i } = e,
        a = (0, l.e7)([j.Z], () => j.Z.error);
    return (0, r.jsx)('div', {
        className: Q.body,
        children: (0, r.jsx)(g.P, {
            billingAddressInfo: t,
            billingError: a,
            onBillingAddressChange: n,
            paymentSourceType: i
        })
    });
}
function eN() {
    return (0, r.jsx)(E.F, { className: Q.body });
}
function eC(e) {
    return () => (null != j.Z.error && (0, _.fw)(), e());
}
function ew(e) {
    let { onPrimary: t, onBack: n } = e,
        i = ei(e, ['onPrimary', 'onBack']),
        a = t;
    null != t && (a = eC(t));
    let o = n;
    return (
        null != n && (o = eC(n)),
        (0, r.jsx)(
            R.Z,
            er(et({}, i), {
                onPrimary: a,
                onBack: o
            })
        )
    );
}
function eR(e) {
    var t;
    let n,
        o,
        u,
        p,
        { paymentModalArgs: h, initialStep: m, prependSteps: g, appendSteps: E, onReturn: b, onComplete: y, onStepChange: O, breadcrumpSteps: A, currentBreadcrumpStep: k, header: M, analyticsData: G, analyticsLocation: H, hideBreadcrumbs: W = !1, usePaymentModalStep: q = !1, isEligibleForTrial: ee = !1, allowDesktopRedirectPurchase: en = !1, toastContent: ei, continueSessionToInitialStep: ea, overwriteSubscriptionPaymentSource: em = !1 } = e,
        { stripe: eE, contextMetadata: eb, activitySessionId: eC, paymentElementsEnabled: eR } = (0, N.JL)(),
        eP = i.useMemo(() => (0, V.vP)(), []),
        [eD, eL, ex, ek] = i.useMemo(
            () =>
                eg(
                    [
                        {
                            baseSteps: el,
                            methodType: $.He.CARD
                        },
                        {
                            baseSteps: ec,
                            methodType: $.He.PAYPAL
                        },
                        {
                            baseSteps: e_,
                            methodType: $.He.IDEAL
                        },
                        {
                            baseSteps: eh,
                            methodType: $.He.UNKNOWN
                        }
                    ],
                    {
                        prependSteps: g,
                        appendSteps: E,
                        paymentElementsEnabled: eR,
                        userIsStaff: eP
                    }
                ),
            [g, E, eR, eP]
        ),
        ej = i.useMemo(
            () => ({
                [$.He.CARD]: eD,
                [$.He.PAYPAL]: eL,
                [$.He.IDEAL]: ex,
                [$.He.GOPAY_WALLET]: ek,
                [$.He.KAKAOPAY]: ek
            }),
            [eD, eL, ex, ek]
        ),
        eM = {
            steps: [...g, ...es, ...E],
            methodType: $.He.PAYMENT_REQUEST
        },
        eU = {
            steps: [...g, ...eu, ...E],
            methodType: $.He.VENMO
        },
        eG = {
            steps: [...g, ...es, ...E]
        },
        eB = {
            steps: [...g, ...ed, ...E],
            methodType: $.He.PRZELEWY24
        },
        eZ = {
            steps: [...g, ...ef, ...E],
            methodType: $.He.EPS
        },
        eF = {
            steps: [...g, ...ep, ...E],
            methodType: $.He.CASH_APP
        };
    function eV(e) {
        switch (e) {
            case C.h8.CREDIT_CARD_INFORMATION:
                return eD;
            case C.h8.CASH_APP_INFORMATION:
                return eF;
            default:
                return { steps: [C.h8.ADD_PAYMENT_STEPS] };
        }
    }
    let [eH, eY] = i.useState(m),
        [eW, eK] = i.useState(null),
        [ez, eq] = i.useState(eV(m)),
        e$ = (0, l.e7)([j.Z], () => j.Z.redirectedPaymentSourceId),
        eX = (0, l.e7)([z.Z], () => z.Z.cashAppPayComponent),
        eQ = {
            completeSteps: tm,
            setIsSubmittingCurrentStep: h.setIsSubmittingCurrentStep
        },
        eJ = i.useRef(eQ);
    (i.useEffect(() => {
        eJ.current = eQ;
    }),
        i.useEffect(() => {
            let { completeSteps: e, setIsSubmittingCurrentStep: t } = eJ.current;
            (async () => {
                if (null == e$) return;
                await (0, d.tZ)();
                let n = U.Z.getPaymentSource(e$);
                null != n && (e(n), t(!1));
            })();
        }, [e$]));
    let e0 = i.useCallback(
        function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            (eK(null),
                eY(e),
                t &&
                    O({
                        currentStep: eH,
                        toStep: e
                    }));
        },
        [eH, O]
    );
    function e1(e) {
        ((0, c.showToast)((0, c.createToast)(void 0 !== ei ? ei : X.intl.string(X.t['VJPg+v']), c.ToastType.SUCCESS, { position: c.ToastPosition.BOTTOM })), y(eH, e), e0(m, !1));
    }
    let { setPaymentSourceId: e2, creditCardState: e3, setCreditCardState: e5, tokenState: e4, setTokenState: e6, isSubmittingCurrentStep: e8, billingAddressState: e7, setBillingAddressState: e9, setIsSubmittingCurrentStep: te, hasRedirectURL: tt, setHasRedirectURL: tn, braintreeEmail: tr, braintreeNonce: ti, venmoUsername: ta, adyenPaymentData: to, isAuthenticating: ts, epsBankState: tl, setEpsBankState: tc, p24BankState: tu, setP24BankState: td, selectedSkuId: tf } = h,
        t_ = null != tf ? tf : '',
        tp = (0, l.e7)([B.Z], () => B.Z.get(t_), [t_]),
        th = null == tp || null == (t = tp.eligiblePaymentGateways) ? void 0 : t.map((e) => e.valueOf());
    function tm(e) {
        (e2(e.id), e1(e));
    }
    let tg = !(0, Z.isDesktop)() || en ? ['googlePay', 'applePay'] : [],
        [tE, tb] = i.useState(!1),
        ty = i.useRef(null),
        tO = () => {
            null != ty.current && ty.current.show();
        },
        {
            shouldRenderPaymentElement: tv,
            paymentElementReady: tI,
            paymentElementSelectedType: tT,
            handlePaymentElementStep: tS,
            onBackPaymentElement: tA,
            combinedStripeElementsRef: tN,
            stripePaymentElementProps: tC,
            stripeAddressElementProps: tw
        } = (0, S.M)({
            step: eH,
            continueSessionToInitialStep: ea,
            paymentElementsEnabled: eR,
            handleStepChange: e0,
            logger: eo,
            shouldLogOnChangeEvents: eP || !1,
            onBillingAddressChange: (e, t) => {
                e9({
                    info: et({}, e7.info, e),
                    isValid: t
                });
            }
        });
    switch (eH) {
        case C.h8.ATTEMPT_GOOGLE_PAY:
        case C.h8.ATTEMPT_APPLE_PAY:
        case C.h8.PAYMENT_TYPE:
            let tR = (e, t) => {
                    let n = eR && (0, v.qH)(e, eP) && !en ? () => tS(e) : e0;
                    switch (e) {
                        case $.He.CARD:
                            en ? n(C.h8.AWAITING_BROWSER_CHECKOUT) : (eq(eD), n(C.h8.CREDIT_CARD_INFORMATION));
                            break;
                        case $.He.PAYPAL:
                            (eq(eL), n(C.h8.PAYPAL_INFORMATION));
                            break;
                        case $.He.VENMO:
                            (eq(eU), n(C.h8.VENMO_INFORMATION));
                            break;
                        case $.He.PAYMENT_REQUEST:
                            en && 'googlePay' === t ? n(C.h8.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY) : en && 'applePay' === t ? n(C.h8.AWAITING_BROWSER_CHECKOUT_APPLE_PAY) : (eq(eM), n(C.h8.PAYMENT_REQUEST_INFORMATION));
                            break;
                        case $.He.PRZELEWY24:
                            (eq(eB), n(C.h8.PRZELEWY24_INFORMATION));
                            break;
                        case $.He.EPS:
                            (eq(eZ), n(C.h8.EPS_INFORMATION));
                            break;
                        case $.He.IDEAL:
                            (eq(ex), n(C.h8.IDEAL_INFORMATION));
                            break;
                        case $.He.CASH_APP:
                            (eq(eF), n(C.h8.CASH_APP_INFORMATION));
                            break;
                        case $.He.GIROPAY:
                        case $.He.PAYSAFE_CARD:
                        case $.He.GCASH:
                        case $.He.GRABPAY_MY:
                        case $.He.MOMO_WALLET:
                        case $.He.KAKAOPAY:
                        case $.He.GOPAY_WALLET:
                        case $.He.BANCONTACT:
                            (eq({
                                steps: [...g, ...eh, ...E],
                                methodType: e
                            }),
                                n(C.h8.ADDRESS));
                    }
                    null != j.Z.error && (0, _.fw)();
                },
                tP = (e, t) => {
                    (e9((e) => er(et({}, e), { info: t })), eq(eM), tm(e));
                },
                tD = () => {
                    (eq(eG), e0(C.h8.PAYMENT_TYPE));
                },
                tL = async (e) => {
                    if (((0, _.Xt)(e), null == e)) return void tD();
                    try {
                        let t = await (0, d.i6)(e, void 0, H),
                            { billingAddressInfo: n } = (0, F.az)(e);
                        tP(t, n);
                    } catch (e) {}
                };
            if (eH === C.h8.ATTEMPT_GOOGLE_PAY || eH === C.h8.ATTEMPT_APPLE_PAY) {
                let e = X.intl.string(eH === C.h8.ATTEMPT_APPLE_PAY ? X.t.czhXDg : X.t.Zj2xQ0),
                    t = X.intl.string(eH === C.h8.ATTEMPT_APPLE_PAY ? X.t.WoXvJC : X.t.wnVVr6);
                ((n = (0, r.jsx)(L.t, {
                    onChooseType: tR,
                    paymentRequestWallet: eH === C.h8.ATTEMPT_APPLE_PAY ? 'applePay' : 'googlePay',
                    onStripePaymentMethodReceived: tL,
                    onPaymentRequestFailure: () => {
                        (tR($.He.CARD), eK(e));
                    },
                    onValidPaymentRequest: () => tb(!0),
                    paymentRequestRef: ty
                })),
                    (o = (0, r.jsx)(ew, {
                        onBack: () => e0(C.h8.PAYMENT_TYPE),
                        primaryCTA: R.Z.CTAType.CONTINUE,
                        primaryText: t,
                        onPrimary: () => tO(),
                        primaryDisabled: !tE
                    })));
                break;
            }
            ((n = (0, r.jsx)(ey, {
                onChooseType: tR,
                onStripePaymentMethodReceived: tL,
                paymentRequestWallets: tg,
                isEligibleForTrial: ee,
                paymentRequestPaymentContext: {
                    contextMetadata: eb,
                    activitySessionId: eC
                },
                paymentSourceTypeRestrictions: th
            })),
                (o = (0, r.jsx)(ew, { onBack: b })));
            break;
        case C.h8.PAYMENT_ELEMENT:
            if (!eR) throw (0, d.PP)('Payment Elements not enabled, invalid step', !0);
            let tx = () => {
                te(!0);
                try {
                    if (null == tT || !(0, v.qH)(tT, eP)) throw (0, d.PP)('Valid Payment Element source type not found', !0);
                    let { steps: e, methodType: t } = ej[tT];
                    (eq({
                        steps: e,
                        methodType: t === $.He.UNKNOWN ? tT : t
                    }),
                        tT === $.He.PAYPAL ? e0(C.h8.PAYPAL_INFORMATION) : e0(C.h8.ADDRESS));
                } catch (t) {
                    var e;
                    eo.error(null != (e = t.message) ? e : JSON.stringify(t));
                } finally {
                    te(!1);
                }
            };
            ((n = null),
                (o = (0, r.jsx)(ew, {
                    onBack: tA,
                    primaryCTA: R.Z.CTAType.CONTINUE,
                    primaryType: 'submit',
                    primaryText: X.intl.string(X.t.PDTjLC),
                    primarySubmitting: e8,
                    primaryDisabled: !tI,
                    onPrimary: tx
                })));
            break;
        case C.h8.CREDIT_CARD_INFORMATION:
            let tk = async (e) => {
                te(!0);
                try {
                    let t = await (0, d.qv)(eE, e);
                    (e6({ token: t }), e0(C.h8.ADDRESS));
                } catch (e) {
                    var t;
                    eo.error(null != (t = e.message) ? t : JSON.stringify(e));
                } finally {
                    te(!1);
                }
            };
            n = eR
                ? null
                : (0, r.jsx)(eO, {
                      infoNotice: eW,
                      onCardInfoChange: (e, t) => {
                          (e5({
                              info: e,
                              isValid: t
                          }),
                              e9((t) => er(et({}, t), { info: er(et({}, t.info), { name: e.name }) })));
                      }
                  });
            let tj = eR ? !tI : !e3.isValid,
                tM = () => {
                    e0(C.h8.PAYMENT_TYPE);
                };
            o = (0, r.jsx)(a.ElementsConsumer, {
                children: (e) => {
                    let { elements: t } = e;
                    return (0, r.jsx)(ew, {
                        onBack: tM,
                        primaryCTA: R.Z.CTAType.CONTINUE,
                        primaryType: 'submit',
                        primaryText: X.intl.string(X.t.PDTjLC),
                        primarySubmitting: e8,
                        primaryDisabled: tj,
                        onPrimary: () => tk(t)
                    });
                }
            });
            break;
        case C.h8.AWAITING_BROWSER_CHECKOUT:
        case C.h8.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
        case C.h8.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
            ((n = (0, r.jsx)('div', {
                className: Q.body,
                children: (0, r.jsx)(D.M, {
                    step: eH,
                    onPurchaseComplete: () => y(eH),
                    onHandoffFailure: () => {
                        (eq(eD), e0(C.h8.CREDIT_CARD_INFORMATION));
                    }
                })
            })),
                (o = (0, r.jsx)(D.a, {
                    onPrimaryClick: () => {
                        (eq(eD), e0(C.h8.CREDIT_CARD_INFORMATION));
                    },
                    onBackClick: () => {
                        (eq(eG), e0(C.h8.PAYMENT_TYPE));
                    }
                })));
            break;
        case C.h8.EPS_INFORMATION:
            ((n = (0, r.jsx)(T.Z, {
                type: $.He.EPS,
                onAccountHolderNameChange: (e) =>
                    e9({
                        info: er(et({}, e7.info), { name: e }),
                        isValid: e7.isValid
                    }),
                onEPSBankChange: (e) => tc(e),
                epsBankValue: tl,
                billingAddressInfo: e7.info
            })),
                (o = (0, r.jsx)(ew, {
                    onBack: () => e0(C.h8.PAYMENT_TYPE),
                    primaryCTA: R.Z.CTAType.CONTINUE,
                    primaryText: X.intl.string(X.t.PDTjLC),
                    primaryDisabled: void 0 === tl || '' === tl || '' === e7.info.name,
                    onPrimary: () => e0(C.h8.ADDRESS)
                })));
            break;
        case C.h8.IDEAL_INFORMATION:
            ((n = (0, r.jsx)(I.Z, {
                type: $.He.IDEAL,
                onAccountHolderNameChange: (e) =>
                    e9({
                        info: er(et({}, e7.info), { name: e }),
                        isValid: e7.isValid
                    }),
                billingAddressInfo: e7.info
            })),
                (o = (0, r.jsx)(ew, {
                    onBack: () => e0(C.h8.PAYMENT_TYPE),
                    primaryCTA: R.Z.CTAType.CONTINUE,
                    primaryText: X.intl.string(X.t.PDTjLC),
                    primaryDisabled: '' === e7.info.name,
                    onPrimary: () => e0(C.h8.ADDRESS)
                })));
            break;
        case C.h8.PRZELEWY24_INFORMATION:
            ((n = (0, r.jsx)(T.Z, {
                type: $.He.PRZELEWY24,
                onNameChange: (e) =>
                    e9({
                        info: er(et({}, e7.info), { name: e }),
                        isValid: e7.isValid
                    }),
                onEmailChange: (e) =>
                    e9({
                        info: er(et({}, e7.info), { email: e }),
                        isValid: e7.isValid
                    }),
                onP24BankChange: (e) => {
                    td(e);
                },
                p24BankValue: tu,
                billingAddressInfo: e7.info
            })),
                (o = (0, r.jsx)(ew, {
                    onBack: () => e0(C.h8.PAYMENT_TYPE),
                    primaryCTA: R.Z.CTAType.CONTINUE,
                    primaryText: X.intl.string(X.t.PDTjLC),
                    primaryDisabled: void 0 === e7.info.name || '' === e7.info.name || void 0 === e7.info.email || '' === e7.info.email || void 0 === tu || '' === tu,
                    onPrimary: () => e0(C.h8.ADDRESS)
                })));
            break;
        case C.h8.PAYPAL_INFORMATION:
            let tU = 0 !== tr.length && null != ti;
            n = (0, r.jsx)(ev, {});
            let tG = eR ? () => tS($.He.PAYPAL) : () => e0(C.h8.PAYMENT_TYPE);
            o = (0, r.jsx)(ew, {
                onBack: tG,
                primaryCTA: R.Z.CTAType.CONTINUE,
                primaryText: tU ? X.intl.string(X.t.PDTjLC) : X.intl.string(X.t.Djzd7O),
                onPrimary: () => (tU ? e0(C.h8.ADDRESS) : (0, f.i0)())
            });
            break;
        case C.h8.VENMO_INFORMATION:
            let tB = 0 !== ta.length && null != ti;
            ((n = (0, r.jsx)(eI, {})),
                (o = (0, r.jsx)(ew, {
                    onBack: () => e0(C.h8.PAYMENT_TYPE),
                    primaryCTA: R.Z.CTAType.CONTINUE,
                    primaryText: tB ? X.intl.string(X.t.PDTjLC) : X.intl.string(X.t['4KoTLC']),
                    onPrimary: () => (tB ? e0(C.h8.ADDRESS) : (0, f.og)())
                })));
            break;
        case C.h8.PAYMENT_REQUEST_INFORMATION:
            ((n = (0, r.jsx)(eS, {})), (o = (0, r.jsx)(ew, { onBack: () => e0(C.h8.PAYMENT_TYPE) })));
            break;
        case C.h8.CASH_APP_INFORMATION:
            let tZ = null != to,
                tF = null != eX;
            ((n = (0, r.jsx)(eT, {})),
                (o = (0, r.jsx)(ew, {
                    onBack: () => e0(C.h8.PAYMENT_TYPE),
                    primaryCTA: R.Z.CTAType.CONTINUE,
                    primaryText: tZ ? X.intl.string(X.t.PDTjLC) : X.intl.string(X.t['9ALP8/']),
                    onPrimary: () => (tZ ? e0(C.h8.ADDRESS) : (0, K.cp)()),
                    primaryDisabled: !tF
                })));
            break;
        case C.h8.ADDRESS:
            let tV = async () => {
                te(!0);
                let e = eR && null != tT,
                    t = e ? tT : ez.methodType;
                switch (t) {
                    case $.He.CARD:
                        try {
                            let t = e ? await (0, d.Q5)(eE, e7.info, $.He.CARD, tN.current, H) : await (0, d.f0)(eE, e4.token, e7.info, H);
                            tm(t);
                        } catch (e) {}
                        break;
                    case $.He.VENMO:
                    case $.He.PAYPAL:
                        try {
                            s()(null != ti, 'Missing braintreeNonce');
                            let e = await (0, d.lP)(ti, e7.info, H);
                            tm(e);
                        } catch (e) {}
                        break;
                    case $.He.EPS:
                        try {
                            let e = await (0, d.YQ)(eE, tl, e7.info, H);
                            tm(e);
                        } catch (e) {
                            eo.warn(e);
                        }
                        break;
                    case $.He.IDEAL:
                        try {
                            let t = e ? await (0, d.Q5)(eE, e7.info, $.He.IDEAL, tN.current, H) : await (0, d.aN)(eE, e7.info, H);
                            tm(t);
                        } catch (e) {
                            eo.warn(e);
                        }
                        break;
                    case $.He.PRZELEWY24:
                        try {
                            if (void 0 === tu) throw (0, d.SQ)('Bank required for Przelewy24');
                            let e = await (0, d.pF)(eE, { p24Bank: tu }, e7.info, H);
                            tm(e);
                        } catch (e) {}
                        break;
                    case $.He.PAYSAFE_CARD:
                    case $.He.GRABPAY_MY:
                        try {
                            let e = await (0, d.sF)(e7.info, t, H);
                            tm(e);
                        } catch (e) {}
                        break;
                    case $.He.GCASH:
                    case $.He.MOMO_WALLET:
                    case $.He.KAKAOPAY:
                    case $.He.GOPAY_WALLET:
                        try {
                            let { redirectConfirmation: e } = await (0, d.Dk)(e7.info, t, H);
                            tn(e);
                        } catch (e) {}
                        break;
                    case $.He.GIROPAY:
                    case $.He.BANCONTACT:
                        try {
                            let e = await (0, d.GV)(eE, e7.info, t, H);
                            tm(e);
                        } catch (e) {}
                        break;
                    case $.He.CASH_APP:
                        try {
                            s()(null != to, 'Missing adyenPaymentData');
                            let { paymentSource: e } = await (0, d.Dk)(e7.info, t, H, to, em);
                            (s()(null != e, 'Cash App Pay Payment Source missing'), tm(e));
                        } catch (e) {}
                        break;
                    default:
                        throw Error('unknown step not handled');
                }
                tt || te(!1);
            };
            switch (ez.methodType) {
                case $.He.CARD:
                    ((p = C.h8.CREDIT_CARD_INFORMATION), (u = $.He.CARD));
                    break;
                case $.He.PAYPAL:
                    ((p = C.h8.PAYPAL_INFORMATION), (u = $.He.PAYPAL));
                    break;
                case $.He.VENMO:
                    ((p = C.h8.VENMO_INFORMATION), (u = $.He.VENMO));
                    break;
                case $.He.GIROPAY:
                    ((p = C.h8.PAYMENT_TYPE), (u = $.He.GIROPAY));
                    break;
                case $.He.PAYSAFE_CARD:
                case $.He.GCASH:
                case $.He.GRABPAY_MY:
                case $.He.MOMO_WALLET:
                case $.He.KAKAOPAY:
                case $.He.GOPAY_WALLET:
                case $.He.BANCONTACT:
                    ((p = C.h8.PAYMENT_TYPE), (u = ez.methodType));
                    break;
                case $.He.EPS:
                    ((p = C.h8.EPS_INFORMATION), (u = $.He.EPS));
                    break;
                case $.He.IDEAL:
                    ((p = C.h8.IDEAL_INFORMATION), (u = $.He.IDEAL));
                    break;
                case $.He.PRZELEWY24:
                    ((p = C.h8.PRZELEWY24_INFORMATION), (u = $.He.PRZELEWY24));
                    break;
                case $.He.CASH_APP:
                    ((p = C.h8.CASH_APP_INFORMATION), (u = $.He.CASH_APP));
                    break;
                default:
                    ((p = C.h8.PAYMENT_TYPE), (u = $.He.CARD));
            }
            (eR && null != tT && (p = C.h8.PAYMENT_ELEMENT),
                (n = eR
                    ? null
                    : (0, r.jsx)(eA, {
                          billingAddressInfo: e7.info,
                          onBillingAddressChange: (e, t) => {
                              e9({
                                  info: et({}, e7.info, e),
                                  isValid: t
                              });
                          },
                          paymentSourceType: u
                      })),
                (o = (0, r.jsx)(ew, {
                    onBack: () => e0(p),
                    primaryCTA: R.Z.CTAType.CONTINUE,
                    primaryText: X.intl.string(X.t.PDTjLC),
                    primarySubmitting: e8,
                    primaryDisabled: !e7.isValid || ts,
                    onPrimary: tV
                })));
            break;
        case C.h8.AWAITING_AUTHENTICATION:
            n = (0, r.jsx)(eN, {});
            break;
        default:
            throw Error('Unexpected step: '.concat(eH));
    }
    let tH = eR && tv,
        tY = tH ? 'combined_stripe_elements' : void 0,
        tW = (0, r.jsxs)(c.qBt, {
            className: J.sequencer,
            staticClassName: J.sequencerStatic,
            animatedNodeClassName: J.sequencerAnimatedNode,
            fillParent: !0,
            overrideKey: tY,
            step: eH,
            steps: ez.steps,
            sideMargin: 20,
            children: [
                tH &&
                    (0, r.jsx)(S.h, {
                        step: eH,
                        analyticsContext:
                            null != G
                                ? {
                                      activitySessionId: eC,
                                      contextMetadata: eb,
                                      analyticsData: G
                                  }
                                : void 0,
                        paymentElementSelectedType: tT,
                        originalPaymentType: ez.methodType,
                        elementsRef: tN,
                        stripePaymentElementProps: tC,
                        stripeAddressElementProps: tw,
                        billingAddressInfo: e7.info,
                        onSetupError: tA
                    }),
                n
            ]
        }),
        tK = eH === C.h8.PAYMENT_TYPE && 0 === g.length ? null : o;
    return q
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  ee &&
                      (0, r.jsx)(w.Z, {
                          className: Q.paymentModalBreadcrumbs,
                          isEligibleForTrial: ee
                      }),
                  (0, r.jsxs)(P.C3, {
                      children: [(0, r.jsx)(x.Z, { className: Q.paymentModalError }), tW]
                  }),
                  (0, r.jsx)(P.O3, { children: tK })
              ]
          })
        : (0, r.jsx)(Y.Z, {
              steps: null != A ? A : ez.steps,
              currentStep: null != k ? k : eH,
              overrideKey: tY,
              paymentError: h.paymentError,
              header: M,
              hideBreadcrumbs: W,
              body: tW,
              footer: tK
          });
}
function eP(e) {
    let {
        defaultPaymentSourceId: t,
        paymentSources: n,
        hasFetchedPaymentSources: r
    } = (0, l.cj)([U.Z], () => ({
        defaultPaymentSourceId: void 0 !== e ? e : U.Z.defaultPaymentSourceId,
        paymentSources: U.Z.paymentSources,
        hasFetchedPaymentSources: U.Z.hasFetchedPaymentSources
    }));
    (0, O.ZP)(() => {
        (null == z.Z.cashAppPayComponent && (0, K.eI)(), (0, f.eI)(), r || (0, d.tZ)());
    });
    let [a, o] = i.useState(t);
    null != t && null == a && o(t);
    let [s, c] = i.useState(() => ({
            info: eE,
            isValid: !1
        })),
        [p, h] = i.useState(() => ({
            info: eb,
            isValid: !1
        })),
        [m, g] = i.useState(''),
        [E, b] = i.useState(''),
        [y, v] = i.useState(() => ({ token: null })),
        [I, T, S, A, N] = (0, l.Wu)([j.Z], () => [j.Z.braintreeEmail, j.Z.braintreeNonce, j.Z.error, j.Z.venmoUsername, j.Z.adyenPaymentData]),
        [C, w] = (0, l.Wu)([M.Z], () => [M.Z.error, M.Z.isAwaitingAuthentication]);
    i.useEffect(() => {
        let e = (e) => {
            let { billingAddress: t } = e;
            h({
                info: t,
                isValid: t.country.length > 0
            });
        };
        return (
            u.Z.subscribe('BRAINTREE_TOKENIZE_PAYPAL_SUCCESS', e),
            () => {
                (u.Z.unsubscribe('BRAINTREE_TOKENIZE_PAYPAL_SUCCESS', e), (0, _.fw)());
            }
        );
    }, []);
    let [R, P] = i.useState(!1),
        [D, L] = i.useState(!1),
        [x, k] = i.useState(null),
        B = i.useRef(null),
        Z = (0, l.e7)([M.Z], () => M.Z.isAwaitingAuthentication),
        [F, V] = (0, l.Wu)([G.Z], () => [G.Z.purchaseTokenAuthState, G.Z.purchaseTokenHash]);
    return (
        i.useEffect(() => {
            null != x && null != B.current && B.current.scrollIntoView({ behavior: 'smooth' });
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
            isSubmittingCurrentStep: R,
            setIsSubmittingCurrentStep: P,
            hasRedirectURL: D,
            setHasRedirectURL: L,
            braintreeEmail: I,
            braintreeNonce: T,
            venmoUsername: A,
            adyenPaymentData: N,
            paymentError: null != C ? C : S,
            paymentAuthenticationState: w ? H.wr.PENDING : null != C ? H.wr.ERROR : H.wr.NONE,
            purchaseError: x,
            setPurchaseError: k,
            purchaseErrorBlockRef: B,
            isAuthenticating: Z,
            purchaseTokenAuthState: F,
            purchaseTokenHash: V,
            epsBankState: E,
            setEpsBankState: b,
            p24BankState: m,
            setP24BankState: g
        }
    );
}
