"use strict";
n.d(t, { A: () => c });
var r = n(810531),
    i = n(548965),
    s = n(942269),
    a = n(770335);
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
            type: a.i.GUILD,
        };
    return n;
}
class l extends s.yW {
    static displayName = "RawGuildEmojiStore";
    database = this.addKKVDatabase("guild_emojis");
    stateWrapper() {
        return this.database;
    }
    getGuildEmojis(e) {
        return this.database.getNullablePartition(e);
    }
}
function u(e, t, n) {
    if ("full_sync" === t.op) n.setPartition(e, o(e, t.items));
    else {
        let r = n.getNullablePartition(e);
        if (null == r) n.setPartition(e, o(e, t.writes));
        else if (t.writes.length > 0 || t.deletes.length > 0) {
            let i = { ...r };
            for (let e of t.deletes) delete i[e];
            for (let n of t.writes) Object.assign(i, o(e, [n]));
            n.setPartition(e, i);
        }
    }
}
let c = new l(
    {
        LOGOUT: (e, t) => t.clear(),
        BACKGROUND_SYNC: (e, t) => t.clear(),
        RESET_SOCKET: (e, t) => t.clear(),
        CONNECTION_OPEN: (e, t) => {
            let { guilds: n, unavailableGuilds: r } = e,
                i = new Set(n.map((e) => e.id));
            for (let e of r) i.add(e);
            for (let e of t.getPartitionKeys()) i.has(e) || t.removePartition(e);
            for (let e of n) u(e.id, e.emojis, t);
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
            u(e.guild.id, e.guild.emojis, t);
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
