n.d(t, {
    fL: () => eR,
    vP: () => eC
}),
    n(836215),
    n(388685),
    n(49124),
    n(415506),
    n(467055);
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
    ep = (e, t) => {
        if (t === z.He.CARD) return e.map((e) => (e === N.h8.CREDIT_CARD_INFORMATION ? N.h8.PAYMENT_ELEMENT : e));
        if (t === z.He.PAYPAL) {
            let t = e.indexOf(N.h8.PAYMENT_TYPE);
            return e.toSpliced(t + 1, 0, N.h8.PAYMENT_ELEMENT);
        }
        return e;
    },
    eh = (e, t) => {
        let { prependSteps: n, appendSteps: r, paymentElementsEnabled: i } = t;
        return e.map((e) => {
            let { baseSteps: t, methodType: a } = e,
                o = [...n, ...t, ...r];
            return {
                steps: i ? ep(o, a) : o,
                methodType: a
            };
        });
    },
    em = {
        name: '',
        cardNumber: '',
        expirationDate: '',
        cvc: ''
    },
    eg = {
        email: '',
        name: '',
        country: '',
        line1: '',
        line2: '',
        city: '',
        postalCode: '',
        state: ''
    };
function eE(e) {
    let { paymentSourceTypeRestrictions: t } = e,
        n = null != t && t.length > 0 ? H.w.ADD_NEW_PAYMENT_METHOD : void 0;
    return (0, r.jsxs)('div', {
        className: X.body,
        children: [(0, r.jsx)(H.Y, { paymentRestrictionBannerType: n }), (0, r.jsx)(p.ZP, $({}, e))]
    });
}
function eb(e) {
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
function ey() {
    return (0, r.jsx)('div', {
        className: X.body,
        children: (0, r.jsx)(h.Z, {})
    });
}
function eO() {
    return (0, r.jsx)('div', {
        className: X.body,
        children: (0, r.jsx)(m.Z, {})
    });
}
function ev() {
    return (0, r.jsx)('div', {
        className: X.body,
        children: (0, r.jsx)(K.Z, {})
    });
}
function eI() {
    let e = (0, l.e7)([x.Z], () => x.Z.isBusy),
        t = (0, l.e7)([k.Z], () => k.Z.stripePaymentMethod);
    return (0, r.jsx)(y.k, {
        className: X.body,
        stripePaymentMethod: t,
        submitting: e
    });
}
function eT(e) {
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
function eS() {
    return (0, r.jsx)(E.F, { className: X.body });
}
function eA(e) {
    return () => (null != k.Z.error && (0, _.fw)(), e());
}
function eN(e) {
    let { onPrimary: t, onBack: n } = e,
        i = en(e, ['onPrimary', 'onBack']),
        a = t;
    null != t && (a = eA(t));
    let o = n;
    return (
        null != n && (o = eA(n)),
        (0, r.jsx)(
            R.Z,
            et($({}, i), {
                onPrimary: a,
                onBack: o
            })
        )
    );
}
function eC(e) {
    var t;
    let n,
        o,
        p,
        h,
        { paymentModalArgs: m, initialStep: g, prependSteps: E, appendSteps: b, onReturn: y, onComplete: O, onStepChange: S, breadcrumpSteps: x, currentBreadcrumpStep: M, header: U, analyticsLocation: F, hideBreadcrumbs: H = !1, usePaymentModalStep: K = !1, isEligibleForTrial: J = !1, allowDesktopRedirectPurchase: ee = !1, toastContent: en, overwriteSubscriptionPaymentSource: er = !1 } = e,
        { stripe: ep, contextMetadata: em, activitySessionId: eg, paymentElementsEnabled: eA } = (0, A.JL)(),
        [eC, eR] = i.useMemo(
            () =>
                eh(
                    [
                        {
                            baseSteps: eo,
                            methodType: z.He.CARD
                        },
                        {
                            baseSteps: es,
                            methodType: z.He.PAYPAL
                        }
                    ],
                    {
                        prependSteps: E,
                        appendSteps: b,
                        paymentElementsEnabled: eA
                    }
                ),
            [E, b, eA]
        ),
        eP = {
            steps: [...E, ...ea, ...b],
            methodType: z.He.PAYMENT_REQUEST
        },
        ew = {
            steps: [...E, ...el, ...b],
            methodType: z.He.VENMO
        },
        eD = {
            steps: [...E, ...ea, ...b]
        },
        eL = {
            steps: [...E, ...ec, ...b],
            methodType: z.He.PRZELEWY24
        },
        ex = {
            steps: [...E, ...eu, ...b],
            methodType: z.He.EPS
        },
        ek = {
            steps: [...E, ...ed, ...b],
            methodType: z.He.IDEAL
        },
        eM = {
            steps: [...E, ...ef, ...b],
            methodType: z.He.CASH_APP
        };
    function ej(e) {
        switch (e) {
            case N.h8.CREDIT_CARD_INFORMATION:
                return eC;
            case N.h8.CASH_APP_INFORMATION:
                return eM;
            default:
                return { steps: [N.h8.ADD_PAYMENT_STEPS] };
        }
    }
    let [eU, eG] = i.useState(g),
        [eB, eV] = i.useState(null),
        [eF, eZ] = i.useState(ej(g)),
        eH = (0, l.e7)([k.Z], () => k.Z.redirectedPaymentSourceId),
        eY = (0, l.e7)([W.Z], () => W.Z.cashAppPayComponent),
        eW = {
            completeSteps: td,
            setIsSubmittingCurrentStep: m.setIsSubmittingCurrentStep
        },
        eK = i.useRef(eW);
    i.useEffect(() => {
        eK.current = eW;
    }),
        i.useEffect(() => {
            let { completeSteps: e, setIsSubmittingCurrentStep: t } = eK.current;
            (async () => {
                if (null == eH) return;
                await (0, d.tZ)();
                let n = j.Z.getPaymentSource(eH);
                null != n && (e(n), t(!1));
            })();
        }, [eH]);
    let ez = i.useCallback(
            function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                eV(null),
                    eG(e),
                    t &&
                        S({
                            currentStep: eU,
                            toStep: e
                        });
            },
            [eU, S]
        ),
        eq = i.useCallback(
            function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                tO(e), ez(N.h8.PAYMENT_ELEMENT, t);
            },
            [ez]
        );
    function eX(e) {
        (0, c.showToast)((0, c.createToast)(void 0 !== en ? en : q.intl.string(q.t['VJPg+v']), c.ToastType.SUCCESS, { position: c.ToastPosition.BOTTOM })), O(eU, e), ez(g, !1);
    }
    i.useEffect(() => {
        if (!eA) return;
        let e = () => {
            eq(z.He.PAYPAL);
        };
        return (
            u.Z.subscribe('BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED', e),
            () => {
                u.Z.unsubscribe('BRAINTREE_TOKENIZE_PAYPAL_FAIL_WINDOW_CLOSED', e);
            }
        );
    }, [eq, eA]);
    let { setPaymentSourceId: eQ, creditCardState: eJ, setCreditCardState: e$, tokenState: e0, setTokenState: e1, isSubmittingCurrentStep: e2, billingAddressState: e3, setBillingAddressState: e4, setIsSubmittingCurrentStep: e5, hasRedirectURL: e6, setHasRedirectURL: e8, braintreeEmail: e7, braintreeNonce: e9, venmoUsername: te, adyenPaymentData: tt, isAuthenticating: tn, epsBankState: tr, setEpsBankState: ti, p24BankState: ta, setP24BankState: to, selectedSkuId: ts } = m,
        tl = null != ts ? ts : '',
        tc = (0, l.e7)([G.Z], () => G.Z.get(tl), [tl]),
        tu = null == tc || null == (t = tc.eligiblePaymentGateways) ? void 0 : t.map((e) => e.valueOf());
    function td(e) {
        eQ(e.id), eX(e);
    }
    let tf = !(0, B.isDesktop)() || ee ? ['googlePay', 'applePay'] : [],
        [t_, tp] = i.useState(!1),
        th = i.useRef(null),
        tm = () => {
            null != th.current && th.current.show();
        },
        tg = i.useRef(null),
        [tE, tb] = i.useState(!1),
        [ty, tO] = i.useState(null),
        tv = {
            shouldRender: !1,
            stripePaymentElementProps: {},
            stripeAddressElementProps: {}
        };
    switch (eU) {
        case N.h8.ATTEMPT_GOOGLE_PAY:
        case N.h8.ATTEMPT_APPLE_PAY:
        case N.h8.PAYMENT_TYPE:
            let tI = (e, t) => {
                    let n = eA && T.Og.has(e) ? () => eq(e) : ez;
                    switch (e) {
                        case z.He.CARD:
                            ee ? n(N.h8.AWAITING_BROWSER_CHECKOUT) : (eZ(eC), n(N.h8.CREDIT_CARD_INFORMATION));
                            break;
                        case z.He.PAYPAL:
                            eZ(eR), n(N.h8.PAYPAL_INFORMATION);
                            break;
                        case z.He.VENMO:
                            eZ(ew), n(N.h8.VENMO_INFORMATION);
                            break;
                        case z.He.PAYMENT_REQUEST:
                            ee && 'googlePay' === t ? n(N.h8.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY) : ee && 'applePay' === t ? n(N.h8.AWAITING_BROWSER_CHECKOUT_APPLE_PAY) : (eZ(eP), n(N.h8.PAYMENT_REQUEST_INFORMATION));
                            break;
                        case z.He.PRZELEWY24:
                            eZ(eL), n(N.h8.PRZELEWY24_INFORMATION);
                            break;
                        case z.He.EPS:
                            eZ(ex), n(N.h8.EPS_INFORMATION);
                            break;
                        case z.He.IDEAL:
                            eZ(ek), n(N.h8.IDEAL_INFORMATION);
                            break;
                        case z.He.CASH_APP:
                            eZ(eM), n(N.h8.CASH_APP_INFORMATION);
                            break;
                        case z.He.GIROPAY:
                        case z.He.PAYSAFE_CARD:
                        case z.He.GCASH:
                        case z.He.GRABPAY_MY:
                        case z.He.MOMO_WALLET:
                        case z.He.KAKAOPAY:
                        case z.He.GOPAY_WALLET:
                        case z.He.BANCONTACT:
                            eZ({
                                steps: [...E, ...e_, ...b],
                                methodType: e
                            }),
                                n(N.h8.ADDRESS);
                    }
                    null != k.Z.error && (0, _.fw)();
                },
                tT = (e, t) => {
                    e4((e) => et($({}, e), { info: t })), eZ(eP), td(e);
                },
                tS = () => {
                    eZ(eD), ez(N.h8.PAYMENT_TYPE);
                },
                tA = async (e) => {
                    if (((0, _.Xt)(e), null == e)) return void tS();
                    try {
                        let t = await (0, d.i6)(e, void 0, F),
                            { billingAddressInfo: n } = (0, V.az)(e);
                        tT(t, n);
                    } catch (e) {}
                };
            if (eU === N.h8.ATTEMPT_GOOGLE_PAY || eU === N.h8.ATTEMPT_APPLE_PAY) {
                let e = q.intl.string(eU === N.h8.ATTEMPT_APPLE_PAY ? q.t.czhXDg : q.t.Zj2xQ0),
                    t = q.intl.string(eU === N.h8.ATTEMPT_APPLE_PAY ? q.t.WoXvJC : q.t.wnVVr6);
                (n = (0, r.jsx)(D.t, {
                    onChooseType: tI,
                    paymentRequestWallet: eU === N.h8.ATTEMPT_APPLE_PAY ? 'applePay' : 'googlePay',
                    onStripePaymentMethodReceived: tA,
                    onPaymentRequestFailure: () => {
                        tI(z.He.CARD), eV(e);
                    },
                    onValidPaymentRequest: () => tp(!0),
                    paymentRequestRef: th
                })),
                    (o = (0, r.jsx)(eN, {
                        onBack: () => ez(N.h8.PAYMENT_TYPE),
                        primaryCTA: R.Z.CTAType.CONTINUE,
                        primaryText: t,
                        onPrimary: () => tm(),
                        primaryDisabled: !t_
                    }));
                break;
            }
            (n = (0, r.jsx)(eE, {
                onChooseType: tI,
                onStripePaymentMethodReceived: tA,
                paymentRequestWallets: tf,
                isEligibleForTrial: J,
                paymentRequestPaymentContext: {
                    contextMetadata: em,
                    activitySessionId: eg
                },
                paymentSourceTypeRestrictions: tu
            })),
                (o = (0, r.jsx)(eN, { onBack: y }));
            break;
        case N.h8.PAYMENT_ELEMENT:
            if (!eA) throw (0, d.SQ)('Payment Elements not enabled, invalid step');
            (tv.shouldRender = !0),
                (tv.stripePaymentElementProps = {
                    paymentMethodTypes: ['card'],
                    onChange: (e) => {
                        ei.log('PaymentElements onChange event:', e), tb(e.complete), tO((0, T.hR)(e.value.type));
                    }
                });
            let tN = () => {
                    tO(null), ez(N.h8.PAYMENT_TYPE);
                },
                tC = () => {
                    e5(!0);
                    try {
                        if (ty === z.He.PAYPAL) ez(N.h8.PAYPAL_INFORMATION);
                        else if (ty === z.He.CARD) ez(N.h8.ADDRESS);
                        else throw (0, d.SQ)('Valid Payment Element source type not found');
                    } catch (t) {
                        var e;
                        ei.error(null != (e = t.message) ? e : JSON.stringify(t));
                    } finally {
                        e5(!1);
                    }
                };
            (n = null),
                (o = (0, r.jsx)(eN, {
                    onBack: tN,
                    primaryCTA: R.Z.CTAType.CONTINUE,
                    primaryType: 'submit',
                    primaryText: q.intl.string(q.t.PDTjLC),
                    primarySubmitting: e2,
                    primaryDisabled: !tE,
                    onPrimary: tC
                }));
            break;
        case N.h8.CREDIT_CARD_INFORMATION:
            let tR = async (e) => {
                e5(!0);
                try {
                    let t = await (0, d.qv)(ep, e);
                    e1({ token: t }), ez(N.h8.ADDRESS);
                } catch (e) {
                    var t;
                    ei.error(null != (t = e.message) ? t : JSON.stringify(e));
                } finally {
                    e5(!1);
                }
            };
            n = eA
                ? null
                : (0, r.jsx)(eb, {
                      infoNotice: eB,
                      onCardInfoChange: (e, t) => {
                          e$({
                              info: e,
                              isValid: t
                          }),
                              e4((t) => et($({}, t), { info: et($({}, t.info), { name: e.name }) }));
                      }
                  });
            let tP = eA ? !tE : !eJ.isValid,
                tw = () => {
                    ez(N.h8.PAYMENT_TYPE);
                };
            o = (0, r.jsx)(a.ElementsConsumer, {
                children: (e) => {
                    let { elements: t } = e;
                    return (0, r.jsx)(eN, {
                        onBack: tw,
                        primaryCTA: R.Z.CTAType.CONTINUE,
                        primaryType: 'submit',
                        primaryText: q.intl.string(q.t.PDTjLC),
                        primarySubmitting: e2,
                        primaryDisabled: tP,
                        onPrimary: () => tR(t)
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
                    step: eU,
                    onPurchaseComplete: () => O(eU),
                    onHandoffFailure: () => {
                        eZ(eC), ez(N.h8.CREDIT_CARD_INFORMATION);
                    }
                })
            })),
                (o = (0, r.jsx)(w.a, {
                    onPrimaryClick: () => {
                        eZ(eC), ez(N.h8.CREDIT_CARD_INFORMATION);
                    },
                    onBackClick: () => {
                        eZ(eD), ez(N.h8.PAYMENT_TYPE);
                    }
                }));
            break;
        case N.h8.EPS_INFORMATION:
            (n = (0, r.jsx)(I.Z, {
                type: z.He.EPS,
                onAccountHolderNameChange: (e) =>
                    e4({
                        info: et($({}, e3.info), { name: e }),
                        isValid: e3.isValid
                    }),
                onEPSBankChange: (e) => ti(e),
                epsBankValue: tr,
                billingAddressInfo: e3.info
            })),
                (o = (0, r.jsx)(eN, {
                    onBack: () => ez(N.h8.PAYMENT_TYPE),
                    primaryCTA: R.Z.CTAType.CONTINUE,
                    primaryText: q.intl.string(q.t.PDTjLC),
                    primaryDisabled: void 0 === tr || '' === tr || '' === e3.info.name,
                    onPrimary: () => ez(N.h8.ADDRESS)
                }));
            break;
        case N.h8.IDEAL_INFORMATION:
            (n = (0, r.jsx)(v.Z, {
                type: z.He.IDEAL,
                onAccountHolderNameChange: (e) =>
                    e4({
                        info: et($({}, e3.info), { name: e }),
                        isValid: e3.isValid
                    }),
                billingAddressInfo: e3.info
            })),
                (o = (0, r.jsx)(eN, {
                    onBack: () => ez(N.h8.PAYMENT_TYPE),
                    primaryCTA: R.Z.CTAType.CONTINUE,
                    primaryText: q.intl.string(q.t.PDTjLC),
                    primaryDisabled: '' === e3.info.name,
                    onPrimary: () => ez(N.h8.ADDRESS)
                }));
            break;
        case N.h8.PRZELEWY24_INFORMATION:
            (n = (0, r.jsx)(I.Z, {
                type: z.He.PRZELEWY24,
                onNameChange: (e) =>
                    e4({
                        info: et($({}, e3.info), { name: e }),
                        isValid: e3.isValid
                    }),
                onEmailChange: (e) =>
                    e4({
                        info: et($({}, e3.info), { email: e }),
                        isValid: e3.isValid
                    }),
                onP24BankChange: (e) => {
                    to(e);
                },
                p24BankValue: ta,
                billingAddressInfo: e3.info
            })),
                (o = (0, r.jsx)(eN, {
                    onBack: () => ez(N.h8.PAYMENT_TYPE),
                    primaryCTA: R.Z.CTAType.CONTINUE,
                    primaryText: q.intl.string(q.t.PDTjLC),
                    primaryDisabled: void 0 === e3.info.name || '' === e3.info.name || void 0 === e3.info.email || '' === e3.info.email || void 0 === ta || '' === ta,
                    onPrimary: () => ez(N.h8.ADDRESS)
                }));
            break;
        case N.h8.PAYPAL_INFORMATION:
            let tD = 0 !== e7.length && null != e9;
            n = (0, r.jsx)(ey, {});
            let tL = eA ? () => eq(z.He.PAYPAL) : () => ez(N.h8.PAYMENT_TYPE);
            o = (0, r.jsx)(eN, {
                onBack: tL,
                primaryCTA: R.Z.CTAType.CONTINUE,
                primaryText: tD ? q.intl.string(q.t.PDTjLC) : q.intl.string(q.t.Djzd7O),
                onPrimary: () => (tD ? ez(N.h8.ADDRESS) : (0, f.i0)())
            });
            break;
        case N.h8.VENMO_INFORMATION:
            let tx = 0 !== te.length && null != e9;
            (n = (0, r.jsx)(eO, {})),
                (o = (0, r.jsx)(eN, {
                    onBack: () => ez(N.h8.PAYMENT_TYPE),
                    primaryCTA: R.Z.CTAType.CONTINUE,
                    primaryText: tx ? q.intl.string(q.t.PDTjLC) : q.intl.string(q.t['4KoTLC']),
                    onPrimary: () => (tx ? ez(N.h8.ADDRESS) : (0, f.og)())
                }));
            break;
        case N.h8.PAYMENT_REQUEST_INFORMATION:
            (n = (0, r.jsx)(eI, {})), (o = (0, r.jsx)(eN, { onBack: () => ez(N.h8.PAYMENT_TYPE) }));
            break;
        case N.h8.CASH_APP_INFORMATION:
            let tk = null != tt,
                tM = null != eY;
            (n = (0, r.jsx)(ev, {})),
                (o = (0, r.jsx)(eN, {
                    onBack: () => ez(N.h8.PAYMENT_TYPE),
                    primaryCTA: R.Z.CTAType.CONTINUE,
                    primaryText: tk ? q.intl.string(q.t.PDTjLC) : q.intl.string(q.t['9ALP8/']),
                    onPrimary: () => (tk ? ez(N.h8.ADDRESS) : (0, Y.cp)()),
                    primaryDisabled: !tM
                }));
            break;
        case N.h8.ADDRESS:
            let tj = async () => {
                e5(!0);
                let e = eA ? ty : eF.methodType;
                switch (e) {
                    case z.He.CARD:
                        try {
                            let e = {
                                    enabled: eA,
                                    elements: tg.current
                                },
                                t = await (0, d.f0)(ep, e0.token, e3.info, F, e);
                            td(t);
                        } catch (e) {}
                        break;
                    case z.He.VENMO:
                    case z.He.PAYPAL:
                        try {
                            s()(null != e9, 'Missing braintreeNonce');
                            let e = await (0, d.lP)(e9, e3.info, F);
                            td(e);
                        } catch (e) {}
                        break;
                    case z.He.EPS:
                        try {
                            let e = await (0, d.YQ)(ep, tr, e3.info, F);
                            td(e);
                        } catch (e) {
                            ei.warn(e);
                        }
                        break;
                    case z.He.IDEAL:
                        try {
                            let e = await (0, d.aN)(ep, e3.info, F);
                            td(e);
                        } catch (e) {
                            ei.warn(e);
                        }
                        break;
                    case z.He.PRZELEWY24:
                        try {
                            if (void 0 === ta) throw (0, d.SQ)('Bank required for Przelewy24');
                            let e = await (0, d.pF)(ep, { p24Bank: ta }, e3.info, F);
                            td(e);
                        } catch (e) {}
                        break;
                    case z.He.PAYSAFE_CARD:
                    case z.He.GRABPAY_MY:
                        try {
                            let t = await (0, d.sF)(e3.info, e, F);
                            td(t);
                        } catch (e) {}
                        break;
                    case z.He.GCASH:
                    case z.He.MOMO_WALLET:
                    case z.He.KAKAOPAY:
                    case z.He.GOPAY_WALLET:
                        try {
                            let { redirectConfirmation: t } = await (0, d.Dk)(e3.info, e, F);
                            e8(t);
                        } catch (e) {}
                        break;
                    case z.He.GIROPAY:
                    case z.He.BANCONTACT:
                        try {
                            let t = await (0, d.GV)(ep, e3.info, e, F);
                            td(t);
                        } catch (e) {}
                        break;
                    case z.He.CASH_APP:
                        try {
                            s()(null != tt, 'Missing adyenPaymentData');
                            let { paymentSource: t } = await (0, d.Dk)(e3.info, e, F, tt, er);
                            s()(null != t, 'Cash App Pay Payment Source missing'), td(t);
                        } catch (e) {}
                        break;
                    default:
                        throw Error('unknown step not handled');
                }
                e6 || e5(!1);
            };
            switch (eF.methodType) {
                case z.He.CARD:
                    (h = N.h8.CREDIT_CARD_INFORMATION), (p = z.He.CARD);
                    break;
                case z.He.PAYPAL:
                    (h = N.h8.PAYPAL_INFORMATION), (p = z.He.PAYPAL);
                    break;
                case z.He.VENMO:
                    (h = N.h8.VENMO_INFORMATION), (p = z.He.VENMO);
                    break;
                case z.He.GIROPAY:
                    (h = N.h8.PAYMENT_TYPE), (p = z.He.GIROPAY);
                    break;
                case z.He.PAYSAFE_CARD:
                case z.He.GCASH:
                case z.He.GRABPAY_MY:
                case z.He.MOMO_WALLET:
                case z.He.KAKAOPAY:
                case z.He.GOPAY_WALLET:
                case z.He.BANCONTACT:
                    (h = N.h8.PAYMENT_TYPE), (p = eF.methodType);
                    break;
                case z.He.EPS:
                    (h = N.h8.EPS_INFORMATION), (p = z.He.EPS);
                    break;
                case z.He.IDEAL:
                    (h = N.h8.IDEAL_INFORMATION), (p = z.He.IDEAL);
                    break;
                case z.He.PRZELEWY24:
                    (h = N.h8.PRZELEWY24_INFORMATION), (p = z.He.PRZELEWY24);
                    break;
                case z.He.CASH_APP:
                    (h = N.h8.CASH_APP_INFORMATION), (p = z.He.CASH_APP);
                    break;
                default:
                    (h = N.h8.PAYMENT_TYPE), (p = z.He.CARD);
            }
            if ((eA && null != ty && (h = N.h8.PAYMENT_ELEMENT), eA)) {
                tv.shouldRender = !0;
                let { name: e, address: t } = (0, V.XZ)(e3.info);
                tv.stripeAddressElementProps = {
                    options: {
                        mode: 'billing',
                        defaultValues: $(
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
                        e4({
                            info: $({}, e3.info, a),
                            isValid: n
                        });
                    }
                };
            }
            (n = eA
                ? null
                : (0, r.jsx)(eT, {
                      billingAddressInfo: e3.info,
                      onBillingAddressChange: (e, t) => {
                          e4({
                              info: $({}, e3.info, e),
                              isValid: t
                          });
                      },
                      paymentSourceType: p
                  })),
                (o = (0, r.jsx)(eN, {
                    onBack: () => ez(h),
                    primaryCTA: R.Z.CTAType.CONTINUE,
                    primaryText: q.intl.string(q.t.PDTjLC),
                    primarySubmitting: e2,
                    primaryDisabled: !e3.isValid || tn,
                    onPrimary: tj
                }));
            break;
        case N.h8.AWAITING_AUTHENTICATION:
            n = (0, r.jsx)(eS, {});
            break;
        default:
            throw Error('Unexpected step: '.concat(eU));
    }
    let tU = eA && tv.shouldRender,
        tG = (0, r.jsxs)(c.qBt, {
            className: Q.sequencer,
            staticClassName: Q.sequencerStatic,
            animatedNodeClassName: Q.sequencerAnimatedNode,
            fillParent: !0,
            overrideKey: tU ? 'combined_stripe_elements' : void 0,
            step: eU,
            steps: eF.steps,
            sideMargin: 20,
            children: [
                tU &&
                    (0, r.jsx)(T.hn, {
                        step: eU,
                        paymentElementSelectedType: ty,
                        originalPaymentType: eF.methodType,
                        elementsRef: tg,
                        stripePaymentElementProps: tv.stripePaymentElementProps,
                        stripeAddressElementProps: tv.stripeAddressElementProps
                    }),
                n
            ]
        }),
        tB = eU === N.h8.PAYMENT_TYPE && 0 === E.length ? null : o;
    return K
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  J &&
                      (0, r.jsx)(C.Z, {
                          className: X.paymentModalBreadcrumbs,
                          isEligibleForTrial: J
                      }),
                  (0, r.jsxs)(P.C3, {
                      children: [(0, r.jsx)(L.Z, { className: X.paymentModalError }), tG]
                  }),
                  (0, r.jsx)(P.O3, { children: tB })
              ]
          })
        : (0, r.jsx)(Z.Z, {
              steps: null != x ? x : eF.steps,
              currentStep: null != M ? M : eU,
              paymentError: m.paymentError,
              header: U,
              hideBreadcrumbs: H,
              body: tG,
              footer: tB
          });
}
function eR(e) {
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
            info: em,
            isValid: !1
        })),
        [p, h] = i.useState(() => ({
            info: eg,
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
