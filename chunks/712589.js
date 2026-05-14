a.r(t), a.d(t, { default: () => _ }), a(321073);
var i,
    l,
    s = a(459838),
    o = a(626584),
    n = a(235058),
    d = a(274372),
    r = a(372684),
    c = a(607814),
    h = a(710195),
    M = a(723702),
    u = a(19575),
    f = a(974293),
    p = a(572164),
    L = (((i = {}).MISSING = "missing"), (i.DOWNLOADED = "downloaded"), (i.DOWNLOADING = "downloading"), i),
    m =
        (((l = {}).UNINITIALIZED = "uninitialized"),
        (l.UNSUPPORTED = "unsupported"),
        (l.LOADING = "loading"),
        (l.LOADED = "loaded"),
        (l.FAILED = "failed"),
        l);
let g = [
        ["Speech-Emotion-Classification.onnx", "5e29cab15162f74f42c1afc3d5577497861758c7acd6e4da3d1f70977bd9e1b7"],
        ["melspectrogram.onnx", "ba2b0e0f8b7b875369a2c89cb13360ff53bac436f2895cced9f479fa65eb176f"],
        ["embedding_model.onnx", "70d164290c1d095d1d4ee149bc5e00543250a7316b59f31d056cff7bd3075c1f"],
        ["alexa_v0.1.onnx", "6ff566a01d12670e8d9e3c59da32651db1575d17272a601b7f8a39283dfbae3e"],
        ["klip_that.onnx", "cdf9509309d41518fe8cd99d162994536650e175285d9b4c402a70abcfbcd3a5"],
        ["clip.onnx", "fc51110819f7965997a925b3c89efdf7c2f3fb79cfb78835a5030a80d7560149"],
        ["burr_burr_patta_pim.onnx", "3c1049fd33241f380028fe5c58798adc820e06b9b036ad62bf8dc7a7e55115ca"],
        ["ggml-tiny.en.bin", "921e4cf8686fdd993dcd081a5da5b6c365bfde1162e72b08d75ac75289920b1f"],
    ],
    y = new o.A("MLNativeModuleManager");
class w {
    state = {
        nativeMLModuleState: m.UNINITIALIZED,
        models: {},
        modelState: {},
        catalogLastFetchTime: void 0,
        catalogFetchFailed: !1,
    };
    activeDownloads = new Map();
    mlCatalogRefreshing = !1;
    onMLResult = null;
    onMLModuleLoaded = null;
    constructor() {
        h.A.addChangeListener(() => this.handleClipsV3ExperimentChanged());
    }
    start(e, t) {
        if (((this.onMLResult = e), (this.onMLModuleLoaded = t), y.info("ML signal manager started"), (0, f.qi)())) {
            y.info("clips v3 enabled; skipping v1/v2 ML module setup"),
                (this.state.nativeMLModuleState = m.UNSUPPORTED);
            return;
        }
        (0, p.TD)() &&
            (y.info("Clips enabled on startup, initializing ML module"), this.maybeSetupMLModulePrefetchModels());
    }
    handleClipsV3ExperimentChanged() {
        !(null == this.onMLResult || (0, f.qi)()) &&
            (this.state.nativeMLModuleState === m.UNSUPPORTED && (this.state.nativeMLModuleState = m.UNINITIALIZED),
            (0, p.TD)() && this.maybeSetupMLModulePrefetchModels());
    }
    stop() {
        (this.onMLResult = null),
            (this.onMLModuleLoaded = null),
            this.activeDownloads.clear(),
            y.info("ML signal manager stopped");
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
        return this.state.nativeMLModuleState === m.LOADED;
    }
    isNativeModuleLoading() {
        return this.state.nativeMLModuleState === m.LOADING;
    }
    async maybeSetupMLModulePrefetchModels() {
        if (!(this.isNativeModuleLoaded() || this.isNativeModuleLoading()) && !__OVERLAY__) {
            if (!((0, M.isWindows)() || (0, M.isMac)())) {
                this.state.nativeMLModuleState = m.UNSUPPORTED;
                return;
            }
            try {
                (this.state.nativeMLModuleState = m.LOADING),
                    await this.refreshMLCatalog(),
                    await this.prefetchMLModels(),
                    await this.loadMLNativeModule();
            } catch (e) {
                y.warn(`Failed to load Clips ML module: ${e.message}`), (this.state.nativeMLModuleState = m.FAILED);
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
                        y.warn(`Failed to parse ML result: ${e.message}`);
                        return;
                    }
                    "string" == typeof t.type &&
                        null != t.payload &&
                        null != this.onMLResult &&
                        this.onMLResult({ type: t.type, payload: t.payload });
                }),
                this.onMLModuleLoaded?.(),
                (this.state.nativeMLModuleState = m.LOADED);
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
                y.info("ML native module loaded successfully");
        } catch (e) {
            y.warn(`Failed to load Clips ML module: ${e.message}`), (this.state.nativeMLModuleState = m.FAILED);
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
                    y.info("ML catalog refreshed successfully");
            } catch (e) {
                y.warn(`Failed to refresh Clips ML catalog: ${e.message}`), (this.state.catalogFetchFailed = !0);
            } finally {
                this.mlCatalogRefreshing = !1;
            }
    }
    loadMLCatalog() {
        let e = { version: "1.0.0", models: {} };
        for (let [t, a] of g)
            e.models[t] = { url: `https://cdn.discordapp.com/assets/content/${a}.onnx`, version: "1.0.0" };
        return y.info("Loaded mock ML catalog with models:", Object.keys(e.models)), Promise.resolve(e);
    }
    async scanModelState(e) {
        if (!u.Ay.canCheckMLModelFilesExist()) return;
        let t = Object.keys(e.models).map((e) => ({ id: e, fileName: e }));
        for (let { id: e, exists: a } of await u.Ay.checkMLModelFilesExist(t))
            this.state.modelState[e] = { status: a ? L.DOWNLOADED : L.MISSING };
    }
    async prefetchMLModels() {
        if (__OVERLAY__) return;
        let e = this.state.models,
            t = [];
        for (let [a, i] of Object.entries(e)) {
            let e = this.state.modelState[a];
            e?.status !== L.DOWNLOADED &&
                e?.status !== L.DOWNLOADING &&
                t.push(this.downloadMLModel({ modelId: a, url: i.url, fileName: a }));
        }
        y.info("Waiting for ML model downloads", t), await Promise.all(t), y.info("Finished downloading all ML models");
    }
    downloadMLModel(e) {
        let { url: t, modelId: a, fileName: i } = e,
            l = this.state.modelState[a],
            s = this.activeDownloads.get(a);
        if (null != s) return s;
        if (l?.status === L.DOWNLOADED) return Promise.resolve();
        if (l?.status === L.DOWNLOADING)
            return Promise.reject(Error("ML model is downloading but not in active downloads map"));
        this.state.modelState[a] = { status: L.DOWNLOADING, downloadedBytes: 0 };
        let o = u.Ay.downloadMLModelFile(t, i, (e) => {
            let { downloadedBytes: t, totalBytes: i } = e;
            this.state.modelState[a] = { ...this.state.modelState[a], downloadedBytes: t, totalBytes: i };
        })
            .then((e) => {
                e.fetchedFromNetwork && y.info("Downloaded ML model from network:", a),
                    (this.state.modelState[a] = { status: L.DOWNLOADED, downloadedBytes: void 0 });
            })
            .catch((t) => {
                t?.USER_CANCELED_DOWNLOAD
                    ? y.info("User canceled the download for ML model", e)
                    : y.error("Failed to download ML model", { reason: t, ...e }),
                    (this.state.modelState[a] = { status: L.MISSING });
            })
            .finally(() => {
                this.activeDownloads.delete(a);
            });
        return this.activeDownloads.set(a, o), o;
    }
}
let D = new w(),
    b = new o.A("MLSignalHandler");
class S {
    emitSignal;
    emotionHistory = [];
    yellHistory = [];
    constructor(e) {
        this.emitSignal = e;
    }
    start() {
        b.info("ML signal handler started"),
            D.start(this.handleMLResult, () => {}),
            n.Ay.getMediaEngine().on(s.bg.ClipsMlDetection, this.handleV3MlDetection);
    }
    stop() {
        D.stop(),
            n.Ay.getMediaEngine().off(s.bg.ClipsMlDetection, this.handleV3MlDetection),
            (this.emotionHistory = []),
            (this.yellHistory = []),
            b.info("ML signal handler stopped");
    }
    getState() {
        return { emotionHistory: [...this.emotionHistory], yellHistory: [...this.yellHistory] };
    }
    handleV3MlDetection = (e) => {
        (0, c.$N)(e);
    };
    handleMLResult = (e) => {
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
                b.warn(`Unknown ML result type: ${e.type}`);
        }
    };
    handleYellClassification(e) {
        let { userId: t, percentiles: a, yelling: i, debug: l, timestamp: s } = e;
        window.__CLIPS_DEBUG__?.yell &&
            (this.yellHistory.push({ timestamp: s, userId: t, percentiles: a, debug: l }),
            this.yellHistory.length > 50 && this.yellHistory.shift()),
            i && this.emitSignal({ type: r.Gy.YELLING, userId: t }, s);
    }
    handleWakeWord(e) {
        let { userId: t, probabilities: a, timestamp: i } = e,
            l = Object.entries(a)
                .map((e) => {
                    let [t, a] = e,
                        i = "number" == typeof a ? a : 0,
                        l = Math.round(20 * i),
                        s = "*".repeat(l),
                        o = " ".repeat(20 - l);
                    return `${t}: |${s}${o}| (${i.toFixed(3)})`;
                })
                .join("  ");
        window.__CLIPS_DEBUG__?.wakeWord && b.info(`Wake word: ${t}: ${l}`);
        let s = d.A.getSettings().autoClipPhrases;
        for (let [e, t] of Object.entries(a))
            if (("number" == typeof t ? t : 0) >= 0.5 && s.includes(e)) {
                this.emitSignal({ type: r.Gy.PHRASE, text: e }, i);
                break;
            }
    }
    handleEmotionClassification(e) {
        let { userId: t, emotions: a, timestamp: i } = e;
        this.emotionHistory.push({ timestamp: i, userId: t, emotions: a }),
            this.emotionHistory.length > 10 && this.emotionHistory.shift(),
            window.__CLIPS_DEBUG__?.emotion && b.info(`Emotion classification: ${t}: ${JSON.stringify(a)}`);
    }
    handleWhisperTranscription(e) {
        let { userId: t, transcription: a, timestamp: i } = e;
        window.__CLIPS_DEBUG__?.whisper && b.info(`Whisper transcription: ${t}: ${JSON.stringify(a)}`);
        let l = d.A.getSettings().autoClipPhrases;
        if (0 === l.length) return;
        let s = (e) =>
                e
                    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()@\[\]\?"'<>\\|+]/g, "")
                    .replace(/\s+/g, " ")
                    .trim()
                    .toLowerCase(),
            o = l.map((e) => s(e).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")),
            n = RegExp(`(${o.join("|")})`, "g");
        for (let e of a)
            for (let t of s(e.text).matchAll(n)) {
                let a = t[0],
                    o = l.find((e) => s(e) === a);
                if (null != o) {
                    let t = i + 1e3 * e.t0;
                    if (null != e.words && e.words.length > 0) {
                        let a = s(o).split(" "),
                            l = e.words.map((e) => ({ ...e, cleanText: s(e.text) }));
                        for (let e = 0; e <= l.length - a.length; e++) {
                            let n = l.slice(e, e + a.length);
                            if (n.map((e) => e.cleanText).join(" ") === s(o)) {
                                t = i + 1e3 * n[0].t0;
                                break;
                            }
                        }
                    }
                    this.emitSignal({ type: r.Gy.PHRASE, text: o }, t);
                }
            }
    }
}
let _ = (e) => new S(e);
