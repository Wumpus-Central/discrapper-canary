i.d(n, {
    k: function () {
        return s;
    }
});
var e = i(544891),
    r = i(570140),
    l = i(981631);
async function s(t) {
    r.Z.dispatch({
        type: 'DISCOVER_CHECKLIST_FETCH_START',
        guildId: t
    });
    try {
        let n = await e.tn.get({
            url: l.ANM.GUILD_DISCOVERY_REQUIREMENTS(t),
            oldFormErrors: !0,
            rejectWithError: !0
        });
        r.Z.dispatch({
            type: 'DISCOVER_CHECKLIST_FETCH_SUCCESS',
            guildId: t,
            checklist: n.body
        });
    } catch (n) {
        r.Z.dispatch({
            type: 'DISCOVER_CHECKLIST_FETCH_FAILURE',
            guildId: t
        });
    }
}
