n.d(t, {
    U5: () => I,
    ZP: () => T,
    pp: () => y
}),
    n(47120);
var i = n(442837),
    r = n(147913),
    a = n(592125),
    s = n(131951),
    o = n(944486),
    l = n(979651),
    u = n(557177),
    c = n(565799),
    d = n(431328),
    f = n(501655),
    _ = n(427679),
    p = n(754277);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let m = (e) => e / 400,
    g = !1,
    E = (0, u.tu)('stage_waiting', 'stage_waiting', m(s.Z.getOutputVolume()));
function v() {
    let e = o.Z.getVoiceChannelId();
    if (null == e) {
        E.stop(), (g = !1);
        return;
    }
    let t = a.Z.getChannel(e);
    if (!(null == t ? void 0 : t.isGuildStageVoice()) || s.Z.isSelfDeaf()) {
        E.stop(), (g = !1);
        return;
    }
    if (p.Z.shouldPlay()) {
        (E.volume = m(s.Z.getOutputVolume())), E.loop(), (g = !0);
        return;
    }
    if (_.Z.isLive(e)) {
        E.stop(), (g = !1);
        return;
    }
    if (p.Z.isMuted()) {
        E.pause(), (g = !1);
        return;
    }
    let n = null != Object.values(l.Z.getVoiceStatesForChannel(e)).find((e) => !e.suppress && !e.isVoiceMuted());
    n || g ? n && (E.pause(), (g = !1)) : ((E.volume = m(s.Z.getOutputVolume())), E.loop(), (g = !0));
}
function y(e) {
    let t = (0, i.e7)([o.Z], () => o.Z.getVoiceChannelId() === e),
        n = null != (0, d.w8)(e, f.pV.SPEAKER).find((e) => !e.voiceState.isVoiceMuted()),
        r = (0, i.e7)([_.Z], () => _.Z.getStageInstanceByChannel(e));
    return t && null == r && !n;
}
function I(e) {
    let t = o.Z.getVoiceChannelId() === e,
        n = null != c.Z.getMutableParticipants(e, f.pV.SPEAKER).find((e) => !e.voiceState.isVoiceMuted()),
        i = _.Z.getStageInstanceByChannel(e);
    return t && null == i && !n;
}
class b extends r.Z {
    handleVoiceChannelSelect(e) {
        let { channelId: t } = e;
        if (null != t) {
            let e = a.Z.getChannel(t);
            (null == e ? void 0 : e.isGuildStageVoice()) ? v() : (E.stop(), (g = !1));
        } else E.stop(), (g = !1);
    }
    handleLogout() {
        E.stop(), (g = !1);
    }
    handlePlay(e) {
        let { play: t } = e;
        t ? v() : (E.pause(), (g = !1));
    }
    handleMute(e) {
        let { muted: t } = e;
        t ? (E.pause(), (g = !1)) : v();
    }
    handleVoiceStateUpdates() {
        v();
    }
    handleSetOutputVolume(e) {
        let { volume: t } = e;
        E.volume = m(t);
    }
    handleToggleSelfDeaf() {
        v();
    }
    constructor(...e) {
        super(...e),
            h(this, 'actions', {
                VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect,
                LOGOUT: this.handleLogout,
                STAGE_MUSIC_MUTE: this.handleMute,
                STAGE_MUSIC_PLAY: this.handlePlay,
                VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
                AUDIO_SET_OUTPUT_VOLUME: this.handleSetOutputVolume,
                AUDIO_TOGGLE_SELF_DEAF: this.handleToggleSelfDeaf
            });
    }
}
let T = new b();
