n.d(t, {
    gc: () => r,
    hH: () => o,
    uX: () => a
});
var l,
    i = n(73800),
    r = (((l = {}).HOME = 'home'), (l.LIST = 'list'), (l.APPLICATION = 'application'), l);
let a = i.createContext({
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
    return i.useContext(a);
}
