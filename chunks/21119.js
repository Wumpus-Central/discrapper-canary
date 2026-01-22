n.d(t, {
    A: () => O,
}),
    n(896048);
var r,
    i = n(311907),
    a = n(73153),
    s = n(994500),
    o = n(755915);

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

function h() {
    d = new Map(_.userAffinities.filter((e) => !s.A.isBlockedOrIgnored(e.otherUserId)).map((e) => [e.otherUserId, e]));
}

function m() {
    f = !0;
}

function g(e) {
    let { affineUsers: t, userFlags: n } = e;
    (_.lastFetched = Date.now()), (f = !1), (_.userAffinities = t), (_.userFlags = n), h();
}

function E() {
    f = !1;
}

function b() {
    (_ = c({}, p)), (d = new Map()), (f = !1);
}
class y extends (r = i.Ay.PersistedStore) {
    initialize(e) {
        if ((this.waitFor(s.A), null != e)) {
            var t;
            (_.userAffinities = e.userAffinities),
                (_.userFlags = null != (t = e.userFlags) ? t : {}),
                (_.lastFetched = e.lastFetched),
                h();
        }
        this.syncWith([s.A], h);
    }
    shouldFetch() {
        if (!f) return Date.now() - _.lastFetched > o.e;
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
            (null != (n = null == (i = d.get(t)) ? void 0 : i.communicationProbability) ? n : 0) -
            (null != (r = null == (a = d.get(e)) ? void 0 : a.communicationProbability) ? r : 0)
        );
    }
    compareByDmProbability(e, t) {
        var n, r, i, a;
        return (
            (null != (n = null == (i = d.get(t)) ? void 0 : i.dmProbability) ? n : 0) -
            (null != (r = null == (a = d.get(e)) ? void 0 : a.dmProbability) ? r : 0)
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
        return (null != (t = null == (n = d.get(e)) ? void 0 : n.vcProbability) ? t : 0) > u;
    }
}
l(y, "displayName", "UserAffinitiesV2Store"), l(y, "persistKey", "UserAffinitiesStoreV2");
let O = new y(a.h, {
    LOAD_USER_AFFINITIES_V2: m,
    LOAD_USER_AFFINITIES_V2_SUCCESS: g,
    LOAD_USER_AFFINITIES_V2_FAILURE: E,
    LOGOUT: b,
});
