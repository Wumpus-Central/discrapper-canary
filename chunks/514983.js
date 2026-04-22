"use strict";
n.d(t, { A: () => f }), n(321073);
var r = n(810531),
    i = n(942269),
    s = n(927813),
    a = n(842086);
let o = !1,
    l = null,
    u = s.A.Millis.HOUR;
function d(e) {
    return {
        id: e.id,
        tags: e.tags,
        type: e.type,
        name: e.name,
        description: e.description,
        format_type: e.format_type,
        pack_id: e.pack_id,
        [r.L]: "PackSticker",
    };
}
class c extends i.yW {
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
            for (let [r, i] of Object.entries(e[n].root)) {
                let e = this.packsDatabase.get(n);
                t.set(
                    r,
                    (function (e, t) {
                        let n = [];
                        return (
                            n.push({ type: a.cG.STICKER_NAME, value: e.name.trim().toLocaleLowerCase() }),
                            null != t && n.push({ type: a.cG.PACK_NAME, value: t.name }),
                            n
                        );
                    })(i, e),
                );
            }
        return t;
    });
    get isFetchingStickerPacks() {
        return o;
    }
    get hasLoadedStickerPacks() {
        return null != l && l + u > performance.now();
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
function _(e, t, n, r, i) {
    n.set(e.id, e),
        i && r.set(e.id, e),
        t.setPartition(
            e.id,
            (function (e) {
                let t = {};
                for (let n of e) t[n.id] = d(n);
                return t;
            })(e.stickers),
        );
}
let f = new c({
    LOGOUT: (e, t) => {
        let { clearAllDBs: n } = t;
        n();
    },
    STICKER_PACK_FETCH_SUCCESS: (e, t) => {
        let { pack: n } = e,
            { packStickersDatabase: r, packsDatabase: i, premiumPacksDatabase: s } = t;
        _(n, r, i, s, !1);
    },
    STICKER_PACKS_FETCH_START: (e, t) => {
        let { markDirty: n } = t;
        (o = !0), n();
    },
    STICKER_PACKS_FETCH_SUCCESS: (e, t) => {
        let { packs: n } = e,
            { packStickersDatabase: r, packsDatabase: i, premiumPacksDatabase: s, markDirty: a } = t;
        for (let e of ((o = !1), a(), (l = performance.now()), n)) _(e, r, i, s, !0);
    },
    PACK_STICKER_FETCH_SUCCESS: (e, t) => {
        let { sticker: n } = e,
            { packStickersDatabase: r } = t;
        r.setRecord(n.pack_id, n.id, d(n));
    },
});
