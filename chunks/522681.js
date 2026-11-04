function i(l) {
    let t = l.lastIndexOf(".wasm");
    if (-1 === t) return l;
    let d = l.slice(t + 5);
    return "" === d || d.startsWith("?") ? `${l.slice(0, t)}.js${d}` : l;
}
var e,
    c,
    a = class {
        constructor(l = 1, t = 3e4) {
            ((this.pending = []),
                (this.available = []),
                (this.processing = new Set()),
                (this.maxId = l - 1),
                (this.acquireTimeoutMs = t));
            for (let t = 0; t < l; t++) this.available.push(t);
        }
        async acquire() {
            if (this.available.length > 0) {
                let l = this.available.shift();
                return (this.processing.add(l), l);
            }
            return new Promise((l, t) => {
                let d = {
                    resolve: (t) => {
                        (clearTimeout(d.timer), this.processing.add(t), l(t));
                    },
                    reject: (l) => {
                        (clearTimeout(d.timer), t(l));
                    },
                    timer: setTimeout(() => {
                        console.error(
                            `SemaphoreProvider: all slots occupied for ${this.acquireTimeoutMs}ms, ${this.pending.length} request(s) waiting`,
                        );
                    }, this.acquireTimeoutMs),
                };
                this.pending.push(d);
            });
        }
        release(l) {
            l < 0 || l > this.maxId
                ? console.error(`SemaphoreProvider: invalid threadId ${l}`)
                : this.processing.has(l)
                  ? (this.processing.delete(l),
                    this.pending.length > 0 ? this.pending.shift().resolve(l) : this.available.unshift(l))
                  : console.error(`SemaphoreProvider: double-release of threadId ${l}`);
        }
        reset() {
            let l = this.pending;
            ((this.pending = []), (this.available = []), (this.processing = new Set()));
            for (let l = 0; l <= this.maxId; l++) this.available.push(l);
            for (let t of l) t.reject(Error("SemaphoreProvider reset: pending acquire cancelled"));
        }
        async withLock(l, ...t) {
            let d = await this.acquire();
            try {
                return await l(d, ...t);
            } finally {
                this.release(d);
            }
        }
    };
"u" > typeof window && void 0 === window.wasmArrayBuffer && (window.wasmArrayBuffer = null);
let s = null,
    n = null;
async function Z(l) {
    let t = await import(l);
    if ("function" != typeof t.Module) throw Error(`WASM glue at ${l} did not export a Module factory`);
    return t.Module;
}
async function b(l, t) {
    return (
        (window.wasmArrayBuffer = await (async function (l) {
            let t = await fetch(l);
            if (!t.ok) throw Error(`Failed to fetch WASM binary at ${l}: ${t.status} ${t.statusText}`);
            return new Uint8Array(await t.arrayBuffer());
        })(t)),
        await l()
    );
}
async function m(l) {
    return (
        n ||
        s ||
        (s = (async () => {
            try {
                let t = !1 !== l.useSimd,
                    d = l.wasmSimdPath ?? l.wasmPath;
                if (t && d !== l.wasmPath)
                    try {
                        let t = await Z(l.glueCodeSimdPath ?? i(d));
                        window.Module = t;
                        let e = { wasmModule: await b(t, d), simdUsed: !0 };
                        return ((n = e), e);
                    } catch (l) {
                        console.warn("[Incode SDK] SIMD WASM load failed, falling back to non-SIMD", l);
                    }
                let e = await Z(l.glueCodePath);
                window.Module = e;
                let c = { wasmModule: await b(e, l.wasmPath), simdUsed: !1 };
                return ((n = c), c);
            } catch (l) {
                throw ((s = null), l);
            }
        })())
    );
}
let o =
        (((e = {})[(e.IdCaptureV1x = 0)] = "IdCaptureV1x"),
        (e[(e.IdCaptureV2x = 1)] = "IdCaptureV2x"),
        (e[(e.IdCaptureV3x = 2)] = "IdCaptureV3x"),
        e),
    u =
        (((c = {})[(c.IdBlurGlarePipeline = 0)] = "IdBlurGlarePipeline"),
        (c[(c.IdBarcodeAndTextQualityPipeline = 1)] = "IdBarcodeAndTextQualityPipeline"),
        (c[(c.IdVideoSelfiePipeline = 2)] = "IdVideoSelfiePipeline"),
        (c[(c.SelfieWithAggregationMetrics = 3)] = "SelfieWithAggregationMetrics"),
        (c[(c.SelfieWithQualityMetrics = 4)] = "SelfieWithQualityMetrics"),
        (c[(c.OnDeviceSelfieWorkflow = 5)] = "OnDeviceSelfieWorkflow"),
        c);
async function h(l, t, d = !0, ...i) {
    let e = async () => {
        for (;;) {
            if (t(...i)) return;
            await new Promise((l) => setTimeout(l, 0));
        }
    };
    d ? await l.withLock(e) : await e();
}
var W = class extends Error {
    constructor(l, t, d) {
        (super(l),
            (this.name = "WasmWebClientError"),
            (this.status = t),
            (this.statusCode = t),
            (t > 0 || void 0 !== d) && (this.response = { status: t, data: d }));
    }
};
let G = null,
    p = null,
    N = new a(4);
async function M(l, t, d, i, e, c, a, s = !1) {
    let n = X(),
        Z = ((l) => {
            if (!l) return;
            let t = {};
            for (let d of Object.keys(l)) {
                let i = l[d];
                null != i && (t[d] = String(i));
            }
            return t;
        })(e);
    return N.withLock(async (e) => {
        a &&
            n.setOnUploadProgress &&
            n.setOnUploadProgress((l) => {
                try {
                    a(l);
                } catch (l) {
                    console.error("WasmWebClient: error in onUploadProgress callback", l);
                }
            });
        try {
            return (
                await h(
                    N,
                    () =>
                        (function (l, t, d, i, e, c, a, s, n) {
                            switch (t) {
                                case "GET":
                                    return l.get(d, i, a, c, s);
                                case "POST":
                                    return l.post(d, i, e ?? {}, c, a, s, n);
                                case "PUT":
                                    return l.put(d, i, e ?? {}, c, a, s, n);
                                case "PATCH":
                                    return l.patch(d, i, e ?? {}, c, a, s, n);
                                case "DELETE":
                                    return l.del(d, i, e ?? {}, c, a, s, n);
                                default:
                                    throw Error(`Unsupported WASM HTTP method: ${t}`);
                            }
                        })(n, l, e, t, d, i, Z, c, s),
                    !1,
                ),
                (function (l, t) {
                    let d = l.getRequestResult(t);
                    if (d.hasError)
                        throw new W(d.errorMessage || "WasmWebClient request failed", d.statusCode, d.result);
                    return { data: d.result, status: d.statusCode };
                })(n, e)
            );
        } finally {
            (n.clearOnUploadProgress?.(e), n.clearOnDownloadProgress?.(e));
        }
    });
}
let r = null;
function X() {
    if (!G) throw Error("WasmWebClient not initialized. Call initializeWasmWebClient() first.");
    return G;
}
var y = class l {
    constructor() {
        ((this.versionsFile = null),
            (this.modelsBuffers = null),
            (this.inputImageBuffer = null),
            (this.wasmModule = null),
            (this.workflowApiUtilities = null),
            (this.utilityApi = null),
            (this.idCaptureWasmApi = null),
            (this.faceProcessingWasmApi = null),
            (this.webApi = null),
            (this.imageWidth_ = null),
            (this.imageHeight_ = null),
            (this.pipelines_ = null),
            (this.isInitialized_ = !1),
            (this.inspectorOpened_ = !1),
            (this.onDeviceMode_ = !1),
            (this.dsEnabled_ = !1),
            (this.wasmCallSemaphore = new a()),
            (this.Module = null));
    }
    async initialize(l, t, d, i, e, c, a) {
        (await this.freeResources(), (this.pipelines_ = a), (this.versionsFile = c));
        let { wasmModule: s, simdUsed: n } = await m({
            glueCodePath: d,
            glueCodeSimdPath: i || void 0,
            wasmPath: l,
            wasmSimdPath: t,
            useSimd: e,
        });
        return (
            (this.wasmModule = s),
            (this.Module = window.Module),
            (this.workflowApiUtilities = new this.wasmModule.WorkflowApiUtilities()),
            (this.utilityApi = new this.wasmModule.UtilityApi()),
            this.utilityApi.setOnDeviceMode(this.onDeviceMode_),
            (this.idCaptureWasmApi = new this.wasmModule.IdCaptureApi()),
            (this.faceProcessingWasmApi = new this.wasmModule.FaceProcessingApi()),
            (this.webApi = new this.wasmModule.WebApi({
                post(l, t, d) {
                    let i = d ?? {},
                        e = r;
                    return e
                        ? e(l, t, i)
                        : M("POST", l, t, i.headers ?? {}, i.params, i.timeout ?? 3e4, void 0, !0 === i.ie);
                },
            })),
            (this.isInitialized_ = !0),
            n
        );
    }
    static getInstance() {
        return (l.instance || (l.instance = new l()), l.instance);
    }
    isInitialized() {
        return (
            null != this.workflowApiUtilities &&
            null != this.utilityApi &&
            null != this.idCaptureWasmApi &&
            null != this.faceProcessingWasmApi &&
            this.isInitialized_
        );
    }
    async allocateImageBuffers(l, t) {
        (this.checkWasmInitialization("Unable to allocate image buffers, cpp API hasn't been initialized"),
            (l &&
                t &&
                l == this.imageWidth_ &&
                t == this.imageHeight_ &&
                this.inputImageBuffer &&
                l * t * 4 === this.inputImageBuffer.length) ||
                ((this.imageWidth_ = l),
                (this.imageHeight_ = t),
                (this.inputImageBuffer = this.workflowApiUtilities.allocateInputImageBuffer(l, t, 4))));
    }
    async handleDetectionCallAndUpdateState(l) {
        (this.checkWasmInitialization("Unable to update pipeline state, cpp API hasn't been initialized"),
            this.workflowApiUtilities.handleDetectionCallAndUpdateState(this.pipelineTypeToWasmEnum(l)));
    }
    ens(l) {
        return (
            this.checkWasmInitialization("Unable to encrypt the image, cpp API hasn't been initialized"),
            this.utilityApi.ens(l)
        );
    }
    isVirtualCamera(l) {
        return (
            this.checkWasmInitialization("Unable to check if the camera is virtual, cpp API hasn't been initialized"),
            !!l && this.utilityApi.isVirtualCamera(l)
        );
    }
    estimatePerformance() {
        return (
            this.checkWasmInitialization("Unable to estimate performance, cpp API hasn't been initialized"),
            this.utilityApi.estimatePerformance()
        );
    }
    async analyzeFrame(l) {
        (this.checkWasmInitialization("Unable to analyze the frame, cpp API hasn't been initialized"),
            await this.allocateImageBuffers(l.width, l.height),
            this.inputImageBuffer.set(l.data),
            this.utilityApi.analyzeFrame());
    }
    async freeResources() {
        ((this.versionsFile = null),
            (this.modelsBuffers = null),
            (this.inputImageBuffer = null),
            (this.imageWidth_ = null),
            (this.imageHeight_ = null),
            (this.pipelines_ = null),
            (window.wasmArrayBuffer = null),
            this.workflowApiUtilities &&
                "function" == typeof this.workflowApiUtilities.delete &&
                (this.workflowApiUtilities.delete(), (this.workflowApiUtilities = null)),
            this.utilityApi &&
                "function" == typeof this.utilityApi.delete &&
                (this.utilityApi.delete(), (this.utilityApi = null)),
            this.idCaptureWasmApi &&
                "function" == typeof this.idCaptureWasmApi.delete &&
                (this.idCaptureWasmApi.delete(), (this.idCaptureWasmApi = null)),
            this.faceProcessingWasmApi &&
                "function" == typeof this.faceProcessingWasmApi.delete &&
                (this.faceProcessingWasmApi.delete(), (this.faceProcessingWasmApi = null)),
            this.webApi && "function" == typeof this.webApi.delete && this.webApi.delete(),
            (this.webApi = null),
            (this.wasmModule = null),
            (this.isInitialized_ = !1));
    }
    resetPipeline(l) {
        (this.checkWasmInitialization("Unable to reset pipeline, cpp API hasn't been initialized"),
            this.workflowApiUtilities.resetWorkflow(this.pipelineTypeToWasmEnum(l)));
    }
    resetAllPipelines() {
        for (let [l, t] of (this.checkWasmInitialization("Unable to reset pipelines, cpp API hasn't been initialized"),
        this.pipelines_))
            this.resetPipeline(l);
    }
    resetOther() {
        (this.checkWasmInitialization("Unable to reset other states, cpp API hasn't been initialized"),
            this.utilityApi.resetOther());
    }
    reset() {
        (this.resetAllPipelines(), this.resetOther());
    }
    async process(l, t) {
        if (
            (this.checkWasmInitialization("Unable to process the image, cpp API hasn't been initialized"),
            null === this.inputImageBuffer)
        )
            throw Error("Unable to process the image, buffers haven't been allocated!");
        switch ((this.inputImageBuffer.set(l.data), t)) {
            case u.IdBlurGlarePipeline:
            case u.IdBarcodeAndTextQualityPipeline:
                return this.idCaptureWasmApi.runIdCaptureWorkflow(this.pipelineTypeToWasmEnum(t));
            case u.IdVideoSelfiePipeline:
                return this.idCaptureWasmApi.runIdVideoSelfieWorkflow();
            case u.SelfieWithAggregationMetrics:
            case u.SelfieWithQualityMetrics:
            case u.OnDeviceSelfieWorkflow:
                return this.faceProcessingWasmApi.runSelfieWorkflow(this.pipelineTypeToWasmEnum(t));
            default:
                throw Error("Unknown pipeline type");
        }
    }
    async runIdCapture(l) {
        if (
            (this.checkWasmInitialization("Unable to run Id Capture, cpp API hasn't been initialized"),
            null === this.inputImageBuffer)
        )
            throw Error("Unable to process the image, buffers haven't been allocated!");
        return (this.inputImageBuffer.set(l.data), this.idCaptureWasmApi.runIdCapture());
    }
    async runSelfieCapture(l) {
        if (
            (this.checkWasmInitialization("Unable to run Selfie Capture, cpp API hasn't been initialized"),
            null === this.inputImageBuffer)
        )
            throw Error("Unable to process the image, buffers haven't been allocated!");
        return (this.inputImageBuffer.set(l.data), this.faceProcessingWasmApi.runSelfieCapture());
    }
    async setFacePositionConstraints(l, t, d, i, e) {
        (this.checkWasmInitialization("Unable to set face position constraints, cpp API hasn't been initialized"),
            this.faceProcessingWasmApi.setFacePositionConstraints(this.pipelineTypeToWasmEnum(l), t, d, i, e));
    }
    async setFaceDetectionThresholds(l, t, d, i, e, c, a, s, n, Z, b) {
        (this.checkWasmInitialization("Unable to set face detection thresholds, cpp API hasn't been initialized"),
            this.faceProcessingWasmApi.setFaceProcessingThresholds(
                this.pipelineTypeToWasmEnum(l),
                t,
                d,
                i,
                e,
                c,
                a,
                s,
                n,
                Z,
                b,
            ));
    }
    async setFaceAttributesThresholds(l, t, d, i, e) {
        (this.checkWasmInitialization("Unable to set face attributes thresholds, cpp API hasn't been initialized"),
            this.faceProcessingWasmApi.setFaceAttributesThresholds(this.pipelineTypeToWasmEnum(l), t, d, i, e));
    }
    async setFaceChecksEnabled(l, t, d, i, e, c) {
        (this.checkWasmInitialization("Unable to set face checks enabled flags, cpp API hasn't been initialized"),
            this.faceProcessingWasmApi.setFaceChecksEnabled(this.pipelineTypeToWasmEnum(l), t, d, i, e, c));
    }
    async setFaceDetectionMode(l, t) {
        (this.checkWasmInitialization("Unable to set face detection mode, cpp API hasn't been initialized"),
            this.faceProcessingWasmApi.setFaceProcessingMode(this.pipelineTypeToWasmEnum(l), t));
    }
    async setFaceDetectionCallbacks(l, t, d, i, e, c, a, s, n, Z, b, m, o, u, h, W, G, p) {
        (this.checkWasmInitialization("Unable to set face detection callbacks, cpp API hasn't been initialized"),
            this.faceProcessingWasmApi.setFaceProcessingCallbacks(
                this.pipelineTypeToWasmEnum(l),
                t,
                d,
                i,
                e,
                c,
                a,
                s,
                n,
                Z,
                b,
                m,
                o,
                u,
                h,
                W,
                G,
                p,
            ));
    }
    async setIdCaptureThresholds(l, t, d, i, e, c, a, s, n, Z) {
        (this.checkWasmInitialization("Unable to set thresholds, cpp API hasn't been initialized"),
            this.idCaptureWasmApi.setIdCaptureThresholds(this.pipelineTypeToWasmEnum(l), t, d, i, e, c, a, s, n, Z));
    }
    async setIdCaptureCallbacks(l, t, d, i, e, c, a, s, n, Z, b, m, o, u) {
        (this.checkWasmInitialization("Unable to set callbacks, cpp API hasn't been initialized"),
            this.idCaptureWasmApi.setIdCaptureCallbacks(
                this.pipelineTypeToWasmEnum(l),
                t,
                d,
                i,
                e,
                c,
                a,
                s,
                n,
                Z,
                b,
                m,
                o,
                u,
            ));
    }
    async setIdCaptureGeometryParams(l, t, d, i, e, c, a, s, n, Z, b, m, o) {
        (this.checkWasmInitialization("Unable to set geometry params, cpp API hasn't been initialized"),
            this.idCaptureWasmApi.setIdCaptureGeometryParams(
                this.pipelineTypeToWasmEnum(l),
                t,
                d,
                i,
                e,
                c,
                a,
                s,
                n,
                Z,
                b,
                m,
                o,
            ));
    }
    async setIdCaptureConfigParams(l, t, d, i, e, c, a, s, n) {
        (this.checkWasmInitialization("Unable to set config params, cpp API hasn't been initialized"),
            this.idCaptureWasmApi.setIdCaptureConfigParams(this.pipelineTypeToWasmEnum(l), t, d, i, e, c, s, n));
    }
    setIdCaptureModelType(l, t) {
        (this.checkWasmInitialization("Unable to set model type, cpp API hasn't been initialized"),
            this.idCaptureWasmApi.setIdCaptureModelType(
                this.pipelineTypeToWasmEnum(l),
                this.IdCaptureModelTypeToWasmEnum(t),
            ));
    }
    IdPerspectiveTransform(l, t) {
        return (
            this.checkWasmInitialization("Unable to perform perspective transform, cpp API hasn't been initialized"),
            this.idCaptureWasmApi.IdPerspectiveTransform(l, t)
        );
    }
    async getVersions() {
        return JSON.parse(await (await fetch(this.versionsFile)).text());
    }
    async loadModels() {
        this.checkWasmInitialization("Unable load the models, cpp API hasn't been initialized");
        let l = new this.wasmModule.WorkflowTypeToIntMap(),
            t = new Map(),
            d = new Map();
        for (let [i, e] of this.pipelines_) {
            let c = this.pipelineTypeToWasmEnum(i),
                a = [],
                s = new this.wasmModule.VectorInt();
            for (let l of e) {
                if (!d.has(l)) {
                    let t = await fetch(l)
                        .then((l) => l.arrayBuffer())
                        .then((l) => new Uint8Array(l));
                    d.set(l, t);
                }
                let t = d.get(l);
                (s.push_back(t.byteLength), a.push(t));
            }
            (l.set(c, s), t.set(c, a));
        }
        for (let [d, i] of ((this.modelsBuffers = this.workflowApiUtilities.allocateModelsBuffers(l)), t)) {
            let l = this.modelsBuffers?.get(d);
            for (let t = 0; t < l.size(); t++) {
                let d = l?.get(t);
                if (d) d.set(i[t]);
                else throw Error("Unable to get model buffer from shared memory!");
            }
        }
    }
    async initializePipelines() {
        (this.checkWasmInitialization("Unable to initialize pipelines, cpp API hasn't been initialized"),
            this.modelsBuffers || (await this.loadModels()),
            this.workflowApiUtilities.initializeWorkflows());
    }
    async setProductionMode(l) {
        (this.checkWasmInitialization("Unable to set production mode, cpp API hasn't been initialized"),
            this.utilityApi.setProductionMode(l));
    }
    getPipelineState() {
        return (
            this.checkWasmInitialization("Unable to get pipeline state, cpp API hasn't been initialized"),
            this.workflowApiUtilities.getWorkflowState()
        );
    }
    getCurrentPipeline() {
        return (
            this.checkWasmInitialization("Unable to get current pipeline, cpp API hasn't been initialized"),
            this.pipelineTypeFromWasmEnum(this.workflowApiUtilities.getCurrentWorkflow())
        );
    }
    setSdkVersion(l) {
        (this.checkWasmInitialization("Unable to set sdk version, cpp API hasn't been initialized"),
            this.utilityApi.setSdkVersion(l));
    }
    setSdkPlatform(l) {
        (this.checkWasmInitialization("Unable to set device type, cpp API hasn't been initialized"),
            this.utilityApi.setSdkPlatform(l));
    }
    setDeviceInfo(l, t = !0) {
        (this.checkWasmInitialization("Unable to set device info, cpp API hasn't been initialized"),
            this.utilityApi.setDeviceInfo(l, t));
    }
    setBrowserInfo(l, t = !0) {
        (this.checkWasmInitialization("Unable to set browser info, cpp API hasn't been initialized"),
            this.utilityApi.setBrowserInfo(l, t));
    }
    setCameraInfo(l, t = !0) {
        (this.checkWasmInitialization("Unable to set camera info, cpp API hasn't been initialized"),
            this.utilityApi.setCameraInfo(l, t));
    }
    setZc(l) {
        (this.checkWasmInitialization("Unable to set zc, cpp API hasn't been initialized"), this.utilityApi.setZc(l));
    }
    setMotionStatus(l) {
        (this.checkWasmInitialization("Unable to set motion status, cpp API hasn't been initialized"),
            this.utilityApi.setMotionStatus(l));
    }
    setMetadataField(l, t) {
        (this.checkWasmInitialization("Unable to set metadata field, cpp API hasn't been initialized"),
            this.utilityApi.setMetadataField(l, t));
    }
    setInspectorOpened(l) {
        this.inspectorOpened_ = l;
    }
    getInspectorOpened() {
        return this.inspectorOpened_;
    }
    setBackgroundMode(l) {
        (this.checkWasmInitialization("Unable to set background mode, cpp API hasn't been initialized"),
            this.utilityApi.setBackgroundMode(l));
    }
    setOnDeviceMode(l) {
        ((this.onDeviceMode_ = l), null != this.utilityApi && this.utilityApi.setOnDeviceMode(l));
    }
    setDsEnabled(l) {
        this.dsEnabled_ = l;
    }
    getCheck() {
        return (
            this.checkWasmInitialization("Unable to get check, cpp API hasn't been initialized"),
            this.utilityApi.getCheck()
        );
    }
    getMetadata() {
        return (
            this.checkWasmInitialization("Unable to get metadata, cpp API hasn't been initialized"),
            this.utilityApi.setInspectorOpened(this.inspectorOpened_),
            this.utilityApi.getMetadata()
        );
    }
    async prc() {
        (this.checkWasmInitialization("Unable to prc, cpp API hasn't been initialized"),
            await h(this.wasmCallSemaphore, () => this.utilityApi.prc(this.dsEnabled_, !1), !0));
    }
    async poc(l) {
        (this.checkWasmInitialization("Unable to poc, cpp API hasn't been initialized"),
            await h(this.wasmCallSemaphore, () => this.utilityApi.poc(this.dsEnabled_, l), !0));
    }
    async rsp() {
        (this.checkWasmInitialization("Unable to rsp, cpp API hasn't been initialized"),
            await h(this.wasmCallSemaphore, () => this.utilityApi.rsp(this.dsEnabled_), !0));
    }
    ssl() {
        (this.checkWasmInitialization("Unable to ssl, cpp API hasn't been initialized"),
            this.utilityApi.ssl(this.dsEnabled_));
    }
    stl() {
        (this.checkWasmInitialization("Unable to stl, cpp API hasn't been initialized"), this.utilityApi.stl());
    }
    osv() {
        (this.checkWasmInitialization("Unable to set sensor beginning timestamp, cpp API hasn't been initialized"),
            this.utilityApi.osv());
    }
    oev() {
        (this.checkWasmInitialization("Unable to set sensor ending timestamp, cpp API hasn't been initialized"),
            this.utilityApi.oev());
    }
    ckvcks(l) {
        (this.checkWasmInitialization("Unable to ckvcks, cpp API hasn't been initialized"), this.utilityApi.ckvcks(l));
    }
    processPhoto(l) {
        (this.checkWasmInitialization("Unable to process photo, cpp API hasn't been initialized"),
            this.faceProcessingWasmApi.processPhoto(l));
    }
    postFaceResults(l) {
        return (
            this.checkWasmInitialization("Unable to post face results, cpp API hasn't been initialized"),
            this.webApi.postFaceResults(l ?? {})
        );
    }
    pipelineTypeToWasmEnum(l) {
        switch (l) {
            case u.IdBlurGlarePipeline:
                return this.wasmModule.WorkflowType.IdBlurGlareWorkflow;
            case u.IdBarcodeAndTextQualityPipeline:
                return this.wasmModule.WorkflowType.IdBarcodeAndTextQualityWorkflow;
            case u.IdVideoSelfiePipeline:
                return this.wasmModule.WorkflowType.IdVideoSelfieWorkflow;
            case u.SelfieWithAggregationMetrics:
                return this.wasmModule.WorkflowType.SelfieWithAggregationMetrics;
            case u.SelfieWithQualityMetrics:
                return this.wasmModule.WorkflowType.SelfieWithQualityMetrics;
            case u.OnDeviceSelfieWorkflow:
                return this.wasmModule.WorkflowType.OnDeviceSelfieWorkflow;
            default:
                throw Error("Unknown pipeline type");
        }
    }
    pipelineTypeFromWasmEnum(l) {
        switch (l) {
            case this.wasmModule.WorkflowType.IdBlurGlareWorkflow:
                return u.IdBlurGlarePipeline;
            case this.wasmModule.WorkflowType.IdBarcodeAndTextQualityWorkflow:
                return u.IdBarcodeAndTextQualityPipeline;
            case this.wasmModule.WorkflowType.IdVideoSelfieWorkflow:
                return u.IdVideoSelfiePipeline;
            case this.wasmModule.WorkflowType.SelfieWithAggregationMetrics:
                return u.SelfieWithAggregationMetrics;
            case this.wasmModule.WorkflowType.SelfieWithQualityMetrics:
                return u.SelfieWithQualityMetrics;
            case this.wasmModule.WorkflowType.OnDeviceSelfieWorkflow:
                return u.OnDeviceSelfieWorkflow;
            default:
                throw Error("Unknown pipeline type");
        }
    }
    IdCaptureModelTypeToWasmEnum(l) {
        switch (l) {
            case o.IdCaptureV1x:
                return this.wasmModule.IdCaptureModelType.IdCaptureV1x;
            case o.IdCaptureV2x:
                return this.wasmModule.IdCaptureModelType.IdCaptureV2x;
            case o.IdCaptureV3x:
                return this.wasmModule.IdCaptureModelType.IdCaptureV3x;
            default:
                throw Error("Unknown Id Capture model type");
        }
    }
    IdCaptureModelTypeFromWasmEnum(l) {
        switch (l) {
            case this.wasmModule.IdCaptureModelType.IdCaptureV1x:
                return o.IdCaptureV1x;
            case this.wasmModule.IdCaptureModelType.IdCaptureV2x:
                return o.IdCaptureV2x;
            case this.wasmModule.IdCaptureModelType.IdCaptureV3x:
                return o.IdCaptureV3x;
            default:
                throw Error("Unknown Id Capture model type");
        }
    }
    checkWasmInitialization(l) {
        if (!this.isInitialized()) throw Error(l);
    }
}.getInstance();
let Y = ["selfie", "idCapture"],
    T = {
        selfie: [
            "selfie_bf_angles_192x192_opset9_fp16.ortmodelv2",
            "face_attributes_v1_3_fp16.ortmodelv2",
            "mls_regressor_4773007c657b4f05a460321456740d0f_fp16.ortmodelv2",
            "face_occlusion_v0_2_fp16.ortmodelv2",
        ],
        onDeviceSelfie: [
            "selfie_bf_angles_192x192_opset9_fp16.ortmodelv2",
            "face_attributes_v1_3_fp16.ortmodelv2",
            "mls_regressor_4773007c657b4f05a460321456740d0f_fp16.ortmodelv2",
            "face_occlusion_v0_2_fp16.ortmodelv2",
            "ondevice_physical_liveness_v2_1_fp16.ortmodelv2",
            "age_estimation_v2_2_2_fp16.ortmodelv2",
        ],
        idCapture: ["id_capture_2_01_fp16.ortmodelv2", "id_fiqa_19a81a0b9bf6492eb03b4667f6db4c85_fp16.ortmodelv2"],
        videoSelfie: [
            "selfie_bf_angles_192x192_opset9_fp16.ortmodelv2",
            "face_attributes_v1_3_fp16.ortmodelv2",
            "mls_regressor_4773007c657b4f05a460321456740d0f_fp16.ortmodelv2",
            "face_occlusion_v0_2_fp16.ortmodelv2",
        ],
        videoSelfieId: ["id_capture_2_01_fp16.ortmodelv2"],
    },
    V = "idle",
    L = null,
    I = null,
    z = [],
    w = null,
    R = [];
function S(l) {
    let t = l.lastIndexOf("/");
    return -1 === t ? "models" : `${l.substring(0, t)}/models`;
}
function C(l, t, d) {
    let i = new Map();
    for (let e of l) {
        let l = (function (l) {
            switch (l) {
                case "selfie":
                    return u.SelfieWithQualityMetrics;
                case "onDeviceSelfie":
                    return u.OnDeviceSelfieWorkflow;
                case "idCapture":
                    return u.IdBlurGlarePipeline;
                case "videoSelfie":
                    return u.SelfieWithAggregationMetrics;
                case "videoSelfieId":
                    return u.IdVideoSelfiePipeline;
                default:
                    throw Error(`Unknown pipeline: ${l}`);
            }
        })(e);
        if (!i.has(l)) {
            let c = (d?.[e] ?? T[e]).map((l) => `${t}/${l}`);
            i.set(l, c);
        }
    }
    return i;
}
async function x(l) {
    let t = l.pipelines ?? [...Y],
        d = l.modelsBasePath ?? S(l.wasmPath);
    if ("loading" === V && L) {
        let d = L;
        return 0 === t.filter((l) => !R.includes(l)).length ? d : d.then(() => x(l));
    }
    if ("ready" === V) {
        if (0 === t.filter((l) => !z.includes(l)).length) return;
        if (!w) throw Error("Cannot add pipelines: original warmup config not available");
        if (
            w.wasmPath !== l.wasmPath ||
            w.glueCodePath !== l.glueCodePath ||
            (w.wasmSimdPath ?? w.wasmPath) !== (l.wasmSimdPath ?? l.wasmPath) ||
            (w.glueCodeSimdPath ?? "") !== (l.glueCodeSimdPath ?? "") ||
            (w.useSimd ?? !0) !== (l.useSimd ?? !0)
        )
            throw Error(
                "Cannot add pipelines: WASM config mismatch. Use same wasmPath, glueCodePath, and useSimd settings.",
            );
        let d = [...new Set([...z, ...t])];
        return (
            (V = "loading"),
            (R = d),
            (I = null),
            (L = (async () => {
                try {
                    let l = C(d, w.modelsBasePath ?? S(w.wasmPath), w.pipelineModels);
                    (await y.initialize(
                        w.wasmPath,
                        w.wasmSimdPath ?? w.wasmPath,
                        w.glueCodePath,
                        w.glueCodeSimdPath ?? "",
                        w.useSimd ?? !0,
                        "",
                        l,
                    ),
                        await y.loadModels(),
                        await y.initializePipelines(),
                        (V = "ready"),
                        (z = d),
                        (w = { ...w, pipelines: d }),
                        (L = null));
                } catch (l) {
                    throw ((V = "error"), (I = l instanceof Error ? l : Error(String(l))), (L = null), (R = []), I);
                }
            })())
        );
    }
    return (
        (V = "loading"),
        (R = [...t]),
        (I = null),
        (L = (async () => {
            try {
                let i = C(t, d, l.pipelineModels);
                (void 0 !== l.onDeviceMode && y.setOnDeviceMode(l.onDeviceMode),
                    await y.initialize(
                        l.wasmPath,
                        l.wasmSimdPath ?? l.wasmPath,
                        l.glueCodePath,
                        l.glueCodeSimdPath ?? "",
                        l.useSimd ?? !0,
                        "",
                        i,
                    ),
                    await y.loadModels(),
                    await y.initializePipelines(),
                    (V = "ready"),
                    (z = [...t]),
                    (w = { ...l, pipelines: t }),
                    (L = null));
            } catch (l) {
                throw ((V = "error"), (I = l instanceof Error ? l : Error(String(l))), (L = null), (R = []), I);
            }
        })())
    );
}
var g = class {
        constructor(l) {
            ((this._isInitialized = !1), (this.pipelineType = l));
        }
        get initialized() {
            return this._isInitialized;
        }
        getPipelineType() {
            if (void 0 === this.pipelineType) throw Error(`${this.constructor.name} has no pipeline type configured.`);
            return this.pipelineType;
        }
        async initializeBase(l, t) {
            if (this._isInitialized) return;
            let d = { isReady: "ready" === V, isLoading: "loading" === V, error: I ?? void 0, loadedPipelines: [...z] };
            if (d.isLoading || "ready" === V || d.error)
                await ("ready" === V
                    ? Promise.resolve()
                    : "loading" === V && L
                      ? L
                      : "error" === V
                        ? Promise.reject(I ?? Error("WASM initialization failed"))
                        : Promise.reject(Error("WASM warmup was not started. Call warmupWasm() first.")));
            else {
                if (!l.wasmPath || !l.glueCodePath)
                    throw Error("WASM path and glue code path are required. Call warmupWasm() first.");
                await x({
                    wasmPath: l.wasmPath,
                    wasmSimdPath: l.wasmSimdPath,
                    glueCodePath: l.glueCodePath,
                    glueCodeSimdPath: l.glueCodeSimdPath,
                    useSimd: l.useSimd,
                    modelsBasePath: l.modelsBasePath,
                    pipelines: [t],
                });
            }
            this._isInitialized = !0;
        }
        ensureInitialized() {
            if (!this._isInitialized) throw Error(`${this.constructor.name} not initialized. Call initialize() first.`);
        }
        async processFrameWasm(l) {
            this.ensureInitialized();
            let t = this.getPipelineType();
            return (
                await y.allocateImageBuffers(l.width, l.height),
                await y.handleDetectionCallAndUpdateState(t),
                await y.process(l, t)
            );
        }
        reset() {
            this._isInitialized && void 0 !== this.pipelineType && y.resetPipeline(this.pipelineType);
        }
        async dispose() {
            (this.reset(), (this._isInitialized = !1));
        }
    },
    D = class l extends g {
        static async getInstance() {
            return l.instance
                ? l.instance
                : (l.initPromise ||
                      (l.initPromise = (async () => {
                          let t = new l();
                          return (await t.initializeBase({}, "selfie"), (l.instance = t), t);
                      })()),
                  l.initPromise);
        }
        static resetInstance() {
            ((l.instance = void 0), (l.initPromise = void 0));
        }
        constructor() {
            super(void 0);
        }
        async initialize(l) {
            if (this.initialized) return;
            let t = l.pipelines?.[0] ?? "selfie";
            await this.initializeBase(l, t);
        }
        async processFrame(l) {
            throw Error("WasmUtilProvider does not support frame processing. Use encryptImage() instead.");
        }
        encryptImage(l) {
            return (this.ensureInitialized(), y.ens(l));
        }
        setSdkVersion(l) {
            (this.ensureInitialized(), y.setSdkVersion(l));
        }
        setSdkPlatform(l) {
            (this.ensureInitialized(), y.setSdkPlatform(l));
        }
        setDeviceInfo(l, t = !0) {
            (this.ensureInitialized(), y.setDeviceInfo(l, t));
        }
        setBrowserInfo(l, t = !0) {
            (this.ensureInitialized(), y.setBrowserInfo(l, t));
        }
        setCameraInfo(l, t = !0) {
            (this.ensureInitialized(), y.setCameraInfo(l, t));
        }
        setMotionStatus(l) {
            (this.ensureInitialized(), y.setMotionStatus(l));
        }
        setBackgroundMode(l) {
            (this.ensureInitialized(), y.setBackgroundMode(l));
        }
        setOnDeviceMode(l) {
            (this.ensureInitialized(), y.setOnDeviceMode(l));
        }
        setZc(l) {
            (this.ensureInitialized(), y.setZc(l));
        }
        setInspectorOpened(l) {
            (this.ensureInitialized(), y.setInspectorOpened(l));
        }
        getInspectorOpened() {
            return y.getInspectorOpened();
        }
        async setProductionMode(l) {
            (this.ensureInitialized(), await y.setProductionMode(l));
        }
        getMetadata() {
            return (this.ensureInitialized(), y.getMetadata());
        }
        async analyzeFrame(l) {
            (this.ensureInitialized(), await y.analyzeFrame(l));
        }
        getCheck() {
            return (this.ensureInitialized(), y.getCheck());
        }
        getPipelineState() {
            return (this.ensureInitialized(), y.getPipelineState());
        }
        estimatePerformance() {
            return (this.ensureInitialized(), y.estimatePerformance());
        }
        isVirtualCamera(l) {
            return (this.ensureInitialized(), y.isVirtualCamera(l));
        }
        async prc() {
            (this.ensureInitialized(), await y.prc());
        }
        async poc(l) {
            (this.ensureInitialized(), await y.poc(l));
        }
        async rsp() {
            (this.ensureInitialized(), await y.rsp());
        }
        ssl() {
            (this.ensureInitialized(), y.ssl());
        }
        stl() {
            (this.ensureInitialized(), y.stl());
        }
        osv() {
            (this.ensureInitialized(), y.osv());
        }
        oev() {
            (this.ensureInitialized(), y.oev());
        }
        ckvcks(l) {
            (this.ensureInitialized(), y.ckvcks(l));
        }
        async getVersions() {
            return (this.ensureInitialized(), y.getVersions());
        }
    };
d.d(
    t,
    {},
    {
        a: y,
        c: async function (l, t, d, i, e) {
            if (!G)
                return (
                    p ||
                    (p = (async () => {
                        try {
                            let { wasmModule: c } = await m({
                                wasmPath: l,
                                wasmSimdPath: t,
                                glueCodePath: d,
                                glueCodeSimdPath: i || void 0,
                                useSimd: e,
                            });
                            if ("function" != typeof c.WebClient)
                                throw Error(
                                    "WASM module does not expose a WebClient class. Update webLib.wasm to a build that includes WebClient.",
                                );
                            G = new c.WebClient();
                        } catch (l) {
                            throw ((p = null), l);
                        }
                    })())
                );
        },
        d: u,
        f: o,
        i: x,
        l: function (l) {
            r = l;
        },
        n: g,
        o: W,
        p: i,
        r: function (l) {
            y.setOnDeviceMode(l);
        },
        s: M,
        t: D,
        u: async function (l, t, d, i, e) {
            let c = X();
            (c.resetSessionState?.(), c.setDefaultHeaders?.(i), await h(N, () => c.createApi(l, t, e, d), !1));
            let a = c.getRequestResult(-1);
            if (a.hasError) throw new W(a.errorMessage || "WebClient handshake failed", a.statusCode, a.result);
        },
    },
);
