n.d(t, { A: () => O }), n(896048), n(457529);
var r = n(73153),
    i = n(439372),
    a = n(626584),
    s = n(616356),
    o = n(309010),
    l = n(977997),
    c = n(487329),
    u = n(374473),
    d = n(161518),
    f = n(734867);
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
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = h(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let m = new a.A("AVErrorManager");
function g(e, t) {
    let n = new Set();
    for (let r of e) t.has(r) || n.add(r);
    return n;
}
function E(e) {
    return f.J[e.type];
}
function b(e) {
    let t = E(e);
    return "".concat(e.type, ":").concat(null == t ? void 0 : t.makeErrorContextKey(e));
}
class y extends i.A {
    updateActiveErrors() {
        var e, t;
        if (__OVERLAY__) return;
        let n = null != (e = o.A.getVoiceChannelId()) ? e : null,
            i = null != n && null != (t = l.A.getVoiceStateForChannel(n)) ? t : null,
            a = s.A.getAllActiveStreams(),
            u = new Map();
        for (let e of Object.values(f.J)) {
            let t = e.getActiveErrors({
                voiceChannelId: n,
                voiceState: i,
                activeStreams: a,
            });
            if (null != t) for (let e of t) u.set(b(e), e);
        }
        let p = d.A.getActiveErrors();
        if (!(p instanceof Map))
            return void m.error(
                "existingErrors is not a Map: ".concat(p, " type: ").concat(Object.prototype.toString.call(p)),
            );
        if (0 === u.size && 0 === p.size) return;
        let h = new Set(u.keys()),
            E = new Set(p.keys());
        if (h.size > E.size)
            for (let e of g(h, E)) {
                let t = u.get(e);
                null != t && (0, c.QW)(t);
            }
        if (E.size > h.size)
            for (let e of g(E, h)) {
                let t = p.get(e);
                if (null != t) {
                    let { type: e } = t,
                        n = _(t, ["type"]);
                    m.info("Error resolved: ".concat(e, " ").concat(JSON.stringify(n)));
                }
            }
        r.h.dispatch({
            type: "ACTIVE_AV_ERRORS_CHANGED",
            activeErrors: u,
        });
    }
    handleReportAVError(e) {
        let { error: t, context: n } = e;
        __OVERLAY__ || (0, u.q)(t, n);
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
