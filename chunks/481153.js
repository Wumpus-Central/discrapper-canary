n.d(t, { Z: () => T });
var i = n(200651),
    r = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(812206),
    d = n(388905),
    u = n(925329),
    _ = n(479446),
    h = n(981632),
    g = n(594174),
    p = n(509545),
    m = n(55563),
    f = n(296848),
    E = n(981631),
    I = n(474936),
    x = n(388032),
    C = n(93008),
    N = n(652849),
    v = n(232186);
let T = o.ZP.connectStores([m.Z, c.Z, p.Z, g.default], (e) => {
    let { giftCode: t } = e,
        n = m.Z.get(t.skuId),
        { subscriptionPlanId: i } = t;
    return {
        sku: n,
        subscriptionPlan: null != i ? (0, f.oE)(i) : null,
        application: c.Z.getApplication(n.applicationId),
        gifter: g.default.getUser(t.userId)
    };
})((e) => {
    let { error: t, giftCode: n, gifter: l, sku: o, application: c, subscriptionPlan: g } = e,
        p = null == l ? x.intl.string(x.t.lTGZAg) : x.intl.formatToPlainString(x.t.TjWdPT, { username: l.username }),
        m = o.name;
    return (
        null != g &&
            (m = x.intl.formatToPlainString(g.interval === I.rV.MONTH ? x.t.CTpcCQ : x.t.rgPWGx, {
                skuName: o.name,
                intervalCount: g.intervalCount
            })),
        (0, i.jsxs)(r.Fragment, {
            children: [
                null != n.giftStyle
                    ? (0, i.jsx)(h.Z, {
                          defaultAnimationState: _.SR.LOOP,
                          giftStyle: n.giftStyle,
                          className: C.seasonalIcon
                      })
                    : (0, i.jsx)(d.qE, {
                          src: null != l ? l.getAvatarURL(void 0, 100) : null,
                          size: s.EFr.DEPRECATED_SIZE_100,
                          className: v.marginBottom20
                      }),
                null != t
                    ? (0, i.jsxs)(r.Fragment, {
                          children: [(0, i.jsx)(d.DK, { children: x.intl.string(x.t.mDFGFh) }), (0, i.jsx)(d.Dx, { children: t })]
                      })
                    : (0, i.jsxs)(r.Fragment, {
                          children: [
                              (0, i.jsx)(d.DK, { children: p }),
                              (0, i.jsxs)(d.Dx, {
                                  className: a()(v.marginTop8, N.flexCenter),
                                  children: [
                                      o.productLine !== E.POd.COLLECTIBLES &&
                                          (0, i.jsx)(u.Z, {
                                              size: u.Z.Sizes.MEDIUM,
                                              className: C.applicationIcon,
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
