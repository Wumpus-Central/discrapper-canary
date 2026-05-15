n.d(t, {
    U_: () => en,
    Rx: () => eo,
    yq: () => el,
    LR: () => em,
    $p: () => eh,
    cD: () => eu,
    O8: () => ea,
    Ct: () => ed,
    RO: () => ei,
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
    C = n(94420),
    A = n(34188),
    y = n(661531),
    E = n(939249),
    P = n(398590),
    S = n(793574),
    _ = n(688810),
    T = n(509536),
    f = n(663066),
    I = n(976860),
    N = n(859040),
    x = n(652215),
    g = n(375708),
    v = n(456508);
let M = (e) => {
    let { onClose: t } = e,
        { analyticsLocations: n } = (0, _.Ay)(),
        a = () => {
            t(),
                (0, I.pX)(x.BVt.COLLECTIBLES_SHOP),
                (0, N.Cz)({ analyticsSource: S.A.PREMIUM_PAYMENT_MODAL, analyticsLocations: n }),
                (0, P.jH)(),
                (0, f.dF)(T.Zt);
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
    F = n(881489);
let B = (0, n(945810).mj)({
    name: "2026-03-calculated-annual-discount-percent",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var W = n(380619),
    V = n(477421),
    H = n(422936),
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
        a = (() => {
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
                    return a;
            }
        case Q.pe.TIER_1:
            switch (i) {
                case Q.pe.TIER_0:
                    return g.intl.string(g.t["7+u2zg"]);
                case Q.pe.TIER_2:
                    return g.intl.string(g.t.NG2qcc);
                default:
                    return a;
            }
        case Q.pe.TIER_2:
            switch (i) {
                case Q.pe.TIER_0:
                case Q.pe.TIER_1:
                    return g.intl.string(g.t["eB0/w9"]);
                case Q.pe.TIER_2:
                    return e.interval === Q.WT.MONTH
                        ? g.intl.formatToPlainString(g.t.RqUv86, { numFreeGuildSubscriptions: Q.M4 })
                        : a;
                default:
                    return a;
            }
        default:
            return a;
    }
}
let ea = () => {
        let { userTrialOffer: e } = (0, j.P5)(),
            t = e?.subscription_trial,
            { daysCount: n, copy: l } = a.useMemo(
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
            { selectedSkuId: c, setSelectedPlanId: d } = (0, C.t4)((e) => ({
                selectedSkuId: e.selectedSkuId,
                setSelectedPlanId: e.setSelectedPlanId,
            })),
            {
                activeSubscription: p,
                priceOptions: A,
                userTrialOffer: y,
                isEligibleForTrial: E,
                discountOffer: P,
            } = (0, j.P5)(),
            {
                isGift: S,
                giftRecipient: _,
                selectedGiftStyle: T,
                customGiftMessage: f,
                setCustomGiftMessage: I,
                claimableRewards: N,
                setSelectedGiftingPromotionReward: x,
            } = (0, b.Pv)(),
            g = (0, m.A)(),
            v = (0, W.kz)(g, S && (0, w.Ik)(_), N),
            M = (0, O.tA)({ giftRecipient: _, isGift: S });
        r()(void 0 !== p, "should not be undefined");
        let [R, L] = (0, s.yK)([D.A], () => [null != p ? D.A.get(p.planId) : null, null != t ? D.A.get(t) : null]),
            U = y?.subscription_trial,
            Y = (0, G.cg)(),
            F = L ?? g,
            B = a.useCallback(
                (e) => {
                    d(e);
                },
                [d],
            ),
            H = n ?? A;
        r()(null != H, "Price option has to be set");
        let K = P?.discount?.planIds,
            Z = null != P && l.some((e) => K?.includes(e)) && null != P.discount,
            q = l.includes(Q.gD.PREMIUM_MONTH_TIER_2) ? (0, k.y8)(Q.gD.PREMIUM_MONTH_TIER_2, !1, S, H) : void 0,
            z = F?.id != null && l.includes(F.id);
        a.useEffect(() => {
            if (!z) {
                if (null == R || S) B(l[0]);
                else if (null != R) {
                    let e = l.find((e) => e !== R.id);
                    null != e && B(e);
                }
            }
        }, [z, S, l, R, B]),
            a.useEffect(() => {
                v && null != N && N.length > 0 && x(N[0]);
            }, [N, x, v]);
        let { ref: $, ...J } = (0, o._u)(),
            X = F?.id != null ? (0, k.y8)(F.id, !1, S, H) : void 0,
            { ipCountryCode: et } = (0, V.A)(),
            en = "HR" === et && null != X && X.currency === ee.Yr.EUR,
            el = (0, k.J$)(H.paymentSourceId),
            ei = !S && (Z || (null != U && E && null != i)),
            { discountAmountOff: er } = (0, h.J)(Q.gD.PREMIUM_MONTH_TIER_2),
            { copy: es } = ea();
        return {
            skuId: c,
            setPlanId: B,
            selectedPlan: F,
            selectedPlanPrice: X,
            premiumSubscriptionPlan: R,
            premiumSubscription: p,
            thePriceOptions: H,
            hasSeenCollectiblesInSkuSelect: M,
            shouldShowUpdatedPaymentModal: ei,
            shouldShowHRKEuroWarning: en,
            shouldShowTotalInSubscriptionFlow: !E && !Z && z && u,
            canContinue: z,
            isPrepaid: el,
            radioGroupRef: $,
            radioGroupProps: J,
            isGift: S,
            giftRecipient: _,
            customGiftMessage: f,
            setCustomGiftMessage: I,
            selectedGiftStyle: T,
            isEligibleForBOGOPromotion: Y,
            isEligibleForTrial: E,
            userTrialOffer: y,
            trialPeriodCopy: es,
            discountOffer: P,
            isPlansEligibleForDiscount: Z,
            discountedPlanRegularPrice: q,
            discountAmountOff: er,
        };
    },
    er = (e) => {
        let { isPrepaid: t, selectedPlan: n, selectedPlanPrice: a, intervalType: i, className: r } = e;
        return (0, l.jsxs)("div", {
            className: r,
            children: [
                (0, l.jsx)("div", { className: et.T }),
                (0, l.jsx)(K.Sd, {
                    label: g.intl.string(g.t.txajQG),
                    value: (0, l.jsx)(Z.A, {
                        price: a.amount,
                        currency: a.currency,
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
                  className: et.mh,
                  children: [
                      (0, l.jsx)("div", { className: et.MU, children: null != i && (0, l.jsx)($.t, {}) }),
                      (0, l.jsxs)("div", {
                          className: et.Tc,
                          children: [
                              (0, l.jsx)(X.Z, { className: m ? et.KW : void 0, giftRecipient: t }),
                              (() => {
                                  if ((0, w.lo)(t) === w.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != a)
                                      return (0, l.jsx)(z.A, {
                                          className: et.iX,
                                          innerClassName: et.pt,
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
                  className: et.Du,
                  children: [
                      (0, l.jsx)(X.Z, { className: m ? et.KW : void 0, giftRecipient: t }),
                      E(A),
                      o &&
                          C &&
                          null != d &&
                          null != p &&
                          (0, l.jsx)(er, { selectedPlan: d, selectedPlanPrice: p, intervalType: null, isPrepaid: s }),
                      y,
                      !r && (0, l.jsx)(M, { onClose: h }),
                  ],
              });
    },
    eo = (e) => {
        let {
                isPrepaid: t,
                premiumSubscription: n,
                setPlanId: l,
                thePriceOptions: a,
                shouldShowUpdatedPaymentModal: i,
                isEligibleForTrial: r,
                isPlansEligibleForDiscount: o,
                discountAmountOff: u,
            } = e,
            c = (0, s.bG)([L.default], () => L.default.locale),
            { isGift: d, giftRecipient: p } = (0, b.Pv)(),
            m = d && (0, w.Ik)(p),
            { enabled: h } = B.getConfig({ location: "PremiumSwitchPlanSelectOption" });
        return {
            isPrepaid: t,
            selectPlan: l,
            premiumSubscription: d ? null : (n ?? null),
            priceOptions: a,
            shouldShowUpdatedPaymentModal: i,
            isEligibleForDiscount: o,
            discountAmountOff: u,
            isEligibleForTrial: r,
            userLocale: c,
            isGift: d,
            isCustomGift: m,
            shouldUseCalculatedDiscount: h,
            discountOffer: (0, H.O)(),
            isEligibleForBOGOPromotion: (0, G.cg)(),
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
        let { planOptions: t, radioGroupRef: n, selectedPlan: i, radioGroupProps: r } = e,
            s = eo(e),
            o = a.useMemo(
                () =>
                    t.map((t) => {
                        let { isCurrentPlan: n, disabled: a } = eu(s.premiumSubscription, t);
                        return (0, l.jsx)(
                            J.Ay,
                            { planId: t, selected: i?.id === t, isCurrentPlan: n, disabled: e.disabled || a, ...s },
                            t,
                        );
                    }),
                [e.disabled, t, s, i],
            );
        return (0, l.jsx)("div", { ref: n, ...r, children: o });
    },
    ed = (e, t) => {
        let { subscriptionPeriodEnd: n, trialPeriodCopy: l } = t,
            a = e?.trial_id === Q.Dw;
        return null == n
            ? null
            : a
              ? g.intl.format(g.t.nG95hA, { endDate: n })
              : g.intl.format(g.t.s4E7kb, { trialEnd: n, trialPeriod: l });
    },
    ep = (e) => {
        let { shouldShowHRKEuroWarning: t, selectedPlanPrice: n } = e;
        return t && null != n
            ? (0, l.jsx)(p.A, {
                  message: g.intl.formatToPlainString(g.t["9hnZoK"], {
                      kunaPriceWithCurrency: (0, Y.$g)(7.5345 * n.amount, ee.Yr.HRK),
                  }),
              })
            : null;
    },
    em = (e) => {
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
                    (0, l.jsx)(er, {
                        className: u,
                        selectedPlan: t,
                        selectedPlanPrice: n,
                        intervalType: t.interval,
                        isPrepaid: a,
                    }),
                ep({ shouldShowHRKEuroWarning: i, selectedPlanPrice: n }),
                !r &&
                    s &&
                    (0, l.jsx)(p.A, {
                        message: g.intl.format(g.t.Om31w8, {
                            documentationLink: U.A.getArticleURL(x.MVz.LOCALIZED_PRICING),
                        }),
                    }),
            ],
        });
    };
function eh(e) {
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
            giftRecipient: _,
            customGiftMessage: T,
            setCustomGiftMessage: f,
            selectedGiftStyle: I,
            discountOffer: N,
            isPlansEligibleForDiscount: x,
            discountedPlanRegularPrice: v,
            hasSeenCollectiblesInSkuSelect: M,
            userTrialOffer: b,
            shouldShowUpdatedPaymentModal: j,
            discountAmountOff: L,
            isPrepaid: O,
            radioGroupRef: D,
            radioGroupProps: w,
            selectedPlanPrice: U,
            shouldShowHRKEuroWarning: k,
            shouldShowTotalInSubscriptionFlow: G,
            canContinue: B,
            trialPeriodCopy: W,
        } = ei({ selectedPlanId: n, priceOptions: i, planOptions: r, subscriptionPeriodEnd: s, showTotal: o }),
        V = (0, F.ds)(),
        H = () =>
            (0, l.jsx)(ec, {
                disabled: t,
                planOptions: r,
                radioGroupRef: D,
                radioGroupProps: w,
                isGift: E,
                isPrepaid: O,
                premiumSubscription: C,
                setPlanId: m,
                selectedPlan: h,
                thePriceOptions: P,
                shouldShowUpdatedPaymentModal: j,
                isEligibleForTrial: S,
                isPlansEligibleForDiscount: x,
                discountAmountOff: L,
            }),
        { showFractionalPremiumBanner: K, fractionalPremiumInfo: Z } = (0, R._V)({
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
        return (0, l.jsx)(es, {
            giftRecipient: _,
            customGiftMessage: T,
            setCustomGiftMessage: f,
            selectedGiftStyle: I,
            hasSeenCollectiblesInSkuSelect: M,
            isPrepaid: O,
            canContinue: B,
            selectedPlan: h,
            selectedPlanPrice: U,
            useCompactGiftComponents: u,
            handleClose: c,
            showTotal: o,
            switchPlanSelectComponent: H(),
            warningComponent: ep({ shouldShowHRKEuroWarning: k, selectedPlanPrice: U }),
        });
    let z = !(S && K && !V),
        $ = en(A, { isEligibleForBOGOPromotion: y });
    return (0, l.jsxs)("div", {
        children: [
            K &&
                !V &&
                (0, l.jsx)(q.vi, {
                    fractionalPremiumInfo: Z,
                    enablePremiumBrandRefresh: !0,
                    variant: S ? q.uA.TRIAL : void 0,
                    trialPeriod: S ? W : void 0,
                    trialEnd: S ? s : void 0,
                }),
            $ && !K && (0, l.jsx)("div", { className: et.G3, children: el(A, p) }),
            z &&
                (j
                    ? S
                        ? (0, l.jsxs)("div", {
                              children: [
                                  (0, l.jsx)(d.E, {
                                      variant: "text-sm/normal",
                                      className: et.Tz,
                                      children: ed(b, { subscriptionPeriodEnd: s, trialPeriodCopy: W }),
                                  }),
                                  (0, l.jsx)("hr", { className: et.RA }),
                              ],
                          })
                        : x && null != L && null != v && n === Q.gD.PREMIUM_MONTH_TIER_2
                          ? (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsx)(d.E, {
                                        variant: "text-sm/normal",
                                        className: et.Tz,
                                        children: g.intl.format(g.t["nG7g/E"], {
                                            numMonths: N?.discount.userUsageLimit ?? "",
                                            discountedPrice: (0, Y.$g)(v.amount - L, v.currency),
                                            regularPrice: (0, Y.$g)(v.amount, v.currency),
                                        }),
                                    }),
                                    (0, l.jsx)("hr", { className: et.RA }),
                                ],
                            })
                          : void 0
                    : (0, l.jsx)("div", { className: et.VZ, children: g.intl.string(g.t.a19jpU) })),
            H(),
            em({
                selectedPlan: h,
                selectedPlanPrice: U,
                isPrepaid: O,
                shouldShowHRKEuroWarning: k,
                shouldShowUpdatedPaymentModal: j,
                showTotal: o,
                shouldShowTotalInSubscriptionFlow: G,
            }),
        ],
    });
}
