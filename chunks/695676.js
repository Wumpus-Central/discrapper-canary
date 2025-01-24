t.d(n, {
    gc: function () {
        return l;
    },
    hH: function () {
        return r;
    },
    uX: function () {
        return a;
    }
});
var i,
    l,
    o = t(192379);
((i = l || (l = {})).HOME = 'home'), (i.LIST = 'list'), (i.APPLICATION = 'application');
let a = o.createContext({
    history: [],
    discard: {},
    currentView: void 0,
    pushHistory: () => {},
    goBack: () => {},
    getMostRecentHistoryItemByType: () => void 0,
    isSlideReady: !1,
    setSlideReady: () => {}
});
function r() {
    return o.useContext(a);
}
