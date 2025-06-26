n.d(t, { Z: () => b });
var r = n(255367),
    i = n(73800),
    l = n(481060),
    o = n(40851),
    a = n(549879),
    s = n(109590),
    c = n(189432),
    u = n(665149),
    d = n(359110),
    p = n(626135),
    h = n(981631),
    f = n(50493),
    m = n(388032),
    g = n(130883);
function b(e) {
    var t, n;
    let { channel: b } = e,
        _ = i.useContext(p.AnalyticsContext),
        y = (0, o.Aq)(),
        C = m.intl.string(g.default['Beo/7u']),
        { firstMessage: x } = (0, s.cl)(b),
        v = null == x || null == (t = x.messageSnapshots) ? void 0 : t[0],
        j = null == v || null == (n = v.moderatorReport) ? void 0 : n.reported_user_id;
    return b.isModeratorReportChannel() && null != j
        ? (0, r.jsx)(u.ZP.Icon, {
              onClick: () => {
                  (0, d.Kh)(b.id),
                      (0, a.i)(),
                      (0, c.r)(b.guild_id, j, b.id, {
                          modViewPanel: f.k.INFO,
                          sourceLocation: null != location ? location : _.location
                      }),
                      y.dispatch(h.CkL.POPOUT_CLOSE);
              },
              tooltip: C,
              icon: l.HI3,
              'aria-label': C
          })
        : null;
}
