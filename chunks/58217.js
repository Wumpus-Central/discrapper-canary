"use strict";
n.d(t, { A: () => A }), n(938796);
var r = n(665260),
    i = n(439372),
    a = n(976860),
    s = n(696451),
    o = n(71393),
    l = n(967198),
    u = n(927813),
    c = n(817818),
    d = n(591552),
    _ = n(967305),
    f = n(652215),
    p = n(746080),
    h = n(340837);
let m = null,
    g = null;
class E extends i.A {
    actions = {
        GUILD_DELETE: (e) => this.handleGuildDelete(e),
        CHANNEL_SELECT: (e) => this.handleChannelSelect(e),
        POST_CONNECTION_OPEN: (e) => this.handleConnectionOpen(e),
    };
    handleConnectionOpen = (e) => {
        null != (m = m ?? l.A.getGuildId() ?? null) && this._openOnboardingIfIncomplete(m);
    };
    handleChannelSelect = (e) => {
        let { guildId: t, channelId: n } = e;
        if ((m === t && g === n) || ((m = t ?? null), (g = n ?? null), null == m || null == g)) return;
        let r = o.A.getGuild(t);
        null != r &&
            r.features.has(f.GuildFeatures.COMMUNITY) &&
            d.A.shouldFetchPrompts(m, 8 * u.A.Millis.HOUR) &&
            (0, c.Tg)(m),
            this._openOnboardingIfIncomplete(m, n);
    };
    handleGuildDelete = (e) => {
        let { guild: t } = e;
        (0, _.Jg)(t.id);
    };
    _openOnboardingIfIncomplete = async (e, t) => {
        if ((0, _.Ih)(e)) return void (0, a.pX)(f.BVt.CHANNEL(e, p.VV.GUILD_ONBOARDING));
        let n = o.A.getGuild(e);
        if (null == n || !n.features.has(f.GuildFeatures.GUILD_ONBOARDING)) return;
        let i = s.Ay.getSelfMember(e);
        !(null == i || (0, r.Lt)(i.flags ?? 0, h.D.COMPLETED_ONBOARDING)) &&
            (0, r.Lt)(i.flags ?? 0, h.D.STARTED_ONBOARDING) &&
            (await (0, _.default)({ guildId: e }), (0, a.pX)(f.BVt.CHANNEL(e, t)));
    };
}
let A = new E();
