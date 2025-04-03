n.d(t, { Z: () => j });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    l = n(442837),
    s = n(481060),
    c = n(812206),
    u = n(388905),
    d = n(925329),
    p = n(479446),
    g = n(981632),
    h = n(594174),
    f = n(509545),
    m = n(55563),
    _ = n(296848),
    b = n(981631),
    x = n(474936),
    N = n(388032),
    v = n(378027),
    E = n(893354),
    I = n(20493);
let j = l.ZP.connectStores([m.Z, c.Z, f.Z, h.default], (e) => {
    let { giftCode: t } = e,
        n = m.Z.get(t.skuId),
        { subscriptionPlanId: r } = t;
    return {
        sku: n,
        subscriptionPlan: null != r ? (0, _.oE)(r) : null,
        application: c.Z.getApplication(n.applicationId),
        gifter: h.default.getUser(t.userId)
    };
})((e) => {
    let { error: t, giftCode: n, gifter: o, sku: l, application: c, subscriptionPlan: h } = e,
        f = null == o ? N.NW.string(N.t.lTGZAg) : N.NW.formatToPlainString(N.t.TjWdPT, { username: o.username }),
        m = l.name;
    return (
        null != h &&
            (m = N.NW.formatToPlainString(h.interval === x.rV.MONTH ? N.t.CTpcCQ : N.t.rgPWGx, {
                skuName: l.name,
                intervalCount: h.intervalCount
            })),
        (0, r.jsxs)(i.Fragment, {
            children: [
                null != n.giftStyle
                    ? (0, r.jsx)(g.Z, {
                          defaultAnimationState: p.SR.LOOP,
                          giftStyle: n.giftStyle,
                          className: v.seasonalIcon
                      })
                    : (0, r.jsx)(u.qE, {
                          src: null != o ? o.getAvatarURL(void 0, 100) : null,
                          size: s.EFr.DEPRECATED_SIZE_100,
                          className: I.marginBottom20
                      }),
                null != t
                    ? (0, r.jsxs)(i.Fragment, {
                          children: [(0, r.jsx)(u.DK, { children: N.NW.string(N.t.mDFGFh) }), (0, r.jsx)(u.Dx, { children: t })]
                      })
                    : (0, r.jsxs)(i.Fragment, {
                          children: [
                              (0, r.jsx)(u.DK, { children: f }),
                              (0, r.jsxs)(u.Dx, {
                                  className: a()(I.marginTop8, E.flexCenter),
                                  children: [
                                      l.productLine !== b.POd.COLLECTIBLES &&
                                          (0, r.jsx)(d.Z, {
                                              size: d.Z.Sizes.MEDIUM,
                                              className: v.applicationIcon,
                                              game: c,
                                              skuId: l.id
                                          }),
                                      m
                                  ]
                              })
                          ]
                      })
            ]
        })
    );
});
