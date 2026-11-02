n.d(t, { A: () => l });
var r = n(17928),
    s = n(73153);
let i = new Map();
class o extends r.Ay.Store {
    getSmartContext(e) {
        return i.get(e) ?? null;
    }
}
let l = new o(s.h, {
    CONJURE_SMART_CONTEXT_SET: function (e) {
        let { projectId: t, enabled: n } = e;
        if (i.get(t) === n) return !1;
        i.set(t, n);
    },
});
