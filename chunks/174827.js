n.d(t, { x: () => G }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(512722),
    l = n.n(a),
    s = n(399606),
    o = n(481060),
    d = n(975608),
    c = n(600164),
    C = n(711459),
    u = n(374649),
    p = n(347896),
    h = n(717401),
    _ = n(572517),
    m = n(104494),
    f = n(639119),
    x = n(642530),
    g = n(381507),
    j = n(314404),
    b = n(594174),
    v = n(509545),
    S = n(669079),
    L = n(63063),
    y = n(74538),
    I = n(987209),
    w = n(563132),
    P = n(409813),
    E = n(107998),
    O = n(51499),
    T = n(456251),
    k = n(614277),
    N = n(435020),
    A = n(809144),
    Z = n(698708),
    M = n(844068),
    R = n(981631),
    B = n(474936),
    F = n(388032),
    H = n(833271);
function G(e) {
    var t, n, a, G;
    let {
            handleStepChange: U,
            initialPlanId: D,
            planGroup: z,
            subscriptionTier: W,
            trialId: K,
            referralTrialOfferId: V,
            handleClose: Y,
        } = e,
        {
            activeSubscription: q,
            hasFetchedSubscriptions: J,
            paymentSourceId: Q,
            paymentSources: X,
            selectedSkuId: $,
            selectedPlan: ee,
            step: et,
            defaultPlanId: en,
            priceOptions: er,
            isPremium: ei,
            premiumBrandRefreshBackgroundClassName: ea,
        } = (0, w.JL)(),
        { isGift: el, giftRecipient: es, giftMessage: eo, claimableRewards: ed } = (0, I.wD)(),
        { paymentModalBanner: ec } = (0, E.zb)(),
        eC = (0, h.a5)(ee),
        eu = (null == (t = (0, p.Z)()) ? void 0 : t.planSelectionBanner) != null,
        ep = el && eC && null != ed && ed.length > 0 && eu,
        eh = (0, N.m)(X, Q),
        { newPlans: e_ } = C.ZP.useExperiment({ location: "d17fd6_3" }, { autoTrackExposure: !1 }),
        em = (0, s.e7)([b.default], () => b.default.getCurrentUser()),
        ef =
            !el &&
            null != $ &&
            $ === B.Si.TIER_2 &&
            null != em &&
            em.hasHadPremium() &&
            J &&
            null == q &&
            (0, C.aQ)(eh),
        ex = (0, f.N)(V),
        eg = !el && null != ex && null != $ && B.nG[ex.trial_id].skus.includes($),
        ej = (0, m.Ng)(),
        eb = null == ej || null == (n = ej.discount) ? void 0 : n.plan_ids.some((e) => B.GP[e].skuId === $),
        ev = !el && null != ej && null != $ && eb,
        eS = null != (a = eg || ev) && a,
        eL = i.useMemo(
            () =>
                (0, y.V7)({
                    skuId: $,
                    isPremium: ei,
                    multiMonthPlans: ef ? e_ : [],
                    currentSubscription: q,
                    defaultPlanId: en,
                }),
            [$, ei, e_, q, ef, en],
        ),
        ey = ev && eL.includes(B.Xh.PREMIUM_MONTH_TIER_2) ? B.Xh.PREMIUM_MONTH_TIER_2 : eL[0],
        eI = (0, s.e7)([v.Z], () => v.Z.get(ey)),
        ew = [
            {
                planId: null == eI ? void 0 : eI.id,
                quantity: 1,
            },
        ],
        [eP, eE] = i.useState(eS),
        [eO, eT] = (0, u.ED)({
            items: ew,
            renewal: !1,
            preventFetch: !eS,
            applyEntitlements: !0,
            trialId: K,
            paymentSourceId: er.paymentSourceId,
            currency: er.currency,
        });
    i.useEffect(() => {
        eS && eE((null == eO ? void 0 : eO.subscriptionPeriodEnd) == null);
    }, [eO, eS]),
        (0, d.Z)(
            "Payment Modal Plan Select Step",
            eP,
            5,
            {
                proratedInvoicePreview: eO,
                proratedInvoiceError: eT,
                isEligibleForOffer: eS,
            },
            { tags: { app_context: "billing" } },
        );
    let ek = null != (G = null == eT ? void 0 : eT.message) ? G : F.intl.string(F.t.R0RpRU),
        eN = eS && null == eT,
        eA = eS && null != eT,
        eZ = eN && null == q && !!eS && (null == eO ? void 0 : eO.subscriptionPeriodEnd) == null,
        eM = !el && (null == eI ? void 0 : eI.skuId) === B.Si.TIER_2 && (null == ex ? void 0 : ex.referrer_id) != null,
        eR = null;
    return ((eR = null != ec ? ec : eM ? (0, r.jsx)(g.Z, {}) : (0, r.jsx)(x.Z, {})), eZ)
        ? (0, r.jsx)(T.Z, {})
        : (l()(null != et, "Step should be set"),
          l()(eL.length > 0, "Premium plan options should be set"),
          (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(A.P, { giftMessage: eo }),
                  !(el && (0, S.pO)(es)) && (0, r.jsx)(O.Z, { isEligibleForTrial: eg }),
                  (0, r.jsxs)(k.C3, {
                      children: [
                          eN && (0, r.jsx)("hr", { className: H.planSelectSeparatorUpper }),
                          eR,
                          (0, r.jsx)(M.Z, {}),
                          (0, r.jsx)(Z.Z, {}),
                          eA
                              ? (0, r.jsx)(o.M14, {
                                    type: "critical",
                                    children: ek,
                                })
                              : (0, r.jsx)(j.O, {
                                    planOptions: eL,
                                    eligibleForMultiMonthPlans: ef,
                                    referralTrialOfferId: V,
                                    selectedPlanId: null == ee ? void 0 : ee.id,
                                    planGroup: z,
                                    subscriptionPeriodEnd: null == eO ? void 0 : eO.subscriptionPeriodEnd,
                                    discountInvoiceItems: ev ? (null == eO ? void 0 : eO.invoiceItems) : void 0,
                                    useCompactGiftComponents: ep,
                                    handleClose: Y,
                                }),
                          eN &&
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)("hr", { className: H.planSelectSeparatorLower }),
                                      (0, r.jsx)(o.Text, {
                                          variant: "text-xs/normal",
                                          children: F.intl.format(F.t.BHtnqK, {
                                              link: L.Z.getArticleURL(R.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                          }),
                                      }),
                                  ],
                              }),
                      ],
                  }),
                  (0, r.jsxs)(k.O3, {
                      children: [
                          ep && (0, r.jsx)(_.c, {}),
                          (0, r.jsx)(o.mzw, {
                              "data-migration-pending": !0,
                              justify: c.Z.Justify.BETWEEN,
                              align: c.Z.Align.CENTER,
                              className: ea,
                              children: (0, r.jsx)(j.y, {
                                  onStepChange: U,
                                  onBackClick: () => U(P.h8.SKU_SELECT),
                                  showBackButton: null == D && null == W,
                                  planOptions: eL,
                                  shouldRenderUpdatedPaymentModal: eN,
                                  isTrial: eg,
                              }),
                          }),
                      ],
                  }),
              ],
          }));
}
