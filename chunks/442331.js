n.d(t, { A: () => o });
var l = n(17928),
    r = n(73153);
let s = new Map(),
    i = new Map(),
    u = [];
class a extends l.Ay.Store {
    getSettings(e) {
        return s.get(e) ?? null;
    }
    getLoadState(e) {
        return i.get(e) ?? null;
    }
    getDeclaredConnections(e) {
        return s.get(e)?.connections ?? u;
    }
}
let o = new a(r.h, {
    CONJURE_SETTINGS_SET: function (e) {
        let { projectId: t, settings: n } = e;
        (s.set(t, n), i.set(t, "loaded"));
    },
    CONJURE_SETTINGS_LOAD_STATE_SET: function (e) {
        let { projectId: t, state: n } = e,
            l = i.get(t);
        if (l === n || ("loaded" === l && "loaded" !== n)) return !1;
        i.set(t, n);
    },
});
