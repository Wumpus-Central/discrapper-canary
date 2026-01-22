n.d(t, {
    Ay: () => v,
    Zl: () => O,
    bF: () => y,
}),
    n(896048);
var r = n(311907),
    i = n(439372),
    a = n(400492),
    s = n(734057),
    o = n(430452),
    l = n(309010),
    c = n(977997),
    u = n(63995),
    d = n(113783),
    f = n(69407),
    p = n(446600),
    _ = n(39938);

function h(e, t, n) {
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
let m = (e) => e / 400,
    g = !1,
    E = (0, a.Qh)("stage_waiting", "stage_waiting", m(o.A.getOutputVolume()));

function b() {
    let e = l.A.getVoiceChannelId();
    if (null == e) {
        E.stop(), (g = !1);
        return;
    }
    let t = s.A.getChannel(e);
    if (!(null == t ? void 0 : t.isGuildStageVoice()) || o.A.isSelfDeaf()) {
        E.stop(), (g = !1);
        return;
    }
    if (_.A.shouldPlay()) {
        (E.volume = m(o.A.getOutputVolume())), E.loop(), (g = !0);
        return;
    }
    if (p.A.isLive(e)) {
        E.stop(), (g = !1);
        return;
    }
    if (_.A.isMuted()) {
        E.pause(), (g = !1);
        return;
    }
    let n = null != Object.values(c.A.getVoiceStatesForChannel(e)).find((e) => !e.suppress && !e.isVoiceMuted());
    n || g ? n && (E.pause(), (g = !1)) : ((E.volume = m(o.A.getOutputVolume())), E.loop(), (g = !0));
}

function y(e) {
    let t = (0, r.bG)([l.A], () => l.A.getVoiceChannelId() === e),
        n = null != (0, d.E5)(e, f.ip.SPEAKER).find((e) => !e.voiceState.isVoiceMuted()),
        i = (0, r.bG)([p.A], () => p.A.getStageInstanceByChannel(e));
    return t && null == i && !n;
}

function O(e) {
    let t = l.A.getVoiceChannelId() === e,
        n = null != u.A.getMutableParticipants(e, f.ip.SPEAKER).find((e) => !e.voiceState.isVoiceMuted()),
        r = p.A.getStageInstanceByChannel(e);
    return t && null == r && !n;
}
class A extends i.A {
    handleVoiceChannelSelect(e) {
        let { channelId: t } = e;
        if (null != t) {
            let e = s.A.getChannel(t);
            (null == e ? void 0 : e.isGuildStageVoice()) ? b() : (E.stop(), (g = !1));
        } else E.stop(), (g = !1);
    }
    handleLogout() {
        E.stop(), (g = !1);
    }
    handlePlay(e) {
        let { play: t } = e;
        t ? b() : (E.pause(), (g = !1));
    }
    handleMute(e) {
        let { muted: t } = e;
        t ? (E.pause(), (g = !1)) : b();
    }
    handleVoiceStateUpdates() {
        b();
    }
    handleSetOutputVolume(e) {
        let { volume: t } = e;
        E.volume = m(t);
    }
    handleToggleSelfDeaf() {
        b();
    }
    constructor(...e) {
        super(...e),
            h(this, "actions", {
                VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect,
                LOGOUT: this.handleLogout,
                STAGE_MUSIC_MUTE: this.handleMute,
                STAGE_MUSIC_PLAY: this.handlePlay,
                VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
                AUDIO_SET_OUTPUT_VOLUME: this.handleSetOutputVolume,
                AUDIO_TOGGLE_SELF_DEAF: this.handleToggleSelfDeaf,
            });
    }
}
let v = new A();
