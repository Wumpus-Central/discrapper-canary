n.d(t, { A: () => E });
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(397927),
    r = n(734057),
    d = n(71393),
    s = n(576705),
    o = n(287809),
    u = n(849736),
    c = n(312006),
    A = n(652215),
    g = n(985018);
function E(e, t, n) {
    let E = r.A.getChannel(n),
        _ = (0, l.bG)([d.A], () => d.A.getGuild(t), [t]),
        b = (0, l.bG)([c.Ay], () => c.Ay.getPermissionsForUser(e.id, n), [n, e.id]),
        f = o.default.getCurrentUser()?.id === e.id,
        m = (0, l.bG)([s.A], () => null != n && s.A.canWithPartialContext(A.xBc.MUTE_MEMBERS, { channelId: n }), [n]);
    return null != E && null != _ && (m || f) && b.speaker
        ? (0, i.jsx)(a.Drp, {
              id: "audience",
              label: f ? g.intl.string(g.t["6C6PJx"]) : g.intl.string(g.t.VK3vQy),
              action: () => {
                  f ? (0, u.Tf)(E) : (0, u.gt)(e, E);
              },
          })
        : null;
}
