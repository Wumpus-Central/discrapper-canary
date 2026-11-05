n.d(t, { A: () => w });
var i = n(121197),
    r = n(374710),
    a = n(976860),
    s = n(345942),
    l = n(162199),
    o = n(734057),
    d = n(376943),
    c = n(308528),
    u = n(246338),
    _ = n(41200),
    E = n(831617),
    A = n(496767),
    h = n(134413),
    f = n(713125),
    I = n(473529),
    p = n(960253),
    m = n(469993),
    g = n(836039),
    T = n(555325),
    S = n(287809),
    N = n(313627),
    C = n(521427),
    O = n(56595),
    R = n(871123),
    L = n(353202),
    y = n(317525),
    D = n(71393),
    b = n(403362),
    v = n(891897),
    P = n(652215),
    M = n(746080),
    U = n(9588);
async function w(e, t) {
    let n = (0, d.FM)(e);
    if (null != n) {
        let { guildId: e, channelId: r, diceCount: s, diceSides: l } = n;
        ((0, i.t)(r, s, l), (0, a.pX)(P.BVt.CHANNEL(e, r), t));
        return;
    }
    let w = (0, d.vu)(e);
    if (
        null != w &&
        !(await (async function (e) {
            let { guildId: t, channelId: n } = e,
                i = D.A.getGuild(t),
                r = y.A.getUnsafeMutableRoles(t);
            if (null == i && t !== P.ME && n !== M.VV.GAME_SHOP) return !1;
            if (null == n) return !0;
            if ((0, M.jq)(n))
                switch (n) {
                    case M.VV.CONJURE:
                    case M.VV.CONJURE_PROJECT:
                        return null != i && (0, u.N)(i, "isAccessibleChannelOrThreadPath");
                    case M.VV.ROLE_SUBSCRIPTIONS:
                        return (0, p.l8)(t, r);
                    case M.VV.SERVER_MONETIZATION_ONBOARDING:
                        let a;
                        return (
                            null != i &&
                            ((a = i.ownerId === S.default.getCurrentUser()?.id),
                            (0, T.V9)({
                                guild: i,
                                isOwner: a,
                                canManageGuildRoleSubscriptions: (0, T.X9)(i),
                                isUserInCreatorMonetizationEligibleCountry: (0, m.Z1)(),
                                shouldRestrictUpdatingRoleSubscriptionSettings: (0, g.mk)(i.id),
                            }))
                        );
                    case M.VV.GAME_SHOP:
                        return (0, R.jz)(i ?? { id: t, type: "id-only" });
                    case M.VV.GUILD_SHOP:
                        return (0, _.K)(i, r);
                    case M.VV.MEMBER_APPLICATIONS:
                        return (0, A.h)(t);
                    case M.VV.GUILD_HOME:
                        return (0, I.K)(t);
                    case M.VV.CHANNEL_BROWSER:
                        return null != i && i.features.has(P.GuildFeatures.COMMUNITY);
                    case M.VV.GUILD_ONBOARDING:
                        return f.Ay.shouldShowOnboarding(t);
                    case M.VV.CUSTOMIZE_COMMUNITY:
                        return null != i && i.features.has(P.GuildFeatures.COMMUNITY);
                    case M.VV.MEMBER_SAFETY:
                        return (0, h.Ml)(t);
                    case M.VV.GUILD_BOOSTS:
                        return !0;
                    case M.VV.REPORT_TO_MOD:
                        return null != i && (0, O.A)(i);
                    case M.VV.GAME_SERVERS:
                        return (
                            (0, E.TS)(t, "isAccessibleChannelOrThreadPath") &&
                            null != i &&
                            i.features.has(P.GuildFeatures.GAME_SERVERS)
                        );
                    case M.VV.GUILD_OFFICIAL_MESSAGES:
                        return (0, C.GP)(i, "isAccessibleChannelOrThreadPath");
                    case M.VV.GUILD_SPACE:
                        return (0, N.tT)(i, "isAccessibleChannelOrThreadPath");
                    default:
                        (0, b.xb)(n);
                }
            let s = o.A.getChannel(n);
            return (
                (null != s ||
                    (await L.A.loadThread(n),
                    null == (s = o.A.getChannel(n)) && t === P.ME && (s = await c.A.openChannel(n)),
                    null != s)) &&
                (0, v.A)(s)
            );
        })(w))
    )
        return void (0, U.showInaccessibleLinkModal)({ kind: "channel" });
    if (null == w) return void (0, a.pX)(e, t);
    let G = (function (e) {
        if (null == e.channelId) return e;
        let t = o.A.getChannel(e.channelId);
        if (null == t) return e;
        let n = (0, l.j)(t);
        return { ...e, guildId: n ?? P.ME };
    })(w);
    null == G.channelId
        ? (0, s.u)(G.guildId)
        : (0, r.C$)(G.channelId) && (0, r.C$)(G.threadId)
          ? null != G.threadId
              ? (0, a.pX)(P.BVt.CHANNEL_THREAD_VIEW(G.guildId, G.channelId, G.threadId, G.messageId), t)
              : (0, a.pX)(P.BVt.CHANNEL(G.guildId, G.channelId, G.messageId), t)
          : (0, U.E)();
}
