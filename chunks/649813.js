n.d(t, { A: () => _ }), n(896048);
var r = n(73153),
    i = n(956793),
    a = n(439372),
    s = n(976860),
    o = n(345942),
    l = n(430452),
    c = n(309010),
    u = n(967198),
    d = n(652215);
function f(e, t, n) {
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
class p extends a.A {
    handleGuildCreate(e) {
        let { guild: t } = e,
            n = c.A.getChannelId(d.ME),
            r = c.A.getVoiceChannelId();
        t.id === n && (0, o.u)(t.id),
            t.id === r && !1 !== t.unavailable && null == r && i.default.selectVoiceChannel((0, c.c)(t.id));
    }
    handleChannelCreate(e) {
        let { channel: t } = e;
        if (t.type !== d.rbe.GROUP_DM) return;
        let n = t.originChannelId,
            r = c.A.getChannelId(d.eGj);
        null == u.A.getGuildId() && null != n && n === r && (0, s.pX)(d.BVt.CHANNEL(d.ME, t.id)),
            null != n && n === c.A.getVoiceChannelId() && i.default.selectVoiceChannel(t.id, l.A.isVideoEnabled());
    }
    handleLogout() {
        r.h.dispatch({
            type: "VOICE_CHANNEL_SELECT",
            channelId: null,
            guildId: null,
            video: !1,
            currentVoiceChannelId: null,
            joinVoiceId: null,
        });
    }
    constructor(...e) {
        super(...e),
            f(this, "actions", {
                GUILD_CREATE: this.handleGuildCreate,
                CHANNEL_CREATE: this.handleChannelCreate,
                LOGOUT: this.handleLogout,
            });
    }
}
let _ = new p();
