function r(t, e, i) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = i),
        t
    );
}
i.d(e, { Z: () => n }), i(47120), i(411104);
class n {
    drawInto(t, e, i, r) {
        (e %= this.frameCount), this.requireFrame(e);
        let [n, s, o, u] = a(e, this.frameWidth, this.frameHeight, this.cells);
        t.drawImage(this.canvas, n, s, o, u, 0, 0, i, r);
    }
    drop() {
        var t;
        null === (t = this.native) || void 0 === t || t.drop(), (this.native = null);
    }
    requireFrame(t) {
        null != this.native && (this.renderedFrames.has(t) || (this.paint(t), this.renderedFrames.add(t)), this.renderedFrames.size === this.frameCount && this.drop());
    }
    paint(t) {
        if (null != this.native) {
            var e;
            let i = new ImageData(this.native.get_bgra(t, this.frameWidth, this.frameHeight), this.frameWidth, this.frameHeight),
                [r, n, s, o] = a(t, this.frameWidth, this.frameHeight, this.cells);
            null === (e = this.context) || void 0 === e || e.putImageData(i, r, n, 0, 0, s, o);
        }
    }
    constructor(t, e, i, n) {
        r(this, 'key', void 0), r(this, 'canvas', void 0), r(this, 'context', void 0), r(this, 'cells', void 0), r(this, 'native', void 0), r(this, 'renderedFrames', void 0), r(this, 'frameWidth', void 0), r(this, 'frameHeight', void 0), r(this, 'frameRate', void 0), r(this, 'frameCount', void 0);
        let [a, s, o] = (function (t, e, i) {
            let r = Math.ceil(Math.sqrt(i));
            return [r, r * t, r * e];
        })(i, n, t.frames);
        if (
            ((this.key = e),
            (this.canvas = (function (t, e) {
                if ('function' == typeof OffscreenCanvas) return new OffscreenCanvas(t, e);
                let i = document.createElement('canvas');
                return (i.width = t), (i.height = e), i;
            })(s, o)),
            (this.context = this.canvas.getContext('2d')),
            (this.cells = a),
            (this.native = t),
            (this.renderedFrames = new Set()),
            (this.frameWidth = i),
            (this.frameHeight = n),
            (this.frameRate = t.fps),
            (this.frameCount = t.frames),
            null == this.context)
        )
            throw Error("couldn't create 2d canvas context.");
    }
}
function a(t, e, i, r) {
    return [Math.floor(t / r) * e, (t % r) * i, e, i];
}
