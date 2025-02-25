n.d(t, { x: () => F }), n(47120);
var l = n(200651),
    i = n(192379),
    s = n(512722),
    r = n.n(s),
    a = n(399606),
    o = n(481060),
    C = n(975608),
    d = n(600164),
    c = n(711459),
    u = n(374649),
    p = n(650032),
    x = n(439017),
    f = n(717401),
    h = n(286961),
    _ = n(572517),
    j = n(104494),
    m = n(639119),
    L = n(642530),
    g = n(381507),
    E = n(314404),
    S = n(594174),
    N = n(509545),
    y = n(669079),
    I = n(63063),
    O = n(74538),
    v = n(987209),
    b = n(563132),
    P = n(409813),
    T = n(107998),
    M = n(51499),
    Z = n(456251),
    w = n(614277),
    k = n(809144),
    U = n(698708),
    A = n(844068),
    R = n(981631),
    H = n(474936),
    W = n(388032),
    B = n(652725);
function F(e) {
    var t, n, s, F;
    let { handleStepChange: G, initialPlanId: D, subscriptionTier: Y, trialId: K, referralTrialOfferId: X, handleClose: z } = e,
        { activeSubscription: V, hasFetchedSubscriptions: Q, paymentSourceId: q, paymentSources: J, selectedSkuId: $, selectedPlan: ee, step: et, defaultPlanId: en, priceOptions: el, isPremium: ei } = (0, b.JL)(),
        { isGift: es, giftRecipient: er, giftMessage: ea, claimableRewards: eo } = (0, v.wD)(),
        { planSelectBanner: eC } = (0, T.zb)(),
        ed = (0, f.a5)(ee),
        ec = (null === (t = (0, h.Z)()) || void 0 === t ? void 0 : t.planSelectionBanner) != null,
        eu = es && ed && null != eo && eo.length > 0 && ec,
        ep = null != q ? J[q] : null,
        { newPlans: ex } = c.ZP.useExperiment({ location: 'd17fd6_3' }, { autoTrackExposure: !1 }),
        ef = (0, a.e7)([S.default], () => S.default.getCurrentUser()),
        eh = !es && null != $ && $ === H.Si.TIER_2 && null != ef && ef.hasHadPremium() && Q && null == V && (0, c.aQ)(ep),
        e_ = (0, m.N)(X),
        ej = !es && null != e_ && null != $ && H.nG[e_.trial_id].skus.includes($),
        em = (0, j.Ng)(),
        eL = null == em ? void 0 : null === (n = em.discount) || void 0 === n ? void 0 : n.plan_ids.some((e) => H.GP[e].skuId === $),
        eg = !es && null != em && null != $ && eL,
        eE = null !== (s = ej || eg) && void 0 !== s && s,
        { defaultToMonthlyPlan: eS } = x.k.useExperiment({ location: 'd17fd6_4' }, { autoTrackExposure: !1 }),
        eN = i.useMemo(
            () =>
                (0, O.V7)({
                    skuId: $,
                    isPremium: ei,
                    multiMonthPlans: eh ? ex : [],
                    currentSubscription: V,
                    isGift: es,
                    isEligibleForTrial: ej,
                    defaultPlanId: en,
                    defaultToMonthlyPlan: eS
                }),
            [$, ei, ex, V, eh, es, ej, en, eS]
        ),
        ey = eg && eN.includes(H.Xh.PREMIUM_MONTH_TIER_2) ? H.Xh.PREMIUM_MONTH_TIER_2 : eN[0],
        eI = (0, a.e7)([N.Z], () => N.Z.get(ey)),
        eO = [
            {
                planId: null == eI ? void 0 : eI.id,
                quantity: 1
            }
        ],
        [ev, eb] = i.useState(eE),
        [eP, eT] = (0, u.ED)({
            items: eO,
            renewal: !1,
            preventFetch: !eE,
            applyEntitlements: !0,
            trialId: K,
            paymentSourceId: el.paymentSourceId,
            currency: el.currency
        });
    i.useEffect(() => {
        eE && eb((null == eP ? void 0 : eP.subscriptionPeriodEnd) == null);
    }, [eP, eE]),
        (0, C.Z)(
            'Payment Modal Plan Select Step',
            ev,
            5,
            {
                proratedInvoicePreview: eP,
                proratedInvoiceError: eT,
                isEligibleForOffer: eE
            },
            { tags: { app_context: 'billing' } }
        );
    let eM = null !== (F = null == eT ? void 0 : eT.message) && void 0 !== F ? F : W.NW.string(W.t.R0RpRU),
        eZ = eE && null == eT,
        ew = eE && null != eT,
        ek = eZ && null == V && !!eE && (null == eP ? void 0 : eP.subscriptionPeriodEnd) == null,
        { enabled: eU } = p._.useExperiment({ location: 'PremiumPaymentPlanSelectStep' }, { autoTrackExposure: !1 }),
        eA = !es && (null == eI ? void 0 : eI.skuId) === H.Si.TIER_2 && (null == e_ ? void 0 : e_.referrer_id) != null && eU,
        eR = null;
    return ((eR = eA ? (0, l.jsx)(g.Z, {}) : null != eC ? eC : (0, l.jsx)(L.Z, {})), ek)
        ? (0, l.jsx)(Z.Z, {})
        : (r()(null != et, 'Step should be set'),
          r()(eN.length > 0, 'Premium plan options should be set'),
          (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(k.P, { giftMessage: ea }),
                  !(es && (0, y.pO)(er)) && (0, l.jsx)(M.Z, { isEligibleForTrial: ej }),
                  (0, l.jsxs)(w.C3, {
                      children: [
                          eZ && (0, l.jsx)('hr', { className: B.planSelectSeparatorUpper }),
                          eR,
                          (0, l.jsx)(A.Z, {}),
                          (0, l.jsx)(U.Z, {}),
                          ew
                              ? (0, l.jsx)(o.kzN, { children: eM })
                              : (0, l.jsx)(E.O, {
                                    planOptions: eN,
                                    eligibleForMultiMonthPlans: eh,
                                    referralTrialOfferId: X,
                                    selectedPlanId: null == ee ? void 0 : ee.id,
                                    subscriptionPeriodEnd: null == eP ? void 0 : eP.subscriptionPeriodEnd,
                                    discountInvoiceItems: eg ? (null == eP ? void 0 : eP.invoiceItems) : void 0,
                                    useCompactGiftComponents: eu,
                                    handleClose: z
                                }),
                          eZ &&
                              (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      (0, l.jsx)('hr', { className: B.planSelectSeparatorLower }),
                                      (0, l.jsx)(o.Text, {
                                          variant: 'text-xs/normal',
                                          children: W.NW.format(W.t.BHtnqK, { link: I.Z.getArticleURL(R.BhN.PREMIUM_DETAILS_CANCEL_SUB) })
                                      })
                                  ]
                              })
                      ]
                  }),
                  (0, l.jsxs)(w.O3, {
                      children: [
                          eu && (0, l.jsx)(_.c, {}),
                          (0, l.jsx)(o.mzw, {
                              justify: d.Z.Justify.BETWEEN,
                              align: d.Z.Align.CENTER,
                              children: (0, l.jsx)(E.y, {
                                  onStepChange: G,
                                  onBackClick: () => G(P.h8.SKU_SELECT),
                                  showBackButton: null == D && null == Y,
                                  planOptions: eN,
                                  shouldRenderUpdatedPaymentModal: eZ,
                                  isTrial: ej
                              })
                          })
                      ]
                  })
              ]
          }));
}
