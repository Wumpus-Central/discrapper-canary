n.d(t, { lZ: () => j }), n(388685), n(415506);
var r = n(54381),
    i = n(473749),
    a = n(512722),
    o = n.n(a),
    s = n(481060),
    l = n(330726),
    c = n(711459),
    u = n(717401),
    d = n(716534),
    f = n(664891),
    p = n(858987),
    _ = n(669079),
    m = n(74538),
    h = n(987209),
    g = n(563132),
    E = n(409813);
n(45572);
var b = n(809144),
    y = n(698708),
    O = n(844068),
    v = n(709113),
    S = n(614223),
    I = n(481595),
    T = n(435020),
    C = n(51499),
    A = n(678334),
    N = n(614277),
    P = n(474936),
    R = n(231338),
    w = n(388032),
    D = n(267180);
let x = 500;
function L() {
    let {
            activeSubscription: e,
            hasPaymentSources: t,
            paymentSourceId: n,
            paymentSources: r,
            priceOptions: a,
            selectedPlan: o,
            selectedSkuPricePreview: s,
            purchasePreviewError: l,
            purchaseType: c,
            invoicePreview: u,
            inReverseTrial: d,
            isEligibleForTrial: f,
            userTrialOffer: _,
        } = (0, g.JL)(),
        { isGift: E } = (0, h.wD)(),
        b = (0, T.m)(r, n),
        y = i.useMemo(() => {
            if (null != o) {
                if ((0, m.uZ)(o.id)) return P.Y1;
                if ((0, m.Z8)(o.id)) return P.j4;
            }
            return [];
        }, [o]),
        O = i.useMemo(
            () =>
                c === R.GZ.ONE_TIME
                    ? (null == s && null != n) || null != l
                    : null == u || (!E && null != b && c === R.GZ.SUBSCRIPTION && f && !b.canRedeemTrial()),
            [c, s, n, l, u, E, b, f],
        ),
        v = (0, m.Ap)(a.paymentSourceId),
        S = (0, p.K)({
            purchaseType: c,
            plan: o,
            premiumSubscription: e,
            isGift: E,
            planGroup: y,
            isPrepaidPaymentSource: v,
            inReverseTrial: d,
            paymentSourceId: n,
            hasPaymentSources: t,
        });
    return {
        paymentSource: b,
        isEligibleForTrial: f,
        planGroup: y,
        disablePurchase: O,
        buttonText: S,
        userTrialOffer: _,
    };
}
function j(e) {
    var t, n;
    let a,
        {
            handleStepChange: p,
            trialId: m,
            trialFooterMessageOverride: T,
            reviewWarningMessage: j,
            planGroup: M,
            openInvoiceId: k,
            analyticsData: U,
            analyticsLocation: G,
            referralTrialOfferId: Z,
            initialPlanId: F,
            subscriptionTier: B,
            handleClose: V,
        } = e,
        {
            activeSubscription: H,
            setUpdatedSubscription: Y,
            contextMetadata: W,
            currencies: K,
            paymentSources: z,
            priceOptions: q,
            purchaseError: Q,
            purchaseTokenAuthState: X,
            selectedPlan: J,
            selectedSkuId: $,
            setCurrency: ee,
            setPaymentSourceId: et,
            setPurchaseState: en,
            setPurchaseError: er,
            step: ei,
            purchaseState: ea,
            isPremium: eo,
            setHasAcceptedTerms: es,
            purchaseType: el,
            setEntitlementsGranted: ec,
            setAppliedUserDiscounts: eu,
            startedPaymentFlowWithPaymentSourcesRef: ed,
            inReverseTrial: ef,
            enablePremiumBrandRefresh: ep,
            disablePurchasesForStorybook: e_,
            isPremiumGroupPurchase: em,
            isEligibleForDiscount: eh,
            discountOffer: eg,
        } = (0, g.JL)(),
        { isGift: eE, giftMessage: eb, giftRecipient: ey, claimableRewards: eO } = (0, h.wD)();
    o()(null != ei, "Step should be set");
    let ev = i.useRef(null),
        [eS, eI] = (0, l.Z)(!1, x),
        { paymentSource: eT, isEligibleForTrial: eC, planGroup: eA, disablePurchase: eN, userTrialOffer: eP } = L(),
        eR = null != (n = null != m ? m : Z) ? n : null,
        ew = null != eR && (!eo || P.nG[eR].skus.includes($)) ? eR : null,
        eD = { user_trial_offer_id: null == eP ? void 0 : eP.id };
    i.useEffect(() => {
        null != Q && null != ev.current && ev.current.scrollIntoView({ behavior: "smooth" });
    }, [Q]);
    let ex = i.useCallback(
            (e, t, n) => {
                Y(e),
                    null != t && ec(t),
                    null != n && eu(n),
                    p(E.h8.CONFIRM, {
                        fulfillment: {
                            subscription: e,
                            entitlements: t,
                        },
                    });
            },
            [p, Y, ec, eu],
        ),
        eL = null != J && P.o4.has(J.id) && null != eT && !(0, c.aQ)(eT) ? Error(w.intl.string(w.t["2ik8ih"])) : null,
        ej = i.useRef(null),
        [eM, ek] = i.useState(null),
        eU = null == eg || null == (t = eg.discount) ? void 0 : t.plan_ids,
        eG = eh && null != eg && null != eU && null != J && eU.includes(J.id),
        eZ = eE && (0, _.pO)(ey),
        eF = null == F && null == B && el === R.GZ.SUBSCRIPTION,
        eB = (0, S.Kp)({
            isTrial: eC,
            isGift: eE,
            selectedSkuId: $,
            startedPaymentFlowWithPaymentSources: ed.current,
        }),
        eV = eE && el === R.GZ.ONE_TIME,
        eH = eV || (eB ? eF && eo : eo),
        eY = (0, u.id)(J, eE, eO),
        eW = i.useCallback(
            () =>
                eB
                    ? void p(E.h8.SKU_SELECT)
                    : em
                      ? void p(E.h8.ADD_PAYMENT_STEPS)
                      : eY
                        ? void p(E.h8.SELECT_FREE_SKU)
                        : eV
                          ? p(E.h8.GIFT_CUSTOMIZATION)
                          : p(E.h8.PLAN_SELECT),
            [p, eB, eV, eY, em],
        ),
        eK = () => {
            p(E.h8.ADD_PAYMENT_STEPS);
        },
        ez = eN;
    e_ && (ez = !0);
    let eq = null != M ? M : eA;
    return (
        el === R.GZ.ONE_TIME
            ? (a = (0, r.jsx)(I.Z, {
                  hasLegalTermsFlash: eS,
                  legalTermsNodeRef: ej,
                  onPaymentSourceChange: (e) => et(null != e ? e.id : null),
                  handlePaymentSourceAdd: () => p(E.h8.ADD_PAYMENT_STEPS),
              }))
            : null == H || ef || eE
              ? (o()(null != J, "Expected plan to be selected"),
                (a = (0, r.jsx)(d.Z, {
                    selectedPlanId: J.id,
                    planGroup: eq,
                    paymentSources: z,
                    onPaymentSourceChange: (e) => et(null != e ? e.id : null),
                    priceOptions: q,
                    currencies: K,
                    onCurrencyChange: (e) => ee(e),
                    handlePaymentSourceAdd: () => p(E.h8.ADD_PAYMENT_STEPS),
                    setHasAcceptedTerms: es,
                    legalTermsNodeRef: ej,
                    hasLegalTermsFlash: eS,
                    trialId: ew,
                    trialFooterMessageOverride: T,
                    reviewWarningMessage: j,
                    purchaseState: ea,
                    referralTrialOfferId: Z,
                    isTrial: eC || (null != m && null != T),
                    isDiscount: eG,
                    handleClose: V,
                })))
              : (o()(null != J, "Expected plan to be selected"),
                (a = (0, r.jsx)(f.Z, {
                    premiumSubscription: H,
                    paymentSources: z,
                    priceOptions: q,
                    onPaymentSourceChange: (e) => {
                        et(null != e ? e.id : null);
                    },
                    onPaymentSourceAdd: eK,
                    planId: J.id,
                    setHasAcceptedTerms: es,
                    legalTermsNodeRef: ej,
                    hasLegalTermsFlash: eS,
                    onInvoiceError: (e) => ek(e),
                    planGroup: eq,
                    currencies: K,
                    onCurrencyChange: (e) => ee(e),
                    hasOpenInvoice: null != k,
                    purchaseState: ea,
                    handleClose: V,
                }))),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(b.P, { giftMessage: eb }),
                !eZ && (0, r.jsx)(C.Z, { isEligibleForTrial: eC }),
                (0, r.jsxs)(N.C3, {
                    children: [
                        ep && eB && !em && (0, r.jsx)("div", { className: D.bodyGradientPadding }),
                        (0, r.jsxs)(s.Kqy, {
                            direction: "vertical",
                            gap: 8,
                            children: [(0, r.jsx)(O.Z, {}), (0, r.jsx)(y.Z, {}), (0, r.jsx)(v.Z, {})],
                        }),
                        a,
                    ],
                }),
                (0, r.jsx)(N.O3, {
                    children: (0, r.jsx)(A.Z, {
                        premiumSubscription: null != H ? H : null,
                        setPurchaseState: en,
                        onBack: eW,
                        onNext: ex,
                        onPurchaseError: (e) => er(e),
                        legalTermsNodeRef: ej,
                        flashLegalTerms: () => eI(!0),
                        invoiceError: eM,
                        planError: eL,
                        analyticsLocation: G,
                        baseAnalyticsData: U,
                        flowStartTime: W.startTime,
                        trialId: ew,
                        planGroup: eq,
                        purchaseTokenAuthState: X,
                        openInvoiceId: k,
                        backButtonEligible: eH,
                        metadata: eD,
                        isTrial: eC,
                        disablePurchase: ez,
                        onPaymentSourceAdd: eK,
                    }),
                }),
            ],
        })
    );
}
