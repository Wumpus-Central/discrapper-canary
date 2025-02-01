n.d(t, { Z: () => u });
var i,
    l,
    r,
    a = n(873546),
    s = n(442837),
    o = n(570140);
let c = !1;
class d extends (r = s.ZP.Store) {
    getIsOpen() {
        return !a.tq || c;
    }
}
(l = 'MobileWebSidebarStore'),
    (i = 'displayName') in d
        ? Object.defineProperty(d, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (d[i] = l);
let u = new d(o.Z, {
    MOBILE_WEB_SIDEBAR_OPEN: function () {
        c = !0;
    },
    MOBILE_WEB_SIDEBAR_CLOSE: function () {
        c = !1;
    }
});
