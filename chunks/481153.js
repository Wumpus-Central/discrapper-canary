n.d(t, { Z: () => I });
var r = n(200651),
    i = n(192379),
    s = n(120356),
    l = n.n(s),
    o = n(442837),
    a = n(481060),
    c = n(812206),
    u = n(388905),
    d = n(925329),
    h = n(479446),
    p = n(981632),
    g = n(594174),
    f = n(509545),
    m = n(55563),
    _ = n(296848),
    N = n(981631),
    x = n(474936),
    b = n(388032),
    E = n(378027),
    v = n(893354),
    j = n(20493);
let I = o.ZP.connectStores([m.Z, c.Z, f.Z, g.default], (e) => {
    let { giftCode: t } = e,
        n = m.Z.get(t.skuId),
        { subscriptionPlanId: r } = t;
    return {
        sku: n,
        subscriptionPlan: null != r ? (0, _.oE)(r) : null,
        application: c.Z.getApplication(n.applicationId),
        gifter: g.default.getUser(t.userId)
    };
})((e) => {
    let { error: t, giftCode: n, gifter: s, sku: o, application: c, subscriptionPlan: g } = e,
        f = null == s ? b.NW.string(b.t.lTGZAg) : b.NW.formatToPlainString(b.t.TjWdPT, { username: s.username }),
        m = o.name;
    return (
        null != g &&
            (m = b.NW.formatToPlainString(g.interval === x.rV.MONTH ? b.t.CTpcCQ : b.t.rgPWGx, {
                skuName: o.name,
                intervalCount: g.intervalCount
            })),
        (0, r.jsxs)(i.Fragment, {
            children: [
                null != n.giftStyle
                    ? (0, r.jsx)(p.Z, {
                          defaultAnimationState: h.SR.LOOP,
                          giftStyle: n.giftStyle,
                          className: E.seasonalIcon
                      })
                    : (0, r.jsx)(u.qE, {
                          src: null != s ? s.getAvatarURL(void 0, 100) : null,
                          size: a.EFr.DEPRECATED_SIZE_100,
                          className: j.marginBottom20
                      }),
                null != t
                    ? (0, r.jsxs)(i.Fragment, {
                          children: [(0, r.jsx)(u.DK, { children: b.NW.string(b.t.mDFGFh) }), (0, r.jsx)(u.Dx, { children: t })]
                      })
                    : (0, r.jsxs)(i.Fragment, {
                          children: [
                              (0, r.jsx)(u.DK, { children: f }),
                              (0, r.jsxs)(u.Dx, {
                                  className: l()(j.marginTop8, v.flexCenter),
                                  children: [
                                      o.productLine !== N.POd.COLLECTIBLES &&
                                          (0, r.jsx)(d.Z, {
                                              size: d.Z.Sizes.MEDIUM,
                                              className: E.applicationIcon,
                                              game: c,
                                              skuId: o.id
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
