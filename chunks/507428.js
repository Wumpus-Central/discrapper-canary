"use strict";
n.d(t, { A: () => c });
var i = n(284009),
    l = n.n(i),
    s = n(851541);
n(273946);
var r = n(583954);
let a = "u" > typeof OffscreenCanvas;
class o {
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
            a
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
            l = this.imageMap.get(e);
        if (null != l && null != l[i]) return l[i];
        if ((this.needsReset && this.reset(), t.width > this.MAX_ROW_WIDTH || t.height > this.MAX_HEIGHT))
            throw Error(`Image: ${e} is too wide to use with offscreen canvas. (${t.width} x ${t.height}`);
        (this.nextX + t.width + 4 > this.MAX_ROW_WIDTH || this.nextY + t.height + 4 > this.MAX_HEIGHT) &&
            this.breakToNewRow(!0),
            this.context.save(),
            null != n && (this.context.filter = n),
            this.context.drawImage(t, this.nextX, this.nextY, t.width, t.height),
            this.context.restore();
        let s = this.imageMap.get(e) ?? {},
            r = { x: this.nextX, y: this.nextY, w: t.width, h: t.height };
        return (
            this.imageMap.set(e, { ...s, [i]: r }),
            t.height > this.tallestImageHeight && (this.tallestImageHeight = t.height),
            (this.nextX += t.width + 4),
            this.nextX > this.MAX_ROW_WIDTH && this.breakToNewRow(),
            r
        );
    }
}
class c extends s.A {
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
            this.offscreenCanvasCache = new o();
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
        let { x: t, y: n, w: i, h: l } = e;
        this.context.clearRect(t, n, i, l);
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
        let { x: i, y: l, w: s, h: r } = e;
        n && this.setContextProperties(), t ? this.context.fillRect(i, l, s, r) : this.context.strokeRect(i, l, s, r);
    }
    drawRoundedRect(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
        if (null == this.context) return;
        let { x: l, y: s, w: r, h: a } = e;
        i && this.setContextProperties(),
            this.context.beginPath(),
            this.context.roundRect(l, s, r, a, t),
            n ? this.context.fill() : this.context.stroke();
    }
    drawText(e, t, n) {
        if (null == this.context) return;
        this.setContextProperties();
        let i = t.w ?? this.canvas.width - t.x,
            s = this.context.measureText(e),
            a = !1,
            o = this.font.size,
            c = (e, t) => {
                null != this.context && (n ? this.context.fillText(e, t.x, t.y) : this.context.strokeText(e, t.x, t.y));
            },
            u = (e) => {
                if (null == this.context || s.width <= 12) return "";
                let t = `${e}`;
                for (; s.width + 12 > i; ) (t = t.slice(0, -4)), (s = this.context.measureText(t)), (a = !0);
                return a && (t += "..."), t;
            };
        if (
            (this.font.truncate === r.Kq.None && c(e, t),
            this.font.truncate === r.Kq.Truncate && c((e = u(e)), t),
            this.font.truncate === r.Kq.Wrap)
        ) {
            let n = e.split(" "),
                r = 1 / 0,
                a = "",
                d = 0;
            for (
                null != t.h &&
                ((r = t.h / o),
                l()(r > 0, `DiscordCavas: boundingBox.h of ${t.h} results in 0 visible lines with font size of ${o}`));
                n.length > 0;
            )
                if ((s = this.context.measureText(a + " " + n[0])).width > i) {
                    let e = !1;
                    if (
                        (d + 1 >= r && n.length > 0 && (e = !0),
                        "" !== a
                            ? (c(e ? u(a + "...") : a, { x: t.x, y: t.y + o * d }), (a = ""))
                            : c(u(n.shift() ?? ""), { x: t.x, y: t.y + o * d }),
                        e)
                    )
                        break;
                    d += 1;
                } else (a += ` ${n.shift()}`), 0 === n.length && c(a, { x: t.x, y: t.y + o * d });
        }
        return { x: t.x, y: t.y, w: s.width, h: s.actualBoundingBoxAscent + s.actualBoundingBoxDescent };
    }
    drawFormattedMessage(e, t, n) {
        this.font.truncate === r.Kq.Wrap &&
            console.warn(
                "DiscordCavas: `drawFormattedMessage` doesn't currently support wrapping formatted text. The results of this draw likely won't match your expectations.",
            );
        let i = this.font.weight,
            l = (e, t, n) => {
                let l;
                return (
                    "strong" === e.type && this.setFont({ weight: 700 }),
                    (l = Array.isArray(e.content) ? s(e.content, t, n) : this.drawText(e.content, t, n)),
                    this.setFont({ weight: i }),
                    l
                );
            },
            s = (e, t, n) => {
                let i = 0;
                return (
                    e.forEach((e) => {
                        let { x: s, y: r, w: a, h: o } = t,
                            c = null != a ? a - i : void 0,
                            u = l(e, { x: s + i, y: r, w: c, h: o }, n);
                        null != u && (i += u.w);
                    }),
                    { x: t.x + i, y: t.y, w: i, h: this.font.size }
                );
            };
        Array.isArray(e) ? s(e, t, n) : l(e, t, n);
    }
    drawImage(e, t, n) {
        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : { fillMode: r.VZ.Stretch };
        l()(null != this.assetMap, "DiscordCavas: `drawImage` requires an AssetMap to be initialized.");
        let { fillMode: s } = i;
        if (null == this.context) return r.uS.Failure;
        this.setContextProperties();
        let a = this.assetMap.get(e);
        if (null == a) return r.uS.ImageNotLoaded;
        if (null != n) {
            if (s === r.VZ.Contain) {
                let i,
                    l = { w: a.width, h: a.height },
                    s = +(l.w / l.h).toFixed(1);
                if (+(n.w / n.h).toFixed(1) > s) {
                    let e = n.h * s;
                    i = { x: t.x + (n.w - e) / 2, y: t.y, w: e, h: n.h };
                } else {
                    let e = n.w / s;
                    i = { x: t.x, y: t.y + (n.h - e) / 2, w: n.w, h: e };
                }
                return (
                    this.drawCroppedImage(e, { x: 0, y: 0, w: l.w, h: l.h }, { x: i.x, y: i.y, w: i.w, h: i.h }),
                    r.uS.Success
                );
            }
            if (s === r.VZ.Cover) {
                let l,
                    s = { w: a.width, h: a.height },
                    o = +(s.w / s.h).toFixed(1),
                    c = +(n.w / n.h).toFixed(1);
                if (c > o) {
                    let e = s.w / c;
                    l = { ...{ x: 0, y: (s.h - e) * (i?.focus?.y ?? 0.5) }, w: a.width, h: e };
                } else {
                    let e = s.h * c;
                    l = { ...{ x: (a.width - e) * (i?.focus?.x ?? 0.5), y: 0 }, w: e, h: a.height };
                }
                return this.drawCroppedImage(e, l, { x: t.x, y: t.y, w: n.w, h: n.h }), r.uS.Success;
            }
            if (null != this.offscreenCanvasCache) return this.drawCachedImage(e, t, n);
            this.context.drawImage(a, t.x, t.y, n.w, n.h);
        } else {
            if (null != this.offscreenCanvasCache) return this.drawCachedImage(e, t);
            this.context.drawImage(a, t.x, t.y);
        }
        return r.uS.Success;
    }
    drawRoundedImage(e, t, n, i, l) {
        if (null == this.context) return r.uS.Failure;
        let { x: s, y: a } = t,
            { w: o, h: c } = n;
        this.context.save();
        let u = new Path2D();
        u.roundRect(s, a, o, c, i), this.context.clip(u);
        let d = this.drawImage(e, t, n, l);
        return this.restoreContext(), d;
    }
    drawCroppedImage(e, t, n) {
        if ((null != this.offscreenCanvasCache && this.drawCroppedCachedImage(e, t, n), null == this.context))
            return r.uS.Failure;
        let i = this.assetMap?.get(e);
        if (null == i) return r.uS.ImageNotLoaded;
        if (null != this.offscreenCanvasCache) return this.drawCroppedCachedImage(e, t, n);
        {
            let { x: e, y: l, w: s, h: r } = t,
                { x: a, y: o, w: c, h: u } = n;
            this.context.drawImage(i, e, l, s, r, a, o, c, u);
        }
        return r.uS.Success;
    }
    drawCachedImage(e, t, n) {
        if (
            (l()(null != this.assetMap, "DiscordCavas: `drawImage` requires an AssetMap to be initialized."),
            l()(
                null != this.offscreenCanvasCache,
                "DiscordCavas: `drawCachedImage` requires an offscreen canvas being initialized.",
            ),
            null == this.context)
        )
            return r.uS.Failure;
        let i = this.assetMap.get(e);
        if (null == i) return r.uS.ImageNotLoaded;
        let s = this.offscreenCanvasCache.getImage(e.toString(), i, this.getFilterString());
        return null == s
            ? r.uS.Failure
            : (this.context.drawImage(
                  this.offscreenCanvasCache.canvas,
                  s.x,
                  s.y,
                  s.w,
                  s.h,
                  t.x,
                  t.y,
                  n?.w ?? s.w,
                  n?.h ?? s.h,
              ),
              r.uS.Success);
    }
    drawCroppedCachedImage(e, t, n) {
        if (
            (l()(null != this.assetMap, "DiscordCavas: `drawImage` requires an AssetMap to be initialized."),
            l()(
                null != this.offscreenCanvasCache,
                "DiscordCavas: `drawCachedImage` requires an offscreen canvas being initialized.",
            ),
            null == this.context)
        )
            return r.uS.Failure;
        let i = this.assetMap.get(e);
        if (null == i) return r.uS.ImageNotLoaded;
        let s = this.offscreenCanvasCache.getImage(e.toString(), i, this.getFilterString());
        if (null == s) return r.uS.Failure;
        let { x: a, y: o, w: c, h: u } = t,
            { x: d, y: h, w: m, h: p } = n;
        return (
            this.context.drawImage(this.offscreenCanvasCache.canvas, s.x + a, s.y + o, c, u, d, h, m, p), r.uS.Success
        );
    }
    drawPath(e, t) {
        let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        if (null == this.context) return r.uS.Failure;
        this.setContextProperties(), this.context.save();
        let l = new Path2D(e);
        return (
            this.context.translate(t.x, t.y),
            this.context.scale(i, i),
            n ? this.context.fill(l, "evenodd") : this.context.stroke(l),
            this.restoreContext(),
            r.uS.Success
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
            ? r.uS.Failure
            : (this.setGradientFillStyle(e, t, n), this.drawRect(i, !0, !1), r.uS.Success);
    }
    drawRoundedGradientRect(e, t, n, i, l) {
        return null == this.context
            ? r.uS.Failure
            : (this.setGradientFillStyle(e, t, n), this.drawRoundedRect(i, l, !0, !1), r.uS.Success);
    }
    clip(e, t) {
        if (null == this.context) return;
        this.context.save();
        let { x: n, y: i } = e,
            l = new Path2D(t);
        this.context.translate(n, i), this.context.clip(l);
    }
    clipRect(e, t) {
        if (null == this.context) return;
        this.context.save();
        let { x: n, y: i, w: l, h: s } = e;
        if (t) {
            let e = new Path2D();
            e.moveTo(0, 0),
                e.lineTo(this.canvas.width, 0),
                e.lineTo(this.canvas.width, this.canvas.height),
                e.lineTo(0, this.canvas.height),
                e.lineTo(0, 0),
                e.closePath(),
                e.rect(n, i, l, s),
                this.context.clip(e, "evenodd");
        } else {
            let e = new Path2D();
            e.rect(n, i, l, s), this.context.clip(e);
        }
    }
    clipRoundedRect(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 ? arguments[2] : void 0;
        if (null == this.context) return;
        this.context.save();
        let { x: i, y: l, w: s, h: r } = e;
        if (n) {
            let e = new Path2D();
            e.moveTo(0, 0),
                e.lineTo(this.canvas.width, 0),
                e.lineTo(this.canvas.width, this.canvas.height),
                e.lineTo(0, this.canvas.height),
                e.lineTo(0, 0),
                e.closePath(),
                e.roundRect(i, l, s, r, t),
                this.context.clip(e, "evenodd");
        } else {
            let e = new Path2D();
            e.roundRect(i, l, s, r, t), this.context.clip(e);
        }
    }
}
