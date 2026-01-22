n.d(t, {
    $: () => ea,
    Z: () => es,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(284009),
    s = n.n(a),
    o = n(311907),
    l = n(421380),
    c = n(397927),
    u = n(726656),
    d = n(155718),
    f = n(531260),
    p = n(448811),
    _ = n(937008),
    h = n(156312),
    m = n(166532),
    g = n(773669),
    E = n(594832),
    b = n(97352),
    y = n(166403),
    O = n(45938),
    A = n(975571),
    v = n(927578),
    S = n(580630),
    I = n(615396),
    T = n(666468),
    C = n(40185),
    N = n(906023),
    R = n(810498),
    w = n(477421),
    P = n(422936),
    D = n(735164),
    x = n(363476),
    L = n(156962),
    j = n(871181),
    M = n(318007),
    k = n(683433),
    U = n(344159),
    G = n(958720),
    V = n(285719),
    F = n(788868),
    B = n(652215),
    H = n(818348),
    Y = n(985018),
    W = n(329221);
function K(e, t, n) {
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
function z(e) {
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
                K(e, t, n[t]);
            });
    }
    return e;
}
function q(e, t) {
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
function X(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : q(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function Z(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = Q(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function Q(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
function $(e, t) {
    let n = Y.intl.string(Y.t.BYa62u),
        r = Y.intl.string(Y.t.CDa6Dq),
        i = (() => {
            switch (e.interval) {
                case F.WT.YEAR:
                    return n;
                case F.WT.MONTH:
                default:
                    return r;
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
let J = (e) => {
        var t, n, r, a;
        let {
                premiumSubscription: c,
                skuId: u,
                selectedPlanId: f,
                setSelectedPlanId: p,
                priceOptions: m,
                planOptions: g,
                eligibleForMultiMonthPlans: y,
                subscriptionPeriodEnd: A,
                discountInvoiceItems: S,
            } = e,
            {
                activeSubscription: I,
                setSelectedPlanId: N,
                selectedSkuId: P,
                selectedPlan: D,
                priceOptions: x,
                userTrialOffer: L,
                isEligibleForTrial: j,
                discountOffer: M,
            } = (0, h.P5)(),
            {
                isGift: k,
                giftRecipient: U,
                selectedGiftStyle: G,
                customGiftMessage: V,
                setCustomGiftMessage: B,
                claimableRewards: W,
                setSelectedGiftingPromotionReward: K,
            } = (0, _.Pv)(),
            z = (0, R.kz)(D, k && (0, O.Ik)(U), W),
            q = (0, E.tA)({
                location: "PremiumPlanSelectStep",
                giftRecipient: U,
                isGift: k,
            }),
            X = null != c ? c : I;
        s()(void 0 !== X, "should not be undefined");
        let [Q, $] = (0, o.yK)([b.A], () => [null != X ? b.A.get(X.planId) : null, null != f ? b.A.get(f) : null]),
            J = null == L ? void 0 : L.subscription_trial,
            ee = (0, C.cg)(),
            et = null != $ ? $ : D,
            en = i.useCallback(
                (e) => {
                    null != p ? p(e) : N(e);
                },
                [p, N],
            ),
            er = null != m ? m : x;
        s()(null != er, "Price option has to be set");
        let ei = null == M || null == (t = M.discount) ? void 0 : t.plan_ids,
            ea = null != M && g.some((e) => (null == ei ? void 0 : ei.includes(e))) && null != M.discount,
            es = (0, v.y8)(F.gD.PREMIUM_MONTH_TIER_2, !1, k, er);
        i.useEffect(() => {
            y && T.Ay.trackExposure({ location: "5f89bb_1" });
        }, [y]);
        let eo = (null == et ? void 0 : et.id) != null && g.includes(et.id);
        i.useEffect(() => {
            if (!eo) {
                if (null == Q || k) en(g[0]);
                else if (null != Q) {
                    let e = g.find((e) => e !== Q.id);
                    null != e && en(e);
                }
            }
        }, [eo, k, g, Q, en]),
            i.useEffect(() => {
                z && null != W && W.length > 0 && K(W[0]);
            }, [W, K, z]);
        let el = (0, l._u)(),
            { ref: ec } = el,
            eu = Z(el, ["ref"]),
            ed = (null == et ? void 0 : et.id) != null ? (0, v.y8)(et.id, !1, k, er) : void 0,
            { ipCountryCode: ef } = (0, w.A)(),
            ep = "HR" === ef && null != ed && ed.currency === H.Yr.EUR,
            e_ = (0, v.J$)(er.paymentSourceId),
            eh = i.useMemo(
                () =>
                    (null == J ? void 0 : J.interval) === F.WT.DAY
                        ? (null == J ? void 0 : J.interval_count) > 7
                            ? Y.intl.string(Y.t.Z1V2cs)
                            : Y.intl.string(Y.t.MI1rHs)
                        : Y.intl.string(Y.t["+S5lrV"]),
                [J],
            ),
            em = !k && (ea || (null != J && j && null != A));
        return {
            skuId: null != u ? u : P,
            setPlanId: en,
            selectedPlan: et,
            selectedPlanPrice: ed,
            premiumSubscriptionPlan: Q,
            premiumSubscription: X,
            thePriceOptions: er,
            hasSeenCollectiblesInSkuSelect: q,
            shouldShowUpdatedPaymentModal: em,
            shouldShowHRKEuroWarning: ep,
            canContinue: eo,
            isPrepaid: e_,
            radioGroupRef: ec,
            radioGroupProps: eu,
            isGift: k,
            giftRecipient: U,
            customGiftMessage: V,
            setCustomGiftMessage: B,
            selectedGiftStyle: G,
            isEligibleForBOGOPromotion: ee,
            isEligibleForTrial: j,
            userTrialOffer: L,
            trialPeriodCopy: eh,
            discountOffer: M,
            isPlansEligibleForDiscount: ea,
            discountedPlanRegularPrice: es,
            discountAmountOff:
                null == S ||
                null == (a = S.find((e) => e.subscriptionPlanId === F.gD.PREMIUM_MONTH_TIER_2)) ||
                null == (r = a.discounts) ||
                null == (n = r.find((e) => e.type === d.iS.SUBSCRIPTION_PLAN))
                    ? void 0
                    : n.amount,
        };
    },
    ee = (e) => {
        let { premiumSubscription: t, selectedPlanId: n, planGroup: r, isGift: i } = e,
            a = (0, f.A)({
                forceFetch: !1,
                excludeReverseTrial: !1,
                excludeReverseTrialFromCountdown: !0,
            }),
            s = null != t && null != n && (0, I.Ge)(t, n, r);
        return {
            showFractionalPremiumBanner:
                a.isFractionalPremiumActive && (null == t || s) && !i && null != n && F.JM.has(n),
            fractionalPremiumInfo: a,
        };
    },
    et = (e) => {
        let { isPrepaid: t, selectedPlan: n, selectedPlanPrice: i, intervalType: a } = e;
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)("div", { className: W.T }),
                (0, r.jsx)(D.Sd, {
                    label: Y.intl.string(Y.t.txajQG),
                    value: (0, r.jsx)(x.A, {
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
    en = (e) => {
        let {
                giftRecipient: t,
                customGiftMessage: n,
                setCustomGiftMessage: i,
                selectedGiftStyle: a,
                hasSeenCollectiblesInSkuSelect: s,
                isPrepaid: o,
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
                if ((0, O.lo)(t) === O.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != i)
                    return (0, r.jsx)(j.A, {
                        className: W.iX,
                        innerClassName: W.pt,
                        onTextChange: (e) => i(e),
                        pendingText: n,
                        currentText: n,
                    });
            },
            b = (e) =>
                (0, r.jsx)(c.D0$, {
                    label: Y.intl.string(Y.t["3E5hXj"]),
                    children: e,
                });
        if ((0, O.Ik)(t))
            return (0, r.jsxs)("div", {
                className: W.mh,
                children: [
                    (0, r.jsx)("div", {
                        className: W.MU,
                        children: null != a && (0, r.jsx)(M.t, {}),
                    }),
                    (0, r.jsxs)("div", {
                        className: W.Tc,
                        children: [
                            (0, r.jsx)(V.Z, {
                                className: f ? W.KW : void 0,
                                giftRecipient: t,
                            }),
                            E(),
                            b(m),
                            g,
                            !s && (0, r.jsx)(p.A, { onClose: _ }),
                        ],
                    }),
                ],
            });
        let y = l && h;
        return (0, r.jsxs)("div", {
            className: W.Du,
            children: [
                (0, r.jsx)(V.Z, {
                    className: f ? W.KW : void 0,
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
                        isPrepaid: o,
                    }),
                g,
                !s && (0, r.jsx)(p.A, { onClose: _ }),
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
                isEligibleForTrial: s,
                isPlansEligibleForDiscount: l,
                discountAmountOff: c,
            } = e,
            u = (0, o.bG)([g.default], () => g.default.locale),
            { isGift: d, giftRecipient: f } = (0, _.Pv)(),
            p = d && (0, O.Ik)(f),
            { enabled: h } = N.A.getCurrentConfig(
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
            isEligibleForTrial: s,
            userLocale: u,
            isCustomGift: p,
            shouldUseCalculatedDiscount: h,
            discountOffer: (0, P.O)(),
            isEligibleForBOGOPromotion: (0, C.cg)(),
        };
    },
    ei = (e) => {
        let { planOptions: t, radioGroupRef: n, selectedPlan: i, radioGroupProps: a } = e,
            s = er(e);
        return (0, r.jsx)(
            "div",
            X(z({ ref: n }, a), {
                children: t.map((e) =>
                    (0, r.jsx)(
                        G.A,
                        z(
                            {
                                planId: e,
                                selected: (null == i ? void 0 : i.id) === e,
                            },
                            s,
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
            planGroup: s,
            priceOptions: o,
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
            isGift: v,
            thePriceOptions: I,
            isEligibleForTrial: T,
            giftRecipient: C,
            customGiftMessage: N,
            setCustomGiftMessage: R,
            selectedGiftStyle: w,
            discountOffer: P,
            isPlansEligibleForDiscount: D,
            discountedPlanRegularPrice: x,
            hasSeenCollectiblesInSkuSelect: j,
            isEligibleForBOGOPromotion: M,
            userTrialOffer: k,
            shouldShowUpdatedPaymentModal: U,
            trialPeriodCopy: G,
            discountAmountOff: V,
            isPrepaid: K,
            radioGroupRef: z,
            radioGroupProps: q,
            selectedPlanPrice: X,
            shouldShowHRKEuroWarning: Z,
            canContinue: Q,
        } = J({
            premiumSubscription: t,
            skuId: n,
            selectedPlanId: i,
            setSelectedPlanId: a,
            priceOptions: o,
            planOptions: l,
            eligibleForMultiMonthPlans: d,
            subscriptionPeriodEnd: f,
            discountInvoiceItems: _,
        }),
        er = (e, t, n) => {
            if (!U)
                return (0, r.jsx)("div", {
                    className: W.VZ,
                    children: Y.intl.string(Y.t.a19jpU),
                });
            if (t) {
                let t = (null == e ? void 0 : e.trial_id) === F.Dw;
                return (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            className: W.Tz,
                            children: t
                                ? Y.intl.format(Y.t.nG95hA, { endDate: f })
                                : Y.intl.format(Y.t.s4E7kb, {
                                      trialEnd: f,
                                      trialPeriod: G,
                                  }),
                        }),
                        (0, r.jsx)("hr", { className: W.RA }),
                    ],
                });
            }
            if (n && null != V && null != x && i === F.gD.PREMIUM_MONTH_TIER_2) {
                var a;
                return (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            className: W.Tz,
                            children: Y.intl.format(Y.t["nG7g/E"], {
                                numMonths: null != (a = null == P ? void 0 : P.discount.user_usage_limit) ? a : "",
                                discountedPrice: (0, S.$g)(x.amount - V, x.currency),
                                regularPrice: (0, S.$g)(x.amount, x.currency),
                            }),
                        }),
                        (0, r.jsx)("hr", { className: W.RA }),
                    ],
                });
            }
        },
        ea = () =>
            (0, r.jsx)(ei, {
                planOptions: l,
                radioGroupRef: z,
                radioGroupProps: q,
                isGift: v,
                isPrepaid: K,
                premiumSubscription: y,
                setPlanId: E,
                selectedPlan: b,
                thePriceOptions: I,
                shouldShowUpdatedPaymentModal: U,
                isEligibleForTrial: T,
                isPlansEligibleForDiscount: D,
                discountAmountOff: V,
            }),
        es = () =>
            Z && null != X
                ? (0, r.jsx)(u.A, {
                      message: Y.intl.formatToPlainString(Y.t["9hnZoK"], {
                          kunaPriceWithCurrency: (0, S.$g)(7.5345 * X.amount, H.Yr.HRK),
                      }),
                  })
                : null,
        { showFractionalPremiumBanner: eo, fractionalPremiumInfo: el } = ee({
            premiumSubscription: y,
            selectedPlanId: i,
            planGroup: s,
            isGift: v,
        });
    if (v)
        return (0, r.jsx)(en, {
            giftRecipient: C,
            customGiftMessage: N,
            setCustomGiftMessage: R,
            selectedGiftStyle: w,
            hasSeenCollectiblesInSkuSelect: j,
            isPrepaid: K,
            canContinue: Q,
            selectedPlan: b,
            selectedPlanPrice: X,
            useCompactGiftComponents: h,
            handleClose: m,
            showTotal: p,
            switchPlanSelectComponent: ea(),
            warningComponent: es(),
        });
    let ec = !T && !D && Q && p,
        eu = !(T && eo);
    return (0, r.jsxs)("div", {
        className: W.Du,
        children: [
            eo &&
                (0, r.jsx)(L.v, {
                    fractionalPremiumInfo: el,
                    enablePremiumBrandRefresh: !0,
                    variant: T ? L.u.TRIAL : void 0,
                    trialPeriod: T ? G : void 0,
                    trialEnd: T ? f : void 0,
                }),
            null != O &&
                !eo &&
                !M &&
                (0, r.jsx)("div", {
                    className: W.G3,
                    children: $(O, g),
                }),
            eu && er(k, T, D),
            ea(),
            ec &&
                null != b &&
                null != X &&
                (0, r.jsx)(et, {
                    selectedPlan: b,
                    selectedPlanPrice: X,
                    intervalType: b.interval,
                    isPrepaid: K,
                }),
            es(),
            !U &&
                p &&
                (0, r.jsx)(u.A, {
                    message: Y.intl.format(Y.t.Om31w8, {
                        documentationLink: A.A.getArticleURL(B.MVz.LOCALIZED_PRICING),
                    }),
                }),
        ],
    });
}
function es(e) {
    let {
            onStepChange: t,
            selectedPlanId: n,
            paymentSources: i,
            onBackClick: a,
            showBackButton: s,
            planOptions: o,
            shouldRenderUpdatedPaymentModal: l = !1,
            isTrial: u,
            isNextDisabled: d = !1,
        } = e,
        { paymentSources: f, selectedPlan: p } = (0, h.P5)(),
        { isGift: m, giftRecipient: g, claimableRewards: E } = (0, _.Pv)(),
        b = (0, O.Ik)(g);
    return (
        (i = null != i ? i : f),
        (n = null != n ? n : null == p ? void 0 : p.id),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != n && o.includes(n)
                    ? (0, r.jsx)(eo, {
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
                          text: Y.intl.string(Y.t.XqMe3N),
                          disabled: !0,
                      }),
                s
                    ? (0, r.jsx)(k.A, {
                          className: m && b ? W.Rz : void 0,
                          onClick: a,
                      })
                    : null,
            ],
        })
    );
}
function eo(e) {
    let {
            onStepChange: t,
            selectedPlanId: n,
            isGift: i,
            claimableRewards: a,
            paymentSources: s,
            shouldRenderUpdatedPaymentModal: l,
            isTrial: u,
            isNextDisabled: d = !1,
        } = e,
        f = (0, o.bG)([y.A], () => y.A.getPremiumTypeSubscription()),
        { step: p, selectedPlan: _ } = (0, h.P5)(),
        { hasEntitlements: g } = (0, U.X)(n, i),
        E = (null != f && null != f.paymentSourceId) || Object.keys(s).length > 0 || (g && !u);
    var b = l ? Y.intl.string(Y.t.PDTjLN) : Y.intl.string(Y.t.XqMe3N),
        O = m.pn.ADD_PAYMENT_STEPS;
    return (
        E && (O = m.pn.REVIEW),
        (0, R.px)(_, i, a) && p !== m.pn.SELECT_FREE_SKU && (O = m.pn.SELECT_FREE_SKU),
        (0, r.jsx)(c.Button, {
            variant: "primary",
            text: b,
            onClick: () => t(O),
            disabled: d,
        })
    );
}
