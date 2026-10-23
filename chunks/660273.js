n.d(t, { A: () => o });
var s = n(477900);
n(582128);
var e = n(17928),
    l = n(477782),
    r = n(857071),
    d = n(152007),
    a = n(867455),
    u = n(105292);
function o(i, t) {
    let n = (0, e.bG)([d.A], () => d.A.hasJoined(i.id));
    return (0, e.bG)([r.A], () => null != i.guild_id && r.A.isLurking(i.guild_id)) || n
        ? null
        : (0, s.jsx)(l.Dr, {
              id: "join-thread",
              label: i.isForumPost() ? u.intl.string(u.t.ihLPiO) : u.intl.string(u.t["10kukS"]),
              action: () => a.A.joinThread(i, t),
          });
}
