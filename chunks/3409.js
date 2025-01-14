n.d(t, {
    fL: function () {
        return e_;
    },
    kx: function () {
        return eN;
    },
    vP: function () {
        return eP;
    }
}),
    n(47120),
    n(653041),
    n(411104);
var a = n(200651),
    r = n(192379),
    l = n(734530),
    s = n(512722),
    i = n.n(s),
    o = n(442837),
    c = n(481060),
    u = n(570140),
    d = n(355467),
    p = n(873115),
    m = n(159351),
    h = n(801937),
    A = n(282164),
    E = n(915271),
    y = n(228666),
    f = n(723484),
    N = n(122192),
    P = n(581813),
    _ = n(493773),
    b = n(870630),
    g = n(710845),
    C = n(563132),
    T = n(409813),
    I = n(51499),
    S = n(586585),
    v = n(614277),
    R = n(620824),
    x = n(737143),
    L = n(926841),
    M = n(35248),
    O = n(439021),
    D = n(698708),
    w = n(351402),
    j = n(975060),
    Z = n(505649),
    k = n(853872),
    H = n(882712),
    Y = n(358085),
    B = n(622999),
    F = n(176919),
    U = n(185139),
    W = n(559725),
    G = n(439041),
    V = n(850228),
    Q = n(231338),
    q = n(388032),
    K = n(802543),
    z = n(719919);
let J = new g.Z('AddPaymentStep.tsx'),
    X = [T.h8.PAYMENT_TYPE],
    $ = [T.h8.PAYMENT_TYPE, T.h8.CREDIT_CARD_INFORMATION, T.h8.ADDRESS],
    ee = [T.h8.PAYMENT_TYPE, T.h8.PAYPAL_INFORMATION, T.h8.ADDRESS],
    et = [T.h8.PAYMENT_TYPE, T.h8.VENMO_INFORMATION, T.h8.ADDRESS];
T.h8.PAYMENT_TYPE, T.h8.PAYMENT_REQUEST_INFORMATION, T.h8.ADDRESS;
let en = [T.h8.PAYMENT_TYPE, T.h8.PRZELEWY24_INFORMATION, T.h8.ADDRESS],
    ea = [T.h8.PAYMENT_TYPE, T.h8.EPS_INFORMATION, T.h8.ADDRESS],
    er = [T.h8.PAYMENT_TYPE, T.h8.IDEAL_INFORMATION, T.h8.ADDRESS],
    el = [T.h8.PAYMENT_TYPE, T.h8.CASH_APP_INFORMATION, T.h8.ADDRESS],
    es = [T.h8.PAYMENT_TYPE, T.h8.ADDRESS],
    ei = {
        name: '',
        cardNumber: '',
        expirationDate: '',
        cvc: ''
    },
    eo = {
        email: '',
        name: '',
        country: '',
        line1: '',
        line2: '',
        city: '',
        postalCode: '',
        state: ''
    };
function ec(e) {
    let { onChooseType: t, onStripePaymentMethodReceived: n, isEligibleForTrial: r, paymentRequestWallets: l } = e;
    return (0, a.jsx)('div', {
        className: K.body,
        children: (0, a.jsx)(h.Z, {
            onChooseType: t,
            paymentRequestWallets: l,
            onStripePaymentMethodReceived: n,
            isEligibleForTrial: r
        })
    });
}
function eu(e) {
    let { onCardInfoChange: t, infoNotice: n } = e,
        r = (0, o.e7)([j.Z], () => j.Z.error);
    return (0, a.jsxs)('div', {
        className: K.body,
        children: [
            null != n &&
                (0, a.jsx)(c.FormErrorBlock, {
                    className: K.infoNotice,
                    backgroundColor: c.FormErrorBlockColors.BACKGROUND_TERTIARY,
                    children: n
                }),
            (0, a.jsx)(N.j, {
                billingError: r,
                onCardInfoChange: t
            })
        ]
    });
}
function ed() {
    return (0, a.jsx)('div', {
        className: K.body,
        children: (0, a.jsx)(A.Z, {})
    });
}
function ep() {
    return (0, a.jsx)('div', {
        className: K.body,
        children: (0, a.jsx)(E.Z, {})
    });
}
function em() {
    return (0, a.jsx)('div', {
        className: K.body,
        children: (0, a.jsx)(V.Z, {})
    });
}
function eh() {
    let e = (0, o.e7)([w.Z], () => w.Z.isBusy),
        t = (0, o.e7)([j.Z], () => j.Z.stripePaymentMethod);
    return (0, a.jsx)(P.k, {
        className: K.body,
        stripePaymentMethod: t,
        submitting: e
    });
}
function eA(e) {
    let { billingAddressInfo: t, onBillingAddressChange: n, paymentSourceType: r } = e,
        l = (0, o.e7)([j.Z], () => j.Z.error);
    return (0, a.jsx)('div', {
        className: K.body,
        children: (0, a.jsx)(y.P, {
            billingAddressInfo: t,
            billingError: l,
            onBillingAddressChange: n,
            paymentSourceType: r
        })
    });
}
function eE() {
    return (0, a.jsx)(f.F, { className: K.body });
}
function ey(e) {
    return () => (null != j.Z.error && (0, m.fw)(), e());
}
function ef(e) {
    let { onPrimary: t, onBack: n, ...r } = e,
        l = t;
    null != t && (l = ey(t));
    let s = n;
    return (
        null != n && (s = ey(n)),
        (0, a.jsx)(S.Z, {
            ...r,
            onPrimary: l,
            onBack: s
        })
    );
}
function eN(e) {
    let { breadcrumbSteps: t } = e,
        { step: n, setStep: a, paymentSources: r, paymentSourceId: l, setPaymentSourceId: s, purchaseError: o, setPurchaseError: c, purchaseErrorBlockRef: u, paymentAuthenticationState: d } = (0, C.usePaymentContext)(),
        p = {
            ...e_(),
            paymentSources: r,
            paymentSourceId: l,
            setPaymentSourceId: s,
            purchaseError: o,
            setPurchaseError: c,
            purchaseErrorBlockRef: u,
            paymentAuthenticationState: d
        };
    return (
        i()(n, 'Step should be set here'),
        eP({
            paymentModalArgs: p,
            initialStep: T.h8.PAYMENT_TYPE,
            prependSteps: [T.h8.PROMOTION_INFO],
            appendSteps: [T.h8.REVIEW, T.h8.CONFIRM],
            breadcrumpSteps: t,
            currentBreadcrumpStep: n,
            onReturn: () => a(T.h8.REVIEW),
            onComplete: () => a(T.h8.REVIEW),
            onStepChange: () => {}
        })
    );
}
function eP(e) {
    let t,
        n,
        s,
        u,
        { paymentModalArgs: h, initialStep: A, prependSteps: E, appendSteps: y, onReturn: f, onComplete: N, onStepChange: P, breadcrumpSteps: _, currentBreadcrumpStep: g, header: w, analyticsLocation: Z, hideBreadcrumbs: H = !1, usePaymentModalStep: F = !1, isEligibleForTrial: V = !1, allowDesktopRedirectPurchase: ei = !1, toastContent: eo, overwriteSubscriptionPaymentSource: ey = !1 } = e,
        eN = {
            steps: [...E, ...$, ...y],
            methodType: Q.He.CARD
        },
        eP = {
            steps: [...E, ...X, ...y],
            methodType: Q.He.PAYMENT_REQUEST
        },
        e_ = {
            steps: [...E, ...ee, ...y],
            methodType: Q.He.PAYPAL
        },
        eb = {
            steps: [...E, ...et, ...y],
            methodType: Q.He.VENMO
        },
        eg = {
            steps: [...E, ...X, ...y]
        },
        eC = {
            steps: [...E, ...en, ...y],
            methodType: Q.He.PRZELEWY24
        },
        eT = {
            steps: [...E, ...ea, ...y],
            methodType: Q.He.EPS
        },
        eI = {
            steps: [...E, ...er, ...y],
            methodType: Q.He.IDEAL
        },
        eS = {
            steps: [...E, ...el, ...y],
            methodType: Q.He.CASH_APP
        },
        [ev, eR] = r.useState(A),
        [ex, eL] = r.useState(null),
        [eM, eO] = r.useState(
            (function (e) {
                switch (e) {
                    case T.h8.CREDIT_CARD_INFORMATION:
                        return eN;
                    case T.h8.CASH_APP_INFORMATION:
                        return eS;
                    default:
                        return { steps: [T.h8.ADD_PAYMENT_STEPS] };
                }
            })(A)
        ),
        { stripe: eD } = (0, C.usePaymentContext)(),
        ew = (0, o.e7)([j.Z], () => j.Z.redirectedPaymentSourceId),
        ej = (0, o.e7)([G.Z], () => G.Z.cashAppPayComponent),
        eZ = {
            completeSteps: e9,
            setIsSubmittingCurrentStep: h.setIsSubmittingCurrentStep
        },
        ek = r.useRef(eZ);
    function eH(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        eL(null),
            eR(e),
            t &&
                P({
                    currentStep: ev,
                    toStep: e
                });
    }
    r.useEffect(() => {
        ek.current = eZ;
    }),
        r.useEffect(() => {
            let { completeSteps: e, setIsSubmittingCurrentStep: t } = ek.current;
            (() => {
                if (null == ew) return;
                let n = k.Z.getPaymentSource(ew);
                if (null != n) e(n), t(!1);
            })();
        }, [ew]);
    let { setPaymentSourceId: eY, creditCardState: eB, setCreditCardState: eF, tokenState: eU, setTokenState: eW, isSubmittingCurrentStep: eG, billingAddressState: eV, setBillingAddressState: eQ, setIsSubmittingCurrentStep: eq, hasRedirectURL: eK, setHasRedirectURL: ez, braintreeEmail: eJ, braintreeNonce: eX, venmoUsername: e$, adyenPaymentData: e0, isAuthenticating: e1, epsBankState: e2, setEpsBankState: e8, idealBankState: e4, setIdealBankState: e7, p24BankState: e6, setP24BankState: e3 } = h;
    function e9(e) {
        var t;
        eY(e.id), (t = e), (0, c.showToast)((0, c.createToast)(void 0 !== eo ? eo : q.intl.string(q.t['VJPg+v']), c.ToastType.SUCCESS, { position: c.ToastPosition.BOTTOM })), N(ev, t), eH(A, !1);
    }
    let e5 = (0, x.q1)().enabled && ei,
        te = (0, L.a)().enabled && ei,
        tt = (0, R.b)().enabled,
        tn = tt && ei,
        ta = (0, Y.isDesktop)() ? [] : [...(tt ? ['applePay'] : []), 'googlePay'];
    te && !ta.includes('googlePay') && ta.push('googlePay'), tn && !ta.includes('applePay') && ta.push('applePay');
    let [tr, tl] = r.useState(!1),
        ts = r.useRef(null),
        ti = () => {
            null != ts.current && ts.current.show();
        };
    switch (ev) {
        case T.h8.ATTEMPT_GOOGLE_PAY:
        case T.h8.ATTEMPT_APPLE_PAY:
        case T.h8.PAYMENT_TYPE:
            let to = (e, t) => {
                    switch (e) {
                        case Q.He.CARD:
                            e5 ? eH(T.h8.AWAITING_BROWSER_CHECKOUT) : (eO(eN), eH(T.h8.CREDIT_CARD_INFORMATION));
                            break;
                        case Q.He.PAYPAL:
                            eO(e_), eH(T.h8.PAYPAL_INFORMATION);
                            break;
                        case Q.He.VENMO:
                            eO(eb), eH(T.h8.VENMO_INFORMATION);
                            break;
                        case Q.He.PAYMENT_REQUEST:
                            te && 'googlePay' === t ? eH(T.h8.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY) : tn && 'applePay' === t ? eH(T.h8.AWAITING_BROWSER_CHECKOUT_APPLE_PAY) : (eO(eP), eH(T.h8.PAYMENT_REQUEST_INFORMATION));
                            break;
                        case Q.He.PRZELEWY24:
                            eO(eC), eH(T.h8.PRZELEWY24_INFORMATION);
                            break;
                        case Q.He.EPS:
                            eO(eT), eH(T.h8.EPS_INFORMATION);
                            break;
                        case Q.He.IDEAL:
                            eO(eI), eH(T.h8.IDEAL_INFORMATION);
                            break;
                        case Q.He.CASH_APP:
                            eO(eS), eH(T.h8.CASH_APP_INFORMATION);
                            break;
                        case Q.He.GIROPAY:
                        case Q.He.PAYSAFE_CARD:
                        case Q.He.GCASH:
                        case Q.He.GRABPAY_MY:
                        case Q.He.MOMO_WALLET:
                        case Q.He.KAKAOPAY:
                        case Q.He.GOPAY_WALLET:
                        case Q.He.BANCONTACT:
                            eO({
                                steps: [...E, ...es, ...y],
                                methodType: e
                            }),
                                eH(T.h8.ADDRESS);
                    }
                    null != j.Z.error && (0, m.fw)();
                },
                tc = (e, t) => {
                    eQ((e) => ({
                        ...e,
                        info: t
                    })),
                        eO(eP),
                        e9(e);
                },
                tu = () => {
                    eO(eg), eH(T.h8.PAYMENT_TYPE);
                },
                td = async (e) => {
                    if (((0, m.Xt)(e), null == e)) {
                        tu();
                        return;
                    }
                    try {
                        let t = await (0, d.i6)(e, void 0, Z),
                            { billingAddressInfo: n } = (0, B.az)(e);
                        tc(t, n);
                    } catch (e) {}
                };
            if (ev === T.h8.ATTEMPT_GOOGLE_PAY || ev === T.h8.ATTEMPT_APPLE_PAY) {
                let e = q.intl.string(ev === T.h8.ATTEMPT_APPLE_PAY ? q.t.czhXDg : q.t.Zj2xQ0),
                    r = q.intl.string(ev === T.h8.ATTEMPT_APPLE_PAY ? q.t.WoXvJC : q.t.wnVVr6);
                (t = (0, a.jsx)(O.t, {
                    onChooseType: to,
                    paymentRequestWallet: ev === T.h8.ATTEMPT_APPLE_PAY ? 'applePay' : 'googlePay',
                    onStripePaymentMethodReceived: td,
                    onPaymentRequestFailure: () => {
                        to(Q.He.CARD), eL(e);
                    },
                    onValidPaymentRequest: () => tl(!0),
                    paymentRequestRef: ts
                })),
                    (n = (0, a.jsx)(ef, {
                        onBack: () => eH(T.h8.PAYMENT_TYPE),
                        primaryCTA: S.Z.CTAType.CONTINUE,
                        primaryText: r,
                        onPrimary: () => ti(),
                        primaryDisabled: !tr
                    }));
                break;
            }
            (t = (0, a.jsx)(ec, {
                onChooseType: to,
                onStripePaymentMethodReceived: td,
                paymentRequestWallets: ta,
                isEligibleForTrial: V
            })),
                (n = (0, a.jsx)(ef, { onBack: f }));
            break;
        case T.h8.CREDIT_CARD_INFORMATION:
            let tp = async (e) => {
                eq(!0);
                try {
                    let t = await (0, d.qv)(eD, e);
                    eW({ token: t }), eH(T.h8.ADDRESS);
                } catch (e) {
                    var t;
                    J.error(null !== (t = e.message) && void 0 !== t ? t : JSON.stringify(e));
                } finally {
                    eq(!1);
                }
            };
            (t = (0, a.jsx)(eu, {
                infoNotice: ex,
                onCardInfoChange: (e, t) => {
                    eF({
                        info: e,
                        isValid: t
                    }),
                        eQ((t) => ({
                            ...t,
                            info: {
                                ...t.info,
                                name: e.name
                            }
                        }));
                }
            })),
                (n = (0, a.jsx)(l.ElementsConsumer, {
                    children: (e) => {
                        let { elements: t } = e;
                        return (0, a.jsx)(ef, {
                            onBack: () => eH(T.h8.PAYMENT_TYPE),
                            primaryCTA: S.Z.CTAType.CONTINUE,
                            primaryType: 'submit',
                            primaryText: q.intl.string(q.t.PDTjLC),
                            primarySubmitting: eG,
                            primaryDisabled: !eB.isValid,
                            onPrimary: () => tp(t)
                        });
                    }
                }));
            break;
        case T.h8.AWAITING_BROWSER_CHECKOUT:
        case T.h8.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
        case T.h8.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
            (t = (0, a.jsx)('div', {
                className: K.body,
                children: (0, a.jsx)(M.M, {
                    step: ev,
                    onPurchaseComplete: () => N(ev),
                    onHandoffFailure: () => {
                        eO(eN), eH(T.h8.CREDIT_CARD_INFORMATION);
                    }
                })
            })),
                (n = (0, a.jsx)(M.a, {
                    onPrimaryClick: () => {
                        eO(eN), eH(T.h8.CREDIT_CARD_INFORMATION);
                    },
                    onBackClick: () => {
                        eO(eg), eH(T.h8.PAYMENT_TYPE);
                    }
                }));
            break;
        case T.h8.EPS_INFORMATION:
            (t = (0, a.jsx)(b.Z, {
                type: Q.He.EPS,
                onAccountHolderNameChange: (e) =>
                    eQ({
                        info: {
                            ...eV.info,
                            name: e
                        },
                        isValid: eV.isValid
                    }),
                onEPSBankChange: (e) => e8(e),
                epsBankValue: e2,
                billingAddressInfo: eV.info
            })),
                (n = (0, a.jsx)(ef, {
                    onBack: () => eH(T.h8.PAYMENT_TYPE),
                    primaryCTA: S.Z.CTAType.CONTINUE,
                    primaryText: q.intl.string(q.t.PDTjLC),
                    primaryDisabled: void 0 === e2 || '' === e2 || '' === eV.info.name,
                    onPrimary: () => eH(T.h8.ADDRESS)
                }));
            break;
        case T.h8.IDEAL_INFORMATION:
            (t = (0, a.jsx)(b.Z, {
                type: Q.He.IDEAL,
                onAccountHolderNameChange: (e) =>
                    eQ({
                        info: {
                            ...eV.info,
                            name: e
                        },
                        isValid: eV.isValid
                    }),
                onIdealBankChange: (e) => e7(e),
                idealBankValue: e4,
                billingAddressInfo: eV.info
            })),
                (n = (0, a.jsx)(ef, {
                    onBack: () => eH(T.h8.PAYMENT_TYPE),
                    primaryCTA: S.Z.CTAType.CONTINUE,
                    primaryText: q.intl.string(q.t.PDTjLC),
                    primaryDisabled: void 0 === e4 || '' === e4 || '' === eV.info.name,
                    onPrimary: () => eH(T.h8.ADDRESS)
                }));
            break;
        case T.h8.PRZELEWY24_INFORMATION:
            (t = (0, a.jsx)(b.Z, {
                type: Q.He.PRZELEWY24,
                onNameChange: (e) =>
                    eQ({
                        info: {
                            ...eV.info,
                            name: e
                        },
                        isValid: eV.isValid
                    }),
                onEmailChange: (e) =>
                    eQ({
                        info: {
                            ...eV.info,
                            email: e
                        },
                        isValid: eV.isValid
                    }),
                onP24BankChange: (e) => {
                    e3(e);
                },
                p24BankValue: e6,
                billingAddressInfo: eV.info
            })),
                (n = (0, a.jsx)(ef, {
                    onBack: () => eH(T.h8.PAYMENT_TYPE),
                    primaryCTA: S.Z.CTAType.CONTINUE,
                    primaryText: q.intl.string(q.t.PDTjLC),
                    primaryDisabled: void 0 === eV.info.name || '' === eV.info.name || void 0 === eV.info.email || '' === eV.info.email || void 0 === e6 || '' === e6,
                    onPrimary: () => eH(T.h8.ADDRESS)
                }));
            break;
        case T.h8.PAYPAL_INFORMATION:
            let tm = 0 !== eJ.length && null != eX;
            (t = (0, a.jsx)(ed, {})),
                (n = (0, a.jsx)(ef, {
                    onBack: () => eH(T.h8.PAYMENT_TYPE),
                    primaryCTA: S.Z.CTAType.CONTINUE,
                    primaryText: tm ? q.intl.string(q.t.PDTjLC) : q.intl.string(q.t.Djzd7O),
                    onPrimary: () => (tm ? eH(T.h8.ADDRESS) : (0, p.i0)())
                }));
            break;
        case T.h8.VENMO_INFORMATION:
            let th = 0 !== e$.length && null != eX;
            (t = (0, a.jsx)(ep, {})),
                (n = (0, a.jsx)(ef, {
                    onBack: () => eH(T.h8.PAYMENT_TYPE),
                    primaryCTA: S.Z.CTAType.CONTINUE,
                    primaryText: th ? q.intl.string(q.t.PDTjLC) : q.intl.string(q.t['4KoTLC']),
                    onPrimary: () => (th ? eH(T.h8.ADDRESS) : (0, p.og)())
                }));
            break;
        case T.h8.PAYMENT_REQUEST_INFORMATION:
            (t = (0, a.jsx)(eh, {})), (n = (0, a.jsx)(ef, { onBack: () => eH(T.h8.PAYMENT_TYPE) }));
            break;
        case T.h8.CASH_APP_INFORMATION:
            let tA = null != e0;
            (t = (0, a.jsx)(em, {})),
                (n = (0, a.jsx)(ef, {
                    onBack: () => eH(T.h8.PAYMENT_TYPE),
                    primaryCTA: S.Z.CTAType.CONTINUE,
                    primaryText: tA ? q.intl.string(q.t.PDTjLC) : q.intl.string(q.t['9ALP8/']),
                    onPrimary: () => (tA ? eH(T.h8.ADDRESS) : (0, W.cp)()),
                    primaryDisabled: !(null != ej)
                }));
            break;
        case T.h8.ADDRESS:
            let tE = async () => {
                eq(!0);
                let e = eM.methodType;
                switch (e) {
                    case Q.He.CARD:
                        try {
                            let e = await (0, d.f0)(eD, eU.token, eV.info, Z);
                            e9(e);
                        } catch {}
                        break;
                    case Q.He.VENMO:
                    case Q.He.PAYPAL:
                        try {
                            i()(null != eX, 'Missing braintreeNonce');
                            let e = await (0, d.lP)(eX, eV.info, Z);
                            e9(e);
                        } catch {}
                        break;
                    case Q.He.EPS:
                        try {
                            let e = await (0, d.YQ)(eD, e2, eV.info, Z);
                            e9(e);
                        } catch (e) {
                            J.warn(e);
                        }
                        break;
                    case Q.He.IDEAL:
                        try {
                            let e = await (0, d.aN)(eD, e4, eV.info, Z);
                            e9(e);
                        } catch (e) {
                            J.warn(e);
                        }
                        break;
                    case Q.He.PRZELEWY24:
                        try {
                            if (void 0 === e6) throw (0, d.SQ)('Bank required for Przelewy24');
                            let e = await (0, d.pF)(eD, { p24Bank: e6 }, eV.info, Z);
                            e9(e);
                        } catch {}
                        break;
                    case Q.He.PAYSAFE_CARD:
                    case Q.He.GRABPAY_MY:
                        try {
                            let t = await (0, d.sF)(eV.info, e, Z);
                            e9(t);
                        } catch {}
                        break;
                    case Q.He.GCASH:
                    case Q.He.MOMO_WALLET:
                    case Q.He.KAKAOPAY:
                    case Q.He.GOPAY_WALLET:
                        try {
                            let { redirectConfirmation: t } = await (0, d.Dk)(eV.info, e, Z);
                            ez(t);
                        } catch {}
                        break;
                    case Q.He.GIROPAY:
                    case Q.He.BANCONTACT:
                        try {
                            let t = await (0, d.GV)(eD, eV.info, e, Z);
                            e9(t);
                        } catch {}
                        break;
                    case Q.He.CASH_APP:
                        try {
                            i()(null != e0, 'Missing adyenPaymentData');
                            let { paymentSource: t } = await (0, d.Dk)(eV.info, e, Z, e0, ey);
                            i()(null != t, 'Cash App Pay Payment Source missing'), e9(t);
                        } catch {}
                        break;
                    default:
                        throw Error('unknown step not handled');
                }
                !eK && eq(!1);
            };
            switch (eM.methodType) {
                case Q.He.CARD:
                    (u = T.h8.CREDIT_CARD_INFORMATION), (s = Q.He.CARD);
                    break;
                case Q.He.PAYPAL:
                    (u = T.h8.PAYPAL_INFORMATION), (s = Q.He.PAYPAL);
                    break;
                case Q.He.VENMO:
                    (u = T.h8.VENMO_INFORMATION), (s = Q.He.VENMO);
                    break;
                case Q.He.GIROPAY:
                    (u = T.h8.PAYMENT_TYPE), (s = Q.He.GIROPAY);
                    break;
                case Q.He.PAYSAFE_CARD:
                case Q.He.GCASH:
                case Q.He.GRABPAY_MY:
                case Q.He.MOMO_WALLET:
                case Q.He.KAKAOPAY:
                case Q.He.GOPAY_WALLET:
                case Q.He.BANCONTACT:
                    (u = T.h8.PAYMENT_TYPE), (s = eM.methodType);
                    break;
                case Q.He.EPS:
                    (u = T.h8.EPS_INFORMATION), (s = Q.He.EPS);
                    break;
                case Q.He.IDEAL:
                    (u = T.h8.IDEAL_INFORMATION), (s = Q.He.IDEAL);
                    break;
                case Q.He.PRZELEWY24:
                    (u = T.h8.PRZELEWY24_INFORMATION), (s = Q.He.PRZELEWY24);
                    break;
                case Q.He.CASH_APP:
                    (u = T.h8.CASH_APP_INFORMATION), (s = Q.He.CASH_APP);
                    break;
                default:
                    (u = T.h8.PAYMENT_TYPE), (s = Q.He.CARD);
            }
            (t = (0, a.jsx)(eA, {
                billingAddressInfo: eV.info,
                onBillingAddressChange: (e, t) => {
                    eQ({
                        info: {
                            ...eV.info,
                            ...e
                        },
                        isValid: t
                    });
                },
                paymentSourceType: s
            })),
                (n = (0, a.jsx)(ef, {
                    onBack: () => eH(u),
                    primaryCTA: S.Z.CTAType.CONTINUE,
                    primaryText: q.intl.string(q.t.PDTjLC),
                    primarySubmitting: eG,
                    primaryDisabled: !eV.isValid || e1,
                    onPrimary: tE
                }));
            break;
        case T.h8.AWAITING_AUTHENTICATION:
            t = (0, a.jsx)(eE, {});
            break;
        default:
            throw Error('Unexpected step: '.concat(ev));
    }
    let ty = (0, a.jsx)(c.Sequencer, {
            className: z.sequencer,
            staticClassName: z.sequencerStatic,
            animatedNodeClassName: z.sequencerAnimatedNode,
            fillParent: !0,
            step: ev,
            steps: eM.steps,
            sideMargin: 20,
            children: t
        }),
        tf = ev === T.h8.PAYMENT_TYPE && 0 === E.length ? null : n;
    return F
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  V &&
                      (0, a.jsx)(I.Z, {
                          className: K.paymentModalBreadcrumbs,
                          isEligibleForTrial: V
                      }),
                  (0, a.jsxs)(v.C3, {
                      children: [(0, a.jsx)(D.Z, { className: K.paymentModalError }), ty]
                  }),
                  (0, a.jsx)(v.O3, { children: tf })
              ]
          })
        : (0, a.jsx)(U.Z, {
              steps: null != _ ? _ : eM.steps,
              currentStep: null != g ? g : ev,
              paymentError: h.paymentError,
              header: w,
              hideBreadcrumbs: H,
              body: ty,
              footer: tf
          });
}
function e_(e) {
    let {
        defaultPaymentSourceId: t,
        paymentSources: n,
        hasFetchedPaymentSources: a
    } = (0, o.cj)([k.Z], () => ({
        defaultPaymentSourceId: void 0 !== e ? e : k.Z.defaultPaymentSourceId,
        paymentSources: k.Z.paymentSources,
        hasFetchedPaymentSources: k.Z.hasFetchedPaymentSources
    }));
    (0, _.Z)(() => {
        null == G.Z.cashAppPayComponent && (0, W.eI)(), (0, p.eI)(), !a && (0, d.tZ)();
    });
    let [l, s] = r.useState(t);
    null != t && null == l && s(t);
    let [i, c] = r.useState(() => ({
            info: ei,
            isValid: !1
        })),
        [h, A] = r.useState(() => ({
            info: eo,
            isValid: !1
        })),
        [E, y] = r.useState(''),
        [f, N] = r.useState(''),
        [P, b] = r.useState(''),
        [g, C] = r.useState(() => ({ token: null })),
        [T, I, S, v, R] = (0, o.Wu)([j.Z], () => [j.Z.braintreeEmail, j.Z.braintreeNonce, j.Z.error, j.Z.venmoUsername, j.Z.adyenPaymentData]),
        [x, L] = (0, o.Wu)([Z.Z], () => [Z.Z.error, Z.Z.isAwaitingAuthentication]);
    r.useEffect(() => {
        let e = (e) => {
            let { billingAddress: t } = e;
            A({
                info: t,
                isValid: t.country.length > 0
            });
        };
        return (
            u.Z.subscribe('BRAINTREE_TOKENIZE_PAYPAL_SUCCESS', e),
            () => {
                u.Z.unsubscribe('BRAINTREE_TOKENIZE_PAYPAL_SUCCESS', e), (0, m.fw)();
            }
        );
    }, []);
    let [M, O] = r.useState(!1),
        [D, w] = r.useState(!1),
        [Y, B] = r.useState(null),
        U = r.useRef(null),
        V = (0, o.e7)([Z.Z], () => Z.Z.isAwaitingAuthentication),
        [Q, q] = (0, o.Wu)([H.Z], () => [H.Z.purchaseTokenAuthState, H.Z.purchaseTokenHash]);
    return (
        r.useEffect(() => {
            null != Y && null != U.current && U.current.scrollIntoView({ behavior: 'smooth' });
        }, [Y]),
        {
            paymentSources: n,
            paymentSourceId: l,
            hasFetchedPaymentSources: a,
            setPaymentSourceId: s,
            creditCardState: i,
            setCreditCardState: c,
            tokenState: g,
            setTokenState: C,
            billingAddressState: h,
            setBillingAddressState: A,
            isSubmittingCurrentStep: M,
            setIsSubmittingCurrentStep: O,
            hasRedirectURL: D,
            setHasRedirectURL: w,
            braintreeEmail: T,
            braintreeNonce: I,
            venmoUsername: v,
            adyenPaymentData: R,
            paymentError: null != x ? x : S,
            paymentAuthenticationState: L ? F.wr.PENDING : null != x ? F.wr.ERROR : F.wr.NONE,
            purchaseError: Y,
            setPurchaseError: B,
            purchaseErrorBlockRef: U,
            isAuthenticating: V,
            purchaseTokenAuthState: Q,
            purchaseTokenHash: q,
            epsBankState: f,
            setEpsBankState: N,
            idealBankState: P,
            setIdealBankState: b,
            p24BankState: E,
            setP24BankState: y
        }
    );
}
