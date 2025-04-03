n.d(t, { Z: () => p });
var r = n(392711),
    i = n.n(r),
    l = n(570140),
    a = n(78687),
    o = n(315341),
    s = n(262847),
    c = n(675478),
    u = n(581883),
    d = n(526761);
let p = {
    init() {
        (s.Z[d.yP.PRELOADED_USER_SETTINGS] = o.Z), (s.Z[d.yP.FRECENCY_AND_FAVORITES_SETTINGS] = a.Z), l.Z.subscribe('CONNECTION_OPEN', h), l.Z.subscribe('USER_SETTINGS_PROTO_ENQUEUE_UPDATE', f), l.Z.subscribe('USER_SETTINGS_PROTO_LOAD_IF_NECESSARY', g), l.Z.subscribe('APP_STATE_UPDATE', m);
    }
};
function h() {
    let e = u.Z.getFullState(),
        t = e[d.yP.PRELOADED_USER_SETTINGS];
    t.editInfo.triggeredMigrations && c.hW.markDirtyFromMigration(t.proto, t.editInfo.cleanupFuncs),
        i().forEach(c.aj, (t, n) => {
            let r = e[Number(n)];
            null != r.editInfo.offlineEditDataVersion && null != r.editInfo.protoToSave && t.scheduleSaveFromOfflineEdit();
        });
}
function f(e) {
    let {
        settings: { proto: t, type: n },
        delaySeconds: r,
        jitter: i
    } = e;
    c.aj[n].markDirty(t, {
        delaySeconds: r,
        jitter: i
    });
}
function g(e) {
    let { settingsType: t } = e;
    c.aj[t].loadIfNecessary();
}
function m(e) {
    let { state: t } = e;
    ('inactive' === t || 'background' === t) &&
        i().forEach(c.aj, (e, t) => {
            null != u.Z.getFullState()[Number(t)].editInfo.timeout && (e.logger.log('Triggering persistChanges due to AppStateUpdate'), e.persistChanges());
        });
}
