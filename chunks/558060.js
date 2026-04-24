"use strict";
i.d(t, { R: () => c, default: () => d });
var r = i(627968),
    s = i(64700),
    n = i(284009),
    l = i.n(n),
    a = i(284683);
let o = s.createContext(void 0);
function c() {
    let e = s.useContext(o);
    return l()(null != e, "must use useGuildShopSortContext within a GuildShopSortOptionsContextProvider"), e;
}
function d(e) {
    let { children: t, defaultSortOption: i = a.p$.NEWEST_ARRIVALS } = e,
        [n, l] = s.useState(i);
    return (0, r.jsx)(o.Provider, { value: { sortOption: n, setSortOption: l, onReset: () => l(i) }, children: t });
}
