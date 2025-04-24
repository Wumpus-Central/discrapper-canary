n.d(t, {
    M: () => p,
    Z: () => h
}),
    n(539854),
    n(388685);
var r,
    i,
    l,
    o,
    a = n(442837),
    u = n(759174),
    c = n(570140),
    s = n(70956),
    d = n(709054),
    p = (((i = {})[(i.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (i[(i.FETCHING = 1)] = 'FETCHING'), (i[(i.FETCHED = 2)] = 'FETCHED'), i);
let f = {},
    E = {},
    O = {},
    S = 10 * s.Z.Millis.MINUTE;
function _(e) {
    return 'guild:'.concat(e);
}
function T(e) {
    return 'guild:'.concat(e, ':published');
}
let g = new u.h(
        (e) => {
            let t = [_(e.guild_id)];
            return e.published && t.push(T(e.guild_id)), t;
        },
        (e) =>
            (function (e) {
                let t = d.default.extractTimestamp(e.id);
                return e.published ? -t : -t + 1000000000000;
            })(e)
    ),
    I = [];
class b extends (r = a.ZP.Store) {
    getGuildProductsForGuildFetchState(e) {
        var t;
        return null != (t = f[e]) ? t : 0;
    }
    getGuildProduct(e) {
        return g.get(e);
    }
    getGuildProductsForGuild(e, t) {
        let { publishedOnly: n } = t;
        return null == e ? I : g.values(n ? T(e) : _(e));
    }
    getGuildProductFetchState(e) {
        var t;
        return null != (t = E[e]) ? t : 0;
    }
    isGuildProductsCacheExpired(e) {
        var t;
        return Date.now() - (null != (t = O[e]) ? t : 0) > S;
    }
}
(o = 'GuildProductsStore'),
    (l = 'displayName') in b
        ? Object.defineProperty(b, l, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (b[l] = o);
let h = new b(c.Z, {
    CONNECTION_OPEN: function () {
        g.clear(), (f = {}), (E = {}), (O = {});
    },
    GUILD_PRODUCTS_FETCH: function (e) {
        let { guildId: t } = e;
        (f[t] = 1),
            [...g.values(_(t))].forEach((e) => {
                g.delete(e.id);
            });
    },
    GUILD_PRODUCTS_FETCH_SUCCESS: function (e) {
        let { guildId: t, products: n } = e;
        (f[t] = 2),
            (O[t] = Date.now()),
            n.forEach((e) => {
                g.set(e.id, e), (E[e.id] = 2);
            });
    },
    GUILD_PRODUCTS_FETCH_FAILURE: function (e) {
        let { guildId: t } = e;
        f[t] = 2;
    },
    GUILD_PRODUCT_CREATE: function (e) {
        let { product: t } = e;
        g.set(t.id, t);
    },
    GUILD_PRODUCT_UPDATE: function (e) {
        let { product: t } = e;
        g.set(t.id, t);
    },
    GUILD_PRODUCT_DELETE: function (e) {
        let { productId: t } = e;
        g.delete(t);
    },
    GUILD_PRODUCT_FETCH: function (e) {
        let { productId: t } = e;
        E[t] = 1;
    },
    GUILD_PRODUCT_FETCH_SUCCESS: function (e) {
        let { product: t } = e;
        (E[t.id] = 2), g.set(t.id, t);
    },
    GUILD_PRODUCT_FETCH_FAILURE: function (e) {
        let { productId: t, error: n } = e;
        (E[t] = 2), 404 === n.status && g.delete(t);
    }
});
