n.d(t, {
    M: () => h,
    Z: () => _
}),
    n(653041),
    n(47120);
var i,
    r,
    l,
    o,
    s = n(442837),
    a = n(759174),
    u = n(570140),
    d = n(70956),
    c = n(709054),
    h = (((r = {})[(r.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (r[(r.FETCHING = 1)] = 'FETCHING'), (r[(r.FETCHED = 2)] = 'FETCHED'), r);
let f = {},
    p = {},
    g = {},
    v = 10 * d.Z.Millis.MINUTE;
function C(e) {
    return 'guild:'.concat(e);
}
function E(e) {
    return 'guild:'.concat(e, ':published');
}
let O = new a.h(
        (e) => {
            let t = [C(e.guild_id)];
            return e.published && t.push(E(e.guild_id)), t;
        },
        (e) =>
            (function (e) {
                let t = c.default.extractTimestamp(e.id);
                return e.published ? -t : -t + 1000000000000;
            })(e)
    ),
    m = [];
class S extends (i = s.ZP.Store) {
    getGuildProductsForGuildFetchState(e) {
        var t;
        return null !== (t = f[e]) && void 0 !== t ? t : 0;
    }
    getGuildProduct(e) {
        return O.get(e);
    }
    getGuildProductsForGuild(e, t) {
        let { publishedOnly: n } = t;
        return null == e ? m : O.values(n ? E(e) : C(e));
    }
    getGuildProductFetchState(e) {
        var t;
        return null !== (t = p[e]) && void 0 !== t ? t : 0;
    }
    isGuildProductsCacheExpired(e) {
        var t;
        return Date.now() - (null !== (t = g[e]) && void 0 !== t ? t : 0) > v;
    }
}
(o = 'GuildProductsStore'),
    (l = 'displayName') in S
        ? Object.defineProperty(S, l, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (S[l] = o);
let _ = new S(u.Z, {
    CONNECTION_OPEN: function () {
        O.clear(), (f = {}), (p = {}), (g = {});
    },
    GUILD_PRODUCTS_FETCH: function (e) {
        let { guildId: t } = e;
        (f[t] = 1),
            [...O.values(C(t))].forEach((e) => {
                O.delete(e.id);
            });
    },
    GUILD_PRODUCTS_FETCH_SUCCESS: function (e) {
        let { guildId: t, products: n } = e;
        (f[t] = 2),
            (g[t] = Date.now()),
            n.forEach((e) => {
                O.set(e.id, e), (p[e.id] = 2);
            });
    },
    GUILD_PRODUCTS_FETCH_FAILURE: function (e) {
        let { guildId: t } = e;
        f[t] = 2;
    },
    GUILD_PRODUCT_CREATE: function (e) {
        let { product: t } = e;
        O.set(t.id, t);
    },
    GUILD_PRODUCT_UPDATE: function (e) {
        let { product: t } = e;
        O.set(t.id, t);
    },
    GUILD_PRODUCT_DELETE: function (e) {
        let { productId: t } = e;
        O.delete(t);
    },
    GUILD_PRODUCT_FETCH: function (e) {
        let { productId: t } = e;
        p[t] = 1;
    },
    GUILD_PRODUCT_FETCH_SUCCESS: function (e) {
        let { product: t } = e;
        (p[t.id] = 2), O.set(t.id, t);
    },
    GUILD_PRODUCT_FETCH_FAILURE: function (e) {
        let { productId: t, error: n } = e;
        (p[t] = 2), 404 === n.status && O.delete(t);
    }
});
