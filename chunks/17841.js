"use strict";
n.d(t, { A: () => u });
var i = n(664294),
    s = n(311907),
    r = n(73153),
    l = n(723702),
    a = n(204925);
let o = null,
    c = "underage";
class d extends s.Ay.Store {
    static displayName = "AgeGateStore";
    isUnderageAnonymous() {
        if (l.isPlatformEmbedded && 1) {
            if (null != o && o + a.bm > Date.now()) return !0;
        } else if (1) return null != i.parse(document.cookie)[c];
        return !1;
    }
}
let u = new d(r.h, {
    AGE_GATE_PREVENT_UNDERAGE_REGISTRATION: function () {
        (o = Date.now()), (document.cookie = `${c}=1;path=/`);
    },
    LOGIN_SUCCESS: function () {
        (o = null), (document.cookie = `${c}=1;path=/;max-age=0`);
    },
});
