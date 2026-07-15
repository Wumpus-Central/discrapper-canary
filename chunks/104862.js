a.r(e), a.d(e, { createProvider: () => b });
var i = a(825123),
    s = a(619482);
function r(t) {
    return "string" == typeof t && "" !== t.trim();
}
let l = (t, e, a) => Math.min(a, Math.max(e, t));
function h(t) {
    let e = t.replace("#", "");
    return [parseInt(e.slice(0, 2), 16), parseInt(e.slice(2, 4), 16), parseInt(e.slice(4, 6), 16)];
}
function n(t) {
    return `rgb(${0 | t[0]}, ${0 | t[1]}, ${0 | t[2]})`;
}
function o(t, e) {
    return `rgba(${0 | t[0]}, ${0 | t[1]}, ${0 | t[2]}, ${e})`;
}
function d(t) {
    return {
        stops: [h(t.stops[0]), h(t.stops[1]), h(t.stops[2]), h(t.stops[3])],
        occlusion: h(t.occlusion),
        contact: h(t.contact),
        feature: h(t.feature),
        halo: h(t.halo),
    };
}
let c = {
    detecting: d({
        stops: ["#f4f9ff", "#dbeafe", "#cbe0fb", "#aacdf3"],
        occlusion: "#6f9fd8",
        contact: "#3a5f8f",
        feature: "#007aff",
        halo: "#2f86f0",
    }),
    success: d({
        stops: ["#f0fdf4", "#dcfce7", "#bbf7d0", "#86c79a"],
        occlusion: "#3f7a52",
        contact: "#1f5132",
        feature: "#15803d",
        halo: "#22c55e",
    }),
    error: d({
        stops: ["#fff1f1", "#fee2e2", "#fecaca", "#e89a9a"],
        occlusion: "#8c4a4a",
        contact: "#5f1e1e",
        feature: "#b91c1c",
        halo: "#dc2626",
    }),
};
function u(t, e, a) {
    (t[0] += (e[0] - t[0]) * a), (t[1] += (e[1] - t[1]) * a), (t[2] += (e[2] - t[2]) * a);
}
var p = class {
    constructor(t = 512) {
        (this.ctx = null),
            (this.presence = 0),
            (this.faceState = "detecting"),
            (this.eased = (function (t) {
                return {
                    stops: [[...t.stops[0]], [...t.stops[1]], [...t.stops[2]], [...t.stops[3]]],
                    occlusion: [...t.occlusion],
                    contact: [...t.contact],
                    feature: [...t.feature],
                    halo: [...t.halo],
                };
            })(c.detecting)),
            (this.size = t),
            (this.canvas = document.createElement("canvas")),
            (this.canvas.width = t),
            (this.canvas.height = t);
    }
    init() {
        this.ctx = this.canvas.getContext("2d");
    }
    getCanvas() {
        return this.canvas;
    }
    setState(t) {
        this.faceState = t;
    }
    dispose() {
        this.ctx = null;
    }
    render(t) {
        let e,
            a = this.ctx;
        if (!a) return;
        let i = this.size;
        a.clearRect(0, 0, i, i);
        let s =
            ("detecting" === (e = globalThis.__incodeAvatarState) || "success" === e || "error" === e ? e : null) ??
            this.faceState;
        !(function (t, e) {
            for (let a = 0; a < 4; a += 1) u(t.stops[a], e.stops[a], 0.08);
            u(t.occlusion, e.occlusion, 0.08),
                u(t.contact, e.contact, 0.08),
                u(t.feature, e.feature, 0.08),
                u(t.halo, e.halo, 0.08);
        })(this.eased, c[s]);
        let r = +!!t.tracked;
        this.presence += (r - this.presence) * 0.12;
        let h = this.presence,
            o = i / 512,
            d = t.rootOffset.x * i * 0.03,
            p = t.rootOffset.y * i * 0.03,
            f = 1 + 0.35 * l(t.depth, -0.6, 0.8),
            m = l(t.headEuler.y, -0.9, 0.9),
            y = l(t.headEuler.x, -0.9, 0.9);
        if (
            (this.drawHalo(a, i, o, f, d, p),
            a.save(),
            a.translate(i / 2 + d, i / 2 + p),
            a.rotate(t.headEuler.z),
            a.scale(f * o, f * o),
            a.translate(-256, -256),
            h > 0.02)
        ) {
            (a.globalAlpha = h),
                this.drawBall(a),
                a.save(),
                a.translate(256, 256),
                a.scale(1 - 0.24 * Math.abs(m), 1 - 0.12 * Math.abs(y)),
                a.translate(-256, -256),
                a.translate(90 * m, 72 * y);
            let e = n(this.eased.feature),
                i = l(t.blink.left, 0, 1),
                r = l(t.blink.right, 0, 1);
            "success" === s && ((i = 0), (r = 0.85)),
                this.drawEye(a, 200, 218, i, e),
                this.drawEye(a, 312, 218, r, e),
                this.drawNose(a, e);
            let o = Math.max(0.35, l(t.smile ?? 0, 0, 1));
            "success" === s ? (o = 1) : "error" === s && (o = -0.55),
                this.drawMouth(a, o, e),
                a.restore(),
                (a.globalAlpha = 1);
        }
        a.restore();
    }
    drawHalo(t, e, a, i, s, r) {
        t.save(),
            t.translate(e / 2 + s, e / 2 + r),
            t.scale(i, i),
            (t.globalAlpha = 0.9),
            (t.strokeStyle = n(this.eased.halo)),
            (t.lineWidth = 4 * a),
            (t.lineCap = "round"),
            t.setLineDash([15 * a, 12 * a]),
            t.beginPath(),
            t.arc(0, 0, 178 * a, 0, 2 * Math.PI),
            t.stroke(),
            t.setLineDash([]),
            t.restore();
    }
    drawBall(t) {
        let e = this.eased,
            a = t.createRadialGradient(256, 424, 0, 256, 424, 122);
        a.addColorStop(0, o(e.contact, 0.28)),
            a.addColorStop(1, o(e.contact, 0)),
            (t.fillStyle = a),
            t.beginPath(),
            t.ellipse(256, 424, 122, 26, 0, 0, 2 * Math.PI),
            t.fill();
        let i = t.createRadialGradient(214, 205, 12, 256, 256, 157.5);
        i.addColorStop(0, n(e.stops[0])),
            i.addColorStop(0.45, n(e.stops[1])),
            i.addColorStop(0.8, n(e.stops[2])),
            i.addColorStop(1, n(e.stops[3])),
            (t.fillStyle = i),
            t.beginPath(),
            t.arc(256, 256, 150, 0, 2 * Math.PI),
            t.fill();
        let s = t.createRadialGradient(256, 256, 102.00000000000001, 256, 256, 150);
        s.addColorStop(0, o(e.occlusion, 0)),
            s.addColorStop(1, o(e.occlusion, 0.22)),
            (t.fillStyle = s),
            t.beginPath(),
            t.arc(256, 256, 150, 0, 2 * Math.PI),
            t.fill();
        let r = t.createRadialGradient(200, 190, 0, 200, 190, 64);
        r.addColorStop(0, "rgba(255, 255, 255, 0.85)"),
            r.addColorStop(1, "rgba(255, 255, 255, 0)"),
            (t.fillStyle = r),
            t.beginPath(),
            t.ellipse(200, 190, 64, 48, 0, 0, 2 * Math.PI),
            t.fill();
    }
    drawEye(t, e, a, i, s) {
        (t.fillStyle = s), t.beginPath(), t.ellipse(e, a, 12, 2.5 + (1 - i) * 14, 0, 0, 2 * Math.PI), t.fill();
    }
    drawNose(t, e) {
        (t.strokeStyle = e),
            (t.lineWidth = 8),
            (t.lineCap = "round"),
            t.beginPath(),
            t.moveTo(256, 258),
            t.lineTo(256, 292),
            t.stroke();
    }
    drawMouth(t, e, a) {
        let i = 10 * e;
        (t.strokeStyle = a),
            (t.lineWidth = 11),
            (t.lineCap = "round"),
            t.beginPath(),
            t.moveTo(212, 330 - i),
            t.quadraticCurveTo(256, 330 + (2 + 32 * e), 300, 330 - i),
            t.stroke();
    }
};
let f = {
        tracked: !1,
        headEuler: { x: 0, y: 0, z: 0 },
        rootOffset: { x: 0, y: 0 },
        depth: 0,
        blink: { left: 0, right: 0 },
        mouthOpen: 0,
        smile: 0,
    },
    m = {
        yawGain: 2.2,
        pitchUpGain: 3.4,
        pitchDownGain: 2.6,
        rollGain: 1,
        rotMax: 0.9,
        lateralGain: 1.6,
        lateralMax: 1,
        depthGain: 2,
        depthMax: 0.8,
        signYaw: 1,
        signPitch: 1,
        signRoll: 1,
        signX: 1,
        signY: 1,
    };
function y(t, e, a) {
    return Math.min(a, Math.max(e, t));
}
function M(t, e) {
    return Math.abs(t) <= e ? 0 : t - Math.sign(t) * e;
}
var g = class {
        constructor() {
            this.buf = [];
        }
        reset() {
            this.buf = [];
        }
        filter(t) {
            if ((this.buf.push(t), this.buf.length > 7 && this.buf.shift(), this.buf.length < 7)) return t;
            let e = [...this.buf].sort((t, e) => t - e);
            return e[Math.floor(e.length / 2)];
        }
    },
    k = class {
        constructor() {
            (this.renderer = new p(512)),
                (this.videoHandle = null),
                (this.landmarker = null),
                (this.inputCanvas = document.createElement("canvas")),
                (this.inputCtx = null),
                (this.rafId = null),
                (this.lastFrameAt = 0),
                (this.minFrameIntervalMs = 33.333333333333336),
                (this.stopped = !1),
                (this.mediapipeModulePath = ""),
                (this.mediapipeWasmPath = ""),
                (this.faceLandmarkerModelPath = ""),
                (this.detectFailures = 0),
                (this.current = v(f)),
                (this.target = v(f)),
                (this.lastFaceAt = 0),
                (this.calibrated = !1),
                (this.nFrames = 0),
                (this.sum = { yaw: 0, pitch: 0, roll: 0, cx: 0, cy: 0, dist: 0, faceH: 0 }),
                (this.neutral = { yaw: 0, pitch: 0, roll: 0, cx: 0, cy: 0, dist: 1, faceH: 1 }),
                (this.calAttempts = 0),
                (this.prevCalYaw = NaN),
                (this.prevCalPitch = NaN),
                (this.prevCalRoll = NaN),
                (this.seeded = !1),
                (this.medYaw = new g()),
                (this.medPitch = new g()),
                (this.medRoll = new g()),
                (this.usingRvfc = !1),
                (this.rvfcHandle = null),
                (this.loop = (t) => {
                    if (this.stopped || (this.scheduleNextFrame(), t - this.lastFrameAt < this.minFrameIntervalMs))
                        return;
                    let e = y(this.lastFrameAt > 0 ? t - this.lastFrameAt : this.minFrameIntervalMs, 1, 100);
                    this.lastFrameAt = t;
                    let a = this.videoHandle?.element;
                    if (!a || a.readyState < 2 || !this.landmarker) return void this.renderer.render(this.current);
                    let i = a.videoWidth,
                        s = a.videoHeight;
                    if (
                        i > 0 &&
                        s > 0 &&
                        (this.inputCtx || (this.inputCtx = this.inputCanvas.getContext("2d")), this.inputCtx)
                    ) {
                        (this.inputCanvas.width !== i || this.inputCanvas.height !== s) &&
                            ((this.inputCanvas.width = i), (this.inputCanvas.height = s)),
                            this.inputCtx.drawImage(a, 0, 0, i, s);
                        let e = null;
                        try {
                            (e = this.landmarker.detectForVideo(this.inputCanvas, t)), (this.detectFailures = 0);
                        } catch {
                            (e = null),
                                (this.detectFailures += 1),
                                this.detectFailures >= 30 && this.recreateLandmarker();
                        }
                        e && this.ingest(e, i, s, t);
                    }
                    t - this.lastFaceAt > 600 && (this.target = v(f)),
                        this.smoothTowardTarget(e),
                        this.renderer.render(this.current);
                });
        }
        getCanvas() {
            return this.renderer.getCanvas();
        }
        setState(t) {
            this.renderer.setState(t);
        }
        async start(t, e = {}) {
            var a;
            let l,
                h =
                    ((a = {
                        mediapipeModulePath: e.assets?.mediapipeModulePath,
                        mediapipeWasmPath: e.assets?.mediapipeWasmPath,
                        faceLandmarkerModelPath: e.assets?.faceLandmarkerModelPath,
                    }),
                    {
                        mediapipeModulePath: (l = r(a?.mediapipeModulePath)
                            ? a.mediapipeModulePath
                            : "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.35"),
                        mediapipeWasmPath: r(a?.mediapipeWasmPath) ? a.mediapipeWasmPath : `${l}/wasm`,
                        faceLandmarkerModelPath: r(a?.faceLandmarkerModelPath)
                            ? a.faceLandmarkerModelPath
                            : "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task",
                    });
            (this.mediapipeModulePath = h.mediapipeModulePath),
                (this.mediapipeWasmPath = h.mediapipeWasmPath),
                (this.faceLandmarkerModelPath = h.faceLandmarkerModelPath),
                (this.minFrameIntervalMs = 1e3 / (e.maxFps ?? 30)),
                (this.videoHandle = (0, i.t)(t, { keepStreamAlive: !0 }));
            try {
                if ((this.renderer.init(), (this.landmarker = await this.createLandmarker()), this.stopped)) {
                    this.landmarker?.close(), (this.landmarker = null);
                    return;
                }
                let t = this.videoHandle?.element;
                (this.usingRvfc = !!(t && (0, s.n)(t))), this.scheduleNextFrame();
            } catch (t) {
                throw (this.stop(), t);
            }
        }
        scheduleNextFrame() {
            if (this.stopped) return;
            let t = this.videoHandle?.element,
                e = this.usingRvfc && t ? (0, s.n)(t) : null;
            e
                ? (this.rvfcHandle = e.requestVideoFrameCallback(this.loop))
                : (this.rafId = requestAnimationFrame(this.loop));
        }
        stop() {
            (this.stopped = !0), null != this.rafId && (cancelAnimationFrame(this.rafId), (this.rafId = null));
            let t = this.videoHandle?.element;
            t &&
                null != this.rvfcHandle &&
                ((0, s.n)(t)?.cancelVideoFrameCallback(this.rvfcHandle), (this.rvfcHandle = null)),
                this.landmarker?.close(),
                (this.landmarker = null),
                this.renderer.dispose(),
                this.videoHandle?.dispose(),
                (this.videoHandle = null);
        }
        createLandmarker() {
            return (0, s.r)({
                mediapipeModulePath: this.mediapipeModulePath,
                mediapipeWasmPath: this.mediapipeWasmPath,
                faceLandmarkerModelPath: this.faceLandmarkerModelPath,
            });
        }
        ingest(t, e, a, i) {
            var s, r, l;
            let h,
                n,
                o,
                d,
                c,
                u,
                p,
                f,
                g,
                k,
                v = (function (t, e, a) {
                    let i,
                        s = t.faceLandmarks?.[0];
                    if (!s) return null;
                    let r = s[4],
                        l = s[33],
                        h = s[133],
                        n = s[263],
                        o = s[362],
                        d = s[10],
                        c = s[152];
                    if (!r || !l || !h || !n || !o || !d || !c) return null;
                    let u = r.x * e,
                        p = r.y * a,
                        f = ((l.x + h.x) / 2) * e,
                        m = ((l.y + h.y) / 2) * a,
                        y = ((n.x + o.x) / 2) * e,
                        M = ((n.y + o.y) / 2) * a,
                        g = d.y * a,
                        k = c.y * a,
                        v = (f + y) / 2,
                        b = Math.hypot(y - f, M - m) || 1e-4,
                        x = Math.abs(k - g) || 1e-4,
                        w = (u - v) / b,
                        P = (p - (g + k) / 2) / x,
                        C = Math.atan2(M - m, y - f);
                    if (
                        !Number.isFinite(w) ||
                        !Number.isFinite(P) ||
                        !Number.isFinite(C) ||
                        !Number.isFinite(v) ||
                        !Number.isFinite(b)
                    )
                        return null;
                    if (e > 0 && a > 0) {
                        let t = 1 / 0,
                            r = 1 / 0,
                            l = -1 / 0,
                            h = -1 / 0;
                        for (let e = 0; e < s.length; e += 1) {
                            let a = s[e];
                            a.x < t && (t = a.x), a.x > l && (l = a.x), a.y < r && (r = a.y), a.y > h && (h = a.y);
                        }
                        let n = (l - t) * e,
                            o = (h - r) * a;
                        n > 0 && o > 0 && (i = Math.sqrt(n * o) / Math.min(e, a));
                    }
                    return {
                        yaw: w,
                        pitch: P,
                        roll: C,
                        eyeMidX: v,
                        eyeMidY: (m + M) / 2,
                        eyeDist: b,
                        faceH: x,
                        faceSizeRatio: i,
                    };
                })(t, e, a);
            if (!v) return;
            let b = this.applyMedian(v);
            if (((this.lastFaceAt = i), !this.calibrated)) {
                this.calAttempts += 1;
                let t = Math.atan2(Math.sin(b.roll - this.prevCalRoll), Math.cos(b.roll - this.prevCalRoll)),
                    e =
                        Number.isFinite(this.prevCalYaw) &&
                        (Math.abs(b.yaw - this.prevCalYaw) > 0.012 ||
                            Math.abs(b.pitch - this.prevCalPitch) > 0.012 ||
                            Math.abs(t) > 0.02);
                (this.prevCalYaw = b.yaw), (this.prevCalPitch = b.pitch), (this.prevCalRoll = b.roll);
                let a = this.calAttempts >= 60;
                if (
                    ((!e || a) &&
                        ((this.nFrames += 1),
                        (this.sum.yaw += b.yaw),
                        (this.sum.pitch += b.pitch),
                        (this.sum.roll += b.roll),
                        (this.sum.cx += b.eyeMidX),
                        (this.sum.cy += b.eyeMidY),
                        (this.sum.dist += b.eyeDist),
                        (this.sum.faceH += b.faceH)),
                    this.nFrames >= 20)
                ) {
                    let t = this.nFrames;
                    (this.neutral = {
                        yaw: y(this.sum.yaw / t, -0.06, 0.06),
                        pitch: this.sum.pitch / t,
                        roll: y(this.sum.roll / t, -0.05, 0.05),
                        cx: this.sum.cx / t,
                        cy: this.sum.cy / t,
                        dist: this.sum.dist / t || 1,
                        faceH: this.sum.faceH / t || 1,
                    }),
                        (this.calibrated = !0);
                }
                return;
            }
            let x =
                    ((s = this.neutral),
                    (h = Math.atan2(Math.sin((h = b.roll - s.roll)), Math.cos(h))),
                    (n = s.dist || 1e-4),
                    (d = (o = M(b.pitch - s.pitch, 0.005)) < 0 ? m.pitchUpGain : m.pitchDownGain),
                    (c = M(b.yaw - s.yaw, 0.005)),
                    (u = M(h, 0.006)),
                    (p = M((b.eyeMidX - s.cx) / n, 0.03)),
                    (f = M((b.eyeMidY - s.cy) / n, 0.03)),
                    (g = s.faceH || 1e-4),
                    (k = M((b.faceH - s.faceH) / g, 0.1)),
                    {
                        headEuler: {
                            x: y(o * d * m.signPitch, -m.rotMax, m.rotMax),
                            y: y(c * m.yawGain * m.signYaw, -m.rotMax, m.rotMax),
                            z: y(u * m.rollGain * m.signRoll, -m.rotMax, m.rotMax),
                        },
                        rootOffset: {
                            x: y(p * m.lateralGain * m.signX, -m.lateralMax, m.lateralMax),
                            y: y(f * m.lateralGain * m.signY, -m.lateralMax, m.lateralMax),
                        },
                        depth: y(k * m.depthGain, -m.depthMax, m.depthMax),
                    }),
                {
                    blink: w,
                    mouthOpen: P,
                    smile: C,
                } = (function (t) {
                    let e = t.faceBlendshapes?.[0]?.categories ?? [],
                        a = 0,
                        i = 0,
                        s = 0,
                        r = 0,
                        l = 0;
                    for (let t of e)
                        "eyeBlinkLeft" === t.categoryName
                            ? (a = t.score)
                            : "eyeBlinkRight" === t.categoryName
                              ? (i = t.score)
                              : "jawOpen" === t.categoryName
                                ? (s = t.score)
                                : "mouthSmileLeft" === t.categoryName
                                  ? (r = t.score)
                                  : "mouthSmileRight" === t.categoryName && (l = t.score);
                    return { blink: { left: a, right: i }, mouthOpen: s, smile: (r + l) / 2 };
                })(t);
            (this.target = {
                tracked: !0,
                headEuler: { ...x.headEuler },
                rootOffset: { ...x.rootOffset },
                depth: x.depth,
                blink: w,
                mouthOpen: P,
                smile: C,
            }),
                this.seeded ||
                    (((r = this.current).tracked = (l = this.target).tracked),
                    (r.headEuler.x = l.headEuler.x),
                    (r.headEuler.y = l.headEuler.y),
                    (r.headEuler.z = l.headEuler.z),
                    (r.rootOffset.x = l.rootOffset.x),
                    (r.rootOffset.y = l.rootOffset.y),
                    (r.depth = l.depth),
                    (r.blink.left = l.blink.left),
                    (r.blink.right = l.blink.right),
                    (r.mouthOpen = l.mouthOpen),
                    (r.smile = l.smile),
                    (this.seeded = !0));
        }
        applyMedian(t) {
            return void 0 !== t.faceSizeRatio && t.faceSizeRatio < 0.35
                ? {
                      ...t,
                      yaw: this.medYaw.filter(t.yaw),
                      pitch: this.medPitch.filter(t.pitch),
                      roll: this.medRoll.filter(t.roll),
                  }
                : (this.medYaw.reset(), this.medPitch.reset(), this.medRoll.reset(), t);
        }
        smoothTowardTarget(t) {
            let e = this.current,
                a = this.target,
                i = (0, s.i)(0.4, t),
                r = (0, s.i)(0.35, t),
                l = (0, s.i)(0.2, t),
                h = (0, s.i)(0.5, t);
            (e.tracked = a.tracked),
                (e.headEuler.x += (a.headEuler.x - e.headEuler.x) * i),
                (e.headEuler.y += (a.headEuler.y - e.headEuler.y) * i),
                (e.headEuler.z += (a.headEuler.z - e.headEuler.z) * i),
                (e.rootOffset.x += (a.rootOffset.x - e.rootOffset.x) * r),
                (e.rootOffset.y += (a.rootOffset.y - e.rootOffset.y) * r),
                (e.depth += (a.depth - e.depth) * l),
                (e.blink.left += (a.blink.left - e.blink.left) * h),
                (e.blink.right += (a.blink.right - e.blink.right) * h),
                (e.mouthOpen += (a.mouthOpen - e.mouthOpen) * h),
                (e.smile += (a.smile - e.smile) * h);
        }
        recreateLandmarker() {
            (this.detectFailures = 0),
                this.landmarker?.close(),
                (this.landmarker = null),
                this.createLandmarker()
                    .then((t) => {
                        this.stopped ? t.close() : (this.landmarker = t);
                    })
                    .catch(() => {});
        }
    };
function v(t) {
    return {
        tracked: t.tracked,
        headEuler: { ...t.headEuler },
        rootOffset: { ...t.rootOffset },
        depth: t.depth,
        blink: { ...t.blink },
        mouthOpen: t.mouthOpen,
        smile: t.smile,
    };
}
function b() {
    return new k();
}
