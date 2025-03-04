n.d(t, { x: () => B }), n(47120);
var l = n(200651),
    s = n(192379),
    i = n(512722),
    r = n.n(i),
    a = n(399606),
    o = n(481060),
    C = n(975608),
    d = n(600164),
    c = n(711459),
    u = n(374649),
    p = n(439017),
    x = n(717401),
    f = n(286961),
    h = n(572517),
    _ = n(104494),
    j = n(639119),
    m = n(642530),
    L = n(381507),
    g = n(314404),
    E = n(594174),
    S = n(509545),
    N = n(669079),
    y = n(63063),
    I = n(74538),
    O = n(987209),
    v = n(563132),
    b = n(409813),
    P = n(107998),
    T = n(51499),
    M = n(456251),
    Z = n(614277),
    w = n(809144),
    k = n(698708),
    U = n(844068),
    A = n(981631),
    R = n(474936),
    H = n(388032),
    W = n(859009);
function B(e) {
    var t, n, i, B;
    let { handleStepChange: F, initialPlanId: G, subscriptionTier: D, trialId: Y, referralTrialOfferId: K, handleClose: X } = e,
        { activeSubscription: z, hasFetchedSubscriptions: V, paymentSourceId: Q, paymentSources: q, selectedSkuId: J, selectedPlan: $, step: ee, defaultPlanId: et, priceOptions: en, isPremium: el } = (0, v.JL)(),
        { isGift: es, giftRecipient: ei, giftMessage: er, claimableRewards: ea } = (0, O.wD)(),
        { planSelectBanner: eo } = (0, P.zb)(),
        eC = (0, x.a5)($),
        ed = (null === (t = (0, f.Z)()) || void 0 === t ? void 0 : t.planSelectionBanner) != null,
        ec = es && eC && null != ea && ea.length > 0 && ed,
        eu = null != Q ? q[Q] : null,
        { newPlans: ep } = c.ZP.useExperiment({ location: 'd17fd6_3' }, { autoTrackExposure: !1 }),
        ex = (0, a.e7)([E.default], () => E.default.getCurrentUser()),
        ef = !es && null != J && J === R.Si.TIER_2 && null != ex && ex.hasHadPremium() && V && null == z && (0, c.aQ)(eu),
        eh = (0, j.N)(K),
        e_ = !es && null != eh && null != J && R.nG[eh.trial_id].skus.includes(J),
        ej = (0, _.Ng)(),
        em = null == ej ? void 0 : null === (n = ej.discount) || void 0 === n ? void 0 : n.plan_ids.some((e) => R.GP[e].skuId === J),
        eL = !es && null != ej && null != J && em,
        eg = null !== (i = e_ || eL) && void 0 !== i && i,
        { defaultToMonthlyPlan: eE } = p.k.useExperiment({ location: 'd17fd6_4' }, { autoTrackExposure: !1 }),
        eS = s.useMemo(
            () =>
                (0, I.V7)({
                    skuId: J,
                    isPremium: el,
                    multiMonthPlans: ef ? ep : [],
                    currentSubscription: z,
                    isGift: es,
                    isEligibleForTrial: e_,
                    defaultPlanId: et,
                    defaultToMonthlyPlan: eE
                }),
            [J, el, ep, z, ef, es, e_, et, eE]
        ),
        eN = eL && eS.includes(R.Xh.PREMIUM_MONTH_TIER_2) ? R.Xh.PREMIUM_MONTH_TIER_2 : eS[0],
        ey = (0, a.e7)([S.Z], () => S.Z.get(eN)),
        eI = [
            {
                planId: null == ey ? void 0 : ey.id,
                quantity: 1
            }
        ],
        [eO, ev] = s.useState(eg),
        [eb, eP] = (0, u.ED)({
            items: eI,
            renewal: !1,
            preventFetch: !eg,
            applyEntitlements: !0,
            trialId: Y,
            paymentSourceId: en.paymentSourceId,
            currency: en.currency
        });
    s.useEffect(() => {
        eg && ev((null == eb ? void 0 : eb.subscriptionPeriodEnd) == null);
    }, [eb, eg]),
        (0, C.Z)(
            'Payment Modal Plan Select Step',
            eO,
            5,
            {
                proratedInvoicePreview: eb,
                proratedInvoiceError: eP,
                isEligibleForOffer: eg
            },
            { tags: { app_context: 'billing' } }
        );
    let eT = null !== (B = null == eP ? void 0 : eP.message) && void 0 !== B ? B : H.NW.string(H.t.R0RpRU),
        eM = eg && null == eP,
        eZ = eg && null != eP,
        ew = eM && null == z && !!eg && (null == eb ? void 0 : eb.subscriptionPeriodEnd) == null,
        ek = !es && (null == ey ? void 0 : ey.skuId) === R.Si.TIER_2 && (null == eh ? void 0 : eh.referrer_id) != null,
        eU = null;
    return ((eU = null != eo ? eo : ek ? (0, l.jsx)(L.Z, {}) : (0, l.jsx)(m.Z, {})), ew)
        ? (0, l.jsx)(M.Z, {})
        : (r()(null != ee, 'Step should be set'),
          r()(eS.length > 0, 'Premium plan options should be set'),
          (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(w.P, { giftMessage: er }),
                  !(es && (0, N.pO)(ei)) && (0, l.jsx)(T.Z, { isEligibleForTrial: e_ }),
                  (0, l.jsxs)(Z.C3, {
                      children: [
                          eM && (0, l.jsx)('hr', { className: W.planSelectSeparatorUpper }),
                          eU,
                          (0, l.jsx)(U.Z, {}),
                          (0, l.jsx)(k.Z, {}),
                          eZ
                              ? (0, l.jsx)(o.kzN, { children: eT })
                              : (0, l.jsx)(g.O, {
                                    planOptions: eS,
                                    eligibleForMultiMonthPlans: ef,
                                    referralTrialOfferId: K,
                                    selectedPlanId: null == $ ? void 0 : $.id,
                                    subscriptionPeriodEnd: null == eb ? void 0 : eb.subscriptionPeriodEnd,
                                    discountInvoiceItems: eL ? (null == eb ? void 0 : eb.invoiceItems) : void 0,
                                    useCompactGiftComponents: ec,
                                    handleClose: X
                                }),
                          eM &&
                              (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      (0, l.jsx)('hr', { className: W.planSelectSeparatorLower }),
                                      (0, l.jsx)(o.Text, {
                                          variant: 'text-xs/normal',
                                          children: H.NW.format(H.t.BHtnqK, { link: y.Z.getArticleURL(A.BhN.PREMIUM_DETAILS_CANCEL_SUB) })
                                      })
                                  ]
                              })
                      ]
                  }),
                  (0, l.jsxs)(Z.O3, {
                      children: [
                          ec && (0, l.jsx)(h.c, {}),
                          (0, l.jsx)(o.mzw, {
                              justify: d.Z.Justify.BETWEEN,
                              align: d.Z.Align.CENTER,
                              children: (0, l.jsx)(g.y, {
                                  onStepChange: F,
                                  onBackClick: () => F(b.h8.SKU_SELECT),
                                  showBackButton: null == G && null == D,
                                  planOptions: eS,
                                  shouldRenderUpdatedPaymentModal: eM,
                                  isTrial: e_
                              })
                          })
                      ]
                  })
              ]
          }));
}
