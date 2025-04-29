n.d(t, { Z: () => a }), n(388685), n(539854);
var r = n(192379),
    i = n(442837),
    o = n(235587);
function a(e) {
    let { guildId: t, leaderboardId: n, intervalStart: a } = e,
        s = (0, i.Wu)(
            [o.Z],
            () => {
                var e, r;
                return null != (r = null == (e = o.Z.getPrevLeaderboardRanks(t, n, a)) ? void 0 : e.ranks) ? r : [];
            },
            [t, a, n]
        ),
        l = (0, i.Wu)(
            [o.Z],
            () => {
                var e, r;
                return null != (r = null == (e = o.Z.getCurrentLeaderboardRanks(t, n, a)) ? void 0 : e.ranks) ? r : [];
            },
            [t, a, n]
        );
    return {
        rankChanges: r.useMemo(() => {
            let e = new Map();
            s.forEach((t, n) => {
                e.set(t, n + 1);
            });
            let t = [];
            return (
                l.forEach((n, r) => {
                    let i = r + 1,
                        o = e.get(n);
                    o !== i &&
                        t.push({
                            userId: n,
                            currentRank: i,
                            previousRank: o
                        });
                }),
                t
            );
        }, [s, l])
    };
}
