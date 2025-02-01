n.d(t, { Z: () => d }), n(47120);
var i = n(147913),
    r = n(358221),
    a = n(729052),
    s = n(592125),
    o = n(979651),
    l = n(556076);
function u(e, t, n) {
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
class c extends i.Z {
    handleVoiceChannelSelect(e) {
        let { channelId: t, guildId: n } = e;
        if (null == t || null == n) return;
        let i = s.Z.getChannel(t);
        if (null != i && (0, a.vS)(i) && i.isGuildVoice()) {
            let e = r.Z.getParticipants(t).length,
                n = o.Z.isInChannel(t),
                i = e === (n ? 1 : 0),
                a = e === (n ? 2 : 1);
            i ? l.y(t, i) : a && l.y(t, i);
        }
    }
    constructor(...e) {
        super(...e), u(this, 'actions', { VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect });
    }
}
let d = new c();
