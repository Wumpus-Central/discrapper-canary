"use strict";
n.d(t, { A: () => I }), n(321073);
var r = n(554146),
    i = n(439372),
    a = n(626584),
    s = n(826673),
    o = n(430452),
    l = n(954571),
    u = n(837921),
    c = n(656088),
    d = n(971778),
    _ = n(342887),
    f = n(805026),
    p = n(652215),
    h = n(49999);
let m = new a.A("VoiceFilterManager");
function g(e) {
    let t = u.Ay.getVoiceFilters();
    return null != t.getModelIdsForVoiceId ? t.getModelIdsForVoiceId(e.id) : Object.values(e.modelIds ?? {});
}
let E = null;
class A extends i.A {
    actions = {
        VOICE_FILTER_REQUEST_SWITCH: this.handleVoiceFilterRequestSwitch,
        VOICE_FILTER_PREFETCH: this.handleVoiceFilterPrefetch,
        VOICE_FILTER_DOWNLOAD_FAILED: this.handleVoiceFilterDownloadFailed,
        VOICE_FILTER_DOWNLOAD_CANCELED: this.handleVoiceFilterDownloadCanceled,
        VOICE_FILTER_APPLIED: this.handleVoiceFilterApplied,
        VOICE_FILTER_APPLY_FAILED: this.handleVoiceFilterApplyFailed,
    };
    async handleVoiceFilterRequestSwitch(e) {
        let { newVoiceFilterId: t, analyticsContext: n } = e;
        if (__OVERLAY__) return;
        null != E && E.abort();
        let r = new AbortController();
        if (((E = r), null == t)) return void (0, _.DF)(null, n);
        let i = d.A.getVoiceFilter(t);
        if (null == i) return void m.error("requested Voice Filter is missing in VoiceFilterStore");
        let a = g(i);
        if (a.length > 0) {
            let e = d.A.getVoiceFilterModels(),
                t = [];
            for (let n of a) {
                let r = e[n]?.url;
                if (null == r) {
                    m.error("Missing model url for voice filter", i.id, n);
                    continue;
                }
                t.push({ voiceFilterId: i.id, modelId: n, url: r, fileName: (0, f.L)(n) });
            }
            m.info("Waiting for dependencies for voice filter", i.id, t);
            let r = t.map((e) => (0, _.g8)(e, n));
            await Promise.all(r);
        }
        r.signal.aborted || (0, _.DF)(t, n);
    }
    handleVoiceFilterPrefetch(e) {
        if (__OVERLAY__) return;
        let t = d.A.getVoiceFilters(),
            n = d.A.getVoiceFilterModels(),
            r = new Set();
        for (let e of Object.values(t))
            for (let t of g(e))
                r.has(t) ||
                    (r.add(t),
                    (0, _.g8)(
                        { voiceFilterId: e.id, modelId: t, url: n[t].url, fileName: (0, f.L)(t) },
                        { reason: c.O.AUTO_PREFETCH },
                    ));
    }
    handleVoiceFilterDownloadFailed(e) {
        let { modelId: t, voiceFilterId: n, error: r } = e,
            i = "USER_CANCELED_DOWNLOAD",
            a = null != r && i in r,
            s = (r?.message ?? String(r)).substring(0, 200);
        a && (s = i),
            l.default.track(p.HAw.VOICE_FILTER_DOWNLOAD_ATTEMPTED, {
                canceled: a,
                active_voice_filter_id: o.A.getActiveVoiceFilter() ?? null,
                success: !1,
                voice_filter_id: n,
                model_id: t,
                error_message: s,
            });
    }
    handleVoiceFilterApplied(e) {
        let { voiceFilterId: t, analyticsContext: n, activationDurationMs: i } = e,
            a = o.A.getPreviousVoiceFilter();
        if (null !== a && null === t) {
            let e = o.A.getPreviousVoiceFilterAppliedAt(),
                t = null === e ? null : Date.now() - e;
            l.default.track(p.HAw.VOICE_FILTER_DISABLED, {
                active_voice_filter_id: a,
                duration_voice_filter_applied: t,
            });
        }
        null !== t &&
            ((0, s.Dr)(r.M.VOICE_FILTER_IN_CALL_COACHMARK, { dismissAction: h.i.INDIRECT_ACTION }),
            (0, s.Dr)(r.M.VOICE_FILTER_FIRST_USE_COACHMARK, { dismissAction: h.i.INDIRECT_ACTION }),
            l.default.track(p.HAw.VOICE_FILTER_ENABLED, {
                active_voice_filter_id: t,
                previous_filter_id: a,
                ...(0, c.A)(n),
                time_to_activate_native_ms: i,
            }));
    }
    handleVoiceFilterApplyFailed(e) {
        let { voiceFilterId: t } = e;
        l.default.track(p.HAw.VOICE_FILTER_ACTIVATE_FAILED, { active_voice_filter_id: t ?? null });
    }
    handleVoiceFilterDownloadCanceled() {
        u.Ay.stopVoiceFilterDownloads();
    }
}
let I = new A();
