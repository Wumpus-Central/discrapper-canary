n.d(t, { A: () => c });
var i = n(17928),
    a = n(228366),
    r = n(823448),
    s = n(351022);
let l = [];
function o() {
    l = [];
}
class d extends i.Ay.Store {
    static displayName = "GlobalDiscoveryServersSearchLayoutStore";
    initialize() {
        this.waitFor(r.A, s.A);
    }
    getVisibleTabs() {
        return l;
    }
}
let c = new d(a.h, {
    CONNECTION_OPEN: o,
    GLOBAL_DISCOVERY_SERVERS_SEARCH_LAYOUT_RESET: o,
    GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS: function (e) {
        let { query: t } = e,
            n = r.A.getCounts(t);
        if (null == n) return !1;
        l = n;
    },
});
