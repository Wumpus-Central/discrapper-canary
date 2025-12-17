n.d(t, { Z: () => u });
var r,
    i,
    l = n(873546),
    a = n(442837),
    o = n(570140);
let s = !1;
class c extends (i = a.ZP.Store) {
    getIsOpen() {
        return !l.tq || s;
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
let u = new c(o.Z, {
    MOBILE_WEB_SIDEBAR_OPEN: function () {
        s = !0;
    },
    MOBILE_WEB_SIDEBAR_CLOSE: function () {
        s = !1;
    },
});
