"use strict";
n.d(t, { A: () => l });
var i = n(17928),
    r = n(228366),
    s = n(626584),
    a = n(184989);
new s.A("BasicChannelCacheStore");
class o extends i.Ay.Store {
    channels = new Map();
    guilds = new Map();
    hasChannel(e) {
        return this.channels.has(e);
    }
    hasGuild(e) {
        return this.guilds.has(e);
    }
    getBasicChannel(e) {
        return this.channels.get(e) ?? null;
    }
    getGuildBasicChannels(e) {
        return this.guilds.get(e) ?? null;
    }
    invalidate(e) {
        this.delete(e);
    }
    restored(e) {
        this.delete(e);
    }
    constructor() {
        super(r.h, {
            CACHE_LOADED_LAZY_NO_CACHE: (e) => this.handleCacheLoadedLazyNoCache(e),
            CACHE_LOADED_LAZY: (e) => this.handleCacheLoadedLazy(e),
            CONNECTION_OPEN: (e) => this.handleConnectionOpen(e),
            LOGOUT: (e) => this.handleLogout(e),
        });
    }
    initialize() {
        this.waitFor(a.A);
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
        let t = a.A.allGuildIds();
        for (let e of this.guilds.keys()) t.has(e) || this.delete(e);
    }
    handleLogout(e) {
        this.guilds.clear(), this.channels.clear();
    }
    delete(e) {
        for (let t in this.guilds.get(e) ?? {}) this.channels.delete(t);
        this.guilds.delete(e);
    }
}
let l = new o();
