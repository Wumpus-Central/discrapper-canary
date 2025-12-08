n.d(t, { x: () => F }), n(388685);
var l = n(54381),
    r = n(473749),
    i = n(512722),
    a = n.n(i),
    s = n(399606),
    o = n(481060),
    u = n(975608),
    c = n(600164),
    d = n(711459),
    m = n(374649),
    p = n(347896),
    h = n(717401),
    f = n(572517),
    g = n(622909),
    v = n(639119),
    j = n(314404),
    y = n(594174),
    b = n(509545),
    S = n(669079),
    x = n(63063),
    P = n(74538),
    O = n(987209),
    E = n(563132),
    I = n(409813),
    w = n(51499),
    T = n(456251),
    k = n(614277),
    C = n(435020),
    N = n(809144),
    M = n(698708),
    R = n(844068),
    _ = n(405685),
    A = n(981631),
    L = n(474936),
    Z = n(388032),
    D = n(833271);
function F(e) {
    var t, n, i, F;
    let {
            handleStepChange: B,
            initialPlanId: G,
            planGroup: H,
            subscriptionTier: U,
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
            premiumBrandRefreshBackgroundClassName: el,
        } = (0, E.JL)(),
        { isGift: er, giftRecipient: ei, giftMessage: ea, claimableRewards: es } = (0, O.wD)(),
        eo = (0, h.a5)(X),
        eu = (null == (t = (0, p.Z)()) ? void 0 : t.planSelectionBanner) != null,
        ec = er && eo && null != es && es.length > 0 && eu,
        ed = (0, C.m)(J, q),
        { newPlans: em } = d.ZP.useExperiment({ location: "d17fd6_3" }, { autoTrackExposure: !1 }),
        ep = (0, s.e7)([y.default], () => y.default.getCurrentUser()),
        eh =
            !er &&
            null != Q &&
            Q === L.Si.TIER_2 &&
            null != ep &&
            ep.hasHadPremium() &&
            Y &&
            null == V &&
            (0, d.aQ)(ed),
        ef = (0, v.N)(K),
        eg = !er && null != ef && null != Q && L.nG[ef.trial_id].skus.includes(Q),
        ev = (0, g.N)(),
        ej = null == ev || null == (n = ev.discount) ? void 0 : n.plan_ids.some((e) => L.GP[e].skuId === Q),
        ey = !er && null != ev && null != Q && ej,
        eb = null != (i = eg || ey) && i,
        eS = r.useMemo(
            () =>
                (0, P.V7)({
                    skuId: Q,
                    isPremium: en,
                    multiMonthPlans: eh ? em : [],
                    currentSubscription: V,
                    defaultPlanId: ee,
                }),
            [Q, en, em, V, eh, ee],
        ),
        ex = ey && eS.includes(L.Xh.PREMIUM_MONTH_TIER_2) ? L.Xh.PREMIUM_MONTH_TIER_2 : eS[0],
        eP = (0, s.e7)([b.Z], () => b.Z.get(ex)),
        eO = [
            {
                planId: null == eP ? void 0 : eP.id,
                quantity: 1,
            },
        ],
        [eE, eI] = r.useState(eb),
        [ew, eT] = (0, m.ED)({
            items: eO,
            renewal: !1,
            preventFetch: !eb,
            applyEntitlements: !0,
            trialId: z,
            paymentSourceId: et.paymentSourceId,
            currency: et.currency,
        });
    r.useEffect(() => {
        eb && eI((null == ew ? void 0 : ew.subscriptionPeriodEnd) == null);
    }, [ew, eb]),
        (0, u.Z)(
            "Payment Modal Plan Select Step",
            eE,
            5,
            {
                proratedInvoicePreview: ew,
                proratedInvoiceError: eT,
                isEligibleForOffer: eb,
            },
            { tags: { app_context: "billing" } },
        );
    let ek = null != (F = null == eT ? void 0 : eT.message) ? F : Z.intl.string(Z.t.R0RpRX),
        eC = eb && null == eT,
        eN = eb && null != eT;
    return eC && null == V && eb && (null == ew ? void 0 : ew.subscriptionPeriodEnd) == null
        ? (0, l.jsx)(T.Z, {})
        : (a()(null != $, "Step should be set"),
          a()(eS.length > 0, "Premium plan options should be set"),
          (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(N.P, { giftMessage: ea }),
                  !(er && (0, S.pO)(ei)) && (0, l.jsx)(w.Z, { isEligibleForTrial: eg }),
                  (0, l.jsxs)(k.C3, {
                      children: [
                          eC && (0, l.jsx)("hr", { className: D.planSelectSeparatorUpper }),
                          (0, l.jsx)(_.a, {
                              planSkuId: null == eP ? void 0 : eP.skuId,
                              referralTrialOfferId: K,
                          }),
                          (0, l.jsx)(R.Z, {}),
                          (0, l.jsx)(M.Z, {}),
                          eN
                              ? (0, l.jsx)(o.M14, {
                                    type: "critical",
                                    children: ek,
                                })
                              : (0, l.jsx)(j.O, {
                                    planOptions: eS,
                                    eligibleForMultiMonthPlans: eh,
                                    referralTrialOfferId: K,
                                    selectedPlanId: null == X ? void 0 : X.id,
                                    planGroup: H,
                                    subscriptionPeriodEnd: null == ew ? void 0 : ew.subscriptionPeriodEnd,
                                    discountInvoiceItems: ey ? (null == ew ? void 0 : ew.invoiceItems) : void 0,
                                    useCompactGiftComponents: ec,
                                    handleClose: W,
                                }),
                          eC &&
                              (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      (0, l.jsx)("hr", { className: D.planSelectSeparatorLower }),
                                      (0, l.jsx)(o.Text, {
                                          variant: "text-xs/normal",
                                          children: Z.intl.format(Z.t.BHtnqA, {
                                              link: x.Z.getArticleURL(A.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                          }),
                                      }),
                                  ],
                              }),
                      ],
                  }),
                  (0, l.jsxs)(k.O3, {
                      children: [
                          ec && (0, l.jsx)(f.c, {}),
                          (0, l.jsx)(o.mzw, {
                              "data-migration-pending": !0,
                              justify: c.Z.Justify.BETWEEN,
                              align: c.Z.Align.CENTER,
                              className: el,
                              children: (0, l.jsx)(j.y, {
                                  onStepChange: B,
                                  onBackClick: () => B(I.h8.SKU_SELECT),
                                  showBackButton: null == G && null == U,
                                  planOptions: eS,
                                  shouldRenderUpdatedPaymentModal: eC,
                                  isTrial: eg,
                              }),
                          }),
                      ],
                  }),
              ],
          }));
}
