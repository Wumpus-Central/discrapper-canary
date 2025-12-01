n.d(t, { Z: () => O }), n(388685), n(49124);
var r = n(570140),
    i = n(147913),
    a = n(710845),
    o = n(199902),
    s = n(944486),
    l = n(979651),
    c = n(458725),
    u = n(754142),
    d = n(915525),
    f = n(990291);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = m(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let h = new a.Z("AVErrorManager");
function g(e, t) {
    let n = new Set();
    for (let r of e) t.has(r) || n.add(r);
    return n;
}
function E(e) {
    return f.C[e.type];
}
function b(e) {
    let t = E(e);
    return "".concat(e.type, ":").concat(null == t ? void 0 : t.makeErrorContextKey(e));
}
class y extends i.Z {
    updateActiveErrors() {
        var e, t;
        if (__OVERLAY__) return;
        let n = null != (e = s.Z.getVoiceChannelId()) ? e : null,
            i = null != n && null != (t = l.Z.getVoiceStateForChannel(n)) ? t : null,
            a = o.Z.getAllActiveStreams(),
            u = new Map();
        for (let e of Object.values(f.C)) {
            let t = e.getActiveErrors({
                voiceChannelId: n,
                voiceState: i,
                activeStreams: a,
            });
            if (null != t) for (let e of t) u.set(b(e), e);
        }
        let p = d.Z.getActiveErrors();
        if (!(p instanceof Map))
            return void h.error(
                "existingErrors is not a Map: ".concat(p, " type: ").concat(Object.prototype.toString.call(p)),
            );
        if (0 === u.size && 0 === p.size) return;
        let m = new Set(u.keys()),
            E = new Set(p.keys());
        if (m.size > E.size)
            for (let e of g(m, E)) {
                let t = u.get(e);
                null != t && (0, c.kr)(t);
            }
        if (E.size > m.size)
            for (let e of g(E, m)) {
                let t = e,
                    n = p.get(t);
                if (null != n) {
                    let { type: e } = n,
                        t = _(n, ["type"]);
                    h.info("Error resolved: ".concat(e, " ").concat(JSON.stringify(t)));
                }
            }
        r.Z.dispatch({
            type: "ACTIVE_AV_ERRORS_CHANGED",
            activeErrors: u,
        });
    }
    handleReportAVError(e) {
        let { error: t, context: n } = e;
        __OVERLAY__ || (0, u.b)(t, n);
    }
    constructor(...e) {
        super(...e),
            p(this, "actions", {
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
            });
    }
}
let O = new y();
