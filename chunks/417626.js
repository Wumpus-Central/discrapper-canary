n.d(t, { Z: () => d });
var r,
    i,
    a,
    o = n(442837),
    l = n(570140);
let s = !1;
class c extends (a = o.ZP.Store) {
    get blockedByProxy() {
        return s;
    }
}
(i = 'ProxyBlockStore'),
    (r = 'displayName') in c
        ? Object.defineProperty(c, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (c[r] = i);
let d = new c(l.Z, {
    PROXY_BLOCKED_REQUEST: function (e) {
        s = !0;
    }
});
