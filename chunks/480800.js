"use strict";
n.d(t, { Y: () => ec, _V: () => ed });
var r = n(627968),
    i = n(64700),
    s = n(342393);
n(284009);
var a = n(311907),
    o = n(397927),
    l = n(73153),
    u = n(493405),
    c = n(391048),
    d = n(15373),
    _ = n(229403),
    f = n(891197),
    p = n(202626),
    h = n(893234),
    m = n(964486),
    E = n(323082),
    g = n(721101),
    A = n(648335),
    I = n(6332),
    T = n(182533),
    S = n(211528),
    y = n(93159),
    v = n(626584),
    N = n(156312),
    C = n(166532),
    R = n(69494),
    O = n(19311),
    b = n(482132),
    D = n(615310),
    L = n(617745),
    w = n(921925),
    M = n(615405),
    P = n(825755),
    x = n(153084),
    k = n(295405),
    U = n(293700),
    G = n(67480),
    F = n(954571),
    V = n(427262),
    B = n(251913),
    H = n(632638),
    j = n(682449),
    Y = n(490581),
    W = n(168984),
    K = n(836308),
    $ = n(632721),
    z = n(335425),
    q = n(808574),
    Z = n(652215),
    X = n(818348),
    Q = n(985018),
    J = n(691189),
    ee = n(801753);
let et = new v.A("AddPaymentStep.tsx"),
    en = { name: "", cardNumber: "", expirationDate: "", cvc: "" },
    er = { email: "", name: "", country: "", line1: "", line2: "", city: "", postalCode: "", state: "" };
function ei(e) {
    let { onCardInfoChange: t } = e,
        n = (0, a.bG)([P.A], () => P.A.error);
    return (0, r.jsx)(p.A, { billingError: n, onCardInfoChange: t });
}
function es() {
    return (0, r.jsx)(d.A, {});
}
function ea() {
    return (0, r.jsx)(_.A, {});
}
function eo() {
    return (0, r.jsx)(W.A, {});
}
function el() {
    let e = (0, a.bG)([M.A], () => M.A.isBusy),
        t = (0, a.bG)([P.A], () => P.A.stripePaymentMethod);
    return (0, r.jsx)(h.y, { stripePaymentMethod: t, submitting: e });
}
function eu() {
    return (0, r.jsx)(f.N, {});
}
function ec(e) {
    let t,
        n,
        {
            paymentModalArgs: l,
            initialStep: c,
            prependSteps: d,
            appendSteps: _,
            onReturn: f,
            onComplete: p,
            onStepChange: h,
            breadcrumpSteps: m,
            currentBreadcrumpStep: g,
            header: v,
            analyticsData: M,
            analyticsLocation: x,
            hideBreadcrumbs: U = !1,
            usePaymentModalStep: B = !1,
            isEligibleForTrial: W = !1,
            allowDesktopRedirectPurchase: en = !1,
            toastContent: er,
            continueSessionToInitialStep: ec,
            overwriteSubscriptionPaymentSource: ed = !1,
            shouldUseManaModal: e_ = !0,
        } = e,
        { stripe: ef, contextMetadata: ep, activitySessionId: eh, paymentElementsEnabled: em } = (0, N.P5)(),
        eE = (0, D.l)(),
        eg = i.useMemo(() => {
            let e = c === C.pn.PAYMENT_TYPE || c === C.pn.PAYMENT_ELEMENT;
            return em && e ? (en ? C.pn.AWAITING_BROWSER_CHECKOUT : C.pn.PAYMENT_ELEMENT) : c;
        }, [em, c, en]),
        eA = i.useMemo(() => (0, V.Gn)(), []),
        {
            CREDIT_CARD_STEPS: eI,
            PAYPAL_STEPS: eT,
            IDEAL_STEPS: eS,
            PAYMENT_REQUEST_STEPS: ey,
            VENMO_STEPS: ev,
            ADD_PAYMENT_STEPS: eN,
            PRZELEWY24_STEPS: eC,
            EPS_STEPS: eR,
            CASH_APP_STEPS: eO,
            PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: eb,
        } = (0, $.kh)({ prependSteps: d, appendSteps: _, paymentElementsEnabled: em });
    function eD(e) {
        switch (e) {
            case C.pn.CREDIT_CARD_INFORMATION:
                return eI;
            case C.pn.CASH_APP_INFORMATION:
                return eO;
            default:
                return { steps: [C.pn.ADD_PAYMENT_STEPS] };
        }
    }
    let [eL, ew] = i.useState(eg),
        [eM, eP] = i.useState(null),
        [ex, ek] = i.useState(eD(eg));
    i.useEffect(() => {
        (0, E.IV)();
    }, []);
    let eU = (0, a.bG)([P.A], () => P.A.redirectedPaymentSourceId),
        eG = (0, a.bG)([Y.A], () => Y.A.cashAppPayComponent),
        eF = { completeSteps: ti, setIsSubmittingCurrentStep: l.setIsSubmittingCurrentStep },
        eV = i.useRef(eF);
    i.useEffect(() => {
        eV.current = eF;
    }),
        i.useEffect(() => {
            let { completeSteps: e, setIsSubmittingCurrentStep: t } = eV.current;
            (async () => {
                if (null == eU) return;
                await (0, E.$o)();
                let n = k.A.getPaymentSource(eU);
                null != n && (e(n), t(!1), P.A.clearRedirectedPaymentSourceId());
            })();
        }, [eU]);
    let eB = i.useCallback(
            function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                eP(null), ew(e), t && h({ currentStep: eL, toStep: e });
            },
            [eL, h],
        ),
        eH = i.useCallback(
            (e) => {
                F.default.track(Z.HAw.PAYMENT_FLOW_ADD_SOURCE_COMPLETED, {
                    load_id: ep.loadId,
                    analytics_location: x,
                    payment_source_id: e.id,
                    payment_source_type: e.type,
                    payment_source_country: e.paymentMethodCountry,
                });
            },
            [ep.loadId, x],
        ),
        ej = (0, a.bG)([P.A], () => P.A.error),
        eY = i.useRef(ej);
    i.useEffect(() => {
        let e = eY.current;
        (eY.current = ej),
            null != ej &&
                ej !== e &&
                F.default.track(Z.HAw.PAYMENT_FLOW_ADD_SOURCE_ERROR, {
                    load_id: ep.loadId,
                    analytics_location: x,
                    payment_source_type: ex.methodType,
                    error_code: ej.code,
                    error_message: ej.message,
                });
    }, [ej, ep.loadId, x, ex.methodType]);
    let eW = i.useCallback(
            (e) => {
                eH(e),
                    (0, o.showToast)(
                        (0, o.createToast)(void 0 !== er ? er : Q.intl.string(Q.t["VJPg+l"]), o.ToastType.SUCCESS, {
                            position: o.ToastPosition.BOTTOM,
                        }),
                    ),
                    p(eL, e),
                    eB(eg, !1);
            },
            [eB, eg, eL, p, er, eH],
        ),
        [eK, e$] = i.useState(null),
        {
            setPaymentSourceId: ez,
            creditCardState: eq,
            setCreditCardState: eZ,
            setTokenState: eX,
            isSubmittingCurrentStep: eQ,
            billingAddressState: eJ,
            setBillingAddressState: e0,
            setIsSubmittingCurrentStep: e1,
            braintreeEmail: e2,
            braintreeNonce: e3,
            venmoUsername: e6,
            adyenPaymentData: e4,
            epsBankState: e5,
            setEpsBankState: e7,
            p24BankState: e8,
            setP24BankState: e9,
            selectedSkuId: te,
        } = l,
        tt = te ?? "",
        tn = (0, a.bG)([G.A], () => G.A.get(tt), [tt]),
        tr = tn?.eligiblePaymentGateways?.map((e) => e.valueOf());
    function ti(e) {
        ez(e.id), eW(e);
    }
    let ts = () => {
            ek(eN), eB(C.pn.PAYMENT_TYPE);
        },
        ta = (0, S.wD)({
            step: eL,
            continueSessionToInitialStep: ec,
            paymentElementsEnabled: em,
            handleStepChange: eB,
            logger: et,
            shouldLogOnChangeEvents: eA || !1,
            onBillingAddressChange: (e, t) => {
                e0({ info: { ...eJ.info, ...e }, isValid: t });
            },
        }),
        {
            shouldRenderPaymentElement: to,
            paymentElementReady: tl,
            paymentElementSelectedType: tu,
            returnToPaymentElementStep: tc,
            onBackFromPaymentElement: td,
            combinedStripeElementsRef: t_,
            stripePaymentElementProps: tf,
            stripeAddressElementProps: tp,
            remountAddressElement: th,
            addressElementKey: tm,
        } = ta,
        tE = i.useCallback(() => {
            eB(C.pn.ADDRESS), em && S.Ky.includes(eL) && th();
        }, [eB, em, th, eL]),
        tg = i.useCallback(
            (e) => {
                em && null != tu && (0, A.PE)(e) ? tc(e) : eB(C.pn.PAYMENT_TYPE);
            },
            [em, tu, tc, eB],
        ),
        tA = B ? (0, r.jsx)(w.A, { className: ee._8 }) : null,
        tI = (0, K.zg)();
    switch (eL) {
        case C.pn.ATTEMPT_GOOGLE_PAY:
        case C.pn.ATTEMPT_APPLE_PAY:
        case C.pn.PAYMENT_TYPE:
            let tT = {
                CREDIT_CARD_STEPS: eI,
                PAYPAL_STEPS: eT,
                VENMO_STEPS: ev,
                PAYMENT_REQUEST_STEPS: ey,
                PRZELEWY24_STEPS: eC,
                EPS_STEPS: eR,
                IDEAL_STEPS: eS,
                CASH_APP_STEPS: eO,
            };
            (t = (0, r.jsx)(K.ZL, {
                prependSteps: d,
                appendSteps: _,
                analyticsLocation: x,
                isEligibleForTrial: W,
                allowDesktopRedirectPurchase: en,
                onPaymentRequestSourceFailed: ts,
                paymentModalArgs: l,
                handleStepChange: eB,
                setPaymentMethodSteps: ek,
                setPaymentRequestPaymentMethod: e$,
                currentStep: eL,
                setInfoNotice: eP,
                completeSteps: ti,
                paymentSourceTypeRestrictions: tr,
                ...tT,
                ...tI,
            })),
                (n = (0, r.jsx)(K.GJ, {
                    shouldUseManaModal: e_,
                    onReturn: f,
                    handleStepChange: eB,
                    currentStep: eL,
                    ...tI,
                }));
            break;
        case C.pn.PAYMENT_ELEMENT:
            if (!em) throw (0, E.ne)("Payment Elements not enabled, invalid step", !0);
            (t = null),
                (n = (0, r.jsx)(q.w, {
                    handleStepChange: eB,
                    shouldUseManaModal: e_,
                    setPaymentMethodSteps: ek,
                    primarySubmitting: eQ,
                    primaryDisabled: !tl,
                    onBack: () => {
                        td(), f?.();
                    },
                    paymentModalArgs: l,
                    PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: eb,
                    ...ta,
                }));
            break;
        case C.pn.CREDIT_CARD_INFORMATION:
            let tS = async (e) => {
                e1(!0);
                try {
                    let t = await (0, E.YJ)(ef, e);
                    eX({ token: t }), eB(C.pn.ADDRESS);
                } catch (e) {
                    et.error(e.message ?? JSON.stringify(e));
                } finally {
                    e1(!1);
                }
            };
            t = (0, r.jsx)(ei, {
                onCardInfoChange: (e, t) => {
                    eZ({ info: e, isValid: t }), e0((t) => ({ ...t, info: { ...t.info, name: e.name } }));
                },
            });
            let ty = !eq.isValid,
                tv = () => {
                    eB(C.pn.PAYMENT_TYPE);
                };
            n = (0, r.jsx)(s.ElementsConsumer, {
                children: (e) => {
                    let { elements: t } = e;
                    return (0, r.jsx)(K.uv, {
                        onBack: tv,
                        primaryCTA: O.Ay.CTAType.CONTINUE,
                        primaryType: "submit",
                        primaryText: Q.intl.string(Q.t.PDTjLN),
                        primarySubmitting: eQ,
                        primaryDisabled: ty,
                        onPrimary: () => tS(t),
                        shouldUseManaModal: e_,
                    });
                },
            });
            break;
        case C.pn.AWAITING_BROWSER_CHECKOUT:
        case C.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
        case C.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
            let tN = () => {
                    ek(eI), eB(em ? C.pn.PAYMENT_ELEMENT : C.pn.CREDIT_CARD_INFORMATION);
                },
                tC = () => {
                    em ? (td(), f?.()) : (ek(eN), eB(C.pn.PAYMENT_TYPE));
                };
            (t = (0, r.jsx)(L.t, { step: eL, onPurchaseComplete: () => p(eL), onHandoffFailure: tN })),
                (n = (0, r.jsx)(L.q, { onPrimaryClick: tN, onBackClick: tC }));
            break;
        case C.pn.EPS_INFORMATION:
            (t = (0, r.jsx)(T.A, {
                type: X.he.EPS,
                onAccountHolderNameChange: (e) => e0({ info: { ...eJ.info, name: e }, isValid: eJ.isValid }),
                onEPSBankChange: (e) => e7(e),
                epsBankValue: e5,
                billingAddressInfo: eJ.info,
            })),
                (n = (0, r.jsx)(K.uv, {
                    onBack: () => tg(X.he.EPS),
                    primaryCTA: O.Ay.CTAType.CONTINUE,
                    primaryText: Q.intl.string(Q.t.PDTjLN),
                    primaryDisabled: void 0 === e5 || "" === e5 || "" === eJ.info.name,
                    onPrimary: () => tE(),
                    shouldUseManaModal: e_,
                }));
            break;
        case C.pn.IDEAL_INFORMATION:
            (t = (0, r.jsx)(I.A, {
                type: X.he.IDEAL,
                onAccountHolderNameChange: (e) => e0({ info: { ...eJ.info, name: e }, isValid: eJ.isValid }),
                billingAddressInfo: eJ.info,
            })),
                (n = (0, r.jsx)(K.uv, {
                    onBack: () => eB(C.pn.PAYMENT_TYPE),
                    primaryCTA: O.Ay.CTAType.CONTINUE,
                    primaryText: Q.intl.string(Q.t.PDTjLN),
                    primaryDisabled: "" === eJ.info.name,
                    onPrimary: () => tE(),
                    shouldUseManaModal: e_,
                }));
            break;
        case C.pn.PRZELEWY24_INFORMATION:
            (t = (0, r.jsx)(T.A, {
                type: X.he.PRZELEWY24,
                onNameChange: (e) => e0({ info: { ...eJ.info, name: e }, isValid: eJ.isValid }),
                onEmailChange: (e) => e0({ info: { ...eJ.info, email: e }, isValid: eJ.isValid }),
                onP24BankChange: (e) => {
                    e9(e);
                },
                p24BankValue: e8,
                billingAddressInfo: eJ.info,
            })),
                (n = (0, r.jsx)(K.uv, {
                    onBack: () => tg(X.he.PRZELEWY24),
                    primaryCTA: O.Ay.CTAType.CONTINUE,
                    primaryText: Q.intl.string(Q.t.PDTjLN),
                    primaryDisabled:
                        void 0 === eJ.info.name ||
                        "" === eJ.info.name ||
                        void 0 === eJ.info.email ||
                        "" === eJ.info.email ||
                        void 0 === e8 ||
                        "" === e8,
                    onPrimary: () => tE(),
                    shouldUseManaModal: e_,
                }));
            break;
        case C.pn.PAYPAL_INFORMATION:
            let tR = 0 !== e2.length && null != e3;
            (t = (0, r.jsx)(es, {})),
                (n = (0, r.jsx)(K.uv, {
                    onBack: () => tg(X.he.PAYPAL),
                    primaryCTA: O.Ay.CTAType.CONTINUE,
                    primaryText: tR ? Q.intl.string(Q.t.PDTjLN) : Q.intl.string(Q.t.Djzd7L),
                    onPrimary: () => (tR ? tE() : (0, u.$e)()),
                    shouldUseManaModal: e_,
                }));
            break;
        case C.pn.VENMO_INFORMATION:
            let tO = 0 !== e6.length && null != e3;
            (t = (0, r.jsx)(ea, {})),
                (n = (0, r.jsx)(K.uv, {
                    onBack: () => tg(X.he.VENMO),
                    primaryCTA: O.Ay.CTAType.CONTINUE,
                    primaryText: tO ? Q.intl.string(Q.t.PDTjLN) : Q.intl.string(Q.t["4KoTLM"]),
                    onPrimary: () => (tO ? tE() : (0, u.jR)()),
                    shouldUseManaModal: e_,
                }));
            break;
        case C.pn.PAYMENT_REQUEST_INFORMATION:
            (t = (0, r.jsx)(el, {})),
                (n = (0, r.jsx)(K.uv, { onBack: () => eB(C.pn.PAYMENT_TYPE), shouldUseManaModal: e_ }));
            break;
        case C.pn.CASH_APP_INFORMATION:
            let tb = null != e4,
                tD = null != eG;
            (t = (0, r.jsx)(eo, {})),
                (n = (0, r.jsx)(K.uv, {
                    onBack: () => tg(X.he.CASH_APP),
                    primaryCTA: O.Ay.CTAType.CONTINUE,
                    primaryText: tb ? Q.intl.string(Q.t.PDTjLN) : Q.intl.string(Q.t["9ALP8w"]),
                    onPrimary: () => (tb ? tE() : (0, j.uy)()),
                    primaryDisabled: !tD,
                    shouldUseManaModal: e_,
                }));
            break;
        case C.pn.ADDRESS:
            let tL = em && null != tu;
            (t = (0, r.jsx)(z.Ej, {
                paymentModalArgs: l,
                paymentSourceType: ex.methodType ?? X.he.CARD,
                shouldUsePaymentElement: tL,
            })),
                (n = (0, r.jsx)(z.bC, {
                    paymentModalArgs: l,
                    shouldUseManaModal: e_,
                    analyticsLocation: x,
                    overwriteSubscriptionPaymentSource: ed,
                    handleStepChange: eB,
                    onPaymentRequestSourceFailed: ts,
                    paymentRequestPaymentMethod: eK,
                    completeSteps: ti,
                    paymentMethodSteps: ex,
                    shouldUsePaymentElement: tL,
                    ...ta,
                }));
            break;
        case C.pn.AWAITING_AUTHENTICATION:
            t = (0, r.jsx)(eu, {});
            break;
        default:
            throw Error(`Unexpected step: ${eL}`);
    }
    let tw = em && to,
        tM = tw ? "combined_stripe_elements" : void 0,
        tP = (0, r.jsxs)(o.YC2, {
            className: J.C9,
            staticClassName: J.a2,
            animatedNodeClassName: J.L2,
            fillParent: !0,
            overrideKey: tM,
            step: eL,
            steps: ex.steps,
            sideMargin: 20,
            children: [
                null != eM &&
                    (0, r.jsx)("div", {
                        className: ee.Ns,
                        children: (0, r.jsx)(o.wx6, { type: "info", children: eM }),
                    }),
                tw &&
                    (0, r.jsx)(S.e4, {
                        step: eL,
                        analyticsContext:
                            null != M ? { activitySessionId: eh, contextMetadata: ep, analyticsData: M } : void 0,
                        paymentElementSelectedType: tu,
                        elementsRef: t_,
                        stripePaymentElementProps: tf,
                        stripeAddressElementProps: tp,
                        addressElementKey: tm,
                        billingAddressInfo: eJ.info,
                        onSetupError: () => {
                            td(), eB(C.pn.PAYMENT_TYPE);
                        },
                        paymentElementFooter: (0, r.jsx)(y.Z4, {
                            className: ee.SO,
                            stackingBehavior: "stack",
                            onComplete: () => {
                                setTimeout(() => eE(C.pn.REVIEW), 0);
                            },
                        }),
                    }),
                t,
            ],
        }),
        tx = eL === C.pn.PAYMENT_TYPE && 0 === d.length ? null : n;
    return B
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  W && (0, r.jsx)(R.A, { className: ee.At, isEligibleForTrial: W }),
                  (0, r.jsxs)(b.dZ, { children: [tA, tP] }),
                  (0, r.jsx)(b.UX, { children: tx }),
              ],
          })
        : (0, r.jsx)(H.A, {
              shouldUseManaModal: e_,
              steps: m ?? ex.steps,
              currentStep: g ?? eL,
              overrideKey: tM,
              paymentError: l.paymentError,
              header: v,
              hideBreadcrumbs: U,
              body: tP,
              footer: tx,
          });
}
function ed(e) {
    let {
            defaultPaymentSourceId: t,
            paymentSources: n,
            hasFetchedPaymentSources: r,
        } = (0, a.cf)([k.A], () => ({
            defaultPaymentSourceId: void 0 !== e ? e : k.A.defaultPaymentSourceId,
            paymentSources: k.A.paymentSources,
            hasFetchedPaymentSources: k.A.hasFetchedPaymentSources,
        })),
        s = (0, a.bG)([Y.A], () => Y.A.cashAppPayComponent),
        o = (0, a.bG)([g.A], () => g.A.data?.allowed_payment_source_types ?? null);
    (0, m.Ay)(() => {
        (0, u.UU)(), r || (0, E.$o)();
    }),
        i.useEffect(() => {
            null == s && null != o && o.includes(X.he.CASH_APP) && (0, j.UU)();
        }, [o, s]);
    let [d, _] = i.useState(t);
    null != t && null == d && _(t);
    let [f, p] = i.useState(() => ({ info: en, isValid: !1 })),
        [h, A] = i.useState(() => ({ info: er, isValid: !1 })),
        [I, T] = i.useState(""),
        [S, y] = i.useState(""),
        [v, N] = i.useState(() => ({ token: null })),
        [C, R, O, b, D] = (0, a.yK)([P.A], () => [
            P.A.braintreeEmail,
            P.A.braintreeNonce,
            P.A.error,
            P.A.venmoUsername,
            P.A.adyenPaymentData,
        ]),
        [L, w] = (0, a.yK)([x.A], () => [x.A.error, x.A.isAwaitingAuthentication]);
    i.useEffect(() => {
        let e = (e) => {
            let { billingAddress: t } = e;
            A({ info: t, isValid: t.country.length > 0 });
        };
        return (
            l.h.subscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e),
            () => {
                l.h.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e), (0, c.ET)();
            }
        );
    }, []);
    let [M, G] = i.useState(!1),
        [F, V] = i.useState(!1),
        [H, W] = i.useState(null),
        K = i.useRef(null),
        $ = (0, a.bG)([x.A], () => x.A.isAwaitingAuthentication),
        [z, q] = (0, a.yK)([U.A], () => [U.A.purchaseTokenAuthState, U.A.purchaseTokenHash]);
    return (
        i.useEffect(() => {
            null != H && null != K.current && K.current.scrollIntoView({ behavior: "smooth" });
        }, [H]),
        {
            paymentSources: n,
            paymentSourceId: d,
            hasFetchedPaymentSources: r,
            setPaymentSourceId: _,
            creditCardState: f,
            setCreditCardState: p,
            tokenState: v,
            setTokenState: N,
            billingAddressState: h,
            setBillingAddressState: A,
            isSubmittingCurrentStep: M,
            setIsSubmittingCurrentStep: G,
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
            purchaseTokenHash: q,
            epsBankState: S,
            setEpsBankState: y,
            p24BankState: I,
            setP24BankState: T,
        }
    );
}
