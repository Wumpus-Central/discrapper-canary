"use strict";
n.d(t, { A: () => O });
var i = n(181370),
    r = n.n(i),
    a = n(17928),
    s = n(228366),
    l = n(439372),
    o = n(723176);
let d = new (class {
    actions = {
        BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
        CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
        GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
        DELETED_ENTITY_IDS: (e, t) => this.handleDeletedEntityIds(e, t),
    };
    async getAll() {
        let e = o.A.guildsRequiringDeletedIdsSync();
        return null == e ? new Set() : new Set((await e.getMany()).map((e) => e.id));
    }
    handleConnectionOpen(e, t) {
        let { guilds: n } = e,
            i = n.filter((e) => e.unableToSyncDeletes).map((e) => ({ id: e.id }));
        i.length > 0 && o.A.guildsRequiringDeletedIdsSyncTransaction(t).putAll(i);
    }
    handleBackgroundSync(e, t) {
        let { guilds: n } = e,
            i = n.filter((e) => "partial" === e.data_mode && e.unable_to_sync_deletes).map((e) => ({ id: e.id }));
        i.length > 0 && o.A.guildsRequiringDeletedIdsSyncTransaction(t).putAll(i);
    }
    handleGuildCreate(e, t) {
        let { guild: n } = e;
        n.unableToSyncDeletes && o.A.guildsRequiringDeletedIdsSyncTransaction(t).put({ id: n.id });
    }
    handleDeletedEntityIds(e, t) {
        o.A.guildsRequiringDeletedIdsSyncTransaction(t).delete(e.guild_id);
    }
    resetInMemoryState() {}
})();
var c = n(626584),
    u = n(236285),
    _ = n(750385),
    E = n(734057),
    A = n(317525),
    h = n(71393),
    I = n(935208),
    f = n(597643);
let p = new c.A("EntityVersionsManager");
class T extends l.A {
    actions = { GUILD_CREATE: S, DELETED_ENTITY_IDS: m };
    _initialize() {
        s.h.subscribe("CONNECTION_OPEN", g);
    }
    _terminate() {
        s.h.unsubscribe("CONNECTION_OPEN", g);
    }
}
function m(e) {
    let t = h.A.getGuild(e.guild_id)?.name;
    p.fileOnly(`received deleted guild entities (id: ${e.guild_id}, name: ${t})`),
        a.Ay.Emitter.batched(() => {
            var t, n, i, r, a, l, o, d;
            let c, h, f, T, m;
            null != e.channels &&
                ((t = e.guild_id),
                (n = new Set(e.channels)),
                (c = I.default.keys(E.A.getMutableBasicGuildChannelsForGuild(t))),
                p.fileOnly("syncChannels", { channelIdsInMemory: c, channelIdsFromServer: n }),
                c.forEach((e) => {
                    n.has(e) ||
                        s.h.dispatch({ type: "CHANNEL_DELETE", channel: { guild_id: t, id: e, parent_id: void 0 } });
                })),
                null != e.roles &&
                    ((i = e.guild_id),
                    (r = new Set(e.roles)),
                    I.default.keys(A.A.getUnsafeMutableRoles(i)).forEach((e) => {
                        r.has(e) || s.h.dispatch({ type: "GUILD_ROLE_DELETE", guildId: i, roleId: e });
                    })),
                null != e.emojis &&
                    ((a = e.guild_id),
                    (l = new Set(e.emojis)),
                    (f = (h = u.Ay.getGuildEmoji(a)).filter((e) => l.has(e.id))),
                    h.length !== f.length && s.h.dispatch({ type: "GUILD_EMOJIS_UPDATE", guildId: a, emojis: f })),
                null != e.stickers &&
                    ((o = e.guild_id),
                    (d = new Set(e.stickers)),
                    (m = (T = _.A.getStickersByGuildId(o) ?? []).filter((e) => d.has(e.id))),
                    T.length !== m.length && s.h.dispatch({ type: "GUILD_STICKERS_UPDATE", guildId: o, stickers: m }));
        });
}
function g() {
    d.getAll().then((e) => {
        e.forEach((e) => N(e));
    });
}
function S(e) {
    let { guild: t } = e;
    t.unableToSyncDeletes && N(t.id);
}
function N(e) {
    setTimeout(
        () => {
            var t;
            let n, i, r, a, s;
            return (
                (t = e),
                (n = h.A.getGuild(t)?.name),
                p.fileOnly(`requesting deleted guild entities (id: ${t}, name: ${n})`),
                (i = C(Object.keys(E.A.getMutableBasicGuildChannelsForGuild(t)))),
                (r = C(A.A.getSortedRoles(t).map((e) => e.id))),
                (a = C(u.Ay.getGuildEmoji(t).map((e) => e.id))),
                (s = C(_.A.getStickersByGuildId(t)?.map((e) => e.id) ?? [])),
                void f.A.getSocket().getDeletedEntityIdsNotMatchingHash(t, i, r, a, s)
            );
        },
        Math.ceil(2e3 * Math.random()),
    );
}
function C(e) {
    return r().v3(e.sort().join(",")).toString();
}
let O = new T();
