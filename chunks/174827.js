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
        { activeSubscription: z, hasFetchedSubscriptions: q, paymentSourceId: Q, paymentSources: J, selectedSkuId: $, selectedPlan: ee, step: et, defaultPlanId: en, priceOptions: ei, isPremium: el } = (0, b.JL)(),
        { isGift: es, giftRecipient: er, giftMessage: ea, claimableRewards: eo } = (0, P.wD)(),
        { paymentModalBanner: eC } = (0, T.zb)(),
        ed = (0, p.a5)(ee),
        ec = (null == (t = (0, x.Z)()) ? void 0 : t.planSelectionBanner) != null,
        eu = es && ed && null != eo && eo.length > 0 && ec,
        ep = (0, O.m)(J, Q),
        { newPlans: ex } = c.ZP.useExperiment({ location: 'd17fd6_3' }, { autoTrackExposure: !1 }),
        eh = (0, a.e7)([L.default], () => L.default.getCurrentUser()),
        ef = !es && null != $ && $ === w.Si.TIER_2 && null != eh && eh.hasHadPremium() && q && null == z && (0, c.aQ)(ep),
        ej = (0, j.N)(V),
        em = !es && null != ej && null != $ && w.nG[ej.trial_id].skus.includes($),
        e_ = (0, f.Ng)(),
        eg = null == e_ || null == (n = e_.discount) ? void 0 : n.plan_ids.some((e) => w.GP[e].skuId === $),
        eL = !es && null != e_ && null != $ && eg,
        eE = null != (s = em || eL) && s,
        ey = l.useMemo(
            () =>
                (0, v.V7)({
                    skuId: $,
                    isPremium: el,
                    multiMonthPlans: ef ? ex : [],
                    currentSubscription: z,
                    defaultPlanId: en
                }),
            [$, el, ex, z, ef, en]
        ),
        eS = eL && ey.includes(w.Xh.PREMIUM_MONTH_TIER_2) ? w.Xh.PREMIUM_MONTH_TIER_2 : ey[0],
        ev = (0, a.e7)([E.Z], () => E.Z.get(eS)),
        eP = [
            {
                planId: null == ev ? void 0 : ev.id,
                quantity: 1
            }
        ],
        [eb, eI] = l.useState(eE),
        [eT, eM] = (0, u.ED)({
            items: eP,
            renewal: !1,
            preventFetch: !eE,
            applyEntitlements: !0,
            trialId: K,
            paymentSourceId: ei.paymentSourceId,
            currency: ei.currency
        });
    l.useEffect(() => {
        eE && eI((null == eT ? void 0 : eT.subscriptionPeriodEnd) == null);
    }, [eT, eE]),
        (0, C.Z)(
            'Payment Modal Plan Select Step',
            eb,
            5,
            {
                proratedInvoicePreview: eT,
                proratedInvoiceError: eM,
                isEligibleForOffer: eE
            },
            { tags: { app_context: 'billing' } }
        );
    let eZ = null != (B = null == eM ? void 0 : eM.message) ? B : H.intl.string(H.t.R0RpRU),
        eN = eE && null == eM,
        eO = eE && null != eM,
        eR = eN && null == z && !!eE && (null == eT ? void 0 : eT.subscriptionPeriodEnd) == null,
        ek = !es && (null == ev ? void 0 : ev.skuId) === w.Si.TIER_2 && (null == ej ? void 0 : ej.referrer_id) != null,
        eU = null;
    return ((eU = null != eC ? eC : ek ? (0, i.jsx)(_.Z, {}) : (0, i.jsx)(m.Z, {})), eR)
        ? (0, i.jsx)(Z.Z, {})
        : (r()(null != et, 'Step should be set'),
          r()(ey.length > 0, 'Premium plan options should be set'),
          (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(R.P, { giftMessage: ea }),
                  !(es && (0, y.pO)(er)) && (0, i.jsx)(M.Z, { isEligibleForTrial: em }),
                  (0, i.jsxs)(N.C3, {
                      children: [
                          eN && (0, i.jsx)('hr', { className: F.planSelectSeparatorUpper }),
                          eU,
                          (0, i.jsx)(U.Z, {}),
                          (0, i.jsx)(k.Z, {}),
                          eO
                              ? (0, i.jsx)(o.kzN, { children: eZ })
                              : (0, i.jsx)(g.O, {
                                    planOptions: ey,
                                    eligibleForMultiMonthPlans: ef,
                                    referralTrialOfferId: V,
                                    selectedPlanId: null == ee ? void 0 : ee.id,
                                    planGroup: W,
                                    subscriptionPeriodEnd: null == eT ? void 0 : eT.subscriptionPeriodEnd,
                                    discountInvoiceItems: eL ? (null == eT ? void 0 : eT.invoiceItems) : void 0,
                                    useCompactGiftComponents: eu,
                                    handleClose: X
                                }),
                          eN &&
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
                          eu && (0, i.jsx)(h.c, {}),
                          (0, i.jsx)(o.mzw, {
                              justify: d.Z.Justify.BETWEEN,
                              align: d.Z.Align.CENTER,
                              children: (0, i.jsx)(g.y, {
                                  onStepChange: G,
                                  onBackClick: () => G(I.h8.SKU_SELECT),
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
