"use strict";
n.d(t, { A: () => c });
var r = n(73153),
    i = n(272355),
    s = n(854492),
    a = n(734057),
    o = n(967198),
    l = n(403362);
class u extends i.A {
    _initialize() {
        r.h.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect),
            r.h.subscribe("LOGOUT", this.handleLogout);
    }
    _terminate() {
        r.h.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect),
            r.h.unsubscribe("LOGOUT", this.handleLogout);
    }
    handleVoiceChannelSelect = (e) => {
        let { channelId: t, guildId: n } = e;
        if (null != t) {
            let e = a.A.getChannel(t);
            if (null == e || e.isGuildStageVoice()) return;
        }
        this.terminate(), this.handleDisconnectFromStageChannel(null == t ? null : (n ?? null));
    };
    handleDisconnectFromStageChannel = (e) => {
        let t = o.A.getGuildId();
        (0, s.A)([t, e].filter(l.Vq));
    };
    handleLogout = () => {
        this.terminate(), this.handleDisconnectFromStageChannel(null);
    };
}
let c = new u();
