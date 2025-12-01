n.d(t, { x: () => D }), n(388685);
var r = n(54381),
    l = n(473749),
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
    P = n(509545),
    y = n(669079),
    j = n(63063),
    S = n(74538),
    _ = n(987209),
    w = n(563132),
    C = n(409813),
    O = n(51499),
    E = n(456251),
    k = n(614277),
    I = n(435020),
    T = n(809144),
    N = n(698708),
    R = n(844068),
    M = n(405685),
    A = n(981631),
    Z = n(474936),
    L = n(388032),
    B = n(833271);
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
        } = (0, w.JL)(),
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
            Y &&
            null == V &&
            (0, u.aQ)(eu),
        ef = (0, g.N)(z),
        eb = !el && null != ef && null != Q && Z.nG[ef.trial_id].skus.includes(Q),
        eg = (0, b.N)(),
        ev = null == eg || null == (n = eg.discount) ? void 0 : n.plan_ids.some((e) => Z.GP[e].skuId === Q),
        ex = !el && null != eg && null != Q && ev,
        eP = null != (a = eb || ex) && a,
        ey = l.useMemo(
            () =>
                (0, S.V7)({
                    skuId: Q,
                    isPremium: en,
                    multiMonthPlans: eh ? ep : [],
                    currentSubscription: V,
                    defaultPlanId: ee,
                }),
            [Q, en, ep, V, eh, ee],
        ),
        ej = ex && ey.includes(Z.Xh.PREMIUM_MONTH_TIER_2) ? Z.Xh.PREMIUM_MONTH_TIER_2 : ey[0],
        eS = (0, o.e7)([P.Z], () => P.Z.get(ej)),
        e_ = [
            {
                planId: null == eS ? void 0 : eS.id,
                quantity: 1,
            },
        ],
        [ew, eC] = l.useState(eP),
        [eO, eE] = (0, p.ED)({
            items: e_,
            renewal: !1,
            preventFetch: !eP,
            applyEntitlements: !0,
            trialId: K,
            paymentSourceId: et.paymentSourceId,
            currency: et.currency,
        });
    l.useEffect(() => {
        eP && eC((null == eO ? void 0 : eO.subscriptionPeriodEnd) == null);
    }, [eO, eP]),
        (0, d.Z)(
            "Payment Modal Plan Select Step",
            ew,
            5,
            {
                proratedInvoicePreview: eO,
                proratedInvoiceError: eE,
                isEligibleForOffer: eP,
            },
            { tags: { app_context: "billing" } },
        );
    let ek = null != (D = null == eE ? void 0 : eE.message) ? D : L.intl.string(L.t.R0RpRX),
        eI = eP && null == eE,
        eT = eP && null != eE;
    return eI && null == V && eP && (null == eO ? void 0 : eO.subscriptionPeriodEnd) == null
        ? (0, r.jsx)(E.Z, {})
        : (i()(null != $, "Step should be set"),
          i()(ey.length > 0, "Premium plan options should be set"),
          (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(T.P, { giftMessage: ei }),
                  !(el && (0, y.pO)(ea)) && (0, r.jsx)(O.Z, { isEligibleForTrial: eb }),
                  (0, r.jsxs)(k.C3, {
                      children: [
                          eI && (0, r.jsx)("hr", { className: B.planSelectSeparatorUpper }),
                          (0, r.jsx)(M.a, {
                              planSkuId: null == eS ? void 0 : eS.skuId,
                              referralTrialOfferId: z,
                          }),
                          (0, r.jsx)(R.Z, {}),
                          (0, r.jsx)(N.Z, {}),
                          eT
                              ? (0, r.jsx)(s.M14, {
                                    type: "critical",
                                    children: ek,
                                })
                              : (0, r.jsx)(v.O, {
                                    planOptions: ey,
                                    eligibleForMultiMonthPlans: eh,
                                    referralTrialOfferId: z,
                                    selectedPlanId: null == X ? void 0 : X.id,
                                    planGroup: G,
                                    subscriptionPeriodEnd: null == eO ? void 0 : eO.subscriptionPeriodEnd,
                                    discountInvoiceItems: ex ? (null == eO ? void 0 : eO.invoiceItems) : void 0,
                                    useCompactGiftComponents: ec,
                                    handleClose: W,
                                }),
                          eI &&
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)("hr", { className: B.planSelectSeparatorLower }),
                                      (0, r.jsx)(s.Text, {
                                          variant: "text-xs/normal",
                                          children: L.intl.format(L.t.BHtnqA, {
                                              link: j.Z.getArticleURL(A.BhN.PREMIUM_DETAILS_CANCEL_SUB),
                                          }),
                                      }),
                                  ],
                              }),
                      ],
                  }),
                  (0, r.jsxs)(k.O3, {
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
