n.d(t, { A: () => o });
var l = n(311907),
    s = n(73153),
    a = n(868068);
let i = "None";
class r extends l.Ay.Store {
    static displayName = "ContentInventoryDevToolsStore";
    getFakeGameToShow() {
        return i;
    }
    getFakeGameData() {
        return a.O[i];
    }
}
let o = new r(s.h, {
    CONTENT_INVENTORY_FORCE_SHOW_GAME_SHARING: function (e) {
        let { gameToShow: t } = e;
        i = t;
    },
});
