n.d(t, { Z: () => E }), n(388685), n(953529), n(781311), n(539854);
var r = n(732870),
    i = n(429091),
    a = n(70956),
    o = n(373228);
function s(e, t, n) {
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
let l = new Map(),
    c = new Map(),
    u = !1,
    d = null,
    f = a.Z.Millis.HOUR;
function p(e) {
    return {
        id: e.id,
        tags: e.tags,
        type: e.type,
        name: e.name,
        description: e.description,
        format_type: e.format_type,
        pack_id: e.pack_id,
        [r.O]: "PackSticker",
    };
}
function _(e) {
    let t = {};
    for (let n of e) t[n.id] = p(n);
    return t;
}
function m(e, t) {
    let n = [];
    return (
        n.push({
            type: o.MO.STICKER_NAME,
            value: e.name.trim().toLocaleLowerCase(),
        }),
        null != t &&
            n.push({
                type: o.MO.PACK_NAME,
                value: t.name,
            }),
        n
    );
}
class h extends i.d {
    get isFetchingStickerPacks() {
        return u;
    }
    get hasLoadedStickerPacks() {
        return null != d && d + f > performance.now();
    }
    isPremiumPack(e) {
        return c.has(e);
    }
    getStickerPack(e) {
        return l.get(e);
    }
    constructor(...e) {
        super(...e),
            s(
                this,
                "getAllPackStickers",
                this.memoized((e) => {
                    let t = new Map();
                    for (let n in e) t.set(n, Object.values(e[n].root));
                    return t;
                }),
            ),
            s(
                this,
                "getStickerMetadataMap",
                this.memoized((e) => {
                    let t = new Map();
                    for (let n in e)
                        for (let [r, i] of Object.entries(e[n].root)) {
                            let e = l.get(n);
                            t.set(r, m(i, e));
                        }
                    return t;
                }),
            ),
            s(this, "getStickerById", this.memoizedSecondaryIndex()),
            s(
                this,
                "getPremiumPacks",
                this.memoized((e) => Array.from(c.values())),
            );
    }
}
function g(e, t, n) {
    l.set(e.id, e), n && c.set(e.id, e), t.setPartition(e.id, _(e.stickers));
}
s(h, "displayName", "StickersPackStore");
let E = new h(
    {
        LOGOUT: (e, t) => {
            l.clear(), c.clear(), t.reset();
        },
        STICKER_PACK_FETCH_SUCCESS: (e, t) => {
            let { pack: n } = e;
            g(n, t, !1);
        },
        STICKER_PACKS_FETCH_START: (e, t) => {
            u = !0;
        },
        STICKER_PACKS_FETCH_SUCCESS: (e, t) => {
            let { packs: n } = e;
            for (let e of ((u = !1), (d = performance.now()), n)) g(e, t, !0);
        },
        PACK_STICKER_FETCH_SUCCESS: (e, t) => {
            let { sticker: n } = e;
            t.set(n.pack_id, n.id, p(n));
        },
    },
    "typescript",
);
