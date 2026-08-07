n.d(t, { O7: () => N, Ay: () => j, gS: () => R });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    a = n.n(r),
    s = n(284009),
    o = n.n(s),
    u = n(17928),
    c = n(834730),
    d = n(939249),
    p = n(150934),
    m = n(663803),
    C = n(87725),
    h = n(951305),
    f = n(773669),
    E = n(97352),
    S = n(45938),
    A = n(252424),
    y = n(158045),
    P = n(580630),
    I = n(960851);
let g = (0, n(945810).mj)({
    name: "2026-06-bulk-nitro-gifting",
    kind: "user",
    defaultConfig: !1,
    variations: { 0: !1, 1: !0 },
});
var v = n(186223),
    T = n(202541),
    _ = n(375708),
    x = n(877385);
function N(e, t) {
    let n = e.interval === T.WT.YEAR ? _.t.ECT4A5 : _.t.v9QeON;
    return _.intl.format(n, { price: (0, P.$g)(t.amount, t.currency) });
}
function b(e) {
    return { type: "badge", textBadgeVariant: "eyebrow", text: e };
}
function R(e, t, n) {
    let {
            userLocale: l,
            isEligibleForBOGOPromotion: i,
            shouldShowSavingsPercent: r,
            isGift: a,
            planId: s,
            savingsPercent: o,
            priceOptions: u,
            isEligibleForTrial: c,
        } = n,
        d = null != e && (e.planId === s || (null != t && e.planId === t.id));
    if (i) return a || s !== T.gD.PREMIUM_MONTH_TIER_2 ? null : b(_.intl.string(_.t.iQTfWx));
    if (null != t && (t.interval !== T.WT.YEAR || null == e) && !(r && !d)) return null;
    if (
        null != t &&
        !d &&
        (0, v.sR)({ targetSubscriptionPlan: t, isGift: a, shouldShowSavingsPercent: r, isEligibleForTrial: c ?? !1 })
    ) {
        let e = (0, v.vK)(t, a, u);
        return null != e ? b(e) : null;
    }
    return null != t && t.interval === T.WT.YEAR && null != e
        ? _.intl.string(_.t["122kWB"])
        : r && !d && null != o
          ? b(_.intl.format(_.t.IAybsG, { discount: (0, A.l9)(l, o / 100) }))
          : null;
}
function j(e) {
    let {
            premiumSubscription: t,
            planId: n,
            selected: r,
            priceOptions: s,
            isPrepaid: A,
            shouldShowTrialOrDiscountLayout: v,
            isEligibleForDiscount: b,
            isEligibleForTrial: j,
            isCurrentPlan: M,
            disabled: O,
        } = e,
        L = (0, u.bG)([f.default], () => f.default.locale),
        {
            discountInfo: k,
            setSelectedPlanId: w,
            isGift: U,
            quantity: D,
            setQuantity: G,
        } = (0, C.t4)((e) => ({
            discountInfo: e.premiumDiscountInfo,
            setSelectedPlanId: e.setSelectedPlanId,
            isGift: e.isGift,
            quantity: e.quantity,
            setQuantity: e.setQuantity,
        })),
        { giftRecipient: F } = (0, h.Pv)(),
        H = U && (0, S.Ik)(F),
        { discountOffer: B, discountAmountOff: Y, applicablePlan: W } = k,
        V = (0, u.bG)([E.A], () => E.A.get(n));
    o()(null != V, "Missing subscriptionPlan");
    let K = (0, y.m6)(V.id),
        Z = (0, I.cg)(),
        q =
            (function (e) {
                let { location: t } = e;
                return g.useConfig({ location: t });
            })({ location: "PremiumSwitchPlanSelectOption" }) && K === T.PremiumTypes.TIER_2,
        z = (0, y.L_)({ planId: n, isGift: U, priceOptions: s, subscriptionPlan: V }),
        $ = (0, y.y8)(n, !1, U, s),
        Q = null != z && !v,
        J = i.useCallback(() => {
            let e = R(t, V, {
                userLocale: L,
                isEligibleForBOGOPromotion: Z,
                shouldShowSavingsPercent: Q,
                isGift: U,
                planId: n,
                savingsPercent: z,
                priceOptions: s,
                isEligibleForTrial: j,
            });
            return "string" == typeof e
                ? (0, l.jsxs)("span", { className: x.IS, children: ["(", e, ")"] })
                : null != e
                  ? (e.type,
                    (0, l.jsx)(c.E, {
                        tag: "span",
                        variant: e.textBadgeVariant,
                        color: "text-overlay-light",
                        className: x.kP,
                        children: e.text,
                    }))
                  : null;
        }, [L, Z, V, t, Q, U, n, z, s, j]),
        X = i.useMemo(
            () => (0, y.D8)(V.interval, U, A, V.intervalCount, H, K),
            [V.interval, V.intervalCount, U, A, H, K],
        ),
        ee = null != W && n === W;
    function et() {
        O || r || w(n);
    }
    let en = v
        ? _.intl.format(_.t.hXcaLT, {
              price:
                  b && null != Y && ee
                      ? (0, P.$g)($.amount - Y, $.currency)
                      : j
                        ? (0, P.$g)(0, $.currency, { minimumFractionDigits: 0, maximumFractionDigits: 0 })
                        : (0, P.$g)($.amount, $.currency),
          })
        : (0, P.$g)($.amount, $.currency);
    return (0, l.jsxs)(d.D, {
        role: "radio",
        "aria-checked": r,
        tabIndex: r ? 0 : -1,
        focusProps: { offset: { left: -4, right: -4, top: 0, bottom: 0 } },
        onClick: et,
        className: a()(x.G_, { [x.vW]: H && r, [x.Gb]: H }),
        children: [
            (0, l.jsxs)("div", {
                className: a()(x.XM, { [x.PA]: O }),
                children: [
                    (0, l.jsxs)("div", {
                        className: x.l,
                        children: [
                            !H &&
                                (0, l.jsx)("div", {
                                    className: x.E2,
                                    children: (0, l.jsx)(p.S, {
                                        checked: r,
                                        value: r,
                                        label: "",
                                        description: "",
                                        onChange: et,
                                    }),
                                }),
                            (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: a()(x.Gl, { [x.h4]: r || H, [x.ox]: v && (r || H) }),
                                        children: [X, H && J()],
                                    }),
                                    H &&
                                        (0, l.jsx)("div", {
                                            className: x._R,
                                            children: _.intl.format(_.t.ori2Jm, {
                                                currencyAmount: (0, P.$g)($.amount, $.currency),
                                            }),
                                        }),
                                ],
                            }),
                            M &&
                                (0, l.jsxs)("span", {
                                    className: x.bq,
                                    children: ["(", _.intl.string(_.t.ymSxhy), ")"],
                                }),
                            !H && J(),
                        ],
                    }),
                    v
                        ? (0, l.jsx)("div", { className: a()({ [x.kb]: r }), children: en })
                        : (0, l.jsx)("div", { className: a()({ [x.h4]: r || H }), children: en }),
                ],
            }),
            H &&
                r &&
                q &&
                (0, l.jsx)("div", {
                    className: x.ci,
                    children: (0, l.jsx)(m.l, { value: D, onChange: G, minValue: C.y0, maxValue: 50 }),
                }),
            v &&
                (0, l.jsx)("div", {
                    className: x.hB,
                    children: (0, l.jsx)(c.E, {
                        variant: "text-md/normal",
                        color: r ? "text-default" : "interactive-text-default",
                        className: a()(x.Ub, { [x.sw]: b || j }),
                        children: (function (e, t) {
                            let {
                                price: n,
                                isEligibleForDiscount: l,
                                isEligibleForTrial: i,
                                discountAmountOff: r,
                                discountOffer: a,
                                isDiscountApplicableToPlan: s,
                                savingsPercent: o,
                            } = t;
                            return l && null != r && s
                                ? e.interval === T.WT.YEAR
                                    ? _.intl.format(_.t["EQmTl+"], {
                                          numYears: a?.discount.userUsageLimit ?? T.OJ,
                                          regularPrice: (0, P.$g)(n.amount, n.currency),
                                      })
                                    : _.intl.format(_.t["VeE/4E"], {
                                          numMonths: a?.discount.userUsageLimit ?? T.OJ,
                                          discountedPrice: (0, P.$g)(n.amount - r, n.currency),
                                          regularPrice: (0, P.$g)(n.amount, n.currency),
                                      })
                                : i
                                  ? N(e, n)
                                  : e.interval === T.WT.YEAR
                                    ? _.intl.formatToPlainString(_.t.rtLTJP, { percent: o ?? "" })
                                    : null;
                        })(V, {
                            price: $,
                            isEligibleForDiscount: b,
                            isEligibleForTrial: j,
                            discountAmountOff: Y,
                            discountOffer: B,
                            isDiscountApplicableToPlan: ee,
                            savingsPercent: z,
                        }),
                    }),
                }),
        ],
    });
}
