"use strict";
n.d(t, { A: () => E }), n(321073);
var i = n(810531),
    r = n(137903),
    a = n(927813),
    s = n(194004);
let l = !1,
    o = null,
    d = a.A.Millis.HOUR;
function c(e) {
    return {
        id: e.id,
        tags: e.tags,
        type: e.type,
        name: e.name,
        description: e.description,
        format_type: e.format_type,
        pack_id: e.pack_id,
        [i.L]: "PackSticker",
    };
}
class u extends r.yW {
    static displayName = "StickersPackStore";
    packsDatabase = this.addKVDatabase("stickerPacks");
    packStickersDatabase = this.addKKVDatabase("packStickers");
    packStickerByIdIndex = this.packStickersDatabase.addSecondaryKVIndex("id");
    premiumPacksDatabase = this.addKVDatabase("premiumPacks");
    stateWrapper() {
        return {
            packsDatabase: this.packsDatabase,
            packStickersDatabase: this.packStickersDatabase,
            premiumPacksDatabase: this.premiumPacksDatabase,
            markDirty: () => this.markDirty(),
            clearAllDBs: () => this.clearAllDatabases(),
        };
    }
    getAllPackStickers = this.packStickersDatabase.memoized((e) => {
        let t = new Map();
        for (let n in e) t.set(n, Object.values(e[n].root));
        return t;
    });
    getStickerMetadataMap = this.packStickersDatabase.memoized((e) => {
        let t = new Map();
        for (let n in e)
            for (let [i, r] of Object.entries(e[n].root)) {
                let e = this.packsDatabase.get(n);
                t.set(
                    i,
                    (function (e, t) {
                        let n = [];
                        return (
                            n.push({ type: s.cG.STICKER_NAME, value: e.name.trim().toLocaleLowerCase() }),
                            null != t && n.push({ type: s.cG.PACK_NAME, value: t.name }),
                            n
                        );
                    })(r, e),
                );
            }
        return t;
    });
    get isFetchingStickerPacks() {
        return l;
    }
    get hasLoadedStickerPacks() {
        return null != o && o + d > performance.now();
    }
    getStickerById(e) {
        return this.packStickerByIdIndex.get(e);
    }
    isPremiumPack(e) {
        return null != this.premiumPacksDatabase.get(e);
    }
    getStickerPack(e) {
        return this.packsDatabase.get(e);
    }
    getPremiumPacks = this.premiumPacksDatabase.memoized((e) => Object.values(e));
}
function _(e, t, n, i, r) {
    n.set(e.id, e),
        r && i.set(e.id, e),
        t.setPartition(
            e.id,
            (function (e) {
                let t = {};
                for (let n of e) t[n.id] = c(n);
                return t;
            })(e.stickers),
        );
}
let E = new u({
    LOGOUT: (e, t) => {
        let { clearAllDBs: n } = t;
        n();
    },
    STICKER_PACK_FETCH_SUCCESS: (e, t) => {
        let { pack: n } = e,
            { packStickersDatabase: i, packsDatabase: r, premiumPacksDatabase: a } = t;
        _(n, i, r, a, !1);
    },
    STICKER_PACKS_FETCH_START: (e, t) => {
        let { markDirty: n } = t;
        (l = !0), n();
    },
    STICKER_PACKS_FETCH_SUCCESS: (e, t) => {
        let { packs: n } = e,
            { packStickersDatabase: i, packsDatabase: r, premiumPacksDatabase: a, markDirty: s } = t;
        for (let e of ((l = !1), s(), (o = performance.now()), n)) _(e, i, r, a, !0);
    },
    PACK_STICKER_FETCH_SUCCESS: (e, t) => {
        let { sticker: n } = e,
            { packStickersDatabase: i } = t;
        i.setRecord(n.pack_id, n.id, c(n));
    },
});
