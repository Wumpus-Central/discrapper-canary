n.d(t, { Z: () => _ }), n(47120), n(653041);
var r,
    i = n(442837),
    o = n(570140),
    a = n(823379);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
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
class d extends (r = i.ZP.Store) {
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
    if (!(0, a.OL)(n, r))
        for (let [e, n] of ((l = t), (c = new Map()), l.entries())) {
            var i;
            let t = null != (i = c.get(n.type)) ? i : [];
            t.push(e), c.set(n.type, t);
        }
}
s(d, 'displayName', 'AVErrorStore');
let _ = new d(o.Z, { ACTIVE_AV_ERRORS_CHANGED: f });
