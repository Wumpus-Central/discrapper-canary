"use strict";
n.d(t, { A: () => L });
var i = n(584682),
    r = n(892340),
    s = n(976860),
    a = n(345942),
    o = n(734057),
    l = n(376943),
    u = n(717125),
    c = n(41200),
    d = n(496767),
    _ = n(134413),
    f = n(713125),
    h = n(473529),
    p = n(960253),
    E = n(469993),
    m = n(836039),
    g = n(555325),
    A = n(287809),
    I = n(488803),
    T = n(56595),
    S = n(871123),
    N = n(353202),
    y = n(317525),
    C = n(71393),
    v = n(403362),
    O = n(652215),
    R = n(746080);
async function b(e) {
    let { guildId: t, channelId: n } = e,
        i = C.A.getGuild(t),
        r = y.A.getUnsafeMutableRoles(t);
    if (null == i && t !== O.ME && n !== R.VV.GAME_SHOP) return !1;
    if (null == n) return !0;
    if ((0, R.jq)(n))
        switch (n) {
            case R.VV.ROLE_SUBSCRIPTIONS:
                return (0, p.l8)(t, r);
            case R.VV.SERVER_MONETIZATION_ONBOARDING:
                let s;
                return (
                    null != i &&
                    ((s = i.ownerId === A.default.getCurrentUser()?.id),
                    (0, g.V9)({
                        guild: i,
                        isOwner: s,
                        canManageGuildRoleSubscriptions: (0, g.X9)(i),
                        isUserInCreatorMonetizationEligibleCountry: (0, E.Z1)(),
                        shouldRestrictUpdatingRoleSubscriptionSettings: (0, m.mk)(i.id),
                    }))
                );
            case R.VV.GAME_SHOP:
                return (0, S.jz)(i ?? { id: t, type: "id-only" });
            case R.VV.GUILD_SHOP:
                return (0, c.K)(i, r);
            case R.VV.MEMBER_APPLICATIONS:
                return (0, d.h)(t);
            case R.VV.GUILD_HOME:
                return (0, h.K)(t);
            case R.VV.CHANNEL_BROWSER:
                return null != i && i.features.has(O.GuildFeatures.COMMUNITY);
            case R.VV.GUILD_ONBOARDING:
                return f.Ay.shouldShowOnboarding(t);
            case R.VV.CUSTOMIZE_COMMUNITY:
                return null != i && i.features.has(O.GuildFeatures.COMMUNITY);
            case R.VV.MEMBER_SAFETY:
                return (0, _.Ml)(t);
            case R.VV.GUILD_BOOSTS:
                return !0;
            case R.VV.REPORT_TO_MOD:
                return null != i && (0, T.A)(i);
            case R.VV.GAME_SERVERS:
                return (
                    (0, I.TS)(t, "isAccessibleChannelOrThreadPath") &&
                    null != i &&
                    i.features.has(O.GuildFeatures.GAME_SERVERS)
                );
            default:
                (0, v.xb)(n);
        }
    let a = o.A.getChannel(n);
    return (
        (null != a || (await N.A.loadThread(n), null != (a = o.A.getChannel(n)))) &&
        ((0, l.nc)(a) || u.A.isChannelGatedAndVisible(t, n))
    );
}
var D = n(9588);
async function L(e, t) {
    let n = (0, l.vu)(e);
    if (null != n && !(await b(n))) return void (0, D.K)({ kind: "channel" });
    if (null == n) return void (0, s.pX)(e, t);
    let u = (function (e) {
        if (null == e.channelId) return e;
        let t = o.A.getChannel(e.channelId);
        if (null == t) return e;
        let n = (0, i.j)(t);
        return { ...e, guildId: n ?? O.ME };
    })(n);
    null == u.channelId
        ? (0, a.u)(u.guildId)
        : (0, r.C$)(u.channelId) && (0, r.C$)(u.threadId)
          ? null != u.threadId
              ? (0, s.pX)(O.BVt.CHANNEL_THREAD_VIEW(u.guildId, u.channelId, u.threadId, u.messageId), t)
              : (0, s.pX)(O.BVt.CHANNEL(u.guildId, u.channelId, u.messageId), t)
          : (0, D.E)();
}
