n.d(t, { Z: () => N });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    s = n.n(l),
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
    b = n(569964),
    I = n(149715),
    j = n(197571);
let N = a.ZP.connectStores([f.Z, c.Z, p.Z, m.default], (e) => {
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
    let { error: t, giftCode: n, gifter: l, sku: a, application: c, subscriptionPlan: m } = e,
        p = null == l ? v.intl.string(v.t.lTGZAg) : v.intl.formatToPlainString(v.t.TjWdPT, { username: l.username }),
        f = a.name;
    return (
        null != m &&
            (f = v.intl.formatToPlainString(m.interval === E.rV.MONTH ? v.t.CTpcCQ : v.t.rgPWGx, {
                skuName: a.name,
                intervalCount: m.intervalCount,
            })),
        (0, r.jsxs)(i.Fragment, {
            children: [
                null != n.giftStyle
                    ? (0, r.jsx)(g.Z, {
                          defaultAnimationState: h.SR.LOOP,
                          giftStyle: n.giftStyle,
                          className: b.seasonalIcon,
                      })
                    : (0, r.jsx)(u.qE, {
                          src: null != l ? l.getAvatarURL(void 0, 100) : null,
                          size: o.EFr.DEPRECATED_SIZE_100,
                          className: j.marginBottom20,
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
                              (0, r.jsx)(u.DK, { children: p }),
                              (0, r.jsxs)(u.Dx, {
                                  className: s()(j.marginTop8, I.flexCenter),
                                  children: [
                                      a.productLine !== x.POd.COLLECTIBLES &&
                                          (0, r.jsx)(d.Z, {
                                              size: d.A.MEDIUM,
                                              className: b.applicationIcon,
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
