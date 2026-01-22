n.d(t, { A: () => p }), n(896048), n(321073);
var r,
    i = n(357758),
    a = n(311907),
    s = n(73153);
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
let l = new Map(),
    c = new Map();
function u(e, t) {
    return e.type === t;
}
class d extends (r = a.Ay.Store) {
    hasActiveErrorOfType(e) {
        var t;
        return (null != (t = c.get(e)) ? t : []).length > 0;
    }
    getActiveErrors() {
        return l instanceof Map || (l = new Map()), l;
    }
    getActiveErrorsOfType(e) {
        let t = [],
            n = c.get(e);
        if (null == n) return t;
        for (let r of n) {
            let n = l.get(r);
            null != n && u(n, e) && t.push(n);
        }
        return t;
    }
}
function f(e) {
    let { activeErrors: t } = e;
    if (__OVERLAY__ || !(t instanceof Map)) return;
    l instanceof Map || (l = new Map());
    let n = new Set(t.keys()),
        r = new Set(l.keys());
    if (!(0, i._)(n, r))
        for (let [e, n] of ((l = t), (c = new Map()), l.entries())) {
            var a;
            let t = null != (a = c.get(n.type)) ? a : [];
            t.push(e), c.set(n.type, t);
        }
}
o(d, "displayName", "AVErrorStore");
let p = new d(s.h, { ACTIVE_AV_ERRORS_CHANGED: f });
