n.d(t, { Z: () => m });
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(481060),
    s = n(906732),
    o = n(189432),
    l = n(189357),
    u = n(434404),
    c = n(314897),
    d = n(944486),
    f = n(475413),
    _ = n(176505),
    p = n(50493),
    h = n(388032);
function m(e) {
    let { user: t, guildId: n, channelId: m, onClose: g, shouldShowTooltip: E } = e,
        { newestAnalyticsLocation: v } = (0, s.ZP)(),
        y = (0, r.e7)([c.default], () => c.default.getId() === (null == t ? void 0 : t.id)),
        I = (0, l.m)(null != n ? n : null),
        T = (0, r.e7)([d.Z], () => (null != m ? m : d.Z.getChannelId(n, !0)), [m, n]);
    return null == n || !I || y
        ? null
        : (0, i.jsx)(f.oY, {
              action: 'PRESS_MOD_VIEW',
              icon: a.HI3,
              shouldShowTooltip: E,
              tooltipText: h.intl.string(h.t.kj3tz8),
              onClick: () => {
                  u.Z.close(),
                      (0, o.r)(n, t.id, null != T ? T : _.oC.MEMBER_SAFETY, {
                          modViewPanel: p.k.INFO,
                          sourceLocation: v
                      }),
                      null == g || g();
              }
          });
}
