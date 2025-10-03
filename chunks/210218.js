t.d(n, { Z: () => u });
var a,
    l = t(442837),
    r = t(570140);
function i(e, n, t) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[n] = t),
        e
    );
}
function d(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            a = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            a.forEach(function (n) {
                i(e, n, t[n]);
            });
    }
    return e;
}
let o = {},
    c = {};
class s extends (a = l.ZP.Store) {
    getStorefrontData(e) {
        return c[e];
    }
    getStorefrontState(e) {
        return o[e];
    }
}
i(s, "displayName", "SocialLayerStorefrontStore");
let u = new s(r.Z, {
    SOCIAL_LAYER_STOREFRONT_LOAD: function (e) {
        let { guildId: n } = e;
        (c[n] = {
            storefront: null,
            loading: !0,
            error: !1,
        }),
            (c = d({}, c));
    },
    SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS: function (e) {
        let { guildId: n, storefront: t } = e;
        (c[n] = {
            storefront: t,
            loading: !1,
            error: !1,
        }),
            (c = d({}, c));
    },
    SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE: function (e) {
        let { guildId: n } = e;
        (c[n] = {
            storefront: null,
            loading: !1,
            error: !0,
        }),
            (c = d({}, c));
    },
    SOCIAL_LAYER_STOREFRONT_SELECT_PAGE: function (e) {
        var n;
        let { guildId: t, pageIndex: a } = e;
        o[t] = {
            activePage: a,
            activeSkuId: null == (n = o[t]) ? void 0 : n.activeSkuId,
        };
    },
    SOCIAL_LAYER_STOREFRONT_SELECT_SKU: function (e) {
        var n, t;
        let { guildId: a, skuId: l } = e;
        o[a] = {
            activePage: null != (t = null == (n = o[a]) ? void 0 : n.activePage) ? t : 0,
            activeSkuId: l,
        };
    },
});
