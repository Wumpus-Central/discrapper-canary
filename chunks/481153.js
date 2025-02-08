n.d(t, { Z: () => b });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    l = n.n(a),
    o = n(442837),
    s = n(481060),
    c = n(812206),
    d = n(388905),
    u = n(925329),
    h = n(479446),
    _ = n(981632),
    g = n(594174),
    m = n(509545),
    p = n(55563),
    f = n(296848),
    E = n(981631),
    x = n(474936),
    I = n(388032),
    C = n(93008),
    v = n(652849),
    N = n(232186);
let b = o.ZP.connectStores([p.Z, c.Z, m.Z, g.default], (e) => {
    let { giftCode: t } = e,
        n = p.Z.get(t.skuId),
        { subscriptionPlanId: i } = t;
    return {
        sku: n,
        subscriptionPlan: null != i ? (0, f.oE)(i) : null,
        application: c.Z.getApplication(n.applicationId),
        gifter: g.default.getUser(t.userId)
    };
})((e) => {
    let { error: t, giftCode: n, gifter: a, sku: o, application: c, subscriptionPlan: g } = e,
        m = null == a ? I.intl.string(I.t.lTGZAg) : I.intl.formatToPlainString(I.t.TjWdPT, { username: a.username }),
        p = o.name;
    return (
        null != g &&
            (p = I.intl.formatToPlainString(g.interval === x.rV.MONTH ? I.t.CTpcCQ : I.t.rgPWGx, {
                skuName: o.name,
                intervalCount: g.intervalCount
            })),
        (0, i.jsxs)(r.Fragment, {
            children: [
                null != n.giftStyle
                    ? (0, i.jsx)(_.Z, {
                          defaultAnimationState: h.SR.LOOP,
                          giftStyle: n.giftStyle,
                          className: C.seasonalIcon
                      })
                    : (0, i.jsx)(d.qE, {
                          src: null != a ? a.getAvatarURL(void 0, 100) : null,
                          size: s.EFr.DEPRECATED_SIZE_100,
                          className: N.marginBottom20
                      }),
                null != t
                    ? (0, i.jsxs)(r.Fragment, {
                          children: [(0, i.jsx)(d.DK, { children: I.intl.string(I.t.mDFGFh) }), (0, i.jsx)(d.Dx, { children: t })]
                      })
                    : (0, i.jsxs)(r.Fragment, {
                          children: [
                              (0, i.jsx)(d.DK, { children: m }),
                              (0, i.jsxs)(d.Dx, {
                                  className: l()(N.marginTop8, v.flexCenter),
                                  children: [
                                      o.productLine !== E.POd.COLLECTIBLES &&
                                          (0, i.jsx)(u.Z, {
                                              size: u.Z.Sizes.MEDIUM,
                                              className: C.applicationIcon,
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
