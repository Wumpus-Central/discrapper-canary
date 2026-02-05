"use strict";
n.d(t, { A: () => u });
var r = n(810531),
    i = n(548965),
    a = n(942269),
    s = n(770335);
function o(e, t) {
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
            type: s.i.GUILD,
        };
    return n;
}
class l extends a.yW {
    static displayName = "RawGuildEmojiStore";
    database = this.addKKVDatabase("guild_emojis");
    stateWrapper() {
        return this.database;
    }
    getGuildEmojis(e) {
        return this.database.getNullablePartition(e);
    }
}
let u = new l(
    {
        LOGOUT: (e, t) => t.clear(),
        BACKGROUND_SYNC: (e, t) => t.clear(),
        CONNECTION_OPEN: (e, t) => {
            for (let n of (t.clear(), e.guilds))
                null != n.emojis.items && t.setPartition(n.id, o(n.id, n.emojis.items));
        },
        OVERLAY_INITIALIZE: (e, t) => {
            t.clear(),
                Object.entries(e.emojis).forEach((e) => {
                    let [n, r] = e;
                    t.setPartition(n, o(n, r));
                });
        },
        CACHED_EMOJIS_LOADED: (e, t) => {
            for (let [n, r] of e.emojis) t.setPartition(n, o(n, r));
        },
        GUILD_CREATE: (e, t) => {
            t.setPartition(e.guild.id, o(e.guild.id, e.guild.emojis.items ?? []));
        },
        GUILD_UPDATE: (e, t) => {
            t.setPartition(e.guild.id, o(e.guild.id, e.guild.emojis));
        },
        GUILD_EMOJIS_UPDATE: (e, t) => {
            t.setPartition(e.guildId, o(e.guildId, e.emojis));
        },
        GUILD_DELETE: (e, t) => {
            t.removePartition(e.guild.id);
        },
    },
    i.P4.getCachedBridgedStoreMode(),
);
