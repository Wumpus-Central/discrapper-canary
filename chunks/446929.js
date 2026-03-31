"use strict";
n.d(t, {
    $p: () => Q,
    Ct: () => q,
    LR: () => X,
    O8: () => H,
    RO: () => j,
    Rx: () => K,
    U_: () => V,
    cD: () => $,
    yq: () => B,
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
    v = n(906023),
    N = n(810498),
    C = n(477421),
    R = n(422936),
    O = n(735164),
    b = n(363476),
    D = n(156962),
    L = n(871181),
    w = n(318007),
    M = n(958720),
    P = n(285719),
    x = n(788868),
    k = n(652215);
n(26279);
var U = n(818348),
    G = n(985018),
    F = n(515823);
function V(e, t) {
    let { isEligibleForBOGOPromotion: n } = t;
    return null != e && !n;
}
function B(e, t) {
    let n = G.intl.string(G.t.BYa62u),
        r = G.intl.string(G.t.CDa6Dq),
        i = (() => {
            switch (e.interval) {
                case x.WT.YEAR:
                    return n;
                case x.WT.MONTH:
                default:
                    return r;
            }
        })(),
        s = e.skuId;
    switch (t) {
        case x.pe.TIER_0:
            switch (s) {
                case x.pe.TIER_1:
                    return G.intl.string(G.t.q6mxDS);
                case x.pe.TIER_2:
                    return G.intl.string(G.t.seZVS0);
                default:
                    return i;
            }
        case x.pe.TIER_1:
            switch (s) {
                case x.pe.TIER_0:
                    return G.intl.string(G.t["7+u2zg"]);
                case x.pe.TIER_2:
                    return G.intl.string(G.t.NG2qcc);
                default:
                    return i;
            }
        case x.pe.TIER_2:
            switch (s) {
                case x.pe.TIER_0:
                case x.pe.TIER_1:
                    return G.intl.string(G.t["eB0/w9"]);
                case x.pe.TIER_2:
                    return e.interval === x.WT.MONTH
                        ? G.intl.formatToPlainString(G.t.RqUv86, { numFreeGuildSubscriptions: x.M4 })
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
            t = e?.subscription_trial,
            { daysCount: n, copy: r } = i.useMemo(
                () =>
                    t?.interval === x.WT.DAY
                        ? t?.interval_count > 7
                            ? { daysCount: 14, copy: G.intl.string(G.t.Z1V2cs) }
                            : { daysCount: 7, copy: G.intl.string(G.t.MI1rHs) }
                        : { daysCount: 30, copy: G.intl.string(G.t["+S5lrV"]) },
                [t],
            );
        return { daysCount: n, copy: r, userTrialOffer: e };
    },
    j = (e) => {
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
                isEligibleForTrial: R,
                discountOffer: O,
            } = (0, p.P5)(),
            {
                isGift: b,
                giftRecipient: D,
                selectedGiftStyle: L,
                customGiftMessage: w,
                setCustomGiftMessage: M,
                claimableRewards: P,
                setSelectedGiftingPromotionReward: k,
            } = (0, f.Pv)(),
            G = (0, N.kz)(I, b && (0, A.Ik)(D), P),
            F = (0, E.tA)({ giftRecipient: D, isGift: b }),
            V = _;
        a()(void 0 !== V, "should not be undefined");
        let [B, j] = (0, o.yK)([g.A], () => [null != V ? g.A.get(V.planId) : null, null != t ? g.A.get(t) : null]),
            Y = v?.subscription_trial,
            W = (0, y.cg)(),
            K = j ?? I,
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
            X = r.includes(x.gD.PREMIUM_MONTH_TIER_2) ? (0, T.y8)(x.gD.PREMIUM_MONTH_TIER_2, !1, b, z) : void 0,
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
                G && null != P && P.length > 0 && k(P[0]);
            }, [P, k, G]);
        let { ref: J, ...ee } = (0, l._u)(),
            et = K?.id != null ? (0, T.y8)(K.id, !1, b, z) : void 0,
            { ipCountryCode: en } = (0, C.A)(),
            er = "HR" === en && null != et && et.currency === U.Yr.EUR,
            ei = (0, T.J$)(z.paymentSourceId),
            es = !b && (Z || (null != Y && R && null != s)),
            ea = u
                ?.find((e) => e.subscriptionPlanId === x.gD.PREMIUM_MONTH_TIER_2)
                ?.discounts?.find((e) => e.type === d.iS.SUBSCRIPTION_PLAN)?.amount,
            eo = m,
            { copy: el } = H();
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
            shouldShowTotalInSubscriptionFlow: !R && !Z && Q && c,
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
            isEligibleForTrial: R,
            userTrialOffer: v,
            trialPeriodCopy: el,
            discountOffer: O,
            isPlansEligibleForDiscount: Z,
            discountedPlanRegularPrice: X,
            discountAmountOff: ea,
        };
    },
    Y = (e) => {
        let { isPrepaid: t, selectedPlan: n, selectedPlanPrice: i, intervalType: s, className: a } = e;
        return (0, r.jsxs)("div", {
            className: a,
            children: [
                (0, r.jsx)("div", { className: F.T }),
                (0, r.jsx)(O.Sd, {
                    label: G.intl.string(G.t.txajQG),
                    value: (0, r.jsx)(b.A, {
                        price: i.amount,
                        currency: i.currency,
                        intervalType: s,
                        intervalCount: n.intervalCount,
                        isPrepaidPaymentSource: t,
                    }),
                    className: F.M3,
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
                    return (0, r.jsx)(L.A, {
                        className: F.iX,
                        innerClassName: F.pt,
                        onTextChange: (e) => i(e),
                        pendingText: n,
                        currentText: n,
                    });
            },
            I = (e) => (0, r.jsx)(u.D0$, { label: G.intl.string(G.t["3E5hXj"]), children: e });
        if ((0, A.Ik)(t))
            return (0, r.jsxs)("div", {
                className: F.mh,
                children: [
                    (0, r.jsx)("div", { className: F.MU, children: null != s && (0, r.jsx)(w.t, {}) }),
                    (0, r.jsxs)("div", {
                        className: F.Tc,
                        children: [
                            (0, r.jsx)(P.Z, { className: f ? F.KW : void 0, giftRecipient: t }),
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
            className: F.Du,
            children: [
                (0, r.jsx)(P.Z, { className: f ? F.KW : void 0, giftRecipient: t }),
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
            { enabled: h } = v.A.getConfig({ location: "PremiumSwitchPlanSelectOption" });
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
            isEligibleForBOGOPromotion: (0, y.cg)(),
        };
    },
    $ = (e, t) => {
        let n = null != e && e.planId === t,
            r =
                n ||
                (t === x.gD.PREMIUM_MONTH_TIER_2 &&
                    null != e &&
                    [x.gD.PREMIUM_YEAR_TIER_0, x.gD.PREMIUM_YEAR_TIER_1].includes(e.planId));
        return { isCurrentPlan: n, disabled: r };
    },
    z = (e) => {
        let { planOptions: t, radioGroupRef: n, selectedPlan: s, radioGroupProps: a } = e,
            o = K(e),
            l = i.useMemo(
                () =>
                    t.map((t) => {
                        let { isCurrentPlan: n, disabled: i } = $(o.premiumSubscription, t);
                        return (0, r.jsx)(
                            M.Ay,
                            { planId: t, selected: s?.id === t, isCurrentPlan: n, disabled: e.disabled || i, ...o },
                            t,
                        );
                    }),
                [e.disabled, t, o, s],
            );
        return (0, r.jsx)("div", { ref: n, ...a, children: l });
    },
    q = (e, t) => {
        let { subscriptionPeriodEnd: n, trialPeriodCopy: r } = t,
            i = e?.trial_id === x.Dw;
        return null == n
            ? null
            : i
              ? G.intl.format(G.t.nG95hA, { endDate: n })
              : G.intl.format(G.t.s4E7kb, { trialEnd: n, trialPeriod: r });
    },
    Z = (e) => {
        let { shouldShowHRKEuroWarning: t, selectedPlanPrice: n } = e;
        return t && null != n
            ? (0, r.jsx)(c.A, {
                  message: G.intl.formatToPlainString(G.t["9hnZoK"], {
                      kunaPriceWithCurrency: (0, S.$g)(7.5345 * n.amount, U.Yr.HRK),
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
                        message: G.intl.format(G.t.Om31w8, {
                            documentationLink: I.A.getArticleURL(k.MVz.LOCALIZED_PRICING),
                        }),
                    }),
            ],
        });
    };
function Q(e) {
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
            giftRecipient: v,
            customGiftMessage: N,
            setCustomGiftMessage: C,
            selectedGiftStyle: R,
            discountOffer: O,
            isPlansEligibleForDiscount: b,
            discountedPlanRegularPrice: L,
            hasSeenCollectiblesInSkuSelect: w,
            userTrialOffer: M,
            shouldShowUpdatedPaymentModal: P,
            discountAmountOff: k,
            isPrepaid: U,
            radioGroupRef: H,
            radioGroupProps: Y,
            selectedPlanPrice: K,
            shouldShowHRKEuroWarning: $,
            shouldShowTotalInSubscriptionFlow: Q,
            canContinue: J,
            trialPeriodCopy: ee,
        } = j({
            selectedPlanId: n,
            priceOptions: s,
            planOptions: a,
            subscriptionPeriodEnd: o,
            discountInvoiceItems: c,
            showTotal: l,
        }),
        et = (e, t, i) =>
            P
                ? t
                    ? (0, r.jsxs)("div", {
                          children: [
                              (0, r.jsx)(u.Text, {
                                  variant: "text-sm/normal",
                                  className: F.Tz,
                                  children: q(e, { subscriptionPeriodEnd: o, trialPeriodCopy: ee }),
                              }),
                              (0, r.jsx)("hr", { className: F.RA }),
                          ],
                      })
                    : i && null != k && null != L && n === x.gD.PREMIUM_MONTH_TIER_2
                      ? (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(u.Text, {
                                    variant: "text-sm/normal",
                                    className: F.Tz,
                                    children: G.intl.format(G.t["nG7g/E"], {
                                        numMonths: O?.discount.user_usage_limit ?? "",
                                        discountedPrice: (0, S.$g)(L.amount - k, L.currency),
                                        regularPrice: (0, S.$g)(L.amount, L.currency),
                                    }),
                                }),
                                (0, r.jsx)("hr", { className: F.RA }),
                            ],
                        })
                      : void 0
                : (0, r.jsx)("div", { className: F.VZ, children: G.intl.string(G.t.a19jpU) }),
        en = () =>
            (0, r.jsx)(z, {
                disabled: t,
                planOptions: a,
                radioGroupRef: H,
                radioGroupProps: Y,
                isGift: I,
                isPrepaid: U,
                premiumSubscription: E,
                setPlanId: p,
                selectedPlan: m,
                thePriceOptions: T,
                shouldShowUpdatedPaymentModal: P,
                isEligibleForTrial: y,
                isPlansEligibleForDiscount: b,
                discountAmountOff: k,
            }),
        { showFractionalPremiumBanner: er, fractionalPremiumInfo: ei } = (0, h._V)({
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
        return (0, r.jsx)(W, {
            giftRecipient: v,
            customGiftMessage: N,
            setCustomGiftMessage: C,
            selectedGiftStyle: R,
            hasSeenCollectiblesInSkuSelect: w,
            isPrepaid: U,
            canContinue: J,
            selectedPlan: m,
            selectedPlanPrice: K,
            useCompactGiftComponents: d,
            handleClose: _,
            showTotal: l,
            switchPlanSelectComponent: en(),
            warningComponent: Z({ shouldShowHRKEuroWarning: $, selectedPlanPrice: K }),
        });
    let es = !(y && er),
        ea = V(g, { isEligibleForBOGOPromotion: A });
    return (0, r.jsxs)("div", {
        children: [
            er &&
                (0, r.jsx)(D.vi, {
                    fractionalPremiumInfo: ei,
                    enablePremiumBrandRefresh: !0,
                    variant: y ? D.uA.TRIAL : void 0,
                    trialPeriod: y ? ee : void 0,
                    trialEnd: y ? o : void 0,
                }),
            ea && !er && (0, r.jsx)("div", { className: F.G3, children: B(g, f) }),
            es && et(M, y, b),
            en(),
            X({
                selectedPlan: m,
                selectedPlanPrice: K,
                isPrepaid: U,
                shouldShowHRKEuroWarning: $,
                shouldShowUpdatedPaymentModal: P,
                showTotal: l,
                shouldShowTotalInSubscriptionFlow: Q,
            }),
        ],
    });
}
