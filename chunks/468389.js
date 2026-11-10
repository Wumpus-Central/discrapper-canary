t(321073);
var n = t(477900);
t(582128);
var l = t(350835),
    a = t(855986),
    d = t(192308),
    o = t(477782),
    s = t(308368),
    A = t(273626),
    c = t(212245),
    p = t(323073),
    r = t(688810),
    u = t(429913),
    I = t(655116),
    y = t(160768),
    N = t(341335),
    E = t(286617),
    _ = t(533207),
    b = t(881335),
    C = t(46653),
    f = t(734057),
    S = t(629016),
    h = t(498642),
    m = t(71393),
    T = t(491009),
    g = t(576705),
    v = t(290863),
    O = t(994500),
    D = t(309010),
    L = t(894768),
    j = t(287809),
    x = t(977997),
    U = t(689168),
    G = t(562153),
    P = t(795816),
    V = t(933958),
    Y = t(211449),
    J = t(170148),
    $ = t(969151),
    M = t(776677),
    R = t(550151),
    K = t(55730),
    k = t(765379),
    Q = t(946255),
    X = t(652215),
    w = t(272984),
    q = t(917550),
    B = t(792996);
t.d(
    e,
    {},
    {
        A: function (i, e) {
            let { analyticsLocations: H } = (0, r.Ay)(),
                F = (0, a.bG)([j.default], () => j.default.getCurrentUser()),
                Z = (0, a.bG)([V.Ay], () => V.Ay.getSelfEmbeddedActivities()),
                W = (0, a.yK)([L.A], () =>
                    L.A.getActivities().filter((i) => null == i.application_id || !Z?.has(i.application_id)),
                ),
                z = (0, a.yK)([v.A], () => (null != e ? v.A.getActivities(e.id, i?.getGuildId()) : []), [e, i]),
                ii = (0, a.yK)(
                    [V.Ay],
                    () => {
                        let t = i?.id != null ? V.Ay.getEmbeddedActivitiesForChannel(i.id) : V.Am;
                        return null != e
                            ? t.filter((i) => {
                                  let { userIds: t } = i;
                                  return t.has(e.id);
                              })
                            : t;
                    },
                    [e, i],
                ),
                ie = (0, a.bG)([g.A], () => null == i || i.isPrivate() || g.A.can(X.xBc.SEND_MESSAGES, i), [i]),
                it = (0, a.yK)(
                    [U.A],
                    () => [
                        ...z.map(
                            (i) =>
                                null != i.application_id && U.A.getState(i.application_id, X.xL.JOIN) === X.eAD.LOADING,
                        ),
                        ...ii.map((i) => U.A.getState(i.applicationId, X.xL.JOIN) === X.eAD.LOADING),
                    ],
                    [z, ii],
                ),
                il = (0, u.A)([
                    ...z.filter((i) => i?.application_id != null).map((i) => i.application_id),
                    ...ii.map((i) => i.applicationId),
                ]),
                ia = i?.id,
                id = (0, p.vL)(i),
                io = (0, a.yK)(
                    [f.A, m.A, h.A, O.A, D.Ay, x.A, g.A, T.A, L.A, V.Ay],
                    () => [
                        ...z.map((i) =>
                            (0, M.A)({
                                user: e ?? F,
                                activity: i,
                                application: il.find((e) => e?.id === i.application_id),
                                channelId: ia,
                                currentUser: F,
                                isContentGated: id,
                                isEmbedded: (0, k.A)(i),
                                ChannelStore: f.A,
                                GuildStore: m.A,
                                GuildMemberCountStore: h.A,
                                RelationshipStore: O.A,
                                SelectedChannelStore: D.Ay,
                                VoiceStateStore: x.A,
                                PermissionStore: g.A,
                                LocalActivityStore: T.A,
                                SelfPresenceStore: L.A,
                                EmbeddedActivitiesStore: V.Ay,
                            }),
                        ),
                        ...ii.map((i) => {
                            let t = e ?? F;
                            return null == t
                                ? M.o.CANNOT_JOIN
                                : (0, R.Ay)({
                                        userId: t.id,
                                        application: il.find((e) => e?.id === i.applicationId),
                                        channelId: ia,
                                        currentUser: F,
                                        isContentGated: id,
                                        isActivitiesEnabledForCurrentPlatform: (0, J.A)(),
                                        ChannelStore: f.A,
                                        GuildStore: m.A,
                                        VoiceStateStore: x.A,
                                        PermissionStore: g.A,
                                    }) === R.Gy.CAN_JOIN
                                  ? M.o.CAN_JOIN
                                  : M.o.CANNOT_JOIN;
                        }),
                    ],
                    [z, il, ia, F, id, ii, e],
                ),
                is = (0, a.yK)([S.A], () => W.map((i) => !S.A.getParty(i.party?.id)?.has(e?.id ?? "")), [W, e]),
                iA = (0, a.yK)(
                    [I.A, C.default],
                    () =>
                        z.map((i) => (i.type === l.$.LISTENING && null != e ? (0, E.A)(I.A, C.default, e, i) : void 0)),
                    [e, z],
                ),
                ic = (0, c.p)();
            if (!ie && i?.type !== X.rbe.GUILD_VOICE) return null;
            function ip(t, n) {
                null != i
                    ? s.A.sendActivityInvite({ type: t, channelId: i.id, activity: n, location: X.ThZ.CONTEXT_MENU })
                    : null != e &&
                      s.A.sendActivityInviteUser({ type: t, userId: e.id, activity: n, location: X.ThZ.CONTEXT_MENU });
            }
            let ir = [];
            return (
                (null != e && null != F && e?.id === F.id) ||
                    (Z?.forEach((l) => {
                        let a = e?.id != null && l.userIds.has(e?.id),
                            s = g.A.can(X.xBc.CREATE_INSTANT_INVITE, i),
                            A = il.find((i) => i?.id === l.applicationId);
                        null != l.launchId &&
                            !a &&
                            s &&
                            null != A &&
                            ir.push(
                                (0, n.jsx)(
                                    o.Dr,
                                    {
                                        id: "invite-to-join-embedded",
                                        label: B.intl.string(B.t["3fRySx"]),
                                        subtext: A.name,
                                        action: () => {
                                            !(function (l, a) {
                                                let o = f.A.getChannel(l),
                                                    s = null == o ? void 0 : m.A.getGuild(o.guild_id);
                                                if (null != o && null != s) {
                                                    if (null != e)
                                                        return P.Ue({
                                                            channelId: o.id,
                                                            applicationId: a,
                                                            userId: e.id,
                                                            location: X.PE1.CONTEXT_MENU,
                                                            inviteAnalyticsMetadata: { source: X.PE1.ACTIVITY_INVITE },
                                                        });
                                                    if (null != i && i.type === X.rbe.GUILD_VOICE)
                                                        return (0, d.mM)(
                                                            async () => {
                                                                let { default: e } = await Promise.all([
                                                                    t.e(876400),
                                                                    t.e(683621),
                                                                    t.e(388859),
                                                                    t.e(711162),
                                                                    t.e(249938),
                                                                    t.e(329172),
                                                                    t.e(401425),
                                                                    t.e(919170),
                                                                    t.e(543039),
                                                                    t.e(593600),
                                                                    t.e(827708),
                                                                    t.e(948804),
                                                                    t.e(672727),
                                                                    t.e(927211),
                                                                    t.e(646506),
                                                                    t.e(445124),
                                                                    t.e(445421),
                                                                    t.e(832823),
                                                                    t.e(761935),
                                                                    t.e(502018),
                                                                    t.e(258398),
                                                                    t.e(570506),
                                                                    t.e(592028),
                                                                    t.e(70833),
                                                                    t.e(425906),
                                                                    t.e(123216),
                                                                    t.e(897073),
                                                                    t.e(182408),
                                                                    t.e(588940),
                                                                    t.e(121435),
                                                                    t.e(658216),
                                                                    t.e(317225),
                                                                    t.e(124060),
                                                                    t.e(146566),
                                                                    t.e(32661),
                                                                    t.e(696123),
                                                                    t.e(237834),
                                                                    t.e(837687),
                                                                    t.e(630582),
                                                                    t.e(159957),
                                                                    t.e(728136),
                                                                    t.e(678195),
                                                                    t.e(643104),
                                                                    t.e(847158),
                                                                    t.e(680029),
                                                                    t.e(635864),
                                                                    t.e(447864),
                                                                    t.e(794704),
                                                                    t.e(128781),
                                                                ]).then(t.bind(t, 137811));
                                                                return (t) =>
                                                                    (0, n.jsx)(e, {
                                                                        ...t,
                                                                        guild: s,
                                                                        channel: o,
                                                                        applicationId: a,
                                                                        analyticsLocation:
                                                                            i.type === X.rbe.GUILD_VOICE
                                                                                ? X.liQ.GUILD_CHANNEL
                                                                                : X.liQ.DM_CHANNEL,
                                                                        source: X.PE1.ACTIVITY_INVITE,
                                                                    });
                                                            },
                                                            { modalKey: "use-activity-items-embedded-invite-modal" },
                                                        );
                                                    i?.id != null &&
                                                        P.tk({
                                                            activityChannelId: o.id,
                                                            invitedChannelId: i.id,
                                                            applicationId: a,
                                                            location: X.PE1.CONTEXT_MENU,
                                                            inviteAnalyticsMetadata: { source: X.PE1.ACTIVITY_INVITE },
                                                        });
                                                }
                                            })((0, $.H)(l.location), l.applicationId);
                                        },
                                    },
                                    `self-embedded-${l.applicationId}`,
                                ),
                            );
                    }),
                    W.forEach((i, e) => {
                        is[e] &&
                            (i.type === l.$.PLAYING && (0, K.A)(i, X.jUm.JOIN)
                                ? ir.push(
                                      (0, n.jsx)(
                                          o.Dr,
                                          {
                                              id: "invite-to-join",
                                              label: B.intl.string(B.t["3fRySx"]),
                                              subtext: i.name,
                                              action: () => ip(X.xL.JOIN, i),
                                          },
                                          `self${e}`,
                                      ),
                                  )
                                : i.type === l.$.LISTENING &&
                                  (0, K.A)(i, X.jUm.SYNC) &&
                                  ir.push(
                                      (0, n.jsx)(
                                          o.Dr,
                                          {
                                              id: "invite-to-listen",
                                              label: B.intl.string(B.t["5vvGpV"]),
                                              subtext: i.name,
                                              action: () => ip(X.xL.LISTEN, i),
                                          },
                                          `self${e}`,
                                      ),
                                  ));
                    }),
                    ir.length > 0 && ir.push((0, n.jsx)(o.bX, {}, "menu-separator")),
                    z.forEach((t, a) => {
                        let d = (0, K.A)(t, X.jUm.EMBEDDED),
                            s = (0, K.A)(t, X.jUm.CONTEXTLESS);
                        if (
                            t.type === l.$.PLAYING &&
                            (0, K.A)(t, X.jUm.JOIN) &&
                            (!d || s) &&
                            null != t.session_id &&
                            null != t.application_id
                        )
                            if (io[a] !== M.o.CANNOT_JOIN) {
                                let i = B.intl.string(B.t.VJlc0S),
                                    l = !1;
                                (it[a]
                                    ? ((i = B.intl.string(B.t.bf6Ci7)), (l = !0))
                                    : io[a] === M.o.JOINED && ((i = B.intl.string(B.t.DPfdsq)), (l = !0)),
                                    ir.push(
                                        (0, n.jsx)(
                                            o.Dr,
                                            {
                                                id: "join",
                                                label: i,
                                                disabled: l,
                                                loading: it[a],
                                                subtext: t.name,
                                                action: () =>
                                                    (async function (i) {
                                                        let t = (0, K.A)(i, X.jUm.EMBEDDED),
                                                            n = D.Ay.getVoiceChannelId(),
                                                            l = f.A.getChannel(n);
                                                        (await A.A.join({
                                                            userId: e.id,
                                                            sessionId: i.session_id,
                                                            applicationId: i.application_id,
                                                            channelId: n,
                                                            messageId: null,
                                                            intent: q.W.PLAY,
                                                            embedded: t,
                                                            locationObject: ic.location,
                                                            analyticsLocations: H,
                                                        }),
                                                            t ||
                                                                (0, Q.A)({
                                                                    type: X.UqL.JOIN,
                                                                    userId: e.id,
                                                                    guildId: l?.guild_id,
                                                                    channelId: n,
                                                                    channelType: l?.type,
                                                                    applicationId: i.application_id,
                                                                    partyId: i.party?.id,
                                                                    locationObject: ic.location,
                                                                    analyticsLocations: H,
                                                                }));
                                                    })(t),
                                            },
                                            a,
                                        ),
                                    ));
                            } else
                                ir.push(
                                    (0, n.jsx)(
                                        o.Dr,
                                        {
                                            id: "ask-to-join",
                                            label: B.intl.string(B.t.OKsSCR),
                                            subtext: t.name,
                                            action: () => ip(X.xL.JOIN_REQUEST, t),
                                        },
                                        a,
                                    ),
                                );
                        else if (t.type === l.$.LISTENING && (0, K.A)(t, X.jUm.SYNC) && null != iA[a]) {
                            let l = iA[a],
                                { playDisabled: d, syncDisabled: s } = l;
                            ir.push(
                                (0, n.jsx)(
                                    o.Dr,
                                    {
                                        id: `spotify-play-${t.session_id}`,
                                        action: () => (0, b.A)(l, w.Qp.USER_ACTIVITY_PLAY),
                                        label: (0, y.A)(l, w.Qp.USER_ACTIVITY_PLAY),
                                        subtext: d
                                            ? (0, N.A)(
                                                  l,
                                                  w.Qp.USER_ACTIVITY_PLAY,
                                                  null != i ? G.Ay.getNickname(i.guild_id, i.id, e) : void 0,
                                              )
                                            : void 0,
                                        disabled: d,
                                    },
                                    `spotify-play-${t.session_id}`,
                                ),
                                (0, n.jsx)(
                                    o.Dr,
                                    {
                                        id: `spotify-sync-${t.session_id}`,
                                        action: () => (0, _.A)(l, w.Qp.USER_ACTIVITY_SYNC),
                                        label: B.intl.string(B.t.gXYoq2),
                                        subtext: s
                                            ? (0, N.A)(
                                                  l,
                                                  w.Qp.USER_ACTIVITY_SYNC,
                                                  null != i ? G.Ay.getNickname(i.guild_id, i.id, e) : void 0,
                                              )
                                            : void 0,
                                        disabled: s,
                                    },
                                    `spotify-sync-${t.session_id}`,
                                ),
                            );
                        }
                    }),
                    ii.forEach((e, t) => {
                        let l = t + z.length,
                            a = il.find((i) => i?.id === e.applicationId);
                        if (io[l] !== M.o.CANNOT_JOIN && null != a) {
                            let t = e.userIds.has(F?.id ?? ""),
                                d = B.intl.string(B.t["4i2vj+"]),
                                s = !1;
                            (io[l] === M.o.JOINED
                                ? ((d = B.intl.string(B.t.DPfdsq)), (s = !0))
                                : t
                                  ? ((d = B.intl.string(B.t["0OiwfH"])), (s = !0))
                                  : it[l] && ((d = B.intl.string(B.t.bf6Ci7)), (s = !0)),
                                ir.push(
                                    (0, n.jsx)(
                                        o.Dr,
                                        {
                                            id: `embedded-activity-join-${e.applicationId}`,
                                            label: d,
                                            disabled: s,
                                            loading: it[l],
                                            subtext: a.name,
                                            action: () =>
                                                (async function (e) {
                                                    await (0, Y.A)({
                                                        applicationId: e.applicationId,
                                                        activityChannelId: i?.id,
                                                        locationObject: ic.location,
                                                        analyticsLocations: H,
                                                    });
                                                })(e),
                                        },
                                        `embedded-activity-${e.applicationId}`,
                                    ),
                                ));
                        }
                    })),
                ir
            );
        },
    },
);
