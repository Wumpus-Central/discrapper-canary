n.d(t, { x: () => F }), n(388685);
var i = n(255367),
    l = n(73800),
    s = n(512722),
    r = n.n(s),
    a = n(399606),
    C = n(481060),
    o = n(975608),
    d = n(600164),
    c = n(711459),
    u = n(374649),
    p = n(717401),
    x = n(286961),
    h = n(572517),
    f = n(104494),
    j = n(639119),
    m = n(642530),
    L = n(381507),
    _ = n(314404),
    g = n(594174),
    E = n(509545),
    y = n(669079),
    S = n(63063),
    M = n(74538),
    Z = n(987209),
    P = n(563132),
    v = n(409813),
    I = n(107998),
    b = n(51499),
    T = n(456251),
    N = n(614277),
    O = n(435020),
    w = n(809144),
    k = n(698708),
    H = n(844068),
    R = n(981631),
    U = n(474936),
    A = n(388032),
    B = n(820306);
function F(e) {
    var t, n, s, F;
    let { handleStepChange: G, initialPlanId: D, planGroup: W, subscriptionTier: Y, trialId: K, referralTrialOfferId: V, handleClose: X } = e,
        { activeSubscription: z, hasFetchedSubscriptions: q, paymentSourceId: Q, paymentSources: J, selectedSkuId: $, selectedPlan: ee, step: et, defaultPlanId: en, priceOptions: ei, isPremium: el } = (0, P.JL)(),
        { isGift: es, giftRecipient: er, giftMessage: ea, claimableRewards: eC } = (0, Z.wD)(),
        { paymentModalBanner: eo } = (0, I.zb)(),
        ed = (0, p.a5)(ee),
        ec = (null == (t = (0, x.Z)()) ? void 0 : t.planSelectionBanner) != null,
        eu = es && ed && null != eC && eC.length > 0 && ec,
        ep = (0, O.m)(J, Q),
        { newPlans: ex } = c.ZP.useExperiment({ location: 'd17fd6_3' }, { autoTrackExposure: !1 }),
        eh = (0, a.e7)([g.default], () => g.default.getCurrentUser()),
        ef = !es && null != $ && $ === U.Si.TIER_2 && null != eh && eh.hasHadPremium() && q && null == z && (0, c.aQ)(ep),
        ej = (0, j.N)(V),
        em = !es && null != ej && null != $ && U.nG[ej.trial_id].skus.includes($),
        eL = (0, f.Ng)(),
        e_ = null == eL || null == (n = eL.discount) ? void 0 : n.plan_ids.some((e) => U.GP[e].skuId === $),
        eg = !es && null != eL && null != $ && e_,
        eE = null != (s = em || eg) && s,
        ey = l.useMemo(
            () =>
                (0, M.V7)({
                    skuId: $,
                    isPremium: el,
                    multiMonthPlans: ef ? ex : [],
                    currentSubscription: z,
                    defaultPlanId: en
                }),
            [$, el, ex, z, ef, en]
        ),
        eS = eg && ey.includes(U.Xh.PREMIUM_MONTH_TIER_2) ? U.Xh.PREMIUM_MONTH_TIER_2 : ey[0],
        eM = (0, a.e7)([E.Z], () => E.Z.get(eS)),
        eZ = [
            {
                planId: null == eM ? void 0 : eM.id,
                quantity: 1
            }
        ],
        [eP, ev] = l.useState(eE),
        [eI, eb] = (0, u.ED)({
            items: eZ,
            renewal: !1,
            preventFetch: !eE,
            applyEntitlements: !0,
            trialId: K,
            paymentSourceId: ei.paymentSourceId,
            currency: ei.currency
        });
    l.useEffect(() => {
        eE && ev((null == eI ? void 0 : eI.subscriptionPeriodEnd) == null);
    }, [eI, eE]),
        (0, o.Z)(
            'Payment Modal Plan Select Step',
            eP,
            5,
            {
                proratedInvoicePreview: eI,
                proratedInvoiceError: eb,
                isEligibleForOffer: eE
            },
            { tags: { app_context: 'billing' } }
        );
    let eT = null != (F = null == eb ? void 0 : eb.message) ? F : A.intl.string(A.t.R0RpRU),
        eN = eE && null == eb,
        eO = eE && null != eb,
        ew = eN && null == z && !!eE && (null == eI ? void 0 : eI.subscriptionPeriodEnd) == null,
        ek = !es && (null == eM ? void 0 : eM.skuId) === U.Si.TIER_2 && (null == ej ? void 0 : ej.referrer_id) != null,
        eH = null;
    return ((eH = null != eo ? eo : ek ? (0, i.jsx)(L.Z, {}) : (0, i.jsx)(m.Z, {})), ew)
        ? (0, i.jsx)(T.Z, {})
        : (r()(null != et, 'Step should be set'),
          r()(ey.length > 0, 'Premium plan options should be set'),
          (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(w.P, { giftMessage: ea }),
                  !(es && (0, y.pO)(er)) && (0, i.jsx)(b.Z, { isEligibleForTrial: em }),
                  (0, i.jsxs)(N.C3, {
                      children: [
                          eN && (0, i.jsx)('hr', { className: B.planSelectSeparatorUpper }),
                          eH,
                          (0, i.jsx)(H.Z, {}),
                          (0, i.jsx)(k.Z, {}),
                          eO
                              ? (0, i.jsx)(C.kzN, { children: eT })
                              : (0, i.jsx)(_.O, {
                                    planOptions: ey,
                                    eligibleForMultiMonthPlans: ef,
                                    referralTrialOfferId: V,
                                    selectedPlanId: null == ee ? void 0 : ee.id,
                                    planGroup: W,
                                    subscriptionPeriodEnd: null == eI ? void 0 : eI.subscriptionPeriodEnd,
                                    discountInvoiceItems: eg ? (null == eI ? void 0 : eI.invoiceItems) : void 0,
                                    useCompactGiftComponents: eu,
                                    handleClose: X
                                }),
                          eN &&
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)('hr', { className: B.planSelectSeparatorLower }),
                                      (0, i.jsx)(C.Text, {
                                          variant: 'text-xs/normal',
                                          children: A.intl.format(A.t.BHtnqK, { link: S.Z.getArticleURL(R.BhN.PREMIUM_DETAILS_CANCEL_SUB) })
                                      })
                                  ]
                              })
                      ]
                  }),
                  (0, i.jsxs)(N.O3, {
                      children: [
                          eu && (0, i.jsx)(h.c, {}),
                          (0, i.jsx)(C.mzw, {
                              justify: d.Z.Justify.BETWEEN,
                              align: d.Z.Align.CENTER,
                              children: (0, i.jsx)(_.y, {
                                  onStepChange: G,
                                  onBackClick: () => G(v.h8.SKU_SELECT),
                                  showBackButton: null == D && null == Y,
                                  planOptions: ey,
                                  shouldRenderUpdatedPaymentModal: eN,
                                  isTrial: em
                              })
                          })
                      ]
                  })
              ]
          }));
}
