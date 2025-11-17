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
    _ = n(944486),
    p = n(732380),
    h = n(176505),
    m = n(50493),
    g = n(388032);
function E(e) {
    let { user: t, guildId: n, channelId: E, onClose: b, appContext: y } = e,
        { newestAnalyticsLocation: O } = (0, o.ZP)(),
        v = (0, i.e7)([f.default], () => f.default.getId() === (null == t ? void 0 : t.id)),
        I = (0, l.m)(null != n ? n : null),
        T = (0, i.e7)([_.Z], () => (null != E ? E : _.Z.getChannelId(n, !0)), [E, n]);
    return null == n || !I || v
        ? null
        : (0, r.jsx)(p.f6, {
              action: "PRESS_MOD_VIEW",
              icon: a.HI3,
              tooltipText: g.intl.string(g.t.kj3tz2),
              onClick: () => {
                  c.Z.close(),
                      null != T && (0, d.Kh)(T),
                      (0, u.i)(y),
                      (0, s.r)(n, t.id, null != T ? T : h.oC.MEMBER_SAFETY, {
                          modViewPanel: m.k.INFO,
                          sourceLocation: O,
                      }),
                      null == b || b();
              },
          });
}
