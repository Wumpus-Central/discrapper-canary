n.d(t, { Ay: () => T, O7: () => y, gS: () => A });
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
    x = n(937008),
    f = n(97352),
    g = n(252424),
    h = n(927578),
    p = n(580630),
    v = n(788868),
    b = n(985018),
    j = n(672305);
let y = (e, t) => {
        let n = e.interval === v.WT.YEAR ? b.t.ECT4A5 : b.t.v9QeON;
        return b.intl.format(n, { price: (0, p.$g)(t.amount, t.currency) });
    },
    A = (e, t, n) => {
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
            ? i || s !== v.gD.PREMIUM_MONTH_TIER_2
                ? null
                : { type: "badge", textBadgeVariant: "eyebrow", text: b.intl.string(b.t.iQTfWx) }
            : null == t || (t.interval === v.WT.YEAR && null != e) || (r && !o)
              ? null != t && t.interval === v.WT.YEAR && null != e
                  ? b.intl.string(b.t["122kWB"])
                  : r && !o && null != u
                    ? {
                          type: "badge",
                          textBadgeVariant: "eyebrow",
                          text: b.intl.format(b.t.IAybsG, { discount: (0, g.l9)(l, u / 100) }),
                      }
                    : null
              : null;
    };
function T(e) {
    let {
            userLocale: t,
            premiumSubscription: n,
            planId: r,
            selectPlan: s,
            selected: g,
            priceOptions: T,
            isPrepaid: N,
            isCustomGift: E,
            shouldUseCalculatedDiscount: S,
            shouldShowUpdatedPaymentModal: C,
            discountOffer: P,
            discountAmountOff: k,
            isEligibleForDiscount: I,
            isEligibleForBOGOPromotion: _,
            isEligibleForTrial: L,
            isCurrentPlan: w,
            disabled: M,
        } = e,
        { isGift: O } = (0, x.Pv)(),
        G = (0, o.bG)([f.A], () => f.A.get(r));
    u()(null != G, "Missing subscriptionPlan");
    let R = (0, h.L_)({ planId: r, shouldUseCalculatedDiscount: S, isGift: O, priceOptions: T, subscriptionPlan: G }),
        D = (0, h.y8)(r, !1, O, T),
        W = null != R && !C,
        B = a.useCallback(() => {
            let e = A(n, G, {
                userLocale: t,
                isEligibleForBOGOPromotion: _,
                shouldShowSavingsPercent: W,
                isGift: O,
                planId: r,
                savingsPercent: R,
            });
            return "string" == typeof e
                ? (0, l.jsxs)("span", { className: j.IS, children: ["(", e, ")"] })
                : null != e && "badge" === e.type
                  ? (0, l.jsx)(c.E, {
                        tag: "span",
                        variant: e.textBadgeVariant,
                        color: "always-white",
                        className: j.kP,
                        children: e.text,
                    })
                  : null;
        }, [t, _, G, n, W, O, r, R]),
        Y = (0, h.m6)(G.id),
        F = a.useMemo(
            () => (0, h.D8)(G.interval, O, N, G.intervalCount, E, Y),
            [G.interval, G.intervalCount, O, N, E, Y],
        ),
        U = () => {
            M || s(r);
        },
        $ = C
            ? b.intl.format(b.t.hXcaLT, {
                  price:
                      I && null != k && G.interval === v.WT.MONTH
                          ? (0, p.$g)(D.amount - k, D.currency)
                          : L
                            ? (0, p.$g)(0, D.currency, { minimumFractionDigits: 0, maximumFractionDigits: 0 })
                            : (0, p.$g)(D.amount, D.currency),
              })
            : (0, p.$g)(D.amount, D.currency);
    return (0, l.jsxs)(d.D, {
        role: E ? "menuitem" : "radio",
        "aria-checked": g,
        tabIndex: E || g ? 0 : -1,
        focusProps: { offset: { left: -4, right: -4, top: 0, bottom: 0 } },
        onClick: U,
        className: i()(j.G_, { [j.vW]: E && g, [j.Gb]: E }),
        children: [
            (0, l.jsxs)("div", {
                className: i()(j.XM, { [j.PA]: M }),
                children: [
                    (0, l.jsxs)("div", {
                        className: j.l,
                        children: [
                            !E &&
                                (0, l.jsx)("div", {
                                    className: j.E2,
                                    children: (0, l.jsx)(m.S, {
                                        checked: g,
                                        value: g,
                                        label: "",
                                        description: "",
                                        onChange: U,
                                    }),
                                }),
                            (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: i()(j.Gl, { [j.h4]: g || E, [j.ox]: C && (g || E) }),
                                        children: [F, E && B()],
                                    }),
                                    E &&
                                        (0, l.jsx)("div", {
                                            className: j._R,
                                            children: b.intl.format(b.t.ori2Jm, {
                                                currencyAmount: (0, p.$g)(D.amount, D.currency),
                                            }),
                                        }),
                                ],
                            }),
                            w &&
                                (0, l.jsxs)("span", {
                                    className: j.bq,
                                    children: ["(", b.intl.string(b.t.ymSxhy), ")"],
                                }),
                            !E && B(),
                        ],
                    }),
                    C
                        ? (0, l.jsx)("div", { className: i()({ [j.kb]: g }), children: $ })
                        : (0, l.jsx)("div", { className: i()({ [j.h4]: g || E }), children: $ }),
                ],
            }),
            C &&
                (0, l.jsx)("div", {
                    className: j.hB,
                    children: (0, l.jsx)(c.E, {
                        variant: "text-md/normal",
                        color: g ? "text-default" : "interactive-text-default",
                        className: i()(j.Ub, { [j.sw]: I || L }),
                        children: ((e, t) => {
                            let {
                                price: n,
                                isEligibleForDiscount: l,
                                isEligibleForTrial: a,
                                discountAmountOff: r,
                                discountOffer: i,
                                savingsPercent: s,
                            } = t;
                            return l && null != r && e.interval === v.WT.MONTH
                                ? b.intl.format(b.t["VeE/4E"], {
                                      numMonths: i?.discount.user_usage_limit ?? v.OJ,
                                      discountedPrice: (0, p.$g)(n.amount - r, n.currency),
                                      regularPrice: (0, p.$g)(n.amount, n.currency),
                                  })
                                : a
                                  ? y(e, n)
                                  : e.interval === v.WT.YEAR
                                    ? b.intl.formatToPlainString(b.t.rtLTJP, { percent: s ?? "" })
                                    : null;
                        })(G, {
                            price: D,
                            isEligibleForDiscount: I,
                            isEligibleForTrial: L,
                            discountAmountOff: k,
                            discountOffer: P,
                            savingsPercent: R,
                        }),
                    }),
                }),
        ],
    });
}
