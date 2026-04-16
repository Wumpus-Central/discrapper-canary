"use strict";
n.d(t, { A: () => C });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    a = n(311907),
    o = n(397927),
    c = n(587895),
    d = n(854378),
    u = n(769015),
    h = n(242874),
    _ = n(75825),
    p = n(287809),
    m = n(97352),
    g = n(67480),
    A = n(615396),
    f = n(652215),
    E = n(788868),
    x = n(985018),
    I = n(402693),
    N = n(653307),
    v = n(818050);
let C = a.Ay.connectStores([g.A, c.A, m.A, p.default], (e) => {
    let { giftCode: t } = e,
        n = g.A.get(t.skuId),
        { subscriptionPlanId: i } = t;
    return {
        sku: n,
        subscriptionPlan: null != i ? (0, A.c9)(i) : null,
        application: c.A.getApplication(n.applicationId),
        gifter: p.default.getUser(t.userId),
    };
})((e) => {
    let { error: t, giftCode: n, gifter: r, sku: a, application: c, subscriptionPlan: p } = e,
        m = null == r ? x.intl.string(x.t.lTGZAl) : x.intl.formatToPlainString(x.t.TjWdPc, { username: r.username }),
        g = a.name;
    return (
        null != p &&
            (g = x.intl.formatToPlainString(p.interval === E.WT.MONTH ? x.t.CTpcCZ : x.t["rgPWG/"], {
                skuName: a.name,
                intervalCount: p.intervalCount,
            })),
        (0, i.jsxs)(s.Fragment, {
            children: [
                null != n.giftStyle
                    ? (0, i.jsx)(_.A, { defaultAnimationState: h.oA.LOOP, giftStyle: n.giftStyle, className: I.e })
                    : (0, i.jsx)(d.eu, {
                          src: null != r ? r.getAvatarURL(void 0, 100) : null,
                          size: o._3J.DEPRECATED_SIZE_100,
                          className: v.SX,
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
                              (0, i.jsx)(d.tK, { children: m }),
                              (0, i.jsxs)(d.hE, {
                                  className: l()(v.Ot, N.tR),
                                  children: [
                                      a.productLine !== f.EZt.COLLECTIBLES &&
                                          (0, i.jsx)(u.A, { size: u.M.MEDIUM, className: I.I, game: c, skuId: a.id }),
                                      g,
                                  ],
                              }),
                          ],
                      }),
            ],
        })
    );
});
