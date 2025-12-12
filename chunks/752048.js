n.d(t, { Z: () => O }), n(388685);
var r,
    i = n(442837),
    a = n(570140),
    o = n(699516),
    s = n(496232);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
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
    p = Object.freeze({
        userAffinities: [],
        userFlags: {},
        lastFetched: 0,
    }),
    _ = c({}, p);
function m() {
    d = new Map(_.userAffinities.filter((e) => !o.Z.isBlockedOrIgnored(e.otherUserId)).map((e) => [e.otherUserId, e]));
}
function h() {
    f = !0;
}
function g(e) {
    let { affineUsers: t, userFlags: n } = e;
    (_.lastFetched = Date.now()), (f = !1), (_.userAffinities = t), (_.userFlags = n), m();
}
function E() {
    f = !1;
}
function b() {
    (_ = c({}, p)), (d = new Map()), (f = !1);
}
class y extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        if ((this.waitFor(o.Z), null != e)) {
            var t;
            (_.userAffinities = e.userAffinities),
                (_.userFlags = null != (t = e.userFlags) ? t : {}),
                (_.lastFetched = e.lastFetched),
                m();
        }
        this.syncWith([o.Z], m);
    }
    shouldFetch() {
        if (!f) return Date.now() - _.lastFetched > s.K;
    }
    isFetching() {
        return f;
    }
    getUserAffinities() {
        return _.userAffinities;
    }
    getUserAffinitiesMap() {
        return d;
    }
    getUserFlags() {
        return _.userFlags;
    }
    compare(e, t) {
        var n, r, i, a;
        return (
            (null != (i = null == (n = d.get(t)) ? void 0 : n.communicationProbability) ? i : 0) -
            (null != (a = null == (r = d.get(e)) ? void 0 : r.communicationProbability) ? a : 0)
        );
    }
    compareByDmProbability(e, t) {
        var n, r, i, a;
        return (
            (null != (i = null == (n = d.get(t)) ? void 0 : n.dmProbability) ? i : 0) -
            (null != (a = null == (r = d.get(e)) ? void 0 : r.dmProbability) ? a : 0)
        );
    }
    getUserAffinity(e) {
        return d.get(e);
    }
    getState() {
        return _;
    }
    isHighlyAffinedVCUser(e) {
        var t, n;
        return (null != (n = null == (t = d.get(e)) ? void 0 : t.vcProbability) ? n : 0) > u;
    }
}
l(y, "displayName", "UserAffinitiesV2Store"), l(y, "persistKey", "UserAffinitiesStoreV2");
let O = new y(a.Z, {
    LOAD_USER_AFFINITIES_V2: h,
    LOAD_USER_AFFINITIES_V2_SUCCESS: g,
    LOAD_USER_AFFINITIES_V2_FAILURE: E,
    LOGOUT: b,
});
