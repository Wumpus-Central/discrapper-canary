n.d(t, { Z: () => b });
var r = n(951288),
    i = n(647438),
    l = n(481060),
    a = n(109590),
    s = n(189432),
    o = n(665149),
    c = n(728285),
    d = n(887413),
    u = n(359110),
    p = n(626135),
    h = n(981631),
    f = n(50493),
    g = n(388032),
    m = n(43617);
function b(e) {
    var t, n;
    let { channel: b } = e,
        _ = i.useContext(p.AnalyticsContext),
        y = (0, c.Aq)(),
        x = g.intl.string(m.default["Beo/7v"]),
        { firstMessage: O } = (0, a.cl)(b),
        j = null == O || null == (t = O.messageSnapshots) ? void 0 : t[0],
        v = null == j || null == (n = j.moderatorReport) ? void 0 : n.reported_user_id;
    return b.isModeratorReportChannel() && null != v
        ? (0, r.jsx)(o.ZP.Icon, {
              onClick: () => {
                  (0, u.Kh)(b.id),
                      (0, d.i)(),
                      (0, s.r)(b.guild_id, v, b.id, {
                          modViewPanel: f.k.INFO,
                          sourceLocation: null != location ? location : _.location,
                      }),
                      y.dispatch(h.CkL.POPOUT_CLOSE);
              },
              tooltip: x,
              icon: l.HI3,
              "aria-label": x,
          })
        : null;
}
