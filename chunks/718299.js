var i = n(855986),
    r = n(73153);
let a = new Map(),
    s = new Set();
function l(e) {
    (a.set(e, Date.now()), s.add(e));
}
class o extends i.Ay.Store {
    static displayName = "ConjureServerProjectActivityStore";
    getTurnStartedAt(e) {
        return a.get(e) ?? null;
    }
}
let d = new o(r.h, {
    CONJURE_PROJECTS_FETCH_SUCCESS: function (e) {
        let { projects: t } = e,
            n = !1;
        for (let e of t) !0 !== e.running ? s.delete(e.id) : s.has(e.id) || (l(e.id), (n = !0));
        return n;
    },
    CONJURE_PROJECT_RUNNING_UPDATE: function (e) {
        let { projectId: t, running: n } = e;
        return n ? (l(t), !0) : (s.delete(t), !1);
    },
    CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        return (s.delete(t), a.delete(t));
    },
    LOGOUT: function () {
        ((a = new Map()), (s = new Set()));
    },
});
n.d(t, {}, { A: d });
