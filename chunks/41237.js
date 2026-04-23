"use strict";
n.d(t, { A: () => f }), n(321073);
var r = n(810531),
    i = n(7584),
    s = n(548965),
    a = n(942269),
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
class d extends a.yW {
    static displayName = "GuildStickersStore";
    database = this.addKKVDatabase("guildStickers");
    stickerByIdIndex = this.database.addSecondaryKVIndex("id");
    getAllGuildStickers = this.database.memoized((e) => {
        let t = new Map();
        for (let n in e) t.set(n, Object.values(e[n].root));
        return t;
    });
    getStickerMetadataMap = this.database.memoized((e) => {
        let t = new Map();
        for (let n in e)
            for (let [r, s] of Object.entries(e[n].root))
                t.set(
                    r,
                    (function (e, t) {
                        let n = [],
                            { tags: r } = t,
                            s = { type: l.cG.STICKER_NAME, value: t.name.trim().toLocaleLowerCase() };
                        if ((n.push(s), null != r)) {
                            let t = { type: l.cG.TAG, value: r.trim().toLocaleLowerCase() };
                            n.push(t);
                            let s = o.A.getGuild(e);
                            if (null != s) {
                                let e = s.name.trim().toLocaleLowerCase();
                                null != e && "" !== e && n.push({ type: l.cG.GUILD_NAME, value: e });
                            }
                            let a = i.Ay.getByName(r);
                            null != a &&
                                (n.push({ type: l.cG.CORRELATED_EMOJI, value: a.surrogates }),
                                a.forEachDiversity((e) =>
                                    n.push({ type: l.cG.CORRELATED_EMOJI, value: e.surrogates }),
                                ));
                        }
                        return n;
                    })(n, s),
                );
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
function _(e, t, n) {
    if ("full_sync" === t.op) n.setPartition(e, c(t.items));
    else {
        let r = n.getNullablePartition(e);
        if (null == r) n.setPartition(e, c(t.writes));
        else if (t.writes.length > 0 || t.deletes.length > 0) {
            let i = { ...r };
            for (let e of t.deletes) delete i[e];
            for (let e of t.writes) i[e.id] = u(e);
            n.setPartition(e, i);
        }
    }
}
let f = new d(
    {
        LOGOUT: (e, t) => t.clear(),
        BACKGROUND_SYNC: (e, t) => t.clear(),
        RESET_SOCKET: (e, t) => t.clear(),
        CONNECTION_OPEN: (e, t) => {
            let { guilds: n, unavailableGuilds: r } = e,
                i = new Set(n.map((e) => e.id));
            for (let e of r) i.add(e);
            for (let e of t.getPartitionKeys()) i.has(e) || t.removePartition(e);
            for (let e of n) _(e.id, e.stickers, t);
        },
        GUILD_CREATE: (e, t) => {
            if (null == e.guild.joined_at) return !1;
            _(e.guild.id, e.guild.stickers, t);
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
    s.P4.getCachedBridgedStoreMode(),
);
