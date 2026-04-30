"use strict";
n.d(t, { j: () => o, t: () => a });
var i = n(403362),
    r = n(488995),
    s = n(375708);
function a(e) {
    switch (e) {
        case r.GlobalDiscoveryTab.SERVERS:
            return s.intl.string(s.t["+Anbp9"]);
        case r.GlobalDiscoveryTab.APPS:
            return s.intl.string(s.t.bGwCoR);
        case r.GlobalDiscoveryTab.QUESTS:
            return s.intl.string(s.t.EcaD4e);
        default:
            (0, i.xb)(e);
    }
}
function o(e) {
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
