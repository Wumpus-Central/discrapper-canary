(n.d(t, { Z: () => g }), n(388685));
var r,
    i = n(442837),
    a = n(570140),
    o = n(710845),
    s = n(430824);
function l(e, t, n) {
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
let c = new o.Z('GuildAvailabilityStore'),
    u = new Set();
function d(e) {
    ((u = new Set(e.unavailableGuilds)), e.unavailableGuilds.length > 0 && c.warn(''.concat(e.unavailableGuilds.length, ' guilds are unavailable on connection open: ').concat(e.unavailableGuilds)));
}
function _(e) {
    if (!u.has(e.guildId)) return !1;
    u.delete(e.guildId);
}
function f(e) {
    if (u.has(e.guildId)) return !1;
    let t = s.Z.getGuild(e.guildId),
        n = '???';
    (null != t && null != t.name && (n = t.name), c.warn('Guild has gone unavailable: '.concat(e.guildId, ' (').concat(n, ')')), u.add(e.guildId));
}
function p(e) {
    if (!u.has(e.guild.id)) return !1;
    (u.delete(e.guild.id), c.info('Guild has become available: '.concat(e.guild.id)));
}
function h(e) {
    !0 !== e.guild.unavailable && u.delete(e.guild.id);
}
class m extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(s.Z);
    }
    isUnavailable(e) {
        return null != e && u.has(e);
    }
    get totalGuilds() {
        return s.Z.getGuildCount() + u.size;
    }
    get totalUnavailableGuilds() {
        return u.size;
    }
    get unavailableGuilds() {
        return Array.from(u);
    }
}
l(m, 'displayName', 'GuildAvailabilityStore');
let g = new m(a.Z, {
    CONNECTION_OPEN: d,
    OVERLAY_INITIALIZE: d,
    GUILD_UNAVAILABLE: f,
    GUILD_DELETE: h,
    GUILD_CREATE: p,
    GUILD_UPDATE: p,
    GUILD_GEO_RESTRICTED: _
});
