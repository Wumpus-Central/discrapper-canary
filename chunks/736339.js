l.d(t, { Ay: () => A, O7: () => b, gS: () => j });
var n = l(627968),
    r = l(64700),
    a = l(503698),
    i = l.n(a),
    s = l(284009),
    u = l.n(s),
    o = l(17928),
    c = l(834730),
    d = l(939249),
    m = l(150934),
    x = l(937008),
    f = l(97352),
    h = l(252424),
    p = l(927578),
    g = l(580630),
    C = l(788868),
    v = l(375708),
    y = l(672305);
let b = (e, t) => {
        let l = e.interval === C.WT.YEAR ? v.t.ECT4A5 : v.t.v9QeON;
        return v.intl.format(l, { price: (0, g.$g)(t.amount, t.currency) });
    },
    j = (e, t, l) => {
        let {
                userLocale: n,
                isEligibleForBOGOPromotion: r,
                shouldShowSavingsPercent: a,
                isGift: i,
                planId: s,
                savingsPercent: u,
            } = l,
            o = null != e && (e.planId === s || (null != t && e.planId === t.id));
        return r
            ? i || s !== C.gD.PREMIUM_MONTH_TIER_2
                ? null
                : { type: "badge", textBadgeVariant: "eyebrow", text: v.intl.string(v.t.iQTfWx) }
            : null == t || (t.interval === C.WT.YEAR && null != e) || (a && !o)
              ? null != t && t.interval === C.WT.YEAR && null != e
                  ? v.intl.string(v.t["122kWB"])
                  : a && !o && null != u
                    ? {
                          type: "badge",
                          textBadgeVariant: "eyebrow",
                          text: v.intl.format(v.t.IAybsG, { discount: (0, h.l9)(n, u / 100) }),
                      }
                    : null
              : null;
    };
function A(e) {
    let {
            userLocale: t,
            premiumSubscription: l,
            planId: a,
            selectPlan: s,
            selected: h,
            priceOptions: A,
            isPrepaid: T,
            isCustomGift: N,
            shouldUseCalculatedDiscount: L,
            shouldShowUpdatedPaymentModal: E,
            discountOffer: S,
            discountAmountOff: _,
            isEligibleForDiscount: w,
            isEligibleForBOGOPromotion: P,
            isEligibleForTrial: I,
            isCurrentPlan: M,
            disabled: k,
        } = e,
        { isGift: O } = (0, x.Pv)(),
        G = (0, o.bG)([f.A], () => f.A.get(a));
    u()(null != G, "Missing subscriptionPlan");
    let R = (0, p.L_)({ planId: a, shouldUseCalculatedDiscount: L, isGift: O, priceOptions: A, subscriptionPlan: G }),
        D = (0, p.y8)(a, !1, O, A),
        B = null != R && !E,
        U = r.useCallback(() => {
            let e = j(l, G, {
                userLocale: t,
                isEligibleForBOGOPromotion: P,
                shouldShowSavingsPercent: B,
                isGift: O,
                planId: a,
                savingsPercent: R,
            });
            return "string" == typeof e
                ? (0, n.jsxs)("span", { className: y.IS, children: ["(", e, ")"] })
                : null != e && "badge" === e.type
                  ? (0, n.jsx)(c.E, {
                        tag: "span",
                        variant: e.textBadgeVariant,
                        color: "always-white",
                        className: y.kP,
                        children: e.text,
                    })
                  : null;
        }, [t, P, G, l, B, O, a, R]),
        V = (0, p.m6)(G.id),
        F = r.useMemo(
            () => (0, p.D8)(G.interval, O, T, G.intervalCount, N, V),
            [G.interval, G.intervalCount, O, T, N, V],
        ),
        W = () => {
            k || s(a);
        },
        Y = E
            ? v.intl.format(v.t.hXcaLT, {
                  price:
                      w && null != _ && G.interval === C.WT.MONTH
                          ? (0, g.$g)(D.amount - _, D.currency)
                          : I
                            ? (0, g.$g)(0, D.currency, { minimumFractionDigits: 0, maximumFractionDigits: 0 })
                            : (0, g.$g)(D.amount, D.currency),
              })
            : (0, g.$g)(D.amount, D.currency);
    return (0, n.jsxs)(d.D, {
        role: N ? "menuitem" : "radio",
        "aria-checked": h,
        tabIndex: N || h ? 0 : -1,
        focusProps: { offset: { left: -4, right: -4, top: 0, bottom: 0 } },
        onClick: W,
        className: i()(y.G_, { [y.vW]: N && h, [y.Gb]: N }),
        children: [
            (0, n.jsxs)("div", {
                className: i()(y.XM, { [y.PA]: k }),
                children: [
                    (0, n.jsxs)("div", {
                        className: y.l,
                        children: [
                            !N &&
                                (0, n.jsx)("div", {
                                    className: y.E2,
                                    children: (0, n.jsx)(m.S, {
                                        checked: h,
                                        value: h,
                                        label: "",
                                        description: "",
                                        onChange: W,
                                    }),
                                }),
                            (0, n.jsxs)("div", {
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: i()(y.Gl, { [y.h4]: h || N, [y.ox]: E && (h || N) }),
                                        children: [F, N && U()],
                                    }),
                                    N &&
                                        (0, n.jsx)("div", {
                                            className: y._R,
                                            children: v.intl.format(v.t.ori2Jm, {
                                                currencyAmount: (0, g.$g)(D.amount, D.currency),
                                            }),
                                        }),
                                ],
                            }),
                            M &&
                                (0, n.jsxs)("span", {
                                    className: y.bq,
                                    children: ["(", v.intl.string(v.t.ymSxhy), ")"],
                                }),
                            !N && U(),
                        ],
                    }),
                    E
                        ? (0, n.jsx)("div", { className: i()({ [y.kb]: h }), children: Y })
                        : (0, n.jsx)("div", { className: i()({ [y.h4]: h || N }), children: Y }),
                ],
            }),
            E &&
                (0, n.jsx)("div", {
                    className: y.hB,
                    children: (0, n.jsx)(c.E, {
                        variant: "text-md/normal",
                        color: h ? "text-default" : "interactive-text-default",
                        className: i()(y.Ub, { [y.sw]: w || I }),
                        children: ((e, t) => {
                            let {
                                price: l,
                                isEligibleForDiscount: n,
                                isEligibleForTrial: r,
                                discountAmountOff: a,
                                discountOffer: i,
                                savingsPercent: s,
                            } = t;
                            return n && null != a && e.interval === C.WT.MONTH
                                ? v.intl.format(v.t["VeE/4E"], {
                                      numMonths: i?.discount.userUsageLimit ?? C.OJ,
                                      discountedPrice: (0, g.$g)(l.amount - a, l.currency),
                                      regularPrice: (0, g.$g)(l.amount, l.currency),
                                  })
                                : r
                                  ? b(e, l)
                                  : e.interval === C.WT.YEAR
                                    ? v.intl.formatToPlainString(v.t.rtLTJP, { percent: s ?? "" })
                                    : null;
                        })(G, {
                            price: D,
                            isEligibleForDiscount: w,
                            isEligibleForTrial: I,
                            discountAmountOff: _,
                            discountOffer: S,
                            savingsPercent: R,
                        }),
                    }),
                }),
        ],
    });
}
