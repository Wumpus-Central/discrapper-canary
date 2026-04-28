n.d(t, { A: () => y, o: () => m });
var r,
    l = n(723702),
    i = n(170148),
    a = n(454292),
    u = n(550151),
    o = n(206589),
    s = n(125017),
    d = n(833349),
    c = n(287613),
    A = n(874546),
    f = n(702631),
    p = n(652215),
    m = (((r = {}).CAN_JOIN = "can_join"), (r.CANNOT_JOIN = "cannot_join"), (r.JOINED = "joined"), r);
function y(e) {
    let t,
        n,
        {
            user: r,
            activity: m,
            application: y,
            channelId: I,
            currentUser: g,
            isEmbedded: E,
            ChannelStore: h,
            GuildStore: v,
            GuildMemberCountStore: _,
            RelationshipStore: T,
            SelectedChannelStore: S,
            VoiceStateStore: N,
            PermissionStore: C,
            LocalActivityStore: x,
            SelfPresenceStore: P,
            EmbeddedActivitiesStore: D,
        } = e;
    if (
        (!E && null != (t = (0, a.A)(x, P, m?.application_id)) && (0, o.w)(t, m)) ||
        (E && null != (n = D.getCurrentEmbeddedActivity()) && n.applicationId === m?.application_id)
    )
        return "joined";
    if (null == r) return "cannot_join";
    if (E && null != I)
        return (0, u.Ay)({
            userId: r.id,
            activity: m,
            channelId: I,
            currentUser: g,
            application: y,
            isActivitiesEnabledForCurrentPlatform: (0, i.A)(),
            ChannelStore: h,
            VoiceStateStore: N,
            PermissionStore: C,
            GuildStore: v,
        }) === u.Gy.CAN_JOIN
            ? "can_join"
            : "cannot_join";
    if (
        (E && null == I && !(0, d.A)(m, p.jUm.CONTEXTLESS)) ||
        (!E && (!(0, A.Ay)(m) || !(0, l.platformSupportsActivityJoin)()))
    )
        return "cannot_join";
    let M = (0, s._)(m);
    if (!(0, c.A)(M) || (0, f.U)(M)) return "cannot_join";
    if ((0, d.A)(m, p.jUm.PARTY_PRIVACY_FRIENDS) && T.isFriend(r.id)) return "can_join";
    if ((0, d.A)(m, p.jUm.PARTY_PRIVACY_VOICE_CHANNEL)) {
        let e = h.getChannel(S.getVoiceChannelId());
        if (null == e || !N.isInChannel(e.id, r.id)) return "cannot_join";
        switch (e.type) {
            case p.rbe.DM:
            case p.rbe.GROUP_DM:
                return "can_join";
        }
        let t = v.getGuild(e.getGuildId());
        if (null == t || t.features.has(p.GuildFeatures.COMMUNITY)) return "cannot_join";
        let n = _.getMemberCount(t.id);
        if (null != n && n < 100) return "can_join";
    }
    return "cannot_join";
}
