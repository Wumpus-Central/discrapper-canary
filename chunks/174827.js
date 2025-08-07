r.d(t, { x: () => G }), r(388685);
var n = r(255367),
    i = r(73800),
    o = r(512722),
    l = r.n(o),
    a = r(399606),
    s = r(481060),
    d = r(975608),
    C = r(600164),
    c = r(711459),
    u = r(374649),
    p = r(717401),
    _ = r(286961),
    f = r(572517),
    m = r(104494),
    x = r(639119),
    h = r(642530),
    j = r(381507),
    L = r(314404),
    b = r(594174),
    g = r(509545),
    y = r(669079),
    S = r(63063),
    E = r(74538),
    v = r(987209),
    I = r(563132),
    w = r(409813),
    O = r(107998),
    P = r(51499),
    M = r(456251),
    T = r(27034),
    Z = r(435020),
    A = r(809144),
    R = r(698708),
    N = r(844068),
    U = r(981631),
    k = r(474936),
    B = r(388032),
    F = r(428523);
function G(e) {
    var t, r, o, G;
    let {
            handleStepChange: H,
            initialPlanId: D,
            planGroup: W,
            subscriptionTier: Y,
            trialId: z,
            referralTrialOfferId: V,
            handleClose: K,
        } = e,
        {
            activeSubscription: q,
            hasFetchedSubscriptions: J,
            paymentSourceId: Q,
            paymentSources: X,
            selectedSkuId: $,
            selectedPlan: ee,
            step: et,
            defaultPlanId: er,
            priceOptions: en,
            isPremium: ei,
            premiumBrandRefreshBackgroundClassName: eo,
        } = (0, I.JL)(),
        { isGift: el, giftRecipient: ea, giftMessage: es, claimableRewards: ed } = (0, v.wD)(),
        { paymentModalBanner: eC } = (0, O.zb)(),
        ec = (0, p.a5)(ee),
        eu = (null == (t = (0, _.Z)()) ? void 0 : t.planSelectionBanner) != null,
        ep = el && ec && null != ed && ed.length > 0 && eu,
        e_ = (0, Z.m)(X, Q),
        { newPlans: ef } = c.ZP.useExperiment({ location: "d17fd6_3" }, { autoTrackExposure: !1 }),
        em = (0, a.e7)([b.default], () => b.default.getCurrentUser()),
        ex =
            !el &&
            null != $ &&
            $ === k.Si.TIER_2 &&
            null != em &&
            em.hasHadPremium() &&
            J &&
            null == q &&
            (0, c.aQ)(e_),
        eh = (0, x.N)(V),
        ej = !el && null != eh && null != $ && k.nG[eh.trial_id].skus.includes($),
        eL = (0, m.Ng)(),
        eb = null == eL || null == (r = eL.discount) ? void 0 : r.plan_ids.some((e) => k.GP[e].skuId === $),
        eg = !el && null != eL && null != $ && eb,
        ey = null != (o = ej || eg) && o,
        eS = i.useMemo(
            () =>
                (0, E.V7)({
                    skuId: $,
                    isPremium: ei,
                    multiMonthPlans: ex ? ef : [],
                    currentSubscription: q,
                    defaultPlanId: er,
                }),
            [$, ei, ef, q, ex, er],
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
        [eP, eM] = (0, u.ED)({
            items: eI,
            renewal: !1,
            preventFetch: !ey,
            applyEntitlements: !0,
            trialId: z,
            paymentSourceId: en.paymentSourceId,
            currency: en.currency,
        });
    i.useEffect(() => {
        ey && eO((null == eP ? void 0 : eP.subscriptionPeriodEnd) == null);
    }, [eP, ey]),
        (0, d.Z)(
            "Payment Modal Plan Select Step",
            ew,
            5,
            {
                proratedInvoicePreview: eP,
                proratedInvoiceError: eM,
                isEligibleForOffer: ey,
            },
            { tags: { app_context: "billing" } },
        );
    let eT = null != (G = null == eM ? void 0 : eM.message) ? G : B.intl.string(B.t.R0RpRU),
        eZ = ey && null == eM,
        eA = ey && null != eM,
        eR = eZ && null == q && !!ey && (null == eP ? void 0 : eP.subscriptionPeriodEnd) == null,
        eN = !el && (null == ev ? void 0 : ev.skuId) === k.Si.TIER_2 && (null == eh ? void 0 : eh.referrer_id) != null,
        eU = null;
    return ((eU = null != eC ? eC : eN ? (0, n.jsx)(j.Z, {}) : (0, n.jsx)(h.Z, {})), eR)
        ? (0, n.jsx)(M.Z, {})
        : (l()(null != et, "Step should be set"),
          l()(eS.length > 0, "Premium plan options should be set"),
          (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(A.P, { giftMessage: es }),
                  !(el && (0, y.pO)(ea)) && (0, n.jsx)(P.Z, { isEligibleForTrial: ej }),
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
                                    referralTrialOfferId: V,
                                    selectedPlanId: null == ee ? void 0 : ee.id,
                                    planGroup: W,
                                    subscriptionPeriodEnd: null == eP ? void 0 : eP.subscriptionPeriodEnd,
                                    discountInvoiceItems: eg ? (null == eP ? void 0 : eP.invoiceItems) : void 0,
                                    useCompactGiftComponents: ep,
                                    handleClose: K,
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
                              className: eo,
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
