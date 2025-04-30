n.d(t, {
    fL: () => eA,
    vP: () => eT
}),
    n(388685),
    n(49124),
    n(415506);
var r = n(255367),
    i = n(73800),
    a = n(957957),
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
    U = n(55563),
    G = n(358085),
    B = n(622999),
    V = n(176919),
    F = n(185139),
    Z = n(396955),
    H = n(559725),
    Y = n(439041),
    W = n(850228),
    K = n(231338),
    z = n(388032),
    q = n(327763),
    Q = n(106194);
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
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function en(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let er = new S.Z('AddPaymentStep.tsx'),
    ei = [A.h8.PAYMENT_TYPE],
    ea = [A.h8.PAYMENT_TYPE, A.h8.CREDIT_CARD_INFORMATION, A.h8.ADDRESS],
    eo = [A.h8.PAYMENT_TYPE, A.h8.PAYPAL_INFORMATION, A.h8.ADDRESS],
    es = [A.h8.PAYMENT_TYPE, A.h8.VENMO_INFORMATION, A.h8.ADDRESS];
A.h8.PAYMENT_TYPE, A.h8.PAYMENT_REQUEST_INFORMATION, A.h8.ADDRESS;
let el = [A.h8.PAYMENT_TYPE, A.h8.PRZELEWY24_INFORMATION, A.h8.ADDRESS],
    ec = [A.h8.PAYMENT_TYPE, A.h8.EPS_INFORMATION, A.h8.ADDRESS],
    eu = [A.h8.PAYMENT_TYPE, A.h8.IDEAL_INFORMATION, A.h8.ADDRESS],
    ed = [A.h8.PAYMENT_TYPE, A.h8.CASH_APP_INFORMATION, A.h8.ADDRESS],
    ef = [A.h8.PAYMENT_TYPE, A.h8.ADDRESS],
    e_ = {
        name: '',
        cardNumber: '',
        expirationDate: '',
        cvc: ''
    },
    ep = {
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
    let { paymentSourceTypeRestrictions: t } = e,
        n = null != t && t.length > 0 ? Z.w.ADD_NEW_PAYMENT_METHOD : void 0;
    return (0, r.jsxs)('div', {
        className: q.body,
        children: [(0, r.jsx)(Z.Y, { paymentRestrictionBannerType: n }), (0, r.jsx)(p.ZP, J({}, e))]
    });
}
function em(e) {
    let { onCardInfoChange: t, infoNotice: n } = e,
        i = (0, l.e7)([x.Z], () => x.Z.error);
    return (0, r.jsxs)('div', {
        className: q.body,
        children: [
            null != n &&
                (0, r.jsx)(c.kzN, {
                    className: q.infoNotice,
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
function eb() {
    return (0, r.jsx)('div', {
        className: q.body,
        children: (0, r.jsx)(W.Z, {})
    });
}
function ey() {
    let e = (0, l.e7)([L.Z], () => L.Z.isBusy),
        t = (0, l.e7)([x.Z], () => x.Z.stripePaymentMethod);
    return (0, r.jsx)(y.k, {
        className: q.body,
        stripePaymentMethod: t,
        submitting: e
    });
}
function eO(e) {
    let { billingAddressInfo: t, onBillingAddressChange: n, paymentSourceType: i } = e,
        a = (0, l.e7)([x.Z], () => x.Z.error);
    return (0, r.jsx)('div', {
        className: q.body,
        children: (0, r.jsx)(g.P, {
            billingAddressInfo: t,
            billingError: a,
            onBillingAddressChange: n,
            paymentSourceType: i
        })
    });
}
function ev() {
    return (0, r.jsx)(E.F, { className: q.body });
}
function eI(e) {
    return () => (null != x.Z.error && (0, _.fw)(), e());
}
function eS(e) {
    let { onPrimary: t, onBack: n } = e,
        i = et(e, ['onPrimary', 'onBack']),
        a = t;
    null != t && (a = eI(t));
    let o = n;
    return (
        null != n && (o = eI(n)),
        (0, r.jsx)(
            C.Z,
            ee(J({}, i), {
                onPrimary: a,
                onBack: o
            })
        )
    );
}
function eT(e) {
    var t;
    let n,
        o,
        u,
        p,
        { paymentModalArgs: h, initialStep: m, prependSteps: g, appendSteps: E, onReturn: b, onComplete: y, onStepChange: O, breadcrumpSteps: S, currentBreadcrumpStep: L, header: M, analyticsLocation: j, hideBreadcrumbs: V = !1, usePaymentModalStep: Z = !1, isEligibleForTrial: W = !1, allowDesktopRedirectPurchase: X = !1, toastContent: $, overwriteSubscriptionPaymentSource: et = !1 } = e,
        en = {
            steps: [...g, ...ea, ...E],
            methodType: K.He.CARD
        },
        e_ = {
            steps: [...g, ...ei, ...E],
            methodType: K.He.PAYMENT_REQUEST
        },
        ep = {
            steps: [...g, ...eo, ...E],
            methodType: K.He.PAYPAL
        },
        eI = {
            steps: [...g, ...es, ...E],
            methodType: K.He.VENMO
        },
        eT = {
            steps: [...g, ...ei, ...E]
        },
        eA = {
            steps: [...g, ...el, ...E],
            methodType: K.He.PRZELEWY24
        },
        eN = {
            steps: [...g, ...ec, ...E],
            methodType: K.He.EPS
        },
        eC = {
            steps: [...g, ...eu, ...E],
            methodType: K.He.IDEAL
        },
        eR = {
            steps: [...g, ...ed, ...E],
            methodType: K.He.CASH_APP
        };
    function eP(e) {
        switch (e) {
            case A.h8.CREDIT_CARD_INFORMATION:
                return en;
            case A.h8.CASH_APP_INFORMATION:
                return eR;
            default:
                return { steps: [A.h8.ADD_PAYMENT_STEPS] };
        }
    }
    let [ew, eD] = i.useState(m),
        [eL, ex] = i.useState(null),
        [eM, ek] = i.useState(eP(m)),
        { stripe: ej, contextMetadata: eU, activitySessionId: eG } = (0, T.JL)(),
        eB = (0, l.e7)([x.Z], () => x.Z.redirectedPaymentSourceId),
        eV = (0, l.e7)([Y.Z], () => Y.Z.cashAppPayComponent),
        eF = {
            completeSteps: to,
            setIsSubmittingCurrentStep: h.setIsSubmittingCurrentStep
        },
        eZ = i.useRef(eF);
    function eH(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        ex(null),
            eD(e),
            t &&
                O({
                    currentStep: ew,
                    toStep: e
                });
    }
    function eY(e) {
        (0, c.showToast)((0, c.createToast)(void 0 !== $ ? $ : z.intl.string(z.t['VJPg+v']), c.ToastType.SUCCESS, { position: c.ToastPosition.BOTTOM })), y(ew, e), eH(m, !1);
    }
    i.useEffect(() => {
        eZ.current = eF;
    }),
        i.useEffect(() => {
            let { completeSteps: e, setIsSubmittingCurrentStep: t } = eZ.current;
            (async () => {
                if (null == eB) return;
                await (0, d.tZ)();
                let n = k.Z.getPaymentSource(eB);
                null != n && (e(n), t(!1));
            })();
        }, [eB]);
    let { setPaymentSourceId: eW, creditCardState: eK, setCreditCardState: ez, tokenState: eq, setTokenState: eQ, isSubmittingCurrentStep: eX, billingAddressState: eJ, setBillingAddressState: e$, setIsSubmittingCurrentStep: e0, hasRedirectURL: e1, setHasRedirectURL: e2, braintreeEmail: e3, braintreeNonce: e4, venmoUsername: e5, adyenPaymentData: e6, isAuthenticating: e8, epsBankState: e7, setEpsBankState: e9, p24BankState: te, setP24BankState: tt, selectedSkuId: tn } = h,
        tr = null != tn ? tn : '',
        ti = (0, l.e7)([U.Z], () => U.Z.get(tr), [tr]),
        ta = null == ti || null == (t = ti.eligiblePaymentGateways) ? void 0 : t.map((e) => e.valueOf());
    function to(e) {
        eW(e.id), eY(e);
    }
    let ts = !(0, G.isDesktop)() || X ? ['applePay', 'googlePay'] : [],
        [tl, tc] = i.useState(!1),
        tu = i.useRef(null),
        td = () => {
            null != tu.current && tu.current.show();
        };
    switch (ew) {
        case A.h8.ATTEMPT_GOOGLE_PAY:
        case A.h8.ATTEMPT_APPLE_PAY:
        case A.h8.PAYMENT_TYPE:
            let tf = (e, t) => {
                    switch (e) {
                        case K.He.CARD:
                            X ? eH(A.h8.AWAITING_BROWSER_CHECKOUT) : (ek(en), eH(A.h8.CREDIT_CARD_INFORMATION));
                            break;
                        case K.He.PAYPAL:
                            ek(ep), eH(A.h8.PAYPAL_INFORMATION);
                            break;
                        case K.He.VENMO:
                            ek(eI), eH(A.h8.VENMO_INFORMATION);
                            break;
                        case K.He.PAYMENT_REQUEST:
                            X && 'googlePay' === t ? eH(A.h8.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY) : X && 'applePay' === t ? eH(A.h8.AWAITING_BROWSER_CHECKOUT_APPLE_PAY) : (ek(e_), eH(A.h8.PAYMENT_REQUEST_INFORMATION));
                            break;
                        case K.He.PRZELEWY24:
                            ek(eA), eH(A.h8.PRZELEWY24_INFORMATION);
                            break;
                        case K.He.EPS:
                            ek(eN), eH(A.h8.EPS_INFORMATION);
                            break;
                        case K.He.IDEAL:
                            ek(eC), eH(A.h8.IDEAL_INFORMATION);
                            break;
                        case K.He.CASH_APP:
                            ek(eR), eH(A.h8.CASH_APP_INFORMATION);
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
                                steps: [...g, ...ef, ...E],
                                methodType: e
                            }),
                                eH(A.h8.ADDRESS);
                    }
                    null != x.Z.error && (0, _.fw)();
                },
                t_ = (e, t) => {
                    e$((e) => ee(J({}, e), { info: t })), ek(e_), to(e);
                },
                tp = () => {
                    ek(eT), eH(A.h8.PAYMENT_TYPE);
                },
                th = async (e) => {
                    if (((0, _.Xt)(e), null == e)) return void tp();
                    try {
                        let t = await (0, d.i6)(e, void 0, j),
                            { billingAddressInfo: n } = (0, B.az)(e);
                        t_(t, n);
                    } catch (e) {}
                };
            if (ew === A.h8.ATTEMPT_GOOGLE_PAY || ew === A.h8.ATTEMPT_APPLE_PAY) {
                let e = z.intl.string(ew === A.h8.ATTEMPT_APPLE_PAY ? z.t.czhXDg : z.t.Zj2xQ0),
                    t = z.intl.string(ew === A.h8.ATTEMPT_APPLE_PAY ? z.t.WoXvJC : z.t.wnVVr6);
                (n = (0, r.jsx)(w.t, {
                    onChooseType: tf,
                    paymentRequestWallet: ew === A.h8.ATTEMPT_APPLE_PAY ? 'applePay' : 'googlePay',
                    onStripePaymentMethodReceived: th,
                    onPaymentRequestFailure: () => {
                        tf(K.He.CARD), ex(e);
                    },
                    onValidPaymentRequest: () => tc(!0),
                    paymentRequestRef: tu
                })),
                    (o = (0, r.jsx)(eS, {
                        onBack: () => eH(A.h8.PAYMENT_TYPE),
                        primaryCTA: C.Z.CTAType.CONTINUE,
                        primaryText: t,
                        onPrimary: () => td(),
                        primaryDisabled: !tl
                    }));
                break;
            }
            (n = (0, r.jsx)(eh, {
                onChooseType: tf,
                onStripePaymentMethodReceived: th,
                paymentRequestWallets: ts,
                isEligibleForTrial: W,
                paymentRequestPaymentContext: {
                    contextMetadata: eU,
                    activitySessionId: eG
                },
                paymentSourceTypeRestrictions: ta
            })),
                (o = (0, r.jsx)(eS, { onBack: b }));
            break;
        case A.h8.CREDIT_CARD_INFORMATION:
            let tm = async (e) => {
                e0(!0);
                try {
                    let t = await (0, d.qv)(ej, e);
                    eQ({ token: t }), eH(A.h8.ADDRESS);
                } catch (e) {
                    var t;
                    er.error(null != (t = e.message) ? t : JSON.stringify(e));
                } finally {
                    e0(!1);
                }
            };
            (n = (0, r.jsx)(em, {
                infoNotice: eL,
                onCardInfoChange: (e, t) => {
                    ez({
                        info: e,
                        isValid: t
                    }),
                        e$((t) => ee(J({}, t), { info: ee(J({}, t.info), { name: e.name }) }));
                }
            })),
                (o = (0, r.jsx)(a.ElementsConsumer, {
                    children: (e) => {
                        let { elements: t } = e;
                        return (0, r.jsx)(eS, {
                            onBack: () => eH(A.h8.PAYMENT_TYPE),
                            primaryCTA: C.Z.CTAType.CONTINUE,
                            primaryType: 'submit',
                            primaryText: z.intl.string(z.t.PDTjLC),
                            primarySubmitting: eX,
                            primaryDisabled: !eK.isValid,
                            onPrimary: () => tm(t)
                        });
                    }
                }));
            break;
        case A.h8.AWAITING_BROWSER_CHECKOUT:
        case A.h8.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
        case A.h8.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
            (n = (0, r.jsx)('div', {
                className: q.body,
                children: (0, r.jsx)(P.M, {
                    step: ew,
                    onPurchaseComplete: () => y(ew),
                    onHandoffFailure: () => {
                        ek(en), eH(A.h8.CREDIT_CARD_INFORMATION);
                    }
                })
            })),
                (o = (0, r.jsx)(P.a, {
                    onPrimaryClick: () => {
                        ek(en), eH(A.h8.CREDIT_CARD_INFORMATION);
                    },
                    onBackClick: () => {
                        ek(eT), eH(A.h8.PAYMENT_TYPE);
                    }
                }));
            break;
        case A.h8.EPS_INFORMATION:
            (n = (0, r.jsx)(I.Z, {
                type: K.He.EPS,
                onAccountHolderNameChange: (e) =>
                    e$({
                        info: ee(J({}, eJ.info), { name: e }),
                        isValid: eJ.isValid
                    }),
                onEPSBankChange: (e) => e9(e),
                epsBankValue: e7,
                billingAddressInfo: eJ.info
            })),
                (o = (0, r.jsx)(eS, {
                    onBack: () => eH(A.h8.PAYMENT_TYPE),
                    primaryCTA: C.Z.CTAType.CONTINUE,
                    primaryText: z.intl.string(z.t.PDTjLC),
                    primaryDisabled: void 0 === e7 || '' === e7 || '' === eJ.info.name,
                    onPrimary: () => eH(A.h8.ADDRESS)
                }));
            break;
        case A.h8.IDEAL_INFORMATION:
            (n = (0, r.jsx)(v.Z, {
                type: K.He.IDEAL,
                onAccountHolderNameChange: (e) =>
                    e$({
                        info: ee(J({}, eJ.info), { name: e }),
                        isValid: eJ.isValid
                    }),
                billingAddressInfo: eJ.info
            })),
                (o = (0, r.jsx)(eS, {
                    onBack: () => eH(A.h8.PAYMENT_TYPE),
                    primaryCTA: C.Z.CTAType.CONTINUE,
                    primaryText: z.intl.string(z.t.PDTjLC),
                    primaryDisabled: '' === eJ.info.name,
                    onPrimary: () => eH(A.h8.ADDRESS)
                }));
            break;
        case A.h8.PRZELEWY24_INFORMATION:
            (n = (0, r.jsx)(I.Z, {
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
                    tt(e);
                },
                p24BankValue: te,
                billingAddressInfo: eJ.info
            })),
                (o = (0, r.jsx)(eS, {
                    onBack: () => eH(A.h8.PAYMENT_TYPE),
                    primaryCTA: C.Z.CTAType.CONTINUE,
                    primaryText: z.intl.string(z.t.PDTjLC),
                    primaryDisabled: void 0 === eJ.info.name || '' === eJ.info.name || void 0 === eJ.info.email || '' === eJ.info.email || void 0 === te || '' === te,
                    onPrimary: () => eH(A.h8.ADDRESS)
                }));
            break;
        case A.h8.PAYPAL_INFORMATION:
            let tg = 0 !== e3.length && null != e4;
            (n = (0, r.jsx)(eg, {})),
                (o = (0, r.jsx)(eS, {
                    onBack: () => eH(A.h8.PAYMENT_TYPE),
                    primaryCTA: C.Z.CTAType.CONTINUE,
                    primaryText: tg ? z.intl.string(z.t.PDTjLC) : z.intl.string(z.t.Djzd7O),
                    onPrimary: () => (tg ? eH(A.h8.ADDRESS) : (0, f.i0)())
                }));
            break;
        case A.h8.VENMO_INFORMATION:
            let tE = 0 !== e5.length && null != e4;
            (n = (0, r.jsx)(eE, {})),
                (o = (0, r.jsx)(eS, {
                    onBack: () => eH(A.h8.PAYMENT_TYPE),
                    primaryCTA: C.Z.CTAType.CONTINUE,
                    primaryText: tE ? z.intl.string(z.t.PDTjLC) : z.intl.string(z.t['4KoTLC']),
                    onPrimary: () => (tE ? eH(A.h8.ADDRESS) : (0, f.og)())
                }));
            break;
        case A.h8.PAYMENT_REQUEST_INFORMATION:
            (n = (0, r.jsx)(ey, {})), (o = (0, r.jsx)(eS, { onBack: () => eH(A.h8.PAYMENT_TYPE) }));
            break;
        case A.h8.CASH_APP_INFORMATION:
            let tb = null != e6,
                ty = null != eV;
            (n = (0, r.jsx)(eb, {})),
                (o = (0, r.jsx)(eS, {
                    onBack: () => eH(A.h8.PAYMENT_TYPE),
                    primaryCTA: C.Z.CTAType.CONTINUE,
                    primaryText: tb ? z.intl.string(z.t.PDTjLC) : z.intl.string(z.t['9ALP8/']),
                    onPrimary: () => (tb ? eH(A.h8.ADDRESS) : (0, H.cp)()),
                    primaryDisabled: !ty
                }));
            break;
        case A.h8.ADDRESS:
            let tO = async () => {
                e0(!0);
                let e = eM.methodType;
                switch (e) {
                    case K.He.CARD:
                        try {
                            let e = await (0, d.f0)(ej, eq.token, eJ.info, j);
                            to(e);
                        } catch (e) {}
                        break;
                    case K.He.VENMO:
                    case K.He.PAYPAL:
                        try {
                            s()(null != e4, 'Missing braintreeNonce');
                            let e = await (0, d.lP)(e4, eJ.info, j);
                            to(e);
                        } catch (e) {}
                        break;
                    case K.He.EPS:
                        try {
                            let e = await (0, d.YQ)(ej, e7, eJ.info, j);
                            to(e);
                        } catch (e) {
                            er.warn(e);
                        }
                        break;
                    case K.He.IDEAL:
                        try {
                            let e = await (0, d.aN)(ej, eJ.info, j);
                            to(e);
                        } catch (e) {
                            er.warn(e);
                        }
                        break;
                    case K.He.PRZELEWY24:
                        try {
                            if (void 0 === te) throw (0, d.SQ)('Bank required for Przelewy24');
                            let e = await (0, d.pF)(ej, { p24Bank: te }, eJ.info, j);
                            to(e);
                        } catch (e) {}
                        break;
                    case K.He.PAYSAFE_CARD:
                    case K.He.GRABPAY_MY:
                        try {
                            let t = await (0, d.sF)(eJ.info, e, j);
                            to(t);
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
                            to(t);
                        } catch (e) {}
                        break;
                    case K.He.CASH_APP:
                        try {
                            s()(null != e6, 'Missing adyenPaymentData');
                            let { paymentSource: t } = await (0, d.Dk)(eJ.info, e, j, e6, et);
                            s()(null != t, 'Cash App Pay Payment Source missing'), to(t);
                        } catch (e) {}
                        break;
                    default:
                        throw Error('unknown step not handled');
                }
                e1 || e0(!1);
            };
            switch (eM.methodType) {
                case K.He.CARD:
                    (p = A.h8.CREDIT_CARD_INFORMATION), (u = K.He.CARD);
                    break;
                case K.He.PAYPAL:
                    (p = A.h8.PAYPAL_INFORMATION), (u = K.He.PAYPAL);
                    break;
                case K.He.VENMO:
                    (p = A.h8.VENMO_INFORMATION), (u = K.He.VENMO);
                    break;
                case K.He.GIROPAY:
                    (p = A.h8.PAYMENT_TYPE), (u = K.He.GIROPAY);
                    break;
                case K.He.PAYSAFE_CARD:
                case K.He.GCASH:
                case K.He.GRABPAY_MY:
                case K.He.MOMO_WALLET:
                case K.He.KAKAOPAY:
                case K.He.GOPAY_WALLET:
                case K.He.BANCONTACT:
                    (p = A.h8.PAYMENT_TYPE), (u = eM.methodType);
                    break;
                case K.He.EPS:
                    (p = A.h8.EPS_INFORMATION), (u = K.He.EPS);
                    break;
                case K.He.IDEAL:
                    (p = A.h8.IDEAL_INFORMATION), (u = K.He.IDEAL);
                    break;
                case K.He.PRZELEWY24:
                    (p = A.h8.PRZELEWY24_INFORMATION), (u = K.He.PRZELEWY24);
                    break;
                case K.He.CASH_APP:
                    (p = A.h8.CASH_APP_INFORMATION), (u = K.He.CASH_APP);
                    break;
                default:
                    (p = A.h8.PAYMENT_TYPE), (u = K.He.CARD);
            }
            (n = (0, r.jsx)(eO, {
                billingAddressInfo: eJ.info,
                onBillingAddressChange: (e, t) => {
                    e$({
                        info: J({}, eJ.info, e),
                        isValid: t
                    });
                },
                paymentSourceType: u
            })),
                (o = (0, r.jsx)(eS, {
                    onBack: () => eH(p),
                    primaryCTA: C.Z.CTAType.CONTINUE,
                    primaryText: z.intl.string(z.t.PDTjLC),
                    primarySubmitting: eX,
                    primaryDisabled: !eJ.isValid || e8,
                    onPrimary: tO
                }));
            break;
        case A.h8.AWAITING_AUTHENTICATION:
            n = (0, r.jsx)(ev, {});
            break;
        default:
            throw Error('Unexpected step: '.concat(ew));
    }
    let tv = (0, r.jsx)(c.qBt, {
            className: Q.sequencer,
            staticClassName: Q.sequencerStatic,
            animatedNodeClassName: Q.sequencerAnimatedNode,
            fillParent: !0,
            step: ew,
            steps: eM.steps,
            sideMargin: 20,
            children: n
        }),
        tI = ew === A.h8.PAYMENT_TYPE && 0 === g.length ? null : o;
    return Z
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  W &&
                      (0, r.jsx)(N.Z, {
                          className: q.paymentModalBreadcrumbs,
                          isEligibleForTrial: W
                      }),
                  (0, r.jsxs)(R.C3, {
                      children: [(0, r.jsx)(D.Z, { className: q.paymentModalError }), tv]
                  }),
                  (0, r.jsx)(R.O3, { children: tI })
              ]
          })
        : (0, r.jsx)(F.Z, {
              steps: null != S ? S : eM.steps,
              currentStep: null != L ? L : ew,
              paymentError: h.paymentError,
              header: M,
              hideBreadcrumbs: V,
              body: tv,
              footer: tI
          });
}
function eA(e) {
    let {
        defaultPaymentSourceId: t,
        paymentSources: n,
        hasFetchedPaymentSources: r
    } = (0, l.cj)([k.Z], () => ({
        defaultPaymentSourceId: void 0 !== e ? e : k.Z.defaultPaymentSourceId,
        paymentSources: k.Z.paymentSources,
        hasFetchedPaymentSources: k.Z.hasFetchedPaymentSources
    }));
    (0, O.ZP)(() => {
        null == Y.Z.cashAppPayComponent && (0, H.eI)(), (0, f.eI)(), r || (0, d.tZ)();
    });
    let [a, o] = i.useState(t);
    null != t && null == a && o(t);
    let [s, c] = i.useState(() => ({
            info: e_,
            isValid: !1
        })),
        [p, h] = i.useState(() => ({
            info: ep,
            isValid: !1
        })),
        [m, g] = i.useState(''),
        [E, b] = i.useState(''),
        [y, v] = i.useState(() => ({ token: null })),
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
        B = i.useRef(null),
        F = (0, l.e7)([M.Z], () => M.Z.isAwaitingAuthentication),
        [Z, W] = (0, l.Wu)([j.Z], () => [j.Z.purchaseTokenAuthState, j.Z.purchaseTokenHash]);
    return (
        i.useEffect(() => {
            null != U && null != B.current && B.current.scrollIntoView({ behavior: 'smooth' });
        }, [U]),
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
            braintreeNonce: S,
            venmoUsername: A,
            adyenPaymentData: N,
            paymentError: null != C ? C : T,
            paymentAuthenticationState: R ? V.wr.PENDING : null != C ? V.wr.ERROR : V.wr.NONE,
            purchaseError: U,
            setPurchaseError: G,
            purchaseErrorBlockRef: B,
            isAuthenticating: F,
            purchaseTokenAuthState: Z,
            purchaseTokenHash: W,
            epsBankState: E,
            setEpsBankState: b,
            p24BankState: m,
            setP24BankState: g
        }
    );
}
