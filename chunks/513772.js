e.d(n, { l: () => w });
var l = e(582128),
    i = e(855986),
    a = e(308368),
    r = e(273626),
    s = e(597798),
    o = e(212245),
    c = e(933958),
    u = e(211449),
    d = e(969151),
    A = e(95701),
    f = e(734057),
    g = e(977997),
    m = e(776677),
    p = e(550151),
    x = e(55730),
    I = e(874546),
    _ = e(765379),
    N = e(946255),
    E = e(323073),
    T = e(688810),
    h = e(429913),
    C = e(878014),
    S = e(366430),
    y = e(498642),
    v = e(71393),
    O = e(491009),
    j = e(576705),
    P = e(994500),
    R = e(309010),
    L = e(894768),
    b = e(287809),
    M = e(689168),
    U = e(723702),
    D = e(928550),
    G = e(652215),
    Y = e(917550),
    V = e(792996);
function w(t) {
    let n,
        {
            activity: e,
            embeddedActivity: w,
            user: k,
            onGameJoin: W,
            onClose: B,
            location: H,
            supportsAskToJoin: z = !0,
        } = t,
        { analyticsLocations: X } = (0, T.Ay)(H ?? []),
        [$, F] = l.useState(!1),
        Q = w?.applicationId ?? e?.application_id,
        J = null != w || (0, _.A)(e),
        q = (0, i.bG)([b.default], () => b.default.getCurrentUser()),
        Z = k.id === q?.id,
        K = (function (t) {
            let { channelId: n, userId: e, activity: l } = t,
                i = f.A.getChannel(n);
            return (
                (l?.session_id == null || (null != i && (0, A.pQ)(i.type))
                    ? n
                    : g.A.getVoiceStateForSession(e, l?.session_id)?.channelId) ?? void 0
            );
        })({ channelId: (0, d.H)(w?.location), userId: k.id, activity: e }),
        tt = (0, D.au)(Q),
        tn = J || (0, x.A)(e, G.jUm.SUPPORTS_JOIN_URL) || null != tt,
        te = (0, i.bG)([c.Ay], () =>
            Array.from(c.Ay.getSelfEmbeddedActivities().values()).some((t) => {
                let { applicationId: n, location: l } = t;
                return (n === e?.application_id || n === w?.applicationId) && (0, d.H)(l) === K;
            }),
        ),
        tl = (0, i.bG)(
            [M.A],
            () => null != e && null != e.application_id && M.A.getState(e.application_id, G.xL.JOIN) === G.eAD.LOADING,
        ),
        ti = (0, h.h)(Q),
        ta = (0, S.VS)(ti),
        tr = (0, p.vG)({ userId: k.id, activity: e, channelId: K, application: ti }),
        ts = (0, i.bG)([f.A], () => f.A.getChannel(K), [K]),
        to = (0, E.vL)(ts),
        tc = (0, i.bG)([f.A, v.A, y.A, P.A, R.Ay, g.A, j.A, O.A, L.A, c.Ay], () =>
            null != w
                ? tr === p.Gy.CAN_JOIN
                    ? m.o.CAN_JOIN
                    : m.o.CANNOT_JOIN
                : (0, m.A)({
                      user: k,
                      activity: e,
                      application: ti,
                      channelId: K,
                      currentUser: q,
                      isContentGated: to,
                      isEmbedded: J,
                      ChannelStore: f.A,
                      GuildStore: v.A,
                      GuildMemberCountStore: y.A,
                      RelationshipStore: P.A,
                      SelectedChannelStore: R.Ay,
                      VoiceStateStore: g.A,
                      PermissionStore: j.A,
                      LocalActivityStore: O.A,
                      SelfPresenceStore: L.A,
                      EmbeddedActivitiesStore: c.Ay,
                  }),
        ),
        tu = (0, i.bG)(
            [c.Ay],
            () =>
                !!Array.from(c.Ay.getSelfEmbeddedActivities().values()).some(
                    (t) => t.applicationId === w?.applicationId && t.location.id === w?.location.id,
                ),
        ),
        td = (0, o.p)();
    if ((!J && !(0, I.Ay)(e)) || (J && null == w && (null == e || !(0, x.A)(e, G.jUm.CONTEXTLESS)))) return null;
    let tA = !U.isPlatformEmbedded;
    if (!((0, x.A)(e, G.jUm.JOIN) || J) || null == Q) return null;
    let tf = (!J && tc === m.o.JOINED) || (J && tu),
        tg = !Z || J,
        tm = tg && !tf && (tA || tn) && !$ && !te;
    tf
        ? (n = V.intl.string(V.t.TYSymS))
        : tg
          ? tA || tn || null == e || (n = V.intl.formatToPlainString(V.t.SqJBnN, { name: e.name }))
          : (n = V.intl.string(V.t["0OiwfH"]));
    let tp = w?.launchId ?? e?.session_id;
    if ((tc === m.o.CANNOT_JOIN && !z) || (tc === m.o.CANNOT_JOIN && (0, C.D)(ti)) || (!tm && !$ && null == n))
        return null;
    let tx = tc === m.o.CAN_JOIN ? V.intl.string(V.t.VJlc0S) : V.intl.string(V.t.OKsSCR);
    return (
        tf && (tx = V.intl.string(V.t.DPfdsq)),
        {
            buttonCTA: tx,
            tooltip: n,
            handleJoinRequest: async function () {
                let t = !1;
                async function n() {
                    let t;
                    (F(!0),
                        null != e &&
                            (t = await a.A.sendActivityInviteUser({
                                type: G.xL.JOIN_REQUEST,
                                userId: k.id,
                                activity: e,
                                location: G.ThZ.USER_ACTIVITY_ACTIONS,
                            })),
                        null != t && s.default.selectPrivateChannel(t.id));
                }
                if (J && !ta) {
                    if (null == Q) return;
                    if (tc !== m.o.CAN_JOIN) return n();
                    if (
                        (t = await (0, u.A)({
                            applicationId: Q,
                            activityChannelId: K,
                            locationObject: td.location,
                            analyticsLocations: X,
                        }))
                    )
                        return void B?.();
                }
                if (!t) {
                    if (tc === m.o.CAN_JOIN) {
                        (W?.(),
                            (async function (t, n) {
                                if (null == tp || null == Q) return;
                                let e = (0, x.A)(n, G.jUm.EMBEDDED),
                                    l = R.Ay.getVoiceChannelId(),
                                    i = f.A.getChannel(l);
                                (await r.A.join({
                                    userId: t.id,
                                    sessionId: tp,
                                    applicationId: Q,
                                    channelId: l,
                                    messageId: null,
                                    intent: Y.W.PLAY,
                                    embedded: e,
                                    locationObject: td.location,
                                    analyticsLocations: X,
                                }),
                                    e ||
                                        (0, N.A)({
                                            type: G.UqL.JOIN,
                                            userId: t.id,
                                            guildId: i?.guild_id,
                                            channelId: l,
                                            channelType: i?.type,
                                            applicationId: Q,
                                            partyId: null != n ? n?.party?.id : "",
                                            locationObject: td.location,
                                            analyticsLocations: X,
                                        }));
                            })(k, e),
                            B?.());
                        return;
                    }
                    await n();
                }
            },
            isEnabled: tm,
            isJoining: tl,
            isEmbedded: J,
        }
    );
}
