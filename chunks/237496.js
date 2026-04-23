"use strict";
n.d(t, { A: () => E });
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
function p() {
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
            null == r ||
            !!r.suppress ||
            null != r.requestToSpeakTimestamp;
    }
    return _ !== e && ((f = e), (_ = e), i.h.dispatch({ type: "SET_VAD_PERMISSION", hasPermission: _ }), !0);
}
class h extends r.Ay.Store {
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
let E = new h(i.h, {
    RTC_CONNECTION_STATE: p,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: p,
    AUDIO_SET_MODE: p,
    CHANNEL_UPDATES: p,
    THREAD_UPDATE: p,
    GUILD_ROLE_UPDATE: p,
    GUILD_MEMBER_UPDATE: p,
    IMPERSONATE_UPDATE: p,
    IMPERSONATE_STOP: p,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e;
        return t.some((e) => {
            let { userId: t } = e;
            return t === s.default.getId() && p();
        });
    },
    AUDIO_TOGGLE_SELF_MUTE: function () {
        f = _;
    },
    PERMISSION_CLEAR_VAD_WARNING: function () {
        f = !0;
    },
});
