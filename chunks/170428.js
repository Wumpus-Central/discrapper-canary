n.d(t, { A: () => m });
var r = n(627968),
    l = n(64700),
    i = n(397927),
    a = n(473503),
    s = n(706752),
    o = n(58736),
    c = n(267102),
    u = n(474397),
    d = n(378570),
    f = n(954571),
    p = n(652215),
    h = n(486974),
    b = n(985018),
    g = n(641131);
function m(e) {
    var t, n;
    let { channel: m } = e,
        A = l.useContext(f.AnalyticsContext),
        y = (0, c.aL)(),
        O = b.intl.string(g.default["Beo/7v"]),
        { firstMessage: j } = (0, a.OA)(m),
        v = null == j || null == (t = j.messageSnapshots) ? void 0 : t[0],
        x = null == v || null == (n = v.moderatorReport) ? void 0 : n.reported_user_id;
    return m.isModeratorReportChannel() && null != x
        ? (0, r.jsx)(o.Ay.Icon, {
              onClick: () => {
                  (0, d.iN)(m.id),
                      (0, u.A)(),
                      (0, s.z)(m.guild_id, x, m.id, {
                          modViewPanel: h.g.INFO,
                          sourceLocation: null != location ? location : A.location,
                      }),
                      y.dispatch(p.jej.POPOUT_CLOSE);
              },
              tooltip: O,
              icon: i.quN,
              "aria-label": O,
          })
        : null;
}
