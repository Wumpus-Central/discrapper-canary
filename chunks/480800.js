"use strict";
n.d(t, { Y: () => ea, _V: () => eo });
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
    y = n(626584),
    v = n(156312),
    N = n(166532),
    C = n(69494),
    R = n(19311),
    O = n(482132);
n(615310);
var b = n(617745),
    D = n(921925),
    L = n(615405),
    w = n(825755),
    M = n(153084),
    P = n(295405),
    x = n(293700),
    k = n(67480),
    U = n(427262),
    G = n(251913),
    F = n(632638),
    V = n(682449),
    B = n(490581),
    H = n(168984),
    j = n(836308),
    Y = n(632721),
    W = n(335425),
    K = n(808574),
    $ = n(818348),
    z = n(985018),
    q = n(962693),
    Z = n(963145);
let X = new y.A("AddPaymentStep.tsx"),
    Q = { name: "", cardNumber: "", expirationDate: "", cvc: "" },
    J = { email: "", name: "", country: "", line1: "", line2: "", city: "", postalCode: "", state: "" };
function ee(e) {
    let { onCardInfoChange: t } = e,
        n = (0, a.bG)([w.A], () => w.A.error);
    return (0, r.jsx)(p.A, { billingError: n, onCardInfoChange: t });
}
function et() {
    return (0, r.jsx)(d.A, {});
}
function en() {
    return (0, r.jsx)(_.A, {});
}
function er() {
    return (0, r.jsx)(H.A, {});
}
function ei() {
    let e = (0, a.bG)([L.A], () => L.A.isBusy),
        t = (0, a.bG)([w.A], () => w.A.stripePaymentMethod);
    return (0, r.jsx)(h.y, { stripePaymentMethod: t, submitting: e });
}
function es() {
    return (0, r.jsx)(f.N, {});
}
function ea(e) {
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
            header: y,
            analyticsData: L,
            analyticsLocation: M,
            hideBreadcrumbs: x = !1,
            usePaymentModalStep: G = !1,
            isEligibleForTrial: H = !1,
            allowDesktopRedirectPurchase: Q = !1,
            toastContent: J,
            continueSessionToInitialStep: ea,
            overwriteSubscriptionPaymentSource: eo = !1,
            shouldUseManaModal: el = !0,
        } = e,
        { stripe: eu, contextMetadata: ec, activitySessionId: ed, paymentElementsEnabled: e_ } = (0, v.P5)(),
        ef = i.useMemo(() => {
            let e = c === N.pn.PAYMENT_TYPE || c === N.pn.PAYMENT_ELEMENT;
            return e_ && e ? (Q ? N.pn.AWAITING_BROWSER_CHECKOUT : N.pn.PAYMENT_ELEMENT) : c;
        }, [e_, c, Q]),
        ep = i.useMemo(() => (0, U.Gn)(), []),
        {
            CREDIT_CARD_STEPS: eh,
            PAYPAL_STEPS: em,
            IDEAL_STEPS: eE,
            PAYMENT_REQUEST_STEPS: eg,
            VENMO_STEPS: eA,
            ADD_PAYMENT_STEPS: eI,
            PRZELEWY24_STEPS: eT,
            EPS_STEPS: eS,
            CASH_APP_STEPS: ey,
            PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: ev,
        } = (0, Y.kh)({ prependSteps: d, appendSteps: _, paymentElementsEnabled: e_ });
    function eN(e) {
        switch (e) {
            case N.pn.CREDIT_CARD_INFORMATION:
                return eh;
            case N.pn.CASH_APP_INFORMATION:
                return ey;
            default:
                return { steps: [N.pn.ADD_PAYMENT_STEPS] };
        }
    }
    let [eC, eR] = i.useState(ef),
        [eO, eb] = i.useState(null),
        [eD, eL] = i.useState(eN(ef));
    i.useEffect(() => {
        (0, E.IV)();
    }, []);
    let ew = (0, a.bG)([w.A], () => w.A.redirectedPaymentSourceId),
        eM = (0, a.bG)([B.A], () => B.A.cashAppPayComponent),
        eP = { completeSteps: e5, setIsSubmittingCurrentStep: l.setIsSubmittingCurrentStep },
        ex = i.useRef(eP);
    i.useEffect(() => {
        ex.current = eP;
    }),
        i.useEffect(() => {
            let { completeSteps: e, setIsSubmittingCurrentStep: t } = ex.current;
            (async () => {
                if (null == ew) return;
                await (0, E.$o)();
                let n = P.A.getPaymentSource(ew);
                null != n && (e(n), t(!1), w.A.clearRedirectedPaymentSourceId());
            })();
        }, [ew]);
    let ek = i.useCallback(
        function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            eb(null), eR(e), t && h({ currentStep: eC, toStep: e });
        },
        [eC, h],
    );
    function eU(e) {
        (0, o.showToast)(
            (0, o.createToast)(void 0 !== J ? J : z.intl.string(z.t["VJPg+l"]), o.ToastType.SUCCESS, {
                position: o.ToastPosition.BOTTOM,
            }),
        ),
            p(eC, e),
            ek(ef, !1);
    }
    let [eG, eF] = i.useState(null),
        {
            setPaymentSourceId: eV,
            creditCardState: eB,
            setCreditCardState: eH,
            setTokenState: ej,
            isSubmittingCurrentStep: eY,
            billingAddressState: eW,
            setBillingAddressState: eK,
            setIsSubmittingCurrentStep: e$,
            braintreeEmail: ez,
            braintreeNonce: eq,
            venmoUsername: eZ,
            adyenPaymentData: eX,
            epsBankState: eQ,
            setEpsBankState: eJ,
            p24BankState: e0,
            setP24BankState: e1,
            selectedSkuId: e2,
        } = l,
        e3 = e2 ?? "",
        e6 = (0, a.bG)([k.A], () => k.A.get(e3), [e3]),
        e4 = e6?.eligiblePaymentGateways?.map((e) => e.valueOf());
    function e5(e) {
        eV(e.id), eU(e);
    }
    let e7 = () => {
            eL(eI), ek(N.pn.PAYMENT_TYPE);
        },
        e8 = (0, S.wD)({
            step: eC,
            continueSessionToInitialStep: ea,
            paymentElementsEnabled: e_,
            handleStepChange: ek,
            logger: X,
            shouldLogOnChangeEvents: ep || !1,
            onBillingAddressChange: (e, t) => {
                eK({ info: { ...eW.info, ...e }, isValid: t });
            },
        }),
        {
            shouldRenderPaymentElement: e9,
            paymentElementReady: te,
            paymentElementSelectedType: tt,
            returnToPaymentElementStep: tn,
            onBackFromPaymentElement: tr,
            combinedStripeElementsRef: ti,
            stripePaymentElementProps: ts,
            stripeAddressElementProps: ta,
            remountAddressElement: to,
            addressElementKey: tl,
        } = e8,
        tu = i.useCallback(() => {
            ek(N.pn.ADDRESS), e_ && S.Ky.includes(eC) && to();
        }, [ek, e_, to, eC]),
        tc = i.useCallback(
            (e) => {
                e_ && null != tt && (0, A.PE)(e) ? tn(e) : ek(N.pn.PAYMENT_TYPE);
            },
            [e_, tt, tn, ek],
        ),
        td = G ? (0, r.jsx)(D.A, { className: Z._8 }) : null,
        t_ = (0, j.zg)();
    switch (eC) {
        case N.pn.ATTEMPT_GOOGLE_PAY:
        case N.pn.ATTEMPT_APPLE_PAY:
        case N.pn.PAYMENT_TYPE:
            let tf = {
                CREDIT_CARD_STEPS: eh,
                PAYPAL_STEPS: em,
                VENMO_STEPS: eA,
                PAYMENT_REQUEST_STEPS: eg,
                PRZELEWY24_STEPS: eT,
                EPS_STEPS: eS,
                IDEAL_STEPS: eE,
                CASH_APP_STEPS: ey,
            };
            (t = (0, r.jsx)(j.ZL, {
                prependSteps: d,
                appendSteps: _,
                analyticsLocation: M,
                isEligibleForTrial: H,
                allowDesktopRedirectPurchase: Q,
                onPaymentRequestSourceFailed: e7,
                paymentModalArgs: l,
                handleStepChange: ek,
                setPaymentMethodSteps: eL,
                setPaymentRequestPaymentMethod: eF,
                currentStep: eC,
                setInfoNotice: eb,
                completeSteps: e5,
                paymentSourceTypeRestrictions: e4,
                ...tf,
                ...t_,
            })),
                (n = (0, r.jsx)(j.GJ, {
                    shouldUseManaModal: el,
                    onReturn: f,
                    handleStepChange: ek,
                    currentStep: eC,
                    ...t_,
                }));
            break;
        case N.pn.PAYMENT_ELEMENT:
            if (!e_) throw (0, E.ne)("Payment Elements not enabled, invalid step", !0);
            (t = null),
                (n = (0, r.jsx)(K.w, {
                    handleStepChange: ek,
                    shouldUseManaModal: el,
                    setPaymentMethodSteps: eL,
                    primarySubmitting: eY,
                    primaryDisabled: !te,
                    onBack: () => {
                        tr(), f?.();
                    },
                    paymentModalArgs: l,
                    PAYMENT_ELEMENT_STEPS_BY_PAYMENT_SOURCE_MAP: ev,
                    ...e8,
                }));
            break;
        case N.pn.CREDIT_CARD_INFORMATION:
            let tp = async (e) => {
                e$(!0);
                try {
                    let t = await (0, E.YJ)(eu, e);
                    ej({ token: t }), ek(N.pn.ADDRESS);
                } catch (e) {
                    X.error(e.message ?? JSON.stringify(e));
                } finally {
                    e$(!1);
                }
            };
            t = (0, r.jsx)(ee, {
                onCardInfoChange: (e, t) => {
                    eH({ info: e, isValid: t }), eK((t) => ({ ...t, info: { ...t.info, name: e.name } }));
                },
            });
            let th = !eB.isValid,
                tm = () => {
                    ek(N.pn.PAYMENT_TYPE);
                };
            n = (0, r.jsx)(s.ElementsConsumer, {
                children: (e) => {
                    let { elements: t } = e;
                    return (0, r.jsx)(j.uv, {
                        onBack: tm,
                        primaryCTA: R.Ay.CTAType.CONTINUE,
                        primaryType: "submit",
                        primaryText: z.intl.string(z.t.PDTjLN),
                        primarySubmitting: eY,
                        primaryDisabled: th,
                        onPrimary: () => tp(t),
                        shouldUseManaModal: el,
                    });
                },
            });
            break;
        case N.pn.AWAITING_BROWSER_CHECKOUT:
        case N.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
        case N.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
            let tE = () => {
                    eL(eh), ek(e_ ? N.pn.PAYMENT_ELEMENT : N.pn.CREDIT_CARD_INFORMATION);
                },
                tg = () => {
                    e_ ? (tr(), f?.()) : (eL(eI), ek(N.pn.PAYMENT_TYPE));
                };
            (t = (0, r.jsx)(b.t, { step: eC, onPurchaseComplete: () => p(eC), onHandoffFailure: tE })),
                (n = (0, r.jsx)(b.q, { onPrimaryClick: tE, onBackClick: tg }));
            break;
        case N.pn.EPS_INFORMATION:
            (t = (0, r.jsx)(T.A, {
                type: $.he.EPS,
                onAccountHolderNameChange: (e) => eK({ info: { ...eW.info, name: e }, isValid: eW.isValid }),
                onEPSBankChange: (e) => eJ(e),
                epsBankValue: eQ,
                billingAddressInfo: eW.info,
            })),
                (n = (0, r.jsx)(j.uv, {
                    onBack: () => tc($.he.EPS),
                    primaryCTA: R.Ay.CTAType.CONTINUE,
                    primaryText: z.intl.string(z.t.PDTjLN),
                    primaryDisabled: void 0 === eQ || "" === eQ || "" === eW.info.name,
                    onPrimary: () => tu(),
                    shouldUseManaModal: el,
                }));
            break;
        case N.pn.IDEAL_INFORMATION:
            (t = (0, r.jsx)(I.A, {
                type: $.he.IDEAL,
                onAccountHolderNameChange: (e) => eK({ info: { ...eW.info, name: e }, isValid: eW.isValid }),
                billingAddressInfo: eW.info,
            })),
                (n = (0, r.jsx)(j.uv, {
                    onBack: () => ek(N.pn.PAYMENT_TYPE),
                    primaryCTA: R.Ay.CTAType.CONTINUE,
                    primaryText: z.intl.string(z.t.PDTjLN),
                    primaryDisabled: "" === eW.info.name,
                    onPrimary: () => tu(),
                    shouldUseManaModal: el,
                }));
            break;
        case N.pn.PRZELEWY24_INFORMATION:
            (t = (0, r.jsx)(T.A, {
                type: $.he.PRZELEWY24,
                onNameChange: (e) => eK({ info: { ...eW.info, name: e }, isValid: eW.isValid }),
                onEmailChange: (e) => eK({ info: { ...eW.info, email: e }, isValid: eW.isValid }),
                onP24BankChange: (e) => {
                    e1(e);
                },
                p24BankValue: e0,
                billingAddressInfo: eW.info,
            })),
                (n = (0, r.jsx)(j.uv, {
                    onBack: () => tc($.he.PRZELEWY24),
                    primaryCTA: R.Ay.CTAType.CONTINUE,
                    primaryText: z.intl.string(z.t.PDTjLN),
                    primaryDisabled:
                        void 0 === eW.info.name ||
                        "" === eW.info.name ||
                        void 0 === eW.info.email ||
                        "" === eW.info.email ||
                        void 0 === e0 ||
                        "" === e0,
                    onPrimary: () => tu(),
                    shouldUseManaModal: el,
                }));
            break;
        case N.pn.PAYPAL_INFORMATION:
            let tA = 0 !== ez.length && null != eq;
            (t = (0, r.jsx)(et, {})),
                (n = (0, r.jsx)(j.uv, {
                    onBack: () => tc($.he.PAYPAL),
                    primaryCTA: R.Ay.CTAType.CONTINUE,
                    primaryText: tA ? z.intl.string(z.t.PDTjLN) : z.intl.string(z.t.Djzd7L),
                    onPrimary: () => (tA ? tu() : (0, u.$e)()),
                    shouldUseManaModal: el,
                }));
            break;
        case N.pn.VENMO_INFORMATION:
            let tI = 0 !== eZ.length && null != eq;
            (t = (0, r.jsx)(en, {})),
                (n = (0, r.jsx)(j.uv, {
                    onBack: () => tc($.he.VENMO),
                    primaryCTA: R.Ay.CTAType.CONTINUE,
                    primaryText: tI ? z.intl.string(z.t.PDTjLN) : z.intl.string(z.t["4KoTLM"]),
                    onPrimary: () => (tI ? tu() : (0, u.jR)()),
                    shouldUseManaModal: el,
                }));
            break;
        case N.pn.PAYMENT_REQUEST_INFORMATION:
            (t = (0, r.jsx)(ei, {})),
                (n = (0, r.jsx)(j.uv, { onBack: () => ek(N.pn.PAYMENT_TYPE), shouldUseManaModal: el }));
            break;
        case N.pn.CASH_APP_INFORMATION:
            let tT = null != eX,
                tS = null != eM;
            (t = (0, r.jsx)(er, {})),
                (n = (0, r.jsx)(j.uv, {
                    onBack: () => tc($.he.CASH_APP),
                    primaryCTA: R.Ay.CTAType.CONTINUE,
                    primaryText: tT ? z.intl.string(z.t.PDTjLN) : z.intl.string(z.t["9ALP8w"]),
                    onPrimary: () => (tT ? tu() : (0, V.uy)()),
                    primaryDisabled: !tS,
                    shouldUseManaModal: el,
                }));
            break;
        case N.pn.ADDRESS:
            let ty = e_ && null != tt;
            (t = (0, r.jsx)(W.Ej, {
                paymentModalArgs: l,
                paymentSourceType: eD.methodType ?? $.he.CARD,
                shouldUsePaymentElement: ty,
            })),
                (n = (0, r.jsx)(W.bC, {
                    paymentModalArgs: l,
                    shouldUseManaModal: el,
                    analyticsLocation: M,
                    overwriteSubscriptionPaymentSource: eo,
                    handleStepChange: ek,
                    onPaymentRequestSourceFailed: e7,
                    paymentRequestPaymentMethod: eG,
                    completeSteps: e5,
                    paymentMethodSteps: eD,
                    shouldUsePaymentElement: ty,
                    ...e8,
                }));
            break;
        case N.pn.AWAITING_AUTHENTICATION:
            t = (0, r.jsx)(es, {});
            break;
        default:
            throw Error(`Unexpected step: ${eC}`);
    }
    let tv = e_ && e9,
        tN = tv ? "combined_stripe_elements" : void 0,
        tC = (0, r.jsxs)(o.YC2, {
            className: q.C9,
            staticClassName: q.a2,
            animatedNodeClassName: q.L2,
            fillParent: !0,
            overrideKey: tN,
            step: eC,
            steps: eD.steps,
            sideMargin: 20,
            children: [
                null != eO &&
                    (0, r.jsx)("div", { className: Z.Ns, children: (0, r.jsx)(o.wx6, { type: "info", children: eO }) }),
                tv &&
                    (0, r.jsx)(S.e4, {
                        step: eC,
                        analyticsContext:
                            null != L ? { activitySessionId: ed, contextMetadata: ec, analyticsData: L } : void 0,
                        paymentElementSelectedType: tt,
                        elementsRef: ti,
                        stripePaymentElementProps: ts,
                        stripeAddressElementProps: ta,
                        addressElementKey: tl,
                        billingAddressInfo: eW.info,
                        onSetupError: () => {
                            tr(), ek(N.pn.PAYMENT_TYPE);
                        },
                    }),
                t,
            ],
        }),
        tR = eC === N.pn.PAYMENT_TYPE && 0 === d.length ? null : n;
    return G
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  H && (0, r.jsx)(C.A, { className: Z.At, isEligibleForTrial: H }),
                  (0, r.jsxs)(O.dZ, { children: [td, tC] }),
                  (0, r.jsx)(O.UX, { children: tR }),
              ],
          })
        : (0, r.jsx)(F.A, {
              shouldUseManaModal: el,
              steps: m ?? eD.steps,
              currentStep: g ?? eC,
              overrideKey: tN,
              paymentError: l.paymentError,
              header: y,
              hideBreadcrumbs: x,
              body: tC,
              footer: tR,
          });
}
function eo(e) {
    let {
            defaultPaymentSourceId: t,
            paymentSources: n,
            hasFetchedPaymentSources: r,
        } = (0, a.cf)([P.A], () => ({
            defaultPaymentSourceId: void 0 !== e ? e : P.A.defaultPaymentSourceId,
            paymentSources: P.A.paymentSources,
            hasFetchedPaymentSources: P.A.hasFetchedPaymentSources,
        })),
        s = (0, a.bG)([B.A], () => B.A.cashAppPayComponent),
        o = (0, a.bG)([g.A], () => g.A.data?.allowed_payment_source_types ?? null);
    (0, m.Ay)(() => {
        (0, u.UU)(), r || (0, E.$o)();
    }),
        i.useEffect(() => {
            null == s && null != o && o.includes($.he.CASH_APP) && (0, V.UU)();
        }, [o, s]);
    let [d, _] = i.useState(t);
    null != t && null == d && _(t);
    let [f, p] = i.useState(() => ({ info: Q, isValid: !1 })),
        [h, A] = i.useState(() => ({ info: J, isValid: !1 })),
        [I, T] = i.useState(""),
        [S, y] = i.useState(""),
        [v, N] = i.useState(() => ({ token: null })),
        [C, R, O, b, D] = (0, a.yK)([w.A], () => [
            w.A.braintreeEmail,
            w.A.braintreeNonce,
            w.A.error,
            w.A.venmoUsername,
            w.A.adyenPaymentData,
        ]),
        [L, k] = (0, a.yK)([M.A], () => [M.A.error, M.A.isAwaitingAuthentication]);
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
    let [U, F] = i.useState(!1),
        [H, j] = i.useState(!1),
        [Y, W] = i.useState(null),
        K = i.useRef(null),
        z = (0, a.bG)([M.A], () => M.A.isAwaitingAuthentication),
        [q, Z] = (0, a.yK)([x.A], () => [x.A.purchaseTokenAuthState, x.A.purchaseTokenHash]);
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
            isSubmittingCurrentStep: U,
            setIsSubmittingCurrentStep: F,
            hasRedirectURL: H,
            setHasRedirectURL: j,
            braintreeEmail: C,
            braintreeNonce: R,
            venmoUsername: b,
            adyenPaymentData: D,
            paymentError: null != L ? L : O,
            paymentAuthenticationState: k ? G.oc.PENDING : null != L ? G.oc.ERROR : G.oc.NONE,
            purchaseError: Y,
            setPurchaseError: W,
            purchaseErrorBlockRef: K,
            isAuthenticating: z,
            purchaseTokenAuthState: q,
            purchaseTokenHash: Z,
            epsBankState: S,
            setEpsBankState: y,
            p24BankState: I,
            setP24BankState: T,
        }
    );
}
