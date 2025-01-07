t.d(n, {
    R: function () {
        return d;
    },
    _: function () {
        return s;
    }
});
var r = t(200651),
    o = t(192379),
    u = t(512722),
    a = t.n(u),
    c = t(442837),
    l = t(240864);
let i = o.createContext(void 0);
function s() {
    let e = o.useContext(i);
    return a()(null != e, 'GuildProductPurchaseContext not found'), e;
}
function d(e) {
    let { children: n, guildProductListingId: t, ...o } = e,
        u = (0, c.e7)([l.Z], () => l.Z.getGuildProduct(t));
    return (
        a()(null != u, 'guildProductListing cannot be null'),
        (0, r.jsx)(i.Provider, {
            value: {
                guildProductListing: u,
                ...o
            },
            children: n
        })
    );
}
