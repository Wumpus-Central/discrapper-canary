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
    s = n(570140),
    c = n(70956),
    d = n(709054),
    p = (((i = {})[(i.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (i[(i.FETCHING = 1)] = 'FETCHING'), (i[(i.FETCHED = 2)] = 'FETCHED'), i);
let f = {},
    E = {},
    _ = {},
    O = 10 * c.Z.Millis.MINUTE;
function g(e) {
    return 'guild:'.concat(e);
}
function S(e) {
    return 'guild:'.concat(e, ':published');
}
let I = new u.h(
        (e) => {
            let t = [g(e.guild_id)];
            return e.published && t.push(S(e.guild_id)), t;
        },
        (e) =>
            (function (e) {
                let t = d.default.extractTimestamp(e.id);
                return e.published ? -t : -t + 1000000000000;
            })(e)
    ),
    b = [];
class T extends (r = a.ZP.Store) {
    getGuildProductsForGuildFetchState(e) {
        var t;
        return null != (t = f[e]) ? t : 0;
    }
    getGuildProduct(e) {
        return I.get(e);
    }
    getGuildProductsForGuild(e, t) {
        let { publishedOnly: n } = t;
        return null == e ? b : I.values(n ? S(e) : g(e));
    }
    getGuildProductFetchState(e) {
        var t;
        return null != (t = E[e]) ? t : 0;
    }
    isGuildProductsCacheExpired(e) {
        var t;
        return Date.now() - (null != (t = _[e]) ? t : 0) > O;
    }
}
(o = 'GuildProductsStore'),
    (l = 'displayName') in T
        ? Object.defineProperty(T, l, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (T[l] = o);
let h = new T(s.Z, {
    CONNECTION_OPEN: function () {
        I.clear(), (f = {}), (E = {}), (_ = {});
    },
    GUILD_PRODUCTS_FETCH: function (e) {
        let { guildId: t } = e;
        (f[t] = 1),
            [...I.values(g(t))].forEach((e) => {
                I.delete(e.id);
            });
    },
    GUILD_PRODUCTS_FETCH_SUCCESS: function (e) {
        let { guildId: t, products: n } = e;
        (f[t] = 2),
            (_[t] = Date.now()),
            n.forEach((e) => {
                I.set(e.id, e), (E[e.id] = 2);
            });
    },
    GUILD_PRODUCTS_FETCH_FAILURE: function (e) {
        let { guildId: t } = e;
        f[t] = 2;
    },
    GUILD_PRODUCT_CREATE: function (e) {
        let { product: t } = e;
        I.set(t.id, t);
    },
    GUILD_PRODUCT_UPDATE: function (e) {
        let { product: t } = e;
        I.set(t.id, t);
    },
    GUILD_PRODUCT_DELETE: function (e) {
        let { productId: t } = e;
        I.delete(t);
    },
    GUILD_PRODUCT_FETCH: function (e) {
        let { productId: t } = e;
        E[t] = 1;
    },
    GUILD_PRODUCT_FETCH_SUCCESS: function (e) {
        let { product: t } = e;
        (E[t.id] = 2), I.set(t.id, t);
    },
    GUILD_PRODUCT_FETCH_FAILURE: function (e) {
        let { productId: t, error: n } = e;
        (E[t] = 2), 404 === n.status && I.delete(t);
    }
});
