n.d(e, { A: () => d });
var i = n(17928),
    l = n(73153);
let s = {};
function r(t) {
    (null == s[t] &&
        (function () {
            let t = Object.keys(s);
            if (t.length < 500) return;
            let e = t.sort((t, e) => s[t].lastViewedAt - s[e].lastViewedAt).slice(t.length - 499),
                n = {};
            for (let t of e) n[t] = s[t];
            s = n;
        })(),
        (s = { ...s, [t]: { lastViewedAt: Date.now() } }));
}
class a extends i.Ay.PersistedStore {
    static displayName = "ProfileReadStateStore";
    static persistKey = "ProfileReadStateStore";
    initialize(t) {
        s = { ...(t?.entries ?? {}) };
    }
    getState() {
        return { entries: { ...s } };
    }
    getEntry(t) {
        return s[t] ?? null;
    }
}
let d = new a(l.h, {
    PROFILE_READ_STATE_MARK_VIEWED: function (t) {
        let { userId: e } = t;
        r(e);
    },
    PROFILE_READ_STATE_SEED_VIEWED: function (t) {
        let { userId: e } = t;
        if (null != s[e]) return !1;
        r(e);
    },
});
