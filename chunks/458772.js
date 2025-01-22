var i = r(47120);
var a = r(442837),
    o = r(570140),
    s = r(710845),
    l = r(93093);
function u(e, n, r) {
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
let c = new s.Z('BasicChannelCacheStore'),
    d = !1;
class f extends a.ZP.Store {
    hasChannel(e) {
        return this.channels.has(e);
    }
    hasGuild(e) {
        return this.guilds.has(e);
    }
    getBasicChannel(e) {
        var n;
        return d && c.verbose('getting basic_channel (channel: '.concat(e, ', exists: ').concat(this.channels.has(e), ')')), null !== (n = this.channels.get(e)) && void 0 !== n ? n : null;
    }
    getGuildBasicChannels(e) {
        var n;
        return d && c.verbose('getting guild_basic_channels (guild: '.concat(e, ', exists: ').concat(this.guilds.has(e), ')')), null !== (n = this.guilds.get(e)) && void 0 !== n ? n : null;
    }
    invalidate(e) {
        this.delete(e);
    }
    restored(e) {
        this.delete(e);
    }
    initialize() {
        this.waitFor(l.Z);
    }
    handleCacheLoadedLazy(e) {
        for (let [n, r] of ((this.guilds = new Map()), (this.channels = new Map()), e.basicGuildChannels)) for (let e of (this.guilds.set(n, Object.fromEntries(r.map((e) => [e.id, e]))), r)) this.channels.set(e.id, e);
    }
    handleCacheLoadedLazyNoCache(e) {
        this.guilds.clear(), this.channels.clear();
    }
    handleConnectionOpen(e) {
        let n = l.Z.allGuildIds();
        for (let e of this.guilds.keys()) !n.has(e) && this.delete(e);
    }
    handleLogout(e) {
        this.guilds.clear(), this.channels.clear();
    }
    delete(e) {
        var n;
        for (let r in (d && c.verbose('deleting basic_channels (guild: '.concat(e, ', exists: ').concat(this.guilds.has(e), ')')), null !== (n = this.guilds.get(e)) && void 0 !== n ? n : {})) this.channels.delete(r);
        this.guilds.delete(e);
    }
    constructor() {
        super(o.Z, {
            CACHE_LOADED_LAZY_NO_CACHE: (e) => this.handleCacheLoadedLazyNoCache(e),
            CACHE_LOADED_LAZY: (e) => this.handleCacheLoadedLazy(e),
            CONNECTION_OPEN: (e) => this.handleConnectionOpen(e),
            LOGOUT: (e) => this.handleLogout(e)
        }),
            u(this, 'channels', new Map()),
            u(this, 'guilds', new Map());
    }
}
n.Z = new f();
