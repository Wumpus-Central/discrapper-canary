"use strict";
n.d(t, {
    $p: () => en,
    Ct: () => J,
    LR: () => et,
    O8: () => K,
    RO: () => $,
    Rx: () => X,
    U_: () => Y,
    cD: () => Q,
    yq: () => W,
});
var r = n(627968),
    i = n(64700),
    s = n(284009),
    a = n.n(s),
    o = n(311907),
    l = n(785007),
    u = n(452027),
    c = n(834730),
    d = n(726656),
    _ = n(558620),
    f = n(699595),
    p = n(94420),
    h = n(448811),
    E = n(937008),
    m = n(156312),
    g = n(222707),
    A = n(773669),
    I = n(594832),
    T = n(97352),
    S = n(45938),
    y = n(975571),
    N = n(927578),
    v = n(580630),
    C = n(40185),
    O = n(881489),
    R = n(906023),
    b = n(810498),
    D = n(477421),
    L = n(422936),
    w = n(735164),
    M = n(363476),
    P = n(156962),
    x = n(871181),
    k = n(318007),
    U = n(958720),
    G = n(285719),
    F = n(788868),
    V = n(652215);
n(26279);
var B = n(818348),
    H = n(985018),
    j = n(345138);
function Y(e, t) {
    let { isEligibleForBOGOPromotion: n } = t;
    return null != e && !n;
}
function W(e, t) {
    let n = H.intl.string(H.t.BYa62u),
        r = H.intl.string(H.t.CDa6Dq),
        i = (() => {
            switch (e.interval) {
                case F.WT.YEAR:
                    return n;
                case F.WT.MONTH:
                default:
                    return r;
            }
        })(),
        s = e.skuId;
    switch (t) {
        case F.pe.TIER_0:
            switch (s) {
                case F.pe.TIER_1:
                    return H.intl.string(H.t.q6mxDS);
                case F.pe.TIER_2:
                    return H.intl.string(H.t.seZVS0);
                default:
                    return i;
            }
        case F.pe.TIER_1:
            switch (s) {
                case F.pe.TIER_0:
                    return H.intl.string(H.t["7+u2zg"]);
                case F.pe.TIER_2:
                    return H.intl.string(H.t.NG2qcc);
                default:
                    return i;
            }
        case F.pe.TIER_2:
            switch (s) {
                case F.pe.TIER_0:
                case F.pe.TIER_1:
                    return H.intl.string(H.t["eB0/w9"]);
                case F.pe.TIER_2:
                    return e.interval === F.WT.MONTH
                        ? H.intl.formatToPlainString(H.t.RqUv86, { numFreeGuildSubscriptions: F.M4 })
                        : i;
                default:
                    return i;
            }
        default:
            return i;
    }
}
let K = () => {
        let { userTrialOffer: e } = (0, m.P5)(),
            t = e?.subscription_trial,
            { daysCount: n, copy: r } = i.useMemo(
                () =>
                    t?.interval === F.WT.DAY
                        ? t?.interval_count > 7
                            ? { daysCount: 14, copy: H.intl.string(H.t.Z1V2cs) }
                            : { daysCount: 7, copy: H.intl.string(H.t.MI1rHs) }
                        : { daysCount: 30, copy: H.intl.string(H.t["+S5lrV"]) },
                [t],
            );
        return { daysCount: n, copy: r, userTrialOffer: e };
    },
    $ = (e) => {
        let { selectedPlanId: t, priceOptions: n, planOptions: r, subscriptionPeriodEnd: s, showTotal: u } = e,
            { selectedSkuId: c, setSelectedPlanId: d } = (0, p.t4)((e) => ({
                selectedSkuId: e.selectedSkuId,
                setSelectedPlanId: e.setSelectedPlanId,
            })),
            {
                activeSubscription: h,
                priceOptions: g,
                userTrialOffer: A,
                isEligibleForTrial: y,
                discountOffer: v,
            } = (0, m.P5)(),
            {
                isGift: O,
                giftRecipient: R,
                selectedGiftStyle: L,
                customGiftMessage: w,
                setCustomGiftMessage: M,
                claimableRewards: P,
                setSelectedGiftingPromotionReward: x,
            } = (0, E.Pv)(),
            k = (0, _.A)(),
            U = (0, b.kz)(k, O && (0, S.Ik)(R), P),
            G = (0, I.tA)({ giftRecipient: R, isGift: O });
        a()(void 0 !== h, "should not be undefined");
        let [V, H] = (0, o.yK)([T.A], () => [null != h ? T.A.get(h.planId) : null, null != t ? T.A.get(t) : null]),
            j = A?.subscription_trial,
            Y = (0, C.cg)(),
            W = H ?? k,
            $ = i.useCallback(
                (e) => {
                    d(e);
                },
                [d],
            ),
            z = n ?? g;
        a()(null != z, "Price option has to be set");
        let q = v?.discount?.plan_ids,
            X = null != v && r.some((e) => q?.includes(e)) && null != v.discount,
            Q = r.includes(F.gD.PREMIUM_MONTH_TIER_2) ? (0, N.y8)(F.gD.PREMIUM_MONTH_TIER_2, !1, O, z) : void 0,
            Z = W?.id != null && r.includes(W.id);
        i.useEffect(() => {
            if (!Z) {
                if (null == V || O) $(r[0]);
                else if (null != V) {
                    let e = r.find((e) => e !== V.id);
                    null != e && $(e);
                }
            }
        }, [Z, O, r, V, $]),
            i.useEffect(() => {
                U && null != P && P.length > 0 && x(P[0]);
            }, [P, x, U]);
        let { ref: J, ...ee } = (0, l._u)(),
            et = W?.id != null ? (0, N.y8)(W.id, !1, O, z) : void 0,
            { ipCountryCode: en } = (0, D.A)(),
            er = "HR" === en && null != et && et.currency === B.Yr.EUR,
            ei = (0, N.J$)(z.paymentSourceId),
            es = !O && (X || (null != j && y && null != s)),
            { discountAmountOff: ea } = (0, f.J)(F.gD.PREMIUM_MONTH_TIER_2),
            { copy: eo } = K();
        return {
            skuId: c,
            setPlanId: $,
            selectedPlan: W,
            selectedPlanPrice: et,
            premiumSubscriptionPlan: V,
            premiumSubscription: h,
            thePriceOptions: z,
            hasSeenCollectiblesInSkuSelect: G,
            shouldShowUpdatedPaymentModal: es,
            shouldShowHRKEuroWarning: er,
            shouldShowTotalInSubscriptionFlow: !y && !X && Z && u,
            canContinue: Z,
            isPrepaid: ei,
            radioGroupRef: J,
            radioGroupProps: ee,
            isGift: O,
            giftRecipient: R,
            customGiftMessage: w,
            setCustomGiftMessage: M,
            selectedGiftStyle: L,
            isEligibleForBOGOPromotion: Y,
            isEligibleForTrial: y,
            userTrialOffer: A,
            trialPeriodCopy: eo,
            discountOffer: v,
            isPlansEligibleForDiscount: X,
            discountedPlanRegularPrice: Q,
            discountAmountOff: ea,
        };
    },
    z = (e) => {
        let { isPrepaid: t, selectedPlan: n, selectedPlanPrice: i, intervalType: s, className: a } = e;
        return (0, r.jsxs)("div", {
            className: a,
            children: [
                (0, r.jsx)("div", { className: j.T }),
                (0, r.jsx)(w.Sd, {
                    label: H.intl.string(H.t.txajQG),
                    value: (0, r.jsx)(M.A, {
                        price: i.amount,
                        currency: i.currency,
                        intervalType: s,
                        intervalCount: n.intervalCount,
                        isPrepaidPaymentSource: t,
                    }),
                    className: j.M3,
                }),
            ],
        });
    },
    q = (e) => {
        let {
                giftRecipient: t,
                customGiftMessage: n,
                setCustomGiftMessage: i,
                selectedGiftStyle: s,
                hasSeenCollectiblesInSkuSelect: a,
                isPrepaid: o,
                canContinue: l,
                selectedPlan: c,
                selectedPlanPrice: d,
                useCompactGiftComponents: _,
                handleClose: f,
                showTotal: p,
                switchPlanSelectComponent: E,
                warningComponent: m,
            } = e,
            g = (e) => (0, r.jsx)(u.D, { label: H.intl.string(H.t["3E5hXj"]), children: e });
        return (0, S.Ik)(t)
            ? (0, r.jsxs)("div", {
                  className: j.mh,
                  children: [
                      (0, r.jsx)("div", { className: j.MU, children: null != s && (0, r.jsx)(k.t, {}) }),
                      (0, r.jsxs)("div", {
                          className: j.Tc,
                          children: [
                              (0, r.jsx)(G.Z, { className: _ ? j.KW : void 0, giftRecipient: t }),
                              (() => {
                                  if ((0, S.lo)(t) === S.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != i)
                                      return (0, r.jsx)(x.A, {
                                          className: j.iX,
                                          innerClassName: j.pt,
                                          onTextChange: (e) => i(e),
                                          pendingText: n,
                                          currentText: n,
                                      });
                              })(),
                              g(E),
                              m,
                              !a && (0, r.jsx)(h.A, { onClose: f }),
                          ],
                      }),
                  ],
              })
            : (0, r.jsxs)("div", {
                  className: j.Du,
                  children: [
                      (0, r.jsx)(G.Z, { className: _ ? j.KW : void 0, giftRecipient: t }),
                      g(E),
                      l &&
                          p &&
                          null != c &&
                          null != d &&
                          (0, r.jsx)(z, { selectedPlan: c, selectedPlanPrice: d, intervalType: null, isPrepaid: o }),
                      m,
                      !a && (0, r.jsx)(h.A, { onClose: f }),
                  ],
              });
    },
    X = (e) => {
        let {
                isPrepaid: t,
                premiumSubscription: n,
                setPlanId: r,
                thePriceOptions: i,
                shouldShowUpdatedPaymentModal: s,
                isEligibleForTrial: a,
                isPlansEligibleForDiscount: l,
                discountAmountOff: u,
            } = e,
            c = (0, o.bG)([A.default], () => A.default.locale),
            { isGift: d, giftRecipient: _ } = (0, E.Pv)(),
            f = d && (0, S.Ik)(_),
            { enabled: p } = R.A.getConfig({ location: "PremiumSwitchPlanSelectOption" });
        return {
            isPrepaid: t,
            selectPlan: r,
            premiumSubscription: d ? null : (n ?? null),
            priceOptions: i,
            shouldShowUpdatedPaymentModal: s,
            isEligibleForDiscount: l,
            discountAmountOff: u,
            isEligibleForTrial: a,
            userLocale: c,
            isGift: d,
            isCustomGift: f,
            shouldUseCalculatedDiscount: p,
            discountOffer: (0, L.O)(),
            isEligibleForBOGOPromotion: (0, C.cg)(),
        };
    },
    Q = (e, t) => {
        let n = null != e && e.planId === t,
            r =
                n ||
                (t === F.gD.PREMIUM_MONTH_TIER_2 &&
                    null != e &&
                    [F.gD.PREMIUM_YEAR_TIER_0, F.gD.PREMIUM_YEAR_TIER_1].includes(e.planId));
        return { isCurrentPlan: n, disabled: r };
    },
    Z = (e) => {
        let { planOptions: t, radioGroupRef: n, selectedPlan: s, radioGroupProps: a } = e,
            o = X(e),
            l = i.useMemo(
                () =>
                    t.map((t) => {
                        let { isCurrentPlan: n, disabled: i } = Q(o.premiumSubscription, t);
                        return (0, r.jsx)(
                            U.Ay,
                            { planId: t, selected: s?.id === t, isCurrentPlan: n, disabled: e.disabled || i, ...o },
                            t,
                        );
                    }),
                [e.disabled, t, o, s],
            );
        return (0, r.jsx)("div", { ref: n, ...a, children: l });
    },
    J = (e, t) => {
        let { subscriptionPeriodEnd: n, trialPeriodCopy: r } = t,
            i = e?.trial_id === F.Dw;
        return null == n
            ? null
            : i
              ? H.intl.format(H.t.nG95hA, { endDate: n })
              : H.intl.format(H.t.s4E7kb, { trialEnd: n, trialPeriod: r });
    },
    ee = (e) => {
        let { shouldShowHRKEuroWarning: t, selectedPlanPrice: n } = e;
        return t && null != n
            ? (0, r.jsx)(d.A, {
                  message: H.intl.formatToPlainString(H.t["9hnZoK"], {
                      kunaPriceWithCurrency: (0, v.$g)(7.5345 * n.amount, B.Yr.HRK),
                  }),
              })
            : null;
    },
    et = (e) => {
        let {
            selectedPlan: t,
            selectedPlanPrice: n,
            isPrepaid: i,
            shouldShowHRKEuroWarning: s,
            shouldShowUpdatedPaymentModal: a,
            showTotal: o,
            shouldShowTotalInSubscriptionFlow: l,
            previewTotalSectionClassName: u,
        } = e;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                l &&
                    null != t &&
                    null != n &&
                    (0, r.jsx)(z, {
                        className: u,
                        selectedPlan: t,
                        selectedPlanPrice: n,
                        intervalType: t.interval,
                        isPrepaid: i,
                    }),
                ee({ shouldShowHRKEuroWarning: s, selectedPlanPrice: n }),
                !a &&
                    o &&
                    (0, r.jsx)(d.A, {
                        message: H.intl.format(H.t.Om31w8, {
                            documentationLink: y.A.getArticleURL(V.MVz.LOCALIZED_PRICING),
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
            priceOptions: s,
            planOptions: a,
            subscriptionPeriodEnd: o,
            showTotal: l = !0,
            useCompactGiftComponents: u,
            handleClose: d,
        } = e,
        {
            skuId: _,
            setPlanId: f,
            selectedPlan: p,
            premiumSubscription: h,
            premiumSubscriptionPlan: E,
            isEligibleForBOGOPromotion: m,
            isGift: A,
            thePriceOptions: I,
            isEligibleForTrial: T,
            giftRecipient: S,
            customGiftMessage: y,
            setCustomGiftMessage: N,
            selectedGiftStyle: C,
            discountOffer: R,
            isPlansEligibleForDiscount: b,
            discountedPlanRegularPrice: D,
            hasSeenCollectiblesInSkuSelect: L,
            userTrialOffer: w,
            shouldShowUpdatedPaymentModal: M,
            discountAmountOff: x,
            isPrepaid: k,
            radioGroupRef: U,
            radioGroupProps: G,
            selectedPlanPrice: V,
            shouldShowHRKEuroWarning: B,
            shouldShowTotalInSubscriptionFlow: K,
            canContinue: z,
            trialPeriodCopy: X,
        } = $({ selectedPlanId: n, priceOptions: s, planOptions: a, subscriptionPeriodEnd: o, showTotal: l }),
        Q = (0, O.ds)(),
        en = () =>
            (0, r.jsx)(Z, {
                disabled: t,
                planOptions: a,
                radioGroupRef: U,
                radioGroupProps: G,
                isGift: A,
                isPrepaid: k,
                premiumSubscription: h,
                setPlanId: f,
                selectedPlan: p,
                thePriceOptions: I,
                shouldShowUpdatedPaymentModal: M,
                isEligibleForTrial: T,
                isPlansEligibleForDiscount: b,
                discountAmountOff: x,
            }),
        { showFractionalPremiumBanner: er, fractionalPremiumInfo: ei } = (0, g._V)({
            premiumSubscription: h,
            selectedPlanId: n,
            planGroup: i,
            isGift: A,
            fractionalPremiumInfoArgs: {
                forceFetch: !1,
                excludeReverseTrial: !1,
                excludeReverseTrialFromCountdown: !0,
            },
        });
    if (A)
        return (0, r.jsx)(q, {
            giftRecipient: S,
            customGiftMessage: y,
            setCustomGiftMessage: N,
            selectedGiftStyle: C,
            hasSeenCollectiblesInSkuSelect: L,
            isPrepaid: k,
            canContinue: z,
            selectedPlan: p,
            selectedPlanPrice: V,
            useCompactGiftComponents: u,
            handleClose: d,
            showTotal: l,
            switchPlanSelectComponent: en(),
            warningComponent: ee({ shouldShowHRKEuroWarning: B, selectedPlanPrice: V }),
        });
    let es = !(T && er && !Q),
        ea = Y(E, { isEligibleForBOGOPromotion: m });
    return (0, r.jsxs)("div", {
        children: [
            er &&
                !Q &&
                (0, r.jsx)(P.vi, {
                    fractionalPremiumInfo: ei,
                    enablePremiumBrandRefresh: !0,
                    variant: T ? P.uA.TRIAL : void 0,
                    trialPeriod: T ? X : void 0,
                    trialEnd: T ? o : void 0,
                }),
            ea && !er && (0, r.jsx)("div", { className: j.G3, children: W(E, _) }),
            es &&
                (M
                    ? T
                        ? (0, r.jsxs)("div", {
                              children: [
                                  (0, r.jsx)(c.E, {
                                      variant: "text-sm/normal",
                                      className: j.Tz,
                                      children: J(w, { subscriptionPeriodEnd: o, trialPeriodCopy: X }),
                                  }),
                                  (0, r.jsx)("hr", { className: j.RA }),
                              ],
                          })
                        : b && null != x && null != D && n === F.gD.PREMIUM_MONTH_TIER_2
                          ? (0, r.jsxs)("div", {
                                children: [
                                    (0, r.jsx)(c.E, {
                                        variant: "text-sm/normal",
                                        className: j.Tz,
                                        children: H.intl.format(H.t["nG7g/E"], {
                                            numMonths: R?.discount.user_usage_limit ?? "",
                                            discountedPrice: (0, v.$g)(D.amount - x, D.currency),
                                            regularPrice: (0, v.$g)(D.amount, D.currency),
                                        }),
                                    }),
                                    (0, r.jsx)("hr", { className: j.RA }),
                                ],
                            })
                          : void 0
                    : (0, r.jsx)("div", { className: j.VZ, children: H.intl.string(H.t.a19jpU) })),
            en(),
            et({
                selectedPlan: p,
                selectedPlanPrice: V,
                isPrepaid: k,
                shouldShowHRKEuroWarning: B,
                shouldShowUpdatedPaymentModal: M,
                showTotal: l,
                shouldShowTotalInSubscriptionFlow: K,
            }),
        ],
    });
}
