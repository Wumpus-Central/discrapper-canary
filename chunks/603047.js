n.d(t, { A: () => c });
var r,
    l,
    i = n(311907),
    s = n(73153),
    a = n(868068);
let o = "None";
class u extends (l = i.Ay.Store) {
    getFakeGameToShow() {
        return o;
    }
    getFakeGameData() {
        return a.O[o];
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
let c = new u(s.h, {
    CONTENT_INVENTORY_FORCE_SHOW_GAME_SHARING: function (e) {
        let { gameToShow: t } = e;
        o = t;
    },
});
