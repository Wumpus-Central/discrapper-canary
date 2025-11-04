n.d(t, { Z: () => o });
var r = n(951288);
n(647438);
var a = n(308982),
    i = n(134464),
    l = n(130625);
function o(e) {
    let { channelId: t, memberIds: n, guildId: o, currentMemberId: c, shuffling: u } = e;
    return (0, r.jsx)("ul", {
        className: l.memberList,
        "data-member-count": n.length,
        "data-animated": "true",
        children: n.map((e) => {
            let n = u ? (0, a.iD)(t, e) : null;
            return (0, r.jsx)(
                i.Z,
                {
                    userId: e,
                    guildId: o,
                    isCurrent: c === e && !u,
                    shuffleState: n,
                },
                e,
            );
        }),
    });
}
