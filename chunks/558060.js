u.d(t, { R: () => d, default: () => l });
var n = u(477900),
    o = u(582128),
    s = u(284009),
    i = u.n(s),
    r = u(284683);
let a = o.createContext(void 0);
function d() {
    let e = o.useContext(a);
    return (i()(null != e, "must use useGuildShopSortContext within a GuildShopSortOptionsContextProvider"), e);
}
function l(e) {
    let { children: t, defaultSortOption: u = r.p$.NEWEST_ARRIVALS } = e,
        [s, i] = o.useState(u),
        d = o.useCallback(() => i(u), [u]),
        l = o.useMemo(() => ({ sortOption: s, setSortOption: i, onReset: d }), [s, i, d]);
    return (0, n.jsx)(a.Provider, { value: l, children: t });
}
