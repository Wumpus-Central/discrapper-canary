l.d(t, { Ay: () => E, O7: () => L, gS: () => N });
var n = l(627968),
    s = l(64700),
    a = l(503698),
    r = l.n(a),
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
    N = (e, t, l) => {
        let {
                userLocale: n,
                isEligibleForBOGOPromotion: s,
                shouldShowSavingsPercent: a,
                isGift: r,
                planId: i,
                savingsPercent: c,
            } = l,
            d = null != e && (e.planId === i || (null != t && e.planId === t.id));
        return s
            ? r || i !== g.gD.PREMIUM_MONTH_TIER_2
                ? null
                : { type: "badge", textBadgeVariant: "eyebrow", text: j.intl.string(j.t.iQTfWx) }
            : null == t || (t.interval === g.WT.YEAR && null != e) || (a && !d)
              ? null != t && t.interval === g.WT.YEAR && null != e
                  ? j.intl.string(j.t["122kWB"])
                  : a && !d && null != c
                    ? {
                          type: "badge",
                          textBadgeVariant: "eyebrow",
                          text: j.intl.format(j.t.IAybsG, { discount: (0, C.l9)(n, c / 100) }),
                      }
                    : null
              : null;
    };
function E(e) {
    let {
            userLocale: t,
            premiumSubscription: l,
            planId: a,
            selectPlan: i,
            selected: C,
            priceOptions: E,
            isPrepaid: b,
            isCustomGift: T,
            shouldShowUpdatedPaymentModal: A,
            discountOffer: y,
            discountAmountOff: _,
            isEligibleForDiscount: I,
            isEligibleForBOGOPromotion: w,
            isEligibleForTrial: M,
            isCurrentPlan: S,
            disabled: k,
        } = e,
        { isGift: P } = (0, x.Pv)(),
        G = (0, d.bG)([h.A], () => h.A.get(a));
    c()(null != G, "Missing subscriptionPlan");
    let R = (0, v.L_)({ planId: a, isGift: P, priceOptions: E, subscriptionPlan: G }),
        O = (0, v.y8)(a, !1, P, E),
        D = null != R && !A,
        U = s.useCallback(() => {
            let e = N(l, G, {
                userLocale: t,
                isEligibleForBOGOPromotion: w,
                shouldShowSavingsPercent: D,
                isGift: P,
                planId: a,
                savingsPercent: R,
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
        }, [t, w, G, l, D, P, a, R]),
        V = (0, v.m6)(G.id),
        B = s.useMemo(
            () => (0, v.D8)(G.interval, P, b, G.intervalCount, T, V),
            [G.interval, G.intervalCount, P, b, T, V],
        ),
        H = () => {
            k || i(a);
        },
        Z = A
            ? j.intl.format(j.t.hXcaLT, {
                  price:
                      I && null != _ && G.interval === g.WT.MONTH
                          ? (0, p.$g)(O.amount - _, O.currency)
                          : M
                            ? (0, p.$g)(0, O.currency, { minimumFractionDigits: 0, maximumFractionDigits: 0 })
                            : (0, p.$g)(O.amount, O.currency),
              })
            : (0, p.$g)(O.amount, O.currency);
    return (0, n.jsxs)(o.D, {
        role: T ? "menuitem" : "radio",
        "aria-checked": C,
        tabIndex: T || C ? 0 : -1,
        focusProps: { offset: { left: -4, right: -4, top: 0, bottom: 0 } },
        onClick: H,
        className: r()(f.G_, { [f.vW]: T && C, [f.Gb]: T }),
        children: [
            (0, n.jsxs)("div", {
                className: r()(f.XM, { [f.PA]: k }),
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
                                        onChange: H,
                                    }),
                                }),
                            (0, n.jsxs)("div", {
                                children: [
                                    (0, n.jsxs)("div", {
                                        className: r()(f.Gl, { [f.h4]: C || T, [f.ox]: A && (C || T) }),
                                        children: [B, T && U()],
                                    }),
                                    T &&
                                        (0, n.jsx)("div", {
                                            className: f._R,
                                            children: j.intl.format(j.t.ori2Jm, {
                                                currencyAmount: (0, p.$g)(O.amount, O.currency),
                                            }),
                                        }),
                                ],
                            }),
                            S &&
                                (0, n.jsxs)("span", {
                                    className: f.bq,
                                    children: ["(", j.intl.string(j.t.ymSxhy), ")"],
                                }),
                            !T && U(),
                        ],
                    }),
                    A
                        ? (0, n.jsx)("div", { className: r()({ [f.kb]: C }), children: Z })
                        : (0, n.jsx)("div", { className: r()({ [f.h4]: C || T }), children: Z }),
                ],
            }),
            A &&
                (0, n.jsx)("div", {
                    className: f.hB,
                    children: (0, n.jsx)(u.E, {
                        variant: "text-md/normal",
                        color: C ? "text-default" : "interactive-text-default",
                        className: r()(f.Ub, { [f.sw]: I || M }),
                        children: ((e, t) => {
                            let {
                                price: l,
                                isEligibleForDiscount: n,
                                isEligibleForTrial: s,
                                discountAmountOff: a,
                                discountOffer: r,
                                savingsPercent: i,
                            } = t;
                            return n && null != a && e.interval === g.WT.MONTH
                                ? j.intl.format(j.t["VeE/4E"], {
                                      numMonths: r?.discount.userUsageLimit ?? g.OJ,
                                      discountedPrice: (0, p.$g)(l.amount - a, l.currency),
                                      regularPrice: (0, p.$g)(l.amount, l.currency),
                                  })
                                : s
                                  ? L(e, l)
                                  : e.interval === g.WT.YEAR
                                    ? j.intl.formatToPlainString(j.t.rtLTJP, { percent: i ?? "" })
                                    : null;
                        })(G, {
                            price: O,
                            isEligibleForDiscount: I,
                            isEligibleForTrial: M,
                            discountAmountOff: _,
                            discountOffer: y,
                            savingsPercent: R,
                        }),
                    }),
                }),
        ],
    });
}
