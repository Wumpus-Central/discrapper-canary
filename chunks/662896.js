n.d(t, { Z: () => a }), n(47120);
var r = n(287328);
function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class o {
    async getAll() {
        let e = r.Z.guildsRequiringDeletedIdsSync();
        return null == e ? new Set() : new Set((await e.getMany()).map((e) => e.id));
    }
    handleConnectionOpen(e, t) {
        let { guilds: n } = e,
            i = n.filter((e) => e.unableToSyncDeletes).map((e) => ({ id: e.id }));
        i.length > 0 && r.Z.guildsRequiringDeletedIdsSyncTransaction(t).putAll(i);
    }
    handleBackgroundSync(e, t) {
        let { guilds: n } = e,
            i = n.filter((e) => 'partial' === e.data_mode && e.unableToSyncDeletes).map((e) => ({ id: e.id }));
        i.length > 0 && r.Z.guildsRequiringDeletedIdsSyncTransaction(t).putAll(i);
    }
    handleGuildCreate(e, t) {
        let { guild: n } = e;
        n.unableToSyncDeletes && r.Z.guildsRequiringDeletedIdsSyncTransaction(t).put({ id: n.id });
    }
    handleDeletedEntityIds(e, t) {
        r.Z.guildsRequiringDeletedIdsSyncTransaction(t).delete(e.guild_id);
    }
    resetInMemoryState() {}
    constructor() {
        i(this, 'actions', {
            BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
            CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
            GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
            DELETED_ENTITY_IDS: (e, t) => this.handleDeletedEntityIds(e, t)
        });
    }
}
let a = new o();
