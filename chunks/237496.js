n.d(t, {
    A: () => S,
});
var r,
    i = n(311907),
    a = n(73153),
    s = n(555444),
    o = n(961350),
    l = n(734057),
    c = n(430452),
    u = n(576705),
    d = n(383501),
    f = n(977997),
    p = n(652215);

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
let h = !0,
    m = !0,
    g = !0;

function E(e) {
    return null == e || !!e.suppress || null != e.requestToSpeakTimestamp;
}

function b() {
    let e,
        t = d.A.getChannelId(),
        n = !1;
    if (null == t) e = !0;
    else {
        let r = l.A.getChannel(t),
            i = f.A.getVoiceState(null == r ? void 0 : r.getGuildId(), o.default.getId());
        n = c.A.getMode() === p.TBI.VOICE_ACTIVITY;
        let a =
            (0, s.H)({
                location: "doPTT",
                autoTrackExposure: !1,
            }).enableLatching && c.A.getModeOptions().pttLatchingEnabled;
        e = !(n || a) || null == r || r.isPrivate() || r.isGuildStageVoice() || u.A.can(p.xBc.USE_VAD, r) || E(i);
    }
    let r = e || !n,
        i = e || n;
    if (h === e && m === i) return !1;
    (g = r),
        (h = r),
        (m = i),
        a.h.dispatch({
            type: "SET_VAD_PERMISSION",
            hasPermission: h,
            hasLatchPermission: m,
        });
}

function y(e) {
    let { voiceStates: t } = e;
    return t.some((e) => {
        let { userId: t } = e;
        return t === o.default.getId() && b();
    });
}

function O() {
    g = !0;
}

function A() {
    g = h;
}
class v extends (r = i.Ay.Store) {
    initialize() {
        this.waitFor(o.default, l.A, c.A, u.A, d.A, f.A);
    }
    shouldShowWarning() {
        return !g;
    }
    canUseVoiceActivity() {
        return h;
    }
    canUseLatching() {
        return m;
    }
}
_(v, "displayName", "PermissionVADStore");
let S = new v(a.h, {
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
    AUDIO_TOGGLE_SELF_MUTE: A,
    PERMISSION_CLEAR_VAD_WARNING: O,
});
