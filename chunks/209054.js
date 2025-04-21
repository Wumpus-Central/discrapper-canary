n.d(t, { k: () => s });
var r = n(544891),
    i = n(570140),
    l = n(981631);
async function s(e) {
    i.Z.dispatch({
        type: 'DISCOVER_CHECKLIST_FETCH_START',
        guildId: e
    });
    try {
        let t = await r.tn.get({
            url: l.ANM.GUILD_DISCOVERY_REQUIREMENTS(e),
            oldFormErrors: !0,
            rejectWithError: !0
        });
        i.Z.dispatch({
            type: 'DISCOVER_CHECKLIST_FETCH_SUCCESS',
            guildId: e,
            checklist: t.body
        });
    } catch (t) {
        i.Z.dispatch({
            type: 'DISCOVER_CHECKLIST_FETCH_FAILURE',
            guildId: e
        });
    }
}
