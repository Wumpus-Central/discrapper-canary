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
    f = n(572517),
    h = n(104494),
    m = n(639119),
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
    P = n(409813),
    O = n(107998),
    E = n(51499),
    k = n(456251),
    T = n(614277),
    M = n(435020),
    A = n(809144),
    Z = n(698708),
    B = n(844068),
    N = n(981631),
    R = n(474936),
    G = n(388032),
    F = n(833271);
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
        { paymentModalBanner: eC } = (0, O.zb)(),
        ec = (0, _.a5)(ee),
        eu = (null == (t = (0, p.Z)()) ? void 0 : t.planSelectionBanner) != null,
        ep = el && ec && null != ed && ed.length > 0 && eu,
        e_ = (0, M.m)(X, Q),
        { newPlans: ef } = c.ZP.useExperiment({ location: "d17fd6_3" }, { autoTrackExposure: !1 }),
        eh = (0, o.e7)([b.default], () => b.default.getCurrentUser()),
        em =
            !el &&
            null != $ &&
            $ === R.Si.TIER_2 &&
            null != eh &&
            eh.hasHadPremium() &&
            J &&
            null == q &&
            (0, c.aQ)(e_),
        ex = (0, m.N)(Y),
        eg = !el && null != ex && null != $ && R.nG[ex.trial_id].skus.includes($),
        ej = (0, h.Ng)(),
        eb = null == ej || null == (n = ej.discount) ? void 0 : n.plan_ids.some((e) => R.GP[e].skuId === $),
        ey = !el && null != ej && null != $ && eb,
        eL = null != (a = eg || ey) && a,
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
        eS = ey && ev.includes(R.Xh.PREMIUM_MONTH_TIER_2) ? R.Xh.PREMIUM_MONTH_TIER_2 : ev[0],
        ew = (0, o.e7)([y.Z], () => y.Z.get(eS)),
        eI = [
            {
                planId: null == ew ? void 0 : ew.id,
                quantity: 1,
            },
        ],
        [eP, eO] = i.useState(eL),
        [eE, ek] = (0, u.ED)({
            items: eI,
            renewal: !1,
            preventFetch: !eL,
            applyEntitlements: !0,
            trialId: K,
            paymentSourceId: er.paymentSourceId,
            currency: er.currency,
        });
    i.useEffect(() => {
        eL && eO((null == eE ? void 0 : eE.subscriptionPeriodEnd) == null);
    }, [eE, eL]),
        (0, d.Z)(
            "Payment Modal Plan Select Step",
            eP,
            5,
            {
                proratedInvoicePreview: eE,
                proratedInvoiceError: ek,
                isEligibleForOffer: eL,
            },
            { tags: { app_context: "billing" } },
        );
    let eT = null != (H = null == ek ? void 0 : ek.message) ? H : G.intl.string(G.t.R0RpRU),
        eM = eL && null == ek,
        eA = eL && null != ek,
        eZ = eM && null == q && !!eL && (null == eE ? void 0 : eE.subscriptionPeriodEnd) == null,
        eB = !el && (null == ew ? void 0 : ew.skuId) === R.Si.TIER_2 && (null == ex ? void 0 : ex.referrer_id) != null,
        eN = null;
    return ((eN = null != eC ? eC : eB ? (0, r.jsx)(g.Z, {}) : (0, r.jsx)(x.Z, {})), eZ)
        ? (0, r.jsx)(k.Z, {})
        : (l()(null != et, "Step should be set"),
          l()(ev.length > 0, "Premium plan options should be set"),
          (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(A.P, { giftMessage: es }),
                  !(el && (0, L.pO)(eo)) && (0, r.jsx)(E.Z, { isEligibleForTrial: eg }),
                  (0, r.jsxs)(T.C3, {
                      children: [
                          eM && (0, r.jsx)("hr", { className: F.planSelectSeparatorUpper }),
                          eN,
                          (0, r.jsx)(B.Z, {}),
                          (0, r.jsx)(Z.Z, {}),
                          eA
                              ? (0, r.jsx)(s.M14, {
                                    type: "critical",
                                    children: eT,
                                })
                              : (0, r.jsx)(j.O, {
                                    planOptions: ev,
                                    eligibleForMultiMonthPlans: em,
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
                                      (0, r.jsx)("hr", { className: F.planSelectSeparatorLower }),
                                      (0, r.jsx)(s.Text, {
                                          variant: "text-xs/normal",
                                          children: G.intl.format(G.t.BHtnqK, {
                                              link: v.Z.getArticleURL(N.BhN.PREMIUM_DETAILS_CANCEL_SUB),
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
                              children: (0, r.jsx)(j.y, {
                                  onStepChange: U,
                                  onBackClick: () => U(P.h8.SKU_SELECT),
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
