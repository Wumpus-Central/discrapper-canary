n.d(t, { A: () => c });
var i = n(17928),
    r = n(228366),
    a = n(823448),
    s = n(351022);
let l = [];
function o() {
    l = [];
}
class d extends i.Ay.Store {
    static displayName = "GlobalDiscoveryServersSearchLayoutStore";
    initialize() {
        this.waitFor(a.A, s.A);
    }
    getVisibleTabs() {
        return l;
    }
}
let c = new d(r.h, {
    CONNECTION_OPEN: o,
    GLOBAL_DISCOVERY_SERVERS_SEARCH_LAYOUT_RESET: o,
    GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS: function (e) {
        let { query: t } = e,
            n = a.A.getCounts(t);
        if (null == n) return !1;
        l = n;
    },
});
