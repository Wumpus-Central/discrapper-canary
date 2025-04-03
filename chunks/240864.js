n.d(t, {
    M: () => E,
    Z: () => p
}),
    n(653041),
    n(47120);
var u,
    r,
    l,
    i,
    c = n(442837),
    o = n(759174),
    d = n(570140),
    a = n(70956),
    s = n(709054),
    E = (((r = {})[(r.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (r[(r.FETCHING = 1)] = 'FETCHING'), (r[(r.FETCHED = 2)] = 'FETCHED'), r);
let C = {},
    _ = {},
    f = {},
    D = 10 * a.Z.Millis.MINUTE;
function T(e) {
    return 'guild:'.concat(e);
}
function P(e) {
    return 'guild:'.concat(e, ':published');
}
let U = new o.h(
        (e) => {
            let t = [T(e.guild_id)];
            return e.published && t.push(P(e.guild_id)), t;
        },
        (e) =>
            (function (e) {
                let t = s.default.extractTimestamp(e.id);
                return e.published ? -t : -t + 1000000000000;
            })(e)
    ),
    O = [];
class G extends (u = c.ZP.Store) {
    getGuildProductsForGuildFetchState(e) {
        var t;
        return null != (t = C[e]) ? t : 0;
    }
    getGuildProduct(e) {
        return U.get(e);
    }
    getGuildProductsForGuild(e, t) {
        let { publishedOnly: n } = t;
        return null == e ? O : U.values(n ? P(e) : T(e));
    }
    getGuildProductFetchState(e) {
        var t;
        return null != (t = _[e]) ? t : 0;
    }
    isGuildProductsCacheExpired(e) {
        var t;
        return Date.now() - (null != (t = f[e]) ? t : 0) > D;
    }
}
(i = 'GuildProductsStore'),
    (l = 'displayName') in G
        ? Object.defineProperty(G, l, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (G[l] = i);
let p = new G(d.Z, {
    CONNECTION_OPEN: function () {
        U.clear(), (C = {}), (_ = {}), (f = {});
    },
    GUILD_PRODUCTS_FETCH: function (e) {
        let { guildId: t } = e;
        (C[t] = 1),
            [...U.values(T(t))].forEach((e) => {
                U.delete(e.id);
            });
    },
    GUILD_PRODUCTS_FETCH_SUCCESS: function (e) {
        let { guildId: t, products: n } = e;
        (C[t] = 2),
            (f[t] = Date.now()),
            n.forEach((e) => {
                U.set(e.id, e), (_[e.id] = 2);
            });
    },
    GUILD_PRODUCTS_FETCH_FAILURE: function (e) {
        let { guildId: t } = e;
        C[t] = 2;
    },
    GUILD_PRODUCT_CREATE: function (e) {
        let { product: t } = e;
        U.set(t.id, t);
    },
    GUILD_PRODUCT_UPDATE: function (e) {
        let { product: t } = e;
        U.set(t.id, t);
    },
    GUILD_PRODUCT_DELETE: function (e) {
        let { productId: t } = e;
        U.delete(t);
    },
    GUILD_PRODUCT_FETCH: function (e) {
        let { productId: t } = e;
        _[t] = 1;
    },
    GUILD_PRODUCT_FETCH_SUCCESS: function (e) {
        let { product: t } = e;
        (_[t.id] = 2), U.set(t.id, t);
    },
    GUILD_PRODUCT_FETCH_FAILURE: function (e) {
        let { productId: t, error: n } = e;
        (_[t] = 2), 404 === n.status && U.delete(t);
    }
});
