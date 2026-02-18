"use strict";
n.d(t, { $p: () => X, O8: () => j, RO: () => Y, gH: () => q });
var r = n(627968),
    i = n(64700),
    s = n(284009),
    a = n.n(s),
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
    E = n(773669),
    g = n(594832),
    A = n(97352),
    I = n(45938),
    T = n(975571),
    S = n(927578),
    y = n(580630),
    v = n(666468),
    N = n(40185),
    C = n(906023),
    b = n(810498),
    R = n(477421),
    O = n(422936),
    D = n(735164),
    L = n(363476),
    w = n(156962),
    x = n(871181),
    M = n(318007),
    P = n(958720),
    k = n(285719),
    U = n(788868),
    G = n(652215),
    F = n(818348),
    V = n(985018),
    B = n(329221);
function H(e, t) {
    let n = V.intl.string(V.t.BYa62u),
        r = V.intl.string(V.t.CDa6Dq),
        i = (() => {
            switch (e.interval) {
                case U.WT.YEAR:
                    return n;
                case U.WT.MONTH:
                default:
                    return r;
            }
        })(),
        s = e.skuId;
    switch (t) {
        case U.pe.TIER_0:
            switch (s) {
                case U.pe.TIER_1:
                    return V.intl.string(V.t.q6mxDS);
                case U.pe.TIER_2:
                    return V.intl.string(V.t.seZVS0);
                default:
                    return i;
            }
        case U.pe.TIER_1:
            switch (s) {
                case U.pe.TIER_0:
                    return V.intl.string(V.t["7+u2zg"]);
                case U.pe.TIER_2:
                    return V.intl.string(V.t.NG2qcc);
                default:
                    return i;
            }
        case U.pe.TIER_2:
            switch (s) {
                case U.pe.TIER_0:
                case U.pe.TIER_1:
                    return V.intl.string(V.t["eB0/w9"]);
                case U.pe.TIER_2:
                    return e.interval === U.WT.MONTH
                        ? V.intl.formatToPlainString(V.t.RqUv86, { numFreeGuildSubscriptions: U.M4 })
                        : i;
                default:
                    return i;
            }
        default:
            return i;
    }
}
let j = () => {
        let { userTrialOffer: e } = (0, h.P5)(),
            t = e?.subscription_trial;
        return i.useMemo(
            () =>
                t?.interval === U.WT.DAY
                    ? t?.interval_count > 7
                        ? V.intl.string(V.t.Z1V2cs)
                        : V.intl.string(V.t.MI1rHs)
                    : V.intl.string(V.t["+S5lrV"]),
            [t],
        );
    },
    Y = (e) => {
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
                setSelectedPlanId: f,
                selectedSkuId: m,
                selectedPlan: E,
                priceOptions: T,
                userTrialOffer: y,
                isEligibleForTrial: C,
                discountOffer: O,
            } = (0, h.P5)(),
            {
                isGift: D,
                giftRecipient: L,
                selectedGiftStyle: w,
                customGiftMessage: x,
                setCustomGiftMessage: M,
                claimableRewards: P,
                setSelectedGiftingPromotionReward: k,
            } = (0, p.Pv)(),
            G = (0, b.kz)(E, D && (0, I.Ik)(L), P),
            V = (0, g.tA)({ location: "PremiumPlanSelectStep", giftRecipient: L, isGift: D }),
            B = _;
        a()(void 0 !== B, "should not be undefined");
        let [H, j] = (0, o.yK)([A.A], () => [null != B ? A.A.get(B.planId) : null, null != t ? A.A.get(t) : null]),
            Y = y?.subscription_trial,
            W = (0, N.cg)(),
            K = j ?? E,
            z = i.useCallback(
                (e) => {
                    f(e);
                },
                [f],
            ),
            $ = n ?? T;
        a()(null != $, "Price option has to be set");
        let q = O?.discount?.plan_ids,
            Z = null != O && r.some((e) => q?.includes(e)) && null != O.discount,
            X = (0, S.y8)(U.gD.PREMIUM_MONTH_TIER_2, !1, D, $);
        i.useEffect(() => {
            s && v.Ay.trackExposure({ location: "5f89bb_1" });
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
                G && null != P && P.length > 0 && k(P[0]);
            }, [P, k, G]);
        let { ref: J, ...ee } = (0, l._u)(),
            et = K?.id != null ? (0, S.y8)(K.id, !1, D, $) : void 0,
            { ipCountryCode: en } = (0, R.A)(),
            er = "HR" === en && null != et && et.currency === F.Yr.EUR,
            ei = (0, S.J$)($.paymentSourceId),
            es = !D && (Z || (null != Y && C && null != u));
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
            isEligibleForTrial: C,
            userTrialOffer: y,
            discountOffer: O,
            isPlansEligibleForDiscount: Z,
            discountedPlanRegularPrice: X,
            discountAmountOff: c
                ?.find((e) => e.subscriptionPlanId === U.gD.PREMIUM_MONTH_TIER_2)
                ?.discounts?.find((e) => e.type === d.iS.SUBSCRIPTION_PLAN)?.amount,
        };
    },
    W = (e) => {
        let { isPrepaid: t, selectedPlan: n, selectedPlanPrice: i, intervalType: s } = e;
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)("div", { className: B.T }),
                (0, r.jsx)(D.Sd, {
                    label: V.intl.string(V.t.txajQG),
                    value: (0, r.jsx)(L.A, {
                        price: i.amount,
                        currency: i.currency,
                        intervalType: s,
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
                selectedGiftStyle: s,
                hasSeenCollectiblesInSkuSelect: a,
                isPrepaid: o,
                canContinue: l,
                selectedPlan: c,
                selectedPlanPrice: d,
                useCompactGiftComponents: _,
                handleClose: p,
                showTotal: h,
                switchPlanSelectComponent: m,
                warningComponent: E,
            } = e,
            g = () => {
                if ((0, I.lo)(t) === I.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != i)
                    return (0, r.jsx)(x.A, {
                        className: B.iX,
                        innerClassName: B.pt,
                        onTextChange: (e) => i(e),
                        pendingText: n,
                        currentText: n,
                    });
            },
            A = (e) => (0, r.jsx)(u.D0$, { label: V.intl.string(V.t["3E5hXj"]), children: e });
        if ((0, I.Ik)(t))
            return (0, r.jsxs)("div", {
                className: B.mh,
                children: [
                    (0, r.jsx)("div", { className: B.MU, children: null != s && (0, r.jsx)(M.t, {}) }),
                    (0, r.jsxs)("div", {
                        className: B.Tc,
                        children: [
                            (0, r.jsx)(k.Z, { className: _ ? B.KW : void 0, giftRecipient: t }),
                            g(),
                            A(m),
                            E,
                            !a && (0, r.jsx)(f.A, { onClose: p }),
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
                E,
                !a && (0, r.jsx)(f.A, { onClose: p }),
            ],
        });
    },
    z = (e) => {
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
            c = (0, o.bG)([E.default], () => E.default.locale),
            { isGift: d, giftRecipient: _ } = (0, p.Pv)(),
            f = d && (0, I.Ik)(_),
            { enabled: h } = C.A.getCurrentConfig(
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
            isCustomGift: f,
            shouldUseCalculatedDiscount: h,
            discountOffer: (0, O.O)(),
            isEligibleForBOGOPromotion: (0, N.cg)(),
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
        let { ...t } = e,
            { planOptions: n, selectedPlan: s } = t,
            a = z(t),
            o = n.length > 0 ? U.hd[n[0]].premiumType : void 0,
            l = i.useMemo(
                () =>
                    n.map((e) => {
                        let { disabled: t } = $(a.premiumSubscription, e),
                            n = (0, P.R)({
                                planId: e,
                                disabled: t,
                                userLocale: a.userLocale,
                                discountOffer: a.discountOffer,
                                priceOptions: a.priceOptions,
                                isGift: a.isGift,
                                shouldUseCalculatedDiscount: a.shouldUseCalculatedDiscount,
                            });
                        return {
                            value: n.id,
                            primaryText: n.planName,
                            badgeText: n.promoText ?? void 0,
                            subText: n.priceText,
                            isDisabled: n.isDisabled,
                        };
                    }),
                [n, a],
            );
        return null == o
            ? null
            : (0, r.jsx)(_.me, {
                  headingComponent: (0, r.jsx)(_.ec, { size: "sm", color: "text-strong", premiumType: o }),
                  planRadioOptions: l,
                  value: s?.id ?? "",
                  onChange: (e) => a.selectPlan(e.value),
              });
    },
    Z = (e) => {
        let { planOptions: t, radioGroupRef: n, selectedPlan: s, radioGroupProps: a } = e,
            o = z(e),
            l = i.useMemo(
                () =>
                    t.map((e) => {
                        let { isCurrentPlan: t, disabled: n } = $(o.premiumSubscription, e);
                        return (0, r.jsx)(
                            P.A,
                            { planId: e, selected: s?.id === e, isCurrentPlan: t, disabled: n, ...o },
                            e,
                        );
                    }),
                [t, o, s],
            );
        return (0, r.jsx)("div", { ref: n, ...a, children: l });
    };
function X(e) {
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
            setPlanId: h,
            selectedPlan: E,
            premiumSubscription: g,
            premiumSubscriptionPlan: A,
            isGift: I,
            thePriceOptions: S,
            isEligibleForTrial: v,
            giftRecipient: N,
            customGiftMessage: C,
            setCustomGiftMessage: b,
            selectedGiftStyle: R,
            discountOffer: O,
            isPlansEligibleForDiscount: D,
            discountedPlanRegularPrice: L,
            hasSeenCollectiblesInSkuSelect: x,
            isEligibleForBOGOPromotion: M,
            userTrialOffer: P,
            shouldShowUpdatedPaymentModal: k,
            discountAmountOff: z,
            isPrepaid: $,
            radioGroupRef: q,
            radioGroupProps: X,
            selectedPlanPrice: Q,
            shouldShowHRKEuroWarning: J,
            canContinue: ee,
        } = Y({
            selectedPlanId: t,
            priceOptions: i,
            planOptions: s,
            eligibleForMultiMonthPlans: a,
            subscriptionPeriodEnd: o,
            discountInvoiceItems: d,
        }),
        et = j(),
        en = (e, n, i) => {
            if (!k) return (0, r.jsx)("div", { className: B.VZ, children: V.intl.string(V.t.a19jpU) });
            if (n) {
                let t = e?.trial_id === U.Dw;
                return (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            className: B.Tz,
                            children: t
                                ? V.intl.format(V.t.nG95hA, { endDate: o })
                                : V.intl.format(V.t.s4E7kb, { trialEnd: o, trialPeriod: et }),
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
                            children: V.intl.format(V.t["nG7g/E"], {
                                numMonths: O?.discount.user_usage_limit ?? "",
                                discountedPrice: (0, y.$g)(L.amount - z, L.currency),
                                regularPrice: (0, y.$g)(L.amount, L.currency),
                            }),
                        }),
                        (0, r.jsx)("hr", { className: B.RA }),
                    ],
                });
        },
        er = () =>
            (0, r.jsx)(Z, {
                planOptions: s,
                radioGroupRef: q,
                radioGroupProps: X,
                isGift: I,
                isPrepaid: $,
                premiumSubscription: g,
                setPlanId: h,
                selectedPlan: E,
                thePriceOptions: S,
                shouldShowUpdatedPaymentModal: k,
                isEligibleForTrial: v,
                isPlansEligibleForDiscount: D,
                discountAmountOff: z,
            }),
        ei = () =>
            J && null != Q
                ? (0, r.jsx)(c.A, {
                      message: V.intl.formatToPlainString(V.t["9hnZoK"], {
                          kunaPriceWithCurrency: (0, y.$g)(7.5345 * Q.amount, F.Yr.HRK),
                      }),
                  })
                : null,
        { showFractionalPremiumBanner: es, fractionalPremiumInfo: ea } = (0, m._V)({
            premiumSubscription: g,
            selectedPlanId: t,
            planGroup: n,
            isGift: I,
        });
    if (I)
        return (0, r.jsx)(K, {
            giftRecipient: N,
            customGiftMessage: C,
            setCustomGiftMessage: b,
            selectedGiftStyle: R,
            hasSeenCollectiblesInSkuSelect: x,
            isPrepaid: $,
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
                (0, r.jsx)(w.vi, {
                    fractionalPremiumInfo: ea,
                    enablePremiumBrandRefresh: !0,
                    variant: v ? w.uA.TRIAL : void 0,
                    trialPeriod: v ? et : void 0,
                    trialEnd: v ? o : void 0,
                }),
            null != A && !es && !M && (0, r.jsx)("div", { className: B.G3, children: H(A, p) }),
            el && en(P, v, D),
            er(),
            eo &&
                null != E &&
                null != Q &&
                (0, r.jsx)(W, { selectedPlan: E, selectedPlanPrice: Q, intervalType: E.interval, isPrepaid: $ }),
            ei(),
            !k &&
                l &&
                (0, r.jsx)(c.A, {
                    message: V.intl.format(V.t.Om31w8, {
                        documentationLink: T.A.getArticleURL(G.MVz.LOCALIZED_PRICING),
                    }),
                }),
        ],
    });
}
