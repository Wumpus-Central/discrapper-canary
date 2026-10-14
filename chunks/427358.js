n.d(t, { A: () => h });
var i = n(17928),
    r = n(73153),
    a = n(994500);
let s = 8 * n(927813).A.Millis.HOUR,
    l = new Map(),
    o = !1,
    d = null,
    c = null,
    u = Object.freeze({ userAffinities: [], lastFetched: 0 }),
    _ = { ...u };
function E() {
    ((l = new Map(
        _.userAffinities.filter((e) => !a.A.isBlockedOrIgnored(e.otherUserId)).map((e) => [e.otherUserId, e]),
    )),
        null != d && ((c = l.get(d.otherUserId) ?? null), l.set(d.otherUserId, d)));
}
class A extends i.Ay.PersistedStore {
    static displayName = "UserAffinitiesV2Store";
    static persistKey = "UserAffinitiesStoreV2";
    initialize(e) {
        (this.waitFor(a.A),
            e?.userAffinities != null && ((_.userAffinities = e.userAffinities), (_.lastFetched = e.lastFetched), E()),
            this.syncWith([a.A], E));
    }
    shouldFetch() {
        if (!o) return Date.now() - _.lastFetched > s;
    }
    isFetching() {
        return o;
    }
    getUserAffinities() {
        return _.userAffinities;
    }
    getUserAffinitiesMap() {
        return l;
    }
    getDevToolsOverride() {
        return d;
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
        return _;
    }
    isHighlyAffinedVCUser(e) {
        return (l.get(e)?.vcProbability ?? 0) > 0.5;
    }
}
let h = new A(r.h, {
    LOAD_USER_AFFINITIES_V2: function () {
        o = !0;
    },
    LOAD_USER_AFFINITIES_V2_SUCCESS: function (e) {
        let { affineUsers: t } = e;
        ((_.lastFetched = Date.now()), (o = !1), (_.userAffinities = t), E());
    },
    LOAD_USER_AFFINITIES_V2_FAILURE: function () {
        o = !1;
    },
    DEV_TOOLS_SET_USER_AFFINITY_OVERRIDE: function (e) {
        let { override: t } = e;
        if (null == d && null == t) return !1;
        if (null != d && null != t && d.otherUserId === t.otherUserId) {
            ((d = t), l.set(t.otherUserId, t));
            return;
        }
        (null != d && (null != c ? l.set(d.otherUserId, c) : l.delete(d.otherUserId), (c = null), (d = null)),
            null != t && ((c = l.get(t.otherUserId) ?? null), (d = t), l.set(t.otherUserId, t)));
    },
    LOGOUT: function () {
        ((_ = { ...u }), (l = new Map()), (o = !1), (d = null), (c = null));
    },
});
