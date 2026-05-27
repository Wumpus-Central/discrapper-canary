n.d(e, { A: () => y, o: () => _ });
var i,
    r = n(723702),
    l = n(170148),
    o = n(454292),
    u = n(550151),
    a = n(206589),
    c = n(125017),
    s = n(55730),
    d = n(287613),
    A = n(874546),
    p = n(702631),
    f = n(652215),
    _ = (((i = {}).CAN_JOIN = "can_join"), (i.CANNOT_JOIN = "cannot_join"), (i.JOINED = "joined"), i);
function y(t) {
    let e,
        n,
        {
            user: i,
            activity: _,
            application: y,
            channelId: m,
            currentUser: h,
            isEmbedded: v,
            ChannelStore: g,
            GuildStore: T,
            GuildMemberCountStore: I,
            RelationshipStore: C,
            SelectedChannelStore: E,
            VoiceStateStore: P,
            PermissionStore: j,
            LocalActivityStore: S,
            SelfPresenceStore: N,
            EmbeddedActivitiesStore: O,
        } = t;
    if (
        (!v && null != (e = (0, o.A)(S, N, _?.application_id)) && (0, a.w)(e, _)) ||
        (v && null != (n = O.getCurrentEmbeddedActivity()) && n.applicationId === _?.application_id)
    )
        return "joined";
    if (null == i) return "cannot_join";
    if (v && null != m)
        return (0, u.Ay)({
            userId: i.id,
            activity: _,
            channelId: m,
            currentUser: h,
            application: y,
            isActivitiesEnabledForCurrentPlatform: (0, l.A)(),
            ChannelStore: g,
            VoiceStateStore: P,
            PermissionStore: j,
            GuildStore: T,
        }) === u.Gy.CAN_JOIN
            ? "can_join"
            : "cannot_join";
    if (
        (v && null == m && !(0, s.A)(_, f.jUm.CONTEXTLESS)) ||
        (!v && (!(0, A.Ay)(_) || !(0, r.platformSupportsActivityJoin)()))
    )
        return "cannot_join";
    let D = (0, c._)(_);
    if (!(0, d.A)(D) || (0, p.U)(D)) return "cannot_join";
    if ((0, s.A)(_, f.jUm.PARTY_PRIVACY_FRIENDS) && C.isFriend(i.id)) return "can_join";
    if ((0, s.A)(_, f.jUm.PARTY_PRIVACY_VOICE_CHANNEL)) {
        let t = g.getChannel(E.getVoiceChannelId());
        if (null == t || !P.isInChannel(t.id, i.id)) return "cannot_join";
        switch (t.type) {
            case f.rbe.DM:
            case f.rbe.GROUP_DM:
                return "can_join";
        }
        let e = T.getGuild(t.getGuildId());
        if (null == e || e.features.has(f.GuildFeatures.COMMUNITY)) return "cannot_join";
        let n = I.getMemberCount(e.id);
        if (null != n && n < 100) return "can_join";
    }
    return "cannot_join";
}
