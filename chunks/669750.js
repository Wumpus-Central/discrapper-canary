(n.d(t, { Z: () => h }), n(388685));
var r = n(147913),
    i = n(362721),
    a = n(314897),
    o = n(592125),
    s = n(979651),
    l = n(906605),
    c = n(574176),
    u = n(106301),
    d = n(866071),
    _ = n(981631);
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
class p extends r.Z {
    constructor(...e) {
        (super(...e),
            f(this, 'previousVoiceChannelId', void 0),
            f(this, 'actions', {
                POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
                VOICE_CHANNEL_SELECT: (e) => this.handleVoiceChannelSelect(e),
                GUILD_MEMBER_UPDATE: (e) => this.handleGuildMemberUpdate(e),
                LOGOUT: () => this.handleLogout()
            }),
            f(this, 'handlePostConnectionOpen', () => {
                (0, l.UP)();
            }),
            f(this, 'handleVoiceChannelSelect', (e) => {
                let { channelId: t, guildId: n } = e,
                    { enableHangStatus: r, setDefaultStatus: a } = c.n.getCurrentConfig(
                        {
                            guildId: null != n ? n : _.lds,
                            location: 'HangStatusManager'
                        },
                        { autoTrackExposure: !0 }
                    );
                if (null == n && null == t) {
                    (this.handleDisconnectFromVoiceChannel(), (this.previousVoiceChannelId = t));
                    return;
                }
                if (!r || t === this.previousVoiceChannelId || ((this.previousVoiceChannelId = t), null == n || null == t)) return;
                let s = o.Z.getChannel(t);
                if (null == s || s.type !== _.d4z.GUILD_VOICE || !(0, i.wQ)(s, !0) || null != u.Z.getCurrentHangStatus()) return;
                let f = u.Z.getCurrentDefaultStatus();
                if ((null == f ? void 0 : f.expiresAt) != null && (null == f ? void 0 : f.expiresAt) >= Date.now()) {
                    if (f.status === _.tNA.CUSTOM && null != f.customHangStatus) {
                        let { status: e, emoji: t } = f.customHangStatus;
                        if (null != t && !(0, d.K)(t, s)) return;
                        (0, l._s)(e, t);
                    } else if (null != f.status) return void (0, l.Zx)(f.status);
                    return;
                }
                a && (0, l.Zx)(_.tNA.CHILLING);
            }),
            f(this, 'handleGuildMemberUpdate', (e) => {
                let { user: t, guildId: n } = e;
                if (t.id !== a.default.getId()) return;
                let r = s.Z.getCurrentClientVoiceChannelId(n);
                if (null == r || null == u.Z.getCurrentHangStatus()) return;
                let c = o.Z.getChannel(r);
                (0, i.wQ)(c, !0) || (0, l.Sc)();
            }),
            f(this, 'handleDisconnectFromVoiceChannel', () => {
                (0, l.Sc)();
            }),
            f(this, 'handleLogout', () => {
                this.handleDisconnectFromVoiceChannel();
            }));
    }
}
let h = new p();
