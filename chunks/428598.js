n(47120);
var i,
    o = n(442837),
    a = n(570140),
    r = n(699516),
    s = n(496232);
function c(e, t, n) {
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
let d = new Map(),
    l = !1,
    u = Object.freeze({
        userAffinities: [],
        lastFetched: 0
    }),
    _ = { ...u };
function f() {
    d = new Map(_.userAffinities.filter((e) => !r.Z.isBlockedOrIgnored(e.otherUserId)).map((e) => [e.otherUserId, e]));
}
class h extends (i = o.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(r.Z), null != e && ((_.userAffinities = e.userAffinities), (_.lastFetched = e.lastFetched), f()), this.syncWith([r.Z], f);
    }
    shouldFetch() {
        if (!l) return Date.now() - _.lastFetched > s.K;
    }
    isFetching() {
        return l;
    }
    getUserAffinities() {
        return _.userAffinities;
    }
    getUserAffinitiesMap() {
        return d;
    }
    compare(e, t) {
        var n, i, o, a;
        return (null !== (o = null === (n = d.get(t)) || void 0 === n ? void 0 : n.communicationProbability) && void 0 !== o ? o : 0) - (null !== (a = null === (i = d.get(e)) || void 0 === i ? void 0 : i.communicationProbability) && void 0 !== a ? a : 0);
    }
    getUserAffinity(e) {
        return d.get(e);
    }
    getState() {
        return _;
    }
}
c(h, 'displayName', 'UserAffinitiesStoreV2'),
    c(h, 'persistKey', 'UserAffinitiesStoreV2'),
    (t.Z = new h(a.Z, {
        LOAD_USER_AFFINITIES_V2: function () {
            l = !0;
        },
        LOAD_USER_AFFINITIES_V2_SUCCESS: function (e) {
            let { affineUsers: t } = e;
            (_.lastFetched = Date.now()), (l = !1), (_.userAffinities = t), f();
        },
        LOAD_USER_AFFINITIES_V2_FAILURE: function () {
            l = !1;
        },
        LOGOUT: function () {
            (_ = { ...u }), (d = new Map()), (l = !1);
        }
    }));
