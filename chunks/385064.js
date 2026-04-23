n.d(t, { A: () => d });
var l = n(284009),
    a = n.n(l),
    i = n(846293),
    r = n(976860),
    s = n(71393),
    o = n(449054),
    c = n(652215);
async function d(e) {
    let { invite: t, guildId: n, channelId: l, messageId: d, analyticsLocationStack: u } = e;
    a()(u.length > 0, "analyticsLocationStack must have at least one location");
    let m = u[u.length - 1],
        h = null;
    if ((null != t && ((n = t.guild?.id), (h = new Set(t.guild?.features))), null == n)) return;
    let f = s.A.getGuild(n);
    if (f?.joinedAt == null)
        if (null == h || h.has(c.GuildFeatures.PREVIEW_ENABLED))
            return void (await (0, o.Z2)(
                n,
                {},
                { shouldNavigate: !0, channelId: l, messageId: d, joinSource: c.Q4z.GAME_PROFILE_ANNOUNCEMENTS },
                u,
            ));
        else
            null != t && (await i.Ay.acceptInvite({ inviteKey: t.code, context: { location: m }, skipOnboarding: !0 }));
    (0, r.pX)(c.BVt.CHANNEL(n, l, d), { sourceLocationStack: u });
}
