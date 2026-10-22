n.d(t, { A: () => d });
var s = n(17928),
    r = n(73153);
let o = [],
    i = [],
    l = new Map(),
    a = new Map();
class c extends s.Ay.Store {
    getSessions(e) {
        return l.get(e) ?? o;
    }
    getTabs(e) {
        return a.get(e) ?? i;
    }
    getTab(e, t) {
        return this.getTabs(e).find((e) => e.session.id === t) ?? null;
    }
}
let d = new c(r.h, {
    CONJURE_BROWSER_SESSIONS_SET: function (e) {
        var t;
        let { projectId: n, sessions: s } = e;
        if (
            ((t = l.get(n) ?? o),
            t.length === s.length && t.every((e, t) => e.id === s[t].id && e.started_at === s[t].started_at))
        )
            return !1;
        let r = [...s].sort((e, t) => e.started_at - t.started_at),
            c = new Set(r.map((e) => e.id)),
            d = (a.get(n) ?? i).filter((e) => !c.has(e.session.id)),
            u = [
                ...d
                    .filter((e) => !e.ended)
                    .map((e) => {
                        let { session: t } = e;
                        return { session: t, ended: !0 };
                    }),
                ...d.filter((e) => e.ended),
            ].slice(0, 12);
        return (l.set(n, s), a.set(n, [...r.map((e) => ({ session: e, ended: !1 })), ...u]), !0);
    },
});
