n.d(t, {
    fz: () => P,
    ge: () => M,
    r5: () => j,
    rk: () => w,
    wV: () => L,
}),
    n(388685),
    n(415506),
    n(457542);
var r = n(392711),
    i = n(544891),
    a = n(46973),
    o = n(283693),
    s = n(570140),
    l = n(710845),
    c = n(131951),
    u = n(626135),
    d = n(460366),
    f = n(358085),
    _ = n(960048),
    p = n(998502),
    h = n(743498),
    m = n(709706),
    g = n(750180),
    E = n(547614),
    b = n(999224),
    y = n(981631);
function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                O(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let S = new l.Z("VoiceFilterActionCreators"),
    A = 1000,
    C = (0, r.debounce)(
        () => {
            s.Z.dispatch({ type: "VOICE_FILTER_LAGGING" });
        },
        A,
        { leading: !0 },
    ),
    N = !1,
    R = new Map();
function P(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        { url: n, modelId: r, fileName: i } = e,
        a = m.Z.getModelState(r),
        o = R.get(r);
    if (null != o) return o;
    if ((null == a ? void 0 : a.status) === g.L.DOWNLOADED) return Promise.resolve();
    if ((null == a ? void 0 : a.status) === g.L.DOWNLOADING)
        return Promise.reject(Error("Voice filter model is downloading but not in active downloads map"));
    s.Z.dispatch(v({ type: "VOICE_FILTER_DOWNLOAD_STARTED" }, e));
    let l = p.ZP.downloadVoiceFilterFile(n, i, (t) => {
        let { downloadedBytes: n, totalBytes: r } = t;
        s.Z.dispatch(
            T(v({ type: "VOICE_FILTER_DOWNLOAD_PROGRESS" }, e), {
                downloadedBytes: n,
                totalBytes: r,
            }),
        );
    })
        .then((n) => {
            if (n.fetchedFromNetwork) {
                var i, a;
                u.default.track(y.rMx.VOICE_FILTER_DOWNLOAD_ATTEMPTED, {
                    active_voice_filter_id: null != (i = c.Z.getActiveVoiceFilter()) ? i : null,
                    success: !0,
                    voice_filter_id: e.voiceFilterId,
                    model_id: r,
                    reason: null != (a = null == t ? void 0 : t.reason) ? a : null,
                });
            }
            s.Z.dispatch(T(v({ type: "VOICE_FILTER_FILE_READY" }, e), { analyticsContext: t }));
        })
        .catch((t) => {
            if (null == t ? void 0 : t.USER_CANCELED_DOWNLOAD)
                S.info("User canceled the download for Voice Filter dependency", e);
            else {
                let n = "Failed to download voice filter dependency";
                S.error(n, v({ reason: t }, e)),
                    u.default.track(y.rMx.VOICE_FILTER_ERROR, {
                        error_message: n,
                        cause: (0, d.X)(Error(t)),
                    }),
                    _.Z.captureException(Error(n, { cause: t }), {
                        tags: { modelId: r },
                        extra: { reason: t },
                    });
            }
            s.Z.dispatch(T(v({ type: "VOICE_FILTER_DOWNLOAD_FAILED" }, e), { error: t }));
        })
        .finally(() => {
            R.delete(r);
        });
    return R.set(r, l), l;
}
async function w(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    await j();
    let n = performance.now();
    try {
        let r = p.ZP.getVoiceFilters();
        S.info("Setting voice filter in native module:", e),
            await r.setVoiceFilter({ name: e }),
            s.Z.dispatch({
                type: "VOICE_FILTER_APPLIED",
                voiceFilterId: e,
                analyticsContext: t,
                activationDurationMs: performance.now() - n,
            });
    } catch (t) {
        S.error("failed to set voice filter", t),
            s.Z.dispatch({
                type: "VOICE_FILTER_APPLY_FAILED",
                voiceFilterId: e,
                error: t,
            });
    }
}
async function D(e) {
    if (
        null == e.getCatalogNonce ||
        null == e.getModuleVersion ||
        null == e.getRequestedModelIds ||
        null == e.setCatalog
    )
        throw Error("Voice filters signed catalog is not supported");
    let t = e.getCatalogNonce(),
        n = await i.tn.get({
            url: y.ANM.VOICE_FILTERS_CATALOG,
            query: {
                vfm_version: e.getModuleVersion(),
                models: e.getRequestedModelIds().join(","),
                nonce: t,
            },
            rejectWithError: !0,
        }),
        r = n.text,
        a = n.body,
        o = n.headers["x-discord-catalog-signature"];
    if (null == a.models) throw Error("Voice filters catalog response is empty");
    if (null == o) throw Error("Voice filters catalog signature is missing");
    return await e.setCatalog(r, o), a;
}
async function x(e) {
    if (!p.ZP.canCheckVoiceFilterFilesExist()) return;
    let t = Object.keys(e.models).map((e) => ({
            id: e,
            fileName: (0, b.i)(e),
        })),
        n = await p.ZP.checkVoiceFilterFilesExist(t),
        r = {};
    for (let { id: e, exists: t } of n) r[e] = { status: t ? g.L.DOWNLOADED : g.L.MISSING };
    let i = t.map((e) => e.fileName);
    return (0, o.dZ)(i) && (await (0, E.A)(i)), r;
}
async function L() {
    if (!m.Z.isNativeModuleLoaded()) return void S.info("Voice Filter catalog refresh ignored, module not loaded.");
    if (!N)
        try {
            N = !0;
            let e = p.ZP.getVoiceFilters(),
                t = await D(e),
                n = null == m.Z.getCatalogLastFetchTime() ? await x(t) : void 0;
            await s.Z.dispatch({
                type: "VOICE_FILTER_CATALOG_FETCH_SUCCESS",
                catalog: t,
                initialModelState: n,
            });
        } catch (e) {
            S.warn("Failed to refresh voice filters catalog: ".concat(e.message)),
                u.default.track(y.rMx.VOICE_FILTER_ERROR, {
                    error_message: "Failed to refresh voice filters catalog",
                    cause: (0, d.X)(e),
                }),
                _.Z.captureException(e),
                await s.Z.dispatch({ type: "VOICE_FILTER_CATALOG_FETCH_FAILED" });
        } finally {
            N = !1;
        }
}
function M() {
    s.Z.dispatch({ type: "VOICE_FILTER_DOWNLOAD_CANCELED" });
}
async function j() {
    if (!(m.Z.isNativeModuleLoaded() || m.Z.isNativeModuleLoading()) && !__OVERLAY__) {
        if (!(0, f.isWindows)() && !(0, f.isMac)())
            return void s.Z.dispatch({
                type: "VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE",
                state: g.O.UNSUPPORTED,
            });
        try {
            s.Z.dispatch({
                type: "VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE",
                state: g.O.LOADING,
            }),
                await p.ZP.ensureModule("discord_voice_filters");
            let t = p.ZP.getVoiceFilters();
            await t.setupResources(),
                void 0 !== t.setVoiceFilterLaggingCallback && (await t.setVoiceFilterLaggingCallback(C)),
                void 0 !== t.setVoiceFilterReadyCallback &&
                    (await t.setVoiceFilterReadyCallback((e) => {
                        s.Z.dispatch({
                            type: "VOICE_FILTER_READY",
                            name: e,
                        });
                    })),
                await s.Z.dispatch({
                    type: "VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE",
                    state: g.O.LOADED,
                }),
                await L();
            let n = c.Z.getMostRecentlyRequestedVoiceFilter();
            if (null != n) {
                var e;
                (null == (e = m.Z.getVoiceFilter(n)) ? void 0 : e.available) !== !0 ? (0, h.v6)(null) : (0, h.v6)(n);
            }
            c.Z.getMediaEngine().on(a.aB.VoiceFiltersFailed, (e) => {
                S.warn("Voice Filters failed in process: ".concat(e)),
                    u.default.track(y.rMx.VOICE_FILTER_ERROR, {
                        error_message: "Voice Filters failed in process",
                        cause: (0, d.X)(Error(e)),
                    }),
                    _.Z.captureException(Error("Voice Filters failed in process", { cause: e }));
            });
        } catch (e) {
            S.warn("Failed to load Voice Filters module: ".concat(e.message)),
                u.default.track(y.rMx.VOICE_FILTER_ERROR, {
                    error_message: "Failed to load Voice Filters module",
                    cause: (0, d.X)(e),
                }),
                _.Z.captureException(e),
                s.Z.dispatch({
                    type: "VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE",
                    state: g.O.FAILED,
                });
        }
    }
}
