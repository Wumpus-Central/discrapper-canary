var i,
    r,
    l,
    a,
    o = n(442837),
    s = n(570140);
let c = !1;
class u extends (a = o.ZP.Store) {
    get blockedByProxy() {
        return c;
    }
}
(l = 'ProxyBlockStore'),
    (r = 'displayName') in (i = u)
        ? Object.defineProperty(i, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = l),
    (t.Z = new u(s.Z, {
        PROXY_BLOCKED_REQUEST: function (e) {
            c = !0;
        }
    }));
