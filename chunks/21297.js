n.d(t, {
    z: function () {
        return s;
    }
});
var i = n(664751),
    r = n(544891),
    l = n(570140),
    a = n(981631);
async function s(e) {
    l.Z.dispatch({
        type: 'DISCOVER_GUILDS_FETCH_START',
        guildIds: e
    });
    try {
        let { guilds: t } = (
            await r.tn.get({
                url: a.ANM.GUILD_DISCOVERY,
                query: i.stringify({ guild_ids: e }),
                oldFormErrors: !0,
                rejectWithError: !0
            })
        ).body;
        l.Z.dispatch({
            type: 'DISCOVER_GUILDS_FETCH_SUCCESS',
            guilds: t
        });
    } catch (e) {
        l.Z.dispatch({ type: 'DISCOVER_GUILDS_FETCH_FAILURE' });
    }
}
