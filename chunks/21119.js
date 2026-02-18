"use strict";
n.d(t, { A: () => A });
var r = n(311907),
    i = n(73153),
    a = n(994500),
    s = n(755915);
let o = 0.5,
    l = new Map(),
    u = !1,
    c = Object.freeze({ userAffinities: [], lastFetched: 0 }),
    d = { ...c };
function _() {
    l = new Map(d.userAffinities.filter((e) => !a.A.isBlockedOrIgnored(e.otherUserId)).map((e) => [e.otherUserId, e]));
}
function f() {
    u = !0;
}
function h(e) {
    let { affineUsers: t } = e;
    (d.lastFetched = Date.now()), (u = !1), (d.userAffinities = t), _();
}
function p() {
    u = !1;
}
function g() {
    (d = { ...c }), (l = new Map()), (u = !1);
}
class E extends r.Ay.PersistedStore {
    static displayName = "UserAffinitiesV2Store";
    static persistKey = "UserAffinitiesStoreV2";
    initialize(e) {
        this.waitFor(a.A),
            null != e && ((d.userAffinities = e.userAffinities), (d.lastFetched = e.lastFetched), _()),
            this.syncWith([a.A], _);
    }
    shouldFetch() {
        if (!u) return Date.now() - d.lastFetched > s.e;
    }
    isFetching() {
        return u;
    }
    getUserAffinities() {
        return d.userAffinities;
    }
    getUserAffinitiesMap() {
        return l;
    }
    compare(e, t) {
        return (l.get(t)?.communicationProbability ?? 0) - (l.get(e)?.communicationProbability ?? 0);
    }
    compareByDmProbability(e, t) {
        return (l.get(t)?.dmProbability ?? 0) - (l.get(e)?.dmProbability ?? 0);
    }
    getUserAffinity(e) {
        return l.get(e);
    }
    getState() {
        return d;
    }
    isHighlyAffinedVCUser(e) {
        return (l.get(e)?.vcProbability ?? 0) > o;
    }
}
let A = new E(i.h, {
    LOAD_USER_AFFINITIES_V2: f,
    LOAD_USER_AFFINITIES_V2_SUCCESS: h,
    LOAD_USER_AFFINITIES_V2_FAILURE: p,
    LOGOUT: g,
});
