n.d(t, { Ay: () => p, Zl: () => N, bF: () => S });
var i = n(17928),
    a = n(439372),
    r = n(400492),
    s = n(734057),
    l = n(51760),
    o = n(309010),
    d = n(977997),
    c = n(63995),
    _ = n(113783),
    E = n(69407),
    u = n(446600),
    A = n(39938);
let I = !1,
    T = (0, r.Qh)("stage_waiting", "stage_waiting", l.Ay.getOutputVolume() / 400);
function h() {
    let e = o.A.getVoiceChannelId();
    if (null == e) {
        T.stop(), (I = !1);
        return;
    }
    let t = s.A.getChannel(e);
    if (!t?.isGuildStageVoice() || l.Ay.isSelfDeaf()) {
        T.stop(), (I = !1);
        return;
    }
    if (A.A.shouldPlay()) {
        (T.volume = l.Ay.getOutputVolume() / 400), T.loop(), (I = !0);
        return;
    }
    if (u.A.isLive(e)) {
        T.stop(), (I = !1);
        return;
    }
    if (A.A.isMuted()) {
        T.pause(), (I = !1);
        return;
    }
    let n = null != Object.values(d.A.getVoiceStatesForChannel(e)).find((e) => !e.suppress && !e.isVoiceMuted());
    n || I ? n && (T.pause(), (I = !1)) : ((T.volume = l.Ay.getOutputVolume() / 400), T.loop(), (I = !0));
}
function S(e) {
    let t = (0, i.bG)([o.A], () => o.A.getVoiceChannelId() === e),
        n = null != (0, _.E5)(e, E.ip.SPEAKER).find((e) => !e.voiceState.isVoiceMuted()),
        a = (0, i.bG)([u.A], () => u.A.getStageInstanceByChannel(e));
    return t && null == a && !n;
}
function N(e) {
    let t = o.A.getVoiceChannelId() === e,
        n = null != c.A.getMutableParticipants(e, E.ip.SPEAKER).find((e) => !e.voiceState.isVoiceMuted()),
        i = u.A.getStageInstanceByChannel(e);
    return t && null == i && !n;
}
class f extends a.A {
    actions = {
        VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect,
        LOGOUT: this.handleLogout,
        STAGE_MUSIC_MUTE: this.handleMute,
        STAGE_MUSIC_PLAY: this.handlePlay,
        VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
        AUDIO_SET_OUTPUT_VOLUME: this.handleSetOutputVolume,
        AUDIO_TOGGLE_SELF_DEAF: this.handleToggleSelfDeaf,
    };
    handleVoiceChannelSelect(e) {
        let { channelId: t } = e;
        if (null != t) {
            let e = s.A.getChannel(t);
            e?.isGuildStageVoice() ? h() : (T.stop(), (I = !1));
        } else T.stop(), (I = !1);
    }
    handleLogout() {
        T.stop(), (I = !1);
    }
    handlePlay(e) {
        let { play: t } = e;
        t ? h() : (T.pause(), (I = !1));
    }
    handleMute(e) {
        let { muted: t } = e;
        t ? (T.pause(), (I = !1)) : h();
    }
    handleVoiceStateUpdates() {
        h();
    }
    handleSetOutputVolume(e) {
        let { volume: t } = e;
        T.volume = t / 400;
    }
    handleToggleSelfDeaf() {
        h();
    }
}
let p = new f();
