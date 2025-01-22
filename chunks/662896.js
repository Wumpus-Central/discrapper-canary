var i = r(47120);
var a = r(287328);
function o(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class s {
    async getAll() {
        let e = a.Z.guildsRequiringDeletedIdsSync();
        return null == e ? new Set() : new Set((await e.getMany()).map((e) => e.id));
    }
    handleConnectionOpen(e, n) {
        let { guilds: r } = e,
            i = r.filter((e) => e.unableToSyncDeletes).map((e) => ({ id: e.id }));
        i.length > 0 && a.Z.guildsRequiringDeletedIdsSyncTransaction(n).putAll(i);
    }
    handleBackgroundSync(e, n) {
        let { guilds: r } = e,
            i = r.filter((e) => 'partial' === e.data_mode && e.unableToSyncDeletes).map((e) => ({ id: e.id }));
        i.length > 0 && a.Z.guildsRequiringDeletedIdsSyncTransaction(n).putAll(i);
    }
    handleGuildCreate(e, n) {
        let { guild: r } = e;
        r.unableToSyncDeletes && a.Z.guildsRequiringDeletedIdsSyncTransaction(n).put({ id: r.id });
    }
    handleDeletedEntityIds(e, n) {
        a.Z.guildsRequiringDeletedIdsSyncTransaction(n).delete(e.guild_id);
    }
    resetInMemoryState() {}
    constructor() {
        o(this, 'actions', {
            BACKGROUND_SYNC: (e, n) => this.handleBackgroundSync(e, n),
            CONNECTION_OPEN: (e, n) => this.handleConnectionOpen(e, n),
            GUILD_CREATE: (e, n) => this.handleGuildCreate(e, n),
            DELETED_ENTITY_IDS: (e, n) => this.handleDeletedEntityIds(e, n)
        });
    }
}
n.Z = new s();
