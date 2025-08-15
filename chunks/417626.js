n.d(t, { Z: () => c });
var r,
    i,
    l = n(442837),
    a = n(570140);
let o = !1;
class s extends (i = l.ZP.Store) {
    get blockedByProxy() {
        return o;
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
let c = new s(a.Z, {
    PROXY_BLOCKED_REQUEST: function (e) {
        o = !0;
    },
});
