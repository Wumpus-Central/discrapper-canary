n.d(t, {
    A: () => m,
}),
    n(228524),
    n(896048),
    n(733351),
    n(321073);
var r = n(810531),
    i = n(7584),
    a = n(942269),
    o = n(71393),
    s = n(842086);

function l(e, t, n) {
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

function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}

function u(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function f(e) {
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

function p(e) {
    let t = {};
    for (let n of e) t[n.id] = f(n);
    return t;
}

function _(e, t) {
    let n = [],
        { tags: r } = t,
        a = {
            type: s.cG.STICKER_NAME,
            value: t.name.trim().toLocaleLowerCase(),
        };
    if ((n.push(a), null != r)) {
        let t = {
            type: s.cG.TAG,
            value: r.trim().toLocaleLowerCase(),
        };
        n.push(t);
        let a = o.A.getGuild(e);
        if (null != a) {
            let e = a.name.trim().toLocaleLowerCase();
            null != e &&
                "" !== e &&
                n.push({
                    type: s.cG.GUILD_NAME,
                    value: e,
                });
        }
        let l = i.Ay.getByName(r);
        null != l &&
            (n.push({
                type: s.cG.CORRELATED_EMOJI,
                value: l.surrogates,
            }),
            l.forEachDiversity((e) =>
                n.push({
                    type: s.cG.CORRELATED_EMOJI,
                    value: e.surrogates,
                }),
            ));
    }
    return n;
}
class h extends a.yW {
    getStickerById(e) {
        var t;
        return null != (t = this.stickerByIdIndex.get(e)) ? t : void 0;
    }
    stateWrapper() {
        return this.database;
    }
    constructor(...e) {
        super(...e),
            l(this, "database", this.addKKVDatabase("guildStickers")),
            l(this, "stickerByIdIndex", this.database.addSecondaryKVIndex("id")),
            l(
                this,
                "getAllGuildStickers",
                this.database.memoized((e) => {
                    let t = new Map();
                    for (let n in e) {
                        let r = n;
                        t.set(r, Object.values(e[r].root));
                    }
                    return t;
                }),
            ),
            l(
                this,
                "getStickerMetadataMap",
                this.database.memoized((e) => {
                    let t = new Map();
                    for (let n in e) {
                        let r = n;
                        for (let [n, i] of Object.entries(e[r].root)) t.set(n, _(r, i));
                    }
                    return t;
                }),
            ),
            l(
                this,
                "getStickersByGuildId",
                this.database.memoizedPartition((e, t) => Object.values(t)),
            );
    }
}
l(h, "displayName", "GuildStickersStore");
let m = new h({
    LOGOUT: (e, t) => t.clear(),
    BACKGROUND_SYNC: (e, t) => t.clear(),
    CONNECTION_OPEN: (e, t) => {
        let n = new Set(t.getPartitionKeys());
        for (let r of e.guilds) n.delete(r.id), null != r.stickers.items && t.setPartition(r.id, p(r.stickers.items));
        for (let t of e.unavailableGuilds) n.delete(t);
        for (let e of n) t.removePartition(e);
    },
    GUILD_CREATE: (e, t) => {
        var n;
        if (null == e.guild.joined_at || null == e.guild.stickers.items) return !1;
        t.setPartition(e.guild.id, p(null != (n = e.guild.stickers.items) ? n : []));
    },
    GUILD_DELETE: (e, t) => {
        t.removePartition(e.guild.id);
    },
    GUILD_STICKERS_CREATE_SUCCESS: (e, t) => {
        t.setRecord(e.guildId, e.sticker.id, f(e.sticker));
    },
    GUILD_STICKER_FETCH_SUCCESS: (e, t) => {
        t.setRecord(e.sticker.guild_id, e.sticker.id, f(e.sticker));
    },
    GUILD_STICKERS_UPDATE: (e, t) => {
        let n = t.getPartition(e.guildId),
            r = p(e.stickers);
        if (null != n)
            for (let e in r) {
                let t = r[e],
                    i = n[e];
                null != i &&
                    null == t.user_id &&
                    null != i.user_id &&
                    (r[e] = d(c({}, t), {
                        user_id: i.user_id,
                    }));
            }
        t.setPartition(e.guildId, r);
    },
    CACHED_STICKERS_LOADED: (e, t) => {
        for (let [n, r] of e.stickers) t.setPartition(n, p(r));
    },
    GUILD_STICKERS_FETCH_SUCCESS: (e, t) => {
        t.setPartition(e.guildId, p(e.stickers));
    },
});
