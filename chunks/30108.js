n.d(t, { Ay: () => g, Zl: () => T, bF: () => p });
var i = n(17928),
    r = n(439372),
    a = n(400492),
    s = n(734057),
    l = n(360906),
    o = n(309010),
    d = n(977997),
    c = n(63995),
    u = n(113783),
    _ = n(518769),
    E = n(446600),
    A = n(39938);
let h = !1,
    f = (0, a.Qh)("stage_waiting", "stage_waiting", l.Ay.getOutputVolume() / 400);
function I() {
    let e = o.Ay.getVoiceChannelId();
    if (null == e) {
        (f.stop(), (h = !1));
        return;
    }
    let t = s.A.getChannel(e);
    if (!t?.isGuildStageVoice() || l.Ay.isSelfDeaf()) {
        (f.stop(), (h = !1));
        return;
    }
    if (A.A.shouldPlay()) {
        ((f.volume = l.Ay.getOutputVolume() / 400), f.loop(), (h = !0));
        return;
    }
    if (E.A.isLive(e)) {
        (f.stop(), (h = !1));
        return;
    }
    if (A.A.isMuted()) {
        (f.pause(), (h = !1));
        return;
    }
    let n = null != Object.values(d.A.getVoiceStatesForChannel(e)).find((e) => !e.suppress && !e.isVoiceMuted());
    n || h ? n && (f.pause(), (h = !1)) : ((f.volume = l.Ay.getOutputVolume() / 400), f.loop(), (h = !0));
}
function p(e) {
    let t = (0, i.bG)([o.Ay], () => o.Ay.getVoiceChannelId() === e),
        n = null != (0, u.E5)(e, _.ip.SPEAKER).find((e) => !e.voiceState.isVoiceMuted()),
        r = (0, i.bG)([E.A], () => E.A.getStageInstanceByChannel(e));
    return t && null == r && !n;
}
function T(e) {
    let t = o.Ay.getVoiceChannelId() === e,
        n = null != c.A.getMutableParticipants(e, _.ip.SPEAKER).find((e) => !e.voiceState.isVoiceMuted()),
        i = E.A.getStageInstanceByChannel(e);
    return t && null == i && !n;
}
class m extends r.A {
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
            e?.isGuildStageVoice() ? I() : (f.stop(), (h = !1));
        } else (f.stop(), (h = !1));
    }
    handleLogout() {
        (f.stop(), (h = !1));
    }
    handlePlay(e) {
        let { play: t } = e;
        t ? I() : (f.pause(), (h = !1));
    }
    handleMute(e) {
        let { muted: t } = e;
        t ? (f.pause(), (h = !1)) : I();
    }
    handleVoiceStateUpdates() {
        I();
    }
    handleSetOutputVolume(e) {
        let { volume: t } = e;
        f.volume = t / 400;
    }
    handleToggleSelfDeaf() {
        I();
    }
}
let g = new m();
