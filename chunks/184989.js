"use strict";
n.d(t, { A: () => a });
var r = n(311907),
    i = n(73153);
class s extends r.Ay.Store {
    guildIds = new Set();
    allGuildIds() {
        return this.guildIds;
    }
    isMember(e) {
        return this.guildIds.has(e);
    }
    constructor() {
        super(
            i.h,
            {
                CACHE_LOADED: (e) => this.handleCacheLoaded(e),
                CACHE_LOADED_LAZY: (e) => this.handleCacheLoadedLazy(e),
                CONNECTION_OPEN: (e) => this.handleConnectionOpen(e),
                GUILD_CREATE: (e) => this.handleGuildCreate(e),
                GUILD_DELETE: (e) => this.handleGuildDelete(e),
            },
            i.A.Early,
        );
    }
    handleConnectionOpen(e) {
        this.guildIds = new Set([...e.guilds.map((e) => e.id), ...e.unavailableGuilds]);
    }
    handleCacheLoaded(e) {
        this.guildIds = new Set(e.guilds.map((e) => e.id));
    }
    handleCacheLoadedLazy(e) {
        for (let t of e.guilds) this.guildIds.add(t.id);
    }
    handleGuildCreate(e) {
        this.guildIds.add(e.guild.id);
    }
    handleGuildDelete(e) {
        !0 !== e.guild.unavailable && this.guildIds.delete(e.guild.id);
    }
}
let a = new s();
