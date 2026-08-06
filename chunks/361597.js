n.d(t, {
    U_: () => et,
    yq: () => en,
    LR: () => ep,
    $p: () => em,
    cD: () => es,
    O8: () => el,
    Ct: () => eu,
    RO: () => ei,
});
var l = n(477900),
    i = n(582128),
    r = n(284009),
    a = n.n(r),
    s = n(17928),
    o = n(785007),
    u = n(331322),
    c = n(297264),
    d = n(834730),
    p = n(726656),
    m = n(463376),
    C = n(558620),
    h = n(316915),
    f = n(34188),
    E = n(661531),
    A = n(939249),
    S = n(398590),
    y = n(793574),
    P = n(688810),
    I = n(906199),
    g = n(361158),
    _ = n(976860),
    T = n(839534),
    v = n(403689),
    x = n(652215),
    N = n(375708),
    R = n(466772);
let b = function (e) {
    let { onClose: t } = e,
        { analyticsLocations: n } = (0, P.Ay)(),
        { isHidden: i } = v.A.useConfig({ location: "CollectiblesGiftPremiumPlanSelectUpsell" });
    function r() {
        t(),
            (0, _.pX)(x.BVt.COLLECTIBLES_SHOP),
            (0, T.Cz)({ analyticsSource: y.A.PREMIUM_PAYMENT_MODAL, analyticsLocations: n }),
            (0, S.jH)(),
            (0, g.dF)(I.Zt);
    }
    return i
        ? null
        : (0, l.jsxs)("div", {
              className: R.kL,
              children: [
                  (0, l.jsx)("div", {
                      className: R.Wk,
                      children: (0, l.jsx)(f.U, {
                          size: "custom",
                          width: 20,
                          height: 20,
                          color: E.A.colors.ICON_DEFAULT,
                      }),
                  }),
                  (0, l.jsx)(d.E, {
                      variant: "text-sm/normal",
                      children: N.intl.format(N.t.twSHte, {
                          checkItOut: (e) => (0, l.jsx)(A.D, { className: R.nf, onClick: r, children: e }),
                      }),
                  }),
              ],
          });
};
var M = n(951305),
    j = n(222707),
    O = n(561794),
    L = n(97352),
    w = n(45938),
    k = n(975571),
    U = n(158045),
    D = n(580630),
    G = n(881489),
    F = n(774962),
    H = n(380619),
    B = n(477421),
    Y = n(35587),
    W = n(511484),
    V = n(735164),
    K = n(363476),
    Z = n(531506),
    q = n(871181),
    z = n(318007),
    Q = n(135314),
    $ = n(285719),
    J = n(202541);
n(26279);
var X = n(818348),
    ee = n(721162);
function et(e, t) {
    let { isEligibleForBOGOPromotion: n } = t;
    return null != e && !n;
}
function en(e, t) {
    let n = N.intl.string(N.t.BYa62u),
        l = N.intl.string(N.t.CDa6Dq),
        i = (() => {
            switch (e.interval) {
                case J.WT.YEAR:
                    return n;
                case J.WT.MONTH:
                default:
                    return l;
            }
        })(),
        r = e.skuId;
    switch (t) {
        case J.pe.TIER_0:
            switch (r) {
                case J.pe.TIER_1:
                    return N.intl.string(N.t.q6mxDS);
                case J.pe.TIER_2:
                    return N.intl.string(N.t.seZVS0);
                default:
                    return i;
            }
        case J.pe.TIER_1:
            switch (r) {
                case J.pe.TIER_0:
                    return N.intl.string(N.t["7+u2zg"]);
                case J.pe.TIER_2:
                    return N.intl.string(N.t.NG2qcc);
                default:
                    return i;
            }
        case J.pe.TIER_2:
            switch (r) {
                case J.pe.TIER_0:
                case J.pe.TIER_1:
                    return N.intl.string(N.t["eB0/w9"]);
                case J.pe.TIER_2:
                    return e.interval === J.WT.MONTH
                        ? N.intl.formatToPlainString(N.t.RqUv86, { numFreeGuildSubscriptions: J.M4 })
                        : i;
                default:
                    return i;
            }
        default:
            return i;
    }
}
function el() {
    let { userTrialOffer: e } = (0, m.i)(),
        t = e?.subscription_trial,
        { daysCount: n, copy: l } = i.useMemo(
            () =>
                t?.interval === J.WT.DAY
                    ? t?.interval_count > 7
                        ? { daysCount: 14, copy: N.intl.string(N.t.Z1V2cs) }
                        : { daysCount: 7, copy: N.intl.string(N.t.MI1rHs) }
                    : { daysCount: 30, copy: N.intl.string(N.t["+S5lrV"]) },
            [t],
        );
    return { daysCount: n, copy: l, userTrialOffer: e };
}
function ei(e) {
    let { selectedPlanId: t, priceOptions: n, planOptions: l, subscriptionPeriodEnd: r, showTotal: u } = e,
        {
            selectedSkuId: c,
            setSelectedPlanId: d,
            checkoutPriceOptions: p,
            activeSubscription: f,
        } = (0, h.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            checkoutPriceOptions: e.checkoutPriceOptions,
            activeSubscription: e.activeSubscription,
        })),
        { userTrialOffer: E, isEligibleForTrial: A, discountOffer: S } = (0, m.i)(),
        y = (0, W.YJ)(S),
        {
            isGift: P,
            giftRecipient: I,
            selectedGiftStyle: g,
            customGiftMessage: _,
            setCustomGiftMessage: T,
            claimableRewards: v,
            setSelectedGiftingPromotionReward: x,
        } = (0, M.Pv)(),
        N = (0, C.A)(),
        R = (0, H.kz)(N, P && (0, w.Ik)(I), v),
        b = (0, O.tA)({ giftRecipient: I, isGift: P });
    a()(void 0 !== f, "should not be undefined");
    let [j, k] = (0, s.yK)([L.A], () => [null != f ? L.A.get(f.planId) : null, null != t ? L.A.get(t) : null]),
        D = E?.subscription_trial,
        G = E?.trial_id === J.Dw,
        F = (0, Y.Sq)() && !G,
        V = k ?? N,
        K = n ?? p;
    a()(null != K, "Price option has to be set");
    let Z = S?.discount?.planIds,
        q = null != S && l.some((e) => Z?.includes(e)) && null != S.discount,
        z = null != y && l.includes(y) ? (0, U.y8)(y, !1, P, K) : void 0,
        Q = null != V ? V.id : void 0,
        $ = null != Q && l.includes(Q);
    i.useEffect(() => {
        if ($) return void d(Q, { shouldUpdateQuantity: !1 });
        let e = !P && null != y && l.includes(y) ? y : null;
        if (null == j || P) d(e ?? l[0]);
        else if (null != j) {
            let e = l.find((e) => e !== j.id);
            null != e && d(e);
        }
    }, [$, P, l, j, d, Q, y]),
        i.useEffect(() => {
            R && null != v && v.length > 0 && x(v[0]);
        }, [v, x, R]);
    let { ref: ee, ...et } = (0, o._u)(),
        en = V?.id != null ? (0, U.y8)(V.id, !1, P, K) : void 0,
        { ipCountryCode: ei } = (0, B.A)(),
        er = "HR" === ei && null != en && en.currency === X.Yr.EUR,
        ea = (0, U.J$)(K.paymentSourceId),
        es = !P && (q || (null != D && A && null != r)),
        { copy: eo } = el();
    return {
        skuId: c,
        selectedPlan: V,
        selectedPlanPrice: en,
        premiumSubscriptionPlan: j,
        premiumSubscription: f,
        thePriceOptions: K,
        hasSeenCollectiblesInSkuSelect: b,
        shouldShowTrialOrDiscountLayout: es,
        shouldShowHRKEuroWarning: er,
        shouldShowTotalInSubscriptionFlow: !A && !q && $ && u,
        canContinue: $,
        isPrepaid: ea,
        radioGroupRef: ee,
        radioGroupProps: et,
        isGift: P,
        giftRecipient: I,
        customGiftMessage: _,
        setCustomGiftMessage: T,
        selectedGiftStyle: g,
        isEligibleForBOGOPromotion: F,
        isEligibleForTrial: A,
        userTrialOffer: E,
        trialPeriodCopy: eo,
        isPlansEligibleForDiscount: q,
        discountedPlanRegularPrice: z,
    };
}
function er(e) {
    let { isPrepaid: t, selectedPlan: n, selectedPlanPrice: i, intervalType: r, className: a } = e;
    return (0, l.jsxs)("div", {
        className: a,
        children: [
            (0, l.jsx)("div", { className: ee.T }),
            (0, l.jsx)(V.Sd, {
                label: N.intl.string(N.t.txajQG),
                value: (0, l.jsx)(K.A, {
                    price: i.amount,
                    currency: i.currency,
                    intervalType: r,
                    intervalCount: n.intervalCount,
                    isPrepaidPaymentSource: t,
                }),
                className: ee.M3,
            }),
        ],
    });
}
function ea(e) {
    let {
        giftRecipient: t,
        customGiftMessage: n,
        setCustomGiftMessage: i,
        selectedGiftStyle: r,
        hasSeenCollectiblesInSkuSelect: a,
        isPrepaid: s,
        canContinue: o,
        selectedPlan: d,
        selectedPlanPrice: p,
        useCompactGiftComponents: m,
        handleClose: C,
        showTotal: h,
        switchPlanSelectComponent: f,
        warningComponent: E,
    } = e;
    function A(e) {
        return (0, l.jsxs)(u.B, {
            gap: 8,
            children: [
                (0, l.jsx)(c.D, {
                    variant: "heading-md/semibold",
                    color: "text-strong",
                    children: N.intl.string(N.t["3E5hXj"]),
                }),
                e,
            ],
        });
    }
    return (0, w.Ik)(t)
        ? (0, l.jsxs)("div", {
              className: ee.mh,
              children: [
                  (0, l.jsx)("div", { className: ee.MU, children: null != r && (0, l.jsx)(z.t, {}) }),
                  (0, l.jsxs)("div", {
                      className: ee.Tc,
                      children: [
                          (0, l.jsx)($.Z, { className: m ? ee.KW : void 0, giftRecipient: t }),
                          (function () {
                              if ((0, w.lo)(t) === w.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != i)
                                  return (0, l.jsx)(q.A, {
                                      className: ee.iX,
                                      innerClassName: ee.pt,
                                      onTextChange: (e) => i(e),
                                      pendingText: n,
                                      currentText: n,
                                  });
                          })(),
                          A(f),
                          E,
                          !a && (0, l.jsx)(b, { onClose: C }),
                      ],
                  }),
              ],
          })
        : (0, l.jsxs)("div", {
              className: ee.Du,
              children: [
                  (0, l.jsx)($.Z, { className: m ? ee.KW : void 0, giftRecipient: t }),
                  A(f),
                  o &&
                      h &&
                      null != d &&
                      null != p &&
                      (0, l.jsx)(er, { selectedPlan: d, selectedPlanPrice: p, intervalType: null, isPrepaid: s }),
                  E,
                  !a && (0, l.jsx)(b, { onClose: C }),
              ],
          });
}
function es(e, t) {
    let n = null != e && e.planId === t,
        l =
            n ||
            (t === J.gD.PREMIUM_MONTH_TIER_2 &&
                null != e &&
                [J.gD.PREMIUM_YEAR_TIER_0, J.gD.PREMIUM_YEAR_TIER_1].includes(e.planId));
    return { isCurrentPlan: n, disabled: l };
}
function eo(e) {
    let {
            isPrepaid: t,
            planOptions: n,
            radioGroupRef: r,
            selectedPlan: a,
            radioGroupProps: s,
            shouldShowTrialOrDiscountLayout: o,
            thePriceOptions: u,
            isPlansEligibleForDiscount: c,
            isEligibleForTrial: d,
        } = e,
        { currentPremiumSubscriptionForCheckout: p } = (0, h.t4)((e) => ({
            currentPremiumSubscriptionForCheckout: e.isGift ? null : e.activeSubscription,
        })),
        m = i.useMemo(
            () =>
                n.map((n) => {
                    let { isCurrentPlan: i, disabled: r } = es(p, n);
                    return (0, l.jsx)(
                        Q.Ay,
                        {
                            planId: n,
                            selected: a?.id === n,
                            isCurrentPlan: i,
                            disabled: e.disabled || r,
                            premiumSubscription: p,
                            isPrepaid: t,
                            priceOptions: u,
                            shouldShowTrialOrDiscountLayout: o,
                            isEligibleForDiscount: c,
                            isEligibleForTrial: d,
                        },
                        n,
                    );
                }),
            [e.disabled, n, a, p, t, u, o, c, d],
        );
    return (0, l.jsx)("div", { ref: r, ...s, children: m });
}
function eu(e, t) {
    let { subscriptionPeriodEnd: n, trialPeriodCopy: l } = t,
        i = e?.trial_id === J.Dw;
    return null == n
        ? null
        : i
          ? N.intl.format(N.t.nG95hA, { endDate: n })
          : N.intl.format(N.t.s4E7kb, { trialEnd: n, trialPeriod: l });
}
function ec(e) {
    let { shouldShowHRKEuroWarning: t, selectedPlanPrice: n } = e;
    return t && null != n
        ? (0, l.jsx)(p.A, {
              message: N.intl.formatToPlainString(N.t["9hnZoK"], {
                  kunaPriceWithCurrency: (0, D.$g)(7.5345 * n.amount, X.Yr.HRK),
              }),
          })
        : null;
}
function ed() {
    let e = (0, F.p)("StatefulUnifiedCheckoutPremiumPlanSelect");
    return (0, l.jsx)(p.A, {
        message: e
            ? N.intl.string(N.t.jHqrJW)
            : N.intl.format(N.t.Om31w8, { documentationLink: k.A.getArticleURL(x.MVz.LOCALIZED_PRICING) }),
    });
}
function ep(e) {
    let {
        selectedPlan: t,
        selectedPlanPrice: n,
        isPrepaid: i,
        shouldShowHRKEuroWarning: r,
        shouldShowTrialOrDiscountLayout: a,
        showTotal: s,
        shouldShowTotalInSubscriptionFlow: o,
        previewTotalSectionClassName: u,
    } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            o &&
                null != t &&
                null != n &&
                (0, l.jsx)(er, {
                    className: u,
                    selectedPlan: t,
                    selectedPlanPrice: n,
                    intervalType: t.interval,
                    isPrepaid: i,
                }),
            ec({ shouldShowHRKEuroWarning: r, selectedPlanPrice: n }),
            !a && s && (0, l.jsx)(ed, {}),
        ],
    });
}
function em(e) {
    let {
            disabled: t,
            selectedPlanId: n,
            planGroup: i,
            priceOptions: r,
            planOptions: a,
            subscriptionPeriodEnd: s,
            showTotal: o = !0,
            useCompactGiftComponents: u,
            handleClose: p,
        } = e,
        {
            skuId: m,
            selectedPlan: C,
            premiumSubscription: f,
            premiumSubscriptionPlan: E,
            isEligibleForBOGOPromotion: A,
            isGift: S,
            thePriceOptions: y,
            isEligibleForTrial: P,
            giftRecipient: I,
            customGiftMessage: g,
            setCustomGiftMessage: _,
            selectedGiftStyle: T,
            isPlansEligibleForDiscount: v,
            discountedPlanRegularPrice: x,
            hasSeenCollectiblesInSkuSelect: R,
            userTrialOffer: b,
            shouldShowTrialOrDiscountLayout: M,
            isPrepaid: O,
            radioGroupRef: L,
            radioGroupProps: w,
            selectedPlanPrice: k,
            shouldShowHRKEuroWarning: U,
            shouldShowTotalInSubscriptionFlow: F,
            canContinue: H,
            trialPeriodCopy: B,
        } = ei({ selectedPlanId: n, priceOptions: r, planOptions: a, subscriptionPeriodEnd: s, showTotal: o }),
        { discountAmountOff: Y, applicablePlan: W, discountOffer: V } = (0, h.t4)((e) => e.premiumDiscountInfo),
        K = (0, G.ds)();
    function q() {
        return (0, l.jsx)(eo, {
            disabled: t,
            planOptions: a,
            radioGroupRef: L,
            radioGroupProps: w,
            isGift: S,
            isPrepaid: O,
            premiumSubscription: f,
            selectedPlan: C,
            thePriceOptions: y,
            shouldShowTrialOrDiscountLayout: M,
            isEligibleForTrial: P,
            isPlansEligibleForDiscount: v,
        });
    }
    let { showFractionalPremiumBanner: z, fractionalPremiumInfo: Q } = (0, j._V)({
        premiumSubscription: f,
        selectedPlanId: n,
        planGroup: i,
        isGift: S,
        fractionalPremiumInfoArgs: { forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !0 },
    });
    if (S)
        return (0, l.jsx)(ea, {
            giftRecipient: I,
            customGiftMessage: g,
            setCustomGiftMessage: _,
            selectedGiftStyle: T,
            hasSeenCollectiblesInSkuSelect: R,
            isPrepaid: O,
            canContinue: H,
            selectedPlan: C,
            selectedPlanPrice: k,
            useCompactGiftComponents: u,
            handleClose: p,
            showTotal: o,
            switchPlanSelectComponent: q(),
            warningComponent: ec({ shouldShowHRKEuroWarning: U, selectedPlanPrice: k }),
        });
    let $ = !(P && z && !K),
        X = et(E, { isEligibleForBOGOPromotion: A });
    return (0, l.jsxs)("div", {
        children: [
            z &&
                !K &&
                (0, l.jsx)(Z.vi, {
                    fractionalPremiumInfo: Q,
                    enablePremiumBrandRefresh: !0,
                    variant: P ? Z.uA.TRIAL : void 0,
                    trialPeriod: P ? B : void 0,
                    trialEnd: P ? s : void 0,
                }),
            X &&
                !z &&
                (0, l.jsx)(d.E, {
                    variant: "text-md/medium",
                    color: "interactive-text-default",
                    className: ee.G3,
                    children: en(E, m),
                }),
            $ &&
                (function (e, t, i) {
                    if (!M)
                        return (0, l.jsx)(c.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            className: ee.VZ,
                            children: N.intl.string(N.t.a19jpU),
                        });
                    if (t)
                        return (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)(d.E, {
                                    variant: "text-sm/normal",
                                    className: ee.Tz,
                                    children: eu(e, { subscriptionPeriodEnd: s, trialPeriodCopy: B }),
                                }),
                                (0, l.jsx)("hr", { className: ee.RA }),
                            ],
                        });
                    if (i && null != Y && null != x && null != W && n === W) {
                        let e = C?.interval === J.WT.YEAR,
                            t = (0, D.$g)(x.amount - Y, x.currency),
                            n = (0, D.$g)(x.amount, x.currency);
                        return (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)(d.E, {
                                    variant: "text-sm/normal",
                                    className: ee.Tz,
                                    children: e
                                        ? N.intl.format(N.t.ofweWu, {
                                              numYears: V?.discount.userUsageLimit ?? "",
                                              discountedPrice: t,
                                              regularPrice: n,
                                          })
                                        : N.intl.format(N.t["nG7g/E"], {
                                              numMonths: V?.discount.userUsageLimit ?? "",
                                              discountedPrice: t,
                                              regularPrice: n,
                                          }),
                                }),
                                (0, l.jsx)("hr", { className: ee.RA }),
                            ],
                        });
                    }
                })(b, P, v),
            q(),
            ep({
                selectedPlan: C,
                selectedPlanPrice: k,
                isPrepaid: O,
                shouldShowHRKEuroWarning: U,
                shouldShowTrialOrDiscountLayout: M,
                showTotal: o,
                shouldShowTotalInSubscriptionFlow: F,
            }),
        ],
    });
}
