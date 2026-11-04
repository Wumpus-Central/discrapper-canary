var s = n(855986),
    a = n(73153);
let d = new Map(),
    r = new Map(),
    l = [];
class o extends s.Ay.Store {
    getSettings(e) {
        return d.get(e) ?? null;
    }
    getLoadState(e) {
        return r.get(e) ?? null;
    }
    getDeclaredConnections(e) {
        return d.get(e)?.connections ?? l;
    }
}
let c = new o(a.h, {
    CONJURE_SETTINGS_SET: function (e) {
        let { projectId: t, settings: n } = e;
        (d.set(t, n), r.set(t, "loaded"));
    },
    CONJURE_SETTINGS_LOAD_STATE_SET: function (e) {
        let { projectId: t, state: n } = e,
            s = r.get(t);
        if (s === n || ("loaded" === s && "loaded" !== n)) return !1;
        r.set(t, n);
    },
});
n.d(t, {}, { A: c });
