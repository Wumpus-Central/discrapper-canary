n.d(t, { Z: () => O }), n(388685);
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
let u = 0.5,
    d = new Map(),
    f = !1,
    _ = Object.freeze({
        userAffinities: [],
        lastFetched: 0
    }),
    p = c({}, _);
function h() {
    d = new Map(p.userAffinities.filter((e) => !a.Z.isBlockedOrIgnored(e.otherUserId)).map((e) => [e.otherUserId, e]));
}
function m() {
    f = !0;
}
function g(e) {
    let { affineUsers: t } = e;
    (p.lastFetched = Date.now()), (f = !1), (p.userAffinities = t), h();
}
function E() {
    f = !1;
}
function b() {
    (p = c({}, _)), (d = new Map()), (f = !1);
}
class y extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(a.Z), null != e && ((p.userAffinities = e.userAffinities), (p.lastFetched = e.lastFetched), h()), this.syncWith([a.Z], h);
    }
    shouldFetch() {
        if (!f) return Date.now() - p.lastFetched > s.K;
    }
    isFetching() {
        return f;
    }
    getUserAffinities() {
        return p.userAffinities;
    }
    getUserAffinitiesMap() {
        return d;
    }
    compare(e, t) {
        var n, r, i, o;
        return (null != (i = null == (n = d.get(t)) ? void 0 : n.communicationProbability) ? i : 0) - (null != (o = null == (r = d.get(e)) ? void 0 : r.communicationProbability) ? o : 0);
    }
    getUserAffinity(e) {
        return d.get(e);
    }
    getState() {
        return p;
    }
    isHighlyAffinedVCUser(e) {
        var t, n;
        return (null != (n = null == (t = d.get(e)) ? void 0 : t.vcProbability) ? n : 0) > u;
    }
}
l(y, 'displayName', 'UserAffinitiesV2Store'), l(y, 'persistKey', 'UserAffinitiesStoreV2');
let O = new y(o.Z, {
    LOAD_USER_AFFINITIES_V2: m,
    LOAD_USER_AFFINITIES_V2_SUCCESS: g,
    LOAD_USER_AFFINITIES_V2_FAILURE: E,
    LOGOUT: b
});
