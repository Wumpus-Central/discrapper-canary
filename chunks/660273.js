i.d(n, { A: () => u });
var e = i(627968);
i(64700);
var l = i(17928),
    r = i(477782),
    a = i(857071),
    s = i(152007),
    d = i(867455),
    o = i(985018);
function u(t, n) {
    let i = (0, l.bG)([s.A], () => s.A.hasJoined(t.id));
    return (0, l.bG)([a.A], () => null != t.guild_id && a.A.isLurking(t.guild_id))
        ? null
        : i
          ? (0, e.jsx)(r.Dr, {
                id: "leave-thread",
                label: t.isForumPost() ? o.intl.string(o.t["2LsZdT"]) : o.intl.string(o.t["fa/84m"]),
                action: () => d.A.leaveThread(t, n),
            })
          : (0, e.jsx)(r.Dr, {
                id: "join-thread",
                label: t.isForumPost() ? o.intl.string(o.t.ihLPiO) : o.intl.string(o.t["10kukS"]),
                action: () => d.A.joinThread(t, n),
            });
}
