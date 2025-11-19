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
    y = n(509545),
    P = n(669079),
    S = n(63063),
    j = n(74538),
    _ = n(987209),
    w = n(563132),
    O = n(409813),
    C = n(51499),
    k = n(456251),
    E = n(614277),
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
            trialId: z,
            referralTrialOfferId: K,
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
            V &&
            null == Y &&
            (0, u.aQ)(eu),
        ef = (0, g.N)(K),
        eb = !el && null != ef && null != Q && Z.nG[ef.trial_id].skus.includes(Q),
        eg = (0, b.N)(),
        ev = null == eg || null == (n = eg.discount) ? void 0 : n.plan_ids.some((e) => Z.GP[e].skuId === Q),
        ex = !el && null != eg && null != Q && ev,
        ey = null != (a = eb || ex) && a,
        eP = l.useMemo(
            () =>
                (0, j.V7)({
                    skuId: Q,
                    isPremium: en,
                    multiMonthPlans: eh ? ep : [],
                    currentSubscription: Y,
                    defaultPlanId: ee,
                }),
            [Q, en, ep, Y, eh, ee],
        ),
        eS = ex && eP.includes(Z.Xh.PREMIUM_MONTH_TIER_2) ? Z.Xh.PREMIUM_MONTH_TIER_2 : eP[0],
        ej = (0, o.e7)([y.Z], () => y.Z.get(eS)),
        e_ = [
            {
                planId: null == ej ? void 0 : ej.id,
                quantity: 1,
            },
        ],
        [ew, eO] = l.useState(ey),
        [eC, ek] = (0, p.ED)({
            items: e_,
            renewal: !1,
            preventFetch: !ey,
            applyEntitlements: !0,
            trialId: z,
            paymentSourceId: et.paymentSourceId,
            currency: et.currency,
        });
    l.useEffect(() => {
        ey && eO((null == eC ? void 0 : eC.subscriptionPeriodEnd) == null);
    }, [eC, ey]),
        (0, d.Z)(
            "Payment Modal Plan Select Step",
            ew,
            5,
            {
                proratedInvoicePreview: eC,
                proratedInvoiceError: ek,
                isEligibleForOffer: ey,
            },
            { tags: { app_context: "billing" } },
        );
    let eE = null != (D = null == ek ? void 0 : ek.message) ? D : L.intl.string(L.t.R0RpRX),
        eI = ey && null == ek,
        eT = ey && null != ek;
    return eI && null == Y && ey && (null == eC ? void 0 : eC.subscriptionPeriodEnd) == null
        ? (0, r.jsx)(k.Z, {})
        : (i()(null != $, "Step should be set"),
          i()(eP.length > 0, "Premium plan options should be set"),
          (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(T.P, { giftMessage: ei }),
                  !(el && (0, P.pO)(ea)) && (0, r.jsx)(C.Z, { isEligibleForTrial: eb }),
                  (0, r.jsxs)(E.C3, {
                      children: [
                          eI && (0, r.jsx)("hr", { className: B.planSelectSeparatorUpper }),
                          (0, r.jsx)(M.a, {
                              planSkuId: null == ej ? void 0 : ej.skuId,
                              referralTrialOfferId: K,
                          }),
                          (0, r.jsx)(R.Z, {}),
                          (0, r.jsx)(N.Z, {}),
                          eT
                              ? (0, r.jsx)(s.M14, {
                                    type: "critical",
                                    children: eE,
                                })
                              : (0, r.jsx)(v.O, {
                                    planOptions: eP,
                                    eligibleForMultiMonthPlans: eh,
                                    referralTrialOfferId: K,
                                    selectedPlanId: null == X ? void 0 : X.id,
                                    planGroup: G,
                                    subscriptionPeriodEnd: null == eC ? void 0 : eC.subscriptionPeriodEnd,
                                    discountInvoiceItems: ex ? (null == eC ? void 0 : eC.invoiceItems) : void 0,
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
                                              link: S.Z.getArticleURL(A.BhN.PREMIUM_DETAILS_CANCEL_SUB),
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
                                  onBackClick: () => F(O.h8.SKU_SELECT),
                                  showBackButton: null == H && null == U,
                                  planOptions: eP,
                                  shouldRenderUpdatedPaymentModal: eI,
                                  isTrial: eb,
                              }),
                          }),
                      ],
                  }),
              ],
          }));
}
