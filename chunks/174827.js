n.d(t, { x: () => B }), n(47120);
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
    j = n(642530),
    m = n(381507),
    L = n(314404),
    g = n(594174),
    S = n(509545),
    y = n(669079),
    E = n(63063),
    b = n(74538),
    N = n(987209),
    I = n(563132),
    v = n(409813),
    P = n(107998),
    M = n(51499),
    T = n(456251),
    Z = n(614277),
    O = n(809144),
    w = n(698708),
    k = n(844068),
    U = n(981631),
    A = n(474936),
    R = n(388032),
    F = n(859009);
function B(e) {
    var t, n, l, B;
    let { handleStepChange: H, initialPlanId: W, subscriptionTier: G, trialId: D, referralTrialOfferId: Y, handleClose: z } = e,
        { activeSubscription: K, hasFetchedSubscriptions: X, paymentSourceId: V, paymentSources: Q, selectedSkuId: q, selectedPlan: J, step: $, defaultPlanId: ee, priceOptions: et, isPremium: en } = (0, I.JL)(),
        { isGift: er, giftRecipient: ei, giftMessage: el, claimableRewards: es } = (0, N.wD)(),
        { planSelectBanner: eo } = (0, P.zb)(),
        ea = (0, p.a5)(J),
        eC = (null === (t = (0, _.Z)()) || void 0 === t ? void 0 : t.planSelectionBanner) != null,
        ed = er && ea && null != es && es.length > 0 && eC,
        ec = null != V ? Q[V] : null,
        { newPlans: eu } = c.ZP.useExperiment({ location: 'd17fd6_3' }, { autoTrackExposure: !1 }),
        ep = (0, o.e7)([g.default], () => g.default.getCurrentUser()),
        e_ = !er && null != q && q === A.Si.TIER_2 && null != ep && ep.hasHadPremium() && X && null == K && (0, c.aQ)(ec),
        ex = (0, h.N)(Y),
        ef = !er && null != ex && null != q && A.nG[ex.trial_id].skus.includes(q),
        eh = (0, f.Ng)(),
        ej = null == eh ? void 0 : null === (n = eh.discount) || void 0 === n ? void 0 : n.plan_ids.some((e) => A.GP[e].skuId === q),
        em = !er && null != eh && null != q && ej,
        eL = null !== (l = ef || em) && void 0 !== l && l,
        eg = i.useMemo(
            () =>
                (0, b.V7)({
                    skuId: q,
                    isPremium: en,
                    multiMonthPlans: e_ ? eu : [],
                    currentSubscription: K,
                    defaultPlanId: ee
                }),
            [q, en, eu, K, e_, ee]
        ),
        eS = em && eg.includes(A.Xh.PREMIUM_MONTH_TIER_2) ? A.Xh.PREMIUM_MONTH_TIER_2 : eg[0],
        ey = (0, o.e7)([S.Z], () => S.Z.get(eS)),
        eE = [
            {
                planId: null == ey ? void 0 : ey.id,
                quantity: 1
            }
        ],
        [eb, eN] = i.useState(eL),
        [eI, ev] = (0, u.ED)({
            items: eE,
            renewal: !1,
            preventFetch: !eL,
            applyEntitlements: !0,
            trialId: D,
            paymentSourceId: et.paymentSourceId,
            currency: et.currency
        });
    i.useEffect(() => {
        eL && eN((null == eI ? void 0 : eI.subscriptionPeriodEnd) == null);
    }, [eI, eL]),
        (0, C.Z)(
            'Payment Modal Plan Select Step',
            eb,
            5,
            {
                proratedInvoicePreview: eI,
                proratedInvoiceError: ev,
                isEligibleForOffer: eL
            },
            { tags: { app_context: 'billing' } }
        );
    let eP = null !== (B = null == ev ? void 0 : ev.message) && void 0 !== B ? B : R.NW.string(R.t.R0RpRU),
        eM = eL && null == ev,
        eT = eL && null != ev,
        eZ = eM && null == K && !!eL && (null == eI ? void 0 : eI.subscriptionPeriodEnd) == null,
        eO = !er && (null == ey ? void 0 : ey.skuId) === A.Si.TIER_2 && (null == ex ? void 0 : ex.referrer_id) != null,
        ew = null;
    return ((ew = null != eo ? eo : eO ? (0, r.jsx)(m.Z, {}) : (0, r.jsx)(j.Z, {})), eZ)
        ? (0, r.jsx)(T.Z, {})
        : (s()(null != $, 'Step should be set'),
          s()(eg.length > 0, 'Premium plan options should be set'),
          (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(O.P, { giftMessage: el }),
                  !(er && (0, y.pO)(ei)) && (0, r.jsx)(M.Z, { isEligibleForTrial: ef }),
                  (0, r.jsxs)(Z.C3, {
                      children: [
                          eM && (0, r.jsx)('hr', { className: F.planSelectSeparatorUpper }),
                          ew,
                          (0, r.jsx)(k.Z, {}),
                          (0, r.jsx)(w.Z, {}),
                          eT
                              ? (0, r.jsx)(a.kzN, { children: eP })
                              : (0, r.jsx)(L.O, {
                                    planOptions: eg,
                                    eligibleForMultiMonthPlans: e_,
                                    referralTrialOfferId: Y,
                                    selectedPlanId: null == J ? void 0 : J.id,
                                    subscriptionPeriodEnd: null == eI ? void 0 : eI.subscriptionPeriodEnd,
                                    discountInvoiceItems: em ? (null == eI ? void 0 : eI.invoiceItems) : void 0,
                                    useCompactGiftComponents: ed,
                                    handleClose: z
                                }),
                          eM &&
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)('hr', { className: F.planSelectSeparatorLower }),
                                      (0, r.jsx)(a.Text, {
                                          variant: 'text-xs/normal',
                                          children: R.NW.format(R.t.BHtnqK, { link: E.Z.getArticleURL(U.BhN.PREMIUM_DETAILS_CANCEL_SUB) })
                                      })
                                  ]
                              })
                      ]
                  }),
                  (0, r.jsxs)(Z.O3, {
                      children: [
                          ed && (0, r.jsx)(x.c, {}),
                          (0, r.jsx)(a.mzw, {
                              justify: d.Z.Justify.BETWEEN,
                              align: d.Z.Align.CENTER,
                              children: (0, r.jsx)(L.y, {
                                  onStepChange: H,
                                  onBackClick: () => H(v.h8.SKU_SELECT),
                                  showBackButton: null == W && null == G,
                                  planOptions: eg,
                                  shouldRenderUpdatedPaymentModal: eM,
                                  isTrial: ef
                              })
                          })
                      ]
                  })
              ]
          }));
}
