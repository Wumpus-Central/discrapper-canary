n.d(t, { A: () => E }), n(321073);
var i = n(810531),
    r = n(7584),
    a = n(892842),
    s = n(137903),
    l = n(71393),
    o = n(194004);
function d(e) {
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
        [i.L]: "GuildSticker",
    };
}
function c(e) {
    let t = {};
    for (let n of e) t[n.id] = d(n);
    return t;
}
class u extends s.yW {
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
            for (let [i, a] of Object.entries(e[n].root))
                t.set(
                    i,
                    (function (e, t) {
                        let n = [],
                            { tags: i } = t,
                            a = { type: o.cG.STICKER_NAME, value: t.name.trim().toLocaleLowerCase() };
                        if ((n.push(a), null != i)) {
                            let t = { type: o.cG.TAG, value: i.trim().toLocaleLowerCase() };
                            n.push(t);
                            let a = l.A.getGuild(e);
                            if (null != a) {
                                let e = a.name.trim().toLocaleLowerCase();
                                null != e && "" !== e && n.push({ type: o.cG.GUILD_NAME, value: e });
                            }
                            let s = r.Ay.getByName(i);
                            null != s &&
                                (n.push({ type: o.cG.CORRELATED_EMOJI, value: s.surrogates }),
                                s.forEachDiversity((e) =>
                                    n.push({ type: o.cG.CORRELATED_EMOJI, value: e.surrogates }),
                                ));
                        }
                        return n;
                    })(n, a),
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
        let i = n.getNullablePartition(e);
        if (null == i) n.setPartition(e, c(t.writes));
        else if (t.writes.length > 0 || t.deletes.length > 0) {
            let r = { ...i };
            for (let e of t.deletes) delete r[e];
            for (let e of t.writes) r[e.id] = d(e);
            n.setPartition(e, r);
        }
    }
}
let E = new u(
    {
        LOGOUT: (e, t) => t.clear(),
        BACKGROUND_SYNC: (e, t) => t.clear(),
        RESET_SOCKET: (e, t) => t.clear(),
        CONNECTION_OPEN: (e, t) => {
            let { guilds: n, unavailableGuilds: i } = e,
                r = new Set(n.map((e) => e.id));
            for (let e of i) r.add(e);
            for (let e of t.getPartitionKeys()) r.has(e) || t.removePartition(e);
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
            t.setRecord(e.guildId, e.sticker.id, d(e.sticker));
        },
        GUILD_STICKER_FETCH_SUCCESS: (e, t) => {
            t.setRecord(e.sticker.guild_id, e.sticker.id, d(e.sticker));
        },
        GUILD_STICKERS_UPDATE: (e, t) => {
            let n = t.getPartition(e.guildId),
                i = c(e.stickers);
            if (null != n)
                for (let e in i) {
                    let t = i[e],
                        r = n[e];
                    null != r && null == t.user_id && null != r.user_id && (i[e] = { ...t, user_id: r.user_id });
                }
            t.setPartition(e.guildId, i);
        },
        CACHED_STICKERS_LOADED: (e, t) => {
            for (let [n, i] of e.stickers) t.setPartition(n, c(i));
        },
        GUILD_STICKERS_FETCH_SUCCESS: (e, t) => {
            t.setPartition(e.guildId, c(e.stickers));
        },
    },
    a.P4.getCachedBridgedStoreMode(),
);
