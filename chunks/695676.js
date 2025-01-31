n.d(t, {
    gc: () => a,
    hH: () => s,
    uX: () => o
});
var i,
    l = n(192379),
    a = (((i = {}).HOME = 'home'), (i.LIST = 'list'), (i.APPLICATION = 'application'), i);
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
function s() {
    return l.useContext(o);
}
