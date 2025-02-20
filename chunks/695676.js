n.d(t, {
    gc: () => r,
    hH: () => a,
    uX: () => o
});
var i,
    l = n(192379),
    r = (((i = {}).HOME = 'home'), (i.LIST = 'list'), (i.APPLICATION = 'application'), i);
let o = l.createContext({
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
    return l.useContext(o);
}
