var i,
    r = e(991690),
    l = e(366430),
    u = e(723702),
    a = e(170148),
    o = e(454292),
    c = e(550151),
    d = e(206589),
    _ = e(125017),
    A = e(55730),
    s = e(287613),
    C = e(874546),
    I = e(702631),
    f = e(652215),
    p = (((i = {}).CAN_JOIN = "can_join"), (i.CANNOT_JOIN = "cannot_join"), (i.JOINED = "joined"), i);
e.d(
    t,
    {},
    {
        A: function (n) {
            let t,
                e,
                {
                    user: i,
                    activity: p,
                    application: N,
                    channelId: j,
                    currentUser: h,
                    isContentGated: E,
                    isEmbedded: O,
                    ChannelStore: S,
                    GuildStore: y,
                    GuildMemberCountStore: U,
                    RelationshipStore: m,
                    SelectedChannelStore: P,
                    VoiceStateStore: T,
                    PermissionStore: V,
                    LocalActivityStore: g,
                    SelfPresenceStore: D,
                    EmbeddedActivitiesStore: b,
                } = n;
            if (
                (!O && null != (t = (0, o.A)(g, D, p?.application_id)) && (0, d.w)(t, p)) ||
                (O && null != (e = b.getCurrentEmbeddedActivity()) && e.applicationId === p?.application_id)
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
                    let u = e.getChannel(l);
                    return (
                        null == u ||
                        (u.type === f.rbe.GUILD_VOICE && u.application_id === t.id && r.can(f.xBc.CONNECT, u))
                    );
                })(i.id, N, S, T, V)
            )
                return "cannot_join";
            if (O && null != j && !(0, l.VS)(N))
                return (0, c.Ay)({
                    userId: i.id,
                    activity: p,
                    channelId: j,
                    currentUser: h,
                    application: N,
                    isContentGated: E,
                    isActivitiesEnabledForCurrentPlatform: (0, a.A)(),
                    ChannelStore: S,
                    VoiceStateStore: T,
                    PermissionStore: V,
                    GuildStore: y,
                }) === c.Gy.CAN_JOIN
                    ? "can_join"
                    : "cannot_join";
            if (
                (O && null == j && !(0, A.A)(p, f.jUm.CONTEXTLESS) && !(0, l.VS)(N)) ||
                (!O && (!(0, C.Ay)(p) || !(0, u.Ls)()))
            )
                return "cannot_join";
            let L = (0, _._)(p);
            if (!(0, s.A)(L) || (0, I.U)(L)) return "cannot_join";
            if ((0, A.A)(p, f.jUm.PARTY_PRIVACY_FRIENDS) && m.isFriend(i.id)) return "can_join";
            if ((0, A.A)(p, f.jUm.PARTY_PRIVACY_VOICE_CHANNEL)) {
                let n = S.getChannel(P.getVoiceChannelId());
                if (null == n || !T.isInChannel(n.id, i.id)) return "cannot_join";
                switch (n.type) {
                    case f.rbe.DM:
                    case f.rbe.GROUP_DM:
                        return "can_join";
                }
                let t = y.getGuild(n.getGuildId());
                if (null == t || t.features.has(f.GuildFeatures.COMMUNITY)) return "cannot_join";
                let e = U.getMemberCount(t.id);
                if (null != e && e < 100) return "can_join";
            }
            return "cannot_join";
        },
        o: p,
    },
);
