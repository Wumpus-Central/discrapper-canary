n.d(t, { Z: () => o }), n(388685), n(539854);
var r = n(73800),
    i = n(442837),
    a = n(235587);
function o(e) {
    let { guildId: t, leaderboardId: n, intervalStart: o } = e,
        s = (0, i.Wu)(
            [a.Z],
            () => {
                var e, r;
                return null != (r = null == (e = a.Z.getPrevLeaderboardRanks(t, n, o)) ? void 0 : e.ranks) ? r : [];
            },
            [t, o, n]
        ),
        l = (0, i.Wu)(
            [a.Z],
            () => {
                var e, r;
                return null != (r = null == (e = a.Z.getCurrentLeaderboardRanks(t, n, o)) ? void 0 : e.ranks) ? r : [];
            },
            [t, o, n]
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
                        a = e.get(n);
                    a !== i &&
                        t.push({
                            userId: n,
                            currentRank: i,
                            previousRank: a
                        });
                }),
                t
            );
        }, [s, l])
    };
}
