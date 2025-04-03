n.d(t, { Z: () => i });
var r = n(512722),
    a = n.n(r);
function l(e, t, n) {
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
class i {
    setExporter(e) {
        this.exporter = e;
    }
    export(e) {
        a()(null != this.exporter, 'DiscordCanvas: Exporting the canvas requires a valid DiscordCanvasExporter to be initialized.');
        let t = this.canvas.getCanvasForExport();
        return a()(null != t, "DiscordCanvas: Couldn't get a canvas for export."), this.exporter.exportCanvas(t, e);
    }
    constructor(e, t) {
        l(this, 'canvas', void 0), l(this, 'exporter', void 0), (this.canvas = e), (this.exporter = t);
    }
}
