n.d(t, { A: () => a });
var r = n(17928),
    s = n(73153);
let o = new Map(),
    l = [];
class i extends r.Ay.Store {
    getSettings(e) {
        return o.get(e) ?? null;
    }
    getDeclaredConnections(e) {
        return o.get(e)?.connections ?? l;
    }
}
let a = new i(s.h, {
    CONJURE_SETTINGS_SET: function (e) {
        let { projectId: t, settings: n } = e;
        o.set(t, n);
    },
});
