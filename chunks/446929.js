"use strict";
n.d(t, {
    $p: () => J,
    Ct: () => Z,
    LR: () => Q,
    O8: () => j,
    RO: () => Y,
    Rx: () => $,
    U_: () => B,
    cD: () => z,
    yq: () => H,
});
var r = n(627968),
    i = n(64700),
    s = n(284009),
    a = n.n(s),
    o = n(311907),
    l = n(421380),
    u = n(397927),
    c = n(726656),
    d = n(155718),
    _ = n(448811),
    f = n(937008),
    p = n(156312),
    h = n(222707),
    m = n(773669),
    E = n(594832),
    g = n(97352),
    A = n(45938),
    I = n(975571),
    T = n(927578),
    S = n(580630),
    y = n(40185),
    v = n(881489),
    N = n(906023),
    C = n(810498),
    R = n(477421),
    O = n(422936),
    b = n(735164),
    D = n(363476),
    L = n(156962),
    w = n(871181),
    M = n(318007),
    x = n(958720),
    P = n(285719),
    k = n(788868),
    U = n(652215);
n(26279);
var G = n(818348),
    F = n(985018),
    V = n(239746);
function B(e, t) {
    let { isEligibleForBOGOPromotion: n } = t;
    return null != e && !n;
}
function H(e, t) {
    let n = F.intl.string(F.t.BYa62u),
        r = F.intl.string(F.t.CDa6Dq),
        i = (() => {
            switch (e.interval) {
                case k.WT.YEAR:
                    return n;
                case k.WT.MONTH:
                default:
                    return r;
            }
        })(),
        s = e.skuId;
    switch (t) {
        case k.pe.TIER_0:
            switch (s) {
                case k.pe.TIER_1:
                    return F.intl.string(F.t.q6mxDS);
                case k.pe.TIER_2:
                    return F.intl.string(F.t.seZVS0);
                default:
                    return i;
            }
        case k.pe.TIER_1:
            switch (s) {
                case k.pe.TIER_0:
                    return F.intl.string(F.t["7+u2zg"]);
                case k.pe.TIER_2:
                    return F.intl.string(F.t.NG2qcc);
                default:
                    return i;
            }
        case k.pe.TIER_2:
            switch (s) {
                case k.pe.TIER_0:
                case k.pe.TIER_1:
                    return F.intl.string(F.t["eB0/w9"]);
                case k.pe.TIER_2:
                    return e.interval === k.WT.MONTH
                        ? F.intl.formatToPlainString(F.t.RqUv86, { numFreeGuildSubscriptions: k.M4 })
                        : i;
                default:
                    return i;
            }
        default:
            return i;
    }
}
let j = () => {
        let { userTrialOffer: e } = (0, p.P5)(),
            t = e?.subscription_trial,
            { daysCount: n, copy: r } = i.useMemo(
                () =>
                    t?.interval === k.WT.DAY
                        ? t?.interval_count > 7
                            ? { daysCount: 14, copy: F.intl.string(F.t.Z1V2cs) }
                            : { daysCount: 7, copy: F.intl.string(F.t.MI1rHs) }
                        : { daysCount: 30, copy: F.intl.string(F.t["+S5lrV"]) },
                [t],
            );
        return { daysCount: n, copy: r, userTrialOffer: e };
    },
    Y = (e) => {
        let {
                selectedPlanId: t,
                priceOptions: n,
                planOptions: r,
                subscriptionPeriodEnd: s,
                discountInvoiceItems: u,
                showTotal: c,
            } = e,
            {
                activeSubscription: _,
                setSelectedPlanId: h,
                selectedSkuId: m,
                selectedPlan: I,
                priceOptions: S,
                userTrialOffer: v,
                isEligibleForTrial: N,
                discountOffer: O,
            } = (0, p.P5)(),
            {
                isGift: b,
                giftRecipient: D,
                selectedGiftStyle: L,
                customGiftMessage: w,
                setCustomGiftMessage: M,
                claimableRewards: x,
                setSelectedGiftingPromotionReward: P,
            } = (0, f.Pv)(),
            U = (0, C.kz)(I, b && (0, A.Ik)(D), x),
            F = (0, E.tA)({ giftRecipient: D, isGift: b }),
            V = _;
        a()(void 0 !== V, "should not be undefined");
        let [B, H] = (0, o.yK)([g.A], () => [null != V ? g.A.get(V.planId) : null, null != t ? g.A.get(t) : null]),
            Y = v?.subscription_trial,
            W = (0, y.cg)(),
            K = H ?? I,
            $ = i.useCallback(
                (e) => {
                    h(e);
                },
                [h],
            ),
            z = n ?? S;
        a()(null != z, "Price option has to be set");
        let q = O?.discount?.plan_ids,
            Z = null != O && r.some((e) => q?.includes(e)) && null != O.discount,
            X = r.includes(k.gD.PREMIUM_MONTH_TIER_2) ? (0, T.y8)(k.gD.PREMIUM_MONTH_TIER_2, !1, b, z) : void 0,
            Q = K?.id != null && r.includes(K.id);
        i.useEffect(() => {
            if (!Q) {
                if (null == B || b) $(r[0]);
                else if (null != B) {
                    let e = r.find((e) => e !== B.id);
                    null != e && $(e);
                }
            }
        }, [Q, b, r, B, $]),
            i.useEffect(() => {
                U && null != x && x.length > 0 && P(x[0]);
            }, [x, P, U]);
        let { ref: J, ...ee } = (0, l._u)(),
            et = K?.id != null ? (0, T.y8)(K.id, !1, b, z) : void 0,
            { ipCountryCode: en } = (0, R.A)(),
            er = "HR" === en && null != et && et.currency === G.Yr.EUR,
            ei = (0, T.J$)(z.paymentSourceId),
            es = !b && (Z || (null != Y && N && null != s)),
            ea = u
                ?.find((e) => e.subscriptionPlanId === k.gD.PREMIUM_MONTH_TIER_2)
                ?.discounts?.find((e) => e.type === d.iS.SUBSCRIPTION_PLAN)?.amount,
            eo = m,
            { copy: el } = j();
        return {
            skuId: eo,
            setPlanId: $,
            selectedPlan: K,
            selectedPlanPrice: et,
            premiumSubscriptionPlan: B,
            premiumSubscription: V,
            thePriceOptions: z,
            hasSeenCollectiblesInSkuSelect: F,
            shouldShowUpdatedPaymentModal: es,
            shouldShowHRKEuroWarning: er,
            shouldShowTotalInSubscriptionFlow: !N && !Z && Q && c,
            canContinue: Q,
            isPrepaid: ei,
            radioGroupRef: J,
            radioGroupProps: ee,
            isGift: b,
            giftRecipient: D,
            customGiftMessage: w,
            setCustomGiftMessage: M,
            selectedGiftStyle: L,
            isEligibleForBOGOPromotion: W,
            isEligibleForTrial: N,
            userTrialOffer: v,
            trialPeriodCopy: el,
            discountOffer: O,
            isPlansEligibleForDiscount: Z,
            discountedPlanRegularPrice: X,
            discountAmountOff: ea,
        };
    },
    W = (e) => {
        let { isPrepaid: t, selectedPlan: n, selectedPlanPrice: i, intervalType: s, className: a } = e;
        return (0, r.jsxs)("div", {
            className: a,
            children: [
                (0, r.jsx)("div", { className: V.T }),
                (0, r.jsx)(b.Sd, {
                    label: F.intl.string(F.t.txajQG),
                    value: (0, r.jsx)(D.A, {
                        price: i.amount,
                        currency: i.currency,
                        intervalType: s,
                        intervalCount: n.intervalCount,
                        isPrepaidPaymentSource: t,
                    }),
                    className: V.M3,
                }),
            ],
        });
    },
    K = (e) => {
        let {
                giftRecipient: t,
                customGiftMessage: n,
                setCustomGiftMessage: i,
                selectedGiftStyle: s,
                hasSeenCollectiblesInSkuSelect: a,
                isPrepaid: o,
                canContinue: l,
                selectedPlan: c,
                selectedPlanPrice: d,
                useCompactGiftComponents: f,
                handleClose: p,
                showTotal: h,
                switchPlanSelectComponent: m,
                warningComponent: E,
            } = e,
            g = () => {
                if ((0, A.lo)(t) === A.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != i)
                    return (0, r.jsx)(w.A, {
                        className: V.iX,
                        innerClassName: V.pt,
                        onTextChange: (e) => i(e),
                        pendingText: n,
                        currentText: n,
                    });
            },
            I = (e) => (0, r.jsx)(u.D0$, { label: F.intl.string(F.t["3E5hXj"]), children: e });
        if ((0, A.Ik)(t))
            return (0, r.jsxs)("div", {
                className: V.mh,
                children: [
                    (0, r.jsx)("div", { className: V.MU, children: null != s && (0, r.jsx)(M.t, {}) }),
                    (0, r.jsxs)("div", {
                        className: V.Tc,
                        children: [
                            (0, r.jsx)(P.Z, { className: f ? V.KW : void 0, giftRecipient: t }),
                            g(),
                            I(m),
                            E,
                            !a && (0, r.jsx)(_.A, { onClose: p }),
                        ],
                    }),
                ],
            });
        let T = l && h;
        return (0, r.jsxs)("div", {
            className: V.Du,
            children: [
                (0, r.jsx)(P.Z, { className: f ? V.KW : void 0, giftRecipient: t }),
                I(m),
                T &&
                    null != c &&
                    null != d &&
                    (0, r.jsx)(W, { selectedPlan: c, selectedPlanPrice: d, intervalType: null, isPrepaid: o }),
                E,
                !a && (0, r.jsx)(_.A, { onClose: p }),
            ],
        });
    },
    $ = (e) => {
        let {
                isPrepaid: t,
                premiumSubscription: n,
                setPlanId: r,
                thePriceOptions: i,
                shouldShowUpdatedPaymentModal: s,
                isEligibleForTrial: a,
                isPlansEligibleForDiscount: l,
                discountAmountOff: u,
            } = e,
            c = (0, o.bG)([m.default], () => m.default.locale),
            { isGift: d, giftRecipient: _ } = (0, f.Pv)(),
            p = d && (0, A.Ik)(_),
            { enabled: h } = N.A.getConfig({ location: "PremiumSwitchPlanSelectOption" });
        return {
            isPrepaid: t,
            selectPlan: r,
            premiumSubscription: d ? null : (n ?? null),
            priceOptions: i,
            shouldShowUpdatedPaymentModal: s,
            isEligibleForDiscount: l,
            discountAmountOff: u,
            isEligibleForTrial: a,
            userLocale: c,
            isGift: d,
            isCustomGift: p,
            shouldUseCalculatedDiscount: h,
            discountOffer: (0, O.O)(),
            isEligibleForBOGOPromotion: (0, y.cg)(),
        };
    },
    z = (e, t) => {
        let n = null != e && e.planId === t,
            r =
                n ||
                (t === k.gD.PREMIUM_MONTH_TIER_2 &&
                    null != e &&
                    [k.gD.PREMIUM_YEAR_TIER_0, k.gD.PREMIUM_YEAR_TIER_1].includes(e.planId));
        return { isCurrentPlan: n, disabled: r };
    },
    q = (e) => {
        let { planOptions: t, radioGroupRef: n, selectedPlan: s, radioGroupProps: a } = e,
            o = $(e),
            l = i.useMemo(
                () =>
                    t.map((t) => {
                        let { isCurrentPlan: n, disabled: i } = z(o.premiumSubscription, t);
                        return (0, r.jsx)(
                            x.Ay,
                            { planId: t, selected: s?.id === t, isCurrentPlan: n, disabled: e.disabled || i, ...o },
                            t,
                        );
                    }),
                [e.disabled, t, o, s],
            );
        return (0, r.jsx)("div", { ref: n, ...a, children: l });
    },
    Z = (e, t) => {
        let { subscriptionPeriodEnd: n, trialPeriodCopy: r } = t,
            i = e?.trial_id === k.Dw;
        return null == n
            ? null
            : i
              ? F.intl.format(F.t.nG95hA, { endDate: n })
              : F.intl.format(F.t.s4E7kb, { trialEnd: n, trialPeriod: r });
    },
    X = (e) => {
        let { shouldShowHRKEuroWarning: t, selectedPlanPrice: n } = e;
        return t && null != n
            ? (0, r.jsx)(c.A, {
                  message: F.intl.formatToPlainString(F.t["9hnZoK"], {
                      kunaPriceWithCurrency: (0, S.$g)(7.5345 * n.amount, G.Yr.HRK),
                  }),
              })
            : null;
    },
    Q = (e) => {
        let {
            selectedPlan: t,
            selectedPlanPrice: n,
            isPrepaid: i,
            shouldShowHRKEuroWarning: s,
            shouldShowUpdatedPaymentModal: a,
            showTotal: o,
            shouldShowTotalInSubscriptionFlow: l,
            previewTotalSectionClassName: u,
        } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                l &&
                    null != t &&
                    null != n &&
                    (0, r.jsx)(W, {
                        className: u,
                        selectedPlan: t,
                        selectedPlanPrice: n,
                        intervalType: t.interval,
                        isPrepaid: i,
                    }),
                X({ shouldShowHRKEuroWarning: s, selectedPlanPrice: n }),
                !a &&
                    o &&
                    (0, r.jsx)(c.A, {
                        message: F.intl.format(F.t.Om31w8, {
                            documentationLink: I.A.getArticleURL(U.MVz.LOCALIZED_PRICING),
                        }),
                    }),
            ],
        });
    };
function J(e) {
    let {
            disabled: t,
            selectedPlanId: n,
            planGroup: i,
            priceOptions: s,
            planOptions: a,
            subscriptionPeriodEnd: o,
            showTotal: l = !0,
            discountInvoiceItems: c,
            useCompactGiftComponents: d,
            handleClose: _,
        } = e,
        {
            skuId: f,
            setPlanId: p,
            selectedPlan: m,
            premiumSubscription: E,
            premiumSubscriptionPlan: g,
            isEligibleForBOGOPromotion: A,
            isGift: I,
            thePriceOptions: T,
            isEligibleForTrial: y,
            giftRecipient: N,
            customGiftMessage: C,
            setCustomGiftMessage: R,
            selectedGiftStyle: O,
            discountOffer: b,
            isPlansEligibleForDiscount: D,
            discountedPlanRegularPrice: w,
            hasSeenCollectiblesInSkuSelect: M,
            userTrialOffer: x,
            shouldShowUpdatedPaymentModal: P,
            discountAmountOff: U,
            isPrepaid: G,
            radioGroupRef: j,
            radioGroupProps: W,
            selectedPlanPrice: $,
            shouldShowHRKEuroWarning: z,
            shouldShowTotalInSubscriptionFlow: J,
            canContinue: ee,
            trialPeriodCopy: et,
        } = Y({
            selectedPlanId: n,
            priceOptions: s,
            planOptions: a,
            subscriptionPeriodEnd: o,
            discountInvoiceItems: c,
            showTotal: l,
        }),
        en = (0, v.ds)(),
        er = (e, t, i) =>
            P
                ? t
                    ? (0, r.jsxs)("div", {
                          children: [
                              (0, r.jsx)(u.Text, {
                                  variant: "text-sm/normal",
                                  className: V.Tz,
                                  children: Z(e, { subscriptionPeriodEnd: o, trialPeriodCopy: et }),
                              }),
                              (0, r.jsx)("hr", { className: V.RA }),
                          ],
                      })
                    : i && null != U && null != w && n === k.gD.PREMIUM_MONTH_TIER_2
                      ? (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(u.Text, {
                                    variant: "text-sm/normal",
                                    className: V.Tz,
                                    children: F.intl.format(F.t["nG7g/E"], {
                                        numMonths: b?.discount.user_usage_limit ?? "",
                                        discountedPrice: (0, S.$g)(w.amount - U, w.currency),
                                        regularPrice: (0, S.$g)(w.amount, w.currency),
                                    }),
                                }),
                                (0, r.jsx)("hr", { className: V.RA }),
                            ],
                        })
                      : void 0
                : (0, r.jsx)("div", { className: V.VZ, children: F.intl.string(F.t.a19jpU) }),
        ei = () =>
            (0, r.jsx)(q, {
                disabled: t,
                planOptions: a,
                radioGroupRef: j,
                radioGroupProps: W,
                isGift: I,
                isPrepaid: G,
                premiumSubscription: E,
                setPlanId: p,
                selectedPlan: m,
                thePriceOptions: T,
                shouldShowUpdatedPaymentModal: P,
                isEligibleForTrial: y,
                isPlansEligibleForDiscount: D,
                discountAmountOff: U,
            }),
        { showFractionalPremiumBanner: es, fractionalPremiumInfo: ea } = (0, h._V)({
            premiumSubscription: E,
            selectedPlanId: n,
            planGroup: i,
            isGift: I,
            fractionalPremiumInfoArgs: {
                forceFetch: !1,
                excludeReverseTrial: !1,
                excludeReverseTrialFromCountdown: !0,
            },
        });
    if (I)
        return (0, r.jsx)(K, {
            giftRecipient: N,
            customGiftMessage: C,
            setCustomGiftMessage: R,
            selectedGiftStyle: O,
            hasSeenCollectiblesInSkuSelect: M,
            isPrepaid: G,
            canContinue: ee,
            selectedPlan: m,
            selectedPlanPrice: $,
            useCompactGiftComponents: d,
            handleClose: _,
            showTotal: l,
            switchPlanSelectComponent: ei(),
            warningComponent: X({ shouldShowHRKEuroWarning: z, selectedPlanPrice: $ }),
        });
    let eo = !(y && es),
        el = B(g, { isEligibleForBOGOPromotion: A });
    return (0, r.jsxs)("div", {
        children: [
            es &&
                (0, r.jsx)(L.vi, {
                    fractionalPremiumInfo: ea,
                    enablePremiumBrandRefresh: !en,
                    variant: en ? L.uA.REVERSE_TRIAL : y ? L.uA.TRIAL : void 0,
                    trialPeriod: y ? et : void 0,
                    trialEnd: y ? o : void 0,
                }),
            el && !es && (0, r.jsx)("div", { className: V.G3, children: H(g, f) }),
            eo && er(x, y, D),
            ei(),
            Q({
                selectedPlan: m,
                selectedPlanPrice: $,
                isPrepaid: G,
                shouldShowHRKEuroWarning: z,
                shouldShowUpdatedPaymentModal: P,
                showTotal: l,
                shouldShowTotalInSubscriptionFlow: J,
            }),
        ],
    });
}
