"use strict";
n.d(t, { DF: () => R, HD: () => w, g8: () => N, md: () => x, st: () => L });
var r = n(735438),
    i = n(562465),
    a = n(205693),
    s = n(933681),
    o = n(73153),
    l = n(626584),
    u = n(430452),
    c = n(954571),
    d = n(456989),
    _ = n(723702),
    f = n(728458),
    h = n(837921),
    p = n(504292),
    g = n(971778),
    E = n(736666),
    A = n(797169),
    I = n(805026),
    T = n(652215);
let y = new l.A("VoiceFilterActionCreators"),
    S = 1e3,
    v = (0, r.debounce)(
        () => {
            o.h.dispatch({ type: "VOICE_FILTER_LAGGING" });
        },
        S,
        { leading: !0 },
    ),
    C = !1,
    b = new Map();
function N(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        { url: n, modelId: r, fileName: i } = e,
        a = g.A.getModelState(r),
        s = b.get(r);
    if (null != s) return s;
    if (a?.status === E.u.DOWNLOADED) return Promise.resolve();
    if (a?.status === E.u.DOWNLOADING)
        return Promise.reject(Error("Voice filter model is downloading but not in active downloads map"));
    o.h.dispatch({ type: "VOICE_FILTER_DOWNLOAD_STARTED", ...e });
    let l = h.Ay.downloadVoiceFilterFile(n, i, (t) => {
        let { downloadedBytes: n, totalBytes: r } = t;
        o.h.dispatch({ type: "VOICE_FILTER_DOWNLOAD_PROGRESS", ...e, downloadedBytes: n, totalBytes: r });
    })
        .then((n) => {
            n.fetchedFromNetwork &&
                c.default.track(T.HAw.VOICE_FILTER_DOWNLOAD_ATTEMPTED, {
                    active_voice_filter_id: u.Ay.getActiveVoiceFilter() ?? null,
                    success: !0,
                    voice_filter_id: e.voiceFilterId,
                    model_id: r,
                    reason: t?.reason ?? null,
                }),
                o.h.dispatch({ type: "VOICE_FILTER_FILE_READY", ...e, analyticsContext: t });
        })
        .catch((t) => {
            if (t?.USER_CANCELED_DOWNLOAD) y.info("User canceled the download for Voice Filter dependency", e);
            else {
                let n = "Failed to download voice filter dependency";
                y.error(n, { reason: t, ...e }),
                    c.default.track(T.HAw.VOICE_FILTER_ERROR, { error_message: n, cause: (0, d.P)(Error(t)) }),
                    f.A.captureException(Error(n, { cause: t }), { tags: { modelId: r }, extra: { reason: t } });
            }
            o.h.dispatch({ type: "VOICE_FILTER_DOWNLOAD_FAILED", ...e, error: t });
        })
        .finally(() => {
            b.delete(r);
        });
    return b.set(r, l), l;
}
async function R(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    await x();
    let n = performance.now();
    try {
        let r = h.Ay.getVoiceFilters();
        y.info("Setting voice filter in native module:", e),
            await r.setVoiceFilter({ name: e }),
            o.h.dispatch({
                type: "VOICE_FILTER_APPLIED",
                voiceFilterId: e,
                analyticsContext: t,
                activationDurationMs: performance.now() - n,
            });
    } catch (t) {
        y.error("failed to set voice filter", t),
            o.h.dispatch({ type: "VOICE_FILTER_APPLY_FAILED", voiceFilterId: e, error: t });
    }
}
async function O(e) {
    if (
        null == e.getCatalogNonce ||
        null == e.getModuleVersion ||
        null == e.getRequestedModelIds ||
        null == e.setCatalog
    )
        throw Error("Voice filters signed catalog is not supported");
    let t = e.getCatalogNonce(),
        n = await i.Bo.get({
            url: T.Rsh.VOICE_FILTERS_CATALOG,
            query: { vfm_version: e.getModuleVersion(), models: e.getRequestedModelIds().join(","), nonce: t },
            rejectWithError: !0,
        }),
        r = n.text,
        a = n.body,
        s = n.headers["x-discord-catalog-signature"];
    if (null == a.models) throw Error("Voice filters catalog response is empty");
    if (null == s) throw Error("Voice filters catalog signature is missing");
    return await e.setCatalog(r, s), a;
}
async function D(e) {
    if (!h.Ay.canCheckVoiceFilterFilesExist()) return;
    let t = Object.keys(e.models).map((e) => ({ id: e, fileName: (0, I.L)(e) })),
        n = await h.Ay.checkVoiceFilterFilesExist(t),
        r = {};
    for (let { id: e, exists: t } of n) r[e] = { status: t ? E.u.DOWNLOADED : E.u.MISSING };
    let i = t.map((e) => e.fileName);
    return (0, s.YV)(i) && (await (0, A.a)(i)), r;
}
async function L() {
    if (!g.A.isNativeModuleLoaded()) return void y.info("Voice Filter catalog refresh ignored, module not loaded.");
    if (!C)
        try {
            C = !0;
            let e = h.Ay.getVoiceFilters(),
                t = await O(e),
                n = null == g.A.getCatalogLastFetchTime() ? await D(t) : void 0;
            await o.h.dispatch({ type: "VOICE_FILTER_CATALOG_FETCH_SUCCESS", catalog: t, initialModelState: n });
        } catch (e) {
            y.warn(`Failed to refresh voice filters catalog: ${e.message}`),
                c.default.track(T.HAw.VOICE_FILTER_ERROR, {
                    error_message: "Failed to refresh voice filters catalog",
                    cause: (0, d.P)(e),
                }),
                f.A.captureException(e),
                await o.h.dispatch({ type: "VOICE_FILTER_CATALOG_FETCH_FAILED" });
        } finally {
            C = !1;
        }
}
function w() {
    o.h.dispatch({ type: "VOICE_FILTER_DOWNLOAD_CANCELED" });
}
async function x() {
    if (!(g.A.isNativeModuleLoaded() || g.A.isNativeModuleLoading()) && !__OVERLAY__) {
        if (!(0, _.isWindows)() && !(0, _.isMac)())
            return void o.h.dispatch({ type: "VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE", state: E.R.UNSUPPORTED });
        try {
            o.h.dispatch({ type: "VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE", state: E.R.LOADING }),
                await h.Ay.ensureModule("discord_voice_filters");
            let e = h.Ay.getVoiceFilters();
            await e.setupResources(),
                void 0 !== e.setVoiceFilterLaggingCallback && (await e.setVoiceFilterLaggingCallback(v)),
                void 0 !== e.setVoiceFilterReadyCallback &&
                    (await e.setVoiceFilterReadyCallback((e) => {
                        o.h.dispatch({ type: "VOICE_FILTER_READY", name: e });
                    })),
                await o.h.dispatch({ type: "VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE", state: E.R.LOADED }),
                await L();
            let t = u.Ay.getMostRecentlyRequestedVoiceFilter();
            null != t && (g.A.getVoiceFilter(t)?.available !== !0 ? (0, p.O)(null) : (0, p.O)(t)),
                u.Ay.getMediaEngine().on(a.bg.VoiceFiltersFailed, (e) => {
                    y.warn(`Voice Filters failed in process: ${e}`),
                        c.default.track(T.HAw.VOICE_FILTER_ERROR, {
                            error_message: "Voice Filters failed in process",
                            cause: (0, d.P)(Error(e)),
                        }),
                        f.A.captureException(Error("Voice Filters failed in process", { cause: e }));
                });
        } catch (e) {
            y.warn(`Failed to load Voice Filters module: ${e.message}`),
                c.default.track(T.HAw.VOICE_FILTER_ERROR, {
                    error_message: "Failed to load Voice Filters module",
                    cause: (0, d.P)(e),
                }),
                f.A.captureException(e),
                o.h.dispatch({ type: "VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE", state: E.R.FAILED });
        }
    }
}
