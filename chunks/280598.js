"use strict";
n.d(t, { A: () => A }), n(938796);
var r = n(665260),
    i = n(439372),
    s = n(976860),
    a = n(696451),
    o = n(71393),
    l = n(967198),
    u = n(927813),
    d = n(817818),
    c = n(591552),
    _ = n(967305),
    f = n(652215),
    E = n(746080),
    h = n(340837);
let p = null,
    m = null;
class g extends i.A {
    actions = {
        GUILD_DELETE: (e) => this.handleGuildDelete(e),
        CHANNEL_SELECT: (e) => this.handleChannelSelect(e),
        POST_CONNECTION_OPEN: (e) => this.handleConnectionOpen(e),
    };
    handleConnectionOpen = (e) => {
        null != (p = p ?? l.A.getGuildId() ?? null) && this._openOnboardingIfIncomplete(p);
    };
    handleChannelSelect = (e) => {
        let { guildId: t, channelId: n } = e;
        if ((p === t && m === n) || ((p = t ?? null), (m = n ?? null), null == p || null == m)) return;
        let r = o.A.getGuild(t);
        null != r &&
            r.features.has(f.GuildFeatures.COMMUNITY) &&
            c.A.shouldFetchPrompts(p, 8 * u.A.Millis.HOUR) &&
            (0, d.Tg)(p),
            this._openOnboardingIfIncomplete(p, n);
    };
    handleGuildDelete = (e) => {
        let { guild: t } = e;
        (0, _.Jg)(t.id);
    };
    _openOnboardingIfIncomplete = async (e, t) => {
        if ((0, _.Ih)(e)) return void (0, s.pX)(f.BVt.CHANNEL(e, E.VV.GUILD_ONBOARDING));
        let n = o.A.getGuild(e);
        if (null == n || !n.features.has(f.GuildFeatures.GUILD_ONBOARDING)) return;
        let i = a.Ay.getSelfMember(e);
        !(null == i || (0, r.Lt)(i.flags ?? 0, h.D.COMPLETED_ONBOARDING)) &&
            (0, r.Lt)(i.flags ?? 0, h.D.STARTED_ONBOARDING) &&
            (await (0, _.default)({ guildId: e }), (0, s.pX)(f.BVt.CHANNEL(e, t)));
    };
}
let A = new g();
