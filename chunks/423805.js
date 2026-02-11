"use strict";
n.d(t, { A: () => p });
var r = n(827343),
    i = n(439372),
    a = n(49463),
    s = n(173660),
    o = n(734057),
    l = n(430452),
    u = n(383501),
    c = n(504292),
    d = n(996744);
function _() {
    return (0, d.Lb)({ location: "VoiceFilterLoopbackManager", autoTrackExposure: !1 });
}
function f() {
    if (!_() || !l.Ay.getVoiceFilterPlaybackEnabled() || !u.A.isConnected() || null == l.Ay.getActiveVoiceFilter())
        return !1;
    let e = u.A.getChannelId(),
        t = null != e ? o.A.getChannel(e) : null,
        { mute: n, selfMute: r, suppress: i } = (0, s.k)({ channel: t });
    return !(n || r || i);
}
class h extends i.A {
    actions = {
        VOICE_FILTER_LOOPBACK_TOGGLE: this.updateLoopbackState,
        RTC_CONNECTION_STATE: this.updateLoopbackState,
        VOICE_FILTER_APPLIED: this.updateLoopbackState,
        AUDIO_TOGGLE_SELF_MUTE: this.updateLoopbackState,
        AUDIO_SET_TEMPORARY_SELF_MUTE: this.updateLoopbackState,
        AUDIO_SET_SELF_MUTE: this.updateLoopbackState,
    };
    stores = new Map().set(a.A, this.handleExperimentStateChange);
    handleExperimentStateChange() {
        !_() && l.Ay.getVoiceFilterPlaybackEnabled() && (0, c.K)(!1);
    }
    updateLoopbackState() {
        let e = f();
        e !== l.Ay.getLoopbackReasons().has("voice_filter") && r.A.setLoopback("voice_filter", e);
    }
}
let p = new h();
