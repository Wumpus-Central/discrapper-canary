n.d(t, { A: () => a });
var r = n(17928),
    s = n(73153);
let i = new Map();
class o extends r.Ay.Store {
    getLiveReload(e) {
        return i.get(e) ?? null;
    }
}
let a = new o(s.h, {
    VIBEGRATIONS_LIVE_RELOAD_SET: function (e) {
        let { projectId: t, enabled: n, error: r, phase: s, step: o } = e;
        i.set(t, { enabled: n, error: r, phase: s, step: o });
    },
});
