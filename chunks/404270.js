n.d(t, { Z: () => x });
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(442837),
    l = n(481060),
    o = n(706454),
    c = n(594174),
    d = n(509545),
    u = n(78839),
    m = n(930153),
    g = n(74538),
    p = n(937615),
    h = n(474936),
    f = n(388032),
    b = n(67949);
let x = (e) => {
    var t;
    let { className: n } = e,
        i = (0, a.e7)([c.default], () => c.default.getCurrentUser()),
        x = (0, a.e7)([o.default], () => o.default.locale),
        j = (0, a.e7)([u.ZP], () => u.ZP.getPremiumTypeSubscription()),
        N = (0, a.e7)([d.Z], () => (null != j ? d.Z.get(j.planId) : void 0)),
        _ = null != (t = (0, a.e7)([d.Z], () => (null != N ? d.Z.getForSkuAndInterval((0, g.Wz)(h.Si.GUILD), N.interval, N.intervalCount) : void 0))) ? t : h.GP[h.Xh.PREMIUM_MONTH_GUILD];
    return (0, r.jsxs)('div', {
        className: s()(b.wrapper, n),
        children: [
            (0, r.jsx)(l.X6q, {
                className: b.heading,
                variant: 'heading-xl/semibold',
                children: f.NW.string(f.t['3x1PFB'])
            }),
            (0, r.jsx)(l.Text, {
                variant: 'text-md/normal',
                children: (function (e) {
                    let { currentUser: t, locale: n, guildBoostingPlanId: i, interval: s, intervalCount: a } = e,
                        l = g.ZP.getDefaultPrice(i, g.ZP.isPremium(t)),
                        o = g.ZP.getDefaultPrice(i, !1),
                        c = (0, p.og)((0, p.T4)(l.amount, l.currency), s, a),
                        d = (0, p.og)((0, p.T4)(o.amount, o.currency), s, a);
                    return g.ZP.isPremium(t, h.p9.TIER_2)
                        ? f.NW.format(f.t.N3Icb2, {
                              price: c,
                              originalPrice: d,
                              originalPriceHook: (e, t) =>
                                  (0, r.jsx)(
                                      'span',
                                      {
                                          className: b.originalPrice,
                                          children: e
                                      },
                                      t
                                  ),
                              freeSubscriptionCount: h.cb,
                              discountPercent: (0, m.T3)(n, h.Rr / 100)
                          })
                        : g.ZP.isPremium(t, h.p9.TIER_1)
                          ? f.NW.format(f.t.nQLVBA, {
                                price: c,
                                originalPrice: d,
                                originalPriceHook: (e, t) =>
                                    (0, r.jsx)(
                                        'span',
                                        {
                                            className: b.originalPrice,
                                            children: e
                                        },
                                        t
                                    ),
                                discountPercent: (0, m.T3)(n, h.Rr / 100)
                            })
                          : f.NW.format(f.t.Mmf63N, { price: c });
                })({
                    currentUser: i,
                    locale: x,
                    guildBoostingPlanId: _.id,
                    interval: _.interval,
                    intervalCount: _.intervalCount
                })
            })
        ]
    });
};
