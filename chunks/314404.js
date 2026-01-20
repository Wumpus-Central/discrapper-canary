n.d(t, {
    O: () => ea,
    y: () => eo,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(512722),
    o = n.n(a),
    s = n(442837),
    l = n(755721),
    c = n(481060),
    u = n(490504),
    d = n(911969),
    f = n(975298),
    p = n(940824),
    _ = n(987209),
    h = n(563132),
    m = n(409813),
    g = n(706454),
    E = n(602733),
    b = n(509545),
    y = n(78839),
    O = n(669079),
    v = n(63063),
    S = n(74538),
    I = n(937615),
    T = n(296848),
    C = n(711459),
    A = n(367074),
    N = n(621651),
    P = n(717401),
    w = n(847903),
    R = n(622909),
    D = n(811334),
    x = n(553797),
    L = n(346071),
    j = n(927699),
    M = n(987716),
    k = n(311821),
    U = n(459965),
    G = n(971616),
    Z = n(251660),
    F = n(474936),
    B = n(981631),
    V = n(231338),
    H = n(388032),
    Y = n(214674);
function W(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function K(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                W(e, t, n[t]);
            });
    }
    return e;
}
function z(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function q(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : z(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function Q(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = X(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function X(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function J(e, t) {
    let n = H.intl.string(H.t.BYa62u),
        r = H.intl.string(H.t.CDa6Dq),
        i = (() => {
            switch (e.interval) {
                case F.rV.YEAR:
                    return n;
                case F.rV.MONTH:
                default:
                    return r;
            }
        })(),
        a = e.skuId;
    switch (t) {
        case F.Si.TIER_0:
            switch (a) {
                case F.Si.TIER_1:
                    return H.intl.string(H.t.q6mxDS);
                case F.Si.TIER_2:
                    return H.intl.string(H.t.seZVS0);
                default:
                    return i;
            }
        case F.Si.TIER_1:
            switch (a) {
                case F.Si.TIER_0:
                    return H.intl.string(H.t["7+u2zg"]);
                case F.Si.TIER_2:
                    return H.intl.string(H.t.NG2qcc);
                default:
                    return i;
            }
        case F.Si.TIER_2:
            switch (a) {
                case F.Si.TIER_0:
                case F.Si.TIER_1:
                    return H.intl.string(H.t["eB0/w9"]);
                case F.Si.TIER_2:
                    return e.interval === F.rV.MONTH
                        ? H.intl.formatToPlainString(H.t.RqUv86, { numFreeGuildSubscriptions: F.cb })
                        : i;
                default:
                    return i;
            }
        default:
            return i;
    }
}
let $ = (e) => {
        var t, n, r, a;
        let {
                premiumSubscription: c,
                skuId: u,
                selectedPlanId: f,
                setSelectedPlanId: p,
                priceOptions: m,
                planOptions: g,
                eligibleForMultiMonthPlans: y,
                subscriptionPeriodEnd: v,
                discountInvoiceItems: I,
            } = e,
            {
                activeSubscription: T,
                setSelectedPlanId: N,
                selectedSkuId: R,
                selectedPlan: D,
                priceOptions: x,
                userTrialOffer: L,
                isEligibleForTrial: j,
                discountOffer: M,
            } = (0, h.JL)(),
            {
                isGift: k,
                giftRecipient: U,
                selectedGiftStyle: G,
                customGiftMessage: Z,
                setCustomGiftMessage: B,
                claimableRewards: Y,
                setSelectedGiftingPromotionReward: W,
            } = (0, _.wD)(),
            K = (0, P.cF)(D, k && (0, O.pO)(U), Y),
            z = (0, E.ao)({
                location: "PremiumPlanSelectStep",
                giftRecipient: U,
                isGift: k,
            }),
            q = null != c ? c : T;
        o()(void 0 !== q, "should not be undefined");
        let [X, J] = (0, s.Wu)([b.Z], () => [null != q ? b.Z.get(q.planId) : null, null != f ? b.Z.get(f) : null]),
            $ = null == L ? void 0 : L.subscription_trial,
            ee = (0, A.Vi)(),
            et = null != J ? J : D,
            en = i.useCallback(
                (e) => {
                    null != p ? p(e) : N(e);
                },
                [p, N],
            ),
            er = null != m ? m : x;
        o()(null != er, "Price option has to be set");
        let ei = null == M || null == (t = M.discount) ? void 0 : t.plan_ids,
            ea = null != M && g.some((e) => (null == ei ? void 0 : ei.includes(e))) && null != M.discount,
            eo = (0, S.aS)(F.Xh.PREMIUM_MONTH_TIER_2, !1, k, er);
        i.useEffect(() => {
            y && C.ZP.trackExposure({ location: "5f89bb_1" });
        }, [y]);
        let es = (null == et ? void 0 : et.id) != null && g.includes(et.id);
        i.useEffect(() => {
            if (!es) {
                if (null == X || k) en(g[0]);
                else if (null != X) {
                    let e = g.find((e) => e !== X.id);
                    null != e && en(e);
                }
            }
        }, [es, k, g, X, en]),
            i.useEffect(() => {
                K && null != Y && Y.length > 0 && W(Y[0]);
            }, [Y, W, K]);
        let el = (0, l.Jb)(),
            { ref: ec } = el,
            eu = Q(el, ["ref"]),
            ed = (null == et ? void 0 : et.id) != null ? (0, S.aS)(et.id, !1, k, er) : void 0,
            { ipCountryCode: ef } = (0, w.Z)(),
            ep = "HR" === ef && null != ed && ed.currency === V.pK.EUR,
            e_ = (0, S.Ap)(er.paymentSourceId),
            eh = i.useMemo(
                () =>
                    (null == $ ? void 0 : $.interval) === F.rV.DAY
                        ? (null == $ ? void 0 : $.interval_count) > 7
                            ? H.intl.string(H.t.Z1V2cs)
                            : H.intl.string(H.t.MI1rHs)
                        : H.intl.string(H.t["+S5lrV"]),
                [$],
            ),
            em = !k && (ea || (null != $ && j && null != v));
        return {
            skuId: null != u ? u : R,
            setPlanId: en,
            selectedPlan: et,
            selectedPlanPrice: ed,
            premiumSubscriptionPlan: X,
            premiumSubscription: q,
            thePriceOptions: er,
            hasSeenCollectiblesInSkuSelect: z,
            shouldShowUpdatedPaymentModal: em,
            shouldShowHRKEuroWarning: ep,
            canContinue: es,
            isPrepaid: e_,
            radioGroupRef: ec,
            radioGroupProps: eu,
            isGift: k,
            giftRecipient: U,
            customGiftMessage: Z,
            setCustomGiftMessage: B,
            selectedGiftStyle: G,
            isEligibleForBOGOPromotion: ee,
            isEligibleForTrial: j,
            userTrialOffer: L,
            trialPeriodCopy: eh,
            discountOffer: M,
            isPlansEligibleForDiscount: ea,
            discountedPlanRegularPrice: eo,
            discountAmountOff:
                null == I ||
                null == (a = I.find((e) => e.subscriptionPlanId === F.Xh.PREMIUM_MONTH_TIER_2)) ||
                null == (r = a.discounts) ||
                null == (n = r.find((e) => e.type === d.eW.SUBSCRIPTION_PLAN))
                    ? void 0
                    : n.amount,
        };
    },
    ee = (e) => {
        let { premiumSubscription: t, selectedPlanId: n, planGroup: r, isGift: i } = e,
            a = (0, f.Z)({
                forceFetch: !1,
                excludeReverseTrial: !1,
                excludeReverseTrialFromCountdown: !0,
            }),
            o = null != t && null != n && (0, T.R4)(t, n, r);
        return {
            showFractionalPremiumBanner:
                a.isFractionalPremiumActive && (null == t || o) && !i && null != n && F.dJ.has(n),
            fractionalPremiumInfo: a,
        };
    },
    et = (e) => {
        let { isPrepaid: t, selectedPlan: n, selectedPlanPrice: i, intervalType: a } = e;
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)("div", { className: Y.selectPlanDivider }),
                (0, r.jsx)(D.az, {
                    label: H.intl.string(H.t.txajQG),
                    value: (0, r.jsx)(x.Z, {
                        price: i.amount,
                        currency: i.currency,
                        intervalType: a,
                        intervalCount: n.intervalCount,
                        isPrepaidPaymentSource: t,
                    }),
                    className: Y.selectPlanTotalRow,
                }),
            ],
        });
    },
    en = (e) => {
        let {
                giftRecipient: t,
                customGiftMessage: n,
                setCustomGiftMessage: i,
                selectedGiftStyle: a,
                hasSeenCollectiblesInSkuSelect: o,
                isPrepaid: s,
                canContinue: l,
                selectedPlan: u,
                selectedPlanPrice: d,
                useCompactGiftComponents: f,
                handleClose: _,
                showTotal: h,
                switchPlanSelectComponent: m,
                warningComponent: g,
            } = e,
            E = () => {
                if ((0, O.MY)(t) === O.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != i)
                    return (0, r.jsx)(j.Z, {
                        className: Y.customGiftMessageWrapper,
                        innerClassName: Y.customGiftMessage,
                        onTextChange: (e) => i(e),
                        pendingText: n,
                        currentText: n,
                    });
            },
            b = (e) =>
                (0, r.jsx)(c.gNt, {
                    label: H.intl.string(H.t["3E5hXj"]),
                    children: e,
                });
        if ((0, O.pO)(t))
            return (0, r.jsxs)("div", {
                className: Y.stepBodyCustomGift,
                children: [
                    (0, r.jsx)("div", {
                        className: Y.bodyColumnMiddleCentered,
                        children: null != a && (0, r.jsx)(M.q, {}),
                    }),
                    (0, r.jsxs)("div", {
                        className: Y.bodyColumnRight,
                        children: [
                            (0, r.jsx)(Z.s, {
                                className: f ? Y.compactSendGiftToUser : void 0,
                                giftRecipient: t,
                            }),
                            E(),
                            b(m),
                            g,
                            !o && (0, r.jsx)(p.Z, { onClose: _ }),
                        ],
                    }),
                ],
            });
        let y = l && h;
        return (0, r.jsxs)("div", {
            className: Y.stepBody,
            children: [
                (0, r.jsx)(Z.s, {
                    className: f ? Y.compactSendGiftToUser : void 0,
                    giftRecipient: t,
                }),
                b(m),
                y &&
                    null != u &&
                    null != d &&
                    (0, r.jsx)(et, {
                        selectedPlan: u,
                        selectedPlanPrice: d,
                        intervalType: null,
                        isPrepaid: s,
                    }),
                g,
                !o && (0, r.jsx)(p.Z, { onClose: _ }),
            ],
        });
    },
    er = (e) => {
        let {
                isPrepaid: t,
                premiumSubscription: n,
                setPlanId: r,
                thePriceOptions: i,
                shouldShowUpdatedPaymentModal: a,
                isEligibleForTrial: o,
                isPlansEligibleForDiscount: l,
                discountAmountOff: c,
            } = e,
            u = (0, s.e7)([g.default], () => g.default.locale),
            { isGift: d, giftRecipient: f } = (0, _.wD)(),
            p = d && (0, O.pO)(f),
            { enabled: h } = N.Z.getCurrentConfig(
                { location: "PremiumSwitchPlanSelectOption" },
                { autoTrackExposure: !1 },
            );
        return {
            isPrepaid: t,
            selectPlan: r,
            premiumSubscription: d ? null : null != n ? n : null,
            priceOptions: i,
            shouldShowUpdatedPaymentModal: a,
            isEligibleForDiscount: l,
            discountAmountOff: c,
            isEligibleForTrial: o,
            userLocale: u,
            isCustomGift: p,
            shouldUseCalculatedDiscount: h,
            discountOffer: (0, R.N)(),
            isEligibleForBOGOPromotion: (0, A.Vi)(),
        };
    },
    ei = (e) => {
        let { planOptions: t, radioGroupRef: n, selectedPlan: i, radioGroupProps: a } = e,
            o = er(e);
        return (0, r.jsx)(
            "div",
            q(K({ ref: n }, a), {
                children: t.map((e) =>
                    (0, r.jsx)(
                        G.Z,
                        K(
                            {
                                planId: e,
                                selected: (null == i ? void 0 : i.id) === e,
                            },
                            o,
                        ),
                        e,
                    ),
                ),
            }),
        );
    };
function ea(e) {
    let {
            premiumSubscription: t,
            skuId: n,
            selectedPlanId: i,
            setSelectedPlanId: a,
            planGroup: o,
            priceOptions: s,
            planOptions: l,
            eligibleForMultiMonthPlans: d,
            subscriptionPeriodEnd: f,
            showTotal: p = !0,
            discountInvoiceItems: _,
            useCompactGiftComponents: h,
            handleClose: m,
        } = e,
        {
            skuId: g,
            setPlanId: E,
            selectedPlan: b,
            premiumSubscription: y,
            premiumSubscriptionPlan: O,
            isGift: S,
            thePriceOptions: T,
            isEligibleForTrial: C,
            giftRecipient: A,
            customGiftMessage: N,
            setCustomGiftMessage: P,
            selectedGiftStyle: w,
            discountOffer: R,
            isPlansEligibleForDiscount: D,
            discountedPlanRegularPrice: x,
            hasSeenCollectiblesInSkuSelect: j,
            isEligibleForBOGOPromotion: M,
            userTrialOffer: k,
            shouldShowUpdatedPaymentModal: U,
            trialPeriodCopy: G,
            discountAmountOff: Z,
            isPrepaid: W,
            radioGroupRef: K,
            radioGroupProps: z,
            selectedPlanPrice: q,
            shouldShowHRKEuroWarning: Q,
            canContinue: X,
        } = $({
            premiumSubscription: t,
            skuId: n,
            selectedPlanId: i,
            setSelectedPlanId: a,
            priceOptions: s,
            planOptions: l,
            eligibleForMultiMonthPlans: d,
            subscriptionPeriodEnd: f,
            discountInvoiceItems: _,
        }),
        er = (e, t, n) => {
            if (!U)
                return (0, r.jsx)("div", {
                    className: Y.selectPlanChooseTitle,
                    children: H.intl.string(H.t.a19jpU),
                });
            if (t) {
                let t = (null == e ? void 0 : e.trial_id) === F.a7;
                return (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            className: Y.trialPlanSelectHeader,
                            children: t
                                ? H.intl.format(H.t.nG95hA, { endDate: f })
                                : H.intl.format(H.t.s4E7kb, {
                                      trialEnd: f,
                                      trialPeriod: G,
                                  }),
                        }),
                        (0, r.jsx)("hr", { className: Y.planSelectSeparator }),
                    ],
                });
            }
            if (n && null != Z && null != x && i === F.Xh.PREMIUM_MONTH_TIER_2) {
                var a;
                return (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            className: Y.trialPlanSelectHeader,
                            children: H.intl.format(H.t["nG7g/E"], {
                                numMonths: null != (a = null == R ? void 0 : R.discount.user_usage_limit) ? a : "",
                                discountedPrice: (0, I.T4)(x.amount - Z, x.currency),
                                regularPrice: (0, I.T4)(x.amount, x.currency),
                            }),
                        }),
                        (0, r.jsx)("hr", { className: Y.planSelectSeparator }),
                    ],
                });
            }
        },
        ea = () =>
            (0, r.jsx)(ei, {
                planOptions: l,
                radioGroupRef: K,
                radioGroupProps: z,
                isGift: S,
                isPrepaid: W,
                premiumSubscription: y,
                setPlanId: E,
                selectedPlan: b,
                thePriceOptions: T,
                shouldShowUpdatedPaymentModal: U,
                isEligibleForTrial: C,
                isPlansEligibleForDiscount: D,
                discountAmountOff: Z,
            }),
        eo = () =>
            Q && null != q
                ? (0, r.jsx)(u.Z, {
                      message: H.intl.formatToPlainString(H.t["9hnZoK"], {
                          kunaPriceWithCurrency: (0, I.T4)(7.5345 * q.amount, V.pK.HRK),
                      }),
                  })
                : null,
        { showFractionalPremiumBanner: es, fractionalPremiumInfo: el } = ee({
            premiumSubscription: y,
            selectedPlanId: i,
            planGroup: o,
            isGift: S,
        });
    if (S)
        return (0, r.jsx)(en, {
            giftRecipient: A,
            customGiftMessage: N,
            setCustomGiftMessage: P,
            selectedGiftStyle: w,
            hasSeenCollectiblesInSkuSelect: j,
            isPrepaid: W,
            canContinue: X,
            selectedPlan: b,
            selectedPlanPrice: q,
            useCompactGiftComponents: h,
            handleClose: m,
            showTotal: p,
            switchPlanSelectComponent: ea(),
            warningComponent: eo(),
        });
    let ec = !C && !D && X && p,
        eu = !(C && es);
    return (0, r.jsxs)("div", {
        className: Y.stepBody,
        children: [
            es &&
                (0, r.jsx)(L.n, {
                    fractionalPremiumInfo: el,
                    enablePremiumBrandRefresh: !0,
                    variant: C ? L.I.TRIAL : void 0,
                    trialPeriod: C ? G : void 0,
                    trialEnd: C ? f : void 0,
                }),
            null != O &&
                !es &&
                !M &&
                (0, r.jsx)("div", {
                    className: Y.bodyText,
                    children: J(O, g),
                }),
            eu && er(k, C, D),
            ea(),
            ec &&
                null != b &&
                null != q &&
                (0, r.jsx)(et, {
                    selectedPlan: b,
                    selectedPlanPrice: q,
                    intervalType: b.interval,
                    isPrepaid: W,
                }),
            eo(),
            !U &&
                p &&
                (0, r.jsx)(u.Z, {
                    message: H.intl.format(H.t.Om31w8, {
                        documentationLink: v.Z.getArticleURL(B.BhN.LOCALIZED_PRICING),
                    }),
                }),
        ],
    });
}
function eo(e) {
    let {
            onStepChange: t,
            selectedPlanId: n,
            paymentSources: i,
            onBackClick: a,
            showBackButton: o,
            planOptions: s,
            shouldRenderUpdatedPaymentModal: l = !1,
            isTrial: u,
            isNextDisabled: d = !1,
        } = e,
        { paymentSources: f, selectedPlan: p } = (0, h.JL)(),
        { isGift: m, giftRecipient: g, claimableRewards: E } = (0, _.wD)(),
        b = (0, O.pO)(g);
    return (
        (i = null != i ? i : f),
        (n = null != n ? n : null == p ? void 0 : p.id),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != n && s.includes(n)
                    ? (0, r.jsx)(es, {
                          paymentSources: i,
                          onStepChange: t,
                          selectedPlanId: n,
                          isGift: m,
                          claimableRewards: E,
                          shouldRenderUpdatedPaymentModal: l,
                          isTrial: u,
                          isNextDisabled: d,
                      })
                    : (0, r.jsx)(c.Button, {
                          variant: "primary",
                          text: H.intl.string(H.t.XqMe3N),
                          disabled: !0,
                      }),
                o
                    ? (0, r.jsx)(k.Z, {
                          className: m && b ? Y.equalDistantBackButton : void 0,
                          onClick: a,
                      })
                    : null,
            ],
        })
    );
}
function es(e) {
    let {
            onStepChange: t,
            selectedPlanId: n,
            isGift: i,
            claimableRewards: a,
            paymentSources: o,
            shouldRenderUpdatedPaymentModal: l,
            isTrial: u,
            isNextDisabled: d = !1,
        } = e,
        f = (0, s.e7)([y.Z], () => y.Z.getPremiumTypeSubscription()),
        { step: p, selectedPlan: _ } = (0, h.JL)(),
        { hasEntitlements: g } = (0, U.H)(n, i),
        E = (null != f && null != f.paymentSourceId) || Object.keys(o).length > 0 || (g && !u);
    var b = l ? H.intl.string(H.t.PDTjLN) : H.intl.string(H.t.XqMe3N),
        O = m.h8.ADD_PAYMENT_STEPS;
    return (
        E && (O = m.h8.REVIEW),
        (0, P.id)(_, i, a) && p !== m.h8.SELECT_FREE_SKU && (O = m.h8.SELECT_FREE_SKU),
        (0, r.jsx)(c.Button, {
            variant: "primary",
            text: b,
            onClick: () => t(O),
            disabled: d,
        })
    );
}
