n.d(t, { Z: () => I });
var r,
    i = n(442837),
    a = n(570140),
    o = n(383451),
    s = n(314897),
    l = n(592125),
    c = n(131951),
    u = n(496675),
    d = n(19780),
    f = n(979651),
    p = n(981631);
function _(e, t, n) {
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
let m = !0,
    h = !0,
    g = !0;
function E(e) {
    return null == e || !!e.suppress || null != e.requestToSpeakTimestamp;
}
function b() {
    let e,
        t = d.Z.getChannelId(),
        n = !1;
    if (null == t) e = !0;
    else {
        let r = l.Z.getChannel(t),
            i = f.Z.getVoiceState(null == r ? void 0 : r.getGuildId(), s.default.getId());
        n = c.Z.getMode() === p.pM4.VOICE_ACTIVITY;
        let a =
            (0, o.f)({
                location: "doPTT",
                autoTrackExposure: !1,
            }).enableLatching && c.Z.getModeOptions().pttLatchingEnabled;
        e = !(n || a) || null == r || r.isPrivate() || r.isGuildStageVoice() || u.Z.can(p.Plq.USE_VAD, r) || E(i);
    }
    let r = e || !n,
        i = e || n;
    if (m === e && h === i) return !1;
    (g = r),
        (m = r),
        (h = i),
        a.Z.dispatch({
            type: "SET_VAD_PERMISSION",
            hasPermission: m,
            hasLatchPermission: h,
        });
}
function y(e) {
    let { voiceStates: t } = e;
    return t.some((e) => {
        let { userId: t } = e;
        return t === s.default.getId() && b();
    });
}
function O() {
    g = !0;
}
function v() {
    g = m;
}
class S extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(s.default, l.Z, c.Z, u.Z, d.Z, f.Z);
    }
    shouldShowWarning() {
        return !g;
    }
    canUseVoiceActivity() {
        return m;
    }
    canUseLatching() {
        return h;
    }
}
_(S, "displayName", "PermissionVADStore");
let I = new S(a.Z, {
    RTC_CONNECTION_STATE: b,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: b,
    AUDIO_SET_MODE: b,
    CHANNEL_UPDATES: b,
    THREAD_UPDATE: b,
    GUILD_ROLE_UPDATE: b,
    GUILD_MEMBER_UPDATE: b,
    IMPERSONATE_UPDATE: b,
    IMPERSONATE_STOP: b,
    VOICE_STATE_UPDATES: y,
    AUDIO_TOGGLE_SELF_MUTE: v,
    PERMISSION_CLEAR_VAD_WARNING: O,
});
