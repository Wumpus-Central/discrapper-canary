n.d(t, { Z: () => y });
var r = n(54381),
    i = n(473749),
    s = n(120356),
    l = n.n(s),
    a = n(442837),
    o = n(481060),
    c = n(812206),
    u = n(388905),
    d = n(925329),
    h = n(479446),
    g = n(981632),
    m = n(594174),
    p = n(509545),
    f = n(55563),
    _ = n(296848),
    x = n(981631),
    E = n(474936),
    v = n(388032),
    j = n(124896),
    b = n(465106),
    I = n(10198);
let y = a.ZP.connectStores([f.Z, c.Z, p.Z, m.default], (e) => {
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
    let { error: t, giftCode: n, gifter: s, sku: a, application: c, subscriptionPlan: m } = e,
        p = null == s ? v.intl.string(v.t.lTGZAl) : v.intl.formatToPlainString(v.t.TjWdPc, { username: s.username }),
        f = a.name;
    return (
        null != m &&
            (f = v.intl.formatToPlainString(m.interval === E.rV.MONTH ? v.t.CTpcCZ : v.t["rgPWG/"], {
                skuName: a.name,
                intervalCount: m.intervalCount,
            })),
        (0, r.jsxs)(i.Fragment, {
            children: [
                null != n.giftStyle
                    ? (0, r.jsx)(g.Z, {
                          defaultAnimationState: h.SR.LOOP,
                          giftStyle: n.giftStyle,
                          className: j.seasonalIcon,
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
                              (0, r.jsx)(u.DK, { children: p }),
                              (0, r.jsxs)(u.Dx, {
                                  className: l()(I.marginTop8, b.flexCenter),
                                  children: [
                                      a.productLine !== x.POd.COLLECTIBLES &&
                                          (0, r.jsx)(d.Z, {
                                              size: d.A.MEDIUM,
                                              className: j.applicationIcon,
                                              game: c,
                                              skuId: a.id,
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
