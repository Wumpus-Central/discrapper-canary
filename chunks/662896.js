n.d(t, { Z: () => s }), n(47120);
var i = n(287328);
function r(e, t, n) {
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
class a {
    async getAll() {
        let e = i.Z.guildsRequiringDeletedIdsSync();
        return null == e ? new Set() : new Set((await e.getMany()).map((e) => e.id));
    }
    handleConnectionOpen(e, t) {
        let { guilds: n } = e,
            r = n.filter((e) => e.unableToSyncDeletes).map((e) => ({ id: e.id }));
        r.length > 0 && i.Z.guildsRequiringDeletedIdsSyncTransaction(t).putAll(r);
    }
    handleBackgroundSync(e, t) {
        let { guilds: n } = e,
            r = n.filter((e) => 'partial' === e.data_mode && e.unableToSyncDeletes).map((e) => ({ id: e.id }));
        r.length > 0 && i.Z.guildsRequiringDeletedIdsSyncTransaction(t).putAll(r);
    }
    handleGuildCreate(e, t) {
        let { guild: n } = e;
        n.unableToSyncDeletes && i.Z.guildsRequiringDeletedIdsSyncTransaction(t).put({ id: n.id });
    }
    handleDeletedEntityIds(e, t) {
        i.Z.guildsRequiringDeletedIdsSyncTransaction(t).delete(e.guild_id);
    }
    resetInMemoryState() {}
    constructor() {
        r(this, 'actions', {
            BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
            CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
            GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
            DELETED_ENTITY_IDS: (e, t) => this.handleDeletedEntityIds(e, t)
        });
    }
}
let s = new a();
