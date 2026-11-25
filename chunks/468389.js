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
    k = t(874546),
    Q = t(765379),
    X = t(946255),
    w = t(652215),
    q = t(272984),
    B = t(917550),
    H = t(792996);
t.d(
    e,
    {},
    {
        A: function (i, e) {
            let { analyticsLocations: F } = (0, r.Ay)(),
                Z = (0, a.bG)([j.default], () => j.default.getCurrentUser()),
                W = (0, a.bG)([V.Ay], () => V.Ay.getSelfEmbeddedActivities()),
                z = (0, a.yK)([L.A], () =>
                    L.A.getActivities().filter((i) => null == i.application_id || !W?.has(i.application_id)),
                ),
                ii = (0, a.yK)([v.A], () => (null != e ? v.A.getActivities(e.id, i?.getGuildId()) : []), [e, i]),
                ie = (0, a.yK)(
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
                it = (0, a.bG)([g.A], () => null == i || i.isPrivate() || g.A.can(w.xBc.SEND_MESSAGES, i), [i]),
                il = (0, a.yK)(
                    [U.A],
                    () => [
                        ...ii.map(
                            (i) =>
                                null != i.application_id && U.A.getState(i.application_id, w.xL.JOIN) === w.eAD.LOADING,
                        ),
                        ...ie.map((i) => U.A.getState(i.applicationId, w.xL.JOIN) === w.eAD.LOADING),
                    ],
                    [ii, ie],
                ),
                ia = (0, u.A)([
                    ...ii.filter((i) => i?.application_id != null).map((i) => i.application_id),
                    ...ie.map((i) => i.applicationId),
                ]),
                id = i?.id,
                io = (0, p.vL)(i),
                is = (0, a.yK)(
                    [f.A, m.A, h.A, O.A, D.Ay, x.A, g.A, T.A, L.A, V.Ay],
                    () => [
                        ...ii.map((i) =>
                            (0, M.A)({
                                user: e ?? Z,
                                activity: i,
                                application: ia.find((e) => e?.id === i.application_id),
                                channelId: id,
                                currentUser: Z,
                                isContentGated: io,
                                isEmbedded: (0, Q.A)(i),
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
                        ...ie.map((i) => {
                            let t = e ?? Z;
                            return null == t
                                ? M.o.CANNOT_JOIN
                                : (0, R.Ay)({
                                        userId: t.id,
                                        application: ia.find((e) => e?.id === i.applicationId),
                                        channelId: id,
                                        currentUser: Z,
                                        isContentGated: io,
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
                    [ii, ia, id, Z, io, ie, e],
                ),
                iA = (0, a.yK)([S.A], () => z.map((i) => !S.A.getParty(i.party?.id)?.has(e?.id ?? "")), [z, e]),
                ic = (0, a.yK)(
                    [I.A, C.default],
                    () =>
                        ii.map((i) =>
                            i.type === l.$.LISTENING && null != e ? (0, E.A)(I.A, C.default, e, i) : void 0,
                        ),
                    [e, ii],
                ),
                ip = (0, c.p)();
            if (!it && i?.type !== w.rbe.GUILD_VOICE) return null;
            function ir(t, n) {
                null != i
                    ? s.A.sendActivityInvite({ type: t, channelId: i.id, activity: n, location: w.ThZ.CONTEXT_MENU })
                    : null != e &&
                      s.A.sendActivityInviteUser({ type: t, userId: e.id, activity: n, location: w.ThZ.CONTEXT_MENU });
            }
            let iu = [];
            return (
                (null != e && null != Z && e?.id === Z.id) ||
                    (W?.forEach((l) => {
                        let a = e?.id != null && l.userIds.has(e?.id),
                            s = g.A.can(w.xBc.CREATE_INSTANT_INVITE, i),
                            A = ia.find((i) => i?.id === l.applicationId);
                        null != l.launchId &&
                            !a &&
                            s &&
                            null != A &&
                            iu.push(
                                (0, n.jsx)(
                                    o.Dr,
                                    {
                                        id: "invite-to-join-embedded",
                                        label: H.intl.string(H.t["3fRySx"]),
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
                                                            location: w.PE1.CONTEXT_MENU,
                                                            inviteAnalyticsMetadata: { source: w.PE1.ACTIVITY_INVITE },
                                                        });
                                                    if (null != i && i.type === w.rbe.GUILD_VOICE)
                                                        return (0, d.mM)(
                                                            async () => {
                                                                let { default: e } = await Promise.all([
                                                                    t.e(876400),
                                                                    t.e(683621),
                                                                    t.e(730931),
                                                                    t.e(711162),
                                                                    t.e(249938),
                                                                    t.e(506933),
                                                                    t.e(401425),
                                                                    t.e(919170),
                                                                    t.e(543039),
                                                                    t.e(593600),
                                                                    t.e(827708),
                                                                    t.e(948804),
                                                                    t.e(672727),
                                                                    t.e(588940),
                                                                    t.e(927211),
                                                                    t.e(646506),
                                                                    t.e(445124),
                                                                    t.e(445421),
                                                                    t.e(832823),
                                                                    t.e(761935),
                                                                    t.e(502018),
                                                                    t.e(570506),
                                                                    t.e(592028),
                                                                    t.e(425906),
                                                                    t.e(123216),
                                                                    t.e(182408),
                                                                    t.e(121435),
                                                                    t.e(317225),
                                                                    t.e(124060),
                                                                    t.e(146566),
                                                                    t.e(32661),
                                                                    t.e(696123),
                                                                    t.e(237834),
                                                                    t.e(837687),
                                                                    t.e(258398),
                                                                    t.e(630582),
                                                                    t.e(159957),
                                                                    t.e(658216),
                                                                    t.e(728136),
                                                                    t.e(678195),
                                                                    t.e(680029),
                                                                    t.e(635864),
                                                                    t.e(447864),
                                                                    t.e(794704),
                                                                    t.e(897073),
                                                                    t.e(643104),
                                                                    t.e(847158),
                                                                    t.e(128781),
                                                                ]).then(t.bind(t, 137811));
                                                                return (t) =>
                                                                    (0, n.jsx)(e, {
                                                                        ...t,
                                                                        guild: s,
                                                                        channel: o,
                                                                        applicationId: a,
                                                                        analyticsLocation:
                                                                            i.type === w.rbe.GUILD_VOICE
                                                                                ? w.liQ.GUILD_CHANNEL
                                                                                : w.liQ.DM_CHANNEL,
                                                                        source: w.PE1.ACTIVITY_INVITE,
                                                                    });
                                                            },
                                                            { modalKey: "use-activity-items-embedded-invite-modal" },
                                                        );
                                                    i?.id != null &&
                                                        P.tk({
                                                            activityChannelId: o.id,
                                                            invitedChannelId: i.id,
                                                            applicationId: a,
                                                            location: w.PE1.CONTEXT_MENU,
                                                            inviteAnalyticsMetadata: { source: w.PE1.ACTIVITY_INVITE },
                                                        });
                                                }
                                            })((0, $.H)(l.location), l.applicationId);
                                        },
                                    },
                                    `self-embedded-${l.applicationId}`,
                                ),
                            );
                    }),
                    z.forEach((i, e) => {
                        iA[e] &&
                            (i.type === l.$.PLAYING && (0, K.A)(i, w.jUm.JOIN)
                                ? iu.push(
                                      (0, n.jsx)(
                                          o.Dr,
                                          {
                                              id: "invite-to-join",
                                              label: H.intl.string(H.t["3fRySx"]),
                                              subtext: i.name,
                                              action: () => ir(w.xL.JOIN, i),
                                          },
                                          `self${e}`,
                                      ),
                                  )
                                : i.type === l.$.LISTENING &&
                                  (0, K.A)(i, w.jUm.SYNC) &&
                                  iu.push(
                                      (0, n.jsx)(
                                          o.Dr,
                                          {
                                              id: "invite-to-listen",
                                              label: H.intl.string(H.t["5vvGpV"]),
                                              subtext: i.name,
                                              action: () => ir(w.xL.LISTEN, i),
                                          },
                                          `self${e}`,
                                      ),
                                  ));
                    }),
                    iu.length > 0 && iu.push((0, n.jsx)(o.bX, {}, "menu-separator")),
                    ii.forEach((t, a) => {
                        let d = (0, K.A)(t, w.jUm.EMBEDDED),
                            s = (0, K.A)(t, w.jUm.CONTEXTLESS);
                        if (
                            t.type === l.$.PLAYING &&
                            (0, K.A)(t, w.jUm.JOIN) &&
                            (!d || s) &&
                            (d || (0, k.Ay)(t)) &&
                            null != t.session_id &&
                            null != t.application_id
                        )
                            if (is[a] !== M.o.CANNOT_JOIN) {
                                let i = H.intl.string(H.t.VJlc0S),
                                    l = !1;
                                (il[a]
                                    ? ((i = H.intl.string(H.t.bf6Ci7)), (l = !0))
                                    : is[a] === M.o.JOINED && ((i = H.intl.string(H.t.DPfdsq)), (l = !0)),
                                    iu.push(
                                        (0, n.jsx)(
                                            o.Dr,
                                            {
                                                id: "join",
                                                label: i,
                                                disabled: l,
                                                loading: il[a],
                                                subtext: t.name,
                                                action: () =>
                                                    (async function (i) {
                                                        let t = (0, K.A)(i, w.jUm.EMBEDDED),
                                                            n = D.Ay.getVoiceChannelId(),
                                                            l = f.A.getChannel(n);
                                                        (await A.A.join({
                                                            userId: e.id,
                                                            sessionId: i.session_id,
                                                            applicationId: i.application_id,
                                                            channelId: n,
                                                            messageId: null,
                                                            intent: B.W.PLAY,
                                                            embedded: t,
                                                            locationObject: ip.location,
                                                            analyticsLocations: F,
                                                        }),
                                                            t ||
                                                                (0, X.A)({
                                                                    type: w.UqL.JOIN,
                                                                    userId: e.id,
                                                                    guildId: l?.guild_id,
                                                                    channelId: n,
                                                                    channelType: l?.type,
                                                                    applicationId: i.application_id,
                                                                    partyId: i.party?.id,
                                                                    locationObject: ip.location,
                                                                    analyticsLocations: F,
                                                                }));
                                                    })(t),
                                            },
                                            a,
                                        ),
                                    ));
                            } else
                                iu.push(
                                    (0, n.jsx)(
                                        o.Dr,
                                        {
                                            id: "ask-to-join",
                                            label: H.intl.string(H.t.OKsSCR),
                                            subtext: t.name,
                                            action: () => ir(w.xL.JOIN_REQUEST, t),
                                        },
                                        a,
                                    ),
                                );
                        else if (t.type === l.$.LISTENING && (0, K.A)(t, w.jUm.SYNC) && null != ic[a]) {
                            let l = ic[a],
                                { playDisabled: d, syncDisabled: s } = l;
                            iu.push(
                                (0, n.jsx)(
                                    o.Dr,
                                    {
                                        id: `spotify-play-${t.session_id}`,
                                        action: () => (0, b.A)(l, q.Qp.USER_ACTIVITY_PLAY),
                                        label: (0, y.A)(l, q.Qp.USER_ACTIVITY_PLAY),
                                        subtext: d
                                            ? (0, N.A)(
                                                  l,
                                                  q.Qp.USER_ACTIVITY_PLAY,
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
                                        action: () => (0, _.A)(l, q.Qp.USER_ACTIVITY_SYNC),
                                        label: H.intl.string(H.t.gXYoq2),
                                        subtext: s
                                            ? (0, N.A)(
                                                  l,
                                                  q.Qp.USER_ACTIVITY_SYNC,
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
                    ie.forEach((e, t) => {
                        let l = t + ii.length,
                            a = ia.find((i) => i?.id === e.applicationId);
                        if (is[l] !== M.o.CANNOT_JOIN && null != a) {
                            let t = e.userIds.has(Z?.id ?? ""),
                                d = H.intl.string(H.t["4i2vj+"]),
                                s = !1;
                            (is[l] === M.o.JOINED
                                ? ((d = H.intl.string(H.t.DPfdsq)), (s = !0))
                                : t
                                  ? ((d = H.intl.string(H.t["0OiwfH"])), (s = !0))
                                  : il[l] && ((d = H.intl.string(H.t.bf6Ci7)), (s = !0)),
                                iu.push(
                                    (0, n.jsx)(
                                        o.Dr,
                                        {
                                            id: `embedded-activity-join-${e.applicationId}`,
                                            label: d,
                                            disabled: s,
                                            loading: il[l],
                                            subtext: a.name,
                                            action: () =>
                                                (async function (e) {
                                                    await (0, Y.A)({
                                                        applicationId: e.applicationId,
                                                        activityChannelId: i?.id,
                                                        locationObject: ip.location,
                                                        analyticsLocations: F,
                                                    });
                                                })(e),
                                        },
                                        `embedded-activity-${e.applicationId}`,
                                    ),
                                ));
                        }
                    })),
                iu
            );
        },
    },
);
