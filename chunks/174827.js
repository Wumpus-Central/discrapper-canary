(n.d(t, { x: () => H }), n(388685));
var i = n(255367),
    r = n(73800),
    l = n(512722),
    s = n.n(l),
    a = n(399606),
    o = n(481060),
    C = n(975608),
    d = n(600164),
    c = n(711459),
    u = n(374649),
    p = n(717401),
    x = n(286961),
    h = n(572517),
    f = n(104494),
    j = n(639119),
    m = n(642530),
    _ = n(381507),
    L = n(314404),
    y = n(594174),
    E = n(509545),
    g = n(669079),
    b = n(63063),
    S = n(74538),
    v = n(987209),
    O = n(563132),
    P = n(409813),
    w = n(107998),
    Z = n(51499),
    I = n(456251),
    M = n(27034),
    R = n(435020),
    T = n(809144),
    A = n(698708),
    N = n(844068),
    U = n(981631),
    k = n(474936),
    G = n(388032),
    B = n(428523);
function H(e) {
    var t, n, l, H;
    let { handleStepChange: F, initialPlanId: D, planGroup: W, subscriptionTier: z, trialId: Y, referralTrialOfferId: K, handleClose: V } = e,
        { activeSubscription: q, hasFetchedSubscriptions: J, paymentSourceId: Q, paymentSources: X, selectedSkuId: $, selectedPlan: ee, step: et, defaultPlanId: en, priceOptions: ei, isPremium: er, premiumBrandRefreshBackgroundClassName: el } = (0, O.JL)(),
        { isGift: es, giftRecipient: ea, giftMessage: eo, claimableRewards: eC } = (0, v.wD)(),
        { paymentModalBanner: ed } = (0, w.zb)(),
        ec = (0, p.a5)(ee),
        eu = (null == (t = (0, x.Z)()) ? void 0 : t.planSelectionBanner) != null,
        ep = es && ec && null != eC && eC.length > 0 && eu,
        ex = (0, R.m)(X, Q),
        { newPlans: eh } = c.ZP.useExperiment({ location: 'd17fd6_3' }, { autoTrackExposure: !1 }),
        ef = (0, a.e7)([y.default], () => y.default.getCurrentUser()),
        ej = !es && null != $ && $ === k.Si.TIER_2 && null != ef && ef.hasHadPremium() && J && null == q && (0, c.aQ)(ex),
        em = (0, j.N)(K),
        e_ = !es && null != em && null != $ && k.nG[em.trial_id].skus.includes($),
        eL = (0, f.Ng)(),
        ey = null == eL || null == (n = eL.discount) ? void 0 : n.plan_ids.some((e) => k.GP[e].skuId === $),
        eE = !es && null != eL && null != $ && ey,
        eg = null != (l = e_ || eE) && l,
        eb = r.useMemo(
            () =>
                (0, S.V7)({
                    skuId: $,
                    isPremium: er,
                    multiMonthPlans: ej ? eh : [],
                    currentSubscription: q,
                    defaultPlanId: en
                }),
            [$, er, eh, q, ej, en]
        ),
        eS = eE && eb.includes(k.Xh.PREMIUM_MONTH_TIER_2) ? k.Xh.PREMIUM_MONTH_TIER_2 : eb[0],
        ev = (0, a.e7)([E.Z], () => E.Z.get(eS)),
        eO = [
            {
                planId: null == ev ? void 0 : ev.id,
                quantity: 1
            }
        ],
        [eP, ew] = r.useState(eg),
        [eZ, eI] = (0, u.ED)({
            items: eO,
            renewal: !1,
            preventFetch: !eg,
            applyEntitlements: !0,
            trialId: Y,
            paymentSourceId: ei.paymentSourceId,
            currency: ei.currency
        });
    (r.useEffect(() => {
        eg && ew((null == eZ ? void 0 : eZ.subscriptionPeriodEnd) == null);
    }, [eZ, eg]),
        (0, C.Z)(
            'Payment Modal Plan Select Step',
            eP,
            5,
            {
                proratedInvoicePreview: eZ,
                proratedInvoiceError: eI,
                isEligibleForOffer: eg
            },
            { tags: { app_context: 'billing' } }
        ));
    let eM = null != (H = null == eI ? void 0 : eI.message) ? H : G.intl.string(G.t.R0RpRU),
        eR = eg && null == eI,
        eT = eg && null != eI,
        eA = eR && null == q && !!eg && (null == eZ ? void 0 : eZ.subscriptionPeriodEnd) == null,
        eN = !es && (null == ev ? void 0 : ev.skuId) === k.Si.TIER_2 && (null == em ? void 0 : em.referrer_id) != null,
        eU = null;
    return ((eU = null != ed ? ed : eN ? (0, i.jsx)(_.Z, {}) : (0, i.jsx)(m.Z, {})), eA)
        ? (0, i.jsx)(I.Z, {})
        : (s()(null != et, 'Step should be set'),
          s()(eb.length > 0, 'Premium plan options should be set'),
          (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(T.P, { giftMessage: eo }),
                  !(es && (0, g.pO)(ea)) && (0, i.jsx)(Z.Z, { isEligibleForTrial: e_ }),
                  (0, i.jsxs)(M.C3, {
                      children: [
                          eR && (0, i.jsx)('hr', { className: B.planSelectSeparatorUpper }),
                          eU,
                          (0, i.jsx)(N.Z, {}),
                          (0, i.jsx)(A.Z, {}),
                          eT
                              ? (0, i.jsx)(o.kzN, { children: eM })
                              : (0, i.jsx)(L.O, {
                                    planOptions: eb,
                                    eligibleForMultiMonthPlans: ej,
                                    referralTrialOfferId: K,
                                    selectedPlanId: null == ee ? void 0 : ee.id,
                                    planGroup: W,
                                    subscriptionPeriodEnd: null == eZ ? void 0 : eZ.subscriptionPeriodEnd,
                                    discountInvoiceItems: eE ? (null == eZ ? void 0 : eZ.invoiceItems) : void 0,
                                    useCompactGiftComponents: ep,
                                    handleClose: V
                                }),
                          eR &&
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)('hr', { className: B.planSelectSeparatorLower }),
                                      (0, i.jsx)(o.Text, {
                                          variant: 'text-xs/normal',
                                          children: G.intl.format(G.t.BHtnqK, { link: b.Z.getArticleURL(U.BhN.PREMIUM_DETAILS_CANCEL_SUB) })
                                      })
                                  ]
                              })
                      ]
                  }),
                  (0, i.jsxs)(M.O3, {
                      children: [
                          ep && (0, i.jsx)(h.c, {}),
                          (0, i.jsx)(o.mzw, {
                              justify: d.Z.Justify.BETWEEN,
                              align: d.Z.Align.CENTER,
                              className: el,
                              children: (0, i.jsx)(L.y, {
                                  onStepChange: F,
                                  onBackClick: () => F(P.h8.SKU_SELECT),
                                  showBackButton: null == D && null == z,
                                  planOptions: eb,
                                  shouldRenderUpdatedPaymentModal: eR,
                                  isTrial: e_
                              })
                          })
                      ]
                  })
              ]
          }));
}
