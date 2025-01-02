n.d(t, {
    fL: function () {
        return ey;
    },
    kx: function () {
        return eN;
    },
    vP: function () {
        return ef;
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
    P = n(870630),
    b = n(710845),
    C = n(563132),
    g = n(409813),
    T = n(51499),
    I = n(586585),
    S = n(614277),
    v = n(737143),
    x = n(926841),
    R = n(35248),
    L = n(439021),
    M = n(698708),
    O = n(351402),
    D = n(975060),
    w = n(505649),
    j = n(853872),
    Z = n(882712),
    k = n(358085),
    H = n(622999),
    Y = n(176919),
    B = n(185139),
    F = n(559725),
    U = n(439041),
    W = n(850228),
    G = n(231338),
    V = n(388032),
    Q = n(802543),
    q = n(719919);
let K = new b.Z('AddPaymentStep.tsx'),
    z = [g.h8.PAYMENT_TYPE],
    J = [g.h8.PAYMENT_TYPE, g.h8.CREDIT_CARD_INFORMATION, g.h8.ADDRESS],
    X = [g.h8.PAYMENT_TYPE, g.h8.PAYPAL_INFORMATION, g.h8.ADDRESS],
    $ = [g.h8.PAYMENT_TYPE, g.h8.VENMO_INFORMATION, g.h8.ADDRESS];
g.h8.PAYMENT_TYPE, g.h8.PAYMENT_REQUEST_INFORMATION, g.h8.ADDRESS;
let ee = [g.h8.PAYMENT_TYPE, g.h8.PRZELEWY24_INFORMATION, g.h8.ADDRESS],
    et = [g.h8.PAYMENT_TYPE, g.h8.EPS_INFORMATION, g.h8.ADDRESS],
    en = [g.h8.PAYMENT_TYPE, g.h8.IDEAL_INFORMATION, g.h8.ADDRESS],
    ea = [g.h8.PAYMENT_TYPE, g.h8.CASH_APP_INFORMATION, g.h8.ADDRESS],
    er = [g.h8.PAYMENT_TYPE, g.h8.ADDRESS],
    el = {
        name: '',
        cardNumber: '',
        expirationDate: '',
        cvc: ''
    },
    es = {
        email: '',
        name: '',
        country: '',
        line1: '',
        line2: '',
        city: '',
        postalCode: '',
        state: ''
    };
function ei(e) {
    let { onChooseType: t, onStripePaymentMethodReceived: n, isEligibleForTrial: r, allowStripeRequestPayments: l } = e;
    return (0, a.jsx)('div', {
        className: Q.body,
        children: (0, a.jsx)(h.Z, {
            onChooseType: t,
            allowStripeRequestPayments: l,
            onStripePaymentMethodReceived: n,
            isEligibleForTrial: r
        })
    });
}
function eo(e) {
    let { onCardInfoChange: t, infoNotice: n } = e,
        r = (0, o.e7)([D.Z], () => D.Z.error);
    return (0, a.jsxs)('div', {
        className: Q.body,
        children: [
            null != n &&
                (0, a.jsx)(c.FormErrorBlock, {
                    className: Q.infoNotice,
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
function ec() {
    return (0, a.jsx)('div', {
        className: Q.body,
        children: (0, a.jsx)(A.Z, {})
    });
}
function eu() {
    return (0, a.jsx)('div', {
        className: Q.body,
        children: (0, a.jsx)(E.Z, {})
    });
}
function ed() {
    return (0, a.jsx)('div', {
        className: Q.body,
        children: (0, a.jsx)(W.Z, {})
    });
}
function ep() {
    let e = (0, o.e7)([O.Z], () => O.Z.isBusy),
        t = (0, o.e7)([D.Z], () => D.Z.stripePaymentMethod);
    return (0, a.jsx)(_.k, {
        className: Q.body,
        stripePaymentMethod: t,
        submitting: e
    });
}
function em(e) {
    let { billingAddressInfo: t, onBillingAddressChange: n, paymentSourceType: r } = e,
        l = (0, o.e7)([D.Z], () => D.Z.error);
    return (0, a.jsx)('div', {
        className: Q.body,
        children: (0, a.jsx)(N.P, {
            billingAddressInfo: t,
            billingError: l,
            onBillingAddressChange: n,
            paymentSourceType: r
        })
    });
}
function eh() {
    return (0, a.jsx)(f.F, { className: Q.body });
}
function eA(e) {
    return () => (null != D.Z.error && (0, m.fw)(), e());
}
function eE(e) {
    let { onPrimary: t, onBack: n, ...r } = e,
        l = t;
    null != t && (l = eA(t));
    let s = n;
    return (
        null != n && (s = eA(n)),
        (0, a.jsx)(I.Z, {
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
            ...ey(),
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
        ef({
            paymentModalArgs: p,
            initialStep: g.h8.PAYMENT_TYPE,
            prependSteps: [g.h8.PROMOTION_INFO],
            appendSteps: [g.h8.REVIEW, g.h8.CONFIRM],
            breadcrumpSteps: t,
            currentBreadcrumpStep: n,
            onReturn: () => a(g.h8.REVIEW),
            onComplete: () => a(g.h8.REVIEW),
            onStepChange: () => {}
        })
    );
}
function ef(e) {
    let t,
        n,
        s,
        u,
        { paymentModalArgs: h, initialStep: A, prependSteps: E, appendSteps: N, onReturn: f, onComplete: y, onStepChange: _, breadcrumpSteps: b, currentBreadcrumpStep: O, header: w, analyticsLocation: Z, hideBreadcrumbs: Y = !1, usePaymentModalStep: W = !1, isEligibleForTrial: el = !1, allowDesktopRedirectPurchase: es = !1, toastContent: eA, overwriteSubscriptionPaymentSource: eN = !1 } = e,
        ef = {
            steps: [...E, ...J, ...N],
            methodType: G.He.CARD
        },
        ey = {
            steps: [...E, ...z, ...N],
            methodType: G.He.PAYMENT_REQUEST
        },
        e_ = {
            steps: [...E, ...X, ...N],
            methodType: G.He.PAYPAL
        },
        eP = {
            steps: [...E, ...$, ...N],
            methodType: G.He.VENMO
        },
        eb = {
            steps: [...E, ...z, ...N]
        },
        eC = {
            steps: [...E, ...ee, ...N],
            methodType: G.He.PRZELEWY24
        },
        eg = {
            steps: [...E, ...et, ...N],
            methodType: G.He.EPS
        },
        eT = {
            steps: [...E, ...en, ...N],
            methodType: G.He.IDEAL
        },
        eI = {
            steps: [...E, ...ea, ...N],
            methodType: G.He.CASH_APP
        },
        [eS, ev] = r.useState(A),
        [ex, eR] = r.useState(null),
        [eL, eM] = r.useState(!1),
        [eO, eD] = r.useState(
            (function (e) {
                switch (e) {
                    case g.h8.CREDIT_CARD_INFORMATION:
                        return ef;
                    case g.h8.CASH_APP_INFORMATION:
                        return eI;
                    default:
                        return { steps: [g.h8.ADD_PAYMENT_STEPS] };
                }
            })(A)
        ),
        { stripe: ew } = (0, C.usePaymentContext)(),
        ej = (0, o.e7)([D.Z], () => D.Z.redirectedPaymentSourceId),
        eZ = (0, o.e7)([U.Z], () => U.Z.cashAppPayComponent);
    function ek(e) {
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
        (() => {
            if (null == ej) return;
            let e = j.Z.getPaymentSource(ej);
            if (null != e) e3(e), eQ(!1);
        })();
    }, [ej]);
    let { setPaymentSourceId: eH, creditCardState: eY, setCreditCardState: eB, tokenState: eF, setTokenState: eU, isSubmittingCurrentStep: eW, billingAddressState: eG, setBillingAddressState: eV, setIsSubmittingCurrentStep: eQ, hasRedirectURL: eq, setHasRedirectURL: eK, braintreeEmail: ez, braintreeNonce: eJ, venmoUsername: eX, adyenPaymentData: e$, isAuthenticating: e0, epsBankState: e1, setEpsBankState: e2, idealBankState: e8, setIdealBankState: e4, p24BankState: e7, setP24BankState: e6 } = h;
    function e3(e) {
        var t;
        eH(e.id), (t = e), (0, c.showToast)((0, c.createToast)(void 0 !== eA ? eA : V.intl.string(V.t['VJPg+v']), c.ToastType.SUCCESS, { position: c.ToastPosition.BOTTOM })), y(eS, t), ek(A, !1);
    }
    let e9 = (0, v.q1)().enabled && es,
        e5 = (0, x.a)().enabled && es,
        te = !(0, k.isDesktop)() || e5,
        tt = r.useRef(null),
        tn = () => {
            null != tt.current && tt.current.show();
        };
    switch (eS) {
        case g.h8.ATTEMPT_GOOGLE_PAY:
        case g.h8.PAYMENT_TYPE:
            let ta = (e) => {
                    switch (e) {
                        case G.He.CARD:
                            e9 ? ek(g.h8.AWAITING_BROWSER_CHECKOUT) : (eD(ef), ek(g.h8.CREDIT_CARD_INFORMATION));
                            break;
                        case G.He.PAYPAL:
                            eD(e_), ek(g.h8.PAYPAL_INFORMATION);
                            break;
                        case G.He.VENMO:
                            eD(eP), ek(g.h8.VENMO_INFORMATION);
                            break;
                        case G.He.PAYMENT_REQUEST:
                            e5 ? ek(g.h8.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY) : (eD(ey), ek(g.h8.PAYMENT_REQUEST_INFORMATION));
                            break;
                        case G.He.PRZELEWY24:
                            eD(eC), ek(g.h8.PRZELEWY24_INFORMATION);
                            break;
                        case G.He.EPS:
                            eD(eg), ek(g.h8.EPS_INFORMATION);
                            break;
                        case G.He.IDEAL:
                            eD(eT), ek(g.h8.IDEAL_INFORMATION);
                            break;
                        case G.He.CASH_APP:
                            eD(eI), ek(g.h8.CASH_APP_INFORMATION);
                            break;
                        case G.He.GIROPAY:
                        case G.He.PAYSAFE_CARD:
                        case G.He.GCASH:
                        case G.He.GRABPAY_MY:
                        case G.He.MOMO_WALLET:
                        case G.He.KAKAOPAY:
                        case G.He.GOPAY_WALLET:
                        case G.He.BANCONTACT:
                            eD({
                                steps: [...E, ...er, ...N],
                                methodType: e
                            }),
                                ek(g.h8.ADDRESS);
                    }
                    null != D.Z.error && (0, m.fw)();
                },
                tr = (e, t) => {
                    eV((e) => ({
                        ...e,
                        info: t
                    })),
                        eD(ey),
                        e3(e);
                },
                tl = () => {
                    eD(eb), ek(g.h8.PAYMENT_TYPE);
                },
                ts = async (e) => {
                    if (((0, m.Xt)(e), null == e)) {
                        tl();
                        return;
                    }
                    try {
                        let t = await (0, d.i6)(e, void 0, Z),
                            { billingAddressInfo: n } = (0, H.az)(e);
                        tr(t, n);
                    } catch (e) {}
                };
            if (eS === g.h8.ATTEMPT_GOOGLE_PAY) {
                (t = (0, a.jsx)(L.t, {
                    onChooseType: ta,
                    onStripePaymentMethodReceived: ts,
                    onPaymentRequestFailure: () => {
                        ta(G.He.CARD), eR(V.intl.string(V.t.Zj2xQ0));
                    },
                    onValidPaymentRequest: () => eM(!0),
                    paymentRequestRef: tt
                })),
                    (n = (0, a.jsx)(eE, {
                        onBack: () => ek(g.h8.PAYMENT_TYPE),
                        primaryCTA: I.Z.CTAType.CONTINUE,
                        primaryText: V.intl.string(V.t.wnVVr6),
                        onPrimary: () => tn(),
                        primaryDisabled: !eL
                    }));
                break;
            }
            (t = (0, a.jsx)(ei, {
                onChooseType: ta,
                onStripePaymentMethodReceived: ts,
                allowStripeRequestPayments: te,
                isEligibleForTrial: el
            })),
                (n = (0, a.jsx)(eE, { onBack: f }));
            break;
        case g.h8.CREDIT_CARD_INFORMATION:
            let ti = async (e) => {
                eQ(!0);
                try {
                    let t = await (0, d.qv)(ew, e);
                    eU({ token: t }), ek(g.h8.ADDRESS);
                } catch (e) {
                    var t;
                    K.error(null !== (t = e.message) && void 0 !== t ? t : JSON.stringify(e));
                } finally {
                    eQ(!1);
                }
            };
            (t = (0, a.jsx)(eo, {
                infoNotice: ex,
                onCardInfoChange: (e, t) => {
                    eB({
                        info: e,
                        isValid: t
                    }),
                        eV((t) => ({
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
                        return (0, a.jsx)(eE, {
                            onBack: () => ek(g.h8.PAYMENT_TYPE),
                            primaryCTA: I.Z.CTAType.CONTINUE,
                            primaryType: 'submit',
                            primaryText: V.intl.string(V.t.PDTjLC),
                            primarySubmitting: eW,
                            primaryDisabled: !eY.isValid,
                            onPrimary: () => ti(t)
                        });
                    }
                }));
            break;
        case g.h8.AWAITING_BROWSER_CHECKOUT:
        case g.h8.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
            (t = (0, a.jsx)('div', {
                className: Q.body,
                children: (0, a.jsx)(R.M, {
                    step: eS,
                    onPurchaseComplete: () => y(eS),
                    onHandoffFailure: () => {
                        eD(ef), ek(g.h8.CREDIT_CARD_INFORMATION);
                    }
                })
            })),
                (n = (0, a.jsx)(R.a, {
                    onPrimaryClick: () => {
                        eD(ef), ek(g.h8.CREDIT_CARD_INFORMATION);
                    },
                    onBackClick: () => {
                        eD(eb), ek(g.h8.PAYMENT_TYPE);
                    }
                }));
            break;
        case g.h8.EPS_INFORMATION:
            (t = (0, a.jsx)(P.Z, {
                type: G.He.EPS,
                onAccountHolderNameChange: (e) =>
                    eV({
                        info: {
                            ...eG.info,
                            name: e
                        },
                        isValid: eG.isValid
                    }),
                onEPSBankChange: (e) => e2(e),
                epsBankValue: e1,
                billingAddressInfo: eG.info
            })),
                (n = (0, a.jsx)(eE, {
                    onBack: () => ek(g.h8.PAYMENT_TYPE),
                    primaryCTA: I.Z.CTAType.CONTINUE,
                    primaryText: V.intl.string(V.t.PDTjLC),
                    primaryDisabled: void 0 === e1 || '' === e1 || '' === eG.info.name,
                    onPrimary: () => ek(g.h8.ADDRESS)
                }));
            break;
        case g.h8.IDEAL_INFORMATION:
            (t = (0, a.jsx)(P.Z, {
                type: G.He.IDEAL,
                onAccountHolderNameChange: (e) =>
                    eV({
                        info: {
                            ...eG.info,
                            name: e
                        },
                        isValid: eG.isValid
                    }),
                onIdealBankChange: (e) => e4(e),
                idealBankValue: e8,
                billingAddressInfo: eG.info
            })),
                (n = (0, a.jsx)(eE, {
                    onBack: () => ek(g.h8.PAYMENT_TYPE),
                    primaryCTA: I.Z.CTAType.CONTINUE,
                    primaryText: V.intl.string(V.t.PDTjLC),
                    primaryDisabled: void 0 === e8 || '' === e8 || '' === eG.info.name,
                    onPrimary: () => ek(g.h8.ADDRESS)
                }));
            break;
        case g.h8.PRZELEWY24_INFORMATION:
            (t = (0, a.jsx)(P.Z, {
                type: G.He.PRZELEWY24,
                onNameChange: (e) =>
                    eV({
                        info: {
                            ...eG.info,
                            name: e
                        },
                        isValid: eG.isValid
                    }),
                onEmailChange: (e) =>
                    eV({
                        info: {
                            ...eG.info,
                            email: e
                        },
                        isValid: eG.isValid
                    }),
                onP24BankChange: (e) => {
                    e6(e);
                },
                p24BankValue: e7,
                billingAddressInfo: eG.info
            })),
                (n = (0, a.jsx)(eE, {
                    onBack: () => ek(g.h8.PAYMENT_TYPE),
                    primaryCTA: I.Z.CTAType.CONTINUE,
                    primaryText: V.intl.string(V.t.PDTjLC),
                    primaryDisabled: void 0 === eG.info.name || '' === eG.info.name || void 0 === eG.info.email || '' === eG.info.email || void 0 === e7 || '' === e7,
                    onPrimary: () => ek(g.h8.ADDRESS)
                }));
            break;
        case g.h8.PAYPAL_INFORMATION:
            let to = 0 !== ez.length && null != eJ;
            (t = (0, a.jsx)(ec, {})),
                (n = (0, a.jsx)(eE, {
                    onBack: () => ek(g.h8.PAYMENT_TYPE),
                    primaryCTA: I.Z.CTAType.CONTINUE,
                    primaryText: to ? V.intl.string(V.t.PDTjLC) : V.intl.string(V.t.Djzd7O),
                    onPrimary: () => (to ? ek(g.h8.ADDRESS) : (0, p.i0)())
                }));
            break;
        case g.h8.VENMO_INFORMATION:
            let tc = 0 !== eX.length && null != eJ;
            (t = (0, a.jsx)(eu, {})),
                (n = (0, a.jsx)(eE, {
                    onBack: () => ek(g.h8.PAYMENT_TYPE),
                    primaryCTA: I.Z.CTAType.CONTINUE,
                    primaryText: tc ? V.intl.string(V.t.PDTjLC) : V.intl.string(V.t['4KoTLC']),
                    onPrimary: () => (tc ? ek(g.h8.ADDRESS) : (0, p.og)())
                }));
            break;
        case g.h8.PAYMENT_REQUEST_INFORMATION:
            (t = (0, a.jsx)(ep, {})), (n = (0, a.jsx)(eE, { onBack: () => ek(g.h8.PAYMENT_TYPE) }));
            break;
        case g.h8.CASH_APP_INFORMATION:
            let tu = null != e$;
            (t = (0, a.jsx)(ed, {})),
                (n = (0, a.jsx)(eE, {
                    onBack: () => ek(g.h8.PAYMENT_TYPE),
                    primaryCTA: I.Z.CTAType.CONTINUE,
                    primaryText: tu ? V.intl.string(V.t.PDTjLC) : V.intl.string(V.t['9ALP8/']),
                    onPrimary: () => (tu ? ek(g.h8.ADDRESS) : (0, F.cp)()),
                    primaryDisabled: !(null != eZ)
                }));
            break;
        case g.h8.ADDRESS:
            let td = async () => {
                eQ(!0);
                let e = eO.methodType;
                switch (e) {
                    case G.He.CARD:
                        try {
                            let e = await (0, d.f0)(ew, eF.token, eG.info, Z);
                            e3(e);
                        } catch {}
                        break;
                    case G.He.VENMO:
                    case G.He.PAYPAL:
                        try {
                            i()(null != eJ, 'Missing braintreeNonce');
                            let e = await (0, d.lP)(eJ, eG.info, Z);
                            e3(e);
                        } catch {}
                        break;
                    case G.He.EPS:
                        try {
                            let e = await (0, d.YQ)(ew, e1, eG.info, Z);
                            e3(e);
                        } catch (e) {
                            K.warn(e);
                        }
                        break;
                    case G.He.IDEAL:
                        try {
                            let e = await (0, d.aN)(ew, e8, eG.info, Z);
                            e3(e);
                        } catch (e) {
                            K.warn(e);
                        }
                        break;
                    case G.He.PRZELEWY24:
                        try {
                            if (void 0 === e7) throw (0, d.SQ)('Bank required for Przelewy24');
                            let e = await (0, d.pF)(ew, { p24Bank: e7 }, eG.info, Z);
                            e3(e);
                        } catch {}
                        break;
                    case G.He.PAYSAFE_CARD:
                    case G.He.GRABPAY_MY:
                        try {
                            let t = await (0, d.sF)(eG.info, e, Z);
                            e3(t);
                        } catch {}
                        break;
                    case G.He.GCASH:
                    case G.He.MOMO_WALLET:
                    case G.He.KAKAOPAY:
                    case G.He.GOPAY_WALLET:
                        try {
                            let { redirectConfirmation: t } = await (0, d.Dk)(eG.info, e, Z);
                            eK(t);
                        } catch {}
                        break;
                    case G.He.GIROPAY:
                    case G.He.BANCONTACT:
                        try {
                            let t = await (0, d.GV)(ew, eG.info, e, Z);
                            e3(t);
                        } catch {}
                        break;
                    case G.He.CASH_APP:
                        try {
                            i()(null != e$, 'Missing adyenPaymentData');
                            let { paymentSource: t } = await (0, d.Dk)(eG.info, e, Z, e$, eN);
                            i()(null != t, 'Cash App Pay Payment Source missing'), e3(t);
                        } catch {}
                        break;
                    default:
                        throw Error('unknown step not handled');
                }
                !eq && eQ(!1);
            };
            switch (eO.methodType) {
                case G.He.CARD:
                    (u = g.h8.CREDIT_CARD_INFORMATION), (s = G.He.CARD);
                    break;
                case G.He.PAYPAL:
                    (u = g.h8.PAYPAL_INFORMATION), (s = G.He.PAYPAL);
                    break;
                case G.He.VENMO:
                    (u = g.h8.VENMO_INFORMATION), (s = G.He.VENMO);
                    break;
                case G.He.GIROPAY:
                    (u = g.h8.PAYMENT_TYPE), (s = G.He.GIROPAY);
                    break;
                case G.He.PAYSAFE_CARD:
                case G.He.GCASH:
                case G.He.GRABPAY_MY:
                case G.He.MOMO_WALLET:
                case G.He.KAKAOPAY:
                case G.He.GOPAY_WALLET:
                case G.He.BANCONTACT:
                    (u = g.h8.PAYMENT_TYPE), (s = eO.methodType);
                    break;
                case G.He.EPS:
                    (u = g.h8.EPS_INFORMATION), (s = G.He.EPS);
                    break;
                case G.He.IDEAL:
                    (u = g.h8.IDEAL_INFORMATION), (s = G.He.IDEAL);
                    break;
                case G.He.PRZELEWY24:
                    (u = g.h8.PRZELEWY24_INFORMATION), (s = G.He.PRZELEWY24);
                    break;
                case G.He.CASH_APP:
                    (u = g.h8.CASH_APP_INFORMATION), (s = G.He.CASH_APP);
                    break;
                default:
                    (u = g.h8.PAYMENT_TYPE), (s = G.He.CARD);
            }
            (t = (0, a.jsx)(em, {
                billingAddressInfo: eG.info,
                onBillingAddressChange: (e, t) => {
                    eV({
                        info: {
                            ...eG.info,
                            ...e
                        },
                        isValid: t
                    });
                },
                paymentSourceType: s
            })),
                (n = (0, a.jsx)(eE, {
                    onBack: () => ek(u),
                    primaryCTA: I.Z.CTAType.CONTINUE,
                    primaryText: V.intl.string(V.t.PDTjLC),
                    primarySubmitting: eW,
                    primaryDisabled: !eG.isValid || e0,
                    onPrimary: td
                }));
            break;
        case g.h8.AWAITING_AUTHENTICATION:
            t = (0, a.jsx)(eh, {});
            break;
        default:
            throw Error('Unexpected step: '.concat(eS));
    }
    let tp = (0, a.jsx)(c.Sequencer, {
            className: q.sequencer,
            staticClassName: q.sequencerStatic,
            animatedNodeClassName: q.sequencerAnimatedNode,
            fillParent: !0,
            step: eS,
            steps: eO.steps,
            sideMargin: 20,
            children: t
        }),
        tm = eS === g.h8.PAYMENT_TYPE && 0 === E.length ? null : n;
    return W
        ? (0, a.jsxs)(a.Fragment, {
              children: [
                  el &&
                      (0, a.jsx)(T.Z, {
                          className: Q.paymentModalBreadcrumbs,
                          isEligibleForTrial: el
                      }),
                  (0, a.jsxs)(S.C3, {
                      children: [(0, a.jsx)(M.Z, { className: Q.paymentModalError }), tp]
                  }),
                  (0, a.jsx)(S.O3, { children: tm })
              ]
          })
        : (0, a.jsx)(B.Z, {
              steps: null != b ? b : eO.steps,
              currentStep: null != O ? O : eS,
              paymentError: h.paymentError,
              header: w,
              hideBreadcrumbs: Y,
              body: tp,
              footer: tm
          });
}
function ey(e) {
    let {
        defaultPaymentSourceId: t,
        paymentSources: n,
        hasFetchedPaymentSources: a
    } = (0, o.cj)([j.Z], () => ({
        defaultPaymentSourceId: void 0 !== e ? e : j.Z.defaultPaymentSourceId,
        paymentSources: j.Z.paymentSources,
        hasFetchedPaymentSources: j.Z.hasFetchedPaymentSources
    }));
    r.useEffect(() => {
        null == U.Z.cashAppPayComponent && (0, F.eI)(), (0, p.eI)(), !a && (0, d.tZ)();
    }, []);
    let [l, s] = r.useState(t);
    null != t && null == l && s(t);
    let [i, c] = r.useState(() => ({
            info: el,
            isValid: !1
        })),
        [h, A] = r.useState(() => ({
            info: es,
            isValid: !1
        })),
        [E, N] = r.useState(''),
        [f, y] = r.useState(''),
        [_, P] = r.useState(''),
        [b, C] = r.useState(() => ({ token: null })),
        [g, T, I, S, v] = (0, o.Wu)([D.Z], () => [D.Z.braintreeEmail, D.Z.braintreeNonce, D.Z.error, D.Z.venmoUsername, D.Z.adyenPaymentData]),
        [x, R] = (0, o.Wu)([w.Z], () => [w.Z.error, w.Z.isAwaitingAuthentication]);
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
    let [L, M] = r.useState(!1),
        [O, k] = r.useState(!1),
        [H, B] = r.useState(null),
        W = r.useRef(null),
        G = (0, o.e7)([w.Z], () => w.Z.isAwaitingAuthentication),
        [V, Q] = (0, o.Wu)([Z.Z], () => [Z.Z.purchaseTokenAuthState, Z.Z.purchaseTokenHash]);
    return (
        r.useEffect(() => {
            null != H && null != W.current && W.current.scrollIntoView({ behavior: 'smooth' });
        }, [H]),
        {
            paymentSources: n,
            paymentSourceId: l,
            hasFetchedPaymentSources: a,
            setPaymentSourceId: s,
            creditCardState: i,
            setCreditCardState: c,
            tokenState: b,
            setTokenState: C,
            billingAddressState: h,
            setBillingAddressState: A,
            isSubmittingCurrentStep: L,
            setIsSubmittingCurrentStep: M,
            hasRedirectURL: O,
            setHasRedirectURL: k,
            braintreeEmail: g,
            braintreeNonce: T,
            venmoUsername: S,
            adyenPaymentData: v,
            paymentError: null != x ? x : I,
            paymentAuthenticationState: R ? Y.wr.PENDING : null != x ? Y.wr.ERROR : Y.wr.NONE,
            purchaseError: H,
            setPurchaseError: B,
            purchaseErrorBlockRef: W,
            isAuthenticating: G,
            purchaseTokenAuthState: V,
            purchaseTokenHash: Q,
            epsBankState: f,
            setEpsBankState: y,
            idealBankState: _,
            setIdealBankState: P,
            p24BankState: E,
            setP24BankState: N
        }
    );
}
