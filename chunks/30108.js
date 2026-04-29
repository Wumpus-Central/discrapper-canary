n.d(t, { Ay: () => R, Zl: () => O, bF: () => N });
var i = n(17928),
    a = n(439372),
    r = n(400492),
    _ = n(734057),
    s = n(51760),
    l = n(309010),
    o = n(977997),
    E = n(63995),
    d = n(113783),
    c = n(69407),
    u = n(446600),
    I = n(39938);
let T = !1,
    A = (0, r.Qh)("stage_waiting", "stage_waiting", s.Ay.getOutputVolume() / 400);
function S() {
    let e = l.A.getVoiceChannelId();
    if (null == e) {
        A.stop(), (T = !1);
        return;
    }
    let t = _.A.getChannel(e);
    if (!t?.isGuildStageVoice() || s.Ay.isSelfDeaf()) {
        A.stop(), (T = !1);
        return;
    }
    if (I.A.shouldPlay()) {
        (A.volume = s.Ay.getOutputVolume() / 400), A.loop(), (T = !0);
        return;
    }
    if (u.A.isLive(e)) {
        A.stop(), (T = !1);
        return;
    }
    if (I.A.isMuted()) {
        A.pause(), (T = !1);
        return;
    }
    let n = null != Object.values(o.A.getVoiceStatesForChannel(e)).find((e) => !e.suppress && !e.isVoiceMuted());
    n || T ? n && (A.pause(), (T = !1)) : ((A.volume = s.Ay.getOutputVolume() / 400), A.loop(), (T = !0));
}
function N(e) {
    let t = (0, i.bG)([l.A], () => l.A.getVoiceChannelId() === e),
        n = null != (0, d.E5)(e, c.ip.SPEAKER).find((e) => !e.voiceState.isVoiceMuted()),
        a = (0, i.bG)([u.A], () => u.A.getStageInstanceByChannel(e));
    return t && null == a && !n;
}
function O(e) {
    let t = l.A.getVoiceChannelId() === e,
        n = null != E.A.getMutableParticipants(e, c.ip.SPEAKER).find((e) => !e.voiceState.isVoiceMuted()),
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
            let e = _.A.getChannel(t);
            e?.isGuildStageVoice() ? S() : (A.stop(), (T = !1));
        } else A.stop(), (T = !1);
    }
    handleLogout() {
        A.stop(), (T = !1);
    }
    handlePlay(e) {
        let { play: t } = e;
        t ? S() : (A.pause(), (T = !1));
    }
    handleMute(e) {
        let { muted: t } = e;
        t ? (A.pause(), (T = !1)) : S();
    }
    handleVoiceStateUpdates() {
        S();
    }
    handleSetOutputVolume(e) {
        let { volume: t } = e;
        A.volume = t / 400;
    }
    handleToggleSelfDeaf() {
        S();
    }
}
let R = new f();
