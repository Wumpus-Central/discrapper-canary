n.d(t, { O7: () => R, Ay: () => O, gS: () => M });
var l = n(627968),
    i = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(284009),
    o = n.n(s),
    u = n(17928),
    c = n(834730),
    d = n(939249),
    p = n(150934),
    m = n(663803),
    h = n(650170),
    C = n(937008),
    E = n(773669),
    A = n(97352),
    f = n(45938),
    S = n(252424),
    y = n(428262),
    P = n(580630),
    I = n(960851),
    T = n(986883);
let _ = (0, n(945810).mj)({
    name: "2026-06-bulk-nitro-gifting",
    kind: "user",
    defaultConfig: !1,
    variations: { 0: !1, 1: !0 },
});
var g = n(186223),
    v = n(202541),
    x = n(375708),
    N = n(672305);
function R(e, t) {
    let n = e.interval === v.WT.YEAR ? x.t.ECT4A5 : x.t.v9QeON;
    return x.intl.format(n, { price: (0, P.$g)(t.amount, t.currency) });
}
function b(e) {
    return { type: "badge", textBadgeVariant: "eyebrow", text: e };
}
function M(e, t, n) {
    let {
            userLocale: l,
            isEligibleForBOGOPromotion: i,
            shouldShowSavingsPercent: r,
            isGift: a,
            planId: s,
            savingsPercent: o,
            priceOptions: u,
            annualPlanCheckoutCopyTreatment: c,
            isEligibleForTrial: d,
        } = n,
        p = null != e && (e.planId === s || (null != t && e.planId === t.id));
    if (i) return a || s !== v.gD.PREMIUM_MONTH_TIER_2 ? null : b(x.intl.string(x.t.iQTfWx));
    if (null != t && (t.interval !== v.WT.YEAR || null == e) && !(r && !p)) return null;
    if (
        null != t &&
        !p &&
        (0, g.is)({
            treatment: c,
            targetSubscriptionPlan: t,
            isGift: a,
            shouldShowSavingsPercent: r,
            isEligibleForTrial: d ?? !1,
        })
    ) {
        let e = (0, g.ou)(c, t, a, u);
        return null != e ? b(e) : null;
    }
    return null != t && t.interval === v.WT.YEAR && null != e
        ? x.intl.string(x.t["122kWB"])
        : r && !p && null != o
          ? b(x.intl.format(x.t.IAybsG, { discount: (0, S.l9)(l, o / 100) }))
          : null;
}
function O(e) {
    let {
            premiumSubscription: t,
            planId: n,
            selected: r,
            priceOptions: s,
            isPrepaid: S,
            shouldShowTrialOrDiscountLayout: g,
            isEligibleForDiscount: b,
            isEligibleForTrial: O,
            isCurrentPlan: j,
            disabled: L,
        } = e,
        D = (0, u.bG)([E.default], () => E.default.locale),
        {
            discountInfo: U,
            setSelectedPlanId: w,
            isGift: k,
            quantity: G,
            setQuantity: F,
        } = (0, h.t4)((e) => ({
            discountInfo: e.premiumDiscountInfo,
            setSelectedPlanId: e.setSelectedPlanId,
            isGift: e.isGift,
            quantity: e.quantity,
            setQuantity: e.setQuantity,
        })),
        { giftRecipient: B } = (0, C.Pv)(),
        Y = k && (0, f.Ik)(B),
        { discountOffer: H, discountAmountOff: W, applicablePlan: V } = U,
        K = (0, u.bG)([A.A], () => A.A.get(n));
    o()(null != K, "Missing subscriptionPlan");
    let Z = (0, y.m6)(K.id),
        q = (0, I.cg)(),
        z = (0, T.DQ)({ location: "PremiumSwitchPlanSelectOption" }),
        $ =
            (function (e) {
                let { location: t } = e;
                return _.useConfig({ location: t });
            })({ location: "PremiumSwitchPlanSelectOption" }) && Z === v.PremiumTypes.TIER_2,
        X = (0, y.L_)({ planId: n, isGift: k, priceOptions: s, subscriptionPlan: K }),
        Q = (0, y.y8)(n, !1, k, s),
        J = null != X && !g,
        ee = i.useCallback(() => {
            let e = M(t, K, {
                userLocale: D,
                isEligibleForBOGOPromotion: q,
                shouldShowSavingsPercent: J,
                isGift: k,
                planId: n,
                savingsPercent: X,
                priceOptions: s,
                annualPlanCheckoutCopyTreatment: z,
                isEligibleForTrial: O,
            });
            return "string" == typeof e
                ? (0, l.jsxs)("span", { className: N.IS, children: ["(", e, ")"] })
                : null != e
                  ? (e.type,
                    (0, l.jsx)(c.E, {
                        tag: "span",
                        variant: e.textBadgeVariant,
                        color: "always-white",
                        className: N.kP,
                        children: e.text,
                    }))
                  : null;
        }, [D, q, K, t, J, k, n, X, s, z, O]),
        et = i.useMemo(
            () => (0, y.D8)(K.interval, k, S, K.intervalCount, Y, Z),
            [K.interval, K.intervalCount, k, S, Y, Z],
        ),
        en = null != V && n === V;
    function el() {
        L || r || w(n);
    }
    let ei = g
        ? x.intl.format(x.t.hXcaLT, {
              price:
                  b && null != W && en
                      ? (0, P.$g)(Q.amount - W, Q.currency)
                      : O
                        ? (0, P.$g)(0, Q.currency, { minimumFractionDigits: 0, maximumFractionDigits: 0 })
                        : (0, P.$g)(Q.amount, Q.currency),
          })
        : (0, P.$g)(Q.amount, Q.currency);
    return (0, l.jsxs)(d.D, {
        role: "radio",
        "aria-checked": r,
        tabIndex: r ? 0 : -1,
        focusProps: { offset: { left: -4, right: -4, top: 0, bottom: 0 } },
        onClick: el,
        className: a()(N.G_, { [N.vW]: Y && r, [N.Gb]: Y }),
        children: [
            (0, l.jsxs)("div", {
                className: a()(N.XM, { [N.PA]: L }),
                children: [
                    (0, l.jsxs)("div", {
                        className: N.l,
                        children: [
                            !Y &&
                                (0, l.jsx)("div", {
                                    className: N.E2,
                                    children: (0, l.jsx)(p.S, {
                                        checked: r,
                                        value: r,
                                        label: "",
                                        description: "",
                                        onChange: el,
                                    }),
                                }),
                            (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: a()(N.Gl, { [N.h4]: r || Y, [N.ox]: g && (r || Y) }),
                                        children: [et, Y && ee()],
                                    }),
                                    Y &&
                                        (0, l.jsx)("div", {
                                            className: N._R,
                                            children: x.intl.format(x.t.ori2Jm, {
                                                currencyAmount: (0, P.$g)(Q.amount, Q.currency),
                                            }),
                                        }),
                                ],
                            }),
                            j &&
                                (0, l.jsxs)("span", {
                                    className: N.bq,
                                    children: ["(", x.intl.string(x.t.ymSxhy), ")"],
                                }),
                            !Y && ee(),
                        ],
                    }),
                    g
                        ? (0, l.jsx)("div", { className: a()({ [N.kb]: r }), children: ei })
                        : (0, l.jsx)("div", { className: a()({ [N.h4]: r || Y }), children: ei }),
                ],
            }),
            Y &&
                r &&
                $ &&
                (0, l.jsx)("div", {
                    className: N.ci,
                    children: (0, l.jsx)(m.l, { value: G, onChange: F, minValue: h.y0, maxValue: 50 }),
                }),
            g &&
                (0, l.jsx)("div", {
                    className: N.hB,
                    children: (0, l.jsx)(c.E, {
                        variant: "text-md/normal",
                        color: r ? "text-default" : "interactive-text-default",
                        className: a()(N.Ub, { [N.sw]: b || O }),
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
                                ? e.interval === v.WT.YEAR
                                    ? x.intl.format(x.t["EQmTl+"], {
                                          numYears: a?.discount.userUsageLimit ?? v.OJ,
                                          regularPrice: (0, P.$g)(n.amount, n.currency),
                                      })
                                    : x.intl.format(x.t["VeE/4E"], {
                                          numMonths: a?.discount.userUsageLimit ?? v.OJ,
                                          discountedPrice: (0, P.$g)(n.amount - r, n.currency),
                                          regularPrice: (0, P.$g)(n.amount, n.currency),
                                      })
                                : i
                                  ? R(e, n)
                                  : e.interval === v.WT.YEAR
                                    ? x.intl.formatToPlainString(x.t.rtLTJP, { percent: o ?? "" })
                                    : null;
                        })(K, {
                            price: Q,
                            isEligibleForDiscount: b,
                            isEligibleForTrial: O,
                            discountAmountOff: W,
                            discountOffer: H,
                            isDiscountApplicableToPlan: en,
                            savingsPercent: X,
                        }),
                    }),
                }),
        ],
    });
}
