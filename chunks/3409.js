n.d(t, {
    fL: () => eA,
    vP: () => eN
}),
    n(47120),
    n(653041),
    n(26686),
    n(411104);
var r = n(200651),
    i = n(192379),
    o = n(734530),
    a = n(512722),
    s = n.n(a),
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
    v = n(493773),
    O = n(445239),
    I = n(870630),
    S = n(710845),
    T = n(563132),
    N = n(409813),
    A = n(51499),
    C = n(586585),
    R = n(614277),
    P = n(620824),
    w = n(737143),
    D = n(926841),
    L = n(35248),
    x = n(439021),
    M = n(698708),
    k = n(351402),
    j = n(975060),
    U = n(505649),
    G = n(853872),
    B = n(882712),
    F = n(358085),
    V = n(622999),
    Z = n(176919),
    H = n(185139),
    W = n(559725),
    Y = n(439041),
    K = n(850228),
    z = n(231338),
    q = n(388032),
    Q = n(327763),
    X = n(106194);
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
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function er(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let ei = new S.Z('AddPaymentStep.tsx'),
    eo = [N.h8.PAYMENT_TYPE],
    ea = [N.h8.PAYMENT_TYPE, N.h8.CREDIT_CARD_INFORMATION, N.h8.ADDRESS],
    es = [N.h8.PAYMENT_TYPE, N.h8.PAYPAL_INFORMATION, N.h8.ADDRESS],
    el = [N.h8.PAYMENT_TYPE, N.h8.VENMO_INFORMATION, N.h8.ADDRESS];
N.h8.PAYMENT_TYPE, N.h8.PAYMENT_REQUEST_INFORMATION, N.h8.ADDRESS;
let ec = [N.h8.PAYMENT_TYPE, N.h8.PRZELEWY24_INFORMATION, N.h8.ADDRESS],
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
    return (0, r.jsx)('div', {
        className: Q.body,
        children: (0, r.jsx)(p.ZP, $({}, e))
    });
}
function eg(e) {
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
function eE() {
    return (0, r.jsx)('div', {
        className: Q.body,
        children: (0, r.jsx)(h.Z, {})
    });
}
function eb() {
    return (0, r.jsx)('div', {
        className: Q.body,
        children: (0, r.jsx)(m.Z, {})
    });
}
function ey() {
    return (0, r.jsx)('div', {
        className: Q.body,
        children: (0, r.jsx)(K.Z, {})
    });
}
function ev() {
    let e = (0, l.e7)([k.Z], () => k.Z.isBusy),
        t = (0, l.e7)([j.Z], () => j.Z.stripePaymentMethod);
    return (0, r.jsx)(y.k, {
        className: Q.body,
        stripePaymentMethod: t,
        submitting: e
    });
}
function eO(e) {
    let { billingAddressInfo: t, onBillingAddressChange: n, paymentSourceType: i } = e,
        o = (0, l.e7)([j.Z], () => j.Z.error);
    return (0, r.jsx)('div', {
        className: Q.body,
        children: (0, r.jsx)(g.P, {
            billingAddressInfo: t,
            billingError: o,
            onBillingAddressChange: n,
            paymentSourceType: i
        })
    });
}
function eI() {
    return (0, r.jsx)(E.F, { className: Q.body });
}
function eS(e) {
    return () => (null != j.Z.error && (0, _.fw)(), e());
}
function eT(e) {
    let { onPrimary: t, onBack: n } = e,
        i = en(e, ['onPrimary', 'onBack']),
        o = t;
    null != t && (o = eS(t));
    let a = n;
    return (
        null != n && (a = eS(n)),
        (0, r.jsx)(
            C.Z,
            et($({}, i), {
                onPrimary: o,
                onBack: a
            })
        )
    );
}
function eN(e) {
    let t,
        n,
        a,
        u,
        { paymentModalArgs: p, initialStep: h, prependSteps: m, appendSteps: g, onReturn: E, onComplete: b, onStepChange: y, breadcrumpSteps: v, currentBreadcrumpStep: S, header: k, analyticsLocation: U, hideBreadcrumbs: B = !1, usePaymentModalStep: Z = !1, isEligibleForTrial: K = !1, allowDesktopRedirectPurchase: J = !1, toastContent: ee, overwriteSubscriptionPaymentSource: en = !1 } = e,
        er = {
            steps: [...m, ...ea, ...g],
            methodType: z.He.CARD
        },
        ep = {
            steps: [...m, ...eo, ...g],
            methodType: z.He.PAYMENT_REQUEST
        },
        eh = {
            steps: [...m, ...es, ...g],
            methodType: z.He.PAYPAL
        },
        eS = {
            steps: [...m, ...el, ...g],
            methodType: z.He.VENMO
        },
        eN = {
            steps: [...m, ...eo, ...g]
        },
        eA = {
            steps: [...m, ...ec, ...g],
            methodType: z.He.PRZELEWY24
        },
        eC = {
            steps: [...m, ...eu, ...g],
            methodType: z.He.EPS
        },
        eR = {
            steps: [...m, ...ed, ...g],
            methodType: z.He.IDEAL
        },
        eP = {
            steps: [...m, ...ef, ...g],
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
    let [eD, eL] = i.useState(h),
        [ex, eM] = i.useState(null),
        [ek, ej] = i.useState(ew(h)),
        { stripe: eU, contextMetadata: eG, activitySessionId: eB } = (0, T.JL)(),
        eF = (0, l.e7)([j.Z], () => j.Z.redirectedPaymentSourceId),
        eV = (0, l.e7)([Y.Z], () => Y.Z.cashAppPayComponent),
        eZ = {
            completeSteps: tr,
            setIsSubmittingCurrentStep: p.setIsSubmittingCurrentStep
        },
        eH = i.useRef(eZ);
    function eW(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        eM(null),
            eL(e),
            t &&
                y({
                    currentStep: eD,
                    toStep: e
                });
    }
    function eY(e) {
        (0, c.showToast)((0, c.createToast)(void 0 !== ee ? ee : q.NW.string(q.t['VJPg+v']), c.ToastType.SUCCESS, { position: c.ToastPosition.BOTTOM })), b(eD, e), eW(h, !1);
    }
    i.useEffect(() => {
        eH.current = eZ;
    }),
        i.useEffect(() => {
            let { completeSteps: e, setIsSubmittingCurrentStep: t } = eH.current;
            (async () => {
                if (null == eF) return;
                await (0, d.tZ)();
                let n = G.Z.getPaymentSource(eF);
                null != n && (e(n), t(!1));
            })();
        }, [eF]);
    let { setPaymentSourceId: eK, creditCardState: ez, setCreditCardState: eq, tokenState: eQ, setTokenState: eX, isSubmittingCurrentStep: eJ, billingAddressState: e$, setBillingAddressState: e0, setIsSubmittingCurrentStep: e1, hasRedirectURL: e2, setHasRedirectURL: e3, braintreeEmail: e4, braintreeNonce: e6, venmoUsername: e5, adyenPaymentData: e7, isAuthenticating: e8, epsBankState: e9, setEpsBankState: te, p24BankState: tt, setP24BankState: tn } = p;
    function tr(e) {
        eK(e.id), eY(e);
    }
    let ti = (0, w.q1)().enabled && J,
        to = (0, D.a)().enabled && J,
        ta = (0, P.b)().enabled,
        ts = ta && J,
        tl = (0, F.isDesktop)() ? [] : [...(ta ? ['applePay'] : []), 'googlePay'];
    to && !tl.includes('googlePay') && tl.push('googlePay'), ts && !tl.includes('applePay') && tl.push('applePay');
    let [tc, tu] = i.useState(!1),
        td = i.useRef(null),
        tf = () => {
            null != td.current && td.current.show();
        };
    switch (eD) {
        case N.h8.ATTEMPT_GOOGLE_PAY:
        case N.h8.ATTEMPT_APPLE_PAY:
        case N.h8.PAYMENT_TYPE:
            let t_ = (e, t) => {
                    switch (e) {
                        case z.He.CARD:
                            ti ? eW(N.h8.AWAITING_BROWSER_CHECKOUT) : (ej(er), eW(N.h8.CREDIT_CARD_INFORMATION));
                            break;
                        case z.He.PAYPAL:
                            ej(eh), eW(N.h8.PAYPAL_INFORMATION);
                            break;
                        case z.He.VENMO:
                            ej(eS), eW(N.h8.VENMO_INFORMATION);
                            break;
                        case z.He.PAYMENT_REQUEST:
                            to && 'googlePay' === t ? eW(N.h8.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY) : ts && 'applePay' === t ? eW(N.h8.AWAITING_BROWSER_CHECKOUT_APPLE_PAY) : (ej(ep), eW(N.h8.PAYMENT_REQUEST_INFORMATION));
                            break;
                        case z.He.PRZELEWY24:
                            ej(eA), eW(N.h8.PRZELEWY24_INFORMATION);
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
                                steps: [...m, ...e_, ...g],
                                methodType: e
                            }),
                                eW(N.h8.ADDRESS);
                    }
                    null != j.Z.error && (0, _.fw)();
                },
                tp = (e, t) => {
                    e0((e) => et($({}, e), { info: t })), ej(ep), tr(e);
                },
                th = () => {
                    ej(eN), eW(N.h8.PAYMENT_TYPE);
                },
                tm = async (e) => {
                    if (((0, _.Xt)(e), null == e)) return void th();
                    try {
                        let t = await (0, d.i6)(e, void 0, U),
                            { billingAddressInfo: n } = (0, V.az)(e);
                        tp(t, n);
                    } catch (e) {}
                };
            if (eD === N.h8.ATTEMPT_GOOGLE_PAY || eD === N.h8.ATTEMPT_APPLE_PAY) {
                let e = q.NW.string(eD === N.h8.ATTEMPT_APPLE_PAY ? q.t.czhXDg : q.t.Zj2xQ0),
                    i = q.NW.string(eD === N.h8.ATTEMPT_APPLE_PAY ? q.t.WoXvJC : q.t.wnVVr6);
                (t = (0, r.jsx)(x.t, {
                    onChooseType: t_,
                    paymentRequestWallet: eD === N.h8.ATTEMPT_APPLE_PAY ? 'applePay' : 'googlePay',
                    onStripePaymentMethodReceived: tm,
                    onPaymentRequestFailure: () => {
                        t_(z.He.CARD), eM(e);
                    },
                    onValidPaymentRequest: () => tu(!0),
                    paymentRequestRef: td
                })),
                    (n = (0, r.jsx)(eT, {
                        onBack: () => eW(N.h8.PAYMENT_TYPE),
                        primaryCTA: C.Z.CTAType.CONTINUE,
                        primaryText: i,
                        onPrimary: () => tf(),
                        primaryDisabled: !tc
                    }));
                break;
            }
            (t = (0, r.jsx)(em, {
                onChooseType: t_,
                onStripePaymentMethodReceived: tm,
                paymentRequestWallets: tl,
                isEligibleForTrial: K,
                paymentRequestPaymentContext: {
                    contextMetadata: eG,
                    activitySessionId: eB
                }
            })),
                (n = (0, r.jsx)(eT, { onBack: E }));
            break;
        case N.h8.CREDIT_CARD_INFORMATION:
            let tg = async (e) => {
                e1(!0);
                try {
                    let t = await (0, d.qv)(eU, e);
                    eX({ token: t }), eW(N.h8.ADDRESS);
                } catch (e) {
                    var t;
                    ei.error(null != (t = e.message) ? t : JSON.stringify(e));
                } finally {
                    e1(!1);
                }
            };
            (t = (0, r.jsx)(eg, {
                infoNotice: ex,
                onCardInfoChange: (e, t) => {
                    eq({
                        info: e,
                        isValid: t
                    }),
                        e0((t) => et($({}, t), { info: et($({}, t.info), { name: e.name }) }));
                }
            })),
                (n = (0, r.jsx)(o.ElementsConsumer, {
                    children: (e) => {
                        let { elements: t } = e;
                        return (0, r.jsx)(eT, {
                            onBack: () => eW(N.h8.PAYMENT_TYPE),
                            primaryCTA: C.Z.CTAType.CONTINUE,
                            primaryType: 'submit',
                            primaryText: q.NW.string(q.t.PDTjLC),
                            primarySubmitting: eJ,
                            primaryDisabled: !ez.isValid,
                            onPrimary: () => tg(t)
                        });
                    }
                }));
            break;
        case N.h8.AWAITING_BROWSER_CHECKOUT:
        case N.h8.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
        case N.h8.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
            (t = (0, r.jsx)('div', {
                className: Q.body,
                children: (0, r.jsx)(L.M, {
                    step: eD,
                    onPurchaseComplete: () => b(eD),
                    onHandoffFailure: () => {
                        ej(er), eW(N.h8.CREDIT_CARD_INFORMATION);
                    }
                })
            })),
                (n = (0, r.jsx)(L.a, {
                    onPrimaryClick: () => {
                        ej(er), eW(N.h8.CREDIT_CARD_INFORMATION);
                    },
                    onBackClick: () => {
                        ej(eN), eW(N.h8.PAYMENT_TYPE);
                    }
                }));
            break;
        case N.h8.EPS_INFORMATION:
            (t = (0, r.jsx)(I.Z, {
                type: z.He.EPS,
                onAccountHolderNameChange: (e) =>
                    e0({
                        info: et($({}, e$.info), { name: e }),
                        isValid: e$.isValid
                    }),
                onEPSBankChange: (e) => te(e),
                epsBankValue: e9,
                billingAddressInfo: e$.info
            })),
                (n = (0, r.jsx)(eT, {
                    onBack: () => eW(N.h8.PAYMENT_TYPE),
                    primaryCTA: C.Z.CTAType.CONTINUE,
                    primaryText: q.NW.string(q.t.PDTjLC),
                    primaryDisabled: void 0 === e9 || '' === e9 || '' === e$.info.name,
                    onPrimary: () => eW(N.h8.ADDRESS)
                }));
            break;
        case N.h8.IDEAL_INFORMATION:
            (t = (0, r.jsx)(O.Z, {
                type: z.He.IDEAL,
                onAccountHolderNameChange: (e) =>
                    e0({
                        info: et($({}, e$.info), { name: e }),
                        isValid: e$.isValid
                    }),
                billingAddressInfo: e$.info
            })),
                (n = (0, r.jsx)(eT, {
                    onBack: () => eW(N.h8.PAYMENT_TYPE),
                    primaryCTA: C.Z.CTAType.CONTINUE,
                    primaryText: q.NW.string(q.t.PDTjLC),
                    primaryDisabled: '' === e$.info.name,
                    onPrimary: () => eW(N.h8.ADDRESS)
                }));
            break;
        case N.h8.PRZELEWY24_INFORMATION:
            (t = (0, r.jsx)(I.Z, {
                type: z.He.PRZELEWY24,
                onNameChange: (e) =>
                    e0({
                        info: et($({}, e$.info), { name: e }),
                        isValid: e$.isValid
                    }),
                onEmailChange: (e) =>
                    e0({
                        info: et($({}, e$.info), { email: e }),
                        isValid: e$.isValid
                    }),
                onP24BankChange: (e) => {
                    tn(e);
                },
                p24BankValue: tt,
                billingAddressInfo: e$.info
            })),
                (n = (0, r.jsx)(eT, {
                    onBack: () => eW(N.h8.PAYMENT_TYPE),
                    primaryCTA: C.Z.CTAType.CONTINUE,
                    primaryText: q.NW.string(q.t.PDTjLC),
                    primaryDisabled: void 0 === e$.info.name || '' === e$.info.name || void 0 === e$.info.email || '' === e$.info.email || void 0 === tt || '' === tt,
                    onPrimary: () => eW(N.h8.ADDRESS)
                }));
            break;
        case N.h8.PAYPAL_INFORMATION:
            let tE = 0 !== e4.length && null != e6;
            (t = (0, r.jsx)(eE, {})),
                (n = (0, r.jsx)(eT, {
                    onBack: () => eW(N.h8.PAYMENT_TYPE),
                    primaryCTA: C.Z.CTAType.CONTINUE,
                    primaryText: tE ? q.NW.string(q.t.PDTjLC) : q.NW.string(q.t.Djzd7O),
                    onPrimary: () => (tE ? eW(N.h8.ADDRESS) : (0, f.i0)())
                }));
            break;
        case N.h8.VENMO_INFORMATION:
            let tb = 0 !== e5.length && null != e6;
            (t = (0, r.jsx)(eb, {})),
                (n = (0, r.jsx)(eT, {
                    onBack: () => eW(N.h8.PAYMENT_TYPE),
                    primaryCTA: C.Z.CTAType.CONTINUE,
                    primaryText: tb ? q.NW.string(q.t.PDTjLC) : q.NW.string(q.t['4KoTLC']),
                    onPrimary: () => (tb ? eW(N.h8.ADDRESS) : (0, f.og)())
                }));
            break;
        case N.h8.PAYMENT_REQUEST_INFORMATION:
            (t = (0, r.jsx)(ev, {})), (n = (0, r.jsx)(eT, { onBack: () => eW(N.h8.PAYMENT_TYPE) }));
            break;
        case N.h8.CASH_APP_INFORMATION:
            let ty = null != e7,
                tv = null != eV;
            (t = (0, r.jsx)(ey, {})),
                (n = (0, r.jsx)(eT, {
                    onBack: () => eW(N.h8.PAYMENT_TYPE),
                    primaryCTA: C.Z.CTAType.CONTINUE,
                    primaryText: ty ? q.NW.string(q.t.PDTjLC) : q.NW.string(q.t['9ALP8/']),
                    onPrimary: () => (ty ? eW(N.h8.ADDRESS) : (0, W.cp)()),
                    primaryDisabled: !tv
                }));
            break;
        case N.h8.ADDRESS:
            let tO = async () => {
                e1(!0);
                let e = ek.methodType;
                switch (e) {
                    case z.He.CARD:
                        try {
                            let e = await (0, d.f0)(eU, eQ.token, e$.info, U);
                            tr(e);
                        } catch (e) {}
                        break;
                    case z.He.VENMO:
                    case z.He.PAYPAL:
                        try {
                            s()(null != e6, 'Missing braintreeNonce');
                            let e = await (0, d.lP)(e6, e$.info, U);
                            tr(e);
                        } catch (e) {}
                        break;
                    case z.He.EPS:
                        try {
                            let e = await (0, d.YQ)(eU, e9, e$.info, U);
                            tr(e);
                        } catch (e) {
                            ei.warn(e);
                        }
                        break;
                    case z.He.IDEAL:
                        try {
                            let e = await (0, d.aN)(eU, e$.info, U);
                            tr(e);
                        } catch (e) {
                            ei.warn(e);
                        }
                        break;
                    case z.He.PRZELEWY24:
                        try {
                            if (void 0 === tt) throw (0, d.SQ)('Bank required for Przelewy24');
                            let e = await (0, d.pF)(eU, { p24Bank: tt }, e$.info, U);
                            tr(e);
                        } catch (e) {}
                        break;
                    case z.He.PAYSAFE_CARD:
                    case z.He.GRABPAY_MY:
                        try {
                            let t = await (0, d.sF)(e$.info, e, U);
                            tr(t);
                        } catch (e) {}
                        break;
                    case z.He.GCASH:
                    case z.He.MOMO_WALLET:
                    case z.He.KAKAOPAY:
                    case z.He.GOPAY_WALLET:
                        try {
                            let { redirectConfirmation: t } = await (0, d.Dk)(e$.info, e, U);
                            e3(t);
                        } catch (e) {}
                        break;
                    case z.He.GIROPAY:
                    case z.He.BANCONTACT:
                        try {
                            let t = await (0, d.GV)(eU, e$.info, e, U);
                            tr(t);
                        } catch (e) {}
                        break;
                    case z.He.CASH_APP:
                        try {
                            s()(null != e7, 'Missing adyenPaymentData');
                            let { paymentSource: t } = await (0, d.Dk)(e$.info, e, U, e7, en);
                            s()(null != t, 'Cash App Pay Payment Source missing'), tr(t);
                        } catch (e) {}
                        break;
                    default:
                        throw Error('unknown step not handled');
                }
                e2 || e1(!1);
            };
            switch (ek.methodType) {
                case z.He.CARD:
                    (u = N.h8.CREDIT_CARD_INFORMATION), (a = z.He.CARD);
                    break;
                case z.He.PAYPAL:
                    (u = N.h8.PAYPAL_INFORMATION), (a = z.He.PAYPAL);
                    break;
                case z.He.VENMO:
                    (u = N.h8.VENMO_INFORMATION), (a = z.He.VENMO);
                    break;
                case z.He.GIROPAY:
                    (u = N.h8.PAYMENT_TYPE), (a = z.He.GIROPAY);
                    break;
                case z.He.PAYSAFE_CARD:
                case z.He.GCASH:
                case z.He.GRABPAY_MY:
                case z.He.MOMO_WALLET:
                case z.He.KAKAOPAY:
                case z.He.GOPAY_WALLET:
                case z.He.BANCONTACT:
                    (u = N.h8.PAYMENT_TYPE), (a = ek.methodType);
                    break;
                case z.He.EPS:
                    (u = N.h8.EPS_INFORMATION), (a = z.He.EPS);
                    break;
                case z.He.IDEAL:
                    (u = N.h8.IDEAL_INFORMATION), (a = z.He.IDEAL);
                    break;
                case z.He.PRZELEWY24:
                    (u = N.h8.PRZELEWY24_INFORMATION), (a = z.He.PRZELEWY24);
                    break;
                case z.He.CASH_APP:
                    (u = N.h8.CASH_APP_INFORMATION), (a = z.He.CASH_APP);
                    break;
                default:
                    (u = N.h8.PAYMENT_TYPE), (a = z.He.CARD);
            }
            (t = (0, r.jsx)(eO, {
                billingAddressInfo: e$.info,
                onBillingAddressChange: (e, t) => {
                    e0({
                        info: $({}, e$.info, e),
                        isValid: t
                    });
                },
                paymentSourceType: a
            })),
                (n = (0, r.jsx)(eT, {
                    onBack: () => eW(u),
                    primaryCTA: C.Z.CTAType.CONTINUE,
                    primaryText: q.NW.string(q.t.PDTjLC),
                    primarySubmitting: eJ,
                    primaryDisabled: !e$.isValid || e8,
                    onPrimary: tO
                }));
            break;
        case N.h8.AWAITING_AUTHENTICATION:
            t = (0, r.jsx)(eI, {});
            break;
        default:
            throw Error('Unexpected step: '.concat(eD));
    }
    let tI = (0, r.jsx)(c.qBt, {
            className: X.sequencer,
            staticClassName: X.sequencerStatic,
            animatedNodeClassName: X.sequencerAnimatedNode,
            fillParent: !0,
            step: eD,
            steps: ek.steps,
            sideMargin: 20,
            children: t
        }),
        tS = eD === N.h8.PAYMENT_TYPE && 0 === m.length ? null : n;
    return Z
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  K &&
                      (0, r.jsx)(A.Z, {
                          className: Q.paymentModalBreadcrumbs,
                          isEligibleForTrial: K
                      }),
                  (0, r.jsxs)(R.C3, {
                      children: [(0, r.jsx)(M.Z, { className: Q.paymentModalError }), tI]
                  }),
                  (0, r.jsx)(R.O3, { children: tS })
              ]
          })
        : (0, r.jsx)(H.Z, {
              steps: null != v ? v : ek.steps,
              currentStep: null != S ? S : eD,
              paymentError: p.paymentError,
              header: k,
              hideBreadcrumbs: B,
              body: tI,
              footer: tS
          });
}
function eA(e) {
    let {
        defaultPaymentSourceId: t,
        paymentSources: n,
        hasFetchedPaymentSources: r
    } = (0, l.cj)([G.Z], () => ({
        defaultPaymentSourceId: void 0 !== e ? e : G.Z.defaultPaymentSourceId,
        paymentSources: G.Z.paymentSources,
        hasFetchedPaymentSources: G.Z.hasFetchedPaymentSources
    }));
    (0, v.ZP)(() => {
        null == Y.Z.cashAppPayComponent && (0, W.eI)(), (0, f.eI)(), r || (0, d.tZ)();
    });
    let [o, a] = i.useState(t);
    null != t && null == o && a(t);
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
        [y, O] = i.useState(() => ({ token: null })),
        [I, S, T, N, A] = (0, l.Wu)([j.Z], () => [j.Z.braintreeEmail, j.Z.braintreeNonce, j.Z.error, j.Z.venmoUsername, j.Z.adyenPaymentData]),
        [C, R] = (0, l.Wu)([U.Z], () => [U.Z.error, U.Z.isAwaitingAuthentication]);
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
        [x, M] = i.useState(null),
        k = i.useRef(null),
        F = (0, l.e7)([U.Z], () => U.Z.isAwaitingAuthentication),
        [V, H] = (0, l.Wu)([B.Z], () => [B.Z.purchaseTokenAuthState, B.Z.purchaseTokenHash]);
    return (
        i.useEffect(() => {
            null != x && null != k.current && k.current.scrollIntoView({ behavior: 'smooth' });
        }, [x]),
        {
            paymentSources: n,
            paymentSourceId: o,
            hasFetchedPaymentSources: r,
            setPaymentSourceId: a,
            creditCardState: s,
            setCreditCardState: c,
            tokenState: y,
            setTokenState: O,
            billingAddressState: p,
            setBillingAddressState: h,
            isSubmittingCurrentStep: P,
            setIsSubmittingCurrentStep: w,
            hasRedirectURL: D,
            setHasRedirectURL: L,
            braintreeEmail: I,
            braintreeNonce: S,
            venmoUsername: N,
            adyenPaymentData: A,
            paymentError: null != C ? C : T,
            paymentAuthenticationState: R ? Z.wr.PENDING : null != C ? Z.wr.ERROR : Z.wr.NONE,
            purchaseError: x,
            setPurchaseError: M,
            purchaseErrorBlockRef: k,
            isAuthenticating: F,
            purchaseTokenAuthState: V,
            purchaseTokenHash: H,
            epsBankState: E,
            setEpsBankState: b,
            p24BankState: m,
            setP24BankState: g
        }
    );
}
