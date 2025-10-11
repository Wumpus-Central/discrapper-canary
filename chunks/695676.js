n.d(t, {
    gc: () => r,
    hH: () => o,
    uX: () => a,
});
var i,
    l = n(647438),
    r = (((i = {}).HOME = "home"), (i.LIST = "list"), (i.APPLICATION = "application"), i);
let a = l.createContext({
    history: [],
    discard: {},
    currentView: void 0,
    pushHistory: () => {},
    goBack: () => {},
    getMostRecentHistoryItemByType: () => void 0,
    isSlideReady: !1,
    setSlideReady: () => {},
});
function o() {
    return l.useContext(a);
}
