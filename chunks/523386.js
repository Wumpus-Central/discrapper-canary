"use strict";
n.d(t, { $: () => r });
var i = n(562465),
    s = n(73153),
    l = n(652215);
async function r(e) {
    s.h.dispatch({ type: "DISCOVER_CHECKLIST_FETCH_START", guildId: e });
    try {
        let t = await i.Bo.get({ url: l.Rsh.GUILD_DISCOVERY_REQUIREMENTS(e), oldFormErrors: !0, rejectWithError: !0 });
        s.h.dispatch({ type: "DISCOVER_CHECKLIST_FETCH_SUCCESS", guildId: e, checklist: t.body });
    } catch (t) {
        s.h.dispatch({ type: "DISCOVER_CHECKLIST_FETCH_FAILURE", guildId: e });
    }
}
