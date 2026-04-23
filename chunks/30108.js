n.d(t, { Ay: () => f, Zl: () => O, bF: () => N });
var i = n(17928),
    r = n(439372),
    a = n(400492),
    s = n(734057),
    _ = n(969341),
    l = n(309010),
    o = n(977997),
    E = n(63995),
    d = n(113783),
    c = n(69407),
    u = n(446600),
    I = n(39938);
let A = !1,
    T = (0, a.Qh)("stage_waiting", "stage_waiting", _.Ay.getOutputVolume() / 400);
function S() {
    let e = l.A.getVoiceChannelId();
    if (null == e) {
        T.stop(), (A = !1);
        return;
    }
    let t = s.A.getChannel(e);
    if (!t?.isGuildStageVoice() || _.Ay.isSelfDeaf()) {
        T.stop(), (A = !1);
        return;
    }
    if (I.A.shouldPlay()) {
        (T.volume = _.Ay.getOutputVolume() / 400), T.loop(), (A = !0);
        return;
    }
    if (u.A.isLive(e)) {
        T.stop(), (A = !1);
        return;
    }
    if (I.A.isMuted()) {
        T.pause(), (A = !1);
        return;
    }
    let n = null != Object.values(o.A.getVoiceStatesForChannel(e)).find((e) => !e.suppress && !e.isVoiceMuted());
    n || A ? n && (T.pause(), (A = !1)) : ((T.volume = _.Ay.getOutputVolume() / 400), T.loop(), (A = !0));
}
function N(e) {
    let t = (0, i.bG)([l.A], () => l.A.getVoiceChannelId() === e),
        n = null != (0, d.E5)(e, c.ip.SPEAKER).find((e) => !e.voiceState.isVoiceMuted()),
        r = (0, i.bG)([u.A], () => u.A.getStageInstanceByChannel(e));
    return t && null == r && !n;
}
function O(e) {
    let t = l.A.getVoiceChannelId() === e,
        n = null != E.A.getMutableParticipants(e, c.ip.SPEAKER).find((e) => !e.voiceState.isVoiceMuted()),
        i = u.A.getStageInstanceByChannel(e);
    return t && null == i && !n;
}
class R extends r.A {
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
            e?.isGuildStageVoice() ? S() : (T.stop(), (A = !1));
        } else T.stop(), (A = !1);
    }
    handleLogout() {
        T.stop(), (A = !1);
    }
    handlePlay(e) {
        let { play: t } = e;
        t ? S() : (T.pause(), (A = !1));
    }
    handleMute(e) {
        let { muted: t } = e;
        t ? (T.pause(), (A = !1)) : S();
    }
    handleVoiceStateUpdates() {
        S();
    }
    handleSetOutputVolume(e) {
        let { volume: t } = e;
        T.volume = t / 400;
    }
    handleToggleSelfDeaf() {
        S();
    }
}
let f = new R();
