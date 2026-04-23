"use strict";
n.d(t, { Y: () => ep, _V: () => eh });
var r = n(627968),
    i = n(64700),
    s = n(342393);
n(284009);
var a = n(311907),
    o = n(691540),
    l = n(857250),
    u = n(97483),
    c = n(685094),
    d = n(683071),
    _ = n(73153),
    f = n(493405),
    p = n(391048),
    h = n(15373),
    E = n(229403),
    m = n(891197),
    g = n(202626),
    A = n(893234),
    I = n(964486),
    T = n(323082),
    S = n(721101),
    y = n(648335),
    N = n(6332),
    v = n(182533),
    C = n(211528),
    O = n(93159),
    R = n(626584),
    b = n(156312),
    D = n(166532),
    L = n(69494),
    w = n(19311),
    M = n(482132),
    P = n(615310),
    x = n(617745),
    k = n(921925),
    U = n(615405),
    G = n(825755),
    F = n(153084),
    V = n(295405),
    B = n(293700),
    H = n(67480),
    j = n(954571),
    Y = n(427262),
    W = n(251913),
    K = n(632638),
    $ = n(682449),
    z = n(490581),
    q = n(168984),
    X = n(836308),
    Q = n(632721),
    Z = n(335425),
    J = n(808574),
    ee = n(652215),
    et = n(818348),
    en = n(985018),
    er = n(691189),
    ei = n(801753);
let es = new R.A("AddPaymentStep.tsx"),
    ea = { name: "", cardNumber: "", expirationDate: "", cvc: "" },
    eo = { email: "", name: "", country: "", line1: "", line2: "", city: "", postalCode: "", state: "" };
function el(e) {
    let { onCardInfoChange: t } = e,
        n = (0, a.bG)([G.A], () => G.A.error);
    return (0, r.jsx)(g.A, { billingError: n, onCardInfoChange: t });
}
function eu() {
    return (0, r.jsx)(h.A, {});
}
function ec() {
    return (0, r.jsx)(E.A, {});
}
function ed() {
    return (0, r.jsx)(q.A, {});
}
function e_() {
    let e = (0, a.bG)([U.A], () => U.A.isBusy),
        t = (0, a.bG)([G.A], () => G.A.stripePaymentMethod);
    return (0, r.jsx)(A.y, { stripePaymentMethod: t, submitting: e });
}
function ef() {
    return (0, r.jsx)(m.N, {});
}
function ep(e) {
    let t,
        n,
        {
            paymentModalArgs: _,
            initialStep: p,
            prependSteps: h,
            appendSteps: E,
            onReturn: m,
            onComplete: g,
            onStepChange: A,
            breadcrumpSteps: I,
            currentBreadcrumpStep: S,
            header: R,
            analyticsData: U,
            analyticsLocation: F,
            hideBreadcrumbs: B = !1,
            usePaymentModalStep: W = !1,
            isEligibleForTrial: q = !1,
            allowDesktopRedirectPurchase: ea = !1,
            toastContent: eo,
            continueSessionToInitialStep: ep,
            overwriteSubscriptionPaymentSource: eh = !1,
            shouldUseManaModal: eE = !0,
        } = e,
        { stripe: em, contextMetadata: eg, activitySessionId: eA, paymentElementsEnabled: eI } = (0, b.P5)(),
        eT = (0, P.l)(),
        eS = i.useMemo(() => {
            let e = p === D.pn.PAYMENT_TYPE || p === D.pn.PAYMENT_ELEMENT;
            return eI && e ? (ea ? D.pn.AWAITING_BROWSER_CHECKOUT : D.pn.PAYMENT_ELEMENT) : p;
        }, [eI, p, ea]),
        ey = i.useMemo(() => (0, Y.Gn)(), []),
        {
            CREDIT_CARD_STEPS: eN,
            PAYPAL_STEPS: ev,
            IDEAL_STEPS: eC,
            PAYMENT_REQUEST_STEPS: eO,
            VENMO_STEPS: eR,
            ADD_PAYMENT_STEPS: eb,
            PRZELEWY24_STEPS: eD,
            EPS_STEPS: eL,
            CASH_APP_STEPS: ew,
            PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: eM,
        } = (0, Q.kh)({ prependSteps: h, appendSteps: E, paymentElementsEnabled: eI }),
        [eP, ex] = i.useState(eS),
        [ek, eU] = i.useState(null),
        [eG, eF] = i.useState(
            (function (e) {
                switch (e) {
                    case D.pn.CREDIT_CARD_INFORMATION:
                        return eN;
                    case D.pn.CASH_APP_INFORMATION:
                        return ew;
                    default:
                        return { steps: [D.pn.ADD_PAYMENT_STEPS] };
                }
            })(eS),
        );
    i.useEffect(() => {
        (0, T.IV)();
    }, []);
    let eV = (0, a.bG)([G.A], () => G.A.redirectedPaymentSourceId),
        eB = (0, a.bG)([z.A], () => z.A.cashAppPayComponent),
        eH = { completeSteps: to, setIsSubmittingCurrentStep: _.setIsSubmittingCurrentStep },
        ej = i.useRef(eH);
    i.useEffect(() => {
        ej.current = eH;
    }),
        i.useEffect(() => {
            let { completeSteps: e, setIsSubmittingCurrentStep: t } = ej.current;
            (async () => {
                if (null == eV) return;
                await (0, T.$o)();
                let n = V.A.getPaymentSource(eV);
                null != n && (e(n), t(!1), G.A.clearRedirectedPaymentSourceId());
            })();
        }, [eV]);
    let eY = i.useCallback(
            function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                eU(null), ex(e), t && A({ currentStep: eP, toStep: e });
            },
            [eP, A],
        ),
        eW = i.useCallback(
            (e) => {
                j.default.track(ee.HAw.PAYMENT_FLOW_ADD_SOURCE_COMPLETED, {
                    load_id: eg.loadId,
                    analytics_location: F,
                    payment_source_id: e.id,
                    payment_source_type: e.type,
                    payment_source_country: e.paymentMethodCountry,
                });
            },
            [eg.loadId, F],
        ),
        eK = (0, a.bG)([G.A], () => G.A.error),
        e$ = i.useRef(eK);
    i.useEffect(() => {
        let e = e$.current;
        (e$.current = eK),
            null != eK &&
                eK !== e &&
                j.default.track(ee.HAw.PAYMENT_FLOW_ADD_SOURCE_ERROR, {
                    load_id: eg.loadId,
                    analytics_location: F,
                    payment_source_type: eG.methodType,
                    error_code: eK.code,
                    error_message: eK.message,
                });
    }, [eK, eg.loadId, F, eG.methodType]);
    let ez = i.useCallback(
            (e) => {
                eW(e),
                    (0, o.P0)(
                        (0, l.o)(void 0 !== eo ? eo : en.intl.string(en.t["VJPg+l"]), u.Ck.SUCCESS, {
                            position: u.xJ.BOTTOM,
                        }),
                    ),
                    g(eP, e),
                    eY(eS, !1);
            },
            [eY, eS, eP, g, eo, eW],
        ),
        [eq, eX] = i.useState(null),
        {
            setPaymentSourceId: eQ,
            creditCardState: eZ,
            setCreditCardState: eJ,
            setTokenState: e0,
            isSubmittingCurrentStep: e1,
            billingAddressState: e2,
            setBillingAddressState: e3,
            setIsSubmittingCurrentStep: e6,
            braintreeEmail: e4,
            braintreeNonce: e7,
            venmoUsername: e5,
            adyenPaymentData: e8,
            epsBankState: e9,
            setEpsBankState: te,
            p24BankState: tt,
            setP24BankState: tn,
            selectedSkuId: tr,
        } = _,
        ti = tr ?? "",
        ts = (0, a.bG)([H.A], () => H.A.get(ti), [ti]),
        ta = ts?.eligiblePaymentGateways?.map((e) => e.valueOf());
    function to(e) {
        eQ(e.id), ez(e);
    }
    let tl = () => {
            eF(eb), eY(D.pn.PAYMENT_TYPE);
        },
        tu = (0, C.wD)({
            step: eP,
            continueSessionToInitialStep: ep,
            paymentElementsEnabled: eI,
            handleStepChange: eY,
            logger: es,
            shouldLogOnChangeEvents: ey || !1,
            onBillingAddressChange: (e, t) => {
                e3({ info: { ...e2.info, ...e }, isValid: t });
            },
        }),
        {
            shouldRenderPaymentElement: tc,
            paymentElementReady: td,
            paymentElementSelectedType: t_,
            returnToPaymentElementStep: tf,
            onBackFromPaymentElement: tp,
            combinedStripeElementsRef: th,
            stripePaymentElementProps: tE,
            stripeAddressElementProps: tm,
            remountAddressElement: tg,
            addressElementKey: tA,
        } = tu,
        tI = i.useCallback(() => {
            eY(D.pn.ADDRESS), eI && C.Ky.includes(eP) && tg();
        }, [eY, eI, tg, eP]),
        tT = i.useCallback(
            (e) => {
                eI && null != t_ && (0, y.PE)(e) ? tf(e) : eY(D.pn.PAYMENT_TYPE);
            },
            [eI, t_, tf, eY],
        ),
        tS = W ? (0, r.jsx)(k.A, { className: ei._8 }) : null,
        ty = (0, X.zg)();
    switch (eP) {
        case D.pn.ATTEMPT_GOOGLE_PAY:
        case D.pn.ATTEMPT_APPLE_PAY:
        case D.pn.PAYMENT_TYPE:
            (t = (0, r.jsx)(X.ZL, {
                prependSteps: h,
                appendSteps: E,
                analyticsLocation: F,
                isEligibleForTrial: q,
                allowDesktopRedirectPurchase: ea,
                onPaymentRequestSourceFailed: tl,
                paymentModalArgs: _,
                handleStepChange: eY,
                setPaymentMethodSteps: eF,
                setPaymentRequestPaymentMethod: eX,
                currentStep: eP,
                setInfoNotice: eU,
                completeSteps: to,
                paymentSourceTypeRestrictions: ta,
                CREDIT_CARD_STEPS: eN,
                PAYPAL_STEPS: ev,
                VENMO_STEPS: eR,
                PAYMENT_REQUEST_STEPS: eO,
                PRZELEWY24_STEPS: eD,
                EPS_STEPS: eL,
                IDEAL_STEPS: eC,
                CASH_APP_STEPS: ew,
                ...ty,
            })),
                (n = (0, r.jsx)(X.GJ, {
                    shouldUseManaModal: eE,
                    onReturn: m,
                    handleStepChange: eY,
                    currentStep: eP,
                    ...ty,
                }));
            break;
        case D.pn.PAYMENT_ELEMENT:
            if (!eI) throw (0, T.ne)("Payment Elements not enabled, invalid step", !0);
            (t = null),
                (n = (0, r.jsx)(J.w, {
                    handleStepChange: eY,
                    shouldUseManaModal: eE,
                    setPaymentMethodSteps: eF,
                    primarySubmitting: e1,
                    primaryDisabled: !td,
                    onBack: () => {
                        tp(), m?.();
                    },
                    paymentModalArgs: _,
                    PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: eM,
                    ...tu,
                }));
            break;
        case D.pn.CREDIT_CARD_INFORMATION:
            let tN = async (e) => {
                e6(!0);
                try {
                    let t = await (0, T.YJ)(em, e);
                    e0({ token: t }), eY(D.pn.ADDRESS);
                } catch (e) {
                    es.error(e.message ?? JSON.stringify(e));
                } finally {
                    e6(!1);
                }
            };
            t = (0, r.jsx)(el, {
                onCardInfoChange: (e, t) => {
                    eJ({ info: e, isValid: t }), e3((t) => ({ ...t, info: { ...t.info, name: e.name } }));
                },
            });
            let tv = !eZ.isValid,
                tC = () => {
                    eY(D.pn.PAYMENT_TYPE);
                };
            n = (0, r.jsx)(s.ElementsConsumer, {
                children: (e) => {
                    let { elements: t } = e;
                    return (0, r.jsx)(X.uv, {
                        onBack: tC,
                        primaryCTA: w.Ay.CTAType.CONTINUE,
                        primaryType: "submit",
                        primaryText: en.intl.string(en.t.PDTjLN),
                        primarySubmitting: e1,
                        primaryDisabled: tv,
                        onPrimary: () => tN(t),
                        shouldUseManaModal: eE,
                    });
                },
            });
            break;
        case D.pn.AWAITING_BROWSER_CHECKOUT:
        case D.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
        case D.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
            let tO = () => {
                eF(eN), eY(eI ? D.pn.PAYMENT_ELEMENT : D.pn.CREDIT_CARD_INFORMATION);
            };
            (t = (0, r.jsx)(x.t, { step: eP, onPurchaseComplete: () => g(eP), onHandoffFailure: tO })),
                (n = (0, r.jsx)(x.q, {
                    onPrimaryClick: tO,
                    onBackClick: () => {
                        eI ? (tp(), m?.()) : (eF(eb), eY(D.pn.PAYMENT_TYPE));
                    },
                }));
            break;
        case D.pn.EPS_INFORMATION:
            (t = (0, r.jsx)(v.A, {
                type: et.he.EPS,
                onAccountHolderNameChange: (e) => e3({ info: { ...e2.info, name: e }, isValid: e2.isValid }),
                onEPSBankChange: (e) => te(e),
                epsBankValue: e9,
                billingAddressInfo: e2.info,
            })),
                (n = (0, r.jsx)(X.uv, {
                    onBack: () => tT(et.he.EPS),
                    primaryCTA: w.Ay.CTAType.CONTINUE,
                    primaryText: en.intl.string(en.t.PDTjLN),
                    primaryDisabled: void 0 === e9 || "" === e9 || "" === e2.info.name,
                    onPrimary: () => tI(),
                    shouldUseManaModal: eE,
                }));
            break;
        case D.pn.IDEAL_INFORMATION:
            (t = (0, r.jsx)(N.A, {
                type: et.he.IDEAL,
                onAccountHolderNameChange: (e) => e3({ info: { ...e2.info, name: e }, isValid: e2.isValid }),
                billingAddressInfo: e2.info,
            })),
                (n = (0, r.jsx)(X.uv, {
                    onBack: () => eY(D.pn.PAYMENT_TYPE),
                    primaryCTA: w.Ay.CTAType.CONTINUE,
                    primaryText: en.intl.string(en.t.PDTjLN),
                    primaryDisabled: "" === e2.info.name,
                    onPrimary: () => tI(),
                    shouldUseManaModal: eE,
                }));
            break;
        case D.pn.PRZELEWY24_INFORMATION:
            (t = (0, r.jsx)(v.A, {
                type: et.he.PRZELEWY24,
                onNameChange: (e) => e3({ info: { ...e2.info, name: e }, isValid: e2.isValid }),
                onEmailChange: (e) => e3({ info: { ...e2.info, email: e }, isValid: e2.isValid }),
                onP24BankChange: (e) => {
                    tn(e);
                },
                p24BankValue: tt,
                billingAddressInfo: e2.info,
            })),
                (n = (0, r.jsx)(X.uv, {
                    onBack: () => tT(et.he.PRZELEWY24),
                    primaryCTA: w.Ay.CTAType.CONTINUE,
                    primaryText: en.intl.string(en.t.PDTjLN),
                    primaryDisabled:
                        void 0 === e2.info.name ||
                        "" === e2.info.name ||
                        void 0 === e2.info.email ||
                        "" === e2.info.email ||
                        void 0 === tt ||
                        "" === tt,
                    onPrimary: () => tI(),
                    shouldUseManaModal: eE,
                }));
            break;
        case D.pn.PAYPAL_INFORMATION:
            let tR = 0 !== e4.length && null != e7;
            (t = (0, r.jsx)(eu, {})),
                (n = (0, r.jsx)(X.uv, {
                    onBack: () => tT(et.he.PAYPAL),
                    primaryCTA: w.Ay.CTAType.CONTINUE,
                    primaryText: tR ? en.intl.string(en.t.PDTjLN) : en.intl.string(en.t.Djzd7L),
                    onPrimary: () => (tR ? tI() : (0, f.$e)()),
                    shouldUseManaModal: eE,
                }));
            break;
        case D.pn.VENMO_INFORMATION:
            let tb = 0 !== e5.length && null != e7;
            (t = (0, r.jsx)(ec, {})),
                (n = (0, r.jsx)(X.uv, {
                    onBack: () => tT(et.he.VENMO),
                    primaryCTA: w.Ay.CTAType.CONTINUE,
                    primaryText: tb ? en.intl.string(en.t.PDTjLN) : en.intl.string(en.t["4KoTLM"]),
                    onPrimary: () => (tb ? tI() : (0, f.jR)()),
                    shouldUseManaModal: eE,
                }));
            break;
        case D.pn.PAYMENT_REQUEST_INFORMATION:
            (t = (0, r.jsx)(e_, {})),
                (n = (0, r.jsx)(X.uv, { onBack: () => eY(D.pn.PAYMENT_TYPE), shouldUseManaModal: eE }));
            break;
        case D.pn.CASH_APP_INFORMATION:
            let tD = null != e8;
            (t = (0, r.jsx)(ed, {})),
                (n = (0, r.jsx)(X.uv, {
                    onBack: () => tT(et.he.CASH_APP),
                    primaryCTA: w.Ay.CTAType.CONTINUE,
                    primaryText: tD ? en.intl.string(en.t.PDTjLN) : en.intl.string(en.t["9ALP8w"]),
                    onPrimary: () => (tD ? tI() : (0, $.uy)()),
                    primaryDisabled: null == eB,
                    shouldUseManaModal: eE,
                }));
            break;
        case D.pn.ADDRESS:
            let tL = eI && null != t_;
            (t = (0, r.jsx)(Z.Ej, {
                paymentModalArgs: _,
                paymentSourceType: eG.methodType ?? et.he.CARD,
                shouldUsePaymentElement: tL,
            })),
                (n = (0, r.jsx)(Z.bC, {
                    paymentModalArgs: _,
                    shouldUseManaModal: eE,
                    analyticsLocation: F,
                    overwriteSubscriptionPaymentSource: eh,
                    handleStepChange: eY,
                    onPaymentRequestSourceFailed: tl,
                    paymentRequestPaymentMethod: eq,
                    completeSteps: to,
                    paymentMethodSteps: eG,
                    shouldUsePaymentElement: tL,
                    ...tu,
                }));
            break;
        case D.pn.AWAITING_AUTHENTICATION:
            t = (0, r.jsx)(ef, {});
            break;
        default:
            throw Error(`Unexpected step: ${eP}`);
    }
    let tw = eI && tc,
        tM = tw ? "combined_stripe_elements" : void 0,
        tP = (0, r.jsxs)(c.Y, {
            className: er.C9,
            staticClassName: er.a2,
            animatedNodeClassName: er.L2,
            fillParent: !0,
            overrideKey: tM,
            step: eP,
            steps: eG.steps,
            sideMargin: 20,
            children: [
                null != ek &&
                    (0, r.jsx)("div", { className: ei.Ns, children: (0, r.jsx)(d.w, { type: "info", children: ek }) }),
                tw &&
                    (0, r.jsx)(C.e4, {
                        step: eP,
                        analyticsContext:
                            null != U ? { activitySessionId: eA, contextMetadata: eg, analyticsData: U } : void 0,
                        paymentElementSelectedType: t_,
                        elementsRef: th,
                        stripePaymentElementProps: tE,
                        stripeAddressElementProps: tm,
                        addressElementKey: tA,
                        billingAddressInfo: e2.info,
                        onSetupError: () => {
                            tp(), eY(D.pn.PAYMENT_TYPE);
                        },
                        paymentElementFooter: (0, r.jsx)(O.Z4, {
                            className: ei.SO,
                            stackingBehavior: "stack",
                            onComplete: () => {
                                setTimeout(() => eT(D.pn.REVIEW), 0);
                            },
                        }),
                    }),
                t,
            ],
        }),
        tx = eP === D.pn.PAYMENT_TYPE && 0 === h.length ? null : n;
    return W
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  q && (0, r.jsx)(L.A, { className: ei.At, isEligibleForTrial: q }),
                  (0, r.jsxs)(M.dZ, { children: [tS, tP] }),
                  (0, r.jsx)(M.UX, { children: tx }),
              ],
          })
        : (0, r.jsx)(K.A, {
              shouldUseManaModal: eE,
              steps: I ?? eG.steps,
              currentStep: S ?? eP,
              overrideKey: tM,
              paymentError: _.paymentError,
              header: R,
              hideBreadcrumbs: B,
              body: tP,
              footer: tx,
          });
}
function eh(e) {
    let {
            defaultPaymentSourceId: t,
            paymentSources: n,
            hasFetchedPaymentSources: r,
        } = (0, a.cf)([V.A], () => ({
            defaultPaymentSourceId: void 0 !== e ? e : V.A.defaultPaymentSourceId,
            paymentSources: V.A.paymentSources,
            hasFetchedPaymentSources: V.A.hasFetchedPaymentSources,
        })),
        s = (0, a.bG)([z.A], () => z.A.cashAppPayComponent),
        o = (0, a.bG)([S.A], () => S.A.data?.allowed_payment_source_types ?? null);
    (0, I.Ay)(() => {
        (0, f.UU)(), r || (0, T.$o)();
    }),
        i.useEffect(() => {
            null == s && null != o && o.includes(et.he.CASH_APP) && (0, $.UU)();
        }, [o, s]);
    let [l, u] = i.useState(t);
    null != t && null == l && u(t);
    let [c, d] = i.useState(() => ({ info: ea, isValid: !1 })),
        [h, E] = i.useState(() => ({ info: eo, isValid: !1 })),
        [m, g] = i.useState(""),
        [A, y] = i.useState(""),
        [N, v] = i.useState(() => ({ token: null })),
        [C, O, R, b, D] = (0, a.yK)([G.A], () => [
            G.A.braintreeEmail,
            G.A.braintreeNonce,
            G.A.error,
            G.A.venmoUsername,
            G.A.adyenPaymentData,
        ]),
        [L, w] = (0, a.yK)([F.A], () => [F.A.error, F.A.isAwaitingAuthentication]);
    i.useEffect(() => {
        let e = (e) => {
            let { billingAddress: t } = e;
            E({ info: t, isValid: t.country.length > 0 });
        };
        return (
            _.h.subscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e),
            () => {
                _.h.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e), (0, p.ET)();
            }
        );
    }, []);
    let [M, P] = i.useState(!1),
        [x, k] = i.useState(!1),
        [U, H] = i.useState(null),
        j = i.useRef(null),
        Y = (0, a.bG)([F.A], () => F.A.isAwaitingAuthentication),
        [K, q] = (0, a.yK)([B.A], () => [B.A.purchaseTokenAuthState, B.A.purchaseTokenHash]);
    return (
        i.useEffect(() => {
            null != U && null != j.current && j.current.scrollIntoView({ behavior: "smooth" });
        }, [U]),
        {
            paymentSources: n,
            paymentSourceId: l,
            hasFetchedPaymentSources: r,
            setPaymentSourceId: u,
            creditCardState: c,
            setCreditCardState: d,
            tokenState: N,
            setTokenState: v,
            billingAddressState: h,
            setBillingAddressState: E,
            isSubmittingCurrentStep: M,
            setIsSubmittingCurrentStep: P,
            hasRedirectURL: x,
            setHasRedirectURL: k,
            braintreeEmail: C,
            braintreeNonce: O,
            venmoUsername: b,
            adyenPaymentData: D,
            paymentError: null != L ? L : R,
            paymentAuthenticationState: w ? W.oc.PENDING : null != L ? W.oc.ERROR : W.oc.NONE,
            purchaseError: U,
            setPurchaseError: H,
            purchaseErrorBlockRef: j,
            isAuthenticating: Y,
            purchaseTokenAuthState: K,
            purchaseTokenHash: q,
            epsBankState: A,
            setEpsBankState: y,
            p24BankState: m,
            setP24BankState: g,
        }
    );
}
