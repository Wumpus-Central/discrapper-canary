(n.d(t, { x: () => F }), n(388685));
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
    g = n(509545),
    E = n(669079),
    S = n(63063),
    v = n(74538),
    b = n(987209),
    O = n(563132),
    P = n(409813),
    Z = n(107998),
    I = n(51499),
    w = n(456251),
    T = n(27034),
    M = n(435020),
    A = n(809144),
    R = n(698708),
    N = n(844068),
    U = n(981631),
    k = n(474936),
    B = n(388032),
    H = n(428523);
function F(e) {
    var t, n, l, F;
    let { handleStepChange: G, initialPlanId: D, planGroup: W, subscriptionTier: z, trialId: Y, referralTrialOfferId: K, handleClose: V } = e,
        { activeSubscription: q, hasFetchedSubscriptions: J, paymentSourceId: Q, paymentSources: X, selectedSkuId: $, selectedPlan: ee, step: et, defaultPlanId: en, priceOptions: ei, isPremium: er, premiumBrandRefreshBackgroundClassName: el } = (0, O.JL)(),
        { isGift: es, giftRecipient: ea, giftMessage: eo, claimableRewards: eC } = (0, b.wD)(),
        { paymentModalBanner: ed } = (0, Z.zb)(),
        ec = (0, p.a5)(ee),
        eu = (null == (t = (0, x.Z)()) ? void 0 : t.planSelectionBanner) != null,
        ep = es && ec && null != eC && eC.length > 0 && eu,
        ex = (0, M.m)(X, Q),
        { newPlans: eh } = c.ZP.useExperiment({ location: 'd17fd6_3' }, { autoTrackExposure: !1 }),
        ef = (0, a.e7)([y.default], () => y.default.getCurrentUser()),
        ej = !es && null != $ && $ === k.Si.TIER_2 && null != ef && ef.hasHadPremium() && J && null == q && (0, c.aQ)(ex),
        em = (0, j.N)(K),
        e_ = !es && null != em && null != $ && k.nG[em.trial_id].skus.includes($),
        eL = (0, f.Ng)(),
        ey = null == eL || null == (n = eL.discount) ? void 0 : n.plan_ids.some((e) => k.GP[e].skuId === $),
        eg = !es && null != eL && null != $ && ey,
        eE = null != (l = e_ || eg) && l,
        eS = r.useMemo(
            () =>
                (0, v.V7)({
                    skuId: $,
                    isPremium: er,
                    multiMonthPlans: ej ? eh : [],
                    currentSubscription: q,
                    defaultPlanId: en
                }),
            [$, er, eh, q, ej, en]
        ),
        ev = eg && eS.includes(k.Xh.PREMIUM_MONTH_TIER_2) ? k.Xh.PREMIUM_MONTH_TIER_2 : eS[0],
        eb = (0, a.e7)([g.Z], () => g.Z.get(ev)),
        eO = [
            {
                planId: null == eb ? void 0 : eb.id,
                quantity: 1
            }
        ],
        [eP, eZ] = r.useState(eE),
        [eI, ew] = (0, u.ED)({
            items: eO,
            renewal: !1,
            preventFetch: !eE,
            applyEntitlements: !0,
            trialId: Y,
            paymentSourceId: ei.paymentSourceId,
            currency: ei.currency
        });
    (r.useEffect(() => {
        eE && eZ((null == eI ? void 0 : eI.subscriptionPeriodEnd) == null);
    }, [eI, eE]),
        (0, C.Z)(
            'Payment Modal Plan Select Step',
            eP,
            5,
            {
                proratedInvoicePreview: eI,
                proratedInvoiceError: ew,
                isEligibleForOffer: eE
            },
            { tags: { app_context: 'billing' } }
        ));
    let eT = null != (F = null == ew ? void 0 : ew.message) ? F : B.intl.string(B.t.R0RpRU),
        eM = eE && null == ew,
        eA = eE && null != ew,
        eR = eM && null == q && !!eE && (null == eI ? void 0 : eI.subscriptionPeriodEnd) == null,
        eN = !es && (null == eb ? void 0 : eb.skuId) === k.Si.TIER_2 && (null == em ? void 0 : em.referrer_id) != null,
        eU = null;
    return ((eU = null != ed ? ed : eN ? (0, i.jsx)(_.Z, {}) : (0, i.jsx)(m.Z, {})), eR)
        ? (0, i.jsx)(w.Z, {})
        : (s()(null != et, 'Step should be set'),
          s()(eS.length > 0, 'Premium plan options should be set'),
          (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(A.P, { giftMessage: eo }),
                  !(es && (0, E.pO)(ea)) && (0, i.jsx)(I.Z, { isEligibleForTrial: e_ }),
                  (0, i.jsxs)(T.C3, {
                      children: [
                          eM && (0, i.jsx)('hr', { className: H.planSelectSeparatorUpper }),
                          eU,
                          (0, i.jsx)(N.Z, {}),
                          (0, i.jsx)(R.Z, {}),
                          eA
                              ? (0, i.jsx)(o.kzN, { children: eT })
                              : (0, i.jsx)(L.O, {
                                    planOptions: eS,
                                    eligibleForMultiMonthPlans: ej,
                                    referralTrialOfferId: K,
                                    selectedPlanId: null == ee ? void 0 : ee.id,
                                    planGroup: W,
                                    subscriptionPeriodEnd: null == eI ? void 0 : eI.subscriptionPeriodEnd,
                                    discountInvoiceItems: eg ? (null == eI ? void 0 : eI.invoiceItems) : void 0,
                                    useCompactGiftComponents: ep,
                                    handleClose: V
                                }),
                          eM &&
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)('hr', { className: H.planSelectSeparatorLower }),
                                      (0, i.jsx)(o.Text, {
                                          variant: 'text-xs/normal',
                                          children: B.intl.format(B.t.BHtnqK, { link: S.Z.getArticleURL(U.BhN.PREMIUM_DETAILS_CANCEL_SUB) })
                                      })
                                  ]
                              })
                      ]
                  }),
                  (0, i.jsxs)(T.O3, {
                      children: [
                          ep && (0, i.jsx)(h.c, {}),
                          (0, i.jsx)(o.mzw, {
                              justify: d.Z.Justify.BETWEEN,
                              align: d.Z.Align.CENTER,
                              className: el,
                              children: (0, i.jsx)(L.y, {
                                  onStepChange: G,
                                  onBackClick: () => G(P.h8.SKU_SELECT),
                                  showBackButton: null == D && null == z,
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
