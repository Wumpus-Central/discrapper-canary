"use strict";
n.d(t, { A: () => j });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    a = n(311907),
    o = n(778712),
    c = n(587895),
    d = n(854378),
    u = n(769015),
    _ = n(242874),
    h = n(75825),
    m = n(287809),
    g = n(97352),
    p = n(67480),
    A = n(615396),
    f = n(652215),
    E = n(788868),
    x = n(985018),
    I = n(402693),
    v = n(653307),
    N = n(818050);
let j = a.Ay.connectStores([p.A, c.A, g.A, m.default], (e) => {
    let { giftCode: t } = e,
        n = p.A.get(t.skuId),
        { subscriptionPlanId: i } = t;
    return {
        sku: n,
        subscriptionPlan: null != i ? (0, A.c9)(i) : null,
        application: c.A.getApplication(n.applicationId),
        gifter: m.default.getUser(t.userId),
    };
})((e) => {
    let { error: t, giftCode: n, gifter: r, sku: a, application: c, subscriptionPlan: m } = e,
        g = null == r ? x.intl.string(x.t.lTGZAl) : x.intl.formatToPlainString(x.t.TjWdPc, { username: r.username }),
        p = a.name;
    return (
        null != m &&
            (p = x.intl.formatToPlainString(m.interval === E.WT.MONTH ? x.t.CTpcCZ : x.t["rgPWG/"], {
                skuName: a.name,
                intervalCount: m.intervalCount,
            })),
        (0, i.jsxs)(s.Fragment, {
            children: [
                null != n.giftStyle
                    ? (0, i.jsx)(h.A, { defaultAnimationState: _.oA.LOOP, giftStyle: n.giftStyle, className: I.e })
                    : (0, i.jsx)(d.eu, {
                          src: null != r ? r.getAvatarURL(void 0, 100) : null,
                          size: o._3.DEPRECATED_SIZE_100,
                          className: N.SX,
                      }),
                null != t
                    ? (0, i.jsxs)(s.Fragment, {
                          children: [
                              (0, i.jsx)(d.tK, { children: x.intl.string(x.t.mDFGFj) }),
                              (0, i.jsx)(d.hE, { children: t }),
                          ],
                      })
                    : (0, i.jsxs)(s.Fragment, {
                          children: [
                              (0, i.jsx)(d.tK, { children: g }),
                              (0, i.jsxs)(d.hE, {
                                  className: l()(N.Ot, v.tR),
                                  children: [
                                      a.productLine !== f.EZt.COLLECTIBLES &&
                                          (0, i.jsx)(u.A, { size: u.M.MEDIUM, className: I.I, game: c, skuId: a.id }),
                                      p,
                                  ],
                              }),
                          ],
                      }),
            ],
        })
    );
});
