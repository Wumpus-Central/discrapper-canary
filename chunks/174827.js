n.d(t, { x: () => H }), n(388685);
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
    h = n(572517),
    m = n(104494),
    f = n(639119),
    x = n(642530),
    g = n(381507),
    j = n(314404),
    b = n(594174),
    y = n(509545),
    L = n(669079),
    v = n(63063),
    S = n(74538),
    w = n(987209),
    I = n(563132),
    O = n(409813),
    P = n(107998),
    E = n(51499),
    T = n(456251),
    k = n(614277),
    M = n(435020),
    A = n(809144),
    B = n(698708),
    Z = n(844068),
    N = n(981631),
    R = n(474936),
    F = n(388032),
    G = n(833271);
function H(e) {
    var t, n, a, H;
    let {
            handleStepChange: U,
            initialPlanId: D,
            planGroup: z,
            subscriptionTier: W,
            trialId: K,
            referralTrialOfferId: Y,
            handleClose: V,
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
        } = (0, I.JL)(),
        { isGift: el, giftRecipient: eo, giftMessage: es, claimableRewards: ed } = (0, w.wD)(),
        { paymentModalBanner: eC } = (0, P.zb)(),
        ec = (0, _.a5)(ee),
        eu = (null == (t = (0, p.Z)()) ? void 0 : t.planSelectionBanner) != null,
        ep = el && ec && null != ed && ed.length > 0 && eu,
        e_ = (0, M.m)(X, Q),
        { newPlans: eh } = c.ZP.useExperiment({ location: "d17fd6_3" }, { autoTrackExposure: !1 }),
        em = (0, o.e7)([b.default], () => b.default.getCurrentUser()),
        ef =
            !el &&
            null != $ &&
            $ === R.Si.TIER_2 &&
            null != em &&
            em.hasHadPremium() &&
            J &&
            null == q &&
            (0, c.aQ)(e_),
        ex = (0, f.N)(Y),
        eg = !el && null != ex && null != $ && R.nG[ex.trial_id].skus.includes($),
        ej = (0, m.Ng)(),
        eb = null == ej || null == (n = ej.discount) ? void 0 : n.plan_ids.some((e) => R.GP[e].skuId === $),
        ey = !el && null != ej && null != $ && eb,
        eL = null != (a = eg || ey) && a,
        ev = i.useMemo(
            () =>
                (0, S.V7)({
                    skuId: $,
                    isPremium: ei,
                    multiMonthPlans: ef ? eh : [],
                    currentSubscription: q,
                    defaultPlanId: en,
                }),
            [$, ei, eh, q, ef, en],
        ),
        eS = ey && ev.includes(R.Xh.PREMIUM_MONTH_TIER_2) ? R.Xh.PREMIUM_MONTH_TIER_2 : ev[0],
        ew = (0, o.e7)([y.Z], () => y.Z.get(eS)),
        eI = [
            {
                planId: null == ew ? void 0 : ew.id,
                quantity: 1,
            },
        ],
        [eO, eP] = i.useState(eL),
        [eE, eT] = (0, u.ED)({
            items: eI,
            renewal: !1,
            preventFetch: !eL,
            applyEntitlements: !0,
            trialId: K,
            paymentSourceId: er.paymentSourceId,
            currency: er.currency,
        });
    i.useEffect(() => {
        eL && eP((null == eE ? void 0 : eE.subscriptionPeriodEnd) == null);
    }, [eE, eL]),
        (0, d.Z)(
            "Payment Modal Plan Select Step",
            eO,
            5,
            {
                proratedInvoicePreview: eE,
                proratedInvoiceError: eT,
                isEligibleForOffer: eL,
            },
            { tags: { app_context: "billing" } },
        );
    let ek = null != (H = null == eT ? void 0 : eT.message) ? H : F.intl.string(F.t.R0RpRX),
        eM = eL && null == eT,
        eA = eL && null != eT,
        eB = eM && null == q && !!eL && (null == eE ? void 0 : eE.subscriptionPeriodEnd) == null,
        eZ = !el && (null == ew ? void 0 : ew.skuId) === R.Si.TIER_2 && (null == ex ? void 0 : ex.referrer_id) != null,
        eN = null;
    return ((eN = null != eC ? eC : eZ ? (0, r.jsx)(g.Z, {}) : (0, r.jsx)(x.Z, {})), eB)
        ? (0, r.jsx)(T.Z, {})
        : (l()(null != et, "Step should be set"),
          l()(ev.length > 0, "Premium plan options should be set"),
          (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(A.P, { giftMessage: es }),
                  !(el && (0, L.pO)(eo)) && (0, r.jsx)(E.Z, { isEligibleForTrial: eg }),
                  (0, r.jsxs)(k.C3, {
                      children: [
                          eM && (0, r.jsx)("hr", { className: G.planSelectSeparatorUpper }),
                          eN,
                          (0, r.jsx)(Z.Z, {}),
                          (0, r.jsx)(B.Z, {}),
                          eA
                              ? (0, r.jsx)(s.M14, {
                                    type: "critical",
                                    children: ek,
                                })
                              : (0, r.jsx)(j.O, {
                                    planOptions: ev,
                                    eligibleForMultiMonthPlans: ef,
                                    referralTrialOfferId: Y,
                                    selectedPlanId: null == ee ? void 0 : ee.id,
                                    planGroup: z,
                                    subscriptionPeriodEnd: null == eE ? void 0 : eE.subscriptionPeriodEnd,
                                    discountInvoiceItems: ey ? (null == eE ? void 0 : eE.invoiceItems) : void 0,
                                    useCompactGiftComponents: ep,
                                    handleClose: V,
                                }),
                          eM &&
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)("hr", { className: G.planSelectSeparatorLower }),
                                      (0, r.jsx)(s.Text, {
                                          variant: "text-xs/normal",
                                          children: F.intl.format(F.t.BHtnqA, {
                                              link: v.Z.getArticleURL(N.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                          }),
                                      }),
                                  ],
                              }),
                      ],
                  }),
                  (0, r.jsxs)(k.O3, {
                      children: [
                          ep && (0, r.jsx)(h.c, {}),
                          (0, r.jsx)(s.mzw, {
                              "data-migration-pending": !0,
                              justify: C.Z.Justify.BETWEEN,
                              align: C.Z.Align.CENTER,
                              className: ea,
                              children: (0, r.jsx)(j.y, {
                                  onStepChange: U,
                                  onBackClick: () => U(O.h8.SKU_SELECT),
                                  showBackButton: null == D && null == W,
                                  planOptions: ev,
                                  shouldRenderUpdatedPaymentModal: eM,
                                  isTrial: eg,
                              }),
                          }),
                      ],
                  }),
              ],
          }));
}
