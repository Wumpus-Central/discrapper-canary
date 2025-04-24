n.d(t, { Z: () => O });
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    o = n(442837),
    a = n(481060),
    c = n(812206),
    u = n(388905),
    d = n(925329),
    h = n(479446),
    g = n(981632),
    p = n(594174),
    f = n(509545),
    m = n(55563),
    _ = n(296848),
    x = n(981631),
    E = n(474936),
    b = n(388032),
    v = n(378027),
    j = n(893354),
    I = n(20493);
let O = o.ZP.connectStores([m.Z, c.Z, f.Z, p.default], (e) => {
    let { giftCode: t } = e,
        n = m.Z.get(t.skuId),
        { subscriptionPlanId: r } = t;
    return {
        sku: n,
        subscriptionPlan: null != r ? (0, _.oE)(r) : null,
        application: c.Z.getApplication(n.applicationId),
        gifter: p.default.getUser(t.userId)
    };
})((e) => {
    let { error: t, giftCode: n, gifter: l, sku: o, application: c, subscriptionPlan: p } = e,
        f = null == l ? b.intl.string(b.t.lTGZAg) : b.intl.formatToPlainString(b.t.TjWdPT, { username: l.username }),
        m = o.name;
    return (
        null != p &&
            (m = b.intl.formatToPlainString(p.interval === E.rV.MONTH ? b.t.CTpcCQ : b.t.rgPWGx, {
                skuName: o.name,
                intervalCount: p.intervalCount
            })),
        (0, r.jsxs)(i.Fragment, {
            children: [
                null != n.giftStyle
                    ? (0, r.jsx)(g.Z, {
                          defaultAnimationState: h.SR.LOOP,
                          giftStyle: n.giftStyle,
                          className: v.seasonalIcon
                      })
                    : (0, r.jsx)(u.qE, {
                          src: null != l ? l.getAvatarURL(void 0, 100) : null,
                          size: a.EFr.DEPRECATED_SIZE_100,
                          className: I.marginBottom20
                      }),
                null != t
                    ? (0, r.jsxs)(i.Fragment, {
                          children: [(0, r.jsx)(u.DK, { children: b.intl.string(b.t.mDFGFh) }), (0, r.jsx)(u.Dx, { children: t })]
                      })
                    : (0, r.jsxs)(i.Fragment, {
                          children: [
                              (0, r.jsx)(u.DK, { children: f }),
                              (0, r.jsxs)(u.Dx, {
                                  className: s()(I.marginTop8, j.flexCenter),
                                  children: [
                                      o.productLine !== x.POd.COLLECTIBLES &&
                                          (0, r.jsx)(d.Z, {
                                              size: d.Z.Sizes.MEDIUM,
                                              className: v.applicationIcon,
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
