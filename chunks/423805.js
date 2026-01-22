n.d(t, {
    A: () => m,
}),
    n(896048);
var r = n(827343),
    i = n(439372),
    a = n(49463),
    s = n(173660),
    o = n(734057),
    l = n(430452),
    c = n(383501),
    u = n(504292),
    d = n(996744);

function f(e, t, n) {
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

function p() {
    return (0, d.Lb)({
        location: "VoiceFilterLoopbackManager",
        autoTrackExposure: !1,
    });
}

function _() {
    if (!p() || !l.A.getVoiceFilterPlaybackEnabled() || !c.A.isConnected() || null == l.A.getActiveVoiceFilter())
        return !1;
    let e = c.A.getChannelId(),
        t = null != e ? o.A.getChannel(e) : null,
        {
            mute: n,
            selfMute: r,
            suppress: i,
        } = (0, s.k)({
            channel: t,
        });
    return !(n || r || i);
}
class h extends i.A {
    handleExperimentStateChange() {
        !p() && l.A.getVoiceFilterPlaybackEnabled() && (0, u.KM)(!1);
    }
    updateLoopbackState() {
        let e = _();
        e !== l.A.getLoopbackReasons().has("voice_filter") && r.A.setLoopback("voice_filter", e);
    }
    constructor(...e) {
        super(...e),
            f(this, "actions", {
                VOICE_FILTER_LOOPBACK_TOGGLE: this.updateLoopbackState,
                RTC_CONNECTION_STATE: this.updateLoopbackState,
                VOICE_FILTER_APPLIED: this.updateLoopbackState,
                AUDIO_TOGGLE_SELF_MUTE: this.updateLoopbackState,
                AUDIO_SET_TEMPORARY_SELF_MUTE: this.updateLoopbackState,
                AUDIO_SET_SELF_MUTE: this.updateLoopbackState,
            }),
            f(this, "stores", new Map().set(a.A, this.handleExperimentStateChange));
    }
}
let m = new h();
