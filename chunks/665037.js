n.d(t, {
    A: () => m,
    G: () => g,
});
var r,
    i = n(64700),
    l = n(311907),
    a = n(285059),
    s = n(82005),
    o = n(508654),
    c = n(221094),
    u = n(320426),
    d = n(915043),
    p = n(788866),
    f = n(992250),
    h = n(15438),
    A = n(652215),
    g =
        (((r = {})[(r.ENABLE_PUBLIC_GUILD = 0)] = "ENABLE_PUBLIC_GUILD"),
        (r[(r.MAX_MEMBER_COUNT = 1)] = "MAX_MEMBER_COUNT"),
        (r[(r.GUILD_LIVE_CHANNEL = 2)] = "GUILD_LIVE_CHANNEL"),
        (r[(r.GUILD_MFA_WARNING = 3)] = "GUILD_MFA_WARNING"),
        (r[(r.COMMANDS_MIGRATION = 4)] = "COMMANDS_MIGRATION"),
        (r[(r.APPLICATION_SUBSCRIPTION_EXPIRATION = 5)] = "APPLICATION_SUBSCRIPTION_EXPIRATION"),
        (r[(r.HUB_STUDY_ROOM = 6)] = "HUB_STUDY_ROOM"),
        (r[(r.CLAN_UPSELL = 7)] = "CLAN_UPSELL"),
        r);

function m(e) {
    var t;
    let n = null != (t = null == e ? void 0 : e.id) ? t : A.dJq,
        r = (0, l.bG)([p.A], () => p.A.isVisible(e)),
        g = (0, l.bG)([h.A], () => h.A.isVisible(e)),
        m = (0, s.C)(n),
        b = (0, l.bG)([f.A], () => f.A.isVisible(e)),
        _ = u.A.useShouldShowChannelNotice(n),
        E = (0, d.$s)(e),
        { enableStudyGroup: O } = (0, c.y)(e),
        y = E.length > 0,
        I = O && !(null == e ? void 0 : e.features.has(A.GuildFeatures.HUB)),
        v = (0, o.WG)(n);
    if (
        (i.useEffect(() => {
            a.A.getGuildEventsForCurrentUser(n);
        }, [n]),
        r)
    )
        return 0;
    if (g) return 1;
    if (m || null != v) return 2;
    if (b) return 3;
    if (_) return 4;
    else if (y) return 5;
    else if (I) return 6;
    return null;
}
