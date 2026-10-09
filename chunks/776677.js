i.d(t, { A: () => I, o: () => f });
var e,
    r = i(723702),
    l = i(170148),
    o = i(454292),
    u = i(550151),
    a = i(206589),
    c = i(125017),
    d = i(55730),
    _ = i(287613),
    A = i(874546),
    p = i(702631),
    s = i(652215),
    f = (((e = {}).CAN_JOIN = "can_join"), (e.CANNOT_JOIN = "cannot_join"), (e.JOINED = "joined"), e);
function I(n) {
    let t,
        i,
        {
            user: e,
            activity: f,
            application: I,
            channelId: j,
            currentUser: C,
            isContentGated: N,
            isEmbedded: T,
            ChannelStore: y,
            GuildStore: O,
            GuildMemberCountStore: h,
            RelationshipStore: m,
            SelectedChannelStore: S,
            VoiceStateStore: E,
            PermissionStore: P,
            LocalActivityStore: V,
            SelfPresenceStore: D,
            EmbeddedActivitiesStore: U,
        } = n;
    if (
        (!T && null != (t = (0, o.A)(V, D, f?.application_id)) && (0, a.w)(t, f)) ||
        (T && null != (i = U.getCurrentEmbeddedActivity()) && i.applicationId === f?.application_id)
    )
        return "joined";
    if (null == e) return "cannot_join";
    if (T && null != j)
        return (0, u.Ay)({
            userId: e.id,
            activity: f,
            channelId: j,
            currentUser: C,
            application: I,
            isContentGated: N,
            isActivitiesEnabledForCurrentPlatform: (0, l.A)(),
            ChannelStore: y,
            VoiceStateStore: E,
            PermissionStore: P,
            GuildStore: O,
        }) === u.Gy.CAN_JOIN
            ? "can_join"
            : "cannot_join";
    if (
        (T && null == j && !(0, d.A)(f, s.jUm.CONTEXTLESS)) ||
        (!T && (!(0, A.Ay)(f) || !(0, r.platformSupportsActivityJoin)()))
    )
        return "cannot_join";
    let b = (0, c._)(f);
    if (!(0, _.A)(b) || (0, p.U)(b)) return "cannot_join";
    if ((0, d.A)(f, s.jUm.PARTY_PRIVACY_FRIENDS) && m.isFriend(e.id)) return "can_join";
    if ((0, d.A)(f, s.jUm.PARTY_PRIVACY_VOICE_CHANNEL)) {
        let n = y.getChannel(S.getVoiceChannelId());
        if (null == n || !E.isInChannel(n.id, e.id)) return "cannot_join";
        switch (n.type) {
            case s.rbe.DM:
            case s.rbe.GROUP_DM:
                return "can_join";
        }
        let t = O.getGuild(n.getGuildId());
        if (null == t || t.features.has(s.GuildFeatures.COMMUNITY)) return "cannot_join";
        let i = h.getMemberCount(t.id);
        if (null != i && i < 100) return "can_join";
    }
    return "cannot_join";
}
