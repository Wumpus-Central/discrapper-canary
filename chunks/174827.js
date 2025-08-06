t.d(r, { x: () => G }), t(388685);
var n = t(255367),
    i = t(73800),
    l = t(512722),
    o = t.n(l),
    a = t(399606),
    s = t(481060),
    d = t(975608),
    C = t(600164),
    c = t(711459),
    u = t(374649),
    p = t(717401),
    _ = t(286961),
    f = t(572517),
    m = t(104494),
    x = t(639119),
    h = t(642530),
    j = t(381507),
    L = t(314404),
    b = t(594174),
    g = t(509545),
    y = t(669079),
    S = t(63063),
    E = t(74538),
    v = t(987209),
    I = t(563132),
    w = t(409813),
    O = t(107998),
    M = t(51499),
    P = t(456251),
    T = t(27034),
    Z = t(435020),
    A = t(809144),
    R = t(698708),
    N = t(844068),
    U = t(981631),
    k = t(474936),
    B = t(388032),
    F = t(428523);
function G(e) {
    var r, t, l, G;
    let {
            handleStepChange: H,
            initialPlanId: D,
            planGroup: W,
            subscriptionTier: Y,
            trialId: z,
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
            defaultPlanId: et,
            priceOptions: en,
            isPremium: ei,
            premiumBrandRefreshBackgroundClassName: el,
        } = (0, I.JL)(),
        { isGift: eo, giftRecipient: ea, giftMessage: es, claimableRewards: ed } = (0, v.wD)(),
        { paymentModalBanner: eC } = (0, O.zb)(),
        ec = (0, p.a5)(ee),
        eu = (null == (r = (0, _.Z)()) ? void 0 : r.planSelectionBanner) != null,
        ep = eo && ec && null != ed && ed.length > 0 && eu,
        e_ = (0, Z.m)(X, Q),
        { newPlans: ef } = c.ZP.useExperiment({ location: "d17fd6_3" }, { autoTrackExposure: !1 }),
        em = (0, a.e7)([b.default], () => b.default.getCurrentUser()),
        ex =
            !eo &&
            null != $ &&
            $ === k.Si.TIER_2 &&
            null != em &&
            em.hasHadPremium() &&
            J &&
            null == q &&
            (0, c.aQ)(e_),
        eh = (0, x.N)(K),
        ej = !eo && null != eh && null != $ && k.nG[eh.trial_id].skus.includes($),
        eL = (0, m.Ng)(),
        eb = null == eL || null == (t = eL.discount) ? void 0 : t.plan_ids.some((e) => k.GP[e].skuId === $),
        eg = !eo && null != eL && null != $ && eb,
        ey = null != (l = ej || eg) && l,
        eS = i.useMemo(
            () =>
                (0, E.V7)({
                    skuId: $,
                    isPremium: ei,
                    multiMonthPlans: ex ? ef : [],
                    currentSubscription: q,
                    defaultPlanId: et,
                }),
            [$, ei, ef, q, ex, et],
        ),
        eE = eg && eS.includes(k.Xh.PREMIUM_MONTH_TIER_2) ? k.Xh.PREMIUM_MONTH_TIER_2 : eS[0],
        ev = (0, a.e7)([g.Z], () => g.Z.get(eE)),
        eI = [
            {
                planId: null == ev ? void 0 : ev.id,
                quantity: 1,
            },
        ],
        [ew, eO] = i.useState(ey),
        [eM, eP] = (0, u.ED)({
            items: eI,
            renewal: !1,
            preventFetch: !ey,
            applyEntitlements: !0,
            trialId: z,
            paymentSourceId: en.paymentSourceId,
            currency: en.currency,
        });
    i.useEffect(() => {
        ey && eO((null == eM ? void 0 : eM.subscriptionPeriodEnd) == null);
    }, [eM, ey]),
        (0, d.Z)(
            "Payment Modal Plan Select Step",
            ew,
            5,
            {
                proratedInvoicePreview: eM,
                proratedInvoiceError: eP,
                isEligibleForOffer: ey,
            },
            { tags: { app_context: "billing" } },
        );
    let eT = null != (G = null == eP ? void 0 : eP.message) ? G : B.intl.string(B.t.R0RpRU),
        eZ = ey && null == eP,
        eA = ey && null != eP,
        eR = eZ && null == q && !!ey && (null == eM ? void 0 : eM.subscriptionPeriodEnd) == null,
        eN = !eo && (null == ev ? void 0 : ev.skuId) === k.Si.TIER_2 && (null == eh ? void 0 : eh.referrer_id) != null,
        eU = null;
    return ((eU = null != eC ? eC : eN ? (0, n.jsx)(j.Z, {}) : (0, n.jsx)(h.Z, {})), eR)
        ? (0, n.jsx)(P.Z, {})
        : (o()(null != er, "Step should be set"),
          o()(eS.length > 0, "Premium plan options should be set"),
          (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(A.P, { giftMessage: es }),
                  !(eo && (0, y.pO)(ea)) && (0, n.jsx)(M.Z, { isEligibleForTrial: ej }),
                  (0, n.jsxs)(T.C3, {
                      children: [
                          eZ && (0, n.jsx)("hr", { className: F.planSelectSeparatorUpper }),
                          eU,
                          (0, n.jsx)(N.Z, {}),
                          (0, n.jsx)(R.Z, {}),
                          eA
                              ? (0, n.jsx)(s.kzN, { children: eT })
                              : (0, n.jsx)(L.O, {
                                    planOptions: eS,
                                    eligibleForMultiMonthPlans: ex,
                                    referralTrialOfferId: K,
                                    selectedPlanId: null == ee ? void 0 : ee.id,
                                    planGroup: W,
                                    subscriptionPeriodEnd: null == eM ? void 0 : eM.subscriptionPeriodEnd,
                                    discountInvoiceItems: eg ? (null == eM ? void 0 : eM.invoiceItems) : void 0,
                                    useCompactGiftComponents: ep,
                                    handleClose: V,
                                }),
                          eZ &&
                              (0, n.jsxs)(n.Fragment, {
                                  children: [
                                      (0, n.jsx)("hr", { className: F.planSelectSeparatorLower }),
                                      (0, n.jsx)(s.Text, {
                                          variant: "text-xs/normal",
                                          children: B.intl.format(B.t.BHtnqK, {
                                              link: S.Z.getArticleURL(U.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                          }),
                                      }),
                                  ],
                              }),
                      ],
                  }),
                  (0, n.jsxs)(T.O3, {
                      children: [
                          ep && (0, n.jsx)(f.c, {}),
                          (0, n.jsx)(s.mzw, {
                              "data-migration-pending": !0,
                              justify: C.Z.Justify.BETWEEN,
                              align: C.Z.Align.CENTER,
                              className: el,
                              children: (0, n.jsx)(L.y, {
                                  onStepChange: H,
                                  onBackClick: () => H(w.h8.SKU_SELECT),
                                  showBackButton: null == D && null == Y,
                                  planOptions: eS,
                                  shouldRenderUpdatedPaymentModal: eZ,
                                  isTrial: ej,
                              }),
                          }),
                      ],
                  }),
              ],
          }));
}
