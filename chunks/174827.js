(t.d(n, { x: () => F }), t(388685));
var i = t(255367),
    r = t(73800),
    l = t(512722),
    s = t.n(l),
    a = t(399606),
    o = t(481060),
    C = t(975608),
    d = t(600164),
    c = t(711459),
    u = t(374649),
    p = t(717401),
    x = t(286961),
    h = t(572517),
    f = t(104494),
    j = t(639119),
    m = t(642530),
    _ = t(381507),
    L = t(314404),
    g = t(594174),
    y = t(509545),
    E = t(669079),
    S = t(63063),
    v = t(74538),
    b = t(987209),
    P = t(563132),
    Z = t(409813),
    O = t(107998),
    I = t(51499),
    M = t(456251),
    T = t(27034),
    w = t(435020),
    A = t(809144),
    R = t(698708),
    N = t(844068),
    U = t(981631),
    k = t(474936),
    B = t(388032),
    H = t(428523);
function F(e) {
    var n, t, l, F;
    let { handleStepChange: G, initialPlanId: D, planGroup: W, subscriptionTier: z, trialId: Y, referralTrialOfferId: K, handleClose: V } = e,
        { activeSubscription: q, hasFetchedSubscriptions: J, paymentSourceId: Q, paymentSources: X, selectedSkuId: $, selectedPlan: ee, step: en, defaultPlanId: et, priceOptions: ei, isPremium: er, premiumBrandRefreshBackgroundClassName: el } = (0, P.JL)(),
        { isGift: es, giftRecipient: ea, giftMessage: eo, claimableRewards: eC } = (0, b.wD)(),
        { paymentModalBanner: ed } = (0, O.zb)(),
        ec = (0, p.a5)(ee),
        eu = (null == (n = (0, x.Z)()) ? void 0 : n.planSelectionBanner) != null,
        ep = es && ec && null != eC && eC.length > 0 && eu,
        ex = (0, w.m)(X, Q),
        { newPlans: eh } = c.ZP.useExperiment({ location: 'd17fd6_3' }, { autoTrackExposure: !1 }),
        ef = (0, a.e7)([g.default], () => g.default.getCurrentUser()),
        ej = !es && null != $ && $ === k.Si.TIER_2 && null != ef && ef.hasHadPremium() && J && null == q && (0, c.aQ)(ex),
        em = (0, j.N)(K),
        e_ = !es && null != em && null != $ && k.nG[em.trial_id].skus.includes($),
        eL = (0, f.Ng)(),
        eg = null == eL || null == (t = eL.discount) ? void 0 : t.plan_ids.some((e) => k.GP[e].skuId === $),
        ey = !es && null != eL && null != $ && eg,
        eE = null != (l = e_ || ey) && l,
        eS = r.useMemo(
            () =>
                (0, v.V7)({
                    skuId: $,
                    isPremium: er,
                    multiMonthPlans: ej ? eh : [],
                    currentSubscription: q,
                    defaultPlanId: et
                }),
            [$, er, eh, q, ej, et]
        ),
        ev = ey && eS.includes(k.Xh.PREMIUM_MONTH_TIER_2) ? k.Xh.PREMIUM_MONTH_TIER_2 : eS[0],
        eb = (0, a.e7)([y.Z], () => y.Z.get(ev)),
        eP = [
            {
                planId: null == eb ? void 0 : eb.id,
                quantity: 1
            }
        ],
        [eZ, eO] = r.useState(eE),
        [eI, eM] = (0, u.ED)({
            items: eP,
            renewal: !1,
            preventFetch: !eE,
            applyEntitlements: !0,
            trialId: Y,
            paymentSourceId: ei.paymentSourceId,
            currency: ei.currency
        });
    (r.useEffect(() => {
        eE && eO((null == eI ? void 0 : eI.subscriptionPeriodEnd) == null);
    }, [eI, eE]),
        (0, C.Z)(
            'Payment Modal Plan Select Step',
            eZ,
            5,
            {
                proratedInvoicePreview: eI,
                proratedInvoiceError: eM,
                isEligibleForOffer: eE
            },
            { tags: { app_context: 'billing' } }
        ));
    let eT = null != (F = null == eM ? void 0 : eM.message) ? F : B.intl.string(B.t.R0RpRU),
        ew = eE && null == eM,
        eA = eE && null != eM,
        eR = ew && null == q && !!eE && (null == eI ? void 0 : eI.subscriptionPeriodEnd) == null,
        eN = !es && (null == eb ? void 0 : eb.skuId) === k.Si.TIER_2 && (null == em ? void 0 : em.referrer_id) != null,
        eU = null;
    return ((eU = null != ed ? ed : eN ? (0, i.jsx)(_.Z, {}) : (0, i.jsx)(m.Z, {})), eR)
        ? (0, i.jsx)(M.Z, {})
        : (s()(null != en, 'Step should be set'),
          s()(eS.length > 0, 'Premium plan options should be set'),
          (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(A.P, { giftMessage: eo }),
                  !(es && (0, E.pO)(ea)) && (0, i.jsx)(I.Z, { isEligibleForTrial: e_ }),
                  (0, i.jsxs)(T.C3, {
                      children: [
                          ew && (0, i.jsx)('hr', { className: H.planSelectSeparatorUpper }),
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
                                    discountInvoiceItems: ey ? (null == eI ? void 0 : eI.invoiceItems) : void 0,
                                    useCompactGiftComponents: ep,
                                    handleClose: V
                                }),
                          ew &&
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
                                  onBackClick: () => G(Z.h8.SKU_SELECT),
                                  showBackButton: null == D && null == z,
                                  planOptions: eS,
                                  shouldRenderUpdatedPaymentModal: ew,
                                  isTrial: e_
                              })
                          })
                      ]
                  })
              ]
          }));
}
