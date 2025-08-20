n.d(t, { Z: () => c });
var r,
    i,
    l = n(442837),
    o = n(570140);
let a = !1;
class s extends (i = l.ZP.Store) {
    get blockedByProxy() {
        return a;
    }
}
(r = "displayName") in s
    ? Object.defineProperty(s, r, {
          value: "ProxyBlockStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (s[r] = "ProxyBlockStore");
let c = new s(o.Z, {
    PROXY_BLOCKED_REQUEST: function (e) {
        a = !0;
    },
});
