n.d(t, {
    A: () => p,
});
var r,
    i,
    l = n(311907),
    a = n(73153),
    s = n(613057);
let o = null,
    c = [s.Hi.REDISTRIBUTABLE_INSTALL_FAILED, s.Hi.POST_INSTALL_FAILED, s.Hi.POST_INSTALL_CANCELLED],
    u = [s.Hi.APPLICATION_NOT_FOUND, s.Hi.APPLICATION_LOAD_FAILED, s.Hi.INTERRUPTED, s.Hi.DESERIALIZATION_FAILED];
class d extends (i = l.Ay.Store) {
    getLastError() {
        return o;
    }
}
(r = "displayName") in d
    ? Object.defineProperty(d, r, {
          value: "DispatchApplicationErrorStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (d[r] = "DispatchApplicationErrorStore");
let p = new d(a.h, {
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
        null != o && null != o.code && c.includes(o.code) && (o = null);
    },
    DISPATCH_APPLICATION_ERROR: function (e) {
        let { error: t } = e;
        o = null != t.code && u.includes(t.code) ? null : t;
    },
});
