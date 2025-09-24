n.d(t, { x: () => G }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(512722),
    o = n.n(a),
    l = n(399606),
    s = n(481060),
    C = n(975608),
    d = n(600164),
    c = n(711459),
    u = n(374649),
    p = n(347896),
    _ = n(717401),
    f = n(572517),
    h = n(104494),
    m = n(639119),
    x = n(642530),
    j = n(381507),
    b = n(314404),
    g = n(657517),
    L = n(594174),
    y = n(509545),
    v = n(669079),
    S = n(63063),
    O = n(74538),
    E = n(987209),
    P = n(563132),
    I = n(409813),
    w = n(107998),
    k = n(51499),
    M = n(456251),
    T = n(614277),
    A = n(435020),
    Z = n(809144),
    N = n(698708),
    R = n(844068),
    F = n(981631),
    B = n(474936),
    U = n(388032),
    H = n(833271);
function G(e) {
    var t, n, a, G;
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
            hasFetchedSubscriptions: X,
            paymentSourceId: Q,
            paymentSources: $,
            selectedSkuId: ee,
            selectedPlan: et,
            step: en,
            defaultPlanId: er,
            priceOptions: ei,
            isPremium: ea,
            premiumBrandRefreshBackgroundClassName: eo,
            shouldShowSeptemberMarketingMomentBanner: el,
        } = (0, P.JL)(),
        { isGift: es, giftRecipient: eC, giftMessage: ed, claimableRewards: ec } = (0, E.wD)(),
        { paymentModalBanner: eu } = (0, w.zb)(),
        ep = (0, _.a5)(et),
        e_ = (null == (t = (0, p.Z)()) ? void 0 : t.planSelectionBanner) != null,
        ef = es && ep && null != ec && ec.length > 0 && e_,
        eh = (0, A.m)($, Q),
        { newPlans: em } = c.ZP.useExperiment({ location: "d17fd6_3" }, { autoTrackExposure: !1 }),
        ex = (0, l.e7)([L.default], () => L.default.getCurrentUser()),
        ej =
            !es &&
            null != ee &&
            ee === B.Si.TIER_2 &&
            null != ex &&
            ex.hasHadPremium() &&
            X &&
            null == J &&
            (0, c.aQ)(eh),
        eb = (0, m.N)(V),
        eg = !es && null != eb && null != ee && B.nG[eb.trial_id].skus.includes(ee),
        eL = (0, h.Ng)(),
        ey = null == eL || null == (n = eL.discount) ? void 0 : n.plan_ids.some((e) => B.GP[e].skuId === ee),
        ev = !es && null != eL && null != ee && ey,
        eS = null != (a = eg || ev) && a,
        eO = i.useMemo(
            () =>
                (0, O.V7)({
                    skuId: ee,
                    isPremium: ea,
                    multiMonthPlans: ej ? em : [],
                    currentSubscription: J,
                    defaultPlanId: er,
                }),
            [ee, ea, em, J, ej, er],
        ),
        eE = ev && eO.includes(B.Xh.PREMIUM_MONTH_TIER_2) ? B.Xh.PREMIUM_MONTH_TIER_2 : eO[0],
        eP = (0, l.e7)([y.Z], () => y.Z.get(eE)),
        eI = [
            {
                planId: null == eP ? void 0 : eP.id,
                quantity: 1,
            },
        ],
        [ew, ek] = i.useState(eS),
        [eM, eT] = (0, u.ED)({
            items: eI,
            renewal: !1,
            preventFetch: !eS,
            applyEntitlements: !0,
            trialId: W,
            paymentSourceId: ei.paymentSourceId,
            currency: ei.currency,
        });
    i.useEffect(() => {
        eS && ek((null == eM ? void 0 : eM.subscriptionPeriodEnd) == null);
    }, [eM, eS]),
        (0, C.Z)(
            "Payment Modal Plan Select Step",
            ew,
            5,
            {
                proratedInvoicePreview: eM,
                proratedInvoiceError: eT,
                isEligibleForOffer: eS,
            },
            { tags: { app_context: "billing" } },
        );
    let eA = null != (G = null == eT ? void 0 : eT.message) ? G : U.intl.string(U.t.R0RpRU),
        eZ = eS && null == eT,
        eN = eS && null != eT,
        eR = eZ && null == J && !!eS && (null == eM ? void 0 : eM.subscriptionPeriodEnd) == null,
        eF = !es && (null == eP ? void 0 : eP.skuId) === B.Si.TIER_2 && (null == eb ? void 0 : eb.referrer_id) != null,
        eB = null;
    return ((eB = null != eu ? eu : eF ? (0, r.jsx)(j.Z, {}) : (0, r.jsx)(x.Z, {})), eR)
        ? (0, r.jsx)(M.Z, {})
        : (o()(null != en, "Step should be set"),
          o()(eO.length > 0, "Premium plan options should be set"),
          (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(Z.P, { giftMessage: ed }),
                  !(es && (0, v.pO)(eC)) && (0, r.jsx)(k.Z, { isEligibleForTrial: eg }),
                  (0, r.jsxs)(T.C3, {
                      children: [
                          eZ && (0, r.jsx)("hr", { className: H.planSelectSeparatorUpper }),
                          eB,
                          !0 === el && (0, r.jsx)(g.Y, {}),
                          (0, r.jsx)(R.Z, {}),
                          (0, r.jsx)(N.Z, {}),
                          eN
                              ? (0, r.jsx)(s.kzN, { children: eA })
                              : (0, r.jsx)(b.O, {
                                    planOptions: eO,
                                    eligibleForMultiMonthPlans: ej,
                                    referralTrialOfferId: V,
                                    selectedPlanId: null == et ? void 0 : et.id,
                                    planGroup: z,
                                    subscriptionPeriodEnd: null == eM ? void 0 : eM.subscriptionPeriodEnd,
                                    discountInvoiceItems: ev ? (null == eM ? void 0 : eM.invoiceItems) : void 0,
                                    useCompactGiftComponents: ef,
                                    handleClose: q,
                                }),
                          eZ &&
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)("hr", { className: H.planSelectSeparatorLower }),
                                      (0, r.jsx)(s.Text, {
                                          variant: "text-xs/normal",
                                          children: U.intl.format(U.t.BHtnqK, {
                                              link: S.Z.getArticleURL(F.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                          }),
                                      }),
                                  ],
                              }),
                      ],
                  }),
                  (0, r.jsxs)(T.O3, {
                      children: [
                          ef && (0, r.jsx)(f.c, {}),
                          (0, r.jsx)(s.mzw, {
                              "data-migration-pending": !0,
                              justify: d.Z.Justify.BETWEEN,
                              align: d.Z.Align.CENTER,
                              className: eo,
                              children: (0, r.jsx)(b.y, {
                                  onStepChange: D,
                                  onBackClick: () => D(I.h8.SKU_SELECT),
                                  showBackButton: null == Y && null == K,
                                  planOptions: eO,
                                  shouldRenderUpdatedPaymentModal: eZ,
                                  isTrial: eg,
                              }),
                          }),
                      ],
                  }),
              ],
          }));
}
