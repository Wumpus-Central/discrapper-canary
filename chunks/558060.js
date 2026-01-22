r.d(t, {
    A: () => d,
    R: () => a,
}),
    r(896048);
var n = r(627968),
    i = r(64700),
    o = r(284009),
    l = r.n(o),
    s = r(284683);
let c = i.createContext(void 0);

function a() {
    let e = i.useContext(c);
    return l()(null != e, "must use useGuildShopSortContext within a GuildShopSortOptionsContextProvider"), e;
}

function d(e) {
    let { children: t, defaultSortOption: r = s.p$.NEWEST_ARRIVALS } = e,
        [o, l] = i.useState(r);
    return (0, n.jsx)(c.Provider, {
        value: {
            sortOption: o,
            setSortOption: l,
            onReset: () => l(r),
        },
        children: t,
    });
}
