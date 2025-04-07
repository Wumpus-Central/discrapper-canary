n.d(t, { Z: () => o }), n(388685), n(539854);
var r = n(192379),
    i = n(442837),
    l = n(235587);
function o(e) {
    let { guildId: t, leaderboardId: n, intervalStart: o } = e,
        a = (0, i.Wu)(
            [l.Z],
            () => {
                var e, r;
                return null != (r = null == (e = l.Z.getPrevLeaderboardRanks(t, n, o)) ? void 0 : e.ranks) ? r : [];
            },
            [t, o, n]
        ),
        s = (0, i.Wu)(
            [l.Z],
            () => {
                var e, r;
                return null != (r = null == (e = l.Z.getCurrentLeaderboardRanks(t, n, o)) ? void 0 : e.ranks) ? r : [];
            },
            [t, o, n]
        );
    return {
        rankChanges: r.useMemo(() => {
            let e = new Map();
            a.forEach((t, n) => {
                e.set(t, n + 1);
            });
            let t = [];
            return (
                s.forEach((n, r) => {
                    let i = r + 1,
                        l = e.get(n);
                    l !== i &&
                        t.push({
                            userId: n,
                            currentRank: i,
                            previousRank: l
                        });
                }),
                t
            );
        }, [a, s])
    };
}
