"use strict";
n.d(t, { A: () => v });
var i = n(181370),
    r = n.n(i),
    s = n(17928),
    a = n(228366),
    o = n(439372),
    l = n(723176);
let u = new (class {
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
var c = n(626584),
    d = n(159273),
    _ = n(750385),
    h = n(734057),
    f = n(317525),
    p = n(71393),
    E = n(935208),
    m = n(617710);
let g = new c.A("EntityVersionsManager");
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
    let t = p.A.getGuild(e.guild_id)?.name;
    g.fileOnly(`received deleted guild entities (id: ${e.guild_id}, name: ${t})`),
        s.Ay.Emitter.batched(() => {
            var t, n, i, r, s, o, l, u;
            let c, p, m, A, I;
            null != e.channels &&
                ((t = e.guild_id),
                (n = new Set(e.channels)),
                (c = E.default.keys(h.A.getMutableBasicGuildChannelsForGuild(t))),
                g.fileOnly("syncChannels", { channelIdsInMemory: c, channelIdsFromServer: n }),
                c.forEach((e) => {
                    n.has(e) ||
                        a.h.dispatch({ type: "CHANNEL_DELETE", channel: { guild_id: t, id: e, parent_id: void 0 } });
                })),
                null != e.roles &&
                    ((i = e.guild_id),
                    (r = new Set(e.roles)),
                    E.default.keys(f.A.getUnsafeMutableRoles(i)).forEach((e) => {
                        r.has(e) || a.h.dispatch({ type: "GUILD_ROLE_DELETE", guildId: i, roleId: e });
                    })),
                null != e.emojis &&
                    ((s = e.guild_id),
                    (o = new Set(e.emojis)),
                    (m = (p = d.Ay.getGuildEmoji(s)).filter((e) => o.has(e.id))),
                    p.length !== m.length && a.h.dispatch({ type: "GUILD_EMOJIS_UPDATE", guildId: s, emojis: m })),
                null != e.stickers &&
                    ((l = e.guild_id),
                    (u = new Set(e.stickers)),
                    (I = (A = _.A.getStickersByGuildId(l) ?? []).filter((e) => u.has(e.id))),
                    A.length !== I.length && a.h.dispatch({ type: "GUILD_STICKERS_UPDATE", guildId: l, stickers: I }));
        });
}
function T() {
    u.getAll().then((e) => {
        e.forEach((e) => y(e));
    });
}
function S(e) {
    let { guild: t } = e;
    t.unableToSyncDeletes && y(t.id);
}
function y(e) {
    setTimeout(
        () => {
            var t;
            let n, i, r, s, a;
            return (
                (t = e),
                (n = p.A.getGuild(t)?.name),
                g.fileOnly(`requesting deleted guild entities (id: ${t}, name: ${n})`),
                (i = N(Object.keys(h.A.getMutableBasicGuildChannelsForGuild(t)))),
                (r = N(f.A.getSortedRoles(t).map((e) => e.id))),
                (s = N(d.Ay.getGuildEmoji(t).map((e) => e.id))),
                (a = N(_.A.getStickersByGuildId(t)?.map((e) => e.id) ?? [])),
                void m.A.getSocket().getDeletedEntityIdsNotMatchingHash(t, i, r, s, a)
            );
        },
        Math.ceil(2e3 * Math.random()),
    );
}
function N(e) {
    return r().v3(e.sort().join(",")).toString();
}
let v = new A();
