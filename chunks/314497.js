"use strict";
n.d(t, { A: () => h });
var r = n(439372),
    i = n(532622),
    a = n(961350),
    s = n(734057),
    o = n(977997),
    l = n(69555),
    u = n(140547),
    c = n(242919),
    d = n(846218),
    _ = n(708455),
    f = n(652215);
class p extends r.A {
    previousVoiceChannelId;
    actions = {
        POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
        VOICE_CHANNEL_SELECT: (e) => this.handleVoiceChannelSelect(e),
        GUILD_MEMBER_UPDATE: (e) => this.handleGuildMemberUpdate(e),
        LOGOUT: () => this.handleLogout(),
    };
    handlePostConnectionOpen = () => {
        (0, l.jI)();
    };
    handleVoiceChannelSelect = (e) => {
        let { channelId: t, guildId: n } = e,
            { enableHangStatus: r, setDefaultStatus: a } = (0, u.ko)({
                guildId: n ?? f.dJq,
                location: "HangStatusManager",
            });
        if (null == n && null == t) {
            this.handleDisconnectFromVoiceChannel(), (this.previousVoiceChannelId = t);
            return;
        }
        if (!r || t === this.previousVoiceChannelId || ((this.previousVoiceChannelId = t), null == n || null == t))
            return;
        let o = s.A.getChannel(t);
        if (null == o || o.type !== f.rbe.GUILD_VOICE || !(0, i.qC)(o, !0) || null != c.A.getCurrentHangStatus())
            return;
        let p = c.A.getCurrentDefaultStatus();
        if (null != p) {
            if (p.status === _.Kk.CUSTOM && null != p.customHangStatus) {
                let { status: e, emoji: t } = p.customHangStatus;
                if (null != t && !(0, d.n)(t, o)) {
                    a && (0, l.Iq)(_.Kk.CHILLING);
                    return;
                }
                (0, l.hS)(e, t);
            } else if (null != p.status) return void (0, l.Iq)(p.status);
            return;
        }
        a && (0, l.Iq)(_.Kk.CHILLING);
    };
    handleGuildMemberUpdate = (e) => {
        let { user: t, guildId: n } = e;
        if (t.id !== a.default.getId()) return;
        let r = o.A.getCurrentClientVoiceChannelId(n);
        if (null == r || null == c.A.getCurrentHangStatus()) return;
        let u = s.A.getChannel(r);
        (0, i.qC)(u, !0) || (0, l.eK)();
    };
    handleDisconnectFromVoiceChannel = () => {
        (0, l.eK)();
    };
    handleLogout = () => {
        this.handleDisconnectFromVoiceChannel();
    };
}
let h = new p();
