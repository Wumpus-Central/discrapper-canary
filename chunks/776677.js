a.d(t, { A: () => _, o: () => f });
var n,
    l = a(723702),
    r = a(170148),
    i = a(454292),
    s = a(550151),
    o = a(206589),
    c = a(125017),
    d = a(833349),
    u = a(287613),
    h = a(874546),
    p = a(702631),
    m = a(652215),
    f = (((n = {}).CAN_JOIN = "can_join"), (n.CANNOT_JOIN = "cannot_join"), (n.JOINED = "joined"), n);
function _(e) {
    let t,
        a,
        {
            user: n,
            activity: f,
            application: _,
            channelId: b,
            currentUser: g,
            isEmbedded: x,
            ChannelStore: v,
            GuildStore: A,
            GuildMemberCountStore: E,
            RelationshipStore: y,
            SelectedChannelStore: I,
            VoiceStateStore: S,
            PermissionStore: j,
            LocalActivityStore: C,
            SelfPresenceStore: T,
            EmbeddedActivitiesStore: w,
        } = e;
    if (
        (!x && null != (t = (0, i.A)(C, T, f?.application_id)) && (0, o.w)(t, f)) ||
        (x && null != (a = w.getCurrentEmbeddedActivity()) && a.applicationId === f?.application_id)
    )
        return "joined";
    if (null == n) return "cannot_join";
    if (x && null != b)
        return (0, s.Ay)({
            userId: n.id,
            activity: f,
            channelId: b,
            currentUser: g,
            application: _,
            isActivitiesEnabledForCurrentPlatform: (0, r.A)(),
            ChannelStore: v,
            VoiceStateStore: S,
            PermissionStore: j,
            GuildStore: A,
        }) === s.Gy.CAN_JOIN
            ? "can_join"
            : "cannot_join";
    if (
        (x && null == b && !(0, d.A)(f, m.jUm.CONTEXTLESS)) ||
        (!x && (!(0, h.Ay)(f) || !(0, l.platformSupportsActivityJoin)()))
    )
        return "cannot_join";
    let R = (0, c._)(f);
    if (!(0, u.A)(R) || (0, p.U)(R)) return "cannot_join";
    if ((0, d.A)(f, m.jUm.PARTY_PRIVACY_FRIENDS) && y.isFriend(n.id)) return "can_join";
    if ((0, d.A)(f, m.jUm.PARTY_PRIVACY_VOICE_CHANNEL)) {
        let e = v.getChannel(I.getVoiceChannelId());
        if (null == e || !S.isInChannel(e.id, n.id)) return "cannot_join";
        switch (e.type) {
            case m.rbe.DM:
            case m.rbe.GROUP_DM:
                return "can_join";
        }
        let t = A.getGuild(e.getGuildId());
        if (null == t || t.features.has(m.GuildFeatures.COMMUNITY)) return "cannot_join";
        let a = E.getMemberCount(t.id);
        if (null != a && a < 100) return "can_join";
    }
    return "cannot_join";
}
