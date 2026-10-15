n.d(e, { l: () => V });
var l = n(582128),
    i = n(17928),
    a = n(308368),
    r = n(780907),
    s = n(730852),
    o = n(212245),
    c = n(933958),
    u = n(62583),
    d = n(969151),
    A = n(95701),
    f = n(734057),
    g = n(977997),
    p = n(776677),
    m = n(550151),
    x = n(55730),
    _ = n(765379),
    I = n(946255),
    N = n(323073),
    E = n(688810),
    h = n(429913),
    T = n(878014),
    C = n(25451),
    S = n(498642),
    v = n(71393),
    y = n(480595),
    O = n(576705),
    j = n(994500),
    P = n(309010),
    R = n(461213),
    L = n(287809),
    b = n(689168),
    M = n(723702),
    U = n(928550),
    D = n(652215),
    G = n(818023),
    Y = n(105292);
function V(t) {
    let e,
        {
            activity: n,
            embeddedActivity: V,
            user: w,
            onGameJoin: k,
            onClose: W,
            location: B,
            supportsAskToJoin: H = !0,
        } = t,
        { analyticsLocations: z } = (0, E.Ay)(B ?? []),
        [X, $] = l.useState(!1),
        F = V?.applicationId ?? n?.application_id,
        Q = null != V || (0, _.A)(n),
        J = (0, i.bG)([L.default], () => L.default.getCurrentUser()),
        q = w.id === J?.id,
        Z = (function (t) {
            let { channelId: e, userId: n, activity: l } = t,
                i = f.A.getChannel(e);
            return (
                (l?.session_id == null || (null != i && (0, A.pQ)(i.type))
                    ? e
                    : g.A.getVoiceStateForSession(n, l?.session_id)?.channelId) ?? void 0
            );
        })({ channelId: (0, d.H)(V?.location), userId: w.id, activity: n }),
        K = (0, U.au)(F),
        tt = Q || (0, x.A)(n, D.jUm.SUPPORTS_JOIN_URL) || null != K,
        te = (0, i.bG)([c.Ay], () =>
            Array.from(c.Ay.getSelfEmbeddedActivities().values()).some((t) => {
                let { applicationId: e, location: l } = t;
                return (e === n?.application_id || e === V?.applicationId) && (0, d.H)(l) === Z;
            }),
        ),
        tn = (0, i.bG)(
            [b.A],
            () => null != n && null != n.application_id && b.A.getState(n.application_id, D.xL.JOIN) === D.eAD.LOADING,
        ),
        tl = (0, h.h)(F),
        ti = (0, C.X)(tl),
        ta = (0, m.vG)({ userId: w.id, activity: n, channelId: Z, application: tl }),
        tr = (0, i.bG)([f.A], () => f.A.getChannel(Z), [Z]),
        ts = (0, N.vL)(tr),
        to = (0, i.bG)([f.A, v.A, S.A, j.A, P.Ay, g.A, O.A, y.A, R.A, c.Ay], () =>
            null != V
                ? ta === m.Gy.CAN_JOIN
                    ? p.o.CAN_JOIN
                    : p.o.CANNOT_JOIN
                : (0, p.A)({
                      user: w,
                      activity: n,
                      application: tl,
                      channelId: Z,
                      currentUser: J,
                      isContentGated: ts,
                      isEmbedded: Q,
                      ChannelStore: f.A,
                      GuildStore: v.A,
                      GuildMemberCountStore: S.A,
                      RelationshipStore: j.A,
                      SelectedChannelStore: P.Ay,
                      VoiceStateStore: g.A,
                      PermissionStore: O.A,
                      LocalActivityStore: y.A,
                      SelfPresenceStore: R.A,
                      EmbeddedActivitiesStore: c.Ay,
                  }),
        ),
        tc = (0, i.bG)(
            [c.Ay],
            () =>
                !!Array.from(c.Ay.getSelfEmbeddedActivities().values()).some(
                    (t) => t.applicationId === V?.applicationId && t.location.id === V?.location.id,
                ),
        ),
        tu = (0, o.p)();
    if (Q && null == V && (null == n || !(0, x.A)(n, D.jUm.CONTEXTLESS))) return null;
    let td = !M.isPlatformEmbedded;
    if (!((0, x.A)(n, D.jUm.JOIN) || Q) || null == F) return null;
    let tA = (!Q && to === p.o.JOINED) || (Q && tc),
        tf = !q || Q,
        tg = tf && !tA && (td || tt) && !X && !te;
    tA
        ? (e = Y.intl.string(Y.t.TYSymS))
        : tf
          ? td || tt || null == n || (e = Y.intl.formatToPlainString(Y.t.SqJBnN, { name: n.name }))
          : (e = Y.intl.string(Y.t["0OiwfH"]));
    let tp = V?.launchId ?? n?.session_id;
    async function tm(t, e) {
        if (null == tp || null == F) return;
        let n = (0, x.A)(e, D.jUm.EMBEDDED),
            l = P.Ay.getVoiceChannelId(),
            i = f.A.getChannel(l);
        (await r.Ay.join({
            userId: t.id,
            sessionId: tp,
            applicationId: F,
            channelId: l,
            messageId: null,
            intent: G.W9.PLAY,
            embedded: n,
            locationObject: tu.location,
            analyticsLocations: z,
        }),
            n ||
                (0, I.A)({
                    type: D.UqL.JOIN,
                    userId: t.id,
                    guildId: i?.guild_id,
                    channelId: l,
                    channelType: i?.type,
                    applicationId: F,
                    partyId: null != e ? e?.party?.id : "",
                    locationObject: tu.location,
                    analyticsLocations: z,
                }));
    }
    async function tx() {
        let t = !1;
        async function e() {
            let t;
            ($(!0),
                null != n &&
                    (t = await a.A.sendActivityInviteUser({
                        type: D.xL.JOIN_REQUEST,
                        userId: w.id,
                        activity: n,
                        location: D.ThZ.USER_ACTIVITY_ACTIONS,
                    })),
                null != t && s.default.selectPrivateChannel(t.id));
        }
        if (Q && !ti) {
            if (null == F) return;
            if (to !== p.o.CAN_JOIN) return e();
            if (
                (t = await (0, u.A)({
                    applicationId: F,
                    activityChannelId: Z,
                    locationObject: tu.location,
                    analyticsLocations: z,
                }))
            )
                return void W?.();
        }
        if (!t) {
            if (to === p.o.CAN_JOIN) {
                (k?.(), tm(w, n), W?.());
                return;
            }
            await e();
        }
    }
    if ((to === p.o.CANNOT_JOIN && !H) || (to === p.o.CANNOT_JOIN && (0, T.D)(tl)) || (!tg && !X && null == e))
        return null;
    let t_ = to === p.o.CAN_JOIN ? Y.intl.string(Y.t.VJlc0S) : Y.intl.string(Y.t.OKsSCR);
    return (
        tA && (t_ = Y.intl.string(Y.t.DPfdsq)),
        { buttonCTA: t_, tooltip: e, handleJoinRequest: tx, isEnabled: tg, isJoining: tn, isEmbedded: Q }
    );
}
