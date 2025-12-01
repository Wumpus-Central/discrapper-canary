let r;
n.d(t, { Z: () => O });
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
let f = {},
    p = {};
function _(e) {
    let { guildId: t } = e;
    (p[t] = {
        storefront: null,
        state: "loading",
        fetchedAt: null,
    }),
        (p = c({}, p));
}
function m(e) {
    let { guildId: t, storefront: n } = e;
    (p[t] = {
        storefront: n,
        state: "fetched",
        fetchedAt: Date.now(),
    }),
        (p = c({}, p));
}
function h(e) {
    let { guildId: t, storefront: n } = e,
        r = p[t];
    (null == r ? void 0 : r.storefront) != null
        ? (p[t] = d(c({}, r), { storefront: d(c({}, r.storefront), { assets: c({}, r.storefront.assets, n.assets) }) }))
        : (p[t] = {
              storefront: n,
              state: "partially-fetched",
              fetchedAt: null,
          }),
        (p = c({}, p));
}
function g(e) {
    let { guildId: t } = e;
    (p[t] = {
        storefront: null,
        state: "error",
        fetchedAt: null,
    }),
        (p = c({}, p));
}
function E(e) {
    let { guildId: t, pageIndex: n, skuId: r } = e;
    (f[t] = {
        activePage: n,
        activeSkuId: r,
    }),
        (f = c({}, f));
}
function b() {
    if (r === s.default.locale) return !1;
    (r = s.default.locale), (f = {}), (p = {});
}
class y extends (i = a.ZP.Store) {
    initialize() {
        this.waitFor(s.default), this.syncWith([s.default], b), (r = s.default.locale);
    }
    getStorefrontData(e) {
        return p[e];
    }
    getStorefrontState(e) {
        return f[e];
    }
}
l(y, "displayName", "SocialLayerStorefrontStore");
let O = new y(o.Z, {
    SOCIAL_LAYER_STOREFRONT_LOAD: _,
    SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS: m,
    SOCIAL_LAYER_STOREFRONT_PARTIAL_LOAD_SUCCESS: h,
    SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE: g,
    SET_SOCIAL_LAYER_STOREFRONT_STATE: E,
});
