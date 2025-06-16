n.d(t, { Z: () => E });
var r = n(255367);
n(73800);
var i = n(442837),
    a = n(481060),
    o = n(549879),
    s = n(906732),
    l = n(189432),
    c = n(189357),
    u = n(434404),
    d = n(359110),
    f = n(314897),
    _ = n(944486),
    p = n(475413),
    h = n(176505),
    m = n(50493),
    g = n(388032);
function E(e) {
    let { user: t, guildId: n, channelId: E, onClose: b, appContext: y, shouldShowTooltip: O } = e,
        { newestAnalyticsLocation: v } = (0, s.ZP)(),
        I = (0, i.e7)([f.default], () => f.default.getId() === (null == t ? void 0 : t.id)),
        T = (0, c.m)(null != n ? n : null),
        S = (0, i.e7)([_.Z], () => (null != E ? E : _.Z.getChannelId(n, !0)), [E, n]);
    return null == n || !T || I
        ? null
        : (0, r.jsx)(p.oY, {
              action: 'PRESS_MOD_VIEW',
              icon: a.HI3,
              shouldShowTooltip: O,
              tooltipText: g.intl.string(g.t.kj3tz8),
              onClick: () => {
                  u.Z.close(),
                      null != S && (0, d.Kh)(S),
                      (0, o.i)(y),
                      (0, l.r)(n, t.id, null != S ? S : h.oC.MEMBER_SAFETY, {
                          modViewPanel: m.k.INFO,
                          sourceLocation: v
                      }),
                      null == b || b();
              }
          });
}
