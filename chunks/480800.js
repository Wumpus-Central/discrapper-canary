"use strict";
n.d(t, { Y: () => eu, _V: () => ec });
var r = n(627968),
    i = n(64700),
    s = n(342393),
    a = n(284009),
    o = n.n(a),
    l = n(311907),
    u = n(397927),
    c = n(73153),
    d = n(493405),
    _ = n(391048),
    f = n(15373),
    p = n(229403),
    h = n(959391),
    m = n(891197),
    E = n(202626),
    g = n(893234),
    A = n(964486),
    I = n(323082),
    T = n(721101),
    S = n(648335),
    y = n(6332),
    v = n(182533),
    N = n(211528),
    C = n(626584),
    R = n(156312),
    O = n(166532),
    b = n(69494),
    D = n(19311),
    L = n(482132);
n(615310);
var w = n(617745),
    M = n(921925),
    x = n(615405),
    P = n(825755),
    k = n(153084),
    U = n(295405),
    G = n(293700),
    F = n(67480),
    V = n(427262),
    B = n(251913),
    H = n(632638),
    j = n(682449),
    Y = n(490581),
    W = n(168984),
    K = n(836308),
    $ = n(632721),
    z = n(808574),
    q = n(818348),
    Z = n(985018),
    X = n(284014),
    Q = n(120420);
let J = new C.A("AddPaymentStep.tsx"),
    ee = { name: "", cardNumber: "", expirationDate: "", cvc: "" },
    et = { email: "", name: "", country: "", line1: "", line2: "", city: "", postalCode: "", state: "" };
function en(e) {
    let { onCardInfoChange: t } = e,
        n = (0, l.bG)([P.A], () => P.A.error);
    return (0, r.jsx)(E.A, { billingError: n, onCardInfoChange: t });
}
function er() {
    return (0, r.jsx)(f.A, {});
}
function ei() {
    return (0, r.jsx)(p.A, {});
}
function es() {
    return (0, r.jsx)(W.A, {});
}
function ea() {
    let e = (0, l.bG)([x.A], () => x.A.isBusy),
        t = (0, l.bG)([P.A], () => P.A.stripePaymentMethod);
    return (0, r.jsx)(g.y, { stripePaymentMethod: t, submitting: e });
}
function eo(e) {
    let { billingAddressInfo: t, onBillingAddressChange: n, paymentSourceType: i } = e,
        s = (0, l.bG)([P.A], () => P.A.error);
    return (0, r.jsx)(h.n, { billingAddressInfo: t, billingError: s, onBillingAddressChange: n, paymentSourceType: i });
}
function el() {
    return (0, r.jsx)(m.N, {});
}
function eu(e) {
    let t,
        n,
        a,
        c,
        {
            paymentModalArgs: _,
            initialStep: f,
            prependSteps: p,
            appendSteps: h,
            onReturn: m,
            onComplete: E,
            onStepChange: g,
            breadcrumpSteps: A,
            currentBreadcrumpStep: T,
            header: C,
            analyticsData: x,
            analyticsLocation: k,
            hideBreadcrumbs: G = !1,
            usePaymentModalStep: B = !1,
            isEligibleForTrial: W = !1,
            allowDesktopRedirectPurchase: ee = !1,
            toastContent: et,
            continueSessionToInitialStep: eu,
            overwriteSubscriptionPaymentSource: ec = !1,
            shouldUseManaModal: ed = !0,
        } = e,
        { stripe: e_, contextMetadata: ef, activitySessionId: ep, paymentElementsEnabled: eh } = (0, R.P5)(),
        em = i.useMemo(() => {
            let e = f === O.pn.PAYMENT_TYPE || f === O.pn.PAYMENT_ELEMENT;
            return eh && e ? (ee ? O.pn.AWAITING_BROWSER_CHECKOUT : O.pn.PAYMENT_ELEMENT) : f;
        }, [eh, f, ee]),
        eE = i.useMemo(() => (0, V.Gn)(), []),
        {
            CREDIT_CARD_STEPS: eg,
            PAYPAL_STEPS: eA,
            IDEAL_STEPS: eI,
            PAYMENT_REQUEST_STEPS: eT,
            VENMO_STEPS: eS,
            ADD_PAYMENT_STEPS: ey,
            PRZELEWY24_STEPS: ev,
            EPS_STEPS: eN,
            CASH_APP_STEPS: eC,
            PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: eR,
        } = (0, $.kh)({ prependSteps: p, appendSteps: h, paymentElementsEnabled: eh });
    function eO(e) {
        switch (e) {
            case O.pn.CREDIT_CARD_INFORMATION:
                return eg;
            case O.pn.CASH_APP_INFORMATION:
                return eC;
            default:
                return { steps: [O.pn.ADD_PAYMENT_STEPS] };
        }
    }
    let [eb, eD] = i.useState(em),
        [eL, ew] = i.useState(null),
        [eM, ex] = i.useState(eO(em));
    i.useEffect(() => {
        (0, I.IV)();
    }, []);
    let eP = (0, l.bG)([P.A], () => P.A.redirectedPaymentSourceId),
        ek = (0, l.bG)([Y.A], () => Y.A.cashAppPayComponent),
        eU = { completeSteps: tr, setIsSubmittingCurrentStep: _.setIsSubmittingCurrentStep },
        eG = i.useRef(eU);
    i.useEffect(() => {
        eG.current = eU;
    }),
        i.useEffect(() => {
            let { completeSteps: e, setIsSubmittingCurrentStep: t } = eG.current;
            (async () => {
                if (null == eP) return;
                await (0, I.$o)();
                let n = U.A.getPaymentSource(eP);
                null != n && (e(n), t(!1), P.A.clearRedirectedPaymentSourceId());
            })();
        }, [eP]);
    let eF = i.useCallback(
        function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            ew(null), eD(e), t && g({ currentStep: eb, toStep: e });
        },
        [eb, g],
    );
    function eV(e) {
        (0, u.showToast)(
            (0, u.createToast)(void 0 !== et ? et : Z.intl.string(Z.t["VJPg+l"]), u.ToastType.SUCCESS, {
                position: u.ToastPosition.BOTTOM,
            }),
        ),
            E(eb, e),
            eF(em, !1);
    }
    let [eB, eH] = i.useState(null),
        {
            setPaymentSourceId: ej,
            creditCardState: eY,
            setCreditCardState: eW,
            tokenState: eK,
            setTokenState: e$,
            isSubmittingCurrentStep: ez,
            billingAddressState: eq,
            setBillingAddressState: eZ,
            setIsSubmittingCurrentStep: eX,
            hasRedirectURL: eQ,
            setHasRedirectURL: eJ,
            braintreeEmail: e0,
            braintreeNonce: e1,
            venmoUsername: e2,
            adyenPaymentData: e3,
            isAuthenticating: e6,
            epsBankState: e4,
            setEpsBankState: e5,
            p24BankState: e7,
            setP24BankState: e8,
            selectedSkuId: e9,
        } = _,
        te = e9 ?? "",
        tt = (0, l.bG)([F.A], () => F.A.get(te), [te]),
        tn = tt?.eligiblePaymentGateways?.map((e) => e.valueOf());
    function tr(e) {
        ej(e.id), eV(e);
    }
    let ti = () => {
            ex(ey), eF(O.pn.PAYMENT_TYPE);
        },
        ts = (0, N.wD)({
            step: eb,
            continueSessionToInitialStep: eu,
            paymentElementsEnabled: eh,
            handleStepChange: eF,
            logger: J,
            shouldLogOnChangeEvents: eE || !1,
            onBillingAddressChange: (e, t) => {
                eZ({ info: { ...eq.info, ...e }, isValid: t });
            },
        }),
        {
            shouldRenderPaymentElement: ta,
            paymentElementReady: to,
            paymentElementSelectedType: tl,
            handlePaymentElementStep: tu,
            onBackFromPaymentElement: tc,
            combinedStripeElementsRef: td,
            lastConfirmedSetupIntentRef: t_,
            stripePaymentElementProps: tf,
            stripeAddressElementProps: tp,
            addressElementKey: th,
        } = ts,
        tm = i.useCallback(
            (e) => {
                eh && null != tl && (0, S.PE)(e) ? tu(e) : eF(O.pn.PAYMENT_TYPE);
            },
            [eh, tl, tu, eF],
        ),
        tE = B ? (0, r.jsx)(M.A, { className: Q._8 }) : null,
        tg = (0, K.zg)();
    switch (eb) {
        case O.pn.ATTEMPT_GOOGLE_PAY:
        case O.pn.ATTEMPT_APPLE_PAY:
        case O.pn.PAYMENT_TYPE:
            let tA = {
                CREDIT_CARD_STEPS: eg,
                PAYPAL_STEPS: eA,
                VENMO_STEPS: eS,
                PAYMENT_REQUEST_STEPS: eT,
                PRZELEWY24_STEPS: ev,
                EPS_STEPS: eN,
                IDEAL_STEPS: eI,
                CASH_APP_STEPS: eC,
            };
            (t = (0, r.jsx)(K.ZL, {
                prependSteps: p,
                appendSteps: h,
                analyticsLocation: k,
                isEligibleForTrial: W,
                allowDesktopRedirectPurchase: ee,
                onPaymentRequestSourceFailed: ti,
                paymentModalArgs: _,
                handleStepChange: eF,
                setPaymentMethodSteps: ex,
                setPaymentRequestPaymentMethod: eH,
                currentStep: eb,
                setInfoNotice: ew,
                completeSteps: tr,
                paymentSourceTypeRestrictions: tn,
                ...tA,
                ...tg,
            })),
                (n = (0, r.jsx)(K.GJ, {
                    shouldUseManaModal: ed,
                    onReturn: m,
                    handleStepChange: eF,
                    currentStep: eb,
                    ...tg,
                }));
            break;
        case O.pn.PAYMENT_ELEMENT:
            if (!eh) throw (0, I.ne)("Payment Elements not enabled, invalid step", !0);
            (t = null),
                (n = (0, r.jsx)(z.w, {
                    handleStepChange: eF,
                    shouldUseManaModal: ed,
                    setPaymentMethodSteps: ex,
                    primarySubmitting: ez,
                    primaryDisabled: !to,
                    onBack: () => {
                        tc(), m?.();
                    },
                    paymentModalArgs: _,
                    PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: eR,
                    ...ts,
                }));
            break;
        case O.pn.CREDIT_CARD_INFORMATION:
            let tI = async (e) => {
                eX(!0);
                try {
                    let t = await (0, I.YJ)(e_, e);
                    e$({ token: t }), eF(O.pn.ADDRESS);
                } catch (e) {
                    J.error(e.message ?? JSON.stringify(e));
                } finally {
                    eX(!1);
                }
            };
            t = (0, r.jsx)(en, {
                onCardInfoChange: (e, t) => {
                    eW({ info: e, isValid: t }), eZ((t) => ({ ...t, info: { ...t.info, name: e.name } }));
                },
            });
            let tT = !eY.isValid,
                tS = () => {
                    eF(O.pn.PAYMENT_TYPE);
                };
            n = (0, r.jsx)(s.ElementsConsumer, {
                children: (e) => {
                    let { elements: t } = e;
                    return (0, r.jsx)(K.uv, {
                        onBack: tS,
                        primaryCTA: D.Ay.CTAType.CONTINUE,
                        primaryType: "submit",
                        primaryText: Z.intl.string(Z.t.PDTjLN),
                        primarySubmitting: ez,
                        primaryDisabled: tT,
                        onPrimary: () => tI(t),
                        shouldUseManaModal: ed,
                    });
                },
            });
            break;
        case O.pn.AWAITING_BROWSER_CHECKOUT:
        case O.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
        case O.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
            let ty = () => {
                    ex(eg), eF(eh ? O.pn.PAYMENT_ELEMENT : O.pn.CREDIT_CARD_INFORMATION);
                },
                tv = () => {
                    eh ? (tc(), m?.()) : (ex(ey), eF(O.pn.PAYMENT_TYPE));
                };
            (t = (0, r.jsx)(w.t, { step: eb, onPurchaseComplete: () => E(eb), onHandoffFailure: ty })),
                (n = (0, r.jsx)(w.q, { onPrimaryClick: ty, onBackClick: tv }));
            break;
        case O.pn.EPS_INFORMATION:
            (t = (0, r.jsx)(v.A, {
                type: q.he.EPS,
                onAccountHolderNameChange: (e) => eZ({ info: { ...eq.info, name: e }, isValid: eq.isValid }),
                onEPSBankChange: (e) => e5(e),
                epsBankValue: e4,
                billingAddressInfo: eq.info,
            })),
                (n = (0, r.jsx)(K.uv, {
                    onBack: () => tm(q.he.EPS),
                    primaryCTA: D.Ay.CTAType.CONTINUE,
                    primaryText: Z.intl.string(Z.t.PDTjLN),
                    primaryDisabled: void 0 === e4 || "" === e4 || "" === eq.info.name,
                    onPrimary: () => eF(O.pn.ADDRESS),
                    shouldUseManaModal: ed,
                }));
            break;
        case O.pn.IDEAL_INFORMATION:
            (t = (0, r.jsx)(y.A, {
                type: q.he.IDEAL,
                onAccountHolderNameChange: (e) => eZ({ info: { ...eq.info, name: e }, isValid: eq.isValid }),
                billingAddressInfo: eq.info,
            })),
                (n = (0, r.jsx)(K.uv, {
                    onBack: () => eF(O.pn.PAYMENT_TYPE),
                    primaryCTA: D.Ay.CTAType.CONTINUE,
                    primaryText: Z.intl.string(Z.t.PDTjLN),
                    primaryDisabled: "" === eq.info.name,
                    onPrimary: () => eF(O.pn.ADDRESS),
                    shouldUseManaModal: ed,
                }));
            break;
        case O.pn.PRZELEWY24_INFORMATION:
            (t = (0, r.jsx)(v.A, {
                type: q.he.PRZELEWY24,
                onNameChange: (e) => eZ({ info: { ...eq.info, name: e }, isValid: eq.isValid }),
                onEmailChange: (e) => eZ({ info: { ...eq.info, email: e }, isValid: eq.isValid }),
                onP24BankChange: (e) => {
                    e8(e);
                },
                p24BankValue: e7,
                billingAddressInfo: eq.info,
            })),
                (n = (0, r.jsx)(K.uv, {
                    onBack: () => tm(q.he.PRZELEWY24),
                    primaryCTA: D.Ay.CTAType.CONTINUE,
                    primaryText: Z.intl.string(Z.t.PDTjLN),
                    primaryDisabled:
                        void 0 === eq.info.name ||
                        "" === eq.info.name ||
                        void 0 === eq.info.email ||
                        "" === eq.info.email ||
                        void 0 === e7 ||
                        "" === e7,
                    onPrimary: () => eF(O.pn.ADDRESS),
                    shouldUseManaModal: ed,
                }));
            break;
        case O.pn.PAYPAL_INFORMATION:
            let tN = 0 !== e0.length && null != e1;
            (t = (0, r.jsx)(er, {})),
                (n = (0, r.jsx)(K.uv, {
                    onBack: () => tm(q.he.PAYPAL),
                    primaryCTA: D.Ay.CTAType.CONTINUE,
                    primaryText: tN ? Z.intl.string(Z.t.PDTjLN) : Z.intl.string(Z.t.Djzd7L),
                    onPrimary: () => (tN ? eF(O.pn.ADDRESS) : (0, d.$e)()),
                    shouldUseManaModal: ed,
                }));
            break;
        case O.pn.VENMO_INFORMATION:
            let tC = 0 !== e2.length && null != e1;
            (t = (0, r.jsx)(ei, {})),
                (n = (0, r.jsx)(K.uv, {
                    onBack: () => tm(q.he.VENMO),
                    primaryCTA: D.Ay.CTAType.CONTINUE,
                    primaryText: tC ? Z.intl.string(Z.t.PDTjLN) : Z.intl.string(Z.t["4KoTLM"]),
                    onPrimary: () => (tC ? eF(O.pn.ADDRESS) : (0, d.jR)()),
                    shouldUseManaModal: ed,
                }));
            break;
        case O.pn.PAYMENT_REQUEST_INFORMATION:
            (t = (0, r.jsx)(ea, {})),
                (n = (0, r.jsx)(K.uv, { onBack: () => eF(O.pn.PAYMENT_TYPE), shouldUseManaModal: ed }));
            break;
        case O.pn.CASH_APP_INFORMATION:
            let tR = null != e3,
                tO = null != ek;
            (t = (0, r.jsx)(es, {})),
                (n = (0, r.jsx)(K.uv, {
                    onBack: () => tm(q.he.CASH_APP),
                    primaryCTA: D.Ay.CTAType.CONTINUE,
                    primaryText: tR ? Z.intl.string(Z.t.PDTjLN) : Z.intl.string(Z.t["9ALP8w"]),
                    onPrimary: () => (tR ? eF(O.pn.ADDRESS) : (0, j.uy)()),
                    primaryDisabled: !tO,
                    shouldUseManaModal: ed,
                }));
            break;
        case O.pn.ADDRESS:
            let tb = eh && null != tl,
                tD = async () => {
                    eX(!0);
                    let e = tb ? tl : eM.methodType,
                        t = [
                            e_,
                            td.current,
                            {
                                billingAddress: eq.info,
                                paymentSourceType: e ?? q.he.UNKNOWN,
                                lastConfirmedSetupIntentRef: t_,
                            },
                            k,
                        ];
                    switch (e) {
                        case q.he.PAYMENT_REQUEST:
                            if (tb) {
                                try {
                                    let e = await (0, I.im)(...t);
                                    tr(e);
                                } catch (e) {
                                    eX(!1), J.warn("Error confirming Payment Element source for Payment Request: ", e);
                                }
                                break;
                            }
                            if (null == eB) throw (ti(), (0, I.i0)("Missing paymentRequestPaymentMethod"));
                            tr(await (0, I.Tv)(eB, eq.info, k));
                            break;
                        case q.he.CARD:
                            try {
                                let e = tb ? await (0, I.im)(...t) : await (0, I.u6)(e_, eK.token, eq.info, k);
                                tr(e);
                            } catch {}
                            break;
                        case q.he.VENMO:
                        case q.he.PAYPAL:
                            try {
                                o()(null != e1, "Missing braintreeNonce");
                                let e = await (0, I.u1)(e1, eq.info, k);
                                tr(e);
                            } catch {}
                            break;
                        case q.he.EPS:
                            try {
                                let e = await (0, I.Z9)(e_, e4, eq.info, k);
                                tr(e);
                            } catch (e) {
                                J.warn(e);
                            }
                            break;
                        case q.he.IDEAL:
                            try {
                                let e = tb ? await (0, I.im)(...t) : await (0, I.EB)(e_, eq.info, k);
                                tr(e);
                            } catch (e) {
                                J.warn(e);
                            }
                            break;
                        case q.he.PRZELEWY24:
                            try {
                                if (void 0 === e7) throw (0, I.i0)("Bank required for Przelewy24");
                                let e = await (0, I.TD)(e_, { p24Bank: e7 }, eq.info, k);
                                tr(e);
                            } catch {}
                            break;
                        case q.he.PAYSAFE_CARD:
                        case q.he.GRABPAY_MY:
                            try {
                                let t = await (0, I.A8)(eq.info, e, k);
                                tr(t);
                            } catch {}
                            break;
                        case q.he.GCASH:
                        case q.he.MOMO_WALLET:
                        case q.he.KAKAOPAY:
                        case q.he.GOPAY_WALLET:
                            try {
                                let { redirectConfirmation: t } = await (0, I.$M)(eq.info, e, k);
                                eJ(t);
                            } catch {}
                            break;
                        case q.he.GIROPAY:
                        case q.he.BANCONTACT:
                            try {
                                let t = await (0, I.bw)(e_, eq.info, e, k);
                                tr(t);
                            } catch {}
                            break;
                        case q.he.CASH_APP:
                            try {
                                o()(null != e3, "Missing adyenPaymentData");
                                let { paymentSource: t } = await (0, I.$M)(eq.info, e, k, e3, ec);
                                o()(null != t, "Cash App Pay Payment Source missing"), tr(t);
                            } catch {}
                            break;
                        default:
                            throw Error("unknown step not handled");
                    }
                    eQ || eX(!1);
                };
            switch (eM.methodType) {
                case q.he.CARD:
                    (c = O.pn.CREDIT_CARD_INFORMATION), (a = q.he.CARD);
                    break;
                case q.he.PAYPAL:
                    (c = O.pn.PAYPAL_INFORMATION), (a = q.he.PAYPAL);
                    break;
                case q.he.VENMO:
                    (c = O.pn.VENMO_INFORMATION), (a = q.he.VENMO);
                    break;
                case q.he.GIROPAY:
                    (c = O.pn.PAYMENT_TYPE), (a = q.he.GIROPAY);
                    break;
                case q.he.PAYSAFE_CARD:
                case q.he.GCASH:
                case q.he.GRABPAY_MY:
                case q.he.MOMO_WALLET:
                case q.he.KAKAOPAY:
                case q.he.GOPAY_WALLET:
                case q.he.BANCONTACT:
                    (c = O.pn.PAYMENT_TYPE), (a = eM.methodType);
                    break;
                case q.he.EPS:
                    (c = O.pn.EPS_INFORMATION), (a = q.he.EPS);
                    break;
                case q.he.IDEAL:
                    (c = O.pn.IDEAL_INFORMATION), (a = q.he.IDEAL);
                    break;
                case q.he.PRZELEWY24:
                    (c = O.pn.PRZELEWY24_INFORMATION), (a = q.he.PRZELEWY24);
                    break;
                case q.he.CASH_APP:
                    (c = O.pn.CASH_APP_INFORMATION), (a = q.he.CASH_APP);
                    break;
                default:
                    (c = O.pn.PAYMENT_TYPE), (a = q.he.CARD);
            }
            tb && (c = O.pn.PAYMENT_ELEMENT),
                (t = tb
                    ? null
                    : (0, r.jsx)(eo, {
                          billingAddressInfo: eq.info,
                          onBillingAddressChange: (e, t) => {
                              eZ({ info: { ...eq.info, ...e }, isValid: t });
                          },
                          paymentSourceType: a,
                      })),
                (n = (0, r.jsx)(K.uv, {
                    onBack: () => eF(c),
                    primaryCTA: D.Ay.CTAType.CONTINUE,
                    primaryText: Z.intl.string(Z.t.PDTjLN),
                    primarySubmitting: ez,
                    primaryDisabled: !eq.isValid || e6,
                    onPrimary: tD,
                    shouldUseManaModal: ed,
                }));
            break;
        case O.pn.AWAITING_AUTHENTICATION:
            t = (0, r.jsx)(el, {});
            break;
        default:
            throw Error(`Unexpected step: ${eb}`);
    }
    let tL = eh && ta,
        tw = tL ? "combined_stripe_elements" : void 0,
        tM = (0, r.jsxs)(u.YC2, {
            className: X.C9,
            staticClassName: X.a2,
            animatedNodeClassName: X.L2,
            fillParent: !0,
            overrideKey: tw,
            step: eb,
            steps: eM.steps,
            sideMargin: 20,
            children: [
                null != eL &&
                    (0, r.jsx)("div", { className: Q.Ns, children: (0, r.jsx)(u.wx6, { type: "info", children: eL }) }),
                tL &&
                    (0, r.jsx)(N.e4, {
                        step: eb,
                        analyticsContext:
                            null != x ? { activitySessionId: ep, contextMetadata: ef, analyticsData: x } : void 0,
                        paymentElementSelectedType: tl,
                        elementsRef: td,
                        stripePaymentElementProps: tf,
                        stripeAddressElementProps: tp,
                        addressElementKey: th,
                        billingAddressInfo: eq.info,
                        onSetupError: () => {
                            tc(), eF(O.pn.PAYMENT_TYPE);
                        },
                    }),
                t,
            ],
        }),
        tx = eb === O.pn.PAYMENT_TYPE && 0 === p.length ? null : n;
    return B
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  W && (0, r.jsx)(b.A, { className: Q.At, isEligibleForTrial: W }),
                  (0, r.jsxs)(L.dZ, { children: [tE, tM] }),
                  (0, r.jsx)(L.UX, { children: tx }),
              ],
          })
        : (0, r.jsx)(H.A, {
              shouldUseManaModal: ed,
              steps: A ?? eM.steps,
              currentStep: T ?? eb,
              overrideKey: tw,
              paymentError: _.paymentError,
              header: C,
              hideBreadcrumbs: G,
              body: tM,
              footer: tx,
          });
}
function ec(e) {
    let {
            defaultPaymentSourceId: t,
            paymentSources: n,
            hasFetchedPaymentSources: r,
        } = (0, l.cf)([U.A], () => ({
            defaultPaymentSourceId: void 0 !== e ? e : U.A.defaultPaymentSourceId,
            paymentSources: U.A.paymentSources,
            hasFetchedPaymentSources: U.A.hasFetchedPaymentSources,
        })),
        s = (0, l.bG)([Y.A], () => Y.A.cashAppPayComponent),
        a = (0, l.bG)([T.A], () => T.A.data?.allowed_payment_source_types ?? null);
    (0, A.Ay)(() => {
        (0, d.UU)(), r || (0, I.$o)();
    }),
        i.useEffect(() => {
            null == s && null != a && a.includes(q.he.CASH_APP) && (0, j.UU)();
        }, [a, s]);
    let [o, u] = i.useState(t);
    null != t && null == o && u(t);
    let [f, p] = i.useState(() => ({ info: ee, isValid: !1 })),
        [h, m] = i.useState(() => ({ info: et, isValid: !1 })),
        [E, g] = i.useState(""),
        [S, y] = i.useState(""),
        [v, N] = i.useState(() => ({ token: null })),
        [C, R, O, b, D] = (0, l.yK)([P.A], () => [
            P.A.braintreeEmail,
            P.A.braintreeNonce,
            P.A.error,
            P.A.venmoUsername,
            P.A.adyenPaymentData,
        ]),
        [L, w] = (0, l.yK)([k.A], () => [k.A.error, k.A.isAwaitingAuthentication]);
    i.useEffect(() => {
        let e = (e) => {
            let { billingAddress: t } = e;
            m({ info: t, isValid: t.country.length > 0 });
        };
        return (
            c.h.subscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e),
            () => {
                c.h.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e), (0, _.ET)();
            }
        );
    }, []);
    let [M, x] = i.useState(!1),
        [F, V] = i.useState(!1),
        [H, W] = i.useState(null),
        K = i.useRef(null),
        $ = (0, l.bG)([k.A], () => k.A.isAwaitingAuthentication),
        [z, Z] = (0, l.yK)([G.A], () => [G.A.purchaseTokenAuthState, G.A.purchaseTokenHash]);
    return (
        i.useEffect(() => {
            null != H && null != K.current && K.current.scrollIntoView({ behavior: "smooth" });
        }, [H]),
        {
            paymentSources: n,
            paymentSourceId: o,
            hasFetchedPaymentSources: r,
            setPaymentSourceId: u,
            creditCardState: f,
            setCreditCardState: p,
            tokenState: v,
            setTokenState: N,
            billingAddressState: h,
            setBillingAddressState: m,
            isSubmittingCurrentStep: M,
            setIsSubmittingCurrentStep: x,
            hasRedirectURL: F,
            setHasRedirectURL: V,
            braintreeEmail: C,
            braintreeNonce: R,
            venmoUsername: b,
            adyenPaymentData: D,
            paymentError: null != L ? L : O,
            paymentAuthenticationState: w ? B.oc.PENDING : null != L ? B.oc.ERROR : B.oc.NONE,
            purchaseError: H,
            setPurchaseError: W,
            purchaseErrorBlockRef: K,
            isAuthenticating: $,
            purchaseTokenAuthState: z,
            purchaseTokenHash: Z,
            epsBankState: S,
            setEpsBankState: y,
            p24BankState: E,
            setP24BankState: g,
        }
    );
}
