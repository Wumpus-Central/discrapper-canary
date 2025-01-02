n.d(t, {
    x: function () {
        return F;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
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
    S = n(381507),
    g = n(314404),
    E = n(594174),
    I = n(509545),
    M = n(669079),
    v = n(63063),
    y = n(74538),
    T = n(987209),
    N = n(563132),
    P = n(409813),
    Z = n(51499),
    A = n(456251),
    U = n(614277),
    k = n(809144),
    O = n(698708),
    R = n(844068),
    b = n(981631),
    w = n(474936),
    B = n(388032),
    H = n(242582);
function F(e) {
    var t, n, s, F;
    let { handleStepChange: G, initialPlanId: D, subscriptionTier: W, trialId: Y, referralTrialOfferId: K, handleClose: V } = e,
        { activeSubscription: X, hasFetchedSubscriptions: Q, paymentSourceId: z, paymentSources: q, selectedSkuId: J, selectedPlan: $, step: ee, defaultPlanId: et, priceOptions: en, isPremium: ei } = (0, N.usePaymentContext)(),
        { isGift: el, giftRecipient: es, giftMessage: er, claimableRewards: ea } = (0, T.wD)(),
        eo = (0, h.a5)($),
        eC = (null === (t = (0, _.Z)()) || void 0 === t ? void 0 : t.planSelectionBanner) != null,
        ed = el && eo && null != ea && ea.length > 0 && eC,
        eu = null != z ? q[z] : null,
        { newPlans: ec } = u.ZP.useExperiment({ location: 'd17fd6_3' }, { autoTrackExposure: !1 }),
        ep = (0, a.e7)([E.default], () => E.default.getCurrentUser()),
        ex = !el && null != J && J === w.Si.TIER_2 && null != ep && ep.hasHadPremium() && Q && null == X && (0, u.aQ)(eu),
        eh = (0, m.N)(K),
        e_ = !el && null != eh && null != J && w.nG[eh.trial_id].skus.includes(J),
        ef = (0, j.Ng)(),
        ej = null == ef ? void 0 : null === (n = ef.discount) || void 0 === n ? void 0 : n.plan_ids.some((e) => w.GP[e].skuId === J),
        em = !el && null != ef && null != J && ej,
        eL = null !== (s = e_ || em) && void 0 !== s && s,
        { defaultToMonthlyPlan: eS } = x.k.useExperiment({ location: 'd17fd6_4' }, { autoTrackExposure: !1 }),
        eg = l.useMemo(
            () =>
                (0, y.V7)({
                    skuId: J,
                    isPremium: ei,
                    multiMonthPlans: ex ? ec : [],
                    currentSubscription: X,
                    isGift: el,
                    isEligibleForTrial: e_,
                    defaultPlanId: et,
                    defaultToMonthlyPlan: eS
                }),
            [J, ei, ec, X, ex, el, e_, et, eS]
        ),
        eE = em && eg.includes(w.Xh.PREMIUM_MONTH_TIER_2) ? w.Xh.PREMIUM_MONTH_TIER_2 : eg[0],
        eI = (0, a.e7)([I.Z], () => I.Z.get(eE)),
        eM = [
            {
                planId: null == eI ? void 0 : eI.id,
                quantity: 1
            }
        ],
        [ev, ey] = l.useState(eL),
        [eT, eN] = (0, c.ED)({
            items: eM,
            renewal: !1,
            preventFetch: !eL,
            applyEntitlements: !0,
            trialId: Y,
            paymentSourceId: en.paymentSourceId,
            currency: en.currency
        });
    l.useEffect(() => {
        eL && ey((null == eT ? void 0 : eT.subscriptionPeriodEnd) == null);
    }, [eT, eL]),
        (0, C.Z)(
            'Payment Modal Plan Select Step',
            ev,
            5,
            {
                proratedInvoicePreview: eT,
                proratedInvoiceError: eN,
                isEligibleForOffer: eL
            },
            { tags: { app_context: 'billing' } }
        );
    let eP = null !== (F = null == eN ? void 0 : eN.message) && void 0 !== F ? F : B.intl.string(B.t.R0RpRU),
        eZ = eL && null == eN,
        eA = eL && null != eN,
        eU = eZ && null == X && !!eL && (null == eT ? void 0 : eT.subscriptionPeriodEnd) == null,
        { enabled: ek } = p._.useExperiment({ location: 'PremiumPaymentPlanSelectStep' }, { autoTrackExposure: !1 }),
        eO = !el && (null == eI ? void 0 : eI.skuId) === w.Si.TIER_2 && (null == eh ? void 0 : eh.referrer_id) != null && ek,
        eR = null;
    return ((eR = eO ? (0, i.jsx)(S.Z, {}) : (0, i.jsx)(L.Z, {})), eU)
        ? (0, i.jsx)(A.Z, {})
        : (r()(null != ee, 'Step should be set'),
          r()(eg.length > 0, 'Premium plan options should be set'),
          (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(k.P, { giftMessage: er }),
                  !(el && (0, M.pO)(es)) && (0, i.jsx)(Z.Z, { isEligibleForTrial: e_ }),
                  (0, i.jsxs)(U.C3, {
                      children: [
                          eZ && (0, i.jsx)('hr', { className: H.planSelectSeparatorUpper }),
                          eR,
                          (0, i.jsx)(R.Z, {}),
                          (0, i.jsx)(O.Z, {}),
                          eA
                              ? (0, i.jsx)(o.FormErrorBlock, { children: eP })
                              : (0, i.jsx)(g.O, {
                                    planOptions: eg,
                                    eligibleForMultiMonthPlans: ex,
                                    referralTrialOfferId: K,
                                    selectedPlanId: null == $ ? void 0 : $.id,
                                    subscriptionPeriodEnd: null == eT ? void 0 : eT.subscriptionPeriodEnd,
                                    discountInvoiceItems: em ? (null == eT ? void 0 : eT.invoiceItems) : void 0,
                                    useCompactGiftComponents: ed,
                                    handleClose: V
                                }),
                          eZ &&
                              (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)('hr', { className: H.planSelectSeparatorLower }),
                                      (0, i.jsx)(o.Text, {
                                          variant: 'text-xs/normal',
                                          children: B.intl.format(B.t.BHtnqK, { link: v.Z.getArticleURL(b.BhN.PREMIUM_DETAILS_CANCEL_SUB) })
                                      })
                                  ]
                              })
                      ]
                  }),
                  (0, i.jsxs)(U.O3, {
                      children: [
                          ed && (0, i.jsx)(f.c, {}),
                          (0, i.jsx)(o.ModalFooter, {
                              justify: d.Z.Justify.BETWEEN,
                              align: d.Z.Align.CENTER,
                              children: (0, i.jsx)(g.y, {
                                  onStepChange: G,
                                  onBackClick: () => G(P.h8.SKU_SELECT),
                                  showBackButton: null == D && null == W,
                                  planOptions: eg,
                                  shouldRenderUpdatedPaymentModal: eZ,
                                  isTrial: e_
                              })
                          })
                      ]
                  })
              ]
          }));
}
