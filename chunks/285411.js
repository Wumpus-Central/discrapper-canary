n.d(t, { A: () => l });
var r = n(17928),
    s = n(73153);
let o = new Map();
class i extends r.Ay.Store {
    getSmartContext(e) {
        return o.get(e) ?? null;
    }
}
let l = new i(s.h, {
    CONJURE_SMART_CONTEXT_SET: function (e) {
        let { projectId: t, enabled: n } = e;
        if (o.get(t) === n) return !1;
        o.set(t, n);
    },
});
