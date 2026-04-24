"use strict";
n.d(t, { A: () => u });
var l = n(284009),
    i = n.n(l),
    s = n(583954);
class a {
    color = "black";
    font = { style: "normal", weight: 300, size: 24, family: ["serif"], truncate: s.Kq.None };
    filter = {
        blur: 0,
        brightness: 1,
        contrast: 1,
        grayscale: 0,
        hueRotation: 0,
        invert: 0,
        opacity: 1,
        saturate: 1,
        sepia: 0,
    };
    assetMap;
    canvas;
    constructor(e, t) {
        (this.canvas = e), (this.assetMap = t);
    }
    getCanvas() {
        return this.canvas;
    }
    setColor(e) {
        this.color = e;
    }
    setFont(e) {
        (this.font.style = e.style ?? this.font.style),
            (this.font.size = e.size ?? this.font.size),
            (this.font.weight = e.weight ?? this.font.weight),
            (this.font.family = e.family ?? this.font.family),
            (this.font.truncate = e.truncate ?? this.font.truncate);
    }
    setFilter(e) {
        (this.filter.blur = e.blur ?? this.filter.blur),
            (this.filter.brightness = e.brightness ?? this.filter.brightness),
            (this.filter.contrast = e.contrast ?? this.filter.contrast),
            (this.filter.grayscale = e.grayscale ?? this.filter.grayscale),
            (this.filter.hueRotation = e.hueRotation ?? this.filter.hueRotation),
            (this.filter.invert = e.invert ?? this.filter.invert),
            (this.filter.opacity = e.opacity ?? this.filter.opacity),
            (this.filter.saturate = e.saturate ?? this.filter.saturate),
            (this.filter.sepia = e.sepia ?? this.filter.sepia);
    }
    getFilterString() {
        return [
            `blur(${this.filter.blur}px)`,
            `hue-rotate(${this.filter.hueRotation}deg)`,
            ...["brightness", "contrast", "grayscale", "invert", "opacity", "saturate", "sepia"].map(
                (e) => `${e}(${this.filter[e]})`,
            ),
        ].join(" ");
    }
    getLoadedImage(e) {
        i()(null != this.assetMap, "DiscordCanvas: An AssetStore has not been initialized.");
        let t = this.assetMap.get(e);
        return void 0 === t
            ? void console.error(
                  `DiscordCanvas: AssetMap hasn't loaded ${e}.  Make sure to load it before trying to render.`,
              )
            : t;
    }
    drawRoundedImageWithFallbacks(e, t, n, l, i) {
        for (let a of e) {
            let e = this.drawRoundedImage(a, t, n, l, i);
            if (e !== s.uS.Failure) return e;
        }
        return s.uS.Failure;
    }
}
let r = a,
    o = "u" > typeof OffscreenCanvas;
class c {
    MAX_ROW_WIDTH = 2176;
    MAX_HEIGHT = 2176;
    nextX = 0;
    nextY = 0;
    tallestImageHeight = 0;
    needsReset = !1;
    canvas;
    context;
    imageMap;
    constructor() {
        (this.imageMap = new Map()),
            o
                ? (this.canvas = new OffscreenCanvas(this.MAX_ROW_WIDTH, this.MAX_HEIGHT))
                : ((this.canvas = document.createElement("canvas")),
                  (this.canvas.width = this.MAX_ROW_WIDTH),
                  (this.canvas.height = this.MAX_HEIGHT));
        const e = this.canvas.getContext("2d", { alpha: !0, willReadFrequently: !1 });
        if (null == e) throw Error("Couldn't construct context for offscreen canvas");
        this.context = e;
    }
    reset() {
        this.context.clearRect(0, 0, this.MAX_ROW_WIDTH, this.MAX_HEIGHT),
            this.imageMap.clear(),
            (this.nextX = 0),
            (this.nextY = 0),
            (this.tallestImageHeight = 0),
            (this.needsReset = !1);
    }
    breakToNewRow() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        (this.nextX = 0),
            (this.nextY += this.tallestImageHeight + 4),
            (this.tallestImageHeight = 0),
            this.nextY > this.MAX_HEIGHT && (e ? this.reset() : (this.needsReset = !0));
    }
    getImage(e, t, n) {
        let l = n ?? "default",
            i = this.imageMap.get(e);
        if (null != i && null != i[l]) return i[l];
        if ((this.needsReset && this.reset(), t.width > this.MAX_ROW_WIDTH || t.height > this.MAX_HEIGHT))
            throw Error(`Image: ${e} is too wide to use with offscreen canvas. (${t.width} x ${t.height}`);
        (this.nextX + t.width + 4 > this.MAX_ROW_WIDTH || this.nextY + t.height + 4 > this.MAX_HEIGHT) &&
            this.breakToNewRow(!0),
            this.context.save(),
            null != n && (this.context.filter = n),
            this.context.drawImage(t, this.nextX, this.nextY, t.width, t.height),
            this.context.restore();
        let s = this.imageMap.get(e) ?? {},
            a = { x: this.nextX, y: this.nextY, w: t.width, h: t.height };
        return (
            this.imageMap.set(e, { ...s, [l]: a }),
            t.height > this.tallestImageHeight && (this.tallestImageHeight = t.height),
            (this.nextX += t.width + 4),
            this.nextX > this.MAX_ROW_WIDTH && this.breakToNewRow(),
            a
        );
    }
}
class u extends r {
    canvas;
    context;
    offscreenCanvasCache = void 0;
    _warnedAboutFilters = !1;
    constructor(e, t) {
        super(e, t),
            (this.canvas = e),
            (this.context = this.canvas.getContext("2d")),
            null != this.context && (this.context.imageSmoothingQuality = "high");
    }
    setupOffscreenCanvas() {
        try {
            this.offscreenCanvasCache = new c();
        } catch (e) {
            this.offscreenCanvasCache = void 0;
        }
    }
    getCanvasForExport() {
        return this.canvas;
    }
    setFilter(e) {
        !1 === this._warnedAboutFilters && this.offscreenCanvasCache, super.setFilter(e);
    }
    setContextProperties() {
        null != this.context &&
            ((this.context.fillStyle = this.color),
            (this.context.strokeStyle = this.color),
            (this.context.font = `${this.font.style} ${this.font.weight} ${this.font.size}px ${this.font.family.join(", ")}`));
    }
    setSize(e, t) {
        let { w: n, h: l } = e;
        null != this.context && null != t
            ? ((this.canvas.width = n * t), (this.canvas.height = l * t), this.context.scale(t, t))
            : ((this.canvas.width = n), (this.canvas.height = l));
    }
    clearRect(e) {
        if (null == this.context) return;
        let { x: t, y: n, w: l, h: i } = e;
        this.context.clearRect(t, n, l, i);
    }
    restoreContext() {
        null != this.context && this.context.restore();
    }
    rotateAroundOriginAndDraw(e, t, n) {
        null != this.context &&
            (this.context.save(),
            this.context.translate(e.x, e.y),
            this.context.rotate((t * Math.PI) / 180),
            n(),
            this.context.restore());
    }
    drawRect(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        if (null == this.context) return;
        let { x: l, y: i, w: s, h: a } = e;
        n && this.setContextProperties(), t ? this.context.fillRect(l, i, s, a) : this.context.strokeRect(l, i, s, a);
    }
    drawRoundedRect(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            l = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        if (null == this.context) return;
        let { x: i, y: s, w: a, h: r } = e;
        l && this.setContextProperties(),
            this.context.beginPath(),
            this.context.roundRect(i, s, a, r, t),
            n ? this.context.fill() : this.context.stroke();
    }
    drawText(e, t, n) {
        if (null == this.context) return;
        this.setContextProperties();
        let l = t.w ?? this.canvas.width - t.x,
            a = this.context.measureText(e),
            r = !1,
            o = this.font.size,
            c = (e, t) => {
                null != this.context && (n ? this.context.fillText(e, t.x, t.y) : this.context.strokeText(e, t.x, t.y));
            },
            u = (e) => {
                if (null == this.context || a.width <= 12) return "";
                let t = `${e}`;
                for (; a.width + 12 > l; ) (t = t.slice(0, -4)), (a = this.context.measureText(t)), (r = !0);
                return r && (t += "..."), t;
            };
        if (
            (this.font.truncate === s.Kq.None && c(e, t),
            this.font.truncate === s.Kq.Truncate && c((e = u(e)), t),
            this.font.truncate === s.Kq.Wrap)
        ) {
            let n = e.split(" "),
                s = 1 / 0,
                r = "",
                d = 0;
            for (
                null != t.h &&
                ((s = t.h / o),
                i()(s > 0, `DiscordCavas: boundingBox.h of ${t.h} results in 0 visible lines with font size of ${o}`));
                n.length > 0;
            )
                if ((a = this.context.measureText(r + " " + n[0])).width > l) {
                    let e = !1;
                    if (
                        (d + 1 >= s && n.length > 0 && (e = !0),
                        "" !== r
                            ? (c(e ? u(r + "...") : r, { x: t.x, y: t.y + o * d }), (r = ""))
                            : c(u(n.shift() ?? ""), { x: t.x, y: t.y + o * d }),
                        e)
                    )
                        break;
                    d += 1;
                } else (r += ` ${n.shift()}`), 0 === n.length && c(r, { x: t.x, y: t.y + o * d });
        }
        return { x: t.x, y: t.y, w: a.width, h: a.actualBoundingBoxAscent + a.actualBoundingBoxDescent };
    }
    drawFormattedMessage(e, t, n) {
        this.font.truncate === s.Kq.Wrap &&
            console.warn(
                "DiscordCavas: `drawFormattedMessage` doesn't currently support wrapping formatted text. The results of this draw likely won't match your expectations.",
            );
        let l = this.font.weight,
            i = (e, t, n) => {
                let i;
                return (
                    "strong" === e.type && this.setFont({ weight: 700 }),
                    (i = Array.isArray(e.content) ? a(e.content, t, n) : this.drawText(e.content, t, n)),
                    this.setFont({ weight: l }),
                    i
                );
            },
            a = (e, t, n) => {
                let l = 0;
                return (
                    e.forEach((e) => {
                        let { x: s, y: a, w: r, h: o } = t,
                            c = null != r ? r - l : void 0,
                            u = i(e, { x: s + l, y: a, w: c, h: o }, n);
                        null != u && (l += u.w);
                    }),
                    { x: t.x + l, y: t.y, w: l, h: this.font.size }
                );
            };
        Array.isArray(e) ? a(e, t, n) : i(e, t, n);
    }
    drawImage(e, t, n) {
        let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : { fillMode: s.VZ.Stretch };
        i()(null != this.assetMap, "DiscordCavas: `drawImage` requires an AssetMap to be initialized.");
        let { fillMode: a } = l;
        if (null == this.context) return s.uS.Failure;
        this.setContextProperties();
        let r = this.assetMap.get(e);
        if (null == r) return s.uS.ImageNotLoaded;
        if (null != n) {
            if (a === s.VZ.Contain) {
                let l,
                    i = { w: r.width, h: r.height },
                    a = +(i.w / i.h).toFixed(1);
                if (+(n.w / n.h).toFixed(1) > a) {
                    let e = n.h * a;
                    l = { x: t.x + (n.w - e) / 2, y: t.y, w: e, h: n.h };
                } else {
                    let e = n.w / a;
                    l = { x: t.x, y: t.y + (n.h - e) / 2, w: n.w, h: e };
                }
                return (
                    this.drawCroppedImage(e, { x: 0, y: 0, w: i.w, h: i.h }, { x: l.x, y: l.y, w: l.w, h: l.h }),
                    s.uS.Success
                );
            }
            if (a === s.VZ.Cover) {
                let i,
                    a = { w: r.width, h: r.height },
                    o = +(a.w / a.h).toFixed(1),
                    c = +(n.w / n.h).toFixed(1);
                if (c > o) {
                    let e = a.w / c;
                    i = { ...{ x: 0, y: (a.h - e) * (l?.focus?.y ?? 0.5) }, w: r.width, h: e };
                } else {
                    let e = a.h * c;
                    i = { ...{ x: (r.width - e) * (l?.focus?.x ?? 0.5), y: 0 }, w: e, h: r.height };
                }
                return this.drawCroppedImage(e, i, { x: t.x, y: t.y, w: n.w, h: n.h }), s.uS.Success;
            }
            if (null != this.offscreenCanvasCache) return this.drawCachedImage(e, t, n);
            this.context.drawImage(r, t.x, t.y, n.w, n.h);
        } else {
            if (null != this.offscreenCanvasCache) return this.drawCachedImage(e, t);
            this.context.drawImage(r, t.x, t.y);
        }
        return s.uS.Success;
    }
    drawRoundedImage(e, t, n, l, i) {
        if (null == this.context) return s.uS.Failure;
        let { x: a, y: r } = t,
            { w: o, h: c } = n;
        this.context.save();
        let u = new Path2D();
        u.roundRect(a, r, o, c, l), this.context.clip(u);
        let d = this.drawImage(e, t, n, i);
        return this.restoreContext(), d;
    }
    drawCroppedImage(e, t, n) {
        if ((null != this.offscreenCanvasCache && this.drawCroppedCachedImage(e, t, n), null == this.context))
            return s.uS.Failure;
        let l = this.assetMap?.get(e);
        if (null == l) return s.uS.ImageNotLoaded;
        if (null != this.offscreenCanvasCache) return this.drawCroppedCachedImage(e, t, n);
        {
            let { x: e, y: i, w: s, h: a } = t,
                { x: r, y: o, w: c, h: u } = n;
            this.context.drawImage(l, e, i, s, a, r, o, c, u);
        }
        return s.uS.Success;
    }
    drawCachedImage(e, t, n) {
        if (
            (i()(null != this.assetMap, "DiscordCavas: `drawImage` requires an AssetMap to be initialized."),
            i()(
                null != this.offscreenCanvasCache,
                "DiscordCavas: `drawCachedImage` requires an offscreen canvas being initialized.",
            ),
            null == this.context)
        )
            return s.uS.Failure;
        let l = this.assetMap.get(e);
        if (null == l) return s.uS.ImageNotLoaded;
        let a = this.offscreenCanvasCache.getImage(e.toString(), l, this.getFilterString());
        return null == a
            ? s.uS.Failure
            : (this.context.drawImage(
                  this.offscreenCanvasCache.canvas,
                  a.x,
                  a.y,
                  a.w,
                  a.h,
                  t.x,
                  t.y,
                  n?.w ?? a.w,
                  n?.h ?? a.h,
              ),
              s.uS.Success);
    }
    drawCroppedCachedImage(e, t, n) {
        if (
            (i()(null != this.assetMap, "DiscordCavas: `drawImage` requires an AssetMap to be initialized."),
            i()(
                null != this.offscreenCanvasCache,
                "DiscordCavas: `drawCachedImage` requires an offscreen canvas being initialized.",
            ),
            null == this.context)
        )
            return s.uS.Failure;
        let l = this.assetMap.get(e);
        if (null == l) return s.uS.ImageNotLoaded;
        let a = this.offscreenCanvasCache.getImage(e.toString(), l, this.getFilterString());
        if (null == a) return s.uS.Failure;
        let { x: r, y: o, w: c, h: u } = t,
            { x: d, y: h, w: m, h: p } = n;
        return (
            this.context.drawImage(this.offscreenCanvasCache.canvas, a.x + r, a.y + o, c, u, d, h, m, p), s.uS.Success
        );
    }
    drawPath(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        if (null == this.context) return s.uS.Failure;
        this.setContextProperties(), this.context.save();
        let i = new Path2D(e);
        return (
            this.context.translate(t.x, t.y),
            this.context.scale(l, l),
            n ? this.context.fill(i, "evenodd") : this.context.stroke(i),
            this.restoreContext(),
            s.uS.Success
        );
    }
    setGradientFillStyle(e, t, n) {
        if (null == this.context) return;
        let l = this.context.createLinearGradient(t.x, t.y, n.x, n.y);
        for (let { color: t, stop: n } of e) l.addColorStop(n, t);
        this.context.fillStyle = l;
    }
    drawGradientRect(e, t, n, l) {
        return null == this.context
            ? s.uS.Failure
            : (this.setGradientFillStyle(e, t, n), this.drawRect(l, !0, !1), s.uS.Success);
    }
    drawRoundedGradientRect(e, t, n, l, i) {
        return null == this.context
            ? s.uS.Failure
            : (this.setGradientFillStyle(e, t, n), this.drawRoundedRect(l, i, !0, !1), s.uS.Success);
    }
    clip(e, t) {
        if (null == this.context) return;
        this.context.save();
        let { x: n, y: l } = e,
            i = new Path2D(t);
        this.context.translate(n, l), this.context.clip(i);
    }
    clipRect(e, t) {
        if (null == this.context) return;
        this.context.save();
        let { x: n, y: l, w: i, h: s } = e;
        if (t) {
            let e = new Path2D();
            e.moveTo(0, 0),
                e.lineTo(this.canvas.width, 0),
                e.lineTo(this.canvas.width, this.canvas.height),
                e.lineTo(0, this.canvas.height),
                e.lineTo(0, 0),
                e.closePath(),
                e.rect(n, l, i, s),
                this.context.clip(e, "evenodd");
        } else {
            let e = new Path2D();
            e.rect(n, l, i, s), this.context.clip(e);
        }
    }
    clipRoundedRect(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 ? arguments[2] : void 0;
        if (null == this.context) return;
        this.context.save();
        let { x: l, y: i, w: s, h: a } = e;
        if (n) {
            let e = new Path2D();
            e.moveTo(0, 0),
                e.lineTo(this.canvas.width, 0),
                e.lineTo(this.canvas.width, this.canvas.height),
                e.lineTo(0, this.canvas.height),
                e.lineTo(0, 0),
                e.closePath(),
                e.roundRect(l, i, s, a, t),
                this.context.clip(e, "evenodd");
        } else {
            let e = new Path2D();
            e.roundRect(l, i, s, a, t), this.context.clip(e);
        }
    }
}
