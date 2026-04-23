a.r(t), a.d(t, { default: () => D }), a(321073);
var i,
    l,
    o = a(205693),
    s = a(626584),
    n = a(969341),
    d = a(274372),
    r = a(372684),
    c = a(399925),
    h = a(723702),
    u = a(19575),
    M = a(572164),
    f = (((i = {}).MISSING = "missing"), (i.DOWNLOADED = "downloaded"), (i.DOWNLOADING = "downloading"), i),
    p =
        (((l = {}).UNINITIALIZED = "uninitialized"),
        (l.UNSUPPORTED = "unsupported"),
        (l.LOADING = "loading"),
        (l.LOADED = "loaded"),
        (l.FAILED = "failed"),
        l);
let L = [
        ["Speech-Emotion-Classification.onnx", "5e29cab15162f74f42c1afc3d5577497861758c7acd6e4da3d1f70977bd9e1b7"],
        ["melspectrogram.onnx", "ba2b0e0f8b7b875369a2c89cb13360ff53bac436f2895cced9f479fa65eb176f"],
        ["embedding_model.onnx", "70d164290c1d095d1d4ee149bc5e00543250a7316b59f31d056cff7bd3075c1f"],
        ["alexa_v0.1.onnx", "6ff566a01d12670e8d9e3c59da32651db1575d17272a601b7f8a39283dfbae3e"],
        ["klip_that.onnx", "cdf9509309d41518fe8cd99d162994536650e175285d9b4c402a70abcfbcd3a5"],
        ["clip.onnx", "fc51110819f7965997a925b3c89efdf7c2f3fb79cfb78835a5030a80d7560149"],
        ["burr_burr_patta_pim.onnx", "3c1049fd33241f380028fe5c58798adc820e06b9b036ad62bf8dc7a7e55115ca"],
        ["ggml-tiny.en.bin", "921e4cf8686fdd993dcd081a5da5b6c365bfde1162e72b08d75ac75289920b1f"],
    ],
    m = new s.A("MLNativeModuleManager");
class g {
    state = {
        nativeMLModuleState: p.UNINITIALIZED,
        models: {},
        modelState: {},
        catalogLastFetchTime: void 0,
        catalogFetchFailed: !1,
    };
    activeDownloads = new Map();
    mlCatalogRefreshing = !1;
    onMLResult = null;
    onMLModuleLoaded = null;
    start(e, t) {
        (this.onMLResult = e),
            (this.onMLModuleLoaded = t),
            m.info("ML signal manager started"),
            (0, M.TD)() &&
                (m.info("Clips enabled on startup, initializing ML module"), this.maybeSetupMLModulePrefetchModels());
    }
    stop() {
        (this.onMLResult = null),
            (this.onMLModuleLoaded = null),
            this.activeDownloads.clear(),
            m.info("ML signal manager stopped");
    }
    getNativeModuleState() {
        return this.state.nativeMLModuleState;
    }
    getModelState(e) {
        return this.state.modelState[e];
    }
    getMLModels() {
        return this.state.models;
    }
    isNativeModuleLoaded() {
        return this.state.nativeMLModuleState === p.LOADED;
    }
    isNativeModuleLoading() {
        return this.state.nativeMLModuleState === p.LOADING;
    }
    async maybeSetupMLModulePrefetchModels() {
        if (!(this.isNativeModuleLoaded() || this.isNativeModuleLoading()) && !__OVERLAY__) {
            if (!((0, h.isWindows)() || (0, h.isMac)())) {
                this.state.nativeMLModuleState = p.UNSUPPORTED;
                return;
            }
            try {
                (this.state.nativeMLModuleState = p.LOADING),
                    await this.refreshMLCatalog(),
                    await this.prefetchMLModels(),
                    await this.loadMLNativeModule();
            } catch (e) {
                m.warn(`Failed to load Clips ML module: ${e.message}`), (this.state.nativeMLModuleState = p.FAILED);
            }
        }
    }
    async loadMLNativeModule() {
        try {
            await u.Ay.ensureModule("discord_ml");
            let e = u.Ay.requireModule("discord_ml");
            await e.setupResources(), await u.Ay.ensureModule("discord_voice");
            let t = u.Ay.requireModule("discord_voice");
            t.setupMLPath?.(),
                await e.setMLResultCallback((e) => {
                    let t;
                    try {
                        t = JSON.parse(e);
                    } catch (e) {
                        m.warn(`Failed to parse ML result: ${e.message}`);
                        return;
                    }
                    "string" == typeof t.type &&
                        null != t.payload &&
                        null != this.onMLResult &&
                        this.onMLResult({ type: t.type, payload: t.payload });
                }),
                this.onMLModuleLoaded?.(),
                (this.state.nativeMLModuleState = p.LOADED);
            let a = n.Ay.getMediaEngine();
            a.setClipsMLPipelineEnabled(!0);
            let i = d.A.getSettings()?.mlPipelinesEnabled ?? {
                emotionClassifier: !0,
                wakeWordDetector: !0,
                yellDetector: !0,
                whisperTranscription: !0,
                laughterDetector: !0,
            };
            a.setClipsMLPipelineTypeEnabled("emotion_classifier", i.emotionClassifier),
                a.setClipsMLPipelineTypeEnabled("wake_word_detector", i.wakeWordDetector),
                a.setClipsMLPipelineTypeEnabled("yell_detector", i.yellDetector),
                a.setClipsMLPipelineTypeEnabled("whisper_transcription", i.whisperTranscription),
                a.setClipsMLPipelineTypeEnabled("laughter_shouting", i.laughterDetector),
                m.info("ML native module loaded successfully");
        } catch (e) {
            m.warn(`Failed to load Clips ML module: ${e.message}`), (this.state.nativeMLModuleState = p.FAILED);
        }
    }
    async refreshMLCatalog() {
        if (!this.mlCatalogRefreshing)
            try {
                this.mlCatalogRefreshing = !0;
                let e = await this.loadMLCatalog();
                null == this.state.catalogLastFetchTime && (await this.scanModelState(e)),
                    (this.state.models = e.models),
                    (this.state.catalogLastFetchTime = new Date()),
                    (this.state.catalogFetchFailed = !1),
                    m.info("ML catalog refreshed successfully");
            } catch (e) {
                m.warn(`Failed to refresh Clips ML catalog: ${e.message}`), (this.state.catalogFetchFailed = !0);
            } finally {
                this.mlCatalogRefreshing = !1;
            }
    }
    loadMLCatalog() {
        let e = { version: "1.0.0", models: {} };
        for (let [t, a] of L)
            e.models[t] = { url: `https://cdn.discordapp.com/assets/content/${a}.onnx`, version: "1.0.0" };
        return m.info("Loaded mock ML catalog with models:", Object.keys(e.models)), Promise.resolve(e);
    }
    async scanModelState(e) {
        if (!u.Ay.canCheckMLModelFilesExist()) return;
        let t = Object.keys(e.models).map((e) => ({ id: e, fileName: e }));
        for (let { id: e, exists: a } of await u.Ay.checkMLModelFilesExist(t))
            this.state.modelState[e] = { status: a ? f.DOWNLOADED : f.MISSING };
    }
    async prefetchMLModels() {
        if (__OVERLAY__) return;
        let e = this.state.models,
            t = [];
        for (let [a, i] of Object.entries(e)) {
            let e = this.state.modelState[a];
            e?.status !== f.DOWNLOADED &&
                e?.status !== f.DOWNLOADING &&
                t.push(this.downloadMLModel({ modelId: a, url: i.url, fileName: a }));
        }
        m.info("Waiting for ML model downloads", t), await Promise.all(t), m.info("Finished downloading all ML models");
    }
    downloadMLModel(e) {
        let { url: t, modelId: a, fileName: i } = e,
            l = this.state.modelState[a],
            o = this.activeDownloads.get(a);
        if (null != o) return o;
        if (l?.status === f.DOWNLOADED) return Promise.resolve();
        if (l?.status === f.DOWNLOADING)
            return Promise.reject(Error("ML model is downloading but not in active downloads map"));
        this.state.modelState[a] = { status: f.DOWNLOADING, downloadedBytes: 0 };
        let s = u.Ay.downloadMLModelFile(t, i, (e) => {
            let { downloadedBytes: t, totalBytes: i } = e;
            this.state.modelState[a] = { ...this.state.modelState[a], downloadedBytes: t, totalBytes: i };
        })
            .then((e) => {
                e.fetchedFromNetwork && m.info("Downloaded ML model from network:", a),
                    (this.state.modelState[a] = { status: f.DOWNLOADED, downloadedBytes: void 0 });
            })
            .catch((t) => {
                t?.USER_CANCELED_DOWNLOAD
                    ? m.info("User canceled the download for ML model", e)
                    : m.error("Failed to download ML model", { reason: t, ...e }),
                    (this.state.modelState[a] = { status: f.MISSING });
            })
            .finally(() => {
                this.activeDownloads.delete(a);
            });
        return this.activeDownloads.set(a, s), s;
    }
}
let y = new g(),
    w = new s.A("MLSignalHandler");
class b {
    emitSignal;
    emotionHistory = [];
    yellHistory = [];
    boundHandleV3MlDetection = null;
    constructor(e) {
        this.emitSignal = e;
    }
    start() {
        w.info("ML signal handler started"),
            y.start(this.handleMLResult.bind(this), () => {}),
            (this.boundHandleV3MlDetection = this.handleV3MlDetection.bind(this)),
            n.Ay.getMediaEngine().on(o.bg.ClipsMlDetection, this.boundHandleV3MlDetection);
    }
    stop() {
        y.stop(),
            null != this.boundHandleV3MlDetection &&
                (n.Ay.getMediaEngine().off(o.bg.ClipsMlDetection, this.boundHandleV3MlDetection),
                (this.boundHandleV3MlDetection = null)),
            (this.emotionHistory = []),
            (this.yellHistory = []),
            w.info("ML signal handler stopped");
    }
    getState() {
        return { emotionHistory: [...this.emotionHistory], yellHistory: [...this.yellHistory] };
    }
    handleV3MlDetection(e) {
        (0, c.$N)(e);
    }
    handleMLResult(e) {
        switch (e.type) {
            case "yell_classification":
                this.handleYellClassification(e.payload);
                break;
            case "wake_word":
                this.handleWakeWord(e.payload);
                break;
            case "emotion_classification":
                this.handleEmotionClassification(e.payload);
                break;
            case "whisper_transcription":
                this.handleWhisperTranscription(e.payload);
                break;
            default:
                w.warn(`Unknown ML result type: ${e.type}`);
        }
    }
    handleYellClassification(e) {
        let { userId: t, percentiles: a, yelling: i, debug: l, timestamp: o } = e;
        window.__CLIPS_DEBUG__?.yell &&
            (this.yellHistory.push({ timestamp: o, userId: t, percentiles: a, debug: l }),
            this.yellHistory.length > 50 && this.yellHistory.shift()),
            i && this.emitSignal({ type: r.Gy.YELLING, userId: t }, o);
    }
    handleWakeWord(e) {
        let { userId: t, probabilities: a, timestamp: i } = e,
            l = Object.entries(a)
                .map((e) => {
                    let [t, a] = e,
                        i = "number" == typeof a ? a : 0,
                        l = Math.round(20 * i),
                        o = "*".repeat(l),
                        s = " ".repeat(20 - l);
                    return `${t}: |${o}${s}| (${i.toFixed(3)})`;
                })
                .join("  ");
        window.__CLIPS_DEBUG__?.wakeWord && w.info(`Wake word: ${t}: ${l}`);
        let o = d.A.getSettings().autoClipPhrases;
        for (let [e, t] of Object.entries(a))
            if (("number" == typeof t ? t : 0) >= 0.5 && o.includes(e)) {
                this.emitSignal({ type: r.Gy.PHRASE, text: e }, i);
                break;
            }
    }
    handleEmotionClassification(e) {
        let { userId: t, emotions: a, timestamp: i } = e;
        this.emotionHistory.push({ timestamp: i, userId: t, emotions: a }),
            this.emotionHistory.length > 10 && this.emotionHistory.shift(),
            window.__CLIPS_DEBUG__?.emotion && w.info(`Emotion classification: ${t}: ${JSON.stringify(a)}`);
    }
    handleWhisperTranscription(e) {
        let { userId: t, transcription: a, timestamp: i } = e;
        window.__CLIPS_DEBUG__?.whisper && w.info(`Whisper transcription: ${t}: ${JSON.stringify(a)}`);
        let l = d.A.getSettings().autoClipPhrases;
        if (0 === l.length) return;
        let o = (e) =>
                e
                    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()@\[\]\?"'<>\\|+]/g, "")
                    .replace(/\s+/g, " ")
                    .trim()
                    .toLowerCase(),
            s = l.map((e) => o(e).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")),
            n = RegExp(`(${s.join("|")})`, "g");
        for (let e of a)
            for (let t of o(e.text).matchAll(n)) {
                let a = t[0],
                    s = l.find((e) => o(e) === a);
                if (null != s) {
                    let t = i + 1e3 * e.t0;
                    if (null != e.words && e.words.length > 0) {
                        let a = o(s).split(" "),
                            l = e.words.map((e) => ({ ...e, cleanText: o(e.text) }));
                        for (let e = 0; e <= l.length - a.length; e++) {
                            let n = l.slice(e, e + a.length);
                            if (n.map((e) => e.cleanText).join(" ") === o(s)) {
                                t = i + 1e3 * n[0].t0;
                                break;
                            }
                        }
                    }
                    this.emitSignal({ type: r.Gy.PHRASE, text: s }, t);
                }
            }
    }
}
let D = (e) => new b(e);
