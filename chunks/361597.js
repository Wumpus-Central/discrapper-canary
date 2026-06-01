n.d(t, {
    U_: () => en,
    Rx: () => eo,
    yq: () => el,
    LR: () => em,
    $p: () => eh,
    cD: () => eu,
    O8: () => er,
    Ct: () => ed,
    RO: () => ei,
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
    I = n(509536),
    f = n(663066),
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
                (0, f.dF)(I.Zt);
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
var M = n(937008),
    b = n(768050),
    L = n(222707),
    j = n(773669),
    O = n(561794),
    w = n(97352),
    D = n(45938),
    U = n(975571),
    k = n(428262),
    G = n(580630),
    Y = n(960851),
    F = n(881489),
    B = n(906023),
    W = n(380619),
    H = n(477421),
    V = n(410516),
    K = n(735164),
    Z = n(363476),
    q = n(531506),
    z = n(871181),
    $ = n(318007),
    J = n(736339),
    X = n(285719),
    Q = n(788868);
n(26279);
var ee = n(818348),
    et = n(345138);
function en(e, t) {
    let { isEligibleForBOGOPromotion: n } = t;
    return null != e && !n;
}
function el(e, t) {
    let n = g.intl.string(g.t.BYa62u),
        l = g.intl.string(g.t.CDa6Dq),
        r = (() => {
            switch (e.interval) {
                case Q.WT.YEAR:
                    return n;
                case Q.WT.MONTH:
                default:
                    return l;
            }
        })(),
        i = e.skuId;
    switch (t) {
        case Q.pe.TIER_0:
            switch (i) {
                case Q.pe.TIER_1:
                    return g.intl.string(g.t.q6mxDS);
                case Q.pe.TIER_2:
                    return g.intl.string(g.t.seZVS0);
                default:
                    return r;
            }
        case Q.pe.TIER_1:
            switch (i) {
                case Q.pe.TIER_0:
                    return g.intl.string(g.t["7+u2zg"]);
                case Q.pe.TIER_2:
                    return g.intl.string(g.t.NG2qcc);
                default:
                    return r;
            }
        case Q.pe.TIER_2:
            switch (i) {
                case Q.pe.TIER_0:
                case Q.pe.TIER_1:
                    return g.intl.string(g.t["eB0/w9"]);
                case Q.pe.TIER_2:
                    return e.interval === Q.WT.MONTH
                        ? g.intl.formatToPlainString(g.t.RqUv86, { numFreeGuildSubscriptions: Q.M4 })
                        : r;
                default:
                    return r;
            }
        default:
            return r;
    }
}
let er = () => {
        let { userTrialOffer: e } = (0, m.i)(),
            t = e?.subscription_trial,
            { daysCount: n, copy: l } = r.useMemo(
                () =>
                    t?.interval === Q.WT.DAY
                        ? t?.interval_count > 7
                            ? { daysCount: 14, copy: g.intl.string(g.t.Z1V2cs) }
                            : { daysCount: 7, copy: g.intl.string(g.t.MI1rHs) }
                        : { daysCount: 30, copy: g.intl.string(g.t["+S5lrV"]) },
                [t],
            );
        return { daysCount: n, copy: l, userTrialOffer: e };
    },
    ei = (e) => {
        let { selectedPlanId: t, priceOptions: n, planOptions: l, subscriptionPeriodEnd: i, showTotal: u } = e,
            {
                selectedSkuId: c,
                setSelectedPlanId: d,
                checkoutPriceOptions: p,
            } = (0, A.t4)((e) => ({
                selectedSkuId: e.selectedSkuId,
                setSelectedPlanId: e.setSelectedPlanId,
                checkoutPriceOptions: e.checkoutPriceOptions,
            })),
            { activeSubscription: C } = (0, b.P5)(),
            { userTrialOffer: E, isEligibleForTrial: y, discountOffer: P } = (0, m.i)(),
            S = (0, V.YJ)(P),
            {
                isGift: _,
                giftRecipient: I,
                selectedGiftStyle: f,
                customGiftMessage: T,
                setCustomGiftMessage: N,
                claimableRewards: v,
                setSelectedGiftingPromotionReward: g,
            } = (0, M.Pv)(),
            x = (0, h.A)(),
            R = (0, W.kz)(x, _ && (0, D.Ik)(I), v),
            L = (0, O.tA)({ giftRecipient: I, isGift: _ });
        a()(void 0 !== C, "should not be undefined");
        let [j, U] = (0, s.yK)([w.A], () => [null != C ? w.A.get(C.planId) : null, null != t ? w.A.get(t) : null]),
            G = E?.subscription_trial,
            F = (0, Y.cg)(),
            B = U ?? x,
            K = r.useCallback(
                (e) => {
                    d(e);
                },
                [d],
            ),
            Z = n ?? p;
        a()(null != Z, "Price option has to be set");
        let q = P?.discount?.planIds,
            z = null != P && l.some((e) => q?.includes(e)) && null != P.discount,
            $ = null != S && l.includes(S) ? (0, k.y8)(S, !1, _, Z) : void 0,
            J = B?.id != null && l.includes(B.id);
        r.useEffect(() => {
            if (!J) {
                let e = !_ && null != S && l.includes(S) ? S : null;
                if (null == j || _) K(e ?? l[0]);
                else if (null != j) {
                    let e = l.find((e) => e !== j.id);
                    null != e && K(e);
                }
            }
        }, [J, _, l, j, K, S]),
            r.useEffect(() => {
                R && null != v && v.length > 0 && g(v[0]);
            }, [v, g, R]);
        let { ref: X, ...Q } = (0, o._u)(),
            et = B?.id != null ? (0, k.y8)(B.id, !1, _, Z) : void 0,
            { ipCountryCode: en } = (0, H.A)(),
            el = "HR" === en && null != et && et.currency === ee.Yr.EUR,
            ei = (0, k.J$)(Z.paymentSourceId),
            ea = !_ && (z || (null != G && y && null != i)),
            { copy: es } = er();
        return {
            skuId: c,
            setPlanId: K,
            selectedPlan: B,
            selectedPlanPrice: et,
            premiumSubscriptionPlan: j,
            premiumSubscription: C,
            thePriceOptions: Z,
            hasSeenCollectiblesInSkuSelect: L,
            shouldShowUpdatedPaymentModal: ea,
            shouldShowHRKEuroWarning: el,
            shouldShowTotalInSubscriptionFlow: !y && !z && J && u,
            canContinue: J,
            isPrepaid: ei,
            radioGroupRef: X,
            radioGroupProps: Q,
            isGift: _,
            giftRecipient: I,
            customGiftMessage: T,
            setCustomGiftMessage: N,
            selectedGiftStyle: f,
            isEligibleForBOGOPromotion: F,
            isEligibleForTrial: y,
            userTrialOffer: E,
            trialPeriodCopy: es,
            isPlansEligibleForDiscount: z,
            discountedPlanRegularPrice: $,
        };
    },
    ea = (e) => {
        let { isPrepaid: t, selectedPlan: n, selectedPlanPrice: r, intervalType: i, className: a } = e;
        return (0, l.jsxs)("div", {
            className: a,
            children: [
                (0, l.jsx)("div", { className: et.T }),
                (0, l.jsx)(K.Sd, {
                    label: g.intl.string(g.t.txajQG),
                    value: (0, l.jsx)(Z.A, {
                        price: r.amount,
                        currency: r.currency,
                        intervalType: i,
                        intervalCount: n.intervalCount,
                        isPrepaidPaymentSource: t,
                    }),
                    className: et.M3,
                }),
            ],
        });
    },
    es = (e) => {
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
        return (0, D.Ik)(t)
            ? (0, l.jsxs)("div", {
                  className: et.mh,
                  children: [
                      (0, l.jsx)("div", { className: et.MU, children: null != i && (0, l.jsx)($.t, {}) }),
                      (0, l.jsxs)("div", {
                          className: et.Tc,
                          children: [
                              (0, l.jsx)(X.Z, { className: m ? et.KW : void 0, giftRecipient: t }),
                              (() => {
                                  if ((0, D.lo)(t) === D.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != r)
                                      return (0, l.jsx)(z.A, {
                                          className: et.iX,
                                          innerClassName: et.pt,
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
                  className: et.Du,
                  children: [
                      (0, l.jsx)(X.Z, { className: m ? et.KW : void 0, giftRecipient: t }),
                      y(C),
                      o &&
                          A &&
                          null != d &&
                          null != p &&
                          (0, l.jsx)(ea, { selectedPlan: d, selectedPlanPrice: p, intervalType: null, isPrepaid: s }),
                      E,
                      !a && (0, l.jsx)(R, { onClose: h }),
                  ],
              });
    },
    eo = (e) => {
        let {
                isPrepaid: t,
                premiumSubscription: n,
                setPlanId: l,
                thePriceOptions: r,
                shouldShowUpdatedPaymentModal: i,
                isEligibleForTrial: a,
                isPlansEligibleForDiscount: o,
            } = e,
            u = (0, s.bG)([j.default], () => j.default.locale),
            { isGift: c, giftRecipient: d } = (0, M.Pv)(),
            p = c && (0, D.Ik)(d),
            { enabled: m } = B.A.getConfig({ location: "PremiumSwitchPlanSelectOption" });
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
            isEligibleForBOGOPromotion: (0, Y.cg)(),
        };
    },
    eu = (e, t) => {
        let n = null != e && e.planId === t,
            l =
                n ||
                (t === Q.gD.PREMIUM_MONTH_TIER_2 &&
                    null != e &&
                    [Q.gD.PREMIUM_YEAR_TIER_0, Q.gD.PREMIUM_YEAR_TIER_1].includes(e.planId));
        return { isCurrentPlan: n, disabled: l };
    },
    ec = (e) => {
        let { planOptions: t, radioGroupRef: n, selectedPlan: i, radioGroupProps: a } = e,
            s = eo(e),
            o = r.useMemo(
                () =>
                    t.map((t) => {
                        let { isCurrentPlan: n, disabled: r } = eu(s.premiumSubscription, t);
                        return (0, l.jsx)(
                            J.Ay,
                            { planId: t, selected: i?.id === t, isCurrentPlan: n, disabled: e.disabled || r, ...s },
                            t,
                        );
                    }),
                [e.disabled, t, s, i],
            );
        return (0, l.jsx)("div", { ref: n, ...a, children: o });
    },
    ed = (e, t) => {
        let { subscriptionPeriodEnd: n, trialPeriodCopy: l } = t,
            r = e?.trial_id === Q.Dw;
        return null == n
            ? null
            : r
              ? g.intl.format(g.t.nG95hA, { endDate: n })
              : g.intl.format(g.t.s4E7kb, { trialEnd: n, trialPeriod: l });
    },
    ep = (e) => {
        let { shouldShowHRKEuroWarning: t, selectedPlanPrice: n } = e;
        return t && null != n
            ? (0, l.jsx)(p.A, {
                  message: g.intl.formatToPlainString(g.t["9hnZoK"], {
                      kunaPriceWithCurrency: (0, G.$g)(7.5345 * n.amount, ee.Yr.HRK),
                  }),
              })
            : null;
    },
    em = (e) => {
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
                    (0, l.jsx)(ea, {
                        className: u,
                        selectedPlan: t,
                        selectedPlanPrice: n,
                        intervalType: t.interval,
                        isPrepaid: r,
                    }),
                ep({ shouldShowHRKEuroWarning: i, selectedPlanPrice: n }),
                !a &&
                    s &&
                    (0, l.jsx)(p.A, {
                        message: g.intl.format(g.t.Om31w8, {
                            documentationLink: U.A.getArticleURL(v.MVz.LOCALIZED_PRICING),
                        }),
                    }),
            ],
        });
    };
function eh(e) {
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
            giftRecipient: I,
            customGiftMessage: f,
            setCustomGiftMessage: T,
            selectedGiftStyle: N,
            isPlansEligibleForDiscount: v,
            discountedPlanRegularPrice: x,
            hasSeenCollectiblesInSkuSelect: R,
            userTrialOffer: M,
            shouldShowUpdatedPaymentModal: b,
            isPrepaid: j,
            radioGroupRef: O,
            radioGroupProps: w,
            selectedPlanPrice: D,
            shouldShowHRKEuroWarning: U,
            shouldShowTotalInSubscriptionFlow: k,
            canContinue: Y,
            trialPeriodCopy: B,
        } = ei({ selectedPlanId: n, priceOptions: i, planOptions: a, subscriptionPeriodEnd: s, showTotal: o }),
        { discountAmountOff: W, applicablePlan: H, discountOffer: V } = (0, A.t4)((e) => e.premiumDiscountInfo),
        K = (0, F.ds)(),
        Z = () =>
            (0, l.jsx)(ec, {
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
                shouldShowUpdatedPaymentModal: b,
                isEligibleForTrial: _,
                isPlansEligibleForDiscount: v,
            }),
        { showFractionalPremiumBanner: z, fractionalPremiumInfo: $ } = (0, L._V)({
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
        return (0, l.jsx)(es, {
            giftRecipient: I,
            customGiftMessage: f,
            setCustomGiftMessage: T,
            selectedGiftStyle: N,
            hasSeenCollectiblesInSkuSelect: R,
            isPrepaid: j,
            canContinue: Y,
            selectedPlan: h,
            selectedPlanPrice: D,
            useCompactGiftComponents: u,
            handleClose: c,
            showTotal: o,
            switchPlanSelectComponent: Z(),
            warningComponent: ep({ shouldShowHRKEuroWarning: U, selectedPlanPrice: D }),
        });
    let J = !(_ && z && !K),
        X = en(E, { isEligibleForBOGOPromotion: y });
    return (0, l.jsxs)("div", {
        children: [
            z &&
                !K &&
                (0, l.jsx)(q.vi, {
                    fractionalPremiumInfo: $,
                    enablePremiumBrandRefresh: !0,
                    variant: _ ? q.uA.TRIAL : void 0,
                    trialPeriod: _ ? B : void 0,
                    trialEnd: _ ? s : void 0,
                }),
            X && !z && (0, l.jsx)("div", { className: et.G3, children: el(E, p) }),
            J &&
                ((e, t, r) => {
                    if (!b) return (0, l.jsx)("div", { className: et.VZ, children: g.intl.string(g.t.a19jpU) });
                    if (t)
                        return (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)(d.E, {
                                    variant: "text-sm/normal",
                                    className: et.Tz,
                                    children: ed(e, { subscriptionPeriodEnd: s, trialPeriodCopy: B }),
                                }),
                                (0, l.jsx)("hr", { className: et.RA }),
                            ],
                        });
                    if (r && null != W && null != x && null != H && n === H) {
                        let e = h?.interval === Q.WT.YEAR,
                            t = (0, G.$g)(x.amount - W, x.currency),
                            n = (0, G.$g)(x.amount, x.currency);
                        return (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)(d.E, {
                                    variant: "text-sm/normal",
                                    className: et.Tz,
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
                                (0, l.jsx)("hr", { className: et.RA }),
                            ],
                        });
                    }
                })(M, _, v),
            Z(),
            em({
                selectedPlan: h,
                selectedPlanPrice: D,
                isPrepaid: j,
                shouldShowHRKEuroWarning: U,
                shouldShowUpdatedPaymentModal: b,
                showTotal: o,
                shouldShowTotalInSubscriptionFlow: k,
            }),
        ],
    });
}
