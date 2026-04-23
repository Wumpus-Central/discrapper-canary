n.d(t, { A: () => u });
var i = n(311907),
    r = n(73153),
    a = n(823448),
    l = n(351022);
let s = [];
function o() {
    s = [];
}
class d extends i.Ay.Store {
    static displayName = "GlobalDiscoveryServersSearchLayoutStore";
    initialize() {
        this.waitFor(a.A, l.A);
    }
    getVisibleTabs() {
        return s;
    }
}
let u = new d(r.h, {
    CONNECTION_OPEN: o,
    GLOBAL_DISCOVERY_SERVERS_SEARCH_LAYOUT_RESET: o,
    GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS: function (e) {
        let { query: t } = e,
            n = a.A.getCounts(t);
        if (null == n) return !1;
        s = n;
    },
});
