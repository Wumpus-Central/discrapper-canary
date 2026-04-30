n.d(t, { A: () => r });
var i = n(17928),
    l = n(228366);
class a extends i.Ay.Store {
    guildIds = new Set();
    allGuildIds() {
        return this.guildIds;
    }
    isMember(e) {
        return this.guildIds.has(e);
    }
    constructor() {
        super(
            l.h,
            {
                CACHE_LOADED: (e) => this.handleCacheLoaded(e),
                CACHE_LOADED_LAZY: (e) => this.handleCacheLoadedLazy(e),
                CONNECTION_OPEN: (e) => this.handleConnectionOpen(e),
                GUILD_CREATE: (e) => this.handleGuildCreate(e),
                GUILD_DELETE: (e) => this.handleGuildDelete(e),
            },
            l.A.Early,
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
let r = new a();
