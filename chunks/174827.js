n.d(t, { x: () => F }), n(388685);
var l = n(255367),
    i = n(73800),
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
    _ = n(642530),
    L = n(381507),
    m = n(314404),
    g = n(594174),
    E = n(509545),
    S = n(669079),
    y = n(63063),
    I = n(74538),
    P = n(987209),
    M = n(563132),
    O = n(409813),
    Z = n(107998),
    T = n(51499),
    b = n(456251),
    v = n(614277),
    N = n(435020),
    k = n(809144),
    A = n(698708),
    U = n(844068),
    R = n(981631),
    w = n(474936),
    H = n(388032),
    B = n(428523);
function F(e) {
    var t, n, s, F;
    let { handleStepChange: G, initialPlanId: D, planGroup: W, subscriptionTier: K, trialId: Y, referralTrialOfferId: X, handleClose: z } = e,
        { activeSubscription: V, hasFetchedSubscriptions: Q, paymentSourceId: q, paymentSources: J, selectedSkuId: $, selectedPlan: ee, step: et, defaultPlanId: en, priceOptions: el, isPremium: ei } = (0, M.JL)(),
        { isGift: es, giftRecipient: er, giftMessage: ea, claimableRewards: eo } = (0, P.wD)(),
        { paymentModalBanner: eC } = (0, Z.zb)(),
        ed = (0, p.a5)(ee),
        ec = (null == (t = (0, x.Z)()) ? void 0 : t.planSelectionBanner) != null,
        eu = es && ed && null != eo && eo.length > 0 && ec,
        ep = (0, N.m)(J, q),
        { newPlans: ex } = c.ZP.useExperiment({ location: 'd17fd6_3' }, { autoTrackExposure: !1 }),
        eh = (0, a.e7)([g.default], () => g.default.getCurrentUser()),
        ef = !es && null != $ && $ === w.Si.TIER_2 && null != eh && eh.hasHadPremium() && Q && null == V && (0, c.aQ)(ep),
        ej = (0, j.N)(X),
        e_ = !es && null != ej && null != $ && w.nG[ej.trial_id].skus.includes($),
        eL = (0, f.Ng)(),
        em = null == eL || null == (n = eL.discount) ? void 0 : n.plan_ids.some((e) => w.GP[e].skuId === $),
        eg = !es && null != eL && null != $ && em,
        eE = null != (s = e_ || eg) && s,
        eS = i.useMemo(
            () =>
                (0, I.V7)({
                    skuId: $,
                    isPremium: ei,
                    multiMonthPlans: ef ? ex : [],
                    currentSubscription: V,
                    defaultPlanId: en
                }),
            [$, ei, ex, V, ef, en]
        ),
        ey = eg && eS.includes(w.Xh.PREMIUM_MONTH_TIER_2) ? w.Xh.PREMIUM_MONTH_TIER_2 : eS[0],
        eI = (0, a.e7)([E.Z], () => E.Z.get(ey)),
        eP = [
            {
                planId: null == eI ? void 0 : eI.id,
                quantity: 1
            }
        ],
        [eM, eO] = i.useState(eE),
        [eZ, eT] = (0, u.ED)({
            items: eP,
            renewal: !1,
            preventFetch: !eE,
            applyEntitlements: !0,
            trialId: Y,
            paymentSourceId: el.paymentSourceId,
            currency: el.currency
        });
    i.useEffect(() => {
        eE && eO((null == eZ ? void 0 : eZ.subscriptionPeriodEnd) == null);
    }, [eZ, eE]),
        (0, C.Z)(
            'Payment Modal Plan Select Step',
            eM,
            5,
            {
                proratedInvoicePreview: eZ,
                proratedInvoiceError: eT,
                isEligibleForOffer: eE
            },
            { tags: { app_context: 'billing' } }
        );
    let eb = null != (F = null == eT ? void 0 : eT.message) ? F : H.intl.string(H.t.R0RpRU),
        ev = eE && null == eT,
        eN = eE && null != eT,
        ek = ev && null == V && !!eE && (null == eZ ? void 0 : eZ.subscriptionPeriodEnd) == null,
        eA = !es && (null == eI ? void 0 : eI.skuId) === w.Si.TIER_2 && (null == ej ? void 0 : ej.referrer_id) != null,
        eU = null;
    return ((eU = null != eC ? eC : eA ? (0, l.jsx)(L.Z, {}) : (0, l.jsx)(_.Z, {})), ek)
        ? (0, l.jsx)(b.Z, {})
        : (r()(null != et, 'Step should be set'),
          r()(eS.length > 0, 'Premium plan options should be set'),
          (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(k.P, { giftMessage: ea }),
                  !(es && (0, S.pO)(er)) && (0, l.jsx)(T.Z, { isEligibleForTrial: e_ }),
                  (0, l.jsxs)(v.C3, {
                      children: [
                          ev && (0, l.jsx)('hr', { className: B.planSelectSeparatorUpper }),
                          eU,
                          (0, l.jsx)(U.Z, {}),
                          (0, l.jsx)(A.Z, {}),
                          eN
                              ? (0, l.jsx)(o.kzN, { children: eb })
                              : (0, l.jsx)(m.O, {
                                    planOptions: eS,
                                    eligibleForMultiMonthPlans: ef,
                                    referralTrialOfferId: X,
                                    selectedPlanId: null == ee ? void 0 : ee.id,
                                    planGroup: W,
                                    subscriptionPeriodEnd: null == eZ ? void 0 : eZ.subscriptionPeriodEnd,
                                    discountInvoiceItems: eg ? (null == eZ ? void 0 : eZ.invoiceItems) : void 0,
                                    useCompactGiftComponents: eu,
                                    handleClose: z
                                }),
                          ev &&
                              (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      (0, l.jsx)('hr', { className: B.planSelectSeparatorLower }),
                                      (0, l.jsx)(o.Text, {
                                          variant: 'text-xs/normal',
                                          children: H.intl.format(H.t.BHtnqK, { link: y.Z.getArticleURL(R.BhN.PREMIUM_DETAILS_CANCEL_SUB) })
                                      })
                                  ]
                              })
                      ]
                  }),
                  (0, l.jsxs)(v.O3, {
                      children: [
                          eu && (0, l.jsx)(h.c, {}),
                          (0, l.jsx)(o.mzw, {
                              justify: d.Z.Justify.BETWEEN,
                              align: d.Z.Align.CENTER,
                              children: (0, l.jsx)(m.y, {
                                  onStepChange: G,
                                  onBackClick: () => G(O.h8.SKU_SELECT),
                                  showBackButton: null == D && null == K,
                                  planOptions: eS,
                                  shouldRenderUpdatedPaymentModal: ev,
                                  isTrial: e_
                              })
                          })
                      ]
                  })
              ]
          }));
}
