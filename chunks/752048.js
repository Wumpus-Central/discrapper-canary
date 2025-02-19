n.d(t, { Z: () => b }), n(47120);
var r,
    i = n(442837),
    o = n(570140),
    a = n(699516),
    s = n(496232);
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
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}
let u = new Map(),
    d = !1,
    f = Object.freeze({
        userAffinities: [],
        lastFetched: 0
    }),
    p = c({}, f);
function _() {
    u = new Map(p.userAffinities.filter((e) => !a.Z.isBlockedOrIgnored(e.otherUserId)).map((e) => [e.otherUserId, e]));
}
function h() {
    d = !0;
}
function m(e) {
    let { affineUsers: t } = e;
    (p.lastFetched = Date.now()), (d = !1), (p.userAffinities = t), _();
}
function g() {
    d = !1;
}
function E() {
    (p = c({}, f)), (u = new Map()), (d = !1);
}
class v extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(a.Z), null != e && ((p.userAffinities = e.userAffinities), (p.lastFetched = e.lastFetched), _()), this.syncWith([a.Z], _);
    }
    shouldFetch() {
        if (!d) return Date.now() - p.lastFetched > s.K;
    }
    isFetching() {
        return d;
    }
    getUserAffinities() {
        return p.userAffinities;
    }
    getUserAffinitiesMap() {
        return u;
    }
    compare(e, t) {
        var n, r, i, o;
        return (null !== (i = null === (n = u.get(t)) || void 0 === n ? void 0 : n.communicationProbability) && void 0 !== i ? i : 0) - (null !== (o = null === (r = u.get(e)) || void 0 === r ? void 0 : r.communicationProbability) && void 0 !== o ? o : 0);
    }
    getUserAffinity(e) {
        return u.get(e);
    }
    getState() {
        return p;
    }
}
l(v, 'displayName', 'UserAffinitiesV2Store'), l(v, 'persistKey', 'UserAffinitiesStoreV2');
let b = new v(o.Z, {
    LOAD_USER_AFFINITIES_V2: h,
    LOAD_USER_AFFINITIES_V2_SUCCESS: m,
    LOAD_USER_AFFINITIES_V2_FAILURE: g,
    LOGOUT: E
});
