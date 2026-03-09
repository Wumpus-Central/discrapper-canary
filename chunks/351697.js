"use strict";
n.d(t, { A: () => o }), n(321073);
var r = n(626584),
    i = n(723176);
let s = new r.A("GuildStickers");
class a {
    async getAsync(e) {
        let t = performance.now(),
            n = await i.A.stickers(e).getMapEntries(),
            r = performance.now();
        return s.log(`asynchronously loaded in ${r - t}ms (guilds: ${n.length})`), n;
    }
    actions = {
        BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
        CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
        GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
        GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
        GUILD_STICKERS_UPDATE: (e, t) => this.handleGuildStickersUpdate(e, t),
        GUILD_UPDATE: (e, t) => this.handleGuildUpdate(e, t),
    };
    handleConnectionOpen(e, t) {
        let n = [...e.guilds.map((e) => e.id), ...e.unavailableGuilds];
        for (let r of (i.A.stickersTransaction(t).deleteAllExcept(n), e.guilds)) this.handleOneGuildCreate(r, t);
    }
    handleGuildCreate(e, t) {
        this.handleOneGuildCreate(e.guild, t);
    }
    handleGuildUpdate(e, t) {
        this.replace(e.guild.id, e.guild.stickers, t);
    }
    handleGuildDelete(e, t) {
        this.delete(e.guild.id, t);
    }
    handleGuildStickersUpdate(e, t) {
        this.replace(e.guildId, e.stickers, t);
    }
    handleBackgroundSync(e, t) {
        e.promisesForBackgroundSyncToWaitOn.push(
            Promise.all(
                e.stickers.map((e) => {
                    if ("unavailable" === e.dataMode) return Promise.resolve();
                    "full" === e.dataMode
                        ? (s.verbose(`Replacing ${e.entities.length} stickers for ${e.guildId}`),
                          this.replace(e.guildId, e.entities, t))
                        : (e.updatedEntities.length > 0 || e.deletedEntityIds.length > 0) &&
                          (s.verbose(
                              `Updating ${e.updatedEntities.length} and deleting ${e.deletedEntityIds.length} stickers for ${e.guildId}`,
                          ),
                          this.update(e.guildId, e.updatedEntities, e.deletedEntityIds, t));
                }),
            ),
        );
    }
    handleOneGuildCreate(e, t) {
        let { id: n, stickers: r } = e;
        switch (r.op) {
            case "full_sync":
                this.replace(n, r.items, t);
                break;
            case "update":
                this.update(n, r.writes, r.deletes, t);
        }
    }
    resetInMemoryState() {}
    replace(e, t, n) {
        i.A.stickersTransaction(n).replaceAll(e, t);
    }
    delete(e, t) {
        i.A.stickersTransaction(t).delete(e);
    }
    update(e, t, n, r) {
        let s = i.A.stickersTransaction(r);
        for (let r of (s.putAll(e, t), n)) s.delete(e, r);
    }
}
let o = new a();
