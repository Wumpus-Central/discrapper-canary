n.d(t, {
    fL: () => eD,
    vP: () => ew,
}),
    n(836215),
    n(388685),
    n(49124),
    n(415506);
var r = n(951288),
    i = n(647438),
    a = n(289008),
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
    v = n(720452),
    I = n(561448),
    T = n(445239),
    S = n(870630),
    A = n(483454),
    C = n(710845),
    N = n(563132),
    R = n(409813),
    P = n(51499),
    w = n(586585),
    D = n(614277),
    L = n(35248),
    x = n(439021),
    M = n(698708),
    k = n(351402),
    j = n(975060),
    U = n(505649),
    G = n(853872),
    B = n(882712),
    Z = n(55563),
    F = n(358085),
    V = n(622999),
    H = n(51144),
    Y = n(176919),
    W = n(185139),
    K = n(396955),
    z = n(559725),
    q = n(439041),
    X = n(850228),
    Q = n(231338),
    J = n(388032),
    $ = n(750441),
    ee = n(987954);
function et(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function en(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                et(e, t, n[t]);
            });
    }
    return e;
}
function er(e, t) {
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
function ei(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : er(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function ea(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = eo(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function eo(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let es = new C.Z("AddPaymentStep.tsx"),
    el = [R.h8.PAYMENT_TYPE],
    ec = [R.h8.PAYMENT_TYPE, R.h8.CREDIT_CARD_INFORMATION, R.h8.ADDRESS],
    eu = [R.h8.PAYMENT_TYPE, R.h8.PAYPAL_INFORMATION, R.h8.ADDRESS],
    ed = [R.h8.PAYMENT_TYPE, R.h8.VENMO_INFORMATION, R.h8.ADDRESS],
    ef = [R.h8.PAYMENT_TYPE, R.h8.PRZELEWY24_INFORMATION, R.h8.ADDRESS],
    e_ = [R.h8.PAYMENT_TYPE, R.h8.EPS_INFORMATION, R.h8.ADDRESS],
    ep = [R.h8.PAYMENT_TYPE, R.h8.IDEAL_INFORMATION, R.h8.ADDRESS],
    eh = [R.h8.PAYMENT_TYPE, R.h8.CASH_APP_INFORMATION, R.h8.ADDRESS],
    em = [R.h8.PAYMENT_TYPE, R.h8.ADDRESS],
    eg = (e, t, n) => {
        if (t === Q.He.CARD) return e.map((e) => (e === R.h8.CREDIT_CARD_INFORMATION ? R.h8.PAYMENT_ELEMENT : e));
        if (t === Q.He.UNKNOWN || (0, I.qH)(t, n)) {
            let t = e.indexOf(R.h8.PAYMENT_TYPE);
            return e.toSpliced(t + 1, 0, R.h8.PAYMENT_ELEMENT);
        }
        return e;
    },
    eE = (e, t) => {
        let { prependSteps: n, appendSteps: r, paymentElementsEnabled: i, userIsStaff: a } = t;
        return e.map((e) => {
            let { baseSteps: t, methodType: o } = e,
                s = [...n, ...t, ...r];
            return {
                steps: i ? eg(s, o, a) : s,
                methodType: o,
            };
        });
    },
    eb = {
        name: "",
        cardNumber: "",
        expirationDate: "",
        cvc: "",
    },
    ey = {
        email: "",
        name: "",
        country: "",
        line1: "",
        line2: "",
        city: "",
        postalCode: "",
        state: "",
    };
function eO(e) {
    let { paymentSourceTypeRestrictions: t } = e,
        n = null != t && t.length > 0 ? K.w.ADD_NEW_PAYMENT_METHOD : void 0;
    return (0, r.jsxs)("div", {
        className: $.body,
        children: [(0, r.jsx)(K.Y, { paymentRestrictionBannerType: n }), (0, r.jsx)(p.Z, en({}, e))],
    });
}
function ev(e) {
    let { onCardInfoChange: t, infoNotice: n } = e,
        i = (0, l.e7)([j.Z], () => j.Z.error);
    return (0, r.jsxs)("div", {
        className: $.body,
        children: [
            null != n &&
                (0, r.jsx)("div", {
                    className: $.infoNotice,
                    children: (0, r.jsx)(c.M14, {
                        type: "info",
                        children: n,
                    }),
                }),
            (0, r.jsx)(b.j, {
                billingError: i,
                onCardInfoChange: t,
            }),
        ],
    });
}
function eI() {
    return (0, r.jsx)("div", {
        className: $.body,
        children: (0, r.jsx)(h.Z, {}),
    });
}
function eT() {
    return (0, r.jsx)("div", {
        className: $.body,
        children: (0, r.jsx)(m.Z, {}),
    });
}
function eS() {
    return (0, r.jsx)("div", {
        className: $.body,
        children: (0, r.jsx)(X.Z, {}),
    });
}
function eA() {
    let e = (0, l.e7)([k.Z], () => k.Z.isBusy),
        t = (0, l.e7)([j.Z], () => j.Z.stripePaymentMethod);
    return (0, r.jsx)(y.k, {
        className: $.body,
        stripePaymentMethod: t,
        submitting: e,
    });
}
function eC(e) {
    let { billingAddressInfo: t, onBillingAddressChange: n, paymentSourceType: i } = e,
        a = (0, l.e7)([j.Z], () => j.Z.error);
    return (0, r.jsx)("div", {
        className: $.body,
        children: (0, r.jsx)(g.P, {
            billingAddressInfo: t,
            billingError: a,
            onBillingAddressChange: n,
            paymentSourceType: i,
        }),
    });
}
function eN() {
    return (0, r.jsx)(E.F, { className: $.body });
}
function eR(e) {
    return () => (null != j.Z.error && (0, _.fw)(), e());
}
function eP(e) {
    let { onPrimary: t, onBack: n } = e,
        i = ea(e, ["onPrimary", "onBack"]),
        a = t;
    null != t && (a = eR(t));
    let o = n;
    return (
        null != n && (o = eR(n)),
        (0, r.jsx)(
            w.Z,
            ei(en({}, i), {
                onPrimary: a,
                onBack: o,
            }),
        )
    );
}
function ew(e) {
    var t;
    let n,
        o,
        u,
        p,
        {
            paymentModalArgs: h,
            initialStep: m,
            prependSteps: g,
            appendSteps: E,
            onReturn: b,
            onComplete: y,
            onStepChange: O,
            breadcrumpSteps: C,
            currentBreadcrumpStep: k,
            header: U,
            analyticsData: B,
            analyticsLocation: Y,
            hideBreadcrumbs: K = !1,
            usePaymentModalStep: X = !1,
            isEligibleForTrial: et = !1,
            allowDesktopRedirectPurchase: er = !1,
            toastContent: ea,
            continueSessionToInitialStep: eo,
            overwriteSubscriptionPaymentSource: eg = !1,
        } = e,
        { stripe: eb, contextMetadata: ey, activitySessionId: eR, paymentElementsEnabled: ew } = (0, N.JL)(),
        eD = i.useMemo(() => (0, H.vP)(), []),
        [eL, ex, eM, ek] = i.useMemo(
            () =>
                eE(
                    [
                        {
                            baseSteps: ec,
                            methodType: Q.He.CARD,
                        },
                        {
                            baseSteps: eu,
                            methodType: Q.He.PAYPAL,
                        },
                        {
                            baseSteps: ep,
                            methodType: Q.He.IDEAL,
                        },
                        {
                            baseSteps: em,
                            methodType: Q.He.UNKNOWN,
                        },
                    ],
                    {
                        prependSteps: g,
                        appendSteps: E,
                        paymentElementsEnabled: ew,
                        userIsStaff: eD,
                    },
                ),
            [g, E, ew, eD],
        ),
        ej = i.useMemo(
            () => ({
                [Q.He.CARD]: eL,
                [Q.He.PAYPAL]: ex,
                [Q.He.IDEAL]: eM,
                [Q.He.GOPAY_WALLET]: ek,
                [Q.He.KAKAOPAY]: ek,
            }),
            [eL, ex, eM, ek],
        ),
        eU = {
            steps: [...g, ...el, ...E],
            methodType: Q.He.PAYMENT_REQUEST,
        },
        eG = {
            steps: [...g, ...ed, ...E],
            methodType: Q.He.VENMO,
        },
        eB = {
            steps: [...g, ...el, ...E],
        },
        eZ = {
            steps: [...g, ...ef, ...E],
            methodType: Q.He.PRZELEWY24,
        },
        eF = {
            steps: [...g, ...e_, ...E],
            methodType: Q.He.EPS,
        },
        eV = {
            steps: [...g, ...eh, ...E],
            methodType: Q.He.CASH_APP,
        };
    function eH(e) {
        switch (e) {
            case R.h8.CREDIT_CARD_INFORMATION:
                return eL;
            case R.h8.CASH_APP_INFORMATION:
                return eV;
            default:
                return { steps: [R.h8.ADD_PAYMENT_STEPS] };
        }
    }
    let [eY, eW] = i.useState(m),
        [eK, ez] = i.useState(null),
        [eq, eX] = i.useState(eH(m)),
        eQ = (0, l.e7)([j.Z], () => j.Z.redirectedPaymentSourceId),
        eJ = (0, l.e7)([q.Z], () => q.Z.cashAppPayComponent),
        e$ = {
            completeSteps: tb,
            setIsSubmittingCurrentStep: h.setIsSubmittingCurrentStep,
        },
        e0 = i.useRef(e$);
    i.useEffect(() => {
        e0.current = e$;
    }),
        i.useEffect(() => {
            let { completeSteps: e, setIsSubmittingCurrentStep: t } = e0.current;
            (async () => {
                if (null == eQ) return;
                await (0, d.tZ)();
                let n = G.Z.getPaymentSource(eQ);
                null != n && (e(n), t(!1), j.Z.clearRedirectedPaymentSourceId());
            })();
        }, [eQ]);
    let e1 = i.useCallback(
        function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            ez(null),
                eW(e),
                t &&
                    O({
                        currentStep: eY,
                        toStep: e,
                    });
        },
        [eY, O],
    );
    function e2(e) {
        (0, c.showToast)(
            (0, c.createToast)(void 0 !== ea ? ea : J.intl.string(J.t["VJPg+v"]), c.ToastType.SUCCESS, {
                position: c.ToastPosition.BOTTOM,
            }),
        ),
            y(eY, e),
            e1(m, !1);
    }
    let [e3, e4] = i.useState(null),
        {
            setPaymentSourceId: e8,
            creditCardState: e5,
            setCreditCardState: e6,
            tokenState: e7,
            setTokenState: e9,
            isSubmittingCurrentStep: te,
            billingAddressState: tt,
            setBillingAddressState: tn,
            setIsSubmittingCurrentStep: tr,
            hasRedirectURL: ti,
            setHasRedirectURL: ta,
            braintreeEmail: to,
            braintreeNonce: ts,
            venmoUsername: tl,
            adyenPaymentData: tc,
            isAuthenticating: tu,
            epsBankState: td,
            setEpsBankState: tf,
            p24BankState: t_,
            setP24BankState: tp,
            selectedSkuId: th,
        } = h,
        tm = null != th ? th : "",
        tg = (0, l.e7)([Z.Z], () => Z.Z.get(tm), [tm]),
        tE = null == tg || null == (t = tg.eligiblePaymentGateways) ? void 0 : t.map((e) => e.valueOf());
    function tb(e) {
        e8(e.id), e2(e);
    }
    let ty = !(0, F.isDesktop)() || er ? ["googlePay", "applePay"] : [],
        [tO, tv] = i.useState(!1),
        tI = i.useRef(null),
        tT = () => {
            null != tI.current && tI.current.show();
        },
        {
            shouldRenderPaymentElement: tS,
            paymentElementReady: tA,
            paymentElementSelectedType: tC,
            handlePaymentElementStep: tN,
            onBackPaymentElement: tR,
            combinedStripeElementsRef: tP,
            stripePaymentElementProps: tw,
            stripeAddressElementProps: tD,
        } = (0, A.M)({
            step: eY,
            continueSessionToInitialStep: eo,
            paymentElementsEnabled: ew,
            handleStepChange: e1,
            logger: es,
            shouldLogOnChangeEvents: eD || !1,
            onBillingAddressChange: (e, t) => {
                tn({
                    info: en({}, tt.info, e),
                    isValid: t,
                });
            },
        });
    switch (eY) {
        case R.h8.ATTEMPT_GOOGLE_PAY:
        case R.h8.ATTEMPT_APPLE_PAY:
        case R.h8.PAYMENT_TYPE:
            let tL = (e, t) => {
                    let n = ew && (0, I.qH)(e, eD) && !er ? () => tN(e) : e1;
                    switch (e) {
                        case Q.He.CARD:
                            er ? n(R.h8.AWAITING_BROWSER_CHECKOUT) : (eX(eL), n(R.h8.CREDIT_CARD_INFORMATION));
                            break;
                        case Q.He.PAYPAL:
                            eX(ex), n(R.h8.PAYPAL_INFORMATION);
                            break;
                        case Q.He.VENMO:
                            eX(eG), n(R.h8.VENMO_INFORMATION);
                            break;
                        case Q.He.PAYMENT_REQUEST:
                            er && "googlePay" === t
                                ? n(R.h8.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY)
                                : er && "applePay" === t
                                  ? n(R.h8.AWAITING_BROWSER_CHECKOUT_APPLE_PAY)
                                  : (eX(eU), n(R.h8.PAYMENT_REQUEST_INFORMATION));
                            break;
                        case Q.He.PRZELEWY24:
                            eX(eZ), n(R.h8.PRZELEWY24_INFORMATION);
                            break;
                        case Q.He.EPS:
                            eX(eF), n(R.h8.EPS_INFORMATION);
                            break;
                        case Q.He.IDEAL:
                            eX(eM), n(R.h8.IDEAL_INFORMATION);
                            break;
                        case Q.He.CASH_APP:
                            eX(eV), n(R.h8.CASH_APP_INFORMATION);
                            break;
                        case Q.He.GIROPAY:
                        case Q.He.PAYSAFE_CARD:
                        case Q.He.GCASH:
                        case Q.He.GRABPAY_MY:
                        case Q.He.MOMO_WALLET:
                        case Q.He.KAKAOPAY:
                        case Q.He.GOPAY_WALLET:
                        case Q.He.BANCONTACT:
                            eX({
                                steps: [...g, ...em, ...E],
                                methodType: e,
                            }),
                                n(R.h8.ADDRESS);
                    }
                    null != j.Z.error && (0, _.fw)();
                },
                tx = (e, t) => {
                    tn((e) => ei(en({}, e), { info: t })), eX(eU), tb(e);
                },
                tM = () => {
                    eX(eB), e1(R.h8.PAYMENT_TYPE);
                },
                tk = async (e, t) => {
                    if (((0, _.Xt)(e), null == e)) return void tM();
                    e4(e);
                    let { billingAddressInfo: n } = (0, V.az)(e),
                        r = v._.every((e) => {
                            let t = n[e];
                            return null != t && "" !== t;
                        });
                    if (
                        ((null == n.name || "" === n.name) && null != t && (n.name = t),
                        tn({
                            isValid: r,
                            info: n,
                        }),
                        !r)
                    )
                        return void e1(R.h8.ADDRESS);
                    try {
                        let t = await (0, d.i6)(e, n, Y);
                        tx(t, n);
                    } catch (e) {
                        tM();
                    }
                };
            if (eY === R.h8.ATTEMPT_GOOGLE_PAY || eY === R.h8.ATTEMPT_APPLE_PAY) {
                let e = J.intl.string(eY === R.h8.ATTEMPT_APPLE_PAY ? J.t.czhXDg : J.t.Zj2xQ0),
                    t = J.intl.string(eY === R.h8.ATTEMPT_APPLE_PAY ? J.t.WoXvJC : J.t.wnVVr6);
                (n = (0, r.jsx)(x.t, {
                    onChooseType: tL,
                    paymentRequestWallet: eY === R.h8.ATTEMPT_APPLE_PAY ? "applePay" : "googlePay",
                    onStripePaymentMethodReceived: tk,
                    onPaymentRequestFailure: () => {
                        tL(Q.He.CARD), ez(e);
                    },
                    onValidPaymentRequest: () => tv(!0),
                    paymentRequestRef: tI,
                })),
                    (o = (0, r.jsx)(eP, {
                        onBack: () => e1(R.h8.PAYMENT_TYPE),
                        primaryCTA: w.Z.CTAType.CONTINUE,
                        primaryText: t,
                        onPrimary: () => tT(),
                        primaryDisabled: !tO,
                    }));
                break;
            }
            (n = (0, r.jsx)(eO, {
                onChooseType: tL,
                onStripePaymentMethodReceived: tk,
                paymentRequestWallets: ty,
                isEligibleForTrial: et,
                paymentRequestPaymentContext: {
                    contextMetadata: ey,
                    activitySessionId: eR,
                },
                paymentSourceTypeRestrictions: tE,
            })),
                (o = (0, r.jsx)(eP, { onBack: b }));
            break;
        case R.h8.PAYMENT_ELEMENT:
            if (!ew) throw (0, d.PP)("Payment Elements not enabled, invalid step", !0);
            let tj = () => {
                tr(!0);
                try {
                    if (null == tC || !(0, I.qH)(tC, eD))
                        throw (0, d.PP)("Valid Payment Element source type not found", !0);
                    let { steps: e, methodType: t } = ej[tC];
                    eX({
                        steps: e,
                        methodType: t === Q.He.UNKNOWN ? tC : t,
                    }),
                        tC === Q.He.PAYPAL ? e1(R.h8.PAYPAL_INFORMATION) : e1(R.h8.ADDRESS);
                } catch (t) {
                    var e;
                    es.error(null != (e = t.message) ? e : JSON.stringify(t));
                } finally {
                    tr(!1);
                }
            };
            (n = null),
                (o = (0, r.jsx)(eP, {
                    onBack: tR,
                    primaryCTA: w.Z.CTAType.CONTINUE,
                    primaryType: "submit",
                    primaryText: J.intl.string(J.t.PDTjLC),
                    primarySubmitting: te,
                    primaryDisabled: !tA,
                    onPrimary: tj,
                }));
            break;
        case R.h8.CREDIT_CARD_INFORMATION:
            let tU = async (e) => {
                tr(!0);
                try {
                    let t = await (0, d.qv)(eb, e);
                    e9({ token: t }), e1(R.h8.ADDRESS);
                } catch (e) {
                    var t;
                    es.error(null != (t = e.message) ? t : JSON.stringify(e));
                } finally {
                    tr(!1);
                }
            };
            n = ew
                ? null
                : (0, r.jsx)(ev, {
                      infoNotice: eK,
                      onCardInfoChange: (e, t) => {
                          e6({
                              info: e,
                              isValid: t,
                          }),
                              tn((t) => ei(en({}, t), { info: ei(en({}, t.info), { name: e.name }) }));
                      },
                  });
            let tG = ew ? !tA : !e5.isValid,
                tB = () => {
                    e1(R.h8.PAYMENT_TYPE);
                };
            o = (0, r.jsx)(a.ElementsConsumer, {
                children: (e) => {
                    let { elements: t } = e;
                    return (0, r.jsx)(eP, {
                        onBack: tB,
                        primaryCTA: w.Z.CTAType.CONTINUE,
                        primaryType: "submit",
                        primaryText: J.intl.string(J.t.PDTjLC),
                        primarySubmitting: te,
                        primaryDisabled: tG,
                        onPrimary: () => tU(t),
                    });
                },
            });
            break;
        case R.h8.AWAITING_BROWSER_CHECKOUT:
        case R.h8.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
        case R.h8.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
            (n = (0, r.jsx)("div", {
                className: $.body,
                children: (0, r.jsx)(L.M, {
                    step: eY,
                    onPurchaseComplete: () => y(eY),
                    onHandoffFailure: () => {
                        eX(eL), e1(R.h8.CREDIT_CARD_INFORMATION);
                    },
                }),
            })),
                (o = (0, r.jsx)(L.a, {
                    onPrimaryClick: () => {
                        eX(eL), e1(R.h8.CREDIT_CARD_INFORMATION);
                    },
                    onBackClick: () => {
                        eX(eB), e1(R.h8.PAYMENT_TYPE);
                    },
                }));
            break;
        case R.h8.EPS_INFORMATION:
            (n = (0, r.jsx)(S.Z, {
                type: Q.He.EPS,
                onAccountHolderNameChange: (e) =>
                    tn({
                        info: ei(en({}, tt.info), { name: e }),
                        isValid: tt.isValid,
                    }),
                onEPSBankChange: (e) => tf(e),
                epsBankValue: td,
                billingAddressInfo: tt.info,
            })),
                (o = (0, r.jsx)(eP, {
                    onBack: () => e1(R.h8.PAYMENT_TYPE),
                    primaryCTA: w.Z.CTAType.CONTINUE,
                    primaryText: J.intl.string(J.t.PDTjLC),
                    primaryDisabled: void 0 === td || "" === td || "" === tt.info.name,
                    onPrimary: () => e1(R.h8.ADDRESS),
                }));
            break;
        case R.h8.IDEAL_INFORMATION:
            (n = (0, r.jsx)(T.Z, {
                type: Q.He.IDEAL,
                onAccountHolderNameChange: (e) =>
                    tn({
                        info: ei(en({}, tt.info), { name: e }),
                        isValid: tt.isValid,
                    }),
                billingAddressInfo: tt.info,
            })),
                (o = (0, r.jsx)(eP, {
                    onBack: () => e1(R.h8.PAYMENT_TYPE),
                    primaryCTA: w.Z.CTAType.CONTINUE,
                    primaryText: J.intl.string(J.t.PDTjLC),
                    primaryDisabled: "" === tt.info.name,
                    onPrimary: () => e1(R.h8.ADDRESS),
                }));
            break;
        case R.h8.PRZELEWY24_INFORMATION:
            (n = (0, r.jsx)(S.Z, {
                type: Q.He.PRZELEWY24,
                onNameChange: (e) =>
                    tn({
                        info: ei(en({}, tt.info), { name: e }),
                        isValid: tt.isValid,
                    }),
                onEmailChange: (e) =>
                    tn({
                        info: ei(en({}, tt.info), { email: e }),
                        isValid: tt.isValid,
                    }),
                onP24BankChange: (e) => {
                    tp(e);
                },
                p24BankValue: t_,
                billingAddressInfo: tt.info,
            })),
                (o = (0, r.jsx)(eP, {
                    onBack: () => e1(R.h8.PAYMENT_TYPE),
                    primaryCTA: w.Z.CTAType.CONTINUE,
                    primaryText: J.intl.string(J.t.PDTjLC),
                    primaryDisabled:
                        void 0 === tt.info.name ||
                        "" === tt.info.name ||
                        void 0 === tt.info.email ||
                        "" === tt.info.email ||
                        void 0 === t_ ||
                        "" === t_,
                    onPrimary: () => e1(R.h8.ADDRESS),
                }));
            break;
        case R.h8.PAYPAL_INFORMATION:
            let tZ = 0 !== to.length && null != ts;
            n = (0, r.jsx)(eI, {});
            let tF = ew ? () => tN(Q.He.PAYPAL) : () => e1(R.h8.PAYMENT_TYPE);
            o = (0, r.jsx)(eP, {
                onBack: tF,
                primaryCTA: w.Z.CTAType.CONTINUE,
                primaryText: tZ ? J.intl.string(J.t.PDTjLC) : J.intl.string(J.t.Djzd7O),
                onPrimary: () => (tZ ? e1(R.h8.ADDRESS) : (0, f.i0)()),
            });
            break;
        case R.h8.VENMO_INFORMATION:
            let tV = 0 !== tl.length && null != ts;
            (n = (0, r.jsx)(eT, {})),
                (o = (0, r.jsx)(eP, {
                    onBack: () => e1(R.h8.PAYMENT_TYPE),
                    primaryCTA: w.Z.CTAType.CONTINUE,
                    primaryText: tV ? J.intl.string(J.t.PDTjLC) : J.intl.string(J.t["4KoTLC"]),
                    onPrimary: () => (tV ? e1(R.h8.ADDRESS) : (0, f.og)()),
                }));
            break;
        case R.h8.PAYMENT_REQUEST_INFORMATION:
            (n = (0, r.jsx)(eA, {})), (o = (0, r.jsx)(eP, { onBack: () => e1(R.h8.PAYMENT_TYPE) }));
            break;
        case R.h8.CASH_APP_INFORMATION:
            let tH = null != tc,
                tY = null != eJ;
            (n = (0, r.jsx)(eS, {})),
                (o = (0, r.jsx)(eP, {
                    onBack: () => e1(R.h8.PAYMENT_TYPE),
                    primaryCTA: w.Z.CTAType.CONTINUE,
                    primaryText: tH ? J.intl.string(J.t.PDTjLC) : J.intl.string(J.t["9ALP8/"]),
                    onPrimary: () => (tH ? e1(R.h8.ADDRESS) : (0, z.cp)()),
                    primaryDisabled: !tY,
                }));
            break;
        case R.h8.ADDRESS:
            let tW = async () => {
                tr(!0);
                let e = ew && null != tC,
                    t = e ? tC : eq.methodType;
                switch (t) {
                    case Q.He.PAYMENT_REQUEST:
                        if (null == e3) throw (tM(), (0, d.SQ)("Missing paymentRequestPaymentMethod"));
                        tb(await (0, d.i6)(e3, tt.info, Y));
                        break;
                    case Q.He.CARD:
                        try {
                            let t = e
                                ? await (0, d.Q5)(eb, tt.info, Q.He.CARD, tP.current, Y)
                                : await (0, d.f0)(eb, e7.token, tt.info, Y);
                            tb(t);
                        } catch (e) {}
                        break;
                    case Q.He.VENMO:
                    case Q.He.PAYPAL:
                        try {
                            s()(null != ts, "Missing braintreeNonce");
                            let e = await (0, d.lP)(ts, tt.info, Y);
                            tb(e);
                        } catch (e) {}
                        break;
                    case Q.He.EPS:
                        try {
                            let e = await (0, d.YQ)(eb, td, tt.info, Y);
                            tb(e);
                        } catch (e) {
                            es.warn(e);
                        }
                        break;
                    case Q.He.IDEAL:
                        try {
                            let t = e
                                ? await (0, d.Q5)(eb, tt.info, Q.He.IDEAL, tP.current, Y)
                                : await (0, d.aN)(eb, tt.info, Y);
                            tb(t);
                        } catch (e) {
                            es.warn(e);
                        }
                        break;
                    case Q.He.PRZELEWY24:
                        try {
                            if (void 0 === t_) throw (0, d.SQ)("Bank required for Przelewy24");
                            let e = await (0, d.pF)(eb, { p24Bank: t_ }, tt.info, Y);
                            tb(e);
                        } catch (e) {}
                        break;
                    case Q.He.PAYSAFE_CARD:
                    case Q.He.GRABPAY_MY:
                        try {
                            let e = await (0, d.sF)(tt.info, t, Y);
                            tb(e);
                        } catch (e) {}
                        break;
                    case Q.He.GCASH:
                    case Q.He.MOMO_WALLET:
                    case Q.He.KAKAOPAY:
                    case Q.He.GOPAY_WALLET:
                        try {
                            let { redirectConfirmation: e } = await (0, d.Dk)(tt.info, t, Y);
                            ta(e);
                        } catch (e) {}
                        break;
                    case Q.He.GIROPAY:
                    case Q.He.BANCONTACT:
                        try {
                            let e = await (0, d.GV)(eb, tt.info, t, Y);
                            tb(e);
                        } catch (e) {}
                        break;
                    case Q.He.CASH_APP:
                        try {
                            s()(null != tc, "Missing adyenPaymentData");
                            let { paymentSource: e } = await (0, d.Dk)(tt.info, t, Y, tc, eg);
                            s()(null != e, "Cash App Pay Payment Source missing"), tb(e);
                        } catch (e) {}
                        break;
                    default:
                        throw Error("unknown step not handled");
                }
                ti || tr(!1);
            };
            switch (eq.methodType) {
                case Q.He.CARD:
                    (p = R.h8.CREDIT_CARD_INFORMATION), (u = Q.He.CARD);
                    break;
                case Q.He.PAYPAL:
                    (p = R.h8.PAYPAL_INFORMATION), (u = Q.He.PAYPAL);
                    break;
                case Q.He.VENMO:
                    (p = R.h8.VENMO_INFORMATION), (u = Q.He.VENMO);
                    break;
                case Q.He.GIROPAY:
                    (p = R.h8.PAYMENT_TYPE), (u = Q.He.GIROPAY);
                    break;
                case Q.He.PAYSAFE_CARD:
                case Q.He.GCASH:
                case Q.He.GRABPAY_MY:
                case Q.He.MOMO_WALLET:
                case Q.He.KAKAOPAY:
                case Q.He.GOPAY_WALLET:
                case Q.He.BANCONTACT:
                    (p = R.h8.PAYMENT_TYPE), (u = eq.methodType);
                    break;
                case Q.He.EPS:
                    (p = R.h8.EPS_INFORMATION), (u = Q.He.EPS);
                    break;
                case Q.He.IDEAL:
                    (p = R.h8.IDEAL_INFORMATION), (u = Q.He.IDEAL);
                    break;
                case Q.He.PRZELEWY24:
                    (p = R.h8.PRZELEWY24_INFORMATION), (u = Q.He.PRZELEWY24);
                    break;
                case Q.He.CASH_APP:
                    (p = R.h8.CASH_APP_INFORMATION), (u = Q.He.CASH_APP);
                    break;
                default:
                    (p = R.h8.PAYMENT_TYPE), (u = Q.He.CARD);
            }
            ew && null != tC && (p = R.h8.PAYMENT_ELEMENT),
                (n = ew
                    ? null
                    : (0, r.jsx)(eC, {
                          billingAddressInfo: tt.info,
                          onBillingAddressChange: (e, t) => {
                              tn({
                                  info: en({}, tt.info, e),
                                  isValid: t,
                              });
                          },
                          paymentSourceType: u,
                      })),
                (o = (0, r.jsx)(eP, {
                    onBack: () => e1(p),
                    primaryCTA: w.Z.CTAType.CONTINUE,
                    primaryText: J.intl.string(J.t.PDTjLC),
                    primarySubmitting: te,
                    primaryDisabled: !tt.isValid || tu,
                    onPrimary: tW,
                }));
            break;
        case R.h8.AWAITING_AUTHENTICATION:
            n = (0, r.jsx)(eN, {});
            break;
        default:
            throw Error("Unexpected step: ".concat(eY));
    }
    let tK = ew && tS,
        tz = tK ? "combined_stripe_elements" : void 0,
        tq = (0, r.jsxs)(c.qBt, {
            className: ee.sequencer,
            staticClassName: ee.sequencerStatic,
            animatedNodeClassName: ee.sequencerAnimatedNode,
            fillParent: !0,
            overrideKey: tz,
            step: eY,
            steps: eq.steps,
            sideMargin: 20,
            children: [
                tK &&
                    (0, r.jsx)(A.h, {
                        step: eY,
                        analyticsContext:
                            null != B
                                ? {
                                      activitySessionId: eR,
                                      contextMetadata: ey,
                                      analyticsData: B,
                                  }
                                : void 0,
                        paymentElementSelectedType: tC,
                        originalPaymentType: eq.methodType,
                        elementsRef: tP,
                        stripePaymentElementProps: tw,
                        stripeAddressElementProps: tD,
                        billingAddressInfo: tt.info,
                        onSetupError: tR,
                    }),
                n,
            ],
        }),
        tX = eY === R.h8.PAYMENT_TYPE && 0 === g.length ? null : o;
    return X
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  et &&
                      (0, r.jsx)(P.Z, {
                          className: $.paymentModalBreadcrumbs,
                          isEligibleForTrial: et,
                      }),
                  (0, r.jsxs)(D.C3, {
                      children: [(0, r.jsx)(M.Z, { className: $.paymentModalError }), tq],
                  }),
                  (0, r.jsx)(D.O3, { children: tX }),
              ],
          })
        : (0, r.jsx)(W.Z, {
              steps: null != C ? C : eq.steps,
              currentStep: null != k ? k : eY,
              overrideKey: tz,
              paymentError: h.paymentError,
              header: U,
              hideBreadcrumbs: K,
              body: tq,
              footer: tX,
          });
}
function eD(e) {
    let {
        defaultPaymentSourceId: t,
        paymentSources: n,
        hasFetchedPaymentSources: r,
    } = (0, l.cj)([G.Z], () => ({
        defaultPaymentSourceId: void 0 !== e ? e : G.Z.defaultPaymentSourceId,
        paymentSources: G.Z.paymentSources,
        hasFetchedPaymentSources: G.Z.hasFetchedPaymentSources,
    }));
    (0, O.ZP)(() => {
        null == q.Z.cashAppPayComponent && (0, z.eI)(), (0, f.eI)(), r || (0, d.tZ)();
    });
    let [a, o] = i.useState(t);
    null != t && null == a && o(t);
    let [s, c] = i.useState(() => ({
            info: eb,
            isValid: !1,
        })),
        [p, h] = i.useState(() => ({
            info: ey,
            isValid: !1,
        })),
        [m, g] = i.useState(""),
        [E, b] = i.useState(""),
        [y, v] = i.useState(() => ({ token: null })),
        [I, T, S, A, C] = (0, l.Wu)([j.Z], () => [
            j.Z.braintreeEmail,
            j.Z.braintreeNonce,
            j.Z.error,
            j.Z.venmoUsername,
            j.Z.adyenPaymentData,
        ]),
        [N, R] = (0, l.Wu)([U.Z], () => [U.Z.error, U.Z.isAwaitingAuthentication]);
    i.useEffect(() => {
        let e = (e) => {
            let { billingAddress: t } = e;
            h({
                info: t,
                isValid: t.country.length > 0,
            });
        };
        return (
            u.Z.subscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e),
            () => {
                u.Z.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e), (0, _.fw)();
            }
        );
    }, []);
    let [P, w] = i.useState(!1),
        [D, L] = i.useState(!1),
        [x, M] = i.useState(null),
        k = i.useRef(null),
        Z = (0, l.e7)([U.Z], () => U.Z.isAwaitingAuthentication),
        [F, V] = (0, l.Wu)([B.Z], () => [B.Z.purchaseTokenAuthState, B.Z.purchaseTokenHash]);
    return (
        i.useEffect(() => {
            null != x && null != k.current && k.current.scrollIntoView({ behavior: "smooth" });
        }, [x]),
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
            braintreeNonce: T,
            venmoUsername: A,
            adyenPaymentData: C,
            paymentError: null != N ? N : S,
            paymentAuthenticationState: R ? Y.wr.PENDING : null != N ? Y.wr.ERROR : Y.wr.NONE,
            purchaseError: x,
            setPurchaseError: M,
            purchaseErrorBlockRef: k,
            isAuthenticating: Z,
            purchaseTokenAuthState: F,
            purchaseTokenHash: V,
            epsBankState: E,
            setEpsBankState: b,
            p24BankState: m,
            setP24BankState: g,
        }
    );
}
