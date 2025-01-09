n.d(t, {
    k: function () {
        return s;
    }
});
var i = n(544891),
    r = n(570140),
    l = n(981631);
async function s(e) {
    r.Z.dispatch({
        type: 'DISCOVER_CHECKLIST_FETCH_START',
        guildId: e
    });
    try {
        let t = await i.tn.get({
            url: l.ANM.GUILD_DISCOVERY_REQUIREMENTS(e),
            oldFormErrors: !0,
            rejectWithError: !0
        });
        r.Z.dispatch({
            type: 'DISCOVER_CHECKLIST_FETCH_SUCCESS',
            guildId: e,
            checklist: t.body
        });
    } catch (t) {
        r.Z.dispatch({
            type: 'DISCOVER_CHECKLIST_FETCH_FAILURE',
            guildId: e
        });
    }
}
