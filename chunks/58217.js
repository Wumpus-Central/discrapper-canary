n.d(t, { A: () => y }), n(896048), n(938796);
var r = n(665260),
    i = n(439372),
    a = n(976860),
    s = n(696451),
    o = n(71393),
    l = n(967198),
    c = n(927813),
    u = n(817818),
    d = n(591552),
    f = n(967305),
    p = n(652215),
    _ = n(746080),
    h = n(340837);
function m(e, t, n) {
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
let g = null,
    E = null;
class b extends i.A {
    constructor(...e) {
        super(...e),
            m(this, "actions", {
                GUILD_DELETE: (e) => this.handleGuildDelete(e),
                CHANNEL_SELECT: (e) => this.handleChannelSelect(e),
                POST_CONNECTION_OPEN: (e) => this.handleConnectionOpen(e),
            }),
            m(this, "handleConnectionOpen", (e) => {
                var t;
                null != (g = null != (t = null != g ? g : l.A.getGuildId()) ? t : null) &&
                    this._openOnboardingIfIncomplete(g);
            }),
            m(this, "handleChannelSelect", (e) => {
                let { guildId: t, channelId: n } = e;
                if (
                    (g === t && E === n) ||
                    ((g = null != t ? t : null), (E = null != n ? n : null), null == g || null == E)
                )
                    return;
                let r = o.A.getGuild(t);
                null != r &&
                    r.features.has(p.GuildFeatures.COMMUNITY) &&
                    d.A.shouldFetchPrompts(g, 8 * c.A.Millis.HOUR) &&
                    (0, u.Tg)(g),
                    this._openOnboardingIfIncomplete(g, n);
            }),
            m(this, "handleGuildDelete", (e) => {
                let { guild: t } = e;
                (0, f.Jg)(t.id);
            }),
            m(this, "_openOnboardingIfIncomplete", async (e, t) => {
                var n, i;
                if ((0, f.Ih)(e)) return void (0, a.pX)(p.BVt.CHANNEL(e, _.VV.GUILD_ONBOARDING));
                let l = o.A.getGuild(e);
                if (null == l || !l.features.has(p.GuildFeatures.GUILD_ONBOARDING)) return;
                let c = s.Ay.getSelfMember(e);
                !(null == c || (0, r.Lt)(null != (n = c.flags) ? n : 0, h.D.COMPLETED_ONBOARDING)) &&
                    (0, r.Lt)(null != (i = c.flags) ? i : 0, h.D.STARTED_ONBOARDING) &&
                    (await (0, f.default)({ guildId: e }), (0, a.pX)(p.BVt.CHANNEL(e, t)));
            });
    }
}
let y = new b();
