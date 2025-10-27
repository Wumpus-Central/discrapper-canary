n.d(t, {
    M: () => u,
    Z: () => w,
}),
    n(539854),
    n(388685);
var r,
    i = n(442837),
    a = n(759174),
    o = n(570140),
    s = n(70956),
    l = n(709054);
function c(e, t, n) {
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
var u = (function (e) {
    return (
        (e[(e.NOT_FETCHED = 0)] = "NOT_FETCHED"),
        (e[(e.FETCHING = 1)] = "FETCHING"),
        (e[(e.FETCHED = 2)] = "FETCHED"),
        e
    );
})({});
let d = {},
    f = {},
    _ = {},
    p = 10 * s.Z.Millis.MINUTE,
    h = 1000000000000;
function m(e) {
    return "guild:".concat(e);
}
function g(e) {
    return "guild:".concat(e, ":published");
}
function E(e) {
    let t = l.default.extractTimestamp(e.id);
    return e.published ? -t : -t + h;
}
let b = new a.h(
        (e) => {
            let t = [m(e.guild_id)];
            return e.published && t.push(g(e.guild_id)), t;
        },
        (e) => E(e),
    ),
    y = [];
function O() {
    b.clear(), (d = {}), (f = {}), (_ = {});
}
function v(e) {
    let { guildId: t } = e;
    (d[t] = 1),
        [...b.values(m(t))].forEach((e) => {
            b.delete(e.id);
        });
}
function I(e) {
    let { guildId: t, products: n } = e;
    (d[t] = 2),
        (_[t] = Date.now()),
        n.forEach((e) => {
            b.set(e.id, e), (f[e.id] = 2);
        });
}
function T(e) {
    let { guildId: t } = e;
    d[t] = 2;
}
function S(e) {
    let { productId: t } = e;
    f[t] = 1;
}
function A(e) {
    let { product: t } = e;
    (f[t.id] = 2), b.set(t.id, t);
}
function C(e) {
    let { productId: t, error: n } = e;
    (f[t] = 2), 404 === n.status && b.delete(t);
}
function N(e) {
    let { product: t } = e;
    b.set(t.id, t);
}
function R(e) {
    let { product: t } = e;
    b.set(t.id, t);
}
function P(e) {
    let { productId: t } = e;
    b.delete(t);
}
class D extends (r = i.ZP.Store) {
    getGuildProductsForGuildFetchState(e) {
        var t;
        return null != (t = d[e]) ? t : 0;
    }
    getGuildProduct(e) {
        return b.get(e);
    }
    getGuildProductsForGuild(e, t) {
        let { publishedOnly: n } = t;
        return null == e ? y : b.values(n ? g(e) : m(e));
    }
    getGuildProductFetchState(e) {
        var t;
        return null != (t = f[e]) ? t : 0;
    }
    isGuildProductsCacheExpired(e) {
        var t;
        return Date.now() - (null != (t = _[e]) ? t : 0) > p;
    }
}
c(D, "displayName", "GuildProductsStore");
let w = new D(o.Z, {
    CONNECTION_OPEN: O,
    GUILD_PRODUCTS_FETCH: v,
    GUILD_PRODUCTS_FETCH_SUCCESS: I,
    GUILD_PRODUCTS_FETCH_FAILURE: T,
    GUILD_PRODUCT_CREATE: N,
    GUILD_PRODUCT_UPDATE: R,
    GUILD_PRODUCT_DELETE: P,
    GUILD_PRODUCT_FETCH: S,
    GUILD_PRODUCT_FETCH_SUCCESS: A,
    GUILD_PRODUCT_FETCH_FAILURE: C,
});
