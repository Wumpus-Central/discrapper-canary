t.d(n, { x: () => F }), t(388685);
var i = t(255367),
    l = t(73800),
    r = t(512722),
    s = t.n(r),
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
    P = t(987209),
    Z = t(563132),
    b = t(409813),
    I = t(107998),
    O = t(51499),
    T = t(456251),
    M = t(614277),
    w = t(435020),
    A = t(809144),
    N = t(698708),
    R = t(844068),
    k = t(981631),
    U = t(474936),
    B = t(388032),
    H = t(428523);
function F(e) {
    var n, t, r, F;
    let { handleStepChange: G, initialPlanId: D, planGroup: W, subscriptionTier: z, trialId: Y, referralTrialOfferId: K, handleClose: V } = e,
        { activeSubscription: q, hasFetchedSubscriptions: J, paymentSourceId: Q, paymentSources: X, selectedSkuId: $, selectedPlan: ee, step: en, defaultPlanId: et, priceOptions: ei, isPremium: el, premiumBrandRefreshBackgroundClassName: er } = (0, Z.JL)(),
        { isGift: es, giftRecipient: ea, giftMessage: eo, claimableRewards: eC } = (0, P.wD)(),
        { paymentModalBanner: ed } = (0, I.zb)(),
        ec = (0, p.a5)(ee),
        eu = (null == (n = (0, x.Z)()) ? void 0 : n.planSelectionBanner) != null,
        ep = es && ec && null != eC && eC.length > 0 && eu,
        ex = (0, w.m)(X, Q),
        { newPlans: eh } = c.ZP.useExperiment({ location: 'd17fd6_3' }, { autoTrackExposure: !1 }),
        ef = (0, a.e7)([g.default], () => g.default.getCurrentUser()),
        ej = !es && null != $ && $ === U.Si.TIER_2 && null != ef && ef.hasHadPremium() && J && null == q && (0, c.aQ)(ex),
        em = (0, j.N)(K),
        e_ = !es && null != em && null != $ && U.nG[em.trial_id].skus.includes($),
        eL = (0, f.Ng)(),
        eg = null == eL || null == (t = eL.discount) ? void 0 : t.plan_ids.some((e) => U.GP[e].skuId === $),
        ey = !es && null != eL && null != $ && eg,
        eE = null != (r = e_ || ey) && r,
        eS = l.useMemo(
            () =>
                (0, v.V7)({
                    skuId: $,
                    isPremium: el,
                    multiMonthPlans: ej ? eh : [],
                    currentSubscription: q,
                    defaultPlanId: et
                }),
            [$, el, eh, q, ej, et]
        ),
        ev = ey && eS.includes(U.Xh.PREMIUM_MONTH_TIER_2) ? U.Xh.PREMIUM_MONTH_TIER_2 : eS[0],
        eP = (0, a.e7)([y.Z], () => y.Z.get(ev)),
        eZ = [
            {
                planId: null == eP ? void 0 : eP.id,
                quantity: 1
            }
        ],
        [eb, eI] = l.useState(eE),
        [eO, eT] = (0, u.ED)({
            items: eZ,
            renewal: !1,
            preventFetch: !eE,
            applyEntitlements: !0,
            trialId: Y,
            paymentSourceId: ei.paymentSourceId,
            currency: ei.currency
        });
    l.useEffect(() => {
        eE && eI((null == eO ? void 0 : eO.subscriptionPeriodEnd) == null);
    }, [eO, eE]),
        (0, C.Z)(
            'Payment Modal Plan Select Step',
            eb,
            5,
            {
                proratedInvoicePreview: eO,
                proratedInvoiceError: eT,
                isEligibleForOffer: eE
            },
            { tags: { app_context: 'billing' } }
        );
    let eM = null != (F = null == eT ? void 0 : eT.message) ? F : B.intl.string(B.t.R0RpRU),
        ew = eE && null == eT,
        eA = eE && null != eT,
        eN = ew && null == q && !!eE && (null == eO ? void 0 : eO.subscriptionPeriodEnd) == null,
        eR = !es && (null == eP ? void 0 : eP.skuId) === U.Si.TIER_2 && (null == em ? void 0 : em.referrer_id) != null,
        ek = null;
    return ((ek = null != ed ? ed : eR ? (0, i.jsx)(_.Z, {}) : (0, i.jsx)(m.Z, {})), eN)
        ? (0, i.jsx)(T.Z, {})
        : (s()(null != en, 'Step should be set'),
          s()(eS.length > 0, 'Premium plan options should be set'),
          (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(A.P, { giftMessage: eo }),
                  !(es && (0, E.pO)(ea)) && (0, i.jsx)(O.Z, { isEligibleForTrial: e_ }),
                  (0, i.jsxs)(M.C3, {
                      children: [
                          ew && (0, i.jsx)('hr', { className: H.planSelectSeparatorUpper }),
                          ek,
                          (0, i.jsx)(R.Z, {}),
                          (0, i.jsx)(N.Z, {}),
                          eA
                              ? (0, i.jsx)(o.kzN, { children: eM })
                              : (0, i.jsx)(L.O, {
                                    planOptions: eS,
                                    eligibleForMultiMonthPlans: ej,
                                    referralTrialOfferId: K,
                                    selectedPlanId: null == ee ? void 0 : ee.id,
                                    planGroup: W,
                                    subscriptionPeriodEnd: null == eO ? void 0 : eO.subscriptionPeriodEnd,
                                    discountInvoiceItems: ey ? (null == eO ? void 0 : eO.invoiceItems) : void 0,
                                    useCompactGiftComponents: ep,
                                    handleClose: V
                                }),
                          ew &&
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)('hr', { className: H.planSelectSeparatorLower }),
                                      (0, i.jsx)(o.Text, {
                                          variant: 'text-xs/normal',
                                          children: B.intl.format(B.t.BHtnqK, { link: S.Z.getArticleURL(k.BhN.PREMIUM_DETAILS_CANCEL_SUB) })
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
                              className: er,
                              children: (0, i.jsx)(L.y, {
                                  onStepChange: G,
                                  onBackClick: () => G(b.h8.SKU_SELECT),
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
