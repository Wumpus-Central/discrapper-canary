i.d(t, { n: () => l, t: () => u });
var r = i(209688),
    n = i(401959),
    o = i(351618),
    s = i(781322),
    a = i(196283),
    l = class e {
        static fromImageData(t) {
            let i = document.createElement("canvas");
            (i.width = t.width), (i.height = t.height);
            let r = i.getContext("2d", { willReadFrequently: !0 });
            return r && "putImageData" in r && r.putImageData(t, 0, 0), new e(i);
        }
        constructor(e) {
            (this.base64Image = null),
                (this.blobData = null),
                (this.canvas = document.createElement("canvas")),
                (this.canvas.width = e.width),
                (this.canvas.height = e.height);
            const t = this.canvas.getContext("2d");
            t && t.drawImage(e, 0, 0);
        }
        checkCanvas() {
            return this.canvas && this.canvas.width > 1 && this.canvas.height > 1;
        }
        dispose() {
            this.blobData?.url && (URL.revokeObjectURL(this.blobData.url), (this.blobData = null)),
                (this.base64Image = null);
        }
        release() {
            this.checkCanvas() &&
                ((this.canvas.width = 1),
                (this.canvas.height = 1),
                this.canvas.getContext("2d")?.clearRect(0, 0, 1, 1),
                (this.base64Image = null),
                this.blobData?.url && URL.revokeObjectURL(this.blobData.url),
                (this.blobData = null));
        }
        revokeObjectURL() {
            this.blobData?.url &&
                (URL.revokeObjectURL(this.blobData.url), (this.blobData = { ...this.blobData, url: "" }));
        }
        width() {
            return this.checkCanvas() ? this.canvas.width : null;
        }
        height() {
            return this.checkCanvas() ? this.canvas.height : null;
        }
        setWidth(e) {
            this.checkCanvas() && (this.canvas.width = e);
        }
        setHeight(e) {
            this.checkCanvas() && (this.canvas.height = e);
        }
        clone() {
            if (!this.checkCanvas()) return null;
            let t = new e(this.canvas);
            return t.setBase64Image(this.base64Image), t;
        }
        async deepClone() {
            let e = this.clone();
            return e ? (this.blobData && (await e.setBlobData(this.blobData)), e) : null;
        }
        getContext(e, t) {
            if (!this.checkCanvas()) return null;
            let i = this.canvas.getContext(e, t);
            return i instanceof CanvasRenderingContext2D ? i : null;
        }
        getImageData() {
            if (!this.checkCanvas()) return null;
            let e = this.canvas.getContext("2d", { willReadFrequently: !0 });
            return e ? e.getImageData(0, 0, this.canvas.width, this.canvas.height) : null;
        }
        updateBase64Image(e = 1) {
            this.checkCanvas() && (this.base64Image = this.canvas.toDataURL("image/jpeg", e));
        }
        getBase64Image(e = 1, t = !1) {
            if (!this.checkCanvas()) return null;
            null === this.base64Image && this.updateBase64Image(e);
            let i = this.base64Image;
            if (null === i) return null;
            if (t) return i;
            let r = i.indexOf(",");
            return -1 === r ? i : i.slice(r + 1);
        }
        setBase64Image(e) {
            this.base64Image = e;
        }
        updateBlob(t = 1, i = !1) {
            if (!this.checkCanvas()) return;
            null === this.base64Image && this.updateBase64Image(t);
            let r = this.getBase64Image(t, i);
            r && (this.blobData = e.base64ToBlob(r));
        }
        static base64ToBlob(e) {
            try {
                let t = atob(e),
                    i = [];
                for (let e = 0; e < t.length; e++) i.push(t.charCodeAt(e));
                let r = new Blob([new Uint8Array(i)]);
                return { blob: r, url: URL.createObjectURL(r) };
            } catch (e) {
                console.error("Failed to convert base64 string to Blob:", e);
            }
            return null;
        }
        getBlobData(e = 1, t = !1) {
            return this.checkCanvas() ? (null === this.blobData && this.updateBlob(e, t), this.blobData) : null;
        }
        async setBlobData(e) {
            let t = await e.blob.arrayBuffer();
            this.blobData = { blob: new Blob([t], { type: e.blob.type }), url: e.url };
        }
        getResizedCanvas(t, i) {
            if (!this.checkCanvas()) return null;
            let r = Math.abs(t - window.innerWidth),
                n = new e(document.createElement("canvas")),
                o = this.height();
            if (!o) return null;
            let s = o / i,
                a = window.innerWidth,
                l = window.innerHeight;
            n.setWidth(a), n.setHeight(l);
            let c = n.getContext("2d");
            return c ? (c.drawImage(this.canvas, (s * r) / 2, 0, s * a, s * l, 0, 0, a, l), n) : null;
        }
    };
async function c({ source: e, base64Image: t, token: i }) {
    try {
        return (
            await r.t.post(
                "/omni/log/frame/v2",
                { base64Image: t },
                { query: { source: e }, headers: { "X-Incode-Hardware-Id": i } },
            )
        ).data;
    } catch {
        return;
    }
}
async function d({ wasmUtil: e, source: t, token: i }) {
    let r = { canvas: null, itr: null, skipped: null };
    if ((await e.poc(r), !1 === r.skipped)) {
        if (r.canvas && i) {
            let e = new l(r.canvas).getBase64Image();
            e && (await c({ source: t, base64Image: e, token: i }));
        }
        !0 === r.itr ? ((0, a.t)({ virtualCameraDetected: !0 }), e.setZc("FAIL")) : !1 === r.itr && e.setZc("PASS");
    }
}
function u(e) {
    var t, i, r, a, l;
    let c =
            ((t = e.wasmUtil),
            (i = e.visibility),
            (r = e.browserEnv),
            (a = e.ipLookup),
            {
                async initialize(e, i = !1) {
                    t.setSdkPlatform("WEBAPP"), t.setSdkVersion(e);
                    let o = (0, s.t)(),
                        l = /Android|iPhone|iPad|iPod/i.test(o),
                        c = (0, s.n)(),
                        d = r.generateCanvasFingerprint(),
                        u = i ? "" : await a.getIp(),
                        h = {
                            kind: l ? "mobile" : "desktop",
                            model: "",
                            os: void 0,
                            osVersion: void 0,
                            screenDimensions: r.getScreenDimensions(),
                            numTouchPoints: c.maxTouchPoints,
                            fingerprintHash: d,
                            ip: u,
                            backgroundMode: !1,
                        };
                    t.setDeviceInfo(h);
                    let p = r.getNavigatorPrefixes(),
                        f = {
                            userAgent: o,
                            getUserMediaAvailability: { webkit: p.webkit, moz: p.moz, o: p.o, ms: p.ms },
                            webglFingerprint: r.getWebGLRenderer(),
                            inspectorOpened: !1,
                            isMockedBrowser: (0, n.t)(r),
                        };
                    t.setBrowserInfo(f, !1);
                },
                updateCameraInfo(e) {
                    let i = e.getSettings(),
                        r = e.getCapabilities?.() ?? {},
                        n = e.label ? [e.label] : [],
                        o = {
                            facingMode:
                                "user" === i.facingMode
                                    ? "frontal"
                                    : "environment" === i.facingMode
                                      ? "back"
                                      : i.facingMode || "unknown",
                            settings: i,
                            capabilities: r,
                            labels: n,
                        };
                    t.setCameraInfo(o);
                },
                async checkForVirtualCameraByLabel(e = null) {
                    try {
                        if (!e) {
                            for (let e of await r.enumerateVideoDeviceLabels()) if (t.isVirtualCamera(e)) return !0;
                        }
                        if (e && t.isVirtualCamera(e.label)) return !0;
                        return !1;
                    } catch {
                        return !1;
                    }
                },
                async analyzeFrame(e) {
                    await t.analyzeFrame(e);
                },
                setMotionStatus(e) {
                    t.setMotionStatus(e);
                },
                setBackgroundMode(e) {
                    t.setBackgroundMode(e || i.wasBackgrounded), i.reset();
                },
                estimatePerformance: () => t.estimatePerformance(),
                getMetadata: () => t.getMetadata(),
                getCheck: () => t.getCheck(),
                getPipelineState: () => t.getPipelineState(),
                preparePipelineState() {
                    t.getPipelineState();
                },
            }),
        u =
            ((l = e.motionSensor),
            {
                requestPermission: async () => l.requestPermission(),
                async start() {
                    await l.start();
                },
                stop() {
                    l.stop();
                },
                check: () => l.check(),
                get isRunning() {
                    return l.isRunning;
                },
                get hasPermission() {
                    return l.hasPermission;
                },
            });
    return {
        metadata: c,
        motion: u,
        async initialize(t = !1) {
            await c.initialize(e.sdkVersion, t), c.estimatePerformance();
        },
        requestMotionPermission: async () => u.requestPermission(),
        async startMotionSensors() {
            await u.start();
        },
        stopMotionSensors() {
            u.stop();
        },
        checkVirtualCamera: async (e) => (c.updateCameraInfo(e), c.checkForVirtualCameraByLabel(e)),
        async performVirtualCameraCheck(t, i) {
            await d({ wasmUtil: e.wasmUtil, source: i, token: t });
        },
        async performPrcCheck(t) {
            let i = await (0, o.r)(t.constraints),
                r = (function (e) {
                    if ("u" < typeof document) throw Error("Document not available");
                    let t = document.createElement("video");
                    return (
                        (t.autoplay = !0),
                        (t.playsInline = !0),
                        (t.muted = !0),
                        (t.srcObject = e),
                        (t.style.width = "0px"),
                        (t.style.height = "0px"),
                        (t.style.position = "absolute"),
                        (t.style.top = "0"),
                        (t.style.left = "0"),
                        (t.style.zIndex = "-1"),
                        document.body.appendChild(t),
                        {
                            element: t,
                            dispose: () => {
                                (t.srcObject = null), t.parentElement && t.parentElement.removeChild(t);
                            },
                        }
                    );
                })(i);
            try {
                await e.wasmUtil.prc();
            } finally {
                r.dispose(), (0, o.i)(i);
            }
        },
        async analyzeFrame(e) {
            await c.analyzeFrame(e), c.preparePipelineState();
            let t = u.check();
            c.setMotionStatus(t), c.getCheck(), c.setBackgroundMode(!1);
        },
        getMetadata: () => c.getMetadata(),
        getMotionStatus: () => u.check(),
        getAnalysisStatus: () => c.getCheck(),
        getPipelineState: () => c.getPipelineState(),
        cleanup() {
            u.stop();
        },
    };
}
