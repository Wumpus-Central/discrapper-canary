n.d(t, {
    A: () => _,
});
var r,
    i = n(311907),
    a = n(73153),
    s = n(613057);

function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let l = null,
    c = [s.Hi.REDISTRIBUTABLE_INSTALL_FAILED, s.Hi.POST_INSTALL_FAILED, s.Hi.POST_INSTALL_CANCELLED],
    u = [s.Hi.APPLICATION_NOT_FOUND, s.Hi.APPLICATION_LOAD_FAILED, s.Hi.INTERRUPTED, s.Hi.DESERIALIZATION_FAILED];

function d(e) {
    let { error: t } = e;
    l = null != t.code && u.includes(t.code) ? null : t;
}

function f() {
    null != l && null != l.code && c.includes(l.code) && (l = null);
}
class p extends (r = i.Ay.Store) {
    getLastError() {
        return l;
    }
}
o(p, "displayName", "DispatchApplicationErrorStore");
let _ = new p(a.h, {
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: f,
    DISPATCH_APPLICATION_ERROR: d,
});
