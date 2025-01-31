n.d(t, { Z: () => s }), n(47120), n(653041);
var i = n(192379),
    r = n(442837),
    a = n(235587);
function s(e) {
    let { guildId: t, leaderboardId: n, intervalStart: s } = e,
        o = (0, r.Wu)(
            [a.Z],
            () => {
                var e, i;
                return null !== (i = null === (e = a.Z.getPrevLeaderboardRanks(t, n, s)) || void 0 === e ? void 0 : e.ranks) && void 0 !== i ? i : [];
            },
            [t, s, n]
        ),
        l = (0, r.Wu)(
            [a.Z],
            () => {
                var e, i;
                return null !== (i = null === (e = a.Z.getCurrentLeaderboardRanks(t, n, s)) || void 0 === e ? void 0 : e.ranks) && void 0 !== i ? i : [];
            },
            [t, s, n]
        );
    return {
        rankChanges: i.useMemo(() => {
            let e = new Map();
            o.forEach((t, n) => {
                e.set(t, n + 1);
            });
            let t = [];
            return (
                l.forEach((n, i) => {
                    let r = i + 1,
                        a = e.get(n);
                    a !== r &&
                        t.push({
                            userId: n,
                            currentRank: r,
                            previousRank: a
                        });
                }),
                t
            );
        }, [o, l])
    };
}
