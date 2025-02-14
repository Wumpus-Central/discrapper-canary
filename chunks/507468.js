n.d(t, { Z: () => h });
var i = n(392711),
    l = n.n(i),
    r = n(570140),
    a = n(755264),
    s = n(315341),
    o = n(262847),
    d = n(675478),
    c = n(581883),
    u = n(526761);
let h = {
    init() {
        (o.Z[u.yP.PRELOADED_USER_SETTINGS] = s.Z), (o.Z[u.yP.FRECENCY_AND_FAVORITES_SETTINGS] = a.Z), r.Z.subscribe('CONNECTION_OPEN', m), r.Z.subscribe('USER_SETTINGS_PROTO_ENQUEUE_UPDATE', p), r.Z.subscribe('USER_SETTINGS_PROTO_LOAD_IF_NECESSARY', g), r.Z.subscribe('APP_STATE_UPDATE', _);
    }
};
function m() {
    let e = c.Z.getFullState(),
        t = e[u.yP.PRELOADED_USER_SETTINGS];
    t.editInfo.triggeredMigrations && d.hW.markDirtyFromMigration(t.proto, t.editInfo.cleanupFuncs),
        l().forEach(d.aj, (t, n) => {
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
    d.aj[n].markDirty(t, {
        delaySeconds: i,
        jitter: l
    });
}
function g(e) {
    let { settingsType: t } = e;
    d.aj[t].loadIfNecessary();
}
function _(e) {
    let { state: t } = e;
    ('inactive' === t || 'background' === t) &&
        l().forEach(d.aj, (e, t) => {
            null != c.Z.getFullState()[Number(t)].editInfo.timeout && (e.logger.log('Triggering persistChanges due to AppStateUpdate'), e.persistChanges());
        });
}
