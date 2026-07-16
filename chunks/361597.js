n.d(t, {
    U_: () => J,
    yq: () => ee,
    LR: () => eu,
    $p: () => ec,
    cD: () => er,
    O8: () => et,
    Ct: () => es,
    RO: () => en,
});
var l = n(627968),
    i = n(64700),
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
    h = n(6938),
    E = n(34188),
    f = n(661531),
    A = n(939249),
    y = n(398590),
    S = n(793574),
    P = n(688810),
    I = n(63152),
    _ = n(361158),
    T = n(976860),
    g = n(662388),
    x = n(652215),
    v = n(375708),
    N = n(456508);
let M = function (e) {
    let { onClose: t } = e,
        { analyticsLocations: n } = (0, P.Ay)();
    function i() {
        t(),
            (0, T.pX)(x.BVt.COLLECTIBLES_SHOP),
            (0, g.Cz)({ analyticsSource: S.A.PREMIUM_PAYMENT_MODAL, analyticsLocations: n }),
            (0, y.jH)(),
            (0, _.dF)(I.Zt);
    }
    return (0, l.jsxs)("div", {
        className: N.kL,
        children: [
            (0, l.jsx)("div", {
                className: N.Wk,
                children: (0, l.jsx)(E.U, { size: "custom", width: 20, height: 20, color: f.A.colors.ICON_DEFAULT }),
            }),
            (0, l.jsx)(d.E, {
                variant: "text-sm/normal",
                children: v.intl.format(v.t.twSHte, {
                    checkItOut: (e) => (0, l.jsx)(A.D, { className: N.nf, onClick: i, children: e }),
                }),
            }),
        ],
    });
};
var R = n(951305),
    b = n(222707),
    j = n(561794),
    O = n(97352),
    L = n(45938),
    w = n(975571),
    k = n(428262),
    D = n(580630),
    U = n(881489),
    G = n(380619),
    F = n(477421),
    H = n(35587),
    B = n(410516),
    Y = n(735164),
    W = n(363476),
    V = n(531506),
    K = n(871181),
    Z = n(318007),
    q = n(135314),
    z = n(285719),
    Q = n(202541);
n(26279);
var $ = n(818348),
    X = n(345138);
function J(e, t) {
    let { isEligibleForBOGOPromotion: n } = t;
    return null != e && !n;
}
function ee(e, t) {
    let n = v.intl.string(v.t.BYa62u),
        l = v.intl.string(v.t.CDa6Dq),
        i = (() => {
            switch (e.interval) {
                case Q.WT.YEAR:
                    return n;
                case Q.WT.MONTH:
                default:
                    return l;
            }
        })(),
        r = e.skuId;
    switch (t) {
        case Q.pe.TIER_0:
            switch (r) {
                case Q.pe.TIER_1:
                    return v.intl.string(v.t.q6mxDS);
                case Q.pe.TIER_2:
                    return v.intl.string(v.t.seZVS0);
                default:
                    return i;
            }
        case Q.pe.TIER_1:
            switch (r) {
                case Q.pe.TIER_0:
                    return v.intl.string(v.t["7+u2zg"]);
                case Q.pe.TIER_2:
                    return v.intl.string(v.t.NG2qcc);
                default:
                    return i;
            }
        case Q.pe.TIER_2:
            switch (r) {
                case Q.pe.TIER_0:
                case Q.pe.TIER_1:
                    return v.intl.string(v.t["eB0/w9"]);
                case Q.pe.TIER_2:
                    return e.interval === Q.WT.MONTH
                        ? v.intl.formatToPlainString(v.t.RqUv86, { numFreeGuildSubscriptions: Q.M4 })
                        : i;
                default:
                    return i;
            }
        default:
            return i;
    }
}
function et() {
    let { userTrialOffer: e } = (0, m.i)(),
        t = e?.subscription_trial,
        { daysCount: n, copy: l } = i.useMemo(
            () =>
                t?.interval === Q.WT.DAY
                    ? t?.interval_count > 7
                        ? { daysCount: 14, copy: v.intl.string(v.t.Z1V2cs) }
                        : { daysCount: 7, copy: v.intl.string(v.t.MI1rHs) }
                    : { daysCount: 30, copy: v.intl.string(v.t["+S5lrV"]) },
            [t],
        );
    return { daysCount: n, copy: l, userTrialOffer: e };
}
function en(e) {
    let { selectedPlanId: t, priceOptions: n, planOptions: l, subscriptionPeriodEnd: r, showTotal: u } = e,
        {
            selectedSkuId: c,
            setSelectedPlanId: d,
            checkoutPriceOptions: p,
            activeSubscription: E,
        } = (0, h.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            checkoutPriceOptions: e.checkoutPriceOptions,
            activeSubscription: e.activeSubscription,
        })),
        { userTrialOffer: f, isEligibleForTrial: A, discountOffer: y } = (0, m.i)(),
        S = (0, B.YJ)(y),
        {
            isGift: P,
            giftRecipient: I,
            selectedGiftStyle: _,
            customGiftMessage: T,
            setCustomGiftMessage: g,
            claimableRewards: x,
            setSelectedGiftingPromotionReward: v,
        } = (0, R.Pv)(),
        N = (0, C.A)(),
        M = (0, G.kz)(N, P && (0, L.Ik)(I), x),
        b = (0, j.tA)({ giftRecipient: I, isGift: P });
    a()(void 0 !== E, "should not be undefined");
    let [w, D] = (0, s.yK)([O.A], () => [null != E ? O.A.get(E.planId) : null, null != t ? O.A.get(t) : null]),
        U = f?.subscription_trial,
        Y = f?.trial_id === Q.Dw,
        W = (0, H.Sq)() && !Y,
        V = D ?? N,
        K = n ?? p;
    a()(null != K, "Price option has to be set");
    let Z = y?.discount?.planIds,
        q = null != y && l.some((e) => Z?.includes(e)) && null != y.discount,
        z = null != S && l.includes(S) ? (0, k.y8)(S, !1, P, K) : void 0,
        X = V?.id != null && l.includes(V.id);
    i.useEffect(() => {
        if (!X) {
            let e = !P && null != S && l.includes(S) ? S : null;
            if (null == w || P) d(e ?? l[0]);
            else if (null != w) {
                let e = l.find((e) => e !== w.id);
                null != e && d(e);
            }
        }
    }, [X, P, l, w, d, S]),
        i.useEffect(() => {
            M && null != x && x.length > 0 && v(x[0]);
        }, [x, v, M]);
    let { ref: J, ...ee } = (0, o._u)(),
        en = V?.id != null ? (0, k.y8)(V.id, !1, P, K) : void 0,
        { ipCountryCode: el } = (0, F.A)(),
        ei = "HR" === el && null != en && en.currency === $.Yr.EUR,
        er = (0, k.J$)(K.paymentSourceId),
        ea = !P && (q || (null != U && A && null != r)),
        { copy: es } = et();
    return {
        skuId: c,
        selectedPlan: V,
        selectedPlanPrice: en,
        premiumSubscriptionPlan: w,
        premiumSubscription: E,
        thePriceOptions: K,
        hasSeenCollectiblesInSkuSelect: b,
        shouldShowTrialOrDiscountLayout: ea,
        shouldShowHRKEuroWarning: ei,
        shouldShowTotalInSubscriptionFlow: !A && !q && X && u,
        canContinue: X,
        isPrepaid: er,
        radioGroupRef: J,
        radioGroupProps: ee,
        isGift: P,
        giftRecipient: I,
        customGiftMessage: T,
        setCustomGiftMessage: g,
        selectedGiftStyle: _,
        isEligibleForBOGOPromotion: W,
        isEligibleForTrial: A,
        userTrialOffer: f,
        trialPeriodCopy: es,
        isPlansEligibleForDiscount: q,
        discountedPlanRegularPrice: z,
    };
}
function el(e) {
    let { isPrepaid: t, selectedPlan: n, selectedPlanPrice: i, intervalType: r, className: a } = e;
    return (0, l.jsxs)("div", {
        className: a,
        children: [
            (0, l.jsx)("div", { className: X.T }),
            (0, l.jsx)(Y.Sd, {
                label: v.intl.string(v.t.txajQG),
                value: (0, l.jsx)(W.A, {
                    price: i.amount,
                    currency: i.currency,
                    intervalType: r,
                    intervalCount: n.intervalCount,
                    isPrepaidPaymentSource: t,
                }),
                className: X.M3,
            }),
        ],
    });
}
function ei(e) {
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
        switchPlanSelectComponent: E,
        warningComponent: f,
    } = e;
    function A(e) {
        return (0, l.jsxs)(u.B, {
            gap: 8,
            children: [
                (0, l.jsx)(c.D, {
                    variant: "heading-md/semibold",
                    color: "text-strong",
                    children: v.intl.string(v.t["3E5hXj"]),
                }),
                e,
            ],
        });
    }
    return (0, L.Ik)(t)
        ? (0, l.jsxs)("div", {
              className: X.mh,
              children: [
                  (0, l.jsx)("div", { className: X.MU, children: null != r && (0, l.jsx)(Z.t, {}) }),
                  (0, l.jsxs)("div", {
                      className: X.Tc,
                      children: [
                          (0, l.jsx)(z.Z, { className: m ? X.KW : void 0, giftRecipient: t }),
                          (function () {
                              if ((0, L.lo)(t) === L.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != i)
                                  return (0, l.jsx)(K.A, {
                                      className: X.iX,
                                      innerClassName: X.pt,
                                      onTextChange: (e) => i(e),
                                      pendingText: n,
                                      currentText: n,
                                  });
                          })(),
                          A(E),
                          f,
                          !a && (0, l.jsx)(M, { onClose: C }),
                      ],
                  }),
              ],
          })
        : (0, l.jsxs)("div", {
              className: X.Du,
              children: [
                  (0, l.jsx)(z.Z, { className: m ? X.KW : void 0, giftRecipient: t }),
                  A(E),
                  o &&
                      h &&
                      null != d &&
                      null != p &&
                      (0, l.jsx)(el, { selectedPlan: d, selectedPlanPrice: p, intervalType: null, isPrepaid: s }),
                  f,
                  !a && (0, l.jsx)(M, { onClose: C }),
              ],
          });
}
function er(e, t) {
    let n = null != e && e.planId === t,
        l =
            n ||
            (t === Q.gD.PREMIUM_MONTH_TIER_2 &&
                null != e &&
                [Q.gD.PREMIUM_YEAR_TIER_0, Q.gD.PREMIUM_YEAR_TIER_1].includes(e.planId));
    return { isCurrentPlan: n, disabled: l };
}
function ea(e) {
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
                    let { isCurrentPlan: i, disabled: r } = er(p, n);
                    return (0, l.jsx)(
                        q.Ay,
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
function es(e, t) {
    let { subscriptionPeriodEnd: n, trialPeriodCopy: l } = t,
        i = e?.trial_id === Q.Dw;
    return null == n
        ? null
        : i
          ? v.intl.format(v.t.nG95hA, { endDate: n })
          : v.intl.format(v.t.s4E7kb, { trialEnd: n, trialPeriod: l });
}
function eo(e) {
    let { shouldShowHRKEuroWarning: t, selectedPlanPrice: n } = e;
    return t && null != n
        ? (0, l.jsx)(p.A, {
              message: v.intl.formatToPlainString(v.t["9hnZoK"], {
                  kunaPriceWithCurrency: (0, D.$g)(7.5345 * n.amount, $.Yr.HRK),
              }),
          })
        : null;
}
function eu(e) {
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
                (0, l.jsx)(el, {
                    className: u,
                    selectedPlan: t,
                    selectedPlanPrice: n,
                    intervalType: t.interval,
                    isPrepaid: i,
                }),
            eo({ shouldShowHRKEuroWarning: r, selectedPlanPrice: n }),
            !a &&
                s &&
                (0, l.jsx)(p.A, {
                    message: v.intl.format(v.t.Om31w8, {
                        documentationLink: w.A.getArticleURL(x.MVz.LOCALIZED_PRICING),
                    }),
                }),
        ],
    });
}
function ec(e) {
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
            premiumSubscription: E,
            premiumSubscriptionPlan: f,
            isEligibleForBOGOPromotion: A,
            isGift: y,
            thePriceOptions: S,
            isEligibleForTrial: P,
            giftRecipient: I,
            customGiftMessage: _,
            setCustomGiftMessage: T,
            selectedGiftStyle: g,
            isPlansEligibleForDiscount: x,
            discountedPlanRegularPrice: N,
            hasSeenCollectiblesInSkuSelect: M,
            userTrialOffer: R,
            shouldShowTrialOrDiscountLayout: j,
            isPrepaid: O,
            radioGroupRef: L,
            radioGroupProps: w,
            selectedPlanPrice: k,
            shouldShowHRKEuroWarning: G,
            shouldShowTotalInSubscriptionFlow: F,
            canContinue: H,
            trialPeriodCopy: B,
        } = en({ selectedPlanId: n, priceOptions: r, planOptions: a, subscriptionPeriodEnd: s, showTotal: o }),
        { discountAmountOff: Y, applicablePlan: W, discountOffer: K } = (0, h.t4)((e) => e.premiumDiscountInfo),
        Z = (0, U.ds)();
    function q() {
        return (0, l.jsx)(ea, {
            disabled: t,
            planOptions: a,
            radioGroupRef: L,
            radioGroupProps: w,
            isGift: y,
            isPrepaid: O,
            premiumSubscription: E,
            selectedPlan: C,
            thePriceOptions: S,
            shouldShowTrialOrDiscountLayout: j,
            isEligibleForTrial: P,
            isPlansEligibleForDiscount: x,
        });
    }
    let { showFractionalPremiumBanner: z, fractionalPremiumInfo: $ } = (0, b._V)({
        premiumSubscription: E,
        selectedPlanId: n,
        planGroup: i,
        isGift: y,
        fractionalPremiumInfoArgs: { forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !0 },
    });
    if (y)
        return (0, l.jsx)(ei, {
            giftRecipient: I,
            customGiftMessage: _,
            setCustomGiftMessage: T,
            selectedGiftStyle: g,
            hasSeenCollectiblesInSkuSelect: M,
            isPrepaid: O,
            canContinue: H,
            selectedPlan: C,
            selectedPlanPrice: k,
            useCompactGiftComponents: u,
            handleClose: p,
            showTotal: o,
            switchPlanSelectComponent: q(),
            warningComponent: eo({ shouldShowHRKEuroWarning: G, selectedPlanPrice: k }),
        });
    let et = !(P && z && !Z),
        el = J(f, { isEligibleForBOGOPromotion: A });
    return (0, l.jsxs)("div", {
        children: [
            z &&
                !Z &&
                (0, l.jsx)(V.vi, {
                    fractionalPremiumInfo: $,
                    enablePremiumBrandRefresh: !0,
                    variant: P ? V.uA.TRIAL : void 0,
                    trialPeriod: P ? B : void 0,
                    trialEnd: P ? s : void 0,
                }),
            el &&
                !z &&
                (0, l.jsx)(d.E, {
                    variant: "text-md/medium",
                    color: "interactive-text-default",
                    className: X.G3,
                    children: ee(f, m),
                }),
            et &&
                (function (e, t, i) {
                    if (!j)
                        return (0, l.jsx)(c.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            className: X.VZ,
                            children: v.intl.string(v.t.a19jpU),
                        });
                    if (t)
                        return (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)(d.E, {
                                    variant: "text-sm/normal",
                                    className: X.Tz,
                                    children: es(e, { subscriptionPeriodEnd: s, trialPeriodCopy: B }),
                                }),
                                (0, l.jsx)("hr", { className: X.RA }),
                            ],
                        });
                    if (i && null != Y && null != N && null != W && n === W) {
                        let e = C?.interval === Q.WT.YEAR,
                            t = (0, D.$g)(N.amount - Y, N.currency),
                            n = (0, D.$g)(N.amount, N.currency);
                        return (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)(d.E, {
                                    variant: "text-sm/normal",
                                    className: X.Tz,
                                    children: e
                                        ? v.intl.format(v.t.ofweWu, {
                                              numYears: K?.discount.userUsageLimit ?? "",
                                              discountedPrice: t,
                                              regularPrice: n,
                                          })
                                        : v.intl.format(v.t["nG7g/E"], {
                                              numMonths: K?.discount.userUsageLimit ?? "",
                                              discountedPrice: t,
                                              regularPrice: n,
                                          }),
                                }),
                                (0, l.jsx)("hr", { className: X.RA }),
                            ],
                        });
                    }
                })(R, P, x),
            q(),
            eu({
                selectedPlan: C,
                selectedPlanPrice: k,
                isPrepaid: O,
                shouldShowHRKEuroWarning: G,
                shouldShowTrialOrDiscountLayout: j,
                showTotal: o,
                shouldShowTotalInSubscriptionFlow: F,
            }),
        ],
    });
}
