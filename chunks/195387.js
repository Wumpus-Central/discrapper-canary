n.d(t, { Z: () => y });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(481060),
    o = n(906732),
    s = n(189432),
    l = n(189357),
    c = n(434404),
    u = n(728285),
    d = n(887413),
    f = n(359110),
    p = n(314897),
    _ = n(944486),
    m = n(475413),
    h = n(981631),
    g = n(176505),
    E = n(50493),
    b = n(388032);
function y(e) {
    let { user: t, guildId: n, channelId: y, onClose: O, appContext: v } = e,
        { newestAnalyticsLocation: S } = (0, o.ZP)(),
        I = (0, u.Aq)(),
        T = (0, i.e7)([p.default], () => p.default.getId() === (null == t ? void 0 : t.id)),
        C = (0, l.m)(null != n ? n : null),
        A = (0, i.e7)([_.Z], () => (null != y ? y : _.Z.getChannelId(n, !0)), [y, n]);
    return null == n || !C || T
        ? null
        : (0, r.jsx)(m.oY, {
              action: "PRESS_MOD_VIEW",
              icon: a.HI3,
              tooltipText: b.intl.string(b.t.kj3tz2),
              onClick: () => {
                  c.Z.close(),
                      null != A && (0, f.Kh)(A),
                      (0, d.i)(v),
                      I.dispatch(h.CkL.POPOUT_CLOSE),
                      (0, s.r)(n, t.id, null != A ? A : g.oC.MEMBER_SAFETY, {
                          modViewPanel: E.k.INFO,
                          sourceLocation: S,
                      }),
                      null == O || O();
              },
          });
}
