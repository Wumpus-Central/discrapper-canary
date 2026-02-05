"use strict";
n.d(t, { A: () => h }), n(321073);
var r = n(810531),
    i = n(942269),
    a = n(927813),
    s = n(842086);
let o = !1,
    l = null,
    u = a.A.Millis.HOUR;
function c(e) {
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
function d(e) {
    let t = {};
    for (let n of e) t[n.id] = c(n);
    return t;
}
function _(e, t) {
    let n = [];
    return (
        n.push({ type: s.cG.STICKER_NAME, value: e.name.trim().toLocaleLowerCase() }),
        null != t && n.push({ type: s.cG.PACK_NAME, value: t.name }),
        n
    );
}
class f extends i.yW {
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
        for (let n in e) {
            let r = n;
            for (let [n, i] of Object.entries(e[r].root)) {
                let e = this.packsDatabase.get(r);
                t.set(n, _(i, e));
            }
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
function p(e, t, n, r, i) {
    n.set(e.id, e), i && r.set(e.id, e), t.setPartition(e.id, d(e.stickers));
}
let h = new f({
    LOGOUT: (e, t) => {
        let { clearAllDBs: n } = t;
        n();
    },
    STICKER_PACK_FETCH_SUCCESS: (e, t) => {
        let { pack: n } = e,
            { packStickersDatabase: r, packsDatabase: i, premiumPacksDatabase: a } = t;
        p(n, r, i, a, !1);
    },
    STICKER_PACKS_FETCH_START: (e, t) => {
        let { markDirty: n } = t;
        (o = !0), n();
    },
    STICKER_PACKS_FETCH_SUCCESS: (e, t) => {
        let { packs: n } = e,
            { packStickersDatabase: r, packsDatabase: i, premiumPacksDatabase: a, markDirty: s } = t;
        for (let e of ((o = !1), s(), (l = performance.now()), n)) p(e, r, i, a, !0);
    },
    PACK_STICKER_FETCH_SUCCESS: (e, t) => {
        let { sticker: n } = e,
            { packStickersDatabase: r } = t;
        r.setRecord(n.pack_id, n.id, c(n));
    },
});
