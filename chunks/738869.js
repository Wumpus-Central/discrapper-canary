n.d(t, { O7: () => M, Ay: () => w, gS: () => k });
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
    C = n(281044),
    h = n(951305),
    f = n(773669),
    E = n(97352),
    S = n(45938),
    y = n(24482),
    g = n(580630),
    I = n(371710),
    A = n(529412),
    P = n(127981),
    v = n(202541),
    x = n(843170),
    _ = n(105292),
    T = n(144228),
    b = n(574892);
function N(e) {
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
        f = (0, C.t4)((e) => e.setSelectedPlanId),
        { isRecurringGift: E, setIsRecurringGift: S } = (0, h.Pv)(),
        y = n.interval === v.WT.YEAR ? x.default.rstMwN : x.default.Vb8FaC,
        g = i.useMemo(
            () => [
                { isRecurring: !0, label: y },
                { isRecurring: !1, label: x.default["hs/Nr+"] },
            ],
            [y],
        ),
        I = i.useCallback(
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
                      children: g.map((e) => {
                          let { isRecurring: t, label: n } = e,
                              i = E === t;
                          return (0, l.jsxs)(
                              p.D,
                              {
                                  role: "radio",
                                  "aria-checked": i,
                                  "aria-label": _.intl.formatToPlainString(x.default.PR7GrT, {
                                      plan: r,
                                      option: _.intl.string(n),
                                  }),
                                  tabIndex: i ? 0 : -1,
                                  className: b.Mg,
                                  onClick: () => I(t),
                                  children: [
                                      (0, l.jsx)(T.T, { disabled: u, checked: i }),
                                      (0, l.jsx)(d.E, { variant: "body-sm/medium", children: _.intl.string(n) }),
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
              "aria-label": _.intl.formatToPlainString(x.default.nRS0N2, { plan: r, price: s }),
              tabIndex: -1,
              focusProps: { offset: { left: -4, right: -4, top: 0, bottom: 0 } },
              onClick: c,
              className: b.Gb,
              children: m,
          });
}
var j = n(35587),
    R = n(387278),
    O = n(268431);
function M(e, t) {
    let n = e.interval === v.WT.YEAR ? _.t.ECT4A5 : _.t.v9QeON;
    return _.intl.format(n, { price: (0, g.$g)(t.amount, t.currency) });
}
function L(e) {
    return { type: "badge", textBadgeVariant: "body-sm/medium", text: e };
}
function k(e, t, n) {
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
    if (i) return a || s !== v.gD.PREMIUM_MONTH_TIER_2 ? null : L(_.intl.string(_.t.iQTfWx));
    if (null != t && (t.interval !== v.WT.YEAR || null == e) && !(r && !m)) return null;
    if (
        null != t &&
        !m &&
        (0, R.sR)({ targetSubscriptionPlan: t, isGift: a, shouldShowSavingsPercent: r, isEligibleForTrial: d ?? !1 })
    ) {
        let e = (0, R.vK)(t, a, c);
        return null != e ? L(e) : null;
    }
    return null != t && t.interval === v.WT.YEAR && null != e
        ? _.intl.string(_.t["122kWB"])
        : r && !m && null != o
          ? L(_.intl.format(_.t.IAybsG, { discount: (0, u.l9)(l, o / 100) }))
          : null;
}
function w(e) {
    let {
            premiumSubscription: t,
            planId: n,
            selected: r,
            priceOptions: s,
            isPrepaid: u,
            shouldShowTrialOrDiscountLayout: T,
            isEligibleForDiscount: b,
            isEligibleForTrial: R,
            isCurrentPlan: L,
            disabled: w,
            isRecurringGiftEnabled: D,
        } = e,
        U = (0, c.bG)([f.default], () => f.default.locale),
        {
            discountInfo: G,
            setSelectedPlanId: F,
            isGift: B,
        } = (0, C.t4)((e) => ({
            discountInfo: e.premiumDiscountInfo,
            setSelectedPlanId: e.setSelectedPlanId,
            isGift: e.isGift,
        })),
        { giftRecipient: H, setIsRecurringGift: W } = (0, h.Pv)(),
        V = B && (0, S.Ik)(H),
        { discountOffer: Y, discountAmountOff: K, applicablePlan: Z } = G,
        q = (0, c.bG)([E.A], () => E.A.get(n));
    o()(null != q, "Missing subscriptionPlan");
    let z = (0, y.m6)(q.id),
        $ = V && z === v.PremiumTypes.TIER_2,
        Q = (0, A.qi)({ location: `PremiumSwitchPlanSelectOption${$ ? "" : "-DISABLED"}` }),
        J = V && (!$ || !Q || r),
        X = (0, j.Sq)(),
        ee = (0, y.L_)({ planId: n, isGift: B, priceOptions: s, subscriptionPlan: q }),
        et = (0, y.y8)(n, !1, B, s),
        en = null != ee && !T,
        el = i.useCallback(() => {
            let e = k(t, q, {
                userLocale: U,
                isEligibleForBOGOPromotion: X,
                shouldShowSavingsPercent: en,
                isGift: B,
                planId: n,
                savingsPercent: ee,
                priceOptions: s,
                isEligibleForTrial: R,
            });
            return "string" == typeof e
                ? (0, l.jsxs)("span", { className: O.IS, children: ["(", e, ")"] })
                : null != e
                  ? (e.type,
                    (0, l.jsx)(d.E, {
                        tag: "span",
                        variant: e.textBadgeVariant,
                        color: "text-overlay-light",
                        className: O.kP,
                        children: e.text,
                    }))
                  : null;
        }, [U, X, q, t, en, B, n, ee, s, R]),
        ei = i.useMemo(
            () => (0, y.D8)(q.interval, B, u, q.intervalCount, V, z),
            [q.interval, q.intervalCount, B, u, V, z],
        ),
        er = D && V && (0, I.dI)(n),
        ea = (function (e, t, n) {
            let { isRecurringGift: l } = (0, h.Pv)(),
                i = n && l,
                r = e.interval === v.WT.YEAR;
            return {
                priceSubtext: i
                    ? _.intl.string(x.default["0llBr2"])
                    : _.intl.formatToPlainString(_.t.ori2Jm, { currencyAmount: (0, g.$g)(t.amount, t.currency) }),
                priceInterval: i ? _.intl.string(r ? x.default.mqaMxh : x.default.JUUvJw) : null,
            };
        })(q, et, r),
        es = null != Z && n === Z;
    function eo() {
        (w || r || F(n, { shouldUpdateQuantity: !(0, P.bM)(n) }), er || W(!1));
    }
    let eu = T
            ? _.intl.format(_.t.hXcaLT, {
                  price:
                      b && null != K && es
                          ? (0, g.$g)(et.amount - K, et.currency)
                          : R
                            ? (0, g.$g)(0, et.currency, { minimumFractionDigits: 0, maximumFractionDigits: 0 })
                            : (0, g.$g)(et.amount, et.currency),
              })
            : (0, g.$g)(et.amount, et.currency),
        ec = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)("div", {
                    className: a()(O.XM, { [O.PA]: w }),
                    children: [
                        (0, l.jsxs)("div", {
                            className: O.l,
                            children: [
                                !V &&
                                    (0, l.jsx)("div", {
                                        className: O.E2,
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
                                            className: a()(O.Gl, { [O.h4]: r || V, [O.ox]: T && (r || V) }),
                                            children: [ei, V && el()],
                                        }),
                                        J &&
                                            (0, l.jsx)("div", {
                                                className: O._R,
                                                children: er
                                                    ? ea.priceSubtext
                                                    : _.intl.format(_.t.ori2Jm, {
                                                          currencyAmount: (0, g.$g)(et.amount, et.currency),
                                                      }),
                                            }),
                                    ],
                                }),
                                L &&
                                    (0, l.jsxs)("span", {
                                        className: O.bq,
                                        children: ["(", _.intl.string(_.t.ymSxhy), ")"],
                                    }),
                                !V && el(),
                            ],
                        }),
                        T
                            ? (0, l.jsx)("div", { className: a()({ [O.kb]: r }), children: eu })
                            : (0, l.jsxs)("div", {
                                  className: a()({ [O.h4]: r || V }),
                                  children: [
                                      eu,
                                      er &&
                                          null != ea.priceInterval &&
                                          (0, l.jsxs)(l.Fragment, {
                                              children: [
                                                  " ",
                                                  (0, l.jsx)(d.E, {
                                                      tag: "span",
                                                      variant: "body-md/medium",
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
                        className: O.hB,
                        children: (0, l.jsx)(d.E, {
                            variant: "body-md/normal",
                            color: r ? "text-default" : "interactive-text-default",
                            className: a()(O.Ub, { [O.sw]: b || R }),
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
                                        ? _.intl.format(_.t["EQmTl+"], {
                                              numYears: a?.discount.intervalCount ?? v.OJ,
                                              regularPrice: (0, g.$g)(n.amount, n.currency),
                                          })
                                        : _.intl.format(_.t["VeE/4E"], {
                                              numMonths: a?.discount.intervalCount ?? v.OJ,
                                              discountedPrice: (0, g.$g)(n.amount - r, n.currency),
                                              regularPrice: (0, g.$g)(n.amount, n.currency),
                                          })
                                    : i
                                      ? M(e, n)
                                      : e.interval === v.WT.YEAR
                                        ? _.intl.formatToPlainString(_.t.rtLTJP, { percent: o ?? "" })
                                        : null;
                            })(q, {
                                price: et,
                                isEligibleForDiscount: b,
                                isEligibleForTrial: R,
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
        ? (0, l.jsx)(N, {
              planId: n,
              subscriptionPlan: q,
              planLabel: ei,
              priceSubtext: ea.priceSubtext,
              selected: r,
              disabled: w,
              onSelect: eo,
              children: (0, l.jsx)("div", { className: a()(O.G_, O.S4), children: ec }),
          })
        : (0, l.jsx)(p.D, {
              role: "radio",
              "aria-checked": r,
              tabIndex: r ? 0 : -1,
              focusProps: { offset: { left: -4, right: -4, top: 0, bottom: 0 } },
              onClick: eo,
              className: a()(O.G_, { [O.vW]: V && r, [O.Gb]: V }),
              children: ec,
          });
}
