n.d(t, {
    A: () => c,
}),
    n(896048);
var r = n(810531),
    i = n(942269),
    a = n(770335);

function o(e, t, n) {
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

function s(e, t) {
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
            type: a.i.GUILD,
        };
    return n;
}
class l extends i.yW {
    stateWrapper() {
        return this.database;
    }
    getGuildEmojis(e) {
        return this.database.getNullablePartition(e);
    }
    constructor(...e) {
        super(...e), o(this, "database", this.addKKVDatabase("guild_emojis"));
    }
}
o(l, "displayName", "RawGuildEmojiStore");
let c = new l({
    LOGOUT: (e, t) => t.clear(),
    BACKGROUND_SYNC: (e, t) => t.clear(),
    CONNECTION_OPEN: (e, t) => {
        for (let n of (t.clear(), e.guilds)) null != n.emojis.items && t.setPartition(n.id, s(n.id, n.emojis.items));
    },
    OVERLAY_INITIALIZE: (e, t) => {
        t.clear(),
            Object.entries(e.emojis).forEach((e) => {
                let [n, r] = e;
                t.setPartition(n, s(n, r));
            });
    },
    CACHED_EMOJIS_LOADED: (e, t) => {
        for (let [n, r] of e.emojis) t.setPartition(n, s(n, r));
    },
    GUILD_CREATE: (e, t) => {
        var n;
        t.setPartition(e.guild.id, s(e.guild.id, null != (n = e.guild.emojis.items) ? n : []));
    },
    GUILD_UPDATE: (e, t) => {
        t.setPartition(e.guild.id, s(e.guild.id, e.guild.emojis));
    },
    GUILD_EMOJIS_UPDATE: (e, t) => {
        t.setPartition(e.guildId, s(e.guildId, e.emojis));
    },
    GUILD_DELETE: (e, t) => {
        t.removePartition(e.guild.id);
    },
});
