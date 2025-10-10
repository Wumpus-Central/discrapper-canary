n.d(t, { x: () => U }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(512722),
    l = n.n(a),
    o = n(399606),
    s = n(481060),
    d = n(975608),
    C = n(600164),
    c = n(711459),
    u = n(374649),
    p = n(347896),
    _ = n(717401),
    f = n(572517),
    h = n(104494),
    m = n(639119),
    x = n(642530),
    j = n(381507),
    g = n(314404),
    b = n(594174),
    y = n(509545),
    L = n(669079),
    v = n(63063),
    S = n(74538),
    O = n(987209),
    P = n(563132),
    E = n(409813),
    w = n(107998),
    I = n(51499),
    k = n(456251),
    T = n(614277),
    M = n(435020),
    A = n(809144),
    Z = n(698708),
    N = n(844068),
    R = n(981631),
    B = n(474936),
    F = n(388032),
    G = n(833271);
function U(e) {
    var t, n, a, U;
    let {
            handleStepChange: H,
            initialPlanId: D,
            planGroup: z,
            subscriptionTier: K,
            trialId: W,
            referralTrialOfferId: Y,
            handleClose: V,
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
            premiumBrandRefreshBackgroundClassName: ea,
        } = (0, P.JL)(),
        { isGift: el, giftRecipient: eo, giftMessage: es, claimableRewards: ed } = (0, O.wD)(),
        { paymentModalBanner: eC } = (0, w.zb)(),
        ec = (0, _.a5)(ee),
        eu = (null == (t = (0, p.Z)()) ? void 0 : t.planSelectionBanner) != null,
        ep = el && ec && null != ed && ed.length > 0 && eu,
        e_ = (0, M.m)(Q, X),
        { newPlans: ef } = c.ZP.useExperiment({ location: "d17fd6_3" }, { autoTrackExposure: !1 }),
        eh = (0, o.e7)([b.default], () => b.default.getCurrentUser()),
        em =
            !el &&
            null != $ &&
            $ === B.Si.TIER_2 &&
            null != eh &&
            eh.hasHadPremium() &&
            J &&
            null == q &&
            (0, c.aQ)(e_),
        ex = (0, m.N)(Y),
        ej = !el && null != ex && null != $ && B.nG[ex.trial_id].skus.includes($),
        eg = (0, h.Ng)(),
        eb = null == eg || null == (n = eg.discount) ? void 0 : n.plan_ids.some((e) => B.GP[e].skuId === $),
        ey = !el && null != eg && null != $ && eb,
        eL = null != (a = ej || ey) && a,
        ev = i.useMemo(
            () =>
                (0, S.V7)({
                    skuId: $,
                    isPremium: ei,
                    multiMonthPlans: em ? ef : [],
                    currentSubscription: q,
                    defaultPlanId: en,
                }),
            [$, ei, ef, q, em, en],
        ),
        eS = ey && ev.includes(B.Xh.PREMIUM_MONTH_TIER_2) ? B.Xh.PREMIUM_MONTH_TIER_2 : ev[0],
        eO = (0, o.e7)([y.Z], () => y.Z.get(eS)),
        eP = [
            {
                planId: null == eO ? void 0 : eO.id,
                quantity: 1,
            },
        ],
        [eE, ew] = i.useState(eL),
        [eI, ek] = (0, u.ED)({
            items: eP,
            renewal: !1,
            preventFetch: !eL,
            applyEntitlements: !0,
            trialId: W,
            paymentSourceId: er.paymentSourceId,
            currency: er.currency,
        });
    i.useEffect(() => {
        eL && ew((null == eI ? void 0 : eI.subscriptionPeriodEnd) == null);
    }, [eI, eL]),
        (0, d.Z)(
            "Payment Modal Plan Select Step",
            eE,
            5,
            {
                proratedInvoicePreview: eI,
                proratedInvoiceError: ek,
                isEligibleForOffer: eL,
            },
            { tags: { app_context: "billing" } },
        );
    let eT = null != (U = null == ek ? void 0 : ek.message) ? U : F.intl.string(F.t.R0RpRU),
        eM = eL && null == ek,
        eA = eL && null != ek,
        eZ = eM && null == q && !!eL && (null == eI ? void 0 : eI.subscriptionPeriodEnd) == null,
        eN = !el && (null == eO ? void 0 : eO.skuId) === B.Si.TIER_2 && (null == ex ? void 0 : ex.referrer_id) != null,
        eR = null;
    return ((eR = null != eC ? eC : eN ? (0, r.jsx)(j.Z, {}) : (0, r.jsx)(x.Z, {})), eZ)
        ? (0, r.jsx)(k.Z, {})
        : (l()(null != et, "Step should be set"),
          l()(ev.length > 0, "Premium plan options should be set"),
          (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(A.P, { giftMessage: es }),
                  !(el && (0, L.pO)(eo)) && (0, r.jsx)(I.Z, { isEligibleForTrial: ej }),
                  (0, r.jsxs)(T.C3, {
                      children: [
                          eM && (0, r.jsx)("hr", { className: G.planSelectSeparatorUpper }),
                          eR,
                          (0, r.jsx)(N.Z, {}),
                          (0, r.jsx)(Z.Z, {}),
                          eA
                              ? (0, r.jsx)(s.kzN, { children: eT })
                              : (0, r.jsx)(g.O, {
                                    planOptions: ev,
                                    eligibleForMultiMonthPlans: em,
                                    referralTrialOfferId: Y,
                                    selectedPlanId: null == ee ? void 0 : ee.id,
                                    planGroup: z,
                                    subscriptionPeriodEnd: null == eI ? void 0 : eI.subscriptionPeriodEnd,
                                    discountInvoiceItems: ey ? (null == eI ? void 0 : eI.invoiceItems) : void 0,
                                    useCompactGiftComponents: ep,
                                    handleClose: V,
                                }),
                          eM &&
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)("hr", { className: G.planSelectSeparatorLower }),
                                      (0, r.jsx)(s.Text, {
                                          variant: "text-xs/normal",
                                          children: F.intl.format(F.t.BHtnqK, {
                                              link: v.Z.getArticleURL(R.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                          }),
                                      }),
                                  ],
                              }),
                      ],
                  }),
                  (0, r.jsxs)(T.O3, {
                      children: [
                          ep && (0, r.jsx)(f.c, {}),
                          (0, r.jsx)(s.mzw, {
                              "data-migration-pending": !0,
                              justify: C.Z.Justify.BETWEEN,
                              align: C.Z.Align.CENTER,
                              className: ea,
                              children: (0, r.jsx)(g.y, {
                                  onStepChange: H,
                                  onBackClick: () => H(E.h8.SKU_SELECT),
                                  showBackButton: null == D && null == K,
                                  planOptions: ev,
                                  shouldRenderUpdatedPaymentModal: eM,
                                  isTrial: ej,
                              }),
                          }),
                      ],
                  }),
              ],
          }));
}
