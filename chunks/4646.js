let r;
n.d(t, {
    ZP: () => c,
    k2: () => s,
}),
    n(388685);
var i = n(710845);
function a(e, t, n) {
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
try {
    r = n(
        Object(
            (function () {
                var e = Error("Cannot find module '@shopify/react-native-skia'");
                throw ((e.code = "MODULE_NOT_FOUND"), e);
            })(),
        ),
    ).Skia;
} catch (e) {
    r = null;
}
let o = new i.Z("AssetMap");
async function s(e) {
    let t = new l(),
        n = Object.entries(e).map((e) => {
            let [n, r] = e;
            return t.loadRemoteImage(n, r).catch((e) => o.warn("Failed to load canvas asset", e, n, r));
        });
    return await Promise.all(n), t;
}
class l {
    loadFonts() {
        return Promise.resolve();
    }
    async loadRemoteImage(e, t) {
        let n = new Image();
        return (n.src = t), (n.crossOrigin = "anonymous"), await n.decode(), (this.assets[e] = n), Promise.resolve();
    }
    get(e) {
        return this.assets[e];
    }
    has(e) {
        return null != this.assets[e];
    }
    constructor() {
        a(this, "assets", {}), a(this, "fontManager", void 0);
    }
}
let c = l;
