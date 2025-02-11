n.d(t, { Z: () => _ }), n(47120);
var i = n(147913),
    r = n(710845),
    a = n(131951),
    s = n(998502),
    o = n(743498),
    l = n(709706),
    u = n(358820);
function c(e, t, n) {
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
let d = new r.Z('VoiceFilterManager');
class f extends i.Z {
    handleVoiceFilterRequestSwitch(e) {
        let { newVoiceFilterId: t } = e,
            n = null != t ? l.Z.getVoiceFilter(t) : void 0;
        if (null == n && null != t) {
            d.error('requested Voice Filter is missing in VoiceFilterStore');
            return;
        }
        if ((null == n ? void 0 : n.modelIds) != null) {
            let e = l.Z.getVoiceFilterModels(),
                t = Object.values(n.modelIds).map((t) => ({
                    voiceFilterId: n.id,
                    modelId: t,
                    url: e[t].url,
                    fileName: ''.concat(t, '.onnx')
                }));
            for (let e of (d.info('Ensuring we have dependencies for voice filter', n.id, t), t)) (0, u.fz)(e);
        } else (0, u.rk)(t);
    }
    handleVoiceFilterDownloadReady(e) {
        let { modelId: t } = e,
            n = a.Z.getMostRecentlyRequestedVoiceFilter();
        if (n !== a.Z.getActiveVoiceFilter() && null != n) {
            let e = l.Z.getVoiceFilter(n);
            if (null == e) {
                d.error('the VF in mostRecentlyRequestedVoiceFilter is missing. Has the store been cleared?');
                return;
            }
            let i = e.modelIds,
                r = Object.values(null != i ? i : {})
                    .filter((e) => !l.Z.isModelDownloaded(e))
                    .filter((e) => e !== t);
            if (r.length > 0) {
                d.info('waiting for more dependencies', {
                    mostRecentlyRequestedVoiceFilter: n,
                    missingDependencies: r
                });
                return;
            }
            (0, u.rk)(n);
        }
    }
    handleVoiceFilterDownloadCanceled() {
        s.ZP.stopVoiceFilterDownloads(), (0, o.v6)(null);
    }
    constructor(...e) {
        super(...e),
            c(this, 'actions', {
                VOICE_FILTER_DOWNLOAD_READY: this.handleVoiceFilterDownloadReady,
                VOICE_FILTER_REQUEST_SWITCH: this.handleVoiceFilterRequestSwitch,
                VOICE_FILTER_DOWNLOAD_CANCELED: this.handleVoiceFilterDownloadCanceled
            });
    }
}
let _ = new f();
