a.d(t, { Z: () => h }), a(388685), a(539854), a(415506), a(457542);
var o = a(710845),
    i = a(131951),
    l = a(358085),
    n = a(998502),
    s = a(435064),
    r = a(868010),
    d = a(323678);
function c(e, t, a) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: a,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = a),
        e
    );
}
function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {},
            o = Object.keys(a);
        "function" == typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
                Object.getOwnPropertySymbols(a).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(a, e).enumerable;
                }),
            )),
            o.forEach(function (t) {
                c(e, t, a[t]);
            });
    }
    return e;
}
let f = new o.Z("MLNativeModuleManager"),
    h = new (class {
        start(e, t) {
            (this.onMLResult = e),
                (this.onMLModuleLoaded = t),
                f.info("ML signal manager started"),
                s.Z.getSettings().clipsEnabled &&
                    (f.info("Clips enabled on startup, initializing ML module"),
                    this.maybeSetupMLModulePrefetchModels());
        }
        stop() {
            (this.onMLResult = null),
                (this.onMLModuleLoaded = null),
                this.activeDownloads.clear(),
                f.info("ML signal manager stopped");
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
            return this.state.nativeMLModuleState === r.C.LOADED;
        }
        isNativeModuleLoading() {
            return this.state.nativeMLModuleState === r.C.LOADING;
        }
        async maybeSetupMLModulePrefetchModels() {
            if (!(this.isNativeModuleLoaded() || this.isNativeModuleLoading()) && !__OVERLAY__) {
                if (!((0, l.isWindows)() || (0, l.isMac)())) {
                    this.state.nativeMLModuleState = r.C.UNSUPPORTED;
                    return;
                }
                try {
                    (this.state.nativeMLModuleState = r.C.LOADING),
                        await this.refreshMLCatalog(),
                        await this.prefetchMLModels(),
                        await this.loadMLNativeModule();
                } catch (e) {
                    f.warn("Failed to load Clips ML module: ".concat(e.message)),
                        (this.state.nativeMLModuleState = r.C.FAILED);
                }
            }
        }
        async loadMLNativeModule() {
            try {
                var e, t, a;
                await n.ZP.ensureModule("discord_ml");
                let o = n.ZP.requireModule("discord_ml");
                await o.setupResources(),
                    await o.setMLResultCallback((e) => {
                        let t;
                        try {
                            t = JSON.parse(e);
                        } catch (e) {
                            f.warn("Failed to parse ML result: ".concat(e.message));
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
                    (this.state.nativeMLModuleState = r.C.LOADED);
                let l = i.Z.getMediaEngine();
                l.setClipsMLPipelineEnabled(!0);
                let d =
                    null != (a = null == (t = s.Z.getSettings()) ? void 0 : t.mlPipelinesEnabled)
                        ? a
                        : {
                              emotionClassifier: !0,
                              wakeWordDetector: !0,
                              yellDetector: !0,
                              whisperTranscription: !0,
                          };
                l.setClipsMLPipelineTypeEnabled("emotion_classifier", d.emotionClassifier),
                    l.setClipsMLPipelineTypeEnabled("wake_word_detector", d.wakeWordDetector),
                    l.setClipsMLPipelineTypeEnabled("yell_detector", d.yellDetector),
                    l.setClipsMLPipelineTypeEnabled("whisper_transcription", d.whisperTranscription),
                    f.info("ML native module loaded successfully");
            } catch (e) {
                f.warn("Failed to load Clips ML module: ".concat(e.message)),
                    (this.state.nativeMLModuleState = r.C.FAILED);
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
                        f.info("ML catalog refreshed successfully");
                } catch (e) {
                    f.warn("Failed to refresh Clips ML catalog: ".concat(e.message)),
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
            for (let [t, a] of d.lc)
                e.models[t] = {
                    url: "https://cdn.discordapp.com/assets/content/".concat(a, ".onnx"),
                    version: "1.0.0",
                };
            return f.info("Loaded mock ML catalog with models:", Object.keys(e.models)), Promise.resolve(e);
        }
        async scanModelState(e) {
            if (!n.ZP.canCheckMLModelFilesExist()) return;
            let t = Object.keys(e.models).map((e) => ({
                id: e,
                fileName: e,
            }));
            for (let { id: e, exists: a } of await n.ZP.checkMLModelFilesExist(t))
                this.state.modelState[e] = { status: a ? r.l.DOWNLOADED : r.l.MISSING };
        }
        async prefetchMLModels() {
            if (__OVERLAY__) return;
            let e = this.state.models,
                t = [];
            for (let [a, o] of Object.entries(e)) {
                let e = this.state.modelState[a];
                (null == e ? void 0 : e.status) !== r.l.DOWNLOADED &&
                    (null == e ? void 0 : e.status) !== r.l.DOWNLOADING &&
                    t.push(
                        this.downloadMLModel({
                            modelId: a,
                            url: o.url,
                            fileName: a,
                        }),
                    );
            }
            f.info("Waiting for ML model downloads", t),
                await Promise.all(t),
                f.info("Finished downloading all ML models");
        }
        downloadMLModel(e) {
            let { url: t, modelId: a, fileName: o } = e,
                i = this.state.modelState[a],
                l = this.activeDownloads.get(a);
            if (null != l) return l;
            if ((null == i ? void 0 : i.status) === r.l.DOWNLOADED) return Promise.resolve();
            if ((null == i ? void 0 : i.status) === r.l.DOWNLOADING)
                return Promise.reject(Error("ML model is downloading but not in active downloads map"));
            this.state.modelState[a] = {
                status: r.l.DOWNLOADING,
                downloadedBytes: 0,
            };
            let s = n.ZP.downloadMLModelFile(t, o, (e) => {
                var t, o;
                let { downloadedBytes: i, totalBytes: l } = e;
                this.state.modelState[a] =
                    ((t = u({}, this.state.modelState[a])),
                    (o = o =
                        {
                            downloadedBytes: i,
                            totalBytes: l,
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o))
                        : (function (e, t) {
                              var a = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var o = Object.getOwnPropertySymbols(e);
                                  a.push.apply(a, o);
                              }
                              return a;
                          })(Object(o)).forEach(function (e) {
                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e));
                          }),
                    t);
            })
                .then((e) => {
                    e.fetchedFromNetwork && f.info("Downloaded ML model from network:", a),
                        (this.state.modelState[a] = {
                            status: r.l.DOWNLOADED,
                            downloadedBytes: void 0,
                        });
                })
                .catch((t) => {
                    (null == t ? void 0 : t.USER_CANCELED_DOWNLOAD)
                        ? f.info("User canceled the download for ML model", e)
                        : f.error("Failed to download ML model", u({ reason: t }, e)),
                        (this.state.modelState[a] = { status: r.l.MISSING });
                })
                .finally(() => {
                    this.activeDownloads.delete(a);
                });
            return this.activeDownloads.set(a, s), s;
        }
        constructor() {
            c(this, "state", {
                nativeMLModuleState: r.C.UNINITIALIZED,
                models: {},
                modelState: {},
                catalogLastFetchTime: void 0,
                catalogFetchFailed: !1,
            }),
                c(this, "activeDownloads", new Map()),
                c(this, "mlCatalogRefreshing", !1),
                c(this, "onMLResult", null),
                c(this, "onMLModuleLoaded", null);
        }
    })();
