n.d(t, {
    gc: () => i,
    hH: () => a,
    uX: () => o
});
var r = n(73800),
    i = (function (e) {
        return ((e.HOME = 'home'), (e.LIST = 'list'), (e.APPLICATION = 'application'), e);
    })({});
let o = r.createContext({
    history: [],
    discard: {},
    currentView: void 0,
    pushHistory: () => {},
    goBack: () => {},
    getMostRecentHistoryItemByType: () => void 0,
    isSlideReady: !1,
    setSlideReady: () => {}
});
function a() {
    return r.useContext(o);
}
