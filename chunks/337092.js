"use strict";
n.d(t, {
    U_: () => et,
    Rx: () => eo,
    yq: () => en,
    LR: () => ec,
    $p: () => eE,
    cD: () => el,
    O8: () => ei,
    Ct: () => e_,
    RO: () => er,
});
var i = n(627968),
    r = n(64700),
    s = n(284009),
    a = n.n(s),
    o = n(17928),
    l = n(785007),
    d = n(452027),
    _ = n(834730),
    u = n(726656),
    c = n(558620),
    E = n(699595),
    h = n(94420),
    m = n(34188),
    f = n(661531),
    g = n(939249),
    p = n(398590),
    A = n(793574),
    I = n(688810),
    T = n(509536),
    S = n(361158),
    N = n(976860),
    C = n(803375),
    R = n(652215),
    O = n(985018),
    y = n(456508);
let v = (e) => {
    let { onClose: t } = e,
        { analyticsLocations: n } = (0, I.Ay)(),
        r = () => {
            t(),
                (0, N.pX)(R.BVt.COLLECTIBLES_SHOP),
                (0, C.Cz)({ analyticsSource: A.A.PREMIUM_PAYMENT_MODAL, analyticsLocations: n }),
                (0, p.jH)(),
                (0, S.dF)(T.Zt);
        };
    return (0, i.jsxs)("div", {
        className: y.kL,
        children: [
            (0, i.jsx)("div", {
                className: y.Wk,
                children: (0, i.jsx)(m.U, { size: "custom", width: 20, height: 20, color: f.A.colors.WHITE }),
            }),
            (0, i.jsx)(_.E, {
                variant: "text-sm/normal",
                children: O.intl.format(O.t.twSHte, {
                    checkItOut: (e) => (0, i.jsx)(g.D, { className: y.nf, onClick: r, children: e }),
                }),
            }),
        ],
    });
};
var D = n(937008),
    L = n(156312),
    b = n(222707),
    w = n(773669),
    P = n(594832),
    k = n(97352),
    M = n(45938),
    U = n(975571),
    x = n(927578),
    G = n(580630),
    V = n(40185),
    F = n(881489);
let B = (0, n(945810).mj)({
    name: "2026-03-calculated-annual-discount-percent",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var H = n(810498),
    j = n(477421),
    W = n(422936),
    Y = n(735164),
    K = n(363476),
    z = n(531506),
    $ = n(871181),
    q = n(318007),
    X = n(958720),
    Z = n(285719),
    Q = n(788868);
n(26279);
var J = n(818348),
    ee = n(345138);
function et(e, t) {
    let { isEligibleForBOGOPromotion: n } = t;
    return null != e && !n;
}
function en(e, t) {
    let n = O.intl.string(O.t.BYa62u),
        i = O.intl.string(O.t.CDa6Dq),
        r = (() => {
            switch (e.interval) {
                case Q.WT.YEAR:
                    return n;
                case Q.WT.MONTH:
                default:
                    return i;
            }
        })(),
        s = e.skuId;
    switch (t) {
        case Q.pe.TIER_0:
            switch (s) {
                case Q.pe.TIER_1:
                    return O.intl.string(O.t.q6mxDS);
                case Q.pe.TIER_2:
                    return O.intl.string(O.t.seZVS0);
                default:
                    return r;
            }
        case Q.pe.TIER_1:
            switch (s) {
                case Q.pe.TIER_0:
                    return O.intl.string(O.t["7+u2zg"]);
                case Q.pe.TIER_2:
                    return O.intl.string(O.t.NG2qcc);
                default:
                    return r;
            }
        case Q.pe.TIER_2:
            switch (s) {
                case Q.pe.TIER_0:
                case Q.pe.TIER_1:
                    return O.intl.string(O.t["eB0/w9"]);
                case Q.pe.TIER_2:
                    return e.interval === Q.WT.MONTH
                        ? O.intl.formatToPlainString(O.t.RqUv86, { numFreeGuildSubscriptions: Q.M4 })
                        : r;
                default:
                    return r;
            }
        default:
            return r;
    }
}
let ei = () => {
        let { userTrialOffer: e } = (0, L.P5)(),
            t = e?.subscription_trial,
            { daysCount: n, copy: i } = r.useMemo(
                () =>
                    t?.interval === Q.WT.DAY
                        ? t?.interval_count > 7
                            ? { daysCount: 14, copy: O.intl.string(O.t.Z1V2cs) }
                            : { daysCount: 7, copy: O.intl.string(O.t.MI1rHs) }
                        : { daysCount: 30, copy: O.intl.string(O.t["+S5lrV"]) },
                [t],
            );
        return { daysCount: n, copy: i, userTrialOffer: e };
    },
    er = (e) => {
        let { selectedPlanId: t, priceOptions: n, planOptions: i, subscriptionPeriodEnd: s, showTotal: d } = e,
            { selectedSkuId: _, setSelectedPlanId: u } = (0, h.t4)((e) => ({
                selectedSkuId: e.selectedSkuId,
                setSelectedPlanId: e.setSelectedPlanId,
            })),
            {
                activeSubscription: m,
                priceOptions: f,
                userTrialOffer: g,
                isEligibleForTrial: p,
                discountOffer: A,
            } = (0, L.P5)(),
            {
                isGift: I,
                giftRecipient: T,
                selectedGiftStyle: S,
                customGiftMessage: N,
                setCustomGiftMessage: C,
                claimableRewards: R,
                setSelectedGiftingPromotionReward: O,
            } = (0, D.Pv)(),
            y = (0, c.A)(),
            v = (0, H.kz)(y, I && (0, M.Ik)(T), R),
            b = (0, P.tA)({ giftRecipient: T, isGift: I });
        a()(void 0 !== m, "should not be undefined");
        let [w, U] = (0, o.yK)([k.A], () => [null != m ? k.A.get(m.planId) : null, null != t ? k.A.get(t) : null]),
            G = g?.subscription_trial,
            F = (0, V.cg)(),
            B = U ?? y,
            W = r.useCallback(
                (e) => {
                    u(e);
                },
                [u],
            ),
            Y = n ?? f;
        a()(null != Y, "Price option has to be set");
        let K = A?.discount?.plan_ids,
            z = null != A && i.some((e) => K?.includes(e)) && null != A.discount,
            $ = i.includes(Q.gD.PREMIUM_MONTH_TIER_2) ? (0, x.y8)(Q.gD.PREMIUM_MONTH_TIER_2, !1, I, Y) : void 0,
            q = B?.id != null && i.includes(B.id);
        r.useEffect(() => {
            if (!q) {
                if (null == w || I) W(i[0]);
                else if (null != w) {
                    let e = i.find((e) => e !== w.id);
                    null != e && W(e);
                }
            }
        }, [q, I, i, w, W]),
            r.useEffect(() => {
                v && null != R && R.length > 0 && O(R[0]);
            }, [R, O, v]);
        let { ref: X, ...Z } = (0, l._u)(),
            ee = B?.id != null ? (0, x.y8)(B.id, !1, I, Y) : void 0,
            { ipCountryCode: et } = (0, j.A)(),
            en = "HR" === et && null != ee && ee.currency === J.Yr.EUR,
            er = (0, x.J$)(Y.paymentSourceId),
            es = !I && (z || (null != G && p && null != s)),
            { discountAmountOff: ea } = (0, E.J)(Q.gD.PREMIUM_MONTH_TIER_2),
            { copy: eo } = ei();
        return {
            skuId: _,
            setPlanId: W,
            selectedPlan: B,
            selectedPlanPrice: ee,
            premiumSubscriptionPlan: w,
            premiumSubscription: m,
            thePriceOptions: Y,
            hasSeenCollectiblesInSkuSelect: b,
            shouldShowUpdatedPaymentModal: es,
            shouldShowHRKEuroWarning: en,
            shouldShowTotalInSubscriptionFlow: !p && !z && q && d,
            canContinue: q,
            isPrepaid: er,
            radioGroupRef: X,
            radioGroupProps: Z,
            isGift: I,
            giftRecipient: T,
            customGiftMessage: N,
            setCustomGiftMessage: C,
            selectedGiftStyle: S,
            isEligibleForBOGOPromotion: F,
            isEligibleForTrial: p,
            userTrialOffer: g,
            trialPeriodCopy: eo,
            discountOffer: A,
            isPlansEligibleForDiscount: z,
            discountedPlanRegularPrice: $,
            discountAmountOff: ea,
        };
    },
    es = (e) => {
        let { isPrepaid: t, selectedPlan: n, selectedPlanPrice: r, intervalType: s, className: a } = e;
        return (0, i.jsxs)("div", {
            className: a,
            children: [
                (0, i.jsx)("div", { className: ee.T }),
                (0, i.jsx)(Y.Sd, {
                    label: O.intl.string(O.t.txajQG),
                    value: (0, i.jsx)(K.A, {
                        price: r.amount,
                        currency: r.currency,
                        intervalType: s,
                        intervalCount: n.intervalCount,
                        isPrepaidPaymentSource: t,
                    }),
                    className: ee.M3,
                }),
            ],
        });
    },
    ea = (e) => {
        let {
                giftRecipient: t,
                customGiftMessage: n,
                setCustomGiftMessage: r,
                selectedGiftStyle: s,
                hasSeenCollectiblesInSkuSelect: a,
                isPrepaid: o,
                canContinue: l,
                selectedPlan: _,
                selectedPlanPrice: u,
                useCompactGiftComponents: c,
                handleClose: E,
                showTotal: h,
                switchPlanSelectComponent: m,
                warningComponent: f,
            } = e,
            g = (e) => (0, i.jsx)(d.D, { label: O.intl.string(O.t["3E5hXj"]), children: e });
        return (0, M.Ik)(t)
            ? (0, i.jsxs)("div", {
                  className: ee.mh,
                  children: [
                      (0, i.jsx)("div", { className: ee.MU, children: null != s && (0, i.jsx)(q.t, {}) }),
                      (0, i.jsxs)("div", {
                          className: ee.Tc,
                          children: [
                              (0, i.jsx)(Z.Z, { className: c ? ee.KW : void 0, giftRecipient: t }),
                              (() => {
                                  if ((0, M.lo)(t) === M.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != r)
                                      return (0, i.jsx)($.A, {
                                          className: ee.iX,
                                          innerClassName: ee.pt,
                                          onTextChange: (e) => r(e),
                                          pendingText: n,
                                          currentText: n,
                                      });
                              })(),
                              g(m),
                              f,
                              !a && (0, i.jsx)(v, { onClose: E }),
                          ],
                      }),
                  ],
              })
            : (0, i.jsxs)("div", {
                  className: ee.Du,
                  children: [
                      (0, i.jsx)(Z.Z, { className: c ? ee.KW : void 0, giftRecipient: t }),
                      g(m),
                      l &&
                          h &&
                          null != _ &&
                          null != u &&
                          (0, i.jsx)(es, { selectedPlan: _, selectedPlanPrice: u, intervalType: null, isPrepaid: o }),
                      f,
                      !a && (0, i.jsx)(v, { onClose: E }),
                  ],
              });
    },
    eo = (e) => {
        let {
                isPrepaid: t,
                premiumSubscription: n,
                setPlanId: i,
                thePriceOptions: r,
                shouldShowUpdatedPaymentModal: s,
                isEligibleForTrial: a,
                isPlansEligibleForDiscount: l,
                discountAmountOff: d,
            } = e,
            _ = (0, o.bG)([w.default], () => w.default.locale),
            { isGift: u, giftRecipient: c } = (0, D.Pv)(),
            E = u && (0, M.Ik)(c),
            { enabled: h } = B.getConfig({ location: "PremiumSwitchPlanSelectOption" });
        return {
            isPrepaid: t,
            selectPlan: i,
            premiumSubscription: u ? null : (n ?? null),
            priceOptions: r,
            shouldShowUpdatedPaymentModal: s,
            isEligibleForDiscount: l,
            discountAmountOff: d,
            isEligibleForTrial: a,
            userLocale: _,
            isGift: u,
            isCustomGift: E,
            shouldUseCalculatedDiscount: h,
            discountOffer: (0, W.O)(),
            isEligibleForBOGOPromotion: (0, V.cg)(),
        };
    },
    el = (e, t) => {
        let n = null != e && e.planId === t,
            i =
                n ||
                (t === Q.gD.PREMIUM_MONTH_TIER_2 &&
                    null != e &&
                    [Q.gD.PREMIUM_YEAR_TIER_0, Q.gD.PREMIUM_YEAR_TIER_1].includes(e.planId));
        return { isCurrentPlan: n, disabled: i };
    },
    ed = (e) => {
        let { planOptions: t, radioGroupRef: n, selectedPlan: s, radioGroupProps: a } = e,
            o = eo(e),
            l = r.useMemo(
                () =>
                    t.map((t) => {
                        let { isCurrentPlan: n, disabled: r } = el(o.premiumSubscription, t);
                        return (0, i.jsx)(
                            X.Ay,
                            { planId: t, selected: s?.id === t, isCurrentPlan: n, disabled: e.disabled || r, ...o },
                            t,
                        );
                    }),
                [e.disabled, t, o, s],
            );
        return (0, i.jsx)("div", { ref: n, ...a, children: l });
    },
    e_ = (e, t) => {
        let { subscriptionPeriodEnd: n, trialPeriodCopy: i } = t,
            r = e?.trial_id === Q.Dw;
        return null == n
            ? null
            : r
              ? O.intl.format(O.t.nG95hA, { endDate: n })
              : O.intl.format(O.t.s4E7kb, { trialEnd: n, trialPeriod: i });
    },
    eu = (e) => {
        let { shouldShowHRKEuroWarning: t, selectedPlanPrice: n } = e;
        return t && null != n
            ? (0, i.jsx)(u.A, {
                  message: O.intl.formatToPlainString(O.t["9hnZoK"], {
                      kunaPriceWithCurrency: (0, G.$g)(7.5345 * n.amount, J.Yr.HRK),
                  }),
              })
            : null;
    },
    ec = (e) => {
        let {
            selectedPlan: t,
            selectedPlanPrice: n,
            isPrepaid: r,
            shouldShowHRKEuroWarning: s,
            shouldShowUpdatedPaymentModal: a,
            showTotal: o,
            shouldShowTotalInSubscriptionFlow: l,
            previewTotalSectionClassName: d,
        } = e;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                l &&
                    null != t &&
                    null != n &&
                    (0, i.jsx)(es, {
                        className: d,
                        selectedPlan: t,
                        selectedPlanPrice: n,
                        intervalType: t.interval,
                        isPrepaid: r,
                    }),
                eu({ shouldShowHRKEuroWarning: s, selectedPlanPrice: n }),
                !a &&
                    o &&
                    (0, i.jsx)(u.A, {
                        message: O.intl.format(O.t.Om31w8, {
                            documentationLink: U.A.getArticleURL(R.MVz.LOCALIZED_PRICING),
                        }),
                    }),
            ],
        });
    };
function eE(e) {
    let {
            disabled: t,
            selectedPlanId: n,
            planGroup: r,
            priceOptions: s,
            planOptions: a,
            subscriptionPeriodEnd: o,
            showTotal: l = !0,
            useCompactGiftComponents: d,
            handleClose: u,
        } = e,
        {
            skuId: c,
            setPlanId: E,
            selectedPlan: h,
            premiumSubscription: m,
            premiumSubscriptionPlan: f,
            isEligibleForBOGOPromotion: g,
            isGift: p,
            thePriceOptions: A,
            isEligibleForTrial: I,
            giftRecipient: T,
            customGiftMessage: S,
            setCustomGiftMessage: N,
            selectedGiftStyle: C,
            discountOffer: R,
            isPlansEligibleForDiscount: y,
            discountedPlanRegularPrice: v,
            hasSeenCollectiblesInSkuSelect: D,
            userTrialOffer: L,
            shouldShowUpdatedPaymentModal: w,
            discountAmountOff: P,
            isPrepaid: k,
            radioGroupRef: M,
            radioGroupProps: U,
            selectedPlanPrice: x,
            shouldShowHRKEuroWarning: V,
            shouldShowTotalInSubscriptionFlow: B,
            canContinue: H,
            trialPeriodCopy: j,
        } = er({ selectedPlanId: n, priceOptions: s, planOptions: a, subscriptionPeriodEnd: o, showTotal: l }),
        W = (0, F.ds)(),
        Y = () =>
            (0, i.jsx)(ed, {
                disabled: t,
                planOptions: a,
                radioGroupRef: M,
                radioGroupProps: U,
                isGift: p,
                isPrepaid: k,
                premiumSubscription: m,
                setPlanId: E,
                selectedPlan: h,
                thePriceOptions: A,
                shouldShowUpdatedPaymentModal: w,
                isEligibleForTrial: I,
                isPlansEligibleForDiscount: y,
                discountAmountOff: P,
            }),
        { showFractionalPremiumBanner: K, fractionalPremiumInfo: $ } = (0, b._V)({
            premiumSubscription: m,
            selectedPlanId: n,
            planGroup: r,
            isGift: p,
            fractionalPremiumInfoArgs: {
                forceFetch: !1,
                excludeReverseTrial: !1,
                excludeReverseTrialFromCountdown: !0,
            },
        });
    if (p)
        return (0, i.jsx)(ea, {
            giftRecipient: T,
            customGiftMessage: S,
            setCustomGiftMessage: N,
            selectedGiftStyle: C,
            hasSeenCollectiblesInSkuSelect: D,
            isPrepaid: k,
            canContinue: H,
            selectedPlan: h,
            selectedPlanPrice: x,
            useCompactGiftComponents: d,
            handleClose: u,
            showTotal: l,
            switchPlanSelectComponent: Y(),
            warningComponent: eu({ shouldShowHRKEuroWarning: V, selectedPlanPrice: x }),
        });
    let q = !(I && K && !W),
        X = et(f, { isEligibleForBOGOPromotion: g });
    return (0, i.jsxs)("div", {
        children: [
            K &&
                !W &&
                (0, i.jsx)(z.vi, {
                    fractionalPremiumInfo: $,
                    enablePremiumBrandRefresh: !0,
                    variant: I ? z.uA.TRIAL : void 0,
                    trialPeriod: I ? j : void 0,
                    trialEnd: I ? o : void 0,
                }),
            X && !K && (0, i.jsx)("div", { className: ee.G3, children: en(f, c) }),
            q &&
                (w
                    ? I
                        ? (0, i.jsxs)("div", {
                              children: [
                                  (0, i.jsx)(_.E, {
                                      variant: "text-sm/normal",
                                      className: ee.Tz,
                                      children: e_(L, { subscriptionPeriodEnd: o, trialPeriodCopy: j }),
                                  }),
                                  (0, i.jsx)("hr", { className: ee.RA }),
                              ],
                          })
                        : y && null != P && null != v && n === Q.gD.PREMIUM_MONTH_TIER_2
                          ? (0, i.jsxs)("div", {
                                children: [
                                    (0, i.jsx)(_.E, {
                                        variant: "text-sm/normal",
                                        className: ee.Tz,
                                        children: O.intl.format(O.t["nG7g/E"], {
                                            numMonths: R?.discount.user_usage_limit ?? "",
                                            discountedPrice: (0, G.$g)(v.amount - P, v.currency),
                                            regularPrice: (0, G.$g)(v.amount, v.currency),
                                        }),
                                    }),
                                    (0, i.jsx)("hr", { className: ee.RA }),
                                ],
                            })
                          : void 0
                    : (0, i.jsx)("div", { className: ee.VZ, children: O.intl.string(O.t.a19jpU) })),
            Y(),
            ec({
                selectedPlan: h,
                selectedPlanPrice: x,
                isPrepaid: k,
                shouldShowHRKEuroWarning: V,
                shouldShowUpdatedPaymentModal: w,
                showTotal: l,
                shouldShowTotalInSubscriptionFlow: B,
            }),
        ],
    });
}
