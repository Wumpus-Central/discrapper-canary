"use strict";
n.d(t, { A: () => d });
var r = n(284009),
    i = n.n(r),
    a = n(851541);
n(273946);
var s = n(583954);
let o = "u" > typeof OffscreenCanvas,
    l = 4,
    u = 2176;
class c {
    MAX_ROW_WIDTH = u;
    MAX_HEIGHT = u;
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
            (this.nextY += this.tallestImageHeight + l),
            (this.tallestImageHeight = 0),
            this.nextY > this.MAX_HEIGHT && (e ? this.reset() : (this.needsReset = !0));
    }
    getImage(e, t, n) {
        let r = n ?? "default",
            i = this.imageMap.get(e);
        if (null != i && null != i[r]) return i[r];
        if ((this.needsReset && this.reset(), t.width > this.MAX_ROW_WIDTH || t.height > this.MAX_HEIGHT))
            throw Error(`Image: ${e} is too wide to use with offscreen canvas. (${t.width} x ${t.height}`);
        (this.nextX + t.width + l > this.MAX_ROW_WIDTH || this.nextY + t.height + l > this.MAX_HEIGHT) &&
            this.breakToNewRow(!0),
            this.context.save(),
            null != n && (this.context.filter = n),
            this.context.drawImage(t, this.nextX, this.nextY, t.width, t.height),
            this.context.restore();
        let a = this.imageMap.get(e) ?? {},
            s = { x: this.nextX, y: this.nextY, w: t.width, h: t.height };
        return (
            this.imageMap.set(e, { ...a, [r]: s }),
            t.height > this.tallestImageHeight && (this.tallestImageHeight = t.height),
            (this.nextX += t.width + l),
            this.nextX > this.MAX_ROW_WIDTH && this.breakToNewRow(),
            s
        );
    }
}
class d extends a.A {
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
        let { w: n, h: r } = e;
        null != this.context && null != t
            ? ((this.canvas.width = n * t), (this.canvas.height = r * t), this.context.scale(t, t))
            : ((this.canvas.width = n), (this.canvas.height = r));
    }
    clearRect(e) {
        if (null == this.context) return;
        let { x: t, y: n, w: r, h: i } = e;
        this.context.clearRect(t, n, r, i);
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
        let { x: r, y: i, w: a, h: s } = e;
        n && this.setContextProperties(), t ? this.context.fillRect(r, i, a, s) : this.context.strokeRect(r, i, a, s);
    }
    drawRoundedRect(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            r = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        if (null == this.context) return;
        let { x: i, y: a, w: s, h: o } = e;
        r && this.setContextProperties(),
            this.context.beginPath(),
            this.context.roundRect(i, a, s, o, t),
            n ? this.context.fill() : this.context.stroke();
    }
    drawText(e, t, n) {
        if (null == this.context) return;
        this.setContextProperties();
        let r = t.w ?? this.canvas.width - t.x,
            a = this.context.measureText(e),
            o = !1,
            l = this.font.size,
            u = (e, t) => {
                null != this.context && (n ? this.context.fillText(e, t.x, t.y) : this.context.strokeText(e, t.x, t.y));
            },
            c = (e) => {
                if (null == this.context || a.width <= 12) return "";
                let t = `${e}`;
                for (; a.width + 12 > r; ) (t = t.slice(0, -4)), (a = this.context.measureText(t)), (o = !0);
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
                i()(s > 0, `DiscordCavas: boundingBox.h of ${t.h} results in 0 visible lines with font size of ${l}`));
                n.length > 0;
            )
                if ((a = this.context.measureText(o + " " + n[0])).width > r) {
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
        let r = this.font.weight,
            i = (e, t, n) => {
                let i;
                return (
                    "strong" === e.type && this.setFont({ weight: 700 }),
                    (i = Array.isArray(e.content) ? a(e.content, t, n) : this.drawText(e.content, t, n)),
                    this.setFont({ weight: r }),
                    i
                );
            },
            a = (e, t, n) => {
                let r = 0;
                return (
                    e.forEach((e) => {
                        let { x: a, y: s, w: o, h: l } = t,
                            u = null != o ? o - r : void 0,
                            c = i(e, { x: a + r, y: s, w: u, h: l }, n);
                        null != c && (r += c.w);
                    }),
                    { x: t.x + r, y: t.y, w: r, h: this.font.size }
                );
            };
        Array.isArray(e) ? a(e, t, n) : i(e, t, n);
    }
    drawImage(e, t, n) {
        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : { fillMode: s.VZ.Stretch };
        i()(null != this.assetMap, "DiscordCavas: `drawImage` requires an AssetMap to be initialized.");
        let { fillMode: a } = r;
        if (null == this.context) return s.uS.Failure;
        this.setContextProperties();
        let o = this.assetMap.get(e);
        if (null == o) return s.uS.ImageNotLoaded;
        if (null != n) {
            if (a === s.VZ.Contain) {
                let r,
                    i = { w: o.width, h: o.height },
                    a = +(i.w / i.h).toFixed(1);
                if (+(n.w / n.h).toFixed(1) > a) {
                    let e = n.h * a;
                    r = { x: t.x + (n.w - e) / 2, y: t.y, w: e, h: n.h };
                } else {
                    let e = n.w / a;
                    r = { x: t.x, y: t.y + (n.h - e) / 2, w: n.w, h: e };
                }
                return (
                    this.drawCroppedImage(e, { x: 0, y: 0, w: i.w, h: i.h }, { x: r.x, y: r.y, w: r.w, h: r.h }),
                    s.uS.Success
                );
            }
            if (a === s.VZ.Cover) {
                let i,
                    a = { w: o.width, h: o.height },
                    l = +(a.w / a.h).toFixed(1),
                    u = +(n.w / n.h).toFixed(1);
                if (u > l) {
                    let e = a.w / u;
                    i = { ...{ x: 0, y: (a.h - e) * (r?.focus?.y ?? 0.5) }, w: o.width, h: e };
                } else {
                    let e = a.h * u;
                    i = { ...{ x: (o.width - e) * (r?.focus?.x ?? 0.5), y: 0 }, w: e, h: o.height };
                }
                return this.drawCroppedImage(e, i, { x: t.x, y: t.y, w: n.w, h: n.h }), s.uS.Success;
            }
            if (null != this.offscreenCanvasCache) return this.drawCachedImage(e, t, n);
            this.context.drawImage(o, t.x, t.y, n.w, n.h);
        } else {
            if (null != this.offscreenCanvasCache) return this.drawCachedImage(e, t);
            this.context.drawImage(o, t.x, t.y);
        }
        return s.uS.Success;
    }
    drawRoundedImage(e, t, n, r, i) {
        if (null == this.context) return s.uS.Failure;
        let { x: a, y: o } = t,
            { w: l, h: u } = n;
        this.context.save();
        let c = new Path2D();
        c.roundRect(a, o, l, u, r), this.context.clip(c);
        let d = this.drawImage(e, t, n, i);
        return this.restoreContext(), d;
    }
    drawCroppedImage(e, t, n) {
        if ((null != this.offscreenCanvasCache && this.drawCroppedCachedImage(e, t, n), null == this.context))
            return s.uS.Failure;
        let r = this.assetMap?.get(e);
        if (null == r) return s.uS.ImageNotLoaded;
        if (null != this.offscreenCanvasCache) return this.drawCroppedCachedImage(e, t, n);
        {
            let { x: e, y: i, w: a, h: s } = t,
                { x: o, y: l, w: u, h: c } = n;
            this.context.drawImage(r, e, i, a, s, o, l, u, c);
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
        let r = this.assetMap.get(e);
        if (null == r) return s.uS.ImageNotLoaded;
        let a = this.offscreenCanvasCache.getImage(e.toString(), r, this.getFilterString());
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
        let r = this.assetMap.get(e);
        if (null == r) return s.uS.ImageNotLoaded;
        let a = this.offscreenCanvasCache.getImage(e.toString(), r, this.getFilterString());
        if (null == a) return s.uS.Failure;
        let { x: o, y: l, w: u, h: c } = t,
            { x: d, y: _, w: f, h: p } = n;
        return (
            this.context.drawImage(this.offscreenCanvasCache.canvas, a.x + o, a.y + l, u, c, d, _, f, p), s.uS.Success
        );
    }
    drawPath(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        if (null == this.context) return s.uS.Failure;
        this.setContextProperties(), this.context.save();
        let i = new Path2D(e);
        return (
            this.context.translate(t.x, t.y),
            this.context.scale(r, r),
            n ? this.context.fill(i, "evenodd") : this.context.stroke(i),
            this.restoreContext(),
            s.uS.Success
        );
    }
    setGradientFillStyle(e, t, n) {
        if (null == this.context) return;
        let r = this.context.createLinearGradient(t.x, t.y, n.x, n.y);
        for (let { color: t, stop: n } of e) r.addColorStop(n, t);
        this.context.fillStyle = r;
    }
    drawGradientRect(e, t, n, r) {
        return null == this.context
            ? s.uS.Failure
            : (this.setGradientFillStyle(e, t, n), this.drawRect(r, !0, !1), s.uS.Success);
    }
    drawRoundedGradientRect(e, t, n, r, i) {
        return null == this.context
            ? s.uS.Failure
            : (this.setGradientFillStyle(e, t, n), this.drawRoundedRect(r, i, !0, !1), s.uS.Success);
    }
    clip(e, t) {
        if (null == this.context) return;
        this.context.save();
        let { x: n, y: r } = e,
            i = new Path2D(t);
        this.context.translate(n, r), this.context.clip(i);
    }
    clipRect(e, t) {
        if (null == this.context) return;
        this.context.save();
        let { x: n, y: r, w: i, h: a } = e;
        if (t) {
            let e = new Path2D();
            e.moveTo(0, 0),
                e.lineTo(this.canvas.width, 0),
                e.lineTo(this.canvas.width, this.canvas.height),
                e.lineTo(0, this.canvas.height),
                e.lineTo(0, 0),
                e.closePath(),
                e.rect(n, r, i, a),
                this.context.clip(e, "evenodd");
        } else {
            let e = new Path2D();
            e.rect(n, r, i, a), this.context.clip(e);
        }
    }
    clipRoundedRect(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 ? arguments[2] : void 0;
        if (null == this.context) return;
        this.context.save();
        let { x: r, y: i, w: a, h: s } = e;
        if (n) {
            let e = new Path2D();
            e.moveTo(0, 0),
                e.lineTo(this.canvas.width, 0),
                e.lineTo(this.canvas.width, this.canvas.height),
                e.lineTo(0, this.canvas.height),
                e.lineTo(0, 0),
                e.closePath(),
                e.roundRect(r, i, a, s, t),
                this.context.clip(e, "evenodd");
        } else {
            let e = new Path2D();
            e.roundRect(r, i, a, s, t), this.context.clip(e);
        }
    }
}
