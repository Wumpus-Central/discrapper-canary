n.d(t, {
    A: () => u,
}),
    n(896048);
var r = n(810531),
    i = n(548965),
    a = n(942269),
    o = n(770335);

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
            [r.L]: "RawGuildEmoji",
            guildId: e,
            id: i.id,
            animated: i.animated,
            name: i.name,
            require_colons: i.require_colons,
            available: i.available,
            roles: i.roles,
            managed: i.managed,
            version: i.version,
            type: o.i.GUILD,
        };
    return n;
}
class c extends a.yW {
    stateWrapper() {
        return this.database;
    }
    getGuildEmojis(e) {
        return this.database.getNullablePartition(e);
    }
    constructor(...e) {
        super(...e), s(this, "database", this.addKKVDatabase("guild_emojis"));
    }
}
s(c, "displayName", "RawGuildEmojiStore");
let u = new c(
    {
        LOGOUT: (e, t) => t.clear(),
        BACKGROUND_SYNC: (e, t) => t.clear(),
        CONNECTION_OPEN: (e, t) => {
            for (let n of (t.clear(), e.guilds))
                null != n.emojis.items && t.setPartition(n.id, l(n.id, n.emojis.items));
        },
        OVERLAY_INITIALIZE: (e, t) => {
            t.clear(),
                Object.entries(e.emojis).forEach((e) => {
                    let [n, r] = e;
                    t.setPartition(n, l(n, r));
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
    i.P4.getCachedBridgedStoreMode(),
);
