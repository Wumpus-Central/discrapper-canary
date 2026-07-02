"use strict";
n.d(t, { O7: () => b, Ay: () => P, gS: () => D });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(284009),
    l = n.n(o),
    u = n(17928),
    d = n(834730),
    c = n(939249),
    _ = n(150934),
    h = n(663803),
    f = n(650170),
    E = n(937008),
    p = n(773669),
    m = n(97352),
    g = n(45938),
    A = n(252424),
    I = n(428262),
    T = n(580630),
    S = n(960851),
    N = n(986883);
let C = (0, n(945810).mj)({
    name: "2026-06-bulk-nitro-gifting",
    kind: "user",
    defaultConfig: !1,
    variations: { 0: !1, 1: !0 },
});
var y = n(186223),
    v = n(202541),
    R = n(375708),
    O = n(672305);
function b(e, t) {
    let n = e.interval === v.WT.YEAR ? R.t.ECT4A5 : R.t.v9QeON;
    return R.intl.format(n, { price: (0, T.$g)(t.amount, t.currency) });
}
function L(e) {
    return { type: "badge", textBadgeVariant: "eyebrow", text: e };
}
function D(e, t, n) {
    let {
            userLocale: i,
            isEligibleForBOGOPromotion: r,
            shouldShowSavingsPercent: s,
            isGift: a,
            planId: o,
            savingsPercent: l,
            priceOptions: u,
            annualPlanCheckoutCopyTreatment: d,
            isEligibleForTrial: c,
        } = n,
        _ = null != e && (e.planId === o || (null != t && e.planId === t.id));
    if (r) return a || o !== v.gD.PREMIUM_MONTH_TIER_2 ? null : L(R.intl.string(R.t.iQTfWx));
    if (null != t && (t.interval !== v.WT.YEAR || null == e) && !(s && !_)) return null;
    if (
        null != t &&
        !_ &&
        (0, y.is)({
            treatment: d,
            targetSubscriptionPlan: t,
            isGift: a,
            shouldShowSavingsPercent: s,
            isEligibleForTrial: c ?? !1,
        })
    ) {
        let e = (0, y.ou)(d, t, a, u);
        return null != e ? L(e) : null;
    }
    return null != t && t.interval === v.WT.YEAR && null != e
        ? R.intl.string(R.t["122kWB"])
        : s && !_ && null != l
          ? L(R.intl.format(R.t.IAybsG, { discount: (0, A.l9)(i, l / 100) }))
          : null;
}
function P(e) {
    let {
            premiumSubscription: t,
            planId: n,
            selected: s,
            priceOptions: o,
            isPrepaid: A,
            shouldShowTrialOrDiscountLayout: y,
            isEligibleForDiscount: L,
            isEligibleForTrial: P,
            isCurrentPlan: w,
            disabled: M,
        } = e,
        x = (0, u.bG)([p.default], () => p.default.locale),
        {
            discountInfo: U,
            setSelectedPlanId: k,
            isGift: G,
            quantity: V,
            setQuantity: F,
        } = (0, f.t4)((e) => ({
            discountInfo: e.premiumDiscountInfo,
            setSelectedPlanId: e.setSelectedPlanId,
            isGift: e.isGift,
            quantity: e.quantity,
            setQuantity: e.setQuantity,
        })),
        { giftRecipient: B } = (0, E.Pv)(),
        j = G && (0, g.Ik)(B),
        { discountOffer: H, discountAmountOff: W, applicablePlan: Y } = U,
        K = (0, u.bG)([m.A], () => m.A.get(n));
    l()(null != K, "Missing subscriptionPlan");
    let $ = (0, I.m6)(K.id),
        z = (0, S.cg)(),
        q = (0, N.DQ)({ location: "PremiumSwitchPlanSelectOption" }),
        Z =
            (function (e) {
                let { location: t } = e;
                return C.useConfig({ location: t });
            })({ location: "PremiumSwitchPlanSelectOption" }) && $ === v.PremiumTypes.TIER_2,
        X = (0, I.L_)({ planId: n, isGift: G, priceOptions: o, subscriptionPlan: K }),
        Q = (0, I.y8)(n, !1, G, o),
        J = null != X && !y,
        ee = r.useCallback(() => {
            let e = D(t, K, {
                userLocale: x,
                isEligibleForBOGOPromotion: z,
                shouldShowSavingsPercent: J,
                isGift: G,
                planId: n,
                savingsPercent: X,
                priceOptions: o,
                annualPlanCheckoutCopyTreatment: q,
                isEligibleForTrial: P,
            });
            return "string" == typeof e
                ? (0, i.jsxs)("span", { className: O.IS, children: ["(", e, ")"] })
                : null != e
                  ? (e.type,
                    (0, i.jsx)(d.E, {
                        tag: "span",
                        variant: e.textBadgeVariant,
                        color: "always-white",
                        className: O.kP,
                        children: e.text,
                    }))
                  : null;
        }, [x, z, K, t, J, G, n, X, o, q, P]),
        et = r.useMemo(
            () => (0, I.D8)(K.interval, G, A, K.intervalCount, j, $),
            [K.interval, K.intervalCount, G, A, j, $],
        ),
        en = null != Y && n === Y;
    function ei() {
        M || s || k(n);
    }
    let er = y
        ? R.intl.format(R.t.hXcaLT, {
              price:
                  L && null != W && en
                      ? (0, T.$g)(Q.amount - W, Q.currency)
                      : P
                        ? (0, T.$g)(0, Q.currency, { minimumFractionDigits: 0, maximumFractionDigits: 0 })
                        : (0, T.$g)(Q.amount, Q.currency),
          })
        : (0, T.$g)(Q.amount, Q.currency);
    return (0, i.jsxs)(c.D, {
        role: "radio",
        "aria-checked": s,
        tabIndex: s ? 0 : -1,
        focusProps: { offset: { left: -4, right: -4, top: 0, bottom: 0 } },
        onClick: ei,
        className: a()(O.G_, { [O.vW]: j && s, [O.Gb]: j }),
        children: [
            (0, i.jsxs)("div", {
                className: a()(O.XM, { [O.PA]: M }),
                children: [
                    (0, i.jsxs)("div", {
                        className: O.l,
                        children: [
                            !j &&
                                (0, i.jsx)("div", {
                                    className: O.E2,
                                    children: (0, i.jsx)(_.S, {
                                        checked: s,
                                        value: s,
                                        label: "",
                                        description: "",
                                        onChange: ei,
                                    }),
                                }),
                            (0, i.jsxs)("div", {
                                children: [
                                    (0, i.jsxs)("div", {
                                        className: a()(O.Gl, { [O.h4]: s || j, [O.ox]: y && (s || j) }),
                                        children: [et, j && ee()],
                                    }),
                                    j &&
                                        (0, i.jsx)("div", {
                                            className: O._R,
                                            children: R.intl.format(R.t.ori2Jm, {
                                                currencyAmount: (0, T.$g)(Q.amount, Q.currency),
                                            }),
                                        }),
                                ],
                            }),
                            w &&
                                (0, i.jsxs)("span", {
                                    className: O.bq,
                                    children: ["(", R.intl.string(R.t.ymSxhy), ")"],
                                }),
                            !j && ee(),
                        ],
                    }),
                    y
                        ? (0, i.jsx)("div", { className: a()({ [O.kb]: s }), children: er })
                        : (0, i.jsx)("div", { className: a()({ [O.h4]: s || j }), children: er }),
                ],
            }),
            j &&
                s &&
                Z &&
                (0, i.jsx)("div", {
                    className: O.ci,
                    children: (0, i.jsx)(h.l, { value: V, onChange: F, minValue: f.y0, maxValue: 50 }),
                }),
            y &&
                (0, i.jsx)("div", {
                    className: O.hB,
                    children: (0, i.jsx)(d.E, {
                        variant: "text-md/normal",
                        color: s ? "text-default" : "interactive-text-default",
                        className: a()(O.Ub, { [O.sw]: L || P }),
                        children: (function (e, t) {
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
                                ? e.interval === v.WT.YEAR
                                    ? R.intl.format(R.t["EQmTl+"], {
                                          numYears: a?.discount.userUsageLimit ?? v.OJ,
                                          regularPrice: (0, T.$g)(n.amount, n.currency),
                                      })
                                    : R.intl.format(R.t["VeE/4E"], {
                                          numMonths: a?.discount.userUsageLimit ?? v.OJ,
                                          discountedPrice: (0, T.$g)(n.amount - s, n.currency),
                                          regularPrice: (0, T.$g)(n.amount, n.currency),
                                      })
                                : r
                                  ? b(e, n)
                                  : e.interval === v.WT.YEAR
                                    ? R.intl.formatToPlainString(R.t.rtLTJP, { percent: l ?? "" })
                                    : null;
                        })(K, {
                            price: Q,
                            isEligibleForDiscount: L,
                            isEligibleForTrial: P,
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
