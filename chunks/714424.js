n.d(t, { Z: () => u }), n(388685);
var r = n(732870),
    i = n(894276),
    a = n(429091),
    o = n(906411);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function l(e, t) {
    let n = {};
    for (let i of t)
        n[i.id] = {
            [r.O]: "RawGuildEmoji",
            guildId: e,
            id: i.id,
            animated: i.animated,
            name: i.name,
            require_colons: i.require_colons,
            available: i.available,
            roles: i.roles,
            managed: i.managed,
            version: i.version,
            type: o.B.GUILD,
        };
    return n;
}
class c extends a.d {
    getGuildEmojis(e) {
        return this.getNullablePartition(e);
    }
}
s(c, "displayName", "RawGuildEmojiStore");
let u = new c(
    {
        LOGOUT: (e, t) => t.reset(),
        BACKGROUND_SYNC: (e, t) => t.reset(),
        CONNECTION_OPEN: (e, t) => {
            t.reset((t) => {
                for (let n of e.guilds) null != n.emojis.items && (t[n.id] = l(n.id, n.emojis.items));
            });
        },
        OVERLAY_INITIALIZE: (e, t) => {
            t.reset((t) => {
                Object.entries(e.emojis).forEach((e) => {
                    let [n, r] = e;
                    t[n] = l(n, r);
                });
            });
        },
        CACHED_EMOJIS_LOADED: (e, t) => {
            for (let [n, r] of e.emojis) t.setPartition(n, l(n, r));
        },
        GUILD_CREATE: (e, t) => {
            var n;
            t.setPartition(e.guild.id, l(e.guild.id, null != (n = e.guild.emojis.items) ? n : []));
        },
        GUILD_UPDATE: (e, t) => {
            t.setPartition(e.guild.id, l(e.guild.id, e.guild.emojis));
        },
        GUILD_EMOJIS_UPDATE: (e, t) => {
            t.setPartition(e.guildId, l(e.guildId, e.emojis));
        },
        GUILD_DELETE: (e, t) => {
            t.removePartition(e.guild.id);
        },
    },
    i.fg.getCachedBridgedStoreMode(),
);
