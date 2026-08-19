n.d(e, { A: () => _, o: () => f });
var i,
    r = n(723702),
    l = n(170148),
    o = n(454292),
    a = n(550151),
    u = n(206589),
    c = n(125017),
    s = n(55730),
    d = n(287613),
    p = n(874546),
    A = n(702631),
    y = n(652215),
    f = (((i = {}).CAN_JOIN = "can_join"), (i.CANNOT_JOIN = "cannot_join"), (i.JOINED = "joined"), i);
function _(t) {
    let e,
        n,
        {
            user: i,
            activity: f,
            application: _,
            channelId: h,
            currentUser: m,
            isEmbedded: v,
            ChannelStore: g,
            GuildStore: I,
            GuildMemberCountStore: T,
            RelationshipStore: C,
            SelectedChannelStore: P,
            VoiceStateStore: j,
            PermissionStore: E,
            LocalActivityStore: S,
            SelfPresenceStore: D,
            EmbeddedActivitiesStore: L,
        } = t;
    if (
        (!v && null != (e = (0, o.A)(S, D, f?.application_id)) && (0, u.w)(e, f)) ||
        (v && null != (n = L.getCurrentEmbeddedActivity()) && n.applicationId === f?.application_id)
    )
        return "joined";
    if (null == i) return "cannot_join";
    if (v && null != h)
        return (0, a.Ay)({
            userId: i.id,
            activity: f,
            channelId: h,
            currentUser: m,
            application: _,
            isActivitiesEnabledForCurrentPlatform: (0, l.A)(),
            ChannelStore: g,
            VoiceStateStore: j,
            PermissionStore: E,
            GuildStore: I,
        }) === a.Gy.CAN_JOIN
            ? "can_join"
            : "cannot_join";
    if (
        (v && null == h && !(0, s.A)(f, y.jUm.CONTEXTLESS)) ||
        (!v && (!(0, p.Ay)(f) || !(0, r.platformSupportsActivityJoin)()))
    )
        return "cannot_join";
    let O = (0, c._)(f);
    if (!(0, d.A)(O) || (0, A.U)(O)) return "cannot_join";
    if ((0, s.A)(f, y.jUm.PARTY_PRIVACY_FRIENDS) && C.isFriend(i.id)) return "can_join";
    if ((0, s.A)(f, y.jUm.PARTY_PRIVACY_VOICE_CHANNEL)) {
        let t = g.getChannel(P.getVoiceChannelId());
        if (null == t || !j.isInChannel(t.id, i.id)) return "cannot_join";
        switch (t.type) {
            case y.rbe.DM:
            case y.rbe.GROUP_DM:
                return "can_join";
        }
        let e = I.getGuild(t.getGuildId());
        if (null == e || e.features.has(y.GuildFeatures.COMMUNITY)) return "cannot_join";
        let n = T.getMemberCount(e.id);
        if (null != n && n < 100) return "can_join";
    }
    return "cannot_join";
}
