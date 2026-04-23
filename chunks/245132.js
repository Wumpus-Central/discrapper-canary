let r, n, a, s, o, h, l, c, u, m, d;
var f,
    p,
    v = i(284009),
    I = i.n(v);
i(321073);
class g {
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
    constructor(e, t, i, r) {
        const [n, a, s] = (function (e, t, i) {
            let r = Math.ceil(Math.sqrt(i));
            return [r, r * e, r * t];
        })(i, r, e.frames);
        if (
            ((this.key = t),
            (this.canvas = (function (e, t) {
                if ("function" == typeof OffscreenCanvas) return new OffscreenCanvas(e, t);
                let i = document.createElement("canvas");
                return (i.width = e), (i.height = t), i;
            })(a, s)),
            (this.context = this.canvas.getContext("2d")),
            (this.cells = n),
            (this.native = e),
            (this.renderedFrames = new Set()),
            (this.frameWidth = i),
            (this.frameHeight = r),
            (this.frameRate = e.fps),
            (this.frameCount = e.frames),
            null == this.context)
        )
            throw Error("couldn't create 2d canvas context.");
    }
    drawInto(e, t, i, r) {
        (t %= this.frameCount), this.requireFrame(t);
        let [n, a, s, o] = w(t, this.frameWidth, this.frameHeight, this.cells);
        e.drawImage(this.canvas, n, a, s, o, 0, 0, i, r);
    }
    drop() {
        this.native?.drop(), (this.native = null);
    }
    requireFrame(e) {
        null != this.native &&
            (this.renderedFrames.has(e) || (this.paint(e), this.renderedFrames.add(e)),
            this.renderedFrames.size === this.frameCount && this.drop());
    }
    paint(e) {
        if (null != this.native) {
            let t = new ImageData(
                    this.native.get_bgra(e, this.frameWidth, this.frameHeight),
                    this.frameWidth,
                    this.frameHeight,
                ),
                [i, r, n, a] = w(e, this.frameWidth, this.frameHeight, this.cells);
            this.context?.putImageData(t, i, r, 0, 0, n, a);
        }
    }
}
function w(e, t, i, r) {
    return [Math.floor(e / r) * t, (e % r) * i, t, i];
}
i(393431), i(532706), i(42231), i(232424), i(949626), i(767709), i(65162);
let A =
    ((f = async () => {
        let e = await i.e("45082").then(i.bind(i, 145025)),
            t = await e.default();
        (a = t.cwrap("lottie_create", "number", ["string"])),
            (s = t._lottie_destroy),
            (o = t._lottie_draw_into_bgra),
            (h = t._lottie_draw_into_rgba),
            (l = t._lottie_frame_count),
            (c = t._lottie_frame_rate),
            (u = t._memory_create),
            (r = t),
            (n = u(409600));
    }),
    (m = 0),
    (d = []),
    async function () {
        if (2 !== m) {
            if (1 === m)
                return new Promise((e) => {
                    d.push(e);
                });
            for (m = 1, await f(), m = 2; d.length > 0; ) d.shift()?.();
        }
    });
function F(e, t) {
    return new Uint8ClampedArray(r.HEAPU8.buffer, n, e * t * 4);
}
class y {
    native;
    constructor(e) {
        if (((this.native = a(e)), 0 === this.native))
            throw Error("couldn't create wasm lottie. potentially bad json.");
    }
    get fps() {
        return c(this.native);
    }
    get frames() {
        return l(this.native);
    }
    get_bgra(e, t, i) {
        return (
            I()(t <= 320, "width exceeds static allocation."),
            I()(i <= 320, "height exceeds static allocation."),
            o(this.native, n, e, t, i),
            F(t, i)
        );
    }
    get_rgba(e, t, i) {
        return (
            I()(t <= 320, "width exceeds static allocation."),
            I()(i <= 320, "height exceeds static allocation."),
            h(this.native, n, e, t, i),
            F(t, i)
        );
    }
    drop() {
        s(this.native);
    }
}
async function b(e, t, i, r, n) {
    let a = n;
    if (null == a) {
        let e = await fetch(r);
        if (!e.ok) throw Error(`Error fetching sticker at ${r}`);
        a = await e.text();
    }
    return null == a ? null : (await A(), new g(new y(a), e, t, i));
}
let k = new (class {
        entries;
        referenceCounts;
        constructor() {
            (this.entries = []), (this.referenceCounts = new Map());
        }
        create(e, t, i, r, n) {
            let a = !(arguments.length > 5) || void 0 === arguments[5] || arguments[5];
            return this.getCached(e).then((s) => {
                if ((this.referenceCounts.set(e, (this.referenceCounts.get(e) ?? 0) + 1), s)) return s;
                let o = { key: e, promise: b(e, t, i, r, n) };
                return (
                    a &&
                        (this.entries.push(o),
                        o.promise.then((t) => (null == t && this.removeEntry(e), t)).catch((t) => this.removeEntry(e)),
                        this.entries.length > 50 && this.removeEntryAt(0)),
                    o.promise
                );
            });
        }
        drop(e) {
            this.removeEntry(e);
        }
        getCached(e) {
            let t = this.entries.findIndex((t) => t.key === e);
            if (t >= 0) {
                let e = this.entries[t];
                return (
                    this.entries.splice(t, 1),
                    this.entries.push(e),
                    e.promise.then((e) => (null == e && this.removeEntryAt(t), e))
                );
            }
            return Promise.resolve(null);
        }
        removeEntry(e) {
            let t = this.entries.findIndex((t) => t.key === e);
            if (!(t >= 0)) return null;
            this.removeEntryAt(t);
        }
        removeEntryAt(e) {
            let t = this.entries[e],
                i = this.referenceCounts.get(t.key);
            return null != i && i > 1
                ? (this.referenceCounts.set(t.key, i - 1), null)
                : (this.entries.splice(e, 1), this.referenceCounts.delete(t.key), t.promise.then((e) => e?.drop()), t);
        }
    })(),
    C = "u" > typeof WorkerGlobalScope && self instanceof WorkerGlobalScope;
class E {
    canvas;
    canvasContext;
    animation = null;
    dropped;
    currentFrame;
    currentFrameTime;
    frameDuration;
    key;
    animate;
    visible;
    requestAnimationFrameId;
    hasInitialFrame;
    onInitialDraw;
    onError;
    constructor({
        canvas: e,
        id: t,
        assetUrl: i,
        assetData: r,
        isVisible: n,
        shouldAnimate: a,
        onInitialDraw: s,
        onError: o,
    }) {
        const h = e.getContext("2d");
        I()(null != h, "couldn't get canvas 2d context."),
            (this.canvas = e),
            (this.canvasContext = h),
            (this.animation = null),
            (this.dropped = !1),
            (this.currentFrame = 0),
            (this.currentFrameTime = 0),
            (this.frameDuration = 1e3),
            (this.animate = a),
            (this.visible = n),
            (this.requestAnimationFrameId = null),
            (this.hasInitialFrame = !1),
            (this.onInitialDraw = s),
            (this.onError = o),
            (this.key = `${t}:${e.width}:${e.height}`),
            k
                .create(this.key, e.width, e.height, i, r)
                .then((e) => {
                    null != e &&
                        (this.dropped
                            ? k.drop(this.key)
                            : ((this.animation = e),
                              (this.frameDuration = 1e3 / e.frameRate),
                              this.scheduleOrCancelTick()));
                })
                .catch((e) => {
                    o?.();
                });
    }
    setState(e, t) {
        null != t && (e || t === this.currentFrame || this.draw(t), (this.currentFrame = t)),
            e && !this.animate && this.resumeAnimation(),
            (this.animate = e),
            this.scheduleOrCancelTick();
    }
    setVisibility(e) {
        let t = this.visible;
        (this.visible = e), this.visible && !t && this.resumeAnimation(), this.scheduleOrCancelTick();
    }
    resumeAnimation() {
        this.currentFrameTime = performance.now();
    }
    onInitialAnimationTick = (e) => {
        (this.requestAnimationFrameId = null),
            (performance.now() - e < 30 || C) &&
                this.draw(0) &&
                (this.resumeAnimation(), this.onInitialDraw?.(), (this.hasInitialFrame = !0)),
            this.scheduleOrCancelTick();
    };
    onAnimationTick = (e) => {
        this.requestAnimationFrameId = null;
        let t = performance.now(),
            i = Math.floor(((C ? t : e) - this.currentFrameTime) / this.frameDuration);
        i > 0 &&
            ((t - e < 12 || C) && (this.draw(this.currentFrame), (this.currentFrame += i)),
            (this.currentFrameTime += i * this.frameDuration)),
            this.scheduleOrCancelTick();
    };
    clear() {
        this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    draw(e) {
        return (
            null != this.animation &&
            (this.clear(), this.animation.drawInto(this.canvasContext, e, this.canvas.width, this.canvas.height), !0)
        );
    }
    drop() {
        (this.animate = !1),
            this.scheduleOrCancelTick(),
            k.drop(this.key),
            (this.animation = null),
            (this.dropped = !0);
    }
    scheduleOrCancelTick() {
        this.dropped ||
            (this.hasInitialFrame
                ? this.requestAnimationFrame(this.animate && this.visible ? this.onAnimationTick : null)
                : this.requestAnimationFrame(this.onInitialAnimationTick));
    }
    requestAnimationFrame(e) {
        null != e && null == this.requestAnimationFrameId && (this.requestAnimationFrameId = requestAnimationFrame(e)),
            null != e &&
                null != this.requestAnimationFrameId &&
                (cancelAnimationFrame(this.requestAnimationFrameId),
                (this.requestAnimationFrameId = requestAnimationFrame(e))),
            null == e &&
                null != this.requestAnimationFrameId &&
                (cancelAnimationFrame(this.requestAnimationFrameId), (this.requestAnimationFrameId = null));
    }
}
var _ =
    (((p = {})[(p.DROP = 0)] = "DROP"),
    (p[(p.INITIALIZE = 1)] = "INITIALIZE"),
    (p[(p.VISIBILITY_CHANGE = 2)] = "VISIBILITY_CHANGE"),
    (p[(p.STATE_CHANGE = 3)] = "STATE_CHANGE"),
    (p[(p.FIRST_DRAW = 4)] = "FIRST_DRAW"),
    (p[(p.ERROR = 5)] = "ERROR"),
    p);
let T = new Map();
self.addEventListener("message", (e) => {
    let { data: t } = e;
    switch (t.type) {
        case _.INITIALIZE:
            ((e) => {
                let {
                        canvas: t,
                        canvasId: i,
                        animationId: r,
                        assetUrl: n,
                        assetData: a,
                        isVisible: s,
                        shouldAnimate: o,
                    } = e,
                    h = new E({
                        canvas: t,
                        id: r,
                        assetUrl: n,
                        assetData: a,
                        isVisible: s,
                        shouldAnimate: o,
                        onInitialDraw: () => {
                            self.postMessage({ type: _.FIRST_DRAW, canvasId: i });
                        },
                        onError: () => {
                            self.postMessage({ type: _.ERROR, canvasId: i });
                        },
                    });
                T.set(i, h);
            })(t);
            break;
        case _.DROP:
            ((e) => {
                let { canvasId: t } = e;
                T.get(t)?.drop(), T.delete(t);
            })(t);
            break;
        case _.VISIBILITY_CHANGE:
            ((e) => {
                let { canvasId: t, isVisible: i } = e;
                T.get(t)?.setVisibility(i);
            })(t);
            break;
        case _.STATE_CHANGE:
            ((e) => {
                let { canvasId: t, shouldAnimate: i, nextFrame: r } = e;
                T.get(t)?.setState(i, r);
            })(t);
    }
});
