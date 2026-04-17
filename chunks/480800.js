"use strict";
n.d(t, { Y: () => el, _V: () => eu });
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
    F = n(427262),
    V = n(251913),
    B = n(632638),
    H = n(682449),
    j = n(490581),
    Y = n(168984),
    W = n(836308),
    K = n(632721),
    $ = n(335425),
    z = n(808574),
    q = n(818348),
    Z = n(985018),
    X = n(691189),
    Q = n(801753);
let J = new v.A("AddPaymentStep.tsx"),
    ee = { name: "", cardNumber: "", expirationDate: "", cvc: "" },
    et = { email: "", name: "", country: "", line1: "", line2: "", city: "", postalCode: "", state: "" };
function en(e) {
    let { onCardInfoChange: t } = e,
        n = (0, a.bG)([P.A], () => P.A.error);
    return (0, r.jsx)(p.A, { billingError: n, onCardInfoChange: t });
}
function er() {
    return (0, r.jsx)(d.A, {});
}
function ei() {
    return (0, r.jsx)(_.A, {});
}
function es() {
    return (0, r.jsx)(Y.A, {});
}
function ea() {
    let e = (0, a.bG)([M.A], () => M.A.isBusy),
        t = (0, a.bG)([P.A], () => P.A.stripePaymentMethod);
    return (0, r.jsx)(h.y, { stripePaymentMethod: t, submitting: e });
}
function eo() {
    return (0, r.jsx)(f.N, {});
}
function el(e) {
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
            usePaymentModalStep: V = !1,
            isEligibleForTrial: Y = !1,
            allowDesktopRedirectPurchase: ee = !1,
            toastContent: et,
            continueSessionToInitialStep: el,
            overwriteSubscriptionPaymentSource: eu = !1,
            shouldUseManaModal: ec = !0,
        } = e,
        { stripe: ed, contextMetadata: e_, activitySessionId: ef, paymentElementsEnabled: ep } = (0, N.P5)(),
        eh = (0, D.l)(),
        em = i.useMemo(() => {
            let e = c === C.pn.PAYMENT_TYPE || c === C.pn.PAYMENT_ELEMENT;
            return ep && e ? (ee ? C.pn.AWAITING_BROWSER_CHECKOUT : C.pn.PAYMENT_ELEMENT) : c;
        }, [ep, c, ee]),
        eE = i.useMemo(() => (0, F.Gn)(), []),
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
        } = (0, K.kh)({ prependSteps: d, appendSteps: _, paymentElementsEnabled: ep });
    function eO(e) {
        switch (e) {
            case C.pn.CREDIT_CARD_INFORMATION:
                return eg;
            case C.pn.CASH_APP_INFORMATION:
                return eC;
            default:
                return { steps: [C.pn.ADD_PAYMENT_STEPS] };
        }
    }
    let [eb, eD] = i.useState(em),
        [eL, ew] = i.useState(null),
        [eM, eP] = i.useState(eO(em));
    i.useEffect(() => {
        (0, E.IV)();
    }, []);
    let ex = (0, a.bG)([P.A], () => P.A.redirectedPaymentSourceId),
        ek = (0, a.bG)([j.A], () => j.A.cashAppPayComponent),
        eU = { completeSteps: e9, setIsSubmittingCurrentStep: l.setIsSubmittingCurrentStep },
        eG = i.useRef(eU);
    i.useEffect(() => {
        eG.current = eU;
    }),
        i.useEffect(() => {
            let { completeSteps: e, setIsSubmittingCurrentStep: t } = eG.current;
            (async () => {
                if (null == ex) return;
                await (0, E.$o)();
                let n = k.A.getPaymentSource(ex);
                null != n && (e(n), t(!1), P.A.clearRedirectedPaymentSourceId());
            })();
        }, [ex]);
    let eF = i.useCallback(
        function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            ew(null), eD(e), t && h({ currentStep: eb, toStep: e });
        },
        [eb, h],
    );
    function eV(e) {
        (0, o.showToast)(
            (0, o.createToast)(void 0 !== et ? et : Z.intl.string(Z.t["VJPg+l"]), o.ToastType.SUCCESS, {
                position: o.ToastPosition.BOTTOM,
            }),
        ),
            p(eb, e),
            eF(em, !1);
    }
    let [eB, eH] = i.useState(null),
        {
            setPaymentSourceId: ej,
            creditCardState: eY,
            setCreditCardState: eW,
            setTokenState: eK,
            isSubmittingCurrentStep: e$,
            billingAddressState: ez,
            setBillingAddressState: eq,
            setIsSubmittingCurrentStep: eZ,
            braintreeEmail: eX,
            braintreeNonce: eQ,
            venmoUsername: eJ,
            adyenPaymentData: e0,
            epsBankState: e1,
            setEpsBankState: e2,
            p24BankState: e3,
            setP24BankState: e6,
            selectedSkuId: e4,
        } = l,
        e5 = e4 ?? "",
        e7 = (0, a.bG)([G.A], () => G.A.get(e5), [e5]),
        e8 = e7?.eligiblePaymentGateways?.map((e) => e.valueOf());
    function e9(e) {
        ej(e.id), eV(e);
    }
    let te = () => {
            eP(ey), eF(C.pn.PAYMENT_TYPE);
        },
        tt = (0, S.wD)({
            step: eb,
            continueSessionToInitialStep: el,
            paymentElementsEnabled: ep,
            handleStepChange: eF,
            logger: J,
            shouldLogOnChangeEvents: eE || !1,
            onBillingAddressChange: (e, t) => {
                eq({ info: { ...ez.info, ...e }, isValid: t });
            },
        }),
        {
            shouldRenderPaymentElement: tn,
            paymentElementReady: tr,
            paymentElementSelectedType: ti,
            returnToPaymentElementStep: ts,
            onBackFromPaymentElement: ta,
            combinedStripeElementsRef: to,
            stripePaymentElementProps: tl,
            stripeAddressElementProps: tu,
            remountAddressElement: tc,
            addressElementKey: td,
        } = tt,
        t_ = i.useCallback(() => {
            eF(C.pn.ADDRESS), ep && S.Ky.includes(eb) && tc();
        }, [eF, ep, tc, eb]),
        tf = i.useCallback(
            (e) => {
                ep && null != ti && (0, A.PE)(e) ? ts(e) : eF(C.pn.PAYMENT_TYPE);
            },
            [ep, ti, ts, eF],
        ),
        tp = V ? (0, r.jsx)(w.A, { className: Q._8 }) : null,
        th = (0, W.zg)();
    switch (eb) {
        case C.pn.ATTEMPT_GOOGLE_PAY:
        case C.pn.ATTEMPT_APPLE_PAY:
        case C.pn.PAYMENT_TYPE:
            let tm = {
                CREDIT_CARD_STEPS: eg,
                PAYPAL_STEPS: eA,
                VENMO_STEPS: eS,
                PAYMENT_REQUEST_STEPS: eT,
                PRZELEWY24_STEPS: ev,
                EPS_STEPS: eN,
                IDEAL_STEPS: eI,
                CASH_APP_STEPS: eC,
            };
            (t = (0, r.jsx)(W.ZL, {
                prependSteps: d,
                appendSteps: _,
                analyticsLocation: x,
                isEligibleForTrial: Y,
                allowDesktopRedirectPurchase: ee,
                onPaymentRequestSourceFailed: te,
                paymentModalArgs: l,
                handleStepChange: eF,
                setPaymentMethodSteps: eP,
                setPaymentRequestPaymentMethod: eH,
                currentStep: eb,
                setInfoNotice: ew,
                completeSteps: e9,
                paymentSourceTypeRestrictions: e8,
                ...tm,
                ...th,
            })),
                (n = (0, r.jsx)(W.GJ, {
                    shouldUseManaModal: ec,
                    onReturn: f,
                    handleStepChange: eF,
                    currentStep: eb,
                    ...th,
                }));
            break;
        case C.pn.PAYMENT_ELEMENT:
            if (!ep) throw (0, E.ne)("Payment Elements not enabled, invalid step", !0);
            (t = null),
                (n = (0, r.jsx)(z.w, {
                    handleStepChange: eF,
                    shouldUseManaModal: ec,
                    setPaymentMethodSteps: eP,
                    primarySubmitting: e$,
                    primaryDisabled: !tr,
                    onBack: () => {
                        ta(), f?.();
                    },
                    paymentModalArgs: l,
                    PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: eR,
                    ...tt,
                }));
            break;
        case C.pn.CREDIT_CARD_INFORMATION:
            let tE = async (e) => {
                eZ(!0);
                try {
                    let t = await (0, E.YJ)(ed, e);
                    eK({ token: t }), eF(C.pn.ADDRESS);
                } catch (e) {
                    J.error(e.message ?? JSON.stringify(e));
                } finally {
                    eZ(!1);
                }
            };
            t = (0, r.jsx)(en, {
                onCardInfoChange: (e, t) => {
                    eW({ info: e, isValid: t }), eq((t) => ({ ...t, info: { ...t.info, name: e.name } }));
                },
            });
            let tg = !eY.isValid,
                tA = () => {
                    eF(C.pn.PAYMENT_TYPE);
                };
            n = (0, r.jsx)(s.ElementsConsumer, {
                children: (e) => {
                    let { elements: t } = e;
                    return (0, r.jsx)(W.uv, {
                        onBack: tA,
                        primaryCTA: O.Ay.CTAType.CONTINUE,
                        primaryType: "submit",
                        primaryText: Z.intl.string(Z.t.PDTjLN),
                        primarySubmitting: e$,
                        primaryDisabled: tg,
                        onPrimary: () => tE(t),
                        shouldUseManaModal: ec,
                    });
                },
            });
            break;
        case C.pn.AWAITING_BROWSER_CHECKOUT:
        case C.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
        case C.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
            let tI = () => {
                    eP(eg), eF(ep ? C.pn.PAYMENT_ELEMENT : C.pn.CREDIT_CARD_INFORMATION);
                },
                tT = () => {
                    ep ? (ta(), f?.()) : (eP(ey), eF(C.pn.PAYMENT_TYPE));
                };
            (t = (0, r.jsx)(L.t, { step: eb, onPurchaseComplete: () => p(eb), onHandoffFailure: tI })),
                (n = (0, r.jsx)(L.q, { onPrimaryClick: tI, onBackClick: tT }));
            break;
        case C.pn.EPS_INFORMATION:
            (t = (0, r.jsx)(T.A, {
                type: q.he.EPS,
                onAccountHolderNameChange: (e) => eq({ info: { ...ez.info, name: e }, isValid: ez.isValid }),
                onEPSBankChange: (e) => e2(e),
                epsBankValue: e1,
                billingAddressInfo: ez.info,
            })),
                (n = (0, r.jsx)(W.uv, {
                    onBack: () => tf(q.he.EPS),
                    primaryCTA: O.Ay.CTAType.CONTINUE,
                    primaryText: Z.intl.string(Z.t.PDTjLN),
                    primaryDisabled: void 0 === e1 || "" === e1 || "" === ez.info.name,
                    onPrimary: () => t_(),
                    shouldUseManaModal: ec,
                }));
            break;
        case C.pn.IDEAL_INFORMATION:
            (t = (0, r.jsx)(I.A, {
                type: q.he.IDEAL,
                onAccountHolderNameChange: (e) => eq({ info: { ...ez.info, name: e }, isValid: ez.isValid }),
                billingAddressInfo: ez.info,
            })),
                (n = (0, r.jsx)(W.uv, {
                    onBack: () => eF(C.pn.PAYMENT_TYPE),
                    primaryCTA: O.Ay.CTAType.CONTINUE,
                    primaryText: Z.intl.string(Z.t.PDTjLN),
                    primaryDisabled: "" === ez.info.name,
                    onPrimary: () => t_(),
                    shouldUseManaModal: ec,
                }));
            break;
        case C.pn.PRZELEWY24_INFORMATION:
            (t = (0, r.jsx)(T.A, {
                type: q.he.PRZELEWY24,
                onNameChange: (e) => eq({ info: { ...ez.info, name: e }, isValid: ez.isValid }),
                onEmailChange: (e) => eq({ info: { ...ez.info, email: e }, isValid: ez.isValid }),
                onP24BankChange: (e) => {
                    e6(e);
                },
                p24BankValue: e3,
                billingAddressInfo: ez.info,
            })),
                (n = (0, r.jsx)(W.uv, {
                    onBack: () => tf(q.he.PRZELEWY24),
                    primaryCTA: O.Ay.CTAType.CONTINUE,
                    primaryText: Z.intl.string(Z.t.PDTjLN),
                    primaryDisabled:
                        void 0 === ez.info.name ||
                        "" === ez.info.name ||
                        void 0 === ez.info.email ||
                        "" === ez.info.email ||
                        void 0 === e3 ||
                        "" === e3,
                    onPrimary: () => t_(),
                    shouldUseManaModal: ec,
                }));
            break;
        case C.pn.PAYPAL_INFORMATION:
            let tS = 0 !== eX.length && null != eQ;
            (t = (0, r.jsx)(er, {})),
                (n = (0, r.jsx)(W.uv, {
                    onBack: () => tf(q.he.PAYPAL),
                    primaryCTA: O.Ay.CTAType.CONTINUE,
                    primaryText: tS ? Z.intl.string(Z.t.PDTjLN) : Z.intl.string(Z.t.Djzd7L),
                    onPrimary: () => (tS ? t_() : (0, u.$e)()),
                    shouldUseManaModal: ec,
                }));
            break;
        case C.pn.VENMO_INFORMATION:
            let ty = 0 !== eJ.length && null != eQ;
            (t = (0, r.jsx)(ei, {})),
                (n = (0, r.jsx)(W.uv, {
                    onBack: () => tf(q.he.VENMO),
                    primaryCTA: O.Ay.CTAType.CONTINUE,
                    primaryText: ty ? Z.intl.string(Z.t.PDTjLN) : Z.intl.string(Z.t["4KoTLM"]),
                    onPrimary: () => (ty ? t_() : (0, u.jR)()),
                    shouldUseManaModal: ec,
                }));
            break;
        case C.pn.PAYMENT_REQUEST_INFORMATION:
            (t = (0, r.jsx)(ea, {})),
                (n = (0, r.jsx)(W.uv, { onBack: () => eF(C.pn.PAYMENT_TYPE), shouldUseManaModal: ec }));
            break;
        case C.pn.CASH_APP_INFORMATION:
            let tv = null != e0,
                tN = null != ek;
            (t = (0, r.jsx)(es, {})),
                (n = (0, r.jsx)(W.uv, {
                    onBack: () => tf(q.he.CASH_APP),
                    primaryCTA: O.Ay.CTAType.CONTINUE,
                    primaryText: tv ? Z.intl.string(Z.t.PDTjLN) : Z.intl.string(Z.t["9ALP8w"]),
                    onPrimary: () => (tv ? t_() : (0, H.uy)()),
                    primaryDisabled: !tN,
                    shouldUseManaModal: ec,
                }));
            break;
        case C.pn.ADDRESS:
            let tC = ep && null != ti;
            (t = (0, r.jsx)($.Ej, {
                paymentModalArgs: l,
                paymentSourceType: eM.methodType ?? q.he.CARD,
                shouldUsePaymentElement: tC,
            })),
                (n = (0, r.jsx)($.bC, {
                    paymentModalArgs: l,
                    shouldUseManaModal: ec,
                    analyticsLocation: x,
                    overwriteSubscriptionPaymentSource: eu,
                    handleStepChange: eF,
                    onPaymentRequestSourceFailed: te,
                    paymentRequestPaymentMethod: eB,
                    completeSteps: e9,
                    paymentMethodSteps: eM,
                    shouldUsePaymentElement: tC,
                    ...tt,
                }));
            break;
        case C.pn.AWAITING_AUTHENTICATION:
            t = (0, r.jsx)(eo, {});
            break;
        default:
            throw Error(`Unexpected step: ${eb}`);
    }
    let tR = ep && tn,
        tO = tR ? "combined_stripe_elements" : void 0,
        tb = (0, r.jsxs)(o.YC2, {
            className: X.C9,
            staticClassName: X.a2,
            animatedNodeClassName: X.L2,
            fillParent: !0,
            overrideKey: tO,
            step: eb,
            steps: eM.steps,
            sideMargin: 20,
            children: [
                null != eL &&
                    (0, r.jsx)("div", { className: Q.Ns, children: (0, r.jsx)(o.wx6, { type: "info", children: eL }) }),
                tR &&
                    (0, r.jsx)(S.e4, {
                        step: eb,
                        analyticsContext:
                            null != M ? { activitySessionId: ef, contextMetadata: e_, analyticsData: M } : void 0,
                        paymentElementSelectedType: ti,
                        elementsRef: to,
                        stripePaymentElementProps: tl,
                        stripeAddressElementProps: tu,
                        addressElementKey: td,
                        billingAddressInfo: ez.info,
                        onSetupError: () => {
                            ta(), eF(C.pn.PAYMENT_TYPE);
                        },
                        paymentElementFooter: (0, r.jsx)(y.Z4, {
                            className: Q.SO,
                            stackingBehavior: "stack",
                            onComplete: () => {
                                setTimeout(() => eh(C.pn.REVIEW), 0);
                            },
                        }),
                    }),
                t,
            ],
        }),
        tD = eb === C.pn.PAYMENT_TYPE && 0 === d.length ? null : n;
    return V
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  Y && (0, r.jsx)(R.A, { className: Q.At, isEligibleForTrial: Y }),
                  (0, r.jsxs)(b.dZ, { children: [tp, tb] }),
                  (0, r.jsx)(b.UX, { children: tD }),
              ],
          })
        : (0, r.jsx)(B.A, {
              shouldUseManaModal: ec,
              steps: m ?? eM.steps,
              currentStep: g ?? eb,
              overrideKey: tO,
              paymentError: l.paymentError,
              header: v,
              hideBreadcrumbs: U,
              body: tb,
              footer: tD,
          });
}
function eu(e) {
    let {
            defaultPaymentSourceId: t,
            paymentSources: n,
            hasFetchedPaymentSources: r,
        } = (0, a.cf)([k.A], () => ({
            defaultPaymentSourceId: void 0 !== e ? e : k.A.defaultPaymentSourceId,
            paymentSources: k.A.paymentSources,
            hasFetchedPaymentSources: k.A.hasFetchedPaymentSources,
        })),
        s = (0, a.bG)([j.A], () => j.A.cashAppPayComponent),
        o = (0, a.bG)([g.A], () => g.A.data?.allowed_payment_source_types ?? null);
    (0, m.Ay)(() => {
        (0, u.UU)(), r || (0, E.$o)();
    }),
        i.useEffect(() => {
            null == s && null != o && o.includes(q.he.CASH_APP) && (0, H.UU)();
        }, [o, s]);
    let [d, _] = i.useState(t);
    null != t && null == d && _(t);
    let [f, p] = i.useState(() => ({ info: ee, isValid: !1 })),
        [h, A] = i.useState(() => ({ info: et, isValid: !1 })),
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
        [F, B] = i.useState(!1),
        [Y, W] = i.useState(null),
        K = i.useRef(null),
        $ = (0, a.bG)([x.A], () => x.A.isAwaitingAuthentication),
        [z, Z] = (0, a.yK)([U.A], () => [U.A.purchaseTokenAuthState, U.A.purchaseTokenHash]);
    return (
        i.useEffect(() => {
            null != Y && null != K.current && K.current.scrollIntoView({ behavior: "smooth" });
        }, [Y]),
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
            setHasRedirectURL: B,
            braintreeEmail: C,
            braintreeNonce: R,
            venmoUsername: b,
            adyenPaymentData: D,
            paymentError: null != L ? L : O,
            paymentAuthenticationState: w ? V.oc.PENDING : null != L ? V.oc.ERROR : V.oc.NONE,
            purchaseError: Y,
            setPurchaseError: W,
            purchaseErrorBlockRef: K,
            isAuthenticating: $,
            purchaseTokenAuthState: z,
            purchaseTokenHash: Z,
            epsBankState: S,
            setEpsBankState: y,
            p24BankState: I,
            setP24BankState: T,
        }
    );
}
