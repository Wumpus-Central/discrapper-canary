n.d(t, { Z: () => u });
var a,
    r = n(442837),
    l = n(570140);
function i(e, t, n) {
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
function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                i(e, t, n[t]);
            });
    }
    return e;
}
let d = {},
    c = {};
class s extends (a = r.ZP.Store) {
    getStorefrontData(e) {
        return c[e];
    }
    getStorefrontState(e) {
        return d[e];
    }
}
i(s, "displayName", "SocialLayerStorefrontStore");
let u = new s(l.Z, {
    SOCIAL_LAYER_STOREFRONT_LOAD: function (e) {
        let { guildId: t } = e;
        (c[t] = {
            storefront: null,
            loading: !0,
            error: !1,
        }),
            (c = o({}, c));
    },
    SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS: function (e) {
        let { guildId: t, storefront: n } = e;
        (c[t] = {
            storefront: n,
            loading: !1,
            error: !1,
        }),
            (c = o({}, c));
    },
    SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE: function (e) {
        let { guildId: t } = e;
        (c[t] = {
            storefront: null,
            loading: !1,
            error: !0,
        }),
            (c = o({}, c));
    },
    SOCIAL_LAYER_STOREFRONT_SELECT_PAGE: function (e) {
        var t;
        let { guildId: n, pageIndex: a } = e;
        d[n] = {
            activePage: a,
            activeSkuId: null == (t = d[n]) ? void 0 : t.activeSkuId,
        };
    },
    SOCIAL_LAYER_STOREFRONT_SELECT_SKU: function (e) {
        var t, n;
        let { guildId: a, skuId: r } = e;
        d[a] = {
            activePage: null != (n = null == (t = d[a]) ? void 0 : t.activePage) ? n : 0,
            activeSkuId: r,
        };
    },
});
