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
    c = n(534514),
    d = n(834730),
    p = n(726656),
    m = n(463376),
    h = n(558620),
    C = n(650170),
    E = n(34188),
    A = n(661531),
    f = n(939249),
    S = n(398590),
    y = n(793574),
    P = n(688810),
    I = n(63152),
    T = n(663066),
    _ = n(976860),
    g = n(662388),
    v = n(652215),
    x = n(375708),
    N = n(456508);
let R = function (e) {
    let { onClose: t } = e,
        { analyticsLocations: n } = (0, P.Ay)();
    function i() {
        t(),
            (0, _.pX)(v.BVt.COLLECTIBLES_SHOP),
            (0, g.Cz)({ analyticsSource: y.A.PREMIUM_PAYMENT_MODAL, analyticsLocations: n }),
            (0, S.jH)(),
            (0, T.dF)(I.Zt);
    }
    return (0, l.jsxs)("div", {
        className: N.kL,
        children: [
            (0, l.jsx)("div", {
                className: N.Wk,
                children: (0, l.jsx)(E.U, { size: "custom", width: 20, height: 20, color: A.A.colors.ICON_DEFAULT }),
            }),
            (0, l.jsx)(d.E, {
                variant: "text-sm/normal",
                children: x.intl.format(x.t.twSHte, {
                    checkItOut: (e) => (0, l.jsx)(f.D, { className: N.nf, onClick: i, children: e }),
                }),
            }),
        ],
    });
};
var b = n(937008),
    M = n(222707),
    O = n(561794),
    j = n(97352),
    L = n(45938),
    D = n(975571),
    U = n(428262),
    w = n(580630),
    k = n(960851),
    G = n(881489),
    F = n(380619),
    B = n(477421),
    Y = n(410516),
    H = n(735164),
    W = n(363476),
    V = n(531506),
    K = n(871181),
    Z = n(318007),
    q = n(135314),
    z = n(285719),
    $ = n(202541);
n(26279);
var X = n(818348),
    Q = n(345138);
function J(e, t) {
    let { isEligibleForBOGOPromotion: n } = t;
    return null != e && !n;
}
function ee(e, t) {
    let n = x.intl.string(x.t.BYa62u),
        l = x.intl.string(x.t.CDa6Dq),
        i = (() => {
            switch (e.interval) {
                case $.WT.YEAR:
                    return n;
                case $.WT.MONTH:
                default:
                    return l;
            }
        })(),
        r = e.skuId;
    switch (t) {
        case $.pe.TIER_0:
            switch (r) {
                case $.pe.TIER_1:
                    return x.intl.string(x.t.q6mxDS);
                case $.pe.TIER_2:
                    return x.intl.string(x.t.seZVS0);
                default:
                    return i;
            }
        case $.pe.TIER_1:
            switch (r) {
                case $.pe.TIER_0:
                    return x.intl.string(x.t["7+u2zg"]);
                case $.pe.TIER_2:
                    return x.intl.string(x.t.NG2qcc);
                default:
                    return i;
            }
        case $.pe.TIER_2:
            switch (r) {
                case $.pe.TIER_0:
                case $.pe.TIER_1:
                    return x.intl.string(x.t["eB0/w9"]);
                case $.pe.TIER_2:
                    return e.interval === $.WT.MONTH
                        ? x.intl.formatToPlainString(x.t.RqUv86, { numFreeGuildSubscriptions: $.M4 })
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
                t?.interval === $.WT.DAY
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
        } = (0, C.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            setSelectedPlanId: e.setSelectedPlanId,
            checkoutPriceOptions: e.checkoutPriceOptions,
            activeSubscription: e.activeSubscription,
        })),
        { userTrialOffer: A, isEligibleForTrial: f, discountOffer: S } = (0, m.i)(),
        y = (0, Y.YJ)(S),
        {
            isGift: P,
            giftRecipient: I,
            selectedGiftStyle: T,
            customGiftMessage: _,
            setCustomGiftMessage: g,
            claimableRewards: v,
            setSelectedGiftingPromotionReward: x,
        } = (0, b.Pv)(),
        N = (0, h.A)(),
        R = (0, F.kz)(N, P && (0, L.Ik)(I), v),
        M = (0, O.tA)({ giftRecipient: I, isGift: P });
    a()(void 0 !== E, "should not be undefined");
    let [D, w] = (0, s.yK)([j.A], () => [null != E ? j.A.get(E.planId) : null, null != t ? j.A.get(t) : null]),
        G = A?.subscription_trial,
        H = (0, k.cg)(),
        W = w ?? N,
        V = n ?? p;
    a()(null != V, "Price option has to be set");
    let K = S?.discount?.planIds,
        Z = null != S && l.some((e) => K?.includes(e)) && null != S.discount,
        q = null != y && l.includes(y) ? (0, U.y8)(y, !1, P, V) : void 0,
        z = W?.id != null && l.includes(W.id);
    i.useEffect(() => {
        if (!z) {
            let e = !P && null != y && l.includes(y) ? y : null;
            if (null == D || P) d(e ?? l[0]);
            else if (null != D) {
                let e = l.find((e) => e !== D.id);
                null != e && d(e);
            }
        }
    }, [z, P, l, D, d, y]),
        i.useEffect(() => {
            R && null != v && v.length > 0 && x(v[0]);
        }, [v, x, R]);
    let { ref: $, ...Q } = (0, o._u)(),
        J = W?.id != null ? (0, U.y8)(W.id, !1, P, V) : void 0,
        { ipCountryCode: ee } = (0, B.A)(),
        en = "HR" === ee && null != J && J.currency === X.Yr.EUR,
        el = (0, U.J$)(V.paymentSourceId),
        ei = !P && (Z || (null != G && f && null != r)),
        { copy: er } = et();
    return {
        skuId: c,
        selectedPlan: W,
        selectedPlanPrice: J,
        premiumSubscriptionPlan: D,
        premiumSubscription: E,
        thePriceOptions: V,
        hasSeenCollectiblesInSkuSelect: M,
        shouldShowTrialOrDiscountLayout: ei,
        shouldShowHRKEuroWarning: en,
        shouldShowTotalInSubscriptionFlow: !f && !Z && z && u,
        canContinue: z,
        isPrepaid: el,
        radioGroupRef: $,
        radioGroupProps: Q,
        isGift: P,
        giftRecipient: I,
        customGiftMessage: _,
        setCustomGiftMessage: g,
        selectedGiftStyle: T,
        isEligibleForBOGOPromotion: H,
        isEligibleForTrial: f,
        userTrialOffer: A,
        trialPeriodCopy: er,
        isPlansEligibleForDiscount: Z,
        discountedPlanRegularPrice: q,
    };
}
function el(e) {
    let { isPrepaid: t, selectedPlan: n, selectedPlanPrice: i, intervalType: r, className: a } = e;
    return (0, l.jsxs)("div", {
        className: a,
        children: [
            (0, l.jsx)("div", { className: Q.T }),
            (0, l.jsx)(H.Sd, {
                label: x.intl.string(x.t.txajQG),
                value: (0, l.jsx)(W.A, {
                    price: i.amount,
                    currency: i.currency,
                    intervalType: r,
                    intervalCount: n.intervalCount,
                    isPrepaidPaymentSource: t,
                }),
                className: Q.M3,
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
        handleClose: h,
        showTotal: C,
        switchPlanSelectComponent: E,
        warningComponent: A,
    } = e;
    function f(e) {
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
              className: Q.mh,
              children: [
                  (0, l.jsx)("div", { className: Q.MU, children: null != r && (0, l.jsx)(Z.t, {}) }),
                  (0, l.jsxs)("div", {
                      className: Q.Tc,
                      children: [
                          (0, l.jsx)(z.Z, { className: m ? Q.KW : void 0, giftRecipient: t }),
                          (() => {
                              if ((0, L.lo)(t) === L.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != i)
                                  return (0, l.jsx)(K.A, {
                                      className: Q.iX,
                                      innerClassName: Q.pt,
                                      onTextChange: (e) => i(e),
                                      pendingText: n,
                                      currentText: n,
                                  });
                          })(),
                          f(E),
                          A,
                          !a && (0, l.jsx)(R, { onClose: h }),
                      ],
                  }),
              ],
          })
        : (0, l.jsxs)("div", {
              className: Q.Du,
              children: [
                  (0, l.jsx)(z.Z, { className: m ? Q.KW : void 0, giftRecipient: t }),
                  f(E),
                  o &&
                      C &&
                      null != d &&
                      null != p &&
                      (0, l.jsx)(el, { selectedPlan: d, selectedPlanPrice: p, intervalType: null, isPrepaid: s }),
                  A,
                  !a && (0, l.jsx)(R, { onClose: h }),
              ],
          });
}
function er(e, t) {
    let n = null != e && e.planId === t,
        l =
            n ||
            (t === $.gD.PREMIUM_MONTH_TIER_2 &&
                null != e &&
                [$.gD.PREMIUM_YEAR_TIER_0, $.gD.PREMIUM_YEAR_TIER_1].includes(e.planId));
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
        { currentPremiumSubscriptionForCheckout: p } = (0, C.t4)((e) => ({
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
        i = e?.trial_id === $.Dw;
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
                  kunaPriceWithCurrency: (0, w.$g)(7.5345 * n.amount, X.Yr.HRK),
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
                        documentationLink: D.A.getArticleURL(v.MVz.LOCALIZED_PRICING),
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
            selectedPlan: h,
            premiumSubscription: E,
            premiumSubscriptionPlan: A,
            isEligibleForBOGOPromotion: f,
            isGift: S,
            thePriceOptions: y,
            isEligibleForTrial: P,
            giftRecipient: I,
            customGiftMessage: T,
            setCustomGiftMessage: _,
            selectedGiftStyle: g,
            isPlansEligibleForDiscount: v,
            discountedPlanRegularPrice: N,
            hasSeenCollectiblesInSkuSelect: R,
            userTrialOffer: b,
            shouldShowTrialOrDiscountLayout: O,
            isPrepaid: j,
            radioGroupRef: L,
            radioGroupProps: D,
            selectedPlanPrice: U,
            shouldShowHRKEuroWarning: k,
            shouldShowTotalInSubscriptionFlow: F,
            canContinue: B,
            trialPeriodCopy: Y,
        } = en({ selectedPlanId: n, priceOptions: r, planOptions: a, subscriptionPeriodEnd: s, showTotal: o }),
        { discountAmountOff: H, applicablePlan: W, discountOffer: K } = (0, C.t4)((e) => e.premiumDiscountInfo),
        Z = (0, G.ds)();
    function q() {
        return (0, l.jsx)(ea, {
            disabled: t,
            planOptions: a,
            radioGroupRef: L,
            radioGroupProps: D,
            isGift: S,
            isPrepaid: j,
            premiumSubscription: E,
            selectedPlan: h,
            thePriceOptions: y,
            shouldShowTrialOrDiscountLayout: O,
            isEligibleForTrial: P,
            isPlansEligibleForDiscount: v,
        });
    }
    let { showFractionalPremiumBanner: z, fractionalPremiumInfo: X } = (0, M._V)({
        premiumSubscription: E,
        selectedPlanId: n,
        planGroup: i,
        isGift: S,
        fractionalPremiumInfoArgs: { forceFetch: !1, excludeReverseTrial: !1, excludeReverseTrialFromCountdown: !0 },
    });
    if (S)
        return (0, l.jsx)(ei, {
            giftRecipient: I,
            customGiftMessage: T,
            setCustomGiftMessage: _,
            selectedGiftStyle: g,
            hasSeenCollectiblesInSkuSelect: R,
            isPrepaid: j,
            canContinue: B,
            selectedPlan: h,
            selectedPlanPrice: U,
            useCompactGiftComponents: u,
            handleClose: p,
            showTotal: o,
            switchPlanSelectComponent: q(),
            warningComponent: eo({ shouldShowHRKEuroWarning: k, selectedPlanPrice: U }),
        });
    let et = !(P && z && !Z),
        el = J(A, { isEligibleForBOGOPromotion: f });
    return (0, l.jsxs)("div", {
        children: [
            z &&
                !Z &&
                (0, l.jsx)(V.vi, {
                    fractionalPremiumInfo: X,
                    enablePremiumBrandRefresh: !0,
                    variant: P ? V.uA.TRIAL : void 0,
                    trialPeriod: P ? Y : void 0,
                    trialEnd: P ? s : void 0,
                }),
            el &&
                !z &&
                (0, l.jsx)(d.E, {
                    variant: "text-md/medium",
                    color: "interactive-text-default",
                    className: Q.G3,
                    children: ee(A, m),
                }),
            et &&
                ((e, t, i) => {
                    if (!O)
                        return (0, l.jsx)(c.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            className: Q.VZ,
                            children: x.intl.string(x.t.a19jpU),
                        });
                    if (t)
                        return (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)(d.E, {
                                    variant: "text-sm/normal",
                                    className: Q.Tz,
                                    children: es(e, { subscriptionPeriodEnd: s, trialPeriodCopy: Y }),
                                }),
                                (0, l.jsx)("hr", { className: Q.RA }),
                            ],
                        });
                    if (i && null != H && null != N && null != W && n === W) {
                        let e = h?.interval === $.WT.YEAR,
                            t = (0, w.$g)(N.amount - H, N.currency),
                            n = (0, w.$g)(N.amount, N.currency);
                        return (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)(d.E, {
                                    variant: "text-sm/normal",
                                    className: Q.Tz,
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
                                (0, l.jsx)("hr", { className: Q.RA }),
                            ],
                        });
                    }
                })(b, P, v),
            q(),
            eu({
                selectedPlan: h,
                selectedPlanPrice: U,
                isPrepaid: j,
                shouldShowHRKEuroWarning: k,
                shouldShowTrialOrDiscountLayout: O,
                showTotal: o,
                shouldShowTotalInSubscriptionFlow: F,
            }),
        ],
    });
}
