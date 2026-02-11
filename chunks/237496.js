"use strict";
n.d(t, { A: () => S });
var r = n(311907),
    i = n(73153),
    a = n(555444),
    s = n(961350),
    o = n(734057),
    l = n(430452),
    u = n(576705),
    c = n(383501),
    d = n(977997),
    _ = n(652215);
let f = !0,
    h = !0,
    p = !0;
function g(e) {
    return null == e || !!e.suppress || null != e.requestToSpeakTimestamp;
}
function E() {
    let e,
        t = c.A.getChannelId(),
        n = !1;
    if (null == t) e = !0;
    else {
        let r = o.A.getChannel(t),
            i = d.A.getVoiceState(r?.getGuildId(), s.default.getId());
        n = l.Ay.getMode() === _.TBI.VOICE_ACTIVITY;
        let c =
            (0, a.H)({ location: "doPTT", autoTrackExposure: !1 }).enableLatching &&
            l.Ay.getModeOptions().pttLatchingEnabled;
        e = !(n || c) || null == r || r.isPrivate() || r.isGuildStageVoice() || u.A.can(_.xBc.USE_VAD, r) || g(i);
    }
    let r = e || !n,
        E = e || n;
    if (f === e && h === E) return !1;
    (p = r), (f = r), (h = E), i.h.dispatch({ type: "SET_VAD_PERMISSION", hasPermission: f, hasLatchPermission: h });
}
function A(e) {
    let { voiceStates: t } = e;
    return t.some((e) => {
        let { userId: t } = e;
        return t === s.default.getId() && E();
    });
}
function I() {
    p = !0;
}
function T() {
    p = f;
}
class y extends r.Ay.Store {
    static displayName = "PermissionVADStore";
    initialize() {
        this.waitFor(s.default, o.A, l.Ay, u.A, c.A, d.A);
    }
    shouldShowWarning() {
        return !p;
    }
    canUseVoiceActivity() {
        return f;
    }
    canUseLatching() {
        return h;
    }
}
let S = new y(i.h, {
    RTC_CONNECTION_STATE: E,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: E,
    AUDIO_SET_MODE: E,
    CHANNEL_UPDATES: E,
    THREAD_UPDATE: E,
    GUILD_ROLE_UPDATE: E,
    GUILD_MEMBER_UPDATE: E,
    IMPERSONATE_UPDATE: E,
    IMPERSONATE_STOP: E,
    VOICE_STATE_UPDATES: A,
    AUDIO_TOGGLE_SELF_MUTE: T,
    PERMISSION_CLEAR_VAD_WARNING: I,
});
