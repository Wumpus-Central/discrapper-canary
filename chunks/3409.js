(n.d(t, {
    fL: () => eP,
    vP: () => eR
}),
    n(836215),
    n(388685),
    n(49124),
    n(415506),
    n(467055));
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
    k = n(351402),
    M = n(975060),
    j = n(505649),
    U = n(853872),
    G = n(882712),
    B = n(55563),
    V = n(358085),
    F = n(622999),
    Z = n(176919),
    H = n(185139),
    Y = n(396955),
    W = n(559725),
    K = n(439041),
    z = n(850228),
    q = n(231338),
    X = n(388032),
    Q = n(327763),
    J = n(106194);
function $(e, t, n) {
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
function ee(e) {
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
                $(e, t, n[t]);
            }));
    }
    return e;
}
function et(e, t) {
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
function en(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : et(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function er(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = ei(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function ei(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
    return i;
}
let ea = new A.Z('AddPaymentStep.tsx'),
    eo = [C.h8.PAYMENT_TYPE],
    es = [C.h8.PAYMENT_TYPE, C.h8.CREDIT_CARD_INFORMATION, C.h8.ADDRESS],
    el = [C.h8.PAYMENT_TYPE, C.h8.PAYPAL_INFORMATION, C.h8.ADDRESS],
    ec = [C.h8.PAYMENT_TYPE, C.h8.VENMO_INFORMATION, C.h8.ADDRESS],
    eu = [C.h8.PAYMENT_TYPE, C.h8.PRZELEWY24_INFORMATION, C.h8.ADDRESS],
    ed = [C.h8.PAYMENT_TYPE, C.h8.EPS_INFORMATION, C.h8.ADDRESS],
    ef = [C.h8.PAYMENT_TYPE, C.h8.IDEAL_INFORMATION, C.h8.ADDRESS],
    e_ = [C.h8.PAYMENT_TYPE, C.h8.CASH_APP_INFORMATION, C.h8.ADDRESS],
    ep = [C.h8.PAYMENT_TYPE, C.h8.ADDRESS],
    eh = (e, t) => {
        if (t === q.He.CARD) return e.map((e) => (e === C.h8.CREDIT_CARD_INFORMATION ? C.h8.PAYMENT_ELEMENT : e));
        if (t === q.He.UNKNOWN || (0, v.Qe)(t)) {
            let t = e.indexOf(C.h8.PAYMENT_TYPE);
            return e.toSpliced(t + 1, 0, C.h8.PAYMENT_ELEMENT);
        }
        return e;
    },
    em = (e, t) => {
        let { prependSteps: n, appendSteps: r, paymentElementsEnabled: i } = t;
        return e.map((e) => {
            let { baseSteps: t, methodType: a } = e,
                o = [...n, ...t, ...r];
            return {
                steps: i ? eh(o, a) : o,
                methodType: a
            };
        });
    },
    eg = {
        name: '',
        cardNumber: '',
        expirationDate: '',
        cvc: ''
    },
    eE = {
        email: '',
        name: '',
        country: '',
        line1: '',
        line2: '',
        city: '',
        postalCode: '',
        state: ''
    };
function eb(e) {
    let { paymentSourceTypeRestrictions: t } = e,
        n = null != t && t.length > 0 ? Y.w.ADD_NEW_PAYMENT_METHOD : void 0;
    return (0, r.jsxs)('div', {
        className: Q.body,
        children: [(0, r.jsx)(Y.Y, { paymentRestrictionBannerType: n }), (0, r.jsx)(p.ZP, ee({}, e))]
    });
}
function ey(e) {
    let { onCardInfoChange: t, infoNotice: n } = e,
        i = (0, l.e7)([M.Z], () => M.Z.error);
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
function eO() {
    return (0, r.jsx)('div', {
        className: Q.body,
        children: (0, r.jsx)(h.Z, {})
    });
}
function ev() {
    return (0, r.jsx)('div', {
        className: Q.body,
        children: (0, r.jsx)(m.Z, {})
    });
}
function eI() {
    return (0, r.jsx)('div', {
        className: Q.body,
        children: (0, r.jsx)(z.Z, {})
    });
}
function eT() {
    let e = (0, l.e7)([k.Z], () => k.Z.isBusy),
        t = (0, l.e7)([M.Z], () => M.Z.stripePaymentMethod);
    return (0, r.jsx)(y.k, {
        className: Q.body,
        stripePaymentMethod: t,
        submitting: e
    });
}
function eS(e) {
    let { billingAddressInfo: t, onBillingAddressChange: n, paymentSourceType: i } = e,
        a = (0, l.e7)([M.Z], () => M.Z.error);
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
function eA() {
    return (0, r.jsx)(E.F, { className: Q.body });
}
function eN(e) {
    return () => (null != M.Z.error && (0, _.fw)(), e());
}
function eC(e) {
    let { onPrimary: t, onBack: n } = e,
        i = er(e, ['onPrimary', 'onBack']),
        a = t;
    null != t && (a = eN(t));
    let o = n;
    return (
        null != n && (o = eN(n)),
        (0, r.jsx)(
            P.Z,
            en(ee({}, i), {
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
        p,
        h,
        { paymentModalArgs: m, initialStep: g, prependSteps: E, appendSteps: b, onReturn: y, onComplete: O, onStepChange: A, breadcrumpSteps: k, currentBreadcrumpStep: j, header: G, analyticsLocation: Z, hideBreadcrumbs: Y = !1, usePaymentModalStep: z = !1, isEligibleForTrial: $ = !1, allowDesktopRedirectPurchase: et = !1, toastContent: er, overwriteSubscriptionPaymentSource: ei = !1 } = e,
        { stripe: eh, contextMetadata: eg, activitySessionId: eE, paymentElementsEnabled: eN } = (0, N.JL)(),
        [eR, eP, ew, eD] = i.useMemo(
            () =>
                em(
                    [
                        {
                            baseSteps: es,
                            methodType: q.He.CARD
                        },
                        {
                            baseSteps: el,
                            methodType: q.He.PAYPAL
                        },
                        {
                            baseSteps: ef,
                            methodType: q.He.IDEAL
                        },
                        {
                            baseSteps: ep,
                            methodType: q.He.UNKNOWN
                        }
                    ],
                    {
                        prependSteps: E,
                        appendSteps: b,
                        paymentElementsEnabled: eN
                    }
                ),
            [E, b, eN]
        ),
        eL = i.useMemo(
            () => ({
                [q.He.CARD]: eR,
                [q.He.PAYPAL]: eP,
                [q.He.IDEAL]: ew,
                [q.He.GOPAY_WALLET]: eD
            }),
            [eR, eP, ew, eD]
        ),
        ex = {
            steps: [...E, ...eo, ...b],
            methodType: q.He.PAYMENT_REQUEST
        },
        ek = {
            steps: [...E, ...ec, ...b],
            methodType: q.He.VENMO
        },
        eM = {
            steps: [...E, ...eo, ...b]
        },
        ej = {
            steps: [...E, ...eu, ...b],
            methodType: q.He.PRZELEWY24
        },
        eU = {
            steps: [...E, ...ed, ...b],
            methodType: q.He.EPS
        },
        eG = {
            steps: [...E, ...e_, ...b],
            methodType: q.He.CASH_APP
        };
    function eB(e) {
        switch (e) {
            case C.h8.CREDIT_CARD_INFORMATION:
                return eR;
            case C.h8.CASH_APP_INFORMATION:
                return eG;
            default:
                return { steps: [C.h8.ADD_PAYMENT_STEPS] };
        }
    }
    let [eV, eF] = i.useState(g),
        [eZ, eH] = i.useState(null),
        [eY, eW] = i.useState(eB(g)),
        eK = (0, l.e7)([M.Z], () => M.Z.redirectedPaymentSourceId),
        ez = (0, l.e7)([K.Z], () => K.Z.cashAppPayComponent),
        eq = {
            completeSteps: tp,
            setIsSubmittingCurrentStep: m.setIsSubmittingCurrentStep
        },
        eX = i.useRef(eq);
    (i.useEffect(() => {
        eX.current = eq;
    }),
        i.useEffect(() => {
            let { completeSteps: e, setIsSubmittingCurrentStep: t } = eX.current;
            (async () => {
                if (null == eK) return;
                await (0, d.tZ)();
                let n = U.Z.getPaymentSource(eK);
                null != n && (e(n), t(!1));
            })();
        }, [eK]));
    let eQ = i.useCallback(
            function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                (eH(null),
                    eF(e),
                    t &&
                        A({
                            currentStep: eV,
                            toStep: e
                        }));
            },
            [eV, A]
        ),
        eJ = i.useCallback(
            function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                (tT(e), eQ(C.h8.PAYMENT_ELEMENT, t));
            },
            [eQ]
        );
    function e$(e) {
        ((0, c.showToast)((0, c.createToast)(void 0 !== er ? er : X.intl.string(X.t['VJPg+v']), c.ToastType.SUCCESS, { position: c.ToastPosition.BOTTOM })), O(eV, e), eQ(g, !1));
    }
    i.useEffect(() => {
        if (!eN) return;
        let e = () => {
            eJ(q.He.PAYPAL);
        };
        return (
            u.Z.subscribe('BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED', e),
            () => {
                u.Z.unsubscribe('BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED', e);
            }
        );
    }, [eJ, eN]);
    let { setPaymentSourceId: e0, creditCardState: e1, setCreditCardState: e2, tokenState: e3, setTokenState: e4, isSubmittingCurrentStep: e5, billingAddressState: e6, setBillingAddressState: e8, setIsSubmittingCurrentStep: e7, hasRedirectURL: e9, setHasRedirectURL: te, braintreeEmail: tt, braintreeNonce: tn, venmoUsername: tr, adyenPaymentData: ti, isAuthenticating: ta, epsBankState: to, setEpsBankState: ts, p24BankState: tl, setP24BankState: tc, selectedSkuId: tu } = m,
        td = null != tu ? tu : '',
        tf = (0, l.e7)([B.Z], () => B.Z.get(td), [td]),
        t_ = null == tf || null == (t = tf.eligiblePaymentGateways) ? void 0 : t.map((e) => e.valueOf());
    function tp(e) {
        (e0(e.id), e$(e));
    }
    let th = !(0, V.isDesktop)() || et ? ['googlePay', 'applePay'] : [],
        [tm, tg] = i.useState(!1),
        tE = i.useRef(null),
        tb = () => {
            null != tE.current && tE.current.show();
        },
        ty = i.useRef(null),
        [tO, tv] = i.useState(!1),
        [tI, tT] = i.useState(null),
        tS = {
            shouldRender: !1,
            stripePaymentElementProps: {},
            stripeAddressElementProps: {}
        };
    switch (eV) {
        case C.h8.ATTEMPT_GOOGLE_PAY:
        case C.h8.ATTEMPT_APPLE_PAY:
        case C.h8.PAYMENT_TYPE:
            let tA = (e, t) => {
                    let n = eN && (0, v.Qe)(e) ? () => eJ(e) : eQ;
                    switch (e) {
                        case q.He.CARD:
                            et ? n(C.h8.AWAITING_BROWSER_CHECKOUT) : (eW(eR), n(C.h8.CREDIT_CARD_INFORMATION));
                            break;
                        case q.He.PAYPAL:
                            (eW(eP), n(C.h8.PAYPAL_INFORMATION));
                            break;
                        case q.He.VENMO:
                            (eW(ek), n(C.h8.VENMO_INFORMATION));
                            break;
                        case q.He.PAYMENT_REQUEST:
                            et && 'googlePay' === t ? n(C.h8.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY) : et && 'applePay' === t ? n(C.h8.AWAITING_BROWSER_CHECKOUT_APPLE_PAY) : (eW(ex), n(C.h8.PAYMENT_REQUEST_INFORMATION));
                            break;
                        case q.He.PRZELEWY24:
                            (eW(ej), n(C.h8.PRZELEWY24_INFORMATION));
                            break;
                        case q.He.EPS:
                            (eW(eU), n(C.h8.EPS_INFORMATION));
                            break;
                        case q.He.IDEAL:
                            (eW(ew), n(C.h8.IDEAL_INFORMATION));
                            break;
                        case q.He.CASH_APP:
                            (eW(eG), n(C.h8.CASH_APP_INFORMATION));
                            break;
                        case q.He.GIROPAY:
                        case q.He.PAYSAFE_CARD:
                        case q.He.GCASH:
                        case q.He.GRABPAY_MY:
                        case q.He.MOMO_WALLET:
                        case q.He.KAKAOPAY:
                        case q.He.GOPAY_WALLET:
                        case q.He.BANCONTACT:
                            (eW({
                                steps: [...E, ...ep, ...b],
                                methodType: e
                            }),
                                n(C.h8.ADDRESS));
                    }
                    null != M.Z.error && (0, _.fw)();
                },
                tN = (e, t) => {
                    (e8((e) => en(ee({}, e), { info: t })), eW(ex), tp(e));
                },
                tC = () => {
                    (eW(eM), eQ(C.h8.PAYMENT_TYPE));
                },
                tR = async (e) => {
                    if (((0, _.Xt)(e), null == e)) return void tC();
                    try {
                        let t = await (0, d.i6)(e, void 0, Z),
                            { billingAddressInfo: n } = (0, F.az)(e);
                        tN(t, n);
                    } catch (e) {}
                };
            if (eV === C.h8.ATTEMPT_GOOGLE_PAY || eV === C.h8.ATTEMPT_APPLE_PAY) {
                let e = X.intl.string(eV === C.h8.ATTEMPT_APPLE_PAY ? X.t.czhXDg : X.t.Zj2xQ0),
                    t = X.intl.string(eV === C.h8.ATTEMPT_APPLE_PAY ? X.t.WoXvJC : X.t.wnVVr6);
                ((n = (0, r.jsx)(L.t, {
                    onChooseType: tA,
                    paymentRequestWallet: eV === C.h8.ATTEMPT_APPLE_PAY ? 'applePay' : 'googlePay',
                    onStripePaymentMethodReceived: tR,
                    onPaymentRequestFailure: () => {
                        (tA(q.He.CARD), eH(e));
                    },
                    onValidPaymentRequest: () => tg(!0),
                    paymentRequestRef: tE
                })),
                    (o = (0, r.jsx)(eC, {
                        onBack: () => eQ(C.h8.PAYMENT_TYPE),
                        primaryCTA: P.Z.CTAType.CONTINUE,
                        primaryText: t,
                        onPrimary: () => tb(),
                        primaryDisabled: !tm
                    })));
                break;
            }
            ((n = (0, r.jsx)(eb, {
                onChooseType: tA,
                onStripePaymentMethodReceived: tR,
                paymentRequestWallets: th,
                isEligibleForTrial: $,
                paymentRequestPaymentContext: {
                    contextMetadata: eg,
                    activitySessionId: eE
                },
                paymentSourceTypeRestrictions: t_
            })),
                (o = (0, r.jsx)(eC, { onBack: y })));
            break;
        case C.h8.PAYMENT_ELEMENT:
            if (!eN) throw (0, d.SQ)('Payment Elements not enabled, invalid step');
            ((tS.shouldRender = !0),
                (tS.stripePaymentElementProps = {
                    onChange: (e) => {
                        (ea.log('PaymentElements onChange event:', e), tv(e.complete), tT((0, v.hR)(e.value.type)));
                    }
                }));
            let tP = () => {
                    (tT(null), eQ(C.h8.PAYMENT_TYPE));
                },
                tw = () => {
                    e7(!0);
                    try {
                        if (null == tI || !v.Og.has(tI)) throw (0, d.SQ)('Valid Payment Element source type not found');
                        let { steps: e, methodType: t } = eL[tI];
                        (eW({
                            steps: e,
                            methodType: t === q.He.UNKNOWN ? tI : t
                        }),
                            tI === q.He.PAYPAL ? eQ(C.h8.PAYPAL_INFORMATION) : eQ(C.h8.ADDRESS));
                    } catch (t) {
                        var e;
                        ea.error(null != (e = t.message) ? e : JSON.stringify(t));
                    } finally {
                        e7(!1);
                    }
                };
            ((n = null),
                (o = (0, r.jsx)(eC, {
                    onBack: tP,
                    primaryCTA: P.Z.CTAType.CONTINUE,
                    primaryType: 'submit',
                    primaryText: X.intl.string(X.t.PDTjLC),
                    primarySubmitting: e5,
                    primaryDisabled: !tO,
                    onPrimary: tw
                })));
            break;
        case C.h8.CREDIT_CARD_INFORMATION:
            let tD = async (e) => {
                e7(!0);
                try {
                    let t = await (0, d.qv)(eh, e);
                    (e4({ token: t }), eQ(C.h8.ADDRESS));
                } catch (e) {
                    var t;
                    ea.error(null != (t = e.message) ? t : JSON.stringify(e));
                } finally {
                    e7(!1);
                }
            };
            n = eN
                ? null
                : (0, r.jsx)(ey, {
                      infoNotice: eZ,
                      onCardInfoChange: (e, t) => {
                          (e2({
                              info: e,
                              isValid: t
                          }),
                              e8((t) => en(ee({}, t), { info: en(ee({}, t.info), { name: e.name }) })));
                      }
                  });
            let tL = eN ? !tO : !e1.isValid,
                tx = () => {
                    eQ(C.h8.PAYMENT_TYPE);
                };
            o = (0, r.jsx)(a.ElementsConsumer, {
                children: (e) => {
                    let { elements: t } = e;
                    return (0, r.jsx)(eC, {
                        onBack: tx,
                        primaryCTA: P.Z.CTAType.CONTINUE,
                        primaryType: 'submit',
                        primaryText: X.intl.string(X.t.PDTjLC),
                        primarySubmitting: e5,
                        primaryDisabled: tL,
                        onPrimary: () => tD(t)
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
                    step: eV,
                    onPurchaseComplete: () => O(eV),
                    onHandoffFailure: () => {
                        (eW(eR), eQ(C.h8.CREDIT_CARD_INFORMATION));
                    }
                })
            })),
                (o = (0, r.jsx)(D.a, {
                    onPrimaryClick: () => {
                        (eW(eR), eQ(C.h8.CREDIT_CARD_INFORMATION));
                    },
                    onBackClick: () => {
                        (eW(eM), eQ(C.h8.PAYMENT_TYPE));
                    }
                })));
            break;
        case C.h8.EPS_INFORMATION:
            ((n = (0, r.jsx)(T.Z, {
                type: q.He.EPS,
                onAccountHolderNameChange: (e) =>
                    e8({
                        info: en(ee({}, e6.info), { name: e }),
                        isValid: e6.isValid
                    }),
                onEPSBankChange: (e) => ts(e),
                epsBankValue: to,
                billingAddressInfo: e6.info
            })),
                (o = (0, r.jsx)(eC, {
                    onBack: () => eQ(C.h8.PAYMENT_TYPE),
                    primaryCTA: P.Z.CTAType.CONTINUE,
                    primaryText: X.intl.string(X.t.PDTjLC),
                    primaryDisabled: void 0 === to || '' === to || '' === e6.info.name,
                    onPrimary: () => eQ(C.h8.ADDRESS)
                })));
            break;
        case C.h8.IDEAL_INFORMATION:
            ((n = (0, r.jsx)(I.Z, {
                type: q.He.IDEAL,
                onAccountHolderNameChange: (e) =>
                    e8({
                        info: en(ee({}, e6.info), { name: e }),
                        isValid: e6.isValid
                    }),
                billingAddressInfo: e6.info
            })),
                (o = (0, r.jsx)(eC, {
                    onBack: () => eQ(C.h8.PAYMENT_TYPE),
                    primaryCTA: P.Z.CTAType.CONTINUE,
                    primaryText: X.intl.string(X.t.PDTjLC),
                    primaryDisabled: '' === e6.info.name,
                    onPrimary: () => eQ(C.h8.ADDRESS)
                })));
            break;
        case C.h8.PRZELEWY24_INFORMATION:
            ((n = (0, r.jsx)(T.Z, {
                type: q.He.PRZELEWY24,
                onNameChange: (e) =>
                    e8({
                        info: en(ee({}, e6.info), { name: e }),
                        isValid: e6.isValid
                    }),
                onEmailChange: (e) =>
                    e8({
                        info: en(ee({}, e6.info), { email: e }),
                        isValid: e6.isValid
                    }),
                onP24BankChange: (e) => {
                    tc(e);
                },
                p24BankValue: tl,
                billingAddressInfo: e6.info
            })),
                (o = (0, r.jsx)(eC, {
                    onBack: () => eQ(C.h8.PAYMENT_TYPE),
                    primaryCTA: P.Z.CTAType.CONTINUE,
                    primaryText: X.intl.string(X.t.PDTjLC),
                    primaryDisabled: void 0 === e6.info.name || '' === e6.info.name || void 0 === e6.info.email || '' === e6.info.email || void 0 === tl || '' === tl,
                    onPrimary: () => eQ(C.h8.ADDRESS)
                })));
            break;
        case C.h8.PAYPAL_INFORMATION:
            let tk = 0 !== tt.length && null != tn;
            n = (0, r.jsx)(eO, {});
            let tM = eN ? () => eJ(q.He.PAYPAL) : () => eQ(C.h8.PAYMENT_TYPE);
            o = (0, r.jsx)(eC, {
                onBack: tM,
                primaryCTA: P.Z.CTAType.CONTINUE,
                primaryText: tk ? X.intl.string(X.t.PDTjLC) : X.intl.string(X.t.Djzd7O),
                onPrimary: () => (tk ? eQ(C.h8.ADDRESS) : (0, f.i0)())
            });
            break;
        case C.h8.VENMO_INFORMATION:
            let tj = 0 !== tr.length && null != tn;
            ((n = (0, r.jsx)(ev, {})),
                (o = (0, r.jsx)(eC, {
                    onBack: () => eQ(C.h8.PAYMENT_TYPE),
                    primaryCTA: P.Z.CTAType.CONTINUE,
                    primaryText: tj ? X.intl.string(X.t.PDTjLC) : X.intl.string(X.t['4KoTLC']),
                    onPrimary: () => (tj ? eQ(C.h8.ADDRESS) : (0, f.og)())
                })));
            break;
        case C.h8.PAYMENT_REQUEST_INFORMATION:
            ((n = (0, r.jsx)(eT, {})), (o = (0, r.jsx)(eC, { onBack: () => eQ(C.h8.PAYMENT_TYPE) })));
            break;
        case C.h8.CASH_APP_INFORMATION:
            let tU = null != ti,
                tG = null != ez;
            ((n = (0, r.jsx)(eI, {})),
                (o = (0, r.jsx)(eC, {
                    onBack: () => eQ(C.h8.PAYMENT_TYPE),
                    primaryCTA: P.Z.CTAType.CONTINUE,
                    primaryText: tU ? X.intl.string(X.t.PDTjLC) : X.intl.string(X.t['9ALP8/']),
                    onPrimary: () => (tU ? eQ(C.h8.ADDRESS) : (0, W.cp)()),
                    primaryDisabled: !tG
                })));
            break;
        case C.h8.ADDRESS:
            let tB = async () => {
                e7(!0);
                let e = eN && null != tI,
                    t = e ? tI : eY.methodType;
                switch (t) {
                    case q.He.CARD:
                        try {
                            let t = e ? await (0, d.Q5)(eh, e6.info, q.He.CARD, ty.current, Z) : await (0, d.f0)(eh, e3.token, e6.info, Z);
                            tp(t);
                        } catch (e) {}
                        break;
                    case q.He.VENMO:
                    case q.He.PAYPAL:
                        try {
                            s()(null != tn, 'Missing braintreeNonce');
                            let e = await (0, d.lP)(tn, e6.info, Z);
                            tp(e);
                        } catch (e) {}
                        break;
                    case q.He.EPS:
                        try {
                            let e = await (0, d.YQ)(eh, to, e6.info, Z);
                            tp(e);
                        } catch (e) {
                            ea.warn(e);
                        }
                        break;
                    case q.He.IDEAL:
                        try {
                            let t = e ? await (0, d.Q5)(eh, e6.info, q.He.IDEAL, ty.current, Z) : await (0, d.aN)(eh, e6.info, Z);
                            tp(t);
                        } catch (e) {
                            ea.warn(e);
                        }
                        break;
                    case q.He.PRZELEWY24:
                        try {
                            if (void 0 === tl) throw (0, d.SQ)('Bank required for Przelewy24');
                            let e = await (0, d.pF)(eh, { p24Bank: tl }, e6.info, Z);
                            tp(e);
                        } catch (e) {}
                        break;
                    case q.He.PAYSAFE_CARD:
                    case q.He.GRABPAY_MY:
                        try {
                            let e = await (0, d.sF)(e6.info, t, Z);
                            tp(e);
                        } catch (e) {}
                        break;
                    case q.He.GCASH:
                    case q.He.MOMO_WALLET:
                    case q.He.KAKAOPAY:
                    case q.He.GOPAY_WALLET:
                        try {
                            let { redirectConfirmation: e } = await (0, d.Dk)(e6.info, t, Z);
                            te(e);
                        } catch (e) {}
                        break;
                    case q.He.GIROPAY:
                    case q.He.BANCONTACT:
                        try {
                            let e = await (0, d.GV)(eh, e6.info, t, Z);
                            tp(e);
                        } catch (e) {}
                        break;
                    case q.He.CASH_APP:
                        try {
                            s()(null != ti, 'Missing adyenPaymentData');
                            let { paymentSource: e } = await (0, d.Dk)(e6.info, t, Z, ti, ei);
                            (s()(null != e, 'Cash App Pay Payment Source missing'), tp(e));
                        } catch (e) {}
                        break;
                    default:
                        throw Error('unknown step not handled');
                }
                e9 || e7(!1);
            };
            switch (eY.methodType) {
                case q.He.CARD:
                    ((h = C.h8.CREDIT_CARD_INFORMATION), (p = q.He.CARD));
                    break;
                case q.He.PAYPAL:
                    ((h = C.h8.PAYPAL_INFORMATION), (p = q.He.PAYPAL));
                    break;
                case q.He.VENMO:
                    ((h = C.h8.VENMO_INFORMATION), (p = q.He.VENMO));
                    break;
                case q.He.GIROPAY:
                    ((h = C.h8.PAYMENT_TYPE), (p = q.He.GIROPAY));
                    break;
                case q.He.PAYSAFE_CARD:
                case q.He.GCASH:
                case q.He.GRABPAY_MY:
                case q.He.MOMO_WALLET:
                case q.He.KAKAOPAY:
                case q.He.GOPAY_WALLET:
                case q.He.BANCONTACT:
                    ((h = C.h8.PAYMENT_TYPE), (p = eY.methodType));
                    break;
                case q.He.EPS:
                    ((h = C.h8.EPS_INFORMATION), (p = q.He.EPS));
                    break;
                case q.He.IDEAL:
                    ((h = C.h8.IDEAL_INFORMATION), (p = q.He.IDEAL));
                    break;
                case q.He.PRZELEWY24:
                    ((h = C.h8.PRZELEWY24_INFORMATION), (p = q.He.PRZELEWY24));
                    break;
                case q.He.CASH_APP:
                    ((h = C.h8.CASH_APP_INFORMATION), (p = q.He.CASH_APP));
                    break;
                default:
                    ((h = C.h8.PAYMENT_TYPE), (p = q.He.CARD));
            }
            if ((eN && null != tI && (h = C.h8.PAYMENT_ELEMENT), eN)) {
                tS.shouldRender = !0;
                let { name: e, address: t } = (0, F.XZ)(e6.info);
                tS.stripeAddressElementProps = {
                    options: {
                        mode: 'billing',
                        defaultValues: ee(
                            { name: null != e ? e : null },
                            null != t && {
                                address: Object.fromEntries(
                                    Object.entries(t).filter((e) => {
                                        let [t, n] = e;
                                        return void 0 !== n;
                                    })
                                )
                            }
                        )
                    },
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
                        e8({
                            info: ee({}, e6.info, a),
                            isValid: n
                        });
                    }
                };
            }
            ((n = eN
                ? null
                : (0, r.jsx)(eS, {
                      billingAddressInfo: e6.info,
                      onBillingAddressChange: (e, t) => {
                          e8({
                              info: ee({}, e6.info, e),
                              isValid: t
                          });
                      },
                      paymentSourceType: p
                  })),
                (o = (0, r.jsx)(eC, {
                    onBack: () => eQ(h),
                    primaryCTA: P.Z.CTAType.CONTINUE,
                    primaryText: X.intl.string(X.t.PDTjLC),
                    primarySubmitting: e5,
                    primaryDisabled: !e6.isValid || ta,
                    onPrimary: tB
                })));
            break;
        case C.h8.AWAITING_AUTHENTICATION:
            n = (0, r.jsx)(eA, {});
            break;
        default:
            throw Error('Unexpected step: '.concat(eV));
    }
    let tV = eN && tS.shouldRender,
        tF = (0, r.jsxs)(c.qBt, {
            className: J.sequencer,
            staticClassName: J.sequencerStatic,
            animatedNodeClassName: J.sequencerAnimatedNode,
            fillParent: !0,
            overrideKey: tV ? 'combined_stripe_elements' : void 0,
            step: eV,
            steps: eY.steps,
            sideMargin: 20,
            children: [
                tV &&
                    (0, r.jsx)(S.h, {
                        step: eV,
                        paymentElementSelectedType: tI,
                        originalPaymentType: eY.methodType,
                        elementsRef: ty,
                        stripePaymentElementProps: tS.stripePaymentElementProps,
                        stripeAddressElementProps: tS.stripeAddressElementProps
                    }),
                n
            ]
        }),
        tZ = eV === C.h8.PAYMENT_TYPE && 0 === E.length ? null : o;
    return z
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  $ &&
                      (0, r.jsx)(R.Z, {
                          className: Q.paymentModalBreadcrumbs,
                          isEligibleForTrial: $
                      }),
                  (0, r.jsxs)(w.C3, {
                      children: [(0, r.jsx)(x.Z, { className: Q.paymentModalError }), tF]
                  }),
                  (0, r.jsx)(w.O3, { children: tZ })
              ]
          })
        : (0, r.jsx)(H.Z, {
              steps: null != k ? k : eY.steps,
              currentStep: null != j ? j : eV,
              paymentError: m.paymentError,
              header: G,
              hideBreadcrumbs: Y,
              body: tF,
              footer: tZ
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
        (null == K.Z.cashAppPayComponent && (0, W.eI)(), (0, f.eI)(), r || (0, d.tZ)());
    });
    let [a, o] = i.useState(t);
    null != t && null == a && o(t);
    let [s, c] = i.useState(() => ({
            info: eg,
            isValid: !1
        })),
        [p, h] = i.useState(() => ({
            info: eE,
            isValid: !1
        })),
        [m, g] = i.useState(''),
        [E, b] = i.useState(''),
        [y, v] = i.useState(() => ({ token: null })),
        [I, T, S, A, N] = (0, l.Wu)([M.Z], () => [M.Z.braintreeEmail, M.Z.braintreeNonce, M.Z.error, M.Z.venmoUsername, M.Z.adyenPaymentData]),
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
        [x, k] = i.useState(null),
        B = i.useRef(null),
        V = (0, l.e7)([j.Z], () => j.Z.isAwaitingAuthentication),
        [F, H] = (0, l.Wu)([G.Z], () => [G.Z.purchaseTokenAuthState, G.Z.purchaseTokenHash]);
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
            paymentAuthenticationState: R ? Z.wr.PENDING : null != C ? Z.wr.ERROR : Z.wr.NONE,
            purchaseError: x,
            setPurchaseError: k,
            purchaseErrorBlockRef: B,
            isAuthenticating: V,
            purchaseTokenAuthState: F,
            purchaseTokenHash: H,
            epsBankState: E,
            setEpsBankState: b,
            p24BankState: m,
            setP24BankState: g
        }
    );
}
