n.d(t, { A: () => s }), n(896048);
var r = n(723176);
function i(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
class a {
    async getAll() {
        let e = r.A.guildsRequiringDeletedIdsSync();
        return null == e ? new Set() : new Set((await e.getMany()).map((e) => e.id));
    }
    handleConnectionOpen(e, t) {
        let { guilds: n } = e,
            i = n.filter((e) => e.unableToSyncDeletes).map((e) => ({ id: e.id }));
        i.length > 0 && r.A.guildsRequiringDeletedIdsSyncTransaction(t).putAll(i);
    }
    handleBackgroundSync(e, t) {
        let { guilds: n } = e,
            i = n.filter((e) => "partial" === e.data_mode && e.unable_to_sync_deletes).map((e) => ({ id: e.id }));
        i.length > 0 && r.A.guildsRequiringDeletedIdsSyncTransaction(t).putAll(i);
    }
    handleGuildCreate(e, t) {
        let { guild: n } = e;
        n.unableToSyncDeletes && r.A.guildsRequiringDeletedIdsSyncTransaction(t).put({ id: n.id });
    }
    handleDeletedEntityIds(e, t) {
        r.A.guildsRequiringDeletedIdsSyncTransaction(t).delete(e.guild_id);
    }
    resetInMemoryState() {}
    constructor() {
        i(this, "actions", {
            BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
            CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
            GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
            DELETED_ENTITY_IDS: (e, t) => this.handleDeletedEntityIds(e, t),
        });
    }
}
let s = new a();
