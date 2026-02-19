"use strict";
n.d(t, { $p: () => Q, Ct: () => q, LR: () => X, O8: () => H, RO: () => j, Rx: () => K, cD: () => z });
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
    U = n(652215);
n(601107);
var G = n(818348),
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
                showTotal: _,
            } = e,
            {
                activeSubscription: h,
                setSelectedPlanId: m,
                selectedSkuId: I,
                selectedPlan: S,
                priceOptions: N,
                userTrialOffer: R,
                isEligibleForTrial: O,
                discountOffer: D,
            } = (0, p.P5)(),
            {
                isGift: L,
                giftRecipient: w,
                selectedGiftStyle: x,
                customGiftMessage: M,
                setCustomGiftMessage: P,
                claimableRewards: U,
                setSelectedGiftingPromotionReward: F,
            } = (0, f.Pv)(),
            V = (0, C.kz)(S, L && (0, A.Ik)(w), U),
            B = (0, E.tA)({ location: "PremiumPlanSelectStep", giftRecipient: w, isGift: L }),
            j = h;
        a()(void 0 !== j, "should not be undefined");
        let [Y, W] = (0, o.yK)([g.A], () => [null != j ? g.A.get(j.planId) : null, null != t ? g.A.get(t) : null]),
            K = R?.subscription_trial,
            z = (0, v.cg)(),
            $ = W ?? S,
            q = i.useCallback(
                (e) => {
                    m(e);
                },
                [m],
            ),
            Z = n ?? N;
        a()(null != Z, "Price option has to be set");
        let X = D?.discount?.plan_ids,
            Q = null != D && r.some((e) => X?.includes(e)) && null != D.discount,
            J = (0, T.y8)(k.gD.PREMIUM_MONTH_TIER_2, !1, L, Z);
        i.useEffect(() => {
            s && y.Ay.trackExposure({ location: "5f89bb_1" });
        }, [s]);
        let ee = $?.id != null && r.includes($.id);
        i.useEffect(() => {
            if (!ee) {
                if (null == Y || L) q(r[0]);
                else if (null != Y) {
                    let e = r.find((e) => e !== Y.id);
                    null != e && q(e);
                }
            }
        }, [ee, L, r, Y, q]),
            i.useEffect(() => {
                V && null != U && U.length > 0 && F(U[0]);
            }, [U, F, V]);
        let { ref: et, ...en } = (0, l._u)(),
            er = $?.id != null ? (0, T.y8)($.id, !1, L, Z) : void 0,
            { ipCountryCode: ei } = (0, b.A)(),
            es = "HR" === ei && null != er && er.currency === G.Yr.EUR,
            ea = (0, T.J$)(Z.paymentSourceId),
            eo = !L && (Q || (null != K && O && null != u)),
            el = c
                ?.find((e) => e.subscriptionPlanId === k.gD.PREMIUM_MONTH_TIER_2)
                ?.discounts?.find((e) => e.type === d.iS.SUBSCRIPTION_PLAN)?.amount,
            eu = I;
        return {
            skuId: eu,
            setPlanId: q,
            selectedPlan: $,
            selectedPlanPrice: er,
            premiumSubscriptionPlan: Y,
            premiumSubscription: j,
            thePriceOptions: Z,
            hasSeenCollectiblesInSkuSelect: B,
            shouldShowUpdatedPaymentModal: eo,
            shouldShowHRKEuroWarning: es,
            shouldShowTotalInSubscriptionFlow: !O && !Q && ee && _,
            canContinue: ee,
            isPrepaid: ea,
            radioGroupRef: et,
            radioGroupProps: en,
            isGift: L,
            giftRecipient: w,
            customGiftMessage: M,
            setCustomGiftMessage: P,
            selectedGiftStyle: x,
            isEligibleForBOGOPromotion: z,
            isEligibleForTrial: O,
            userTrialOffer: R,
            trialPeriodCopy: H(),
            discountOffer: D,
            isPlansEligibleForDiscount: Q,
            discountedPlanRegularPrice: J,
            discountAmountOff: el,
        };
    },
    Y = (e) => {
        let { isPrepaid: t, selectedPlan: n, selectedPlanPrice: i, intervalType: s, className: a } = e;
        return (0, r.jsxs)("div", {
            className: a,
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
                            M.Ay,
                            { planId: e, selected: s?.id === e, isCurrentPlan: t, disabled: n, ...o },
                            e,
                        );
                    }),
                [t, o, s],
            );
        return (0, r.jsx)("div", { ref: n, ...a, children: l });
    },
    q = (e, t) => {
        let { subscriptionPeriodEnd: n, trialPeriodCopy: r } = t,
            i = e?.trial_id === k.Dw;
        return null == n
            ? null
            : i
              ? F.intl.format(F.t.nG95hA, { endDate: n })
              : F.intl.format(F.t.s4E7kb, { trialEnd: n, trialPeriod: r });
    },
    Z = (e) => {
        let { shouldShowHRKEuroWarning: t, selectedPlanPrice: n } = e;
        return t && null != n
            ? (0, r.jsx)(c.A, {
                  message: F.intl.formatToPlainString(F.t["9hnZoK"], {
                      kunaPriceWithCurrency: (0, S.$g)(7.5345 * n.amount, G.Yr.HRK),
                  }),
              })
            : null;
    },
    X = (e) => {
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
                    (0, r.jsx)(Y, {
                        className: u,
                        selectedPlan: t,
                        selectedPlanPrice: n,
                        intervalType: t.interval,
                        isPrepaid: i,
                    }),
                Z({ shouldShowHRKEuroWarning: s, selectedPlanPrice: n }),
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
function Q(e) {
    let {
            selectedPlanId: t,
            planGroup: n,
            priceOptions: i,
            planOptions: s,
            eligibleForMultiMonthPlans: a,
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
            isGift: A,
            thePriceOptions: I,
            isEligibleForTrial: T,
            giftRecipient: y,
            customGiftMessage: v,
            setCustomGiftMessage: N,
            selectedGiftStyle: C,
            discountOffer: b,
            isPlansEligibleForDiscount: R,
            discountedPlanRegularPrice: O,
            hasSeenCollectiblesInSkuSelect: D,
            isEligibleForBOGOPromotion: w,
            userTrialOffer: x,
            shouldShowUpdatedPaymentModal: M,
            discountAmountOff: P,
            isPrepaid: U,
            radioGroupRef: G,
            radioGroupProps: H,
            selectedPlanPrice: Y,
            shouldShowHRKEuroWarning: K,
            shouldShowTotalInSubscriptionFlow: z,
            canContinue: Q,
            trialPeriodCopy: J,
        } = j({
            selectedPlanId: t,
            priceOptions: i,
            planOptions: s,
            eligibleForMultiMonthPlans: a,
            subscriptionPeriodEnd: o,
            discountInvoiceItems: c,
            showTotal: l,
        }),
        ee = (e, n, i) =>
            M
                ? n
                    ? (0, r.jsxs)("div", {
                          children: [
                              (0, r.jsx)(u.Text, {
                                  variant: "text-sm/normal",
                                  className: V.Tz,
                                  children: q(e, { subscriptionPeriodEnd: o, trialPeriodCopy: J }),
                              }),
                              (0, r.jsx)("hr", { className: V.RA }),
                          ],
                      })
                    : i && null != P && null != O && t === k.gD.PREMIUM_MONTH_TIER_2
                      ? (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(u.Text, {
                                    variant: "text-sm/normal",
                                    className: V.Tz,
                                    children: F.intl.format(F.t["nG7g/E"], {
                                        numMonths: b?.discount.user_usage_limit ?? "",
                                        discountedPrice: (0, S.$g)(O.amount - P, O.currency),
                                        regularPrice: (0, S.$g)(O.amount, O.currency),
                                    }),
                                }),
                                (0, r.jsx)("hr", { className: V.RA }),
                            ],
                        })
                      : void 0
                : (0, r.jsx)("div", { className: V.VZ, children: F.intl.string(F.t.a19jpU) }),
        et = () =>
            (0, r.jsx)($, {
                planOptions: s,
                radioGroupRef: G,
                radioGroupProps: H,
                isGift: A,
                isPrepaid: U,
                premiumSubscription: E,
                setPlanId: p,
                selectedPlan: m,
                thePriceOptions: I,
                shouldShowUpdatedPaymentModal: M,
                isEligibleForTrial: T,
                isPlansEligibleForDiscount: R,
                discountAmountOff: P,
            }),
        { showFractionalPremiumBanner: en, fractionalPremiumInfo: er } = (0, h._V)({
            premiumSubscription: E,
            selectedPlanId: t,
            planGroup: n,
            isGift: A,
        });
    if (A)
        return (0, r.jsx)(W, {
            giftRecipient: y,
            customGiftMessage: v,
            setCustomGiftMessage: N,
            selectedGiftStyle: C,
            hasSeenCollectiblesInSkuSelect: D,
            isPrepaid: U,
            canContinue: Q,
            selectedPlan: m,
            selectedPlanPrice: Y,
            useCompactGiftComponents: d,
            handleClose: _,
            showTotal: l,
            switchPlanSelectComponent: et(),
            warningComponent: Z({ shouldShowHRKEuroWarning: K, selectedPlanPrice: Y }),
        });
    let ei = !(T && en);
    return (0, r.jsxs)("div", {
        children: [
            en &&
                (0, r.jsx)(L.vi, {
                    fractionalPremiumInfo: er,
                    enablePremiumBrandRefresh: !0,
                    variant: T ? L.uA.TRIAL : void 0,
                    trialPeriod: T ? J : void 0,
                    trialEnd: T ? o : void 0,
                }),
            null != g && !en && !w && (0, r.jsx)("div", { className: V.G3, children: B(g, f) }),
            ei && ee(x, T, R),
            et(),
            X({
                selectedPlan: m,
                selectedPlanPrice: Y,
                isPrepaid: U,
                shouldShowHRKEuroWarning: K,
                shouldShowUpdatedPaymentModal: M,
                showTotal: l,
                shouldShowTotalInSubscriptionFlow: z,
            }),
        ],
    });
}
