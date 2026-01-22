function n(t, e, i) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (t[e] = i),
        t
    );
}
i.d(e, {
    A: () => r,
}),
    i(896048),
    i(65821);
class r {
    drawInto(t, e, i, n) {
        (e %= this.frameCount), this.requireFrame(e);
        let [r, s, h, o] = a(e, this.frameWidth, this.frameHeight, this.cells);
        t.drawImage(this.canvas, r, s, h, o, 0, 0, i, n);
    }
    drop() {
        var t;
        null == (t = this.native) || t.drop(), (this.native = null);
    }
    requireFrame(t) {
        null != this.native &&
            (this.renderedFrames.has(t) || (this.paint(t), this.renderedFrames.add(t)),
            this.renderedFrames.size === this.frameCount && this.drop());
    }
    paint(t) {
        if (null != this.native) {
            var e;
            let i = new ImageData(
                    this.native.get_bgra(t, this.frameWidth, this.frameHeight),
                    this.frameWidth,
                    this.frameHeight,
                ),
                [n, r, s, h] = a(t, this.frameWidth, this.frameHeight, this.cells);
            null == (e = this.context) || e.putImageData(i, n, r, 0, 0, s, h);
        }
    }
    constructor(t, e, i, r) {
        n(this, "key", void 0),
            n(this, "canvas", void 0),
            n(this, "context", void 0),
            n(this, "cells", void 0),
            n(this, "native", void 0),
            n(this, "renderedFrames", void 0),
            n(this, "frameWidth", void 0),
            n(this, "frameHeight", void 0),
            n(this, "frameRate", void 0),
            n(this, "frameCount", void 0);
        const [a, s, h] = (function (t, e, i) {
            let n = Math.ceil(Math.sqrt(i));
            return [n, n * t, n * e];
        })(i, r, t.frames);
        if (
            ((this.key = e),
            (this.canvas = (function (t, e) {
                if ("function" == typeof OffscreenCanvas) return new OffscreenCanvas(t, e);
                let i = document.createElement("canvas");
                return (i.width = t), (i.height = e), i;
            })(s, h)),
            (this.context = this.canvas.getContext("2d")),
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
