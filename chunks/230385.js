n.d(t, { Z: () => g }), n(47120);
var r = n(704215),
    i = n(147913),
    o = n(710845),
    a = n(605236),
    s = n(131951),
    l = n(626135),
    c = n(998502),
    u = n(709706),
    d = n(358820),
    f = n(981631),
    p = n(921944);
function _(e, t, n) {
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
let h = new o.Z('VoiceFilterManager');
class m extends i.Z {
    loadNativeModule() {
        (0, d.r5)();
    }
    handleVoiceFilterRequestSwitch(e) {
        let { newVoiceFilterId: t } = e,
            n = null != t ? u.Z.getVoiceFilter(t) : void 0;
        if (null == n && null != t) {
            h.error('requested Voice Filter is missing in VoiceFilterStore');
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
            for (let e of (h.info('Ensuring we have dependencies for voice filter', n.id, t), t)) (0, d.fz)(e);
        } else (0, d.rk)(t);
    }
    handleVoiceFilterDownloadReady(e) {
        let { modelId: t, voiceFilterId: n } = e,
            r = s.Z.getMostRecentlyRequestedVoiceFilter(),
            i = s.Z.getActiveVoiceFilter(),
            o = r !== i;
        if (
            (l.default.track(f.rMx.VOICE_FILTER_DOWNLOAD_ATTEMPTED, {
                active_voice_filter_id: null != i ? i : null,
                success: !0,
                voice_filter_id: n,
                model_id: t
            }),
            o && null != r)
        ) {
            let e = u.Z.getVoiceFilter(r);
            if (null == e) {
                h.error('the VF in mostRecentlyRequestedVoiceFilter is missing. Has the store been cleared?');
                return;
            }
            let n = e.modelIds,
                i = Object.values(null != n ? n : {})
                    .filter((e) => !u.Z.isModelDownloaded(e))
                    .filter((e) => e !== t);
            if (i.length > 0) {
                h.info('waiting for more dependencies', {
                    mostRecentlyRequestedVoiceFilter: r,
                    missingDependencies: i
                });
                return;
            }
            (0, d.rk)(r);
        }
    }
    handleVoiceFilterDownloadFailed(e) {
        var t;
        let { modelId: n, voiceFilterId: r } = e;
        l.default.track(f.rMx.VOICE_FILTER_DOWNLOAD_ATTEMPTED, {
            active_voice_filter_id: null !== (t = s.Z.getActiveVoiceFilter()) && void 0 !== t ? t : null,
            success: !1,
            voice_filter_id: r,
            model_id: n
        });
    }
    handleVoiceFilterApplied(e) {
        let { voiceFilterId: t } = e,
            n = s.Z.getPreviousVoiceFilter();
        if (null !== n && null === t) {
            let e = s.Z.getPreviousVoiceFilterAppliedAt(),
                t = null === e ? null : Date.now() - e;
            l.default.track(f.rMx.VOICE_FILTER_DISABLED, {
                active_voice_filter_id: n,
                duration_voice_filter_applied: t
            });
        }
        null !== t &&
            ((0, a.EW)(r.z.VOICE_FILTER_IN_CALL_COACHMARK, { dismissAction: p.L.INDIRECT_ACTION }),
            l.default.track(f.rMx.VOICE_FILTER_ENABLED, {
                active_voice_filter_id: t,
                previous_filter_id: n
            }));
    }
    handleVoiceFilterApplyFailed(e) {
        let { voiceFilterId: t } = e;
        l.default.track(f.rMx.VOICE_FILTER_ACTIVATE_FAILED, { active_voice_filter_id: null != t ? t : null });
    }
    handleVoiceFilterDownloadCanceled() {
        c.ZP.stopVoiceFilterDownloads();
    }
    constructor(...e) {
        super(...e),
            _(this, 'actions', {
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
let g = new m();
