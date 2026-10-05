(n.d(t, { A: () => T }), n(938796));
var i = n(665260),
    r = n(439372),
    a = n(976860),
    s = n(696451),
    l = n(71393),
    o = n(967198),
    d = n(927813),
    c = n(817818),
    u = n(591552),
    _ = n(608401),
    E = n(652215),
    A = n(746080),
    h = n(340837);
let f = null,
    I = null;
class p extends r.A {
    actions = {
        GUILD_DELETE: (e) => this.handleGuildDelete(e),
        CHANNEL_SELECT: (e) => this.handleChannelSelect(e),
        POST_CONNECTION_OPEN: (e) => this.handleConnectionOpen(e),
    };
    handleConnectionOpen = (e) => {
        null != (f = f ?? o.A.getGuildId() ?? null) && this._openOnboardingIfIncomplete(f);
    };
    handleChannelSelect = (e) => {
        let { guildId: t, channelId: n } = e;
        if ((f === t && I === n) || ((f = t ?? null), (I = n ?? null), null == f || null == I)) return;
        let i = l.A.getGuild(t);
        (null != i &&
            i.features.has(E.GuildFeatures.COMMUNITY) &&
            u.A.shouldFetchPrompts(f, 8 * d.A.Millis.HOUR) &&
            (0, c.Tg)(f),
            this._openOnboardingIfIncomplete(f, n));
    };
    handleGuildDelete = (e) => {
        let { guild: t } = e;
        (0, _.Jg)(t.id);
    };
    _openOnboardingIfIncomplete = async (e, t) => {
        if ((0, _.Ih)(e)) return void (0, a.pX)(E.BVt.CHANNEL(e, A.VV.GUILD_ONBOARDING));
        let n = l.A.getGuild(e);
        if (null == n || !n.features.has(E.GuildFeatures.GUILD_ONBOARDING)) return;
        let r = s.Ay.getSelfMember(e);
        !(null == r || (0, i.Lt)(r.flags ?? 0, h.D.COMPLETED_ONBOARDING)) &&
            (0, i.Lt)(r.flags ?? 0, h.D.STARTED_ONBOARDING) &&
            (await (0, _.default)({ guildId: e }), (0, a.pX)(E.BVt.CHANNEL(e, t)));
    };
}
let T = new p();
