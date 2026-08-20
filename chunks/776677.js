i.d(n, { A: () => f, o: () => _ });
var e,
    l = i(723702),
    r = i(170148),
    a = i(454292),
    o = i(550151),
    u = i(206589),
    c = i(125017),
    d = i(55730),
    s = i(287613),
    p = i(874546),
    A = i(702631),
    y = i(652215),
    _ = (((e = {}).CAN_JOIN = "can_join"), (e.CANNOT_JOIN = "cannot_join"), (e.JOINED = "joined"), e);
function f(t) {
    let n,
        i,
        {
            user: e,
            activity: _,
            application: f,
            channelId: h,
            currentUser: T,
            isEmbedded: I,
            ChannelStore: C,
            GuildStore: v,
            GuildMemberCountStore: g,
            RelationshipStore: j,
            SelectedChannelStore: m,
            VoiceStateStore: E,
            PermissionStore: S,
            LocalActivityStore: N,
            SelfPresenceStore: O,
            EmbeddedActivitiesStore: V,
        } = t;
    if (
        (!I && null != (n = (0, a.A)(N, O, _?.application_id)) && (0, u.w)(n, _)) ||
        (I && null != (i = V.getCurrentEmbeddedActivity()) && i.applicationId === _?.application_id)
    )
        return "joined";
    if (null == e) return "cannot_join";
    if (I && null != h)
        return (0, o.Ay)({
            userId: e.id,
            activity: _,
            channelId: h,
            currentUser: T,
            application: f,
            isActivitiesEnabledForCurrentPlatform: (0, r.A)(),
            ChannelStore: C,
            VoiceStateStore: E,
            PermissionStore: S,
            GuildStore: v,
        }) === o.Gy.CAN_JOIN
            ? "can_join"
            : "cannot_join";
    if (
        (I && null == h && !(0, d.A)(_, y.jUm.CONTEXTLESS)) ||
        (!I && (!(0, p.Ay)(_) || !(0, l.platformSupportsActivityJoin)()))
    )
        return "cannot_join";
    let P = (0, c._)(_);
    if (!(0, s.A)(P) || (0, A.U)(P)) return "cannot_join";
    if ((0, d.A)(_, y.jUm.PARTY_PRIVACY_FRIENDS) && j.isFriend(e.id)) return "can_join";
    if ((0, d.A)(_, y.jUm.PARTY_PRIVACY_VOICE_CHANNEL)) {
        let t = C.getChannel(m.getVoiceChannelId());
        if (null == t || !E.isInChannel(t.id, e.id)) return "cannot_join";
        switch (t.type) {
            case y.rbe.DM:
            case y.rbe.GROUP_DM:
                return "can_join";
        }
        let n = v.getGuild(t.getGuildId());
        if (null == n || n.features.has(y.GuildFeatures.COMMUNITY)) return "cannot_join";
        let i = g.getMemberCount(n.id);
        if (null != i && i < 100) return "can_join";
    }
    return "cannot_join";
}
