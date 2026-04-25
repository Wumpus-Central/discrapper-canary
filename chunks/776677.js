a.d(t, { A: () => b, o: () => f });
var r,
    n = a(723702),
    l = a(170148),
    i = a(454292),
    s = a(550151),
    o = a(206589),
    c = a(125017),
    d = a(833349),
    u = a(287613),
    h = a(874546),
    p = a(702631),
    m = a(652215),
    f = (((r = {}).CAN_JOIN = "can_join"), (r.CANNOT_JOIN = "cannot_join"), (r.JOINED = "joined"), r);
function b(e) {
    let t,
        a,
        {
            user: r,
            activity: f,
            application: b,
            channelId: _,
            currentUser: g,
            isEmbedded: x,
            ChannelStore: v,
            GuildStore: A,
            GuildMemberCountStore: y,
            RelationshipStore: E,
            SelectedChannelStore: I,
            VoiceStateStore: S,
            PermissionStore: j,
            LocalActivityStore: C,
            SelfPresenceStore: T,
            EmbeddedActivitiesStore: R,
        } = e;
    if (
        (!x && null != (t = (0, i.A)(C, T, f?.application_id)) && (0, o.w)(t, f)) ||
        (x && null != (a = R.getCurrentEmbeddedActivity()) && a.applicationId === f?.application_id)
    )
        return "joined";
    if (null == r) return "cannot_join";
    if (x && null != _)
        return (0, s.Ay)({
            userId: r.id,
            activity: f,
            channelId: _,
            currentUser: g,
            application: b,
            isActivitiesEnabledForCurrentPlatform: (0, l.A)(),
            ChannelStore: v,
            VoiceStateStore: S,
            PermissionStore: j,
            GuildStore: A,
        }) === s.Gy.CAN_JOIN
            ? "can_join"
            : "cannot_join";
    if (
        (x && null == _ && !(0, d.A)(f, m.jUm.CONTEXTLESS)) ||
        (!x && (!(0, h.Ay)(f) || !(0, n.platformSupportsActivityJoin)()))
    )
        return "cannot_join";
    let w = (0, c._)(f);
    if (!(0, u.A)(w) || (0, p.U)(w)) return "cannot_join";
    if ((0, d.A)(f, m.jUm.PARTY_PRIVACY_FRIENDS) && E.isFriend(r.id)) return "can_join";
    if ((0, d.A)(f, m.jUm.PARTY_PRIVACY_VOICE_CHANNEL)) {
        let e = v.getChannel(I.getVoiceChannelId());
        if (null == e || !S.isInChannel(e.id, r.id)) return "cannot_join";
        switch (e.type) {
            case m.rbe.DM:
            case m.rbe.GROUP_DM:
                return "can_join";
        }
        let t = A.getGuild(e.getGuildId());
        if (null == t || t.features.has(m.GuildFeatures.COMMUNITY)) return "cannot_join";
        let a = y.getMemberCount(t.id);
        if (null != a && a < 100) return "can_join";
    }
    return "cannot_join";
}
