n.d(t, {
    U_: () => et,
    Rx: () => es,
    yq: () => en,
    LR: () => ep,
    $p: () => em,
    cD: () => eo,
    O8: () => el,
    Ct: () => ec,
    RO: () => ei,
});
var l = n(627968),
    i = n(64700),
    a = n(284009),
    r = n.n(a),
    s = n(17928),
    o = n(785007),
    u = n(452027),
    c = n(834730),
    d = n(726656),
    p = n(558620),
    m = n(699595),
    h = n(94420),
    C = n(34188),
    A = n(661531),
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
        i = () => {
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
                children: (0, l.jsx)(C.U, { size: "custom", width: 20, height: 20, color: A.A.colors.WHITE }),
            }),
            (0, l.jsx)(c.E, {
                variant: "text-sm/normal",
                children: I.intl.format(I.t.twSHte, {
                    checkItOut: (e) => (0, l.jsx)(E.D, { className: g.nf, onClick: i, children: e }),
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
        i = (() => {
            switch (e.interval) {
                case X.WT.YEAR:
                    return n;
                case X.WT.MONTH:
                default:
                    return l;
            }
        })(),
        a = e.skuId;
    switch (t) {
        case X.pe.TIER_0:
            switch (a) {
                case X.pe.TIER_1:
                    return I.intl.string(I.t.q6mxDS);
                case X.pe.TIER_2:
                    return I.intl.string(I.t.seZVS0);
                default:
                    return i;
            }
        case X.pe.TIER_1:
            switch (a) {
                case X.pe.TIER_0:
                    return I.intl.string(I.t["7+u2zg"]);
                case X.pe.TIER_2:
                    return I.intl.string(I.t.NG2qcc);
                default:
                    return i;
            }
        case X.pe.TIER_2:
            switch (a) {
                case X.pe.TIER_0:
                case X.pe.TIER_1:
                    return I.intl.string(I.t["eB0/w9"]);
                case X.pe.TIER_2:
                    return e.interval === X.WT.MONTH
                        ? I.intl.formatToPlainString(I.t.RqUv86, { numFreeGuildSubscriptions: X.M4 })
                        : i;
                default:
                    return i;
            }
        default:
            return i;
    }
}
let el = () => {
        let { userTrialOffer: e } = (0, b.P5)(),
            t = e?.subscription_trial,
            { daysCount: n, copy: l } = i.useMemo(
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
    ei = (e) => {
        let { selectedPlanId: t, priceOptions: n, planOptions: l, subscriptionPeriodEnd: a, showTotal: u } = e,
            { selectedSkuId: c, setSelectedPlanId: d } = (0, h.t4)((e) => ({
                selectedSkuId: e.selectedSkuId,
                setSelectedPlanId: e.setSelectedPlanId,
            })),
            {
                activeSubscription: C,
                priceOptions: A,
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
        r()(void 0 !== C, "should not be undefined");
        let [j, w] = (0, s.yK)([O.A], () => [null != C ? O.A.get(C.planId) : null, null != t ? O.A.get(t) : null]),
            k = E?.subscription_trial,
            G = (0, Y.cg)(),
            F = w ?? g,
            H = i.useCallback(
                (e) => {
                    d(e);
                },
                [d],
            ),
            V = n ?? A;
        r()(null != V, "Price option has to be set");
        let K = P?.discount?.plan_ids,
            Z = null != P && l.some((e) => K?.includes(e)) && null != P.discount,
            q = l.includes(X.gD.PREMIUM_MONTH_TIER_2) ? (0, U.y8)(X.gD.PREMIUM_MONTH_TIER_2, !1, S, V) : void 0,
            z = F?.id != null && l.includes(F.id);
        i.useEffect(() => {
            if (!z) {
                if (null == j || S) H(l[0]);
                else if (null != j) {
                    let e = l.find((e) => e !== j.id);
                    null != e && H(e);
                }
            }
        }, [z, S, l, j, H]),
            i.useEffect(() => {
                v && null != x && x.length > 0 && I(x[0]);
            }, [x, I, v]);
        let { ref: $, ...J } = (0, o._u)(),
            ee = F?.id != null ? (0, U.y8)(F.id, !1, S, V) : void 0,
            { ipCountryCode: et } = (0, W.A)(),
            en = "HR" === et && null != ee && ee.currency === Q.Yr.EUR,
            ei = (0, U.J$)(V.paymentSourceId),
            ea = !S && (Z || (null != k && y && null != a)),
            { discountAmountOff: er } = (0, m.J)(X.gD.PREMIUM_MONTH_TIER_2),
            { copy: es } = el();
        return {
            skuId: c,
            setPlanId: H,
            selectedPlan: F,
            selectedPlanPrice: ee,
            premiumSubscriptionPlan: j,
            premiumSubscription: C,
            thePriceOptions: V,
            hasSeenCollectiblesInSkuSelect: R,
            shouldShowUpdatedPaymentModal: ea,
            shouldShowHRKEuroWarning: en,
            shouldShowTotalInSubscriptionFlow: !y && !Z && z && u,
            canContinue: z,
            isPrepaid: ei,
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
            trialPeriodCopy: es,
            discountOffer: P,
            isPlansEligibleForDiscount: Z,
            discountedPlanRegularPrice: q,
            discountAmountOff: er,
        };
    },
    ea = (e) => {
        let { isPrepaid: t, selectedPlan: n, selectedPlanPrice: i, intervalType: a, className: r } = e;
        return (0, l.jsxs)("div", {
            className: r,
            children: [
                (0, l.jsx)("div", { className: ee.T }),
                (0, l.jsx)(V.Sd, {
                    label: I.intl.string(I.t.txajQG),
                    value: (0, l.jsx)(K.A, {
                        price: i.amount,
                        currency: i.currency,
                        intervalType: a,
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
                setCustomGiftMessage: i,
                selectedGiftStyle: a,
                hasSeenCollectiblesInSkuSelect: r,
                isPrepaid: s,
                canContinue: o,
                selectedPlan: c,
                selectedPlanPrice: d,
                useCompactGiftComponents: p,
                handleClose: m,
                showTotal: h,
                switchPlanSelectComponent: C,
                warningComponent: A,
            } = e,
            E = (e) => (0, l.jsx)(u.D, { label: I.intl.string(I.t["3E5hXj"]), children: e });
        return (0, D.Ik)(t)
            ? (0, l.jsxs)("div", {
                  className: ee.mh,
                  children: [
                      (0, l.jsx)("div", { className: ee.MU, children: null != a && (0, l.jsx)(z.t, {}) }),
                      (0, l.jsxs)("div", {
                          className: ee.Tc,
                          children: [
                              (0, l.jsx)(J.Z, { className: p ? ee.KW : void 0, giftRecipient: t }),
                              (() => {
                                  if ((0, D.lo)(t) === D.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != i)
                                      return (0, l.jsx)(q.A, {
                                          className: ee.iX,
                                          innerClassName: ee.pt,
                                          onTextChange: (e) => i(e),
                                          pendingText: n,
                                          currentText: n,
                                      });
                              })(),
                              E(C),
                              A,
                              !r && (0, l.jsx)(v, { onClose: m }),
                          ],
                      }),
                  ],
              })
            : (0, l.jsxs)("div", {
                  className: ee.Du,
                  children: [
                      (0, l.jsx)(J.Z, { className: p ? ee.KW : void 0, giftRecipient: t }),
                      E(C),
                      o &&
                          h &&
                          null != c &&
                          null != d &&
                          (0, l.jsx)(ea, { selectedPlan: c, selectedPlanPrice: d, intervalType: null, isPrepaid: s }),
                      A,
                      !r && (0, l.jsx)(v, { onClose: m }),
                  ],
              });
    },
    es = (e) => {
        let {
                isPrepaid: t,
                premiumSubscription: n,
                setPlanId: l,
                thePriceOptions: i,
                shouldShowUpdatedPaymentModal: a,
                isEligibleForTrial: r,
                isPlansEligibleForDiscount: o,
                discountAmountOff: u,
            } = e,
            c = (0, s.bG)([j.default], () => j.default.locale),
            { isGift: d, giftRecipient: p } = (0, M.Pv)(),
            m = d && (0, D.Ik)(p),
            { enabled: h } = F.getConfig({ location: "PremiumSwitchPlanSelectOption" });
        return {
            isPrepaid: t,
            selectPlan: l,
            premiumSubscription: d ? null : (n ?? null),
            priceOptions: i,
            shouldShowUpdatedPaymentModal: a,
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
                (t === X.gD.PREMIUM_MONTH_TIER_2 &&
                    null != e &&
                    [X.gD.PREMIUM_YEAR_TIER_0, X.gD.PREMIUM_YEAR_TIER_1].includes(e.planId));
        return { isCurrentPlan: n, disabled: l };
    },
    eu = (e) => {
        let { planOptions: t, radioGroupRef: n, selectedPlan: a, radioGroupProps: r } = e,
            s = es(e),
            o = i.useMemo(
                () =>
                    t.map((t) => {
                        let { isCurrentPlan: n, disabled: i } = eo(s.premiumSubscription, t);
                        return (0, l.jsx)(
                            $.Ay,
                            { planId: t, selected: a?.id === t, isCurrentPlan: n, disabled: e.disabled || i, ...s },
                            t,
                        );
                    }),
                [e.disabled, t, s, a],
            );
        return (0, l.jsx)("div", { ref: n, ...r, children: o });
    },
    ec = (e, t) => {
        let { subscriptionPeriodEnd: n, trialPeriodCopy: l } = t,
            i = e?.trial_id === X.Dw;
        return null == n
            ? null
            : i
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
                    (0, l.jsx)(ea, {
                        className: u,
                        selectedPlan: t,
                        selectedPlanPrice: n,
                        intervalType: t.interval,
                        isPrepaid: i,
                    }),
                ed({ shouldShowHRKEuroWarning: a, selectedPlanPrice: n }),
                !r &&
                    s &&
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
            planGroup: i,
            priceOptions: a,
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
            premiumSubscription: C,
            premiumSubscriptionPlan: A,
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
        } = ei({ selectedPlanId: n, priceOptions: a, planOptions: r, subscriptionPeriodEnd: s, showTotal: o }),
        H = (0, G.ds)(),
        V = () =>
            (0, l.jsx)(eu, {
                disabled: t,
                planOptions: r,
                radioGroupRef: D,
                radioGroupProps: w,
                isGift: y,
                isPrepaid: O,
                premiumSubscription: C,
                setPlanId: m,
                selectedPlan: h,
                thePriceOptions: P,
                shouldShowUpdatedPaymentModal: j,
                isEligibleForTrial: S,
                isPlansEligibleForDiscount: g,
                discountAmountOff: L,
            }),
        { showFractionalPremiumBanner: K, fractionalPremiumInfo: q } = (0, R._V)({
            premiumSubscription: C,
            selectedPlanId: n,
            planGroup: i,
            isGift: y,
            fractionalPremiumInfoArgs: {
                forceFetch: !1,
                excludeReverseTrial: !1,
                excludeReverseTrialFromCountdown: !0,
            },
        });
    if (y)
        return (0, l.jsx)(er, {
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
        $ = et(A, { isEligibleForBOGOPromotion: E });
    return (0, l.jsxs)("div", {
        children: [
            K &&
                !H &&
                (0, l.jsx)(Z.vi, {
                    fractionalPremiumInfo: q,
                    enablePremiumBrandRefresh: !0,
                    variant: S ? Z.uA.TRIAL : void 0,
                    trialPeriod: S ? W : void 0,
                    trialEnd: S ? s : void 0,
                }),
            $ && !K && (0, l.jsx)("div", { className: ee.G3, children: en(A, p) }),
            z &&
                (j
                    ? S
                        ? (0, l.jsxs)("div", {
                              children: [
                                  (0, l.jsx)(c.E, {
                                      variant: "text-sm/normal",
                                      className: ee.Tz,
                                      children: ec(b, { subscriptionPeriodEnd: s, trialPeriodCopy: W }),
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
