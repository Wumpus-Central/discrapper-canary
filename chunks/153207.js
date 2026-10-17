n.d(t, { A: () => o });
var i = n(17928),
    r = n(73153);
let a = { statuses: [] },
    s = a;
class l extends i.Ay.PersistedStore {
    static displayName = "ConjureLastIntegrationStatusStore";
    static persistKey = "ConjureLastIntegrationStatus";
    initialize(e) {
        s = e ?? a;
    }
    getState() {
        return s;
    }
    getIntegrationStatus(e) {
        return s.statuses.find((t) => t.projectId === e)?.status ?? null;
    }
}
let o = new l(r.h, {
    CONJURE_PROJECT_INTEGRATION_STATUS_UPDATE: function (e) {
        let { projectId: t, integrationStatus: n } = e;
        s = { statuses: [...s.statuses.filter((e) => e.projectId !== t), { projectId: t, status: n }].slice(-20) };
    },
    CONJURE_PROJECT_DELETE_SUCCESS: function (e) {
        let { projectId: t } = e;
        if (!s.statuses.some((e) => e.projectId === t)) return !1;
        s = { statuses: s.statuses.filter((e) => e.projectId !== t) };
    },
    LOGOUT: function () {
        s = a;
    },
});
