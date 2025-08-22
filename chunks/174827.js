n.d(t, { x: () => F }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(512722),
    s = n.n(l),
    a = n(399606),
    o = n(481060),
    C = n(975608),
    d = n(600164),
    c = n(711459),
    p = n(374649),
    u = n(347896),
    x = n(717401),
    h = n(572517),
    _ = n(104494),
    f = n(639119),
    j = n(642530),
    m = n(381507),
    L = n(314404),
    g = n(594174),
    b = n(509545),
    y = n(669079),
    S = n(63063),
    E = n(74538),
    O = n(987209),
    P = n(563132),
    v = n(409813),
    w = n(107998),
    M = n(51499),
    I = n(456251),
    Z = n(27034),
    A = n(435020),
    k = n(809144),
    T = n(698708),
    B = n(844068),
    U = n(981631),
    R = n(474936),
    N = n(388032),
    H = n(833271);
function F(e) {
    var t, n, l, F;
    let {
            handleStepChange: G,
            initialPlanId: D,
            planGroup: W,
            subscriptionTier: z,
            trialId: Y,
            referralTrialOfferId: V,
            handleClose: K,
        } = e,
        {
            activeSubscription: q,
            hasFetchedSubscriptions: J,
            paymentSourceId: X,
            paymentSources: Q,
            selectedSkuId: $,
            selectedPlan: ee,
            step: et,
            defaultPlanId: en,
            priceOptions: er,
            isPremium: ei,
            premiumBrandRefreshBackgroundClassName: el,
        } = (0, P.JL)(),
        { isGift: es, giftRecipient: ea, giftMessage: eo, claimableRewards: eC } = (0, O.wD)(),
        { paymentModalBanner: ed } = (0, w.zb)(),
        ec = (0, x.a5)(ee),
        ep = (null == (t = (0, u.Z)()) ? void 0 : t.planSelectionBanner) != null,
        eu = es && ec && null != eC && eC.length > 0 && ep,
        ex = (0, A.m)(Q, X),
        { newPlans: eh } = c.ZP.useExperiment({ location: "d17fd6_3" }, { autoTrackExposure: !1 }),
        e_ = (0, a.e7)([g.default], () => g.default.getCurrentUser()),
        ef =
            !es &&
            null != $ &&
            $ === R.Si.TIER_2 &&
            null != e_ &&
            e_.hasHadPremium() &&
            J &&
            null == q &&
            (0, c.aQ)(ex),
        ej = (0, f.N)(V),
        em = !es && null != ej && null != $ && R.nG[ej.trial_id].skus.includes($),
        eL = (0, _.Ng)(),
        eg = null == eL || null == (n = eL.discount) ? void 0 : n.plan_ids.some((e) => R.GP[e].skuId === $),
        eb = !es && null != eL && null != $ && eg,
        ey = null != (l = em || eb) && l,
        eS = i.useMemo(
            () =>
                (0, E.V7)({
                    skuId: $,
                    isPremium: ei,
                    multiMonthPlans: ef ? eh : [],
                    currentSubscription: q,
                    defaultPlanId: en,
                }),
            [$, ei, eh, q, ef, en],
        ),
        eE = eb && eS.includes(R.Xh.PREMIUM_MONTH_TIER_2) ? R.Xh.PREMIUM_MONTH_TIER_2 : eS[0],
        eO = (0, a.e7)([b.Z], () => b.Z.get(eE)),
        eP = [
            {
                planId: null == eO ? void 0 : eO.id,
                quantity: 1,
            },
        ],
        [ev, ew] = i.useState(ey),
        [eM, eI] = (0, p.ED)({
            items: eP,
            renewal: !1,
            preventFetch: !ey,
            applyEntitlements: !0,
            trialId: Y,
            paymentSourceId: er.paymentSourceId,
            currency: er.currency,
        });
    i.useEffect(() => {
        ey && ew((null == eM ? void 0 : eM.subscriptionPeriodEnd) == null);
    }, [eM, ey]),
        (0, C.Z)(
            "Payment Modal Plan Select Step",
            ev,
            5,
            {
                proratedInvoicePreview: eM,
                proratedInvoiceError: eI,
                isEligibleForOffer: ey,
            },
            { tags: { app_context: "billing" } },
        );
    let eZ = null != (F = null == eI ? void 0 : eI.message) ? F : N.intl.string(N.t.R0RpRU),
        eA = ey && null == eI,
        ek = ey && null != eI,
        eT = eA && null == q && !!ey && (null == eM ? void 0 : eM.subscriptionPeriodEnd) == null,
        eB = !es && (null == eO ? void 0 : eO.skuId) === R.Si.TIER_2 && (null == ej ? void 0 : ej.referrer_id) != null,
        eU = null;
    return ((eU = null != ed ? ed : eB ? (0, r.jsx)(m.Z, {}) : (0, r.jsx)(j.Z, {})), eT)
        ? (0, r.jsx)(I.Z, {})
        : (s()(null != et, "Step should be set"),
          s()(eS.length > 0, "Premium plan options should be set"),
          (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(k.P, { giftMessage: eo }),
                  !(es && (0, y.pO)(ea)) && (0, r.jsx)(M.Z, { isEligibleForTrial: em }),
                  (0, r.jsxs)(Z.C3, {
                      children: [
                          eA && (0, r.jsx)("hr", { className: H.planSelectSeparatorUpper }),
                          eU,
                          (0, r.jsx)(B.Z, {}),
                          (0, r.jsx)(T.Z, {}),
                          ek
                              ? (0, r.jsx)(o.kzN, { children: eZ })
                              : (0, r.jsx)(L.O, {
                                    planOptions: eS,
                                    eligibleForMultiMonthPlans: ef,
                                    referralTrialOfferId: V,
                                    selectedPlanId: null == ee ? void 0 : ee.id,
                                    planGroup: W,
                                    subscriptionPeriodEnd: null == eM ? void 0 : eM.subscriptionPeriodEnd,
                                    discountInvoiceItems: eb ? (null == eM ? void 0 : eM.invoiceItems) : void 0,
                                    useCompactGiftComponents: eu,
                                    handleClose: K,
                                }),
                          eA &&
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)("hr", { className: H.planSelectSeparatorLower }),
                                      (0, r.jsx)(o.Text, {
                                          variant: "text-xs/normal",
                                          children: N.intl.format(N.t.BHtnqK, {
                                              link: S.Z.getArticleURL(U.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                          }),
                                      }),
                                  ],
                              }),
                      ],
                  }),
                  (0, r.jsxs)(Z.O3, {
                      children: [
                          eu && (0, r.jsx)(h.c, {}),
                          (0, r.jsx)(o.mzw, {
                              "data-migration-pending": !0,
                              justify: d.Z.Justify.BETWEEN,
                              align: d.Z.Align.CENTER,
                              className: el,
                              children: (0, r.jsx)(L.y, {
                                  onStepChange: G,
                                  onBackClick: () => G(v.h8.SKU_SELECT),
                                  showBackButton: null == D && null == z,
                                  planOptions: eS,
                                  shouldRenderUpdatedPaymentModal: eA,
                                  isTrial: em,
                              }),
                          }),
                      ],
                  }),
              ],
          }));
}
