a.d(t, { A: () => u }), a(321073);
var i = a(626584),
    l = a(430452),
    o = a(723702),
    s = a(837921),
    n = a(274372),
    d = a(572164),
    r = a(846126),
    c = a(464414);
let h = new i.A("MLNativeModuleManager");
class f {
    state = {
        nativeMLModuleState: r.Q.UNINITIALIZED,
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
            h.info("ML signal manager started"),
            (0, d.TD)() &&
                (h.info("Clips enabled on startup, initializing ML module"), this.maybeSetupMLModulePrefetchModels());
    }
    stop() {
        (this.onMLResult = null),
            (this.onMLModuleLoaded = null),
            this.activeDownloads.clear(),
            h.info("ML signal manager stopped");
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
        return this.state.nativeMLModuleState === r.Q.LOADED;
    }
    isNativeModuleLoading() {
        return this.state.nativeMLModuleState === r.Q.LOADING;
    }
    async maybeSetupMLModulePrefetchModels() {
        if (!(this.isNativeModuleLoaded() || this.isNativeModuleLoading()) && !__OVERLAY__) {
            if (!((0, o.isWindows)() || (0, o.isMac)())) {
                this.state.nativeMLModuleState = r.Q.UNSUPPORTED;
                return;
            }
            try {
                (this.state.nativeMLModuleState = r.Q.LOADING),
                    await this.refreshMLCatalog(),
                    await this.prefetchMLModels(),
                    await this.loadMLNativeModule();
            } catch (e) {
                h.warn(`Failed to load Clips ML module: ${e.message}`), (this.state.nativeMLModuleState = r.Q.FAILED);
            }
        }
    }
    async loadMLNativeModule() {
        try {
            await s.Ay.ensureModule("discord_ml");
            let e = s.Ay.requireModule("discord_ml");
            await e.setupResources(),
                await e.setMLResultCallback((e) => {
                    let t;
                    try {
                        t = JSON.parse(e);
                    } catch (e) {
                        h.warn(`Failed to parse ML result: ${e.message}`);
                        return;
                    }
                    "string" == typeof t.type &&
                        null != t.payload &&
                        null != this.onMLResult &&
                        this.onMLResult({ type: t.type, payload: t.payload });
                }),
                this.onMLModuleLoaded?.(),
                (this.state.nativeMLModuleState = r.Q.LOADED);
            let t = l.Ay.getMediaEngine();
            t.setClipsMLPipelineEnabled(!0);
            let a = n.A.getSettings()?.mlPipelinesEnabled ?? {
                emotionClassifier: !0,
                wakeWordDetector: !0,
                yellDetector: !0,
                whisperTranscription: !0,
                laughterDetector: !0,
            };
            t.setClipsMLPipelineTypeEnabled("emotion_classifier", a.emotionClassifier),
                t.setClipsMLPipelineTypeEnabled("wake_word_detector", a.wakeWordDetector),
                t.setClipsMLPipelineTypeEnabled("yell_detector", a.yellDetector),
                t.setClipsMLPipelineTypeEnabled("whisper_transcription", a.whisperTranscription),
                t.setClipsMLPipelineTypeEnabled("laughter_shouting", a.laughterDetector),
                h.info("ML native module loaded successfully");
        } catch (e) {
            h.warn(`Failed to load Clips ML module: ${e.message}`), (this.state.nativeMLModuleState = r.Q.FAILED);
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
                    h.info("ML catalog refreshed successfully");
            } catch (e) {
                h.warn(`Failed to refresh Clips ML catalog: ${e.message}`), (this.state.catalogFetchFailed = !0);
            } finally {
                this.mlCatalogRefreshing = !1;
            }
    }
    loadMLCatalog() {
        let e = { version: "1.0.0", models: {} };
        for (let [t, a] of c.Xg)
            e.models[t] = { url: `https://cdn.discordapp.com/assets/content/${a}.onnx`, version: "1.0.0" };
        return h.info("Loaded mock ML catalog with models:", Object.keys(e.models)), Promise.resolve(e);
    }
    async scanModelState(e) {
        if (!s.Ay.canCheckMLModelFilesExist()) return;
        let t = Object.keys(e.models).map((e) => ({ id: e, fileName: e }));
        for (let { id: e, exists: a } of await s.Ay.checkMLModelFilesExist(t))
            this.state.modelState[e] = { status: a ? r.D.DOWNLOADED : r.D.MISSING };
    }
    async prefetchMLModels() {
        if (__OVERLAY__) return;
        let e = this.state.models,
            t = [];
        for (let [a, i] of Object.entries(e)) {
            let e = this.state.modelState[a];
            e?.status !== r.D.DOWNLOADED &&
                e?.status !== r.D.DOWNLOADING &&
                t.push(this.downloadMLModel({ modelId: a, url: i.url, fileName: a }));
        }
        h.info("Waiting for ML model downloads", t), await Promise.all(t), h.info("Finished downloading all ML models");
    }
    downloadMLModel(e) {
        let { url: t, modelId: a, fileName: i } = e,
            l = this.state.modelState[a],
            o = this.activeDownloads.get(a);
        if (null != o) return o;
        if (l?.status === r.D.DOWNLOADED) return Promise.resolve();
        if (l?.status === r.D.DOWNLOADING)
            return Promise.reject(Error("ML model is downloading but not in active downloads map"));
        this.state.modelState[a] = { status: r.D.DOWNLOADING, downloadedBytes: 0 };
        let n = s.Ay.downloadMLModelFile(t, i, (e) => {
            let { downloadedBytes: t, totalBytes: i } = e;
            this.state.modelState[a] = { ...this.state.modelState[a], downloadedBytes: t, totalBytes: i };
        })
            .then((e) => {
                e.fetchedFromNetwork && h.info("Downloaded ML model from network:", a),
                    (this.state.modelState[a] = { status: r.D.DOWNLOADED, downloadedBytes: void 0 });
            })
            .catch((t) => {
                t?.USER_CANCELED_DOWNLOAD
                    ? h.info("User canceled the download for ML model", e)
                    : h.error("Failed to download ML model", { reason: t, ...e }),
                    (this.state.modelState[a] = { status: r.D.MISSING });
            })
            .finally(() => {
                this.activeDownloads.delete(a);
            });
        return this.activeDownloads.set(a, n), n;
    }
}
let u = new f();
