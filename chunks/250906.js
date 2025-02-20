function n(t, e, i) {
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
i.d(e, { Z: () => r }), i(47120), i(411104);
class r {
    drawInto(t, e, i, n) {
        (e %= this.frameCount), this.requireFrame(e);
        let [r, s, o, h] = a(e, this.frameWidth, this.frameHeight, this.cells);
        t.drawImage(this.canvas, r, s, o, h, 0, 0, i, n);
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
                [n, r, s, o] = a(t, this.frameWidth, this.frameHeight, this.cells);
            null === (e = this.context) || void 0 === e || e.putImageData(i, n, r, 0, 0, s, o);
        }
    }
    constructor(t, e, i, r) {
        n(this, 'key', void 0), n(this, 'canvas', void 0), n(this, 'context', void 0), n(this, 'cells', void 0), n(this, 'native', void 0), n(this, 'renderedFrames', void 0), n(this, 'frameWidth', void 0), n(this, 'frameHeight', void 0), n(this, 'frameRate', void 0), n(this, 'frameCount', void 0);
        let [a, s, o] = (function (t, e, i) {
            let n = Math.ceil(Math.sqrt(i));
            return [n, n * t, n * e];
        })(i, r, t.frames);
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
            (this.frameHeight = r),
            (this.frameRate = t.fps),
            (this.frameCount = t.frames),
            null == this.context)
        )
            throw Error("couldn't create 2d canvas context.");
    }
}
function a(t, e, i, n) {
    return [Math.floor(t / n) * e, (t % n) * i, e, i];
}
