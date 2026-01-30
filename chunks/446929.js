n.d(t, {
    $p: () => eo,
    O8: () => $,
    RO: () => ee,
    Z3: () => es,
    fJ: () => ea,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(284009),
    o = n.n(a),
    s = n(311907),
    l = n(421380),
    c = n(397927),
    u = n(726656),
    d = n(155718),
    f = n(93159),
    p = n(448811),
    _ = n(937008),
    h = n(156312),
    m = n(166532),
    g = n(210507),
    E = n(773669),
    y = n(594832),
    b = n(97352),
    O = n(166403),
    v = n(45938),
    A = n(975571),
    I = n(927578),
    S = n(580630),
    T = n(666468),
    C = n(40185),
    N = n(906023),
    w = n(810498),
    R = n(477421),
    P = n(422936),
    D = n(735164),
    L = n(363476),
    x = n(934581),
    M = n(871181),
    j = n(318007),
    k = n(683433),
    U = n(344159),
    G = n(958720),
    F = n(285719),
    V = n(788868),
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

function Z(e, t) {
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

function Q(e, t) {
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
    if (((a = X(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function X(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function J(e, t) {
    let n = Y.intl.string(Y.t.BYa62u),
        r = Y.intl.string(Y.t.CDa6Dq),
        i = (() => {
            switch (e.interval) {
                case V.WT.YEAR:
                    return n;
                case V.WT.MONTH:
                default:
                    return r;
            }
        })(),
        a = e.skuId;
    switch (t) {
        case V.pe.TIER_0:
            switch (a) {
                case V.pe.TIER_1:
                    return Y.intl.string(Y.t.q6mxDS);
                case V.pe.TIER_2:
                    return Y.intl.string(Y.t.seZVS0);
                default:
                    return i;
            }
        case V.pe.TIER_1:
            switch (a) {
                case V.pe.TIER_0:
                    return Y.intl.string(Y.t["7+u2zg"]);
                case V.pe.TIER_2:
                    return Y.intl.string(Y.t.NG2qcc);
                default:
                    return i;
            }
        case V.pe.TIER_2:
            switch (a) {
                case V.pe.TIER_0:
                case V.pe.TIER_1:
                    return Y.intl.string(Y.t["eB0/w9"]);
                case V.pe.TIER_2:
                    return e.interval === V.WT.MONTH
                        ? Y.intl.formatToPlainString(Y.t.RqUv86, {
                              numFreeGuildSubscriptions: V.M4,
                          })
                        : i;
                default:
                    return i;
            }
        default:
            return i;
    }
}
let $ = () => {
        let { userTrialOffer: e } = (0, h.P5)(),
            t = null == e ? void 0 : e.subscription_trial;
        return i.useMemo(
            () =>
                (null == t ? void 0 : t.interval) === V.WT.DAY
                    ? (null == t ? void 0 : t.interval_count) > 7
                        ? Y.intl.string(Y.t.Z1V2cs)
                        : Y.intl.string(Y.t.MI1rHs)
                    : Y.intl.string(Y.t["+S5lrV"]),
            [t],
        );
    },
    ee = (e) => {
        var t, n, r, a;
        let {
                selectedPlanId: c,
                priceOptions: u,
                planOptions: f,
                eligibleForMultiMonthPlans: p,
                subscriptionPeriodEnd: m,
                discountInvoiceItems: g,
            } = e,
            {
                activeSubscription: E,
                setSelectedPlanId: O,
                selectedSkuId: A,
                selectedPlan: S,
                priceOptions: N,
                userTrialOffer: P,
                isEligibleForTrial: D,
                discountOffer: L,
            } = (0, h.P5)(),
            {
                isGift: x,
                giftRecipient: M,
                selectedGiftStyle: j,
                customGiftMessage: k,
                setCustomGiftMessage: U,
                claimableRewards: G,
                setSelectedGiftingPromotionReward: F,
            } = (0, _.Pv)(),
            B = (0, w.kz)(S, x && (0, v.Ik)(M), G),
            Y = (0, y.tA)({
                location: "PremiumPlanSelectStep",
                giftRecipient: M,
                isGift: x,
            }),
            W = E;
        o()(void 0 !== W, "should not be undefined");
        let [K, z] = (0, s.yK)([b.A], () => [null != W ? b.A.get(W.planId) : null, null != c ? b.A.get(c) : null]),
            q = null == P ? void 0 : P.subscription_trial,
            Z = (0, C.cg)(),
            X = null != z ? z : S,
            J = i.useCallback(
                (e) => {
                    O(e);
                },
                [O],
            ),
            $ = null != u ? u : N;
        o()(null != $, "Price option has to be set");
        let ee = null == L || null == (t = L.discount) ? void 0 : t.plan_ids,
            et = null != L && f.some((e) => (null == ee ? void 0 : ee.includes(e))) && null != L.discount,
            en = (0, I.y8)(V.gD.PREMIUM_MONTH_TIER_2, !1, x, $);
        i.useEffect(() => {
            p &&
                T.Ay.trackExposure({
                    location: "5f89bb_1",
                });
        }, [p]);
        let er = (null == X ? void 0 : X.id) != null && f.includes(X.id);
        i.useEffect(() => {
            if (!er) {
                if (null == K || x) J(f[0]);
                else if (null != K) {
                    let e = f.find((e) => e !== K.id);
                    null != e && J(e);
                }
            }
        }, [er, x, f, K, J]),
            i.useEffect(() => {
                B && null != G && G.length > 0 && F(G[0]);
            }, [G, F, B]);
        let ei = (0, l._u)(),
            { ref: ea } = ei,
            eo = Q(ei, ["ref"]),
            es = (null == X ? void 0 : X.id) != null ? (0, I.y8)(X.id, !1, x, $) : void 0,
            { ipCountryCode: el } = (0, R.A)(),
            ec = "HR" === el && null != es && es.currency === H.Yr.EUR,
            eu = (0, I.J$)($.paymentSourceId),
            ed = !x && (et || (null != q && D && null != m));
        return {
            skuId: A,
            setPlanId: J,
            selectedPlan: X,
            selectedPlanPrice: es,
            premiumSubscriptionPlan: K,
            premiumSubscription: W,
            thePriceOptions: $,
            hasSeenCollectiblesInSkuSelect: Y,
            shouldShowUpdatedPaymentModal: ed,
            shouldShowHRKEuroWarning: ec,
            canContinue: er,
            isPrepaid: eu,
            radioGroupRef: ea,
            radioGroupProps: eo,
            isGift: x,
            giftRecipient: M,
            customGiftMessage: k,
            setCustomGiftMessage: U,
            selectedGiftStyle: j,
            isEligibleForBOGOPromotion: Z,
            isEligibleForTrial: D,
            userTrialOffer: P,
            discountOffer: L,
            isPlansEligibleForDiscount: et,
            discountedPlanRegularPrice: en,
            discountAmountOff:
                null == g ||
                null == (a = g.find((e) => e.subscriptionPlanId === V.gD.PREMIUM_MONTH_TIER_2)) ||
                null == (r = a.discounts) ||
                null == (n = r.find((e) => e.type === d.iS.SUBSCRIPTION_PLAN))
                    ? void 0
                    : n.amount,
        };
    },
    et = (e) => {
        let { isPrepaid: t, selectedPlan: n, selectedPlanPrice: i, intervalType: a } = e;
        return (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)("div", {
                    className: W.T,
                }),
                (0, r.jsx)(D.Sd, {
                    label: Y.intl.string(Y.t.txajQG),
                    value: (0, r.jsx)(L.A, {
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
                if ((0, v.lo)(t) === v.tB.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD && null != i)
                    return (0, r.jsx)(M.A, {
                        className: W.iX,
                        innerClassName: W.pt,
                        onTextChange: (e) => i(e),
                        pendingText: n,
                        currentText: n,
                    });
            },
            y = (e) =>
                (0, r.jsx)(c.D0$, {
                    label: Y.intl.string(Y.t["3E5hXj"]),
                    children: e,
                });
        if ((0, v.Ik)(t))
            return (0, r.jsxs)("div", {
                className: W.mh,
                children: [
                    (0, r.jsx)("div", {
                        className: W.MU,
                        children: null != a && (0, r.jsx)(j.t, {}),
                    }),
                    (0, r.jsxs)("div", {
                        className: W.Tc,
                        children: [
                            (0, r.jsx)(F.Z, {
                                className: f ? W.KW : void 0,
                                giftRecipient: t,
                            }),
                            E(),
                            y(m),
                            g,
                            !o &&
                                (0, r.jsx)(p.A, {
                                    onClose: _,
                                }),
                        ],
                    }),
                ],
            });
        let b = l && h;
        return (0, r.jsxs)("div", {
            className: W.Du,
            children: [
                (0, r.jsx)(F.Z, {
                    className: f ? W.KW : void 0,
                    giftRecipient: t,
                }),
                y(m),
                b &&
                    null != u &&
                    null != d &&
                    (0, r.jsx)(et, {
                        selectedPlan: u,
                        selectedPlanPrice: d,
                        intervalType: null,
                        isPrepaid: s,
                    }),
                g,
                !o &&
                    (0, r.jsx)(p.A, {
                        onClose: _,
                    }),
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
            u = (0, s.bG)([E.default], () => E.default.locale),
            { isGift: d, giftRecipient: f } = (0, _.Pv)(),
            p = d && (0, v.Ik)(f),
            { enabled: h } = N.A.getCurrentConfig(
                {
                    location: "PremiumSwitchPlanSelectOption",
                },
                {
                    autoTrackExposure: !1,
                },
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
            discountOffer: (0, P.O)(),
            isEligibleForBOGOPromotion: (0, C.cg)(),
        };
    },
    ei = (e, t) => {
        let n = null != e && e.planId === t,
            r =
                n ||
                (t === V.gD.PREMIUM_MONTH_TIER_2 &&
                    null != e &&
                    [V.gD.PREMIUM_YEAR_TIER_0, V.gD.PREMIUM_YEAR_TIER_1].includes(e.planId));
        return {
            isCurrentPlan: n,
            disabled: r,
        };
    },
    ea = (e) => {
        let { shouldUseUnifiedCheckoutUI: t } = e,
            n = Q(e, ["shouldUseUnifiedCheckoutUI"]),
            { planOptions: a, radioGroupRef: o, selectedPlan: s, radioGroupProps: l } = n,
            c = er(n),
            u = i.useMemo(
                () =>
                    a.map((e) => {
                        let { isCurrentPlan: n, disabled: i } = ei(c.premiumSubscription, e);
                        return (0, r.jsx)(
                            G.A,
                            z(
                                {
                                    planId: e,
                                    selected: (null == s ? void 0 : s.id) === e,
                                    isCurrentPlan: n,
                                    disabled: i,
                                    shouldUseUnifiedCheckoutUI: t,
                                },
                                c,
                            ),
                            e,
                        );
                    }),
                [a, t, c, s],
            ),
            d = a.length > 0 ? V.hd[a[0]].premiumType : void 0;
        if (t) {
            var p;
            return null == d
                ? null
                : (0, r.jsx)(f.q7, {
                      headingComponent: (0, r.jsx)(f.ec, {
                          size: "sm",
                          color: "text-strong",
                          premiumType: d,
                      }),
                      selection: null != (p = null == s ? void 0 : s.id) ? p : "",
                      onChange: c.selectPlan,
                      planOptionsComponents: u,
                  });
        }
        return (0, r.jsx)(
            "div",
            Z(
                z(
                    {
                        ref: o,
                    },
                    l,
                ),
                {
                    children: u,
                },
            ),
        );
    };

function eo(e) {
    let {
            selectedPlanId: t,
            planGroup: n,
            priceOptions: i,
            planOptions: a,
            eligibleForMultiMonthPlans: o,
            subscriptionPeriodEnd: s,
            showTotal: l = !0,
            discountInvoiceItems: d,
            useCompactGiftComponents: f,
            handleClose: p,
        } = e,
        {
            skuId: _,
            setPlanId: h,
            selectedPlan: m,
            premiumSubscription: E,
            premiumSubscriptionPlan: y,
            isGift: b,
            thePriceOptions: O,
            isEligibleForTrial: v,
            giftRecipient: I,
            customGiftMessage: T,
            setCustomGiftMessage: C,
            selectedGiftStyle: N,
            discountOffer: w,
            isPlansEligibleForDiscount: R,
            discountedPlanRegularPrice: P,
            hasSeenCollectiblesInSkuSelect: D,
            isEligibleForBOGOPromotion: L,
            userTrialOffer: M,
            shouldShowUpdatedPaymentModal: j,
            discountAmountOff: k,
            isPrepaid: U,
            radioGroupRef: G,
            radioGroupProps: F,
            selectedPlanPrice: K,
            shouldShowHRKEuroWarning: z,
            canContinue: q,
        } = ee({
            selectedPlanId: t,
            priceOptions: i,
            planOptions: a,
            eligibleForMultiMonthPlans: o,
            subscriptionPeriodEnd: s,
            discountInvoiceItems: d,
        }),
        Z = $(),
        Q = (e, n, i) => {
            if (!j)
                return (0, r.jsx)("div", {
                    className: W.VZ,
                    children: Y.intl.string(Y.t.a19jpU),
                });
            if (n) {
                let t = (null == e ? void 0 : e.trial_id) === V.Dw;
                return (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            className: W.Tz,
                            children: t
                                ? Y.intl.format(Y.t.nG95hA, {
                                      endDate: s,
                                  })
                                : Y.intl.format(Y.t.s4E7kb, {
                                      trialEnd: s,
                                      trialPeriod: Z,
                                  }),
                        }),
                        (0, r.jsx)("hr", {
                            className: W.RA,
                        }),
                    ],
                });
            }
            if (i && null != k && null != P && t === V.gD.PREMIUM_MONTH_TIER_2) {
                var a;
                return (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(c.Text, {
                            variant: "text-sm/normal",
                            className: W.Tz,
                            children: Y.intl.format(Y.t["nG7g/E"], {
                                numMonths: null != (a = null == w ? void 0 : w.discount.user_usage_limit) ? a : "",
                                discountedPrice: (0, S.$g)(P.amount - k, P.currency),
                                regularPrice: (0, S.$g)(P.amount, P.currency),
                            }),
                        }),
                        (0, r.jsx)("hr", {
                            className: W.RA,
                        }),
                    ],
                });
            }
        },
        X = () =>
            (0, r.jsx)(ea, {
                planOptions: a,
                radioGroupRef: G,
                radioGroupProps: F,
                isGift: b,
                isPrepaid: U,
                premiumSubscription: E,
                setPlanId: h,
                selectedPlan: m,
                thePriceOptions: O,
                shouldShowUpdatedPaymentModal: j,
                isEligibleForTrial: v,
                isPlansEligibleForDiscount: R,
                discountAmountOff: k,
            }),
        er = () =>
            z && null != K
                ? (0, r.jsx)(u.A, {
                      message: Y.intl.formatToPlainString(Y.t["9hnZoK"], {
                          kunaPriceWithCurrency: (0, S.$g)(7.5345 * K.amount, H.Yr.HRK),
                      }),
                  })
                : null,
        { showFractionalPremiumBanner: ei, fractionalPremiumInfo: eo } = (0, g._V)({
            premiumSubscription: E,
            selectedPlanId: t,
            planGroup: n,
            isGift: b,
        });
    if (b)
        return (0, r.jsx)(en, {
            giftRecipient: I,
            customGiftMessage: T,
            setCustomGiftMessage: C,
            selectedGiftStyle: N,
            hasSeenCollectiblesInSkuSelect: D,
            isPrepaid: U,
            canContinue: q,
            selectedPlan: m,
            selectedPlanPrice: K,
            useCompactGiftComponents: f,
            handleClose: p,
            showTotal: l,
            switchPlanSelectComponent: X(),
            warningComponent: er(),
        });
    let es = !v && !R && q && l,
        el = !(v && ei);
    return (0, r.jsxs)("div", {
        className: W.Du,
        children: [
            ei &&
                (0, r.jsx)(x.vi, {
                    fractionalPremiumInfo: eo,
                    enablePremiumBrandRefresh: !0,
                    variant: v ? x.uA.TRIAL : void 0,
                    trialPeriod: v ? Z : void 0,
                    trialEnd: v ? s : void 0,
                }),
            null != y &&
                !ei &&
                !L &&
                (0, r.jsx)("div", {
                    className: W.G3,
                    children: J(y, _),
                }),
            el && Q(M, v, R),
            X(),
            es &&
                null != m &&
                null != K &&
                (0, r.jsx)(et, {
                    selectedPlan: m,
                    selectedPlanPrice: K,
                    intervalType: m.interval,
                    isPrepaid: U,
                }),
            er(),
            !j &&
                l &&
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
            showBackButton: o,
            planOptions: s,
            shouldRenderUpdatedPaymentModal: l = !1,
            isTrial: u,
            isNextDisabled: d = !1,
        } = e,
        { paymentSources: f, selectedPlan: p } = (0, h.P5)(),
        { isGift: m, giftRecipient: g, claimableRewards: E } = (0, _.Pv)(),
        y = (0, v.Ik)(g);
    return (
        (i = null != i ? i : f),
        (n = null != n ? n : null == p ? void 0 : p.id),
        (0, r.jsxs)(r.Fragment, {
            children: [
                null != n && s.includes(n)
                    ? (0, r.jsx)(el, {
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
                o
                    ? (0, r.jsx)(k.A, {
                          className: m && y ? W.Rz : void 0,
                          onClick: a,
                      })
                    : null,
            ],
        })
    );
}

function el(e) {
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
        f = (0, s.bG)([O.A], () => O.A.getPremiumTypeSubscription()),
        { step: p, selectedPlan: _ } = (0, h.P5)(),
        { hasEntitlements: g } = (0, U.X)(n, i),
        E = (null != f && null != f.paymentSourceId) || Object.keys(o).length > 0 || (g && !u);
    var y = l ? Y.intl.string(Y.t.PDTjLN) : Y.intl.string(Y.t.XqMe3N),
        b = m.pn.ADD_PAYMENT_STEPS;
    return (
        E && (b = m.pn.REVIEW),
        (0, w.px)(_, i, a) && p !== m.pn.SELECT_FREE_SKU && (b = m.pn.SELECT_FREE_SKU),
        (0, r.jsx)(c.Button, {
            variant: "primary",
            text: y,
            onClick: () => t(b),
            disabled: d,
        })
    );
}
