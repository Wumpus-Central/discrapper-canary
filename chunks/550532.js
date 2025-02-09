n.d(t, { Z: () => d });
var a,
    r,
    l,
    o = n(442837),
    i = n(570140),
    c = n(780106);
let s = 'None';
class u extends (l = o.ZP.Store) {
    getFakeGameToShow() {
        return s;
    }
    getFakeGameData() {
        return c.O[s];
    }
}
(r = 'ContentInventoryDevToolsStore'),
    (a = 'displayName') in u
        ? Object.defineProperty(u, a, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (u[a] = r);
let d = new u(i.Z, {
    CONTENT_INVENTORY_FORCE_SHOW_GAME_SHARING: function (e) {
        let { gameToShow: t } = e;
        s = t;
    }
});
