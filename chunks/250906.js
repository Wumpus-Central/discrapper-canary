function r(e, t, i) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = i),
        e
    );
}
i.d(t, { Z: () => n }), i(47120), i(411104);
class n {
    drawInto(e, t, i, r) {
        (t %= this.frameCount), this.requireFrame(t);
        let [n, s, o, h] = a(t, this.frameWidth, this.frameHeight, this.cells);
        e.drawImage(this.canvas, n, s, o, h, 0, 0, i, r);
    }
    drop() {
        var e;
        null == (e = this.native) || e.drop(), (this.native = null);
    }
    requireFrame(e) {
        null != this.native && (this.renderedFrames.has(e) || (this.paint(e), this.renderedFrames.add(e)), this.renderedFrames.size === this.frameCount && this.drop());
    }
    paint(e) {
        if (null != this.native) {
            var t;
            let i = new ImageData(this.native.get_bgra(e, this.frameWidth, this.frameHeight), this.frameWidth, this.frameHeight),
                [r, n, s, o] = a(e, this.frameWidth, this.frameHeight, this.cells);
            null == (t = this.context) || t.putImageData(i, r, n, 0, 0, s, o);
        }
    }
    constructor(e, t, i, n) {
        r(this, 'key', void 0), r(this, 'canvas', void 0), r(this, 'context', void 0), r(this, 'cells', void 0), r(this, 'native', void 0), r(this, 'renderedFrames', void 0), r(this, 'frameWidth', void 0), r(this, 'frameHeight', void 0), r(this, 'frameRate', void 0), r(this, 'frameCount', void 0);
        let [a, s, o] = (function (e, t, i) {
            let r = Math.ceil(Math.sqrt(i));
            return [r, r * e, r * t];
        })(i, n, e.frames);
        if (
            ((this.key = t),
            (this.canvas = (function (e, t) {
                if ('function' == typeof OffscreenCanvas) return new OffscreenCanvas(e, t);
                let i = document.createElement('canvas');
                return (i.width = e), (i.height = t), i;
            })(s, o)),
            (this.context = this.canvas.getContext('2d')),
            (this.cells = a),
            (this.native = e),
            (this.renderedFrames = new Set()),
            (this.frameWidth = i),
            (this.frameHeight = n),
            (this.frameRate = e.fps),
            (this.frameCount = e.frames),
            null == this.context)
        )
            throw Error("couldn't create 2d canvas context.");
    }
}
function a(e, t, i, r) {
    return [Math.floor(e / r) * t, (e % r) * i, t, i];
}
