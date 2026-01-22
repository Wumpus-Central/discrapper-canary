n.d(t, {
    j: () => s,
    t: () => a,
});
var r = n(403362),
    i = n(488995),
    l = n(985018);
function a(e) {
    switch (e) {
        case i.GlobalDiscoveryTab.SERVERS:
            return l.intl.string(l.t["+Anbp9"]);
        case i.GlobalDiscoveryTab.APPS:
            return l.intl.string(l.t.bGwCoR);
        case i.GlobalDiscoveryTab.QUESTS:
            return l.intl.string(l.t.EcaD4e);
        default:
            (0, r.xb)(e);
    }
}
function s(e) {
    if (e.startsWith("/discovery/applications")) return i.GlobalDiscoveryTab.APPS;
    switch (e) {
        case "/discovery/quests":
            return i.GlobalDiscoveryTab.QUESTS;
        case "/discovery/servers":
            return i.GlobalDiscoveryTab.SERVERS;
        default:
            return i.GLOBAL_DISCOVERY_DEFAULT_TAB;
    }
}
