n.d(t, { Z: () => y });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    s = n(442837),
    o = n(481060),
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
    b = n(474936),
    v = n(388032),
    E = n(569964),
    j = n(149715),
    I = n(197571);
let y = s.ZP.connectStores([f.Z, c.Z, g.Z, m.default], (e) => {
    let { giftCode: t } = e,
        n = f.Z.get(t.skuId),
        { subscriptionPlanId: r } = t;
    return {
        sku: n,
        subscriptionPlan: null != r ? (0, _.oE)(r) : null,
        application: c.Z.getApplication(n.applicationId),
        gifter: m.default.getUser(t.userId),
    };
})((e) => {
    let { error: t, giftCode: n, gifter: l, sku: s, application: c, subscriptionPlan: m } = e,
        g = null == l ? v.intl.string(v.t.lTGZAg) : v.intl.formatToPlainString(v.t.TjWdPT, { username: l.username }),
        f = s.name;
    return (
        null != m &&
            (f = v.intl.formatToPlainString(m.interval === b.rV.MONTH ? v.t.CTpcCQ : v.t.rgPWGx, {
                skuName: s.name,
                intervalCount: m.intervalCount,
            })),
        (0, r.jsxs)(i.Fragment, {
            children: [
                null != n.giftStyle
                    ? (0, r.jsx)(p.Z, {
                          defaultAnimationState: h.SR.LOOP,
                          giftStyle: n.giftStyle,
                          className: E.seasonalIcon,
                      })
                    : (0, r.jsx)(u.qE, {
                          src: null != l ? l.getAvatarURL(void 0, 100) : null,
                          size: o.EFr.DEPRECATED_SIZE_100,
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
                                  className: a()(I.marginTop8, j.flexCenter),
                                  children: [
                                      s.productLine !== x.POd.COLLECTIBLES &&
                                          (0, r.jsx)(d.Z, {
                                              size: d.Z.Sizes.MEDIUM,
                                              className: E.applicationIcon,
                                              game: c,
                                              skuId: s.id,
                                          }),
                                      f,
                                  ],
                              }),
                          ],
                      }),
            ],
        })
    );
});
