n.d(t, {
    fL: () => eN,
    vP: () => eA
}),
    n(388685),
    n(49124),
    n(415506);
var r = n(255367),
    i = n(73800),
    a = n(957957),
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
    v = n(445239),
    I = n(870630),
    T = n(483454),
    S = n(710845),
    A = n(563132),
    N = n(409813),
    C = n(51499),
    R = n(586585),
    P = n(614277),
    w = n(35248),
    D = n(439021),
    L = n(698708),
    x = n(351402),
    k = n(975060),
    M = n(505649),
    j = n(853872),
    U = n(882712),
    G = n(55563),
    B = n(358085),
    V = n(622999),
    F = n(176919),
    Z = n(185139),
    H = n(396955),
    Y = n(559725),
    W = n(439041),
    K = n(850228),
    z = n(231338),
    q = n(388032),
    X = n(327763),
    Q = n(106194);
function J(e, t, n) {
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
function $(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                J(e, t, n[t]);
            });
    }
    return e;
}
function ee(e, t) {
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
function et(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ee(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function en(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = er(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function er(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let ei = new S.Z('AddPaymentStep.tsx'),
    ea = [N.h8.PAYMENT_TYPE],
    eo = [N.h8.PAYMENT_TYPE, N.h8.CREDIT_CARD_INFORMATION, N.h8.ADDRESS],
    es = [N.h8.PAYMENT_TYPE, N.h8.PAYPAL_INFORMATION, N.h8.ADDRESS],
    el = [N.h8.PAYMENT_TYPE, N.h8.VENMO_INFORMATION, N.h8.ADDRESS],
    ec = [N.h8.PAYMENT_TYPE, N.h8.PRZELEWY24_INFORMATION, N.h8.ADDRESS],
    eu = [N.h8.PAYMENT_TYPE, N.h8.EPS_INFORMATION, N.h8.ADDRESS],
    ed = [N.h8.PAYMENT_TYPE, N.h8.IDEAL_INFORMATION, N.h8.ADDRESS],
    ef = [N.h8.PAYMENT_TYPE, N.h8.CASH_APP_INFORMATION, N.h8.ADDRESS],
    e_ = [N.h8.PAYMENT_TYPE, N.h8.ADDRESS],
    ep = {
        name: '',
        cardNumber: '',
        expirationDate: '',
        cvc: ''
    },
    eh = {
        email: '',
        name: '',
        country: '',
        line1: '',
        line2: '',
        city: '',
        postalCode: '',
        state: ''
    };
function em(e) {
    let { paymentSourceTypeRestrictions: t } = e,
        n = null != t && t.length > 0 ? H.w.ADD_NEW_PAYMENT_METHOD : void 0;
    return (0, r.jsxs)('div', {
        className: X.body,
        children: [(0, r.jsx)(H.Y, { paymentRestrictionBannerType: n }), (0, r.jsx)(p.ZP, $({}, e))]
    });
}
function eg(e) {
    let { onCardInfoChange: t, infoNotice: n } = e,
        i = (0, l.e7)([k.Z], () => k.Z.error);
    return (0, r.jsxs)('div', {
        className: X.body,
        children: [
            null != n &&
                (0, r.jsx)(c.kzN, {
                    className: X.infoNotice,
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
function eE() {
    return (0, r.jsx)('div', {
        className: X.body,
        children: (0, r.jsx)(h.Z, {})
    });
}
function eb() {
    return (0, r.jsx)('div', {
        className: X.body,
        children: (0, r.jsx)(m.Z, {})
    });
}
function ey() {
    return (0, r.jsx)('div', {
        className: X.body,
        children: (0, r.jsx)(K.Z, {})
    });
}
function eO() {
    let e = (0, l.e7)([x.Z], () => x.Z.isBusy),
        t = (0, l.e7)([k.Z], () => k.Z.stripePaymentMethod);
    return (0, r.jsx)(y.k, {
        className: X.body,
        stripePaymentMethod: t,
        submitting: e
    });
}
function ev(e) {
    let { billingAddressInfo: t, onBillingAddressChange: n, paymentSourceType: i } = e,
        a = (0, l.e7)([k.Z], () => k.Z.error);
    return (0, r.jsx)('div', {
        className: X.body,
        children: (0, r.jsx)(g.P, {
            billingAddressInfo: t,
            billingError: a,
            onBillingAddressChange: n,
            paymentSourceType: i
        })
    });
}
function eI() {
    return (0, r.jsx)(E.F, { className: X.body });
}
function eT(e) {
    return () => (null != k.Z.error && (0, _.fw)(), e());
}
function eS(e) {
    let { onPrimary: t, onBack: n } = e,
        i = en(e, ['onPrimary', 'onBack']),
        a = t;
    null != t && (a = eT(t));
    let o = n;
    return (
        null != n && (o = eT(n)),
        (0, r.jsx)(
            R.Z,
            et($({}, i), {
                onPrimary: a,
                onBack: o
            })
        )
    );
}
function eA(e) {
    var t;
    let n,
        o,
        u,
        p,
        { paymentModalArgs: h, initialStep: m, prependSteps: g, appendSteps: E, onReturn: b, onComplete: y, onStepChange: O, breadcrumpSteps: S, currentBreadcrumpStep: x, header: M, analyticsLocation: U, hideBreadcrumbs: F = !1, usePaymentModalStep: H = !1, isEligibleForTrial: K = !1, allowDesktopRedirectPurchase: J = !1, toastContent: ee, overwriteSubscriptionPaymentSource: en = !1 } = e,
        er = {
            steps: [...g, ...eo, ...E],
            methodType: z.He.CARD
        },
        ep = {
            steps: [...g, ...ea, ...E],
            methodType: z.He.PAYMENT_REQUEST
        },
        eh = {
            steps: [...g, ...es, ...E],
            methodType: z.He.PAYPAL
        },
        eT = {
            steps: [...g, ...el, ...E],
            methodType: z.He.VENMO
        },
        eA = {
            steps: [...g, ...ea, ...E]
        },
        eN = {
            steps: [...g, ...ec, ...E],
            methodType: z.He.PRZELEWY24
        },
        eC = {
            steps: [...g, ...eu, ...E],
            methodType: z.He.EPS
        },
        eR = {
            steps: [...g, ...ed, ...E],
            methodType: z.He.IDEAL
        },
        eP = {
            steps: [...g, ...ef, ...E],
            methodType: z.He.CASH_APP
        };
    function ew(e) {
        switch (e) {
            case N.h8.CREDIT_CARD_INFORMATION:
                return er;
            case N.h8.CASH_APP_INFORMATION:
                return eP;
            default:
                return { steps: [N.h8.ADD_PAYMENT_STEPS] };
        }
    }
    let [eD, eL] = i.useState(m),
        [ex, ek] = i.useState(null),
        [eM, ej] = i.useState(ew(m)),
        { stripe: eU, contextMetadata: eG, activitySessionId: eB, paymentElementsEnabled: eV } = (0, A.JL)(),
        eF = (0, l.e7)([k.Z], () => k.Z.redirectedPaymentSourceId),
        eZ = (0, l.e7)([W.Z], () => W.Z.cashAppPayComponent),
        eH = {
            completeSteps: tl,
            setIsSubmittingCurrentStep: h.setIsSubmittingCurrentStep
        },
        eY = i.useRef(eH);
    function eW(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        ek(null),
            eL(e),
            t &&
                O({
                    currentStep: eD,
                    toStep: e
                });
    }
    function eK(e) {
        (0, c.showToast)((0, c.createToast)(void 0 !== ee ? ee : q.intl.string(q.t['VJPg+v']), c.ToastType.SUCCESS, { position: c.ToastPosition.BOTTOM })), y(eD, e), eW(m, !1);
    }
    i.useEffect(() => {
        eY.current = eH;
    }),
        i.useEffect(() => {
            let { completeSteps: e, setIsSubmittingCurrentStep: t } = eY.current;
            (async () => {
                if (null == eF) return;
                await (0, d.tZ)();
                let n = j.Z.getPaymentSource(eF);
                null != n && (e(n), t(!1));
            })();
        }, [eF]);
    let { setPaymentSourceId: ez, creditCardState: eq, setCreditCardState: eX, tokenState: eQ, setTokenState: eJ, isSubmittingCurrentStep: e$, billingAddressState: e0, setBillingAddressState: e1, setIsSubmittingCurrentStep: e2, hasRedirectURL: e3, setHasRedirectURL: e4, braintreeEmail: e5, braintreeNonce: e6, venmoUsername: e8, adyenPaymentData: e7, isAuthenticating: e9, epsBankState: te, setEpsBankState: tt, p24BankState: tn, setP24BankState: tr, selectedSkuId: ti } = h,
        ta = null != ti ? ti : '',
        to = (0, l.e7)([G.Z], () => G.Z.get(ta), [ta]),
        ts = null == to || null == (t = to.eligiblePaymentGateways) ? void 0 : t.map((e) => e.valueOf());
    function tl(e) {
        ez(e.id), eK(e);
    }
    let tc = !(0, B.isDesktop)() || J ? ['googlePay', 'applePay'] : [],
        [tu, td] = i.useState(!1),
        tf = i.useRef(null),
        t_ = () => {
            null != tf.current && tf.current.show();
        },
        tp = (0, a.useElements)(),
        [th, tm] = i.useState(!1),
        [tg, tE] = i.useState(!1),
        tb = {
            shouldRender: !1,
            stripePaymentElementProps: {},
            stripeAddressElementProps: {}
        };
    switch (eD) {
        case N.h8.ATTEMPT_GOOGLE_PAY:
        case N.h8.ATTEMPT_APPLE_PAY:
        case N.h8.PAYMENT_TYPE:
            let ty = (e, t) => {
                    switch (e) {
                        case z.He.CARD:
                            J ? eW(N.h8.AWAITING_BROWSER_CHECKOUT) : (ej(er), eV && tm(!0), eW(N.h8.CREDIT_CARD_INFORMATION));
                            break;
                        case z.He.PAYPAL:
                            ej(eh), eW(N.h8.PAYPAL_INFORMATION);
                            break;
                        case z.He.VENMO:
                            ej(eT), eW(N.h8.VENMO_INFORMATION);
                            break;
                        case z.He.PAYMENT_REQUEST:
                            J && 'googlePay' === t ? eW(N.h8.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY) : J && 'applePay' === t ? eW(N.h8.AWAITING_BROWSER_CHECKOUT_APPLE_PAY) : (ej(ep), eW(N.h8.PAYMENT_REQUEST_INFORMATION));
                            break;
                        case z.He.PRZELEWY24:
                            ej(eN), eW(N.h8.PRZELEWY24_INFORMATION);
                            break;
                        case z.He.EPS:
                            ej(eC), eW(N.h8.EPS_INFORMATION);
                            break;
                        case z.He.IDEAL:
                            ej(eR), eW(N.h8.IDEAL_INFORMATION);
                            break;
                        case z.He.CASH_APP:
                            ej(eP), eW(N.h8.CASH_APP_INFORMATION);
                            break;
                        case z.He.GIROPAY:
                        case z.He.PAYSAFE_CARD:
                        case z.He.GCASH:
                        case z.He.GRABPAY_MY:
                        case z.He.MOMO_WALLET:
                        case z.He.KAKAOPAY:
                        case z.He.GOPAY_WALLET:
                        case z.He.BANCONTACT:
                            ej({
                                steps: [...g, ...e_, ...E],
                                methodType: e
                            }),
                                eW(N.h8.ADDRESS);
                    }
                    null != k.Z.error && (0, _.fw)();
                },
                tO = (e, t) => {
                    e1((e) => et($({}, e), { info: t })), ej(ep), tl(e);
                },
                tv = () => {
                    ej(eA), eW(N.h8.PAYMENT_TYPE);
                },
                tI = async (e) => {
                    if (((0, _.Xt)(e), null == e)) return void tv();
                    try {
                        let t = await (0, d.i6)(e, void 0, U),
                            { billingAddressInfo: n } = (0, V.az)(e);
                        tO(t, n);
                    } catch (e) {}
                };
            if (eD === N.h8.ATTEMPT_GOOGLE_PAY || eD === N.h8.ATTEMPT_APPLE_PAY) {
                let e = q.intl.string(eD === N.h8.ATTEMPT_APPLE_PAY ? q.t.czhXDg : q.t.Zj2xQ0),
                    t = q.intl.string(eD === N.h8.ATTEMPT_APPLE_PAY ? q.t.WoXvJC : q.t.wnVVr6);
                (n = (0, r.jsx)(D.t, {
                    onChooseType: ty,
                    paymentRequestWallet: eD === N.h8.ATTEMPT_APPLE_PAY ? 'applePay' : 'googlePay',
                    onStripePaymentMethodReceived: tI,
                    onPaymentRequestFailure: () => {
                        ty(z.He.CARD), ek(e);
                    },
                    onValidPaymentRequest: () => td(!0),
                    paymentRequestRef: tf
                })),
                    (o = (0, r.jsx)(eS, {
                        onBack: () => eW(N.h8.PAYMENT_TYPE),
                        primaryCTA: R.Z.CTAType.CONTINUE,
                        primaryText: t,
                        onPrimary: () => t_(),
                        primaryDisabled: !tu
                    }));
                break;
            }
            (n = (0, r.jsx)(em, {
                onChooseType: ty,
                onStripePaymentMethodReceived: tI,
                paymentRequestWallets: tc,
                isEligibleForTrial: K,
                paymentRequestPaymentContext: {
                    contextMetadata: eG,
                    activitySessionId: eB
                },
                paymentSourceTypeRestrictions: ts
            })),
                (o = (0, r.jsx)(eS, { onBack: b }));
            break;
        case N.h8.CREDIT_CARD_INFORMATION:
            let tT = async (e) => {
                e2(!0);
                try {
                    if (eV) eW(N.h8.ADDRESS);
                    else {
                        let t = await (0, d.qv)(eU, e);
                        eJ({ token: t }), eW(N.h8.ADDRESS);
                    }
                } catch (e) {
                    var t;
                    ei.error(null != (t = e.message) ? t : JSON.stringify(e));
                } finally {
                    e2(!1);
                }
            };
            eV &&
                ((tb.shouldRender = !0),
                (tb.stripePaymentElementProps = {
                    enforcePaymentMethodTypes: ['card'],
                    onChange: (e) => {
                        ei.log('PaymentElements onChange event:', e), tE(e.complete);
                    }
                })),
                (n = eV
                    ? null
                    : (0, r.jsx)(eg, {
                          infoNotice: ex,
                          onCardInfoChange: (e, t) => {
                              eX({
                                  info: e,
                                  isValid: t
                              }),
                                  e1((t) => et($({}, t), { info: et($({}, t.info), { name: e.name }) }));
                          }
                      }));
            let tS = eV ? !tg : !eq.isValid,
                tA = () => {
                    eV && tm(!1), eW(N.h8.PAYMENT_TYPE);
                };
            o = (0, r.jsx)(a.ElementsConsumer, {
                children: (e) => {
                    let { elements: t } = e;
                    return (0, r.jsx)(eS, {
                        onBack: tA,
                        primaryCTA: R.Z.CTAType.CONTINUE,
                        primaryType: 'submit',
                        primaryText: q.intl.string(q.t.PDTjLC),
                        primarySubmitting: e$,
                        primaryDisabled: tS,
                        onPrimary: () => tT(t)
                    });
                }
            });
            break;
        case N.h8.AWAITING_BROWSER_CHECKOUT:
        case N.h8.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
        case N.h8.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
            (n = (0, r.jsx)('div', {
                className: X.body,
                children: (0, r.jsx)(w.M, {
                    step: eD,
                    onPurchaseComplete: () => y(eD),
                    onHandoffFailure: () => {
                        ej(er), eW(N.h8.CREDIT_CARD_INFORMATION);
                    }
                })
            })),
                (o = (0, r.jsx)(w.a, {
                    onPrimaryClick: () => {
                        ej(er), eW(N.h8.CREDIT_CARD_INFORMATION);
                    },
                    onBackClick: () => {
                        ej(eA), eW(N.h8.PAYMENT_TYPE);
                    }
                }));
            break;
        case N.h8.EPS_INFORMATION:
            (n = (0, r.jsx)(I.Z, {
                type: z.He.EPS,
                onAccountHolderNameChange: (e) =>
                    e1({
                        info: et($({}, e0.info), { name: e }),
                        isValid: e0.isValid
                    }),
                onEPSBankChange: (e) => tt(e),
                epsBankValue: te,
                billingAddressInfo: e0.info
            })),
                (o = (0, r.jsx)(eS, {
                    onBack: () => eW(N.h8.PAYMENT_TYPE),
                    primaryCTA: R.Z.CTAType.CONTINUE,
                    primaryText: q.intl.string(q.t.PDTjLC),
                    primaryDisabled: void 0 === te || '' === te || '' === e0.info.name,
                    onPrimary: () => eW(N.h8.ADDRESS)
                }));
            break;
        case N.h8.IDEAL_INFORMATION:
            (n = (0, r.jsx)(v.Z, {
                type: z.He.IDEAL,
                onAccountHolderNameChange: (e) =>
                    e1({
                        info: et($({}, e0.info), { name: e }),
                        isValid: e0.isValid
                    }),
                billingAddressInfo: e0.info
            })),
                (o = (0, r.jsx)(eS, {
                    onBack: () => eW(N.h8.PAYMENT_TYPE),
                    primaryCTA: R.Z.CTAType.CONTINUE,
                    primaryText: q.intl.string(q.t.PDTjLC),
                    primaryDisabled: '' === e0.info.name,
                    onPrimary: () => eW(N.h8.ADDRESS)
                }));
            break;
        case N.h8.PRZELEWY24_INFORMATION:
            (n = (0, r.jsx)(I.Z, {
                type: z.He.PRZELEWY24,
                onNameChange: (e) =>
                    e1({
                        info: et($({}, e0.info), { name: e }),
                        isValid: e0.isValid
                    }),
                onEmailChange: (e) =>
                    e1({
                        info: et($({}, e0.info), { email: e }),
                        isValid: e0.isValid
                    }),
                onP24BankChange: (e) => {
                    tr(e);
                },
                p24BankValue: tn,
                billingAddressInfo: e0.info
            })),
                (o = (0, r.jsx)(eS, {
                    onBack: () => eW(N.h8.PAYMENT_TYPE),
                    primaryCTA: R.Z.CTAType.CONTINUE,
                    primaryText: q.intl.string(q.t.PDTjLC),
                    primaryDisabled: void 0 === e0.info.name || '' === e0.info.name || void 0 === e0.info.email || '' === e0.info.email || void 0 === tn || '' === tn,
                    onPrimary: () => eW(N.h8.ADDRESS)
                }));
            break;
        case N.h8.PAYPAL_INFORMATION:
            let tN = 0 !== e5.length && null != e6;
            (n = (0, r.jsx)(eE, {})),
                (o = (0, r.jsx)(eS, {
                    onBack: () => eW(N.h8.PAYMENT_TYPE),
                    primaryCTA: R.Z.CTAType.CONTINUE,
                    primaryText: tN ? q.intl.string(q.t.PDTjLC) : q.intl.string(q.t.Djzd7O),
                    onPrimary: () => (tN ? eW(N.h8.ADDRESS) : (0, f.i0)())
                }));
            break;
        case N.h8.VENMO_INFORMATION:
            let tC = 0 !== e8.length && null != e6;
            (n = (0, r.jsx)(eb, {})),
                (o = (0, r.jsx)(eS, {
                    onBack: () => eW(N.h8.PAYMENT_TYPE),
                    primaryCTA: R.Z.CTAType.CONTINUE,
                    primaryText: tC ? q.intl.string(q.t.PDTjLC) : q.intl.string(q.t['4KoTLC']),
                    onPrimary: () => (tC ? eW(N.h8.ADDRESS) : (0, f.og)())
                }));
            break;
        case N.h8.PAYMENT_REQUEST_INFORMATION:
            (n = (0, r.jsx)(eO, {})), (o = (0, r.jsx)(eS, { onBack: () => eW(N.h8.PAYMENT_TYPE) }));
            break;
        case N.h8.CASH_APP_INFORMATION:
            let tR = null != e7,
                tP = null != eZ;
            (n = (0, r.jsx)(ey, {})),
                (o = (0, r.jsx)(eS, {
                    onBack: () => eW(N.h8.PAYMENT_TYPE),
                    primaryCTA: R.Z.CTAType.CONTINUE,
                    primaryText: tR ? q.intl.string(q.t.PDTjLC) : q.intl.string(q.t['9ALP8/']),
                    onPrimary: () => (tR ? eW(N.h8.ADDRESS) : (0, Y.cp)()),
                    primaryDisabled: !tP
                }));
            break;
        case N.h8.ADDRESS:
            let tw = async () => {
                e2(!0);
                let e = eM.methodType;
                switch (e) {
                    case z.He.CARD:
                        try {
                            let e = {
                                    enabled: eV,
                                    elements: tp
                                },
                                t = await (0, d.f0)(eU, eQ.token, e0.info, U, e);
                            tl(t);
                        } catch (e) {}
                        break;
                    case z.He.VENMO:
                    case z.He.PAYPAL:
                        try {
                            s()(null != e6, 'Missing braintreeNonce');
                            let e = await (0, d.lP)(e6, e0.info, U);
                            tl(e);
                        } catch (e) {}
                        break;
                    case z.He.EPS:
                        try {
                            let e = await (0, d.YQ)(eU, te, e0.info, U);
                            tl(e);
                        } catch (e) {
                            ei.warn(e);
                        }
                        break;
                    case z.He.IDEAL:
                        try {
                            let e = await (0, d.aN)(eU, e0.info, U);
                            tl(e);
                        } catch (e) {
                            ei.warn(e);
                        }
                        break;
                    case z.He.PRZELEWY24:
                        try {
                            if (void 0 === tn) throw (0, d.SQ)('Bank required for Przelewy24');
                            let e = await (0, d.pF)(eU, { p24Bank: tn }, e0.info, U);
                            tl(e);
                        } catch (e) {}
                        break;
                    case z.He.PAYSAFE_CARD:
                    case z.He.GRABPAY_MY:
                        try {
                            let t = await (0, d.sF)(e0.info, e, U);
                            tl(t);
                        } catch (e) {}
                        break;
                    case z.He.GCASH:
                    case z.He.MOMO_WALLET:
                    case z.He.KAKAOPAY:
                    case z.He.GOPAY_WALLET:
                        try {
                            let { redirectConfirmation: t } = await (0, d.Dk)(e0.info, e, U);
                            e4(t);
                        } catch (e) {}
                        break;
                    case z.He.GIROPAY:
                    case z.He.BANCONTACT:
                        try {
                            let t = await (0, d.GV)(eU, e0.info, e, U);
                            tl(t);
                        } catch (e) {}
                        break;
                    case z.He.CASH_APP:
                        try {
                            s()(null != e7, 'Missing adyenPaymentData');
                            let { paymentSource: t } = await (0, d.Dk)(e0.info, e, U, e7, en);
                            s()(null != t, 'Cash App Pay Payment Source missing'), tl(t);
                        } catch (e) {}
                        break;
                    default:
                        throw Error('unknown step not handled');
                }
                e3 || e2(!1);
            };
            switch (eM.methodType) {
                case z.He.CARD:
                    (p = N.h8.CREDIT_CARD_INFORMATION), (u = z.He.CARD);
                    break;
                case z.He.PAYPAL:
                    (p = N.h8.PAYPAL_INFORMATION), (u = z.He.PAYPAL);
                    break;
                case z.He.VENMO:
                    (p = N.h8.VENMO_INFORMATION), (u = z.He.VENMO);
                    break;
                case z.He.GIROPAY:
                    (p = N.h8.PAYMENT_TYPE), (u = z.He.GIROPAY);
                    break;
                case z.He.PAYSAFE_CARD:
                case z.He.GCASH:
                case z.He.GRABPAY_MY:
                case z.He.MOMO_WALLET:
                case z.He.KAKAOPAY:
                case z.He.GOPAY_WALLET:
                case z.He.BANCONTACT:
                    (p = N.h8.PAYMENT_TYPE), (u = eM.methodType);
                    break;
                case z.He.EPS:
                    (p = N.h8.EPS_INFORMATION), (u = z.He.EPS);
                    break;
                case z.He.IDEAL:
                    (p = N.h8.IDEAL_INFORMATION), (u = z.He.IDEAL);
                    break;
                case z.He.PRZELEWY24:
                    (p = N.h8.PRZELEWY24_INFORMATION), (u = z.He.PRZELEWY24);
                    break;
                case z.He.CASH_APP:
                    (p = N.h8.CASH_APP_INFORMATION), (u = z.He.CASH_APP);
                    break;
                default:
                    (p = N.h8.PAYMENT_TYPE), (u = z.He.CARD);
            }
            eV &&
                ((tb.shouldRender = !0),
                (tb.stripeAddressElementProps = {
                    options: { mode: 'billing' },
                    onChange: (e) => {
                        var t;
                        let {
                                complete: n,
                                value: { address: r, name: i }
                            } = e,
                            a = {
                                name: i,
                                country: r.country,
                                city: r.city,
                                line1: r.line1,
                                line2: null != (t = r.line2) ? t : '',
                                state: r.state,
                                postalCode: r.postal_code
                            };
                        e1({
                            info: $({}, e0.info, a),
                            isValid: n
                        });
                    }
                })),
                (n = eV
                    ? null
                    : (0, r.jsx)(ev, {
                          billingAddressInfo: e0.info,
                          onBillingAddressChange: (e, t) => {
                              e1({
                                  info: $({}, e0.info, e),
                                  isValid: t
                              });
                          },
                          paymentSourceType: u
                      })),
                (o = (0, r.jsx)(eS, {
                    onBack: () => eW(p),
                    primaryCTA: R.Z.CTAType.CONTINUE,
                    primaryText: q.intl.string(q.t.PDTjLC),
                    primarySubmitting: e$,
                    primaryDisabled: !e0.isValid || e9,
                    onPrimary: tw
                }));
            break;
        case N.h8.AWAITING_AUTHENTICATION:
            n = (0, r.jsx)(eI, {});
            break;
        default:
            throw Error('Unexpected step: '.concat(eD));
    }
    let tD = (0, r.jsxs)(c.qBt, {
            className: Q.sequencer,
            staticClassName: Q.sequencerStatic,
            animatedNodeClassName: Q.sequencerAnimatedNode,
            fillParent: !0,
            overrideKey: eV && tb.shouldRender ? 'payment_elements' : void 0,
            step: eD,
            steps: eM.steps,
            sideMargin: 20,
            children: [
                (0, r.jsx)(
                    T.hn,
                    $(
                        {
                            step: eD,
                            shouldRenderPaymentElement: th
                        },
                        tb
                    )
                ),
                n
            ]
        }),
        tL = eD === N.h8.PAYMENT_TYPE && 0 === g.length ? null : o;
    return H
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  K &&
                      (0, r.jsx)(C.Z, {
                          className: X.paymentModalBreadcrumbs,
                          isEligibleForTrial: K
                      }),
                  (0, r.jsxs)(P.C3, {
                      children: [(0, r.jsx)(L.Z, { className: X.paymentModalError }), tD]
                  }),
                  (0, r.jsx)(P.O3, { children: tL })
              ]
          })
        : (0, r.jsx)(Z.Z, {
              steps: null != S ? S : eM.steps,
              currentStep: null != x ? x : eD,
              paymentError: h.paymentError,
              header: M,
              hideBreadcrumbs: F,
              body: tD,
              footer: tL
          });
}
function eN(e) {
    let {
        defaultPaymentSourceId: t,
        paymentSources: n,
        hasFetchedPaymentSources: r
    } = (0, l.cj)([j.Z], () => ({
        defaultPaymentSourceId: void 0 !== e ? e : j.Z.defaultPaymentSourceId,
        paymentSources: j.Z.paymentSources,
        hasFetchedPaymentSources: j.Z.hasFetchedPaymentSources
    }));
    (0, O.ZP)(() => {
        null == W.Z.cashAppPayComponent && (0, Y.eI)(), (0, f.eI)(), r || (0, d.tZ)();
    });
    let [a, o] = i.useState(t);
    null != t && null == a && o(t);
    let [s, c] = i.useState(() => ({
            info: ep,
            isValid: !1
        })),
        [p, h] = i.useState(() => ({
            info: eh,
            isValid: !1
        })),
        [m, g] = i.useState(''),
        [E, b] = i.useState(''),
        [y, v] = i.useState(() => ({ token: null })),
        [I, T, S, A, N] = (0, l.Wu)([k.Z], () => [k.Z.braintreeEmail, k.Z.braintreeNonce, k.Z.error, k.Z.venmoUsername, k.Z.adyenPaymentData]),
        [C, R] = (0, l.Wu)([M.Z], () => [M.Z.error, M.Z.isAwaitingAuthentication]);
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
                u.Z.unsubscribe('BRAINTREE_TOKENIZE_PAYPAL_SUCCESS', e), (0, _.fw)();
            }
        );
    }, []);
    let [P, w] = i.useState(!1),
        [D, L] = i.useState(!1),
        [x, G] = i.useState(null),
        B = i.useRef(null),
        V = (0, l.e7)([M.Z], () => M.Z.isAwaitingAuthentication),
        [Z, H] = (0, l.Wu)([U.Z], () => [U.Z.purchaseTokenAuthState, U.Z.purchaseTokenHash]);
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
            paymentAuthenticationState: R ? F.wr.PENDING : null != C ? F.wr.ERROR : F.wr.NONE,
            purchaseError: x,
            setPurchaseError: G,
            purchaseErrorBlockRef: B,
            isAuthenticating: V,
            purchaseTokenAuthState: Z,
            purchaseTokenHash: H,
            epsBankState: E,
            setEpsBankState: b,
            p24BankState: m,
            setP24BankState: g
        }
    );
}
