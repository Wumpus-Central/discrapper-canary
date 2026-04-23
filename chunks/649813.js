"use strict";
n.d(t, { A: () => E });
var i = n(228366),
    r = n(956793),
    s = n(439372),
    a = n(976860),
    o = n(345942),
    l = n(969341),
    d = n(309010),
    _ = n(967198),
    u = n(652215);
class c extends s.A {
    actions = {
        GUILD_CREATE: this.handleGuildCreate,
        CHANNEL_CREATE: this.handleChannelCreate,
        LOGOUT: this.handleLogout,
    };
    handleGuildCreate(e) {
        let { guild: t } = e,
            n = d.A.getChannelId(u.ME),
            i = d.A.getVoiceChannelId();
        t.id === n && (0, o.u)(t.id),
            t.id === i && !1 !== t.unavailable && null == i && r.default.selectVoiceChannel((0, d.c)(t.id));
    }
    handleChannelCreate(e) {
        let { channel: t } = e;
        if (t.type !== u.rbe.GROUP_DM) return;
        let n = t.originChannelId,
            i = d.A.getChannelId(u.eGj);
        null == _.A.getGuildId() && null != n && n === i && (0, a.pX)(u.BVt.CHANNEL(u.ME, t.id)),
            null != n && n === d.A.getVoiceChannelId() && r.default.selectVoiceChannel(t.id, l.Ay.isVideoEnabled());
    }
    handleLogout() {
        i.h.dispatch({
            type: "VOICE_CHANNEL_SELECT",
            channelId: null,
            guildId: null,
            video: !1,
            currentVoiceChannelId: null,
            joinVoiceId: null,
        });
    }
}
let E = new c();
