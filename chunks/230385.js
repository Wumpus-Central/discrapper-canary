n.d(t, { Z: () => h }), n(47120);
var i = n(147913),
    r = n(710845),
    a = n(131951),
    s = n(626135),
    o = n(998502),
    l = n(743498),
    u = n(709706),
    c = n(358820),
    d = n(981631);
function f(e, t, n) {
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
let _ = new r.Z('VoiceFilterManager');
class p extends i.Z {
    loadNativeModule() {
        (0, c.r5)();
    }
    handleVoiceFilterRequestSwitch(e) {
        let { newVoiceFilterId: t } = e,
            n = null != t ? u.Z.getVoiceFilter(t) : void 0;
        if (null == n && null != t) {
            _.error('requested Voice Filter is missing in VoiceFilterStore');
            return;
        }
        if ((null == n ? void 0 : n.modelIds) != null) {
            let e = u.Z.getVoiceFilterModels(),
                t = Object.values(n.modelIds).map((t) => ({
                    voiceFilterId: n.id,
                    modelId: t,
                    url: e[t].url,
                    fileName: ''.concat(t, '.onnx')
                }));
            for (let e of (_.info('Ensuring we have dependencies for voice filter', n.id, t), t)) (0, c.fz)(e);
        } else (0, c.rk)(t);
    }
    handleVoiceFilterDownloadReady(e) {
        let { modelId: t, voiceFilterId: n } = e,
            i = a.Z.getMostRecentlyRequestedVoiceFilter(),
            r = a.Z.getActiveVoiceFilter(),
            o = i !== r;
        if (
            (s.default.track(d.rMx.VOICE_FILTER_DOWNLOAD_ATTEMPTED, {
                active_voice_filter_id: null != r ? r : null,
                success: !0,
                voice_filter_id: n,
                model_id: t
            }),
            o && null != i)
        ) {
            let e = u.Z.getVoiceFilter(i);
            if (null == e) {
                _.error('the VF in mostRecentlyRequestedVoiceFilter is missing. Has the store been cleared?');
                return;
            }
            let n = e.modelIds,
                r = Object.values(null != n ? n : {})
                    .filter((e) => !u.Z.isModelDownloaded(e))
                    .filter((e) => e !== t);
            if (r.length > 0) {
                _.info('waiting for more dependencies', {
                    mostRecentlyRequestedVoiceFilter: i,
                    missingDependencies: r
                });
                return;
            }
            (0, c.rk)(i);
        }
    }
    handleVoiceFilterDownloadFailed(e) {
        var t;
        let { modelId: n, voiceFilterId: i } = e;
        s.default.track(d.rMx.VOICE_FILTER_DOWNLOAD_ATTEMPTED, {
            active_voice_filter_id: null !== (t = a.Z.getActiveVoiceFilter()) && void 0 !== t ? t : null,
            success: !1,
            voice_filter_id: i,
            model_id: n
        });
    }
    handleVoiceFilterApplied(e) {
        let { voiceFilterId: t } = e,
            n = a.Z.getPreviousVoiceFilter();
        if (null !== n && null === t) {
            let e = a.Z.getPreviousVoiceFilterAppliedAt(),
                t = null === e ? null : Date.now() - e;
            s.default.track(d.rMx.VOICE_FILTER_DISABLED, {
                active_voice_filter_id: n,
                duration_voice_filter_applied: t
            });
        }
        null !== t &&
            s.default.track(d.rMx.VOICE_FILTER_ENABLED, {
                active_voice_filter_id: t,
                previous_filter_id: n
            });
    }
    handleVoiceFilterApplyFailed(e) {
        let { voiceFilterId: t } = e;
        s.default.track(d.rMx.VOICE_FILTER_ACTIVATE_FAILED, { active_voice_filter_id: null != t ? t : null });
    }
    handleVoiceFilterDownloadCanceled() {
        o.ZP.stopVoiceFilterDownloads(), (0, l.v6)(null);
    }
    constructor(...e) {
        super(...e),
            f(this, 'actions', {
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
let h = new p();
