n.d(e, { R: () => p, default: () => a });
var u = n(627968),
    o = n(64700),
    r = n(284009),
    i = n.n(r),
    s = n(284683);
let d = o.createContext(void 0);
function p() {
    let t = o.useContext(d);
    return i()(null != t, "must use useGuildShopSortContext within a GuildShopSortOptionsContextProvider"), t;
}
function a(t) {
    let { children: e, defaultSortOption: n = s.p$.NEWEST_ARRIVALS } = t,
        [r, i] = o.useState(n);
    return (0, u.jsx)(d.Provider, {
        value: {
            sortOption: r,
            setSortOption: i,
            onReset: function () {
                return i(n);
            },
        },
        children: e,
    });
}
