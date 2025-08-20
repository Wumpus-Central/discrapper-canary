n.d(t, { Z: () => N });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    s = n(442837),
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
    v = n(474936),
    E = n(388032),
    b = n(569964),
    j = n(149715),
    I = n(197571);
let N = s.ZP.connectStores([m.Z, c.Z, g.Z, p.default], (e) => {
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
    let { error: t, giftCode: n, gifter: l, sku: s, application: c, subscriptionPlan: p } = e,
        g = null == l ? E.intl.string(E.t.lTGZAg) : E.intl.formatToPlainString(E.t.TjWdPT, { username: l.username }),
        m = s.name;
    return (
        null != p &&
            (m = E.intl.formatToPlainString(p.interval === v.rV.MONTH ? E.t.CTpcCQ : E.t.rgPWGx, {
                skuName: s.name,
                intervalCount: p.intervalCount,
            })),
        (0, r.jsxs)(i.Fragment, {
            children: [
                null != n.giftStyle
                    ? (0, r.jsx)(f.Z, {
                          defaultAnimationState: h.SR.LOOP,
                          giftStyle: n.giftStyle,
                          className: b.seasonalIcon,
                      })
                    : (0, r.jsx)(u.qE, {
                          src: null != l ? l.getAvatarURL(void 0, 100) : null,
                          size: a.EFr.DEPRECATED_SIZE_100,
                          className: I.marginBottom20,
                      }),
                null != t
                    ? (0, r.jsxs)(i.Fragment, {
                          children: [
                              (0, r.jsx)(u.DK, { children: E.intl.string(E.t.mDFGFh) }),
                              (0, r.jsx)(u.Dx, { children: t }),
                          ],
                      })
                    : (0, r.jsxs)(i.Fragment, {
                          children: [
                              (0, r.jsx)(u.DK, { children: g }),
                              (0, r.jsxs)(u.Dx, {
                                  className: o()(I.marginTop8, j.flexCenter),
                                  children: [
                                      s.productLine !== x.POd.COLLECTIBLES &&
                                          (0, r.jsx)(d.Z, {
                                              size: d.Z.Sizes.MEDIUM,
                                              className: b.applicationIcon,
                                              game: c,
                                              skuId: s.id,
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
