n.d(t, { Z: () => T });
var i,
    r = n(442837),
    a = n(570140),
    s = n(314897),
    o = n(592125),
    l = n(131951),
    u = n(496675),
    c = n(19780),
    d = n(979651),
    f = n(981631);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let p = !0,
    h = !0;
function m(e) {
    return null == e || !!e.suppress || null != e.requestToSpeakTimestamp;
}
function g() {
    let e;
    let t = c.Z.getChannelId();
    if (null == t) e = !0;
    else {
        let n = o.Z.getChannel(t),
            i = d.Z.getVoiceState(null == n ? void 0 : n.getGuildId(), s.default.getId());
        e = l.Z.getMode() !== f.pM4.VOICE_ACTIVITY || null == n || n.isPrivate() || n.isGuildStageVoice() || u.Z.can(f.Plq.USE_VAD, n) || m(i);
    }
    if (p === e) return !1;
    (h = e),
        (p = e),
        a.Z.dispatch({
            type: 'SET_VAD_PERMISSION',
            hasPermission: p
        });
}
function E(e) {
    let { voiceStates: t } = e;
    return t.some((e) => {
        let { userId: t } = e;
        return t === s.default.getId() && g();
    });
}
function v() {
    h = !0;
}
function y() {
    h = p;
}
class I extends (i = r.ZP.Store) {
    initialize() {
        this.waitFor(u.Z, l.Z, c.Z, d.Z);
    }
    shouldShowWarning() {
        return !h;
    }
    canUseVoiceActivity() {
        return p;
    }
}
_(I, 'displayName', 'PermissionVADStore');
let T = new I(a.Z, {
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
    AUDIO_TOGGLE_SELF_MUTE: y,
    PERMISSION_CLEAR_VAD_WARNING: v
});
