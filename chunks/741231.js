"use strict";
n.d(t, { A: () => P });
var i = n(121197),
    r = n(584682),
    s = n(892340),
    a = n(976860),
    o = n(345942),
    l = n(734057),
    u = n(376943),
    c = n(308528),
    d = n(717125),
    _ = n(41200),
    h = n(496767),
    f = n(134413),
    p = n(713125),
    E = n(473529),
    m = n(960253),
    g = n(469993),
    A = n(836039),
    I = n(555325),
    T = n(287809),
    S = n(521427),
    y = n(488803),
    N = n(56595),
    v = n(871123),
    C = n(353202),
    R = n(317525),
    O = n(71393),
    b = n(403362),
    D = n(652215),
    L = n(746080);
async function w(e) {
    let { guildId: t, channelId: n } = e,
        i = O.A.getGuild(t),
        r = R.A.getUnsafeMutableRoles(t);
    if (null == i && t !== D.ME && n !== L.VV.GAME_SHOP) return !1;
    if (null == n) return !0;
    if ((0, L.jq)(n))
        switch (n) {
            case L.VV.ROLE_SUBSCRIPTIONS:
                return (0, m.l8)(t, r);
            case L.VV.SERVER_MONETIZATION_ONBOARDING:
                let s;
                return (
                    null != i &&
                    ((s = i.ownerId === T.default.getCurrentUser()?.id),
                    (0, I.V9)({
                        guild: i,
                        isOwner: s,
                        canManageGuildRoleSubscriptions: (0, I.X9)(i),
                        isUserInCreatorMonetizationEligibleCountry: (0, g.Z1)(),
                        shouldRestrictUpdatingRoleSubscriptionSettings: (0, A.mk)(i.id),
                    }))
                );
            case L.VV.GAME_SHOP:
                return (0, v.jz)(i ?? { id: t, type: "id-only" });
            case L.VV.GUILD_SHOP:
                return (0, _.K)(i, r);
            case L.VV.MEMBER_APPLICATIONS:
                return (0, h.h)(t);
            case L.VV.GUILD_HOME:
                return (0, E.K)(t);
            case L.VV.CHANNEL_BROWSER:
                return null != i && i.features.has(D.GuildFeatures.COMMUNITY);
            case L.VV.GUILD_ONBOARDING:
                return p.Ay.shouldShowOnboarding(t);
            case L.VV.CUSTOMIZE_COMMUNITY:
                return null != i && i.features.has(D.GuildFeatures.COMMUNITY);
            case L.VV.MEMBER_SAFETY:
                return (0, f.Ml)(t);
            case L.VV.GUILD_BOOSTS:
                return !0;
            case L.VV.REPORT_TO_MOD:
                return null != i && (0, N.A)(i);
            case L.VV.GAME_SERVERS:
                return (
                    (0, y.TS)(t, "isAccessibleChannelOrThreadPath") &&
                    null != i &&
                    i.features.has(D.GuildFeatures.GAME_SERVERS)
                );
            case L.VV.GUILD_OFFICIAL_MESSAGES:
                return (0, S.GP)(i, "isAccessibleChannelOrThreadPath");
            default:
                (0, b.xb)(n);
        }
    let a = l.A.getChannel(n);
    return (
        (null != a ||
            (await C.A.loadThread(n),
            null == (a = l.A.getChannel(n)) && t === D.ME && (a = await c.A.openChannel(n)),
            null != a)) &&
        ((0, u.nc)(a) || d.A.isChannelGatedAndVisible(t, n))
    );
}
var M = n(9588);
async function P(e, t) {
    let n = (0, u.FM)(e);
    if (null != n) {
        let { guildId: e, channelId: r, diceCount: s, diceSides: o } = n;
        (0, i.t)(r, s, o), (0, a.pX)(D.BVt.CHANNEL(e, r), t);
        return;
    }
    let c = (0, u.vu)(e);
    if (null != c && !(await w(c))) return void (0, M.showInaccessibleLinkModal)({ kind: "channel" });
    if (null == c) return void (0, a.pX)(e, t);
    let d = (function (e) {
        if (null == e.channelId) return e;
        let t = l.A.getChannel(e.channelId);
        if (null == t) return e;
        let n = (0, r.j)(t);
        return { ...e, guildId: n ?? D.ME };
    })(c);
    null == d.channelId
        ? (0, o.u)(d.guildId)
        : (0, s.C$)(d.channelId) && (0, s.C$)(d.threadId)
          ? null != d.threadId
              ? (0, a.pX)(D.BVt.CHANNEL_THREAD_VIEW(d.guildId, d.channelId, d.threadId, d.messageId), t)
              : (0, a.pX)(D.BVt.CHANNEL(d.guildId, d.channelId, d.messageId), t)
          : (0, M.showInaccessibleReportPostModal)();
}
