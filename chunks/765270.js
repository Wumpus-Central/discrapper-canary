"use strict";
n.d(t, { A: () => c });
var i = n(284009),
    r = n.n(i),
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
        r()(null != this.assetMap, "DiscordCanvas: An AssetStore has not been initialized.");
        let t = this.assetMap.get(e);
        return void 0 === t
            ? void console.error(
                  `DiscordCanvas: AssetMap hasn't loaded ${e}.  Make sure to load it before trying to render.`,
              )
            : t;
    }
    drawRoundedImageWithFallbacks(e, t, n, i, r) {
        for (let a of e) {
            let e = this.drawRoundedImage(a, t, n, i, r);
            if (e !== s.uS.Failure) return e;
        }
        return s.uS.Failure;
    }
}
let o = a,
    l = "u" > typeof OffscreenCanvas;
class u {
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
            l
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
        let i = n ?? "default",
            r = this.imageMap.get(e);
        if (null != r && null != r[i]) return r[i];
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
            this.imageMap.set(e, { ...s, [i]: a }),
            t.height > this.tallestImageHeight && (this.tallestImageHeight = t.height),
            (this.nextX += t.width + 4),
            this.nextX > this.MAX_ROW_WIDTH && this.breakToNewRow(),
            a
        );
    }
}
class c extends o {
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
            this.offscreenCanvasCache = new u();
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
        let { w: n, h: i } = e;
        null != this.context && null != t
            ? ((this.canvas.width = n * t), (this.canvas.height = i * t), this.context.scale(t, t))
            : ((this.canvas.width = n), (this.canvas.height = i));
    }
    clearRect(e) {
        if (null == this.context) return;
        let { x: t, y: n, w: i, h: r } = e;
        this.context.clearRect(t, n, i, r);
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
        let { x: i, y: r, w: s, h: a } = e;
        n && this.setContextProperties(), t ? this.context.fillRect(i, r, s, a) : this.context.strokeRect(i, r, s, a);
    }
    drawRoundedRect(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        if (null == this.context) return;
        let { x: r, y: s, w: a, h: o } = e;
        i && this.setContextProperties(),
            this.context.beginPath(),
            this.context.roundRect(r, s, a, o, t),
            n ? this.context.fill() : this.context.stroke();
    }
    drawText(e, t, n) {
        if (null == this.context) return;
        this.setContextProperties();
        let i = t.w ?? this.canvas.width - t.x,
            a = this.context.measureText(e),
            o = !1,
            l = this.font.size,
            u = (e, t) => {
                null != this.context && (n ? this.context.fillText(e, t.x, t.y) : this.context.strokeText(e, t.x, t.y));
            },
            c = (e) => {
                if (null == this.context || a.width <= 12) return "";
                let t = `${e}`;
                for (; a.width + 12 > i; ) (t = t.slice(0, -4)), (a = this.context.measureText(t)), (o = !0);
                return o && (t += "..."), t;
            };
        if (
            (this.font.truncate === s.Kq.None && u(e, t),
            this.font.truncate === s.Kq.Truncate && u((e = c(e)), t),
            this.font.truncate === s.Kq.Wrap)
        ) {
            let n = e.split(" "),
                s = 1 / 0,
                o = "",
                d = 0;
            for (
                null != t.h &&
                ((s = t.h / l),
                r()(s > 0, `DiscordCavas: boundingBox.h of ${t.h} results in 0 visible lines with font size of ${l}`));
                n.length > 0;
            )
                if ((a = this.context.measureText(o + " " + n[0])).width > i) {
                    let e = !1;
                    if (
                        (d + 1 >= s && n.length > 0 && (e = !0),
                        "" !== o
                            ? (u(e ? c(o + "...") : o, { x: t.x, y: t.y + l * d }), (o = ""))
                            : u(c(n.shift() ?? ""), { x: t.x, y: t.y + l * d }),
                        e)
                    )
                        break;
                    d += 1;
                } else (o += ` ${n.shift()}`), 0 === n.length && u(o, { x: t.x, y: t.y + l * d });
        }
        return { x: t.x, y: t.y, w: a.width, h: a.actualBoundingBoxAscent + a.actualBoundingBoxDescent };
    }
    drawFormattedMessage(e, t, n) {
        this.font.truncate === s.Kq.Wrap &&
            console.warn(
                "DiscordCavas: `drawFormattedMessage` doesn't currently support wrapping formatted text. The results of this draw likely won't match your expectations.",
            );
        let i = this.font.weight,
            r = (e, t, n) => {
                let r;
                return (
                    "strong" === e.type && this.setFont({ weight: 700 }),
                    (r = Array.isArray(e.content) ? a(e.content, t, n) : this.drawText(e.content, t, n)),
                    this.setFont({ weight: i }),
                    r
                );
            },
            a = (e, t, n) => {
                let i = 0;
                return (
                    e.forEach((e) => {
                        let { x: s, y: a, w: o, h: l } = t,
                            u = null != o ? o - i : void 0,
                            c = r(e, { x: s + i, y: a, w: u, h: l }, n);
                        null != c && (i += c.w);
                    }),
                    { x: t.x + i, y: t.y, w: i, h: this.font.size }
                );
            };
        Array.isArray(e) ? a(e, t, n) : r(e, t, n);
    }
    drawImage(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : { fillMode: s.VZ.Stretch };
        r()(null != this.assetMap, "DiscordCavas: `drawImage` requires an AssetMap to be initialized.");
        let { fillMode: a } = i;
        if (null == this.context) return s.uS.Failure;
        this.setContextProperties();
        let o = this.assetMap.get(e);
        if (null == o) return s.uS.ImageNotLoaded;
        if (null != n) {
            if (a === s.VZ.Contain) {
                let i,
                    r = { w: o.width, h: o.height },
                    a = +(r.w / r.h).toFixed(1);
                if (+(n.w / n.h).toFixed(1) > a) {
                    let e = n.h * a;
                    i = { x: t.x + (n.w - e) / 2, y: t.y, w: e, h: n.h };
                } else {
                    let e = n.w / a;
                    i = { x: t.x, y: t.y + (n.h - e) / 2, w: n.w, h: e };
                }
                return (
                    this.drawCroppedImage(e, { x: 0, y: 0, w: r.w, h: r.h }, { x: i.x, y: i.y, w: i.w, h: i.h }),
                    s.uS.Success
                );
            }
            if (a === s.VZ.Cover) {
                let r,
                    a = { w: o.width, h: o.height },
                    l = +(a.w / a.h).toFixed(1),
                    u = +(n.w / n.h).toFixed(1);
                if (u > l) {
                    let e = a.w / u;
                    r = { ...{ x: 0, y: (a.h - e) * (i?.focus?.y ?? 0.5) }, w: o.width, h: e };
                } else {
                    let e = a.h * u;
                    r = { ...{ x: (o.width - e) * (i?.focus?.x ?? 0.5), y: 0 }, w: e, h: o.height };
                }
                return this.drawCroppedImage(e, r, { x: t.x, y: t.y, w: n.w, h: n.h }), s.uS.Success;
            }
            if (null != this.offscreenCanvasCache) return this.drawCachedImage(e, t, n);
            this.context.drawImage(o, t.x, t.y, n.w, n.h);
        } else {
            if (null != this.offscreenCanvasCache) return this.drawCachedImage(e, t);
            this.context.drawImage(o, t.x, t.y);
        }
        return s.uS.Success;
    }
    drawRoundedImage(e, t, n, i, r) {
        if (null == this.context) return s.uS.Failure;
        let { x: a, y: o } = t,
            { w: l, h: u } = n;
        this.context.save();
        let c = new Path2D();
        c.roundRect(a, o, l, u, i), this.context.clip(c);
        let d = this.drawImage(e, t, n, r);
        return this.restoreContext(), d;
    }
    drawCroppedImage(e, t, n) {
        if ((null != this.offscreenCanvasCache && this.drawCroppedCachedImage(e, t, n), null == this.context))
            return s.uS.Failure;
        let i = this.assetMap?.get(e);
        if (null == i) return s.uS.ImageNotLoaded;
        if (null != this.offscreenCanvasCache) return this.drawCroppedCachedImage(e, t, n);
        {
            let { x: e, y: r, w: s, h: a } = t,
                { x: o, y: l, w: u, h: c } = n;
            this.context.drawImage(i, e, r, s, a, o, l, u, c);
        }
        return s.uS.Success;
    }
    drawCachedImage(e, t, n) {
        if (
            (r()(null != this.assetMap, "DiscordCavas: `drawImage` requires an AssetMap to be initialized."),
            r()(
                null != this.offscreenCanvasCache,
                "DiscordCavas: `drawCachedImage` requires an offscreen canvas being initialized.",
            ),
            null == this.context)
        )
            return s.uS.Failure;
        let i = this.assetMap.get(e);
        if (null == i) return s.uS.ImageNotLoaded;
        let a = this.offscreenCanvasCache.getImage(e.toString(), i, this.getFilterString());
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
            (r()(null != this.assetMap, "DiscordCavas: `drawImage` requires an AssetMap to be initialized."),
            r()(
                null != this.offscreenCanvasCache,
                "DiscordCavas: `drawCachedImage` requires an offscreen canvas being initialized.",
            ),
            null == this.context)
        )
            return s.uS.Failure;
        let i = this.assetMap.get(e);
        if (null == i) return s.uS.ImageNotLoaded;
        let a = this.offscreenCanvasCache.getImage(e.toString(), i, this.getFilterString());
        if (null == a) return s.uS.Failure;
        let { x: o, y: l, w: u, h: c } = t,
            { x: d, y: _, w: f, h: h } = n;
        return (
            this.context.drawImage(this.offscreenCanvasCache.canvas, a.x + o, a.y + l, u, c, d, _, f, h), s.uS.Success
        );
    }
    drawPath(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        if (null == this.context) return s.uS.Failure;
        this.setContextProperties(), this.context.save();
        let r = new Path2D(e);
        return (
            this.context.translate(t.x, t.y),
            this.context.scale(i, i),
            n ? this.context.fill(r, "evenodd") : this.context.stroke(r),
            this.restoreContext(),
            s.uS.Success
        );
    }
    setGradientFillStyle(e, t, n) {
        if (null == this.context) return;
        let i = this.context.createLinearGradient(t.x, t.y, n.x, n.y);
        for (let { color: t, stop: n } of e) i.addColorStop(n, t);
        this.context.fillStyle = i;
    }
    drawGradientRect(e, t, n, i) {
        return null == this.context
            ? s.uS.Failure
            : (this.setGradientFillStyle(e, t, n), this.drawRect(i, !0, !1), s.uS.Success);
    }
    drawRoundedGradientRect(e, t, n, i, r) {
        return null == this.context
            ? s.uS.Failure
            : (this.setGradientFillStyle(e, t, n), this.drawRoundedRect(i, r, !0, !1), s.uS.Success);
    }
    clip(e, t) {
        if (null == this.context) return;
        this.context.save();
        let { x: n, y: i } = e,
            r = new Path2D(t);
        this.context.translate(n, i), this.context.clip(r);
    }
    clipRect(e, t) {
        if (null == this.context) return;
        this.context.save();
        let { x: n, y: i, w: r, h: s } = e;
        if (t) {
            let e = new Path2D();
            e.moveTo(0, 0),
                e.lineTo(this.canvas.width, 0),
                e.lineTo(this.canvas.width, this.canvas.height),
                e.lineTo(0, this.canvas.height),
                e.lineTo(0, 0),
                e.closePath(),
                e.rect(n, i, r, s),
                this.context.clip(e, "evenodd");
        } else {
            let e = new Path2D();
            e.rect(n, i, r, s), this.context.clip(e);
        }
    }
    clipRoundedRect(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 ? arguments[2] : void 0;
        if (null == this.context) return;
        this.context.save();
        let { x: i, y: r, w: s, h: a } = e;
        if (n) {
            let e = new Path2D();
            e.moveTo(0, 0),
                e.lineTo(this.canvas.width, 0),
                e.lineTo(this.canvas.width, this.canvas.height),
                e.lineTo(0, this.canvas.height),
                e.lineTo(0, 0),
                e.closePath(),
                e.roundRect(i, r, s, a, t),
                this.context.clip(e, "evenodd");
        } else {
            let e = new Path2D();
            e.roundRect(i, r, s, a, t), this.context.clip(e);
        }
    }
}
