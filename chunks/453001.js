"use strict";
n.d(t, { A: () => c });
var r = n(311907),
    i = n(73153),
    a = n(626584),
    s = n(184989);
let o = new a.A("BasicChannelCacheStore"),
    l = !1;
class u extends r.Ay.Store {
    channels = new Map();
    guilds = new Map();
    hasChannel(e) {
        return this.channels.has(e);
    }
    hasGuild(e) {
        return this.guilds.has(e);
    }
    getBasicChannel(e) {
        return (
            l && o.verbose(`getting basic_channel (channel: ${e}, exists: ${this.channels.has(e)})`),
            this.channels.get(e) ?? null
        );
    }
    getGuildBasicChannels(e) {
        return (
            l && o.verbose(`getting guild_basic_channels (guild: ${e}, exists: ${this.guilds.has(e)})`),
            this.guilds.get(e) ?? null
        );
    }
    invalidate(e) {
        this.delete(e);
    }
    restored(e) {
        this.delete(e);
    }
    constructor() {
        super(i.h, {
            CACHE_LOADED_LAZY_NO_CACHE: (e) => this.handleCacheLoadedLazyNoCache(e),
            CACHE_LOADED_LAZY: (e) => this.handleCacheLoadedLazy(e),
            CONNECTION_OPEN: (e) => this.handleConnectionOpen(e),
            LOGOUT: (e) => this.handleLogout(e),
        });
    }
    initialize() {
        this.waitFor(s.A);
    }
    handleCacheLoadedLazy(e) {
        for (let [t, n] of ((this.guilds = new Map()), (this.channels = new Map()), e.basicGuildChannels))
            for (let e of (this.guilds.set(t, Object.fromEntries(n.map((e) => [e.id, e]))), n))
                this.channels.set(e.id, e);
    }
    handleCacheLoadedLazyNoCache(e) {
        this.guilds.clear(), this.channels.clear();
    }
    handleConnectionOpen(e) {
        let t = s.A.allGuildIds();
        for (let e of this.guilds.keys()) t.has(e) || this.delete(e);
    }
    handleLogout(e) {
        this.guilds.clear(), this.channels.clear();
    }
    delete(e) {
        for (let t in (l && o.verbose(`deleting basic_channels (guild: ${e}, exists: ${this.guilds.has(e)})`),
        this.guilds.get(e) ?? {}))
            this.channels.delete(t);
        this.guilds.delete(e);
    }
}
let c = new u();
