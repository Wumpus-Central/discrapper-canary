n.d(t, { Z: () => d });
var r,
    i = n(442837),
    l = n(570140);
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
function a(e) {
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
let s = {},
    c = {};
class u extends (r = i.ZP.Store) {
    getStorefrontData(e) {
        return c[e];
    }
    getStorefrontState(e) {
        return s[e];
    }
}
o(u, "displayName", "SocialLayerStorefrontStore");
let d = new u(l.Z, {
    SOCIAL_LAYER_STOREFRONT_LOAD: function (e) {
        let { guildId: t } = e;
        (c[t] = {
            storefront: null,
            loading: !0,
            error: !1,
        }),
            (c = a({}, c));
    },
    SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS: function (e) {
        let { guildId: t, storefront: n } = e;
        (c[t] = {
            storefront: n,
            loading: !1,
            error: !1,
        }),
            (c = a({}, c));
    },
    SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE: function (e) {
        let { guildId: t } = e;
        (c[t] = {
            storefront: null,
            loading: !1,
            error: !0,
        }),
            (c = a({}, c));
    },
    SET_SOCIAL_LAYER_STOREFRONT_STATE: function (e) {
        let { guildId: t, pageIndex: n, skuId: r } = e;
        (s[t] = {
            activePage: n,
            activeSkuId: r,
        }),
            (s = a({}, s));
    },
});
