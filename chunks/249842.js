n.d(t, { P: () => s });
var r = n(544891),
    l = n(570140),
    a = n(981631);
async function s(e) {
    l.Z.dispatch({
        type: 'GUILD_POPOUT_FETCH_START',
        guildId: e
    });
    try {
        let t = await r.tn.get({
            url: a.ANM.GUILD_PREVIEW(e),
            oldFormErrors: !0,
            rejectWithError: !0
        });
        l.Z.dispatch({
            type: 'GUILD_POPOUT_FETCH_SUCCESS',
            guildId: e,
            guild: t.body
        });
    } catch (t) {
        l.Z.dispatch({
            type: 'GUILD_POPOUT_FETCH_FAILURE',
            guildId: e
        });
    }
}
