n.d(t, {
    I: function () {
        return s;
    },
    s: function () {
        return a;
    }
});
var i = n(823379),
    r = n(49898),
    l = n(388032);
function a(e) {
    switch (e) {
        case r.GlobalDiscoveryTab.SERVERS:
            return l.intl.string(l.t['+Anbp6']);
        case r.GlobalDiscoveryTab.APPS:
            return l.intl.string(l.t.bGwCoa);
        case r.GlobalDiscoveryTab.QUESTS:
            return l.intl.string(l.t.EcaD4e);
        default:
            (0, i.vE)(e);
    }
}
function s(e) {
    if (e.startsWith('/discovery/applications')) return r.GlobalDiscoveryTab.APPS;
    switch (e) {
        case '/discovery/quests':
            return r.GlobalDiscoveryTab.QUESTS;
        case '/discovery/servers':
            return r.GlobalDiscoveryTab.SERVERS;
        default:
            return r.GLOBAL_DISCOVERY_DEFAULT_TAB;
    }
}
