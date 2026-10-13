n.d(t, { Ay: () => j, O7: () => T, gS: () => b });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    a = n.n(r),
    s = n(284009),
    o = n.n(s),
    u = n(118751),
    c = n(17928),
    d = n(834730),
    p = n(939249),
    m = n(150934),
    C = n(504560),
    h = n(951305),
    f = n(773669),
    S = n(97352),
    E = n(45938),
    y = n(158045),
    A = n(580630),
    I = n(557679),
    g = n(35587),
    P = n(387278),
    v = n(202541),
    x = n(660183),
    _ = n(268431);
function T(e, t) {
    let n = e.interval === v.WT.YEAR ? x.t.ECT4A5 : x.t.v9QeON;
    return x.intl.format(n, { price: (0, A.$g)(t.amount, t.currency) });
}
function N(e) {
    return { type: "badge", textBadgeVariant: "eyebrow", text: e };
}
function b(e, t, n) {
    let {
            userLocale: l,
            isEligibleForBOGOPromotion: i,
            shouldShowSavingsPercent: r,
            isGift: a,
            planId: s,
            savingsPercent: o,
            priceOptions: c,
            isEligibleForTrial: d,
        } = n,
        p = null != e && (e.planId === s || (null != t && e.planId === t.id));
    if (i) return a || s !== v.gD.PREMIUM_MONTH_TIER_2 ? null : N(x.intl.string(x.t.iQTfWx));
    if (null != t && (t.interval !== v.WT.YEAR || null == e) && !(r && !p)) return null;
    if (
        null != t &&
        !p &&
        (0, P.sR)({ targetSubscriptionPlan: t, isGift: a, shouldShowSavingsPercent: r, isEligibleForTrial: d ?? !1 })
    ) {
        let e = (0, P.vK)(t, a, c);
        return null != e ? N(e) : null;
    }
    return null != t && t.interval === v.WT.YEAR && null != e
        ? x.intl.string(x.t["122kWB"])
        : r && !p && null != o
          ? N(x.intl.format(x.t.IAybsG, { discount: (0, u.l9)(l, o / 100) }))
          : null;
}
function j(e) {
    let {
            premiumSubscription: t,
            planId: n,
            selected: r,
            priceOptions: s,
            isPrepaid: u,
            shouldShowTrialOrDiscountLayout: P,
            isEligibleForDiscount: N,
            isEligibleForTrial: j,
            isCurrentPlan: R,
            disabled: O,
        } = e,
        M = (0, c.bG)([f.default], () => f.default.locale),
        {
            discountInfo: L,
            setSelectedPlanId: k,
            isGift: w,
        } = (0, C.t4)((e) => ({
            discountInfo: e.premiumDiscountInfo,
            setSelectedPlanId: e.setSelectedPlanId,
            isGift: e.isGift,
        })),
        { giftRecipient: D } = (0, h.Pv)(),
        U = w && (0, E.Ik)(D),
        { discountOffer: G, discountAmountOff: F, applicablePlan: B } = L,
        H = (0, c.bG)([S.A], () => S.A.get(n));
    o()(null != H, "Missing subscriptionPlan");
    let W = (0, y.m6)(H.id),
        V = (0, g.Sq)(),
        Y = (0, y.L_)({ planId: n, isGift: w, priceOptions: s, subscriptionPlan: H }),
        K = (0, y.y8)(n, !1, w, s),
        Z = null != Y && !P,
        q = i.useCallback(() => {
            let e = b(t, H, {
                userLocale: M,
                isEligibleForBOGOPromotion: V,
                shouldShowSavingsPercent: Z,
                isGift: w,
                planId: n,
                savingsPercent: Y,
                priceOptions: s,
                isEligibleForTrial: j,
            });
            return "string" == typeof e
                ? (0, l.jsxs)("span", { className: _.IS, children: ["(", e, ")"] })
                : null != e
                  ? (e.type,
                    (0, l.jsx)(d.E, {
                        tag: "span",
                        variant: e.textBadgeVariant,
                        color: "text-overlay-light",
                        className: _.kP,
                        children: e.text,
                    }))
                  : null;
        }, [M, V, H, t, Z, w, n, Y, s, j]),
        z = i.useMemo(
            () => (0, y.D8)(H.interval, w, u, H.intervalCount, U, W),
            [H.interval, H.intervalCount, w, u, U, W],
        ),
        $ = null != B && n === B;
    function Q() {
        O || r || k(n, { shouldUpdateQuantity: !(0, I.b)(n) });
    }
    let J = P
        ? x.intl.format(x.t.hXcaLT, {
              price:
                  N && null != F && $
                      ? (0, A.$g)(K.amount - F, K.currency)
                      : j
                        ? (0, A.$g)(0, K.currency, { minimumFractionDigits: 0, maximumFractionDigits: 0 })
                        : (0, A.$g)(K.amount, K.currency),
          })
        : (0, A.$g)(K.amount, K.currency);
    return (0, l.jsxs)(p.D, {
        role: "radio",
        "aria-checked": r,
        tabIndex: r ? 0 : -1,
        focusProps: { offset: { left: -4, right: -4, top: 0, bottom: 0 } },
        onClick: Q,
        className: a()(_.G_, { [_.vW]: U && r, [_.Gb]: U }),
        children: [
            (0, l.jsxs)("div", {
                className: a()(_.XM, { [_.PA]: O }),
                children: [
                    (0, l.jsxs)("div", {
                        className: _.l,
                        children: [
                            !U &&
                                (0, l.jsx)("div", {
                                    className: _.E2,
                                    children: (0, l.jsx)(m.S, {
                                        checked: r,
                                        value: r,
                                        label: "",
                                        description: "",
                                        onChange: Q,
                                    }),
                                }),
                            (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: a()(_.Gl, { [_.h4]: r || U, [_.ox]: P && (r || U) }),
                                        children: [z, U && q()],
                                    }),
                                    U &&
                                        (0, l.jsx)("div", {
                                            className: _._R,
                                            children: x.intl.format(x.t.ori2Jm, {
                                                currencyAmount: (0, A.$g)(K.amount, K.currency),
                                            }),
                                        }),
                                ],
                            }),
                            R &&
                                (0, l.jsxs)("span", {
                                    className: _.bq,
                                    children: ["(", x.intl.string(x.t.ymSxhy), ")"],
                                }),
                            !U && q(),
                        ],
                    }),
                    P
                        ? (0, l.jsx)("div", { className: a()({ [_.kb]: r }), children: J })
                        : (0, l.jsx)("div", { className: a()({ [_.h4]: r || U }), children: J }),
                ],
            }),
            P &&
                (0, l.jsx)("div", {
                    className: _.hB,
                    children: (0, l.jsx)(d.E, {
                        variant: "text-md/normal",
                        color: r ? "text-default" : "interactive-text-default",
                        className: a()(_.Ub, { [_.sw]: N || j }),
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
                                          numYears: a?.discount.intervalCount ?? v.OJ,
                                          regularPrice: (0, A.$g)(n.amount, n.currency),
                                      })
                                    : x.intl.format(x.t["VeE/4E"], {
                                          numMonths: a?.discount.intervalCount ?? v.OJ,
                                          discountedPrice: (0, A.$g)(n.amount - r, n.currency),
                                          regularPrice: (0, A.$g)(n.amount, n.currency),
                                      })
                                : i
                                  ? T(e, n)
                                  : e.interval === v.WT.YEAR
                                    ? x.intl.formatToPlainString(x.t.rtLTJP, { percent: o ?? "" })
                                    : null;
                        })(H, {
                            price: K,
                            isEligibleForDiscount: N,
                            isEligibleForTrial: j,
                            discountAmountOff: F,
                            discountOffer: G,
                            isDiscountApplicableToPlan: $,
                            savingsPercent: Y,
                        }),
                    }),
                }),
        ],
    });
}
