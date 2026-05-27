n.d(t, {
    U_: () => ei,
    Rx: () => ec,
    yq: () => ea,
    LR: () => eC,
    $p: () => eA,
    cD: () => ed,
    O8: () => er,
    Ct: () => em,
    RO: () => es,
});
var l = n(627968),
    i = n(64700),
    a = n(284009),
    r = n.n(a),
    s = n(17928),
    o = n(785007),
    u = n(331322),
    c = n(534514),
    d = n(834730),
    p = n(726656),
    m = n(463376),
    h = n(558620),
    C = n(699595),
    A = n(722847),
    y = n(34188),
    E = n(661531),
    P = n(939249),
    S = n(398590),
    _ = n(793574),
    f = n(688810),
    T = n(509536),
    I = n(663066),
    x = n(976860),
    N = n(859040),
    g = n(652215),
    v = n(375708),
    M = n(456508);
let b = (e) => {
    let { onClose: t } = e,
        { analyticsLocations: n } = (0, f.Ay)(),
        i = () => {
            t(),
                (0, x.pX)(g.BVt.COLLECTIBLES_SHOP),
                (0, N.Cz)({ analyticsSource: _.A.PREMIUM_PAYMENT_MODAL, analyticsLocations: n }),
                (0, S.jH)(),
                (0, I.dF)(T.Zt);
        };
    return (0, l.jsxs)("div", {
        className: M.kL,
        children: [
            (0, l.jsx)("div", {
                className: M.Wk,
                children: (0, l.jsx)(y.U, { size: "custom", width: 20, height: 20, color: E.A.colors.ICON_DEFAULT }),
            }),
            (0, l.jsx)(d.E, {
                variant: "text-sm/normal",
                children: v.intl.format(v.t.twSHte, {
                    checkItOut: (e) => (0, l.jsx)(P.D, { className: M.nf, onClick: i, children: e }),
                }),
            }),
        ],
    });
};
var j = n(937008),
    R = n(834252),
    L = n(222707),
    O = n(773669),
    D = n(561794),
    w = n(97352),
    U = n(45938),
    k = n(975571),
    G = n(428262),
    Y = n(580630),
    F = n(960851),
    B = n(881489),
    W = n(906023),
    V = n(380619),
    H = n(477421),
    K = n(422936),
    Z = n(410516),
    q = n(735164),
    z = n(363476),
    J = n(531506),
    $ = n(871181),
    X = n(318007),
    Q = n(736339),
    ee = n(285719),
    et = n(788868);
n(26279);
var en = n(818348),
    el = n(345138);
function ei(e, t) {
    let { isEligibleForBOGOPromotion: n } = t;
    return null != e && !n;
}
function ea(e, t) {
    let n = v.intl.string(v.t.BYa62u),
        l = v.intl.string(v.t.CDa6Dq),
        i = (() => {
            switch (e.interval) {
                case et.WT.YEAR:
                    return n;
                case et.WT.MONTH:
                default:
                    return l;
            }
        })(),
        a = e.skuId;
    switch (t) {
        case et.pe.TIER_0:
            switch (a) {
                case et.pe.TIER_1:
                    return v.intl.string(v.t.q6mxDS);
                case et.pe.TIER_2:
                    return v.intl.string(v.t.seZVS0);
                default:
                    return i;
            }
        case et.pe.TIER_1:
            switch (a) {
                case et.pe.TIER_0:
                    return v.intl.string(v.t["7+u2zg"]);
                case et.pe.TIER_2:
                    return v.intl.string(v.t.NG2qcc);
                default:
                    return i;
            }
        case et.pe.TIER_2:
            switch (a) {
                case et.pe.TIER_0:
                case et.pe.TIER_1:
                    return v.intl.string(v.t["eB0/w9"]);
                case et.pe.TIER_2:
                    return e.interval === et.WT.MONTH
                        ? v.intl.formatToPlainString(v.t.RqUv86, { numFreeGuildSubscriptions: et.M4 })
                        : i;
                default:
                    return i;
            }
        default:
            return i;
    }
}
let er = () => {
        let { userTrialOffer: e } = (0, m.i)(),
            t = e?.subscription_trial,
            { daysCount: n, copy: l } = i.useMemo(
                () =>
                    t?.interval === et.WT.DAY
                        ? t?.interval_count > 7
                            ? { daysCount: 14, copy: v.intl.string(v.t.Z1V2cs) }
                            : { daysCount: 7, copy: v.intl.string(v.t.MI1rHs) }
                        : { daysCount: 30, copy: v.intl.string(v.t["+S5lrV"]) },
                [t],
            );
        return { daysCount: n, copy: l, userTrialOffer: e };
    },
    es = (e) => {
        let { selectedPlanId: t, priceOptions: n, planOptions: l, subscriptionPeriodEnd: a, showTotal: u } = e,
            {
                selectedSkuId: c,
                setSelectedPlanId: d,
                checkoutPriceOptions: p,
            } = (0, A.t4)((e) => ({
                selectedSkuId: e.selectedSkuId,
                setSelectedPlanId: e.setSelectedPlanId,
                checkoutPriceOptions: e.checkoutPriceOptions,
            })),
            { activeSubscription: y } = (0, R.P5)(),
            { userTrialOffer: E, isEligibleForTrial: P, discountOffer: S } = (0, m.i)(),
            _ = (0, Z.YJ)(S),
            {
                isGift: f,
                giftRecipient: T,
                selectedGiftStyle: I,
                customGiftMessage: x,
                setCustomGiftMessage: N,
                claimableRewards: g,
                setSelectedGiftingPromotionReward: v,
            } = (0, j.Pv)(),
            M = (0, h.A)(),
            b = (0, V.kz)(M, f && (0, U.Ik)(T), g),
            L = (0, D.tA)({ giftRecipient: T, isGift: f });
        r()(void 0 !== y, "should not be undefined");
        let [O, k] = (0, s.yK)([w.A], () => [null != y ? w.A.get(y.planId) : null, null != t ? w.A.get(t) : null]),
            Y = E?.subscription_trial,
            B = (0, F.cg)(),
            W = k ?? M,
            K = i.useCallback(
                (e) => {
                    d(e);
                },
                [d],
            ),
            q = n ?? p;
        r()(null != q, "Price option has to be set");
        let z = S?.discount?.planIds,
            J = null != S && l.some((e) => z?.includes(e)) && null != S.discount,
            $ = null != _ && l.includes(_) ? (0, G.y8)(_, !1, f, q) : void 0,
            X = W?.id != null && l.includes(W.id);
        i.useEffect(() => {
            if (!X) {
                let e = !f && null != _ && l.includes(_) ? _ : null;
                if (null == O || f) K(e ?? l[0]);
                else if (null != O) {
                    let e = l.find((e) => e !== O.id);
                    null != e && K(e);
                }
            }
        }, [X, f, l, O, K, _]),
            i.useEffect(() => {
                b && null != g && g.length > 0 && v(g[0]);
            }, [g, v, b]);
        let { ref: Q, ...ee } = (0, o._u)(),
            et = W?.id != null ? (0, G.y8)(W.id, !1, f, q) : void 0,
            { ipCountryCode: el } = (0, H.A)(),
            ei = "HR" === el && null != et && et.currency === en.Yr.EUR,
            ea = (0, G.J$)(q.paymentSourceId),
            es = !f && (J || (null != Y && P && null != a)),
            { discountAmountOff: eo } = (0, C.J)(_),
            { copy: eu } = er();
        return {
            skuId: c,
            setPlanId: K,
            selectedPlan: W,
            selectedPlanPrice: et,
            premiumSubscriptionPlan: O,
            premiumSubscription: y,
            thePriceOptions: q,
            hasSeenCollectiblesInSkuSelect: L,
            shouldShowUpdatedPaymentModal: es,
            shouldShowHRKEuroWarning: ei,
            shouldShowTotalInSubscriptionFlow: !P && !J && X && u,
            canContinue: X,
            isPrepaid: ea,
            radioGroupRef: Q,
            radioGroupProps: ee,
            isGift: f,
            giftRecipient: T,
            customGiftMessage: x,
            setCustomGiftMessage: N,
            selectedGiftStyle: I,
            isEligibleForBOGOPromotion: B,
            isEligibleForTrial: P,
            userTrialOffer: E,
            trialPeriodCopy: eu,
            discountOffer: S,
            discountOfferPlanId: _,
            isPlansEligibleForDiscount: J,
            discountedPlanRegularPrice: $,
            discountAmountOff: eo,
        };
    },
    eo = (e) => {
        let { isPrepaid: t, selectedPlan: n, selectedPlanPrice: i, intervalType: a, className: r } = e;
        return (0, l.jsxs)("div", {
            className: r,
            children: [
                (0, l.jsx)("div", { className: el.T }),
                (0, l.jsx)(q.Sd, {
                    label: v.intl.string(v.t.txajQG),
                    value: (0, l.jsx)(z.A, {
                        price: i.amount,
                        currency: i.currency,
                        intervalType: a,
                        intervalCount: n.intervalCount,
                        isPrepaidPaymentSource: t,
                    }),
                    className: el.M3,
                }),
            ],
        });
    },
    eu = (e) => {
        let {
                giftRecipient: t,
                customGiftMessage: n,
                setCustomGiftMessage: i,
                selectedGiftStyle: a,
                hasSeenCollectiblesInSkuSelect: r,
                isPrepaid: s,
                canContinue: o,
                selectedPlan: d,
                selectedPlanPrice: p,
                useCompactGiftComponents: m,
                handleClose: h,
                showTotal: C,
                switchPlanSelectComponent: A,
                warningComponent: y,
            } = e,
            E = (e) =>
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
        return (0, U.Ik)(t)
            ? (0, l.jsxs)("div", {
                  className: el.mh,
                  children: [
                      (0, l.jsx)("div", { className: el.MU, children: null != a && (0, l.jsx)(X.t, {}) }),
                      (0, l.jsxs)("div", {
                          className: el.Tc,
                          children: [
                              (0, l.jsx)(ee.Z, { className: m ? el.KW : void 0, giftRecipient: t }),
                              (() => {
                                  if ((0, U.lo)(t) === U.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != i)
                                      return (0, l.jsx)($.A, {
                                          className: el.iX,
                                          innerClassName: el.pt,
                                          onTextChange: (e) => i(e),
                                          pendingText: n,
                                          currentText: n,
                                      });
                              })(),
                              E(A),
                              y,
                              !r && (0, l.jsx)(b, { onClose: h }),
                          ],
                      }),
                  ],
              })
            : (0, l.jsxs)("div", {
                  className: el.Du,
                  children: [
                      (0, l.jsx)(ee.Z, { className: m ? el.KW : void 0, giftRecipient: t }),
                      E(A),
                      o &&
                          C &&
                          null != d &&
                          null != p &&
                          (0, l.jsx)(eo, { selectedPlan: d, selectedPlanPrice: p, intervalType: null, isPrepaid: s }),
                      y,
                      !r && (0, l.jsx)(b, { onClose: h }),
                  ],
              });
    },
    ec = (e) => {
        let {
                isPrepaid: t,
                premiumSubscription: n,
                setPlanId: l,
                thePriceOptions: i,
                shouldShowUpdatedPaymentModal: a,
                isEligibleForTrial: r,
                isPlansEligibleForDiscount: o,
                discountAmountOff: u,
                discountOfferPlanId: c,
            } = e,
            d = (0, s.bG)([O.default], () => O.default.locale),
            { isGift: p, giftRecipient: m } = (0, j.Pv)(),
            h = p && (0, U.Ik)(m),
            { enabled: C } = W.A.getConfig({ location: "PremiumSwitchPlanSelectOption" });
        return {
            isPrepaid: t,
            selectPlan: l,
            premiumSubscription: p ? null : (n ?? null),
            priceOptions: i,
            shouldShowUpdatedPaymentModal: a,
            isEligibleForDiscount: o,
            discountAmountOff: u,
            discountOfferPlanId: c,
            isEligibleForTrial: r,
            userLocale: d,
            isGift: p,
            isCustomGift: h,
            shouldUseCalculatedDiscount: C,
            discountOffer: (0, K.O)(),
            isEligibleForBOGOPromotion: (0, F.cg)(),
        };
    },
    ed = (e, t) => {
        let n = null != e && e.planId === t,
            l =
                n ||
                (t === et.gD.PREMIUM_MONTH_TIER_2 &&
                    null != e &&
                    [et.gD.PREMIUM_YEAR_TIER_0, et.gD.PREMIUM_YEAR_TIER_1].includes(e.planId));
        return { isCurrentPlan: n, disabled: l };
    },
    ep = (e) => {
        let { planOptions: t, radioGroupRef: n, selectedPlan: a, radioGroupProps: r } = e,
            s = ec(e),
            o = i.useMemo(
                () =>
                    t.map((t) => {
                        let { isCurrentPlan: n, disabled: i } = ed(s.premiumSubscription, t);
                        return (0, l.jsx)(
                            Q.Ay,
                            { planId: t, selected: a?.id === t, isCurrentPlan: n, disabled: e.disabled || i, ...s },
                            t,
                        );
                    }),
                [e.disabled, t, s, a],
            );
        return (0, l.jsx)("div", { ref: n, ...r, children: o });
    },
    em = (e, t) => {
        let { subscriptionPeriodEnd: n, trialPeriodCopy: l } = t,
            i = e?.trial_id === et.Dw;
        return null == n
            ? null
            : i
              ? v.intl.format(v.t.nG95hA, { endDate: n })
              : v.intl.format(v.t.s4E7kb, { trialEnd: n, trialPeriod: l });
    },
    eh = (e) => {
        let { shouldShowHRKEuroWarning: t, selectedPlanPrice: n } = e;
        return t && null != n
            ? (0, l.jsx)(p.A, {
                  message: v.intl.formatToPlainString(v.t["9hnZoK"], {
                      kunaPriceWithCurrency: (0, Y.$g)(7.5345 * n.amount, en.Yr.HRK),
                  }),
              })
            : null;
    },
    eC = (e) => {
        let {
            selectedPlan: t,
            selectedPlanPrice: n,
            isPrepaid: i,
            shouldShowHRKEuroWarning: a,
            shouldShowUpdatedPaymentModal: r,
            showTotal: s,
            shouldShowTotalInSubscriptionFlow: o,
            previewTotalSectionClassName: u,
        } = e;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                o &&
                    null != t &&
                    null != n &&
                    (0, l.jsx)(eo, {
                        className: u,
                        selectedPlan: t,
                        selectedPlanPrice: n,
                        intervalType: t.interval,
                        isPrepaid: i,
                    }),
                eh({ shouldShowHRKEuroWarning: a, selectedPlanPrice: n }),
                !r &&
                    s &&
                    (0, l.jsx)(p.A, {
                        message: v.intl.format(v.t.Om31w8, {
                            documentationLink: k.A.getArticleURL(g.MVz.LOCALIZED_PRICING),
                        }),
                    }),
            ],
        });
    };
function eA(e) {
    let {
            disabled: t,
            selectedPlanId: n,
            planGroup: i,
            priceOptions: a,
            planOptions: r,
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
            premiumSubscriptionPlan: A,
            isEligibleForBOGOPromotion: y,
            isGift: E,
            thePriceOptions: P,
            isEligibleForTrial: S,
            giftRecipient: _,
            customGiftMessage: f,
            setCustomGiftMessage: T,
            selectedGiftStyle: I,
            discountOffer: x,
            discountOfferPlanId: N,
            isPlansEligibleForDiscount: g,
            discountedPlanRegularPrice: M,
            hasSeenCollectiblesInSkuSelect: b,
            userTrialOffer: j,
            shouldShowUpdatedPaymentModal: R,
            discountAmountOff: O,
            isPrepaid: D,
            radioGroupRef: w,
            radioGroupProps: U,
            selectedPlanPrice: k,
            shouldShowHRKEuroWarning: G,
            shouldShowTotalInSubscriptionFlow: F,
            canContinue: W,
            trialPeriodCopy: V,
        } = es({ selectedPlanId: n, priceOptions: a, planOptions: r, subscriptionPeriodEnd: s, showTotal: o }),
        H = (0, B.ds)(),
        K = () =>
            (0, l.jsx)(ep, {
                disabled: t,
                planOptions: r,
                radioGroupRef: w,
                radioGroupProps: U,
                isGift: E,
                isPrepaid: D,
                premiumSubscription: C,
                setPlanId: m,
                selectedPlan: h,
                thePriceOptions: P,
                shouldShowUpdatedPaymentModal: R,
                isEligibleForTrial: S,
                isPlansEligibleForDiscount: g,
                discountAmountOff: O,
                discountOfferPlanId: N,
            }),
        { showFractionalPremiumBanner: Z, fractionalPremiumInfo: q } = (0, L._V)({
            premiumSubscription: C,
            selectedPlanId: n,
            planGroup: i,
            isGift: E,
            fractionalPremiumInfoArgs: {
                forceFetch: !1,
                excludeReverseTrial: !1,
                excludeReverseTrialFromCountdown: !0,
            },
        });
    if (E)
        return (0, l.jsx)(eu, {
            giftRecipient: _,
            customGiftMessage: f,
            setCustomGiftMessage: T,
            selectedGiftStyle: I,
            hasSeenCollectiblesInSkuSelect: b,
            isPrepaid: D,
            canContinue: W,
            selectedPlan: h,
            selectedPlanPrice: k,
            useCompactGiftComponents: u,
            handleClose: c,
            showTotal: o,
            switchPlanSelectComponent: K(),
            warningComponent: eh({ shouldShowHRKEuroWarning: G, selectedPlanPrice: k }),
        });
    let z = !(S && Z && !H),
        $ = ei(A, { isEligibleForBOGOPromotion: y });
    return (0, l.jsxs)("div", {
        children: [
            Z &&
                !H &&
                (0, l.jsx)(J.vi, {
                    fractionalPremiumInfo: q,
                    enablePremiumBrandRefresh: !0,
                    variant: S ? J.uA.TRIAL : void 0,
                    trialPeriod: S ? V : void 0,
                    trialEnd: S ? s : void 0,
                }),
            $ && !Z && (0, l.jsx)("div", { className: el.G3, children: ea(A, p) }),
            z &&
                ((e, t, i) => {
                    if (!R) return (0, l.jsx)("div", { className: el.VZ, children: v.intl.string(v.t.a19jpU) });
                    if (t)
                        return (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)(d.E, {
                                    variant: "text-sm/normal",
                                    className: el.Tz,
                                    children: em(e, { subscriptionPeriodEnd: s, trialPeriodCopy: V }),
                                }),
                                (0, l.jsx)("hr", { className: el.RA }),
                            ],
                        });
                    if (i && null != O && null != M && null != N && n === N) {
                        let e = h?.interval === et.WT.YEAR,
                            t = (0, Y.$g)(M.amount - O, M.currency),
                            n = (0, Y.$g)(M.amount, M.currency);
                        return (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)(d.E, {
                                    variant: "text-sm/normal",
                                    className: el.Tz,
                                    children: e
                                        ? v.intl.format(v.t.ofweWu, {
                                              numYears: x?.discount.userUsageLimit ?? "",
                                              discountedPrice: t,
                                              regularPrice: n,
                                          })
                                        : v.intl.format(v.t["nG7g/E"], {
                                              numMonths: x?.discount.userUsageLimit ?? "",
                                              discountedPrice: t,
                                              regularPrice: n,
                                          }),
                                }),
                                (0, l.jsx)("hr", { className: el.RA }),
                            ],
                        });
                    }
                })(j, S, g),
            K(),
            eC({
                selectedPlan: h,
                selectedPlanPrice: k,
                isPrepaid: D,
                shouldShowHRKEuroWarning: G,
                shouldShowUpdatedPaymentModal: R,
                showTotal: o,
                shouldShowTotalInSubscriptionFlow: F,
            }),
        ],
    });
}
