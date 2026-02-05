"use strict";
n.d(t, { A: () => d }), n(321073);
var r = n(357758),
    i = n(311907),
    a = n(73153);
let s = new Map(),
    o = new Map();
function l(e, t) {
    return e.type === t;
}
class u extends i.Ay.Store {
    static displayName = "AVErrorStore";
    hasActiveErrorOfType(e) {
        return (o.get(e) ?? []).length > 0;
    }
    getActiveErrors() {
        return s instanceof Map || (s = new Map()), s;
    }
    getActiveErrorsOfType(e) {
        let t = [],
            n = o.get(e);
        if (null == n) return t;
        for (let r of n) {
            let n = s.get(r);
            null != n && l(n, e) && t.push(n);
        }
        return t;
    }
}
function c(e) {
    let { activeErrors: t } = e;
    if (__OVERLAY__ || !(t instanceof Map)) return;
    s instanceof Map || (s = new Map());
    let n = new Set(t.keys()),
        i = new Set(s.keys());
    if (!(0, r._)(n, i))
        for (let [e, n] of ((s = t), (o = new Map()), s.entries())) {
            let t = o.get(n.type) ?? [];
            t.push(e), o.set(n.type, t);
        }
}
let d = new u(a.h, { ACTIVE_AV_ERRORS_CHANGED: c });
