var r,
    e = i(991690),
    l = i(366430),
    a = i(723702),
    u = i(170148),
    o = i(454292),
    c = i(550151),
    d = i(206589),
    s = i(125017),
    f = i(55730),
    p = i(287613),
    y = i(874546),
    A = i(702631),
    _ = i(652215),
    S = (((r = {}).CAN_JOIN = "can_join"), (r.CANNOT_JOIN = "cannot_join"), (r.JOINED = "joined"), r);
i.d(
    n,
    {},
    {
        A: function (t) {
            let n,
                i,
                {
                    user: r,
                    activity: S,
                    application: C,
                    channelId: I,
                    currentUser: g,
                    isContentGated: T,
                    isEmbedded: m,
                    ChannelStore: N,
                    GuildStore: h,
                    GuildMemberCountStore: E,
                    RelationshipStore: P,
                    SelectedChannelStore: U,
                    VoiceStateStore: D,
                    PermissionStore: Y,
                    LocalActivityStore: O,
                    SelfPresenceStore: j,
                    EmbeddedActivitiesStore: v,
                } = t;
            if (
                (!m && null != (n = (0, o.A)(O, j, S?.application_id)) && (0, d.w)(n, S)) ||
                (m && null != (i = v.getCurrentEmbeddedActivity()) && i.applicationId === S?.application_id)
            )
                return "joined";
            if (
                null == r ||
                (m &&
                    null != C &&
                    (0, l.It)(C).has(e.U.VOICE_CHANNEL) &&
                    !(0, l.U4)(C) &&
                    !(function (t, n, i, r, e) {
                        let l = r.getVoiceStateForUser(t)?.channelId;
                        if (null == l) return !1;
                        let a = i.getChannel(l);
                        return (
                            null == a ||
                            (a.type === _.rbe.GUILD_VOICE && a.application_id === n.id && e.can(_.xBc.CONNECT, a))
                        );
                    })(r.id, C, N, D, Y))
            )
                return "cannot_join";
            if (m && null != I && !(0, l.VS)(C))
                return (0, c.Ay)({
                    userId: r.id,
                    activity: S,
                    channelId: I,
                    currentUser: g,
                    application: C,
                    isContentGated: T,
                    isActivitiesEnabledForCurrentPlatform: (0, u.A)(),
                    ChannelStore: N,
                    VoiceStateStore: D,
                    PermissionStore: Y,
                    GuildStore: h,
                }) === c.Gy.CAN_JOIN
                    ? "can_join"
                    : "cannot_join";
            if (
                (m && null == I && !(0, f.A)(S, _.jUm.CONTEXTLESS) && !(0, l.VS)(C)) ||
                (!m && (!(0, y.Ay)(S) || !(0, a.Ls)()))
            )
                return "cannot_join";
            let b = (0, s._)(S);
            if (!(0, p.A)(b) || (0, A.U)(b)) return "cannot_join";
            if ((0, f.A)(S, _.jUm.PARTY_PRIVACY_FRIENDS) && P.isFriend(r.id)) return "can_join";
            if ((0, f.A)(S, _.jUm.PARTY_PRIVACY_VOICE_CHANNEL)) {
                let t = N.getChannel(U.getVoiceChannelId());
                if (null == t || !D.isInChannel(t.id, r.id)) return "cannot_join";
                switch (t.type) {
                    case _.rbe.DM:
                    case _.rbe.GROUP_DM:
                        return "can_join";
                }
                let n = h.getGuild(t.getGuildId());
                if (null == n || n.features.has(_.GuildFeatures.COMMUNITY)) return "cannot_join";
                let i = E.getMemberCount(n.id);
                if (null != i && i < 100) return "can_join";
            }
            return "cannot_join";
        },
        o: S,
    },
);
