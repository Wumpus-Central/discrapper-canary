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
            isEmbedded: N,
            ChannelStore: T,
            GuildStore: y,
            GuildMemberCountStore: O,
            RelationshipStore: h,
            SelectedChannelStore: m,
            VoiceStateStore: S,
            PermissionStore: E,
            LocalActivityStore: P,
            SelfPresenceStore: V,
            EmbeddedActivitiesStore: D,
        } = n;
    if (
        (!N && null != (t = (0, o.A)(P, V, f?.application_id)) && (0, a.w)(t, f)) ||
        (N && null != (i = D.getCurrentEmbeddedActivity()) && i.applicationId === f?.application_id)
    )
        return "joined";
    if (null == e) return "cannot_join";
    if (N && null != j)
        return (0, u.Ay)({
            userId: e.id,
            activity: f,
            channelId: j,
            currentUser: C,
            application: I,
            isActivitiesEnabledForCurrentPlatform: (0, l.A)(),
            ChannelStore: T,
            VoiceStateStore: S,
            PermissionStore: E,
            GuildStore: y,
        }) === u.Gy.CAN_JOIN
            ? "can_join"
            : "cannot_join";
    if (
        (N && null == j && !(0, d.A)(f, s.jUm.CONTEXTLESS)) ||
        (!N && (!(0, A.Ay)(f) || !(0, r.platformSupportsActivityJoin)()))
    )
        return "cannot_join";
    let U = (0, c._)(f);
    if (!(0, _.A)(U) || (0, p.U)(U)) return "cannot_join";
    if ((0, d.A)(f, s.jUm.PARTY_PRIVACY_FRIENDS) && h.isFriend(e.id)) return "can_join";
    if ((0, d.A)(f, s.jUm.PARTY_PRIVACY_VOICE_CHANNEL)) {
        let n = T.getChannel(m.getVoiceChannelId());
        if (null == n || !S.isInChannel(n.id, e.id)) return "cannot_join";
        switch (n.type) {
            case s.rbe.DM:
            case s.rbe.GROUP_DM:
                return "can_join";
        }
        let t = y.getGuild(n.getGuildId());
        if (null == t || t.features.has(s.GuildFeatures.COMMUNITY)) return "cannot_join";
        let i = O.getMemberCount(t.id);
        if (null != i && i < 100) return "can_join";
    }
    return "cannot_join";
}
