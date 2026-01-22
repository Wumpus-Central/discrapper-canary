n.d(t, { A: () => p });
var r = n(735438),
    i = n.n(r),
    l = n(73153),
    a = n(510595),
    s = n(35177),
    o = n(405892),
    c = n(594061),
    u = n(617617),
    d = n(355097);
let p = {
    init() {
        (o.A[d.oD.PRELOADED_USER_SETTINGS] = s.A),
            (o.A[d.oD.FRECENCY_AND_FAVORITES_SETTINGS] = a.A),
            l.h.subscribe("CONNECTION_OPEN", f),
            l.h.subscribe("USER_SETTINGS_PROTO_ENQUEUE_UPDATE", h),
            l.h.subscribe("USER_SETTINGS_PROTO_LOAD_IF_NECESSARY", A),
            l.h.subscribe("APP_STATE_UPDATE", g);
    },
};
function f() {
    let e = u.A.getFullState(),
        t = e[d.oD.PRELOADED_USER_SETTINGS];
    t.editInfo.triggeredMigrations && c.wc.markDirtyFromMigration(t.proto, t.editInfo.cleanupFuncs),
        i().forEach(c.Df, (t, n) => {
            let r = e[Number(n)];
            null != r.editInfo.offlineEditDataVersion &&
                null != r.editInfo.protoToSave &&
                t.scheduleSaveFromOfflineEdit();
        });
}
function h(e) {
    let {
        settings: { proto: t, type: n },
        delaySeconds: r,
        jitter: i,
    } = e;
    c.Df[n].markDirty(t, {
        delaySeconds: r,
        jitter: i,
    });
}
function A(e) {
    let { settingsType: t } = e;
    c.Df[t].loadIfNecessary();
}
function g(e) {
    let { state: t } = e;
    ("inactive" === t || "background" === t) &&
        i().forEach(c.Df, (e, t) => {
            null != u.A.getFullState()[Number(t)].editInfo.timeout &&
                (e.logger.log("Triggering persistChanges due to AppStateUpdate"), e.persistChanges());
        });
}
