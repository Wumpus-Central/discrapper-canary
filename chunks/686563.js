o.d(t, { Z: () => p }), o(388685), o(539854), o(415506), o(457542);
var a = o(710845),
    i = o(131951),
    l = o(358085),
    n = o(998502),
    s = o(435064),
    r = o(341569),
    d = o(868010),
    c = o(323678);
function u(e, t, o) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: o,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = o),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var o = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(o);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(o).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(o, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                u(e, t, o[t]);
            });
    }
    return e;
}
let h = new a.Z("MLNativeModuleManager"),
    p = new (class {
        start(e, t) {
            (this.onMLResult = e),
                (this.onMLModuleLoaded = t),
                h.info("ML signal manager started"),
                (0, r.LI)() &&
                    (h.info("Clips enabled on startup, initializing ML module"),
                    this.maybeSetupMLModulePrefetchModels());
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
            return this.state.nativeMLModuleState === d.C.LOADED;
        }
        isNativeModuleLoading() {
            return this.state.nativeMLModuleState === d.C.LOADING;
        }
        async maybeSetupMLModulePrefetchModels() {
            if (!(this.isNativeModuleLoaded() || this.isNativeModuleLoading()) && !__OVERLAY__) {
                if (!((0, l.isWindows)() || (0, l.isMac)())) {
                    this.state.nativeMLModuleState = d.C.UNSUPPORTED;
                    return;
                }
                try {
                    (this.state.nativeMLModuleState = d.C.LOADING),
                        await this.refreshMLCatalog(),
                        await this.prefetchMLModels(),
                        await this.loadMLNativeModule();
                } catch (e) {
                    h.warn("Failed to load Clips ML module: ".concat(e.message)),
                        (this.state.nativeMLModuleState = d.C.FAILED);
                }
            }
        }
        async loadMLNativeModule() {
            try {
                var e, t, o;
                await n.ZP.ensureModule("discord_ml");
                let a = n.ZP.requireModule("discord_ml");
                await a.setupResources(),
                    await a.setMLResultCallback((e) => {
                        let t;
                        try {
                            t = JSON.parse(e);
                        } catch (e) {
                            h.warn("Failed to parse ML result: ".concat(e.message));
                            return;
                        }
                        "string" == typeof t.type &&
                            null != t.payload &&
                            null != this.onMLResult &&
                            this.onMLResult({
                                type: t.type,
                                payload: t.payload,
                            });
                    }),
                    null == (e = this.onMLModuleLoaded) || e.call(this),
                    (this.state.nativeMLModuleState = d.C.LOADED);
                let l = i.Z.getMediaEngine();
                l.setClipsMLPipelineEnabled(!0);
                let r =
                    null != (o = null == (t = s.Z.getSettings()) ? void 0 : t.mlPipelinesEnabled)
                        ? o
                        : {
                              emotionClassifier: !0,
                              wakeWordDetector: !0,
                              yellDetector: !0,
                              whisperTranscription: !0,
                          };
                l.setClipsMLPipelineTypeEnabled("emotion_classifier", r.emotionClassifier),
                    l.setClipsMLPipelineTypeEnabled("wake_word_detector", r.wakeWordDetector),
                    l.setClipsMLPipelineTypeEnabled("yell_detector", r.yellDetector),
                    l.setClipsMLPipelineTypeEnabled("whisper_transcription", r.whisperTranscription),
                    h.info("ML native module loaded successfully");
            } catch (e) {
                h.warn("Failed to load Clips ML module: ".concat(e.message)),
                    (this.state.nativeMLModuleState = d.C.FAILED);
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
                    h.warn("Failed to refresh Clips ML catalog: ".concat(e.message)),
                        (this.state.catalogFetchFailed = !0);
                } finally {
                    this.mlCatalogRefreshing = !1;
                }
        }
        loadMLCatalog() {
            let e = {
                version: "1.0.0",
                models: {},
            };
            for (let [t, o] of c.lc)
                e.models[t] = {
                    url: "https://cdn.discordapp.com/assets/content/".concat(o, ".onnx"),
                    version: "1.0.0",
                };
            return h.info("Loaded mock ML catalog with models:", Object.keys(e.models)), Promise.resolve(e);
        }
        async scanModelState(e) {
            if (!n.ZP.canCheckMLModelFilesExist()) return;
            let t = Object.keys(e.models).map((e) => ({
                id: e,
                fileName: e,
            }));
            for (let { id: e, exists: o } of await n.ZP.checkMLModelFilesExist(t))
                this.state.modelState[e] = { status: o ? d.l.DOWNLOADED : d.l.MISSING };
        }
        async prefetchMLModels() {
            if (__OVERLAY__) return;
            let e = this.state.models,
                t = [];
            for (let [o, a] of Object.entries(e)) {
                let e = this.state.modelState[o];
                (null == e ? void 0 : e.status) !== d.l.DOWNLOADED &&
                    (null == e ? void 0 : e.status) !== d.l.DOWNLOADING &&
                    t.push(
                        this.downloadMLModel({
                            modelId: o,
                            url: a.url,
                            fileName: o,
                        }),
                    );
            }
            h.info("Waiting for ML model downloads", t),
                await Promise.all(t),
                h.info("Finished downloading all ML models");
        }
        downloadMLModel(e) {
            let { url: t, modelId: o, fileName: a } = e,
                i = this.state.modelState[o],
                l = this.activeDownloads.get(o);
            if (null != l) return l;
            if ((null == i ? void 0 : i.status) === d.l.DOWNLOADED) return Promise.resolve();
            if ((null == i ? void 0 : i.status) === d.l.DOWNLOADING)
                return Promise.reject(Error("ML model is downloading but not in active downloads map"));
            this.state.modelState[o] = {
                status: d.l.DOWNLOADING,
                downloadedBytes: 0,
            };
            let s = n.ZP.downloadMLModelFile(t, a, (e) => {
                var t, a;
                let { downloadedBytes: i, totalBytes: l } = e;
                this.state.modelState[o] =
                    ((t = f({}, this.state.modelState[o])),
                    (a = a =
                        {
                            downloadedBytes: i,
                            totalBytes: l,
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
                        : (function (e, t) {
                              var o = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var a = Object.getOwnPropertySymbols(e);
                                  o.push.apply(o, a);
                              }
                              return o;
                          })(Object(a)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e));
                          }),
                    t);
            })
                .then((e) => {
                    e.fetchedFromNetwork && h.info("Downloaded ML model from network:", o),
                        (this.state.modelState[o] = {
                            status: d.l.DOWNLOADED,
                            downloadedBytes: void 0,
                        });
                })
                .catch((t) => {
                    (null == t ? void 0 : t.USER_CANCELED_DOWNLOAD)
                        ? h.info("User canceled the download for ML model", e)
                        : h.error("Failed to download ML model", f({ reason: t }, e)),
                        (this.state.modelState[o] = { status: d.l.MISSING });
                })
                .finally(() => {
                    this.activeDownloads.delete(o);
                });
            return this.activeDownloads.set(o, s), s;
        }
        constructor() {
            u(this, "state", {
                nativeMLModuleState: d.C.UNINITIALIZED,
                models: {},
                modelState: {},
                catalogLastFetchTime: void 0,
                catalogFetchFailed: !1,
            }),
                u(this, "activeDownloads", new Map()),
                u(this, "mlCatalogRefreshing", !1),
                u(this, "onMLResult", null),
                u(this, "onMLModuleLoaded", null);
        }
    })();
