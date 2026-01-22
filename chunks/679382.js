n.d(t, {
    A: () => A,
});
var r,
    i = n(61090),
    a = n(311907),
    s = n(73153),
    o = n(723176),
    l = n(154049),
    c = n(351697),
    u = n(184989),
    d = n(71393),
    f = n(41237),
    p = n(514983);

function _(e, t, n) {
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
let h = 2,
    m = async () => {
        if (0 !== h) return;
        let e = o.A.database();
        if (null == e) return;
        h = 2;
        let t = await (0, l.ES)("StickerStore.loadSavedGuildStickers", () =>
            i.A.timeAsync("\uD83D\uDCBE", "loadSavedGuildStickers", () => c.A.getAsync(e)),
        );
        null != t &&
            s.h.dispatch({
                type: "CACHED_STICKERS_LOADED",
                stickers: t,
            });
    },
    g = (e) => {
        let { guilds: t } = e;
        h = +!!t.every((e) => null != e.stickers.items);
    },
    E = () => {
        h = 0;
    };

function b(e) {
    let { guild: t } = e;
    1 === h && "update" === t.stickers.op && null == t.stickers.items && (h = 0);
}
let y = () => {
    h = 0;
};
class O extends (r = a.Ay.Store) {
    initialize() {
        this.waitFor(u.A, f.A, d.A, p.A), this.syncWith([f.A, p.A], () => !0);
    }
    get isLoaded() {
        return 0 !== h;
    }
    get loadState() {
        return h;
    }
    getStickerMetadataArrays() {
        return m(), [f.A.getStickerMetadataMap(), p.A.getStickerMetadataMap()];
    }
    get hasLoadedStickerPacks() {
        return p.A.hasLoadedStickerPacks;
    }
    get isFetchingStickerPacks() {
        return p.A.isFetchingStickerPacks;
    }
    getStickerById(e) {
        var t;
        return m(), null != (t = f.A.getStickerById(e)) ? t : p.A.getStickerById(e);
    }
    getStickerPack(e) {
        return p.A.getStickerPack(e);
    }
    getPremiumPacks() {
        return p.A.getPremiumPacks();
    }
    isPremiumPack(e) {
        return p.A.isPremiumPack(e);
    }
    getRawStickersByGuild() {
        return f.A.getAllGuildStickers();
    }
    getAllGuildStickers() {
        return m(), f.A.getAllGuildStickers();
    }
    getAllPackStickers() {
        return p.A.getAllPackStickers();
    }
    getStickersByGuildId(e) {
        return m(), f.A.getStickersByGuildId(e);
    }
}
_(O, "displayName", "StickersStore");
let A = new O(s.h, {
    BACKGROUND_SYNC: E,
    CONNECTION_OPEN: g,
    GUILD_CREATE: b,
    LOGOUT: y,
});
