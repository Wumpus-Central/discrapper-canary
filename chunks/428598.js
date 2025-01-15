o(47120);
var r,
    n = o(442837),
    i = o(570140),
    a = o(699516),
    s = o(496232);
function l(e, t, o) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: o,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = o),
        e
    );
}
let d = new Map(),
    c = !1,
    u = Object.freeze({
        userAffinities: [],
        lastFetched: 0
    }),
    f = { ...u };
function _() {
    d = new Map(f.userAffinities.filter((e) => !a.Z.isBlockedOrIgnored(e.otherUserId)).map((e) => [e.otherUserId, e]));
}
class p extends (r = n.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(a.Z), null != e && ((f.userAffinities = e.userAffinities), (f.lastFetched = e.lastFetched), _()), this.syncWith([a.Z], _);
    }
    shouldFetch() {
        if (!c) return Date.now() - f.lastFetched > s.K;
    }
    isFetching() {
        return c;
    }
    getUserAffinities() {
        return f.userAffinities;
    }
    getUserAffinitiesMap() {
        return d;
    }
    compare(e, t) {
        var o, r, n, i;
        return (null !== (n = null === (o = d.get(t)) || void 0 === o ? void 0 : o.communicationProbability) && void 0 !== n ? n : 0) - (null !== (i = null === (r = d.get(e)) || void 0 === r ? void 0 : r.communicationProbability) && void 0 !== i ? i : 0);
    }
    getUserAffinity(e) {
        return d.get(e);
    }
    getState() {
        return f;
    }
}
l(p, 'displayName', 'UserAffinitiesStoreV2'),
    l(p, 'persistKey', 'UserAffinitiesStoreV2'),
    (t.Z = new p(i.Z, {
        LOAD_USER_AFFINITIES_V2: function () {
            c = !0;
        },
        LOAD_USER_AFFINITIES_V2_SUCCESS: function (e) {
            let { affineUsers: t } = e;
            (f.lastFetched = Date.now()), (c = !1), (f.userAffinities = t), _();
        },
        LOAD_USER_AFFINITIES_V2_FAILURE: function () {
            c = !1;
        },
        LOGOUT: function () {
            (f = { ...u }), (d = new Map()), (c = !1);
        }
    }));
