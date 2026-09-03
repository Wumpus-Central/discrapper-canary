n.d(t, { A: () => f });
var i = n(61090),
    r = n(17928),
    a = n(228366),
    s = n(723176),
    l = n(154049);
n(321073);
let o = new (n(626584).A)("GuildStickers"),
    d = new (class {
        async getAsync(e) {
            let t = performance.now(),
                n = await s.A.stickers(e).getMapEntries(),
                i = performance.now();
            return o.log(`asynchronously loaded in ${i - t}ms (guilds: ${n.length})`), n;
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
            for (let i of (s.A.stickersTransaction(t).deleteAllExcept(n), e.guilds)) this.handleOneGuildCreate(i, t);
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
                            ? (o.verbose(`Replacing ${e.entities.length} stickers for ${e.guildId}`),
                              this.replace(e.guildId, e.entities, t))
                            : (e.updatedEntities.length > 0 || e.deletedEntityIds.length > 0) &&
                              (o.verbose(
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
            s.A.stickersTransaction(n).replaceAll(e, t);
        }
        delete(e, t) {
            s.A.stickersTransaction(t).delete(e);
        }
        update(e, t, n, i) {
            let r = s.A.stickersTransaction(i);
            for (let i of (r.putAll(e, t), n)) r.delete(e, i);
        }
    })();
var c = n(184989),
    u = n(71393),
    _ = n(41237),
    E = n(514983);
let A = 1;
async function h() {
    if (0 !== A) return;
    let e = s.A.database();
    if (null == e) return;
    A = 1;
    let t = await (0, l.ES)("StickerStore.loadSavedGuildStickers", () =>
        i.A.timeAsync("\uD83D\uDCBE", "loadSavedGuildStickers", () => d.getAsync(e)),
    );
    null != t && a.h.dispatch({ type: "CACHED_STICKERS_LOADED", stickers: t });
}
class I extends r.Ay.Store {
    static displayName = "StickersStore";
    initialize() {
        this.waitFor(c.A, _.A, u.A, E.A), this.syncWith([_.A, E.A], () => !0);
    }
    get isLoaded() {
        return 0 !== A;
    }
    get loadState() {
        return A;
    }
    getStickerMetadataArrays() {
        return h(), [_.A.getStickerMetadataMap(), E.A.getStickerMetadataMap()];
    }
    get hasLoadedStickerPacks() {
        return E.A.hasLoadedStickerPacks;
    }
    get isFetchingStickerPacks() {
        return E.A.isFetchingStickerPacks;
    }
    getStickerById(e) {
        return h(), _.A.getStickerById(e) ?? E.A.getStickerById(e);
    }
    getStickerPack(e) {
        return E.A.getStickerPack(e);
    }
    getPremiumPacks() {
        return E.A.getPremiumPacks();
    }
    isPremiumPack(e) {
        return E.A.isPremiumPack(e);
    }
    getRawStickersByGuild() {
        return _.A.getAllGuildStickers();
    }
    getAllGuildStickers() {
        return h(), _.A.getAllGuildStickers();
    }
    getAllPackStickers() {
        return E.A.getAllPackStickers();
    }
    getStickersByGuildId(e) {
        return h(), _.A.getStickersByGuildId(e);
    }
}
let f = new I(a.h, {
    BACKGROUND_SYNC: function () {
        A = 0;
    },
    CONNECTION_OPEN: function (e) {
        let { guilds: t, unavailableGuilds: n } = e;
        A = 0 === n.length && t.every((e) => "full_sync" === e.stickers.op) ? 1 : 0;
    },
    LOGOUT: function () {
        A = 0;
    },
});
