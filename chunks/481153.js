var i = n(200651),
    r = n(192379),
    s = n(120356),
    l = n.n(s),
    o = n(442837),
    a = n(481060),
    c = n(812206),
    d = n(388905),
    u = n(925329),
    h = n(479446),
    g = n(981632),
    m = n(594174),
    f = n(509545),
    p = n(55563),
    x = n(296848),
    _ = n(981631),
    E = n(474936),
    I = n(388032),
    N = n(93008),
    v = n(652849),
    C = n(232186);
t.Z = o.ZP.connectStores([p.Z, c.Z, f.Z, m.default], (e) => {
    let { giftCode: t } = e,
        n = p.Z.get(t.skuId),
        { subscriptionPlanId: i } = t;
    return {
        sku: n,
        subscriptionPlan: null != i ? (0, x.oE)(i) : null,
        application: c.Z.getApplication(n.applicationId),
        gifter: m.default.getUser(t.userId)
    };
})((e) => {
    let { error: t, giftCode: n, gifter: s, sku: o, application: c, subscriptionPlan: m } = e,
        f = null == s ? I.intl.string(I.t.lTGZAg) : I.intl.formatToPlainString(I.t.TjWdPT, { username: s.username }),
        p = o.name;
    return (
        null != m &&
            (p = I.intl.formatToPlainString(m.interval === E.rV.MONTH ? I.t.CTpcCQ : I.t.rgPWGx, {
                skuName: o.name,
                intervalCount: m.intervalCount
            })),
        (0, i.jsxs)(r.Fragment, {
            children: [
                null != n.giftStyle
                    ? (0, i.jsx)(g.Z, {
                          defaultAnimationState: h.SR.LOOP,
                          giftStyle: n.giftStyle,
                          className: N.seasonalIcon
                      })
                    : (0, i.jsx)(d.qE, {
                          src: null != s ? s.getAvatarURL(void 0, 100) : null,
                          size: a.AvatarSizes.DEPRECATED_SIZE_100,
                          className: C.marginBottom20
                      }),
                null != t
                    ? (0, i.jsxs)(r.Fragment, {
                          children: [(0, i.jsx)(d.DK, { children: I.intl.string(I.t.mDFGFh) }), (0, i.jsx)(d.Dx, { children: t })]
                      })
                    : (0, i.jsxs)(r.Fragment, {
                          children: [
                              (0, i.jsx)(d.DK, { children: f }),
                              (0, i.jsxs)(d.Dx, {
                                  className: l()(C.marginTop8, v.flexCenter),
                                  children: [
                                      o.productLine !== _.POd.COLLECTIBLES &&
                                          (0, i.jsx)(u.Z, {
                                              size: u.Z.Sizes.MEDIUM,
                                              className: N.applicationIcon,
                                              game: c,
                                              skuId: o.id
                                          }),
                                      p
                                  ]
                              })
                          ]
                      })
            ]
        })
    );
});
