n.d(t, { Z: () => v }), n(388685), n(781311), n(539854);
var r = n(732870),
    i = n(429091),
    a = n(70956),
    o = n(373228),
    s = n(378233);
function l(e, t, n) {
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
function c(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                l(e, t, n[t]);
            });
    }
    return e;
}
function u(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let f = new Map(),
    _ = new Map(),
    p = !1,
    h = null,
    m = a.Z.Millis.HOUR;
function g(e) {
    return d(c({}, e), { [r.O]: "PackSticker" });
}
function E(e) {
    let t = {};
    for (let n of e) t[n.id] = g(n);
    return t;
}
function b(e, t) {
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
class y extends i.d {
    get isFetchingStickerPacks() {
        return p;
    }
    get hasLoadedStickerPacks() {
        return null != h && h + m > performance.now();
    }
    isPremiumPack(e) {
        return _.has(e);
    }
    getStickerPack(e) {
        return f.get(e);
    }
    constructor(...e) {
        super(...e),
            l(
                this,
                "getAllPackStickers",
                this.memoized((e) => {
                    let t = new Map();
                    for (let n in e) t.set(n, Object.values(e[n].root));
                    return t;
                }),
            ),
            l(
                this,
                "getStickerMetadataMap",
                this.memoized((e) => {
                    let t = new Map();
                    for (let n in e)
                        for (let [r, i] of Object.entries(e[n].root)) {
                            let e = f.get(n);
                            t.set(r, b(i, e));
                        }
                    return t;
                }),
            ),
            l(this, "getStickerById", this.memoizedSecondaryIndex()),
            l(
                this,
                "getPremiumPacks",
                this.memoized((e) => Array.from(_.values())),
            );
    }
}
function O(e, t, n) {
    f.set(e.id, e), n && _.set(e.id, e), t.setPartition(e.id, E(e.stickers));
}
l(y, "displayName", "StickersPackStore");
let v = new y(
    {
        LOGOUT: (e, t) => {
            f.clear(), _.clear(), t.reset();
        },
        STICKER_PACK_FETCH_SUCCESS: (e, t) => {
            let { pack: n } = e;
            O(n, t, !1);
        },
        STICKER_PACKS_FETCH_START: (e, t) => {
            p = !0;
        },
        STICKER_PACKS_FETCH_SUCCESS: (e, t) => {
            let { packs: n } = e;
            for (let e of ((p = !1), (h = performance.now()), n)) O(e, t, !0);
        },
        STICKER_FETCH_SUCCESS: (e, t) => {
            let { sticker: n } = e;
            if (!(0, s.jl)(n)) return !1;
            t.set(n.pack_id, n.id, g(n));
        },
    },
    "typescript",
);
