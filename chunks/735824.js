n.d(t, { A: () => L });
var i = n(627968);
n(64700);
var l = n(793574),
    a = n(688810),
    r = n(735991),
    s = n(485724),
    o = n(429913),
    c = n(17928),
    d = n(582388),
    u = n(257269),
    _ = n(652215);
let m = (0, c.UT)(d.A, {
    getQueryId: _.fic.CUSTOM_ACTIVITY_LINK,
    get: (e, t) => (null == e || null == t ? null : d.A.getOne(e, t)),
    load: (e, t) => (0, u.Py)(e, t),
});
n(321073);
var h = n(522305),
    p = n(361926),
    g = n(572211),
    f = n(354287),
    x = n(574660),
    A = n(625180),
    C = n(375802),
    v = n(734057),
    I = n(309010),
    E = n(486020),
    b = n(795816),
    y = n(933958),
    T = n(574152),
    j = n(782091),
    N = n(985018);
function S(e) {
    let { application: t, customId: n, customLink: o, referrerId: d, message: u } = e,
        _ = t?.bot?.id,
        m = (0, p.Vr)({ context: { type: "contextless" }, applicationId: t.id, botUserId: t?.bot?.id }),
        S = null != t && (0, r.Ag)(t),
        k = null != _ && S && m,
        { analyticsLocations: L } = (0, a.Ay)(l.A.ACTIVITY_CUSTOM_LINK),
        R = (0, c.bG)([I.A], () => I.A.getChannelId()),
        w = (0, j.et)(R),
        P = (0, c.bG)([y.Ay], () => {
            if (null == R) return;
            let e = y.Ay.getEmbeddedActivitiesForChannel(R).filter((e) => e.applicationId === t.id);
            return e.length > 0 ? e[0].compositeInstanceId : void 0;
        }),
        D = (0, c.bG)([y.Ay], () => y.Ay.getCurrentEmbeddedActivity()),
        M = (0, T.A)(),
        O = w === j.xy.CAN_LAUNCH,
        U = null != P && D?.compositeInstanceId === P,
        G = null != n ? n : o.customId,
        B = (0, C.e)(t),
        V = [];
    B
        ? V.push({
              label: N.intl.string(N.t.RscU7I),
              trackingArea: f.kY.PLAY,
              onClick() {
                  A.A.launchFrame({ applicationId: t.id });
              },
          })
        : (O &&
              V.push({
                  label:
                      null == P ? N.intl.string(N.t.RscU7I) : U ? N.intl.string(N.t.DPfdsq) : N.intl.string(N.t.sqe0hj),
                  trackingArea: f.kY.PLAY,
                  onClick() {
                      (0, b.su)({
                          channelId: R ?? void 0,
                          applicationId: t.id,
                          isStart: null == P,
                          embeddedActivitiesManager: M,
                          customId: G,
                          referrerId: d,
                          analyticsLocations: L,
                      });
                  },
                  disabled: U,
              }),
          k &&
              !O &&
              V.push({
                  label: N.intl.string(N.t.JeK1Wg),
                  trackingArea: f.kY.PLAY,
                  onClick() {
                      (0, h.Q)({ appId: t.id, botId: _, analyticsLocations: L, customId: G, referrerId: d });
                  },
              }));
    let F = (0, x.F)(t);
    return (0, i.jsx)(g.h, {
        actions: V,
        onClickContent: F,
        header: t.name,
        iconSrc: E.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, bot: t.bot }),
        info: (0, i.jsx)("div", { children: o.description }),
        staticBannerSrc: o.getAssetURL(),
        title: o.title,
        trackingConfig: {
            id: t.id,
            linkType: s.J.CUSTOM_ACTIVITY_LINK,
            referrerId: d,
            activityCustomId: G,
            guildId: v.A.getChannel(u.channel_id)?.guild_id,
            channelId: u.channel_id,
            messageId: u.id,
        },
    });
}
var k = n(768349);
function L(e) {
    let { applicationId: t, customId: n, referrerId: c, linkId: d, message: u } = e,
        { analyticsLocations: _ } = (0, a.Ay)(l.A.ACTIVITY_BOOKMARK),
        [h] = (0, o.A)([t]),
        p = null != h && (0, r.Ag)(h),
        { data: g, error: f } = m(h?.id, d);
    return null == h || !1 === p
        ? null
        : null != d && null == f && null != g
          ? (0, i.jsx)(a.f5, {
                value: _,
                children: (0, i.jsx)(S, { application: h, customId: n, customLink: g, referrerId: c, message: u }),
            })
          : (0, i.jsx)(a.f5, {
                value: _,
                children: (0, i.jsx)(s.W, {
                    app: h,
                    linkType: k.J.ACTIVITY,
                    activityCustomId: n,
                    activityReferrerId: c,
                    message: u,
                }),
            });
}
