"use strict";
n.d(t, { Ay: () => T, Zl: () => A, bF: () => g });
var i = n(17928),
    r = n(439372),
    s = n(400492),
    a = n(734057),
    o = n(235058),
    l = n(309010),
    u = n(977997),
    c = n(63995),
    d = n(113783),
    _ = n(518769),
    f = n(446600),
    h = n(39938);
let p = !1,
    E = (0, s.Qh)("stage_waiting", "stage_waiting", o.Ay.getOutputVolume() / 400);
function m() {
    let e = l.A.getVoiceChannelId();
    if (null == e) {
        E.stop(), (p = !1);
        return;
    }
    let t = a.A.getChannel(e);
    if (!t?.isGuildStageVoice() || o.Ay.isSelfDeaf()) {
        E.stop(), (p = !1);
        return;
    }
    if (h.A.shouldPlay()) {
        (E.volume = o.Ay.getOutputVolume() / 400), E.loop(), (p = !0);
        return;
    }
    if (f.A.isLive(e)) {
        E.stop(), (p = !1);
        return;
    }
    if (h.A.isMuted()) {
        E.pause(), (p = !1);
        return;
    }
    let n = null != Object.values(u.A.getVoiceStatesForChannel(e)).find((e) => !e.suppress && !e.isVoiceMuted());
    n || p ? n && (E.pause(), (p = !1)) : ((E.volume = o.Ay.getOutputVolume() / 400), E.loop(), (p = !0));
}
function g(e) {
    let t = (0, i.bG)([l.A], () => l.A.getVoiceChannelId() === e),
        n = null != (0, d.E5)(e, _.ip.SPEAKER).find((e) => !e.voiceState.isVoiceMuted()),
        r = (0, i.bG)([f.A], () => f.A.getStageInstanceByChannel(e));
    return t && null == r && !n;
}
function A(e) {
    let t = l.A.getVoiceChannelId() === e,
        n = null != c.A.getMutableParticipants(e, _.ip.SPEAKER).find((e) => !e.voiceState.isVoiceMuted()),
        i = f.A.getStageInstanceByChannel(e);
    return t && null == i && !n;
}
class I extends r.A {
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
            e?.isGuildStageVoice() ? m() : (E.stop(), (p = !1));
        } else E.stop(), (p = !1);
    }
    handleLogout() {
        E.stop(), (p = !1);
    }
    handlePlay(e) {
        let { play: t } = e;
        t ? m() : (E.pause(), (p = !1));
    }
    handleMute(e) {
        let { muted: t } = e;
        t ? (E.pause(), (p = !1)) : m();
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
