"use strict";
n.d(t, { r: () => u });
var l = n(626584);
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
let i = new l.A("AssetMap");
async function s(e) {
    let t = new a(),
        n = Object.entries(e).map((e) => {
            let [n, l] = e;
            return t.loadRemoteImage(n, l).catch((e) => i.warn("Failed to load canvas asset", e, n, l));
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
var r = n(284009),
    o = n.n(r);
class c {
    canvas;
    exporter;
    constructor(e, t) {
        (this.canvas = e), (this.exporter = t);
    }
    setExporter(e) {
        this.exporter = e;
    }
    export(e) {
        o()(
            null != this.exporter,
            "DiscordCanvas: Exporting the canvas requires a valid DiscordCanvasExporter to be initialized.",
        );
        let t = this.canvas.getCanvasForExport();
        return o()(null != t, "DiscordCanvas: Couldn't get a canvas for export."), this.exporter.exportCanvas(t, e);
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
async function u(e) {
    let { assetsToLoad: t, drawImage: l, exportConfigs: i } = e,
        a = await s(t);
    await a.loadFonts();
    {
        let e = n(542889).A,
            t = n(684266).A,
            s = document.createElement("canvas"),
            r = new c(new e(s, a), new t());
        l(r.canvas);
        let o = await r.export(i);
        return s.remove(), o;
    }
}
