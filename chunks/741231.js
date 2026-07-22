"use strict";
n.d(t, { A: () => w });
var i = n(121197),
    r = n(584682),
    a = n(892340),
    s = n(976860),
    l = n(345942),
    o = n(734057),
    d = n(376943),
    c = n(308528),
    u = n(717125),
    _ = n(41200),
    E = n(496767),
    A = n(134413),
    h = n(713125),
    I = n(473529),
    f = n(960253),
    p = n(469993),
    T = n(836039),
    m = n(555325),
    g = n(287809),
    S = n(470452),
    N = n(521427),
    C = n(488803),
    O = n(56595),
    R = n(871123),
    L = n(353202),
    y = n(317525),
    D = n(71393),
    v = n(403362),
    b = n(652215),
    M = n(746080);
async function P(e) {
    let { guildId: t, channelId: n } = e,
        i = D.A.getGuild(t),
        r = y.A.getUnsafeMutableRoles(t);
    if (null == i && t !== b.ME && n !== M.VV.GAME_SHOP) return !1;
    if (null == n) return !0;
    if ((0, M.jq)(n))
        switch (n) {
            case M.VV.ROLE_SUBSCRIPTIONS:
                return (0, f.l8)(t, r);
            case M.VV.SERVER_MONETIZATION_ONBOARDING:
                let a;
                return (
                    null != i &&
                    ((a = i.ownerId === g.default.getCurrentUser()?.id),
                    (0, m.V9)({
                        guild: i,
                        isOwner: a,
                        canManageGuildRoleSubscriptions: (0, m.X9)(i),
                        isUserInCreatorMonetizationEligibleCountry: (0, p.Z1)(),
                        shouldRestrictUpdatingRoleSubscriptionSettings: (0, T.mk)(i.id),
                    }))
                );
            case M.VV.GAME_SHOP:
                return (0, R.jz)(i ?? { id: t, type: "id-only" });
            case M.VV.GUILD_SHOP:
                return (0, _.K)(i, r);
            case M.VV.MEMBER_APPLICATIONS:
                return (0, E.h)(t);
            case M.VV.GUILD_HOME:
                return (0, I.K)(t);
            case M.VV.CHANNEL_BROWSER:
                return null != i && i.features.has(b.GuildFeatures.COMMUNITY);
            case M.VV.GUILD_ONBOARDING:
                return h.Ay.shouldShowOnboarding(t);
            case M.VV.CUSTOMIZE_COMMUNITY:
                return null != i && i.features.has(b.GuildFeatures.COMMUNITY);
            case M.VV.MEMBER_SAFETY:
                return (0, A.Ml)(t);
            case M.VV.GUILD_BOOSTS:
                return !0;
            case M.VV.REPORT_TO_MOD:
                return null != i && (0, O.A)(i);
            case M.VV.GAME_SERVERS:
                return (
                    (0, C.TS)(t, "isAccessibleChannelOrThreadPath") &&
                    null != i &&
                    i.features.has(b.GuildFeatures.GAME_SERVERS)
                );
            case M.VV.GUILD_OFFICIAL_MESSAGES:
                return (0, N.GP)(i, "isAccessibleChannelOrThreadPath");
            case M.VV.GUILD_SPACE:
                return (0, S.t)(i, "isAccessibleChannelOrThreadPath");
            default:
                (0, v.xb)(n);
        }
    let s = o.A.getChannel(n);
    return (
        (null != s ||
            (await L.A.loadThread(n),
            null == (s = o.A.getChannel(n)) && t === b.ME && (s = await c.A.openChannel(n)),
            null != s)) &&
        ((0, d.nc)(s) || u.A.isChannelGatedAndVisible(t, n))
    );
}
var U = n(9588);
async function w(e, t) {
    let n = (0, d.FM)(e);
    if (null != n) {
        let { guildId: e, channelId: r, diceCount: a, diceSides: l } = n;
        (0, i.t)(r, a, l), (0, s.pX)(b.BVt.CHANNEL(e, r), t);
        return;
    }
    let c = (0, d.vu)(e);
    if (null != c && !(await P(c))) return void (0, U.showInaccessibleLinkModal)({ kind: "channel" });
    if (null == c) return void (0, s.pX)(e, t);
    let u = (function (e) {
        if (null == e.channelId) return e;
        let t = o.A.getChannel(e.channelId);
        if (null == t) return e;
        let n = (0, r.j)(t);
        return { ...e, guildId: n ?? b.ME };
    })(c);
    null == u.channelId
        ? (0, l.u)(u.guildId)
        : (0, a.C$)(u.channelId) && (0, a.C$)(u.threadId)
          ? null != u.threadId
              ? (0, s.pX)(b.BVt.CHANNEL_THREAD_VIEW(u.guildId, u.channelId, u.threadId, u.messageId), t)
              : (0, s.pX)(b.BVt.CHANNEL(u.guildId, u.channelId, u.messageId), t)
          : (0, U.showInaccessibleReportPostModal)();
}
