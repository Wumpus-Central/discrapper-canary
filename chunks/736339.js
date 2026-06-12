n.d(t, { Ay: () => T, O7: () => y, gS: () => E });
var a = n(627968),
    r = n(64700),
    l = n(503698),
    i = n.n(l),
    s = n(284009),
    u = n.n(s),
    o = n(17928),
    c = n(834730),
    d = n(939249),
    m = n(150934),
    f = n(937008),
    p = n(97352),
    g = n(252424),
    b = n(428262),
    v = n(580630),
    A = n(788868),
    x = n(375708),
    h = n(672305);
let y = (e, t) => {
        let n = e.interval === A.WT.YEAR ? x.t.ECT4A5 : x.t.v9QeON;
        return x.intl.format(n, { price: (0, v.$g)(t.amount, t.currency) });
    },
    E = (e, t, n) => {
        let {
                userLocale: a,
                isEligibleForBOGOPromotion: r,
                shouldShowSavingsPercent: l,
                isGift: i,
                planId: s,
                savingsPercent: u,
            } = n,
            o = null != e && (e.planId === s || (null != t && e.planId === t.id));
        return r
            ? i || s !== A.gD.PREMIUM_MONTH_TIER_2
                ? null
                : { type: "badge", textBadgeVariant: "eyebrow", text: x.intl.string(x.t.iQTfWx) }
            : null == t || (t.interval === A.WT.YEAR && null != e) || (l && !o)
              ? null != t && t.interval === A.WT.YEAR && null != e
                  ? x.intl.string(x.t["122kWB"])
                  : l && !o && null != u
                    ? {
                          type: "badge",
                          textBadgeVariant: "eyebrow",
                          text: x.intl.format(x.t.IAybsG, { discount: (0, g.l9)(a, u / 100) }),
                      }
                    : null
              : null;
    };
function T(e) {
    let {
            userLocale: t,
            premiumSubscription: n,
            planId: l,
            selectPlan: s,
            selected: g,
            priceOptions: T,
            isPrepaid: _,
            isCustomGift: I,
            shouldShowUpdatedPaymentModal: k,
            discountInfo: P,
            isEligibleForDiscount: L,
            isEligibleForBOGOPromotion: N,
            isEligibleForTrial: S,
            isCurrentPlan: j,
            disabled: C,
        } = e,
        { isGift: R } = (0, f.Pv)(),
        { discountOffer: M, discountAmountOff: D, applicablePlan: w } = P,
        G = (0, o.bG)([p.A], () => p.A.get(l));
    u()(null != G, "Missing subscriptionPlan");
    let O = (0, b.L_)({ planId: l, isGift: R, priceOptions: T, subscriptionPlan: G }),
        B = (0, b.y8)(l, !1, R, T),
        W = null != O && !k,
        U = r.useCallback(() => {
            let e = E(n, G, {
                userLocale: t,
                isEligibleForBOGOPromotion: N,
                shouldShowSavingsPercent: W,
                isGift: R,
                planId: l,
                savingsPercent: O,
            });
            return "string" == typeof e
                ? (0, a.jsxs)("span", { className: h.IS, children: ["(", e, ")"] })
                : null != e
                  ? (e.type,
                    (0, a.jsx)(c.E, {
                        tag: "span",
                        variant: e.textBadgeVariant,
                        color: "always-white",
                        className: h.kP,
                        children: e.text,
                    }))
                  : null;
        }, [t, N, G, n, W, R, l, O]),
        F = (0, b.m6)(G.id),
        Y = r.useMemo(
            () => (0, b.D8)(G.interval, R, _, G.intervalCount, I, F),
            [G.interval, G.intervalCount, R, _, I, F],
        ),
        H = null != w && l === w,
        V = () => {
            C || s(l);
        },
        K = k
            ? x.intl.format(x.t.hXcaLT, {
                  price:
                      L && null != D && H
                          ? (0, v.$g)(B.amount - D, B.currency)
                          : S
                            ? (0, v.$g)(0, B.currency, { minimumFractionDigits: 0, maximumFractionDigits: 0 })
                            : (0, v.$g)(B.amount, B.currency),
              })
            : (0, v.$g)(B.amount, B.currency);
    return (0, a.jsxs)(d.D, {
        role: "radio",
        "aria-checked": g,
        tabIndex: g ? 0 : -1,
        focusProps: { offset: { left: -4, right: -4, top: 0, bottom: 0 } },
        onClick: V,
        className: i()(h.G_, { [h.vW]: I && g, [h.Gb]: I }),
        children: [
            (0, a.jsxs)("div", {
                className: i()(h.XM, { [h.PA]: C }),
                children: [
                    (0, a.jsxs)("div", {
                        className: h.l,
                        children: [
                            !I &&
                                (0, a.jsx)("div", {
                                    className: h.E2,
                                    children: (0, a.jsx)(m.S, {
                                        checked: g,
                                        value: g,
                                        label: "",
                                        description: "",
                                        onChange: V,
                                    }),
                                }),
                            (0, a.jsxs)("div", {
                                children: [
                                    (0, a.jsxs)("div", {
                                        className: i()(h.Gl, { [h.h4]: g || I, [h.ox]: k && (g || I) }),
                                        children: [Y, I && U()],
                                    }),
                                    I &&
                                        (0, a.jsx)("div", {
                                            className: h._R,
                                            children: x.intl.format(x.t.ori2Jm, {
                                                currencyAmount: (0, v.$g)(B.amount, B.currency),
                                            }),
                                        }),
                                ],
                            }),
                            j &&
                                (0, a.jsxs)("span", {
                                    className: h.bq,
                                    children: ["(", x.intl.string(x.t.ymSxhy), ")"],
                                }),
                            !I && U(),
                        ],
                    }),
                    k
                        ? (0, a.jsx)("div", { className: i()({ [h.kb]: g }), children: K })
                        : (0, a.jsx)("div", { className: i()({ [h.h4]: g || I }), children: K }),
                ],
            }),
            k &&
                (0, a.jsx)("div", {
                    className: h.hB,
                    children: (0, a.jsx)(c.E, {
                        variant: "text-md/normal",
                        color: g ? "text-default" : "interactive-text-default",
                        className: i()(h.Ub, { [h.sw]: L || S }),
                        children: ((e, t) => {
                            let {
                                price: n,
                                isEligibleForDiscount: a,
                                isEligibleForTrial: r,
                                discountAmountOff: l,
                                discountOffer: i,
                                isDiscountApplicableToPlan: s,
                                savingsPercent: u,
                            } = t;
                            return a && null != l && s
                                ? e.interval === A.WT.YEAR
                                    ? x.intl.format(x.t["EQmTl+"], {
                                          numYears: i?.discount.userUsageLimit ?? A.OJ,
                                          regularPrice: (0, v.$g)(n.amount, n.currency),
                                      })
                                    : x.intl.format(x.t["VeE/4E"], {
                                          numMonths: i?.discount.userUsageLimit ?? A.OJ,
                                          discountedPrice: (0, v.$g)(n.amount - l, n.currency),
                                          regularPrice: (0, v.$g)(n.amount, n.currency),
                                      })
                                : r
                                  ? y(e, n)
                                  : e.interval === A.WT.YEAR
                                    ? x.intl.formatToPlainString(x.t.rtLTJP, { percent: u ?? "" })
                                    : null;
                        })(G, {
                            price: B,
                            isEligibleForDiscount: L,
                            isEligibleForTrial: S,
                            discountAmountOff: D,
                            discountOffer: M,
                            isDiscountApplicableToPlan: H,
                            savingsPercent: O,
                        }),
                    }),
                }),
        ],
    });
}
