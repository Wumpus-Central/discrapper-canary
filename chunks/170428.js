n.d(t, { A: () => p });
var i = n(627968),
    l = n(64700),
    s = n(713608),
    a = n(473503),
    r = n(706752),
    o = n(58736),
    d = n(267102),
    c = n(474397),
    u = n(378570),
    h = n(954571),
    A = n(652215),
    _ = n(486974),
    m = n(985018),
    g = n(221314);
function p(e) {
    let { channel: t } = e,
        n = l.useContext(h.AnalyticsContext),
        p = (0, d.aL)(),
        f = m.intl.string(g.default["Beo/7v"]),
        { firstMessage: E } = (0, a.OA)(t),
        x = E?.messageSnapshots?.[0],
        I = x?.moderatorReport?.reported_user_id;
    return t.isModeratorReportChannel() && null != I
        ? (0, i.jsx)(o.Ay.Icon, {
              onClick: () => {
                  (0, u.iN)(t.id),
                      (0, c.A)(),
                      (0, r.z)(t.guild_id, I, t.id, { modViewPanel: _.g.INFO, sourceLocation: location ?? n.location }),
                      p.dispatch(A.jej.POPOUT_CLOSE);
              },
              tooltip: f,
              icon: s.q,
              "aria-label": f,
          })
        : null;
}
