n.d(t, { Z: () => b }), n(388685);
var r,
    i = n(392711),
    a = n.n(i),
    o = n(442837),
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
    _ = new Set();
function f(e) {
    (_ = new Set(e.unavailableGuilds)), e.unavailableGuilds.length > 0 && d.warn(''.concat(e.unavailableGuilds.length, ' guilds are unavailable on connection open: ').concat(e.unavailableGuilds));
}
function p(e) {
    if (!_.has(e.guildId)) return !1;
    _.delete(e.guildId);
}
function h(e) {
    if (_.has(e.guildId)) return !1;
    let t = c.Z.getGuild(e.guildId),
        n = '???';
    null != t && null != t.name && (n = t.name), d.warn('Guild has gone unavailable: '.concat(e.guildId, ' (').concat(n, ')')), _.add(e.guildId);
}
function m(e) {
    if (!_.has(e.guild.id)) return !1;
    _.delete(e.guild.id), d.info('Guild has become available: '.concat(e.guild.id));
}
function g(e) {
    !0 !== e.guild.unavailable && _.delete(e.guild.id);
}
class E extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(c.Z);
    }
    isUnavailable(e) {
        return null != e && _.has(e);
    }
    get totalGuilds() {
        return a().size(c.Z.getGuilds()) + _.size;
    }
    get totalUnavailableGuilds() {
        return _.size;
    }
    get unavailableGuilds() {
        return Array.from(_);
    }
}
u(E, 'displayName', 'GuildAvailabilityStore');
let b = new E(s.Z, {
    CONNECTION_OPEN: f,
    OVERLAY_INITIALIZE: f,
    GUILD_UNAVAILABLE: h,
    GUILD_DELETE: g,
    GUILD_CREATE: m,
    GUILD_UPDATE: m,
    GUILD_GEO_RESTRICTED: p
});
