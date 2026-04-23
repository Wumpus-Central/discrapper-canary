"use strict";
n.d(t, { A: () => R });
var i = n(181370),
    r = n.n(i),
    s = n(17928),
    a = n(228366),
    o = n(439372),
    l = n(723176);
let d = new (class {
    actions = {
        BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
        CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
        GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
        DELETED_ENTITY_IDS: (e, t) => this.handleDeletedEntityIds(e, t),
    };
    async getAll() {
        let e = l.A.guildsRequiringDeletedIdsSync();
        return null == e ? new Set() : new Set((await e.getMany()).map((e) => e.id));
    }
    handleConnectionOpen(e, t) {
        let { guilds: n } = e,
            i = n.filter((e) => e.unableToSyncDeletes).map((e) => ({ id: e.id }));
        i.length > 0 && l.A.guildsRequiringDeletedIdsSyncTransaction(t).putAll(i);
    }
    handleBackgroundSync(e, t) {
        let { guilds: n } = e,
            i = n.filter((e) => "partial" === e.data_mode && e.unable_to_sync_deletes).map((e) => ({ id: e.id }));
        i.length > 0 && l.A.guildsRequiringDeletedIdsSyncTransaction(t).putAll(i);
    }
    handleGuildCreate(e, t) {
        let { guild: n } = e;
        n.unableToSyncDeletes && l.A.guildsRequiringDeletedIdsSyncTransaction(t).put({ id: n.id });
    }
    handleDeletedEntityIds(e, t) {
        l.A.guildsRequiringDeletedIdsSyncTransaction(t).delete(e.guild_id);
    }
    resetInMemoryState() {}
})();
var _ = n(626584),
    u = n(159273),
    c = n(750385),
    E = n(734057),
    h = n(317525),
    m = n(71393),
    f = n(935208),
    g = n(366853);
let p = new _.A("EntityVersionsManager");
class A extends o.A {
    actions = { GUILD_CREATE: S, DELETED_ENTITY_IDS: I };
    _initialize() {
        a.h.subscribe("CONNECTION_OPEN", T);
    }
    _terminate() {
        a.h.unsubscribe("CONNECTION_OPEN", T);
    }
}
function I(e) {
    let t = m.A.getGuild(e.guild_id)?.name;
    p.fileOnly(`received deleted guild entities (id: ${e.guild_id}, name: ${t})`),
        s.Ay.Emitter.batched(() => {
            var t, n, i, r, s, o, l, d;
            let _, m, g, A, I;
            null != e.channels &&
                ((t = e.guild_id),
                (n = new Set(e.channels)),
                (_ = f.default.keys(E.A.getMutableBasicGuildChannelsForGuild(t))),
                p.fileOnly("syncChannels", { channelIdsInMemory: _, channelIdsFromServer: n }),
                _.forEach((e) => {
                    n.has(e) ||
                        a.h.dispatch({ type: "CHANNEL_DELETE", channel: { guild_id: t, id: e, parent_id: void 0 } });
                })),
                null != e.roles &&
                    ((i = e.guild_id),
                    (r = new Set(e.roles)),
                    f.default.keys(h.A.getUnsafeMutableRoles(i)).forEach((e) => {
                        r.has(e) || a.h.dispatch({ type: "GUILD_ROLE_DELETE", guildId: i, roleId: e });
                    })),
                null != e.emojis &&
                    ((s = e.guild_id),
                    (o = new Set(e.emojis)),
                    (g = (m = u.Ay.getGuildEmoji(s)).filter((e) => o.has(e.id))),
                    m.length !== g.length && a.h.dispatch({ type: "GUILD_EMOJIS_UPDATE", guildId: s, emojis: g })),
                null != e.stickers &&
                    ((l = e.guild_id),
                    (d = new Set(e.stickers)),
                    (I = (A = c.A.getStickersByGuildId(l) ?? []).filter((e) => d.has(e.id))),
                    A.length !== I.length && a.h.dispatch({ type: "GUILD_STICKERS_UPDATE", guildId: l, stickers: I }));
        });
}
function T() {
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
            let n, i, r, s, a;
            return (
                (t = e),
                (n = m.A.getGuild(t)?.name),
                p.fileOnly(`requesting deleted guild entities (id: ${t}, name: ${n})`),
                (i = C(Object.keys(E.A.getMutableBasicGuildChannelsForGuild(t)))),
                (r = C(h.A.getSortedRoles(t).map((e) => e.id))),
                (s = C(u.Ay.getGuildEmoji(t).map((e) => e.id))),
                (a = C(c.A.getStickersByGuildId(t)?.map((e) => e.id) ?? [])),
                void g.A.getSocket().getDeletedEntityIdsNotMatchingHash(t, i, r, s, a)
            );
        },
        Math.ceil(2e3 * Math.random()),
    );
}
function C(e) {
    return r().v3(e.sort().join(",")).toString();
}
let R = new A();
