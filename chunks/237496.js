"use strict";
n.d(t, { A: () => y });
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
    p = !0,
    h = !0;
function m(e) {
    return null == e || !!e.suppress || null != e.requestToSpeakTimestamp;
}
function g() {
    let e,
        t = c.A.getChannelId(),
        n = !1;
    if (null == t) e = !0;
    else {
        let r = o.A.getChannel(t),
            i = d.A.getVoiceState(r?.getGuildId(), s.default.getId());
        n = l.A.getMode() === _.TBI.VOICE_ACTIVITY;
        let c =
            (0, a.H)({ location: "doPTT", autoTrackExposure: !1 }).enableLatching &&
            l.A.getModeOptions().pttLatchingEnabled;
        e = !(n || c) || null == r || r.isPrivate() || r.isGuildStageVoice() || u.A.can(_.xBc.USE_VAD, r) || m(i);
    }
    let r = e || !n,
        g = e || n;
    if (f === e && p === g) return !1;
    (h = r), (f = r), (p = g), i.h.dispatch({ type: "SET_VAD_PERMISSION", hasPermission: f, hasLatchPermission: p });
}
function E(e) {
    let { voiceStates: t } = e;
    return t.some((e) => {
        let { userId: t } = e;
        return t === s.default.getId() && g();
    });
}
function A() {
    h = !0;
}
function I() {
    h = f;
}
class T extends r.Ay.Store {
    static displayName = "PermissionVADStore";
    initialize() {
        this.waitFor(s.default, o.A, l.A, u.A, c.A, d.A);
    }
    shouldShowWarning() {
        return !h;
    }
    canUseVoiceActivity() {
        return f;
    }
    canUseLatching() {
        return p;
    }
}
let y = new T(i.h, {
    RTC_CONNECTION_STATE: g,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: g,
    AUDIO_SET_MODE: g,
    CHANNEL_UPDATES: g,
    THREAD_UPDATE: g,
    GUILD_ROLE_UPDATE: g,
    GUILD_MEMBER_UPDATE: g,
    IMPERSONATE_UPDATE: g,
    IMPERSONATE_STOP: g,
    VOICE_STATE_UPDATES: E,
    AUDIO_TOGGLE_SELF_MUTE: I,
    PERMISSION_CLEAR_VAD_WARNING: A,
});
