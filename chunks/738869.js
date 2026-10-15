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
    p = n(150934),
    m = n(939249),
    h = n(123816),
    C = n(951305),
    f = n(773669),
    S = n(97352),
    E = n(45938),
    I = n(158045),
    g = n(580630),
    y = n(371710),
    A = n(529412),
    P = n(557679),
    v = n(202541),
    x = n(398948),
    _ = n(660183),
    T = n(144228),
    N = n(574892);
function b(e) {
    let {
            planId: t,
            subscriptionPlan: n,
            planLabel: r,
            priceSubtext: s,
            selected: o,
            disabled: u,
            onSelect: c,
            children: p,
        } = e,
        f = (0, h.t4)((e) => e.setSelectedPlanId),
        { isRecurringGift: S, setIsRecurringGift: E } = (0, C.Pv)(),
        I = n.interval === v.WT.YEAR ? x.default["Rqr/Kg"] : x.default.yCHPPF,
        g = i.useMemo(
            () => [
                { isRecurring: !0, label: I },
                { isRecurring: !1, label: x.default.jkx9hR },
            ],
            [I],
        ),
        y = i.useCallback(
            (e) => {
                (f(t), E(e));
            },
            [t, f, E],
        );
    return o
        ? (0, l.jsxs)("div", {
              className: a()(N.Gb, N.wH),
              children: [
                  p,
                  (0, l.jsx)("div", {
                      className: N.Hg,
                      children: g.map((e) => {
                          let { isRecurring: t, label: n } = e,
                              i = S === t;
                          return (0, l.jsxs)(
                              m.D,
                              {
                                  role: "radio",
                                  "aria-checked": i,
                                  "aria-label": _.intl.formatToPlainString(x.default.PR7GrT, {
                                      plan: r,
                                      option: _.intl.string(n),
                                  }),
                                  tabIndex: i ? 0 : -1,
                                  className: N.Mg,
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
        : (0, l.jsx)(m.D, {
              role: "radio",
              "aria-checked": !1,
              "aria-label": _.intl.formatToPlainString(x.default.nRS0N2, { plan: r, price: s }),
              tabIndex: -1,
              focusProps: { offset: { left: -4, right: -4, top: 0, bottom: 0 } },
              onClick: c,
              className: N.Gb,
              children: p,
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
    return { type: "badge", textBadgeVariant: "eyebrow", text: e };
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
        p = null != e && (e.planId === s || (null != t && e.planId === t.id));
    if (i) return a || s !== v.gD.PREMIUM_MONTH_TIER_2 ? null : L(_.intl.string(_.t.iQTfWx));
    if (null != t && (t.interval !== v.WT.YEAR || null == e) && !(r && !p)) return null;
    if (
        null != t &&
        !p &&
        (0, R.sR)({ targetSubscriptionPlan: t, isGift: a, shouldShowSavingsPercent: r, isEligibleForTrial: d ?? !1 })
    ) {
        let e = (0, R.vK)(t, a, c);
        return null != e ? L(e) : null;
    }
    return null != t && t.interval === v.WT.YEAR && null != e
        ? _.intl.string(_.t["122kWB"])
        : r && !p && null != o
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
            isEligibleForDiscount: N,
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
        } = (0, h.t4)((e) => ({
            discountInfo: e.premiumDiscountInfo,
            setSelectedPlanId: e.setSelectedPlanId,
            isGift: e.isGift,
        })),
        { giftRecipient: H, setIsRecurringGift: W } = (0, C.Pv)(),
        V = B && (0, E.Ik)(H),
        { discountOffer: Y, discountAmountOff: K, applicablePlan: Z } = G,
        q = (0, c.bG)([S.A], () => S.A.get(n));
    o()(null != q, "Missing subscriptionPlan");
    let z = (0, I.m6)(q.id),
        $ = V && z === v.PremiumTypes.TIER_2,
        Q = (0, A.qi)({ location: `PremiumSwitchPlanSelectOption${$ ? "" : "-DISABLED"}` }),
        J = V && (!$ || !Q || r),
        X = (0, j.Sq)(),
        ee = (0, I.L_)({ planId: n, isGift: B, priceOptions: s, subscriptionPlan: q }),
        et = (0, I.y8)(n, !1, B, s),
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
            () => (0, I.D8)(q.interval, B, u, q.intervalCount, V, z),
            [q.interval, q.intervalCount, B, u, V, z],
        ),
        er = D && V && (0, y.dI)(n),
        ea = (function (e, t, n) {
            let { isRecurringGift: l } = (0, C.Pv)(),
                i = n && l,
                r = e.interval === v.WT.MONTH,
                a = e.interval === v.WT.YEAR,
                s = r ? x.default.L5nipF : x.default.S3pnck;
            return {
                priceSubtext: _.intl.formatToPlainString(i ? s : x.default.sYJogd, {
                    price: (0, g.$g)(t.amount, t.currency),
                }),
                priceInterval: i ? _.intl.string(a ? x.default.wzvf9g : x.default.uDVG5O) : null,
            };
        })(q, et, r),
        es = null != Z && n === Z;
    function eo() {
        (w || r || F(n, { shouldUpdateQuantity: !(0, P.b)(n) }), er || W(!1));
    }
    let eu = T
            ? _.intl.format(_.t.hXcaLT, {
                  price:
                      N && null != K && es
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
                                        children: (0, l.jsx)(p.S, {
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
                        className: O.hB,
                        children: (0, l.jsx)(d.E, {
                            variant: "text-md/normal",
                            color: r ? "text-default" : "interactive-text-default",
                            className: a()(O.Ub, { [O.sw]: N || R }),
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
                                isEligibleForDiscount: N,
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
        ? (0, l.jsx)(b, {
              planId: n,
              subscriptionPlan: q,
              planLabel: ei,
              priceSubtext: ea.priceSubtext,
              selected: r,
              disabled: w,
              onSelect: eo,
              children: (0, l.jsx)("div", { className: a()(O.G_, O.S4), children: ec }),
          })
        : (0, l.jsx)(m.D, {
              role: "radio",
              "aria-checked": r,
              tabIndex: r ? 0 : -1,
              focusProps: { offset: { left: -4, right: -4, top: 0, bottom: 0 } },
              onClick: eo,
              className: a()(O.G_, { [O.vW]: V && r, [O.Gb]: V }),
              children: ec,
          });
}
