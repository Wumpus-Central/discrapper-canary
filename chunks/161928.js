n.d(t, { A: () => S });
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(17928),
    o = n(778712),
    u = n(587895),
    c = n(854378),
    d = n(137177),
    _ = n(242874),
    h = n(165191),
    m = n(287809),
    g = n(97352),
    f = n(67480),
    E = n(615396),
    A = n(652215),
    p = n(788868),
    x = n(985018),
    N = n(402693),
    I = n(653307),
    v = n(818050);
let S = s.Ay.connectStores([f.A, u.A, g.A, m.default], (e) => {
    let { giftCode: t } = e,
        n = f.A.get(t.skuId),
        { subscriptionPlanId: r } = t;
    return {
        sku: n,
        subscriptionPlan: null != r ? (0, E.c9)(r) : null,
        application: u.A.getApplication(n.applicationId),
        gifter: m.default.getUser(t.userId),
    };
})((e) => {
    let { error: t, giftCode: n, gifter: i, sku: s, application: u, subscriptionPlan: m } = e,
        g = null == i ? x.intl.string(x.t.lTGZAl) : x.intl.formatToPlainString(x.t.TjWdPc, { username: i.username }),
        f = s.name;
    return (
        null != m &&
            (f = x.intl.formatToPlainString(m.interval === p.WT.MONTH ? x.t.CTpcCZ : x.t["rgPWG/"], {
                skuName: s.name,
                intervalCount: m.intervalCount,
            })),
        (0, r.jsxs)(l.Fragment, {
            children: [
                null != n.giftStyle
                    ? (0, r.jsx)(h.A, { defaultAnimationState: _.oA.LOOP, giftStyle: n.giftStyle, className: N.e })
                    : (0, r.jsx)(c.eu, {
                          src: null != i ? i.getAvatarURL(void 0, 100) : null,
                          size: o._3.DEPRECATED_SIZE_100,
                          className: v.SX,
                      }),
                null != t
                    ? (0, r.jsxs)(l.Fragment, {
                          children: [
                              (0, r.jsx)(c.tK, { children: x.intl.string(x.t.mDFGFj) }),
                              (0, r.jsx)(c.hE, { children: t }),
                          ],
                      })
                    : (0, r.jsxs)(l.Fragment, {
                          children: [
                              (0, r.jsx)(c.tK, { children: g }),
                              (0, r.jsxs)(c.hE, {
                                  className: a()(v.Ot, I.tR),
                                  children: [
                                      s.productLine !== A.EZt.COLLECTIBLES &&
                                          (0, r.jsx)(d.A, { size: d.M.MEDIUM, className: N.I, game: u, skuId: s.id }),
                                      f,
                                  ],
                              }),
                          ],
                      }),
            ],
        })
    );
});
