"use strict";
n.d(t, {
    $p: () => et,
    Ct: () => Q,
    LR: () => ee,
    O8: () => W,
    RO: () => K,
    Rx: () => q,
    U_: () => j,
    cD: () => Z,
    yq: () => Y,
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
    _ = n(413748),
    f = n(937008),
    p = n(156312),
    h = n(970077),
    m = n(961098),
    E = n(222707),
    g = n(773669),
    A = n(594832),
    I = n(97352),
    T = n(45938),
    S = n(975571),
    y = n(927578),
    v = n(580630),
    N = n(40185),
    C = n(881489),
    R = n(906023),
    O = n(810498),
    b = n(477421),
    D = n(422936),
    L = n(735164),
    w = n(363476),
    M = n(156962),
    x = n(871181),
    P = n(318007),
    k = n(958720),
    U = n(285719),
    G = n(788868),
    F = n(652215);
n(26279);
var V = n(818348),
    B = n(985018),
    H = n(239746);
function j(e, t) {
    let { isEligibleForBOGOPromotion: n } = t;
    return null != e && !n;
}
function Y(e, t) {
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
        s = e.skuId;
    switch (t) {
        case G.pe.TIER_0:
            switch (s) {
                case G.pe.TIER_1:
                    return B.intl.string(B.t.q6mxDS);
                case G.pe.TIER_2:
                    return B.intl.string(B.t.seZVS0);
                default:
                    return i;
            }
        case G.pe.TIER_1:
            switch (s) {
                case G.pe.TIER_0:
                    return B.intl.string(B.t["7+u2zg"]);
                case G.pe.TIER_2:
                    return B.intl.string(B.t.NG2qcc);
                default:
                    return i;
            }
        case G.pe.TIER_2:
            switch (s) {
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
let W = () => {
        let { userTrialOffer: e } = (0, p.P5)(),
            t = e?.subscription_trial,
            { daysCount: n, copy: r } = i.useMemo(
                () =>
                    t?.interval === G.WT.DAY
                        ? t?.interval_count > 7
                            ? { daysCount: 14, copy: B.intl.string(B.t.Z1V2cs) }
                            : { daysCount: 7, copy: B.intl.string(B.t.MI1rHs) }
                        : { daysCount: 30, copy: B.intl.string(B.t["+S5lrV"]) },
                [t],
            );
        return { daysCount: n, copy: r, userTrialOffer: e };
    },
    K = (e) => {
        let { selectedPlanId: t, priceOptions: n, planOptions: r, subscriptionPeriodEnd: s, showTotal: u } = e,
            { selectedSkuId: c, setSelectedPlanId: d } = (0, _.t)((e) => ({
                selectedSkuId: e.selectedSkuId,
                setSelectedPlanId: e.setSelectedPlanId,
            })),
            {
                activeSubscription: E,
                priceOptions: g,
                userTrialOffer: S,
                isEligibleForTrial: v,
                discountOffer: C,
            } = (0, p.P5)(),
            {
                isGift: R,
                giftRecipient: D,
                selectedGiftStyle: L,
                customGiftMessage: w,
                setCustomGiftMessage: M,
                claimableRewards: x,
                setSelectedGiftingPromotionReward: P,
            } = (0, f.Pv)(),
            k = (0, h.A)(),
            U = (0, O.kz)(k, R && (0, T.Ik)(D), x),
            F = (0, A.tA)({ giftRecipient: D, isGift: R }),
            B = E;
        a()(void 0 !== B, "should not be undefined");
        let [H, j] = (0, o.yK)([I.A], () => [null != B ? I.A.get(B.planId) : null, null != t ? I.A.get(t) : null]),
            Y = S?.subscription_trial,
            K = (0, N.cg)(),
            $ = j ?? k,
            z = i.useCallback(
                (e) => {
                    d(e);
                },
                [d],
            ),
            q = n ?? g;
        a()(null != q, "Price option has to be set");
        let Z = C?.discount?.plan_ids,
            X = null != C && r.some((e) => Z?.includes(e)) && null != C.discount,
            Q = r.includes(G.gD.PREMIUM_MONTH_TIER_2) ? (0, y.y8)(G.gD.PREMIUM_MONTH_TIER_2, !1, R, q) : void 0,
            J = $?.id != null && r.includes($.id);
        i.useEffect(() => {
            if (!J) {
                if (null == H || R) z(r[0]);
                else if (null != H) {
                    let e = r.find((e) => e !== H.id);
                    null != e && z(e);
                }
            }
        }, [J, R, r, H, z]),
            i.useEffect(() => {
                U && null != x && x.length > 0 && P(x[0]);
            }, [x, P, U]);
        let { ref: ee, ...et } = (0, l._u)(),
            en = $?.id != null ? (0, y.y8)($.id, !1, R, q) : void 0,
            { ipCountryCode: er } = (0, b.A)(),
            ei = "HR" === er && null != en && en.currency === V.Yr.EUR,
            es = (0, y.J$)(q.paymentSourceId),
            ea = !R && (X || (null != Y && v && null != s)),
            { discountAmountOff: eo } = (0, m.J)(G.gD.PREMIUM_MONTH_TIER_2),
            el = c,
            { copy: eu } = W();
        return {
            skuId: el,
            setPlanId: z,
            selectedPlan: $,
            selectedPlanPrice: en,
            premiumSubscriptionPlan: H,
            premiumSubscription: B,
            thePriceOptions: q,
            hasSeenCollectiblesInSkuSelect: F,
            shouldShowUpdatedPaymentModal: ea,
            shouldShowHRKEuroWarning: ei,
            shouldShowTotalInSubscriptionFlow: !v && !X && J && u,
            canContinue: J,
            isPrepaid: es,
            radioGroupRef: ee,
            radioGroupProps: et,
            isGift: R,
            giftRecipient: D,
            customGiftMessage: w,
            setCustomGiftMessage: M,
            selectedGiftStyle: L,
            isEligibleForBOGOPromotion: K,
            isEligibleForTrial: v,
            userTrialOffer: S,
            trialPeriodCopy: eu,
            discountOffer: C,
            isPlansEligibleForDiscount: X,
            discountedPlanRegularPrice: Q,
            discountAmountOff: eo,
        };
    },
    $ = (e) => {
        let { isPrepaid: t, selectedPlan: n, selectedPlanPrice: i, intervalType: s, className: a } = e;
        return (0, r.jsxs)("div", {
            className: a,
            children: [
                (0, r.jsx)("div", { className: H.T }),
                (0, r.jsx)(L.Sd, {
                    label: B.intl.string(B.t.txajQG),
                    value: (0, r.jsx)(w.A, {
                        price: i.amount,
                        currency: i.currency,
                        intervalType: s,
                        intervalCount: n.intervalCount,
                        isPrepaidPaymentSource: t,
                    }),
                    className: H.M3,
                }),
            ],
        });
    },
    z = (e) => {
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
                if ((0, T.lo)(t) === T.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != i)
                    return (0, r.jsx)(x.A, {
                        className: H.iX,
                        innerClassName: H.pt,
                        onTextChange: (e) => i(e),
                        pendingText: n,
                        currentText: n,
                    });
            },
            A = (e) => (0, r.jsx)(u.D0$, { label: B.intl.string(B.t["3E5hXj"]), children: e });
        if ((0, T.Ik)(t))
            return (0, r.jsxs)("div", {
                className: H.mh,
                children: [
                    (0, r.jsx)("div", { className: H.MU, children: null != s && (0, r.jsx)(P.t, {}) }),
                    (0, r.jsxs)("div", {
                        className: H.Tc,
                        children: [
                            (0, r.jsx)(U.Z, { className: f ? H.KW : void 0, giftRecipient: t }),
                            g(),
                            A(m),
                            E,
                            !a && (0, r.jsx)(d.A, { onClose: p }),
                        ],
                    }),
                ],
            });
        let I = l && h;
        return (0, r.jsxs)("div", {
            className: H.Du,
            children: [
                (0, r.jsx)(U.Z, { className: f ? H.KW : void 0, giftRecipient: t }),
                A(m),
                I &&
                    null != c &&
                    null != _ &&
                    (0, r.jsx)($, { selectedPlan: c, selectedPlanPrice: _, intervalType: null, isPrepaid: o }),
                E,
                !a && (0, r.jsx)(d.A, { onClose: p }),
            ],
        });
    },
    q = (e) => {
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
            c = (0, o.bG)([g.default], () => g.default.locale),
            { isGift: d, giftRecipient: _ } = (0, f.Pv)(),
            p = d && (0, T.Ik)(_),
            { enabled: h } = R.A.getConfig({ location: "PremiumSwitchPlanSelectOption" });
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
            discountOffer: (0, D.O)(),
            isEligibleForBOGOPromotion: (0, N.cg)(),
        };
    },
    Z = (e, t) => {
        let n = null != e && e.planId === t,
            r =
                n ||
                (t === G.gD.PREMIUM_MONTH_TIER_2 &&
                    null != e &&
                    [G.gD.PREMIUM_YEAR_TIER_0, G.gD.PREMIUM_YEAR_TIER_1].includes(e.planId));
        return { isCurrentPlan: n, disabled: r };
    },
    X = (e) => {
        let { planOptions: t, radioGroupRef: n, selectedPlan: s, radioGroupProps: a } = e,
            o = q(e),
            l = i.useMemo(
                () =>
                    t.map((t) => {
                        let { isCurrentPlan: n, disabled: i } = Z(o.premiumSubscription, t);
                        return (0, r.jsx)(
                            k.Ay,
                            { planId: t, selected: s?.id === t, isCurrentPlan: n, disabled: e.disabled || i, ...o },
                            t,
                        );
                    }),
                [e.disabled, t, o, s],
            );
        return (0, r.jsx)("div", { ref: n, ...a, children: l });
    },
    Q = (e, t) => {
        let { subscriptionPeriodEnd: n, trialPeriodCopy: r } = t,
            i = e?.trial_id === G.Dw;
        return null == n
            ? null
            : i
              ? B.intl.format(B.t.nG95hA, { endDate: n })
              : B.intl.format(B.t.s4E7kb, { trialEnd: n, trialPeriod: r });
    },
    J = (e) => {
        let { shouldShowHRKEuroWarning: t, selectedPlanPrice: n } = e;
        return t && null != n
            ? (0, r.jsx)(c.A, {
                  message: B.intl.formatToPlainString(B.t["9hnZoK"], {
                      kunaPriceWithCurrency: (0, v.$g)(7.5345 * n.amount, V.Yr.HRK),
                  }),
              })
            : null;
    },
    ee = (e) => {
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
                    (0, r.jsx)($, {
                        className: u,
                        selectedPlan: t,
                        selectedPlanPrice: n,
                        intervalType: t.interval,
                        isPrepaid: i,
                    }),
                J({ shouldShowHRKEuroWarning: s, selectedPlanPrice: n }),
                !a &&
                    o &&
                    (0, r.jsx)(c.A, {
                        message: B.intl.format(B.t.Om31w8, {
                            documentationLink: S.A.getArticleURL(F.MVz.LOCALIZED_PRICING),
                        }),
                    }),
            ],
        });
    };
function et(e) {
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
            premiumSubscriptionPlan: m,
            isEligibleForBOGOPromotion: g,
            isGift: A,
            thePriceOptions: I,
            isEligibleForTrial: T,
            giftRecipient: S,
            customGiftMessage: y,
            setCustomGiftMessage: N,
            selectedGiftStyle: R,
            discountOffer: O,
            isPlansEligibleForDiscount: b,
            discountedPlanRegularPrice: D,
            hasSeenCollectiblesInSkuSelect: L,
            userTrialOffer: w,
            shouldShowUpdatedPaymentModal: x,
            discountAmountOff: P,
            isPrepaid: k,
            radioGroupRef: U,
            radioGroupProps: F,
            selectedPlanPrice: V,
            shouldShowHRKEuroWarning: W,
            shouldShowTotalInSubscriptionFlow: $,
            canContinue: q,
            trialPeriodCopy: Z,
        } = K({ selectedPlanId: n, priceOptions: s, planOptions: a, subscriptionPeriodEnd: o, showTotal: l }),
        et = (0, C.ds)(),
        en = (e, t, i) =>
            x
                ? t
                    ? (0, r.jsxs)("div", {
                          children: [
                              (0, r.jsx)(u.Text, {
                                  variant: "text-sm/normal",
                                  className: H.Tz,
                                  children: Q(e, { subscriptionPeriodEnd: o, trialPeriodCopy: Z }),
                              }),
                              (0, r.jsx)("hr", { className: H.RA }),
                          ],
                      })
                    : i && null != P && null != D && n === G.gD.PREMIUM_MONTH_TIER_2
                      ? (0, r.jsxs)("div", {
                            children: [
                                (0, r.jsx)(u.Text, {
                                    variant: "text-sm/normal",
                                    className: H.Tz,
                                    children: B.intl.format(B.t["nG7g/E"], {
                                        numMonths: O?.discount.user_usage_limit ?? "",
                                        discountedPrice: (0, v.$g)(D.amount - P, D.currency),
                                        regularPrice: (0, v.$g)(D.amount, D.currency),
                                    }),
                                }),
                                (0, r.jsx)("hr", { className: H.RA }),
                            ],
                        })
                      : void 0
                : (0, r.jsx)("div", { className: H.VZ, children: B.intl.string(B.t.a19jpU) }),
        er = () =>
            (0, r.jsx)(X, {
                disabled: t,
                planOptions: a,
                radioGroupRef: U,
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
        { showFractionalPremiumBanner: ei, fractionalPremiumInfo: es } = (0, E._V)({
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
        return (0, r.jsx)(z, {
            giftRecipient: S,
            customGiftMessage: y,
            setCustomGiftMessage: N,
            selectedGiftStyle: R,
            hasSeenCollectiblesInSkuSelect: L,
            isPrepaid: k,
            canContinue: q,
            selectedPlan: p,
            selectedPlanPrice: V,
            useCompactGiftComponents: c,
            handleClose: d,
            showTotal: l,
            switchPlanSelectComponent: er(),
            warningComponent: J({ shouldShowHRKEuroWarning: W, selectedPlanPrice: V }),
        });
    let ea = !(T && ei && !et),
        eo = j(m, { isEligibleForBOGOPromotion: g });
    return (0, r.jsxs)("div", {
        children: [
            ei &&
                !et &&
                (0, r.jsx)(M.vi, {
                    fractionalPremiumInfo: es,
                    enablePremiumBrandRefresh: !0,
                    variant: T ? M.uA.TRIAL : void 0,
                    trialPeriod: T ? Z : void 0,
                    trialEnd: T ? o : void 0,
                }),
            eo && !ei && (0, r.jsx)("div", { className: H.G3, children: Y(m, _) }),
            ea && en(w, T, b),
            er(),
            ee({
                selectedPlan: p,
                selectedPlanPrice: V,
                isPrepaid: k,
                shouldShowHRKEuroWarning: W,
                shouldShowUpdatedPaymentModal: x,
                showTotal: l,
                shouldShowTotalInSubscriptionFlow: $,
            }),
        ],
    });
}
