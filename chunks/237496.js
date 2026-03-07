"use strict";
n.d(t, { A: () => I });
var r = n(311907),
    i = n(73153),
    s = n(961350),
    a = n(734057),
    o = n(430452),
    l = n(576705),
    u = n(383501),
    c = n(977997),
    d = n(652215);
let _ = !0,
    f = !0;
function p(e) {
    return null == e || !!e.suppress || null != e.requestToSpeakTimestamp;
}
function h() {
    let e,
        t = u.A.getChannelId();
    if (null == t) e = !0;
    else {
        let n = a.A.getChannel(t),
            r = c.A.getVoiceState(n?.getGuildId(), s.default.getId());
        e =
            o.Ay.getMode() !== d.TBI.VOICE_ACTIVITY ||
            null == n ||
            n.isPrivate() ||
            n.isGuildStageVoice() ||
            l.A.can(d.xBc.USE_VAD, n) ||
            p(r);
    }
    return _ !== e && ((f = e), (_ = e), i.h.dispatch({ type: "SET_VAD_PERMISSION", hasPermission: _ }), !0);
}
function m(e) {
    let { voiceStates: t } = e;
    return t.some((e) => {
        let { userId: t } = e;
        return t === s.default.getId() && h();
    });
}
function E() {
    f = !0;
}
function g() {
    f = _;
}
class A extends r.Ay.Store {
    static displayName = "PermissionVADStore";
    initialize() {
        this.waitFor(s.default, a.A, o.Ay, l.A, u.A, c.A);
    }
    shouldShowWarning() {
        return !f;
    }
    canUseVoiceActivity() {
        return _;
    }
}
let I = new A(i.h, {
    RTC_CONNECTION_STATE: h,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: h,
    AUDIO_SET_MODE: h,
    CHANNEL_UPDATES: h,
    THREAD_UPDATE: h,
    GUILD_ROLE_UPDATE: h,
    GUILD_MEMBER_UPDATE: h,
    IMPERSONATE_UPDATE: h,
    IMPERSONATE_STOP: h,
    VOICE_STATE_UPDATES: m,
    AUDIO_TOGGLE_SELF_MUTE: g,
    PERMISSION_CLEAR_VAD_WARNING: E,
});
