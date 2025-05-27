n.d(t, { x: () => F }), n(388685);
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
    L = n(314404),
    g = n(594174),
    E = n(509545),
    y = n(669079),
    S = n(63063),
    Z = n(74538),
    M = n(987209),
    v = n(563132),
    P = n(409813),
    b = n(107998),
    I = n(51499),
    T = n(456251),
    N = n(614277),
    O = n(435020),
    w = n(809144),
    R = n(698708),
    k = n(844068),
    H = n(981631),
    U = n(474936),
    A = n(388032),
    B = n(428523);
function F(e) {
    var t, n, s, F;
    let { handleStepChange: G, initialPlanId: D, planGroup: W, subscriptionTier: Y, trialId: K, referralTrialOfferId: V, handleClose: X } = e,
        { activeSubscription: z, hasFetchedSubscriptions: q, paymentSourceId: Q, paymentSources: J, selectedSkuId: $, selectedPlan: ee, step: et, defaultPlanId: en, priceOptions: ei, isPremium: el } = (0, v.JL)(),
        { isGift: es, giftRecipient: er, giftMessage: ea, claimableRewards: eo } = (0, M.wD)(),
        { paymentModalBanner: eC } = (0, b.zb)(),
        ed = (0, p.a5)(ee),
        ec = (null == (t = (0, x.Z)()) ? void 0 : t.planSelectionBanner) != null,
        eu = es && ed && null != eo && eo.length > 0 && ec,
        ep = (0, O.m)(J, Q),
        { newPlans: ex } = c.ZP.useExperiment({ location: 'd17fd6_3' }, { autoTrackExposure: !1 }),
        eh = (0, a.e7)([g.default], () => g.default.getCurrentUser()),
        ef = !es && null != $ && $ === U.Si.TIER_2 && null != eh && eh.hasHadPremium() && q && null == z && (0, c.aQ)(ep),
        ej = (0, j.N)(V),
        em = !es && null != ej && null != $ && U.nG[ej.trial_id].skus.includes($),
        e_ = (0, f.Ng)(),
        eL = null == e_ || null == (n = e_.discount) ? void 0 : n.plan_ids.some((e) => U.GP[e].skuId === $),
        eg = !es && null != e_ && null != $ && eL,
        eE = null != (s = em || eg) && s,
        ey = l.useMemo(
            () =>
                (0, Z.V7)({
                    skuId: $,
                    isPremium: el,
                    multiMonthPlans: ef ? ex : [],
                    currentSubscription: z,
                    defaultPlanId: en
                }),
            [$, el, ex, z, ef, en]
        ),
        eS = eg && ey.includes(U.Xh.PREMIUM_MONTH_TIER_2) ? U.Xh.PREMIUM_MONTH_TIER_2 : ey[0],
        eZ = (0, a.e7)([E.Z], () => E.Z.get(eS)),
        eM = [
            {
                planId: null == eZ ? void 0 : eZ.id,
                quantity: 1
            }
        ],
        [ev, eP] = l.useState(eE),
        [eb, eI] = (0, u.ED)({
            items: eM,
            renewal: !1,
            preventFetch: !eE,
            applyEntitlements: !0,
            trialId: K,
            paymentSourceId: ei.paymentSourceId,
            currency: ei.currency
        });
    l.useEffect(() => {
        eE && eP((null == eb ? void 0 : eb.subscriptionPeriodEnd) == null);
    }, [eb, eE]),
        (0, C.Z)(
            'Payment Modal Plan Select Step',
            ev,
            5,
            {
                proratedInvoicePreview: eb,
                proratedInvoiceError: eI,
                isEligibleForOffer: eE
            },
            { tags: { app_context: 'billing' } }
        );
    let eT = null != (F = null == eI ? void 0 : eI.message) ? F : A.intl.string(A.t.R0RpRU),
        eN = eE && null == eI,
        eO = eE && null != eI,
        ew = eN && null == z && !!eE && (null == eb ? void 0 : eb.subscriptionPeriodEnd) == null,
        eR = !es && (null == eZ ? void 0 : eZ.skuId) === U.Si.TIER_2 && (null == ej ? void 0 : ej.referrer_id) != null,
        ek = null;
    return ((ek = null != eC ? eC : eR ? (0, i.jsx)(_.Z, {}) : (0, i.jsx)(m.Z, {})), ew)
        ? (0, i.jsx)(T.Z, {})
        : (r()(null != et, 'Step should be set'),
          r()(ey.length > 0, 'Premium plan options should be set'),
          (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(w.P, { giftMessage: ea }),
                  !(es && (0, y.pO)(er)) && (0, i.jsx)(I.Z, { isEligibleForTrial: em }),
                  (0, i.jsxs)(N.C3, {
                      children: [
                          eN && (0, i.jsx)('hr', { className: B.planSelectSeparatorUpper }),
                          ek,
                          (0, i.jsx)(k.Z, {}),
                          (0, i.jsx)(R.Z, {}),
                          eO
                              ? (0, i.jsx)(o.kzN, { children: eT })
                              : (0, i.jsx)(L.O, {
                                    planOptions: ey,
                                    eligibleForMultiMonthPlans: ef,
                                    referralTrialOfferId: V,
                                    selectedPlanId: null == ee ? void 0 : ee.id,
                                    planGroup: W,
                                    subscriptionPeriodEnd: null == eb ? void 0 : eb.subscriptionPeriodEnd,
                                    discountInvoiceItems: eg ? (null == eb ? void 0 : eb.invoiceItems) : void 0,
                                    useCompactGiftComponents: eu,
                                    handleClose: X
                                }),
                          eN &&
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)('hr', { className: B.planSelectSeparatorLower }),
                                      (0, i.jsx)(o.Text, {
                                          variant: 'text-xs/normal',
                                          children: A.intl.format(A.t.BHtnqK, { link: S.Z.getArticleURL(H.BhN.PREMIUM_DETAILS_CANCEL_SUB) })
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
                              children: (0, i.jsx)(L.y, {
                                  onStepChange: G,
                                  onBackClick: () => G(P.h8.SKU_SELECT),
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
