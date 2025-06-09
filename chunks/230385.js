n.d(t, { Z: () => T }), n(388685);
var r = n(704215),
    i = n(283693),
    a = n(147913),
    o = n(710845),
    s = n(605236),
    l = n(131951),
    c = n(626135),
    u = n(998502),
    d = n(778033),
    f = n(709706),
    _ = n(750180),
    p = n(358820),
    h = n(547614),
    m = n(999224),
    g = n(981631),
    E = n(921944);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
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
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let I = new o.Z('VoiceFilterManager');
class S extends a.Z {
    handleVoiceFilterRequestSwitch(e) {
        let { newVoiceFilterId: t, analyticsContext: n } = e;
        if (__OVERLAY__) return;
        let r = null != t ? f.Z.getVoiceFilter(t) : void 0;
        if (null == r && null != t) return void I.error('requested Voice Filter is missing in VoiceFilterStore');
        if ((null == r ? void 0 : r.modelIds) != null) {
            let e = f.Z.getVoiceFilterModels(),
                t = Object.values(r.modelIds).map((t) => ({
                    voiceFilterId: r.id,
                    modelId: t,
                    url: e[t].url,
                    fileName: (0, m.i)(t)
                }));
            for (let e of (I.info('Ensuring we have dependencies for voice filter', r.id, t), t)) (0, p.fz)(e, n);
        } else (0, p.rk)(t, n);
    }
    handleVoiceFilterPrefetch(e) {
        if (__OVERLAY__) return;
        let t = f.Z.getVoiceFilters(),
            n = f.Z.getVoiceFilterModels(),
            r = new Set();
        for (let e of Object.values(t)) {
            var i;
            for (let t of Object.values(null != (i = e.modelIds) ? i : {}))
                r.has(t) ||
                    (r.add(t),
                    (0, p.fz)(
                        {
                            voiceFilterId: e.id,
                            modelId: t,
                            url: n[t].url,
                            fileName: (0, m.i)(t)
                        },
                        { reason: d.W.AUTO_PREFETCH }
                    ));
        }
    }
    handleVoiceFilterFileReady(e) {
        let { modelId: t, voiceFilterId: n, fetchedFromNetwork: r, analyticsContext: i } = e,
            a = l.Z.getMostRecentlyRequestedVoiceFilter(),
            o = l.Z.getActiveVoiceFilter(),
            s = a !== o;
        if (r) {
            var u;
            c.default.track(g.rMx.VOICE_FILTER_DOWNLOAD_ATTEMPTED, {
                active_voice_filter_id: null != o ? o : null,
                success: !0,
                voice_filter_id: n,
                model_id: t,
                reason: null != (u = null == i ? void 0 : i.reason) ? u : null
            });
        }
        if (s && null != a) {
            let e = f.Z.getVoiceFilter(a);
            if (null == e) return void I.error('the VF in mostRecentlyRequestedVoiceFilter is missing. Has the store been cleared?');
            let n = e.modelIds,
                r = Object.values(null != n ? n : {})
                    .filter((e) => !f.Z.isModelDownloaded(e))
                    .filter((e) => e !== t);
            if (r.length > 0)
                return void I.info('waiting for more dependencies', {
                    mostRecentlyRequestedVoiceFilter: a,
                    missingDependencies: r
                });
            (0, p.rk)(a, i);
        }
    }
    handleVoiceFilterDownloadFailed(e) {
        var t, n;
        let { modelId: r, voiceFilterId: i, error: a } = e,
            o = 'USER_CANCELED_DOWNLOAD',
            s = null != a && o in a,
            u = (null != (t = null == a ? void 0 : a.message) ? t : String(a)).substring(0, 200);
        s && (u = o),
            c.default.track(g.rMx.VOICE_FILTER_DOWNLOAD_ATTEMPTED, {
                canceled: s,
                active_voice_filter_id: null != (n = l.Z.getActiveVoiceFilter()) ? n : null,
                success: !1,
                voice_filter_id: i,
                model_id: r,
                error_message: u
            });
    }
    handleVoiceFilterApplied(e) {
        let { voiceFilterId: t, analyticsContext: n, activationDurationMs: i } = e,
            a = l.Z.getPreviousVoiceFilter();
        if (null !== a && null === t) {
            let e = l.Z.getPreviousVoiceFilterAppliedAt(),
                t = null === e ? null : Date.now() - e;
            c.default.track(g.rMx.VOICE_FILTER_DISABLED, {
                active_voice_filter_id: a,
                duration_voice_filter_applied: t
            });
        }
        null !== t &&
            ((0, s.EW)(r.z.VOICE_FILTER_IN_CALL_COACHMARK, { dismissAction: E.L.INDIRECT_ACTION }),
            (0, s.EW)(r.z.VOICE_FILTER_FIRST_USE_COACHMARK, { dismissAction: E.L.INDIRECT_ACTION }),
            c.default.track(
                g.rMx.VOICE_FILTER_ENABLED,
                v(
                    y(
                        {
                            active_voice_filter_id: t,
                            previous_filter_id: a
                        },
                        (0, d.w)(n)
                    ),
                    { time_to_activate_native_ms: i }
                )
            ));
    }
    handleVoiceFilterApplyFailed(e) {
        let { voiceFilterId: t } = e;
        c.default.track(g.rMx.VOICE_FILTER_ACTIVATE_FAILED, { active_voice_filter_id: null != t ? t : null });
    }
    handleVoiceFilterDownloadCanceled() {
        u.ZP.stopVoiceFilterDownloads();
    }
    async handleVoiceFilterCatalogFetch(e) {
        let { catalog: t } = e,
            n = Object.keys(t.models).map((e) => ({
                id: e,
                fileName: (0, m.i)(e)
            }));
        if (u.ZP.canCheckVoiceFilterFilesExist()) {
            let e = await u.ZP.checkVoiceFilterFilesExist(n),
                t = {};
            for (let { id: n, exists: r } of e) t[n] = { status: r ? _.L.DOWNLOADED : _.L.MISSING };
            (0, p.gf)(t);
            let r = n.map((e) => e.fileName);
            (0, i.dZ)(r) && (await (0, h.A)(r));
        }
    }
    constructor(...e) {
        super(...e),
            b(this, 'actions', {
                VOICE_FILTER_REQUEST_SWITCH: this.handleVoiceFilterRequestSwitch,
                VOICE_FILTER_PREFETCH: this.handleVoiceFilterPrefetch,
                VOICE_FILTER_DOWNLOAD_FAILED: this.handleVoiceFilterDownloadFailed,
                VOICE_FILTER_DOWNLOAD_CANCELED: this.handleVoiceFilterDownloadCanceled,
                VOICE_FILTER_FILE_READY: this.handleVoiceFilterFileReady,
                VOICE_FILTER_APPLIED: this.handleVoiceFilterApplied,
                VOICE_FILTER_APPLY_FAILED: this.handleVoiceFilterApplyFailed,
                VOICE_FILTER_CATALOG_FETCH_SUCCESS: this.handleVoiceFilterCatalogFetch
            });
    }
}
let T = new S();
