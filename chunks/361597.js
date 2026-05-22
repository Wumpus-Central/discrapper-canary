n.d(t, {
    U_: () => el,
    Rx: () => eu,
    yq: () => ea,
    LR: () => eh,
    $p: () => eC,
    cD: () => ec,
    O8: () => ei,
    Ct: () => ep,
    RO: () => er,
});
var l = n(627968),
    a = n(64700),
    i = n(284009),
    r = n.n(i),
    s = n(17928),
    o = n(785007),
    u = n(331322),
    c = n(534514),
    d = n(834730),
    p = n(726656),
    m = n(558620),
    h = n(699595),
    C = n(671744),
    A = n(34188),
    y = n(661531),
    E = n(939249),
    P = n(398590),
    S = n(793574),
    f = n(688810),
    _ = n(509536),
    T = n(663066),
    I = n(976860),
    x = n(859040),
    N = n(652215),
    g = n(375708),
    v = n(456508);
let M = (e) => {
    let { onClose: t } = e,
        { analyticsLocations: n } = (0, f.Ay)(),
        a = () => {
            t(),
                (0, I.pX)(N.BVt.COLLECTIBLES_SHOP),
                (0, x.Cz)({ analyticsSource: S.A.PREMIUM_PAYMENT_MODAL, analyticsLocations: n }),
                (0, P.jH)(),
                (0, T.dF)(_.Zt);
        };
    return (0, l.jsxs)("div", {
        className: v.kL,
        children: [
            (0, l.jsx)("div", {
                className: v.Wk,
                children: (0, l.jsx)(A.U, { size: "custom", width: 20, height: 20, color: y.A.colors.WHITE }),
            }),
            (0, l.jsx)(d.E, {
                variant: "text-sm/normal",
                children: g.intl.format(g.t.twSHte, {
                    checkItOut: (e) => (0, l.jsx)(E.D, { className: v.nf, onClick: a, children: e }),
                }),
            }),
        ],
    });
};
var b = n(937008),
    j = n(834252),
    R = n(222707),
    L = n(773669),
    O = n(561794),
    D = n(97352),
    w = n(45938),
    U = n(975571),
    k = n(428262),
    Y = n(580630),
    G = n(960851),
    F = n(881489),
    B = n(906023),
    W = n(380619),
    V = n(477421),
    H = n(422936),
    K = n(410516),
    Z = n(735164),
    q = n(363476),
    z = n(531506),
    J = n(871181),
    $ = n(318007),
    X = n(736339),
    Q = n(285719),
    ee = n(788868);
n(26279);
var et = n(818348),
    en = n(345138);
function el(e, t) {
    let { isEligibleForBOGOPromotion: n } = t;
    return null != e && !n;
}
function ea(e, t) {
    let n = g.intl.string(g.t.BYa62u),
        l = g.intl.string(g.t.CDa6Dq),
        a = (() => {
            switch (e.interval) {
                case ee.WT.YEAR:
                    return n;
                case ee.WT.MONTH:
                default:
                    return l;
            }
        })(),
        i = e.skuId;
    switch (t) {
        case ee.pe.TIER_0:
            switch (i) {
                case ee.pe.TIER_1:
                    return g.intl.string(g.t.q6mxDS);
                case ee.pe.TIER_2:
                    return g.intl.string(g.t.seZVS0);
                default:
                    return a;
            }
        case ee.pe.TIER_1:
            switch (i) {
                case ee.pe.TIER_0:
                    return g.intl.string(g.t["7+u2zg"]);
                case ee.pe.TIER_2:
                    return g.intl.string(g.t.NG2qcc);
                default:
                    return a;
            }
        case ee.pe.TIER_2:
            switch (i) {
                case ee.pe.TIER_0:
                case ee.pe.TIER_1:
                    return g.intl.string(g.t["eB0/w9"]);
                case ee.pe.TIER_2:
                    return e.interval === ee.WT.MONTH
                        ? g.intl.formatToPlainString(g.t.RqUv86, { numFreeGuildSubscriptions: ee.M4 })
                        : a;
                default:
                    return a;
            }
        default:
            return a;
    }
}
let ei = () => {
        let { userTrialOffer: e } = (0, j.P5)(),
            t = e?.subscription_trial,
            { daysCount: n, copy: l } = a.useMemo(
                () =>
                    t?.interval === ee.WT.DAY
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
            } = (0, C.t4)((e) => ({
                selectedSkuId: e.selectedSkuId,
                setSelectedPlanId: e.setSelectedPlanId,
                checkoutPriceOptions: e.checkoutPriceOptions,
            })),
            { activeSubscription: A, userTrialOffer: y, isEligibleForTrial: E, discountOffer: P } = (0, j.P5)(),
            S = (0, K.YJ)(P),
            {
                isGift: f,
                giftRecipient: _,
                selectedGiftStyle: T,
                customGiftMessage: I,
                setCustomGiftMessage: x,
                claimableRewards: N,
                setSelectedGiftingPromotionReward: g,
            } = (0, b.Pv)(),
            v = (0, m.A)(),
            M = (0, W.kz)(v, f && (0, w.Ik)(_), N),
            R = (0, O.tA)({ giftRecipient: _, isGift: f });
        r()(void 0 !== A, "should not be undefined");
        let [L, U] = (0, s.yK)([D.A], () => [null != A ? D.A.get(A.planId) : null, null != t ? D.A.get(t) : null]),
            Y = y?.subscription_trial,
            F = (0, G.cg)(),
            B = U ?? v,
            H = a.useCallback(
                (e) => {
                    d(e);
                },
                [d],
            ),
            Z = n ?? p;
        r()(null != Z, "Price option has to be set");
        let q = P?.discount?.planIds,
            z = null != P && l.some((e) => q?.includes(e)) && null != P.discount,
            J = null != S && l.includes(S) ? (0, k.y8)(S, !1, f, Z) : void 0,
            $ = B?.id != null && l.includes(B.id);
        a.useEffect(() => {
            if (!$) {
                let e = !f && null != S && l.includes(S) ? S : null;
                if (null == L || f) H(e ?? l[0]);
                else if (null != L) {
                    let e = l.find((e) => e !== L.id);
                    null != e && H(e);
                }
            }
        }, [$, f, l, L, H, S]),
            a.useEffect(() => {
                M && null != N && N.length > 0 && g(N[0]);
            }, [N, g, M]);
        let { ref: X, ...Q } = (0, o._u)(),
            ee = B?.id != null ? (0, k.y8)(B.id, !1, f, Z) : void 0,
            { ipCountryCode: en } = (0, V.A)(),
            el = "HR" === en && null != ee && ee.currency === et.Yr.EUR,
            ea = (0, k.J$)(Z.paymentSourceId),
            er = !f && (z || (null != Y && E && null != i)),
            { discountAmountOff: es } = (0, h.J)(S),
            { copy: eo } = ei();
        return {
            skuId: c,
            setPlanId: H,
            selectedPlan: B,
            selectedPlanPrice: ee,
            premiumSubscriptionPlan: L,
            premiumSubscription: A,
            thePriceOptions: Z,
            hasSeenCollectiblesInSkuSelect: R,
            shouldShowUpdatedPaymentModal: er,
            shouldShowHRKEuroWarning: el,
            shouldShowTotalInSubscriptionFlow: !E && !z && $ && u,
            canContinue: $,
            isPrepaid: ea,
            radioGroupRef: X,
            radioGroupProps: Q,
            isGift: f,
            giftRecipient: _,
            customGiftMessage: I,
            setCustomGiftMessage: x,
            selectedGiftStyle: T,
            isEligibleForBOGOPromotion: F,
            isEligibleForTrial: E,
            userTrialOffer: y,
            trialPeriodCopy: eo,
            discountOffer: P,
            discountOfferPlanId: S,
            isPlansEligibleForDiscount: z,
            discountedPlanRegularPrice: J,
            discountAmountOff: es,
        };
    },
    es = (e) => {
        let { isPrepaid: t, selectedPlan: n, selectedPlanPrice: a, intervalType: i, className: r } = e;
        return (0, l.jsxs)("div", {
            className: r,
            children: [
                (0, l.jsx)("div", { className: en.T }),
                (0, l.jsx)(Z.Sd, {
                    label: g.intl.string(g.t.txajQG),
                    value: (0, l.jsx)(q.A, {
                        price: a.amount,
                        currency: a.currency,
                        intervalType: i,
                        intervalCount: n.intervalCount,
                        isPrepaidPaymentSource: t,
                    }),
                    className: en.M3,
                }),
            ],
        });
    },
    eo = (e) => {
        let {
                giftRecipient: t,
                customGiftMessage: n,
                setCustomGiftMessage: a,
                selectedGiftStyle: i,
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
                            children: g.intl.string(g.t["3E5hXj"]),
                        }),
                        e,
                    ],
                });
        return (0, w.Ik)(t)
            ? (0, l.jsxs)("div", {
                  className: en.mh,
                  children: [
                      (0, l.jsx)("div", { className: en.MU, children: null != i && (0, l.jsx)($.t, {}) }),
                      (0, l.jsxs)("div", {
                          className: en.Tc,
                          children: [
                              (0, l.jsx)(Q.Z, { className: m ? en.KW : void 0, giftRecipient: t }),
                              (() => {
                                  if ((0, w.lo)(t) === w.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != a)
                                      return (0, l.jsx)(J.A, {
                                          className: en.iX,
                                          innerClassName: en.pt,
                                          onTextChange: (e) => a(e),
                                          pendingText: n,
                                          currentText: n,
                                      });
                              })(),
                              E(A),
                              y,
                              !r && (0, l.jsx)(M, { onClose: h }),
                          ],
                      }),
                  ],
              })
            : (0, l.jsxs)("div", {
                  className: en.Du,
                  children: [
                      (0, l.jsx)(Q.Z, { className: m ? en.KW : void 0, giftRecipient: t }),
                      E(A),
                      o &&
                          C &&
                          null != d &&
                          null != p &&
                          (0, l.jsx)(es, { selectedPlan: d, selectedPlanPrice: p, intervalType: null, isPrepaid: s }),
                      y,
                      !r && (0, l.jsx)(M, { onClose: h }),
                  ],
              });
    },
    eu = (e) => {
        let {
                isPrepaid: t,
                premiumSubscription: n,
                setPlanId: l,
                thePriceOptions: a,
                shouldShowUpdatedPaymentModal: i,
                isEligibleForTrial: r,
                isPlansEligibleForDiscount: o,
                discountAmountOff: u,
                discountOfferPlanId: c,
            } = e,
            d = (0, s.bG)([L.default], () => L.default.locale),
            { isGift: p, giftRecipient: m } = (0, b.Pv)(),
            h = p && (0, w.Ik)(m),
            { enabled: C } = B.A.getConfig({ location: "PremiumSwitchPlanSelectOption" });
        return {
            isPrepaid: t,
            selectPlan: l,
            premiumSubscription: p ? null : (n ?? null),
            priceOptions: a,
            shouldShowUpdatedPaymentModal: i,
            isEligibleForDiscount: o,
            discountAmountOff: u,
            discountOfferPlanId: c,
            isEligibleForTrial: r,
            userLocale: d,
            isGift: p,
            isCustomGift: h,
            shouldUseCalculatedDiscount: C,
            discountOffer: (0, H.O)(),
            isEligibleForBOGOPromotion: (0, G.cg)(),
        };
    },
    ec = (e, t) => {
        let n = null != e && e.planId === t,
            l =
                n ||
                (t === ee.gD.PREMIUM_MONTH_TIER_2 &&
                    null != e &&
                    [ee.gD.PREMIUM_YEAR_TIER_0, ee.gD.PREMIUM_YEAR_TIER_1].includes(e.planId));
        return { isCurrentPlan: n, disabled: l };
    },
    ed = (e) => {
        let { planOptions: t, radioGroupRef: n, selectedPlan: i, radioGroupProps: r } = e,
            s = eu(e),
            o = a.useMemo(
                () =>
                    t.map((t) => {
                        let { isCurrentPlan: n, disabled: a } = ec(s.premiumSubscription, t);
                        return (0, l.jsx)(
                            X.Ay,
                            { planId: t, selected: i?.id === t, isCurrentPlan: n, disabled: e.disabled || a, ...s },
                            t,
                        );
                    }),
                [e.disabled, t, s, i],
            );
        return (0, l.jsx)("div", { ref: n, ...r, children: o });
    },
    ep = (e, t) => {
        let { subscriptionPeriodEnd: n, trialPeriodCopy: l } = t,
            a = e?.trial_id === ee.Dw;
        return null == n
            ? null
            : a
              ? g.intl.format(g.t.nG95hA, { endDate: n })
              : g.intl.format(g.t.s4E7kb, { trialEnd: n, trialPeriod: l });
    },
    em = (e) => {
        let { shouldShowHRKEuroWarning: t, selectedPlanPrice: n } = e;
        return t && null != n
            ? (0, l.jsx)(p.A, {
                  message: g.intl.formatToPlainString(g.t["9hnZoK"], {
                      kunaPriceWithCurrency: (0, Y.$g)(7.5345 * n.amount, et.Yr.HRK),
                  }),
              })
            : null;
    },
    eh = (e) => {
        let {
            selectedPlan: t,
            selectedPlanPrice: n,
            isPrepaid: a,
            shouldShowHRKEuroWarning: i,
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
                    (0, l.jsx)(es, {
                        className: u,
                        selectedPlan: t,
                        selectedPlanPrice: n,
                        intervalType: t.interval,
                        isPrepaid: a,
                    }),
                em({ shouldShowHRKEuroWarning: i, selectedPlanPrice: n }),
                !r &&
                    s &&
                    (0, l.jsx)(p.A, {
                        message: g.intl.format(g.t.Om31w8, {
                            documentationLink: U.A.getArticleURL(N.MVz.LOCALIZED_PRICING),
                        }),
                    }),
            ],
        });
    };
function eC(e) {
    let {
            disabled: t,
            selectedPlanId: n,
            planGroup: a,
            priceOptions: i,
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
            giftRecipient: f,
            customGiftMessage: _,
            setCustomGiftMessage: T,
            selectedGiftStyle: I,
            discountOffer: x,
            discountOfferPlanId: N,
            isPlansEligibleForDiscount: v,
            discountedPlanRegularPrice: M,
            hasSeenCollectiblesInSkuSelect: b,
            userTrialOffer: j,
            shouldShowUpdatedPaymentModal: L,
            discountAmountOff: O,
            isPrepaid: D,
            radioGroupRef: w,
            radioGroupProps: U,
            selectedPlanPrice: k,
            shouldShowHRKEuroWarning: G,
            shouldShowTotalInSubscriptionFlow: B,
            canContinue: W,
            trialPeriodCopy: V,
        } = er({ selectedPlanId: n, priceOptions: i, planOptions: r, subscriptionPeriodEnd: s, showTotal: o }),
        H = (0, F.ds)(),
        K = () =>
            (0, l.jsx)(ed, {
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
                shouldShowUpdatedPaymentModal: L,
                isEligibleForTrial: S,
                isPlansEligibleForDiscount: v,
                discountAmountOff: O,
                discountOfferPlanId: N,
            }),
        { showFractionalPremiumBanner: Z, fractionalPremiumInfo: q } = (0, R._V)({
            premiumSubscription: C,
            selectedPlanId: n,
            planGroup: a,
            isGift: E,
            fractionalPremiumInfoArgs: {
                forceFetch: !1,
                excludeReverseTrial: !1,
                excludeReverseTrialFromCountdown: !0,
            },
        });
    if (E)
        return (0, l.jsx)(eo, {
            giftRecipient: f,
            customGiftMessage: _,
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
            warningComponent: em({ shouldShowHRKEuroWarning: G, selectedPlanPrice: k }),
        });
    let J = !(S && Z && !H),
        $ = el(A, { isEligibleForBOGOPromotion: y });
    return (0, l.jsxs)("div", {
        children: [
            Z &&
                !H &&
                (0, l.jsx)(z.vi, {
                    fractionalPremiumInfo: q,
                    enablePremiumBrandRefresh: !0,
                    variant: S ? z.uA.TRIAL : void 0,
                    trialPeriod: S ? V : void 0,
                    trialEnd: S ? s : void 0,
                }),
            $ && !Z && (0, l.jsx)("div", { className: en.G3, children: ea(A, p) }),
            J &&
                ((e, t, a) => {
                    if (!L) return (0, l.jsx)("div", { className: en.VZ, children: g.intl.string(g.t.a19jpU) });
                    if (t)
                        return (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)(d.E, {
                                    variant: "text-sm/normal",
                                    className: en.Tz,
                                    children: ep(e, { subscriptionPeriodEnd: s, trialPeriodCopy: V }),
                                }),
                                (0, l.jsx)("hr", { className: en.RA }),
                            ],
                        });
                    if (a && null != O && null != M && null != N && n === N) {
                        let e = h?.interval === ee.WT.YEAR,
                            t = (0, Y.$g)(M.amount - O, M.currency),
                            n = (0, Y.$g)(M.amount, M.currency);
                        return (0, l.jsxs)("div", {
                            children: [
                                (0, l.jsx)(d.E, {
                                    variant: "text-sm/normal",
                                    className: en.Tz,
                                    children: e
                                        ? g.intl.format(g.t.ofweWu, {
                                              numYears: x?.discount.userUsageLimit ?? "",
                                              discountedPrice: t,
                                              regularPrice: n,
                                          })
                                        : g.intl.format(g.t["nG7g/E"], {
                                              numMonths: x?.discount.userUsageLimit ?? "",
                                              discountedPrice: t,
                                              regularPrice: n,
                                          }),
                                }),
                                (0, l.jsx)("hr", { className: en.RA }),
                            ],
                        });
                    }
                })(j, S, v),
            K(),
            eh({
                selectedPlan: h,
                selectedPlanPrice: k,
                isPrepaid: D,
                shouldShowHRKEuroWarning: G,
                shouldShowUpdatedPaymentModal: L,
                showTotal: o,
                shouldShowTotalInSubscriptionFlow: B,
            }),
        ],
    });
}
