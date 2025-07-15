(n.d(t, {
    fL: () => ew,
    vP: () => eP
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
    R = n(51499),
    P = n(586585),
    w = n(27034),
    D = n(35248),
    L = n(439021),
    x = n(698708),
    M = n(351402),
    k = n(975060),
    j = n(505649),
    U = n(853872),
    G = n(882712),
    B = n(55563),
    V = n(358085),
    F = n(622999),
    Z = n(51144),
    H = n(176919),
    Y = n(185139),
    W = n(396955),
    K = n(559725),
    z = n(439041),
    q = n(850228),
    X = n(231338),
    Q = n(388032),
    J = n(327763),
    $ = n(106194);
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
        if (t === X.He.CARD) return e.map((e) => (e === C.h8.CREDIT_CARD_INFORMATION ? C.h8.PAYMENT_ELEMENT : e));
        if (t === X.He.UNKNOWN || (0, v.qH)(t, n)) {
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
        className: J.body,
        children: [(0, r.jsx)(W.Y, { paymentRestrictionBannerType: n }), (0, r.jsx)(p.ZP, et({}, e))]
    });
}
function eO(e) {
    let { onCardInfoChange: t, infoNotice: n } = e,
        i = (0, l.e7)([k.Z], () => k.Z.error);
    return (0, r.jsxs)('div', {
        className: J.body,
        children: [
            null != n &&
                (0, r.jsx)(c.kzN, {
                    className: J.infoNotice,
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
        className: J.body,
        children: (0, r.jsx)(h.Z, {})
    });
}
function eI() {
    return (0, r.jsx)('div', {
        className: J.body,
        children: (0, r.jsx)(m.Z, {})
    });
}
function eT() {
    return (0, r.jsx)('div', {
        className: J.body,
        children: (0, r.jsx)(q.Z, {})
    });
}
function eS() {
    let e = (0, l.e7)([M.Z], () => M.Z.isBusy),
        t = (0, l.e7)([k.Z], () => k.Z.stripePaymentMethod);
    return (0, r.jsx)(y.k, {
        className: J.body,
        stripePaymentMethod: t,
        submitting: e
    });
}
function eA(e) {
    let { billingAddressInfo: t, onBillingAddressChange: n, paymentSourceType: i } = e,
        a = (0, l.e7)([k.Z], () => k.Z.error);
    return (0, r.jsx)('div', {
        className: J.body,
        children: (0, r.jsx)(g.P, {
            billingAddressInfo: t,
            billingError: a,
            onBillingAddressChange: n,
            paymentSourceType: i
        })
    });
}
function eN() {
    return (0, r.jsx)(E.F, { className: J.body });
}
function eC(e) {
    return () => (null != k.Z.error && (0, _.fw)(), e());
}
function eR(e) {
    let { onPrimary: t, onBack: n } = e,
        i = ei(e, ['onPrimary', 'onBack']),
        a = t;
    null != t && (a = eC(t));
    let o = n;
    return (
        null != n && (o = eC(n)),
        (0, r.jsx)(
            P.Z,
            er(et({}, i), {
                onPrimary: a,
                onBack: o
            })
        )
    );
}
function eP(e) {
    var t;
    let n,
        o,
        u,
        p,
        { paymentModalArgs: h, initialStep: m, prependSteps: g, appendSteps: E, onReturn: b, onComplete: y, onStepChange: O, breadcrumpSteps: A, currentBreadcrumpStep: M, header: j, analyticsData: G, analyticsLocation: H, hideBreadcrumbs: W = !1, usePaymentModalStep: q = !1, isEligibleForTrial: ee = !1, allowDesktopRedirectPurchase: en = !1, toastContent: ei, continueSessionToInitialStep: ea, overwriteSubscriptionPaymentSource: em = !1 } = e,
        { stripe: eE, contextMetadata: eb, activitySessionId: eC, paymentElementsEnabled: eP } = (0, N.JL)(),
        ew = i.useMemo(() => (0, Z.vP)(), []),
        [eD, eL, ex, eM] = i.useMemo(
            () =>
                eg(
                    [
                        {
                            baseSteps: el,
                            methodType: X.He.CARD
                        },
                        {
                            baseSteps: ec,
                            methodType: X.He.PAYPAL
                        },
                        {
                            baseSteps: e_,
                            methodType: X.He.IDEAL
                        },
                        {
                            baseSteps: eh,
                            methodType: X.He.UNKNOWN
                        }
                    ],
                    {
                        prependSteps: g,
                        appendSteps: E,
                        paymentElementsEnabled: eP,
                        userIsStaff: ew
                    }
                ),
            [g, E, eP, ew]
        ),
        ek = i.useMemo(
            () => ({
                [X.He.CARD]: eD,
                [X.He.PAYPAL]: eL,
                [X.He.IDEAL]: ex,
                [X.He.GOPAY_WALLET]: eM,
                [X.He.KAKAOPAY]: eM
            }),
            [eD, eL, ex, eM]
        ),
        ej = {
            steps: [...g, ...es, ...E],
            methodType: X.He.PAYMENT_REQUEST
        },
        eU = {
            steps: [...g, ...eu, ...E],
            methodType: X.He.VENMO
        },
        eG = {
            steps: [...g, ...es, ...E]
        },
        eB = {
            steps: [...g, ...ed, ...E],
            methodType: X.He.PRZELEWY24
        },
        eV = {
            steps: [...g, ...ef, ...E],
            methodType: X.He.EPS
        },
        eF = {
            steps: [...g, ...ep, ...E],
            methodType: X.He.CASH_APP
        };
    function eZ(e) {
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
        [ez, eq] = i.useState(eZ(m)),
        eX = (0, l.e7)([k.Z], () => k.Z.redirectedPaymentSourceId),
        eQ = (0, l.e7)([z.Z], () => z.Z.cashAppPayComponent),
        eJ = {
            completeSteps: tm,
            setIsSubmittingCurrentStep: h.setIsSubmittingCurrentStep
        },
        e$ = i.useRef(eJ);
    (i.useEffect(() => {
        e$.current = eJ;
    }),
        i.useEffect(() => {
            let { completeSteps: e, setIsSubmittingCurrentStep: t } = e$.current;
            (async () => {
                if (null == eX) return;
                await (0, d.tZ)();
                let n = U.Z.getPaymentSource(eX);
                null != n && (e(n), t(!1));
            })();
        }, [eX]));
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
        ((0, c.showToast)((0, c.createToast)(void 0 !== ei ? ei : Q.intl.string(Q.t['VJPg+v']), c.ToastType.SUCCESS, { position: c.ToastPosition.BOTTOM })), y(eH, e), e0(m, !1));
    }
    let { setPaymentSourceId: e2, creditCardState: e3, setCreditCardState: e4, tokenState: e5, setTokenState: e6, isSubmittingCurrentStep: e8, billingAddressState: e7, setBillingAddressState: e9, setIsSubmittingCurrentStep: te, hasRedirectURL: tt, setHasRedirectURL: tn, braintreeEmail: tr, braintreeNonce: ti, venmoUsername: ta, adyenPaymentData: to, isAuthenticating: ts, epsBankState: tl, setEpsBankState: tc, p24BankState: tu, setP24BankState: td, selectedSkuId: tf } = h,
        t_ = null != tf ? tf : '',
        tp = (0, l.e7)([B.Z], () => B.Z.get(t_), [t_]),
        th = null == tp || null == (t = tp.eligiblePaymentGateways) ? void 0 : t.map((e) => e.valueOf());
    function tm(e) {
        (e2(e.id), e1(e));
    }
    let tg = !(0, V.isDesktop)() || en ? ['googlePay', 'applePay'] : [],
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
            stripeAddressElementProps: tR
        } = (0, S.M)({
            step: eH,
            continueSessionToInitialStep: ea,
            paymentElementsEnabled: eP,
            handleStepChange: e0,
            logger: eo,
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
            let tP = (e, t) => {
                    let n = eP && (0, v.qH)(e, ew) && !en ? () => tS(e) : e0;
                    switch (e) {
                        case X.He.CARD:
                            en ? n(C.h8.AWAITING_BROWSER_CHECKOUT) : (eq(eD), n(C.h8.CREDIT_CARD_INFORMATION));
                            break;
                        case X.He.PAYPAL:
                            (eq(eL), n(C.h8.PAYPAL_INFORMATION));
                            break;
                        case X.He.VENMO:
                            (eq(eU), n(C.h8.VENMO_INFORMATION));
                            break;
                        case X.He.PAYMENT_REQUEST:
                            en && 'googlePay' === t ? n(C.h8.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY) : en && 'applePay' === t ? n(C.h8.AWAITING_BROWSER_CHECKOUT_APPLE_PAY) : (eq(ej), n(C.h8.PAYMENT_REQUEST_INFORMATION));
                            break;
                        case X.He.PRZELEWY24:
                            (eq(eB), n(C.h8.PRZELEWY24_INFORMATION));
                            break;
                        case X.He.EPS:
                            (eq(eV), n(C.h8.EPS_INFORMATION));
                            break;
                        case X.He.IDEAL:
                            (eq(ex), n(C.h8.IDEAL_INFORMATION));
                            break;
                        case X.He.CASH_APP:
                            (eq(eF), n(C.h8.CASH_APP_INFORMATION));
                            break;
                        case X.He.GIROPAY:
                        case X.He.PAYSAFE_CARD:
                        case X.He.GCASH:
                        case X.He.GRABPAY_MY:
                        case X.He.MOMO_WALLET:
                        case X.He.KAKAOPAY:
                        case X.He.GOPAY_WALLET:
                        case X.He.BANCONTACT:
                            (eq({
                                steps: [...g, ...eh, ...E],
                                methodType: e
                            }),
                                n(C.h8.ADDRESS));
                    }
                    null != k.Z.error && (0, _.fw)();
                },
                tw = (e, t) => {
                    (e9((e) => er(et({}, e), { info: t })), eq(ej), tm(e));
                },
                tD = () => {
                    (eq(eG), e0(C.h8.PAYMENT_TYPE));
                },
                tL = async (e) => {
                    if (((0, _.Xt)(e), null == e)) return void tD();
                    try {
                        let t = await (0, d.i6)(e, void 0, H),
                            { billingAddressInfo: n } = (0, F.az)(e);
                        tw(t, n);
                    } catch (e) {}
                };
            if (eH === C.h8.ATTEMPT_GOOGLE_PAY || eH === C.h8.ATTEMPT_APPLE_PAY) {
                let e = Q.intl.string(eH === C.h8.ATTEMPT_APPLE_PAY ? Q.t.czhXDg : Q.t.Zj2xQ0),
                    t = Q.intl.string(eH === C.h8.ATTEMPT_APPLE_PAY ? Q.t.WoXvJC : Q.t.wnVVr6);
                ((n = (0, r.jsx)(L.t, {
                    onChooseType: tP,
                    paymentRequestWallet: eH === C.h8.ATTEMPT_APPLE_PAY ? 'applePay' : 'googlePay',
                    onStripePaymentMethodReceived: tL,
                    onPaymentRequestFailure: () => {
                        (tP(X.He.CARD), eK(e));
                    },
                    onValidPaymentRequest: () => tb(!0),
                    paymentRequestRef: ty
                })),
                    (o = (0, r.jsx)(eR, {
                        onBack: () => e0(C.h8.PAYMENT_TYPE),
                        primaryCTA: P.Z.CTAType.CONTINUE,
                        primaryText: t,
                        onPrimary: () => tO(),
                        primaryDisabled: !tE
                    })));
                break;
            }
            ((n = (0, r.jsx)(ey, {
                onChooseType: tP,
                onStripePaymentMethodReceived: tL,
                paymentRequestWallets: tg,
                isEligibleForTrial: ee,
                paymentRequestPaymentContext: {
                    contextMetadata: eb,
                    activitySessionId: eC
                },
                paymentSourceTypeRestrictions: th
            })),
                (o = (0, r.jsx)(eR, { onBack: b })));
            break;
        case C.h8.PAYMENT_ELEMENT:
            if (!eP) throw (0, d.SQ)('Payment Elements not enabled, invalid step');
            let tx = () => {
                te(!0);
                try {
                    if (null == tT || !(0, v.qH)(tT, ew)) throw (0, d.SQ)('Valid Payment Element source type not found');
                    let { steps: e, methodType: t } = ek[tT];
                    (eq({
                        steps: e,
                        methodType: t === X.He.UNKNOWN ? tT : t
                    }),
                        tT === X.He.PAYPAL ? e0(C.h8.PAYPAL_INFORMATION) : e0(C.h8.ADDRESS));
                } catch (t) {
                    var e;
                    eo.error(null != (e = t.message) ? e : JSON.stringify(t));
                } finally {
                    te(!1);
                }
            };
            ((n = null),
                (o = (0, r.jsx)(eR, {
                    onBack: tA,
                    primaryCTA: P.Z.CTAType.CONTINUE,
                    primaryType: 'submit',
                    primaryText: Q.intl.string(Q.t.PDTjLC),
                    primarySubmitting: e8,
                    primaryDisabled: !tI,
                    onPrimary: tx
                })));
            break;
        case C.h8.CREDIT_CARD_INFORMATION:
            let tM = async (e) => {
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
            n = eP
                ? null
                : (0, r.jsx)(eO, {
                      infoNotice: eW,
                      onCardInfoChange: (e, t) => {
                          (e4({
                              info: e,
                              isValid: t
                          }),
                              e9((t) => er(et({}, t), { info: er(et({}, t.info), { name: e.name }) })));
                      }
                  });
            let tk = eP ? !tI : !e3.isValid,
                tj = () => {
                    e0(C.h8.PAYMENT_TYPE);
                };
            o = (0, r.jsx)(a.ElementsConsumer, {
                children: (e) => {
                    let { elements: t } = e;
                    return (0, r.jsx)(eR, {
                        onBack: tj,
                        primaryCTA: P.Z.CTAType.CONTINUE,
                        primaryType: 'submit',
                        primaryText: Q.intl.string(Q.t.PDTjLC),
                        primarySubmitting: e8,
                        primaryDisabled: tk,
                        onPrimary: () => tM(t)
                    });
                }
            });
            break;
        case C.h8.AWAITING_BROWSER_CHECKOUT:
        case C.h8.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
        case C.h8.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
            ((n = (0, r.jsx)('div', {
                className: J.body,
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
                type: X.He.EPS,
                onAccountHolderNameChange: (e) =>
                    e9({
                        info: er(et({}, e7.info), { name: e }),
                        isValid: e7.isValid
                    }),
                onEPSBankChange: (e) => tc(e),
                epsBankValue: tl,
                billingAddressInfo: e7.info
            })),
                (o = (0, r.jsx)(eR, {
                    onBack: () => e0(C.h8.PAYMENT_TYPE),
                    primaryCTA: P.Z.CTAType.CONTINUE,
                    primaryText: Q.intl.string(Q.t.PDTjLC),
                    primaryDisabled: void 0 === tl || '' === tl || '' === e7.info.name,
                    onPrimary: () => e0(C.h8.ADDRESS)
                })));
            break;
        case C.h8.IDEAL_INFORMATION:
            ((n = (0, r.jsx)(I.Z, {
                type: X.He.IDEAL,
                onAccountHolderNameChange: (e) =>
                    e9({
                        info: er(et({}, e7.info), { name: e }),
                        isValid: e7.isValid
                    }),
                billingAddressInfo: e7.info
            })),
                (o = (0, r.jsx)(eR, {
                    onBack: () => e0(C.h8.PAYMENT_TYPE),
                    primaryCTA: P.Z.CTAType.CONTINUE,
                    primaryText: Q.intl.string(Q.t.PDTjLC),
                    primaryDisabled: '' === e7.info.name,
                    onPrimary: () => e0(C.h8.ADDRESS)
                })));
            break;
        case C.h8.PRZELEWY24_INFORMATION:
            ((n = (0, r.jsx)(T.Z, {
                type: X.He.PRZELEWY24,
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
                (o = (0, r.jsx)(eR, {
                    onBack: () => e0(C.h8.PAYMENT_TYPE),
                    primaryCTA: P.Z.CTAType.CONTINUE,
                    primaryText: Q.intl.string(Q.t.PDTjLC),
                    primaryDisabled: void 0 === e7.info.name || '' === e7.info.name || void 0 === e7.info.email || '' === e7.info.email || void 0 === tu || '' === tu,
                    onPrimary: () => e0(C.h8.ADDRESS)
                })));
            break;
        case C.h8.PAYPAL_INFORMATION:
            let tU = 0 !== tr.length && null != ti;
            n = (0, r.jsx)(ev, {});
            let tG = eP ? () => tS(X.He.PAYPAL) : () => e0(C.h8.PAYMENT_TYPE);
            o = (0, r.jsx)(eR, {
                onBack: tG,
                primaryCTA: P.Z.CTAType.CONTINUE,
                primaryText: tU ? Q.intl.string(Q.t.PDTjLC) : Q.intl.string(Q.t.Djzd7O),
                onPrimary: () => (tU ? e0(C.h8.ADDRESS) : (0, f.i0)())
            });
            break;
        case C.h8.VENMO_INFORMATION:
            let tB = 0 !== ta.length && null != ti;
            ((n = (0, r.jsx)(eI, {})),
                (o = (0, r.jsx)(eR, {
                    onBack: () => e0(C.h8.PAYMENT_TYPE),
                    primaryCTA: P.Z.CTAType.CONTINUE,
                    primaryText: tB ? Q.intl.string(Q.t.PDTjLC) : Q.intl.string(Q.t['4KoTLC']),
                    onPrimary: () => (tB ? e0(C.h8.ADDRESS) : (0, f.og)())
                })));
            break;
        case C.h8.PAYMENT_REQUEST_INFORMATION:
            ((n = (0, r.jsx)(eS, {})), (o = (0, r.jsx)(eR, { onBack: () => e0(C.h8.PAYMENT_TYPE) })));
            break;
        case C.h8.CASH_APP_INFORMATION:
            let tV = null != to,
                tF = null != eQ;
            ((n = (0, r.jsx)(eT, {})),
                (o = (0, r.jsx)(eR, {
                    onBack: () => e0(C.h8.PAYMENT_TYPE),
                    primaryCTA: P.Z.CTAType.CONTINUE,
                    primaryText: tV ? Q.intl.string(Q.t.PDTjLC) : Q.intl.string(Q.t['9ALP8/']),
                    onPrimary: () => (tV ? e0(C.h8.ADDRESS) : (0, K.cp)()),
                    primaryDisabled: !tF
                })));
            break;
        case C.h8.ADDRESS:
            let tZ = async () => {
                te(!0);
                let e = eP && null != tT,
                    t = e ? tT : ez.methodType;
                switch (t) {
                    case X.He.CARD:
                        try {
                            let t = e ? await (0, d.Q5)(eE, e7.info, X.He.CARD, tN.current, H) : await (0, d.f0)(eE, e5.token, e7.info, H);
                            tm(t);
                        } catch (e) {}
                        break;
                    case X.He.VENMO:
                    case X.He.PAYPAL:
                        try {
                            s()(null != ti, 'Missing braintreeNonce');
                            let e = await (0, d.lP)(ti, e7.info, H);
                            tm(e);
                        } catch (e) {}
                        break;
                    case X.He.EPS:
                        try {
                            let e = await (0, d.YQ)(eE, tl, e7.info, H);
                            tm(e);
                        } catch (e) {
                            eo.warn(e);
                        }
                        break;
                    case X.He.IDEAL:
                        try {
                            let t = e ? await (0, d.Q5)(eE, e7.info, X.He.IDEAL, tN.current, H) : await (0, d.aN)(eE, e7.info, H);
                            tm(t);
                        } catch (e) {
                            eo.warn(e);
                        }
                        break;
                    case X.He.PRZELEWY24:
                        try {
                            if (void 0 === tu) throw (0, d.SQ)('Bank required for Przelewy24');
                            let e = await (0, d.pF)(eE, { p24Bank: tu }, e7.info, H);
                            tm(e);
                        } catch (e) {}
                        break;
                    case X.He.PAYSAFE_CARD:
                    case X.He.GRABPAY_MY:
                        try {
                            let e = await (0, d.sF)(e7.info, t, H);
                            tm(e);
                        } catch (e) {}
                        break;
                    case X.He.GCASH:
                    case X.He.MOMO_WALLET:
                    case X.He.KAKAOPAY:
                    case X.He.GOPAY_WALLET:
                        try {
                            let { redirectConfirmation: e } = await (0, d.Dk)(e7.info, t, H);
                            tn(e);
                        } catch (e) {}
                        break;
                    case X.He.GIROPAY:
                    case X.He.BANCONTACT:
                        try {
                            let e = await (0, d.GV)(eE, e7.info, t, H);
                            tm(e);
                        } catch (e) {}
                        break;
                    case X.He.CASH_APP:
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
                case X.He.CARD:
                    ((p = C.h8.CREDIT_CARD_INFORMATION), (u = X.He.CARD));
                    break;
                case X.He.PAYPAL:
                    ((p = C.h8.PAYPAL_INFORMATION), (u = X.He.PAYPAL));
                    break;
                case X.He.VENMO:
                    ((p = C.h8.VENMO_INFORMATION), (u = X.He.VENMO));
                    break;
                case X.He.GIROPAY:
                    ((p = C.h8.PAYMENT_TYPE), (u = X.He.GIROPAY));
                    break;
                case X.He.PAYSAFE_CARD:
                case X.He.GCASH:
                case X.He.GRABPAY_MY:
                case X.He.MOMO_WALLET:
                case X.He.KAKAOPAY:
                case X.He.GOPAY_WALLET:
                case X.He.BANCONTACT:
                    ((p = C.h8.PAYMENT_TYPE), (u = ez.methodType));
                    break;
                case X.He.EPS:
                    ((p = C.h8.EPS_INFORMATION), (u = X.He.EPS));
                    break;
                case X.He.IDEAL:
                    ((p = C.h8.IDEAL_INFORMATION), (u = X.He.IDEAL));
                    break;
                case X.He.PRZELEWY24:
                    ((p = C.h8.PRZELEWY24_INFORMATION), (u = X.He.PRZELEWY24));
                    break;
                case X.He.CASH_APP:
                    ((p = C.h8.CASH_APP_INFORMATION), (u = X.He.CASH_APP));
                    break;
                default:
                    ((p = C.h8.PAYMENT_TYPE), (u = X.He.CARD));
            }
            (eP && null != tT && (p = C.h8.PAYMENT_ELEMENT),
                (n = eP
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
                (o = (0, r.jsx)(eR, {
                    onBack: () => e0(p),
                    primaryCTA: P.Z.CTAType.CONTINUE,
                    primaryText: Q.intl.string(Q.t.PDTjLC),
                    primarySubmitting: e8,
                    primaryDisabled: !e7.isValid || ts,
                    onPrimary: tZ
                })));
            break;
        case C.h8.AWAITING_AUTHENTICATION:
            n = (0, r.jsx)(eN, {});
            break;
        default:
            throw Error('Unexpected step: '.concat(eH));
    }
    let tH = eP && tv,
        tY = (0, r.jsxs)(c.qBt, {
            className: $.sequencer,
            staticClassName: $.sequencerStatic,
            animatedNodeClassName: $.sequencerAnimatedNode,
            fillParent: !0,
            overrideKey: tH ? 'combined_stripe_elements' : void 0,
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
                        stripeAddressElementProps: tR,
                        billingAddressInfo: e7.info,
                        onSetupError: tA
                    }),
                n
            ]
        }),
        tW = eH === C.h8.PAYMENT_TYPE && 0 === g.length ? null : o;
    return q
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  ee &&
                      (0, r.jsx)(R.Z, {
                          className: J.paymentModalBreadcrumbs,
                          isEligibleForTrial: ee
                      }),
                  (0, r.jsxs)(w.C3, {
                      children: [(0, r.jsx)(x.Z, { className: J.paymentModalError }), tY]
                  }),
                  (0, r.jsx)(w.O3, { children: tW })
              ]
          })
        : (0, r.jsx)(Y.Z, {
              steps: null != A ? A : ez.steps,
              currentStep: null != M ? M : eH,
              paymentError: h.paymentError,
              header: j,
              hideBreadcrumbs: W,
              body: tY,
              footer: tW
          });
}
function ew(e) {
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
        [I, T, S, A, N] = (0, l.Wu)([k.Z], () => [k.Z.braintreeEmail, k.Z.braintreeNonce, k.Z.error, k.Z.venmoUsername, k.Z.adyenPaymentData]),
        [C, R] = (0, l.Wu)([j.Z], () => [j.Z.error, j.Z.isAwaitingAuthentication]);
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
    let [P, w] = i.useState(!1),
        [D, L] = i.useState(!1),
        [x, M] = i.useState(null),
        B = i.useRef(null),
        V = (0, l.e7)([j.Z], () => j.Z.isAwaitingAuthentication),
        [F, Z] = (0, l.Wu)([G.Z], () => [G.Z.purchaseTokenAuthState, G.Z.purchaseTokenHash]);
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
            isSubmittingCurrentStep: P,
            setIsSubmittingCurrentStep: w,
            hasRedirectURL: D,
            setHasRedirectURL: L,
            braintreeEmail: I,
            braintreeNonce: T,
            venmoUsername: A,
            adyenPaymentData: N,
            paymentError: null != C ? C : S,
            paymentAuthenticationState: R ? H.wr.PENDING : null != C ? H.wr.ERROR : H.wr.NONE,
            purchaseError: x,
            setPurchaseError: M,
            purchaseErrorBlockRef: B,
            isAuthenticating: V,
            purchaseTokenAuthState: F,
            purchaseTokenHash: Z,
            epsBankState: E,
            setEpsBankState: b,
            p24BankState: m,
            setP24BankState: g
        }
    );
}
