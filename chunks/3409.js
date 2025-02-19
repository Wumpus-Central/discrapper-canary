n.d(t, {
    fL: () => eN,
    vP: () => eT
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
    p = n(159351),
    _ = n(801937),
    h = n(282164),
    m = n(915271),
    g = n(228666),
    E = n(723484),
    v = n(122192),
    b = n(296214),
    y = n(493773),
    O = n(870630),
    S = n(710845),
    I = n(563132),
    T = n(409813),
    N = n(51499),
    A = n(586585),
    C = n(614277),
    R = n(620824),
    P = n(737143),
    w = n(926841),
    D = n(35248),
    x = n(439021),
    L = n(698708),
    M = n(351402),
    k = n(975060),
    j = n(505649),
    U = n(853872),
    G = n(882712),
    B = n(358085),
    Z = n(622999),
    F = n(176919),
    V = n(185139),
    H = n(559725),
    W = n(439041),
    Y = n(850228),
    K = n(231338),
    z = n(388032),
    q = n(249205),
    Q = n(202941);
function X(e, t, n) {
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
function J(e) {
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
                X(e, t, n[t]);
            });
    }
    return e;
}
function $(e, t) {
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
function ee(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : $(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function et(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = en(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function en(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let er = new S.Z('AddPaymentStep.tsx'),
    ei = [T.h8.PAYMENT_TYPE],
    eo = [T.h8.PAYMENT_TYPE, T.h8.CREDIT_CARD_INFORMATION, T.h8.ADDRESS],
    ea = [T.h8.PAYMENT_TYPE, T.h8.PAYPAL_INFORMATION, T.h8.ADDRESS],
    es = [T.h8.PAYMENT_TYPE, T.h8.VENMO_INFORMATION, T.h8.ADDRESS];
T.h8.PAYMENT_TYPE, T.h8.PAYMENT_REQUEST_INFORMATION, T.h8.ADDRESS;
let el = [T.h8.PAYMENT_TYPE, T.h8.PRZELEWY24_INFORMATION, T.h8.ADDRESS],
    ec = [T.h8.PAYMENT_TYPE, T.h8.EPS_INFORMATION, T.h8.ADDRESS],
    eu = [T.h8.PAYMENT_TYPE, T.h8.IDEAL_INFORMATION, T.h8.ADDRESS],
    ed = [T.h8.PAYMENT_TYPE, T.h8.CASH_APP_INFORMATION, T.h8.ADDRESS],
    ef = [T.h8.PAYMENT_TYPE, T.h8.ADDRESS],
    ep = {
        name: '',
        cardNumber: '',
        expirationDate: '',
        cvc: ''
    },
    e_ = {
        email: '',
        name: '',
        country: '',
        line1: '',
        line2: '',
        city: '',
        postalCode: '',
        state: ''
    };
function eh(e) {
    return (0, r.jsx)('div', {
        className: q.body,
        children: (0, r.jsx)(_.ZP, J({}, e))
    });
}
function em(e) {
    let { onCardInfoChange: t, infoNotice: n } = e,
        i = (0, l.e7)([k.Z], () => k.Z.error);
    return (0, r.jsxs)('div', {
        className: q.body,
        children: [
            null != n &&
                (0, r.jsx)(c.kzN, {
                    className: q.infoNotice,
                    backgroundColor: c.mTc.BACKGROUND_TERTIARY,
                    children: n
                }),
            (0, r.jsx)(v.j, {
                billingError: i,
                onCardInfoChange: t
            })
        ]
    });
}
function eg() {
    return (0, r.jsx)('div', {
        className: q.body,
        children: (0, r.jsx)(h.Z, {})
    });
}
function eE() {
    return (0, r.jsx)('div', {
        className: q.body,
        children: (0, r.jsx)(m.Z, {})
    });
}
function ev() {
    return (0, r.jsx)('div', {
        className: q.body,
        children: (0, r.jsx)(Y.Z, {})
    });
}
function eb() {
    let e = (0, l.e7)([M.Z], () => M.Z.isBusy),
        t = (0, l.e7)([k.Z], () => k.Z.stripePaymentMethod);
    return (0, r.jsx)(b.k, {
        className: q.body,
        stripePaymentMethod: t,
        submitting: e
    });
}
function ey(e) {
    let { billingAddressInfo: t, onBillingAddressChange: n, paymentSourceType: i } = e,
        o = (0, l.e7)([k.Z], () => k.Z.error);
    return (0, r.jsx)('div', {
        className: q.body,
        children: (0, r.jsx)(g.P, {
            billingAddressInfo: t,
            billingError: o,
            onBillingAddressChange: n,
            paymentSourceType: i
        })
    });
}
function eO() {
    return (0, r.jsx)(E.F, { className: q.body });
}
function eS(e) {
    return () => (null != k.Z.error && (0, p.fw)(), e());
}
function eI(e) {
    let { onPrimary: t, onBack: n } = e,
        i = et(e, ['onPrimary', 'onBack']),
        o = t;
    null != t && (o = eS(t));
    let a = n;
    return (
        null != n && (a = eS(n)),
        (0, r.jsx)(
            A.Z,
            ee(J({}, i), {
                onPrimary: o,
                onBack: a
            })
        )
    );
}
function eT(e) {
    let t,
        n,
        a,
        u,
        { paymentModalArgs: _, initialStep: h, prependSteps: m, appendSteps: g, onReturn: E, onComplete: v, onStepChange: b, breadcrumpSteps: y, currentBreadcrumpStep: S, header: M, analyticsLocation: j, hideBreadcrumbs: G = !1, usePaymentModalStep: F = !1, isEligibleForTrial: Y = !1, allowDesktopRedirectPurchase: X = !1, toastContent: $, overwriteSubscriptionPaymentSource: et = !1 } = e,
        en = {
            steps: [...m, ...eo, ...g],
            methodType: K.He.CARD
        },
        ep = {
            steps: [...m, ...ei, ...g],
            methodType: K.He.PAYMENT_REQUEST
        },
        e_ = {
            steps: [...m, ...ea, ...g],
            methodType: K.He.PAYPAL
        },
        eS = {
            steps: [...m, ...es, ...g],
            methodType: K.He.VENMO
        },
        eT = {
            steps: [...m, ...ei, ...g]
        },
        eN = {
            steps: [...m, ...el, ...g],
            methodType: K.He.PRZELEWY24
        },
        eA = {
            steps: [...m, ...ec, ...g],
            methodType: K.He.EPS
        },
        eC = {
            steps: [...m, ...eu, ...g],
            methodType: K.He.IDEAL
        },
        eR = {
            steps: [...m, ...ed, ...g],
            methodType: K.He.CASH_APP
        };
    function eP(e) {
        switch (e) {
            case T.h8.CREDIT_CARD_INFORMATION:
                return en;
            case T.h8.CASH_APP_INFORMATION:
                return eR;
            default:
                return { steps: [T.h8.ADD_PAYMENT_STEPS] };
        }
    }
    let [ew, eD] = i.useState(h),
        [ex, eL] = i.useState(null),
        [eM, ek] = i.useState(eP(h)),
        { stripe: ej, contextMetadata: eU, activitySessionId: eG } = (0, I.JL)(),
        eB = (0, l.e7)([k.Z], () => k.Z.redirectedPaymentSourceId),
        eZ = (0, l.e7)([W.Z], () => W.Z.cashAppPayComponent),
        eF = {
            completeSteps: ti,
            setIsSubmittingCurrentStep: _.setIsSubmittingCurrentStep
        },
        eV = i.useRef(eF);
    function eH(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        eL(null),
            eD(e),
            t &&
                b({
                    currentStep: ew,
                    toStep: e
                });
    }
    function eW(e) {
        (0, c.showToast)((0, c.createToast)(void 0 !== $ ? $ : z.NW.string(z.t['VJPg+v']), c.ToastType.SUCCESS, { position: c.ToastPosition.BOTTOM })), v(ew, e), eH(h, !1);
    }
    i.useEffect(() => {
        eV.current = eF;
    }),
        i.useEffect(() => {
            let { completeSteps: e, setIsSubmittingCurrentStep: t } = eV.current;
            (async () => {
                if (null == eB) return;
                await (0, d.tZ)();
                let n = U.Z.getPaymentSource(eB);
                null != n && (e(n), t(!1));
            })();
        }, [eB]);
    let { setPaymentSourceId: eY, creditCardState: eK, setCreditCardState: ez, tokenState: eq, setTokenState: eQ, isSubmittingCurrentStep: eX, billingAddressState: eJ, setBillingAddressState: e$, setIsSubmittingCurrentStep: e0, hasRedirectURL: e1, setHasRedirectURL: e2, braintreeEmail: e3, braintreeNonce: e4, venmoUsername: e6, adyenPaymentData: e5, isAuthenticating: e7, epsBankState: e8, setEpsBankState: e9, idealBankState: te, setIdealBankState: tt, p24BankState: tn, setP24BankState: tr } = _;
    function ti(e) {
        eY(e.id), eW(e);
    }
    let to = (0, P.q1)().enabled && X,
        ta = (0, w.a)().enabled && X,
        ts = (0, R.b)().enabled,
        tl = ts && X,
        tc = (0, B.isDesktop)() ? [] : [...(ts ? ['applePay'] : []), 'googlePay'];
    ta && !tc.includes('googlePay') && tc.push('googlePay'), tl && !tc.includes('applePay') && tc.push('applePay');
    let [tu, td] = i.useState(!1),
        tf = i.useRef(null),
        tp = () => {
            null != tf.current && tf.current.show();
        };
    switch (ew) {
        case T.h8.ATTEMPT_GOOGLE_PAY:
        case T.h8.ATTEMPT_APPLE_PAY:
        case T.h8.PAYMENT_TYPE:
            let t_ = (e, t) => {
                    switch (e) {
                        case K.He.CARD:
                            to ? eH(T.h8.AWAITING_BROWSER_CHECKOUT) : (ek(en), eH(T.h8.CREDIT_CARD_INFORMATION));
                            break;
                        case K.He.PAYPAL:
                            ek(e_), eH(T.h8.PAYPAL_INFORMATION);
                            break;
                        case K.He.VENMO:
                            ek(eS), eH(T.h8.VENMO_INFORMATION);
                            break;
                        case K.He.PAYMENT_REQUEST:
                            ta && 'googlePay' === t ? eH(T.h8.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY) : tl && 'applePay' === t ? eH(T.h8.AWAITING_BROWSER_CHECKOUT_APPLE_PAY) : (ek(ep), eH(T.h8.PAYMENT_REQUEST_INFORMATION));
                            break;
                        case K.He.PRZELEWY24:
                            ek(eN), eH(T.h8.PRZELEWY24_INFORMATION);
                            break;
                        case K.He.EPS:
                            ek(eA), eH(T.h8.EPS_INFORMATION);
                            break;
                        case K.He.IDEAL:
                            ek(eC), eH(T.h8.IDEAL_INFORMATION);
                            break;
                        case K.He.CASH_APP:
                            ek(eR), eH(T.h8.CASH_APP_INFORMATION);
                            break;
                        case K.He.GIROPAY:
                        case K.He.PAYSAFE_CARD:
                        case K.He.GCASH:
                        case K.He.GRABPAY_MY:
                        case K.He.MOMO_WALLET:
                        case K.He.KAKAOPAY:
                        case K.He.GOPAY_WALLET:
                        case K.He.BANCONTACT:
                            ek({
                                steps: [...m, ...ef, ...g],
                                methodType: e
                            }),
                                eH(T.h8.ADDRESS);
                    }
                    null != k.Z.error && (0, p.fw)();
                },
                th = (e, t) => {
                    e$((e) => ee(J({}, e), { info: t })), ek(ep), ti(e);
                },
                tm = () => {
                    ek(eT), eH(T.h8.PAYMENT_TYPE);
                },
                tg = async (e) => {
                    if (((0, p.Xt)(e), null == e)) {
                        tm();
                        return;
                    }
                    try {
                        let t = await (0, d.i6)(e, void 0, j),
                            { billingAddressInfo: n } = (0, Z.az)(e);
                        th(t, n);
                    } catch (e) {}
                };
            if (ew === T.h8.ATTEMPT_GOOGLE_PAY || ew === T.h8.ATTEMPT_APPLE_PAY) {
                let e = z.NW.string(ew === T.h8.ATTEMPT_APPLE_PAY ? z.t.czhXDg : z.t.Zj2xQ0),
                    i = z.NW.string(ew === T.h8.ATTEMPT_APPLE_PAY ? z.t.WoXvJC : z.t.wnVVr6);
                (t = (0, r.jsx)(x.t, {
                    onChooseType: t_,
                    paymentRequestWallet: ew === T.h8.ATTEMPT_APPLE_PAY ? 'applePay' : 'googlePay',
                    onStripePaymentMethodReceived: tg,
                    onPaymentRequestFailure: () => {
                        t_(K.He.CARD), eL(e);
                    },
                    onValidPaymentRequest: () => td(!0),
                    paymentRequestRef: tf
                })),
                    (n = (0, r.jsx)(eI, {
                        onBack: () => eH(T.h8.PAYMENT_TYPE),
                        primaryCTA: A.Z.CTAType.CONTINUE,
                        primaryText: i,
                        onPrimary: () => tp(),
                        primaryDisabled: !tu
                    }));
                break;
            }
            (t = (0, r.jsx)(eh, {
                onChooseType: t_,
                onStripePaymentMethodReceived: tg,
                paymentRequestWallets: tc,
                isEligibleForTrial: Y,
                paymentRequestPaymentContext: {
                    contextMetadata: eU,
                    activitySessionId: eG
                }
            })),
                (n = (0, r.jsx)(eI, { onBack: E }));
            break;
        case T.h8.CREDIT_CARD_INFORMATION:
            let tE = async (e) => {
                e0(!0);
                try {
                    let t = await (0, d.qv)(ej, e);
                    eQ({ token: t }), eH(T.h8.ADDRESS);
                } catch (e) {
                    var t;
                    er.error(null !== (t = e.message) && void 0 !== t ? t : JSON.stringify(e));
                } finally {
                    e0(!1);
                }
            };
            (t = (0, r.jsx)(em, {
                infoNotice: ex,
                onCardInfoChange: (e, t) => {
                    ez({
                        info: e,
                        isValid: t
                    }),
                        e$((t) => ee(J({}, t), { info: ee(J({}, t.info), { name: e.name }) }));
                }
            })),
                (n = (0, r.jsx)(o.ElementsConsumer, {
                    children: (e) => {
                        let { elements: t } = e;
                        return (0, r.jsx)(eI, {
                            onBack: () => eH(T.h8.PAYMENT_TYPE),
                            primaryCTA: A.Z.CTAType.CONTINUE,
                            primaryType: 'submit',
                            primaryText: z.NW.string(z.t.PDTjLC),
                            primarySubmitting: eX,
                            primaryDisabled: !eK.isValid,
                            onPrimary: () => tE(t)
                        });
                    }
                }));
            break;
        case T.h8.AWAITING_BROWSER_CHECKOUT:
        case T.h8.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
        case T.h8.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
            (t = (0, r.jsx)('div', {
                className: q.body,
                children: (0, r.jsx)(D.M, {
                    step: ew,
                    onPurchaseComplete: () => v(ew),
                    onHandoffFailure: () => {
                        ek(en), eH(T.h8.CREDIT_CARD_INFORMATION);
                    }
                })
            })),
                (n = (0, r.jsx)(D.a, {
                    onPrimaryClick: () => {
                        ek(en), eH(T.h8.CREDIT_CARD_INFORMATION);
                    },
                    onBackClick: () => {
                        ek(eT), eH(T.h8.PAYMENT_TYPE);
                    }
                }));
            break;
        case T.h8.EPS_INFORMATION:
            (t = (0, r.jsx)(O.Z, {
                type: K.He.EPS,
                onAccountHolderNameChange: (e) =>
                    e$({
                        info: ee(J({}, eJ.info), { name: e }),
                        isValid: eJ.isValid
                    }),
                onEPSBankChange: (e) => e9(e),
                epsBankValue: e8,
                billingAddressInfo: eJ.info
            })),
                (n = (0, r.jsx)(eI, {
                    onBack: () => eH(T.h8.PAYMENT_TYPE),
                    primaryCTA: A.Z.CTAType.CONTINUE,
                    primaryText: z.NW.string(z.t.PDTjLC),
                    primaryDisabled: void 0 === e8 || '' === e8 || '' === eJ.info.name,
                    onPrimary: () => eH(T.h8.ADDRESS)
                }));
            break;
        case T.h8.IDEAL_INFORMATION:
            (t = (0, r.jsx)(O.Z, {
                type: K.He.IDEAL,
                onAccountHolderNameChange: (e) =>
                    e$({
                        info: ee(J({}, eJ.info), { name: e }),
                        isValid: eJ.isValid
                    }),
                onIdealBankChange: (e) => tt(e),
                idealBankValue: te,
                billingAddressInfo: eJ.info
            })),
                (n = (0, r.jsx)(eI, {
                    onBack: () => eH(T.h8.PAYMENT_TYPE),
                    primaryCTA: A.Z.CTAType.CONTINUE,
                    primaryText: z.NW.string(z.t.PDTjLC),
                    primaryDisabled: void 0 === te || '' === te || '' === eJ.info.name,
                    onPrimary: () => eH(T.h8.ADDRESS)
                }));
            break;
        case T.h8.PRZELEWY24_INFORMATION:
            (t = (0, r.jsx)(O.Z, {
                type: K.He.PRZELEWY24,
                onNameChange: (e) =>
                    e$({
                        info: ee(J({}, eJ.info), { name: e }),
                        isValid: eJ.isValid
                    }),
                onEmailChange: (e) =>
                    e$({
                        info: ee(J({}, eJ.info), { email: e }),
                        isValid: eJ.isValid
                    }),
                onP24BankChange: (e) => {
                    tr(e);
                },
                p24BankValue: tn,
                billingAddressInfo: eJ.info
            })),
                (n = (0, r.jsx)(eI, {
                    onBack: () => eH(T.h8.PAYMENT_TYPE),
                    primaryCTA: A.Z.CTAType.CONTINUE,
                    primaryText: z.NW.string(z.t.PDTjLC),
                    primaryDisabled: void 0 === eJ.info.name || '' === eJ.info.name || void 0 === eJ.info.email || '' === eJ.info.email || void 0 === tn || '' === tn,
                    onPrimary: () => eH(T.h8.ADDRESS)
                }));
            break;
        case T.h8.PAYPAL_INFORMATION:
            let tv = 0 !== e3.length && null != e4;
            (t = (0, r.jsx)(eg, {})),
                (n = (0, r.jsx)(eI, {
                    onBack: () => eH(T.h8.PAYMENT_TYPE),
                    primaryCTA: A.Z.CTAType.CONTINUE,
                    primaryText: tv ? z.NW.string(z.t.PDTjLC) : z.NW.string(z.t.Djzd7O),
                    onPrimary: () => (tv ? eH(T.h8.ADDRESS) : (0, f.i0)())
                }));
            break;
        case T.h8.VENMO_INFORMATION:
            let tb = 0 !== e6.length && null != e4;
            (t = (0, r.jsx)(eE, {})),
                (n = (0, r.jsx)(eI, {
                    onBack: () => eH(T.h8.PAYMENT_TYPE),
                    primaryCTA: A.Z.CTAType.CONTINUE,
                    primaryText: tb ? z.NW.string(z.t.PDTjLC) : z.NW.string(z.t['4KoTLC']),
                    onPrimary: () => (tb ? eH(T.h8.ADDRESS) : (0, f.og)())
                }));
            break;
        case T.h8.PAYMENT_REQUEST_INFORMATION:
            (t = (0, r.jsx)(eb, {})), (n = (0, r.jsx)(eI, { onBack: () => eH(T.h8.PAYMENT_TYPE) }));
            break;
        case T.h8.CASH_APP_INFORMATION:
            let ty = null != e5,
                tO = null != eZ;
            (t = (0, r.jsx)(ev, {})),
                (n = (0, r.jsx)(eI, {
                    onBack: () => eH(T.h8.PAYMENT_TYPE),
                    primaryCTA: A.Z.CTAType.CONTINUE,
                    primaryText: ty ? z.NW.string(z.t.PDTjLC) : z.NW.string(z.t['9ALP8/']),
                    onPrimary: () => (ty ? eH(T.h8.ADDRESS) : (0, H.cp)()),
                    primaryDisabled: !tO
                }));
            break;
        case T.h8.ADDRESS:
            let tS = async () => {
                e0(!0);
                let e = eM.methodType;
                switch (e) {
                    case K.He.CARD:
                        try {
                            let e = await (0, d.f0)(ej, eq.token, eJ.info, j);
                            ti(e);
                        } catch (e) {}
                        break;
                    case K.He.VENMO:
                    case K.He.PAYPAL:
                        try {
                            s()(null != e4, 'Missing braintreeNonce');
                            let e = await (0, d.lP)(e4, eJ.info, j);
                            ti(e);
                        } catch (e) {}
                        break;
                    case K.He.EPS:
                        try {
                            let e = await (0, d.YQ)(ej, e8, eJ.info, j);
                            ti(e);
                        } catch (e) {
                            er.warn(e);
                        }
                        break;
                    case K.He.IDEAL:
                        try {
                            let e = await (0, d.aN)(ej, te, eJ.info, j);
                            ti(e);
                        } catch (e) {
                            er.warn(e);
                        }
                        break;
                    case K.He.PRZELEWY24:
                        try {
                            if (void 0 === tn) throw (0, d.SQ)('Bank required for Przelewy24');
                            let e = await (0, d.pF)(ej, { p24Bank: tn }, eJ.info, j);
                            ti(e);
                        } catch (e) {}
                        break;
                    case K.He.PAYSAFE_CARD:
                    case K.He.GRABPAY_MY:
                        try {
                            let t = await (0, d.sF)(eJ.info, e, j);
                            ti(t);
                        } catch (e) {}
                        break;
                    case K.He.GCASH:
                    case K.He.MOMO_WALLET:
                    case K.He.KAKAOPAY:
                    case K.He.GOPAY_WALLET:
                        try {
                            let { redirectConfirmation: t } = await (0, d.Dk)(eJ.info, e, j);
                            e2(t);
                        } catch (e) {}
                        break;
                    case K.He.GIROPAY:
                    case K.He.BANCONTACT:
                        try {
                            let t = await (0, d.GV)(ej, eJ.info, e, j);
                            ti(t);
                        } catch (e) {}
                        break;
                    case K.He.CASH_APP:
                        try {
                            s()(null != e5, 'Missing adyenPaymentData');
                            let { paymentSource: t } = await (0, d.Dk)(eJ.info, e, j, e5, et);
                            s()(null != t, 'Cash App Pay Payment Source missing'), ti(t);
                        } catch (e) {}
                        break;
                    default:
                        throw Error('unknown step not handled');
                }
                e1 || e0(!1);
            };
            switch (eM.methodType) {
                case K.He.CARD:
                    (u = T.h8.CREDIT_CARD_INFORMATION), (a = K.He.CARD);
                    break;
                case K.He.PAYPAL:
                    (u = T.h8.PAYPAL_INFORMATION), (a = K.He.PAYPAL);
                    break;
                case K.He.VENMO:
                    (u = T.h8.VENMO_INFORMATION), (a = K.He.VENMO);
                    break;
                case K.He.GIROPAY:
                    (u = T.h8.PAYMENT_TYPE), (a = K.He.GIROPAY);
                    break;
                case K.He.PAYSAFE_CARD:
                case K.He.GCASH:
                case K.He.GRABPAY_MY:
                case K.He.MOMO_WALLET:
                case K.He.KAKAOPAY:
                case K.He.GOPAY_WALLET:
                case K.He.BANCONTACT:
                    (u = T.h8.PAYMENT_TYPE), (a = eM.methodType);
                    break;
                case K.He.EPS:
                    (u = T.h8.EPS_INFORMATION), (a = K.He.EPS);
                    break;
                case K.He.IDEAL:
                    (u = T.h8.IDEAL_INFORMATION), (a = K.He.IDEAL);
                    break;
                case K.He.PRZELEWY24:
                    (u = T.h8.PRZELEWY24_INFORMATION), (a = K.He.PRZELEWY24);
                    break;
                case K.He.CASH_APP:
                    (u = T.h8.CASH_APP_INFORMATION), (a = K.He.CASH_APP);
                    break;
                default:
                    (u = T.h8.PAYMENT_TYPE), (a = K.He.CARD);
            }
            (t = (0, r.jsx)(ey, {
                billingAddressInfo: eJ.info,
                onBillingAddressChange: (e, t) => {
                    e$({
                        info: J({}, eJ.info, e),
                        isValid: t
                    });
                },
                paymentSourceType: a
            })),
                (n = (0, r.jsx)(eI, {
                    onBack: () => eH(u),
                    primaryCTA: A.Z.CTAType.CONTINUE,
                    primaryText: z.NW.string(z.t.PDTjLC),
                    primarySubmitting: eX,
                    primaryDisabled: !eJ.isValid || e7,
                    onPrimary: tS
                }));
            break;
        case T.h8.AWAITING_AUTHENTICATION:
            t = (0, r.jsx)(eO, {});
            break;
        default:
            throw Error('Unexpected step: '.concat(ew));
    }
    let tI = (0, r.jsx)(c.qBt, {
            className: Q.sequencer,
            staticClassName: Q.sequencerStatic,
            animatedNodeClassName: Q.sequencerAnimatedNode,
            fillParent: !0,
            step: ew,
            steps: eM.steps,
            sideMargin: 20,
            children: t
        }),
        tT = ew === T.h8.PAYMENT_TYPE && 0 === m.length ? null : n;
    return F
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  Y &&
                      (0, r.jsx)(N.Z, {
                          className: q.paymentModalBreadcrumbs,
                          isEligibleForTrial: Y
                      }),
                  (0, r.jsxs)(C.C3, {
                      children: [(0, r.jsx)(L.Z, { className: q.paymentModalError }), tI]
                  }),
                  (0, r.jsx)(C.O3, { children: tT })
              ]
          })
        : (0, r.jsx)(V.Z, {
              steps: null != y ? y : eM.steps,
              currentStep: null != S ? S : ew,
              paymentError: _.paymentError,
              header: M,
              hideBreadcrumbs: G,
              body: tI,
              footer: tT
          });
}
function eN(e) {
    let {
        defaultPaymentSourceId: t,
        paymentSources: n,
        hasFetchedPaymentSources: r
    } = (0, l.cj)([U.Z], () => ({
        defaultPaymentSourceId: void 0 !== e ? e : U.Z.defaultPaymentSourceId,
        paymentSources: U.Z.paymentSources,
        hasFetchedPaymentSources: U.Z.hasFetchedPaymentSources
    }));
    (0, y.ZP)(() => {
        null == W.Z.cashAppPayComponent && (0, H.eI)(), (0, f.eI)(), r || (0, d.tZ)();
    });
    let [o, a] = i.useState(t);
    null != t && null == o && a(t);
    let [s, c] = i.useState(() => ({
            info: ep,
            isValid: !1
        })),
        [_, h] = i.useState(() => ({
            info: e_,
            isValid: !1
        })),
        [m, g] = i.useState(''),
        [E, v] = i.useState(''),
        [b, O] = i.useState(''),
        [S, I] = i.useState(() => ({ token: null })),
        [T, N, A, C, R] = (0, l.Wu)([k.Z], () => [k.Z.braintreeEmail, k.Z.braintreeNonce, k.Z.error, k.Z.venmoUsername, k.Z.adyenPaymentData]),
        [P, w] = (0, l.Wu)([j.Z], () => [j.Z.error, j.Z.isAwaitingAuthentication]);
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
                u.Z.unsubscribe('BRAINTREE_TOKENIZE_PAYPAL_SUCCESS', e), (0, p.fw)();
            }
        );
    }, []);
    let [D, x] = i.useState(!1),
        [L, M] = i.useState(!1),
        [B, Z] = i.useState(null),
        V = i.useRef(null),
        Y = (0, l.e7)([j.Z], () => j.Z.isAwaitingAuthentication),
        [K, z] = (0, l.Wu)([G.Z], () => [G.Z.purchaseTokenAuthState, G.Z.purchaseTokenHash]);
    return (
        i.useEffect(() => {
            null != B && null != V.current && V.current.scrollIntoView({ behavior: 'smooth' });
        }, [B]),
        {
            paymentSources: n,
            paymentSourceId: o,
            hasFetchedPaymentSources: r,
            setPaymentSourceId: a,
            creditCardState: s,
            setCreditCardState: c,
            tokenState: S,
            setTokenState: I,
            billingAddressState: _,
            setBillingAddressState: h,
            isSubmittingCurrentStep: D,
            setIsSubmittingCurrentStep: x,
            hasRedirectURL: L,
            setHasRedirectURL: M,
            braintreeEmail: T,
            braintreeNonce: N,
            venmoUsername: C,
            adyenPaymentData: R,
            paymentError: null != P ? P : A,
            paymentAuthenticationState: w ? F.wr.PENDING : null != P ? F.wr.ERROR : F.wr.NONE,
            purchaseError: B,
            setPurchaseError: Z,
            purchaseErrorBlockRef: V,
            isAuthenticating: Y,
            purchaseTokenAuthState: K,
            purchaseTokenHash: z,
            epsBankState: E,
            setEpsBankState: v,
            idealBankState: b,
            setIdealBankState: O,
            p24BankState: m,
            setP24BankState: g
        }
    );
}
