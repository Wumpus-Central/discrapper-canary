i.d(e, {
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

function Q(t, e) {
    let { analyticsLocations: Q } = (0, c.Ay)(),
        X = (0, l.bG)([_.default], () => _.default.getCurrentUser()),
        $ = (0, l.bG)([x.Ay], () => x.Ay.getSelfEmbeddedActivities()),
        B = (0, l.yK)([S.A], () =>
            S.A.getActivities().filter(
                (t) => null == t.application_id || !(null == $ ? void 0 : $.has(t.application_id)),
            ),
        ),
        H = (0, l.yK)([E.A], () => (null != e ? E.A.getActivities(e.id, null == t ? void 0 : t.getGuildId()) : []), [
            e,
            t,
        ]),
        q = (0, l.yK)([x.Ay], () => {
            let i = (null == t ? void 0 : t.id) != null ? x.Ay.getEmbeddedActivitiesForChannel(t.id) : x.Am;
            return null != e
                ? i.filter((t) => {
                      let { userIds: i } = t;
                      return i.has(e.id);
                  })
                : i;
        }, [e, t]),
        F = (0, l.bG)([j.A], () => null == t || t.isPrivate() || j.A.can(R.xBc.SEND_MESSAGES, t), [t]),
        Z = (0, l.yK)(
            [T.A],
            () => [
                ...H.map(
                    (t) => null != t.application_id && T.A.getState(t.application_id, R.xL.JOIN) === R.eAD.LOADING,
                ),
                ...q.map((t) => T.A.getState(t.applicationId, R.xL.JOIN) === R.eAD.LOADING),
            ],
            [H, q],
        ),
        W = (0, u.A)([
            ...H.filter((t) => (null == t ? void 0 : t.application_id) != null).map((t) => t.application_id),
            ...q.map((t) => t.applicationId),
        ]),
        z = null == t ? void 0 : t.id,
        tt = (0, l.yK)(
            [v.A, g.A, O.A, m.A, h.A, N.A, j.A],
            () => [
                ...H.map((t) =>
                    (0, U.A)({
                        user: null != e ? e : X,
                        activity: t,
                        application: W.find((e) => (null == e ? void 0 : e.id) === t.application_id),
                        channelId: z,
                        currentUser: X,
                        isEmbedded: (0, Y.A)(t),
                        ChannelStore: v.A,
                        GuildStore: g.A,
                        GuildMemberCountStore: O.A,
                        RelationshipStore: m.A,
                        SelectedChannelStore: h.A,
                        VoiceStateStore: N.A,
                        PermissionStore: j.A,
                    }),
                ),
                ...q.map((t) => {
                    let i = null != e ? e : X;
                    return (
                        null != i &&
                        (0, G.Ay)({
                            userId: i.id,
                            application: W.find((e) => (null == e ? void 0 : e.id) === t.applicationId),
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
            [H, W, z, X, q, e],
        ),
        te = (0, l.yK)(
            [s.A, f.default],
            () => H.map((t) => (t.type === R.$pd.LISTENING && null != e ? (0, b.A)(s.A, f.default, e, t) : void 0)),
            [e, H],
        ),
        ti = (0, d.p)();
    if (!F && (null == t ? void 0 : t.type) !== R.rbe.GUILD_VOICE) return null;
    let tn = (i, n) => {
            null != t
                ? o.A.sendActivityInvite({
                      type: i,
                      channelId: t.id,
                      activity: n,
                      location: R.ThZ.CONTEXT_MENU,
                  })
                : null != e &&
                  o.A.sendActivityInviteUser({
                      type: i,
                      userId: e.id,
                      activity: n,
                      location: R.ThZ.CONTEXT_MENU,
                  });
        },
        tl = async (t) => {
            let i = (0, V.A)(t, R.jUm.EMBEDDED),
                n = h.A.getVoiceChannelId(),
                l = v.A.getChannel(n);
            if (
                (await r.A.join({
                    userId: e.id,
                    sessionId: t.session_id,
                    applicationId: t.application_id,
                    channelId: n,
                    messageId: null,
                    intent: M.W9.PLAY,
                    embedded: i,
                    locationObject: ti.location,
                    analyticsLocations: Q,
                }),
                !i)
            ) {
                var a;
                (0, k.A)({
                    type: R.UqL.JOIN,
                    userId: e.id,
                    guildId: null == l ? void 0 : l.guild_id,
                    channelId: n,
                    channelType: null == l ? void 0 : l.type,
                    applicationId: t.application_id,
                    partyId: null == (a = t.party) ? void 0 : a.id,
                    locationObject: ti.location,
                    analyticsLocations: Q,
                });
            }
        },
        ta = async (e) => {
            await (0, D.A)({
                applicationId: e.applicationId,
                activityChannelId: null == t ? void 0 : t.id,
                locationObject: ti.location,
                analyticsLocations: Q,
            });
        },
        to = [];
    return (
        null == $ ||
            $.forEach((l) => {
                let o = (null == e ? void 0 : e.id) != null && l.userIds.has(null == e ? void 0 : e.id),
                    r = j.A.can(R.xBc.CREATE_INSTANT_INVITE, t),
                    d = W.find((t) => (null == t ? void 0 : t.id) === l.applicationId);
                null != l.launchId &&
                    !o &&
                    r &&
                    null != d &&
                    to.push(
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
                                            if (null != e)
                                                return P.Ue({
                                                    channelId: r.id,
                                                    applicationId: o,
                                                    userId: e.id,
                                                    location: R.PE1.CONTEXT_MENU,
                                                    inviteAnalyticsMetadata: {
                                                        source: R.PE1.ACTIVITY_INVITE,
                                                    },
                                                });
                                            if (null != t && t.type === R.rbe.GUILD_VOICE)
                                                return (0, a.mMO)(
                                                    async () => {
                                                        let { default: e } = await Promise.all([
                                                            i.e("43600"),
                                                            i.e("28136"),
                                                            i.e("41278"),
                                                        ]).then(i.bind(i, 234355));
                                                        return (i) => {
                                                            var l, a;
                                                            return (0, n.jsx)(
                                                                e,
                                                                ((l = (function (t) {
                                                                    for (var e = 1; e < arguments.length; e++) {
                                                                        var i =
                                                                                null != arguments[e]
                                                                                    ? arguments[e]
                                                                                    : {},
                                                                            n = Object.keys(i);
                                                                        "function" ==
                                                                            typeof Object.getOwnPropertySymbols &&
                                                                            (n = n.concat(
                                                                                Object.getOwnPropertySymbols(i).filter(
                                                                                    function (t) {
                                                                                        return Object.getOwnPropertyDescriptor(
                                                                                            i,
                                                                                            t,
                                                                                        ).enumerable;
                                                                                    },
                                                                                ),
                                                                            )),
                                                                            n.forEach(function (e) {
                                                                                var n;
                                                                                (n = i[e]),
                                                                                    e in t
                                                                                        ? Object.defineProperty(t, e, {
                                                                                              value: n,
                                                                                              enumerable: !0,
                                                                                              configurable: !0,
                                                                                              writable: !0,
                                                                                          })
                                                                                        : (t[e] = n);
                                                                            });
                                                                    }
                                                                    return t;
                                                                })({}, i)),
                                                                (a = a =
                                                                    {
                                                                        guild: d,
                                                                        channel: r,
                                                                        applicationId: o,
                                                                        analyticsLocation:
                                                                            t.type === R.rbe.GUILD_VOICE
                                                                                ? R.liQ.GUILD_CHANNEL
                                                                                : R.liQ.DM_CHANNEL,
                                                                        source: R.PE1.ACTIVITY_INVITE,
                                                                    }),
                                                                Object.getOwnPropertyDescriptors
                                                                    ? Object.defineProperties(
                                                                          l,
                                                                          Object.getOwnPropertyDescriptors(a),
                                                                      )
                                                                    : (function (t, e) {
                                                                          var i = Object.keys(t);
                                                                          if (Object.getOwnPropertySymbols) {
                                                                              var n = Object.getOwnPropertySymbols(t);
                                                                              i.push.apply(i, n);
                                                                          }
                                                                          return i;
                                                                      })(Object(a)).forEach(function (t) {
                                                                          Object.defineProperty(
                                                                              l,
                                                                              t,
                                                                              Object.getOwnPropertyDescriptor(a, t),
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
                                            if ((null == t ? void 0 : t.id) != null)
                                                return P.tk({
                                                    activityChannelId: r.id,
                                                    invitedChannelId: t.id,
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
        B.forEach((t, i) => {
            (null == e ? void 0 : e.id) !== f.default.getId() &&
                (t.type === R.$pd.PLAYING && (0, V.A)(t, R.jUm.JOIN)
                    ? to.push(
                          (0, n.jsx)(
                              a.Drp,
                              {
                                  id: "invite-to-join",
                                  label: K.intl.string(K.t["3fRySx"]),
                                  subtext: t.name,
                                  action: () => tn(R.xL.JOIN, t),
                              },
                              "self".concat(i),
                          ),
                      )
                    : t.type === R.$pd.LISTENING &&
                      (0, V.A)(t, R.jUm.SYNC) &&
                      to.push(
                          (0, n.jsx)(
                              a.Drp,
                              {
                                  id: "invite-to-listen",
                                  label: K.intl.string(K.t["5vvGpV"]),
                                  subtext: t.name,
                                  action: () => tn(R.xL.LISTEN, t),
                              },
                              "self".concat(i),
                          ),
                      ));
        }),
        to.length > 0 && to.push((0, n.jsx)(a.bXX, {}, "menu-separator")),
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
                if (tt[l]) {
                    let t = Z[l];
                    to.push(
                        (0, n.jsx)(
                            a.Drp,
                            {
                                id: "join",
                                label: t ? K.intl.string(K.t.bf6Ci7) : K.intl.string(K.t.VJlc0S),
                                disabled: t,
                                loading: t,
                                subtext: i.name,
                                action: () => tl(i),
                            },
                            l,
                        ),
                    );
                } else
                    to.push(
                        (0, n.jsx)(
                            a.Drp,
                            {
                                id: "ask-to-join",
                                label: K.intl.string(K.t.OKsSCR),
                                subtext: i.name,
                                action: () => tn(R.xL.JOIN_REQUEST, i),
                            },
                            l,
                        ),
                    );
            else if (i.type === R.$pd.LISTENING && (0, V.A)(i, R.jUm.SYNC) && null != te[l]) {
                let o = te[l],
                    { playDisabled: r, syncDisabled: d } = o;
                to.push(
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
                                      null != t ? C.Ay.getNickname(t.guild_id, t.id, e) : void 0,
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
                                      null != t ? C.Ay.getNickname(t.guild_id, t.id, e) : void 0,
                                  )
                                : void 0,
                            disabled: d,
                        },
                        "spotify-sync-".concat(i.session_id),
                    ),
                );
            }
        }),
        q.forEach((t, e) => {
            var i;
            let l = t.userIds.has(null != (i = null == X ? void 0 : X.id) ? i : R.dJq),
                o = e + H.length,
                r = Z[o] || l,
                d = K.intl.string(K.t["4i2vj+"]);
            l ? (d = K.intl.string(K.t["0OiwfH"])) : Z[o] && (d = K.intl.string(K.t.bf6Ci7));
            let c = W.find((e) => (null == e ? void 0 : e.id) === t.applicationId);
            tt[o] &&
                null != c &&
                to.push(
                    (0, n.jsx)(
                        a.Drp,
                        {
                            id: "embedded-activity-join-".concat(t.applicationId),
                            label: d,
                            disabled: r,
                            loading: Z[o],
                            subtext: c.name,
                            action: () => ta(t),
                        },
                        "embedded-activity-".concat(t.applicationId),
                    ),
                );
        }),
        to
    );
}
