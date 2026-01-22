n.d(t, {
    DF: () => P,
    HD: () => j,
    g8: () => w,
    md: () => M,
    st: () => L,
}),
    n(896048),
    n(65821),
    n(492834);
var r = n(735438),
    i = n(562465),
    a = n(205693),
    s = n(933681),
    o = n(73153),
    l = n(626584),
    c = n(430452),
    u = n(954571),
    d = n(456989),
    f = n(723702),
    p = n(728458),
    _ = n(837921),
    h = n(504292),
    m = n(971778),
    g = n(736666),
    E = n(797169),
    b = n(805026),
    y = n(652215);

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

function A(e) {
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

function v(e, t) {
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

function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let I = new l.A("VoiceFilterActionCreators"),
    T = 1e3,
    C = (0, r.debounce)(
        () => {
            o.h.dispatch({
                type: "VOICE_FILTER_LAGGING",
            });
        },
        T,
        {
            leading: !0,
        },
    ),
    N = !1,
    R = new Map();

function w(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        { url: n, modelId: r, fileName: i } = e,
        a = m.A.getModelState(r),
        s = R.get(r);
    if (null != s) return s;
    if ((null == a ? void 0 : a.status) === g.u.DOWNLOADED) return Promise.resolve();
    if ((null == a ? void 0 : a.status) === g.u.DOWNLOADING)
        return Promise.reject(Error("Voice filter model is downloading but not in active downloads map"));
    o.h.dispatch(
        A(
            {
                type: "VOICE_FILTER_DOWNLOAD_STARTED",
            },
            e,
        ),
    );
    let l = _.Ay.downloadVoiceFilterFile(n, i, (t) => {
        let { downloadedBytes: n, totalBytes: r } = t;
        o.h.dispatch(
            S(
                A(
                    {
                        type: "VOICE_FILTER_DOWNLOAD_PROGRESS",
                    },
                    e,
                ),
                {
                    downloadedBytes: n,
                    totalBytes: r,
                },
            ),
        );
    })
        .then((n) => {
            if (n.fetchedFromNetwork) {
                var i, a;
                u.default.track(y.HAw.VOICE_FILTER_DOWNLOAD_ATTEMPTED, {
                    active_voice_filter_id: null != (i = c.A.getActiveVoiceFilter()) ? i : null,
                    success: !0,
                    voice_filter_id: e.voiceFilterId,
                    model_id: r,
                    reason: null != (a = null == t ? void 0 : t.reason) ? a : null,
                });
            }
            o.h.dispatch(
                S(
                    A(
                        {
                            type: "VOICE_FILTER_FILE_READY",
                        },
                        e,
                    ),
                    {
                        analyticsContext: t,
                    },
                ),
            );
        })
        .catch((t) => {
            if (null == t ? void 0 : t.USER_CANCELED_DOWNLOAD)
                I.info("User canceled the download for Voice Filter dependency", e);
            else {
                let n = "Failed to download voice filter dependency";
                I.error(
                    n,
                    A(
                        {
                            reason: t,
                        },
                        e,
                    ),
                ),
                    u.default.track(y.HAw.VOICE_FILTER_ERROR, {
                        error_message: n,
                        cause: (0, d.P)(Error(t)),
                    }),
                    p.A.captureException(
                        Error(n, {
                            cause: t,
                        }),
                        {
                            tags: {
                                modelId: r,
                            },
                            extra: {
                                reason: t,
                            },
                        },
                    );
            }
            o.h.dispatch(
                S(
                    A(
                        {
                            type: "VOICE_FILTER_DOWNLOAD_FAILED",
                        },
                        e,
                    ),
                    {
                        error: t,
                    },
                ),
            );
        })
        .finally(() => {
            R.delete(r);
        });
    return R.set(r, l), l;
}
async function P(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    await M();
    let n = performance.now();
    try {
        let r = _.Ay.getVoiceFilters();
        I.info("Setting voice filter in native module:", e),
            await r.setVoiceFilter({
                name: e,
            }),
            o.h.dispatch({
                type: "VOICE_FILTER_APPLIED",
                voiceFilterId: e,
                analyticsContext: t,
                activationDurationMs: performance.now() - n,
            });
    } catch (t) {
        I.error("failed to set voice filter", t),
            o.h.dispatch({
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
        n = await i.Bo.get({
            url: y.Rsh.VOICE_FILTERS_CATALOG,
            query: {
                vfm_version: e.getModuleVersion(),
                models: e.getRequestedModelIds().join(","),
                nonce: t,
            },
            rejectWithError: !0,
        }),
        r = n.text,
        a = n.body,
        s = n.headers["x-discord-catalog-signature"];
    if (null == a.models) throw Error("Voice filters catalog response is empty");
    if (null == s) throw Error("Voice filters catalog signature is missing");
    return await e.setCatalog(r, s), a;
}
async function x(e) {
    if (!_.Ay.canCheckVoiceFilterFilesExist()) return;
    let t = Object.keys(e.models).map((e) => ({
            id: e,
            fileName: (0, b.L)(e),
        })),
        n = await _.Ay.checkVoiceFilterFilesExist(t),
        r = {};
    for (let { id: e, exists: t } of n)
        r[e] = {
            status: t ? g.u.DOWNLOADED : g.u.MISSING,
        };
    let i = t.map((e) => e.fileName);
    return (0, s.YV)(i) && (await (0, E.a)(i)), r;
}
async function L() {
    if (!m.A.isNativeModuleLoaded()) return void I.info("Voice Filter catalog refresh ignored, module not loaded.");
    if (!N)
        try {
            N = !0;
            let e = _.Ay.getVoiceFilters(),
                t = await D(e),
                n = null == m.A.getCatalogLastFetchTime() ? await x(t) : void 0;
            await o.h.dispatch({
                type: "VOICE_FILTER_CATALOG_FETCH_SUCCESS",
                catalog: t,
                initialModelState: n,
            });
        } catch (e) {
            I.warn("Failed to refresh voice filters catalog: ".concat(e.message)),
                u.default.track(y.HAw.VOICE_FILTER_ERROR, {
                    error_message: "Failed to refresh voice filters catalog",
                    cause: (0, d.P)(e),
                }),
                p.A.captureException(e),
                await o.h.dispatch({
                    type: "VOICE_FILTER_CATALOG_FETCH_FAILED",
                });
        } finally {
            N = !1;
        }
}

function j() {
    o.h.dispatch({
        type: "VOICE_FILTER_DOWNLOAD_CANCELED",
    });
}
async function M() {
    if (!(m.A.isNativeModuleLoaded() || m.A.isNativeModuleLoading()) && !__OVERLAY__) {
        if (!(0, f.isWindows)() && !(0, f.isMac)())
            return void o.h.dispatch({
                type: "VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE",
                state: g.R.UNSUPPORTED,
            });
        try {
            o.h.dispatch({
                type: "VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE",
                state: g.R.LOADING,
            }),
                await _.Ay.ensureModule("discord_voice_filters");
            let t = _.Ay.getVoiceFilters();
            await t.setupResources(),
                void 0 !== t.setVoiceFilterLaggingCallback && (await t.setVoiceFilterLaggingCallback(C)),
                void 0 !== t.setVoiceFilterReadyCallback &&
                    (await t.setVoiceFilterReadyCallback((e) => {
                        o.h.dispatch({
                            type: "VOICE_FILTER_READY",
                            name: e,
                        });
                    })),
                await o.h.dispatch({
                    type: "VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE",
                    state: g.R.LOADED,
                }),
                await L();
            let n = c.A.getMostRecentlyRequestedVoiceFilter();
            if (null != n) {
                var e;
                (null == (e = m.A.getVoiceFilter(n)) ? void 0 : e.available) !== !0 ? (0, h.OR)(null) : (0, h.OR)(n);
            }
            c.A.getMediaEngine().on(a.bg.VoiceFiltersFailed, (e) => {
                I.warn("Voice Filters failed in process: ".concat(e)),
                    u.default.track(y.HAw.VOICE_FILTER_ERROR, {
                        error_message: "Voice Filters failed in process",
                        cause: (0, d.P)(Error(e)),
                    }),
                    p.A.captureException(
                        Error("Voice Filters failed in process", {
                            cause: e,
                        }),
                    );
            });
        } catch (e) {
            I.warn("Failed to load Voice Filters module: ".concat(e.message)),
                u.default.track(y.HAw.VOICE_FILTER_ERROR, {
                    error_message: "Failed to load Voice Filters module",
                    cause: (0, d.P)(e),
                }),
                p.A.captureException(e),
                o.h.dispatch({
                    type: "VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE",
                    state: g.R.FAILED,
                });
        }
    }
}
