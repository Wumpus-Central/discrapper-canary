n.d(t, { Z: () => d });
var r,
    i,
    l,
    a = n(873546),
    o = n(442837),
    s = n(570140);
let c = !1;
class u extends (l = o.ZP.Store) {
    getIsOpen() {
        return !a.tq || c;
    }
}
(i = 'MobileWebSidebarStore'),
    (r = 'displayName') in u
        ? Object.defineProperty(u, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (u[r] = i);
let d = new u(s.Z, {
    MOBILE_WEB_SIDEBAR_OPEN: function () {
        c = !0;
    },
    MOBILE_WEB_SIDEBAR_CLOSE: function () {
        c = !1;
    }
});
