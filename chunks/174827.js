n.d(t, { x: () => Z }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(512722),
    a = n.n(i),
    s = n(399606),
    o = n(481060),
    u = n(975608),
    c = n(600164),
    d = n(711459),
    p = n(374649),
    m = n(347896),
    h = n(717401),
    f = n(572517),
    g = n(314404),
    y = n(594174),
    j = n(509545),
    v = n(669079),
    b = n(63063),
    O = n(74538),
    S = n(987209),
    x = n(563132),
    P = n(409813),
    E = n(51499),
    w = n(456251),
    I = n(614277),
    T = n(435020),
    k = n(809144),
    C = n(698708),
    N = n(844068),
    M = n(405685),
    _ = n(981631),
    A = n(474936),
    R = n(388032),
    L = n(903845);
function Z(e) {
    var t, n, i;
    let { handleStepChange: Z, initialPlanId: D, planGroup: F, subscriptionTier: B, trialId: G, handleClose: U } = e,
        {
            activeSubscription: H,
            hasFetchedSubscriptions: z,
            paymentSourceId: K,
            paymentSources: W,
            selectedSkuId: V,
            selectedPlan: Y,
            step: q,
            defaultPlanId: J,
            priceOptions: Q,
            isPremium: X,
            premiumBrandRefreshBackgroundClassName: $,
            isEligibleForTrial: ee,
            isEligibleForDiscount: et,
            referralTrialOfferId: en,
        } = (0, x.JL)(),
        { isGift: er, giftRecipient: el, giftMessage: ei, claimableRewards: ea } = (0, S.wD)(),
        es = (0, h.a5)(Y),
        eo = (null == (t = (0, m.Z)()) ? void 0 : t.planSelectionBanner) != null,
        eu = er && es && null != ea && ea.length > 0 && eo,
        ec = (0, T.m)(W, K),
        { newPlans: ed } = d.ZP.useExperiment({ location: "d17fd6_3" }, { autoTrackExposure: !1 }),
        ep = (0, s.e7)([y.default], () => y.default.getCurrentUser()),
        em =
            !er &&
            null != V &&
            V === A.Si.TIER_2 &&
            null != ep &&
            ep.hasHadPremium() &&
            z &&
            null == H &&
            (0, d.aQ)(ec),
        eh = null != (n = ee || et) && n,
        ef = l.useMemo(
            () =>
                (0, O.V7)({
                    skuId: V,
                    isPremium: X,
                    multiMonthPlans: em ? ed : [],
                    currentSubscription: H,
                    defaultPlanId: J,
                }),
            [V, X, ed, H, em, J],
        ),
        eg = et && ef.includes(A.Xh.PREMIUM_MONTH_TIER_2) ? A.Xh.PREMIUM_MONTH_TIER_2 : ef[0],
        ey = (0, s.e7)([j.Z], () => j.Z.get(eg)),
        ej = [
            {
                planId: null == ey ? void 0 : ey.id,
                quantity: 1,
            },
        ],
        [ev, eb] = l.useState(eh),
        [eO, eS] = (0, p.ED)({
            items: ej,
            renewal: !1,
            preventFetch: !eh,
            applyEntitlements: !0,
            trialId: G,
            paymentSourceId: Q.paymentSourceId,
            currency: Q.currency,
        });
    l.useEffect(() => {
        eh && eb((null == eO ? void 0 : eO.subscriptionPeriodEnd) == null);
    }, [eO, eh]),
        (0, u.Z)(
            "Payment Modal Plan Select Step",
            ev,
            5,
            {
                proratedInvoicePreview: eO,
                proratedInvoiceError: eS,
                isEligibleForOffer: eh,
            },
            { tags: { app_context: "billing" } },
        );
    let ex = null != (i = null == eS ? void 0 : eS.message) ? i : R.intl.string(R.t.R0RpRX),
        eP = eh && null == eS,
        eE = eh && null != eS;
    return eP && null == H && eh && (null == eO ? void 0 : eO.subscriptionPeriodEnd) == null
        ? (0, r.jsx)(w.Z, {})
        : (a()(null != q, "Step should be set"),
          a()(ef.length > 0, "Premium plan options should be set"),
          (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(k.P, { giftMessage: ei }),
                  !(er && (0, v.pO)(el)) && (0, r.jsx)(E.Z, { isEligibleForTrial: ee }),
                  (0, r.jsxs)(I.C3, {
                      children: [
                          eP && (0, r.jsx)("hr", { className: L.planSelectSeparatorUpper }),
                          (0, r.jsx)(M.a, {
                              planSkuId: null == ey ? void 0 : ey.skuId,
                              referralTrialOfferId: en,
                          }),
                          (0, r.jsx)(N.Z, {}),
                          (0, r.jsx)(C.Z, {}),
                          eE
                              ? (0, r.jsx)(o.M14, {
                                    type: "critical",
                                    children: ex,
                                })
                              : (0, r.jsx)(g.O, {
                                    planOptions: ef,
                                    eligibleForMultiMonthPlans: em,
                                    selectedPlanId: null == Y ? void 0 : Y.id,
                                    planGroup: F,
                                    subscriptionPeriodEnd: null == eO ? void 0 : eO.subscriptionPeriodEnd,
                                    discountInvoiceItems: et ? (null == eO ? void 0 : eO.invoiceItems) : void 0,
                                    useCompactGiftComponents: eu,
                                    handleClose: U,
                                }),
                          eP &&
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)("hr", { className: L.planSelectSeparatorLower }),
                                      (0, r.jsx)(o.Text, {
                                          variant: "text-xs/normal",
                                          children: R.intl.format(R.t.BHtnqA, {
                                              link: b.Z.getArticleURL(_.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                          }),
                                      }),
                                  ],
                              }),
                      ],
                  }),
                  (0, r.jsxs)(I.O3, {
                      children: [
                          eu && (0, r.jsx)(f.c, {}),
                          (0, r.jsx)(o.mzw, {
                              "data-migration-pending": !0,
                              justify: c.Z.Justify.BETWEEN,
                              align: c.Z.Align.CENTER,
                              className: $,
                              children: (0, r.jsx)(g.y, {
                                  onStepChange: Z,
                                  onBackClick: () => Z(P.h8.SKU_SELECT),
                                  showBackButton: null == D && null == B,
                                  planOptions: ef,
                                  shouldRenderUpdatedPaymentModal: eP,
                                  isTrial: ee,
                              }),
                          }),
                      ],
                  }),
              ],
          }));
}
