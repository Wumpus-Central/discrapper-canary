n.d(t, { A: () => m, o: () => h });
var a,
    i = n(723702),
    l = n(170148),
    r = n(454292),
    o = n(550151),
    s = n(206589),
    c = n(125017),
    d = n(833349),
    u = n(287613),
    _ = n(874546),
    p = n(702631),
    f = n(652215),
    h = (((a = {}).CAN_JOIN = "can_join"), (a.CANNOT_JOIN = "cannot_join"), (a.JOINED = "joined"), a);
function m(e) {
    let t,
        n,
        {
            user: a,
            activity: h,
            application: m,
            channelId: g,
            currentUser: b,
            isEmbedded: A,
            ChannelStore: E,
            GuildStore: v,
            GuildMemberCountStore: I,
            RelationshipStore: y,
            SelectedChannelStore: S,
            VoiceStateStore: C,
            PermissionStore: T,
            LocalActivityStore: x,
            SelfPresenceStore: R,
            EmbeddedActivitiesStore: L,
        } = e;
    if (
        (!A && null != (t = (0, r.A)(x, R, h?.application_id)) && (0, s.w)(t, h)) ||
        (A && null != (n = L.getCurrentEmbeddedActivity()) && n.applicationId === h?.application_id)
    )
        return "joined";
    if (null == a) return "cannot_join";
    if (A && null != g)
        return (0, o.Ay)({
            userId: a.id,
            activity: h,
            channelId: g,
            currentUser: b,
            application: m,
            isActivitiesEnabledForCurrentPlatform: (0, l.A)(),
            ChannelStore: E,
            VoiceStateStore: C,
            PermissionStore: T,
            GuildStore: v,
        }) === o.Gy.CAN_JOIN
            ? "can_join"
            : "cannot_join";
    if (
        (A && null == g && !(0, d.A)(h, f.jUm.CONTEXTLESS)) ||
        (!A && (!(0, _.Ay)(h) || !(0, i.platformSupportsActivityJoin)()))
    )
        return "cannot_join";
    let N = (0, c._)(h);
    if (!(0, u.A)(N) || (0, p.U)(N)) return "cannot_join";
    if ((0, d.A)(h, f.jUm.PARTY_PRIVACY_FRIENDS) && y.isFriend(a.id)) return "can_join";
    if ((0, d.A)(h, f.jUm.PARTY_PRIVACY_VOICE_CHANNEL)) {
        let e = E.getChannel(S.getVoiceChannelId());
        if (null == e || !C.isInChannel(e.id, a.id)) return "cannot_join";
        switch (e.type) {
            case f.rbe.DM:
            case f.rbe.GROUP_DM:
                return "can_join";
        }
        let t = v.getGuild(e.getGuildId());
        if (null == t || t.features.has(f.GuildFeatures.COMMUNITY)) return "cannot_join";
        let n = I.getMemberCount(t.id);
        if (null != n && n < 100) return "can_join";
    }
    return "cannot_join";
}
