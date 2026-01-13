n.d(t, {
    O: () => J,
    y: () => $,
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
    m = n(563132),
    h = n(409813),
    g = n(602733),
    E = n(509545),
    b = n(78839),
    y = n(669079),
    O = n(63063),
    v = n(74538),
    S = n(937615),
    I = n(296848),
    T = n(711459),
    C = n(367074),
    A = n(717401),
    N = n(847903),
    P = n(811334),
    R = n(553797),
    w = n(346071),
    D = n(927699),
    x = n(987716),
    L = n(311821),
    j = n(459965),
    M = n(971616),
    k = n(251660),
    U = n(474936),
    G = n(981631),
    Z = n(231338),
    F = n(388032),
    B = n(214674);
function V(e, t, n) {
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
function H(e) {
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
                V(e, t, n[t]);
            });
    }
    return e;
}
function Y(e, t) {
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
function W(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function K(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = z(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function z(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function q(e, t) {
    let n = F.intl.string(F.t.BYa62u),
        r = F.intl.string(F.t.CDa6Dq),
        i = (() => {
            switch (e.interval) {
                case U.rV.YEAR:
                    return n;
                case U.rV.MONTH:
                default:
                    return r;
            }
        })(),
        a = e.skuId;
    switch (t) {
        case U.Si.TIER_0:
            switch (a) {
                case U.Si.TIER_1:
                    return F.intl.string(F.t.q6mxDS);
                case U.Si.TIER_2:
                    return F.intl.string(F.t.seZVS0);
                default:
                    return i;
            }
        case U.Si.TIER_1:
            switch (a) {
                case U.Si.TIER_0:
                    return F.intl.string(F.t["7+u2zg"]);
                case U.Si.TIER_2:
                    return F.intl.string(F.t.NG2qcc);
                default:
                    return i;
            }
        case U.Si.TIER_2:
            switch (a) {
                case U.Si.TIER_0:
                case U.Si.TIER_1:
                    return F.intl.string(F.t["eB0/w9"]);
                case U.Si.TIER_2:
                    return e.interval === U.rV.MONTH
                        ? F.intl.formatToPlainString(F.t.RqUv86, { numFreeGuildSubscriptions: U.cb })
                        : i;
                default:
                    return i;
            }
        default:
            return i;
    }
}
let Q = (e) => {
        var t, n, r, a;
        let {
                premiumSubscription: c,
                skuId: u,
                selectedPlanId: f,
                setSelectedPlanId: p,
                priceOptions: h,
                planOptions: b,
                eligibleForMultiMonthPlans: O,
                subscriptionPeriodEnd: S,
                discountInvoiceItems: I,
            } = e,
            {
                activeSubscription: P,
                setSelectedPlanId: R,
                selectedSkuId: w,
                selectedPlan: D,
                priceOptions: x,
                userTrialOffer: L,
                isEligibleForTrial: j,
                discountOffer: M,
            } = (0, m.JL)(),
            {
                isGift: k,
                giftRecipient: G,
                selectedGiftStyle: B,
                customGiftMessage: V,
                setCustomGiftMessage: H,
                claimableRewards: Y,
                setSelectedGiftingPromotionReward: W,
            } = (0, _.wD)(),
            z = (0, A.cF)(D, k && (0, y.pO)(G), Y),
            q = (0, g.ao)({
                location: "PremiumPlanSelectStep",
                giftRecipient: G,
                isGift: k,
            }),
            Q = null != c ? c : P;
        o()(void 0 !== Q, "should not be undefined");
        let [X, J] = (0, s.Wu)([E.Z], () => [null != Q ? E.Z.get(Q.planId) : null, null != f ? E.Z.get(f) : null]),
            $ = null == L ? void 0 : L.subscription_trial,
            ee = (0, C.Vi)(),
            et = null != J ? J : D,
            en = i.useCallback(
                (e) => {
                    null != p ? p(e) : R(e);
                },
                [p, R],
            ),
            er = null != h ? h : x;
        o()(null != er, "Price option has to be set");
        let ei = null == M || null == (t = M.discount) ? void 0 : t.plan_ids,
            ea = null != M && b.some((e) => (null == ei ? void 0 : ei.includes(e))) && null != M.discount,
            eo = (0, v.aS)(U.Xh.PREMIUM_MONTH_TIER_2, !1, k, er);
        i.useEffect(() => {
            O && T.ZP.trackExposure({ location: "5f89bb_1" });
        }, [O]);
        let es = (null == et ? void 0 : et.id) != null && b.includes(et.id);
        i.useEffect(() => {
            if (!es) {
                if (null == X || k) en(b[0]);
                else if (null != X) {
                    let e = b.find((e) => e !== X.id);
                    null != e && en(e);
                }
            }
        }, [es, k, b, X, en]),
            i.useEffect(() => {
                z && null != Y && Y.length > 0 && W(Y[0]);
            }, [Y, W, z]);
        let el = (0, l.Jb)(),
            { ref: ec } = el,
            eu = K(el, ["ref"]),
            ed = (null == et ? void 0 : et.id) != null ? (0, v.aS)(et.id, !1, k, er) : void 0,
            { ipCountryCode: ef } = (0, N.Z)(),
            ep = "HR" === ef && null != ed && ed.currency === Z.pK.EUR,
            e_ = (0, v.Ap)(er.paymentSourceId),
            em = i.useMemo(
                () =>
                    (null == $ ? void 0 : $.interval) === U.rV.DAY
                        ? (null == $ ? void 0 : $.interval_count) > 7
                            ? F.intl.string(F.t.Z1V2cs)
                            : F.intl.string(F.t.MI1rHs)
                        : F.intl.string(F.t["+S5lrV"]),
                [$],
            ),
            eh = !k && (ea || (null != $ && j && null != S));
        return {
            skuId: null != u ? u : w,
            setPlanId: en,
            selectedPlan: et,
            premiumSubscriptionPlan: X,
            premiumSubscription: Q,
            thePriceOptions: er,
            selectedPlanPrice: ed,
            hasSeenCollectiblesInSkuSelect: q,
            shouldShowUpdatedPaymentModal: eh,
            shouldShowHRKEuroWarning: ep,
            canContinue: es,
            isPrepaid: e_,
            radioGroupRef: ec,
            radioGroupProps: eu,
            isGift: k,
            giftRecipient: G,
            customGiftMessage: V,
            setCustomGiftMessage: H,
            selectedGiftStyle: B,
            isEligibleForBOGOPromotion: ee,
            isEligibleForTrial: j,
            userTrialOffer: L,
            trialPeriodCopy: em,
            discountOffer: M,
            isPlansEligibleForDiscount: ea,
            discountedPlanRegularPrice: eo,
            discountAmountOff:
                null == I ||
                null == (a = I.find((e) => e.subscriptionPlanId === U.Xh.PREMIUM_MONTH_TIER_2)) ||
                null == (r = a.discounts) ||
                null == (n = r.find((e) => e.type === d.eW.SUBSCRIPTION_PLAN))
                    ? void 0
                    : n.amount,
        };
    },
    X = (e) => {
        let { premiumSubscription: t, selectedPlanId: n, planGroup: r, isGift: i } = e,
            a = (0, f.Z)({
                forceFetch: !1,
                excludeReverseTrial: !1,
                excludeReverseTrialFromCountdown: !0,
            }),
            o = null != t && null != n && (0, I.R4)(t, n, r);
        return {
            showFractionalPremiumBanner:
                a.isFractionalPremiumActive && (null == t || o) && !i && null != n && U.dJ.has(n),
            fractionalPremiumInfo: a,
        };
    };
function J(e) {
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
            showTotal: _ = !0,
            discountInvoiceItems: m,
            useCompactGiftComponents: h,
            handleClose: g,
        } = e,
        {
            skuId: E,
            setPlanId: b,
            selectedPlan: v,
            premiumSubscription: I,
            premiumSubscriptionPlan: T,
            isGift: C,
            thePriceOptions: A,
            isEligibleForTrial: N,
            giftRecipient: L,
            customGiftMessage: j,
            setCustomGiftMessage: V,
            selectedGiftStyle: Y,
            discountOffer: K,
            isPlansEligibleForDiscount: z,
            discountedPlanRegularPrice: J,
            hasSeenCollectiblesInSkuSelect: $,
            isEligibleForBOGOPromotion: ee,
            userTrialOffer: et,
            shouldShowUpdatedPaymentModal: en,
            trialPeriodCopy: er,
            discountAmountOff: ei,
            isPrepaid: ea,
            radioGroupRef: eo,
            radioGroupProps: es,
            selectedPlanPrice: el,
            shouldShowHRKEuroWarning: ec,
            canContinue: eu,
        } = Q({
            premiumSubscription: t,
            skuId: n,
            selectedPlanId: i,
            setSelectedPlanId: a,
            priceOptions: s,
            planOptions: l,
            eligibleForMultiMonthPlans: d,
            subscriptionPeriodEnd: f,
            discountInvoiceItems: m,
        }),
        ed = (e, t, n) => {
            if (!en)
                return (0, r.jsx)("div", {
                    className: B.selectPlanChooseTitle,
                    children: F.intl.string(F.t.a19jpU),
                });
            if (t) {
                let t = (null == e ? void 0 : e.trial_id) === U.a7;
                return (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            className: B.trialPlanSelectHeader,
                            children: t
                                ? F.intl.format(F.t.nG95hA, { endDate: f })
                                : F.intl.format(F.t.s4E7kb, {
                                      trialEnd: f,
                                      trialPeriod: er,
                                  }),
                        }),
                        (0, r.jsx)("hr", { className: B.planSelectSeparator }),
                    ],
                });
            }
            if (n && null != ei && null != J && i === U.Xh.PREMIUM_MONTH_TIER_2) {
                var a;
                return (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            className: B.trialPlanSelectHeader,
                            children: F.intl.format(F.t["nG7g/E"], {
                                numMonths: null != (a = null == K ? void 0 : K.discount.user_usage_limit) ? a : "",
                                discountedPrice: (0, S.T4)(J.amount - ei, J.currency),
                                regularPrice: (0, S.T4)(J.amount, J.currency),
                            }),
                        }),
                        (0, r.jsx)("hr", { className: B.planSelectSeparator }),
                    ],
                });
            }
        },
        ef = (e, t, n) =>
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)("div", { className: B.selectPlanDivider }),
                    (0, r.jsx)(P.az, {
                        label: F.intl.string(F.t.txajQG),
                        value: (0, r.jsx)(R.Z, {
                            price: t.amount,
                            currency: t.currency,
                            intervalType: n,
                            intervalCount: e.intervalCount,
                            isPrepaidPaymentSource: ea,
                        }),
                        className: B.selectPlanTotalRow,
                    }),
                ],
            }),
        ep = () =>
            (0, r.jsx)(
                "div",
                W(H({ ref: eo }, es), {
                    children: l.map((e) =>
                        (0, r.jsx)(
                            M.Z,
                            {
                                planId: e,
                                premiumSubscription: C ? null : null != I ? I : null,
                                selectPlan: b,
                                selected: (null == v ? void 0 : v.id) === e,
                                priceOptions: A,
                                shouldShowUpdatedPaymentModal: en,
                                isEligibleForDiscount: z,
                                discountAmountOff: ei,
                                isEligibleForTrial: N,
                            },
                            e,
                        ),
                    ),
                }),
            ),
        e_ = () =>
            ec && null != el
                ? (0, r.jsx)(u.Z, {
                      message: F.intl.formatToPlainString(F.t["9hnZoK"], {
                          kunaPriceWithCurrency: (0, S.T4)(7.5345 * el.amount, Z.pK.HRK),
                      }),
                  })
                : null,
        { showFractionalPremiumBanner: em, fractionalPremiumInfo: eh } = X({
            premiumSubscription: I,
            selectedPlanId: i,
            planGroup: o,
            isGift: C,
        });
    if (C) {
        let e = () => {
                if ((0, y.MY)(L) === y.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != V)
                    return (0, r.jsx)(D.Z, {
                        className: B.customGiftMessageWrapper,
                        innerClassName: B.customGiftMessage,
                        onTextChange: (e) => V(e),
                        pendingText: j,
                        currentText: j,
                    });
            },
            t = (e) =>
                (0, r.jsx)(c.gNt, {
                    label: F.intl.string(F.t["3E5hXj"]),
                    children: e,
                });
        if ((0, y.pO)(L))
            return (0, r.jsxs)("div", {
                className: B.stepBodyCustomGift,
                children: [
                    (0, r.jsx)("div", {
                        className: B.bodyColumnMiddleCentered,
                        children: null != Y && (0, r.jsx)(x.q, {}),
                    }),
                    (0, r.jsxs)("div", {
                        className: B.bodyColumnRight,
                        children: [
                            (0, r.jsx)(k.s, {
                                className: h ? B.compactSendGiftToUser : void 0,
                                giftRecipient: L,
                            }),
                            e(),
                            t(ep()),
                            e_(),
                            !$ && (0, r.jsx)(p.Z, { onClose: g }),
                        ],
                    }),
                ],
            });
        let n = eu && _;
        return (0, r.jsxs)("div", {
            className: B.stepBody,
            children: [
                (0, r.jsx)(k.s, {
                    className: h ? B.compactSendGiftToUser : void 0,
                    giftRecipient: L,
                }),
                t(ep()),
                n && null != v && null != el && ef(v, el, null),
                e_(),
                !$ && (0, r.jsx)(p.Z, { onClose: g }),
            ],
        });
    }
    let eg = !N && !z && eu && _;
    return (0, r.jsxs)("div", {
        className: B.stepBody,
        children: [
            em &&
                (0, r.jsx)(w.n, {
                    fractionalPremiumInfo: eh,
                    enablePremiumBrandRefresh: !0,
                }),
            null != T &&
                !em &&
                !ee &&
                (0, r.jsx)("div", {
                    className: B.bodyText,
                    children: q(T, E),
                }),
            ed(et, N, z),
            ep(),
            eg && null != v && null != el && ef(v, el, v.interval),
            e_(),
            !en &&
                _ &&
                (0, r.jsx)(u.Z, {
                    message: F.intl.format(F.t.Om31w8, {
                        documentationLink: O.Z.getArticleURL(G.BhN.LOCALIZED_PRICING),
                    }),
                }),
        ],
    });
}
function $(e) {
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
        { paymentSources: f, selectedPlan: p } = (0, m.JL)(),
        { isGift: h, giftRecipient: g, claimableRewards: E } = (0, _.wD)(),
        b = (0, y.pO)(g);
    return (
        (i = null != i ? i : f),
        (n = null != n ? n : null == p ? void 0 : p.id),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != n && s.includes(n)
                    ? (0, r.jsx)(ee, {
                          paymentSources: i,
                          onStepChange: t,
                          selectedPlanId: n,
                          isGift: h,
                          claimableRewards: E,
                          shouldRenderUpdatedPaymentModal: l,
                          isTrial: u,
                          isNextDisabled: d,
                      })
                    : (0, r.jsx)(c.Button, {
                          variant: "primary",
                          text: F.intl.string(F.t.XqMe3N),
                          disabled: !0,
                      }),
                o
                    ? (0, r.jsx)(L.Z, {
                          className: h && b ? B.equalDistantBackButton : void 0,
                          onClick: a,
                      })
                    : null,
            ],
        })
    );
}
function ee(e) {
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
        f = (0, s.e7)([b.Z], () => b.Z.getPremiumTypeSubscription()),
        { step: p, selectedPlan: _ } = (0, m.JL)(),
        { hasEntitlements: g } = (0, j.H)(n, i),
        E = (null != f && null != f.paymentSourceId) || Object.keys(o).length > 0 || (g && !u);
    var y = l ? F.intl.string(F.t.PDTjLN) : F.intl.string(F.t.XqMe3N),
        O = h.h8.ADD_PAYMENT_STEPS;
    return (
        E && (O = h.h8.REVIEW),
        (0, A.id)(_, i, a) && p !== h.h8.SELECT_FREE_SKU && (O = h.h8.SELECT_FREE_SKU),
        (0, r.jsx)(c.Button, {
            variant: "primary",
            text: y,
            onClick: () => t(O),
            disabled: d,
        })
    );
}
