n.d(t, { Ay: () => T, O7: () => A, gS: () => j });
var l = n(627968),
    a = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(284009),
    u = n.n(s),
    c = n(17928),
    o = n(834730),
    d = n(939249),
    m = n(150934),
    f = n(937008),
    x = n(97352),
    p = n(252424),
    v = n(428262),
    g = n(580630),
    h = n(788868),
    b = n(375708),
    y = n(672305);
let A = (e, t) => {
        let n = e.interval === h.WT.YEAR ? b.t.ECT4A5 : b.t.v9QeON;
        return b.intl.format(n, { price: (0, g.$g)(t.amount, t.currency) });
    },
    j = (e, t, n) => {
        let {
                userLocale: l,
                isEligibleForBOGOPromotion: a,
                shouldShowSavingsPercent: r,
                isGift: i,
                planId: s,
                savingsPercent: u,
            } = n,
            c = null != e && (e.planId === s || (null != t && e.planId === t.id));
        return a
            ? i || s !== h.gD.PREMIUM_MONTH_TIER_2
                ? null
                : { type: "badge", textBadgeVariant: "eyebrow", text: b.intl.string(b.t.iQTfWx) }
            : null == t || (t.interval === h.WT.YEAR && null != e) || (r && !c)
              ? null != t && t.interval === h.WT.YEAR && null != e
                  ? b.intl.string(b.t["122kWB"])
                  : r && !c && null != u
                    ? {
                          type: "badge",
                          textBadgeVariant: "eyebrow",
                          text: b.intl.format(b.t.IAybsG, { discount: (0, p.l9)(l, u / 100) }),
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
            selected: p,
            priceOptions: T,
            isPrepaid: I,
            isCustomGift: E,
            shouldShowUpdatedPaymentModal: _,
            discountInfo: N,
            isEligibleForDiscount: P,
            isEligibleForBOGOPromotion: k,
            isEligibleForTrial: S,
            isCurrentPlan: C,
            disabled: L,
        } = e,
        { isGift: R } = (0, f.Pv)(),
        { discountOffer: D, discountAmountOff: M, applicablePlan: w } = N,
        O = (0, c.bG)([x.A], () => x.A.get(r));
    u()(null != O, "Missing subscriptionPlan");
    let G = (0, v.L_)({ planId: r, isGift: R, priceOptions: T, subscriptionPlan: O }),
        B = (0, v.y8)(r, !1, R, T),
        F = null != G && !_,
        U = a.useCallback(() => {
            let e = j(n, O, {
                userLocale: t,
                isEligibleForBOGOPromotion: k,
                shouldShowSavingsPercent: F,
                isGift: R,
                planId: r,
                savingsPercent: G,
            });
            return "string" == typeof e
                ? (0, l.jsxs)("span", { className: y.IS, children: ["(", e, ")"] })
                : null != e
                  ? (e.type,
                    (0, l.jsx)(o.E, {
                        tag: "span",
                        variant: e.textBadgeVariant,
                        color: "always-white",
                        className: y.kP,
                        children: e.text,
                    }))
                  : null;
        }, [t, k, O, n, F, R, r, G]),
        W = (0, v.m6)(O.id),
        Y = a.useMemo(
            () => (0, v.D8)(O.interval, R, I, O.intervalCount, E, W),
            [O.interval, O.intervalCount, R, I, E, W],
        ),
        H = null != w && r === w,
        V = () => {
            L || s(r);
        },
        K = _
            ? b.intl.format(b.t.hXcaLT, {
                  price:
                      P && null != M && H
                          ? (0, g.$g)(B.amount - M, B.currency)
                          : S
                            ? (0, g.$g)(0, B.currency, { minimumFractionDigits: 0, maximumFractionDigits: 0 })
                            : (0, g.$g)(B.amount, B.currency),
              })
            : (0, g.$g)(B.amount, B.currency);
    return (0, l.jsxs)(d.D, {
        role: "radio",
        "aria-checked": p,
        tabIndex: p ? 0 : -1,
        focusProps: { offset: { left: -4, right: -4, top: 0, bottom: 0 } },
        onClick: V,
        className: i()(y.G_, { [y.vW]: E && p, [y.Gb]: E }),
        children: [
            (0, l.jsxs)("div", {
                className: i()(y.XM, { [y.PA]: L }),
                children: [
                    (0, l.jsxs)("div", {
                        className: y.l,
                        children: [
                            !E &&
                                (0, l.jsx)("div", {
                                    className: y.E2,
                                    children: (0, l.jsx)(m.S, {
                                        checked: p,
                                        value: p,
                                        label: "",
                                        description: "",
                                        onChange: V,
                                    }),
                                }),
                            (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: i()(y.Gl, { [y.h4]: p || E, [y.ox]: _ && (p || E) }),
                                        children: [Y, E && U()],
                                    }),
                                    E &&
                                        (0, l.jsx)("div", {
                                            className: y._R,
                                            children: b.intl.format(b.t.ori2Jm, {
                                                currencyAmount: (0, g.$g)(B.amount, B.currency),
                                            }),
                                        }),
                                ],
                            }),
                            C &&
                                (0, l.jsxs)("span", {
                                    className: y.bq,
                                    children: ["(", b.intl.string(b.t.ymSxhy), ")"],
                                }),
                            !E && U(),
                        ],
                    }),
                    _
                        ? (0, l.jsx)("div", { className: i()({ [y.kb]: p }), children: K })
                        : (0, l.jsx)("div", { className: i()({ [y.h4]: p || E }), children: K }),
                ],
            }),
            _ &&
                (0, l.jsx)("div", {
                    className: y.hB,
                    children: (0, l.jsx)(o.E, {
                        variant: "text-md/normal",
                        color: p ? "text-default" : "interactive-text-default",
                        className: i()(y.Ub, { [y.sw]: P || S }),
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
                                ? e.interval === h.WT.YEAR
                                    ? b.intl.format(b.t["EQmTl+"], {
                                          numYears: i?.discount.userUsageLimit ?? h.OJ,
                                          regularPrice: (0, g.$g)(n.amount, n.currency),
                                      })
                                    : b.intl.format(b.t["VeE/4E"], {
                                          numMonths: i?.discount.userUsageLimit ?? h.OJ,
                                          discountedPrice: (0, g.$g)(n.amount - r, n.currency),
                                          regularPrice: (0, g.$g)(n.amount, n.currency),
                                      })
                                : a
                                  ? A(e, n)
                                  : e.interval === h.WT.YEAR
                                    ? b.intl.formatToPlainString(b.t.rtLTJP, { percent: u ?? "" })
                                    : null;
                        })(O, {
                            price: B,
                            isEligibleForDiscount: P,
                            isEligibleForTrial: S,
                            discountAmountOff: M,
                            discountOffer: D,
                            isDiscountApplicableToPlan: H,
                            savingsPercent: G,
                        }),
                    }),
                }),
        ],
    });
}
