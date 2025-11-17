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
    m = n(74538),
    p = n(937615),
    f = n(474936),
    h = n(388032),
    b = n(723116);
let x = (e) => {
    var t;
    let { className: n } = e,
        i = (0, a.e7)([c.default], () => c.default.getCurrentUser()),
        x = (0, a.e7)([o.default], () => o.default.locale),
        j = (0, a.e7)([u.Z], () => u.Z.getPremiumTypeSubscription()),
        _ = (0, a.e7)([d.Z], () => (null != j ? d.Z.get(j.planId) : void 0)),
        v =
            null !=
            (t = (0, a.e7)([d.Z], () =>
                null != _ ? d.Z.getForSkuAndInterval((0, m.Wz)(f.Si.GUILD), _.interval, _.intervalCount) : void 0,
            ))
                ? t
                : f.GP[f.Xh.PREMIUM_MONTH_GUILD];
    return (0, r.jsxs)("div", {
        className: l()(b.wrapper, n),
        children: [
            (0, r.jsx)(s.Heading, {
                className: b.heading,
                variant: "heading-xl/semibold",
                children: h.intl.string(h.t["3x1PFE"]),
            }),
            (0, r.jsx)(s.Text, {
                variant: "text-md/normal",
                children: (function (e) {
                    let { currentUser: t, locale: n, guildBoostingPlanId: i, interval: l, intervalCount: a } = e,
                        s = m.ZP.getDefaultPrice(i, m.ZP.isPremium(t)),
                        o = m.ZP.getDefaultPrice(i, !1),
                        c = (0, p.og)((0, p.T4)(s.amount, s.currency), l, a),
                        d = (0, p.og)((0, p.T4)(o.amount, o.currency), l, a);
                    return m.ZP.isPremium(t, f.PremiumTypes.TIER_2)
                        ? h.intl.format(h.t.N3Icb2, {
                              price: c,
                              originalPrice: d,
                              originalPriceHook: (e, t) =>
                                  (0, r.jsx)(
                                      "span",
                                      {
                                          className: b.originalPrice,
                                          children: e,
                                      },
                                      t,
                                  ),
                              freeSubscriptionCount: f.cb,
                              discountPercent: (0, g.T3)(n, f.Rr / 100),
                          })
                        : m.ZP.isPremium(t, f.PremiumTypes.TIER_1)
                          ? h.intl.format(h.t.nQLVBF, {
                                price: c,
                                originalPrice: d,
                                originalPriceHook: (e, t) =>
                                    (0, r.jsx)(
                                        "span",
                                        {
                                            className: b.originalPrice,
                                            children: e,
                                        },
                                        t,
                                    ),
                                discountPercent: (0, g.T3)(n, f.Rr / 100),
                            })
                          : h.intl.format(h.t.Mmf63F, { price: c });
                })({
                    currentUser: i,
                    locale: x,
                    guildBoostingPlanId: v.id,
                    interval: v.interval,
                    intervalCount: v.intervalCount,
                }),
            }),
        ],
    });
};
