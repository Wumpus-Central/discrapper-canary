"use strict";
n.d(t, {
    U_: () => J,
    yq: () => ee,
    LR: () => eu,
    $p: () => ec,
    cD: () => es,
    O8: () => et,
    Ct: () => eo,
    RO: () => en,
});
var i = n(627968),
    r = n(64700),
    s = n(284009),
    a = n.n(s),
    o = n(17928),
    l = n(785007),
    u = n(331322),
    c = n(534514),
    d = n(834730),
    _ = n(726656),
    h = n(463376),
    f = n(558620),
    p = n(211159),
    E = n(34188),
    m = n(661531),
    g = n(939249),
    A = n(398590),
    I = n(793574),
    T = n(688810),
    S = n(85829),
    y = n(663066),
    C = n(976860),
    N = n(662388),
    v = n(652215),
    R = n(375708),
    O = n(456508);
let b = function (e) {
    let { onClose: t } = e,
        { analyticsLocations: n } = (0, T.Ay)();
    function r() {
        t(),
            (0, C.pX)(v.BVt.COLLECTIBLES_SHOP),
            (0, N.Cz)({ analyticsSource: I.A.PREMIUM_PAYMENT_MODAL, analyticsLocations: n }),
            (0, A.jH)(),
            (0, y.dF)(S.Zt);
    }
    return (0, i.jsxs)("div", {
        className: O.kL,
        children: [
            (0, i.jsx)("div", {
                className: O.Wk,
                children: (0, i.jsx)(E.U, { size: "custom", width: 20, height: 20, color: m.A.colors.ICON_DEFAULT }),
            }),
            (0, i.jsx)(d.E, {
                variant: "text-sm/normal",
                children: R.intl.format(R.t.twSHte, {
                    checkItOut: (e) => (0, i.jsx)(g.D, { className: O.nf, onClick: r, children: e }),
                }),
            }),
        ],
    });
};
var D = n(937008),
    L = n(222707),
    w = n(561794),
    M = n(97352),
    P = n(45938),
    x = n(975571),
    k = n(428262),
    U = n(580630),
    G = n(960851),
    F = n(881489),
    V = n(380619),
    B = n(477421),
    j = n(410516),
    H = n(735164),
    Y = n(363476),
    W = n(531506),
    K = n(871181),
    $ = n(318007),
    z = n(736339),
    q = n(285719),
    Z = n(788868);
n(26279);
var X = n(818348),
    Q = n(345138);
function J(e, t) {
    let { isEligibleForBOGOPromotion: n } = t;
    return null != e && !n;
}
function ee(e, t) {
    let n = R.intl.string(R.t.BYa62u),
        i = R.intl.string(R.t.CDa6Dq),
        r = (() => {
            switch (e.interval) {
                case Z.WT.YEAR:
                    return n;
                case Z.WT.MONTH:
                default:
                    return i;
            }
        })(),
        s = e.skuId;
    switch (t) {
        case Z.pe.TIER_0:
            switch (s) {
                case Z.pe.TIER_1:
                    return R.intl.string(R.t.q6mxDS);
                case Z.pe.TIER_2:
                    return R.intl.string(R.t.seZVS0);
                default:
                    return r;
            }
        case Z.pe.TIER_1:
            switch (s) {
                case Z.pe.TIER_0:
                    return R.intl.string(R.t["7+u2zg"]);
                case Z.pe.TIER_2:
                    return R.intl.string(R.t.NG2qcc);
                default:
                    return r;
            }
        case Z.pe.TIER_2:
            switch (s) {
                case Z.pe.TIER_0:
                case Z.pe.TIER_1:
                    return R.intl.string(R.t["eB0/w9"]);
                case Z.pe.TIER_2:
                    return e.interval === Z.WT.MONTH
                        ? R.intl.formatToPlainString(R.t.RqUv86, { numFreeGuildSubscriptions: Z.M4 })
                        : r;
                default:
                    return r;
            }
        default:
            return r;
    }
}
function et() {
    let { userTrialOffer: e } = (0, h.i)(),
        t = e?.subscription_trial,
        { daysCount: n, copy: i } = r.useMemo(
            () =>
                t?.interval === Z.WT.DAY
                    ? t?.interval_count > 7
                        ? { daysCount: 14, copy: R.intl.string(R.t.Z1V2cs) }
                        : { daysCount: 7, copy: R.intl.string(R.t.MI1rHs) }
                    : { daysCount: 30, copy: R.intl.string(R.t["+S5lrV"]) },
            [t],
        );
    return { daysCount: n, copy: i, userTrialOffer: e };
}
function en(e) {
    let { selectedPlanId: t, priceOptions: n, planOptions: i, subscriptionPeriodEnd: s, showTotal: u } = e,
        {
            selectedSkuId: c,
            setSelectedPlanId: d,
            checkoutPriceOptions: _,
            activeSubscription: E,
        } = (0, p.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            checkoutPriceOptions: e.checkoutPriceOptions,
            activeSubscription: e.activeSubscription,
        })),
        { userTrialOffer: m, isEligibleForTrial: g, discountOffer: A } = (0, h.i)(),
        I = (0, j.YJ)(A),
        {
            isGift: T,
            giftRecipient: S,
            selectedGiftStyle: y,
            customGiftMessage: C,
            setCustomGiftMessage: N,
            claimableRewards: v,
            setSelectedGiftingPromotionReward: R,
        } = (0, D.Pv)(),
        O = (0, f.A)(),
        b = (0, V.kz)(O, T && (0, P.Ik)(S), v),
        L = (0, w.tA)({ giftRecipient: S, isGift: T });
    a()(void 0 !== E, "should not be undefined");
    let [x, U] = (0, o.yK)([M.A], () => [null != E ? M.A.get(E.planId) : null, null != t ? M.A.get(t) : null]),
        F = m?.subscription_trial,
        H = (0, G.cg)(),
        Y = U ?? O,
        W = n ?? _;
    a()(null != W, "Price option has to be set");
    let K = A?.discount?.planIds,
        $ = null != A && i.some((e) => K?.includes(e)) && null != A.discount,
        z = null != I && i.includes(I) ? (0, k.y8)(I, !1, T, W) : void 0,
        q = Y?.id != null && i.includes(Y.id);
    r.useEffect(() => {
        if (!q) {
            let e = !T && null != I && i.includes(I) ? I : null;
            if (null == x || T) d(e ?? i[0]);
            else if (null != x) {
                let e = i.find((e) => e !== x.id);
                null != e && d(e);
            }
        }
    }, [q, T, i, x, d, I]),
        r.useEffect(() => {
            b && null != v && v.length > 0 && R(v[0]);
        }, [v, R, b]);
    let { ref: Z, ...Q } = (0, l._u)(),
        J = Y?.id != null ? (0, k.y8)(Y.id, !1, T, W) : void 0,
        { ipCountryCode: ee } = (0, B.A)(),
        en = "HR" === ee && null != J && J.currency === X.Yr.EUR,
        ei = (0, k.J$)(W.paymentSourceId),
        er = !T && ($ || (null != F && g && null != s)),
        { copy: es } = et();
    return {
        skuId: c,
        selectedPlan: Y,
        selectedPlanPrice: J,
        premiumSubscriptionPlan: x,
        premiumSubscription: E,
        thePriceOptions: W,
        hasSeenCollectiblesInSkuSelect: L,
        shouldShowTrialOrDiscountLayout: er,
        shouldShowHRKEuroWarning: en,
        shouldShowTotalInSubscriptionFlow: !g && !$ && q && u,
        canContinue: q,
        isPrepaid: ei,
        radioGroupRef: Z,
        radioGroupProps: Q,
        isGift: T,
        giftRecipient: S,
        customGiftMessage: C,
        setCustomGiftMessage: N,
        selectedGiftStyle: y,
        isEligibleForBOGOPromotion: H,
        isEligibleForTrial: g,
        userTrialOffer: m,
        trialPeriodCopy: es,
        isPlansEligibleForDiscount: $,
        discountedPlanRegularPrice: z,
    };
}
function ei(e) {
    let { isPrepaid: t, selectedPlan: n, selectedPlanPrice: r, intervalType: s, className: a } = e;
    return (0, i.jsxs)("div", {
        className: a,
        children: [
            (0, i.jsx)("div", { className: Q.T }),
            (0, i.jsx)(H.Sd, {
                label: R.intl.string(R.t.txajQG),
                value: (0, i.jsx)(Y.A, {
                    price: r.amount,
                    currency: r.currency,
                    intervalType: s,
                    intervalCount: n.intervalCount,
                    isPrepaidPaymentSource: t,
                }),
                className: Q.M3,
            }),
        ],
    });
}
function er(e) {
    let {
        giftRecipient: t,
        customGiftMessage: n,
        setCustomGiftMessage: r,
        selectedGiftStyle: s,
        hasSeenCollectiblesInSkuSelect: a,
        isPrepaid: o,
        canContinue: l,
        selectedPlan: d,
        selectedPlanPrice: _,
        useCompactGiftComponents: h,
        handleClose: f,
        showTotal: p,
        switchPlanSelectComponent: E,
        warningComponent: m,
    } = e;
    function g(e) {
        return (0, i.jsxs)(u.B, {
            gap: 8,
            children: [
                (0, i.jsx)(c.D, {
                    variant: "heading-md/semibold",
                    color: "text-strong",
                    children: R.intl.string(R.t["3E5hXj"]),
                }),
                e,
            ],
        });
    }
    return (0, P.Ik)(t)
        ? (0, i.jsxs)("div", {
              className: Q.mh,
              children: [
                  (0, i.jsx)("div", { className: Q.MU, children: null != s && (0, i.jsx)($.t, {}) }),
                  (0, i.jsxs)("div", {
                      className: Q.Tc,
                      children: [
                          (0, i.jsx)(q.Z, { className: h ? Q.KW : void 0, giftRecipient: t }),
                          (() => {
                              if ((0, P.lo)(t) === P.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != r)
                                  return (0, i.jsx)(K.A, {
                                      className: Q.iX,
                                      innerClassName: Q.pt,
                                      onTextChange: (e) => r(e),
                                      pendingText: n,
                                      currentText: n,
                                  });
                          })(),
                          g(E),
                          m,
                          !a && (0, i.jsx)(b, { onClose: f }),
                      ],
                  }),
              ],
          })
        : (0, i.jsxs)("div", {
              className: Q.Du,
              children: [
                  (0, i.jsx)(q.Z, { className: h ? Q.KW : void 0, giftRecipient: t }),
                  g(E),
                  l &&
                      p &&
                      null != d &&
                      null != _ &&
                      (0, i.jsx)(ei, { selectedPlan: d, selectedPlanPrice: _, intervalType: null, isPrepaid: o }),
                  m,
                  !a && (0, i.jsx)(b, { onClose: f }),
              ],
          });
}
function es(e, t) {
    let n = null != e && e.planId === t,
        i =
            n ||
            (t === Z.gD.PREMIUM_MONTH_TIER_2 &&
                null != e &&
                [Z.gD.PREMIUM_YEAR_TIER_0, Z.gD.PREMIUM_YEAR_TIER_1].includes(e.planId));
    return { isCurrentPlan: n, disabled: i };
}
function ea(e) {
    let {
            isPrepaid: t,
            planOptions: n,
            radioGroupRef: s,
            selectedPlan: a,
            radioGroupProps: o,
            shouldShowTrialOrDiscountLayout: l,
            thePriceOptions: u,
            isPlansEligibleForDiscount: c,
            isEligibleForTrial: d,
        } = e,
        { currentPremiumSubscriptionForCheckout: _ } = (0, p.t4)((e) => ({
            currentPremiumSubscriptionForCheckout: e.isGift ? null : e.activeSubscription,
        })),
        h = r.useMemo(
            () =>
                n.map((n) => {
                    let { isCurrentPlan: r, disabled: s } = es(_, n);
                    return (0, i.jsx)(
                        z.Ay,
                        {
                            planId: n,
                            selected: a?.id === n,
                            isCurrentPlan: r,
                            disabled: e.disabled || s,
                            premiumSubscription: _,
                            isPrepaid: t,
                            priceOptions: u,
                            shouldShowTrialOrDiscountLayout: l,
                            isEligibleForDiscount: c,
                            isEligibleForTrial: d,
                        },
                        n,
                    );
                }),
            [e.disabled, n, a, _, t, u, l, c, d],
        );
    return (0, i.jsx)("div", { ref: s, ...o, children: h });
}
function eo(e, t) {
    let { subscriptionPeriodEnd: n, trialPeriodCopy: i } = t,
        r = e?.trial_id === Z.Dw;
    return null == n
        ? null
        : r
          ? R.intl.format(R.t.nG95hA, { endDate: n })
          : R.intl.format(R.t.s4E7kb, { trialEnd: n, trialPeriod: i });
}
function el(e) {
    let { shouldShowHRKEuroWarning: t, selectedPlanPrice: n } = e;
    return t && null != n
        ? (0, i.jsx)(_.A, {
              message: R.intl.formatToPlainString(R.t["9hnZoK"], {
                  kunaPriceWithCurrency: (0, U.$g)(7.5345 * n.amount, X.Yr.HRK),
              }),
          })
        : null;
}
function eu(e) {
    let {
        selectedPlan: t,
        selectedPlanPrice: n,
        isPrepaid: r,
        shouldShowHRKEuroWarning: s,
        shouldShowTrialOrDiscountLayout: a,
        showTotal: o,
        shouldShowTotalInSubscriptionFlow: l,
        previewTotalSectionClassName: u,
    } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            l &&
                null != t &&
                null != n &&
                (0, i.jsx)(ei, {
                    className: u,
                    selectedPlan: t,
                    selectedPlanPrice: n,
                    intervalType: t.interval,
                    isPrepaid: r,
                }),
            el({ shouldShowHRKEuroWarning: s, selectedPlanPrice: n }),
            !a &&
                o &&
                (0, i.jsx)(_.A, {
                    message: R.intl.format(R.t.Om31w8, {
                        documentationLink: x.A.getArticleURL(v.MVz.LOCALIZED_PRICING),
                    }),
                }),
        ],
    });
}
function ec(e) {
    let {
            disabled: t,
            selectedPlanId: n,
            planGroup: r,
            priceOptions: s,
            planOptions: a,
            subscriptionPeriodEnd: o,
            showTotal: l = !0,
            useCompactGiftComponents: u,
            handleClose: _,
        } = e,
        {
            skuId: h,
            selectedPlan: f,
            premiumSubscription: E,
            premiumSubscriptionPlan: m,
            isEligibleForBOGOPromotion: g,
            isGift: A,
            thePriceOptions: I,
            isEligibleForTrial: T,
            giftRecipient: S,
            customGiftMessage: y,
            setCustomGiftMessage: C,
            selectedGiftStyle: N,
            isPlansEligibleForDiscount: v,
            discountedPlanRegularPrice: O,
            hasSeenCollectiblesInSkuSelect: b,
            userTrialOffer: D,
            shouldShowTrialOrDiscountLayout: w,
            isPrepaid: M,
            radioGroupRef: P,
            radioGroupProps: x,
            selectedPlanPrice: k,
            shouldShowHRKEuroWarning: G,
            shouldShowTotalInSubscriptionFlow: V,
            canContinue: B,
            trialPeriodCopy: j,
        } = en({ selectedPlanId: n, priceOptions: s, planOptions: a, subscriptionPeriodEnd: o, showTotal: l }),
        { discountAmountOff: H, applicablePlan: Y, discountOffer: K } = (0, p.t4)((e) => e.premiumDiscountInfo),
        $ = (0, F.ds)();
    function z() {
        return (0, i.jsx)(ea, {
            disabled: t,
            planOptions: a,
            radioGroupRef: P,
            radioGroupProps: x,
            isGift: A,
            isPrepaid: M,
            premiumSubscription: E,
            selectedPlan: f,
            thePriceOptions: I,
            shouldShowTrialOrDiscountLayout: w,
            isEligibleForTrial: T,
            isPlansEligibleForDiscount: v,
        });
    }
    let { showFractionalPremiumBanner: q, fractionalPremiumInfo: X } = (0, L._V)({
        premiumSubscription: E,
        selectedPlanId: n,
        planGroup: r,
        isGift: A,
        fractionalPremiumInfoArgs: { forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !0 },
    });
    if (A)
        return (0, i.jsx)(er, {
            giftRecipient: S,
            customGiftMessage: y,
            setCustomGiftMessage: C,
            selectedGiftStyle: N,
            hasSeenCollectiblesInSkuSelect: b,
            isPrepaid: M,
            canContinue: B,
            selectedPlan: f,
            selectedPlanPrice: k,
            useCompactGiftComponents: u,
            handleClose: _,
            showTotal: l,
            switchPlanSelectComponent: z(),
            warningComponent: el({ shouldShowHRKEuroWarning: G, selectedPlanPrice: k }),
        });
    let et = !(T && q && !$),
        ei = J(m, { isEligibleForBOGOPromotion: g });
    return (0, i.jsxs)("div", {
        children: [
            q &&
                !$ &&
                (0, i.jsx)(W.vi, {
                    fractionalPremiumInfo: X,
                    enablePremiumBrandRefresh: !0,
                    variant: T ? W.uA.TRIAL : void 0,
                    trialPeriod: T ? j : void 0,
                    trialEnd: T ? o : void 0,
                }),
            ei && !q && (0, i.jsx)("div", { className: Q.G3, children: ee(m, h) }),
            et &&
                ((e, t, r) => {
                    if (!w)
                        return (0, i.jsx)(c.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            className: Q.VZ,
                            children: R.intl.string(R.t.a19jpU),
                        });
                    if (t)
                        return (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(d.E, {
                                    variant: "text-sm/normal",
                                    className: Q.Tz,
                                    children: eo(e, { subscriptionPeriodEnd: o, trialPeriodCopy: j }),
                                }),
                                (0, i.jsx)("hr", { className: Q.RA }),
                            ],
                        });
                    if (r && null != H && null != O && null != Y && n === Y) {
                        let e = f?.interval === Z.WT.YEAR,
                            t = (0, U.$g)(O.amount - H, O.currency),
                            n = (0, U.$g)(O.amount, O.currency);
                        return (0, i.jsxs)("div", {
                            children: [
                                (0, i.jsx)(d.E, {
                                    variant: "text-sm/normal",
                                    className: Q.Tz,
                                    children: e
                                        ? R.intl.format(R.t.ofweWu, {
                                              numYears: K?.discount.userUsageLimit ?? "",
                                              discountedPrice: t,
                                              regularPrice: n,
                                          })
                                        : R.intl.format(R.t["nG7g/E"], {
                                              numMonths: K?.discount.userUsageLimit ?? "",
                                              discountedPrice: t,
                                              regularPrice: n,
                                          }),
                                }),
                                (0, i.jsx)("hr", { className: Q.RA }),
                            ],
                        });
                    }
                })(D, T, v),
            z(),
            eu({
                selectedPlan: f,
                selectedPlanPrice: k,
                isPrepaid: M,
                shouldShowHRKEuroWarning: G,
                shouldShowTrialOrDiscountLayout: w,
                showTotal: l,
                shouldShowTotalInSubscriptionFlow: V,
            }),
        ],
    });
}
