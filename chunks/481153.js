n.d(t, { Z: () => O });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    o = n(442837),
    a = n(481060),
    c = n(812206),
    u = n(388905),
    d = n(925329),
    h = n(479446),
    p = n(981632),
    m = n(594174),
    f = n(509545),
    g = n(55563),
    _ = n(296848),
    x = n(981631),
    b = n(474936),
    E = n(388032),
    v = n(378027),
    j = n(893354),
    I = n(20493);
let O = o.ZP.connectStores([g.Z, c.Z, f.Z, m.default], (e) => {
    let { giftCode: t } = e,
        n = g.Z.get(t.skuId),
        { subscriptionPlanId: r } = t;
    return {
        sku: n,
        subscriptionPlan: null != r ? (0, _.oE)(r) : null,
        application: c.Z.getApplication(n.applicationId),
        gifter: m.default.getUser(t.userId)
    };
})((e) => {
    let { error: t, giftCode: n, gifter: l, sku: o, application: c, subscriptionPlan: m } = e,
        f = null == l ? E.intl.string(E.t.lTGZAg) : E.intl.formatToPlainString(E.t.TjWdPT, { username: l.username }),
        g = o.name;
    return (
        null != m &&
            (g = E.intl.formatToPlainString(m.interval === b.rV.MONTH ? E.t.CTpcCQ : E.t.rgPWGx, {
                skuName: o.name,
                intervalCount: m.intervalCount
            })),
        (0, r.jsxs)(i.Fragment, {
            children: [
                null != n.giftStyle
                    ? (0, r.jsx)(p.Z, {
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
                          children: [(0, r.jsx)(u.DK, { children: E.intl.string(E.t.mDFGFh) }), (0, r.jsx)(u.Dx, { children: t })]
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
                                      g
                                  ]
                              })
                          ]
                      })
            ]
        })
    );
});
