n.d(t, { A: () => d });
var i = n(439372),
    r = n(280450),
    a = n(734057),
    s = n(813564),
    l = n(652215);
class o extends i.A {
    prevConnected = !1;
    tempMutedChannel = null;
    handleRTCConnectionState = (e) => {
        let { state: t, channelId: n } = e,
            i = t === l.S7L.RTC_CONNECTED,
            r = i && !this.prevConnected,
            o = a.A.getChannel(n),
            d = o?.getGuildId(),
            c = this.tempMutedChannel === n;
        r && null != d && (c ? (this.tempMutedChannel = null) : (0, s.fh)(d)), (this.prevConnected = i);
    };
    handleMute = (e) => {
        let { channelId: t } = e;
        this.tempMutedChannel = t;
    };
    handleVoiceStateUpdates = (e) => {
        let { voiceStates: t } = e,
            n = r.default.getId(),
            i = r.default.getSessionId();
        t.forEach((e) => {
            let { userId: t, channelId: r, sessionId: a } = e;
            t === n && a !== i && null != r && (this.tempMutedChannel = r);
        });
    };
    actions = {
        RTC_CONNECTION_STATE: this.handleRTCConnectionState,
        SOUNDBOARD_MUTE_JOIN_SOUND: this.handleMute,
        VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
    };
}
let d = new o();
