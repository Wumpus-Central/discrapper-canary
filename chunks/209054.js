n.d(t, { k: () => a });
var r = n(544891),
    i = n(570140),
    s = n(981631);
async function a(e) {
    i.Z.dispatch({
        type: 'DISCOVER_CHECKLIST_FETCH_START',
        guildId: e
    });
    try {
        let t = await r.tn.get({
            url: s.ANM.GUILD_DISCOVERY_REQUIREMENTS(e),
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
