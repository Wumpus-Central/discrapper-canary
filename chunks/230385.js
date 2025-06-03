n.d(t, { Z: () => I }), n(388685);
var r = n(704215),
    i = n(147913),
    a = n(710845),
    o = n(605236),
    s = n(131951),
    l = n(626135),
    c = n(998502),
    u = n(778033),
    d = n(709706),
    f = n(750180),
    _ = n(358820),
    p = n(999224),
    h = n(981631),
    m = n(921944);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
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
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let O = new a.Z('VoiceFilterManager');
class v extends i.Z {
    loadNativeModule() {
        (0, _.r5)();
    }
    handleVoiceFilterRequestSwitch(e) {
        let { newVoiceFilterId: t, analyticsContext: n } = e;
        if (__OVERLAY__) return;
        let r = null != t ? d.Z.getVoiceFilter(t) : void 0;
        if (null == r && null != t) return void O.error('requested Voice Filter is missing in VoiceFilterStore');
        if ((null == r ? void 0 : r.modelIds) != null) {
            let e = d.Z.getVoiceFilterModels(),
                t = Object.values(r.modelIds).map((t) => ({
                    voiceFilterId: r.id,
                    modelId: t,
                    url: e[t].url,
                    fileName: (0, p.i)(t)
                }));
            for (let e of (O.info('Ensuring we have dependencies for voice filter', r.id, t), t)) (0, _.fz)(e, n);
        } else (0, _.rk)(t, n);
    }
    handleVoiceFilterPrefetch(e) {
        if (__OVERLAY__) return;
        let t = d.Z.getVoiceFilters(),
            n = d.Z.getVoiceFilterModels(),
            r = new Set();
        for (let e of Object.values(t)) {
            var i;
            for (let t of Object.values(null != (i = e.modelIds) ? i : {}))
                r.has(t) ||
                    (r.add(t),
                    (0, _.fz)(
                        {
                            voiceFilterId: e.id,
                            modelId: t,
                            url: n[t].url,
                            fileName: (0, p.i)(t)
                        },
                        { reason: u.W.AUTO_PREFETCH }
                    ));
        }
    }
    handleVoiceFilterFileReady(e) {
        let { modelId: t, voiceFilterId: n, fetchedFromNetwork: r, analyticsContext: i } = e,
            a = s.Z.getMostRecentlyRequestedVoiceFilter(),
            o = s.Z.getActiveVoiceFilter(),
            c = a !== o;
        if (r) {
            var u;
            l.default.track(h.rMx.VOICE_FILTER_DOWNLOAD_ATTEMPTED, {
                active_voice_filter_id: null != o ? o : null,
                success: !0,
                voice_filter_id: n,
                model_id: t,
                reason: null != (u = null == i ? void 0 : i.reason) ? u : null
            });
        }
        if (c && null != a) {
            let e = d.Z.getVoiceFilter(a);
            if (null == e) return void O.error('the VF in mostRecentlyRequestedVoiceFilter is missing. Has the store been cleared?');
            let n = e.modelIds,
                r = Object.values(null != n ? n : {})
                    .filter((e) => !d.Z.isModelDownloaded(e))
                    .filter((e) => e !== t);
            if (r.length > 0)
                return void O.info('waiting for more dependencies', {
                    mostRecentlyRequestedVoiceFilter: a,
                    missingDependencies: r
                });
            (0, _.rk)(a, i);
        }
    }
    handleVoiceFilterDownloadFailed(e) {
        var t, n;
        let { modelId: r, voiceFilterId: i, error: a } = e,
            o = 'USER_CANCELED_DOWNLOAD',
            c = null != a && o in a,
            u = (null != (t = null == a ? void 0 : a.message) ? t : String(a)).substring(0, 200);
        c && (u = o),
            l.default.track(h.rMx.VOICE_FILTER_DOWNLOAD_ATTEMPTED, {
                canceled: c,
                active_voice_filter_id: null != (n = s.Z.getActiveVoiceFilter()) ? n : null,
                success: !1,
                voice_filter_id: i,
                model_id: r,
                error_message: u
            });
    }
    handleVoiceFilterApplied(e) {
        let { voiceFilterId: t, analyticsContext: n, activationDurationMs: i } = e,
            a = s.Z.getPreviousVoiceFilter();
        if (null !== a && null === t) {
            let e = s.Z.getPreviousVoiceFilterAppliedAt(),
                t = null === e ? null : Date.now() - e;
            l.default.track(h.rMx.VOICE_FILTER_DISABLED, {
                active_voice_filter_id: a,
                duration_voice_filter_applied: t
            });
        }
        null !== t &&
            ((0, o.EW)(r.z.VOICE_FILTER_IN_CALL_COACHMARK, { dismissAction: m.L.INDIRECT_ACTION }),
            (0, o.EW)(r.z.VOICE_FILTER_FIRST_USE_COACHMARK, { dismissAction: m.L.INDIRECT_ACTION }),
            l.default.track(
                h.rMx.VOICE_FILTER_ENABLED,
                y(
                    E(
                        {
                            active_voice_filter_id: t,
                            previous_filter_id: a
                        },
                        (0, u.w)(n)
                    ),
                    { time_to_activate_native_ms: i }
                )
            ));
    }
    handleVoiceFilterApplyFailed(e) {
        let { voiceFilterId: t } = e;
        l.default.track(h.rMx.VOICE_FILTER_ACTIVATE_FAILED, { active_voice_filter_id: null != t ? t : null });
    }
    handleVoiceFilterDownloadCanceled() {
        c.ZP.stopVoiceFilterDownloads();
    }
    async handleVoiceFilterCatalogFetch(e) {
        let { catalog: t } = e,
            n = {},
            r = Object.keys(t.models).map((e) => ({
                id: e,
                fileName: (0, p.i)(e)
            }));
        for (let { id: e, exists: t } of await c.ZP.checkVoiceFilterFilesExist(r)) n[e] = { status: t ? f.L.DOWNLOADED : f.L.MISSING };
        (0, _.gf)(n);
    }
    constructor(...e) {
        super(...e),
            g(this, 'actions', {
                VOICE_FILTER_REQUEST_SWITCH: this.handleVoiceFilterRequestSwitch,
                VOICE_FILTER_PREFETCH: this.handleVoiceFilterPrefetch,
                VOICE_FILTER_DOWNLOAD_FAILED: this.handleVoiceFilterDownloadFailed,
                VOICE_FILTER_DOWNLOAD_CANCELED: this.handleVoiceFilterDownloadCanceled,
                VOICE_FILTER_FILE_READY: this.handleVoiceFilterFileReady,
                VOICE_FILTER_LOAD_MODULE: this.loadNativeModule,
                VOICE_FILTER_APPLIED: this.handleVoiceFilterApplied,
                VOICE_FILTER_APPLY_FAILED: this.handleVoiceFilterApplyFailed,
                VOICE_FILTER_CATALOG_FETCH_SUCCESS: this.handleVoiceFilterCatalogFetch
            });
    }
}
let I = new v();
