n.d(t, {
    A: () => m,
}),
    n(896048);
var r = n(439372),
    i = n(532622),
    a = n(961350),
    s = n(734057),
    o = n(977997),
    l = n(69555),
    c = n(140547),
    u = n(242919),
    d = n(846218),
    f = n(708455),
    p = n(652215);

function _(e, t, n) {
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
class h extends r.A {
    constructor(...e) {
        super(...e),
            _(this, "previousVoiceChannelId", void 0),
            _(this, "actions", {
                POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
                VOICE_CHANNEL_SELECT: (e) => this.handleVoiceChannelSelect(e),
                GUILD_MEMBER_UPDATE: (e) => this.handleGuildMemberUpdate(e),
                LOGOUT: () => this.handleLogout(),
            }),
            _(this, "handlePostConnectionOpen", () => {
                (0, l.jI)();
            }),
            _(this, "handleVoiceChannelSelect", (e) => {
                let { channelId: t, guildId: n } = e,
                    { enableHangStatus: r, setDefaultStatus: a } = (0, c.ko)({
                        guildId: null != n ? n : p.dJq,
                        location: "HangStatusManager",
                    });
                if (null == n && null == t) {
                    this.handleDisconnectFromVoiceChannel(), (this.previousVoiceChannelId = t);
                    return;
                }
                if (
                    !r ||
                    t === this.previousVoiceChannelId ||
                    ((this.previousVoiceChannelId = t), null == n || null == t)
                )
                    return;
                let o = s.A.getChannel(t);
                if (
                    null == o ||
                    o.type !== p.rbe.GUILD_VOICE ||
                    !(0, i.qC)(o, !0) ||
                    null != u.A.getCurrentHangStatus()
                )
                    return;
                let _ = u.A.getCurrentDefaultStatus();
                if (null != _) {
                    if (_.status === f.Kk.CUSTOM && null != _.customHangStatus) {
                        let { status: e, emoji: t } = _.customHangStatus;
                        if (null != t && !(0, d.n)(t, o)) {
                            a && (0, l.Iq)(f.Kk.CHILLING);
                            return;
                        }
                        (0, l.hS)(e, t);
                    } else if (null != _.status) return void (0, l.Iq)(_.status);
                    return;
                }
                a && (0, l.Iq)(f.Kk.CHILLING);
            }),
            _(this, "handleGuildMemberUpdate", (e) => {
                let { user: t, guildId: n } = e;
                if (t.id !== a.default.getId()) return;
                let r = o.A.getCurrentClientVoiceChannelId(n);
                if (null == r || null == u.A.getCurrentHangStatus()) return;
                let c = s.A.getChannel(r);
                (0, i.qC)(c, !0) || (0, l.eK)();
            }),
            _(this, "handleDisconnectFromVoiceChannel", () => {
                (0, l.eK)();
            }),
            _(this, "handleLogout", () => {
                this.handleDisconnectFromVoiceChannel();
            });
    }
}
let m = new h();
