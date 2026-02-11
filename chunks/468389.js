e.d(t, { A: () => Q }), e(321073);
var n = e(627968);
e(64700);
var l = e(311907),
    a = e(397927),
    d = e(308368),
    s = e(544420),
    o = e(212245),
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
    f = e(576705),
    m = e(290863),
    T = e(994500),
    C = e(309010),
    S = e(461213),
    g = e(287809),
    v = e(977997),
    j = e(689168),
    x = e(562153),
    L = e(795816),
    U = e(933958),
    D = e(447031),
    O = e(170148),
    G = e(902169),
    V = e(969151),
    Y = e(550151),
    P = e(833349),
    $ = e(765379),
    M = e(946255),
    R = e(360469),
    J = e(652215),
    k = e(272984),
    K = e(985018);
function Q(i, t) {
    let { analyticsLocations: Q } = (0, p.Ay)(),
        X = (0, l.bG)([g.default], () => g.default.getCurrentUser()),
        w = (0, l.bG)([U.Ay], () => U.Ay.getSelfEmbeddedActivities()),
        B = (0, l.yK)([S.A], () =>
            S.A.getActivities().filter((i) => null == i.application_id || !w?.has(i.application_id)),
        ),
        H = (0, l.yK)([m.A], () => (null != t ? m.A.getActivities(t.id, i?.getGuildId()) : []), [t, i]),
        q = (0, l.yK)([U.Ay], () => {
            let e = i?.id != null ? U.Ay.getEmbeddedActivitiesForChannel(i.id) : U.Am;
            return null != t
                ? e.filter((i) => {
                      let { userIds: e } = i;
                      return e.has(t.id);
                  })
                : e;
        }, [t, i]),
        F = (0, l.bG)([f.A], () => null == i || i.isPrivate() || f.A.can(J.xBc.SEND_MESSAGES, i), [i]),
        Z = (0, l.yK)(
            [j.A],
            () => [
                ...H.map(
                    (i) => null != i.application_id && j.A.getState(i.application_id, J.xL.JOIN) === J.eAD.LOADING,
                ),
                ...q.map((i) => j.A.getState(i.applicationId, J.xL.JOIN) === J.eAD.LOADING),
            ],
            [H, q],
        ),
        W = (0, c.A)([
            ...H.filter((i) => i?.application_id != null).map((i) => i.application_id),
            ...q.map((i) => i.applicationId),
        ]),
        z = i?.id,
        ii = (0, l.yK)(
            [_.A, N.A, h.A, T.A, C.A, v.A, f.A],
            () => [
                ...H.map((i) =>
                    (0, G.A)({
                        user: t ?? X,
                        activity: i,
                        application: W.find((t) => t?.id === i.application_id),
                        channelId: z,
                        currentUser: X,
                        isEmbedded: (0, $.A)(i),
                        ChannelStore: _.A,
                        GuildStore: N.A,
                        GuildMemberCountStore: h.A,
                        RelationshipStore: T.A,
                        SelectedChannelStore: C.A,
                        VoiceStateStore: v.A,
                        PermissionStore: f.A,
                    }),
                ),
                ...q.map((i) => {
                    let e = t ?? X;
                    return (
                        null != e &&
                        (0, Y.Ay)({
                            userId: e.id,
                            application: W.find((t) => t?.id === i.applicationId),
                            channelId: z,
                            currentUser: X,
                            isActivitiesEnabledForCurrentPlatform: (0, O.A)(),
                            ChannelStore: _.A,
                            GuildStore: N.A,
                            VoiceStateStore: v.A,
                            PermissionStore: f.A,
                        }) === Y.Gy.CAN_JOIN
                    );
                }),
            ],
            [H, W, z, X, q, t],
        ),
        it = (0, l.yK)(
            [r.A, b.default],
            () => H.map((i) => (i.type === J.$pd.LISTENING && null != t ? (0, I.A)(r.A, b.default, t, i) : void 0)),
            [t, H],
        ),
        ie = (0, o.p)();
    if (!F && i?.type !== J.rbe.GUILD_VOICE) return null;
    let il = (e, n) => {
            null != i
                ? d.A.sendActivityInvite({ type: e, channelId: i.id, activity: n, location: J.ThZ.CONTEXT_MENU })
                : null != t &&
                  d.A.sendActivityInviteUser({ type: e, userId: t.id, activity: n, location: J.ThZ.CONTEXT_MENU });
        },
        ia = async (i) => {
            let e = (0, P.A)(i, J.jUm.EMBEDDED),
                n = C.A.getVoiceChannelId(),
                l = _.A.getChannel(n);
            await s.A.join({
                userId: t.id,
                sessionId: i.session_id,
                applicationId: i.application_id,
                channelId: n,
                messageId: null,
                intent: R.W9.PLAY,
                embedded: e,
                locationObject: ie.location,
                analyticsLocations: Q,
            }),
                e ||
                    (0, M.A)({
                        type: J.UqL.JOIN,
                        userId: t.id,
                        guildId: l?.guild_id,
                        channelId: n,
                        channelType: l?.type,
                        applicationId: i.application_id,
                        partyId: i.party?.id,
                        locationObject: ie.location,
                        analyticsLocations: Q,
                    });
        },
        id = async (t) => {
            await (0, D.A)({
                applicationId: t.applicationId,
                activityChannelId: i?.id,
                locationObject: ie.location,
                analyticsLocations: Q,
            });
        },
        is = [];
    return (
        w?.forEach((l) => {
            let d = t?.id != null && l.userIds.has(t?.id),
                s = f.A.can(J.xBc.CREATE_INSTANT_INVITE, i),
                o = W.find((i) => i?.id === l.applicationId);
            null != l.launchId &&
                !d &&
                s &&
                null != o &&
                is.push(
                    (0, n.jsx)(
                        a.Drp,
                        {
                            id: "invite-to-join-embedded",
                            label: K.intl.string(K.t["3fRySx"]),
                            subtext: o.name,
                            action: () => {
                                ((l, d) => {
                                    let s = _.A.getChannel(l),
                                        o = null == s ? void 0 : N.A.getGuild(s.guild_id);
                                    if (null != s && null != o) {
                                        if (null != t)
                                            return L.Ue({
                                                channelId: s.id,
                                                applicationId: d,
                                                userId: t.id,
                                                location: J.PE1.CONTEXT_MENU,
                                                inviteAnalyticsMetadata: { source: J.PE1.ACTIVITY_INVITE },
                                            });
                                        if (null != i && i.type === J.rbe.GUILD_VOICE)
                                            return (0, a.mMO)(
                                                async () => {
                                                    let { default: t } = await Promise.all([
                                                        e.e("43600"),
                                                        e.e("28136"),
                                                        e.e("8421"),
                                                    ]).then(e.bind(e, 234355));
                                                    return (e) =>
                                                        (0, n.jsx)(t, {
                                                            ...e,
                                                            guild: o,
                                                            channel: s,
                                                            applicationId: d,
                                                            analyticsLocation:
                                                                i.type === J.rbe.GUILD_VOICE
                                                                    ? J.liQ.GUILD_CHANNEL
                                                                    : J.liQ.DM_CHANNEL,
                                                            source: J.PE1.ACTIVITY_INVITE,
                                                        });
                                                },
                                                { modalKey: "use-activity-items-embedded-invite-modal" },
                                            );
                                        if (i?.id != null)
                                            return L.tk({
                                                activityChannelId: s.id,
                                                invitedChannelId: i.id,
                                                applicationId: d,
                                                location: J.PE1.CONTEXT_MENU,
                                                inviteAnalyticsMetadata: { source: J.PE1.ACTIVITY_INVITE },
                                            });
                                    }
                                })((0, V.H)(l.location), l.applicationId);
                            },
                        },
                        `self-embedded-${l.applicationId}`,
                    ),
                );
        }),
        B.forEach((i, e) => {
            t?.id !== b.default.getId() &&
                (i.type === J.$pd.PLAYING && (0, P.A)(i, J.jUm.JOIN)
                    ? is.push(
                          (0, n.jsx)(
                              a.Drp,
                              {
                                  id: "invite-to-join",
                                  label: K.intl.string(K.t["3fRySx"]),
                                  subtext: i.name,
                                  action: () => il(J.xL.JOIN, i),
                              },
                              `self${e}`,
                          ),
                      )
                    : i.type === J.$pd.LISTENING &&
                      (0, P.A)(i, J.jUm.SYNC) &&
                      is.push(
                          (0, n.jsx)(
                              a.Drp,
                              {
                                  id: "invite-to-listen",
                                  label: K.intl.string(K.t["5vvGpV"]),
                                  subtext: i.name,
                                  action: () => il(J.xL.LISTEN, i),
                              },
                              `self${e}`,
                          ),
                      ));
        }),
        is.length > 0 && is.push((0, n.jsx)(a.bXX, {}, "menu-separator")),
        H.forEach((e, l) => {
            let d = (0, P.A)(e, J.jUm.EMBEDDED),
                s = (0, P.A)(e, J.jUm.CONTEXTLESS);
            if (
                e.type === J.$pd.PLAYING &&
                (0, P.A)(e, J.jUm.JOIN) &&
                (!d || s) &&
                null != e.session_id &&
                null != e.application_id
            )
                if (ii[l]) {
                    let i = Z[l];
                    is.push(
                        (0, n.jsx)(
                            a.Drp,
                            {
                                id: "join",
                                label: i ? K.intl.string(K.t.bf6Ci7) : K.intl.string(K.t.VJlc0S),
                                disabled: i,
                                loading: i,
                                subtext: e.name,
                                action: () => ia(e),
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
                                label: K.intl.string(K.t.OKsSCR),
                                subtext: e.name,
                                action: () => il(J.xL.JOIN_REQUEST, e),
                            },
                            l,
                        ),
                    );
            else if (e.type === J.$pd.LISTENING && (0, P.A)(e, J.jUm.SYNC) && null != it[l]) {
                let d = it[l],
                    { playDisabled: s, syncDisabled: o } = d;
                is.push(
                    (0, n.jsx)(
                        a.Drp,
                        {
                            id: `spotify-play-${e.session_id}`,
                            action: () => (0, E.A)(d, k.Qp.USER_ACTIVITY_PLAY),
                            label: (0, A.A)(d, k.Qp.USER_ACTIVITY_PLAY),
                            subtext: s
                                ? (0, u.A)(
                                      d,
                                      k.Qp.USER_ACTIVITY_PLAY,
                                      null != i ? x.Ay.getNickname(i.guild_id, i.id, t) : void 0,
                                  )
                                : void 0,
                            disabled: s,
                        },
                        `spotify-play-${e.session_id}`,
                    ),
                    (0, n.jsx)(
                        a.Drp,
                        {
                            id: `spotify-sync-${e.session_id}`,
                            action: () => (0, y.A)(d, k.Qp.USER_ACTIVITY_SYNC),
                            label: K.intl.string(K.t.gXYoq2),
                            subtext: o
                                ? (0, u.A)(
                                      d,
                                      k.Qp.USER_ACTIVITY_SYNC,
                                      null != i ? x.Ay.getNickname(i.guild_id, i.id, t) : void 0,
                                  )
                                : void 0,
                            disabled: o,
                        },
                        `spotify-sync-${e.session_id}`,
                    ),
                );
            }
        }),
        q.forEach((i, t) => {
            let e = i.userIds.has(X?.id ?? J.dJq),
                l = t + H.length,
                d = Z[l] || e,
                s = K.intl.string(K.t["4i2vj+"]);
            e ? (s = K.intl.string(K.t["0OiwfH"])) : Z[l] && (s = K.intl.string(K.t.bf6Ci7));
            let o = W.find((t) => t?.id === i.applicationId);
            ii[l] &&
                null != o &&
                is.push(
                    (0, n.jsx)(
                        a.Drp,
                        {
                            id: `embedded-activity-join-${i.applicationId}`,
                            label: s,
                            disabled: d,
                            loading: Z[l],
                            subtext: o.name,
                            action: () => id(i),
                        },
                        `embedded-activity-${i.applicationId}`,
                    ),
                );
        }),
        is
    );
}
