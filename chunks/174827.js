n.d(t, { x: () => D }), n(388685);
var r = n(951288),
    l = n(647438),
    a = n(512722),
    i = n.n(a),
    o = n(399606),
    s = n(481060),
    d = n(975608),
    c = n(600164),
    u = n(711459),
    p = n(374649),
    m = n(347896),
    h = n(717401),
    f = n(572517),
    b = n(622909),
    g = n(639119),
    v = n(314404),
    x = n(594174),
    j = n(509545),
    y = n(669079),
    P = n(63063),
    S = n(74538),
    _ = n(987209),
    O = n(563132),
    C = n(409813),
    w = n(51499),
    k = n(456251),
    E = n(614277),
    I = n(435020),
    T = n(809144),
    N = n(698708),
    R = n(844068),
    M = n(405685),
    A = n(981631),
    Z = n(474936),
    B = n(388032),
    L = n(833271);
function D(e) {
    var t, n, a, D;
    let {
            handleStepChange: F,
            initialPlanId: H,
            planGroup: G,
            subscriptionTier: U,
            trialId: K,
            referralTrialOfferId: z,
            handleClose: W,
        } = e,
        {
            activeSubscription: Y,
            hasFetchedSubscriptions: V,
            paymentSourceId: q,
            paymentSources: J,
            selectedSkuId: Q,
            selectedPlan: X,
            step: $,
            defaultPlanId: ee,
            priceOptions: et,
            isPremium: en,
            premiumBrandRefreshBackgroundClassName: er,
        } = (0, O.JL)(),
        { isGift: el, giftRecipient: ea, giftMessage: ei, claimableRewards: eo } = (0, _.wD)(),
        es = (0, h.a5)(X),
        ed = (null == (t = (0, m.Z)()) ? void 0 : t.planSelectionBanner) != null,
        ec = el && es && null != eo && eo.length > 0 && ed,
        eu = (0, I.m)(J, q),
        { newPlans: ep } = u.ZP.useExperiment({ location: "d17fd6_3" }, { autoTrackExposure: !1 }),
        em = (0, o.e7)([x.default], () => x.default.getCurrentUser()),
        eh =
            !el &&
            null != Q &&
            Q === Z.Si.TIER_2 &&
            null != em &&
            em.hasHadPremium() &&
            V &&
            null == Y &&
            (0, u.aQ)(eu),
        ef = (0, g.N)(z),
        eb = !el && null != ef && null != Q && Z.nG[ef.trial_id].skus.includes(Q),
        eg = (0, b.N)(),
        ev = null == eg || null == (n = eg.discount) ? void 0 : n.plan_ids.some((e) => Z.GP[e].skuId === Q),
        ex = !el && null != eg && null != Q && ev,
        ej = null != (a = eb || ex) && a,
        ey = l.useMemo(
            () =>
                (0, S.V7)({
                    skuId: Q,
                    isPremium: en,
                    multiMonthPlans: eh ? ep : [],
                    currentSubscription: Y,
                    defaultPlanId: ee,
                }),
            [Q, en, ep, Y, eh, ee],
        ),
        eP = ex && ey.includes(Z.Xh.PREMIUM_MONTH_TIER_2) ? Z.Xh.PREMIUM_MONTH_TIER_2 : ey[0],
        eS = (0, o.e7)([j.Z], () => j.Z.get(eP)),
        e_ = [
            {
                planId: null == eS ? void 0 : eS.id,
                quantity: 1,
            },
        ],
        [eO, eC] = l.useState(ej),
        [ew, ek] = (0, p.ED)({
            items: e_,
            renewal: !1,
            preventFetch: !ej,
            applyEntitlements: !0,
            trialId: K,
            paymentSourceId: et.paymentSourceId,
            currency: et.currency,
        });
    l.useEffect(() => {
        ej && eC((null == ew ? void 0 : ew.subscriptionPeriodEnd) == null);
    }, [ew, ej]),
        (0, d.Z)(
            "Payment Modal Plan Select Step",
            eO,
            5,
            {
                proratedInvoicePreview: ew,
                proratedInvoiceError: ek,
                isEligibleForOffer: ej,
            },
            { tags: { app_context: "billing" } },
        );
    let eE = null != (D = null == ek ? void 0 : ek.message) ? D : B.intl.string(B.t.R0RpRX),
        eI = ej && null == ek,
        eT = ej && null != ek;
    return eI && null == Y && ej && (null == ew ? void 0 : ew.subscriptionPeriodEnd) == null
        ? (0, r.jsx)(k.Z, {})
        : (i()(null != $, "Step should be set"),
          i()(ey.length > 0, "Premium plan options should be set"),
          (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(T.P, { giftMessage: ei }),
                  !(el && (0, y.pO)(ea)) && (0, r.jsx)(w.Z, { isEligibleForTrial: eb }),
                  (0, r.jsxs)(E.C3, {
                      children: [
                          eI && (0, r.jsx)("hr", { className: L.planSelectSeparatorUpper }),
                          (0, r.jsx)(M.a, {
                              planSkuId: null == eS ? void 0 : eS.skuId,
                              referralTrialOfferId: z,
                          }),
                          (0, r.jsx)(R.Z, {}),
                          (0, r.jsx)(N.Z, {}),
                          eT
                              ? (0, r.jsx)(s.M14, {
                                    type: "critical",
                                    children: eE,
                                })
                              : (0, r.jsx)(v.O, {
                                    planOptions: ey,
                                    eligibleForMultiMonthPlans: eh,
                                    referralTrialOfferId: z,
                                    selectedPlanId: null == X ? void 0 : X.id,
                                    planGroup: G,
                                    subscriptionPeriodEnd: null == ew ? void 0 : ew.subscriptionPeriodEnd,
                                    discountInvoiceItems: ex ? (null == ew ? void 0 : ew.invoiceItems) : void 0,
                                    useCompactGiftComponents: ec,
                                    handleClose: W,
                                }),
                          eI &&
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)("hr", { className: L.planSelectSeparatorLower }),
                                      (0, r.jsx)(s.Text, {
                                          variant: "text-xs/normal",
                                          children: B.intl.format(B.t.BHtnqA, {
                                              link: P.Z.getArticleURL(A.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                          }),
                                      }),
                                  ],
                              }),
                      ],
                  }),
                  (0, r.jsxs)(E.O3, {
                      children: [
                          ec && (0, r.jsx)(f.c, {}),
                          (0, r.jsx)(s.mzw, {
                              "data-migration-pending": !0,
                              justify: c.Z.Justify.BETWEEN,
                              align: c.Z.Align.CENTER,
                              className: er,
                              children: (0, r.jsx)(v.y, {
                                  onStepChange: F,
                                  onBackClick: () => F(C.h8.SKU_SELECT),
                                  showBackButton: null == H && null == U,
                                  planOptions: ey,
                                  shouldRenderUpdatedPaymentModal: eI,
                                  isTrial: eb,
                              }),
                          }),
                      ],
                  }),
              ],
          }));
}
