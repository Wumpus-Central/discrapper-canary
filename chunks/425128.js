n.d(t, {
    _7: () => c,
    _b: () => d,
    pV: () => u
});
var i = n(544891),
    r = n(570140),
    a = n(881052),
    s = n(463031),
    o = n(981631);
let l = 900000,
    u = async (e) => {
        let { guildId: t, leaderboardId: n, intervalOffset: r = 0, force: s = !1 } = e;
        try {
            var u;
            let e = (
                    await i.tn.get({
                        url: o.ANM.GUILD_LEADERBOARD(t, n),
                        query: {
                            interval_offset: r,
                            cached: !s
                        },
                        rejectWithError: !1
                    })
                ).body,
                a = null !== (u = e.wait_ms_until_next_fetch) && void 0 !== u ? u : l;
            return null != a && (e.expires_at = Date.now() + a), e;
        } catch (e) {
            throw new a.Hx(e);
        }
    },
    c = async (e) => {
        let { riotConnectionId: t, lolConnectionId: n, onlyUpdateIfStale: l } = e;
        try {
            let e = (
                await i.tn.post({
                    url: o.ANM.UPDATE_MY_LOL_LEADERBOARD(),
                    body: {
                        riot_connection_id: t,
                        lol_connection_id: n,
                        only_update_if_stale: l
                    },
                    rejectWithError: !1
                })
            ).body;
            return (
                null != e.update_enqueued_timestamp &&
                    r.Z.dispatch({
                        type: 'SET_USER_LEADERBOARD_LAST_UPDATE_REQUESTED',
                        leaderboardId: s.z,
                        lastUpdateRequested: e.update_enqueued_timestamp
                    }),
                e
            );
        } catch (e) {
            throw new a.Hx(e);
        }
    },
    d = async (e) => {
        let { guildId: t, leaderboardId: n, sortByStatisticId: r, sortDesc: s, showWinnerCrown: l } = e;
        try {
            return (
                await i.tn.put({
                    url: o.ANM.GUILD_LEADERBOARD_SETTINGS(t, n),
                    body: {
                        sort_by_statistic_id: r,
                        sort_desc: s,
                        show_winner_crown: l
                    },
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new a.Hx(e);
        }
    };
