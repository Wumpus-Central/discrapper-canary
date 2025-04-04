n.d(t, { Z: () => p }), n(47120);
var r = n(570140),
    i = n(287734),
    o = n(147913),
    a = n(703656),
    s = n(769654),
    l = n(131951),
    c = n(944486),
    u = n(914010),
    d = n(981631);
function f(e, t, n) {
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
class _ extends o.Z {
    handleGuildCreate(e) {
        let { guild: t } = e,
            n = c.Z.getChannelId(d.ME),
            r = c.Z.getVoiceChannelId();
        t.id === n && (0, s.X)(t.id), t.id === r && !1 !== t.unavailable && null == r && i.default.selectVoiceChannel((0, c.C)(t.id));
    }
    handleChannelCreate(e) {
        let { channel: t } = e;
        if (t.type !== d.d4z.GROUP_DM) return;
        let n = t.originChannelId,
            r = c.Z.getChannelId(d.kod);
        null == u.Z.getGuildId() && null != n && n === r && (0, a.uL)(d.Z5c.CHANNEL(d.ME, t.id)), null != n && n === c.Z.getVoiceChannelId() && i.default.selectVoiceChannel(t.id, l.Z.isVideoEnabled());
    }
    handleLogout() {
        r.Z.dispatch({
            type: 'VOICE_CHANNEL_SELECT',
            channelId: null,
            guildId: null,
            video: !1,
            currentVoiceChannelId: null
        });
    }
    constructor(...e) {
        super(...e),
            f(this, 'actions', {
                GUILD_CREATE: this.handleGuildCreate,
                CHANNEL_CREATE: this.handleChannelCreate,
                LOGOUT: this.handleLogout
            });
    }
}
let p = new _();
