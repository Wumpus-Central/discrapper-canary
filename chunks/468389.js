e.d(t, { A: () => X }), e(321073);
var n = e(627968);
e(64700);
var l = e(311907),
    a = e(397927),
    d = e(308368),
    o = e(544420),
    s = e(212245),
    p = e(688810),
    c = e(429913),
    r = e(655116),
    A = e(160768),
    u = e(341335),
    I = e(286617),
    y = e(533207),
    E = e(881335),
    b = e(961350),
    _ = e(734057),
    h = e(498642),
    N = e(71393),
    f = e(375492),
    S = e(576705),
    m = e(290863),
    T = e(994500),
    C = e(309010),
    v = e(461213),
    g = e(287809),
    j = e(977997),
    x = e(689168),
    L = e(562153),
    U = e(795816),
    D = e(933958),
    O = e(447031),
    G = e(170148),
    V = e(902169),
    Y = e(969151),
    P = e(550151),
    $ = e(833349),
    M = e(765379),
    R = e(946255),
    J = e(360469),
    k = e(652215),
    K = e(272984),
    Q = e(985018);
function X(i, t) {
    let { analyticsLocations: X } = (0, p.Ay)(),
        w = (0, l.bG)([g.default], () => g.default.getCurrentUser()),
        B = (0, l.bG)([D.Ay], () => D.Ay.getSelfEmbeddedActivities()),
        H = (0, l.yK)([v.A], () =>
            v.A.getActivities().filter((i) => null == i.application_id || !B?.has(i.application_id)),
        ),
        q = (0, l.yK)([m.A], () => (null != t ? m.A.getActivities(t.id, i?.getGuildId()) : []), [t, i]),
        F = (0, l.yK)([D.Ay], () => {
            let e = i?.id != null ? D.Ay.getEmbeddedActivitiesForChannel(i.id) : D.Am;
            return null != t
                ? e.filter((i) => {
                      let { userIds: e } = i;
                      return e.has(t.id);
                  })
                : e;
        }, [t, i]),
        Z = (0, l.bG)([S.A], () => null == i || i.isPrivate() || S.A.can(k.xBc.SEND_MESSAGES, i), [i]),
        W = (0, l.yK)(
            [x.A],
            () => [
                ...q.map(
                    (i) => null != i.application_id && x.A.getState(i.application_id, k.xL.JOIN) === k.eAD.LOADING,
                ),
                ...F.map((i) => x.A.getState(i.applicationId, k.xL.JOIN) === k.eAD.LOADING),
            ],
            [q, F],
        ),
        z = (0, c.A)([
            ...q.filter((i) => i?.application_id != null).map((i) => i.application_id),
            ...F.map((i) => i.applicationId),
        ]),
        ii = i?.id,
        it = (0, l.yK)(
            [_.A, N.A, h.A, T.A, C.A, j.A, S.A, f.A, v.A],
            () => [
                ...q.map((i) =>
                    (0, V.A)({
                        user: t ?? w,
                        activity: i,
                        application: z.find((t) => t?.id === i.application_id),
                        channelId: ii,
                        currentUser: w,
                        isEmbedded: (0, M.A)(i),
                        ChannelStore: _.A,
                        GuildStore: N.A,
                        GuildMemberCountStore: h.A,
                        RelationshipStore: T.A,
                        SelectedChannelStore: C.A,
                        VoiceStateStore: j.A,
                        PermissionStore: S.A,
                        LocalActivityStore: f.A,
                        SelfPresenceStore: v.A,
                    }),
                ),
                ...F.map((i) => {
                    let e = t ?? w;
                    return (
                        null != e &&
                        (0, P.Ay)({
                            userId: e.id,
                            application: z.find((t) => t?.id === i.applicationId),
                            channelId: ii,
                            currentUser: w,
                            isActivitiesEnabledForCurrentPlatform: (0, G.A)(),
                            ChannelStore: _.A,
                            GuildStore: N.A,
                            VoiceStateStore: j.A,
                            PermissionStore: S.A,
                        }) === P.Gy.CAN_JOIN
                    );
                }),
            ],
            [q, z, ii, w, F, t],
        ),
        ie = (0, l.yK)(
            [r.A, b.default],
            () => q.map((i) => (i.type === k.$pd.LISTENING && null != t ? (0, I.A)(r.A, b.default, t, i) : void 0)),
            [t, q],
        ),
        il = (0, s.p)();
    if (!Z && i?.type !== k.rbe.GUILD_VOICE) return null;
    let ia = (e, n) => {
            null != i
                ? d.A.sendActivityInvite({ type: e, channelId: i.id, activity: n, location: k.ThZ.CONTEXT_MENU })
                : null != t &&
                  d.A.sendActivityInviteUser({ type: e, userId: t.id, activity: n, location: k.ThZ.CONTEXT_MENU });
        },
        id = async (i) => {
            let e = (0, $.A)(i, k.jUm.EMBEDDED),
                n = C.A.getVoiceChannelId(),
                l = _.A.getChannel(n);
            await o.A.join({
                userId: t.id,
                sessionId: i.session_id,
                applicationId: i.application_id,
                channelId: n,
                messageId: null,
                intent: J.W9.PLAY,
                embedded: e,
                locationObject: il.location,
                analyticsLocations: X,
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
                        locationObject: il.location,
                        analyticsLocations: X,
                    });
        },
        io = async (t) => {
            await (0, O.A)({
                applicationId: t.applicationId,
                activityChannelId: i?.id,
                locationObject: il.location,
                analyticsLocations: X,
            });
        },
        is = [];
    return (
        (null != t && null != w && t?.id === w.id) ||
            (B?.forEach((l) => {
                let d = t?.id != null && l.userIds.has(t?.id),
                    o = S.A.can(k.xBc.CREATE_INSTANT_INVITE, i),
                    s = z.find((i) => i?.id === l.applicationId);
                null != l.launchId &&
                    !d &&
                    o &&
                    null != s &&
                    is.push(
                        (0, n.jsx)(
                            a.Drp,
                            {
                                id: "invite-to-join-embedded",
                                label: Q.intl.string(Q.t["3fRySx"]),
                                subtext: s.name,
                                action: () => {
                                    ((l, d) => {
                                        let o = _.A.getChannel(l),
                                            s = null == o ? void 0 : N.A.getGuild(o.guild_id);
                                        if (null != o && null != s) {
                                            if (null != t)
                                                return U.Ue({
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
                                                return U.tk({
                                                    activityChannelId: o.id,
                                                    invitedChannelId: i.id,
                                                    applicationId: d,
                                                    location: k.PE1.CONTEXT_MENU,
                                                    inviteAnalyticsMetadata: { source: k.PE1.ACTIVITY_INVITE },
                                                });
                                        }
                                    })((0, Y.H)(l.location), l.applicationId);
                                },
                            },
                            `self-embedded-${l.applicationId}`,
                        ),
                    );
            }),
            H.forEach((i, t) => {
                i.type === k.$pd.PLAYING && (0, $.A)(i, k.jUm.JOIN)
                    ? is.push(
                          (0, n.jsx)(
                              a.Drp,
                              {
                                  id: "invite-to-join",
                                  label: Q.intl.string(Q.t["3fRySx"]),
                                  subtext: i.name,
                                  action: () => ia(k.xL.JOIN, i),
                              },
                              `self${t}`,
                          ),
                      )
                    : i.type === k.$pd.LISTENING &&
                      (0, $.A)(i, k.jUm.SYNC) &&
                      is.push(
                          (0, n.jsx)(
                              a.Drp,
                              {
                                  id: "invite-to-listen",
                                  label: Q.intl.string(Q.t["5vvGpV"]),
                                  subtext: i.name,
                                  action: () => ia(k.xL.LISTEN, i),
                              },
                              `self${t}`,
                          ),
                      );
            }),
            is.length > 0 && is.push((0, n.jsx)(a.bXX, {}, "menu-separator")),
            q.forEach((e, l) => {
                let d = (0, $.A)(e, k.jUm.EMBEDDED),
                    o = (0, $.A)(e, k.jUm.CONTEXTLESS);
                if (
                    e.type === k.$pd.PLAYING &&
                    (0, $.A)(e, k.jUm.JOIN) &&
                    (!d || o) &&
                    null != e.session_id &&
                    null != e.application_id
                )
                    if (it[l]) {
                        let i = W[l];
                        is.push(
                            (0, n.jsx)(
                                a.Drp,
                                {
                                    id: "join",
                                    label: i ? Q.intl.string(Q.t.bf6Ci7) : Q.intl.string(Q.t.VJlc0S),
                                    disabled: i,
                                    loading: i,
                                    subtext: e.name,
                                    action: () => id(e),
                                },
                                l,
                            ),
                        );
                    } else
                        is.push(
                            (0, n.jsx)(
                                a.Drp,
                                {
                                    id: "ask-to-join",
                                    label: Q.intl.string(Q.t.OKsSCR),
                                    subtext: e.name,
                                    action: () => ia(k.xL.JOIN_REQUEST, e),
                                },
                                l,
                            ),
                        );
                else if (e.type === k.$pd.LISTENING && (0, $.A)(e, k.jUm.SYNC) && null != ie[l]) {
                    let d = ie[l],
                        { playDisabled: o, syncDisabled: s } = d;
                    is.push(
                        (0, n.jsx)(
                            a.Drp,
                            {
                                id: `spotify-play-${e.session_id}`,
                                action: () => (0, E.A)(d, K.Qp.USER_ACTIVITY_PLAY),
                                label: (0, A.A)(d, K.Qp.USER_ACTIVITY_PLAY),
                                subtext: o
                                    ? (0, u.A)(
                                          d,
                                          K.Qp.USER_ACTIVITY_PLAY,
                                          null != i ? L.Ay.getNickname(i.guild_id, i.id, t) : void 0,
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
                                action: () => (0, y.A)(d, K.Qp.USER_ACTIVITY_SYNC),
                                label: Q.intl.string(Q.t.gXYoq2),
                                subtext: s
                                    ? (0, u.A)(
                                          d,
                                          K.Qp.USER_ACTIVITY_SYNC,
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
            F.forEach((i, t) => {
                let e = i.userIds.has(w?.id ?? k.dJq),
                    l = t + q.length,
                    d = W[l] || e,
                    o = Q.intl.string(Q.t["4i2vj+"]);
                e ? (o = Q.intl.string(Q.t["0OiwfH"])) : W[l] && (o = Q.intl.string(Q.t.bf6Ci7));
                let s = z.find((t) => t?.id === i.applicationId);
                it[l] &&
                    null != s &&
                    is.push(
                        (0, n.jsx)(
                            a.Drp,
                            {
                                id: `embedded-activity-join-${i.applicationId}`,
                                label: o,
                                disabled: d,
                                loading: W[l],
                                subtext: s.name,
                                action: () => io(i),
                            },
                            `embedded-activity-${i.applicationId}`,
                        ),
                    );
            })),
        is
    );
}
