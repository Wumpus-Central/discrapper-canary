var i,
    a = r(442837),
    o = r(570140),
    s = r(314897),
    l = r(592125),
    u = r(131951),
    c = r(496675),
    d = r(19780),
    f = r(979651),
    p = r(981631);
function h(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let _ = !0,
    m = !0;
function g(e) {
    return null == e || !!e.suppress || null != e.requestToSpeakTimestamp || !1;
}
function E() {
    let e;
    let n = d.Z.getChannelId();
    if (null == n) e = !0;
    else {
        let r = l.Z.getChannel(n),
            i = f.Z.getVoiceState(null == r ? void 0 : r.getGuildId(), s.default.getId());
        e = u.Z.getMode() !== p.pM4.VOICE_ACTIVITY || null == r || r.isPrivate() || r.isGuildStageVoice() || c.Z.can(p.Plq.USE_VAD, r) || g(i);
    }
    if (_ === e) return !1;
    (m = e),
        (_ = e),
        o.Z.dispatch({
            type: 'SET_VAD_PERMISSION',
            hasPermission: _
        });
}
function v(e) {
    let { voiceStates: n } = e;
    return n.some((e) => {
        let { userId: n } = e;
        return n === s.default.getId() && E();
    });
}
function y() {
    m = !0;
}
function b() {
    m = _;
}
class I extends (i = a.ZP.Store) {
    initialize() {
        this.waitFor(c.Z, u.Z, d.Z, f.Z);
    }
    shouldShowWarning() {
        return !m;
    }
    canUseVoiceActivity() {
        return _;
    }
}
h(I, 'displayName', 'PermissionVADStore'),
    (n.Z = new I(o.Z, {
        RTC_CONNECTION_STATE: E,
        MEDIA_ENGINE_SET_AUDIO_ENABLED: E,
        AUDIO_SET_MODE: E,
        CHANNEL_UPDATES: E,
        THREAD_UPDATE: E,
        GUILD_ROLE_UPDATE: E,
        GUILD_MEMBER_UPDATE: E,
        IMPERSONATE_UPDATE: E,
        IMPERSONATE_STOP: E,
        VOICE_STATE_UPDATES: v,
        AUDIO_TOGGLE_SELF_MUTE: b,
        PERMISSION_CLEAR_VAD_WARNING: y
    }));
