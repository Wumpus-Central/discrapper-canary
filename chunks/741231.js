n.d(t, { A: () => G });
var i = n(121197),
    r = n(892340),
    a = n(976860),
    s = n(345942),
    l = n(162199),
    o = n(734057),
    d = n(376943),
    c = n(308528),
    u = n(41200),
    _ = n(831617),
    E = n(496767),
    A = n(134413),
    h = n(713125),
    I = n(473529),
    f = n(960253),
    p = n(469993),
    T = n(836039),
    g = n(555325),
    m = n(287809),
    S = n(470452),
    N = n(521427),
    C = n(56595),
    O = n(871123),
    R = n(353202),
    L = n(683180),
    y = n(317525),
    D = n(71393),
    v = n(403362),
    b = n(891897),
    M = n(652215),
    P = n(746080);
async function U(e) {
    let { guildId: t, channelId: n } = e,
        i = D.A.getGuild(t),
        r = y.A.getUnsafeMutableRoles(t);
    if (null == i && t !== M.ME && n !== P.VV.GAME_SHOP) return !1;
    if (null == n) return !0;
    if ((0, P.jq)(n))
        switch (n) {
            case P.VV.VIBEGRATIONS:
                return null != i && (0, L.G2)(i, "isAccessibleChannelOrThreadPath");
            case P.VV.ROLE_SUBSCRIPTIONS:
                return (0, f.l8)(t, r);
            case P.VV.SERVER_MONETIZATION_ONBOARDING:
                let a;
                return (
                    null != i &&
                    ((a = i.ownerId === m.default.getCurrentUser()?.id),
                    (0, g.V9)({
                        guild: i,
                        isOwner: a,
                        canManageGuildRoleSubscriptions: (0, g.X9)(i),
                        isUserInCreatorMonetizationEligibleCountry: (0, p.Z1)(),
                        shouldRestrictUpdatingRoleSubscriptionSettings: (0, T.mk)(i.id),
                    }))
                );
            case P.VV.GAME_SHOP:
                return (0, O.jz)(i ?? { id: t, type: "id-only" });
            case P.VV.GUILD_SHOP:
                return (0, u.K)(i, r);
            case P.VV.MEMBER_APPLICATIONS:
                return (0, E.h)(t);
            case P.VV.GUILD_HOME:
                return (0, I.K)(t);
            case P.VV.CHANNEL_BROWSER:
                return null != i && i.features.has(M.GuildFeatures.COMMUNITY);
            case P.VV.GUILD_ONBOARDING:
                return h.Ay.shouldShowOnboarding(t);
            case P.VV.CUSTOMIZE_COMMUNITY:
                return null != i && i.features.has(M.GuildFeatures.COMMUNITY);
            case P.VV.MEMBER_SAFETY:
                return (0, A.Ml)(t);
            case P.VV.GUILD_BOOSTS:
                return !0;
            case P.VV.REPORT_TO_MOD:
                return null != i && (0, C.A)(i);
            case P.VV.GAME_SERVERS:
                return (
                    (0, _.TS)(t, "isAccessibleChannelOrThreadPath") &&
                    null != i &&
                    i.features.has(M.GuildFeatures.GAME_SERVERS)
                );
            case P.VV.GUILD_OFFICIAL_MESSAGES:
                return (0, N.GP)(i, "isAccessibleChannelOrThreadPath");
            case P.VV.GUILD_SPACE:
                return (0, S.tT)(i, "isAccessibleChannelOrThreadPath");
            default:
                (0, v.xb)(n);
        }
    let s = o.A.getChannel(n);
    return (
        (null != s ||
            (await R.A.loadThread(n),
            null == (s = o.A.getChannel(n)) && t === M.ME && (s = await c.A.openChannel(n)),
            null != s)) &&
        (0, b.A)(s)
    );
}
var w = n(9588);
async function G(e, t) {
    let n = (0, d.FM)(e);
    if (null != n) {
        let { guildId: e, channelId: r, diceCount: s, diceSides: l } = n;
        ((0, i.t)(r, s, l), (0, a.pX)(M.BVt.CHANNEL(e, r), t));
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
