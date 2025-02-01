n.d(t, { Z: () => c });
var l,
    i,
    a,
    r = n(442837),
    o = n(570140),
    E = n(780106);
let u = 'None';
class _ extends (a = r.ZP.Store) {
    getFakeGameToShow() {
        return u;
    }
    getFakeGameData() {
        return E.O[u];
    }
}
(i = 'ContentInventoryDevToolsStore'),
    (l = 'displayName') in _
        ? Object.defineProperty(_, l, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (_[l] = i);
let c = new _(o.Z, {
    CONTENT_INVENTORY_FORCE_SHOW_GAME_SHARING: function (e) {
        let { gameToShow: t } = e;
        u = t;
    }
});
