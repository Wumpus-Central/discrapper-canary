n.d(t, {
    gc: () => l,
    hH: () => a,
    uX: () => o
});
var i,
    r = n(73800),
    l = (((i = {}).HOME = 'home'), (i.LIST = 'list'), (i.APPLICATION = 'application'), i);
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
