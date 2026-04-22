n.d(t, { Y: () => eh, _V: () => eA });
var l = n(627968),
    i = n(64700),
    a = n(342393);
n(284009);
var r = n(311907),
    s = n(691540),
    o = n(857250),
    u = n(97483),
    c = n(685094),
    d = n(683071),
    p = n(73153),
    m = n(493405),
    h = n(391048),
    A = n(15373),
    _ = n(229403),
    C = n(891197),
    E = n(202626),
    y = n(893234),
    f = n(964486),
    P = n(323082),
    S = n(721101),
    x = n(648335),
    T = n(6332),
    N = n(182533),
    g = n(211528),
    I = n(93159),
    v = n(626584),
    b = n(156312),
    R = n(166532),
    M = n(69494),
    j = n(19311),
    L = n(482132),
    O = n(615310),
    D = n(617745),
    U = n(921925),
    w = n(615405),
    k = n(825755),
    F = n(153084),
    G = n(295405),
    B = n(293700),
    Y = n(67480),
    W = n(954571),
    V = n(427262),
    H = n(251913),
    K = n(632638),
    Z = n(682449),
    q = n(490581),
    z = n(168984),
    $ = n(836308),
    X = n(632721),
    J = n(335425),
    Q = n(808574),
    ee = n(652215),
    et = n(818348),
    en = n(985018),
    el = n(691189),
    ei = n(801753);
let ea = new v.A("AddPaymentStep.tsx"),
    er = { name: "", cardNumber: "", expirationDate: "", cvc: "" },
    es = { email: "", name: "", country: "", line1: "", line2: "", city: "", postalCode: "", state: "" };
function eo(e) {
    let { onCardInfoChange: t } = e,
        n = (0, r.bG)([k.A], () => k.A.error);
    return (0, l.jsx)(E.A, { billingError: n, onCardInfoChange: t });
}
function eu() {
    return (0, l.jsx)(A.A, {});
}
function ec() {
    return (0, l.jsx)(_.A, {});
}
function ed() {
    return (0, l.jsx)(z.A, {});
}
function ep() {
    let e = (0, r.bG)([w.A], () => w.A.isBusy),
        t = (0, r.bG)([k.A], () => k.A.stripePaymentMethod);
    return (0, l.jsx)(y.y, { stripePaymentMethod: t, submitting: e });
}
function em() {
    return (0, l.jsx)(C.N, {});
}
function eh(e) {
    let t,
        n,
        {
            paymentModalArgs: p,
            initialStep: h,
            prependSteps: A,
            appendSteps: _,
            onReturn: C,
            onComplete: E,
            onStepChange: y,
            breadcrumpSteps: f,
            currentBreadcrumpStep: S,
            header: v,
            analyticsData: w,
            analyticsLocation: F,
            hideBreadcrumbs: B = !1,
            usePaymentModalStep: H = !1,
            isEligibleForTrial: z = !1,
            allowDesktopRedirectPurchase: er = !1,
            toastContent: es,
            continueSessionToInitialStep: eh,
            overwriteSubscriptionPaymentSource: eA = !1,
            shouldUseManaModal: e_ = !0,
        } = e,
        { stripe: eC, contextMetadata: eE, activitySessionId: ey, paymentElementsEnabled: ef } = (0, b.P5)(),
        eP = (0, O.l)(),
        eS = i.useMemo(() => {
            let e = h === R.pn.PAYMENT_TYPE || h === R.pn.PAYMENT_ELEMENT;
            return ef && e ? (er ? R.pn.AWAITING_BROWSER_CHECKOUT : R.pn.PAYMENT_ELEMENT) : h;
        }, [ef, h, er]),
        ex = i.useMemo(() => (0, V.Gn)(), []),
        {
            CREDIT_CARD_STEPS: eT,
            PAYPAL_STEPS: eN,
            IDEAL_STEPS: eg,
            PAYMENT_REQUEST_STEPS: eI,
            VENMO_STEPS: ev,
            ADD_PAYMENT_STEPS: eb,
            PRZELEWY24_STEPS: eR,
            EPS_STEPS: eM,
            CASH_APP_STEPS: ej,
            PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: eL,
        } = (0, X.kh)({ prependSteps: A, appendSteps: _, paymentElementsEnabled: ef }),
        [eO, eD] = i.useState(eS),
        [eU, ew] = i.useState(null),
        [ek, eF] = i.useState(
            (function (e) {
                switch (e) {
                    case R.pn.CREDIT_CARD_INFORMATION:
                        return eT;
                    case R.pn.CASH_APP_INFORMATION:
                        return ej;
                    default:
                        return { steps: [R.pn.ADD_PAYMENT_STEPS] };
                }
            })(eS),
        );
    i.useEffect(() => {
        (0, P.IV)();
    }, []);
    let eG = (0, r.bG)([k.A], () => k.A.redirectedPaymentSourceId),
        eB = (0, r.bG)([q.A], () => q.A.cashAppPayComponent),
        eY = { completeSteps: ts, setIsSubmittingCurrentStep: p.setIsSubmittingCurrentStep },
        eW = i.useRef(eY);
    i.useEffect(() => {
        eW.current = eY;
    }),
        i.useEffect(() => {
            let { completeSteps: e, setIsSubmittingCurrentStep: t } = eW.current;
            (async () => {
                if (null == eG) return;
                await (0, P.$o)();
                let n = G.A.getPaymentSource(eG);
                null != n && (e(n), t(!1), k.A.clearRedirectedPaymentSourceId());
            })();
        }, [eG]);
    let eV = i.useCallback(
            function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                ew(null), eD(e), t && y({ currentStep: eO, toStep: e });
            },
            [eO, y],
        ),
        eH = i.useCallback(
            (e) => {
                W.default.track(ee.HAw.PAYMENT_FLOW_ADD_SOURCE_COMPLETED, {
                    load_id: eE.loadId,
                    analytics_location: F,
                    payment_source_id: e.id,
                    payment_source_type: e.type,
                    payment_source_country: e.paymentMethodCountry,
                });
            },
            [eE.loadId, F],
        ),
        eK = (0, r.bG)([k.A], () => k.A.error),
        eZ = i.useRef(eK);
    i.useEffect(() => {
        let e = eZ.current;
        (eZ.current = eK),
            null != eK &&
                eK !== e &&
                W.default.track(ee.HAw.PAYMENT_FLOW_ADD_SOURCE_ERROR, {
                    load_id: eE.loadId,
                    analytics_location: F,
                    payment_source_type: ek.methodType,
                    error_code: eK.code,
                    error_message: eK.message,
                });
    }, [eK, eE.loadId, F, ek.methodType]);
    let eq = i.useCallback(
            (e) => {
                eH(e),
                    (0, s.P0)(
                        (0, o.o)(void 0 !== es ? es : en.intl.string(en.t["VJPg+l"]), u.Ck.SUCCESS, {
                            position: u.xJ.BOTTOM,
                        }),
                    ),
                    E(eO, e),
                    eV(eS, !1);
            },
            [eV, eS, eO, E, es, eH],
        ),
        [ez, e$] = i.useState(null),
        {
            setPaymentSourceId: eX,
            creditCardState: eJ,
            setCreditCardState: eQ,
            setTokenState: e0,
            isSubmittingCurrentStep: e2,
            billingAddressState: e3,
            setBillingAddressState: e1,
            setIsSubmittingCurrentStep: e4,
            braintreeEmail: e7,
            braintreeNonce: e6,
            venmoUsername: e5,
            adyenPaymentData: e8,
            epsBankState: e9,
            setEpsBankState: te,
            p24BankState: tt,
            setP24BankState: tn,
            selectedSkuId: tl,
        } = p,
        ti = tl ?? "",
        ta = (0, r.bG)([Y.A], () => Y.A.get(ti), [ti]),
        tr = ta?.eligiblePaymentGateways?.map((e) => e.valueOf());
    function ts(e) {
        eX(e.id), eq(e);
    }
    let to = () => {
            eF(eb), eV(R.pn.PAYMENT_TYPE);
        },
        tu = (0, g.wD)({
            step: eO,
            continueSessionToInitialStep: eh,
            paymentElementsEnabled: ef,
            handleStepChange: eV,
            logger: ea,
            shouldLogOnChangeEvents: ex || !1,
            onBillingAddressChange: (e, t) => {
                e1({ info: { ...e3.info, ...e }, isValid: t });
            },
        }),
        {
            shouldRenderPaymentElement: tc,
            paymentElementReady: td,
            paymentElementSelectedType: tp,
            returnToPaymentElementStep: tm,
            onBackFromPaymentElement: th,
            combinedStripeElementsRef: tA,
            stripePaymentElementProps: t_,
            stripeAddressElementProps: tC,
            remountAddressElement: tE,
            addressElementKey: ty,
        } = tu,
        tf = i.useCallback(() => {
            eV(R.pn.ADDRESS), ef && g.Ky.includes(eO) && tE();
        }, [eV, ef, tE, eO]),
        tP = i.useCallback(
            (e) => {
                ef && null != tp && (0, x.PE)(e) ? tm(e) : eV(R.pn.PAYMENT_TYPE);
            },
            [ef, tp, tm, eV],
        ),
        tS = H ? (0, l.jsx)(U.A, { className: ei._8 }) : null,
        tx = (0, $.zg)();
    switch (eO) {
        case R.pn.ATTEMPT_GOOGLE_PAY:
        case R.pn.ATTEMPT_APPLE_PAY:
        case R.pn.PAYMENT_TYPE:
            (t = (0, l.jsx)($.ZL, {
                prependSteps: A,
                appendSteps: _,
                analyticsLocation: F,
                isEligibleForTrial: z,
                allowDesktopRedirectPurchase: er,
                onPaymentRequestSourceFailed: to,
                paymentModalArgs: p,
                handleStepChange: eV,
                setPaymentMethodSteps: eF,
                setPaymentRequestPaymentMethod: e$,
                currentStep: eO,
                setInfoNotice: ew,
                completeSteps: ts,
                paymentSourceTypeRestrictions: tr,
                CREDIT_CARD_STEPS: eT,
                PAYPAL_STEPS: eN,
                VENMO_STEPS: ev,
                PAYMENT_REQUEST_STEPS: eI,
                PRZELEWY24_STEPS: eR,
                EPS_STEPS: eM,
                IDEAL_STEPS: eg,
                CASH_APP_STEPS: ej,
                ...tx,
            })),
                (n = (0, l.jsx)($.GJ, {
                    shouldUseManaModal: e_,
                    onReturn: C,
                    handleStepChange: eV,
                    currentStep: eO,
                    ...tx,
                }));
            break;
        case R.pn.PAYMENT_ELEMENT:
            if (!ef) throw (0, P.ne)("Payment Elements not enabled, invalid step", !0);
            (t = null),
                (n = (0, l.jsx)(Q.w, {
                    handleStepChange: eV,
                    shouldUseManaModal: e_,
                    setPaymentMethodSteps: eF,
                    primarySubmitting: e2,
                    primaryDisabled: !td,
                    onBack: () => {
                        th(), C?.();
                    },
                    paymentModalArgs: p,
                    PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: eL,
                    ...tu,
                }));
            break;
        case R.pn.CREDIT_CARD_INFORMATION:
            let tT = async (e) => {
                e4(!0);
                try {
                    let t = await (0, P.YJ)(eC, e);
                    e0({ token: t }), eV(R.pn.ADDRESS);
                } catch (e) {
                    ea.error(e.message ?? JSON.stringify(e));
                } finally {
                    e4(!1);
                }
            };
            t = (0, l.jsx)(eo, {
                onCardInfoChange: (e, t) => {
                    eQ({ info: e, isValid: t }), e1((t) => ({ ...t, info: { ...t.info, name: e.name } }));
                },
            });
            let tN = !eJ.isValid,
                tg = () => {
                    eV(R.pn.PAYMENT_TYPE);
                };
            n = (0, l.jsx)(a.ElementsConsumer, {
                children: (e) => {
                    let { elements: t } = e;
                    return (0, l.jsx)($.uv, {
                        onBack: tg,
                        primaryCTA: j.Ay.CTAType.CONTINUE,
                        primaryType: "submit",
                        primaryText: en.intl.string(en.t.PDTjLN),
                        primarySubmitting: e2,
                        primaryDisabled: tN,
                        onPrimary: () => tT(t),
                        shouldUseManaModal: e_,
                    });
                },
            });
            break;
        case R.pn.AWAITING_BROWSER_CHECKOUT:
        case R.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
        case R.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
            let tI = () => {
                eF(eT), eV(ef ? R.pn.PAYMENT_ELEMENT : R.pn.CREDIT_CARD_INFORMATION);
            };
            (t = (0, l.jsx)(D.t, { step: eO, onPurchaseComplete: () => E(eO), onHandoffFailure: tI })),
                (n = (0, l.jsx)(D.q, {
                    onPrimaryClick: tI,
                    onBackClick: () => {
                        ef ? (th(), C?.()) : (eF(eb), eV(R.pn.PAYMENT_TYPE));
                    },
                }));
            break;
        case R.pn.EPS_INFORMATION:
            (t = (0, l.jsx)(N.A, {
                type: et.he.EPS,
                onAccountHolderNameChange: (e) => e1({ info: { ...e3.info, name: e }, isValid: e3.isValid }),
                onEPSBankChange: (e) => te(e),
                epsBankValue: e9,
                billingAddressInfo: e3.info,
            })),
                (n = (0, l.jsx)($.uv, {
                    onBack: () => tP(et.he.EPS),
                    primaryCTA: j.Ay.CTAType.CONTINUE,
                    primaryText: en.intl.string(en.t.PDTjLN),
                    primaryDisabled: void 0 === e9 || "" === e9 || "" === e3.info.name,
                    onPrimary: () => tf(),
                    shouldUseManaModal: e_,
                }));
            break;
        case R.pn.IDEAL_INFORMATION:
            (t = (0, l.jsx)(T.A, {
                type: et.he.IDEAL,
                onAccountHolderNameChange: (e) => e1({ info: { ...e3.info, name: e }, isValid: e3.isValid }),
                billingAddressInfo: e3.info,
            })),
                (n = (0, l.jsx)($.uv, {
                    onBack: () => eV(R.pn.PAYMENT_TYPE),
                    primaryCTA: j.Ay.CTAType.CONTINUE,
                    primaryText: en.intl.string(en.t.PDTjLN),
                    primaryDisabled: "" === e3.info.name,
                    onPrimary: () => tf(),
                    shouldUseManaModal: e_,
                }));
            break;
        case R.pn.PRZELEWY24_INFORMATION:
            (t = (0, l.jsx)(N.A, {
                type: et.he.PRZELEWY24,
                onNameChange: (e) => e1({ info: { ...e3.info, name: e }, isValid: e3.isValid }),
                onEmailChange: (e) => e1({ info: { ...e3.info, email: e }, isValid: e3.isValid }),
                onP24BankChange: (e) => {
                    tn(e);
                },
                p24BankValue: tt,
                billingAddressInfo: e3.info,
            })),
                (n = (0, l.jsx)($.uv, {
                    onBack: () => tP(et.he.PRZELEWY24),
                    primaryCTA: j.Ay.CTAType.CONTINUE,
                    primaryText: en.intl.string(en.t.PDTjLN),
                    primaryDisabled:
                        void 0 === e3.info.name ||
                        "" === e3.info.name ||
                        void 0 === e3.info.email ||
                        "" === e3.info.email ||
                        void 0 === tt ||
                        "" === tt,
                    onPrimary: () => tf(),
                    shouldUseManaModal: e_,
                }));
            break;
        case R.pn.PAYPAL_INFORMATION:
            let tv = 0 !== e7.length && null != e6;
            (t = (0, l.jsx)(eu, {})),
                (n = (0, l.jsx)($.uv, {
                    onBack: () => tP(et.he.PAYPAL),
                    primaryCTA: j.Ay.CTAType.CONTINUE,
                    primaryText: tv ? en.intl.string(en.t.PDTjLN) : en.intl.string(en.t.Djzd7L),
                    onPrimary: () => (tv ? tf() : (0, m.$e)()),
                    shouldUseManaModal: e_,
                }));
            break;
        case R.pn.VENMO_INFORMATION:
            let tb = 0 !== e5.length && null != e6;
            (t = (0, l.jsx)(ec, {})),
                (n = (0, l.jsx)($.uv, {
                    onBack: () => tP(et.he.VENMO),
                    primaryCTA: j.Ay.CTAType.CONTINUE,
                    primaryText: tb ? en.intl.string(en.t.PDTjLN) : en.intl.string(en.t["4KoTLM"]),
                    onPrimary: () => (tb ? tf() : (0, m.jR)()),
                    shouldUseManaModal: e_,
                }));
            break;
        case R.pn.PAYMENT_REQUEST_INFORMATION:
            (t = (0, l.jsx)(ep, {})),
                (n = (0, l.jsx)($.uv, { onBack: () => eV(R.pn.PAYMENT_TYPE), shouldUseManaModal: e_ }));
            break;
        case R.pn.CASH_APP_INFORMATION:
            let tR = null != e8;
            (t = (0, l.jsx)(ed, {})),
                (n = (0, l.jsx)($.uv, {
                    onBack: () => tP(et.he.CASH_APP),
                    primaryCTA: j.Ay.CTAType.CONTINUE,
                    primaryText: tR ? en.intl.string(en.t.PDTjLN) : en.intl.string(en.t["9ALP8w"]),
                    onPrimary: () => (tR ? tf() : (0, Z.uy)()),
                    primaryDisabled: null == eB,
                    shouldUseManaModal: e_,
                }));
            break;
        case R.pn.ADDRESS:
            let tM = ef && null != tp;
            (t = (0, l.jsx)(J.Ej, {
                paymentModalArgs: p,
                paymentSourceType: ek.methodType ?? et.he.CARD,
                shouldUsePaymentElement: tM,
            })),
                (n = (0, l.jsx)(J.bC, {
                    paymentModalArgs: p,
                    shouldUseManaModal: e_,
                    analyticsLocation: F,
                    overwriteSubscriptionPaymentSource: eA,
                    handleStepChange: eV,
                    onPaymentRequestSourceFailed: to,
                    paymentRequestPaymentMethod: ez,
                    completeSteps: ts,
                    paymentMethodSteps: ek,
                    shouldUsePaymentElement: tM,
                    ...tu,
                }));
            break;
        case R.pn.AWAITING_AUTHENTICATION:
            t = (0, l.jsx)(em, {});
            break;
        default:
            throw Error(`Unexpected step: ${eO}`);
    }
    let tj = ef && tc,
        tL = tj ? "combined_stripe_elements" : void 0,
        tO = (0, l.jsxs)(c.Y, {
            className: el.C9,
            staticClassName: el.a2,
            animatedNodeClassName: el.L2,
            fillParent: !0,
            overrideKey: tL,
            step: eO,
            steps: ek.steps,
            sideMargin: 20,
            children: [
                null != eU &&
                    (0, l.jsx)("div", { className: ei.Ns, children: (0, l.jsx)(d.w, { type: "info", children: eU }) }),
                tj &&
                    (0, l.jsx)(g.e4, {
                        step: eO,
                        analyticsContext:
                            null != w ? { activitySessionId: ey, contextMetadata: eE, analyticsData: w } : void 0,
                        paymentElementSelectedType: tp,
                        elementsRef: tA,
                        stripePaymentElementProps: t_,
                        stripeAddressElementProps: tC,
                        addressElementKey: ty,
                        billingAddressInfo: e3.info,
                        onSetupError: () => {
                            th(), eV(R.pn.PAYMENT_TYPE);
                        },
                        paymentElementFooter: (0, l.jsx)(I.Z4, {
                            className: ei.SO,
                            stackingBehavior: "stack",
                            onComplete: () => {
                                setTimeout(() => eP(R.pn.REVIEW), 0);
                            },
                        }),
                    }),
                t,
            ],
        }),
        tD = eO === R.pn.PAYMENT_TYPE && 0 === A.length ? null : n;
    return H
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  z && (0, l.jsx)(M.A, { className: ei.At, isEligibleForTrial: z }),
                  (0, l.jsxs)(L.dZ, { children: [tS, tO] }),
                  (0, l.jsx)(L.UX, { children: tD }),
              ],
          })
        : (0, l.jsx)(K.A, {
              shouldUseManaModal: e_,
              steps: f ?? ek.steps,
              currentStep: S ?? eO,
              overrideKey: tL,
              paymentError: p.paymentError,
              header: v,
              hideBreadcrumbs: B,
              body: tO,
              footer: tD,
          });
}
function eA(e) {
    let {
            defaultPaymentSourceId: t,
            paymentSources: n,
            hasFetchedPaymentSources: l,
        } = (0, r.cf)([G.A], () => ({
            defaultPaymentSourceId: void 0 !== e ? e : G.A.defaultPaymentSourceId,
            paymentSources: G.A.paymentSources,
            hasFetchedPaymentSources: G.A.hasFetchedPaymentSources,
        })),
        a = (0, r.bG)([q.A], () => q.A.cashAppPayComponent),
        s = (0, r.bG)([S.A], () => S.A.data?.allowed_payment_source_types ?? null);
    (0, f.Ay)(() => {
        (0, m.UU)(), l || (0, P.$o)();
    }),
        i.useEffect(() => {
            null == a && null != s && s.includes(et.he.CASH_APP) && (0, Z.UU)();
        }, [s, a]);
    let [o, u] = i.useState(t);
    null != t && null == o && u(t);
    let [c, d] = i.useState(() => ({ info: er, isValid: !1 })),
        [A, _] = i.useState(() => ({ info: es, isValid: !1 })),
        [C, E] = i.useState(""),
        [y, x] = i.useState(""),
        [T, N] = i.useState(() => ({ token: null })),
        [g, I, v, b, R] = (0, r.yK)([k.A], () => [
            k.A.braintreeEmail,
            k.A.braintreeNonce,
            k.A.error,
            k.A.venmoUsername,
            k.A.adyenPaymentData,
        ]),
        [M, j] = (0, r.yK)([F.A], () => [F.A.error, F.A.isAwaitingAuthentication]);
    i.useEffect(() => {
        let e = (e) => {
            let { billingAddress: t } = e;
            _({ info: t, isValid: t.country.length > 0 });
        };
        return (
            p.h.subscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e),
            () => {
                p.h.unsubscribe("BRAINTREE_TOKENIZE_PAYPAL_SUCCESS", e), (0, h.ET)();
            }
        );
    }, []);
    let [L, O] = i.useState(!1),
        [D, U] = i.useState(!1),
        [w, Y] = i.useState(null),
        W = i.useRef(null),
        V = (0, r.bG)([F.A], () => F.A.isAwaitingAuthentication),
        [K, z] = (0, r.yK)([B.A], () => [B.A.purchaseTokenAuthState, B.A.purchaseTokenHash]);
    return (
        i.useEffect(() => {
            null != w && null != W.current && W.current.scrollIntoView({ behavior: "smooth" });
        }, [w]),
        {
            paymentSources: n,
            paymentSourceId: o,
            hasFetchedPaymentSources: l,
            setPaymentSourceId: u,
            creditCardState: c,
            setCreditCardState: d,
            tokenState: T,
            setTokenState: N,
            billingAddressState: A,
            setBillingAddressState: _,
            isSubmittingCurrentStep: L,
            setIsSubmittingCurrentStep: O,
            hasRedirectURL: D,
            setHasRedirectURL: U,
            braintreeEmail: g,
            braintreeNonce: I,
            venmoUsername: b,
            adyenPaymentData: R,
            paymentError: null != M ? M : v,
            paymentAuthenticationState: j ? H.oc.PENDING : null != M ? H.oc.ERROR : H.oc.NONE,
            purchaseError: w,
            setPurchaseError: Y,
            purchaseErrorBlockRef: W,
            isAuthenticating: V,
            purchaseTokenAuthState: K,
            purchaseTokenHash: z,
            epsBankState: y,
            setEpsBankState: x,
            p24BankState: C,
            setP24BankState: E,
        }
    );
}
