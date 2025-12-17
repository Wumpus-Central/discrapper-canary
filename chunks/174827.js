n.d(t, { x: () => F }), n(388685);
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
    g = n(622909),
    y = n(639119),
    j = n(314404),
    v = n(594174),
    b = n(509545),
    O = n(669079),
    S = n(63063),
    P = n(74538),
    x = n(987209),
    E = n(563132),
    w = n(409813),
    I = n(51499),
    T = n(456251),
    k = n(614277),
    C = n(435020),
    N = n(809144),
    M = n(698708),
    _ = n(844068),
    R = n(405685),
    A = n(981631),
    L = n(474936),
    Z = n(388032),
    D = n(903845);
function F(e) {
    var t, n, i, F;
    let {
            handleStepChange: G,
            initialPlanId: B,
            planGroup: U,
            subscriptionTier: H,
            trialId: z,
            referralTrialOfferId: K,
            handleClose: W,
        } = e,
        {
            activeSubscription: V,
            hasFetchedSubscriptions: Y,
            paymentSourceId: q,
            paymentSources: J,
            selectedSkuId: Q,
            selectedPlan: X,
            step: $,
            defaultPlanId: ee,
            priceOptions: et,
            isPremium: en,
            premiumBrandRefreshBackgroundClassName: er,
        } = (0, E.JL)(),
        { isGift: el, giftRecipient: ei, giftMessage: ea, claimableRewards: es } = (0, x.wD)(),
        eo = (0, h.a5)(X),
        eu = (null == (t = (0, m.Z)()) ? void 0 : t.planSelectionBanner) != null,
        ec = el && eo && null != es && es.length > 0 && eu,
        ed = (0, C.m)(J, q),
        { newPlans: ep } = d.ZP.useExperiment({ location: "d17fd6_3" }, { autoTrackExposure: !1 }),
        em = (0, s.e7)([v.default], () => v.default.getCurrentUser()),
        eh =
            !el &&
            null != Q &&
            Q === L.Si.TIER_2 &&
            null != em &&
            em.hasHadPremium() &&
            Y &&
            null == V &&
            (0, d.aQ)(ed),
        ef = (0, y.N)(K),
        eg = !el && null != ef && null != Q && L.nG[ef.trial_id].skus.includes(Q),
        ey = (0, g.N)(),
        ej = null == ey || null == (n = ey.discount) ? void 0 : n.plan_ids.some((e) => L.GP[e].skuId === Q),
        ev = !el && null != ey && null != Q && ej,
        eb = null != (i = eg || ev) && i,
        eO = l.useMemo(
            () =>
                (0, P.V7)({
                    skuId: Q,
                    isPremium: en,
                    multiMonthPlans: eh ? ep : [],
                    currentSubscription: V,
                    defaultPlanId: ee,
                }),
            [Q, en, ep, V, eh, ee],
        ),
        eS = ev && eO.includes(L.Xh.PREMIUM_MONTH_TIER_2) ? L.Xh.PREMIUM_MONTH_TIER_2 : eO[0],
        eP = (0, s.e7)([b.Z], () => b.Z.get(eS)),
        ex = [
            {
                planId: null == eP ? void 0 : eP.id,
                quantity: 1,
            },
        ],
        [eE, ew] = l.useState(eb),
        [eI, eT] = (0, p.ED)({
            items: ex,
            renewal: !1,
            preventFetch: !eb,
            applyEntitlements: !0,
            trialId: z,
            paymentSourceId: et.paymentSourceId,
            currency: et.currency,
        });
    l.useEffect(() => {
        eb && ew((null == eI ? void 0 : eI.subscriptionPeriodEnd) == null);
    }, [eI, eb]),
        (0, u.Z)(
            "Payment Modal Plan Select Step",
            eE,
            5,
            {
                proratedInvoicePreview: eI,
                proratedInvoiceError: eT,
                isEligibleForOffer: eb,
            },
            { tags: { app_context: "billing" } },
        );
    let ek = null != (F = null == eT ? void 0 : eT.message) ? F : Z.intl.string(Z.t.R0RpRX),
        eC = eb && null == eT,
        eN = eb && null != eT;
    return eC && null == V && eb && (null == eI ? void 0 : eI.subscriptionPeriodEnd) == null
        ? (0, r.jsx)(T.Z, {})
        : (a()(null != $, "Step should be set"),
          a()(eO.length > 0, "Premium plan options should be set"),
          (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(N.P, { giftMessage: ea }),
                  !(el && (0, O.pO)(ei)) && (0, r.jsx)(I.Z, { isEligibleForTrial: eg }),
                  (0, r.jsxs)(k.C3, {
                      children: [
                          eC && (0, r.jsx)("hr", { className: D.planSelectSeparatorUpper }),
                          (0, r.jsx)(R.a, {
                              planSkuId: null == eP ? void 0 : eP.skuId,
                              referralTrialOfferId: K,
                          }),
                          (0, r.jsx)(_.Z, {}),
                          (0, r.jsx)(M.Z, {}),
                          eN
                              ? (0, r.jsx)(o.M14, {
                                    type: "critical",
                                    children: ek,
                                })
                              : (0, r.jsx)(j.O, {
                                    planOptions: eO,
                                    eligibleForMultiMonthPlans: eh,
                                    referralTrialOfferId: K,
                                    selectedPlanId: null == X ? void 0 : X.id,
                                    planGroup: U,
                                    subscriptionPeriodEnd: null == eI ? void 0 : eI.subscriptionPeriodEnd,
                                    discountInvoiceItems: ev ? (null == eI ? void 0 : eI.invoiceItems) : void 0,
                                    useCompactGiftComponents: ec,
                                    handleClose: W,
                                }),
                          eC &&
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)("hr", { className: D.planSelectSeparatorLower }),
                                      (0, r.jsx)(o.Text, {
                                          variant: "text-xs/normal",
                                          children: Z.intl.format(Z.t.BHtnqA, {
                                              link: S.Z.getArticleURL(A.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                          }),
                                      }),
                                  ],
                              }),
                      ],
                  }),
                  (0, r.jsxs)(k.O3, {
                      children: [
                          ec && (0, r.jsx)(f.c, {}),
                          (0, r.jsx)(o.mzw, {
                              "data-migration-pending": !0,
                              justify: c.Z.Justify.BETWEEN,
                              align: c.Z.Align.CENTER,
                              className: er,
                              children: (0, r.jsx)(j.y, {
                                  onStepChange: G,
                                  onBackClick: () => G(w.h8.SKU_SELECT),
                                  showBackButton: null == B && null == H,
                                  planOptions: eO,
                                  shouldRenderUpdatedPaymentModal: eC,
                                  isTrial: eg,
                              }),
                          }),
                      ],
                  }),
              ],
          }));
}
