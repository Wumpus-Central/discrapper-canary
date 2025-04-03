n.d(t, { Z: () => v }), n(47120);
var r = n(704215),
    i = n(147913),
    o = n(710845),
    a = n(605236),
    s = n(131951),
    l = n(626135),
    c = n(998502),
    u = n(778033),
    d = n(709706),
    f = n(358820),
    _ = n(981631),
    p = n(921944);
function h(e, t, n) {
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
function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
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
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let b = new o.Z('VoiceFilterManager');
class y extends i.Z {
    loadNativeModule() {
        (0, f.r5)();
    }
    handleVoiceFilterRequestSwitch(e) {
        let { newVoiceFilterId: t, analyticsContext: n } = e,
            r = null != t ? d.Z.getVoiceFilter(t) : void 0;
        if (null == r && null != t) return void b.error('requested Voice Filter is missing in VoiceFilterStore');
        if ((null == r ? void 0 : r.modelIds) != null) {
            let e = d.Z.getVoiceFilterModels(),
                t = Object.values(r.modelIds).map((t) => ({
                    voiceFilterId: r.id,
                    modelId: t,
                    url: e[t].url,
                    fileName: ''.concat(t, '.onnx')
                }));
            for (let e of (b.info('Ensuring we have dependencies for voice filter', r.id, t), t)) (0, f.fz)(e, n);
        } else (0, f.rk)(t, n);
    }
    handleVoiceFilterFileReady(e) {
        let { modelId: t, voiceFilterId: n, fetchedFromNetwork: r, analyticsContext: i } = e,
            o = s.Z.getMostRecentlyRequestedVoiceFilter(),
            a = s.Z.getActiveVoiceFilter(),
            c = o !== a;
        if (
            (r &&
                l.default.track(_.rMx.VOICE_FILTER_DOWNLOAD_ATTEMPTED, {
                    active_voice_filter_id: null != a ? a : null,
                    success: !0,
                    voice_filter_id: n,
                    model_id: t
                }),
            c && null != o)
        ) {
            let e = d.Z.getVoiceFilter(o);
            if (null == e) return void b.error('the VF in mostRecentlyRequestedVoiceFilter is missing. Has the store been cleared?');
            let n = e.modelIds,
                r = Object.values(null != n ? n : {})
                    .filter((e) => !d.Z.isModelDownloaded(e))
                    .filter((e) => e !== t);
            if (r.length > 0)
                return void b.info('waiting for more dependencies', {
                    mostRecentlyRequestedVoiceFilter: o,
                    missingDependencies: r
                });
            (0, f.rk)(o, i);
        }
    }
    handleVoiceFilterDownloadFailed(e) {
        var t, n;
        let { modelId: r, voiceFilterId: i, error: o } = e,
            a = 'USER_CANCELED_DOWNLOAD',
            c = null != o && a in o,
            u = (null != (t = null == o ? void 0 : o.message) ? t : String(o)).substring(0, 200);
        c && (u = a),
            l.default.track(_.rMx.VOICE_FILTER_DOWNLOAD_ATTEMPTED, {
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
            o = s.Z.getPreviousVoiceFilter();
        if (null !== o && null === t) {
            let e = s.Z.getPreviousVoiceFilterAppliedAt(),
                t = null === e ? null : Date.now() - e;
            l.default.track(_.rMx.VOICE_FILTER_DISABLED, {
                active_voice_filter_id: o,
                duration_voice_filter_applied: t
            });
        }
        null !== t &&
            ((0, a.EW)(r.z.VOICE_FILTER_IN_CALL_COACHMARK, { dismissAction: p.L.INDIRECT_ACTION }),
            l.default.track(
                _.rMx.VOICE_FILTER_ENABLED,
                E(
                    m(
                        {
                            active_voice_filter_id: t,
                            previous_filter_id: o
                        },
                        (0, u.w)(n)
                    ),
                    { time_to_activate_native_ms: i }
                )
            ));
    }
    handleVoiceFilterApplyFailed(e) {
        let { voiceFilterId: t } = e;
        l.default.track(_.rMx.VOICE_FILTER_ACTIVATE_FAILED, { active_voice_filter_id: null != t ? t : null });
    }
    handleVoiceFilterDownloadCanceled() {
        c.ZP.stopVoiceFilterDownloads();
    }
    constructor(...e) {
        super(...e),
            h(this, 'actions', {
                VOICE_FILTER_REQUEST_SWITCH: this.handleVoiceFilterRequestSwitch,
                VOICE_FILTER_DOWNLOAD_FAILED: this.handleVoiceFilterDownloadFailed,
                VOICE_FILTER_DOWNLOAD_CANCELED: this.handleVoiceFilterDownloadCanceled,
                VOICE_FILTER_FILE_READY: this.handleVoiceFilterFileReady,
                VOICE_FILTER_LOAD_MODULE: this.loadNativeModule,
                VOICE_FILTER_APPLIED: this.handleVoiceFilterApplied,
                VOICE_FILTER_APPLY_FAILED: this.handleVoiceFilterApplyFailed
            });
    }
}
let v = new y();
