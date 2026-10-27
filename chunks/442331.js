n.d(t, { A: () => o });
var l = n(17928),
    a = n(73153);
let r = new Map(),
    s = new Map(),
    i = [];
class u extends l.Ay.Store {
    getSettings(e) {
        return r.get(e) ?? null;
    }
    getLoadState(e) {
        return s.get(e) ?? null;
    }
    getDeclaredConnections(e) {
        return r.get(e)?.connections ?? i;
    }
}
let o = new u(a.h, {
    CONJURE_SETTINGS_SET: function (e) {
        let { projectId: t, settings: n } = e;
        (r.set(t, n), s.set(t, "loaded"));
    },
    CONJURE_SETTINGS_LOAD_STATE_SET: function (e) {
        let { projectId: t, state: n } = e,
            l = s.get(t);
        if (l === n || ("loaded" === l && "loaded" !== n)) return !1;
        s.set(t, n);
    },
});
