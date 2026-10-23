e.d(t, { A: () => N, o: () => f });
var i,
    r = e(991690),
    l = e(366430),
    o = e(723702),
    u = e(170148),
    a = e(454292),
    c = e(550151),
    d = e(206589),
    _ = e(125017),
    A = e(55730),
    s = e(287613),
    p = e(874546),
    C = e(702631),
    I = e(652215),
    f = (((i = {}).CAN_JOIN = "can_join"), (i.CANNOT_JOIN = "cannot_join"), (i.JOINED = "joined"), i);
function N(n) {
    let t,
        e,
        {
            user: i,
            activity: f,
            application: N,
            channelId: j,
            currentUser: h,
            isContentGated: E,
            isEmbedded: O,
            ChannelStore: S,
            GuildStore: T,
            GuildMemberCountStore: y,
            RelationshipStore: V,
            SelectedChannelStore: m,
            VoiceStateStore: U,
            PermissionStore: P,
            LocalActivityStore: g,
            SelfPresenceStore: D,
            EmbeddedActivitiesStore: b,
        } = n;
    if (
        (!O && null != (t = (0, a.A)(g, D, f?.application_id)) && (0, d.w)(t, f)) ||
        (O && null != (e = b.getCurrentEmbeddedActivity()) && e.applicationId === f?.application_id)
    )
        return "joined";
    if (null == i) return "cannot_join";
    let G = (0, l.It)(N);
    if (
        O &&
        null != N &&
        G.has(r.U.VOICE_CHANNEL) &&
        !G.has(r.U.MAIN) &&
        !G.has(r.U.APP_CHANNEL) &&
        !(function (n, t, e, i, r) {
            let l = i.getVoiceStateForUser(n)?.channelId;
            if (null == l) return !1;
            let o = e.getChannel(l);
            return null == o || (o.type === I.rbe.GUILD_VOICE && o.application_id === t.id && r.can(I.xBc.CONNECT, o));
        })(i.id, N, S, U, P)
    )
        return "cannot_join";
    if (O && null != j && !(0, l.VS)(N))
        return (0, c.Ay)({
            userId: i.id,
            activity: f,
            channelId: j,
            currentUser: h,
            application: N,
            isContentGated: E,
            isActivitiesEnabledForCurrentPlatform: (0, u.A)(),
            ChannelStore: S,
            VoiceStateStore: U,
            PermissionStore: P,
            GuildStore: T,
        }) === c.Gy.CAN_JOIN
            ? "can_join"
            : "cannot_join";
    if (
        (O && null == j && !(0, A.A)(f, I.jUm.CONTEXTLESS) && !(0, l.VS)(N)) ||
        (!O && (!(0, p.Ay)(f) || !(0, o.platformSupportsActivityJoin)()))
    )
        return "cannot_join";
    let M = (0, _._)(f);
    if (!(0, s.A)(M) || (0, C.U)(M)) return "cannot_join";
    if ((0, A.A)(f, I.jUm.PARTY_PRIVACY_FRIENDS) && V.isFriend(i.id)) return "can_join";
    if ((0, A.A)(f, I.jUm.PARTY_PRIVACY_VOICE_CHANNEL)) {
        let n = S.getChannel(m.getVoiceChannelId());
        if (null == n || !U.isInChannel(n.id, i.id)) return "cannot_join";
        switch (n.type) {
            case I.rbe.DM:
            case I.rbe.GROUP_DM:
                return "can_join";
        }
        let t = T.getGuild(n.getGuildId());
        if (null == t || t.features.has(I.GuildFeatures.COMMUNITY)) return "cannot_join";
        let e = y.getMemberCount(t.id);
        if (null != e && e < 100) return "can_join";
    }
    return "cannot_join";
}
