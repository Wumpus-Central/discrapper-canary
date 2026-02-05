i.d(t, { R: () => o, default: () => c });
var s = i(627968),
    r = i(64700),
    n = i(284009),
    l = i.n(n),
    d = i(284683);
let a = r.createContext(void 0);
function o() {
    let e = r.useContext(a);
    return l()(null != e, "must use useGuildShopSortContext within a GuildShopSortOptionsContextProvider"), e;
}
function c(e) {
    let { children: t, defaultSortOption: i = d.p$.NEWEST_ARRIVALS } = e,
        [n, l] = r.useState(i);
    return (0, s.jsx)(a.Provider, { value: { sortOption: n, setSortOption: l, onReset: () => l(i) }, children: t });
}
