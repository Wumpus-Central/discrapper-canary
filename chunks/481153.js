n.d(t, { Z: () => b });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    l = n.n(a),
    s = n(442837),
    o = n(481060),
    c = n(812206),
    d = n(388905),
    u = n(925329),
    h = n(479446),
    _ = n(981632),
    m = n(594174),
    g = n(509545),
    p = n(55563),
    f = n(296848),
    x = n(981631),
    E = n(474936),
    I = n(388032),
    v = n(753997),
    C = n(179683),
    N = n(483938);
let b = s.ZP.connectStores([p.Z, c.Z, g.Z, m.default], (e) => {
    let { giftCode: t } = e,
        n = p.Z.get(t.skuId),
        { subscriptionPlanId: i } = t;
    return {
        sku: n,
        subscriptionPlan: null != i ? (0, f.oE)(i) : null,
        application: c.Z.getApplication(n.applicationId),
        gifter: m.default.getUser(t.userId)
    };
})((e) => {
    let { error: t, giftCode: n, gifter: a, sku: s, application: c, subscriptionPlan: m } = e,
        g = null == a ? I.intl.string(I.t.lTGZAg) : I.intl.formatToPlainString(I.t.TjWdPT, { username: a.username }),
        p = s.name;
    return (
        null != m &&
            (p = I.intl.formatToPlainString(m.interval === E.rV.MONTH ? I.t.CTpcCQ : I.t.rgPWGx, {
                skuName: s.name,
                intervalCount: m.intervalCount
            })),
        (0, i.jsxs)(r.Fragment, {
            children: [
                null != n.giftStyle
                    ? (0, i.jsx)(_.Z, {
                          defaultAnimationState: h.SR.LOOP,
                          giftStyle: n.giftStyle,
                          className: v.seasonalIcon
                      })
                    : (0, i.jsx)(d.qE, {
                          src: null != a ? a.getAvatarURL(void 0, 100) : null,
                          size: o.EFr.DEPRECATED_SIZE_100,
                          className: N.marginBottom20
                      }),
                null != t
                    ? (0, i.jsxs)(r.Fragment, {
                          children: [(0, i.jsx)(d.DK, { children: I.intl.string(I.t.mDFGFh) }), (0, i.jsx)(d.Dx, { children: t })]
                      })
                    : (0, i.jsxs)(r.Fragment, {
                          children: [
                              (0, i.jsx)(d.DK, { children: g }),
                              (0, i.jsxs)(d.Dx, {
                                  className: l()(N.marginTop8, C.flexCenter),
                                  children: [
                                      s.productLine !== x.POd.COLLECTIBLES &&
                                          (0, i.jsx)(u.Z, {
                                              size: u.Z.Sizes.MEDIUM,
                                              className: v.applicationIcon,
                                              game: c,
                                              skuId: s.id
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
