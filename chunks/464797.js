t.d(n, {
    R: () => d,
    _: () => i
});
var r = t(200651),
    o = t(192379),
    l = t(512722),
    s = t.n(l),
    u = t(442837),
    a = t(240864);
let c = o.createContext(void 0);
function i() {
    let e = o.useContext(c);
    return s()(null != e, 'GuildProductPurchaseContext not found'), e;
}
function d(e) {
    let { children: n, guildProductListingId: t, ...o } = e,
        l = (0, u.e7)([a.Z], () => a.Z.getGuildProduct(t));
    return (
        s()(null != l, 'guildProductListing cannot be null'),
        (0, r.jsx)(c.Provider, {
            value: {
                guildProductListing: l,
                ...o
            },
            children: n
        })
    );
}
