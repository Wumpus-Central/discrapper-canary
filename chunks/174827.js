n.d(t, { x: () => H }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(512722),
    o = n.n(a),
    l = n(399606),
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
    L = n(509545),
    y = n(669079),
    v = n(63063),
    S = n(74538),
    O = n(987209),
    E = n(563132),
    I = n(409813),
    P = n(107998),
    w = n(51499),
    k = n(456251),
    T = n(614277),
    A = n(435020),
    M = n(809144),
    Z = n(698708),
    N = n(844068),
    R = n(981631),
    F = n(474936),
    B = n(388032),
    U = n(649662);
function H(e) {
    var t, n, a, H;
    let {
            handleStepChange: G,
            initialPlanId: D,
            planGroup: z,
            subscriptionTier: Y,
            trialId: K,
            referralTrialOfferId: W,
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
        } = (0, E.JL)(),
        { isGift: eo, giftRecipient: el, giftMessage: es, claimableRewards: ed } = (0, O.wD)(),
        { paymentModalBanner: eC } = (0, P.zb)(),
        ec = (0, _.a5)(ee),
        eu = (null == (t = (0, p.Z)()) ? void 0 : t.planSelectionBanner) != null,
        ep = eo && ec && null != ed && ed.length > 0 && eu,
        e_ = (0, A.m)(Q, X),
        { newPlans: ef } = c.ZP.useExperiment({ location: "d17fd6_3" }, { autoTrackExposure: !1 }),
        eh = (0, l.e7)([b.default], () => b.default.getCurrentUser()),
        em =
            !eo &&
            null != $ &&
            $ === F.Si.TIER_2 &&
            null != eh &&
            eh.hasHadPremium() &&
            J &&
            null == q &&
            (0, c.aQ)(e_),
        ex = (0, m.N)(W),
        ej = !eo && null != ex && null != $ && F.nG[ex.trial_id].skus.includes($),
        eg = (0, h.Ng)(),
        eb = null == eg || null == (n = eg.discount) ? void 0 : n.plan_ids.some((e) => F.GP[e].skuId === $),
        eL = !eo && null != eg && null != $ && eb,
        ey = null != (a = ej || eL) && a,
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
        eS = eL && ev.includes(F.Xh.PREMIUM_MONTH_TIER_2) ? F.Xh.PREMIUM_MONTH_TIER_2 : ev[0],
        eO = (0, l.e7)([L.Z], () => L.Z.get(eS)),
        eE = [
            {
                planId: null == eO ? void 0 : eO.id,
                quantity: 1,
            },
        ],
        [eI, eP] = i.useState(ey),
        [ew, ek] = (0, u.ED)({
            items: eE,
            renewal: !1,
            preventFetch: !ey,
            applyEntitlements: !0,
            trialId: K,
            paymentSourceId: er.paymentSourceId,
            currency: er.currency,
        });
    i.useEffect(() => {
        ey && eP((null == ew ? void 0 : ew.subscriptionPeriodEnd) == null);
    }, [ew, ey]),
        (0, d.Z)(
            "Payment Modal Plan Select Step",
            eI,
            5,
            {
                proratedInvoicePreview: ew,
                proratedInvoiceError: ek,
                isEligibleForOffer: ey,
            },
            { tags: { app_context: "billing" } },
        );
    let eT = null != (H = null == ek ? void 0 : ek.message) ? H : B.intl.string(B.t.R0RpRU),
        eA = ey && null == ek,
        eM = ey && null != ek,
        eZ = eA && null == q && !!ey && (null == ew ? void 0 : ew.subscriptionPeriodEnd) == null,
        eN = !eo && (null == eO ? void 0 : eO.skuId) === F.Si.TIER_2 && (null == ex ? void 0 : ex.referrer_id) != null,
        eR = null;
    return ((eR = null != eC ? eC : eN ? (0, r.jsx)(j.Z, {}) : (0, r.jsx)(x.Z, {})), eZ)
        ? (0, r.jsx)(k.Z, {})
        : (o()(null != et, "Step should be set"),
          o()(ev.length > 0, "Premium plan options should be set"),
          (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(M.P, { giftMessage: es }),
                  !(eo && (0, y.pO)(el)) && (0, r.jsx)(w.Z, { isEligibleForTrial: ej }),
                  (0, r.jsxs)(T.C3, {
                      children: [
                          eA && (0, r.jsx)("hr", { className: U.planSelectSeparatorUpper }),
                          eR,
                          (0, r.jsx)(N.Z, {}),
                          (0, r.jsx)(Z.Z, {}),
                          eM
                              ? (0, r.jsx)(s.kzN, { children: eT })
                              : (0, r.jsx)(g.O, {
                                    planOptions: ev,
                                    eligibleForMultiMonthPlans: em,
                                    referralTrialOfferId: W,
                                    selectedPlanId: null == ee ? void 0 : ee.id,
                                    planGroup: z,
                                    subscriptionPeriodEnd: null == ew ? void 0 : ew.subscriptionPeriodEnd,
                                    discountInvoiceItems: eL ? (null == ew ? void 0 : ew.invoiceItems) : void 0,
                                    useCompactGiftComponents: ep,
                                    handleClose: V,
                                }),
                          eA &&
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)("hr", { className: U.planSelectSeparatorLower }),
                                      (0, r.jsx)(s.Text, {
                                          variant: "text-xs/normal",
                                          children: B.intl.format(B.t.BHtnqK, {
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
                                  onStepChange: G,
                                  onBackClick: () => G(I.h8.SKU_SELECT),
                                  showBackButton: null == D && null == Y,
                                  planOptions: ev,
                                  shouldRenderUpdatedPaymentModal: eA,
                                  isTrial: ej,
                              }),
                          }),
                      ],
                  }),
              ],
          }));
}
