n.d(t, { A: () => o });
var i = n(17928),
    r = n(73153);
let a = new Map();
function s(e, t) {
    return !((a.get(e) ?? 0) >= t) && (a.set(e, t), !0);
}
class l extends i.Ay.Store {
    static displayName = "ConjureServerProjectActivityStore";
    getActivityAt(e) {
        return a.get(e) ?? null;
    }
}
let o = new l(r.h, {
    CONJURE_PROJECTS_FETCH_SUCCESS: function (e) {
        let { projects: t } = e,
            n = !1;
        for (let e of t) {
            let t = null != e.last_activity_at ? Date.parse(e.last_activity_at) : NaN;
            Number.isNaN(t) || (n = s(e.id, t) || n);
        }
        return n;
    },
    CONJURE_PROJECT_RUNNING_UPDATE: function (e) {
        let { projectId: t } = e;
        return s(t, Date.now());
    },
    CONJURE_TURN_SETTLED: function (e) {
        let { projectId: t } = e;
        return s(t, Date.now());
    },
    CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        return a.delete(t);
    },
    LOGOUT: function () {
        a = new Map();
    },
});
