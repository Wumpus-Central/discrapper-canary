"use strict";
n.d(t, {
    $p: () => ee,
    Ct: () => X,
    LR: () => J,
    O8: () => Y,
    RO: () => W,
    Rx: () => z,
    U_: () => H,
    cD: () => q,
    yq: () => j,
});
var r = n(627968),
    i = n(64700),
    s = n(284009),
    a = n.n(s),
    o = n(311907),
    l = n(421380),
    u = n(397927),
    c = n(726656),
    d = n(448811),
    _ = n(937008),
    f = n(156312),
    p = n(970077),
    h = n(961098),
    m = n(222707),
    E = n(773669),
    g = n(594832),
    A = n(97352),
    I = n(45938),
    T = n(975571),
    S = n(927578),
    y = n(580630),
    v = n(40185),
    N = n(881489),
    C = n(906023),
    R = n(810498),
    O = n(477421),
    b = n(422936),
    D = n(735164),
    L = n(363476),
    w = n(156962),
    M = n(871181),
    x = n(318007),
    P = n(958720),
    k = n(285719),
    U = n(788868),
    G = n(652215);
n(26279);
var F = n(818348),
    V = n(985018),
    B = n(239746);
function H(e, t) {
    let { isEligibleForBOGOPromotion: n } = t;
    return null != e && !n;
}
function j(e, t) {
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
let Y = () => {
        let { userTrialOffer: e } = (0, f.P5)(),
            t = e?.subscription_trial,
            { daysCount: n, copy: r } = i.useMemo(
                () =>
                    t?.interval === U.WT.DAY
                        ? t?.interval_count > 7
                            ? { daysCount: 14, copy: V.intl.string(V.t.Z1V2cs) }
                            : { daysCount: 7, copy: V.intl.string(V.t.MI1rHs) }
                        : { daysCount: 30, copy: V.intl.string(V.t["+S5lrV"]) },
                [t],
            );
        return { daysCount: n, copy: r, userTrialOffer: e };
    },
    W = (e) => {
        let { selectedPlanId: t, priceOptions: n, planOptions: r, subscriptionPeriodEnd: s, showTotal: u } = e,
            {
                activeSubscription: c,
                setSelectedPlanId: d,
                selectedSkuId: m,
                priceOptions: E,
                userTrialOffer: T,
                isEligibleForTrial: y,
                discountOffer: N,
            } = (0, f.P5)(),
            {
                isGift: C,
                giftRecipient: b,
                selectedGiftStyle: D,
                customGiftMessage: L,
                setCustomGiftMessage: w,
                claimableRewards: M,
                setSelectedGiftingPromotionReward: x,
            } = (0, _.Pv)(),
            P = (0, p.A)(),
            k = (0, R.kz)(P, C && (0, I.Ik)(b), M),
            G = (0, g.tA)({ giftRecipient: b, isGift: C }),
            V = c;
        a()(void 0 !== V, "should not be undefined");
        let [B, H] = (0, o.yK)([A.A], () => [null != V ? A.A.get(V.planId) : null, null != t ? A.A.get(t) : null]),
            j = T?.subscription_trial,
            W = (0, v.cg)(),
            K = H ?? P,
            $ = i.useCallback(
                (e) => {
                    d(e);
                },
                [d],
            ),
            z = n ?? E;
        a()(null != z, "Price option has to be set");
        let q = N?.discount?.plan_ids,
            Z = null != N && r.some((e) => q?.includes(e)) && null != N.discount,
            X = r.includes(U.gD.PREMIUM_MONTH_TIER_2) ? (0, S.y8)(U.gD.PREMIUM_MONTH_TIER_2, !1, C, z) : void 0,
            Q = K?.id != null && r.includes(K.id);
        i.useEffect(() => {
            if (!Q) {
                if (null == B || C) $(r[0]);
                else if (null != B) {
                    let e = r.find((e) => e !== B.id);
                    null != e && $(e);
                }
            }
        }, [Q, C, r, B, $]),
            i.useEffect(() => {
                k && null != M && M.length > 0 && x(M[0]);
            }, [M, x, k]);
        let { ref: J, ...ee } = (0, l._u)(),
            et = K?.id != null ? (0, S.y8)(K.id, !1, C, z) : void 0,
            { ipCountryCode: en } = (0, O.A)(),
            er = "HR" === en && null != et && et.currency === F.Yr.EUR,
            ei = (0, S.J$)(z.paymentSourceId),
            es = !C && (Z || (null != j && y && null != s)),
            { discountAmountOff: ea } = (0, h.J)(U.gD.PREMIUM_MONTH_TIER_2),
            eo = m,
            { copy: el } = Y();
        return {
            skuId: eo,
            setPlanId: $,
            selectedPlan: K,
            selectedPlanPrice: et,
            premiumSubscriptionPlan: B,
            premiumSubscription: V,
            thePriceOptions: z,
            hasSeenCollectiblesInSkuSelect: G,
            shouldShowUpdatedPaymentModal: es,
            shouldShowHRKEuroWarning: er,
            shouldShowTotalInSubscriptionFlow: !y && !Z && Q && u,
            canContinue: Q,
            isPrepaid: ei,
            radioGroupRef: J,
            radioGroupProps: ee,
            isGift: C,
            giftRecipient: b,
            customGiftMessage: L,
            setCustomGiftMessage: w,
            selectedGiftStyle: D,
            isEligibleForBOGOPromotion: W,
            isEligibleForTrial: y,
            userTrialOffer: T,
            trialPeriodCopy: el,
            discountOffer: N,
            isPlansEligibleForDiscount: Z,
            discountedPlanRegularPrice: X,
            discountAmountOff: ea,
        };
    },
    K = (e) => {
        let { isPrepaid: t, selectedPlan: n, selectedPlanPrice: i, intervalType: s, className: a } = e;
        return (0, r.jsxs)("div", {
            className: a,
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
    $ = (e) => {
        let {
                giftRecipient: t,
                customGiftMessage: n,
                setCustomGiftMessage: i,
                selectedGiftStyle: s,
                hasSeenCollectiblesInSkuSelect: a,
                isPrepaid: o,
                canContinue: l,
                selectedPlan: c,
                selectedPlanPrice: _,
                useCompactGiftComponents: f,
                handleClose: p,
                showTotal: h,
                switchPlanSelectComponent: m,
                warningComponent: E,
            } = e,
            g = () => {
                if ((0, I.lo)(t) === I.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != i)
                    return (0, r.jsx)(M.A, {
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
                    (0, r.jsx)("div", { className: B.MU, children: null != s && (0, r.jsx)(x.t, {}) }),
                    (0, r.jsxs)("div", {
                        className: B.Tc,
                        children: [
                            (0, r.jsx)(k.Z, { className: f ? B.KW : void 0, giftRecipient: t }),
                            g(),
                            A(m),
                            E,
                            !a && (0, r.jsx)(d.A, { onClose: p }),
                        ],
                    }),
                ],
            });
        let T = l && h;
        return (0, r.jsxs)("div", {
            className: B.Du,
            children: [
                (0, r.jsx)(k.Z, { className: f ? B.KW : void 0, giftRecipient: t }),
                A(m),
                T &&
                    null != c &&
                    null != _ &&
                    (0, r.jsx)(K, { selectedPlan: c, selectedPlanPrice: _, intervalType: null, isPrepaid: o }),
                E,
                !a && (0, r.jsx)(d.A, { onClose: p }),
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
            { isGift: d, giftRecipient: f } = (0, _.Pv)(),
            p = d && (0, I.Ik)(f),
            { enabled: h } = C.A.getConfig({ location: "PremiumSwitchPlanSelectOption" });
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
            discountOffer: (0, b.O)(),
            isEligibleForBOGOPromotion: (0, v.cg)(),
        };
    },
    q = (e, t) => {
        let n = null != e && e.planId === t,
            r =
                n ||
                (t === U.gD.PREMIUM_MONTH_TIER_2 &&
                    null != e &&
                    [U.gD.PREMIUM_YEAR_TIER_0, U.gD.PREMIUM_YEAR_TIER_1].includes(e.planId));
        return { isCurrentPlan: n, disabled: r };
    },
    Z = (e) => {
        let { planOptions: t, radioGroupRef: n, selectedPlan: s, radioGroupProps: a } = e,
            o = z(e),
            l = i.useMemo(
                () =>
                    t.map((t) => {
                        let { isCurrentPlan: n, disabled: i } = q(o.premiumSubscription, t);
                        return (0, r.jsx)(
                            P.Ay,
                            { planId: t, selected: s?.id === t, isCurrentPlan: n, disabled: e.disabled || i, ...o },
                            t,
                        );
                    }),
                [e.disabled, t, o, s],
            );
        return (0, r.jsx)("div", { ref: n, ...a, children: l });
    },
    X = (e, t) => {
        let { subscriptionPeriodEnd: n, trialPeriodCopy: r } = t,
            i = e?.trial_id === U.Dw;
        return null == n
            ? null
            : i
              ? V.intl.format(V.t.nG95hA, { endDate: n })
              : V.intl.format(V.t.s4E7kb, { trialEnd: n, trialPeriod: r });
    },
    Q = (e) => {
        let { shouldShowHRKEuroWarning: t, selectedPlanPrice: n } = e;
        return t && null != n
            ? (0, r.jsx)(c.A, {
                  message: V.intl.formatToPlainString(V.t["9hnZoK"], {
                      kunaPriceWithCurrency: (0, y.$g)(7.5345 * n.amount, F.Yr.HRK),
                  }),
              })
            : null;
    },
    J = (e) => {
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
                    (0, r.jsx)(K, {
                        className: u,
                        selectedPlan: t,
                        selectedPlanPrice: n,
                        intervalType: t.interval,
                        isPrepaid: i,
                    }),
                Q({ shouldShowHRKEuroWarning: s, selectedPlanPrice: n }),
                !a &&
                    o &&
                    (0, r.jsx)(c.A, {
                        message: V.intl.format(V.t.Om31w8, {
                            documentationLink: T.A.getArticleURL(G.MVz.LOCALIZED_PRICING),
                        }),
                    }),
            ],
        });
    };
function ee(e) {
    let {
            disabled: t,
            selectedPlanId: n,
            planGroup: i,
            priceOptions: s,
            planOptions: a,
            subscriptionPeriodEnd: o,
            showTotal: l = !0,
            useCompactGiftComponents: c,
            handleClose: d,
        } = e,
        {
            skuId: _,
            setPlanId: f,
            selectedPlan: p,
            premiumSubscription: h,
            premiumSubscriptionPlan: E,
            isEligibleForBOGOPromotion: g,
            isGift: A,
            thePriceOptions: I,
            isEligibleForTrial: T,
            giftRecipient: S,
            customGiftMessage: v,
            setCustomGiftMessage: C,
            selectedGiftStyle: R,
            discountOffer: O,
            isPlansEligibleForDiscount: b,
            discountedPlanRegularPrice: D,
            hasSeenCollectiblesInSkuSelect: L,
            userTrialOffer: M,
            shouldShowUpdatedPaymentModal: x,
            discountAmountOff: P,
            isPrepaid: k,
            radioGroupRef: G,
            radioGroupProps: F,
            selectedPlanPrice: Y,
            shouldShowHRKEuroWarning: K,
            shouldShowTotalInSubscriptionFlow: z,
            canContinue: q,
            trialPeriodCopy: ee,
        } = W({ selectedPlanId: n, priceOptions: s, planOptions: a, subscriptionPeriodEnd: o, showTotal: l }),
        et = (0, N.ds)(),
        en = (e, t, i) =>
            x
                ? t
                    ? (0, r.jsxs)("div", {
                          children: [
                              (0, r.jsx)(u.Text, {
                                  variant: "text-sm/normal",
                                  className: B.Tz,
                                  children: X(e, { subscriptionPeriodEnd: o, trialPeriodCopy: ee }),
                              }),
                              (0, r.jsx)("hr", { className: B.RA }),
                          ],
                      })
                    : i && null != P && null != D && n === U.gD.PREMIUM_MONTH_TIER_2
                      ? (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(u.Text, {
                                    variant: "text-sm/normal",
                                    className: B.Tz,
                                    children: V.intl.format(V.t["nG7g/E"], {
                                        numMonths: O?.discount.user_usage_limit ?? "",
                                        discountedPrice: (0, y.$g)(D.amount - P, D.currency),
                                        regularPrice: (0, y.$g)(D.amount, D.currency),
                                    }),
                                }),
                                (0, r.jsx)("hr", { className: B.RA }),
                            ],
                        })
                      : void 0
                : (0, r.jsx)("div", { className: B.VZ, children: V.intl.string(V.t.a19jpU) }),
        er = () =>
            (0, r.jsx)(Z, {
                disabled: t,
                planOptions: a,
                radioGroupRef: G,
                radioGroupProps: F,
                isGift: A,
                isPrepaid: k,
                premiumSubscription: h,
                setPlanId: f,
                selectedPlan: p,
                thePriceOptions: I,
                shouldShowUpdatedPaymentModal: x,
                isEligibleForTrial: T,
                isPlansEligibleForDiscount: b,
                discountAmountOff: P,
            }),
        { showFractionalPremiumBanner: ei, fractionalPremiumInfo: es } = (0, m._V)({
            premiumSubscription: h,
            selectedPlanId: n,
            planGroup: i,
            isGift: A,
            fractionalPremiumInfoArgs: {
                forceFetch: !1,
                excludeReverseTrial: !1,
                excludeReverseTrialFromCountdown: !0,
            },
        });
    if (A)
        return (0, r.jsx)($, {
            giftRecipient: S,
            customGiftMessage: v,
            setCustomGiftMessage: C,
            selectedGiftStyle: R,
            hasSeenCollectiblesInSkuSelect: L,
            isPrepaid: k,
            canContinue: q,
            selectedPlan: p,
            selectedPlanPrice: Y,
            useCompactGiftComponents: c,
            handleClose: d,
            showTotal: l,
            switchPlanSelectComponent: er(),
            warningComponent: Q({ shouldShowHRKEuroWarning: K, selectedPlanPrice: Y }),
        });
    let ea = !(T && ei && !et),
        eo = H(E, { isEligibleForBOGOPromotion: g });
    return (0, r.jsxs)("div", {
        children: [
            ei &&
                !et &&
                (0, r.jsx)(w.vi, {
                    fractionalPremiumInfo: es,
                    enablePremiumBrandRefresh: !0,
                    variant: T ? w.uA.TRIAL : void 0,
                    trialPeriod: T ? ee : void 0,
                    trialEnd: T ? o : void 0,
                }),
            eo && !ei && (0, r.jsx)("div", { className: B.G3, children: j(E, _) }),
            ea && en(M, T, b),
            er(),
            J({
                selectedPlan: p,
                selectedPlanPrice: Y,
                isPrepaid: k,
                shouldShowHRKEuroWarning: K,
                shouldShowUpdatedPaymentModal: x,
                showTotal: l,
                shouldShowTotalInSubscriptionFlow: z,
            }),
        ],
    });
}
