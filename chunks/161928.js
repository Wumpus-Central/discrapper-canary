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
    f = n(615396),
    A = n(652215),
    x = n(788868),
    E = n(985018),
    I = n(440526),
    v = n(20976),
    N = n(473169);
let j = a.Ay.connectStores([m.A, d.A, g.A, p.default], (e) => {
    let { giftCode: t } = e,
        n = m.A.get(t.skuId),
        { subscriptionPlanId: i } = t;
    return {
        sku: n,
        subscriptionPlan: null != i ? (0, f.c9)(i) : null,
        application: d.A.getApplication(n.applicationId),
        gifter: p.default.getUser(t.userId),
    };
})((e) => {
    let { error: t, giftCode: n, gifter: r, sku: a, application: d, subscriptionPlan: p } = e,
        g = null == r ? E.intl.string(E.t.lTGZAl) : E.intl.formatToPlainString(E.t.TjWdPc, { username: r.username }),
        m = a.name;
    return (
        null != p &&
            (m = E.intl.formatToPlainString(p.interval === x.WT.MONTH ? E.t.CTpcCZ : E.t["rgPWG/"], {
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
                          className: N.SX,
                      }),
                null != t
                    ? (0, i.jsxs)(s.Fragment, {
                          children: [
                              (0, i.jsx)(c.tK, { children: E.intl.string(E.t.mDFGFj) }),
                              (0, i.jsx)(c.hE, { children: t }),
                          ],
                      })
                    : (0, i.jsxs)(s.Fragment, {
                          children: [
                              (0, i.jsx)(c.tK, { children: g }),
                              (0, i.jsxs)(c.hE, {
                                  className: l()(N.Ot, v.tR),
                                  children: [
                                      a.productLine !== A.EZt.COLLECTIBLES &&
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
