n.d(t, { Z: () => v }), n(47120);
var i,
    r = n(442837),
    a = n(570140),
    s = n(699516),
    o = n(496232);
function l(e, t, n) {
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
let u = new Map(),
    c = !1,
    d = Object.freeze({
        userAffinities: [],
        lastFetched: 0
    }),
    f = { ...d };
function _() {
    u = new Map(f.userAffinities.filter((e) => !s.Z.isBlockedOrIgnored(e.otherUserId)).map((e) => [e.otherUserId, e]));
}
function p() {
    c = !0;
}
function h(e) {
    let { affineUsers: t } = e;
    (f.lastFetched = Date.now()), (c = !1), (f.userAffinities = t), _();
}
function m() {
    c = !1;
}
function g() {
    (f = { ...d }), (u = new Map()), (c = !1);
}
class E extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(s.Z), null != e && ((f.userAffinities = e.userAffinities), (f.lastFetched = e.lastFetched), _()), this.syncWith([s.Z], _);
    }
    shouldFetch() {
        if (!c) return Date.now() - f.lastFetched > o.K;
    }
    isFetching() {
        return c;
    }
    getUserAffinities() {
        return f.userAffinities;
    }
    getUserAffinitiesMap() {
        return u;
    }
    compare(e, t) {
        var n, i, r, a;
        return (null !== (r = null === (n = u.get(t)) || void 0 === n ? void 0 : n.communicationProbability) && void 0 !== r ? r : 0) - (null !== (a = null === (i = u.get(e)) || void 0 === i ? void 0 : i.communicationProbability) && void 0 !== a ? a : 0);
    }
    getUserAffinity(e) {
        return u.get(e);
    }
    getState() {
        return f;
    }
}
l(E, 'displayName', 'UserAffinitiesStoreV2'), l(E, 'persistKey', 'UserAffinitiesStoreV2');
let v = new E(a.Z, {
    LOAD_USER_AFFINITIES_V2: p,
    LOAD_USER_AFFINITIES_V2_SUCCESS: h,
    LOAD_USER_AFFINITIES_V2_FAILURE: m,
    LOGOUT: g
});
