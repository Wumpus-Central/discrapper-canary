n.d(t, { $: () => s });
var r = n(562465),
    i = n(73153),
    l = n(652215);
async function s(e) {
    i.h.dispatch({
        type: "DISCOVER_CHECKLIST_FETCH_START",
        guildId: e,
    });
    try {
        let t = await r.Bo.get({
            url: l.Rsh.GUILD_DISCOVERY_REQUIREMENTS(e),
            oldFormErrors: !0,
            rejectWithError: !0,
        });
        i.h.dispatch({
            type: "DISCOVER_CHECKLIST_FETCH_SUCCESS",
            guildId: e,
            checklist: t.body,
        });
    } catch (t) {
        i.h.dispatch({
            type: "DISCOVER_CHECKLIST_FETCH_FAILURE",
            guildId: e,
        });
    }
}
