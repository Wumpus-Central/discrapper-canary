n.d(t, { Z: () => O });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(442837),
    o = n(481060),
    c = n(812206),
    u = n(388905),
    d = n(925329),
    h = n(479446),
    p = n(981632),
    g = n(594174),
    m = n(509545),
    f = n(55563),
    _ = n(296848),
    x = n(981631),
    b = n(474936),
    E = n(388032),
    v = n(378027),
    I = n(893354),
    j = n(20493);
let O = a.ZP.connectStores([f.Z, c.Z, m.Z, g.default], (e) => {
    let { giftCode: t } = e,
        n = f.Z.get(t.skuId),
        { subscriptionPlanId: r } = t;
    return {
        sku: n,
        subscriptionPlan: null != r ? (0, _.oE)(r) : null,
        application: c.Z.getApplication(n.applicationId),
        gifter: g.default.getUser(t.userId)
    };
})((e) => {
    let { error: t, giftCode: n, gifter: l, sku: a, application: c, subscriptionPlan: g } = e,
        m = null == l ? E.intl.string(E.t.lTGZAg) : E.intl.formatToPlainString(E.t.TjWdPT, { username: l.username }),
        f = a.name;
    return (
        null != g &&
            (f = E.intl.formatToPlainString(g.interval === b.rV.MONTH ? E.t.CTpcCQ : E.t.rgPWGx, {
                skuName: a.name,
                intervalCount: g.intervalCount
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
                          size: o.EFr.DEPRECATED_SIZE_100,
                          className: j.marginBottom20
                      }),
                null != t
                    ? (0, r.jsxs)(i.Fragment, {
                          children: [(0, r.jsx)(u.DK, { children: E.intl.string(E.t.mDFGFh) }), (0, r.jsx)(u.Dx, { children: t })]
                      })
                    : (0, r.jsxs)(i.Fragment, {
                          children: [
                              (0, r.jsx)(u.DK, { children: m }),
                              (0, r.jsxs)(u.Dx, {
                                  className: s()(j.marginTop8, I.flexCenter),
                                  children: [
                                      a.productLine !== x.POd.COLLECTIBLES &&
                                          (0, r.jsx)(d.Z, {
                                              size: d.Z.Sizes.MEDIUM,
                                              className: v.applicationIcon,
                                              game: c,
                                              skuId: a.id
                                          }),
                                      f
                                  ]
                              })
                          ]
                      })
            ]
        })
    );
});
