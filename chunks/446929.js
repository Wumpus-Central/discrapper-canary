"use strict";
n.d(t, { $p: () => Q, O8: () => Y, RO: () => W, gH: () => X });
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
    h = n(937008),
    p = n(156312),
    g = n(222707),
    E = n(773669),
    A = n(594832),
    I = n(97352),
    T = n(45938),
    y = n(975571),
    S = n(927578),
    v = n(580630),
    C = n(666468),
    b = n(40185),
    N = n(906023),
    R = n(810498),
    O = n(477421),
    D = n(422936),
    L = n(735164),
    w = n(363476),
    x = n(934581),
    P = n(871181),
    M = n(318007),
    k = n(958720),
    U = n(285719),
    G = n(788868),
    F = n(652215),
    V = n(818348),
    B = n(985018),
    j = n(329221);
function H(e, t) {
    let n = B.intl.string(B.t.BYa62u),
        r = B.intl.string(B.t.CDa6Dq),
        i = (() => {
            switch (e.interval) {
                case G.WT.YEAR:
                    return n;
                case G.WT.MONTH:
                default:
                    return r;
            }
        })(),
        a = e.skuId;
    switch (t) {
        case G.pe.TIER_0:
            switch (a) {
                case G.pe.TIER_1:
                    return B.intl.string(B.t.q6mxDS);
                case G.pe.TIER_2:
                    return B.intl.string(B.t.seZVS0);
                default:
                    return i;
            }
        case G.pe.TIER_1:
            switch (a) {
                case G.pe.TIER_0:
                    return B.intl.string(B.t["7+u2zg"]);
                case G.pe.TIER_2:
                    return B.intl.string(B.t.NG2qcc);
                default:
                    return i;
            }
        case G.pe.TIER_2:
            switch (a) {
                case G.pe.TIER_0:
                case G.pe.TIER_1:
                    return B.intl.string(B.t["eB0/w9"]);
                case G.pe.TIER_2:
                    return e.interval === G.WT.MONTH
                        ? B.intl.formatToPlainString(B.t.RqUv86, { numFreeGuildSubscriptions: G.M4 })
                        : i;
                default:
                    return i;
            }
        default:
            return i;
    }
}
let Y = () => {
        let { userTrialOffer: e } = (0, p.P5)(),
            t = e?.subscription_trial;
        return i.useMemo(
            () =>
                t?.interval === G.WT.DAY
                    ? t?.interval_count > 7
                        ? B.intl.string(B.t.Z1V2cs)
                        : B.intl.string(B.t.MI1rHs)
                    : B.intl.string(B.t["+S5lrV"]),
            [t],
        );
    },
    W = (e) => {
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
                selectedSkuId: g,
                selectedPlan: E,
                priceOptions: y,
                userTrialOffer: v,
                isEligibleForTrial: N,
                discountOffer: D,
            } = (0, p.P5)(),
            {
                isGift: L,
                giftRecipient: w,
                selectedGiftStyle: x,
                customGiftMessage: P,
                setCustomGiftMessage: M,
                claimableRewards: k,
                setSelectedGiftingPromotionReward: U,
            } = (0, h.Pv)(),
            F = (0, R.kz)(E, L && (0, T.Ik)(w), k),
            B = (0, A.tA)({ location: "PremiumPlanSelectStep", giftRecipient: w, isGift: L }),
            j = _;
        s()(void 0 !== j, "should not be undefined");
        let [H, Y] = (0, o.yK)([I.A], () => [null != j ? I.A.get(j.planId) : null, null != t ? I.A.get(t) : null]),
            W = v?.subscription_trial,
            K = (0, b.cg)(),
            $ = Y ?? E,
            z = i.useCallback(
                (e) => {
                    f(e);
                },
                [f],
            ),
            q = n ?? y;
        s()(null != q, "Price option has to be set");
        let X = D?.discount?.plan_ids,
            Z = null != D && r.some((e) => X?.includes(e)) && null != D.discount,
            Q = (0, S.y8)(G.gD.PREMIUM_MONTH_TIER_2, !1, L, q);
        i.useEffect(() => {
            a && C.Ay.trackExposure({ location: "5f89bb_1" });
        }, [a]);
        let J = $?.id != null && r.includes($.id);
        i.useEffect(() => {
            if (!J) {
                if (null == H || L) z(r[0]);
                else if (null != H) {
                    let e = r.find((e) => e !== H.id);
                    null != e && z(e);
                }
            }
        }, [J, L, r, H, z]),
            i.useEffect(() => {
                F && null != k && k.length > 0 && U(k[0]);
            }, [k, U, F]);
        let { ref: ee, ...et } = (0, l._u)(),
            en = $?.id != null ? (0, S.y8)($.id, !1, L, q) : void 0,
            { ipCountryCode: er } = (0, O.A)(),
            ei = "HR" === er && null != en && en.currency === V.Yr.EUR,
            ea = (0, S.J$)(q.paymentSourceId),
            es = !L && (Z || (null != W && N && null != u));
        return {
            skuId: g,
            setPlanId: z,
            selectedPlan: $,
            selectedPlanPrice: en,
            premiumSubscriptionPlan: H,
            premiumSubscription: j,
            thePriceOptions: q,
            hasSeenCollectiblesInSkuSelect: B,
            shouldShowUpdatedPaymentModal: es,
            shouldShowHRKEuroWarning: ei,
            canContinue: J,
            isPrepaid: ea,
            radioGroupRef: ee,
            radioGroupProps: et,
            isGift: L,
            giftRecipient: w,
            customGiftMessage: P,
            setCustomGiftMessage: M,
            selectedGiftStyle: x,
            isEligibleForBOGOPromotion: K,
            isEligibleForTrial: N,
            userTrialOffer: v,
            discountOffer: D,
            isPlansEligibleForDiscount: Z,
            discountedPlanRegularPrice: Q,
            discountAmountOff: c
                ?.find((e) => e.subscriptionPlanId === G.gD.PREMIUM_MONTH_TIER_2)
                ?.discounts?.find((e) => e.type === d.iS.SUBSCRIPTION_PLAN)?.amount,
        };
    },
    K = (e) => {
        let { isPrepaid: t, selectedPlan: n, selectedPlanPrice: i, intervalType: a } = e;
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)("div", { className: j.T }),
                (0, r.jsx)(L.Sd, {
                    label: B.intl.string(B.t.txajQG),
                    value: (0, r.jsx)(w.A, {
                        price: i.amount,
                        currency: i.currency,
                        intervalType: a,
                        intervalCount: n.intervalCount,
                        isPrepaidPaymentSource: t,
                    }),
                    className: j.M3,
                }),
            ],
        });
    },
    $ = (e) => {
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
                handleClose: h,
                showTotal: p,
                switchPlanSelectComponent: g,
                warningComponent: E,
            } = e,
            A = () => {
                if ((0, T.lo)(t) === T.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != i)
                    return (0, r.jsx)(P.A, {
                        className: j.iX,
                        innerClassName: j.pt,
                        onTextChange: (e) => i(e),
                        pendingText: n,
                        currentText: n,
                    });
            },
            I = (e) => (0, r.jsx)(u.D0$, { label: B.intl.string(B.t["3E5hXj"]), children: e });
        if ((0, T.Ik)(t))
            return (0, r.jsxs)("div", {
                className: j.mh,
                children: [
                    (0, r.jsx)("div", { className: j.MU, children: null != a && (0, r.jsx)(M.t, {}) }),
                    (0, r.jsxs)("div", {
                        className: j.Tc,
                        children: [
                            (0, r.jsx)(U.Z, { className: _ ? j.KW : void 0, giftRecipient: t }),
                            A(),
                            I(g),
                            E,
                            !s && (0, r.jsx)(f.A, { onClose: h }),
                        ],
                    }),
                ],
            });
        let y = l && p;
        return (0, r.jsxs)("div", {
            className: j.Du,
            children: [
                (0, r.jsx)(U.Z, { className: _ ? j.KW : void 0, giftRecipient: t }),
                I(g),
                y &&
                    null != c &&
                    null != d &&
                    (0, r.jsx)(K, { selectedPlan: c, selectedPlanPrice: d, intervalType: null, isPrepaid: o }),
                E,
                !s && (0, r.jsx)(f.A, { onClose: h }),
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
            c = (0, o.bG)([E.default], () => E.default.locale),
            { isGift: d, giftRecipient: _ } = (0, h.Pv)(),
            f = d && (0, T.Ik)(_),
            { enabled: p } = N.A.getCurrentConfig(
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
            isGift: d,
            isCustomGift: f,
            shouldUseCalculatedDiscount: p,
            discountOffer: (0, D.O)(),
            isEligibleForBOGOPromotion: (0, b.cg)(),
        };
    },
    q = (e, t) => {
        let n = null != e && e.planId === t,
            r =
                n ||
                (t === G.gD.PREMIUM_MONTH_TIER_2 &&
                    null != e &&
                    [G.gD.PREMIUM_YEAR_TIER_0, G.gD.PREMIUM_YEAR_TIER_1].includes(e.planId));
        return { isCurrentPlan: n, disabled: r };
    },
    X = (e) => {
        let { ...t } = e,
            { planOptions: n, selectedPlan: a } = t,
            s = z(t),
            o = n.length > 0 ? G.hd[n[0]].premiumType : void 0,
            l = i.useMemo(
                () =>
                    n.map((e) => {
                        let { disabled: t } = q(s.premiumSubscription, e),
                            n = (0, k.R)({
                                planId: e,
                                disabled: t,
                                userLocale: s.userLocale,
                                discountOffer: s.discountOffer,
                                priceOptions: s.priceOptions,
                                isGift: s.isGift,
                                shouldUseCalculatedDiscount: s.shouldUseCalculatedDiscount,
                            });
                        return {
                            value: n.id,
                            primaryText: n.planName,
                            badgeText: n.promoText ?? void 0,
                            subText: n.priceText,
                            isDisabled: n.isDisabled,
                        };
                    }),
                [n, s],
            );
        return null == o
            ? null
            : (0, r.jsx)(_.me, {
                  headingComponent: (0, r.jsx)(_.ec, { size: "sm", color: "text-strong", premiumType: o }),
                  planRadioOptions: l,
                  value: a?.id ?? "",
                  onChange: (e) => s.selectPlan(e.value),
              });
    },
    Z = (e) => {
        let { planOptions: t, radioGroupRef: n, selectedPlan: a, radioGroupProps: s } = e,
            o = z(e),
            l = i.useMemo(
                () =>
                    t.map((e) => {
                        let { isCurrentPlan: t, disabled: n } = q(o.premiumSubscription, e);
                        return (0, r.jsx)(
                            k.A,
                            { planId: e, selected: a?.id === e, isCurrentPlan: t, disabled: n, ...o },
                            e,
                        );
                    }),
                [t, o, a],
            );
        return (0, r.jsx)("div", { ref: n, ...s, children: l });
    };
function Q(e) {
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
            skuId: h,
            setPlanId: p,
            selectedPlan: E,
            premiumSubscription: A,
            premiumSubscriptionPlan: I,
            isGift: T,
            thePriceOptions: S,
            isEligibleForTrial: C,
            giftRecipient: b,
            customGiftMessage: N,
            setCustomGiftMessage: R,
            selectedGiftStyle: O,
            discountOffer: D,
            isPlansEligibleForDiscount: L,
            discountedPlanRegularPrice: w,
            hasSeenCollectiblesInSkuSelect: P,
            isEligibleForBOGOPromotion: M,
            userTrialOffer: k,
            shouldShowUpdatedPaymentModal: U,
            discountAmountOff: z,
            isPrepaid: q,
            radioGroupRef: X,
            radioGroupProps: Q,
            selectedPlanPrice: J,
            shouldShowHRKEuroWarning: ee,
            canContinue: et,
        } = W({
            selectedPlanId: t,
            priceOptions: i,
            planOptions: a,
            eligibleForMultiMonthPlans: s,
            subscriptionPeriodEnd: o,
            discountInvoiceItems: d,
        }),
        en = Y(),
        er = (e, n, i) => {
            if (!U) return (0, r.jsx)("div", { className: j.VZ, children: B.intl.string(B.t.a19jpU) });
            if (n) {
                let t = e?.trial_id === G.Dw;
                return (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            className: j.Tz,
                            children: t
                                ? B.intl.format(B.t.nG95hA, { endDate: o })
                                : B.intl.format(B.t.s4E7kb, { trialEnd: o, trialPeriod: en }),
                        }),
                        (0, r.jsx)("hr", { className: j.RA }),
                    ],
                });
            }
            if (i && null != z && null != w && t === G.gD.PREMIUM_MONTH_TIER_2)
                return (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            className: j.Tz,
                            children: B.intl.format(B.t["nG7g/E"], {
                                numMonths: D?.discount.user_usage_limit ?? "",
                                discountedPrice: (0, v.$g)(w.amount - z, w.currency),
                                regularPrice: (0, v.$g)(w.amount, w.currency),
                            }),
                        }),
                        (0, r.jsx)("hr", { className: j.RA }),
                    ],
                });
        },
        ei = () =>
            (0, r.jsx)(Z, {
                planOptions: a,
                radioGroupRef: X,
                radioGroupProps: Q,
                isGift: T,
                isPrepaid: q,
                premiumSubscription: A,
                setPlanId: p,
                selectedPlan: E,
                thePriceOptions: S,
                shouldShowUpdatedPaymentModal: U,
                isEligibleForTrial: C,
                isPlansEligibleForDiscount: L,
                discountAmountOff: z,
            }),
        ea = () =>
            ee && null != J
                ? (0, r.jsx)(c.A, {
                      message: B.intl.formatToPlainString(B.t["9hnZoK"], {
                          kunaPriceWithCurrency: (0, v.$g)(7.5345 * J.amount, V.Yr.HRK),
                      }),
                  })
                : null,
        { showFractionalPremiumBanner: es, fractionalPremiumInfo: eo } = (0, g._V)({
            premiumSubscription: A,
            selectedPlanId: t,
            planGroup: n,
            isGift: T,
        });
    if (T)
        return (0, r.jsx)($, {
            giftRecipient: b,
            customGiftMessage: N,
            setCustomGiftMessage: R,
            selectedGiftStyle: O,
            hasSeenCollectiblesInSkuSelect: P,
            isPrepaid: q,
            canContinue: et,
            selectedPlan: E,
            selectedPlanPrice: J,
            useCompactGiftComponents: _,
            handleClose: f,
            showTotal: l,
            switchPlanSelectComponent: ei(),
            warningComponent: ea(),
        });
    let el = !C && !L && et && l,
        eu = !(C && es);
    return (0, r.jsxs)("div", {
        className: j.Du,
        children: [
            es &&
                (0, r.jsx)(x.vi, {
                    fractionalPremiumInfo: eo,
                    enablePremiumBrandRefresh: !0,
                    variant: C ? x.uA.TRIAL : void 0,
                    trialPeriod: C ? en : void 0,
                    trialEnd: C ? o : void 0,
                }),
            null != I && !es && !M && (0, r.jsx)("div", { className: j.G3, children: H(I, h) }),
            eu && er(k, C, L),
            ei(),
            el &&
                null != E &&
                null != J &&
                (0, r.jsx)(K, { selectedPlan: E, selectedPlanPrice: J, intervalType: E.interval, isPrepaid: q }),
            ea(),
            !U &&
                l &&
                (0, r.jsx)(c.A, {
                    message: B.intl.format(B.t.Om31w8, {
                        documentationLink: y.A.getArticleURL(F.MVz.LOCALIZED_PRICING),
                    }),
                }),
        ],
    });
}
