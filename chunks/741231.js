n.d(t, { A: () => G });
var i = n(121197),
    r = n(892340),
    a = n(976860),
    s = n(345942),
    l = n(162199),
    o = n(734057),
    d = n(376943),
    c = n(308528),
    u = n(717125),
    _ = n(41200),
    E = n(831617),
    A = n(496767),
    h = n(134413),
    I = n(713125),
    f = n(473529),
    p = n(960253),
    T = n(469993),
    m = n(836039),
    g = n(555325),
    S = n(287809),
    N = n(470452),
    C = n(521427),
    O = n(56595),
    R = n(871123),
    L = n(353202),
    y = n(683180),
    D = n(317525),
    v = n(71393),
    b = n(403362),
    M = n(652215),
    P = n(746080);
async function U(e) {
    let { guildId: t, channelId: n } = e,
        i = v.A.getGuild(t),
        r = D.A.getUnsafeMutableRoles(t);
    if (null == i && t !== M.ME && n !== P.VV.GAME_SHOP) return !1;
    if (null == n) return !0;
    if ((0, P.jq)(n))
        switch (n) {
            case P.VV.VIBEGRATIONS:
                return null != i && (0, y.G2)(i, "isAccessibleChannelOrThreadPath");
            case P.VV.ROLE_SUBSCRIPTIONS:
                return (0, p.l8)(t, r);
            case P.VV.SERVER_MONETIZATION_ONBOARDING:
                let a;
                return (
                    null != i &&
                    ((a = i.ownerId === S.default.getCurrentUser()?.id),
                    (0, g.V9)({
                        guild: i,
                        isOwner: a,
                        canManageGuildRoleSubscriptions: (0, g.X9)(i),
                        isUserInCreatorMonetizationEligibleCountry: (0, T.Z1)(),
                        shouldRestrictUpdatingRoleSubscriptionSettings: (0, m.mk)(i.id),
                    }))
                );
            case P.VV.GAME_SHOP:
                return (0, R.jz)(i ?? { id: t, type: "id-only" });
            case P.VV.GUILD_SHOP:
                return (0, _.K)(i, r);
            case P.VV.MEMBER_APPLICATIONS:
                return (0, A.h)(t);
            case P.VV.GUILD_HOME:
                return (0, f.K)(t);
            case P.VV.CHANNEL_BROWSER:
                return null != i && i.features.has(M.GuildFeatures.COMMUNITY);
            case P.VV.GUILD_ONBOARDING:
                return I.Ay.shouldShowOnboarding(t);
            case P.VV.CUSTOMIZE_COMMUNITY:
                return null != i && i.features.has(M.GuildFeatures.COMMUNITY);
            case P.VV.MEMBER_SAFETY:
                return (0, h.Ml)(t);
            case P.VV.GUILD_BOOSTS:
                return !0;
            case P.VV.REPORT_TO_MOD:
                return null != i && (0, O.A)(i);
            case P.VV.GAME_SERVERS:
                return (
                    (0, E.TS)(t, "isAccessibleChannelOrThreadPath") &&
                    null != i &&
                    i.features.has(M.GuildFeatures.GAME_SERVERS)
                );
            case P.VV.GUILD_OFFICIAL_MESSAGES:
                return (0, C.GP)(i, "isAccessibleChannelOrThreadPath");
            case P.VV.GUILD_SPACE:
                return (0, N.tT)(i, "isAccessibleChannelOrThreadPath");
            default:
                (0, b.xb)(n);
        }
    let s = o.A.getChannel(n);
    return (
        (null != s ||
            (await L.A.loadThread(n),
            null == (s = o.A.getChannel(n)) && t === M.ME && (s = await c.A.openChannel(n)),
            null != s)) &&
        ((0, d.nc)(s) || u.A.isChannelGatedAndVisible(t, n))
    );
}
var w = n(9588);
async function G(e, t) {
    let n = (0, d.FM)(e);
    if (null != n) {
        let { guildId: e, channelId: r, diceCount: s, diceSides: l } = n;
        (0, i.t)(r, s, l), (0, a.pX)(M.BVt.CHANNEL(e, r), t);
        return;
    }
    let c = (0, d.vu)(e);
    if (null != c && !(await U(c))) return void (0, w.showInaccessibleLinkModal)({ kind: "channel" });
    if (null == c) return void (0, a.pX)(e, t);
    let u = (function (e) {
        if (null == e.channelId) return e;
        let t = o.A.getChannel(e.channelId);
        if (null == t) return e;
        let n = (0, l.j)(t);
        return { ...e, guildId: n ?? M.ME };
    })(c);
    null == u.channelId
        ? (0, s.u)(u.guildId)
        : (0, r.C$)(u.channelId) && (0, r.C$)(u.threadId)
          ? null != u.threadId
              ? (0, a.pX)(M.BVt.CHANNEL_THREAD_VIEW(u.guildId, u.channelId, u.threadId, u.messageId), t)
              : (0, a.pX)(M.BVt.CHANNEL(u.guildId, u.channelId, u.messageId), t)
          : (0, w.showInaccessibleReportPostModal)();
}
