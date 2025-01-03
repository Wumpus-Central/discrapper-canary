var i = n(392711),
    r = n.n(i),
    l = n(570140),
    a = n(755264),
    s = n(315341),
    o = n(262847),
    c = n(675478),
    d = n(581883),
    u = n(526761);
function h() {
    let e = d.Z.getFullState(),
        t = e[u.yP.PRELOADED_USER_SETTINGS];
    t.editInfo.triggeredMigrations && c.hW.markDirtyFromMigration(t.proto, t.editInfo.cleanupFuncs),
        r().forEach(c.aj, (t, n) => {
            let i = e[Number(n)];
            null != i.editInfo.offlineEditDataVersion && null != i.editInfo.protoToSave && t.scheduleSaveFromOfflineEdit();
        });
}
function m(e) {
    let {
        settings: { proto: t, type: n },
        delaySeconds: i,
        jitter: r
    } = e;
    c.aj[n].markDirty(t, {
        delaySeconds: i,
        jitter: r
    });
}
function p(e) {
    let { settingsType: t } = e;
    c.aj[t].loadIfNecessary();
}
function g(e) {
    let { state: t } = e;
    ('inactive' === t || 'background' === t) &&
        r().forEach(c.aj, (e, t) => {
            null != d.Z.getFullState()[Number(t)].editInfo.timeout && (e.logger.log('Triggering persistChanges due to AppStateUpdate'), e.persistChanges());
        });
}
t.Z = {
    init() {
        (o.Z[u.yP.PRELOADED_USER_SETTINGS] = s.Z), (o.Z[u.yP.FRECENCY_AND_FAVORITES_SETTINGS] = a.Z), l.Z.subscribe('CONNECTION_OPEN', h), l.Z.subscribe('USER_SETTINGS_PROTO_ENQUEUE_UPDATE', m), l.Z.subscribe('USER_SETTINGS_PROTO_LOAD_IF_NECESSARY', p), l.Z.subscribe('APP_STATE_UPDATE', g);
    }
};
