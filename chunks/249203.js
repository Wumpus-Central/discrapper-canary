i.d(e, { A: () => d });
var n = i(17928),
    l = i(73153);
let s = {};
function r(t) {
    (null == s[t] &&
        (function () {
            let t = Object.keys(s);
            if (t.length < 500) return;
            let e = t.sort((t, e) => s[t].lastViewedAt - s[e].lastViewedAt).slice(t.length - 499),
                i = {};
            for (let t of e) i[t] = s[t];
            s = i;
        })(),
        (s = { ...s, [t]: { lastViewedAt: Date.now() } }));
}
class a extends n.Ay.PersistedStore {
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
