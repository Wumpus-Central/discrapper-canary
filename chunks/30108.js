"use strict";
n.d(t, { Ay: () => T, Zl: () => A, bF: () => g });
var r = n(311907),
    i = n(439372),
    s = n(400492),
    a = n(734057),
    o = n(430452),
    l = n(309010),
    u = n(977997),
    c = n(63995),
    d = n(113783),
    _ = n(69407),
    f = n(446600),
    p = n(39938);
let h = !1,
    E = (0, s.Qh)("stage_waiting", "stage_waiting", o.Ay.getOutputVolume() / 400);
function m() {
    let e = l.A.getVoiceChannelId();
    if (null == e) {
        E.stop(), (h = !1);
        return;
    }
    let t = a.A.getChannel(e);
    if (!t?.isGuildStageVoice() || o.Ay.isSelfDeaf()) {
        E.stop(), (h = !1);
        return;
    }
    if (p.A.shouldPlay()) {
        (E.volume = o.Ay.getOutputVolume() / 400), E.loop(), (h = !0);
        return;
    }
    if (f.A.isLive(e)) {
        E.stop(), (h = !1);
        return;
    }
    if (p.A.isMuted()) {
        E.pause(), (h = !1);
        return;
    }
    let n = null != Object.values(u.A.getVoiceStatesForChannel(e)).find((e) => !e.suppress && !e.isVoiceMuted());
    n || h ? n && (E.pause(), (h = !1)) : ((E.volume = o.Ay.getOutputVolume() / 400), E.loop(), (h = !0));
}
function g(e) {
    let t = (0, r.bG)([l.A], () => l.A.getVoiceChannelId() === e),
        n = null != (0, d.E5)(e, _.ip.SPEAKER).find((e) => !e.voiceState.isVoiceMuted()),
        i = (0, r.bG)([f.A], () => f.A.getStageInstanceByChannel(e));
    return t && null == i && !n;
}
function A(e) {
    let t = l.A.getVoiceChannelId() === e,
        n = null != c.A.getMutableParticipants(e, _.ip.SPEAKER).find((e) => !e.voiceState.isVoiceMuted()),
        r = f.A.getStageInstanceByChannel(e);
    return t && null == r && !n;
}
class I extends i.A {
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
            let e = a.A.getChannel(t);
            e?.isGuildStageVoice() ? m() : (E.stop(), (h = !1));
        } else E.stop(), (h = !1);
    }
    handleLogout() {
        E.stop(), (h = !1);
    }
    handlePlay(e) {
        let { play: t } = e;
        t ? m() : (E.pause(), (h = !1));
    }
    handleMute(e) {
        let { muted: t } = e;
        t ? (E.pause(), (h = !1)) : m();
    }
    handleVoiceStateUpdates() {
        m();
    }
    handleSetOutputVolume(e) {
        let { volume: t } = e;
        E.volume = t / 400;
    }
    handleToggleSelfDeaf() {
        m();
    }
}
let T = new I();
