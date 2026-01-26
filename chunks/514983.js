n.d(t, {
    A: () => E,
}),
    n(896048),
    n(228524),
    n(733351),
    n(321073);
var r = n(810531),
    i = n(952526),
    a = n(927813),
    s = n(842086);

function o(e, t, n) {
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
    f = a.A.Millis.HOUR;

function p(e) {
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

function _(e) {
    let t = {};
    for (let n of e) t[n.id] = p(n);
    return t;
}

function h(e, t) {
    let n = [];
    return (
        n.push({
            type: s.cG.STICKER_NAME,
            value: e.name.trim().toLocaleLowerCase(),
        }),
        null != t &&
            n.push({
                type: s.cG.PACK_NAME,
                value: t.name,
            }),
        n
    );
}
class m extends i.U {
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
            o(
                this,
                "getAllPackStickers",
                this.memoized((e) => {
                    let t = new Map();
                    for (let n in e) t.set(n, Object.values(e[n].root));
                    return t;
                }),
            ),
            o(
                this,
                "getStickerMetadataMap",
                this.memoized((e) => {
                    let t = new Map();
                    for (let n in e)
                        for (let [r, i] of Object.entries(e[n].root)) {
                            let e = l.get(n);
                            t.set(r, h(i, e));
                        }
                    return t;
                }),
            ),
            o(this, "getStickerById", this.memoizedSecondaryIndex()),
            o(
                this,
                "getPremiumPacks",
                this.memoized((e) => Array.from(c.values())),
            );
    }
}

function g(e, t, n) {
    l.set(e.id, e), n && c.set(e.id, e), t.setPartition(e.id, _(e.stickers));
}
o(m, "displayName", "StickersPackStore");
let E = new m({
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
});
