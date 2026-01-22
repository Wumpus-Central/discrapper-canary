n.d(t, { A: () => f });
var r,
    i,
    s = n(664294),
    l = n(311907),
    a = n(73153),
    o = n(723702),
    c = n(204925);
let u = null,
    d = "underage";
class h extends (i = l.Ay.Store) {
    isUnderageAnonymous() {
        if (o.isPlatformEmbedded && 1) {
            if (null != u && u + c.bm > Date.now()) return !0;
        } else if (1) return null != s.parse(document.cookie)[d];
        return !1;
    }
}
(r = "displayName") in h
    ? Object.defineProperty(h, r, {
          value: "AgeGateStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (h[r] = "AgeGateStore");
let f = new h(a.h, {
    AGE_GATE_PREVENT_UNDERAGE_REGISTRATION: function () {
        (u = Date.now()), (document.cookie = "".concat(d, "=1;path=/"));
    },
    LOGIN_SUCCESS: function () {
        (u = null), (document.cookie = "".concat(d, "=1;path=/;max-age=0"));
    },
});
