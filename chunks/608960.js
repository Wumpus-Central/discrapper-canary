n.d(t, {
    A: () => c,
}),
    n(896048);
var r = n(810531),
    i = n(952526),
    a = n(770335);

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
class l extends i.U {
    getGuildEmojis(e) {
        return this.getNullablePartition(e);
    }
}
s(l, "displayName", "RawGuildEmojiStore");
let c = new l({
    LOGOUT: (e, t) => t.reset(),
    BACKGROUND_SYNC: (e, t) => t.reset(),
    CONNECTION_OPEN: (e, t) => {
        t.reset((t) => {
            for (let n of e.guilds) null != n.emojis.items && (t[n.id] = o(n.id, n.emojis.items));
        });
    },
    OVERLAY_INITIALIZE: (e, t) => {
        t.reset((t) => {
            Object.entries(e.emojis).forEach((e) => {
                let [n, r] = e;
                t[n] = o(n, r);
            });
        });
    },
    CACHED_EMOJIS_LOADED: (e, t) => {
        for (let [n, r] of e.emojis) t.setPartition(n, o(n, r));
    },
    GUILD_CREATE: (e, t) => {
        var n;
        t.setPartition(e.guild.id, o(e.guild.id, null != (n = e.guild.emojis.items) ? n : []));
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
});
