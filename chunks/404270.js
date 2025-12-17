n.d(t, { Z: () => x });
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    a = n(442837),
    s = n(481060),
    o = n(706454),
    c = n(594174),
    d = n(509545),
    u = n(78839),
    g = n(930153),
    f = n(74538),
    m = n(937615),
    b = n(474936),
    p = n(388032),
    h = n(897065);
let x = (e) => {
    var t;
    let { className: n } = e,
        i = (0, a.e7)([c.default], () => c.default.getCurrentUser()),
        x = (0, a.e7)([o.default], () => o.default.locale),
        j = (0, a.e7)([u.Z], () => u.Z.getPremiumTypeSubscription()),
        v = (0, a.e7)([d.Z], () => (null != j ? d.Z.get(j.planId) : void 0)),
        O =
            null !=
            (t = (0, a.e7)([d.Z], () =>
                null != v ? d.Z.getForSkuAndInterval((0, f.Wz)(b.Si.GUILD), v.interval, v.intervalCount) : void 0,
            ))
                ? t
                : b.GP[b.Xh.PREMIUM_MONTH_GUILD];
    return (0, r.jsxs)("div", {
        className: l()(h.wrapper, n),
        children: [
            (0, r.jsx)(s.Heading, {
                className: h.heading,
                variant: "heading-xl/semibold",
                children: p.intl.string(p.t["3x1PFE"]),
            }),
            (0, r.jsx)(s.Text, {
                variant: "text-md/normal",
                children: (function (e) {
                    let { currentUser: t, locale: n, guildBoostingPlanId: i, interval: l, intervalCount: a } = e,
                        s = f.ZP.getDefaultPrice(i, f.ZP.isPremium(t)),
                        o = f.ZP.getDefaultPrice(i, !1),
                        c = (0, m.og)((0, m.T4)(s.amount, s.currency), l, a),
                        d = (0, m.og)((0, m.T4)(o.amount, o.currency), l, a);
                    return f.ZP.isPremium(t, b.PremiumTypes.TIER_2)
                        ? p.intl.format(p.t.N3Icb2, {
                              price: c,
                              originalPrice: d,
                              originalPriceHook: (e, t) =>
                                  (0, r.jsx)(
                                      "span",
                                      {
                                          className: h.originalPrice,
                                          children: e,
                                      },
                                      t,
                                  ),
                              freeSubscriptionCount: b.cb,
                              discountPercent: (0, g.T3)(n, b.Rr / 100),
                          })
                        : f.ZP.isPremium(t, b.PremiumTypes.TIER_1)
                          ? p.intl.format(p.t.nQLVBF, {
                                price: c,
                                originalPrice: d,
                                originalPriceHook: (e, t) =>
                                    (0, r.jsx)(
                                        "span",
                                        {
                                            className: h.originalPrice,
                                            children: e,
                                        },
                                        t,
                                    ),
                                discountPercent: (0, g.T3)(n, b.Rr / 100),
                            })
                          : p.intl.format(p.t.Mmf63F, { price: c });
                })({
                    currentUser: i,
                    locale: x,
                    guildBoostingPlanId: O.id,
                    interval: O.interval,
                    intervalCount: O.intervalCount,
                }),
            }),
        ],
    });
};
