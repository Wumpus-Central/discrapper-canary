"use strict";
n.d(t, { X: () => v });
var i = n(627968),
    r = n(64700),
    s = n(284009),
    a = n.n(s),
    o = n(834730),
    l = n(17928),
    u = n(854354),
    c = n(872452),
    d = n(650170),
    _ = n(986883),
    h = n(410516),
    f = n(186223),
    p = n(361597),
    E = n(736339),
    m = n(773669),
    g = n(97352),
    A = n(252424),
    I = n(428262),
    T = n(580630),
    S = n(202541),
    y = n(375708),
    C = n(327105),
    N = n(556208);
function v(e) {
    let {
            selectedPlanId: t,
            priceOptions: n,
            planOptions: s,
            subscriptionPeriodEnd: v,
            showPlanStatusSubText: R,
            disabled: O = !1,
            isInPlanSelectStep: b,
            headingSubText: D,
            planPricesLoading: L = !1,
        } = e,
        {
            selectedPlan: w,
            selectedPlanPrice: M,
            isPrepaid: P,
            isPlansEligibleForDiscount: x,
            shouldShowHRKEuroWarning: k,
            shouldShowTotalInSubscriptionFlow: U,
            shouldShowTrialOrDiscountLayout: G,
            userTrialOffer: F,
            trialPeriodCopy: V,
            isEligibleForTrial: B,
            isEligibleForBOGOPromotion: j,
            premiumSubscriptionPlan: H,
            thePriceOptions: Y,
            skuId: W,
        } = (0, p.RO)({ selectedPlanId: t, priceOptions: n, planOptions: s, subscriptionPeriodEnd: v, showTotal: b }),
        { shouldShowPremiumSwitchPlanSelectText: K, premiumSwitchPlanSelectText: $ } = r.useMemo(() => {
            let e = (0, p.U_)(H, { isEligibleForBOGOPromotion: j });
            return {
                shouldShowPremiumSwitchPlanSelectText: e,
                premiumSwitchPlanSelectText: e ? (0, p.yq)(H, W) : null,
            };
        }, [H, j, W]),
        z = r.useMemo(
            () => (b && B ? (0, p.Ct)(F, { subscriptionPeriodEnd: v, trialPeriodCopy: V }) : D),
            [b, B, F, v, V, D],
        ),
        q = r.useMemo(() => (s.length > 0 ? S.hd[s[0]].premiumType : void 0), [s]),
        { setSelectedPlanId: Z } = (0, d.t4)((e) => ({ setSelectedPlanId: e.setSelectedPlanId })),
        X = r.useCallback(
            (e) => {
                Z(e.value);
            },
            [Z],
        ),
        Q = (function (e, t) {
            let {
                    disabled: n,
                    planPricesLoading: i,
                    isEligibleForDiscount: s,
                    priceOptions: o,
                    isEligibleForTrial: c,
                    isEligibleForBOGOPromotion: N,
                    showPlanStatusSubText: v,
                    isInPlanSelectStep: R,
                } = t,
                {
                    currentPremiumSubscriptionForCheckout: O,
                    isGift: b,
                    discountInfo: D,
                } = (0, d.t4)((e) => ({
                    currentPremiumSubscriptionForCheckout: e.isGift ? null : e.activeSubscription,
                    isGift: e.isGift,
                    discountInfo: e.premiumDiscountInfo,
                })),
                L = (0, l.bG)([m.default], () => m.default.locale),
                { discountOffer: w, discountAmountOff: M, applicablePlan: P } = D,
                x = (0, _.DQ)({ location: "PremiumUnifiedCheckoutPlanSelect" });
            return r.useMemo(
                () =>
                    e.map((e) => {
                        let t,
                            r,
                            l,
                            { isCurrentPlan: d, disabled: m } = (0, p.cD)(O, e),
                            D = g.A.get(e);
                        a()(null != D, "Missing subscriptionPlan");
                        let k = (0, I.L_)({ planId: e, isGift: b, priceOptions: o, subscriptionPlan: D }),
                            U = null != k && null == w,
                            G = (0, I.y8)(e, !1, b, o),
                            F = (0, E.gS)(O, D, {
                                userLocale: L,
                                isEligibleForBOGOPromotion: N,
                                shouldShowSavingsPercent: U,
                                isGift: b,
                                planId: e,
                                savingsPercent: k,
                                priceOptions: o,
                                annualPlanCheckoutCopyTreatment: x,
                                isEligibleForTrial: c,
                            }),
                            V = (0, f.is)({
                                treatment: x,
                                targetSubscriptionPlan: D,
                                isGift: b,
                                shouldShowSavingsPercent: U,
                                isEligibleForTrial: c,
                            }),
                            B = (function (e, t) {
                                let { isEligibleForTrial: n } = t;
                                return n
                                    ? y.intl.formatToPlainString(y.t.hXcaLT, {
                                          price: (0, T.$g)(0, e.currency, {
                                              minimumFractionDigits: 0,
                                              maximumFractionDigits: 0,
                                          }),
                                      })
                                    : (0, T.$g)(e.amount, e.currency);
                            })(G, { isEligibleForTrial: c }),
                            j = B,
                            H = s && null != P && e === P ? M : null;
                        if (
                            (null != w &&
                                !c &&
                                ((0, h.p2)(w)
                                    ? D.interval === S.WT.YEAR
                                        ? (t = y.intl.format(C.default.ODKoJd, { percent: k ?? "" }))
                                        : D.interval === S.WT.MONTH &&
                                          (null != H &&
                                              (j = y.intl.format(y.t.hXcaLT, {
                                                  price: (0, T.$g)(G.amount - H, G.currency),
                                              })),
                                          (t = y.intl.format(C.default.JsSin7, {
                                              priceRate: (0, T.CE)(B, D.interval, D.intervalCount),
                                              intervalCount: w.getFullIntervalCount(),
                                          })))
                                    : (0, h.hm)(w) &&
                                      D.interval === S.WT.YEAR &&
                                      null != H &&
                                      ((j = y.intl.format(y.t.hXcaLT, { price: (0, T.$g)(G.amount - H, G.currency) })),
                                      (r = B),
                                      (t = y.intl.format(y.t.VZ8Tvh, { regularPrice: B })),
                                      (l = y.intl.formatToPlainString(C.default.nsG1jw, {
                                          savingsText: (0, A.l9)(L, parseInt(w.discount.amount) / 100),
                                      })))),
                            v &&
                                (R && c
                                    ? (t = (0, E.O7)(D, G))
                                    : d
                                      ? (t = y.intl.string(y.t.ymSxhy))
                                      : "string" != typeof F || V || (t = F)),
                            V && x === _.qS.AMOUNT_OFF_WITH_MONTHLY_RATE && !d)
                        ) {
                            let e = (0, f.cg)(D, b, o);
                            null != e && (t = e);
                        }
                        let Y = (function (e) {
                            let { promoTextOverride: t, overrideBadgeText: n, defaultValue: i } = e;
                            return t ?? n ?? i;
                        })({
                            promoTextOverride: l,
                            overrideBadgeText: null != F && "object" == typeof F ? (F.type, F.text) : null,
                            defaultValue: (0, u.Nc)({
                                subscriptionPlan: D,
                                userLocale: L,
                                discountOffer: w,
                                yearlyPercentSavings: k,
                                shouldHideYearlySavingsBadge: null != O || null != w,
                            }),
                        });
                        return {
                            id: e,
                            value: e,
                            primaryText: (0, u.YR)(D.interval, D.intervalCount, !0),
                            subText: i ? y.intl.string(y.t.ZTNur7) : j,
                            subTextStrikethrough: i ? null : r,
                            secondarySubText: i ? null : t,
                            badgeText: i ? null : Y,
                            isDisabled: m || n,
                        };
                    }),
                [i, e, s, o, c, N, v, R, O, M, P, w, b, L, n, x],
            );
        })(s, {
            disabled: O,
            planPricesLoading: L,
            isEligibleForDiscount: x,
            priceOptions: Y,
            isEligibleForTrial: B,
            isEligibleForBOGOPromotion: j,
            showPlanStatusSubText: R,
            isInPlanSelectStep: b,
        });
    return null == q
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  K &&
                      (0, i.jsx)(o.E, { variant: "text-md/medium", color: "text-subtle", className: N.S, children: $ }),
                  (0, i.jsx)(c.me, {
                      headingComponent: (0, i.jsx)(c.ec, { size: "sm", color: "text-strong", premiumType: q }),
                      headingSubText: z,
                      planRadioOptions: Q,
                      value: w?.id ?? "",
                      onChange: X,
                  }),
                  b
                      ? (0, p.LR)({
                            selectedPlan: w,
                            selectedPlanPrice: M,
                            isPrepaid: P,
                            shouldShowHRKEuroWarning: k,
                            shouldShowTrialOrDiscountLayout: G,
                            showTotal: b,
                            shouldShowTotalInSubscriptionFlow: U,
                            previewTotalSectionClassName: N.$,
                        })
                      : null,
              ],
          });
}
