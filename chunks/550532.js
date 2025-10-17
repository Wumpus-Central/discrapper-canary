n.d(t, { Z: () => u });
var r,
    i,
    l = n(442837),
    o = n(570140),
    s = n(780106);
let a = "None";
class c extends (i = l.ZP.Store) {
    getFakeGameToShow() {
        return a;
    }
    getFakeGameData() {
        return s.O[a];
    }
}
(r = "displayName") in c
    ? Object.defineProperty(c, r, {
          value: "ContentInventoryDevToolsStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (c[r] = "ContentInventoryDevToolsStore");
let u = new c(o.Z, {
    CONTENT_INVENTORY_FORCE_SHOW_GAME_SHARING: function (e) {
        let { gameToShow: t } = e;
        a = t;
    },
});
