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
    _ = n(159351),
    p = n(801937),
    h = n(282164),
    m = n(915271),
    g = n(228666),
    E = n(723484),
    b = n(122192),
    v = n(296214),
    y = n(493773),
    O = n(870630),
    I = n(710845),
    S = n(563132),
    T = n(409813),
    N = n(51499),
    A = n(586585),
    C = n(614277),
    R = n(620824),
    P = n(737143),
    w = n(926841),
    D = n(35248),
    L = n(439021),
    x = n(698708),
    M = n(351402),
    k = n(975060),
    j = n(505649),
    U = n(853872),
    G = n(882712),
    B = n(358085),
    F = n(622999),
    V = n(176919),
    Z = n(185139),
    H = n(559725),
    W = n(439041),
    Y = n(850228),
    K = n(231338),
    z = n(388032),
    q = n(683017),
    Q = n(137635);
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
let er = new I.Z('AddPaymentStep.tsx'),
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
    return (0, r.jsx)('div', {
        className: q.body,
        children: (0, r.jsx)(p.ZP, J({}, e))
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
        children: (0, r.jsx)(Y.Z, {})
    });
}
function ev() {
    let e = (0, l.e7)([M.Z], () => M.Z.isBusy),
        t = (0, l.e7)([k.Z], () => k.Z.stripePaymentMethod);
    return (0, r.jsx)(v.k, {
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
function eI(e) {
    return () => (null != k.Z.error && (0, _.fw)(), e());
}
function eS(e) {
    let { onPrimary: t, onBack: n } = e,
        i = et(e, ['onPrimary', 'onBack']),
        o = t;
    null != t && (o = eI(t));
    let a = n;
    return (
        null != n && (a = eI(n)),
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
        { paymentModalArgs: p, initialStep: h, prependSteps: m, appendSteps: g, onReturn: E, onComplete: b, onStepChange: v, breadcrumpSteps: y, currentBreadcrumpStep: I, header: M, analyticsLocation: j, hideBreadcrumbs: G = !1, usePaymentModalStep: V = !1, isEligibleForTrial: Y = !1, allowDesktopRedirectPurchase: X = !1, toastContent: $, overwriteSubscriptionPaymentSource: et = !1 } = e,
        en = {
            steps: [...m, ...eo, ...g],
            methodType: K.He.CARD
        },
        e_ = {
            steps: [...m, ...ei, ...g],
            methodType: K.He.PAYMENT_REQUEST
        },
        ep = {
            steps: [...m, ...ea, ...g],
            methodType: K.He.PAYPAL
        },
        eI = {
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
        [eL, ex] = i.useState(null),
        [eM, ek] = i.useState(eP(h)),
        { stripe: ej, contextMetadata: eU, activitySessionId: eG } = (0, S.JL)(),
        eB = (0, l.e7)([k.Z], () => k.Z.redirectedPaymentSourceId),
        eF = (0, l.e7)([W.Z], () => W.Z.cashAppPayComponent),
        eV = {
            completeSteps: tn,
            setIsSubmittingCurrentStep: p.setIsSubmittingCurrentStep
        },
        eZ = i.useRef(eV);
    function eH(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        ex(null),
            eD(e),
            t &&
                v({
                    currentStep: ew,
                    toStep: e
                });
    }
    function eW(e) {
        (0, c.showToast)((0, c.createToast)(void 0 !== $ ? $ : z.NW.string(z.t['VJPg+v']), c.ToastType.SUCCESS, { position: c.ToastPosition.BOTTOM })), b(ew, e), eH(h, !1);
    }
    i.useEffect(() => {
        eZ.current = eV;
    }),
        i.useEffect(() => {
            let { completeSteps: e, setIsSubmittingCurrentStep: t } = eZ.current;
            (async () => {
                if (null == eB) return;
                await (0, d.tZ)();
                let n = U.Z.getPaymentSource(eB);
                null != n && (e(n), t(!1));
            })();
        }, [eB]);
    let { setPaymentSourceId: eY, creditCardState: eK, setCreditCardState: ez, tokenState: eq, setTokenState: eQ, isSubmittingCurrentStep: eX, billingAddressState: eJ, setBillingAddressState: e$, setIsSubmittingCurrentStep: e0, hasRedirectURL: e1, setHasRedirectURL: e2, braintreeEmail: e3, braintreeNonce: e4, venmoUsername: e6, adyenPaymentData: e5, isAuthenticating: e7, epsBankState: e8, setEpsBankState: e9, p24BankState: te, setP24BankState: tt } = p;
    function tn(e) {
        eY(e.id), eW(e);
    }
    let tr = (0, P.q1)().enabled && X,
        ti = (0, w.a)().enabled && X,
        to = (0, R.b)().enabled,
        ta = to && X,
        ts = (0, B.isDesktop)() ? [] : [...(to ? ['applePay'] : []), 'googlePay'];
    ti && !ts.includes('googlePay') && ts.push('googlePay'), ta && !ts.includes('applePay') && ts.push('applePay');
    let [tl, tc] = i.useState(!1),
        tu = i.useRef(null),
        td = () => {
            null != tu.current && tu.current.show();
        };
    switch (ew) {
        case T.h8.ATTEMPT_GOOGLE_PAY:
        case T.h8.ATTEMPT_APPLE_PAY:
        case T.h8.PAYMENT_TYPE:
            let tf = (e, t) => {
                    switch (e) {
                        case K.He.CARD:
                            tr ? eH(T.h8.AWAITING_BROWSER_CHECKOUT) : (ek(en), eH(T.h8.CREDIT_CARD_INFORMATION));
                            break;
                        case K.He.PAYPAL:
                            ek(ep), eH(T.h8.PAYPAL_INFORMATION);
                            break;
                        case K.He.VENMO:
                            ek(eI), eH(T.h8.VENMO_INFORMATION);
                            break;
                        case K.He.PAYMENT_REQUEST:
                            ti && 'googlePay' === t ? eH(T.h8.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY) : ta && 'applePay' === t ? eH(T.h8.AWAITING_BROWSER_CHECKOUT_APPLE_PAY) : (ek(e_), eH(T.h8.PAYMENT_REQUEST_INFORMATION));
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
                    null != k.Z.error && (0, _.fw)();
                },
                t_ = (e, t) => {
                    e$((e) => ee(J({}, e), { info: t })), ek(e_), tn(e);
                },
                tp = () => {
                    ek(eT), eH(T.h8.PAYMENT_TYPE);
                },
                th = async (e) => {
                    if (((0, _.Xt)(e), null == e)) {
                        tp();
                        return;
                    }
                    try {
                        let t = await (0, d.i6)(e, void 0, j),
                            { billingAddressInfo: n } = (0, F.az)(e);
                        t_(t, n);
                    } catch (e) {}
                };
            if (ew === T.h8.ATTEMPT_GOOGLE_PAY || ew === T.h8.ATTEMPT_APPLE_PAY) {
                let e = z.NW.string(ew === T.h8.ATTEMPT_APPLE_PAY ? z.t.czhXDg : z.t.Zj2xQ0),
                    i = z.NW.string(ew === T.h8.ATTEMPT_APPLE_PAY ? z.t.WoXvJC : z.t.wnVVr6);
                (t = (0, r.jsx)(L.t, {
                    onChooseType: tf,
                    paymentRequestWallet: ew === T.h8.ATTEMPT_APPLE_PAY ? 'applePay' : 'googlePay',
                    onStripePaymentMethodReceived: th,
                    onPaymentRequestFailure: () => {
                        tf(K.He.CARD), ex(e);
                    },
                    onValidPaymentRequest: () => tc(!0),
                    paymentRequestRef: tu
                })),
                    (n = (0, r.jsx)(eS, {
                        onBack: () => eH(T.h8.PAYMENT_TYPE),
                        primaryCTA: A.Z.CTAType.CONTINUE,
                        primaryText: i,
                        onPrimary: () => td(),
                        primaryDisabled: !tl
                    }));
                break;
            }
            (t = (0, r.jsx)(eh, {
                onChooseType: tf,
                onStripePaymentMethodReceived: th,
                paymentRequestWallets: ts,
                isEligibleForTrial: Y,
                paymentRequestPaymentContext: {
                    contextMetadata: eU,
                    activitySessionId: eG
                }
            })),
                (n = (0, r.jsx)(eS, { onBack: E }));
            break;
        case T.h8.CREDIT_CARD_INFORMATION:
            let tm = async (e) => {
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
                infoNotice: eL,
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
                        return (0, r.jsx)(eS, {
                            onBack: () => eH(T.h8.PAYMENT_TYPE),
                            primaryCTA: A.Z.CTAType.CONTINUE,
                            primaryType: 'submit',
                            primaryText: z.NW.string(z.t.PDTjLC),
                            primarySubmitting: eX,
                            primaryDisabled: !eK.isValid,
                            onPrimary: () => tm(t)
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
                    onPurchaseComplete: () => b(ew),
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
                (n = (0, r.jsx)(eS, {
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
                billingAddressInfo: eJ.info
            })),
                (n = (0, r.jsx)(eS, {
                    onBack: () => eH(T.h8.PAYMENT_TYPE),
                    primaryCTA: A.Z.CTAType.CONTINUE,
                    primaryText: z.NW.string(z.t.PDTjLC),
                    primaryDisabled: '' === eJ.info.name,
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
                    tt(e);
                },
                p24BankValue: te,
                billingAddressInfo: eJ.info
            })),
                (n = (0, r.jsx)(eS, {
                    onBack: () => eH(T.h8.PAYMENT_TYPE),
                    primaryCTA: A.Z.CTAType.CONTINUE,
                    primaryText: z.NW.string(z.t.PDTjLC),
                    primaryDisabled: void 0 === eJ.info.name || '' === eJ.info.name || void 0 === eJ.info.email || '' === eJ.info.email || void 0 === te || '' === te,
                    onPrimary: () => eH(T.h8.ADDRESS)
                }));
            break;
        case T.h8.PAYPAL_INFORMATION:
            let tg = 0 !== e3.length && null != e4;
            (t = (0, r.jsx)(eg, {})),
                (n = (0, r.jsx)(eS, {
                    onBack: () => eH(T.h8.PAYMENT_TYPE),
                    primaryCTA: A.Z.CTAType.CONTINUE,
                    primaryText: tg ? z.NW.string(z.t.PDTjLC) : z.NW.string(z.t.Djzd7O),
                    onPrimary: () => (tg ? eH(T.h8.ADDRESS) : (0, f.i0)())
                }));
            break;
        case T.h8.VENMO_INFORMATION:
            let tE = 0 !== e6.length && null != e4;
            (t = (0, r.jsx)(eE, {})),
                (n = (0, r.jsx)(eS, {
                    onBack: () => eH(T.h8.PAYMENT_TYPE),
                    primaryCTA: A.Z.CTAType.CONTINUE,
                    primaryText: tE ? z.NW.string(z.t.PDTjLC) : z.NW.string(z.t['4KoTLC']),
                    onPrimary: () => (tE ? eH(T.h8.ADDRESS) : (0, f.og)())
                }));
            break;
        case T.h8.PAYMENT_REQUEST_INFORMATION:
            (t = (0, r.jsx)(ev, {})), (n = (0, r.jsx)(eS, { onBack: () => eH(T.h8.PAYMENT_TYPE) }));
            break;
        case T.h8.CASH_APP_INFORMATION:
            let tb = null != e5,
                tv = null != eF;
            (t = (0, r.jsx)(eb, {})),
                (n = (0, r.jsx)(eS, {
                    onBack: () => eH(T.h8.PAYMENT_TYPE),
                    primaryCTA: A.Z.CTAType.CONTINUE,
                    primaryText: tb ? z.NW.string(z.t.PDTjLC) : z.NW.string(z.t['9ALP8/']),
                    onPrimary: () => (tb ? eH(T.h8.ADDRESS) : (0, H.cp)()),
                    primaryDisabled: !tv
                }));
            break;
        case T.h8.ADDRESS:
            let ty = async () => {
                e0(!0);
                let e = eM.methodType;
                switch (e) {
                    case K.He.CARD:
                        try {
                            let e = await (0, d.f0)(ej, eq.token, eJ.info, j);
                            tn(e);
                        } catch (e) {}
                        break;
                    case K.He.VENMO:
                    case K.He.PAYPAL:
                        try {
                            s()(null != e4, 'Missing braintreeNonce');
                            let e = await (0, d.lP)(e4, eJ.info, j);
                            tn(e);
                        } catch (e) {}
                        break;
                    case K.He.EPS:
                        try {
                            let e = await (0, d.YQ)(ej, e8, eJ.info, j);
                            tn(e);
                        } catch (e) {
                            er.warn(e);
                        }
                        break;
                    case K.He.IDEAL:
                        try {
                            let e = await (0, d.aN)(ej, eJ.info, j);
                            tn(e);
                        } catch (e) {
                            er.warn(e);
                        }
                        break;
                    case K.He.PRZELEWY24:
                        try {
                            if (void 0 === te) throw (0, d.SQ)('Bank required for Przelewy24');
                            let e = await (0, d.pF)(ej, { p24Bank: te }, eJ.info, j);
                            tn(e);
                        } catch (e) {}
                        break;
                    case K.He.PAYSAFE_CARD:
                    case K.He.GRABPAY_MY:
                        try {
                            let t = await (0, d.sF)(eJ.info, e, j);
                            tn(t);
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
                            tn(t);
                        } catch (e) {}
                        break;
                    case K.He.CASH_APP:
                        try {
                            s()(null != e5, 'Missing adyenPaymentData');
                            let { paymentSource: t } = await (0, d.Dk)(eJ.info, e, j, e5, et);
                            s()(null != t, 'Cash App Pay Payment Source missing'), tn(t);
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
                (n = (0, r.jsx)(eS, {
                    onBack: () => eH(u),
                    primaryCTA: A.Z.CTAType.CONTINUE,
                    primaryText: z.NW.string(z.t.PDTjLC),
                    primarySubmitting: eX,
                    primaryDisabled: !eJ.isValid || e7,
                    onPrimary: ty
                }));
            break;
        case T.h8.AWAITING_AUTHENTICATION:
            t = (0, r.jsx)(eO, {});
            break;
        default:
            throw Error('Unexpected step: '.concat(ew));
    }
    let tO = (0, r.jsx)(c.qBt, {
            className: Q.sequencer,
            staticClassName: Q.sequencerStatic,
            animatedNodeClassName: Q.sequencerAnimatedNode,
            fillParent: !0,
            step: ew,
            steps: eM.steps,
            sideMargin: 20,
            children: t
        }),
        tI = ew === T.h8.PAYMENT_TYPE && 0 === m.length ? null : n;
    return V
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  Y &&
                      (0, r.jsx)(N.Z, {
                          className: q.paymentModalBreadcrumbs,
                          isEligibleForTrial: Y
                      }),
                  (0, r.jsxs)(C.C3, {
                      children: [(0, r.jsx)(x.Z, { className: q.paymentModalError }), tO]
                  }),
                  (0, r.jsx)(C.O3, { children: tI })
              ]
          })
        : (0, r.jsx)(Z.Z, {
              steps: null != y ? y : eM.steps,
              currentStep: null != I ? I : ew,
              paymentError: p.paymentError,
              header: M,
              hideBreadcrumbs: G,
              body: tO,
              footer: tI
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
            info: e_,
            isValid: !1
        })),
        [p, h] = i.useState(() => ({
            info: ep,
            isValid: !1
        })),
        [m, g] = i.useState(''),
        [E, b] = i.useState(''),
        [v, O] = i.useState(() => ({ token: null })),
        [I, S, T, N, A] = (0, l.Wu)([k.Z], () => [k.Z.braintreeEmail, k.Z.braintreeNonce, k.Z.error, k.Z.venmoUsername, k.Z.adyenPaymentData]),
        [C, R] = (0, l.Wu)([j.Z], () => [j.Z.error, j.Z.isAwaitingAuthentication]);
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
        B = i.useRef(null),
        F = (0, l.e7)([j.Z], () => j.Z.isAwaitingAuthentication),
        [Z, Y] = (0, l.Wu)([G.Z], () => [G.Z.purchaseTokenAuthState, G.Z.purchaseTokenHash]);
    return (
        i.useEffect(() => {
            null != x && null != B.current && B.current.scrollIntoView({ behavior: 'smooth' });
        }, [x]),
        {
            paymentSources: n,
            paymentSourceId: o,
            hasFetchedPaymentSources: r,
            setPaymentSourceId: a,
            creditCardState: s,
            setCreditCardState: c,
            tokenState: v,
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
            paymentAuthenticationState: R ? V.wr.PENDING : null != C ? V.wr.ERROR : V.wr.NONE,
            purchaseError: x,
            setPurchaseError: M,
            purchaseErrorBlockRef: B,
            isAuthenticating: F,
            purchaseTokenAuthState: Z,
            purchaseTokenHash: Y,
            epsBankState: E,
            setEpsBankState: b,
            p24BankState: m,
            setP24BankState: g
        }
    );
}
