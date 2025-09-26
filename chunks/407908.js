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
    m = n(764295);
function b(e) {
    var t, n;
    let { channel: b } = e,
        y = i.useContext(p.AnalyticsContext),
        _ = (0, c.Aq)(),
        O = g.intl.string(m.default["Beo/7u"]),
        { firstMessage: j } = (0, a.cl)(b),
        v = null == j || null == (t = j.messageSnapshots) ? void 0 : t[0],
        x = null == v || null == (n = v.moderatorReport) ? void 0 : n.reported_user_id;
    return b.isModeratorReportChannel() && null != x
        ? (0, r.jsx)(o.ZP.Icon, {
              onClick: () => {
                  (0, u.Kh)(b.id),
                      (0, d.i)(),
                      (0, s.r)(b.guild_id, x, b.id, {
                          modViewPanel: f.k.INFO,
                          sourceLocation: null != location ? location : y.location,
                      }),
                      _.dispatch(h.CkL.POPOUT_CLOSE);
              },
              tooltip: O,
              icon: l.HI3,
              "aria-label": O,
          })
        : null;
}
