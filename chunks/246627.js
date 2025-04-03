r.d(t, { Z: () => i }), r(47120), r(653041);
var n = r(192379),
    a = r(442837),
    o = r(235587);
function i(e) {
    let { guildId: t, leaderboardId: r, intervalStart: i } = e,
        l = (0, a.Wu)(
            [o.Z],
            () => {
                var e, n;
                return null != (n = null == (e = o.Z.getPrevLeaderboardRanks(t, r, i)) ? void 0 : e.ranks) ? n : [];
            },
            [t, i, r]
        ),
        s = (0, a.Wu)(
            [o.Z],
            () => {
                var e, n;
                return null != (n = null == (e = o.Z.getCurrentLeaderboardRanks(t, r, i)) ? void 0 : e.ranks) ? n : [];
            },
            [t, i, r]
        );
    return {
        rankChanges: n.useMemo(() => {
            let e = new Map();
            l.forEach((t, r) => {
                e.set(t, r + 1);
            });
            let t = [];
            return (
                s.forEach((r, n) => {
                    let a = n + 1,
                        o = e.get(r);
                    o !== a &&
                        t.push({
                            userId: r,
                            currentRank: a,
                            previousRank: o
                        });
                }),
                t
            );
        }, [l, s])
    };
}
