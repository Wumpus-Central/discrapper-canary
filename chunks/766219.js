n.d(t, { A: () => d }), n(896048);
var r = n(73153),
    i = n(272355),
    a = n(854492),
    s = n(734057),
    o = n(967198),
    l = n(403362);
function c(e, t, n) {
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
class u extends i.A {
    _initialize() {
        r.h.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect),
            r.h.subscribe("LOGOUT", this.handleLogout);
    }
    _terminate() {
        r.h.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect),
            r.h.unsubscribe("LOGOUT", this.handleLogout);
    }
    constructor(...e) {
        super(...e),
            c(this, "handleVoiceChannelSelect", (e) => {
                let { channelId: t, guildId: n } = e;
                if (null != t) {
                    let e = s.A.getChannel(t);
                    if (null == e || e.isGuildStageVoice()) return;
                }
                this.terminate();
                let r = null == t ? null : null != n ? n : null;
                this.handleDisconnectFromStageChannel(r);
            }),
            c(this, "handleDisconnectFromStageChannel", (e) => {
                let t = o.A.getGuildId();
                (0, a.A)([t, e].filter(l.Vq));
            }),
            c(this, "handleLogout", () => {
                this.terminate(), this.handleDisconnectFromStageChannel(null);
            });
    }
}
let d = new u();
