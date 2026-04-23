l.d(n, { A: () => E });
var t = l(627968);
l(64700);
var i = l(17928),
    r = l(477782),
    a = l(734057),
    d = l(71393),
    s = l(576705),
    o = l(287809),
    u = l(849736),
    c = l(312006),
    A = l(652215),
    g = l(985018);
function E(e, n, l) {
    let E = a.A.getChannel(l),
        h = (0, i.bG)([d.A], () => d.A.getGuild(n), [n]),
        C = (0, i.bG)([c.Ay], () => c.Ay.getPermissionsForUser(e.id, l), [l, e.id]),
        M = o.default.getCurrentUser()?.id === e.id,
        b = (0, i.bG)([s.A], () => null != l && s.A.canWithPartialContext(A.xBc.MUTE_MEMBERS, { channelId: l }), [l]);
    return null != E && null != h && (b || M) && C.speaker
        ? (0, t.jsx)(r.Dr, {
              id: "audience",
              label: M ? g.intl.string(g.t["6C6PJx"]) : g.intl.string(g.t.VK3vQy),
              action: () => {
                  M ? (0, u.Tf)(E) : (0, u.gt)(e, E);
              },
          })
        : null;
}
