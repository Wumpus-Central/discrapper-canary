n.d(t, { Z: () => C });
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    s = n(442837),
    a = n(481060),
    o = n(706454),
    c = n(594174),
    d = n(509545),
    u = n(78839),
    m = n(930153),
    h = n(74538),
    g = n(937615),
    x = n(474936),
    p = n(388032),
    _ = n(599733);
let C = (e) => {
    var t;
    let { className: n } = e,
        r = (0, s.e7)([c.default], () => c.default.getCurrentUser()),
        C = (0, s.e7)([o.default], () => o.default.locale),
        f = (0, s.e7)([u.ZP], () => u.ZP.getPremiumTypeSubscription()),
        v = (0, s.e7)([d.Z], () => (null != f ? d.Z.get(f.planId) : void 0)),
        N = null !== (t = (0, s.e7)([d.Z], () => (null != v ? d.Z.getForSkuAndInterval((0, h.Wz)(x.Si.GUILD), v.interval, v.intervalCount) : void 0))) && void 0 !== t ? t : x.GP[x.Xh.PREMIUM_MONTH_GUILD];
    return (0, i.jsxs)('div', {
        className: l()(_.wrapper, n),
        children: [
            (0, i.jsx)(a.X6q, {
                className: _.heading,
                variant: 'heading-xl/semibold',
                children: p.intl.string(p.t['3x1PFB'])
            }),
            (0, i.jsx)(a.Text, {
                variant: 'text-md/normal',
                children: (function (e) {
                    let { currentUser: t, locale: n, guildBoostingPlanId: r, interval: l, intervalCount: s } = e,
                        a = h.ZP.getDefaultPrice(r, h.ZP.isPremium(t)),
                        o = h.ZP.getDefaultPrice(r, !1),
                        c = (0, g.og)((0, g.T4)(a.amount, a.currency), l, s),
                        d = (0, g.og)((0, g.T4)(o.amount, o.currency), l, s);
                    return h.ZP.isPremium(t, x.p9.TIER_2)
                        ? p.intl.format(p.t.N3Icb2, {
                              price: c,
                              originalPrice: d,
                              originalPriceHook: (e, t) =>
                                  (0, i.jsx)(
                                      'span',
                                      {
                                          className: _.originalPrice,
                                          children: e
                                      },
                                      t
                                  ),
                              freeSubscriptionCount: x.cb,
                              discountPercent: (0, m.T3)(n, x.Rr / 100)
                          })
                        : h.ZP.isPremium(t, x.p9.TIER_1)
                          ? p.intl.format(p.t.nQLVBA, {
                                price: c,
                                originalPrice: d,
                                originalPriceHook: (e, t) =>
                                    (0, i.jsx)(
                                        'span',
                                        {
                                            className: _.originalPrice,
                                            children: e
                                        },
                                        t
                                    ),
                                discountPercent: (0, m.T3)(n, x.Rr / 100)
                            })
                          : p.intl.format(p.t.Mmf63N, { price: c });
                })({
                    currentUser: r,
                    locale: C,
                    guildBoostingPlanId: N.id,
                    interval: N.interval,
                    intervalCount: N.intervalCount
                })
            })
        ]
    });
};
