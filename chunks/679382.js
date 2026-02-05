"use strict";
n.d(t, { A: () => I });
var r = n(61090),
    i = n(311907),
    a = n(73153),
    s = n(723176),
    o = n(154049),
    l = n(351697),
    u = n(184989),
    c = n(71393),
    d = n(41237),
    _ = n(514983);
let f = 2,
    p = async () => {
        if (0 !== f) return;
        let e = s.A.database();
        if (null == e) return;
        f = 2;
        let t = await (0, o.ES)("StickerStore.loadSavedGuildStickers", () =>
            r.A.timeAsync("\uD83D\uDCBE", "loadSavedGuildStickers", () => l.A.getAsync(e)),
        );
        null != t && a.h.dispatch({ type: "CACHED_STICKERS_LOADED", stickers: t });
    },
    h = (e) => {
        let { guilds: t } = e;
        f = +!!t.every((e) => null != e.stickers.items);
    },
    m = () => {
        f = 0;
    };
function g(e) {
    let { guild: t } = e;
    1 === f && "update" === t.stickers.op && null == t.stickers.items && (f = 0);
}
let E = () => {
    f = 0;
};
class A extends i.Ay.Store {
    static displayName = "StickersStore";
    initialize() {
        this.waitFor(u.A, d.A, c.A, _.A), this.syncWith([d.A, _.A], () => !0);
    }
    get isLoaded() {
        return 0 !== f;
    }
    get loadState() {
        return f;
    }
    getStickerMetadataArrays() {
        return p(), [d.A.getStickerMetadataMap(), _.A.getStickerMetadataMap()];
    }
    get hasLoadedStickerPacks() {
        return _.A.hasLoadedStickerPacks;
    }
    get isFetchingStickerPacks() {
        return _.A.isFetchingStickerPacks;
    }
    getStickerById(e) {
        return p(), d.A.getStickerById(e) ?? _.A.getStickerById(e);
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
        return d.A.getAllGuildStickers();
    }
    getAllGuildStickers() {
        return p(), d.A.getAllGuildStickers();
    }
    getAllPackStickers() {
        return _.A.getAllPackStickers();
    }
    getStickersByGuildId(e) {
        return p(), d.A.getStickersByGuildId(e);
    }
}
let I = new A(a.h, { BACKGROUND_SYNC: m, CONNECTION_OPEN: h, GUILD_CREATE: g, LOGOUT: E });
