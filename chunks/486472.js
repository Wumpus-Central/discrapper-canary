n.d(t, { Z: () => b }), n(47120);
var r,
    i = n(392711),
    o = n.n(i),
    a = n(442837),
    s = n(570140),
    l = n(710845),
    c = n(430824);
function u(e, t, n) {
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
let d = new l.Z('GuildAvailabilityStore'),
    f = new Set();
function _(e) {
    (f = new Set(e.unavailableGuilds)), e.unavailableGuilds.length > 0 && d.warn(''.concat(e.unavailableGuilds.length, ' guilds are unavailable on connection open: ').concat(e.unavailableGuilds));
}
function p(e) {
    if (!f.has(e.guildId)) return !1;
    f.delete(e.guildId);
}
function h(e) {
    if (f.has(e.guildId)) return !1;
    let t = c.Z.getGuild(e.guildId),
        n = '???';
    null != t && null != t.name && (n = t.name), d.warn('Guild has gone unavailable: '.concat(e.guildId, ' (').concat(n, ')')), f.add(e.guildId);
}
function m(e) {
    if (!f.has(e.guild.id)) return !1;
    f.delete(e.guild.id), d.info('Guild has become available: '.concat(e.guild.id));
}
function g(e) {
    !0 !== e.guild.unavailable && f.delete(e.guild.id);
}
class E extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(c.Z);
    }
    isUnavailable(e) {
        return null != e && f.has(e);
    }
    get totalGuilds() {
        return o().size(c.Z.getGuilds()) + f.size;
    }
    get totalUnavailableGuilds() {
        return f.size;
    }
    get unavailableGuilds() {
        return Array.from(f);
    }
}
u(E, 'displayName', 'GuildAvailabilityStore');
let b = new E(s.Z, {
    CONNECTION_OPEN: _,
    OVERLAY_INITIALIZE: _,
    GUILD_UNAVAILABLE: h,
    GUILD_DELETE: g,
    GUILD_CREATE: m,
    GUILD_UPDATE: m,
    GUILD_GEO_RESTRICTED: p
});
