n.d(t, { A: () => d });
var r = n(664294),
    l = n(17928),
    i = n(228366),
    a = n(723702),
    s = n(204925);
let o = null,
    u = "underage";
class c extends l.Ay.Store {
    static displayName = "AgeGateStore";
    isUnderageAnonymous() {
        if (a.isPlatformEmbedded && 1) {
            if (null != o && o + s.bm > Date.now()) return !0;
        } else if (1) return null != r.parse(document.cookie)[u];
        return !1;
    }
}
let d = new c(i.h, {
    AGE_GATE_PREVENT_UNDERAGE_REGISTRATION: function () {
        (o = Date.now()), (document.cookie = `${u}=1;path=/`);
    },
    LOGIN_SUCCESS: function () {
        (o = null), (document.cookie = `${u}=1;path=/;max-age=0`);
    },
});
