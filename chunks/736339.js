"use strict";
n.d(t, { Ay: () => D, O7: () => R, gS: () => b });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(284009),
    l = n.n(o),
    u = n(17928),
    c = n(834730),
    d = n(939249),
    _ = n(150934),
    h = n(211159),
    f = n(937008),
    p = n(773669),
    E = n(97352),
    m = n(45938),
    g = n(252424),
    A = n(428262),
    I = n(580630),
    T = n(960851),
    S = n(986883),
    y = n(186223),
    C = n(788868),
    N = n(375708),
    v = n(672305);
let R = (e, t) => {
        let n = e.interval === C.WT.YEAR ? N.t.ECT4A5 : N.t.v9QeON;
        return N.intl.format(n, { price: (0, I.$g)(t.amount, t.currency) });
    },
    O = (e) => ({ type: "badge", textBadgeVariant: "eyebrow", text: e }),
    b = (e, t, n) => {
        let {
                userLocale: i,
                isEligibleForBOGOPromotion: r,
                shouldShowSavingsPercent: s,
                isGift: a,
                planId: o,
                savingsPercent: l,
                priceOptions: u,
                annualPlanCheckoutCopyTreatment: c,
                isEligibleForTrial: d,
            } = n,
            _ = null != e && (e.planId === o || (null != t && e.planId === t.id));
        if (r) return a || o !== C.gD.PREMIUM_MONTH_TIER_2 ? null : O(N.intl.string(N.t.iQTfWx));
        if (null != t && (t.interval !== C.WT.YEAR || null == e) && !(s && !_)) return null;
        if (
            null != t &&
            !_ &&
            (0, y.is)({
                treatment: c,
                targetSubscriptionPlan: t,
                isGift: a,
                shouldShowSavingsPercent: s,
                isEligibleForTrial: d ?? !1,
            })
        ) {
            let e = (0, y.ou)(c, t, a, u);
            return null != e ? O(e) : null;
        }
        return null != t && t.interval === C.WT.YEAR && null != e
            ? N.intl.string(N.t["122kWB"])
            : s && !_ && null != l
              ? O(N.intl.format(N.t.IAybsG, { discount: (0, g.l9)(i, l / 100) }))
              : null;
    };
function D(e) {
    let {
            premiumSubscription: t,
            planId: n,
            selected: s,
            priceOptions: o,
            isPrepaid: g,
            shouldShowTrialOrDiscountLayout: y,
            isEligibleForDiscount: O,
            isEligibleForTrial: D,
            isCurrentPlan: L,
            disabled: w,
        } = e,
        M = (0, u.bG)([p.default], () => p.default.locale),
        {
            discountInfo: P,
            setSelectedPlanId: x,
            isGift: k,
        } = (0, h.t4)((e) => ({
            discountInfo: e.premiumDiscountInfo,
            setSelectedPlanId: e.setSelectedPlanId,
            isGift: e.isGift,
        })),
        { giftRecipient: U } = (0, f.Pv)(),
        G = k && (0, m.Ik)(U),
        { discountOffer: F, discountAmountOff: V, applicablePlan: B } = P,
        j = (0, u.bG)([E.A], () => E.A.get(n));
    l()(null != j, "Missing subscriptionPlan");
    let H = (0, T.cg)(),
        Y = (0, S.DQ)({ location: "PremiumSwitchPlanSelectOption" }),
        W = (0, A.L_)({ planId: n, isGift: k, priceOptions: o, subscriptionPlan: j }),
        K = (0, A.y8)(n, !1, k, o),
        $ = null != W && !y,
        z = r.useCallback(() => {
            let e = b(t, j, {
                userLocale: M,
                isEligibleForBOGOPromotion: H,
                shouldShowSavingsPercent: $,
                isGift: k,
                planId: n,
                savingsPercent: W,
                priceOptions: o,
                annualPlanCheckoutCopyTreatment: Y,
                isEligibleForTrial: D,
            });
            return "string" == typeof e
                ? (0, i.jsxs)("span", { className: v.IS, children: ["(", e, ")"] })
                : null != e
                  ? (e.type,
                    (0, i.jsx)(c.E, {
                        tag: "span",
                        variant: e.textBadgeVariant,
                        color: "always-white",
                        className: v.kP,
                        children: e.text,
                    }))
                  : null;
        }, [M, H, j, t, $, k, n, W, o, Y, D]),
        q = (0, A.m6)(j.id),
        Z = r.useMemo(
            () => (0, A.D8)(j.interval, k, g, j.intervalCount, G, q),
            [j.interval, j.intervalCount, k, g, G, q],
        ),
        X = null != B && n === B,
        Q = () => {
            w || x(n);
        },
        J = y
            ? N.intl.format(N.t.hXcaLT, {
                  price:
                      O && null != V && X
                          ? (0, I.$g)(K.amount - V, K.currency)
                          : D
                            ? (0, I.$g)(0, K.currency, { minimumFractionDigits: 0, maximumFractionDigits: 0 })
                            : (0, I.$g)(K.amount, K.currency),
              })
            : (0, I.$g)(K.amount, K.currency);
    return (0, i.jsxs)(d.D, {
        role: "radio",
        "aria-checked": s,
        tabIndex: s ? 0 : -1,
        focusProps: { offset: { left: -4, right: -4, top: 0, bottom: 0 } },
        onClick: Q,
        className: a()(v.G_, { [v.vW]: G && s, [v.Gb]: G }),
        children: [
            (0, i.jsxs)("div", {
                className: a()(v.XM, { [v.PA]: w }),
                children: [
                    (0, i.jsxs)("div", {
                        className: v.l,
                        children: [
                            !G &&
                                (0, i.jsx)("div", {
                                    className: v.E2,
                                    children: (0, i.jsx)(_.S, {
                                        checked: s,
                                        value: s,
                                        label: "",
                                        description: "",
                                        onChange: Q,
                                    }),
                                }),
                            (0, i.jsxs)("div", {
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: a()(v.Gl, { [v.h4]: s || G, [v.ox]: y && (s || G) }),
                                        children: [Z, G && z()],
                                    }),
                                    G &&
                                        (0, i.jsx)("div", {
                                            className: v._R,
                                            children: N.intl.format(N.t.ori2Jm, {
                                                currencyAmount: (0, I.$g)(K.amount, K.currency),
                                            }),
                                        }),
                                ],
                            }),
                            L &&
                                (0, i.jsxs)("span", {
                                    className: v.bq,
                                    children: ["(", N.intl.string(N.t.ymSxhy), ")"],
                                }),
                            !G && z(),
                        ],
                    }),
                    y
                        ? (0, i.jsx)("div", { className: a()({ [v.kb]: s }), children: J })
                        : (0, i.jsx)("div", { className: a()({ [v.h4]: s || G }), children: J }),
                ],
            }),
            y &&
                (0, i.jsx)("div", {
                    className: v.hB,
                    children: (0, i.jsx)(c.E, {
                        variant: "text-md/normal",
                        color: s ? "text-default" : "interactive-text-default",
                        className: a()(v.Ub, { [v.sw]: O || D }),
                        children: ((e, t) => {
                            let {
                                price: n,
                                isEligibleForDiscount: i,
                                isEligibleForTrial: r,
                                discountAmountOff: s,
                                discountOffer: a,
                                isDiscountApplicableToPlan: o,
                                savingsPercent: l,
                            } = t;
                            return i && null != s && o
                                ? e.interval === C.WT.YEAR
                                    ? N.intl.format(N.t["EQmTl+"], {
                                          numYears: a?.discount.userUsageLimit ?? C.OJ,
                                          regularPrice: (0, I.$g)(n.amount, n.currency),
                                      })
                                    : N.intl.format(N.t["VeE/4E"], {
                                          numMonths: a?.discount.userUsageLimit ?? C.OJ,
                                          discountedPrice: (0, I.$g)(n.amount - s, n.currency),
                                          regularPrice: (0, I.$g)(n.amount, n.currency),
                                      })
                                : r
                                  ? R(e, n)
                                  : e.interval === C.WT.YEAR
                                    ? N.intl.formatToPlainString(N.t.rtLTJP, { percent: l ?? "" })
                                    : null;
                        })(j, {
                            price: K,
                            isEligibleForDiscount: O,
                            isEligibleForTrial: D,
                            discountAmountOff: V,
                            discountOffer: F,
                            isDiscountApplicableToPlan: X,
                            savingsPercent: W,
                        }),
                    }),
                }),
        ],
    });
}
