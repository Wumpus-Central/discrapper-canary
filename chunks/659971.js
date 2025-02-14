n.d(t, { Z: () => u });
var i,
    l,
    r,
    a = n(873546),
    s = n(442837),
    o = n(570140);
let d = !1;
class c extends (r = s.ZP.Store) {
    getIsOpen() {
        return !a.tq || d;
    }
}
(l = 'MobileWebSidebarStore'),
    (i = 'displayName') in c
        ? Object.defineProperty(c, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (c[i] = l);
let u = new c(o.Z, {
    MOBILE_WEB_SIDEBAR_OPEN: function () {
        d = !0;
    },
    MOBILE_WEB_SIDEBAR_CLOSE: function () {
        d = !1;
    }
});
