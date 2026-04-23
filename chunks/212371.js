n.d(t, { A: () => _ });
var i = n(73153),
    r = n(827343),
    a = n(401843),
    l = n(272355),
    s = n(652896),
    o = n(616356),
    d = n(961350),
    u = n(734057),
    c = n(430452),
    A = n(105530);
class h extends l.A {
    _initialize() {
        i.h.subscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates);
    }
    _terminate() {
        i.h.unsubscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates);
    }
    handleVoiceStateUpdates = (e) => {
        let { voiceStates: t } = e,
            n = d.default.getId();
        t.forEach((e) => {
            e.userId === n &&
                u.A.getChannel(e.channelId)?.isGuildStageVoice() &&
                (0, A.eY)(e) !== A.zF.ON_STAGE &&
                (this.handleStopStream(e), this.handleStopUserVideo());
        });
    };
    handleStopStream = (e) => {
        let t = o.A.getActiveStreamForUser(e.userId, e.guildId);
        null != t && (0, a.vN)((0, s._z)(t), !1);
    };
    handleStopUserVideo = () => {
        c.Ay.isVideoEnabled() && r.A.setVideoEnabled(!1);
    };
}
let _ = new h();
