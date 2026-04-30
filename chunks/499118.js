"use strict";
n.d(t, { A: () => c });
var i = n(17928),
    r = n(228366),
    s = n(823448),
    a = n(351022);
let o = [];
function l() {
    o = [];
}
class u extends i.Ay.Store {
    static displayName = "GlobalDiscoveryServersSearchLayoutStore";
    initialize() {
        this.waitFor(s.A, a.A);
    }
    getVisibleTabs() {
        return o;
    }
}
let c = new u(r.h, {
    CONNECTION_OPEN: l,
    GLOBAL_DISCOVERY_SERVERS_SEARCH_LAYOUT_RESET: l,
    GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS: function (e) {
        let { query: t } = e,
            n = s.A.getCounts(t);
        if (null == n) return !1;
        o = n;
    },
});
