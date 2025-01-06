t.d(n, {
    P: function () {
        return a;
    }
});
var i = t(544891),
    l = t(570140),
    r = t(981631);
async function a(e) {
    l.Z.dispatch({
        type: 'GUILD_POPOUT_FETCH_START',
        guildId: e
    });
    try {
        let n = await i.tn.get({
            url: r.ANM.GUILD_PREVIEW(e),
            oldFormErrors: !0,
            rejectWithError: !0
        });
        l.Z.dispatch({
            type: 'GUILD_POPOUT_FETCH_SUCCESS',
            guildId: e,
            guild: n.body
        });
    } catch (n) {
        l.Z.dispatch({
            type: 'GUILD_POPOUT_FETCH_FAILURE',
            guildId: e
        });
    }
}
