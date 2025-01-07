n.d(t, {
    fL: function () {
        return e_;
    },
    kx: function () {
        return ef;
    },
    vP: function () {
        return ey;
    }
}),
    n(47120),
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
    N = n(228666),
    f = n(723484),
    y = n(122192),
    _ = n(581813),
    P = n(493773),
    b = n(870630),
    C = n(710845),
    g = n(563132),
    T = n(409813),
    I = n(51499),
    S = n(586585),
    v = n(614277),
    x = n(737143),
    R = n(926841),
    L = n(35248),
    M = n(439021),
    O = n(698708),
    D = n(351402),
    w = n(975060),
    j = n(505649),
    Z = n(853872),
    k = n(882712),
    H = n(358085),
    Y = n(622999),
    B = n(176919),
    F = n(185139),
    U = n(559725),
    W = n(439041),
    G = n(850228),
    V = n(231338),
    Q = n(388032),
    q = n(802543),
    K = n(719919);
let z = new C.Z('AddPaymentStep.tsx'),
    J = [T.h8.PAYMENT_TYPE],
    X = [T.h8.PAYMENT_TYPE, T.h8.CREDIT_CARD_INFORMATION, T.h8.ADDRESS],
    $ = [T.h8.PAYMENT_TYPE, T.h8.PAYPAL_INFORMATION, T.h8.ADDRESS],
    ee = [T.h8.PAYMENT_TYPE, T.h8.VENMO_INFORMATION, T.h8.ADDRESS];
T.h8.PAYMENT_TYPE, T.h8.PAYMENT_REQUEST_INFORMATION, T.h8.ADDRESS;
let et = [T.h8.PAYMENT_TYPE, T.h8.PRZELEWY24_INFORMATION, T.h8.ADDRESS],
    en = [T.h8.PAYMENT_TYPE, T.h8.EPS_INFORMATION, T.h8.ADDRESS],
    ea = [T.h8.PAYMENT_TYPE, T.h8.IDEAL_INFORMATION, T.h8.ADDRESS],
    er = [T.h8.PAYMENT_TYPE, T.h8.CASH_APP_INFORMATION, T.h8.ADDRESS],
    el = [T.h8.PAYMENT_TYPE, T.h8.ADDRESS],
    es = {
        name: '',
        cardNumber: '',
        expirationDate: '',
        cvc: ''
    },
    ei = {
        email: '',
        name: '',
        country: '',
        line1: '',
        line2: '',
        city: '',
        postalCode: '',
        state: ''
    };
function eo(e) {
    let { onChooseType: t, onStripePaymentMethodReceived: n, isEligibleForTrial: r, allowStripeRequestPayments: l } = e;
    return (0, a.jsx)('div', {
        className: q.body,
        children: (0, a.jsx)(h.Z, {
            onChooseType: t,
            allowStripeRequestPayments: l,
            onStripePaymentMethodReceived: n,
            isEligibleForTrial: r
        })
    });
}
function ec(e) {
    let { onCardInfoChange: t, infoNotice: n } = e,
        r = (0, o.e7)([w.Z], () => w.Z.error);
    return (0, a.jsxs)('div', {
        className: q.body,
        children: [
            null != n &&
                (0, a.jsx)(c.FormErrorBlock, {
                    className: q.infoNotice,
                    backgroundColor: c.FormErrorBlockColors.BACKGROUND_TERTIARY,
                    children: n
                }),
            (0, a.jsx)(y.j, {
                billingError: r,
                onCardInfoChange: t
            })
        ]
    });
}
function eu() {
    return (0, a.jsx)('div', {
        className: q.body,
        children: (0, a.jsx)(A.Z, {})
    });
}
function ed() {
    return (0, a.jsx)('div', {
        className: q.body,
        children: (0, a.jsx)(E.Z, {})
    });
}
function ep() {
    return (0, a.jsx)('div', {
        className: q.body,
        children: (0, a.jsx)(G.Z, {})
    });
}
function em() {
    let e = (0, o.e7)([D.Z], () => D.Z.isBusy),
        t = (0, o.e7)([w.Z], () => w.Z.stripePaymentMethod);
    return (0, a.jsx)(_.k, {
        className: q.body,
        stripePaymentMethod: t,
        submitting: e
    });
}
function eh(e) {
    let { billingAddressInfo: t, onBillingAddressChange: n, paymentSourceType: r } = e,
        l = (0, o.e7)([w.Z], () => w.Z.error);
    return (0, a.jsx)('div', {
        className: q.body,
        children: (0, a.jsx)(N.P, {
            billingAddressInfo: t,
            billingError: l,
            onBillingAddressChange: n,
            paymentSourceType: r
        })
    });
}
function eA() {
    return (0, a.jsx)(f.F, { className: q.body });
}
function eE(e) {
    return () => (null != w.Z.error && (0, m.fw)(), e());
}
function eN(e) {
    let { onPrimary: t, onBack: n, ...r } = e,
        l = t;
    null != t && (l = eE(t));
    let s = n;
    return (
        null != n && (s = eE(n)),
        (0, a.jsx)(S.Z, {
            ...r,
            onPrimary: l,
            onBack: s
        })
    );
}
function ef(e) {
    let { breadcrumbSteps: t } = e,
        { step: n, setStep: a, paymentSources: r, paymentSourceId: l, setPaymentSourceId: s, purchaseError: o, setPurchaseError: c, purchaseErrorBlockRef: u, paymentAuthenticationState: d } = (0, g.usePaymentContext)(),
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
        ey({
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
function ey(e) {
    let t,
        n,
        s,
        u,
        { paymentModalArgs: h, initialStep: A, prependSteps: E, appendSteps: N, onReturn: f, onComplete: y, onStepChange: _, breadcrumpSteps: P, currentBreadcrumpStep: C, header: D, analyticsLocation: j, hideBreadcrumbs: k = !1, usePaymentModalStep: B = !1, isEligibleForTrial: G = !1, allowDesktopRedirectPurchase: es = !1, toastContent: ei, overwriteSubscriptionPaymentSource: eE = !1 } = e,
        ef = {
            steps: [...E, ...X, ...N],
            methodType: V.He.CARD
        },
        ey = {
            steps: [...E, ...J, ...N],
            methodType: V.He.PAYMENT_REQUEST
        },
        e_ = {
            steps: [...E, ...$, ...N],
            methodType: V.He.PAYPAL
        },
        eP = {
            steps: [...E, ...ee, ...N],
            methodType: V.He.VENMO
        },
        eb = {
            steps: [...E, ...J, ...N]
        },
        eC = {
            steps: [...E, ...et, ...N],
            methodType: V.He.PRZELEWY24
        },
        eg = {
            steps: [...E, ...en, ...N],
            methodType: V.He.EPS
        },
        eT = {
            steps: [...E, ...ea, ...N],
            methodType: V.He.IDEAL
        },
        eI = {
            steps: [...E, ...er, ...N],
            methodType: V.He.CASH_APP
        },
        [eS, ev] = r.useState(A),
        [ex, eR] = r.useState(null),
        [eL, eM] = r.useState(!1),
        [eO, eD] = r.useState(
            (function (e) {
                switch (e) {
                    case T.h8.CREDIT_CARD_INFORMATION:
                        return ef;
                    case T.h8.CASH_APP_INFORMATION:
                        return eI;
                    default:
                        return { steps: [T.h8.ADD_PAYMENT_STEPS] };
                }
            })(A)
        ),
        { stripe: ew } = (0, g.usePaymentContext)(),
        ej = (0, o.e7)([w.Z], () => w.Z.redirectedPaymentSourceId),
        eZ = (0, o.e7)([W.Z], () => W.Z.cashAppPayComponent),
        ek = {
            completeSteps: e5,
            setIsSubmittingCurrentStep: h.setIsSubmittingCurrentStep
        },
        eH = r.useRef(ek);
    function eY(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        eR(null),
            ev(e),
            t &&
                _({
                    currentStep: eS,
                    toStep: e
                });
    }
    r.useEffect(() => {
        eH.current = ek;
    }),
        r.useEffect(() => {
            let { completeSteps: e, setIsSubmittingCurrentStep: t } = eH.current;
            (() => {
                if (null == ej) return;
                let n = Z.Z.getPaymentSource(ej);
                if (null != n) e(n), t(!1);
            })();
        }, [ej]);
    let { setPaymentSourceId: eB, creditCardState: eF, setCreditCardState: eU, tokenState: eW, setTokenState: eG, isSubmittingCurrentStep: eV, billingAddressState: eQ, setBillingAddressState: eq, setIsSubmittingCurrentStep: eK, hasRedirectURL: ez, setHasRedirectURL: eJ, braintreeEmail: eX, braintreeNonce: e$, venmoUsername: e0, adyenPaymentData: e1, isAuthenticating: e2, epsBankState: e8, setEpsBankState: e4, idealBankState: e7, setIdealBankState: e6, p24BankState: e3, setP24BankState: e9 } = h;
    function e5(e) {
        var t;
        eB(e.id), (t = e), (0, c.showToast)((0, c.createToast)(void 0 !== ei ? ei : Q.intl.string(Q.t['VJPg+v']), c.ToastType.SUCCESS, { position: c.ToastPosition.BOTTOM })), y(eS, t), eY(A, !1);
    }
    let te = (0, x.q1)().enabled && es,
        tt = (0, R.a)().enabled && es,
        tn = !(0, H.isDesktop)() || tt,
        ta = r.useRef(null),
        tr = () => {
            null != ta.current && ta.current.show();
        };
    switch (eS) {
        case T.h8.ATTEMPT_GOOGLE_PAY:
        case T.h8.PAYMENT_TYPE:
            let tl = (e) => {
                    switch (e) {
                        case V.He.CARD:
                            te ? eY(T.h8.AWAITING_BROWSER_CHECKOUT) : (eD(ef), eY(T.h8.CREDIT_CARD_INFORMATION));
                            break;
                        case V.He.PAYPAL:
                            eD(e_), eY(T.h8.PAYPAL_INFORMATION);
                            break;
                        case V.He.VENMO:
                            eD(eP), eY(T.h8.VENMO_INFORMATION);
                            break;
                        case V.He.PAYMENT_REQUEST:
                            tt ? eY(T.h8.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY) : (eD(ey), eY(T.h8.PAYMENT_REQUEST_INFORMATION));
                            break;
                        case V.He.PRZELEWY24:
                            eD(eC), eY(T.h8.PRZELEWY24_INFORMATION);
                            break;
                        case V.He.EPS:
                            eD(eg), eY(T.h8.EPS_INFORMATION);
                            break;
                        case V.He.IDEAL:
                            eD(eT), eY(T.h8.IDEAL_INFORMATION);
                            break;
                        case V.He.CASH_APP:
                            eD(eI), eY(T.h8.CASH_APP_INFORMATION);
                            break;
                        case V.He.GIROPAY:
                        case V.He.PAYSAFE_CARD:
                        case V.He.GCASH:
                        case V.He.GRABPAY_MY:
                        case V.He.MOMO_WALLET:
                        case V.He.KAKAOPAY:
                        case V.He.GOPAY_WALLET:
                        case V.He.BANCONTACT:
                            eD({
                                steps: [...E, ...el, ...N],
                                methodType: e
                            }),
                                eY(T.h8.ADDRESS);
                    }
                    null != w.Z.error && (0, m.fw)();
                },
                ts = (e, t) => {
                    eq((e) => ({
                        ...e,
                        info: t
                    })),
                        eD(ey),
                        e5(e);
                },
                ti = () => {
                    eD(eb), eY(T.h8.PAYMENT_TYPE);
                },
                to = async (e) => {
                    if (((0, m.Xt)(e), null == e)) {
                        ti();
                        return;
                    }
                    try {
                        let t = await (0, d.i6)(e, void 0, j),
                            { billingAddressInfo: n } = (0, Y.az)(e);
                        ts(t, n);
                    } catch (e) {}
                };
            if (eS === T.h8.ATTEMPT_GOOGLE_PAY) {
                (t = (0, a.jsx)(M.t, {
                    onChooseType: tl,
                    onStripePaymentMethodReceived: to,
                    onPaymentRequestFailure: () => {
                        tl(V.He.CARD), eR(Q.intl.string(Q.t.Zj2xQ0));
                    },
                    onValidPaymentRequest: () => eM(!0),
                    paymentRequestRef: ta
                })),
                    (n = (0, a.jsx)(eN, {
                        onBack: () => eY(T.h8.PAYMENT_TYPE),
                        primaryCTA: S.Z.CTAType.CONTINUE,
                        primaryText: Q.intl.string(Q.t.wnVVr6),
                        onPrimary: () => tr(),
                        primaryDisabled: !eL
                    }));
                break;
            }
            (t = (0, a.jsx)(eo, {
                onChooseType: tl,
                onStripePaymentMethodReceived: to,
                allowStripeRequestPayments: tn,
                isEligibleForTrial: G
            })),
                (n = (0, a.jsx)(eN, { onBack: f }));
            break;
        case T.h8.CREDIT_CARD_INFORMATION:
            let tc = async (e) => {
                eK(!0);
                try {
                    let t = await (0, d.qv)(ew, e);
                    eG({ token: t }), eY(T.h8.ADDRESS);
                } catch (e) {
                    var t;
                    z.error(null !== (t = e.message) && void 0 !== t ? t : JSON.stringify(e));
                } finally {
                    eK(!1);
                }
            };
            (t = (0, a.jsx)(ec, {
                infoNotice: ex,
                onCardInfoChange: (e, t) => {
                    eU({
                        info: e,
                        isValid: t
                    }),
                        eq((t) => ({
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
                        return (0, a.jsx)(eN, {
                            onBack: () => eY(T.h8.PAYMENT_TYPE),
                            primaryCTA: S.Z.CTAType.CONTINUE,
                            primaryType: 'submit',
                            primaryText: Q.intl.string(Q.t.PDTjLC),
                            primarySubmitting: eV,
                            primaryDisabled: !eF.isValid,
                            onPrimary: () => tc(t)
                        });
                    }
                }));
            break;
        case T.h8.AWAITING_BROWSER_CHECKOUT:
        case T.h8.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
            (t = (0, a.jsx)('div', {
                className: q.body,
                children: (0, a.jsx)(L.M, {
                    step: eS,
                    onPurchaseComplete: () => y(eS),
                    onHandoffFailure: () => {
                        eD(ef), eY(T.h8.CREDIT_CARD_INFORMATION);
                    }
                })
            })),
                (n = (0, a.jsx)(L.a, {
                    onPrimaryClick: () => {
                        eD(ef), eY(T.h8.CREDIT_CARD_INFORMATION);
                    },
                    onBackClick: () => {
                        eD(eb), eY(T.h8.PAYMENT_TYPE);
                    }
                }));
            break;
        case T.h8.EPS_INFORMATION:
            (t = (0, a.jsx)(b.Z, {
                type: V.He.EPS,
                onAccountHolderNameChange: (e) =>
                    eq({
                        info: {
                            ...eQ.info,
                            name: e
                        },
                        isValid: eQ.isValid
                    }),
                onEPSBankChange: (e) => e4(e),
                epsBankValue: e8,
                billingAddressInfo: eQ.info
            })),
                (n = (0, a.jsx)(eN, {
                    onBack: () => eY(T.h8.PAYMENT_TYPE),
                    primaryCTA: S.Z.CTAType.CONTINUE,
                    primaryText: Q.intl.string(Q.t.PDTjLC),
                    primaryDisabled: void 0 === e8 || '' === e8 || '' === eQ.info.name,
                    onPrimary: () => eY(T.h8.ADDRESS)
                }));
            break;
        case T.h8.IDEAL_INFORMATION:
            (t = (0, a.jsx)(b.Z, {
                type: V.He.IDEAL,
                onAccountHolderNameChange: (e) =>
                    eq({
                        info: {
                            ...eQ.info,
                            name: e
                        },
                        isValid: eQ.isValid
                    }),
                onIdealBankChange: (e) => e6(e),
                idealBankValue: e7,
                billingAddressInfo: eQ.info
            })),
                (n = (0, a.jsx)(eN, {
                    onBack: () => eY(T.h8.PAYMENT_TYPE),
                    primaryCTA: S.Z.CTAType.CONTINUE,
                    primaryText: Q.intl.string(Q.t.PDTjLC),
                    primaryDisabled: void 0 === e7 || '' === e7 || '' === eQ.info.name,
                    onPrimary: () => eY(T.h8.ADDRESS)
                }));
            break;
        case T.h8.PRZELEWY24_INFORMATION:
            (t = (0, a.jsx)(b.Z, {
                type: V.He.PRZELEWY24,
                onNameChange: (e) =>
                    eq({
                        info: {
                            ...eQ.info,
                            name: e
                        },
                        isValid: eQ.isValid
                    }),
                onEmailChange: (e) =>
                    eq({
                        info: {
                            ...eQ.info,
                            email: e
                        },
                        isValid: eQ.isValid
                    }),
                onP24BankChange: (e) => {
                    e9(e);
                },
                p24BankValue: e3,
                billingAddressInfo: eQ.info
            })),
                (n = (0, a.jsx)(eN, {
                    onBack: () => eY(T.h8.PAYMENT_TYPE),
                    primaryCTA: S.Z.CTAType.CONTINUE,
                    primaryText: Q.intl.string(Q.t.PDTjLC),
                    primaryDisabled: void 0 === eQ.info.name || '' === eQ.info.name || void 0 === eQ.info.email || '' === eQ.info.email || void 0 === e3 || '' === e3,
                    onPrimary: () => eY(T.h8.ADDRESS)
                }));
            break;
        case T.h8.PAYPAL_INFORMATION:
            let tu = 0 !== eX.length && null != e$;
            (t = (0, a.jsx)(eu, {})),
                (n = (0, a.jsx)(eN, {
                    onBack: () => eY(T.h8.PAYMENT_TYPE),
                    primaryCTA: S.Z.CTAType.CONTINUE,
                    primaryText: tu ? Q.intl.string(Q.t.PDTjLC) : Q.intl.string(Q.t.Djzd7O),
                    onPrimary: () => (tu ? eY(T.h8.ADDRESS) : (0, p.i0)())
                }));
            break;
        case T.h8.VENMO_INFORMATION:
            let td = 0 !== e0.length && null != e$;
            (t = (0, a.jsx)(ed, {})),
                (n = (0, a.jsx)(eN, {
                    onBack: () => eY(T.h8.PAYMENT_TYPE),
                    primaryCTA: S.Z.CTAType.CONTINUE,
                    primaryText: td ? Q.intl.string(Q.t.PDTjLC) : Q.intl.string(Q.t['4KoTLC']),
                    onPrimary: () => (td ? eY(T.h8.ADDRESS) : (0, p.og)())
                }));
            break;
        case T.h8.PAYMENT_REQUEST_INFORMATION:
            (t = (0, a.jsx)(em, {})), (n = (0, a.jsx)(eN, { onBack: () => eY(T.h8.PAYMENT_TYPE) }));
            break;
        case T.h8.CASH_APP_INFORMATION:
            let tp = null != e1;
            (t = (0, a.jsx)(ep, {})),
                (n = (0, a.jsx)(eN, {
                    onBack: () => eY(T.h8.PAYMENT_TYPE),
                    primaryCTA: S.Z.CTAType.CONTINUE,
                    primaryText: tp ? Q.intl.string(Q.t.PDTjLC) : Q.intl.string(Q.t['9ALP8/']),
                    onPrimary: () => (tp ? eY(T.h8.ADDRESS) : (0, U.cp)()),
                    primaryDisabled: !(null != eZ)
                }));
            break;
        case T.h8.ADDRESS:
            let tm = async () => {
                eK(!0);
                let e = eO.methodType;
                switch (e) {
                    case V.He.CARD:
                        try {
                            let e = await (0, d.f0)(ew, eW.token, eQ.info, j);
                            e5(e);
                        } catch {}
                        break;
                    case V.He.VENMO:
                    case V.He.PAYPAL:
                        try {
                            i()(null != e$, 'Missing braintreeNonce');
                            let e = await (0, d.lP)(e$, eQ.info, j);
                            e5(e);
                        } catch {}
                        break;
                    case V.He.EPS:
                        try {
                            let e = await (0, d.YQ)(ew, e8, eQ.info, j);
                            e5(e);
                        } catch (e) {
                            z.warn(e);
                        }
                        break;
                    case V.He.IDEAL:
                        try {
                            let e = await (0, d.aN)(ew, e7, eQ.info, j);
                            e5(e);
                        } catch (e) {
                            z.warn(e);
                        }
                        break;
                    case V.He.PRZELEWY24:
                        try {
                            if (void 0 === e3) throw (0, d.SQ)('Bank required for Przelewy24');
                            let e = await (0, d.pF)(ew, { p24Bank: e3 }, eQ.info, j);
                            e5(e);
                        } catch {}
                        break;
                    case V.He.PAYSAFE_CARD:
                    case V.He.GRABPAY_MY:
                        try {
                            let t = await (0, d.sF)(eQ.info, e, j);
                            e5(t);
                        } catch {}
                        break;
                    case V.He.GCASH:
                    case V.He.MOMO_WALLET:
                    case V.He.KAKAOPAY:
                    case V.He.GOPAY_WALLET:
                        try {
                            let { redirectConfirmation: t } = await (0, d.Dk)(eQ.info, e, j);
                            eJ(t);
                        } catch {}
                        break;
                    case V.He.GIROPAY:
                    case V.He.BANCONTACT:
                        try {
                            let t = await (0, d.GV)(ew, eQ.info, e, j);
                            e5(t);
                        } catch {}
                        break;
                    case V.He.CASH_APP:
                        try {
                            i()(null != e1, 'Missing adyenPaymentData');
                            let { paymentSource: t } = await (0, d.Dk)(eQ.info, e, j, e1, eE);
                            i()(null != t, 'Cash App Pay Payment Source missing'), e5(t);
                        } catch {}
                        break;
                    default:
                        throw Error('unknown step not handled');
                }
                !ez && eK(!1);
            };
            switch (eO.methodType) {
                case V.He.CARD:
                    (u = T.h8.CREDIT_CARD_INFORMATION), (s = V.He.CARD);
                    break;
                case V.He.PAYPAL:
                    (u = T.h8.PAYPAL_INFORMATION), (s = V.He.PAYPAL);
                    break;
                case V.He.VENMO:
                    (u = T.h8.VENMO_INFORMATION), (s = V.He.VENMO);
                    break;
                case V.He.GIROPAY:
                    (u = T.h8.PAYMENT_TYPE), (s = V.He.GIROPAY);
                    break;
                case V.He.PAYSAFE_CARD:
                case V.He.GCASH:
                case V.He.GRABPAY_MY:
                case V.He.MOMO_WALLET:
                case V.He.KAKAOPAY:
                case V.He.GOPAY_WALLET:
                case V.He.BANCONTACT:
                    (u = T.h8.PAYMENT_TYPE), (s = eO.methodType);
                    break;
                case V.He.EPS:
                    (u = T.h8.EPS_INFORMATION), (s = V.He.EPS);
                    break;
                case V.He.IDEAL:
                    (u = T.h8.IDEAL_INFORMATION), (s = V.He.IDEAL);
                    break;
                case V.He.PRZELEWY24:
                    (u = T.h8.PRZELEWY24_INFORMATION), (s = V.He.PRZELEWY24);
                    break;
                case V.He.CASH_APP:
                    (u = T.h8.CASH_APP_INFORMATION), (s = V.He.CASH_APP);
                    break;
                default:
                    (u = T.h8.PAYMENT_TYPE), (s = V.He.CARD);
            }
            (t = (0, a.jsx)(eh, {
                billingAddressInfo: eQ.info,
                onBillingAddressChange: (e, t) => {
                    eq({
                        info: {
                            ...eQ.info,
                            ...e
                        },
                        isValid: t
                    });
                },
                paymentSourceType: s
            })),
                (n = (0, a.jsx)(eN, {
                    onBack: () => eY(u),
                    primaryCTA: S.Z.CTAType.CONTINUE,
                    primaryText: Q.intl.string(Q.t.PDTjLC),
                    primarySubmitting: eV,
                    primaryDisabled: !eQ.isValid || e2,
                    onPrimary: tm
                }));
            break;
        case T.h8.AWAITING_AUTHENTICATION:
            t = (0, a.jsx)(eA, {});
            break;
        default:
            throw Error('Unexpected step: '.concat(eS));
    }
    let th = (0, a.jsx)(c.Sequencer, {
            className: K.sequencer,
            staticClassName: K.sequencerStatic,
            animatedNodeClassName: K.sequencerAnimatedNode,
            fillParent: !0,
            step: eS,
            steps: eO.steps,
            sideMargin: 20,
            children: t
        }),
        tA = eS === T.h8.PAYMENT_TYPE && 0 === E.length ? null : n;
    return B
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  G &&
                      (0, a.jsx)(I.Z, {
                          className: q.paymentModalBreadcrumbs,
                          isEligibleForTrial: G
                      }),
                  (0, a.jsxs)(v.C3, {
                      children: [(0, a.jsx)(O.Z, { className: q.paymentModalError }), th]
                  }),
                  (0, a.jsx)(v.O3, { children: tA })
              ]
          })
        : (0, a.jsx)(F.Z, {
              steps: null != P ? P : eO.steps,
              currentStep: null != C ? C : eS,
              paymentError: h.paymentError,
              header: D,
              hideBreadcrumbs: k,
              body: th,
              footer: tA
          });
}
function e_(e) {
    let {
        defaultPaymentSourceId: t,
        paymentSources: n,
        hasFetchedPaymentSources: a
    } = (0, o.cj)([Z.Z], () => ({
        defaultPaymentSourceId: void 0 !== e ? e : Z.Z.defaultPaymentSourceId,
        paymentSources: Z.Z.paymentSources,
        hasFetchedPaymentSources: Z.Z.hasFetchedPaymentSources
    }));
    (0, P.Z)(() => {
        null == W.Z.cashAppPayComponent && (0, U.eI)(), (0, p.eI)(), !a && (0, d.tZ)();
    });
    let [l, s] = r.useState(t);
    null != t && null == l && s(t);
    let [i, c] = r.useState(() => ({
            info: es,
            isValid: !1
        })),
        [h, A] = r.useState(() => ({
            info: ei,
            isValid: !1
        })),
        [E, N] = r.useState(''),
        [f, y] = r.useState(''),
        [_, b] = r.useState(''),
        [C, g] = r.useState(() => ({ token: null })),
        [T, I, S, v, x] = (0, o.Wu)([w.Z], () => [w.Z.braintreeEmail, w.Z.braintreeNonce, w.Z.error, w.Z.venmoUsername, w.Z.adyenPaymentData]),
        [R, L] = (0, o.Wu)([j.Z], () => [j.Z.error, j.Z.isAwaitingAuthentication]);
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
        [D, H] = r.useState(!1),
        [Y, F] = r.useState(null),
        G = r.useRef(null),
        V = (0, o.e7)([j.Z], () => j.Z.isAwaitingAuthentication),
        [Q, q] = (0, o.Wu)([k.Z], () => [k.Z.purchaseTokenAuthState, k.Z.purchaseTokenHash]);
    return (
        r.useEffect(() => {
            null != Y && null != G.current && G.current.scrollIntoView({ behavior: 'smooth' });
        }, [Y]),
        {
            paymentSources: n,
            paymentSourceId: l,
            hasFetchedPaymentSources: a,
            setPaymentSourceId: s,
            creditCardState: i,
            setCreditCardState: c,
            tokenState: C,
            setTokenState: g,
            billingAddressState: h,
            setBillingAddressState: A,
            isSubmittingCurrentStep: M,
            setIsSubmittingCurrentStep: O,
            hasRedirectURL: D,
            setHasRedirectURL: H,
            braintreeEmail: T,
            braintreeNonce: I,
            venmoUsername: v,
            adyenPaymentData: x,
            paymentError: null != R ? R : S,
            paymentAuthenticationState: L ? B.wr.PENDING : null != R ? B.wr.ERROR : B.wr.NONE,
            purchaseError: Y,
            setPurchaseError: F,
            purchaseErrorBlockRef: G,
            isAuthenticating: V,
            purchaseTokenAuthState: Q,
            purchaseTokenHash: q,
            epsBankState: f,
            setEpsBankState: y,
            idealBankState: _,
            setIdealBankState: b,
            p24BankState: E,
            setP24BankState: N
        }
    );
}
