n.d(t, {
    A: () => u,
}),
    n(896048);
var r = n(439372),
    i = n(961350),
    a = n(734057),
    s = n(536432),
    o = n(652215);

function l(e, t, n) {
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
class c extends r.A {
    constructor(...e) {
        super(...e),
            l(this, "prevConnected", !1),
            l(this, "tempMutedChannel", null),
            l(this, "handleRTCConnectionState", (e) => {
                let { state: t, channelId: n } = e,
                    r = t === o.S7L.RTC_CONNECTED,
                    i = r && !this.prevConnected,
                    l = a.A.getChannel(n),
                    c = null == l ? void 0 : l.getGuildId(),
                    u = this.tempMutedChannel === n;
                i && null != c && (u ? (this.tempMutedChannel = null) : (0, s.fh)(c)), (this.prevConnected = r);
            }),
            l(this, "handleMute", (e) => {
                let { channelId: t } = e;
                this.tempMutedChannel = t;
            }),
            l(this, "handleVoiceStateUpdates", (e) => {
                let { voiceStates: t } = e,
                    n = i.default.getId(),
                    r = i.default.getSessionId();
                t.forEach((e) => {
                    let { userId: t, channelId: i, sessionId: a } = e;
                    t === n && a !== r && null != i && (this.tempMutedChannel = i);
                });
            }),
            l(this, "actions", {
                RTC_CONNECTION_STATE: this.handleRTCConnectionState,
                SOUNDBOARD_MUTE_JOIN_SOUND: this.handleMute,
                VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
            });
    }
}
let u = new c();
