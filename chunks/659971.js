n.d(t, { Z: () => u });
var r,
    i,
    l = n(873546),
    a = n(442837),
    s = n(570140);
let o = !1;
class c extends (i = a.ZP.Store) {
    getIsOpen() {
        return !l.tq || o;
    }
}
(r = "displayName") in c
    ? Object.defineProperty(c, r, {
          value: "MobileWebSidebarStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (c[r] = "MobileWebSidebarStore");
let u = new c(s.Z, {
    MOBILE_WEB_SIDEBAR_OPEN: function () {
        o = !0;
    },
    MOBILE_WEB_SIDEBAR_CLOSE: function () {
        o = !1;
    },
});
