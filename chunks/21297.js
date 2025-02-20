n.d(t, { z: () => l });
var r = n(664751),
    i = n(544891),
    s = n(570140),
    a = n(981631);
async function l(e) {
    s.Z.dispatch({
        type: 'DISCOVER_GUILDS_FETCH_START',
        guildIds: e
    });
    try {
        let { guilds: t } = (
            await i.tn.get({
                url: a.ANM.GUILD_DISCOVERY,
                query: r.stringify({ guild_ids: e }),
                oldFormErrors: !0,
                rejectWithError: !0
            })
        ).body;
        s.Z.dispatch({
            type: 'DISCOVER_GUILDS_FETCH_SUCCESS',
            guilds: t
        });
    } catch (e) {
        s.Z.dispatch({ type: 'DISCOVER_GUILDS_FETCH_FAILURE' });
    }
}
