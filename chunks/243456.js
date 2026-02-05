i.d(e, { A: () => n });
class n {
    key;
    canvas;
    context;
    cells;
    native;
    renderedFrames;
    frameWidth;
    frameHeight;
    frameRate;
    frameCount;
    constructor(t, e, i, n) {
        const [r, a, s] = (function (t, e, i) {
            let n = Math.ceil(Math.sqrt(i));
            return [n, n * t, n * e];
        })(i, n, t.frames);
        if (
            ((this.key = e),
            (this.canvas = (function (t, e) {
                if ("function" == typeof OffscreenCanvas) return new OffscreenCanvas(t, e);
                let i = document.createElement("canvas");
                return (i.width = t), (i.height = e), i;
            })(a, s)),
            (this.context = this.canvas.getContext("2d")),
            (this.cells = r),
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
    drawInto(t, e, i, n) {
        (e %= this.frameCount), this.requireFrame(e);
        let [a, s, h, o] = r(e, this.frameWidth, this.frameHeight, this.cells);
        t.drawImage(this.canvas, a, s, h, o, 0, 0, i, n);
    }
    drop() {
        this.native?.drop(), (this.native = null);
    }
    requireFrame(t) {
        null != this.native &&
            (this.renderedFrames.has(t) || (this.paint(t), this.renderedFrames.add(t)),
            this.renderedFrames.size === this.frameCount && this.drop());
    }
    paint(t) {
        if (null != this.native) {
            let e = new ImageData(
                    this.native.get_bgra(t, this.frameWidth, this.frameHeight),
                    this.frameWidth,
                    this.frameHeight,
                ),
                [i, n, a, s] = r(t, this.frameWidth, this.frameHeight, this.cells);
            this.context?.putImageData(e, i, n, 0, 0, a, s);
        }
    }
}
function r(t, e, i, n) {
    return [Math.floor(t / n) * e, (t % n) * i, e, i];
}
