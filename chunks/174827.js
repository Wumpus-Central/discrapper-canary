n.d(t, { x: () => W }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(512722),
    a = n.n(l),
    s = n(79766),
    o = n(399606),
    d = n(481060),
    c = n(975608),
    C = n(600164),
    u = n(711459),
    p = n(374649),
    h = n(347896),
    m = n(717401),
    _ = n(572517),
    f = n(104494),
    x = n(639119),
    j = n(715130),
    g = n(427261),
    b = n(642530),
    L = n(381507),
    v = n(314404),
    y = n(594174),
    S = n(509545),
    I = n(669079),
    w = n(63063),
    O = n(74538),
    P = n(987209),
    E = n(563132),
    k = n(409813),
    M = n(107998),
    T = n(51499),
    A = n(456251),
    N = n(614277),
    Z = n(435020),
    B = n(809144),
    R = n(698708),
    H = n(844068),
    U = n(981631),
    F = n(474936),
    G = n(388032),
    D = n(833271);
function W(e) {
    var t, n, l, W;
    let {
            handleStepChange: z,
            initialPlanId: K,
            planGroup: Y,
            subscriptionTier: V,
            trialId: q,
            referralTrialOfferId: J,
            handleClose: Q,
        } = e,
        {
            activeSubscription: X,
            hasFetchedSubscriptions: $,
            paymentSourceId: ee,
            paymentSources: et,
            selectedSkuId: en,
            selectedPlan: er,
            step: ei,
            defaultPlanId: el,
            priceOptions: ea,
            isPremium: es,
            premiumBrandRefreshBackgroundClassName: eo,
        } = (0, E.JL)(),
        { isGift: ed, giftRecipient: ec, giftMessage: eC, claimableRewards: eu } = (0, P.wD)(),
        { paymentModalBanner: ep } = (0, M.zb)(),
        eh = (0, m.a5)(er),
        em = (null == (t = (0, h.Z)()) ? void 0 : t.planSelectionBanner) != null,
        e_ = ed && eh && null != eu && eu.length > 0 && em,
        ef = (0, Z.m)(et, ee),
        { newPlans: ex } = u.ZP.useExperiment({ location: "d17fd6_3" }, { autoTrackExposure: !1 }),
        ej = (0, o.e7)([y.default], () => y.default.getCurrentUser()),
        eg =
            !ed &&
            null != en &&
            en === F.Si.TIER_2 &&
            null != ej &&
            ej.hasHadPremium() &&
            $ &&
            null == X &&
            (0, u.aQ)(ef),
        eb = (0, x.N)(J),
        eL = !ed && null != eb && null != en && F.nG[eb.trial_id].skus.includes(en),
        ev = (0, f.Ng)(),
        ey = null == ev || null == (n = ev.discount) ? void 0 : n.plan_ids.some((e) => F.GP[e].skuId === en),
        eS = !ed && null != ev && null != en && ey,
        eI = null != (l = eL || eS) && l,
        ew = i.useMemo(
            () =>
                (0, O.V7)({
                    skuId: en,
                    isPremium: es,
                    multiMonthPlans: eg ? ex : [],
                    currentSubscription: X,
                    defaultPlanId: el,
                }),
            [en, es, ex, X, eg, el],
        ),
        eO = eS && ew.includes(F.Xh.PREMIUM_MONTH_TIER_2) ? F.Xh.PREMIUM_MONTH_TIER_2 : ew[0],
        eP = (0, o.e7)([S.Z], () => S.Z.get(eO)),
        eE = [
            {
                planId: null == eP ? void 0 : eP.id,
                quantity: 1,
            },
        ],
        [ek, eM] = i.useState(eI),
        [eT, eA] = (0, p.ED)({
            items: eE,
            renewal: !1,
            preventFetch: !eI,
            applyEntitlements: !0,
            trialId: q,
            paymentSourceId: ea.paymentSourceId,
            currency: ea.currency,
        });
    i.useEffect(() => {
        eI && eM((null == eT ? void 0 : eT.subscriptionPeriodEnd) == null);
    }, [eT, eI]),
        (0, c.Z)(
            "Payment Modal Plan Select Step",
            ek,
            5,
            {
                proratedInvoicePreview: eT,
                proratedInvoiceError: eA,
                isEligibleForOffer: eI,
            },
            { tags: { app_context: "billing" } },
        );
    let eN = null != (W = null == eA ? void 0 : eA.message) ? W : G.intl.string(G.t.R0RpRX),
        eZ = eI && null == eA,
        eB = eI && null != eA,
        eR = eZ && null == X && !!eI && (null == eT ? void 0 : eT.subscriptionPeriodEnd) == null,
        eH = !ed && (null == eP ? void 0 : eP.skuId) === F.Si.TIER_2 && (null == eb ? void 0 : eb.referrer_id) != null,
        eU = null,
        eF = (0, j.H)(s.I.PAYMENT_MODAL_BANNER);
    return ((eU =
        ed || en !== F.Si.TIER_2 || null == eF || "paymentModalBanner" !== eF.properties.properties.oneofKind
            ? null != ep
                ? ep
                : eH
                  ? (0, r.jsx)(L.Z, {})
                  : (0, r.jsx)(b.Z, {})
            : (0, r.jsx)(g.h, {
                  componentId: eF.id,
                  promotionBannerMarketingComponentFields: eF.properties.properties.paymentModalBanner,
              })),
    eR)
        ? (0, r.jsx)(A.Z, {})
        : (a()(null != ei, "Step should be set"),
          a()(ew.length > 0, "Premium plan options should be set"),
          (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(B.P, { giftMessage: eC }),
                  !(ed && (0, I.pO)(ec)) && (0, r.jsx)(T.Z, { isEligibleForTrial: eL }),
                  (0, r.jsxs)(N.C3, {
                      children: [
                          eZ && (0, r.jsx)("hr", { className: D.planSelectSeparatorUpper }),
                          eU,
                          (0, r.jsx)(H.Z, {}),
                          (0, r.jsx)(R.Z, {}),
                          eB
                              ? (0, r.jsx)(d.M14, {
                                    type: "critical",
                                    children: eN,
                                })
                              : (0, r.jsx)(v.O, {
                                    planOptions: ew,
                                    eligibleForMultiMonthPlans: eg,
                                    referralTrialOfferId: J,
                                    selectedPlanId: null == er ? void 0 : er.id,
                                    planGroup: Y,
                                    subscriptionPeriodEnd: null == eT ? void 0 : eT.subscriptionPeriodEnd,
                                    discountInvoiceItems: eS ? (null == eT ? void 0 : eT.invoiceItems) : void 0,
                                    useCompactGiftComponents: e_,
                                    handleClose: Q,
                                }),
                          eZ &&
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)("hr", { className: D.planSelectSeparatorLower }),
                                      (0, r.jsx)(d.Text, {
                                          variant: "text-xs/normal",
                                          children: G.intl.format(G.t.BHtnqA, {
                                              link: w.Z.getArticleURL(U.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                          }),
                                      }),
                                  ],
                              }),
                      ],
                  }),
                  (0, r.jsxs)(N.O3, {
                      children: [
                          e_ && (0, r.jsx)(_.c, {}),
                          (0, r.jsx)(d.mzw, {
                              "data-migration-pending": !0,
                              justify: C.Z.Justify.BETWEEN,
                              align: C.Z.Align.CENTER,
                              className: eo,
                              children: (0, r.jsx)(v.y, {
                                  onStepChange: z,
                                  onBackClick: () => z(k.h8.SKU_SELECT),
                                  showBackButton: null == K && null == V,
                                  planOptions: ew,
                                  shouldRenderUpdatedPaymentModal: eZ,
                                  isTrial: eL,
                              }),
                          }),
                      ],
                  }),
              ],
          }));
}
