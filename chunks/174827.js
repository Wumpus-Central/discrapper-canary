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
    m = n(642530),
    j = n(381507),
    L = n(314404),
    g = n(594174),
    S = n(509545),
    y = n(669079),
    E = n(63063),
    b = n(74538),
    I = n(987209),
    N = n(563132),
    T = n(409813),
    M = n(107998),
    P = n(51499),
    v = n(456251),
    O = n(614277),
    Z = n(435020),
    w = n(809144),
    k = n(698708),
    A = n(844068),
    U = n(981631),
    R = n(474936),
    F = n(388032),
    B = n(428523);
function H(e) {
    var t, n, l, H;
    let { handleStepChange: W, initialPlanId: G, subscriptionTier: D, trialId: Y, referralTrialOfferId: z, handleClose: K } = e,
        { activeSubscription: X, hasFetchedSubscriptions: V, paymentSourceId: Q, paymentSources: q, selectedSkuId: J, selectedPlan: $, step: ee, defaultPlanId: et, priceOptions: en, isPremium: er } = (0, N.JL)(),
        { isGift: ei, giftRecipient: el, giftMessage: es, claimableRewards: eo } = (0, I.wD)(),
        { paymentModalBanner: ea } = (0, M.zb)(),
        eC = (0, p.a5)($),
        ed = (null == (t = (0, _.Z)()) ? void 0 : t.planSelectionBanner) != null,
        ec = ei && eC && null != eo && eo.length > 0 && ed,
        eu = (0, Z.m)(q, Q),
        { newPlans: ep } = c.ZP.useExperiment({ location: 'd17fd6_3' }, { autoTrackExposure: !1 }),
        e_ = (0, o.e7)([g.default], () => g.default.getCurrentUser()),
        ex = !ei && null != J && J === R.Si.TIER_2 && null != e_ && e_.hasHadPremium() && V && null == X && (0, c.aQ)(eu),
        ef = (0, h.N)(z),
        eh = !ei && null != ef && null != J && R.nG[ef.trial_id].skus.includes(J),
        em = (0, f.Ng)(),
        ej = null == em || null == (n = em.discount) ? void 0 : n.plan_ids.some((e) => R.GP[e].skuId === J),
        eL = !ei && null != em && null != J && ej,
        eg = null != (l = eh || eL) && l,
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
        [eI, eN] = i.useState(eg),
        [eT, eM] = (0, u.ED)({
            items: eb,
            renewal: !1,
            preventFetch: !eg,
            applyEntitlements: !0,
            trialId: Y,
            paymentSourceId: en.paymentSourceId,
            currency: en.currency
        });
    i.useEffect(() => {
        eg && eN((null == eT ? void 0 : eT.subscriptionPeriodEnd) == null);
    }, [eT, eg]),
        (0, C.Z)(
            'Payment Modal Plan Select Step',
            eI,
            5,
            {
                proratedInvoicePreview: eT,
                proratedInvoiceError: eM,
                isEligibleForOffer: eg
            },
            { tags: { app_context: 'billing' } }
        );
    let eP = null != (H = null == eM ? void 0 : eM.message) ? H : F.NW.string(F.t.R0RpRU),
        ev = eg && null == eM,
        eO = eg && null != eM,
        eZ = ev && null == X && !!eg && (null == eT ? void 0 : eT.subscriptionPeriodEnd) == null,
        ew = !ei && (null == eE ? void 0 : eE.skuId) === R.Si.TIER_2 && (null == ef ? void 0 : ef.referrer_id) != null,
        ek = null;
    return ((ek = null != ea ? ea : ew ? (0, r.jsx)(j.Z, {}) : (0, r.jsx)(m.Z, {})), eZ)
        ? (0, r.jsx)(v.Z, {})
        : (s()(null != ee, 'Step should be set'),
          s()(eS.length > 0, 'Premium plan options should be set'),
          (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(w.P, { giftMessage: es }),
                  !(ei && (0, y.pO)(el)) && (0, r.jsx)(P.Z, { isEligibleForTrial: eh }),
                  (0, r.jsxs)(O.C3, {
                      children: [
                          ev && (0, r.jsx)('hr', { className: B.planSelectSeparatorUpper }),
                          ek,
                          (0, r.jsx)(A.Z, {}),
                          (0, r.jsx)(k.Z, {}),
                          eO
                              ? (0, r.jsx)(a.kzN, { children: eP })
                              : (0, r.jsx)(L.O, {
                                    planOptions: eS,
                                    eligibleForMultiMonthPlans: ex,
                                    referralTrialOfferId: z,
                                    selectedPlanId: null == $ ? void 0 : $.id,
                                    subscriptionPeriodEnd: null == eT ? void 0 : eT.subscriptionPeriodEnd,
                                    discountInvoiceItems: eL ? (null == eT ? void 0 : eT.invoiceItems) : void 0,
                                    useCompactGiftComponents: ec,
                                    handleClose: K
                                }),
                          ev &&
                              (0, r.jsxs)(r.Fragment, {
                                  children: [
                                      (0, r.jsx)('hr', { className: B.planSelectSeparatorLower }),
                                      (0, r.jsx)(a.Text, {
                                          variant: 'text-xs/normal',
                                          children: F.NW.format(F.t.BHtnqK, { link: E.Z.getArticleURL(U.BhN.PREMIUM_DETAILS_CANCEL_SUB) })
                                      })
                                  ]
                              })
                      ]
                  }),
                  (0, r.jsxs)(O.O3, {
                      children: [
                          ec && (0, r.jsx)(x.c, {}),
                          (0, r.jsx)(a.mzw, {
                              justify: d.Z.Justify.BETWEEN,
                              align: d.Z.Align.CENTER,
                              children: (0, r.jsx)(L.y, {
                                  onStepChange: W,
                                  onBackClick: () => W(T.h8.SKU_SELECT),
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
