r.d(t, { Z: () => p });
var n,
    a,
    o,
    l = r(442837),
    i = r(570140),
    c = r(780106);
let s = 'None';
class u extends (o = l.ZP.Store) {
    getFakeGameToShow() {
        return s;
    }
    getFakeGameData() {
        return c.O[s];
    }
}
(a = 'ContentInventoryDevToolsStore'),
    (n = 'displayName') in u
        ? Object.defineProperty(u, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (u[n] = a);
let p = new u(i.Z, {
    CONTENT_INVENTORY_FORCE_SHOW_GAME_SHARING: function (e) {
        let { gameToShow: t } = e;
        s = t;
    }
});
