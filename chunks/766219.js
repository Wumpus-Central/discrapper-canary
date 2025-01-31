n.d(t, {
    I: () => s,
    s: () => a
});
var i = n(823379),
    l = n(49898),
    r = n(388032);
function a(e) {
    switch (e) {
        case l.GlobalDiscoveryTab.SERVERS:
            return r.intl.string(r.t['+Anbp6']);
        case l.GlobalDiscoveryTab.APPS:
            return r.intl.string(r.t.bGwCoa);
        case l.GlobalDiscoveryTab.QUESTS:
            return r.intl.string(r.t.EcaD4e);
        default:
            (0, i.vE)(e);
    }
}
function s(e) {
    if (e.startsWith('/discovery/applications')) return l.GlobalDiscoveryTab.APPS;
    switch (e) {
        case '/discovery/quests':
            return l.GlobalDiscoveryTab.QUESTS;
        case '/discovery/servers':
            return l.GlobalDiscoveryTab.SERVERS;
        default:
            return l.GLOBAL_DISCOVERY_DEFAULT_TAB;
    }
}
