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
                h(e, t, n[t]);
            });
    }
    return e;
}
let m = new o.Z('VoiceFilterManager');
class E extends i.Z {
    loadNativeModule() {
        (0, f.r5)();
    }
    handleVoiceFilterRequestSwitch(e) {
        let { newVoiceFilterId: t, analyticsContext: n } = e,
            r = null != t ? d.Z.getVoiceFilter(t) : void 0;
        if (null == r && null != t) {
            m.error('requested Voice Filter is missing in VoiceFilterStore');
            return;
        }
        if ((null == r ? void 0 : r.modelIds) != null) {
            let e = d.Z.getVoiceFilterModels(),
                t = Object.values(r.modelIds).map((t) => ({
                    voiceFilterId: r.id,
                    modelId: t,
                    url: e[t].url,
                    fileName: ''.concat(t, '.onnx')
                }));
            for (let e of (m.info('Ensuring we have dependencies for voice filter', r.id, t), t)) (0, f.fz)(e, n);
        } else (0, f.rk)(t, n);
    }
    handleVoiceFilterDownloadReady(e) {
        let { modelId: t, voiceFilterId: n, analyticsContext: r } = e,
            i = s.Z.getMostRecentlyRequestedVoiceFilter(),
            o = s.Z.getActiveVoiceFilter(),
            a = i !== o;
        if (
            (l.default.track(_.rMx.VOICE_FILTER_DOWNLOAD_ATTEMPTED, {
                active_voice_filter_id: null != o ? o : null,
                success: !0,
                voice_filter_id: n,
                model_id: t
            }),
            a && null != i)
        ) {
            let e = d.Z.getVoiceFilter(i);
            if (null == e) {
                m.error('the VF in mostRecentlyRequestedVoiceFilter is missing. Has the store been cleared?');
                return;
            }
            let n = e.modelIds,
                o = Object.values(null != n ? n : {})
                    .filter((e) => !d.Z.isModelDownloaded(e))
                    .filter((e) => e !== t);
            if (o.length > 0) {
                m.info('waiting for more dependencies', {
                    mostRecentlyRequestedVoiceFilter: i,
                    missingDependencies: o
                });
                return;
            }
            (0, f.rk)(i, r);
        }
    }
    handleVoiceFilterDownloadFailed(e) {
        var t;
        let { modelId: n, voiceFilterId: r } = e;
        l.default.track(_.rMx.VOICE_FILTER_DOWNLOAD_ATTEMPTED, {
            active_voice_filter_id: null !== (t = s.Z.getActiveVoiceFilter()) && void 0 !== t ? t : null,
            success: !1,
            voice_filter_id: r,
            model_id: n
        });
    }
    handleVoiceFilterApplied(e) {
        let { voiceFilterId: t, analyticsContext: n } = e,
            i = s.Z.getPreviousVoiceFilter();
        if (null !== i && null === t) {
            let e = s.Z.getPreviousVoiceFilterAppliedAt(),
                t = null === e ? null : Date.now() - e;
            l.default.track(_.rMx.VOICE_FILTER_DISABLED, {
                active_voice_filter_id: i,
                duration_voice_filter_applied: t
            });
        }
        null !== t &&
            ((0, a.EW)(r.z.VOICE_FILTER_IN_CALL_COACHMARK, { dismissAction: p.L.INDIRECT_ACTION }),
            l.default.track(
                _.rMx.VOICE_FILTER_ENABLED,
                g(
                    {
                        active_voice_filter_id: t,
                        previous_filter_id: i
                    },
                    (0, u.w)(n)
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
                VOICE_FILTER_DOWNLOAD_READY: this.handleVoiceFilterDownloadReady,
                VOICE_FILTER_DOWNLOAD_FAILED: this.handleVoiceFilterDownloadFailed,
                VOICE_FILTER_DOWNLOAD_CANCELED: this.handleVoiceFilterDownloadCanceled,
                VOICE_FILTER_LOAD_MODULE: this.loadNativeModule,
                VOICE_FILTER_APPLIED: this.handleVoiceFilterApplied,
                VOICE_FILTER_APPLY_FAILED: this.handleVoiceFilterApplyFailed
            });
    }
}
let v = new E();
