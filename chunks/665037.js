n.d(t, { A: () => g, G: () => p });
var i,
    r = n(64700),
    a = n(311907),
    l = n(285059),
    s = n(82005),
    o = n(508654),
    d = n(221094),
    c = n(320426),
    u = n(915043),
    A = n(788866),
    h = n(992250),
    _ = n(15438),
    m = n(652215),
    p =
        (((i = {})[(i.ENABLE_PUBLIC_GUILD = 0)] = "ENABLE_PUBLIC_GUILD"),
        (i[(i.MAX_MEMBER_COUNT = 1)] = "MAX_MEMBER_COUNT"),
        (i[(i.GUILD_LIVE_CHANNEL = 2)] = "GUILD_LIVE_CHANNEL"),
        (i[(i.GUILD_MFA_WARNING = 3)] = "GUILD_MFA_WARNING"),
        (i[(i.COMMANDS_MIGRATION = 4)] = "COMMANDS_MIGRATION"),
        (i[(i.APPLICATION_SUBSCRIPTION_EXPIRATION = 5)] = "APPLICATION_SUBSCRIPTION_EXPIRATION"),
        (i[(i.HUB_STUDY_ROOM = 6)] = "HUB_STUDY_ROOM"),
        (i[(i.CLAN_UPSELL = 7)] = "CLAN_UPSELL"),
        i);
function g(e) {
    let t = e?.id ?? m.dJq,
        n = (0, a.bG)([A.A], () => A.A.isVisible(e)),
        i = (0, a.bG)([_.A], () => _.A.isVisible(e)),
        p = (0, s.C)(t),
        g = (0, a.bG)([h.A], () => h.A.isVisible(e)),
        E = c.A.useShouldShowChannelNotice(t),
        f = (0, u.$s)(e),
        { enableStudyGroup: I } = (0, d.y)(e),
        C = f.length > 0,
        N = I && !e?.features.has(m.GuildFeatures.HUB),
        T = (0, o.WG)(t);
    if (
        (r.useEffect(() => {
            l.A.getGuildEventsForCurrentUser(t);
        }, [t]),
        n)
    )
        return 0;
    if (i) return 1;
    if (p || null != T) return 2;
    if (g) return 3;
    if (E) return 4;
    else if (C) return 5;
    else if (N) return 6;
    return null;
}
