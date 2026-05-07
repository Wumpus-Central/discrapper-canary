"use strict";
n.d(t, { A: () => f });
var i = n(228366),
    r = n(730852),
    s = n(439372),
    a = n(976860),
    o = n(345942),
    l = n(235058),
    u = n(309010),
    c = n(967198),
    d = n(652215);
class _ extends s.A {
    actions = {
        GUILD_CREATE: this.handleGuildCreate,
        CHANNEL_CREATE: this.handleChannelCreate,
        LOGOUT: this.handleLogout,
    };
    handleGuildCreate(e) {
        let { guild: t } = e,
            n = u.A.getChannelId(d.ME),
            i = u.A.getVoiceChannelId();
        t.id === n && (0, o.u)(t.id),
            t.id === i && !1 !== t.unavailable && null == i && r.default.selectVoiceChannel((0, u.c)(t.id));
    }
    handleChannelCreate(e) {
        let { channel: t } = e;
        if (t.type !== d.rbe.GROUP_DM) return;
        let n = t.originChannelId,
            i = u.A.getChannelId(d.eGj);
        null == c.A.getGuildId() && null != n && n === i && (0, a.pX)(d.BVt.CHANNEL(d.ME, t.id)),
            null != n && n === u.A.getVoiceChannelId() && r.default.selectVoiceChannel(t.id, l.Ay.isVideoEnabled());
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
let f = new _();
