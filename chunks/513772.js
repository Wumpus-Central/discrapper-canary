n.d(t, { l: () => k });
var l = n(582128),
    i = n(855986),
    a = n(308368),
    r = n(273626),
    s = n(597798),
    o = n(212245),
    u = n(933958),
    c = n(211449),
    d = n(969151),
    m = n(95701),
    A = n(734057),
    p = n(977997),
    h = n(776677),
    f = n(550151),
    g = n(55730),
    x = n(874546),
    I = n(765379),
    v = n(946255),
    T = n(323073),
    S = n(688810),
    y = n(429913),
    N = n(878014),
    E = n(366430),
    C = n(498642),
    j = n(71393),
    _ = n(491009),
    b = n(576705),
    P = n(994500),
    R = n(309010),
    O = n(894768),
    D = n(287809),
    U = n(689168),
    L = n(723702),
    M = n(928550),
    G = n(652215),
    w = n(917550),
    Y = n(792996);
function k(e) {
    let t,
        {
            activity: n,
            embeddedActivity: k,
            user: V,
            onGameJoin: $,
            onClose: F,
            location: H,
            supportsAskToJoin: B = !0,
        } = e,
        { analyticsLocations: J } = (0, S.Ay)(H ?? []),
        [W, z] = l.useState(!1),
        Z = k?.applicationId ?? n?.application_id,
        X = null != k || (0, I.A)(n),
        Q = (0, i.bG)([D.default], () => D.default.getCurrentUser()),
        q = V.id === Q?.id,
        K = (function (e) {
            let { channelId: t, userId: n, activity: l } = e,
                i = A.A.getChannel(t);
            return (
                (l?.session_id == null || (null != i && (0, m.pQ)(i.type))
                    ? t
                    : p.A.getVoiceStateForSession(n, l?.session_id)?.channelId) ?? void 0
            );
        })({ channelId: (0, d.H)(k?.location), userId: V.id, activity: n }),
        ee = (0, M.au)(Z),
        et = X || (0, g.A)(n, G.jUm.SUPPORTS_JOIN_URL) || null != ee,
        en = (0, i.bG)([u.Ay], () =>
            Array.from(u.Ay.getSelfEmbeddedActivities().values()).some((e) => {
                let { applicationId: t, location: l } = e;
                return (t === n?.application_id || t === k?.applicationId) && (0, d.H)(l) === K;
            }),
        ),
        el = (0, i.bG)(
            [U.A],
            () => null != n && null != n.application_id && U.A.getState(n.application_id, G.xL.JOIN) === G.eAD.LOADING,
        ),
        ei = (0, y.h)(Z),
        ea = (0, E.VS)(ei),
        er = (0, f.vG)({ userId: V.id, activity: n, channelId: K, application: ei }),
        es = (0, i.bG)([A.A], () => A.A.getChannel(K), [K]),
        eo = (0, T.vL)(es),
        eu = (0, i.bG)([A.A, j.A, C.A, P.A, R.Ay, p.A, b.A, _.A, O.A, u.Ay], () =>
            null != k
                ? er === f.Gy.CAN_JOIN
                    ? h.o.CAN_JOIN
                    : h.o.CANNOT_JOIN
                : (0, h.A)({
                      user: V,
                      activity: n,
                      application: ei,
                      channelId: K,
                      currentUser: Q,
                      isContentGated: eo,
                      isEmbedded: X,
                      ChannelStore: A.A,
                      GuildStore: j.A,
                      GuildMemberCountStore: C.A,
                      RelationshipStore: P.A,
                      SelectedChannelStore: R.Ay,
                      VoiceStateStore: p.A,
                      PermissionStore: b.A,
                      LocalActivityStore: _.A,
                      SelfPresenceStore: O.A,
                      EmbeddedActivitiesStore: u.Ay,
                  }),
        ),
        ec = (0, i.bG)(
            [u.Ay],
            () =>
                !!Array.from(u.Ay.getSelfEmbeddedActivities().values()).some(
                    (e) => e.applicationId === k?.applicationId && e.location.id === k?.location.id,
                ),
        ),
        ed = (0, o.p)();
    if ((!X && !(0, x.Ay)(n)) || (X && null == k && (null == n || !(0, g.A)(n, G.jUm.CONTEXTLESS)))) return null;
    let em = !L.isPlatformEmbedded;
    if (!((0, g.A)(n, G.jUm.JOIN) || X) || null == Z) return null;
    let eA = (!X && eu === h.o.JOINED) || (X && ec),
        ep = !q || X,
        eh = ep && !eA && (em || et) && !W && !en;
    eA
        ? (t = Y.intl.string(Y.t.TYSymS))
        : ep
          ? em || et || null == n || (t = Y.intl.formatToPlainString(Y.t.SqJBnN, { name: n.name }))
          : (t = Y.intl.string(Y.t["0OiwfH"]));
    let ef = k?.launchId ?? n?.session_id;
    if ((eu === h.o.CANNOT_JOIN && !B) || (eu === h.o.CANNOT_JOIN && (0, N.D)(ei)) || (!eh && !W && null == t))
        return null;
    let eg = eu === h.o.CAN_JOIN ? Y.intl.string(Y.t.VJlc0S) : Y.intl.string(Y.t.OKsSCR);
    return (
        eA && (eg = Y.intl.string(Y.t.DPfdsq)),
        {
            buttonCTA: eg,
            tooltip: t,
            handleJoinRequest: async function () {
                let e = !1;
                async function t() {
                    let e;
                    (z(!0),
                        null != n &&
                            (e = await a.A.sendActivityInviteUser({
                                type: G.xL.JOIN_REQUEST,
                                userId: V.id,
                                activity: n,
                                location: G.ThZ.USER_ACTIVITY_ACTIONS,
                            })),
                        null != e && s.default.selectPrivateChannel(e.id));
                }
                if (X && !ea) {
                    if (null == Z) return;
                    if (eu !== h.o.CAN_JOIN) return t();
                    if (
                        (e = await (0, c.A)({
                            applicationId: Z,
                            activityChannelId: K,
                            locationObject: ed.location,
                            analyticsLocations: J,
                        }))
                    )
                        return void F?.();
                }
                if (!e) {
                    if (eu === h.o.CAN_JOIN) {
                        ($?.(),
                            (async function (e, t) {
                                if (null == ef || null == Z) return;
                                let n = (0, g.A)(t, G.jUm.EMBEDDED),
                                    l = R.Ay.getVoiceChannelId(),
                                    i = A.A.getChannel(l);
                                (await r.A.join({
                                    userId: e.id,
                                    sessionId: ef,
                                    applicationId: Z,
                                    channelId: l,
                                    messageId: null,
                                    intent: w.W.PLAY,
                                    embedded: n,
                                    locationObject: ed.location,
                                    analyticsLocations: J,
                                }),
                                    n ||
                                        (0, v.A)({
                                            type: G.UqL.JOIN,
                                            userId: e.id,
                                            guildId: i?.guild_id,
                                            channelId: l,
                                            channelType: i?.type,
                                            applicationId: Z,
                                            partyId: null != t ? t?.party?.id : "",
                                            locationObject: ed.location,
                                            analyticsLocations: J,
                                        }));
                            })(V, n),
                            F?.());
                        return;
                    }
                    await t();
                }
            },
            isEnabled: eh,
            isJoining: el,
            isEmbedded: X,
        }
    );
}
