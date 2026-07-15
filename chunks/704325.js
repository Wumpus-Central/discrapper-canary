i.d(e, { Signature: () => y });
var n = i(529058),
    s = i(287822),
    o = i(748922),
    r = i(898159),
    a = i(898369),
    h = i(188043);
i(48913);
var l = i(787146),
    d = i(878176),
    c = i(296767),
    u = i(425128),
    v = i(17853),
    _ = class {
        constructor(t, e, i, n) {
            if (
                ((0, u.t)(this, "x", void 0),
                (0, u.t)(this, "y", void 0),
                (0, u.t)(this, "pressure", void 0),
                (0, u.t)(this, "time", void 0),
                isNaN(t) || isNaN(e))
            )
                throw Error(`Point is invalid: (${t}, ${e})`);
            (this.x = +t), (this.y = +e), (this.pressure = i || 0), (this.time = n || Date.now());
        }
        distanceTo(t) {
            return Math.sqrt(Math.pow(this.x - t.x, 2) + Math.pow(this.y - t.y, 2));
        }
        equals(t) {
            return this.x === t.x && this.y === t.y && this.pressure === t.pressure && this.time === t.time;
        }
        velocityFrom(t) {
            return this.time !== t.time ? this.distanceTo(t) / (this.time - t.time) : 0;
        }
    },
    p = class t {
        constructor(t, e, i, n, s, o) {
            (this.startPoint = t),
                (this.control2 = e),
                (this.control1 = i),
                (this.endPoint = n),
                (this.startWidth = s),
                (this.endWidth = o);
        }
        static fromPoints(e, i) {
            let n = this.calculateControlPoints(e[0], e[1], e[2]).c2,
                s = this.calculateControlPoints(e[1], e[2], e[3]).c1;
            return new t(e[1], n, s, e[2], i.start, i.end);
        }
        static calculateControlPoints(t, e, i) {
            let n = t.x - e.x,
                s = t.y - e.y,
                o = e.x - i.x,
                r = e.y - i.y,
                a = { x: (t.x + e.x) / 2, y: (t.y + e.y) / 2 },
                h = { x: (e.x + i.x) / 2, y: (e.y + i.y) / 2 },
                l = Math.sqrt(n * n + s * s),
                d = Math.sqrt(o * o + r * r),
                c = a.x - h.x,
                u = a.y - h.y,
                v = l + d == 0 ? 0 : d / (l + d),
                p = { x: h.x + c * v, y: h.y + u * v },
                g = e.x - p.x,
                m = e.y - p.y;
            return { c1: new _(a.x + g, a.y + m), c2: new _(h.x + g, h.y + m) };
        }
        length() {
            let t,
                e,
                i = 0;
            for (let n = 0; n <= 10; n += 1) {
                let s = n / 10,
                    o = this.point(s, this.startPoint.x, this.control1.x, this.control2.x, this.endPoint.x),
                    r = this.point(s, this.startPoint.y, this.control1.y, this.control2.y, this.endPoint.y);
                if (n > 0) {
                    let n = o - t,
                        s = r - e;
                    i += Math.sqrt(n * n + s * s);
                }
                (t = o), (e = r);
            }
            return i;
        }
        point(t, e, i, n, s) {
            return (
                e * (1 - t) * (1 - t) * (1 - t) +
                3 * i * (1 - t) * (1 - t) * t +
                3 * n * (1 - t) * t * t +
                s * t * t * t
            );
        }
    },
    g = class {
        constructor() {
            (0, u.t)(this, "_et", void 0);
            try {
                this._et = new EventTarget();
            } catch {
                this._et = document;
            }
        }
        addEventListener(t, e, i) {
            this._et.addEventListener(t, e, i);
        }
        dispatchEvent(t) {
            return this._et.dispatchEvent(t);
        }
        removeEventListener(t, e, i) {
            this._et.removeEventListener(t, e, i);
        }
    },
    m = class t extends g {
        constructor(e, i = {}) {
            super(),
                (0, u.t)(this, "dotSize", void 0),
                (0, u.t)(this, "minWidth", void 0),
                (0, u.t)(this, "maxWidth", void 0),
                (0, u.t)(this, "penColor", void 0),
                (0, u.t)(this, "minDistance", void 0),
                (0, u.t)(this, "velocityFilterWeight", void 0),
                (0, u.t)(this, "compositeOperation", void 0),
                (0, u.t)(this, "backgroundColor", void 0),
                (0, u.t)(this, "throttle", void 0),
                (0, u.t)(this, "canvasContextOptions", void 0),
                (0, u.t)(this, "_ctx", void 0),
                (0, u.t)(this, "_drawingStroke", !1),
                (0, u.t)(this, "_isEmpty", !0),
                (0, u.t)(this, "_dataUrl", void 0),
                (0, u.t)(this, "_dataUrlOptions", void 0),
                (0, u.t)(this, "_lastPoints", []),
                (0, u.t)(this, "_data", []),
                (0, u.t)(this, "_lastVelocity", 0),
                (0, u.t)(this, "_lastWidth", 0),
                (0, u.t)(this, "_strokeMoveUpdate", void 0),
                (0, u.t)(this, "_strokePointerId", void 0),
                (this.canvas = e),
                (this.velocityFilterWeight = i.velocityFilterWeight || 0.7),
                (this.minWidth = i.minWidth || 0.5),
                (this.maxWidth = i.maxWidth || 2.5),
                (this.throttle = i.throttle ?? 16),
                (this.minDistance = i.minDistance ?? 5),
                (this.dotSize = i.dotSize || 0),
                (this.penColor = i.penColor || "black"),
                (this.backgroundColor = i.backgroundColor || "rgba(0,0,0,0)"),
                (this.compositeOperation = i.compositeOperation || "source-over"),
                (this.canvasContextOptions = i.canvasContextOptions ?? {}),
                (this._strokeMoveUpdate = this.throttle
                    ? (function (t, e = 250) {
                          let i,
                              n,
                              s,
                              o = 0,
                              r = null,
                              a = () => {
                                  (o = Date.now()), (r = null), (i = t.apply(n, s)), r || ((n = null), (s = []));
                              };
                          return function (...h) {
                              let l = Date.now(),
                                  d = e - (l - o);
                              return (
                                  (n = this),
                                  (s = h),
                                  d <= 0 || d > e
                                      ? (r && (clearTimeout(r), (r = null)),
                                        (o = l),
                                        (i = t.apply(n, s)),
                                        r || ((n = null), (s = [])))
                                      : r || (r = window.setTimeout(a, d)),
                                  i
                              );
                          };
                      })(t.prototype._strokeUpdate, this.throttle)
                    : t.prototype._strokeUpdate),
                (this._handleMouseDown = this._handleMouseDown.bind(this)),
                (this._handleMouseMove = this._handleMouseMove.bind(this)),
                (this._handleMouseUp = this._handleMouseUp.bind(this)),
                (this._handleTouchStart = this._handleTouchStart.bind(this)),
                (this._handleTouchMove = this._handleTouchMove.bind(this)),
                (this._handleTouchEnd = this._handleTouchEnd.bind(this)),
                (this._handlePointerDown = this._handlePointerDown.bind(this)),
                (this._handlePointerMove = this._handlePointerMove.bind(this)),
                (this._handlePointerUp = this._handlePointerUp.bind(this)),
                (this._handlePointerCancel = this._handlePointerCancel.bind(this)),
                (this._handleTouchCancel = this._handleTouchCancel.bind(this)),
                (this._ctx = e.getContext("2d", this.canvasContextOptions)),
                this.clear(),
                this.on();
        }
        clear() {
            let { _ctx: t, canvas: e } = this;
            (t.fillStyle = this.backgroundColor),
                t.clearRect(0, 0, e.width, e.height),
                t.fillRect(0, 0, e.width, e.height),
                (this._data = []),
                this._reset(this._getPointGroupOptions()),
                (this._isEmpty = !0),
                (this._dataUrl = void 0),
                (this._dataUrlOptions = void 0),
                (this._strokePointerId = void 0);
        }
        redraw() {
            let t = this._data,
                e = this._dataUrl,
                i = this._dataUrlOptions;
            this.clear(), e && this.fromDataURL(e, i), this.fromData(t, { clear: !1 });
        }
        fromDataURL(t, e = {}) {
            return new Promise((i, n) => {
                let s = new Image(),
                    o = e.ratio || window.devicePixelRatio || 1,
                    r = e.width || this.canvas.width / o,
                    a = e.height || this.canvas.height / o,
                    h = e.xOffset || 0,
                    l = e.yOffset || 0;
                this._reset(this._getPointGroupOptions()),
                    (s.onload = () => {
                        this._ctx.drawImage(s, h, l, r, a), i();
                    }),
                    (s.onerror = (t) => {
                        n(t);
                    }),
                    (s.crossOrigin = "anonymous"),
                    (s.src = t),
                    (this._isEmpty = !1),
                    (this._dataUrl = t),
                    (this._dataUrlOptions = { ...e });
            });
        }
        toDataURL(t = "image/png", e) {
            return "image/svg+xml" === t
                ? ("object" != typeof e && (e = void 0), `data:image/svg+xml;base64,${btoa(this.toSVG(e))}`)
                : ("number" != typeof e && (e = void 0), this.canvas.toDataURL(t, e));
        }
        on() {
            (this.canvas.style.touchAction = "none"),
                (this.canvas.style.msTouchAction = "none"),
                (this.canvas.style.userSelect = "none"),
                (this.canvas.style.webkitUserSelect = "none");
            let t = /Macintosh/.test(navigator.userAgent) && "ontouchstart" in document;
            window.PointerEvent && !t
                ? this._handlePointerEvents()
                : (this._handleMouseEvents(), "ontouchstart" in window && this._handleTouchEvents());
        }
        off() {
            (this.canvas.style.touchAction = "auto"),
                (this.canvas.style.msTouchAction = "auto"),
                (this.canvas.style.userSelect = "auto"),
                (this.canvas.style.webkitUserSelect = "auto"),
                this.canvas.removeEventListener("pointerdown", this._handlePointerDown),
                this.canvas.removeEventListener("mousedown", this._handleMouseDown),
                this.canvas.removeEventListener("touchstart", this._handleTouchStart),
                this._removeMoveUpEventListeners();
        }
        _getListenerFunctions() {
            let t =
                window.document === this.canvas.ownerDocument
                    ? window
                    : (this.canvas.ownerDocument.defaultView ?? this.canvas.ownerDocument);
            return { addEventListener: t.addEventListener.bind(t), removeEventListener: t.removeEventListener.bind(t) };
        }
        _removeMoveUpEventListeners() {
            let { removeEventListener: t } = this._getListenerFunctions();
            t("pointermove", this._handlePointerMove),
                t("pointerup", this._handlePointerUp),
                t("pointercancel", this._handlePointerCancel),
                t("mousemove", this._handleMouseMove),
                t("mouseup", this._handleMouseUp),
                t("touchmove", this._handleTouchMove),
                t("touchend", this._handleTouchEnd),
                t("touchcancel", this._handleTouchCancel);
        }
        isEmpty() {
            return this._isEmpty;
        }
        fromData(t, { clear: e = !0 } = {}) {
            e && this.clear(),
                this._fromData(t, this._drawCurve.bind(this), this._drawDot.bind(this)),
                (this._data = this._data.concat(t));
        }
        toData() {
            return this._data;
        }
        _isLeftButtonPressed(t, e) {
            return e ? 1 === t.buttons : (1 & t.buttons) == 1;
        }
        _pointerEventToSignatureEvent(t) {
            return { event: t, type: t.type, x: t.clientX, y: t.clientY, pressure: "pressure" in t ? t.pressure : 0 };
        }
        _touchEventToSignatureEvent(t) {
            let e = t.changedTouches[0];
            return { event: t, type: t.type, x: e.clientX, y: e.clientY, pressure: e.force };
        }
        _handleMouseDown(t) {
            this._isLeftButtonPressed(t, !0) &&
                !this._drawingStroke &&
                this._strokeBegin(this._pointerEventToSignatureEvent(t));
        }
        _handleMouseMove(t) {
            this._isLeftButtonPressed(t, !0) && this._drawingStroke
                ? this._strokeMoveUpdate(this._pointerEventToSignatureEvent(t))
                : this._strokeEnd(this._pointerEventToSignatureEvent(t), !1);
        }
        _handleMouseUp(t) {
            this._isLeftButtonPressed(t) || this._strokeEnd(this._pointerEventToSignatureEvent(t));
        }
        _handleTouchStart(t) {
            1 !== t.targetTouches.length ||
                this._drawingStroke ||
                (t.cancelable && t.preventDefault(), this._strokeBegin(this._touchEventToSignatureEvent(t)));
        }
        _handleTouchMove(t) {
            if (1 === t.targetTouches.length) {
                if ((t.cancelable && t.preventDefault(), !this._drawingStroke))
                    return void this._strokeEnd(this._touchEventToSignatureEvent(t), !1);
                this._strokeMoveUpdate(this._touchEventToSignatureEvent(t));
            }
        }
        _handleTouchEnd(t) {
            0 === t.targetTouches.length &&
                (t.cancelable && t.preventDefault(), this._strokeEnd(this._touchEventToSignatureEvent(t)));
        }
        _handlePointerCancel(t) {
            this._allowPointerId(t) && (t.preventDefault(), this._strokeEnd(this._pointerEventToSignatureEvent(t), !1));
        }
        _handleTouchCancel(t) {
            t.cancelable && t.preventDefault(), this._strokeEnd(this._touchEventToSignatureEvent(t), !1);
        }
        _getPointerId(t) {
            return t.persistentDeviceId || t.pointerId;
        }
        _allowPointerId(t, e = !1) {
            return void 0 === this._strokePointerId ? e : this._getPointerId(t) === this._strokePointerId;
        }
        _handlePointerDown(t) {
            !this._drawingStroke &&
                this._isLeftButtonPressed(t) &&
                this._allowPointerId(t, !0) &&
                ((this._strokePointerId = this._getPointerId(t)),
                t.preventDefault(),
                this._strokeBegin(this._pointerEventToSignatureEvent(t)));
        }
        _handlePointerMove(t) {
            if (this._allowPointerId(t)) {
                if (!this._isLeftButtonPressed(t, !0) || !this._drawingStroke)
                    return void this._strokeEnd(this._pointerEventToSignatureEvent(t), !1);
                t.preventDefault(), this._strokeMoveUpdate(this._pointerEventToSignatureEvent(t));
            }
        }
        _handlePointerUp(t) {
            !this._isLeftButtonPressed(t) &&
                this._allowPointerId(t) &&
                (t.preventDefault(), this._strokeEnd(this._pointerEventToSignatureEvent(t)));
        }
        _getPointGroupOptions(t) {
            return {
                penColor: t && "penColor" in t ? t.penColor : this.penColor,
                dotSize: t && "dotSize" in t ? t.dotSize : this.dotSize,
                minWidth: t && "minWidth" in t ? t.minWidth : this.minWidth,
                maxWidth: t && "maxWidth" in t ? t.maxWidth : this.maxWidth,
                velocityFilterWeight:
                    t && "velocityFilterWeight" in t ? t.velocityFilterWeight : this.velocityFilterWeight,
                compositeOperation: t && "compositeOperation" in t ? t.compositeOperation : this.compositeOperation,
            };
        }
        _strokeBegin(t) {
            if (!this.dispatchEvent(new CustomEvent("beginStroke", { detail: t, cancelable: !0 }))) return;
            let { addEventListener: e } = this._getListenerFunctions();
            switch (t.event.type) {
                case "mousedown":
                    e("mousemove", this._handleMouseMove, { passive: !1 }),
                        e("mouseup", this._handleMouseUp, { passive: !1 });
                    break;
                case "touchstart":
                    e("touchmove", this._handleTouchMove, { passive: !1 }),
                        e("touchend", this._handleTouchEnd, { passive: !1 }),
                        e("touchcancel", this._handleTouchCancel, { passive: !1 });
                    break;
                case "pointerdown":
                    e("pointermove", this._handlePointerMove, { passive: !1 }),
                        e("pointerup", this._handlePointerUp, { passive: !1 }),
                        e("pointercancel", this._handlePointerCancel, { passive: !1 });
            }
            this._drawingStroke = !0;
            let i = this._getPointGroupOptions(),
                n = { ...i, points: [] };
            this._data.push(n), this._reset(i), this._strokeUpdate(t);
        }
        _strokeUpdate(t) {
            if (!this._drawingStroke) return;
            if (0 === this._data.length) return void this._strokeBegin(t);
            this.dispatchEvent(new CustomEvent("beforeUpdateStroke", { detail: t }));
            let e = this._createPoint(t.x, t.y, t.pressure),
                i = this._data[this._data.length - 1],
                n = i.points,
                s = n.length > 0 && n[n.length - 1],
                o = !!s && e.distanceTo(s) <= this.minDistance,
                r = this._getPointGroupOptions(i);
            if (!s || !(s && o)) {
                let t = this._addPoint(e, r);
                s ? t && this._drawCurve(t, r) : this._drawDot(e, r),
                    n.push({ time: e.time, x: e.x, y: e.y, pressure: e.pressure });
            }
            this.dispatchEvent(new CustomEvent("afterUpdateStroke", { detail: t }));
        }
        _strokeEnd(t, e = !0) {
            this._removeMoveUpEventListeners(),
                this._drawingStroke &&
                    (e && this._strokeUpdate(t),
                    (this._drawingStroke = !1),
                    (this._strokePointerId = void 0),
                    this.dispatchEvent(new CustomEvent("endStroke", { detail: t })));
        }
        _handlePointerEvents() {
            (this._drawingStroke = !1),
                this.canvas.addEventListener("pointerdown", this._handlePointerDown, { passive: !1 });
        }
        _handleMouseEvents() {
            (this._drawingStroke = !1),
                this.canvas.addEventListener("mousedown", this._handleMouseDown, { passive: !1 });
        }
        _handleTouchEvents() {
            this.canvas.addEventListener("touchstart", this._handleTouchStart, { passive: !1 });
        }
        _reset(t) {
            (this._lastPoints = []),
                (this._lastVelocity = 0),
                (this._lastWidth = (t.minWidth + t.maxWidth) / 2),
                (this._ctx.fillStyle = t.penColor),
                (this._ctx.globalCompositeOperation = t.compositeOperation);
        }
        _createPoint(t, e, i) {
            let n = this.canvas.getBoundingClientRect();
            return new _(t - n.left, e - n.top, i, new Date().getTime());
        }
        _addPoint(t, e) {
            let { _lastPoints: i } = this;
            if ((i.push(t), i.length > 2)) {
                3 === i.length && i.unshift(i[0]);
                let t = this._calculateCurveWidths(i[1], i[2], e),
                    n = p.fromPoints(i, t);
                return i.shift(), n;
            }
            return null;
        }
        _calculateCurveWidths(t, e, i) {
            let n = i.velocityFilterWeight * e.velocityFrom(t) + (1 - i.velocityFilterWeight) * this._lastVelocity,
                s = this._strokeWidth(n, i),
                o = { end: s, start: this._lastWidth };
            return (this._lastVelocity = n), (this._lastWidth = s), o;
        }
        _strokeWidth(t, e) {
            return Math.max(e.maxWidth / (t + 1), e.minWidth);
        }
        _drawCurveSegment(t, e, i) {
            let n = this._ctx;
            n.moveTo(t, e), n.arc(t, e, i, 0, 2 * Math.PI, !1), (this._isEmpty = !1);
        }
        _drawCurve(t, e) {
            let i = this._ctx,
                n = t.endWidth - t.startWidth,
                s = 2 * Math.ceil(t.length());
            i.beginPath(), (i.fillStyle = e.penColor);
            for (let i = 0; i < s; i += 1) {
                let o = i / s,
                    r = o * o,
                    a = r * o,
                    h = 1 - o,
                    l = h * h,
                    d = l * h,
                    c = d * t.startPoint.x;
                c += 3 * l * o * t.control1.x + 3 * h * r * t.control2.x + a * t.endPoint.x;
                let u = d * t.startPoint.y;
                u += 3 * l * o * t.control1.y + 3 * h * r * t.control2.y + a * t.endPoint.y;
                let v = Math.min(t.startWidth + a * n, e.maxWidth);
                this._drawCurveSegment(c, u, v);
            }
            i.closePath(), i.fill();
        }
        _drawDot(t, e) {
            let i = this._ctx,
                n = e.dotSize > 0 ? e.dotSize : (e.minWidth + e.maxWidth) / 2;
            i.beginPath(), this._drawCurveSegment(t.x, t.y, n), i.closePath(), (i.fillStyle = e.penColor), i.fill();
        }
        _fromData(t, e, i) {
            for (let n of t) {
                let { points: t } = n,
                    s = this._getPointGroupOptions(n);
                if (t.length > 1)
                    for (let i = 0; i < t.length; i += 1) {
                        let n = t[i],
                            o = new _(n.x, n.y, n.pressure, n.time);
                        0 === i && this._reset(s);
                        let r = this._addPoint(o, s);
                        r && e(r, s);
                    }
                else this._reset(s), i(t[0], s);
            }
        }
        toSVG({ includeBackgroundColor: t = !1, includeDataUrl: e = !1 } = {}) {
            let i = this._data,
                n = Math.max(window.devicePixelRatio || 1, 1),
                s = this.canvas.width / n,
                o = this.canvas.height / n,
                r = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            if (
                (r.setAttribute("xmlns", "http://www.w3.org/2000/svg"),
                r.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"),
                r.setAttribute("viewBox", `0 0 ${s} ${o}`),
                r.setAttribute("width", s.toString()),
                r.setAttribute("height", o.toString()),
                t && this.backgroundColor)
            ) {
                let t = document.createElement("rect");
                t.setAttribute("width", "100%"),
                    t.setAttribute("height", "100%"),
                    t.setAttribute("fill", this.backgroundColor),
                    r.appendChild(t);
            }
            if (e && this._dataUrl) {
                let t = this._dataUrlOptions?.ratio || window.devicePixelRatio || 1,
                    e = this._dataUrlOptions?.width || this.canvas.width / t,
                    i = this._dataUrlOptions?.height || this.canvas.height / t,
                    n = this._dataUrlOptions?.xOffset || 0,
                    s = this._dataUrlOptions?.yOffset || 0,
                    o = document.createElement("image");
                o.setAttribute("x", n.toString()),
                    o.setAttribute("y", s.toString()),
                    o.setAttribute("width", e.toString()),
                    o.setAttribute("height", i.toString()),
                    o.setAttribute("preserveAspectRatio", "none"),
                    o.setAttribute("href", this._dataUrl),
                    r.appendChild(o);
            }
            return (
                this._fromData(
                    i,
                    (t, { penColor: e }) => {
                        let i = document.createElement("path");
                        if (
                            !isNaN(t.control1.x) &&
                            !isNaN(t.control1.y) &&
                            !isNaN(t.control2.x) &&
                            !isNaN(t.control2.y)
                        ) {
                            let n = `M ${t.startPoint.x.toFixed(3)},${t.startPoint.y.toFixed(3)} C ${t.control1.x.toFixed(3)},${t.control1.y.toFixed(3)} ${t.control2.x.toFixed(3)},${t.control2.y.toFixed(3)} ${t.endPoint.x.toFixed(3)},${t.endPoint.y.toFixed(3)}`;
                            i.setAttribute("d", n),
                                i.setAttribute("stroke-width", (2.25 * t.endWidth).toFixed(3)),
                                i.setAttribute("stroke", e),
                                i.setAttribute("fill", "none"),
                                i.setAttribute("stroke-linecap", "round"),
                                r.appendChild(i);
                        }
                    },
                    (t, { penColor: e, dotSize: i, minWidth: n, maxWidth: s }) => {
                        let o = document.createElement("circle");
                        o.setAttribute("r", (i > 0 ? i : (n + s) / 2).toString()),
                            o.setAttribute("cx", t.x.toString()),
                            o.setAttribute("cy", t.y.toString()),
                            o.setAttribute("fill", e),
                            r.appendChild(o);
                    },
                ),
                r.outerHTML
            );
        }
    },
    w = (0, s.a)(
        (
            {
                onBeginStroke: t,
                hasDrawing: e,
                placeholder: i,
                ariaLabel: n,
                customPenColor: o,
                customPenStrokeWidth: r,
                customBackgroundColor: a,
                customBorderColor: h,
            },
            l,
        ) => {
            let d = (0, s.l)(null),
                c = (0, s.l)(null),
                u = (0, s.l)(null),
                v = (0, s.l)(t);
            v.current = t;
            let _ = (0, s.h)(() => {
                let t = d.current,
                    e = c.current,
                    i = u.current;
                if (!t || !e || !i) return;
                let n = Math.max(window.devicePixelRatio || 1, 1),
                    s = e.getContext("2d"),
                    { width: o, height: r } = t.getBoundingClientRect();
                if (0 === o || 0 === r || !s) return;
                let a = i.isEmpty() ? null : i.toData();
                (e.width = Math.floor(o * n)),
                    (e.height = Math.floor(r * n)),
                    s.setTransform(n, 0, 0, n, 0, 0),
                    a ? i.fromData(a, { clear: !0 }) : i.clear();
            }, []);
            return (
                (0, s.u)(
                    l,
                    () => ({
                        clear: () => {
                            u.current?.clear();
                        },
                        isEmpty: () => u.current?.isEmpty() ?? !0,
                        toDataURL: (t = "image/png", e) => u.current?.toDataURL(t, e) ?? "",
                        getCanvas: () => c.current,
                        getSignaturePad: () => u.current,
                        on: () => u.current?.on(),
                        off: () => u.current?.off(),
                        getSignatureWithWhiteBackground: () => {
                            let t = c.current;
                            if (!t) return null;
                            let e = document.createElement("canvas");
                            (e.width = t.width), (e.height = t.height);
                            let i = e.getContext("2d");
                            if (!i) throw Error("Canvas 2D context is not available");
                            return (
                                (i.fillStyle = "#ffffff"), i.fillRect(0, 0, e.width, e.height), i.drawImage(t, 0, 0), e
                            );
                        },
                        getBlob: (t = c.current ?? void 0, e = "image/jpeg", i = 0.92) =>
                            t
                                ? new Promise((n, s) => {
                                      t.toBlob(
                                          (t) => {
                                              t ? n(t) : s(Error("Canvas toBlob() returned null"));
                                          },
                                          e,
                                          "image/jpeg" === e || "image/webp" === e ? i : void 0,
                                      );
                                  })
                                : Promise.reject(Error("No canvas available for getBlob")),
                    }),
                    [],
                ),
                (0, s._)(() => {
                    let t = d.current,
                        e = c.current;
                    if (!t || !e) return;
                    let i = null,
                        n =
                            o ??
                            ((t) => {
                                if ("u" < typeof document) return null;
                                let e = document.createElement("div");
                                (e.style.color = t),
                                    (e.style.position = "absolute"),
                                    (e.style.visibility = "hidden"),
                                    document.body.appendChild(e);
                                let i = getComputedStyle(e).color;
                                if ((document.body.removeChild(e), !i || "transparent" === i)) return null;
                                let n = i.match(/\d+/g);
                                if (n && n.length >= 3) {
                                    let t = Number.parseInt(n[0], 10),
                                        e = Number.parseInt(n[1], 10),
                                        i = Number.parseInt(n[2], 10),
                                        s = (t) => {
                                            let e = t.toString(16);
                                            return 1 === e.length ? `0${e}` : e;
                                        };
                                    return `#${s(t)}${s(e)}${s(i)}`;
                                }
                                return null;
                            })("var(--icon-neutral-800)"),
                        s = new m(e, { ...(n ? { penColor: n } : {}), ...(r ? { maxWidth: r } : {}) });
                    u.current = s;
                    let a = () => v.current?.();
                    s.addEventListener("beginStroke", a), _();
                    let h = new ResizeObserver(() => {
                        null === i &&
                            (i = requestAnimationFrame(() => {
                                (i = null), _();
                            }));
                    });
                    return (
                        h.observe(t),
                        () => {
                            null !== i && cancelAnimationFrame(i),
                                h.disconnect(),
                                s.removeEventListener("beginStroke", a),
                                s.off(),
                                (u.current = null);
                        }
                    );
                }, [_, o, r]),
                (0, s.v)("div", {
                    class: "SignatureCanvasContainer",
                    style: a || h ? { ...(a ? { backgroundColor: a } : {}), ...(h ? { borderColor: h } : {}) } : void 0,
                    ref: d,
                    children: [
                        (0, s.v)("canvas", { class: "SignatureCanvas", ref: c, role: "img", "aria-label": n ?? i }),
                        !e &&
                            (0, s.v)("p", { class: "SignatureCanvasPlaceholder", "aria-hidden": "true", children: i }),
                    ],
                })
            );
        },
    );
w.displayName = "SignatureCanvas";
var f = ({ config: t, onFinish: e, onError: i }) => {
        let r,
            c,
            { t: u } = (0, n.n)(),
            [_, p] = (0, o.u)(() => (0, v.y)({ config: t }), { autoLoad: !0 }),
            [g, m] = (0, s.p)(!1),
            [f, y] = (0, s.p)(""),
            E = (0, s.l)(null),
            x = "error" === _.status ? _.error : void 0,
            b = "submitting" === _.status,
            S = "capture" === _.status && _.canContinue && !b,
            P = (0, s.h)(() => {
                E.current &&
                    (E.current.on(), E.current.clear(), m(!1), y(u("signature.cleared")), p.setSignatureValid(!1));
            }, [p, u]);
        (0, o.c)({ status: "finished" === _.status ? "finished" : "loading", onFinish: e }),
            (0, s._)(() => {
                x && (i?.(x), E.current?.on());
            }, [x, i]);
        let k = async () => {
                let e = E.current;
                if (!e) return;
                let i = e.getSignatureWithWhiteBackground();
                if (i)
                    return t.sendBase64
                        ? i.toDataURL("image/png").replace(/^data:image\/png;base64,/, "")
                        : e.getBlob(i);
            },
            C = async () => {
                let t = E.current;
                if (!(!t || "capture" !== _.status || t.isEmpty())) {
                    t.off();
                    try {
                        let e = await k();
                        if (!e) return void t.on();
                        p.submit(e);
                    } catch {
                        t.on();
                    }
                }
            };
        return "idle" === _.status || "finished" === _.status || "error" === _.status
            ? null
            : "success" === _.status
              ? (0, s.v)(d.t, { status: "success", successTitle: u("signature.successTitle") })
              : (0, s.v)(h.t, {
                    className: "IncodeSignature IncodeSignatureFadeIn",
                    title: (r = t.title?.trim()) || u("signature.fullSignatureTitle"),
                    subtitle: (c = t.subTitle?.trim()) || u("signature.subtitle"),
                    children: [
                        (0, s.v)("div", {
                            class: "IncodeSignatureContent",
                            children: [
                                (0, s.v)(w, {
                                    ref: E,
                                    hasDrawing: g,
                                    onBeginStroke: () => {
                                        m(!0), y(u("signature.captured")), p.setSignatureValid(!0);
                                    },
                                    placeholder: u("signature.fullSignaturePlaceholder"),
                                    ariaLabel: u("signature.canvasAriaLabel"),
                                    customBackgroundColor: t.canvasBackgroundColor,
                                    customBorderColor: t.canvasBorderColor,
                                    customPenColor: t.penColor,
                                    customPenStrokeWidth: t.penStrokeWidth,
                                }),
                                (0, s.v)(a.r, { size: 8 }),
                                (0, s.v)(l.t, {
                                    variant: "link",
                                    disabled: !g || b,
                                    onClick: P,
                                    children: u("signature.clear"),
                                }),
                                (0, s.v)("span", {
                                    class: "IncodeSrOnly",
                                    "aria-live": "polite",
                                    "aria-atomic": "true",
                                    children: f,
                                }),
                            ],
                        }),
                        (0, s.v)("div", {
                            class: "IncodeSignatureButtonContainer",
                            children: (0, s.v)(l.t, {
                                variant: "primary",
                                disabled: !S,
                                isLoading: b,
                                onClick: C,
                                children: u("signature.done"),
                            }),
                        }),
                    ],
                });
    },
    y = ({ config: t, onFinish: e, onError: i }) =>
        (0, s.v)(r.t, { children: t ? (0, s.v)(f, { config: t, onFinish: e, onError: i }) : null });
(0, c.t)(y, "incode-signature");
