let r;
n.d(t, { Z: () => P }), n(415506), n(388685), n(642613);
var i,
    a = n(442837),
    o = n(570140),
    s = n(706454);
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
function u(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function f(e) {
    if (0 === e.length) throw Error("No user IDs provided");
    return e.length > 1 ? [...e].sort().join(",") : e[0];
}
let p = {},
    _ = {},
    m = {},
    h = {};
function g() {
    m = {};
}
function E(e) {
    var t;
    let { applicationId: n, userIds: r } = e,
        i = f(r);
    m = d(c({}, m), { [n]: d(c({}, null != (t = m[n]) ? t : {}), { [i]: { state: "loading" } }) });
}
function b(e) {
    var t;
    let { skus: n, skusToRecommendationReasons: r, userIds: i, application: a, numItemsRequested: o } = e,
        s = f(i);
    m = d(c({}, m), {
        [a.id]: d(c({}, null != (t = m[a.id]) ? t : {}), {
            [s]: {
                state: "success",
                data: {
                    skus: n,
                    skusToRecommendationReasons: r,
                    numItemsRequested: o,
                },
            },
        }),
    });
}
function y(e) {
    var t;
    let { applicationId: n, userIds: r } = e,
        i = f(r);
    if (null != m[n] && null != m[n][i] && "success" === m[n][i].state) return !1;
    m = d(c({}, m), { [n]: d(c({}, null != (t = m[n]) ? t : {}), { [i]: { state: "error" } }) });
}
function O(e) {
    let { guildId: t } = e,
        n = _[t];
    (_[t] = d(c({}, n), { state: "loading" })), (_ = c({}, _));
}
function v(e) {
    let { guildId: t, storefront: n } = e;
    (_[t] = {
        storefront: n,
        state: "fetched",
        fetchedAt: Date.now(),
    }),
        (_ = c({}, _));
}
function S(e) {
    let { guildId: t, storefront: n } = e,
        r = _[t];
    (null == r ? void 0 : r.storefront) != null
        ? (_[t] = d(c({}, r), { storefront: d(c({}, r.storefront), { assets: c({}, r.storefront.assets, n.assets) }) }))
        : (_[t] = {
              storefront: n,
              state: "partially-fetched",
              fetchedAt: null,
          }),
        (_ = c({}, _));
}
function I(e) {
    let { guildId: t, eager: n } = e;
    if (n) {
        let e = _[t];
        (null == e ? void 0 : e.state) === "loading" && (null == e ? void 0 : e.storefront) != null
            ? (_[t] = d(c({}, e), { state: "fetched" }))
            : delete _[t];
    } else
        _[t] = {
            storefront: null,
            state: "error",
            fetchedAt: Date.now(),
        };
    _ = c({}, _);
}
function T(e) {
    let { guildId: t, pageIndex: n, skuId: r } = e;
    (p[t] = {
        activePage: n,
        activeSkuId: r,
    }),
        (p = c({}, p));
}
function C(e) {
    let { guildId: t, announcement: n } = e;
    (h[t] = n), (h = c({}, h));
}
function A() {
    if (r === s.default.locale) return !1;
    (r = s.default.locale), (p = {}), (_ = {}), (m = {});
}
class N extends (i = a.ZP.Store) {
    initialize() {
        this.waitFor(s.default), this.syncWith([s.default], A), (r = s.default.locale);
    }
    getStorefrontData(e) {
        return _[e];
    }
    getStorefrontState(e) {
        return p[e];
    }
    recommendationsByApplicationsAndUsers(e, t) {
        var n;
        if (null != t && 0 !== t.length) return null == (n = m[e]) ? void 0 : n[f(t)];
    }
    getAnnouncement(e) {
        return h[e];
    }
}
l(N, "displayName", "SocialLayerStorefrontStore");
let P = new N(o.Z, {
    LOGOUT: g,
    SOCIAL_LAYER_STOREFRONT_LOAD: O,
    SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS: v,
    SOCIAL_LAYER_STOREFRONT_PARTIAL_LOAD_SUCCESS: S,
    SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE: I,
    SET_SOCIAL_LAYER_STOREFRONT_STATE: T,
    SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_FETCH_SUCCESS: b,
    SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_FETCH_FAILURE: y,
    SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_FETCH_START: E,
    SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_SUCCESS: C,
});
