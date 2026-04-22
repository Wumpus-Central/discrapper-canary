"use strict";
n.d(t, { A: () => p });
var r = n(73153),
    i = n(439372),
    s = n(626584),
    a = n(616356),
    o = n(309010),
    l = n(977997),
    u = n(487329),
    d = n(374473),
    c = n(161518),
    _ = n(734867);
let f = new s.A("AVErrorManager");
function E(e, t) {
    let n = new Set();
    for (let r of e) t.has(r) || n.add(r);
    return n;
}
class h extends i.A {
    actions = {
        MEDIA_ENGINE_SET_AUDIO_ENABLED: this.updateActiveErrors,
        AUDIO_INPUT_DETECTED: this.updateActiveErrors,
        AUDIO_SET_DISPLAY_SILENCE_WARNING: this.updateActiveErrors,
        CERTIFIED_DEVICES_SET: this.updateActiveErrors,
        AUDIO_SET_INPUT_DEVICE: this.updateActiveErrors,
        AUDIO_SET_OUTPUT_DEVICE: this.updateActiveErrors,
        MEDIA_ENGINE_DEVICES: this.updateActiveErrors,
        RTC_CONNECTION_STATE: this.updateActiveErrors,
        VOICE_STATE_UPDATES: this.updateActiveErrors,
        MEDIA_ENGINE_SET_GO_LIVE_SOURCE: this.updateActiveErrors,
        MEDIA_ENGINE_SOUNDSHARE_FAILED: this.updateActiveErrors,
        MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: this.updateActiveErrors,
        MEDIA_ENGINE_VOICE_ACTIVITY_DETECTION_ERROR: this.updateActiveErrors,
        MEDIA_ENGINE_VIDEO_STATE_CHANGED: this.updateActiveErrors,
        NATIVE_SCREEN_SHARE_PICKER_UPDATE: this.updateActiveErrors,
        NATIVE_SCREEN_SHARE_PICKER_ERROR: this.updateActiveErrors,
        MEDIA_SESSION_JOINED: this.updateActiveErrors,
        RTC_CONNECTION_UPDATE_ID: this.updateActiveErrors,
        RTC_CONNECTION_VIDEO: this.updateActiveErrors,
        RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS: this.updateActiveErrors,
        VIDEO_STREAM_READY_TIMEOUT: this.updateActiveErrors,
        CLEAR_VIDEO_STREAM_READY_TIMEOUT: this.updateActiveErrors,
        REPORT_AV_ERROR: this.handleReportAVError,
        STREAM_CLOSE: this.updateActiveErrors,
    };
    updateActiveErrors() {
        if (__OVERLAY__) return;
        let e = o.A.getVoiceChannelId() ?? null,
            t = null != e ? (l.A.getVoiceStateForChannel(e) ?? null) : null,
            n = a.A.getAllActiveStreams(),
            i = new Map();
        for (let r of Object.values(_.J)) {
            let s = r.getActiveErrors({ voiceChannelId: e, voiceState: t, activeStreams: n });
            if (null != s)
                for (let e of s)
                    i.set(
                        (function (e) {
                            let t = _.J[e.type];
                            return `${e.type}:${t?.makeErrorContextKey(e)}`;
                        })(e),
                        e,
                    );
        }
        let s = c.A.getActiveErrors();
        if (!(s instanceof Map))
            return void f.error(`existingErrors is not a Map: ${s} type: ${Object.prototype.toString.call(s)}`);
        if (0 === i.size && 0 === s.size) return;
        let d = new Set(i.keys()),
            h = new Set(s.keys());
        if (d.size > h.size)
            for (let e of E(d, h)) {
                let t = i.get(e);
                null != t && (0, u.QW)(t);
            }
        if (h.size > d.size)
            for (let e of E(h, d)) {
                let t = s.get(e);
                if (null != t) {
                    let { type: e, ...n } = t;
                    f.info(`Error resolved: ${e} ${JSON.stringify(n)}`);
                }
            }
        r.h.dispatch({ type: "ACTIVE_AV_ERRORS_CHANGED", activeErrors: i });
    }
    handleReportAVError(e) {
        let { error: t, context: n } = e;
        __OVERLAY__ || (0, d.q)(t, n);
    }
}
let p = new h();
