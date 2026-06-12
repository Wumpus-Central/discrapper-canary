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
    A = n(211159),
    E = n(34188),
    C = n(661531),
    y = n(939249),
    _ = n(398590),
    S = n(793574),
    P = n(688810),
    I = n(509536),
    f = n(663066),
    T = n(976860),
    N = n(859040),
    g = n(652215),
    v = n(375708),
    x = n(456508);
let R = (e) => {
    let { onClose: t } = e,
        { analyticsLocations: n } = (0, P.Ay)(),
        r = () => {
            t(),
                (0, T.pX)(g.BVt.COLLECTIBLES_SHOP),
                (0, N.Cz)({ analyticsSource: S.A.PREMIUM_PAYMENT_MODAL, analyticsLocations: n }),
                (0, _.jH)(),
                (0, f.dF)(I.Zt);
        };
    return (0, l.jsxs)("div", {
        className: x.kL,
        children: [
            (0, l.jsx)("div", {
                className: x.Wk,
                children: (0, l.jsx)(E.U, { size: "custom", width: 20, height: 20, color: C.A.colors.ICON_DEFAULT }),
            }),
            (0, l.jsx)(d.E, {
                variant: "text-sm/normal",
                children: v.intl.format(v.t.twSHte, {
                    checkItOut: (e) => (0, l.jsx)(y.D, { className: x.nf, onClick: r, children: e }),
                }),
            }),
        ],
    });
};
var M = n(937008),
    b = n(222707),
    L = n(773669),
    O = n(561794),
    j = n(97352),
    w = n(45938),
    D = n(975571),
    U = n(428262),
    k = n(580630),
    G = n(960851),
    F = n(881489),
    Y = n(906023),
    B = n(380619),
    W = n(477421),
    H = n(410516),
    V = n(735164),
    K = n(363476),
    Z = n(531506),
    q = n(871181),
    z = n(318007),
    $ = n(736339),
    X = n(285719),
    J = n(788868);
n(26279);
var Q = n(818348),
    ee = n(345138);
function et(e, t) {
    let { isEligibleForBOGOPromotion: n } = t;
    return null != e && !n;
}
function en(e, t) {
    let n = v.intl.string(v.t.BYa62u),
        l = v.intl.string(v.t.CDa6Dq),
        r = (() => {
            switch (e.interval) {
                case J.WT.YEAR:
                    return n;
                case J.WT.MONTH:
                default:
                    return l;
            }
        })(),
        i = e.skuId;
    switch (t) {
        case J.pe.TIER_0:
            switch (i) {
                case J.pe.TIER_1:
                    return v.intl.string(v.t.q6mxDS);
                case J.pe.TIER_2:
                    return v.intl.string(v.t.seZVS0);
                default:
                    return r;
            }
        case J.pe.TIER_1:
            switch (i) {
                case J.pe.TIER_0:
                    return v.intl.string(v.t["7+u2zg"]);
                case J.pe.TIER_2:
                    return v.intl.string(v.t.NG2qcc);
                default:
                    return r;
            }
        case J.pe.TIER_2:
            switch (i) {
                case J.pe.TIER_0:
                case J.pe.TIER_1:
                    return v.intl.string(v.t["eB0/w9"]);
                case J.pe.TIER_2:
                    return e.interval === J.WT.MONTH
                        ? v.intl.formatToPlainString(v.t.RqUv86, { numFreeGuildSubscriptions: J.M4 })
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
                    t?.interval === J.WT.DAY
                        ? t?.interval_count > 7
                            ? { daysCount: 14, copy: v.intl.string(v.t.Z1V2cs) }
                            : { daysCount: 7, copy: v.intl.string(v.t.MI1rHs) }
                        : { daysCount: 30, copy: v.intl.string(v.t["+S5lrV"]) },
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
                activeSubscription: E,
            } = (0, A.t4)((e) => ({
                selectedSkuId: e.selectedSkuId,
                setSelectedPlanId: e.setSelectedPlanId,
                checkoutPriceOptions: e.checkoutPriceOptions,
                activeSubscription: e.activeSubscription,
            })),
            { userTrialOffer: C, isEligibleForTrial: y, discountOffer: _ } = (0, m.i)(),
            S = (0, H.YJ)(_),
            {
                isGift: P,
                giftRecipient: I,
                selectedGiftStyle: f,
                customGiftMessage: T,
                setCustomGiftMessage: N,
                claimableRewards: g,
                setSelectedGiftingPromotionReward: v,
            } = (0, M.Pv)(),
            x = (0, h.A)(),
            R = (0, B.kz)(x, P && (0, w.Ik)(I), g),
            b = (0, O.tA)({ giftRecipient: I, isGift: P });
        a()(void 0 !== E, "should not be undefined");
        let [L, D] = (0, s.yK)([j.A], () => [null != E ? j.A.get(E.planId) : null, null != t ? j.A.get(t) : null]),
            k = C?.subscription_trial,
            F = (0, G.cg)(),
            Y = D ?? x,
            V = r.useCallback(
                (e) => {
                    d(e);
                },
                [d],
            ),
            K = n ?? p;
        a()(null != K, "Price option has to be set");
        let Z = _?.discount?.planIds,
            q = null != _ && l.some((e) => Z?.includes(e)) && null != _.discount,
            z = null != S && l.includes(S) ? (0, U.y8)(S, !1, P, K) : void 0,
            $ = Y?.id != null && l.includes(Y.id);
        r.useEffect(() => {
            if (!$) {
                let e = !P && null != S && l.includes(S) ? S : null;
                if (null == L || P) V(e ?? l[0]);
                else if (null != L) {
                    let e = l.find((e) => e !== L.id);
                    null != e && V(e);
                }
            }
        }, [$, P, l, L, V, S]),
            r.useEffect(() => {
                R && null != g && g.length > 0 && v(g[0]);
            }, [g, v, R]);
        let { ref: X, ...J } = (0, o._u)(),
            ee = Y?.id != null ? (0, U.y8)(Y.id, !1, P, K) : void 0,
            { ipCountryCode: et } = (0, W.A)(),
            en = "HR" === et && null != ee && ee.currency === Q.Yr.EUR,
            er = (0, U.J$)(K.paymentSourceId),
            ei = !P && (q || (null != k && y && null != i)),
            { copy: ea } = el();
        return {
            skuId: c,
            setPlanId: V,
            selectedPlan: Y,
            selectedPlanPrice: ee,
            premiumSubscriptionPlan: L,
            premiumSubscription: E,
            thePriceOptions: K,
            hasSeenCollectiblesInSkuSelect: b,
            shouldShowUpdatedPaymentModal: ei,
            shouldShowHRKEuroWarning: en,
            shouldShowTotalInSubscriptionFlow: !y && !q && $ && u,
            canContinue: $,
            isPrepaid: er,
            radioGroupRef: X,
            radioGroupProps: J,
            isGift: P,
            giftRecipient: I,
            customGiftMessage: T,
            setCustomGiftMessage: N,
            selectedGiftStyle: f,
            isEligibleForBOGOPromotion: F,
            isEligibleForTrial: y,
            userTrialOffer: C,
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
                    label: v.intl.string(v.t.txajQG),
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
                switchPlanSelectComponent: E,
                warningComponent: C,
            } = e,
            y = (e) =>
                (0, l.jsxs)(u.B, {
                    gap: 8,
                    children: [
                        (0, l.jsx)(c.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            children: v.intl.string(v.t["3E5hXj"]),
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
                              (0, l.jsx)(X.Z, { className: m ? ee.KW : void 0, giftRecipient: t }),
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
                              y(E),
                              C,
                              !a && (0, l.jsx)(R, { onClose: h }),
                          ],
                      }),
                  ],
              })
            : (0, l.jsxs)("div", {
                  className: ee.Du,
                  children: [
                      (0, l.jsx)(X.Z, { className: m ? ee.KW : void 0, giftRecipient: t }),
                      y(E),
                      o &&
                          A &&
                          null != d &&
                          null != p &&
                          (0, l.jsx)(ei, { selectedPlan: d, selectedPlanPrice: p, intervalType: null, isPrepaid: s }),
                      C,
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
            { enabled: m } = Y.A.getConfig({ location: "PremiumSwitchPlanSelectOption" });
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
                (t === J.gD.PREMIUM_MONTH_TIER_2 &&
                    null != e &&
                    [J.gD.PREMIUM_YEAR_TIER_0, J.gD.PREMIUM_YEAR_TIER_1].includes(e.planId));
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
            r = e?.trial_id === J.Dw;
        return null == n
            ? null
            : r
              ? v.intl.format(v.t.nG95hA, { endDate: n })
              : v.intl.format(v.t.s4E7kb, { trialEnd: n, trialPeriod: l });
    },
    ed = (e) => {
        let { shouldShowHRKEuroWarning: t, selectedPlanPrice: n } = e;
        return t && null != n
            ? (0, l.jsx)(p.A, {
                  message: v.intl.formatToPlainString(v.t["9hnZoK"], {
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
                        message: v.intl.format(v.t.Om31w8, {
                            documentationLink: D.A.getArticleURL(g.MVz.LOCALIZED_PRICING),
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
            handleClose: p,
        } = e,
        {
            skuId: m,
            setPlanId: h,
            selectedPlan: E,
            premiumSubscription: C,
            premiumSubscriptionPlan: y,
            isEligibleForBOGOPromotion: _,
            isGift: S,
            thePriceOptions: P,
            isEligibleForTrial: I,
            giftRecipient: f,
            customGiftMessage: T,
            setCustomGiftMessage: N,
            selectedGiftStyle: g,
            isPlansEligibleForDiscount: x,
            discountedPlanRegularPrice: R,
            hasSeenCollectiblesInSkuSelect: M,
            userTrialOffer: L,
            shouldShowUpdatedPaymentModal: O,
            isPrepaid: j,
            radioGroupRef: w,
            radioGroupProps: D,
            selectedPlanPrice: U,
            shouldShowHRKEuroWarning: G,
            shouldShowTotalInSubscriptionFlow: Y,
            canContinue: B,
            trialPeriodCopy: W,
        } = er({ selectedPlanId: n, priceOptions: i, planOptions: a, subscriptionPeriodEnd: s, showTotal: o }),
        { discountAmountOff: H, applicablePlan: V, discountOffer: K } = (0, A.t4)((e) => e.premiumDiscountInfo),
        q = (0, F.ds)(),
        z = () =>
            (0, l.jsx)(eu, {
                disabled: t,
                planOptions: a,
                radioGroupRef: w,
                radioGroupProps: D,
                isGift: S,
                isPrepaid: j,
                premiumSubscription: C,
                setPlanId: h,
                selectedPlan: E,
                thePriceOptions: P,
                shouldShowUpdatedPaymentModal: O,
                isEligibleForTrial: I,
                isPlansEligibleForDiscount: x,
            }),
        { showFractionalPremiumBanner: $, fractionalPremiumInfo: X } = (0, b._V)({
            premiumSubscription: C,
            selectedPlanId: n,
            planGroup: r,
            isGift: S,
            fractionalPremiumInfoArgs: {
                forceFetch: !1,
                excludeReverseTrial: !1,
                excludeReverseTrialFromCountdown: !0,
            },
        });
    if (S)
        return (0, l.jsx)(ea, {
            giftRecipient: f,
            customGiftMessage: T,
            setCustomGiftMessage: N,
            selectedGiftStyle: g,
            hasSeenCollectiblesInSkuSelect: M,
            isPrepaid: j,
            canContinue: B,
            selectedPlan: E,
            selectedPlanPrice: U,
            useCompactGiftComponents: u,
            handleClose: p,
            showTotal: o,
            switchPlanSelectComponent: z(),
            warningComponent: ed({ shouldShowHRKEuroWarning: G, selectedPlanPrice: U }),
        });
    let Q = !(I && $ && !q),
        el = et(y, { isEligibleForBOGOPromotion: _ });
    return (0, l.jsxs)("div", {
        children: [
            $ &&
                !q &&
                (0, l.jsx)(Z.vi, {
                    fractionalPremiumInfo: X,
                    enablePremiumBrandRefresh: !0,
                    variant: I ? Z.uA.TRIAL : void 0,
                    trialPeriod: I ? W : void 0,
                    trialEnd: I ? s : void 0,
                }),
            el && !$ && (0, l.jsx)("div", { className: ee.G3, children: en(y, m) }),
            Q &&
                ((e, t, r) => {
                    if (!O)
                        return (0, l.jsx)(c.D, {
                            variant: "heading-md/semibold",
                            color: "text-strong",
                            className: ee.VZ,
                            children: v.intl.string(v.t.a19jpU),
                        });
                    if (t)
                        return (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)(d.E, {
                                    variant: "text-sm/normal",
                                    className: ee.Tz,
                                    children: ec(e, { subscriptionPeriodEnd: s, trialPeriodCopy: W }),
                                }),
                                (0, l.jsx)("hr", { className: ee.RA }),
                            ],
                        });
                    if (r && null != H && null != R && null != V && n === V) {
                        let e = E?.interval === J.WT.YEAR,
                            t = (0, k.$g)(R.amount - H, R.currency),
                            n = (0, k.$g)(R.amount, R.currency);
                        return (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)(d.E, {
                                    variant: "text-sm/normal",
                                    className: ee.Tz,
                                    children: e
                                        ? v.intl.format(v.t.ofweWu, {
                                              numYears: K?.discount.userUsageLimit ?? "",
                                              discountedPrice: t,
                                              regularPrice: n,
                                          })
                                        : v.intl.format(v.t["nG7g/E"], {
                                              numMonths: K?.discount.userUsageLimit ?? "",
                                              discountedPrice: t,
                                              regularPrice: n,
                                          }),
                                }),
                                (0, l.jsx)("hr", { className: ee.RA }),
                            ],
                        });
                    }
                })(L, I, x),
            z(),
            ep({
                selectedPlan: E,
                selectedPlanPrice: U,
                isPrepaid: j,
                shouldShowHRKEuroWarning: G,
                shouldShowUpdatedPaymentModal: O,
                showTotal: o,
                shouldShowTotalInSubscriptionFlow: Y,
            }),
        ],
    });
}
