n.d(t, { Z: () => a });
var r = n(512722),
    i = n.n(r);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
class a {
    setExporter(e) {
        this.exporter = e;
    }
    export(e) {
        i()(null != this.exporter, 'DiscordCanvas: Exporting the canvas requires a valid DiscordCanvasExporter to be initialized.');
        let t = this.canvas.getCanvasForExport();
        return i()(null != t, "DiscordCanvas: Couldn't get a canvas for export."), this.exporter.exportCanvas(t, e);
    }
    constructor(e, t) {
        o(this, 'canvas', void 0), o(this, 'exporter', void 0), (this.canvas = e), (this.exporter = t);
    }
}
