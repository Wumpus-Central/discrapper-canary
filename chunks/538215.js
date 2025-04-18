n.d(t, { Z: () => d }), n(388685);
var r = n(147913),
    i = n(358221),
    a = n(729052),
    o = n(592125),
    s = n(979651),
    l = n(556076);
function c(e, t, n) {
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
class u extends r.Z {
    handleVoiceChannelSelect(e) {
        let { channelId: t, guildId: n } = e;
        if (null == t || null == n) return;
        let r = o.Z.getChannel(t);
        if (null != r && (0, a.vS)(r) && r.isGuildVoice()) {
            let e = i.Z.getParticipants(t).length,
                n = s.Z.isInChannel(t),
                r = e === +!!n,
                a = e === (n ? 2 : 1);
            r ? l.y(t, r) : a && l.y(t, r);
        }
    }
    constructor(...e) {
        super(...e), c(this, 'actions', { VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect });
    }
}
let d = new u();
