"use strict";
n.d(t, { A: () => j });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    l = n.n(r),
    a = n(311907),
    o = n(397927),
    d = n(587895),
    c = n(854378),
    u = n(769015),
    h = n(242874),
    _ = n(75825),
    p = n(287809),
    g = n(97352),
    m = n(67480),
    A = n(615396),
    f = n(652215),
    E = n(788868),
    x = n(985018),
    I = n(488956),
    N = n(287638),
    v = n(153335);
let j = a.Ay.connectStores([m.A, d.A, g.A, p.default], (e) => {
    let { giftCode: t } = e,
        n = m.A.get(t.skuId),
        { subscriptionPlanId: i } = t;
    return {
        sku: n,
        subscriptionPlan: null != i ? (0, A.c9)(i) : null,
        application: d.A.getApplication(n.applicationId),
        gifter: p.default.getUser(t.userId),
    };
})((e) => {
    let { error: t, giftCode: n, gifter: r, sku: a, application: d, subscriptionPlan: p } = e,
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
                    ? (0, i.jsx)(_.A, { defaultAnimationState: h.oA.LOOP, giftStyle: n.giftStyle, className: I.e })
                    : (0, i.jsx)(c.eu, {
                          src: null != r ? r.getAvatarURL(void 0, 100) : null,
                          size: o._3J.DEPRECATED_SIZE_100,
                          className: v.SX,
                      }),
                null != t
                    ? (0, i.jsxs)(s.Fragment, {
                          children: [
                              (0, i.jsx)(c.tK, { children: x.intl.string(x.t.mDFGFj) }),
                              (0, i.jsx)(c.hE, { children: t }),
                          ],
                      })
                    : (0, i.jsxs)(s.Fragment, {
                          children: [
                              (0, i.jsx)(c.tK, { children: g }),
                              (0, i.jsxs)(c.hE, {
                                  className: l()(v.Ot, N.tR),
                                  children: [
                                      a.productLine !== f.EZt.COLLECTIBLES &&
                                          (0, i.jsx)(u.A, { size: u.M.MEDIUM, className: I.I, game: d, skuId: a.id }),
                                      m,
                                  ],
                              }),
                          ],
                      }),
            ],
        })
    );
});
