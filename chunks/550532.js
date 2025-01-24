var i,
    l,
    r,
    a,
    o = n(442837),
    s = n(570140),
    c = n(780106);
let u = 'None';
class d extends (a = o.ZP.Store) {
    getFakeGameToShow() {
        return u;
    }
    getFakeGameData() {
        return c.O[u];
    }
}
(r = 'ContentInventoryDevToolsStore'),
    (l = 'displayName') in (i = d)
        ? Object.defineProperty(i, l, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[l] = r),
    (t.Z = new d(s.Z, {
        CONTENT_INVENTORY_FORCE_SHOW_GAME_SHARING: function (e) {
            let { gameToShow: t } = e;
            u = t;
        }
    }));
