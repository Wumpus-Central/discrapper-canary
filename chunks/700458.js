"use strict";
n.d(t, { Oi: () => r, Tj: () => o, ZM: () => d });
var i,
    s = n(627968),
    l = n(64700),
    r =
        (((i = {})[(i.BASIC_INFO = 0)] = "BASIC_INFO"),
        (i[(i.TIERS = 1)] = "TIERS"),
        (i[(i.PAYMENT = 2)] = "PAYMENT"),
        (i[(i.EMOJIS = 3)] = "EMOJIS"),
        i);
let a = l.createContext({
    currentTab: 0,
    setCurrentTab: () => {
        throw Error("useTabBarState must be used within TabBarContextProvider");
    },
});
function o() {
    return l.useContext(a);
}
function d(e) {
    let { initialTab: t, children: n } = e,
        [i, r] = l.useState(t);
    return (0, s.jsx)(a.Provider, { value: { currentTab: i, setCurrentTab: r }, children: n });
}
