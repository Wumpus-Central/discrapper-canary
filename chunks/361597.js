n.d(t, {
    U_: () => et,
    Rx: () => es,
    yq: () => en,
    LR: () => ep,
    $p: () => em,
    cD: () => eo,
    O8: () => el,
    Ct: () => ec,
    RO: () => er,
});
var l = n(627968),
    r = n(64700),
    i = n(284009),
    a = n.n(i),
    s = n(17928),
    o = n(785007),
    u = n(331322),
    c = n(534514),
    d = n(834730),
    p = n(726656),
    m = n(463376),
    h = n(558620),
    A = n(722847),
    C = n(34188),
    E = n(661531),
    y = n(939249),
    P = n(398590),
    S = n(793574),
    _ = n(688810),
    f = n(509536),
    I = n(663066),
    T = n(976860),
    N = n(859040),
    v = n(652215),
    g = n(375708),
    x = n(456508);
let R = (e) => {
    let { onClose: t } = e,
        { analyticsLocations: n } = (0, _.Ay)(),
        r = () => {
            t(),
                (0, T.pX)(v.BVt.COLLECTIBLES_SHOP),
                (0, N.Cz)({ analyticsSource: S.A.PREMIUM_PAYMENT_MODAL, analyticsLocations: n }),
                (0, P.jH)(),
                (0, I.dF)(f.Zt);
        };
    return (0, l.jsxs)("div", {
        className: x.kL,
        children: [
            (0, l.jsx)("div", {
                className: x.Wk,
                children: (0, l.jsx)(C.U, { size: "custom", width: 20, height: 20, color: E.A.colors.ICON_DEFAULT }),
            }),
            (0, l.jsx)(d.E, {
                variant: "text-sm/normal",
                children: g.intl.format(g.t.twSHte, {
                    checkItOut: (e) => (0, l.jsx)(y.D, { className: x.nf, onClick: r, children: e }),
                }),
            }),
        ],
    });
};
var M = n(259160),
    b = n(222707),
    L = n(773669),
    j = n(561794),
    O = n(97352),
    w = n(45938),
    D = n(975571),
    U = n(428262),
    k = n(580630),
    G = n(960851),
    Y = n(881489),
    F = n(906023),
    B = n(380619),
    W = n(477421),
    H = n(410516),
    V = n(735164),
    K = n(363476),
    Z = n(531506),
    q = n(871181),
    z = n(318007),
    $ = n(736339),
    J = n(285719),
    X = n(788868);
n(26279);
var Q = n(818348),
    ee = n(345138);
function et(e, t) {
    let { isEligibleForBOGOPromotion: n } = t;
    return null != e && !n;
}
function en(e, t) {
    let n = g.intl.string(g.t.BYa62u),
        l = g.intl.string(g.t.CDa6Dq),
        r = (() => {
            switch (e.interval) {
                case X.WT.YEAR:
                    return n;
                case X.WT.MONTH:
                default:
                    return l;
            }
        })(),
        i = e.skuId;
    switch (t) {
        case X.pe.TIER_0:
            switch (i) {
                case X.pe.TIER_1:
                    return g.intl.string(g.t.q6mxDS);
                case X.pe.TIER_2:
                    return g.intl.string(g.t.seZVS0);
                default:
                    return r;
            }
        case X.pe.TIER_1:
            switch (i) {
                case X.pe.TIER_0:
                    return g.intl.string(g.t["7+u2zg"]);
                case X.pe.TIER_2:
                    return g.intl.string(g.t.NG2qcc);
                default:
                    return r;
            }
        case X.pe.TIER_2:
            switch (i) {
                case X.pe.TIER_0:
                case X.pe.TIER_1:
                    return g.intl.string(g.t["eB0/w9"]);
                case X.pe.TIER_2:
                    return e.interval === X.WT.MONTH
                        ? g.intl.formatToPlainString(g.t.RqUv86, { numFreeGuildSubscriptions: X.M4 })
                        : r;
                default:
                    return r;
            }
        default:
            return r;
    }
}
let el = () => {
        let { userTrialOffer: e } = (0, m.i)(),
            t = e?.subscription_trial,
            { daysCount: n, copy: l } = r.useMemo(
                () =>
                    t?.interval === X.WT.DAY
                        ? t?.interval_count > 7
                            ? { daysCount: 14, copy: g.intl.string(g.t.Z1V2cs) }
                            : { daysCount: 7, copy: g.intl.string(g.t.MI1rHs) }
                        : { daysCount: 30, copy: g.intl.string(g.t["+S5lrV"]) },
                [t],
            );
        return { daysCount: n, copy: l, userTrialOffer: e };
    },
    er = (e) => {
        let { selectedPlanId: t, priceOptions: n, planOptions: l, subscriptionPeriodEnd: i, showTotal: u } = e,
            {
                selectedSkuId: c,
                setSelectedPlanId: d,
                checkoutPriceOptions: p,
                activeSubscription: C,
            } = (0, A.t4)((e) => ({
                selectedSkuId: e.selectedSkuId,
                setSelectedPlanId: e.setSelectedPlanId,
                checkoutPriceOptions: e.checkoutPriceOptions,
                activeSubscription: e.activeSubscription,
            })),
            { userTrialOffer: E, isEligibleForTrial: y, discountOffer: P } = (0, m.i)(),
            S = (0, H.YJ)(P),
            {
                isGift: _,
                giftRecipient: f,
                selectedGiftStyle: I,
                customGiftMessage: T,
                setCustomGiftMessage: N,
                claimableRewards: v,
                setSelectedGiftingPromotionReward: g,
            } = (0, M.Pv)(),
            x = (0, h.A)(),
            R = (0, B.kz)(x, _ && (0, w.Ik)(f), v),
            b = (0, j.tA)({ giftRecipient: f, isGift: _ });
        a()(void 0 !== C, "should not be undefined");
        let [L, D] = (0, s.yK)([O.A], () => [null != C ? O.A.get(C.planId) : null, null != t ? O.A.get(t) : null]),
            k = E?.subscription_trial,
            Y = (0, G.cg)(),
            F = D ?? x,
            V = r.useCallback(
                (e) => {
                    d(e);
                },
                [d],
            ),
            K = n ?? p;
        a()(null != K, "Price option has to be set");
        let Z = P?.discount?.planIds,
            q = null != P && l.some((e) => Z?.includes(e)) && null != P.discount,
            z = null != S && l.includes(S) ? (0, U.y8)(S, !1, _, K) : void 0,
            $ = F?.id != null && l.includes(F.id);
        r.useEffect(() => {
            if (!$) {
                let e = !_ && null != S && l.includes(S) ? S : null;
                if (null == L || _) V(e ?? l[0]);
                else if (null != L) {
                    let e = l.find((e) => e !== L.id);
                    null != e && V(e);
                }
            }
        }, [$, _, l, L, V, S]),
            r.useEffect(() => {
                R && null != v && v.length > 0 && g(v[0]);
            }, [v, g, R]);
        let { ref: J, ...X } = (0, o._u)(),
            ee = F?.id != null ? (0, U.y8)(F.id, !1, _, K) : void 0,
            { ipCountryCode: et } = (0, W.A)(),
            en = "HR" === et && null != ee && ee.currency === Q.Yr.EUR,
            er = (0, U.J$)(K.paymentSourceId),
            ei = !_ && (q || (null != k && y && null != i)),
            { copy: ea } = el();
        return {
            skuId: c,
            setPlanId: V,
            selectedPlan: F,
            selectedPlanPrice: ee,
            premiumSubscriptionPlan: L,
            premiumSubscription: C,
            thePriceOptions: K,
            hasSeenCollectiblesInSkuSelect: b,
            shouldShowUpdatedPaymentModal: ei,
            shouldShowHRKEuroWarning: en,
            shouldShowTotalInSubscriptionFlow: !y && !q && $ && u,
            canContinue: $,
            isPrepaid: er,
            radioGroupRef: J,
            radioGroupProps: X,
            isGift: _,
            giftRecipient: f,
            customGiftMessage: T,
            setCustomGiftMessage: N,
            selectedGiftStyle: I,
            isEligibleForBOGOPromotion: Y,
            isEligibleForTrial: y,
            userTrialOffer: E,
            trialPeriodCopy: ea,
            isPlansEligibleForDiscount: q,
            discountedPlanRegularPrice: z,
        };
    },
    ei = (e) => {
        let { isPrepaid: t, selectedPlan: n, selectedPlanPrice: r, intervalType: i, className: a } = e;
        return (0, l.jsxs)("div", {
            className: a,
            children: [
                (0, l.jsx)("div", { className: ee.T }),
                (0, l.jsx)(V.Sd, {
                    label: g.intl.string(g.t.txajQG),
                    value: (0, l.jsx)(K.A, {
                        price: r.amount,
                        currency: r.currency,
                        intervalType: i,
                        intervalCount: n.intervalCount,
                        isPrepaidPaymentSource: t,
                    }),
                    className: ee.M3,
                }),
            ],
        });
    },
    ea = (e) => {
        let {
                giftRecipient: t,
                customGiftMessage: n,
                setCustomGiftMessage: r,
                selectedGiftStyle: i,
                hasSeenCollectiblesInSkuSelect: a,
                isPrepaid: s,
                canContinue: o,
                selectedPlan: d,
                selectedPlanPrice: p,
                useCompactGiftComponents: m,
                handleClose: h,
                showTotal: A,
                switchPlanSelectComponent: C,
                warningComponent: E,
            } = e,
            y = (e) =>
                (0, l.jsxs)(u.B, {
                    gap: 8,
                    children: [
                        (0, l.jsx)(c.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: g.intl.string(g.t["3E5hXj"]),
                        }),
                        e,
                    ],
                });
        return (0, w.Ik)(t)
            ? (0, l.jsxs)("div", {
                  className: ee.mh,
                  children: [
                      (0, l.jsx)("div", { className: ee.MU, children: null != i && (0, l.jsx)(z.t, {}) }),
                      (0, l.jsxs)("div", {
                          className: ee.Tc,
                          children: [
                              (0, l.jsx)(J.Z, { className: m ? ee.KW : void 0, giftRecipient: t }),
                              (() => {
                                  if ((0, w.lo)(t) === w.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != r)
                                      return (0, l.jsx)(q.A, {
                                          className: ee.iX,
                                          innerClassName: ee.pt,
                                          onTextChange: (e) => r(e),
                                          pendingText: n,
                                          currentText: n,
                                      });
                              })(),
                              y(C),
                              E,
                              !a && (0, l.jsx)(R, { onClose: h }),
                          ],
                      }),
                  ],
              })
            : (0, l.jsxs)("div", {
                  className: ee.Du,
                  children: [
                      (0, l.jsx)(J.Z, { className: m ? ee.KW : void 0, giftRecipient: t }),
                      y(C),
                      o &&
                          A &&
                          null != d &&
                          null != p &&
                          (0, l.jsx)(ei, { selectedPlan: d, selectedPlanPrice: p, intervalType: null, isPrepaid: s }),
                      E,
                      !a && (0, l.jsx)(R, { onClose: h }),
                  ],
              });
    },
    es = (e) => {
        let {
                isPrepaid: t,
                premiumSubscription: n,
                setPlanId: l,
                thePriceOptions: r,
                shouldShowUpdatedPaymentModal: i,
                isEligibleForTrial: a,
                isPlansEligibleForDiscount: o,
            } = e,
            u = (0, s.bG)([L.default], () => L.default.locale),
            { isGift: c, giftRecipient: d } = (0, M.Pv)(),
            p = c && (0, w.Ik)(d),
            { enabled: m } = F.A.getConfig({ location: "PremiumSwitchPlanSelectOption" });
        return {
            isPrepaid: t,
            selectPlan: l,
            premiumSubscription: c ? null : (n ?? null),
            priceOptions: r,
            shouldShowUpdatedPaymentModal: i,
            isEligibleForDiscount: o,
            discountInfo: (0, A.t4)((e) => e.premiumDiscountInfo),
            isEligibleForTrial: a,
            userLocale: u,
            isGift: c,
            isCustomGift: p,
            shouldUseCalculatedDiscount: m,
            isEligibleForBOGOPromotion: (0, G.cg)(),
        };
    },
    eo = (e, t) => {
        let n = null != e && e.planId === t,
            l =
                n ||
                (t === X.gD.PREMIUM_MONTH_TIER_2 &&
                    null != e &&
                    [X.gD.PREMIUM_YEAR_TIER_0, X.gD.PREMIUM_YEAR_TIER_1].includes(e.planId));
        return { isCurrentPlan: n, disabled: l };
    },
    eu = (e) => {
        let { planOptions: t, radioGroupRef: n, selectedPlan: i, radioGroupProps: a } = e,
            s = es(e),
            o = r.useMemo(
                () =>
                    t.map((t) => {
                        let { isCurrentPlan: n, disabled: r } = eo(s.premiumSubscription, t);
                        return (0, l.jsx)(
                            $.Ay,
                            { planId: t, selected: i?.id === t, isCurrentPlan: n, disabled: e.disabled || r, ...s },
                            t,
                        );
                    }),
                [e.disabled, t, s, i],
            );
        return (0, l.jsx)("div", { ref: n, ...a, children: o });
    },
    ec = (e, t) => {
        let { subscriptionPeriodEnd: n, trialPeriodCopy: l } = t,
            r = e?.trial_id === X.Dw;
        return null == n
            ? null
            : r
              ? g.intl.format(g.t.nG95hA, { endDate: n })
              : g.intl.format(g.t.s4E7kb, { trialEnd: n, trialPeriod: l });
    },
    ed = (e) => {
        let { shouldShowHRKEuroWarning: t, selectedPlanPrice: n } = e;
        return t && null != n
            ? (0, l.jsx)(p.A, {
                  message: g.intl.formatToPlainString(g.t["9hnZoK"], {
                      kunaPriceWithCurrency: (0, k.$g)(7.5345 * n.amount, Q.Yr.HRK),
                  }),
              })
            : null;
    },
    ep = (e) => {
        let {
            selectedPlan: t,
            selectedPlanPrice: n,
            isPrepaid: r,
            shouldShowHRKEuroWarning: i,
            shouldShowUpdatedPaymentModal: a,
            showTotal: s,
            shouldShowTotalInSubscriptionFlow: o,
            previewTotalSectionClassName: u,
        } = e;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                o &&
                    null != t &&
                    null != n &&
                    (0, l.jsx)(ei, {
                        className: u,
                        selectedPlan: t,
                        selectedPlanPrice: n,
                        intervalType: t.interval,
                        isPrepaid: r,
                    }),
                ed({ shouldShowHRKEuroWarning: i, selectedPlanPrice: n }),
                !a &&
                    s &&
                    (0, l.jsx)(p.A, {
                        message: g.intl.format(g.t.Om31w8, {
                            documentationLink: D.A.getArticleURL(v.MVz.LOCALIZED_PRICING),
                        }),
                    }),
            ],
        });
    };
function em(e) {
    let {
            disabled: t,
            selectedPlanId: n,
            planGroup: r,
            priceOptions: i,
            planOptions: a,
            subscriptionPeriodEnd: s,
            showTotal: o = !0,
            useCompactGiftComponents: u,
            handleClose: c,
        } = e,
        {
            skuId: p,
            setPlanId: m,
            selectedPlan: h,
            premiumSubscription: C,
            premiumSubscriptionPlan: E,
            isEligibleForBOGOPromotion: y,
            isGift: P,
            thePriceOptions: S,
            isEligibleForTrial: _,
            giftRecipient: f,
            customGiftMessage: I,
            setCustomGiftMessage: T,
            selectedGiftStyle: N,
            isPlansEligibleForDiscount: v,
            discountedPlanRegularPrice: x,
            hasSeenCollectiblesInSkuSelect: R,
            userTrialOffer: M,
            shouldShowUpdatedPaymentModal: L,
            isPrepaid: j,
            radioGroupRef: O,
            radioGroupProps: w,
            selectedPlanPrice: D,
            shouldShowHRKEuroWarning: U,
            shouldShowTotalInSubscriptionFlow: G,
            canContinue: F,
            trialPeriodCopy: B,
        } = er({ selectedPlanId: n, priceOptions: i, planOptions: a, subscriptionPeriodEnd: s, showTotal: o }),
        { discountAmountOff: W, applicablePlan: H, discountOffer: V } = (0, A.t4)((e) => e.premiumDiscountInfo),
        K = (0, Y.ds)(),
        q = () =>
            (0, l.jsx)(eu, {
                disabled: t,
                planOptions: a,
                radioGroupRef: O,
                radioGroupProps: w,
                isGift: P,
                isPrepaid: j,
                premiumSubscription: C,
                setPlanId: m,
                selectedPlan: h,
                thePriceOptions: S,
                shouldShowUpdatedPaymentModal: L,
                isEligibleForTrial: _,
                isPlansEligibleForDiscount: v,
            }),
        { showFractionalPremiumBanner: z, fractionalPremiumInfo: $ } = (0, b._V)({
            premiumSubscription: C,
            selectedPlanId: n,
            planGroup: r,
            isGift: P,
            fractionalPremiumInfoArgs: {
                forceFetch: !1,
                excludeReverseTrial: !1,
                excludeReverseTrialFromCountdown: !0,
            },
        });
    if (P)
        return (0, l.jsx)(ea, {
            giftRecipient: f,
            customGiftMessage: I,
            setCustomGiftMessage: T,
            selectedGiftStyle: N,
            hasSeenCollectiblesInSkuSelect: R,
            isPrepaid: j,
            canContinue: F,
            selectedPlan: h,
            selectedPlanPrice: D,
            useCompactGiftComponents: u,
            handleClose: c,
            showTotal: o,
            switchPlanSelectComponent: q(),
            warningComponent: ed({ shouldShowHRKEuroWarning: U, selectedPlanPrice: D }),
        });
    let J = !(_ && z && !K),
        Q = et(E, { isEligibleForBOGOPromotion: y });
    return (0, l.jsxs)("div", {
        children: [
            z &&
                !K &&
                (0, l.jsx)(Z.vi, {
                    fractionalPremiumInfo: $,
                    enablePremiumBrandRefresh: !0,
                    variant: _ ? Z.uA.TRIAL : void 0,
                    trialPeriod: _ ? B : void 0,
                    trialEnd: _ ? s : void 0,
                }),
            Q && !z && (0, l.jsx)("div", { className: ee.G3, children: en(E, p) }),
            J &&
                ((e, t, r) => {
                    if (!L) return (0, l.jsx)("div", { className: ee.VZ, children: g.intl.string(g.t.a19jpU) });
                    if (t)
                        return (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)(d.E, {
                                    variant: "text-sm/normal",
                                    className: ee.Tz,
                                    children: ec(e, { subscriptionPeriodEnd: s, trialPeriodCopy: B }),
                                }),
                                (0, l.jsx)("hr", { className: ee.RA }),
                            ],
                        });
                    if (r && null != W && null != x && null != H && n === H) {
                        let e = h?.interval === X.WT.YEAR,
                            t = (0, k.$g)(x.amount - W, x.currency),
                            n = (0, k.$g)(x.amount, x.currency);
                        return (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)(d.E, {
                                    variant: "text-sm/normal",
                                    className: ee.Tz,
                                    children: e
                                        ? g.intl.format(g.t.ofweWu, {
                                              numYears: V?.discount.userUsageLimit ?? "",
                                              discountedPrice: t,
                                              regularPrice: n,
                                          })
                                        : g.intl.format(g.t["nG7g/E"], {
                                              numMonths: V?.discount.userUsageLimit ?? "",
                                              discountedPrice: t,
                                              regularPrice: n,
                                          }),
                                }),
                                (0, l.jsx)("hr", { className: ee.RA }),
                            ],
                        });
                    }
                })(M, _, v),
            q(),
            ep({
                selectedPlan: h,
                selectedPlanPrice: D,
                isPrepaid: j,
                shouldShowHRKEuroWarning: U,
                shouldShowUpdatedPaymentModal: L,
                showTotal: o,
                shouldShowTotalInSubscriptionFlow: G,
            }),
        ],
    });
}
