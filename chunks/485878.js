var l,
    i = n(582128),
    s = (((l = {}).HOME = "home"), (l.LIST = "list"), (l.APPLICATION = "application"), l);
let a = i.createContext({
    history: [],
    discard: {},
    currentView: void 0,
    pushHistory: () => {},
    goBack: () => {},
    getMostRecentHistoryItemByType: () => void 0,
    isSlideReady: !1,
    setSlideReady: () => {},
});
n.d(
    t,
    {},
    {
        L8: a,
        Wy: s,
        uM: function () {
            return i.useContext(a);
        },
    },
);
