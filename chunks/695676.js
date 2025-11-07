n.d(t, {
    gc: () => i,
    hH: () => o,
    uX: () => a,
});
var r = n(647438),
    i = (function (e) {
        return (e.HOME = "home"), (e.LIST = "list"), (e.APPLICATION = "application"), e;
    })({});
let a = r.createContext({
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
    return r.useContext(a);
}
