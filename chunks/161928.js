"use strict";
n.d(t, { A: () => S });
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
    g = n(97352),
    m = n(67480),
    f = n(615396),
    A = n(652215),
    E = n(788868),
    x = n(985018),
    v = n(440526),
    I = n(20976),
    N = n(473169);
let S = a.Ay.connectStores([m.A, c.A, g.A, p.default], (e) => {
    let { giftCode: t } = e,
        n = m.A.get(t.skuId),
        { subscriptionPlanId: i } = t;
    return {
        sku: n,
        subscriptionPlan: null != i ? (0, f.c9)(i) : null,
        application: c.A.getApplication(n.applicationId),
        gifter: p.default.getUser(t.userId),
    };
})((e) => {
    let { error: t, giftCode: n, gifter: r, sku: a, application: c, subscriptionPlan: p } = e,
        g = null == r ? x.intl.string(x.t.lTGZAl) : x.intl.formatToPlainString(x.t.TjWdPc, { username: r.username }),
        m = a.name;
    return (
        null != p &&
            (m = x.intl.formatToPlainString(p.interval === E.WT.MONTH ? x.t.CTpcCZ : x.t["rgPWG/"], {
                skuName: a.name,
                intervalCount: p.intervalCount,
            })),
        (0, i.jsxs)(s.Fragment, {
            children: [
                null != n.giftStyle
                    ? (0, i.jsx)(_.A, { defaultAnimationState: h.oA.LOOP, giftStyle: n.giftStyle, className: v.e })
                    : (0, i.jsx)(d.eu, {
                          src: null != r ? r.getAvatarURL(void 0, 100) : null,
                          size: o._3J.DEPRECATED_SIZE_100,
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
                                  className: l()(N.Ot, I.tR),
                                  children: [
                                      a.productLine !== A.EZt.COLLECTIBLES &&
                                          (0, i.jsx)(u.A, { size: u.M.MEDIUM, className: v.I, game: c, skuId: a.id }),
                                      m,
                                  ],
                              }),
                          ],
                      }),
            ],
        })
    );
});
