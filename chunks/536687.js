n.d(t, {
    R: () => m,
    Z: () => _,
});
var r,
    i = n(473749),
    l = n(442837),
    a = n(897285),
    s = n(300213),
    o = n(554747),
    c = n(499137),
    u = n(929507),
    d = n(270144),
    p = n(400271),
    f = n(192513),
    h = n(255791),
    g = n(981631),
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
function _(e) {
    var t;
    let n = null != (t = null == e ? void 0 : e.id) ? t : g.lds,
        r = (0, l.e7)([p.Z], () => p.Z.isVisible(e)),
        m = (0, l.e7)([h.Z], () => h.Z.isVisible(e)),
        _ = (0, s.m)(n),
        b = (0, l.e7)([f.Z], () => f.Z.isVisible(e)),
        E = u.Z.useShouldShowChannelNotice(n),
        O = (0, d.h6)(e),
        { enableStudyGroup: y } = (0, c.s)(e),
        v = O.length > 0,
        I = y && !(null == e ? void 0 : e.features.has(g.GuildFeatures.HUB)),
        C = (0, o.Vm)(n);
    if (
        (i.useEffect(() => {
            a.Z.getGuildEventsForCurrentUser(n);
        }, [n]),
        r)
    )
        return 0;
    if (m) return 1;
    if (_ || null != C) return 2;
    if (b) return 3;
    if (E) return 4;
    else if (v) return 5;
    else if (I) return 6;
    return null;
}
