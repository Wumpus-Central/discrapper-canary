u.d(e, {
    M: () => C,
    Z: () => h
}),
    u(653041),
    u(47120);
var i,
    l,
    n,
    d,
    r = u(442837),
    c = u(759174),
    o = u(570140),
    a = u(70956),
    E = u(709054),
    C = (((l = {})[(l.NOT_FETCHED = 0)] = 'NOT_FETCHED'), (l[(l.FETCHING = 1)] = 'FETCHING'), (l[(l.FETCHED = 2)] = 'FETCHED'), l);
let s = {},
    _ = {},
    T = {},
    D = 10 * a.Z.Millis.MINUTE;
function U(t) {
    return 'guild:'.concat(t);
}
function P(t) {
    return 'guild:'.concat(t, ':published');
}
let G = new c.h(
        (t) => {
            let e = [U(t.guild_id)];
            return t.published && e.push(P(t.guild_id)), e;
        },
        (t) =>
            (function (t) {
                let e = E.default.extractTimestamp(t.id);
                return t.published ? -e : -e + 1000000000000;
            })(t)
    ),
    f = [];
class F extends (i = r.ZP.Store) {
    getGuildProductsForGuildFetchState(t) {
        var e;
        return null !== (e = s[t]) && void 0 !== e ? e : 0;
    }
    getGuildProduct(t) {
        return G.get(t);
    }
    getGuildProductsForGuild(t, e) {
        let { publishedOnly: u } = e;
        return null == t ? f : G.values(u ? P(t) : U(t));
    }
    getGuildProductFetchState(t) {
        var e;
        return null !== (e = _[t]) && void 0 !== e ? e : 0;
    }
    isGuildProductsCacheExpired(t) {
        var e;
        return Date.now() - (null !== (e = T[t]) && void 0 !== e ? e : 0) > D;
    }
}
(d = 'GuildProductsStore'),
    (n = 'displayName') in F
        ? Object.defineProperty(F, n, {
              value: d,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (F[n] = d);
let h = new F(o.Z, {
    CONNECTION_OPEN: function () {
        G.clear(), (s = {}), (_ = {}), (T = {});
    },
    GUILD_PRODUCTS_FETCH: function (t) {
        let { guildId: e } = t;
        (s[e] = 1),
            [...G.values(U(e))].forEach((t) => {
                G.delete(t.id);
            });
    },
    GUILD_PRODUCTS_FETCH_SUCCESS: function (t) {
        let { guildId: e, products: u } = t;
        (s[e] = 2),
            (T[e] = Date.now()),
            u.forEach((t) => {
                G.set(t.id, t), (_[t.id] = 2);
            });
    },
    GUILD_PRODUCTS_FETCH_FAILURE: function (t) {
        let { guildId: e } = t;
        s[e] = 2;
    },
    GUILD_PRODUCT_CREATE: function (t) {
        let { product: e } = t;
        G.set(e.id, e);
    },
    GUILD_PRODUCT_UPDATE: function (t) {
        let { product: e } = t;
        G.set(e.id, e);
    },
    GUILD_PRODUCT_DELETE: function (t) {
        let { productId: e } = t;
        G.delete(e);
    },
    GUILD_PRODUCT_FETCH: function (t) {
        let { productId: e } = t;
        _[e] = 1;
    },
    GUILD_PRODUCT_FETCH_SUCCESS: function (t) {
        let { product: e } = t;
        (_[e.id] = 2), G.set(e.id, e);
    },
    GUILD_PRODUCT_FETCH_FAILURE: function (t) {
        let { productId: e, error: u } = t;
        (_[e] = 2), 404 === u.status && G.delete(e);
    }
});
