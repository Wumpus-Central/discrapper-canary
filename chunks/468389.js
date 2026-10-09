(t.d(e, { A: () => B }), t(321073));
var n = t(477900);
t(582128);
var l = t(17928),
    a = t(192308),
    d = t(477782),
    o = t(308368),
    s = t(780907),
    A = t(212245),
    p = t(323073),
    c = t(688810),
    r = t(429913),
    u = t(655116),
    I = t(160768),
    y = t(341335),
    N = t(286617),
    E = t(533207),
    _ = t(881335),
    b = t(280450),
    C = t(734057),
    f = t(629016),
    S = t(498642),
    h = t(71393),
    T = t(480595),
    m = t(576705),
    g = t(290863),
    v = t(994500),
    O = t(309010),
    L = t(461213),
    D = t(287809),
    j = t(977997),
    x = t(689168),
    U = t(562153),
    G = t(795816),
    P = t(933958),
    V = t(62583),
    Y = t(170148),
    J = t(969151),
    $ = t(776677),
    M = t(550151),
    R = t(55730),
    K = t(765379),
    k = t(946255),
    Q = t(818023),
    X = t(652215),
    q = t(272984),
    w = t(660183);
function B(i, e) {
    let { analyticsLocations: B } = (0, c.Ay)(),
        H = (0, l.bG)([D.default], () => D.default.getCurrentUser()),
        F = (0, l.bG)([P.Ay], () => P.Ay.getSelfEmbeddedActivities()),
        Z = (0, l.yK)([L.A], () =>
            L.A.getActivities().filter((i) => null == i.application_id || !F?.has(i.application_id)),
        ),
        z = (0, l.yK)([g.A], () => (null != e ? g.A.getActivities(e.id, i?.getGuildId()) : []), [e, i]),
        W = (0, l.yK)(
            [P.Ay],
            () => {
                let t = i?.id != null ? P.Ay.getEmbeddedActivitiesForChannel(i.id) : P.Am;
                return null != e
                    ? t.filter((i) => {
                          let { userIds: t } = i;
                          return t.has(e.id);
                      })
                    : t;
            },
            [e, i],
        ),
        ii = (0, l.bG)([m.A], () => null == i || i.isPrivate() || m.A.can(X.xBc.SEND_MESSAGES, i), [i]),
        ie = (0, l.yK)(
            [x.A],
            () => [
                ...z.map(
                    (i) => null != i.application_id && x.A.getState(i.application_id, X.xL.JOIN) === X.eAD.LOADING,
                ),
                ...W.map((i) => x.A.getState(i.applicationId, X.xL.JOIN) === X.eAD.LOADING),
            ],
            [z, W],
        ),
        it = (0, r.A)([
            ...z.filter((i) => i?.application_id != null).map((i) => i.application_id),
            ...W.map((i) => i.applicationId),
        ]),
        il = i?.id,
        ia = (0, p.vL)(i),
        id = (0, l.yK)(
            [C.A, h.A, S.A, v.A, O.Ay, j.A, m.A, T.A, L.A, P.Ay],
            () => [
                ...z.map((i) =>
                    (0, $.A)({
                        user: e ?? H,
                        activity: i,
                        application: it.find((e) => e?.id === i.application_id),
                        channelId: il,
                        currentUser: H,
                        isContentGated: ia,
                        isEmbedded: (0, K.A)(i),
                        ChannelStore: C.A,
                        GuildStore: h.A,
                        GuildMemberCountStore: S.A,
                        RelationshipStore: v.A,
                        SelectedChannelStore: O.Ay,
                        VoiceStateStore: j.A,
                        PermissionStore: m.A,
                        LocalActivityStore: T.A,
                        SelfPresenceStore: L.A,
                        EmbeddedActivitiesStore: P.Ay,
                    }),
                ),
                ...W.map((i) => {
                    let t = e ?? H;
                    return null == t
                        ? $.o.CANNOT_JOIN
                        : (0, M.Ay)({
                                userId: t.id,
                                application: it.find((e) => e?.id === i.applicationId),
                                channelId: il,
                                currentUser: H,
                                isContentGated: ia,
                                isActivitiesEnabledForCurrentPlatform: (0, Y.A)(),
                                ChannelStore: C.A,
                                GuildStore: h.A,
                                VoiceStateStore: j.A,
                                PermissionStore: m.A,
                            }) === M.Gy.CAN_JOIN
                          ? $.o.CAN_JOIN
                          : $.o.CANNOT_JOIN;
                }),
            ],
            [z, it, il, H, ia, W, e],
        ),
        io = (0, l.yK)([f.A], () => Z.map((i) => !f.A.getParty(i.party?.id)?.has(e?.id ?? X.dJq)), [Z, e]),
        is = (0, l.yK)(
            [u.A, b.default],
            () => z.map((i) => (i.type === X.$pd.LISTENING && null != e ? (0, N.A)(u.A, b.default, e, i) : void 0)),
            [e, z],
        ),
        iA = (0, A.p)();
    if (!ii && i?.type !== X.rbe.GUILD_VOICE) return null;
    function ip(t, n) {
        null != i
            ? o.A.sendActivityInvite({ type: t, channelId: i.id, activity: n, location: X.ThZ.CONTEXT_MENU })
            : null != e &&
              o.A.sendActivityInviteUser({ type: t, userId: e.id, activity: n, location: X.ThZ.CONTEXT_MENU });
    }
    async function ic(i) {
        let t = (0, R.A)(i, X.jUm.EMBEDDED),
            n = O.Ay.getVoiceChannelId(),
            l = C.A.getChannel(n);
        (await s.Ay.join({
            userId: e.id,
            sessionId: i.session_id,
            applicationId: i.application_id,
            channelId: n,
            messageId: null,
            intent: Q.W9.PLAY,
            embedded: t,
            locationObject: iA.location,
            analyticsLocations: B,
        }),
            t ||
                (0, k.A)({
                    type: X.UqL.JOIN,
                    userId: e.id,
                    guildId: l?.guild_id,
                    channelId: n,
                    channelType: l?.type,
                    applicationId: i.application_id,
                    partyId: i.party?.id,
                    locationObject: iA.location,
                    analyticsLocations: B,
                }));
    }
    async function ir(e) {
        await (0, V.A)({
            applicationId: e.applicationId,
            activityChannelId: i?.id,
            locationObject: iA.location,
            analyticsLocations: B,
        });
    }
    let iu = [];
    return (
        (null != e && null != H && e?.id === H.id) ||
            (F?.forEach((l) => {
                let o = e?.id != null && l.userIds.has(e?.id),
                    s = m.A.can(X.xBc.CREATE_INSTANT_INVITE, i),
                    A = it.find((i) => i?.id === l.applicationId);
                null != l.launchId &&
                    !o &&
                    s &&
                    null != A &&
                    iu.push(
                        (0, n.jsx)(
                            d.Dr,
                            {
                                id: "invite-to-join-embedded",
                                label: w.intl.string(w.t["3fRySx"]),
                                subtext: A.name,
                                action: () => {
                                    !(function (l, d) {
                                        let o = C.A.getChannel(l),
                                            s = null == o ? void 0 : h.A.getGuild(o.guild_id);
                                        if (null != o && null != s) {
                                            if (null != e)
                                                return G.Ue({
                                                    channelId: o.id,
                                                    applicationId: d,
                                                    userId: e.id,
                                                    location: X.PE1.CONTEXT_MENU,
                                                    inviteAnalyticsMetadata: { source: X.PE1.ACTIVITY_INVITE },
                                                });
                                            if (null != i && i.type === X.rbe.GUILD_VOICE)
                                                return (0, a.openModalLazy)(
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
                                                            t.e("827708"),
                                                            t.e("948804"),
                                                            t.e("593600"),
                                                            t.e("672727"),
                                                            t.e("592028"),
                                                            t.e("662174"),
                                                            t.e("425906"),
                                                            t.e("123216"),
                                                            t.e("897073"),
                                                            t.e("445124"),
                                                            t.e("445421"),
                                                            t.e("588940"),
                                                            t.e("832823"),
                                                            t.e("761935"),
                                                            t.e("147786"),
                                                            t.e("502018"),
                                                            t.e("570506"),
                                                            t.e("121435"),
                                                            t.e("621624"),
                                                            t.e("124060"),
                                                            t.e("146566"),
                                                            t.e("317225"),
                                                            t.e("32661"),
                                                            t.e("696123"),
                                                            t.e("843719"),
                                                            t.e("237834"),
                                                            t.e("837687"),
                                                            t.e("278412"),
                                                            t.e("159957"),
                                                            t.e("728136"),
                                                            t.e("678195"),
                                                            t.e("216084"),
                                                            t.e("643104"),
                                                            t.e("847158"),
                                                            t.e("284819"),
                                                            t.e("658216"),
                                                            t.e("128781"),
                                                        ]).then(t.bind(t, 405342));
                                                        return (t) =>
                                                            (0, n.jsx)(e, {
                                                                ...t,
                                                                guild: s,
                                                                channel: o,
                                                                applicationId: d,
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
                                                G.tk({
                                                    activityChannelId: o.id,
                                                    invitedChannelId: i.id,
                                                    applicationId: d,
                                                    location: X.PE1.CONTEXT_MENU,
                                                    inviteAnalyticsMetadata: { source: X.PE1.ACTIVITY_INVITE },
                                                });
                                        }
                                    })((0, J.H)(l.location), l.applicationId);
                                },
                            },
                            `self-embedded-${l.applicationId}`,
                        ),
                    );
            }),
            Z.forEach((i, e) => {
                io[e] &&
                    (i.type === X.$pd.PLAYING && (0, R.A)(i, X.jUm.JOIN)
                        ? iu.push(
                              (0, n.jsx)(
                                  d.Dr,
                                  {
                                      id: "invite-to-join",
                                      label: w.intl.string(w.t["3fRySx"]),
                                      subtext: i.name,
                                      action: () => ip(X.xL.JOIN, i),
                                  },
                                  `self${e}`,
                              ),
                          )
                        : i.type === X.$pd.LISTENING &&
                          (0, R.A)(i, X.jUm.SYNC) &&
                          iu.push(
                              (0, n.jsx)(
                                  d.Dr,
                                  {
                                      id: "invite-to-listen",
                                      label: w.intl.string(w.t["5vvGpV"]),
                                      subtext: i.name,
                                      action: () => ip(X.xL.LISTEN, i),
                                  },
                                  `self${e}`,
                              ),
                          ));
            }),
            iu.length > 0 && iu.push((0, n.jsx)(d.bX, {}, "menu-separator")),
            z.forEach((t, l) => {
                let a = (0, R.A)(t, X.jUm.EMBEDDED),
                    o = (0, R.A)(t, X.jUm.CONTEXTLESS);
                if (
                    t.type === X.$pd.PLAYING &&
                    (0, R.A)(t, X.jUm.JOIN) &&
                    (!a || o) &&
                    null != t.session_id &&
                    null != t.application_id
                )
                    if (id[l] !== $.o.CANNOT_JOIN) {
                        let i = w.intl.string(w.t.VJlc0S),
                            e = !1;
                        (ie[l]
                            ? ((i = w.intl.string(w.t.bf6Ci7)), (e = !0))
                            : id[l] === $.o.JOINED && ((i = w.intl.string(w.t.DPfdsq)), (e = !0)),
                            iu.push(
                                (0, n.jsx)(
                                    d.Dr,
                                    {
                                        id: "join",
                                        label: i,
                                        disabled: e,
                                        loading: ie[l],
                                        subtext: t.name,
                                        action: () => ic(t),
                                    },
                                    l,
                                ),
                            ));
                    } else
                        iu.push(
                            (0, n.jsx)(
                                d.Dr,
                                {
                                    id: "ask-to-join",
                                    label: w.intl.string(w.t.OKsSCR),
                                    subtext: t.name,
                                    action: () => ip(X.xL.JOIN_REQUEST, t),
                                },
                                l,
                            ),
                        );
                else if (t.type === X.$pd.LISTENING && (0, R.A)(t, X.jUm.SYNC) && null != is[l]) {
                    let a = is[l],
                        { playDisabled: o, syncDisabled: s } = a;
                    iu.push(
                        (0, n.jsx)(
                            d.Dr,
                            {
                                id: `spotify-play-${t.session_id}`,
                                action: () => (0, _.A)(a, q.Qp.USER_ACTIVITY_PLAY),
                                label: (0, I.A)(a, q.Qp.USER_ACTIVITY_PLAY),
                                subtext: o
                                    ? (0, y.A)(
                                          a,
                                          q.Qp.USER_ACTIVITY_PLAY,
                                          null != i ? U.Ay.getNickname(i.guild_id, i.id, e) : void 0,
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
                                action: () => (0, E.A)(a, q.Qp.USER_ACTIVITY_SYNC),
                                label: w.intl.string(w.t.gXYoq2),
                                subtext: s
                                    ? (0, y.A)(
                                          a,
                                          q.Qp.USER_ACTIVITY_SYNC,
                                          null != i ? U.Ay.getNickname(i.guild_id, i.id, e) : void 0,
                                      )
                                    : void 0,
                                disabled: s,
                            },
                            `spotify-sync-${t.session_id}`,
                        ),
                    );
                }
            }),
            W.forEach((i, e) => {
                let t = e + z.length,
                    l = it.find((e) => e?.id === i.applicationId);
                if (id[t] !== $.o.CANNOT_JOIN && null != l) {
                    let e = i.userIds.has(H?.id ?? X.dJq),
                        a = w.intl.string(w.t["4i2vj+"]),
                        o = !1;
                    (id[t] === $.o.JOINED
                        ? ((a = w.intl.string(w.t.DPfdsq)), (o = !0))
                        : e
                          ? ((a = w.intl.string(w.t["0OiwfH"])), (o = !0))
                          : ie[t] && ((a = w.intl.string(w.t.bf6Ci7)), (o = !0)),
                        iu.push(
                            (0, n.jsx)(
                                d.Dr,
                                {
                                    id: `embedded-activity-join-${i.applicationId}`,
                                    label: a,
                                    disabled: o,
                                    loading: ie[t],
                                    subtext: l.name,
                                    action: () => ir(i),
                                },
                                `embedded-activity-${i.applicationId}`,
                            ),
                        ));
                }
            })),
        iu
    );
}
