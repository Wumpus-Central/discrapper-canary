var l = n(477900),
    i = n(582128),
    r = n(284009),
    a = n.n(r),
    s = n(118751),
    o = n(855986),
    u = n(834730),
    c = n(854354),
    d = n(677959),
    m = n(516106),
    p = n(511484),
    C = n(387278),
    h = n(814576),
    f = n(813267),
    E = n(773669),
    S = n(97352),
    I = n(722178),
    g = n(580630),
    y = n(682901),
    A = n(792996),
    P = n(379912),
    v = n(820453);
n.d(
    t,
    {},
    {
        X: function (e) {
            let {
                    selectedPlanId: t,
                    priceOptions: n,
                    planOptions: r,
                    subscriptionPeriodEnd: x,
                    showPlanStatusSubText: _,
                    disabled: T = !1,
                    isInPlanSelectStep: b,
                    headingSubText: N,
                    planPricesLoading: j = !1,
                } = e,
                {
                    selectedPlan: R,
                    selectedPlanPrice: O,
                    isPrepaid: M,
                    isPlansEligibleForDiscount: L,
                    shouldShowHRKEuroWarning: k,
                    shouldShowTotalInSubscriptionFlow: w,
                    shouldShowTrialOrDiscountLayout: D,
                    userTrialOffer: U,
                    trialPeriodCopy: G,
                    isEligibleForTrial: F,
                    isEligibleForBOGOPromotion: B,
                    premiumSubscriptionPlan: H,
                    thePriceOptions: W,
                    skuId: V,
                } = (0, h.RO)({
                    selectedPlanId: t,
                    priceOptions: n,
                    planOptions: r,
                    subscriptionPeriodEnd: x,
                    showTotal: b,
                }),
                { shouldShowPremiumSwitchPlanSelectText: Y, premiumSwitchPlanSelectText: K } = i.useMemo(() => {
                    let e = (0, h.U_)(H, { isEligibleForBOGOPromotion: B });
                    return {
                        shouldShowPremiumSwitchPlanSelectText: e,
                        premiumSwitchPlanSelectText: e ? (0, h.yq)(H, V) : null,
                    };
                }, [H, B, V]),
                Z = i.useMemo(
                    () => (b && F ? (0, h.Ct)(U, { subscriptionPeriodEnd: x, trialPeriodCopy: G }) : N),
                    [b, F, U, x, G, N],
                ),
                q = i.useMemo(() => (r.length > 0 ? y.hd[r[0]].premiumType : void 0), [r]),
                { setSelectedPlanId: z } = (0, m.t4)((e) => ({ setSelectedPlanId: e.setSelectedPlanId })),
                $ = i.useCallback(
                    (e) => {
                        z(e.value);
                    },
                    [z],
                ),
                Q = (function (e, t) {
                    let {
                            disabled: n,
                            planPricesLoading: l,
                            isEligibleForDiscount: r,
                            priceOptions: u,
                            isEligibleForTrial: d,
                            isEligibleForBOGOPromotion: v,
                            showPlanStatusSubText: x,
                            isInPlanSelectStep: _,
                        } = t,
                        {
                            currentPremiumSubscriptionForCheckout: T,
                            isGift: b,
                            discountInfo: N,
                        } = (0, m.t4)((e) => ({
                            currentPremiumSubscriptionForCheckout: e.isGift ? null : e.activeSubscription,
                            isGift: e.isGift,
                            discountInfo: e.premiumDiscountInfo,
                        })),
                        j = (0, o.bG)([E.default], () => E.default.locale),
                        { discountOffer: R, discountAmountOff: O, applicablePlan: M } = N;
                    return i.useMemo(
                        () =>
                            e.map((e) => {
                                let t,
                                    i,
                                    o,
                                    { isCurrentPlan: m, disabled: E } = (0, h.cD)(T, e),
                                    N = S.A.get(e);
                                a()(null != N, "Missing subscriptionPlan");
                                let L = (0, I.L_)({ planId: e, isGift: b, priceOptions: u, subscriptionPlan: N }),
                                    k = null != L && null == R,
                                    w = (0, I.y8)(e, !1, b, u),
                                    D = (0, f.gS)(T, N, {
                                        userLocale: j,
                                        isEligibleForBOGOPromotion: v,
                                        shouldShowSavingsPercent: k,
                                        isGift: b,
                                        planId: e,
                                        savingsPercent: L,
                                        priceOptions: u,
                                        isEligibleForTrial: d,
                                    }),
                                    U = (0, C.sR)({
                                        targetSubscriptionPlan: N,
                                        isGift: b,
                                        shouldShowSavingsPercent: k,
                                        isEligibleForTrial: d,
                                    }),
                                    G = (function (e, t) {
                                        let { isEligibleForTrial: n } = t;
                                        return n
                                            ? A.intl.formatToPlainString(A.t.hXcaLT, {
                                                  price: (0, g.$g)(0, e.currency, {
                                                      minimumFractionDigits: 0,
                                                      maximumFractionDigits: 0,
                                                  }),
                                              })
                                            : (0, g.$g)(e.amount, e.currency);
                                    })(w, { isEligibleForTrial: d }),
                                    F = G,
                                    B = r && null != M && e === M ? O : null;
                                if (
                                    (null != R &&
                                        !d &&
                                        ((0, p.p2)(R)
                                            ? N.interval === y.WT.YEAR
                                                ? (t = A.intl.format(P.default.ODKoJd, { percent: L ?? "" }))
                                                : N.interval === y.WT.MONTH &&
                                                  (null != B &&
                                                      (F = A.intl.format(A.t.hXcaLT, {
                                                          price: (0, g.$g)(w.amount - B, w.currency),
                                                      })),
                                                  (t = A.intl.format(P.default.JsSin7, {
                                                      priceRate: (0, g.CE)(G, N.interval, N.intervalCount),
                                                      intervalCount: R.discount.intervalCount,
                                                  })))
                                            : (0, p.hm)(R) &&
                                              N.interval === y.WT.YEAR &&
                                              null != B &&
                                              ((F = A.intl.format(A.t.hXcaLT, {
                                                  price: (0, g.$g)(w.amount - B, w.currency),
                                              })),
                                              (i = G),
                                              (t = A.intl.format(A.t.VZ8Tvh, { regularPrice: G })),
                                              (o = A.intl.formatToPlainString(P.default.nsG1jw, {
                                                  savingsText: (0, s.l9)(j, parseInt(R.discount.amount) / 100),
                                              })))),
                                    x &&
                                        (_ && d
                                            ? (t = (0, f.O7)(N, w))
                                            : m
                                              ? (t = A.intl.string(A.t.ymSxhy))
                                              : "string" != typeof D || U || (t = D)),
                                    U && !m)
                                ) {
                                    let e = (0, C.Cj)(N, b, u);
                                    null != e && (t = e);
                                }
                                let H = (function (e) {
                                    let { promoTextOverride: t, overrideBadgeText: n, defaultValue: l } = e;
                                    return t ?? n ?? l;
                                })({
                                    promoTextOverride: o,
                                    overrideBadgeText: null != D && "object" == typeof D ? (D.type, D.text) : null,
                                    defaultValue: (0, c.Nc)({
                                        subscriptionPlan: N,
                                        userLocale: j,
                                        discountOffer: R,
                                        savingsPercent: L,
                                        shouldHideSavingsBadge: null != T || null != R || v,
                                    }),
                                });
                                return {
                                    id: e,
                                    value: e,
                                    primaryText: (0, c.YR)(N.interval, N.intervalCount, !0),
                                    subText: l ? A.intl.string(A.t.ZTNur7) : F,
                                    subTextStrikethrough: l ? null : i,
                                    secondarySubText: l ? null : t,
                                    badgeText: l ? null : H,
                                    isDisabled: E || n,
                                };
                            }),
                        [l, e, r, u, d, v, x, _, T, O, M, R, b, j, n],
                    );
                })(r, {
                    disabled: T,
                    planPricesLoading: j,
                    isEligibleForDiscount: L,
                    priceOptions: W,
                    isEligibleForTrial: F,
                    isEligibleForBOGOPromotion: B,
                    showPlanStatusSubText: _,
                    isInPlanSelectStep: b,
                });
            return null == q
                ? null
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          Y &&
                              (0, l.jsx)(u.E, {
                                  variant: "body-md/medium",
                                  color: "text-subtle",
                                  className: v.S,
                                  children: K,
                              }),
                          (0, l.jsx)(d.me, {
                              headingComponent: (0, l.jsx)(d.ec, { size: "sm", color: "text-strong", premiumType: q }),
                              headingSubText: Z,
                              planRadioOptions: Q,
                              value: R?.id ?? "",
                              onChange: $,
                          }),
                          b
                              ? (0, h.LR)({
                                    selectedPlan: R,
                                    selectedPlanPrice: O,
                                    isPrepaid: M,
                                    shouldShowHRKEuroWarning: k,
                                    shouldShowTrialOrDiscountLayout: D,
                                    showTotal: b,
                                    shouldShowTotalInSubscriptionFlow: w,
                                    previewTotalSectionClassName: v.$,
                                })
                              : null,
                      ],
                  });
        },
    },
);
