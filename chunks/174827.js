n.d(t, { x: () => H }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(512722),
    l = n.n(a),
    o = n(399606),
    s = n(481060),
    d = n(975608),
    c = n(600164),
    C = n(711459),
    u = n(374649),
    p = n(347896),
    _ = n(717401),
    h = n(572517),
    f = n(104494),
    m = n(639119),
    x = n(642530),
    g = n(381507),
    j = n(314404),
    b = n(594174),
    v = n(509545),
    y = n(669079),
    S = n(63063),
    L = n(74538),
    I = n(987209),
    w = n(563132),
    P = n(409813),
    O = n(107998),
    E = n(51499),
    k = n(456251),
    T = n(614277),
    Z = n(435020),
    A = n(809144),
    N = n(698708),
    M = n(844068),
    R = n(981631),
    B = n(474936),
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
            referralTrialOfferId: V,
            handleClose: Y,
        } = e,
        {
            activeSubscription: q,
            hasFetchedSubscriptions: X,
            paymentSourceId: Q,
            paymentSources: J,
            selectedSkuId: $,
            selectedPlan: ee,
            step: et,
            defaultPlanId: en,
            priceOptions: er,
            isPremium: ei,
            premiumBrandRefreshBackgroundClassName: ea,
        } = (0, w.JL)(),
        { isGift: el, giftRecipient: eo, giftMessage: es, claimableRewards: ed } = (0, I.wD)(),
        { paymentModalBanner: ec } = (0, O.zb)(),
        eC = (0, _.a5)(ee),
        eu = (null == (t = (0, p.Z)()) ? void 0 : t.planSelectionBanner) != null,
        ep = el && eC && null != ed && ed.length > 0 && eu,
        e_ = (0, Z.m)(J, Q),
        { newPlans: eh } = C.ZP.useExperiment({ location: "d17fd6_3" }, { autoTrackExposure: !1 }),
        ef = (0, o.e7)([b.default], () => b.default.getCurrentUser()),
        em =
            !el &&
            null != $ &&
            $ === B.Si.TIER_2 &&
            null != ef &&
            ef.hasHadPremium() &&
            X &&
            null == q &&
            (0, C.aQ)(e_),
        ex = (0, m.N)(V),
        eg = !el && null != ex && null != $ && B.nG[ex.trial_id].skus.includes($),
        ej = (0, f.Ng)(),
        eb = null == ej || null == (n = ej.discount) ? void 0 : n.plan_ids.some((e) => B.GP[e].skuId === $),
        ev = !el && null != ej && null != $ && eb,
        ey = null != (a = eg || ev) && a,
        eS = i.useMemo(
            () =>
                (0, L.V7)({
                    skuId: $,
                    isPremium: ei,
                    multiMonthPlans: em ? eh : [],
                    currentSubscription: q,
                    defaultPlanId: en,
                }),
            [$, ei, eh, q, em, en],
        ),
        eL = ev && eS.includes(B.Xh.PREMIUM_MONTH_TIER_2) ? B.Xh.PREMIUM_MONTH_TIER_2 : eS[0],
        eI = (0, o.e7)([v.Z], () => v.Z.get(eL)),
        ew = [
            {
                planId: null == eI ? void 0 : eI.id,
                quantity: 1,
            },
        ],
        [eP, eO] = i.useState(ey),
        [eE, ek] = (0, u.ED)({
            items: ew,
            renewal: !1,
            preventFetch: !ey,
            applyEntitlements: !0,
            trialId: K,
            paymentSourceId: er.paymentSourceId,
            currency: er.currency,
        });
    i.useEffect(() => {
        ey && eO((null == eE ? void 0 : eE.subscriptionPeriodEnd) == null);
    }, [eE, ey]),
        (0, d.Z)(
            "Payment Modal Plan Select Step",
            eP,
            5,
            {
                proratedInvoicePreview: eE,
                proratedInvoiceError: ek,
                isEligibleForOffer: ey,
            },
            { tags: { app_context: "billing" } },
        );
    let eT = null != (H = null == ek ? void 0 : ek.message) ? H : F.intl.string(F.t.R0RpRU),
        eZ = ey && null == ek,
        eA = ey && null != ek,
        eN = eZ && null == q && !!ey && (null == eE ? void 0 : eE.subscriptionPeriodEnd) == null,
        eM = !el && (null == eI ? void 0 : eI.skuId) === B.Si.TIER_2 && (null == ex ? void 0 : ex.referrer_id) != null,
        eR = null;
    return ((eR = null != ec ? ec : eM ? (0, r.jsx)(g.Z, {}) : (0, r.jsx)(x.Z, {})), eN)
        ? (0, r.jsx)(k.Z, {})
        : (l()(null != et, "Step should be set"),
          l()(eS.length > 0, "Premium plan options should be set"),
          (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(A.P, { giftMessage: es }),
                  !(el && (0, y.pO)(eo)) && (0, r.jsx)(E.Z, { isEligibleForTrial: eg }),
                  (0, r.jsxs)(T.C3, {
                      children: [
                          eZ && (0, r.jsx)("hr", { className: G.planSelectSeparatorUpper }),
                          eR,
                          (0, r.jsx)(M.Z, {}),
                          (0, r.jsx)(N.Z, {}),
                          eA
                              ? (0, r.jsx)(s.kzN, { children: eT })
                              : (0, r.jsx)(j.O, {
                                    planOptions: eS,
                                    eligibleForMultiMonthPlans: em,
                                    referralTrialOfferId: V,
                                    selectedPlanId: null == ee ? void 0 : ee.id,
                                    planGroup: z,
                                    subscriptionPeriodEnd: null == eE ? void 0 : eE.subscriptionPeriodEnd,
                                    discountInvoiceItems: ev ? (null == eE ? void 0 : eE.invoiceItems) : void 0,
                                    useCompactGiftComponents: ep,
                                    handleClose: Y,
                                }),
                          eZ &&
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)("hr", { className: G.planSelectSeparatorLower }),
                                      (0, r.jsx)(s.Text, {
                                          variant: "text-xs/normal",
                                          children: F.intl.format(F.t.BHtnqK, {
                                              link: S.Z.getArticleURL(R.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                          }),
                                      }),
                                  ],
                              }),
                      ],
                  }),
                  (0, r.jsxs)(T.O3, {
                      children: [
                          ep && (0, r.jsx)(h.c, {}),
                          (0, r.jsx)(s.mzw, {
                              "data-migration-pending": !0,
                              justify: c.Z.Justify.BETWEEN,
                              align: c.Z.Align.CENTER,
                              className: ea,
                              children: (0, r.jsx)(j.y, {
                                  onStepChange: U,
                                  onBackClick: () => U(P.h8.SKU_SELECT),
                                  showBackButton: null == D && null == W,
                                  planOptions: eS,
                                  shouldRenderUpdatedPaymentModal: eZ,
                                  isTrial: eg,
                              }),
                          }),
                      ],
                  }),
              ],
          }));
}
