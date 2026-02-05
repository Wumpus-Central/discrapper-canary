"use strict";
n.d(t, { A: () => u });
var r = n(439372),
    i = n(961350),
    a = n(734057),
    s = n(536432),
    o = n(652215);
class l extends r.A {
    prevConnected = !1;
    tempMutedChannel = null;
    handleRTCConnectionState = (e) => {
        let { state: t, channelId: n } = e,
            r = t === o.S7L.RTC_CONNECTED,
            i = r && !this.prevConnected,
            l = a.A.getChannel(n),
            u = l?.getGuildId(),
            c = this.tempMutedChannel === n;
        i && null != u && (c ? (this.tempMutedChannel = null) : (0, s.fh)(u)), (this.prevConnected = r);
    };
    handleMute = (e) => {
        let { channelId: t } = e;
        this.tempMutedChannel = t;
    };
    handleVoiceStateUpdates = (e) => {
        let { voiceStates: t } = e,
            n = i.default.getId(),
            r = i.default.getSessionId();
        t.forEach((e) => {
            let { userId: t, channelId: i, sessionId: a } = e;
            t === n && a !== r && null != i && (this.tempMutedChannel = i);
        });
    };
    actions = {
        RTC_CONNECTION_STATE: this.handleRTCConnectionState,
        SOUNDBOARD_MUTE_JOIN_SOUND: this.handleMute,
        VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
    };
}
let u = new l();
