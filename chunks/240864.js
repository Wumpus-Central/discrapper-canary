n.d(t, {
    M: () => d,
    Z: () => v,
}),
    n(539854),
    n(388685);
var r,
    i,
    l,
    a = n(442837),
    o = n(759174),
    s = n(570140),
    c = n(70956),
    u = n(709054),
    d =
        (((i = {})[(i.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (i[(i.FETCHING = 1)] = "FETCHING"),
        (i[(i.FETCHED = 2)] = "FETCHED"),
        i);
let p = {},
    m = {},
    f = {},
    g = 10 * c.Z.Millis.MINUTE;
function _(e) {
    return "guild:".concat(e);
}
function h(e) {
    return "guild:".concat(e, ":published");
}
let b = new o.h(
        (e) => {
            let t = [_(e.guild_id)];
            return e.published && t.push(h(e.guild_id)), t;
        },
        (e) =>
            (function (e) {
                let t = u.default.extractTimestamp(e.id);
                return e.published ? -t : -t + 1000000000000;
            })(e),
    ),
    E = [];
class C extends (r = a.ZP.Store) {
    getGuildProductsForGuildFetchState(e) {
        var t;
        return null != (t = p[e]) ? t : 0;
    }
    getGuildProduct(e) {
        return b.get(e);
    }
    getGuildProductsForGuild(e, t) {
        let { publishedOnly: n } = t;
        return null == e ? E : b.values(n ? h(e) : _(e));
    }
    getGuildProductFetchState(e) {
        var t;
        return null != (t = m[e]) ? t : 0;
    }
    isGuildProductsCacheExpired(e) {
        var t;
        return Date.now() - (null != (t = f[e]) ? t : 0) > g;
    }
}
(l = "displayName") in C
    ? Object.defineProperty(C, l, {
          value: "GuildProductsStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (C[l] = "GuildProductsStore");
let v = new C(s.Z, {
    CONNECTION_OPEN: function () {
        b.clear(), (p = {}), (m = {}), (f = {});
    },
    GUILD_PRODUCTS_FETCH: function (e) {
        let { guildId: t } = e;
        (p[t] = 1),
            [...b.values(_(t))].forEach((e) => {
                b.delete(e.id);
            });
    },
    GUILD_PRODUCTS_FETCH_SUCCESS: function (e) {
        let { guildId: t, products: n } = e;
        (p[t] = 2),
            (f[t] = Date.now()),
            n.forEach((e) => {
                b.set(e.id, e), (m[e.id] = 2);
            });
    },
    GUILD_PRODUCTS_FETCH_FAILURE: function (e) {
        let { guildId: t } = e;
        p[t] = 2;
    },
    GUILD_PRODUCT_CREATE: function (e) {
        let { product: t } = e;
        b.set(t.id, t);
    },
    GUILD_PRODUCT_UPDATE: function (e) {
        let { product: t } = e;
        b.set(t.id, t);
    },
    GUILD_PRODUCT_DELETE: function (e) {
        let { productId: t } = e;
        b.delete(t);
    },
    GUILD_PRODUCT_FETCH: function (e) {
        let { productId: t } = e;
        m[t] = 1;
    },
    GUILD_PRODUCT_FETCH_SUCCESS: function (e) {
        let { product: t } = e;
        (m[t.id] = 2), b.set(t.id, t);
    },
    GUILD_PRODUCT_FETCH_FAILURE: function (e) {
        let { productId: t, error: n } = e;
        (m[t] = 2), 404 === n.status && b.delete(t);
    },
});
