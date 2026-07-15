let i;
r.d(t, {
    B5: () => Y,
    BA: () => B,
    OD: () => V,
    P5: () => v.t,
    Wy: () => z,
    hM: () => v.n,
    ki: () => j,
    lV: () => H,
    videoSelfieFlowModuleMachine: () => Z,
});
var s = r(987800),
    a = r(440006),
    n = r(871178),
    o = r(768672);
r(935374), r(368499);
var c = r(288052);
r(599078), r(943956), r(28134), r(749378), r(768816), r(806374);
var d = r(168056);
r(395751);
var l = r(248051),
    u = r(305463),
    h = r(309370);
r(550155), r(117589);
var p = r(713692);
r(825123);
var g = r(827029);
r(405479), r(517666), r(77254);
var m = r(235582),
    f = r(252560),
    v = r(802016),
    w = r(877522);
async function E(e, t) {
    return (await o.t.post(e, { base64Image: t })).data;
}
function y(e, t) {
    let r = n.t.getInstance();
    return new Promise((i, s) => {
        let a = r.setTimeout(() => {
                t.removeEventListener("abort", n), i();
            }, e),
            n = () => {
                r.clearTimeout(a), s(Error("aborted"));
            };
        t.addEventListener("abort", n, { once: !0 });
    });
}
async function b(e) {
    let { config: t, deps: r, stream: i, signal: s, onStatus: a } = e,
        n = new h.b();
    await n.initialize({ autocaptureInterval: 1e4, useOnDeviceWorkflow: !1, videoSelfie: !0 }),
        n.setChecksEnabled({
            lenses: t.validateLenses ?? !1,
            mask: t.validateFaceMask ?? !1,
            closedEyes: t.validateClosedEyes ?? !1,
            headWear: t.validateHeadCover ?? !1,
            occlusion: !1,
        });
    let o = !0 === t.useAsSelfie ? "selfie" : "videoSelfie",
        c = new m.t(i),
        d = {
            showTutorial: !1,
            validateBrightness: !1,
            validateLenses: t.validateLenses ?? !1,
            validateFaceMask: t.validateFaceMask ?? !1,
            validateClosedEyes: t.validateClosedEyes ?? !1,
            validateHeadCover: t.validateHeadCover ?? !1,
            autoCaptureTimeout: 10,
        },
        l = () =>
            new Promise((e, t) => {
                let i = () => {
                        u.cleanup(), t(Error("aborted"));
                    },
                    l = (e) => {
                        s.removeEventListener("abort", i), e();
                    };
                s.addEventListener("abort", i, { once: !0 });
                let u = (0, h.l)({
                    config: d,
                    capturer: c,
                    provider: n,
                    onUpdate: (e) => a?.(e),
                    onSuccess: (i, s) => {
                        (async () => {
                            try {
                                await (0, h.m)({
                                    encryptedBase64Image: await (0, h.a)({
                                        canvas: i,
                                        dependencies: { getWasmUtil: async () => r.getWasmUtil() },
                                    }),
                                    faceCoordinates: s,
                                    imageType: o,
                                }),
                                    await (0, h.p)(o),
                                    l(e);
                            } catch (e) {
                                l(() => t(e instanceof Error ? e : Error(String(e))));
                            }
                        })();
                    },
                });
            });
    try {
        for (let e = 1; e <= 3; e++)
            try {
                await l();
                return;
            } catch (t) {
                if (s.aborted || e >= 3) throw t;
                a?.("error"), n.reset(), await y(1500, s);
            }
    } finally {
        c.dispose(), n.dispose();
    }
}
async function T(e) {
    let { step: t, config: r, stream: i, signal: s, onStatus: a } = e,
        n = new w.i();
    await n.initialize({ videoSelfie: !0 });
    let o = (0, g.n)();
    n.setGeometry({
        ...w.t,
        windowOuterWidth: o.outerWidth,
        windowOuterHeight: o.outerHeight,
        windowInnerWidth: o.innerWidth,
        windowInnerHeight: o.innerHeight,
    }),
        n.setSettings({
            isFixedMask: !1,
            isIPhone14OrHigher: !1,
            idType: "backId" === t ? "BackId" : "FrontId",
            blurCheckEnabled: !0,
            glareCheckEnabled: !1,
            faceQualityCheckEnabled: !1,
            iouCheckEnabled: !0,
            fpsLimitEnabled: !1,
        }),
        n.setThresholds(w.r),
        n.setModelType(w.n);
    let c = new m.t(i);
    return new Promise((e, i) => {
        let o = !1,
            d = !1;
        n.setCallbacks({
            onFarAway: () => {
                d && !o && a?.("tooFar");
            },
            onBlur: () => {
                d && !o && a?.("blur");
            },
            onCapturing: () => {
                if (!d || o) return;
                let n = c.getLatestCanvas()?.getBase64Image();
                n &&
                    ((o = !0),
                    a?.("capturing"),
                    (async () => {
                        try {
                            if (await k(t, r, n)) {
                                a?.("success"), await y(900, s), p(), e();
                                return;
                            }
                            o = !1;
                        } catch (e) {
                            p(), i(e instanceof Error ? e : Error(String(e)));
                        }
                    })());
            },
        });
        let l = new h.y({ capturer: c, provider: n }),
            u = !1,
            p = () => {
                u || ((u = !0), l.dispose(), c.dispose(), n.dispose());
            };
        s.addEventListener(
            "abort",
            () => {
                p(), i(Error("aborted"));
            },
            { once: !0 },
        ),
            y(3e3, s)
                .then(() => {
                    u || s.aborted || ((d = !0), a?.("detecting"));
                })
                .catch(() => {});
    });
}
async function k(e, t, r) {
    if ("backId" === e) {
        if (t.compareBackIdEnabled) {
            let e = await E(c.t.videoSelfieCompareBackId, r);
            if (!1 === e.idSideMatched || !1 === e.success) return !1;
        }
        return !t.compareBackOcrEnabled || !1 !== (await E(c.t.videoSelfieCompareBackOcr, r)).success;
    }
    if (t.compareIdEnabled) {
        var i;
        let e = await E(c.t.videoSelfieCompareId, r);
        if (
            !1 === e.idTypeMatched ||
            ("number" == typeof e.faceRecognitionConfidence &&
                !("number" != typeof (i = e.faceRecognitionConfidence) || i >= 1))
        )
            return !1;
    }
    return !t.compareOcrEnabled || !1 !== (await E(c.t.videoSelfieCompareOcr, r)).success;
}
var I = class {
        constructor(e = {}) {
            (this.canvas = null),
                (this.ctx = null),
                (this.video = null),
                (this.rafId = null),
                (this.audioTrack = null),
                (this.videoTrack = null),
                (this.composite = null),
                (this.fps = e.fps ?? 30);
        }
        start(e) {
            (this.canvas = document.createElement("canvas")),
                (this.ctx = this.canvas.getContext("2d")),
                (this.video = document.createElement("video")),
                (this.video.muted = !0),
                (this.video.playsInline = !0),
                (this.audioTrack = e.getAudioTracks()[0] ?? null),
                this.setVideoSource(e);
            let t = this.canvas.captureStream(this.fps);
            return this.audioTrack && t.addTrack(this.audioTrack), (this.composite = t), this.startDrawLoop(), t;
        }
        switchVideo(e) {
            if (!this.composite) return;
            let t = this.videoTrack;
            this.setVideoSource(e), t && t.stop();
        }
        get stream() {
            return this.composite ?? void 0;
        }
        stop() {
            null !== this.rafId && (cancelAnimationFrame(this.rafId), (this.rafId = null)),
                this.videoTrack?.stop(),
                this.audioTrack?.stop(),
                this.composite?.getTracks().forEach((e) => e.stop()),
                this.video && (this.video.srcObject = null),
                (this.canvas = null),
                (this.ctx = null),
                (this.video = null),
                (this.videoTrack = null),
                (this.audioTrack = null),
                (this.composite = null);
        }
        setVideoSource(e) {
            this.videoTrack = e.getVideoTracks()[0] ?? null;
            let t = this.video;
            t && ((t.srcObject = new MediaStream(e.getVideoTracks())), t.play().catch(() => {}));
        }
        startDrawLoop() {
            let e = () => {
                let t = this.video,
                    r = this.canvas,
                    i = this.ctx;
                t &&
                    r &&
                    i &&
                    t.videoWidth > 0 &&
                    ((r.width !== t.videoWidth || r.height !== t.videoHeight) &&
                        ((r.width = t.videoWidth), (r.height = t.videoHeight)),
                    i.drawImage(t, 0, 0, r.width, r.height)),
                    (this.rafId = requestAnimationFrame(e));
            };
            this.rafId = requestAnimationFrame(e);
        }
    },
    S = class {
        constructor() {
            (this.mediaRecorder = null),
                (this._isRecording = !1),
                (this._hasError = !1),
                (this._error = null),
                (this.mimeType = ""),
                (this.buffer = []),
                (this.bufferedBytes = 0),
                (this.partNumber = 0),
                (this.onPart = null);
        }
        get isRecording() {
            return this._isRecording;
        }
        get hasError() {
            return this._hasError;
        }
        get error() {
            return this._error;
        }
        startRecording(e, t) {
            this.reset(), (this.buffer = []), (this.bufferedBytes = 0), (this.partNumber = 0), (this.onPart = t);
            try {
                this.mimeType = (0, f.n)();
                let t = new MediaRecorder(e.clone(), { mimeType: this.mimeType, videoBitsPerSecond: 25e5 });
                (t.ondataavailable = (e) => {
                    e.data.size > 0 &&
                        (this.buffer.push(e.data),
                        (this.bufferedBytes += e.data.size),
                        this.bufferedBytes >= 5242880 && this.flushPart());
                }),
                    (t.onerror = (e) => {
                        (this._error = `Recording error: ${e instanceof ErrorEvent && e.error instanceof Error ? e.error.message : e.type}`),
                            (this._isRecording = !1),
                            (this._hasError = !0);
                    }),
                    t.start(1e3),
                    (this.mediaRecorder = t),
                    (this._isRecording = !0),
                    (this._error = null),
                    (this._hasError = !1);
            } catch (e) {
                (this._error = `Failed to start recording: ${e instanceof Error ? e.message : String(e)}`),
                    (this._hasError = !0);
            }
        }
        stopRecording() {
            let e = this.mediaRecorder;
            return new Promise((t) => {
                e && this._isRecording
                    ? ((e.onstop = () => {
                          this.flushPart(), t();
                      }),
                      e.stop(),
                      (this._isRecording = !1))
                    : t(),
                    e?.stream?.getTracks().forEach((e) => e.stop());
            });
        }
        reset() {
            let e = this.mediaRecorder;
            e &&
                ((e.ondataavailable = null),
                (e.onerror = null),
                (e.onstop = null),
                "inactive" !== e.state && e.stop(),
                e.stream.getTracks().forEach((e) => e.stop()),
                (this.mediaRecorder = null)),
                (this.onPart = null),
                (this.buffer = []),
                (this.bufferedBytes = 0),
                (this._isRecording = !1),
                (this._error = null),
                (this._hasError = !1);
        }
        flushPart() {
            if (0 === this.bufferedBytes || !this.onPart) return;
            let e = new Blob(this.buffer, { type: this.mimeType });
            (this.partNumber += 1),
                this.onPart({ chunk: e, partNumber: this.partNumber }),
                (this.buffer = []),
                (this.bufferedBytes = 0);
        }
    };
async function C() {
    return (await o.t.post(c.t.videoSelfieUploadInitiate, {})).data.uploadId;
}
async function R(e, t, r) {
    let i = await o.t.post(c.t.videoSelfieUploadPart, r, {
        query: { uploadId: e, partNumber: t },
        headers: { "Content-Type": "application/octet-stream" },
    });
    return { partNumber: i.data.partNumber, eTag: i.data.eTag };
}
async function x(e, t) {
    return (await o.t.post(c.t.videoSelfieUploadComplete, { uploadId: e, parts: t })).data.status;
}
var A = class {
    constructor() {
        (this.recorder = new S()),
            (this.uploadId = null),
            (this.parts = []),
            (this.inflight = []),
            (this.uploadFailed = !1);
    }
    get isRecording() {
        return this.recorder.isRecording;
    }
    async start(e) {
        (this.uploadId = await C()),
            (this.parts = []),
            (this.inflight = []),
            (this.uploadFailed = !1),
            this.recorder.startRecording(e, ({ chunk: e, partNumber: t }) => {
                let r = this.uploadId;
                if (!r) return;
                let i = R(r, t, e)
                    .then((e) => {
                        this.parts.push(e);
                    })
                    .catch(() => {
                        this.uploadFailed = !0;
                    });
                this.inflight.push(i);
            });
    }
    async stop() {
        let e = this.uploadId;
        if (
            !this.recorder.isRecording ||
            !e ||
            (await this.recorder.stopRecording(),
            await Promise.all(this.inflight),
            this.uploadFailed || 0 === this.parts.length)
        )
            return { recordingId: null };
        let t = [...this.parts].sort((e, t) => e.partNumber - t.partNumber);
        try {
            return await x(e, t), { recordingId: e };
        } catch {
            return { recordingId: null };
        }
    }
    cleanup() {
        this.recorder.reset();
    }
};
async function _(e, t) {
    if ("environment" !== e) return (0, u.i)({ video: { facingMode: e }, audio: t });
    let { stream: r } = await (0, p.n)();
    if (t)
        try {
            for (let e of (await (0, u.r)({ audio: !0 })).getAudioTracks()) r.addTrack(e);
        } catch (e) {
            throw (r.getTracks().forEach((e) => e.stop()), e);
        }
    return r;
}
function D(e) {
    e?.getTracks().forEach((e) => e.stop());
}
function B(e) {
    let t = (0, v.t)((0, v.n)(e)[0] ?? "selfie"),
        r = null,
        i = null,
        s = !1;
    return {
        warm() {
            r ||
                (r = (async () => {
                    try {
                        if ((await (0, l.t)()) !== "granted") return null;
                        return (i = await _(t, !0));
                    } catch {
                        return null;
                    }
                })());
        },
        async acquireCamera(e, a) {
            if (!s && e === t && a) {
                s = !0;
                let e = i ?? (r ? await r : null);
                if (((i = null), e)) return e;
            }
            return _(e, a);
        },
        dispose() {
            !s &&
                (i
                    ? (D(i), (i = null))
                    : r &&
                      r.then((e) => {
                          s || D(e);
                      }));
        },
    };
}
let F = () => new Promise(() => {});
function U(e) {
    return e.output;
}
function q(e) {
    return e.output.recordingId;
}
function L(e) {
    return String(e.error);
}
let M = (0, d.t)({
        types: { context: {}, events: {}, input: {} },
        actors: {
            acquireCamera: (0, d.a)(async ({ input: e, signal: t }) => {
                let r = await e.acquire(e.facingMode, e.withAudio);
                if (t.aborted) throw (r.getTracks().forEach((e) => e.stop()), Error("Camera acquire cancelled"));
                return r;
            }),
            startRecording: (0, d.a)(async ({ input: e }) => {
                await e.service.start(e.stream);
            }),
            finalizeRecording: (0, d.a)(async ({ input: e }) => e.service.stop()),
            detectStep: (0, d.i)(({ input: e, sendBack: t }) => {
                let r = new AbortController();
                return (
                    e
                        .detect({
                            step: e.step,
                            stream: e.stream,
                            signal: r.signal,
                            onStatus: (e) => t({ type: "DETECTION_STATUS", status: e }),
                        })
                        .then(() => t({ type: "DETECTION_DONE" }))
                        .catch((e) => {
                            r.signal.aborted || t({ type: "DETECTION_FAILED", error: String(e) });
                        }),
                    () => r.abort()
                );
            }),
        },
        actions: {
            advanceStep: (0, d.r)({ stepIndex: ({ context: e }) => e.stepIndex + 1 }),
            setDetectionStatus: (0, d.r)({ detectionStatus: ({ event: e }) => e.status }),
            setDetectionError: (0, d.r)({ detectionError: ({ event: e }) => e.error }),
            setErrorFromDetection: (0, d.r)({ error: ({ event: e }) => e.error }),
            clearDetectionFeedback: (0, d.r)({ detectionStatus: () => void 0, detectionError: () => void 0 }),
            setUploadFailedError: (0, d.r)({ error: () => "Video upload failed" }),
            cleanup: ({ context: e }) => {
                e.service.cleanup(), e.compositor.stop(), e.stream?.getTracks().forEach((e) => e.stop());
            },
        },
        guards: {
            isLastStep: ({ context: e }) => e.stepIndex >= e.steps.length - 1,
            nextStepFlipsCamera: ({ context: e }) =>
                (0, v.t)(e.steps[e.stepIndex]) !== (0, v.t)(e.steps[e.stepIndex + 1]),
            uploadReturnedNoRecordingId: ({ event: e }) => null === q(e),
        },
    }),
    O = [
        { target: "finalizing", guard: "isLastStep" },
        { target: "switchingCamera", guard: "nextStepFlipsCamera", actions: "advanceStep" },
        { target: "recording", reenter: !0, actions: "advanceStep" },
    ],
    P = M.createMachine({
        id: "videoSelfieRecording",
        initial: "idle",
        context: ({ input: e }) => ({
            service: e.dependencies?.createRecordingService?.() ?? new A(),
            compositor: e.dependencies?.createCompositor?.() ?? new I(),
            acquireCamera: e.dependencies?.acquireCamera ?? _,
            detect: e.dependencies?.detect ?? F,
            steps: e.steps && e.steps.length > 0 ? e.steps : ["selfie"],
            stepIndex: 0,
            stream: void 0,
            composite: void 0,
            detectionStatus: void 0,
            detectionError: void 0,
            recordingId: null,
            error: void 0,
        }),
        on: { ABORT: { target: ".aborted" } },
        states: {
            idle: { on: { START: { target: "acquiringCamera" } } },
            acquiringCamera: {
                invoke: {
                    src: "acquireCamera",
                    input: ({ context: e }) => ({
                        acquire: e.acquireCamera,
                        facingMode: (0, v.t)(e.steps[e.stepIndex]),
                        withAudio: !0,
                    }),
                    onDone: {
                        target: "starting",
                        actions: [
                            ({ context: e, event: t }) => {
                                e.compositor.start(U(t));
                            },
                            (0, d.r)({
                                stream: ({ event: e }) => U(e),
                                composite: ({ context: e }) => e.compositor.stream,
                            }),
                        ],
                    },
                    onError: { target: "error", actions: (0, d.r)({ error: ({ event: e }) => L(e) }) },
                },
            },
            starting: {
                invoke: {
                    src: "startRecording",
                    input: ({ context: e }) => ({ service: e.service, stream: e.composite }),
                    onDone: { target: "recording" },
                    onError: { target: "error", actions: (0, d.r)({ error: ({ event: e }) => L(e) }) },
                },
            },
            recording: {
                entry: "clearDetectionFeedback",
                invoke: {
                    src: "detectStep",
                    input: ({ context: e }) => ({ detect: e.detect, step: e.steps[e.stepIndex], stream: e.stream }),
                },
                on: {
                    DETECTION_STATUS: { actions: "setDetectionStatus" },
                    DETECTION_DONE: O,
                    NEXT_STEP: O,
                    DETECTION_FAILED: { target: "error", actions: "setErrorFromDetection" },
                },
            },
            switchingCamera: {
                invoke: {
                    src: "acquireCamera",
                    input: ({ context: e }) => ({
                        acquire: e.acquireCamera,
                        facingMode: (0, v.t)(e.steps[e.stepIndex]),
                        withAudio: !1,
                    }),
                    onDone: {
                        target: "recording",
                        actions: [
                            ({ context: e, event: t }) => {
                                e.compositor.switchVideo(U(t));
                            },
                            (0, d.r)({ stream: ({ event: e }) => U(e) }),
                        ],
                    },
                    onError: { target: "error", actions: (0, d.r)({ error: ({ event: e }) => L(e) }) },
                },
            },
            finalizing: {
                invoke: {
                    src: "finalizeRecording",
                    input: ({ context: e }) => ({ service: e.service }),
                    onDone: [
                        {
                            target: "error",
                            guard: "uploadReturnedNoRecordingId",
                            actions: [(0, d.r)({ recordingId: ({ event: e }) => q(e) }), "setUploadFailedError"],
                        },
                        { target: "finished", actions: (0, d.r)({ recordingId: ({ event: e }) => q(e) }) },
                    ],
                    onError: { target: "error", actions: (0, d.r)({ error: ({ event: e }) => L(e) }) },
                },
            },
            finished: { type: "final", entry: "cleanup" },
            error: { type: "final", entry: "cleanup" },
            aborted: { type: "final", entry: "cleanup" },
        },
    });
function N(e) {
    let t = "string" == typeof e.value ? e.value : "idle",
        { context: r } = e,
        i = r.steps,
        s = r.stepIndex;
    return {
        status: "acquiringCamera" === t ? "starting" : t,
        step: i[s],
        stepIndex: s,
        isLastStep: s >= i.length - 1,
        stream: r.stream,
        composite: r.composite,
        detectionStatus: r.detectionStatus,
        recordingId: r.recordingId,
        error: r.error,
    };
}
function W({ actor: e }) {
    return {
        start() {
            e.send({ type: "START" });
        },
        nextStep() {
            e.send({ type: "NEXT_STEP" });
        },
        abort() {
            e.send({ type: "ABORT" });
        },
    };
}
function V(e = {}) {
    let t = (function (e = {}) {
            var t;
            let r = e.config,
                i =
                    e.dependencies?.detect ??
                    (r
                        ? ((t = { getWasmUtil: () => s.t.getInstance() }),
                          ({ step: e, stream: i, signal: s, onStatus: a }) =>
                              "selfie" === e
                                  ? b({ config: r, deps: t, stream: i, signal: s, onStatus: a })
                                  : "frontId" === e || "backId" === e
                                    ? T({ step: e, config: r, stream: i, signal: s, onStatus: a })
                                    : new Promise(() => {}))
                        : void 0);
            return (0, d.s)(P, {
                input: { steps: r ? (0, v.n)(r) : void 0, dependencies: { ...e.dependencies, detect: i } },
            }).start();
        })(e),
        r = (0, d.l)({ actor: t, mapState: N, createApi: W });
    return {
        ...r,
        stop() {
            "active" === t.getSnapshot().status && t.send({ type: "ABORT" }), r.stop();
        },
    };
}
function z(e) {
    return (0, a.t)((0, v.r)(e));
}
async function H(e) {
    return (
        (await o.t.get(c.t.questionAndAnswer, { query: { numberOfQuestions: e, returnVoiceConsentQuestion: !1 } })).data
            .questionAndAnswers ?? []
    );
}
async function j() {
    return (
        (await o.t.get(c.t.questionAndAnswer, { query: { numberOfQuestions: 0, returnVoiceConsentQuestion: !0 } })).data
            .questionAndAnswers?.[0]?.answer ?? ""
    );
}
async function $(e) {
    try {
        return { success: !0 === (await o.t.post(c.t.addSpeechV2, { base64Media: e, audioOnly: !0 })).data.success };
    } catch {
        return { success: !1 };
    }
}
let Q = window.AudioContext || window.webkitAudioContext,
    X = (e) => {
        let t = new Event("error");
        return (t.data = Error("Wrong state for " + e)), t;
    };
var G = class e {
    constructor(t, r = null) {
        (this.stream = t),
            (this.config = r),
            (this.state = "inactive"),
            (this.em = document.createDocumentFragment()),
            (this.encoder = ((e) => {
                let t = new Blob([
                    e
                        .toString()
                        .replace(/^(\(\)\s*=>|function\s*\(\))\s*{/, "")
                        .replace(/}$/, ""),
                ]);
                return new Worker(URL.createObjectURL(t));
            })(e.encoder));
        let i = this;
        this.encoder.addEventListener("message", (e) => {
            let t = new Event("dataavailable");
            (t.data = new Blob([e.data], { type: i.mimeType })),
                i.em.dispatchEvent(t),
                "inactive" === i.state && i.em.dispatchEvent(new Event("stop"));
        });
    }
    start(e) {
        if ("inactive" !== this.state) return this.em.dispatchEvent(X("start"));
        (this.state = "recording"),
            i || (i = new Q(this.config)),
            (this.clone = this.stream.clone()),
            (this.input = i.createMediaStreamSource(this.clone)),
            (this.processor = i.createScriptProcessor(2048, 1, 1)),
            this.encoder.postMessage(["init", i.sampleRate]),
            (this.processor.onaudioprocess = (e) => {
                "recording" === this.state && this.encoder.postMessage(["encode", e.inputBuffer.getChannelData(0)]);
            }),
            this.input.connect(this.processor),
            this.processor.connect(i.destination),
            this.em.dispatchEvent(new Event("start")),
            e &&
                (this.slicing = setInterval(() => {
                    "recording" === this.state && this.requestData();
                }, e));
    }
    stop() {
        return "inactive" === this.state
            ? this.em.dispatchEvent(X("stop"))
            : (this.requestData(),
              (this.state = "inactive"),
              this.clone.getTracks().forEach((e) => {
                  e.stop();
              }),
              this.processor.disconnect(),
              this.input.disconnect(),
              clearInterval(this.slicing));
    }
    pause() {
        return "recording" !== this.state
            ? this.em.dispatchEvent(X("pause"))
            : ((this.state = "paused"), this.em.dispatchEvent(new Event("pause")));
    }
    resume() {
        return "paused" !== this.state
            ? this.em.dispatchEvent(X("resume"))
            : ((this.state = "recording"), this.em.dispatchEvent(new Event("resume")));
    }
    requestData() {
        return "inactive" === this.state
            ? this.em.dispatchEvent(X("requestData"))
            : this.encoder.postMessage(["dump", i.sampleRate]);
    }
    addEventListener(...e) {
        this.em.addEventListener(...e);
    }
    removeEventListener(...e) {
        this.em.removeEventListener(...e);
    }
    dispatchEvent(...e) {
        this.em.dispatchEvent(...e);
    }
};
(G.prototype.mimeType = "audio/wav"),
    (G.isTypeSupported = (e) => G.prototype.mimeType === e),
    (G.notSupported = !navigator.mediaDevices || !Q),
    (G.encoder = () => {
        let e = [];
        onmessage = (t) => {
            "encode" === t.data[0]
                ? (function (t) {
                      let r = t.length,
                          i = new Uint8Array(2 * r);
                      for (let e = 0; e < r; e++) {
                          let r = 2 * e,
                              s = t[e];
                          s > 1 ? (s = 1) : s < -1 && (s = -1), (s *= 32768), (i[r] = s), (i[r + 1] = s >> 8);
                      }
                      e.push(i);
                  })(t.data[1])
                : "dump" === t.data[0] &&
                  (function (t) {
                      let r = e.length ? e[0].length : 0,
                          i = e.length * r,
                          s = new Uint8Array(44 + i),
                          a = new DataView(s.buffer);
                      a.setUint32(0, 0x52494646, !1),
                          a.setUint32(4, 36 + i, !0),
                          a.setUint32(8, 0x57415645, !1),
                          a.setUint32(12, 0x666d7420, !1),
                          a.setUint32(16, 16, !0),
                          a.setUint16(20, 1, !0),
                          a.setUint16(22, 1, !0),
                          a.setUint32(24, t, !0),
                          a.setUint32(28, 2 * t, !0),
                          a.setUint16(32, 2, !0),
                          a.setUint16(34, 16, !0),
                          a.setUint32(36, 0x64617461, !1),
                          a.setUint32(40, i, !0);
                      for (let t = 0; t < e.length; t++) s.set(e[t], t * r + 44);
                      (e = []), postMessage(s.buffer, [s.buffer]);
                  })(t.data[1]);
        };
    }),
    (G.encoder = () => {
        let e;
        importScripts("https://cdnjs.cloudflare.com/ajax/libs/lamejs/1.2.0/lame.min.js");
        let t = new Int8Array();
        function r(e, t) {
            if (0 === t.length) return e;
            let r = new Int8Array(e.length + t.length);
            return r.set(e), r.set(t, e.length), r;
        }
        onmessage = (i) => {
            if ("init" === i.data[0]) {
                var s;
                (s = i.data[1]), (e = new lamejs.Mp3Encoder(1, s || 44100, 128));
            } else if ("encode" === i.data[0]) {
                var a = i.data[1];
                for (let e = 0; e < a.length; e++) a[e] = 32767.5 * a[e];
                let s = e.encodeBuffer(a);
                t = r(t, s);
            } else {
                let s, a;
                i.data[1], (s = e.flush()), (a = (t = r(t, s)).buffer), (t = new Int8Array()), postMessage(a, [a]);
            }
        };
    }),
    (G.prototype.mimeType = "audio/mpeg");
let J = "audio/mpeg";
var K = class {
    constructor() {
        (this.recorder = null), (this.chunks = []), (this._isRecording = !1);
    }
    get isRecording() {
        return this._isRecording;
    }
    start(e) {
        this.reset(), (this.chunks = []);
        let t = new G(new MediaStream(e.getAudioTracks()).clone());
        (t.mimeType = J),
            t.addEventListener("dataavailable", (e) => {
                e.data.size > 0 && this.chunks.push(e.data);
            }),
            t.start(),
            (this.recorder = t),
            (this._isRecording = !0);
    }
    stop() {
        let e = this.recorder;
        return new Promise((t) => {
            e && this._isRecording
                ? (e.addEventListener("stop", () => {
                      (this._isRecording = !1),
                          e.stream?.getTracks().forEach((e) => e.stop()),
                          (this.recorder = null),
                          t(new Blob(this.chunks, { type: J }));
                  }),
                  e.stop())
                : t(new Blob([], { type: J }));
        });
    }
    async stopAsBase64() {
        let e = await this.stop();
        return 0 === e.size
            ? ""
            : new Promise((t, r) => {
                  let i = new FileReader();
                  (i.onloadend = () => {
                      let e = i.result;
                      if ("string" != typeof e) return void r(Error("Failed to encode blob as base64"));
                      let s = e.indexOf(",");
                      t(s >= 0 ? e.slice(s + 1) : e);
                  }),
                      (i.onerror = () => {
                          r(i.error ?? Error("Failed to read blob"));
                      }),
                      i.readAsDataURL(e);
              });
    }
    reset() {
        let e = this.recorder;
        if (e && this._isRecording) {
            try {
                e.stop();
            } catch {}
            e.stream?.getTracks().forEach((e) => e.stop());
        }
        (this.recorder = null), (this._isRecording = !1);
    }
};
function Y() {
    let e = new K();
    return {
        start(t) {
            e.start(t);
        },
        async submit() {
            let t = await e.stopAsBase64();
            return 0 === t.length ? { success: !1 } : $(t);
        },
        cancel() {
            e.reset();
        },
    };
}
let Z = (0, d.t)({}).createMachine({ id: "videoSelfieFlowModule", initial: "running", states: { running: {} } });
