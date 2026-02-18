"use strict";
n.d(t, { $p: () => q, O8: () => H, RO: () => j, Rx: () => K, cD: () => z });
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
    y = n(666468),
    v = n(40185),
    N = n(906023),
    C = n(810498),
    b = n(477421),
    R = n(422936),
    O = n(735164),
    D = n(363476),
    L = n(156962),
    w = n(871181),
    x = n(318007),
    M = n(958720),
    P = n(285719),
    k = n(788868),
    U = n(652215),
    G = n(818348),
    F = n(985018),
    V = n(329221);
function B(e, t) {
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
let H = () => {
        let { userTrialOffer: e } = (0, p.P5)(),
            t = e?.subscription_trial;
        return i.useMemo(
            () =>
                t?.interval === k.WT.DAY
                    ? t?.interval_count > 7
                        ? F.intl.string(F.t.Z1V2cs)
                        : F.intl.string(F.t.MI1rHs)
                    : F.intl.string(F.t["+S5lrV"]),
            [t],
        );
    },
    j = (e) => {
        let {
                selectedPlanId: t,
                priceOptions: n,
                planOptions: r,
                eligibleForMultiMonthPlans: s,
                subscriptionPeriodEnd: u,
                discountInvoiceItems: c,
            } = e,
            {
                activeSubscription: _,
                setSelectedPlanId: h,
                selectedSkuId: m,
                selectedPlan: I,
                priceOptions: S,
                userTrialOffer: N,
                isEligibleForTrial: R,
                discountOffer: O,
            } = (0, p.P5)(),
            {
                isGift: D,
                giftRecipient: L,
                selectedGiftStyle: w,
                customGiftMessage: x,
                setCustomGiftMessage: M,
                claimableRewards: P,
                setSelectedGiftingPromotionReward: U,
            } = (0, f.Pv)(),
            F = (0, C.kz)(I, D && (0, A.Ik)(L), P),
            V = (0, E.tA)({ location: "PremiumPlanSelectStep", giftRecipient: L, isGift: D }),
            B = _;
        a()(void 0 !== B, "should not be undefined");
        let [H, j] = (0, o.yK)([g.A], () => [null != B ? g.A.get(B.planId) : null, null != t ? g.A.get(t) : null]),
            Y = N?.subscription_trial,
            W = (0, v.cg)(),
            K = j ?? I,
            z = i.useCallback(
                (e) => {
                    h(e);
                },
                [h],
            ),
            $ = n ?? S;
        a()(null != $, "Price option has to be set");
        let q = O?.discount?.plan_ids,
            Z = null != O && r.some((e) => q?.includes(e)) && null != O.discount,
            X = (0, T.y8)(k.gD.PREMIUM_MONTH_TIER_2, !1, D, $);
        i.useEffect(() => {
            s && y.Ay.trackExposure({ location: "5f89bb_1" });
        }, [s]);
        let Q = K?.id != null && r.includes(K.id);
        i.useEffect(() => {
            if (!Q) {
                if (null == H || D) z(r[0]);
                else if (null != H) {
                    let e = r.find((e) => e !== H.id);
                    null != e && z(e);
                }
            }
        }, [Q, D, r, H, z]),
            i.useEffect(() => {
                F && null != P && P.length > 0 && U(P[0]);
            }, [P, U, F]);
        let { ref: J, ...ee } = (0, l._u)(),
            et = K?.id != null ? (0, T.y8)(K.id, !1, D, $) : void 0,
            { ipCountryCode: en } = (0, b.A)(),
            er = "HR" === en && null != et && et.currency === G.Yr.EUR,
            ei = (0, T.J$)($.paymentSourceId),
            es = !D && (Z || (null != Y && R && null != u));
        return {
            skuId: m,
            setPlanId: z,
            selectedPlan: K,
            selectedPlanPrice: et,
            premiumSubscriptionPlan: H,
            premiumSubscription: B,
            thePriceOptions: $,
            hasSeenCollectiblesInSkuSelect: V,
            shouldShowUpdatedPaymentModal: es,
            shouldShowHRKEuroWarning: er,
            canContinue: Q,
            isPrepaid: ei,
            radioGroupRef: J,
            radioGroupProps: ee,
            isGift: D,
            giftRecipient: L,
            customGiftMessage: x,
            setCustomGiftMessage: M,
            selectedGiftStyle: w,
            isEligibleForBOGOPromotion: W,
            isEligibleForTrial: R,
            userTrialOffer: N,
            discountOffer: O,
            isPlansEligibleForDiscount: Z,
            discountedPlanRegularPrice: X,
            discountAmountOff: c
                ?.find((e) => e.subscriptionPlanId === k.gD.PREMIUM_MONTH_TIER_2)
                ?.discounts?.find((e) => e.type === d.iS.SUBSCRIPTION_PLAN)?.amount,
        };
    },
    Y = (e) => {
        let { isPrepaid: t, selectedPlan: n, selectedPlanPrice: i, intervalType: s } = e;
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)("div", { className: V.T }),
                (0, r.jsx)(O.Sd, {
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
    W = (e) => {
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
                    (0, r.jsx)("div", { className: V.MU, children: null != s && (0, r.jsx)(x.t, {}) }),
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
                    (0, r.jsx)(Y, { selectedPlan: c, selectedPlanPrice: d, intervalType: null, isPrepaid: o }),
                E,
                !a && (0, r.jsx)(_.A, { onClose: p }),
            ],
        });
    },
    K = (e) => {
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
            { enabled: h } = N.A.getCurrentConfig(
                { location: "PremiumSwitchPlanSelectOption" },
                { autoTrackExposure: !1 },
            );
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
            discountOffer: (0, R.O)(),
            isEligibleForBOGOPromotion: (0, v.cg)(),
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
    $ = (e) => {
        let { planOptions: t, radioGroupRef: n, selectedPlan: s, radioGroupProps: a } = e,
            o = K(e),
            l = i.useMemo(
                () =>
                    t.map((e) => {
                        let { isCurrentPlan: t, disabled: n } = z(o.premiumSubscription, e);
                        return (0, r.jsx)(
                            M.A,
                            { planId: e, selected: s?.id === e, isCurrentPlan: t, disabled: n, ...o },
                            e,
                        );
                    }),
                [t, o, s],
            );
        return (0, r.jsx)("div", { ref: n, ...a, children: l });
    };
function q(e) {
    let {
            selectedPlanId: t,
            planGroup: n,
            priceOptions: i,
            planOptions: s,
            eligibleForMultiMonthPlans: a,
            subscriptionPeriodEnd: o,
            showTotal: l = !0,
            discountInvoiceItems: d,
            useCompactGiftComponents: _,
            handleClose: f,
        } = e,
        {
            skuId: p,
            setPlanId: m,
            selectedPlan: E,
            premiumSubscription: g,
            premiumSubscriptionPlan: A,
            isGift: T,
            thePriceOptions: y,
            isEligibleForTrial: v,
            giftRecipient: N,
            customGiftMessage: C,
            setCustomGiftMessage: b,
            selectedGiftStyle: R,
            discountOffer: O,
            isPlansEligibleForDiscount: D,
            discountedPlanRegularPrice: w,
            hasSeenCollectiblesInSkuSelect: x,
            isEligibleForBOGOPromotion: M,
            userTrialOffer: P,
            shouldShowUpdatedPaymentModal: K,
            discountAmountOff: z,
            isPrepaid: q,
            radioGroupRef: Z,
            radioGroupProps: X,
            selectedPlanPrice: Q,
            shouldShowHRKEuroWarning: J,
            canContinue: ee,
        } = j({
            selectedPlanId: t,
            priceOptions: i,
            planOptions: s,
            eligibleForMultiMonthPlans: a,
            subscriptionPeriodEnd: o,
            discountInvoiceItems: d,
        }),
        et = H(),
        en = (e, n, i) => {
            if (!K) return (0, r.jsx)("div", { className: V.VZ, children: F.intl.string(F.t.a19jpU) });
            if (n) {
                let t = e?.trial_id === k.Dw;
                return (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            className: V.Tz,
                            children: t
                                ? F.intl.format(F.t.nG95hA, { endDate: o })
                                : F.intl.format(F.t.s4E7kb, { trialEnd: o, trialPeriod: et }),
                        }),
                        (0, r.jsx)("hr", { className: V.RA }),
                    ],
                });
            }
            if (i && null != z && null != w && t === k.gD.PREMIUM_MONTH_TIER_2)
                return (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            className: V.Tz,
                            children: F.intl.format(F.t["nG7g/E"], {
                                numMonths: O?.discount.user_usage_limit ?? "",
                                discountedPrice: (0, S.$g)(w.amount - z, w.currency),
                                regularPrice: (0, S.$g)(w.amount, w.currency),
                            }),
                        }),
                        (0, r.jsx)("hr", { className: V.RA }),
                    ],
                });
        },
        er = () =>
            (0, r.jsx)($, {
                planOptions: s,
                radioGroupRef: Z,
                radioGroupProps: X,
                isGift: T,
                isPrepaid: q,
                premiumSubscription: g,
                setPlanId: m,
                selectedPlan: E,
                thePriceOptions: y,
                shouldShowUpdatedPaymentModal: K,
                isEligibleForTrial: v,
                isPlansEligibleForDiscount: D,
                discountAmountOff: z,
            }),
        ei = () =>
            J && null != Q
                ? (0, r.jsx)(c.A, {
                      message: F.intl.formatToPlainString(F.t["9hnZoK"], {
                          kunaPriceWithCurrency: (0, S.$g)(7.5345 * Q.amount, G.Yr.HRK),
                      }),
                  })
                : null,
        { showFractionalPremiumBanner: es, fractionalPremiumInfo: ea } = (0, h._V)({
            premiumSubscription: g,
            selectedPlanId: t,
            planGroup: n,
            isGift: T,
        });
    if (T)
        return (0, r.jsx)(W, {
            giftRecipient: N,
            customGiftMessage: C,
            setCustomGiftMessage: b,
            selectedGiftStyle: R,
            hasSeenCollectiblesInSkuSelect: x,
            isPrepaid: q,
            canContinue: ee,
            selectedPlan: E,
            selectedPlanPrice: Q,
            useCompactGiftComponents: _,
            handleClose: f,
            showTotal: l,
            switchPlanSelectComponent: er(),
            warningComponent: ei(),
        });
    let eo = !v && !D && ee && l,
        el = !(v && es);
    return (0, r.jsxs)("div", {
        children: [
            es &&
                (0, r.jsx)(L.vi, {
                    fractionalPremiumInfo: ea,
                    enablePremiumBrandRefresh: !0,
                    variant: v ? L.uA.TRIAL : void 0,
                    trialPeriod: v ? et : void 0,
                    trialEnd: v ? o : void 0,
                }),
            null != A && !es && !M && (0, r.jsx)("div", { className: V.G3, children: B(A, p) }),
            el && en(P, v, D),
            er(),
            eo &&
                null != E &&
                null != Q &&
                (0, r.jsx)(Y, { selectedPlan: E, selectedPlanPrice: Q, intervalType: E.interval, isPrepaid: q }),
            ei(),
            !K &&
                l &&
                (0, r.jsx)(c.A, {
                    message: F.intl.format(F.t.Om31w8, {
                        documentationLink: I.A.getArticleURL(U.MVz.LOCALIZED_PRICING),
                    }),
                }),
        ],
    });
}
