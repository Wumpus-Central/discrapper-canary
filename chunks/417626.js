n.d(t, { Z: () => u });
var r,
    i,
    l,
    a = n(442837),
    o = n(570140);
let s = !1;
class c extends (l = a.ZP.Store) {
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
let u = new c(o.Z, {
    PROXY_BLOCKED_REQUEST: function (e) {
        s = !0;
    }
});
