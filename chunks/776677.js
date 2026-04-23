n.d(t, { A: () => _, o: () => m });
var r,
    i = n(723702),
    l = n(170148),
    a = n(454292),
    o = n(550151),
    u = n(206589),
    s = n(125017),
    c = n(833349),
    d = n(287613),
    A = n(874546),
    f = n(702631),
    g = n(652215),
    m = (((r = {}).CAN_JOIN = "can_join"), (r.CANNOT_JOIN = "cannot_join"), (r.JOINED = "joined"), r);
function _(e) {
    let t,
        n,
        {
            user: r,
            activity: m,
            application: _,
            channelId: I,
            currentUser: p,
            isEmbedded: E,
            ChannelStore: C,
            GuildStore: S,
            GuildMemberCountStore: h,
            RelationshipStore: T,
            SelectedChannelStore: y,
            VoiceStateStore: v,
            PermissionStore: N,
            LocalActivityStore: R,
            SelfPresenceStore: L,
            EmbeddedActivitiesStore: b,
        } = e;
    if (
        (!E && null != (t = (0, a.A)(R, L, m?.application_id)) && (0, u.w)(t, m)) ||
        (E && null != (n = b.getCurrentEmbeddedActivity()) && n.applicationId === m?.application_id)
    )
        return "joined";
    if (null == r) return "cannot_join";
    if (E && null != I)
        return (0, o.Ay)({
            userId: r.id,
            activity: m,
            channelId: I,
            currentUser: p,
            application: _,
            isActivitiesEnabledForCurrentPlatform: (0, l.A)(),
            ChannelStore: C,
            VoiceStateStore: v,
            PermissionStore: N,
            GuildStore: S,
        }) === o.Gy.CAN_JOIN
            ? "can_join"
            : "cannot_join";
    if (
        (E && null == I && !(0, c.A)(m, g.jUm.CONTEXTLESS)) ||
        (!E && (!(0, A.Ay)(m) || !(0, i.platformSupportsActivityJoin)()))
    )
        return "cannot_join";
    let P = (0, s._)(m);
    if (!(0, d.A)(P) || (0, f.U)(P)) return "cannot_join";
    if ((0, c.A)(m, g.jUm.PARTY_PRIVACY_FRIENDS) && T.isFriend(r.id)) return "can_join";
    if ((0, c.A)(m, g.jUm.PARTY_PRIVACY_VOICE_CHANNEL)) {
        let e = C.getChannel(y.getVoiceChannelId());
        if (null == e || !v.isInChannel(e.id, r.id)) return "cannot_join";
        switch (e.type) {
            case g.rbe.DM:
            case g.rbe.GROUP_DM:
                return "can_join";
        }
        let t = S.getGuild(e.getGuildId());
        if (null == t || t.features.has(g.GuildFeatures.COMMUNITY)) return "cannot_join";
        let n = h.getMemberCount(t.id);
        if (null != n && n < 100) return "can_join";
    }
    return "cannot_join";
}
