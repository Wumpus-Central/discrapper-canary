t.d(n, {
    Z: function () {
        return o;
    }
});
var i = t(512722),
    l = t.n(i);
function r(e, n, t) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = t),
        e
    );
}
class o {
    setExporter(e) {
        this.exporter = e;
    }
    export(e) {
        l()(null != this.exporter, 'DiscordCanvas: Exporting the canvas requires a valid DiscordCanvasExporter to be initialized.');
        let n = this.canvas.getCanvasForExport();
        return l()(null != n, "DiscordCanvas: Couldn't get a canvas for export."), this.exporter.exportCanvas(n, e);
    }
    constructor(e, n) {
        r(this, 'canvas', void 0), r(this, 'exporter', void 0), (this.canvas = e), (this.exporter = n);
    }
}
