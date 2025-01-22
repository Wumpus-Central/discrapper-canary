r.d(n, {
    U5: function () {
        return T;
    },
    pp: function () {
        return I;
    }
});
var i = r(47120);
var a = r(442837),
    o = r(147913),
    s = r(592125),
    l = r(131951),
    u = r(944486),
    c = r(979651),
    d = r(557177),
    f = r(565799),
    p = r(431328),
    h = r(501655),
    _ = r(427679),
    m = r(754277);
function g(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let E = (e) => e / 400,
    v = !1,
    y = (0, d.tu)('stage_waiting', 'stage_waiting', E(l.Z.getOutputVolume()));
function b() {
    let e = u.Z.getVoiceChannelId();
    if (null == e) {
        y.stop(), (v = !1);
        return;
    }
    let n = s.Z.getChannel(e);
    if (!(null == n ? void 0 : n.isGuildStageVoice()) || l.Z.isSelfDeaf()) {
        y.stop(), (v = !1);
        return;
    }
    if (m.Z.shouldPlay()) {
        (y.volume = E(l.Z.getOutputVolume())), y.loop(), (v = !0);
        return;
    }
    if (_.Z.isLive(e)) {
        y.stop(), (v = !1);
        return;
    }
    if (m.Z.isMuted()) {
        y.pause(), (v = !1);
        return;
    }
    let r = null != Object.values(c.Z.getVoiceStatesForChannel(e)).find((e) => !e.suppress && !e.isVoiceMuted());
    r || v ? r && (y.pause(), (v = !1)) : ((y.volume = E(l.Z.getOutputVolume())), y.loop(), (v = !0));
}
function I(e) {
    let n = (0, a.e7)([u.Z], () => u.Z.getVoiceChannelId() === e),
        r = null != (0, p.w8)(e, h.pV.SPEAKER).find((e) => !e.voiceState.isVoiceMuted()),
        i = (0, a.e7)([_.Z], () => _.Z.getStageInstanceByChannel(e));
    return n && null == i && !r;
}
function T(e) {
    let n = u.Z.getVoiceChannelId() === e,
        r = null != f.Z.getMutableParticipants(e, h.pV.SPEAKER).find((e) => !e.voiceState.isVoiceMuted()),
        i = _.Z.getStageInstanceByChannel(e);
    return n && null == i && !r;
}
class S extends o.Z {
    handleVoiceChannelSelect(e) {
        let { channelId: n } = e;
        if (null != n) {
            let e = s.Z.getChannel(n);
            (null == e ? void 0 : e.isGuildStageVoice()) ? b() : (y.stop(), (v = !1));
        } else y.stop(), (v = !1);
    }
    handleLogout() {
        y.stop(), (v = !1);
    }
    handlePlay(e) {
        let { play: n } = e;
        n ? b() : (y.pause(), (v = !1));
    }
    handleMute(e) {
        let { muted: n } = e;
        n ? (y.pause(), (v = !1)) : b();
    }
    handleVoiceStateUpdates() {
        b();
    }
    handleSetOutputVolume(e) {
        let { volume: n } = e;
        y.volume = E(n);
    }
    handleToggleSelfDeaf() {
        b();
    }
    constructor(...e) {
        super(...e),
            g(this, 'actions', {
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
n.ZP = new S();
