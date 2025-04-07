n.d(t, { x: () => H }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(512722),
    s = n.n(l),
    o = n(399606),
    a = n(481060),
    C = n(975608),
    d = n(600164),
    c = n(711459),
    u = n(374649),
    p = n(717401),
    _ = n(286961),
    x = n(572517),
    f = n(104494),
    h = n(639119),
    m = n(642530),
    j = n(381507),
    L = n(314404),
    g = n(594174),
    S = n(509545),
    y = n(669079),
    E = n(63063),
    b = n(74538),
    I = n(987209),
    N = n(563132),
    T = n(409813),
    M = n(107998),
    P = n(51499),
    O = n(456251),
    Z = n(614277),
    v = n(435020),
    w = n(809144),
    k = n(698708),
    A = n(844068),
    U = n(981631),
    R = n(474936),
    F = n(388032),
    B = n(428523);
function H(e) {
    var t, n, l, H;
    let { handleStepChange: W, initialPlanId: G, planGroup: D, subscriptionTier: Y, trialId: z, referralTrialOfferId: K, handleClose: X } = e,
        { activeSubscription: V, hasFetchedSubscriptions: Q, paymentSourceId: q, paymentSources: J, selectedSkuId: $, selectedPlan: ee, step: et, defaultPlanId: en, priceOptions: er, isPremium: ei } = (0, N.JL)(),
        { isGift: el, giftRecipient: es, giftMessage: eo, claimableRewards: ea } = (0, I.wD)(),
        { paymentModalBanner: eC } = (0, M.zb)(),
        ed = (0, p.a5)(ee),
        ec = (null == (t = (0, _.Z)()) ? void 0 : t.planSelectionBanner) != null,
        eu = el && ed && null != ea && ea.length > 0 && ec,
        ep = (0, v.m)(J, q),
        { newPlans: e_ } = c.ZP.useExperiment({ location: 'd17fd6_3' }, { autoTrackExposure: !1 }),
        ex = (0, o.e7)([g.default], () => g.default.getCurrentUser()),
        ef = !el && null != $ && $ === R.Si.TIER_2 && null != ex && ex.hasHadPremium() && Q && null == V && (0, c.aQ)(ep),
        eh = (0, h.N)(K),
        em = !el && null != eh && null != $ && R.nG[eh.trial_id].skus.includes($),
        ej = (0, f.Ng)(),
        eL = null == ej || null == (n = ej.discount) ? void 0 : n.plan_ids.some((e) => R.GP[e].skuId === $),
        eg = !el && null != ej && null != $ && eL,
        eS = null != (l = em || eg) && l,
        ey = i.useMemo(
            () =>
                (0, b.V7)({
                    skuId: $,
                    isPremium: ei,
                    multiMonthPlans: ef ? e_ : [],
                    currentSubscription: V,
                    defaultPlanId: en
                }),
            [$, ei, e_, V, ef, en]
        ),
        eE = eg && ey.includes(R.Xh.PREMIUM_MONTH_TIER_2) ? R.Xh.PREMIUM_MONTH_TIER_2 : ey[0],
        eb = (0, o.e7)([S.Z], () => S.Z.get(eE)),
        eI = [
            {
                planId: null == eb ? void 0 : eb.id,
                quantity: 1
            }
        ],
        [eN, eT] = i.useState(eS),
        [eM, eP] = (0, u.ED)({
            items: eI,
            renewal: !1,
            preventFetch: !eS,
            applyEntitlements: !0,
            trialId: z,
            paymentSourceId: er.paymentSourceId,
            currency: er.currency
        });
    i.useEffect(() => {
        eS && eT((null == eM ? void 0 : eM.subscriptionPeriodEnd) == null);
    }, [eM, eS]),
        (0, C.Z)(
            'Payment Modal Plan Select Step',
            eN,
            5,
            {
                proratedInvoicePreview: eM,
                proratedInvoiceError: eP,
                isEligibleForOffer: eS
            },
            { tags: { app_context: 'billing' } }
        );
    let eO = null != (H = null == eP ? void 0 : eP.message) ? H : F.NW.string(F.t.R0RpRU),
        eZ = eS && null == eP,
        ev = eS && null != eP,
        ew = eZ && null == V && !!eS && (null == eM ? void 0 : eM.subscriptionPeriodEnd) == null,
        ek = !el && (null == eb ? void 0 : eb.skuId) === R.Si.TIER_2 && (null == eh ? void 0 : eh.referrer_id) != null,
        eA = null;
    return ((eA = null != eC ? eC : ek ? (0, r.jsx)(j.Z, {}) : (0, r.jsx)(m.Z, {})), ew)
        ? (0, r.jsx)(O.Z, {})
        : (s()(null != et, 'Step should be set'),
          s()(ey.length > 0, 'Premium plan options should be set'),
          (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(w.P, { giftMessage: eo }),
                  !(el && (0, y.pO)(es)) && (0, r.jsx)(P.Z, { isEligibleForTrial: em }),
                  (0, r.jsxs)(Z.C3, {
                      children: [
                          eZ && (0, r.jsx)('hr', { className: B.planSelectSeparatorUpper }),
                          eA,
                          (0, r.jsx)(A.Z, {}),
                          (0, r.jsx)(k.Z, {}),
                          ev
                              ? (0, r.jsx)(a.kzN, { children: eO })
                              : (0, r.jsx)(L.O, {
                                    planOptions: ey,
                                    eligibleForMultiMonthPlans: ef,
                                    referralTrialOfferId: K,
                                    selectedPlanId: null == ee ? void 0 : ee.id,
                                    planGroup: D,
                                    subscriptionPeriodEnd: null == eM ? void 0 : eM.subscriptionPeriodEnd,
                                    discountInvoiceItems: eg ? (null == eM ? void 0 : eM.invoiceItems) : void 0,
                                    useCompactGiftComponents: eu,
                                    handleClose: X
                                }),
                          eZ &&
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)('hr', { className: B.planSelectSeparatorLower }),
                                      (0, r.jsx)(a.Text, {
                                          variant: 'text-xs/normal',
                                          children: F.NW.format(F.t.BHtnqK, { link: E.Z.getArticleURL(U.BhN.PREMIUM_DETAILS_CANCEL_SUB) })
                                      })
                                  ]
                              })
                      ]
                  }),
                  (0, r.jsxs)(Z.O3, {
                      children: [
                          eu && (0, r.jsx)(x.c, {}),
                          (0, r.jsx)(a.mzw, {
                              justify: d.Z.Justify.BETWEEN,
                              align: d.Z.Align.CENTER,
                              children: (0, r.jsx)(L.y, {
                                  onStepChange: W,
                                  onBackClick: () => W(T.h8.SKU_SELECT),
                                  showBackButton: null == G && null == Y,
                                  planOptions: ey,
                                  shouldRenderUpdatedPaymentModal: eZ,
                                  isTrial: em
                              })
                          })
                      ]
                  })
              ]
          }));
}
