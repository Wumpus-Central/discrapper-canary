"use strict";
n.d(t, { A: () => d }), n(321073);
var i = n(357758),
    r = n(17928),
    s = n(228366);
let a = new Map(),
    o = new Map();
class l extends r.Ay.Store {
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
        for (let i of n) {
            let n = a.get(i);
            null != n && n.type === e && t.push(n);
        }
        return t;
    }
}
let d = new l(s.h, {
    ACTIVE_AV_ERRORS_CHANGED: function (e) {
        let { activeErrors: t } = e;
        if (__OVERLAY__ || !(t instanceof Map)) return !1;
        a instanceof Map || (a = new Map());
        let n = new Set(t.keys()),
            r = new Set(a.keys());
        if ((0, i._)(n, r)) return !1;
        for (let [e, n] of ((a = t), (o = new Map()), a.entries())) {
            let t = o.get(n.type) ?? [];
            t.push(e), o.set(n.type, t);
        }
    },
});
