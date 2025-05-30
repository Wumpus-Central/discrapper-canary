n.d(t, { x: () => B }), n(388685);
var i = n(255367),
    l = n(73800),
    s = n(512722),
    r = n.n(s),
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
    g = n(314404),
    L = n(594174),
    E = n(509545),
    y = n(669079),
    S = n(63063),
    v = n(74538),
    P = n(987209),
    b = n(563132),
    I = n(409813),
    T = n(107998),
    M = n(51499),
    Z = n(456251),
    N = n(614277),
    O = n(435020),
    R = n(809144),
    k = n(698708),
    U = n(844068),
    A = n(981631),
    w = n(474936),
    H = n(388032),
    F = n(428523);
function B(e) {
    var t, n, s, B;
    let { handleStepChange: G, initialPlanId: D, planGroup: W, subscriptionTier: Y, trialId: K, referralTrialOfferId: V, handleClose: X } = e,
        { activeSubscription: z, hasFetchedSubscriptions: q, paymentSourceId: Q, paymentSources: J, selectedSkuId: $, selectedPlan: ee, step: et, defaultPlanId: en, priceOptions: ei, isPremium: el, premiumRebrandBackgroundClassName: es } = (0, b.JL)(),
        { isGift: er, giftRecipient: ea, giftMessage: eo, claimableRewards: eC } = (0, P.wD)(),
        { paymentModalBanner: ed } = (0, T.zb)(),
        ec = (0, p.a5)(ee),
        eu = (null == (t = (0, x.Z)()) ? void 0 : t.planSelectionBanner) != null,
        ep = er && ec && null != eC && eC.length > 0 && eu,
        ex = (0, O.m)(J, Q),
        { newPlans: eh } = c.ZP.useExperiment({ location: 'd17fd6_3' }, { autoTrackExposure: !1 }),
        ef = (0, a.e7)([L.default], () => L.default.getCurrentUser()),
        ej = !er && null != $ && $ === w.Si.TIER_2 && null != ef && ef.hasHadPremium() && q && null == z && (0, c.aQ)(ex),
        em = (0, j.N)(V),
        e_ = !er && null != em && null != $ && w.nG[em.trial_id].skus.includes($),
        eg = (0, f.Ng)(),
        eL = null == eg || null == (n = eg.discount) ? void 0 : n.plan_ids.some((e) => w.GP[e].skuId === $),
        eE = !er && null != eg && null != $ && eL,
        ey = null != (s = e_ || eE) && s,
        eS = l.useMemo(
            () =>
                (0, v.V7)({
                    skuId: $,
                    isPremium: el,
                    multiMonthPlans: ej ? eh : [],
                    currentSubscription: z,
                    defaultPlanId: en
                }),
            [$, el, eh, z, ej, en]
        ),
        ev = eE && eS.includes(w.Xh.PREMIUM_MONTH_TIER_2) ? w.Xh.PREMIUM_MONTH_TIER_2 : eS[0],
        eP = (0, a.e7)([E.Z], () => E.Z.get(ev)),
        eb = [
            {
                planId: null == eP ? void 0 : eP.id,
                quantity: 1
            }
        ],
        [eI, eT] = l.useState(ey),
        [eM, eZ] = (0, u.ED)({
            items: eb,
            renewal: !1,
            preventFetch: !ey,
            applyEntitlements: !0,
            trialId: K,
            paymentSourceId: ei.paymentSourceId,
            currency: ei.currency
        });
    l.useEffect(() => {
        ey && eT((null == eM ? void 0 : eM.subscriptionPeriodEnd) == null);
    }, [eM, ey]),
        (0, C.Z)(
            'Payment Modal Plan Select Step',
            eI,
            5,
            {
                proratedInvoicePreview: eM,
                proratedInvoiceError: eZ,
                isEligibleForOffer: ey
            },
            { tags: { app_context: 'billing' } }
        );
    let eN = null != (B = null == eZ ? void 0 : eZ.message) ? B : H.intl.string(H.t.R0RpRU),
        eO = ey && null == eZ,
        eR = ey && null != eZ,
        ek = eO && null == z && !!ey && (null == eM ? void 0 : eM.subscriptionPeriodEnd) == null,
        eU = !er && (null == eP ? void 0 : eP.skuId) === w.Si.TIER_2 && (null == em ? void 0 : em.referrer_id) != null,
        eA = null;
    return ((eA = null != ed ? ed : eU ? (0, i.jsx)(_.Z, {}) : (0, i.jsx)(m.Z, {})), ek)
        ? (0, i.jsx)(Z.Z, {})
        : (r()(null != et, 'Step should be set'),
          r()(eS.length > 0, 'Premium plan options should be set'),
          (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(R.P, { giftMessage: eo }),
                  !(er && (0, y.pO)(ea)) && (0, i.jsx)(M.Z, { isEligibleForTrial: e_ }),
                  (0, i.jsxs)(N.C3, {
                      children: [
                          eO && (0, i.jsx)('hr', { className: F.planSelectSeparatorUpper }),
                          eA,
                          (0, i.jsx)(U.Z, {}),
                          (0, i.jsx)(k.Z, {}),
                          eR
                              ? (0, i.jsx)(o.kzN, { children: eN })
                              : (0, i.jsx)(g.O, {
                                    planOptions: eS,
                                    eligibleForMultiMonthPlans: ej,
                                    referralTrialOfferId: V,
                                    selectedPlanId: null == ee ? void 0 : ee.id,
                                    planGroup: W,
                                    subscriptionPeriodEnd: null == eM ? void 0 : eM.subscriptionPeriodEnd,
                                    discountInvoiceItems: eE ? (null == eM ? void 0 : eM.invoiceItems) : void 0,
                                    useCompactGiftComponents: ep,
                                    handleClose: X
                                }),
                          eO &&
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)('hr', { className: F.planSelectSeparatorLower }),
                                      (0, i.jsx)(o.Text, {
                                          variant: 'text-xs/normal',
                                          children: H.intl.format(H.t.BHtnqK, { link: S.Z.getArticleURL(A.BhN.PREMIUM_DETAILS_CANCEL_SUB) })
                                      })
                                  ]
                              })
                      ]
                  }),
                  (0, i.jsxs)(N.O3, {
                      children: [
                          ep && (0, i.jsx)(h.c, {}),
                          (0, i.jsx)(o.mzw, {
                              justify: d.Z.Justify.BETWEEN,
                              align: d.Z.Align.CENTER,
                              className: es,
                              children: (0, i.jsx)(g.y, {
                                  onStepChange: G,
                                  onBackClick: () => G(I.h8.SKU_SELECT),
                                  showBackButton: null == D && null == Y,
                                  planOptions: eS,
                                  shouldRenderUpdatedPaymentModal: eO,
                                  isTrial: e_
                              })
                          })
                      ]
                  })
              ]
          }));
}
