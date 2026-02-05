"use strict";
n.d(t, { A: () => E });
var r = n(311907),
    i = n(73153),
    a = n(994500),
    s = n(755915);
let o = 0.5,
    l = new Map(),
    u = !1,
    c = Object.freeze({ userAffinities: [], userFlags: {}, lastFetched: 0 }),
    d = { ...c };
function _() {
    l = new Map(d.userAffinities.filter((e) => !a.A.isBlockedOrIgnored(e.otherUserId)).map((e) => [e.otherUserId, e]));
}
function f() {
    u = !0;
}
function p(e) {
    let { affineUsers: t, userFlags: n } = e;
    (d.lastFetched = Date.now()), (u = !1), (d.userAffinities = t), (d.userFlags = n), _();
}
function h() {
    u = !1;
}
function m() {
    (d = { ...c }), (l = new Map()), (u = !1);
}
class g extends r.Ay.PersistedStore {
    static displayName = "UserAffinitiesV2Store";
    static persistKey = "UserAffinitiesStoreV2";
    initialize(e) {
        this.waitFor(a.A),
            null != e &&
                ((d.userAffinities = e.userAffinities),
                (d.userFlags = e.userFlags ?? {}),
                (d.lastFetched = e.lastFetched),
                _()),
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
    getUserFlags() {
        return d.userFlags;
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
let E = new g(i.h, {
    LOAD_USER_AFFINITIES_V2: f,
    LOAD_USER_AFFINITIES_V2_SUCCESS: p,
    LOAD_USER_AFFINITIES_V2_FAILURE: h,
    LOGOUT: m,
});
