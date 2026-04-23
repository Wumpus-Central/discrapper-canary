n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var l = n(17928),
    a = n(477782),
    r = n(734057),
    d = n(71393),
    u = n(576705),
    s = n(287809),
    o = n(849736),
    c = n(312006),
    A = n(652215),
    E = n(985018);
function g(e, t, n) {
    let g = r.A.getChannel(n),
        S = (0, l.bG)([d.A], () => d.A.getGuild(t), [t]),
        I = (0, l.bG)([c.Ay], () => c.Ay.getPermissionsForUser(e.id, n), [n, e.id]),
        _ = s.default.getCurrentUser()?.id === e.id,
        f = (0, l.bG)([u.A], () => null != n && u.A.canWithPartialContext(A.xBc.MUTE_MEMBERS, { channelId: n }), [n]);
    return null != g && null != S && (f || _) && I.speaker
        ? (0, i.jsx)(a.Dr, {
              id: "audience",
              label: _ ? E.intl.string(E.t["6C6PJx"]) : E.intl.string(E.t.VK3vQy),
              action: () => {
                  _ ? (0, o.Tf)(g) : (0, o.gt)(e, g);
              },
          })
        : null;
}
