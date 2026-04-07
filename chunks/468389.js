e.d(t, { A: () => q }), e(321073);
var n = e(627968);
e(64700);
var l = e(311907),
    a = e(397927),
    d = e(308368),
    o = e(544420),
    s = e(212245),
    p = e(688810),
    A = e(429913),
    c = e(655116),
    r = e(160768),
    u = e(341335),
    I = e(286617),
    y = e(533207),
    N = e(881335),
    E = e(961350),
    _ = e(734057),
    b = e(629016),
    f = e(498642),
    h = e(71393),
    C = e(375492),
    T = e(576705),
    S = e(290863),
    m = e(994500),
    g = e(309010),
    v = e(461213),
    j = e(287809),
    O = e(977997),
    x = e(689168),
    D = e(562153),
    L = e(795816),
    U = e(933958),
    G = e(447031),
    P = e(170148),
    V = e(969151),
    Y = e(776677),
    J = e(550151),
    $ = e(833349),
    M = e(765379),
    R = e(946255),
    K = e(360469),
    k = e(652215),
    Q = e(272984),
    X = e(985018);
function q(i, t) {
    let { analyticsLocations: q } = (0, p.Ay)(),
        w = (0, l.bG)([j.default], () => j.default.getCurrentUser()),
        B = (0, l.bG)([U.Ay], () => U.Ay.getSelfEmbeddedActivities()),
        H = (0, l.yK)([v.A], () =>
            v.A.getActivities().filter((i) => null == i.application_id || !B?.has(i.application_id)),
        ),
        F = (0, l.yK)([S.A], () => (null != t ? S.A.getActivities(t.id, i?.getGuildId()) : []), [t, i]),
        Z = (0, l.yK)([U.Ay], () => {
            let e = i?.id != null ? U.Ay.getEmbeddedActivitiesForChannel(i.id) : U.Am;
            return null != t
                ? e.filter((i) => {
                      let { userIds: e } = i;
                      return e.has(t.id);
                  })
                : e;
        }, [t, i]),
        W = (0, l.bG)([T.A], () => null == i || i.isPrivate() || T.A.can(k.xBc.SEND_MESSAGES, i), [i]),
        z = (0, l.yK)(
            [x.A],
            () => [
                ...F.map(
                    (i) => null != i.application_id && x.A.getState(i.application_id, k.xL.JOIN) === k.eAD.LOADING,
                ),
                ...Z.map((i) => x.A.getState(i.applicationId, k.xL.JOIN) === k.eAD.LOADING),
            ],
            [F, Z],
        ),
        ii = (0, A.A)([
            ...F.filter((i) => i?.application_id != null).map((i) => i.application_id),
            ...Z.map((i) => i.applicationId),
        ]),
        it = i?.id,
        ie = (0, l.yK)(
            [_.A, h.A, f.A, m.A, g.A, O.A, T.A, C.A, v.A, U.Ay],
            () => [
                ...F.map((i) =>
                    (0, Y.A)({
                        user: t ?? w,
                        activity: i,
                        application: ii.find((t) => t?.id === i.application_id),
                        channelId: it,
                        currentUser: w,
                        isEmbedded: (0, M.A)(i),
                        ChannelStore: _.A,
                        GuildStore: h.A,
                        GuildMemberCountStore: f.A,
                        RelationshipStore: m.A,
                        SelectedChannelStore: g.A,
                        VoiceStateStore: O.A,
                        PermissionStore: T.A,
                        LocalActivityStore: C.A,
                        SelfPresenceStore: v.A,
                        EmbeddedActivitiesStore: U.Ay,
                    }),
                ),
                ...Z.map((i) => {
                    let e = t ?? w;
                    return null == e
                        ? Y.o.CANNOT_JOIN
                        : (0, J.Ay)({
                                userId: e.id,
                                application: ii.find((t) => t?.id === i.applicationId),
                                channelId: it,
                                currentUser: w,
                                isActivitiesEnabledForCurrentPlatform: (0, P.A)(),
                                ChannelStore: _.A,
                                GuildStore: h.A,
                                VoiceStateStore: O.A,
                                PermissionStore: T.A,
                            }) === J.Gy.CAN_JOIN
                          ? Y.o.CAN_JOIN
                          : Y.o.CANNOT_JOIN;
                }),
            ],
            [F, ii, it, w, Z, t],
        ),
        il = (0, l.yK)([b.A], () => H.map((i) => !b.A.getParty(i.party?.id)?.has(t?.id ?? k.dJq)), [H, t]),
        ia = (0, l.yK)(
            [c.A, E.default],
            () => F.map((i) => (i.type === k.$pd.LISTENING && null != t ? (0, I.A)(c.A, E.default, t, i) : void 0)),
            [t, F],
        ),
        id = (0, s.p)();
    if (!W && i?.type !== k.rbe.GUILD_VOICE) return null;
    let io = (e, n) => {
            null != i
                ? d.A.sendActivityInvite({ type: e, channelId: i.id, activity: n, location: k.ThZ.CONTEXT_MENU })
                : null != t &&
                  d.A.sendActivityInviteUser({ type: e, userId: t.id, activity: n, location: k.ThZ.CONTEXT_MENU });
        },
        is = async (i) => {
            let e = (0, $.A)(i, k.jUm.EMBEDDED),
                n = g.A.getVoiceChannelId(),
                l = _.A.getChannel(n);
            await o.Ay.join({
                userId: t.id,
                sessionId: i.session_id,
                applicationId: i.application_id,
                channelId: n,
                messageId: null,
                intent: K.W9.PLAY,
                embedded: e,
                locationObject: id.location,
                analyticsLocations: q,
            }),
                e ||
                    (0, R.A)({
                        type: k.UqL.JOIN,
                        userId: t.id,
                        guildId: l?.guild_id,
                        channelId: n,
                        channelType: l?.type,
                        applicationId: i.application_id,
                        partyId: i.party?.id,
                        locationObject: id.location,
                        analyticsLocations: q,
                    });
        },
        ip = async (t) => {
            await (0, G.A)({
                applicationId: t.applicationId,
                activityChannelId: i?.id,
                locationObject: id.location,
                analyticsLocations: q,
            });
        },
        iA = [];
    return (
        (null != t && null != w && t?.id === w.id) ||
            (B?.forEach((l) => {
                let d = t?.id != null && l.userIds.has(t?.id),
                    o = T.A.can(k.xBc.CREATE_INSTANT_INVITE, i),
                    s = ii.find((i) => i?.id === l.applicationId);
                null != l.launchId &&
                    !d &&
                    o &&
                    null != s &&
                    iA.push(
                        (0, n.jsx)(
                            a.Drp,
                            {
                                id: "invite-to-join-embedded",
                                label: X.intl.string(X.t["3fRySx"]),
                                subtext: s.name,
                                action: () => {
                                    ((l, d) => {
                                        let o = _.A.getChannel(l),
                                            s = null == o ? void 0 : h.A.getGuild(o.guild_id);
                                        if (null != o && null != s) {
                                            if (null != t)
                                                return L.Ue({
                                                    channelId: o.id,
                                                    applicationId: d,
                                                    userId: t.id,
                                                    location: k.PE1.CONTEXT_MENU,
                                                    inviteAnalyticsMetadata: { source: k.PE1.ACTIVITY_INVITE },
                                                });
                                            if (null != i && i.type === k.rbe.GUILD_VOICE)
                                                return (0, a.mMO)(
                                                    async () => {
                                                        let { default: t } = await Promise.all([
                                                            e.e("43600"),
                                                            e.e("28136"),
                                                            e.e("72469"),
                                                        ]).then(e.bind(e, 234355));
                                                        return (e) =>
                                                            (0, n.jsx)(t, {
                                                                ...e,
                                                                guild: s,
                                                                channel: o,
                                                                applicationId: d,
                                                                analyticsLocation:
                                                                    i.type === k.rbe.GUILD_VOICE
                                                                        ? k.liQ.GUILD_CHANNEL
                                                                        : k.liQ.DM_CHANNEL,
                                                                source: k.PE1.ACTIVITY_INVITE,
                                                            });
                                                    },
                                                    { modalKey: "use-activity-items-embedded-invite-modal" },
                                                );
                                            if (i?.id != null)
                                                return L.tk({
                                                    activityChannelId: o.id,
                                                    invitedChannelId: i.id,
                                                    applicationId: d,
                                                    location: k.PE1.CONTEXT_MENU,
                                                    inviteAnalyticsMetadata: { source: k.PE1.ACTIVITY_INVITE },
                                                });
                                        }
                                    })((0, V.H)(l.location), l.applicationId);
                                },
                            },
                            `self-embedded-${l.applicationId}`,
                        ),
                    );
            }),
            H.forEach((i, t) => {
                il[t] &&
                    (i.type === k.$pd.PLAYING && (0, $.A)(i, k.jUm.JOIN)
                        ? iA.push(
                              (0, n.jsx)(
                                  a.Drp,
                                  {
                                      id: "invite-to-join",
                                      label: X.intl.string(X.t["3fRySx"]),
                                      subtext: i.name,
                                      action: () => io(k.xL.JOIN, i),
                                  },
                                  `self${t}`,
                              ),
                          )
                        : i.type === k.$pd.LISTENING &&
                          (0, $.A)(i, k.jUm.SYNC) &&
                          iA.push(
                              (0, n.jsx)(
                                  a.Drp,
                                  {
                                      id: "invite-to-listen",
                                      label: X.intl.string(X.t["5vvGpV"]),
                                      subtext: i.name,
                                      action: () => io(k.xL.LISTEN, i),
                                  },
                                  `self${t}`,
                              ),
                          ));
            }),
            iA.length > 0 && iA.push((0, n.jsx)(a.bXX, {}, "menu-separator")),
            F.forEach((e, l) => {
                let d = (0, $.A)(e, k.jUm.EMBEDDED),
                    o = (0, $.A)(e, k.jUm.CONTEXTLESS);
                if (
                    e.type === k.$pd.PLAYING &&
                    (0, $.A)(e, k.jUm.JOIN) &&
                    (!d || o) &&
                    null != e.session_id &&
                    null != e.application_id
                )
                    if (ie[l] !== Y.o.CANNOT_JOIN) {
                        let i = X.intl.string(X.t.VJlc0S),
                            t = !1;
                        z[l]
                            ? ((i = X.intl.string(X.t.bf6Ci7)), (t = !0))
                            : ie[l] === Y.o.JOINED && ((i = X.intl.string(X.t.DPfdsq)), (t = !0)),
                            iA.push(
                                (0, n.jsx)(
                                    a.Drp,
                                    {
                                        id: "join",
                                        label: i,
                                        disabled: t,
                                        loading: z[l],
                                        subtext: e.name,
                                        action: () => is(e),
                                    },
                                    l,
                                ),
                            );
                    } else
                        iA.push(
                            (0, n.jsx)(
                                a.Drp,
                                {
                                    id: "ask-to-join",
                                    label: X.intl.string(X.t.OKsSCR),
                                    subtext: e.name,
                                    action: () => io(k.xL.JOIN_REQUEST, e),
                                },
                                l,
                            ),
                        );
                else if (e.type === k.$pd.LISTENING && (0, $.A)(e, k.jUm.SYNC) && null != ia[l]) {
                    let d = ia[l],
                        { playDisabled: o, syncDisabled: s } = d;
                    iA.push(
                        (0, n.jsx)(
                            a.Drp,
                            {
                                id: `spotify-play-${e.session_id}`,
                                action: () => (0, N.A)(d, Q.Qp.USER_ACTIVITY_PLAY),
                                label: (0, r.A)(d, Q.Qp.USER_ACTIVITY_PLAY),
                                subtext: o
                                    ? (0, u.A)(
                                          d,
                                          Q.Qp.USER_ACTIVITY_PLAY,
                                          null != i ? D.Ay.getNickname(i.guild_id, i.id, t) : void 0,
                                      )
                                    : void 0,
                                disabled: o,
                            },
                            `spotify-play-${e.session_id}`,
                        ),
                        (0, n.jsx)(
                            a.Drp,
                            {
                                id: `spotify-sync-${e.session_id}`,
                                action: () => (0, y.A)(d, Q.Qp.USER_ACTIVITY_SYNC),
                                label: X.intl.string(X.t.gXYoq2),
                                subtext: s
                                    ? (0, u.A)(
                                          d,
                                          Q.Qp.USER_ACTIVITY_SYNC,
                                          null != i ? D.Ay.getNickname(i.guild_id, i.id, t) : void 0,
                                      )
                                    : void 0,
                                disabled: s,
                            },
                            `spotify-sync-${e.session_id}`,
                        ),
                    );
                }
            }),
            Z.forEach((i, t) => {
                let e = t + F.length,
                    l = ii.find((t) => t?.id === i.applicationId);
                if (ie[e] !== Y.o.CANNOT_JOIN && null != l) {
                    let t = i.userIds.has(w?.id ?? k.dJq),
                        d = X.intl.string(X.t["4i2vj+"]),
                        o = !1;
                    ie[e] === Y.o.JOINED
                        ? ((d = X.intl.string(X.t.DPfdsq)), (o = !0))
                        : t
                          ? ((d = X.intl.string(X.t["0OiwfH"])), (o = !0))
                          : z[e] && ((d = X.intl.string(X.t.bf6Ci7)), (o = !0)),
                        iA.push(
                            (0, n.jsx)(
                                a.Drp,
                                {
                                    id: `embedded-activity-join-${i.applicationId}`,
                                    label: d,
                                    disabled: o,
                                    loading: z[e],
                                    subtext: l.name,
                                    action: () => ip(i),
                                },
                                `embedded-activity-${i.applicationId}`,
                            ),
                        );
                }
            })),
        iA
    );
}
