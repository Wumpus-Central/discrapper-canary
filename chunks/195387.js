n.d(t, { Z: () => E });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(481060),
    o = n(906732),
    s = n(189432),
    l = n(189357),
    c = n(434404),
    u = n(887413),
    d = n(359110),
    f = n(314897),
    p = n(944486),
    _ = n(475413),
    m = n(176505),
    h = n(50493),
    g = n(388032);
function E(e) {
    let { user: t, guildId: n, channelId: E, onClose: b, appContext: y } = e,
        { newestAnalyticsLocation: O } = (0, o.ZP)(),
        v = (0, i.e7)([f.default], () => f.default.getId() === (null == t ? void 0 : t.id)),
        S = (0, l.m)(null != n ? n : null),
        I = (0, i.e7)([p.Z], () => (null != E ? E : p.Z.getChannelId(n, !0)), [E, n]);
    return null == n || !S || v
        ? null
        : (0, r.jsx)(_.oY, {
              action: "PRESS_MOD_VIEW",
              icon: a.HI3,
              tooltipText: g.intl.string(g.t.kj3tz2),
              onClick: () => {
                  c.Z.close(),
                      null != I && (0, d.Kh)(I),
                      (0, u.i)(y),
                      (0, s.r)(n, t.id, null != I ? I : m.oC.MEMBER_SAFETY, {
                          modViewPanel: h.k.INFO,
                          sourceLocation: O,
                      }),
                      null == b || b();
              },
          });
}
