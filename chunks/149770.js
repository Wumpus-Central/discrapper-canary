var i = r(47120);
var a = r(570140),
    o = r(287734),
    s = r(147913),
    l = r(703656),
    u = r(769654),
    c = r(131951),
    d = r(944486),
    f = r(914010),
    p = r(981631);
function h(e, n, r) {
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
class _ extends s.Z {
    handleGuildCreate(e) {
        let { guild: n } = e,
            r = d.Z.getChannelId(p.ME),
            i = d.Z.getVoiceChannelId();
        n.id === r && (0, u.X)(n.id), n.id === i && !1 !== n.unavailable && null == i && o.default.selectVoiceChannel((0, d.C)(n.id));
    }
    handleChannelCreate(e) {
        let { channel: n } = e;
        if (n.type !== p.d4z.GROUP_DM) return;
        let r = n.originChannelId,
            i = d.Z.getChannelId(p.kod);
        null == f.Z.getGuildId() && null != r && r === i && (0, l.uL)(p.Z5c.CHANNEL(p.ME, n.id)), null != r && r === d.Z.getVoiceChannelId() && o.default.selectVoiceChannel(n.id, c.Z.isVideoEnabled());
    }
    handleLogout() {
        a.Z.dispatch({
            type: 'VOICE_CHANNEL_SELECT',
            channelId: null,
            guildId: null,
            video: !1,
            currentVoiceChannelId: null
        });
    }
    constructor(...e) {
        super(...e),
            h(this, 'actions', {
                GUILD_CREATE: this.handleGuildCreate,
                CHANNEL_CREATE: this.handleChannelCreate,
                LOGOUT: this.handleLogout
            });
    }
}
n.Z = new _();
