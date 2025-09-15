n.d(t, { x: () => G }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(512722),
    a = n.n(l),
    s = n(399606),
    o = n(481060),
    C = n(975608),
    d = n(600164),
    c = n(711459),
    u = n(374649),
    p = n(347896),
    x = n(717401),
    _ = n(572517),
    h = n(104494),
    f = n(639119),
    m = n(642530),
    j = n(381507),
    L = n(314404),
    b = n(657517),
    g = n(594174),
    S = n(509545),
    y = n(669079),
    v = n(63063),
    E = n(74538),
    O = n(987209),
    P = n(563132),
    M = n(409813),
    w = n(107998),
    k = n(51499),
    A = n(456251),
    T = n(27034),
    I = n(435020),
    Z = n(809144),
    N = n(698708),
    B = n(844068),
    R = n(981631),
    U = n(474936),
    H = n(388032),
    F = n(833271);
function G(e) {
    var t, n, l, G;
    let {
            handleStepChange: D,
            initialPlanId: K,
            planGroup: z,
            subscriptionTier: W,
            trialId: Y,
            referralTrialOfferId: V,
            handleClose: q,
        } = e,
        {
            activeSubscription: J,
            hasFetchedSubscriptions: Q,
            paymentSourceId: X,
            paymentSources: $,
            selectedSkuId: ee,
            selectedPlan: et,
            step: en,
            defaultPlanId: er,
            priceOptions: ei,
            isPremium: el,
            premiumBrandRefreshBackgroundClassName: ea,
            shouldShowSeptemberMarketingMomentBanner: es,
        } = (0, P.JL)(),
        { isGift: eo, giftRecipient: eC, giftMessage: ed, claimableRewards: ec } = (0, O.wD)(),
        { paymentModalBanner: eu } = (0, w.zb)(),
        ep = (0, x.a5)(et),
        ex = (null == (t = (0, p.Z)()) ? void 0 : t.planSelectionBanner) != null,
        e_ = eo && ep && null != ec && ec.length > 0 && ex,
        eh = (0, I.m)($, X),
        { newPlans: ef } = c.ZP.useExperiment({ location: "d17fd6_3" }, { autoTrackExposure: !1 }),
        em = (0, s.e7)([g.default], () => g.default.getCurrentUser()),
        ej =
            !eo &&
            null != ee &&
            ee === U.Si.TIER_2 &&
            null != em &&
            em.hasHadPremium() &&
            Q &&
            null == J &&
            (0, c.aQ)(eh),
        eL = (0, f.N)(V),
        eb = !eo && null != eL && null != ee && U.nG[eL.trial_id].skus.includes(ee),
        eg = (0, h.Ng)(),
        eS = null == eg || null == (n = eg.discount) ? void 0 : n.plan_ids.some((e) => U.GP[e].skuId === ee),
        ey = !eo && null != eg && null != ee && eS,
        ev = null != (l = eb || ey) && l,
        eE = i.useMemo(
            () =>
                (0, E.V7)({
                    skuId: ee,
                    isPremium: el,
                    multiMonthPlans: ej ? ef : [],
                    currentSubscription: J,
                    defaultPlanId: er,
                }),
            [ee, el, ef, J, ej, er],
        ),
        eO = ey && eE.includes(U.Xh.PREMIUM_MONTH_TIER_2) ? U.Xh.PREMIUM_MONTH_TIER_2 : eE[0],
        eP = (0, s.e7)([S.Z], () => S.Z.get(eO)),
        eM = [
            {
                planId: null == eP ? void 0 : eP.id,
                quantity: 1,
            },
        ],
        [ew, ek] = i.useState(ev),
        [eA, eT] = (0, u.ED)({
            items: eM,
            renewal: !1,
            preventFetch: !ev,
            applyEntitlements: !0,
            trialId: Y,
            paymentSourceId: ei.paymentSourceId,
            currency: ei.currency,
        });
    i.useEffect(() => {
        ev && ek((null == eA ? void 0 : eA.subscriptionPeriodEnd) == null);
    }, [eA, ev]),
        (0, C.Z)(
            "Payment Modal Plan Select Step",
            ew,
            5,
            {
                proratedInvoicePreview: eA,
                proratedInvoiceError: eT,
                isEligibleForOffer: ev,
            },
            { tags: { app_context: "billing" } },
        );
    let eI = null != (G = null == eT ? void 0 : eT.message) ? G : H.intl.string(H.t.R0RpRU),
        eZ = ev && null == eT,
        eN = ev && null != eT,
        eB = eZ && null == J && !!ev && (null == eA ? void 0 : eA.subscriptionPeriodEnd) == null,
        eR = !eo && (null == eP ? void 0 : eP.skuId) === U.Si.TIER_2 && (null == eL ? void 0 : eL.referrer_id) != null,
        eU = null;
    return ((eU = null != eu ? eu : eR ? (0, r.jsx)(j.Z, {}) : (0, r.jsx)(m.Z, {})), eB)
        ? (0, r.jsx)(A.Z, {})
        : (a()(null != en, "Step should be set"),
          a()(eE.length > 0, "Premium plan options should be set"),
          (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(Z.P, { giftMessage: ed }),
                  !(eo && (0, y.pO)(eC)) && (0, r.jsx)(k.Z, { isEligibleForTrial: eb }),
                  (0, r.jsxs)(T.C3, {
                      children: [
                          eZ && (0, r.jsx)("hr", { className: F.planSelectSeparatorUpper }),
                          eU,
                          !0 === es && (0, r.jsx)(b.Y, {}),
                          (0, r.jsx)(B.Z, {}),
                          (0, r.jsx)(N.Z, {}),
                          eN
                              ? (0, r.jsx)(o.kzN, { children: eI })
                              : (0, r.jsx)(L.O, {
                                    planOptions: eE,
                                    eligibleForMultiMonthPlans: ej,
                                    referralTrialOfferId: V,
                                    selectedPlanId: null == et ? void 0 : et.id,
                                    planGroup: z,
                                    subscriptionPeriodEnd: null == eA ? void 0 : eA.subscriptionPeriodEnd,
                                    discountInvoiceItems: ey ? (null == eA ? void 0 : eA.invoiceItems) : void 0,
                                    useCompactGiftComponents: e_,
                                    handleClose: q,
                                }),
                          eZ &&
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)("hr", { className: F.planSelectSeparatorLower }),
                                      (0, r.jsx)(o.Text, {
                                          variant: "text-xs/normal",
                                          children: H.intl.format(H.t.BHtnqK, {
                                              link: v.Z.getArticleURL(R.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                          }),
                                      }),
                                  ],
                              }),
                      ],
                  }),
                  (0, r.jsxs)(T.O3, {
                      children: [
                          e_ && (0, r.jsx)(_.c, {}),
                          (0, r.jsx)(o.mzw, {
                              "data-migration-pending": !0,
                              justify: d.Z.Justify.BETWEEN,
                              align: d.Z.Align.CENTER,
                              className: ea,
                              children: (0, r.jsx)(L.y, {
                                  onStepChange: D,
                                  onBackClick: () => D(M.h8.SKU_SELECT),
                                  showBackButton: null == K && null == W,
                                  planOptions: eE,
                                  shouldRenderUpdatedPaymentModal: eZ,
                                  isTrial: eb,
                              }),
                          }),
                      ],
                  }),
              ],
          }));
}
