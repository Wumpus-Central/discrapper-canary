n.d(t, {
    U_: () => X,
    yq: () => ee,
    LR: () => eu,
    $p: () => ec,
    cD: () => er,
    O8: () => et,
    Ct: () => es,
    RO: () => en,
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
    E = n(34188),
    f = n(661531),
    A = n(939249),
    S = n(398590),
    y = n(793574),
    P = n(688810),
    I = n(906199),
    _ = n(361158),
    T = n(976860),
    g = n(839534),
    v = n(652215),
    x = n(375708),
    N = n(466772);
let R = function (e) {
    let { onClose: t } = e,
        { analyticsLocations: n } = (0, P.Ay)();
    function i() {
        t(),
            (0, T.pX)(v.BVt.COLLECTIBLES_SHOP),
            (0, g.Cz)({ analyticsSource: y.A.PREMIUM_PAYMENT_MODAL, analyticsLocations: n }),
            (0, S.jH)(),
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
                children: x.intl.format(x.t.twSHte, {
                    checkItOut: (e) => (0, l.jsx)(A.D, { className: N.nf, onClick: i, children: e }),
                }),
            }),
        ],
    });
};
var b = n(951305),
    M = n(222707),
    j = n(561794),
    O = n(97352),
    L = n(45938),
    w = n(975571),
    k = n(428262),
    U = n(580630),
    D = n(881489),
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
    J = n(721162);
function X(e, t) {
    let { isEligibleForBOGOPromotion: n } = t;
    return null != e && !n;
}
function ee(e, t) {
    let n = x.intl.string(x.t.BYa62u),
        l = x.intl.string(x.t.CDa6Dq),
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
                    return x.intl.string(x.t.q6mxDS);
                case Q.pe.TIER_2:
                    return x.intl.string(x.t.seZVS0);
                default:
                    return i;
            }
        case Q.pe.TIER_1:
            switch (r) {
                case Q.pe.TIER_0:
                    return x.intl.string(x.t["7+u2zg"]);
                case Q.pe.TIER_2:
                    return x.intl.string(x.t.NG2qcc);
                default:
                    return i;
            }
        case Q.pe.TIER_2:
            switch (r) {
                case Q.pe.TIER_0:
                case Q.pe.TIER_1:
                    return x.intl.string(x.t["eB0/w9"]);
                case Q.pe.TIER_2:
                    return e.interval === Q.WT.MONTH
                        ? x.intl.formatToPlainString(x.t.RqUv86, { numFreeGuildSubscriptions: Q.M4 })
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
                        ? { daysCount: 14, copy: x.intl.string(x.t.Z1V2cs) }
                        : { daysCount: 7, copy: x.intl.string(x.t.MI1rHs) }
                    : { daysCount: 30, copy: x.intl.string(x.t["+S5lrV"]) },
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
        { userTrialOffer: f, isEligibleForTrial: A, discountOffer: S } = (0, m.i)(),
        y = (0, B.YJ)(S),
        {
            isGift: P,
            giftRecipient: I,
            selectedGiftStyle: _,
            customGiftMessage: T,
            setCustomGiftMessage: g,
            claimableRewards: v,
            setSelectedGiftingPromotionReward: x,
        } = (0, b.Pv)(),
        N = (0, C.A)(),
        R = (0, G.kz)(N, P && (0, L.Ik)(I), v),
        M = (0, j.tA)({ giftRecipient: I, isGift: P });
    a()(void 0 !== E, "should not be undefined");
    let [w, U] = (0, s.yK)([O.A], () => [null != E ? O.A.get(E.planId) : null, null != t ? O.A.get(t) : null]),
        D = f?.subscription_trial,
        Y = f?.trial_id === Q.Dw,
        W = (0, H.Sq)() && !Y,
        V = U ?? N,
        K = n ?? p;
    a()(null != K, "Price option has to be set");
    let Z = S?.discount?.planIds,
        q = null != S && l.some((e) => Z?.includes(e)) && null != S.discount,
        z = null != y && l.includes(y) ? (0, k.y8)(y, !1, P, K) : void 0,
        J = null != V ? V.id : void 0,
        X = null != J && l.includes(J);
    i.useEffect(() => {
        if (X) return void d(J, { shouldUpdateQuantity: !1 });
        let e = !P && null != y && l.includes(y) ? y : null;
        if (null == w || P) d(e ?? l[0]);
        else if (null != w) {
            let e = l.find((e) => e !== w.id);
            null != e && d(e);
        }
    }, [X, P, l, w, d, J, y]),
        i.useEffect(() => {
            R && null != v && v.length > 0 && x(v[0]);
        }, [v, x, R]);
    let { ref: ee, ...en } = (0, o._u)(),
        el = V?.id != null ? (0, k.y8)(V.id, !1, P, K) : void 0,
        { ipCountryCode: ei } = (0, F.A)(),
        er = "HR" === ei && null != el && el.currency === $.Yr.EUR,
        ea = (0, k.J$)(K.paymentSourceId),
        es = !P && (q || (null != D && A && null != r)),
        { copy: eo } = et();
    return {
        skuId: c,
        selectedPlan: V,
        selectedPlanPrice: el,
        premiumSubscriptionPlan: w,
        premiumSubscription: E,
        thePriceOptions: K,
        hasSeenCollectiblesInSkuSelect: M,
        shouldShowTrialOrDiscountLayout: es,
        shouldShowHRKEuroWarning: er,
        shouldShowTotalInSubscriptionFlow: !A && !q && X && u,
        canContinue: X,
        isPrepaid: ea,
        radioGroupRef: ee,
        radioGroupProps: en,
        isGift: P,
        giftRecipient: I,
        customGiftMessage: T,
        setCustomGiftMessage: g,
        selectedGiftStyle: _,
        isEligibleForBOGOPromotion: W,
        isEligibleForTrial: A,
        userTrialOffer: f,
        trialPeriodCopy: eo,
        isPlansEligibleForDiscount: q,
        discountedPlanRegularPrice: z,
    };
}
function el(e) {
    let { isPrepaid: t, selectedPlan: n, selectedPlanPrice: i, intervalType: r, className: a } = e;
    return (0, l.jsxs)("div", {
        className: a,
        children: [
            (0, l.jsx)("div", { className: J.T }),
            (0, l.jsx)(Y.Sd, {
                label: x.intl.string(x.t.txajQG),
                value: (0, l.jsx)(W.A, {
                    price: i.amount,
                    currency: i.currency,
                    intervalType: r,
                    intervalCount: n.intervalCount,
                    isPrepaidPaymentSource: t,
                }),
                className: J.M3,
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
                    children: x.intl.string(x.t["3E5hXj"]),
                }),
                e,
            ],
        });
    }
    return (0, L.Ik)(t)
        ? (0, l.jsxs)("div", {
              className: J.mh,
              children: [
                  (0, l.jsx)("div", { className: J.MU, children: null != r && (0, l.jsx)(Z.t, {}) }),
                  (0, l.jsxs)("div", {
                      className: J.Tc,
                      children: [
                          (0, l.jsx)(z.Z, { className: m ? J.KW : void 0, giftRecipient: t }),
                          (function () {
                              if ((0, L.lo)(t) === L.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != i)
                                  return (0, l.jsx)(K.A, {
                                      className: J.iX,
                                      innerClassName: J.pt,
                                      onTextChange: (e) => i(e),
                                      pendingText: n,
                                      currentText: n,
                                  });
                          })(),
                          A(E),
                          f,
                          !a && (0, l.jsx)(R, { onClose: C }),
                      ],
                  }),
              ],
          })
        : (0, l.jsxs)("div", {
              className: J.Du,
              children: [
                  (0, l.jsx)(z.Z, { className: m ? J.KW : void 0, giftRecipient: t }),
                  A(E),
                  o &&
                      h &&
                      null != d &&
                      null != p &&
                      (0, l.jsx)(el, { selectedPlan: d, selectedPlanPrice: p, intervalType: null, isPrepaid: s }),
                  f,
                  !a && (0, l.jsx)(R, { onClose: C }),
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
          ? x.intl.format(x.t.nG95hA, { endDate: n })
          : x.intl.format(x.t.s4E7kb, { trialEnd: n, trialPeriod: l });
}
function eo(e) {
    let { shouldShowHRKEuroWarning: t, selectedPlanPrice: n } = e;
    return t && null != n
        ? (0, l.jsx)(p.A, {
              message: x.intl.formatToPlainString(x.t["9hnZoK"], {
                  kunaPriceWithCurrency: (0, U.$g)(7.5345 * n.amount, $.Yr.HRK),
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
                    message: x.intl.format(x.t.Om31w8, {
                        documentationLink: w.A.getArticleURL(v.MVz.LOCALIZED_PRICING),
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
            isGift: S,
            thePriceOptions: y,
            isEligibleForTrial: P,
            giftRecipient: I,
            customGiftMessage: _,
            setCustomGiftMessage: T,
            selectedGiftStyle: g,
            isPlansEligibleForDiscount: v,
            discountedPlanRegularPrice: N,
            hasSeenCollectiblesInSkuSelect: R,
            userTrialOffer: b,
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
        Z = (0, D.ds)();
    function q() {
        return (0, l.jsx)(ea, {
            disabled: t,
            planOptions: a,
            radioGroupRef: L,
            radioGroupProps: w,
            isGift: S,
            isPrepaid: O,
            premiumSubscription: E,
            selectedPlan: C,
            thePriceOptions: y,
            shouldShowTrialOrDiscountLayout: j,
            isEligibleForTrial: P,
            isPlansEligibleForDiscount: v,
        });
    }
    let { showFractionalPremiumBanner: z, fractionalPremiumInfo: $ } = (0, M._V)({
        premiumSubscription: E,
        selectedPlanId: n,
        planGroup: i,
        isGift: S,
        fractionalPremiumInfoArgs: { forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !0 },
    });
    if (S)
        return (0, l.jsx)(ei, {
            giftRecipient: I,
            customGiftMessage: _,
            setCustomGiftMessage: T,
            selectedGiftStyle: g,
            hasSeenCollectiblesInSkuSelect: R,
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
        el = X(f, { isEligibleForBOGOPromotion: A });
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
                    className: J.G3,
                    children: ee(f, m),
                }),
            et &&
                (function (e, t, i) {
                    if (!j)
                        return (0, l.jsx)(c.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            className: J.VZ,
                            children: x.intl.string(x.t.a19jpU),
                        });
                    if (t)
                        return (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)(d.E, {
                                    variant: "text-sm/normal",
                                    className: J.Tz,
                                    children: es(e, { subscriptionPeriodEnd: s, trialPeriodCopy: B }),
                                }),
                                (0, l.jsx)("hr", { className: J.RA }),
                            ],
                        });
                    if (i && null != Y && null != N && null != W && n === W) {
                        let e = C?.interval === Q.WT.YEAR,
                            t = (0, U.$g)(N.amount - Y, N.currency),
                            n = (0, U.$g)(N.amount, N.currency);
                        return (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)(d.E, {
                                    variant: "text-sm/normal",
                                    className: J.Tz,
                                    children: e
                                        ? x.intl.format(x.t.ofweWu, {
                                              numYears: K?.discount.userUsageLimit ?? "",
                                              discountedPrice: t,
                                              regularPrice: n,
                                          })
                                        : x.intl.format(x.t["nG7g/E"], {
                                              numMonths: K?.discount.userUsageLimit ?? "",
                                              discountedPrice: t,
                                              regularPrice: n,
                                          }),
                                }),
                                (0, l.jsx)("hr", { className: J.RA }),
                            ],
                        });
                    }
                })(b, P, v),
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
