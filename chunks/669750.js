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
    f = n(981631);
function _(e, t, n) {
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
            _(this, 'previousVoiceChannelId', void 0),
            _(this, 'actions', {
                POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
                VOICE_CHANNEL_SELECT: (e) => this.handleVoiceChannelSelect(e),
                GUILD_MEMBER_UPDATE: (e) => this.handleGuildMemberUpdate(e),
                LOGOUT: () => this.handleLogout()
            }),
            _(this, 'handlePostConnectionOpen', () => {
                (0, l.UP)();
            }),
            _(this, 'handleVoiceChannelSelect', (e) => {
                let { channelId: t, guildId: n } = e,
                    { enableHangStatus: r, setDefaultStatus: a } = c.n.getCurrentConfig(
                        {
                            guildId: null != n ? n : f.lds,
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
                if (null == s || s.type !== f.d4z.GUILD_VOICE || !(0, i.wQ)(s, !0) || null != u.Z.getCurrentHangStatus()) return;
                let _ = u.Z.getCurrentDefaultStatus();
                if ((null == _ ? void 0 : _.expiresAt) != null && (null == _ ? void 0 : _.expiresAt) >= Date.now()) {
                    if (_.status === f.tNA.CUSTOM && null != _.customHangStatus) {
                        let { status: e, emoji: t } = _.customHangStatus;
                        if (null != t && !(0, d.K)(t, s)) return;
                        (0, l._s)(e, t);
                    } else if (null != _.status) return void (0, l.Zx)(_.status);
                    return;
                }
                a && (0, l.Zx)(f.tNA.CHILLING);
            }),
            _(this, 'handleGuildMemberUpdate', (e) => {
                let { user: t, guildId: n } = e;
                if (t.id !== a.default.getId()) return;
                let r = s.Z.getCurrentClientVoiceChannelId(n);
                if (null == r || null == u.Z.getCurrentHangStatus()) return;
                let c = o.Z.getChannel(r);
                (0, i.wQ)(c, !0) || (0, l.Sc)();
            }),
            _(this, 'handleDisconnectFromVoiceChannel', () => {
                (0, l.Sc)();
            }),
            _(this, 'handleLogout', () => {
                this.handleDisconnectFromVoiceChannel();
            }));
    }
}
let h = new p();
