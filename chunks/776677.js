n.d(e, { A: () => _, o: () => y });
var i,
    r = n(723702),
    l = n(170148),
    o = n(454292),
    a = n(550151),
    u = n(206589),
    c = n(125017),
    s = n(833349),
    d = n(287613),
    A = n(874546),
    p = n(702631),
    f = n(652215),
    y = (((i = {}).CAN_JOIN = "can_join"), (i.CANNOT_JOIN = "cannot_join"), (i.JOINED = "joined"), i);
function _(t) {
    let e,
        n,
        {
            user: i,
            activity: y,
            application: _,
            channelId: v,
            currentUser: h,
            isEmbedded: m,
            ChannelStore: g,
            GuildStore: I,
            GuildMemberCountStore: T,
            RelationshipStore: C,
            SelectedChannelStore: j,
            VoiceStateStore: E,
            PermissionStore: P,
            LocalActivityStore: S,
            SelfPresenceStore: D,
            EmbeddedActivitiesStore: N,
        } = t;
    if (
        (!m && null != (e = (0, o.A)(S, D, y?.application_id)) && (0, u.w)(e, y)) ||
        (m && null != (n = N.getCurrentEmbeddedActivity()) && n.applicationId === y?.application_id)
    )
        return "joined";
    if (null == i) return "cannot_join";
    if (m && null != v)
        return (0, a.Ay)({
            userId: i.id,
            activity: y,
            channelId: v,
            currentUser: h,
            application: _,
            isActivitiesEnabledForCurrentPlatform: (0, l.A)(),
            ChannelStore: g,
            VoiceStateStore: E,
            PermissionStore: P,
            GuildStore: I,
        }) === a.Gy.CAN_JOIN
            ? "can_join"
            : "cannot_join";
    if (
        (m && null == v && !(0, s.A)(y, f.jUm.CONTEXTLESS)) ||
        (!m && (!(0, A.Ay)(y) || !(0, r.platformSupportsActivityJoin)()))
    )
        return "cannot_join";
    let b = (0, c._)(y);
    if (!(0, d.A)(b) || (0, p.U)(b)) return "cannot_join";
    if ((0, s.A)(y, f.jUm.PARTY_PRIVACY_FRIENDS) && C.isFriend(i.id)) return "can_join";
    if ((0, s.A)(y, f.jUm.PARTY_PRIVACY_VOICE_CHANNEL)) {
        let t = g.getChannel(j.getVoiceChannelId());
        if (null == t || !E.isInChannel(t.id, i.id)) return "cannot_join";
        switch (t.type) {
            case f.rbe.DM:
            case f.rbe.GROUP_DM:
                return "can_join";
        }
        let e = I.getGuild(t.getGuildId());
        if (null == e || e.features.has(f.GuildFeatures.COMMUNITY)) return "cannot_join";
        let n = T.getMemberCount(e.id);
        if (null != n && n < 100) return "can_join";
    }
    return "cannot_join";
}
