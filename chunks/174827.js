n.d(t, { x: () => F }), n(47120);
var l = n(200651),
    i = n(192379),
    s = n(512722),
    r = n.n(s),
    a = n(399606),
    o = n(481060),
    C = n(975608),
    d = n(600164),
    u = n(711459),
    c = n(374649),
    p = n(650032),
    x = n(439017),
    h = n(717401),
    _ = n(286961),
    f = n(572517),
    j = n(104494),
    m = n(639119),
    L = n(642530),
    E = n(381507),
    g = n(314404),
    S = n(594174),
    I = n(509545),
    N = n(669079),
    T = n(63063),
    M = n(74538),
    v = n(987209),
    y = n(563132),
    Z = n(409813),
    P = n(51499),
    k = n(456251),
    U = n(614277),
    A = n(809144),
    O = n(698708),
    R = n(844068),
    w = n(981631),
    b = n(474936),
    H = n(388032),
    B = n(670841);
function F(e) {
    var t, n, s, F;
    let { handleStepChange: G, initialPlanId: D, subscriptionTier: W, trialId: Y, referralTrialOfferId: K, handleClose: X } = e,
        { activeSubscription: z, hasFetchedSubscriptions: V, paymentSourceId: Q, paymentSources: q, selectedSkuId: J, selectedPlan: $, step: ee, defaultPlanId: et, priceOptions: en, isPremium: el } = (0, y.JL)(),
        { isGift: ei, giftRecipient: es, giftMessage: er, claimableRewards: ea } = (0, v.wD)(),
        eo = (0, h.a5)($),
        eC = (null === (t = (0, _.Z)()) || void 0 === t ? void 0 : t.planSelectionBanner) != null,
        ed = ei && eo && null != ea && ea.length > 0 && eC,
        eu = null != Q ? q[Q] : null,
        { newPlans: ec } = u.ZP.useExperiment({ location: 'd17fd6_3' }, { autoTrackExposure: !1 }),
        ep = (0, a.e7)([S.default], () => S.default.getCurrentUser()),
        ex = !ei && null != J && J === b.Si.TIER_2 && null != ep && ep.hasHadPremium() && V && null == z && (0, u.aQ)(eu),
        eh = (0, m.N)(K),
        e_ = !ei && null != eh && null != J && b.nG[eh.trial_id].skus.includes(J),
        ef = (0, j.Ng)(),
        ej = null == ef ? void 0 : null === (n = ef.discount) || void 0 === n ? void 0 : n.plan_ids.some((e) => b.GP[e].skuId === J),
        em = !ei && null != ef && null != J && ej,
        eL = null !== (s = e_ || em) && void 0 !== s && s,
        { defaultToMonthlyPlan: eE } = x.k.useExperiment({ location: 'd17fd6_4' }, { autoTrackExposure: !1 }),
        eg = i.useMemo(
            () =>
                (0, M.V7)({
                    skuId: J,
                    isPremium: el,
                    multiMonthPlans: ex ? ec : [],
                    currentSubscription: z,
                    isGift: ei,
                    isEligibleForTrial: e_,
                    defaultPlanId: et,
                    defaultToMonthlyPlan: eE
                }),
            [J, el, ec, z, ex, ei, e_, et, eE]
        ),
        eS = em && eg.includes(b.Xh.PREMIUM_MONTH_TIER_2) ? b.Xh.PREMIUM_MONTH_TIER_2 : eg[0],
        eI = (0, a.e7)([I.Z], () => I.Z.get(eS)),
        eN = [
            {
                planId: null == eI ? void 0 : eI.id,
                quantity: 1
            }
        ],
        [eT, eM] = i.useState(eL),
        [ev, ey] = (0, c.ED)({
            items: eN,
            renewal: !1,
            preventFetch: !eL,
            applyEntitlements: !0,
            trialId: Y,
            paymentSourceId: en.paymentSourceId,
            currency: en.currency
        });
    i.useEffect(() => {
        eL && eM((null == ev ? void 0 : ev.subscriptionPeriodEnd) == null);
    }, [ev, eL]),
        (0, C.Z)(
            'Payment Modal Plan Select Step',
            eT,
            5,
            {
                proratedInvoicePreview: ev,
                proratedInvoiceError: ey,
                isEligibleForOffer: eL
            },
            { tags: { app_context: 'billing' } }
        );
    let eZ = null !== (F = null == ey ? void 0 : ey.message) && void 0 !== F ? F : H.intl.string(H.t.R0RpRU),
        eP = eL && null == ey,
        ek = eL && null != ey,
        eU = eP && null == z && !!eL && (null == ev ? void 0 : ev.subscriptionPeriodEnd) == null,
        { enabled: eA } = p._.useExperiment({ location: 'PremiumPaymentPlanSelectStep' }, { autoTrackExposure: !1 }),
        eO = !ei && (null == eI ? void 0 : eI.skuId) === b.Si.TIER_2 && (null == eh ? void 0 : eh.referrer_id) != null && eA,
        eR = null;
    return ((eR = eO ? (0, l.jsx)(E.Z, {}) : (0, l.jsx)(L.Z, {})), eU)
        ? (0, l.jsx)(k.Z, {})
        : (r()(null != ee, 'Step should be set'),
          r()(eg.length > 0, 'Premium plan options should be set'),
          (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(A.P, { giftMessage: er }),
                  !(ei && (0, N.pO)(es)) && (0, l.jsx)(P.Z, { isEligibleForTrial: e_ }),
                  (0, l.jsxs)(U.C3, {
                      children: [
                          eP && (0, l.jsx)('hr', { className: B.planSelectSeparatorUpper }),
                          eR,
                          (0, l.jsx)(R.Z, {}),
                          (0, l.jsx)(O.Z, {}),
                          ek
                              ? (0, l.jsx)(o.kzN, { children: eZ })
                              : (0, l.jsx)(g.O, {
                                    planOptions: eg,
                                    eligibleForMultiMonthPlans: ex,
                                    referralTrialOfferId: K,
                                    selectedPlanId: null == $ ? void 0 : $.id,
                                    subscriptionPeriodEnd: null == ev ? void 0 : ev.subscriptionPeriodEnd,
                                    discountInvoiceItems: em ? (null == ev ? void 0 : ev.invoiceItems) : void 0,
                                    useCompactGiftComponents: ed,
                                    handleClose: X
                                }),
                          eP &&
                              (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      (0, l.jsx)('hr', { className: B.planSelectSeparatorLower }),
                                      (0, l.jsx)(o.Text, {
                                          variant: 'text-xs/normal',
                                          children: H.intl.format(H.t.BHtnqK, { link: T.Z.getArticleURL(w.BhN.PREMIUM_DETAILS_CANCEL_SUB) })
                                      })
                                  ]
                              })
                      ]
                  }),
                  (0, l.jsxs)(U.O3, {
                      children: [
                          ed && (0, l.jsx)(f.c, {}),
                          (0, l.jsx)(o.mzw, {
                              justify: d.Z.Justify.BETWEEN,
                              align: d.Z.Align.CENTER,
                              children: (0, l.jsx)(g.y, {
                                  onStepChange: G,
                                  onBackClick: () => G(Z.h8.SKU_SELECT),
                                  showBackButton: null == D && null == W,
                                  planOptions: eg,
                                  shouldRenderUpdatedPaymentModal: eP,
                                  isTrial: e_
                              })
                          })
                      ]
                  })
              ]
          }));
}
