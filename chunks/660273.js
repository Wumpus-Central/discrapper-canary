i.d(n, { A: () => u });
var e = i(627968);
i(64700);
var r = i(311907),
    l = i(397927),
    a = i(857071),
    d = i(152007),
    s = i(867455),
    o = i(985018);
function u(t, n) {
    let i = (0, r.bG)([d.A], () => d.A.hasJoined(t.id));
    return (0, r.bG)([a.A], () => null != t.guild_id && a.A.isLurking(t.guild_id))
        ? null
        : i
          ? (0, e.jsx)(l.Drp, {
                id: "leave-thread",
                label: t.isForumPost() ? o.intl.string(o.t["2LsZdT"]) : o.intl.string(o.t["fa/84m"]),
                action: () => s.A.leaveThread(t, n),
            })
          : (0, e.jsx)(l.Drp, {
                id: "join-thread",
                label: t.isForumPost() ? o.intl.string(o.t.ihLPiO) : o.intl.string(o.t["10kukS"]),
                action: () => s.A.joinThread(t, n),
            });
}
