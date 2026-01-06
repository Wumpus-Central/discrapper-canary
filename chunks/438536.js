e.d(n, { Z: () => u });
var i = e(54381);
e(473749);
var l = e(442837),
    a = e(481060),
    r = e(41776),
    s = e(569471),
    o = e(346479),
    d = e(388032);
function u(t, n) {
    let e = (0, l.e7)([s.Z], () => s.Z.hasJoined(t.id));
    return (0, l.e7)([r.Z], () => null != t.guild_id && r.Z.isLurking(t.guild_id))
        ? null
        : e
          ? (0, i.jsx)(a.sNh, {
                id: "leave-thread",
                label: t.isForumPost() ? d.intl.string(d.t["2LsZdT"]) : d.intl.string(d.t["fa/84m"]),
                action: () => o.Z.leaveThread(t, n),
            })
          : (0, i.jsx)(a.sNh, {
                id: "join-thread",
                label: t.isForumPost() ? d.intl.string(d.t.ihLPiO) : d.intl.string(d.t["10kukS"]),
                action: () => o.Z.joinThread(t, n),
            });
}
