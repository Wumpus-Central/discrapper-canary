n.d(t, { Z: () => E });
var r,
    i = n(442837),
    a = n(570140);
function o(e, t, n) {
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
function s(e) {
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
                o(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t) {
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
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let u = {},
    d = {};
function f(e) {
    let { guildId: t } = e;
    (d[t] = {
        storefront: null,
        loading: !0,
        error: !1,
        fetchedAt: null,
    }),
        (d = s({}, d));
}
function _(e) {
    let { guildId: t, storefront: n } = e;
    (d[t] = {
        storefront: n,
        loading: !1,
        error: !1,
        fetchedAt: Date.now(),
    }),
        (d = s({}, d));
}
function p(e) {
    let { guildId: t, storefront: n } = e,
        r = d[t];
    (null == r ? void 0 : r.storefront) != null
        ? (d[t] = c(s({}, r), { storefront: c(s({}, r.storefront), { assets: s({}, r.storefront.assets, n.assets) }) }))
        : (d[t] = {
              storefront: n,
              loading: !1,
              error: !1,
              fetchedAt: null,
          }),
        (d = s({}, d));
}
function h(e) {
    let { guildId: t } = e;
    (d[t] = {
        storefront: null,
        loading: !1,
        error: !0,
        fetchedAt: null,
    }),
        (d = s({}, d));
}
function m(e) {
    let { guildId: t, pageIndex: n, skuId: r } = e;
    (u[t] = {
        activePage: n,
        activeSkuId: r,
    }),
        (u = s({}, u));
}
class g extends (r = i.ZP.Store) {
    getStorefrontData(e) {
        return d[e];
    }
    getStorefrontState(e) {
        return u[e];
    }
}
o(g, "displayName", "SocialLayerStorefrontStore");
let E = new g(a.Z, {
    SOCIAL_LAYER_STOREFRONT_LOAD: f,
    SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS: _,
    SOCIAL_LAYER_STOREFRONT_PARTIAL_LOAD_SUCCESS: p,
    SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE: h,
    SET_SOCIAL_LAYER_STOREFRONT_STATE: m,
});
