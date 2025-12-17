n.d(t, { Z: () => c });
var r,
    i,
    l = n(442837),
    a = n(570140),
    o = n(780106);
let s = "None";
class u extends (i = l.ZP.Store) {
    getFakeGameToShow() {
        return s;
    }
    getFakeGameData() {
        return o.O[s];
    }
}
(r = "displayName") in u
    ? Object.defineProperty(u, r, {
          value: "ContentInventoryDevToolsStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (u[r] = "ContentInventoryDevToolsStore");
let c = new u(a.Z, {
    CONTENT_INVENTORY_FORCE_SHOW_GAME_SHARING: function (e) {
        let { gameToShow: t } = e;
        s = t;
    },
});
