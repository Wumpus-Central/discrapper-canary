n.d(t, { A: () => T, o: () => A });
var i,
    r = n(723702),
    a = n(170148),
    s = n(454292),
    _ = n(550151),
    l = n(206589),
    o = n(125017),
    E = n(833349),
    d = n(287613),
    c = n(874546),
    u = n(702631),
    I = n(652215),
    A = (((i = {}).CAN_JOIN = "can_join"), (i.CANNOT_JOIN = "cannot_join"), (i.JOINED = "joined"), i);
function T(e) {
    let t,
        n,
        {
            user: i,
            activity: A,
            application: T,
            channelId: S,
            currentUser: N,
            isEmbedded: O,
            ChannelStore: R,
            GuildStore: f,
            GuildMemberCountStore: C,
            RelationshipStore: p,
            SelectedChannelStore: m,
            VoiceStateStore: L,
            PermissionStore: D,
            LocalActivityStore: h,
            SelfPresenceStore: g,
            EmbeddedActivitiesStore: b,
        } = e;
    if (
        (!O && null != (t = (0, s.A)(h, g, A?.application_id)) && (0, l.w)(t, A)) ||
        (O && null != (n = b.getCurrentEmbeddedActivity()) && n.applicationId === A?.application_id)
    )
        return "joined";
    if (null == i) return "cannot_join";
    if (O && null != S)
        return (0, _.Ay)({
            userId: i.id,
            activity: A,
            channelId: S,
            currentUser: N,
            application: T,
            isActivitiesEnabledForCurrentPlatform: (0, a.A)(),
            ChannelStore: R,
            VoiceStateStore: L,
            PermissionStore: D,
            GuildStore: f,
        }) === _.Gy.CAN_JOIN
            ? "can_join"
            : "cannot_join";
    if (
        (O && null == S && !(0, E.A)(A, I.jUm.CONTEXTLESS)) ||
        (!O && (!(0, c.Ay)(A) || !(0, r.platformSupportsActivityJoin)()))
    )
        return "cannot_join";
    let U = (0, o._)(A);
    if (!(0, d.A)(U) || (0, u.U)(U)) return "cannot_join";
    if ((0, E.A)(A, I.jUm.PARTY_PRIVACY_FRIENDS) && p.isFriend(i.id)) return "can_join";
    if ((0, E.A)(A, I.jUm.PARTY_PRIVACY_VOICE_CHANNEL)) {
        let e = R.getChannel(m.getVoiceChannelId());
        if (null == e || !L.isInChannel(e.id, i.id)) return "cannot_join";
        switch (e.type) {
            case I.rbe.DM:
            case I.rbe.GROUP_DM:
                return "can_join";
        }
        let t = f.getGuild(e.getGuildId());
        if (null == t || t.features.has(I.GuildFeatures.COMMUNITY)) return "cannot_join";
        let n = C.getMemberCount(t.id);
        if (null != n && n < 100) return "can_join";
    }
    return "cannot_join";
}
