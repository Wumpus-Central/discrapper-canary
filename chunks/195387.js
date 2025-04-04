n.d(t, { Z: () => g });
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(481060),
    a = n(549879),
    s = n(906732),
    l = n(189432),
    c = n(189357),
    u = n(434404),
    d = n(314897),
    f = n(944486),
    _ = n(475413),
    p = n(176505),
    h = n(50493),
    m = n(388032);
function g(e) {
    let { user: t, guildId: n, channelId: g, onClose: E, appContext: b, shouldShowTooltip: y } = e,
        { newestAnalyticsLocation: v } = (0, s.ZP)(),
        O = (0, i.e7)([d.default], () => d.default.getId() === (null == t ? void 0 : t.id)),
        I = (0, c.m)(null != n ? n : null),
        S = (0, i.e7)([f.Z], () => (null != g ? g : f.Z.getChannelId(n, !0)), [g, n]);
    return null == n || !I || O
        ? null
        : (0, r.jsx)(_.oY, {
              action: 'PRESS_MOD_VIEW',
              icon: o.HI3,
              shouldShowTooltip: y,
              tooltipText: m.NW.string(m.t.kj3tz8),
              onClick: () => {
                  u.Z.close(),
                      (0, a.i)(b),
                      (0, l.r)(n, t.id, null != S ? S : p.oC.MEMBER_SAFETY, {
                          modViewPanel: h.k.INFO,
                          sourceLocation: v
                      }),
                      null == E || E();
              }
          });
}
