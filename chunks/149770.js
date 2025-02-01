n.d(t, { Z: () => p }), n(47120);
var i = n(570140),
    r = n(287734),
    a = n(147913),
    s = n(703656),
    o = n(769654),
    l = n(131951),
    u = n(944486),
    c = n(914010),
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
class _ extends a.Z {
    handleGuildCreate(e) {
        let { guild: t } = e,
            n = u.Z.getChannelId(d.ME),
            i = u.Z.getVoiceChannelId();
        t.id === n && (0, o.X)(t.id), t.id === i && !1 !== t.unavailable && null == i && r.default.selectVoiceChannel((0, u.C)(t.id));
    }
    handleChannelCreate(e) {
        let { channel: t } = e;
        if (t.type !== d.d4z.GROUP_DM) return;
        let n = t.originChannelId,
            i = u.Z.getChannelId(d.kod);
        null == c.Z.getGuildId() && null != n && n === i && (0, s.uL)(d.Z5c.CHANNEL(d.ME, t.id)), null != n && n === u.Z.getVoiceChannelId() && r.default.selectVoiceChannel(t.id, l.Z.isVideoEnabled());
    }
    handleLogout() {
        i.Z.dispatch({
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
