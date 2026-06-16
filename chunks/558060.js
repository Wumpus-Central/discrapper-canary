n.d(e, { R: () => p, default: () => a });
var u = n(627968),
    o = n(64700),
    i = n(284009),
    r = n.n(i),
    s = n(284683);
let d = o.createContext(void 0);
function p() {
    let t = o.useContext(d);
    return r()(null != t, "must use useGuildShopSortContext within a GuildShopSortOptionsContextProvider"), t;
}
function a(t) {
    let { children: e, defaultSortOption: n = s.p$.NEWEST_ARRIVALS } = t,
        [i, r] = o.useState(n);
    return (0, u.jsx)(d.Provider, { value: { sortOption: i, setSortOption: r, onReset: () => r(n) }, children: e });
}
