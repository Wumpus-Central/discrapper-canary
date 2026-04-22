n.d(t, { L8: () => s, Wy: () => a, uM: () => r });
var l,
    i = n(64700),
    a = (((l = {}).HOME = "home"), (l.LIST = "list"), (l.APPLICATION = "application"), l);
let s = i.createContext({
    history: [],
    discard: {},
    currentView: void 0,
    pushHistory: () => {},
    goBack: () => {},
    getMostRecentHistoryItemByType: () => void 0,
    isSlideReady: !1,
    setSlideReady: () => {},
});
function r() {
    return i.useContext(s);
}
