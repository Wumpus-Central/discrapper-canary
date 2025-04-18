n.d(t, { P: () => o });
var r = n(544891),
    i = n(570140),
    a = n(981631);
async function o(e) {
    i.Z.dispatch({
        type: 'GUILD_POPOUT_FETCH_START',
        guildId: e
    });
    try {
        let t = await r.tn.get({
            url: a.ANM.GUILD_PREVIEW(e),
            oldFormErrors: !0,
            rejectWithError: !0
        });
        i.Z.dispatch({
            type: 'GUILD_POPOUT_FETCH_SUCCESS',
            guildId: e,
            guild: t.body
        });
    } catch (t) {
        i.Z.dispatch({
            type: 'GUILD_POPOUT_FETCH_FAILURE',
            guildId: e
        });
    }
}
