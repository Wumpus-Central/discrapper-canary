"use strict";
n.d(t, { Ay: () => S, Zl: () => T, bF: () => I });
var r = n(311907),
    i = n(439372),
    a = n(400492),
    s = n(734057),
    o = n(430452),
    l = n(309010),
    u = n(977997),
    c = n(63995),
    d = n(113783),
    _ = n(69407),
    f = n(446600),
    h = n(39938);
let p = (e) => e / 400,
    g = !1,
    E = (0, a.Qh)("stage_waiting", "stage_waiting", p(o.Ay.getOutputVolume()));
function A() {
    let e = l.A.getVoiceChannelId();
    if (null == e) {
        E.stop(), (g = !1);
        return;
    }
    let t = s.A.getChannel(e);
    if (!t?.isGuildStageVoice() || o.Ay.isSelfDeaf()) {
        E.stop(), (g = !1);
        return;
    }
    if (h.A.shouldPlay()) {
        (E.volume = p(o.Ay.getOutputVolume())), E.loop(), (g = !0);
        return;
    }
    if (f.A.isLive(e)) {
        E.stop(), (g = !1);
        return;
    }
    if (h.A.isMuted()) {
        E.pause(), (g = !1);
        return;
    }
    let n = null != Object.values(u.A.getVoiceStatesForChannel(e)).find((e) => !e.suppress && !e.isVoiceMuted());
    n || g ? n && (E.pause(), (g = !1)) : ((E.volume = p(o.Ay.getOutputVolume())), E.loop(), (g = !0));
}
function I(e) {
    let t = (0, r.bG)([l.A], () => l.A.getVoiceChannelId() === e),
        n = null != (0, d.E5)(e, _.ip.SPEAKER).find((e) => !e.voiceState.isVoiceMuted()),
        i = (0, r.bG)([f.A], () => f.A.getStageInstanceByChannel(e));
    return t && null == i && !n;
}
function T(e) {
    let t = l.A.getVoiceChannelId() === e,
        n = null != c.A.getMutableParticipants(e, _.ip.SPEAKER).find((e) => !e.voiceState.isVoiceMuted()),
        r = f.A.getStageInstanceByChannel(e);
    return t && null == r && !n;
}
class y extends i.A {
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
            e?.isGuildStageVoice() ? A() : (E.stop(), (g = !1));
        } else E.stop(), (g = !1);
    }
    handleLogout() {
        E.stop(), (g = !1);
    }
    handlePlay(e) {
        let { play: t } = e;
        t ? A() : (E.pause(), (g = !1));
    }
    handleMute(e) {
        let { muted: t } = e;
        t ? (E.pause(), (g = !1)) : A();
    }
    handleVoiceStateUpdates() {
        A();
    }
    handleSetOutputVolume(e) {
        let { volume: t } = e;
        E.volume = p(t);
    }
    handleToggleSelfDeaf() {
        A();
    }
}
let S = new y();
