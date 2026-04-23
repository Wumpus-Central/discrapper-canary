"use strict";
n.d(t, { r: () => _ });
var i = n(626584);
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
let r = new i.A("AssetMap");
async function s(e) {
    let t = new a(),
        n = Object.entries(e).map((e) => {
            let [n, i] = e;
            return t.loadRemoteImage(n, i).catch((e) => r.warn("Failed to load canvas asset", e, n, i));
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
var o = n(284009),
    l = n.n(o);
class d {
    canvas;
    exporter;
    constructor(e, t) {
        (this.canvas = e), (this.exporter = t);
    }
    setExporter(e) {
        this.exporter = e;
    }
    export(e) {
        l()(
            null != this.exporter,
            "DiscordCanvas: Exporting the canvas requires a valid DiscordCanvasExporter to be initialized.",
        );
        let t = this.canvas.getCanvasForExport();
        return l()(null != t, "DiscordCanvas: Couldn't get a canvas for export."), this.exporter.exportCanvas(t, e);
    }
}
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
async function _(e) {
    let { assetsToLoad: t, drawImage: i, exportConfigs: r } = e,
        a = await s(t);
    await a.loadFonts();
    {
        let e = n(542889).A,
            t = n(684266).A,
            s = document.createElement("canvas"),
            o = new d(new e(s, a), new t());
        i(o.canvas);
        let l = await o.export(r);
        return s.remove(), l;
    }
}
