n.d(t, { A: () => _ });
var i = n(627968),
    l = n(64700),
    s = n(397927),
    a = n(473503),
    r = n(706752),
    o = n(58736),
    d = n(267102),
    c = n(474397),
    u = n(378570),
    h = n(954571),
    A = n(652215),
    g = n(486974),
    m = n(985018),
    p = n(641131);
function _(e) {
    let { channel: t } = e,
        n = l.useContext(h.AnalyticsContext),
        _ = (0, d.aL)(),
        x = m.intl.string(p.default["Beo/7v"]),
        { firstMessage: f } = (0, a.OA)(t),
        E = f?.messageSnapshots?.[0],
        C = E?.moderatorReport?.reported_user_id;
    return t.isModeratorReportChannel() && null != C
        ? (0, i.jsx)(o.Ay.Icon, {
              onClick: () => {
                  (0, u.iN)(t.id),
                      (0, c.A)(),
                      (0, r.z)(t.guild_id, C, t.id, { modViewPanel: g.g.INFO, sourceLocation: location ?? n.location }),
                      _.dispatch(A.jej.POPOUT_CLOSE);
              },
              tooltip: x,
              icon: s.quN,
              "aria-label": x,
          })
        : null;
}
