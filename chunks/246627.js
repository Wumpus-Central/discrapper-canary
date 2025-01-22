r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(47120);
var a = r(653041);
var o = r(192379),
    s = r(442837),
    l = r(235587);
function u(e) {
    let { guildId: n, leaderboardId: r, intervalStart: i } = e,
        a = (0, s.Wu)(
            [l.Z],
            () => {
                var e, a;
                return null !== (a = null === (e = l.Z.getPrevLeaderboardRanks(n, r, i)) || void 0 === e ? void 0 : e.ranks) && void 0 !== a ? a : [];
            },
            [n, i, r]
        ),
        u = (0, s.Wu)(
            [l.Z],
            () => {
                var e, a;
                return null !== (a = null === (e = l.Z.getCurrentLeaderboardRanks(n, r, i)) || void 0 === e ? void 0 : e.ranks) && void 0 !== a ? a : [];
            },
            [n, i, r]
        );
    return {
        rankChanges: o.useMemo(() => {
            let e = new Map();
            a.forEach((n, r) => {
                e.set(n, r + 1);
            });
            let n = [];
            return (
                u.forEach((r, i) => {
                    let a = i + 1,
                        o = e.get(r);
                    o !== a &&
                        n.push({
                            userId: r,
                            currentRank: a,
                            previousRank: o
                        });
                }),
                n
            );
        }, [a, u])
    };
}
