n.d(t, { A: () => A });
var i = n(735438),
    r = n.n(i),
    a = n(73153),
    l = n(510595),
    s = n(35177),
    o = n(405892),
    d = n(594061),
    c = n(617617),
    u = n(355097);
let A = {
    init() {
        (o.A[u.oD.PRELOADED_USER_SETTINGS] = s.A),
            (o.A[u.oD.FRECENCY_AND_FAVORITES_SETTINGS] = l.A),
            a.h.subscribe("CONNECTION_OPEN", h),
            a.h.subscribe("USER_SETTINGS_PROTO_ENQUEUE_UPDATE", _),
            a.h.subscribe("USER_SETTINGS_PROTO_LOAD_IF_NECESSARY", m),
            a.h.subscribe("APP_STATE_UPDATE", p);
    },
};
function h() {
    let e = c.A.getFullState(),
        t = e[u.oD.PRELOADED_USER_SETTINGS];
    t.editInfo.triggeredMigrations && d.wc.markDirtyFromMigration(t.proto, t.editInfo.cleanupFuncs),
        r().forEach(d.Df, (t, n) => {
            let i = e[Number(n)];
            null != i.editInfo.offlineEditDataVersion &&
                null != i.editInfo.protoToSave &&
                t.scheduleSaveFromOfflineEdit();
        });
}
function _(e) {
    let {
        settings: { proto: t, type: n },
        delaySeconds: i,
        jitter: r,
    } = e;
    d.Df[n].markDirty(t, { delaySeconds: i, jitter: r });
}
function m(e) {
    let { settingsType: t } = e;
    d.Df[t].loadIfNecessary();
}
function p(e) {
    let { state: t } = e;
    ("inactive" === t || "background" === t) &&
        r().forEach(d.Df, (e, t) => {
            null != c.A.getFullState()[Number(t)].editInfo.timeout &&
                (e.logger.log("Triggering persistChanges due to AppStateUpdate"), e.persistChanges());
        });
}
