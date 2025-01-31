n.d(t, { Z: () => d }), n(47120);
var i = n(147913),
    r = n(710845),
    a = n(131951),
    s = n(709706),
    o = n(358820);
function l(e, t, n) {
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
let u = new r.Z('VoiceFilterManager');
class c extends i.Z {
    handleVoiceFilterRequestSwitch(e) {
        let { newVoiceFilterId: t } = e,
            n = null != t ? s.Z.getVoiceFilter(t) : void 0;
        if (null == n && null != t) {
            u.error('requested Voice Filter is missing in VoiceFilterStore');
            return;
        }
        if ((null == n ? void 0 : n.modelIds) != null) {
            let e = s.Z.getVoiceFilterModels(),
                t = Object.values(n.modelIds).map((t) => ({
                    voiceFilterId: n.id,
                    modelId: t,
                    url: e[t].url,
                    fileName: ''.concat(t, '.onnx')
                }));
            for (let e of (u.info('Ensuring we have dependencies for voice filter', n.id, t), t)) (0, o.fz)(e);
        } else (0, o.rk)(t);
    }
    handleVoiceFilterDownloadReady(e) {
        let { modelId: t } = e,
            n = a.Z.getMostRecentlyRequestedVoiceFilter();
        if (n !== a.Z.getActiveVoiceFilter() && null != n) {
            let e = s.Z.getVoiceFilter(n);
            if (null == e) {
                u.error('the VF in mostRecentlyRequestedVoiceFilter is missing. Has the store been cleared?');
                return;
            }
            let i = e.modelIds,
                r = Object.values(null != i ? i : {})
                    .filter((e) => !s.Z.isModelDownloaded(e))
                    .filter((e) => e !== t);
            if (r.length > 0) {
                u.info('waiting for more dependencies', {
                    mostRecentlyRequestedVoiceFilter: n,
                    missingDependencies: r
                });
                return;
            }
            (0, o.rk)(n);
        }
    }
    constructor(...e) {
        super(...e),
            l(this, 'actions', {
                VOICE_FILTER_DOWNLOAD_READY: this.handleVoiceFilterDownloadReady,
                VOICE_FILTER_REQUEST_SWITCH: this.handleVoiceFilterRequestSwitch
            });
    }
}
let d = new c();
