"use strict";
n.d(t, { A: () => f });
var r = n(311907),
    i = n(73153),
    s = n(994500),
    a = n(755915);
let o = new Map(),
    l = !1,
    u = Object.freeze({ userAffinities: [], lastFetched: 0 }),
    d = { ...u };
function c() {
    o = new Map(d.userAffinities.filter((e) => !s.A.isBlockedOrIgnored(e.otherUserId)).map((e) => [e.otherUserId, e]));
}
class _ extends r.Ay.PersistedStore {
    static displayName = "UserAffinitiesV2Store";
    static persistKey = "UserAffinitiesStoreV2";
    initialize(e) {
        this.waitFor(s.A),
            null != e && ((d.userAffinities = e.userAffinities), (d.lastFetched = e.lastFetched), c()),
            this.syncWith([s.A], c);
    }
    shouldFetch() {
        if (!l) return Date.now() - d.lastFetched > a.e;
    }
    isFetching() {
        return l;
    }
    getUserAffinities() {
        return d.userAffinities;
    }
    getUserAffinitiesMap() {
        return o;
    }
    compare(e, t) {
        return (o.get(t)?.communicationProbability ?? 0) - (o.get(e)?.communicationProbability ?? 0);
    }
    compareByDmProbability(e, t) {
        return (o.get(t)?.dmProbability ?? 0) - (o.get(e)?.dmProbability ?? 0);
    }
    getUserAffinity(e) {
        return o.get(e);
    }
    getState() {
        return d;
    }
    isHighlyAffinedVCUser(e) {
        return (o.get(e)?.vcProbability ?? 0) > 0.5;
    }
}
let f = new _(i.h, {
    LOAD_USER_AFFINITIES_V2: function () {
        l = !0;
    },
    LOAD_USER_AFFINITIES_V2_SUCCESS: function (e) {
        let { affineUsers: t } = e;
        (d.lastFetched = Date.now()), (l = !1), (d.userAffinities = t), c();
    },
    LOAD_USER_AFFINITIES_V2_FAILURE: function () {
        l = !1;
    },
    LOGOUT: function () {
        (d = { ...u }), (o = new Map()), (l = !1);
    },
});
