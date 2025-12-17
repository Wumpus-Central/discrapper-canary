n.d(t, {
    R: () => m,
    Z: () => b,
});
var r,
    i = n(473749),
    l = n(442837),
    a = n(897285),
    o = n(300213),
    s = n(554747),
    c = n(499137),
    u = n(929507),
    d = n(270144),
    p = n(400271),
    f = n(192513),
    g = n(255791),
    h = n(981631),
    m =
        (((r = {})[(r.ENABLE_PUBLIC_GUILD = 0)] = "ENABLE_PUBLIC_GUILD"),
        (r[(r.MAX_MEMBER_COUNT = 1)] = "MAX_MEMBER_COUNT"),
        (r[(r.GUILD_LIVE_CHANNEL = 2)] = "GUILD_LIVE_CHANNEL"),
        (r[(r.GUILD_MFA_WARNING = 3)] = "GUILD_MFA_WARNING"),
        (r[(r.COMMANDS_MIGRATION = 4)] = "COMMANDS_MIGRATION"),
        (r[(r.APPLICATION_SUBSCRIPTION_EXPIRATION = 5)] = "APPLICATION_SUBSCRIPTION_EXPIRATION"),
        (r[(r.HUB_STUDY_ROOM = 6)] = "HUB_STUDY_ROOM"),
        (r[(r.CLAN_UPSELL = 7)] = "CLAN_UPSELL"),
        r);
function b(e) {
    var t;
    let n = null != (t = null == e ? void 0 : e.id) ? t : h.lds,
        r = (0, l.e7)([p.Z], () => p.Z.isVisible(e)),
        m = (0, l.e7)([g.Z], () => g.Z.isVisible(e)),
        b = (0, o.m)(n),
        _ = (0, l.e7)([f.Z], () => f.Z.isVisible(e)),
        E = u.Z.useShouldShowChannelNotice(n),
        O = (0, d.h6)(e),
        { enableStudyGroup: v } = (0, c.s)(e),
        y = O.length > 0,
        I = v && !(null == e ? void 0 : e.features.has(h.GuildFeatures.HUB)),
        C = (0, s.Vm)(n);
    if (
        (i.useEffect(() => {
            a.Z.getGuildEventsForCurrentUser(n);
        }, [n]),
        r)
    )
        return 0;
    if (m) return 1;
    if (b || null != C) return 2;
    if (_) return 3;
    if (E) return 4;
    else if (y) return 5;
    else if (I) return 6;
    return null;
}
