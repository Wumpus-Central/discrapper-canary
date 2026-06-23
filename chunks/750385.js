"use strict";
n.d(t, { A: () => m });
var i = n(61090),
    r = n(17928),
    s = n(228366),
    a = n(723176),
    o = n(154049);
n(321073);
let l = new (n(626584).A)("GuildStickers"),
    u = new (class {
        async getAsync(e) {
            let t = performance.now(),
                n = await a.A.stickers(e).getMapEntries(),
                i = performance.now();
            return l.log(`asynchronously loaded in ${i - t}ms (guilds: ${n.length})`), n;
        }
        actions = {
            BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
            CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
            GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
            GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
            GUILD_STICKERS_UPDATE: (e, t) => this.handleGuildStickersUpdate(e, t),
            GUILD_UPDATE: (e, t) => this.handleGuildUpdate(e, t),
        };
        handleConnectionOpen(e, t) {
            let n = [...e.guilds.map((e) => e.id), ...e.unavailableGuilds];
            for (let i of (a.A.stickersTransaction(t).deleteAllExcept(n), e.guilds)) this.handleOneGuildCreate(i, t);
        }
        handleGuildCreate(e, t) {
            this.handleOneGuildCreate(e.guild, t);
        }
        handleGuildUpdate(e, t) {
            this.replace(e.guild.id, e.guild.stickers, t);
        }
        handleGuildDelete(e, t) {
            this.delete(e.guild.id, t);
        }
        handleGuildStickersUpdate(e, t) {
            this.replace(e.guildId, e.stickers, t);
        }
        handleBackgroundSync(e, t) {
            e.promisesForBackgroundSyncToWaitOn.push(
                Promise.all(
                    e.stickers.map((e) => {
                        if ("unavailable" === e.dataMode) return Promise.resolve();
                        "full" === e.dataMode
                            ? (l.verbose(`Replacing ${e.entities.length} stickers for ${e.guildId}`),
                              this.replace(e.guildId, e.entities, t))
                            : (e.updatedEntities.length > 0 || e.deletedEntityIds.length > 0) &&
                              (l.verbose(
                                  `Updating ${e.updatedEntities.length} and deleting ${e.deletedEntityIds.length} stickers for ${e.guildId}`,
                              ),
                              this.update(e.guildId, e.updatedEntities, e.deletedEntityIds, t));
                    }),
                ),
            );
        }
        handleOneGuildCreate(e, t) {
            let { id: n, stickers: i } = e;
            switch (i.op) {
                case "full_sync":
                    this.replace(n, i.items, t);
                    break;
                case "update":
                    this.update(n, i.writes, i.deletes, t);
            }
        }
        resetInMemoryState() {}
        replace(e, t, n) {
            a.A.stickersTransaction(n).replaceAll(e, t);
        }
        delete(e, t) {
            a.A.stickersTransaction(t).delete(e);
        }
        update(e, t, n, i) {
            let r = a.A.stickersTransaction(i);
            for (let i of (r.putAll(e, t), n)) r.delete(e, i);
        }
    })();
var c = n(184989),
    d = n(71393),
    _ = n(41237),
    h = n(514983);
let f = 1;
async function p() {
    if (0 !== f) return;
    let e = a.A.database();
    if (null == e) return;
    f = 1;
    let t = await (0, o.ES)("StickerStore.loadSavedGuildStickers", () =>
        i.A.timeAsync("\uD83D\uDCBE", "loadSavedGuildStickers", () => u.getAsync(e)),
    );
    null != t && s.h.dispatch({ type: "CACHED_STICKERS_LOADED", stickers: t });
}
class E extends r.Ay.Store {
    static displayName = "StickersStore";
    initialize() {
        this.waitFor(c.A, _.A, d.A, h.A), this.syncWith([_.A, h.A], () => !0);
    }
    get isLoaded() {
        return 0 !== f;
    }
    get loadState() {
        return f;
    }
    getStickerMetadataArrays() {
        return p(), [_.A.getStickerMetadataMap(), h.A.getStickerMetadataMap()];
    }
    get hasLoadedStickerPacks() {
        return h.A.hasLoadedStickerPacks;
    }
    get isFetchingStickerPacks() {
        return h.A.isFetchingStickerPacks;
    }
    getStickerById(e) {
        return p(), _.A.getStickerById(e) ?? h.A.getStickerById(e);
    }
    getStickerPack(e) {
        return h.A.getStickerPack(e);
    }
    getPremiumPacks() {
        return h.A.getPremiumPacks();
    }
    isPremiumPack(e) {
        return h.A.isPremiumPack(e);
    }
    getRawStickersByGuild() {
        return _.A.getAllGuildStickers();
    }
    getAllGuildStickers() {
        return p(), _.A.getAllGuildStickers();
    }
    getAllPackStickers() {
        return h.A.getAllPackStickers();
    }
    getStickersByGuildId(e) {
        return p(), _.A.getStickersByGuildId(e);
    }
}
let m = new E(s.h, {
    BACKGROUND_SYNC: function () {
        f = 0;
    },
    CONNECTION_OPEN: function (e) {
        let { guilds: t, unavailableGuilds: n } = e;
        f = 0 === n.length && t.every((e) => "full_sync" === e.stickers.op) ? 1 : 0;
    },
    LOGOUT: function () {
        f = 0;
    },
});
