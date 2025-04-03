n.d(t, {
    I: () => o,
    s: () => a
});
var r = n(823379),
    i = n(49898),
    l = n(388032);
function a(e) {
    switch (e) {
        case i.GlobalDiscoveryTab.SERVERS:
            return l.NW.string(l.t['+Anbp6']);
        case i.GlobalDiscoveryTab.APPS:
            return l.NW.string(l.t.bGwCoa);
        case i.GlobalDiscoveryTab.QUESTS:
            return l.NW.string(l.t.EcaD4e);
        default:
            (0, r.vE)(e);
    }
}
function o(e) {
    if (e.startsWith('/discovery/applications')) return i.GlobalDiscoveryTab.APPS;
    switch (e) {
        case '/discovery/quests':
            return i.GlobalDiscoveryTab.QUESTS;
        case '/discovery/servers':
            return i.GlobalDiscoveryTab.SERVERS;
        default:
            return i.GLOBAL_DISCOVERY_DEFAULT_TAB;
    }
}
