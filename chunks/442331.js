n.d(t, { A: () => a });
var r = n(17928),
    s = n(73153);
let o = new Map(),
    i = [];
class l extends r.Ay.Store {
    getSettings(e) {
        return o.get(e) ?? null;
    }
    getDeclaredConnections(e) {
        return o.get(e)?.connections ?? i;
    }
}
let a = new l(s.h, {
    CONJURE_SETTINGS_SET: function (e) {
        let { projectId: t, settings: n } = e;
        o.set(t, n);
    },
});
