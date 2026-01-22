n.d(t, { A: () => y });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    a = n(311907),
    o = n(397927),
    c = n(587895),
    u = n(854378),
    d = n(769015),
    h = n(242874),
    f = n(75825),
    p = n(287809),
    g = n(97352),
    m = n(67480),
    A = n(615396),
    x = n(652215),
    _ = n(788868),
    E = n(985018),
    b = n(440526),
    v = n(20976),
    j = n(473169);
let y = a.Ay.connectStores([m.A, c.A, g.A, p.default], (e) => {
    let { giftCode: t } = e,
        n = m.A.get(t.skuId),
        { subscriptionPlanId: r } = t;
    return {
        sku: n,
        subscriptionPlan: null != r ? (0, A.c9)(r) : null,
        application: c.A.getApplication(n.applicationId),
        gifter: p.default.getUser(t.userId),
    };
})((e) => {
    let { error: t, giftCode: n, gifter: s, sku: a, application: c, subscriptionPlan: p } = e,
        g = null == s ? E.intl.string(E.t.lTGZAl) : E.intl.formatToPlainString(E.t.TjWdPc, { username: s.username }),
        m = a.name;
    return (
        null != p &&
            (m = E.intl.formatToPlainString(p.interval === _.WT.MONTH ? E.t.CTpcCZ : E.t["rgPWG/"], {
                skuName: a.name,
                intervalCount: p.intervalCount,
            })),
        (0, r.jsxs)(i.Fragment, {
            children: [
                null != n.giftStyle
                    ? (0, r.jsx)(f.A, {
                          defaultAnimationState: h.oA.LOOP,
                          giftStyle: n.giftStyle,
                          className: b.e,
                      })
                    : (0, r.jsx)(u.eu, {
                          src: null != s ? s.getAvatarURL(void 0, 100) : null,
                          size: o._3J.DEPRECATED_SIZE_100,
                          className: j.SX,
                      }),
                null != t
                    ? (0, r.jsxs)(i.Fragment, {
                          children: [
                              (0, r.jsx)(u.tK, { children: E.intl.string(E.t.mDFGFj) }),
                              (0, r.jsx)(u.hE, { children: t }),
                          ],
                      })
                    : (0, r.jsxs)(i.Fragment, {
                          children: [
                              (0, r.jsx)(u.tK, { children: g }),
                              (0, r.jsxs)(u.hE, {
                                  className: l()(j.Ot, v.tR),
                                  children: [
                                      a.productLine !== x.EZt.COLLECTIBLES &&
                                          (0, r.jsx)(d.A, {
                                              size: d.M.MEDIUM,
                                              className: b.I,
                                              game: c,
                                              skuId: a.id,
                                          }),
                                      m,
                                  ],
                              }),
                          ],
                      }),
            ],
        })
    );
});
