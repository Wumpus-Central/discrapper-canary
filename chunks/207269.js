n.d(t, { Z: () => m }), n(388685);
var r = n(704215),
    i = n(570140),
    a = n(147913),
    o = n(605236),
    s = n(430824),
    l = n(496675),
    c = n(619574),
    u = n(876612),
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
                    a = (0, o.un)(r.z.GAME_ONE_USER_SIGNUPS),
                    s = (0, u.v)('SignUpManager'),
                    l = (0, c.e)('SignUpManager', !1),
                    _ = (0, o.un)(r.z.GENSHIN_USER_SIGNUPS);
                return !t || n || a
                    ? !s || l || _
                        ? void 0
                        : void i.Z.dispatch({
                              type: 'ENABLE_USER_SIGN_UP',
                              key: 'genshin-user'
                          })
                    : void i.Z.dispatch({
                          type: 'ENABLE_USER_SIGN_UP',
                          key: 'valorant-user'
                      });
            }),
            p(this, 'handleChannelSelect', (e) => {
                let { guildId: t } = e;
                if (null == t) return;
                let n = (0, o.un)(r.z.GAME_ONE_USER_SIGNUPS),
                    a = (0, o.un)(r.z.GENSHIN_USER_SIGNUPS);
                if (n && a) return;
                let u = (0, d.t)('SignUpManager'),
                    f = (0, c.e)('SignUpManager');
                if (!u && !f) return;
                let p = s.Z.getGuild(t);
                if (null != p) {
                    if (p.hasFeature(_.oNc.VALORANT_L30) && l.Z.can(_.Plq.MANAGE_GUILD, p) && !n)
                        return void i.Z.dispatch({
                            type: 'ENABLE_GUILD_SIGN_UP',
                            key: 'valorant-admin',
                            guildId: t
                        });
                    if (p.hasFeature(_.oNc.GENSHIN_L30) && l.Z.can(_.Plq.MANAGE_GUILD, p) && !a)
                        return void i.Z.dispatch({
                            type: 'ENABLE_GUILD_SIGN_UP',
                            key: 'genshin-admin',
                            guildId: t
                        });
                }
            });
    }
}
let m = new h();
