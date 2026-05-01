n.d(t, { A: () => L });
var i = n(627968);
n(64700);
var l = n(793574),
    s = n(688810),
    a = n(735991),
    r = n(485724),
    o = n(429913),
    d = n(17928),
    c = n(582388),
    u = n(257269),
    m = n(652215);
let h = (0, d.UT)(c.A, {
    getQueryId: m.fic.CUSTOM_ACTIVITY_LINK,
    get: (e, t) => (null == e || null == t ? null : c.A.getOne(e, t)),
    load: (e, t) => (0, u.Py)(e, t),
});
n(321073);
var g = n(522305),
    A = n(361926),
    p = n(572211),
    x = n(354287),
    f = n(574660),
    C = n(625180),
    E = n(375802),
    v = n(734057),
    I = n(309010),
    _ = n(486020),
    j = n(795816),
    N = n(933958),
    T = n(574152),
    y = n(782091),
    S = n(985018);
function b(e) {
    let { application: t, customId: n, customLink: o, referrerId: c, message: u } = e,
        m = t?.bot?.id,
        h = (0, A.Vr)({ context: { type: "contextless" }, applicationId: t.id, botUserId: t?.bot?.id }),
        b = null != t && (0, a.Ag)(t),
        k = null != m && b && h,
        { analyticsLocations: L } = (0, s.Ay)(l.A.ACTIVITY_CUSTOM_LINK),
        R = (0, d.bG)([I.A], () => I.A.getChannelId()),
        P = (0, y.et)(R),
        M = (0, d.bG)([N.Ay], () => {
            if (null == R) return;
            let e = N.Ay.getEmbeddedActivitiesForChannel(R).filter((e) => e.applicationId === t.id);
            return e.length > 0 ? e[0].compositeInstanceId : void 0;
        }),
        D = (0, d.bG)([N.Ay], () => N.Ay.getCurrentEmbeddedActivity()),
        w = (0, T.A)(),
        O = P === y.xy.CAN_LAUNCH,
        U = null != M && D?.compositeInstanceId === M,
        G = null != n ? n : o.customId,
        V = (0, E.e)(t),
        B = [];
    V
        ? B.push({
              label: S.intl.string(S.t.RscU7I),
              trackingArea: x.kY.PLAY,
              onClick() {
                  C.A.launchFrame({ applicationId: t.id });
              },
          })
        : (O &&
              B.push({
                  label:
                      null == M ? S.intl.string(S.t.RscU7I) : U ? S.intl.string(S.t.DPfdsq) : S.intl.string(S.t.sqe0hj),
                  trackingArea: x.kY.PLAY,
                  onClick() {
                      (0, j.su)({
                          channelId: R ?? void 0,
                          applicationId: t.id,
                          isStart: null == M,
                          embeddedActivitiesManager: w,
                          customId: G,
                          referrerId: c,
                          analyticsLocations: L,
                      });
                  },
                  disabled: U,
              }),
          k &&
              !O &&
              B.push({
                  label: S.intl.string(S.t.JeK1Wg),
                  trackingArea: x.kY.PLAY,
                  onClick() {
                      (0, g.Q)({ appId: t.id, botId: m, analyticsLocations: L, customId: G, referrerId: c });
                  },
              }));
    let H = (0, f.F)(t);
    return (0, i.jsx)(p.h, {
        actions: B,
        onClickContent: H,
        header: t.name,
        iconSrc: _.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, bot: t.bot }),
        info: (0, i.jsx)("div", { children: o.description }),
        staticBannerSrc: o.getAssetURL(),
        title: o.title,
        trackingConfig: {
            id: t.id,
            linkType: r.J.CUSTOM_ACTIVITY_LINK,
            referrerId: c,
            activityCustomId: G,
            guildId: v.A.getChannel(u.channel_id)?.guild_id,
            channelId: u.channel_id,
            messageId: u.id,
        },
    });
}
var k = n(768349);
function L(e) {
    let { applicationId: t, customId: n, referrerId: d, linkId: c, message: u } = e,
        { analyticsLocations: m } = (0, s.Ay)(l.A.ACTIVITY_BOOKMARK),
        [g] = (0, o.A)([t]),
        A = null != g && (0, a.Ag)(g),
        { data: p, error: x } = h(g?.id, c);
    return null == g || !1 === A
        ? null
        : null != c && null == x && null != p
          ? (0, i.jsx)(s.f5, {
                value: m,
                children: (0, i.jsx)(b, { application: g, customId: n, customLink: p, referrerId: d, message: u }),
            })
          : (0, i.jsx)(s.f5, {
                value: m,
                children: (0, i.jsx)(r.W, {
                    app: g,
                    linkType: k.J.ACTIVITY,
                    activityCustomId: n,
                    activityReferrerId: d,
                    message: u,
                }),
            });
}
