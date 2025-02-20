n.d(t, { Z: () => a }), n(47120), n(653041);
var r = n(192379),
    l = n(442837),
    i = n(235587);
function a(e) {
    let { guildId: t, leaderboardId: n, intervalStart: a } = e,
        o = (0, l.Wu)(
            [i.Z],
            () => {
                var e, r;
                return null !== (r = null === (e = i.Z.getPrevLeaderboardRanks(t, n, a)) || void 0 === e ? void 0 : e.ranks) && void 0 !== r ? r : [];
            },
            [t, a, n]
        ),
        s = (0, l.Wu)(
            [i.Z],
            () => {
                var e, r;
                return null !== (r = null === (e = i.Z.getCurrentLeaderboardRanks(t, n, a)) || void 0 === e ? void 0 : e.ranks) && void 0 !== r ? r : [];
            },
            [t, a, n]
        );
    return {
        rankChanges: r.useMemo(() => {
            let e = new Map();
            o.forEach((t, n) => {
                e.set(t, n + 1);
            });
            let t = [];
            return (
                s.forEach((n, r) => {
                    let l = r + 1,
                        i = e.get(n);
                    i !== l &&
                        t.push({
                            userId: n,
                            currentRank: l,
                            previousRank: i
                        });
                }),
                t
            );
        }, [o, s])
    };
}
