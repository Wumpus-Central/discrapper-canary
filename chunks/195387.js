n.d(t, { Z: () => g });
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(481060),
    s = n(549879),
    o = n(906732),
    l = n(189432),
    u = n(189357),
    c = n(434404),
    d = n(314897),
    f = n(944486),
    _ = n(475413),
    p = n(176505),
    h = n(50493),
    m = n(388032);
function g(e) {
    let { user: t, guildId: n, channelId: g, onClose: E, appContext: v, shouldShowTooltip: y } = e,
        { newestAnalyticsLocation: I } = (0, o.ZP)(),
        T = (0, r.e7)([d.default], () => d.default.getId() === (null == t ? void 0 : t.id)),
        b = (0, u.m)(null != n ? n : null),
        S = (0, r.e7)([f.Z], () => (null != g ? g : f.Z.getChannelId(n, !0)), [g, n]);
    return null == n || !b || T
        ? null
        : (0, i.jsx)(_.oY, {
              action: 'PRESS_MOD_VIEW',
              icon: a.HI3,
              shouldShowTooltip: y,
              tooltipText: m.intl.string(m.t.kj3tz8),
              onClick: () => {
                  c.Z.close(),
                      (0, s.i)(v),
                      (0, l.r)(n, t.id, null != S ? S : p.oC.MEMBER_SAFETY, {
                          modViewPanel: h.k.INFO,
                          sourceLocation: I
                      }),
                      null == E || E();
              }
          });
}
