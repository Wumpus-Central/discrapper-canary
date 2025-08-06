n.d(t, { Z: () => b });
var r = n(255367),
    i = n(73800),
    l = n(481060),
    a = n(40851),
    s = n(549879),
    o = n(109590),
    c = n(189432),
    u = n(665149),
    d = n(359110),
    h = n(626135),
    p = n(981631),
    f = n(50493),
    g = n(388032),
    m = n(130883);
function b(e) {
    var t, n;
    let { channel: b } = e,
        y = i.useContext(h.AnalyticsContext),
        x = (0, a.Aq)(),
        j = g.intl.string(m.default['Beo/7u']),
        { firstMessage: _ } = (0, o.cl)(b),
        O = null == _ || null == (t = _.messageSnapshots) ? void 0 : t[0],
        v = null == O || null == (n = O.moderatorReport) ? void 0 : n.reported_user_id;
    return b.isModeratorReportChannel() && null != v
        ? (0, r.jsx)(u.ZP.Icon, {
              onClick: () => {
                  ((0, d.Kh)(b.id),
                      (0, s.i)(),
                      (0, c.r)(b.guild_id, v, b.id, {
                          modViewPanel: f.k.INFO,
                          sourceLocation: null != location ? location : y.location
                      }),
                      x.dispatch(p.CkL.POPOUT_CLOSE));
              },
              tooltip: j,
              icon: l.HI3,
              'aria-label': j
          })
        : null;
}
