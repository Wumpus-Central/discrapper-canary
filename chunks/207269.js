n.d(t, { Z: () => m }), n(47120);
var i = n(704215),
    r = n(570140),
    a = n(147913),
    s = n(605236),
    o = n(430824),
    l = n(496675),
    u = n(619574),
    c = n(876612),
    d = n(828312),
    f = n(994840),
    _ = n(981631);
function p(e, t, n) {
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
class h extends a.Z {
    constructor(...e) {
        super(...e),
            p(this, 'actions', {
                POST_CONNECTION_OPEN: (e) => this.handleConnectionOpen(e),
                CHANNEL_SELECT: (e) => this.handleChannelSelect(e)
            }),
            p(this, 'handleConnectionOpen', (e) => {
                let t = (0, f.jZ)('SignUpManager'),
                    n = (0, d.t)('SignUpManager', !1),
                    a = (0, s.un)(i.z.GAME_ONE_USER_SIGNUPS),
                    o = (0, c.v)('SignUpManager'),
                    l = (0, u.e)('SignUpManager', !1),
                    _ = (0, s.un)(i.z.GENSHIN_USER_SIGNUPS);
                if (t && !n && !a) {
                    r.Z.dispatch({
                        type: 'ENABLE_USER_SIGN_UP',
                        key: 'valorant-user'
                    });
                    return;
                }
                if (o && !l && !_) {
                    r.Z.dispatch({
                        type: 'ENABLE_USER_SIGN_UP',
                        key: 'genshin-user'
                    });
                    return;
                }
            }),
            p(this, 'handleChannelSelect', (e) => {
                let { guildId: t } = e;
                if (null == t) return;
                let n = (0, s.un)(i.z.GAME_ONE_USER_SIGNUPS),
                    a = (0, s.un)(i.z.GENSHIN_USER_SIGNUPS);
                if (n && a) return;
                let c = (0, d.t)('SignUpManager'),
                    f = (0, u.e)('SignUpManager');
                if (!c && !f) return;
                let p = o.Z.getGuild(t);
                if (null != p) {
                    if (p.hasFeature(_.oNc.VALORANT_L30) && l.Z.can(_.Plq.MANAGE_GUILD, p) && !n) {
                        r.Z.dispatch({
                            type: 'ENABLE_GUILD_SIGN_UP',
                            key: 'valorant-admin',
                            guildId: t
                        });
                        return;
                    }
                    if (p.hasFeature(_.oNc.GENSHIN_L30) && l.Z.can(_.Plq.MANAGE_GUILD, p) && !a) {
                        r.Z.dispatch({
                            type: 'ENABLE_GUILD_SIGN_UP',
                            key: 'genshin-admin',
                            guildId: t
                        });
                        return;
                    }
                }
            });
    }
}
let m = new h();
