"use strict";
n.d(t, { A: () => E });
var r = n(73153),
    i = n(439372),
    a = n(626584),
    s = n(616356),
    o = n(309010),
    l = n(977997),
    u = n(709710),
    c = n(374473),
    d = n(161518),
    _ = n(734867);
let f = new a.A("AVErrorManager");
function p(e, t) {
    let n = new Set();
    for (let r of e) t.has(r) || n.add(r);
    return n;
}
function h(e) {
    return _.J[e.type];
}
function m(e) {
    let t = h(e);
    return `${e.type}:${t?.makeErrorContextKey(e)}`;
}
class g extends i.A {
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
            n = s.A.getAllActiveStreams(),
            i = new Map();
        for (let r of Object.values(_.J)) {
            let a = r.getActiveErrors({ voiceChannelId: e, voiceState: t, activeStreams: n });
            if (null != a) for (let e of a) i.set(m(e), e);
        }
        let a = d.A.getActiveErrors();
        if (!(a instanceof Map))
            return void f.error(`existingErrors is not a Map: ${a} type: ${Object.prototype.toString.call(a)}`);
        if (0 === i.size && 0 === a.size) return;
        let c = new Set(i.keys()),
            h = new Set(a.keys());
        if (c.size > h.size)
            for (let e of p(c, h)) {
                let t = i.get(e);
                null != t && (0, u.QW)(t);
            }
        if (h.size > c.size)
            for (let e of p(h, c)) {
                let t = a.get(e);
                if (null != t) {
                    let { type: e, ...n } = t;
                    f.info(`Error resolved: ${e} ${JSON.stringify(n)}`);
                }
            }
        r.h.dispatch({ type: "ACTIVE_AV_ERRORS_CHANGED", activeErrors: i });
    }
    handleReportAVError(e) {
        let { error: t, context: n } = e;
        __OVERLAY__ || (0, c.q)(t, n);
    }
}
let E = new g();
