n.d(t, { Z: () => E }), n(47120);
var i = n(704215),
    r = n(147913),
    a = n(710845),
    s = n(605236),
    o = n(131951),
    l = n(626135),
    u = n(998502),
    c = n(743498),
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
let m = new a.Z('VoiceFilterManager');
class g extends r.Z {
    loadNativeModule() {
        (0, f.r5)();
    }
    handleVoiceFilterRequestSwitch(e) {
        let { newVoiceFilterId: t } = e,
            n = null != t ? d.Z.getVoiceFilter(t) : void 0;
        if (null == n && null != t) {
            m.error('requested Voice Filter is missing in VoiceFilterStore');
            return;
        }
        if ((null == n ? void 0 : n.modelIds) != null) {
            let e = d.Z.getVoiceFilterModels(),
                t = Object.values(n.modelIds).map((t) => ({
                    voiceFilterId: n.id,
                    modelId: t,
                    url: e[t].url,
                    fileName: ''.concat(t, '.onnx')
                }));
            for (let e of (m.info('Ensuring we have dependencies for voice filter', n.id, t), t)) (0, f.fz)(e);
        } else (0, f.rk)(t);
    }
    handleVoiceFilterDownloadReady(e) {
        let { modelId: t, voiceFilterId: n } = e,
            i = o.Z.getMostRecentlyRequestedVoiceFilter(),
            r = o.Z.getActiveVoiceFilter(),
            a = i !== r;
        if (
            (l.default.track(_.rMx.VOICE_FILTER_DOWNLOAD_ATTEMPTED, {
                active_voice_filter_id: null != r ? r : null,
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
                r = Object.values(null != n ? n : {})
                    .filter((e) => !d.Z.isModelDownloaded(e))
                    .filter((e) => e !== t);
            if (r.length > 0) {
                m.info('waiting for more dependencies', {
                    mostRecentlyRequestedVoiceFilter: i,
                    missingDependencies: r
                });
                return;
            }
            (0, f.rk)(i);
        }
    }
    handleVoiceFilterDownloadFailed(e) {
        var t;
        let { modelId: n, voiceFilterId: i } = e;
        l.default.track(_.rMx.VOICE_FILTER_DOWNLOAD_ATTEMPTED, {
            active_voice_filter_id: null !== (t = o.Z.getActiveVoiceFilter()) && void 0 !== t ? t : null,
            success: !1,
            voice_filter_id: i,
            model_id: n
        });
    }
    handleVoiceFilterApplied(e) {
        let { voiceFilterId: t } = e,
            n = o.Z.getPreviousVoiceFilter();
        if (null !== n && null === t) {
            let e = o.Z.getPreviousVoiceFilterAppliedAt(),
                t = null === e ? null : Date.now() - e;
            l.default.track(_.rMx.VOICE_FILTER_DISABLED, {
                active_voice_filter_id: n,
                duration_voice_filter_applied: t
            });
        }
        null !== t &&
            ((0, s.EW)(i.z.VOICE_FILTER_IN_CALL_COACHMARK, { dismissAction: p.L.INDIRECT_ACTION }),
            l.default.track(_.rMx.VOICE_FILTER_ENABLED, {
                active_voice_filter_id: t,
                previous_filter_id: n
            }));
    }
    handleVoiceFilterApplyFailed(e) {
        let { voiceFilterId: t } = e;
        l.default.track(_.rMx.VOICE_FILTER_ACTIVATE_FAILED, { active_voice_filter_id: null != t ? t : null });
    }
    handleVoiceFilterDownloadCanceled() {
        u.ZP.stopVoiceFilterDownloads(), (0, c.v6)(null);
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
let E = new g();
