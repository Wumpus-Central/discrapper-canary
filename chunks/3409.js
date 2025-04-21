n.d(t, {
    fL: () => eS,
    vP: () => eI
}),
    n(388685),
    n(539854),
    n(49124),
    n(415506);
var r = n(200651),
    i = n(192379),
    a = n(734530),
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
    v = n(493773),
    O = n(445239),
    I = n(870630),
    S = n(710845),
    T = n(563132),
    A = n(409813),
    N = n(51499),
    C = n(586585),
    R = n(614277),
    P = n(35248),
    w = n(439021),
    D = n(698708),
    L = n(351402),
    x = n(975060),
    M = n(505649),
    k = n(853872),
    j = n(882712),
    U = n(358085),
    G = n(622999),
    B = n(176919),
    F = n(185139),
    V = n(559725),
    Z = n(439041),
    H = n(850228),
    Y = n(231338),
    W = n(388032),
    K = n(327763),
    z = n(106194);
function q(e, t, n) {
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
function Q(e) {
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
                q(e, t, n[t]);
            });
    }
    return e;
}
function X(e, t) {
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
function J(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : X(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function $(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = ee(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function ee(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let et = new S.Z('AddPaymentStep.tsx'),
    en = [A.h8.PAYMENT_TYPE],
    er = [A.h8.PAYMENT_TYPE, A.h8.CREDIT_CARD_INFORMATION, A.h8.ADDRESS],
    ei = [A.h8.PAYMENT_TYPE, A.h8.PAYPAL_INFORMATION, A.h8.ADDRESS],
    ea = [A.h8.PAYMENT_TYPE, A.h8.VENMO_INFORMATION, A.h8.ADDRESS];
A.h8.PAYMENT_TYPE, A.h8.PAYMENT_REQUEST_INFORMATION, A.h8.ADDRESS;
let eo = [A.h8.PAYMENT_TYPE, A.h8.PRZELEWY24_INFORMATION, A.h8.ADDRESS],
    es = [A.h8.PAYMENT_TYPE, A.h8.EPS_INFORMATION, A.h8.ADDRESS],
    el = [A.h8.PAYMENT_TYPE, A.h8.IDEAL_INFORMATION, A.h8.ADDRESS],
    ec = [A.h8.PAYMENT_TYPE, A.h8.CASH_APP_INFORMATION, A.h8.ADDRESS],
    eu = [A.h8.PAYMENT_TYPE, A.h8.ADDRESS],
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
function e_(e) {
    return (0, r.jsx)('div', {
        className: K.body,
        children: (0, r.jsx)(p.ZP, Q({}, e))
    });
}
function ep(e) {
    let { onCardInfoChange: t, infoNotice: n } = e,
        i = (0, l.e7)([x.Z], () => x.Z.error);
    return (0, r.jsxs)('div', {
        className: K.body,
        children: [
            null != n &&
                (0, r.jsx)(c.kzN, {
                    className: K.infoNotice,
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
function eh() {
    return (0, r.jsx)('div', {
        className: K.body,
        children: (0, r.jsx)(h.Z, {})
    });
}
function em() {
    return (0, r.jsx)('div', {
        className: K.body,
        children: (0, r.jsx)(m.Z, {})
    });
}
function eg() {
    return (0, r.jsx)('div', {
        className: K.body,
        children: (0, r.jsx)(H.Z, {})
    });
}
function eE() {
    let e = (0, l.e7)([L.Z], () => L.Z.isBusy),
        t = (0, l.e7)([x.Z], () => x.Z.stripePaymentMethod);
    return (0, r.jsx)(y.k, {
        className: K.body,
        stripePaymentMethod: t,
        submitting: e
    });
}
function eb(e) {
    let { billingAddressInfo: t, onBillingAddressChange: n, paymentSourceType: i } = e,
        a = (0, l.e7)([x.Z], () => x.Z.error);
    return (0, r.jsx)('div', {
        className: K.body,
        children: (0, r.jsx)(g.P, {
            billingAddressInfo: t,
            billingError: a,
            onBillingAddressChange: n,
            paymentSourceType: i
        })
    });
}
function ey() {
    return (0, r.jsx)(E.F, { className: K.body });
}
function ev(e) {
    return () => (null != x.Z.error && (0, _.fw)(), e());
}
function eO(e) {
    let { onPrimary: t, onBack: n } = e,
        i = $(e, ['onPrimary', 'onBack']),
        a = t;
    null != t && (a = ev(t));
    let o = n;
    return (
        null != n && (o = ev(n)),
        (0, r.jsx)(
            C.Z,
            J(Q({}, i), {
                onPrimary: a,
                onBack: o
            })
        )
    );
}
function eI(e) {
    let t,
        n,
        o,
        u,
        { paymentModalArgs: p, initialStep: h, prependSteps: m, appendSteps: g, onReturn: E, onComplete: b, onStepChange: y, breadcrumpSteps: v, currentBreadcrumpStep: S, header: L, analyticsLocation: M, hideBreadcrumbs: j = !1, usePaymentModalStep: B = !1, isEligibleForTrial: H = !1, allowDesktopRedirectPurchase: q = !1, toastContent: X, overwriteSubscriptionPaymentSource: $ = !1 } = e,
        ee = {
            steps: [...m, ...er, ...g],
            methodType: Y.He.CARD
        },
        ed = {
            steps: [...m, ...en, ...g],
            methodType: Y.He.PAYMENT_REQUEST
        },
        ef = {
            steps: [...m, ...ei, ...g],
            methodType: Y.He.PAYPAL
        },
        ev = {
            steps: [...m, ...ea, ...g],
            methodType: Y.He.VENMO
        },
        eI = {
            steps: [...m, ...en, ...g]
        },
        eS = {
            steps: [...m, ...eo, ...g],
            methodType: Y.He.PRZELEWY24
        },
        eT = {
            steps: [...m, ...es, ...g],
            methodType: Y.He.EPS
        },
        eA = {
            steps: [...m, ...el, ...g],
            methodType: Y.He.IDEAL
        },
        eN = {
            steps: [...m, ...ec, ...g],
            methodType: Y.He.CASH_APP
        };
    function eC(e) {
        switch (e) {
            case A.h8.CREDIT_CARD_INFORMATION:
                return ee;
            case A.h8.CASH_APP_INFORMATION:
                return eN;
            default:
                return { steps: [A.h8.ADD_PAYMENT_STEPS] };
        }
    }
    let [eR, eP] = i.useState(h),
        [ew, eD] = i.useState(null),
        [eL, ex] = i.useState(eC(h)),
        { stripe: eM, contextMetadata: ek, activitySessionId: ej } = (0, T.JL)(),
        eU = (0, l.e7)([x.Z], () => x.Z.redirectedPaymentSourceId),
        eG = (0, l.e7)([Z.Z], () => Z.Z.cashAppPayComponent),
        eB = {
            completeSteps: te,
            setIsSubmittingCurrentStep: p.setIsSubmittingCurrentStep
        },
        eF = i.useRef(eB);
    function eV(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        eD(null),
            eP(e),
            t &&
                y({
                    currentStep: eR,
                    toStep: e
                });
    }
    function eZ(e) {
        (0, c.showToast)((0, c.createToast)(void 0 !== X ? X : W.intl.string(W.t['VJPg+v']), c.ToastType.SUCCESS, { position: c.ToastPosition.BOTTOM })), b(eR, e), eV(h, !1);
    }
    i.useEffect(() => {
        eF.current = eB;
    }),
        i.useEffect(() => {
            let { completeSteps: e, setIsSubmittingCurrentStep: t } = eF.current;
            (async () => {
                if (null == eU) return;
                await (0, d.tZ)();
                let n = k.Z.getPaymentSource(eU);
                null != n && (e(n), t(!1));
            })();
        }, [eU]);
    let { setPaymentSourceId: eH, creditCardState: eY, setCreditCardState: eW, tokenState: eK, setTokenState: ez, isSubmittingCurrentStep: eq, billingAddressState: eQ, setBillingAddressState: eX, setIsSubmittingCurrentStep: eJ, hasRedirectURL: e$, setHasRedirectURL: e0, braintreeEmail: e1, braintreeNonce: e2, venmoUsername: e3, adyenPaymentData: e4, isAuthenticating: e5, epsBankState: e6, setEpsBankState: e8, p24BankState: e7, setP24BankState: e9 } = p;
    function te(e) {
        eH(e.id), eZ(e);
    }
    let tt = (0, U.isDesktop)() ? [] : ['applePay', 'googlePay'];
    tt.includes('googlePay') || tt.push('googlePay'), tt.includes('applePay') || tt.push('applePay');
    let [tn, tr] = i.useState(!1),
        ti = i.useRef(null),
        ta = () => {
            null != ti.current && ti.current.show();
        };
    switch (eR) {
        case A.h8.ATTEMPT_GOOGLE_PAY:
        case A.h8.ATTEMPT_APPLE_PAY:
        case A.h8.PAYMENT_TYPE:
            let to = (e, t) => {
                    switch (e) {
                        case Y.He.CARD:
                            q ? eV(A.h8.AWAITING_BROWSER_CHECKOUT) : (ex(ee), eV(A.h8.CREDIT_CARD_INFORMATION));
                            break;
                        case Y.He.PAYPAL:
                            ex(ef), eV(A.h8.PAYPAL_INFORMATION);
                            break;
                        case Y.He.VENMO:
                            ex(ev), eV(A.h8.VENMO_INFORMATION);
                            break;
                        case Y.He.PAYMENT_REQUEST:
                            q && 'googlePay' === t ? eV(A.h8.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY) : q && 'applePay' === t ? eV(A.h8.AWAITING_BROWSER_CHECKOUT_APPLE_PAY) : (ex(ed), eV(A.h8.PAYMENT_REQUEST_INFORMATION));
                            break;
                        case Y.He.PRZELEWY24:
                            ex(eS), eV(A.h8.PRZELEWY24_INFORMATION);
                            break;
                        case Y.He.EPS:
                            ex(eT), eV(A.h8.EPS_INFORMATION);
                            break;
                        case Y.He.IDEAL:
                            ex(eA), eV(A.h8.IDEAL_INFORMATION);
                            break;
                        case Y.He.CASH_APP:
                            ex(eN), eV(A.h8.CASH_APP_INFORMATION);
                            break;
                        case Y.He.GIROPAY:
                        case Y.He.PAYSAFE_CARD:
                        case Y.He.GCASH:
                        case Y.He.GRABPAY_MY:
                        case Y.He.MOMO_WALLET:
                        case Y.He.KAKAOPAY:
                        case Y.He.GOPAY_WALLET:
                        case Y.He.BANCONTACT:
                            ex({
                                steps: [...m, ...eu, ...g],
                                methodType: e
                            }),
                                eV(A.h8.ADDRESS);
                    }
                    null != x.Z.error && (0, _.fw)();
                },
                ts = (e, t) => {
                    eX((e) => J(Q({}, e), { info: t })), ex(ed), te(e);
                },
                tl = () => {
                    ex(eI), eV(A.h8.PAYMENT_TYPE);
                },
                tc = async (e) => {
                    if (((0, _.Xt)(e), null == e)) return void tl();
                    try {
                        let t = await (0, d.i6)(e, void 0, M),
                            { billingAddressInfo: n } = (0, G.az)(e);
                        ts(t, n);
                    } catch (e) {}
                };
            if (eR === A.h8.ATTEMPT_GOOGLE_PAY || eR === A.h8.ATTEMPT_APPLE_PAY) {
                let e = W.intl.string(eR === A.h8.ATTEMPT_APPLE_PAY ? W.t.czhXDg : W.t.Zj2xQ0),
                    i = W.intl.string(eR === A.h8.ATTEMPT_APPLE_PAY ? W.t.WoXvJC : W.t.wnVVr6);
                (t = (0, r.jsx)(w.t, {
                    onChooseType: to,
                    paymentRequestWallet: eR === A.h8.ATTEMPT_APPLE_PAY ? 'applePay' : 'googlePay',
                    onStripePaymentMethodReceived: tc,
                    onPaymentRequestFailure: () => {
                        to(Y.He.CARD), eD(e);
                    },
                    onValidPaymentRequest: () => tr(!0),
                    paymentRequestRef: ti
                })),
                    (n = (0, r.jsx)(eO, {
                        onBack: () => eV(A.h8.PAYMENT_TYPE),
                        primaryCTA: C.Z.CTAType.CONTINUE,
                        primaryText: i,
                        onPrimary: () => ta(),
                        primaryDisabled: !tn
                    }));
                break;
            }
            (t = (0, r.jsx)(e_, {
                onChooseType: to,
                onStripePaymentMethodReceived: tc,
                paymentRequestWallets: tt,
                isEligibleForTrial: H,
                paymentRequestPaymentContext: {
                    contextMetadata: ek,
                    activitySessionId: ej
                }
            })),
                (n = (0, r.jsx)(eO, { onBack: E }));
            break;
        case A.h8.CREDIT_CARD_INFORMATION:
            let tu = async (e) => {
                eJ(!0);
                try {
                    let t = await (0, d.qv)(eM, e);
                    ez({ token: t }), eV(A.h8.ADDRESS);
                } catch (e) {
                    var t;
                    et.error(null != (t = e.message) ? t : JSON.stringify(e));
                } finally {
                    eJ(!1);
                }
            };
            (t = (0, r.jsx)(ep, {
                infoNotice: ew,
                onCardInfoChange: (e, t) => {
                    eW({
                        info: e,
                        isValid: t
                    }),
                        eX((t) => J(Q({}, t), { info: J(Q({}, t.info), { name: e.name }) }));
                }
            })),
                (n = (0, r.jsx)(a.ElementsConsumer, {
                    children: (e) => {
                        let { elements: t } = e;
                        return (0, r.jsx)(eO, {
                            onBack: () => eV(A.h8.PAYMENT_TYPE),
                            primaryCTA: C.Z.CTAType.CONTINUE,
                            primaryType: 'submit',
                            primaryText: W.intl.string(W.t.PDTjLC),
                            primarySubmitting: eq,
                            primaryDisabled: !eY.isValid,
                            onPrimary: () => tu(t)
                        });
                    }
                }));
            break;
        case A.h8.AWAITING_BROWSER_CHECKOUT:
        case A.h8.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
        case A.h8.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
            (t = (0, r.jsx)('div', {
                className: K.body,
                children: (0, r.jsx)(P.M, {
                    step: eR,
                    onPurchaseComplete: () => b(eR),
                    onHandoffFailure: () => {
                        ex(ee), eV(A.h8.CREDIT_CARD_INFORMATION);
                    }
                })
            })),
                (n = (0, r.jsx)(P.a, {
                    onPrimaryClick: () => {
                        ex(ee), eV(A.h8.CREDIT_CARD_INFORMATION);
                    },
                    onBackClick: () => {
                        ex(eI), eV(A.h8.PAYMENT_TYPE);
                    }
                }));
            break;
        case A.h8.EPS_INFORMATION:
            (t = (0, r.jsx)(I.Z, {
                type: Y.He.EPS,
                onAccountHolderNameChange: (e) =>
                    eX({
                        info: J(Q({}, eQ.info), { name: e }),
                        isValid: eQ.isValid
                    }),
                onEPSBankChange: (e) => e8(e),
                epsBankValue: e6,
                billingAddressInfo: eQ.info
            })),
                (n = (0, r.jsx)(eO, {
                    onBack: () => eV(A.h8.PAYMENT_TYPE),
                    primaryCTA: C.Z.CTAType.CONTINUE,
                    primaryText: W.intl.string(W.t.PDTjLC),
                    primaryDisabled: void 0 === e6 || '' === e6 || '' === eQ.info.name,
                    onPrimary: () => eV(A.h8.ADDRESS)
                }));
            break;
        case A.h8.IDEAL_INFORMATION:
            (t = (0, r.jsx)(O.Z, {
                type: Y.He.IDEAL,
                onAccountHolderNameChange: (e) =>
                    eX({
                        info: J(Q({}, eQ.info), { name: e }),
                        isValid: eQ.isValid
                    }),
                billingAddressInfo: eQ.info
            })),
                (n = (0, r.jsx)(eO, {
                    onBack: () => eV(A.h8.PAYMENT_TYPE),
                    primaryCTA: C.Z.CTAType.CONTINUE,
                    primaryText: W.intl.string(W.t.PDTjLC),
                    primaryDisabled: '' === eQ.info.name,
                    onPrimary: () => eV(A.h8.ADDRESS)
                }));
            break;
        case A.h8.PRZELEWY24_INFORMATION:
            (t = (0, r.jsx)(I.Z, {
                type: Y.He.PRZELEWY24,
                onNameChange: (e) =>
                    eX({
                        info: J(Q({}, eQ.info), { name: e }),
                        isValid: eQ.isValid
                    }),
                onEmailChange: (e) =>
                    eX({
                        info: J(Q({}, eQ.info), { email: e }),
                        isValid: eQ.isValid
                    }),
                onP24BankChange: (e) => {
                    e9(e);
                },
                p24BankValue: e7,
                billingAddressInfo: eQ.info
            })),
                (n = (0, r.jsx)(eO, {
                    onBack: () => eV(A.h8.PAYMENT_TYPE),
                    primaryCTA: C.Z.CTAType.CONTINUE,
                    primaryText: W.intl.string(W.t.PDTjLC),
                    primaryDisabled: void 0 === eQ.info.name || '' === eQ.info.name || void 0 === eQ.info.email || '' === eQ.info.email || void 0 === e7 || '' === e7,
                    onPrimary: () => eV(A.h8.ADDRESS)
                }));
            break;
        case A.h8.PAYPAL_INFORMATION:
            let td = 0 !== e1.length && null != e2;
            (t = (0, r.jsx)(eh, {})),
                (n = (0, r.jsx)(eO, {
                    onBack: () => eV(A.h8.PAYMENT_TYPE),
                    primaryCTA: C.Z.CTAType.CONTINUE,
                    primaryText: td ? W.intl.string(W.t.PDTjLC) : W.intl.string(W.t.Djzd7O),
                    onPrimary: () => (td ? eV(A.h8.ADDRESS) : (0, f.i0)())
                }));
            break;
        case A.h8.VENMO_INFORMATION:
            let tf = 0 !== e3.length && null != e2;
            (t = (0, r.jsx)(em, {})),
                (n = (0, r.jsx)(eO, {
                    onBack: () => eV(A.h8.PAYMENT_TYPE),
                    primaryCTA: C.Z.CTAType.CONTINUE,
                    primaryText: tf ? W.intl.string(W.t.PDTjLC) : W.intl.string(W.t['4KoTLC']),
                    onPrimary: () => (tf ? eV(A.h8.ADDRESS) : (0, f.og)())
                }));
            break;
        case A.h8.PAYMENT_REQUEST_INFORMATION:
            (t = (0, r.jsx)(eE, {})), (n = (0, r.jsx)(eO, { onBack: () => eV(A.h8.PAYMENT_TYPE) }));
            break;
        case A.h8.CASH_APP_INFORMATION:
            let t_ = null != e4,
                tp = null != eG;
            (t = (0, r.jsx)(eg, {})),
                (n = (0, r.jsx)(eO, {
                    onBack: () => eV(A.h8.PAYMENT_TYPE),
                    primaryCTA: C.Z.CTAType.CONTINUE,
                    primaryText: t_ ? W.intl.string(W.t.PDTjLC) : W.intl.string(W.t['9ALP8/']),
                    onPrimary: () => (t_ ? eV(A.h8.ADDRESS) : (0, V.cp)()),
                    primaryDisabled: !tp
                }));
            break;
        case A.h8.ADDRESS:
            let th = async () => {
                eJ(!0);
                let e = eL.methodType;
                switch (e) {
                    case Y.He.CARD:
                        try {
                            let e = await (0, d.f0)(eM, eK.token, eQ.info, M);
                            te(e);
                        } catch (e) {}
                        break;
                    case Y.He.VENMO:
                    case Y.He.PAYPAL:
                        try {
                            s()(null != e2, 'Missing braintreeNonce');
                            let e = await (0, d.lP)(e2, eQ.info, M);
                            te(e);
                        } catch (e) {}
                        break;
                    case Y.He.EPS:
                        try {
                            let e = await (0, d.YQ)(eM, e6, eQ.info, M);
                            te(e);
                        } catch (e) {
                            et.warn(e);
                        }
                        break;
                    case Y.He.IDEAL:
                        try {
                            let e = await (0, d.aN)(eM, eQ.info, M);
                            te(e);
                        } catch (e) {
                            et.warn(e);
                        }
                        break;
                    case Y.He.PRZELEWY24:
                        try {
                            if (void 0 === e7) throw (0, d.SQ)('Bank required for Przelewy24');
                            let e = await (0, d.pF)(eM, { p24Bank: e7 }, eQ.info, M);
                            te(e);
                        } catch (e) {}
                        break;
                    case Y.He.PAYSAFE_CARD:
                    case Y.He.GRABPAY_MY:
                        try {
                            let t = await (0, d.sF)(eQ.info, e, M);
                            te(t);
                        } catch (e) {}
                        break;
                    case Y.He.GCASH:
                    case Y.He.MOMO_WALLET:
                    case Y.He.KAKAOPAY:
                    case Y.He.GOPAY_WALLET:
                        try {
                            let { redirectConfirmation: t } = await (0, d.Dk)(eQ.info, e, M);
                            e0(t);
                        } catch (e) {}
                        break;
                    case Y.He.GIROPAY:
                    case Y.He.BANCONTACT:
                        try {
                            let t = await (0, d.GV)(eM, eQ.info, e, M);
                            te(t);
                        } catch (e) {}
                        break;
                    case Y.He.CASH_APP:
                        try {
                            s()(null != e4, 'Missing adyenPaymentData');
                            let { paymentSource: t } = await (0, d.Dk)(eQ.info, e, M, e4, $);
                            s()(null != t, 'Cash App Pay Payment Source missing'), te(t);
                        } catch (e) {}
                        break;
                    default:
                        throw Error('unknown step not handled');
                }
                e$ || eJ(!1);
            };
            switch (eL.methodType) {
                case Y.He.CARD:
                    (u = A.h8.CREDIT_CARD_INFORMATION), (o = Y.He.CARD);
                    break;
                case Y.He.PAYPAL:
                    (u = A.h8.PAYPAL_INFORMATION), (o = Y.He.PAYPAL);
                    break;
                case Y.He.VENMO:
                    (u = A.h8.VENMO_INFORMATION), (o = Y.He.VENMO);
                    break;
                case Y.He.GIROPAY:
                    (u = A.h8.PAYMENT_TYPE), (o = Y.He.GIROPAY);
                    break;
                case Y.He.PAYSAFE_CARD:
                case Y.He.GCASH:
                case Y.He.GRABPAY_MY:
                case Y.He.MOMO_WALLET:
                case Y.He.KAKAOPAY:
                case Y.He.GOPAY_WALLET:
                case Y.He.BANCONTACT:
                    (u = A.h8.PAYMENT_TYPE), (o = eL.methodType);
                    break;
                case Y.He.EPS:
                    (u = A.h8.EPS_INFORMATION), (o = Y.He.EPS);
                    break;
                case Y.He.IDEAL:
                    (u = A.h8.IDEAL_INFORMATION), (o = Y.He.IDEAL);
                    break;
                case Y.He.PRZELEWY24:
                    (u = A.h8.PRZELEWY24_INFORMATION), (o = Y.He.PRZELEWY24);
                    break;
                case Y.He.CASH_APP:
                    (u = A.h8.CASH_APP_INFORMATION), (o = Y.He.CASH_APP);
                    break;
                default:
                    (u = A.h8.PAYMENT_TYPE), (o = Y.He.CARD);
            }
            (t = (0, r.jsx)(eb, {
                billingAddressInfo: eQ.info,
                onBillingAddressChange: (e, t) => {
                    eX({
                        info: Q({}, eQ.info, e),
                        isValid: t
                    });
                },
                paymentSourceType: o
            })),
                (n = (0, r.jsx)(eO, {
                    onBack: () => eV(u),
                    primaryCTA: C.Z.CTAType.CONTINUE,
                    primaryText: W.intl.string(W.t.PDTjLC),
                    primarySubmitting: eq,
                    primaryDisabled: !eQ.isValid || e5,
                    onPrimary: th
                }));
            break;
        case A.h8.AWAITING_AUTHENTICATION:
            t = (0, r.jsx)(ey, {});
            break;
        default:
            throw Error('Unexpected step: '.concat(eR));
    }
    let tm = (0, r.jsx)(c.qBt, {
            className: z.sequencer,
            staticClassName: z.sequencerStatic,
            animatedNodeClassName: z.sequencerAnimatedNode,
            fillParent: !0,
            step: eR,
            steps: eL.steps,
            sideMargin: 20,
            children: t
        }),
        tg = eR === A.h8.PAYMENT_TYPE && 0 === m.length ? null : n;
    return B
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  H &&
                      (0, r.jsx)(N.Z, {
                          className: K.paymentModalBreadcrumbs,
                          isEligibleForTrial: H
                      }),
                  (0, r.jsxs)(R.C3, {
                      children: [(0, r.jsx)(D.Z, { className: K.paymentModalError }), tm]
                  }),
                  (0, r.jsx)(R.O3, { children: tg })
              ]
          })
        : (0, r.jsx)(F.Z, {
              steps: null != v ? v : eL.steps,
              currentStep: null != S ? S : eR,
              paymentError: p.paymentError,
              header: L,
              hideBreadcrumbs: j,
              body: tm,
              footer: tg
          });
}
function eS(e) {
    let {
        defaultPaymentSourceId: t,
        paymentSources: n,
        hasFetchedPaymentSources: r
    } = (0, l.cj)([k.Z], () => ({
        defaultPaymentSourceId: void 0 !== e ? e : k.Z.defaultPaymentSourceId,
        paymentSources: k.Z.paymentSources,
        hasFetchedPaymentSources: k.Z.hasFetchedPaymentSources
    }));
    (0, v.ZP)(() => {
        null == Z.Z.cashAppPayComponent && (0, V.eI)(), (0, f.eI)(), r || (0, d.tZ)();
    });
    let [a, o] = i.useState(t);
    null != t && null == a && o(t);
    let [s, c] = i.useState(() => ({
            info: ed,
            isValid: !1
        })),
        [p, h] = i.useState(() => ({
            info: ef,
            isValid: !1
        })),
        [m, g] = i.useState(''),
        [E, b] = i.useState(''),
        [y, O] = i.useState(() => ({ token: null })),
        [I, S, T, A, N] = (0, l.Wu)([x.Z], () => [x.Z.braintreeEmail, x.Z.braintreeNonce, x.Z.error, x.Z.venmoUsername, x.Z.adyenPaymentData]),
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
        [U, G] = i.useState(null),
        F = i.useRef(null),
        H = (0, l.e7)([M.Z], () => M.Z.isAwaitingAuthentication),
        [Y, W] = (0, l.Wu)([j.Z], () => [j.Z.purchaseTokenAuthState, j.Z.purchaseTokenHash]);
    return (
        i.useEffect(() => {
            null != U && null != F.current && F.current.scrollIntoView({ behavior: 'smooth' });
        }, [U]),
        {
            paymentSources: n,
            paymentSourceId: a,
            hasFetchedPaymentSources: r,
            setPaymentSourceId: o,
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
            venmoUsername: A,
            adyenPaymentData: N,
            paymentError: null != C ? C : T,
            paymentAuthenticationState: R ? B.wr.PENDING : null != C ? B.wr.ERROR : B.wr.NONE,
            purchaseError: U,
            setPurchaseError: G,
            purchaseErrorBlockRef: F,
            isAuthenticating: H,
            purchaseTokenAuthState: Y,
            purchaseTokenHash: W,
            epsBankState: E,
            setEpsBankState: b,
            p24BankState: m,
            setP24BankState: g
        }
    );
}
