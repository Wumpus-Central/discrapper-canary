n.d(t, { A: () => T, o: () => I });
var i,
    a = n(723702),
    r = n(170148),
    s = n(454292),
    l = n(550151),
    o = n(206589),
    d = n(125017),
    c = n(833349),
    _ = n(287613),
    E = n(874546),
    u = n(702631),
    A = n(652215),
    I = (((i = {}).CAN_JOIN = "can_join"), (i.CANNOT_JOIN = "cannot_join"), (i.JOINED = "joined"), i);
function T(e) {
    let t,
        n,
        {
            user: i,
            activity: I,
            application: T,
            channelId: h,
            currentUser: S,
            isEmbedded: N,
            ChannelStore: f,
            GuildStore: p,
            GuildMemberCountStore: m,
            RelationshipStore: O,
            SelectedChannelStore: C,
            VoiceStateStore: R,
            PermissionStore: g,
            LocalActivityStore: L,
            SelfPresenceStore: D,
            EmbeddedActivitiesStore: b,
        } = e;
    if (
        (!N && null != (t = (0, s.A)(L, D, I?.application_id)) && (0, o.w)(t, I)) ||
        (N && null != (n = b.getCurrentEmbeddedActivity()) && n.applicationId === I?.application_id)
    )
        return "joined";
    if (null == i) return "cannot_join";
    if (N && null != h)
        return (0, l.Ay)({
            userId: i.id,
            activity: I,
            channelId: h,
            currentUser: S,
            application: T,
            isActivitiesEnabledForCurrentPlatform: (0, r.A)(),
            ChannelStore: f,
            VoiceStateStore: R,
            PermissionStore: g,
            GuildStore: p,
        }) === l.Gy.CAN_JOIN
            ? "can_join"
            : "cannot_join";
    if (
        (N && null == h && !(0, c.A)(I, A.jUm.CONTEXTLESS)) ||
        (!N && (!(0, E.Ay)(I) || !(0, a.platformSupportsActivityJoin)()))
    )
        return "cannot_join";
    let M = (0, d._)(I);
    if (!(0, _.A)(M) || (0, u.U)(M)) return "cannot_join";
    if ((0, c.A)(I, A.jUm.PARTY_PRIVACY_FRIENDS) && O.isFriend(i.id)) return "can_join";
    if ((0, c.A)(I, A.jUm.PARTY_PRIVACY_VOICE_CHANNEL)) {
        let e = f.getChannel(C.getVoiceChannelId());
        if (null == e || !R.isInChannel(e.id, i.id)) return "cannot_join";
        switch (e.type) {
            case A.rbe.DM:
            case A.rbe.GROUP_DM:
                return "can_join";
        }
        let t = p.getGuild(e.getGuildId());
        if (null == t || t.features.has(A.GuildFeatures.COMMUNITY)) return "cannot_join";
        let n = m.getMemberCount(t.id);
        if (null != n && n < 100) return "can_join";
    }
    return "cannot_join";
}
