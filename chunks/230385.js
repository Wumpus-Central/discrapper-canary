n.d(t, { Z: () => T }), n(539854), n(388685);
var r = n(704215),
    i = n(147913),
    a = n(710845),
    o = n(605236),
    s = n(131951),
    l = n(626135),
    c = n(998502),
    u = n(778033),
    d = n(709706),
    f = n(358820),
    _ = n(999224),
    p = n(981631),
    h = n(921944);
function m(e, t, n) {
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
function g(e) {
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
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
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
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let y = new a.Z('VoiceFilterManager');
function O(e) {
    var t;
    let n = c.ZP.getVoiceFilters();
    return null != n.getModelIdsForVoiceId ? n.getModelIdsForVoiceId(e.id) : Object.values(null != (t = e.modelIds) ? t : {});
}
let v = null;
class I extends i.Z {
    async handleVoiceFilterRequestSwitch(e) {
        let { newVoiceFilterId: t, analyticsContext: n } = e;
        if (__OVERLAY__) return;
        null != v && v.abort();
        let r = new AbortController();
        if (((v = r), null == t)) return void (0, f.rk)(null, n);
        let i = d.Z.getVoiceFilter(t);
        if (null == i) return void y.error('requested Voice Filter is missing in VoiceFilterStore');
        let a = O(i);
        if (a.length > 0) {
            let e = d.Z.getVoiceFilterModels(),
                t = [];
            for (let n of a) {
                var o;
                let r = null == (o = e[n]) ? void 0 : o.url;
                if (null == r) {
                    y.error('Missing model url for voice filter', i.id, n);
                    continue;
                }
                t.push({
                    voiceFilterId: i.id,
                    modelId: n,
                    url: r,
                    fileName: (0, _.i)(n)
                });
            }
            y.info('Waiting for dependencies for voice filter', i.id, t);
            let r = t.map((e) => (0, f.fz)(e, n));
            await Promise.all(r);
        }
        r.signal.aborted || (0, f.rk)(t, n);
    }
    handleVoiceFilterPrefetch(e) {
        if (__OVERLAY__) return;
        let t = d.Z.getVoiceFilters(),
            n = d.Z.getVoiceFilterModels(),
            r = new Set();
        for (let e of Object.values(t))
            for (let t of O(e))
                r.has(t) ||
                    (r.add(t),
                    (0, f.fz)(
                        {
                            voiceFilterId: e.id,
                            modelId: t,
                            url: n[t].url,
                            fileName: (0, _.i)(t)
                        },
                        { reason: u.W.AUTO_PREFETCH }
                    ));
    }
    handleVoiceFilterDownloadFailed(e) {
        var t, n;
        let { modelId: r, voiceFilterId: i, error: a } = e,
            o = 'USER_CANCELED_DOWNLOAD',
            c = null != a && o in a,
            u = (null != (t = null == a ? void 0 : a.message) ? t : String(a)).substring(0, 200);
        c && (u = o),
            l.default.track(p.rMx.VOICE_FILTER_DOWNLOAD_ATTEMPTED, {
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
            l.default.track(p.rMx.VOICE_FILTER_DISABLED, {
                active_voice_filter_id: a,
                duration_voice_filter_applied: t
            });
        }
        null !== t &&
            ((0, o.EW)(r.z.VOICE_FILTER_IN_CALL_COACHMARK, { dismissAction: h.L.INDIRECT_ACTION }),
            (0, o.EW)(r.z.VOICE_FILTER_FIRST_USE_COACHMARK, { dismissAction: h.L.INDIRECT_ACTION }),
            l.default.track(
                p.rMx.VOICE_FILTER_ENABLED,
                b(
                    g(
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
        l.default.track(p.rMx.VOICE_FILTER_ACTIVATE_FAILED, { active_voice_filter_id: null != t ? t : null });
    }
    handleVoiceFilterDownloadCanceled() {
        c.ZP.stopVoiceFilterDownloads();
    }
    constructor(...e) {
        super(...e),
            m(this, 'actions', {
                VOICE_FILTER_REQUEST_SWITCH: this.handleVoiceFilterRequestSwitch,
                VOICE_FILTER_PREFETCH: this.handleVoiceFilterPrefetch,
                VOICE_FILTER_DOWNLOAD_FAILED: this.handleVoiceFilterDownloadFailed,
                VOICE_FILTER_DOWNLOAD_CANCELED: this.handleVoiceFilterDownloadCanceled,
                VOICE_FILTER_APPLIED: this.handleVoiceFilterApplied,
                VOICE_FILTER_APPLY_FAILED: this.handleVoiceFilterApplyFailed
            });
    }
}
let T = new I();
