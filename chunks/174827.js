n.d(t, { x: () => F }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(512722),
    a = n.n(l),
    s = n(399606),
    o = n(481060),
    C = n(975608),
    d = n(600164),
    c = n(711459),
    p = n(374649),
    u = n(347896),
    x = n(717401),
    f = n(572517),
    h = n(104494),
    _ = n(639119),
    j = n(642530),
    m = n(381507),
    L = n(314404),
    b = n(594174),
    g = n(509545),
    y = n(669079),
    S = n(63063),
    v = n(74538),
    E = n(987209),
    O = n(563132),
    P = n(409813),
    w = n(107998),
    I = n(51499),
    Z = n(456251),
    M = n(27034),
    A = n(435020),
    k = n(809144),
    T = n(698708),
    B = n(844068),
    R = n(981631),
    U = n(474936),
    N = n(388032),
    H = n(833271);
function F(e) {
    var t, n, l, F;
    let {
            handleStepChange: G,
            initialPlanId: D,
            planGroup: z,
            subscriptionTier: W,
            trialId: Y,
            referralTrialOfferId: V,
            handleClose: K,
        } = e,
        {
            activeSubscription: q,
            hasFetchedSubscriptions: X,
            paymentSourceId: J,
            paymentSources: Q,
            selectedSkuId: $,
            selectedPlan: ee,
            step: et,
            defaultPlanId: en,
            priceOptions: er,
            isPremium: ei,
            premiumBrandRefreshBackgroundClassName: el,
        } = (0, O.JL)(),
        { isGift: ea, giftRecipient: es, giftMessage: eo, claimableRewards: eC } = (0, E.wD)(),
        { paymentModalBanner: ed } = (0, w.zb)(),
        ec = (0, x.a5)(ee),
        ep = (null == (t = (0, u.Z)()) ? void 0 : t.planSelectionBanner) != null,
        eu = ea && ec && null != eC && eC.length > 0 && ep,
        ex = (0, A.m)(Q, J),
        { newPlans: ef } = c.ZP.useExperiment({ location: "d17fd6_3" }, { autoTrackExposure: !1 }),
        eh = (0, s.e7)([b.default], () => b.default.getCurrentUser()),
        e_ =
            !ea &&
            null != $ &&
            $ === U.Si.TIER_2 &&
            null != eh &&
            eh.hasHadPremium() &&
            X &&
            null == q &&
            (0, c.aQ)(ex),
        ej = (0, _.N)(V),
        em = !ea && null != ej && null != $ && U.nG[ej.trial_id].skus.includes($),
        eL = (0, h.Ng)(),
        eb = null == eL || null == (n = eL.discount) ? void 0 : n.plan_ids.some((e) => U.GP[e].skuId === $),
        eg = !ea && null != eL && null != $ && eb,
        ey = null != (l = em || eg) && l,
        eS = i.useMemo(
            () =>
                (0, v.V7)({
                    skuId: $,
                    isPremium: ei,
                    multiMonthPlans: e_ ? ef : [],
                    currentSubscription: q,
                    defaultPlanId: en,
                }),
            [$, ei, ef, q, e_, en],
        ),
        ev = eg && eS.includes(U.Xh.PREMIUM_MONTH_TIER_2) ? U.Xh.PREMIUM_MONTH_TIER_2 : eS[0],
        eE = (0, s.e7)([g.Z], () => g.Z.get(ev)),
        eO = [
            {
                planId: null == eE ? void 0 : eE.id,
                quantity: 1,
            },
        ],
        [eP, ew] = i.useState(ey),
        [eI, eZ] = (0, p.ED)({
            items: eO,
            renewal: !1,
            preventFetch: !ey,
            applyEntitlements: !0,
            trialId: Y,
            paymentSourceId: er.paymentSourceId,
            currency: er.currency,
        });
    i.useEffect(() => {
        ey && ew((null == eI ? void 0 : eI.subscriptionPeriodEnd) == null);
    }, [eI, ey]),
        (0, C.Z)(
            "Payment Modal Plan Select Step",
            eP,
            5,
            {
                proratedInvoicePreview: eI,
                proratedInvoiceError: eZ,
                isEligibleForOffer: ey,
            },
            { tags: { app_context: "billing" } },
        );
    let eM = null != (F = null == eZ ? void 0 : eZ.message) ? F : N.intl.string(N.t.R0RpRU),
        eA = ey && null == eZ,
        ek = ey && null != eZ,
        eT = eA && null == q && !!ey && (null == eI ? void 0 : eI.subscriptionPeriodEnd) == null,
        eB = !ea && (null == eE ? void 0 : eE.skuId) === U.Si.TIER_2 && (null == ej ? void 0 : ej.referrer_id) != null,
        eR = null;
    return ((eR = null != ed ? ed : eB ? (0, r.jsx)(m.Z, {}) : (0, r.jsx)(j.Z, {})), eT)
        ? (0, r.jsx)(Z.Z, {})
        : (a()(null != et, "Step should be set"),
          a()(eS.length > 0, "Premium plan options should be set"),
          (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(k.P, { giftMessage: eo }),
                  !(ea && (0, y.pO)(es)) && (0, r.jsx)(I.Z, { isEligibleForTrial: em }),
                  (0, r.jsxs)(M.C3, {
                      children: [
                          eA && (0, r.jsx)("hr", { className: H.planSelectSeparatorUpper }),
                          eR,
                          (0, r.jsx)(B.Z, {}),
                          (0, r.jsx)(T.Z, {}),
                          ek
                              ? (0, r.jsx)(o.kzN, { children: eM })
                              : (0, r.jsx)(L.O, {
                                    planOptions: eS,
                                    eligibleForMultiMonthPlans: e_,
                                    referralTrialOfferId: V,
                                    selectedPlanId: null == ee ? void 0 : ee.id,
                                    planGroup: z,
                                    subscriptionPeriodEnd: null == eI ? void 0 : eI.subscriptionPeriodEnd,
                                    discountInvoiceItems: eg ? (null == eI ? void 0 : eI.invoiceItems) : void 0,
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
                                              link: S.Z.getArticleURL(R.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                          }),
                                      }),
                                  ],
                              }),
                      ],
                  }),
                  (0, r.jsxs)(M.O3, {
                      children: [
                          eu && (0, r.jsx)(f.c, {}),
                          (0, r.jsx)(o.mzw, {
                              "data-migration-pending": !0,
                              justify: d.Z.Justify.BETWEEN,
                              align: d.Z.Align.CENTER,
                              className: el,
                              children: (0, r.jsx)(L.y, {
                                  onStepChange: G,
                                  onBackClick: () => G(P.h8.SKU_SELECT),
                                  showBackButton: null == D && null == W,
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
