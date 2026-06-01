n.d(t, { Ay: () => j, O7: () => A, gS: () => I });
var l = n(627968),
    a = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(284009),
    u = n.n(s),
    o = n(17928),
    c = n(834730),
    d = n(939249),
    m = n(150934),
    p = n(937008),
    f = n(97352),
    g = n(252424),
    v = n(428262),
    x = n(580630),
    b = n(788868),
    h = n(375708),
    y = n(672305);
let A = (e, t) => {
        let n = e.interval === b.WT.YEAR ? h.t.ECT4A5 : h.t.v9QeON;
        return h.intl.format(n, { price: (0, x.$g)(t.amount, t.currency) });
    },
    I = (e, t, n) => {
        let {
                userLocale: l,
                isEligibleForBOGOPromotion: a,
                shouldShowSavingsPercent: r,
                isGift: i,
                planId: s,
                savingsPercent: u,
            } = n,
            o = null != e && (e.planId === s || (null != t && e.planId === t.id));
        return a
            ? i || s !== b.gD.PREMIUM_MONTH_TIER_2
                ? null
                : { type: "badge", textBadgeVariant: "eyebrow", text: h.intl.string(h.t.iQTfWx) }
            : null == t || (t.interval === b.WT.YEAR && null != e) || (r && !o)
              ? null != t && t.interval === b.WT.YEAR && null != e
                  ? h.intl.string(h.t["122kWB"])
                  : r && !o && null != u
                    ? {
                          type: "badge",
                          textBadgeVariant: "eyebrow",
                          text: h.intl.format(h.t.IAybsG, { discount: (0, g.l9)(l, u / 100) }),
                      }
                    : null
              : null;
    };
function j(e) {
    let {
            userLocale: t,
            premiumSubscription: n,
            planId: r,
            selectPlan: s,
            selected: g,
            priceOptions: j,
            isPrepaid: T,
            isCustomGift: P,
            shouldShowUpdatedPaymentModal: _,
            discountInfo: E,
            isEligibleForDiscount: N,
            isEligibleForBOGOPromotion: S,
            isEligibleForTrial: R,
            isCurrentPlan: L,
            disabled: M,
        } = e,
        { isGift: C } = (0, p.Pv)(),
        { discountOffer: k, discountAmountOff: D, applicablePlan: U } = E,
        O = (0, o.bG)([f.A], () => f.A.get(r));
    u()(null != O, "Missing subscriptionPlan");
    let w = (0, v.L_)({ planId: r, isGift: C, priceOptions: j, subscriptionPlan: O }),
        G = (0, v.y8)(r, !1, C, j),
        B = null != w && !_,
        W = a.useCallback(() => {
            let e = I(n, O, {
                userLocale: t,
                isEligibleForBOGOPromotion: S,
                shouldShowSavingsPercent: B,
                isGift: C,
                planId: r,
                savingsPercent: w,
            });
            return "string" == typeof e
                ? (0, l.jsxs)("span", { className: y.IS, children: ["(", e, ")"] })
                : null != e && "badge" === e.type
                  ? (0, l.jsx)(c.E, {
                        tag: "span",
                        variant: e.textBadgeVariant,
                        color: "always-white",
                        className: y.kP,
                        children: e.text,
                    })
                  : null;
        }, [t, S, O, n, B, C, r, w]),
        F = (0, v.m6)(O.id),
        Y = a.useMemo(
            () => (0, v.D8)(O.interval, C, T, O.intervalCount, P, F),
            [O.interval, O.intervalCount, C, T, P, F],
        ),
        H = null != U && r === U,
        V = () => {
            M || s(r);
        },
        K = _
            ? h.intl.format(h.t.hXcaLT, {
                  price:
                      N && null != D && H
                          ? (0, x.$g)(G.amount - D, G.currency)
                          : R
                            ? (0, x.$g)(0, G.currency, { minimumFractionDigits: 0, maximumFractionDigits: 0 })
                            : (0, x.$g)(G.amount, G.currency),
              })
            : (0, x.$g)(G.amount, G.currency);
    return (0, l.jsxs)(d.D, {
        role: "radio",
        "aria-checked": g,
        tabIndex: g ? 0 : -1,
        focusProps: { offset: { left: -4, right: -4, top: 0, bottom: 0 } },
        onClick: V,
        className: i()(y.G_, { [y.vW]: P && g, [y.Gb]: P }),
        children: [
            (0, l.jsxs)("div", {
                className: i()(y.XM, { [y.PA]: M }),
                children: [
                    (0, l.jsxs)("div", {
                        className: y.l,
                        children: [
                            !P &&
                                (0, l.jsx)("div", {
                                    className: y.E2,
                                    children: (0, l.jsx)(m.S, {
                                        checked: g,
                                        value: g,
                                        label: "",
                                        description: "",
                                        onChange: V,
                                    }),
                                }),
                            (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: i()(y.Gl, { [y.h4]: g || P, [y.ox]: _ && (g || P) }),
                                        children: [Y, P && W()],
                                    }),
                                    P &&
                                        (0, l.jsx)("div", {
                                            className: y._R,
                                            children: h.intl.format(h.t.ori2Jm, {
                                                currencyAmount: (0, x.$g)(G.amount, G.currency),
                                            }),
                                        }),
                                ],
                            }),
                            L &&
                                (0, l.jsxs)("span", {
                                    className: y.bq,
                                    children: ["(", h.intl.string(h.t.ymSxhy), ")"],
                                }),
                            !P && W(),
                        ],
                    }),
                    _
                        ? (0, l.jsx)("div", { className: i()({ [y.kb]: g }), children: K })
                        : (0, l.jsx)("div", { className: i()({ [y.h4]: g || P }), children: K }),
                ],
            }),
            _ &&
                (0, l.jsx)("div", {
                    className: y.hB,
                    children: (0, l.jsx)(c.E, {
                        variant: "text-md/normal",
                        color: g ? "text-default" : "interactive-text-default",
                        className: i()(y.Ub, { [y.sw]: N || R }),
                        children: ((e, t) => {
                            let {
                                price: n,
                                isEligibleForDiscount: l,
                                isEligibleForTrial: a,
                                discountAmountOff: r,
                                discountOffer: i,
                                isDiscountApplicableToPlan: s,
                                savingsPercent: u,
                            } = t;
                            return l && null != r && s
                                ? e.interval === b.WT.YEAR
                                    ? h.intl.format(h.t["EQmTl+"], {
                                          numYears: i?.discount.userUsageLimit ?? b.OJ,
                                          regularPrice: (0, x.$g)(n.amount, n.currency),
                                      })
                                    : h.intl.format(h.t["VeE/4E"], {
                                          numMonths: i?.discount.userUsageLimit ?? b.OJ,
                                          discountedPrice: (0, x.$g)(n.amount - r, n.currency),
                                          regularPrice: (0, x.$g)(n.amount, n.currency),
                                      })
                                : a
                                  ? A(e, n)
                                  : e.interval === b.WT.YEAR
                                    ? h.intl.formatToPlainString(h.t.rtLTJP, { percent: u ?? "" })
                                    : null;
                        })(O, {
                            price: G,
                            isEligibleForDiscount: N,
                            isEligibleForTrial: R,
                            discountAmountOff: D,
                            discountOffer: k,
                            isDiscountApplicableToPlan: H,
                            savingsPercent: w,
                        }),
                    }),
                }),
        ],
    });
}
