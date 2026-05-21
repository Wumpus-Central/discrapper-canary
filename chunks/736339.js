l.d(t, { Ay: () => N, O7: () => L, gS: () => E });
var n = l(627968),
    s = l(64700),
    r = l(503698),
    a = l.n(r),
    i = l(284009),
    c = l.n(i),
    d = l(17928),
    u = l(834730),
    o = l(939249),
    m = l(150934),
    x = l(937008),
    h = l(97352),
    C = l(252424),
    v = l(428262),
    p = l(580630),
    g = l(788868),
    j = l(375708),
    f = l(672305);
let L = (e, t) => {
        let l = e.interval === g.WT.YEAR ? j.t.ECT4A5 : j.t.v9QeON;
        return j.intl.format(l, { price: (0, p.$g)(t.amount, t.currency) });
    },
    E = (e, t, l) => {
        let {
                userLocale: n,
                isEligibleForBOGOPromotion: s,
                shouldShowSavingsPercent: r,
                isGift: a,
                planId: i,
                savingsPercent: c,
            } = l,
            d = null != e && (e.planId === i || (null != t && e.planId === t.id));
        return s
            ? a || i !== g.gD.PREMIUM_MONTH_TIER_2
                ? null
                : { type: "badge", textBadgeVariant: "eyebrow", text: j.intl.string(j.t.iQTfWx) }
            : null == t || (t.interval === g.WT.YEAR && null != e) || (r && !d)
              ? null != t && t.interval === g.WT.YEAR && null != e
                  ? j.intl.string(j.t["122kWB"])
                  : r && !d && null != c
                    ? {
                          type: "badge",
                          textBadgeVariant: "eyebrow",
                          text: j.intl.format(j.t.IAybsG, { discount: (0, C.l9)(n, c / 100) }),
                      }
                    : null
              : null;
    };
function N(e) {
    let {
            userLocale: t,
            premiumSubscription: l,
            planId: r,
            selectPlan: i,
            selected: C,
            priceOptions: N,
            isPrepaid: b,
            isCustomGift: T,
            shouldShowUpdatedPaymentModal: A,
            discountOffer: y,
            discountAmountOff: _,
            discountOfferPlanId: I,
            isEligibleForDiscount: w,
            isEligibleForBOGOPromotion: S,
            isEligibleForTrial: M,
            isCurrentPlan: k,
            disabled: P,
        } = e,
        { isGift: R } = (0, x.Pv)(),
        G = (0, d.bG)([h.A], () => h.A.get(r));
    c()(null != G, "Missing subscriptionPlan");
    let O = (0, v.L_)({ planId: r, isGift: R, priceOptions: N, subscriptionPlan: G }),
        D = (0, v.y8)(r, !1, R, N),
        U = null != O && !A,
        V = s.useCallback(() => {
            let e = E(l, G, {
                userLocale: t,
                isEligibleForBOGOPromotion: S,
                shouldShowSavingsPercent: U,
                isGift: R,
                planId: r,
                savingsPercent: O,
            });
            return "string" == typeof e
                ? (0, n.jsxs)("span", { className: f.IS, children: ["(", e, ")"] })
                : null != e && "badge" === e.type
                  ? (0, n.jsx)(u.E, {
                        tag: "span",
                        variant: e.textBadgeVariant,
                        color: "always-white",
                        className: f.kP,
                        children: e.text,
                    })
                  : null;
        }, [t, S, G, l, U, R, r, O]),
        B = (0, v.m6)(G.id),
        Z = s.useMemo(
            () => (0, v.D8)(G.interval, R, b, G.intervalCount, T, B),
            [G.interval, G.intervalCount, R, b, T, B],
        ),
        H = null != I && r === I,
        z = () => {
            P || i(r);
        },
        Y = A
            ? j.intl.format(j.t.hXcaLT, {
                  price:
                      w && null != _ && H
                          ? (0, p.$g)(D.amount - _, D.currency)
                          : M
                            ? (0, p.$g)(0, D.currency, { minimumFractionDigits: 0, maximumFractionDigits: 0 })
                            : (0, p.$g)(D.amount, D.currency),
              })
            : (0, p.$g)(D.amount, D.currency);
    return (0, n.jsxs)(o.D, {
        role: "radio",
        "aria-checked": C,
        tabIndex: C ? 0 : -1,
        focusProps: { offset: { left: -4, right: -4, top: 0, bottom: 0 } },
        onClick: z,
        className: a()(f.G_, { [f.vW]: T && C, [f.Gb]: T }),
        children: [
            (0, n.jsxs)("div", {
                className: a()(f.XM, { [f.PA]: P }),
                children: [
                    (0, n.jsxs)("div", {
                        className: f.l,
                        children: [
                            !T &&
                                (0, n.jsx)("div", {
                                    className: f.E2,
                                    children: (0, n.jsx)(m.S, {
                                        checked: C,
                                        value: C,
                                        label: "",
                                        description: "",
                                        onChange: z,
                                    }),
                                }),
                            (0, n.jsxs)("div", {
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: a()(f.Gl, { [f.h4]: C || T, [f.ox]: A && (C || T) }),
                                        children: [Z, T && V()],
                                    }),
                                    T &&
                                        (0, n.jsx)("div", {
                                            className: f._R,
                                            children: j.intl.format(j.t.ori2Jm, {
                                                currencyAmount: (0, p.$g)(D.amount, D.currency),
                                            }),
                                        }),
                                ],
                            }),
                            k &&
                                (0, n.jsxs)("span", {
                                    className: f.bq,
                                    children: ["(", j.intl.string(j.t.ymSxhy), ")"],
                                }),
                            !T && V(),
                        ],
                    }),
                    A
                        ? (0, n.jsx)("div", { className: a()({ [f.kb]: C }), children: Y })
                        : (0, n.jsx)("div", { className: a()({ [f.h4]: C || T }), children: Y }),
                ],
            }),
            A &&
                (0, n.jsx)("div", {
                    className: f.hB,
                    children: (0, n.jsx)(u.E, {
                        variant: "text-md/normal",
                        color: C ? "text-default" : "interactive-text-default",
                        className: a()(f.Ub, { [f.sw]: w || M }),
                        children: ((e, t) => {
                            let {
                                price: l,
                                isEligibleForDiscount: n,
                                isEligibleForTrial: s,
                                discountAmountOff: r,
                                discountOffer: a,
                                isDiscountApplicableToPlan: i,
                                savingsPercent: c,
                            } = t;
                            return n && null != r && i
                                ? e.interval === g.WT.YEAR
                                    ? j.intl.format(j.t["EQmTl+"], {
                                          numYears: a?.discount.userUsageLimit ?? g.OJ,
                                          regularPrice: (0, p.$g)(l.amount, l.currency),
                                      })
                                    : j.intl.format(j.t["VeE/4E"], {
                                          numMonths: a?.discount.userUsageLimit ?? g.OJ,
                                          discountedPrice: (0, p.$g)(l.amount - r, l.currency),
                                          regularPrice: (0, p.$g)(l.amount, l.currency),
                                      })
                                : s
                                  ? L(e, l)
                                  : e.interval === g.WT.YEAR
                                    ? j.intl.formatToPlainString(j.t.rtLTJP, { percent: c ?? "" })
                                    : null;
                        })(G, {
                            price: D,
                            isEligibleForDiscount: w,
                            isEligibleForTrial: M,
                            discountAmountOff: _,
                            discountOffer: y,
                            isDiscountApplicableToPlan: H,
                            savingsPercent: O,
                        }),
                    }),
                }),
        ],
    });
}
