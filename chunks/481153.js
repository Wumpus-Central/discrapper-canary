n.d(t, { Z: () => N });
var r = n(54381),
    i = n(473749),
    s = n(120356),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(812206),
    u = n(388905),
    d = n(925329),
    h = n(479446),
    f = n(981632),
    g = n(594174),
    m = n(509545),
    p = n(55563),
    x = n(296848),
    _ = n(981631),
    E = n(474936),
    v = n(388032),
    b = n(746049),
    j = n(727829),
    I = n(478411);
let N = l.ZP.connectStores([p.Z, c.Z, m.Z, g.default], (e) => {
    let { giftCode: t } = e,
        n = p.Z.get(t.skuId),
        { subscriptionPlanId: r } = t;
    return {
        sku: n,
        subscriptionPlan: null != r ? (0, x.oE)(r) : null,
        application: c.Z.getApplication(n.applicationId),
        gifter: g.default.getUser(t.userId),
    };
})((e) => {
    let { error: t, giftCode: n, gifter: s, sku: l, application: c, subscriptionPlan: g } = e,
        m = null == s ? v.intl.string(v.t.lTGZAl) : v.intl.formatToPlainString(v.t.TjWdPc, { username: s.username }),
        p = l.name;
    return (
        null != g &&
            (p = v.intl.formatToPlainString(g.interval === E.rV.MONTH ? v.t.CTpcCZ : v.t["rgPWG/"], {
                skuName: l.name,
                intervalCount: g.intervalCount,
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
                          src: null != s ? s.getAvatarURL(void 0, 100) : null,
                          size: o.EFr.DEPRECATED_SIZE_100,
                          className: I.marginBottom20,
                      }),
                null != t
                    ? (0, r.jsxs)(i.Fragment, {
                          children: [
                              (0, r.jsx)(u.DK, { children: v.intl.string(v.t.mDFGFj) }),
                              (0, r.jsx)(u.Dx, { children: t }),
                          ],
                      })
                    : (0, r.jsxs)(i.Fragment, {
                          children: [
                              (0, r.jsx)(u.DK, { children: m }),
                              (0, r.jsxs)(u.Dx, {
                                  className: a()(I.marginTop8, j.flexCenter),
                                  children: [
                                      l.productLine !== _.POd.COLLECTIBLES &&
                                          (0, r.jsx)(d.Z, {
                                              size: d.A.MEDIUM,
                                              className: b.applicationIcon,
                                              game: c,
                                              skuId: l.id,
                                          }),
                                      p,
                                  ],
                              }),
                          ],
                      }),
            ],
        })
    );
});
