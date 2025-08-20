t.d(n, { x: () => N }), t(388685);
var r = t(951288),
    i = t(647438),
    l = t(512722),
    s = t.n(l),
    a = t(399606),
    o = t(481060),
    C = t(975608),
    d = t(600164),
    p = t(711459),
    c = t(374649),
    u = t(347896),
    x = t(717401),
    _ = t(572517),
    f = t(104494),
    h = t(639119),
    j = t(642530),
    L = t(381507),
    m = t(314404),
    g = t(594174),
    S = t(509545),
    y = t(669079),
    E = t(63063),
    b = t(74538),
    P = t(987209),
    O = t(563132),
    I = t(409813),
    v = t(107998),
    Z = t(51499),
    M = t(456251),
    w = t(27034),
    A = t(435020),
    B = t(809144),
    T = t(698708),
    U = t(844068),
    k = t(981631),
    R = t(474936),
    H = t(388032),
    F = t(833271);
function N(e) {
    var n, t, l, N;
    let {
            handleStepChange: G,
            initialPlanId: D,
            planGroup: W,
            subscriptionTier: z,
            trialId: Y,
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
            step: en,
            defaultPlanId: et,
            priceOptions: er,
            isPremium: ei,
            premiumBrandRefreshBackgroundClassName: el,
        } = (0, O.JL)(),
        { isGift: es, giftRecipient: ea, giftMessage: eo, claimableRewards: eC } = (0, P.wD)(),
        { paymentModalBanner: ed } = (0, v.zb)(),
        ep = (0, x.a5)(ee),
        ec = (null == (n = (0, u.Z)()) ? void 0 : n.planSelectionBanner) != null,
        eu = es && ep && null != eC && eC.length > 0 && ec,
        ex = (0, A.m)(X, Q),
        { newPlans: e_ } = p.ZP.useExperiment({ location: "d17fd6_3" }, { autoTrackExposure: !1 }),
        ef = (0, a.e7)([g.default], () => g.default.getCurrentUser()),
        eh =
            !es &&
            null != $ &&
            $ === R.Si.TIER_2 &&
            null != ef &&
            ef.hasHadPremium() &&
            J &&
            null == q &&
            (0, p.aQ)(ex),
        ej = (0, h.N)(K),
        eL = !es && null != ej && null != $ && R.nG[ej.trial_id].skus.includes($),
        em = (0, f.Ng)(),
        eg = null == em || null == (t = em.discount) ? void 0 : t.plan_ids.some((e) => R.GP[e].skuId === $),
        eS = !es && null != em && null != $ && eg,
        ey = null != (l = eL || eS) && l,
        eE = i.useMemo(
            () =>
                (0, b.V7)({
                    skuId: $,
                    isPremium: ei,
                    multiMonthPlans: eh ? e_ : [],
                    currentSubscription: q,
                    defaultPlanId: et,
                }),
            [$, ei, e_, q, eh, et],
        ),
        eb = eS && eE.includes(R.Xh.PREMIUM_MONTH_TIER_2) ? R.Xh.PREMIUM_MONTH_TIER_2 : eE[0],
        eP = (0, a.e7)([S.Z], () => S.Z.get(eb)),
        eO = [
            {
                planId: null == eP ? void 0 : eP.id,
                quantity: 1,
            },
        ],
        [eI, ev] = i.useState(ey),
        [eZ, eM] = (0, c.ED)({
            items: eO,
            renewal: !1,
            preventFetch: !ey,
            applyEntitlements: !0,
            trialId: Y,
            paymentSourceId: er.paymentSourceId,
            currency: er.currency,
        });
    i.useEffect(() => {
        ey && ev((null == eZ ? void 0 : eZ.subscriptionPeriodEnd) == null);
    }, [eZ, ey]),
        (0, C.Z)(
            "Payment Modal Plan Select Step",
            eI,
            5,
            {
                proratedInvoicePreview: eZ,
                proratedInvoiceError: eM,
                isEligibleForOffer: ey,
            },
            { tags: { app_context: "billing" } },
        );
    let ew = null != (N = null == eM ? void 0 : eM.message) ? N : H.intl.string(H.t.R0RpRU),
        eA = ey && null == eM,
        eB = ey && null != eM,
        eT = eA && null == q && !!ey && (null == eZ ? void 0 : eZ.subscriptionPeriodEnd) == null,
        eU = !es && (null == eP ? void 0 : eP.skuId) === R.Si.TIER_2 && (null == ej ? void 0 : ej.referrer_id) != null,
        ek = null;
    return ((ek = null != ed ? ed : eU ? (0, r.jsx)(L.Z, {}) : (0, r.jsx)(j.Z, {})), eT)
        ? (0, r.jsx)(M.Z, {})
        : (s()(null != en, "Step should be set"),
          s()(eE.length > 0, "Premium plan options should be set"),
          (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(B.P, { giftMessage: eo }),
                  !(es && (0, y.pO)(ea)) && (0, r.jsx)(Z.Z, { isEligibleForTrial: eL }),
                  (0, r.jsxs)(w.C3, {
                      children: [
                          eA && (0, r.jsx)("hr", { className: F.planSelectSeparatorUpper }),
                          ek,
                          (0, r.jsx)(U.Z, {}),
                          (0, r.jsx)(T.Z, {}),
                          eB
                              ? (0, r.jsx)(o.kzN, { children: ew })
                              : (0, r.jsx)(m.O, {
                                    planOptions: eE,
                                    eligibleForMultiMonthPlans: eh,
                                    referralTrialOfferId: K,
                                    selectedPlanId: null == ee ? void 0 : ee.id,
                                    planGroup: W,
                                    subscriptionPeriodEnd: null == eZ ? void 0 : eZ.subscriptionPeriodEnd,
                                    discountInvoiceItems: eS ? (null == eZ ? void 0 : eZ.invoiceItems) : void 0,
                                    useCompactGiftComponents: eu,
                                    handleClose: V,
                                }),
                          eA &&
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)("hr", { className: F.planSelectSeparatorLower }),
                                      (0, r.jsx)(o.Text, {
                                          variant: "text-xs/normal",
                                          children: H.intl.format(H.t.BHtnqK, {
                                              link: E.Z.getArticleURL(k.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                          }),
                                      }),
                                  ],
                              }),
                      ],
                  }),
                  (0, r.jsxs)(w.O3, {
                      children: [
                          eu && (0, r.jsx)(_.c, {}),
                          (0, r.jsx)(o.mzw, {
                              "data-migration-pending": !0,
                              justify: d.Z.Justify.BETWEEN,
                              align: d.Z.Align.CENTER,
                              className: el,
                              children: (0, r.jsx)(m.y, {
                                  onStepChange: G,
                                  onBackClick: () => G(I.h8.SKU_SELECT),
                                  showBackButton: null == D && null == z,
                                  planOptions: eE,
                                  shouldRenderUpdatedPaymentModal: eA,
                                  isTrial: eL,
                              }),
                          }),
                      ],
                  }),
              ],
          }));
}
