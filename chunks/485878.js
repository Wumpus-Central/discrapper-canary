n.d(t, {
    L8: () => a,
    Wy: () => i,
    uM: () => s,
});
var r = n(64700),
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

function s() {
    return r.useContext(a);
}
