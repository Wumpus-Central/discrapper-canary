n.d(t, {
    gc: () => l,
    hH: () => o,
    uX: () => a
});
var i,
    r = n(192379),
    l = (((i = {}).HOME = 'home'), (i.LIST = 'list'), (i.APPLICATION = 'application'), i);
let a = r.createContext({
    history: [],
    discard: {},
    currentView: void 0,
    pushHistory: () => {},
    goBack: () => {},
    getMostRecentHistoryItemByType: () => void 0,
    isSlideReady: !1,
    setSlideReady: () => {}
});
function o() {
    return r.useContext(a);
}
