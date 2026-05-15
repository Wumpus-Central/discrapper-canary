t.d(e, { A: () => w }), t(321073);
var n = t(627968);
t(64700);
var l = t(17928),
    a = t(192308),
    d = t(477782),
    o = t(308368),
    s = t(780907),
    A = t(212245),
    p = t(688810),
    c = t(429913),
    r = t(655116),
    I = t(160768),
    u = t(341335),
    N = t(286617),
    y = t(533207),
    E = t(881335),
    _ = t(495544),
    b = t(734057),
    C = t(629016),
    S = t(498642),
    h = t(71393),
    T = t(480595),
    m = t(576705),
    f = t(290863),
    g = t(994500),
    v = t(309010),
    O = t(461213),
    D = t(287809),
    L = t(977997),
    j = t(689168),
    x = t(562153),
    U = t(795816),
    G = t(933958),
    P = t(62583),
    V = t(170148),
    Y = t(969151),
    J = t(776677),
    $ = t(550151),
    M = t(55730),
    R = t(765379),
    K = t(946255),
    k = t(360469),
    Q = t(652215),
    X = t(272984),
    q = t(375708);
function w(i, e) {
    let { analyticsLocations: w } = (0, p.Ay)(),
        B = (0, l.bG)([D.default], () => D.default.getCurrentUser()),
        H = (0, l.bG)([G.Ay], () => G.Ay.getSelfEmbeddedActivities()),
        F = (0, l.yK)([O.A], () =>
            O.A.getActivities().filter((i) => null == i.application_id || !H?.has(i.application_id)),
        ),
        Z = (0, l.yK)([f.A], () => (null != e ? f.A.getActivities(e.id, i?.getGuildId()) : []), [e, i]),
        z = (0, l.yK)([G.Ay], () => {
            let t = i?.id != null ? G.Ay.getEmbeddedActivitiesForChannel(i.id) : G.Am;
            return null != e
                ? t.filter((i) => {
                      let { userIds: t } = i;
                      return t.has(e.id);
                  })
                : t;
        }, [e, i]),
        W = (0, l.bG)([m.A], () => null == i || i.isPrivate() || m.A.can(Q.xBc.SEND_MESSAGES, i), [i]),
        ii = (0, l.yK)(
            [j.A],
            () => [
                ...Z.map(
                    (i) => null != i.application_id && j.A.getState(i.application_id, Q.xL.JOIN) === Q.eAD.LOADING,
                ),
                ...z.map((i) => j.A.getState(i.applicationId, Q.xL.JOIN) === Q.eAD.LOADING),
            ],
            [Z, z],
        ),
        ie = (0, c.A)([
            ...Z.filter((i) => i?.application_id != null).map((i) => i.application_id),
            ...z.map((i) => i.applicationId),
        ]),
        it = i?.id,
        il = (0, l.yK)(
            [b.A, h.A, S.A, g.A, v.A, L.A, m.A, T.A, O.A, G.Ay],
            () => [
                ...Z.map((i) =>
                    (0, J.A)({
                        user: e ?? B,
                        activity: i,
                        application: ie.find((e) => e?.id === i.application_id),
                        channelId: it,
                        currentUser: B,
                        isEmbedded: (0, R.A)(i),
                        ChannelStore: b.A,
                        GuildStore: h.A,
                        GuildMemberCountStore: S.A,
                        RelationshipStore: g.A,
                        SelectedChannelStore: v.A,
                        VoiceStateStore: L.A,
                        PermissionStore: m.A,
                        LocalActivityStore: T.A,
                        SelfPresenceStore: O.A,
                        EmbeddedActivitiesStore: G.Ay,
                    }),
                ),
                ...z.map((i) => {
                    let t = e ?? B;
                    return null == t
                        ? J.o.CANNOT_JOIN
                        : (0, $.Ay)({
                                userId: t.id,
                                application: ie.find((e) => e?.id === i.applicationId),
                                channelId: it,
                                currentUser: B,
                                isActivitiesEnabledForCurrentPlatform: (0, V.A)(),
                                ChannelStore: b.A,
                                GuildStore: h.A,
                                VoiceStateStore: L.A,
                                PermissionStore: m.A,
                            }) === $.Gy.CAN_JOIN
                          ? J.o.CAN_JOIN
                          : J.o.CANNOT_JOIN;
                }),
            ],
            [Z, ie, it, B, z, e],
        ),
        ia = (0, l.yK)([C.A], () => F.map((i) => !C.A.getParty(i.party?.id)?.has(e?.id ?? Q.dJq)), [F, e]),
        id = (0, l.yK)(
            [r.A, _.default],
            () => Z.map((i) => (i.type === Q.$pd.LISTENING && null != e ? (0, N.A)(r.A, _.default, e, i) : void 0)),
            [e, Z],
        ),
        io = (0, A.p)();
    if (!W && i?.type !== Q.rbe.GUILD_VOICE) return null;
    let is = (t, n) => {
            null != i
                ? o.A.sendActivityInvite({ type: t, channelId: i.id, activity: n, location: Q.ThZ.CONTEXT_MENU })
                : null != e &&
                  o.A.sendActivityInviteUser({ type: t, userId: e.id, activity: n, location: Q.ThZ.CONTEXT_MENU });
        },
        iA = async (i) => {
            let t = (0, M.A)(i, Q.jUm.EMBEDDED),
                n = v.A.getVoiceChannelId(),
                l = b.A.getChannel(n);
            await s.Ay.join({
                userId: e.id,
                sessionId: i.session_id,
                applicationId: i.application_id,
                channelId: n,
                messageId: null,
                intent: k.W9.PLAY,
                embedded: t,
                locationObject: io.location,
                analyticsLocations: w,
            }),
                t ||
                    (0, K.A)({
                        type: Q.UqL.JOIN,
                        userId: e.id,
                        guildId: l?.guild_id,
                        channelId: n,
                        channelType: l?.type,
                        applicationId: i.application_id,
                        partyId: i.party?.id,
                        locationObject: io.location,
                        analyticsLocations: w,
                    });
        },
        ip = async (e) => {
            await (0, P.A)({
                applicationId: e.applicationId,
                activityChannelId: i?.id,
                locationObject: io.location,
                analyticsLocations: w,
            });
        },
        ic = [];
    return (
        (null != e && null != B && e?.id === B.id) ||
            (H?.forEach((l) => {
                let o = e?.id != null && l.userIds.has(e?.id),
                    s = m.A.can(Q.xBc.CREATE_INSTANT_INVITE, i),
                    A = ie.find((i) => i?.id === l.applicationId);
                null != l.launchId &&
                    !o &&
                    s &&
                    null != A &&
                    ic.push(
                        (0, n.jsx)(
                            d.Dr,
                            {
                                id: "invite-to-join-embedded",
                                label: q.intl.string(q.t["3fRySx"]),
                                subtext: A.name,
                                action: () => {
                                    ((l, d) => {
                                        let o = b.A.getChannel(l),
                                            s = null == o ? void 0 : h.A.getGuild(o.guild_id);
                                        if (null != o && null != s) {
                                            if (null != e)
                                                return U.Ue({
                                                    channelId: o.id,
                                                    applicationId: d,
                                                    userId: e.id,
                                                    location: Q.PE1.CONTEXT_MENU,
                                                    inviteAnalyticsMetadata: { source: Q.PE1.ACTIVITY_INVITE },
                                                });
                                            if (null != i && i.type === Q.rbe.GUILD_VOICE)
                                                return (0, a.openModalLazy)(
                                                    async () => {
                                                        let { default: e } = await Promise.all([
                                                            t.e("74389"),
                                                            t.e("73953"),
                                                            t.e("54266"),
                                                            t.e("25568"),
                                                            t.e("43039"),
                                                            t.e("48804"),
                                                            t.e("18401"),
                                                            t.e("96123"),
                                                            t.e("31390"),
                                                            t.e("46248"),
                                                            t.e("23216"),
                                                            t.e("25637"),
                                                            t.e("61935"),
                                                            t.e("58157"),
                                                            t.e("37687"),
                                                            t.e("59957"),
                                                            t.e("78412"),
                                                            t.e("28136"),
                                                            t.e("16084"),
                                                            t.e("97073"),
                                                            t.e("78195"),
                                                            t.e("87317"),
                                                            t.e("83420"),
                                                            t.e("22547"),
                                                            t.e("58216"),
                                                        ]).then(t.bind(t, 1310));
                                                        return (t) =>
                                                            (0, n.jsx)(e, {
                                                                ...t,
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
            F.forEach((i, e) => {
                ia[e] &&
                    (i.type === Q.$pd.PLAYING && (0, M.A)(i, Q.jUm.JOIN)
                        ? ic.push(
                              (0, n.jsx)(
                                  d.Dr,
                                  {
                                      id: "invite-to-join",
                                      label: q.intl.string(q.t["3fRySx"]),
                                      subtext: i.name,
                                      action: () => is(Q.xL.JOIN, i),
                                  },
                                  `self${e}`,
                              ),
                          )
                        : i.type === Q.$pd.LISTENING &&
                          (0, M.A)(i, Q.jUm.SYNC) &&
                          ic.push(
                              (0, n.jsx)(
                                  d.Dr,
                                  {
                                      id: "invite-to-listen",
                                      label: q.intl.string(q.t["5vvGpV"]),
                                      subtext: i.name,
                                      action: () => is(Q.xL.LISTEN, i),
                                  },
                                  `self${e}`,
                              ),
                          ));
            }),
            ic.length > 0 && ic.push((0, n.jsx)(d.bX, {}, "menu-separator")),
            Z.forEach((t, l) => {
                let a = (0, M.A)(t, Q.jUm.EMBEDDED),
                    o = (0, M.A)(t, Q.jUm.CONTEXTLESS);
                if (
                    t.type === Q.$pd.PLAYING &&
                    (0, M.A)(t, Q.jUm.JOIN) &&
                    (!a || o) &&
                    null != t.session_id &&
                    null != t.application_id
                )
                    if (il[l] !== J.o.CANNOT_JOIN) {
                        let i = q.intl.string(q.t.VJlc0S),
                            e = !1;
                        ii[l]
                            ? ((i = q.intl.string(q.t.bf6Ci7)), (e = !0))
                            : il[l] === J.o.JOINED && ((i = q.intl.string(q.t.DPfdsq)), (e = !0)),
                            ic.push(
                                (0, n.jsx)(
                                    d.Dr,
                                    {
                                        id: "join",
                                        label: i,
                                        disabled: e,
                                        loading: ii[l],
                                        subtext: t.name,
                                        action: () => iA(t),
                                    },
                                    l,
                                ),
                            );
                    } else
                        ic.push(
                            (0, n.jsx)(
                                d.Dr,
                                {
                                    id: "ask-to-join",
                                    label: q.intl.string(q.t.OKsSCR),
                                    subtext: t.name,
                                    action: () => is(Q.xL.JOIN_REQUEST, t),
                                },
                                l,
                            ),
                        );
                else if (t.type === Q.$pd.LISTENING && (0, M.A)(t, Q.jUm.SYNC) && null != id[l]) {
                    let a = id[l],
                        { playDisabled: o, syncDisabled: s } = a;
                    ic.push(
                        (0, n.jsx)(
                            d.Dr,
                            {
                                id: `spotify-play-${t.session_id}`,
                                action: () => (0, E.A)(a, X.Qp.USER_ACTIVITY_PLAY),
                                label: (0, I.A)(a, X.Qp.USER_ACTIVITY_PLAY),
                                subtext: o
                                    ? (0, u.A)(
                                          a,
                                          X.Qp.USER_ACTIVITY_PLAY,
                                          null != i ? x.Ay.getNickname(i.guild_id, i.id, e) : void 0,
                                      )
                                    : void 0,
                                disabled: o,
                            },
                            `spotify-play-${t.session_id}`,
                        ),
                        (0, n.jsx)(
                            d.Dr,
                            {
                                id: `spotify-sync-${t.session_id}`,
                                action: () => (0, y.A)(a, X.Qp.USER_ACTIVITY_SYNC),
                                label: q.intl.string(q.t.gXYoq2),
                                subtext: s
                                    ? (0, u.A)(
                                          a,
                                          X.Qp.USER_ACTIVITY_SYNC,
                                          null != i ? x.Ay.getNickname(i.guild_id, i.id, e) : void 0,
                                      )
                                    : void 0,
                                disabled: s,
                            },
                            `spotify-sync-${t.session_id}`,
                        ),
                    );
                }
            }),
            z.forEach((i, e) => {
                let t = e + Z.length,
                    l = ie.find((e) => e?.id === i.applicationId);
                if (il[t] !== J.o.CANNOT_JOIN && null != l) {
                    let e = i.userIds.has(B?.id ?? Q.dJq),
                        a = q.intl.string(q.t["4i2vj+"]),
                        o = !1;
                    il[t] === J.o.JOINED
                        ? ((a = q.intl.string(q.t.DPfdsq)), (o = !0))
                        : e
                          ? ((a = q.intl.string(q.t["0OiwfH"])), (o = !0))
                          : ii[t] && ((a = q.intl.string(q.t.bf6Ci7)), (o = !0)),
                        ic.push(
                            (0, n.jsx)(
                                d.Dr,
                                {
                                    id: `embedded-activity-join-${i.applicationId}`,
                                    label: a,
                                    disabled: o,
                                    loading: ii[t],
                                    subtext: l.name,
                                    action: () => ip(i),
                                },
                                `embedded-activity-${i.applicationId}`,
                            ),
                        );
                }
            })),
        ic
    );
}
