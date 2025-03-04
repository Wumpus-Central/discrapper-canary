n.d(t, { Z: () => d }), n(47120);
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
let l = new Map();
class c extends (r = i.ZP.Store) {
    hasActiveErrorOfType(e) {
        for (let { error: t } of l.values()) if (t === e) return !0;
        return !1;
    }
    getActiveErrors() {
        return l instanceof Map || (l = new Map()), l;
    }
}
function u(e) {
    let { activeErrors: t } = e;
    if (__OVERLAY__ || !(t instanceof Map)) return;
    l instanceof Map || (l = new Map());
    let n = new Set(t.keys()),
        r = new Set(l.keys());
    (0, a.OL)(n, r) || (l = t);
}
s(c, 'displayName', 'AVErrorStore');
let d = new c(o.Z, { ACTIVE_AV_ERRORS_CHANGED: u });
