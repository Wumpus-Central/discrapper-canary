n.d(t, { Z: () => d }), n(47120), n(977457);
var r = n(442837),
    i = n(570140),
    o = n(710845),
    a = n(93093);
function s(e, t, n) {
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
let l = new o.Z('BasicChannelCacheStore'),
    c = !1;
class u extends r.ZP.Store {
    hasChannel(e) {
        return this.channels.has(e);
    }
    hasGuild(e) {
        return this.guilds.has(e);
    }
    getBasicChannel(e) {
        var t;
        return c && l.verbose('getting basic_channel (channel: '.concat(e, ', exists: ').concat(this.channels.has(e), ')')), null != (t = this.channels.get(e)) ? t : null;
    }
    getGuildBasicChannels(e) {
        var t;
        return c && l.verbose('getting guild_basic_channels (guild: '.concat(e, ', exists: ').concat(this.guilds.has(e), ')')), null != (t = this.guilds.get(e)) ? t : null;
    }
    invalidate(e) {
        this.delete(e);
    }
    restored(e) {
        this.delete(e);
    }
    initialize() {
        this.waitFor(a.Z);
    }
    handleCacheLoadedLazy(e) {
        for (let [t, n] of ((this.guilds = new Map()), (this.channels = new Map()), e.basicGuildChannels)) for (let e of (this.guilds.set(t, Object.fromEntries(n.map((e) => [e.id, e]))), n)) this.channels.set(e.id, e);
    }
    handleCacheLoadedLazyNoCache(e) {
        this.guilds.clear(), this.channels.clear();
    }
    handleConnectionOpen(e) {
        let t = a.Z.allGuildIds();
        for (let e of this.guilds.keys()) t.has(e) || this.delete(e);
    }
    handleLogout(e) {
        this.guilds.clear(), this.channels.clear();
    }
    delete(e) {
        var t;
        for (let n in (c && l.verbose('deleting basic_channels (guild: '.concat(e, ', exists: ').concat(this.guilds.has(e), ')')), null != (t = this.guilds.get(e)) ? t : {})) this.channels.delete(n);
        this.guilds.delete(e);
    }
    constructor() {
        super(i.Z, {
            CACHE_LOADED_LAZY_NO_CACHE: (e) => this.handleCacheLoadedLazyNoCache(e),
            CACHE_LOADED_LAZY: (e) => this.handleCacheLoadedLazy(e),
            CONNECTION_OPEN: (e) => this.handleConnectionOpen(e),
            LOGOUT: (e) => this.handleLogout(e)
        }),
            s(this, 'channels', new Map()),
            s(this, 'guilds', new Map());
    }
}
let d = new u();
