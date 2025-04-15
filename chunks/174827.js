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
    h = n(104494),
    f = n(639119),
    j = n(642530),
    m = n(381507),
    L = n(314404),
    g = n(594174),
    S = n(509545),
    E = n(669079),
    y = n(63063),
    I = n(74538),
    N = n(987209),
    b = n(563132),
    T = n(409813),
    M = n(107998),
    P = n(51499),
    O = n(456251),
    Z = n(614277),
    v = n(435020),
    A = n(809144),
    k = n(698708),
    U = n(844068),
    w = n(981631),
    R = n(474936),
    F = n(388032),
    B = n(428523);
function H(e) {
    var t, n, l, H;
    let { handleStepChange: W, initialPlanId: G, planGroup: D, subscriptionTier: Y, trialId: z, referralTrialOfferId: K, handleClose: X } = e,
        { activeSubscription: V, hasFetchedSubscriptions: Q, paymentSourceId: q, paymentSources: J, selectedSkuId: $, selectedPlan: ee, step: et, defaultPlanId: en, priceOptions: er, isPremium: ei } = (0, b.JL)(),
        { isGift: el, giftRecipient: es, giftMessage: eo, claimableRewards: ea } = (0, N.wD)(),
        { paymentModalBanner: eC } = (0, M.zb)(),
        ed = (0, p.a5)(ee),
        ec = (null == (t = (0, _.Z)()) ? void 0 : t.planSelectionBanner) != null,
        eu = el && ed && null != ea && ea.length > 0 && ec,
        ep = (0, v.m)(J, q),
        { newPlans: e_ } = c.ZP.useExperiment({ location: 'd17fd6_3' }, { autoTrackExposure: !1 }),
        ex = (0, o.e7)([g.default], () => g.default.getCurrentUser()),
        eh = !el && null != $ && $ === R.Si.TIER_2 && null != ex && ex.hasHadPremium() && Q && null == V && (0, c.aQ)(ep),
        ef = (0, f.N)(K),
        ej = !el && null != ef && null != $ && R.nG[ef.trial_id].skus.includes($),
        em = (0, h.Ng)(),
        eL = null == em || null == (n = em.discount) ? void 0 : n.plan_ids.some((e) => R.GP[e].skuId === $),
        eg = !el && null != em && null != $ && eL,
        eS = null != (l = ej || eg) && l,
        eE = i.useMemo(
            () =>
                (0, I.V7)({
                    skuId: $,
                    isPremium: ei,
                    multiMonthPlans: eh ? e_ : [],
                    currentSubscription: V,
                    defaultPlanId: en
                }),
            [$, ei, e_, V, eh, en]
        ),
        ey = eg && eE.includes(R.Xh.PREMIUM_MONTH_TIER_2) ? R.Xh.PREMIUM_MONTH_TIER_2 : eE[0],
        eI = (0, o.e7)([S.Z], () => S.Z.get(ey)),
        eN = [
            {
                planId: null == eI ? void 0 : eI.id,
                quantity: 1
            }
        ],
        [eb, eT] = i.useState(eS),
        [eM, eP] = (0, u.ED)({
            items: eN,
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
            eb,
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
        eA = eZ && null == V && !!eS && (null == eM ? void 0 : eM.subscriptionPeriodEnd) == null,
        ek = !el && (null == eI ? void 0 : eI.skuId) === R.Si.TIER_2 && (null == ef ? void 0 : ef.referrer_id) != null,
        eU = null;
    return ((eU = null != eC ? eC : ek ? (0, r.jsx)(m.Z, {}) : (0, r.jsx)(j.Z, {})), eA)
        ? (0, r.jsx)(O.Z, {})
        : (s()(null != et, 'Step should be set'),
          s()(eE.length > 0, 'Premium plan options should be set'),
          (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(A.P, { giftMessage: eo }),
                  !(el && (0, E.pO)(es)) && (0, r.jsx)(P.Z, { isEligibleForTrial: ej }),
                  (0, r.jsxs)(Z.C3, {
                      children: [
                          eZ && (0, r.jsx)('hr', { className: B.planSelectSeparatorUpper }),
                          eU,
                          (0, r.jsx)(U.Z, {}),
                          (0, r.jsx)(k.Z, {}),
                          ev
                              ? (0, r.jsx)(a.kzN, { children: eO })
                              : (0, r.jsx)(L.O, {
                                    planOptions: eE,
                                    eligibleForMultiMonthPlans: eh,
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
                                          children: F.NW.format(F.t.BHtnqK, { link: y.Z.getArticleURL(w.BhN.PREMIUM_DETAILS_CANCEL_SUB) })
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
                                  planOptions: eE,
                                  shouldRenderUpdatedPaymentModal: eZ,
                                  isTrial: ej
                              })
                          })
                      ]
                  })
              ]
          }));
}
