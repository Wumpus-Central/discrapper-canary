n.d(t, { L8: () => a, Wy: () => s, uM: () => r });
var l,
    i = n(64700),
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
function r() {
    return i.useContext(a);
}
