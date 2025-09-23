n.d(t, { x: () => G }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(512722),
    o = n.n(l),
    a = n(399606),
    s = n(481060),
    C = n(975608),
    d = n(600164),
    c = n(711459),
    u = n(374649),
    p = n(347896),
    _ = n(717401),
    h = n(572517),
    f = n(104494),
    x = n(639119),
    m = n(642530),
    j = n(381507),
    b = n(314404),
    g = n(657517),
    L = n(594174),
    y = n(509545),
    S = n(669079),
    v = n(63063),
    E = n(74538),
    O = n(987209),
    I = n(563132),
    P = n(409813),
    w = n(107998),
    k = n(51499),
    M = n(456251),
    T = n(614277),
    A = n(435020),
    Z = n(809144),
    N = n(698708),
    F = n(844068),
    R = n(981631),
    B = n(474936),
    U = n(388032),
    H = n(649662);
function G(e) {
    var t, n, l, G;
    let {
            handleStepChange: D,
            initialPlanId: Y,
            planGroup: z,
            subscriptionTier: K,
            trialId: W,
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
            premiumBrandRefreshBackgroundClassName: eo,
            shouldShowSeptemberMarketingMomentBanner: ea,
        } = (0, I.JL)(),
        { isGift: es, giftRecipient: eC, giftMessage: ed, claimableRewards: ec } = (0, O.wD)(),
        { paymentModalBanner: eu } = (0, w.zb)(),
        ep = (0, _.a5)(et),
        e_ = (null == (t = (0, p.Z)()) ? void 0 : t.planSelectionBanner) != null,
        eh = es && ep && null != ec && ec.length > 0 && e_,
        ef = (0, A.m)($, X),
        { newPlans: ex } = c.ZP.useExperiment({ location: "d17fd6_3" }, { autoTrackExposure: !1 }),
        em = (0, a.e7)([L.default], () => L.default.getCurrentUser()),
        ej =
            !es &&
            null != ee &&
            ee === B.Si.TIER_2 &&
            null != em &&
            em.hasHadPremium() &&
            Q &&
            null == J &&
            (0, c.aQ)(ef),
        eb = (0, x.N)(V),
        eg = !es && null != eb && null != ee && B.nG[eb.trial_id].skus.includes(ee),
        eL = (0, f.Ng)(),
        ey = null == eL || null == (n = eL.discount) ? void 0 : n.plan_ids.some((e) => B.GP[e].skuId === ee),
        eS = !es && null != eL && null != ee && ey,
        ev = null != (l = eg || eS) && l,
        eE = i.useMemo(
            () =>
                (0, E.V7)({
                    skuId: ee,
                    isPremium: el,
                    multiMonthPlans: ej ? ex : [],
                    currentSubscription: J,
                    defaultPlanId: er,
                }),
            [ee, el, ex, J, ej, er],
        ),
        eO = eS && eE.includes(B.Xh.PREMIUM_MONTH_TIER_2) ? B.Xh.PREMIUM_MONTH_TIER_2 : eE[0],
        eI = (0, a.e7)([y.Z], () => y.Z.get(eO)),
        eP = [
            {
                planId: null == eI ? void 0 : eI.id,
                quantity: 1,
            },
        ],
        [ew, ek] = i.useState(ev),
        [eM, eT] = (0, u.ED)({
            items: eP,
            renewal: !1,
            preventFetch: !ev,
            applyEntitlements: !0,
            trialId: W,
            paymentSourceId: ei.paymentSourceId,
            currency: ei.currency,
        });
    i.useEffect(() => {
        ev && ek((null == eM ? void 0 : eM.subscriptionPeriodEnd) == null);
    }, [eM, ev]),
        (0, C.Z)(
            "Payment Modal Plan Select Step",
            ew,
            5,
            {
                proratedInvoicePreview: eM,
                proratedInvoiceError: eT,
                isEligibleForOffer: ev,
            },
            { tags: { app_context: "billing" } },
        );
    let eA = null != (G = null == eT ? void 0 : eT.message) ? G : U.intl.string(U.t.R0RpRU),
        eZ = ev && null == eT,
        eN = ev && null != eT,
        eF = eZ && null == J && !!ev && (null == eM ? void 0 : eM.subscriptionPeriodEnd) == null,
        eR = !es && (null == eI ? void 0 : eI.skuId) === B.Si.TIER_2 && (null == eb ? void 0 : eb.referrer_id) != null,
        eB = null;
    return ((eB = null != eu ? eu : eR ? (0, r.jsx)(j.Z, {}) : (0, r.jsx)(m.Z, {})), eF)
        ? (0, r.jsx)(M.Z, {})
        : (o()(null != en, "Step should be set"),
          o()(eE.length > 0, "Premium plan options should be set"),
          (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(Z.P, { giftMessage: ed }),
                  !(es && (0, S.pO)(eC)) && (0, r.jsx)(k.Z, { isEligibleForTrial: eg }),
                  (0, r.jsxs)(T.C3, {
                      children: [
                          eZ && (0, r.jsx)("hr", { className: H.planSelectSeparatorUpper }),
                          eB,
                          !0 === ea && (0, r.jsx)(g.Y, {}),
                          (0, r.jsx)(F.Z, {}),
                          (0, r.jsx)(N.Z, {}),
                          eN
                              ? (0, r.jsx)(s.kzN, { children: eA })
                              : (0, r.jsx)(b.O, {
                                    planOptions: eE,
                                    eligibleForMultiMonthPlans: ej,
                                    referralTrialOfferId: V,
                                    selectedPlanId: null == et ? void 0 : et.id,
                                    planGroup: z,
                                    subscriptionPeriodEnd: null == eM ? void 0 : eM.subscriptionPeriodEnd,
                                    discountInvoiceItems: eS ? (null == eM ? void 0 : eM.invoiceItems) : void 0,
                                    useCompactGiftComponents: eh,
                                    handleClose: q,
                                }),
                          eZ &&
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)("hr", { className: H.planSelectSeparatorLower }),
                                      (0, r.jsx)(s.Text, {
                                          variant: "text-xs/normal",
                                          children: U.intl.format(U.t.BHtnqK, {
                                              link: v.Z.getArticleURL(R.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                          }),
                                      }),
                                  ],
                              }),
                      ],
                  }),
                  (0, r.jsxs)(T.O3, {
                      children: [
                          eh && (0, r.jsx)(h.c, {}),
                          (0, r.jsx)(s.mzw, {
                              "data-migration-pending": !0,
                              justify: d.Z.Justify.BETWEEN,
                              align: d.Z.Align.CENTER,
                              className: eo,
                              children: (0, r.jsx)(b.y, {
                                  onStepChange: D,
                                  onBackClick: () => D(P.h8.SKU_SELECT),
                                  showBackButton: null == Y && null == K,
                                  planOptions: eE,
                                  shouldRenderUpdatedPaymentModal: eZ,
                                  isTrial: eg,
                              }),
                          }),
                      ],
                  }),
              ],
          }));
}
