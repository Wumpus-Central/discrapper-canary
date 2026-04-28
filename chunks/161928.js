n.d(t, { A: () => y });
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(17928),
    o = n(778712),
    u = n(587895),
    c = n(854378),
    d = n(137177),
    h = n(242874),
    m = n(75825),
    g = n(287809),
    f = n(97352),
    p = n(67480),
    _ = n(615396),
    E = n(652215),
    A = n(788868),
    x = n(985018),
    N = n(402693),
    I = n(653307),
    j = n(818050);
let y = s.Ay.connectStores([p.A, u.A, f.A, g.default], (e) => {
    let { giftCode: t } = e,
        n = p.A.get(t.skuId),
        { subscriptionPlanId: l } = t;
    return {
        sku: n,
        subscriptionPlan: null != l ? (0, _.c9)(l) : null,
        application: u.A.getApplication(n.applicationId),
        gifter: g.default.getUser(t.userId),
    };
})((e) => {
    let { error: t, giftCode: n, gifter: i, sku: s, application: u, subscriptionPlan: g } = e,
        f = null == i ? x.intl.string(x.t.lTGZAl) : x.intl.formatToPlainString(x.t.TjWdPc, { username: i.username }),
        p = s.name;
    return (
        null != g &&
            (p = x.intl.formatToPlainString(g.interval === A.WT.MONTH ? x.t.CTpcCZ : x.t["rgPWG/"], {
                skuName: s.name,
                intervalCount: g.intervalCount,
            })),
        (0, l.jsxs)(r.Fragment, {
            children: [
                null != n.giftStyle
                    ? (0, l.jsx)(m.A, { defaultAnimationState: h.oA.LOOP, giftStyle: n.giftStyle, className: N.e })
                    : (0, l.jsx)(c.eu, {
                          src: null != i ? i.getAvatarURL(void 0, 100) : null,
                          size: o._3.DEPRECATED_SIZE_100,
                          className: j.SX,
                      }),
                null != t
                    ? (0, l.jsxs)(r.Fragment, {
                          children: [
                              (0, l.jsx)(c.tK, { children: x.intl.string(x.t.mDFGFj) }),
                              (0, l.jsx)(c.hE, { children: t }),
                          ],
                      })
                    : (0, l.jsxs)(r.Fragment, {
                          children: [
                              (0, l.jsx)(c.tK, { children: f }),
                              (0, l.jsxs)(c.hE, {
                                  className: a()(j.Ot, I.tR),
                                  children: [
                                      s.productLine !== E.EZt.COLLECTIBLES &&
                                          (0, l.jsx)(d.A, { size: d.M.MEDIUM, className: N.I, game: u, skuId: s.id }),
                                      p,
                                  ],
                              }),
                          ],
                      }),
            ],
        })
    );
});
