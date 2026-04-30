n.d(t, { A: () => C });
var l = n(627968),
    a = n(64700),
    s = n(503698),
    i = n.n(s),
    r = n(17928),
    o = n(778712),
    u = n(587895),
    c = n(854378),
    d = n(137177),
    h = n(242874),
    m = n(75825),
    g = n(287809),
    f = n(97352),
    _ = n(67480),
    A = n(615396),
    x = n(652215),
    E = n(788868),
    p = n(985018),
    S = n(402693),
    j = n(653307),
    N = n(818050);
let C = r.Ay.connectStores([_.A, u.A, f.A, g.default], (e) => {
    let { giftCode: t } = e,
        n = _.A.get(t.skuId),
        { subscriptionPlanId: l } = t;
    return {
        sku: n,
        subscriptionPlan: null != l ? (0, A.c9)(l) : null,
        application: u.A.getApplication(n.applicationId),
        gifter: g.default.getUser(t.userId),
    };
})((e) => {
    let { error: t, giftCode: n, gifter: s, sku: r, application: u, subscriptionPlan: g } = e,
        f = null == s ? p.intl.string(p.t.lTGZAl) : p.intl.formatToPlainString(p.t.TjWdPc, { username: s.username }),
        _ = r.name;
    return (
        null != g &&
            (_ = p.intl.formatToPlainString(g.interval === E.WT.MONTH ? p.t.CTpcCZ : p.t["rgPWG/"], {
                skuName: r.name,
                intervalCount: g.intervalCount,
            })),
        (0, l.jsxs)(a.Fragment, {
            children: [
                null != n.giftStyle
                    ? (0, l.jsx)(m.A, { defaultAnimationState: h.oA.LOOP, giftStyle: n.giftStyle, className: S.e })
                    : (0, l.jsx)(c.eu, {
                          src: null != s ? s.getAvatarURL(void 0, 100) : null,
                          size: o._3.DEPRECATED_SIZE_100,
                          className: N.SX,
                      }),
                null != t
                    ? (0, l.jsxs)(a.Fragment, {
                          children: [
                              (0, l.jsx)(c.tK, { children: p.intl.string(p.t.mDFGFj) }),
                              (0, l.jsx)(c.hE, { children: t }),
                          ],
                      })
                    : (0, l.jsxs)(a.Fragment, {
                          children: [
                              (0, l.jsx)(c.tK, { children: f }),
                              (0, l.jsxs)(c.hE, {
                                  className: i()(N.Ot, j.tR),
                                  children: [
                                      r.productLine !== x.EZt.COLLECTIBLES &&
                                          (0, l.jsx)(d.A, { size: d.M.MEDIUM, className: S.I, game: u, skuId: r.id }),
                                      _,
                                  ],
                              }),
                          ],
                      }),
            ],
        })
    );
});
