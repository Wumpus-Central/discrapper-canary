n.d(t, { Z: () => h });
var i = n(392711),
    l = n.n(i),
    r = n(570140),
    a = n(755264),
    s = n(315341),
    o = n(262847),
    c = n(675478),
    d = n(581883),
    u = n(526761);
let h = {
    init() {
        (o.Z[u.yP.PRELOADED_USER_SETTINGS] = s.Z), (o.Z[u.yP.FRECENCY_AND_FAVORITES_SETTINGS] = a.Z), r.Z.subscribe('CONNECTION_OPEN', m), r.Z.subscribe('USER_SETTINGS_PROTO_ENQUEUE_UPDATE', p), r.Z.subscribe('USER_SETTINGS_PROTO_LOAD_IF_NECESSARY', g), r.Z.subscribe('APP_STATE_UPDATE', _);
    }
};
function m() {
    let e = d.Z.getFullState(),
        t = e[u.yP.PRELOADED_USER_SETTINGS];
    t.editInfo.triggeredMigrations && c.hW.markDirtyFromMigration(t.proto, t.editInfo.cleanupFuncs),
        l().forEach(c.aj, (t, n) => {
            let i = e[Number(n)];
            null != i.editInfo.offlineEditDataVersion && null != i.editInfo.protoToSave && t.scheduleSaveFromOfflineEdit();
        });
}
function p(e) {
    let {
        settings: { proto: t, type: n },
        delaySeconds: i,
        jitter: l
    } = e;
    c.aj[n].markDirty(t, {
        delaySeconds: i,
        jitter: l
    });
}
function g(e) {
    let { settingsType: t } = e;
    c.aj[t].loadIfNecessary();
}
function _(e) {
    let { state: t } = e;
    ('inactive' === t || 'background' === t) &&
        l().forEach(c.aj, (e, t) => {
            null != d.Z.getFullState()[Number(t)].editInfo.timeout && (e.logger.log('Triggering persistChanges due to AppStateUpdate'), e.persistChanges());
        });
}
