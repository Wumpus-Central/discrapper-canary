n.d(t, { A: () => d });
var l = n(664294),
    a = n(17928),
    s = n(228366),
    i = n(723702),
    r = n(204925);
let o = null,
    u = "underage";
class c extends a.Ay.Store {
    static displayName = "AgeGateStore";
    isUnderageAnonymous() {
        if (i.isPlatformEmbedded && 1) {
            if (null != o && o + r.bm > Date.now()) return !0;
        } else if (1) return null != l.parse(document.cookie)[u];
        return !1;
    }
}
let d = new c(s.h, {
    AGE_GATE_PREVENT_UNDERAGE_REGISTRATION: function () {
        (o = Date.now()), (document.cookie = `${u}=1;path=/`);
    },
    LOGIN_SUCCESS: function () {
        (o = null), (document.cookie = `${u}=1;path=/;max-age=0`);
    },
});
