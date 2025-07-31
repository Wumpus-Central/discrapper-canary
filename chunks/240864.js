(n.d(t, {
    M: () => p,
    Z: () => O
}),
    n(539854),
    n(388685));
var r,
    i,
    l,
    a,
    o = n(442837),
    s = n(759174),
    c = n(570140),
    u = n(70956),
    d = n(709054),
    p = (((i = {})[(i.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (i[(i.FETCHING = 1)] = 'FETCHING'), (i[(i.FETCHED = 2)] = 'FETCHED'), i);
let m = {},
    f = {},
    g = {},
    _ = 10 * u.Z.Millis.MINUTE;
function h(e) {
    return 'guild:'.concat(e);
}
function b(e) {
    return 'guild:'.concat(e, ':published');
}
let E = new s.h(
        (e) => {
            let t = [h(e.guild_id)];
            return (e.published && t.push(b(e.guild_id)), t);
        },
        (e) =>
            (function (e) {
                let t = d.default.extractTimestamp(e.id);
                return e.published ? -t : -t + 1000000000000;
            })(e)
    ),
    C = [];
class v extends (r = o.ZP.Store) {
    getGuildProductsForGuildFetchState(e) {
        var t;
        return null != (t = m[e]) ? t : 0;
    }
    getGuildProduct(e) {
        return E.get(e);
    }
    getGuildProductsForGuild(e, t) {
        let { publishedOnly: n } = t;
        return null == e ? C : E.values(n ? b(e) : h(e));
    }
    getGuildProductFetchState(e) {
        var t;
        return null != (t = f[e]) ? t : 0;
    }
    isGuildProductsCacheExpired(e) {
        var t;
        return Date.now() - (null != (t = g[e]) ? t : 0) > _;
    }
}
((a = 'GuildProductsStore'),
    (l = 'displayName') in v
        ? Object.defineProperty(v, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (v[l] = a));
let O = new v(c.Z, {
    CONNECTION_OPEN: function () {
        (E.clear(), (m = {}), (f = {}), (g = {}));
    },
    GUILD_PRODUCTS_FETCH: function (e) {
        let { guildId: t } = e;
        ((m[t] = 1),
            [...E.values(h(t))].forEach((e) => {
                E.delete(e.id);
            }));
    },
    GUILD_PRODUCTS_FETCH_SUCCESS: function (e) {
        let { guildId: t, products: n } = e;
        ((m[t] = 2),
            (g[t] = Date.now()),
            n.forEach((e) => {
                (E.set(e.id, e), (f[e.id] = 2));
            }));
    },
    GUILD_PRODUCTS_FETCH_FAILURE: function (e) {
        let { guildId: t } = e;
        m[t] = 2;
    },
    GUILD_PRODUCT_CREATE: function (e) {
        let { product: t } = e;
        E.set(t.id, t);
    },
    GUILD_PRODUCT_UPDATE: function (e) {
        let { product: t } = e;
        E.set(t.id, t);
    },
    GUILD_PRODUCT_DELETE: function (e) {
        let { productId: t } = e;
        E.delete(t);
    },
    GUILD_PRODUCT_FETCH: function (e) {
        let { productId: t } = e;
        f[t] = 1;
    },
    GUILD_PRODUCT_FETCH_SUCCESS: function (e) {
        let { product: t } = e;
        ((f[t.id] = 2), E.set(t.id, t));
    },
    GUILD_PRODUCT_FETCH_FAILURE: function (e) {
        let { productId: t, error: n } = e;
        ((f[t] = 2), 404 === n.status && E.delete(t));
    }
});
