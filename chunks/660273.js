n.d(e, { A: () => u });
var i = n(627968);
n(64700);
var r = n(311907),
    l = n(397927),
    a = n(857071),
    s = n(152007),
    d = n(867455),
    o = n(985018);
function u(t, e) {
    let n = (0, r.bG)([s.A], () => s.A.hasJoined(t.id));
    return (0, r.bG)([a.A], () => null != t.guild_id && a.A.isLurking(t.guild_id))
        ? null
        : n
          ? (0, i.jsx)(l.Drp, {
                id: "leave-thread",
                label: t.isForumPost() ? o.intl.string(o.t["2LsZdT"]) : o.intl.string(o.t["fa/84m"]),
                action: () => d.A.leaveThread(t, e),
            })
          : (0, i.jsx)(l.Drp, {
                id: "join-thread",
                label: t.isForumPost() ? o.intl.string(o.t.ihLPiO) : o.intl.string(o.t["10kukS"]),
                action: () => d.A.joinThread(t, e),
            });
}
