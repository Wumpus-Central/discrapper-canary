"use strict";
n.d(t, { A: () => u }), n(321073);
var r = n(357758),
    i = n(311907),
    s = n(73153);
let a = new Map(),
    o = new Map();
class l extends i.Ay.Store {
    static displayName = "AVErrorStore";
    hasActiveErrorOfType(e) {
        return (o.get(e) ?? []).length > 0;
    }
    getActiveErrors() {
        return a instanceof Map || (a = new Map()), a;
    }
    getActiveErrorsOfType(e) {
        let t = [],
            n = o.get(e);
        if (null == n) return t;
        for (let r of n) {
            let n = a.get(r);
            null != n && n.type === e && t.push(n);
        }
        return t;
    }
}
let u = new l(s.h, {
    ACTIVE_AV_ERRORS_CHANGED: function (e) {
        let { activeErrors: t } = e;
        if (__OVERLAY__ || !(t instanceof Map)) return !1;
        a instanceof Map || (a = new Map());
        let n = new Set(t.keys()),
            i = new Set(a.keys());
        if ((0, r._)(n, i)) return !1;
        for (let [e, n] of ((a = t), (o = new Map()), a.entries())) {
            let t = o.get(n.type) ?? [];
            t.push(e), o.set(n.type, t);
        }
    },
});
