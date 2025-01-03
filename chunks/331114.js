n(47120);
var i,
    r = n(442837),
    l = n(570140),
    a = n(881052);
function s(e, t, n) {
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
let o = new Map();
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
        s(this, 'isInitialFetchComplete', !1), s(this, 'isFetching', !1), s(this, 'error', null), s(this, 'counts', null);
    }
}
function d(e) {
    var t;
    let n = null !== (t = o.get(e)) && void 0 !== t ? t : new c();
    return o.set(e, n), n;
}
function u(e, t) {
    let n = o.get(e);
    return null != n ? t(n) : null;
}
class h extends (i = r.ZP.Store) {
    getIsInitialFetchComplete(e) {
        return u(e, (e) => e.isInitialFetchComplete);
    }
    getIsFetchingCounts(e) {
        return u(e, (e) => e.isFetching);
    }
    getCounts(e) {
        return u(e, (e) => e.counts);
    }
}
s(h, 'displayName', 'GlobalDiscoveryServersSearchCountStore'),
    (t.Z = new h(l.Z, {
        CONNECTION_OPEN: function () {
            o.clear();
        },
        GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_START: function (e) {
            let { query: t } = e;
            d(t).handleSearchCountStart();
        },
        GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS: function (e) {
            let { query: t, categoryCounts: n } = e;
            d(t).handleSearchCountSuccess(n);
        },
        GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_FAILURE: function (e) {
            let { query: t, error: n } = e;
            d(t).handleSearchCountFailure(n);
        },
        GLOBAL_DISCOVERY_SERVERS_SEARCH_CLEAR: function (e) {
            let { ignoreQueries: t } = e,
                n = new Set(t);
            o.forEach((e, t) => {
                !n.has(t) && o.delete(t);
            });
        }
    }));
