n.d(t, { O7: () => L, Ay: () => D, gS: () => w });
var l = n(477900),
    i = n(582128),
    r = n(503698),
    a = n.n(r),
    s = n(284009),
    o = n.n(s),
    u = n(118751),
    c = n(17928),
    d = n(834730),
    m = n(150934),
    p = n(939249),
    h = n(123816),
    C = n(951305),
    f = n(773669),
    E = n(97352),
    S = n(45938),
    g = n(158045),
    I = n(580630),
    y = n(371710),
    A = n(529412),
    x = n(557679),
    P = n(202541),
    v = n(341535),
    _ = n(105292),
    T = n(144228),
    N = n(398948),
    b = n(574892);
function j(e) {
    let {
            planId: t,
            subscriptionPlan: n,
            planLabel: r,
            priceSubtext: s,
            selected: o,
            disabled: u,
            onSelect: c,
            children: m,
        } = e,
        f = (0, h.t4)((e) => e.setSelectedPlanId),
        { isRecurringGift: E, setIsRecurringGift: S } = (0, C.Pv)(),
        g = n.interval === P.WT.YEAR ? v.default.rstMwN : v.default.Vb8FaC,
        I = i.useMemo(
            () => [
                { isRecurring: !0, label: g },
                { isRecurring: !1, label: v.default["hs/Nr+"] },
            ],
            [g],
        ),
        y = i.useCallback(
            (e) => {
                (f(t), S(e));
            },
            [t, f, S],
        );
    return o
        ? (0, l.jsxs)("div", {
              className: a()(b.Gb, b.wH),
              children: [
                  m,
                  (0, l.jsx)("div", {
                      className: b.Hg,
                      children: I.map((e) => {
                          let { isRecurring: t, label: n } = e,
                              i = E === t;
                          return (0, l.jsxs)(
                              p.D,
                              {
                                  role: "radio",
                                  "aria-checked": i,
                                  "aria-label": _.intl.formatToPlainString(N.default.PR7GrT, {
                                      plan: r,
                                      option: _.intl.string(n),
                                  }),
                                  tabIndex: i ? 0 : -1,
                                  className: b.Mg,
                                  onClick: () => y(t),
                                  children: [
                                      (0, l.jsx)(T.T, { disabled: u, checked: i }),
                                      (0, l.jsx)(d.E, { variant: "text-sm/medium", children: _.intl.string(n) }),
                                  ],
                              },
                              String(t),
                          );
                      }),
                  }),
              ],
          })
        : (0, l.jsx)(p.D, {
              role: "radio",
              "aria-checked": !1,
              "aria-label": _.intl.formatToPlainString(N.default.nRS0N2, { plan: r, price: s }),
              tabIndex: -1,
              focusProps: { offset: { left: -4, right: -4, top: 0, bottom: 0 } },
              onClick: c,
              className: b.Gb,
              children: m,
          });
}
var R = n(35587),
    O = n(387278),
    M = n(268431);
function L(e, t) {
    let n = e.interval === P.WT.YEAR ? _.t.ECT4A5 : _.t.v9QeON;
    return _.intl.format(n, { price: (0, I.$g)(t.amount, t.currency) });
}
function k(e) {
    return { type: "badge", textBadgeVariant: "eyebrow", text: e };
}
function w(e, t, n) {
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
        m = null != e && (e.planId === s || (null != t && e.planId === t.id));
    if (i) return a || s !== P.gD.PREMIUM_MONTH_TIER_2 ? null : k(_.intl.string(_.t.iQTfWx));
    if (null != t && (t.interval !== P.WT.YEAR || null == e) && !(r && !m)) return null;
    if (
        null != t &&
        !m &&
        (0, O.sR)({ targetSubscriptionPlan: t, isGift: a, shouldShowSavingsPercent: r, isEligibleForTrial: d ?? !1 })
    ) {
        let e = (0, O.vK)(t, a, c);
        return null != e ? k(e) : null;
    }
    return null != t && t.interval === P.WT.YEAR && null != e
        ? _.intl.string(_.t["122kWB"])
        : r && !m && null != o
          ? k(_.intl.format(_.t.IAybsG, { discount: (0, u.l9)(l, o / 100) }))
          : null;
}
function D(e) {
    let {
            premiumSubscription: t,
            planId: n,
            selected: r,
            priceOptions: s,
            isPrepaid: u,
            shouldShowTrialOrDiscountLayout: T,
            isEligibleForDiscount: N,
            isEligibleForTrial: b,
            isCurrentPlan: O,
            disabled: k,
            isRecurringGiftEnabled: D,
        } = e,
        U = (0, c.bG)([f.default], () => f.default.locale),
        {
            discountInfo: G,
            setSelectedPlanId: F,
            isGift: B,
        } = (0, h.t4)((e) => ({
            discountInfo: e.premiumDiscountInfo,
            setSelectedPlanId: e.setSelectedPlanId,
            isGift: e.isGift,
        })),
        { giftRecipient: H, setIsRecurringGift: W } = (0, C.Pv)(),
        V = B && (0, S.Ik)(H),
        { discountOffer: Y, discountAmountOff: K, applicablePlan: Z } = G,
        q = (0, c.bG)([E.A], () => E.A.get(n));
    o()(null != q, "Missing subscriptionPlan");
    let z = (0, g.m6)(q.id),
        $ = V && z === P.PremiumTypes.TIER_2,
        J = (0, A.qi)({ location: `PremiumSwitchPlanSelectOption${$ ? "" : "-DISABLED"}` }),
        Q = V && (!$ || !J || r),
        X = (0, R.Sq)(),
        ee = (0, g.L_)({ planId: n, isGift: B, priceOptions: s, subscriptionPlan: q }),
        et = (0, g.y8)(n, !1, B, s),
        en = null != ee && !T,
        el = i.useCallback(() => {
            let e = w(t, q, {
                userLocale: U,
                isEligibleForBOGOPromotion: X,
                shouldShowSavingsPercent: en,
                isGift: B,
                planId: n,
                savingsPercent: ee,
                priceOptions: s,
                isEligibleForTrial: b,
            });
            return "string" == typeof e
                ? (0, l.jsxs)("span", { className: M.IS, children: ["(", e, ")"] })
                : null != e
                  ? (e.type,
                    (0, l.jsx)(d.E, {
                        tag: "span",
                        variant: e.textBadgeVariant,
                        color: "text-overlay-light",
                        className: M.kP,
                        children: e.text,
                    }))
                  : null;
        }, [U, X, q, t, en, B, n, ee, s, b]),
        ei = i.useMemo(
            () => (0, g.D8)(q.interval, B, u, q.intervalCount, V, z),
            [q.interval, q.intervalCount, B, u, V, z],
        ),
        er = D && V && (0, y.dI)(n),
        ea = (function (e, t, n) {
            let { isRecurringGift: l } = (0, C.Pv)(),
                i = n && l,
                r = e.interval === P.WT.YEAR;
            return {
                priceSubtext: i
                    ? _.intl.string(v.default["0llBr2"])
                    : _.intl.formatToPlainString(_.t.ori2Jm, { currencyAmount: (0, I.$g)(t.amount, t.currency) }),
                priceInterval: i ? _.intl.string(r ? v.default.mqaMxh : v.default.JUUvJw) : null,
            };
        })(q, et, r),
        es = null != Z && n === Z;
    function eo() {
        (k || r || F(n, { shouldUpdateQuantity: !(0, x.b)(n) }), er || W(!1));
    }
    let eu = T
            ? _.intl.format(_.t.hXcaLT, {
                  price:
                      N && null != K && es
                          ? (0, I.$g)(et.amount - K, et.currency)
                          : b
                            ? (0, I.$g)(0, et.currency, { minimumFractionDigits: 0, maximumFractionDigits: 0 })
                            : (0, I.$g)(et.amount, et.currency),
              })
            : (0, I.$g)(et.amount, et.currency),
        ec = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)("div", {
                    className: a()(M.XM, { [M.PA]: k }),
                    children: [
                        (0, l.jsxs)("div", {
                            className: M.l,
                            children: [
                                !V &&
                                    (0, l.jsx)("div", {
                                        className: M.E2,
                                        children: (0, l.jsx)(m.S, {
                                            checked: r,
                                            value: r,
                                            label: "",
                                            description: "",
                                            onChange: eo,
                                        }),
                                    }),
                                (0, l.jsxs)("div", {
                                    children: [
                                        (0, l.jsxs)("div", {
                                            className: a()(M.Gl, { [M.h4]: r || V, [M.ox]: T && (r || V) }),
                                            children: [ei, V && el()],
                                        }),
                                        Q &&
                                            (0, l.jsx)("div", {
                                                className: M._R,
                                                children: er
                                                    ? ea.priceSubtext
                                                    : _.intl.format(_.t.ori2Jm, {
                                                          currencyAmount: (0, I.$g)(et.amount, et.currency),
                                                      }),
                                            }),
                                    ],
                                }),
                                O &&
                                    (0, l.jsxs)("span", {
                                        className: M.bq,
                                        children: ["(", _.intl.string(_.t.ymSxhy), ")"],
                                    }),
                                !V && el(),
                            ],
                        }),
                        T
                            ? (0, l.jsx)("div", { className: a()({ [M.kb]: r }), children: eu })
                            : (0, l.jsxs)("div", {
                                  className: a()({ [M.h4]: r || V }),
                                  children: [
                                      eu,
                                      er &&
                                          null != ea.priceInterval &&
                                          (0, l.jsxs)(l.Fragment, {
                                              children: [
                                                  " ",
                                                  (0, l.jsx)(d.E, {
                                                      tag: "span",
                                                      variant: "text-md/medium",
                                                      color: "text-muted",
                                                      children: ea.priceInterval,
                                                  }),
                                              ],
                                          }),
                                  ],
                              }),
                    ],
                }),
                T &&
                    (0, l.jsx)("div", {
                        className: M.hB,
                        children: (0, l.jsx)(d.E, {
                            variant: "text-md/normal",
                            color: r ? "text-default" : "interactive-text-default",
                            className: a()(M.Ub, { [M.sw]: N || b }),
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
                                    ? e.interval === P.WT.YEAR
                                        ? _.intl.format(_.t["EQmTl+"], {
                                              numYears: a?.discount.intervalCount ?? P.OJ,
                                              regularPrice: (0, I.$g)(n.amount, n.currency),
                                          })
                                        : _.intl.format(_.t["VeE/4E"], {
                                              numMonths: a?.discount.intervalCount ?? P.OJ,
                                              discountedPrice: (0, I.$g)(n.amount - r, n.currency),
                                              regularPrice: (0, I.$g)(n.amount, n.currency),
                                          })
                                    : i
                                      ? L(e, n)
                                      : e.interval === P.WT.YEAR
                                        ? _.intl.formatToPlainString(_.t.rtLTJP, { percent: o ?? "" })
                                        : null;
                            })(q, {
                                price: et,
                                isEligibleForDiscount: N,
                                isEligibleForTrial: b,
                                discountAmountOff: K,
                                discountOffer: Y,
                                isDiscountApplicableToPlan: es,
                                savingsPercent: ee,
                            }),
                        }),
                    }),
            ],
        });
    return er
        ? (0, l.jsx)(j, {
              planId: n,
              subscriptionPlan: q,
              planLabel: ei,
              priceSubtext: ea.priceSubtext,
              selected: r,
              disabled: k,
              onSelect: eo,
              children: (0, l.jsx)("div", { className: a()(M.G_, M.S4), children: ec }),
          })
        : (0, l.jsx)(p.D, {
              role: "radio",
              "aria-checked": r,
              tabIndex: r ? 0 : -1,
              focusProps: { offset: { left: -4, right: -4, top: 0, bottom: 0 } },
              onClick: eo,
              className: a()(M.G_, { [M.vW]: V && r, [M.Gb]: V }),
              children: ec,
          });
}
