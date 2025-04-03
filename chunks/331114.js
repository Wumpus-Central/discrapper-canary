n.d(t, { Z: () => h }), n(47120);
var r,
    i = n(442837),
    l = n(570140),
    a = n(881052);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let s = new Map();
class c {
    handleSearchCountStart() {
        (this.error = null), (this.isFetching = !0);
    }
    handleSearchCountSuccess(e) {
        (this.counts = e), (this.isFetching = !1), (this.isInitialFetchComplete = !0);
    }
    handleSearchCountFailure(e) {
        (this.error = new a.Hx(e)), (this.isFetching = !1);
    }
    constructor() {
        o(this, 'isInitialFetchComplete', !1), o(this, 'isFetching', !1), o(this, 'error', null), o(this, 'counts', null);
    }
}
function u(e) {
    var t;
    let n = null != (t = s.get(e)) ? t : new c();
    return s.set(e, n), n;
}
function d(e, t) {
    let n = s.get(e);
    return null != n ? t(n) : null;
}
class p extends (r = i.ZP.Store) {
    getIsInitialFetchComplete(e) {
        return d(e, (e) => e.isInitialFetchComplete);
    }
    getIsFetchingCounts(e) {
        return d(e, (e) => e.isFetching);
    }
    getCounts(e) {
        return d(e, (e) => e.counts);
    }
}
o(p, 'displayName', 'GlobalDiscoveryServersSearchCountStore');
let h = new p(l.Z, {
    CONNECTION_OPEN: function () {
        s.clear();
    },
    GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_START: function (e) {
        let { query: t } = e;
        u(t).handleSearchCountStart();
    },
    GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS: function (e) {
        let { query: t, categoryCounts: n } = e;
        u(t).handleSearchCountSuccess(n);
    },
    GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_FAILURE: function (e) {
        let { query: t, error: n } = e;
        u(t).handleSearchCountFailure(n);
    },
    GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR: function (e) {
        let { ignoreQueries: t } = e,
            n = new Set(t);
        s.forEach((e, t) => {
            n.has(t) || s.delete(t);
        });
    }
});
