n.d(t, { Z: () => I });
var r = n(200651),
    i = n(192379),
    s = n(120356),
    o = n.n(s),
    l = n(442837),
    a = n(481060),
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
    N = n(474936),
    b = n(388032),
    E = n(378027),
    v = n(893354),
    j = n(20493);
let I = l.ZP.connectStores([f.Z, c.Z, m.Z, p.default], (e) => {
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
    let { error: t, giftCode: n, gifter: s, sku: l, application: c, subscriptionPlan: p } = e,
        m = null == s ? b.NW.string(b.t.lTGZAg) : b.NW.formatToPlainString(b.t.TjWdPT, { username: s.username }),
        f = l.name;
    return (
        null != p &&
            (f = b.NW.formatToPlainString(p.interval === N.rV.MONTH ? b.t.CTpcCQ : b.t.rgPWGx, {
                skuName: l.name,
                intervalCount: p.intervalCount
            })),
        (0, r.jsxs)(i.Fragment, {
            children: [
                null != n.giftStyle
                    ? (0, r.jsx)(g.Z, {
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
                              (0, r.jsx)(u.DK, { children: m }),
                              (0, r.jsxs)(u.Dx, {
                                  className: o()(j.marginTop8, v.flexCenter),
                                  children: [
                                      l.productLine !== x.POd.COLLECTIBLES &&
                                          (0, r.jsx)(d.Z, {
                                              size: d.Z.Sizes.MEDIUM,
                                              className: E.applicationIcon,
                                              game: c,
                                              skuId: l.id
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
