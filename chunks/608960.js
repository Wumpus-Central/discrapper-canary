n.d(t, { A: () => u });
var i = n(810531),
    r = n(548965),
    l = n(137903),
    a = n(770335);
function s(e, t) {
    let n = {};
    for (let r of t)
        n[r.id] = {
            [i.L]: "RawGuildEmoji",
            guildId: e,
            id: r.id,
            animated: r.animated,
            name: r.name,
            require_colons: r.require_colons,
            available: r.available,
            roles: r.roles,
            managed: r.managed,
            version: r.version,
            type: a.i.GUILD,
        };
    return n;
}
class o extends l.yW {
    static displayName = "RawGuildEmojiStore";
    database = this.addKKVDatabase("guild_emojis");
    stateWrapper() {
        return this.database;
    }
    getGuildEmojis(e) {
        return this.database.getNullablePartition(e);
    }
}
function d(e, t, n) {
    if ("full_sync" === t.op) n.setPartition(e, s(e, t.items));
    else {
        let i = n.getNullablePartition(e);
        if (null == i) n.setPartition(e, s(e, t.writes));
        else if (t.writes.length > 0 || t.deletes.length > 0) {
            let r = { ...i };
            for (let e of t.deletes) delete r[e];
            for (let n of t.writes) Object.assign(r, s(e, [n]));
            n.setPartition(e, r);
        }
    }
}
let u = new o(
    {
        LOGOUT: (e, t) => t.clear(),
        BACKGROUND_SYNC: (e, t) => t.clear(),
        RESET_SOCKET: (e, t) => t.clear(),
        CONNECTION_OPEN: (e, t) => {
            let { guilds: n, unavailableGuilds: i } = e,
                r = new Set(n.map((e) => e.id));
            for (let e of i) r.add(e);
            for (let e of t.getPartitionKeys()) r.has(e) || t.removePartition(e);
            for (let e of n) d(e.id, e.emojis, t);
        },
        OVERLAY_INITIALIZE: (e, t) => {
            t.clear(),
                Object.entries(e.emojis).forEach((e) => {
                    let [n, i] = e;
                    t.setPartition(n, s(n, i));
                });
        },
        CACHED_EMOJIS_LOADED: (e, t) => {
            for (let [n, i] of e.emojis) t.setPartition(n, s(n, i));
        },
        GUILD_CREATE: (e, t) => {
            d(e.guild.id, e.guild.emojis, t);
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
    },
    r.P4.getCachedBridgedStoreMode(),
);
