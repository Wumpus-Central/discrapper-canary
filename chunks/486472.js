var i,
    a = r(47120);
var o = r(392711),
    s = r.n(o),
    l = r(442837),
    u = r(570140),
    c = r(710845),
    d = r(430824);
function f(e, n, r) {
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
let p = new c.Z('GuildAvailabilityStore'),
    h = new Set();
function _(e) {
    (h = new Set(e.unavailableGuilds)), e.unavailableGuilds.length > 0 && p.warn(''.concat(e.unavailableGuilds.length, ' guilds are unavailable on connection open: ').concat(e.unavailableGuilds));
}
function m(e) {
    if (!h.has(e.guildId)) return !1;
    h.delete(e.guildId);
}
function g(e) {
    if (h.has(e.guildId)) return !1;
    let n = d.Z.getGuild(e.guildId),
        r = '???';
    null != n && null != n.name && (r = n.name), p.warn('Guild has gone unavailable: '.concat(e.guildId, ' (').concat(r, ')')), h.add(e.guildId);
}
function E(e) {
    if (!h.has(e.guild.id)) return !1;
    h.delete(e.guild.id), p.info('Guild has become available: '.concat(e.guild.id));
}
function v(e) {
    !0 !== e.guild.unavailable && h.delete(e.guild.id);
}
class y extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(d.Z);
    }
    isUnavailable(e) {
        return null != e && h.has(e);
    }
    get totalGuilds() {
        return s().size(d.Z.getGuilds()) + h.size;
    }
    get totalUnavailableGuilds() {
        return h.size;
    }
    get unavailableGuilds() {
        return Array.from(h);
    }
}
f(y, 'displayName', 'GuildAvailabilityStore'),
    (n.Z = new y(u.Z, {
        CONNECTION_OPEN: _,
        OVERLAY_INITIALIZE: _,
        GUILD_UNAVAILABLE: g,
        GUILD_DELETE: v,
        GUILD_CREATE: E,
        GUILD_UPDATE: E,
        GUILD_GEO_RESTRICTED: m
    }));
