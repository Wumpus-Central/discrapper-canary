t.d(n, { x: () => H }), t(388685);
var l = t(255367),
    i = t(73800),
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
    _ = t(642530),
    m = t(381507),
    L = t(314404),
    g = t(594174),
    y = t(509545),
    S = t(669079),
    E = t(63063),
    v = t(74538),
    P = t(987209),
    Z = t(563132),
    b = t(409813),
    O = t(107998),
    I = t(51499),
    M = t(456251),
    w = t(614277),
    T = t(435020),
    A = t(809144),
    N = t(698708),
    k = t(844068),
    U = t(981631),
    R = t(474936),
    B = t(388032),
    F = t(428523);
function H(e) {
    var n, t, r, H;
    let { handleStepChange: G, initialPlanId: D, planGroup: W, subscriptionTier: z, trialId: Y, referralTrialOfferId: K, handleClose: V } = e,
        { activeSubscription: q, hasFetchedSubscriptions: J, paymentSourceId: Q, paymentSources: X, selectedSkuId: $, selectedPlan: ee, step: en, defaultPlanId: et, priceOptions: el, isPremium: ei, premiumBrandRefreshBackgroundClassName: er } = (0, Z.JL)(),
        { isGift: es, giftRecipient: ea, giftMessage: eo, claimableRewards: eC } = (0, P.wD)(),
        { paymentModalBanner: ed } = (0, O.zb)(),
        ec = (0, p.a5)(ee),
        eu = (null == (n = (0, x.Z)()) ? void 0 : n.planSelectionBanner) != null,
        ep = es && ec && null != eC && eC.length > 0 && eu,
        ex = (0, T.m)(X, Q),
        { newPlans: eh } = c.ZP.useExperiment({ location: 'd17fd6_3' }, { autoTrackExposure: !1 }),
        ef = (0, a.e7)([g.default], () => g.default.getCurrentUser()),
        ej = !es && null != $ && $ === R.Si.TIER_2 && null != ef && ef.hasHadPremium() && J && null == q && (0, c.aQ)(ex),
        e_ = (0, j.N)(K),
        em = !es && null != e_ && null != $ && R.nG[e_.trial_id].skus.includes($),
        eL = (0, f.Ng)(),
        eg = null == eL || null == (t = eL.discount) ? void 0 : t.plan_ids.some((e) => R.GP[e].skuId === $),
        ey = !es && null != eL && null != $ && eg,
        eS = null != (r = em || ey) && r,
        eE = i.useMemo(
            () =>
                (0, v.V7)({
                    skuId: $,
                    isPremium: ei,
                    multiMonthPlans: ej ? eh : [],
                    currentSubscription: q,
                    defaultPlanId: et
                }),
            [$, ei, eh, q, ej, et]
        ),
        ev = ey && eE.includes(R.Xh.PREMIUM_MONTH_TIER_2) ? R.Xh.PREMIUM_MONTH_TIER_2 : eE[0],
        eP = (0, a.e7)([y.Z], () => y.Z.get(ev)),
        eZ = [
            {
                planId: null == eP ? void 0 : eP.id,
                quantity: 1
            }
        ],
        [eb, eO] = i.useState(eS),
        [eI, eM] = (0, u.ED)({
            items: eZ,
            renewal: !1,
            preventFetch: !eS,
            applyEntitlements: !0,
            trialId: Y,
            paymentSourceId: el.paymentSourceId,
            currency: el.currency
        });
    i.useEffect(() => {
        eS && eO((null == eI ? void 0 : eI.subscriptionPeriodEnd) == null);
    }, [eI, eS]),
        (0, C.Z)(
            'Payment Modal Plan Select Step',
            eb,
            5,
            {
                proratedInvoicePreview: eI,
                proratedInvoiceError: eM,
                isEligibleForOffer: eS
            },
            { tags: { app_context: 'billing' } }
        );
    let ew = null != (H = null == eM ? void 0 : eM.message) ? H : B.intl.string(B.t.R0RpRU),
        eT = eS && null == eM,
        eA = eS && null != eM,
        eN = eT && null == q && !!eS && (null == eI ? void 0 : eI.subscriptionPeriodEnd) == null,
        ek = !es && (null == eP ? void 0 : eP.skuId) === R.Si.TIER_2 && (null == e_ ? void 0 : e_.referrer_id) != null,
        eU = null;
    return ((eU = null != ed ? ed : ek ? (0, l.jsx)(m.Z, {}) : (0, l.jsx)(_.Z, {})), eN)
        ? (0, l.jsx)(M.Z, {})
        : (s()(null != en, 'Step should be set'),
          s()(eE.length > 0, 'Premium plan options should be set'),
          (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(A.P, { giftMessage: eo }),
                  !(es && (0, S.pO)(ea)) && (0, l.jsx)(I.Z, { isEligibleForTrial: em }),
                  (0, l.jsxs)(w.C3, {
                      children: [
                          eT && (0, l.jsx)('hr', { className: F.planSelectSeparatorUpper }),
                          eU,
                          (0, l.jsx)(k.Z, {}),
                          (0, l.jsx)(N.Z, {}),
                          eA
                              ? (0, l.jsx)(o.kzN, { children: ew })
                              : (0, l.jsx)(L.O, {
                                    planOptions: eE,
                                    eligibleForMultiMonthPlans: ej,
                                    referralTrialOfferId: K,
                                    selectedPlanId: null == ee ? void 0 : ee.id,
                                    planGroup: W,
                                    subscriptionPeriodEnd: null == eI ? void 0 : eI.subscriptionPeriodEnd,
                                    discountInvoiceItems: ey ? (null == eI ? void 0 : eI.invoiceItems) : void 0,
                                    useCompactGiftComponents: ep,
                                    handleClose: V
                                }),
                          eT &&
                              (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      (0, l.jsx)('hr', { className: F.planSelectSeparatorLower }),
                                      (0, l.jsx)(o.Text, {
                                          variant: 'text-xs/normal',
                                          children: B.intl.format(B.t.BHtnqK, { link: E.Z.getArticleURL(U.BhN.PREMIUM_DETAILS_CANCEL_SUB) })
                                      })
                                  ]
                              })
                      ]
                  }),
                  (0, l.jsxs)(w.O3, {
                      children: [
                          ep && (0, l.jsx)(h.c, {}),
                          (0, l.jsx)(o.mzw, {
                              justify: d.Z.Justify.BETWEEN,
                              align: d.Z.Align.CENTER,
                              className: er,
                              children: (0, l.jsx)(L.y, {
                                  onStepChange: G,
                                  onBackClick: () => G(b.h8.SKU_SELECT),
                                  showBackButton: null == D && null == z,
                                  planOptions: eE,
                                  shouldRenderUpdatedPaymentModal: eT,
                                  isTrial: em
                              })
                          })
                      ]
                  })
              ]
          }));
}
