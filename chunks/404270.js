n.d(t, { Z: () => b });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    a = n(442837),
    s = n(481060),
    o = n(706454),
    c = n(594174),
    d = n(509545),
    u = n(78839),
    m = n(930153),
    g = n(74538),
    p = n(937615),
    h = n(474936),
    f = n(388032),
    x = n(67949);
let b = (e) => {
    var t;
    let { className: n } = e,
        i = (0, a.e7)([c.default], () => c.default.getCurrentUser()),
        b = (0, a.e7)([o.default], () => o.default.locale),
        j = (0, a.e7)([u.Z], () => u.Z.getPremiumTypeSubscription()),
        v = (0, a.e7)([d.Z], () => (null != j ? d.Z.get(j.planId) : void 0)),
        _ = null != (t = (0, a.e7)([d.Z], () => (null != v ? d.Z.getForSkuAndInterval((0, g.Wz)(h.Si.GUILD), v.interval, v.intervalCount) : void 0))) ? t : h.GP[h.Xh.PREMIUM_MONTH_GUILD];
    return (0, r.jsxs)('div', {
        className: l()(x.wrapper, n),
        children: [
            (0, r.jsx)(s.X6q, {
                className: x.heading,
                variant: 'heading-xl/semibold',
                children: f.intl.string(f.t['3x1PFB'])
            }),
            (0, r.jsx)(s.Text, {
                variant: 'text-md/normal',
                children: (function (e) {
                    let { currentUser: t, locale: n, guildBoostingPlanId: i, interval: l, intervalCount: a } = e,
                        s = g.ZP.getDefaultPrice(i, g.ZP.isPremium(t)),
                        o = g.ZP.getDefaultPrice(i, !1),
                        c = (0, p.og)((0, p.T4)(s.amount, s.currency), l, a),
                        d = (0, p.og)((0, p.T4)(o.amount, o.currency), l, a);
                    return g.ZP.isPremium(t, h.p9.TIER_2)
                        ? f.intl.format(f.t.N3Icb2, {
                              price: c,
                              originalPrice: d,
                              originalPriceHook: (e, t) =>
                                  (0, r.jsx)(
                                      'span',
                                      {
                                          className: x.originalPrice,
                                          children: e
                                      },
                                      t
                                  ),
                              freeSubscriptionCount: h.cb,
                              discountPercent: (0, m.T3)(n, h.Rr / 100)
                          })
                        : g.ZP.isPremium(t, h.p9.TIER_1)
                          ? f.intl.format(f.t.nQLVBA, {
                                price: c,
                                originalPrice: d,
                                originalPriceHook: (e, t) =>
                                    (0, r.jsx)(
                                        'span',
                                        {
                                            className: x.originalPrice,
                                            children: e
                                        },
                                        t
                                    ),
                                discountPercent: (0, m.T3)(n, h.Rr / 100)
                            })
                          : f.intl.format(f.t.Mmf63N, { price: c });
                })({
                    currentUser: i,
                    locale: b,
                    guildBoostingPlanId: _.id,
                    interval: _.interval,
                    intervalCount: _.intervalCount
                })
            })
        ]
    });
};
