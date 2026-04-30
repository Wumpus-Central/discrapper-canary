n.d(t, {
    U_: () => et,
    Rx: () => er,
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
    s = n.n(i),
    r = n(17928),
    o = n(785007),
    u = n(452027),
    c = n(834730),
    d = n(726656),
    p = n(558620),
    m = n(699595),
    h = n(94420),
    A = n(34188),
    C = n(661531),
    E = n(939249),
    y = n(398590),
    P = n(793574),
    S = n(688810),
    _ = n(509536),
    T = n(361158),
    f = n(976860),
    N = n(693477),
    x = n(652215),
    I = n(985018),
    g = n(456508);
let v = (e) => {
    let { onClose: t } = e,
        { analyticsLocations: n } = (0, S.Ay)(),
        a = () => {
            t(),
                (0, f.pX)(x.BVt.COLLECTIBLES_SHOP),
                (0, N.Cz)({ analyticsSource: P.A.PREMIUM_PAYMENT_MODAL, analyticsLocations: n }),
                (0, y.jH)(),
                (0, T.dF)(_.Zt);
        };
    return (0, l.jsxs)("div", {
        className: g.kL,
        children: [
            (0, l.jsx)("div", {
                className: g.Wk,
                children: (0, l.jsx)(A.U, { size: "custom", width: 20, height: 20, color: C.A.colors.WHITE }),
            }),
            (0, l.jsx)(c.E, {
                variant: "text-sm/normal",
                children: I.intl.format(I.t.twSHte, {
                    checkItOut: (e) => (0, l.jsx)(E.D, { className: g.nf, onClick: a, children: e }),
                }),
            }),
        ],
    });
};
var M = n(937008),
    b = n(156312),
    R = n(222707),
    j = n(773669),
    L = n(594832),
    O = n(97352),
    D = n(45938),
    w = n(975571),
    U = n(927578),
    k = n(580630),
    Y = n(40185),
    G = n(881489);
let F = (0, n(945810).mj)({
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
    let n = I.intl.string(I.t.BYa62u),
        l = I.intl.string(I.t.CDa6Dq),
        a = (() => {
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
                    return I.intl.string(I.t.q6mxDS);
                case X.pe.TIER_2:
                    return I.intl.string(I.t.seZVS0);
                default:
                    return a;
            }
        case X.pe.TIER_1:
            switch (i) {
                case X.pe.TIER_0:
                    return I.intl.string(I.t["7+u2zg"]);
                case X.pe.TIER_2:
                    return I.intl.string(I.t.NG2qcc);
                default:
                    return a;
            }
        case X.pe.TIER_2:
            switch (i) {
                case X.pe.TIER_0:
                case X.pe.TIER_1:
                    return I.intl.string(I.t["eB0/w9"]);
                case X.pe.TIER_2:
                    return e.interval === X.WT.MONTH
                        ? I.intl.formatToPlainString(I.t.RqUv86, { numFreeGuildSubscriptions: X.M4 })
                        : a;
                default:
                    return a;
            }
        default:
            return a;
    }
}
let el = () => {
        let { userTrialOffer: e } = (0, b.P5)(),
            t = e?.subscription_trial,
            { daysCount: n, copy: l } = a.useMemo(
                () =>
                    t?.interval === X.WT.DAY
                        ? t?.interval_count > 7
                            ? { daysCount: 14, copy: I.intl.string(I.t.Z1V2cs) }
                            : { daysCount: 7, copy: I.intl.string(I.t.MI1rHs) }
                        : { daysCount: 30, copy: I.intl.string(I.t["+S5lrV"]) },
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
                userTrialOffer: E,
                isEligibleForTrial: y,
                discountOffer: P,
            } = (0, b.P5)(),
            {
                isGift: S,
                giftRecipient: _,
                selectedGiftStyle: T,
                customGiftMessage: f,
                setCustomGiftMessage: N,
                claimableRewards: x,
                setSelectedGiftingPromotionReward: I,
            } = (0, M.Pv)(),
            g = (0, p.A)(),
            v = (0, B.kz)(g, S && (0, D.Ik)(_), x),
            R = (0, L.tA)({ giftRecipient: _, isGift: S });
        s()(void 0 !== A, "should not be undefined");
        let [j, w] = (0, r.yK)([O.A], () => [null != A ? O.A.get(A.planId) : null, null != t ? O.A.get(t) : null]),
            k = E?.subscription_trial,
            G = (0, Y.cg)(),
            F = w ?? g,
            H = a.useCallback(
                (e) => {
                    d(e);
                },
                [d],
            ),
            V = n ?? C;
        s()(null != V, "Price option has to be set");
        let K = P?.discount?.plan_ids,
            Z = null != P && l.some((e) => K?.includes(e)) && null != P.discount,
            q = l.includes(X.gD.PREMIUM_MONTH_TIER_2) ? (0, U.y8)(X.gD.PREMIUM_MONTH_TIER_2, !1, S, V) : void 0,
            z = F?.id != null && l.includes(F.id);
        a.useEffect(() => {
            if (!z) {
                if (null == j || S) H(l[0]);
                else if (null != j) {
                    let e = l.find((e) => e !== j.id);
                    null != e && H(e);
                }
            }
        }, [z, S, l, j, H]),
            a.useEffect(() => {
                v && null != x && x.length > 0 && I(x[0]);
            }, [x, I, v]);
        let { ref: $, ...J } = (0, o._u)(),
            ee = F?.id != null ? (0, U.y8)(F.id, !1, S, V) : void 0,
            { ipCountryCode: et } = (0, W.A)(),
            en = "HR" === et && null != ee && ee.currency === Q.Yr.EUR,
            ea = (0, U.J$)(V.paymentSourceId),
            ei = !S && (Z || (null != k && y && null != i)),
            { discountAmountOff: es } = (0, m.J)(X.gD.PREMIUM_MONTH_TIER_2),
            { copy: er } = el();
        return {
            skuId: c,
            setPlanId: H,
            selectedPlan: F,
            selectedPlanPrice: ee,
            premiumSubscriptionPlan: j,
            premiumSubscription: A,
            thePriceOptions: V,
            hasSeenCollectiblesInSkuSelect: R,
            shouldShowUpdatedPaymentModal: ei,
            shouldShowHRKEuroWarning: en,
            shouldShowTotalInSubscriptionFlow: !y && !Z && z && u,
            canContinue: z,
            isPrepaid: ea,
            radioGroupRef: $,
            radioGroupProps: J,
            isGift: S,
            giftRecipient: _,
            customGiftMessage: f,
            setCustomGiftMessage: N,
            selectedGiftStyle: T,
            isEligibleForBOGOPromotion: G,
            isEligibleForTrial: y,
            userTrialOffer: E,
            trialPeriodCopy: er,
            discountOffer: P,
            isPlansEligibleForDiscount: Z,
            discountedPlanRegularPrice: q,
            discountAmountOff: es,
        };
    },
    ei = (e) => {
        let { isPrepaid: t, selectedPlan: n, selectedPlanPrice: a, intervalType: i, className: s } = e;
        return (0, l.jsxs)("div", {
            className: s,
            children: [
                (0, l.jsx)("div", { className: ee.T }),
                (0, l.jsx)(V.Sd, {
                    label: I.intl.string(I.t.txajQG),
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
    es = (e) => {
        let {
                giftRecipient: t,
                customGiftMessage: n,
                setCustomGiftMessage: a,
                selectedGiftStyle: i,
                hasSeenCollectiblesInSkuSelect: s,
                isPrepaid: r,
                canContinue: o,
                selectedPlan: c,
                selectedPlanPrice: d,
                useCompactGiftComponents: p,
                handleClose: m,
                showTotal: h,
                switchPlanSelectComponent: A,
                warningComponent: C,
            } = e,
            E = (e) => (0, l.jsx)(u.D, { label: I.intl.string(I.t["3E5hXj"]), children: e });
        return (0, D.Ik)(t)
            ? (0, l.jsxs)("div", {
                  className: ee.mh,
                  children: [
                      (0, l.jsx)("div", { className: ee.MU, children: null != i && (0, l.jsx)(z.t, {}) }),
                      (0, l.jsxs)("div", {
                          className: ee.Tc,
                          children: [
                              (0, l.jsx)(J.Z, { className: p ? ee.KW : void 0, giftRecipient: t }),
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
                              E(A),
                              C,
                              !s && (0, l.jsx)(v, { onClose: m }),
                          ],
                      }),
                  ],
              })
            : (0, l.jsxs)("div", {
                  className: ee.Du,
                  children: [
                      (0, l.jsx)(J.Z, { className: p ? ee.KW : void 0, giftRecipient: t }),
                      E(A),
                      o &&
                          h &&
                          null != c &&
                          null != d &&
                          (0, l.jsx)(ei, { selectedPlan: c, selectedPlanPrice: d, intervalType: null, isPrepaid: r }),
                      C,
                      !s && (0, l.jsx)(v, { onClose: m }),
                  ],
              });
    },
    er = (e) => {
        let {
                isPrepaid: t,
                premiumSubscription: n,
                setPlanId: l,
                thePriceOptions: a,
                shouldShowUpdatedPaymentModal: i,
                isEligibleForTrial: s,
                isPlansEligibleForDiscount: o,
                discountAmountOff: u,
            } = e,
            c = (0, r.bG)([j.default], () => j.default.locale),
            { isGift: d, giftRecipient: p } = (0, M.Pv)(),
            m = d && (0, D.Ik)(p),
            { enabled: h } = F.getConfig({ location: "PremiumSwitchPlanSelectOption" });
        return {
            isPrepaid: t,
            selectPlan: l,
            premiumSubscription: d ? null : (n ?? null),
            priceOptions: a,
            shouldShowUpdatedPaymentModal: i,
            isEligibleForDiscount: o,
            discountAmountOff: u,
            isEligibleForTrial: s,
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
                (t === X.gD.PREMIUM_MONTH_TIER_2 &&
                    null != e &&
                    [X.gD.PREMIUM_YEAR_TIER_0, X.gD.PREMIUM_YEAR_TIER_1].includes(e.planId));
        return { isCurrentPlan: n, disabled: l };
    },
    eu = (e) => {
        let { planOptions: t, radioGroupRef: n, selectedPlan: i, radioGroupProps: s } = e,
            r = er(e),
            o = a.useMemo(
                () =>
                    t.map((t) => {
                        let { isCurrentPlan: n, disabled: a } = eo(r.premiumSubscription, t);
                        return (0, l.jsx)(
                            $.Ay,
                            { planId: t, selected: i?.id === t, isCurrentPlan: n, disabled: e.disabled || a, ...r },
                            t,
                        );
                    }),
                [e.disabled, t, r, i],
            );
        return (0, l.jsx)("div", { ref: n, ...s, children: o });
    },
    ec = (e, t) => {
        let { subscriptionPeriodEnd: n, trialPeriodCopy: l } = t,
            a = e?.trial_id === X.Dw;
        return null == n
            ? null
            : a
              ? I.intl.format(I.t.nG95hA, { endDate: n })
              : I.intl.format(I.t.s4E7kb, { trialEnd: n, trialPeriod: l });
    },
    ed = (e) => {
        let { shouldShowHRKEuroWarning: t, selectedPlanPrice: n } = e;
        return t && null != n
            ? (0, l.jsx)(d.A, {
                  message: I.intl.formatToPlainString(I.t["9hnZoK"], {
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
            shouldShowUpdatedPaymentModal: s,
            showTotal: r,
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
                !s &&
                    r &&
                    (0, l.jsx)(d.A, {
                        message: I.intl.format(I.t.Om31w8, {
                            documentationLink: w.A.getArticleURL(x.MVz.LOCALIZED_PRICING),
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
            planOptions: s,
            subscriptionPeriodEnd: r,
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
            isEligibleForBOGOPromotion: E,
            isGift: y,
            thePriceOptions: P,
            isEligibleForTrial: S,
            giftRecipient: _,
            customGiftMessage: T,
            setCustomGiftMessage: f,
            selectedGiftStyle: N,
            discountOffer: x,
            isPlansEligibleForDiscount: g,
            discountedPlanRegularPrice: v,
            hasSeenCollectiblesInSkuSelect: M,
            userTrialOffer: b,
            shouldShowUpdatedPaymentModal: j,
            discountAmountOff: L,
            isPrepaid: O,
            radioGroupRef: D,
            radioGroupProps: w,
            selectedPlanPrice: U,
            shouldShowHRKEuroWarning: Y,
            shouldShowTotalInSubscriptionFlow: F,
            canContinue: B,
            trialPeriodCopy: W,
        } = ea({ selectedPlanId: n, priceOptions: i, planOptions: s, subscriptionPeriodEnd: r, showTotal: o }),
        H = (0, G.ds)(),
        V = () =>
            (0, l.jsx)(eu, {
                disabled: t,
                planOptions: s,
                radioGroupRef: D,
                radioGroupProps: w,
                isGift: y,
                isPrepaid: O,
                premiumSubscription: A,
                setPlanId: m,
                selectedPlan: h,
                thePriceOptions: P,
                shouldShowUpdatedPaymentModal: j,
                isEligibleForTrial: S,
                isPlansEligibleForDiscount: g,
                discountAmountOff: L,
            }),
        { showFractionalPremiumBanner: K, fractionalPremiumInfo: q } = (0, R._V)({
            premiumSubscription: A,
            selectedPlanId: n,
            planGroup: a,
            isGift: y,
            fractionalPremiumInfoArgs: {
                forceFetch: !1,
                excludeReverseTrial: !1,
                excludeReverseTrialFromCountdown: !0,
            },
        });
    if (y)
        return (0, l.jsx)(es, {
            giftRecipient: _,
            customGiftMessage: T,
            setCustomGiftMessage: f,
            selectedGiftStyle: N,
            hasSeenCollectiblesInSkuSelect: M,
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
    let z = !(S && K && !H),
        $ = et(C, { isEligibleForBOGOPromotion: E });
    return (0, l.jsxs)("div", {
        children: [
            K &&
                !H &&
                (0, l.jsx)(Z.vi, {
                    fractionalPremiumInfo: q,
                    enablePremiumBrandRefresh: !0,
                    variant: S ? Z.uA.TRIAL : void 0,
                    trialPeriod: S ? W : void 0,
                    trialEnd: S ? r : void 0,
                }),
            $ && !K && (0, l.jsx)("div", { className: ee.G3, children: en(C, p) }),
            z &&
                (j
                    ? S
                        ? (0, l.jsxs)("div", {
                              children: [
                                  (0, l.jsx)(c.E, {
                                      variant: "text-sm/normal",
                                      className: ee.Tz,
                                      children: ec(b, { subscriptionPeriodEnd: r, trialPeriodCopy: W }),
                                  }),
                                  (0, l.jsx)("hr", { className: ee.RA }),
                              ],
                          })
                        : g && null != L && null != v && n === X.gD.PREMIUM_MONTH_TIER_2
                          ? (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsx)(c.E, {
                                        variant: "text-sm/normal",
                                        className: ee.Tz,
                                        children: I.intl.format(I.t["nG7g/E"], {
                                            numMonths: x?.discount.user_usage_limit ?? "",
                                            discountedPrice: (0, k.$g)(v.amount - L, v.currency),
                                            regularPrice: (0, k.$g)(v.amount, v.currency),
                                        }),
                                    }),
                                    (0, l.jsx)("hr", { className: ee.RA }),
                                ],
                            })
                          : void 0
                    : (0, l.jsx)("div", { className: ee.VZ, children: I.intl.string(I.t.a19jpU) })),
            V(),
            ep({
                selectedPlan: h,
                selectedPlanPrice: U,
                isPrepaid: O,
                shouldShowHRKEuroWarning: Y,
                shouldShowUpdatedPaymentModal: j,
                showTotal: o,
                shouldShowTotalInSubscriptionFlow: F,
            }),
        ],
    });
}
