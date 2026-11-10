var i,
    r = e(991690),
    l = e(366430),
    u = e(723702),
    o = e(170148),
    a = e(454292),
    c = e(550151),
    d = e(206589),
    _ = e(125017),
    s = e(55730),
    A = e(287613),
    C = e(874546),
    I = e(702631),
    p = e(652215),
    f = (((i = {}).CAN_JOIN = "can_join"), (i.CANNOT_JOIN = "cannot_join"), (i.JOINED = "joined"), i);
e.d(
    t,
    {},
    {
        A: function (n) {
            let t,
                e,
                {
                    user: i,
                    activity: f,
                    application: N,
                    channelId: j,
                    currentUser: O,
                    isContentGated: h,
                    isEmbedded: E,
                    ChannelStore: S,
                    GuildStore: y,
                    GuildMemberCountStore: m,
                    RelationshipStore: U,
                    SelectedChannelStore: T,
                    VoiceStateStore: P,
                    PermissionStore: V,
                    LocalActivityStore: g,
                    SelfPresenceStore: D,
                    EmbeddedActivitiesStore: b,
                } = n;
            if (
                (!E && null != (t = (0, a.A)(g, D, f?.application_id)) && (0, d.w)(t, f)) ||
                (E && null != (e = b.getCurrentEmbeddedActivity()) && e.applicationId === f?.application_id)
            )
                return "joined";
            if (
                null == i ||
                (E &&
                    null != N &&
                    (0, l.It)(N).has(r.U.VOICE_CHANNEL) &&
                    !(0, l.U4)(N) &&
                    !(function (n, t, e, i, r) {
                        let l = i.getVoiceStateForUser(n)?.channelId;
                        if (null == l) return !1;
                        let u = e.getChannel(l);
                        return (
                            null == u ||
                            (u.type === p.rbe.GUILD_VOICE && u.application_id === t.id && r.can(p.xBc.CONNECT, u))
                        );
                    })(i.id, N, S, P, V))
            )
                return "cannot_join";
            if (E && null != j && !(0, l.VS)(N))
                return (0, c.Ay)({
                    userId: i.id,
                    activity: f,
                    channelId: j,
                    currentUser: O,
                    application: N,
                    isContentGated: h,
                    isActivitiesEnabledForCurrentPlatform: (0, o.A)(),
                    ChannelStore: S,
                    VoiceStateStore: P,
                    PermissionStore: V,
                    GuildStore: y,
                }) === c.Gy.CAN_JOIN
                    ? "can_join"
                    : "cannot_join";
            if (
                (E && null == j && !(0, s.A)(f, p.jUm.CONTEXTLESS) && !(0, l.VS)(N)) ||
                (!E && (!(0, C.Ay)(f) || !(0, u.Ls)()))
            )
                return "cannot_join";
            let G = (0, _._)(f);
            if (!(0, A.A)(G) || (0, I.U)(G)) return "cannot_join";
            if ((0, s.A)(f, p.jUm.PARTY_PRIVACY_FRIENDS) && U.isFriend(i.id)) return "can_join";
            if ((0, s.A)(f, p.jUm.PARTY_PRIVACY_VOICE_CHANNEL)) {
                let n = S.getChannel(T.getVoiceChannelId());
                if (null == n || !P.isInChannel(n.id, i.id)) return "cannot_join";
                switch (n.type) {
                    case p.rbe.DM:
                    case p.rbe.GROUP_DM:
                        return "can_join";
                }
                let t = y.getGuild(n.getGuildId());
                if (null == t || t.features.has(p.GuildFeatures.COMMUNITY)) return "cannot_join";
                let e = m.getMemberCount(t.id);
                if (null != e && e < 100) return "can_join";
            }
            return "cannot_join";
        },
        o: f,
    },
);
