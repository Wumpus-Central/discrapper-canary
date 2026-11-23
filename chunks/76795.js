n.d(t, { A: () => K });
var i,
    r = n(477900),
    l = n(582128),
    s = n(503698),
    a = n.n(s),
    o = n(317097),
    u = n(855986),
    c = n(858899),
    d = n(22231),
    h = n(775602),
    m = n(654107),
    p = n(495867),
    f = n(994500),
    g = n(287809),
    A = n(293651),
    v = n(972347),
    E = n(626584),
    I = n(654186),
    y = n(182667);
class C {
    senders = new Map();
    accept(e, t) {
        let n = this.senders.get(e);
        return (
            null == n && ((n = new Set()), this.senders.set(e, n)),
            !n.has(t) && (n.add(t), n.size > 256 && n.delete(n.values().next().value), !0)
        );
    }
}
(n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162), n(661191));
var S =
    (((i = {})[(i.Stroke = 0)] = "Stroke"),
    (i[(i.Cursor = 1)] = "Cursor"),
    (i[(i.Ping = 2)] = "Ping"),
    (i[(i.Stamp = 3)] = "Stamp"),
    (i[(i.StampGrowing = 4)] = "StampGrowing"),
    i);
let b = 1e3 / 30;
function w() {
    return Array.from(crypto.getRandomValues(new Uint32Array(2)), (e) => e.toString(16).padStart(8, "0")).join("");
}
let x = "stream-drawing",
    T = new E.A("StreamDrawing");
class R extends v.A {
    transport;
    userId;
    sentPings = new C();
    receivedPings = new C();
    constructor(e, t) {
        (super(), (this.transport = e), (this.userId = t), e.on(x, this.receive), e.on(I.I.Failure, this.failure));
    }
    receive = (e, t) => {
        (t.kind !== S.Ping || this.receivedPings.accept(e, t.strokeId)) && this.emit(x, e, t);
    };
    failure = (e) => T.error(e);
    sendPoint(e) {
        (e.kind !== S.Ping || this.sentPings.accept(BigInt(this.userId), e.strokeId)) &&
            (this.emit(x, BigInt(this.userId), e), this.transport.send("sendStreamDrawing", e));
    }
    dispose() {
        (this.transport.off(x, this.receive), this.transport.off(I.I.Failure, this.failure));
    }
}
let _ = new WeakMap();
var k = n(721326);
n(321073);
var P = n(382730);
function M(e, t) {
    if (t || e >= 300) return 1;
    let n = Math.max(0, e / 300),
        i = [
            [0, 1],
            [0.35, 1.5],
            [0.7, 0.9],
            [1, 1],
        ];
    for (let e = 1; e < i.length; e++) {
        let [t, r] = i[e],
            [l, s] = i[e - 1];
        if (n <= t) return s + (r - s) * (1 - (1 - (n - l) / (t - l)) ** 3);
    }
    return 1;
}
function O(e) {
    return Math.round(16 + 72 * Math.min(1, Math.max(0, (e - 150) / 1850)));
}
var D = n(269049);
class N {
    canvas;
    fit;
    getReducedMotion;
    imageHostRef;
    stamps = new Map();
    stampIds = new Map();
    pings = new Map();
    animatedImages = new Set();
    trails = new Map();
    cursors = new Map();
    frame = null;
    animation = null;
    destroyed = !1;
    visible = !0;
    targetWindow;
    strokeCanvas;
    maskCanvas;
    constructor(e, t, n = () => !1, i = { current: null }) {
        ((this.canvas = e),
            (this.fit = t),
            (this.getReducedMotion = n),
            (this.imageHostRef = i),
            (this.targetWindow = e.ownerDocument.defaultView ?? window),
            (this.strokeCanvas = e.ownerDocument.createElement("canvas")),
            (this.maskCanvas = e.ownerDocument.createElement("canvas")));
    }
    get imageHost() {
        return this.imageHostRef.current;
    }
    setVisible(e) {
        if (this.visible !== e)
            if (((this.visible = e), e)) this.wake();
            else
                for (let e of (null != this.animation && this.targetWindow.cancelAnimationFrame(this.animation),
                (this.animation = null),
                this.animatedImages))
                    e.hidden = !0;
    }
    setFrame(e) {
        null == e ||
            e.width <= 0 ||
            e.height <= 0 ||
            ((this.frame?.width !== e.width || this.frame?.height !== e.height) &&
                (this.trails.clear(),
                this.cursors.clear(),
                this.pings.clear(),
                this.clearStamps(),
                (this.frame = e),
                this.wake()));
    }
    add(e, t, n) {
        null != n ? this.setFrame(n) : (this.frame = { width: t.width, height: t.height });
        let i = performance.now();
        for (let [e, t] of this.trails) t.points[t.points.length - 1].expiresAt <= i && this.trails.delete(e);
        let r = e.toString() + ":" + t.strokeId,
            l = this.trails.get(r);
        if (null != l && (l.ended || t.sequence <= l.sequence)) return;
        if (null == l) {
            if (t.end) return;
            ((l = {
                sequence: -1,
                points: [],
                color: (0, o.Hl)(t.color),
                ended: !1,
                outlineWhite: t.outlineWhite ?? !1,
            }),
                this.trails.set(r, l));
        }
        for (l.sequence = t.sequence, l.ended = t.end; l.points.length > 1 && l.points[1].expiresAt <= i;)
            l.points.shift();
        let s = l.points[l.points.length - 1];
        if (
            ((t.end && null != s && s.x === t.x && s.y === t.y) ||
                l.points.push({ x: t.x, y: t.y, drawnAt: i, expiresAt: i + 5e3 }),
            t.end)
        )
            for (let e of l.points) e.drawnAt + 5e3 - 600 > i && (e.expiresAt = Math.max(e.expiresAt, i + 1500));
        this.wake();
    }
    addCursor(e, t, n, i, r) {
        null != i ? this.setFrame(i) : (this.frame = { width: t.width, height: t.height });
        let l = this.cursors.get(e);
        if (null == r && l?.point.strokeId === t.strokeId && l.point.sequence >= t.sequence) return;
        let s = (0, P.W)(t.emoji, !this.getReducedMotion()) ?? n,
            a = JSON.stringify(l?.point.emoji) === JSON.stringify(t.emoji) ? (l?.image ?? null) : null;
        (t.end ||
            null != a ||
            null == s ||
            (((a = this.canvas.ownerDocument.createElement("img")).onload = () => this.wake()), (a.src = s)),
            this.cursors.set(e, { point: t, time: performance.now(), image: a, localPosition: r }),
            this.wake());
    }
    addPing(e, t, n, i) {
        null != i ? this.setFrame(i) : (this.frame = { width: t.width, height: t.height });
        let r = this.cursors.get(e),
            l = (0, P.W)(t.emoji, !this.getReducedMotion()) ?? n,
            s = JSON.stringify(r?.point.emoji) === JSON.stringify(t.emoji) ? (r?.image ?? null) : null;
        null == s &&
            null != l &&
            (((s = this.canvas.ownerDocument.createElement("img")).onload = () => this.wake()), (s.src = l));
        let a = `${e}:${t.strokeId}`;
        if (this.pings.has(a)) return;
        let o = [...this.pings]
            .filter((t) => {
                let [, n] = t;
                return n.senderId === e;
            })
            .map((e) => {
                let [t] = e;
                return t;
            });
        (o.length >= 16 && this.pings.delete(o[0]),
            this.pings.set(a, { senderId: e, point: t, time: performance.now(), image: s }),
            this.wake());
    }
    addStamp(e, t, n, i) {
        let r = t.stampSize;
        if (null == r) return;
        let l = this.stampIds.get(e);
        if (l?.has(t.strokeId)) return;
        let s = `${e}:${t.strokeId}`,
            a = this.stamps.get(s);
        if (null != a && t.sequence <= a.point.sequence) return;
        if (t.kind === S.StampGrowing && t.end) {
            (this.rememberStamp(e, t.strokeId), this.removeStamp(s), this.wake());
            return;
        }
        if (t.kind === S.StampGrowing && null != a && null == a.growth) return;
        null != i ? this.setFrame(i) : (this.frame = { width: t.width, height: t.height });
        let o = performance.now(),
            u = this.cursors.get(e);
        null != u && (u.time = o);
        let c = null;
        if (t.kind === S.StampGrowing) {
            if (null == t.stampElapsed) return;
            c = { fromSize: null == a ? 16 : this.getStampSize(a, o), size: r, receivedAt: o, elapsed: t.stampElapsed };
        }
        if ((t.kind !== S.StampGrowing && this.rememberStamp(e, t.strokeId), null != a && this.stamps.get(s) === a)) {
            ((a.growth = c),
                (a.size = r),
                (a.point = { ...t, x: a.point.x, y: a.point.y, emoji: a.point.emoji }),
                (a.time = o),
                (a.layer = null),
                this.wake());
            return;
        }
        let d = [...this.stamps]
            .filter((t) => {
                let [, n] = t;
                return n.senderId === e;
            })
            .map((e) => {
                let [t] = e;
                return t;
            });
        d.length >= 32 && this.removeStamp(d[0]);
        let h = JSON.stringify(u?.point.emoji) === JSON.stringify(t.emoji),
            m = {
                senderId: e,
                point: t,
                time: o,
                image: null,
                layer: null,
                fallbackImage: h ? (u?.image ?? null) : null,
                growth: c,
                size: r,
            },
            p = (0, P.W)(t.emoji, !this.getReducedMotion(), 88) ?? n;
        (null != p &&
            ((m.image = this.canvas.ownerDocument.createElement("img")),
            (m.image.onload = () => {
                ((m.layer = null), this.wake());
            }),
            (m.image.src = p)),
            this.stamps.set(s, m),
            this.wake());
    }
    rememberStamp(e, t) {
        let n = this.stampIds.get(e) ?? new Set();
        (n.add(t), n.size > 256 && n.delete(n.values().next().value), this.stampIds.set(e, n));
    }
    getStampSize(e, t) {
        let n = e.growth;
        if (null == n) return e.size;
        let i = Math.min(1, Math.max(0, (t - n.receivedAt) / 60));
        return n.fromSize + (n.size - n.fromSize) * i;
    }
    removeStamp(e) {
        let t = this.stamps.get(e);
        (t?.image != null && ((t.image.onload = null), t.image.remove(), this.animatedImages.delete(t.image)),
            this.stamps.delete(e));
    }
    clearStamps() {
        for (let e of this.stamps.keys()) this.removeStamp(e);
    }
    removeSender(e) {
        let t = `${e}:`;
        for (let e of this.trails.keys()) e.startsWith(t) && this.trails.delete(e);
        for (let [t, n] of this.stamps) n.senderId === e && this.removeStamp(t);
        for (let [t, n] of this.pings) n.senderId === e && this.pings.delete(t);
        (this.cursors.delete(e), this.stampIds.delete(e), this.wake());
    }
    hideLocalCursor(e) {
        this.cursors.get(e)?.localPosition != null && (this.cursors.delete(e), this.wake());
    }
    getBounds() {
        let e = this.canvas.getBoundingClientRect();
        if (null == this.frame) return null;
        let t = ("cover" === this.fit ? Math.max : Math.min)(e.width / this.frame.width, e.height / this.frame.height),
            n = this.frame.width * t,
            i = this.frame.height * t;
        return { rect: e, width: n, height: i, left: (e.width - n) / 2, top: (e.height - i) / 2 };
    }
    normalize(e, t) {
        let n = this.getBounds();
        if (null == n || n.width <= 0 || n.height <= 0) return null;
        let i = (e - n.rect.left - n.left) / n.width,
            r = (t - n.rect.top - n.top) / n.height;
        return i < 0 || r < 0 || i > 1 || r > 1 ? null : { x: i, y: r };
    }
    wake() {
        !this.destroyed &&
            this.visible &&
            null == this.animation &&
            (this.animation = this.targetWindow.requestAnimationFrame(this.draw));
    }
    draw = () => {
        for (let e of ((this.animation = null), this.animatedImages)) e.hidden = !0;
        let e = this.canvas.getContext("2d"),
            t = this.strokeCanvas.getContext("2d"),
            n = this.getBounds();
        if (null == e || null == t || null == n) return;
        let i = this.targetWindow.devicePixelRatio > 0 ? this.targetWindow.devicePixelRatio : 1,
            r = Math.round(n.rect.width * i),
            l = Math.round(n.rect.height * i);
        (this.canvas.width !== r && (this.canvas.width = r),
            this.canvas.height !== l && (this.canvas.height = l),
            e.setTransform(i, 0, 0, i, 0, 0),
            e.clearRect(0, 0, n.rect.width, n.rect.height),
            this.strokeCanvas.width !== r && (this.strokeCanvas.width = r),
            this.strokeCanvas.height !== l && (this.strokeCanvas.height = l),
            t.setTransform(i, 0, 0, i, 0, 0),
            (t.lineCap = "round"),
            (t.lineJoin = "round"));
        let s = performance.now();
        for (let [r, l] of this.trails) {
            if (l.points[l.points.length - 1].expiresAt <= s) {
                this.trails.delete(r);
                continue;
            }
            for (; l.points.length > 1 && l.points[1].expiresAt <= s;) l.points.shift();
            let a = l.points[0],
                o = l.points[1],
                u = null != o && a.expiresAt < s ? (s - a.expiresAt) / (o.expiresAt - a.expiresAt) : 0,
                c = a.x + (null != o ? (o.x - a.x) * u : 0),
                d = a.y + (null != o ? (o.y - a.y) * u : 0);
            for (let e of (t.clearRect(0, 0, n.rect.width, n.rect.height),
            t.beginPath(),
            t.moveTo(n.left + c * n.width, n.top + d * n.height),
            l.points.slice(1)))
                t.lineTo(n.left + e.x * n.width, n.top + e.y * n.height);
            ((t.lineWidth = 6),
                (t.strokeStyle = l.outlineWhite ? "#ffffff" : "#000000"),
                t.stroke(),
                (t.lineWidth = 3),
                (t.strokeStyle = l.color),
                t.stroke(),
                l.points.every((e) => e.x === a.x && e.y === a.y) &&
                    (t.beginPath(),
                    t.arc(n.left + a.x * n.width, n.top + a.y * n.height, 3, 0, 2 * Math.PI),
                    (t.fillStyle = l.outlineWhite ? "#ffffff" : "#000000"),
                    t.fill(),
                    t.beginPath(),
                    t.arc(n.left + a.x * n.width, n.top + a.y * n.height, 1.5, 0, 2 * Math.PI),
                    (t.fillStyle = l.color),
                    t.fill()),
                this.fadeTail(t, l, n, s, i),
                (e.globalAlpha = 1),
                e.drawImage(this.strokeCanvas, 0, 0, n.rect.width, n.rect.height));
        }
        e.globalAlpha = 1;
        let a = new Set();
        for (let [t, r] of this.stamps) {
            null != r.growth &&
                s - r.growth.receivedAt >= 1500 &&
                (this.rememberStamp(r.senderId, r.point.strokeId),
                (r.time = r.growth.receivedAt + 1500),
                (r.size = r.growth.size),
                (r.point = { ...r.point, stampSize: r.size }),
                (r.growth = null),
                (r.layer = null));
            let l = r.time + 5e3 - s;
            if (null == r.growth && l <= 0) {
                this.removeStamp(t);
                continue;
            }
            let o = null != r.growth ? 1 : Math.min(1, l / 600),
                u = n.left + r.point.x * n.width,
                c = n.top + r.point.y * n.height,
                d = this.getStampSize(r, s),
                h = d / 16,
                m = r.image?.complete && r.image.naturalWidth > 0 ? r.image : (r.fallbackImage ?? r.image);
            if (null != r.point.emoji && (!m?.complete || 0 === m.naturalWidth)) continue;
            let p = (null == m || m === r.image) && this.canAnimateEmoji(r.point, r.image);
            if (((e.globalAlpha = o), null != r.growth)) {
                let t = (function (e, t, n, i) {
                    if (i || n <= 16) return { x: 0, y: 0, rotation: 0 };
                    let r = 0;
                    for (let t = 0; t < e.length; t++) r = (31 * r + e.charCodeAt(t)) >>> 0;
                    let l = r % 360,
                        s = Math.min(1, Math.max(0, (n - 16) / 72));
                    return {
                        x: 0.6 * Math.sin(l + (t / 1e3) * Math.PI * 26) * s,
                        y: 0.6 * Math.cos(l + (t / 1e3) * Math.PI * 34) * s,
                        rotation: (Math.PI / 60) * Math.sin(l + (t / 1e3) * Math.PI * 20) * s,
                    };
                })(r.point.strokeId, r.growth.elapsed + s - r.growth.receivedAt, d, this.getReducedMotion());
                p
                    ? this.drawAvatar(e, r.point, m, { x: u + t.x, y: c + t.y, scale: h, rotation: t.rotation })
                    : (e.save(),
                      e.translate(u + t.x, c + t.y),
                      0 !== t.rotation && e.rotate(t.rotation),
                      this.drawAvatar(e, r.point, m, { x: 0, y: 0, scale: h, animate: !1 }),
                      e.restore());
            } else if (p) this.drawAvatar(e, r.point, m, { x: u, y: c, scale: h, opacity: o });
            else {
                let t = Math.ceil(d / 24),
                    n = d + 2 * t,
                    l = Math.ceil(n * i);
                if (null == r.layer || r.layer.width !== l) {
                    ((r.layer = this.canvas.ownerDocument.createElement("canvas")),
                        (r.layer.width = r.layer.height = l));
                    let e = r.layer.getContext("2d");
                    null != e &&
                        (e.setTransform(i, 0, 0, i, 0, 0),
                        this.drawAvatar(e, r.point, m, { x: n / 2, y: n / 2, scale: h, animate: !1 }));
                }
                ((e.globalAlpha = o), e.drawImage(r.layer, u - n / 2, c - n / 2, n, n));
            }
            null != r.growth && (null == r.point.emoji || (m?.complete && m.naturalWidth > 0)) && a.add(r.senderId);
        }
        e.globalAlpha = 1;
        let u = this.getReducedMotion(),
            c = new Map();
        for (let [t, i] of this.pings) {
            let r = (s - i.time) / 600;
            if (r >= 1) {
                this.pings.delete(t);
                continue;
            }
            c.set(i.senderId, i);
            let l = n.left + i.point.x * n.width,
                a = n.top + i.point.y * n.height,
                d = u ? 14 : 8 + 22 * (1 - (1 - r) ** 3);
            ((e.globalAlpha = 1 - r),
                e.beginPath(),
                e.arc(l, a, d, 0, 2 * Math.PI),
                (e.lineWidth = 4),
                (e.strokeStyle = i.point.outlineWhite ? "#ffffff" : "#000000"),
                e.stroke(),
                (e.lineWidth = 2),
                (e.strokeStyle = (0, o.Hl)(i.point.color)),
                e.stroke());
        }
        for (let [t, i] of ((e.globalAlpha = 1), this.cursors)) {
            if (null == i.localPosition && s - i.time >= 2500) {
                this.cursors.delete(t);
                continue;
            }
            if (i.point.end || a.has(t)) continue;
            let r = i.localPosition?.x ?? n.left + i.point.x * n.width,
                l = i.localPosition?.y ?? n.top + i.point.y * n.height,
                o = c.get(t),
                d = null != o ? M(s - o.time, u) : 1;
            (this.drawAvatar(e, o?.point ?? i.point, null != o ? o.image : i.image, {
                x: r,
                y: l,
                scale: d,
                opacity: null == o && null != i.point.emoji ? 0.66 : 1,
            }),
                c.delete(t));
        }
        for (let t of c.values())
            this.drawAvatar(e, t.point, t.image, {
                x: n.left + t.point.x * n.width,
                y: n.top + t.point.y * n.height,
                scale: M(s - t.time, u),
            });
        for (let e of this.animatedImages) !0 === e.hidden && (e.remove(), this.animatedImages.delete(e));
        (this.stamps.size > 0 ||
            this.pings.size > 0 ||
            this.trails.size > 0 ||
            Array.from(this.cursors.values()).some((e) => null == e.localPosition)) &&
            this.wake();
    };
    canAnimateEmoji(e, t) {
        return (
            !this.getReducedMotion() &&
            null != this.imageHost &&
            null != t &&
            null != e.emoji &&
            "id" in e.emoji &&
            e.emoji.animated
        );
    }
    drawAvatar(e, t, n, i) {
        let { x: r, y: l, scale: s } = i,
            a = (t.emoji, 16 * s);
        if (!1 !== i.animate && this.canAnimateEmoji(t, n) && null != n && null != this.imageHost) {
            (this.animatedImages.has(n) || this.imageHost.append(n),
                this.animatedImages.add(n),
                (n.className = D.oG),
                (n.alt = ""),
                n.setAttribute("aria-hidden", "true"),
                (n.hidden = !1),
                (n.style.opacity = String(i.opacity ?? 1)),
                n.style.setProperty("--custom-stream-drawing-emoji-rotation", `${i.rotation ?? 0}rad`));
            let e = "fixed" === this.targetWindow.getComputedStyle(this.canvas).position;
            n.classList.toggle(D.nz, e);
            let t = this.canvas.getBoundingClientRect();
            (n.style.setProperty("--custom-stream-drawing-emoji-x", `${(e ? t.left : this.canvas.offsetLeft) + r}px`),
                n.style.setProperty("--custom-stream-drawing-emoji-y", `${(e ? t.top : this.canvas.offsetTop) + l}px`),
                n.style.setProperty("--custom-stream-drawing-emoji-size", `${a}px`));
            return;
        }
        if (null != t.emoji) {
            n?.complete &&
                n.naturalWidth > 0 &&
                (e.save(), (e.globalAlpha *= i.opacity ?? 1), e.drawImage(n, r - a / 2, l - a / 2, a, a), e.restore());
            return;
        }
        (e.save(),
            e.beginPath(),
            e.arc(r, l, a / 2, 0, 2 * Math.PI),
            (e.fillStyle = (0, o.Hl)(t.color)),
            e.fill(),
            e.clip(),
            n?.complete && n.naturalWidth > 0 && e.drawImage(n, r - a / 2, l - a / 2, a, a),
            e.restore(),
            e.beginPath(),
            e.arc(r, l, a / 2, 0, 2 * Math.PI),
            (e.lineWidth = a / 12),
            (e.strokeStyle = t.outlineWhite ? "#ffffff" : "#000000"),
            e.stroke());
    }
    fadeTail(e, t, n, i, r) {
        let l = i + 600;
        if (t.points[0].expiresAt >= l) return;
        let s = t.points.map((e) => ({ x: n.left + e.x * n.width, y: n.top + e.y * n.height, expiresAt: e.expiresAt }));
        if (s.length > 1 && s[0].expiresAt < i) {
            let e = s[0],
                t = s[1],
                n = (i - e.expiresAt) / (t.expiresAt - e.expiresAt);
            s[0] = { x: e.x + (t.x - e.x) * n, y: e.y + (t.y - e.y) * n, expiresAt: i };
        }
        let a = s.filter((e) => e.expiresAt <= l),
            o = s[a.length],
            u = a[a.length - 1];
        if (null != o && null != u) {
            let e = (l - u.expiresAt) / (o.expiresAt - u.expiresAt);
            a.push({ x: u.x + (o.x - u.x) * e, y: u.y + (o.y - u.y) * e, expiresAt: l });
        }
        let c = Math.max(0, Math.floor(Math.min(...a.map((e) => e.x)) - 4)),
            d = Math.max(0, Math.floor(Math.min(...a.map((e) => e.y)) - 4)),
            h = Math.min(n.rect.width, Math.ceil(Math.max(...a.map((e) => e.x)) + 4)),
            m = Math.min(n.rect.height, Math.ceil(Math.max(...a.map((e) => e.y)) + 4));
        if (h <= c || m <= d) return;
        let p = Math.min(r, 512 / (h - c), 512 / (m - d)),
            f = Math.ceil((h - c) * p),
            g = Math.ceil((m - d) * p);
        ((this.maskCanvas.width = f), (this.maskCanvas.height = g));
        let A = this.maskCanvas.getContext("2d", { willReadFrequently: !0 });
        if (null == A) return;
        (A.setTransform(p, 0, 0, p, -c * p, -d * p),
            (A.fillStyle = "#000000"),
            A.fillRect(c, d, h - c, m - d),
            (A.globalCompositeOperation = "lighten"),
            (A.lineCap = "round"),
            (A.lineJoin = "round"),
            (A.lineWidth = Math.max(8, 4 / p)));
        let v = (e) => {
            let t = Math.round(255 * Math.max(0, Math.min(1, (e - i) / 600)));
            return `rgb(${t}, ${t}, ${t})`;
        };
        for (let e = 0; e < s.length; e++) {
            let t = s[e];
            if (t.expiresAt >= l) {
                for (let n of ((A.strokeStyle = "#ffffff"), A.beginPath(), A.moveTo(t.x, t.y), s.slice(e + 1)))
                    A.lineTo(n.x, n.y);
                A.stroke();
                break;
            }
            let n = s[e + 1] ?? t,
                i = A.createLinearGradient(t.x, t.y, n.x, n.y);
            (i.addColorStop(0, v(t.expiresAt)),
                t.expiresAt < l &&
                    n.expiresAt > l &&
                    i.addColorStop((l - t.expiresAt) / (n.expiresAt - t.expiresAt), "#ffffff"),
                i.addColorStop(1, v(n.expiresAt)),
                (A.strokeStyle = i),
                A.beginPath(),
                A.moveTo(t.x, t.y),
                A.lineTo(n.x, n.y),
                t.x === n.x && t.y === n.y
                    ? ((A.fillStyle = v(n.expiresAt)), A.arc(n.x, n.y, A.lineWidth / 2, 0, 2 * Math.PI), A.fill())
                    : A.stroke());
        }
        let E = A.getImageData(0, 0, f, g);
        for (let e = 0; e < E.data.length; e += 4)
            ((E.data[e + 3] = E.data[e]), (E.data[e] = E.data[e + 1] = E.data[e + 2] = 255));
        (A.putImageData(E, 0, 0),
            e.save(),
            e.beginPath(),
            e.rect(c, d, h - c, m - d),
            e.clip(),
            (e.globalCompositeOperation = "destination-in"),
            e.drawImage(this.maskCanvas, c, d, f / p, g / p),
            e.restore());
    }
    destroy() {
        for (let e of ((this.destroyed = !0), this.clearStamps(), this.stampIds.clear(), this.animatedImages))
            e.remove();
        for (let e of (this.animatedImages.clear(),
        null != this.animation && this.targetWindow.cancelAnimationFrame(this.animation),
        this.trails.clear(),
        this.cursors.values()))
            null != e.image && (e.image.onload = null);
        for (let e of this.pings.values()) null != e.image && (e.image.onload = null);
        (this.pings.clear(),
            this.cursors.clear(),
            this.canvas.getContext("2d")?.clearRect(0, 0, this.canvas.width, this.canvas.height));
    }
}
var j = n(210608),
    L = n(400492),
    U = n(988468),
    z = n(803224),
    G = n(257645);
let W = new C(),
    F = "mention2";
function V(e) {
    let t = e / 255;
    return t <= 0.04045 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4;
}
function q(e) {
    if (null == e || e.readyState < 2 || 0 === e.videoWidth || 0 === e.videoHeight) return !1;
    try {
        let t = e.ownerDocument.createElement("canvas");
        ((t.width = 16), (t.height = 16));
        let n = t.getContext("2d", { willReadFrequently: !0 });
        if (null == n) return !1;
        n.drawImage(e, 0, 0, 16, 16);
        let { data: i } = n.getImageData(0, 0, 16, 16),
            r = 0;
        for (let e = 0; e < i.length; e += 4) r += 0.2126 * V(i[e]) + 0.7152 * V(i[e + 1]) + 0.0722 * V(i[e + 2]);
        return r / 256 < 0.179;
    } catch {
        return !1;
    }
}
var H = n(791005),
    B = n(792996);
let K = l.memo(function (e) {
    let t = (0, A.BC)(e.streamKey),
        n = (0, u.bG)([j.A], () => j.A.isStreamDrawingAllowed(e.streamKey), [e.streamKey]);
    return t && n ? (0, r.jsx)(X, { ...e }) : null;
});
function X(e) {
    let { streamKey: t, dimensions: n, fit: i = "contain", overlay: s = !1, visible: v = !0, videoRef: E } = e,
        I = l.useRef(null),
        T = l.useRef(null),
        P = l.useRef(() => {}),
        M = l.useRef(null),
        V = l.useRef(null),
        K = l.useRef(null),
        X = l.useRef(null),
        Y = l.useRef(null),
        $ = l.useRef(null),
        J = l.useRef(null),
        Q = l.useRef(new C()),
        Z = l.useRef(null),
        ee = l.useRef(null),
        et = l.useRef(n),
        en = l.useRef(null),
        { rtc: ei, user: er } = (0, u.cf)([p.A, g.default], () => ({
            rtc: p.A.isConnected() ? p.A.getRTCConnection() : null,
            user: g.default.getCurrentUser(),
        })),
        el = er?.id,
        es = (0, u.bG)([j.A], () => j.A.getSelectedTool()),
        ea = (0, u.bG)([j.A], () => j.A.getEmoji()),
        eo = (0, u.bG)([j.A], () => j.A.getColor()),
        eu = "stamp" === es ? ea : void 0,
        ec = (0, u.bG)([j.A], () => j.A.getActiveStreamKey()),
        ed = v && !s && ec === t,
        eh = l.useRef(v);
    l.useLayoutEffect(() => {
        ((eh.current = v), X.current?.setVisible(v));
    }, [v]);
    let em = (0, m.Ay)(er?.getAvatarURL(null, 80), "#ffffff", !1),
        ep = eo ?? (0, o.LX)(em);
    (l.useEffect(() => {
        et.current = n;
        let e = $.current;
        (($.current = null),
            null != en.current && (en.current.window.clearInterval(en.current.id), (en.current = null)));
        let t = K.current;
        (null != e && t?.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId),
            X.current?.setFrame(n));
    }, [n]),
        l.useEffect(() => {
            var e;
            let n,
                r,
                l = K.current;
            if (null == l || null == ei || null == el) return;
            let a = null,
                o = null,
                u = new Set(),
                d = () => {
                    for (let e of u) f.A.isBlockedOrIgnored(e.toString()) && (a?.removeSender(e), u.delete(e));
                },
                m = (e, n) => {
                    if (null == a || n.streamKey !== t || !(0, A.EG)(t) || f.A.isBlockedOrIgnored(e.toString())) return;
                    u.add(e);
                    let i = g.default.getUser(e.toString());
                    switch (n.kind) {
                        case S.Stamp:
                        case S.StampGrowing:
                            a.addStamp(e, n, i?.getAvatarURL(null, 32) ?? null, et.current);
                            break;
                        case S.Ping:
                            var r;
                            (a.addPing(e, n, i?.getAvatarURL(null, 32) ?? null, et.current),
                                eh.current &&
                                    !s &&
                                    ((r = n.strokeId),
                                    !W.accept(e, r) ||
                                        U.Ay.isSelfDeaf() ||
                                        z.A.isSoundDisabled(F) ||
                                        (0, L.Ak)(F, 0.14, void 0, void 0, { outputChannel: G.a.VOICE })));
                            break;
                        case S.Cursor:
                            if (e.toString() === el && !s) return;
                            a.addCursor(e, n, i?.getAvatarURL(null, 32) ?? null, et.current);
                            break;
                        case S.Stroke:
                            a.add(e, n, et.current);
                    }
                },
                p = () => {
                    (f.A.removeChangeListener(d),
                        o?.off(x, m),
                        a?.destroy(),
                        (a = null),
                        (o = null),
                        (X.current = null),
                        (Y.current = null),
                        u.clear());
                },
                v =
                    ((e = {
                        onConnection: (e) => {
                            (p(),
                                (a = new N(l, i, () => h.Ay.useReducedMotion, V)).setVisible(eh.current),
                                a.setFrame(et.current),
                                (X.current = a),
                                (o = e),
                                (Y.current = e),
                                f.A.addChangeListener(d),
                                e.on(x, m));
                        },
                        onDisconnect: (e) => {
                            let n = $.current?.pointerId ?? J.current?.pointerId ?? Z.current?.pointerId;
                            (($.current = null),
                                (J.current = null),
                                (Z.current = null),
                                (ee.current = null),
                                null != en.current &&
                                    (en.current.window.clearInterval(en.current.id), (en.current = null)),
                                null != M.current && (M.current.hidden = !0),
                                null != n && l.hasPointerCapture(n) && l.releasePointerCapture(n),
                                p(),
                                s ||
                                    j.A.getActiveStreamKey() !== t ||
                                    ((0, k.w3)(null),
                                    (0, c.P0)({
                                        text: B.intl.string(e ? H.default.nDG2bK : H.default.qMPZVd),
                                        variant: "critical",
                                        toastKey: "stream-drawing-connection",
                                    })));
                        },
                    }),
                    (n = null),
                    {
                        retry: (r = (0, y.x)(ei, el, {
                            onConnection(t) {
                                let i, r;
                                (n?.release(),
                                    null == (i = _.get(t)) && ((i = { adapter: new R(t, el), users: 0 }), _.set(t, i)),
                                    i.users++,
                                    (r = i),
                                    (n = {
                                        connection: i.adapter,
                                        release() {
                                            0 == --r.users && (r.adapter.dispose(), _.delete(t));
                                        },
                                    }),
                                    e.onConnection(n.connection));
                            },
                            onDisconnect(t) {
                                (e.onDisconnect(t), n?.release(), (n = null));
                            },
                        })).retry,
                        release() {
                            (r.release(), n?.release(), (n = null));
                        },
                    });
            return (
                (I.current = v),
                () => {
                    I.current = null;
                    let e = J.current;
                    ((J.current = null),
                        e?.growing && o?.sendPoint({ ...e.point, sequence: e.point.sequence + 1, end: !0 }));
                    let t = ee.current;
                    (null == t || t.point.end || o?.sendPoint({ ...t.point, sequence: t.point.sequence + 1, end: !0 }),
                        (ee.current = null));
                    let n = $.current;
                    (null != n && o?.sendPoint({ ...n.point, sequence: n.point.sequence + 1, end: !0 }),
                        ($.current = null),
                        null != en.current && (en.current.window.clearInterval(en.current.id), (en.current = null)),
                        p(),
                        v.release());
                }
            );
        }, [ei, el, t, i, s]),
        l.useEffect(() => {
            s || ec !== t || null != Y.current || (j.A.getActiveStreamKey() === ec && I.current?.retry());
        }, [ec, s, t, ei, el, i]));
    let ef = l.useCallback((e) => {
            Y.current?.sendPoint(e);
        }, []),
        eg = l.useCallback(() => {
            (null != M.current && (M.current.hidden = !0), null != el && X.current?.hideLocalCursor(BigInt(el)));
            let e = ee.current;
            null == e ||
                e.point.end ||
                ((e.point = { ...e.point, sequence: e.point.sequence + 1, end: !0 }), ef(e.point));
        }, [ef, el]);
    function eA(e, i) {
        let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (((T.current = { x: e, y: i }), !ed || null == n || null == el || null != J.current)) return;
        let l = X.current?.normalize(e, i);
        null == l && eg();
        let s = ee.current,
            a = performance.now(),
            o = {
                streamKey: t,
                strokeId: s?.point.strokeId ?? w(),
                sequence: (s?.point.sequence ?? -1) + 1,
                ...(l ?? { x: 0, y: 0 }),
                ...n,
                color: ep,
                kind: S.Cursor,
                emoji: eu,
                end: !1,
                outlineWhite: $.current?.point.outlineWhite ?? s?.point.outlineWhite ?? q(E?.current ?? null),
            },
            u = K.current?.getBoundingClientRect();
        null != u &&
            X.current?.addCursor(BigInt(el), o, er?.getAvatarURL(null, 32) ?? null, n, {
                x: e - u.left + 12 * ("pencil" === es),
                y: i - u.top + 12 * ("pencil" === es),
            });
        let c = M.current;
        if (
            (null != c &&
                null != u &&
                ((c.hidden = !1),
                c.style.setProperty(
                    "--custom-stream-drawing-pencil-x",
                    `${(K.current?.offsetLeft ?? 0) + e - u.left}px`,
                ),
                c.style.setProperty(
                    "--custom-stream-drawing-pencil-y",
                    `${(K.current?.offsetTop ?? 0) + i - u.top}px`,
                )),
            null != l)
        ) {
            if (!r && null != s && !s.point.end && (a - s.sentAt < 40 || (s.point.x === l.x && s.point.y === l.y)))
                return;
            ((ee.current = { point: o, sentAt: a }), ef(o));
        }
    }
    (l.useLayoutEffect(() => {
        P.current = () => {
            let e = T.current;
            null != e && ee.current?.point.end === !1 && eA(e.x, e.y, !0);
        };
    }),
        l.useEffect(() => {
            P.current();
        }, [es, eu]));
    let ev = l.useCallback(
        function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = arguments.length > 1 ? arguments[1] : void 0,
                n = J.current;
            J.current = null;
            let i = $.current,
                r = Z.current;
            ((Z.current = null),
                null != en.current && (en.current.window.clearInterval(en.current.id), (en.current = null)),
                ($.current = null),
                null != i && ef({ ...i.point, sequence: i.point.sequence + 1, end: !0 }),
                null != n &&
                    (e
                        ? ef({
                              ...n.point,
                              sequence: n.point.sequence + 1,
                              kind: S.Stamp,
                              stampSize: O(t ?? performance.now() - n.startedAt),
                              stampElapsed: void 0,
                          })
                        : n.growing && ef({ ...n.point, sequence: n.point.sequence + 1, end: !0 })));
            let l = i?.pointerId ?? r?.pointerId ?? n?.pointerId,
                s = K.current;
            null != l && s?.hasPointerCapture(l) && s.releasePointerCapture(l);
        },
        [ef],
    );
    function eE(e, t) {
        let n = $.current;
        if (null == n) return;
        let i = X.current?.normalize(e, t);
        null != i && (n.point = { ...n.point, ...i });
    }
    return (
        l.useEffect(() => {
            ev(!1, void 0);
        }, [es, eo, n, ev]),
        l.useEffect(() => {
            if (!ed) return;
            let e = K.current?.ownerDocument.defaultView;
            if (null == e) return;
            let t = (e) => {
                    "Alt" === e.key && e.preventDefault();
                },
                n = (e) => {
                    "Escape" === e.key && (ev(!1, void 0), (0, k.w3)(null));
                },
                i = () => {
                    (ev(!1, void 0), eg());
                },
                r = (e) => {
                    let t = J.current;
                    t?.captureLost &&
                        e.pointerId === t.pointerId &&
                        0 === e.button &&
                        (ev(!0, e.timeStamp - t.pressedAt), (T.current = { x: e.clientX, y: e.clientY }), P.current());
                };
            return (
                e.addEventListener("pointerup", r, !0),
                e.addEventListener("blur", i),
                e.addEventListener("keydown", n),
                e.addEventListener("keydown", t, !0),
                e.addEventListener("keyup", t, !0),
                () => {
                    (e.removeEventListener("pointerup", r, !0),
                        e.removeEventListener("blur", i),
                        e.removeEventListener("keydown", n),
                        e.removeEventListener("keydown", t, !0),
                        e.removeEventListener("keyup", t, !0),
                        ev(!1, void 0),
                        eg());
                }
            );
        }, [ed, ev, eg]),
        l.useEffect(() => {
            let e = K.current;
            if (!ed || null == e) return;
            function t(e) {
                0 === e.button && (e.preventDefault(), e.stopPropagation());
            }
            let n = ["mousedown", "mouseup", "click", "dblclick"];
            for (let i of n) e.addEventListener(i, t);
            return () => {
                for (let i of n) e.removeEventListener(i, t);
            };
        }, [ed]),
        (0, r.jsxs)("div", {
            ref: V,
            className: D.qd,
            children: [
                (0, r.jsx)("canvas", {
                    ref: K,
                    hidden: !v,
                    "aria-hidden": !0,
                    className: a()(D.Ji, { [D.pW]: ed, [D.Lw]: s }),
                    onPointerDown: (e) => {
                        if (
                            !ed ||
                            0 !== e.button ||
                            null != $.current ||
                            null != Z.current ||
                            null != J.current ||
                            null == n
                        )
                            return;
                        (e.preventDefault(), e.stopPropagation());
                        let i = X.current;
                        if (null == i) return;
                        let r = i.normalize(e.clientX, e.clientY);
                        if (null == r || null == Y.current) return;
                        if (e.altKey) {
                            ((Z.current = { pointerId: e.pointerId }),
                                e.currentTarget.setPointerCapture(e.pointerId),
                                (function (e, i, r) {
                                    if (!ed || null == el || null == n) return;
                                    let l = X.current?.normalize(e, i);
                                    null != l &&
                                        Q.current.accept(BigInt(el), r) &&
                                        ef({
                                            streamKey: t,
                                            strokeId: r,
                                            sequence: 0,
                                            ...l,
                                            ...n,
                                            color: ep,
                                            end: !1,
                                            kind: S.Ping,
                                            emoji: eu,
                                            outlineWhite: q(E?.current ?? null),
                                        });
                                })(e.clientX, e.clientY, w()));
                            return;
                        }
                        if ("stamp" === es) {
                            if (null == eu) return;
                            let i = performance.now(),
                                l = {
                                    streamKey: t,
                                    strokeId: w(),
                                    sequence: 0,
                                    ...r,
                                    ...n,
                                    color: ep,
                                    end: !1,
                                    kind: S.StampGrowing,
                                    stampSize: 16,
                                    stampElapsed: 0,
                                    emoji: eu,
                                };
                            (eA(e.clientX, e.clientY, !0),
                                (J.current = {
                                    point: l,
                                    pointerId: e.pointerId,
                                    startedAt: i,
                                    pressedAt: e.nativeEvent.timeStamp,
                                    sentAt: i,
                                    growing: !1,
                                }),
                                e.currentTarget.setPointerCapture(e.pointerId));
                            let s = e.currentTarget.ownerDocument.defaultView;
                            (null != s &&
                                (en.current = {
                                    window: s,
                                    id: s.setInterval(() => {
                                        let e = J.current;
                                        if (null == e) return;
                                        let t = performance.now(),
                                            n = Math.max(0, Math.round(t - e.startedAt));
                                        if (n <= 150) return;
                                        let i = O(n);
                                        (e.growing && i === e.point.stampSize && t - e.sentAt < 500) ||
                                            ((e.growing = !0),
                                            (e.point = {
                                                ...e.point,
                                                sequence: e.point.sequence + 1,
                                                stampSize: i,
                                                stampElapsed: n,
                                            }),
                                            (e.sentAt = t),
                                            ef(e.point));
                                    }, 60),
                                }),
                                eA(e.clientX, e.clientY));
                            return;
                        }
                        let l = {
                            kind: S.Stroke,
                            streamKey: t,
                            strokeId: w(),
                            sequence: 0,
                            ...r,
                            ...n,
                            color: ep,
                            outlineWhite: q(E?.current ?? null),
                            end: !1,
                        };
                        (e.currentTarget.setPointerCapture(e.pointerId),
                            ($.current = { point: l, pointerId: e.pointerId }),
                            ef(l));
                        let s = e.currentTarget.ownerDocument.defaultView;
                        (null != s &&
                            (en.current = {
                                window: s,
                                id: s.setInterval(() => {
                                    let e = $.current;
                                    null != e &&
                                        ((e.point = { ...e.point, sequence: e.point.sequence + 1 }), ef(e.point));
                                }, b),
                            }),
                            eA(e.clientX, e.clientY));
                    },
                    onPointerEnter: (e) => {
                        eA(e.clientX, e.clientY);
                    },
                    onPointerLeave: eg,
                    onPointerMove: (e) => {
                        if (
                            (eA(e.clientX, e.clientY),
                            Z.current?.pointerId === e.pointerId || J.current?.pointerId === e.pointerId)
                        ) {
                            (e.preventDefault(), e.stopPropagation());
                            return;
                        }
                        let t = $.current;
                        if (null == t || e.pointerId !== t.pointerId) return;
                        (e.preventDefault(), e.stopPropagation());
                        let n = e.nativeEvent.getCoalescedEvents?.();
                        if (null != n && n.length > 0) for (let e of n) eE(e.clientX, e.clientY);
                        else eE(e.clientX, e.clientY);
                    },
                    onPointerUp: (e) => {
                        if (
                            0 !== e.button ||
                            ($.current?.pointerId !== e.pointerId &&
                                Z.current?.pointerId !== e.pointerId &&
                                J.current?.pointerId !== e.pointerId)
                        )
                            return;
                        (e.preventDefault(), e.stopPropagation(), eE(e.clientX, e.clientY));
                        let t = J.current;
                        (ev(!0, null == t ? void 0 : e.nativeEvent.timeStamp - t.pressedAt),
                            null != t && eA(e.clientX, e.clientY, !0));
                    },
                    onPointerCancel: (e) => {
                        let t = J.current;
                        (null == t || t.pointerId === e.pointerId) &&
                            (ev(!1, void 0), null != t && eA(e.clientX, e.clientY, !0));
                    },
                    onLostPointerCapture: (e) => {
                        let t = J.current;
                        if (null == t || t.pointerId === e.pointerId) {
                            if (null != t && 0 === e.buttons) {
                                t.captureLost = !0;
                                return;
                            }
                            (ev(!1, void 0), null != t && eA(e.clientX, e.clientY, !0));
                        }
                    },
                }),
                ed &&
                    "pencil" === es &&
                    (0, r.jsx)("span", {
                        ref: M,
                        className: D.OF,
                        hidden: !0,
                        "aria-hidden": !0,
                        children: (0, r.jsx)(d.PencilIcon, { size: "md", color: "currentColor" }),
                    }),
            ],
        })
    );
}
