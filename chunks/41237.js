"use strict";
n.d(t, { A: () => f }), n(321073);
var r = n(810531),
    i = n(7584),
    a = n(548965),
    s = n(942269),
    o = n(71393),
    l = n(842086);
function u(e) {
    return {
        id: e.id,
        tags: e.tags,
        type: e.type,
        name: e.name,
        description: e.description,
        format_type: e.format_type,
        guild_id: e.guild_id,
        available: e.available,
        version: e.version,
        user_id: e.user_id,
        [r.L]: "GuildSticker",
    };
}
function c(e) {
    let t = {};
    for (let n of e) t[n.id] = u(n);
    return t;
}
function d(e, t) {
    let n = [],
        { tags: r } = t,
        a = { type: l.cG.STICKER_NAME, value: t.name.trim().toLocaleLowerCase() };
    if ((n.push(a), null != r)) {
        let t = { type: l.cG.TAG, value: r.trim().toLocaleLowerCase() };
        n.push(t);
        let a = o.A.getGuild(e);
        if (null != a) {
            let e = a.name.trim().toLocaleLowerCase();
            null != e && "" !== e && n.push({ type: l.cG.GUILD_NAME, value: e });
        }
        let s = i.Ay.getByName(r);
        null != s &&
            (n.push({ type: l.cG.CORRELATED_EMOJI, value: s.surrogates }),
            s.forEachDiversity((e) => n.push({ type: l.cG.CORRELATED_EMOJI, value: e.surrogates })));
    }
    return n;
}
class _ extends s.yW {
    static displayName = "GuildStickersStore";
    database = this.addKKVDatabase("guildStickers");
    stickerByIdIndex = this.database.addSecondaryKVIndex("id");
    getAllGuildStickers = this.database.memoized((e) => {
        let t = new Map();
        for (let n in e) {
            let r = n;
            t.set(r, Object.values(e[r].root));
        }
        return t;
    });
    getStickerMetadataMap = this.database.memoized((e) => {
        let t = new Map();
        for (let n in e) {
            let r = n;
            for (let [n, i] of Object.entries(e[r].root)) t.set(n, d(r, i));
        }
        return t;
    });
    getStickersByGuildId = this.database.memoizedPartition((e, t) => Object.values(t));
    getStickerById(e) {
        return this.stickerByIdIndex.get(e) ?? void 0;
    }
    stateWrapper() {
        return this.database;
    }
}
let f = new _(
    {
        LOGOUT: (e, t) => t.clear(),
        BACKGROUND_SYNC: (e, t) => t.clear(),
        CONNECTION_OPEN: (e, t) => {
            let n = new Set(t.getPartitionKeys());
            for (let r of e.guilds)
                n.delete(r.id), null != r.stickers.items && t.setPartition(r.id, c(r.stickers.items));
            for (let t of e.unavailableGuilds) n.delete(t);
            for (let e of n) t.removePartition(e);
        },
        GUILD_CREATE: (e, t) => {
            if (null == e.guild.joined_at || null == e.guild.stickers.items) return !1;
            t.setPartition(e.guild.id, c(e.guild.stickers.items ?? []));
        },
        GUILD_DELETE: (e, t) => {
            t.removePartition(e.guild.id);
        },
        GUILD_STICKERS_CREATE_SUCCESS: (e, t) => {
            t.setRecord(e.guildId, e.sticker.id, u(e.sticker));
        },
        GUILD_STICKER_FETCH_SUCCESS: (e, t) => {
            t.setRecord(e.sticker.guild_id, e.sticker.id, u(e.sticker));
        },
        GUILD_STICKERS_UPDATE: (e, t) => {
            let n = t.getPartition(e.guildId),
                r = c(e.stickers);
            if (null != n)
                for (let e in r) {
                    let t = r[e],
                        i = n[e];
                    null != i && null == t.user_id && null != i.user_id && (r[e] = { ...t, user_id: i.user_id });
                }
            t.setPartition(e.guildId, r);
        },
        CACHED_STICKERS_LOADED: (e, t) => {
            for (let [n, r] of e.stickers) t.setPartition(n, c(r));
        },
        GUILD_STICKERS_FETCH_SUCCESS: (e, t) => {
            t.setPartition(e.guildId, c(e.stickers));
        },
    },
    a.P4.getCachedBridgedStoreMode(),
);
