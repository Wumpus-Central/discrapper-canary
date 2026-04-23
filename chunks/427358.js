"use strict";
n.d(t, { A: () => E });
var i = n(17928),
    r = n(228366),
    s = n(994500);
let a = 8 * n(927813).A.Millis.HOUR,
    o = new Map(),
    l = !1,
    d = Object.freeze({ userAffinities: [], lastFetched: 0 }),
    _ = { ...d };
function u() {
    o = new Map(_.userAffinities.filter((e) => !s.A.isBlockedOrIgnored(e.otherUserId)).map((e) => [e.otherUserId, e]));
}
class c extends i.Ay.PersistedStore {
    static displayName = "UserAffinitiesV2Store";
    static persistKey = "UserAffinitiesStoreV2";
    initialize(e) {
        this.waitFor(s.A),
            null != e && ((_.userAffinities = e.userAffinities), (_.lastFetched = e.lastFetched), u()),
            this.syncWith([s.A], u);
    }
    shouldFetch() {
        if (!l) return Date.now() - _.lastFetched > a;
    }
    isFetching() {
        return l;
    }
    getUserAffinities() {
        return _.userAffinities;
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
        return _;
    }
    isHighlyAffinedVCUser(e) {
        return (o.get(e)?.vcProbability ?? 0) > 0.5;
    }
}
let E = new c(r.h, {
    LOAD_USER_AFFINITIES_V2: function () {
        l = !0;
    },
    LOAD_USER_AFFINITIES_V2_SUCCESS: function (e) {
        let { affineUsers: t } = e;
        (_.lastFetched = Date.now()), (l = !1), (_.userAffinities = t), u();
    },
    LOAD_USER_AFFINITIES_V2_FAILURE: function () {
        l = !1;
    },
    LOGOUT: function () {
        (_ = { ...d }), (o = new Map()), (l = !1);
    },
});
