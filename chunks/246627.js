n.d(t, { Z: () => a }), n(47120), n(653041);
var l = n(192379),
    i = n(442837),
    r = n(235587);
function a(e) {
    let { guildId: t, leaderboardId: n, intervalStart: a } = e,
        s = (0, i.Wu)(
            [r.Z],
            () => {
                var e, l;
                return null !== (l = null === (e = r.Z.getPrevLeaderboardRanks(t, n, a)) || void 0 === e ? void 0 : e.ranks) && void 0 !== l ? l : [];
            },
            [t, a, n]
        ),
        o = (0, i.Wu)(
            [r.Z],
            () => {
                var e, l;
                return null !== (l = null === (e = r.Z.getCurrentLeaderboardRanks(t, n, a)) || void 0 === e ? void 0 : e.ranks) && void 0 !== l ? l : [];
            },
            [t, a, n]
        );
    return {
        rankChanges: l.useMemo(() => {
            let e = new Map();
            s.forEach((t, n) => {
                e.set(t, n + 1);
            });
            let t = [];
            return (
                o.forEach((n, l) => {
                    let i = l + 1,
                        r = e.get(n);
                    r !== i &&
                        t.push({
                            userId: n,
                            currentRank: i,
                            previousRank: r
                        });
                }),
                t
            );
        }, [s, o])
    };
}
