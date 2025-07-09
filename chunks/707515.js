r.d(t, { _: () => a });
var n = r(425128),
    i = r(434382);
let a = async (e) => {
    (await n._b(e),
        await i.Z.fetchLeaderboard({
            guildId: e.guildId,
            leaderboardId: e.leaderboardId,
            force: !0
        }));
};
