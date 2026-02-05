n.d(t, { j: () => s, t: () => l });
var i = n(403362),
    r = n(488995),
    a = n(985018);
function l(e) {
    switch (e) {
        case r.GlobalDiscoveryTab.SERVERS:
            return a.intl.string(a.t["+Anbp9"]);
        case r.GlobalDiscoveryTab.APPS:
            return a.intl.string(a.t.bGwCoR);
        case r.GlobalDiscoveryTab.QUESTS:
            return a.intl.string(a.t.EcaD4e);
        default:
            (0, i.xb)(e);
    }
}
function s(e) {
    if (e.startsWith("/discovery/applications")) return r.GlobalDiscoveryTab.APPS;
    switch (e) {
        case "/discovery/quests":
            return r.GlobalDiscoveryTab.QUESTS;
        case "/discovery/servers":
            return r.GlobalDiscoveryTab.SERVERS;
        default:
            return r.GLOBAL_DISCOVERY_DEFAULT_TAB;
    }
}
