n.d(t, { x: () => B }), n(47120);
var l = n(200651),
    i = n(192379),
    s = n(512722),
    r = n.n(s),
    a = n(399606),
    o = n(481060),
    C = n(975608),
    d = n(600164),
    c = n(711459),
    u = n(374649),
    p = n(650032),
    x = n(439017),
    f = n(717401),
    h = n(286961),
    _ = n(572517),
    j = n(104494),
    m = n(639119),
    L = n(642530),
    g = n(381507),
    E = n(314404),
    S = n(594174),
    N = n(509545),
    y = n(669079),
    I = n(63063),
    O = n(74538),
    v = n(987209),
    P = n(563132),
    b = n(409813),
    T = n(51499),
    M = n(456251),
    Z = n(614277),
    w = n(809144),
    k = n(698708),
    U = n(844068),
    A = n(981631),
    R = n(474936),
    H = n(388032),
    W = n(652725);
function B(e) {
    var t, n, s, B;
    let { handleStepChange: F, initialPlanId: G, subscriptionTier: D, trialId: Y, referralTrialOfferId: K, handleClose: X } = e,
        { activeSubscription: z, hasFetchedSubscriptions: V, paymentSourceId: Q, paymentSources: q, selectedSkuId: J, selectedPlan: $, step: ee, defaultPlanId: et, priceOptions: en, isPremium: el } = (0, P.JL)(),
        { isGift: ei, giftRecipient: es, giftMessage: er, claimableRewards: ea } = (0, v.wD)(),
        eo = (0, f.a5)($),
        eC = (null === (t = (0, h.Z)()) || void 0 === t ? void 0 : t.planSelectionBanner) != null,
        ed = ei && eo && null != ea && ea.length > 0 && eC,
        ec = null != Q ? q[Q] : null,
        { newPlans: eu } = c.ZP.useExperiment({ location: 'd17fd6_3' }, { autoTrackExposure: !1 }),
        ep = (0, a.e7)([S.default], () => S.default.getCurrentUser()),
        ex = !ei && null != J && J === R.Si.TIER_2 && null != ep && ep.hasHadPremium() && V && null == z && (0, c.aQ)(ec),
        ef = (0, m.N)(K),
        eh = !ei && null != ef && null != J && R.nG[ef.trial_id].skus.includes(J),
        e_ = (0, j.Ng)(),
        ej = null == e_ ? void 0 : null === (n = e_.discount) || void 0 === n ? void 0 : n.plan_ids.some((e) => R.GP[e].skuId === J),
        em = !ei && null != e_ && null != J && ej,
        eL = null !== (s = eh || em) && void 0 !== s && s,
        { defaultToMonthlyPlan: eg } = x.k.useExperiment({ location: 'd17fd6_4' }, { autoTrackExposure: !1 }),
        eE = i.useMemo(
            () =>
                (0, O.V7)({
                    skuId: J,
                    isPremium: el,
                    multiMonthPlans: ex ? eu : [],
                    currentSubscription: z,
                    isGift: ei,
                    isEligibleForTrial: eh,
                    defaultPlanId: et,
                    defaultToMonthlyPlan: eg
                }),
            [J, el, eu, z, ex, ei, eh, et, eg]
        ),
        eS = em && eE.includes(R.Xh.PREMIUM_MONTH_TIER_2) ? R.Xh.PREMIUM_MONTH_TIER_2 : eE[0],
        eN = (0, a.e7)([N.Z], () => N.Z.get(eS)),
        ey = [
            {
                planId: null == eN ? void 0 : eN.id,
                quantity: 1
            }
        ],
        [eI, eO] = i.useState(eL),
        [ev, eP] = (0, u.ED)({
            items: ey,
            renewal: !1,
            preventFetch: !eL,
            applyEntitlements: !0,
            trialId: Y,
            paymentSourceId: en.paymentSourceId,
            currency: en.currency
        });
    i.useEffect(() => {
        eL && eO((null == ev ? void 0 : ev.subscriptionPeriodEnd) == null);
    }, [ev, eL]),
        (0, C.Z)(
            'Payment Modal Plan Select Step',
            eI,
            5,
            {
                proratedInvoicePreview: ev,
                proratedInvoiceError: eP,
                isEligibleForOffer: eL
            },
            { tags: { app_context: 'billing' } }
        );
    let eb = null !== (B = null == eP ? void 0 : eP.message) && void 0 !== B ? B : H.NW.string(H.t.R0RpRU),
        eT = eL && null == eP,
        eM = eL && null != eP,
        eZ = eT && null == z && !!eL && (null == ev ? void 0 : ev.subscriptionPeriodEnd) == null,
        { enabled: ew } = p._.useExperiment({ location: 'PremiumPaymentPlanSelectStep' }, { autoTrackExposure: !1 }),
        ek = !ei && (null == eN ? void 0 : eN.skuId) === R.Si.TIER_2 && (null == ef ? void 0 : ef.referrer_id) != null && ew,
        eU = null;
    return ((eU = ek ? (0, l.jsx)(g.Z, {}) : (0, l.jsx)(L.Z, {})), eZ)
        ? (0, l.jsx)(M.Z, {})
        : (r()(null != ee, 'Step should be set'),
          r()(eE.length > 0, 'Premium plan options should be set'),
          (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(w.P, { giftMessage: er }),
                  !(ei && (0, y.pO)(es)) && (0, l.jsx)(T.Z, { isEligibleForTrial: eh }),
                  (0, l.jsxs)(Z.C3, {
                      children: [
                          eT && (0, l.jsx)('hr', { className: W.planSelectSeparatorUpper }),
                          eU,
                          (0, l.jsx)(U.Z, {}),
                          (0, l.jsx)(k.Z, {}),
                          eM
                              ? (0, l.jsx)(o.kzN, { children: eb })
                              : (0, l.jsx)(E.O, {
                                    planOptions: eE,
                                    eligibleForMultiMonthPlans: ex,
                                    referralTrialOfferId: K,
                                    selectedPlanId: null == $ ? void 0 : $.id,
                                    subscriptionPeriodEnd: null == ev ? void 0 : ev.subscriptionPeriodEnd,
                                    discountInvoiceItems: em ? (null == ev ? void 0 : ev.invoiceItems) : void 0,
                                    useCompactGiftComponents: ed,
                                    handleClose: X
                                }),
                          eT &&
                              (0, l.jsxs)(l.Fragment, {
                                  children: [
                                      (0, l.jsx)('hr', { className: W.planSelectSeparatorLower }),
                                      (0, l.jsx)(o.Text, {
                                          variant: 'text-xs/normal',
                                          children: H.NW.format(H.t.BHtnqK, { link: I.Z.getArticleURL(A.BhN.PREMIUM_DETAILS_CANCEL_SUB) })
                                      })
                                  ]
                              })
                      ]
                  }),
                  (0, l.jsxs)(Z.O3, {
                      children: [
                          ed && (0, l.jsx)(_.c, {}),
                          (0, l.jsx)(o.mzw, {
                              justify: d.Z.Justify.BETWEEN,
                              align: d.Z.Align.CENTER,
                              children: (0, l.jsx)(E.y, {
                                  onStepChange: F,
                                  onBackClick: () => F(b.h8.SKU_SELECT),
                                  showBackButton: null == G && null == D,
                                  planOptions: eE,
                                  shouldRenderUpdatedPaymentModal: eT,
                                  isTrial: eh
                              })
                          })
                      ]
                  })
              ]
          }));
}
