n.d(t, { A: () => a });
var r = n(17928),
    i = n(73153);
let s = new Map();
class o extends r.Ay.Store {
    getLiveReload(e) {
        return s.get(e) ?? null;
    }
}
let a = new o(i.h, {
    VIBEGRATIONS_LIVE_RELOAD_SET: function (e) {
        let { projectId: t, enabled: n, error: r, phase: i, step: o } = e;
        s.set(t, { enabled: n, error: r, phase: i, step: o });
    },
});
