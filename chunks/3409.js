n.d(t, {
    fL: () => ey,
    vP: () => ev
}),
    n(47120),
    n(653041),
    n(411104);
var i = n(200651),
    r = n(192379),
    a = n(734530),
    s = n(512722),
    o = n.n(s),
    l = n(442837),
    u = n(481060),
    c = n(570140),
    d = n(355467),
    f = n(873115),
    _ = n(159351),
    p = n(801937),
    h = n(282164),
    m = n(915271),
    g = n(228666),
    E = n(723484),
    v = n(122192),
    y = n(296214),
    I = n(493773),
    T = n(870630),
    b = n(710845),
    S = n(563132),
    A = n(409813),
    N = n(51499),
    C = n(586585),
    R = n(614277),
    O = n(620824),
    D = n(737143),
    L = n(926841),
    x = n(35248),
    P = n(439021),
    w = n(698708),
    M = n(351402),
    k = n(975060),
    U = n(505649),
    G = n(853872),
    B = n(882712),
    Z = n(358085),
    F = n(622999),
    V = n(176919),
    j = n(185139),
    H = n(559725),
    Y = n(439041),
    W = n(850228),
    K = n(231338),
    z = n(388032),
    q = n(770885),
    Q = n(169188);
let X = new b.Z('AddPaymentStep.tsx'),
    J = [A.h8.PAYMENT_TYPE],
    $ = [A.h8.PAYMENT_TYPE, A.h8.CREDIT_CARD_INFORMATION, A.h8.ADDRESS],
    ee = [A.h8.PAYMENT_TYPE, A.h8.PAYPAL_INFORMATION, A.h8.ADDRESS],
    et = [A.h8.PAYMENT_TYPE, A.h8.VENMO_INFORMATION, A.h8.ADDRESS];
A.h8.PAYMENT_TYPE, A.h8.PAYMENT_REQUEST_INFORMATION, A.h8.ADDRESS;
let en = [A.h8.PAYMENT_TYPE, A.h8.PRZELEWY24_INFORMATION, A.h8.ADDRESS],
    ei = [A.h8.PAYMENT_TYPE, A.h8.EPS_INFORMATION, A.h8.ADDRESS],
    er = [A.h8.PAYMENT_TYPE, A.h8.IDEAL_INFORMATION, A.h8.ADDRESS],
    ea = [A.h8.PAYMENT_TYPE, A.h8.CASH_APP_INFORMATION, A.h8.ADDRESS],
    es = [A.h8.PAYMENT_TYPE, A.h8.ADDRESS],
    eo = {
        name: '',
        cardNumber: '',
        expirationDate: '',
        cvc: ''
    },
    el = {
        email: '',
        name: '',
        country: '',
        line1: '',
        line2: '',
        city: '',
        postalCode: '',
        state: ''
    };
function eu(e) {
    return (0, i.jsx)('div', {
        className: q.body,
        children: (0, i.jsx)(p.ZP, { ...e })
    });
}
function ec(e) {
    let { onCardInfoChange: t, infoNotice: n } = e,
        r = (0, l.e7)([k.Z], () => k.Z.error);
    return (0, i.jsxs)('div', {
        className: q.body,
        children: [
            null != n &&
                (0, i.jsx)(u.kzN, {
                    className: q.infoNotice,
                    backgroundColor: u.mTc.BACKGROUND_TERTIARY,
                    children: n
                }),
            (0, i.jsx)(v.j, {
                billingError: r,
                onCardInfoChange: t
            })
        ]
    });
}
function ed() {
    return (0, i.jsx)('div', {
        className: q.body,
        children: (0, i.jsx)(h.Z, {})
    });
}
function ef() {
    return (0, i.jsx)('div', {
        className: q.body,
        children: (0, i.jsx)(m.Z, {})
    });
}
function e_() {
    return (0, i.jsx)('div', {
        className: q.body,
        children: (0, i.jsx)(W.Z, {})
    });
}
function ep() {
    let e = (0, l.e7)([M.Z], () => M.Z.isBusy),
        t = (0, l.e7)([k.Z], () => k.Z.stripePaymentMethod);
    return (0, i.jsx)(y.k, {
        className: q.body,
        stripePaymentMethod: t,
        submitting: e
    });
}
function eh(e) {
    let { billingAddressInfo: t, onBillingAddressChange: n, paymentSourceType: r } = e,
        a = (0, l.e7)([k.Z], () => k.Z.error);
    return (0, i.jsx)('div', {
        className: q.body,
        children: (0, i.jsx)(g.P, {
            billingAddressInfo: t,
            billingError: a,
            onBillingAddressChange: n,
            paymentSourceType: r
        })
    });
}
function em() {
    return (0, i.jsx)(E.F, { className: q.body });
}
function eg(e) {
    return () => (null != k.Z.error && (0, _.fw)(), e());
}
function eE(e) {
    let { onPrimary: t, onBack: n, ...r } = e,
        a = t;
    null != t && (a = eg(t));
    let s = n;
    return (
        null != n && (s = eg(n)),
        (0, i.jsx)(C.Z, {
            ...r,
            onPrimary: a,
            onBack: s
        })
    );
}
function ev(e) {
    let t,
        n,
        s,
        c,
        { paymentModalArgs: p, initialStep: h, prependSteps: m, appendSteps: g, onReturn: E, onComplete: v, onStepChange: y, breadcrumpSteps: I, currentBreadcrumpStep: b, header: M, analyticsLocation: U, hideBreadcrumbs: B = !1, usePaymentModalStep: V = !1, isEligibleForTrial: W = !1, allowDesktopRedirectPurchase: eo = !1, toastContent: el, overwriteSubscriptionPaymentSource: eg = !1 } = e,
        ev = {
            steps: [...m, ...$, ...g],
            methodType: K.He.CARD
        },
        ey = {
            steps: [...m, ...J, ...g],
            methodType: K.He.PAYMENT_REQUEST
        },
        eI = {
            steps: [...m, ...ee, ...g],
            methodType: K.He.PAYPAL
        },
        eT = {
            steps: [...m, ...et, ...g],
            methodType: K.He.VENMO
        },
        eb = {
            steps: [...m, ...J, ...g]
        },
        eS = {
            steps: [...m, ...en, ...g],
            methodType: K.He.PRZELEWY24
        },
        eA = {
            steps: [...m, ...ei, ...g],
            methodType: K.He.EPS
        },
        eN = {
            steps: [...m, ...er, ...g],
            methodType: K.He.IDEAL
        },
        eC = {
            steps: [...m, ...ea, ...g],
            methodType: K.He.CASH_APP
        };
    function eR(e) {
        switch (e) {
            case A.h8.CREDIT_CARD_INFORMATION:
                return ev;
            case A.h8.CASH_APP_INFORMATION:
                return eC;
            default:
                return { steps: [A.h8.ADD_PAYMENT_STEPS] };
        }
    }
    let [eO, eD] = r.useState(h),
        [eL, ex] = r.useState(null),
        [eP, ew] = r.useState(eR(h)),
        { stripe: eM, contextMetadata: ek, activitySessionId: eU } = (0, S.JL)(),
        eG = (0, l.e7)([k.Z], () => k.Z.redirectedPaymentSourceId),
        eB = (0, l.e7)([Y.Z], () => Y.Z.cashAppPayComponent),
        eZ = {
            completeSteps: tn,
            setIsSubmittingCurrentStep: p.setIsSubmittingCurrentStep
        },
        eF = r.useRef(eZ);
    function eV(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        ex(null),
            eD(e),
            t &&
                y({
                    currentStep: eO,
                    toStep: e
                });
    }
    function ej(e) {
        (0, u.showToast)((0, u.createToast)(void 0 !== el ? el : z.intl.string(z.t['VJPg+v']), u.ToastType.SUCCESS, { position: u.ToastPosition.BOTTOM })), v(eO, e), eV(h, !1);
    }
    r.useEffect(() => {
        eF.current = eZ;
    }),
        r.useEffect(() => {
            let { completeSteps: e, setIsSubmittingCurrentStep: t } = eF.current;
            (async () => {
                if (null == eG) return;
                await (0, d.tZ)();
                let n = G.Z.getPaymentSource(eG);
                null != n && (e(n), t(!1));
            })();
        }, [eG]);
    let { setPaymentSourceId: eH, creditCardState: eY, setCreditCardState: eW, tokenState: eK, setTokenState: ez, isSubmittingCurrentStep: eq, billingAddressState: eQ, setBillingAddressState: eX, setIsSubmittingCurrentStep: eJ, hasRedirectURL: e$, setHasRedirectURL: e0, braintreeEmail: e1, braintreeNonce: e2, venmoUsername: e3, adyenPaymentData: e4, isAuthenticating: e6, epsBankState: e5, setEpsBankState: e7, idealBankState: e8, setIdealBankState: e9, p24BankState: te, setP24BankState: tt } = p;
    function tn(e) {
        eH(e.id), ej(e);
    }
    let ti = (0, D.q1)().enabled && eo,
        tr = (0, L.a)().enabled && eo,
        ta = (0, O.b)().enabled,
        ts = ta && eo,
        to = (0, Z.isDesktop)() ? [] : [...(ta ? ['applePay'] : []), 'googlePay'];
    tr && !to.includes('googlePay') && to.push('googlePay'), ts && !to.includes('applePay') && to.push('applePay');
    let [tl, tu] = r.useState(!1),
        tc = r.useRef(null),
        td = () => {
            null != tc.current && tc.current.show();
        };
    switch (eO) {
        case A.h8.ATTEMPT_GOOGLE_PAY:
        case A.h8.ATTEMPT_APPLE_PAY:
        case A.h8.PAYMENT_TYPE:
            let tf = (e, t) => {
                    switch (e) {
                        case K.He.CARD:
                            ti ? eV(A.h8.AWAITING_BROWSER_CHECKOUT) : (ew(ev), eV(A.h8.CREDIT_CARD_INFORMATION));
                            break;
                        case K.He.PAYPAL:
                            ew(eI), eV(A.h8.PAYPAL_INFORMATION);
                            break;
                        case K.He.VENMO:
                            ew(eT), eV(A.h8.VENMO_INFORMATION);
                            break;
                        case K.He.PAYMENT_REQUEST:
                            tr && 'googlePay' === t ? eV(A.h8.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY) : ts && 'applePay' === t ? eV(A.h8.AWAITING_BROWSER_CHECKOUT_APPLE_PAY) : (ew(ey), eV(A.h8.PAYMENT_REQUEST_INFORMATION));
                            break;
                        case K.He.PRZELEWY24:
                            ew(eS), eV(A.h8.PRZELEWY24_INFORMATION);
                            break;
                        case K.He.EPS:
                            ew(eA), eV(A.h8.EPS_INFORMATION);
                            break;
                        case K.He.IDEAL:
                            ew(eN), eV(A.h8.IDEAL_INFORMATION);
                            break;
                        case K.He.CASH_APP:
                            ew(eC), eV(A.h8.CASH_APP_INFORMATION);
                            break;
                        case K.He.GIROPAY:
                        case K.He.PAYSAFE_CARD:
                        case K.He.GCASH:
                        case K.He.GRABPAY_MY:
                        case K.He.MOMO_WALLET:
                        case K.He.KAKAOPAY:
                        case K.He.GOPAY_WALLET:
                        case K.He.BANCONTACT:
                            ew({
                                steps: [...m, ...es, ...g],
                                methodType: e
                            }),
                                eV(A.h8.ADDRESS);
                    }
                    null != k.Z.error && (0, _.fw)();
                },
                t_ = (e, t) => {
                    eX((e) => ({
                        ...e,
                        info: t
                    })),
                        ew(ey),
                        tn(e);
                },
                tp = () => {
                    ew(eb), eV(A.h8.PAYMENT_TYPE);
                },
                th = async (e) => {
                    if (((0, _.Xt)(e), null == e)) {
                        tp();
                        return;
                    }
                    try {
                        let t = await (0, d.i6)(e, void 0, U),
                            { billingAddressInfo: n } = (0, F.az)(e);
                        t_(t, n);
                    } catch (e) {}
                };
            if (eO === A.h8.ATTEMPT_GOOGLE_PAY || eO === A.h8.ATTEMPT_APPLE_PAY) {
                let e = z.intl.string(eO === A.h8.ATTEMPT_APPLE_PAY ? z.t.czhXDg : z.t.Zj2xQ0),
                    r = z.intl.string(eO === A.h8.ATTEMPT_APPLE_PAY ? z.t.WoXvJC : z.t.wnVVr6);
                (t = (0, i.jsx)(P.t, {
                    onChooseType: tf,
                    paymentRequestWallet: eO === A.h8.ATTEMPT_APPLE_PAY ? 'applePay' : 'googlePay',
                    onStripePaymentMethodReceived: th,
                    onPaymentRequestFailure: () => {
                        tf(K.He.CARD), ex(e);
                    },
                    onValidPaymentRequest: () => tu(!0),
                    paymentRequestRef: tc
                })),
                    (n = (0, i.jsx)(eE, {
                        onBack: () => eV(A.h8.PAYMENT_TYPE),
                        primaryCTA: C.Z.CTAType.CONTINUE,
                        primaryText: r,
                        onPrimary: () => td(),
                        primaryDisabled: !tl
                    }));
                break;
            }
            (t = (0, i.jsx)(eu, {
                onChooseType: tf,
                onStripePaymentMethodReceived: th,
                paymentRequestWallets: to,
                isEligibleForTrial: W,
                paymentRequestPaymentContext: {
                    contextMetadata: ek,
                    activitySessionId: eU
                }
            })),
                (n = (0, i.jsx)(eE, { onBack: E }));
            break;
        case A.h8.CREDIT_CARD_INFORMATION:
            let tm = async (e) => {
                eJ(!0);
                try {
                    let t = await (0, d.qv)(eM, e);
                    ez({ token: t }), eV(A.h8.ADDRESS);
                } catch (e) {
                    var t;
                    X.error(null !== (t = e.message) && void 0 !== t ? t : JSON.stringify(e));
                } finally {
                    eJ(!1);
                }
            };
            (t = (0, i.jsx)(ec, {
                infoNotice: eL,
                onCardInfoChange: (e, t) => {
                    eW({
                        info: e,
                        isValid: t
                    }),
                        eX((t) => ({
                            ...t,
                            info: {
                                ...t.info,
                                name: e.name
                            }
                        }));
                }
            })),
                (n = (0, i.jsx)(a.ElementsConsumer, {
                    children: (e) => {
                        let { elements: t } = e;
                        return (0, i.jsx)(eE, {
                            onBack: () => eV(A.h8.PAYMENT_TYPE),
                            primaryCTA: C.Z.CTAType.CONTINUE,
                            primaryType: 'submit',
                            primaryText: z.intl.string(z.t.PDTjLC),
                            primarySubmitting: eq,
                            primaryDisabled: !eY.isValid,
                            onPrimary: () => tm(t)
                        });
                    }
                }));
            break;
        case A.h8.AWAITING_BROWSER_CHECKOUT:
        case A.h8.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
        case A.h8.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
            (t = (0, i.jsx)('div', {
                className: q.body,
                children: (0, i.jsx)(x.M, {
                    step: eO,
                    onPurchaseComplete: () => v(eO),
                    onHandoffFailure: () => {
                        ew(ev), eV(A.h8.CREDIT_CARD_INFORMATION);
                    }
                })
            })),
                (n = (0, i.jsx)(x.a, {
                    onPrimaryClick: () => {
                        ew(ev), eV(A.h8.CREDIT_CARD_INFORMATION);
                    },
                    onBackClick: () => {
                        ew(eb), eV(A.h8.PAYMENT_TYPE);
                    }
                }));
            break;
        case A.h8.EPS_INFORMATION:
            (t = (0, i.jsx)(T.Z, {
                type: K.He.EPS,
                onAccountHolderNameChange: (e) =>
                    eX({
                        info: {
                            ...eQ.info,
                            name: e
                        },
                        isValid: eQ.isValid
                    }),
                onEPSBankChange: (e) => e7(e),
                epsBankValue: e5,
                billingAddressInfo: eQ.info
            })),
                (n = (0, i.jsx)(eE, {
                    onBack: () => eV(A.h8.PAYMENT_TYPE),
                    primaryCTA: C.Z.CTAType.CONTINUE,
                    primaryText: z.intl.string(z.t.PDTjLC),
                    primaryDisabled: void 0 === e5 || '' === e5 || '' === eQ.info.name,
                    onPrimary: () => eV(A.h8.ADDRESS)
                }));
            break;
        case A.h8.IDEAL_INFORMATION:
            (t = (0, i.jsx)(T.Z, {
                type: K.He.IDEAL,
                onAccountHolderNameChange: (e) =>
                    eX({
                        info: {
                            ...eQ.info,
                            name: e
                        },
                        isValid: eQ.isValid
                    }),
                onIdealBankChange: (e) => e9(e),
                idealBankValue: e8,
                billingAddressInfo: eQ.info
            })),
                (n = (0, i.jsx)(eE, {
                    onBack: () => eV(A.h8.PAYMENT_TYPE),
                    primaryCTA: C.Z.CTAType.CONTINUE,
                    primaryText: z.intl.string(z.t.PDTjLC),
                    primaryDisabled: void 0 === e8 || '' === e8 || '' === eQ.info.name,
                    onPrimary: () => eV(A.h8.ADDRESS)
                }));
            break;
        case A.h8.PRZELEWY24_INFORMATION:
            (t = (0, i.jsx)(T.Z, {
                type: K.He.PRZELEWY24,
                onNameChange: (e) =>
                    eX({
                        info: {
                            ...eQ.info,
                            name: e
                        },
                        isValid: eQ.isValid
                    }),
                onEmailChange: (e) =>
                    eX({
                        info: {
                            ...eQ.info,
                            email: e
                        },
                        isValid: eQ.isValid
                    }),
                onP24BankChange: (e) => {
                    tt(e);
                },
                p24BankValue: te,
                billingAddressInfo: eQ.info
            })),
                (n = (0, i.jsx)(eE, {
                    onBack: () => eV(A.h8.PAYMENT_TYPE),
                    primaryCTA: C.Z.CTAType.CONTINUE,
                    primaryText: z.intl.string(z.t.PDTjLC),
                    primaryDisabled: void 0 === eQ.info.name || '' === eQ.info.name || void 0 === eQ.info.email || '' === eQ.info.email || void 0 === te || '' === te,
                    onPrimary: () => eV(A.h8.ADDRESS)
                }));
            break;
        case A.h8.PAYPAL_INFORMATION:
            let tg = 0 !== e1.length && null != e2;
            (t = (0, i.jsx)(ed, {})),
                (n = (0, i.jsx)(eE, {
                    onBack: () => eV(A.h8.PAYMENT_TYPE),
                    primaryCTA: C.Z.CTAType.CONTINUE,
                    primaryText: tg ? z.intl.string(z.t.PDTjLC) : z.intl.string(z.t.Djzd7O),
                    onPrimary: () => (tg ? eV(A.h8.ADDRESS) : (0, f.i0)())
                }));
            break;
        case A.h8.VENMO_INFORMATION:
            let tE = 0 !== e3.length && null != e2;
            (t = (0, i.jsx)(ef, {})),
                (n = (0, i.jsx)(eE, {
                    onBack: () => eV(A.h8.PAYMENT_TYPE),
                    primaryCTA: C.Z.CTAType.CONTINUE,
                    primaryText: tE ? z.intl.string(z.t.PDTjLC) : z.intl.string(z.t['4KoTLC']),
                    onPrimary: () => (tE ? eV(A.h8.ADDRESS) : (0, f.og)())
                }));
            break;
        case A.h8.PAYMENT_REQUEST_INFORMATION:
            (t = (0, i.jsx)(ep, {})), (n = (0, i.jsx)(eE, { onBack: () => eV(A.h8.PAYMENT_TYPE) }));
            break;
        case A.h8.CASH_APP_INFORMATION:
            let tv = null != e4,
                ty = null != eB;
            (t = (0, i.jsx)(e_, {})),
                (n = (0, i.jsx)(eE, {
                    onBack: () => eV(A.h8.PAYMENT_TYPE),
                    primaryCTA: C.Z.CTAType.CONTINUE,
                    primaryText: tv ? z.intl.string(z.t.PDTjLC) : z.intl.string(z.t['9ALP8/']),
                    onPrimary: () => (tv ? eV(A.h8.ADDRESS) : (0, H.cp)()),
                    primaryDisabled: !ty
                }));
            break;
        case A.h8.ADDRESS:
            let tI = async () => {
                eJ(!0);
                let e = eP.methodType;
                switch (e) {
                    case K.He.CARD:
                        try {
                            let e = await (0, d.f0)(eM, eK.token, eQ.info, U);
                            tn(e);
                        } catch {}
                        break;
                    case K.He.VENMO:
                    case K.He.PAYPAL:
                        try {
                            o()(null != e2, 'Missing braintreeNonce');
                            let e = await (0, d.lP)(e2, eQ.info, U);
                            tn(e);
                        } catch {}
                        break;
                    case K.He.EPS:
                        try {
                            let e = await (0, d.YQ)(eM, e5, eQ.info, U);
                            tn(e);
                        } catch (e) {
                            X.warn(e);
                        }
                        break;
                    case K.He.IDEAL:
                        try {
                            let e = await (0, d.aN)(eM, e8, eQ.info, U);
                            tn(e);
                        } catch (e) {
                            X.warn(e);
                        }
                        break;
                    case K.He.PRZELEWY24:
                        try {
                            if (void 0 === te) throw (0, d.SQ)('Bank required for Przelewy24');
                            let e = await (0, d.pF)(eM, { p24Bank: te }, eQ.info, U);
                            tn(e);
                        } catch {}
                        break;
                    case K.He.PAYSAFE_CARD:
                    case K.He.GRABPAY_MY:
                        try {
                            let t = await (0, d.sF)(eQ.info, e, U);
                            tn(t);
                        } catch {}
                        break;
                    case K.He.GCASH:
                    case K.He.MOMO_WALLET:
                    case K.He.KAKAOPAY:
                    case K.He.GOPAY_WALLET:
                        try {
                            let { redirectConfirmation: t } = await (0, d.Dk)(eQ.info, e, U);
                            e0(t);
                        } catch {}
                        break;
                    case K.He.GIROPAY:
                    case K.He.BANCONTACT:
                        try {
                            let t = await (0, d.GV)(eM, eQ.info, e, U);
                            tn(t);
                        } catch {}
                        break;
                    case K.He.CASH_APP:
                        try {
                            o()(null != e4, 'Missing adyenPaymentData');
                            let { paymentSource: t } = await (0, d.Dk)(eQ.info, e, U, e4, eg);
                            o()(null != t, 'Cash App Pay Payment Source missing'), tn(t);
                        } catch {}
                        break;
                    default:
                        throw Error('unknown step not handled');
                }
                e$ || eJ(!1);
            };
            switch (eP.methodType) {
                case K.He.CARD:
                    (c = A.h8.CREDIT_CARD_INFORMATION), (s = K.He.CARD);
                    break;
                case K.He.PAYPAL:
                    (c = A.h8.PAYPAL_INFORMATION), (s = K.He.PAYPAL);
                    break;
                case K.He.VENMO:
                    (c = A.h8.VENMO_INFORMATION), (s = K.He.VENMO);
                    break;
                case K.He.GIROPAY:
                    (c = A.h8.PAYMENT_TYPE), (s = K.He.GIROPAY);
                    break;
                case K.He.PAYSAFE_CARD:
                case K.He.GCASH:
                case K.He.GRABPAY_MY:
                case K.He.MOMO_WALLET:
                case K.He.KAKAOPAY:
                case K.He.GOPAY_WALLET:
                case K.He.BANCONTACT:
                    (c = A.h8.PAYMENT_TYPE), (s = eP.methodType);
                    break;
                case K.He.EPS:
                    (c = A.h8.EPS_INFORMATION), (s = K.He.EPS);
                    break;
                case K.He.IDEAL:
                    (c = A.h8.IDEAL_INFORMATION), (s = K.He.IDEAL);
                    break;
                case K.He.PRZELEWY24:
                    (c = A.h8.PRZELEWY24_INFORMATION), (s = K.He.PRZELEWY24);
                    break;
                case K.He.CASH_APP:
                    (c = A.h8.CASH_APP_INFORMATION), (s = K.He.CASH_APP);
                    break;
                default:
                    (c = A.h8.PAYMENT_TYPE), (s = K.He.CARD);
            }
            (t = (0, i.jsx)(eh, {
                billingAddressInfo: eQ.info,
                onBillingAddressChange: (e, t) => {
                    eX({
                        info: {
                            ...eQ.info,
                            ...e
                        },
                        isValid: t
                    });
                },
                paymentSourceType: s
            })),
                (n = (0, i.jsx)(eE, {
                    onBack: () => eV(c),
                    primaryCTA: C.Z.CTAType.CONTINUE,
                    primaryText: z.intl.string(z.t.PDTjLC),
                    primarySubmitting: eq,
                    primaryDisabled: !eQ.isValid || e6,
                    onPrimary: tI
                }));
            break;
        case A.h8.AWAITING_AUTHENTICATION:
            t = (0, i.jsx)(em, {});
            break;
        default:
            throw Error('Unexpected step: '.concat(eO));
    }
    let tT = (0, i.jsx)(u.qBt, {
            className: Q.sequencer,
            staticClassName: Q.sequencerStatic,
            animatedNodeClassName: Q.sequencerAnimatedNode,
            fillParent: !0,
            step: eO,
            steps: eP.steps,
            sideMargin: 20,
            children: t
        }),
        tb = eO === A.h8.PAYMENT_TYPE && 0 === m.length ? null : n;
    return V
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  W &&
                      (0, i.jsx)(N.Z, {
                          className: q.paymentModalBreadcrumbs,
                          isEligibleForTrial: W
                      }),
                  (0, i.jsxs)(R.C3, {
                      children: [(0, i.jsx)(w.Z, { className: q.paymentModalError }), tT]
                  }),
                  (0, i.jsx)(R.O3, { children: tb })
              ]
          })
        : (0, i.jsx)(j.Z, {
              steps: null != I ? I : eP.steps,
              currentStep: null != b ? b : eO,
              paymentError: p.paymentError,
              header: M,
              hideBreadcrumbs: B,
              body: tT,
              footer: tb
          });
}
function ey(e) {
    let {
        defaultPaymentSourceId: t,
        paymentSources: n,
        hasFetchedPaymentSources: i
    } = (0, l.cj)([G.Z], () => ({
        defaultPaymentSourceId: void 0 !== e ? e : G.Z.defaultPaymentSourceId,
        paymentSources: G.Z.paymentSources,
        hasFetchedPaymentSources: G.Z.hasFetchedPaymentSources
    }));
    (0, I.ZP)(() => {
        null == Y.Z.cashAppPayComponent && (0, H.eI)(), (0, f.eI)(), i || (0, d.tZ)();
    });
    let [a, s] = r.useState(t);
    null != t && null == a && s(t);
    let [o, u] = r.useState(() => ({
            info: eo,
            isValid: !1
        })),
        [p, h] = r.useState(() => ({
            info: el,
            isValid: !1
        })),
        [m, g] = r.useState(''),
        [E, v] = r.useState(''),
        [y, T] = r.useState(''),
        [b, S] = r.useState(() => ({ token: null })),
        [A, N, C, R, O] = (0, l.Wu)([k.Z], () => [k.Z.braintreeEmail, k.Z.braintreeNonce, k.Z.error, k.Z.venmoUsername, k.Z.adyenPaymentData]),
        [D, L] = (0, l.Wu)([U.Z], () => [U.Z.error, U.Z.isAwaitingAuthentication]);
    r.useEffect(() => {
        let e = (e) => {
            let { billingAddress: t } = e;
            h({
                info: t,
                isValid: t.country.length > 0
            });
        };
        return (
            c.Z.subscribe('BRAINTREE_TOKENIZE_PAYPAL_SUCCESS', e),
            () => {
                c.Z.unsubscribe('BRAINTREE_TOKENIZE_PAYPAL_SUCCESS', e), (0, _.fw)();
            }
        );
    }, []);
    let [x, P] = r.useState(!1),
        [w, M] = r.useState(!1),
        [Z, F] = r.useState(null),
        j = r.useRef(null),
        W = (0, l.e7)([U.Z], () => U.Z.isAwaitingAuthentication),
        [K, z] = (0, l.Wu)([B.Z], () => [B.Z.purchaseTokenAuthState, B.Z.purchaseTokenHash]);
    return (
        r.useEffect(() => {
            null != Z && null != j.current && j.current.scrollIntoView({ behavior: 'smooth' });
        }, [Z]),
        {
            paymentSources: n,
            paymentSourceId: a,
            hasFetchedPaymentSources: i,
            setPaymentSourceId: s,
            creditCardState: o,
            setCreditCardState: u,
            tokenState: b,
            setTokenState: S,
            billingAddressState: p,
            setBillingAddressState: h,
            isSubmittingCurrentStep: x,
            setIsSubmittingCurrentStep: P,
            hasRedirectURL: w,
            setHasRedirectURL: M,
            braintreeEmail: A,
            braintreeNonce: N,
            venmoUsername: R,
            adyenPaymentData: O,
            paymentError: null != D ? D : C,
            paymentAuthenticationState: L ? V.wr.PENDING : null != D ? V.wr.ERROR : V.wr.NONE,
            purchaseError: Z,
            setPurchaseError: F,
            purchaseErrorBlockRef: j,
            isAuthenticating: W,
            purchaseTokenAuthState: K,
            purchaseTokenHash: z,
            epsBankState: E,
            setEpsBankState: v,
            idealBankState: y,
            setIdealBankState: T,
            p24BankState: m,
            setP24BankState: g
        }
    );
}
