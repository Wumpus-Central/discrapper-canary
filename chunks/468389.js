i.d(t, {
    A: () => Q,
}),
    i(896048),
    i(321073);
var n = i(627968);
i(64700);
var l = i(311907),
    a = i(397927),
    o = i(308368),
    r = i(544420),
    d = i(212245),
    c = i(688810),
    u = i(429913),
    s = i(655116),
    p = i(160768),
    A = i(341335),
    b = i(286617),
    y = i(533207),
    I = i(881335),
    f = i(961350),
    v = i(734057),
    O = i(498642),
    g = i(71393),
    j = i(576705),
    E = i(290863),
    m = i(994500),
    h = i(309010),
    S = i(461213),
    _ = i(287809),
    N = i(977997),
    T = i(689168),
    C = i(562153),
    P = i(795816),
    x = i(933958),
    D = i(447031),
    L = i(170148),
    U = i(902169),
    w = i(969151),
    G = i(550151),
    V = i(833349),
    Y = i(765379),
    k = i(946255),
    M = i(360469),
    R = i(652215),
    J = i(272984),
    K = i(985018);

function Q(e, t) {
    let { analyticsLocations: Q } = (0, c.Ay)(),
        X = (0, l.bG)([_.default], () => _.default.getCurrentUser()),
        $ = (0, l.bG)([x.Ay], () => x.Ay.getSelfEmbeddedActivities()),
        B = (0, l.yK)([S.A], () =>
            S.A.getActivities().filter(
                (e) => null == e.application_id || !(null == $ ? void 0 : $.has(e.application_id)),
            ),
        ),
        H = (0, l.yK)([E.A], () => (null != t ? E.A.getActivities(t.id, null == e ? void 0 : e.getGuildId()) : []), [
            t,
            e,
        ]),
        q = (0, l.yK)([x.Ay], () => {
            let i = (null == e ? void 0 : e.id) != null ? x.Ay.getEmbeddedActivitiesForChannel(e.id) : x.Am;
            return null != t
                ? i.filter((e) => {
                      let { userIds: i } = e;
                      return i.has(t.id);
                  })
                : i;
        }, [t, e]),
        F = (0, l.bG)([j.A], () => null == e || e.isPrivate() || j.A.can(R.xBc.SEND_MESSAGES, e), [e]),
        Z = (0, l.yK)(
            [T.A],
            () => [
                ...H.map(
                    (e) => null != e.application_id && T.A.getState(e.application_id, R.xL.JOIN) === R.eAD.LOADING,
                ),
                ...q.map((e) => T.A.getState(e.applicationId, R.xL.JOIN) === R.eAD.LOADING),
            ],
            [H, q],
        ),
        W = (0, u.A)([
            ...H.filter((e) => (null == e ? void 0 : e.application_id) != null).map((e) => e.application_id),
            ...q.map((e) => e.applicationId),
        ]),
        z = null == e ? void 0 : e.id,
        ee = (0, l.yK)(
            [v.A, g.A, O.A, m.A, h.A, N.A, j.A],
            () => [
                ...H.map((e) =>
                    (0, U.A)({
                        user: null != t ? t : X,
                        activity: e,
                        application: W.find((t) => (null == t ? void 0 : t.id) === e.application_id),
                        channelId: z,
                        currentUser: X,
                        isEmbedded: (0, Y.A)(e),
                        ChannelStore: v.A,
                        GuildStore: g.A,
                        GuildMemberCountStore: O.A,
                        RelationshipStore: m.A,
                        SelectedChannelStore: h.A,
                        VoiceStateStore: N.A,
                        PermissionStore: j.A,
                    }),
                ),
                ...q.map((e) => {
                    let i = null != t ? t : X;
                    return (
                        null != i &&
                        (0, G.Ay)({
                            userId: i.id,
                            application: W.find((t) => (null == t ? void 0 : t.id) === e.applicationId),
                            channelId: z,
                            currentUser: X,
                            isActivitiesEnabledForCurrentPlatform: (0, L.A)(),
                            ChannelStore: v.A,
                            GuildStore: g.A,
                            VoiceStateStore: N.A,
                            PermissionStore: j.A,
                        }) === G.Gy.CAN_JOIN
                    );
                }),
            ],
            [H, W, z, X, q, t],
        ),
        et = (0, l.yK)(
            [s.A, f.default],
            () => H.map((e) => (e.type === R.$pd.LISTENING && null != t ? (0, b.A)(s.A, f.default, t, e) : void 0)),
            [t, H],
        ),
        ei = (0, d.p)();
    if (!F && (null == e ? void 0 : e.type) !== R.rbe.GUILD_VOICE) return null;
    let en = (i, n) => {
            null != e
                ? o.A.sendActivityInvite({
                      type: i,
                      channelId: e.id,
                      activity: n,
                      location: R.ThZ.CONTEXT_MENU,
                  })
                : null != t &&
                  o.A.sendActivityInviteUser({
                      type: i,
                      userId: t.id,
                      activity: n,
                      location: R.ThZ.CONTEXT_MENU,
                  });
        },
        el = async (e) => {
            let i = (0, V.A)(e, R.jUm.EMBEDDED),
                n = h.A.getVoiceChannelId(),
                l = v.A.getChannel(n);
            if (
                (await r.A.join({
                    userId: t.id,
                    sessionId: e.session_id,
                    applicationId: e.application_id,
                    channelId: n,
                    messageId: null,
                    intent: M.W9.PLAY,
                    embedded: i,
                    locationObject: ei.location,
                    analyticsLocations: Q,
                }),
                !i)
            ) {
                var a;
                (0, k.A)({
                    type: R.UqL.JOIN,
                    userId: t.id,
                    guildId: null == l ? void 0 : l.guild_id,
                    channelId: n,
                    channelType: null == l ? void 0 : l.type,
                    applicationId: e.application_id,
                    partyId: null == (a = e.party) ? void 0 : a.id,
                    locationObject: ei.location,
                    analyticsLocations: Q,
                });
            }
        },
        ea = async (t) => {
            await (0, D.A)({
                applicationId: t.applicationId,
                activityChannelId: null == e ? void 0 : e.id,
                locationObject: ei.location,
                analyticsLocations: Q,
            });
        },
        eo = [];
    return (
        null == $ ||
            $.forEach((l) => {
                let o = (null == t ? void 0 : t.id) != null && l.userIds.has(null == t ? void 0 : t.id),
                    r = j.A.can(R.xBc.CREATE_INSTANT_INVITE, e),
                    d = W.find((e) => (null == e ? void 0 : e.id) === l.applicationId);
                null != l.launchId &&
                    !o &&
                    r &&
                    null != d &&
                    eo.push(
                        (0, n.jsx)(
                            a.Drp,
                            {
                                id: "invite-to-join-embedded",
                                label: K.intl.string(K.t["3fRySx"]),
                                subtext: d.name,
                                action: () => {
                                    ((l, o) => {
                                        let r = v.A.getChannel(l),
                                            d = null == r ? void 0 : g.A.getGuild(r.guild_id);
                                        if (null != r && null != d) {
                                            if (null != t)
                                                return P.Ue({
                                                    channelId: r.id,
                                                    applicationId: o,
                                                    userId: t.id,
                                                    location: R.PE1.CONTEXT_MENU,
                                                    inviteAnalyticsMetadata: {
                                                        source: R.PE1.ACTIVITY_INVITE,
                                                    },
                                                });
                                            if (null != e && e.type === R.rbe.GUILD_VOICE)
                                                return (0, a.mMO)(
                                                    async () => {
                                                        let { default: t } = await Promise.all([
                                                            i.e("43600"),
                                                            i.e("28136"),
                                                            i.e("88332"),
                                                            i.e("92779"),
                                                        ]).then(i.bind(i, 234355));
                                                        return (i) => {
                                                            var l, a;
                                                            return (0, n.jsx)(
                                                                t,
                                                                ((l = (function (e) {
                                                                    for (var t = 1; t < arguments.length; t++) {
                                                                        var i =
                                                                                null != arguments[t]
                                                                                    ? arguments[t]
                                                                                    : {},
                                                                            n = Object.keys(i);
                                                                        "function" ==
                                                                            typeof Object.getOwnPropertySymbols &&
                                                                            (n = n.concat(
                                                                                Object.getOwnPropertySymbols(i).filter(
                                                                                    function (e) {
                                                                                        return Object.getOwnPropertyDescriptor(
                                                                                            i,
                                                                                            e,
                                                                                        ).enumerable;
                                                                                    },
                                                                                ),
                                                                            )),
                                                                            n.forEach(function (t) {
                                                                                var n;
                                                                                (n = i[t]),
                                                                                    t in e
                                                                                        ? Object.defineProperty(e, t, {
                                                                                              value: n,
                                                                                              enumerable: !0,
                                                                                              configurable: !0,
                                                                                              writable: !0,
                                                                                          })
                                                                                        : (e[t] = n);
                                                                            });
                                                                    }
                                                                    return e;
                                                                })({}, i)),
                                                                (a = a =
                                                                    {
                                                                        guild: d,
                                                                        channel: r,
                                                                        applicationId: o,
                                                                        analyticsLocation:
                                                                            e.type === R.rbe.GUILD_VOICE
                                                                                ? R.liQ.GUILD_CHANNEL
                                                                                : R.liQ.DM_CHANNEL,
                                                                        source: R.PE1.ACTIVITY_INVITE,
                                                                    }),
                                                                Object.getOwnPropertyDescriptors
                                                                    ? Object.defineProperties(
                                                                          l,
                                                                          Object.getOwnPropertyDescriptors(a),
                                                                      )
                                                                    : (function (e, t) {
                                                                          var i = Object.keys(e);
                                                                          if (Object.getOwnPropertySymbols) {
                                                                              var n = Object.getOwnPropertySymbols(e);
                                                                              i.push.apply(i, n);
                                                                          }
                                                                          return i;
                                                                      })(Object(a)).forEach(function (e) {
                                                                          Object.defineProperty(
                                                                              l,
                                                                              e,
                                                                              Object.getOwnPropertyDescriptor(a, e),
                                                                          );
                                                                      }),
                                                                l),
                                                            );
                                                        };
                                                    },
                                                    {
                                                        modalKey: "use-activity-items-embedded-invite-modal",
                                                    },
                                                );
                                            if ((null == e ? void 0 : e.id) != null)
                                                return P.tk({
                                                    activityChannelId: r.id,
                                                    invitedChannelId: e.id,
                                                    applicationId: o,
                                                    location: R.PE1.CONTEXT_MENU,
                                                    inviteAnalyticsMetadata: {
                                                        source: R.PE1.ACTIVITY_INVITE,
                                                    },
                                                });
                                        }
                                    })((0, w.H)(l.location), l.applicationId);
                                },
                            },
                            "self-embedded-".concat(l.applicationId),
                        ),
                    );
            }),
        B.forEach((e, i) => {
            (null == t ? void 0 : t.id) !== f.default.getId() &&
                (e.type === R.$pd.PLAYING && (0, V.A)(e, R.jUm.JOIN)
                    ? eo.push(
                          (0, n.jsx)(
                              a.Drp,
                              {
                                  id: "invite-to-join",
                                  label: K.intl.string(K.t["3fRySx"]),
                                  subtext: e.name,
                                  action: () => en(R.xL.JOIN, e),
                              },
                              "self".concat(i),
                          ),
                      )
                    : e.type === R.$pd.LISTENING &&
                      (0, V.A)(e, R.jUm.SYNC) &&
                      eo.push(
                          (0, n.jsx)(
                              a.Drp,
                              {
                                  id: "invite-to-listen",
                                  label: K.intl.string(K.t["5vvGpV"]),
                                  subtext: e.name,
                                  action: () => en(R.xL.LISTEN, e),
                              },
                              "self".concat(i),
                          ),
                      ));
        }),
        eo.length > 0 && eo.push((0, n.jsx)(a.bXX, {}, "menu-separator")),
        H.forEach((i, l) => {
            let o = (0, V.A)(i, R.jUm.EMBEDDED),
                r = (0, V.A)(i, R.jUm.CONTEXTLESS);
            if (
                i.type === R.$pd.PLAYING &&
                (0, V.A)(i, R.jUm.JOIN) &&
                (!o || r) &&
                null != i.session_id &&
                null != i.application_id
            )
                if (ee[l]) {
                    let e = Z[l];
                    eo.push(
                        (0, n.jsx)(
                            a.Drp,
                            {
                                id: "join",
                                label: e ? K.intl.string(K.t.bf6Ci7) : K.intl.string(K.t.VJlc0S),
                                disabled: e,
                                loading: e,
                                subtext: i.name,
                                action: () => el(i),
                            },
                            l,
                        ),
                    );
                } else
                    eo.push(
                        (0, n.jsx)(
                            a.Drp,
                            {
                                id: "ask-to-join",
                                label: K.intl.string(K.t.OKsSCR),
                                subtext: i.name,
                                action: () => en(R.xL.JOIN_REQUEST, i),
                            },
                            l,
                        ),
                    );
            else if (i.type === R.$pd.LISTENING && (0, V.A)(i, R.jUm.SYNC) && null != et[l]) {
                let o = et[l],
                    { playDisabled: r, syncDisabled: d } = o;
                eo.push(
                    (0, n.jsx)(
                        a.Drp,
                        {
                            id: "spotify-play-".concat(i.session_id),
                            action: () => (0, I.A)(o, J.Qp.USER_ACTIVITY_PLAY),
                            label: (0, p.A)(o, J.Qp.USER_ACTIVITY_PLAY),
                            subtext: r
                                ? (0, A.A)(
                                      o,
                                      J.Qp.USER_ACTIVITY_PLAY,
                                      null != e ? C.Ay.getNickname(e.guild_id, e.id, t) : void 0,
                                  )
                                : void 0,
                            disabled: r,
                        },
                        "spotify-play-".concat(i.session_id),
                    ),
                    (0, n.jsx)(
                        a.Drp,
                        {
                            id: "spotify-sync-".concat(i.session_id),
                            action: () => (0, y.A)(o, J.Qp.USER_ACTIVITY_SYNC),
                            label: K.intl.string(K.t.gXYoq2),
                            subtext: d
                                ? (0, A.A)(
                                      o,
                                      J.Qp.USER_ACTIVITY_SYNC,
                                      null != e ? C.Ay.getNickname(e.guild_id, e.id, t) : void 0,
                                  )
                                : void 0,
                            disabled: d,
                        },
                        "spotify-sync-".concat(i.session_id),
                    ),
                );
            }
        }),
        q.forEach((e, t) => {
            var i;
            let l = e.userIds.has(null != (i = null == X ? void 0 : X.id) ? i : R.dJq),
                o = t + H.length,
                r = Z[o] || l,
                d = K.intl.string(K.t["4i2vj+"]);
            l ? (d = K.intl.string(K.t["0OiwfH"])) : Z[o] && (d = K.intl.string(K.t.bf6Ci7));
            let c = W.find((t) => (null == t ? void 0 : t.id) === e.applicationId);
            ee[o] &&
                null != c &&
                eo.push(
                    (0, n.jsx)(
                        a.Drp,
                        {
                            id: "embedded-activity-join-".concat(e.applicationId),
                            label: d,
                            disabled: r,
                            loading: Z[o],
                            subtext: c.name,
                            action: () => ea(e),
                        },
                        "embedded-activity-".concat(e.applicationId),
                    ),
                );
        }),
        eo
    );
}
