n.d(t, {
    _7: () => u,
    _b: () => d,
    pV: () => c
});
var r = n(544891),
    i = n(570140),
    o = n(881052),
    a = n(463031),
    s = n(981631);
let l = 900000,
    c = async (e) => {
        let { guildId: t, leaderboardId: n, intervalOffset: i = 0, force: a = !1 } = e;
        try {
            var c;
            let e = (
                    await r.tn.get({
                        url: s.ANM.GUILD_LEADERBOARD(t, n),
                        query: {
                            interval_offset: i,
                            cached: !a
                        },
                        rejectWithError: !1
                    })
                ).body,
                o = null != (c = e.wait_ms_until_next_fetch) ? c : l;
            return null != o && (e.expires_at = Date.now() + o), e;
        } catch (e) {
            throw new o.Hx(e);
        }
    },
    u = async (e) => {
        let { riotConnectionId: t, lolConnectionId: n, onlyUpdateIfStale: l } = e;
        try {
            let e = (
                await r.tn.post({
                    url: s.ANM.UPDATE_MY_LOL_LEADERBOARD(),
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
                    i.Z.dispatch({
                        type: 'SET_USER_LEADERBOARD_LAST_UPDATE_REQUESTED',
                        leaderboardId: a.z,
                        lastUpdateRequested: e.update_enqueued_timestamp
                    }),
                e
            );
        } catch (e) {
            throw new o.Hx(e);
        }
    },
    d = async (e) => {
        let { guildId: t, leaderboardId: n, sortByStatisticId: i, sortDesc: a, showWinnerCrown: l } = e;
        try {
            return (
                await r.tn.put({
                    url: s.ANM.GUILD_LEADERBOARD_SETTINGS(t, n),
                    body: {
                        sort_by_statistic_id: i,
                        sort_desc: a,
                        show_winner_crown: l
                    },
                    rejectWithError: !1
                })
            ).body;
        } catch (e) {
            throw new o.Hx(e);
        }
    };
