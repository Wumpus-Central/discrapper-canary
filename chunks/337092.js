n.d(t, {
    U_: () => et,
    Rx: () => es,
    yq: () => en,
    LR: () => ep,
    $p: () => em,
    cD: () => eo,
    O8: () => el,
    Ct: () => ec,
    RO: () => ea,
});
var l = n(627968),
    a = n(64700),
    i = n(284009),
    r = n.n(i),
    s = n(17928),
    o = n(785007),
    u = n(452027),
    c = n(834730),
    d = n(726656),
    p = n(558620),
    m = n(699595),
    h = n(94420),
    A = n(34188),
    C = n(661531),
    _ = n(939249),
    E = n(398590),
    y = n(793574),
    f = n(688810),
    P = n(509536),
    S = n(361158),
    T = n(976860),
    x = n(693477),
    N = n(652215),
    g = n(985018),
    I = n(456508);
let v = (e) => {
    let { onClose: t } = e,
        { analyticsLocations: n } = (0, f.Ay)(),
        a = () => {
            t(),
                (0, T.pX)(N.BVt.COLLECTIBLES_SHOP),
                (0, x.Cz)({ analyticsSource: y.A.PREMIUM_PAYMENT_MODAL, analyticsLocations: n }),
                (0, E.jH)(),
                (0, S.dF)(P.Zt);
        };
    return (0, l.jsxs)("div", {
        className: I.kL,
        children: [
            (0, l.jsx)("div", {
                className: I.Wk,
                children: (0, l.jsx)(A.U, { size: "custom", width: 20, height: 20, color: C.A.colors.WHITE }),
            }),
            (0, l.jsx)(c.E, {
                variant: "text-sm/normal",
                children: g.intl.format(g.t.twSHte, {
                    checkItOut: (e) => (0, l.jsx)(_.D, { className: I.nf, onClick: a, children: e }),
                }),
            }),
        ],
    });
};
var b = n(937008),
    M = n(156312),
    L = n(222707),
    R = n(773669),
    j = n(594832),
    O = n(97352),
    D = n(45938),
    w = n(975571),
    U = n(927578),
    k = n(580630),
    Y = n(40185),
    F = n(881489);
let G = (0, n(945810).mj)({
    name: "2026-03-calculated-annual-discount-percent",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var B = n(810498),
    W = n(477421),
    H = n(422936),
    V = n(735164),
    K = n(363476),
    Z = n(531506),
    q = n(871181),
    z = n(318007),
    $ = n(958720),
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
    let n = g.intl.string(g.t.BYa62u),
        l = g.intl.string(g.t.CDa6Dq),
        a = (() => {
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
                    return g.intl.string(g.t.q6mxDS);
                case J.pe.TIER_2:
                    return g.intl.string(g.t.seZVS0);
                default:
                    return a;
            }
        case J.pe.TIER_1:
            switch (i) {
                case J.pe.TIER_0:
                    return g.intl.string(g.t["7+u2zg"]);
                case J.pe.TIER_2:
                    return g.intl.string(g.t.NG2qcc);
                default:
                    return a;
            }
        case J.pe.TIER_2:
            switch (i) {
                case J.pe.TIER_0:
                case J.pe.TIER_1:
                    return g.intl.string(g.t["eB0/w9"]);
                case J.pe.TIER_2:
                    return e.interval === J.WT.MONTH
                        ? g.intl.formatToPlainString(g.t.RqUv86, { numFreeGuildSubscriptions: J.M4 })
                        : a;
                default:
                    return a;
            }
        default:
            return a;
    }
}
let el = () => {
        let { userTrialOffer: e } = (0, M.P5)(),
            t = e?.subscription_trial,
            { daysCount: n, copy: l } = a.useMemo(
                () =>
                    t?.interval === J.WT.DAY
                        ? t?.interval_count > 7
                            ? { daysCount: 14, copy: g.intl.string(g.t.Z1V2cs) }
                            : { daysCount: 7, copy: g.intl.string(g.t.MI1rHs) }
                        : { daysCount: 30, copy: g.intl.string(g.t["+S5lrV"]) },
                [t],
            );
        return { daysCount: n, copy: l, userTrialOffer: e };
    },
    ea = (e) => {
        let { selectedPlanId: t, priceOptions: n, planOptions: l, subscriptionPeriodEnd: i, showTotal: u } = e,
            { selectedSkuId: c, setSelectedPlanId: d } = (0, h.t4)((e) => ({
                selectedSkuId: e.selectedSkuId,
                setSelectedPlanId: e.setSelectedPlanId,
            })),
            {
                activeSubscription: A,
                priceOptions: C,
                userTrialOffer: _,
                isEligibleForTrial: E,
                discountOffer: y,
            } = (0, M.P5)(),
            {
                isGift: f,
                giftRecipient: P,
                selectedGiftStyle: S,
                customGiftMessage: T,
                setCustomGiftMessage: x,
                claimableRewards: N,
                setSelectedGiftingPromotionReward: g,
            } = (0, b.Pv)(),
            I = (0, p.A)(),
            v = (0, B.kz)(I, f && (0, D.Ik)(P), N),
            L = (0, j.tA)({ giftRecipient: P, isGift: f });
        r()(void 0 !== A, "should not be undefined");
        let [R, w] = (0, s.yK)([O.A], () => [null != A ? O.A.get(A.planId) : null, null != t ? O.A.get(t) : null]),
            k = _?.subscription_trial,
            F = (0, Y.cg)(),
            G = w ?? I,
            H = a.useCallback(
                (e) => {
                    d(e);
                },
                [d],
            ),
            V = n ?? C;
        r()(null != V, "Price option has to be set");
        let K = y?.discount?.plan_ids,
            Z = null != y && l.some((e) => K?.includes(e)) && null != y.discount,
            q = l.includes(J.gD.PREMIUM_MONTH_TIER_2) ? (0, U.y8)(J.gD.PREMIUM_MONTH_TIER_2, !1, f, V) : void 0,
            z = G?.id != null && l.includes(G.id);
        a.useEffect(() => {
            if (!z) {
                if (null == R || f) H(l[0]);
                else if (null != R) {
                    let e = l.find((e) => e !== R.id);
                    null != e && H(e);
                }
            }
        }, [z, f, l, R, H]),
            a.useEffect(() => {
                v && null != N && N.length > 0 && g(N[0]);
            }, [N, g, v]);
        let { ref: $, ...X } = (0, o._u)(),
            ee = G?.id != null ? (0, U.y8)(G.id, !1, f, V) : void 0,
            { ipCountryCode: et } = (0, W.A)(),
            en = "HR" === et && null != ee && ee.currency === Q.Yr.EUR,
            ea = (0, U.J$)(V.paymentSourceId),
            ei = !f && (Z || (null != k && E && null != i)),
            { discountAmountOff: er } = (0, m.J)(J.gD.PREMIUM_MONTH_TIER_2),
            { copy: es } = el();
        return {
            skuId: c,
            setPlanId: H,
            selectedPlan: G,
            selectedPlanPrice: ee,
            premiumSubscriptionPlan: R,
            premiumSubscription: A,
            thePriceOptions: V,
            hasSeenCollectiblesInSkuSelect: L,
            shouldShowUpdatedPaymentModal: ei,
            shouldShowHRKEuroWarning: en,
            shouldShowTotalInSubscriptionFlow: !E && !Z && z && u,
            canContinue: z,
            isPrepaid: ea,
            radioGroupRef: $,
            radioGroupProps: X,
            isGift: f,
            giftRecipient: P,
            customGiftMessage: T,
            setCustomGiftMessage: x,
            selectedGiftStyle: S,
            isEligibleForBOGOPromotion: F,
            isEligibleForTrial: E,
            userTrialOffer: _,
            trialPeriodCopy: es,
            discountOffer: y,
            isPlansEligibleForDiscount: Z,
            discountedPlanRegularPrice: q,
            discountAmountOff: er,
        };
    },
    ei = (e) => {
        let { isPrepaid: t, selectedPlan: n, selectedPlanPrice: a, intervalType: i, className: r } = e;
        return (0, l.jsxs)("div", {
            className: r,
            children: [
                (0, l.jsx)("div", { className: ee.T }),
                (0, l.jsx)(V.Sd, {
                    label: g.intl.string(g.t.txajQG),
                    value: (0, l.jsx)(K.A, {
                        price: a.amount,
                        currency: a.currency,
                        intervalType: i,
                        intervalCount: n.intervalCount,
                        isPrepaidPaymentSource: t,
                    }),
                    className: ee.M3,
                }),
            ],
        });
    },
    er = (e) => {
        let {
                giftRecipient: t,
                customGiftMessage: n,
                setCustomGiftMessage: a,
                selectedGiftStyle: i,
                hasSeenCollectiblesInSkuSelect: r,
                isPrepaid: s,
                canContinue: o,
                selectedPlan: c,
                selectedPlanPrice: d,
                useCompactGiftComponents: p,
                handleClose: m,
                showTotal: h,
                switchPlanSelectComponent: A,
                warningComponent: C,
            } = e,
            _ = (e) => (0, l.jsx)(u.D, { label: g.intl.string(g.t["3E5hXj"]), children: e });
        return (0, D.Ik)(t)
            ? (0, l.jsxs)("div", {
                  className: ee.mh,
                  children: [
                      (0, l.jsx)("div", { className: ee.MU, children: null != i && (0, l.jsx)(z.t, {}) }),
                      (0, l.jsxs)("div", {
                          className: ee.Tc,
                          children: [
                              (0, l.jsx)(X.Z, { className: p ? ee.KW : void 0, giftRecipient: t }),
                              (() => {
                                  if ((0, D.lo)(t) === D.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != a)
                                      return (0, l.jsx)(q.A, {
                                          className: ee.iX,
                                          innerClassName: ee.pt,
                                          onTextChange: (e) => a(e),
                                          pendingText: n,
                                          currentText: n,
                                      });
                              })(),
                              _(A),
                              C,
                              !r && (0, l.jsx)(v, { onClose: m }),
                          ],
                      }),
                  ],
              })
            : (0, l.jsxs)("div", {
                  className: ee.Du,
                  children: [
                      (0, l.jsx)(X.Z, { className: p ? ee.KW : void 0, giftRecipient: t }),
                      _(A),
                      o &&
                          h &&
                          null != c &&
                          null != d &&
                          (0, l.jsx)(ei, { selectedPlan: c, selectedPlanPrice: d, intervalType: null, isPrepaid: s }),
                      C,
                      !r && (0, l.jsx)(v, { onClose: m }),
                  ],
              });
    },
    es = (e) => {
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
            c = (0, s.bG)([R.default], () => R.default.locale),
            { isGift: d, giftRecipient: p } = (0, b.Pv)(),
            m = d && (0, D.Ik)(p),
            { enabled: h } = G.getConfig({ location: "PremiumSwitchPlanSelectOption" });
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
            isEligibleForBOGOPromotion: (0, Y.cg)(),
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
        let { planOptions: t, radioGroupRef: n, selectedPlan: i, radioGroupProps: r } = e,
            s = es(e),
            o = a.useMemo(
                () =>
                    t.map((t) => {
                        let { isCurrentPlan: n, disabled: a } = eo(s.premiumSubscription, t);
                        return (0, l.jsx)(
                            $.Ay,
                            { planId: t, selected: i?.id === t, isCurrentPlan: n, disabled: e.disabled || a, ...s },
                            t,
                        );
                    }),
                [e.disabled, t, s, i],
            );
        return (0, l.jsx)("div", { ref: n, ...r, children: o });
    },
    ec = (e, t) => {
        let { subscriptionPeriodEnd: n, trialPeriodCopy: l } = t,
            a = e?.trial_id === J.Dw;
        return null == n
            ? null
            : a
              ? g.intl.format(g.t.nG95hA, { endDate: n })
              : g.intl.format(g.t.s4E7kb, { trialEnd: n, trialPeriod: l });
    },
    ed = (e) => {
        let { shouldShowHRKEuroWarning: t, selectedPlanPrice: n } = e;
        return t && null != n
            ? (0, l.jsx)(d.A, {
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
                    (0, l.jsx)(ei, {
                        className: u,
                        selectedPlan: t,
                        selectedPlanPrice: n,
                        intervalType: t.interval,
                        isPrepaid: a,
                    }),
                ed({ shouldShowHRKEuroWarning: i, selectedPlanPrice: n }),
                !r &&
                    s &&
                    (0, l.jsx)(d.A, {
                        message: g.intl.format(g.t.Om31w8, {
                            documentationLink: w.A.getArticleURL(N.MVz.LOCALIZED_PRICING),
                        }),
                    }),
            ],
        });
    };
function em(e) {
    let {
            disabled: t,
            selectedPlanId: n,
            planGroup: a,
            priceOptions: i,
            planOptions: r,
            subscriptionPeriodEnd: s,
            showTotal: o = !0,
            useCompactGiftComponents: u,
            handleClose: d,
        } = e,
        {
            skuId: p,
            setPlanId: m,
            selectedPlan: h,
            premiumSubscription: A,
            premiumSubscriptionPlan: C,
            isEligibleForBOGOPromotion: _,
            isGift: E,
            thePriceOptions: y,
            isEligibleForTrial: f,
            giftRecipient: P,
            customGiftMessage: S,
            setCustomGiftMessage: T,
            selectedGiftStyle: x,
            discountOffer: N,
            isPlansEligibleForDiscount: I,
            discountedPlanRegularPrice: v,
            hasSeenCollectiblesInSkuSelect: b,
            userTrialOffer: M,
            shouldShowUpdatedPaymentModal: R,
            discountAmountOff: j,
            isPrepaid: O,
            radioGroupRef: D,
            radioGroupProps: w,
            selectedPlanPrice: U,
            shouldShowHRKEuroWarning: Y,
            shouldShowTotalInSubscriptionFlow: G,
            canContinue: B,
            trialPeriodCopy: W,
        } = ea({ selectedPlanId: n, priceOptions: i, planOptions: r, subscriptionPeriodEnd: s, showTotal: o }),
        H = (0, F.ds)(),
        V = () =>
            (0, l.jsx)(eu, {
                disabled: t,
                planOptions: r,
                radioGroupRef: D,
                radioGroupProps: w,
                isGift: E,
                isPrepaid: O,
                premiumSubscription: A,
                setPlanId: m,
                selectedPlan: h,
                thePriceOptions: y,
                shouldShowUpdatedPaymentModal: R,
                isEligibleForTrial: f,
                isPlansEligibleForDiscount: I,
                discountAmountOff: j,
            }),
        { showFractionalPremiumBanner: K, fractionalPremiumInfo: q } = (0, L._V)({
            premiumSubscription: A,
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
        return (0, l.jsx)(er, {
            giftRecipient: P,
            customGiftMessage: S,
            setCustomGiftMessage: T,
            selectedGiftStyle: x,
            hasSeenCollectiblesInSkuSelect: b,
            isPrepaid: O,
            canContinue: B,
            selectedPlan: h,
            selectedPlanPrice: U,
            useCompactGiftComponents: u,
            handleClose: d,
            showTotal: o,
            switchPlanSelectComponent: V(),
            warningComponent: ed({ shouldShowHRKEuroWarning: Y, selectedPlanPrice: U }),
        });
    let z = !(f && K && !H),
        $ = et(C, { isEligibleForBOGOPromotion: _ });
    return (0, l.jsxs)("div", {
        children: [
            K &&
                !H &&
                (0, l.jsx)(Z.vi, {
                    fractionalPremiumInfo: q,
                    enablePremiumBrandRefresh: !0,
                    variant: f ? Z.uA.TRIAL : void 0,
                    trialPeriod: f ? W : void 0,
                    trialEnd: f ? s : void 0,
                }),
            $ && !K && (0, l.jsx)("div", { className: ee.G3, children: en(C, p) }),
            z &&
                (R
                    ? f
                        ? (0, l.jsxs)("div", {
                              children: [
                                  (0, l.jsx)(c.E, {
                                      variant: "text-sm/normal",
                                      className: ee.Tz,
                                      children: ec(M, { subscriptionPeriodEnd: s, trialPeriodCopy: W }),
                                  }),
                                  (0, l.jsx)("hr", { className: ee.RA }),
                              ],
                          })
                        : I && null != j && null != v && n === J.gD.PREMIUM_MONTH_TIER_2
                          ? (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsx)(c.E, {
                                        variant: "text-sm/normal",
                                        className: ee.Tz,
                                        children: g.intl.format(g.t["nG7g/E"], {
                                            numMonths: N?.discount.user_usage_limit ?? "",
                                            discountedPrice: (0, k.$g)(v.amount - j, v.currency),
                                            regularPrice: (0, k.$g)(v.amount, v.currency),
                                        }),
                                    }),
                                    (0, l.jsx)("hr", { className: ee.RA }),
                                ],
                            })
                          : void 0
                    : (0, l.jsx)("div", { className: ee.VZ, children: g.intl.string(g.t.a19jpU) })),
            V(),
            ep({
                selectedPlan: h,
                selectedPlanPrice: U,
                isPrepaid: O,
                shouldShowHRKEuroWarning: Y,
                shouldShowUpdatedPaymentModal: R,
                showTotal: o,
                shouldShowTotalInSubscriptionFlow: G,
            }),
        ],
    });
}
