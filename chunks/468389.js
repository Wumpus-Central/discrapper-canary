e.d(t, { A: () => w }), e(321073);
var n = e(627968);
e(64700);
var l = e(311907),
    a = e(192308),
    d = e(477782),
    o = e(308368),
    s = e(544420),
    A = e(212245),
    c = e(688810),
    p = e(429913),
    r = e(655116),
    u = e(160768),
    I = e(341335),
    y = e(286617),
    N = e(533207),
    E = e(881335),
    _ = e(961350),
    b = e(734057),
    f = e(629016),
    h = e(498642),
    C = e(71393),
    T = e(375492),
    S = e(576705),
    m = e(290863),
    g = e(994500),
    v = e(309010),
    j = e(461213),
    O = e(287809),
    x = e(977997),
    D = e(689168),
    L = e(562153),
    U = e(795816),
    G = e(933958),
    P = e(447031),
    V = e(170148),
    Y = e(969151),
    J = e(776677),
    $ = e(550151),
    M = e(833349),
    R = e(765379),
    K = e(946255),
    k = e(360469),
    Q = e(652215),
    X = e(272984),
    q = e(985018);
function w(i, t) {
    let { analyticsLocations: w } = (0, c.Ay)(),
        B = (0, l.bG)([O.default], () => O.default.getCurrentUser()),
        H = (0, l.bG)([G.Ay], () => G.Ay.getSelfEmbeddedActivities()),
        F = (0, l.yK)([j.A], () =>
            j.A.getActivities().filter((i) => null == i.application_id || !H?.has(i.application_id)),
        ),
        Z = (0, l.yK)([m.A], () => (null != t ? m.A.getActivities(t.id, i?.getGuildId()) : []), [t, i]),
        z = (0, l.yK)([G.Ay], () => {
            let e = i?.id != null ? G.Ay.getEmbeddedActivitiesForChannel(i.id) : G.Am;
            return null != t
                ? e.filter((i) => {
                      let { userIds: e } = i;
                      return e.has(t.id);
                  })
                : e;
        }, [t, i]),
        W = (0, l.bG)([S.A], () => null == i || i.isPrivate() || S.A.can(Q.xBc.SEND_MESSAGES, i), [i]),
        ii = (0, l.yK)(
            [D.A],
            () => [
                ...Z.map(
                    (i) => null != i.application_id && D.A.getState(i.application_id, Q.xL.JOIN) === Q.eAD.LOADING,
                ),
                ...z.map((i) => D.A.getState(i.applicationId, Q.xL.JOIN) === Q.eAD.LOADING),
            ],
            [Z, z],
        ),
        it = (0, p.A)([
            ...Z.filter((i) => i?.application_id != null).map((i) => i.application_id),
            ...z.map((i) => i.applicationId),
        ]),
        ie = i?.id,
        il = (0, l.yK)(
            [b.A, C.A, h.A, g.A, v.A, x.A, S.A, T.A, j.A, G.Ay],
            () => [
                ...Z.map((i) =>
                    (0, J.A)({
                        user: t ?? B,
                        activity: i,
                        application: it.find((t) => t?.id === i.application_id),
                        channelId: ie,
                        currentUser: B,
                        isEmbedded: (0, R.A)(i),
                        ChannelStore: b.A,
                        GuildStore: C.A,
                        GuildMemberCountStore: h.A,
                        RelationshipStore: g.A,
                        SelectedChannelStore: v.A,
                        VoiceStateStore: x.A,
                        PermissionStore: S.A,
                        LocalActivityStore: T.A,
                        SelfPresenceStore: j.A,
                        EmbeddedActivitiesStore: G.Ay,
                    }),
                ),
                ...z.map((i) => {
                    let e = t ?? B;
                    return null == e
                        ? J.o.CANNOT_JOIN
                        : (0, $.Ay)({
                                userId: e.id,
                                application: it.find((t) => t?.id === i.applicationId),
                                channelId: ie,
                                currentUser: B,
                                isActivitiesEnabledForCurrentPlatform: (0, V.A)(),
                                ChannelStore: b.A,
                                GuildStore: C.A,
                                VoiceStateStore: x.A,
                                PermissionStore: S.A,
                            }) === $.Gy.CAN_JOIN
                          ? J.o.CAN_JOIN
                          : J.o.CANNOT_JOIN;
                }),
            ],
            [Z, it, ie, B, z, t],
        ),
        ia = (0, l.yK)([f.A], () => F.map((i) => !f.A.getParty(i.party?.id)?.has(t?.id ?? Q.dJq)), [F, t]),
        id = (0, l.yK)(
            [r.A, _.default],
            () => Z.map((i) => (i.type === Q.$pd.LISTENING && null != t ? (0, y.A)(r.A, _.default, t, i) : void 0)),
            [t, Z],
        ),
        io = (0, A.p)();
    if (!W && i?.type !== Q.rbe.GUILD_VOICE) return null;
    let is = (e, n) => {
            null != i
                ? o.A.sendActivityInvite({ type: e, channelId: i.id, activity: n, location: Q.ThZ.CONTEXT_MENU })
                : null != t &&
                  o.A.sendActivityInviteUser({ type: e, userId: t.id, activity: n, location: Q.ThZ.CONTEXT_MENU });
        },
        iA = async (i) => {
            let e = (0, M.A)(i, Q.jUm.EMBEDDED),
                n = v.A.getVoiceChannelId(),
                l = b.A.getChannel(n);
            await s.Ay.join({
                userId: t.id,
                sessionId: i.session_id,
                applicationId: i.application_id,
                channelId: n,
                messageId: null,
                intent: k.W9.PLAY,
                embedded: e,
                locationObject: io.location,
                analyticsLocations: w,
            }),
                e ||
                    (0, K.A)({
                        type: Q.UqL.JOIN,
                        userId: t.id,
                        guildId: l?.guild_id,
                        channelId: n,
                        channelType: l?.type,
                        applicationId: i.application_id,
                        partyId: i.party?.id,
                        locationObject: io.location,
                        analyticsLocations: w,
                    });
        },
        ic = async (t) => {
            await (0, P.A)({
                applicationId: t.applicationId,
                activityChannelId: i?.id,
                locationObject: io.location,
                analyticsLocations: w,
            });
        },
        ip = [];
    return (
        (null != t && null != B && t?.id === B.id) ||
            (H?.forEach((l) => {
                let o = t?.id != null && l.userIds.has(t?.id),
                    s = S.A.can(Q.xBc.CREATE_INSTANT_INVITE, i),
                    A = it.find((i) => i?.id === l.applicationId);
                null != l.launchId &&
                    !o &&
                    s &&
                    null != A &&
                    ip.push(
                        (0, n.jsx)(
                            d.Dr,
                            {
                                id: "invite-to-join-embedded",
                                label: q.intl.string(q.t["3fRySx"]),
                                subtext: A.name,
                                action: () => {
                                    ((l, d) => {
                                        let o = b.A.getChannel(l),
                                            s = null == o ? void 0 : C.A.getGuild(o.guild_id);
                                        if (null != o && null != s) {
                                            if (null != t)
                                                return U.Ue({
                                                    channelId: o.id,
                                                    applicationId: d,
                                                    userId: t.id,
                                                    location: Q.PE1.CONTEXT_MENU,
                                                    inviteAnalyticsMetadata: { source: Q.PE1.ACTIVITY_INVITE },
                                                });
                                            if (null != i && i.type === Q.rbe.GUILD_VOICE)
                                                return (0, a.openModalLazy)(
                                                    async () => {
                                                        let { default: t } = await Promise.all([
                                                            e.e("28136"),
                                                            e.e("43600"),
                                                            e.e("82095"),
                                                        ]).then(e.bind(e, 234355));
                                                        return (e) =>
                                                            (0, n.jsx)(t, {
                                                                ...e,
                                                                guild: s,
                                                                channel: o,
                                                                applicationId: d,
                                                                analyticsLocation:
                                                                    i.type === Q.rbe.GUILD_VOICE
                                                                        ? Q.liQ.GUILD_CHANNEL
                                                                        : Q.liQ.DM_CHANNEL,
                                                                source: Q.PE1.ACTIVITY_INVITE,
                                                            });
                                                    },
                                                    { modalKey: "use-activity-items-embedded-invite-modal" },
                                                );
                                            if (i?.id != null)
                                                return U.tk({
                                                    activityChannelId: o.id,
                                                    invitedChannelId: i.id,
                                                    applicationId: d,
                                                    location: Q.PE1.CONTEXT_MENU,
                                                    inviteAnalyticsMetadata: { source: Q.PE1.ACTIVITY_INVITE },
                                                });
                                        }
                                    })((0, Y.H)(l.location), l.applicationId);
                                },
                            },
                            `self-embedded-${l.applicationId}`,
                        ),
                    );
            }),
            F.forEach((i, t) => {
                ia[t] &&
                    (i.type === Q.$pd.PLAYING && (0, M.A)(i, Q.jUm.JOIN)
                        ? ip.push(
                              (0, n.jsx)(
                                  d.Dr,
                                  {
                                      id: "invite-to-join",
                                      label: q.intl.string(q.t["3fRySx"]),
                                      subtext: i.name,
                                      action: () => is(Q.xL.JOIN, i),
                                  },
                                  `self${t}`,
                              ),
                          )
                        : i.type === Q.$pd.LISTENING &&
                          (0, M.A)(i, Q.jUm.SYNC) &&
                          ip.push(
                              (0, n.jsx)(
                                  d.Dr,
                                  {
                                      id: "invite-to-listen",
                                      label: q.intl.string(q.t["5vvGpV"]),
                                      subtext: i.name,
                                      action: () => is(Q.xL.LISTEN, i),
                                  },
                                  `self${t}`,
                              ),
                          ));
            }),
            ip.length > 0 && ip.push((0, n.jsx)(d.bX, {}, "menu-separator")),
            Z.forEach((e, l) => {
                let a = (0, M.A)(e, Q.jUm.EMBEDDED),
                    o = (0, M.A)(e, Q.jUm.CONTEXTLESS);
                if (
                    e.type === Q.$pd.PLAYING &&
                    (0, M.A)(e, Q.jUm.JOIN) &&
                    (!a || o) &&
                    null != e.session_id &&
                    null != e.application_id
                )
                    if (il[l] !== J.o.CANNOT_JOIN) {
                        let i = q.intl.string(q.t.VJlc0S),
                            t = !1;
                        ii[l]
                            ? ((i = q.intl.string(q.t.bf6Ci7)), (t = !0))
                            : il[l] === J.o.JOINED && ((i = q.intl.string(q.t.DPfdsq)), (t = !0)),
                            ip.push(
                                (0, n.jsx)(
                                    d.Dr,
                                    {
                                        id: "join",
                                        label: i,
                                        disabled: t,
                                        loading: ii[l],
                                        subtext: e.name,
                                        action: () => iA(e),
                                    },
                                    l,
                                ),
                            );
                    } else
                        ip.push(
                            (0, n.jsx)(
                                d.Dr,
                                {
                                    id: "ask-to-join",
                                    label: q.intl.string(q.t.OKsSCR),
                                    subtext: e.name,
                                    action: () => is(Q.xL.JOIN_REQUEST, e),
                                },
                                l,
                            ),
                        );
                else if (e.type === Q.$pd.LISTENING && (0, M.A)(e, Q.jUm.SYNC) && null != id[l]) {
                    let a = id[l],
                        { playDisabled: o, syncDisabled: s } = a;
                    ip.push(
                        (0, n.jsx)(
                            d.Dr,
                            {
                                id: `spotify-play-${e.session_id}`,
                                action: () => (0, E.A)(a, X.Qp.USER_ACTIVITY_PLAY),
                                label: (0, u.A)(a, X.Qp.USER_ACTIVITY_PLAY),
                                subtext: o
                                    ? (0, I.A)(
                                          a,
                                          X.Qp.USER_ACTIVITY_PLAY,
                                          null != i ? L.Ay.getNickname(i.guild_id, i.id, t) : void 0,
                                      )
                                    : void 0,
                                disabled: o,
                            },
                            `spotify-play-${e.session_id}`,
                        ),
                        (0, n.jsx)(
                            d.Dr,
                            {
                                id: `spotify-sync-${e.session_id}`,
                                action: () => (0, N.A)(a, X.Qp.USER_ACTIVITY_SYNC),
                                label: q.intl.string(q.t.gXYoq2),
                                subtext: s
                                    ? (0, I.A)(
                                          a,
                                          X.Qp.USER_ACTIVITY_SYNC,
                                          null != i ? L.Ay.getNickname(i.guild_id, i.id, t) : void 0,
                                      )
                                    : void 0,
                                disabled: s,
                            },
                            `spotify-sync-${e.session_id}`,
                        ),
                    );
                }
            }),
            z.forEach((i, t) => {
                let e = t + Z.length,
                    l = it.find((t) => t?.id === i.applicationId);
                if (il[e] !== J.o.CANNOT_JOIN && null != l) {
                    let t = i.userIds.has(B?.id ?? Q.dJq),
                        a = q.intl.string(q.t["4i2vj+"]),
                        o = !1;
                    il[e] === J.o.JOINED
                        ? ((a = q.intl.string(q.t.DPfdsq)), (o = !0))
                        : t
                          ? ((a = q.intl.string(q.t["0OiwfH"])), (o = !0))
                          : ii[e] && ((a = q.intl.string(q.t.bf6Ci7)), (o = !0)),
                        ip.push(
                            (0, n.jsx)(
                                d.Dr,
                                {
                                    id: `embedded-activity-join-${i.applicationId}`,
                                    label: a,
                                    disabled: o,
                                    loading: ii[e],
                                    subtext: l.name,
                                    action: () => ic(i),
                                },
                                `embedded-activity-${i.applicationId}`,
                            ),
                        );
                }
            })),
        ip
    );
}
