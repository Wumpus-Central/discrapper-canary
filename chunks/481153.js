n.d(t, { Z: () => N });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    s = n.n(l),
    o = n(442837),
    a = n(481060),
    c = n(812206),
    u = n(388905),
    d = n(925329),
    h = n(479446),
    f = n(981632),
    p = n(594174),
    g = n(509545),
    m = n(55563),
    _ = n(296848),
    x = n(981631),
    E = n(474936),
    v = n(388032),
    j = n(124896),
    b = n(465106),
    I = n(10198);
let N = o.ZP.connectStores([m.Z, c.Z, g.Z, p.default], (e) => {
    let { giftCode: t } = e,
        n = m.Z.get(t.skuId),
        { subscriptionPlanId: r } = t;
    return {
        sku: n,
        subscriptionPlan: null != r ? (0, _.oE)(r) : null,
        application: c.Z.getApplication(n.applicationId),
        gifter: p.default.getUser(t.userId),
    };
})((e) => {
    let { error: t, giftCode: n, gifter: l, sku: o, application: c, subscriptionPlan: p } = e,
        g = null == l ? v.intl.string(v.t.lTGZAg) : v.intl.formatToPlainString(v.t.TjWdPT, { username: l.username }),
        m = o.name;
    return (
        null != p &&
            (m = v.intl.formatToPlainString(p.interval === E.rV.MONTH ? v.t.CTpcCQ : v.t.rgPWGx, {
                skuName: o.name,
                intervalCount: p.intervalCount,
            })),
        (0, r.jsxs)(i.Fragment, {
            children: [
                null != n.giftStyle
                    ? (0, r.jsx)(f.Z, {
                          defaultAnimationState: h.SR.LOOP,
                          giftStyle: n.giftStyle,
                          className: j.seasonalIcon,
                      })
                    : (0, r.jsx)(u.qE, {
                          src: null != l ? l.getAvatarURL(void 0, 100) : null,
                          size: a.EFr.DEPRECATED_SIZE_100,
                          className: I.marginBottom20,
                      }),
                null != t
                    ? (0, r.jsxs)(i.Fragment, {
                          children: [
                              (0, r.jsx)(u.DK, { children: v.intl.string(v.t.mDFGFh) }),
                              (0, r.jsx)(u.Dx, { children: t }),
                          ],
                      })
                    : (0, r.jsxs)(i.Fragment, {
                          children: [
                              (0, r.jsx)(u.DK, { children: g }),
                              (0, r.jsxs)(u.Dx, {
                                  className: s()(I.marginTop8, b.flexCenter),
                                  children: [
                                      o.productLine !== x.POd.COLLECTIBLES &&
                                          (0, r.jsx)(d.Z, {
                                              size: d.A.MEDIUM,
                                              className: j.applicationIcon,
                                              game: c,
                                              skuId: o.id,
                                          }),
                                      m,
                                  ],
                              }),
                          ],
                      }),
            ],
        })
    );
});
