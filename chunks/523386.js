n.d(t, { $: () => r });
var i = n(562465),
    l = n(73153),
    s = n(652215);
async function r(e) {
    l.h.dispatch({ type: "DISCOVER_CHECKLIST_FETCH_START", guildId: e });
    try {
        let t = await i.Bo.get({ url: s.Rsh.GUILD_DISCOVERY_REQUIREMENTS(e), oldFormErrors: !0, rejectWithError: !0 });
        l.h.dispatch({ type: "DISCOVER_CHECKLIST_FETCH_SUCCESS", guildId: e, checklist: t.body });
    } catch (t) {
        l.h.dispatch({ type: "DISCOVER_CHECKLIST_FETCH_FAILURE", guildId: e });
    }
}
