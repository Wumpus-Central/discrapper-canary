"use strict";
n.d(t, { Ay: () => y, Zl: () => I, bF: () => A });
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
    p = n(39938);
let h = (e) => e / 400,
    m = !1,
    g = (0, a.Qh)("stage_waiting", "stage_waiting", h(o.A.getOutputVolume()));
function E() {
    let e = l.A.getVoiceChannelId();
    if (null == e) {
        g.stop(), (m = !1);
        return;
    }
    let t = s.A.getChannel(e);
    if (!t?.isGuildStageVoice() || o.A.isSelfDeaf()) {
        g.stop(), (m = !1);
        return;
    }
    if (p.A.shouldPlay()) {
        (g.volume = h(o.A.getOutputVolume())), g.loop(), (m = !0);
        return;
    }
    if (f.A.isLive(e)) {
        g.stop(), (m = !1);
        return;
    }
    if (p.A.isMuted()) {
        g.pause(), (m = !1);
        return;
    }
    let n = null != Object.values(u.A.getVoiceStatesForChannel(e)).find((e) => !e.suppress && !e.isVoiceMuted());
    n || m ? n && (g.pause(), (m = !1)) : ((g.volume = h(o.A.getOutputVolume())), g.loop(), (m = !0));
}
function A(e) {
    let t = (0, r.bG)([l.A], () => l.A.getVoiceChannelId() === e),
        n = null != (0, d.E5)(e, _.ip.SPEAKER).find((e) => !e.voiceState.isVoiceMuted()),
        i = (0, r.bG)([f.A], () => f.A.getStageInstanceByChannel(e));
    return t && null == i && !n;
}
function I(e) {
    let t = l.A.getVoiceChannelId() === e,
        n = null != c.A.getMutableParticipants(e, _.ip.SPEAKER).find((e) => !e.voiceState.isVoiceMuted()),
        r = f.A.getStageInstanceByChannel(e);
    return t && null == r && !n;
}
class T extends i.A {
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
            e?.isGuildStageVoice() ? E() : (g.stop(), (m = !1));
        } else g.stop(), (m = !1);
    }
    handleLogout() {
        g.stop(), (m = !1);
    }
    handlePlay(e) {
        let { play: t } = e;
        t ? E() : (g.pause(), (m = !1));
    }
    handleMute(e) {
        let { muted: t } = e;
        t ? (g.pause(), (m = !1)) : E();
    }
    handleVoiceStateUpdates() {
        E();
    }
    handleSetOutputVolume(e) {
        let { volume: t } = e;
        g.volume = h(t);
    }
    handleToggleSelfDeaf() {
        E();
    }
}
let y = new T();
