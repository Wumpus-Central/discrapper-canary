n.d(t, { Z: () => S });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(812206),
    u = n(388905),
    d = n(925329),
    h = n(479446),
    g = n(981632),
    p = n(594174),
    m = n(509545),
    f = n(55563),
    _ = n(296848),
    x = n(981631),
    E = n(474936),
    b = n(388032),
    v = n(378027),
    I = n(893354),
    O = n(20493);
let S = a.ZP.connectStores([f.Z, c.Z, m.Z, p.default], (e) => {
    let { giftCode: t } = e,
        n = f.Z.get(t.skuId),
        { subscriptionPlanId: r } = t;
    return {
        sku: n,
        subscriptionPlan: null != r ? (0, _.oE)(r) : null,
        application: c.Z.getApplication(n.applicationId),
        gifter: p.default.getUser(t.userId)
    };
})((e) => {
    let { error: t, giftCode: n, gifter: l, sku: a, application: c, subscriptionPlan: p } = e,
        m = null == l ? b.intl.string(b.t.lTGZAg) : b.intl.formatToPlainString(b.t.TjWdPT, { username: l.username }),
        f = a.name;
    return (
        null != p &&
            (f = b.intl.formatToPlainString(p.interval === E.rV.MONTH ? b.t.CTpcCQ : b.t.rgPWGx, {
                skuName: a.name,
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
                          size: s.EFr.DEPRECATED_SIZE_100,
                          className: O.marginBottom20
                      }),
                null != t
                    ? (0, r.jsxs)(i.Fragment, {
                          children: [(0, r.jsx)(u.DK, { children: b.intl.string(b.t.mDFGFh) }), (0, r.jsx)(u.Dx, { children: t })]
                      })
                    : (0, r.jsxs)(i.Fragment, {
                          children: [
                              (0, r.jsx)(u.DK, { children: m }),
                              (0, r.jsxs)(u.Dx, {
                                  className: o()(O.marginTop8, I.flexCenter),
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
