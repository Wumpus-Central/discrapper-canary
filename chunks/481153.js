n.d(t, { Z: () => N });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(812206),
    u = n(388905),
    d = n(925329),
    h = n(479446),
    p = n(981632),
    m = n(594174),
    g = n(509545),
    f = n(55563),
    _ = n(296848),
    x = n(981631),
    E = n(474936),
    b = n(388032),
    I = n(378027),
    v = n(893354),
    O = n(20493);
let N = o.ZP.connectStores([f.Z, c.Z, g.Z, m.default], (e) => {
    let { giftCode: t } = e,
        n = f.Z.get(t.skuId),
        { subscriptionPlanId: r } = t;
    return {
        sku: n,
        subscriptionPlan: null != r ? (0, _.oE)(r) : null,
        application: c.Z.getApplication(n.applicationId),
        gifter: m.default.getUser(t.userId)
    };
})((e) => {
    let { error: t, giftCode: n, gifter: l, sku: o, application: c, subscriptionPlan: m } = e,
        g = null == l ? b.intl.string(b.t.lTGZAg) : b.intl.formatToPlainString(b.t.TjWdPT, { username: l.username }),
        f = o.name;
    return (
        null != m &&
            (f = b.intl.formatToPlainString(m.interval === E.rV.MONTH ? b.t.CTpcCQ : b.t.rgPWGx, {
                skuName: o.name,
                intervalCount: m.intervalCount
            })),
        (0, r.jsxs)(i.Fragment, {
            children: [
                null != n.giftStyle
                    ? (0, r.jsx)(p.Z, {
                          defaultAnimationState: h.SR.LOOP,
                          giftStyle: n.giftStyle,
                          className: I.seasonalIcon
                      })
                    : (0, r.jsx)(u.qE, {
                          src: null != l ? l.getAvatarURL(void 0, 100) : null,
                          size: s.EFr.DEPRECATED_SIZE_100,
                          className: O.marginBottom20
                      }),
                null != t
                    ? (0, r.jsxs)(i.Fragment, {
                          children: [(0, r.jsx)(u.DK, { children: b.intl.string(b.t.mDFGFh) }), (0, r.jsx)(u.Dx, { children: t })]
                      })
                    : (0, r.jsxs)(i.Fragment, {
                          children: [
                              (0, r.jsx)(u.DK, { children: g }),
                              (0, r.jsxs)(u.Dx, {
                                  className: a()(O.marginTop8, v.flexCenter),
                                  children: [
                                      o.productLine !== x.POd.COLLECTIBLES &&
                                          (0, r.jsx)(d.Z, {
                                              size: d.Z.Sizes.MEDIUM,
                                              className: I.applicationIcon,
                                              game: c,
                                              skuId: o.id
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
