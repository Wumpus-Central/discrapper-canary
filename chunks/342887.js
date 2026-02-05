"use strict";
n.d(t, { DF: () => N, HD: () => L, g8: () => b, md: () => w, st: () => D });
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
    p = n(837921),
    h = n(504292),
    m = n(971778),
    g = n(736666),
    E = n(797169),
    A = n(805026),
    I = n(652215);
let T = new l.A("VoiceFilterActionCreators"),
    y = 1e3,
    S = (0, r.debounce)(
        () => {
            o.h.dispatch({ type: "VOICE_FILTER_LAGGING" });
        },
        y,
        { leading: !0 },
    ),
    v = !1,
    C = new Map();
function b(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
        { url: n, modelId: r, fileName: i } = e,
        a = m.A.getModelState(r),
        s = C.get(r);
    if (null != s) return s;
    if (a?.status === g.u.DOWNLOADED) return Promise.resolve();
    if (a?.status === g.u.DOWNLOADING)
        return Promise.reject(Error("Voice filter model is downloading but not in active downloads map"));
    o.h.dispatch({ type: "VOICE_FILTER_DOWNLOAD_STARTED", ...e });
    let l = p.Ay.downloadVoiceFilterFile(n, i, (t) => {
        let { downloadedBytes: n, totalBytes: r } = t;
        o.h.dispatch({ type: "VOICE_FILTER_DOWNLOAD_PROGRESS", ...e, downloadedBytes: n, totalBytes: r });
    })
        .then((n) => {
            n.fetchedFromNetwork &&
                c.default.track(I.HAw.VOICE_FILTER_DOWNLOAD_ATTEMPTED, {
                    active_voice_filter_id: u.A.getActiveVoiceFilter() ?? null,
                    success: !0,
                    voice_filter_id: e.voiceFilterId,
                    model_id: r,
                    reason: t?.reason ?? null,
                }),
                o.h.dispatch({ type: "VOICE_FILTER_FILE_READY", ...e, analyticsContext: t });
        })
        .catch((t) => {
            if (t?.USER_CANCELED_DOWNLOAD) T.info("User canceled the download for Voice Filter dependency", e);
            else {
                let n = "Failed to download voice filter dependency";
                T.error(n, { reason: t, ...e }),
                    c.default.track(I.HAw.VOICE_FILTER_ERROR, { error_message: n, cause: (0, d.P)(Error(t)) }),
                    f.A.captureException(Error(n, { cause: t }), { tags: { modelId: r }, extra: { reason: t } });
            }
            o.h.dispatch({ type: "VOICE_FILTER_DOWNLOAD_FAILED", ...e, error: t });
        })
        .finally(() => {
            C.delete(r);
        });
    return C.set(r, l), l;
}
async function N(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    await w();
    let n = performance.now();
    try {
        let r = p.Ay.getVoiceFilters();
        T.info("Setting voice filter in native module:", e),
            await r.setVoiceFilter({ name: e }),
            o.h.dispatch({
                type: "VOICE_FILTER_APPLIED",
                voiceFilterId: e,
                analyticsContext: t,
                activationDurationMs: performance.now() - n,
            });
    } catch (t) {
        T.error("failed to set voice filter", t),
            o.h.dispatch({ type: "VOICE_FILTER_APPLY_FAILED", voiceFilterId: e, error: t });
    }
}
async function R(e) {
    if (
        null == e.getCatalogNonce ||
        null == e.getModuleVersion ||
        null == e.getRequestedModelIds ||
        null == e.setCatalog
    )
        throw Error("Voice filters signed catalog is not supported");
    let t = e.getCatalogNonce(),
        n = await i.Bo.get({
            url: I.Rsh.VOICE_FILTERS_CATALOG,
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
async function O(e) {
    if (!p.Ay.canCheckVoiceFilterFilesExist()) return;
    let t = Object.keys(e.models).map((e) => ({ id: e, fileName: (0, A.L)(e) })),
        n = await p.Ay.checkVoiceFilterFilesExist(t),
        r = {};
    for (let { id: e, exists: t } of n) r[e] = { status: t ? g.u.DOWNLOADED : g.u.MISSING };
    let i = t.map((e) => e.fileName);
    return (0, s.YV)(i) && (await (0, E.a)(i)), r;
}
async function D() {
    if (!m.A.isNativeModuleLoaded()) return void T.info("Voice Filter catalog refresh ignored, module not loaded.");
    if (!v)
        try {
            v = !0;
            let e = p.Ay.getVoiceFilters(),
                t = await R(e),
                n = null == m.A.getCatalogLastFetchTime() ? await O(t) : void 0;
            await o.h.dispatch({ type: "VOICE_FILTER_CATALOG_FETCH_SUCCESS", catalog: t, initialModelState: n });
        } catch (e) {
            T.warn(`Failed to refresh voice filters catalog: ${e.message}`),
                c.default.track(I.HAw.VOICE_FILTER_ERROR, {
                    error_message: "Failed to refresh voice filters catalog",
                    cause: (0, d.P)(e),
                }),
                f.A.captureException(e),
                await o.h.dispatch({ type: "VOICE_FILTER_CATALOG_FETCH_FAILED" });
        } finally {
            v = !1;
        }
}
function L() {
    o.h.dispatch({ type: "VOICE_FILTER_DOWNLOAD_CANCELED" });
}
async function w() {
    if (!(m.A.isNativeModuleLoaded() || m.A.isNativeModuleLoading()) && !__OVERLAY__) {
        if (!(0, _.isWindows)() && !(0, _.isMac)())
            return void o.h.dispatch({ type: "VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE", state: g.R.UNSUPPORTED });
        try {
            o.h.dispatch({ type: "VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE", state: g.R.LOADING }),
                await p.Ay.ensureModule("discord_voice_filters");
            let e = p.Ay.getVoiceFilters();
            await e.setupResources(),
                void 0 !== e.setVoiceFilterLaggingCallback && (await e.setVoiceFilterLaggingCallback(S)),
                void 0 !== e.setVoiceFilterReadyCallback &&
                    (await e.setVoiceFilterReadyCallback((e) => {
                        o.h.dispatch({ type: "VOICE_FILTER_READY", name: e });
                    })),
                await o.h.dispatch({ type: "VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE", state: g.R.LOADED }),
                await D();
            let t = u.A.getMostRecentlyRequestedVoiceFilter();
            null != t && (m.A.getVoiceFilter(t)?.available !== !0 ? (0, h.OR)(null) : (0, h.OR)(t)),
                u.A.getMediaEngine().on(a.bg.VoiceFiltersFailed, (e) => {
                    T.warn(`Voice Filters failed in process: ${e}`),
                        c.default.track(I.HAw.VOICE_FILTER_ERROR, {
                            error_message: "Voice Filters failed in process",
                            cause: (0, d.P)(Error(e)),
                        }),
                        f.A.captureException(Error("Voice Filters failed in process", { cause: e }));
                });
        } catch (e) {
            T.warn(`Failed to load Voice Filters module: ${e.message}`),
                c.default.track(I.HAw.VOICE_FILTER_ERROR, {
                    error_message: "Failed to load Voice Filters module",
                    cause: (0, d.P)(e),
                }),
                f.A.captureException(e),
                o.h.dispatch({ type: "VOICE_FILTER_NATIVE_MODULE_STATE_CHANGE", state: g.R.FAILED });
        }
    }
}
