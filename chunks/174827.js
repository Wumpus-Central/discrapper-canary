n.d(r, { x: () => H }), n(388685);
var t = n(255367),
    i = n(73800),
    o = n(512722),
    a = n.n(o),
    l = n(399606),
    s = n(481060),
    C = n(975608),
    d = n(600164),
    c = n(711459),
    p = n(374649),
    u = n(717401),
    _ = n(286961),
    x = n(572517),
    f = n(104494),
    m = n(639119),
    h = n(642530),
    j = n(381507),
    L = n(314404),
    g = n(594174),
    b = n(509545),
    y = n(669079),
    S = n(63063),
    v = n(74538),
    E = n(987209),
    I = n(563132),
    P = n(409813),
    T = n(107998),
    O = n(51499),
    w = n(456251),
    Z = n(27034),
    M = n(435020),
    A = n(809144),
    R = n(698708),
    B = n(844068),
    N = n(981631),
    k = n(474936),
    F = n(388032),
    U = n(522129);
function H(e) {
    var r, n, o, H;
    let {
            handleStepChange: G,
            initialPlanId: D,
            planGroup: z,
            subscriptionTier: Y,
            trialId: W,
            referralTrialOfferId: K,
            handleClose: V,
        } = e,
        {
            activeSubscription: q,
            hasFetchedSubscriptions: J,
            paymentSourceId: Q,
            paymentSources: X,
            selectedSkuId: $,
            selectedPlan: ee,
            step: er,
            defaultPlanId: en,
            priceOptions: et,
            isPremium: ei,
            premiumBrandRefreshBackgroundClassName: eo,
        } = (0, I.JL)(),
        { isGift: ea, giftRecipient: el, giftMessage: es, claimableRewards: eC } = (0, E.wD)(),
        { paymentModalBanner: ed } = (0, T.zb)(),
        ec = (0, u.a5)(ee),
        ep = (null == (r = (0, _.Z)()) ? void 0 : r.planSelectionBanner) != null,
        eu = ea && ec && null != eC && eC.length > 0 && ep,
        e_ = (0, M.m)(X, Q),
        { newPlans: ex } = c.ZP.useExperiment({ location: "d17fd6_3" }, { autoTrackExposure: !1 }),
        ef = (0, l.e7)([g.default], () => g.default.getCurrentUser()),
        em =
            !ea &&
            null != $ &&
            $ === k.Si.TIER_2 &&
            null != ef &&
            ef.hasHadPremium() &&
            J &&
            null == q &&
            (0, c.aQ)(e_),
        eh = (0, m.N)(K),
        ej = !ea && null != eh && null != $ && k.nG[eh.trial_id].skus.includes($),
        eL = (0, f.Ng)(),
        eg = null == eL || null == (n = eL.discount) ? void 0 : n.plan_ids.some((e) => k.GP[e].skuId === $),
        eb = !ea && null != eL && null != $ && eg,
        ey = null != (o = ej || eb) && o,
        eS = i.useMemo(
            () =>
                (0, v.V7)({
                    skuId: $,
                    isPremium: ei,
                    multiMonthPlans: em ? ex : [],
                    currentSubscription: q,
                    defaultPlanId: en,
                }),
            [$, ei, ex, q, em, en],
        ),
        ev = eb && eS.includes(k.Xh.PREMIUM_MONTH_TIER_2) ? k.Xh.PREMIUM_MONTH_TIER_2 : eS[0],
        eE = (0, l.e7)([b.Z], () => b.Z.get(ev)),
        eI = [
            {
                planId: null == eE ? void 0 : eE.id,
                quantity: 1,
            },
        ],
        [eP, eT] = i.useState(ey),
        [eO, ew] = (0, p.ED)({
            items: eI,
            renewal: !1,
            preventFetch: !ey,
            applyEntitlements: !0,
            trialId: W,
            paymentSourceId: et.paymentSourceId,
            currency: et.currency,
        });
    i.useEffect(() => {
        ey && eT((null == eO ? void 0 : eO.subscriptionPeriodEnd) == null);
    }, [eO, ey]),
        (0, C.Z)(
            "Payment Modal Plan Select Step",
            eP,
            5,
            {
                proratedInvoicePreview: eO,
                proratedInvoiceError: ew,
                isEligibleForOffer: ey,
            },
            { tags: { app_context: "billing" } },
        );
    let eZ = null != (H = null == ew ? void 0 : ew.message) ? H : F.intl.string(F.t.R0RpRU),
        eM = ey && null == ew,
        eA = ey && null != ew,
        eR = eM && null == q && !!ey && (null == eO ? void 0 : eO.subscriptionPeriodEnd) == null,
        eB = !ea && (null == eE ? void 0 : eE.skuId) === k.Si.TIER_2 && (null == eh ? void 0 : eh.referrer_id) != null,
        eN = null;
    return ((eN = null != ed ? ed : eB ? (0, t.jsx)(j.Z, {}) : (0, t.jsx)(h.Z, {})), eR)
        ? (0, t.jsx)(w.Z, {})
        : (a()(null != er, "Step should be set"),
          a()(eS.length > 0, "Premium plan options should be set"),
          (0, t.jsxs)(t.Fragment, {
              children: [
                  (0, t.jsx)(A.P, { giftMessage: es }),
                  !(ea && (0, y.pO)(el)) && (0, t.jsx)(O.Z, { isEligibleForTrial: ej }),
                  (0, t.jsxs)(Z.C3, {
                      children: [
                          eM && (0, t.jsx)("hr", { className: U.planSelectSeparatorUpper }),
                          eN,
                          (0, t.jsx)(B.Z, {}),
                          (0, t.jsx)(R.Z, {}),
                          eA
                              ? (0, t.jsx)(s.kzN, { children: eZ })
                              : (0, t.jsx)(L.O, {
                                    planOptions: eS,
                                    eligibleForMultiMonthPlans: em,
                                    referralTrialOfferId: K,
                                    selectedPlanId: null == ee ? void 0 : ee.id,
                                    planGroup: z,
                                    subscriptionPeriodEnd: null == eO ? void 0 : eO.subscriptionPeriodEnd,
                                    discountInvoiceItems: eb ? (null == eO ? void 0 : eO.invoiceItems) : void 0,
                                    useCompactGiftComponents: eu,
                                    handleClose: V,
                                }),
                          eM &&
                              (0, t.jsxs)(t.Fragment, {
                                  children: [
                                      (0, t.jsx)("hr", { className: U.planSelectSeparatorLower }),
                                      (0, t.jsx)(s.Text, {
                                          variant: "text-xs/normal",
                                          children: F.intl.format(F.t.BHtnqK, {
                                              link: S.Z.getArticleURL(N.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                          }),
                                      }),
                                  ],
                              }),
                      ],
                  }),
                  (0, t.jsxs)(Z.O3, {
                      children: [
                          eu && (0, t.jsx)(x.c, {}),
                          (0, t.jsx)(s.mzw, {
                              "data-migration-pending": !0,
                              justify: d.Z.Justify.BETWEEN,
                              align: d.Z.Align.CENTER,
                              className: eo,
                              children: (0, t.jsx)(L.y, {
                                  onStepChange: G,
                                  onBackClick: () => G(P.h8.SKU_SELECT),
                                  showBackButton: null == D && null == Y,
                                  planOptions: eS,
                                  shouldRenderUpdatedPaymentModal: eM,
                                  isTrial: ej,
                              }),
                          }),
                      ],
                  }),
              ],
          }));
}
