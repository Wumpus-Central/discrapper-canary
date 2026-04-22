n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var l = n(311907),
    r = n(477782),
    a = n(734057),
    d = n(71393),
    u = n(576705),
    s = n(287809),
    o = n(849736),
    A = n(312006),
    c = n(652215),
    E = n(985018);
function g(e, t, n) {
    let g = a.A.getChannel(n),
        S = (0, l.bG)([d.A], () => d.A.getGuild(t), [t]),
        I = (0, l.bG)([A.Ay], () => A.Ay.getPermissionsForUser(e.id, n), [n, e.id]),
        _ = s.default.getCurrentUser()?.id === e.id,
        f = (0, l.bG)([u.A], () => null != n && u.A.canWithPartialContext(c.xBc.MUTE_MEMBERS, { channelId: n }), [n]);
    return null != g && null != S && (f || _) && I.speaker
        ? (0, i.jsx)(r.Dr, {
              id: "audience",
              label: _ ? E.intl.string(E.t["6C6PJx"]) : E.intl.string(E.t.VK3vQy),
              action: () => {
                  _ ? (0, o.Tf)(g) : (0, o.gt)(e, g);
              },
          })
        : null;
}
