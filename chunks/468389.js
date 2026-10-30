(t.d(e, { A: () => H }), t(321073));
var n = t(477900);
t(582128);
var l = t(350835),
    a = t(17928),
    d = t(192308),
    o = t(477782),
    s = t(308368),
    A = t(452295),
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
    C = t(280450),
    f = t(734057),
    S = t(629016),
    h = t(498642),
    T = t(71393),
    m = t(480595),
    g = t(576705),
    v = t(290863),
    O = t(994500),
    L = t(309010),
    D = t(461213),
    j = t(287809),
    x = t(977997),
    U = t(689168),
    G = t(562153),
    P = t(795816),
    V = t(933958),
    Y = t(62583),
    J = t(170148),
    $ = t(969151),
    M = t(776677),
    R = t(550151),
    K = t(55730),
    k = t(765379),
    Q = t(946255),
    X = t(818023),
    q = t(652215),
    w = t(272984),
    B = t(105292);
function H(i, e) {
    let { analyticsLocations: H } = (0, r.Ay)(),
        F = (0, a.bG)([j.default], () => j.default.getCurrentUser()),
        Z = (0, a.bG)([V.Ay], () => V.Ay.getSelfEmbeddedActivities()),
        z = (0, a.yK)([D.A], () =>
            D.A.getActivities().filter((i) => null == i.application_id || !Z?.has(i.application_id)),
        ),
        W = (0, a.yK)([v.A], () => (null != e ? v.A.getActivities(e.id, i?.getGuildId()) : []), [e, i]),
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
        ie = (0, a.bG)([g.A], () => null == i || i.isPrivate() || g.A.can(q.xBc.SEND_MESSAGES, i), [i]),
        it = (0, a.yK)(
            [U.A],
            () => [
                ...W.map(
                    (i) => null != i.application_id && U.A.getState(i.application_id, q.xL.JOIN) === q.eAD.LOADING,
                ),
                ...ii.map((i) => U.A.getState(i.applicationId, q.xL.JOIN) === q.eAD.LOADING),
            ],
            [W, ii],
        ),
        il = (0, u.A)([
            ...W.filter((i) => i?.application_id != null).map((i) => i.application_id),
            ...ii.map((i) => i.applicationId),
        ]),
        ia = i?.id,
        id = (0, p.vL)(i),
        io = (0, a.yK)(
            [f.A, T.A, h.A, O.A, L.Ay, x.A, g.A, m.A, D.A, V.Ay],
            () => [
                ...W.map((i) =>
                    (0, M.A)({
                        user: e ?? F,
                        activity: i,
                        application: il.find((e) => e?.id === i.application_id),
                        channelId: ia,
                        currentUser: F,
                        isContentGated: id,
                        isEmbedded: (0, k.A)(i),
                        ChannelStore: f.A,
                        GuildStore: T.A,
                        GuildMemberCountStore: h.A,
                        RelationshipStore: O.A,
                        SelectedChannelStore: L.Ay,
                        VoiceStateStore: x.A,
                        PermissionStore: g.A,
                        LocalActivityStore: m.A,
                        SelfPresenceStore: D.A,
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
                                GuildStore: T.A,
                                VoiceStateStore: x.A,
                                PermissionStore: g.A,
                            }) === R.Gy.CAN_JOIN
                          ? M.o.CAN_JOIN
                          : M.o.CANNOT_JOIN;
                }),
            ],
            [W, il, ia, F, id, ii, e],
        ),
        is = (0, a.yK)([S.A], () => z.map((i) => !S.A.getParty(i.party?.id)?.has(e?.id ?? q.dJq)), [z, e]),
        iA = (0, a.yK)(
            [I.A, C.default],
            () => W.map((i) => (i.type === l.$.LISTENING && null != e ? (0, E.A)(I.A, C.default, e, i) : void 0)),
            [e, W],
        ),
        ic = (0, c.p)();
    if (!ie && i?.type !== q.rbe.GUILD_VOICE) return null;
    function ip(t, n) {
        null != i
            ? s.A.sendActivityInvite({ type: t, channelId: i.id, activity: n, location: q.ThZ.CONTEXT_MENU })
            : null != e &&
              s.A.sendActivityInviteUser({ type: t, userId: e.id, activity: n, location: q.ThZ.CONTEXT_MENU });
    }
    async function ir(i) {
        let t = (0, K.A)(i, q.jUm.EMBEDDED),
            n = L.Ay.getVoiceChannelId(),
            l = f.A.getChannel(n);
        (await A.A.join({
            userId: e.id,
            sessionId: i.session_id,
            applicationId: i.application_id,
            channelId: n,
            messageId: null,
            intent: X.W9.PLAY,
            embedded: t,
            locationObject: ic.location,
            analyticsLocations: H,
        }),
            t ||
                (0, Q.A)({
                    type: q.UqL.JOIN,
                    userId: e.id,
                    guildId: l?.guild_id,
                    channelId: n,
                    channelType: l?.type,
                    applicationId: i.application_id,
                    partyId: i.party?.id,
                    locationObject: ic.location,
                    analyticsLocations: H,
                }));
    }
    async function iu(e) {
        await (0, Y.A)({
            applicationId: e.applicationId,
            activityChannelId: i?.id,
            locationObject: ic.location,
            analyticsLocations: H,
        });
    }
    let iI = [];
    return (
        (null != e && null != F && e?.id === F.id) ||
            (Z?.forEach((l) => {
                let a = e?.id != null && l.userIds.has(e?.id),
                    s = g.A.can(q.xBc.CREATE_INSTANT_INVITE, i),
                    A = il.find((i) => i?.id === l.applicationId);
                null != l.launchId &&
                    !a &&
                    s &&
                    null != A &&
                    iI.push(
                        (0, n.jsx)(
                            o.Dr,
                            {
                                id: "invite-to-join-embedded",
                                label: B.intl.string(B.t["3fRySx"]),
                                subtext: A.name,
                                action: () => {
                                    !(function (l, a) {
                                        let o = f.A.getChannel(l),
                                            s = null == o ? void 0 : T.A.getGuild(o.guild_id);
                                        if (null != o && null != s) {
                                            if (null != e)
                                                return P.Ue({
                                                    channelId: o.id,
                                                    applicationId: a,
                                                    userId: e.id,
                                                    location: q.PE1.CONTEXT_MENU,
                                                    inviteAnalyticsMetadata: { source: q.PE1.ACTIVITY_INVITE },
                                                });
                                            if (null != i && i.type === q.rbe.GUILD_VOICE)
                                                return (0, d.openModalLazy)(
                                                    async () => {
                                                        let { default: e } = await Promise.all([
                                                            t.e("403382"),
                                                            t.e("683621"),
                                                            t.e("730931"),
                                                            t.e("711162"),
                                                            t.e("691398"),
                                                            t.e("329172"),
                                                            t.e("401425"),
                                                            t.e("919170"),
                                                            t.e("543039"),
                                                            t.e("593600"),
                                                            t.e("827708"),
                                                            t.e("948804"),
                                                            t.e("672727"),
                                                            t.e("927211"),
                                                            t.e("646506"),
                                                            t.e("445124"),
                                                            t.e("445421"),
                                                            t.e("832823"),
                                                            t.e("761935"),
                                                            t.e("502018"),
                                                            t.e("570506"),
                                                            t.e("592028"),
                                                            t.e("425906"),
                                                            t.e("123216"),
                                                            t.e("621624"),
                                                            t.e("588940"),
                                                            t.e("70833"),
                                                            t.e("147786"),
                                                            t.e("897073"),
                                                            t.e("121435"),
                                                            t.e("317225"),
                                                            t.e("124060"),
                                                            t.e("146566"),
                                                            t.e("32661"),
                                                            t.e("696123"),
                                                            t.e("237834"),
                                                            t.e("837687"),
                                                            t.e("140557"),
                                                            t.e("159957"),
                                                            t.e("728136"),
                                                            t.e("678195"),
                                                            t.e("643104"),
                                                            t.e("368426"),
                                                            t.e("216084"),
                                                            t.e("284819"),
                                                            t.e("658216"),
                                                            t.e("128781"),
                                                        ]).then(t.bind(t, 405342));
                                                        return (t) =>
                                                            (0, n.jsx)(e, {
                                                                ...t,
                                                                guild: s,
                                                                channel: o,
                                                                applicationId: a,
                                                                analyticsLocation:
                                                                    i.type === q.rbe.GUILD_VOICE
                                                                        ? q.liQ.GUILD_CHANNEL
                                                                        : q.liQ.DM_CHANNEL,
                                                                source: q.PE1.ACTIVITY_INVITE,
                                                            });
                                                    },
                                                    { modalKey: "use-activity-items-embedded-invite-modal" },
                                                );
                                            i?.id != null &&
                                                P.tk({
                                                    activityChannelId: o.id,
                                                    invitedChannelId: i.id,
                                                    applicationId: a,
                                                    location: q.PE1.CONTEXT_MENU,
                                                    inviteAnalyticsMetadata: { source: q.PE1.ACTIVITY_INVITE },
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
                is[e] &&
                    (i.type === l.$.PLAYING && (0, K.A)(i, q.jUm.JOIN)
                        ? iI.push(
                              (0, n.jsx)(
                                  o.Dr,
                                  {
                                      id: "invite-to-join",
                                      label: B.intl.string(B.t["3fRySx"]),
                                      subtext: i.name,
                                      action: () => ip(q.xL.JOIN, i),
                                  },
                                  `self${e}`,
                              ),
                          )
                        : i.type === l.$.LISTENING &&
                          (0, K.A)(i, q.jUm.SYNC) &&
                          iI.push(
                              (0, n.jsx)(
                                  o.Dr,
                                  {
                                      id: "invite-to-listen",
                                      label: B.intl.string(B.t["5vvGpV"]),
                                      subtext: i.name,
                                      action: () => ip(q.xL.LISTEN, i),
                                  },
                                  `self${e}`,
                              ),
                          ));
            }),
            iI.length > 0 && iI.push((0, n.jsx)(o.bX, {}, "menu-separator")),
            W.forEach((t, a) => {
                let d = (0, K.A)(t, q.jUm.EMBEDDED),
                    s = (0, K.A)(t, q.jUm.CONTEXTLESS);
                if (
                    t.type === l.$.PLAYING &&
                    (0, K.A)(t, q.jUm.JOIN) &&
                    (!d || s) &&
                    null != t.session_id &&
                    null != t.application_id
                )
                    if (io[a] !== M.o.CANNOT_JOIN) {
                        let i = B.intl.string(B.t.VJlc0S),
                            e = !1;
                        (it[a]
                            ? ((i = B.intl.string(B.t.bf6Ci7)), (e = !0))
                            : io[a] === M.o.JOINED && ((i = B.intl.string(B.t.DPfdsq)), (e = !0)),
                            iI.push(
                                (0, n.jsx)(
                                    o.Dr,
                                    {
                                        id: "join",
                                        label: i,
                                        disabled: e,
                                        loading: it[a],
                                        subtext: t.name,
                                        action: () => ir(t),
                                    },
                                    a,
                                ),
                            ));
                    } else
                        iI.push(
                            (0, n.jsx)(
                                o.Dr,
                                {
                                    id: "ask-to-join",
                                    label: B.intl.string(B.t.OKsSCR),
                                    subtext: t.name,
                                    action: () => ip(q.xL.JOIN_REQUEST, t),
                                },
                                a,
                            ),
                        );
                else if (t.type === l.$.LISTENING && (0, K.A)(t, q.jUm.SYNC) && null != iA[a]) {
                    let l = iA[a],
                        { playDisabled: d, syncDisabled: s } = l;
                    iI.push(
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
            ii.forEach((i, e) => {
                let t = e + W.length,
                    l = il.find((e) => e?.id === i.applicationId);
                if (io[t] !== M.o.CANNOT_JOIN && null != l) {
                    let e = i.userIds.has(F?.id ?? q.dJq),
                        a = B.intl.string(B.t["4i2vj+"]),
                        d = !1;
                    (io[t] === M.o.JOINED
                        ? ((a = B.intl.string(B.t.DPfdsq)), (d = !0))
                        : e
                          ? ((a = B.intl.string(B.t["0OiwfH"])), (d = !0))
                          : it[t] && ((a = B.intl.string(B.t.bf6Ci7)), (d = !0)),
                        iI.push(
                            (0, n.jsx)(
                                o.Dr,
                                {
                                    id: `embedded-activity-join-${i.applicationId}`,
                                    label: a,
                                    disabled: d,
                                    loading: it[t],
                                    subtext: l.name,
                                    action: () => iu(i),
                                },
                                `embedded-activity-${i.applicationId}`,
                            ),
                        ));
                }
            })),
        iI
    );
}
