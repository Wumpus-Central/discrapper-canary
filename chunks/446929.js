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
    d = n(155718),
    _ = n(448811),
    f = n(937008),
    p = n(156312),
    h = n(970077),
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
        let { userTrialOffer: e } = (0, p.P5)(),
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
                setSelectedPlanId: m,
                selectedSkuId: E,
                priceOptions: T,
                userTrialOffer: y,
                isEligibleForTrial: N,
                discountOffer: C,
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
            k = (0, h.A)(),
            G = (0, R.kz)(k, b && (0, I.Ik)(D), x),
            V = (0, g.tA)({ giftRecipient: D, isGift: b }),
            B = _;
        a()(void 0 !== B, "should not be undefined");
        let [H, j] = (0, o.yK)([A.A], () => [null != B ? A.A.get(B.planId) : null, null != t ? A.A.get(t) : null]),
            W = y?.subscription_trial,
            K = (0, v.cg)(),
            $ = j ?? k,
            z = i.useCallback(
                (e) => {
                    m(e);
                },
                [m],
            ),
            q = n ?? T;
        a()(null != q, "Price option has to be set");
        let Z = C?.discount?.plan_ids,
            X = null != C && r.some((e) => Z?.includes(e)) && null != C.discount,
            Q = r.includes(U.gD.PREMIUM_MONTH_TIER_2) ? (0, S.y8)(U.gD.PREMIUM_MONTH_TIER_2, !1, b, q) : void 0,
            J = $?.id != null && r.includes($.id);
        i.useEffect(() => {
            if (!J) {
                if (null == H || b) z(r[0]);
                else if (null != H) {
                    let e = r.find((e) => e !== H.id);
                    null != e && z(e);
                }
            }
        }, [J, b, r, H, z]),
            i.useEffect(() => {
                G && null != x && x.length > 0 && P(x[0]);
            }, [x, P, G]);
        let { ref: ee, ...et } = (0, l._u)(),
            en = $?.id != null ? (0, S.y8)($.id, !1, b, q) : void 0,
            { ipCountryCode: er } = (0, O.A)(),
            ei = "HR" === er && null != en && en.currency === F.Yr.EUR,
            es = (0, S.J$)(q.paymentSourceId),
            ea = !b && (X || (null != W && N && null != s)),
            eo = u
                ?.find((e) => e.subscriptionPlanId === U.gD.PREMIUM_MONTH_TIER_2)
                ?.discounts?.find((e) => e.type === d.iS.SUBSCRIPTION_PLAN)?.amount,
            el = E,
            { copy: eu } = Y();
        return {
            skuId: el,
            setPlanId: z,
            selectedPlan: $,
            selectedPlanPrice: en,
            premiumSubscriptionPlan: H,
            premiumSubscription: B,
            thePriceOptions: q,
            hasSeenCollectiblesInSkuSelect: V,
            shouldShowUpdatedPaymentModal: ea,
            shouldShowHRKEuroWarning: ei,
            shouldShowTotalInSubscriptionFlow: !N && !X && J && c,
            canContinue: J,
            isPrepaid: es,
            radioGroupRef: ee,
            radioGroupProps: et,
            isGift: b,
            giftRecipient: D,
            customGiftMessage: w,
            setCustomGiftMessage: M,
            selectedGiftStyle: L,
            isEligibleForBOGOPromotion: K,
            isEligibleForTrial: N,
            userTrialOffer: y,
            trialPeriodCopy: eu,
            discountOffer: C,
            isPlansEligibleForDiscount: X,
            discountedPlanRegularPrice: Q,
            discountAmountOff: eo,
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
                selectedPlanPrice: d,
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
                            !a && (0, r.jsx)(_.A, { onClose: p }),
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
                    null != d &&
                    (0, r.jsx)(K, { selectedPlan: c, selectedPlanPrice: d, intervalType: null, isPrepaid: o }),
                E,
                !a && (0, r.jsx)(_.A, { onClose: p }),
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
            { isGift: d, giftRecipient: _ } = (0, f.Pv)(),
            p = d && (0, I.Ik)(_),
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
            discountInvoiceItems: c,
            useCompactGiftComponents: d,
            handleClose: _,
        } = e,
        {
            skuId: f,
            setPlanId: p,
            selectedPlan: h,
            premiumSubscription: E,
            premiumSubscriptionPlan: g,
            isEligibleForBOGOPromotion: A,
            isGift: I,
            thePriceOptions: T,
            isEligibleForTrial: S,
            giftRecipient: v,
            customGiftMessage: C,
            setCustomGiftMessage: R,
            selectedGiftStyle: O,
            discountOffer: b,
            isPlansEligibleForDiscount: D,
            discountedPlanRegularPrice: L,
            hasSeenCollectiblesInSkuSelect: M,
            userTrialOffer: x,
            shouldShowUpdatedPaymentModal: P,
            discountAmountOff: k,
            isPrepaid: G,
            radioGroupRef: F,
            radioGroupProps: Y,
            selectedPlanPrice: K,
            shouldShowHRKEuroWarning: z,
            shouldShowTotalInSubscriptionFlow: q,
            canContinue: ee,
            trialPeriodCopy: et,
        } = W({
            selectedPlanId: n,
            priceOptions: s,
            planOptions: a,
            subscriptionPeriodEnd: o,
            discountInvoiceItems: c,
            showTotal: l,
        }),
        en = (0, N.ds)(),
        er = (e, t, i) =>
            P
                ? t
                    ? (0, r.jsxs)("div", {
                          children: [
                              (0, r.jsx)(u.Text, {
                                  variant: "text-sm/normal",
                                  className: B.Tz,
                                  children: X(e, { subscriptionPeriodEnd: o, trialPeriodCopy: et }),
                              }),
                              (0, r.jsx)("hr", { className: B.RA }),
                          ],
                      })
                    : i && null != k && null != L && n === U.gD.PREMIUM_MONTH_TIER_2
                      ? (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(u.Text, {
                                    variant: "text-sm/normal",
                                    className: B.Tz,
                                    children: V.intl.format(V.t["nG7g/E"], {
                                        numMonths: b?.discount.user_usage_limit ?? "",
                                        discountedPrice: (0, y.$g)(L.amount - k, L.currency),
                                        regularPrice: (0, y.$g)(L.amount, L.currency),
                                    }),
                                }),
                                (0, r.jsx)("hr", { className: B.RA }),
                            ],
                        })
                      : void 0
                : (0, r.jsx)("div", { className: B.VZ, children: V.intl.string(V.t.a19jpU) }),
        ei = () =>
            (0, r.jsx)(Z, {
                disabled: t,
                planOptions: a,
                radioGroupRef: F,
                radioGroupProps: Y,
                isGift: I,
                isPrepaid: G,
                premiumSubscription: E,
                setPlanId: p,
                selectedPlan: h,
                thePriceOptions: T,
                shouldShowUpdatedPaymentModal: P,
                isEligibleForTrial: S,
                isPlansEligibleForDiscount: D,
                discountAmountOff: k,
            }),
        { showFractionalPremiumBanner: es, fractionalPremiumInfo: ea } = (0, m._V)({
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
        return (0, r.jsx)($, {
            giftRecipient: v,
            customGiftMessage: C,
            setCustomGiftMessage: R,
            selectedGiftStyle: O,
            hasSeenCollectiblesInSkuSelect: M,
            isPrepaid: G,
            canContinue: ee,
            selectedPlan: h,
            selectedPlanPrice: K,
            useCompactGiftComponents: d,
            handleClose: _,
            showTotal: l,
            switchPlanSelectComponent: ei(),
            warningComponent: Q({ shouldShowHRKEuroWarning: z, selectedPlanPrice: K }),
        });
    let eo = !(S && es),
        el = H(g, { isEligibleForBOGOPromotion: A });
    return (0, r.jsxs)("div", {
        children: [
            es &&
                (0, r.jsx)(w.vi, {
                    fractionalPremiumInfo: ea,
                    enablePremiumBrandRefresh: !en,
                    variant: en ? w.uA.REVERSE_TRIAL : S ? w.uA.TRIAL : void 0,
                    trialPeriod: S ? et : void 0,
                    trialEnd: S ? o : void 0,
                }),
            el && !es && (0, r.jsx)("div", { className: B.G3, children: j(g, f) }),
            eo && er(x, S, D),
            ei(),
            J({
                selectedPlan: h,
                selectedPlanPrice: K,
                isPrepaid: G,
                shouldShowHRKEuroWarning: z,
                shouldShowUpdatedPaymentModal: P,
                showTotal: l,
                shouldShowTotalInSubscriptionFlow: q,
            }),
        ],
    });
}
