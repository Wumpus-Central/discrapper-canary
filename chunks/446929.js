"use strict";
n.d(t, { $p: () => Z, O8: () => H, RO: () => Y, fJ: () => q });
var r = n(627968),
    i = n(64700),
    a = n(284009),
    s = n.n(a),
    o = n(311907),
    l = n(421380),
    u = n(397927),
    c = n(726656),
    d = n(155718),
    _ = n(93159),
    f = n(448811),
    p = n(937008),
    h = n(156312),
    m = n(222707),
    g = n(773669),
    E = n(594832),
    A = n(97352),
    I = n(45938),
    T = n(975571),
    y = n(927578),
    S = n(580630),
    v = n(666468),
    C = n(40185),
    b = n(906023),
    N = n(810498),
    R = n(477421),
    O = n(422936),
    D = n(735164),
    L = n(363476),
    w = n(934581),
    x = n(871181),
    P = n(318007),
    M = n(958720),
    k = n(285719),
    U = n(788868),
    G = n(652215),
    V = n(818348),
    F = n(985018),
    B = n(329221);
function j(e, t) {
    let n = F.intl.string(F.t.BYa62u),
        r = F.intl.string(F.t.CDa6Dq),
        i = (() => {
            switch (e.interval) {
                case U.WT.YEAR:
                    return n;
                case U.WT.MONTH:
                default:
                    return r;
            }
        })(),
        a = e.skuId;
    switch (t) {
        case U.pe.TIER_0:
            switch (a) {
                case U.pe.TIER_1:
                    return F.intl.string(F.t.q6mxDS);
                case U.pe.TIER_2:
                    return F.intl.string(F.t.seZVS0);
                default:
                    return i;
            }
        case U.pe.TIER_1:
            switch (a) {
                case U.pe.TIER_0:
                    return F.intl.string(F.t["7+u2zg"]);
                case U.pe.TIER_2:
                    return F.intl.string(F.t.NG2qcc);
                default:
                    return i;
            }
        case U.pe.TIER_2:
            switch (a) {
                case U.pe.TIER_0:
                case U.pe.TIER_1:
                    return F.intl.string(F.t["eB0/w9"]);
                case U.pe.TIER_2:
                    return e.interval === U.WT.MONTH
                        ? F.intl.formatToPlainString(F.t.RqUv86, { numFreeGuildSubscriptions: U.M4 })
                        : i;
                default:
                    return i;
            }
        default:
            return i;
    }
}
let H = () => {
        let { userTrialOffer: e } = (0, h.P5)(),
            t = e?.subscription_trial;
        return i.useMemo(
            () =>
                t?.interval === U.WT.DAY
                    ? t?.interval_count > 7
                        ? F.intl.string(F.t.Z1V2cs)
                        : F.intl.string(F.t.MI1rHs)
                    : F.intl.string(F.t["+S5lrV"]),
            [t],
        );
    },
    Y = (e) => {
        let {
                selectedPlanId: t,
                priceOptions: n,
                planOptions: r,
                eligibleForMultiMonthPlans: a,
                subscriptionPeriodEnd: u,
                discountInvoiceItems: c,
            } = e,
            {
                activeSubscription: _,
                setSelectedPlanId: f,
                selectedSkuId: m,
                selectedPlan: g,
                priceOptions: T,
                userTrialOffer: S,
                isEligibleForTrial: b,
                discountOffer: O,
            } = (0, h.P5)(),
            {
                isGift: D,
                giftRecipient: L,
                selectedGiftStyle: w,
                customGiftMessage: x,
                setCustomGiftMessage: P,
                claimableRewards: M,
                setSelectedGiftingPromotionReward: k,
            } = (0, p.Pv)(),
            G = (0, N.kz)(g, D && (0, I.Ik)(L), M),
            F = (0, E.tA)({ location: "PremiumPlanSelectStep", giftRecipient: L, isGift: D }),
            B = _;
        s()(void 0 !== B, "should not be undefined");
        let [j, H] = (0, o.yK)([A.A], () => [null != B ? A.A.get(B.planId) : null, null != t ? A.A.get(t) : null]),
            Y = S?.subscription_trial,
            W = (0, C.cg)(),
            K = H ?? g,
            z = i.useCallback(
                (e) => {
                    f(e);
                },
                [f],
            ),
            $ = n ?? T;
        s()(null != $, "Price option has to be set");
        let q = O?.discount?.plan_ids,
            Z = null != O && r.some((e) => q?.includes(e)) && null != O.discount,
            Q = (0, y.y8)(U.gD.PREMIUM_MONTH_TIER_2, !1, D, $);
        i.useEffect(() => {
            a && v.Ay.trackExposure({ location: "5f89bb_1" });
        }, [a]);
        let X = K?.id != null && r.includes(K.id);
        i.useEffect(() => {
            if (!X) {
                if (null == j || D) z(r[0]);
                else if (null != j) {
                    let e = r.find((e) => e !== j.id);
                    null != e && z(e);
                }
            }
        }, [X, D, r, j, z]),
            i.useEffect(() => {
                G && null != M && M.length > 0 && k(M[0]);
            }, [M, k, G]);
        let { ref: J, ...ee } = (0, l._u)(),
            et = K?.id != null ? (0, y.y8)(K.id, !1, D, $) : void 0,
            { ipCountryCode: en } = (0, R.A)(),
            er = "HR" === en && null != et && et.currency === V.Yr.EUR,
            ei = (0, y.J$)($.paymentSourceId),
            ea = !D && (Z || (null != Y && b && null != u));
        return {
            skuId: m,
            setPlanId: z,
            selectedPlan: K,
            selectedPlanPrice: et,
            premiumSubscriptionPlan: j,
            premiumSubscription: B,
            thePriceOptions: $,
            hasSeenCollectiblesInSkuSelect: F,
            shouldShowUpdatedPaymentModal: ea,
            shouldShowHRKEuroWarning: er,
            canContinue: X,
            isPrepaid: ei,
            radioGroupRef: J,
            radioGroupProps: ee,
            isGift: D,
            giftRecipient: L,
            customGiftMessage: x,
            setCustomGiftMessage: P,
            selectedGiftStyle: w,
            isEligibleForBOGOPromotion: W,
            isEligibleForTrial: b,
            userTrialOffer: S,
            discountOffer: O,
            isPlansEligibleForDiscount: Z,
            discountedPlanRegularPrice: Q,
            discountAmountOff: c
                ?.find((e) => e.subscriptionPlanId === U.gD.PREMIUM_MONTH_TIER_2)
                ?.discounts?.find((e) => e.type === d.iS.SUBSCRIPTION_PLAN)?.amount,
        };
    },
    W = (e) => {
        let { isPrepaid: t, selectedPlan: n, selectedPlanPrice: i, intervalType: a } = e;
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)("div", { className: B.T }),
                (0, r.jsx)(D.Sd, {
                    label: F.intl.string(F.t.txajQG),
                    value: (0, r.jsx)(L.A, {
                        price: i.amount,
                        currency: i.currency,
                        intervalType: a,
                        intervalCount: n.intervalCount,
                        isPrepaidPaymentSource: t,
                    }),
                    className: B.M3,
                }),
            ],
        });
    },
    K = (e) => {
        let {
                giftRecipient: t,
                customGiftMessage: n,
                setCustomGiftMessage: i,
                selectedGiftStyle: a,
                hasSeenCollectiblesInSkuSelect: s,
                isPrepaid: o,
                canContinue: l,
                selectedPlan: c,
                selectedPlanPrice: d,
                useCompactGiftComponents: _,
                handleClose: p,
                showTotal: h,
                switchPlanSelectComponent: m,
                warningComponent: g,
            } = e,
            E = () => {
                if ((0, I.lo)(t) === I.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != i)
                    return (0, r.jsx)(x.A, {
                        className: B.iX,
                        innerClassName: B.pt,
                        onTextChange: (e) => i(e),
                        pendingText: n,
                        currentText: n,
                    });
            },
            A = (e) => (0, r.jsx)(u.D0$, { label: F.intl.string(F.t["3E5hXj"]), children: e });
        if ((0, I.Ik)(t))
            return (0, r.jsxs)("div", {
                className: B.mh,
                children: [
                    (0, r.jsx)("div", { className: B.MU, children: null != a && (0, r.jsx)(P.t, {}) }),
                    (0, r.jsxs)("div", {
                        className: B.Tc,
                        children: [
                            (0, r.jsx)(k.Z, { className: _ ? B.KW : void 0, giftRecipient: t }),
                            E(),
                            A(m),
                            g,
                            !s && (0, r.jsx)(f.A, { onClose: p }),
                        ],
                    }),
                ],
            });
        let T = l && h;
        return (0, r.jsxs)("div", {
            className: B.Du,
            children: [
                (0, r.jsx)(k.Z, { className: _ ? B.KW : void 0, giftRecipient: t }),
                A(m),
                T &&
                    null != c &&
                    null != d &&
                    (0, r.jsx)(W, { selectedPlan: c, selectedPlanPrice: d, intervalType: null, isPrepaid: o }),
                g,
                !s && (0, r.jsx)(f.A, { onClose: p }),
            ],
        });
    },
    z = (e) => {
        let {
                isPrepaid: t,
                premiumSubscription: n,
                setPlanId: r,
                thePriceOptions: i,
                shouldShowUpdatedPaymentModal: a,
                isEligibleForTrial: s,
                isPlansEligibleForDiscount: l,
                discountAmountOff: u,
            } = e,
            c = (0, o.bG)([g.default], () => g.default.locale),
            { isGift: d, giftRecipient: _ } = (0, p.Pv)(),
            f = d && (0, I.Ik)(_),
            { enabled: h } = b.A.getCurrentConfig(
                { location: "PremiumSwitchPlanSelectOption" },
                { autoTrackExposure: !1 },
            );
        return {
            isPrepaid: t,
            selectPlan: r,
            premiumSubscription: d ? null : (n ?? null),
            priceOptions: i,
            shouldShowUpdatedPaymentModal: a,
            isEligibleForDiscount: l,
            discountAmountOff: u,
            isEligibleForTrial: s,
            userLocale: c,
            isCustomGift: f,
            shouldUseCalculatedDiscount: h,
            discountOffer: (0, O.O)(),
            isEligibleForBOGOPromotion: (0, C.cg)(),
        };
    },
    $ = (e, t) => {
        let n = null != e && e.planId === t,
            r =
                n ||
                (t === U.gD.PREMIUM_MONTH_TIER_2 &&
                    null != e &&
                    [U.gD.PREMIUM_YEAR_TIER_0, U.gD.PREMIUM_YEAR_TIER_1].includes(e.planId));
        return { isCurrentPlan: n, disabled: r };
    },
    q = (e) => {
        let { shouldUseUnifiedCheckoutUI: t, ...n } = e,
            { planOptions: a, radioGroupRef: s, selectedPlan: o, radioGroupProps: l } = n,
            u = z(n),
            c = i.useMemo(
                () =>
                    a.map((e) => {
                        let { isCurrentPlan: n, disabled: i } = $(u.premiumSubscription, e);
                        return (0, r.jsx)(
                            M.A,
                            {
                                planId: e,
                                selected: o?.id === e,
                                isCurrentPlan: n,
                                disabled: i,
                                shouldUseUnifiedCheckoutUI: t,
                                ...u,
                            },
                            e,
                        );
                    }),
                [a, t, u, o],
            ),
            d = a.length > 0 ? U.hd[a[0]].premiumType : void 0;
        return t
            ? null == d
                ? null
                : (0, r.jsx)(_.q7, {
                      headingComponent: (0, r.jsx)(_.ec, { size: "sm", color: "text-strong", premiumType: d }),
                      selection: o?.id ?? "",
                      onChange: u.selectPlan,
                      planOptionsComponents: c,
                  })
            : (0, r.jsx)("div", { ref: s, ...l, children: c });
    };
function Z(e) {
    let {
            selectedPlanId: t,
            planGroup: n,
            priceOptions: i,
            planOptions: a,
            eligibleForMultiMonthPlans: s,
            subscriptionPeriodEnd: o,
            showTotal: l = !0,
            discountInvoiceItems: d,
            useCompactGiftComponents: _,
            handleClose: f,
        } = e,
        {
            skuId: p,
            setPlanId: h,
            selectedPlan: g,
            premiumSubscription: E,
            premiumSubscriptionPlan: A,
            isGift: I,
            thePriceOptions: y,
            isEligibleForTrial: v,
            giftRecipient: C,
            customGiftMessage: b,
            setCustomGiftMessage: N,
            selectedGiftStyle: R,
            discountOffer: O,
            isPlansEligibleForDiscount: D,
            discountedPlanRegularPrice: L,
            hasSeenCollectiblesInSkuSelect: x,
            isEligibleForBOGOPromotion: P,
            userTrialOffer: M,
            shouldShowUpdatedPaymentModal: k,
            discountAmountOff: z,
            isPrepaid: $,
            radioGroupRef: Z,
            radioGroupProps: Q,
            selectedPlanPrice: X,
            shouldShowHRKEuroWarning: J,
            canContinue: ee,
        } = Y({
            selectedPlanId: t,
            priceOptions: i,
            planOptions: a,
            eligibleForMultiMonthPlans: s,
            subscriptionPeriodEnd: o,
            discountInvoiceItems: d,
        }),
        et = H(),
        en = (e, n, i) => {
            if (!k) return (0, r.jsx)("div", { className: B.VZ, children: F.intl.string(F.t.a19jpU) });
            if (n) {
                let t = e?.trial_id === U.Dw;
                return (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            className: B.Tz,
                            children: t
                                ? F.intl.format(F.t.nG95hA, { endDate: o })
                                : F.intl.format(F.t.s4E7kb, { trialEnd: o, trialPeriod: et }),
                        }),
                        (0, r.jsx)("hr", { className: B.RA }),
                    ],
                });
            }
            if (i && null != z && null != L && t === U.gD.PREMIUM_MONTH_TIER_2)
                return (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            className: B.Tz,
                            children: F.intl.format(F.t["nG7g/E"], {
                                numMonths: O?.discount.user_usage_limit ?? "",
                                discountedPrice: (0, S.$g)(L.amount - z, L.currency),
                                regularPrice: (0, S.$g)(L.amount, L.currency),
                            }),
                        }),
                        (0, r.jsx)("hr", { className: B.RA }),
                    ],
                });
        },
        er = () =>
            (0, r.jsx)(q, {
                planOptions: a,
                radioGroupRef: Z,
                radioGroupProps: Q,
                isGift: I,
                isPrepaid: $,
                premiumSubscription: E,
                setPlanId: h,
                selectedPlan: g,
                thePriceOptions: y,
                shouldShowUpdatedPaymentModal: k,
                isEligibleForTrial: v,
                isPlansEligibleForDiscount: D,
                discountAmountOff: z,
            }),
        ei = () =>
            J && null != X
                ? (0, r.jsx)(c.A, {
                      message: F.intl.formatToPlainString(F.t["9hnZoK"], {
                          kunaPriceWithCurrency: (0, S.$g)(7.5345 * X.amount, V.Yr.HRK),
                      }),
                  })
                : null,
        { showFractionalPremiumBanner: ea, fractionalPremiumInfo: es } = (0, m._V)({
            premiumSubscription: E,
            selectedPlanId: t,
            planGroup: n,
            isGift: I,
        });
    if (I)
        return (0, r.jsx)(K, {
            giftRecipient: C,
            customGiftMessage: b,
            setCustomGiftMessage: N,
            selectedGiftStyle: R,
            hasSeenCollectiblesInSkuSelect: x,
            isPrepaid: $,
            canContinue: ee,
            selectedPlan: g,
            selectedPlanPrice: X,
            useCompactGiftComponents: _,
            handleClose: f,
            showTotal: l,
            switchPlanSelectComponent: er(),
            warningComponent: ei(),
        });
    let eo = !v && !D && ee && l,
        el = !(v && ea);
    return (0, r.jsxs)("div", {
        className: B.Du,
        children: [
            ea &&
                (0, r.jsx)(w.vi, {
                    fractionalPremiumInfo: es,
                    enablePremiumBrandRefresh: !0,
                    variant: v ? w.uA.TRIAL : void 0,
                    trialPeriod: v ? et : void 0,
                    trialEnd: v ? o : void 0,
                }),
            null != A && !ea && !P && (0, r.jsx)("div", { className: B.G3, children: j(A, p) }),
            el && en(M, v, D),
            er(),
            eo &&
                null != g &&
                null != X &&
                (0, r.jsx)(W, { selectedPlan: g, selectedPlanPrice: X, intervalType: g.interval, isPrepaid: $ }),
            ei(),
            !k &&
                l &&
                (0, r.jsx)(c.A, {
                    message: F.intl.format(F.t.Om31w8, {
                        documentationLink: T.A.getArticleURL(G.MVz.LOCALIZED_PRICING),
                    }),
                }),
        ],
    });
}
