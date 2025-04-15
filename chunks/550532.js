n.d(t, { Z: () => d });
var r,
    i,
    l,
    o = n(442837),
    s = n(570140),
    a = n(780106);
let c = 'None';
class u extends (l = o.ZP.Store) {
    getFakeGameToShow() {
        return c;
    }
    getFakeGameData() {
        return a.O[c];
    }
}
(i = 'ContentInventoryDevToolsStore'),
    (r = 'displayName') in u
        ? Object.defineProperty(u, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (u[r] = i);
let d = new u(s.Z, {
    CONTENT_INVENTORY_FORCE_SHOW_GAME_SHARING: function (e) {
        let { gameToShow: t } = e;
        c = t;
    }
});
