let i, e;
d.d(t, { i: () => m, n: () => p, r: () => b, t: () => X });
var c = d(768672),
    a = d(288052),
    s = d(749378),
    n = d(309370),
    Z = d(252560);
async function b() {
    try {
        await c.t.put(a.t.updateSession, { manualSelfieCheckNeeded: !0 });
    } catch {}
}
async function m() {
    try {
        await c.t.put(a.t.updateSession, { manualIdCheckNeeded: !0 });
    } catch {}
}
async function o(l) {
    let t = document.createElement("video");
    (t.preload = "metadata"), (t.src = URL.createObjectURL(l));
    try {
        Number.isFinite(t.duration) ||
            ((t.currentTime = Number.MAX_SAFE_INTEGER),
            await new Promise((l) => {
                let d = () => {
                        Number.isFinite(t.duration) &&
                            (t.removeEventListener("durationchange", d),
                            t.removeEventListener("timeupdate", i),
                            l(t.duration));
                    },
                    i = () => {
                        Number.isFinite(t.duration) &&
                            (t.removeEventListener("timeupdate", i),
                            t.removeEventListener("durationchange", d),
                            l(t.duration));
                    };
                t.addEventListener("durationchange", d), t.addEventListener("timeupdate", i);
            }));
        let l = t.duration;
        return Number.isFinite(l) ? l : null;
    } finally {
        URL.revokeObjectURL(t.src), (t.src = "");
    }
}
async function u(l, t) {
    let d = document.createElement("video");
    (d.preload = "metadata"), (d.playsInline = !0), (d.muted = !0);
    let i = URL.createObjectURL(l);
    d.src = i;
    let e = await o(l);
    if (!e || e < t) return URL.revokeObjectURL(i), l;
    let c = Math.max(0, Math.floor(e) - t);
    await new Promise((l) => {
        d.readyState >= 2 ? l() : d.addEventListener("loadedmetadata", () => l(), { once: !0 });
    });
    let a = document.createElement("canvas");
    (a.width = 230), (a.height = 320);
    let n = (0, s.t)() ? 15 : 24,
        Z = a.captureStream(n),
        b = a.getContext("2d");
    (d.currentTime = c),
        await new Promise((l) => {
            d.addEventListener("seeked", () => l(), { once: !0 });
        }),
        b.drawImage(d, 0, 0, a.width, a.height);
    let m = l.type || (MediaRecorder.isTypeSupported("video/webm") ? "video/webm" : "video/mp4"),
        u = new MediaRecorder(Z.clone(), { mimeType: m, videoBitsPerSecond: 5e5, bitsPerSecond: 5e5 }),
        h = [];
    u.ondataavailable = (l) => {
        l.data.size > 0 && h.push(l.data);
    };
    let W = new Promise((l) => {
        u.onstop = () => {
            let t = new Blob(h, { type: m });
            URL.revokeObjectURL(i),
                u.stream?.getTracks().forEach((l) => l.stop()),
                Z.getTracks().forEach((l) => l.stop()),
                (d.src = ""),
                l(t);
        };
    });
    d.addEventListener("play", () => {
        !(function l() {
            if (d.currentTime >= e) {
                u.stop(), d.pause();
                return;
            }
            b.drawImage(d, 0, 0, a.width, a.height), requestAnimationFrame(l);
        })(),
            setTimeout(() => {
                u.start(100);
            }, 500);
    }),
        d.play().catch(() => {
            URL.revokeObjectURL(i);
        });
    let G = await W;
    return console.timeEnd("trimLastNSecondsUsingPlayback"), G;
}
async function h(l, t) {
    return await u(l, t);
}
var W = class {
    constructor() {
        (this.mediaRecorder = null),
            (this._isRecording = !1),
            (this._hasError = !1),
            (this._error = null),
            (this.mimeType = ""),
            (this.stream = null),
            (this.pauseRecordingBound = this.pauseRecording.bind(this));
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
    startRecording(l) {
        this.reset(), this.registerEventListeners(), (this.stream = l);
        try {
            let t = (0, Z.t)();
            this.mimeType = t.mimeType;
            let d = new MediaRecorder(l.clone(), t);
            (d.onerror = (l) => {
                (this._error = `Recording error: ${l}`), (this._isRecording = !1), (this._hasError = !0);
            }),
                d.start(),
                (this.mediaRecorder = d),
                (this._isRecording = !0),
                (this._error = null),
                (this._hasError = !1);
        } catch (l) {
            (this._error = `Failed to start recording: ${l}`), (this._hasError = !0);
        }
    }
    async stopRecording(l, t, d) {
        let i = this.mediaRecorder;
        return new Promise((e, c) => {
            if ((this.removeEventListeners(), i && this._isRecording)) {
                let a = [];
                (i.ondataavailable = (l) => {
                    l.data.size > 0 && a.push(l.data);
                }),
                    (i.onstop = async () => {
                        try {
                            let i = await h(new Blob(a, { type: this.mimeType }), l),
                                c = t(
                                    await new Promise((l, t) => {
                                        let d = new FileReader();
                                        (d.onloadend = () => {
                                            l(d.result.split(",")[1]);
                                        }),
                                            (d.onerror = () => t(d.error ?? Error("FileReader error"))),
                                            d.readAsDataURL(i);
                                    }),
                                );
                            d(await i.arrayBuffer()),
                                (this._isRecording = !1),
                                e({ trimmedBlob: i, encryptedVideo: c });
                        } catch (l) {
                            (this._isRecording = !1),
                                (this._error = `Recording stop failed: ${l}`),
                                (this._hasError = !0),
                                c(l);
                        }
                    }),
                    i.stop(),
                    (this._isRecording = !1);
            } else e({ trimmedBlob: new Blob([], { type: this.mimeType }), encryptedVideo: "" });
            i?.stream?.getTracks().forEach((l) => l.stop());
        });
    }
    reset() {
        (this._isRecording = !1), (this._error = null), (this._hasError = !1);
    }
    pauseRecording() {
        if (this._isRecording && this.mediaRecorder?.state === "recording")
            try {
                this.mediaRecorder.pause();
            } catch {}
    }
    registerEventListeners() {
        document.addEventListener("visibilitychange", this.pauseRecordingBound);
    }
    removeEventListeners() {
        document.removeEventListener("visibilitychange", this.pauseRecordingBound);
    }
};
function G() {
    return i || (i = Promise.all([d.e("87651"), d.e("52586")]).then(d.bind(d, 795377))), i;
}
function p() {
    G(),
        e ||
            (e = (async () =>
                (await Promise.all([d.e("87651"), d.e("43935")]).then(d.bind(d, 578114))).loadOpenVidu())());
}
var N = class {
        constructor(l, t) {
            (this.recorder = new W()), (this.sessionToken = t), (this.wasmUtil = l);
        }
        async start(l) {
            this.recorder.startRecording(l), this.wasmUtil.osv();
        }
        async stop() {
            if (!this.recorder.isRecording) return { recordingId: null };
            this.wasmUtil.oev();
            let l = await this.recorder.stopRecording(
                10,
                (l) => this.wasmUtil.encryptImage(l),
                (l) => this.wasmUtil.ckvcks(l),
            );
            return this.sessionToken
                ? { recordingId: await (0, n.v)(l.encryptedVideo, this.sessionToken) }
                : { recordingId: null };
        }
        async stopAndGetVideo() {
            if (!this.recorder.isRecording) return { videoBase64: void 0 };
            try {
                return (
                    this.wasmUtil.oev(),
                    {
                        videoBase64:
                            (
                                await this.recorder.stopRecording(
                                    10,
                                    (l) => l,
                                    () => {},
                                )
                            ).encryptedVideo || void 0,
                    }
                );
            } catch {
                return { videoBase64: void 0 };
            }
        }
        cleanup() {
            this.recorder.reset();
        }
    },
    M = class {
        constructor(l) {
            this.config = l;
        }
        async start(l) {
            if (!this.provider) {
                let { OpenViduRecordingProvider: l } = await G();
                this.provider = new l();
            }
            this.session = await (0, n.u)({
                config: { ...this.config, recording: { capability: this.provider } },
                clonedStream: l.clone(),
                existing: this.session,
            });
        }
        async stop() {
            return this.session && ((0, n.d)(this.session), (this.session = void 0)), { recordingId: null };
        }
        async stopAndGetVideo() {
            return this.session && ((0, n.d)(this.session), (this.session = void 0)), { videoBase64: void 0 };
        }
        cleanup() {
            this.session && (0, n.d)(this.session);
        }
    };
function X(l) {
    if (!0 !== l.config.onDeviceFaceResultsSubmissionEnabled) {
        if ("VIDEOLIVENESS" === l.config.deepsightLiveness) return new N(l.wasmUtil, l.sessionToken);
        if (!0 === l.config.enableFaceRecording) return new M(l.config);
    }
}
