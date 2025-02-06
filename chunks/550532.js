n.d(t, { Z: () => p });
var a,
    r,
    l,
    o = n(442837),
    i = n(570140),
    c = n(780106);
let u = 'None';
class s extends (l = o.ZP.Store) {
    getFakeGameToShow() {
        return u;
    }
    getFakeGameData() {
        return c.O[u];
    }
}
(r = 'ContentInventoryDevToolsStore'),
    (a = 'displayName') in s
        ? Object.defineProperty(s, a, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[a] = r);
let p = new s(i.Z, {
    CONTENT_INVENTORY_FORCE_SHOW_GAME_SHARING: function (e) {
        let { gameToShow: t } = e;
        u = t;
    }
});
