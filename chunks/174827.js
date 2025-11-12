n.d(t, { x: () => K }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(512722),
    a = n.n(l),
    o = n(79766),
    s = n(399606),
    C = n(481060),
    d = n(975608),
    c = n(600164),
    u = n(711459),
    p = n(374649),
    f = n(347896),
    h = n(717401),
    x = n(572517),
    m = n(622909),
    _ = n(639119),
    j = n(715130),
    g = n(427261),
    b = n(642530),
    y = n(381507),
    L = n(314404),
    v = n(594174),
    S = n(509545),
    O = n(669079),
    E = n(63063),
    P = n(74538),
    w = n(987209),
    k = n(563132),
    M = n(409813),
    I = n(107998),
    T = n(51499),
    A = n(456251),
    Z = n(614277),
    N = n(435020),
    R = n(809144),
    B = n(698708),
    H = n(844068),
    U = n(981631),
    F = n(474936),
    G = n(388032),
    D = n(833271);
function K(e) {
    var t, n, l, K;
    let {
            handleStepChange: z,
            initialPlanId: V,
            planGroup: W,
            subscriptionTier: Y,
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
            isPremium: eo,
            premiumBrandRefreshBackgroundClassName: es,
        } = (0, k.JL)(),
        { isGift: eC, giftRecipient: ed, giftMessage: ec, claimableRewards: eu } = (0, w.wD)(),
        { paymentModalBanner: ep } = (0, I.zb)(),
        ef = (0, h.a5)(er),
        eh = (null == (t = (0, f.Z)()) ? void 0 : t.planSelectionBanner) != null,
        ex = eC && ef && null != eu && eu.length > 0 && eh,
        em = (0, N.m)(et, ee),
        { newPlans: e_ } = u.ZP.useExperiment({ location: "d17fd6_3" }, { autoTrackExposure: !1 }),
        ej = (0, s.e7)([v.default], () => v.default.getCurrentUser()),
        eg =
            !eC &&
            null != en &&
            en === F.Si.TIER_2 &&
            null != ej &&
            ej.hasHadPremium() &&
            $ &&
            null == X &&
            (0, u.aQ)(em),
        eb = (0, _.N)(J),
        ey = !eC && null != eb && null != en && F.nG[eb.trial_id].skus.includes(en),
        eL = (0, m.N)(),
        ev = null == eL || null == (n = eL.discount) ? void 0 : n.plan_ids.some((e) => F.GP[e].skuId === en),
        eS = !eC && null != eL && null != en && ev,
        eO = null != (l = ey || eS) && l,
        eE = i.useMemo(
            () =>
                (0, P.V7)({
                    skuId: en,
                    isPremium: eo,
                    multiMonthPlans: eg ? e_ : [],
                    currentSubscription: X,
                    defaultPlanId: el,
                }),
            [en, eo, e_, X, eg, el],
        ),
        eP = eS && eE.includes(F.Xh.PREMIUM_MONTH_TIER_2) ? F.Xh.PREMIUM_MONTH_TIER_2 : eE[0],
        ew = (0, s.e7)([S.Z], () => S.Z.get(eP)),
        ek = [
            {
                planId: null == ew ? void 0 : ew.id,
                quantity: 1,
            },
        ],
        [eM, eI] = i.useState(eO),
        [eT, eA] = (0, p.ED)({
            items: ek,
            renewal: !1,
            preventFetch: !eO,
            applyEntitlements: !0,
            trialId: q,
            paymentSourceId: ea.paymentSourceId,
            currency: ea.currency,
        });
    i.useEffect(() => {
        eO && eI((null == eT ? void 0 : eT.subscriptionPeriodEnd) == null);
    }, [eT, eO]),
        (0, d.Z)(
            "Payment Modal Plan Select Step",
            eM,
            5,
            {
                proratedInvoicePreview: eT,
                proratedInvoiceError: eA,
                isEligibleForOffer: eO,
            },
            { tags: { app_context: "billing" } },
        );
    let eZ = null != (K = null == eA ? void 0 : eA.message) ? K : G.intl.string(G.t.R0RpRX),
        eN = eO && null == eA,
        eR = eO && null != eA,
        eB = eN && null == X && !!eO && (null == eT ? void 0 : eT.subscriptionPeriodEnd) == null,
        eH = !eC && (null == ew ? void 0 : ew.skuId) === F.Si.TIER_2 && (null == eb ? void 0 : eb.referrer_id) != null,
        eU = null,
        eF = (0, j.H)(o.I.PAYMENT_MODAL_BANNER);
    return ((eU =
        eC || en !== F.Si.TIER_2 || null == eF || "paymentModalBanner" !== eF.properties.properties.oneofKind
            ? null != ep
                ? ep
                : eH
                  ? (0, r.jsx)(y.Z, {})
                  : (0, r.jsx)(b.Z, {})
            : (0, r.jsx)(g.h, {
                  componentId: eF.id,
                  promotionBannerMarketingComponentFields: eF.properties.properties.paymentModalBanner,
              })),
    eB)
        ? (0, r.jsx)(A.Z, {})
        : (a()(null != ei, "Step should be set"),
          a()(eE.length > 0, "Premium plan options should be set"),
          (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(R.P, { giftMessage: ec }),
                  !(eC && (0, O.pO)(ed)) && (0, r.jsx)(T.Z, { isEligibleForTrial: ey }),
                  (0, r.jsxs)(Z.C3, {
                      children: [
                          eN && (0, r.jsx)("hr", { className: D.planSelectSeparatorUpper }),
                          eU,
                          (0, r.jsx)(H.Z, {}),
                          (0, r.jsx)(B.Z, {}),
                          eR
                              ? (0, r.jsx)(C.M14, {
                                    type: "critical",
                                    children: eZ,
                                })
                              : (0, r.jsx)(L.O, {
                                    planOptions: eE,
                                    eligibleForMultiMonthPlans: eg,
                                    referralTrialOfferId: J,
                                    selectedPlanId: null == er ? void 0 : er.id,
                                    planGroup: W,
                                    subscriptionPeriodEnd: null == eT ? void 0 : eT.subscriptionPeriodEnd,
                                    discountInvoiceItems: eS ? (null == eT ? void 0 : eT.invoiceItems) : void 0,
                                    useCompactGiftComponents: ex,
                                    handleClose: Q,
                                }),
                          eN &&
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)("hr", { className: D.planSelectSeparatorLower }),
                                      (0, r.jsx)(C.Text, {
                                          variant: "text-xs/normal",
                                          children: G.intl.format(G.t.BHtnqA, {
                                              link: E.Z.getArticleURL(U.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                          }),
                                      }),
                                  ],
                              }),
                      ],
                  }),
                  (0, r.jsxs)(Z.O3, {
                      children: [
                          ex && (0, r.jsx)(x.c, {}),
                          (0, r.jsx)(C.mzw, {
                              "data-migration-pending": !0,
                              justify: c.Z.Justify.BETWEEN,
                              align: c.Z.Align.CENTER,
                              className: es,
                              children: (0, r.jsx)(L.y, {
                                  onStepChange: z,
                                  onBackClick: () => z(M.h8.SKU_SELECT),
                                  showBackButton: null == V && null == Y,
                                  planOptions: eE,
                                  shouldRenderUpdatedPaymentModal: eN,
                                  isTrial: ey,
                              }),
                          }),
                      ],
                  }),
              ],
          }));
}
