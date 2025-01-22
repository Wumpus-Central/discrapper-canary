var i,
    a = r(47120);
var o = r(442837),
    s = r(570140),
    l = r(699516),
    u = r(496232);
function c(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let d = new Map(),
    f = !1,
    p = Object.freeze({
        userAffinities: [],
        lastFetched: 0
    }),
    h = { ...p };
function _() {
    d = new Map(h.userAffinities.filter((e) => !l.Z.isBlockedOrIgnored(e.otherUserId)).map((e) => [e.otherUserId, e]));
}
function m() {
    f = !0;
}
function g(e) {
    let { affineUsers: n } = e;
    (h.lastFetched = Date.now()), (f = !1), (h.userAffinities = n), _();
}
function E() {
    f = !1;
}
function v() {
    (h = { ...p }), (d = new Map()), (f = !1);
}
class y extends (i = o.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(l.Z), null != e && ((h.userAffinities = e.userAffinities), (h.lastFetched = e.lastFetched), _()), this.syncWith([l.Z], _);
    }
    shouldFetch() {
        if (!f) return Date.now() - h.lastFetched > u.K;
    }
    isFetching() {
        return f;
    }
    getUserAffinities() {
        return h.userAffinities;
    }
    getUserAffinitiesMap() {
        return d;
    }
    compare(e, n) {
        var r, i, a, o;
        return (null !== (a = null === (r = d.get(n)) || void 0 === r ? void 0 : r.communicationProbability) && void 0 !== a ? a : 0) - (null !== (o = null === (i = d.get(e)) || void 0 === i ? void 0 : i.communicationProbability) && void 0 !== o ? o : 0);
    }
    getUserAffinity(e) {
        return d.get(e);
    }
    getState() {
        return h;
    }
}
c(y, 'displayName', 'UserAffinitiesStoreV2'),
    c(y, 'persistKey', 'UserAffinitiesStoreV2'),
    (n.Z = new y(s.Z, {
        LOAD_USER_AFFINITIES_V2: m,
        LOAD_USER_AFFINITIES_V2_SUCCESS: g,
        LOAD_USER_AFFINITIES_V2_FAILURE: E,
        LOGOUT: v
    }));
