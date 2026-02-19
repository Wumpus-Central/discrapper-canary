"use strict";
n.d(t, { A: () => _ });
var i = n(627968),
    s = n(64700),
    l = n(397927),
    r = n(473503),
    a = n(706752),
    o = n(58736),
    c = n(267102),
    d = n(474397),
    u = n(378570),
    h = n(954571),
    A = n(652215),
    p = n(486974),
    g = n(985018),
    m = n(641131);
function _(e) {
    let { channel: t } = e,
        n = s.useContext(h.AnalyticsContext),
        _ = (0, c.aL)(),
        f = g.intl.string(m.default["Beo/7v"]),
        { firstMessage: x } = (0, r.OA)(t),
        C = x?.messageSnapshots?.[0],
        E = C?.moderatorReport?.reported_user_id;
    return t.isModeratorReportChannel() && null != E
        ? (0, i.jsx)(o.Ay.Icon, {
              onClick: () => {
                  (0, u.iN)(t.id),
                      (0, d.A)(),
                      (0, a.z)(t.guild_id, E, t.id, { modViewPanel: p.g.INFO, sourceLocation: location ?? n.location }),
                      _.dispatch(A.jej.POPOUT_CLOSE);
              },
              tooltip: f,
              icon: l.quN,
              "aria-label": f,
          })
        : null;
}
