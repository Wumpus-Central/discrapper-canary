"use strict";
n.d(t, { h9: () => s });
var r = n(626584);
try {
    n(
        Object(
            (function () {
                var e = Error("Cannot find module '@shopify/react-native-skia'");
                throw ((e.code = "MODULE_NOT_FOUND"), e);
            })(),
        ),
    ).Skia;
} catch (e) {}
let i = new r.A("AssetMap");
async function s(e) {
    let t = new a(),
        n = Object.entries(e).map((e) => {
            let [n, r] = e;
            return t.loadRemoteImage(n, r).catch((e) => i.warn("Failed to load canvas asset", e, n, r));
        });
    return await Promise.all(n), t;
}
class a {
    assets = {};
    fontManager;
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
}
