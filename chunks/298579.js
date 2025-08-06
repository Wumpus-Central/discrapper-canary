n.d(t, { Z: () => l }), n(388685);
var r = n(147913),
    i = n(592125),
    o = n(851268);
function a(e, t, n) {
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
class s extends r.Z {
    handleVoiceChannelSelect(e) {
        let { channelId: t, guildId: n } = e;
        if (null == t || null == n) return;
        let r = i.Z.getChannel(t);
        null != r && r.isGuildVoice() && o.y(t);
    }
    constructor(...e) {
        super(...e), a(this, "actions", { VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect });
    }
}
let l = new s();
