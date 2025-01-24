r.d(n, {
    fL: function () {
        return eS;
    },
    vP: function () {
        return eT;
    }
});
var i = r(47120);
var a = r(653041);
var o = r(411104);
var s = r(200651),
    l = r(192379),
    u = r(734530);
var c = r(512722),
    d = r.n(c),
    f = r(442837),
    p = r(481060),
    h = r(570140),
    _ = r(355467),
    m = r(873115),
    g = r(159351),
    E = r(801937),
    v = r(282164),
    y = r(915271),
    b = r(228666),
    I = r(723484),
    T = r(122192),
    S = r(296214),
    A = r(493773),
    C = r(870630),
    N = r(710845),
    R = r(563132),
    O = r(409813),
    D = r(51499),
    L = r(586585),
    x = r(614277),
    w = r(620824),
    P = r(737143),
    M = r(926841),
    k = r(35248),
    U = r(439021),
    B = r(698708),
    G = r(351402),
    Z = r(975060),
    F = r(505649),
    V = r(853872),
    j = r(882712),
    H = r(358085),
    Y = r(622999),
    W = r(176919),
    K = r(185139),
    z = r(559725),
    q = r(439041),
    Q = r(850228),
    X = r(231338),
    J = r(388032),
    $ = r(802543),
    ee = r(719919);
let et = new N.Z('AddPaymentStep.tsx'),
    en = [O.h8.PAYMENT_TYPE],
    er = [O.h8.PAYMENT_TYPE, O.h8.CREDIT_CARD_INFORMATION, O.h8.ADDRESS],
    ei = [O.h8.PAYMENT_TYPE, O.h8.PAYPAL_INFORMATION, O.h8.ADDRESS],
    ea = [O.h8.PAYMENT_TYPE, O.h8.VENMO_INFORMATION, O.h8.ADDRESS];
O.h8.PAYMENT_TYPE, O.h8.PAYMENT_REQUEST_INFORMATION, O.h8.ADDRESS;
let eo = [O.h8.PAYMENT_TYPE, O.h8.PRZELEWY24_INFORMATION, O.h8.ADDRESS],
    es = [O.h8.PAYMENT_TYPE, O.h8.EPS_INFORMATION, O.h8.ADDRESS],
    el = [O.h8.PAYMENT_TYPE, O.h8.IDEAL_INFORMATION, O.h8.ADDRESS],
    eu = [O.h8.PAYMENT_TYPE, O.h8.CASH_APP_INFORMATION, O.h8.ADDRESS],
    ec = [O.h8.PAYMENT_TYPE, O.h8.ADDRESS],
    ed = {
        name: '',
        cardNumber: '',
        expirationDate: '',
        cvc: ''
    },
    ef = {
        email: '',
        name: '',
        country: '',
        line1: '',
        line2: '',
        city: '',
        postalCode: '',
        state: ''
    };
function ep(e) {
    return (0, s.jsx)('div', {
        className: $.body,
        children: (0, s.jsx)(E.ZP, { ...e })
    });
}
function eh(e) {
    let { onCardInfoChange: n, infoNotice: r } = e,
        i = (0, f.e7)([Z.Z], () => Z.Z.error);
    return (0, s.jsxs)('div', {
        className: $.body,
        children: [
            null != r &&
                (0, s.jsx)(p.FormErrorBlock, {
                    className: $.infoNotice,
                    backgroundColor: p.FormErrorBlockColors.BACKGROUND_TERTIARY,
                    children: r
                }),
            (0, s.jsx)(T.j, {
                billingError: i,
                onCardInfoChange: n
            })
        ]
    });
}
function e_() {
    return (0, s.jsx)('div', {
        className: $.body,
        children: (0, s.jsx)(v.Z, {})
    });
}
function em() {
    return (0, s.jsx)('div', {
        className: $.body,
        children: (0, s.jsx)(y.Z, {})
    });
}
function eg() {
    return (0, s.jsx)('div', {
        className: $.body,
        children: (0, s.jsx)(Q.Z, {})
    });
}
function eE() {
    let e = (0, f.e7)([G.Z], () => G.Z.isBusy),
        n = (0, f.e7)([Z.Z], () => Z.Z.stripePaymentMethod);
    return (0, s.jsx)(S.k, {
        className: $.body,
        stripePaymentMethod: n,
        submitting: e
    });
}
function ev(e) {
    let { billingAddressInfo: n, onBillingAddressChange: r, paymentSourceType: i } = e,
        a = (0, f.e7)([Z.Z], () => Z.Z.error);
    return (0, s.jsx)('div', {
        className: $.body,
        children: (0, s.jsx)(b.P, {
            billingAddressInfo: n,
            billingError: a,
            onBillingAddressChange: r,
            paymentSourceType: i
        })
    });
}
function ey() {
    return (0, s.jsx)(I.F, { className: $.body });
}
function eb(e) {
    return () => (null != Z.Z.error && (0, g.fw)(), e());
}
function eI(e) {
    let { onPrimary: n, onBack: r, ...i } = e,
        a = n;
    null != n && (a = eb(n));
    let o = r;
    return (
        null != r && (o = eb(r)),
        (0, s.jsx)(L.Z, {
            ...i,
            onPrimary: a,
            onBack: o
        })
    );
}
function eT(e) {
    let n,
        r,
        i,
        a,
        { paymentModalArgs: o, initialStep: c, prependSteps: h, appendSteps: E, onReturn: v, onComplete: y, onStepChange: b, breadcrumpSteps: I, currentBreadcrumpStep: T, header: S, analyticsLocation: A, hideBreadcrumbs: N = !1, usePaymentModalStep: G = !1, isEligibleForTrial: F = !1, allowDesktopRedirectPurchase: j = !1, toastContent: W, overwriteSubscriptionPaymentSource: Q = !1 } = e,
        ed = {
            steps: [...h, ...er, ...E],
            methodType: X.He.CARD
        },
        ef = {
            steps: [...h, ...en, ...E],
            methodType: X.He.PAYMENT_REQUEST
        },
        eb = {
            steps: [...h, ...ei, ...E],
            methodType: X.He.PAYPAL
        },
        eT = {
            steps: [...h, ...ea, ...E],
            methodType: X.He.VENMO
        },
        eS = {
            steps: [...h, ...en, ...E]
        },
        eA = {
            steps: [...h, ...eo, ...E],
            methodType: X.He.PRZELEWY24
        },
        eC = {
            steps: [...h, ...es, ...E],
            methodType: X.He.EPS
        },
        eN = {
            steps: [...h, ...el, ...E],
            methodType: X.He.IDEAL
        },
        eR = {
            steps: [...h, ...eu, ...E],
            methodType: X.He.CASH_APP
        };
    function eO(e) {
        switch (e) {
            case O.h8.CREDIT_CARD_INFORMATION:
                return ed;
            case O.h8.CASH_APP_INFORMATION:
                return eR;
            default:
                return { steps: [O.h8.ADD_PAYMENT_STEPS] };
        }
    }
    let [eD, eL] = l.useState(c),
        [ex, ew] = l.useState(null),
        [eP, eM] = l.useState(eO(c)),
        { stripe: ek, contextMetadata: eU, activitySessionId: eB } = (0, R.usePaymentContext)(),
        eG = (0, f.e7)([Z.Z], () => Z.Z.redirectedPaymentSourceId),
        eZ = (0, f.e7)([q.Z], () => q.Z.cashAppPayComponent),
        eF = {
            completeSteps: tr,
            setIsSubmittingCurrentStep: o.setIsSubmittingCurrentStep
        },
        eV = l.useRef(eF);
    function ej(e) {
        let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        ew(null),
            eL(e),
            n &&
                b({
                    currentStep: eD,
                    toStep: e
                });
    }
    function eH(e) {
        (0, p.showToast)((0, p.createToast)(void 0 !== W ? W : J.intl.string(J.t['VJPg+v']), p.ToastType.SUCCESS, { position: p.ToastPosition.BOTTOM })), y(eD, e), ej(c, !1);
    }
    l.useEffect(() => {
        eV.current = eF;
    }),
        l.useEffect(() => {
            let { completeSteps: e, setIsSubmittingCurrentStep: n } = eV.current;
            (() => {
                if (null == eG) return;
                let r = V.Z.getPaymentSource(eG);
                if (null != r) e(r), n(!1);
            })();
        }, [eG]);
    let { setPaymentSourceId: eY, creditCardState: eW, setCreditCardState: eK, tokenState: ez, setTokenState: eq, isSubmittingCurrentStep: eQ, billingAddressState: eX, setBillingAddressState: eJ, setIsSubmittingCurrentStep: e$, hasRedirectURL: e0, setHasRedirectURL: e1, braintreeEmail: e2, braintreeNonce: e3, venmoUsername: e4, adyenPaymentData: e6, isAuthenticating: e5, epsBankState: e7, setEpsBankState: e8, idealBankState: e9, setIdealBankState: te, p24BankState: tt, setP24BankState: tn } = o;
    function tr(e) {
        eY(e.id), eH(e);
    }
    let ti = (0, P.q1)().enabled && j,
        ta = (0, M.a)().enabled && j,
        to = (0, w.b)().enabled,
        ts = to && j,
        tl = (0, H.isDesktop)() ? [] : [...(to ? ['applePay'] : []), 'googlePay'];
    ta && !tl.includes('googlePay') && tl.push('googlePay'), ts && !tl.includes('applePay') && tl.push('applePay');
    let [tu, tc] = l.useState(!1),
        td = l.useRef(null),
        tf = () => {
            null != td.current && td.current.show();
        };
    switch (eD) {
        case O.h8.ATTEMPT_GOOGLE_PAY:
        case O.h8.ATTEMPT_APPLE_PAY:
        case O.h8.PAYMENT_TYPE:
            let tp = (e, n) => {
                    switch (e) {
                        case X.He.CARD:
                            ti ? ej(O.h8.AWAITING_BROWSER_CHECKOUT) : (eM(ed), ej(O.h8.CREDIT_CARD_INFORMATION));
                            break;
                        case X.He.PAYPAL:
                            eM(eb), ej(O.h8.PAYPAL_INFORMATION);
                            break;
                        case X.He.VENMO:
                            eM(eT), ej(O.h8.VENMO_INFORMATION);
                            break;
                        case X.He.PAYMENT_REQUEST:
                            ta && 'googlePay' === n ? ej(O.h8.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY) : ts && 'applePay' === n ? ej(O.h8.AWAITING_BROWSER_CHECKOUT_APPLE_PAY) : (eM(ef), ej(O.h8.PAYMENT_REQUEST_INFORMATION));
                            break;
                        case X.He.PRZELEWY24:
                            eM(eA), ej(O.h8.PRZELEWY24_INFORMATION);
                            break;
                        case X.He.EPS:
                            eM(eC), ej(O.h8.EPS_INFORMATION);
                            break;
                        case X.He.IDEAL:
                            eM(eN), ej(O.h8.IDEAL_INFORMATION);
                            break;
                        case X.He.CASH_APP:
                            eM(eR), ej(O.h8.CASH_APP_INFORMATION);
                            break;
                        case X.He.GIROPAY:
                        case X.He.PAYSAFE_CARD:
                        case X.He.GCASH:
                        case X.He.GRABPAY_MY:
                        case X.He.MOMO_WALLET:
                        case X.He.KAKAOPAY:
                        case X.He.GOPAY_WALLET:
                        case X.He.BANCONTACT:
                            eM({
                                steps: [...h, ...ec, ...E],
                                methodType: e
                            }),
                                ej(O.h8.ADDRESS);
                    }
                    null != Z.Z.error && (0, g.fw)();
                },
                th = (e, n) => {
                    eJ((e) => ({
                        ...e,
                        info: n
                    })),
                        eM(ef),
                        tr(e);
                },
                t_ = () => {
                    eM(eS), ej(O.h8.PAYMENT_TYPE);
                },
                tm = async (e) => {
                    if (((0, g.Xt)(e), null == e)) {
                        t_();
                        return;
                    }
                    try {
                        let n = await (0, _.i6)(e, void 0, A),
                            { billingAddressInfo: r } = (0, Y.az)(e);
                        th(n, r);
                    } catch (e) {}
                };
            if (eD === O.h8.ATTEMPT_GOOGLE_PAY || eD === O.h8.ATTEMPT_APPLE_PAY) {
                let e = J.intl.string(eD === O.h8.ATTEMPT_APPLE_PAY ? J.t.czhXDg : J.t.Zj2xQ0),
                    i = J.intl.string(eD === O.h8.ATTEMPT_APPLE_PAY ? J.t.WoXvJC : J.t.wnVVr6);
                (n = (0, s.jsx)(U.t, {
                    onChooseType: tp,
                    paymentRequestWallet: eD === O.h8.ATTEMPT_APPLE_PAY ? 'applePay' : 'googlePay',
                    onStripePaymentMethodReceived: tm,
                    onPaymentRequestFailure: () => {
                        tp(X.He.CARD), ew(e);
                    },
                    onValidPaymentRequest: () => tc(!0),
                    paymentRequestRef: td
                })),
                    (r = (0, s.jsx)(eI, {
                        onBack: () => ej(O.h8.PAYMENT_TYPE),
                        primaryCTA: L.Z.CTAType.CONTINUE,
                        primaryText: i,
                        onPrimary: () => tf(),
                        primaryDisabled: !tu
                    }));
                break;
            }
            (n = (0, s.jsx)(ep, {
                onChooseType: tp,
                onStripePaymentMethodReceived: tm,
                paymentRequestWallets: tl,
                isEligibleForTrial: F,
                paymentRequestPaymentContext: {
                    contextMetadata: eU,
                    activitySessionId: eB
                }
            })),
                (r = (0, s.jsx)(eI, { onBack: v }));
            break;
        case O.h8.CREDIT_CARD_INFORMATION:
            let tg = async (e) => {
                e$(!0);
                try {
                    let n = await (0, _.qv)(ek, e);
                    eq({ token: n }), ej(O.h8.ADDRESS);
                } catch (e) {
                    var n;
                    et.error(null !== (n = e.message) && void 0 !== n ? n : JSON.stringify(e));
                } finally {
                    e$(!1);
                }
            };
            (n = (0, s.jsx)(eh, {
                infoNotice: ex,
                onCardInfoChange: (e, n) => {
                    eK({
                        info: e,
                        isValid: n
                    }),
                        eJ((n) => ({
                            ...n,
                            info: {
                                ...n.info,
                                name: e.name
                            }
                        }));
                }
            })),
                (r = (0, s.jsx)(u.ElementsConsumer, {
                    children: (e) => {
                        let { elements: n } = e;
                        return (0, s.jsx)(eI, {
                            onBack: () => ej(O.h8.PAYMENT_TYPE),
                            primaryCTA: L.Z.CTAType.CONTINUE,
                            primaryType: 'submit',
                            primaryText: J.intl.string(J.t.PDTjLC),
                            primarySubmitting: eQ,
                            primaryDisabled: !eW.isValid,
                            onPrimary: () => tg(n)
                        });
                    }
                }));
            break;
        case O.h8.AWAITING_BROWSER_CHECKOUT:
        case O.h8.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
        case O.h8.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
            (n = (0, s.jsx)('div', {
                className: $.body,
                children: (0, s.jsx)(k.M, {
                    step: eD,
                    onPurchaseComplete: () => y(eD),
                    onHandoffFailure: () => {
                        eM(ed), ej(O.h8.CREDIT_CARD_INFORMATION);
                    }
                })
            })),
                (r = (0, s.jsx)(k.a, {
                    onPrimaryClick: () => {
                        eM(ed), ej(O.h8.CREDIT_CARD_INFORMATION);
                    },
                    onBackClick: () => {
                        eM(eS), ej(O.h8.PAYMENT_TYPE);
                    }
                }));
            break;
        case O.h8.EPS_INFORMATION:
            (n = (0, s.jsx)(C.Z, {
                type: X.He.EPS,
                onAccountHolderNameChange: (e) =>
                    eJ({
                        info: {
                            ...eX.info,
                            name: e
                        },
                        isValid: eX.isValid
                    }),
                onEPSBankChange: (e) => e8(e),
                epsBankValue: e7,
                billingAddressInfo: eX.info
            })),
                (r = (0, s.jsx)(eI, {
                    onBack: () => ej(O.h8.PAYMENT_TYPE),
                    primaryCTA: L.Z.CTAType.CONTINUE,
                    primaryText: J.intl.string(J.t.PDTjLC),
                    primaryDisabled: void 0 === e7 || '' === e7 || '' === eX.info.name,
                    onPrimary: () => ej(O.h8.ADDRESS)
                }));
            break;
        case O.h8.IDEAL_INFORMATION:
            (n = (0, s.jsx)(C.Z, {
                type: X.He.IDEAL,
                onAccountHolderNameChange: (e) =>
                    eJ({
                        info: {
                            ...eX.info,
                            name: e
                        },
                        isValid: eX.isValid
                    }),
                onIdealBankChange: (e) => te(e),
                idealBankValue: e9,
                billingAddressInfo: eX.info
            })),
                (r = (0, s.jsx)(eI, {
                    onBack: () => ej(O.h8.PAYMENT_TYPE),
                    primaryCTA: L.Z.CTAType.CONTINUE,
                    primaryText: J.intl.string(J.t.PDTjLC),
                    primaryDisabled: void 0 === e9 || '' === e9 || '' === eX.info.name,
                    onPrimary: () => ej(O.h8.ADDRESS)
                }));
            break;
        case O.h8.PRZELEWY24_INFORMATION:
            (n = (0, s.jsx)(C.Z, {
                type: X.He.PRZELEWY24,
                onNameChange: (e) =>
                    eJ({
                        info: {
                            ...eX.info,
                            name: e
                        },
                        isValid: eX.isValid
                    }),
                onEmailChange: (e) =>
                    eJ({
                        info: {
                            ...eX.info,
                            email: e
                        },
                        isValid: eX.isValid
                    }),
                onP24BankChange: (e) => {
                    tn(e);
                },
                p24BankValue: tt,
                billingAddressInfo: eX.info
            })),
                (r = (0, s.jsx)(eI, {
                    onBack: () => ej(O.h8.PAYMENT_TYPE),
                    primaryCTA: L.Z.CTAType.CONTINUE,
                    primaryText: J.intl.string(J.t.PDTjLC),
                    primaryDisabled: void 0 === eX.info.name || '' === eX.info.name || void 0 === eX.info.email || '' === eX.info.email || void 0 === tt || '' === tt,
                    onPrimary: () => ej(O.h8.ADDRESS)
                }));
            break;
        case O.h8.PAYPAL_INFORMATION:
            let tE = 0 !== e2.length && null != e3;
            (n = (0, s.jsx)(e_, {})),
                (r = (0, s.jsx)(eI, {
                    onBack: () => ej(O.h8.PAYMENT_TYPE),
                    primaryCTA: L.Z.CTAType.CONTINUE,
                    primaryText: tE ? J.intl.string(J.t.PDTjLC) : J.intl.string(J.t.Djzd7O),
                    onPrimary: () => (tE ? ej(O.h8.ADDRESS) : (0, m.i0)())
                }));
            break;
        case O.h8.VENMO_INFORMATION:
            let tv = 0 !== e4.length && null != e3;
            (n = (0, s.jsx)(em, {})),
                (r = (0, s.jsx)(eI, {
                    onBack: () => ej(O.h8.PAYMENT_TYPE),
                    primaryCTA: L.Z.CTAType.CONTINUE,
                    primaryText: tv ? J.intl.string(J.t.PDTjLC) : J.intl.string(J.t['4KoTLC']),
                    onPrimary: () => (tv ? ej(O.h8.ADDRESS) : (0, m.og)())
                }));
            break;
        case O.h8.PAYMENT_REQUEST_INFORMATION:
            (n = (0, s.jsx)(eE, {})), (r = (0, s.jsx)(eI, { onBack: () => ej(O.h8.PAYMENT_TYPE) }));
            break;
        case O.h8.CASH_APP_INFORMATION:
            let ty = null != e6,
                tb = null != eZ;
            (n = (0, s.jsx)(eg, {})),
                (r = (0, s.jsx)(eI, {
                    onBack: () => ej(O.h8.PAYMENT_TYPE),
                    primaryCTA: L.Z.CTAType.CONTINUE,
                    primaryText: ty ? J.intl.string(J.t.PDTjLC) : J.intl.string(J.t['9ALP8/']),
                    onPrimary: () => (ty ? ej(O.h8.ADDRESS) : (0, z.cp)()),
                    primaryDisabled: !tb
                }));
            break;
        case O.h8.ADDRESS:
            let tI = async () => {
                e$(!0);
                let e = eP.methodType;
                switch (e) {
                    case X.He.CARD:
                        try {
                            let e = await (0, _.f0)(ek, ez.token, eX.info, A);
                            tr(e);
                        } catch {}
                        break;
                    case X.He.VENMO:
                    case X.He.PAYPAL:
                        try {
                            d()(null != e3, 'Missing braintreeNonce');
                            let e = await (0, _.lP)(e3, eX.info, A);
                            tr(e);
                        } catch {}
                        break;
                    case X.He.EPS:
                        try {
                            let e = await (0, _.YQ)(ek, e7, eX.info, A);
                            tr(e);
                        } catch (e) {
                            et.warn(e);
                        }
                        break;
                    case X.He.IDEAL:
                        try {
                            let e = await (0, _.aN)(ek, e9, eX.info, A);
                            tr(e);
                        } catch (e) {
                            et.warn(e);
                        }
                        break;
                    case X.He.PRZELEWY24:
                        try {
                            if (void 0 === tt) throw (0, _.SQ)('Bank required for Przelewy24');
                            let e = await (0, _.pF)(ek, { p24Bank: tt }, eX.info, A);
                            tr(e);
                        } catch {}
                        break;
                    case X.He.PAYSAFE_CARD:
                    case X.He.GRABPAY_MY:
                        try {
                            let n = await (0, _.sF)(eX.info, e, A);
                            tr(n);
                        } catch {}
                        break;
                    case X.He.GCASH:
                    case X.He.MOMO_WALLET:
                    case X.He.KAKAOPAY:
                    case X.He.GOPAY_WALLET:
                        try {
                            let { redirectConfirmation: n } = await (0, _.Dk)(eX.info, e, A);
                            e1(n);
                        } catch {}
                        break;
                    case X.He.GIROPAY:
                    case X.He.BANCONTACT:
                        try {
                            let n = await (0, _.GV)(ek, eX.info, e, A);
                            tr(n);
                        } catch {}
                        break;
                    case X.He.CASH_APP:
                        try {
                            d()(null != e6, 'Missing adyenPaymentData');
                            let { paymentSource: n } = await (0, _.Dk)(eX.info, e, A, e6, Q);
                            d()(null != n, 'Cash App Pay Payment Source missing'), tr(n);
                        } catch {}
                        break;
                    default:
                        throw Error('unknown step not handled');
                }
                !e0 && e$(!1);
            };
            switch (eP.methodType) {
                case X.He.CARD:
                    (a = O.h8.CREDIT_CARD_INFORMATION), (i = X.He.CARD);
                    break;
                case X.He.PAYPAL:
                    (a = O.h8.PAYPAL_INFORMATION), (i = X.He.PAYPAL);
                    break;
                case X.He.VENMO:
                    (a = O.h8.VENMO_INFORMATION), (i = X.He.VENMO);
                    break;
                case X.He.GIROPAY:
                    (a = O.h8.PAYMENT_TYPE), (i = X.He.GIROPAY);
                    break;
                case X.He.PAYSAFE_CARD:
                case X.He.GCASH:
                case X.He.GRABPAY_MY:
                case X.He.MOMO_WALLET:
                case X.He.KAKAOPAY:
                case X.He.GOPAY_WALLET:
                case X.He.BANCONTACT:
                    (a = O.h8.PAYMENT_TYPE), (i = eP.methodType);
                    break;
                case X.He.EPS:
                    (a = O.h8.EPS_INFORMATION), (i = X.He.EPS);
                    break;
                case X.He.IDEAL:
                    (a = O.h8.IDEAL_INFORMATION), (i = X.He.IDEAL);
                    break;
                case X.He.PRZELEWY24:
                    (a = O.h8.PRZELEWY24_INFORMATION), (i = X.He.PRZELEWY24);
                    break;
                case X.He.CASH_APP:
                    (a = O.h8.CASH_APP_INFORMATION), (i = X.He.CASH_APP);
                    break;
                default:
                    (a = O.h8.PAYMENT_TYPE), (i = X.He.CARD);
            }
            (n = (0, s.jsx)(ev, {
                billingAddressInfo: eX.info,
                onBillingAddressChange: (e, n) => {
                    eJ({
                        info: {
                            ...eX.info,
                            ...e
                        },
                        isValid: n
                    });
                },
                paymentSourceType: i
            })),
                (r = (0, s.jsx)(eI, {
                    onBack: () => ej(a),
                    primaryCTA: L.Z.CTAType.CONTINUE,
                    primaryText: J.intl.string(J.t.PDTjLC),
                    primarySubmitting: eQ,
                    primaryDisabled: !eX.isValid || e5,
                    onPrimary: tI
                }));
            break;
        case O.h8.AWAITING_AUTHENTICATION:
            n = (0, s.jsx)(ey, {});
            break;
        default:
            throw Error('Unexpected step: '.concat(eD));
    }
    let tT = (0, s.jsx)(p.Sequencer, {
            className: ee.sequencer,
            staticClassName: ee.sequencerStatic,
            animatedNodeClassName: ee.sequencerAnimatedNode,
            fillParent: !0,
            step: eD,
            steps: eP.steps,
            sideMargin: 20,
            children: n
        }),
        tS = eD === O.h8.PAYMENT_TYPE && 0 === h.length ? null : r;
    return G
        ? (0, s.jsxs)(s.Fragment, {
              children: [
                  F &&
                      (0, s.jsx)(D.Z, {
                          className: $.paymentModalBreadcrumbs,
                          isEligibleForTrial: F
                      }),
                  (0, s.jsxs)(x.C3, {
                      children: [(0, s.jsx)(B.Z, { className: $.paymentModalError }), tT]
                  }),
                  (0, s.jsx)(x.O3, { children: tS })
              ]
          })
        : (0, s.jsx)(K.Z, {
              steps: null != I ? I : eP.steps,
              currentStep: null != T ? T : eD,
              paymentError: o.paymentError,
              header: S,
              hideBreadcrumbs: N,
              body: tT,
              footer: tS
          });
}
function eS(e) {
    let {
        defaultPaymentSourceId: n,
        paymentSources: r,
        hasFetchedPaymentSources: i
    } = (0, f.cj)([V.Z], () => ({
        defaultPaymentSourceId: void 0 !== e ? e : V.Z.defaultPaymentSourceId,
        paymentSources: V.Z.paymentSources,
        hasFetchedPaymentSources: V.Z.hasFetchedPaymentSources
    }));
    (0, A.Z)(() => {
        null == q.Z.cashAppPayComponent && (0, z.eI)(), (0, m.eI)(), !i && (0, _.tZ)();
    });
    let [a, o] = l.useState(n);
    null != n && null == a && o(n);
    let [s, u] = l.useState(() => ({
            info: ed,
            isValid: !1
        })),
        [c, d] = l.useState(() => ({
            info: ef,
            isValid: !1
        })),
        [p, E] = l.useState(''),
        [v, y] = l.useState(''),
        [b, I] = l.useState(''),
        [T, S] = l.useState(() => ({ token: null })),
        [C, N, R, O, D] = (0, f.Wu)([Z.Z], () => [Z.Z.braintreeEmail, Z.Z.braintreeNonce, Z.Z.error, Z.Z.venmoUsername, Z.Z.adyenPaymentData]),
        [L, x] = (0, f.Wu)([F.Z], () => [F.Z.error, F.Z.isAwaitingAuthentication]);
    l.useEffect(() => {
        let e = (e) => {
            let { billingAddress: n } = e;
            d({
                info: n,
                isValid: n.country.length > 0
            });
        };
        return (
            h.Z.subscribe('BRAINTREE_TOKENIZE_PAYPAL_SUCCESS', e),
            () => {
                h.Z.unsubscribe('BRAINTREE_TOKENIZE_PAYPAL_SUCCESS', e), (0, g.fw)();
            }
        );
    }, []);
    let [w, P] = l.useState(!1),
        [M, k] = l.useState(!1),
        [U, B] = l.useState(null),
        G = l.useRef(null),
        H = (0, f.e7)([F.Z], () => F.Z.isAwaitingAuthentication),
        [Y, K] = (0, f.Wu)([j.Z], () => [j.Z.purchaseTokenAuthState, j.Z.purchaseTokenHash]);
    return (
        l.useEffect(() => {
            null != U && null != G.current && G.current.scrollIntoView({ behavior: 'smooth' });
        }, [U]),
        {
            paymentSources: r,
            paymentSourceId: a,
            hasFetchedPaymentSources: i,
            setPaymentSourceId: o,
            creditCardState: s,
            setCreditCardState: u,
            tokenState: T,
            setTokenState: S,
            billingAddressState: c,
            setBillingAddressState: d,
            isSubmittingCurrentStep: w,
            setIsSubmittingCurrentStep: P,
            hasRedirectURL: M,
            setHasRedirectURL: k,
            braintreeEmail: C,
            braintreeNonce: N,
            venmoUsername: O,
            adyenPaymentData: D,
            paymentError: null != L ? L : R,
            paymentAuthenticationState: x ? W.wr.PENDING : null != L ? W.wr.ERROR : W.wr.NONE,
            purchaseError: U,
            setPurchaseError: B,
            purchaseErrorBlockRef: G,
            isAuthenticating: H,
            purchaseTokenAuthState: Y,
            purchaseTokenHash: K,
            epsBankState: v,
            setEpsBankState: y,
            idealBankState: b,
            setIdealBankState: I,
            p24BankState: p,
            setP24BankState: E
        }
    );
}
