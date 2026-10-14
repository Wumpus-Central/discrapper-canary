n.d(t, { Ay: () => R, O7: () => N, gS: () => j });
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
    A = n(158045),
    y = n(580630),
    I = n(529412),
    g = n(557679),
    P = n(35587),
    v = n(387278),
    x = n(202541),
    _ = n(660183),
    T = n(268431);
function N(e, t) {
    let n = e.interval === x.WT.YEAR ? _.t.ECT4A5 : _.t.v9QeON;
    return _.intl.format(n, { price: (0, y.$g)(t.amount, t.currency) });
}
function b(e) {
    return { type: "badge", textBadgeVariant: "eyebrow", text: e };
}
function j(e, t, n) {
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
    if (i) return a || s !== x.gD.PREMIUM_MONTH_TIER_2 ? null : b(_.intl.string(_.t.iQTfWx));
    if (null != t && (t.interval !== x.WT.YEAR || null == e) && !(r && !p)) return null;
    if (
        null != t &&
        !p &&
        (0, v.sR)({ targetSubscriptionPlan: t, isGift: a, shouldShowSavingsPercent: r, isEligibleForTrial: d ?? !1 })
    ) {
        let e = (0, v.vK)(t, a, c);
        return null != e ? b(e) : null;
    }
    return null != t && t.interval === x.WT.YEAR && null != e
        ? _.intl.string(_.t["122kWB"])
        : r && !p && null != o
          ? b(_.intl.format(_.t.IAybsG, { discount: (0, u.l9)(l, o / 100) }))
          : null;
}
function R(e) {
    let {
            premiumSubscription: t,
            planId: n,
            selected: r,
            priceOptions: s,
            isPrepaid: u,
            shouldShowTrialOrDiscountLayout: v,
            isEligibleForDiscount: b,
            isEligibleForTrial: R,
            isCurrentPlan: O,
            disabled: M,
        } = e,
        L = (0, c.bG)([f.default], () => f.default.locale),
        {
            discountInfo: k,
            setSelectedPlanId: w,
            isGift: D,
        } = (0, C.t4)((e) => ({
            discountInfo: e.premiumDiscountInfo,
            setSelectedPlanId: e.setSelectedPlanId,
            isGift: e.isGift,
        })),
        { giftRecipient: U } = (0, h.Pv)(),
        G = D && (0, E.Ik)(U),
        { discountOffer: F, discountAmountOff: B, applicablePlan: H } = k,
        W = (0, c.bG)([S.A], () => S.A.get(n));
    o()(null != W, "Missing subscriptionPlan");
    let V = (0, A.m6)(W.id),
        Y = G && V === x.PremiumTypes.TIER_2,
        K = (0, I.qi)({ location: `PremiumSwitchPlanSelectOption${Y ? "" : "-DISABLED"}` }),
        Z = G && (!Y || !K || r),
        q = (0, P.Sq)(),
        z = (0, A.L_)({ planId: n, isGift: D, priceOptions: s, subscriptionPlan: W }),
        $ = (0, A.y8)(n, !1, D, s),
        Q = null != z && !v,
        J = i.useCallback(() => {
            let e = j(t, W, {
                userLocale: L,
                isEligibleForBOGOPromotion: q,
                shouldShowSavingsPercent: Q,
                isGift: D,
                planId: n,
                savingsPercent: z,
                priceOptions: s,
                isEligibleForTrial: R,
            });
            return "string" == typeof e
                ? (0, l.jsxs)("span", { className: T.IS, children: ["(", e, ")"] })
                : null != e
                  ? (e.type,
                    (0, l.jsx)(d.E, {
                        tag: "span",
                        variant: e.textBadgeVariant,
                        color: "text-overlay-light",
                        className: T.kP,
                        children: e.text,
                    }))
                  : null;
        }, [L, q, W, t, Q, D, n, z, s, R]),
        X = i.useMemo(
            () => (0, A.D8)(W.interval, D, u, W.intervalCount, G, V),
            [W.interval, W.intervalCount, D, u, G, V],
        ),
        ee = null != H && n === H;
    function et() {
        M || r || w(n, { shouldUpdateQuantity: !(0, g.b)(n) });
    }
    let en = v
        ? _.intl.format(_.t.hXcaLT, {
              price:
                  b && null != B && ee
                      ? (0, y.$g)($.amount - B, $.currency)
                      : R
                        ? (0, y.$g)(0, $.currency, { minimumFractionDigits: 0, maximumFractionDigits: 0 })
                        : (0, y.$g)($.amount, $.currency),
          })
        : (0, y.$g)($.amount, $.currency);
    return (0, l.jsxs)(p.D, {
        role: "radio",
        "aria-checked": r,
        tabIndex: r ? 0 : -1,
        focusProps: { offset: { left: -4, right: -4, top: 0, bottom: 0 } },
        onClick: et,
        className: a()(T.G_, { [T.vW]: G && r, [T.Gb]: G }),
        children: [
            (0, l.jsxs)("div", {
                className: a()(T.XM, { [T.PA]: M }),
                children: [
                    (0, l.jsxs)("div", {
                        className: T.l,
                        children: [
                            !G &&
                                (0, l.jsx)("div", {
                                    className: T.E2,
                                    children: (0, l.jsx)(m.S, {
                                        checked: r,
                                        value: r,
                                        label: "",
                                        description: "",
                                        onChange: et,
                                    }),
                                }),
                            (0, l.jsxs)("div", {
                                children: [
                                    (0, l.jsxs)("div", {
                                        className: a()(T.Gl, { [T.h4]: r || G, [T.ox]: v && (r || G) }),
                                        children: [X, G && J()],
                                    }),
                                    Z &&
                                        (0, l.jsx)("div", {
                                            className: T._R,
                                            children: _.intl.format(_.t.ori2Jm, {
                                                currencyAmount: (0, y.$g)($.amount, $.currency),
                                            }),
                                        }),
                                ],
                            }),
                            O &&
                                (0, l.jsxs)("span", {
                                    className: T.bq,
                                    children: ["(", _.intl.string(_.t.ymSxhy), ")"],
                                }),
                            !G && J(),
                        ],
                    }),
                    v
                        ? (0, l.jsx)("div", { className: a()({ [T.kb]: r }), children: en })
                        : (0, l.jsx)("div", { className: a()({ [T.h4]: r || G }), children: en }),
                ],
            }),
            v &&
                (0, l.jsx)("div", {
                    className: T.hB,
                    children: (0, l.jsx)(d.E, {
                        variant: "text-md/normal",
                        color: r ? "text-default" : "interactive-text-default",
                        className: a()(T.Ub, { [T.sw]: b || R }),
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
                                ? e.interval === x.WT.YEAR
                                    ? _.intl.format(_.t["EQmTl+"], {
                                          numYears: a?.discount.intervalCount ?? x.OJ,
                                          regularPrice: (0, y.$g)(n.amount, n.currency),
                                      })
                                    : _.intl.format(_.t["VeE/4E"], {
                                          numMonths: a?.discount.intervalCount ?? x.OJ,
                                          discountedPrice: (0, y.$g)(n.amount - r, n.currency),
                                          regularPrice: (0, y.$g)(n.amount, n.currency),
                                      })
                                : i
                                  ? N(e, n)
                                  : e.interval === x.WT.YEAR
                                    ? _.intl.formatToPlainString(_.t.rtLTJP, { percent: o ?? "" })
                                    : null;
                        })(W, {
                            price: $,
                            isEligibleForDiscount: b,
                            isEligibleForTrial: R,
                            discountAmountOff: B,
                            discountOffer: F,
                            isDiscountApplicableToPlan: ee,
                            savingsPercent: z,
                        }),
                    }),
                }),
        ],
    });
}
