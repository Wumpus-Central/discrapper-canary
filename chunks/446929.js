n.d(t, {
    $p: () => en,
    Ct: () => Q,
    LR: () => et,
    O8: () => K,
    RO: () => Z,
    Rx: () => $,
    U_: () => V,
    cD: () => X,
    yq: () => H,
});
var l = n(627968),
    i = n(64700),
    a = n(284009),
    r = n.n(a),
    s = n(311907),
    o = n(785007),
    u = n(452027),
    c = n(834730),
    d = n(726656),
    p = n(558620),
    m = n(699595),
    h = n(94420),
    A = n(448811),
    _ = n(937008),
    C = n(156312),
    E = n(222707),
    y = n(773669),
    f = n(594832),
    P = n(97352),
    S = n(45938),
    x = n(975571),
    T = n(927578),
    N = n(580630),
    g = n(40185),
    I = n(881489),
    v = n(906023),
    b = n(810498),
    R = n(477421),
    M = n(422936),
    j = n(735164),
    L = n(363476),
    O = n(156962),
    D = n(871181),
    U = n(318007),
    w = n(958720),
    k = n(285719),
    F = n(788868),
    G = n(652215);
n(26279);
var B = n(818348),
    Y = n(985018),
    W = n(345138);
function V(e, t) {
    let { isEligibleForBOGOPromotion: n } = t;
    return null != e && !n;
}
function H(e, t) {
    let n = Y.intl.string(Y.t.BYa62u),
        l = Y.intl.string(Y.t.CDa6Dq),
        i = (() => {
            switch (e.interval) {
                case F.WT.YEAR:
                    return n;
                case F.WT.MONTH:
                default:
                    return l;
            }
        })(),
        a = e.skuId;
    switch (t) {
        case F.pe.TIER_0:
            switch (a) {
                case F.pe.TIER_1:
                    return Y.intl.string(Y.t.q6mxDS);
                case F.pe.TIER_2:
                    return Y.intl.string(Y.t.seZVS0);
                default:
                    return i;
            }
        case F.pe.TIER_1:
            switch (a) {
                case F.pe.TIER_0:
                    return Y.intl.string(Y.t["7+u2zg"]);
                case F.pe.TIER_2:
                    return Y.intl.string(Y.t.NG2qcc);
                default:
                    return i;
            }
        case F.pe.TIER_2:
            switch (a) {
                case F.pe.TIER_0:
                case F.pe.TIER_1:
                    return Y.intl.string(Y.t["eB0/w9"]);
                case F.pe.TIER_2:
                    return e.interval === F.WT.MONTH
                        ? Y.intl.formatToPlainString(Y.t.RqUv86, { numFreeGuildSubscriptions: F.M4 })
                        : i;
                default:
                    return i;
            }
        default:
            return i;
    }
}
let K = () => {
        let { userTrialOffer: e } = (0, C.P5)(),
            t = e?.subscription_trial,
            { daysCount: n, copy: l } = i.useMemo(
                () =>
                    t?.interval === F.WT.DAY
                        ? t?.interval_count > 7
                            ? { daysCount: 14, copy: Y.intl.string(Y.t.Z1V2cs) }
                            : { daysCount: 7, copy: Y.intl.string(Y.t.MI1rHs) }
                        : { daysCount: 30, copy: Y.intl.string(Y.t["+S5lrV"]) },
                [t],
            );
        return { daysCount: n, copy: l, userTrialOffer: e };
    },
    Z = (e) => {
        let { selectedPlanId: t, priceOptions: n, planOptions: l, subscriptionPeriodEnd: a, showTotal: u } = e,
            { selectedSkuId: c, setSelectedPlanId: d } = (0, h.t4)((e) => ({
                selectedSkuId: e.selectedSkuId,
                setSelectedPlanId: e.setSelectedPlanId,
            })),
            {
                activeSubscription: A,
                priceOptions: E,
                userTrialOffer: y,
                isEligibleForTrial: x,
                discountOffer: N,
            } = (0, C.P5)(),
            {
                isGift: I,
                giftRecipient: v,
                selectedGiftStyle: M,
                customGiftMessage: j,
                setCustomGiftMessage: L,
                claimableRewards: O,
                setSelectedGiftingPromotionReward: D,
            } = (0, _.Pv)(),
            U = (0, p.A)(),
            w = (0, b.kz)(U, I && (0, S.Ik)(v), O),
            k = (0, f.tA)({ giftRecipient: v, isGift: I });
        r()(void 0 !== A, "should not be undefined");
        let [G, Y] = (0, s.yK)([P.A], () => [null != A ? P.A.get(A.planId) : null, null != t ? P.A.get(t) : null]),
            W = y?.subscription_trial,
            V = (0, g.cg)(),
            H = Y ?? U,
            Z = i.useCallback(
                (e) => {
                    d(e);
                },
                [d],
            ),
            q = n ?? E;
        r()(null != q, "Price option has to be set");
        let z = N?.discount?.plan_ids,
            $ = null != N && l.some((e) => z?.includes(e)) && null != N.discount,
            X = l.includes(F.gD.PREMIUM_MONTH_TIER_2) ? (0, T.y8)(F.gD.PREMIUM_MONTH_TIER_2, !1, I, q) : void 0,
            J = H?.id != null && l.includes(H.id);
        i.useEffect(() => {
            if (!J) {
                if (null == G || I) Z(l[0]);
                else if (null != G) {
                    let e = l.find((e) => e !== G.id);
                    null != e && Z(e);
                }
            }
        }, [J, I, l, G, Z]),
            i.useEffect(() => {
                w && null != O && O.length > 0 && D(O[0]);
            }, [O, D, w]);
        let { ref: Q, ...ee } = (0, o._u)(),
            et = H?.id != null ? (0, T.y8)(H.id, !1, I, q) : void 0,
            { ipCountryCode: en } = (0, R.A)(),
            el = "HR" === en && null != et && et.currency === B.Yr.EUR,
            ei = (0, T.J$)(q.paymentSourceId),
            ea = !I && ($ || (null != W && x && null != a)),
            { discountAmountOff: er } = (0, m.J)(F.gD.PREMIUM_MONTH_TIER_2),
            { copy: es } = K();
        return {
            skuId: c,
            setPlanId: Z,
            selectedPlan: H,
            selectedPlanPrice: et,
            premiumSubscriptionPlan: G,
            premiumSubscription: A,
            thePriceOptions: q,
            hasSeenCollectiblesInSkuSelect: k,
            shouldShowUpdatedPaymentModal: ea,
            shouldShowHRKEuroWarning: el,
            shouldShowTotalInSubscriptionFlow: !x && !$ && J && u,
            canContinue: J,
            isPrepaid: ei,
            radioGroupRef: Q,
            radioGroupProps: ee,
            isGift: I,
            giftRecipient: v,
            customGiftMessage: j,
            setCustomGiftMessage: L,
            selectedGiftStyle: M,
            isEligibleForBOGOPromotion: V,
            isEligibleForTrial: x,
            userTrialOffer: y,
            trialPeriodCopy: es,
            discountOffer: N,
            isPlansEligibleForDiscount: $,
            discountedPlanRegularPrice: X,
            discountAmountOff: er,
        };
    },
    q = (e) => {
        let { isPrepaid: t, selectedPlan: n, selectedPlanPrice: i, intervalType: a, className: r } = e;
        return (0, l.jsxs)("div", {
            className: r,
            children: [
                (0, l.jsx)("div", { className: W.T }),
                (0, l.jsx)(j.Sd, {
                    label: Y.intl.string(Y.t.txajQG),
                    value: (0, l.jsx)(L.A, {
                        price: i.amount,
                        currency: i.currency,
                        intervalType: a,
                        intervalCount: n.intervalCount,
                        isPrepaidPaymentSource: t,
                    }),
                    className: W.M3,
                }),
            ],
        });
    },
    z = (e) => {
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
                switchPlanSelectComponent: _,
                warningComponent: C,
            } = e,
            E = (e) => (0, l.jsx)(u.D, { label: Y.intl.string(Y.t["3E5hXj"]), children: e });
        return (0, S.Ik)(t)
            ? (0, l.jsxs)("div", {
                  className: W.mh,
                  children: [
                      (0, l.jsx)("div", { className: W.MU, children: null != a && (0, l.jsx)(U.t, {}) }),
                      (0, l.jsxs)("div", {
                          className: W.Tc,
                          children: [
                              (0, l.jsx)(k.Z, { className: p ? W.KW : void 0, giftRecipient: t }),
                              (() => {
                                  if ((0, S.lo)(t) === S.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != i)
                                      return (0, l.jsx)(D.A, {
                                          className: W.iX,
                                          innerClassName: W.pt,
                                          onTextChange: (e) => i(e),
                                          pendingText: n,
                                          currentText: n,
                                      });
                              })(),
                              E(_),
                              C,
                              !r && (0, l.jsx)(A.A, { onClose: m }),
                          ],
                      }),
                  ],
              })
            : (0, l.jsxs)("div", {
                  className: W.Du,
                  children: [
                      (0, l.jsx)(k.Z, { className: p ? W.KW : void 0, giftRecipient: t }),
                      E(_),
                      o &&
                          h &&
                          null != c &&
                          null != d &&
                          (0, l.jsx)(q, { selectedPlan: c, selectedPlanPrice: d, intervalType: null, isPrepaid: s }),
                      C,
                      !r && (0, l.jsx)(A.A, { onClose: m }),
                  ],
              });
    },
    $ = (e) => {
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
            c = (0, s.bG)([y.default], () => y.default.locale),
            { isGift: d, giftRecipient: p } = (0, _.Pv)(),
            m = d && (0, S.Ik)(p),
            { enabled: h } = v.A.getConfig({ location: "PremiumSwitchPlanSelectOption" });
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
            discountOffer: (0, M.O)(),
            isEligibleForBOGOPromotion: (0, g.cg)(),
        };
    },
    X = (e, t) => {
        let n = null != e && e.planId === t,
            l =
                n ||
                (t === F.gD.PREMIUM_MONTH_TIER_2 &&
                    null != e &&
                    [F.gD.PREMIUM_YEAR_TIER_0, F.gD.PREMIUM_YEAR_TIER_1].includes(e.planId));
        return { isCurrentPlan: n, disabled: l };
    },
    J = (e) => {
        let { planOptions: t, radioGroupRef: n, selectedPlan: a, radioGroupProps: r } = e,
            s = $(e),
            o = i.useMemo(
                () =>
                    t.map((t) => {
                        let { isCurrentPlan: n, disabled: i } = X(s.premiumSubscription, t);
                        return (0, l.jsx)(
                            w.Ay,
                            { planId: t, selected: a?.id === t, isCurrentPlan: n, disabled: e.disabled || i, ...s },
                            t,
                        );
                    }),
                [e.disabled, t, s, a],
            );
        return (0, l.jsx)("div", { ref: n, ...r, children: o });
    },
    Q = (e, t) => {
        let { subscriptionPeriodEnd: n, trialPeriodCopy: l } = t,
            i = e?.trial_id === F.Dw;
        return null == n
            ? null
            : i
              ? Y.intl.format(Y.t.nG95hA, { endDate: n })
              : Y.intl.format(Y.t.s4E7kb, { trialEnd: n, trialPeriod: l });
    },
    ee = (e) => {
        let { shouldShowHRKEuroWarning: t, selectedPlanPrice: n } = e;
        return t && null != n
            ? (0, l.jsx)(d.A, {
                  message: Y.intl.formatToPlainString(Y.t["9hnZoK"], {
                      kunaPriceWithCurrency: (0, N.$g)(7.5345 * n.amount, B.Yr.HRK),
                  }),
              })
            : null;
    },
    et = (e) => {
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
                    (0, l.jsx)(q, {
                        className: u,
                        selectedPlan: t,
                        selectedPlanPrice: n,
                        intervalType: t.interval,
                        isPrepaid: i,
                    }),
                ee({ shouldShowHRKEuroWarning: a, selectedPlanPrice: n }),
                !r &&
                    s &&
                    (0, l.jsx)(d.A, {
                        message: Y.intl.format(Y.t.Om31w8, {
                            documentationLink: x.A.getArticleURL(G.MVz.LOCALIZED_PRICING),
                        }),
                    }),
            ],
        });
    };
function en(e) {
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
            premiumSubscription: A,
            premiumSubscriptionPlan: _,
            isEligibleForBOGOPromotion: C,
            isGift: y,
            thePriceOptions: f,
            isEligibleForTrial: P,
            giftRecipient: S,
            customGiftMessage: x,
            setCustomGiftMessage: T,
            selectedGiftStyle: g,
            discountOffer: v,
            isPlansEligibleForDiscount: b,
            discountedPlanRegularPrice: R,
            hasSeenCollectiblesInSkuSelect: M,
            userTrialOffer: j,
            shouldShowUpdatedPaymentModal: L,
            discountAmountOff: D,
            isPrepaid: U,
            radioGroupRef: w,
            radioGroupProps: k,
            selectedPlanPrice: G,
            shouldShowHRKEuroWarning: B,
            shouldShowTotalInSubscriptionFlow: K,
            canContinue: q,
            trialPeriodCopy: $,
        } = Z({ selectedPlanId: n, priceOptions: a, planOptions: r, subscriptionPeriodEnd: s, showTotal: o }),
        X = (0, I.ds)(),
        en = () =>
            (0, l.jsx)(J, {
                disabled: t,
                planOptions: r,
                radioGroupRef: w,
                radioGroupProps: k,
                isGift: y,
                isPrepaid: U,
                premiumSubscription: A,
                setPlanId: m,
                selectedPlan: h,
                thePriceOptions: f,
                shouldShowUpdatedPaymentModal: L,
                isEligibleForTrial: P,
                isPlansEligibleForDiscount: b,
                discountAmountOff: D,
            }),
        { showFractionalPremiumBanner: el, fractionalPremiumInfo: ei } = (0, E._V)({
            premiumSubscription: A,
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
        return (0, l.jsx)(z, {
            giftRecipient: S,
            customGiftMessage: x,
            setCustomGiftMessage: T,
            selectedGiftStyle: g,
            hasSeenCollectiblesInSkuSelect: M,
            isPrepaid: U,
            canContinue: q,
            selectedPlan: h,
            selectedPlanPrice: G,
            useCompactGiftComponents: u,
            handleClose: d,
            showTotal: o,
            switchPlanSelectComponent: en(),
            warningComponent: ee({ shouldShowHRKEuroWarning: B, selectedPlanPrice: G }),
        });
    let ea = !(P && el && !X),
        er = V(_, { isEligibleForBOGOPromotion: C });
    return (0, l.jsxs)("div", {
        children: [
            el &&
                !X &&
                (0, l.jsx)(O.vi, {
                    fractionalPremiumInfo: ei,
                    enablePremiumBrandRefresh: !0,
                    variant: P ? O.uA.TRIAL : void 0,
                    trialPeriod: P ? $ : void 0,
                    trialEnd: P ? s : void 0,
                }),
            er && !el && (0, l.jsx)("div", { className: W.G3, children: H(_, p) }),
            ea &&
                (L
                    ? P
                        ? (0, l.jsxs)("div", {
                              children: [
                                  (0, l.jsx)(c.E, {
                                      variant: "text-sm/normal",
                                      className: W.Tz,
                                      children: Q(j, { subscriptionPeriodEnd: s, trialPeriodCopy: $ }),
                                  }),
                                  (0, l.jsx)("hr", { className: W.RA }),
                              ],
                          })
                        : b && null != D && null != R && n === F.gD.PREMIUM_MONTH_TIER_2
                          ? (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsx)(c.E, {
                                        variant: "text-sm/normal",
                                        className: W.Tz,
                                        children: Y.intl.format(Y.t["nG7g/E"], {
                                            numMonths: v?.discount.user_usage_limit ?? "",
                                            discountedPrice: (0, N.$g)(R.amount - D, R.currency),
                                            regularPrice: (0, N.$g)(R.amount, R.currency),
                                        }),
                                    }),
                                    (0, l.jsx)("hr", { className: W.RA }),
                                ],
                            })
                          : void 0
                    : (0, l.jsx)("div", { className: W.VZ, children: Y.intl.string(Y.t.a19jpU) })),
            en(),
            et({
                selectedPlan: h,
                selectedPlanPrice: G,
                isPrepaid: U,
                shouldShowHRKEuroWarning: B,
                shouldShowUpdatedPaymentModal: L,
                showTotal: o,
                shouldShowTotalInSubscriptionFlow: K,
            }),
        ],
    });
}
