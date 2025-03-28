n.d(t, { x: () => H }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(512722),
    s = n.n(l),
    o = n(399606),
    a = n(481060),
    C = n(975608),
    d = n(600164),
    c = n(711459),
    u = n(374649),
    p = n(717401),
    _ = n(286961),
    x = n(572517),
    f = n(104494),
    h = n(639119),
    j = n(642530),
    m = n(381507),
    L = n(314404),
    g = n(594174),
    S = n(509545),
    y = n(669079),
    E = n(63063),
    b = n(74538),
    N = n(987209),
    I = n(563132),
    P = n(409813),
    M = n(107998),
    T = n(51499),
    v = n(456251),
    Z = n(614277),
    O = n(435020),
    w = n(809144),
    k = n(698708),
    U = n(844068),
    A = n(981631),
    R = n(474936),
    F = n(388032),
    B = n(859009);
function H(e) {
    var t, n, l, H;
    let { handleStepChange: W, initialPlanId: G, subscriptionTier: D, trialId: Y, referralTrialOfferId: z, handleClose: K } = e,
        { activeSubscription: X, hasFetchedSubscriptions: V, paymentSourceId: Q, paymentSources: q, selectedSkuId: J, selectedPlan: $, step: ee, defaultPlanId: et, priceOptions: en, isPremium: er } = (0, I.JL)(),
        { isGift: ei, giftRecipient: el, giftMessage: es, claimableRewards: eo } = (0, N.wD)(),
        { planSelectBanner: ea } = (0, M.zb)(),
        eC = (0, p.a5)($),
        ed = (null === (t = (0, _.Z)()) || void 0 === t ? void 0 : t.planSelectionBanner) != null,
        ec = ei && eC && null != eo && eo.length > 0 && ed,
        eu = (0, O.m)(q, Q),
        { newPlans: ep } = c.ZP.useExperiment({ location: 'd17fd6_3' }, { autoTrackExposure: !1 }),
        e_ = (0, o.e7)([g.default], () => g.default.getCurrentUser()),
        ex = !ei && null != J && J === R.Si.TIER_2 && null != e_ && e_.hasHadPremium() && V && null == X && (0, c.aQ)(eu),
        ef = (0, h.N)(z),
        eh = !ei && null != ef && null != J && R.nG[ef.trial_id].skus.includes(J),
        ej = (0, f.Ng)(),
        em = null == ej ? void 0 : null === (n = ej.discount) || void 0 === n ? void 0 : n.plan_ids.some((e) => R.GP[e].skuId === J),
        eL = !ei && null != ej && null != J && em,
        eg = null !== (l = eh || eL) && void 0 !== l && l,
        eS = i.useMemo(
            () =>
                (0, b.V7)({
                    skuId: J,
                    isPremium: er,
                    multiMonthPlans: ex ? ep : [],
                    currentSubscription: X,
                    defaultPlanId: et
                }),
            [J, er, ep, X, ex, et]
        ),
        ey = eL && eS.includes(R.Xh.PREMIUM_MONTH_TIER_2) ? R.Xh.PREMIUM_MONTH_TIER_2 : eS[0],
        eE = (0, o.e7)([S.Z], () => S.Z.get(ey)),
        eb = [
            {
                planId: null == eE ? void 0 : eE.id,
                quantity: 1
            }
        ],
        [eN, eI] = i.useState(eg),
        [eP, eM] = (0, u.ED)({
            items: eb,
            renewal: !1,
            preventFetch: !eg,
            applyEntitlements: !0,
            trialId: Y,
            paymentSourceId: en.paymentSourceId,
            currency: en.currency
        });
    i.useEffect(() => {
        eg && eI((null == eP ? void 0 : eP.subscriptionPeriodEnd) == null);
    }, [eP, eg]),
        (0, C.Z)(
            'Payment Modal Plan Select Step',
            eN,
            5,
            {
                proratedInvoicePreview: eP,
                proratedInvoiceError: eM,
                isEligibleForOffer: eg
            },
            { tags: { app_context: 'billing' } }
        );
    let eT = null !== (H = null == eM ? void 0 : eM.message) && void 0 !== H ? H : F.NW.string(F.t.R0RpRU),
        ev = eg && null == eM,
        eZ = eg && null != eM,
        eO = ev && null == X && !!eg && (null == eP ? void 0 : eP.subscriptionPeriodEnd) == null,
        ew = !ei && (null == eE ? void 0 : eE.skuId) === R.Si.TIER_2 && (null == ef ? void 0 : ef.referrer_id) != null,
        ek = null;
    return ((ek = null != ea ? ea : ew ? (0, r.jsx)(m.Z, {}) : (0, r.jsx)(j.Z, {})), eO)
        ? (0, r.jsx)(v.Z, {})
        : (s()(null != ee, 'Step should be set'),
          s()(eS.length > 0, 'Premium plan options should be set'),
          (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(w.P, { giftMessage: es }),
                  !(ei && (0, y.pO)(el)) && (0, r.jsx)(T.Z, { isEligibleForTrial: eh }),
                  (0, r.jsxs)(Z.C3, {
                      children: [
                          ev && (0, r.jsx)('hr', { className: B.planSelectSeparatorUpper }),
                          ek,
                          (0, r.jsx)(U.Z, {}),
                          (0, r.jsx)(k.Z, {}),
                          eZ
                              ? (0, r.jsx)(a.kzN, { children: eT })
                              : (0, r.jsx)(L.O, {
                                    planOptions: eS,
                                    eligibleForMultiMonthPlans: ex,
                                    referralTrialOfferId: z,
                                    selectedPlanId: null == $ ? void 0 : $.id,
                                    subscriptionPeriodEnd: null == eP ? void 0 : eP.subscriptionPeriodEnd,
                                    discountInvoiceItems: eL ? (null == eP ? void 0 : eP.invoiceItems) : void 0,
                                    useCompactGiftComponents: ec,
                                    handleClose: K
                                }),
                          ev &&
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)('hr', { className: B.planSelectSeparatorLower }),
                                      (0, r.jsx)(a.Text, {
                                          variant: 'text-xs/normal',
                                          children: F.NW.format(F.t.BHtnqK, { link: E.Z.getArticleURL(A.BhN.PREMIUM_DETAILS_CANCEL_SUB) })
                                      })
                                  ]
                              })
                      ]
                  }),
                  (0, r.jsxs)(Z.O3, {
                      children: [
                          ec && (0, r.jsx)(x.c, {}),
                          (0, r.jsx)(a.mzw, {
                              justify: d.Z.Justify.BETWEEN,
                              align: d.Z.Align.CENTER,
                              children: (0, r.jsx)(L.y, {
                                  onStepChange: W,
                                  onBackClick: () => W(P.h8.SKU_SELECT),
                                  showBackButton: null == G && null == D,
                                  planOptions: eS,
                                  shouldRenderUpdatedPaymentModal: ev,
                                  isTrial: eh
                              })
                          })
                      ]
                  })
              ]
          }));
}
