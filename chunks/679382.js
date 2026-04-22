"use strict";
n.d(t, { A: () => p });
var r = n(61090),
    i = n(311907),
    s = n(73153),
    a = n(723176),
    o = n(154049),
    l = n(351697),
    u = n(184989),
    d = n(71393),
    c = n(41237),
    _ = n(514983);
let f = 1,
    E = async () => {
        if (0 !== f) return;
        let e = a.A.database();
        if (null == e) return;
        f = 1;
        let t = await (0, o.ES)("StickerStore.loadSavedGuildStickers", () =>
            r.A.timeAsync("\uD83D\uDCBE", "loadSavedGuildStickers", () => l.A.getAsync(e)),
        );
        null != t && s.h.dispatch({ type: "CACHED_STICKERS_LOADED", stickers: t });
    };
class h extends i.Ay.Store {
    static displayName = "StickersStore";
    initialize() {
        this.waitFor(u.A, c.A, d.A, _.A), this.syncWith([c.A, _.A], () => !0);
    }
    get isLoaded() {
        return 0 !== f;
    }
    get loadState() {
        return f;
    }
    getStickerMetadataArrays() {
        return E(), [c.A.getStickerMetadataMap(), _.A.getStickerMetadataMap()];
    }
    get hasLoadedStickerPacks() {
        return _.A.hasLoadedStickerPacks;
    }
    get isFetchingStickerPacks() {
        return _.A.isFetchingStickerPacks;
    }
    getStickerById(e) {
        return E(), c.A.getStickerById(e) ?? _.A.getStickerById(e);
    }
    getStickerPack(e) {
        return _.A.getStickerPack(e);
    }
    getPremiumPacks() {
        return _.A.getPremiumPacks();
    }
    isPremiumPack(e) {
        return _.A.isPremiumPack(e);
    }
    getRawStickersByGuild() {
        return c.A.getAllGuildStickers();
    }
    getAllGuildStickers() {
        return E(), c.A.getAllGuildStickers();
    }
    getAllPackStickers() {
        return _.A.getAllPackStickers();
    }
    getStickersByGuildId(e) {
        return E(), c.A.getStickersByGuildId(e);
    }
}
let p = new h(s.h, {
    BACKGROUND_SYNC: () => {
        f = 0;
    },
    CONNECTION_OPEN: (e) => {
        let { guilds: t, unavailableGuilds: n } = e;
        f = 0 === n.length && t.every((e) => "full_sync" === e.stickers.op) ? 1 : 0;
    },
    LOGOUT: () => {
        f = 0;
    },
});
