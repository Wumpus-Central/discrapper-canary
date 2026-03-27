n.d(t, { A: () => d });
var a = n(284009),
    i = n.n(a),
    l = n(846293),
    r = n(976860),
    s = n(71393),
    c = n(449054),
    o = n(652215);
async function d(e) {
    let { invite: t, guildId: n, channelId: a, messageId: d, analyticsLocationStack: u } = e;
    i()(u.length > 0, "analyticsLocationStack must have at least one location");
    let m = u[u.length - 1],
        x = null;
    if ((null != t && ((n = t.guild?.id), (x = new Set(t.guild?.features))), null == n)) return;
    let h = s.A.getGuild(n);
    if (h?.joinedAt == null)
        if (null == x || x.has(o.GuildFeatures.PREVIEW_ENABLED))
            return void (await (0, c.Z2)(
                n,
                {},
                { shouldNavigate: !0, channelId: a, messageId: d, joinSource: o.Q4z.GAME_PROFILE_ANNOUNCEMENTS },
                u,
            ));
        else
            null != t && (await l.Ay.acceptInvite({ inviteKey: t.code, context: { location: m }, skipOnboarding: !0 }));
    (0, r.pX)(o.BVt.CHANNEL(n, a, d), { sourceLocationStack: u });
}
