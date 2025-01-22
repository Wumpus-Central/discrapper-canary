var i = r(47120);
var a = r(147913),
    o = r(358221),
    s = r(729052),
    l = r(592125),
    u = r(979651),
    c = r(556076);
function d(e, n, r) {
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
class f extends a.Z {
    handleVoiceChannelSelect(e) {
        let { channelId: n, guildId: r } = e;
        if (null == n || null == r) return;
        let i = l.Z.getChannel(n);
        if (null != i && (0, s.vS)(i) && i.isGuildVoice()) {
            let e = o.Z.getParticipants(n).length,
                r = u.Z.isInChannel(n),
                i = e === (r ? 1 : 0),
                a = e === (r ? 2 : 1);
            i ? c.y(n, i) : a && c.y(n, i);
        }
    }
    constructor(...e) {
        super(...e), d(this, 'actions', { VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect });
    }
}
n.Z = new f();
